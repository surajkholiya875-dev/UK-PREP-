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
} from './server/authMiddleware';

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

  // Validated contact inquiry endpoint for unauthenticated landing page visitors
  app.post('/api/contact', (req: Request, res: Response) => {
    const body = (req.body ?? {}) as ContactPayload;

    if (!isNonEmptyString(body.fullName, 2, 120)) {
      res.status(400).json({ error: 'Please provide your full name (2 to 120 characters).' });
      return;
    }
    if (!isNonEmptyString(body.email, 5, 160) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
      res.status(400).json({ error: 'Please provide a valid email address.' });
      return;
    }
    if (body.phone !== undefined && body.phone !== '' && !isNonEmptyString(body.phone, 7, 20)) {
      res.status(400).json({ error: 'Phone number must be between 7 and 20 characters.' });
      return;
    }
    if (!isNonEmptyString(body.subject, 3, 200)) {
      res.status(400).json({ error: 'Please provide an inquiry subject (3 to 200 characters).' });
      return;
    }
    if (!isNonEmptyString(body.message, 10, 3000)) {
      res.status(400).json({ error: 'Please enter a message of at least 10 characters.' });
      return;
    }

    const referenceId = `INQ-${Date.now().toString(36).toUpperCase()}`;

    res.status(201).json({
      accepted: true,
      referenceId,
      receivedAt: new Date().toISOString(),
      message: 'Your inquiry has been validated and recorded. Sign in to the Student Portal to track ongoing correspondence.',
    });
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
