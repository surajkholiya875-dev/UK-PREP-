import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AdminRoute, StudentRoute } from './components/ui/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Public Pages
import { LandingPage } from './pages/public/LandingPage';
import { LoginPage } from './pages/public/LoginPage';
import { RegisterPage } from './pages/public/RegisterPage';
import { VerifyEmailPage } from './pages/public/VerifyEmailPage';

// Student Pages
import { AnnouncementsPage } from './pages/student/AnnouncementsPage';
import { AttemptHistoryPage } from './pages/student/AttemptHistoryPage';
import { BookmarksPage } from './pages/student/BookmarksPage';
import { CourseCataloguePage } from './pages/student/CourseCataloguePage';
import { CourseDetailPage } from './pages/student/CourseDetailPage';
import { LearningProgressPage } from './pages/student/LearningProgressPage';
import { MyCoursesPage } from './pages/student/MyCoursesPage';
import { PracticeQuestionsPage } from './pages/student/PracticeQuestionsPage';
import { StudentDashboardPage } from './pages/student/StudentDashboardPage';
import { StudentProfilePage } from './pages/student/StudentProfilePage';
import { StudyMaterialsPage } from './pages/student/StudyMaterialsPage';
import { TestRunnerPage } from './pages/student/TestRunnerPage';
import { TestsListPage } from './pages/student/TestsListPage';

// Admin Pages
import { AdminAnnouncementsPage } from './pages/admin/AdminAnnouncementsPage';
import { AdminCoursesPage } from './pages/admin/AdminCoursesPage';
import { AdminCurrentAffairsPage } from './pages/admin/AdminCurrentAffairsPage';
import { AdminExaminationsPage } from './pages/admin/AdminExaminationsPage';
import { AdminImportExportPage } from './pages/admin/AdminImportExportPage';
import { AdminOverviewPage } from './pages/admin/AdminOverviewPage';
import { AdminQuestionBankPage } from './pages/admin/AdminQuestionBankPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
import { AdminStudentsPage } from './pages/admin/AdminStudentsPage';
import { AdminStudyMaterialsPage } from './pages/admin/AdminStudyMaterialsPage';
import { AdminSubjectsPage } from './pages/admin/AdminSubjectsPage';
import { AdminTestsPage } from './pages/admin/AdminTestsPage';
import { AdminTopicsPage } from './pages/admin/AdminTopicsPage';
import { AdminUnitsChaptersPage } from './pages/admin/AdminUnitsChaptersPage';

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/verify-email" element={<VerifyEmailPage />} />

              {/* Student Application Routes */}
              <Route path="/student" element={<Navigate to="/student/dashboard" replace />} />
              <Route path="/student/dashboard" element={<StudentRoute><StudentDashboardPage /></StudentRoute>} />
              <Route path="/student/courses" element={<StudentRoute><MyCoursesPage /></StudentRoute>} />
              <Route path="/student/catalogue" element={<StudentRoute><CourseCataloguePage /></StudentRoute>} />
              <Route path="/student/courses/:courseId" element={<StudentRoute><CourseDetailPage /></StudentRoute>} />
              <Route path="/student/syllabus" element={<Navigate to="/student/materials" replace />} />
              <Route path="/student/materials" element={<StudentRoute><StudyMaterialsPage /></StudentRoute>} />
              <Route path="/student/practice" element={<Navigate to="/student/materials" replace />} />
              <Route path="/student/tests" element={<StudentRoute><TestsListPage /></StudentRoute>} />
              <Route path="/student/tests/:testId" element={<StudentRoute><TestRunnerPage /></StudentRoute>} />
              <Route path="/student/bookmarks" element={<StudentRoute><BookmarksPage /></StudentRoute>} />
              <Route path="/student/progress" element={<StudentRoute><LearningProgressPage /></StudentRoute>} />
              <Route path="/student/attempts" element={<StudentRoute><AttemptHistoryPage /></StudentRoute>} />
              <Route path="/student/announcements" element={<StudentRoute><AnnouncementsPage /></StudentRoute>} />
              <Route path="/student/profile" element={<StudentRoute><StudentProfilePage /></StudentRoute>} />

              {/* Protected Admin Workspace Routes */}
              <Route path="/admin" element={<Navigate to="/admin/overview" replace />} />
              <Route path="/admin/overview" element={<AdminRoute><AdminOverviewPage /></AdminRoute>} />
              <Route path="/admin/students" element={<AdminRoute><AdminStudentsPage /></AdminRoute>} />
              <Route path="/admin/examinations" element={<AdminRoute><AdminExaminationsPage /></AdminRoute>} />
              <Route path="/admin/courses" element={<AdminRoute><AdminCoursesPage /></AdminRoute>} />
              <Route path="/admin/subjects" element={<AdminRoute><AdminSubjectsPage /></AdminRoute>} />
              <Route path="/admin/units-chapters" element={<AdminRoute><AdminUnitsChaptersPage /></AdminRoute>} />
              <Route path="/admin/topics" element={<AdminRoute><AdminTopicsPage /></AdminRoute>} />
              <Route path="/admin/materials" element={<AdminRoute><AdminStudyMaterialsPage /></AdminRoute>} />
              <Route path="/admin/questions" element={<AdminRoute><AdminQuestionBankPage defaultType="mcq" /></AdminRoute>} />
              <Route path="/admin/tests" element={<AdminRoute><AdminTestsPage /></AdminRoute>} />
              <Route path="/admin/pyq" element={<AdminRoute><AdminQuestionBankPage defaultType="pyq" /></AdminRoute>} />
              <Route path="/admin/current-affairs" element={<AdminRoute><AdminCurrentAffairsPage /></AdminRoute>} />
              <Route path="/admin/announcements" element={<AdminRoute><AdminAnnouncementsPage /></AdminRoute>} />
              <Route path="/admin/import-export" element={<AdminRoute><AdminImportExportPage /></AdminRoute>} />
              <Route path="/admin/settings" element={<AdminRoute><AdminSettingsPage /></AdminRoute>} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
