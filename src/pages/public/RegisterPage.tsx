import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { BrandMark } from '../../components/ui/BrandMark';
import { ThemeToggle } from '../../components/ui/ThemeToggle';
import { validateRegistrationInput } from '../../lib/validation';
import { UTTARAKHAND_DISTRICTS } from '../../types/academic';

export function RegisterPage() {
  const {
    firebaseUser,
    isAdmin,
    needsEmailVerification,
    registerStudent,
    loginWithGoogle,
    authError,
    clearAuthError,
  } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    district: '',
    targetExam: 'UKPSC Combined State Civil Services',
  });
  const [localError, setLocalError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    clearAuthError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (firebaseUser) {
      if (needsEmailVerification) {
        navigate('/verify-email', { replace: true });
      } else if (isAdmin) {
        navigate('/admin/overview', { replace: true });
      } else {
        navigate('/student/dashboard', { replace: true });
      }
    }
  }, [firebaseUser, isAdmin, needsEmailVerification, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setLocalError(null);
    setSuccessMessage(null);
    clearAuthError();

    const validation = validateRegistrationInput({
      fullName: form.fullName,
      phoneNumber: form.phone,
      email: form.email,
      district: form.district,
      primaryTargetExam: form.targetExam,
      password: form.password,
      confirmPassword: form.confirmPassword,
    });

    if (!validation.valid) {
      setLocalError(validation.error || 'Please verify all registration fields.');
      return;
    }

    setSubmitting(true);
    try {
      await registerStudent({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        password: form.password,
        confirmPassword: form.confirmPassword,
        district: form.district,
        targetExam: form.targetExam,
      });
      setSuccessMessage('Account created and verification email dispatched. Redirecting to verification...');
      navigate('/verify-email', { replace: true });
    } catch {
      // Handled via authError
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
        <div className="w-full max-w-lg bg-panel border border-edge rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-ink">
              Student Registration
            </h1>
            <p className="mt-1.5 text-sm text-ink-muted">
              Create your personal UK Prep aspirant account to enroll in courses, practice MCQs, and track mock test performance.
            </p>
          </div>

          <div className="mb-5 p-3 rounded-lg bg-subtle border border-edge flex items-start gap-2.5 text-xs text-ink-muted">
            <Shield className="w-4 h-4 text-accent-text shrink-0 mt-0.5" />
            <span>
              Public registration provisions Student accounts only. Administrator roles are assigned strictly through controlled server-side verification.
            </span>
          </div>

          {successMessage && (
            <div
              role="status"
              className="mb-5 p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200"
            >
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {(localError || authError) && (
            <div
              role="alert"
              className="mb-5 p-3.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs sm:text-sm text-red-800 dark:text-red-300 leading-relaxed"
            >
              {localError || authError}
            </div>
          )}

          <button
            type="button"
            disabled={submitting}
            onClick={() => void loginWithGoogle()}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg border border-edge-strong bg-subtle text-sm font-medium text-ink hover:bg-canvas disabled:opacity-60 transition-colors"
          >
            <span>Quick Register with Google</span>
          </button>

          <div className="my-5 flex items-center gap-3 text-xs text-ink-faint">
            <div className="flex-1 h-px bg-edge" />
            <span>or register with email & phone</span>
            <div className="flex-1 h-px bg-edge" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="reg-name" className="block text-xs font-medium text-ink-muted mb-1.5">
                  Full Name *
                </label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={120}
                  value={form.fullName}
                  onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="Full legal name"
                />
              </div>

              <div>
                <label htmlFor="reg-phone" className="block text-xs font-medium text-ink-muted mb-1.5">
                  Indian Mobile Number *
                </label>
                <input
                  id="reg-phone"
                  type="tel"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="+91 98XXXXXXXX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="reg-email" className="block text-xs font-medium text-ink-muted mb-1.5">
                Email Address *
              </label>
              <input
                id="reg-email"
                type="email"
                required
                maxLength={160}
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder="aspirant@example.com"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="reg-district" className="block text-xs font-medium text-ink-muted mb-1.5">
                  District *
                </label>
                <select
                  id="reg-district"
                  required
                  value={form.district}
                  onChange={(e) => setForm((p) => ({ ...p, district: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Select district</option>
                  {UTTARAKHAND_DISTRICTS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                  <option value="Outside Uttarakhand">Outside Uttarakhand</option>
                </select>
              </div>

              <div>
                <label htmlFor="reg-exam" className="block text-xs font-medium text-ink-muted mb-1.5">
                  Primary Target Exam *
                </label>
                <select
                  id="reg-exam"
                  required
                  value={form.targetExam}
                  onChange={(e) => setForm((p) => ({ ...p, targetExam: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="UKPSC Combined State Civil Services">UKPSC Upper / Lower PCS</option>
                  <option value="UKPSC RO / ARO">UKPSC RO / ARO</option>
                  <option value="UKSSSC Group C / VDO / Patwari">UKSSSC Group C / VDO / Patwari</option>
                  <option value="UPSC Civil Services">UPSC Civil Services</option>
                  <option value="Other Competitive Examinations">Other National / State Exams</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="reg-password" className="block text-xs font-medium text-ink-muted mb-1.5">
                  Password *
                </label>
                <input
                  id="reg-password"
                  type="password"
                  required
                  minLength={8}
                  maxLength={128}
                  value={form.password}
                  onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="Minimum 8 characters"
                />
              </div>

              <div>
                <label htmlFor="reg-confirm" className="block text-xs font-medium text-ink-muted mb-1.5">
                  Confirm Password *
                </label>
                <input
                  id="reg-confirm"
                  type="password"
                  required
                  minLength={8}
                  maxLength={128}
                  value={form.confirmPassword}
                  onChange={(e) => setForm((p) => ({ ...p, confirmPassword: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="Re-enter password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {submitting ? 'Creating Student Account...' : 'Register Student Account'}
            </button>
          </form>

          <p className="mt-6 pt-5 border-t border-edge text-center text-xs text-ink-muted">
            Already registered?{' '}
            <Link to="/login" className="font-semibold text-accent-text hover:text-accent-hover hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
