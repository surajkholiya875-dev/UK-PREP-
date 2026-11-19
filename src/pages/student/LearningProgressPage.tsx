import { useEffect, useState } from 'react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchPublishedCollection, fetchStudentOwned } from '../../services/firestoreService';
import { LearningProgress, Subject, Topic } from '../../types/academic';

export function LearningProgressPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<LearningProgress[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const loadProgress = async () => {
    if (!firebaseUser) return;
    setLoading(true);
    setError(null);
    try {
      const [prog, tpcs, subjs] = await Promise.all([
        fetchStudentOwned<LearningProgress>('learningProgress', firebaseUser.uid),
        fetchPublishedCollection<Topic>('topics'),
        fetchPublishedCollection<Subject>('subjects'),
      ]);
      setProgress(prog);
      setTopics(tpcs);
      setSubjects(subjs);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load learning progress.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.uid]);

  const completedCount = progress.filter((p) => p.completionStatus === 'completed').length;
  const inProgressCount = progress.filter((p) => p.completionStatus === 'in_progress').length;

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Learning Progress"
      breadcrumb="UK Prep / Student / Progress"
    >
      {loading ? (
        <LoadingState label="Calculating syllabus completion..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => void loadProgress()} />
      ) : progress.length === 0 ? (
        <EmptyState
          title="No progress recorded yet"
          description="Open the Syllabus Navigator or Study Materials and update topic statuses as you study to track your preparation milestones."
        />
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-panel border border-edge rounded-xl p-5 shadow-sm">
              <div className="text-xs text-ink-muted">Completed Topics</div>
              <div className="mt-2 text-2xl font-bold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
                {completedCount}
              </div>
            </div>
            <div className="bg-panel border border-edge rounded-xl p-5 shadow-sm">
              <div className="text-xs text-ink-muted">In Progress</div>
              <div className="mt-2 text-2xl font-bold font-mono tabular-nums text-accent-text">
                {inProgressCount}
              </div>
            </div>
            <div className="bg-panel border border-edge rounded-xl p-5 shadow-sm">
              <div className="text-xs text-ink-muted">Published Topics Total</div>
              <div className="mt-2 text-2xl font-bold font-mono tabular-nums text-ink">
                {topics.length}
              </div>
            </div>
          </div>

          <div className="bg-panel border border-edge rounded-xl overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-edge text-xs text-ink-faint">
                  <th className="py-3 px-4 font-medium">Topic</th>
                  <th className="py-3 px-4 font-medium">Subject</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-edge">
                {progress.map((row) => {
                  const topic = topics.find((t) => t.id === row.topicId);
                  const subject = subjects.find((s) => s.id === row.subjectId);
                  return (
                    <tr key={row.id} className="hover:bg-subtle/60 transition-colors">
                      <td className="py-3 px-4 font-medium text-ink">
                        {topic?.title || row.topicId}
                      </td>
                      <td className="py-3 px-4 text-ink-muted">
                        {subject?.title || row.subjectId}
                      </td>
                      <td className="py-3 px-4 text-xs font-medium capitalize text-ink-muted">
                        {row.completionStatus.replace('_', ' ')}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AppShell>
  );
}
