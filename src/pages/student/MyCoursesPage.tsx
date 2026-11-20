import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Search } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { enrollInCourse, fetchPublishedCollection, fetchStudentOwned } from '../../services/firestoreService';
import { Course, Enrollment, ExamCategory, Examination } from '../../types/academic';

type View = 'explore' | 'mine';

export function MyCoursesPage() {
  const { firebaseUser } = useAuth();
  const [view, setView] = useState<View>('explore');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [exams, setExams] = useState<Examination[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<'ALL' | ExamCategory>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [enrollingId, setEnrollingId] = useState<string | null>(null);

  const loadData = async () => {
    if (!firebaseUser) return;
    setLoading(true); setError(null);
    try {
      const [crs, exm, enr] = await Promise.all([
        fetchPublishedCollection<Course>('courses'),
        fetchPublishedCollection<Examination>('examinations'),
        fetchStudentOwned<Enrollment>('enrollments', firebaseUser.uid),
      ]);
      setCourses(crs); setExams(exm); setEnrollments(enr);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load courses.');
    } finally { setLoading(false); }
  };

  useEffect(() => { void loadData(); }, [firebaseUser?.uid]);

  const activeEnrollments = enrollments.filter(e => e.status === 'active');
  const enrolledCourses = useMemo(() => courses.filter(course => activeEnrollments.some(e => e.courseId === course.id)), [courses, enrollments]);
  const visibleCourses = useMemo(() => courses.filter(course => {
    const exam = exams.find(x => x.id === course.examinationId);
    const matchesCategory = categoryFilter === 'ALL' || exam?.category === categoryFilter;
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch = !term || [course.title, course.summary, exam?.title, exam?.code].some(v => v?.toLowerCase().includes(term));
    return matchesCategory && matchesSearch;
  }), [courses, exams, categoryFilter, searchTerm]);
  const shownCourses = view === 'mine' ? enrolledCourses : visibleCourses;

  const handleEnroll = async (course: Course) => {
    if (!firebaseUser) return;
    setEnrollingId(course.id); setError(null); setSuccessMsg(null);
    try {
      const created = await enrollInCourse(firebaseUser.uid, course.id, course.examinationId);
      setEnrollments(prev => [...prev.filter(e => e.courseId !== course.id), created]);
      setSuccessMsg('You are enrolled in "' + course.title + '". It is now available under My Courses.');
      setView('mine');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Enrollment failed.');
    } finally { setEnrollingId(null); }
  };

  return (
    <AppShell workspaceTitle="Student LMS" navItems={STUDENT_NAV_ITEMS} pageTitle="Courses" breadcrumb="UK Prep / Student / Courses">
      <div className="space-y-5">
        {successMsg && <SuccessBanner message={successMsg} />}
        {error && <ErrorState message={error} onRetry={() => void loadData()} />}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-ink">Courses</h1>
            <p className="mt-1 text-sm text-ink-muted">Explore published exam courses and continue your enrolled learning.</p>
          </div>
          <div className="flex rounded-xl border border-edge bg-panel p-1">
            <button onClick={() => setView('explore')} className={'rounded-lg px-4 py-2 text-sm font-semibold ' + (view === 'explore' ? 'bg-accent text-accent-ink' : 'text-ink-muted hover:text-ink')}>Explore Courses</button>
            <button onClick={() => setView('mine')} className={'rounded-lg px-4 py-2 text-sm font-semibold ' + (view === 'mine' ? 'bg-accent text-accent-ink' : 'text-ink-muted hover:text-ink')}>My Courses ({enrolledCourses.length})</button>
          </div>
        </div>

        {view === 'explore' && <div className="bg-panel border border-edge rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1 rounded-lg border border-edge bg-field p-1">
            {(['ALL','UKPSC','UKSSSC','UPSC','Other'] as const).map(cat => <button key={cat} onClick={() => setCategoryFilter(cat)} className={'rounded-md px-3 py-1.5 text-xs font-medium ' + (categoryFilter === cat ? 'bg-accent text-accent-ink' : 'text-ink-muted hover:text-ink')}>{cat === 'ALL' ? 'All Exams' : cat}</button>)}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"/>
            <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search courses or examinations..." className="w-full rounded-lg border border-edge-strong bg-field py-2 pl-9 pr-3 text-sm text-ink"/>
          </div>
        </div>}

        {loading ? <LoadingState label="Loading courses..."/> : shownCourses.length === 0 ? (
          <EmptyState title={view === 'mine' ? 'No enrolled courses yet' : 'No published courses found'} description={view === 'mine' ? 'Explore the available courses and enroll to add them here.' : 'Published courses will appear here when they are added by the administrator.'} action={view === 'mine' ? <button onClick={() => setView('explore')} className="rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-ink">Explore Courses</button> : undefined}/>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {shownCourses.map(course => {
              const exam = exams.find(x => x.id === course.examinationId);
              const isEnrolled = activeEnrollments.some(e => e.courseId === course.id);
              return <article key={course.id} className="flex flex-col justify-between rounded-xl border border-edge bg-panel p-5 shadow-sm">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-amber-600">{exam ? exam.category + ' · ' + exam.code : 'Examination'} · {course.level} · {course.language}</div>
                  <h2 className="mt-2 text-lg font-bold text-ink">{course.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{course.summary || 'Structured syllabus with subjects, units, chapters, topics and assessments.'}</p>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-edge pt-4">
                  <Link to={'/student/courses/' + course.id} className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:underline">View syllabus <ArrowRight className="h-3.5 w-3.5"/></Link>
                  {isEnrolled ? <Link to={'/student/courses/' + course.id} className="inline-flex items-center gap-1 rounded-lg border border-emerald-300 px-3 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300"><Check className="h-3.5 w-3.5"/> Enrolled</Link> : view === 'mine' ? null : <button disabled={enrollingId === course.id} onClick={() => void handleEnroll(course)} className="rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-ink disabled:opacity-60">{enrollingId === course.id ? 'Enrolling...' : 'Enroll'}</button>}
                </div>
              </article>;
            })}
          </div>
        )}
      </div>
    </AppShell>
  );
}
