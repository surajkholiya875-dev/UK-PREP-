import {
  ExamCommission,
  QuestionDifficulty,
  QuestionFormat,
  QuestionType,
} from '../../types/academic';

export type DuplicateKind = 'none' | 'firestore' | 'batch';

export interface ExtractedQuestionCandidate {
  rowId: string;
  selected: boolean;
  sourceFile: string;
  sourcePage?: number;
  questionNumber?: string;
  stem: string;
  options: string[];
  correctOptionIndex: number; // 0..4 for objective when present, -1 when missing or descriptive/other
  answerKeyDetected: string;
  explanation: string;
  modelAnswer: string;
  questionFormat: QuestionFormat;
  questionType: QuestionType;
  examCommission: ExamCommission;
  detectedCommissionHint: ExamCommission | null;
  difficulty: QuestionDifficulty;
  examName: string;
  examYear?: number;
  paperName: string;
  marks?: number;
  wordLimit?: number;
  sourceReference: string;
  subjectHint: string;
  topicHint: string;
  subjectId: string;
  topicId: string;
  isVerified: boolean;
  isPublished: boolean;
  confidence: 'high' | 'medium' | 'low';
  warnings: string[];
  errors: string[];
  duplicateType: DuplicateKind;
  duplicateNote?: string;
}

export interface FileExtractionReport {
  fileName: string;
  fileType: string;
  sizeBytes: number;
  status: 'parsed' | 'ocr_parsed' | 'needs_ocr_or_text' | 'error';
  method: 'pdf_text' | 'pdf_ocr' | 'docx' | 'doc' | 'xlsx' | 'csv' | 'txt' | 'json';
  pageCount?: number;
  ocrPagesProcessed?: number;
  extractedCount: number;
  message: string;
}

export interface BulkImportSummary {
  extracted: number;
  readyToImport: number;
  imported: number;
  skipped: number;
  failed: number;
  failedMessages: string[];
}

export const COMMISSION_LABELS: Record<ExamCommission, string> = {
  UKPSC_PCS: 'UKPSC PCS (Upper / Lower / RO-ARO / Mains)',
  UKSSSC: 'UKSSSC (Group C / VDO / Patwari / Police)',
  UPSC: 'UPSC Civil Services',
  Other: 'Other / General Exam',
};

export const FORMAT_LABELS: Record<QuestionFormat, string> = {
  objective: 'Objective MCQ',
  descriptive: 'Descriptive / Mains',
  other: 'Other Format',
};
