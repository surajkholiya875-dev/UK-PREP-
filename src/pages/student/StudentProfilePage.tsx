import React, { useEffect, useState } from 'react';
import { AppShell } from '../../components/ui/AppShell';
import { ErrorState, SuccessBanner } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { ThemeMode, UTTARAKHAND_DISTRICTS } from '../../types/academic';

export function StudentProfilePage() {
  const { firebaseUser, profile, privateInfo, updateStudentProfile } = useAuth();
  const { theme, setTheme } = useTheme();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    district: '',
    targetExam: '',
    preferredTheme: theme as ThemeMode,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    setForm({
      fullName: privateInfo?.fullName || profile?.fullName || profile?.displayName || firebaseUser?.displayName || '',
      phone: privateInfo?.phone || profile?.phoneNumber || '',
      district: privateInfo?.district || profile?.district || '',
      targetExam: profile?.primaryTargetExam || profile?.targetExam || '',
      preferredTheme: profile?.preferredTheme || theme,
    });
  }, [profile, privateInfo, firebaseUser, theme]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      await updateStudentProfile(form);
      setTheme(form.preferredTheme);
      setSuccess('Profile and study preferences saved.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to update profile.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Profile & Settings"
      breadcrumb="UK Prep / Student / Profile"
    >
      <div className="max-w-2xl space-y-6">
        {success && <SuccessBanner message={success} />}
        {error && <ErrorState message={error} />}

        <form
          onSubmit={handleSave}
          className="bg-panel border border-edge rounded-xl p-6 space-y-5 shadow-sm"
        >
          <div>
            <h2 className="text-base font-semibold text-ink">
              Personal Account Information
            </h2>
            <p className="text-xs text-ink-muted mt-1">
              Your email, phone number, and district are stored in an isolated private profile document accessible only to you and verified administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="prof-name" className="block text-xs font-medium text-ink-muted mb-1.5">
                Full Name
              </label>
              <input
                id="prof-name"
                type="text"
                required
                minLength={2}
                maxLength={120}
                value={form.fullName}
                onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="prof-email" className="block text-xs font-medium text-ink-muted mb-1.5">
                Email Address
              </label>
              <input
                id="prof-email"
                type="email"
                disabled
                value={privateInfo?.email || firebaseUser?.email || ''}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-edge bg-subtle text-ink-faint"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="prof-phone" className="block text-xs font-medium text-ink-muted mb-1.5">
                Phone Number
              </label>
              <input
                id="prof-phone"
                type="tel"
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder="+91 98XXXXXXXX"
              />
            </div>

            <div>
              <label htmlFor="prof-district" className="block text-xs font-medium text-ink-muted mb-1.5">
                District
              </label>
              <select
                id="prof-district"
                value={form.district}
                onChange={(e) => setForm((p) => ({ ...p, district: e.target.value }))}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="prof-exam" className="block text-xs font-medium text-ink-muted mb-1.5">
                Target Examination
              </label>
              <input
                id="prof-exam"
                type="text"
                maxLength={120}
                value={form.targetExam}
                onChange={(e) => setForm((p) => ({ ...p, targetExam: e.target.value }))}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder="e.g., UKPSC Upper PCS"
              />
            </div>

            <div>
              <label htmlFor="prof-theme" className="block text-xs font-medium text-ink-muted mb-1.5">
                Study Theme
              </label>
              <select
                id="prof-theme"
                value={form.preferredTheme}
                onChange={(e) =>
                  setForm((p) => ({ ...p, preferredTheme: e.target.value as ThemeMode }))
                }
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              >
                <option value="dark">Dark Navy Mode</option>
                <option value="light">Light Study Mode</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </AppShell>
  );
}
