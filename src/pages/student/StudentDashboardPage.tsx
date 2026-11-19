import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, BookMarked, BookOpen, ClipboardCheck, TrendingUp } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchPublishedCollection, fetchStudentOwned } from '../../services/firestoreService';
import {
  Announcement,
  Bookmark,
  Course,
  Enrollment,
  LearningProgress,
  TestAttempt,
} from '../../types/academic';

export function StudentDashboardPage() {
  const { firebaseUser, profile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [progress, setProgress] = useState<LearningProgress[]>([]);
  const [attempts, setAttempts] = useState<TestAttempt[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const loadDashboard = async () => {
    if (!firebaseUser) return;
    setLoading(true);
    setError(null);
    try {
      const [enr, crs, prog, att, bm, ann] = await Promise.all([
        fetchStudentOwned<Enrollment>('enrollments', firebaseUser.uid),
        fetchPublishedCollection<Course>('courses'),
        fetchStudentOwned<LearningProgress>('learningProgress', firebaseUser.uid),
        fetchStudentOwned<TestAttempt>('testAttempts', firebaseUser.uid),
        fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid),
        fetchPublishedCollection<Announcement>('announcements'),
      ]);
      setEnrollments(enr);
      setCourses(crs);
      setProgress(prog);
      setAttempts(att);
      setBookmarks(bm);
      setAnnouncements(ann.slice(0, 4));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load dashboard metrics.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.uid]);

  const completedTopics = progress.filter((p) => p.completionStatus === 'completed').length;
  const submittedAttempts = attempts.filter((a) => a.status === 'submitted').length;
  const enrolledCourses = courses.filter((c) => enrollments.some((e) => e.courseId === c.id && e.status === 'active'));

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Student Dashboard"
      breadcrumb="UK Prep / Student Portal"
      headerAction={
        <Link
          to="/student/catalogue"
          className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors whitespace-nowrap"
        >
          Browse Catalogue
        </Link>
      }
    >
      <div className="space-y-8">
        <div className="bg-panel border border-edge rounded-xl p-6 shadow-sm">
          <div className="text-xs text-ink-muted">
            Target Examination · {profile?.primaryTargetExam || profile?.targetExam || 'Not specified'}
          </div>
          <h2 className="mt-1 text-xl font-bold text-ink">
            Welcome, {profile?.fullName || profile?.displayName || firebaseUser?.displayName || 'Aspirant'}
          </h2>
          <p className="mt-1.5 text-sm text-ink-muted">
            Track your enrolled courses, syllabus progression, saved notes, and examination attempts in one workspace.
          </p>
        </div>

        {loading ? (
          <LoadingState label="Loading your academic workspace..." />
        ) : error ? (
          <ErrorState message={error} onRetry={() => void loadDashboard()} />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-panel border border-edge rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between text-ink-muted text-xs font-medium">
                  <span>Active Courses</span>
                  <BookOpen className="w-4 h-4 text-accent-text" />
                </div>
                <div className="mt-3 text-2xl font-bold font-mono tabular-nums text-ink">
                  {enrolledCourses.length}
                </div>
              </div>

              <div className="bg-panel border border-edge rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between text-ink-muted text-xs font-medium">
                  <span>Topics Completed</span>
                  <TrendingUp className="w-4 h-4 text-accent-text" />
                </div>
                <div className="mt-3 text-2xl font-bold font-mono tabular-nums text-ink">
                  {completedTopics}
                </div>
              </div>

              <div className="bg-panel border border-edge rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between text-ink-muted text-xs font-medium">
                  <span>Tests Submitted</span>
                  <ClipboardCheck className="w-4 h-4 text-accent-text" />
                </div>
                <div className="mt-3 text-2xl font-bold font-mono tabular-nums text-ink">
                  {submittedAttempts}
                </div>
              </div>

              <div className="bg-panel border border-edge rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between text-ink-muted text-xs font-medium">
                  <span>Saved Bookmarks</span>
                  <BookMarked className="w-4 h-4 text-accent-text" />
                </div>
                <div className="mt-3 text-2xl font-bold font-mono tabular-nums text-ink">
                  {bookmarks.length}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-ink">
                    Enrolled Courses
                  </h3>
                  <Link
                    to="/student/courses"
                    className="text-xs font-medium text-accent-text hover:text-accent-hover hover:underline"
                  >
                    View all
                  </Link>
                </div>

                {enrolledCourses.length === 0 ? (
                  <EmptyState
                    title="No active course enrollments"
                    description="You have not enrolled in any published courses yet. Browse the Course Catalogue to begin structured preparation."
                    action={
                      <Link
                        to="/student/catalogue"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
                      >
                        <span>Explore Course Catalogue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    }
                  />
                ) : (
                  <div className="space-y-3">
                    {enrolledCourses.map((course) => (
                      <Link
                        key={course.id}
                        to={`/student/courses/${course.id}`}
                        className="block bg-panel border border-edge rounded-xl p-5 hover:border-accent transition-colors shadow-sm"
                      >
                        <div className="text-xs text-ink-faint">
                          {course.level} · {course.language}
                        </div>
                        <div className="mt-1 text-base font-semibold text-ink">
                          {course.title}
                        </div>
                        {course.summary && (
                          <p className="mt-1.5 text-sm text-ink-muted line-clamp-2">
                            {course.summary}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-ink">
                    Recent Announcements
                  </h3>
                  <Link
                    to="/student/announcements"
                    className="text-xs font-medium text-accent-text hover:text-accent-hover hover:underline"
                  >
                    All notices
                  </Link>
                </div>

                {announcements.length === 0 ? (
                  <EmptyState
                    title="No announcements published"
                    description="Official commission notices and platform updates published by administrators will appear here."
                  />
                ) : (
                  <div className="bg-panel border border-edge rounded-xl divide-y divide-edge shadow-sm">
                    {announcements.map((item) => (
                      <div key={item.id} className="p-4">
                        <div className="flex items-center gap-2 text-xs text-accent-text font-medium">
                          <Bell className="w-3.5 h-3.5" />
                          <span>{item.category.replace('_', ' ')}</span>
                          {item.isPinned && <span>· Pinned</span>}
                        </div>
                        <h4 className="mt-1 text-sm font-semibold text-ink">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-ink-muted line-clamp-2">
                          {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </AppShell>
  );
}
