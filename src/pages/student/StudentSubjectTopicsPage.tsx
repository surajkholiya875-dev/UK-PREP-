import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  compareNaturalText,
  findSubjectGroupByParam,
  OrderedTopicEntry,
  resolveOrderedTopicsForSubjectIds,
} from '../../lib/syllabusHierarchy';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Chapter, Course, StudyMaterial, Subject, Topic, Unit } from '../../types/academic';

type TopicSortOption = 'recommended' | 'az';

interface ChapterGroup {
  key: string;
  chapterTitle: string | null;
  chapterSummary?: string;
  items: Array<{
    entry: OrderedTopicEntry;
    topicNumber: number;
  }>;
}

export function StudentSubjectTopicsPage() {
  const { courseId, subjectId } = useParams<{ courseId?: string; subjectId: string }>();
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [courseTitle, setCourseTitle] = useState<string | null>(null);
  const [subjectTitle, setSubjectTitle] = useState<string | null>(null);
  const [routeKey, setRouteKey] = useState<string>('');
  const [orderedTopics, setOrderedTopics] = useState<OrderedTopicEntry[]>([]);
  const [materialCountByTopic, setMaterialCountByTopic] = useState<Record<string, number>>({});
  const [sortBy, setSortBy] = useState<TopicSortOption>('recommended');

  const loadSubjectTopics = useCallback(async () => {
    if (!firebaseUser || !subjectId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const [allSubjects, allUnits, allChapters, allTopics, allMaterials, allCourses] =
        await Promise.all([
          fetchPublishedCollection<Subject>('subjects'),
          fetchPublishedCollection<Unit>('units'),
          fetchPublishedCollection<Chapter>('chapters'),
          fetchPublishedCollection<Topic>('topics'),
          fetchPublishedCollection<StudyMaterial>('studyMaterials'),
          courseId ? fetchPublishedCollection<Course>('courses') : Promise.resolve<Course[]>([]),
        ]);

      if (courseId) {
        const matchedCourse = allCourses.find((c) => c.id === courseId);
        setCourseTitle(matchedCourse?.title ?? null);
      } else {
        setCourseTitle(null);
      }

      const matchedGroup = findSubjectGroupByParam(allSubjects, subjectId);
      if (!matchedGroup) {
        setSubjectTitle(null);
        setRouteKey(subjectId);
        setOrderedTopics([]);
        setMaterialCountByTopic({});
        return;
      }

      setSubjectTitle(matchedGroup.title);
      setRouteKey(matchedGroup.routeKey);

      const subjectIds = new Set(matchedGroup.memberSubjects.map((item) => item.id));
      const resolved = resolveOrderedTopicsForSubjectIds({
        subjectIds,
        allUnits,
        allChapters,
        allTopics,
      });

      const counts: Record<string, number> = {};
      for (const material of allMaterials) {
        counts[material.topicId] = (counts[material.topicId] ?? 0) + 1;
      }
      setMaterialCountByTopic(counts);
      setOrderedTopics(resolved);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load this subject.');
    } finally {
      setLoading(false);
    }
  }, [courseId, firebaseUser?.uid, subjectId]);

  useEffect(() => {
    void loadSubjectTopics();
  }, [loadSubjectTopics]);

  const chapterGroups = useMemo<ChapterGroup[]>(() => {
    const groups: ChapterGroup[] = [];
    const byKey = new Map<string, ChapterGroup>();

    orderedTopics.forEach((entry, index) => {
      const chapter = entry.chapter;
      const key = chapter?.id || `unassigned:${entry.topic.chapterId || 'none'}`;
      let group = byKey.get(key);
      if (!group) {
        group = {
          key,
          chapterTitle: chapter?.title ?? null,
          chapterSummary: chapter?.summary,
          items: [],
        };
        byKey.set(key, group);
        groups.push(group);
      }
      group.items.push({ entry, topicNumber: index + 1 });
    });

    return groups;
  }, [orderedTopics]);

  const alphabeticalTopics = useMemo<OrderedTopicEntry[]>(() => {
    return [...orderedTopics].sort((a, b) =>
      compareNaturalText(a.topic.title, b.topic.title)
    );
  }, [orderedTopics]);

  const effectiveRouteKey = routeKey || subjectId || '';
  const backHref = courseId
    ? `/student/courses/${encodeURIComponent(courseId)}`
    : '/student/syllabus';
  const backLabel = courseId
    ? `← Back to ${courseTitle || 'Course'}`
    : '← Back to Subjects';
  const breadcrumb = courseId
    ? `UK Prep / Student / ${courseTitle || 'Course'} / ${subjectTitle || 'Subject'}`
    : 'UK Prep / Student / Subjects';

  const buildTopicHref = (topicId: string) =>
    courseId
      ? `/student/courses/${encodeURIComponent(courseId)}/subjects/${encodeURIComponent(effectiveRouteKey)}/topics/${encodeURIComponent(topicId)}`
      : `/student/syllabus/${encodeURIComponent(effectiveRouteKey)}/topics/${encodeURIComponent(topicId)}`;

  const renderTopicCard = (entry: OrderedTopicEntry, topicNumber: number) => {
    const { topic, chapter } = entry;
    const showChapterTitle =
      Boolean(chapter?.title) &&
      chapter!.title.trim().toLowerCase() !== topic.title.trim().toLowerCase();
    const materialCount = materialCountByTopic[topic.id] ?? 0;

    return (
      <li key={topic.id}>
        <Link
          to={buildTopicHref(topic.id)}
          className="group flex items-center justify-between gap-4 rounded-xl border border-edge bg-panel p-4 transition hover:border-amber-400 hover:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <div className="min-w-0">
            <div className="text-xs text-ink-muted">
              Topic {topicNumber}
              {showChapterTitle ? ` · ${chapter!.title}` : ''}
              {materialCount > 0
                ? ` · ${materialCount} study item${materialCount === 1 ? '' : 's'}`
                : ''}
            </div>
            <h4 className="mt-1 font-medium text-ink transition-colors group-hover:text-amber-500">
              {topic.title}
            </h4>
            {topic.syllabusNotes && (
              <p className="mt-1 line-clamp-2 text-sm text-ink-muted">
                {topic.syllabusNotes}
              </p>
            )}
          </div>
          <ChevronRight className="h-4 w-4 shrink-0 text-ink-faint transition-colors group-hover:text-amber-500" />
        </Link>
      </li>
    );
  };

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle={subjectTitle || 'Subject Topics'}
      breadcrumb={breadcrumb}
    >
      <div className="mb-4">
        <Link to={backHref} className="text-sm font-medium text-ink-muted hover:text-ink">
          {backLabel}
        </Link>
      </div>
      {loading ? (
        <LoadingState label="Loading all topics for this subject..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => void loadSubjectTopics()} />
      ) : !subjectTitle ? (
        <EmptyState
          title="Subject not found"
          description="This subject may not be published or may no longer be available."
        />
      ) : orderedTopics.length === 0 ? (
        <EmptyState
          title="No published topics yet"
          description="Published topics for this subject will appear here once available."
        />
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-ink">{subjectTitle}</h2>
              <p className="text-sm text-ink-muted">
                {chapterGroups.filter((g) => g.chapterTitle).length > 0
                  ? `${chapterGroups.filter((g) => g.chapterTitle).length} chapters · `
                  : ''}
                {orderedTopics.length} published topic{orderedTopics.length === 1 ? '' : 's'}
              </p>
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

          {sortBy === 'az' ? (
            <ol className="space-y-2">
              {alphabeticalTopics.map((entry, idx) => renderTopicCard(entry, idx + 1))}
            </ol>
          ) : (
            <div className="space-y-5">
              {chapterGroups.map((group) => (
                <section key={group.key} className="space-y-2.5">
                  {group.chapterTitle && (
                    <div className="border-b border-edge pb-2">
                      <h3 className="text-sm font-semibold text-accent-text">
                        {group.chapterTitle}
                      </h3>
                      {group.chapterSummary && (
                        <p className="mt-0.5 text-xs text-ink-muted">{group.chapterSummary}</p>
                      )}
                    </div>
                  )}

                  <ol className="space-y-2">
                    {group.items.map(({ entry, topicNumber }) =>
                      renderTopicCard(entry, topicNumber)
                    )}
                  </ol>
                </section>
              ))}
            </div>
          )}
        </div>
      )}
    </AppShell>
  );
}
