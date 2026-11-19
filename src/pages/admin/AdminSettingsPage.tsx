import React, { useEffect, useState } from 'react';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { AppShell } from '../../components/ui/AppShell';
import { ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { ADMIN_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { db, handleFirestoreError, OperationType } from '../../lib/firebase';
import {
  fetchAllAdminCollection,
  fetchPlatformSettings,
  savePlatformSettings,
} from '../../services/firestoreService';
import { AdminGrant, BLUEPRINT_LIMITS } from '../../types/academic';

export function AdminSettingsPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [admins, setAdmins] = useState<AdminGrant[]>([]);

  const [settings, setSettings] = useState({
    platformName: 'UK Prep – Uttarakhand Exam Preparation Platform',
    supportEmail: 'support@ukprep.in',
    maintenanceNotice: '',
    allowNewRegistrations: true,
  });

  const [newAdmin, setNewAdmin] = useState({ uid: '', email: '' });

  const loadSettings = async () => {
    setLoading(true);
    setError(null);
    try {
      const [cfg, adminList] = await Promise.all([
        fetchPlatformSettings(),
        fetchAllAdminCollection<AdminGrant>('admins'),
      ]);
      if (cfg) {
        setSettings({
          platformName: cfg.platformName,
          supportEmail: cfg.supportEmail,
          maintenanceNotice: cfg.maintenanceNotice || '',
          allowNewRegistrations: cfg.allowNewRegistrations,
        });
      }
      setAdmins(adminList);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load platform settings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadSettings();
  }, []);

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser) return;
    setError(null);
    setNotice(null);
    try {
      await savePlatformSettings(firebaseUser.uid, settings);
      setNotice('Platform settings updated.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to save platform settings.');
    }
  };

  const handleGrantAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser) return;
    const uid = newAdmin.uid.trim();
    if (!BLUEPRINT_LIMITS.ID_PATTERN.test(uid)) {
      setError('User UID contains invalid characters.');
      return;
    }
    const path = `admins/${uid}`;
    try {
      await setDoc(doc(db, 'admins', uid), {
        uid,
        email: newAdmin.email.trim().slice(0, 160),
        grantedBy: firebaseUser.uid,
        grantedAt: serverTimestamp(),
      });
      setNotice(`Administrator role granted to ${newAdmin.email}.`);
      setNewAdmin({ uid: '', email: '' });
      await loadSettings();
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, path);
    }
  };

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Platform Settings"
      breadcrumb="UK Prep / Admin / Settings"
      isAdminWorkspace
    >
      {loading ? (
        <LoadingState label="Loading platform settings..." />
      ) : (
        <div className="space-y-6 max-w-3xl">
          {notice && <SuccessBanner message={notice} />}
          {error && <ErrorState message={error} onRetry={() => void loadSettings()} />}

          <form
            onSubmit={handleSaveSettings}
            className="bg-panel border border-edge rounded-xl p-6 shadow-sm space-y-4"
          >
            <h2 className="text-base font-semibold text-ink">Global Configuration</h2>
            <div>
              <label htmlFor="set-name" className="block text-xs font-medium text-ink-muted mb-1">Platform Name</label>
              <input
                id="set-name"
                type="text"
                required
                value={settings.platformName}
                onChange={(e) => setSettings((p) => ({ ...p, platformName: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="set-email" className="block text-xs font-medium text-ink-muted mb-1">Support Email</label>
              <input
                id="set-email"
                type="email"
                required
                value={settings.supportEmail}
                onChange={(e) => setSettings((p) => ({ ...p, supportEmail: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="set-notice" className="block text-xs font-medium text-ink-muted mb-1">Maintenance / Notice Banner</label>
              <input
                id="set-notice"
                type="text"
                value={settings.maintenanceNotice}
                onChange={(e) => setSettings((p) => ({ ...p, maintenanceNotice: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
            <label className="flex items-center gap-2 text-xs font-medium text-ink">
              <input
                type="checkbox"
                checked={settings.allowNewRegistrations}
                onChange={(e) => setSettings((p) => ({ ...p, allowNewRegistrations: e.target.checked }))}
                className="accent-accent"
              />
              <span>Allow New Student Registrations</span>
            </label>
            <button type="submit" className="px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors">
              Save Settings
            </button>
          </form>

          <div className="bg-panel border border-edge rounded-xl p-6 shadow-sm space-y-4">
            <div>
              <h2 className="text-base font-semibold text-ink">Controlled Administrator Provisioning</h2>
              <p className="text-xs text-ink-muted mt-1">
                Only verified administrators can grant access to another verified user UID in Firestore (/admins).
              </p>
            </div>
            <form onSubmit={handleGrantAdmin} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                required
                placeholder="Firebase User UID"
                value={newAdmin.uid}
                onChange={(e) => setNewAdmin((p) => ({ ...p, uid: e.target.value }))}
                className="px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent font-mono"
              />
              <input
                type="email"
                required
                placeholder="Admin Email"
                value={newAdmin.email}
                onChange={(e) => setNewAdmin((p) => ({ ...p, email: e.target.value }))}
                className="px-3 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
              <button type="submit" className="px-4 py-2 text-xs font-semibold rounded-lg border border-accent text-accent-text hover:bg-accent hover:text-accent-ink transition-colors">
                Grant Admin Role
              </button>
            </form>

            {admins.length > 0 && (
              <div className="pt-2 divide-y divide-edge text-xs">
                {admins.map((a) => (
                  <div key={a.uid} className="py-2 flex items-center justify-between">
                    <span className="text-ink">{a.email}</span>
                    <span className="font-mono text-ink-muted">{a.uid}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </AppShell>
  );
}
