import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Download, RefreshCw, Upload, XCircle } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { ErrorState, SuccessBanner } from '../../components/ui/StateBlocks';
import { ADMIN_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  EXPORTABLE_COLLECTIONS,
  ExportableCollectionName,
  ImportConflictMode,
  prepareAdminImportRecord,
} from '../../lib/adminImportExport';
import {
  BatchWriteOperation,
  fetchAllAdminCollection,
  resilientBatchUpsertAdminEntities,
} from '../../services/firestoreService';

interface ImportRecordReportRow {
  collectionName: ExportableCollectionName;
  id: string;
  action: 'created' | 'updated' | 'skipped' | 'failed';
  message?: string;
  rawRecord?: Record<string, unknown>;
}

interface ImportReportSummary {
  created: number;
  updated: number;
  skipped: number;
  failed: number;
  rows: ImportRecordReportRow[];
}

export function AdminImportExportPage() {
  const { firebaseUser, isAdmin } = useAuth();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [conflictMode, setConflictMode] = useState<ImportConflictMode>('skip_existing');
  const [progressText, setProgressText] = useState<string | null>(null);

  const [pendingImport, setPendingImport] = useState<Record<string, Record<string, unknown>[]>>({});
  const [importPreview, setImportPreview] = useState<{
    fileName: string;
    collections: string[];
    totalRecords: number;
  } | null>(null);
  const [importReport, setImportReport] = useState<ImportReportSummary | null>(null);
  const [reportFilter, setReportFilter] = useState<'all' | 'failed' | 'created' | 'updated' | 'skipped'>('all');

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
    setPendingImport({});
    setImportPreview(null);
    setImportReport(null);
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
          if (!row || typeof row !== 'object' || Array.isArray(row)) {
            throw new Error('Invalid record in ' + name + ' at row ' + (index + 1));
          }
          const record = row as Record<string, unknown>;
          if (typeof record.id !== 'string' || !/^[a-zA-Z0-9_-]{1,128}$/.test(record.id)) {
            throw new Error('Invalid ID in ' + name + ' at row ' + (index + 1));
          }
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
      setNotice(
        `Validated "${file.name}" (${total} records across ${cols.length} collections). Ready to import.`
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to parse JSON file.');
    }
  };

  const executeImportMap = async (sourceMap: Record<string, Record<string, unknown>[]>) => {
    if (!firebaseUser) {
      setError('Please sign in again before importing.');
      return;
    }
    if (!firebaseUser.emailVerified || !isAdmin) {
      setError('Your administrator email must be verified before importing academic data.');
      return;
    }

    setBusy(true);
    setError(null);
    setNotice(null);
    setProgressText('Refreshing administrator credentials and loading existing records...');

    try {
      // Force-refresh ID token so Firestore security rules always see verified email claims
      await firebaseUser.getIdToken(true);

      const existingIdsByCollection: Record<string, Set<string>> = {};
      await Promise.all(
        EXPORTABLE_COLLECTIONS.map(async (col) => {
          const existing = await fetchAllAdminCollection<{ id: string }>(col);
          existingIdsByCollection[col] = new Set(existing.map((item) => item.id));
        })
      );

      let created = 0;
      let updated = 0;
      let skipped = 0;
      let failed = 0;
      const reportRows: ImportRecordReportRow[] = [];

      for (const collectionName of EXPORTABLE_COLLECTIONS) {
        const rows = sourceMap[collectionName] ?? [];
        if (!rows.length) continue;

        const existingIds = existingIdsByCollection[collectionName] ?? new Set<string>();
        const ops: BatchWriteOperation[] = [];
        const rawById = new Map<string, Record<string, unknown>>();

        for (const record of rows) {
          const id = String(record.id);
          const alreadyExists = existingIds.has(id);

          if (alreadyExists && conflictMode === 'skip_existing') {
            skipped += 1;
            reportRows.push({
              collectionName,
              id,
              action: 'skipped',
              message: 'Already exists in Firestore (skipped to prevent duplicates).',
            });
            continue;
          }

          const prepared = prepareAdminImportRecord(collectionName, record, {
            existingIdsByCollection,
            adminUid: firebaseUser.uid,
          });

          if (prepared.errors.length > 0) {
            failed += 1;
            reportRows.push({
              collectionName,
              id,
              action: 'failed',
              message: prepared.errors.join(' '),
              rawRecord: record,
            });
            continue;
          }

          rawById.set(id, record);
          ops.push({
            collectionName,
            id,
            payload: prepared.payload,
            isEdit: alreadyExists,
          });
        }

        if (ops.length > 0) {
          setProgressText(`Writing ${ops.length} record(s) to ${collectionName}...`);
          const batchResult = await resilientBatchUpsertAdminEntities(ops, ({ processed, total }) => {
            setProgressText(`Importing ${collectionName}: ${processed}/${total} processed...`);
          });

          created += batchResult.createdCount;
          updated += batchResult.updatedCount;
          failed += batchResult.failedCount;

          for (const outcome of batchResult.outcomes) {
            if (outcome.action === 'created' || outcome.action === 'updated') {
              existingIds.add(outcome.id);
              reportRows.push({
                collectionName,
                id: outcome.id,
                action: outcome.action,
                message:
                  outcome.action === 'updated'
                    ? 'Updated existing record in Firestore.'
                    : 'Created new record in Firestore.',
              });
            } else {
              reportRows.push({
                collectionName,
                id: outcome.id,
                action: 'failed',
                message: outcome.error || 'Write failed.',
                rawRecord: rawById.get(outcome.id),
              });
            }
          }
        }
      }

      setImportReport({ created, updated, skipped, failed, rows: reportRows });
      if (failed > 0) {
        setReportFilter('failed');
        setError(
          `Import finished with ${failed} failed record(s). ${created} created, ${updated} updated, ${skipped} skipped. Review failed items below and retry safely without creating duplicates.`
        );
      } else {
        setReportFilter('all');
        setNotice(
          `Import complete: ${created} created, ${updated} updated, ${skipped} skipped, 0 failed.`
        );
        setPendingImport({});
        setImportPreview(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Import failed.');
    } finally {
      setBusy(false);
      setProgressText(null);
    }
  };

  const handleImport = async () => {
    await executeImportMap(pendingImport);
  };

  const handleRetryFailed = async () => {
    if (!importReport) return;
    const retryMap: Record<string, Record<string, unknown>[]> = {};
    for (const row of importReport.rows) {
      if (row.action === 'failed' && row.rawRecord) {
        retryMap[row.collectionName] = retryMap[row.collectionName] ?? [];
        retryMap[row.collectionName].push(row.rawRecord);
      }
    }
    await executeImportMap(retryMap);
  };

  const visibleReportRows = useMemo(() => {
    if (!importReport) return [];
    if (reportFilter === 'all') return importReport.rows;
    return importReport.rows.filter((r) => r.action === reportFilter);
  }, [importReport, reportFilter]);

  const hasRetryableFailures = Boolean(
    importReport?.rows.some((r) => r.action === 'failed' && r.rawRecord)
  );

  return (
    <AppShell
      workspaceTitle="Admin Workspace"
      navItems={ADMIN_NAV_ITEMS}
      pageTitle="Data Import & Export"
      breadcrumb="UK Prep / Admin / Import & Export"
      isAdminWorkspace
    >
      <div className="space-y-6 max-w-4xl">
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
            Validate &amp; Import Academic Archive
          </h2>
          <p className="text-sm text-ink-muted">
            Select a UK Prep JSON archive to validate schema rules, parent references, and record counts before writing to Firestore. Each record is reported individually so retries never create duplicates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <label className="flex items-start gap-2.5 p-3 rounded-lg border border-edge bg-subtle/60 cursor-pointer text-xs">
              <input
                type="radio"
                name="import-conflict-mode"
                checked={conflictMode === 'skip_existing'}
                onChange={() => setConflictMode('skip_existing')}
                className="mt-0.5 accent-accent"
              />
              <div>
                <div className="font-semibold text-ink">Create new only (Skip existing IDs)</div>
                <div className="text-ink-muted mt-0.5">
                  Safe default for resuming or retrying partial imports without overwriting existing documents.
                </div>
              </div>
            </label>
            <label className="flex items-start gap-2.5 p-3 rounded-lg border border-edge bg-subtle/60 cursor-pointer text-xs">
              <input
                type="radio"
                name="import-conflict-mode"
                checked={conflictMode === 'upsert_existing'}
                onChange={() => setConflictMode('upsert_existing')}
                className="mt-0.5 accent-accent"
              />
              <div>
                <div className="font-semibold text-ink">Create new &amp; update existing IDs</div>
                <div className="text-ink-muted mt-0.5">
                  Updates matching document IDs in-place (preserving original creator and timestamp) without duplicating.
                </div>
              </div>
            </label>
          </div>

          <label className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-lg border border-edge-strong bg-subtle text-ink cursor-pointer hover:bg-canvas transition-colors">
            <Upload className="w-4 h-4" />
            <span>Select JSON Archive</span>
            <input type="file" accept=".json,application/json" onChange={handleFileInspect} className="sr-only" />
          </label>

          {progressText && (
            <div className="p-3 rounded-lg border border-edge bg-subtle text-xs text-ink font-medium">
              {progressText}
            </div>
          )}

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
              <button
                type="button"
                disabled={busy || importPreview.totalRecords === 0}
                onClick={() => void handleImport()}
                className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60"
              >
                <Upload className="w-4 h-4" />
                <span>{busy ? 'Importing...' : 'Run Import'}</span>
              </button>
            </div>
          )}
        </div>

        {importReport && (
          <section className="bg-panel border border-edge rounded-xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-ink">Import Execution Report</h2>
                <p className="text-xs text-ink-muted mt-0.5">
                  Per-record outcomes are tracked by document ID so retrying failed entries never creates duplicates.
                </p>
              </div>
              {hasRetryableFailures && (
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => void handleRetryFailed()}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 self-start sm:self-auto"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry Failed Records ({importReport.failed})</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="rounded-lg border border-edge bg-subtle/60 p-3">
                <div className="text-ink-muted">Created</div>
                <div className="mt-0.5 font-mono tabular-nums text-base font-bold text-emerald-600 dark:text-emerald-400">
                  {importReport.created}
                </div>
              </div>
              <div className="rounded-lg border border-edge bg-subtle/60 p-3">
                <div className="text-ink-muted">Updated</div>
                <div className="mt-0.5 font-mono tabular-nums text-base font-bold text-accent-text">
                  {importReport.updated}
                </div>
              </div>
              <div className="rounded-lg border border-edge bg-subtle/60 p-3">
                <div className="text-ink-muted">Skipped</div>
                <div className="mt-0.5 font-mono tabular-nums text-base font-bold text-ink-muted">
                  {importReport.skipped}
                </div>
              </div>
              <div className="rounded-lg border border-edge bg-subtle/60 p-3">
                <div className="text-ink-muted">Failed</div>
                <div className="mt-0.5 font-mono tabular-nums text-base font-bold text-red-600 dark:text-red-400">
                  {importReport.failed}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {(['all', 'failed', 'created', 'updated', 'skipped'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setReportFilter(tab)}
                  className={`px-3 py-1.5 rounded-lg font-medium border transition-colors ${
                    reportFilter === tab
                      ? 'bg-accent text-accent-ink border-accent'
                      : 'bg-field text-ink-muted border-edge hover:text-ink'
                  }`}
                >
                  {tab === 'all' ? 'All Records' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="max-h-96 overflow-y-auto border border-edge rounded-lg divide-y divide-edge text-xs">
              {visibleReportRows.length === 0 ? (
                <div className="p-4 text-ink-muted">No records match the selected filter.</div>
              ) : (
                visibleReportRows.map((row, idx) => (
                  <div
                    key={`${row.collectionName}-${row.id}-${idx}`}
                    className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-panel"
                  >
                    <div className="min-w-0">
                      <div className="font-mono text-ink truncate">
                        {row.collectionName}/{row.id}
                      </div>
                      {row.message && (
                        <div
                          className={`mt-0.5 ${
                            row.action === 'failed'
                              ? 'text-red-600 dark:text-red-400 font-medium'
                              : 'text-ink-muted'
                          }`}
                        >
                          {row.message}
                        </div>
                      )}
                    </div>
                    <span
                      className={`shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded font-semibold uppercase tracking-wide text-[10px] ${
                        row.action === 'failed'
                          ? 'bg-red-500/15 text-red-700 dark:text-red-300'
                          : row.action === 'skipped'
                            ? 'bg-subtle text-ink-muted'
                            : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                      }`}
                    >
                      {row.action === 'failed' ? (
                        <XCircle className="w-3 h-3" />
                      ) : (
                        <CheckCircle2 className="w-3 h-3" />
                      )}
                      {row.action}
                    </span>
                  </div>
                ))
              )}
            </div>
          </section>
        )}

        <div className="bg-panel border border-edge rounded-xl p-6 shadow-sm space-y-3">
          <h2 className="text-base font-semibold text-ink">
            Topic-Wise Content Batch Seeder &amp; JSON Import
          </h2>
          <p className="text-sm text-ink-muted">
            To seed or bulk-import study notes, MCQs, verified PYQs, and topic-wise practice assessments directly against live Firestore topic IDs in batches, use the Topic Batch Sync &amp; Bulk JSON Import tool on the Topics management page.
          </p>
          <Link
            to="/admin/topics"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-text hover:underline"
          >
            Go to Topic Batch Sync &amp; Bulk Import →
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
