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
import { Course, CourseLanguage, CourseLevel, Examination } from '../../types/academic';

export function AdminCoursesPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [exams, setExams] = useState<Examination[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState({
    examinationId: '',
    title: '',
    slug: '',
    summary: '',
    level: 'Integrated' as CourseLevel,
    language: 'Bilingual' as CourseLanguage,
    sortOrder: 1,
    isPublished: true,
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [crs, exms] = await Promise.all([
        fetchAllAdminCollection<Course>('courses'),
        fetchAllAdminCollection<Examination>('examinations'),
      ]);
      setCourses(crs.sort((a, b) => a.sortOrder - b.sortOrder));
      setExams(exms);
      if (exms.length > 0 && !form.examinationId) {
        setForm((p) => ({ ...p, examinationId: exms[0].id }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load courses.');
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
    if (!firebaseUser || !form.examinationId) return;
    setError(null);
    setNotice(null);
    const id = editingId || generateSafeId('crs');
    const slug =
      form.slug.trim() ||
      form.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

    try {
      await upsertAdminEntity<Course>(
        'courses',
        id,
        {
          id,
          examinationId: form.examinationId,
          title: clampString(form.title, 180),
          slug: clampString(slug, 128),
          summary: clampString(form.summary, 2500),
          level: form.level,
          language: form.language,
          sortOrder: Number(form.sortOrder) || 0,
          isPublished: form.isPublished,
          createdBy: firebaseUser.uid,
        },
        Boolean(editingId)
      );
      setNotice(editingId ? 'Course updated.' : 'Course created.');
      setEditingId(null);
      setForm((p) => ({ ...p, title: '', slug: '', summary: '' }));
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save course.');
    }
  };

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Course Catalogue Management"
      breadcrumb="UK Prep / Admin / Courses"
      isAdminWorkspace
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-base font-semibold text-ink mb-4">
            {editingId ? 'Edit Course' : 'Create Course'}
          </h2>
          {exams.length === 0 ? (
            <p className="text-xs text-accent-text">
              Please create an Examination first before creating a Course.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="crs-exam" className="block text-xs font-medium text-ink-muted mb-1">
                  Parent Examination
                </label>
                <select
                  id="crs-exam"
                  required
                  value={form.examinationId}
                  onChange={(e) => setForm((p) => ({ ...p, examinationId: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  {exams.map((ex) => (
                    <option key={ex.id} value={ex.id}>
                      {ex.code} — {ex.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="crs-title" className="block text-xs font-medium text-ink-muted mb-1">
                  Course Title
                </label>
                <input
                  id="crs-title"
                  type="text"
                  required
                  minLength={2}
                  maxLength={180}
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="crs-level" className="block text-xs font-medium text-ink-muted mb-1">
                    Level
                  </label>
                  <select
                    id="crs-level"
                    value={form.level}
                    onChange={(e) => setForm((p) => ({ ...p, level: e.target.value as CourseLevel }))}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="Prelims">Prelims</option>
                    <option value="Mains">Mains</option>
                    <option value="Integrated">Integrated</option>
                    <option value="Foundation">Foundation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="crs-lang" className="block text-xs font-medium text-ink-muted mb-1">
                    Language
                  </label>
                  <select
                    id="crs-lang"
                    value={form.language}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, language: e.target.value as CourseLanguage }))
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Bilingual">Bilingual</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="crs-summary" className="block text-xs font-medium text-ink-muted mb-1">
                  Summary
                </label>
                <textarea
                  id="crs-summary"
                  rows={3}
                  maxLength={2500}
                  value={form.summary}
                  onChange={(e) => setForm((p) => ({ ...p, summary: e.target.value }))}
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
                  <span>{editingId ? 'Update Course' : 'Create Course'}</span>
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
          {error && <ErrorState message={error} onRetry={() => void loadData()} />}

          {loading ? (
            <LoadingState label="Loading courses..." />
          ) : courses.length === 0 ? (
            <EmptyState
              title="No courses created yet"
              description="Create courses linked to an Examination category to organize subjects and study materials."
            />
          ) : (
            <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
              {courses.map((c) => {
                const ex = exams.find((e) => e.id === c.examinationId);
                return (
                  <div key={c.id} className="p-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono text-accent-text">
                        {ex?.code || c.examinationId} · {c.level} · {c.language} ·{' '}
                        {c.isPublished ? 'Published' : 'Draft'}
                      </div>
                      <h3 className="mt-1 text-sm font-semibold text-ink">
                        {c.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingId(c.id);
                          setForm({
                            examinationId: c.examinationId,
                            title: c.title,
                            slug: c.slug,
                            summary: c.summary || '',
                            level: c.level,
                            language: c.language,
                            sortOrder: c.sortOrder,
                            isPublished: c.isPublished,
                          });
                        }}
                        className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          await deleteAdminEntity('courses', c.id);
                          setNotice('Course deleted.');
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
