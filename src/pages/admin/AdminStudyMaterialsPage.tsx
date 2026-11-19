import React, { useEffect, useState } from 'react';
import { Pencil, Plus, Trash2, X } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { ADMIN_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  clampString,
  deleteAdminEntity,
  fetchAllAdminCollection,
  generateSafeId,
  upsertAdminEntity,
} from '../../services/firestoreService';
import { MaterialType, StudyMaterial, Topic } from '../../types/academic';

export function AdminStudyMaterialsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

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
      const [mats, tpcs] = await Promise.all([
        fetchAllAdminCollection<StudyMaterial>('studyMaterials'),
        fetchAllAdminCollection<Topic>('topics'),
      ]);
      setMaterials(mats);
      setTopics(tpcs);
      if (tpcs.length > 0 && !form.topicId) setForm((p) => ({ ...p, topicId: tpcs[0].id }));
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
          estimatedMinutes: Number(form.estimatedMinutes) || 10,
          isPublished: form.isPublished,
          createdBy: firebaseUser.uid,
        },
        Boolean(editingId)
      );
      setNotice(editingId ? 'Study material updated.' : 'Study material saved.');
      setEditingId(null);
      setForm({ topicId: topic.id, title: '', materialType: 'notes', contentMarkdown: '', resourceUrl: '', estimatedMinutes: 15, isPublished: true });
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save study material.');
    }
  };

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
          <div className="flex items-center justify-between mb-4"><h2 className="text-base font-semibold text-ink">{editingId ? "Edit Study Material" : "Add Study Material"}</h2>{editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ topicId: topics[0]?.id ?? "", title: "", materialType: "notes", contentMarkdown: "", resourceUrl: "", estimatedMinutes: 15, isPublished: true }); }} className="text-xs text-ink-muted hover:text-ink inline-flex items-center gap-1"><X className="w-3 h-3"/> Cancel</button>}</div>
          {topics.length === 0 ? (
            <p className="text-xs text-accent-text">Create a Topic first.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="m-topic" className="block text-xs font-medium text-ink-muted mb-1">Parent Topic</label>
                <select
                  id="m-topic"
                  value={form.topicId}
                  onChange={(e) => setForm((p) => ({ ...p, topicId: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  {topics.map((t) => (
                    <option key={t.id} value={t.id}>{t.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="m-title" className="block text-xs font-medium text-ink-muted mb-1">Material Title</label>
                <input
                  id="m-title"
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="m-type" className="block text-xs font-medium text-ink-muted mb-1">Type</label>
                  <select
                    id="m-type"
                    value={form.materialType}
                    onChange={(e) => setForm((p) => ({ ...p, materialType: e.target.value as MaterialType }))}
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
                  <label htmlFor="m-mins" className="block text-xs font-medium text-ink-muted mb-1">Est. Minutes</label>
                  <input
                    id="m-mins"
                    type="number"
                    min={1}
                    max={600}
                    value={form.estimatedMinutes}
                    onChange={(e) => setForm((p) => ({ ...p, estimatedMinutes: Number(e.target.value) }))}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent font-mono"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="m-content" className="block text-xs font-medium text-ink-muted mb-1">Study Notes Content</label>
                <textarea
                  id="m-content"
                  rows={5}
                  value={form.contentMarkdown}
                  onChange={(e) => setForm((p) => ({ ...p, contentMarkdown: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="m-resource-url" className="block text-xs font-medium text-ink-muted mb-1">Resource URL (optional)</label>
                <input
                  id="m-resource-url"
                  type="url"
                  value={form.resourceUrl}
                  onChange={(e) => setForm((p) => ({ ...p, resourceUrl: e.target.value }))}
                  placeholder="https://..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors">
                {editingId ? <Pencil className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                <span>{editingId ? "Update Material" : "Save Material"}</span>
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-7 space-y-4">
          {notice && <SuccessBanner message={notice} />}
          {error && <ErrorState message={error} onRetry={() => void loadData()} />}
          {loading ? (
            <LoadingState label="Loading study materials..." />
          ) : materials.length === 0 ? (
            <EmptyState title="No study materials yet" description="Attach structured notes, chapter summaries, and PYQ analyses to syllabus topics." />
          ) : (
            <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
              {materials.map((m) => (
                <div key={m.id} className="p-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono uppercase text-accent-text">
                      {m.materialType.replace('_', ' ')} · {m.estimatedMinutes} min
                    </div>
                    <div className="text-sm font-semibold text-ink">{m.title}</div>
                  </div>
                  <div className="flex items-center gap-2"><button
                    type="button"
                    aria-label={`Edit ${m.title}`}
                    onClick={() => {
                      setEditingId(m.id);
                      setForm({ topicId: m.topicId, title: m.title, materialType: m.materialType, contentMarkdown: m.contentMarkdown ?? "", resourceUrl: m.resourceUrl ?? "", estimatedMinutes: m.estimatedMinutes, isPublished: m.isPublished });
                      setError(null);
                      setNotice(null);
                    }}
                    className="p-2 rounded-lg text-ink-muted hover:text-accent-text hover:bg-accent/10 transition-colors"
                  ><Pencil className="w-4 h-4" /></button><button
                    type="button"
                    onClick={async () => {
                      await deleteAdminEntity('studyMaterials', m.id);
                      setNotice('Material deleted.');
                      await loadData();
                    }}
                    className="p-2 rounded-lg text-ink-muted hover:text-red-500 hover:bg-red-500/10 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
