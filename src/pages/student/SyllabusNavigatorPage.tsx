import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Subject } from '../../types/academic';

const EXCLUDED_SUBJECT_NAMES = new Set([
  'world history',
  'world geography',
  'logical reasoning',
  'data interpretation',
  'quantitative aptitude',
  'computer awareness',
  'internal security',
  'agriculture and rural development',
]);

function safeSortOrder(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : Number.MAX_SAFE_INTEGER;
}

export function SyllabusNavigatorPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const loadSyllabus = async () => {
    if (!firebaseUser) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const publishedSubjects = await fetchPublishedCollection<Subject>('subjects');
      setSubjects(publishedSubjects);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load syllabus.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadSyllabus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.uid]);

  const sortedSubjects = [...subjects]
    .filter((subject) => !EXCLUDED_SUBJECT_NAMES.has(subject.title.trim().toLowerCase()))
    .sort(
      (a, b) =>
        safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) ||
        a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' })
    );

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Syllabus"
      breadcrumb="UK Prep / Student / Syllabus"
    >
      {loading ? (
        <LoadingState label="Loading all published syllabus subjects..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => void loadSyllabus()} />
      ) : sortedSubjects.length === 0 ? (
        <EmptyState
          title="No published subjects available"
          description="Published subjects from all courses will appear here once they are published in Admin."
        />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedSubjects.map((subject) => (
            <Link
              key={subject.id}
              to={`/student/syllabus/${encodeURIComponent(subject.id)}`}
              className="block rounded-xl border border-edge bg-panel p-5 text-left transition hover:border-accent hover:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="font-semibold text-ink">{subject.title}</span>
            </Link>
          ))}
        </div>
      )}
    </AppShell>
  );
}
