import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  enrollInCourse,
  fetchPublishedCollection,
  fetchStudentOwned,
} from '../../services/firestoreService';
import { Chapter, Course, Enrollment, Examination, Subject, Topic, Unit } from '../../types/academic';

export function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const { firebaseUser } = useAuth();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [exam, setExam] = useState<Examination | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const loadDetail = async () => {
    if (!firebaseUser || !courseId) return;
    setLoading(true);
    setError(null);
    try {
      const [crs, exms, subjs, unts, chaps, tpcs, enrs] = await Promise.all([
        fetchPublishedCollection<Course>('courses'),
        fetchPublishedCollection<Examination>('examinations'),
        fetchPublishedCollection<Subject>('subjects'),
        fetchPublishedCollection<Unit>('units'),
        fetchPublishedCollection<Chapter>('chapters'),
        fetchPublishedCollection<Topic>('topics'),
        fetchStudentOwned<Enrollment>('enrollments', firebaseUser.uid),
      ]);

      const foundCourse = crs.find((c) => c.id === courseId) || null;
      setCourse(foundCourse);
      setExam(foundCourse ? exms.find((e) => e.id === foundCourse.examinationId) || null : null);
      setSubjects(subjs.filter((s) => s.courseId === courseId).sort((a, b) => a.sortOrder - b.sortOrder));
      setUnits(unts.filter((u) => u.courseId === courseId).sort((a, b) => a.sortOrder - b.sortOrder));
      setChapters(chaps.filter((c) => c.courseId === courseId).sort((a, b) => a.sortOrder - b.sortOrder));
      setTopics(tpcs.filter((t) => t.courseId === courseId).sort((a, b) => a.sortOrder - b.sortOrder));
      setIsEnrolled(enrs.some((e) => e.courseId === courseId && e.status === 'active'));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load course details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, firebaseUser?.uid]);

  const handleEnroll = async () => {
    if (!firebaseUser || !course) return;
    try {
      await enrollInCourse(firebaseUser.uid, course.id, course.examinationId);
      setIsEnrolled(true);
      setSuccessMsg('Enrolled in course successfully.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not enroll.');
    }
  };

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle={course?.title || 'Course Detail'}
      breadcrumb="UK Prep / Student / Course Detail"
      headerAction={
        <Link
          to="/student/catalogue"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-ink hover:underline whitespace-nowrap"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Catalogue</span>
        </Link>
      }
    >
      {loading ? (
        <LoadingState label="Loading course hierarchy..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => void loadDetail()} />
      ) : !course ? (
        <EmptyState
          title="Course not found"
          description="This course does not exist or has not been published yet."
          action={
            <Link
              to="/student/catalogue"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
            >
              Return to Catalogue
            </Link>
          }
        />
      ) : (
        <div className="space-y-6">
          {successMsg && <SuccessBanner message={successMsg} />}

          <div className="bg-panel border border-edge rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
            <div>
              <div className="text-xs text-ink-faint">
                {exam ? `${exam.category} · ${exam.title}` : 'Course'} · {course.level} · {course.language}
              </div>
              <h2 className="mt-1.5 text-2xl font-bold text-ink">
                {course.title}
              </h2>
              {course.summary && (
                <p className="mt-2 text-sm text-ink-muted max-w-2xl leading-relaxed">
                  {course.summary}
                </p>
              )}
            </div>

            <div className="shrink-0">
              {isEnrolled ? (
                <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
                  <Check className="w-4 h-4" />
                  <span>Enrolled</span>
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => void handleEnroll()}
                  className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
                >
                  Enroll in Course
                </button>
              )}
            </div>
          </div>

          {subjects.length === 0 ? (
            <EmptyState
              title="No subjects published in this course yet"
              description="Administrators can add Uttarakhand-specific and General competitive subjects under this course from the Admin Workspace."
            />
          ) : (
            <div className="space-y-4">
              {subjects.map((subject) => {
                const subUnits = units.filter((u) => u.subjectId === subject.id);
                return (
                  <div
                    key={subject.id}
                    className="bg-panel border border-edge rounded-xl p-6 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-edge">
                      <div>
                        <div className="text-xs font-mono text-accent-text">
                          {subject.scope === 'uttarakhand' ? 'Uttarakhand Subject' : 'General Subject'}
                        </div>
                        <h3 className="text-lg font-semibold text-ink">
                          {subject.title}
                        </h3>
                      </div>
                      <Link
                        to="/student/syllabus"
                        className="inline-flex items-center gap-1 text-xs font-medium text-accent-text hover:text-accent-hover hover:underline"
                      >
                        <span>Open in Syllabus Navigator</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {subUnits.length === 0 ? (
                      <p className="mt-4 text-sm text-ink-muted">
                        No units published under this subject yet.
                      </p>
                    ) : (
                      <div className="mt-4 space-y-4">
                        {subUnits.map((unit) => {
                          const unitChapters = chapters.filter((c) => c.unitId === unit.id);
                          return (
                            <div key={unit.id} className="pl-2 space-y-2">
                              <h4 className="text-sm font-semibold text-ink">
                                {unit.title}
                              </h4>
                              {unitChapters.map((chap) => {
                                const chapTopics = topics.filter((t) => t.chapterId === chap.id);
                                return (
                                  <div
                                    key={chap.id}
                                    className="ml-3 pl-4 border-l border-edge-strong py-1 space-y-1"
                                  >
                                    <div className="text-sm font-medium text-ink">
                                      {chap.title}
                                    </div>
                                    {chapTopics.length > 0 && (
                                      <ul className="space-y-1 pl-3">
                                        {chapTopics.map((topic) => (
                                          <li
                                            key={topic.id}
                                            className="text-xs text-ink-muted"
                                          >
                                            · {topic.title}
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                );
                              })}
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
