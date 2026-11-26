import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Eye, FileUp, Pencil, Plus, Search, Trash2, X } from 'lucide-react';
import { BulkQuestionImportPanel } from '../../components/admin/BulkQuestionImportPanel';
import { CascadingTopicSelector } from '../../components/admin/CascadingTopicSelector';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { ADMIN_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { COMMISSION_LABELS, FORMAT_LABELS } from '../../lib/bulkQuestionImport/types';
import { compareNaturalText, safeSortOrder } from '../../lib/syllabusHierarchy';
import { normalizeQuestionKey } from '../../lib/topicContent/types';
import {
  clampString,
  deleteAdminEntity,
  fetchAllAdminCollection,
  generateSafeId,
  upsertAdminEntity,
} from '../../services/firestoreService';
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

export function AdminQuestionBankPage({
  defaultType = 'mcq',
  initialTab = 'manage',
}: {
  defaultType?: QuestionType;
  initialTab?: 'manage' | 'bulk';
}) {
  const { firebaseUser } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab: 'manage' | 'bulk' =
    tabParam === 'bulk' ? 'bulk' : tabParam === 'manage' ? 'manage' : initialTab;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [exams, setExams] = useState<Examination[]>([]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [previewQuestion, setPreviewQuestion] = useState<{
    stem: string;
    options: string[];
    correctOptionIndex: number;
    explanation: string;
    modelAnswer?: string;
    questionType: QuestionType;
    questionFormat?: QuestionFormat;
    examCommission?: ExamCommission;
    difficulty: QuestionDifficulty;
    examName?: string;
    examYear?: number;
    paperName?: string;
    marks?: number;
    wordLimit?: number;
    sourceReference?: string;
    topicPath: string;
  } | null>(null);
  const [showPreviewAnswer, setShowPreviewAnswer] = useState(true);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | QuestionDifficulty>('all');
  const [commissionFilter, setCommissionFilter] = useState<'all' | ExamCommission>('all');
  const [formatFilter, setFormatFilter] = useState<'all' | QuestionFormat>('all');

  const [form, setForm] = useState({
    examinationId: '',
    topicId: '',
    questionType: defaultType,
    questionFormat: 'objective' as QuestionFormat,
    examCommission: 'UKPSC_PCS' as ExamCommission,
    stem: '',
    optA: '',
    optB: '',
    optC: '',
    optD: '',
    correctOptionIndex: 0,
    explanation: '',
    modelAnswer: '',
    difficulty: 'standard' as QuestionDifficulty,
    examName: '',
    examYear: 2024,
    paperName: '',
    marks: '' as string | number,
    wordLimit: '' as string | number,
    sourceReference: '',
    isVerified: defaultType === 'pyq',
    isPublished: true,
  });

  useEffect(() => {
    setForm((prev) =>
      editingId
        ? prev
        : {
            ...prev,
            questionType: defaultType,
            isVerified: defaultType === 'pyq',
          }
    );
  }, [defaultType, editingId]);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [qs, tpcs, exms, crs, chps, unts, subjs] = await Promise.all([
        fetchAllAdminCollection<Question>('questions'),
        fetchAllAdminCollection<Topic>('topics'),
        fetchAllAdminCollection<Examination>('examinations'),
        fetchAllAdminCollection<Course>('courses'),
        fetchAllAdminCollection<Chapter>('chapters'),
        fetchAllAdminCollection<Unit>('units'),
        fetchAllAdminCollection<Subject>('subjects'),
      ]);
      const subjectMap = new Map(subjs.map((s) => [s.id, s]));
      const unitMap = new Map(unts.map((u) => [u.id, u]));
      const chapterMap = new Map(chps.map((c) => [c.id, c]));

      const sortedSubjs = [...subjs].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      );
      const sortedTopics = [...tpcs].sort((a, b) => {
        const cA = chapterMap.get(a.chapterId);
        const cB = chapterMap.get(b.chapterId);
        const uA = unitMap.get(a.unitId || cA?.unitId || '');
        const uB = unitMap.get(b.unitId || cB?.unitId || '');
        const sA = subjectMap.get(a.subjectId || cA?.subjectId || uA?.subjectId || '');
        const sB = subjectMap.get(b.subjectId || cB?.subjectId || uB?.subjectId || '');
        return (
          safeSortOrder(sA?.sortOrder) - safeSortOrder(sB?.sortOrder) ||
          compareNaturalText(sA?.title, sB?.title) ||
          safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) ||
          compareNaturalText(a.title, b.title)
        );
      });

      setQuestions(qs);
      setTopics(sortedTopics);
      setExams(exms);
      setCourses(crs);
      setChapters(chps);
      setUnits(unts);
      setSubjects(sortedSubjs);

      if (!form.examinationId || !form.topicId) {
        const firstTopic = sortedTopics[0];
        const firstCourse = firstTopic ? crs.find((c) => c.id === firstTopic.courseId) : undefined;
        setForm((previous) => ({
          ...previous,
          examinationId: previous.examinationId || firstCourse?.examinationId || exms[0]?.id || '',
          topicId: previous.topicId || firstTopic?.id || '',
        }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load question bank.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topicMap = useMemo(() => new Map(topics.map((t) => [t.id, t])), [topics]);
  const chapterMap = useMemo(() => new Map(chapters.map((c) => [c.id, c])), [chapters]);
  const unitMap = useMemo(() => new Map(units.map((u) => [u.id, u])), [units]);
  const subjectMap = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);

  const getTopicPath = (topicId: string) => {
    const t = topicMap.get(topicId);
    if (!t) return 'Unknown Topic';
    const c = chapterMap.get(t.chapterId);
    const u = unitMap.get(t.unitId || c?.unitId || '');
    const s = subjectMap.get(t.subjectId || c?.subjectId || u?.subjectId || '');
    return [s?.title, u?.title, c?.title, t.title].filter(Boolean).join(' / ');
  };

  const resetForm = (preserveTopic = true) => {
    setEditingId(null);
    setForm((p) => ({
      examinationId: preserveTopic && p.examinationId ? p.examinationId : exams[0]?.id || '',
      topicId: preserveTopic && p.topicId ? p.topicId : topics[0]?.id || '',
      questionType: defaultType,
      questionFormat: 'objective',
      examCommission: preserveTopic ? p.examCommission : 'UKPSC_PCS',
      stem: '',
      optA: '',
      optB: '',
      optC: '',
      optD: '',
      correctOptionIndex: 0,
      explanation: '',
      modelAnswer: '',
      difficulty: 'standard',
      examName: '',
      examYear: 2024,
      paperName: '',
      marks: '',
      wordLimit: '',
      sourceReference: '',
      isVerified: defaultType === 'pyq',
      isPublished: true,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !form.topicId) {
      setError('Select a target topic before saving.');
      return;
    }
    const topic = topicMap.get(form.topicId);
    if (!topic) {
      setError('Selected topic was not found.');
      return;
    }

    const chapter = chapterMap.get(topic.chapterId);
    const unit = unitMap.get(topic.unitId || chapter?.unitId || '');
    const resolvedSubjectId = topic.subjectId || chapter?.subjectId || unit?.subjectId || '';
    const subject = subjectMap.get(resolvedSubjectId);
    const course = courses.find((c) => c.id === (topic.courseId || chapter?.courseId || subject?.courseId));
    const resolvedExaminationId = form.examinationId || subject?.examinationId || course?.examinationId || exams[0]?.id || '';

    if (!resolvedExaminationId) {
      setError('Create at least one Examination before adding questions.');
      return;
    }

    const isObjective = form.questionFormat === 'objective';
    const options = isObjective
      ? [form.optA, form.optB, form.optC, form.optD].map((o) => o.trim()).filter(Boolean)
      : [];
    if (isObjective) {
      if (options.length < 2) {
        setError('Provide at least 2 non-empty answer options for Objective MCQs.');
        return;
      }
      if (form.correctOptionIndex >= options.length) {
        setError('Selected Correct Option does not match a filled option.');
        return;
      }
    }

    const stemKey = normalizeQuestionKey(form.stem);
    const duplicate = questions.find(
      (q) => q.topicId === topic.id && q.id !== editingId && normalizeQuestionKey(q.stem) === stemKey
    );
    if (duplicate) {
      setError('A question with an identical stem already exists under this topic.');
      return;
    }

    if (form.questionType === 'pyq') {
      if (!form.examName.trim() || !Number.isInteger(Number(form.examYear)) || Number(form.examYear) < 1990 || Number(form.examYear) > 2100) {
        setError('PYQs require a verified official Examination Name and valid Exam Year (1990–2100).');
        return;
      }
      if (form.isPublished && (!form.isVerified || !form.sourceReference.trim())) {
        setError('To publish a PYQ, verify the Source Reference (official paper/code) and check "Verified Authentic PYQ". Otherwise save as Draft.');
        return;
      }
    }

    const isEdit = Boolean(editingId);
    const id = editingId ?? generateSafeId('q');
    const existingQuestion = isEdit ? questions.find((q) => q.id === editingId) : undefined;
    const parsedMarks = form.marks !== '' && Number.isFinite(Number(form.marks)) ? Number(form.marks) : undefined;
    const parsedWordLimit =
      form.wordLimit !== '' && Number.isInteger(Number(form.wordLimit)) && Number(form.wordLimit) >= 1
        ? Number(form.wordLimit)
        : undefined;

    setSaving(true);
    setError(null);
    setNotice(null);

    try {
      await upsertAdminEntity<Question>(
        'questions',
        id,
        {
          id,
          topicId: topic.id,
          chapterId: topic.chapterId,
          subjectId: resolvedSubjectId,
          examinationId: resolvedExaminationId,
          questionType: form.questionType,
          questionFormat: form.questionFormat,
          examCommission: form.examCommission,
          stem: clampString(form.stem, 3000),
          options,
          correctOptionIndex: isObjective ? Math.min(form.correctOptionIndex, options.length - 1) : -1,
          explanation: clampString(form.explanation, 3000),
          ...(form.modelAnswer.trim() ? { modelAnswer: clampString(form.modelAnswer, 6000) } : {}),
          ...(form.paperName.trim() ? { paperName: clampString(form.paperName, 160) } : {}),
          ...(parsedMarks !== undefined && parsedMarks >= 0 ? { marks: Math.min(parsedMarks, 250) } : {}),
          ...(parsedWordLimit !== undefined ? { wordLimit: Math.min(parsedWordLimit, 5000) } : {}),
          difficulty: form.difficulty,
          ...(form.questionType === 'pyq'
            ? {
                examName: clampString(form.examName, 120),
                examYear: Number(form.examYear),
                ...(form.sourceReference.trim()
                  ? { sourceReference: clampString(form.sourceReference, 300) }
                  : {}),
                isVerified: form.isVerified,
              }
            : {}),
          isPublished: form.isPublished,
          createdBy: existingQuestion?.createdBy ?? firebaseUser.uid,
        },
        isEdit
      );
      setNotice(isEdit ? 'Question updated.' : 'Question added to bank.');
      resetForm(true);
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save question.');
    } finally {
      setSaving(false);
    }
  };

  const togglePublish = async (q: Question) => {
    const nextPublish = !q.isPublished;
    if (nextPublish) {
      const format = q.questionFormat ?? 'objective';
      if (format === 'objective' && (!Array.isArray(q.options) || q.options.length < 2)) {
        setError('Cannot publish an Objective MCQ with fewer than 2 answer options.');
        return;
      }
      if (q.questionType === 'pyq' && (q.isVerified === false || !q.examName?.trim() || !Number.isInteger(q.examYear))) {
        setError('Cannot publish an unverified PYQ. Edit it to add Exam Name, Year, Source Reference, and Verification.');
        return;
      }
    }
    try {
      setError(null);
      await upsertAdminEntity<Question>(
        'questions',
        q.id,
        { ...q, isPublished: nextPublish },
        true
      );
      setNotice(`Question "${q.stem.slice(0, 48)}..." ${nextPublish ? 'published' : 'unpublished'}.`);
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update publication status.');
    }
  };

  const displayed = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return questions.filter((q) => {
      const typeMatch =
        defaultType === 'pyq'
          ? q.questionType === 'pyq'
          : q.questionType === 'mcq' || q.questionType === 'current_affairs';
      if (!typeMatch) return false;
      if (subjectFilter && q.subjectId !== subjectFilter) return false;
      if (topicFilter && q.topicId !== topicFilter) return false;
      if (statusFilter === 'published' && !q.isPublished) return false;
      if (statusFilter === 'draft' && q.isPublished) return false;
      if (difficultyFilter !== 'all' && q.difficulty !== difficultyFilter) return false;
      if (commissionFilter !== 'all' && (q.examCommission ?? 'Other') !== commissionFilter) return false;
      if (formatFilter !== 'all' && (q.questionFormat ?? 'objective') !== formatFilter) return false;
      if (
        query &&
        !q.stem.toLowerCase().includes(query) &&
        !(q.examName || '').toLowerCase().includes(query) &&
        !(q.paperName || '').toLowerCase().includes(query) &&
        !(q.sourceReference || '').toLowerCase().includes(query) &&
        !(topicMap.get(q.topicId)?.title || '').toLowerCase().includes(query)
      ) {
        return false;
      }
      return true;
    });
  }, [
    questions,
    defaultType,
    subjectFilter,
    topicFilter,
    statusFilter,
    difficultyFilter,
    commissionFilter,
    formatFilter,
    searchQuery,
    topicMap,
  ]);

  const filterTopics = useMemo(
    () => (subjectFilter ? topics.filter((t) => t.subjectId === subjectFilter) : topics),
    [topics, subjectFilter]
  );

  const pageHeading =
    activeTab === 'bulk'
      ? 'Bulk Question Import'
      : defaultType === 'pyq'
        ? 'PYQ Management'
        : 'MCQ Question Bank';

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle={pageHeading}
      breadcrumb={`UK Prep / Admin / ${pageHeading}`}
      isAdminWorkspace
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/admin/overview"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-ink"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Admin Overview</span>
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/admin/import-export"
              className="text-xs font-medium text-ink-muted hover:text-ink whitespace-nowrap"
            >
              Academic Archive JSON Import / Export
            </Link>
            <Link
              to="/admin/topics"
              className="text-xs font-semibold text-accent-text hover:underline whitespace-nowrap"
            >
              Open Topic Batch Sync →
            </Link>
          </div>
        </div>

        {/* Mode Switcher: Single Entry & Question Bank vs Bulk Question Import */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-edge bg-panel p-3 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchParams({ tab: 'manage' })}
              className={`whitespace-nowrap shrink-0 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                activeTab === 'manage'
                  ? 'border-accent bg-accent text-accent-ink'
                  : 'border-edge-strong bg-field text-ink-muted hover:text-ink'
              }`}
            >
              {defaultType === 'pyq' ? 'PYQ Bank & Single Entry' : 'MCQ Bank & Single Entry'}
            </button>
            <button
              type="button"
              onClick={() => setSearchParams({ tab: 'bulk' })}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                activeTab === 'bulk'
                  ? 'border-accent bg-accent text-accent-ink'
                  : 'border-edge-strong bg-field text-ink-muted hover:text-ink'
              }`}
            >
              <FileUp className="w-3.5 h-3.5" />
              <span>Bulk Question Import</span>
            </button>
          </div>
          <div className="text-xs text-ink-muted font-mono tabular-nums">
            Total Bank: {questions.length} question{questions.length === 1 ? '' : 's'}
          </div>
        </div>

        {notice && <SuccessBanner message={notice} />}
        {error && <ErrorState message={error} onRetry={() => void loadData()} />}

        {activeTab === 'bulk' ? (
          loading ? (
            <LoadingState label="Loading academic hierarchy and existing questions..." />
          ) : !firebaseUser ? (
            <ErrorState message="Administrator authentication required." />
          ) : (
            <BulkQuestionImportPanel
              adminUid={firebaseUser.uid}
              getIdToken={() => firebaseUser.getIdToken()}
              examinations={exams}
              courses={courses}
              subjects={subjects}
              units={units}
              chapters={chapters}
              topics={topics}
              existingQuestions={questions}
              defaultCommission="UKPSC_PCS"
              onImportComplete={loadData}
            />
          )
        ) : (
          <>

        {previewQuestion && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="bg-panel border border-edge rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-xl">
              <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-edge">
                <div>
                  <div className="text-[11px] font-mono uppercase text-accent-text">
                    {previewQuestion.questionType === 'pyq' ? 'Verified PYQ' : 'Practice MCQ'} ·{' '}
                    {FORMAT_LABELS[previewQuestion.questionFormat ?? 'objective']} ·{' '}
                    {previewQuestion.examCommission || 'UKPSC_PCS'} ·{' '}
                    {previewQuestion.difficulty}
                    {previewQuestion.examName ? ` · ${previewQuestion.examName}` : ''}
                    {previewQuestion.examYear ? ` (${previewQuestion.examYear})` : ''}
                    {previewQuestion.marks !== undefined ? ` · ${previewQuestion.marks} Marks` : ''}
                    {previewQuestion.wordLimit !== undefined ? ` · ${previewQuestion.wordLimit} Words` : ''}
                  </div>
                  <div className="text-xs text-ink-faint mt-0.5">{previewQuestion.topicPath}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewQuestion(null)}
                  className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle"
                  aria-label="Close preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto space-y-4">
                <p className="text-sm sm:text-base font-semibold text-ink leading-7">
                  {previewQuestion.stem}
                </p>
                {previewQuestion.sourceReference && (
                  <div className="text-xs text-ink-muted">
                    Source Reference: <span className="font-medium text-ink">{previewQuestion.sourceReference}</span>
                  </div>
                )}
                {(previewQuestion.questionFormat ?? 'objective') === 'objective' && previewQuestion.options.length > 0 && (
                  <div className="grid gap-2 sm:grid-cols-2">
                    {previewQuestion.options.map((opt, idx) => {
                      const isAnswer = showPreviewAnswer && idx === previewQuestion.correctOptionIndex;
                      return (
                        <div
                          key={idx}
                          className={`rounded-lg border p-3 text-xs sm:text-sm ${
                            isAnswer
                              ? 'border-emerald-500 bg-emerald-500/10 text-ink font-semibold'
                              : 'border-edge-strong bg-field text-ink'
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}. {opt}
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="flex items-center justify-between pt-2 border-t border-edge">
                  <button
                    type="button"
                    onClick={() => setShowPreviewAnswer((prev) => !prev)}
                    className="text-xs font-semibold text-accent-text hover:underline"
                  >
                    {showPreviewAnswer ? 'Hide Answer Key & Explanation' : 'Show Answer Key & Explanation'}
                  </button>
                </div>
                {showPreviewAnswer && previewQuestion.explanation && (
                  <div className="rounded-lg bg-subtle p-4 text-xs sm:text-sm text-ink-muted leading-6">
                    <strong className="text-ink">Explanation: </strong>
                    {previewQuestion.explanation}
                  </div>
                )}
                {showPreviewAnswer && previewQuestion.modelAnswer && (
                  <div className="rounded-lg bg-subtle p-4 text-xs sm:text-sm text-ink-muted leading-6 whitespace-pre-wrap">
                    <strong className="text-ink">Reference Answer Outline: </strong>
                    {previewQuestion.modelAnswer}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-ink">
                {editingId
                  ? 'Edit Question'
                  : defaultType === 'pyq'
                    ? 'Add Verified PYQ'
                    : 'Add Practice MCQ'}
              </h2>
              {editingId && (
                <button
                  type="button"
                  onClick={() => resetForm(true)}
                  className="text-xs text-ink-muted hover:text-ink inline-flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" /> Cancel
                </button>
              )}
            </div>
            {topics.length === 0 || exams.length === 0 || courses.length === 0 ? (
              <p className="text-xs text-accent-text">
                Create at least one Examination and Topic before adding questions.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <CascadingTopicSelector
                  subjects={subjects}
                  units={units}
                  chapters={chapters}
                  topics={topics}
                  valueTopicId={form.topicId}
                  onChange={({ topicId }) => {
                    const nextTopic = topicMap.get(topicId);
                    const nextCourse = nextTopic ? courses.find((c) => c.id === nextTopic.courseId) : undefined;
                    setForm((p) => ({
                      ...p,
                      topicId,
                      examinationId: nextCourse?.examinationId || p.examinationId,
                    }));
                  }}
                />

                <div className="grid grid-cols-3 gap-2.5">
                  <div>
                    <label htmlFor="q-exam" className="block text-[11px] font-medium text-ink-muted mb-1">
                      Examination
                    </label>
                    <select
                      id="q-exam"
                      value={form.examinationId}
                      onChange={(e) => setForm((p) => ({ ...p, examinationId: e.target.value }))}
                      className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                    >
                      {exams.map((ex) => (
                        <option key={ex.id} value={ex.id}>
                          {ex.code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="q-type" className="block text-[11px] font-medium text-ink-muted mb-1">
                      Type
                    </label>
                    <select
                      id="q-type"
                      value={form.questionType}
                      onChange={(e) => {
                        const nextType = e.target.value as QuestionType;
                        setForm((p) => ({
                          ...p,
                          questionType: nextType,
                          isVerified: nextType === 'pyq' ? p.isVerified : false,
                        }));
                      }}
                      className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                    >
                      <option value="mcq">Practice MCQ</option>
                      <option value="pyq">Verified PYQ</option>
                      <option value="current_affairs">Current Affairs</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="q-diff" className="block text-[11px] font-medium text-ink-muted mb-1">
                      Difficulty
                    </label>
                    <select
                      id="q-diff"
                      value={form.difficulty}
                      onChange={(e) => setForm((p) => ({ ...p, difficulty: e.target.value as QuestionDifficulty }))}
                      className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                    >
                      <option value="foundation">Foundation</option>
                      <option value="standard">Standard</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label htmlFor="q-commission" className="block text-[11px] font-medium text-ink-muted mb-1">
                      Exam Commission
                    </label>
                    <select
                      id="q-commission"
                      value={form.examCommission}
                      onChange={(e) => setForm((p) => ({ ...p, examCommission: e.target.value as ExamCommission }))}
                      className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                    >
                      {(Object.keys(COMMISSION_LABELS) as ExamCommission[]).map((key) => (
                        <option key={key} value={key}>
                          {key === 'UKPSC_PCS' ? 'UKPSC PCS' : key}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="q-format" className="block text-[11px] font-medium text-ink-muted mb-1">
                      Question Format
                    </label>
                    <select
                      id="q-format"
                      value={form.questionFormat}
                      onChange={(e) => setForm((p) => ({ ...p, questionFormat: e.target.value as QuestionFormat }))}
                      className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                    >
                      <option value="objective">Objective MCQ</option>
                      <option value="descriptive">Descriptive / Mains</option>
                      <option value="other">Other Format</option>
                    </select>
                  </div>
                </div>

                {form.questionType === 'pyq' && (
                  <div className="rounded-lg border border-edge bg-subtle/60 p-3 space-y-2.5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-accent-text">
                      PYQ Source Verification
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label htmlFor="q-exam-name" className="block text-[11px] font-medium text-ink-muted mb-1">
                          Official Exam Name
                        </label>
                        <input
                          id="q-exam-name"
                          type="text"
                          required
                          maxLength={120}
                          placeholder="e.g., UKPSC Upper PCS Prelims"
                          value={form.examName}
                          onChange={(e) => setForm((p) => ({ ...p, examName: e.target.value }))}
                          className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                        />
                      </div>
                      <div>
                        <label htmlFor="q-year" className="block text-[11px] font-medium text-ink-muted mb-1">
                          Exam Year
                        </label>
                        <input
                          id="q-year"
                          type="number"
                          min={1990}
                          max={2100}
                          required
                          value={form.examYear}
                          onChange={(e) => setForm((p) => ({ ...p, examYear: Number(e.target.value) }))}
                          className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="q-source-ref" className="block text-[11px] font-medium text-ink-muted mb-1">
                        Source Paper / Question Reference
                      </label>
                      <input
                        id="q-source-ref"
                        type="text"
                        maxLength={300}
                        placeholder="e.g., UKPSC Official Paper Booklet Series A, Q.42 (2024)"
                        value={form.sourceReference}
                        onChange={(e) => setForm((p) => ({ ...p, sourceReference: e.target.value }))}
                        className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                      />
                    </div>
                    <label className="flex items-center gap-2 text-xs font-medium text-ink">
                      <input
                        type="checkbox"
                        checked={form.isVerified}
                        onChange={(e) => setForm((p) => ({ ...p, isVerified: e.target.checked }))}
                        className="accent-accent"
                      />
                      <span>Verified against authentic published exam paper</span>
                    </label>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="q-stem" className="text-xs font-medium text-ink-muted">
                      Question Stem
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        const options =
                          form.questionFormat === 'objective'
                            ? [form.optA, form.optB, form.optC, form.optD].map((o) => o.trim()).filter(Boolean)
                            : [];
                        setShowPreviewAnswer(true);
                        setPreviewQuestion({
                          stem: form.stem || 'Question preview',
                          options,
                          correctOptionIndex: form.questionFormat === 'objective' ? form.correctOptionIndex : -1,
                          explanation: form.explanation,
                          modelAnswer: form.modelAnswer || undefined,
                          questionType: form.questionType,
                          questionFormat: form.questionFormat,
                          examCommission: form.examCommission,
                          difficulty: form.difficulty,
                          examName: form.questionType === 'pyq' ? form.examName : undefined,
                          examYear: form.questionType === 'pyq' ? form.examYear : undefined,
                          paperName: form.paperName || undefined,
                          marks: form.marks !== '' ? Number(form.marks) : undefined,
                          wordLimit: form.wordLimit !== '' ? Number(form.wordLimit) : undefined,
                          sourceReference: form.questionType === 'pyq' ? form.sourceReference : undefined,
                          topicPath: getTopicPath(form.topicId),
                        });
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent-text hover:underline"
                    >
                      <Eye className="w-3.5 h-3.5" /> Preview
                    </button>
                  </div>
                  <textarea
                    id="q-stem"
                    required
                    minLength={5}
                    rows={3}
                    value={form.stem}
                    onChange={(e) => setForm((p) => ({ ...p, stem: e.target.value }))}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {form.questionFormat === 'objective' ? (
                  <>
                    <div className="grid grid-cols-2 gap-2">
                      <input type="text" required placeholder="Option A" value={form.optA} onChange={(e) => setForm((p) => ({ ...p, optA: e.target.value }))} className="px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint" />
                      <input type="text" required placeholder="Option B" value={form.optB} onChange={(e) => setForm((p) => ({ ...p, optB: e.target.value }))} className="px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint" />
                      <input type="text" placeholder="Option C" value={form.optC} onChange={(e) => setForm((p) => ({ ...p, optC: e.target.value }))} className="px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint" />
                      <input type="text" placeholder="Option D" value={form.optD} onChange={(e) => setForm((p) => ({ ...p, optD: e.target.value }))} className="px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint" />
                    </div>

                    <div>
                      <label htmlFor="q-correct" className="block text-xs font-medium text-ink-muted mb-1">
                        Correct Option
                      </label>
                      <select
                        id="q-correct"
                        value={form.correctOptionIndex}
                        onChange={(e) => setForm((p) => ({ ...p, correctOptionIndex: Number(e.target.value) }))}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                      >
                        <option value={0}>Option A</option>
                        <option value={1}>Option B</option>
                        <option value={2}>Option C</option>
                        <option value={3}>Option D</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <div className="space-y-2.5 rounded-lg border border-edge bg-subtle/50 p-3">
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label htmlFor="q-paper" className="block text-[11px] font-medium text-ink-muted mb-1">
                          Paper Name
                        </label>
                        <input
                          id="q-paper"
                          type="text"
                          placeholder="e.g., GS Paper I"
                          value={form.paperName}
                          onChange={(e) => setForm((p) => ({ ...p, paperName: e.target.value }))}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                        />
                      </div>
                      <div>
                        <label htmlFor="q-marks" className="block text-[11px] font-medium text-ink-muted mb-1">
                          Marks
                        </label>
                        <input
                          id="q-marks"
                          type="number"
                          min={0}
                          max={250}
                          placeholder="e.g., 10"
                          value={form.marks}
                          onChange={(e) => setForm((p) => ({ ...p, marks: e.target.value }))}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink font-mono"
                        />
                      </div>
                      <div>
                        <label htmlFor="q-word-limit" className="block text-[11px] font-medium text-ink-muted mb-1">
                          Word Limit
                        </label>
                        <input
                          id="q-word-limit"
                          type="number"
                          min={1}
                          max={5000}
                          placeholder="e.g., 150"
                          value={form.wordLimit}
                          onChange={(e) => setForm((p) => ({ ...p, wordLimit: e.target.value }))}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="q-model-answer" className="block text-[11px] font-medium text-ink-muted mb-1">
                        Reference Answer Outline (optional)
                      </label>
                      <textarea
                        id="q-model-answer"
                        rows={3}
                        value={form.modelAnswer}
                        onChange={(e) => setForm((p) => ({ ...p, modelAnswer: e.target.value }))}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="q-exp" className="block text-xs font-medium text-ink-muted mb-1">
                    Explanation
                  </label>
                  <textarea
                    id="q-exp"
                    rows={2}
                    value={form.explanation}
                    onChange={(e) => setForm((p) => ({ ...p, explanation: e.target.value }))}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                  />
                </div>

                <label className="flex items-center gap-2 text-xs font-medium text-ink">
                  <input
                    type="checkbox"
                    checked={form.isPublished}
                    onChange={(e) => setForm((p) => ({ ...p, isPublished: e.target.checked }))}
                    className="accent-accent"
                  />
                  <span>Publish immediately to Students</span>
                </label>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors"
                >
                  {editingId ? <Pencil className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  <span>
                    {saving ? 'Saving...' : editingId ? 'Update Question' : 'Add Question'}
                  </span>
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="bg-panel border border-edge rounded-xl p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs font-semibold text-ink">
                  Showing {displayed.length} {defaultType === 'pyq' ? 'PYQ' : 'MCQ'}
                  {displayed.length === 1 ? '' : 's'}
                </div>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-ink-faint absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search stem, exam, topic..."
                    className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <select
                  aria-label="Filter by subject"
                  value={subjectFilter}
                  onChange={(e) => {
                    setSubjectFilter(e.target.value);
                    setTopicFilter('');
                  }}
                  className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  <option value="">All Subjects</option>
                  {subjects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
                <select
                  aria-label="Filter by topic"
                  value={topicFilter}
                  onChange={(e) => setTopicFilter(e.target.value)}
                  className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  <option value="">All Topics</option>
                  {filterTopics.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.title}
                    </option>
                  ))}
                </select>
                <select
                  aria-label="Filter by exam commission"
                  value={commissionFilter}
                  onChange={(e) => setCommissionFilter(e.target.value as 'all' | ExamCommission)}
                  className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  <option value="all">All Commissions</option>
                  <option value="UKPSC_PCS">UKPSC PCS</option>
                  <option value="UKSSSC">UKSSSC</option>
                  <option value="UPSC">UPSC</option>
                  <option value="Other">Other</option>
                </select>
                <select
                  aria-label="Filter by question format"
                  value={formatFilter}
                  onChange={(e) => setFormatFilter(e.target.value as 'all' | QuestionFormat)}
                  className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  <option value="all">All Formats</option>
                  <option value="objective">Objective MCQ</option>
                  <option value="descriptive">Descriptive / Mains</option>
                  <option value="other">Other Format</option>
                </select>
                <select
                  aria-label="Filter by publication status"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as 'all' | 'published' | 'draft')}
                  className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  <option value="all">All Statuses</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft Only</option>
                </select>
                <select
                  aria-label="Filter by difficulty"
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value as 'all' | QuestionDifficulty)}
                  className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  <option value="all">All Difficulties</option>
                  <option value="foundation">Foundation</option>
                  <option value="standard">Standard</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>

            {loading ? (
              <LoadingState label="Loading questions..." />
            ) : displayed.length === 0 ? (
              <EmptyState
                title={defaultType === 'pyq' ? 'No verified PYQs added yet' : 'No matching MCQs found'}
                description={
                  defaultType === 'pyq'
                    ? 'Add authentic previous-year questions verified against official exam papers and years.'
                    : 'Add practice MCQs linked to syllabus topics or adjust your filters.'
                }
              />
            ) : (
              <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
                {displayed.map((q) => (
                  <div key={q.id} className="p-4 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-accent-text">
                        {q.questionType.toUpperCase()} · {FORMAT_LABELS[q.questionFormat ?? 'objective']} ·{' '}
                        {q.examCommission || 'UKPSC_PCS'} · {q.difficulty}
                        {q.examName ? ` · ${q.examName}` : ''}
                        {q.examYear ? ` (${q.examYear})` : ''}
                        {q.marks !== undefined ? ` · ${q.marks}m` : ''}
                        {q.wordLimit !== undefined ? ` · ${q.wordLimit}w` : ''}
                        {q.questionType === 'pyq' ? ` · ${q.isVerified === false ? 'Unverified' : 'Verified'}` : ''} ·{' '}
                        {q.isPublished ? 'Published' : 'Draft'}
                      </div>
                      <div className="mt-1 text-sm font-medium text-ink">{q.stem}</div>
                      {q.sourceReference && (
                        <div className="mt-1 text-[11px] text-ink-muted">
                          Source: {q.sourceReference}
                        </div>
                      )}
                      <div className="mt-1 text-[11px] text-ink-faint">
                        {getTopicPath(q.topicId)}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        aria-label="Preview question"
                        onClick={() => {
                          setShowPreviewAnswer(true);
                          setPreviewQuestion({
                            stem: q.stem,
                            options: q.options,
                            correctOptionIndex: q.correctOptionIndex,
                            explanation: q.explanation ?? '',
                            modelAnswer: q.modelAnswer,
                            questionType: q.questionType,
                            questionFormat: q.questionFormat ?? 'objective',
                            examCommission: q.examCommission,
                            difficulty: q.difficulty,
                            examName: q.examName,
                            examYear: q.examYear,
                            paperName: q.paperName,
                            marks: q.marks,
                            wordLimit: q.wordLimit,
                            sourceReference: q.sourceReference,
                            topicPath: getTopicPath(q.topicId),
                          });
                        }}
                        className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => void togglePublish(q)}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg border border-edge-strong bg-field text-ink hover:border-accent"
                      >
                        {q.isPublished ? 'Unpublish' : 'Publish'}
                      </button>
                      <button
                        type="button"
                        aria-label="Edit question"
                        onClick={() => {
                          setEditingId(q.id);
                          setForm({
                            examinationId: q.examinationId,
                            topicId: q.topicId,
                            questionType: q.questionType,
                            questionFormat: q.questionFormat ?? 'objective',
                            examCommission: q.examCommission ?? 'UKPSC_PCS',
                            stem: q.stem,
                            optA: q.options[0] ?? '',
                            optB: q.options[1] ?? '',
                            optC: q.options[2] ?? '',
                            optD: q.options[3] ?? '',
                            correctOptionIndex: q.correctOptionIndex >= 0 ? q.correctOptionIndex : 0,
                            explanation: q.explanation ?? '',
                            modelAnswer: q.modelAnswer ?? '',
                            difficulty: q.difficulty,
                            examName: q.examName ?? '',
                            examYear: q.examYear ?? 2024,
                            paperName: q.paperName ?? '',
                            marks: q.marks ?? '',
                            wordLimit: q.wordLimit ?? '',
                            sourceReference: q.sourceReference ?? '',
                            isVerified: q.isVerified !== false,
                            isPublished: q.isPublished,
                          });
                          setNotice(null);
                          setError(null);
                        }}
                        className="p-1.5 rounded-lg text-ink-muted hover:text-accent-text hover:bg-accent/10 transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      {confirmDeleteId === q.id ? (
                        <div className="inline-flex items-center gap-1 rounded-lg border border-red-500/40 bg-red-500/10 px-2 py-1 text-[11px]">
                          <button
                            type="button"
                            onClick={async () => {
                              await deleteAdminEntity('questions', q.id);
                              setConfirmDeleteId(null);
                              setNotice('Question deleted.');
                              if (editingId === q.id) resetForm(true);
                              await loadData();
                            }}
                            className="font-semibold text-red-600 dark:text-red-400 hover:underline"
                          >
                            Confirm
                          </button>
                          <span className="text-ink-faint">/</span>
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteId(null)}
                            className="text-ink-muted hover:text-ink"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          aria-label="Delete question"
                          onClick={() => setConfirmDeleteId(q.id)}
                          className="p-1.5 rounded-lg text-ink-muted hover:text-red-500 hover:bg-red-500/10 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
          </>
        )}
      </div>
    </AppShell>
  );
}
