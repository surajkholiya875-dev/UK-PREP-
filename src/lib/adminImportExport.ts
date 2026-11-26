import { Timestamp } from 'firebase/firestore';
import {
  AnnouncementCategory,
  CourseLanguage,
  CourseLevel,
  CurrentAffairsScope,
  ExamCategory,
  ExamCommission,
  MaterialType,
  QuestionDifficulty,
  QuestionFormat,
  QuestionType,
  SubjectScope,
  TestType,
} from '../types/academic';

export const EXPORTABLE_COLLECTIONS = [
  'examinations',
  'courses',
  'subjects',
  'units',
  'chapters',
  'topics',
  'studyMaterials',
  'questions',
  'tests',
  'announcements',
  'currentAffairs',
] as const;

export type ExportableCollectionName = (typeof EXPORTABLE_COLLECTIONS)[number];

export type ImportConflictMode = 'skip_existing' | 'upsert_existing';

export interface ImportValidationContext {
  existingIdsByCollection: Record<string, Set<string>>;
  adminUid: string;
}

export interface PreparedImportRecord {
  collectionName: ExportableCollectionName;
  id: string;
  payload: Record<string, unknown> & { id: string };
  errors: string[];
}

const VALID_ID_REGEX = /^[a-zA-Z0-9_-]{1,128}$/;

function asTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function asOptionalTrimmedString(value: unknown, maxLen: number): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed.slice(0, maxLen) : undefined;
}

function asFiniteNumber(value: unknown): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value.trim());
    if (Number.isFinite(parsed)) return parsed;
  }
  return undefined;
}

function asBoolean(value: unknown, fallback: boolean): boolean {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const lower = value.trim().toLowerCase();
    if (lower === 'true') return true;
    if (lower === 'false') return false;
  }
  return fallback;
}

export function coerceFirestoreTimestamp(value: unknown): Timestamp | undefined {
  if (value instanceof Timestamp) return value;
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    const seconds = asFiniteNumber(obj.seconds ?? obj._seconds);
    const nanoseconds = asFiniteNumber(obj.nanoseconds ?? obj._nanoseconds) ?? 0;
    if (seconds !== undefined) {
      return Timestamp.fromMillis(seconds * 1000 + nanoseconds / 1e6);
    }
  }
  if (typeof value === 'string' && value.trim()) {
    const parsed = Date.parse(value.trim());
    if (Number.isFinite(parsed)) {
      return Timestamp.fromMillis(parsed);
    }
  }
  return undefined;
}

function normalizeDifficulty(value: unknown): QuestionDifficulty {
  const key = asTrimmedString(value).toLowerCase();
  if (key === 'foundation' || key === 'easy' || key === 'basic' || key === 'beginner') return 'foundation';
  if (key === 'advanced' || key === 'hard' || key === 'tough') return 'advanced';
  return 'standard';
}

function normalizeQuestionType(value: unknown, record: Record<string, unknown>): QuestionType {
  const key = asTrimmedString(value).toLowerCase();
  if (key === 'pyq' || key === 'previous_year') return 'pyq';
  if (key === 'current_affairs' || key === 'ca') return 'current_affairs';
  if (key === 'mcq' || key === 'practice') return 'mcq';
  if (record.examName || record.examYear) return 'pyq';
  return 'mcq';
}

function normalizeExamCommission(value: unknown): ExamCommission | undefined {
  const key = asTrimmedString(value).toUpperCase().replace(/[\s-]+/g, '_');
  if (!key) return undefined;
  if (key === 'UKPSC' || key === 'UKPSC_PCS' || key === 'PCS') return 'UKPSC_PCS';
  if (key === 'UKSSSC' || key === 'GROUP_C') return 'UKSSSC';
  if (key === 'UPSC' || key === 'IAS') return 'UPSC';
  if (key === 'OTHER') return 'Other';
  return undefined;
}

function normalizeQuestionFormat(value: unknown, options: string[], correctIdx: number): QuestionFormat | undefined {
  const key = asTrimmedString(value).toLowerCase();
  if (key === 'objective' || key === 'mcq') return 'objective';
  if (key === 'descriptive' || key === 'mains' || key === 'subjective') return 'descriptive';
  if (key === 'other') return 'other';
  if (options.length === 0 && correctIdx === -1) return 'descriptive';
  return undefined;
}

function clampSortOrder(value: unknown, fallback = 0): number {
  const num = asFiniteNumber(value);
  if (num === undefined) return fallback;
  return Math.min(10000, Math.max(0, Math.round(num)));
}

function isKnownOrIncomingId(
  id: string,
  collectionName: ExportableCollectionName,
  ctx: ImportValidationContext
): boolean {
  return ctx.existingIdsByCollection[collectionName]?.has(id) ?? false;
}

/**
 * Normalizes and validates an arbitrary imported JSON record against the exact
 * firestore.rules + firebase-blueprint.json schema for its collection.
 * Strips null/undefined/unknown fields so strict `hasOnly()` rules never reject
 * harmless metadata or exported extras.
 */
export function prepareAdminImportRecord(
  collectionName: ExportableCollectionName,
  raw: Record<string, unknown>,
  ctx: ImportValidationContext
): PreparedImportRecord {
  const errors: string[] = [];
  const id = asTrimmedString(raw.id);
  if (!VALID_ID_REGEX.test(id)) {
    errors.push(`Invalid document ID "${String(raw.id ?? '')}" (must match ^[a-zA-Z0-9_-]{1,128}$).`);
  }

  const createdBy = ctx.adminUid;

  switch (collectionName) {
    case 'examinations': {
      const title = asTrimmedString(raw.title).slice(0, 160);
      const code = asTrimmedString(raw.code).slice(0, 40);
      const rawCat = asTrimmedString(raw.category);
      const category: ExamCategory =
        rawCat === 'UKPSC' || rawCat === 'UKSSSC' || rawCat === 'UPSC' || rawCat === 'Other'
          ? rawCat
          : 'Other';
      if (title.length < 2) errors.push('Examination title must be at least 2 characters.');
      if (code.length < 2) errors.push('Examination code must be at least 2 characters.');
      const description = asOptionalTrimmedString(raw.description, 2000);
      const eligibilitySummary = asOptionalTrimmedString(raw.eligibilitySummary, 1000);
      return {
        collectionName,
        id,
        errors,
        payload: {
          id,
          title,
          code,
          category,
          ...(description !== undefined ? { description } : {}),
          ...(eligibilitySummary !== undefined ? { eligibilitySummary } : {}),
          isPublished: asBoolean(raw.isPublished, false),
          sortOrder: clampSortOrder(raw.sortOrder),
          createdBy,
        },
      };
    }

    case 'courses': {
      const examinationId = asTrimmedString(raw.examinationId);
      const title = asTrimmedString(raw.title).slice(0, 180);
      const slug = (asTrimmedString(raw.slug) || id).slice(0, 128);
      const rawLevel = asTrimmedString(raw.level);
      const level: CourseLevel =
        rawLevel === 'Prelims' || rawLevel === 'Mains' || rawLevel === 'Integrated' || rawLevel === 'Foundation'
          ? rawLevel
          : 'Integrated';
      const rawLang = asTrimmedString(raw.language);
      const language: CourseLanguage =
        rawLang === 'English' || rawLang === 'Hindi' || rawLang === 'Bilingual'
          ? rawLang
          : 'Bilingual';
      if (!VALID_ID_REGEX.test(examinationId)) errors.push('Invalid examinationId.');
      else if (!isKnownOrIncomingId(examinationId, 'examinations', ctx)) {
        errors.push(`Parent examination "${examinationId}" does not exist in Firestore or this archive.`);
      }
      if (title.length < 2) errors.push('Course title must be at least 2 characters.');
      if (slug.length < 2) errors.push('Course slug must be at least 2 characters.');
      const summary = asOptionalTrimmedString(raw.summary, 2500);
      return {
        collectionName,
        id,
        errors,
        payload: {
          id,
          examinationId,
          title,
          slug,
          ...(summary !== undefined ? { summary } : {}),
          level,
          language,
          isPublished: asBoolean(raw.isPublished, false),
          sortOrder: clampSortOrder(raw.sortOrder),
          createdBy,
        },
      };
    }

    case 'subjects': {
      const courseId = asTrimmedString(raw.courseId);
      const examinationId = asTrimmedString(raw.examinationId);
      const title = asTrimmedString(raw.title).slice(0, 160);
      const rawScope = asTrimmedString(raw.scope);
      const scope: SubjectScope = rawScope === 'uttarakhand' || rawScope === 'general' ? rawScope : 'general';
      if (!VALID_ID_REGEX.test(courseId)) errors.push('Invalid courseId.');
      else if (!isKnownOrIncomingId(courseId, 'courses', ctx)) {
        errors.push(`Parent course "${courseId}" does not exist in Firestore or this archive.`);
      }
      if (!VALID_ID_REGEX.test(examinationId)) errors.push('Invalid examinationId.');
      if (title.length < 2) errors.push('Subject title must be at least 2 characters.');
      const description = asOptionalTrimmedString(raw.description, 2000);
      return {
        collectionName,
        id,
        errors,
        payload: {
          id,
          courseId,
          examinationId,
          title,
          scope,
          ...(description !== undefined ? { description } : {}),
          sortOrder: clampSortOrder(raw.sortOrder),
          isPublished: asBoolean(raw.isPublished, false),
          createdBy,
        },
      };
    }

    case 'units': {
      const subjectId = asTrimmedString(raw.subjectId);
      const courseId = asTrimmedString(raw.courseId);
      const title = asTrimmedString(raw.title).slice(0, 180);
      if (!VALID_ID_REGEX.test(subjectId)) errors.push('Invalid subjectId.');
      else if (!isKnownOrIncomingId(subjectId, 'subjects', ctx)) {
        errors.push(`Parent subject "${subjectId}" does not exist in Firestore or this archive.`);
      }
      if (!VALID_ID_REGEX.test(courseId)) errors.push('Invalid courseId.');
      if (title.length < 2) errors.push('Unit title must be at least 2 characters.');
      const description = asOptionalTrimmedString(raw.description, 1500);
      return {
        collectionName,
        id,
        errors,
        payload: {
          id,
          subjectId,
          courseId,
          title,
          ...(description !== undefined ? { description } : {}),
          sortOrder: clampSortOrder(raw.sortOrder),
          isPublished: asBoolean(raw.isPublished, false),
          createdBy,
        },
      };
    }

    case 'chapters': {
      const unitId = asTrimmedString(raw.unitId);
      const subjectId = asTrimmedString(raw.subjectId);
      const courseId = asTrimmedString(raw.courseId);
      const title = asTrimmedString(raw.title).slice(0, 180);
      if (!VALID_ID_REGEX.test(unitId)) errors.push('Invalid unitId.');
      else if (!isKnownOrIncomingId(unitId, 'units', ctx)) {
        errors.push(`Parent unit "${unitId}" does not exist in Firestore or this archive.`);
      }
      if (!VALID_ID_REGEX.test(subjectId)) errors.push('Invalid subjectId.');
      if (!VALID_ID_REGEX.test(courseId)) errors.push('Invalid courseId.');
      if (title.length < 2) errors.push('Chapter title must be at least 2 characters.');
      const summary = asOptionalTrimmedString(raw.summary, 2000);
      return {
        collectionName,
        id,
        errors,
        payload: {
          id,
          unitId,
          subjectId,
          courseId,
          title,
          ...(summary !== undefined ? { summary } : {}),
          sortOrder: clampSortOrder(raw.sortOrder),
          isPublished: asBoolean(raw.isPublished, false),
          createdBy,
        },
      };
    }

    case 'topics': {
      const chapterId = asTrimmedString(raw.chapterId);
      const unitId = asTrimmedString(raw.unitId);
      const subjectId = asTrimmedString(raw.subjectId);
      const courseId = asTrimmedString(raw.courseId);
      const title = asTrimmedString(raw.title).slice(0, 180);
      if (!VALID_ID_REGEX.test(chapterId)) errors.push('Invalid chapterId.');
      else if (!isKnownOrIncomingId(chapterId, 'chapters', ctx)) {
        errors.push(`Parent chapter "${chapterId}" does not exist in Firestore or this archive.`);
      }
      if (!VALID_ID_REGEX.test(unitId)) errors.push('Invalid unitId.');
      if (!VALID_ID_REGEX.test(subjectId)) errors.push('Invalid subjectId.');
      if (!VALID_ID_REGEX.test(courseId)) errors.push('Invalid courseId.');
      if (title.length < 2) errors.push('Topic title must be at least 2 characters.');
      const syllabusNotes = asOptionalTrimmedString(raw.syllabusNotes, 2500);
      return {
        collectionName,
        id,
        errors,
        payload: {
          id,
          chapterId,
          unitId,
          subjectId,
          courseId,
          title,
          ...(syllabusNotes !== undefined ? { syllabusNotes } : {}),
          sortOrder: clampSortOrder(raw.sortOrder),
          isPublished: asBoolean(raw.isPublished, false),
          createdBy,
        },
      };
    }

    case 'studyMaterials': {
      const topicId = asTrimmedString(raw.topicId);
      const chapterId = asTrimmedString(raw.chapterId);
      const subjectId = asTrimmedString(raw.subjectId);
      const courseId = asTrimmedString(raw.courseId);
      const title = asTrimmedString(raw.title).slice(0, 200);
      const rawType = asTrimmedString(raw.materialType);
      const materialType: MaterialType =
        rawType === 'notes' ||
        rawType === 'summary' ||
        rawType === 'pyq_analysis' ||
        rawType === 'current_affairs' ||
        rawType === 'reference'
          ? rawType
          : 'notes';
      const estimatedMinutes = Math.min(600, Math.max(1, Math.round(asFiniteNumber(raw.estimatedMinutes) ?? 15)));
      if (!VALID_ID_REGEX.test(topicId)) errors.push('Invalid topicId.');
      else if (!isKnownOrIncomingId(topicId, 'topics', ctx)) {
        errors.push(`Parent topic "${topicId}" does not exist in Firestore or this archive.`);
      }
      if (!VALID_ID_REGEX.test(chapterId)) errors.push('Invalid chapterId.');
      if (!VALID_ID_REGEX.test(subjectId)) errors.push('Invalid subjectId.');
      if (!VALID_ID_REGEX.test(courseId)) errors.push('Invalid courseId.');
      if (title.length < 2) errors.push('Study material title must be at least 2 characters.');
      const contentMarkdown = asOptionalTrimmedString(raw.contentMarkdown, 30000);
      const resourceUrl = asOptionalTrimmedString(raw.resourceUrl, 1000);
      return {
        collectionName,
        id,
        errors,
        payload: {
          id,
          topicId,
          chapterId,
          subjectId,
          courseId,
          title,
          materialType,
          ...(contentMarkdown !== undefined ? { contentMarkdown } : {}),
          ...(resourceUrl !== undefined ? { resourceUrl } : {}),
          estimatedMinutes,
          isPublished: asBoolean(raw.isPublished, false),
          createdBy,
        },
      };
    }

    case 'questions': {
      const topicId = asTrimmedString(raw.topicId);
      const chapterId = asTrimmedString(raw.chapterId);
      const subjectId = asTrimmedString(raw.subjectId);
      const examinationId = asTrimmedString(raw.examinationId);
      const stem = asTrimmedString(raw.stem ?? raw.question).slice(0, 5000);
      const rawOptions = Array.isArray(raw.options)
        ? raw.options.map((o) => (typeof o === 'string' ? o.trim() : String(o ?? '').trim())).filter(Boolean).slice(0, 5)
        : [];
      const rawCorrectIdx = asFiniteNumber(raw.correctOptionIndex);
      const inferredCorrectIdx = rawCorrectIdx !== undefined ? Math.trunc(rawCorrectIdx) : rawOptions.length > 0 ? 0 : -1;
      const questionFormat = normalizeQuestionFormat(raw.questionFormat, rawOptions, inferredCorrectIdx);
      const isNonObjective = questionFormat === 'descriptive' || questionFormat === 'other';
      const options = isNonObjective ? [] : rawOptions;
      const correctOptionIndex = isNonObjective ? -1 : inferredCorrectIdx;

      if (!VALID_ID_REGEX.test(topicId)) errors.push('Missing or invalid topicId.');
      else if (!isKnownOrIncomingId(topicId, 'topics', ctx)) {
        errors.push(`Parent topic "${topicId}" does not exist in Firestore or this archive.`);
      }
      if (!VALID_ID_REGEX.test(chapterId)) errors.push('Missing or invalid chapterId.');
      if (!VALID_ID_REGEX.test(subjectId)) errors.push('Missing or invalid subjectId.');
      if (!VALID_ID_REGEX.test(examinationId)) errors.push('Missing or invalid examinationId.');
      if (stem.length < 5) errors.push('Question stem must be at least 5 characters.');
      if (!isNonObjective) {
        if (options.length < 2 || options.length > 5) {
          errors.push('Objective question requires 2 to 5 options.');
        }
        if (!Number.isInteger(correctOptionIndex) || correctOptionIndex < 0 || correctOptionIndex >= options.length) {
          errors.push(`Invalid correctOptionIndex (${String(raw.correctOptionIndex ?? '')}) for ${options.length} options.`);
        }
      }

      const questionType = normalizeQuestionType(raw.questionType, raw);
      const examCommission = normalizeExamCommission(raw.examCommission);
      const explanation = asOptionalTrimmedString(raw.explanation, 6000);
      const examName = asOptionalTrimmedString(raw.examName, 120);
      const parsedYear = asFiniteNumber(raw.examYear);
      const examYear =
        parsedYear !== undefined && Number.isInteger(parsedYear) && parsedYear >= 1950 && parsedYear <= 2100
          ? parsedYear
          : undefined;
      const paperName = asOptionalTrimmedString(raw.paperName, 160);
      const parsedMarks = asFiniteNumber(raw.marks);
      const marks = parsedMarks !== undefined && parsedMarks >= 0 && parsedMarks <= 500 ? parsedMarks : undefined;
      const parsedWordLimit = asFiniteNumber(raw.wordLimit);
      const wordLimit =
        parsedWordLimit !== undefined && Number.isInteger(parsedWordLimit) && parsedWordLimit >= 1 && parsedWordLimit <= 5000
          ? parsedWordLimit
          : undefined;
      const questionNumber = asOptionalTrimmedString(raw.questionNumber, 40);
      const modelAnswer = asOptionalTrimmedString(raw.modelAnswer, 6000);
      const sourceReference = asOptionalTrimmedString(raw.sourceReference, 500);
      const isVerified = typeof raw.isVerified === 'boolean' ? raw.isVerified : undefined;

      return {
        collectionName,
        id,
        errors,
        payload: {
          id,
          topicId,
          chapterId,
          subjectId,
          examinationId,
          questionType,
          ...(questionFormat ? { questionFormat } : {}),
          ...(examCommission ? { examCommission } : {}),
          stem,
          options,
          correctOptionIndex,
          ...(explanation !== undefined ? { explanation } : {}),
          difficulty: normalizeDifficulty(raw.difficulty),
          ...(examName !== undefined ? { examName } : {}),
          ...(examYear !== undefined ? { examYear } : {}),
          ...(paperName !== undefined ? { paperName } : {}),
          ...(marks !== undefined ? { marks } : {}),
          ...(wordLimit !== undefined ? { wordLimit } : {}),
          ...(questionNumber !== undefined ? { questionNumber } : {}),
          ...(modelAnswer !== undefined ? { modelAnswer } : {}),
          ...(sourceReference !== undefined ? { sourceReference } : {}),
          ...(isVerified !== undefined ? { isVerified } : {}),
          isPublished: asBoolean(raw.isPublished, true),
          createdBy,
        },
      };
    }

    case 'tests': {
      const examinationId = asTrimmedString(raw.examinationId);
      const title = asTrimmedString(raw.title).slice(0, 200);
      const rawType = asTrimmedString(raw.testType);
      const testType: TestType =
        rawType === 'mock' ||
        rawType === 'sectional' ||
        rawType === 'topic' ||
        rawType === 'pyq' ||
        rawType === 'current_affairs'
          ? rawType
          : 'topic';
      const durationMinutes = Math.min(360, Math.max(1, Math.round(asFiniteNumber(raw.durationMinutes) ?? 15)));
      const totalMarks = Math.min(1000, Math.max(1, asFiniteNumber(raw.totalMarks) ?? 10));
      const negativeMarking = Math.min(5, Math.max(0, asFiniteNumber(raw.negativeMarking) ?? 0));
      const questionIds = Array.isArray(raw.questionIds)
        ? raw.questionIds.map((q) => String(q ?? '').trim()).filter(Boolean).slice(0, 200)
        : [];
      const questionCount = Math.min(
        200,
        Math.max(0, Math.round(asFiniteNumber(raw.questionCount) ?? questionIds.length))
      );
      if (!VALID_ID_REGEX.test(examinationId)) errors.push('Invalid examinationId.');
      else if (!isKnownOrIncomingId(examinationId, 'examinations', ctx)) {
        errors.push(`Parent examination "${examinationId}" does not exist in Firestore or this archive.`);
      }
      if (title.length < 2) errors.push('Test title must be at least 2 characters.');
      const courseId = asOptionalTrimmedString(raw.courseId, 128);
      const subjectId = asOptionalTrimmedString(raw.subjectId, 128);
      const topicId = asOptionalTrimmedString(raw.topicId, 128);
      return {
        collectionName,
        id,
        errors,
        payload: {
          id,
          examinationId,
          ...(courseId !== undefined ? { courseId } : {}),
          ...(subjectId !== undefined ? { subjectId } : {}),
          ...(topicId !== undefined ? { topicId } : {}),
          title,
          testType,
          durationMinutes,
          totalMarks,
          negativeMarking,
          questionCount,
          questionIds,
          isPublished: asBoolean(raw.isPublished, false),
          createdBy,
        },
      };
    }

    case 'announcements': {
      const title = asTrimmedString(raw.title).slice(0, 200);
      const body = asTrimmedString(raw.body).slice(0, 5000);
      const rawCat = asTrimmedString(raw.category);
      const category: AnnouncementCategory =
        rawCat === 'exam_notice' || rawCat === 'syllabus' || rawCat === 'platform' || rawCat === 'current_affairs'
          ? rawCat
          : 'exam_notice';
      const publishedAt = coerceFirestoreTimestamp(raw.publishedAt) ?? Timestamp.now();
      const examinationId = asOptionalTrimmedString(raw.examinationId, 128);
      if (title.length < 2) errors.push('Announcement title must be at least 2 characters.');
      if (body.length < 2) errors.push('Announcement body must be at least 2 characters.');
      return {
        collectionName,
        id,
        errors,
        payload: {
          id,
          title,
          body,
          category,
          ...(examinationId !== undefined ? { examinationId } : {}),
          isPinned: asBoolean(raw.isPinned, false),
          isPublished: asBoolean(raw.isPublished, false),
          publishedAt,
          createdBy,
        },
      };
    }

    case 'currentAffairs': {
      const title = asTrimmedString(raw.title).slice(0, 200);
      const summary = asTrimmedString(raw.summary).slice(0, 6000);
      const rawScope = asTrimmedString(raw.scope);
      const scope: CurrentAffairsScope =
        rawScope === 'uttarakhand' || rawScope === 'national' || rawScope === 'international'
          ? rawScope
          : 'uttarakhand';
      const eventDate = (asTrimmedString(raw.eventDate) || new Date().toISOString().slice(0, 10)).slice(0, 20);
      const subjectTag = asOptionalTrimmedString(raw.subjectTag, 120);
      if (title.length < 2) errors.push('Current affairs title must be at least 2 characters.');
      if (summary.length < 2) errors.push('Current affairs summary must be at least 2 characters.');
      if (eventDate.length < 4) errors.push('Invalid eventDate.');
      return {
        collectionName,
        id,
        errors,
        payload: {
          id,
          title,
          summary,
          scope,
          eventDate,
          ...(subjectTag !== undefined ? { subjectTag } : {}),
          isPublished: asBoolean(raw.isPublished, false),
          createdBy,
        },
      };
    }
  }
}
