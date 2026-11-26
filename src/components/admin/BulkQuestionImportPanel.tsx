import React, { useCallback, useMemo, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileSpreadsheet,
  FileText,
  FileUp,
  Loader2,
  ShieldCheck,
  Trash2,
  UploadCloud,
  XCircle,
} from 'lucide-react';
import { extractQuestionsFromFiles } from '../../lib/bulkQuestionImport/extractFiles';
import {
  BulkImportSummary,
  COMMISSION_LABELS,
  ExtractedQuestionCandidate,
  FileExtractionReport,
  FORMAT_LABELS,
} from '../../lib/bulkQuestionImport/types';
import {
  buildBulkQuestionWriteOperations,
  validateCandidates,
} from '../../lib/bulkQuestionImport/validation';
import { compareNaturalText, safeSortOrder } from '../../lib/syllabusHierarchy';
import { resilientBatchUpsertAdminEntities } from '../../services/firestoreService';
import {
  Chapter,
  Course,
  ExamCommission,
  Examination,
  Question,
  QuestionDifficulty,
  QuestionFormat,
  QuestionType,
  Subject,
  Topic,
  Unit,
} from '../../types/academic';
import { CascadingTopicSelector } from './CascadingTopicSelector';

interface BulkQuestionImportPanelProps {
  adminUid: string;
  getIdToken: () => Promise<string>;
  examinations: Examination[];
  courses: Course[];
  subjects: Subject[];
  units: Unit[];
  chapters: Chapter[];
  topics: Topic[];
  existingQuestions: Question[];
  defaultCommission?: ExamCommission;
  onImportComplete: () => Promise<void> | void;
}

const ACCEPTED_EXTENSIONS = '.pdf,.docx,.doc,.xlsx,.xls,.csv,.txt,.json';

function inferExamForCommission(exams: Examination[], commission: ExamCommission): string {
  if (exams.length === 0) return '';
  if (commission === 'UKPSC_PCS') {
    const match = exams.find((e) => e.code.toUpperCase().includes('UKPSC') || e.category === 'UKPSC');
    if (match) return match.id;
  }
  if (commission === 'UKSSSC') {
    const match = exams.find((e) => e.code.toUpperCase().includes('UKSSSC') || e.category === 'UKSSSC');
    if (match) return match.id;
  }
  if (commission === 'UPSC') {
    const match = exams.find((e) => e.code.toUpperCase().includes('UPSC') || e.category === 'UPSC');
    if (match) return match.id;
  }
  return exams[0].id;
}

export function BulkQuestionImportPanel({
  adminUid,
  getIdToken,
  examinations,
  courses,
  subjects,
  units,
  chapters,
  topics,
  existingQuestions,
  defaultCommission = 'UKPSC_PCS',
  onImportComplete,
}: BulkQuestionImportPanelProps) {
  const [targetCommission, setTargetCommission] = useState<ExamCommission>(defaultCommission);
  const [selectedExaminationId, setSelectedExaminationId] = useState<string>(() =>
    inferExamForCommission(examinations, defaultCommission)
  );
  const [defaultSubjectId, setDefaultSubjectId] = useState('');
  const [defaultTopicId, setDefaultTopicId] = useState('');

  const [extracting, setExtracting] = useState(false);
  const [extractProgress, setExtractProgress] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [fileReports, setFileReports] = useState<FileExtractionReport[]>([]);
  const [rawCandidates, setRawCandidates] = useState<ExtractedQuestionCandidate[]>([]);

  // Filters
  const [formatTab, setFormatTab] = useState<'all' | QuestionFormat>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'pyq' | 'practice' | 'invalid' | 'duplicate'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRowIds, setExpandedRowIds] = useState<Record<string, boolean>>({});
  const [skipDuplicates, setSkipDuplicates] = useState(true);

  // Bulk assignment controls
  const [bulkSubjectId, setBulkSubjectId] = useState('');
  const [bulkTopicId, setBulkTopicId] = useState('');
  const [bulkExamName, setBulkExamName] = useState('');
  const [bulkExamYear, setBulkExamYear] = useState('');
  const [bulkPaperName, setBulkPaperName] = useState('');
  const [bulkSourceRef, setBulkSourceRef] = useState('');
  const [bulkVerifiedConfirm, setBulkVerifiedConfirm] = useState(false);

  // Import execution state
  const [importing, setImporting] = useState(false);
  const [importProgress, setImportProgress] = useState({ done: 0, total: 0 });
  const [importSummary, setImportSummary] = useState<BulkImportSummary | null>(null);
  const [panelError, setPanelError] = useState<string | null>(null);

  const effectiveExamId = selectedExaminationId || examinations[0]?.id || '';

  const sortedSubjects = useMemo(
    () =>
      [...subjects].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      ),
    [subjects]
  );

  const topicMap = useMemo(() => new Map(topics.map((t) => [t.id, t])), [topics]);
  const subjectMap = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);

  // Always compute validated view of candidates synchronously from rawCandidates + live Firestore state
  const validatedCandidates = useMemo(
    () =>
      validateCandidates({
        candidates: rawCandidates,
        existingQuestions,
        topics,
        chapters,
        units,
        subjects,
        courses,
        examinations,
        selectedExaminationId: effectiveExamId,
      }),
    [rawCandidates, existingQuestions, topics, chapters, units, subjects, courses, examinations, effectiveExamId]
  );

  const stats = useMemo(() => {
    let objective = 0;
    let descriptive = 0;
    let other = 0;
    let pyq = 0;
    let practice = 0;
    let invalid = 0;
    let duplicates = 0;
    let readyToImport = 0;
    let selectedCount = 0;

    for (const c of validatedCandidates) {
      if (c.questionFormat === 'objective') objective += 1;
      else if (c.questionFormat === 'descriptive') descriptive += 1;
      else other += 1;

      if (c.questionType === 'pyq') pyq += 1;
      else practice += 1;

      if (c.errors.length > 0) invalid += 1;
      if (c.duplicateType !== 'none') duplicates += 1;
      if (c.selected) selectedCount += 1;
      if (c.selected && c.errors.length === 0 && (!skipDuplicates || c.duplicateType === 'none')) {
        readyToImport += 1;
      }
    }

    return {
      total: validatedCandidates.length,
      objective,
      descriptive,
      other,
      pyq,
      practice,
      invalid,
      duplicates,
      selectedCount,
      readyToImport,
    };
  }, [validatedCandidates, skipDuplicates]);

  const displayedCandidates = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return validatedCandidates.filter((c) => {
      if (formatTab !== 'all' && c.questionFormat !== formatTab) return false;
      if (categoryFilter === 'pyq' && c.questionType !== 'pyq') return false;
      if (categoryFilter === 'practice' && c.questionType === 'pyq') return false;
      if (categoryFilter === 'invalid' && c.errors.length === 0) return false;
      if (categoryFilter === 'duplicate' && c.duplicateType === 'none') return false;
      if (
        q &&
        !c.stem.toLowerCase().includes(q) &&
        !c.examName.toLowerCase().includes(q) &&
        !c.sourceFile.toLowerCase().includes(q) &&
        !(topicMap.get(c.topicId)?.title || '').toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }, [validatedCandidates, formatTab, categoryFilter, searchQuery, topicMap]);

  const handleCommissionChange = (nextCommission: ExamCommission) => {
    setTargetCommission(nextCommission);
    const inferredExam = inferExamForCommission(examinations, nextCommission);
    if (inferredExam) {
      setSelectedExaminationId(inferredExam);
    }
  };

  const handleFilesSelected = useCallback(
    async (fileList: FileList | File[]) => {
      const files = Array.from(fileList);
      if (files.length === 0) return;

      setExtracting(true);
      setPanelError(null);
      setImportSummary(null);
      setExtractProgress(`Preparing ${files.length} file(s)...`);

      try {
        const idToken = await getIdToken();
        const { candidates, reports } = await extractQuestionsFromFiles({
          files,
          context: {
            defaultCommission: targetCommission,
            defaultSubjectId,
            defaultTopicId,
            subjects,
            topics,
          },
          idToken,
          onProgress: (msg) => setExtractProgress(msg),
        });

        setFileReports((prev) => [...reports, ...prev]);
        if (candidates.length > 0) {
          setRawCandidates((prev) => [...prev, ...candidates]);
        }
      } catch (err) {
        setPanelError(err instanceof Error ? err.message : 'Unable to extract uploaded files.');
      } finally {
        setExtracting(false);
        setExtractProgress('');
      }
    },
    [getIdToken, targetCommission, defaultSubjectId, defaultTopicId, subjects, topics]
  );

  const updateRow = (rowId: string, updater: (prev: ExtractedQuestionCandidate) => ExtractedQuestionCandidate) => {
    setRawCandidates((prev) => prev.map((row) => (row.rowId === rowId ? updater(row) : row)));
  };

  const removeRow = (rowId: string) => {
    setRawCandidates((prev) => prev.filter((row) => row.rowId !== rowId));
  };

  const applyBulkChangesToSelected = () => {
    const selectedIds = new Set(validatedCandidates.filter((c) => c.selected).map((c) => c.rowId));
    if (selectedIds.size === 0) {
      setPanelError('Select at least one row to apply bulk updates.');
      return;
    }
    setPanelError(null);
    const parsedYear = Number(bulkExamYear);
    const hasValidYear = Number.isInteger(parsedYear) && parsedYear >= 1990 && parsedYear <= 2100;

    setRawCandidates((prev) =>
      prev.map((row) => {
        if (!selectedIds.has(row.rowId)) return row;
        let next = { ...row };
        if (bulkTopicId) {
          const t = topicMap.get(bulkTopicId);
          next.topicId = bulkTopicId;
          next.subjectId = bulkSubjectId || t?.subjectId || next.subjectId;
        } else if (bulkSubjectId) {
          next.subjectId = bulkSubjectId;
        }
        if (bulkExamName.trim()) next.examName = bulkExamName.trim();
        if (hasValidYear) next.examYear = parsedYear;
        if (bulkPaperName.trim()) next.paperName = bulkPaperName.trim();
        if (bulkSourceRef.trim()) next.sourceReference = bulkSourceRef.trim();
        if (bulkVerifiedConfirm && next.questionType === 'pyq') {
          if (next.examName.trim() && Number.isInteger(next.examYear) && next.sourceReference.trim()) {
            next.isVerified = true;
            next.isPublished = true;
          }
        }
        return next;
      })
    );
  };

  const handleImportBatch = async () => {
    if (importing) return;
    setPanelError(null);

    const { operations, skippedCount } = buildBulkQuestionWriteOperations({
      candidates: validatedCandidates,
      adminUid,
      topics,
      chapters,
      units,
      subjects,
      courses,
      selectedExaminationId: effectiveExamId,
      skipDuplicates,
    });

    if (operations.length === 0) {
      setPanelError(
        'No ready-to-import questions selected. Resolve validation errors or select valid rows first.'
      );
      return;
    }

    setImporting(true);
    setImportProgress({ done: 0, total: operations.length });
    const importedRowIds = new Set<string>();
    const failedMessages: string[] = [];

    const rowIdByDocId = new Map(operations.map((item) => [item.op.id, item.rowId]));
    const existingIds = new Set(existingQuestions.map((q) => q.id));
    const resilientOps = operations.map((item) => ({
      ...item.op,
      isEdit: existingIds.has(item.op.id),
    }));

    const result = await resilientBatchUpsertAdminEntities(resilientOps, ({ processed, total }) => {
      setImportProgress({ done: processed, total });
    });

    for (const outcome of result.outcomes) {
      const rowId = rowIdByDocId.get(outcome.id);
      if (outcome.action === 'created' || outcome.action === 'updated') {
        if (rowId) importedRowIds.add(rowId);
      } else {
        failedMessages.push(`${outcome.collectionName}/${outcome.id}: ${outcome.error || 'Write failed.'}`);
      }
    }

    setImportSummary({
      extracted: validatedCandidates.length,
      readyToImport: operations.length,
      imported: result.createdCount + result.updatedCount,
      skipped: skippedCount,
      failed: result.failedCount,
      failedMessages,
    });

    if (importedRowIds.size > 0) {
      setRawCandidates((prev) => prev.filter((row) => !importedRowIds.has(row.rowId)));
      await onImportComplete();
    }
    setImporting(false);
  };

  return (
    <div className="space-y-6">
      {/* Step 1: Exam Commission & Upload Zone */}
      <section className="bg-panel border border-edge rounded-xl p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-ink">
              1. Exam Scope &amp; Multi-Format Question Upload
            </h2>
            <p className="mt-0.5 text-xs text-ink-muted">
              Upload PDF (text or scanned), DOCX, DOC, XLSX, XLS, CSV, TXT, or JSON files. UKPSC PCS and UKSSSC stay strictly separated, and uploaded PYQs remain unverified until you confirm their source paper.
            </p>
          </div>
          {rawCandidates.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setRawCandidates([]);
                setFileReports([]);
                setImportSummary(null);
                setPanelError(null);
              }}
              className="px-3 py-1.5 text-xs font-medium rounded-lg border border-edge-strong bg-field text-ink-muted hover:text-ink self-start lg:self-auto"
            >
              Clear Staging Table
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3 rounded-lg border border-edge bg-subtle/50 p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-text">
              Target Exam Commission (Strict Separation)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label htmlFor="bulk-commission" className="block text-[11px] font-medium text-ink-muted mb-1">
                  Exam Commission
                </label>
                <select
                  id="bulk-commission"
                  value={targetCommission}
                  onChange={(e) => handleCommissionChange(e.target.value as ExamCommission)}
                  className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  {(Object.keys(COMMISSION_LABELS) as ExamCommission[]).map((key) => (
                    <option key={key} value={key}>
                      {COMMISSION_LABELS[key]}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="bulk-exam-id" className="block text-[11px] font-medium text-ink-muted mb-1">
                  Linked Examination
                </label>
                <select
                  id="bulk-exam-id"
                  value={effectiveExamId}
                  onChange={(e) => setSelectedExaminationId(e.target.value)}
                  className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  {examinations.length === 0 ? (
                    <option value="">No examinations found</option>
                  ) : (
                    examinations.map((ex) => (
                      <option key={ex.id} value={ex.id}>
                        {ex.code} — {ex.title}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>
            <p className="text-[11px] text-ink-muted">
              Uploaded questions default to <strong>{targetCommission === 'UKPSC_PCS' ? 'UKPSC PCS' : targetCommission}</strong>. If a file mentions a different commission (e.g., UKSSSC vs UKPSC PCS), the staging table will flag it for review.
            </p>
          </div>

          <div className="space-y-2 rounded-lg border border-edge bg-subtle/50 p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-text">
              Optional Default Subject &amp; Topic Fallback
            </div>
            <CascadingTopicSelector
              subjects={sortedSubjects}
              units={units}
              chapters={chapters}
              topics={topics}
              valueTopicId={defaultTopicId}
              valueSubjectId={defaultSubjectId}
              allowEmptyTopic
              emptySubjectLabel="Auto-detect Subject from file"
              emptyTopicLabel="Auto-match Topic (or assign in table)"
              onChange={({ topicId, subjectId }) => {
                setDefaultTopicId(topicId);
                setDefaultSubjectId(subjectId);
              }}
            />
          </div>
        </div>

        {/* File Dropzone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragActive(false);
            if (e.dataTransfer.files?.length) {
              void handleFilesSelected(e.dataTransfer.files);
            }
          }}
          className={`rounded-xl border-2 border-dashed p-6 text-center transition-colors ${
            dragActive
              ? 'border-accent bg-accent/10'
              : 'border-edge-strong bg-subtle/40 hover:border-accent/60'
          }`}
        >
          <UploadCloud className="w-8 h-8 mx-auto text-accent-text" />
          <div className="mt-2 text-sm font-semibold text-ink">
            Drop question files here or select from your computer
          </div>
          <p className="mt-1 text-xs text-ink-muted">
            Supports <strong>PDF</strong> (text + scanned OCR), <strong>DOCX</strong>, <strong>DOC</strong>, <strong>XLSX / XLS</strong>, <strong>CSV</strong>, <strong>TXT</strong>, and <strong>JSON</strong> (English &amp; Hindi Devanagari)
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <label className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover cursor-pointer transition-colors">
              <FileUp className="w-4 h-4" />
              <span>{extracting ? 'Extracting...' : 'Choose One or More Files'}</span>
              <input
                type="file"
                multiple
                accept={ACCEPTED_EXTENSIONS}
                disabled={extracting}
                onChange={(e) => {
                  if (e.target.files?.length) {
                    void handleFilesSelected(e.target.files);
                    e.target.value = '';
                  }
                }}
                className="sr-only"
              />
            </label>
          </div>
          {extracting && (
            <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-accent-text">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{extractProgress || 'Extracting questions...'}</span>
            </div>
          )}
        </div>

        {/* File Extraction Reports */}
        {fileReports.length > 0 && (
          <div className="space-y-2">
            <div className="text-xs font-semibold text-ink">File Extraction Status</div>
            <div className="divide-y divide-edge rounded-lg border border-edge bg-field">
              {fileReports.map((rep, idx) => (
                <div
                  key={`${rep.fileName}-${idx}`}
                  className="px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    {rep.fileType === 'XLSX' || rep.fileType === 'XLS' || rep.fileType === 'CSV' ? (
                      <FileSpreadsheet className="w-4 h-4 text-accent-text shrink-0 mt-0.5" />
                    ) : (
                      <FileText className="w-4 h-4 text-accent-text shrink-0 mt-0.5" />
                    )}
                    <div className="min-w-0">
                      <div className="font-medium text-ink truncate">
                        {rep.fileName}{' '}
                        <span className="font-mono text-[11px] text-ink-faint">
                          ({rep.fileType} · {Math.max(1, Math.round(rep.sizeBytes / 1024))} KB)
                        </span>
                      </div>
                      <div
                        className={`text-[11px] mt-0.5 ${
                          rep.status === 'error' || rep.status === 'needs_ocr_or_text'
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-ink-muted'
                        }`}
                      >
                        {rep.message}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 font-mono tabular-nums text-[11px]">
                    {rep.status === 'parsed' || rep.status === 'ocr_parsed' ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {rep.extractedCount} extracted
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        {rep.status === 'needs_ocr_or_text' ? 'Needs OCR / Text' : 'Error'}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {panelError && (
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-xs text-red-700 dark:text-red-300 flex items-start gap-2">
          <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{panelError}</span>
        </div>
      )}

      {importSummary && (
        <section className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-5 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Bulk Question Import Summary</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs">
            <div className="rounded-lg border border-edge bg-panel px-3 py-2">
              <div className="text-ink-muted">Extracted</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-ink">{importSummary.extracted}</div>
            </div>
            <div className="rounded-lg border border-edge bg-panel px-3 py-2">
              <div className="text-ink-muted">Ready to Import</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-ink">{importSummary.readyToImport}</div>
            </div>
            <div className="rounded-lg border border-edge bg-panel px-3 py-2">
              <div className="text-ink-muted">Imported</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-emerald-600 dark:text-emerald-400">
                {importSummary.imported}
              </div>
            </div>
            <div className="rounded-lg border border-edge bg-panel px-3 py-2">
              <div className="text-ink-muted">Skipped</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-ink-muted">{importSummary.skipped}</div>
            </div>
            <div className="rounded-lg border border-edge bg-panel px-3 py-2">
              <div className="text-ink-muted">Failed</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-red-600 dark:text-red-400">
                {importSummary.failed}
              </div>
            </div>
          </div>
          {importSummary.failedMessages.length > 0 && (
            <div className="text-xs text-red-700 dark:text-red-300 space-y-1">
              {importSummary.failedMessages.map((msg, i) => (
                <div key={i}>• {msg}</div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Step 2: Staging Review Table */}
      {validatedCandidates.length > 0 && (
        <section className="bg-panel border border-edge rounded-xl p-5 sm:p-6 shadow-sm space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-ink">
                2. Review, Classify &amp; Verify Extracted Questions
              </h2>
              <p className="mt-0.5 text-xs text-ink-muted">
                Inspect every extracted question, assign missing topics or answer keys, separate UKPSC PCS vs UKSSSC and Objective vs Descriptive questions, and verify authentic PYQs before writing to Firestore.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <label className="inline-flex items-center gap-1.5 text-xs text-ink cursor-pointer mr-2">
                <input
                  type="checkbox"
                  checked={skipDuplicates}
                  onChange={(e) => setSkipDuplicates(e.target.checked)}
                  className="accent-accent"
                />
                <span>Skip duplicates on import</span>
              </label>
              <button
                type="button"
                disabled={importing || stats.readyToImport === 0}
                onClick={() => void handleImportBatch()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-50 transition-colors"
              >
                {importing ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>
                      Importing {importProgress.done}/{importProgress.total}...
                    </span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Import {stats.readyToImport} Ready Question(s)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-xs">
            <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
              <div className="text-ink-muted">Extracted</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-ink">{stats.total}</div>
            </div>
            <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
              <div className="text-ink-muted">Objective</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-ink">{stats.objective}</div>
            </div>
            <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
              <div className="text-ink-muted">Descriptive</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-ink">{stats.descriptive}</div>
            </div>
            <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
              <div className="text-ink-muted">Other</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-ink">{stats.other}</div>
            </div>
            <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
              <div className="text-ink-muted">PYQs</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-ink">{stats.pyq}</div>
            </div>
            <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
              <div className="text-ink-muted">Practice</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-ink">{stats.practice}</div>
            </div>
            <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
              <div className="text-ink-muted">Duplicates</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-amber-600 dark:text-amber-400">
                {stats.duplicates}
              </div>
            </div>
            <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
              <div className="text-ink-muted">Ready</div>
              <div className="mt-0.5 font-mono tabular-nums font-bold text-emerald-600 dark:text-emerald-400">
                {stats.readyToImport}
              </div>
            </div>
          </div>

          {/* Format Tabs & Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {(
                [
                  { id: 'all', label: `All (${stats.total})` },
                  { id: 'objective', label: `Objective MCQs (${stats.objective})` },
                  { id: 'descriptive', label: `Descriptive / Mains (${stats.descriptive})` },
                  { id: 'other', label: `Other (${stats.other})` },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFormatTab(tab.id)}
                  className={`whitespace-nowrap shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                    formatTab === tab.id
                      ? 'border-accent bg-accent text-accent-ink'
                      : 'border-edge-strong bg-field text-ink-muted hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <select
                aria-label="Filter staging rows by classification"
                value={categoryFilter}
                onChange={(e) =>
                  setCategoryFilter(
                    e.target.value as 'all' | 'pyq' | 'practice' | 'invalid' | 'duplicate'
                  )
                }
                className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
              >
                <option value="all">All Categories</option>
                <option value="pyq">PYQs Only ({stats.pyq})</option>
                <option value="practice">Practice Questions ({stats.practice})</option>
                <option value="invalid">With Validation Errors ({stats.invalid})</option>
                <option value="duplicate">Duplicates ({stats.duplicates})</option>
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search extracted rows..."
                className="px-3 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
              />
            </div>
          </div>

          {/* Bulk Edit Bar */}
          <div className="rounded-lg border border-edge bg-subtle/60 p-3.5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-ink">
                  Selected: <span className="font-mono">{stats.selectedCount}</span>
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setRawCandidates((prev) =>
                      prev.map((row) => {
                        const v = validatedCandidates.find((x) => x.rowId === row.rowId);
                        return { ...row, selected: Boolean(v && v.errors.length === 0) };
                      })
                    )
                  }
                  className="px-2.5 py-1 rounded border border-edge-strong bg-field text-ink hover:border-accent"
                >
                  Select All Valid
                </button>
                <button
                  type="button"
                  onClick={() => setRawCandidates((prev) => prev.map((r) => ({ ...r, selected: true })))}
                  className="px-2.5 py-1 rounded border border-edge-strong bg-field text-ink hover:border-accent"
                >
                  Select All
                </button>
                <button
                  type="button"
                  onClick={() => setRawCandidates((prev) => prev.map((r) => ({ ...r, selected: false })))}
                  className="px-2.5 py-1 rounded border border-edge-strong bg-field text-ink hover:border-accent"
                >
                  Deselect All
                </button>
                <button
                  type="button"
                  onClick={() => setRawCandidates((prev) => prev.filter((r) => !r.selected))}
                  className="px-2.5 py-1 rounded border border-red-500/40 bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20"
                >
                  Remove Selected
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 text-xs">
              <select
                aria-label="Bulk assign subject"
                value={bulkSubjectId}
                onChange={(e) => {
                  setBulkSubjectId(e.target.value);
                  setBulkTopicId('');
                }}
                className="px-2.5 py-1.5 rounded-lg border border-edge-strong bg-field text-ink"
              >
                <option value="">Bulk Subject (keep row)</option>
                {sortedSubjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
              <select
                aria-label="Bulk assign topic"
                value={bulkTopicId}
                onChange={(e) => setBulkTopicId(e.target.value)}
                className="px-2.5 py-1.5 rounded-lg border border-edge-strong bg-field text-ink"
              >
                <option value="">Bulk Topic (keep row)</option>
                {topics
                  .filter((t) => !bulkSubjectId || t.subjectId === bulkSubjectId)
                  .map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.title}
                    </option>
                  ))}
              </select>
              <input
                type="text"
                value={bulkExamName}
                onChange={(e) => setBulkExamName(e.target.value)}
                placeholder="Bulk Exam Name"
                className="px-2.5 py-1.5 rounded-lg border border-edge-strong bg-field text-ink"
              />
              <input
                type="number"
                min={1990}
                max={2100}
                value={bulkExamYear}
                onChange={(e) => setBulkExamYear(e.target.value)}
                placeholder="Year (e.g. 2024)"
                className="px-2.5 py-1.5 rounded-lg border border-edge-strong bg-field text-ink font-mono"
              />
              <input
                type="text"
                value={bulkPaperName}
                onChange={(e) => setBulkPaperName(e.target.value)}
                placeholder="Bulk Paper (e.g. GS Paper I)"
                className="px-2.5 py-1.5 rounded-lg border border-edge-strong bg-field text-ink"
              />
              <input
                type="text"
                value={bulkSourceRef}
                onChange={(e) => setBulkSourceRef(e.target.value)}
                placeholder="Bulk Source Reference"
                className="px-2.5 py-1.5 rounded-lg border border-edge-strong bg-field text-ink"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <label className="inline-flex items-center gap-2 font-medium text-ink cursor-pointer">
                <input
                  type="checkbox"
                  checked={bulkVerifiedConfirm}
                  onChange={(e) => setBulkVerifiedConfirm(e.target.checked)}
                  className="accent-accent"
                />
                <span>
                  Confirm selected PYQs with Exam Name, Year &amp; Source are verified against authentic published exam papers
                </span>
              </label>
              <button
                type="button"
                onClick={applyBulkChangesToSelected}
                className="px-3 py-1.5 font-semibold rounded-lg border border-accent bg-panel text-accent-text hover:bg-accent hover:text-accent-ink transition-colors"
              >
                Apply to Selected Rows
              </button>
            </div>
          </div>

          {/* Staging Rows */}
          <div className="divide-y divide-edge rounded-xl border border-edge bg-field">
            {displayedCandidates.length === 0 ? (
              <div className="p-6 text-center text-xs text-ink-muted">
                No extracted rows match the current filter.
              </div>
            ) : (
              displayedCandidates.map((row, idx) => {
                const isExpanded = Boolean(expandedRowIds[row.rowId]);
                const rowTopics = row.subjectId
                  ? topics.filter((t) => t.subjectId === row.subjectId)
                  : topics;

                return (
                  <div key={row.rowId} className="p-3.5 sm:p-4 space-y-3">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-3">
                      <div className="flex items-start gap-2.5 flex-1 min-w-0">
                        <input
                          type="checkbox"
                          aria-label={`Select row ${idx + 1}`}
                          checked={row.selected}
                          onChange={(e) =>
                            updateRow(row.rowId, (prev) => ({
                              ...prev,
                              selected: e.target.checked,
                            }))
                          }
                          className="mt-1 accent-accent shrink-0"
                        />
                        <div className="min-w-0 flex-1 space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                            <span className="font-semibold text-accent-text">
                              #{row.questionNumber || idx + 1}
                            </span>
                            <span className="text-ink-faint">
                              {row.sourceFile}
                              {row.sourcePage ? ` · p.${row.sourcePage}` : ''}
                            </span>
                            <span className="px-1.5 py-0.5 rounded border border-edge bg-panel text-ink">
                              {FORMAT_LABELS[row.questionFormat]}
                            </span>
                            <span className="px-1.5 py-0.5 rounded border border-edge bg-panel text-ink">
                              {row.questionType === 'pyq' ? 'PYQ' : row.questionType === 'current_affairs' ? 'Current Affairs' : 'Practice MCQ'}
                            </span>
                            <span className="px-1.5 py-0.5 rounded border border-edge bg-panel text-ink">
                              {row.examCommission}
                            </span>
                            {row.marks !== undefined && (
                              <span className="text-ink-muted">{row.marks} Marks</span>
                            )}
                            {row.wordLimit !== undefined && (
                              <span className="text-ink-muted">{row.wordLimit} Words</span>
                            )}
                            {row.questionType === 'pyq' && (
                              <span
                                className={`font-semibold ${
                                  row.isVerified
                                    ? 'text-emerald-600 dark:text-emerald-400'
                                    : 'text-amber-600 dark:text-amber-400'
                                }`}
                              >
                                {row.isVerified ? 'Verified PYQ' : 'Unverified PYQ (Draft)'}
                              </span>
                            )}
                            {row.duplicateType !== 'none' && (
                              <span className="font-semibold text-amber-600 dark:text-amber-400">
                                {row.duplicateType === 'firestore' ? 'Firestore Duplicate' : 'Batch Duplicate'}
                              </span>
                            )}
                          </div>

                          <div className="text-sm font-medium text-ink leading-relaxed">
                            {row.stem}
                          </div>

                          {row.questionFormat === 'objective' && row.options.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                              {row.options.map((opt, oIdx) => (
                                <div
                                  key={oIdx}
                                  className={`px-2.5 py-1 rounded border ${
                                    row.correctOptionIndex === oIdx
                                      ? 'border-emerald-500/60 bg-emerald-500/10 text-ink font-medium'
                                      : 'border-edge bg-panel text-ink-muted'
                                  }`}
                                >
                                  {String.fromCharCode(65 + oIdx)}. {opt}
                                </div>
                              ))}
                            </div>
                          )}

                          {row.errors.length > 0 && (
                            <div className="space-y-0.5 text-[11px] text-red-600 dark:text-red-400">
                              {row.errors.map((errMsg, eIdx) => (
                                <div key={eIdx}>• Error: {errMsg}</div>
                              ))}
                            </div>
                          )}
                          {row.warnings.length > 0 && (
                            <div className="space-y-0.5 text-[11px] text-amber-600 dark:text-amber-400">
                              {row.warnings.map((wMsg, wIdx) => (
                                <div key={wIdx}>• Warning: {wMsg}</div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Quick Row Controls */}
                      <div className="flex flex-wrap lg:flex-col items-stretch gap-1.5 lg:w-64 shrink-0 text-xs">
                        <div className="grid grid-cols-2 gap-1.5">
                          <select
                            aria-label="Row subject"
                            value={row.subjectId}
                            onChange={(e) => {
                              const nextSubj = e.target.value;
                              updateRow(row.rowId, (prev) => ({
                                ...prev,
                                subjectId: nextSubj,
                                topicId:
                                  prev.topicId && topicMap.get(prev.topicId)?.subjectId === nextSubj
                                    ? prev.topicId
                                    : '',
                              }));
                            }}
                            className="px-2 py-1.5 rounded border border-edge-strong bg-panel text-ink"
                          >
                            <option value="">Select Subject</option>
                            {sortedSubjects.map((s) => (
                              <option key={s.id} value={s.id}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                          <select
                            aria-label="Row topic"
                            value={row.topicId}
                            onChange={(e) => {
                              const nextTopicId = e.target.value;
                              const t = topicMap.get(nextTopicId);
                              updateRow(row.rowId, (prev) => ({
                                ...prev,
                                topicId: nextTopicId,
                                subjectId: t?.subjectId || prev.subjectId,
                              }));
                            }}
                            className="px-2 py-1.5 rounded border border-edge-strong bg-panel text-ink"
                          >
                            <option value="">Select Topic</option>
                            {rowTopics.map((t) => (
                              <option key={t.id} value={t.id}>
                                {subjectMap.get(t.subjectId)?.title ? `${subjectMap.get(t.subjectId)?.title}: ` : ''}
                                {t.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="grid grid-cols-3 gap-1.5">
                          <select
                            aria-label="Row question format"
                            value={row.questionFormat}
                            onChange={(e) => {
                              const nextFormat = e.target.value as QuestionFormat;
                              updateRow(row.rowId, (prev) => ({
                                ...prev,
                                questionFormat: nextFormat,
                                options:
                                  nextFormat === 'objective'
                                    ? prev.options.length >= 2
                                      ? prev.options
                                      : ['', '', '', '']
                                    : [],
                                correctOptionIndex: nextFormat === 'objective' ? prev.correctOptionIndex : -1,
                              }));
                            }}
                            className="px-2 py-1.5 rounded border border-edge-strong bg-panel text-ink"
                          >
                            <option value="objective">Objective</option>
                            <option value="descriptive">Descriptive</option>
                            <option value="other">Other</option>
                          </select>
                          <select
                            aria-label="Row category"
                            value={row.questionType}
                            onChange={(e) => {
                              const nextType = e.target.value as QuestionType;
                              updateRow(row.rowId, (prev) => ({
                                ...prev,
                                questionType: nextType,
                                isVerified: nextType === 'pyq' ? prev.isVerified : false,
                                isPublished: nextType === 'pyq' ? prev.isVerified : true,
                              }));
                            }}
                            className="px-2 py-1.5 rounded border border-edge-strong bg-panel text-ink"
                          >
                            <option value="mcq">Practice</option>
                            <option value="pyq">PYQ</option>
                            <option value="current_affairs">CA</option>
                          </select>
                          <select
                            aria-label="Row commission"
                            value={row.examCommission}
                            onChange={(e) =>
                              updateRow(row.rowId, (prev) => ({
                                ...prev,
                                examCommission: e.target.value as ExamCommission,
                              }))
                            }
                            className="px-2 py-1.5 rounded border border-edge-strong bg-panel text-ink"
                          >
                            <option value="UKPSC_PCS">UKPSC PCS</option>
                            <option value="UKSSSC">UKSSSC</option>
                            <option value="UPSC">UPSC</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="flex items-center justify-between gap-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedRowIds((prev) => ({
                                ...prev,
                                [row.rowId]: !isExpanded,
                              }))
                            }
                            className="flex-1 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded border border-edge-strong bg-panel text-ink hover:border-accent"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp className="w-3.5 h-3.5" />
                                <span>Hide Editor</span>
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-3.5 h-3.5" />
                                <span>Edit Details</span>
                              </>
                            )}
                          </button>
                          <button
                            type="button"
                            aria-label="Remove extracted row"
                            onClick={() => removeRow(row.rowId)}
                            className="p-1.5 rounded border border-edge-strong bg-panel text-ink-muted hover:text-red-500 hover:border-red-500/40"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Detail Editor */}
                    {isExpanded && (
                      <div className="rounded-lg border border-edge bg-panel p-4 space-y-3 text-xs">
                        <div>
                          <label className="block text-[11px] font-medium text-ink-muted mb-1">
                            Question Stem (Hindi / English preserved)
                          </label>
                          <textarea
                            rows={3}
                            value={row.stem}
                            onChange={(e) =>
                              updateRow(row.rowId, (prev) => ({ ...prev, stem: e.target.value }))
                            }
                            className="w-full px-3 py-2 rounded-lg border border-edge-strong bg-field text-ink text-sm"
                          />
                        </div>

                        {row.questionFormat === 'objective' ? (
                          <div className="space-y-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {[0, 1, 2, 3, 4].map((optIdx) => (
                                <div key={optIdx} className="flex items-center gap-2">
                                  <input
                                    type="radio"
                                    name={`correct-${row.rowId}`}
                                    aria-label={`Mark Option ${String.fromCharCode(65 + optIdx)} correct`}
                                    checked={row.correctOptionIndex === optIdx}
                                    onChange={() =>
                                      updateRow(row.rowId, (prev) => ({
                                        ...prev,
                                        correctOptionIndex: optIdx,
                                      }))
                                    }
                                    className="accent-accent"
                                  />
                                  <input
                                    type="text"
                                    placeholder={`Option ${String.fromCharCode(65 + optIdx)}${optIdx >= 2 ? ' (optional)' : ''}`}
                                    value={row.options[optIdx] ?? ''}
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      updateRow(row.rowId, (prev) => {
                                        const nextOpts = [...prev.options];
                                        while (nextOpts.length <= optIdx) nextOpts.push('');
                                        nextOpts[optIdx] = val;
                                        return { ...prev, options: nextOpts };
                                      });
                                    }}
                                    className="flex-1 px-2.5 py-1.5 rounded border border-edge-strong bg-field text-ink"
                                  />
                                </div>
                              ))}
                            </div>
                            <div>
                              <label className="block text-[11px] font-medium text-ink-muted mb-1">
                                Explanation / Answer Key Note
                              </label>
                              <textarea
                                rows={2}
                                value={row.explanation}
                                onChange={(e) =>
                                  updateRow(row.rowId, (prev) => ({
                                    ...prev,
                                    explanation: e.target.value,
                                  }))
                                }
                                className="w-full px-2.5 py-1.5 rounded border border-edge-strong bg-field text-ink"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              <div>
                                <label className="block text-[11px] font-medium text-ink-muted mb-1">
                                  Marks
                                </label>
                                <input
                                  type="number"
                                  min={0}
                                  max={250}
                                  value={row.marks ?? ''}
                                  placeholder="e.g. 10"
                                  onChange={(e) =>
                                    updateRow(row.rowId, (prev) => ({
                                      ...prev,
                                      marks: e.target.value === '' ? undefined : Number(e.target.value),
                                    }))
                                  }
                                  className="w-full px-2.5 py-1.5 rounded border border-edge-strong bg-field text-ink font-mono"
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] font-medium text-ink-muted mb-1">
                                  Word Limit
                                </label>
                                <input
                                  type="number"
                                  min={1}
                                  max={5000}
                                  value={row.wordLimit ?? ''}
                                  placeholder="e.g. 150"
                                  onChange={(e) =>
                                    updateRow(row.rowId, (prev) => ({
                                      ...prev,
                                      wordLimit: e.target.value === '' ? undefined : Number(e.target.value),
                                    }))
                                  }
                                  className="w-full px-2.5 py-1.5 rounded border border-edge-strong bg-field text-ink font-mono"
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] font-medium text-ink-muted mb-1">
                                  Question No.
                                </label>
                                <input
                                  type="text"
                                  value={row.questionNumber ?? ''}
                                  onChange={(e) =>
                                    updateRow(row.rowId, (prev) => ({
                                      ...prev,
                                      questionNumber: e.target.value,
                                    }))
                                  }
                                  className="w-full px-2.5 py-1.5 rounded border border-edge-strong bg-field text-ink font-mono"
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] font-medium text-ink-muted mb-1">
                                  Difficulty
                                </label>
                                <select
                                  value={row.difficulty}
                                  onChange={(e) =>
                                    updateRow(row.rowId, (prev) => ({
                                      ...prev,
                                      difficulty: e.target.value as QuestionDifficulty,
                                    }))
                                  }
                                  className="w-full px-2.5 py-1.5 rounded border border-edge-strong bg-field text-ink"
                                >
                                  <option value="foundation">Foundation</option>
                                  <option value="standard">Standard</option>
                                  <option value="advanced">Advanced</option>
                                </select>
                              </div>
                            </div>
                            <div>
                              <label className="block text-[11px] font-medium text-ink-muted mb-1">
                                Model Answer / Evaluation Key Points (optional, only if provided in source)
                              </label>
                              <textarea
                                rows={3}
                                value={row.modelAnswer}
                                onChange={(e) =>
                                  updateRow(row.rowId, (prev) => ({
                                    ...prev,
                                    modelAnswer: e.target.value,
                                  }))
                                }
                                className="w-full px-2.5 py-1.5 rounded border border-edge-strong bg-field text-ink"
                              />
                            </div>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2 border-t border-edge">
                          <div>
                            <label className="block text-[11px] font-medium text-ink-muted mb-1">
                              Exam Name {row.questionType === 'pyq' ? '*' : '(optional)'}
                            </label>
                            <input
                              type="text"
                              value={row.examName}
                              placeholder="e.g. UKPSC Upper PCS Mains"
                              onChange={(e) =>
                                updateRow(row.rowId, (prev) => ({ ...prev, examName: e.target.value }))
                              }
                              className="w-full px-2.5 py-1.5 rounded border border-edge-strong bg-field text-ink"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-medium text-ink-muted mb-1">
                              Exam Year {row.questionType === 'pyq' ? '*' : '(optional)'}
                            </label>
                            <input
                              type="number"
                              min={1990}
                              max={2100}
                              value={row.examYear ?? ''}
                              placeholder="e.g. 2023"
                              onChange={(e) =>
                                updateRow(row.rowId, (prev) => ({
                                  ...prev,
                                  examYear: e.target.value === '' ? undefined : Number(e.target.value),
                                }))
                              }
                              className="w-full px-2.5 py-1.5 rounded border border-edge-strong bg-field text-ink font-mono"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-medium text-ink-muted mb-1">
                              Paper / Subject Section
                            </label>
                            <input
                              type="text"
                              value={row.paperName}
                              placeholder="e.g. GS Paper I / Prelims"
                              onChange={(e) =>
                                updateRow(row.rowId, (prev) => ({ ...prev, paperName: e.target.value }))
                              }
                              className="w-full px-2.5 py-1.5 rounded border border-edge-strong bg-field text-ink"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-medium text-ink-muted mb-1">
                              Source Paper / Page Reference
                            </label>
                            <input
                              type="text"
                              value={row.sourceReference}
                              placeholder="Official paper / booklet & page"
                              onChange={(e) =>
                                updateRow(row.rowId, (prev) => ({
                                  ...prev,
                                  sourceReference: e.target.value,
                                }))
                              }
                              className="w-full px-2.5 py-1.5 rounded border border-edge-strong bg-field text-ink"
                            />
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 pt-1">
                          {row.questionType === 'pyq' && (
                            <label className="inline-flex items-center gap-2 font-medium text-ink cursor-pointer">
                              <input
                                type="checkbox"
                                checked={row.isVerified}
                                onChange={(e) =>
                                  updateRow(row.rowId, (prev) => ({
                                    ...prev,
                                    isVerified: e.target.checked,
                                    isPublished: e.target.checked ? prev.isPublished : false,
                                  }))
                                }
                                className="accent-accent"
                              />
                              <span>Verified against authentic published exam paper</span>
                            </label>
                          )}
                          <label className="inline-flex items-center gap-2 font-medium text-ink cursor-pointer">
                            <input
                              type="checkbox"
                              checked={row.isPublished}
                              disabled={row.questionType === 'pyq' && !row.isVerified}
                              onChange={(e) =>
                                updateRow(row.rowId, (prev) => ({
                                  ...prev,
                                  isPublished: e.target.checked,
                                }))
                              }
                              className="accent-accent"
                            />
                            <span>
                              Publish immediately to Students
                              {row.questionType === 'pyq' && !row.isVerified
                                ? ' (verify PYQ first or save as Draft)'
                                : ''}
                            </span>
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </section>
      )}
    </div>
  );
}
