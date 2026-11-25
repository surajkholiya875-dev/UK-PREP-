import { useCallback, useEffect, useMemo, useState } from 'react';
import { BookOpen, CheckCircle2, ClipboardCheck, Clock, FileText, RotateCcw } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { AppShell } from '../../components/ui/AppShell';
import { MarkdownContent } from '../../components/ui/MarkdownContent';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { TestReviewSection } from '../../components/ui/TestReviewSection';
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
  TestAttempt,
  TestAttemptReviewItem,
  TestPaper,
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
  examName?: string;
  examYear?: number;
}

interface AnswerFeedback {
  selectedIndex: number;
  correctOptionIndex: number;
  correct: boolean;
  explanation: string;
}

interface SafeAssessmentQuestion {
  id: string;
  stem: string;
  options: string[];
}

interface SubmittedAssessmentResult {
  testTitle: string;
  totalMarks: number;
  score: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  expired?: boolean;
  durationSeconds: number;
  review: TestAttemptReviewItem[];
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

function isSafeHttpUrl(url: string | undefined): url is string {
  if (!url) return false;
  return /^https?:\/\//i.test(url.trim());
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
  const [topicTests, setTopicTests] = useState<TestPaper[]>([]);
  const [pastAttempts, setPastAttempts] = useState<TestAttempt[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [progress, setProgress] = useState<LearningProgress | null>(null);

  const [activeTab, setActiveTab] = useState<'content' | 'mcq' | 'pyq' | 'assessment'>('content');
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [questionLoading, setQuestionLoading] = useState(false);
  const [questionError, setQuestionError] = useState<string | null>(null);
  const [questionReload, setQuestionReload] = useState(0);
  const [feedback, setFeedback] = useState<Record<string, AnswerFeedback>>({});
  const [questionFilter, setQuestionFilter] = useState<'all' | 'incorrect'>('all');
  const [checkingId, setCheckingId] = useState<string | null>(null);

  // Inline Practice Assessment runner state
  const [activeAssessment, setActiveAssessment] = useState<TestPaper | null>(null);
  const [assessmentAttemptId, setAssessmentAttemptId] = useState<string | null>(null);
  const [assessmentQuestions, setAssessmentQuestions] = useState<SafeAssessmentQuestion[]>([]);
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<string, number>>({});
  const [assessmentElapsed, setAssessmentElapsed] = useState(0);
  const [assessmentStarting, setAssessmentStarting] = useState(false);
  const [assessmentSubmitting, setAssessmentSubmitting] = useState(false);
  const [assessmentError, setAssessmentError] = useState<string | null>(null);
  const [assessmentResult, setAssessmentResult] = useState<SubmittedAssessmentResult | null>(null);
  const [expandedPastAttemptId, setExpandedPastAttemptId] = useState<string | null>(null);

  const loadTopicData = useCallback(async () => {
    if (!firebaseUser || !topicId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const [
        allTopics,
        allChapters,
        allUnits,
        allSubjects,
        allMaterials,
        allTests,
        userAttempts,
        savedBookmarks,
        userProgress,
      ] = await Promise.all([
        fetchPublishedCollection<Topic>('topics'),
        fetchPublishedCollection<Chapter>('chapters'),
        fetchPublishedCollection<Unit>('units'),
        fetchPublishedCollection<Subject>('subjects'),
        fetchPublishedCollection<StudyMaterial>('studyMaterials'),
        fetchPublishedCollection<TestPaper>('tests'),
        fetchStudentOwned<TestAttempt>('testAttempts', firebaseUser.uid),
        fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid),
        fetchStudentOwned<LearningProgress>('learningProgress', firebaseUser.uid),
      ]);

      const foundTopic = allTopics.find((item) => item.id === topicId) ?? null;
      setTopic(foundTopic);

      if (!foundTopic) {
        setChapter(null);
        setResolvedSubject(null);
        setMaterials([]);
        setTopicTests([]);
        setPastAttempts([]);
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

      const linkedTests = allTests.filter((item) => item.topicId === foundTopic.id);
      setTopicTests(linkedTests);
      const linkedTestIds = new Set(linkedTests.map((t) => t.id));
      setPastAttempts(
        userAttempts.filter(
          (att) => att.status === 'submitted' && (att.topicId === foundTopic.id || linkedTestIds.has(att.testId))
        )
      );

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
    setActiveAssessment(null);
    setAssessmentAttemptId(null);
    setAssessmentResult(null);
    setAssessmentError(null);
  }, [loadTopicData]);

  useEffect(() => {
    let cancelled = false;
    const loadQuestions = async () => {
      if (!firebaseUser || !topic || (activeTab !== 'mcq' && activeTab !== 'pyq')) {
        setQuestions([]);
        setQuestionLoading(false);
        return;
      }
      setQuestionLoading(true);
      setQuestionError(null);
      setFeedback({});
      setQuestionFilter('all');
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
      } finally {
        if (!cancelled) setQuestionLoading(false);
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

  const practiceStats = useMemo(() => {
    let answered = 0;
    let correct = 0;
    let incorrect = 0;
    for (const q of uniqueQuestions) {
      const fb = feedback[q.id];
      if (!fb) continue;
      answered += 1;
      if (fb.correct) correct += 1;
      else incorrect += 1;
    }
    return { answered, correct, incorrect };
  }, [uniqueQuestions, feedback]);

  const displayedQuestions = useMemo(() => {
    if (questionFilter === 'incorrect') {
      return uniqueQuestions.filter((q) => feedback[q.id] && !feedback[q.id].correct);
    }
    return uniqueQuestions;
  }, [uniqueQuestions, feedback, questionFilter]);

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

  // Practice Assessment handlers
  const handleStartAssessment = async (testPaper: TestPaper) => {
    if (!firebaseUser || assessmentStarting) return;
    setAssessmentStarting(true);
    setAssessmentError(null);
    setAssessmentResult(null);
    try {
      const token = await firebaseUser.getIdToken();
      const response = await fetch(`/api/student/tests/${encodeURIComponent(testPaper.id)}/start`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'Could not start practice assessment.');
      setActiveAssessment(testPaper);
      setAssessmentAttemptId(data.attemptId);
      setAssessmentQuestions(Array.isArray(data.questions) ? data.questions : []);
      setAssessmentAnswers({});
      setAssessmentElapsed(0);
    } catch (err) {
      setAssessmentError(err instanceof Error ? err.message : 'Could not start practice assessment.');
    } finally {
      setAssessmentStarting(false);
    }
  };

  const handleSubmitAssessment = useCallback(async () => {
    if (!firebaseUser || !assessmentAttemptId || !activeAssessment || assessmentSubmitting) return;
    setAssessmentSubmitting(true);
    setAssessmentError(null);
    try {
      const token = await firebaseUser.getIdToken();
      const response = await fetch(
        `/api/student/tests/attempts/${encodeURIComponent(assessmentAttemptId)}/submit`,
        {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: assessmentAnswers }),
        }
      );
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'Failed to submit assessment.');
      setAssessmentResult({
        testTitle: activeAssessment.title,
        totalMarks: Number(data.totalMarks) || activeAssessment.totalMarks,
        score: Number(data.score) || 0,
        correct: Number(data.correct) || 0,
        incorrect: Number(data.incorrect) || 0,
        unanswered: Number(data.unanswered) || 0,
        expired: Boolean(data.expired),
        durationSeconds: Number(data.durationSeconds) || assessmentElapsed,
        review: Array.isArray(data.review) ? (data.review as TestAttemptReviewItem[]) : [],
      });
      setAssessmentAttemptId(null);
      // Refresh private attempt history list silently
      if (topic) {
        const attempts = await fetchStudentOwned<TestAttempt>('testAttempts', firebaseUser.uid);
        const linkedIds = new Set(topicTests.map((t) => t.id));
        setPastAttempts(
          attempts.filter(
            (att) => att.status === 'submitted' && (att.topicId === topic.id || linkedIds.has(att.testId))
          )
        );
      }
    } catch (err) {
      setAssessmentError(err instanceof Error ? err.message : 'Failed to submit assessment.');
    } finally {
      setAssessmentSubmitting(false);
    }
  }, [
    firebaseUser,
    assessmentAttemptId,
    activeAssessment,
    assessmentSubmitting,
    assessmentAnswers,
    assessmentElapsed,
    topic,
    topicTests,
  ]);

  const assessmentTimeLimitSeconds = Math.max(60, Number(activeAssessment?.durationMinutes || 1) * 60);

  useEffect(() => {
    if (!assessmentAttemptId || assessmentResult) return;
    const timer = window.setInterval(() => setAssessmentElapsed((s) => s + 1), 1000);
    return () => window.clearInterval(timer);
  }, [assessmentAttemptId, assessmentResult]);

  useEffect(() => {
    if (
      assessmentAttemptId &&
      !assessmentResult &&
      !assessmentSubmitting &&
      assessmentElapsed >= assessmentTimeLimitSeconds
    ) {
      void handleSubmitAssessment();
    }
  }, [
    assessmentAttemptId,
    assessmentResult,
    assessmentSubmitting,
    assessmentElapsed,
    assessmentTimeLimitSeconds,
    handleSubmitAssessment,
  ]);

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

  const formatClock = (secs: number) =>
    `${String(Math.floor(secs / 60)).padStart(2, '0')}:${String(secs % 60).padStart(2, '0')}`;

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
                  { id: 'mcq', label: 'MCQs' },
                  { id: 'pyq', label: 'PYQs' },
                  { id: 'assessment', label: `Practice Assessment (${topicTests.length})` },
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
                        <div className="mt-4">
                          <MarkdownContent content={stripEditorialFooter(item.contentMarkdown)} />
                        </div>
                      ) : (
                        <p className="mt-4 text-sm text-ink-muted">
                          No written notes body has been added to this item yet.
                        </p>
                      )}
                      {isSafeHttpUrl(item.resourceUrl) && (
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
              (questionLoading ? (
                <LoadingState
                  label={
                    activeTab === 'mcq'
                      ? 'Loading topic practice MCQs...'
                      : 'Checking verified previous-year questions...'
                  }
                />
              ) : questionError ? (
                <ErrorState
                  message={questionError}
                  onRetry={() => setQuestionReload((value) => value + 1)}
                />
              ) : uniqueQuestions.length === 0 ? (
                <EmptyState
                  title={
                    activeTab === 'mcq'
                      ? 'No MCQs published for this topic yet'
                      : 'Verified PYQs not added yet'
                  }
                  description={
                    activeTab === 'mcq'
                      ? 'Published practice MCQs assigned to this topic will appear here.'
                      : 'Only previous-year questions whose exact question stem, exam name, and year are verified from official papers are published here.'
                  }
                />
              ) : (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-edge bg-panel px-4 py-3 text-xs">
                    <div className="flex flex-wrap items-center gap-3 font-mono text-ink-muted">
                      <span>Total: {uniqueQuestions.length}</span>
                      <span>Answered: {practiceStats.answered}</span>
                      <span className="text-emerald-600 dark:text-emerald-400">
                        Correct: {practiceStats.correct}
                      </span>
                      <span className="text-red-600 dark:text-red-400">
                        Incorrect: {practiceStats.incorrect}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {practiceStats.incorrect > 0 && (
                        <button
                          type="button"
                          onClick={() =>
                            setQuestionFilter((prev) => (prev === 'all' ? 'incorrect' : 'all'))
                          }
                          className={`rounded-lg border px-3 py-1.5 font-semibold transition-colors ${
                            questionFilter === 'incorrect'
                              ? 'border-accent bg-accent text-accent-ink'
                              : 'border-edge-strong bg-field text-ink hover:border-accent'
                          }`}
                        >
                          {questionFilter === 'incorrect'
                            ? 'Show All'
                            : `Review Incorrect (${practiceStats.incorrect})`}
                        </button>
                      )}
                      {practiceStats.answered > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            setFeedback({});
                            setQuestionFilter('all');
                          }}
                          className="inline-flex items-center gap-1 rounded-lg border border-edge-strong bg-field px-3 py-1.5 font-semibold text-ink-muted hover:text-ink"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Reset</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {displayedQuestions.map((question, index) => {
                    const answer = feedback[question.id];
                    return (
                      <article
                        key={question.id}
                        className="rounded-2xl border border-edge bg-panel p-5 space-y-4 shadow-sm"
                      >
                        <div className="text-xs font-semibold text-accent-text">
                          {activeTab === 'mcq' ? 'MCQ' : 'Verified PYQ'} {index + 1}
                          {question.examName ? ` · ${question.examName}` : ''}
                          {question.examYear ? ` (${question.examYear})` : ''} · {question.difficulty}
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
                                  ? 'border-emerald-500 bg-emerald-500/10 text-ink font-medium'
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

            {activeTab === 'assessment' && (
              <div className="space-y-6">
                {assessmentError && <ErrorState message={assessmentError} />}

                {assessmentResult ? (
                  <div className="space-y-5">
                    <SuccessBanner
                      message={
                        assessmentResult.expired
                          ? 'Time expired. Your saved answers were submitted and recorded privately to your Attempt History.'
                          : `${assessmentResult.testTitle} submitted and recorded privately to your Attempt History.`
                      }
                    />
                    <div className="bg-panel border border-edge rounded-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-sm">
                      <div>
                        <div className="text-xs text-ink-faint">Score</div>
                        <div className="text-2xl font-bold font-mono text-ink mt-1">
                          {assessmentResult.score} / {assessmentResult.totalMarks}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-ink-faint">Correct</div>
                        <div className="text-2xl font-bold text-emerald-600 mt-1">
                          {assessmentResult.correct}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-ink-faint">Incorrect</div>
                        <div className="text-2xl font-bold text-red-600 mt-1">
                          {assessmentResult.incorrect}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-ink-faint">Skipped</div>
                        <div className="text-2xl font-bold text-ink-muted mt-1">
                          {assessmentResult.unanswered}
                        </div>
                      </div>
                    </div>

                    <TestReviewSection
                      review={assessmentResult.review}
                      initialFilter={assessmentResult.incorrect > 0 ? 'incorrect' : 'all'}
                    />

                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          setAssessmentResult(null);
                          setActiveAssessment(null);
                        }}
                        className="px-4 py-2 text-xs font-semibold rounded-lg border border-edge-strong bg-panel text-ink hover:border-accent"
                      >
                        Back to Topic Assessments
                      </button>
                    </div>
                  </div>
                ) : assessmentAttemptId && activeAssessment ? (
                  <div className="space-y-5">
                    <div className="bg-panel border border-edge rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 sticky top-16 z-20 shadow-sm">
                      <div>
                        <div className="text-xs font-semibold text-ink">{activeAssessment.title}</div>
                        <div className="flex items-center gap-3 text-xs font-mono text-ink-muted mt-0.5">
                          <span className="inline-flex items-center gap-1 text-accent-text">
                            <Clock className="w-3.5 h-3.5" />
                            {formatClock(Math.max(0, assessmentTimeLimitSeconds - assessmentElapsed))}
                          </span>
                          <span>
                            Answered: {Object.keys(assessmentAnswers).length}/{assessmentQuestions.length}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setAssessmentAttemptId(null);
                            setActiveAssessment(null);
                          }}
                          className="px-3 py-2 text-xs font-medium rounded-lg border border-edge-strong bg-field text-ink-muted hover:text-ink"
                        >
                          Exit
                        </button>
                        <button
                          type="button"
                          disabled={assessmentSubmitting}
                          onClick={() => void handleSubmitAssessment()}
                          className="px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60"
                        >
                          {assessmentSubmitting ? 'Submitting...' : 'Submit Assessment'}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {assessmentQuestions.map((q, idx) => (
                        <div
                          key={q.id}
                          className="bg-panel border border-edge rounded-xl p-5 space-y-3 shadow-sm"
                        >
                          <div className="text-xs font-mono text-ink-faint">Question {idx + 1}</div>
                          <p className="text-sm sm:text-base font-medium text-ink">{q.stem}</p>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {q.options.map((opt, optIdx) => {
                              const selected = assessmentAnswers[q.id] === optIdx;
                              return (
                                <button
                                  key={optIdx}
                                  type="button"
                                  onClick={() =>
                                    setAssessmentAnswers((prev) => ({ ...prev, [q.id]: optIdx }))
                                  }
                                  className={`text-left px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm transition-colors ${
                                    selected
                                      ? 'border-accent bg-accent/15 text-ink font-medium'
                                      : 'border-edge-strong bg-field text-ink hover:bg-subtle'
                                  }`}
                                >
                                  <span className="font-mono text-xs mr-2 text-accent-text">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : topicTests.length === 0 ? (
                  <EmptyState
                    title="No practice assessment published for this topic yet"
                    description="Topic-wise practice assessments with timed grading, explanations, and incorrect-answer review will appear here once published."
                  />
                ) : (
                  <div className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      {topicTests.map((testPaper) => (
                        <div
                          key={testPaper.id}
                          className="rounded-xl border border-edge bg-panel p-5 flex flex-col justify-between gap-4 shadow-sm"
                        >
                          <div>
                            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-text">
                              <ClipboardCheck className="w-3.5 h-3.5" />
                              <span>{testPaper.testType.replace('_', ' ')} Assessment</span>
                            </div>
                            <h3 className="mt-1.5 text-base font-bold text-ink">{testPaper.title}</h3>
                            <div className="mt-3 flex flex-wrap gap-3 text-xs font-mono text-ink-muted">
                              <span>{testPaper.questionCount} Qs</span>
                              <span>· {testPaper.totalMarks} Marks</span>
                              <span>· {testPaper.durationMinutes} mins</span>
                              <span>· -{testPaper.negativeMarking} neg</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-edge">
                            <button
                              type="button"
                              disabled={assessmentStarting}
                              onClick={() => void handleStartAssessment(testPaper)}
                              className="px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60"
                            >
                              {assessmentStarting ? 'Starting...' : 'Start Practice Assessment'}
                            </button>
                            <Link
                              to={`/student/tests/${encodeURIComponent(testPaper.id)}`}
                              className="px-3 py-2 text-xs font-medium rounded-lg border border-edge-strong bg-field text-ink hover:border-accent"
                            >
                              Open Full Screen
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>

                    {pastAttempts.length > 0 && (
                      <div className="rounded-xl border border-edge bg-panel p-5 space-y-3 shadow-sm">
                        <h3 className="text-sm font-semibold text-ink">
                          Your Recent Attempts on This Topic
                        </h3>
                        <div className="divide-y divide-edge">
                          {pastAttempts.map((att) => {
                            const hasReview = Array.isArray(att.review) && att.review.length > 0;
                            const isExpanded = expandedPastAttemptId === att.id;
                            return (
                              <div key={att.id} className="py-3 space-y-3">
                                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                                  <div>
                                    <span className="font-semibold text-ink">{att.testTitle}</span>
                                    <span className="ml-3 font-mono text-accent-text">
                                      Score: {att.score}/{att.totalMarks}
                                    </span>
                                    <span className="ml-3 font-mono text-ink-muted">
                                      {att.correctCount}✓ / {att.incorrectCount}✗ / {att.unansweredCount} skipped
                                    </span>
                                  </div>
                                  {hasReview && (
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setExpandedPastAttemptId(isExpanded ? null : att.id)
                                      }
                                      className="rounded-md border border-edge-strong bg-field px-3 py-1 font-semibold text-ink hover:border-accent"
                                    >
                                      {isExpanded ? 'Hide Review' : 'Review Answers'}
                                    </button>
                                  )}
                                </div>
                                {isExpanded && hasReview && (
                                  <TestReviewSection
                                    review={att.review!}
                                    initialFilter={att.incorrectCount > 0 ? 'incorrect' : 'all'}
                                  />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </AppShell>
  );
}
