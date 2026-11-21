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

  const courseTitle = (courseId: string) => courses.find(course => course.id === courseId)?.title || 'Course';
  const sortedSubjects = [...subjects].sort((a, b) => a.sortOrder - b.sortOrder || a.title.localeCompare(b.title));

  return (
    <AppShell workspaceTitle="Student LMS" navItems={STUDENT_NAV_ITEMS} pageTitle="Syllabus" breadcrumb="UK Prep / Student / Syllabus">
      {loading ? <LoadingState label="Loading all published syllabus subjects..." /> : error ? (
        <ErrorState message={error} onRetry={() => void loadSyllabus()} />
      ) : sortedSubjects.length === 0 ? (
        <EmptyState title="No published subjects available" description="Published subjects from all courses will appear here once they are published in Admin." />
      ) : (
        <div className="space-y-6">
          <header className="rounded-xl border border-edge bg-panel p-5">
            <h1 className="text-xl font-bold text-ink">All Subjects</h1>
            <p className="mt-1 text-sm text-ink-muted">Showing {sortedSubjects.length} published subjects across all published courses. Subjects remain listed even when their units or topics have not been added yet.</p>
          </header>
          {sortedSubjects.map(subject => {
            const subjectUnits = units.filter(unit => unit.subjectId === subject.id).sort((a, b) => a.sortOrder - b.sortOrder);
            return (
              <section key={subject.id} className="rounded-xl border border-edge bg-panel p-5 space-y-4">
                <div className="border-b border-edge pb-3">
                  <div className="text-xs text-ink-muted">{courseTitle(subject.courseId)} · {subject.scope === 'uttarakhand' ? 'Uttarakhand' : 'General'}</div>
                  <h2 className="mt-1 text-lg font-bold text-ink">{subject.title}</h2>
                  {subject.description && <p className="mt-1 text-sm text-ink-muted">{subject.description}</p>}
                </div>
                {subjectUnits.length === 0 ? <p className="text-sm text-ink-muted">Units, chapters and topics have not been added yet.</p> : (
                  <div className="space-y-4">
                    {subjectUnits.map(unit => {
                      const unitChapters = chapters.filter(chapter => chapter.unitId === unit.id).sort((a, b) => a.sortOrder - b.sortOrder);
                      return (
                        <div key={unit.id} className="rounded-lg border border-edge bg-subtle p-4">
                          <div className="text-xs text-ink-muted">Unit {unit.sortOrder}</div>
                          <h3 className="font-semibold text-ink">{unit.title}</h3>
                          {unitChapters.length === 0 ? <p className="mt-2 text-sm text-ink-muted">No chapters added yet.</p> : (
                            <div className="mt-3 space-y-3">
                              {unitChapters.map(chapter => {
                                const chapterTopics = topics.filter(topic => topic.chapterId === chapter.id).sort((a, b) => a.sortOrder - b.sortOrder);
                                return (
                                  <div key={chapter.id} className="border-l-2 border-edge-strong pl-3">
                                    <h4 className="text-sm font-medium text-ink">{chapter.title}</h4>
                                    {chapterTopics.length === 0 ? <p className="mt-1 text-xs text-ink-muted">No topics added yet.</p> : (
                                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-muted">
                                        {chapterTopics.map(topic => <li key={topic.id}>{topic.title}{topic.syllabusNotes ? <span> — {topic.syllabusNotes}</span> : null}</li>)}
                                      </ul>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}
    </AppShell>
  );
}
