import {
  Chapter,
  Course,
  Question,
  QuestionDifficulty,
  StudyMaterial,
  Subject,
  TestPaper,
  Topic,
  Unit,
} from '../../types/academic';
import { normalizeTextKey } from '../syllabusHierarchy';

export interface TopicMcqSpec {
  stem: string;
  options: [string, string, string, string];
  correctOptionIndex: 0 | 1 | 2 | 3;
  explanation: string;
  difficulty: QuestionDifficulty;
}

export interface TopicPyqSpec extends TopicMcqSpec {
  examName: string;
  examYear: number;
}

export interface TopicContentPackage {
  topicTitle: string;
  materialTitle: string;
  estimatedMinutes: number;
  contentMarkdown: string;
  mcqs: TopicMcqSpec[];
  verifiedPyqs?: TopicPyqSpec[];
  assessmentTitle?: string;
  assessmentDurationMinutes?: number;
}

export interface TopicContentSyncItem {
  topic: Topic;
  subjectTitle: string;
  matchedPackage: TopicContentPackage | null;
  existingMaterialCount: number;
  existingMcqCount: number;
  existingPyqCount: number;
  existingTestCount: number;
  needsMaterial: boolean;
  missingMcqs: TopicMcqSpec[];
  missingPyqs: TopicPyqSpec[];
  needsTest: boolean;
}

export interface SubjectContentAuditSummary {
  subjectId: string;
  subjectTitle: string;
  totalPublishedTopics: number;
  topicsWithMaterial: number;
  topicsWith15Mcqs: number;
  topicsWithPyqs: number;
  topicsWithAssessment: number;
  unmatchedTopics: string[];
  items: TopicContentSyncItem[];
}

export function normalizeQuestionKey(stem: string): string {
  return stem
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[’‘']/g, "'")
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

export function buildTopicContentAudit(params: {
  subjects: Subject[];
  courses: Course[];
  units?: Unit[];
  chapters?: Chapter[];
  topics: Topic[];
  materials: StudyMaterial[];
  questions: Question[];
  tests: TestPaper[];
  catalogByNormalizedTitle: Map<string, TopicContentPackage>;
}): {
  subjectSummaries: SubjectContentAuditSummary[];
  totals: {
    publishedTopics: number;
    withMaterial: number;
    with15Mcqs: number;
    withPyqs: number;
    withAssessment: number;
    unmatched: number;
    pendingMaterials: number;
    pendingMcqs: number;
    pendingPyqs: number;
    pendingAssessments: number;
  };
} {
  const {
    subjects,
    units = [],
    chapters = [],
    topics,
    materials,
    questions,
    tests,
    catalogByNormalizedTitle,
  } = params;

  const subjectById = new Map(subjects.map((s) => [s.id, s]));
  const unitById = new Map(units.map((u) => [u.id, u]));
  const chapterById = new Map(chapters.map((c) => [c.id, c]));
  const materialsByTopic = new Map<string, StudyMaterial[]>();
  for (const m of materials) {
    if (!m.topicId) continue;
    const list = materialsByTopic.get(m.topicId) ?? [];
    list.push(m);
    materialsByTopic.set(m.topicId, list);
  }

  const questionsByTopic = new Map<string, Question[]>();
  for (const q of questions) {
    if (!q.topicId) continue;
    const list = questionsByTopic.get(q.topicId) ?? [];
    list.push(q);
    questionsByTopic.set(q.topicId, list);
  }

  const testsByTopic = new Map<string, TestPaper[]>();
  for (const t of tests) {
    if (!t.topicId) continue;
    const list = testsByTopic.get(t.topicId) ?? [];
    list.push(t);
    testsByTopic.set(t.topicId, list);
  }

  const bySubject = new Map<string, SubjectContentAuditSummary>();
  for (const subj of subjects) {
    bySubject.set(subj.id, {
      subjectId: subj.id,
      subjectTitle: subj.title,
      totalPublishedTopics: 0,
      topicsWithMaterial: 0,
      topicsWith15Mcqs: 0,
      topicsWithPyqs: 0,
      topicsWithAssessment: 0,
      unmatchedTopics: [],
      items: [],
    });
  }

  const publishedTopics = topics.filter((t) => t.isPublished);
  let withMaterial = 0;
  let with15Mcqs = 0;
  let withPyqs = 0;
  let withAssessment = 0;
  let unmatched = 0;
  let pendingMaterials = 0;
  let pendingMcqs = 0;
  let pendingPyqs = 0;
  let pendingAssessments = 0;

  for (const topic of publishedTopics) {
    const parentChapter = topic.chapterId ? chapterById.get(topic.chapterId) : undefined;
    const parentUnit = unitById.get(topic.unitId || parentChapter?.unitId || '');
    const effectiveSubjectId =
      topic.subjectId || parentChapter?.subjectId || parentUnit?.subjectId || '';
    const subj = subjectById.get(effectiveSubjectId);
    const subjId = subj?.id ?? effectiveSubjectId;
    const subjTitle = subj?.title ?? 'Unassigned Subject';
    if (!bySubject.has(subjId)) {
      bySubject.set(subjId, {
        subjectId: subjId,
        subjectTitle: subjTitle,
        totalPublishedTopics: 0,
        topicsWithMaterial: 0,
        topicsWith15Mcqs: 0,
        topicsWithPyqs: 0,
        topicsWithAssessment: 0,
        unmatchedTopics: [],
        items: [],
      });
    }
    const summary = bySubject.get(subjId)!;
    summary.totalPublishedTopics += 1;

    const pkg = catalogByNormalizedTitle.get(normalizeTextKey(topic.title)) ?? null;
    const topicMats = (materialsByTopic.get(topic.id) ?? []).filter((m) => m.isPublished);
    const topicQs = (questionsByTopic.get(topic.id) ?? []).filter((q) => q.isPublished);
    const topicMcqs = topicQs.filter((q) => q.questionType === 'mcq');
    const topicPyqs = topicQs.filter((q) => q.questionType === 'pyq');
    const topicTsts = (testsByTopic.get(topic.id) ?? []).filter((t) => t.isPublished);

    const existingStemKeys = new Set(topicQs.map((q) => normalizeQuestionKey(q.stem)));

    const needsMaterial = Boolean(pkg && topicMats.length === 0);
    const missingMcqs = pkg
      ? pkg.mcqs.filter((mcq) => !existingStemKeys.has(normalizeQuestionKey(mcq.stem)))
      : [];
    const missingPyqs = pkg?.verifiedPyqs
      ? pkg.verifiedPyqs.filter((pyq) => !existingStemKeys.has(normalizeQuestionKey(pyq.stem)))
      : [];
    const totalMcqsAvailableAfterSync = topicMcqs.length + missingMcqs.length;
    const needsTest = Boolean(pkg && topicTsts.length === 0 && totalMcqsAvailableAfterSync > 0);

    if (topicMats.length > 0) {
      summary.topicsWithMaterial += 1;
      withMaterial += 1;
    }
    if (topicMcqs.length >= 15) {
      summary.topicsWith15Mcqs += 1;
      with15Mcqs += 1;
    }
    if (topicPyqs.length > 0) {
      summary.topicsWithPyqs += 1;
      withPyqs += 1;
    }
    if (topicTsts.length > 0) {
      summary.topicsWithAssessment += 1;
      withAssessment += 1;
    }
    if (!pkg) {
      summary.unmatchedTopics.push(topic.title);
      unmatched += 1;
    }

    if (needsMaterial) pendingMaterials += 1;
    pendingMcqs += missingMcqs.length;
    pendingPyqs += missingPyqs.length;
    if (needsTest) pendingAssessments += 1;

    summary.items.push({
      topic,
      subjectTitle: subjTitle,
      matchedPackage: pkg,
      existingMaterialCount: topicMats.length,
      existingMcqCount: topicMcqs.length,
      existingPyqCount: topicPyqs.length,
      existingTestCount: topicTsts.length,
      needsMaterial,
      missingMcqs,
      missingPyqs,
      needsTest,
    });
  }

  const subjectSummaries = Array.from(bySubject.values()).filter((s) => s.totalPublishedTopics > 0);

  return {
    subjectSummaries,
    totals: {
      publishedTopics: publishedTopics.length,
      withMaterial,
      with15Mcqs,
      withPyqs,
      withAssessment,
      unmatched,
      pendingMaterials,
      pendingMcqs,
      pendingPyqs,
      pendingAssessments,
    },
  };
}
