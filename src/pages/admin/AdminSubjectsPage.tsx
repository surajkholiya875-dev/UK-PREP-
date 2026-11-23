import React, { useEffect, useMemo, useState } from 'react';
import { GitMerge, Pencil, Plus, Trash2 } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { ADMIN_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  buildSubjectConsolidationPlan,
  CANONICAL_SUBJECT_PRESETS,
  safeSortOrder,
} from '../../lib/syllabusHierarchy';
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
  SubjectScope,
  TestPaper,
  Topic,
  Unit,
} from '../../types/academic';

export function AdminSubjectsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [examinations, setExaminations] = useState<Examination[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [tests, setTests] = useState<TestPaper[]>([]);

  const [selectedExaminationId, setSelectedExaminationId] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [publishing, setPublishing] = useState(false);
  const [consolidating, setConsolidating] = useState(false);

  const [form, setForm] = useState({
    courseId: '',
    title: '',
    scope: 'general' as SubjectScope,
    description: '',
    sortOrder: 1,
    isPublished: true,
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [subs, crs, exs, unts, chps, tpcs, mats, qs, tsts] = await Promise.all([
        fetchAllAdminCollection<Subject>('subjects'),
        fetchAllAdminCollection<Course>('courses'),
        fetchAllAdminCollection<Examination>('examinations'),
        fetchAllAdminCollection<Unit>('units'),
        fetchAllAdminCollection<Chapter>('chapters'),
        fetchAllAdminCollection<Topic>('topics'),
        fetchAllAdminCollection<StudyMaterial>('studyMaterials'),
        fetchAllAdminCollection<Question>('questions'),
        fetchAllAdminCollection<TestPaper>('tests'),
      ]);
      setSubjects(subs.sort((a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder)));
      setCourses(crs);
      setExaminations(exs);
      setUnits(unts);
      setChapters(chps);
      setTopics(tpcs);
      setMaterials(mats);
      setQuestions(qs);
      setTests(tsts);
      if (crs.length > 0 && !form.courseId) {
        setForm((p) => ({ ...p, courseId: crs[0].id }));
        setSelectedExaminationId((prev) => prev || crs[0].examinationId);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load subjects.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const consolidationPlans = useMemo(
    () =>
      buildSubjectConsolidationPlan({
        subjects,
        units,
        chapters,
        topics,
        studyMaterials: materials,
        questions,
        tests,
      }),
    [subjects, units, chapters, topics, materials, questions, tests]
  );

  const handleConsolidateHierarchy = async () => {
    if (!firebaseUser || consolidationPlans.length === 0) return;
    setConsolidating(true);
    setError(null);
    setNotice(null);
    let updatedSubjects = 0;
    let movedRecords = 0;
    let removedShells = 0;

    try {
      for (const plan of consolidationPlans) {
        const target = plan.targetSubject;

        if (plan.needsTargetRename) {
          await upsertAdminEntity<Subject>(
            'subjects',
            target.id,
            {
              ...target,
              title: clampString(plan.canonicalTitle, 160),
              scope: plan.canonicalScope,
              sortOrder: Math.min(Math.max(0, plan.canonicalSortOrder), 10000),
            },
            true
          );
          updatedSubjects += 1;
        }

        for (const unit of plan.unitsToReassign) {
          await upsertAdminEntity<Unit>(
            'units',
            unit.id,
            {
              ...unit,
              subjectId: target.id,
              courseId: target.courseId,
            },
            true
          );
          movedRecords += 1;
        }

        for (const chapter of plan.chaptersToReassign) {
          await upsertAdminEntity<Chapter>(
            'chapters',
            chapter.id,
            {
              ...chapter,
              subjectId: target.id,
              courseId: target.courseId,
            },
            true
          );
          movedRecords += 1;
        }

        for (const topic of plan.topicsToReassign) {
          await upsertAdminEntity<Topic>(
            'topics',
            topic.id,
            {
              ...topic,
              subjectId: target.id,
              courseId: target.courseId,
            },
            true
          );
          movedRecords += 1;
        }

        for (const material of plan.materialsToReassign) {
          await upsertAdminEntity<StudyMaterial>(
            'studyMaterials',
            material.id,
            {
              ...material,
              subjectId: target.id,
              courseId: target.courseId,
            },
            true
          );
          movedRecords += 1;
        }

        for (const question of plan.questionsToReassign) {
          await upsertAdminEntity<Question>(
            'questions',
            question.id,
            {
              ...question,
              subjectId: target.id,
            },
            true
          );
          movedRecords += 1;
        }

        for (const test of plan.testsToReassign) {
          await upsertAdminEntity<TestPaper>(
            'tests',
            test.id,
            {
              ...test,
              subjectId: target.id,
            },
            true
          );
          movedRecords += 1;
        }

        for (const source of plan.sourceSubjects) {
          if (source.id === target.id) continue;
          await deleteAdminEntity('subjects', source.id);
          removedShells += 1;
        }
      }

      setNotice(
        `Consolidated syllabus hierarchy: ${updatedSubjects} subject(s) standardized, ${movedRecords} child record(s) re-associated, and ${removedShells} duplicate/split subject shell(s) removed.`
      );
      await loadData();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to consolidate subject hierarchy. Please reload and retry.'
      );
    } finally {
      setConsolidating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !form.courseId) return;
    const parentCourse = courses.find((c) => c.id === form.courseId);
    if (!parentCourse) return;
    setError(null);
    setNotice(null);
    const id = editingId || generateSafeId('subj');

    try {
      await upsertAdminEntity<Subject>(
        'subjects',
        id,
        {
          id,
          courseId: form.courseId,
          examinationId: parentCourse.examinationId,
          title: clampString(form.title, 160),
          scope: form.scope,
          description: clampString(form.description, 2000),
          sortOrder: Math.min(Math.max(0, Number(form.sortOrder) || 0), 10000),
          isPublished: form.isPublished,
          createdBy: firebaseUser.uid,
        },
        Boolean(editingId)
      );
      setNotice(editingId ? 'Subject updated.' : 'Subject created.');
      setEditingId(null);
      setForm((p) => ({ ...p, title: '', description: '' }));
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save subject.');
    }
  };

  const handlePublishAllDrafts = async () => {
    if (!firebaseUser || !selectedExaminationId) return;
    const drafts = subjects.filter(
      (subject) => subject.examinationId === selectedExaminationId && !subject.isPublished
    );
    if (drafts.length === 0) {
      setNotice('There are no draft subjects in this examination.');
      return;
    }
    setPublishing(true);
    setError(null);
    setNotice(null);
    try {
      for (const subject of drafts) {
        await upsertAdminEntity<Subject>(
          'subjects',
          subject.id,
          {
            ...subject,
            isPublished: true,
          },
          true
        );
      }
      setNotice(`Published ${drafts.length} subjects for students.`);
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to publish draft subjects.');
    } finally {
      setPublishing(false);
    }
  };

  const examinationCourses = courses.filter((course) => course.examinationId === selectedExaminationId);
  const visibleSubjects = selectedExaminationId
    ? subjects.filter((subject) => subject.examinationId === selectedExaminationId)
    : subjects;

  const topicCountForSubject = (subjectId: string) =>
    topics.filter((topic) => topic.subjectId === subjectId).length;

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Subject Management"
      breadcrumb="UK Prep / Admin / Subjects"
      isAdminWorkspace
    >
      <div className="space-y-6">
        {!loading && consolidationPlans.length > 0 && (
          <div className="rounded-xl border border-accent/40 bg-panel p-5 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-text">
                  Syllabus Data Structure Audit
                </div>
                <h2 className="mt-1 text-base font-semibold text-ink">
                  Consolidate Split Topics Stored as Subjects
                </h2>
                <p className="mt-1 text-sm text-ink-muted">
                  Records like &ldquo;Geography of Uttarakhand&rdquo; or &ldquo;History of Uttarakhand&rdquo; are currently stored as separate subject entries. Consolidate and re-associate all existing units, chapters, topics, study materials, and questions under top-level subjects without duplicating or losing records.
                </p>
              </div>
              <button
                type="button"
                disabled={consolidating}
                onClick={() => void handleConsolidateHierarchy()}
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-xs font-semibold text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors"
              >
                <GitMerge className="h-4 w-4" />
                <span>
                  {consolidating ? 'Consolidating Hierarchy...' : 'Consolidate & Re-associate'}
                </span>
              </button>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {consolidationPlans.map((plan) => {
                const courseTitle = courses.find((c) => c.id === plan.courseId)?.title || plan.courseId;
                const sourceNames = [
                  ...(plan.needsTargetRename ? [plan.targetSubject.title] : []),
                  ...plan.sourceSubjects.map((s) => s.title),
                ];
                return (
                  <div
                    key={`${plan.courseId}-${plan.canonicalTitle}`}
                    className="rounded-lg border border-edge bg-subtle p-3 text-xs space-y-1"
                  >
                    <div className="font-semibold text-ink">→ {plan.canonicalTitle}</div>
                    <div className="text-ink-faint">{courseTitle}</div>
                    <div className="text-ink-muted">
                      From: {sourceNames.join(', ')}
                    </div>
                    <div className="font-mono text-accent-text">
                      {plan.topicsToReassign.length} topic move(s) ·{' '}
                      {plan.materialsToReassign.length} material move(s) ·{' '}
                      {plan.questionsToReassign.length} question move(s)
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
            <h2 className="text-base font-semibold text-ink mb-4">
              {editingId ? 'Edit Subject' : 'Create Subject'}
            </h2>
            {courses.length === 0 ? (
              <p className="text-xs text-accent-text">
                Create a Course first before adding Subjects.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="subj-examination"
                    className="block text-xs font-medium text-ink-muted mb-1"
                  >
                    Examination Body
                  </label>
                  <select
                    id="subj-examination"
                    required
                    value={selectedExaminationId}
                    onChange={(e) => {
                      const nextExamId = e.target.value;
                      const nextCourse = courses.find(
                        (course) => course.examinationId === nextExamId
                      );
                      setSelectedExaminationId(nextExamId);
                      setForm((p) => ({ ...p, courseId: nextCourse?.id || '' }));
                    }}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink"
                  >
                    <option value="">Choose examination body...</option>
                    {examinations
                      .filter((exam) =>
                        courses.some((course) => course.examinationId === exam.id)
                      )
                      .map((exam) => (
                        <option key={exam.id} value={exam.id}>
                          {exam.title} ({exam.category})
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subj-course"
                    className="block text-xs font-medium text-ink-muted mb-1"
                  >
                    Parent Course
                  </label>
                  <select
                    id="subj-course"
                    required
                    value={form.courseId}
                    onChange={(e) => setForm((p) => ({ ...p, courseId: e.target.value }))}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    {examinationCourses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subj-template"
                    className="block text-xs font-medium text-ink-muted mb-1"
                  >
                    Top-Level Subject Preset (Optional)
                  </label>
                  <select
                    id="subj-template"
                    value=""
                    onChange={(e) => {
                      const preset = CANONICAL_SUBJECT_PRESETS.find(
                        (item) => item.title === e.target.value
                      );
                      if (preset) {
                        setForm((p) => ({
                          ...p,
                          title: preset.title,
                          scope: preset.scope,
                          sortOrder: preset.sortOrder,
                        }));
                      }
                    }}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-subtle text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">Choose top-level subject (Geography, History, Polity...)...</option>
                    {CANONICAL_SUBJECT_PRESETS.map((preset) => (
                      <option key={preset.title} value={preset.title}>
                        {preset.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="subj-scope"
                      className="block text-xs font-medium text-ink-muted mb-1"
                    >
                      Syllabus Scope
                    </label>
                    <select
                      id="subj-scope"
                      value={form.scope}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, scope: e.target.value as SubjectScope }))
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    >
                      <option value="general">General Competitive Subject</option>
                      <option value="uttarakhand">Uttarakhand-Specific Subject</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="subj-order"
                      className="block text-xs font-medium text-ink-muted mb-1"
                    >
                      Sort Order
                    </label>
                    <input
                      id="subj-order"
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
                </div>

                <div>
                  <label
                    htmlFor="subj-title"
                    className="block text-xs font-medium text-ink-muted mb-1"
                  >
                    Subject Title
                  </label>
                  <input
                    id="subj-title"
                    type="text"
                    required
                    minLength={2}
                    maxLength={160}
                    placeholder="e.g., Geography, History, Polity"
                    value={form.title}
                    onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subj-desc"
                    className="block text-xs font-medium text-ink-muted mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="subj-desc"
                    rows={2}
                    maxLength={2000}
                    value={form.description}
                    onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>

                <label className="flex items-center gap-2 text-xs font-medium text-ink">
                  <input
                    type="checkbox"
                    checked={form.isPublished}
                    onChange={(e) => setForm((p) => ({ ...p, isPublished: e.target.checked }))}
                    className="accent-accent"
                  />
                  <span>Published to Students</span>
                </label>

                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{editingId ? 'Update Subject' : 'Create Subject'}</span>
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="px-3 py-2 text-xs font-medium rounded-lg border border-edge-strong bg-subtle text-ink hover:bg-canvas transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-7 space-y-4">
            {notice && <SuccessBanner message={notice} />}
            {!loading && visibleSubjects.some((subject) => !subject.isPublished) && (
              <div className="flex items-center justify-between gap-3 rounded-xl border border-edge bg-subtle p-4">
                <p className="text-sm text-ink-muted">
                  {visibleSubjects.filter((subject) => !subject.isPublished).length} draft subjects
                  are hidden from students.
                </p>
                <button
                  type="button"
                  disabled={publishing}
                  onClick={() => void handlePublishAllDrafts()}
                  className="shrink-0 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-accent-ink disabled:opacity-60"
                >
                  {publishing ? 'Publishing…' : 'Publish all drafts'}
                </button>
              </div>
            )}
            {error && <ErrorState message={error} onRetry={() => void loadData()} />}

            {loading ? (
              <LoadingState label="Loading subjects..." />
            ) : visibleSubjects.length === 0 ? (
              <EmptyState
                title="No subjects created"
                description="No subjects exist for the selected examination body yet. Choose its course and add top-level subjects."
              />
            ) : (
              <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
                {visibleSubjects.map((s) => {
                  const crs = courses.find((c) => c.id === s.courseId);
                  const topicCount = topicCountForSubject(s.id);
                  return (
                    <div key={s.id} className="p-4 flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-mono text-accent-text">
                          {crs?.title || s.courseId} · #{s.sortOrder} ·{' '}
                          {topicCount} topic{topicCount === 1 ? '' : 's'} ·{' '}
                          {s.isPublished ? 'Published' : 'Draft'}
                        </div>
                        <h3 className="mt-1 text-sm font-semibold text-ink">{s.title}</h3>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          aria-label={`Edit ${s.title}`}
                          onClick={() => {
                            setEditingId(s.id);
                            setSelectedExaminationId(s.examinationId);
                            setForm({
                              courseId: s.courseId,
                              title: s.title,
                              scope: s.scope,
                              description: s.description || '',
                              sortOrder: s.sortOrder,
                              isPublished: s.isPublished,
                            });
                          }}
                          className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle transition-colors"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          aria-label={`Delete ${s.title}`}
                          onClick={async () => {
                            await deleteAdminEntity('subjects', s.id);
                            setNotice('Subject deleted.');
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
