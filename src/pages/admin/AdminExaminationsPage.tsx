import React, { useEffect, useState } from 'react';
import { Pencil, Plus, Trash2 } from 'lucide-react';
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
import { ExamCategory, Examination } from '../../types/academic';

export function AdminExaminationsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [items, setItems] = useState<Examination[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: '',
    code: '',
    category: 'UKPSC' as ExamCategory,
    description: '',
    eligibilitySummary: '',
    sortOrder: 1,
    isPublished: true,
  });

  const loadItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllAdminCollection<Examination>('examinations');
      setItems(data.sort((a, b) => a.sortOrder - b.sortOrder));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load examinations.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadItems();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setForm({
      title: '',
      code: '',
      category: 'UKPSC',
      description: '',
      eligibilitySummary: '',
      sortOrder: items.length + 1,
      isPublished: true,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser) return;
    setError(null);
    setNotice(null);
    const id = editingId || generateSafeId('exam');
    try {
      await upsertAdminEntity<Examination>(
        'examinations',
        id,
        {
          id,
          title: clampString(form.title, 160),
          code: clampString(form.code, 40),
          category: form.category,
          description: clampString(form.description, 2000),
          eligibilitySummary: clampString(form.eligibilitySummary, 1000),
          sortOrder: Number(form.sortOrder) || 0,
          isPublished: form.isPublished,
          createdBy: firebaseUser.uid,
        },
        Boolean(editingId)
      );
      setNotice(editingId ? 'Examination updated.' : 'Examination created.');
      resetForm();
      await loadItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save examination.');
    }
  };

  const handleEdit = (exam: Examination) => {
    setEditingId(exam.id);
    setForm({
      title: exam.title,
      code: exam.code,
      category: exam.category,
      description: exam.description || '',
      eligibilitySummary: exam.eligibilitySummary || '',
      sortOrder: exam.sortOrder,
      isPublished: exam.isPublished,
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteAdminEntity('examinations', id);
      setNotice('Examination removed.');
      await loadItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete examination.');
    }
  };

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Examination Management"
      breadcrumb="UK Prep / Admin / Examinations"
      isAdminWorkspace
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-base font-semibold text-ink mb-4">
            {editingId ? 'Edit Examination' : 'Create Examination'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="exam-title" className="block text-xs font-medium text-ink-muted mb-1">
                Examination Title
              </label>
              <input
                id="exam-title"
                type="text"
                required
                minLength={2}
                maxLength={160}
                value={form.title}
                onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                placeholder="e.g., UKPSC Combined State Civil Services"
                className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="exam-code" className="block text-xs font-medium text-ink-muted mb-1">
                  Code
                </label>
                <input
                  id="exam-code"
                  type="text"
                  required
                  minLength={2}
                  maxLength={40}
                  value={form.code}
                  onChange={(e) => setForm((p) => ({ ...p, code: e.target.value }))}
                  placeholder="UKPSC-PCS"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent font-mono"
                />
              </div>

              <div>
                <label htmlFor="exam-category" className="block text-xs font-medium text-ink-muted mb-1">
                  Category
                </label>
                <select
                  id="exam-category"
                  value={form.category}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, category: e.target.value as ExamCategory }))
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="UKPSC">UKPSC</option>
                  <option value="UKSSSC">UKSSSC</option>
                  <option value="UPSC">UPSC</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="exam-desc" className="block text-xs font-medium text-ink-muted mb-1">
                Description
              </label>
              <textarea
                id="exam-desc"
                rows={3}
                maxLength={2000}
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 items-center">
              <div>
                <label htmlFor="exam-order" className="block text-xs font-medium text-ink-muted mb-1">
                  Sort Order
                </label>
                <input
                  id="exam-order"
                  type="number"
                  min={0}
                  max={10000}
                  value={form.sortOrder}
                  onChange={(e) => setForm((p) => ({ ...p, sortOrder: Number(e.target.value) }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent font-mono"
                />
              </div>
              <label className="flex items-center gap-2 text-xs font-medium text-ink pt-5">
                <input
                  type="checkbox"
                  checked={form.isPublished}
                  onChange={(e) => setForm((p) => ({ ...p, isPublished: e.target.checked }))}
                  className="accent-accent"
                />
                <span>Published to Students</span>
              </label>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{editingId ? 'Update Examination' : 'Create Examination'}</span>
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-3 py-2 text-xs font-medium rounded-lg border border-edge-strong bg-subtle text-ink hover:bg-canvas transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {notice && <SuccessBanner message={notice} />}
          {error && <ErrorState message={error} onRetry={() => void loadItems()} />}

          {loading ? (
            <LoadingState label="Loading examinations..." />
          ) : items.length === 0 ? (
            <EmptyState
              title="No examinations configured"
              description="Create your first examination category (e.g. UKPSC, UKSSSC, UPSC) using the form to start building courses."
            />
          ) : (
            <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
              {items.map((item) => (
                <div key={item.id} className="p-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-accent-text">
                      {item.category} · {item.code} · {item.isPublished ? 'Published' : 'Draft'}
                    </div>
                    <h3 className="mt-1 text-sm font-semibold text-ink">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-1 text-xs text-ink-muted">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleEdit(item)}
                      aria-label={`Edit ${item.title}`}
                      className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => void handleDelete(item.id)}
                      aria-label={`Delete ${item.title}`}
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
