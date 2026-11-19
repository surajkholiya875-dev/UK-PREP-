import { useEffect, useState } from 'react';
import { Bookmark as BookmarkIcon, CheckCircle2, XCircle } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  fetchPublishedCollection,
  fetchStudentOwned,
  toggleBookmark,
} from '../../services/firestoreService';
import { Bookmark, Question, QuestionType, Subject } from '../../types/academic';

export function PracticeQuestionsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [typeFilter, setTypeFilter] = useState<'all' | QuestionType>('all');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  const loadPractice = async () => {
    if (!firebaseUser) return;
    setLoading(true);
    setError(null);
    try {
      const [qs, subjs, bm] = await Promise.all([
        fetchPublishedCollection<Question>('questions'),
        fetchPublishedCollection<Subject>('subjects'),
        fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid),
      ]);
      setQuestions(qs);
      setSubjects(subjs);
      setBookmarks(bm);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load practice question bank.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadPractice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.uid]);

  const filtered = questions.filter((q) => typeFilter === 'all' || q.questionType === typeFilter);

  const handleBookmark = async (q: Question) => {
    if (!firebaseUser) return;
    const subj = subjects.find((s) => s.id === q.subjectId);
    const res = await toggleBookmark(
      firebaseUser.uid,
      'question',
      q.id,
      q.stem.slice(0, 140),
      subj?.title || ''
    );
    setNotice(res.saved ? 'Question saved to bookmarks.' : 'Question removed from bookmarks.');
    setBookmarks(await fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid));
  };

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Practice Questions"
      breadcrumb="UK Prep / Student / Practice Questions"
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-1 p-1 bg-field border border-edge rounded-lg w-fit">
          {(
            [
              { id: 'all', label: 'All Questions' },
              { id: 'mcq', label: 'Topic MCQs' },
              { id: 'pyq', label: 'Previous Year (PYQ)' },
              { id: 'current_affairs', label: 'Current Affairs' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setTypeFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                typeFilter === tab.id
                  ? 'bg-accent text-accent-ink font-semibold shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {notice && <SuccessBanner message={notice} />}

        {loading ? (
          <LoadingState label="Loading practice question bank..." />
        ) : error ? (
          <ErrorState message={error} onRetry={() => void loadPractice()} />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No published practice questions"
            description="Objective MCQs, UKPSC/UKSSSC previous year questions, and current affairs drills published by administrators will appear here."
          />
        ) : (
          <div className="space-y-4">
            {filtered.map((q, qIdx) => {
              const chosen = selectedAnswers[q.id];
              const isAnswered = chosen !== undefined;
              const subj = subjects.find((s) => s.id === q.subjectId);
              const isSaved = bookmarks.some((b) => b.targetType === 'question' && b.targetId === q.id);

              return (
                <div
                  key={q.id}
                  className="bg-panel border border-edge rounded-xl p-6 space-y-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-xs text-ink-faint">
                      Q{qIdx + 1} · {subj?.title || 'Subject'} · {q.questionType.toUpperCase()} · {q.difficulty}
                      {q.examYear ? ` · ${q.examYear}` : ''}
                    </div>
                    <button
                      type="button"
                      onClick={() => void handleBookmark(q)}
                      aria-label="Bookmark question"
                      className={`p-1.5 rounded-md border transition-colors ${
                        isSaved
                          ? 'border-accent bg-accent/15 text-accent-text'
                          : 'border-edge-strong text-ink-muted hover:text-ink'
                      }`}
                    >
                      <BookmarkIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-sm sm:text-base font-medium text-ink leading-relaxed">
                    {q.stem}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, idx) => {
                      const isSelected = chosen === idx;
                      const isCorrect = q.correctOptionIndex === idx;
                      let stateStyle =
                        'border-edge-strong bg-field hover:bg-subtle text-ink';
                      if (isAnswered) {
                        if (isCorrect) {
                          stateStyle =
                            'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200';
                        } else if (isSelected) {
                          stateStyle =
                            'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() =>
                            setSelectedAnswers((prev) => ({ ...prev, [q.id]: idx }))
                          }
                          className={`text-left px-4 py-2.5 rounded-lg border text-sm transition-colors flex items-center justify-between gap-2 ${stateStyle}`}
                        >
                          <span>
                            <span className="font-mono text-xs mr-2 opacity-70">
                              {String.fromCharCode(65 + idx)}.
                            </span>
                            {opt}
                          </span>
                          {isAnswered && isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                          {isAnswered && isSelected && !isCorrect && (
                            <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && q.explanation && (
                    <div className="p-4 rounded-lg bg-subtle border border-edge text-xs sm:text-sm text-ink-muted leading-relaxed">
                      <span className="font-semibold text-ink">
                        Explanation:{' '}
                      </span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AppShell>
  );
}
