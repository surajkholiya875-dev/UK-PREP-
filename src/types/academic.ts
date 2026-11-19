export type UserRole = 'student' | 'admin';
export type ThemeMode = 'light' | 'dark';
export type ExamCategory = 'UKPSC' | 'UKSSSC' | 'UPSC' | 'Other';
export type CourseLevel = 'Prelims' | 'Mains' | 'Integrated' | 'Foundation';
export type CourseLanguage = 'English' | 'Hindi' | 'Bilingual';
export type SubjectScope = 'uttarakhand' | 'general';
export type MaterialType = 'notes' | 'summary' | 'pyq_analysis' | 'current_affairs' | 'reference';
export type QuestionType = 'mcq' | 'pyq' | 'current_affairs';
export type QuestionDifficulty = 'foundation' | 'standard' | 'advanced';
export type TestType = 'mock' | 'sectional' | 'pyq' | 'current_affairs';
export type CompletionStatus = 'not_started' | 'in_progress' | 'completed';
export type BookmarkTargetType = 'material' | 'question' | 'topic' | 'course';
export type AnnouncementCategory = 'exam_notice' | 'syllabus' | 'platform' | 'current_affairs';
export type CurrentAffairsScope = 'uttarakhand' | 'national' | 'international';

export const BLUEPRINT_LIMITS = {
  ID_PATTERN: /^[a-zA-Z0-9_-]+$/,
  PHONE_PATTERN: /^[0-9+\-\s]{0,20}$/,
  MAX_ID_LENGTH: 128,
  MAX_TITLE_LENGTH: 180,
  MAX_SUMMARY_LENGTH: 2500,
  MAX_MARKDOWN_LENGTH: 30000,
  MAX_QUESTION_STEM: 3000,
  MAX_OPTIONS: 5,
  MAX_TEST_QUESTIONS: 200,
} as const;

export const UTTARAKHAND_SUBJECT_TAXONOMY = [
  'History of Uttarakhand',
  'Geography of Uttarakhand',
  'Polity and Administration of Uttarakhand',
  'Economy of Uttarakhand',
  'Art and Culture of Uttarakhand',
  'Environment and Ecology of Uttarakhand',
  'Uttarakhand Current Affairs',
  'Uttarakhand General Knowledge',
  'District-wise General Knowledge (13 Districts)',
] as const;

export const GENERAL_SUBJECT_TAXONOMY = [
  'Ancient Indian History',
  'Medieval Indian History',
  'Modern Indian History',
  'Indian Constitution and Polity',
  'World History',
  'World Geography',
  'Indian Geography',
  'Indian Economy',
  'General Science',
  'Environment',
  'Current Affairs',
  'CSAT',
  'Art and Culture of India',
  'Science and Technology',
  'Indian Society',
  'Social Justice',
  'Governance and Public Policy',
  'International Relations',
  'Internal Security',
  'Disaster Management',
  'Ethics, Integrity and Aptitude',
  'Essay and Mains Answer Writing',
  'General Hindi',
  'General English',
  'Logical Reasoning',
  'Quantitative Aptitude',
  'Data Interpretation',
  'Computer Awareness',
  'Agriculture and Rural Development',
] as const;

export const UTTARAKHAND_DISTRICTS = [
  'Almora',
  'Bageshwar',
  'Chamoli',
  'Champawat',
  'Dehradun',
  'Haridwar',
  'Nainital',
  'Pauri Garhwal',
  'Pithoragarh',
  'Rudraprayag',
  'Tehri Garhwal',
  'Udham Singh Nagar',
  'Uttarkashi',
] as const;

export type AccountStatus = 'active' | 'disabled' | 'suspended';

export interface UserProfile {
  uid: string;
  fullName: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  district: string;
  primaryTargetExam: string;
  targetExam?: string;
  role: UserRole;
  emailVerified: boolean;
  accountStatus: AccountStatus;
  preferredTheme: ThemeMode;
  status?: AccountStatus;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface UserPrivateInfo {
  uid: string;
  fullName: string;
  email: string;
  phone: string;
  district?: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface AdminGrant {
  uid: string;
  email: string;
  grantedBy: string;
  grantedAt: unknown;
}

export interface Examination {
  id: string;
  title: string;
  code: string;
  category: ExamCategory;
  description?: string;
  eligibilitySummary?: string;
  isPublished: boolean;
  sortOrder: number;
  createdBy: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface Course {
  id: string;
  examinationId: string;
  title: string;
  slug: string;
  summary?: string;
  level: CourseLevel;
  language: CourseLanguage;
  isPublished: boolean;
  sortOrder: number;
  createdBy: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface Subject {
  id: string;
  courseId: string;
  examinationId: string;
  title: string;
  scope: SubjectScope;
  description?: string;
  sortOrder: number;
  isPublished: boolean;
  createdBy: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface Unit {
  id: string;
  subjectId: string;
  courseId: string;
  title: string;
  description?: string;
  sortOrder: number;
  isPublished: boolean;
  createdBy: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface Chapter {
  id: string;
  unitId: string;
  subjectId: string;
  courseId: string;
  title: string;
  summary?: string;
  sortOrder: number;
  isPublished: boolean;
  createdBy: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface Topic {
  id: string;
  chapterId: string;
  unitId: string;
  subjectId: string;
  courseId: string;
  title: string;
  syllabusNotes?: string;
  sortOrder: number;
  isPublished: boolean;
  createdBy: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface StudyMaterial {
  id: string;
  topicId: string;
  chapterId: string;
  subjectId: string;
  courseId: string;
  title: string;
  materialType: MaterialType;
  contentMarkdown?: string;
  resourceUrl?: string;
  estimatedMinutes: number;
  isPublished: boolean;
  createdBy: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface Question {
  id: string;
  topicId: string;
  chapterId: string;
  subjectId: string;
  examinationId: string;
  questionType: QuestionType;
  stem: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
  difficulty: QuestionDifficulty;
  examYear?: number;
  isPublished: boolean;
  createdBy: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface TestPaper {
  id: string;
  examinationId: string;
  courseId?: string;
  subjectId?: string;
  title: string;
  testType: TestType;
  durationMinutes: number;
  totalMarks: number;
  negativeMarking: number;
  questionCount: number;
  questionIds: string[];
  isPublished: boolean;
  createdBy: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  examinationId: string;
  status: 'active' | 'archived';
  enrolledAt: unknown;
  updatedAt: unknown;
}

export interface TestAttempt {
  id: string;
  userId: string;
  testId: string;
  testTitle: string;
  status: 'in_progress' | 'submitted';
  score: number;
  totalMarks: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  durationSeconds: number;
  startedAt: unknown;
  submittedAt?: unknown;
  updatedAt: unknown;
}

export interface LearningProgress {
  id: string;
  userId: string;
  courseId: string;
  subjectId: string;
  chapterId: string;
  topicId: string;
  materialId?: string;
  completionStatus: CompletionStatus;
  lastAccessedAt: unknown;
  updatedAt: unknown;
}

export interface Bookmark {
  id: string;
  userId: string;
  targetType: BookmarkTargetType;
  targetId: string;
  title: string;
  subjectTitle?: string;
  note?: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  category: AnnouncementCategory;
  examinationId?: string;
  isPinned: boolean;
  isPublished: boolean;
  publishedAt: unknown;
  createdBy: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface CurrentAffairsEntry {
  id: string;
  title: string;
  summary: string;
  scope: CurrentAffairsScope;
  eventDate: string;
  subjectTag?: string;
  isPublished: boolean;
  createdBy: string;
  createdAt: unknown;
  updatedAt: unknown;
}

export interface PlatformSettings {
  id: string;
  platformName: string;
  supportEmail: string;
  maintenanceNotice?: string;
  allowNewRegistrations: boolean;
  updatedBy: string;
  updatedAt: unknown;
}
