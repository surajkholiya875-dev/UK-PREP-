import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowDownWideNarrow, ArrowLeft, ArrowUpNarrowWide, Check, ChevronRight } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  buildCanonicalSubjectGroups,
  CanonicalSubjectGroup,
  compareNaturalText,
  resolveOrderedTopicsForSubjectIds,
  safeSortOrder,
} from '../../lib/syllabusHierarchy';
import {
  enrollInCourse,
  fetchPublishedCollection,
  fetchStudentOwned,
} from '../../services/firestoreService';
import { Chapter, Course, Enrollment, Examination, Subject, Topic, Unit } from '../../types/academic';

type SubjectSortOption = 'recommended' | 'az' | 'topic_count_desc' | 'topic_count_asc';

interface SubjectCardItem {
  group: CanonicalSubjectGroup;
  topicCount: number;
  recommendedIndex: number;
}

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
  const [sortBy, setSortBy] = useState<SubjectSortOption>('recommended');

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
      setSubjects([...subjs].sort((a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder)));
      setUnits([...unts].sort((a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder)));
      setChapters([...chaps].sort((a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder)));
      setTopics([...tpcs].sort((a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder)));
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

  const subjectCards = useMemo<SubjectCardItem[]>(() => {
    if (!course) return [];

    const allCanonicalGroups = buildCanonicalSubjectGroups(subjects);
    const hasCourseScopedSubjects = subjects.some((subject) => subject.courseId === course.id);
    const visibleGroups = hasCourseScopedSubjects
      ? allCanonicalGroups.filter((group) =>
          group.memberSubjects.some((subject) => subject.courseId === course.id)
        )
      : allCanonicalGroups;

    return visibleGroups.map((group, recommendedIndex) => {
      const subjectIds = new Set(group.memberSubjects.map((item) => item.id));
      const orderedTopics = resolveOrderedTopicsForSubjectIds({
        subjectIds,
        allUnits: units,
        allChapters: chapters,
        allTopics: topics,
      });
      return {
        group,
        topicCount: orderedTopics.length,
        recommendedIndex,
      };
    });
  }, [course, subjects, units, chapters, topics]);

  const sortedSubjectCards = useMemo<SubjectCardItem[]>(() => {
    const copy = [...subjectCards];
    switch (sortBy) {
      case 'az':
        return copy.sort(
          (a, b) =>
            compareNaturalText(a.group.title, b.group.title) ||
            a.recommendedIndex - b.recommendedIndex
        );
      case 'topic_count_desc':
        return copy.sort(
          (a, b) => b.topicCount - a.topicCount || a.recommendedIndex - b.recommendedIndex
        );
      case 'topic_count_asc':
        return copy.sort(
          (a, b) => a.topicCount - b.topicCount || a.recommendedIndex - b.recommendedIndex
        );
      case 'recommended':
      default:
        return copy.sort((a, b) => a.recommendedIndex - b.recommendedIndex);
    }
  }, [subjectCards, sortBy]);

  const isTopicCountSort = sortBy === 'topic_count_desc' || sortBy === 'topic_count_asc';

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
        <div className="space-y-5">
          {successMsg && <SuccessBanner message={successMsg} />}

          <div className="bg-panel border border-edge rounded-xl px-4 py-2.5 md:py-0 md:min-h-[52px] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 shadow-sm">
            <div className="min-w-0 flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <h2 className="text-base md:text-lg font-bold text-ink truncate">
                  {course.title}
                </h2>
                <span className="hidden lg:inline-flex shrink-0 text-[11px] font-medium text-ink-faint border border-edge rounded px-1.5 py-0.5">
                  {exam ? exam.category : course.level} · {course.language}
                </span>
              </div>
              {course.summary && (
                <p
                  className="text-xs text-ink-muted truncate max-w-xl"
                  title={course.summary}
                >
                  {course.summary}
                </p>
              )}
            </div>

            <div className="shrink-0 flex items-center">
              {isEnrolled ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
                  <Check className="w-3.5 h-3.5" />
                  <span>Enrolled</span>
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => void handleEnroll()}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
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
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-baseline gap-2.5">
                <h3 className="text-lg font-bold text-ink">Subjects</h3>
                {subjectCards.length > 0 && (
                  <span className="text-xs text-ink-muted">
                    ({subjectCards.length})
                  </span>
                )}
              </div>

              {subjectCards.length > 0 && (
                <div
                  className="flex flex-wrap items-center gap-1.5"
                  role="group"
                  aria-label="Sort subjects"
                >
                  <span className="text-xs font-medium text-ink-muted mr-1">Sort:</span>
                  <button
                    type="button"
                    aria-pressed={sortBy === 'recommended'}
                    onClick={() => setSortBy('recommended')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                      sortBy === 'recommended'
                        ? 'bg-amber-400 border-amber-400 text-slate-950 font-semibold'
                        : 'bg-panel border-edge text-ink-muted hover:text-ink hover:border-amber-400/60'
                    }`}
                  >
                    Recommended order
                  </button>
                  <button
                    type="button"
                    aria-pressed={sortBy === 'az'}
                    onClick={() => setSortBy('az')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                      sortBy === 'az'
                        ? 'bg-amber-400 border-amber-400 text-slate-950 font-semibold'
                        : 'bg-panel border-edge text-ink-muted hover:text-ink hover:border-amber-400/60'
                    }`}
                  >
                    A–Z
                  </button>
                  <button
                    type="button"
                    aria-pressed={isTopicCountSort}
                    onClick={() =>
                      setSortBy((prev) =>
                        prev === 'topic_count_desc' ? 'topic_count_asc' : 'topic_count_desc'
                      )
                    }
                    title={
                      sortBy === 'topic_count_asc'
                        ? 'Sorted low to high (click for high to low)'
                        : 'Sort by topic count (high to low)'
                    }
                    className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                      isTopicCountSort
                        ? 'bg-amber-400 border-amber-400 text-slate-950 font-semibold'
                        : 'bg-panel border-edge text-ink-muted hover:text-ink hover:border-amber-400/60'
                    }`}
                  >
                    <span>Topic count</span>
                    {sortBy === 'topic_count_asc' ? (
                      <ArrowUpNarrowWide className="w-3.5 h-3.5" aria-hidden="true" />
                    ) : (
                      <ArrowDownWideNarrow className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              )}
            </div>

            {sortedSubjectCards.length === 0 ? (
              <EmptyState
                title="No subjects published in this course yet"
                description="Add subjects from Admin Workspace → Subject Management."
              />
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {sortedSubjectCards.map(({ group, topicCount }) => {
                  const categoryLabel =
                    group.primarySubject.scope === 'uttarakhand'
                      ? 'Uttarakhand Focus'
                      : group.slug === 'csat'
                        ? 'Aptitude & CSAT'
                        : 'Core Syllabus';

                  return (
                    <Link
                      key={group.routeKey}
                      to={`/student/syllabus/${encodeURIComponent(group.routeKey)}`}
                      className="group rounded-xl border border-edge bg-panel p-5 shadow-sm transition hover:border-amber-400 hover:bg-subtle focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <div className="text-xs font-mono text-accent-text">
                        {categoryLabel}
                      </div>
                      <h4 className="mt-2 text-lg font-semibold text-ink group-hover:text-amber-500">
                        {group.title}
                      </h4>
                      {group.primarySubject.description && (
                        <p className="mt-2 line-clamp-3 text-sm leading-5 text-ink-muted">
                          {group.primarySubject.description}
                        </p>
                      )}
                      <div className="mt-4 flex items-center justify-between border-t border-edge pt-3 text-xs">
                        <span className="text-ink-muted">
                          {topicCount} {topicCount === 1 ? 'topic' : 'topics'}
                        </span>
                        <span className="inline-flex items-center gap-1 font-semibold text-amber-500">
                          Open subject <ChevronRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </AppShell>
  );
}
