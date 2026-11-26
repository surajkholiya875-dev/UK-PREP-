import { BatchWriteOperation } from '../services/firestoreService';
import { Chapter, Course, Subject, Topic, Unit } from '../types/academic';
import { normalizeTextKey } from './syllabusHierarchy';

export interface UnassignedHierarchyPlan {
  targetSubject: Subject | null;
  targetSubjectMissingReason: string | null;
  unitsToUpdate: Unit[];
  chaptersToUpdate: Chapter[];
  topicsToUpdate: Topic[];
  skippedConflictUnits: Unit[];
  skippedConflictChapters: Chapter[];
  skippedConflictTopics: Topic[];
  currentTargetCounts: {
    units: number;
    chapters: number;
    topics: number;
  };
  totalUnassignedRaw: {
    units: number;
    chapters: number;
    topics: number;
  };
}

export function findUttarakhandSpecialSubject(subjects: Subject[]): Subject | null {
  const exact = subjects.find(
    (subject) => normalizeTextKey(subject.title) === 'uttarakhand special'
  );
  if (exact) return exact;

  const prefixMatches = subjects.filter((subject) =>
    normalizeTextKey(subject.title).startsWith('uttarakhand special')
  );
  return prefixMatches.length === 1 ? prefixMatches[0] : null;
}

export function buildUnassignedHierarchyPlan(params: {
  subjects: Subject[];
  units: Unit[];
  chapters: Chapter[];
  topics: Topic[];
}): UnassignedHierarchyPlan {
  const { subjects, units, chapters, topics } = params;
  const targetSubject = findUttarakhandSpecialSubject(subjects);
  const validSubjectIds = new Set(subjects.map((subject) => subject.id));

  const isUnassignedSubjectId = (subjectId: string | undefined | null): boolean => {
    const trimmed = (subjectId ?? '').trim();
    if (!trimmed) return true;
    if (normalizeTextKey(trimmed) === 'unassigned') return true;
    return !validSubjectIds.has(trimmed);
  };

  const totalUnassignedRaw = {
    units: units.filter((u) => isUnassignedSubjectId(u.subjectId)).length,
    chapters: chapters.filter((c) => isUnassignedSubjectId(c.subjectId)).length,
    topics: topics.filter((t) => isUnassignedSubjectId(t.subjectId)).length,
  };

  if (!targetSubject) {
    return {
      targetSubject: null,
      targetSubjectMissingReason:
        'Existing subject "Uttarakhand Special" was not found in Subjects. Please verify its title without creating duplicates.',
      unitsToUpdate: [],
      chaptersToUpdate: [],
      topicsToUpdate: [],
      skippedConflictUnits: [],
      skippedConflictChapters: [],
      skippedConflictTopics: [],
      currentTargetCounts: { units: 0, chapters: 0, topics: 0 },
      totalUnassignedRaw,
    };
  }

  const unitById = new Map(units.map((unit) => [unit.id, unit]));
  const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]));

  const currentTargetCounts = {
    units: units.filter((u) => u.subjectId === targetSubject.id).length,
    chapters: chapters.filter((c) => c.subjectId === targetSubject.id).length,
    topics: topics.filter((t) => t.subjectId === targetSubject.id).length,
  };

  // 1. Units with empty or invalid subjectId (skip if any child chapter/topic already belongs to another valid subject)
  const unitsToUpdate: Unit[] = [];
  const skippedConflictUnits: Unit[] = [];

  for (const unit of units) {
    if (!isUnassignedSubjectId(unit.subjectId)) continue;

    const childChapters = chapters.filter((c) => c.unitId === unit.id);
    const childChapterIds = new Set(childChapters.map((c) => c.id));
    const hasChildChapterInOtherSubject = childChapters.some(
      (c) => !isUnassignedSubjectId(c.subjectId) && c.subjectId !== targetSubject.id
    );
    const hasChildTopicInOtherSubject = topics.some(
      (t) =>
        (t.unitId === unit.id || childChapterIds.has(t.chapterId)) &&
        !isUnassignedSubjectId(t.subjectId) &&
        t.subjectId !== targetSubject.id
    );

    if (hasChildChapterInOtherSubject || hasChildTopicInOtherSubject) {
      skippedConflictUnits.push(unit);
      continue;
    }

    unitsToUpdate.push(unit);
  }

  const updatingUnitIds = new Set(unitsToUpdate.map((unit) => unit.id));

  const getEffectiveUnitSubjectId = (unitId: string | undefined): string => {
    if (!unitId) return '';
    if (updatingUnitIds.has(unitId)) return targetSubject.id;
    const unit = unitById.get(unitId);
    if (!unit) return '';
    return isUnassignedSubjectId(unit.subjectId) ? '' : unit.subjectId;
  };

  // 2. Chapters with empty or invalid subjectId (only when parent unit does not belong to another subject
  //    and no child topic already belongs to another valid subject)
  const chaptersToUpdate: Chapter[] = [];
  const skippedConflictChapters: Chapter[] = [];

  for (const chapter of chapters) {
    if (!isUnassignedSubjectId(chapter.subjectId)) continue;
    const parentUnitSubjectId = getEffectiveUnitSubjectId(chapter.unitId);
    const hasChildTopicInOtherSubject = topics.some(
      (t) =>
        t.chapterId === chapter.id &&
        !isUnassignedSubjectId(t.subjectId) &&
        t.subjectId !== targetSubject.id
    );

    if ((parentUnitSubjectId && parentUnitSubjectId !== targetSubject.id) || hasChildTopicInOtherSubject) {
      skippedConflictChapters.push(chapter);
      continue;
    }
    chaptersToUpdate.push(chapter);
  }

  const updatingChapterIds = new Set(chaptersToUpdate.map((chapter) => chapter.id));

  const getEffectiveChapterSubjectId = (chapterId: string | undefined): string => {
    if (!chapterId) return '';
    if (updatingChapterIds.has(chapterId)) return targetSubject.id;
    const chapter = chapterById.get(chapterId);
    if (!chapter) return '';
    return isUnassignedSubjectId(chapter.subjectId) ? '' : chapter.subjectId;
  };

  // 3. Topics with empty or invalid subjectId (consistent with parent unit/chapter)
  const topicsToUpdate: Topic[] = [];
  const skippedConflictTopics: Topic[] = [];

  for (const topic of topics) {
    if (!isUnassignedSubjectId(topic.subjectId)) continue;
    const parentChapter = topic.chapterId ? chapterById.get(topic.chapterId) : undefined;
    const effectiveChapterSubjId = getEffectiveChapterSubjectId(topic.chapterId);
    const effectiveUnitSubjId = getEffectiveUnitSubjectId(topic.unitId || parentChapter?.unitId);

    const hasOtherChapterSubject =
      Boolean(effectiveChapterSubjId) && effectiveChapterSubjId !== targetSubject.id;
    const hasOtherUnitSubject =
      Boolean(effectiveUnitSubjId) && effectiveUnitSubjId !== targetSubject.id;

    if (hasOtherChapterSubject || hasOtherUnitSubject) {
      skippedConflictTopics.push(topic);
      continue;
    }

    topicsToUpdate.push(topic);
  }

  return {
    targetSubject,
    targetSubjectMissingReason: null,
    unitsToUpdate,
    chaptersToUpdate,
    topicsToUpdate,
    skippedConflictUnits,
    skippedConflictChapters,
    skippedConflictTopics,
    currentTargetCounts,
    totalUnassignedRaw,
  };
}

export function buildUnassignedAssignmentOperations(params: {
  plan: UnassignedHierarchyPlan;
  courses?: Course[];
  chapters?: Chapter[];
}): BatchWriteOperation[] {
  const { plan, courses = [], chapters = [] } = params;
  const target = plan.targetSubject;
  if (!target) return [];

  const validCourseIds = new Set(courses.map((course) => course.id));
  const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]));
  const needsCourseRepair = (existingCourseId: string | undefined): boolean => {
    const trimmed = (existingCourseId ?? '').trim();
    if (!trimmed) return true;
    return validCourseIds.size > 0 && !validCourseIds.has(trimmed);
  };

  const operations: BatchWriteOperation[] = [];

  for (const unit of plan.unitsToUpdate) {
    operations.push({
      collectionName: 'units',
      id: unit.id,
      isEdit: true,
      payload: {
        id: unit.id,
        subjectId: target.id,
        ...(needsCourseRepair(unit.courseId) ? { courseId: target.courseId } : {}),
      },
    });
  }

  for (const chapter of plan.chaptersToUpdate) {
    operations.push({
      collectionName: 'chapters',
      id: chapter.id,
      isEdit: true,
      payload: {
        id: chapter.id,
        subjectId: target.id,
        ...(needsCourseRepair(chapter.courseId) ? { courseId: target.courseId } : {}),
      },
    });
  }

  for (const topic of plan.topicsToUpdate) {
    const existingUnitId = (topic.unitId ?? '').trim();
    const fallbackUnitId = topic.chapterId ? chapterById.get(topic.chapterId)?.unitId : '';
    operations.push({
      collectionName: 'topics',
      id: topic.id,
      isEdit: true,
      payload: {
        id: topic.id,
        subjectId: target.id,
        ...(needsCourseRepair(topic.courseId) ? { courseId: target.courseId } : {}),
        ...(!existingUnitId && fallbackUnitId ? { unitId: fallbackUnitId } : {}),
      },
    });
  }

  return operations;
}
