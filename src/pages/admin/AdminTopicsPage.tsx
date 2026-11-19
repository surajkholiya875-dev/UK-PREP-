import React, { useEffect, useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
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
import { Chapter, Topic } from '../../types/academic';

export function AdminTopicsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [form, setForm] = useState({ chapterId: '', title: '', syllabusNotes: '', sortOrder: 1, isPublished: true });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [tpcs, chaps] = await Promise.all([
        fetchAllAdminCollection<Topic>('topics'),
        fetchAllAdminCollection<Chapter>('chapters'),
      ]);
      setTopics(tpcs.sort((a, b) => a.sortOrder - b.sortOrder));
      setChapters(chaps);
      if (chaps.length > 0 && !form.chapterId) setForm((p) => ({ ...p, chapterId: chaps[0].id }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !form.chapterId) return;
    const chap = chapters.find((c) => c.id === form.chapterId);
    if (!chap) return;
    const id = generateSafeId('top');
    try {
      await upsertAdminEntity<Topic>(
        'topics',
        id,
        {
          id,
          chapterId: chap.id,
          unitId: chap.unitId,
          subjectId: chap.subjectId,
          courseId: chap.courseId,
          title: clampString(form.title, 180),
          syllabusNotes: clampString(form.syllabusNotes, 2500),
          sortOrder: Number(form.sortOrder) || 0,
          isPublished: form.isPublished,
          createdBy: firebaseUser.uid,
        },
        false
      );
      setNotice('Topic created.');
      setForm((p) => ({ ...p, title: '', syllabusNotes: '' }));
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create topic.');
    }
  };

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
          <h2 className="text-base font-semibold text-ink mb-4">Create Topic</h2>
          {chapters.length === 0 ? (
            <p className="text-xs text-accent-text">Create a Chapter first.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="t-chap" className="block text-xs font-medium text-ink-muted mb-1">Parent Chapter</label>
                <select
                  id="t-chap"
                  value={form.chapterId}
                  onChange={(e) => setForm((p) => ({ ...p, chapterId: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  {chapters.map((c) => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="t-title" className="block text-xs font-medium text-ink-muted mb-1">Topic Title</label>
                <input
                  id="t-title"
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="t-notes" className="block text-xs font-medium text-ink-muted mb-1">Syllabus Scope Notes</label>
                <textarea
                  id="t-notes"
                  rows={2}
                  value={form.syllabusNotes}
                  onChange={(e) => setForm((p) => ({ ...p, syllabusNotes: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors">
                <Plus className="w-3.5 h-3.5" />
                <span>Add Topic</span>
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-7 space-y-4">
          {notice && <SuccessBanner message={notice} />}
          {error && <ErrorState message={error} onRetry={() => void loadData()} />}
          {loading ? (
            <LoadingState label="Loading topics..." />
          ) : topics.length === 0 ? (
            <EmptyState title="No topics created" description="Topics sit under chapters and link directly to study materials and questions." />
          ) : (
            <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
              {topics.map((t) => (
                <div key={t.id} className="p-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-accent-text">{chapters.find((c) => c.id === t.chapterId)?.title || t.chapterId}</div>
                    <div className="text-sm font-semibold text-ink">{t.title}</div>
                  </div>
                  <button
                    type="button"
                    onClick={async () => {
                      await deleteAdminEntity('topics', t.id);
                      setNotice('Topic deleted.');
                      await loadData();
                    }}
                    className="p-2 rounded-lg text-ink-muted hover:text-red-500 hover:bg-red-500/10 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
