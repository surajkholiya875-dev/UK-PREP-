import React, { useEffect, useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { ADMIN_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  clampString,
  deleteAdminEntity,
  fetchAllAdminCollection,
  generateSafeId,
  upsertAdminEntity,
} from '../../services/firestoreService';
import { Examination, Question, TestPaper, TestType } from '../../types/academic';

export function AdminTestsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [tests, setTests] = useState<TestPaper[]>([]);
  const [exams, setExams] = useState<Examination[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQids, setSelectedQids] = useState<string[]>([]);

  const [form, setForm] = useState({
    examinationId: '',
    title: '',
    testType: 'mock' as TestType,
    durationMinutes: 120,
    totalMarks: 100,
    negativeMarking: 0.25,
    isPublished: true,
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [ts, ex, qs] = await Promise.all([
        fetchAllAdminCollection<TestPaper>('tests'),
        fetchAllAdminCollection<Examination>('examinations'),
        fetchAllAdminCollection<Question>('questions'),
      ]);
      setTests(ts);
      setExams(ex);
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

  const toggleQuestion = (qid: string) => {
    setSelectedQids((prev) =>
      prev.includes(qid) ? prev.filter((id) => id !== qid) : [...prev, qid].slice(0, 200)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !form.examinationId) return;
    const id = generateSafeId('tst');
    try {
      await upsertAdminEntity<TestPaper>(
        'tests',
        id,
        {
          id,
          examinationId: form.examinationId,
          courseId: '',
          subjectId: '',
          title: clampString(form.title, 200),
          testType: form.testType,
          durationMinutes: Number(form.durationMinutes) || 60,
          totalMarks: Number(form.totalMarks) || 100,
          negativeMarking: Number(form.negativeMarking) || 0,
          questionCount: selectedQids.length,
          questionIds: selectedQids,
          isPublished: form.isPublished,
          createdBy: firebaseUser.uid,
        },
        false
      );
      setNotice('Test paper created.');
      setForm((p) => ({ ...p, title: '' }));
      setSelectedQids([]);
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create test paper.');
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
          <h2 className="text-base font-semibold text-ink mb-4">Configure Test Paper</h2>
          {exams.length === 0 ? (
            <p className="text-xs text-accent-text">Create an Examination first.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="tst-exam" className="block text-xs font-medium text-ink-muted mb-1">Examination</label>
                <select
                  id="tst-exam"
                  value={form.examinationId}
                  onChange={(e) => setForm((p) => ({ ...p, examinationId: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  {exams.map((ex) => (
                    <option key={ex.id} value={ex.id}>{ex.code} — {ex.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="tst-title" className="block text-xs font-medium text-ink-muted mb-1">Test Title</label>
                <input
                  id="tst-title"
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="tst-type" className="block text-xs font-medium text-ink-muted mb-1">Type</label>
                  <select
                    id="tst-type"
                    value={form.testType}
                    onChange={(e) => setForm((p) => ({ ...p, testType: e.target.value as TestType }))}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="mock">Mock Exam</option>
                    <option value="sectional">Sectional Test</option>
                    <option value="pyq">PYQ Paper</option>
                    <option value="current_affairs">Current Affairs</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="tst-dur" className="block text-xs font-medium text-ink-muted mb-1">Duration (mins)</label>
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
                  <label htmlFor="tst-marks" className="block text-xs font-medium text-ink-muted mb-1">Total Marks</label>
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
                  <label htmlFor="tst-neg" className="block text-xs font-medium text-ink-muted mb-1">Negative Mark</label>
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
                <div className="text-xs font-medium text-ink-muted mb-1.5">
                  Attach Questions ({selectedQids.length} selected)
                </div>
                <div className="max-h-40 overflow-y-auto border border-edge bg-field rounded-lg divide-y divide-edge">
                  {questions.length === 0 ? (
                    <div className="p-3 text-xs text-ink-faint">No questions in Question Bank yet.</div>
                  ) : (
                    questions.map((q) => (
                      <label key={q.id} className="p-2.5 flex items-start gap-2 text-xs text-ink cursor-pointer hover:bg-subtle transition-colors">
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

              <button type="submit" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors">
                <Plus className="w-3.5 h-3.5" />
                <span>Create Test Paper</span>
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
            <EmptyState title="No test papers configured" description="Create full-length mock examinations, sectional tests, and PYQ papers here." />
          ) : (
            <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
              {tests.map((t) => (
                <div key={t.id} className="p-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-accent-text">
                      {t.testType.toUpperCase()} · {t.questionCount} Qs · {t.totalMarks} marks · {t.durationMinutes}m
                    </div>
                    <div className="text-sm font-semibold text-ink">{t.title}</div>
                  </div>
                  <button
                    type="button"
                    onClick={async () => {
                      await deleteAdminEntity('tests', t.id);
                      setNotice('Test deleted.');
                      await loadData();
                    }}
                    className="p-2 rounded-lg text-ink-muted hover:text-red-500 hover:bg-red-500/10 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
