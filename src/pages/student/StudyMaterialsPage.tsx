import { useEffect, useMemo, useState } from 'react';
import { Bookmark as BookmarkIcon, CheckCircle2, ExternalLink, FileText, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
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
import {
  Bookmark,
  Chapter,
  MaterialType,
  StudyMaterial,
  Subject,
  Topic,
  Unit,
} from '../../types/academic';

const MATERIAL_FILTERS: { id: 'all' | MaterialType; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'notes', label: 'Class Notes' },
  { id: 'summary', label: 'Quick Revision' },
  { id: 'pyq_analysis', label: 'PYQ Analysis' },
  { id: 'current_affairs', label: 'Current Affairs' },
  { id: 'reference', label: 'References' },
];

const formatMaterialType = (type: MaterialType) => ({
  notes: 'Class Notes',
  summary: 'Quick Revision',
  pyq_analysis: 'PYQ Analysis',
  current_affairs: 'Current Affairs',
  reference: 'Reference Material',
}[type]);

export function StudyMaterialsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [typeFilter, setTypeFilter] = useState<'all' | MaterialType>('all');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [activeTopicId, setActiveTopicId] = useState('');
  const [activeId, setActiveId] = useState('');

  const loadMaterials = async () => {
    if (!firebaseUser) return;
    setLoading(true);
    setError(null);
    try {
      const [mats, subjs, unt, chps, tpcs, bm] = await Promise.all([
        fetchPublishedCollection<StudyMaterial>('studyMaterials'),
        fetchPublishedCollection<Subject>('subjects'),
        fetchPublishedCollection<Unit>('units'),
        fetchPublishedCollection<Chapter>('chapters'),
        fetchPublishedCollection<Topic>('topics'),
        fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid),
      ]);
      setMaterials(mats);
      setSubjects(subjs);
      setUnits(unt);
      setChapters(chps);
      setTopics(tpcs);
      setBookmarks(bm);
      setActiveTopicId((current) => current || tpcs.find((topic) => mats.some((m) => m.topicId === topic.id))?.id || tpcs[0]?.id || '');
      setActiveId((current) => current || mats[0]?.id || '');
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

  const visibleTopics = useMemo(() => {
    const term = search.trim().toLowerCase();
    return [...topics]
      .filter((topic) => subjectFilter === 'all' || topic.subjectId === subjectFilter)
      .filter((topic) => {
        if (!term) return true;
        const chapter = chapters.find((item) => item.id === topic.chapterId);
        const subject = subjects.find((item) => item.id === topic.subjectId);
        const topicMaterials = materials.filter((item) => item.topicId === topic.id);
        return [topic.title, chapter?.title, subject?.title, ...topicMaterials.map((item) => item.title)]
          .some((value) => value?.toLowerCase().includes(term));
      })
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }, [topics, subjectFilter, search, chapters, subjects, materials]);

  const activeTopic = visibleTopics.find((topic) => topic.id === activeTopicId)
    || visibleTopics[0]
    || null;

  const topicMaterials = activeTopic
    ? materials
        .filter((item) => item.topicId === activeTopic.id)
        .filter((item) => typeFilter === 'all' || item.materialType === typeFilter)
        .sort((a, b) => a.title.localeCompare(b.title))
    : [];

  const selected = topicMaterials.find((item) => item.id === activeId) || topicMaterials[0] || null;

  const handleSelectTopic = (topic: Topic) => {
    setActiveTopicId(topic.id);
    const firstMaterial = materials.find((item) =>
      item.topicId === topic.id && (typeFilter === 'all' || item.materialType === typeFilter)
    );
    setActiveId(firstMaterial?.id || '');
  };

  const handleBookmark = async (mat: StudyMaterial) => {
    if (!firebaseUser) return;
    try {
      const subj = subjects.find((s) => s.id === mat.subjectId);
      const res = await toggleBookmark(firebaseUser.uid, 'material', mat.id, mat.title, subj?.title || '');
      setNotice(res.saved ? `Saved "${mat.title}" to bookmarks.` : `Removed "${mat.title}" from bookmarks.`);
      setBookmarks(await fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to update bookmark.');
    }
  };

  const handleMarkCompleted = async (mat: StudyMaterial) => {
    if (!firebaseUser) return;
    try {
      await saveTopicProgress({
        userId: firebaseUser.uid,
        courseId: mat.courseId,
        subjectId: mat.subjectId,
        chapterId: mat.chapterId,
        topicId: mat.topicId,
        materialId: mat.id,
        completionStatus: 'completed',
      });
      setNotice(`Marked "${mat.title}" as completed.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to save learning progress.');
    }
  };

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Study Materials"
      breadcrumb="UK Prep / Student / Topic-wise Learning Library"
    >
      <div className="space-y-6">
        <section className="rounded-2xl border border-edge bg-panel p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent-text">Academic Library</div>
              <h2 className="mt-1 text-xl sm:text-2xl font-bold text-ink">Learn topic by topic</h2>
              <p className="mt-1 max-w-2xl text-sm text-ink-muted">Every resource is organised under its subject, chapter and exact syllabus topic. Choose a topic to view its notes and revision resources.</p>
            </div>
            <Link to={activeTopic ? `/student/practice?topicId=${encodeURIComponent(activeTopic.id)}` : '/student/practice'} className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-ink hover:bg-accent-hover">
              Practise this topic's MCQs
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.55fr)] gap-3">
            <label className="relative block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-faint" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search subject, chapter, topic or material..." className="w-full rounded-lg border border-edge-strong bg-field py-2.5 pl-9 pr-3 text-sm text-ink outline-none focus:ring-2 focus:ring-accent" />
            </label>
            <select value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)} className="w-full rounded-lg border border-edge-strong bg-field px-3 py-2.5 text-sm text-ink outline-none focus:ring-2 focus:ring-accent">
              <option value="all">All Subjects</option>
              {subjects.slice().sort((a, b) => a.title.localeCompare(b.title)).map((subject) => (
                <option key={subject.id} value={subject.id}>{subject.title}</option>
              ))}
            </select>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {MATERIAL_FILTERS.map((filter) => (
              <button key={filter.id} type="button" onClick={() => { setTypeFilter(filter.id); setActiveId(''); }} className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${typeFilter === filter.id ? 'border-accent bg-accent text-accent-ink' : 'border-edge-strong bg-subtle text-ink-muted hover:text-ink'}`}>
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {notice && <SuccessBanner message={notice} />}
        {error && <ErrorState message={error} />}

        {loading ? (
          <LoadingState label="Loading your topic-wise academic library..." />
        ) : topics.length === 0 ? (
          <EmptyState title="Syllabus topics are not published yet" description="Once topics are added to the academic hierarchy, their notes and learning resources will appear here." />
        ) : visibleTopics.length === 0 ? (
          <EmptyState title="No matching topics" description="Try another subject or search phrase." />
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(280px,0.78fr)_minmax(0,1.6fr)] gap-5">
            <aside className="rounded-xl border border-edge bg-panel p-3 sm:p-4 h-fit">
              <div className="flex items-center justify-between px-1 pb-3">
                <h3 className="text-sm font-bold text-ink">Syllabus Topics</h3>
                <span className="text-xs text-ink-faint">{visibleTopics.length} topics</span>
              </div>
              <div className="space-y-2 max-h-[720px] overflow-y-auto pr-1">
                {visibleTopics.map((topic) => {
                  const subject = subjects.find((item) => item.id === topic.subjectId);
                  const chapter = chapters.find((item) => item.id === topic.chapterId);
                  const unit = units.find((item) => item.id === topic.unitId);
                  const count = materials.filter((item) => item.topicId === topic.id).length;
                  const active = activeTopic?.id === topic.id;
                  return (
                    <button key={topic.id} type="button" onClick={() => handleSelectTopic(topic)} className={`w-full rounded-lg border p-3 text-left transition-colors ${active ? 'border-accent bg-accent/10' : 'border-edge bg-subtle hover:border-edge-strong'}`}>
                      <div className="text-[11px] font-medium text-accent-text">{subject?.title || 'Subject'}{chapter ? ` · ${chapter.title}` : ''}</div>
                      <div className="mt-1 flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold text-ink">{topic.title}</span>
                        <span className="shrink-0 rounded-full bg-canvas px-2 py-0.5 text-[10px] text-ink-muted">{count} {count === 1 ? 'resource' : 'resources'}</span>
                      </div>
                      {unit && <div className="mt-1 text-[10px] text-ink-faint">{unit.title}</div>}
                    </button>
                  );
                })}
              </div>
            </aside>

            <section className="min-w-0 space-y-4">
              {activeTopic && (
                <div className="rounded-xl border border-edge bg-panel p-5 sm:p-6 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent-text">
                    {subjects.find((item) => item.id === activeTopic.subjectId)?.title || 'Subject'}
                  </div>
                  <h2 className="mt-1 text-xl font-bold text-ink">{activeTopic.title}</h2>
                  <p className="mt-1 text-xs text-ink-muted">
                    {[units.find((item) => item.id === activeTopic.unitId)?.title, chapters.find((item) => item.id === activeTopic.chapterId)?.title].filter(Boolean).join(' / ')}
                  </p>
                  {activeTopic.syllabusNotes && <p className="mt-3 rounded-lg bg-subtle p-3 text-sm leading-relaxed text-ink-muted">{activeTopic.syllabusNotes}</p>}
                </div>
              )}

              {!activeTopic || topicMaterials.length === 0 ? (
                <EmptyState title="No resources published for this topic yet" description="Notes, revision sheets, PYQ analysis and reference material will appear here as soon as they are published for this exact topic." />
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {topicMaterials.map((item) => (
                      <button key={item.id} type="button" onClick={() => setActiveId(item.id)} className={`rounded-xl border p-4 text-left transition-colors ${selected?.id === item.id ? 'border-accent bg-accent/10' : 'border-edge bg-panel hover:border-edge-strong'}`}>
                        <div className="flex items-center gap-2 text-xs font-semibold text-accent-text"><FileText className="h-4 w-4" />{formatMaterialType(item.materialType)}</div>
                        <div className="mt-2 text-sm font-bold text-ink">{item.title}</div>
                        <div className="mt-1 text-xs text-ink-faint">{item.estimatedMinutes} min read</div>
                      </button>
                    ))}
                  </div>

                  {selected && (
                    <article className="rounded-xl border border-edge bg-panel p-5 sm:p-7 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-edge pb-4">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-accent-text">{formatMaterialType(selected.materialType)} · {selected.estimatedMinutes} min read</div>
                          <h3 className="mt-1 text-xl font-bold text-ink">{selected.title}</h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <button type="button" onClick={() => void handleBookmark(selected)} className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold ${bookmarks.some((b) => b.targetType === 'material' && b.targetId === selected.id) ? 'border-accent bg-accent/10 text-accent-text' : 'border-edge-strong bg-subtle text-ink'}`}>
                            <BookmarkIcon className="h-3.5 w-3.5" /> Save
                          </button>
                          <button type="button" onClick={() => void handleMarkCompleted(selected)} className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-accent-ink hover:bg-accent-hover">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Mark complete
                          </button>
                        </div>
                      </div>
                      <div className="prose prose-slate dark:prose-invert mt-5 max-w-none whitespace-pre-wrap text-sm leading-7 text-ink-muted">
                        {selected.contentMarkdown || 'Written content has not been added to this resource yet.'}
                      </div>
                      {selected.resourceUrl && (
                        <div className="mt-5 border-t border-edge pt-4">
                          <a href={selected.resourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-text hover:underline">
                            Open attached reference <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      )}
                    </article>
                  )}
                </>
              )}
            </section>
          </div>
        )}
      </div>
    </AppShell>
  );
}
