import { useEffect, useState } from 'react';
import { Bookmark as BookmarkIcon, CheckCircle2, ExternalLink } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  fetchPublishedCollection,
  fetchStudentOwned,
  saveTopicProgress,
  toggleBookmark,
} from '../../services/firestoreService';
import { Bookmark, MaterialType, StudyMaterial, Subject } from '../../types/academic';

export function StudyMaterialsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [typeFilter, setTypeFilter] = useState<'all' | MaterialType>('all');
  const [activeId, setActiveId] = useState<string>('');

  const loadMaterials = async () => {
    if (!firebaseUser) return;
    setLoading(true);
    setError(null);
    try {
      const [mats, subjs, bm] = await Promise.all([
        fetchPublishedCollection<StudyMaterial>('studyMaterials'),
        fetchPublishedCollection<Subject>('subjects'),
        fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid),
      ]);
      setMaterials(mats);
      setSubjects(subjs);
      setBookmarks(bm);
      if (mats.length > 0 && !activeId) setActiveId(mats[0].id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load study materials.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadMaterials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.uid]);

  const filtered = materials.filter((m) => typeFilter === 'all' || m.materialType === typeFilter);
  const selected = filtered.find((m) => m.id === activeId) || filtered[0] || null;

  const handleBookmark = async (mat: StudyMaterial) => {
    if (!firebaseUser) return;
    const subj = subjects.find((s) => s.id === mat.subjectId);
    const res = await toggleBookmark(
      firebaseUser.uid,
      'material',
      mat.id,
      mat.title,
      subj?.title || ''
    );
    setNotice(res.saved ? `Saved "${mat.title}" to bookmarks.` : `Removed "${mat.title}" from bookmarks.`);
    setBookmarks(await fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid));
  };

  const handleMarkCompleted = async (mat: StudyMaterial) => {
    if (!firebaseUser) return;
    await saveTopicProgress({
      userId: firebaseUser.uid,
      courseId: mat.courseId,
      subjectId: mat.subjectId,
      chapterId: mat.chapterId,
      topicId: mat.topicId,
      materialId: mat.id,
      completionStatus: 'completed',
    });
    setNotice(`Marked "${mat.title}" topic as completed.`);
  };

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Study Materials"
      breadcrumb="UK Prep / Student / Study Materials"
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-1 p-1 bg-field border border-edge rounded-lg self-start w-fit">
          {(
            [
              { id: 'all', label: 'All Materials' },
              { id: 'notes', label: 'Notes' },
              { id: 'summary', label: 'Summaries' },
              { id: 'pyq_analysis', label: 'PYQ Analysis' },
              { id: 'current_affairs', label: 'Current Affairs' },
              { id: 'reference', label: 'References' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setTypeFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                typeFilter === tab.id
                  ? 'bg-accent text-accent-ink font-semibold shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {notice && <SuccessBanner message={notice} />}

        {loading ? (
          <LoadingState label="Loading study materials..." />
        ) : error ? (
          <ErrorState message={error} onRetry={() => void loadMaterials()} />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No published study materials"
            description="Curated notes, chapter summaries, and reference materials published by faculty administrators will appear here."
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-2">
              {filtered.map((item) => {
                const subj = subjects.find((s) => s.id === item.subjectId);
                const isActive = selected?.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-colors shadow-sm ${
                      isActive
                        ? 'bg-panel border-accent'
                        : 'bg-panel border-edge hover:border-edge-strong'
                    }`}
                  >
                    <div className="text-xs text-ink-faint">
                      {subj?.title || 'Subject'} · {item.estimatedMinutes} min
                    </div>
                    <div className="mt-1 text-sm font-semibold text-ink">
                      {item.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {selected && (
              <div className="lg:col-span-8 bg-panel border border-edge rounded-xl p-6 space-y-5 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-edge">
                  <div>
                    <div className="text-xs font-mono text-accent-text">
                      {selected.materialType.replace('_', ' ')} · {selected.estimatedMinutes} min read
                    </div>
                    <h2 className="mt-1 text-xl font-bold text-ink">
                      {selected.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => void handleBookmark(selected)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                        bookmarks.some((b) => b.targetType === 'material' && b.targetId === selected.id)
                          ? 'border-accent bg-accent/15 text-accent-text'
                          : 'border-edge-strong bg-subtle text-ink hover:bg-canvas'
                      }`}
                    >
                      <BookmarkIcon className="w-3.5 h-3.5" />
                      <span>Bookmark</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => void handleMarkCompleted(selected)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Mark Completed</span>
                    </button>
                  </div>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed whitespace-pre-wrap text-ink-muted">
                  {selected.contentMarkdown || 'No written notes attached to this material yet.'}
                </div>

                {selected.resourceUrl && (
                  <div className="pt-4 border-t border-edge">
                    <a
                      href={selected.resourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:text-accent-hover hover:underline"
                    >
                      <span>Open External Reference Document</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </AppShell>
  );
}
