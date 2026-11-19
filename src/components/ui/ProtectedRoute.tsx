import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LoadingState } from './StateBlocks';

function AccountRestrictedView({ email, onLogout }: { email: string | null; onLogout: () => Promise<void> }) {
  return (
    <div className="min-h-screen bg-canvas text-ink flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-panel border border-edge rounded-xl p-6 sm:p-8 text-center shadow-sm">
        <div className="mx-auto w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 flex items-center justify-center mb-4">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <h1 className="text-lg font-bold text-ink">
          Account Access Restricted
        </h1>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed">
          Your account ({email || 'registered user'}) is currently disabled or suspended. Portal access is blocked until an administrator restores your account status.
        </p>
        <button
          type="button"
          onClick={() => void onLogout()}
          className="mt-6 w-full py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export function StudentRoute({ children }: { children: React.ReactNode }) {
  const { firebaseUser, isAuthReady, needsEmailVerification, isAccountDisabled, logout } = useAuth();
  const location = useLocation();

  if (!isAuthReady) {
    return (
      <div className="min-h-screen bg-canvas text-ink p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <LoadingState label="Verifying student session..." />
        </div>
      </div>
    );
  }

  if (!firebaseUser) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (isAccountDisabled) {
    return <AccountRestrictedView email={firebaseUser.email} onLogout={logout} />;
  }

  if (needsEmailVerification) {
    return <Navigate to="/verify-email" replace />;
  }

  return <>{children}</>;
}

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const {
    firebaseUser,
    isAdmin,
    isAuthReady,
    needsEmailVerification,
    isAccountDisabled,
    logout,
  } = useAuth();
  const location = useLocation();

  if (!isAuthReady) {
    return (
      <div className="min-h-screen bg-canvas text-ink p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <LoadingState label="Verifying administrator authorization..." />
        </div>
      </div>
    );
  }

  if (!firebaseUser) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (isAccountDisabled) {
    return <AccountRestrictedView email={firebaseUser.email} onLogout={logout} />;
  }

  if (needsEmailVerification) {
    return <Navigate to="/verify-email" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/student/dashboard" replace />;
  }

  return <>{children}</>;
}
