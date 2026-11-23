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
import {
  Chapter,
  Course,
  Examination,
  Question,
  QuestionDifficulty,
  QuestionType,
  Subject,
  Topic,
} from '../../types/academic';

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

  const [editingId, setEditingId] = useState<string | null>(null);
  const [subjectFilter, setSubjectFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');

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
    examName: '',
    examYear: 2024,
    isPublished: true,
  });

  useEffect(() => {
    setForm((prev) => (editingId ? prev : { ...prev, questionType: defaultType }));
  }, [defaultType, editingId]);

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
      const subjectMap = new Map(subjs.map((s) => [s.id, s]));
      const sortedSubjs = [...subjs].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      );
      const sortedTopics = [...tpcs].sort((a, b) => {
        const sA = subjectMap.get(a.subjectId);
        const sB = subjectMap.get(b.subjectId);
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
      setSubjects(sortedSubjs);

      const initialExamId = form.examinationId || exms[0]?.id || '';
      const firstTopicForExam = sortedTopics.find((topic) =>
        crs.some((course) => course.id === topic.courseId && course.examinationId === initialExamId)
      );
      if (!form.examinationId || !form.topicId) {
        setForm((previous) => ({
          ...previous,
          examinationId: previous.examinationId || initialExamId,
          topicId: previous.topicId || firstTopicForExam?.id || '',
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

  const resetForm = (preserveExamAndTopic = true) => {
    setEditingId(null);
    setForm((p) => ({
      examinationId: preserveExamAndTopic ? p.examinationId : exams[0]?.id || '',
      topicId: preserveExamAndTopic ? p.topicId : topics[0]?.id || '',
      questionType: defaultType,
      stem: '',
      optA: '',
      optB: '',
      optC: '',
      optD: '',
      correctOptionIndex: 0,
      explanation: '',
      difficulty: 'standard',
      examName: '',
      examYear: 2024,
      isPublished: true,
    }));
  };

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

    if (form.questionType === 'pyq' && !form.examName.trim()) {
      setError('For a verified PYQ, provide the official Examination Name (e.g., UKPSC Upper PCS Prelims).');
      return;
    }

    const isEdit = Boolean(editingId);
    const id = editingId ?? generateSafeId('q');
    const existingQuestion = isEdit ? questions.find((q) => q.id === editingId) : undefined;

    try {
      setError(null);
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
          ...(form.questionType === 'pyq'
            ? {
                examName: clampString(form.examName, 120),
                examYear: Number(form.examYear) || 2024,
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
    }
  };

  const togglePublish = async (q: Question) => {
    try {
      await upsertAdminEntity<Question>(
        'questions',
        q.id,
        { ...q, isPublished: !q.isPublished },
        true
      );
      setNotice(`Question "${q.stem.slice(0, 48)}..." ${q.isPublished ? 'unpublished' : 'published'}.`);
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update publication status.');
    }
  };

  const displayed = useMemo(() => {
    return questions.filter((q) => {
      const typeMatch = q.questionType === (defaultType === 'pyq' ? 'pyq' : 'mcq');
      const subjectMatch = !subjectFilter || q.subjectId === subjectFilter;
      const topicMatch = !topicFilter || q.topicId === topicFilter;
      return typeMatch && subjectMatch && topicMatch;
    });
  }, [questions, defaultType, subjectFilter, topicFilter]);

  const topicsForSelectedExam = topics.filter((topic) =>
    courses.some((course) => course.id === topic.courseId && course.examinationId === form.examinationId)
  );

  const filterTopics = useMemo(
    () => (subjectFilter ? topics.filter((t) => t.subjectId === subjectFilter) : topics),
    [topics, subjectFilter]
  );

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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-ink">
              {editingId
                ? 'Edit Question'
                : defaultType === 'pyq'
                  ? 'Add Verified Previous Year Question'
                  : 'Add Question'}
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
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="q-exam" className="block text-xs font-medium text-ink-muted mb-1">
                    Examination
                  </label>
                  <select
                    id="q-exam"
                    value={form.examinationId}
                    onChange={(e) => {
                      const examinationId = e.target.value;
                      const firstTopic = topics.find((topic) =>
                        courses.some((course) => course.id === topic.courseId && course.examinationId === examinationId)
                      );
                      setForm((p) => ({ ...p, examinationId, topicId: firstTopic?.id || '' }));
                    }}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    {exams.map((ex) => (
                      <option key={ex.id} value={ex.id}>
                        {ex.code}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="q-topic" className="block text-xs font-medium text-ink-muted mb-1">
                    Topic
                  </label>
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
                      return (
                        <option key={t.id} value={t.id}>
                          {subject?.title || 'Subject'} / {chapter?.title || 'Chapter'} / {t.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="q-type" className="block text-xs font-medium text-ink-muted mb-1">
                    Question Type
                  </label>
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
                  <label htmlFor="q-diff" className="block text-xs font-medium text-ink-muted mb-1">
                    Difficulty
                  </label>
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
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="q-exam-name" className="block text-xs font-medium text-ink-muted mb-1">
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
                      className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="q-year" className="block text-xs font-medium text-ink-muted mb-1">
                      Exam Year
                    </label>
                    <input
                      id="q-year"
                      type="number"
                      min={1990}
                      max={2100}
                      value={form.examYear}
                      onChange={(e) => setForm((p) => ({ ...p, examYear: Number(e.target.value) }))}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent font-mono"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="q-stem" className="block text-xs font-medium text-ink-muted mb-1">
                  Question Stem
                </label>
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
                <label htmlFor="q-correct" className="block text-xs font-medium text-ink-muted mb-1">
                  Correct Option
                </label>
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
                <label htmlFor="q-exp" className="block text-xs font-medium text-ink-muted mb-1">
                  Explanation
                </label>
                <textarea
                  id="q-exp"
                  rows={2}
                  value={form.explanation}
                  onChange={(e) => setForm((p) => ({ ...p, explanation: e.target.value }))}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
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
                <span>{editingId ? 'Update Question' : 'Add Question'}</span>
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="bg-panel border border-edge rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs font-semibold text-ink">
              Showing {displayed.length} {defaultType === 'pyq' ? 'PYQ' : 'MCQ'}
              {displayed.length === 1 ? '' : 's'}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <select
                aria-label="Filter by subject"
                value={subjectFilter}
                onChange={(e) => {
                  setSubjectFilter(e.target.value);
                  setTopicFilter('');
                }}
                className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
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
                className="max-w-[220px] px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">All Topics</option>
                {filterTopics.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {notice && <SuccessBanner message={notice} />}
          {error && <ErrorState message={error} onRetry={() => void loadData()} />}
          {loading ? (
            <LoadingState label="Loading questions..." />
          ) : displayed.length === 0 ? (
            <EmptyState
              title="No questions in bank"
              description="Add MCQs, verified previous-year questions, and current affairs questions linked to syllabus topics."
            />
          ) : (
            <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
              {displayed.map((q) => {
                const topic = topics.find((t) => t.id === q.topicId);
                const subject = subjects.find((s) => s.id === q.subjectId);
                return (
                  <div key={q.id} className="p-4 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-accent-text">
                        {q.questionType.toUpperCase()} · {q.difficulty}
                        {q.examName ? ` · ${q.examName}` : ''}
                        {q.examYear ? ` (${q.examYear})` : ''} · {q.isPublished ? 'Published' : 'Draft'}
                      </div>
                      <div className="mt-1 text-sm font-medium text-ink">{q.stem}</div>
                      <div className="mt-1 text-[11px] text-ink-faint">
                        {subject?.title || 'Subject'} / {topic?.title || 'Topic'}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => void togglePublish(q)}
                        className="px-2 py-1 text-[11px] font-medium rounded border border-edge-strong bg-field text-ink-muted hover:text-ink"
                      >
                        {q.isPublished ? 'Unpublish' : 'Publish'}
                      </button>
                      <button
                        type="button"
                        aria-label={`Edit question`}
                        onClick={() => {
                          setEditingId(q.id);
                          setForm({
                            examinationId: q.examinationId,
                            topicId: q.topicId,
                            questionType: q.questionType,
                            stem: q.stem,
                            optA: q.options[0] ?? '',
                            optB: q.options[1] ?? '',
                            optC: q.options[2] ?? '',
                            optD: q.options[3] ?? '',
                            correctOptionIndex: q.correctOptionIndex,
                            explanation: q.explanation ?? '',
                            difficulty: q.difficulty,
                            examName: q.examName ?? '',
                            examYear: q.examYear ?? 2024,
                            isPublished: q.isPublished,
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
                        aria-label="Delete question"
                        onClick={async () => {
                          await deleteAdminEntity('questions', q.id);
                          setNotice('Question removed.');
                          if (editingId === q.id) resetForm(true);
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
