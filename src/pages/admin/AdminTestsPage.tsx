import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Pencil, Plus, Search, Sparkles, Trash2, X } from 'lucide-react';
import { CascadingTopicSelector } from '../../components/admin/CascadingTopicSelector';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { ADMIN_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { compareNaturalText, safeSortOrder } from '../../lib/syllabusHierarchy';
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
  Examination,
  Question,
  Subject,
  TestPaper,
  TestType,
  Topic,
  Unit,
} from '../../types/academic';

export function AdminTestsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [tests, setTests] = useState<TestPaper[]>([]);
  const [exams, setExams] = useState<Examination[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQids, setSelectedQids] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const [previewTest, setPreviewTest] = useState<{
    title: string;
    testType: TestType;
    durationMinutes: number;
    totalMarks: number;
    negativeMarking: number;
    topicPath: string;
    questions: Question[];
  } | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | TestType>('all');

  const [form, setForm] = useState({
    examinationId: '',
    subjectId: '',
    topicId: '',
    title: '',
    testType: 'topic' as TestType,
    durationMinutes: 15,
    totalMarks: 15,
    negativeMarking: 0.25,
    isPublished: true,
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [ts, ex, crs, subjs, unts, chps, tpcs, qs] = await Promise.all([
        fetchAllAdminCollection<TestPaper>('tests'),
        fetchAllAdminCollection<Examination>('examinations'),
        fetchAllAdminCollection<Course>('courses'),
        fetchAllAdminCollection<Subject>('subjects'),
        fetchAllAdminCollection<Unit>('units'),
        fetchAllAdminCollection<Chapter>('chapters'),
        fetchAllAdminCollection<Topic>('topics'),
        fetchAllAdminCollection<Question>('questions'),
      ]);
      const subjectMap = new Map(subjs.map((s) => [s.id, s]));
      const unitMap = new Map(unts.map((u) => [u.id, u]));
      const chapterMap = new Map(chps.map((c) => [c.id, c]));

      setTests(ts);
      setExams(ex);
      setCourses(crs);
      setSubjects(
        [...subjs].sort(
          (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
        )
      );
      setUnits(unts);
      setChapters(chps);
      setTopics(
        [...tpcs].sort((a, b) => {
          const cA = chapterMap.get(a.chapterId);
          const cB = chapterMap.get(b.chapterId);
          const uA = unitMap.get(a.unitId || cA?.unitId || '');
          const uB = unitMap.get(b.unitId || cB?.unitId || '');
          const sA = subjectMap.get(a.subjectId || cA?.subjectId || uA?.subjectId || '');
          const sB = subjectMap.get(b.subjectId || cB?.subjectId || uB?.subjectId || '');
          return (
            safeSortOrder(sA?.sortOrder) - safeSortOrder(sB?.sortOrder) ||
            safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) ||
            compareNaturalText(a.title, b.title)
          );
        })
      );
      setQuestions(qs);
      if (ex.length > 0 && !form.examinationId) {
        setForm((p) => ({ ...p, examinationId: ex[0].id }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load practice assessments.');
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
  const questionMap = useMemo(() => new Map(questions.map((q) => [q.id, q])), [questions]);

  const getTopicPath = (topicId?: string, subjId?: string) => {
    if (topicId) {
      const t = topicMap.get(topicId);
      if (t) {
        const c = chapterMap.get(t.chapterId);
        const u = unitMap.get(t.unitId || c?.unitId || '');
        const s = subjectMap.get(t.subjectId || c?.subjectId || u?.subjectId || '');
        return [s?.title, u?.title, c?.title, t.title].filter(Boolean).join(' / ');
      }
    }
    if (subjId) {
      return subjectMap.get(subjId)?.title || 'Subject-wide Assessment';
    }
    return 'All Subjects / Multi-Topic Assessment';
  };

  const pickerQuestions = useMemo(() => {
    let list = questions;
    if (form.topicId) {
      list = questions.filter((q) => q.topicId === form.topicId);
    } else if (form.subjectId) {
      list = questions.filter((q) => q.subjectId === form.subjectId);
    }
    return [...list].sort((a, b) => Number(b.isPublished) - Number(a.isPublished));
  }, [questions, form.topicId, form.subjectId]);

  const toggleQuestion = (qid: string) => {
    setSelectedQids((prev) =>
      prev.includes(qid) ? prev.filter((id) => id !== qid) : [...prev, qid].slice(0, 200)
    );
  };

  const validatePlayability = (qIds: string[], testType: TestType, topicId: string): string | null => {
    if (testType === 'topic' && !topicId) {
      return 'Topic Practice Assessments must be linked to a specific Topic.';
    }
    if (!Array.isArray(qIds) || qIds.length === 0) {
      return 'Attach at least 1 published question before publishing this assessment.';
    }
    if (new Set(qIds).size !== qIds.length) {
      return 'Duplicate question references are not allowed in a test paper.';
    }
    for (const qId of qIds) {
      const q = questionMap.get(qId);
      if (!q) return 'An attached question no longer exists in the Question Bank.';
      if (!q.isPublished) {
        return `Question "${q.stem.slice(0, 48)}..." is still a Draft. Publish all attached questions or save assessment as Draft.`;
      }
      if (!Array.isArray(q.options) || q.options.length < 2 || !Number.isInteger(q.correctOptionIndex) || q.correctOptionIndex < 0 || q.correctOptionIndex >= q.options.length) {
        return `Question "${q.stem.slice(0, 48)}..." has invalid answer options.`;
      }
    }
    return null;
  };

  const resetForm = () => {
    setEditingId(null);
    setSelectedQids([]);
    setForm((p) => ({
      examinationId: p.examinationId || exams[0]?.id || '',
      subjectId: '',
      topicId: '',
      title: '',
      testType: 'topic',
      durationMinutes: 15,
      totalMarks: 15,
      negativeMarking: 0.25,
      isPublished: true,
    }));
  };

  const handleAutoFillTopicMcqs = () => {
    if (!form.topicId) {
      setError('Select a target topic first to auto-fill its published MCQs.');
      return;
    }
    const publishedTopicMcqs = questions
      .filter((q) => q.topicId === form.topicId && q.isPublished && q.questionType !== 'pyq')
      .slice(0, 200)
      .map((q) => q.id);
    if (publishedTopicMcqs.length === 0) {
      setError('No published MCQs exist for the selected topic yet.');
      return;
    }
    setError(null);
    setSelectedQids(publishedTopicMcqs);
    const topicTitle = topicMap.get(form.topicId)?.title;
    setForm((p) => ({
      ...p,
      title: p.title.trim() ? p.title : `Practice Assessment: ${topicTitle ?? 'Topic'}`,
      totalMarks: publishedTopicMcqs.length,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !form.examinationId) return;
    if (selectedQids.length === 0) {
      setError('Select at least 1 question to include in this practice assessment.');
      return;
    }
    if (form.isPublished) {
      const validationError = validatePlayability(selectedQids, form.testType, form.topicId);
      if (validationError) {
        setError(validationError);
        return;
      }
    }

    const selectedTopic = form.topicId ? topicMap.get(form.topicId) : undefined;
    const resolvedSubjectId = selectedTopic?.subjectId || form.subjectId || '';
    const resolvedCourseId = selectedTopic?.courseId || '';

    const isEdit = Boolean(editingId);
    const id = editingId ?? generateSafeId('tst');
    const existingTest = isEdit ? tests.find((t) => t.id === editingId) : undefined;

    setSaving(true);
    setError(null);
    setNotice(null);

    try {
      await upsertAdminEntity<TestPaper>(
        'tests',
        id,
        {
          id,
          examinationId: form.examinationId,
          courseId: resolvedCourseId,
          subjectId: resolvedSubjectId,
          topicId: selectedTopic?.id || '',
          title: clampString(form.title, 200),
          testType: form.testType,
          durationMinutes: Math.min(Math.max(1, Number(form.durationMinutes) || 15), 360),
          totalMarks: Math.min(Math.max(1, Number(form.totalMarks) || selectedQids.length), 1000),
          negativeMarking: Math.min(Math.max(0, Number(form.negativeMarking) || 0), 5),
          questionCount: selectedQids.length,
          questionIds: selectedQids,
          isPublished: form.isPublished,
          createdBy: existingTest?.createdBy ?? firebaseUser.uid,
        },
        isEdit
      );
      setNotice(isEdit ? 'Practice assessment updated.' : 'Practice assessment created.');
      resetForm();
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save practice assessment.');
    } finally {
      setSaving(false);
    }
  };

  const togglePublish = async (t: TestPaper) => {
    const nextPublish = !t.isPublished;
    if (nextPublish) {
      const validationError = validatePlayability(t.questionIds ?? [], t.testType, t.topicId ?? '');
      if (validationError) {
        setError(`Cannot publish "${t.title}": ${validationError}`);
        return;
      }
    }
    try {
      setError(null);
      await upsertAdminEntity<TestPaper>(
        'tests',
        t.id,
        { ...t, isPublished: nextPublish },
        true
      );
      setNotice(`Assessment "${t.title}" ${nextPublish ? 'published' : 'unpublished'}.`);
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update publication status.');
    }
  };

  const filterTopics = useMemo(
    () => (subjectFilter ? topics.filter((t) => t.subjectId === subjectFilter) : topics),
    [topics, subjectFilter]
  );

  const displayedTests = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return tests.filter((t) => {
      if (subjectFilter && t.subjectId !== subjectFilter) return false;
      if (topicFilter && t.topicId !== topicFilter) return false;
      if (statusFilter === 'published' && !t.isPublished) return false;
      if (statusFilter === 'draft' && t.isPublished) return false;
      if (typeFilter !== 'all' && t.testType !== typeFilter) return false;
      if (
        q &&
        !t.title.toLowerCase().includes(q) &&
        !(t.topicId ? topicMap.get(t.topicId)?.title || '' : '').toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }, [tests, subjectFilter, topicFilter, statusFilter, typeFilter, searchQuery, topicMap]);

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Practice Assessments"
      breadcrumb="UK Prep / Admin / Practice Assessments"
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
          <Link
            to="/admin/topics"
            className="text-xs font-semibold text-accent-text hover:underline whitespace-nowrap"
          >
            Open Topic Batch Sync &amp; JSON Import →
          </Link>
        </div>

        {notice && <SuccessBanner message={notice} />}
        {error && <ErrorState message={error} onRetry={() => void loadData()} />}

        {previewTest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="bg-panel border border-edge rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-xl">
              <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-edge">
                <div>
                  <div className="text-[11px] font-mono uppercase text-accent-text">
                    {previewTest.testType.replace('_', ' ')} Assessment · {previewTest.questions.length} Qs ·{' '}
                    {previewTest.durationMinutes} mins · {previewTest.totalMarks} marks · -{previewTest.negativeMarking} neg
                  </div>
                  <h3 className="text-base font-bold text-ink">{previewTest.title}</h3>
                  <div className="text-xs text-ink-faint">{previewTest.topicPath}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewTest(null)}
                  className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle"
                  aria-label="Close preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto space-y-4">
                {previewTest.questions.length === 0 ? (
                  <p className="text-sm text-red-500">
                    Warning: No valid questions found in Question Bank for this test.
                  </p>
                ) : (
                  previewTest.questions.map((q, idx) => (
                    <div key={q.id} className="rounded-xl border border-edge bg-subtle/40 p-4 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-accent-text">
                        <span>
                          Q{idx + 1} ·{' '}
                          {q.questionType === 'pyq'
                            ? `Verified PYQ${q.examName ? ` (${q.examName} ${q.examYear ?? ''})` : ''}`
                            : 'Practice Question'}
                        </span>
                        <span className={q.isPublished ? 'text-emerald-600' : 'text-amber-600'}>
                          {q.isPublished ? 'Published' : 'Draft'}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-ink">{q.stem}</div>
                      <div className="grid sm:grid-cols-2 gap-1.5 text-xs">
                        {q.options.map((opt, optIdx) => (
                          <div
                            key={optIdx}
                            className={`px-2.5 py-1.5 rounded border ${
                              optIdx === q.correctOptionIndex
                                ? 'border-emerald-500/60 bg-emerald-500/10 font-medium text-ink'
                                : 'border-edge bg-field text-ink-muted'
                            }`}
                          >
                            {String.fromCharCode(65 + optIdx)}. {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-ink">
                {editingId ? 'Edit Practice Assessment' : 'Configure Practice Assessment'}
              </h2>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-xs text-ink-muted hover:text-ink inline-flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" /> Cancel
                </button>
              )}
            </div>
            {exams.length === 0 ? (
              <p className="text-xs text-accent-text">Create an Examination first.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <CascadingTopicSelector
                  subjects={subjects}
                  units={units}
                  chapters={chapters}
                  topics={topics}
                  valueTopicId={form.topicId}
                  valueSubjectId={form.subjectId}
                  allowEmptyTopic
                  emptyTopicLabel="Multi-Topic / Subject Mock"
                  onChange={({ topicId, subjectId }) => {
                    const nextTopic = topicId ? topicMap.get(topicId) : undefined;
                    const nextCourse = nextTopic ? courses.find((c) => c.id === nextTopic.courseId) : undefined;
                    setForm((p) => ({
                      ...p,
                      topicId,
                      subjectId,
                      examinationId: nextCourse?.examinationId || p.examinationId,
                    }));
                  }}
                />

                <div>
                  <label htmlFor="tst-exam" className="block text-xs font-medium text-ink-muted mb-1">
                    Examination
                  </label>
                  <select
                    id="tst-exam"
                    value={form.examinationId}
                    onChange={(e) => setForm((p) => ({ ...p, examinationId: e.target.value }))}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink"
                  >
                    {exams.map((ex) => (
                      <option key={ex.id} value={ex.id}>
                        {ex.code} — {ex.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="tst-title" className="block text-xs font-medium text-ink-muted mb-1">
                    Assessment Title
                  </label>
                  <input
                    id="tst-title"
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                    placeholder="e.g., Practice Assessment: Fundamental Rights"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="tst-type" className="block text-xs font-medium text-ink-muted mb-1">
                      Assessment Type
                    </label>
                    <select
                      id="tst-type"
                      value={form.testType}
                      onChange={(e) => setForm((p) => ({ ...p, testType: e.target.value as TestType }))}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                    >
                      <option value="topic">Topic Practice</option>
                      <option value="mock">Mock Exam</option>
                      <option value="sectional">Sectional Test</option>
                      <option value="pyq">PYQ Paper</option>
                      <option value="current_affairs">Current Affairs</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="tst-dur" className="block text-xs font-medium text-ink-muted mb-1">
                      Duration (mins)
                    </label>
                    <input
                      id="tst-dur"
                      type="number"
                      min={1}
                      max={360}
                      value={form.durationMinutes}
                      onChange={(e) => setForm((p) => ({ ...p, durationMinutes: Number(e.target.value) }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="tst-marks" className="block text-xs font-medium text-ink-muted mb-1">
                      Total Marks
                    </label>
                    <input
                      id="tst-marks"
                      type="number"
                      min={1}
                      max={1000}
                      value={form.totalMarks}
                      onChange={(e) => setForm((p) => ({ ...p, totalMarks: Number(e.target.value) }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink font-mono"
                    />
                  </div>
                  <div>
                    <label htmlFor="tst-neg" className="block text-xs font-medium text-ink-muted mb-1">
                      Negative Marking
                    </label>
                    <input
                      id="tst-neg"
                      type="number"
                      step="0.05"
                      min={0}
                      max={5}
                      value={form.negativeMarking}
                      onChange={(e) => setForm((p) => ({ ...p, negativeMarking: Number(e.target.value) }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink font-mono"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-ink-muted mb-1.5">
                    <span>Attach Questions ({selectedQids.length} selected)</span>
                    <div className="flex items-center gap-2">
                      {form.topicId && (
                        <button
                          type="button"
                          onClick={handleAutoFillTopicMcqs}
                          className="inline-flex items-center gap-1 text-accent-text hover:underline"
                        >
                          <Sparkles className="w-3 h-3" /> Auto-Fill Topic MCQs
                        </button>
                      )}
                      {pickerQuestions.length > 0 && (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedQids(
                              pickerQuestions
                                .filter((q) => q.isPublished)
                                .map((q) => q.id)
                                .slice(0, 200)
                            )
                          }
                          className="text-accent-text hover:underline"
                        >
                          Select Published ({Math.min(200, pickerQuestions.filter((q) => q.isPublished).length)})
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="max-h-48 overflow-y-auto border border-edge bg-field rounded-lg divide-y divide-edge">
                    {pickerQuestions.length === 0 ? (
                      <div className="p-3 text-xs text-ink-faint">
                        No matching questions in Question Bank.
                      </div>
                    ) : (
                      pickerQuestions.map((q) => (
                        <label
                          key={q.id}
                          className="p-2.5 flex items-start gap-2 text-xs text-ink cursor-pointer hover:bg-subtle transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={selectedQids.includes(q.id)}
                            onChange={() => toggleQuestion(q.id)}
                            className="mt-0.5 accent-accent"
                          />
                          <div className="min-w-0 flex-1">
                            <span className="line-clamp-2">{q.stem}</span>
                            <span className="text-[10px] font-mono text-ink-faint">
                              {q.questionType.toUpperCase()} · {q.isPublished ? 'Published' : 'Draft'}
                            </span>
                          </div>
                        </label>
                      ))
                    )}
                  </div>
                </div>

                <label className="flex items-center gap-2 text-xs font-medium text-ink">
                  <input
                    type="checkbox"
                    checked={form.isPublished}
                    onChange={(e) => setForm((p) => ({ ...p, isPublished: e.target.checked }))}
                    className="accent-accent"
                  />
                  <span>Publish immediately (requires playable published questions)</span>
                </label>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors"
                >
                  {editingId ? <Pencil className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  <span>
                    {saving ? 'Saving...' : editingId ? 'Update Assessment' : 'Create Assessment'}
                  </span>
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="bg-panel border border-edge rounded-xl p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs font-semibold text-ink">
                  Showing {displayedTests.length} of {tests.length} Practice Assessment
                  {tests.length === 1 ? '' : 's'}
                </div>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-ink-faint absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search title or topic..."
                    className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
                  aria-label="Filter by assessment type"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value as 'all' | TestType)}
                  className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  <option value="all">All Types</option>
                  <option value="topic">Topic Practice</option>
                  <option value="mock">Mock Exam</option>
                  <option value="sectional">Sectional Test</option>
                  <option value="pyq">PYQ Paper</option>
                  <option value="current_affairs">Current Affairs</option>
                </select>
              </div>
            </div>

            {loading ? (
              <LoadingState label="Loading practice assessments..." />
            ) : displayedTests.length === 0 ? (
              <EmptyState
                title="No matching practice assessments"
                description="Create topic practice assessments, sectional tests, or full mock exams, or adjust your filter selections."
              />
            ) : (
              <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
                {displayedTests.map((t) => {
                  const issue = validatePlayability(t.questionIds ?? [], t.testType, t.topicId ?? '');
                  return (
                    <div key={t.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-xs font-mono text-accent-text">
                          {t.testType.toUpperCase()} · {t.questionCount} Qs · {t.totalMarks} marks ·{' '}
                          {t.durationMinutes}m · {t.isPublished ? 'Published' : 'Draft'}
                        </div>
                        <div className="text-sm font-semibold text-ink">{t.title}</div>
                        <div className="mt-0.5 text-[11px] text-ink-faint truncate">
                          {getTopicPath(t.topicId, t.subjectId)}
                        </div>
                        {issue && (
                          <div className="mt-1 text-[11px] text-amber-600 dark:text-amber-400">
                            Integrity warning: {issue}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          aria-label={`Preview ${t.title}`}
                          onClick={() => {
                            const resolvedQs = (t.questionIds ?? [])
                              .map((qid) => questionMap.get(qid))
                              .filter((item): item is Question => Boolean(item));
                            setPreviewTest({
                              title: t.title,
                              testType: t.testType,
                              durationMinutes: t.durationMinutes,
                              totalMarks: t.totalMarks,
                              negativeMarking: t.negativeMarking,
                              topicPath: getTopicPath(t.topicId, t.subjectId),
                              questions: resolvedQs,
                            });
                          }}
                          className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => void togglePublish(t)}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-lg border border-edge-strong bg-field text-ink hover:border-accent"
                        >
                          {t.isPublished ? 'Unpublish' : 'Publish'}
                        </button>
                        <button
                          type="button"
                          aria-label={`Edit ${t.title}`}
                          onClick={() => {
                            setEditingId(t.id);
                            setSelectedQids(Array.isArray(t.questionIds) ? t.questionIds : []);
                            setForm({
                              examinationId: t.examinationId,
                              subjectId: t.subjectId ?? '',
                              topicId: t.topicId ?? '',
                              title: t.title,
                              testType: t.testType,
                              durationMinutes: t.durationMinutes,
                              totalMarks: t.totalMarks,
                              negativeMarking: t.negativeMarking,
                              isPublished: t.isPublished,
                            });
                            setNotice(null);
                            setError(null);
                          }}
                          className="p-1.5 rounded-lg text-ink-muted hover:text-accent-text hover:bg-accent/10 transition-colors"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        {confirmDeleteId === t.id ? (
                          <div className="inline-flex items-center gap-1 rounded-lg border border-red-500/40 bg-red-500/10 px-2 py-1 text-[11px]">
                            <button
                              type="button"
                              onClick={async () => {
                                await deleteAdminEntity('tests', t.id);
                                setConfirmDeleteId(null);
                                setNotice('Assessment deleted.');
                                if (editingId === t.id) resetForm();
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
                            aria-label={`Delete ${t.title}`}
                            onClick={() => setConfirmDeleteId(t.id)}
                            className="p-1.5 rounded-lg text-ink-muted hover:text-red-500 hover:bg-red-500/10 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
