import { Fragment, useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { TestReviewSection } from '../../components/ui/TestReviewSection';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchStudentOwned } from '../../services/firestoreService';
import { TestAttempt } from '../../types/academic';

export function AttemptHistoryPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState<TestAttempt[]>([]);
  const [expandedAttemptId, setExpandedAttemptId] = useState<string | null>(null);

  const loadAttempts = async () => {
    if (!firebaseUser) return;
    setLoading(true);
    setError(null);
    try {
      const items = await fetchStudentOwned<TestAttempt>('testAttempts', firebaseUser.uid);
      setAttempts(items);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load test attempt history.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadAttempts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.uid]);

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Attempt History"
      breadcrumb="UK Prep / Student / Attempt History"
    >
      {loading ? (
        <LoadingState label="Loading your test attempts..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => void loadAttempts()} />
      ) : attempts.length === 0 ? (
        <EmptyState
          title="No test attempts recorded"
          description="Attempted mock examinations, sectional tests, topic practice assessments, and PYQ papers will appear here with your score breakdown."
        />
      ) : (
        <div className="bg-panel border border-edge rounded-xl overflow-x-auto shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-edge text-xs text-ink-faint">
                <th className="py-3 px-4 font-medium">Test Paper</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium text-right">Score</th>
                <th className="py-3 px-4 font-medium text-right">Correct / Incorrect / Skipped</th>
                <th className="py-3 px-4 font-medium text-right">Time Taken</th>
                <th className="py-3 px-4 font-medium text-right">Review</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-edge">
              {attempts.map((a) => {
                const hasReview = Array.isArray(a.review) && a.review.length > 0;
                const isExpanded = expandedAttemptId === a.id;
                return (
                  <Fragment key={a.id}>
                    <tr className="hover:bg-subtle/60 transition-colors">
                      <td className="py-3 px-4 font-medium text-ink">{a.testTitle}</td>
                      <td className="py-3 px-4 text-xs capitalize text-ink-muted">
                        {a.status.replace('_', ' ')}
                      </td>
                      <td className="py-3 px-4 text-right font-mono tabular-nums font-semibold text-accent-text">
                        {a.score} / {a.totalMarks}
                      </td>
                      <td className="py-3 px-4 text-right font-mono tabular-nums text-xs text-ink-muted">
                        {a.correctCount} / {a.incorrectCount} / {a.unansweredCount}
                      </td>
                      <td className="py-3 px-4 text-right font-mono tabular-nums text-xs text-ink-muted">
                        {Math.floor(a.durationSeconds / 60)}m {a.durationSeconds % 60}s
                      </td>
                      <td className="py-3 px-4 text-right">
                        {hasReview ? (
                          <button
                            type="button"
                            onClick={() => setExpandedAttemptId(isExpanded ? null : a.id)}
                            className="inline-flex items-center gap-1 rounded-md border border-edge-strong bg-field px-2.5 py-1 text-xs font-medium text-ink hover:border-accent"
                          >
                            <span>{isExpanded ? 'Hide' : 'Review'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        ) : (
                          <span className="text-xs text-ink-faint">—</span>
                        )}
                      </td>
                    </tr>
                    {isExpanded && hasReview && (
                      <tr>
                        <td colSpan={6} className="p-4 bg-subtle/40">
                          <TestReviewSection
                            review={a.review!}
                            initialFilter={a.incorrectCount > 0 ? 'incorrect' : 'all'}
                          />
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </AppShell>
  );
}
