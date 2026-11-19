import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, KeyRound, Mail } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { BrandMark } from '../../components/ui/BrandMark';
import { ThemeToggle } from '../../components/ui/ThemeToggle';

export function LoginPage() {
  const {
    firebaseUser,
    isAdmin,
    isAuthReady,
    needsEmailVerification,
    isAccountDisabled,
    loginWithEmail,
    loginWithGoogle,
    requestPasswordReset,
    logout,
    authError,
    clearAuthError,
  } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [resetMode, setResetMode] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  useEffect(() => {
    clearAuthError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isAuthReady || !firebaseUser) return;
    if (isAccountDisabled) return;
    if (needsEmailVerification) {
      navigate('/verify-email', { replace: true });
    } else if (isAdmin) {
      navigate('/admin/overview', { replace: true });
    } else {
      navigate('/student/dashboard', { replace: true });
    }
  }, [firebaseUser, isAdmin, isAuthReady, isAccountDisabled, needsEmailVerification, navigate]);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await loginWithEmail(email, password);
    } catch {
      // Handled via authError state
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setSubmitting(true);
    try {
      await loginWithGoogle();
    } catch {
      // Handled via authError state
    } finally {
      setSubmitting(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResetSent(false);
    try {
      await requestPasswordReset(email);
      setResetSent(true);
    } catch {
      // Handled via authError state
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      <header className="h-16 px-4 sm:px-8 border-b border-edge bg-surface flex items-center justify-between">
        <BrandMark to="/" />
        <div className="flex items-center gap-3">
          <ThemeToggle compact />
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md bg-panel border border-edge rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-ink">
              {resetMode ? 'Reset Password' : 'Sign In to UK Prep'}
            </h1>
            <p className="mt-1.5 text-sm text-ink-muted">
              {resetMode
                ? 'Enter your registered email address to receive a password reset link.'
                : 'Access your student courses, mock tests, and learning progress.'}
            </p>
          </div>

          {isAccountDisabled && firebaseUser && (
            <div
              role="alert"
              className="mb-5 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-2"
            >
              <p className="font-semibold">Account Disabled or Suspended</p>
              <p>
                Access for {firebaseUser.email} has been restricted by an administrator. Contact platform support for assistance.
              </p>
              <button
                type="button"
                onClick={() => void logout()}
                className="underline font-medium"
              >
                Sign out of this account
              </button>
            </div>
          )}

          {authError && (
            <div
              role="alert"
              className="mb-5 p-3.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs sm:text-sm text-red-800 dark:text-red-300 leading-relaxed"
            >
              {authError}
            </div>
          )}

          {resetSent && (
            <div className="mb-5 p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200">
              Password reset link sent to {email}. Check your inbox and spam folder.
            </div>
          )}

          {!resetMode ? (
            <>
              <button
                type="button"
                disabled={submitting}
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg border border-edge-strong bg-subtle text-sm font-medium text-ink hover:bg-canvas disabled:opacity-60 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              <div className="my-5 flex items-center gap-3 text-xs text-ink-faint">
                <div className="flex-1 h-px bg-edge" />
                <span>or sign in with email</span>
                <div className="flex-1 h-px bg-edge" />
              </div>

              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div>
                  <label htmlFor="login-email" className="block text-xs font-medium text-ink-muted mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-ink-faint absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="login-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="login-password" className="block text-xs font-medium text-ink-muted">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        clearAuthError();
                        setResetMode(true);
                      }}
                      className="text-xs font-medium text-accent-text hover:text-accent-hover hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-ink-faint absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="login-password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {submitting ? 'Signing In...' : 'Sign In'}
                </button>
              </form>
            </>
          ) : (
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div>
                <label htmlFor="reset-email" className="block text-xs font-medium text-ink-muted mb-1.5">
                  Registered Email Address
                </label>
                <input
                  id="reset-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="name@example.com"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {submitting ? 'Sending Reset Link...' : 'Send Reset Link'}
              </button>
              <button
                type="button"
                onClick={() => {
                  clearAuthError();
                  setResetMode(false);
                }}
                className="w-full py-2 text-xs font-medium text-ink-muted hover:text-ink"
              >
                Return to Sign In
              </button>
            </form>
          )}

          <p className="mt-6 pt-5 border-t border-edge text-center text-xs text-ink-muted">
            New aspirant?{' '}
            <Link to="/register" className="font-semibold text-accent-text hover:text-accent-hover hover:underline">
              Create a student account
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
