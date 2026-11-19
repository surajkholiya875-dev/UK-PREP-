import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { TestPaper } from '../../types/academic';

type SafeQuestion = { id: string; stem: string; options: string[] };

export function TestRunnerPage() {
  const { testId } = useParams<{ testId: string }>();
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [test, setTest] = useState<TestPaper | null>(null);
  const [questions, setQuestions] = useState<SafeQuestion[]>([]);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [starting, setStarting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<{score:number;correct:number;incorrect:number;unanswered:number;expired?:boolean} | null>(null);

  useEffect(() => {
    let active = true;
    const init = async () => {
      if (!testId) { setLoading(false); return; }
      try {
        const tests = await fetchPublishedCollection<TestPaper>('tests');
        if (active) setTest(tests.find((item) => item.id === testId) ?? null);
      } catch (err) { if (active) setError(err instanceof Error ? err.message : 'Unable to load test paper.'); }
      finally { if (active) setLoading(false); }
    };
    void init();
    return () => { active = false; };
  }, [testId]);

  const authenticatedRequest = async (url: string, body?: unknown) => {
    if (!firebaseUser) throw new Error('Please sign in again to continue.');
    const token = await firebaseUser.getIdToken();
    const response = await fetch(url, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || 'The request could not be completed.');
    return data;
  };

  const handleBeginAttempt = async () => {
    if (!testId || !test || starting) return;
    setStarting(true);
    try {
      setError(null);
      const data = await authenticatedRequest('/api/student/tests/' + encodeURIComponent(testId) + '/start');
      setAttemptId(data.attemptId);
      setQuestions(data.questions as SafeQuestion[]);
      setElapsedSeconds(0);
    } catch (err) { setError(err instanceof Error ? err.message : 'Could not start test attempt.'); }
    finally { setStarting(false); }
  };

  const handleSubmit = async () => {
    if (!attemptId || submitting) return;
    setSubmitting(true);
    try {
      const data = await authenticatedRequest('/api/student/tests/attempts/' + encodeURIComponent(attemptId) + '/submit', { answers });
      setSubmittedResult({ score: data.score, correct: data.correct, incorrect: data.incorrect, unanswered: data.unanswered, expired: Boolean(data.expired) });
    } catch (err) { setError(err instanceof Error ? err.message : 'Failed to submit test attempt.'); }
    finally { setSubmitting(false); }
  };

  const timeLimitSeconds = Math.max(60, Number(test?.durationMinutes || 1) * 60);

  useEffect(() => {
    if (!attemptId || submittedResult) return;
    const timer = window.setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(timer);
  }, [attemptId, submittedResult]);

  useEffect(() => {
    if (attemptId && !submittedResult && !submitting && elapsedSeconds >= timeLimitSeconds) {
      void handleSubmit();
    }
  }, [attemptId, elapsedSeconds, submittedResult, submitting, timeLimitSeconds]);

  const formatClock = (secs: number) => String(Math.floor(secs / 60)).padStart(2, '0') + ':' + String(secs % 60).padStart(2, '0');

  return (
    <AppShell workspaceTitle="Student LMS" navItems={STUDENT_NAV_ITEMS} pageTitle={test?.title || 'Test Session'} breadcrumb="UK Prep / Student / Tests / Session"
      headerAction={<Link to="/student/tests" className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-ink hover:underline whitespace-nowrap"><ArrowLeft className="w-3.5 h-3.5" /><span>All Tests</span></Link>}>
      {loading ? <LoadingState label="Preparing examination paper..." /> : error && !test ? <ErrorState message={error} /> : !test ? <EmptyState title="Test paper not found" description="This test may be unpublished or removed." /> : submittedResult ? (
        <div className="space-y-6">
          <SuccessBanner message={submittedResult.expired ? "Time expired. Your saved answers were submitted and graded." : "Test attempt submitted and recorded to your Attempt History."} />
          <div className="bg-panel border border-edge rounded-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-sm">
            <div><div className="text-xs text-ink-faint">Score</div><div className="text-2xl font-bold font-mono text-ink mt-1">{submittedResult.score} / {test.totalMarks}</div></div>
            <div><div className="text-xs text-ink-faint">Correct</div><div className="text-2xl font-bold text-emerald-600 mt-1">{submittedResult.correct}</div></div>
            <div><div className="text-xs text-ink-faint">Incorrect</div><div className="text-2xl font-bold text-red-600 mt-1">{submittedResult.incorrect}</div></div>
            <div><div className="text-xs text-ink-faint">Unanswered</div><div className="text-2xl font-bold text-ink-muted mt-1">{submittedResult.unanswered}</div></div>
          </div>
          <Link to="/student/attempts" className="inline-block px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink">View Attempt History</Link>
        </div>
      ) : !attemptId ? (
        <div className="bg-panel border border-edge rounded-xl p-8 max-w-2xl shadow-sm">
          {error && <ErrorState message={error} />}
          <h2 className="text-xl font-bold text-ink">{test.title}</h2>
          <p className="mt-2 text-sm text-ink-muted">Duration: <span className="font-mono text-ink">{test.durationMinutes} minutes</span> · Total Marks: <span className="font-mono text-ink">{test.totalMarks}</span> · Negative Marking: <span className="font-mono text-ink">{test.negativeMarking}</span></p>
          <button type="button" disabled={starting} onClick={() => void handleBeginAttempt()} className="mt-6 px-5 py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60">{starting ? 'Starting...' : 'Begin Timed Examination'}</button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-panel border border-edge rounded-xl p-4 flex items-center justify-between sticky top-16 z-20 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-mono text-ink"><Clock className="w-4 h-4 text-accent-text" /><span>Time left: {formatClock(Math.max(0, timeLimitSeconds - elapsedSeconds))}</span></div>
            <button type="button" disabled={submitting} onClick={() => void handleSubmit()} className="px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink disabled:opacity-60">{submitting ? 'Submitting...' : 'Submit Examination'}</button>
          </div>
          {error && <ErrorState message={error} />}
          <div className="space-y-4">{questions.map((q, idx) => <div key={q.id} className="bg-panel border border-edge rounded-xl p-6 space-y-3 shadow-sm">
            <div className="text-xs font-mono text-ink-faint">Question {idx + 1}</div><p className="text-sm sm:text-base font-medium text-ink">{q.stem}</p>
            <div className="space-y-2 pt-1">{q.options.map((opt, optIdx) => { const selected = answers[q.id] === optIdx; return <button key={optIdx} type="button" onClick={() => setAnswers((prev) => ({...prev,[q.id]:optIdx}))} className={'w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-colors ' + (selected ? 'border-accent bg-accent/15 text-ink font-medium' : 'border-edge-strong bg-field text-ink hover:bg-subtle')}><span className="font-mono text-xs mr-2 text-accent-text">{String.fromCharCode(65 + optIdx)}.</span>{opt}</button>;})}</div>
          </div>)}</div>
        </div>
      )}
    </AppShell>
  );
}
