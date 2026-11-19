import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { MailCheck, RefreshCw } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { BrandMark } from '../../components/ui/BrandMark';

export function VerifyEmailPage() {
  const {
    firebaseUser,
    isAdmin,
    isAuthReady,
    needsEmailVerification,
    resendVerificationEmail,
    refreshVerificationStatus,
    logout,
  } = useAuth();
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);

  if (!isAuthReady) {
    return null;
  }

  if (!firebaseUser) {
    return <Navigate to="/login" replace />;
  }

  if (!needsEmailVerification) {
    return <Navigate to={isAdmin ? '/admin/overview' : '/student/dashboard'} replace />;
  }

  const handleCheck = async () => {
    setChecking(true);
    setStatusMessage(null);
    const verified = await refreshVerificationStatus();
    setChecking(false);
    if (verified) {
      navigate(isAdmin ? '/admin/overview' : '/student/dashboard', { replace: true });
    } else {
      setStatusMessage('Email verification not yet detected. Please click the link sent to your inbox, then try again.');
    }
  };

  const handleResend = async () => {
    setChecking(true);
    setStatusMessage(null);
    try {
      await resendVerificationEmail();
      setStatusMessage(`Verification email re-sent to ${firebaseUser.email}.`);
    } catch {
      setStatusMessage('Please wait a moment before requesting another verification email.');
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      <header className="h-16 px-4 sm:px-8 border-b border-edge bg-surface flex items-center justify-between">
        <BrandMark to="/" />
        <button
          type="button"
          onClick={() => void logout()}
          className="text-xs font-medium text-ink-muted hover:text-ink hover:underline"
        >
          Sign Out
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-md w-full bg-panel border border-edge rounded-xl p-6 sm:p-8 text-center shadow-sm">
          <div className="mx-auto w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent-text mb-4">
            <MailCheck className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-ink">
            Verify Your Email Address
          </h1>
          <p className="mt-2 text-sm text-ink-muted leading-relaxed">
            A verification link was sent to{' '}
            <span className="font-medium text-ink">{firebaseUser.email}</span>.
            Email verification is required before saving student profile data, course enrollments, or test attempts.
          </p>

          {statusMessage && (
            <div className="mt-4 p-3 rounded-lg bg-subtle border border-edge text-xs text-ink-muted">
              {statusMessage}
            </div>
          )}

          <div className="mt-6 space-y-3">
            <button
              type="button"
              disabled={checking}
              onClick={handleCheck}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <RefreshCw className="w-4 h-4" />
              <span>{checking ? 'Checking...' : 'I Have Verified — Continue'}</span>
            </button>
            <button
              type="button"
              disabled={checking}
              onClick={handleResend}
              className="w-full py-2.5 text-xs font-medium rounded-lg border border-edge-strong bg-subtle text-ink hover:bg-canvas transition-colors"
            >
              Resend Verification Email
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
