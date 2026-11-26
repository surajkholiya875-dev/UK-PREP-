import {
  ExamCommission,
  QuestionDifficulty,
  QuestionFormat,
  QuestionType,
  Subject,
  Topic,
} from '../../types/academic';
import { normalizeTextKey } from '../syllabusHierarchy';
import { ExtractedQuestionCandidate } from './types';

export interface ParseContext {
  sourceFile: string;
  defaultCommission: ExamCommission;
  defaultSubjectId?: string;
  defaultTopicId?: string;
  subjects: Subject[];
  topics: Topic[];
}

const DEVANAGARI_DIGITS: Record<string, string> = {
  '०': '0',
  '१': '1',
  '२': '2',
  '३': '3',
  '४': '4',
  '५': '5',
  '६': '6',
  '७': '7',
  '८': '8',
  '९': '9',
};

export function normalizeDigits(input: string): string {
  return input.replace(/[०-९]/g, (ch) => DEVANAGARI_DIGITS[ch] ?? ch);
}

export function optionLabelToIndex(rawLabel: string): number {
  const cleaned = normalizeDigits(rawLabel).trim().toLowerCase();
  if (cleaned === 'a' || cleaned === 'अ' || cleaned === 'क' || cleaned === '1') return 0;
  if (cleaned === 'b' || cleaned === 'ब' || cleaned === 'ख' || cleaned === '2') return 1;
  if (cleaned === 'c' || cleaned === 'स' || cleaned === 'ग' || cleaned === '3') return 2;
  if (cleaned === 'd' || cleaned === 'द' || cleaned === 'घ' || cleaned === '4') return 3;
  if (cleaned === 'e' || cleaned === 'इ' || cleaned === 'ङ' || cleaned === '5') return 4;
  return -1;
}

export function detectCommissionFromText(text: string): ExamCommission | null {
  const sample = normalizeDigits(text);
  if (
    /\bUKSSSC\b/i.test(sample) ||
    /\bGroup[\s-]?C\b/i.test(sample) ||
    /\b(?:VPDO|VDO|Patwari|Lekhpal|Kanishtha Sahayak|Samuh[\s-]?G|Forest Guard|Police Constable)\b/i.test(sample) ||
    /उत्तराखंड\s+अधीनस्थ\s+सेवा\s+चयन\s+आयोग|समूह\s*[-–]?\s*ग/.test(sample)
  ) {
    return 'UKSSSC';
  }
  if (
    /\bUKPSC\b/i.test(sample) ||
    /\b(?:Upper\s*PCS|Lower\s*PCS|PCS\s*Mains|RO\s*\/?\s*ARO|UK\s*PCS|APO|PCS\s*Prelims)\b/i.test(sample) ||
    /उत्तराखंड\s+लोक\s+सेवा\s+आयोग|पीसीएस/.test(sample)
  ) {
    return 'UKPSC_PCS';
  }
  if (/\bUPSC\b|\bIAS\b|\bCSE\b/i.test(sample)) {
    return 'UPSC';
  }
  return null;
}

export function extractYearFromText(text: string): number | undefined {
  const normalized = normalizeDigits(text);
  const matches = normalized.match(/\b(199\d|20[0-3]\d)\b/g);
  if (!matches || matches.length === 0) return undefined;
  const year = Number(matches[matches.length - 1]);
  return Number.isInteger(year) && year >= 1990 && year <= 2099 ? year : undefined;
}

export function extractExamNameHint(text: string): string {
  const normalized = normalizeDigits(text);
  const patterns = [
    /\b(UKPSC(?:\s+(?:Upper|Lower|Pre|Prelims|Mains|RO\/ARO|PCS|APO)){0,3})\b/i,
    /\b(UKSSSC(?:\s+(?:Group[\s-]?C|VDO|VPDO|Patwari|Lekhpal|Forest\s*Guard|Police|Combined)){0,3})\b/i,
    /\b(UPSC(?:\s+(?:CSE|Prelims|Mains|IAS)){0,2})\b/i,
  ];
  for (const rx of patterns) {
    const m = normalized.match(rx);
    if (m?.[1]) {
      return m[1].replace(/\s+/g, ' ').trim();
    }
  }
  return '';
}

export function extractMarksAndWordLimit(text: string): { marks?: number; wordLimit?: number } {
  const normalized = normalizeDigits(text);
  let marks: number | undefined;
  let wordLimit: number | undefined;

  const marksMatch =
    normalized.match(/(?:\[|\(|\b)(\d{1,3}(?:\.\d+)?)\s*(?:marks?|pts?|अंक)(?:\]|\)|\b)/i) ||
    normalized.match(/marks?\s*[:=-]\s*(\d{1,3}(?:\.\d+)?)/i);
  if (marksMatch?.[1]) {
    const val = Number(marksMatch[1]);
    if (Number.isFinite(val) && val > 0 && val <= 250) {
      marks = val;
    }
  }

  const wordMatch =
    normalized.match(/(?:word\s*limit\s*[:=-]?\s*|in\s+(?:about\s+)?)(\d{2,4})\s*(?:words?|शब्द)/i) ||
    normalized.match(/(?:^|[\s(,\[])(\d{2,4})\s*(?:words?|शब्द)(?:[\s),.\]]|$)/i) ||
    normalized.match(/(\d{2,4})\s*शब्दों\s*में/);
  if (wordMatch?.[1]) {
    const val = Number(wordMatch[1]);
    if (Number.isInteger(val) && val >= 10 && val <= 5000) {
      wordLimit = val;
    }
  }

  return { marks, wordLimit };
}

const DESCRIPTIVE_CUE_REGEX =
  /\b(?:discuss|explain|critically\s+examine|examine|evaluate|elucidate|elaborate|analyze|analyse|comment\s+on|write\s+(?:a\s+)?(?:short\s+)?note|describe|distinguish\s+between|differentiate|highlight|enumerate|assess|justify|compare\s+and\s+contrast|what\s+do\s+you\s+understand\s+by|throw\s+light\s+on)\b|विवेचना|व्याख्या\s+कीजिए|स्पष्ट\s+कीजिए|टिप्पणी\s+लिखिए|समीक्षा\s+कीजिए|वर्णन\s+कीजिए|समालोचनात्मक|प्रकाश\s+डालिए|आलोचनात्मक\s+परीक्षण/i;

export function detectQuestionFormat(params: {
  options: string[];
  stem: string;
  marks?: number;
  wordLimit?: number;
  sectionHint?: string;
  explicitFormat?: string;
}): QuestionFormat {
  const explicit = normalizeTextKey(params.explicitFormat);
  if (explicit === 'objective' || explicit === 'mcq' || explicit === 'prelims') return 'objective';
  if (explicit === 'descriptive' || explicit === 'mains' || explicit === 'subjective') return 'descriptive';
  if (explicit === 'other') return 'other';

  if (params.options.length >= 2) return 'objective';

  const section = normalizeTextKey(params.sectionHint);
  if (
    params.marks !== undefined ||
    params.wordLimit !== undefined ||
    DESCRIPTIVE_CUE_REGEX.test(params.stem) ||
    /\b(?:descriptive|mains|subjective|essay|long\s*answer|short\s*answer|gs\s*paper)\b|मुख्य\s+परीक्षा|वर्णनात्मक/i.test(
      section
    )
  ) {
    return 'descriptive';
  }

  return 'other';
}

export function detectPyqSignal(params: {
  text: string;
  headerText?: string;
  examName?: string;
  examYear?: number;
  explicitCategory?: string;
}): boolean {
  const explicit = normalizeTextKey(params.explicitCategory);
  if (explicit === 'pyq' || explicit === 'previous year' || explicit === 'previous_year') return true;
  if (explicit === 'practice' || explicit === 'mcq' || explicit === 'mock') return false;

  const combined = `${params.headerText || ''} ${params.text}`;
  const hasExamIndicator =
    Boolean(params.examName?.trim()) ||
    /\b(?:PYQ|Previous\s*Year|Past\s*Paper|UKPSC|UKSSSC|UPSC|PCS|RO\/ARO|VDO|VPDO|Patwari|Pre\s*20\d\d|Mains\s*20\d\d)\b/i.test(
      combined
    ) ||
    /गत\s*वर्ष|पूर्व\s*परीक्षा|विगत\s*प्रश्न/.test(combined);

  return hasExamIndicator && (Boolean(params.examYear) || /\bPYQ\b|गत\s*वर्ष|पूर्व\s*परीक्षा/i.test(combined));
}

export function matchSubjectAndTopic(params: {
  subjectHint: string;
  topicHint: string;
  stem: string;
  subjects: Subject[];
  topics: Topic[];
  defaultSubjectId?: string;
  defaultTopicId?: string;
}): { subjectId: string; topicId: string } {
  const { subjectHint, topicHint, stem, subjects, topics, defaultSubjectId = '', defaultTopicId = '' } = params;

  let resolvedSubjectId = defaultSubjectId;
  if (subjectHint.trim()) {
    const hintKey = normalizeTextKey(subjectHint);
    const exactSubj = subjects.find((s) => normalizeTextKey(s.title) === hintKey);
    const partialSubj =
      exactSubj ||
      subjects.find((s) => {
        const titleKey = normalizeTextKey(s.title);
        return titleKey.includes(hintKey) || hintKey.includes(titleKey);
      });
    if (partialSubj) {
      resolvedSubjectId = partialSubj.id;
    }
  }

  let resolvedTopicId = '';
  const candidateTopics = resolvedSubjectId
    ? topics.filter((t) => t.subjectId === resolvedSubjectId)
    : topics;

  if (topicHint.trim()) {
    const tKey = normalizeTextKey(topicHint);
    const exactTopic =
      candidateTopics.find((t) => normalizeTextKey(t.title) === tKey) ||
      topics.find((t) => normalizeTextKey(t.title) === tKey);
    const partialTopic =
      exactTopic ||
      candidateTopics.find((t) => {
        const titleKey = normalizeTextKey(t.title);
        return titleKey.length >= 4 && (titleKey.includes(tKey) || tKey.includes(titleKey));
      });
    if (partialTopic) {
      resolvedTopicId = partialTopic.id;
      resolvedSubjectId = partialTopic.subjectId || resolvedSubjectId;
    }
  }

  if (!resolvedTopicId && stem.trim()) {
    const stemKey = normalizeTextKey(stem);
    const scopedPool = resolvedSubjectId ? candidateTopics : topics;
    let bestTopic: Topic | undefined;
    let bestScore = 0;

    for (const t of scopedPool) {
      const words = normalizeTextKey(t.title)
        .split(/[^a-z0-9\u0900-\u097f]+/i)
        .filter((w) => w.length >= 4);
      if (words.length === 0) continue;
      let matches = 0;
      for (const w of words) {
        if (stemKey.includes(w)) matches += 1;
      }
      const ratio = matches / words.length;
      if (matches >= 2 && ratio >= 0.6 && matches > bestScore) {
        bestScore = matches;
        bestTopic = t;
      }
    }
    if (bestTopic) {
      resolvedTopicId = bestTopic.id;
      resolvedSubjectId = bestTopic.subjectId || resolvedSubjectId;
    }
  }

  if (!resolvedTopicId && defaultTopicId) {
    resolvedTopicId = defaultTopicId;
    const found = topics.find((t) => t.id === defaultTopicId);
    if (found?.subjectId) {
      resolvedSubjectId = found.subjectId;
    }
  }

  return { subjectId: resolvedSubjectId, topicId: resolvedTopicId };
}

function splitInlineOptions(
  line: string
): { prefix: string; options: Array<{ index: number; text: string }> } | null {
  const rx =
    /(?:^|\s)(?:\(([a-eA-Eअअबसदइकखगघङ])\)|([a-eA-Eअअबसदइकखगघङ])[.)])\s+/g;
  const matches: Array<{ idx: number; matchStart: number; contentStart: number }> = [];
  let m: RegExpExecArray | null;
  while ((m = rx.exec(line)) !== null) {
    const label = m[1] || m[2];
    const optIdx = optionLabelToIndex(label);
    if (optIdx >= 0 && optIdx <= 4) {
      matches.push({ idx: optIdx, matchStart: m.index, contentStart: m.index + m[0].length });
    }
  }
  if (matches.length < 2) return null;

  const prefix = line.slice(0, matches[0].matchStart).trim();
  const parsed: Array<{ index: number; text: string }> = [];
  for (let i = 0; i < matches.length; i += 1) {
    const cur = matches[i];
    const end = i + 1 < matches.length ? matches[i + 1].matchStart : line.length;
    const cleaned = line.slice(cur.contentStart, end).trim();
    if (cleaned) {
      parsed.push({ index: cur.idx, text: cleaned });
    }
  }
  return parsed.length >= 2 ? { prefix, options: parsed } : null;
}

function parseAnswerKeyMap(lines: string[]): Map<string, { optionIndex: number; raw: string }> {
  const keyMap = new Map<string, { optionIndex: number; raw: string }>();
  const joined = normalizeDigits(lines.join(' '));
  const pairRegex = /(?:Q\.?\s*|प्र\.?\s*)?(\d{1,4})\s*[.):\-–]\s*\(?([a-eA-Eअअबसदइकखगघङ1-5])\)?/g;
  let m: RegExpExecArray | null;
  while ((m = pairRegex.exec(joined)) !== null) {
    const qNum = m[1];
    const rawAns = m[2];
    const idx = optionLabelToIndex(rawAns);
    if (idx >= 0) {
      keyMap.set(qNum, { optionIndex: idx, raw: rawAns.toUpperCase() });
    }
  }
  return keyMap;
}

export function parseRawTextToCandidates(
  rawText: string,
  context: ParseContext
): ExtractedQuestionCandidate[] {
  const cleanText = rawText.replace(/\r\n?/g, '\n').trim();
  if (!cleanText) return [];

  const allLines = cleanText.split('\n');
  let answerKeyStartIdx = -1;
  for (let i = 0; i < allLines.length; i += 1) {
    const line = allLines[i].trim();
    if (/^(?:answer\s*key|answers|solutions?\s*key|उत्तर\s*कुंजी|उत्तरमाला)\s*[:\-–]?$/i.test(line)) {
      answerKeyStartIdx = i;
      break;
    }
  }

  const bodyLines = answerKeyStartIdx >= 0 ? allLines.slice(0, answerKeyStartIdx) : allLines;
  const answerKeyLines = answerKeyStartIdx >= 0 ? allLines.slice(answerKeyStartIdx + 1) : [];
  const docAnswerKeys = answerKeyLines.length ? parseAnswerKeyMap(answerKeyLines) : new Map();

  // Scan top header lines for global exam/year/paper/subject hints
  const preambleText = bodyLines.slice(0, Math.min(18, bodyLines.length)).join(' ');
  const docCommissionHint = detectCommissionFromText(preambleText);
  const docYearHint = extractYearFromText(preambleText);
  const docExamHint = extractExamNameHint(preambleText);

  let currentPage = 1;
  let currentSection = '';
  let currentSubjectHint = '';
  let currentTopicHint = '';
  let currentPaperHint = '';

  const blocks: Array<{
    qNum: string;
    page: number;
    section: string;
    subjectHint: string;
    topicHint: string;
    paperHint: string;
    lines: string[];
  }> = [];

  let activeBlock: (typeof blocks)[number] | null = null;

  const questionStartRegex =
    /^(?:(?:Q(?:ue(?:stion)?)?\.?|प्र(?:श्न)?\.?)\s*([0-9०-९]{1,4})\s*[.):\-–]?|([0-9०-९]{1,4})\s*[.)]\s+(?=\S))(.*)$/i;

  for (const rawLine of bodyLines) {
    const line = rawLine.trim();
    if (!line) continue;

    const pageMatch = line.match(/^\[?Page\s+(\d+)\]?$/i) || line.match(/^---\s*Page\s+(\d+)\s*---$/i);
    if (pageMatch) {
      currentPage = Number(pageMatch[1]) || currentPage;
      continue;
    }

    const subjMeta = line.match(/^(?:Subject|विषय)\s*[:\-–]\s*(.+)$/i);
    if (subjMeta) {
      currentSubjectHint = subjMeta[1].trim();
      continue;
    }
    const topicMeta = line.match(/^(?:Topic|अध्याय|उप[- ]?विषय)\s*[:\-–]\s*(.+)$/i);
    if (topicMeta) {
      currentTopicHint = topicMeta[1].trim();
      continue;
    }
    const paperMeta = line.match(/^(?:Paper|पेपर|प्रश्नपत्र)\s*[:\-–]\s*(.+)$/i);
    if (paperMeta) {
      currentPaperHint = paperMeta[1].trim();
      continue;
    }

    if (
      /^(?:Part|Section|खंड|भाग)\s+[A-Z0-9IVX]+/i.test(line) ||
      /^(?:Objective\s+Questions|Descriptive\s+Questions|Mains\s+Questions|Section\s*[-–:])/i.test(line)
    ) {
      currentSection = line;
      continue;
    }

    const qMatch = line.match(questionStartRegex);
    if (qMatch) {
      const qNum = normalizeDigits((qMatch[1] || qMatch[2] || '').trim());
      const rest = (qMatch[3] || '').trim();
      if (activeBlock) blocks.push(activeBlock);
      activeBlock = {
        qNum,
        page: currentPage,
        section: currentSection,
        subjectHint: currentSubjectHint,
        topicHint: currentTopicHint,
        paperHint: currentPaperHint,
        lines: rest ? [rest] : [],
      };
    } else if (activeBlock) {
      activeBlock.lines.push(line);
    }
  }
  if (activeBlock) blocks.push(activeBlock);

  const candidates: ExtractedQuestionCandidate[] = [];

  blocks.forEach((block, idx) => {
    const stemLines: string[] = [];
    const optionsMap = new Map<number, string>();
    let lastOptIdx: number | null = null;
    let correctOptionIndex = -1;
    let answerKeyDetected = '';
    const explanationLines: string[] = [];
    const modelAnswerLines: string[] = [];
    let mode: 'stem' | 'options' | 'explanation' | 'modelAnswer' = 'stem';

    let blockExamName = '';
    let blockYear: number | undefined;
    let blockSourceRef = '';
    let blockTopicHint = block.topicHint;
    let blockSubjectHint = block.subjectHint;
    let blockPaperHint = block.paperHint;

    for (const line of block.lines) {
      const inlineAnsMatch = line.match(
        /^(?:Ans(?:wer)?|Correct\s*(?:Answer|Option)|Key|उत्तर|सही\s*उत्तर)\s*[:\-–]\s*\(?([a-eA-Eअअबसदइकखगघङ1-5])\)?(?:\s*[-–.)]\s*(.*))?$/i
      );
      if (inlineAnsMatch) {
        const rawAns = inlineAnsMatch[1];
        const parsedIdx = optionLabelToIndex(rawAns);
        if (parsedIdx >= 0) {
          correctOptionIndex = parsedIdx;
          answerKeyDetected = rawAns.toUpperCase();
        }
        mode = 'explanation';
        if (inlineAnsMatch[2]?.trim()) {
          explanationLines.push(inlineAnsMatch[2].trim());
        }
        continue;
      }

      const expMatch = line.match(/^(?:Explanation|Exp|Sol(?:ution)?|व्याख्या|हल)\s*[:\-–]\s*(.*)$/i);
      if (expMatch) {
        mode = 'explanation';
        if (expMatch[1]?.trim()) explanationLines.push(expMatch[1].trim());
        continue;
      }

      const modelMatch = line.match(/^(?:Model\s*Answer|Answer\s*Outline|आदर्श\s*उत्तर)\s*[:\-–]\s*(.*)$/i);
      if (modelMatch) {
        mode = 'modelAnswer';
        if (modelMatch[1]?.trim()) modelAnswerLines.push(modelMatch[1].trim());
        continue;
      }

      const srcMeta = line.match(/^(?:Source|Ref(?:erence)?|स्रोत)\s*[:\-–]\s*(.+)$/i);
      if (srcMeta) {
        blockSourceRef = srcMeta[1].trim();
        continue;
      }

      const inlineTopicMeta = line.match(/^(?:Topic|अध्याय)\s*[:\-–]\s*(.+)$/i);
      if (inlineTopicMeta) {
        blockTopicHint = inlineTopicMeta[1].trim();
        continue;
      }

      const inlineSubjMeta = line.match(/^(?:Subject|विषय)\s*[:\-–]\s*(.+)$/i);
      if (inlineSubjMeta) {
        blockSubjectHint = inlineSubjMeta[1].trim();
        continue;
      }

      const inlinePaperMeta = line.match(/^(?:Paper|पेपर)\s*[:\-–]\s*(.+)$/i);
      if (inlinePaperMeta) {
        blockPaperHint = inlinePaperMeta[1].trim();
        continue;
      }

      const inlineOpts = splitInlineOptions(line);
      if (inlineOpts) {
        if (inlineOpts.prefix && mode === 'stem') {
          stemLines.push(inlineOpts.prefix);
        }
        mode = 'options';
        for (const opt of inlineOpts.options) {
          optionsMap.set(opt.index, opt.text);
          lastOptIdx = opt.index;
        }
        continue;
      }

      const singleOptMatch = line.match(/^(?:\(([a-eA-Eअअबसदइकखगघङ])\)|([a-eA-Eअअबसदइकखगघङ])[.)])\s+(.+)$/);
      if (singleOptMatch) {
        const label = singleOptMatch[1] || singleOptMatch[2];
        const optIdx = optionLabelToIndex(label);
        if (optIdx >= 0 && optIdx <= 4) {
          mode = 'options';
          optionsMap.set(optIdx, singleOptMatch[3].trim());
          lastOptIdx = optIdx;
          continue;
        }
      }

      if (mode === 'explanation') {
        explanationLines.push(line);
      } else if (mode === 'modelAnswer') {
        modelAnswerLines.push(line);
      } else if (mode === 'options' && lastOptIdx !== null) {
        optionsMap.set(lastOptIdx, `${optionsMap.get(lastOptIdx) ?? ''} ${line}`.trim());
      } else {
        stemLines.push(line);
      }
    }

    // Apply document-level Answer Key if not inline
    if (correctOptionIndex < 0 && block.qNum && docAnswerKeys.has(block.qNum)) {
      const mapped = docAnswerKeys.get(block.qNum)!;
      correctOptionIndex = mapped.optionIndex;
      answerKeyDetected = mapped.raw;
    }

    const rawStem = stemLines.join(' ').replace(/\s+/g, ' ').trim();
    if (rawStem.length < 5) return;

    const options = Array.from(optionsMap.entries())
      .sort((a, b) => a[0] - b[0])
      .map((entry) => entry[1].trim())
      .filter(Boolean)
      .slice(0, 5);

    const { marks, wordLimit } = extractMarksAndWordLimit(
      `${rawStem} ${block.lines.join(' ')}`
    );

    const fullBlockText = `${rawStem} ${block.section} ${blockPaperHint}`;
    const detectedCommission =
      detectCommissionFromText(fullBlockText) ?? docCommissionHint;

    blockExamName = extractExamNameHint(fullBlockText) || docExamHint;
    blockYear = extractYearFromText(fullBlockText) ?? docYearHint;

    const questionFormat = detectQuestionFormat({
      options,
      stem: rawStem,
      marks,
      wordLimit,
      sectionHint: block.section,
    });

    const isPyq = detectPyqSignal({
      text: fullBlockText,
      headerText: preambleText,
      examName: blockExamName,
      examYear: blockYear,
    });

    const questionType: QuestionType = isPyq ? 'pyq' : 'mcq';
    const difficulty: QuestionDifficulty =
      questionFormat === 'descriptive' ? 'advanced' : 'standard';

    const { subjectId, topicId } = matchSubjectAndTopic({
      subjectHint: blockSubjectHint,
      topicHint: blockTopicHint,
      stem: rawStem,
      subjects: context.subjects,
      topics: context.topics,
      defaultSubjectId: context.defaultSubjectId,
      defaultTopicId: context.defaultTopicId,
    });

    const warnings: string[] = [];
    if (questionFormat === 'objective' && correctOptionIndex < 0) {
      warnings.push('No answer key found in file; select correct option before saving.');
    }
    if (questionFormat === 'objective' && correctOptionIndex >= options.length) {
      warnings.push('Detected answer letter exceeds extracted option count.');
      correctOptionIndex = -1;
    }
    if (questionFormat === 'other') {
      warnings.push('Format uncertain (missing options and descriptive cues); review classification.');
    }
    if (!topicId) {
      warnings.push('Target topic not auto-matched; assign a Subject and Topic.');
    }
    if (detectedCommission && detectedCommission !== context.defaultCommission) {
      warnings.push(
        `Detected ${detectedCommission} markers in text while target commission is ${context.defaultCommission}.`
      );
    }

    const defaultSourceRef =
      blockSourceRef ||
      `${context.sourceFile}${block.page ? `, Page ${block.page}` : ''}${block.qNum ? `, Q.${block.qNum}` : ''}`;

    const confidence: ExtractedQuestionCandidate['confidence'] =
      questionFormat === 'objective'
        ? options.length >= 4 && correctOptionIndex >= 0
          ? 'high'
          : options.length >= 2
            ? 'medium'
            : 'low'
        : questionFormat === 'descriptive'
          ? rawStem.length >= 15
            ? 'high'
            : 'medium'
          : 'low';

    candidates.push({
      rowId: `row-${Date.now().toString(36)}-${idx}-${Math.random().toString(36).slice(2, 6)}`,
      selected: true,
      sourceFile: context.sourceFile,
      sourcePage: block.page,
      questionNumber: block.qNum || String(idx + 1),
      stem: rawStem,
      options: questionFormat === 'objective' ? options : [],
      correctOptionIndex: questionFormat === 'objective' ? correctOptionIndex : -1,
      answerKeyDetected,
      explanation: explanationLines.join(' ').trim(),
      modelAnswer: modelAnswerLines.join('\n').trim(),
      questionFormat,
      questionType,
      examCommission: context.defaultCommission,
      detectedCommissionHint: detectedCommission,
      difficulty,
      examName: blockExamName,
      examYear: blockYear,
      paperName: blockPaperHint,
      marks,
      wordLimit,
      sourceReference: isPyq ? defaultSourceRef : '',
      subjectHint: blockSubjectHint,
      topicHint: blockTopicHint,
      subjectId,
      topicId,
      isVerified: false, // Never auto-verified on upload
      isPublished: questionType !== 'pyq', // PYQs stay Draft until explicitly verified
      confidence,
      warnings,
      errors: [],
      duplicateType: 'none',
    });
  });

  return candidates;
}
