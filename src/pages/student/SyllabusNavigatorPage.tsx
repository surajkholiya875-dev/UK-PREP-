import { useEffect, useState } from 'react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Chapter, Subject, Topic } from '../../types/academic';

export function SyllabusNavigatorPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>(null);

  const loadSyllabus = async () => {
    if (!firebaseUser) return;
    setLoading(true);
    setError(null);
    try {
      const [publishedSubjects, publishedChapters, publishedTopics] = await Promise.all([
        fetchPublishedCollection<Subject>('subjects'),
        fetchPublishedCollection<Chapter>('chapters'),
        fetchPublishedCollection<Topic>('topics'),
      ]);
      setSubjects(publishedSubjects);
      setChapters(publishedChapters);
      setTopics(publishedTopics);
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
          {sortedSubjects.map(subject => {
            const subjectTopics = topics
              .filter(topic => topic.subjectId === subject.id)
              .sort((a, b) => a.sortOrder - b.sortOrder);
            const isExpanded = expandedSubjectId === subject.id;
            return (
              <section key={subject.id} className="rounded-xl border border-edge bg-panel">
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => setExpandedSubjectId(isExpanded ? null : subject.id)}
                  className="flex w-full items-center justify-between gap-3 p-5 text-left"
                >
                  <span className="font-semibold text-ink">{subject.title}</span>
                  <span className="text-ink-muted" aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                </button>
                {isExpanded && (
                  <div className="border-t border-edge px-5 py-4">
                    {subjectTopics.length === 0 ? (
                      <p className="text-sm text-ink-muted">No published topics for this subject yet.</p>
                    ) : (
                      <ul className="space-y-2">
                        {subjectTopics.map(topic => {
                          const chapter = chapters.find(item => item.id === topic.chapterId);
                          return (
                            <li key={topic.id} className="rounded-lg bg-subtle px-3 py-2">
                              {chapter && <p className="text-xs text-ink-muted">{chapter.title}</p>}
                              <p className="text-sm font-medium text-ink">{topic.title}</p>
                              {topic.syllabusNotes && <p className="mt-1 text-sm text-ink-muted">{topic.syllabusNotes}</p>}
                            </li>
                          );
                        })}
                      </ul>
                    )}
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
