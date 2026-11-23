import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Chapter, Subject, Topic } from '../../types/academic';

export function StudentSubjectTopicsPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subject, setSubject] = useState<Subject | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    if (!firebaseUser || !subjectId) return;
    let active = true;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const [allSubjects, allChapters, allTopics] = await Promise.all([
          fetchPublishedCollection<Subject>('subjects'),
          fetchPublishedCollection<Chapter>('chapters'),
          fetchPublishedCollection<Topic>('topics'),
        ]);
        if (!active) return;
        setSubject(allSubjects.find(item => item.id === subjectId) ?? null);
        setChapters(allChapters);
        setTopics(allTopics.filter(topic => topic.subjectId === subjectId).sort((a, b) => a.sortOrder - b.sortOrder));
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : 'Unable to load this subject.');
      } finally {
        if (active) setLoading(false);
      }
    };
    void load();
    return () => { active = false; };
  }, [firebaseUser?.uid, subjectId]);

  const chapterTitle = (chapterId: string) => chapters.find(chapter => chapter.id === chapterId)?.title;

  return (
    <AppShell workspaceTitle="Student LMS" navItems={STUDENT_NAV_ITEMS} pageTitle={subject?.title || 'Subject Topics'} breadcrumb="UK Prep / Student / Subjects">
      <div className="mb-4">
        <Link to="/student/syllabus" className="text-sm font-medium text-ink-muted hover:text-ink">← Back to Subjects</Link>
      </div>
      {loading ? <LoadingState label="Loading all topics for this subject..." /> : error ? (
        <ErrorState message={error} onRetry={() => window.location.reload()} />
      ) : !subject ? (
        <EmptyState title="Subject not found" description="This subject may not be published or may no longer be available." />
      ) : topics.length === 0 ? (
        <EmptyState title="No published topics yet" description="Published topics for this subject will appear here once available." />
      ) : (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-ink">{subject.title}</h2>
          <p className="text-sm text-ink-muted">{topics.length} published topic{topics.length === 1 ? '' : 's'}</p>
          <ol className="space-y-2">
            {topics.map((topic, index) => (
              <li key={topic.id} className="rounded-xl border border-edge bg-panel p-4">
                <div className="text-xs text-ink-muted">Topic {index + 1}{chapterTitle(topic.chapterId) ? ` · ${chapterTitle(topic.chapterId)}` : ''}</div>
                <h3 className="mt-1 font-medium text-ink">{topic.title}</h3>
                {topic.syllabusNotes && <p className="mt-1 text-sm text-ink-muted">{topic.syllabusNotes}</p>}
              </li>
            ))}
          </ol>
        </div>
      )}
    </AppShell>
  );
}
