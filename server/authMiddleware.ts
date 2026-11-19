import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { NextFunction, Request, Response } from 'express';
import { getApp, getApps, initializeApp } from 'firebase-admin/app';
import { DecodedIdToken, getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface AppletFirebaseConfig {
  projectId?: string;
  firestoreDatabaseId?: string;
}

function loadFirebaseConfig(): { projectId: string; firestoreDatabaseId?: string } | null {
  try {
    const configPath = path.resolve(__dirname, '..', 'firebase-applet-config.json');
    if (!fs.existsSync(configPath)) return null;
    const raw = JSON.parse(fs.readFileSync(configPath, 'utf8')) as AppletFirebaseConfig;
    if (!raw.projectId || raw.projectId === 'remixed-project-id') return null;
    return {
      projectId: raw.projectId,
      ...(typeof raw.firestoreDatabaseId === 'string' && raw.firestoreDatabaseId.trim()
        ? { firestoreDatabaseId: raw.firestoreDatabaseId.trim() }
        : {}),
    };
  } catch {
    return null;
  }
}

const firebaseConfig = loadFirebaseConfig();

export function getAdminApp() {
  if (!firebaseConfig?.projectId) {
    throw new Error('Firebase project configuration is unavailable.');
  }
  const existingApp = getApps().find((candidate) => candidate.name === '[DEFAULT]');
  if (existingApp) {
    const activeProjectId = existingApp.options.projectId;
    if (activeProjectId && activeProjectId !== firebaseConfig.projectId) {
      throw new Error(
        `Firebase Admin SDK project mismatch: config targets ${firebaseConfig.projectId}, but the active Admin app targets ${activeProjectId}.`
      );
    }
    return existingApp;
  }
  return initializeApp({ projectId: firebaseConfig.projectId });
}

export interface VerifiedRequestUser {
  uid: string;
  email: string | null;
  emailVerified: boolean;
  role: 'student' | 'admin';
  claims: Record<string, unknown>;
}

export interface AuthenticatedRequest extends Request {
  authUser?: VerifiedRequestUser;
}

const BOOTSTRAP_ADMIN_EMAIL = 'surajkholiya875@gmail.com';

export function resolveServerRole(decoded: DecodedIdToken): 'student' | 'admin' {
  const isVerifiedOwner =
    decoded.email_verified === true &&
    typeof decoded.email === 'string' &&
    decoded.email.trim().toLowerCase() === BOOTSTRAP_ADMIN_EMAIL;

  return isVerifiedOwner ? 'admin' : 'student';
}

export async function verifyBearerToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authentication required. Missing Bearer token.' });
    return;
  }

  const idToken = authHeader.slice('Bearer '.length).trim();
  if (!idToken) {
    res.status(401).json({ error: 'Authentication required. Empty token.' });
    return;
  }

  try {
    // verifyIdToken(idToken) verifies the signature & expiry against Google public keys (no IAM required).
    const decoded = await getAuth(getAdminApp()).verifyIdToken(idToken);
    // Server admin authorization is restricted to the single verified owner email.
    const role = resolveServerRole(decoded);
    req.authUser = {
      uid: decoded.uid,
      email: decoded.email ?? null,
      emailVerified: Boolean(decoded.email_verified),
      role,
      claims: { ...decoded },
    };
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired Firebase ID token.' });
  }
}

export function requireVerifiedEmail(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void {
  if (!req.authUser) {
    res.status(401).json({ error: 'Authentication required.' });
    return;
  }
  if (!req.authUser.emailVerified) {
    res.status(403).json({ error: 'Email verification is required before accessing protected resources.' });
    return;
  }
  next();
}

export function requireAdminRole(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void {
  if (!req.authUser) {
    res.status(401).json({ error: 'Authentication required.' });
    return;
  }
  if (!req.authUser.emailVerified || req.authUser.role !== 'admin') {
    res.status(403).json({ error: 'Forbidden. Verified administrator privileges required.' });
    return;
  }
  next();
}

export function getAdminDatabaseInfo() {
  const app = getAdminApp();
  return {
    configuredProjectId: firebaseConfig?.projectId ?? null,
    adminSdkProjectId: app.options.projectId ?? null,
    configuredDatabaseId: firebaseConfig?.firestoreDatabaseId || '(default)',
  };
}

export function getAdminDatabase() {
  const app = getAdminApp();
  const databaseId = firebaseConfig?.firestoreDatabaseId;
  return databaseId ? getFirestore(app, databaseId) : getFirestore(app);
}
