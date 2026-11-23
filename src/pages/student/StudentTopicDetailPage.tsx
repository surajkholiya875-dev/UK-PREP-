import { useCallback, useEffect, useMemo, useState } from 'react';
import { BookOpen, CheckCircle2, FileText } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { findSubjectGroupByParam, resolveCanonicalSubjectDefinition } from '../../lib/syllabusHierarchy';
import {
  fetchPublishedCollection,
  fetchStudentOwned,
  saveTopicProgress,
  toggleBookmark,
} from '../../services/firestoreService';
import {
  Bookmark,
  Chapter,
  LearningProgress,
  StudyMaterial,
  Subject,
  Topic,
  Unit,
} from '../../types/academic';

interface PracticeQuestion {
  id: string;
  topicId: string;
  subjectId: string;
  questionType: 'mcq' | 'pyq' | 'current_affairs';
  stem: string;
  options: string[];
  difficulty: string;
  examYear?: number;
}

interface AnswerFeedback {
  selectedIndex: number;
  correctOptionIndex: number;
  correct: boolean;
  explanation: string;
}

const MATERIAL_LABELS: Record<string, string> = {
  notes: 'Complete Notes',
  summary: 'Revision Sheet',
  pyq_analysis: 'PYQ Analysis',
  current_affairs: 'Current Affairs',
  reference: 'Reference Material',
};

const MATERIAL_ORDER: Record<string, number> = {
  notes: 0,
  summary: 1,
  pyq_analysis: 2,
  current_affairs: 3,
  reference: 4,
};

function stripEditorialFooter(content: string): string {
  const footerMarkers = [/^##\s+Sources\s*$/im, /^##\s+Legal accuracy note\s*$/im];
  const positions = footerMarkers
    .map((marker) => content.search(marker))
    .filter((position) => position >= 0);
  return positions.length ? content.slice(0, Math.min(...positions)).trimEnd() : content.trimEnd();
}

export function StudentTopicDetailPage() {
  const { subjectId, topicId } = useParams<{ subjectId?: string; topicId: string }>();
  const { firebaseUser } = useAuth();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [topic, setTopic] = useState<Topic | null>(null);
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [subjectTitle, setSubjectTitle] = useState<string>('Subject');
  const [resolvedSubject, setResolvedSubject] = useState<Subject | null>(null);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [progress, setProgress] = useState<LearningProgress | null>(null);

  const [activeTab, setActiveTab] = useState<'content' | 'mcq' | 'pyq'>('content');
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [questionError, setQuestionError] = useState<string | null>(null);
  const [questionReload, setQuestionReload] = useState(0);
  const [feedback, setFeedback] = useState<Record<string, AnswerFeedback>>({});
  const [checkingId, setCheckingId] = useState<string | null>(null);

  const loadTopicData = useCallback(async () => {
    if (!firebaseUser || !topicId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const [allTopics, allChapters, allUnits, allSubjects, allMaterials, savedBookmarks, userProgress] =
        await Promise.all([
          fetchPublishedCollection<Topic>('topics'),
          fetchPublishedCollection<Chapter>('chapters'),
          fetchPublishedCollection<Unit>('units'),
          fetchPublishedCollection<Subject>('subjects'),
          fetchPublishedCollection<StudyMaterial>('studyMaterials'),
          fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid),
          fetchStudentOwned<LearningProgress>('learningProgress', firebaseUser.uid),
        ]);

      const foundTopic = allTopics.find((item) => item.id === topicId) ?? null;
      setTopic(foundTopic);

      if (!foundTopic) {
        setChapter(null);
        setResolvedSubject(null);
        setMaterials([]);
        return;
      }

      const foundChapter =
        (foundTopic.chapterId && allChapters.find((item) => item.id === foundTopic.chapterId)) ||
        null;
      setChapter(foundChapter);

      const foundUnit =
        (foundTopic.unitId && allUnits.find((item) => item.id === foundTopic.unitId)) ||
        (foundChapter?.unitId && allUnits.find((item) => item.id === foundChapter.unitId)) ||
        null;

      const groupFromRoute = subjectId ? findSubjectGroupByParam(allSubjects, subjectId) : null;
      const directSubject =
        allSubjects.find((item) => item.id === foundTopic.subjectId) ||
        (foundChapter?.subjectId
          ? allSubjects.find((item) => item.id === foundChapter.subjectId)
          : undefined) ||
        (foundUnit?.subjectId ? allSubjects.find((item) => item.id === foundUnit.subjectId) : undefined) ||
        groupFromRoute?.primarySubject ||
        null;
      setResolvedSubject(directSubject);

      const canonicalFromDirect = directSubject
        ? resolveCanonicalSubjectDefinition(directSubject.title)?.title || directSubject.title
        : null;
      setSubjectTitle(groupFromRoute?.title || canonicalFromDirect || 'Subject');

      const topicMaterials = allMaterials
        .filter((item) => item.topicId === foundTopic.id)
        .sort(
          (a, b) =>
            (MATERIAL_ORDER[a.materialType] ?? 99) - (MATERIAL_ORDER[b.materialType] ?? 99) ||
            a.title.localeCompare(b.title)
        );
      setMaterials(topicMaterials);
      setBookmarks(savedBookmarks);
      setProgress(userProgress.find((item) => item.topicId === foundTopic.id) ?? null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load topic content.');
    } finally {
      setLoading(false);
    }
  }, [firebaseUser?.uid, subjectId, topicId]);

  useEffect(() => {
    void loadTopicData();
  }, [loadTopicData]);

  useEffect(() => {
    let cancelled = false;
    const loadQuestions = async () => {
      if (!firebaseUser || !topic || (activeTab !== 'mcq' && activeTab !== 'pyq')) {
        setQuestions([]);
        return;
      }
      setQuestionError(null);
      setFeedback({});
      try {
        const token = await firebaseUser.getIdToken();
        const response = await fetch(
          `/api/student/questions?topicId=${encodeURIComponent(topic.id)}&questionType=${activeTab}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.error || 'Topic questions could not be loaded.');
        if (!cancelled) {
          setQuestions(Array.isArray(payload.questions) ? payload.questions : []);
        }
      } catch (err) {
        if (!cancelled) {
          setQuestions([]);
          setQuestionError(err instanceof Error ? err.message : 'Topic questions could not be loaded.');
        }
      }
    };
    void loadQuestions();
    return () => {
      cancelled = true;
    };
  }, [firebaseUser?.uid, topic?.id, activeTab, questionReload]);

  const uniqueQuestions = useMemo(() => {
    const seen = new Set<string>();
    return questions.filter((question) => {
      const normalize = (value: string) =>
        value
          .normalize('NFKC')
          .toLowerCase()
          .replace(/[’‘]/g, "'")
          .replace(/[^\p{L}\p{N}]+/gu, ' ')
          .trim();
      const key = `${normalize(question.stem)}|${question.options.map(normalize).sort().join('|')}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [questions]);

  const handleAnswer = async (question: PracticeQuestion, optionIndex: number) => {
    if (!firebaseUser || feedback[question.id]) return;
    setCheckingId(question.id);
    setQuestionError(null);
    try {
      const token = await firebaseUser.getIdToken();
      const response = await fetch(`/api/student/questions/${encodeURIComponent(question.id)}/answer`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ optionIndex }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Answer check failed.');
      setFeedback((prev) => ({
        ...prev,
        [question.id]: {
          selectedIndex: optionIndex,
          correctOptionIndex: result.correctOptionIndex,
          correct: Boolean(result.correct),
          explanation: typeof result.explanation === 'string' ? result.explanation : '',
        },
      }));
    } catch (err) {
      setQuestionError(err instanceof Error ? err.message : 'Answer check failed.');
    } finally {
      setCheckingId(null);
    }
  };

  const handleBookmark = async () => {
    if (!firebaseUser || !topic) return;
    try {
      const result = await toggleBookmark(
        firebaseUser.uid,
        'topic',
        topic.id,
        topic.title,
        subjectTitle
      );
      setNotice(result.saved ? 'Topic saved to bookmarks.' : 'Topic removed from bookmarks.');
      setBookmarks(await fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not update bookmark.');
    }
  };

  const handleMarkComplete = async () => {
    if (!firebaseUser || !topic) return;
    const effectiveSubjectId = topic.subjectId || chapter?.subjectId || resolvedSubject?.id || '';
    const effectiveCourseId = topic.courseId || chapter?.courseId || resolvedSubject?.courseId || '';
    const effectiveChapterId = topic.chapterId || chapter?.id || '';
    if (!effectiveSubjectId || !effectiveCourseId || !effectiveChapterId) {
      setError('This topic is missing required course or chapter links to record progress.');
      return;
    }
    try {
      await saveTopicProgress({
        userId: firebaseUser.uid,
        courseId: effectiveCourseId,
        subjectId: effectiveSubjectId,
        chapterId: effectiveChapterId,
        topicId: topic.id,
        materialId: materials[0]?.id,
        completionStatus: 'completed',
      });
      setProgress((prev) =>
        prev
          ? { ...prev, completionStatus: 'completed' }
          : {
              id: `${firebaseUser.uid}_${topic.id}`,
              userId: firebaseUser.uid,
              courseId: effectiveCourseId,
              subjectId: effectiveSubjectId,
              chapterId: effectiveChapterId,
              topicId: topic.id,
              completionStatus: 'completed',
              lastAccessedAt: null,
              updatedAt: null,
            }
      );
      setNotice('Topic marked as completed.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save topic progress.');
    }
  };

  const backHref = subjectId
    ? `/student/syllabus/${encodeURIComponent(subjectId)}`
    : '/student/topics';
  const backLabel = subjectId ? `← Back to ${subjectTitle}` : '← Back to Topics';

  const isBookmarked = Boolean(
    topic && bookmarks.some((item) => item.targetType === 'topic' && item.targetId === topic.id)
  );
  const isCompleted = progress?.completionStatus === 'completed';

  const showChapterSubtitle =
    Boolean(chapter?.title) &&
    chapter!.title.trim().toLowerCase() !== (topic?.title ?? '').trim().toLowerCase();

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle={topic?.title || 'Topic Content'}
      breadcrumb={`UK Prep / Student / ${subjectTitle}`}
    >
      <div className="space-y-5">
        <div>
          <Link to={backHref} className="text-sm font-medium text-ink-muted hover:text-ink">
            {backLabel}
          </Link>
        </div>

        {notice && <SuccessBanner message={notice} />}

        {loading ? (
          <LoadingState label="Loading topic study material..." />
        ) : error ? (
          <ErrorState message={error} onRetry={() => void loadTopicData()} />
        ) : !topic ? (
          <EmptyState
            title="Topic not found"
            description="This topic may not be published or may no longer be available."
          />
        ) : (
          <>
            <header className="rounded-2xl border border-accent/30 bg-panel p-6 sm:p-8 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-text">
                {subjectTitle}
                {showChapterSubtitle ? ` · ${chapter!.title}` : ''}
              </div>
              <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-ink">{topic.title}</h1>
              {topic.syllabusNotes && (
                <p className="mt-3 max-w-3xl border-l-2 border-accent pl-4 text-sm leading-7 text-ink-muted">
                  {topic.syllabusNotes}
                </p>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => void handleBookmark()}
                  className="rounded-lg border border-edge-strong bg-subtle px-3.5 py-2 text-xs font-semibold text-ink hover:border-accent transition-colors"
                >
                  {isBookmarked ? 'Saved in Bookmarks' : 'Bookmark Topic'}
                </button>
                <button
                  type="button"
                  onClick={() => void handleMarkComplete()}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                    isCompleted
                      ? 'border border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                      : 'bg-accent text-accent-ink hover:bg-accent-hover'
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
                </button>
              </div>
            </header>

            <nav className="flex flex-wrap gap-2" aria-label="Topic sections">
              {(
                [
                  { id: 'content', label: `Study Material (${materials.length})` },
                  { id: 'mcq', label: 'Practice MCQs' },
                  { id: 'pyq', label: 'Previous Year Questions' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'border-accent bg-accent text-accent-ink'
                      : 'border-edge bg-panel text-ink-muted hover:border-accent/60 hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {activeTab === 'content' &&
              (materials.length === 0 ? (
                <EmptyState
                  title="Study material not published yet"
                  description="Published notes, revision sheets, and references assigned to this topic will appear here."
                />
              ) : (
                <div className="space-y-4">
                  {materials.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-2xl border border-edge bg-panel p-5 sm:p-8 shadow-sm"
                    >
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-text">
                        {item.materialType === 'notes' ? (
                          <BookOpen className="h-4 w-4" />
                        ) : (
                          <FileText className="h-4 w-4" />
                        )}
                        <span>{MATERIAL_LABELS[item.materialType] || 'Study Material'}</span>
                        <span>· {item.estimatedMinutes} min read</span>
                      </div>
                      <h2 className="mt-2 text-xl sm:text-2xl font-bold text-ink">{item.title}</h2>
                      {item.contentMarkdown ? (
                        <div className="mt-4 max-w-none whitespace-pre-wrap break-words text-[15px] leading-8 text-ink">
                          {stripEditorialFooter(item.contentMarkdown)}
                        </div>
                      ) : (
                        <p className="mt-4 text-sm text-ink-muted">
                          No written notes body has been added to this item yet.
                        </p>
                      )}
                      {item.resourceUrl && (
                        <a
                          href={item.resourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex items-center text-sm font-semibold text-accent-text hover:underline"
                        >
                          Open source reference →
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              ))}

            {(activeTab === 'mcq' || activeTab === 'pyq') &&
              (questionError ? (
                <ErrorState
                  message={questionError}
                  onRetry={() => setQuestionReload((value) => value + 1)}
                />
              ) : uniqueQuestions.length === 0 ? (
                <EmptyState
                  title={
                    activeTab === 'mcq'
                      ? 'No MCQs published for this topic yet'
                      : 'No PYQs published for this topic yet'
                  }
                  description="Published questions assigned to this topic will appear here."
                />
              ) : (
                <div className="space-y-4">
                  {uniqueQuestions.map((question, index) => {
                    const answer = feedback[question.id];
                    return (
                      <article
                        key={question.id}
                        className="rounded-2xl border border-edge bg-panel p-5 space-y-4 shadow-sm"
                      >
                        <div className="text-xs font-semibold text-accent-text">
                          {activeTab === 'mcq' ? 'MCQ' : 'Previous Year Question'} {index + 1}
                          {question.examYear ? ` · ${question.examYear}` : ''} · {question.difficulty}
                        </div>
                        <h3 className="font-semibold leading-7 text-ink">{question.stem}</h3>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {question.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              type="button"
                              disabled={Boolean(answer) || checkingId === question.id}
                              onClick={() => void handleAnswer(question, optionIndex)}
                              className={`rounded-lg border p-3 text-left text-sm transition-colors ${
                                answer?.correctOptionIndex === optionIndex
                                  ? 'border-emerald-500 bg-emerald-500/10 text-ink'
                                  : answer?.selectedIndex === optionIndex
                                    ? 'border-red-500 bg-red-500/10 text-ink'
                                    : 'border-edge-strong bg-field text-ink hover:bg-subtle'
                              }`}
                            >
                              {String.fromCharCode(65 + optionIndex)}. {option}
                            </button>
                          ))}
                        </div>
                        {answer && (
                          <div className="rounded-lg bg-subtle p-4 text-sm text-ink">
                            <strong>{answer.correct ? 'Correct' : 'Incorrect'}</strong>
                            {answer.explanation && (
                              <p className="mt-2 leading-7 text-ink-muted">{answer.explanation}</p>
                            )}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              ))}
          </>
        )}
      </div>
    </AppShell>
  );
}
