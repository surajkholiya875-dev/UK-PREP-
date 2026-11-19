import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Examination, TestPaper, TestType } from '../../types/academic';

export function TestsListPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tests, setTests] = useState<TestPaper[]>([]);
  const [exams, setExams] = useState<Examination[]>([]);
  const [typeFilter, setTypeFilter] = useState<'all' | TestType>('all');

  const loadTests = async () => {
    setLoading(true);
    setError(null);
    try {
      const [ts, ex] = await Promise.all([
        fetchPublishedCollection<TestPaper>('tests'),
        fetchPublishedCollection<Examination>('examinations'),
      ]);
      setTests(ts);
      setExams(ex);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load mock tests.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadTests();
  }, []);

  const filtered = tests.filter((t) => typeFilter === 'all' || t.testType === typeFilter);

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Tests & Mock Examinations"
      breadcrumb="UK Prep / Student / Tests"
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-1 p-1 bg-field border border-edge rounded-lg w-fit">
          {(
            [
              { id: 'all', label: 'All Tests' },
              { id: 'mock', label: 'Full Mock' },
              { id: 'sectional', label: 'Sectional' },
              { id: 'pyq', label: 'PYQ Papers' },
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

        {loading ? (
          <LoadingState label="Loading examination test papers..." />
        ) : error ? (
          <ErrorState message={error} onRetry={() => void loadTests()} />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No published mock tests"
            description="Mock examinations, sectional tests, and previous-year question papers configured in the Admin Workspace will appear here once published."
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((test) => {
              const exam = exams.find((e) => e.id === test.examinationId);
              return (
                <div
                  key={test.id}
                  className="bg-panel border border-edge rounded-xl p-6 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="text-xs text-ink-faint">
                      {exam?.code || 'Exam'} · {test.testType.toUpperCase()}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-ink">
                      {test.title}
                    </h2>
                    <div className="mt-4 grid grid-cols-3 gap-2 pt-3 border-t border-edge text-xs">
                      <div>
                        <div className="text-ink-faint">Questions</div>
                        <div className="font-mono font-semibold tabular-nums text-ink mt-0.5">
                          {test.questionCount}
                        </div>
                      </div>
                      <div>
                        <div className="text-ink-faint">Marks</div>
                        <div className="font-mono font-semibold tabular-nums text-ink mt-0.5">
                          {test.totalMarks}
                        </div>
                      </div>
                      <div>
                        <div className="text-ink-faint">Neg. Mark</div>
                        <div className="font-mono font-semibold tabular-nums text-ink mt-0.5">
                          -{test.negativeMarking}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-edge flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono tabular-nums text-ink-muted">
                      <Clock className="w-3.5 h-3.5 text-accent-text" />
                      {test.durationMinutes} mins
                    </span>
                    <Link
                      to={`/student/tests/${test.id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
                    >
                      <span>Start Test</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AppShell>
  );
}
