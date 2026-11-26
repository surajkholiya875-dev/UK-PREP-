import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  AuthenticatedRequest,
  requireAdminRole,
  requireVerifiedEmail,
  verifyBearerToken,
  getAdminDatabase,
  getAdminDatabaseInfo,
} from './server/authMiddleware';
import { randomUUID } from 'crypto';
import { FieldValue } from 'firebase-admin/firestore';
import { GoogleGenAI, Type } from '@google/genai';
import WordExtractor from 'word-extractor';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

function getCliArg(name: string): string | undefined {
  const exactPrefix = `--${name}=`;
  const argv = process.argv.slice(2);
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i].startsWith(exactPrefix)) {
      return argv[i].slice(exactPrefix.length);
    }
    if (argv[i] === `--${name}` && argv[i + 1] && !argv[i + 1].startsWith('--')) {
      return argv[i + 1];
    }
  }
  return undefined;
}

function resolvePort(): number {
  const cliPort = Number(getCliArg('port'));
  if (Number.isInteger(cliPort) && cliPort > 0 && cliPort < 65536) {
    return cliPort;
  }
  const envPort = Number(process.env.PORT);
  const nginxPort = Number(process.env.NGINX_PORT);
  const defaultAppPort = Number(process.env.DEFAULT_APP_PORT) || 3000;
  // In dev preview behind Nginx, avoid colliding with NGINX_PORT if PORT=8080 is inherited
  if (!isProduction && envPort && nginxPort && envPort === nginxPort) {
    return defaultAppPort;
  }
  if (Number.isInteger(envPort) && envPort > 0 && envPort < 65536) {
    return envPort;
  }
  return defaultAppPort;
}

const PORT = resolvePort();
const HOST = getCliArg('host') || process.env.HOST || '0.0.0.0';

interface ContactPayload {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
}

function isNonEmptyString(value: unknown, min: number, max: number): value is string {
  return typeof value === 'string' && value.trim().length >= min && value.trim().length <= max;
}

async function createServer() {
  const app = express();

  const defaultJsonParser = express.json({ limit: '256kb' });
  const bulkUploadJsonParser = express.json({ limit: '20mb' });
  app.use('/api/admin/bulk-questions', bulkUploadJsonParser);
  app.use((req, res, next) => {
    if (req.path.startsWith('/api/admin/bulk-questions')) {
      return next();
    }
    return defaultJsonParser(req, res, next);
  });

  // Basic security headers suitable for iframe + standalone deployment
  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  // Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).json({
      status: 'ok',
      service: 'uk-prep-server',
      timestamp: new Date().toISOString(),
    });
  });

  // Public platform metadata endpoint
  app.get('/api/platform/meta', (_req: Request, res: Response) => {
    res.status(200).json({
      name: 'UK Prep – Uttarakhand Exam Preparation Platform',
      supportedExaminations: ['UKPSC', 'UKSSSC', 'UPSC'],
      environment: isProduction ? 'production' : 'development',
    });
  });

  // Server-verified session inspection (never trusts client-supplied role parameters)
  app.get(
    '/api/auth/session',
    verifyBearerToken,
    (req: AuthenticatedRequest, res: Response) => {
      res.status(200).json({
        uid: req.authUser!.uid,
        email: req.authUser!.email,
        emailVerified: req.authUser!.emailVerified,
        role: req.authUser!.role,
      });
    }
  );

  // Protected student verification check endpoint
  app.get(
    '/api/student/verify',
    verifyBearerToken,
    requireVerifiedEmail,
    (req: AuthenticatedRequest, res: Response) => {
      res.status(200).json({
        authorized: true,
        uid: req.authUser!.uid,
        role: req.authUser!.role,
      });
    }
  );

  // Protected admin verification check endpoint
  app.get(
    '/api/admin/verify',
    verifyBearerToken,
    requireAdminRole,
    (req: AuthenticatedRequest, res: Response) => {
      res.status(200).json({
        authorized: true,
        uid: req.authUser!.uid,
        role: req.authUser!.role,
      });
    }
  );

  // Admin-only legacy .doc (OLE2 binary Word) text extractor
  app.post(
    '/api/admin/bulk-questions/parse-doc',
    verifyBearerToken,
    requireAdminRole,
    async (req: AuthenticatedRequest, res: Response) => {
      try {
        const fileName = typeof req.body?.fileName === 'string' ? req.body.fileName.trim() : 'document.doc';
        const base64 = typeof req.body?.base64 === 'string' ? req.body.base64.trim() : '';
        if (!base64) {
          return res.status(400).json({ error: 'Missing base64 file content for .doc extraction.' });
        }
        const cleanBase64 = base64.replace(/^data:[^;]+;base64,/, '');
        const buffer = Buffer.from(cleanBase64, 'base64');
        if (buffer.length === 0 || buffer.length > 15 * 1024 * 1024) {
          return res.status(400).json({ error: 'Uploaded .doc file must be between 1 byte and 15 MB.' });
        }

        const extractor = new WordExtractor();
        const extracted = await extractor.extract(buffer);
        const body = extracted.getBody({ includeHeadersAndFooters: false }) || '';
        const textboxes = typeof extracted.getTextboxes === 'function' ? extracted.getTextboxes() || '' : '';
        const combinedText = [body.trim(), textboxes.trim()].filter(Boolean).join('\n\n');

        if (!combinedText) {
          return res.status(422).json({
            error: `No readable text was found inside "${fileName}". Convert it to .docx or PDF with selectable text if it contains embedded images.`,
          });
        }

        return res.status(200).json({ fileName, text: combinedText });
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unable to extract text from .doc file.';
        console.error('Admin .doc parse failed:', error);
        return res.status(422).json({
          error: `Could not read legacy .doc file (${message}). Save the file as .docx, .pdf, or .txt and retry.`,
        });
      }
    }
  );

  // Admin-only OCR endpoint for scanned / image-based PDFs (verbatim Hindi Devanagari + English text)
  app.post(
    '/api/admin/bulk-questions/ocr',
    verifyBearerToken,
    requireAdminRole,
    async (req: AuthenticatedRequest, res: Response) => {
      const apiKey = process.env.GEMINI_API_KEY?.trim();
      if (!apiKey) {
        return res.status(503).json({
          code: 'OCR_UNAVAILABLE',
          error:
            'This PDF appears scanned or image-based without a readable text layer, and server OCR (GEMINI_API_KEY) is not configured. Upload a text-selectable PDF, DOCX, XLSX, CSV, or TXT file, or configure GEMINI_API_KEY in server secrets.',
        });
      }

      try {
        const fileName = typeof req.body?.fileName === 'string' ? req.body.fileName.trim() : 'document.pdf';
        const pages = Array.isArray(req.body?.pages) ? req.body.pages : [];
        const pdfBase64 = typeof req.body?.pdfBase64 === 'string' ? req.body.pdfBase64.trim() : '';

        if (pages.length === 0 && !pdfBase64) {
          return res.status(400).json({ error: 'Provide rendered PDF page images or pdfBase64 for OCR.' });
        }
        if (pages.length > 25) {
          return res.status(400).json({ error: 'OCR batch limit is 25 pages per request.' });
        }

        const ai = new GoogleGenAI({
          apiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            },
          },
        });

        const parts: Array<{ inlineData: { mimeType: string; data: string } } | { text: string }> = [];
        if (pages.length > 0) {
          for (const page of pages) {
            const pageNum = Number(page?.pageNumber) || parts.length + 1;
            const mimeType =
              typeof page?.mimeType === 'string' && /^image\/(png|jpeg|webp)$/i.test(page.mimeType)
                ? page.mimeType
                : 'image/jpeg';
            const data =
              typeof page?.imageBase64 === 'string'
                ? page.imageBase64.replace(/^data:[^;]+;base64,/, '').trim()
                : '';
            if (!data) continue;
            parts.push({ text: `--- Page ${pageNum} ---` });
            parts.push({ inlineData: { mimeType, data } });
          }
        } else if (pdfBase64) {
          const cleanPdf = pdfBase64.replace(/^data:[^;]+;base64,/, '').trim();
          const pdfBytes = Buffer.from(cleanPdf, 'base64');
          if (pdfBytes.length === 0 || pdfBytes.length > 14 * 1024 * 1024) {
            return res.status(400).json({ error: 'PDF payload for OCR must be under 14 MB.' });
          }
          parts.push({ inlineData: { mimeType: 'application/pdf', data: cleanPdf } });
        }

        if (parts.length === 0) {
          return res.status(400).json({ error: 'No valid image or PDF page data provided for OCR.' });
        }

        parts.push({
          text: [
            'Transcribe every visible question, option, answer key, explanation, exam header, year, paper name, marks, and word limit from these exam pages verbatim.',
            'Preserve Hindi Devanagari script and English text accurately in reading order.',
            'Keep question numbers (e.g., Q.1, 1., प्र. 1), option labels ((a), (b), (c), (d) or (अ), (ब), (स), (द)), marks (e.g., [10 Marks]), word limits, and page breaks.',
            'CRITICAL: Do NOT invent, guess, or fill in missing answer keys, options, years, marks, or explanations that are not actually printed on the pages.',
            'Return structured JSON matching the schema with one entry per page.',
          ].join(' '),
        });

        const response = await ai.models.generateContent({
          model: 'gemini-4-hydrogen',
          contents: { parts },
          config: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                pages: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      pageNumber: { type: Type.INTEGER },
                      text: { type: Type.STRING },
                    },
                    required: ['pageNumber', 'text'],
                  },
                },
              },
              required: ['pages'],
            },
          },
        });

        const rawJson = (response.text ?? '').trim();
        let parsedPages: Array<{ pageNumber: number; text: string }> = [];
        try {
          const parsed = JSON.parse(rawJson) as { pages?: Array<{ pageNumber?: unknown; text?: unknown }> };
          if (Array.isArray(parsed.pages)) {
            parsedPages = parsed.pages
              .map((p, idx) => ({
                pageNumber: Number.isInteger(p.pageNumber) ? Number(p.pageNumber) : idx + 1,
                text: typeof p.text === 'string' ? p.text.trim() : '',
              }))
              .filter((p) => p.text.length > 0);
          }
        } catch {
          if (rawJson) {
            parsedPages = [{ pageNumber: 1, text: rawJson }];
          }
        }

        if (parsedPages.length === 0) {
          return res.status(422).json({
            error: `OCR completed for "${fileName}" but detected no readable question text.`,
          });
        }

        const combinedText = parsedPages
          .map((p) => `[Page ${p.pageNumber}]\n${p.text}`)
          .join('\n\n');

        return res.status(200).json({
          fileName,
          model: 'gemini-4-hydrogen',
          pages: parsedPages,
          text: combinedText,
        });
      } catch (error) {
        console.error('Admin PDF OCR failed:', error);
        const msg = error instanceof Error ? error.message : 'OCR processing failed.';
        return res.status(502).json({
          error: `OCR failed while processing scanned PDF: ${msg}`,
        });
      }
    }
  );

  // Public contact form: persist validated inquiries in Firestore.
  app.post('/api/contact', async (req: Request, res: Response) => {
    const body = (req.body ?? {}) as ContactPayload;
    if (!isNonEmptyString(body.fullName, 2, 120)) return res.status(400).json({ error: 'Please provide your full name (2 to 120 characters).' });
    if (!isNonEmptyString(body.email, 5, 160) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) return res.status(400).json({ error: 'Please provide a valid email address.' });
    if (body.phone !== undefined && body.phone !== '' && !isNonEmptyString(body.phone, 7, 20)) return res.status(400).json({ error: 'Phone number must be between 7 and 20 characters.' });
    if (!isNonEmptyString(body.subject, 3, 200)) return res.status(400).json({ error: 'Please provide an inquiry subject (3 to 200 characters).' });
    if (!isNonEmptyString(body.message, 10, 3000)) return res.status(400).json({ error: 'Please enter a message of at least 10 characters.' });
    try {
      const id = randomUUID().replace(/-/g, '');
      await getAdminDatabase().collection('contactInquiries').doc(id).set({
        id, userId: 'public', fullName: body.fullName.trim(), email: body.email.trim().toLowerCase(),
        ...(typeof body.phone === 'string' && body.phone.trim() ? { phone: body.phone.trim() } : {}),
        subject: body.subject.trim(), message: body.message.trim(), status: 'new',
        createdAt: FieldValue.serverTimestamp(),
      });
      return res.status(201).json({ accepted: true, referenceId: 'INQ-' + id.slice(0, 10).toUpperCase(), message: 'Your inquiry has been saved. Please keep the reference ID.' });
    } catch (error) {
      console.error('Contact inquiry persistence failed:', error);
      return res.status(503).json({ error: 'We could not save your inquiry right now. Please try again later.' });
    }
  });

  // Student practice delivery: answer keys are never sent with the question list.
  app.get('/api/student/questions', verifyBearerToken, requireVerifiedEmail, async (req: AuthenticatedRequest, res: Response) => {
    try {
      const db = getAdminDatabase();
      const requestedTopicId = typeof req.query.topicId === 'string' ? req.query.topicId : '';
      const requestedType = typeof req.query.questionType === 'string' ? req.query.questionType : '';
      if (requestedTopicId && !/^[a-zA-Z0-9_-]{1,128}$/.test(requestedTopicId)) {
        return res.status(400).json({ error: 'Invalid topic filter.' });
      }
      if (requestedType && !['mcq', 'pyq', 'current_affairs'].includes(requestedType)) {
        return res.status(400).json({ error: 'Invalid question type filter.' });
      }

      const snapshot = requestedTopicId
        ? await db.collection('questions').where('topicId', '==', requestedTopicId).limit(1000).get()
        : await db.collection('questions').where('isPublished', '==', true).limit(500).get();
      const questions = snapshot.docs
        .map((document) => ({ id: document.id, ...document.data() }))
        .filter((question: any) => {
          if (question.isPublished !== true) return false;
          if (requestedTopicId && question.topicId !== requestedTopicId) return false;
          if (requestedType && question.questionType !== requestedType) return false;
          if (question.questionType === 'pyq') {
            const hasVerifiedExam =
              typeof question.examName === 'string' &&
              question.examName.trim().length > 0 &&
              Number.isInteger(question.examYear);
            if (question.isVerified === false || !hasVerifiedExam) {
              return false;
            }
          }
          return true;
        })
        .slice(0, 500)
        .map((question: any) => ({
          id: question.id,
          topicId: question.topicId,
          chapterId: question.chapterId,
          subjectId: question.subjectId,
          examinationId: question.examinationId,
          questionType: question.questionType,
          ...(typeof question.questionFormat === 'string' && question.questionFormat.trim()
            ? { questionFormat: question.questionFormat.trim() }
            : {}),
          ...(typeof question.examCommission === 'string' && question.examCommission.trim()
            ? { examCommission: question.examCommission.trim() }
            : {}),
          stem: question.stem,
          options: Array.isArray(question.options) ? question.options : [],
          difficulty: question.difficulty,
          ...(typeof question.examName === 'string' && question.examName.trim()
            ? { examName: question.examName.trim() }
            : {}),
          ...(Number.isInteger(question.examYear) ? { examYear: question.examYear } : {}),
          ...(typeof question.paperName === 'string' && question.paperName.trim()
            ? { paperName: question.paperName.trim() }
            : {}),
          ...(typeof question.marks === 'number' && Number.isFinite(question.marks)
            ? { marks: question.marks }
            : {}),
          ...(Number.isInteger(question.wordLimit) ? { wordLimit: question.wordLimit } : {}),
          ...(typeof question.questionNumber === 'string' && question.questionNumber.trim()
            ? { questionNumber: question.questionNumber.trim() }
            : {}),
          ...(typeof question.modelAnswer === 'string' && question.modelAnswer.trim()
            ? { modelAnswer: question.modelAnswer.trim() }
            : {}),
          ...(typeof question.sourceReference === 'string' && question.sourceReference.trim()
            ? { sourceReference: question.sourceReference.trim() }
            : {}),
          ...(typeof question.isVerified === 'boolean' ? { isVerified: question.isVerified } : {}),
        }));

      return res.status(200).json({ questions });
    } catch (error) {
      const firestoreCode = typeof error === 'object' && error !== null && 'code' in error
        ? (error as { code?: unknown }).code
        : undefined;
      let databaseInfo: ReturnType<typeof getAdminDatabaseInfo> | null = null;
      try { databaseInfo = getAdminDatabaseInfo(); } catch { /* Preserve the original Firestore failure. */ }
      console.error('Unable to deliver practice questions:', {
        code: firestoreCode,
        message: error instanceof Error ? error.message : String(error),
        ...databaseInfo,
        firestoreDatabaseEnvOverride: process.env.FIRESTORE_DATABASE_ID && process.env.FIRESTORE_DATABASE_ID !== 'firebase-applet-config.json'
          ? process.env.FIRESTORE_DATABASE_ID
          : undefined,
      });
      if (firestoreCode === 5 || firestoreCode === 'not-found') {
        return res.status(503).json({
          error: 'The configured Firestore database could not be found. Verify the database ID and Firebase project in the app configuration.',
          code: 'FIRESTORE_DATABASE_NOT_FOUND',
        });
      }
      if (firestoreCode === 7 || firestoreCode === 'permission-denied') {
        return res.status(503).json({
          error: 'Firestore rejected the server Admin SDK request. The Google service identity used by this server needs Firestore data access in the configured Firebase project. Ask the project owner to verify its IAM role; do not make the questions collection public.',
          code: 'FIRESTORE_PERMISSION_DENIED',
        });
      }
      return res.status(500).json({ error: 'Unable to load practice questions. Check the server log for the Firestore error code.' });
    }
  });

  // Answer checking is server-side. The correct option is disclosed only after the student answers.
  app.post('/api/student/questions/:questionId/answer', verifyBearerToken, requireVerifiedEmail, async (req: AuthenticatedRequest, res: Response) => {
    try {
      const questionId = String(req.params.questionId || '');
      const optionIndex = req.body?.optionIndex;
      if (!/^[a-zA-Z0-9_-]{1,128}$/.test(questionId) ||
          !Number.isInteger(optionIndex) || optionIndex < 0 || optionIndex > 7) {
        return res.status(400).json({ error: 'Invalid question or answer selection.' });
      }

      const questionSnap = await getAdminDatabase().collection('questions').doc(questionId).get();
      if (!questionSnap.exists || questionSnap.data()?.isPublished !== true) {
        return res.status(404).json({ error: 'Published question not found.' });
      }
      const question = questionSnap.data()!;
      if (question.questionFormat === 'descriptive' || question.questionFormat === 'other' || !Array.isArray(question.options) || question.options.length < 2) {
        return res.status(400).json({ error: 'Descriptive or non-MCQ questions do not use option-based answer checking.' });
      }
      if (optionIndex >= question.options.length ||
          !Number.isInteger(question.correctOptionIndex) || question.correctOptionIndex < 0 ||
          question.correctOptionIndex >= question.options.length) {
        return res.status(409).json({ error: 'This question has invalid answer settings.' });
      }

      return res.status(200).json({
        correct: optionIndex === question.correctOptionIndex,
        correctOptionIndex: question.correctOptionIndex,
        explanation: typeof question.explanation === 'string' ? question.explanation : '',
      });
    } catch (error) {
      const firestoreCode = typeof error === 'object' && error !== null && 'code' in error
        ? (error as { code?: unknown }).code
        : undefined;
      console.error('Unable to check practice answer:', {
        code: firestoreCode,
        message: error instanceof Error ? error.message : String(error),
        ...(() => { try { return getAdminDatabaseInfo(); } catch { return {}; } })(),
      });
      if (firestoreCode === 7 || firestoreCode === 'permission-denied') {
        return res.status(503).json({
          error: 'Firestore rejected the server Admin SDK request. The Google service identity used by this server needs Firestore data access in the configured Firebase project.',
          code: 'FIRESTORE_PERMISSION_DENIED',
        });
      }
      return res.status(500).json({ error: 'Unable to check this answer right now.' });
    }
  });

  // Test delivery and grading happen on the trusted server. Correct answers never reach the browser.
  app.post('/api/student/tests/:testId/start', verifyBearerToken, requireVerifiedEmail, async (req: AuthenticatedRequest, res: Response) => {
    try {
      const db = getAdminDatabase();
      const testId = String(req.params.testId || '');
      if (!/^[a-zA-Z0-9_-]{1,128}$/.test(testId)) return res.status(400).json({ error: 'Invalid test ID.' });
      const testSnap = await db.collection('tests').doc(testId).get();
      if (!testSnap.exists || testSnap.data()?.isPublished !== true) return res.status(404).json({ error: 'Test not found or not published.' });
      const test = testSnap.data()!;
      const durationMinutes = Number(test.durationMinutes);
      const totalMarks = Number(test.totalMarks);
      const negativeMarking = Number(test.negativeMarking ?? 0);
      const ids = Array.isArray(test.questionIds) ? test.questionIds : [];
      if (!Number.isInteger(durationMinutes) || durationMinutes < 1 || durationMinutes > 600 ||
          !Number.isFinite(totalMarks) || totalMarks <= 0 || !Number.isFinite(negativeMarking) || negativeMarking < 0 ||
          ids.length < 1 || ids.length > 200 || ids.some((id: unknown) => typeof id !== 'string' || !/^[a-zA-Z0-9_-]{1,128}$/.test(id))) {
        return res.status(400).json({ error: 'This test has invalid settings or question references.' });
      }
      if (new Set(ids).size !== ids.length) return res.status(400).json({ error: 'This test contains duplicate question references.' });
      const docs = await Promise.all(ids.map((id: string) => db.collection('questions').doc(id).get()));
      const questionDocs = docs.map((d) => d.exists ? d.data()! : null);
      if (questionDocs.some((q) => !q || q.isPublished !== true || !Number.isInteger(q.correctOptionIndex) || !Array.isArray(q.options) || q.options.length < 2 || q.options.length > 8 || q.options.some((option: unknown) => typeof option !== 'string'))) {
        return res.status(409).json({ error: 'This test contains an unavailable or invalid question.' });
      }
      const attemptId = randomUUID().replace(/-/g, '');
      const startedAt = FieldValue.serverTimestamp();
      const topicId = typeof test.topicId === 'string' ? test.topicId : '';
      await db.collection('testAttempts').doc(attemptId).create({
        id: attemptId, userId: req.authUser!.uid, testId,
        ...(topicId ? { topicId } : {}),
        testTitle: String(test.title ?? 'Test').slice(0, 200),
        status: 'in_progress', score: 0, totalMarks, correctCount: 0,
        incorrectCount: 0, unansweredCount: ids.length, durationSeconds: 0, durationLimitSeconds: durationMinutes * 60,
        startedAt, updatedAt: startedAt,
      });
      const questions = questionDocs.map((q: any, index: number) => ({
        id: ids[index],
        stem: q.stem,
        options: q.options,
        questionType: typeof q.questionType === 'string' ? q.questionType : 'mcq',
        ...(q.questionType === 'pyq' && typeof q.examName === 'string' && q.examName.trim()
          ? { examName: q.examName.trim() }
          : {}),
        ...(q.questionType === 'pyq' && Number.isInteger(q.examYear)
          ? { examYear: q.examYear }
          : {}),
      }));
      return res.status(200).json({ attemptId, startedAt: Date.now(), test: { id: testId, topicId, testType: test.testType, title: test.title, durationMinutes, totalMarks, negativeMarking, questionCount: ids.length }, questions });
    } catch (error) {
      console.error('Unable to start test:', error);
      return res.status(500).json({ error: 'Unable to start test attempt.' });
    }
  });

  app.post('/api/student/tests/attempts/:attemptId/submit', verifyBearerToken, requireVerifiedEmail, async (req: AuthenticatedRequest, res: Response) => {
    try {
      const attemptId = String(req.params.attemptId || '');
      if (!/^[a-zA-Z0-9_-]{1,128}$/.test(attemptId)) return res.status(400).json({ error: 'Invalid attempt ID.' });
      const answers = req.body?.answers;
      if (!answers || typeof answers !== 'object' || Array.isArray(answers) || Object.keys(answers).length > 200 ||
          Object.values(answers).some((value) => !Number.isInteger(value) || (value as number) < 0 || (value as number) > 7)) {
        return res.status(400).json({ error: 'Invalid answer submission.' });
      }
      const db = getAdminDatabase();
      const attemptRef = db.collection('testAttempts').doc(attemptId);
      const attemptSnap = await attemptRef.get();
      if (!attemptSnap.exists) return res.status(404).json({ error: 'Attempt not found.' });
      const attempt = attemptSnap.data()!;
      if (attempt.userId !== req.authUser!.uid) return res.status(403).json({ error: 'This attempt does not belong to you.' });
      if (attempt.status !== 'in_progress') return res.status(409).json({ error: 'This attempt has already been submitted.' });
      const testSnap = await db.collection('tests').doc(attempt.testId).get();
      if (!testSnap.exists) return res.status(404).json({ error: 'Test configuration not found.' });
      const test = testSnap.data()!;
      const ids: string[] = Array.isArray(test.questionIds) ? test.questionIds : [];
      if (!ids.length || ids.length > 200) return res.status(409).json({ error: 'Test configuration is invalid.' });
      const questionDocs = await Promise.all(ids.map((id) => db.collection('questions').doc(id).get()));
      let correct = 0, incorrect = 0, unanswered = 0;
      questionDocs.forEach((snap, index) => {
        const q = snap.data();
        const selected = answers[ids[index]];
        if (!snap.exists || !q || !Number.isInteger(q.correctOptionIndex) || !Array.isArray(q.options)) throw new Error('Invalid question answer key.');
        if (selected === undefined) unanswered += 1;
        else if (selected >= q.options.length) incorrect += 1;
        else if (selected === q.correctOptionIndex) correct += 1;
        else incorrect += 1;
      });
      const startedAt = attempt.startedAt?.toDate?.();
      if (!startedAt || Number.isNaN(startedAt.getTime())) return res.status(409).json({ error: 'Attempt start time is invalid. Please contact support.' });
      const durationLimit = Number(attempt.durationLimitSeconds) || Math.max(60, Number(test.durationMinutes) * 60);
      const elapsed = Math.max(0, Math.floor((Date.now() - startedAt.getTime()) / 1000));
      const expired = elapsed > durationLimit + 10;
      // A short network grace period supports automatic client submission; late submissions score as unanswered.
      if (expired) {
        correct = 0;
        incorrect = 0;
        unanswered = ids.length;
      }
      const review = questionDocs.map((snap, index) => {
        const q = snap.data()!;
        const qId = ids[index];
        const rawSelected = answers[qId];
        const selectedIndex =
          !expired && Number.isInteger(rawSelected) && rawSelected >= 0 && rawSelected < q.options.length
            ? rawSelected
            : null;
        const isCorrect = !expired && selectedIndex !== null && selectedIndex === q.correctOptionIndex;
        return {
          questionId: qId,
          stem: String(q.stem || ''),
          options: Array.isArray(q.options) ? q.options.map((item: unknown) => String(item)) : [],
          selectedIndex,
          correctOptionIndex: q.correctOptionIndex,
          isCorrect,
          explanation: typeof q.explanation === 'string' ? q.explanation : '',
        };
      });
      const durationSeconds = Math.min(elapsed, durationLimit);
      const perQuestionMarks = ids.length ? Number(test.totalMarks) / ids.length : 0;
      const score = Math.round((correct * perQuestionMarks - incorrect * Number(test.negativeMarking || 0)) * 100) / 100;
      const result = { status: 'submitted', score, correctCount: correct, incorrectCount: incorrect, unansweredCount: unanswered,
        durationSeconds, expired, review, submittedAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() };
      await db.runTransaction(async (transaction) => {
        const fresh = await transaction.get(attemptRef);
        if (!fresh.exists || fresh.data()?.userId !== req.authUser!.uid) throw new Error('Attempt not found or not owned by this user.');
        if (fresh.data()?.status !== 'in_progress') throw new Error('This attempt has already been submitted.');
        transaction.update(attemptRef, result);
      });
      return res.status(200).json({ score, correct, incorrect, unanswered, totalMarks: Number(test.totalMarks), expired, durationSeconds, review });
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      if (message.includes('already been submitted')) return res.status(409).json({ error: message });
      if (message.includes('not owned')) return res.status(403).json({ error: message });
      console.error('Unable to grade test:', error);
      return res.status(500).json({ error: 'Unable to grade test submission.' });
    }
  });

  const httpServer = http.createServer(app);
  httpServer.on('error', (err) => {
    console.error(`HTTP server error on ${HOST}:${PORT}:`, err);
    process.exit(1);
  });

  if (!isProduction) {
    // AI Studio's reverse proxy may not expose Vite's HMR WebSocket reliably.
    // Keep HMR off by default; enable only when the environment explicitly opts in.
    const hmrDisabled = process.env.ENABLE_HMR !== 'true';
    const viteReady = import('vite').then(({ createServer: createViteServer }) =>
      createViteServer({
        server: {
          middlewareMode: true,
          hmr: hmrDisabled ? false : { server: httpServer },
          ws: hmrDisabled ? false : { server: httpServer },
          watch: hmrDisabled ? null : {},
        },
        appType: 'spa',
      })
    );

    viteReady.catch((err) => {
      console.error('Failed to initialize Vite dev middleware:', err);
      process.exit(1);
    });

    app.use(async (req, res, next) => {
      try {
        const vite = await viteReady;
        vite.middlewares(req, res, next);
      } catch (err) {
        next(err);
      }
    });
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (_req: Request, res: Response) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    } else {
      app.get('*', (_req: Request, res: Response) => {
        res.status(503).send('Application build directory not found. Run npm run build first.');
      });
    }
  }

  httpServer.listen(PORT, HOST, () => {
    console.log(`UK Prep server running on http://${HOST}:${PORT}`);
  });
}

createServer().catch((err) => {
  console.error('Failed to start UK Prep server:', err);
  process.exit(1);
});
