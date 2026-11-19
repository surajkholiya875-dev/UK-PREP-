import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, FileText, BookOpen } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchPublishedCollection, fetchStudentOwned, saveTopicProgress, toggleBookmark } from '../../services/firestoreService';
import { Bookmark, Chapter, StudyMaterial, Subject, Topic, Unit } from '../../types/academic';

interface PracticeQuestion {
  id: string; topicId: string; subjectId: string; questionType: 'mcq' | 'pyq' | 'current_affairs';
  stem: string; options: string[]; difficulty: string; examYear?: number;
}
interface Feedback { selectedIndex: number; correctOptionIndex: number; correct: boolean; explanation: string; }

const materialLabel: Record<string, string> = {
  notes: 'Complete Notes', summary: 'Revision Sheet', pyq_analysis: 'PYQ Analysis',
  current_affairs: 'Current Affairs', reference: 'Reference Material',
};

export function stripEditorialFooter(content: string): string {
  const footerMarkers = [/^##\s+Sources\s*$/im, /^##\s+Legal accuracy note\s*$/im];
  const positions = footerMarkers.map(marker => content.search(marker)).filter(position => position >= 0);
  return positions.length ? content.slice(0, Math.min(...positions)).trimEnd() : content.trimEnd();
}

export function StudyMaterialsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [questionError, setQuestionError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [feedback, setFeedback] = useState<Record<string, Feedback>>({});
  const [checkingId, setCheckingId] = useState<string | null>(null);
  const [questionReload, setQuestionReload] = useState(0);
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [activeTopicId, setActiveTopicId] = useState('');
  const [contentTab, setContentTab] = useState<'notes' | 'mcq' | 'pyq' | 'resources'>('notes');

  const loadLibrary = async () => {
    if (!firebaseUser) return;
    setLoading(true); setError(null);
    try {
      const [mats, subjs, unt, chps, tpcs, saved] = await Promise.all([
        fetchPublishedCollection<StudyMaterial>('studyMaterials'),
        fetchPublishedCollection<Subject>('subjects'),
        fetchPublishedCollection<Unit>('units'),
        fetchPublishedCollection<Chapter>('chapters'),
        fetchPublishedCollection<Topic>('topics'),
        fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid),
      ]);
      setMaterials(mats); setSubjects(subjs); setUnits(unt); setChapters(chps); setTopics(tpcs); setBookmarks(saved);
      setActiveTopicId(current => current || tpcs[0]?.id || '');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unable to load the topic library.');
    } finally { setLoading(false); }
  };

  useEffect(() => { void loadLibrary(); }, [firebaseUser?.uid]);

  const visibleTopics = useMemo(() => {
    const term = search.trim().toLowerCase();
    return topics.filter(t => subjectFilter === 'all' || t.subjectId === subjectFilter)
      .filter(t => {
        if (!term) return true;
        const subject = subjects.find(s => s.id === t.subjectId);
        const chapter = chapters.find(c => c.id === t.chapterId);
        return [t.title, subject?.title, chapter?.title].some(v => v?.toLowerCase().includes(term));
      }).sort((a,b) => a.sortOrder - b.sortOrder);
  }, [topics, subjectFilter, search, subjects, chapters]);

  const activeTopic = visibleTopics.find(t => t.id === activeTopicId) || visibleTopics[0] || null;
  const topicMaterials = activeTopic ? materials.filter(m => m.topicId === activeTopic.id) : [];
  const notes = topicMaterials.filter(m => m.materialType === 'notes');
  const resources = topicMaterials.filter(m => m.materialType !== 'notes');

  useEffect(() => {
    let cancelled = false;
    const loadQuestions = async () => {
      if (!firebaseUser || !activeTopic || (contentTab !== 'mcq' && contentTab !== 'pyq')) { setQuestions([]); return; }
      setQuestionError(null); setFeedback({});
      try {
        const token = await firebaseUser.getIdToken();
        const response = await fetch('/api/student/questions?topicId=' + encodeURIComponent(activeTopic.id) + '&questionType=' + contentTab, {
          headers: { Authorization: 'Bearer ' + token },
        });
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.error || 'Topic questions could not be loaded.');
        if (!cancelled) setQuestions(Array.isArray(payload.questions) ? payload.questions : []);
      } catch (e) {
        if (!cancelled) { setQuestions([]); setQuestionError(e instanceof Error ? e.message : 'Topic questions could not be loaded.'); }
      }
    };
    void loadQuestions();
    return () => { cancelled = true; };
  }, [firebaseUser?.uid, activeTopic?.id, contentTab, questionReload]);

  const answerQuestion = async (q: PracticeQuestion, optionIndex: number) => {
    if (!firebaseUser || feedback[q.id]) return;
    setCheckingId(q.id);
    try {
      const token = await firebaseUser.getIdToken();
      const response = await fetch('/api/student/questions/' + encodeURIComponent(q.id) + '/answer', {
        method: 'POST', headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ optionIndex }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Answer check failed.');
      setFeedback(prev => ({ ...prev, [q.id]: { selectedIndex: optionIndex, correctOptionIndex: result.correctOptionIndex, correct: Boolean(result.correct), explanation: result.explanation || '' } }));
    } catch (e) {
      setQuestionError(e instanceof Error ? e.message : 'Answer check failed.');
    } finally { setCheckingId(null); }
  };

  const bookmarkTopic = async () => {
    if (!firebaseUser || !activeTopic) return;
    const subject = subjects.find(s => s.id === activeTopic.subjectId);
    try {
      const result = await toggleBookmark(firebaseUser.uid, 'topic', activeTopic.id, activeTopic.title, subject?.title || '');
      setNotice(result.saved ? 'Topic saved to bookmarks.' : 'Topic removed from bookmarks.');
      setBookmarks(await fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid));
    } catch (e) { setError(e instanceof Error ? e.message : 'Could not update bookmark.'); }
  };

  const markComplete = async () => {
    if (!firebaseUser || !activeTopic) return;
    try {
      await saveTopicProgress({ userId: firebaseUser.uid, courseId: activeTopic.courseId, subjectId: activeTopic.subjectId, chapterId: activeTopic.chapterId, topicId: activeTopic.id, completionStatus: 'completed' });
      setNotice('Topic marked as completed.');
    } catch (e) { setError(e instanceof Error ? e.message : 'Could not save progress.'); }
  };

  return (
    <AppShell workspaceTitle="Student LMS" navItems={STUDENT_NAV_ITEMS} pageTitle="Topic-wise Study" breadcrumb="UK Prep / Student / Learning Library">
      <div className="space-y-5">
        {notice && <SuccessBanner message={notice} />}
        {error && <ErrorState message={error} onRetry={() => void loadLibrary()} />}
        {loading ? <LoadingState label="Loading subjects and topics..." /> : topics.length === 0 ? (
          <EmptyState title="No published topics yet" description="Published subjects, units, chapters and topics will appear here." />
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-[300px_minmax(0,1fr)] gap-5">
            <aside className="rounded-2xl border border-edge bg-panel p-4 h-fit">
              <div className="flex items-center gap-2 mb-3"><BookOpen className="h-4 w-4 text-accent-text"/><h2 className="font-bold text-ink">Syllabus</h2></div>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search topics..." className="w-full rounded-lg border border-edge-strong bg-field px-3 py-2 text-sm text-ink mb-3"/>
              <select value={subjectFilter} onChange={e => setSubjectFilter(e.target.value)} className="w-full rounded-lg border border-edge-strong bg-field px-3 py-2 text-sm text-ink mb-3">
                <option value="all">All subjects</option>{subjects.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
              </select>
              <div className="space-y-2 max-h-[70vh] overflow-y-auto">
                {visibleTopics.map(topic => {
                  const subject = subjects.find(s => s.id === topic.subjectId);
                  const chapter = chapters.find(c => c.id === topic.chapterId);
                  const unit = units.find(u => u.id === topic.unitId);
                  const active = activeTopic?.id === topic.id;
                  return <button key={topic.id} onClick={() => { setActiveTopicId(topic.id); setContentTab('notes'); }} className={'w-full rounded-xl border p-3 text-left transition ' + (active ? 'border-amber-400 bg-amber-400/10' : 'border-edge bg-subtle hover:border-amber-400/60')}>
                    <div className="text-[11px] text-amber-600 dark:text-amber-300">{subject?.title || 'Subject'}{chapter ? ' · ' + chapter.title : ''}</div>
                    <div className={'mt-1 text-sm font-semibold ' + (active ? 'text-amber-700 dark:text-amber-200' : 'text-ink')}>{topic.title}</div>
                    {unit && <div className="mt-1 text-[10px] text-ink-faint">{unit.title}</div>}
                  </button>;
                })}
              </div>
            </aside>

            {!activeTopic ? <EmptyState title="Select a topic" description="Choose a topic from the syllabus."/> : (
              <main className="min-w-0 space-y-4">
                <header className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#17243a] via-[#1c2d46] to-[#263a55] p-6 sm:p-8 shadow-lg">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{subjects.find(s => s.id === activeTopic.subjectId)?.title || 'Subject'}</div>
                  <h1 className="mt-3 font-serif text-3xl sm:text-4xl font-bold leading-tight text-amber-100">{activeTopic.title}</h1>
                  <p className="mt-2 text-sm text-slate-300">{[units.find(u => u.id === activeTopic.unitId)?.title, chapters.find(c => c.id === activeTopic.chapterId)?.title].filter(Boolean).join(' / ')}</p>
                  {activeTopic.syllabusNotes && <p className="mt-4 max-w-3xl border-l-2 border-amber-400 pl-4 text-sm leading-7 text-slate-200">{activeTopic.syllabusNotes}</p>}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <button onClick={() => void bookmarkTopic()} className="rounded-lg border border-amber-300/40 px-3 py-2 text-xs font-semibold text-amber-100">{bookmarks.some(b => b.targetType === 'topic' && b.targetId === activeTopic.id) ? 'Saved topic' : 'Bookmark topic'}</button>
                    <button onClick={() => void markComplete()} className="rounded-lg bg-amber-400 px-3 py-2 text-xs font-bold text-slate-950"><CheckCircle2 className="inline h-4 w-4 mr-1"/>Mark complete</button>
                  </div>
                </header>

                <nav className="flex flex-wrap gap-2" aria-label="Topic learning sections">
                  {([{id:'notes',label:'Complete Notes'},{id:'mcq',label:'MCQs'},{id:'pyq',label:'PYQs'},{id:'resources',label:'Study Resources'}] as const).map(tab => <button key={tab.id} onClick={() => setContentTab(tab.id)} className={'rounded-full border px-4 py-2 text-sm font-semibold ' + (contentTab === tab.id ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-edge bg-panel text-ink-muted hover:border-amber-400/60')}>{tab.label}</button>)}
                </nav>

                {contentTab === 'notes' && (notes.length === 0 ? <EmptyState title="Complete notes are not published yet" description="This topic has no full notes yet. The topic remains visible, but no shortened or invented notes are shown."/> : (
                  <div className="space-y-4">{notes.map(note => <article key={note.id} className="rounded-2xl border border-amber-500/20 bg-panel p-5 sm:p-8">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-300"><FileText className="h-4 w-4"/>{materialLabel[note.materialType] || 'Study Material'} · {note.estimatedMinutes} min read</div>
                    <h2 className="mt-2 font-serif text-2xl font-bold text-ink">{note.title}</h2>
                    <div className="mt-5 max-w-none whitespace-pre-wrap break-words font-serif text-[15px] leading-8 text-ink">{stripEditorialFooter(note.contentMarkdown || 'Complete notes have not been added for this topic yet.')}</div>
                    {note.resourceUrl && <a className="mt-5 inline-flex items-center text-sm font-semibold text-amber-600 hover:underline" href={note.resourceUrl} target="_blank" rel="noreferrer">Open source reference</a>}
                  </article>)}</div>
                ))}

                {(contentTab === 'mcq' || contentTab === 'pyq') && (questionError ? <ErrorState message={questionError} onRetry={() => setQuestionReload(value => value + 1)}/> : questions.length === 0 ? <EmptyState title={contentTab === 'mcq' ? 'No MCQs for this topic yet' : 'No PYQs for this topic yet'} description={contentTab === 'mcq' ? 'MCQs assigned to this exact topic will appear here after they are published.' : 'Previous-year questions assigned to this exact topic will appear here after they are published.'}/> : (
                  <div className="space-y-4">{questions.map((q,index) => { const answer = feedback[q.id]; return <article key={q.id} className="rounded-2xl border border-edge bg-panel p-5 space-y-4">
                    <div className="text-xs font-semibold text-amber-600 dark:text-amber-300">{contentTab === 'mcq' ? 'MCQ' : 'Previous Year Question'} {index+1}{q.examYear ? ' · '+q.examYear : ''} · {q.difficulty}</div>
                    <h3 className="font-semibold leading-7 text-ink">{q.stem}</h3>
                    <div className="grid gap-2 sm:grid-cols-2">{q.options.map((option,i) => <button key={i} disabled={Boolean(answer) || checkingId === q.id} onClick={() => void answerQuestion(q,i)} className={'rounded-lg border p-3 text-left text-sm ' + (answer?.correctOptionIndex === i ? 'border-emerald-500 bg-emerald-500/10 text-ink' : answer?.selectedIndex === i ? 'border-red-500 bg-red-500/10 text-ink' : 'border-edge-strong bg-field text-ink')}>{String.fromCharCode(65+i)}. {option}</button>)}</div>
                    {answer && <div className="rounded-lg bg-subtle p-4 text-sm text-ink"><strong>{answer.correct ? 'Correct' : 'Incorrect'}</strong>{answer.explanation && <p className="mt-2 leading-7">{answer.explanation}</p>}</div>}
                  </article>; })}</div>
                ))}

                {contentTab === 'resources' && (resources.length === 0 ? <EmptyState title="No supplementary resources" description="Only additional revision sheets, PYQ analysis and references assigned to this topic will appear here."/> : (
                  <div className="space-y-3">{resources.map(item => <article key={item.id} className="rounded-xl border border-edge bg-panel p-5">
                    <div className="text-xs font-semibold text-amber-600 dark:text-amber-300">{materialLabel[item.materialType] || 'Study Resource'}</div>
                    <h3 className="mt-1 text-lg font-bold text-ink">{item.title}</h3>
                    <div className="mt-3 whitespace-pre-wrap leading-7 text-sm text-ink">{item.contentMarkdown || 'No written content has been added.'}</div>
                    {item.resourceUrl && <a href={item.resourceUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-amber-600 hover:underline">Open reference</a>}
                  </article>)}</div>
                ))}
              </main>
            )}
          </div>
        )}
      </div>
    </AppShell>
  );
}
