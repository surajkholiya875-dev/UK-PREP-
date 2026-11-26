import * as mammoth from 'mammoth';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import * as XLSX from 'xlsx';
import {
  ExamCommission,
  QuestionDifficulty,
  QuestionFormat,
  QuestionType,
} from '../../types/academic';
import { normalizeTextKey } from '../syllabusHierarchy';
import {
  detectCommissionFromText,
  detectQuestionFormat,
  detectPyqSignal,
  extractMarksAndWordLimit,
  extractYearFromText,
  matchSubjectAndTopic,
  normalizeDigits,
  optionLabelToIndex,
  ParseContext,
  parseRawTextToCandidates,
} from './parseTextQuestions';
import { ExtractedQuestionCandidate, FileExtractionReport } from './types';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = '';
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function getFileExtension(name: string): string {
  const dot = name.lastIndexOf('.');
  return dot >= 0 ? name.slice(dot + 1).toLowerCase().trim() : '';
}

function normalizeHeaderKey(header: string): string {
  return header
    .normalize('NFKC')
    .trim()
    .toLowerCase()
    .replace(/[\s\-./]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function pickField(record: Record<string, unknown>, aliases: string[]): unknown {
  const map = new Map<string, unknown>();
  for (const [k, v] of Object.entries(record)) {
    map.set(normalizeHeaderKey(k), v);
  }
  for (const alias of aliases) {
    const val = map.get(normalizeHeaderKey(alias));
    if (val !== undefined && val !== null && String(val).trim() !== '') {
      return val;
    }
  }
  return undefined;
}

function parseDifficulty(raw: unknown, fallback: QuestionDifficulty): QuestionDifficulty {
  const v = normalizeTextKey(String(raw ?? ''));
  if (v === 'foundation' || v === 'easy' || v === 'basic') return 'foundation';
  if (v === 'advanced' || v === 'hard' || v === 'mains') return 'advanced';
  if (v === 'standard' || v === 'medium' || v === 'moderate') return 'standard';
  return fallback;
}

function parseCommission(raw: unknown, fallback: ExamCommission): ExamCommission {
  const text = String(raw ?? '').trim();
  if (!text) return fallback;
  const detected = detectCommissionFromText(text);
  if (detected) return detected;
  const key = normalizeTextKey(text);
  if (key.includes('ukpsc')) return 'UKPSC_PCS';
  if (key.includes('uksssc')) return 'UKSSSC';
  if (key.includes('upsc')) return 'UPSC';
  if (key === 'other') return 'Other';
  return fallback;
}

function mapStructuredRowToCandidate(
  row: Record<string, unknown>,
  idx: number,
  context: ParseContext
): ExtractedQuestionCandidate | null {
  const stemRaw = pickField(row, [
    'stem',
    'question',
    'question_text',
    'question_stem',
    'q_text',
    'प्रश्न',
  ]);
  const stem = typeof stemRaw === 'string' ? stemRaw.trim() : String(stemRaw ?? '').trim();
  if (stem.length < 5) return null;

  let options: string[] = [];
  const rawOptionsField = pickField(row, ['options', 'choices']);
  if (Array.isArray(rawOptionsField)) {
    options = rawOptionsField.map((o) => String(o ?? '').trim()).filter(Boolean).slice(0, 5);
  } else {
    const a = pickField(row, ['option_a', 'opt_a', 'opta', 'optiona', 'a', 'option_1', 'choice_a']);
    const b = pickField(row, ['option_b', 'opt_b', 'optb', 'optionb', 'b', 'option_2', 'choice_b']);
    const c = pickField(row, ['option_c', 'opt_c', 'optc', 'optionc', 'c', 'option_3', 'choice_c']);
    const d = pickField(row, ['option_d', 'opt_d', 'optd', 'optiond', 'd', 'option_4', 'choice_d']);
    const e = pickField(row, ['option_e', 'opt_e', 'opte', 'optione', 'e', 'option_5', 'choice_e']);
    options = [a, b, c, d, e]
      .map((val) => (val === undefined ? '' : String(val).trim()))
      .filter(Boolean);
  }

  const rawAnswer = pickField(row, [
    'correctoptionindex',
    'correct_option_index',
    'correct_option',
    'correct_answer',
    'answer_key',
    'answer',
    'ans',
    'key',
    'उत्तर',
  ]);
  let correctOptionIndex = -1;
  let answerKeyDetected = '';
  if (rawAnswer !== undefined) {
    if (typeof rawAnswer === 'number' && Number.isInteger(rawAnswer)) {
      if (rawAnswer >= 0 && rawAnswer < options.length && pickField(row, ['correctoptionindex', 'correct_option_index']) !== undefined) {
        correctOptionIndex = rawAnswer;
        answerKeyDetected = String.fromCharCode(65 + rawAnswer);
      } else if (rawAnswer >= 1 && rawAnswer <= options.length) {
        correctOptionIndex = rawAnswer - 1;
        answerKeyDetected = String.fromCharCode(65 + rawAnswer - 1);
      }
    } else {
      const str = String(rawAnswer).trim();
      answerKeyDetected = str;
      const letterIdx = optionLabelToIndex(str.replace(/[()]/g, ''));
      if (letterIdx >= 0 && letterIdx < options.length) {
        correctOptionIndex = letterIdx;
      } else {
        const matchedOption = options.findIndex(
          (opt) => normalizeTextKey(opt) === normalizeTextKey(str)
        );
        if (matchedOption >= 0) {
          correctOptionIndex = matchedOption;
        }
      }
    }
  }

  const explanation = String(
    pickField(row, ['explanation', 'solution', 'rationale', 'व्याख्या']) ?? ''
  ).trim();
  const modelAnswer = String(
    pickField(row, ['model_answer', 'modelanswer', 'answer_outline', 'आदर्श_उत्तर']) ?? ''
  ).trim();
  const examName = String(
    pickField(row, ['exam_name', 'examname', 'exam', 'examination']) ?? ''
  ).trim();
  const rawYear = pickField(row, ['exam_year', 'examyear', 'year', 'वर्ष']);
  const examYear =
    typeof rawYear === 'number' && Number.isInteger(rawYear) && rawYear >= 1990 && rawYear <= 2100
      ? rawYear
      : extractYearFromText(String(rawYear ?? ''));

  const paperName = String(pickField(row, ['paper_name', 'papername', 'paper']) ?? '').trim();
  const qNumRaw = pickField(row, ['question_number', 'questionnumber', 'q_no', 'qno', 'sno']);
  const questionNumber = qNumRaw !== undefined ? normalizeDigits(String(qNumRaw).trim()) : String(idx + 1);
  const sourceReference = String(
    pickField(row, ['source_reference', 'sourcereference', 'source', 'reference', 'page_ref']) ?? ''
  ).trim();
  const rawPage = pickField(row, ['source_page', 'page', 'page_number']);
  const sourcePage = Number.isInteger(Number(rawPage)) && Number(rawPage) > 0 ? Number(rawPage) : undefined;

  const extractedMW = extractMarksAndWordLimit(stem);
  const rawMarks = pickField(row, ['marks', 'max_marks', 'अंक']);
  const marks =
    rawMarks !== undefined && Number.isFinite(Number(rawMarks)) && Number(rawMarks) > 0
      ? Number(rawMarks)
      : extractedMW.marks;
  const rawWordLimit = pickField(row, ['word_limit', 'wordlimit', 'words', 'शब्द_सीमा']);
  const wordLimit =
    rawWordLimit !== undefined && Number.isInteger(Number(rawWordLimit)) && Number(rawWordLimit) > 0
      ? Number(rawWordLimit)
      : extractedMW.wordLimit;

  const explicitFormat = String(
    pickField(row, ['question_format', 'questionformat', 'format']) ?? ''
  ).trim();
  const explicitCategory = String(
    pickField(row, ['question_type', 'questiontype', 'category', 'type']) ?? ''
  ).trim();
  const explicitCommission = pickField(row, ['exam_commission', 'examcommission', 'commission']);

  const questionFormat: QuestionFormat = detectQuestionFormat({
    options,
    stem,
    marks,
    wordLimit,
    explicitFormat,
  });

  const isPyq = detectPyqSignal({
    text: `${stem} ${examName} ${paperName} ${sourceReference}`,
    examName,
    examYear,
    explicitCategory,
  });
  const questionType: QuestionType =
    normalizeTextKey(explicitCategory) === 'current_affairs'
      ? 'current_affairs'
      : isPyq
        ? 'pyq'
        : 'mcq';

  const detectedCommission = detectCommissionFromText(`${examName} ${paperName} ${stem}`);
  const examCommission = parseCommission(explicitCommission, context.defaultCommission);

  const subjectHint = String(
    pickField(row, ['subject', 'subject_title', 'subjectname', 'विषय']) ?? ''
  ).trim();
  const topicHint = String(
    pickField(row, ['topic', 'topic_title', 'topicname', 'अध्याय']) ?? ''
  ).trim();
  const explicitTopicId = String(pickField(row, ['topic_id', 'topicid']) ?? '').trim();
  const directTopic = explicitTopicId
    ? context.topics.find((t) => t.id === explicitTopicId)
    : undefined;

  const matched = directTopic
    ? { subjectId: directTopic.subjectId, topicId: directTopic.id }
    : matchSubjectAndTopic({
        subjectHint,
        topicHint,
        stem,
        subjects: context.subjects,
        topics: context.topics,
        defaultSubjectId: context.defaultSubjectId,
        defaultTopicId: context.defaultTopicId,
      });

  const warnings: string[] = [];
  if (questionFormat === 'objective' && correctOptionIndex < 0) {
    warnings.push('No answer key found in file; select correct option before saving.');
  }
  if (questionFormat === 'other') {
    warnings.push('Format uncertain; review classification.');
  }
  if (!matched.topicId) {
    warnings.push('Target topic not auto-matched; assign Subject and Topic.');
  }
  if (detectedCommission && detectedCommission !== examCommission) {
    warnings.push(
      `Detected ${detectedCommission} markers while assigned commission is ${examCommission}.`
    );
  }

  return {
    rowId: `row-${Date.now().toString(36)}-${idx}-${Math.random().toString(36).slice(2, 6)}`,
    selected: true,
    sourceFile: context.sourceFile,
    sourcePage,
    questionNumber,
    stem,
    options: questionFormat === 'objective' ? options : [],
    correctOptionIndex: questionFormat === 'objective' ? correctOptionIndex : -1,
    answerKeyDetected,
    explanation,
    modelAnswer,
    questionFormat,
    questionType,
    examCommission,
    detectedCommissionHint: detectedCommission,
    difficulty: parseDifficulty(
      pickField(row, ['difficulty', 'level']),
      questionFormat === 'descriptive' ? 'advanced' : 'standard'
    ),
    examName,
    examYear,
    paperName,
    marks,
    wordLimit,
    sourceReference: isPyq && !sourceReference ? `${context.sourceFile}, Row ${idx + 1}` : sourceReference,
    subjectHint,
    topicHint,
    subjectId: matched.subjectId,
    topicId: matched.topicId,
    isVerified: false, // Never auto-verified on upload
    isPublished: questionType !== 'pyq',
    confidence:
      questionFormat === 'objective'
        ? options.length >= 4 && correctOptionIndex >= 0
          ? 'high'
          : 'medium'
        : 'high',
    warnings,
    errors: [],
    duplicateType: 'none',
  };
}

function extractFromJsonText(jsonText: string, context: ParseContext): ExtractedQuestionCandidate[] {
  const parsed = JSON.parse(jsonText) as unknown;
  const rows: Record<string, unknown>[] = [];

  if (Array.isArray(parsed)) {
    for (const item of parsed) {
      if (item && typeof item === 'object') {
        const rec = item as Record<string, unknown>;
        if (Array.isArray(rec.mcqs) || Array.isArray(rec.verifiedPyqs)) {
          const topicMeta = {
            topicId: rec.topicId,
            topicTitle: rec.topicTitle,
          };
          for (const q of (Array.isArray(rec.mcqs) ? rec.mcqs : []) as Record<string, unknown>[]) {
            rows.push({ ...topicMeta, ...q, questionType: 'mcq' });
          }
          for (const q of (Array.isArray(rec.verifiedPyqs) ? rec.verifiedPyqs : []) as Record<string, unknown>[]) {
            rows.push({ ...topicMeta, ...q, questionType: 'pyq' });
          }
        } else {
          rows.push(rec);
        }
      }
    }
  } else if (parsed && typeof parsed === 'object') {
    const obj = parsed as Record<string, unknown>;
    const list = Array.isArray(obj.questions)
      ? obj.questions
      : Array.isArray(obj.items)
        ? obj.items
        : Array.isArray(obj.data)
          ? obj.data
          : [obj];
    for (const item of list) {
      if (item && typeof item === 'object') rows.push(item as Record<string, unknown>);
    }
  }

  return rows
    .map((row, idx) => mapStructuredRowToCandidate(row, idx, context))
    .filter((c): c is ExtractedQuestionCandidate => Boolean(c));
}

function extractFromWorkbook(workbook: XLSX.WorkBook, context: ParseContext): ExtractedQuestionCandidate[] {
  const candidates: ExtractedQuestionCandidate[] = [];
  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) continue;
    const jsonRows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: '' });
    if (jsonRows.length > 0) {
      const mapped = jsonRows
        .map((row, idx) => mapStructuredRowToCandidate(row, idx, context))
        .filter((c): c is ExtractedQuestionCandidate => Boolean(c));
      if (mapped.length > 0) {
        candidates.push(...mapped);
        continue;
      }
    }
    // Fallback: sheet has unstructured text lines
    const aoa = XLSX.utils.sheet_to_json<unknown[]>(sheet, { header: 1 });
    const rawText = aoa
      .map((row) =>
        Array.isArray(row)
          ? row.map((cell) => String(cell ?? '').trim()).filter(Boolean).join(' ')
          : ''
      )
      .filter(Boolean)
      .join('\n');
    if (rawText) {
      candidates.push(...parseRawTextToCandidates(rawText, context));
    }
  }
  return candidates;
}

async function extractPdfTextAndOcr(params: {
  file: File;
  arrayBuffer: ArrayBuffer;
  idToken?: string;
}): Promise<{
  text: string;
  pageCount: number;
  usedOcr: boolean;
  ocrPagesProcessed: number;
  needsOcrReason?: string;
}> {
  const { file, arrayBuffer, idToken } = params;
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
  const pdf = await loadingTask.promise;
  const pageCount = pdf.numPages;

  const pageTexts: string[] = [];
  let totalNonWhitespace = 0;

  for (let p = 1; p <= pageCount; p += 1) {
    const page = await pdf.getPage(p);
    const content = await page.getTextContent();
    const lines: string[] = [];
    let currentLine = '';
    let lastY: number | null = null;

    for (const item of content.items) {
      if (!('str' in item)) continue;
      const textItem = item as { str: string; transform?: number[]; hasEOL?: boolean };
      const y = Array.isArray(textItem.transform) ? textItem.transform[5] : null;
      if (lastY !== null && y !== null && Math.abs(y - lastY) > 4) {
        if (currentLine.trim()) lines.push(currentLine.trim());
        currentLine = textItem.str;
      } else {
        currentLine += (currentLine && textItem.str && !currentLine.endsWith(' ') ? ' ' : '') + textItem.str;
      }
      if (textItem.hasEOL) {
        if (currentLine.trim()) lines.push(currentLine.trim());
        currentLine = '';
        lastY = null;
      } else if (y !== null) {
        lastY = y;
      }
    }
    if (currentLine.trim()) lines.push(currentLine.trim());

    const pageBody = lines.join('\n').trim();
    totalNonWhitespace += pageBody.replace(/\s+/g, '').length;
    pageTexts.push(`[Page ${p}]\n${pageBody}`);
  }

  const avgCharsPerPage = pageCount > 0 ? totalNonWhitespace / pageCount : 0;
  if (avgCharsPerPage >= 30) {
    return {
      text: pageTexts.join('\n\n'),
      pageCount,
      usedOcr: false,
      ocrPagesProcessed: 0,
    };
  }

  // Scanned / image-based PDF detected: attempt server OCR
  if (!idToken) {
    return {
      text: '',
      pageCount,
      usedOcr: false,
      ocrPagesProcessed: 0,
      needsOcrReason:
        'This PDF appears scanned or image-based without selectable text. Sign in as Admin so OCR can process it, or upload a text-based PDF/DOCX/CSV.',
    };
  }

  const maxOcrPages = Math.min(pageCount, 25);
  const renderedPages: Array<{ pageNumber: number; mimeType: string; imageBase64: string }> = [];

  for (let p = 1; p <= maxOcrPages; p += 1) {
    const page = await pdf.getPage(p);
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.floor(viewport.width));
    canvas.height = Math.max(1, Math.floor(viewport.height));
    const ctx = canvas.getContext('2d');
    if (!ctx) continue;
    await page.render({ canvas, viewport }).promise;
    const dataUrl = canvas.toDataURL('image/jpeg', 0.84);
    renderedPages.push({
      pageNumber: p,
      mimeType: 'image/jpeg',
      imageBase64: dataUrl,
    });
  }

  // Send in chunks of up to 8 pages so JSON payload stays well within server limits
  const ocrTexts: string[] = [];
  for (let start = 0; start < renderedPages.length; start += 8) {
    const batch = renderedPages.slice(start, start + 8);
    const resp = await fetch('/api/admin/bulk-questions/ocr', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${idToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileName: file.name,
        pages: batch,
      }),
    });
    const payload = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      return {
        text: '',
        pageCount,
        usedOcr: false,
        ocrPagesProcessed: 0,
        needsOcrReason:
          payload.error ||
          'This PDF appears scanned/image-based without readable text, and OCR could not extract text.',
      };
    }
    if (typeof payload.text === 'string' && payload.text.trim()) {
      ocrTexts.push(payload.text.trim());
    }
  }

  return {
    text: ocrTexts.join('\n\n'),
    pageCount,
    usedOcr: true,
    ocrPagesProcessed: renderedPages.length,
  };
}

export async function extractQuestionsFromFiles(params: {
  files: File[];
  context: Omit<ParseContext, 'sourceFile'>;
  idToken?: string;
  onProgress?: (message: string) => void;
}): Promise<{
  candidates: ExtractedQuestionCandidate[];
  reports: FileExtractionReport[];
}> {
  const { files, context, idToken, onProgress } = params;
  const allCandidates: ExtractedQuestionCandidate[] = [];
  const reports: FileExtractionReport[] = [];

  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    const ext = getFileExtension(file.name);
    const parseCtx: ParseContext = { ...context, sourceFile: file.name };
    onProgress?.(`Reading ${file.name} (${i + 1}/${files.length})...`);

    try {
      if (ext === 'json') {
        const text = await file.text();
        const extracted = extractFromJsonText(text, parseCtx);
        allCandidates.push(...extracted);
        reports.push({
          fileName: file.name,
          fileType: 'JSON',
          sizeBytes: file.size,
          status: 'parsed',
          method: 'json',
          extractedCount: extracted.length,
          message: extracted.length
            ? `Extracted ${extracted.length} question(s) from JSON.`
            : 'JSON parsed, but no valid question records were found.',
        });
      } else if (ext === 'txt') {
        const text = await file.text();
        const extracted = parseRawTextToCandidates(text, parseCtx);
        allCandidates.push(...extracted);
        reports.push({
          fileName: file.name,
          fileType: 'TXT',
          sizeBytes: file.size,
          status: 'parsed',
          method: 'txt',
          extractedCount: extracted.length,
          message: extracted.length
            ? `Extracted ${extracted.length} question(s) from UTF-8 text.`
            : 'No numbered questions detected in TXT file.',
        });
      } else if (ext === 'csv') {
        const text = await file.text();
        const wb = XLSX.read(text, { type: 'string' });
        const extracted = extractFromWorkbook(wb, parseCtx);
        allCandidates.push(...extracted);
        reports.push({
          fileName: file.name,
          fileType: 'CSV',
          sizeBytes: file.size,
          status: 'parsed',
          method: 'csv',
          extractedCount: extracted.length,
          message: extracted.length
            ? `Extracted ${extracted.length} question(s) from CSV.`
            : 'No question rows detected in CSV.',
        });
      } else if (ext === 'xlsx' || ext === 'xls') {
        const buffer = await file.arrayBuffer();
        const wb = XLSX.read(buffer, { type: 'array', codepage: 65001 });
        const extracted = extractFromWorkbook(wb, parseCtx);
        allCandidates.push(...extracted);
        reports.push({
          fileName: file.name,
          fileType: ext.toUpperCase(),
          sizeBytes: file.size,
          status: 'parsed',
          method: 'xlsx',
          extractedCount: extracted.length,
          message: extracted.length
            ? `Extracted ${extracted.length} question(s) from ${ext.toUpperCase()} workbook.`
            : `No question rows detected in ${ext.toUpperCase()} workbook.`,
        });
      } else if (ext === 'docx') {
        const buffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer: buffer });
        const extracted = parseRawTextToCandidates(result.value || '', parseCtx);
        allCandidates.push(...extracted);
        reports.push({
          fileName: file.name,
          fileType: 'DOCX',
          sizeBytes: file.size,
          status: 'parsed',
          method: 'docx',
          extractedCount: extracted.length,
          message: extracted.length
            ? `Extracted ${extracted.length} question(s) from DOCX.`
            : 'DOCX had readable text, but no numbered questions matched.',
        });
      } else if (ext === 'doc') {
        if (!idToken) {
          throw new Error('Admin authentication token required to parse legacy .doc files.');
        }
        const buffer = await file.arrayBuffer();
        const resp = await fetch('/api/admin/bulk-questions/parse-doc', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${idToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fileName: file.name,
            base64: arrayBufferToBase64(buffer),
          }),
        });
        const payload = await resp.json().catch(() => ({}));
        if (!resp.ok) {
          throw new Error(payload.error || 'Could not extract text from legacy .doc file.');
        }
        const extracted = parseRawTextToCandidates(String(payload.text || ''), parseCtx);
        allCandidates.push(...extracted);
        reports.push({
          fileName: file.name,
          fileType: 'DOC',
          sizeBytes: file.size,
          status: 'parsed',
          method: 'doc',
          extractedCount: extracted.length,
          message: extracted.length
            ? `Extracted ${extracted.length} question(s) from legacy .doc document.`
            : 'Legacy .doc parsed, but no numbered questions matched.',
        });
      } else if (ext === 'pdf') {
        const buffer = await file.arrayBuffer();
        const pdfResult = await extractPdfTextAndOcr({
          file,
          arrayBuffer: buffer,
          idToken,
        });
        if (pdfResult.needsOcrReason) {
          reports.push({
            fileName: file.name,
            fileType: 'PDF',
            sizeBytes: file.size,
            status: 'needs_ocr_or_text',
            method: 'pdf_ocr',
            pageCount: pdfResult.pageCount,
            extractedCount: 0,
            message: pdfResult.needsOcrReason,
          });
        } else {
          const extracted = parseRawTextToCandidates(pdfResult.text, parseCtx);
          allCandidates.push(...extracted);
          reports.push({
            fileName: file.name,
            fileType: 'PDF',
            sizeBytes: file.size,
            status: pdfResult.usedOcr ? 'ocr_parsed' : 'parsed',
            method: pdfResult.usedOcr ? 'pdf_ocr' : 'pdf_text',
            pageCount: pdfResult.pageCount,
            ocrPagesProcessed: pdfResult.ocrPagesProcessed,
            extractedCount: extracted.length,
            message: pdfResult.usedOcr
              ? `Scanned PDF processed via OCR (${pdfResult.ocrPagesProcessed}/${pdfResult.pageCount} page(s)); extracted ${extracted.length} question(s).`
              : `Extracted ${extracted.length} question(s) across ${pdfResult.pageCount} PDF page(s).`,
          });
        }
      } else {
        reports.push({
          fileName: file.name,
          fileType: ext ? ext.toUpperCase() : 'UNKNOWN',
          sizeBytes: file.size,
          status: 'error',
          method: 'txt',
          extractedCount: 0,
          message: `Unsupported file format ".${ext || '?'}". Supported formats: PDF, DOCX, DOC, XLSX, XLS, CSV, TXT, JSON.`,
        });
      }
    } catch (error) {
      reports.push({
        fileName: file.name,
        fileType: ext ? ext.toUpperCase() : 'FILE',
        sizeBytes: file.size,
        status: 'error',
        method: 'txt',
        extractedCount: 0,
        message: error instanceof Error ? error.message : `Failed to process "${file.name}".`,
      });
    }
  }

  return { candidates: allCandidates, reports };
}
