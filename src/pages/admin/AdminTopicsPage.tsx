import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenCheck, CheckCircle2, ClipboardList, Layers, Pencil, Plus, Sparkles, Trash2, X } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { ADMIN_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { compareNaturalText, normalizeTextKey, safeSortOrder } from '../../lib/syllabusHierarchy';
import { buildSyllabusSyncPlans, SubjectSyllabusPlan } from '../../lib/ukpscSyllabusCatalog';
import {
  buildTopicContentAudit,
  SubjectContentAuditSummary,
  TopicContentPackage,
} from '../../lib/topicContent/types';
import {
  clampString,
  deleteAdminEntity,
  fetchAllAdminCollection,
  generateSafeId,
  upsertAdminEntity,
} from '../../services/firestoreService';
import {
  Chapter,
  Course,
  Examination,
  Question,
  StudyMaterial,
  Subject,
  TestPaper,
  Topic,
  Unit,
} from '../../types/academic';

export function AdminTopicsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [syncingSubjectId, setSyncingSubjectId] = useState<string | null>(null);
  const [syncProgressLabel, setSyncProgressLabel] = useState<string | null>(null);
  const [syncingContentId, setSyncingContentId] = useState<string | null>(null);
  const [contentProgressLabel, setContentProgressLabel] = useState<string | null>(null);
  const [showSyllabusAudit, setShowSyllabusAudit] = useState(true);
  const [showContentAudit, setShowContentAudit] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [examinations, setExaminations] = useState<Examination[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [tests, setTests] = useState<TestPaper[]>([]);
  const [contentCatalog, setContentCatalog] = useState<Map<string, TopicContentPackage>>(new Map());

  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState({
    chapterId: '',
    title: '',
    syllabusNotes: '',
    sortOrder: 1,
    isPublished: true,
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [exams, crs, subjs, unts, chaps, tpcs, mats, qs, tsts, topicContentModule] =
        await Promise.all([
          fetchAllAdminCollection<Examination>('examinations'),
          fetchAllAdminCollection<Course>('courses'),
          fetchAllAdminCollection<Subject>('subjects'),
          fetchAllAdminCollection<Unit>('units'),
          fetchAllAdminCollection<Chapter>('chapters'),
          fetchAllAdminCollection<Topic>('topics'),
          fetchAllAdminCollection<StudyMaterial>('studyMaterials'),
          fetchAllAdminCollection<Question>('questions'),
          fetchAllAdminCollection<TestPaper>('tests'),
          import('../../lib/topicContent'),
        ]);

      const sortedSubjs = [...subjs].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      );
      const sortedUnits = [...unts].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      );
      const sortedChaps = [...chaps].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      );
      const sortedTopics = [...tpcs].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      );

      setExaminations(exams);
      setCourses(crs);
      setSubjects(sortedSubjs);
      setUnits(sortedUnits);
      setChapters(sortedChaps);
      setTopics(sortedTopics);
      setMaterials(mats);
      setQuestions(qs);
      setTests(tsts);
      setContentCatalog(topicContentModule.TOPIC_CONTENT_BY_NORMALIZED_TITLE);

      if (!selectedSubjectId && sortedSubjs.length > 0) {
        const firstSubj = sortedSubjs[0];
        setSelectedSubjectId(firstSubj.id);
        const firstChap = sortedChaps.find((c) => {
          const unit = sortedUnits.find((u) => u.id === c.unitId);
          return c.subjectId === firstSubj.id || unit?.subjectId === firstSubj.id;
        });
        if (firstChap && !form.chapterId) {
          setForm((p) => ({ ...p, chapterId: firstChap.id }));
        }
      } else if (sortedChaps.length > 0 && !form.chapterId) {
        setForm((p) => ({ ...p, chapterId: sortedChaps[0].id }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load topics.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subjectById = useMemo(
    () => new Map(subjects.map((subject) => [subject.id, subject])),
    [subjects]
  );
  const unitById = useMemo(
    () => new Map(units.map((unit) => [unit.id, unit])),
    [units]
  );
  const chapterById = useMemo(
    () => new Map(chapters.map((chapter) => [chapter.id, chapter])),
    [chapters]
  );

  const syncPlans = useMemo(
    () =>
      buildSyllabusSyncPlans({
        subjects,
        units,
        chapters,
        topics,
      }),
    [subjects, units, chapters, topics]
  );

  const actionablePlans = useMemo(
    () =>
      syncPlans.filter(
        (plan) =>
          plan.unitsToCreate.length > 0 ||
          plan.chaptersToCreate.length > 0 ||
          plan.topicsToCreate.length > 0 ||
          plan.topicsToPublish.length > 0
      ),
    [syncPlans]
  );

  const totalPendingStats = useMemo(() => {
    return actionablePlans.reduce(
      (acc, plan) => ({
        chapters: acc.chapters + plan.chaptersToCreate.length,
        topics: acc.topics + plan.topicsToCreate.length,
        publish: acc.publish + plan.topicsToPublish.length,
      }),
      { chapters: 0, topics: 0, publish: 0 }
    );
  }, [actionablePlans]);

  const executeSyllabusSync = async (plansToRun: SubjectSyllabusPlan[]) => {
    if (!firebaseUser || plansToRun.length === 0) return;
    setError(null);
    setNotice(null);
    setSyncingSubjectId(plansToRun.length === 1 ? plansToRun[0].subjectId : 'all');

    let addedUnits = 0;
    let addedChapters = 0;
    let addedTopics = 0;
    let publishedTopics = 0;

    try {
      for (const plan of plansToRun) {
        setSyncProgressLabel(`Populating ${plan.subjectTitle}...`);

        const unitIdByKey = new Map<string, string>();
        for (const existingUnit of units.filter((u) => u.subjectId === plan.subjectId)) {
          unitIdByKey.set(normalizeTextKey(existingUnit.title), existingUnit.id);
          if (!existingUnit.isPublished) {
            await upsertAdminEntity<Unit>(
              'units',
              existingUnit.id,
              {
                ...existingUnit,
                isPublished: true,
              },
              true
            );
          }
        }

        for (const unitDef of plan.unitsToCreate) {
          const unitId = generateSafeId('unit');
          await upsertAdminEntity<Unit>(
            'units',
            unitId,
            {
              id: unitId,
              subjectId: plan.subjectId,
              courseId: plan.courseId,
              title: clampString(unitDef.title, 180),
              description: clampString(unitDef.description, 1500),
              sortOrder: Math.min(Math.max(0, unitDef.sortOrder), 10000),
              isPublished: true,
              createdBy: firebaseUser.uid,
            },
            false
          );
          unitIdByKey.set(normalizeTextKey(unitDef.title), unitId);
          addedUnits += 1;
        }

        const chapterIdByKey = new Map<string, { id: string; unitId: string }>();
        const existingSubjectUnits = new Set(Array.from(unitIdByKey.values()));
        for (const existingChapter of chapters.filter(
          (c) => c.subjectId === plan.subjectId || existingSubjectUnits.has(c.unitId)
        )) {
          chapterIdByKey.set(normalizeTextKey(existingChapter.title), {
            id: existingChapter.id,
            unitId: existingChapter.unitId,
          });
          if (!existingChapter.isPublished) {
            await upsertAdminEntity<Chapter>(
              'chapters',
              existingChapter.id,
              {
                ...existingChapter,
                isPublished: true,
              },
              true
            );
          }
        }

        for (const chapDef of plan.chaptersToCreate) {
          const resolvedUnitId = unitIdByKey.get(normalizeTextKey(chapDef.unitTitle));
          if (!resolvedUnitId) continue;
          const chapterId = generateSafeId('chap');
          await upsertAdminEntity<Chapter>(
            'chapters',
            chapterId,
            {
              id: chapterId,
              unitId: resolvedUnitId,
              subjectId: plan.subjectId,
              courseId: plan.courseId,
              title: clampString(chapDef.title, 180),
              summary: clampString(chapDef.summary, 2000),
              sortOrder: Math.min(Math.max(0, chapDef.sortOrder), 10000),
              isPublished: true,
              createdBy: firebaseUser.uid,
            },
            false
          );
          chapterIdByKey.set(normalizeTextKey(chapDef.title), {
            id: chapterId,
            unitId: resolvedUnitId,
          });
          addedChapters += 1;
        }

        for (const draftTopic of plan.topicsToPublish) {
          await upsertAdminEntity<Topic>(
            'topics',
            draftTopic.id,
            {
              ...draftTopic,
              isPublished: true,
            },
            true
          );
          publishedTopics += 1;
        }

        for (let idx = 0; idx < plan.topicsToCreate.length; idx += 1) {
          const topicDef = plan.topicsToCreate[idx];
          const chapRef = chapterIdByKey.get(normalizeTextKey(topicDef.chapterTitle));
          if (!chapRef) continue;
          if (idx % 5 === 0) {
            setSyncProgressLabel(
              `Populating ${plan.subjectTitle} (${idx + 1}/${plan.topicsToCreate.length} topics)...`
            );
          }
          const topicId = generateSafeId('top');
          await upsertAdminEntity<Topic>(
            'topics',
            topicId,
            {
              id: topicId,
              chapterId: chapRef.id,
              unitId: chapRef.unitId,
              subjectId: plan.subjectId,
              courseId: plan.courseId,
              title: clampString(topicDef.title, 180),
              syllabusNotes: clampString(topicDef.syllabusNotes, 2500),
              sortOrder: Math.min(Math.max(0, topicDef.sortOrder), 10000),
              isPublished: true,
              createdBy: firebaseUser.uid,
            },
            false
          );
          addedTopics += 1;
        }
      }

      setNotice(
        `Syllabus sync complete: added ${addedUnits} unit(s), ${addedChapters} chapter(s), and ${addedTopics} topic(s)` +
          (publishedTopics > 0 ? `, and published ${publishedTopics} existing draft topic(s).` : '.')
      );
      await loadData();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed while populating syllabus. Existing records were preserved; please retry.'
      );
    } finally {
      setSyncingSubjectId(null);
      setSyncProgressLabel(null);
    }
  };

  const contentAudit = useMemo(() => {
    const audit = buildTopicContentAudit({
      subjects,
      courses,
      topics,
      materials,
      questions,
      tests,
      catalogByNormalizedTitle: contentCatalog,
    });
    const sortedSummaries = [...audit.subjectSummaries].sort((a, b) => {
      const aGeo = normalizeTextKey(a.subjectTitle).includes('geog') ? 0 : 1;
      const bGeo = normalizeTextKey(b.subjectTitle).includes('geog') ? 0 : 1;
      if (aGeo !== bGeo) return aGeo - bGeo;
      return 0;
    });
    return { ...audit, subjectSummaries: sortedSummaries };
  }, [subjects, courses, topics, materials, questions, tests, contentCatalog]);

  const actionableContentSummaries = useMemo(
    () =>
      contentAudit.subjectSummaries.filter((summary) =>
        summary.items.some(
          (item) =>
            item.needsMaterial ||
            item.missingMcqs.length > 0 ||
            item.missingPyqs.length > 0 ||
            item.needsTest
        )
      ),
    [contentAudit.subjectSummaries]
  );

  const executeContentSync = async (summariesToRun: SubjectContentAuditSummary[]) => {
    if (!firebaseUser || summariesToRun.length === 0) return;
    setError(null);
    setNotice(null);
    setSyncingContentId(summariesToRun.length === 1 ? summariesToRun[0].subjectId : 'all');

    const validExamIds = new Set(examinations.map((e) => e.id));
    const courseById = new Map(courses.map((c) => [c.id, c]));
    const fallbackExamId = examinations[0]?.id ?? '';
    const fallbackCourseId = courses[0]?.id ?? '';

    if (!fallbackExamId) {
      setError('Create an Examination and Course first so questions and topic assessments can link to a valid examinationId.');
      setSyncingContentId(null);
      return;
    }

    let createdMaterials = 0;
    let createdMcqs = 0;
    let createdPyqs = 0;
    let createdTests = 0;

    try {
      for (const summary of summariesToRun) {
        const subject = subjectById.get(summary.subjectId);
        const pendingItems = summary.items.filter(
          (item) =>
            item.matchedPackage &&
            (item.needsMaterial ||
              item.missingMcqs.length > 0 ||
              item.missingPyqs.length > 0 ||
              item.needsTest)
        );

        for (let idx = 0; idx < pendingItems.length; idx += 1) {
          const item = pendingItems[idx];
          const pkg = item.matchedPackage;
          if (!pkg) continue;

          setContentProgressLabel(
            `${summary.subjectTitle} (${idx + 1}/${pendingItems.length}): ${item.topic.title.slice(0, 42)}...`
          );

          const topic = item.topic;
          const chap = chapterById.get(topic.chapterId);
          const unit = unitById.get(topic.unitId || chap?.unitId || '');
          const resolvedSubjectId =
            topic.subjectId || chap?.subjectId || unit?.subjectId || summary.subjectId;
          const resolvedCourseId =
            topic.courseId || chap?.courseId || unit?.courseId || subject?.courseId || fallbackCourseId;
          const resolvedCourse = courseById.get(resolvedCourseId);
          const candidateExamId =
            subject?.examinationId || resolvedCourse?.examinationId || fallbackExamId;
          const resolvedExaminationId = validExamIds.has(candidateExamId)
            ? candidateExamId
            : fallbackExamId;

          if (item.needsMaterial && resolvedCourseId) {
            const matId = generateSafeId('mat');
            await upsertAdminEntity<StudyMaterial>(
              'studyMaterials',
              matId,
              {
                id: matId,
                topicId: topic.id,
                chapterId: topic.chapterId,
                subjectId: resolvedSubjectId,
                courseId: resolvedCourseId,
                title: clampString(pkg.materialTitle, 200),
                materialType: 'notes',
                contentMarkdown: clampString(pkg.contentMarkdown, 30000),
                estimatedMinutes: Math.min(Math.max(1, pkg.estimatedMinutes || 25), 600),
                isPublished: true,
                createdBy: firebaseUser.uid,
              },
              false
            );
            createdMaterials += 1;
          }

          const createdQuestionIds: string[] = [];

          for (const mcq of item.missingMcqs) {
            const qId = generateSafeId('q');
            await upsertAdminEntity<Question>(
              'questions',
              qId,
              {
                id: qId,
                topicId: topic.id,
                chapterId: topic.chapterId,
                subjectId: resolvedSubjectId,
                examinationId: resolvedExaminationId,
                questionType: 'mcq',
                stem: clampString(mcq.stem, 3000),
                options: mcq.options.map((opt) => clampString(opt, 1000)),
                correctOptionIndex: mcq.correctOptionIndex,
                explanation: clampString(mcq.explanation, 3000),
                difficulty: mcq.difficulty,
                isPublished: true,
                createdBy: firebaseUser.uid,
              },
              false
            );
            createdQuestionIds.push(qId);
            createdMcqs += 1;
          }

          for (const pyq of item.missingPyqs) {
            const qId = generateSafeId('q');
            await upsertAdminEntity<Question>(
              'questions',
              qId,
              {
                id: qId,
                topicId: topic.id,
                chapterId: topic.chapterId,
                subjectId: resolvedSubjectId,
                examinationId: resolvedExaminationId,
                questionType: 'pyq',
                stem: clampString(pyq.stem, 3000),
                options: pyq.options.map((opt) => clampString(opt, 1000)),
                correctOptionIndex: pyq.correctOptionIndex,
                explanation: clampString(pyq.explanation, 3000),
                difficulty: pyq.difficulty,
                examName: clampString(pyq.examName, 120),
                examYear: Math.min(Math.max(1990, pyq.examYear), 2100),
                isPublished: true,
                createdBy: firebaseUser.uid,
              },
              false
            );
            createdQuestionIds.push(qId);
            createdPyqs += 1;
          }

          if (item.needsTest) {
            const existingPublishedQIds = questions
              .filter((q) => q.topicId === topic.id && q.isPublished)
              .map((q) => q.id);
            const allQuestionIds = Array.from(
              new Set([...existingPublishedQIds, ...createdQuestionIds])
            ).slice(0, 200);

            if (allQuestionIds.length > 0) {
              const testId = generateSafeId('tst');
              const testTitle = pkg.assessmentTitle || `Practice Assessment: ${topic.title}`;
              await upsertAdminEntity<TestPaper>(
                'tests',
                testId,
                {
                  id: testId,
                  examinationId: resolvedExaminationId,
                  courseId: resolvedCourseId,
                  subjectId: resolvedSubjectId,
                  topicId: topic.id,
                  title: clampString(testTitle, 200),
                  testType: 'topic',
                  durationMinutes: Math.min(
                    Math.max(5, pkg.assessmentDurationMinutes ?? 15),
                    360
                  ),
                  totalMarks: Math.min(allQuestionIds.length, 1000),
                  negativeMarking: 0.25,
                  questionCount: allQuestionIds.length,
                  questionIds: allQuestionIds,
                  isPublished: true,
                  createdBy: firebaseUser.uid,
                },
                false
              );
              createdTests += 1;
            }
          }
        }
      }

      setNotice(
        `Content sync complete: published ${createdMaterials} study material(s), ${createdMcqs} MCQ(s), ${createdPyqs} PYQ(s), and ${createdTests} topic assessment(s).`
      );
      await loadData();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed while syncing topic content. Existing records were preserved; please retry.'
      );
    } finally {
      setSyncingContentId(null);
      setContentProgressLabel(null);
    }
  };

  const chaptersForSelectedSubject = useMemo(() => {
    const base = selectedSubjectId
      ? chapters.filter((c) => {
          const unit = unitById.get(c.unitId);
          return c.subjectId === selectedSubjectId || unit?.subjectId === selectedSubjectId;
        })
      : chapters;
    return [...base].sort((a, b) => {
      const unitA = unitById.get(a.unitId);
      const unitB = unitById.get(b.unitId);
      return (
        safeSortOrder(unitA?.sortOrder) - safeSortOrder(unitB?.sortOrder) ||
        compareNaturalText(unitA?.title, unitB?.title) ||
        safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) ||
        compareNaturalText(a.title, b.title)
      );
    });
  }, [chapters, selectedSubjectId, unitById]);

  const handleSubjectFormChange = (nextSubjectId: string) => {
    setSelectedSubjectId(nextSubjectId);
    const matchingChapters = chapters.filter((c) => {
      const unit = unitById.get(c.unitId);
      return c.subjectId === nextSubjectId || unit?.subjectId === nextSubjectId;
    });
    setForm((p) => ({
      ...p,
      chapterId: matchingChapters.some((c) => c.id === p.chapterId)
        ? p.chapterId
        : matchingChapters[0]?.id ?? '',
    }));
  };

  const resetForm = () => {
    setEditingId(null);
    const fallbackChap = chaptersForSelectedSubject[0] ?? chapters[0];
    setForm({
      chapterId: fallbackChap?.id ?? '',
      title: '',
      syllabusNotes: '',
      sortOrder: 1,
      isPublished: true,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !form.chapterId) return;
    const chap = chapterById.get(form.chapterId);
    if (!chap) return;
    const parentUnit = unitById.get(chap.unitId);
    const resolvedSubjectId = chap.subjectId || parentUnit?.subjectId || selectedSubjectId;
    const resolvedCourseId = chap.courseId || parentUnit?.courseId || '';

    setSaving(true);
    setError(null);
    setNotice(null);
    const id = editingId ?? generateSafeId('top');
    const isEdit = Boolean(editingId);
    const existingTopic = isEdit ? topics.find((t) => t.id === editingId) : undefined;

    try {
      await upsertAdminEntity<Topic>(
        'topics',
        id,
        {
          id,
          chapterId: chap.id,
          unitId: chap.unitId,
          subjectId: resolvedSubjectId,
          courseId: resolvedCourseId,
          title: clampString(form.title, 180),
          syllabusNotes: clampString(form.syllabusNotes, 2500),
          sortOrder: Math.min(Math.max(0, Number(form.sortOrder) || 0), 10000),
          isPublished: form.isPublished,
          createdBy: existingTopic?.createdBy ?? firebaseUser.uid,
        },
        isEdit
      );

      let cascaded = 0;
      if (
        isEdit &&
        existingTopic &&
        (existingTopic.chapterId !== chap.id ||
          existingTopic.subjectId !== resolvedSubjectId ||
          existingTopic.courseId !== resolvedCourseId)
      ) {
        for (const material of materials.filter((m) => m.topicId === id)) {
          await upsertAdminEntity<StudyMaterial>(
            'studyMaterials',
            material.id,
            {
              ...material,
              chapterId: chap.id,
              subjectId: resolvedSubjectId,
              courseId: resolvedCourseId,
            },
            true
          );
          cascaded += 1;
        }

        for (const question of questions.filter((q) => q.topicId === id)) {
          await upsertAdminEntity<Question>(
            'questions',
            question.id,
            {
              ...question,
              chapterId: chap.id,
              subjectId: resolvedSubjectId,
            },
            true
          );
          cascaded += 1;
        }
      }

      setNotice(
        isEdit
          ? cascaded > 0
            ? `Topic updated and ${cascaded} linked material/question record(s) re-associated.`
            : 'Topic updated.'
          : 'Topic created.'
      );
      setEditingId(null);
      setForm((p) => ({
        ...p,
        title: '',
        syllabusNotes: '',
        sortOrder: (Number(p.sortOrder) || 0) + 1,
      }));
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save topic.');
    } finally {
      setSaving(false);
    }
  };

  const filteredTopics = useMemo(() => {
    const list = subjectFilter
      ? topics.filter((t) => {
          const chap = chapterById.get(t.chapterId);
          const unit = unitById.get(t.unitId || chap?.unitId || '');
          const resolvedSubjectId = t.subjectId || chap?.subjectId || unit?.subjectId || '';
          return resolvedSubjectId === subjectFilter;
        })
      : topics;

    return [...list].sort((a, b) => {
      const chapA = chapterById.get(a.chapterId);
      const chapB = chapterById.get(b.chapterId);
      const unitA = unitById.get(a.unitId || chapA?.unitId || '');
      const unitB = unitById.get(b.unitId || chapB?.unitId || '');
      const subjA = subjectById.get(a.subjectId || chapA?.subjectId || unitA?.subjectId || '');
      const subjB = subjectById.get(b.subjectId || chapB?.subjectId || unitB?.subjectId || '');

      return (
        safeSortOrder(subjA?.sortOrder) - safeSortOrder(subjB?.sortOrder) ||
        compareNaturalText(subjA?.title, subjB?.title) ||
        safeSortOrder(unitA?.sortOrder) - safeSortOrder(unitB?.sortOrder) ||
        safeSortOrder(chapA?.sortOrder) - safeSortOrder(chapB?.sortOrder) ||
        safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) ||
        compareNaturalText(a.title, b.title)
      );
    });
  }, [topics, subjectFilter, chapterById, unitById, subjectById]);

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Topic Management"
      breadcrumb="UK Prep / Admin / Topics"
      isAdminWorkspace
    >
      <div className="space-y-6">
        {notice && <SuccessBanner message={notice} />}
        {error && <ErrorState message={error} onRetry={() => void loadData()} />}

        {!loading && subjects.length > 0 && (
          <div className="rounded-xl border border-accent/40 bg-panel p-5 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-text">
                  <Layers className="w-3.5 h-3.5" />
                  <span>UKPSC &amp; Uttarakhand Syllabus Completeness</span>
                </div>
                <h2 className="mt-1 text-base font-semibold text-ink">
                  {actionablePlans.length > 0
                    ? `Populate Complete Syllabus (${totalPendingStats.chapters} Chapters · ${totalPendingStats.topics} Topics Ready)`
                    : 'All Matched Subjects Have Complete UKPSC Syllabus Coverage'}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-ink-muted">
                  Inspects existing subjects, chapters, and topics in Firestore, preserves all existing valid topics and study materials without duplication, and populates missing exam-relevant chapters and published topics under each subject&apos;s real IDs.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowSyllabusAudit((prev) => !prev)}
                  className="px-3 py-2 text-xs font-medium rounded-lg border border-edge-strong bg-subtle text-ink hover:bg-canvas transition-colors"
                >
                  {showSyllabusAudit ? 'Hide Subject Audit' : `Show Subject Audit (${syncPlans.length})`}
                </button>
                {actionablePlans.length > 0 && (
                  <button
                    type="button"
                    disabled={Boolean(syncingSubjectId)}
                    onClick={() => void executeSyllabusSync(actionablePlans)}
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>
                      {syncingSubjectId === 'all'
                        ? syncProgressLabel || 'Populating...'
                        : 'Populate All Subjects'}
                    </span>
                  </button>
                )}
              </div>
            </div>

            {showSyllabusAudit && (
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {syncPlans.map((plan) => {
                  const hasPending =
                    plan.unitsToCreate.length > 0 ||
                    plan.chaptersToCreate.length > 0 ||
                    plan.topicsToCreate.length > 0 ||
                    plan.topicsToPublish.length > 0;
                  const isBusy =
                    syncingSubjectId === plan.subjectId || syncingSubjectId === 'all';

                  return (
                    <div
                      key={plan.subjectId}
                      className="rounded-lg border border-edge bg-subtle p-3.5 flex flex-col justify-between gap-2.5"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-xs font-semibold text-ink">{plan.subjectTitle}</h3>
                          {!hasPending && plan.matchedBlueprintName && (
                            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                          )}
                        </div>
                        <div className="mt-1 text-[11px] font-mono text-ink-muted">
                          Current: {plan.existingChapterCount} ch · {plan.existingTopicCount} topic
                          {plan.existingTopicCount === 1 ? '' : 's'}
                        </div>
                        {plan.matchedBlueprintName ? (
                          hasPending ? (
                            <div className="mt-1 text-[11px] font-mono text-accent-text">
                              +{plan.chaptersToCreate.length} ch · +{plan.topicsToCreate.length}{' '}
                              topic{plan.topicsToCreate.length === 1 ? '' : 's'}
                              {plan.topicsToPublish.length > 0
                                ? ` · publish ${plan.topicsToPublish.length} draft`
                                : ''}
                            </div>
                          ) : (
                            <div className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-400">
                              Complete ({plan.matchedBlueprintName})
                            </div>
                          )
                        ) : (
                          <div className="mt-1 text-[11px] text-ink-faint">
                            Custom subject (add topics manually below)
                          </div>
                        )}
                      </div>

                      {hasPending && (
                        <button
                          type="button"
                          disabled={Boolean(syncingSubjectId)}
                          onClick={() => void executeSyllabusSync([plan])}
                          className="w-full rounded-md border border-accent/50 bg-panel px-2.5 py-1.5 text-[11px] font-semibold text-accent-text hover:bg-accent hover:text-accent-ink disabled:opacity-60 transition-colors"
                        >
                          {isBusy && syncingSubjectId === plan.subjectId
                            ? syncProgressLabel || 'Populating...'
                            : `Populate ${plan.subjectTitle}`}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {!loading && contentAudit.totals.publishedTopics > 0 && (
          <div className="rounded-xl border border-edge-strong bg-panel p-5 shadow-sm space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-text">
                  <BookOpenCheck className="w-3.5 h-3.5" />
                  <span>Topic Learning Content, MCQs &amp; Practice Assessments</span>
                </div>
                <h2 className="mt-1 text-base font-semibold text-ink">
                  {actionableContentSummaries.length > 0
                    ? `Pending Sync: ${contentAudit.totals.pendingMaterials} Study Notes · ${contentAudit.totals.pendingMcqs} MCQs · ${contentAudit.totals.pendingAssessments} Topic Assessments`
                    : 'All Matched Published Topics Have Notes, 15+ MCQs & Topic Assessments'}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-ink-muted">
                  Audits live Firestore studyMaterials, questions, and topic tests against the curated UKPSC repository ({contentCatalog.size} topics, 15 MCQs/topic, 0 fabricated PYQs). Only missing items are created.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowContentAudit((prev) => !prev)}
                  className="px-3 py-2 text-xs font-medium rounded-lg border border-edge-strong bg-subtle text-ink hover:bg-canvas transition-colors"
                >
                  {showContentAudit
                    ? 'Hide Content Audit'
                    : `Show Content Audit (${contentAudit.subjectSummaries.length})`}
                </button>
                {actionableContentSummaries.length > 0 && (
                  <button
                    type="button"
                    disabled={Boolean(syncingContentId) || Boolean(syncingSubjectId)}
                    onClick={() => void executeContentSync(actionableContentSummaries)}
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors"
                  >
                    <ClipboardList className="h-4 w-4" />
                    <span>
                      {syncingContentId === 'all'
                        ? contentProgressLabel || 'Syncing content...'
                        : 'Populate All Missing Content & Tests'}
                    </span>
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs">
              <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
                <div className="text-ink-muted">Published Topics</div>
                <div className="mt-0.5 font-mono font-semibold text-ink">
                  {contentAudit.totals.publishedTopics}
                </div>
              </div>
              <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
                <div className="text-ink-muted">With Study Notes</div>
                <div className="mt-0.5 font-mono font-semibold text-ink">
                  {contentAudit.totals.withMaterial} / {contentAudit.totals.publishedTopics}
                </div>
              </div>
              <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
                <div className="text-ink-muted">With 15+ MCQs</div>
                <div className="mt-0.5 font-mono font-semibold text-ink">
                  {contentAudit.totals.with15Mcqs} / {contentAudit.totals.publishedTopics}
                </div>
              </div>
              <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
                <div className="text-ink-muted">Verified PYQs</div>
                <div className="mt-0.5 font-mono font-semibold text-ink">
                  {contentAudit.totals.withPyqs} topics
                </div>
              </div>
              <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
                <div className="text-ink-muted">Practice Tests</div>
                <div className="mt-0.5 font-mono font-semibold text-ink">
                  {contentAudit.totals.withAssessment} / {contentAudit.totals.publishedTopics}
                </div>
              </div>
            </div>

            {showContentAudit && (
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {contentAudit.subjectSummaries.map((summary) => {
                  const pendingMats = summary.items.filter((i) => i.needsMaterial).length;
                  const pendingQs = summary.items.reduce(
                    (acc, i) => acc + i.missingMcqs.length + i.missingPyqs.length,
                    0
                  );
                  const pendingTsts = summary.items.filter((i) => i.needsTest).length;
                  const hasPending = pendingMats > 0 || pendingQs > 0 || pendingTsts > 0;
                  const isBusy =
                    syncingContentId === summary.subjectId || syncingContentId === 'all';

                  return (
                    <div
                      key={summary.subjectId}
                      className="rounded-lg border border-edge bg-subtle p-3.5 flex flex-col justify-between gap-2.5"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-xs font-semibold text-ink">{summary.subjectTitle}</h3>
                          {!hasPending && summary.unmatchedTopics.length === 0 && (
                            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                          )}
                        </div>
                        <div className="mt-1 text-[11px] font-mono text-ink-muted">
                          Notes: {summary.topicsWithMaterial}/{summary.totalPublishedTopics} · 15+ MCQs:{' '}
                          {summary.topicsWith15Mcqs}/{summary.totalPublishedTopics} · Tests:{' '}
                          {summary.topicsWithAssessment}/{summary.totalPublishedTopics}
                        </div>
                        {hasPending ? (
                          <div className="mt-1 text-[11px] font-mono text-accent-text">
                            Ready: +{pendingMats} notes · +{pendingQs} Qs · +{pendingTsts} tests
                          </div>
                        ) : (
                          <div className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-400">
                            All matched topics complete
                          </div>
                        )}
                        {summary.unmatchedTopics.length > 0 && (
                          <div className="mt-1 text-[10px] text-ink-faint">
                            {summary.unmatchedTopics.length} custom topic(s) without catalog match
                          </div>
                        )}
                      </div>

                      {hasPending && (
                        <button
                          type="button"
                          disabled={Boolean(syncingContentId) || Boolean(syncingSubjectId)}
                          onClick={() => void executeContentSync([summary])}
                          className="w-full rounded-md border border-accent/50 bg-panel px-2.5 py-1.5 text-[11px] font-semibold text-accent-text hover:bg-accent hover:text-accent-ink disabled:opacity-60 transition-colors"
                        >
                          {isBusy && syncingContentId === summary.subjectId
                            ? contentProgressLabel || 'Syncing...'
                            : `Populate ${summary.subjectTitle} Content`}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-ink">
                {editingId ? 'Edit Topic' : 'Create Topic'}
              </h2>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-1 text-xs text-ink-muted hover:text-ink"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Cancel</span>
                </button>
              )}
            </div>

            {subjects.length === 0 ? (
              <p className="text-xs text-accent-text">Create a Subject first.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="t-subj" className="block text-xs font-medium text-ink-muted mb-1">
                    Parent Subject
                  </label>
                  <select
                    id="t-subj"
                    value={selectedSubjectId}
                    onChange={(e) => handleSubjectFormChange(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">All Subjects</option>
                    {subjects.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {chaptersForSelectedSubject.length === 0 ? (
                  <div className="rounded-lg border border-edge bg-subtle p-3 text-xs text-ink-muted">
                    No chapters exist under this Subject yet.{' '}
                    <Link
                      to="/admin/units-chapters"
                      className="font-semibold text-accent-text hover:underline"
                    >
                      Create a Unit &amp; Chapter first
                    </Link>
                    , or use the Syllabus Completeness sync above.
                  </div>
                ) : (
                  <>
                    <div>
                      <label htmlFor="t-chap" className="block text-xs font-medium text-ink-muted mb-1">
                        Parent Unit &amp; Chapter
                      </label>
                      <select
                        id="t-chap"
                        required
                        value={form.chapterId}
                        onChange={(e) => setForm((p) => ({ ...p, chapterId: e.target.value }))}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      >
                        {chaptersForSelectedSubject.map((c) => {
                          const unit = unitById.get(c.unitId);
                          const subj = subjectById.get(c.subjectId || unit?.subjectId || '');
                          return (
                            <option key={c.id} value={c.id}>
                              {!selectedSubjectId && subj ? `${subj.title} / ` : ''}
                              {unit?.title || 'Unit'} / {c.title}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="t-title" className="block text-xs font-medium text-ink-muted mb-1">
                        Topic Title
                      </label>
                      <input
                        id="t-title"
                        type="text"
                        required
                        minLength={2}
                        maxLength={180}
                        placeholder="e.g., Drainage System & Glaciers of Uttarakhand"
                        value={form.title}
                        onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="t-notes" className="block text-xs font-medium text-ink-muted mb-1">
                        Syllabus Scope Notes
                      </label>
                      <textarea
                        id="t-notes"
                        rows={3}
                        maxLength={2500}
                        value={form.syllabusNotes}
                        onChange={(e) => setForm((p) => ({ ...p, syllabusNotes: e.target.value }))}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 items-end">
                      <div>
                        <label htmlFor="t-order" className="block text-xs font-medium text-ink-muted mb-1">
                          Sort Order
                        </label>
                        <input
                          id="t-order"
                          type="number"
                          min={0}
                          max={10000}
                          value={form.sortOrder}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, sortOrder: Number(e.target.value) }))
                          }
                          className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink font-mono focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                        />
                      </div>
                      <label className="flex items-center gap-2 pb-2 text-xs font-medium text-ink">
                        <input
                          type="checkbox"
                          checked={form.isPublished}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, isPublished: e.target.checked }))
                          }
                          className="accent-accent"
                        />
                        <span>Published</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={saving}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors"
                    >
                      {editingId ? <Pencil className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>{editingId ? 'Update Topic' : 'Add Topic'}</span>
                    </button>
                  </>
                )}
              </form>
            )}
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-panel border border-edge rounded-xl px-4 py-3">
              <div className="text-xs font-semibold text-ink">
                Showing {filteredTopics.length} of {topics.length} Topic{topics.length === 1 ? '' : 's'}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="t-list-filter" className="text-xs font-medium text-ink-muted">
                  Subject:
                </label>
                <select
                  id="t-list-filter"
                  value={subjectFilter}
                  onChange={(e) => setSubjectFilter(e.target.value)}
                  className="px-3 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">All Subjects</option>
                  {subjects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {notice && <SuccessBanner message={notice} />}
            {error && <ErrorState message={error} onRetry={() => void loadData()} />}

            {loading ? (
              <LoadingState label="Loading topics..." />
            ) : filteredTopics.length === 0 ? (
              <EmptyState
                title="No topics created"
                description="Topics sit under chapters inside a Subject and link directly to study materials and questions."
              />
            ) : (
              <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
                {filteredTopics.map((t) => {
                  const chapter = chapterById.get(t.chapterId);
                  const unit = unitById.get(t.unitId || chapter?.unitId || '');
                  const subject = subjectById.get(
                    t.subjectId || chapter?.subjectId || unit?.subjectId || ''
                  );
                  const matCount = materials.filter((m) => m.topicId === t.id && m.isPublished).length;
                  const mcqCount = questions.filter(
                    (q) => q.topicId === t.id && q.isPublished && q.questionType === 'mcq'
                  ).length;
                  const testCount = tests.filter((tst) => tst.topicId === t.id && tst.isPublished).length;

                  return (
                    <div key={t.id} className="p-4 flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="text-xs font-mono text-accent-text">
                          {subject?.title || t.subjectId} / {unit?.title || 'Unit'} /{' '}
                          {chapter?.title || t.chapterId} · #{t.sortOrder} · {matCount} notes ·{' '}
                          {mcqCount} MCQs · {testCount} test{testCount === 1 ? '' : 's'} ·{' '}
                          {t.isPublished ? 'Published' : 'Draft'}
                        </div>
                        <div className="mt-1 text-sm font-semibold text-ink">{t.title}</div>
                        {t.syllabusNotes && (
                          <p className="mt-1 text-xs text-ink-muted line-clamp-2">{t.syllabusNotes}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          aria-label={`Edit ${t.title}`}
                          onClick={() => {
                            const resolvedSubjId =
                              t.subjectId || chapter?.subjectId || unit?.subjectId || '';
                            setEditingId(t.id);
                            setSelectedSubjectId(resolvedSubjId);
                            setForm({
                              chapterId: t.chapterId,
                              title: t.title,
                              syllabusNotes: t.syllabusNotes ?? '',
                              sortOrder: t.sortOrder,
                              isPublished: t.isPublished,
                            });
                            setError(null);
                            setNotice(null);
                          }}
                          className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle transition-colors"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          aria-label={`Delete ${t.title}`}
                          onClick={async () => {
                            await deleteAdminEntity('topics', t.id);
                            setNotice('Topic deleted.');
                            if (editingId === t.id) resetForm();
                            await loadData();
                          }}
                          className="p-2 rounded-lg text-ink-muted hover:text-red-500 hover:bg-red-500/10 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
