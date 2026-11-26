import {
  Chapter,
  Course,
  Examination,
  Question,
  Subject,
  Topic,
  Unit,
} from '../../types/academic';
import { BatchWriteOperation, clampString, generateSafeId } from '../../services/firestoreService';
import { normalizeQuestionKey } from '../topicContent/types';
import { ExtractedQuestionCandidate } from './types';

export function validateCandidates(params: {
  candidates: ExtractedQuestionCandidate[];
  existingQuestions: Question[];
  topics: Topic[];
  chapters: Chapter[];
  units: Unit[];
  subjects: Subject[];
  courses: Course[];
  examinations: Examination[];
  selectedExaminationId: string;
}): ExtractedQuestionCandidate[] {
  const {
    candidates,
    existingQuestions,
    topics,
    subjects,
    selectedExaminationId,
  } = params;

  const topicById = new Map(topics.map((t) => [t.id, t]));
  const subjectById = new Map(subjects.map((s) => [s.id, s]));

  // Index existing Firestore question stems globally + per topic
  const existingGlobalKeys = new Map<string, Question>();
  const existingTopicKeys = new Map<string, Set<string>>();
  for (const q of existingQuestions) {
    const key = normalizeQuestionKey(q.stem);
    if (!key) continue;
    existingGlobalKeys.set(key, q);
    if (q.topicId) {
      const set = existingTopicKeys.get(q.topicId) ?? new Set<string>();
      set.add(key);
      existingTopicKeys.set(q.topicId, set);
    }
  }

  const batchSeenKeys = new Map<string, number>();

  return candidates.map((candidate, index) => {
    const errors: string[] = [];
    const warnings = candidate.warnings.filter(
      (w) =>
        !w.startsWith('Target topic not auto-matched') &&
        !w.startsWith('No answer key found') &&
        !w.startsWith('Detected ')
    );

    const stem = candidate.stem.trim();
    if (stem.length < 5) {
      errors.push('Question stem must be at least 5 characters.');
    } else if (stem.length > 3000) {
      errors.push('Question stem exceeds 3000 characters.');
    }

    const topic = candidate.topicId ? topicById.get(candidate.topicId) : undefined;
    if (!topic) {
      errors.push('Assign a target Subject and Topic before importing.');
    } else if (!topic.chapterId) {
      errors.push('Selected topic is missing a parent Chapter link.');
    }

    const effectiveSubjectId = candidate.subjectId || topic?.subjectId || '';
    if (!effectiveSubjectId || !subjectById.has(effectiveSubjectId)) {
      errors.push('Assign a valid Subject before importing.');
    }

    if (!selectedExaminationId) {
      errors.push('Select an Examination (e.g. UKPSC or UKSSSC) before importing.');
    }

    if (candidate.questionFormat === 'objective') {
      const cleanOpts = candidate.options.map((o) => o.trim()).filter(Boolean);
      if (cleanOpts.length < 2 || cleanOpts.length > 5) {
        errors.push('Objective MCQ requires 2 to 5 non-empty options (or switch format to Descriptive / Other).');
      }
      if (
        !Number.isInteger(candidate.correctOptionIndex) ||
        candidate.correctOptionIndex < 0 ||
        candidate.correctOptionIndex >= cleanOpts.length
      ) {
        errors.push('Select the valid Correct Option (A–E) before importing this Objective MCQ.');
      }
    }

    if (candidate.questionType === 'pyq') {
      if (!candidate.examName.trim() || !Number.isInteger(candidate.examYear) || candidate.examYear! < 1990 || candidate.examYear! > 2100) {
        errors.push('PYQs require Official Exam Name and valid Exam Year (1990–2100).');
      }
      if (candidate.isPublished && (!candidate.isVerified || !candidate.sourceReference.trim())) {
        errors.push('Publishing a PYQ requires Source Reference and checking "Verified against authentic published exam paper". Otherwise uncheck Publish (save as Draft) or mark as Practice MCQ.');
      }
      if (!candidate.isVerified) {
        warnings.push('PYQ is not yet verified against an authentic exam paper (can only save as Draft until verified).');
      }
    }

    if (
      candidate.detectedCommissionHint &&
      candidate.detectedCommissionHint !== candidate.examCommission
    ) {
      warnings.push(
        `Commission check: text mentions ${candidate.detectedCommissionHint}, currently assigned to ${candidate.examCommission}.`
      );
    }

    const stemKey = normalizeQuestionKey(stem);
    let duplicateType: ExtractedQuestionCandidate['duplicateType'] = 'none';
    let duplicateNote: string | undefined;

    if (stemKey) {
      const topicSet = topic ? existingTopicKeys.get(topic.id) : undefined;
      if (topicSet?.has(stemKey)) {
        duplicateType = 'firestore';
        duplicateNote = 'Duplicate already exists under this topic in Firestore.';
      } else if (existingGlobalKeys.has(stemKey)) {
        const existingMatch = existingGlobalKeys.get(stemKey)!;
        duplicateType = 'firestore';
        duplicateNote = `Similar question already exists in Firestore (${existingMatch.examName || existingMatch.questionType.toUpperCase()}).`;
      } else if (batchSeenKeys.has(stemKey)) {
        duplicateType = 'batch';
        duplicateNote = `Duplicate of Row #${batchSeenKeys.get(stemKey)! + 1} in this upload batch.`;
      } else {
        batchSeenKeys.set(stemKey, index);
      }
    }

    if (duplicateNote) {
      warnings.push(duplicateNote);
    }

    return {
      ...candidate,
      subjectId: effectiveSubjectId,
      errors,
      warnings: Array.from(new Set(warnings)),
      duplicateType,
      duplicateNote,
    };
  });
}

export function buildBulkQuestionWriteOperations(params: {
  candidates: ExtractedQuestionCandidate[];
  adminUid: string;
  topics: Topic[];
  chapters: Chapter[];
  units: Unit[];
  subjects: Subject[];
  courses: Course[];
  selectedExaminationId: string;
  skipDuplicates: boolean;
}): {
  operations: Array<{ rowId: string; op: BatchWriteOperation<Question> }>;
  skippedCount: number;
} {
  const {
    candidates,
    adminUid,
    topics,
    chapters,
    units,
    subjects,
    courses,
    selectedExaminationId,
    skipDuplicates,
  } = params;

  const topicById = new Map(topics.map((t) => [t.id, t]));
  const chapterById = new Map(chapters.map((c) => [c.id, c]));
  const unitById = new Map(units.map((u) => [u.id, u]));
  const subjectById = new Map(subjects.map((s) => [s.id, s]));
  const courseById = new Map(courses.map((c) => [c.id, c]));

  const operations: Array<{ rowId: string; op: BatchWriteOperation<Question> }> = [];
  let skippedCount = 0;

  for (const c of candidates) {
    if (!c.selected || c.errors.length > 0) {
      skippedCount += 1;
      continue;
    }
    if (skipDuplicates && c.duplicateType !== 'none') {
      skippedCount += 1;
      continue;
    }

    const topic = topicById.get(c.topicId);
    if (!topic) {
      skippedCount += 1;
      continue;
    }

    const chapter = chapterById.get(topic.chapterId);
    const unit = unitById.get(topic.unitId || chapter?.unitId || '');
    const resolvedSubjectId = c.subjectId || topic.subjectId || chapter?.subjectId || unit?.subjectId || '';
    const subject = subjectById.get(resolvedSubjectId);
    const course = courseById.get(topic.courseId || chapter?.courseId || subject?.courseId || '');
    const resolvedExamId = selectedExaminationId || subject?.examinationId || course?.examinationId || '';
    if (!resolvedSubjectId || !topic.chapterId || !resolvedExamId) {
      skippedCount += 1;
      continue;
    }

    const isObjective = c.questionFormat === 'objective';
    const cleanOptions = isObjective
      ? c.options.map((o) => clampString(o, 1000)).filter(Boolean).slice(0, 5)
      : [];
    const safeCorrectIdx = isObjective ? Math.min(Math.max(0, c.correctOptionIndex), cleanOptions.length - 1) : -1;

    const id = generateSafeId('q');
    const payload: Omit<Question, 'createdAt' | 'updatedAt'> = {
      id,
      topicId: topic.id,
      chapterId: topic.chapterId,
      subjectId: resolvedSubjectId,
      examinationId: resolvedExamId,
      questionType: c.questionType,
      questionFormat: c.questionFormat,
      examCommission: c.examCommission,
      stem: clampString(c.stem, 3000),
      options: cleanOptions,
      correctOptionIndex: safeCorrectIdx,
      ...(c.explanation.trim() ? { explanation: clampString(c.explanation, 3000) } : {}),
      difficulty: c.difficulty,
      ...(c.examName.trim() ? { examName: clampString(c.examName, 120) } : {}),
      ...(Number.isInteger(c.examYear) ? { examYear: c.examYear } : {}),
      ...(c.paperName.trim() ? { paperName: clampString(c.paperName, 160) } : {}),
      ...(typeof c.marks === 'number' && Number.isFinite(c.marks) && c.marks >= 0
        ? { marks: Math.min(c.marks, 250) }
        : {}),
      ...(Number.isInteger(c.wordLimit) && c.wordLimit! >= 1
        ? { wordLimit: Math.min(c.wordLimit!, 5000) }
        : {}),
      ...(c.questionNumber?.trim() ? { questionNumber: clampString(c.questionNumber, 40) } : {}),
      ...(c.modelAnswer.trim() ? { modelAnswer: clampString(c.modelAnswer, 6000) } : {}),
      ...(c.sourceReference.trim() ? { sourceReference: clampString(c.sourceReference, 300) } : {}),
      ...(c.questionType === 'pyq' ? { isVerified: Boolean(c.isVerified) } : {}),
      isPublished: c.questionType === 'pyq' ? Boolean(c.isVerified && c.isPublished) : Boolean(c.isPublished),
      createdBy: adminUid,
    };

    operations.push({
      rowId: c.rowId,
      op: {
        collectionName: 'questions',
        id,
        payload,
      },
    });
  }

  return { operations, skippedCount };
}
