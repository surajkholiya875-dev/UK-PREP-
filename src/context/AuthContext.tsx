import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
} from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db, googleProvider, handleFirestoreError, OperationType } from '../lib/firebase';
import {
  validateDistrict,
  validateEmail,
  validateFullName,
  validateIndianPhoneNumber,
  validatePrimaryTargetExam,
  validateRegistrationInput,
} from '../lib/validation';
import { ThemeMode, UserPrivateInfo, UserProfile, UserRole } from '../types/academic';

const PENDING_PROFILE_KEY = 'ukprep_pending_registration';

interface PendingProfile {
  fullName: string;
  phoneNumber: string;
  district: string;
  primaryTargetExam: string;
}

export interface RegisterStudentInput {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword?: string;
  district: string;
  targetExam: string;
}

interface AuthContextValue {
  firebaseUser: User | null;
  profile: UserProfile | null;
  privateInfo: UserPrivateInfo | null;
  role: UserRole | null;
  isAdmin: boolean;
  isAuthReady: boolean;
  needsEmailVerification: boolean;
  isAccountDisabled: boolean;
  authError: string | null;
  clearAuthError: () => void;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  registerStudent: (input: RegisterStudentInput) => Promise<void>;
  resendVerificationEmail: () => Promise<void>;
  refreshVerificationStatus: () => Promise<boolean>;
  requestPasswordReset: (email: string) => Promise<void>;
  updateStudentProfile: (updates: {
    fullName: string;
    phone: string;
    district: string;
    targetExam: string;
    preferredTheme: ThemeMode;
  }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function mapFirebaseAuthError(error: unknown): string {
  const code = (error as { code?: string })?.code ?? '';
  switch (code) {
    case 'auth/operation-not-allowed':
      return 'This sign-in provider is not yet enabled in the Firebase Authentication console. Enable Email/Password or Google under Authentication > Sign-in method in Firebase Console.';
    case 'auth/email-already-in-use':
      return 'An account with this email address already exists. Please sign in or reset your password.';
    case 'auth/invalid-email':
      return 'The email address format is invalid. Please check and try again.';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Invalid email address or password. Please verify your credentials.';
    case 'auth/user-disabled':
      return 'This account has been disabled by an administrator. Please contact platform support.';
    case 'auth/weak-password':
      return 'Password must be at least 8 characters long.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please wait a few minutes before trying again.';
    case 'auth/network-request-failed':
      return 'Network connection error while contacting authentication services. Please check your internet connection.';
    case 'auth/popup-closed-by-user':
      return 'Sign-in window was closed before completing authentication.';
    case 'auth/unauthorized-domain':
      return 'This domain is not authorized for Google Sign-In in Firebase Console > Authentication > Settings > Authorized domains.';
    default:
      return error instanceof Error ? error.message : 'Authentication failed. Please try again.';
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [privateInfo, setPrivateInfo] = useState<UserPrivateInfo | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isAccountDisabled, setIsAccountDisabled] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const syncInFlightRef = React.useRef<Record<string, Promise<void>>>({});
  const overrideProfileRef = React.useRef<Record<string, PendingProfile>>({});

  const syncUserDocuments = useCallback(async (user: User, explicitOverride?: PendingProfile) => {
    if (explicitOverride) {
      overrideProfileRef.current[user.uid] = explicitOverride;
    }

    const existingPromise = syncInFlightRef.current[user.uid];
    if (existingPromise) {
      return existingPromise;
    }

    const runSync = async () => {
      const userDocRef = doc(db, 'users', user.uid);
      const privateDocRef = doc(db, 'users', user.uid, 'private', 'info');
      const adminDocRef = doc(db, 'admins', user.uid);

      let loadedProfile: UserProfile | null = null;
      let existingUserSnapExists = false;

      try {
        const snap = await getDoc(userDocRef);
        existingUserSnapExists = snap.exists();
        if (existingUserSnapExists) {
          loadedProfile = snap.data() as UserProfile;
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, `users/${user.uid}`);
      }

      if (!existingUserSnapExists) {
        let pending: PendingProfile | null = overrideProfileRef.current[user.uid] ?? null;
        if (!pending) {
          try {
            const raw = window.localStorage.getItem(PENDING_PROFILE_KEY);
            if (raw) pending = JSON.parse(raw) as PendingProfile;
          } catch {
            pending = null;
          }
        }

        const rawName = (pending?.fullName || user.displayName || user.email?.split('@')[0] || 'Student').trim();
        const fullName = (rawName.length >= 2 ? rawName : 'Student').slice(0, 120);
        const sanitizedPhone = (pending?.phoneNumber || '').replace(/[^0-9+\- ]/g, '').slice(0, 20);
        const district = (pending?.district || '').trim().slice(0, 80);
        const primaryTargetExam = (pending?.primaryTargetExam || '').trim().slice(0, 120);
        const normalizedEmail = (user.email || '').trim().slice(0, 160);

        try {
          await setDoc(userDocRef, {
            uid: user.uid,
            fullName,
            displayName: fullName,
            email: normalizedEmail,
            phoneNumber: sanitizedPhone,
            district,
            primaryTargetExam,
            targetExam: primaryTargetExam,
            role: 'student',
            emailVerified: Boolean(user.emailVerified),
            accountStatus: 'active',
            status: 'active',
            preferredTheme: 'light',
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          });
        } catch (error) {
          handleFirestoreError(error, OperationType.CREATE, `users/${user.uid}`);
        }

        try {
          await setDoc(privateDocRef, {
            uid: user.uid,
            fullName,
            email: normalizedEmail,
            phone: sanitizedPhone,
            district,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          });
        } catch (error) {
          handleFirestoreError(error, OperationType.CREATE, `users/${user.uid}/private/info`);
        }

        delete overrideProfileRef.current[user.uid];
        window.localStorage.removeItem(PENDING_PROFILE_KEY);

        try {
          const createdSnap = await getDoc(userDocRef);
          loadedProfile = createdSnap.exists() ? (createdSnap.data() as UserProfile) : null;
        } catch (error) {
          handleFirestoreError(error, OperationType.GET, `users/${user.uid}`);
        }
      } else if (loadedProfile && user.emailVerified) {
        const currentStatus = loadedProfile.accountStatus ?? loadedProfile.status ?? 'active';
        const needsBackfill =
          loadedProfile.emailVerified !== true ||
          !loadedProfile.fullName ||
          !loadedProfile.accountStatus ||
          loadedProfile.email === undefined ||
          loadedProfile.phoneNumber === undefined ||
          loadedProfile.district === undefined ||
          loadedProfile.primaryTargetExam === undefined;

        if (currentStatus === 'active' && needsBackfill) {
          const fallbackName = (loadedProfile.fullName || loadedProfile.displayName || user.displayName || 'Student')
            .trim()
            .slice(0, 120);
          try {
            await updateDoc(userDocRef, {
              fullName: fallbackName.length >= 2 ? fallbackName : 'Student',
              displayName: fallbackName.length >= 2 ? fallbackName : 'Student',
              email: (user.email || loadedProfile.email || '').slice(0, 160),
              phoneNumber: (loadedProfile.phoneNumber || '').replace(/[^0-9+\- ]/g, '').slice(0, 20),
              district: (loadedProfile.district || '').slice(0, 80),
              primaryTargetExam: (loadedProfile.primaryTargetExam || loadedProfile.targetExam || '').slice(0, 120),
              emailVerified: true,
              ...(!loadedProfile.accountStatus ? { accountStatus: 'active' } : {}),
              updatedAt: serverTimestamp(),
            });
            const refreshedSnap = await getDoc(userDocRef);
            if (refreshedSnap.exists()) {
              loadedProfile = refreshedSnap.data() as UserProfile;
            }
          } catch {
            // Keep loadedProfile as-is if backfill is skipped
          }
        }
      }

      // Check accountStatus enforcement
      const effectiveStatus = loadedProfile?.accountStatus ?? loadedProfile?.status ?? 'active';
      const disabled = effectiveStatus === 'disabled' || effectiveStatus === 'suspended';
      setIsAccountDisabled(disabled);
      if (disabled) {
        setProfile(loadedProfile);
        setPrivateInfo(null);
        setIsAdmin(false);
        return;
      }

      // Load isolated PII
      try {
        const pSnap = await getDoc(privateDocRef);
        if (pSnap.exists()) {
          setPrivateInfo(pSnap.data() as UserPrivateInfo);
        } else {
          setPrivateInfo(null);
        }
      } catch {
        setPrivateInfo(null);
      }

      // Verify admin authority from token custom claims, Firestore /admins/{uid}, server /api/auth/session, or verified bootstrap admin
      if (!user.emailVerified) {
        setProfile(loadedProfile);
        setIsAdmin(false);
        return;
      }

      let verifiedAdmin = false;
      try {
        const tokenResult = await user.getIdTokenResult();
        if (tokenResult.claims.admin === true || tokenResult.claims.role === 'admin') {
          verifiedAdmin = true;
        }
      } catch {
        verifiedAdmin = false;
      }

      if (!verifiedAdmin) {
        try {
          const adminSnap = await getDoc(adminDocRef);
          if (adminSnap.exists()) {
            verifiedAdmin = true;
          }
        } catch {
          verifiedAdmin = false;
        }
      }

      if (!verifiedAdmin && user.email?.toLowerCase() === 'surajkholiya875@gmail.com' && user.emailVerified) {
        verifiedAdmin = true;
      }

      setProfile(loadedProfile);
      setIsAdmin(verifiedAdmin);
    };

    const promise = runSync().finally(() => {
      delete syncInFlightRef.current[user.uid];
    });
    syncInFlightRef.current[user.uid] = promise;
    return promise;
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user) {
        try {
          await syncUserDocuments(user);
        } catch (err) {
          console.error('Error syncing user profile:', err);
          setAuthError(
            err instanceof Error ? err.message : 'Unable to sync user profile with Firestore.'
          );
        }
      } else {
        setProfile(null);
        setPrivateInfo(null);
        setIsAdmin(false);
        setIsAccountDisabled(false);
      }
      setIsAuthReady(true);
    });
    return () => unsub();
  }, [syncUserDocuments]);

  const clearAuthError = () => setAuthError(null);

  const loginWithEmail = async (email: string, password: string) => {
    setAuthError(null);
    const emailCheck = validateEmail(email);
    if (!emailCheck.valid) {
      const msg = emailCheck.error || 'Please enter a valid email address.';
      setAuthError(msg);
      throw new Error(msg);
    }
    try {
      const cred = await signInWithEmailAndPassword(auth, emailCheck.value, password);
      await syncUserDocuments(cred.user);
    } catch (error) {
      const msg = mapFirebaseAuthError(error);
      setAuthError(msg);
      throw new Error(msg);
    }
  };

  const loginWithGoogle = async () => {
    setAuthError(null);
    try {
      const cred = await signInWithPopup(auth, googleProvider);
      await syncUserDocuments(cred.user);
    } catch (error) {
      const msg = mapFirebaseAuthError(error);
      setAuthError(msg);
      throw new Error(msg);
    }
  };

  const registerStudent = async (input: RegisterStudentInput) => {
    setAuthError(null);
    const validated = validateRegistrationInput({
      fullName: input.fullName,
      phoneNumber: input.phone,
      email: input.email,
      district: input.district,
      primaryTargetExam: input.targetExam,
      password: input.password,
      confirmPassword: input.confirmPassword ?? input.password,
    });

    if (!validated.valid || !validated.sanitized) {
      const msg = validated.error || 'Please complete all required registration fields accurately.';
      setAuthError(msg);
      throw new Error(msg);
    }

    const { sanitized } = validated;
    const pendingData: PendingProfile = {
      fullName: sanitized.fullName,
      phoneNumber: sanitized.phoneNumber,
      district: sanitized.district,
      primaryTargetExam: sanitized.primaryTargetExam,
    };

    try {
      window.localStorage.setItem(PENDING_PROFILE_KEY, JSON.stringify(pendingData));
      const cred = await createUserWithEmailAndPassword(auth, sanitized.email, sanitized.password);
      overrideProfileRef.current[cred.user.uid] = pendingData;
      await updateProfile(cred.user, { displayName: sanitized.fullName });
      await sendEmailVerification(cred.user);
      await syncUserDocuments(cred.user, pendingData);
    } catch (error) {
      window.localStorage.removeItem(PENDING_PROFILE_KEY);
      const msg = mapFirebaseAuthError(error);
      setAuthError(msg);
      throw new Error(msg);
    }
  };

  const resendVerificationEmail = async () => {
    if (!auth.currentUser) return;
    setAuthError(null);
    try {
      await sendEmailVerification(auth.currentUser);
    } catch (error) {
      const msg = mapFirebaseAuthError(error);
      setAuthError(msg);
      throw new Error(msg);
    }
  };

  const refreshVerificationStatus = async (): Promise<boolean> => {
    if (!auth.currentUser) return false;
    await auth.currentUser.reload();
    await auth.currentUser.getIdToken(true);
    const refreshed = auth.currentUser;
    setFirebaseUser(refreshed);
    if (refreshed.emailVerified) {
      await syncUserDocuments(refreshed);
      return true;
    }
    return false;
  };

  const requestPasswordReset = async (email: string) => {
    setAuthError(null);
    const emailCheck = validateEmail(email);
    if (!emailCheck.valid) {
      const msg = emailCheck.error || 'Please enter a valid registered email address.';
      setAuthError(msg);
      throw new Error(msg);
    }
    try {
      await sendPasswordResetEmail(auth, emailCheck.value);
    } catch (error) {
      const msg = mapFirebaseAuthError(error);
      setAuthError(msg);
      throw new Error(msg);
    }
  };

  const updateStudentProfile = async (updates: {
    fullName: string;
    phone: string;
    district: string;
    targetExam: string;
    preferredTheme: ThemeMode;
  }) => {
    if (!firebaseUser) throw new Error('Not authenticated.');

    const nameCheck = validateFullName(updates.fullName);
    if (!nameCheck.valid) throw new Error(nameCheck.error);

    const phoneCheck = validateIndianPhoneNumber(updates.phone, false);
    if (!phoneCheck.valid) throw new Error(phoneCheck.error);

    const districtCheck = validateDistrict(updates.district, false);
    if (!districtCheck.valid) throw new Error(districtCheck.error);

    const examCheck = validatePrimaryTargetExam(updates.targetExam, false);
    if (!examCheck.valid) throw new Error(examCheck.error);

    const userPath = `users/${firebaseUser.uid}`;
    const privatePath = `users/${firebaseUser.uid}/private/info`;
    const userRef = doc(db, 'users', firebaseUser.uid);

    try {
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        await updateDoc(userRef, {
          fullName: nameCheck.value,
          displayName: nameCheck.value,
          phoneNumber: phoneCheck.value,
          district: districtCheck.value,
          primaryTargetExam: examCheck.value,
          targetExam: examCheck.value,
          email: (firebaseUser.email || '').slice(0, 160),
          emailVerified: Boolean(firebaseUser.emailVerified),
          preferredTheme: updates.preferredTheme,
          updatedAt: serverTimestamp(),
        });
      } else {
        await setDoc(userRef, {
          uid: firebaseUser.uid,
          fullName: nameCheck.value,
          displayName: nameCheck.value,
          email: (firebaseUser.email || '').slice(0, 160),
          phoneNumber: phoneCheck.value,
          district: districtCheck.value,
          primaryTargetExam: examCheck.value,
          targetExam: examCheck.value,
          role: 'student',
          emailVerified: Boolean(firebaseUser.emailVerified),
          accountStatus: 'active',
          status: 'active',
          preferredTheme: updates.preferredTheme,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, userPath);
    }

    const privRef = doc(db, 'users', firebaseUser.uid, 'private', 'info');
    let privExists = false;
    try {
      const snap = await getDoc(privRef);
      privExists = snap.exists();
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, privatePath);
    }

    if (privExists) {
      try {
        await updateDoc(privRef, {
          fullName: nameCheck.value,
          phone: phoneCheck.value,
          district: districtCheck.value,
          updatedAt: serverTimestamp(),
        });
      } catch (error) {
        handleFirestoreError(error, OperationType.UPDATE, privatePath);
      }
    } else {
      try {
        await setDoc(privRef, {
          uid: firebaseUser.uid,
          fullName: nameCheck.value,
          email: (firebaseUser.email || '').slice(0, 160),
          phone: phoneCheck.value,
          district: districtCheck.value,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      } catch (error) {
        handleFirestoreError(error, OperationType.CREATE, privatePath);
      }
    }

    await syncUserDocuments(firebaseUser);
  };

  const logout = async () => {
    await signOut(auth);
    setProfile(null);
    setPrivateInfo(null);
    setIsAdmin(false);
    setIsAccountDisabled(false);
    setAuthError(null);
  };

  const needsEmailVerification = Boolean(firebaseUser && !firebaseUser.emailVerified);
  // Strictly require verified server/rules-aligned admin flag; never trust mutable client state alone
  const role: UserRole | null = isAdmin ? 'admin' : firebaseUser ? 'student' : null;

  return (
    <AuthContext.Provider
      value={{
        firebaseUser,
        profile,
        privateInfo,
        role,
        isAdmin,
        isAuthReady,
        needsEmailVerification,
        isAccountDisabled,
        authError,
        clearAuthError,
        loginWithEmail,
        loginWithGoogle,
        registerStudent,
        resendVerificationEmail,
        refreshVerificationStatus,
        requestPasswordReset,
        updateStudentProfile,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}
