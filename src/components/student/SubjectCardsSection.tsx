import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownWideNarrow, ArrowUpNarrowWide, ChevronRight } from 'lucide-react';
import { EmptyState } from '../ui/StateBlocks';
import {
  buildCanonicalSubjectGroups,
  CanonicalSubjectGroup,
  compareNaturalText,
  resolveOrderedTopicsForSubjectIds,
} from '../../lib/syllabusHierarchy';
import { Chapter, Subject, Topic, Unit } from '../../types/academic';

export type SubjectSortOption = 'recommended' | 'az' | 'topic_count_desc' | 'topic_count_asc';

interface SubjectCardItem {
  group: CanonicalSubjectGroup;
  topicCount: number;
  recommendedIndex: number;
}

interface SubjectCardsSectionProps {
  subjects: Subject[];
  units: Unit[];
  chapters: Chapter[];
  topics: Topic[];
  courseId?: string;
  heading?: string;
  emptyTitle?: string;
  emptyDescription?: string;
}

export function SubjectCardsSection({
  subjects,
  units,
  chapters,
  topics,
  courseId,
  heading = 'Subjects',
  emptyTitle = 'No published subjects available',
  emptyDescription = 'Published subjects will appear here once they are published in Admin.',
}: SubjectCardsSectionProps) {
  const [sortBy, setSortBy] = useState<SubjectSortOption>('recommended');

  const subjectCards = useMemo<SubjectCardItem[]>(() => {
    const allCanonicalGroups = buildCanonicalSubjectGroups(subjects);
    const hasCourseScopedSubjects =
      Boolean(courseId) && subjects.some((subject) => subject.courseId === courseId);

    const visibleGroups =
      courseId && hasCourseScopedSubjects
        ? allCanonicalGroups.filter((group) =>
            group.memberSubjects.some((subject) => subject.courseId === courseId)
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
  }, [courseId, subjects, units, chapters, topics]);

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
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-baseline gap-2.5">
          <h3 className="text-lg font-bold text-ink">{heading}</h3>
          {subjectCards.length > 0 && (
            <span className="text-xs text-ink-muted">({subjectCards.length})</span>
          )}
        </div>

        {subjectCards.length > 0 && (
          <div
            className="flex flex-wrap items-center gap-1.5"
            role="group"
            aria-label="Sort subjects"
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
              className={`inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                isTopicCountSort
                  ? 'border-amber-400 bg-amber-400 font-semibold text-slate-950'
                  : 'border-edge bg-panel text-ink-muted hover:border-amber-400/60 hover:text-ink'
              }`}
            >
              <span>Topic count</span>
              {sortBy === 'topic_count_asc' ? (
                <ArrowUpNarrowWide className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ArrowDownWideNarrow className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
          </div>
        )}
      </div>

      {sortedSubjectCards.length === 0 ? (
        <EmptyState title={emptyTitle} description={emptyDescription} />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {sortedSubjectCards.map(({ group, topicCount }) => {
            const categoryLabel =
              group.primarySubject.scope === 'uttarakhand'
                ? 'Uttarakhand Focus'
                : group.slug === 'csat'
                  ? 'Aptitude & CSAT'
                  : 'Core Syllabus';
            const targetHref = courseId
              ? `/student/courses/${encodeURIComponent(courseId)}/subjects/${encodeURIComponent(group.routeKey)}`
              : `/student/syllabus/${encodeURIComponent(group.routeKey)}`;

            return (
              <Link
                key={group.routeKey}
                to={targetHref}
                className="group rounded-xl border border-edge bg-panel p-5 shadow-sm transition hover:border-amber-400 hover:bg-subtle focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <div className="font-mono text-xs text-accent-text">{categoryLabel}</div>
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
  );
}
