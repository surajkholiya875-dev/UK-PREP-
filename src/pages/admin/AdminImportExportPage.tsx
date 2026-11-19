import React, { useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import { Download, Upload } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { ErrorState, SuccessBanner } from '../../components/ui/StateBlocks';
import { ADMIN_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchAllAdminCollection, upsertAdminEntity } from '../../services/firestoreService';

const EXPORTABLE_COLLECTIONS = [
  'examinations',
  'courses',
  'subjects',
  'units',
  'chapters',
  'topics',
  'studyMaterials',
  'questions',
  'tests',
  'announcements',
  'currentAffairs',
] as const;

export function AdminImportExportPage() {
  const { firebaseUser } = useAuth();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [pendingImport, setPendingImport] = useState<Record<string, Record<string, unknown>[]>>({});
  const [importPreview, setImportPreview] = useState<{
    fileName: string;
    collections: string[];
    totalRecords: number;
  } | null>(null);

  const handleExportAll = async () => {
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const bundle: Record<string, unknown[]> = {};
      for (const col of EXPORTABLE_COLLECTIONS) {
        bundle[col] = await fetchAllAdminCollection(col);
      }
      const payload = {
        exportedAt: new Date().toISOString(),
        platform: 'UK Prep',
        collections: bundle,
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ukprep-academic-export-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setNotice('Exported academic collections JSON archive.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Export failed.');
    } finally {
      setBusy(false);
    }
  };

  const handleFileInspect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPendingImport({}); setImportPreview(null);
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    setNotice(null);
    try {
      const text = await file.text();
      if (file.size > 10 * 1024 * 1024) throw new Error('Archive must be 10 MB or smaller.');
      const parsed = JSON.parse(text) as { platform?: string; collections?: Record<string, unknown[]> };
      if (parsed.platform !== 'UK Prep') throw new Error('This is not a UK Prep export archive.');
      if (!parsed.collections || typeof parsed.collections !== 'object') {
        throw new Error('Invalid UK Prep export JSON format: missing "collections" object.');
      }
      const cols = Object.keys(parsed.collections);
      const allowed = new Set<string>(EXPORTABLE_COLLECTIONS);
      const normalized: Record<string, Record<string, unknown>[]> = {};
      for (const name of cols) {
        if (!allowed.has(name)) throw new Error('Unsupported collection: ' + name);
        const rows = parsed.collections[name];
        if (!Array.isArray(rows)) throw new Error('Collection ' + name + ' must contain an array.');
        const seen = new Set<string>();
        normalized[name] = rows.map((row, index) => {
          if (!row || typeof row !== 'object' || Array.isArray(row)) throw new Error('Invalid record in ' + name + ' at row ' + (index + 1));
          const record = row as Record<string, unknown>;
          if (typeof record.id !== 'string' || !/^[a-zA-Z0-9_-]{1,128}$/.test(record.id)) throw new Error('Invalid ID in ' + name + ' at row ' + (index + 1));
          if (seen.has(record.id)) throw new Error('Duplicate ID ' + record.id + ' in ' + name);
          seen.add(record.id);
          return record;
        });
      }
      setPendingImport(normalized);
      const total = cols.reduce(
        (sum, k) => sum + (Array.isArray(parsed.collections?.[k]) ? parsed.collections[k].length : 0),
        0
      );
      setImportPreview({ fileName: file.name, collections: cols, totalRecords: total });
      setNotice(`Validated "${file.name}" (${total} records across ${cols.length} collections). Existing IDs will be skipped; nothing has been imported yet.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to parse JSON file.');
    }
  };

  const handleImport = async () => {
    if (!firebaseUser) { setError('Please sign in again before importing.'); return; }
    setBusy(true); setError(null); setNotice(null);
    try {
      let imported = 0; let skipped = 0;
      for (const collectionName of EXPORTABLE_COLLECTIONS) {
        const rows = pendingImport[collectionName] ?? [];
        if (!rows.length) continue;
        const existing = await fetchAllAdminCollection<{ id: string }>(collectionName);
        const existingIds = new Set(existing.map((item) => item.id));
        for (const record of rows) {
          if (existingIds.has(String(record.id))) { skipped += 1; continue; }
          const restored = { ...record, createdBy: firebaseUser.uid } as Record<string, unknown>;
          for (const [key, value] of Object.entries(restored)) {
            if (value && typeof value === 'object' && 'seconds' in value && 'nanoseconds' in value) {
              const timestamp = value as { seconds: number; nanoseconds: number };
              if (Number.isFinite(timestamp.seconds) && Number.isFinite(timestamp.nanoseconds)) {
                restored[key] = Timestamp.fromMillis(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
              }
            }
          }
          await upsertAdminEntity(collectionName, String(record.id), restored as { id: string }, false);
          imported += 1;
        }
      }
      setNotice('Import complete: ' + imported + ' new records added; ' + skipped + ' existing IDs skipped. Review data before publishing.');
      setPendingImport({}); setImportPreview(null);
    } catch (err) { setError(err instanceof Error ? err.message : 'Import failed. Earlier records may already have been imported; export a backup before retrying.'); }
    finally { setBusy(false); }
  };

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Data Import & Export"
      breadcrumb="UK Prep / Admin / Import & Export"
      isAdminWorkspace
    >
      <div className="space-y-6 max-w-3xl">
        {notice && <SuccessBanner message={notice} />}
        {error && <ErrorState message={error} />}

        <div className="bg-panel border border-edge rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-base font-semibold text-ink">
            Export Academic Archive (JSON)
          </h2>
          <p className="text-sm text-ink-muted">
            Download a structured JSON backup of all Examinations, Courses, Subjects, Units, Chapters, Topics, Study Materials, Questions, Tests, Current Affairs, and Announcements for GitHub versioning or migration.
          </p>
          <button
            type="button"
            disabled={busy}
            onClick={() => void handleExportAll()}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>{busy ? 'Exporting...' : 'Download JSON Export'}</span>
          </button>
        </div>

        <div className="bg-panel border border-edge rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-base font-semibold text-ink">
            Validate Import Archive
          </h2>
          <p className="text-sm text-ink-muted">
            Select a UK Prep JSON archive to verify schema structure and record counts before bulk synchronization.
          </p>
          <label className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-lg border border-edge-strong bg-subtle text-ink cursor-pointer hover:bg-canvas transition-colors">
            <Upload className="w-4 h-4" />
            <span>Select JSON Archive</span>
            <input type="file" accept=".json,application/json" onChange={handleFileInspect} className="sr-only" />
          </label>

          {importPreview && (
            <div className="p-4 rounded-lg bg-subtle border border-edge text-xs space-y-1">
              <div className="font-semibold text-ink">
                File: {importPreview.fileName}
              </div>
              <div className="font-mono tabular-nums text-accent-text">
                Records detected: {importPreview.totalRecords}
              </div>
              <div className="text-ink-muted">
                Collections: {importPreview.collections.join(', ')}
              </div>
              <button type="button" disabled={busy || importPreview.totalRecords === 0} onClick={() => void handleImport()} className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60">
                <Upload className="w-4 h-4" /> {busy ? 'Importing...' : 'Import New Records'}
              </button>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
