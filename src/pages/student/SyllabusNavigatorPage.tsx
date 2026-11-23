import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Chapter, Subject, Topic } from '../../types/academic';

export function SyllabusNavigatorPage() {
  const { firebaseUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const loadSyllabus = async () => {
    if (!firebaseUser) return;
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

  const excludedSubjectNames = new Set([
    'world history',
    'world geography',
    'logical reasoning',
    'data interpretation',
    'quantitative aptitude',
    'computer awareness',
    'internal security',
    'agriculture and rural development',
  ]);
  const sortedSubjects = [...subjects]
    .filter(subject => !excludedSubjectNames.has(subject.title.trim().toLowerCase()))
    .sort((a, b) => a.sortOrder - b.sortOrder || a.title.localeCompare(b.title));

  return (
    <AppShell workspaceTitle="Student LMS" navItems={STUDENT_NAV_ITEMS} pageTitle="Syllabus" breadcrumb="UK Prep / Student / Syllabus">
      {loading ? <LoadingState label="Loading all published syllabus subjects..." /> : error ? (
        <ErrorState message={error} onRetry={() => void loadSyllabus()} />
      ) : sortedSubjects.length === 0 ? (
        <EmptyState title="No published subjects available" description="Published subjects from all courses will appear here once they are published in Admin." />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedSubjects.map(subject => (
            <button
              key={subject.id}
              type="button"
              onClick={() => navigate(`/student/syllabus/${subject.id}`)}
              className="rounded-xl border border-edge bg-panel p-5 text-left transition hover:border-edge-strong hover:bg-subtle"
            >
              <span className="font-semibold text-ink">{subject.title}</span>
            </button>
          ))}
        </div>
      )}
    </AppShell>
  );
}
