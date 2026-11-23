import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  buildCanonicalSubjectGroups,
  resolveOrderedTopicsForSubjectIds,
} from '../../lib/syllabusHierarchy';
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
      setSubjects(subjs.sort((a, b) => a.sortOrder - b.sortOrder));
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

          <Link
            to="/student/syllabus"
            className="group block rounded-xl border-2 border-amber-400 bg-gradient-to-r from-slate-900 to-slate-800 p-6 shadow-sm transition hover:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">Start here</div>
                <h3 className="mt-2 text-xl font-bold text-white">UKPSC Syllabus</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-200">View the exam syllabus and use it as your roadmap before opening subject-wise topics and study material.</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 group-hover:bg-amber-300">Open syllabus <ChevronRight className="h-4 w-4" /></span>
            </div>
          </Link>

          <div>
            <h3 className="mb-4 text-lg font-bold text-ink">Subjects</h3>
            {(() => {
              const courseSubjects = subjects.filter((subject) => subject.courseId === course.id);
              const displaySubjects = courseSubjects.length > 0 ? courseSubjects : subjects;
              const canonicalGroups = buildCanonicalSubjectGroups(displaySubjects);
              if (canonicalGroups.length === 0) {
                return (
                  <EmptyState
                    title="No subjects published in this course yet"
                    description="Add subjects from Admin Workspace → Subject Management."
                  />
                );
              }
              return (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {canonicalGroups.map((group) => {
                    const subjectIds = new Set(group.memberSubjects.map((item) => item.id));
                    const subjectTopics = resolveOrderedTopicsForSubjectIds({
                      subjectIds,
                      allUnits: units,
                      allChapters: chapters,
                      allTopics: topics,
                    });
                    return (
                      <Link
                        key={group.routeKey}
                        to={`/student/syllabus/${encodeURIComponent(group.routeKey)}`}
                        className="group rounded-xl border border-edge bg-panel p-5 shadow-sm transition hover:border-amber-400 hover:bg-subtle focus:outline-none focus:ring-2 focus:ring-amber-400"
                      >
                        <div className="text-xs font-mono text-accent-text">
                          {group.primarySubject.scope === 'uttarakhand'
                            ? 'Uttarakhand Subject'
                            : 'General Studies'}
                        </div>
                        <h4 className="mt-2 text-lg font-semibold text-ink group-hover:text-amber-600">
                          {group.title}
                        </h4>
                        {group.primarySubject.description && (
                          <p className="mt-2 line-clamp-3 text-sm leading-5 text-ink-muted">
                            {group.primarySubject.description}
                          </p>
                        )}
                        <div className="mt-4 flex items-center justify-between border-t border-edge pt-3 text-xs">
                          <span className="text-ink-muted">{subjectTopics.length} topics</span>
                          <span className="inline-flex items-center gap-1 font-semibold text-amber-600">
                            Open subject <ChevronRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </AppShell>
  );
}
