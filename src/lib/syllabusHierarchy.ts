import {
  Chapter,
  Question,
  StudyMaterial,
  Subject,
  SubjectScope,
  TestPaper,
  Topic,
  Unit,
} from '../types/academic';

export interface CanonicalSubjectDefinition {
  slug: string;
  title: string;
  scope: SubjectScope;
  sortOrder: number;
  aliases: string[];
}

export const CANONICAL_SUBJECT_DEFINITIONS: CanonicalSubjectDefinition[] = [
  {
    slug: 'geography',
    title: 'Geography',
    scope: 'general',
    sortOrder: 1,
    aliases: [
      'geography',
      'geography of uttarakhand',
      'uttarakhand geography',
      'indian geography',
      'indian and world geography',
      'physical geography',
    ],
  },
  {
    slug: 'history',
    title: 'History',
    scope: 'general',
    sortOrder: 2,
    aliases: [
      'history',
      'history of uttarakhand',
      'uttarakhand history',
      'ancient indian history',
      'medieval indian history',
      'modern indian history',
      'ancient history',
      'medieval history',
      'modern history',
      'indian history',
      'indian national movement',
    ],
  },
  {
    slug: 'polity',
    title: 'Polity',
    scope: 'general',
    sortOrder: 3,
    aliases: [
      'polity',
      'indian polity',
      'indian constitution and polity',
      'polity and administration of uttarakhand',
      'uttarakhand polity',
      'indian polity and governance',
      'governance and public policy',
      'governance',
      'international relations',
    ],
  },
  {
    slug: 'economy',
    title: 'Economy',
    scope: 'general',
    sortOrder: 4,
    aliases: [
      'economy',
      'indian economy',
      'economy of uttarakhand',
      'uttarakhand economy',
      'economics',
    ],
  },
  {
    slug: 'environment',
    title: 'Environment',
    scope: 'general',
    sortOrder: 5,
    aliases: [
      'environment',
      'environment and ecology',
      'environment and ecology of uttarakhand',
      'uttarakhand environment',
      'ecology and environment',
      'disaster management',
    ],
  },
  {
    slug: 'art-and-culture',
    title: 'Art & Culture',
    scope: 'general',
    sortOrder: 6,
    aliases: [
      'art & culture',
      'art and culture',
      'art and culture of uttarakhand',
      'art and culture of india',
      'indian art and culture',
      'uttarakhand art and culture',
    ],
  },
  {
    slug: 'science-and-technology',
    title: 'Science & Technology',
    scope: 'general',
    sortOrder: 7,
    aliases: [
      'science & technology',
      'science and technology',
      'general science',
      'general science and technology',
    ],
  },
  {
    slug: 'uttarakhand-gk',
    title: 'Uttarakhand General Knowledge',
    scope: 'uttarakhand',
    sortOrder: 8,
    aliases: [
      'uttarakhand general knowledge',
      'uttarakhand gk',
      'district-wise general knowledge (13 districts)',
      'district-wise general knowledge',
      'uttarakhand state profile',
    ],
  },
  {
    slug: 'current-affairs',
    title: 'Current Affairs',
    scope: 'general',
    sortOrder: 9,
    aliases: [
      'current affairs',
      'uttarakhand current affairs',
      'national current affairs',
    ],
  },
  {
    slug: 'general-hindi',
    title: 'General Hindi',
    scope: 'general',
    sortOrder: 10,
    aliases: ['general hindi', 'hindi'],
  },
  {
    slug: 'general-english',
    title: 'General English',
    scope: 'general',
    sortOrder: 11,
    aliases: ['general english', 'english'],
  },
  {
    slug: 'csat',
    title: 'CSAT',
    scope: 'general',
    sortOrder: 12,
    aliases: ['csat', 'csat and aptitude', 'aptitude'],
  },
  {
    slug: 'society-and-social-justice',
    title: 'Society & Social Justice',
    scope: 'general',
    sortOrder: 13,
    aliases: ['society & social justice', 'indian society', 'social justice'],
  },
  {
    slug: 'ethics-and-essay',
    title: 'Ethics & Essay',
    scope: 'general',
    sortOrder: 14,
    aliases: [
      'ethics & essay',
      'ethics, integrity and aptitude',
      'essay and mains answer writing',
      'ethics',
    ],
  },
];

export const CANONICAL_SUBJECT_PRESETS = CANONICAL_SUBJECT_DEFINITIONS.map((def) => ({
  title: def.title,
  scope: def.scope,
  sortOrder: def.sortOrder,
}));

export const EXCLUDED_RAW_SUBJECT_NAMES = new Set([
  'world history',
  'world geography',
  'logical reasoning',
  'data interpretation',
  'quantitative aptitude',
  'computer awareness',
  'internal security',
  'agriculture and rural development',
]);

export function normalizeTextKey(value: string | undefined | null): string {
  return (value ?? '').trim().toLowerCase().replace(/\s+/g, ' ');
}

export function safeSortOrder(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : Number.MAX_SAFE_INTEGER;
}

export function compareNaturalText(a?: string, b?: string): number {
  return (a ?? '').localeCompare(b ?? '', undefined, { numeric: true, sensitivity: 'base' });
}

export function resolveCanonicalSubjectDefinition(
  title: string
): CanonicalSubjectDefinition | null {
  const key = normalizeTextKey(title);
  if (!key) return null;
  for (const def of CANONICAL_SUBJECT_DEFINITIONS) {
    if (normalizeTextKey(def.title) === key || def.aliases.includes(key)) {
      return def;
    }
  }
  return null;
}

export interface CanonicalSubjectGroup {
  routeKey: string;
  slug: string;
  title: string;
  sortOrder: number;
  primarySubject: Subject;
  memberSubjects: Subject[];
}

export function buildCanonicalSubjectGroups(subjects: Subject[]): CanonicalSubjectGroup[] {
  const visibleRawSubjects = subjects.filter(
    (subject) => !EXCLUDED_RAW_SUBJECT_NAMES.has(normalizeTextKey(subject.title))
  );

  const buckets = new Map<
    string,
    {
      slug: string;
      title: string;
      sortOrder: number;
      members: Subject[];
      isCanonicalGroup: boolean;
    }
  >();

  for (const subject of visibleRawSubjects) {
    const def = resolveCanonicalSubjectDefinition(subject.title);
    if (def) {
      const existing = buckets.get(def.slug);
      if (existing) {
        existing.members.push(subject);
      } else {
        buckets.set(def.slug, {
          slug: def.slug,
          title: def.title,
          sortOrder: def.sortOrder,
          members: [subject],
          isCanonicalGroup: true,
        });
      }
    } else {
      const customSlug =
        normalizeTextKey(subject.title).replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') ||
        subject.id;
      const bucketKey = `custom:${normalizeTextKey(subject.title) || subject.id}`;
      const existing = buckets.get(bucketKey);
      if (existing) {
        existing.members.push(subject);
      } else {
        buckets.set(bucketKey, {
          slug: customSlug,
          title: subject.title.trim(),
          sortOrder: safeSortOrder(subject.sortOrder),
          members: [subject],
          isCanonicalGroup: false,
        });
      }
    }
  }

  return Array.from(buckets.values())
    .map((bucket) => {
      const sortedMembers = [...bucket.members].sort((a, b) => {
        const aExact = normalizeTextKey(a.title) === normalizeTextKey(bucket.title) ? 0 : 1;
        const bExact = normalizeTextKey(b.title) === normalizeTextKey(bucket.title) ? 0 : 1;
        if (aExact !== bExact) return aExact - bExact;
        return safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title);
      });
      const primarySubject = sortedMembers[0];
      const useDirectId =
        sortedMembers.length === 1 &&
        normalizeTextKey(primarySubject.title) === normalizeTextKey(bucket.title);
      return {
        routeKey: useDirectId ? primarySubject.id : bucket.slug,
        slug: bucket.slug,
        title: bucket.title,
        sortOrder: bucket.sortOrder,
        primarySubject,
        memberSubjects: sortedMembers,
      };
    })
    .sort(
      (a, b) =>
        safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) ||
        compareNaturalText(a.title, b.title)
    );
}

export function findSubjectGroupByParam(
  subjects: Subject[],
  subjectParam: string
): CanonicalSubjectGroup | null {
  const groups = buildCanonicalSubjectGroups(subjects);
  const decodedParam = subjectParam.trim();
  const normalizedParam = normalizeTextKey(decodedParam);

  return (
    groups.find(
      (group) =>
        group.routeKey === decodedParam ||
        group.slug === decodedParam ||
        normalizeTextKey(group.slug) === normalizedParam ||
        group.memberSubjects.some((member) => member.id === decodedParam)
    ) ?? null
  );
}

export interface OrderedTopicEntry {
  topic: Topic;
  unit?: Unit;
  chapter?: Chapter;
}

export function resolveOrderedTopicsForSubjectIds(params: {
  subjectIds: Set<string>;
  allUnits: Unit[];
  allChapters: Chapter[];
  allTopics: Topic[];
}): OrderedTopicEntry[] {
  const { subjectIds, allUnits, allChapters, allTopics } = params;
  if (subjectIds.size === 0) return [];

  const unitById = new Map(allUnits.map((unit) => [unit.id, unit]));
  const chapterById = new Map(allChapters.map((chapter) => [chapter.id, chapter]));

  const matchingUnitIds = new Set(
    allUnits.filter((unit) => subjectIds.has(unit.subjectId)).map((unit) => unit.id)
  );

  const matchingChapterIds = new Set(
    allChapters
      .filter(
        (chapter) =>
          subjectIds.has(chapter.subjectId) ||
          (Boolean(chapter.unitId) && matchingUnitIds.has(chapter.unitId))
      )
      .map((chapter) => chapter.id)
  );

  const seenTopicIds = new Set<string>();
  const matchingTopics = allTopics.filter((topic) => {
    if (seenTopicIds.has(topic.id)) return false;

    const directMatch = subjectIds.has(topic.subjectId);
    const unitMatch = Boolean(topic.unitId) && matchingUnitIds.has(topic.unitId);
    const chapterMatch = Boolean(topic.chapterId) && matchingChapterIds.has(topic.chapterId);
    const parentChapter = topic.chapterId ? chapterById.get(topic.chapterId) : undefined;
    const parentChapterMatch =
      Boolean(parentChapter) &&
      (subjectIds.has(parentChapter!.subjectId) ||
        (Boolean(parentChapter!.unitId) && matchingUnitIds.has(parentChapter!.unitId)));

    if (!directMatch && !unitMatch && !chapterMatch && !parentChapterMatch) {
      return false;
    }
    seenTopicIds.add(topic.id);
    return true;
  });

  return matchingTopics
    .map((topic) => {
      const chapter = topic.chapterId ? chapterById.get(topic.chapterId) : undefined;
      const resolvedUnitId = topic.unitId || chapter?.unitId || '';
      const unit = resolvedUnitId ? unitById.get(resolvedUnitId) : undefined;
      return { topic, unit, chapter };
    })
    .sort((a, b) => {
      const unitOrderDiff = safeSortOrder(a.unit?.sortOrder) - safeSortOrder(b.unit?.sortOrder);
      if (unitOrderDiff !== 0) return unitOrderDiff;

      const unitTitleDiff = compareNaturalText(a.unit?.title, b.unit?.title);
      if (unitTitleDiff !== 0) return unitTitleDiff;

      const chapterOrderDiff =
        safeSortOrder(a.chapter?.sortOrder) - safeSortOrder(b.chapter?.sortOrder);
      if (chapterOrderDiff !== 0) return chapterOrderDiff;

      const chapterTitleDiff = compareNaturalText(a.chapter?.title, b.chapter?.title);
      if (chapterTitleDiff !== 0) return chapterTitleDiff;

      const topicOrderDiff = safeSortOrder(a.topic.sortOrder) - safeSortOrder(b.topic.sortOrder);
      if (topicOrderDiff !== 0) return topicOrderDiff;

      return compareNaturalText(a.topic.title, b.topic.title);
    });
}

export interface ConsolidationGroupPlan {
  courseId: string;
  canonicalTitle: string;
  canonicalScope: SubjectScope;
  canonicalSortOrder: number;
  targetSubject: Subject;
  needsTargetRename: boolean;
  sourceSubjects: Subject[];
  unitsToReassign: Unit[];
  chaptersToReassign: Chapter[];
  topicsToReassign: Topic[];
  materialsToReassign: StudyMaterial[];
  questionsToReassign: Question[];
  testsToReassign: TestPaper[];
}

export function buildSubjectConsolidationPlan(params: {
  subjects: Subject[];
  units: Unit[];
  chapters: Chapter[];
  topics: Topic[];
  studyMaterials: StudyMaterial[];
  questions: Question[];
  tests: TestPaper[];
}): ConsolidationGroupPlan[] {
  const { subjects, units, chapters, topics, studyMaterials, questions, tests } = params;

  const grouped = new Map<
    string,
    { courseId: string; def: CanonicalSubjectDefinition; subjects: Subject[] }
  >();

  for (const subject of subjects) {
    if (EXCLUDED_RAW_SUBJECT_NAMES.has(normalizeTextKey(subject.title))) continue;
    const def = resolveCanonicalSubjectDefinition(subject.title);
    if (!def) continue;
    const key = `${subject.courseId}::${def.slug}`;
    const existing = grouped.get(key);
    if (existing) {
      existing.subjects.push(subject);
    } else {
      grouped.set(key, { courseId: subject.courseId, def, subjects: [subject] });
    }
  }

  const plans: ConsolidationGroupPlan[] = [];

  for (const { courseId, def, subjects: groupSubjects } of grouped.values()) {
    const sorted = [...groupSubjects].sort((a, b) => {
      const aExact = normalizeTextKey(a.title) === normalizeTextKey(def.title) ? 0 : 1;
      const bExact = normalizeTextKey(b.title) === normalizeTextKey(def.title) ? 0 : 1;
      if (aExact !== bExact) return aExact - bExact;
      const aTopics = topics.filter((t) => t.subjectId === a.id).length;
      const bTopics = topics.filter((t) => t.subjectId === b.id).length;
      if (aTopics !== bTopics) return bTopics - aTopics;
      return safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title);
    });

    const targetSubject = sorted[0];
    const sourceSubjects = sorted.slice(1);
    const needsTargetRename =
      normalizeTextKey(targetSubject.title) !== normalizeTextKey(def.title);

    if (sourceSubjects.length === 0 && !needsTargetRename) {
      continue;
    }

    const sourceIds = new Set(sourceSubjects.map((s) => s.id));

    const unitsToReassign = units.filter((u) => sourceIds.has(u.subjectId));
    const unitIdsInSources = new Set(unitsToReassign.map((u) => u.id));

    const chaptersToReassign = chapters.filter(
      (c) => sourceIds.has(c.subjectId) || (Boolean(c.unitId) && unitIdsInSources.has(c.unitId))
    );
    const chapterIdsInSources = new Set(chaptersToReassign.map((c) => c.id));

    const topicsToReassign = topics.filter(
      (t) =>
        sourceIds.has(t.subjectId) ||
        (Boolean(t.unitId) && unitIdsInSources.has(t.unitId)) ||
        (Boolean(t.chapterId) && chapterIdsInSources.has(t.chapterId))
    );
    const topicIdsInSources = new Set(topicsToReassign.map((t) => t.id));

    const materialsToReassign = studyMaterials.filter(
      (m) => sourceIds.has(m.subjectId) || topicIdsInSources.has(m.topicId)
    );
    const questionsToReassign = questions.filter(
      (q) => sourceIds.has(q.subjectId) || topicIdsInSources.has(q.topicId)
    );
    const testsToReassign = tests.filter(
      (test) => Boolean(test.subjectId) && sourceIds.has(test.subjectId!)
    );

    plans.push({
      courseId,
      canonicalTitle: def.title,
      canonicalScope: def.scope,
      canonicalSortOrder: def.sortOrder,
      targetSubject,
      needsTargetRename,
      sourceSubjects,
      unitsToReassign,
      chaptersToReassign,
      topicsToReassign,
      materialsToReassign,
      questionsToReassign,
      testsToReassign,
    });
  }

  return plans.sort(
    (a, b) => a.canonicalSortOrder - b.canonicalSortOrder || compareNaturalText(a.canonicalTitle, b.canonicalTitle)
  );
}
