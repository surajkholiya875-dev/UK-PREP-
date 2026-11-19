import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Search } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  enrollInCourse,
  fetchPublishedCollection,
  fetchStudentOwned,
} from '../../services/firestoreService';
import { Course, Enrollment, ExamCategory, Examination } from '../../types/academic';

export function CourseCataloguePage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [exams, setExams] = useState<Examination[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<'ALL' | ExamCategory>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [enrollingId, setEnrollingId] = useState<string | null>(null);

  const loadCatalogue = async () => {
    if (!firebaseUser) return;
    setLoading(true);
    setError(null);
    try {
      const [crs, exm, enr] = await Promise.all([
        fetchPublishedCollection<Course>('courses'),
        fetchPublishedCollection<Examination>('examinations'),
        fetchStudentOwned<Enrollment>('enrollments', firebaseUser.uid),
      ]);
      setCourses(crs);
      setExams(exm);
      setEnrollments(enr);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load course catalogue.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadCatalogue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.uid]);

  const handleEnroll = async (course: Course) => {
    if (!firebaseUser) return;
    setEnrollingId(course.id);
    setSuccessMsg(null);
    try {
      const created = await enrollInCourse(firebaseUser.uid, course.id, course.examinationId);
      setEnrollments((prev) => [...prev.filter((e) => e.courseId !== course.id), created]);
      setSuccessMsg(`Enrolled in "${course.title}". You can now access it from My Courses.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Enrollment failed.');
    } finally {
      setEnrollingId(null);
    }
  };

  const filteredCourses = courses.filter((course) => {
    const exam = exams.find((x) => x.id === course.examinationId);
    const matchesCategory = categoryFilter === 'ALL' || exam?.category === categoryFilter;
    const matchesSearch =
      !searchTerm.trim() ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (course.summary || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Course Catalogue"
      breadcrumb="UK Prep / Student / Course Catalogue"
    >
      <div className="space-y-6">
        <div className="bg-panel border border-edge rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-1 p-1 bg-field border border-edge rounded-lg self-start">
            {(['ALL', 'UKPSC', 'UKSSSC', 'UPSC', 'Other'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  categoryFilter === cat
                    ? 'bg-accent text-accent-ink font-semibold shadow-sm'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {cat === 'ALL' ? 'All Exams' : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-ink-faint absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-9 pr-3.5 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </div>
        </div>

        {successMsg && <SuccessBanner message={successMsg} />}

        {loading ? (
          <LoadingState label="Loading published courses..." />
        ) : error ? (
          <ErrorState message={error} onRetry={() => void loadCatalogue()} />
        ) : filteredCourses.length === 0 ? (
          <EmptyState
            title="No published courses found"
            description="No published courses match the selected filter yet. Courses created and published in the Admin Workspace appear here automatically."
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => {
              const exam = exams.find((x) => x.id === course.examinationId);
              const isEnrolled = enrollments.some(
                (e) => e.courseId === course.id && e.status === 'active'
              );
              return (
                <div
                  key={course.id}
                  className="bg-panel border border-edge rounded-xl p-6 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="text-xs text-ink-faint">
                      {exam ? `${exam.category} · ${exam.code}` : 'Examination'} · {course.level} · {course.language}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-ink">
                      {course.title}
                    </h2>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                      {course.summary || 'Structured course syllabus with units, chapters, topics, and assessments.'}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-edge flex items-center justify-between gap-3">
                    <Link
                      to={`/student/courses/${course.id}`}
                      className="text-xs font-medium text-ink-muted hover:text-ink hover:underline"
                    >
                      Inspect Syllabus
                    </Link>

                    {isEnrolled ? (
                      <Link
                        to={`/student/courses/${course.id}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Enrolled</span>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        disabled={enrollingId === course.id}
                        onClick={() => void handleEnroll(course)}
                        className="px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors"
                      >
                        {enrollingId === course.id ? 'Enrolling...' : 'Enroll'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AppShell>
  );
}
