import { useEffect, useState } from 'react';
import { Bookmark as BookmarkIcon, CheckCircle2, XCircle } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  fetchPublishedCollection,
  fetchStudentOwned,
  toggleBookmark,
} from '../../services/firestoreService';
import { Bookmark, QuestionType, Subject, Topic } from '../../types/academic';

interface PracticeQuestion {
  id: string;
  topicId: string;
  subjectId: string;
  questionType: QuestionType;
  stem: string;
  options: string[];
  difficulty: string;
  examYear?: number;
}

interface AnswerFeedback {
  selectedIndex: number;
  correctOptionIndex: number;
  correct: boolean;
  explanation: string;
}

export function PracticeQuestionsPage() {
  const { firebaseUser } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const topicFilter = searchParams.get('topicId') || 'all';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [typeFilter, setTypeFilter] = useState<'all' | QuestionType>('all');
  const [feedback, setFeedback] = useState<Record<string, AnswerFeedback>>({});
  const [checkingId, setCheckingId] = useState<string | null>(null);

  const loadPractice = async () => {
    if (!firebaseUser) return;
    setLoading(true);
    setError(null);
    try {
      const token = await firebaseUser.getIdToken();
      const endpoint = topicFilter === 'all'
        ? '/api/student/questions'
        : `/api/student/questions?topicId=${encodeURIComponent(topicFilter)}`;
      const response = await fetch(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'Unable to load practice question bank.');
      const [subjs, tpcs, bm] = await Promise.all([
        fetchPublishedCollection<Subject>('subjects'),
        fetchPublishedCollection<Topic>('topics'),
        fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid),
      ]);
      setQuestions(Array.isArray(payload.questions) ? payload.questions : []);
      setSubjects(subjs);
      setTopics(tpcs);
      setBookmarks(bm);
      setFeedback({});
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load practice question bank.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadPractice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.uid, topicFilter]);

  const filtered = questions.filter((question) =>
    typeFilter === 'all' || question.questionType === typeFilter
  );

  const handleAnswer = async (question: PracticeQuestion, optionIndex: number) => {
    if (!firebaseUser || feedback[question.id]) return;
    setCheckingId(question.id);
    setError(null);
    try {
      const token = await firebaseUser.getIdToken();
      const response = await fetch(`/api/student/questions/${encodeURIComponent(question.id)}/answer`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ optionIndex }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to check this answer.');
      setFeedback((previous) => ({
        ...previous,
        [question.id]: {
          selectedIndex: optionIndex,
          correctOptionIndex: result.correctOptionIndex,
          correct: Boolean(result.correct),
          explanation: typeof result.explanation === 'string' ? result.explanation : '',
        },
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to check this answer.');
    } finally {
      setCheckingId(null);
    }
  };

  const handleBookmark = async (question: PracticeQuestion) => {
    if (!firebaseUser) return;
    try {
      const subject = subjects.find((item) => item.id === question.subjectId);
      const result = await toggleBookmark(
        firebaseUser.uid,
        'question',
        question.id,
        question.stem.slice(0, 140),
        subject?.title || ''
      );
      setNotice(result.saved ? 'Question saved to bookmarks.' : 'Question removed from bookmarks.');
      setBookmarks(await fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to update bookmark.');
    }
  };

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Practice Questions"
      breadcrumb="UK Prep / Student / Topic-wise MCQ & PYQ Practice"
    >
      <div className="space-y-6">
        <section className="rounded-xl border border-edge bg-panel p-5 shadow-sm space-y-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-text">Practice & Assessment</div>
            <h2 className="mt-1 text-xl font-bold text-ink">Topic-wise question bank</h2>
            <p className="mt-1 text-sm text-ink-muted">Choose a syllabus topic and practise its MCQs, previous-year questions and current-affairs questions. Answer keys are checked securely by the server.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.7fr)] gap-3">
            <select value={topicFilter} onChange={(e) => setSearchParams(e.target.value === 'all' ? {} : { topicId: e.target.value })} className="w-full rounded-lg border border-edge-strong bg-field px-3 py-2.5 text-sm text-ink outline-none focus:ring-2 focus:ring-accent">
              <option value="all">All syllabus topics</option>
              {topics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {subjects.find((subject) => subject.id === topic.subjectId)?.title || 'Subject'} — {topic.title}
                </option>
              ))}
            </select>
            <div className="flex flex-wrap gap-2">
              {([
                { id: 'all', label: 'All Questions' },
                { id: 'mcq', label: 'MCQs' },
                { id: 'pyq', label: 'PYQs' },
                { id: 'current_affairs', label: 'Current Affairs' },
              ] as const).map((tab) => (
                <button key={tab.id} type="button" onClick={() => setTypeFilter(tab.id)} className={`rounded-full border px-3 py-2 text-xs font-semibold ${typeFilter === tab.id ? 'border-accent bg-accent text-accent-ink' : 'border-edge-strong bg-subtle text-ink-muted hover:text-ink'}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {topicFilter !== 'all' && (
            <button type="button" onClick={() => setSearchParams({})} className="text-xs font-semibold text-accent-text hover:underline">Clear topic filter</button>
          )}
        </section>

        {notice && <SuccessBanner message={notice} />}
        {error && <ErrorState message={error} onRetry={() => void loadPractice()} />}

        {loading ? (
          <LoadingState label="Loading secure practice questions..." />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No published questions for this selection"
            description="Questions are displayed only after they are published and assigned to a syllabus topic. Select another topic or question type."
          />
        ) : (
          <div className="space-y-4">
            {filtered.map((question, index) => {
              const answer = feedback[question.id];
              const subject = subjects.find((item) => item.id === question.subjectId);
              const topic = topics.find((item) => item.id === question.topicId);
              const isSaved = bookmarks.some((item) => item.targetType === 'question' && item.targetId === question.id);

              return (
                <article key={question.id} className="rounded-xl border border-edge bg-panel p-5 sm:p-6 shadow-sm space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-xs leading-relaxed text-ink-faint">
                      Q{index + 1} · {subject?.title || 'Subject'} · {topic?.title || 'Topic'} · {question.questionType.toUpperCase()} · {question.difficulty}
                      {question.examYear ? ` · ${question.examYear}` : ''}
                    </div>
                    <button type="button" onClick={() => void handleBookmark(question)} aria-label="Bookmark question" className={`rounded-md border p-2 ${isSaved ? 'border-accent bg-accent/10 text-accent-text' : 'border-edge-strong text-ink-muted hover:text-ink'}`}>
                      <BookmarkIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm sm:text-base font-semibold leading-relaxed text-ink">{question.stem}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {question.options.map((option, optionIndex) => {
                      const isCorrect = answer?.correctOptionIndex === optionIndex;
                      const isChosen = answer?.selectedIndex === optionIndex;
                      const style = answer
                        ? isCorrect
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                          : isChosen
                            ? 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200'
                            : 'border-edge bg-field text-ink-muted'
                        : 'border-edge-strong bg-field hover:bg-subtle text-ink';
                      return (
                        <button key={optionIndex} type="button" disabled={Boolean(answer) || checkingId === question.id} onClick={() => void handleAnswer(question, optionIndex)} className={`flex items-center justify-between gap-2 rounded-lg border px-4 py-3 text-left text-sm transition-colors disabled:cursor-default ${style}`}>
                          <span><span className="mr-2 font-mono text-xs opacity-70">{String.fromCharCode(65 + optionIndex)}.</span>{option}</span>
                          {answer && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0" />}
                          {answer && isChosen && !isCorrect && <XCircle className="h-4 w-4 shrink-0" />}
                          {checkingId === question.id && !answer && <span className="text-xs">Checking…</span>}
                        </button>
                      );
                    })}
                  </div>
                  {answer && (
                    <div className={`rounded-lg border p-4 text-sm ${answer.correct ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-red-500/40 bg-red-500/5'}`}>
                      <div className="font-bold text-ink">{answer.correct ? 'Correct answer' : 'Not quite — review the correct option'}</div>
                      {answer.explanation && <p className="mt-1 leading-relaxed text-ink-muted">{answer.explanation}</p>}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </AppShell>
  );
}
