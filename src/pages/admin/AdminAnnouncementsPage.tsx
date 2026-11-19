import React, { useEffect, useState } from 'react';
import { serverTimestamp } from 'firebase/firestore';
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
import { Announcement, AnnouncementCategory } from '../../types/academic';

export function AdminAnnouncementsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [items, setItems] = useState<Announcement[]>([]);
  const [form, setForm] = useState({
    title: '',
    body: '',
    category: 'exam_notice' as AnnouncementCategory,
    isPinned: false,
    isPublished: true,
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      setItems(await fetchAllAdminCollection<Announcement>('announcements'));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load announcements.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser) return;
    const id = generateSafeId('ann');
    try {
      await upsertAdminEntity<Announcement>(
        'announcements',
        id,
        {
          id,
          title: clampString(form.title, 200),
          body: clampString(form.body, 5000),
          category: form.category,
          examinationId: '',
          isPinned: form.isPinned,
          isPublished: form.isPublished,
          publishedAt: serverTimestamp(),
          createdBy: firebaseUser.uid,
        },
        false
      );
      setNotice('Announcement published.');
      setForm((p) => ({ ...p, title: '', body: '', isPinned: false }));
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to publish announcement.');
    }
  };

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Announcements"
      breadcrumb="UK Prep / Admin / Announcements"
      isAdminWorkspace
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-base font-semibold text-ink mb-4">Publish Announcement</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="ann-title" className="block text-xs font-medium text-ink-muted mb-1">Title</label>
              <input
                id="ann-title"
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="ann-cat" className="block text-xs font-medium text-ink-muted mb-1">Category</label>
              <select
                id="ann-cat"
                value={form.category}
                onChange={(e) => setForm((p) => ({ ...p, category: e.target.value as AnnouncementCategory }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              >
                <option value="exam_notice">Exam Notice</option>
                <option value="syllabus">Syllabus Update</option>
                <option value="current_affairs">Current Affairs</option>
                <option value="platform">Platform</option>
              </select>
            </div>
            <div>
              <label htmlFor="ann-body" className="block text-xs font-medium text-ink-muted mb-1">Message Body</label>
              <textarea
                id="ann-body"
                rows={4}
                required
                value={form.body}
                onChange={(e) => setForm((p) => ({ ...p, body: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-ink">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={form.isPinned} onChange={(e) => setForm((p) => ({ ...p, isPinned: e.target.checked }))} className="accent-accent" />
                <span>Pin Notice</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={form.isPublished} onChange={(e) => setForm((p) => ({ ...p, isPublished: e.target.checked }))} className="accent-accent" />
                <span>Published</span>
              </label>
            </div>
            <button type="submit" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors">
              <Plus className="w-3.5 h-3.5" />
              <span>Publish Announcement</span>
            </button>
          </form>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {notice && <SuccessBanner message={notice} />}
          {error && <ErrorState message={error} onRetry={() => void loadData()} />}
          {loading ? (
            <LoadingState label="Loading announcements..." />
          ) : items.length === 0 ? (
            <EmptyState title="No announcements" description="Create exam notifications, syllabus notices, and platform updates here." />
          ) : (
            <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
              {items.map((item) => (
                <div key={item.id} className="p-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono uppercase text-accent-text">
                      {item.category.replace('_', ' ')} {item.isPinned ? '· PINNED' : ''}
                    </div>
                    <h3 className="mt-1 text-sm font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-xs text-ink-muted">{item.body}</p>
                  </div>
                  <button
                    type="button"
                    onClick={async () => {
                      await deleteAdminEntity('announcements', item.id);
                      setNotice('Announcement deleted.');
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
