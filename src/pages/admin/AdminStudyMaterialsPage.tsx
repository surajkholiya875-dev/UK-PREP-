import React, { useEffect, useMemo, useState } from 'react';
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
import { Chapter, MaterialType, StudyMaterial, Subject, Topic, Unit } from '../../types/academic';

export function AdminStudyMaterialsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [subjectFilter, setSubjectFilter] = useState('');

  const [form, setForm] = useState({
    topicId: '',
    title: '',
    materialType: 'notes' as MaterialType,
    contentMarkdown: '',
    resourceUrl: '',
    estimatedMinutes: 15,
    isPublished: true,
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [mats, tpcs, chps, unt, subjs] = await Promise.all([
        fetchAllAdminCollection<StudyMaterial>('studyMaterials'),
        fetchAllAdminCollection<Topic>('topics'),
        fetchAllAdminCollection<Chapter>('chapters'),
        fetchAllAdminCollection<Unit>('units'),
        fetchAllAdminCollection<Subject>('subjects'),
      ]);
      const subjectMap = new Map(subjs.map((s) => [s.id, s]));
      const unitMap = new Map(unt.map((u) => [u.id, u]));
      const chapterMap = new Map(chps.map((c) => [c.id, c]));

      const sortedTopics = [...tpcs].sort((a, b) => {
        const sA = subjectMap.get(a.subjectId);
        const sB = subjectMap.get(b.subjectId);
        const uA = unitMap.get(a.unitId);
        const uB = unitMap.get(b.unitId);
        const cA = chapterMap.get(a.chapterId);
        const cB = chapterMap.get(b.chapterId);
        return (
          safeSortOrder(sA?.sortOrder) - safeSortOrder(sB?.sortOrder) ||
          compareNaturalText(sA?.title, sB?.title) ||
          safeSortOrder(uA?.sortOrder) - safeSortOrder(uB?.sortOrder) ||
          safeSortOrder(cA?.sortOrder) - safeSortOrder(cB?.sortOrder) ||
          safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) ||
          compareNaturalText(a.title, b.title)
        );
      });

      setMaterials(mats);
      setTopics(sortedTopics);
      setChapters(chps);
      setUnits(unt);
      setSubjects(
        [...subjs].sort(
          (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
        )
      );
      if (sortedTopics.length > 0 && !form.topicId) {
        setForm((p) => ({ ...p, topicId: sortedTopics[0].id }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load study materials.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !form.topicId) return;
    const topic = topics.find((t) => t.id === form.topicId);
    if (!topic) return;
    const id = editingId ?? generateSafeId('mat');
    const isEdit = Boolean(editingId);
    const existingMaterial = isEdit ? materials.find((m) => m.id === editingId) : undefined;

    try {
      await upsertAdminEntity<StudyMaterial>(
        'studyMaterials',
        id,
        {
          id,
          topicId: topic.id,
          chapterId: topic.chapterId,
          subjectId: topic.subjectId,
          courseId: topic.courseId,
          title: clampString(form.title, 200),
          materialType: form.materialType,
          contentMarkdown: clampString(form.contentMarkdown, 30000),
          resourceUrl: clampString(form.resourceUrl, 1000),
          estimatedMinutes: Math.min(Math.max(1, Number(form.estimatedMinutes) || 10), 600),
          isPublished: form.isPublished,
          createdBy: existingMaterial?.createdBy ?? firebaseUser.uid,
        },
        isEdit
      );
      setNotice(isEdit ? 'Study material updated.' : 'Study material saved.');
      setEditingId(null);
      setForm({
        topicId: topic.id,
        title: '',
        materialType: 'notes',
        contentMarkdown: '',
        resourceUrl: '',
        estimatedMinutes: 15,
        isPublished: true,
      });
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save study material.');
    }
  };

  const filteredMaterials = useMemo(() => {
    if (!subjectFilter) return materials;
    return materials.filter((m) => {
      const topic = topics.find((t) => t.id === m.topicId);
      const resolvedSubjectId = m.subjectId || topic?.subjectId || '';
      return resolvedSubjectId === subjectFilter;
    });
  }, [materials, subjectFilter, topics]);

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Study Material Management"
      breadcrumb="UK Prep / Admin / Study Materials"
      isAdminWorkspace
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-ink">
              {editingId ? 'Edit Study Material' : 'Add Study Material'}
            </h2>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setForm({
                    topicId: topics[0]?.id ?? '',
                    title: '',
                    materialType: 'notes',
                    contentMarkdown: '',
                    resourceUrl: '',
                    estimatedMinutes: 15,
                    isPublished: true,
                  });
                }}
                className="text-xs text-ink-muted hover:text-ink inline-flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Cancel
              </button>
            )}
          </div>
          {topics.length === 0 ? (
            <p className="text-xs text-accent-text">Create a Topic first.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="m-topic" className="block text-xs font-medium text-ink-muted mb-1">
                  Parent Topic (Subject / Unit / Chapter / Topic)
                </label>
                <select
                  id="m-topic"
                  value={form.topicId}
                  onChange={(e) => setForm((p) => ({ ...p, topicId: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  {topics.map((t) => {
                    const chapter = chapters.find((item) => item.id === t.chapterId);
                    const subject = subjects.find((item) => item.id === t.subjectId);
                    const unit = units.find((item) => item.id === t.unitId);
                    return (
                      <option key={t.id} value={t.id}>
                        {subject?.title || 'Subject'} / {unit?.title || 'Unit'} /{' '}
                        {chapter?.title || 'Chapter'} / {t.title}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label htmlFor="m-title" className="block text-xs font-medium text-ink-muted mb-1">
                  Material Title
                </label>
                <input
                  id="m-title"
                  type="text"
                  required
                  minLength={2}
                  maxLength={200}
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="m-type" className="block text-xs font-medium text-ink-muted mb-1">
                    Type
                  </label>
                  <select
                    id="m-type"
                    value={form.materialType}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, materialType: e.target.value as MaterialType }))
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="notes">Notes</option>
                    <option value="summary">Summary</option>
                    <option value="pyq_analysis">PYQ Analysis</option>
                    <option value="current_affairs">Current Affairs</option>
                    <option value="reference">Reference</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="m-mins" className="block text-xs font-medium text-ink-muted mb-1">
                    Est. Minutes
                  </label>
                  <input
                    id="m-mins"
                    type="number"
                    min={1}
                    max={600}
                    value={form.estimatedMinutes}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, estimatedMinutes: Number(e.target.value) }))
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent font-mono"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="m-content" className="block text-xs font-medium text-ink-muted mb-1">
                  Written Study Content (Markdown supported)
                </label>
                <textarea
                  id="m-content"
                  rows={10}
                  maxLength={30000}
                  value={form.contentMarkdown}
                  onChange={(e) => setForm((p) => ({ ...p, contentMarkdown: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="m-resource-url"
                  className="block text-xs font-medium text-ink-muted mb-1"
                >
                  Resource URL (optional)
                </label>
                <input
                  id="m-resource-url"
                  type="url"
                  maxLength={1000}
                  value={form.resourceUrl}
                  onChange={(e) => setForm((p) => ({ ...p, resourceUrl: e.target.value }))}
                  placeholder="https://..."
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
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
              >
                {editingId ? <Pencil className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                <span>{editingId ? 'Update Material' : 'Save Material'}</span>
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-panel border border-edge rounded-xl px-4 py-3">
            <div className="text-xs font-semibold text-ink">
              Showing {filteredMaterials.length} of {materials.length} Study Material
              {materials.length === 1 ? '' : 's'}
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="m-filter-subj" className="text-xs font-medium text-ink-muted">
                Subject:
              </label>
              <select
                id="m-filter-subj"
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
            <LoadingState label="Loading study materials..." />
          ) : filteredMaterials.length === 0 ? (
            <EmptyState
              title="No study materials yet"
              description="Attach structured notes, chapter summaries, and PYQ analyses to syllabus topics."
            />
          ) : (
            <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
              {filteredMaterials.map((m) => (
                <div key={m.id} className="p-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono uppercase text-accent-text">
                      {m.materialType.replace('_', ' ')} · {m.estimatedMinutes} min ·{' '}
                      {m.isPublished ? 'Published' : 'Draft'}
                    </div>
                    <div className="text-sm font-semibold text-ink">{m.title}</div>
                    <div className="mt-1 text-[11px] text-ink-faint">
                      {subjects.find((item) => item.id === m.subjectId)?.title || 'Subject'} /{' '}
                      {chapters.find((item) => item.id === m.chapterId)?.title || 'Chapter'} /{' '}
                      {topics.find((item) => item.id === m.topicId)?.title || 'Topic'}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label={`Edit ${m.title}`}
                      onClick={() => {
                        setEditingId(m.id);
                        setForm({
                          topicId: m.topicId,
                          title: m.title,
                          materialType: m.materialType,
                          contentMarkdown: m.contentMarkdown ?? '',
                          resourceUrl: m.resourceUrl ?? '',
                          estimatedMinutes: m.estimatedMinutes,
                          isPublished: m.isPublished,
                        });
                        setError(null);
                        setNotice(null);
                      }}
                      className="p-2 rounded-lg text-ink-muted hover:text-accent-text hover:bg-accent/10 transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      aria-label={`Delete ${m.title}`}
                      onClick={async () => {
                        await deleteAdminEntity('studyMaterials', m.id);
                        setNotice('Material deleted.');
                        await loadData();
                      }}
                      className="p-2 rounded-lg text-ink-muted hover:text-red-500 hover:bg-red-500/10 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
