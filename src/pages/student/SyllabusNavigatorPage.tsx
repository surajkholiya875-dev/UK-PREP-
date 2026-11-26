import { useEffect, useState } from 'react';
import { SubjectCardsSection } from '../../components/student/SubjectCardsSection';
import { AppShell } from '../../components/ui/AppShell';
import { ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { safeSortOrder } from '../../lib/syllabusHierarchy';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Chapter, Subject, Topic, Unit } from '../../types/academic';

export function SyllabusNavigatorPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);

  const loadSyllabus = async () => {
    if (!firebaseUser) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const [publishedSubjects, publishedUnits, publishedChapters, publishedTopics] =
        await Promise.all([
          fetchPublishedCollection<Subject>('subjects'),
          fetchPublishedCollection<Unit>('units'),
          fetchPublishedCollection<Chapter>('chapters'),
          fetchPublishedCollection<Topic>('topics'),
        ]);
      setSubjects(
        [...publishedSubjects].sort((a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder))
      );
      setUnits(
        [...publishedUnits].sort((a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder))
      );
      setChapters(
        [...publishedChapters].sort((a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder))
      );
      setTopics(
        [...publishedTopics].sort((a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder))
      );
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

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Subjects"
      breadcrumb="UK Prep / Student / Subjects"
    >
      {loading ? (
        <LoadingState label="Loading all published syllabus subjects..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => void loadSyllabus()} />
      ) : (
        <SubjectCardsSection
          subjects={subjects}
          units={units}
          chapters={chapters}
          topics={topics}
          heading="Subjects"
          emptyTitle="No published subjects available"
          emptyDescription="Published subjects from all courses will appear here once they are published in Admin."
        />
      )}
    </AppShell>
  );
}
