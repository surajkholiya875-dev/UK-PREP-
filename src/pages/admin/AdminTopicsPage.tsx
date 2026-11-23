import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pencil, Plus, Trash2, X } from 'lucide-react';
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
import { Chapter, Question, StudyMaterial, Subject, Topic, Unit } from '../../types/academic';

export function AdminTopicsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

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
      const [subjs, unts, chaps, tpcs, mats, qs] = await Promise.all([
        fetchAllAdminCollection<Subject>('subjects'),
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
      const sortedChaps = [...chaps].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      );
      const sortedTopics = [...tpcs].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      );

      setSubjects(sortedSubjs);
      setUnits(sortedUnits);
      setChapters(sortedChaps);
      setTopics(sortedTopics);
      setMaterials(mats);
      setQuestions(qs);

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
                  .
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
                const matCount = materials.filter((m) => m.topicId === t.id).length;

                return (
                  <div key={t.id} className="p-4 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-accent-text">
                        {subject?.title || t.subjectId} / {unit?.title || 'Unit'} /{' '}
                        {chapter?.title || t.chapterId} · #{t.sortOrder} · {matCount} material
                        {matCount === 1 ? '' : 's'} · {t.isPublished ? 'Published' : 'Draft'}
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
    </AppShell>
  );
}
