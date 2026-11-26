import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Bell,
  BookOpen,
  ClipboardCheck,
  FileCheck2,
  FileText,
  HelpCircle,
  Library,
  Newspaper,
  Users,
} from 'lucide-react';
import { ContentCoverageReport } from '../../components/admin/ContentCoverageReport';
import { AppShell } from '../../components/ui/AppShell';
import { ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { ADMIN_NAV_ITEMS } from '../../config/navigation';
import { fetchAllAdminCollection } from '../../services/firestoreService';
import { Chapter, Question, StudyMaterial, Subject, TestPaper, Topic, Unit } from '../../types/academic';

export function AdminOverviewPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [counts, setCounts] = useState({
    users: 0,
    examinations: 0,
    courses: 0,
    subjects: 0,
    studyMaterials: 0,
    mcqs: 0,
    pyqs: 0,
    tests: 0,
    currentAffairs: 0,
    announcements: 0,
  });

  const [hierarchy, setHierarchy] = useState<{
    subjects: Subject[];
    units: Unit[];
    chapters: Chapter[];
    topics: Topic[];
    materials: StudyMaterial[];
    questions: Question[];
    tests: TestPaper[];
  }>({
    subjects: [],
    units: [],
    chapters: [],
    topics: [],
    materials: [],
    questions: [],
    tests: [],
  });

  const loadStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const [
        users,
        exams,
        courses,
        subjects,
        units,
        chapters,
        topics,
        materials,
        questions,
        tests,
        ca,
        announcements,
      ] = await Promise.all([
        fetchAllAdminCollection('users'),
        fetchAllAdminCollection('examinations'),
        fetchAllAdminCollection('courses'),
        fetchAllAdminCollection<Subject>('subjects'),
        fetchAllAdminCollection<Unit>('units'),
        fetchAllAdminCollection<Chapter>('chapters'),
        fetchAllAdminCollection<Topic>('topics'),
        fetchAllAdminCollection<StudyMaterial>('studyMaterials'),
        fetchAllAdminCollection<Question>('questions'),
        fetchAllAdminCollection<TestPaper>('tests'),
        fetchAllAdminCollection('currentAffairs'),
        fetchAllAdminCollection('announcements'),
      ]);

      const pyqCount = questions.filter((q) => q.questionType === 'pyq').length;
      const mcqCount = questions.length - pyqCount;

      setCounts({
        users: users.length,
        examinations: exams.length,
        courses: courses.length,
        subjects: subjects.length,
        studyMaterials: materials.length,
        mcqs: mcqCount,
        pyqs: pyqCount,
        tests: tests.length,
        currentAffairs: ca.length,
        announcements: announcements.length,
      });

      setHierarchy({
        subjects,
        units,
        chapters,
        topics,
        materials,
        questions,
        tests,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load admin workspace overview.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadStats();
  }, []);

  const cards = [
    { label: 'Registered Users', count: counts.users, to: '/admin/students', icon: Users },
    { label: 'Examinations', count: counts.examinations, to: '/admin/examinations', icon: Award },
    { label: 'Courses', count: counts.courses, to: '/admin/courses', icon: Library },
    { label: 'Subjects', count: counts.subjects, to: '/admin/subjects', icon: BookOpen },
    { label: 'Study Materials', count: counts.studyMaterials, to: '/admin/materials', icon: FileText },
    { label: 'MCQ Question Bank', count: counts.mcqs, to: '/admin/questions', icon: HelpCircle },
    { label: 'Verified PYQs', count: counts.pyqs, to: '/admin/pyq', icon: FileCheck2 },
    { label: 'Practice Assessments', count: counts.tests, to: '/admin/tests', icon: ClipboardCheck },
    { label: 'Current Affairs', count: counts.currentAffairs, to: '/admin/current-affairs', icon: Newspaper },
    { label: 'Announcements', count: counts.announcements, to: '/admin/announcements', icon: Bell },
  ];

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Administrator Overview"
      breadcrumb="UK Prep / Admin / Overview"
      isAdminWorkspace
    >
      <div className="space-y-6">
        <div className="bg-panel border border-edge rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-ink">
            Academic Hierarchy &amp; Content Coverage Control
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            Manage examinations, courses, subjects, units, chapters, topics, study materials, MCQs, verified PYQs, practice assessments, and student accounts. Only published records are visible in the Student Portal.
          </p>
        </div>

        {loading ? (
          <LoadingState label="Fetching live collection counts and coverage report..." />
        ) : error ? (
          <ErrorState message={error} onRetry={() => void loadStats()} />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.to}
                    to={card.to}
                    className="bg-panel border border-edge rounded-xl p-5 shadow-sm hover:border-accent transition-colors group"
                  >
                    <div className="flex items-center justify-between text-xs font-medium text-ink-muted">
                      <span>{card.label}</span>
                      <Icon className="w-4 h-4 text-accent-text" />
                    </div>
                    <div className="mt-3 text-2xl font-bold font-mono tabular-nums text-ink group-hover:text-accent-text transition-colors">
                      {card.count}
                    </div>
                  </Link>
                );
              })}
            </div>

            <ContentCoverageReport
              subjects={hierarchy.subjects}
              units={hierarchy.units}
              chapters={hierarchy.chapters}
              topics={hierarchy.topics}
              materials={hierarchy.materials}
              questions={hierarchy.questions}
              tests={hierarchy.tests}
            />
          </>
        )}
      </div>
    </AppShell>
  );
}
