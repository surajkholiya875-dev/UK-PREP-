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
} from './server/authMiddleware';
import { randomUUID } from 'crypto';
import { FieldValue } from 'firebase-admin/firestore';

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

  app.use(express.json({ limit: '256kb' }));

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
      await db.collection('testAttempts').doc(attemptId).create({
        id: attemptId, userId: req.authUser!.uid, testId, testTitle: String(test.title ?? 'Test').slice(0, 200),
        status: 'in_progress', score: 0, totalMarks, correctCount: 0,
        incorrectCount: 0, unansweredCount: ids.length, durationSeconds: 0, durationLimitSeconds: durationMinutes * 60,
        startedAt, updatedAt: startedAt,
      });
      const questions = questionDocs.map((q: any, index: number) => ({ id: ids[index], stem: q.stem, options: q.options }));
      return res.status(200).json({ attemptId, startedAt: Date.now(), test: { id: testId, title: test.title, durationMinutes, totalMarks, negativeMarking, questionCount: ids.length }, questions });
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
      const expired = elapsed > durationLimit;
      const durationSeconds = Math.min(elapsed, durationLimit);
      const perQuestionMarks = ids.length ? Number(test.totalMarks) / ids.length : 0;
      const score = Math.round((correct * perQuestionMarks - incorrect * Number(test.negativeMarking || 0)) * 100) / 100;
      const result = { status: 'submitted', score, correctCount: correct, incorrectCount: incorrect, unansweredCount: unanswered,
        durationSeconds, expired, submittedAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() };
      await db.runTransaction(async (transaction) => {
        const fresh = await transaction.get(attemptRef);
        if (!fresh.exists || fresh.data()?.userId !== req.authUser!.uid) throw new Error('Attempt not found or not owned by this user.');
        if (fresh.data()?.status !== 'in_progress') throw new Error('This attempt has already been submitted.');
        transaction.update(attemptRef, result);
      });
      return res.status(200).json({ score, correct, incorrect, unanswered, totalMarks: Number(test.totalMarks), expired, durationSeconds });
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
    const hmrDisabled = process.env.DISABLE_HMR === 'true';
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
