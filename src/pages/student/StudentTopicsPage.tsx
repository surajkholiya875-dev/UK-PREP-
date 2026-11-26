import { useEffect, useMemo, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  compareNaturalText,
  resolveCanonicalSubjectDefinition,
  safeSortOrder,
} from '../../lib/syllabusHierarchy';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Chapter, Course, Subject, Topic, Unit } from '../../types/academic';

type TopicsPageSortOption = 'recommended' | 'az';

export function StudentTopicsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [sortBy, setSortBy] = useState<TopicsPageSortOption>('recommended');

  const load = async () => {
    if (!firebaseUser) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const [t, u, ch, sub, crs] = await Promise.all([
        fetchPublishedCollection<Topic>('topics'),
        fetchPublishedCollection<Unit>('units'),
        fetchPublishedCollection<Chapter>('chapters'),
        fetchPublishedCollection<Subject>('subjects'),
        fetchPublishedCollection<Course>('courses'),
      ]);
      setTopics(t);
      setUnits(u);
      setChapters(ch);
      setSubjects(sub);
      setCourses(crs);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unable to load topics.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, [firebaseUser?.uid]);

  const unitById = useMemo(() => new Map(units.map((u) => [u.id, u])), [units]);
  const chapterById = useMemo(() => new Map(chapters.map((c) => [c.id, c])), [chapters]);
  const subjectById = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);
  const courseById = useMemo(() => new Map(courses.map((c) => [c.id, c])), [courses]);

  const sortedTopics = useMemo(() => {
    const getSubjectRank = (subject?: Subject) => {
      if (!subject) return Number.MAX_SAFE_INTEGER;
      const canonical = resolveCanonicalSubjectDefinition(subject.title);
      if (canonical) return canonical.sortOrder;
      const raw = safeSortOrder(subject.sortOrder);
      return raw === Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : 1000 + raw;
    };

    const copy = [...topics];
    if (sortBy === 'az') {
      return copy.sort((a, b) => compareNaturalText(a.title, b.title));
    }

    return copy.sort((a, b) => {
      const chA = a.chapterId ? chapterById.get(a.chapterId) : undefined;
      const chB = b.chapterId ? chapterById.get(b.chapterId) : undefined;
      const uA = (a.unitId ? unitById.get(a.unitId) : undefined) || (chA?.unitId ? unitById.get(chA.unitId) : undefined);
      const uB = (b.unitId ? unitById.get(b.unitId) : undefined) || (chB?.unitId ? unitById.get(chB.unitId) : undefined);
      const sA =
        subjectById.get(a.subjectId) ||
        (chA?.subjectId ? subjectById.get(chA.subjectId) : undefined) ||
        (uA?.subjectId ? subjectById.get(uA.subjectId) : undefined);
      const sB =
        subjectById.get(b.subjectId) ||
        (chB?.subjectId ? subjectById.get(chB.subjectId) : undefined) ||
        (uB?.subjectId ? subjectById.get(uB.subjectId) : undefined);

      const subjDiff = getSubjectRank(sA) - getSubjectRank(sB);
      if (subjDiff !== 0) return subjDiff;

      const unitDiff = safeSortOrder(uA?.sortOrder) - safeSortOrder(uB?.sortOrder);
      if (unitDiff !== 0) return unitDiff;

      const chDiff = safeSortOrder(chA?.sortOrder) - safeSortOrder(chB?.sortOrder);
      if (chDiff !== 0) return chDiff;

      const topicDiff = safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder);
      if (topicDiff !== 0) return topicDiff;

      return compareNaturalText(a.title, b.title);
    });
  }, [topics, sortBy, chapterById, unitById, subjectById]);

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Topics"
      breadcrumb="UK Prep / Student / Topics"
    >
      {loading ? (
        <LoadingState label="Loading published topics..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => void load()} />
      ) : topics.length === 0 ? (
        <EmptyState
          title="No published topics yet"
          description="Published topics added by the admin will appear here."
        />
      ) : (
        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-baseline gap-2.5">
              <h2 className="text-lg font-bold text-ink">Topics</h2>
              <span className="text-xs text-ink-muted">({sortedTopics.length})</span>
            </div>

            <div
              className="flex flex-wrap items-center gap-1.5"
              role="group"
              aria-label="Sort topics"
            >
              <span className="mr-1 text-xs font-medium text-ink-muted">Sort:</span>
              <button
                type="button"
                aria-pressed={sortBy === 'recommended'}
                onClick={() => setSortBy('recommended')}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                  sortBy === 'recommended'
                    ? 'border-amber-400 bg-amber-400 font-semibold text-slate-950'
                    : 'border-edge bg-panel text-ink-muted hover:border-amber-400/60 hover:text-ink'
                }`}
              >
                Recommended order
              </button>
              <button
                type="button"
                aria-pressed={sortBy === 'az'}
                onClick={() => setSortBy('az')}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                  sortBy === 'az'
                    ? 'border-amber-400 bg-amber-400 font-semibold text-slate-950'
                    : 'border-edge bg-panel text-ink-muted hover:border-amber-400/60 hover:text-ink'
                }`}
              >
                A–Z
              </button>
            </div>
          </div>

          <div className="divide-y divide-edge rounded-xl border border-edge bg-panel">
            {sortedTopics.map((topic) => {
              const chapter = topic.chapterId ? chapterById.get(topic.chapterId) : undefined;
              const unit =
                (topic.unitId ? unitById.get(topic.unitId) : undefined) ||
                (chapter?.unitId ? unitById.get(chapter.unitId) : undefined);
              const subject =
                subjectById.get(topic.subjectId) ||
                (chapter?.subjectId ? subjectById.get(chapter.subjectId) : undefined) ||
                (unit?.subjectId ? subjectById.get(unit.subjectId) : undefined);
              const course = subject
                ? courseById.get(subject.courseId)
                : courseById.get(topic.courseId);
              const subjectLabel = subject
                ? resolveCanonicalSubjectDefinition(subject.title)?.title || subject.title
                : 'Subject';
              const showChapter =
                Boolean(chapter?.title) &&
                chapter!.title.trim().toLowerCase() !== topic.title.trim().toLowerCase();

              return (
                <Link
                  key={topic.id}
                  to={`/student/topics/${encodeURIComponent(topic.id)}`}
                  className="group flex items-center justify-between gap-4 p-4 transition-colors hover:bg-subtle"
                >
                  <div className="min-w-0">
                    <div className="text-xs text-ink-muted">
                      {course?.title || 'Course'} · {subjectLabel}
                      {showChapter ? ` · ${chapter!.title}` : ''}
                    </div>
                    <h3 className="mt-1 text-sm font-semibold text-ink transition-colors group-hover:text-amber-500">
                      {topic.title}
                    </h3>
                    {topic.syllabusNotes && (
                      <p className="mt-1 line-clamp-2 text-sm text-ink-muted">
                        {topic.syllabusNotes}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-ink-faint transition-colors group-hover:text-amber-500" />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </AppShell>
  );
}
