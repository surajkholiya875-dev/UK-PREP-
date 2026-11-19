import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState, SuccessBanner } from '../../components/ui/StateBlocks';
import { ADMIN_NAV_ITEMS } from '../../config/navigation';
import {
  fetchAllAdminCollection,
  fetchUserPrivateInfo,
  updateStudentStatusByAdmin,
} from '../../services/firestoreService';
import { UserPrivateInfo, UserProfile } from '../../types/academic';

export function AdminStudentsPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [privateMap, setPrivateMap] = useState<Record<string, UserPrivateInfo | null>>({});
  const [searchTerm, setSearchTerm] = useState('');

  const loadStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const list = await fetchAllAdminCollection<UserProfile>('users');
      setUsers(list);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load students.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadStudents();
  }, []);

  const handleLoadPrivate = async (uid: string) => {
    try {
      const info = await fetchUserPrivateInfo(uid);
      setPrivateMap((prev) => ({ ...prev, [uid]: info }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load private student contact info.');
    }
  };

  const handleToggleStatus = async (user: UserProfile) => {
    const currentStatus = user.accountStatus || user.status || 'active';
    const next = currentStatus === 'active' ? 'disabled' : 'active';
    const name = user.fullName || user.displayName;
    setNotice(null);
    try {
      await updateStudentStatusByAdmin(user.uid, next);
      setUsers((prev) =>
        prev.map((u) => (u.uid === user.uid ? { ...u, accountStatus: next, status: next } : u))
      );
      setNotice(`Updated account status for "${name}" to ${next}.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to update student status.');
    }
  };

  const filtered = users.filter((u) => {
    const q = searchTerm.toLowerCase();
    if (!q.trim()) return true;
    return (
      (u.fullName || u.displayName).toLowerCase().includes(q) ||
      (u.email || '').toLowerCase().includes(q) ||
      (u.primaryTargetExam || u.targetExam || '').toLowerCase().includes(q)
    );
  });

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Student Management"
      breadcrumb="UK Prep / Admin / Students"
      isAdminWorkspace
    >
      <div className="space-y-6">
        <div className="bg-panel border border-edge rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">
            Student PII (email, phone, district) is stored in isolated private sub-documents and fetched only on explicit request.
          </p>
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="w-4 h-4 text-ink-faint absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search name, email, or exam..."
              className="w-full pl-9 pr-3.5 py-2 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </div>
        </div>

        {notice && <SuccessBanner message={notice} />}

        {loading ? (
          <LoadingState label="Loading registered accounts..." />
        ) : error ? (
          <ErrorState message={error} onRetry={() => void loadStudents()} />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No student accounts found"
            description="Registered students will appear here once aspirants sign up."
          />
        ) : (
          <div className="bg-panel border border-edge rounded-xl shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-edge text-xs text-ink-muted">
                  <th className="py-3 px-4 font-medium">Full Name</th>
                  <th className="py-3 px-4 font-medium">Role</th>
                  <th className="py-3 px-4 font-medium">Target Exam</th>
                  <th className="py-3 px-4 font-medium">Contact (PII)</th>
                  <th className="py-3 px-4 font-medium">Verified</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                  <th className="py-3 px-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-edge">
                {filtered.map((u) => {
                  const pii = privateMap[u.uid];
                  const effectiveStatus = u.accountStatus || u.status || 'active';
                  return (
                    <tr key={u.uid}>
                      <td className="py-3 px-4 font-medium text-ink">
                        {u.fullName || u.displayName}
                      </td>
                      <td className="py-3 px-4 font-mono text-xs capitalize text-ink-muted">{u.role}</td>
                      <td className="py-3 px-4 text-xs text-ink-muted">
                        {u.primaryTargetExam || u.targetExam || '—'}
                      </td>
                      <td className="py-3 px-4 text-xs">
                        {pii ? (
                          <div className="text-ink-muted">
                            <div className="text-ink">{pii.email}</div>
                            <div className="font-mono text-ink-faint">{pii.phone || u.phoneNumber || 'No phone'}</div>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => void handleLoadPrivate(u.uid)}
                            className="text-accent-text font-medium hover:underline"
                          >
                            Load Contact Info
                          </button>
                        )}
                      </td>
                      <td className="py-3 px-4 text-xs text-ink-muted">
                        {u.emailVerified ? 'Yes' : 'Pending'}
                      </td>
                      <td className="py-3 px-4 text-xs font-medium capitalize text-ink">{effectiveStatus}</td>
                      <td className="py-3 px-4 text-right">
                        {u.role !== 'admin' && (
                          <button
                            type="button"
                            onClick={() => void handleToggleStatus(u)}
                            className="px-3 py-1.5 text-xs font-medium rounded-md border border-edge-strong bg-subtle text-ink hover:bg-canvas transition-colors"
                          >
                            {effectiveStatus === 'active' ? 'Disable' : 'Activate'}
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AppShell>
  );
}
