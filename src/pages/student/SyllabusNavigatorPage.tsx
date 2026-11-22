import { useEffect, useState } from 'react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Chapter, Course, Subject, Topic, Unit } from '../../types/academic';

export function SyllabusNavigatorPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);

  const loadSyllabus = async () => {
    if (!firebaseUser) return;
    setLoading(true);
    setError(null);
    try {
      const [crs, sub, unt, chp, tpc] = await Promise.all([
        fetchPublishedCollection<Course>('courses'),
        fetchPublishedCollection<Subject>('subjects'),
        fetchPublishedCollection<Unit>('units'),
        fetchPublishedCollection<Chapter>('chapters'),
        fetchPublishedCollection<Topic>('topics'),
      ]);
      setCourses(crs);
      setSubjects(sub);
      setUnits(unt);
      setChapters(chp);
      setTopics(tpc);
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
            <div key={subject.id} className="rounded-xl border border-edge bg-panel p-5">
              <h2 className="font-semibold text-ink">{subject.title}</h2>
            </div>
          ))}
        </div>
      )}
    </AppShell>
  );
}
