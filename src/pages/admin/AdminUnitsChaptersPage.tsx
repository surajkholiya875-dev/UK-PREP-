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
import { Chapter, Subject, Unit } from '../../types/academic';

export function AdminUnitsChaptersPage() {
  const { firebaseUser } = useAuth();
  const [tab, setTab] = useState<'units' | 'chapters'>('units');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const [unitForm, setUnitForm] = useState({ subjectId: '', title: '', description: '', sortOrder: 1, isPublished: true });
  const [chapterForm, setChapterForm] = useState({ unitId: '', title: '', summary: '', sortOrder: 1, isPublished: true });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [subjs, unts, chaps] = await Promise.all([
        fetchAllAdminCollection<Subject>('subjects'),
        fetchAllAdminCollection<Unit>('units'),
        fetchAllAdminCollection<Chapter>('chapters'),
      ]);
      setSubjects(subjs);
      setUnits(unts.sort((a, b) => a.sortOrder - b.sortOrder));
      setChapters(chaps.sort((a, b) => a.sortOrder - b.sortOrder));
      if (subjs.length > 0 && !unitForm.subjectId) setUnitForm((p) => ({ ...p, subjectId: subjs[0].id }));
      if (unts.length > 0 && !chapterForm.unitId) setChapterForm((p) => ({ ...p, unitId: unts[0].id }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load units and chapters.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateUnit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !unitForm.subjectId) return;
    const subj = subjects.find((s) => s.id === unitForm.subjectId);
    if (!subj) return;
    const id = generateSafeId('unit');
    try {
      await upsertAdminEntity<Unit>(
        'units',
        id,
        {
          id,
          subjectId: subj.id,
          courseId: subj.courseId,
          title: clampString(unitForm.title, 180),
          description: clampString(unitForm.description, 1500),
          sortOrder: Number(unitForm.sortOrder) || 0,
          isPublished: unitForm.isPublished,
          createdBy: firebaseUser.uid,
        },
        false
      );
      setNotice('Unit created.');
      setUnitForm((p) => ({ ...p, title: '', description: '' }));
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create unit.');
    }
  };

  const handleCreateChapter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser || !chapterForm.unitId) return;
    const unit = units.find((u) => u.id === chapterForm.unitId);
    if (!unit) return;
    const id = generateSafeId('chap');
    try {
      await upsertAdminEntity<Chapter>(
        'chapters',
        id,
        {
          id,
          unitId: unit.id,
          subjectId: unit.subjectId,
          courseId: unit.courseId,
          title: clampString(chapterForm.title, 180),
          summary: clampString(chapterForm.summary, 2000),
          sortOrder: Number(chapterForm.sortOrder) || 0,
          isPublished: chapterForm.isPublished,
          createdBy: firebaseUser.uid,
        },
        false
      );
      setNotice('Chapter created.');
      setChapterForm((p) => ({ ...p, title: '', summary: '' }));
      await loadData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create chapter.');
    }
  };

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Units & Chapters"
      breadcrumb="UK Prep / Admin / Units & Chapters"
      isAdminWorkspace
    >
      <div className="space-y-6">
        <div className="inline-flex p-1 bg-field border border-edge rounded-lg">
          <button
            type="button"
            onClick={() => setTab('units')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              tab === 'units'
                ? 'bg-accent text-accent-ink shadow-sm'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Units ({units.length})
          </button>
          <button
            type="button"
            onClick={() => setTab('chapters')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              tab === 'chapters'
                ? 'bg-accent text-accent-ink shadow-sm'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Chapters ({chapters.length})
          </button>
        </div>

        {notice && <SuccessBanner message={notice} />}
        {error && <ErrorState message={error} onRetry={() => void loadData()} />}

        {loading ? (
          <LoadingState label="Loading units and chapters..." />
        ) : tab === 'units' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
              <h2 className="text-base font-semibold text-ink mb-4">Create Unit</h2>
              {subjects.length === 0 ? (
                <p className="text-xs text-accent-text">Create a Subject first.</p>
              ) : (
                <form onSubmit={handleCreateUnit} className="space-y-4">
                  <div>
                    <label htmlFor="u-subj" className="block text-xs font-medium text-ink-muted mb-1">Parent Subject</label>
                    <select
                      id="u-subj"
                      value={unitForm.subjectId}
                      onChange={(e) => setUnitForm((p) => ({ ...p, subjectId: e.target.value }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    >
                      {subjects.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="u-title" className="block text-xs font-medium text-ink-muted mb-1">Unit Title</label>
                    <input
                      id="u-title"
                      type="text"
                      required
                      value={unitForm.title}
                      onChange={(e) => setUnitForm((p) => ({ ...p, title: e.target.value }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Unit</span>
                  </button>
                </form>
              )}
            </div>
            <div className="lg:col-span-7">
              {units.length === 0 ? (
                <EmptyState title="No units yet" description="Units group related chapters inside a subject." />
              ) : (
                <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
                  {units.map((u) => (
                    <div key={u.id} className="p-4 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-mono text-accent-text">{subjects.find((s) => s.id === u.subjectId)?.title || u.subjectId}</div>
                        <div className="text-sm font-semibold text-ink">{u.title}</div>
                      </div>
                      <button
                        type="button"
                        onClick={async () => {
                          await deleteAdminEntity('units', u.id);
                          setNotice('Unit removed.');
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
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-panel border border-edge rounded-xl p-6 shadow-sm h-fit">
              <h2 className="text-base font-semibold text-ink mb-4">Create Chapter</h2>
              {units.length === 0 ? (
                <p className="text-xs text-accent-text">Create a Unit first.</p>
              ) : (
                <form onSubmit={handleCreateChapter} className="space-y-4">
                  <div>
                    <label htmlFor="c-unit" className="block text-xs font-medium text-ink-muted mb-1">Parent Unit</label>
                    <select
                      id="c-unit"
                      value={chapterForm.unitId}
                      onChange={(e) => setChapterForm((p) => ({ ...p, unitId: e.target.value }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    >
                      {units.map((u) => (
                        <option key={u.id} value={u.id}>{u.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="c-title" className="block text-xs font-medium text-ink-muted mb-1">Chapter Title</label>
                    <input
                      id="c-title"
                      type="text"
                      required
                      value={chapterForm.title}
                      onChange={(e) => setChapterForm((p) => ({ ...p, title: e.target.value }))}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Chapter</span>
                  </button>
                </form>
              )}
            </div>
            <div className="lg:col-span-7">
              {chapters.length === 0 ? (
                <EmptyState title="No chapters yet" description="Chapters break down syllabus units into focused topics." />
              ) : (
                <div className="bg-panel border border-edge rounded-xl shadow-sm divide-y divide-edge">
                  {chapters.map((c) => (
                    <div key={c.id} className="p-4 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-mono text-accent-text">{units.find((u) => u.id === c.unitId)?.title || c.unitId}</div>
                        <div className="text-sm font-semibold text-ink">{c.title}</div>
                      </div>
                      <button
                        type="button"
                        onClick={async () => {
                          await deleteAdminEntity('chapters', c.id);
                          setNotice('Chapter removed.');
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
        )}
      </div>
    </AppShell>
  );
}
