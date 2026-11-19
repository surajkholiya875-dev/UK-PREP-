import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  fetchPublishedCollection,
  startTestAttempt,
  submitTestAttempt,
} from '../../services/firestoreService';
import { Question, TestPaper } from '../../types/academic';

export function TestRunnerPage() {
  const { testId } = useParams<{ testId: string }>();
  const { firebaseUser } = useAuth();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [test, setTest] = useState<TestPaper | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [submittedResult, setSubmittedResult] = useState<{
    score: number;
    correct: number;
    incorrect: number;
    unanswered: number;
  } | null>(null);

  useEffect(() => {
    const init = async () => {
      if (!testId) return;
      setLoading(true);
      setError(null);
      try {
        const [tests, allQuestions] = await Promise.all([
          fetchPublishedCollection<TestPaper>('tests'),
          fetchPublishedCollection<Question>('questions'),
        ]);
        const found = tests.find((t) => t.id === testId) || null;
        setTest(found);
        if (found) {
          const ordered = found.questionIds
            .map((qid) => allQuestions.find((q) => q.id === qid))
            .filter(Boolean) as Question[];
          setQuestions(ordered);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load test paper.');
      } finally {
        setLoading(false);
      }
    };
    void init();
  }, [testId]);

  useEffect(() => {
    if (!attemptId || submittedResult) return;
    const timer = window.setInterval(() => {
      setElapsedSeconds((s) => s + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [attemptId, submittedResult]);

  const handleBeginAttempt = async () => {
    if (!firebaseUser || !test) return;
    try {
      const id = await startTestAttempt({ userId: firebaseUser.uid, test });
      setAttemptId(id);
      setElapsedSeconds(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not start test attempt.');
    }
  };

  const handleSubmit = async () => {
    if (!attemptId || !test) return;
    const perQuestionMarks = questions.length > 0 ? test.totalMarks / questions.length : 1;
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    questions.forEach((q) => {
      const picked = answers[q.id];
      if (picked === undefined) {
        unanswered += 1;
      } else if (picked === q.correctOptionIndex) {
        correct += 1;
      } else {
        incorrect += 1;
      }
    });

    const rawScore = correct * perQuestionMarks - incorrect * test.negativeMarking;
    const roundedScore = Math.round(rawScore * 100) / 100;

    try {
      await submitTestAttempt({
        attemptId,
        score: roundedScore,
        correctCount: correct,
        incorrectCount: incorrect,
        unansweredCount: unanswered,
        durationSeconds: elapsedSeconds,
      });
      setSubmittedResult({
        score: roundedScore,
        correct,
        incorrect,
        unanswered,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit test attempt.');
    }
  };

  const formatClock = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  };

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle={test?.title || 'Test Session'}
      breadcrumb="UK Prep / Student / Tests / Session"
      headerAction={
        <Link
          to="/student/tests"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-ink hover:underline whitespace-nowrap"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Tests</span>
        </Link>
      }
    >
      {loading ? (
        <LoadingState label="Preparing examination paper..." />
      ) : error ? (
        <ErrorState message={error} />
      ) : !test ? (
        <EmptyState
          title="Test paper not found"
          description="This test may be unpublished or removed."
        />
      ) : submittedResult ? (
        <div className="space-y-6">
          <SuccessBanner message="Test attempt submitted and recorded to your Attempt History." />
          <div className="bg-panel border border-edge rounded-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-sm">
            <div>
              <div className="text-xs text-ink-faint">Score</div>
              <div className="text-2xl font-bold font-mono tabular-nums text-ink mt-1">
                {submittedResult.score} / {test.totalMarks}
              </div>
            </div>
            <div>
              <div className="text-xs text-ink-faint">Correct</div>
              <div className="text-2xl font-bold font-mono tabular-nums text-emerald-600 dark:text-emerald-400 mt-1">
                {submittedResult.correct}
              </div>
            </div>
            <div>
              <div className="text-xs text-ink-faint">Incorrect</div>
              <div className="text-2xl font-bold font-mono tabular-nums text-red-600 dark:text-red-400 mt-1">
                {submittedResult.incorrect}
              </div>
            </div>
            <div>
              <div className="text-xs text-ink-faint">Unanswered</div>
              <div className="text-2xl font-bold font-mono tabular-nums text-ink-muted mt-1">
                {submittedResult.unanswered}
              </div>
            </div>
          </div>
          <Link
            to="/student/attempts"
            className="inline-block px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
          >
            View Attempt History
          </Link>
        </div>
      ) : !attemptId ? (
        <div className="bg-panel border border-edge rounded-xl p-8 max-w-2xl shadow-sm">
          <h2 className="text-xl font-bold text-ink">{test.title}</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Duration: <span className="font-mono tabular-nums text-ink">{test.durationMinutes} minutes</span> ·
            Total Marks: <span className="font-mono tabular-nums text-ink">{test.totalMarks}</span> ·
            Negative Marking: <span className="font-mono tabular-nums text-ink">{test.negativeMarking}</span>
          </p>
          {questions.length === 0 ? (
            <p className="mt-4 text-sm text-amber-700 dark:text-amber-400">
              No questions are linked to this test paper yet. Please ask an administrator to attach questions to this test.
            </p>
          ) : (
            <button
              type="button"
              onClick={() => void handleBeginAttempt()}
              className="mt-6 px-5 py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
            >
              Begin Timed Examination ({questions.length} Questions)
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-panel border border-edge rounded-xl p-4 flex items-center justify-between sticky top-16 z-20 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-mono tabular-nums text-ink">
              <Clock className="w-4 h-4 text-accent-text" />
              <span>Elapsed: {formatClock(elapsedSeconds)}</span>
            </div>
            <button
              type="button"
              onClick={() => void handleSubmit()}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
            >
              Submit Examination
            </button>
          </div>

          <div className="space-y-4">
            {questions.map((q, idx) => (
              <div
                key={q.id}
                className="bg-panel border border-edge rounded-xl p-6 space-y-3 shadow-sm"
              >
                <div className="text-xs font-mono text-ink-faint">Question {idx + 1}</div>
                <p className="text-sm sm:text-base font-medium text-ink">
                  {q.stem}
                </p>
                <div className="space-y-2 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const selected = answers[q.id] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                        className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-colors ${
                          selected
                            ? 'border-accent bg-accent/15 text-ink font-medium'
                            : 'border-edge-strong bg-field text-ink hover:bg-subtle'
                        }`}
                      >
                        <span className="font-mono text-xs mr-2 text-accent-text">{String.fromCharCode(65 + optIdx)}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </AppShell>
  );
}
