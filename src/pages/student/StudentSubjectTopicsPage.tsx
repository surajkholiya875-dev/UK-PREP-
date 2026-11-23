import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  findSubjectGroupByParam,
  OrderedTopicEntry,
  resolveOrderedTopicsForSubjectIds,
} from '../../lib/syllabusHierarchy';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Chapter, StudyMaterial, Subject, Topic, Unit } from '../../types/academic';

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
  const { subjectId } = useParams<{ subjectId: string }>();
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subjectTitle, setSubjectTitle] = useState<string | null>(null);
  const [routeKey, setRouteKey] = useState<string>('');
  const [orderedTopics, setOrderedTopics] = useState<OrderedTopicEntry[]>([]);
  const [materialCountByTopic, setMaterialCountByTopic] = useState<Record<string, number>>({});

  const loadSubjectTopics = useCallback(async () => {
    if (!firebaseUser || !subjectId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const [allSubjects, allUnits, allChapters, allTopics, allMaterials] = await Promise.all([
        fetchPublishedCollection<Subject>('subjects'),
        fetchPublishedCollection<Unit>('units'),
        fetchPublishedCollection<Chapter>('chapters'),
        fetchPublishedCollection<Topic>('topics'),
        fetchPublishedCollection<StudyMaterial>('studyMaterials'),
      ]);

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
  }, [firebaseUser?.uid, subjectId]);

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

  const effectiveRouteKey = routeKey || subjectId || '';

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle={subjectTitle || 'Subject Topics'}
      breadcrumb="UK Prep / Student / Subjects"
    >
      <div className="mb-4">
        <Link to="/student/syllabus" className="text-sm font-medium text-ink-muted hover:text-ink">
          ← Back to Subjects
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
          <div>
            <h2 className="text-lg font-semibold text-ink">{subjectTitle}</h2>
            <p className="text-sm text-ink-muted">
              {chapterGroups.filter((g) => g.chapterTitle).length > 0
                ? `${chapterGroups.filter((g) => g.chapterTitle).length} chapters · `
                : ''}
              {orderedTopics.length} published topic{orderedTopics.length === 1 ? '' : 's'}
            </p>
          </div>

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
                  {group.items.map(({ entry: { topic, chapter }, topicNumber }) => {
                    const showChapterTitle =
                      Boolean(chapter?.title) &&
                      chapter!.title.trim().toLowerCase() !== topic.title.trim().toLowerCase();
                    const materialCount = materialCountByTopic[topic.id] ?? 0;

                    return (
                      <li key={topic.id}>
                        <Link
                          to={`/student/syllabus/${encodeURIComponent(effectiveRouteKey)}/topics/${encodeURIComponent(topic.id)}`}
                          className="group flex items-center justify-between gap-4 rounded-xl border border-edge bg-panel p-4 transition hover:border-accent hover:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          <div className="min-w-0">
                            <div className="text-xs text-ink-muted">
                              Topic {topicNumber}
                              {showChapterTitle ? ` · ${chapter!.title}` : ''}
                              {materialCount > 0
                                ? ` · ${materialCount} study item${materialCount === 1 ? '' : 's'}`
                                : ''}
                            </div>
                            <h4 className="mt-1 font-medium text-ink group-hover:text-accent-text transition-colors">
                              {topic.title}
                            </h4>
                            {topic.syllabusNotes && (
                              <p className="mt-1 text-sm text-ink-muted line-clamp-2">
                                {topic.syllabusNotes}
                              </p>
                            )}
                          </div>
                          <ChevronRight className="h-4 w-4 shrink-0 text-ink-faint group-hover:text-accent-text transition-colors" />
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              </section>
            ))}
          </div>
        </div>
      )}
    </AppShell>
  );
}
