import {
  BLUEPRINT_LIMITS,
  Chapter,
  Course,
  Examination,
  Question,
  QuestionDifficulty,
  StudyMaterial,
  Subject,
  TestPaper,
  Topic,
  Unit,
} from '../../types/academic';
import { BatchWriteOperation, clampString, generateSafeId } from '../../services/firestoreService';
import { normalizeTextKey } from '../syllabusHierarchy';
import { normalizeQuestionKey } from './types';

export interface BulkTopicMaterialInput {
  title: string;
  materialType?: StudyMaterial['materialType'];
  contentMarkdown: string;
  resourceUrl?: string;
  estimatedMinutes?: number;
}

export interface BulkTopicMcqInput {
  stem: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
  difficulty?: QuestionDifficulty;
}

export interface BulkTopicPyqInput extends BulkTopicMcqInput {
  examName: string;
  examYear: number;
}

export interface BulkTopicTestInput {
  title?: string;
  durationMinutes?: number;
  negativeMarking?: number;
}

export interface TopicBulkImportEntry {
  topicId?: string;
  topicTitle?: string;
  studyMaterial?: BulkTopicMaterialInput;
  mcqs?: BulkTopicMcqInput[];
  verifiedPyqs?: BulkTopicPyqInput[];
  practiceTest?: BulkTopicTestInput;
}

export interface BulkImportValidationResult {
  validEntries: number;
  materialOps: BatchWriteOperation[];
  questionOps: BatchWriteOperation[];
  testOps: BatchWriteOperation[];
  skippedDuplicates: number;
  errors: string[];
}

const ALLOWED_MATERIAL_TYPES = new Set<StudyMaterial['materialType']>([
  'notes',
  'summary',
  'pyq_analysis',
  'current_affairs',
  'reference',
]);

const ALLOWED_DIFFICULTIES = new Set<QuestionDifficulty>(['foundation', 'standard', 'advanced']);

export function validateAndBuildBulkTopicImport(params: {
  rawJsonText: string;
  adminUid: string;
  topics: Topic[];
  chapters: Chapter[];
  units: Unit[];
  subjects: Subject[];
  courses: Course[];
  examinations: Examination[];
  existingMaterials: StudyMaterial[];
  existingQuestions: Question[];
  existingTests: TestPaper[];
}): BulkImportValidationResult {
  const {
    rawJsonText,
    adminUid,
    topics,
    chapters,
    units,
    subjects,
    courses,
    examinations,
    existingMaterials,
    existingQuestions,
    existingTests,
  } = params;

  const errors: string[] = [];
  let parsed: unknown;
  try {
    parsed = JSON.parse(rawJsonText);
  } catch (err) {
    return {
      validEntries: 0,
      materialOps: [],
      questionOps: [],
      testOps: [],
      skippedDuplicates: 0,
      errors: [err instanceof Error ? `Invalid JSON: ${err.message}` : 'Invalid JSON syntax.'],
    };
  }

  const entries: unknown[] = Array.isArray(parsed)
    ? parsed
    : parsed && typeof parsed === 'object' && Array.isArray((parsed as { topics?: unknown[] }).topics)
      ? (parsed as { topics: unknown[] }).topics
      : parsed && typeof parsed === 'object'
        ? [parsed]
        : [];

  if (entries.length === 0) {
    return {
      validEntries: 0,
      materialOps: [],
      questionOps: [],
      testOps: [],
      skippedDuplicates: 0,
      errors: ['Provide a JSON object or array containing at least one topic package.'],
    };
  }

  const topicById = new Map(topics.map((t) => [t.id, t]));
  const topicByTitle = new Map<string, Topic[]>();
  for (const t of topics) {
    const key = normalizeTextKey(t.title);
    const list = topicByTitle.get(key) ?? [];
    list.push(t);
    topicByTitle.set(key, list);
  }

  const chapterById = new Map(chapters.map((c) => [c.id, c]));
  const unitById = new Map(units.map((u) => [u.id, u]));
  const subjectById = new Map(subjects.map((s) => [s.id, s]));
  const courseById = new Map(courses.map((c) => [c.id, c]));
  const validExamIds = new Set(examinations.map((e) => e.id));
  const fallbackExamId = examinations[0]?.id ?? '';
  const fallbackCourseId = courses[0]?.id ?? '';

  if (!fallbackExamId) {
    errors.push('Create at least one Examination before importing questions or topic assessments.');
  }

  const materialOps: BatchWriteOperation[] = [];
  const questionOps: BatchWriteOperation[] = [];
  const testOps: BatchWriteOperation[] = [];
  let skippedDuplicates = 0;
  let validEntries = 0;

  // Track stems & materials & tests per topic across both Firestore and this batch
  const existingMaterialTopics = new Set(existingMaterials.map((m) => m.topicId));
  const existingTestTopics = new Set(existingTests.map((t) => t.topicId).filter(Boolean) as string[]);
  const stemKeysByTopic = new Map<string, Set<string>>();
  const qIdsByTopic = new Map<string, string[]>();

  for (const q of existingQuestions) {
    if (!q.topicId) continue;
    const stems = stemKeysByTopic.get(q.topicId) ?? new Set<string>();
    stems.add(normalizeQuestionKey(q.stem));
    stemKeysByTopic.set(q.topicId, stems);

    if (q.isPublished) {
      const ids = qIdsByTopic.get(q.topicId) ?? [];
      ids.push(q.id);
      qIdsByTopic.set(q.topicId, ids);
    }
  }

  entries.forEach((rawEntry, entryIndex) => {
    const label = `Entry #${entryIndex + 1}`;
    if (!rawEntry || typeof rawEntry !== 'object' || Array.isArray(rawEntry)) {
      errors.push(`${label}: Must be a JSON object.`);
      return;
    }

    const entry = rawEntry as TopicBulkImportEntry;
    let topic: Topic | undefined;
    if (typeof entry.topicId === 'string' && entry.topicId.trim()) {
      topic = topicById.get(entry.topicId.trim());
      if (!topic) {
        errors.push(`${label}: topicId "${entry.topicId}" was not found in Firestore topics.`);
        return;
      }
    } else if (typeof entry.topicTitle === 'string' && entry.topicTitle.trim()) {
      const matches = topicByTitle.get(normalizeTextKey(entry.topicTitle)) ?? [];
      if (matches.length === 0) {
        errors.push(`${label}: topicTitle "${entry.topicTitle}" was not found in Firestore topics.`);
        return;
      }
      if (matches.length > 1) {
        errors.push(
          `${label}: topicTitle "${entry.topicTitle}" matches ${matches.length} topics; specify exact topicId.`
        );
        return;
      }
      topic = matches[0];
    } else {
      errors.push(`${label}: Missing required "topicId" or exact "topicTitle".`);
      return;
    }

    const chap = chapterById.get(topic.chapterId);
    const unit = unitById.get(topic.unitId || chap?.unitId || '');
    const resolvedSubjectId =
      topic.subjectId || chap?.subjectId || unit?.subjectId || '';
    const subj = subjectById.get(resolvedSubjectId);
    const resolvedCourseId =
      topic.courseId || chap?.courseId || unit?.courseId || subj?.courseId || fallbackCourseId;
    const course = courseById.get(resolvedCourseId);
    const candidateExamId = subj?.examinationId || course?.examinationId || fallbackExamId;
    const resolvedExaminationId = validExamIds.has(candidateExamId) ? candidateExamId : fallbackExamId;

    if (!topic.chapterId || !resolvedSubjectId || !resolvedCourseId) {
      errors.push(`${label} (${topic.title}): Missing parent chapter/subject/course IDs.`);
      return;
    }

    let entryHadContent = false;

    // 1. Study Material
    if (entry.studyMaterial) {
      const mat = entry.studyMaterial;
      if (typeof mat.title !== 'string' || mat.title.trim().length < 2) {
        errors.push(`${label}: studyMaterial.title must be at least 2 characters.`);
      } else if (typeof mat.contentMarkdown !== 'string' || mat.contentMarkdown.trim().length < 20) {
        errors.push(`${label}: studyMaterial.contentMarkdown must be detailed notes (20+ chars).`);
      } else if (existingMaterialTopics.has(topic.id)) {
        skippedDuplicates += 1;
      } else {
        const matType =
          mat.materialType && ALLOWED_MATERIAL_TYPES.has(mat.materialType)
            ? mat.materialType
            : 'notes';
        const matId = generateSafeId('mat');
        materialOps.push({
          collectionName: 'studyMaterials',
          id: matId,
          payload: {
            id: matId,
            topicId: topic.id,
            chapterId: topic.chapterId,
            subjectId: resolvedSubjectId,
            courseId: resolvedCourseId,
            title: clampString(mat.title, 200),
            materialType: matType,
            contentMarkdown: clampString(mat.contentMarkdown, 30000),
            ...(typeof mat.resourceUrl === 'string' && mat.resourceUrl.trim()
              ? { resourceUrl: clampString(mat.resourceUrl, 1000) }
              : {}),
            estimatedMinutes: Math.min(Math.max(1, Number(mat.estimatedMinutes) || 25), 600),
            isPublished: true,
            createdBy: adminUid,
          },
        });
        existingMaterialTopics.add(topic.id);
        entryHadContent = true;
      }
    }

    const topicStems = stemKeysByTopic.get(topic.id) ?? new Set<string>();
    const topicQuestionIds = qIdsByTopic.get(topic.id) ?? [];

    // 2. MCQs
    if (Array.isArray(entry.mcqs)) {
      entry.mcqs.forEach((mcq, qIdx) => {
        if (!mcq || typeof mcq.stem !== 'string' || mcq.stem.trim().length < 5) {
          errors.push(`${label} MCQ #${qIdx + 1}: stem must be at least 5 characters.`);
          return;
        }
        if (
          !Array.isArray(mcq.options) ||
          mcq.options.length < 2 ||
          mcq.options.length > 5 ||
          mcq.options.some((o) => typeof o !== 'string' || o.trim().length === 0)
        ) {
          errors.push(`${label} MCQ #${qIdx + 1}: options must have 2 to 5 non-empty strings.`);
          return;
        }
        if (
          !Number.isInteger(mcq.correctOptionIndex) ||
          mcq.correctOptionIndex < 0 ||
          mcq.correctOptionIndex >= mcq.options.length
        ) {
          errors.push(`${label} MCQ #${qIdx + 1}: invalid correctOptionIndex.`);
          return;
        }
        const stemKey = normalizeQuestionKey(mcq.stem);
        if (topicStems.has(stemKey)) {
          skippedDuplicates += 1;
          return;
        }
        const diff =
          mcq.difficulty && ALLOWED_DIFFICULTIES.has(mcq.difficulty) ? mcq.difficulty : 'standard';
        const qId = generateSafeId('q');
        questionOps.push({
          collectionName: 'questions',
          id: qId,
          payload: {
            id: qId,
            topicId: topic.id,
            chapterId: topic.chapterId,
            subjectId: resolvedSubjectId,
            examinationId: resolvedExaminationId,
            questionType: 'mcq',
            stem: clampString(mcq.stem, 3000),
            options: mcq.options.map((o) => clampString(o, 1000)),
            correctOptionIndex: mcq.correctOptionIndex,
            explanation: clampString(typeof mcq.explanation === 'string' ? mcq.explanation : '', 3000),
            difficulty: diff,
            isPublished: true,
            createdBy: adminUid,
          },
        });
        topicStems.add(stemKey);
        topicQuestionIds.push(qId);
        entryHadContent = true;
      });
    }

    // 3. Verified PYQs (requires non-empty examName and valid examYear 1990..2100)
    if (Array.isArray(entry.verifiedPyqs)) {
      entry.verifiedPyqs.forEach((pyq, pIdx) => {
        if (!pyq || typeof pyq.stem !== 'string' || pyq.stem.trim().length < 5) {
          errors.push(`${label} PYQ #${pIdx + 1}: stem must be at least 5 characters.`);
          return;
        }
        if (
          typeof pyq.examName !== 'string' ||
          pyq.examName.trim().length < 2 ||
          !Number.isInteger(pyq.examYear) ||
          pyq.examYear < 1990 ||
          pyq.examYear > 2100
        ) {
          errors.push(
            `${label} PYQ #${pIdx + 1}: Verified PYQs require a valid examName and examYear (1990-2100).`
          );
          return;
        }
        if (
          !Array.isArray(pyq.options) ||
          pyq.options.length < 2 ||
          pyq.options.length > 5 ||
          pyq.options.some((o) => typeof o !== 'string' || o.trim().length === 0)
        ) {
          errors.push(`${label} PYQ #${pIdx + 1}: options must have 2 to 5 non-empty strings.`);
          return;
        }
        if (
          !Number.isInteger(pyq.correctOptionIndex) ||
          pyq.correctOptionIndex < 0 ||
          pyq.correctOptionIndex >= pyq.options.length
        ) {
          errors.push(`${label} PYQ #${pIdx + 1}: invalid correctOptionIndex.`);
          return;
        }
        const stemKey = normalizeQuestionKey(pyq.stem);
        if (topicStems.has(stemKey)) {
          skippedDuplicates += 1;
          return;
        }
        const diff =
          pyq.difficulty && ALLOWED_DIFFICULTIES.has(pyq.difficulty) ? pyq.difficulty : 'standard';
        const qId = generateSafeId('q');
        questionOps.push({
          collectionName: 'questions',
          id: qId,
          payload: {
            id: qId,
            topicId: topic.id,
            chapterId: topic.chapterId,
            subjectId: resolvedSubjectId,
            examinationId: resolvedExaminationId,
            questionType: 'pyq',
            stem: clampString(pyq.stem, 3000),
            options: pyq.options.map((o) => clampString(o, 1000)),
            correctOptionIndex: pyq.correctOptionIndex,
            explanation: clampString(typeof pyq.explanation === 'string' ? pyq.explanation : '', 3000),
            difficulty: diff,
            examName: clampString(pyq.examName, 120),
            examYear: pyq.examYear,
            isPublished: true,
            createdBy: adminUid,
          },
        });
        topicStems.add(stemKey);
        topicQuestionIds.push(qId);
        entryHadContent = true;
      });
    }

    stemKeysByTopic.set(topic.id, topicStems);
    qIdsByTopic.set(topic.id, topicQuestionIds);

    // 4. Practice Assessment
    if (entry.practiceTest) {
      if (existingTestTopics.has(topic.id)) {
        skippedDuplicates += 1;
      } else {
        const uniqueQIds = Array.from(new Set(topicQuestionIds)).slice(
          0,
          BLUEPRINT_LIMITS.MAX_TEST_QUESTIONS
        );
        if (uniqueQIds.length === 0) {
          errors.push(
            `${label} (${topic.title}): Cannot create practiceTest because no published MCQs/PYQs exist or were provided for this topic.`
          );
        } else {
          const testId = generateSafeId('tst');
          const durationMinutes = Math.min(
            Math.max(5, Number(entry.practiceTest.durationMinutes) || 15),
            360
          );
          const negativeMarking = Math.min(
            Math.max(0, Number(entry.practiceTest.negativeMarking ?? 0.25)),
            5
          );
          testOps.push({
            collectionName: 'tests',
            id: testId,
            payload: {
              id: testId,
              examinationId: resolvedExaminationId,
              courseId: resolvedCourseId,
              subjectId: resolvedSubjectId,
              topicId: topic.id,
              title: clampString(
                entry.practiceTest.title || `Practice Assessment: ${topic.title}`,
                200
              ),
              testType: 'topic',
              durationMinutes,
              totalMarks: Math.min(uniqueQIds.length, 1000),
              negativeMarking,
              questionCount: uniqueQIds.length,
              questionIds: uniqueQIds,
              isPublished: true,
              createdBy: adminUid,
            },
          });
          existingTestTopics.add(topic.id);
          entryHadContent = true;
        }
      }
    }

    if (entryHadContent) {
      validEntries += 1;
    }
  });

  return {
    validEntries,
    materialOps,
    questionOps,
    testOps,
    skippedDuplicates,
    errors,
  };
}
