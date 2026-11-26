import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Pencil, Plus, Search, Trash2, X } from 'lucide-react';
import { CascadingTopicSelector } from '../../components/admin/CascadingTopicSelector';
import { AppShell } from '../../components/ui/AppShell';
import { MarkdownContent } from '../../components/ui/MarkdownContent';
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
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [previewMaterial, setPreviewMaterial] = useState<{
    title: string;
    materialType: MaterialType;
    estimatedMinutes: number;
    contentMarkdown: string;
    topicPath: string;
  } | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | MaterialType>('all');

  const [form, setForm] = useState({
    topicId: '',
    title: '',
    materialType: 'notes' as MaterialType,
    contentMarkdown: '',
    resourceUrl: '',
    estimatedMinutes: 20,
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
        const cA = chapterMap.get(a.chapterId);
        const cB = chapterMap.get(b.chapterId);
        const uA = unitMap.get(a.unitId || cA?.unitId || '');
        const uB = unitMap.get(b.unitId || cB?.unitId || '');
        const sA = subjectMap.get(a.subjectId || cA?.subjectId || uA?.subjectId || '');
        const sB = subjectMap.get(b.subjectId || cB?.subjectId || uB?.subjectId || '');
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

  const topicMap = useMemo(() => new Map(topics.map((t) => [t.id, t])), [topics]);
  const chapterMap = useMemo(() => new Map(chapters.map((c) => [c.id, c])), [chapters]);
  const unitMap = useMemo(() => new Map(units.map((u) => [u.id, u])), [units]);
  const subjectMap = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);

  const getTopicPath = (topicId: string) => {
    const t = topicMap.get(topicId);
    if (!t) return 'Unknown Topic';
    const c = chapterMap.get(t.chapterId);
    const u = unitMap.get(t.unitId || c?.unitId || '');
    const s = subjectMap.get(t.subjectId || c?.subjectId || u?.subjectId || '');
    return [s?.title, u?.title, c?.title, t.title].filter(Boolean).join(' / ');
  };

  const resetForm = (preserveTopicId = true) => {
    setEditingId(null);
    setForm((p) => ({
      topicId: preserveTopicId && p.topicId ? p.topicId : topics[0]?.id ?? '',
      title: '',
      materialType: 'notes',
      contentMarkdown: '',
      resourceUrl: '',
      estimatedMinutes: 20,
      isPublished: true,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser) return;
    const topic = topics.find((t) => t.id === form.topicId);
    if (!topic) {
      setError('Select a valid parent topic before saving.');
      return;
    }
    if (form.title.trim().length < 2) {
      setError('Material title must be at least 2 characters.');
      return;
    }
    if (form.isPublished && form.contentMarkdown.trim().length < 20 && !form.resourceUrl.trim()) {
      setError('Cannot publish empty study material. Add at least 20 characters of study content or save as Draft.');
      return;
    }

    const chapter = chapterMap.get(topic.chapterId);
    const unit = unitMap.get(topic.unitId || chapter?.unitId || '');
    const resolvedSubjectId = topic.subjectId || chapter?.subjectId || unit?.subjectId || '';
    const resolvedCourseId = topic.courseId || chapter?.courseId || unit?.courseId || '';

    const id = editingId ?? generateSafeId('mat');
    const isEdit = Boolean(editingId);
    const existingMaterial = isEdit ? materials.find((m) => m.id === editingId) : undefined;

    setSaving(true);
    setError(null);
    setNotice(null);

    try {
      await upsertAdminEntity<StudyMaterial>(
        'studyMaterials',
        id,
        {
          id,
          topicId: topic.id,
          chapterId: topic.chapterId,
          subjectId: resolvedSubjectId,
          courseId: resolvedCourseId,
          title: clampString(form.title, 200),
          materialType: form.materialType,
          contentMarkdown: clampString(form.contentMarkdown, 30000),
          ...(form.resourceUrl.trim() ? { resourceUrl: clampString(form.resourceUrl, 1000) } : {}),
          estimatedMinutes: Math.min(Math.max(1, Number(form.estimatedMinutes) || 10), 600),
          isPublished: form.isPublished,
          createdBy: existingMaterial?.createdBy ?? firebaseUser.uid,
        },
        isEdit
      );
      setNotice(isEdit ? 'Study material updated.' : 'Study material saved.');
      resetForm(true);
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save study material.');
    } finally {
      setSaving(false);
    }
  };

  const handleTogglePublish = async (m: StudyMaterial) => {
    const nextPublish = !m.isPublished;
    if (nextPublish && (!m.contentMarkdown || m.contentMarkdown.trim().length < 20) && !m.resourceUrl?.trim()) {
      setError(`Cannot publish "${m.title}" because it has no written content body or source URL.`);
      return;
    }
    try {
      setError(null);
      await upsertAdminEntity<StudyMaterial>(
        'studyMaterials',
        m.id,
        { ...m, isPublished: nextPublish },
        true
      );
      setNotice(`"${m.title}" ${nextPublish ? 'published to students' : 'moved to draft'}.`);
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update publication status.');
    }
  };

  const filterTopics = useMemo(() => {
    if (!subjectFilter) return topics;
    return topics.filter((t) => {
      const ch = chapterMap.get(t.chapterId);
      const un = unitMap.get(t.unitId || ch?.unitId || '');
      return (t.subjectId || ch?.subjectId || un?.subjectId || '') === subjectFilter;
    });
  }, [topics, subjectFilter, chapterMap, unitMap]);

  const filteredMaterials = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return materials.filter((m) => {
      const topic = topicMap.get(m.topicId);
      const ch = topic ? chapterMap.get(topic.chapterId) : undefined;
      const un = topic ? unitMap.get(topic.unitId || ch?.unitId || '') : undefined;
      const resolvedSubjectId = m.subjectId || topic?.subjectId || ch?.subjectId || un?.subjectId || '';

      if (subjectFilter && resolvedSubjectId !== subjectFilter) return false;
      if (topicFilter && m.topicId !== topicFilter) return false;
      if (statusFilter === 'published' && !m.isPublished) return false;
      if (statusFilter === 'draft' && m.isPublished) return false;
      if (typeFilter !== 'all' && m.materialType !== typeFilter) return false;
      if (
        q &&
        !m.title.toLowerCase().includes(q) &&
        !(topic?.title || '').toLowerCase().includes(q) &&
        !(m.contentMarkdown || '').toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }, [materials, subjectFilter, topicFilter, statusFilter, typeFilter, searchQuery, topicMap, chapterMap, unitMap]);

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Study Materials"
      breadcrumb="UK Prep / Admin / Study Materials"
      isAdminWorkspace
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/admin/overview"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-ink"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Admin Overview</span>
          </Link>
          <Link
            to="/admin/topics"
            className="text-xs font-semibold text-accent-text hover:underline whitespace-nowrap"
          >
            Open Topic Batch Sync &amp; JSON Import →
          </Link>
        </div>

        {notice && <SuccessBanner message={notice} />}
        {error && <ErrorState message={error} onRetry={() => void loadData()} />}

        {previewMaterial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="bg-panel border border-edge rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-xl">
              <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-edge">
                <div>
                  <div className="text-[11px] font-mono uppercase text-accent-text">
                    Student Preview · {previewMaterial.materialType.replace('_', ' ')} ·{' '}
                    {previewMaterial.estimatedMinutes} min
                  </div>
                  <h3 className="text-base font-bold text-ink">{previewMaterial.title}</h3>
                  <div className="text-[11px] text-ink-faint">{previewMaterial.topicPath}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewMaterial(null)}
                  className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle"
                  aria-label="Close preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto">
                {previewMaterial.contentMarkdown.trim() ? (
                  <MarkdownContent content={previewMaterial.contentMarkdown} />
                ) : (
                  <p className="text-sm text-ink-muted">No written content body provided.</p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-ink">
                {editingId ? 'Edit Study Material' : 'Add Study Material'}
              </h2>
              {editingId && (
                <button
                  type="button"
                  onClick={() => resetForm(true)}
                  className="text-xs text-ink-muted hover:text-ink inline-flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" /> Cancel
                </button>
              )}
            </div>

            {topics.length === 0 ? (
              <p className="text-xs text-accent-text">Create a Topic first.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <CascadingTopicSelector
                  subjects={subjects}
                  units={units}
                  chapters={chapters}
                  topics={topics}
                  valueTopicId={form.topicId}
                  onChange={({ topicId }) => setForm((p) => ({ ...p, topicId }))}
                />

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
                    placeholder="e.g., Fundamental Rights — Articles 14–22 Notes"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="m-type" className="block text-xs font-medium text-ink-muted mb-1">
                      Content Type
                    </label>
                    <select
                      id="m-type"
                      value={form.materialType}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, materialType: e.target.value as MaterialType }))
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="notes">Complete Notes</option>
                      <option value="summary">Revision Summary</option>
                      <option value="reference">Supplement / Reference</option>
                      <option value="pyq_analysis">PYQ Analysis</option>
                      <option value="current_affairs">Current Affairs</option>
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
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent font-mono"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="m-content" className="text-xs font-medium text-ink-muted">
                      Study Content (Markdown supported)
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewMaterial({
                          title: form.title || 'Untitled Material',
                          materialType: form.materialType,
                          estimatedMinutes: form.estimatedMinutes,
                          contentMarkdown: form.contentMarkdown,
                          topicPath: getTopicPath(form.topicId),
                        })
                      }
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent-text hover:underline"
                    >
                      <Eye className="w-3.5 h-3.5" /> Preview
                    </button>
                  </div>
                  <textarea
                    id="m-content"
                    rows={10}
                    maxLength={30000}
                    value={form.contentMarkdown}
                    onChange={(e) => setForm((p) => ({ ...p, contentMarkdown: e.target.value }))}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="m-resource-url"
                    className="block text-xs font-medium text-ink-muted mb-1"
                  >
                    Official Source / Reference URL (optional)
                  </label>
                  <input
                    id="m-resource-url"
                    type="url"
                    maxLength={1000}
                    value={form.resourceUrl}
                    onChange={(e) => setForm((p) => ({ ...p, resourceUrl: e.target.value }))}
                    placeholder="https://..."
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <label className="flex items-center gap-2 text-xs font-medium text-ink">
                  <input
                    type="checkbox"
                    checked={form.isPublished}
                    onChange={(e) => setForm((p) => ({ ...p, isPublished: e.target.checked }))}
                    className="accent-accent"
                  />
                  <span>Publish immediately to Students</span>
                </label>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors"
                >
                  {editingId ? <Pencil className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  <span>
                    {saving ? 'Saving...' : editingId ? 'Update Material' : 'Save Material'}
                  </span>
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="bg-panel border border-edge rounded-xl p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs font-semibold text-ink">
                  Showing {filteredMaterials.length} of {materials.length} Study Material
                  {materials.length === 1 ? '' : 's'}
                </div>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-ink-faint absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search title, topic, text..."
                    className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <select
                  aria-label="Filter by subject"
                  value={subjectFilter}
                  onChange={(e) => {
                    setSubjectFilter(e.target.value);
                    setTopicFilter('');
                  }}
                  className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  <option value="">All Subjects</option>
                  {subjects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
                <select
                  aria-label="Filter by topic"
                  value={topicFilter}
                  onChange={(e) => setTopicFilter(e.target.value)}
                  className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  <option value="">All Topics</option>
                  {filterTopics.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.title}
                    </option>
                  ))}
                </select>
                <select
                  aria-label="Filter by publication status"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as 'all' | 'published' | 'draft')}
                  className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  <option value="all">All Statuses</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft Only</option>
                </select>
                <select
                  aria-label="Filter by material type"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value as 'all' | MaterialType)}
                  className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
                >
                  <option value="all">All Types</option>
                  <option value="notes">Notes</option>
                  <option value="summary">Summary</option>
                  <option value="reference">Supplement / Ref</option>
                  <option value="pyq_analysis">PYQ Analysis</option>
                  <option value="current_affairs">Current Affairs</option>
                </select>
              </div>
            </div>

            {loading ? (
              <LoadingState label="Loading study materials..." />
            ) : filteredMaterials.length === 0 ? (
              <EmptyState
                title="No matching study materials"
                description="Create notes or supplements for a topic, or adjust your search/filter selections."
              />
            ) : (
              <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
                {filteredMaterials.map((m) => (
                  <div key={m.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-xs font-mono uppercase text-accent-text">
                        {m.materialType.replace('_', ' ')} · {m.estimatedMinutes} min ·{' '}
                        {m.isPublished ? 'Published' : 'Draft'}
                      </div>
                      <div className="text-sm font-semibold text-ink">{m.title}</div>
                      <div className="mt-1 text-[11px] text-ink-faint truncate">
                        {getTopicPath(m.topicId)}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() =>
                          setPreviewMaterial({
                            title: m.title,
                            materialType: m.materialType,
                            estimatedMinutes: m.estimatedMinutes,
                            contentMarkdown: m.contentMarkdown ?? '',
                            topicPath: getTopicPath(m.topicId),
                          })
                        }
                        className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle"
                        aria-label={`Preview ${m.title}`}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => void handleTogglePublish(m)}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg border border-edge-strong bg-field text-ink hover:border-accent"
                      >
                        {m.isPublished ? 'Unpublish' : 'Publish'}
                      </button>
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
                        className="p-1.5 rounded-lg text-ink-muted hover:text-accent-text hover:bg-accent/10 transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      {confirmDeleteId === m.id ? (
                        <div className="inline-flex items-center gap-1 rounded-lg border border-red-500/40 bg-red-500/10 px-2 py-1 text-[11px]">
                          <button
                            type="button"
                            onClick={async () => {
                              await deleteAdminEntity('studyMaterials', m.id);
                              setConfirmDeleteId(null);
                              setNotice('Study material deleted.');
                              if (editingId === m.id) resetForm(true);
                              await loadData();
                            }}
                            className="font-semibold text-red-600 dark:text-red-400 hover:underline"
                          >
                            Confirm
                          </button>
                          <span className="text-ink-faint">/</span>
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteId(null)}
                            className="text-ink-muted hover:text-ink"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          aria-label={`Delete ${m.title}`}
                          onClick={() => setConfirmDeleteId(m.id)}
                          className="p-1.5 rounded-lg text-ink-muted hover:text-red-500 hover:bg-red-500/10 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
