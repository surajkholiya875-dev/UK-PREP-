import React, { useEffect, useMemo, useState } from 'react';
import { Pencil, Plus, Trash2, X } from 'lucide-react';
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
import { Examination, Question, Subject, TestPaper, TestType, Topic } from '../../types/academic';

export function AdminTestsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [tests, setTests] = useState<TestPaper[]>([]);
  const [exams, setExams] = useState<Examination[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQids, setSelectedQids] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

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
      const [ts, ex, subjs, tpcs, qs] = await Promise.all([
        fetchAllAdminCollection<TestPaper>('tests'),
        fetchAllAdminCollection<Examination>('examinations'),
        fetchAllAdminCollection<Subject>('subjects'),
        fetchAllAdminCollection<Topic>('topics'),
        fetchAllAdminCollection<Question>('questions'),
      ]);
      const subjectMap = new Map(subjs.map((s) => [s.id, s]));
      setTests(ts);
      setExams(ex);
      setSubjects(
        [...subjs].sort(
          (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
        )
      );
      setTopics(
        [...tpcs].sort((a, b) => {
          const sA = subjectMap.get(a.subjectId);
          const sB = subjectMap.get(b.subjectId);
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
      setError(err instanceof Error ? err.message : 'Unable to load tests.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredTopics = useMemo(
    () => (form.subjectId ? topics.filter((t) => t.subjectId === form.subjectId) : topics),
    [topics, form.subjectId]
  );

  const pickerQuestions = useMemo(() => {
    if (form.topicId) {
      return questions.filter((q) => q.topicId === form.topicId);
    }
    if (form.subjectId) {
      return questions.filter((q) => q.subjectId === form.subjectId);
    }
    return questions;
  }, [questions, form.topicId, form.subjectId]);

  const toggleQuestion = (qid: string) => {
    setSelectedQids((prev) =>
      prev.includes(qid) ? prev.filter((id) => id !== qid) : [...prev, qid].slice(0, 200)
    );
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !form.examinationId) return;
    if (selectedQids.length === 0) {
      setError('Select at least 1 question to include in this test paper.');
      return;
    }

    const selectedTopic = form.topicId ? topics.find((t) => t.id === form.topicId) : undefined;
    const resolvedSubjectId = selectedTopic?.subjectId || form.subjectId || '';
    const resolvedCourseId = selectedTopic?.courseId || '';

    const isEdit = Boolean(editingId);
    const id = editingId ?? generateSafeId('tst');
    const existingTest = isEdit ? tests.find((t) => t.id === editingId) : undefined;

    try {
      setError(null);
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
          durationMinutes: Number(form.durationMinutes) || 15,
          totalMarks: Number(form.totalMarks) || selectedQids.length,
          negativeMarking: Number(form.negativeMarking) || 0,
          questionCount: selectedQids.length,
          questionIds: selectedQids,
          isPublished: form.isPublished,
          createdBy: existingTest?.createdBy ?? firebaseUser.uid,
        },
        isEdit
      );
      setNotice(isEdit ? 'Test paper updated.' : 'Test paper created.');
      resetForm();
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save test paper.');
    }
  };

  const togglePublish = async (t: TestPaper) => {
    try {
      await upsertAdminEntity<TestPaper>(
        'tests',
        t.id,
        { ...t, isPublished: !t.isPublished },
        true
      );
      setNotice(`Test "${t.title}" ${t.isPublished ? 'unpublished' : 'published'}.`);
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update publication status.');
    }
  };

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Test Management"
      breadcrumb="UK Prep / Admin / Tests"
      isAdminWorkspace
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-ink">
              {editingId ? 'Edit Test Paper' : 'Configure Test Paper'}
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
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="tst-exam" className="block text-xs font-medium text-ink-muted mb-1">
                  Examination
                </label>
                <select
                  id="tst-exam"
                  value={form.examinationId}
                  onChange={(e) => setForm((p) => ({ ...p, examinationId: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  {exams.map((ex) => (
                    <option key={ex.id} value={ex.id}>
                      {ex.code} — {ex.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="tst-subj" className="block text-xs font-medium text-ink-muted mb-1">
                    Subject (Optional)
                  </label>
                  <select
                    id="tst-subj"
                    value={form.subjectId}
                    onChange={(e) => setForm((p) => ({ ...p, subjectId: e.target.value, topicId: '' }))}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">All / Multi-Subject</option>
                    {subjects.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="tst-topic" className="block text-xs font-medium text-ink-muted mb-1">
                    Topic (For Topic Assessment)
                  </label>
                  <select
                    id="tst-topic"
                    value={form.topicId}
                    onChange={(e) => setForm((p) => ({ ...p, topicId: e.target.value }))}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">No specific topic</option>
                    {filteredTopics.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="tst-title" className="block text-xs font-medium text-ink-muted mb-1">
                  Test Title
                </label>
                <input
                  id="tst-title"
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  placeholder="e.g., Practice Assessment: Panch Prayag & Rivers"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="tst-type" className="block text-xs font-medium text-ink-muted mb-1">
                    Type
                  </label>
                  <select
                    id="tst-type"
                    value={form.testType}
                    onChange={(e) => setForm((p) => ({ ...p, testType: e.target.value as TestType }))}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
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
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent font-mono"
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
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="tst-neg" className="block text-xs font-medium text-ink-muted mb-1">
                    Negative Mark
                  </label>
                  <input
                    id="tst-neg"
                    type="number"
                    step="0.05"
                    min={0}
                    max={5}
                    value={form.negativeMarking}
                    onChange={(e) => setForm((p) => ({ ...p, negativeMarking: Number(e.target.value) }))}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent font-mono"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-medium text-ink-muted mb-1.5">
                  <span>Attach Questions ({selectedQids.length} selected)</span>
                  {pickerQuestions.length > 0 && (
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedQids(pickerQuestions.map((q) => q.id).slice(0, 200))
                      }
                      className="text-accent-text hover:underline"
                    >
                      Select Visible ({Math.min(200, pickerQuestions.length)})
                    </button>
                  )}
                </div>
                <div className="max-h-44 overflow-y-auto border border-edge bg-field rounded-lg divide-y divide-edge">
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
                        <span className="line-clamp-2">{q.stem}</span>
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
                <span>Published to Students</span>
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
              >
                {editingId ? <Pencil className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                <span>{editingId ? 'Update Test Paper' : 'Create Test Paper'}</span>
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-7 space-y-4">
          {notice && <SuccessBanner message={notice} />}
          {error && <ErrorState message={error} onRetry={() => void loadData()} />}
          {loading ? (
            <LoadingState label="Loading test papers..." />
          ) : tests.length === 0 ? (
            <EmptyState
              title="No test papers configured"
              description="Create full-length mock examinations, sectional tests, topic practice assessments, and PYQ papers here."
            />
          ) : (
            <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
              {tests.map((t) => {
                const linkedTopic = t.topicId ? topics.find((item) => item.id === t.topicId) : undefined;
                return (
                  <div key={t.id} className="p-4 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-accent-text">
                        {t.testType.toUpperCase()} · {t.questionCount} Qs · {t.totalMarks} marks ·{' '}
                        {t.durationMinutes}m · {t.isPublished ? 'Published' : 'Draft'}
                      </div>
                      <div className="text-sm font-semibold text-ink">{t.title}</div>
                      {linkedTopic && (
                        <div className="mt-0.5 text-[11px] text-ink-faint">Topic: {linkedTopic.title}</div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => void togglePublish(t)}
                        className="px-2 py-1 text-[11px] font-medium rounded border border-edge-strong bg-field text-ink-muted hover:text-ink"
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
                        className="p-2 rounded-lg text-ink-muted hover:text-accent-text hover:bg-accent/10 transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        aria-label={`Delete ${t.title}`}
                        onClick={async () => {
                          await deleteAdminEntity('tests', t.id);
                          setNotice('Test deleted.');
                          if (editingId === t.id) resetForm();
                          await loadData();
                        }}
                        className="p-2 rounded-lg text-ink-muted hover:text-red-500 hover:bg-red-500/10 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
