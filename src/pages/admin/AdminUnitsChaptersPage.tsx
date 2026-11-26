import React, { useEffect, useMemo, useState } from 'react';
import { Pencil, Plus, Trash2, X } from 'lucide-react';
import { UnassignedSubjectRepairCard } from '../../components/admin/UnassignedSubjectRepairCard';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { ADMIN_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { compareNaturalText, safeSortOrder } from '../../lib/syllabusHierarchy';
import {
  clampString,
  deleteAdminEntity,
  fetchAllAdminCollection,
  generateSafeId,
  upsertAdminEntity,
} from '../../services/firestoreService';
import { Chapter, Course, Question, StudyMaterial, Subject, Topic, Unit } from '../../types/academic';

export function AdminUnitsChaptersPage() {
  const { firebaseUser } = useAuth();
  const [tab, setTab] = useState<'units' | 'chapters'>('units');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

  const [subjectFilter, setSubjectFilter] = useState('');
  const [editingUnitId, setEditingUnitId] = useState<string | null>(null);
  const [editingChapterId, setEditingChapterId] = useState<string | null>(null);

  const [unitForm, setUnitForm] = useState({
    subjectId: '',
    title: '',
    description: '',
    sortOrder: 1,
    isPublished: true,
  });

  const [chapterForm, setChapterForm] = useState({
    unitId: '',
    title: '',
    summary: '',
    sortOrder: 1,
    isPublished: true,
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [subjs, crs, unts, chaps, tpcs, mats, qs] = await Promise.all([
        fetchAllAdminCollection<Subject>('subjects'),
        fetchAllAdminCollection<Course>('courses'),
        fetchAllAdminCollection<Unit>('units'),
        fetchAllAdminCollection<Chapter>('chapters'),
        fetchAllAdminCollection<Topic>('topics'),
        fetchAllAdminCollection<StudyMaterial>('studyMaterials'),
        fetchAllAdminCollection<Question>('questions'),
      ]);
      const sortedSubjs = [...subjs].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      );
      const sortedUnits = [...unts].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      );
      const sortedChapters = [...chaps].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      );
      setSubjects(sortedSubjs);
      setCourses(crs);
      setUnits(sortedUnits);
      setChapters(sortedChapters);
      setTopics(tpcs);
      setMaterials(mats);
      setQuestions(qs);

      if (sortedSubjs.length > 0 && !unitForm.subjectId) {
        setUnitForm((p) => ({ ...p, subjectId: sortedSubjs[0].id }));
      }
      if (sortedUnits.length > 0 && !chapterForm.unitId) {
        setChapterForm((p) => ({ ...p, unitId: sortedUnits[0].id }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load units and chapters.');
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

  const resetUnitForm = (defaultSubjectId?: string) => {
    setEditingUnitId(null);
    setUnitForm({
      subjectId: defaultSubjectId ?? subjects[0]?.id ?? '',
      title: '',
      description: '',
      sortOrder: 1,
      isPublished: true,
    });
  };

  const resetChapterForm = (defaultUnitId?: string) => {
    setEditingChapterId(null);
    setChapterForm({
      unitId: defaultUnitId ?? units[0]?.id ?? '',
      title: '',
      summary: '',
      sortOrder: 1,
      isPublished: true,
    });
  };

  const handleUnitSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !unitForm.subjectId) return;
    const subj = subjects.find((s) => s.id === unitForm.subjectId);
    if (!subj) return;

    setSaving(true);
    setError(null);
    setNotice(null);
    const id = editingUnitId ?? generateSafeId('unit');
    const isEdit = Boolean(editingUnitId);
    const existingUnit = isEdit ? units.find((u) => u.id === editingUnitId) : undefined;

    try {
      await upsertAdminEntity<Unit>(
        'units',
        id,
        {
          id,
          subjectId: subj.id,
          courseId: subj.courseId,
          title: clampString(unitForm.title, 180),
          description: clampString(unitForm.description, 1500),
          sortOrder: Math.min(Math.max(0, Number(unitForm.sortOrder) || 0), 10000),
          isPublished: unitForm.isPublished,
          createdBy: existingUnit?.createdBy ?? firebaseUser.uid,
        },
        isEdit
      );

      let cascaded = 0;
      if (
        isEdit &&
        existingUnit &&
        (existingUnit.subjectId !== subj.id || existingUnit.courseId !== subj.courseId)
      ) {
        const childChapters = chapters.filter((c) => c.unitId === id);
        const childChapterIds = new Set(childChapters.map((c) => c.id));
        for (const chap of childChapters) {
          await upsertAdminEntity<Chapter>(
            'chapters',
            chap.id,
            {
              ...chap,
              subjectId: subj.id,
              courseId: subj.courseId,
            },
            true
          );
          cascaded += 1;
        }

        const childTopics = topics.filter(
          (t) => t.unitId === id || childChapterIds.has(t.chapterId)
        );
        const childTopicIds = new Set(childTopics.map((t) => t.id));
        for (const topic of childTopics) {
          await upsertAdminEntity<Topic>(
            'topics',
            topic.id,
            {
              ...topic,
              subjectId: subj.id,
              courseId: subj.courseId,
            },
            true
          );
          cascaded += 1;
        }

        for (const material of materials.filter((m) => childTopicIds.has(m.topicId))) {
          await upsertAdminEntity<StudyMaterial>(
            'studyMaterials',
            material.id,
            {
              ...material,
              subjectId: subj.id,
              courseId: subj.courseId,
            },
            true
          );
          cascaded += 1;
        }

        for (const question of questions.filter((q) => childTopicIds.has(q.topicId))) {
          await upsertAdminEntity<Question>(
            'questions',
            question.id,
            {
              ...question,
              subjectId: subj.id,
            },
            true
          );
          cascaded += 1;
        }
      }

      setNotice(
        isEdit
          ? cascaded > 0
            ? `Unit updated and ${cascaded} linked child record(s) re-associated to ${subj.title}.`
            : 'Unit updated.'
          : 'Unit created.'
      );
      resetUnitForm(subj.id);
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save unit.');
    } finally {
      setSaving(false);
    }
  };

  const handleChapterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !chapterForm.unitId) return;
    const unit = units.find((u) => u.id === chapterForm.unitId);
    if (!unit) return;

    setSaving(true);
    setError(null);
    setNotice(null);
    const id = editingChapterId ?? generateSafeId('chap');
    const isEdit = Boolean(editingChapterId);
    const existingChapter = isEdit ? chapters.find((c) => c.id === editingChapterId) : undefined;

    try {
      await upsertAdminEntity<Chapter>(
        'chapters',
        id,
        {
          id,
          unitId: unit.id,
          subjectId: unit.subjectId,
          courseId: unit.courseId,
          title: clampString(chapterForm.title, 180),
          summary: clampString(chapterForm.summary, 2000),
          sortOrder: Math.min(Math.max(0, Number(chapterForm.sortOrder) || 0), 10000),
          isPublished: chapterForm.isPublished,
          createdBy: existingChapter?.createdBy ?? firebaseUser.uid,
        },
        isEdit
      );

      let cascaded = 0;
      if (
        isEdit &&
        existingChapter &&
        (existingChapter.unitId !== unit.id ||
          existingChapter.subjectId !== unit.subjectId ||
          existingChapter.courseId !== unit.courseId)
      ) {
        const childTopics = topics.filter((t) => t.chapterId === id);
        const childTopicIds = new Set(childTopics.map((t) => t.id));
        for (const topic of childTopics) {
          await upsertAdminEntity<Topic>(
            'topics',
            topic.id,
            {
              ...topic,
              unitId: unit.id,
              subjectId: unit.subjectId,
              courseId: unit.courseId,
            },
            true
          );
          cascaded += 1;
        }

        for (const material of materials.filter(
          (m) => m.chapterId === id || childTopicIds.has(m.topicId)
        )) {
          await upsertAdminEntity<StudyMaterial>(
            'studyMaterials',
            material.id,
            {
              ...material,
              subjectId: unit.subjectId,
              courseId: unit.courseId,
            },
            true
          );
          cascaded += 1;
        }

        for (const question of questions.filter(
          (q) => q.chapterId === id || childTopicIds.has(q.topicId)
        )) {
          await upsertAdminEntity<Question>(
            'questions',
            question.id,
            {
              ...question,
              subjectId: unit.subjectId,
            },
            true
          );
          cascaded += 1;
        }
      }

      setNotice(
        isEdit
          ? cascaded > 0
            ? `Chapter updated and ${cascaded} child record(s) re-associated.`
            : 'Chapter updated.'
          : 'Chapter created.'
      );
      resetChapterForm(unit.id);
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save chapter.');
    } finally {
      setSaving(false);
    }
  };

  const visibleUnits = useMemo(() => {
    const filtered = subjectFilter
      ? units.filter((u) => u.subjectId === subjectFilter)
      : units;
    return filtered;
  }, [units, subjectFilter]);

  const visibleChapters = useMemo(() => {
    const filtered = subjectFilter
      ? chapters.filter((c) => {
          const parentUnit = unitById.get(c.unitId);
          return c.subjectId === subjectFilter || parentUnit?.subjectId === subjectFilter;
        })
      : chapters;
    return filtered;
  }, [chapters, subjectFilter, unitById]);

  const sortedUnitsForSelect = useMemo(() => {
    return [...units].sort((a, b) => {
      const subjA = subjectById.get(a.subjectId)?.title ?? '';
      const subjB = subjectById.get(b.subjectId)?.title ?? '';
      return (
        compareNaturalText(subjA, subjB) ||
        safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) ||
        compareNaturalText(a.title, b.title)
      );
    });
  }, [units, subjectById]);

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Units & Chapters"
      breadcrumb="UK Prep / Admin / Units & Chapters"
      isAdminWorkspace
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="inline-flex p-1 bg-field border border-edge rounded-lg w-fit">
            <button
              type="button"
              onClick={() => setTab('units')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                tab === 'units'
                  ? 'bg-accent text-accent-ink shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              Units ({visibleUnits.length})
            </button>
            <button
              type="button"
              onClick={() => setTab('chapters')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                tab === 'chapters'
                  ? 'bg-accent text-accent-ink shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              Chapters ({visibleChapters.length})
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="uc-filter-subj" className="text-xs font-medium text-ink-muted">
              Filter by Subject:
            </label>
            <select
              id="uc-filter-subj"
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="px-3 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="">All Subjects ({subjects.length})</option>
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

        {!loading && (
          <UnassignedSubjectRepairCard
            subjects={subjects}
            courses={courses}
            units={units}
            chapters={chapters}
            topics={topics}
            onRefresh={loadData}
          />
        )}

        {loading ? (
          <LoadingState label="Loading units and chapters..." />
        ) : tab === 'units' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-ink">
                  {editingUnitId ? 'Edit Unit' : 'Create Unit'}
                </h2>
                {editingUnitId && (
                  <button
                    type="button"
                    onClick={() => resetUnitForm()}
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
                <form onSubmit={handleUnitSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="u-subj" className="block text-xs font-medium text-ink-muted mb-1">
                      Parent Subject
                    </label>
                    <select
                      id="u-subj"
                      required
                      value={unitForm.subjectId}
                      onChange={(e) => setUnitForm((p) => ({ ...p, subjectId: e.target.value }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    >
                      {subjects.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="u-title" className="block text-xs font-medium text-ink-muted mb-1">
                      Unit Title
                    </label>
                    <input
                      id="u-title"
                      type="text"
                      required
                      minLength={2}
                      maxLength={180}
                      placeholder="e.g., Physical Geography of India & Uttarakhand"
                      value={unitForm.title}
                      onChange={(e) => setUnitForm((p) => ({ ...p, title: e.target.value }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="u-desc" className="block text-xs font-medium text-ink-muted mb-1">
                      Description (optional)
                    </label>
                    <textarea
                      id="u-desc"
                      rows={2}
                      maxLength={1500}
                      value={unitForm.description}
                      onChange={(e) => setUnitForm((p) => ({ ...p, description: e.target.value }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3 items-end">
                    <div>
                      <label htmlFor="u-order" className="block text-xs font-medium text-ink-muted mb-1">
                        Sort Order
                      </label>
                      <input
                        id="u-order"
                        type="number"
                        min={0}
                        max={10000}
                        value={unitForm.sortOrder}
                        onChange={(e) =>
                          setUnitForm((p) => ({ ...p, sortOrder: Number(e.target.value) }))
                        }
                        className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink font-mono focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <label className="flex items-center gap-2 pb-2 text-xs font-medium text-ink">
                      <input
                        type="checkbox"
                        checked={unitForm.isPublished}
                        onChange={(e) =>
                          setUnitForm((p) => ({ ...p, isPublished: e.target.checked }))
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
                    {editingUnitId ? <Pencil className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    <span>{editingUnitId ? 'Update Unit' : 'Add Unit'}</span>
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-7">
              {visibleUnits.length === 0 ? (
                <EmptyState
                  title="No units found"
                  description="Units group related chapters inside a top-level subject."
                />
              ) : (
                <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
                  {visibleUnits.map((u) => {
                    const subj = subjectById.get(u.subjectId);
                    const chapCount = chapters.filter((c) => c.unitId === u.id).length;
                    return (
                      <div key={u.id} className="p-4 flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <div className="text-xs font-mono text-accent-text">
                            {subj?.title || u.subjectId} · #{u.sortOrder} · {chapCount} chapter
                            {chapCount === 1 ? '' : 's'} · {u.isPublished ? 'Published' : 'Draft'}
                          </div>
                          <div className="mt-0.5 text-sm font-semibold text-ink">{u.title}</div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            type="button"
                            aria-label={`Edit ${u.title}`}
                            onClick={() => {
                              setEditingUnitId(u.id);
                              setUnitForm({
                                subjectId: u.subjectId,
                                title: u.title,
                                description: u.description ?? '',
                                sortOrder: u.sortOrder,
                                isPublished: u.isPublished,
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
                            aria-label={`Delete ${u.title}`}
                            onClick={async () => {
                              await deleteAdminEntity('units', u.id);
                              setNotice('Unit removed.');
                              if (editingUnitId === u.id) resetUnitForm();
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
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-ink">
                  {editingChapterId ? 'Edit Chapter' : 'Create Chapter'}
                </h2>
                {editingChapterId && (
                  <button
                    type="button"
                    onClick={() => resetChapterForm()}
                    className="inline-flex items-center gap-1 text-xs text-ink-muted hover:text-ink"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Cancel</span>
                  </button>
                )}
              </div>
              {units.length === 0 ? (
                <p className="text-xs text-accent-text">Create a Unit first.</p>
              ) : (
                <form onSubmit={handleChapterSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="c-unit" className="block text-xs font-medium text-ink-muted mb-1">
                      Parent Subject &amp; Unit
                    </label>
                    <select
                      id="c-unit"
                      required
                      value={chapterForm.unitId}
                      onChange={(e) => setChapterForm((p) => ({ ...p, unitId: e.target.value }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    >
                      {sortedUnitsForSelect.map((u) => {
                        const subj = subjectById.get(u.subjectId);
                        return (
                          <option key={u.id} value={u.id}>
                            {subj?.title || 'Subject'} / {u.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="c-title" className="block text-xs font-medium text-ink-muted mb-1">
                      Chapter Title
                    </label>
                    <input
                      id="c-title"
                      type="text"
                      required
                      minLength={2}
                      maxLength={180}
                      value={chapterForm.title}
                      onChange={(e) => setChapterForm((p) => ({ ...p, title: e.target.value }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-summary" className="block text-xs font-medium text-ink-muted mb-1">
                      Chapter Summary (optional)
                    </label>
                    <textarea
                      id="c-summary"
                      rows={2}
                      maxLength={2000}
                      value={chapterForm.summary}
                      onChange={(e) => setChapterForm((p) => ({ ...p, summary: e.target.value }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3 items-end">
                    <div>
                      <label htmlFor="c-order" className="block text-xs font-medium text-ink-muted mb-1">
                        Sort Order
                      </label>
                      <input
                        id="c-order"
                        type="number"
                        min={0}
                        max={10000}
                        value={chapterForm.sortOrder}
                        onChange={(e) =>
                          setChapterForm((p) => ({ ...p, sortOrder: Number(e.target.value) }))
                        }
                        className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink font-mono focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <label className="flex items-center gap-2 pb-2 text-xs font-medium text-ink">
                      <input
                        type="checkbox"
                        checked={chapterForm.isPublished}
                        onChange={(e) =>
                          setChapterForm((p) => ({ ...p, isPublished: e.target.checked }))
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
                    {editingChapterId ? <Pencil className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    <span>{editingChapterId ? 'Update Chapter' : 'Add Chapter'}</span>
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-7">
              {visibleChapters.length === 0 ? (
                <EmptyState
                  title="No chapters found"
                  description="Chapters break down syllabus units into focused topics."
                />
              ) : (
                <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
                  {visibleChapters.map((c) => {
                    const unit = unitById.get(c.unitId);
                    const subj = subjectById.get(c.subjectId || unit?.subjectId || '');
                    const topicCount = topics.filter((t) => t.chapterId === c.id).length;
                    return (
                      <div key={c.id} className="p-4 flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <div className="text-xs font-mono text-accent-text">
                            {subj?.title || c.subjectId} / {unit?.title || c.unitId} · #{c.sortOrder} ·{' '}
                            {topicCount} topic{topicCount === 1 ? '' : 's'} ·{' '}
                            {c.isPublished ? 'Published' : 'Draft'}
                          </div>
                          <div className="mt-0.5 text-sm font-semibold text-ink">{c.title}</div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            type="button"
                            aria-label={`Edit ${c.title}`}
                            onClick={() => {
                              setEditingChapterId(c.id);
                              setChapterForm({
                                unitId: c.unitId,
                                title: c.title,
                                summary: c.summary ?? '',
                                sortOrder: c.sortOrder,
                                isPublished: c.isPublished,
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
                            aria-label={`Delete ${c.title}`}
                            onClick={async () => {
                              await deleteAdminEntity('chapters', c.id);
                              setNotice('Chapter removed.');
                              if (editingChapterId === c.id) resetChapterForm();
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
        )}
      </div>
    </AppShell>
  );
}
