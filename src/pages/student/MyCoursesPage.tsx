import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchPublishedCollection, fetchStudentOwned } from '../../services/firestoreService';
import { Course, Enrollment, Examination } from '../../types/academic';

export function MyCoursesPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [exams, setExams] = useState<Examination[]>([]);

  const loadData = async () => {
    if (!firebaseUser) return;
    setLoading(true);
    setError(null);
    try {
      const [enr, crs, exm] = await Promise.all([
        fetchStudentOwned<Enrollment>('enrollments', firebaseUser.uid),
        fetchPublishedCollection<Course>('courses'),
        fetchPublishedCollection<Examination>('examinations'),
      ]);
      setEnrollments(enr.filter((e) => e.status === 'active'));
      setCourses(crs);
      setExams(exm);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load enrolled courses.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.uid]);

  const enrolledItems = enrollments
    .map((enr) => {
      const course = courses.find((c) => c.id === enr.courseId);
      const exam = exams.find((x) => x.id === enr.examinationId);
      return course ? { enrollment: enr, course, exam } : null;
    })
    .filter(Boolean) as { enrollment: Enrollment; course: Course; exam?: Examination }[];

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="My Courses"
      breadcrumb="UK Prep / Student / My Courses"
      headerAction={
        <Link
          to="/student/catalogue"
          className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors whitespace-nowrap"
        >
          Course Catalogue
        </Link>
      }
    >
      {loading ? (
        <LoadingState label="Loading your enrolled courses..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => void loadData()} />
      ) : enrolledItems.length === 0 ? (
        <EmptyState
          title="You have not enrolled in any courses"
          description="Select a course from the published Course Catalogue to unlock its subject units, chapters, study materials, and tests."
          action={
            <Link
              to="/student/catalogue"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
            >
              <span>Browse Course Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          }
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledItems.map(({ course, exam }) => (
            <div
              key={course.id}
              className="bg-panel border border-edge rounded-xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="text-xs text-ink-faint">
                  {exam?.code || 'Exam Track'} · {course.level} · {course.language}
                </div>
                <h2 className="mt-2 text-lg font-semibold text-ink">
                  {course.title}
                </h2>
                <p className="mt-2 text-sm text-ink-muted line-clamp-3">
                  {course.summary || 'Structured syllabus covering core units, chapters, and assessment modules.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-edge flex items-center justify-between">
                <Link
                  to={`/student/courses/${course.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:text-accent-hover hover:underline"
                >
                  <span>Open Course</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </AppShell>
  );
}
