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
import { CurrentAffairsEntry, CurrentAffairsScope } from '../../types/academic';

export function AdminCurrentAffairsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [items, setItems] = useState<CurrentAffairsEntry[]>([]);
  const [form, setForm] = useState({
    title: '',
    summary: '',
    scope: 'uttarakhand' as CurrentAffairsScope,
    eventDate: new Date().toISOString().slice(0, 10),
    subjectTag: '',
    isPublished: true,
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      setItems(await fetchAllAdminCollection<CurrentAffairsEntry>('currentAffairs'));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load current affairs.');
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
    const id = generateSafeId('ca');
    try {
      await upsertAdminEntity<CurrentAffairsEntry>(
        'currentAffairs',
        id,
        {
          id,
          title: clampString(form.title, 200),
          summary: clampString(form.summary, 6000),
          scope: form.scope,
          eventDate: clampString(form.eventDate, 20),
          subjectTag: clampString(form.subjectTag, 120),
          isPublished: form.isPublished,
          createdBy: firebaseUser.uid,
        },
        false
      );
      setNotice('Current affairs brief saved.');
      setForm((p) => ({ ...p, title: '', summary: '', subjectTag: '' }));
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save current affairs brief.');
    }
  };

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Current Affairs Management"
      breadcrumb="UK Prep / Admin / Current Affairs"
      isAdminWorkspace
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-base font-semibold text-ink mb-4">Publish Current Affairs Brief</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="ca-title" className="block text-xs font-medium text-ink-muted mb-1">Headline</label>
              <input
                id="ca-title"
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="ca-scope" className="block text-xs font-medium text-ink-muted mb-1">Scope</label>
                <select
                  id="ca-scope"
                  value={form.scope}
                  onChange={(e) => setForm((p) => ({ ...p, scope: e.target.value as CurrentAffairsScope }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="uttarakhand">Uttarakhand</option>
                  <option value="national">National</option>
                  <option value="international">International</option>
                </select>
              </div>
              <div>
                <label htmlFor="ca-date" className="block text-xs font-medium text-ink-muted mb-1">Event Date</label>
                <input
                  id="ca-date"
                  type="date"
                  required
                  value={form.eventDate}
                  onChange={(e) => setForm((p) => ({ ...p, eventDate: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent font-mono"
                />
              </div>
            </div>
            <div>
              <label htmlFor="ca-tag" className="block text-xs font-medium text-ink-muted mb-1">Subject Link</label>
              <input
                id="ca-tag"
                type="text"
                placeholder="e.g. Environment & Ecology"
                value={form.subjectTag}
                onChange={(e) => setForm((p) => ({ ...p, subjectTag: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="ca-summary" className="block text-xs font-medium text-ink-muted mb-1">Editorial Summary</label>
              <textarea
                id="ca-summary"
                rows={4}
                required
                value={form.summary}
                onChange={(e) => setForm((p) => ({ ...p, summary: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
            <button type="submit" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors">
              <Plus className="w-3.5 h-3.5" />
              <span>Save Entry</span>
            </button>
          </form>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {notice && <SuccessBanner message={notice} />}
          {error && <ErrorState message={error} onRetry={() => void loadData()} />}
          {loading ? (
            <LoadingState label="Loading current affairs..." />
          ) : items.length === 0 ? (
            <EmptyState title="No current affairs entries" description="Publish Uttarakhand state and national current affairs briefs here." />
          ) : (
            <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
              {items.map((item) => (
                <div key={item.id} className="p-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-accent-text">
                      {item.scope.toUpperCase()} · {item.eventDate} {item.subjectTag ? `· ${item.subjectTag}` : ''}
                    </div>
                    <h3 className="mt-1 text-sm font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-xs text-ink-muted">{item.summary}</p>
                  </div>
                  <button
                    type="button"
                    onClick={async () => {
                      await deleteAdminEntity('currentAffairs', item.id);
                      setNotice('Current affairs entry deleted.');
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
