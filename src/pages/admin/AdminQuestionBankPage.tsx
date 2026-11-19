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
import { Chapter, Course, Examination, Question, QuestionDifficulty, QuestionType, Subject, Topic } from '../../types/academic';

export function AdminQuestionBankPage({ defaultType = 'mcq' }: { defaultType?: QuestionType }) {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [exams, setExams] = useState<Examination[]>([]);

  const [form, setForm] = useState({
    examinationId: '',
    topicId: '',
    questionType: defaultType,
    stem: '',
    optA: '',
    optB: '',
    optC: '',
    optD: '',
    correctOptionIndex: 0,
    explanation: '',
    difficulty: 'standard' as QuestionDifficulty,
    examYear: 2024,
    isPublished: true,
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [qs, tpcs, exms, crs, chps, subjs] = await Promise.all([
        fetchAllAdminCollection<Question>('questions'),
        fetchAllAdminCollection<Topic>('topics'),
        fetchAllAdminCollection<Examination>('examinations'),
        fetchAllAdminCollection<Course>('courses'),
        fetchAllAdminCollection<Chapter>('chapters'),
        fetchAllAdminCollection<Subject>('subjects'),
      ]);
      setQuestions(qs);
      setTopics(tpcs);
      setExams(exms);
      setCourses(crs);
      setChapters(chps);
      setSubjects(subjs);
      if (tpcs.length > 0 && !form.topicId) setForm((p) => ({ ...p, topicId: tpcs[0].id }));
      if (exms.length > 0 && !form.examinationId) setForm((p) => ({ ...p, examinationId: exms[0].id }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !form.topicId || !form.examinationId) return;
    const topic = topics.find((t) => t.id === form.topicId);
    const parentCourse = topic ? courses.find((course) => course.id === topic.courseId) : undefined;
    if (!topic || !parentCourse || parentCourse.examinationId !== form.examinationId) {
      setError('Choose a topic that belongs to the selected examination.');
      return;
    }

    const options = [form.optA, form.optB, form.optC, form.optD]
      .map((o) => o.trim())
      .filter(Boolean);
    if (options.length < 2) {
      setError('Provide at least 2 answer options.');
      return;
    }

    const id = generateSafeId('q');
    try {
      await upsertAdminEntity<Question>(
        'questions',
        id,
        {
          id,
          topicId: topic.id,
          chapterId: topic.chapterId,
          subjectId: topic.subjectId,
          examinationId: form.examinationId,
          questionType: form.questionType,
          stem: clampString(form.stem, 3000),
          options,
          correctOptionIndex: Math.min(form.correctOptionIndex, options.length - 1),
          explanation: clampString(form.explanation, 3000),
          difficulty: form.difficulty,
          ...(form.questionType === 'pyq' ? { examYear: Number(form.examYear) || 2024 } : {}),
          isPublished: form.isPublished,
          createdBy: firebaseUser.uid,
        },
        false
      );
      setNotice('Question added to bank.');
      setForm((p) => ({ ...p, stem: '', optA: '', optB: '', optC: '', optD: '', explanation: '' }));
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save question.');
    }
  };

  const displayed = defaultType === 'pyq' ? questions.filter((q) => q.questionType === 'pyq') : questions;

  const topicsForSelectedExam = topics.filter((topic) => courses.some((course) => course.id === topic.courseId && course.examinationId === form.examinationId));

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle={defaultType === 'pyq' ? 'PYQ Management' : 'Question Bank'}
      breadcrumb={`UK Prep / Admin / ${defaultType === 'pyq' ? 'PYQ Management' : 'Question Bank'}`}
      isAdminWorkspace
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-base font-semibold text-ink mb-4">
            {defaultType === 'pyq' ? 'Add Previous Year Question' : 'Add Question'}
          </h2>
          {topics.length === 0 || exams.length === 0 || courses.length === 0 ? (
            <p className="text-xs text-accent-text">
              Create at least one Examination and Topic before adding questions.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="q-exam" className="block text-xs font-medium text-ink-muted mb-1">Examination</label>
                  <select
                    id="q-exam"
                    value={form.examinationId}
                    onChange={(e) => {
                      const examinationId = e.target.value;
                      const firstTopic = topics.find((topic) => courses.some((course) => course.id === topic.courseId && course.examinationId === examinationId));
                      setForm((p) => ({ ...p, examinationId, topicId: firstTopic?.id || '' }));
                    }}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    {exams.map((ex) => (
                      <option key={ex.id} value={ex.id}>{ex.code}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="q-topic" className="block text-xs font-medium text-ink-muted mb-1">Topic</label>
                  <select
                    id="q-topic"
                    value={form.topicId}
                    disabled={topicsForSelectedExam.length === 0}
                    onChange={(e) => setForm((p) => ({ ...p, topicId: e.target.value }))}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    {topicsForSelectedExam.map((t) => {
                      const chapter = chapters.find((item) => item.id === t.chapterId);
                      const subject = subjects.find((item) => item.id === t.subjectId);
                      return <option key={t.id} value={t.id}>{subject?.title || 'Subject'} / {chapter?.title || 'Chapter'} / {t.title}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="q-type" className="block text-xs font-medium text-ink-muted mb-1">Question Type</label>
                  <select
                    id="q-type"
                    value={form.questionType}
                    onChange={(e) => setForm((p) => ({ ...p, questionType: e.target.value as QuestionType }))}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="mcq">Standard MCQ</option>
                    <option value="pyq">Previous Year (PYQ)</option>
                    <option value="current_affairs">Current Affairs</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="q-diff" className="block text-xs font-medium text-ink-muted mb-1">Difficulty</label>
                  <select
                    id="q-diff"
                    value={form.difficulty}
                    onChange={(e) => setForm((p) => ({ ...p, difficulty: e.target.value as QuestionDifficulty }))}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="foundation">Foundation</option>
                    <option value="standard">Standard</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {form.questionType === 'pyq' && (
                <div>
                  <label htmlFor="q-year" className="block text-xs font-medium text-ink-muted mb-1">Exam Year</label>
                  <input
                    id="q-year"
                    type="number"
                    min={1990}
                    max={2100}
                    value={form.examYear}
                    onChange={(e) => setForm((p) => ({ ...p, examYear: Number(e.target.value) }))}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent font-mono"
                  />
                </div>
              )}

              <div>
                <label htmlFor="q-stem" className="block text-xs font-medium text-ink-muted mb-1">Question Stem</label>
                <textarea
                  id="q-stem"
                  required
                  minLength={5}
                  rows={3}
                  value={form.stem}
                  onChange={(e) => setForm((p) => ({ ...p, stem: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input type="text" required placeholder="Option A" value={form.optA} onChange={(e) => setForm((p) => ({ ...p, optA: e.target.value }))} className="px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent" />
                <input type="text" required placeholder="Option B" value={form.optB} onChange={(e) => setForm((p) => ({ ...p, optB: e.target.value }))} className="px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent" />
                <input type="text" placeholder="Option C" value={form.optC} onChange={(e) => setForm((p) => ({ ...p, optC: e.target.value }))} className="px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent" />
                <input type="text" placeholder="Option D" value={form.optD} onChange={(e) => setForm((p) => ({ ...p, optD: e.target.value }))} className="px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent" />
              </div>

              <div>
                <label htmlFor="q-correct" className="block text-xs font-medium text-ink-muted mb-1">Correct Option</label>
                <select
                  id="q-correct"
                  value={form.correctOptionIndex}
                  onChange={(e) => setForm((p) => ({ ...p, correctOptionIndex: Number(e.target.value) }))}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value={0}>Option A</option>
                  <option value={1}>Option B</option>
                  <option value={2}>Option C</option>
                  <option value={3}>Option D</option>
                </select>
              </div>

              <div>
                <label htmlFor="q-exp" className="block text-xs font-medium text-ink-muted mb-1">Explanation</label>
                <textarea
                  id="q-exp"
                  rows={2}
                  value={form.explanation}
                  onChange={(e) => setForm((p) => ({ ...p, explanation: e.target.value }))}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>

              <button type="submit" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors">
                <Plus className="w-3.5 h-3.5" />
                <span>Add Question</span>
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-7 space-y-4">
          {notice && <SuccessBanner message={notice} />}
          {error && <ErrorState message={error} onRetry={() => void loadData()} />}
          {loading ? (
            <LoadingState label="Loading questions..." />
          ) : displayed.length === 0 ? (
            <EmptyState title="No questions in bank" description="Add MCQs, previous-year questions, and current affairs questions linked to syllabus topics." />
          ) : (
            <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
              {displayed.map((q) => (
                <div key={q.id} className="p-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-accent-text">
                      {q.questionType.toUpperCase()} · {q.difficulty}
                      {q.examYear ? ` · ${q.examYear}` : ''}
                    </div>
                    <div className="mt-1 text-sm font-medium text-ink">{q.stem}</div>
                  </div>
                  <button
                    type="button"
                    onClick={async () => {
                      await deleteAdminEntity('questions', q.id);
                      setNotice('Question removed.');
                      await loadData();
                    }}
                    className="p-2 rounded-lg text-ink-muted hover:text-red-500 hover:bg-red-500/10 transition-colors shrink-0"
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
