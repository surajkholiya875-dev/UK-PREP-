import React, { useEffect, useState } from 'react';
import { BookPlus, Pencil, Plus, Trash2 } from 'lucide-react';
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
import {
  Course,
  Examination,
  GENERAL_SUBJECT_TAXONOMY,
  Subject,
  SubjectScope,
  UTTARAKHAND_SUBJECT_TAXONOMY,
} from '../../types/academic';

export function AdminSubjectsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [examinations, setExaminations] = useState<Examination[]>([]);
  const [selectedExaminationId, setSelectedExaminationId] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);

  const [form, setForm] = useState({
    courseId: '',
    title: '',
    scope: 'uttarakhand' as SubjectScope,
    description: '',
    sortOrder: 1,
    isPublished: true,
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [subs, crs, exs] = await Promise.all([
        fetchAllAdminCollection<Subject>('subjects'),
        fetchAllAdminCollection<Course>('courses'),
        fetchAllAdminCollection<Examination>('examinations'),
      ]);
      setSubjects(subs.sort((a, b) => a.sortOrder - b.sortOrder));
      setCourses(crs);
      setExaminations(exs);
      if (crs.length > 0 && !form.courseId) {
        setForm((p) => ({ ...p, courseId: crs[0].id }));
        setSelectedExaminationId(crs[0].examinationId);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load subjects.');
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
    if (!firebaseUser || !form.courseId) return;
    const parentCourse = courses.find((c) => c.id === form.courseId);
    if (!parentCourse) return;
    setError(null);
    setNotice(null);
    const id = editingId || generateSafeId('subj');

    try {
      await upsertAdminEntity<Subject>(
        'subjects',
        id,
        {
          id,
          courseId: form.courseId,
          examinationId: parentCourse.examinationId,
          title: clampString(form.title, 160),
          scope: form.scope,
          description: clampString(form.description, 2000),
          sortOrder: Number(form.sortOrder) || 0,
          isPublished: form.isPublished,
          createdBy: firebaseUser.uid,
        },
        Boolean(editingId)
      );
      setNotice(editingId ? 'Subject updated.' : 'Subject created.');
      setEditingId(null);
      setForm((p) => ({ ...p, title: '', description: '' }));
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save subject.');
    }
  };

  const examinationCourses = courses.filter((course) => course.examinationId === selectedExaminationId);
  const visibleSubjects = subjects.filter((subject) => subject.examinationId === selectedExaminationId);

  const taxonomySuggestions =
    form.scope === 'uttarakhand' ? UTTARAKHAND_SUBJECT_TAXONOMY : GENERAL_SUBJECT_TAXONOMY;

  const handleAddPresetSubjects = async () => {
    if (!firebaseUser || !form.courseId) return;
    const parentCourse = courses.find((course) => course.id === form.courseId);
    if (!parentCourse) {
      setError('Select a valid parent course first.');
      return;
    }

    setSeeding(true);
    setError(null);
    setNotice(null);
    try {
      const existingTitles = new Set(
        subjects
          .filter((subject) => subject.courseId === parentCourse.id)
          .map((subject) => subject.title.trim().toLowerCase())
      );
      const missing = GENERAL_SUBJECT_TAXONOMY.filter(
        (title) => !existingTitles.has(title.trim().toLowerCase())
      );

      for (let index = 0; index < missing.length; index += 1) {
        const title = missing[index];
        const id = generateSafeId('subj');
        await upsertAdminEntity<Subject>(
          'subjects',
          id,
          {
            id,
            courseId: parentCourse.id,
            examinationId: parentCourse.examinationId,
            title,
            scope: 'general',
            description: `${title} syllabus area for ${parentCourse.title}. Add verified units, chapters, topics and topic-wise resources before publishing.`,
            sortOrder: subjects.length + index + 1,
            isPublished: true,
            createdBy: firebaseUser.uid,
          },
          false
        );
      }

      setNotice(
        missing.length
          ? `Added and published ${missing.length} General Studies subject presets. Their syllabus sections will appear as you add units, chapters and topics.`
          : 'All General Studies subject presets already exist in the selected course.'
      );
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to add preset subjects.');
    } finally {
      setSeeding(false);
    }
  };

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Subject Management"
      breadcrumb="UK Prep / Admin / Subjects"
      isAdminWorkspace
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-base font-semibold text-ink mb-4">
            {editingId ? 'Edit Subject' : 'Create Subject'}
          </h2>
          {!editingId && courses.length > 0 && (
            <div className="mb-5 rounded-xl border border-edge bg-subtle p-4 space-y-2">
              <div className="text-sm font-semibold text-ink">Build the subject catalogue</div>
              <p className="text-xs leading-relaxed text-ink-muted">
                Add General Studies subject presets to the selected course, including Indian History, Indian Economy, Environment, Indian Society and Ethics. They will appear in the student syllabus immediately. Add verified units, chapters and topics to fill each subject's syllabus.
              </p>
              <button type="button" disabled={seeding || !form.courseId} onClick={() => void handleAddPresetSubjects()} className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-accent-ink hover:bg-accent-hover disabled:opacity-60">
                <BookPlus className="h-4 w-4" /> {seeding ? 'Adding subjects...' : `Add ${taxonomySuggestions.length} preset subjects`}
              </button>
            </div>
          )}
          {courses.length === 0 ? (
            <p className="text-xs text-accent-text">
              Create a Course first before adding Subjects.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="subj-examination" className="block text-xs font-medium text-ink-muted mb-1">Examination Body</label>
                <select id="subj-examination" required value={selectedExaminationId} onChange={(e) => {
                  const nextExamId = e.target.value;
                  const nextCourse = courses.find((course) => course.examinationId === nextExamId);
                  setSelectedExaminationId(nextExamId);
                  setForm((p) => ({ ...p, courseId: nextCourse?.id || '' }));
                }} className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink">
                  <option value="">Choose examination body...</option>
                  {examinations.filter((exam) => courses.some((course) => course.examinationId === exam.id)).map((exam) => <option key={exam.id} value={exam.id}>{exam.title} ({exam.category})</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="subj-course" className="block text-xs font-medium text-ink-muted mb-1">
                  Parent Course
                </label>
                <select
                  id="subj-course"
                  required
                  value={form.courseId}
                  onChange={(e) => setForm((p) => ({ ...p, courseId: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  {examinationCourses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subj-scope" className="block text-xs font-medium text-ink-muted mb-1">
                  Syllabus Scope
                </label>
                <select
                  id="subj-scope"
                  value={form.scope}
                  onChange={(e) => setForm((p) => ({ ...p, scope: e.target.value as SubjectScope }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="uttarakhand">Uttarakhand-Specific Subject</option>
                  <option value="general">General Competitive Subject</option>
                </select>
              </div>

              <div>
                <label htmlFor="subj-template" className="block text-xs font-medium text-ink-muted mb-1">
                  Standard Syllabus Subject Preset (Optional)
                </label>
                <select
                  id="subj-template"
                  value=""
                  onChange={(e) => {
                    if (e.target.value) setForm((p) => ({ ...p, title: e.target.value }));
                  }}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-edge-strong bg-subtle text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Choose standard subject name...</option>
                  {taxonomySuggestions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subj-title" className="block text-xs font-medium text-ink-muted mb-1">
                  Subject Title
                </label>
                <input
                  id="subj-title"
                  type="text"
                  required
                  minLength={2}
                  maxLength={160}
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="subj-desc" className="block text-xs font-medium text-ink-muted mb-1">
                  Description
                </label>
                <textarea
                  id="subj-desc"
                  rows={2}
                  maxLength={2000}
                  value={form.description}
                  onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
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
                  <span>{editingId ? 'Update Subject' : 'Create Subject'}</span>
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
            <LoadingState label="Loading subjects..." />
          ) : visibleSubjects.length === 0 ? (
            <EmptyState
              title="No subjects created"
              description="No subjects exist for the selected examination body yet. Choose its course and add subjects."
            />
          ) : (
            <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
              {visibleSubjects.map((s) => {
                const crs = courses.find((c) => c.id === s.courseId);
                return (
                  <div key={s.id} className="p-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono text-accent-text">
                        {crs?.title || s.courseId} · {s.scope === 'uttarakhand' ? 'Uttarakhand' : 'General'} ·{' '}
                        {s.isPublished ? 'Published' : 'Draft'}
                      </div>
                      <h3 className="mt-1 text-sm font-semibold text-ink">
                        {s.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingId(s.id);
                          setForm({
                            courseId: s.courseId,
                            title: s.title,
                            scope: s.scope,
                            description: s.description || '',
                            sortOrder: s.sortOrder,
                            isPublished: s.isPublished,
                          });
                        }}
                        className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          await deleteAdminEntity('subjects', s.id);
                          setNotice('Subject deleted.');
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
