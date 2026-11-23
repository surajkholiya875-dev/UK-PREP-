import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  resolveCanonicalSubjectDefinition,
  safeSortOrder,
} from '../../lib/syllabusHierarchy';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Chapter, Course, Subject, Topic } from '../../types/academic';

export function StudentTopicsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  const load = async () => {
    if (!firebaseUser) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const [t, ch, sub, crs] = await Promise.all([
        fetchPublishedCollection<Topic>('topics'),
        fetchPublishedCollection<Chapter>('chapters'),
        fetchPublishedCollection<Subject>('subjects'),
        fetchPublishedCollection<Course>('courses'),
      ]);
      setTopics(t.sort((a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder)));
      setChapters(ch);
      setSubjects(sub);
      setCourses(crs);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unable to load topics.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, [firebaseUser?.uid]);

  const getSubject = (id: string) => subjects.find((s) => s.id === id);
  const getChapter = (id: string) => chapters.find((c) => c.id === id);
  const getCourse = (id: string) => courses.find((c) => c.id === id);

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Topics"
      breadcrumb="UK Prep / Student / Topics"
    >
      {loading ? (
        <LoadingState label="Loading published topics..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => void load()} />
      ) : topics.length === 0 ? (
        <EmptyState
          title="No published topics yet"
          description="Published topics added by the admin will appear here."
        />
      ) : (
        <div className="rounded-xl border border-edge bg-panel divide-y divide-edge">
          {topics.map((topic) => {
            const chapter = getChapter(topic.chapterId);
            const subject = getSubject(topic.subjectId) || (chapter ? getSubject(chapter.subjectId) : undefined);
            const course = subject ? getCourse(subject.courseId) : getCourse(topic.courseId);
            const subjectLabel = subject
              ? resolveCanonicalSubjectDefinition(subject.title)?.title || subject.title
              : 'Subject';
            const showChapter =
              Boolean(chapter?.title) &&
              chapter!.title.trim().toLowerCase() !== topic.title.trim().toLowerCase();

            return (
              <Link
                key={topic.id}
                to={`/student/topics/${encodeURIComponent(topic.id)}`}
                className="group flex items-center justify-between gap-4 p-4 hover:bg-subtle transition-colors"
              >
                <div className="min-w-0">
                  <div className="text-xs text-ink-muted">
                    {course?.title || 'Course'} · {subjectLabel}
                    {showChapter ? ` · ${chapter!.title}` : ''}
                  </div>
                  <h2 className="mt-1 text-sm font-semibold text-ink group-hover:text-accent-text transition-colors">
                    {topic.title}
                  </h2>
                  {topic.syllabusNotes && (
                    <p className="mt-1 text-sm text-ink-muted line-clamp-2">{topic.syllabusNotes}</p>
                  )}
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-ink-faint group-hover:text-accent-text transition-colors" />
              </Link>
            );
          })}
        </div>
      )}
    </AppShell>
  );
}
