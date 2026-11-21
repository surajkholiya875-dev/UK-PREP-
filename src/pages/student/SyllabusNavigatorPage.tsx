import { useEffect, useState } from 'react';

import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  fetchPublishedCollection,
} from '../../services/firestoreService';
import {
  Chapter,
  Course,
  Subject,
  Topic,
  Unit,
} from '../../types/academic';

export function SyllabusNavigatorPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [courses, setCourses] = useState<Course[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);

  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState('');

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
      if (crs.length > 0 && !selectedCourseId) {
        setSelectedCourseId(crs[0].id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load syllabus navigator.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadSyllabus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.uid]);

  const filteredSubjects = subjects.filter((s) => !selectedCourseId || s.courseId === selectedCourseId);
  const activeSubjectId =
    selectedSubjectId && filteredSubjects.some((s) => s.id === selectedSubjectId)
      ? selectedSubjectId
      : filteredSubjects[0]?.id || '';

  const filteredUnits = units
    .filter((u) => u.subjectId === activeSubjectId)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Syllabus"
      breadcrumb="UK Prep / Student / Syllabus"
    >
      {loading ? (
        <LoadingState label="Loading syllabus hierarchy..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => void loadSyllabus()} />
      ) : courses.length === 0 ? (
        <EmptyState
          title="No published syllabus available"
          description="Published course syllabi and their subject-wise units, chapters, and topics will appear here."
        />
      ) : (
        <div className="space-y-6">

          <div className="bg-panel border border-edge rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-4 shadow-sm">
            <div>
              <label htmlFor="nav-course" className="block text-xs font-medium text-ink-muted mb-1.5">
                Course
              </label>
              <select
                id="nav-course"
                value={selectedCourseId}
                onChange={(e) => {
                  setSelectedCourseId(e.target.value);
                  setSelectedSubjectId('');
                }}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="nav-subject" className="block text-xs font-medium text-ink-muted mb-1.5">
                Subject
              </label>
              <select
                id="nav-subject"
                value={activeSubjectId}
                onChange={(e) => setSelectedSubjectId(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              >
                {filteredSubjects.length === 0 ? (
                  <option value="">No subjects in this course</option>
                ) : (
                  filteredSubjects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.scope === 'uttarakhand' ? 'Uttarakhand' : 'General'})
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>

          {filteredUnits.length === 0 ? (
            <EmptyState
              title="No units published for the selected subject"
              description="Units, chapters, and topics for this subject will appear here once published."
            />
          ) : (
            <div className="space-y-4">
              {filteredUnits.map((unit) => {
                const unitChapters = chapters
                  .filter((c) => c.unitId === unit.id)
                  .sort((a, b) => a.sortOrder - b.sortOrder);

                return (
                  <div
                    key={unit.id}
                    className="bg-panel border border-edge rounded-xl p-6 space-y-4 shadow-sm"
                  >
                    <div className="pb-3 border-b border-edge">
                      <div className="text-xs font-mono text-accent-text">
                        Unit {unit.sortOrder}
                      </div>
                      <h2 className="text-lg font-semibold text-ink">
                        {unit.title}
                      </h2>
                    </div>

                    {unitChapters.length === 0 ? (
                      <p className="text-sm text-ink-muted">
                        No chapters published in this unit yet.
                      </p>
                    ) : (
                      <div className="space-y-4">
                        {unitChapters.map((chap) => {
                          const chapTopics = topics
                            .filter((t) => t.chapterId === chap.id)
                            .sort((a, b) => a.sortOrder - b.sortOrder);
                          return (
                            <div
                              key={chap.id}
                              className="p-4 rounded-lg bg-subtle border border-edge space-y-3"
                            >
                              <h3 className="text-sm font-semibold text-ink">
                                {chap.title}
                              </h3>
                              {chapTopics.length === 0 ? (
                                <p className="text-xs text-ink-muted">
                                  No topics published in this chapter yet.
                                </p>
                              ) : (
                                <div className="divide-y divide-edge">
                                  {chapTopics.map((topic) => (
                                    <div key={topic.id} className="py-3">
                                      <div className="text-sm font-medium text-ink">{topic.title}</div>
                                      {topic.syllabusNotes && (
                                        <div className="text-xs text-ink-muted mt-0.5">{topic.syllabusNotes}</div>
                                      )}
                                    </div>
                                  ))}
                                </div>
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
        </div>
      )}
    </AppShell>
  );
}
