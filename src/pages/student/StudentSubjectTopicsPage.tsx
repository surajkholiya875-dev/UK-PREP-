import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Chapter, Subject, Topic, Unit } from '../../types/academic';

function safeSortOrder(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : Number.MAX_SAFE_INTEGER;
}

function compareText(a?: string, b?: string): number {
  return (a ?? '').localeCompare(b ?? '', undefined, { numeric: true, sensitivity: 'base' });
}

interface OrderedTopicItem {
  topic: Topic;
  unit?: Unit;
  chapter?: Chapter;
}

export function StudentSubjectTopicsPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subject, setSubject] = useState<Subject | null>(null);
  const [orderedTopics, setOrderedTopics] = useState<OrderedTopicItem[]>([]);

  const loadSubjectTopics = useCallback(async () => {
    if (!firebaseUser || !subjectId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const [allSubjects, allUnits, allChapters, allTopics] = await Promise.all([
        fetchPublishedCollection<Subject>('subjects'),
        fetchPublishedCollection<Unit>('units'),
        fetchPublishedCollection<Chapter>('chapters'),
        fetchPublishedCollection<Topic>('topics'),
      ]);

      const foundSubject = allSubjects.find((item) => item.id === subjectId) ?? null;
      setSubject(foundSubject);

      if (!foundSubject) {
        setOrderedTopics([]);
        return;
      }

      const unitById = new Map(allUnits.map((unit) => [unit.id, unit]));
      const chapterById = new Map(allChapters.map((chapter) => [chapter.id, chapter]));

      const subjectUnitIds = new Set(
        allUnits.filter((unit) => unit.subjectId === subjectId).map((unit) => unit.id)
      );

      const subjectChapterIds = new Set(
        allChapters
          .filter(
            (chapter) =>
              chapter.subjectId === subjectId ||
              (Boolean(chapter.unitId) && subjectUnitIds.has(chapter.unitId))
          )
          .map((chapter) => chapter.id)
      );

      const subjectTopics = allTopics.filter((topic) => {
        if (topic.subjectId === subjectId) return true;
        if (topic.unitId && subjectUnitIds.has(topic.unitId)) return true;
        if (topic.chapterId && subjectChapterIds.has(topic.chapterId)) return true;
        const parentChapter = topic.chapterId ? chapterById.get(topic.chapterId) : undefined;
        if (parentChapter) {
          if (parentChapter.subjectId === subjectId) return true;
          if (parentChapter.unitId && subjectUnitIds.has(parentChapter.unitId)) return true;
        }
        return false;
      });

      const resolved: OrderedTopicItem[] = subjectTopics
        .map((topic) => {
          const chapter = topic.chapterId ? chapterById.get(topic.chapterId) : undefined;
          const resolvedUnitId = topic.unitId || chapter?.unitId || '';
          const unit = resolvedUnitId ? unitById.get(resolvedUnitId) : undefined;
          return { topic, unit, chapter };
        })
        .sort((a, b) => {
          const unitOrderDiff =
            safeSortOrder(a.unit?.sortOrder) - safeSortOrder(b.unit?.sortOrder);
          if (unitOrderDiff !== 0) return unitOrderDiff;

          const unitTitleDiff = compareText(a.unit?.title, b.unit?.title);
          if (unitTitleDiff !== 0) return unitTitleDiff;

          const chapterOrderDiff =
            safeSortOrder(a.chapter?.sortOrder) - safeSortOrder(b.chapter?.sortOrder);
          if (chapterOrderDiff !== 0) return chapterOrderDiff;

          const chapterTitleDiff = compareText(a.chapter?.title, b.chapter?.title);
          if (chapterTitleDiff !== 0) return chapterTitleDiff;

          const topicOrderDiff =
            safeSortOrder(a.topic.sortOrder) - safeSortOrder(b.topic.sortOrder);
          if (topicOrderDiff !== 0) return topicOrderDiff;

          return compareText(a.topic.title, b.topic.title);
        });

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

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle={subject?.title || 'Subject Topics'}
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
      ) : !subject ? (
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
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-ink">{subject.title}</h2>
          <p className="text-sm text-ink-muted">
            {orderedTopics.length} published topic{orderedTopics.length === 1 ? '' : 's'}
          </p>
          <ol className="space-y-2">
            {orderedTopics.map(({ topic, unit, chapter }, index) => (
              <li key={topic.id} className="rounded-xl border border-edge bg-panel p-4">
                <div className="text-xs text-ink-muted">
                  Topic {index + 1}
                  {unit?.title ? ` · ${unit.title}` : ''}
                  {chapter?.title ? ` · ${chapter.title}` : ''}
                </div>
                <h3 className="mt-1 font-medium text-ink">{topic.title}</h3>
                {topic.syllabusNotes && (
                  <p className="mt-1 text-sm text-ink-muted">{topic.syllabusNotes}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </AppShell>
  );
}
