import { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, Eye, FolderSync, ShieldCheck } from 'lucide-react';
import {
  buildUnassignedAssignmentOperations,
  buildUnassignedHierarchyPlan,
} from '../../lib/unassignedHierarchyAudit';
import { batchUpsertAdminEntities } from '../../services/firestoreService';
import { Chapter, Course, Subject, Topic, Unit } from '../../types/academic';

interface UnassignedSubjectRepairCardProps {
  subjects: Subject[];
  courses?: Course[];
  units: Unit[];
  chapters: Chapter[];
  topics: Topic[];
  onRefresh: () => Promise<void>;
}

interface CompletedSummary {
  assignedUnits: number;
  assignedChapters: number;
  assignedTopics: number;
  targetTitle: string;
}

export function UnassignedSubjectRepairCard({
  subjects,
  courses = [],
  units,
  chapters,
  topics,
  onRefresh,
}: UnassignedSubjectRepairCardProps) {
  const [showPreviewList, setShowPreviewList] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [completedSummary, setCompletedSummary] = useState<CompletedSummary | null>(null);

  const plan = useMemo(
    () =>
      buildUnassignedHierarchyPlan({
        subjects,
        units,
        chapters,
        topics,
      }),
    [subjects, units, chapters, topics]
  );

  const totalPending =
    plan.unitsToUpdate.length + plan.chaptersToUpdate.length + plan.topicsToUpdate.length;
  const totalSkippedConflicts =
    plan.skippedConflictUnits.length +
    plan.skippedConflictChapters.length +
    plan.skippedConflictTopics.length;
  const totalRawUnassigned =
    plan.totalUnassignedRaw.units +
    plan.totalUnassignedRaw.chapters +
    plan.totalUnassignedRaw.topics;

  // Keep the card hidden only when there are zero unassigned records AND no recent completion banner to show.
  if (totalRawUnassigned === 0 && !completedSummary) {
    return null;
  }

  const handleConfirmAssign = async () => {
    if (!plan.targetSubject || totalPending === 0) return;
    setSaving(true);
    setError(null);
    try {
      const operations = buildUnassignedAssignmentOperations({ plan, courses, chapters });
      await batchUpsertAdminEntities(operations);

      const summary: CompletedSummary = {
        assignedUnits: plan.unitsToUpdate.length,
        assignedChapters: plan.chaptersToUpdate.length,
        assignedTopics: plan.topicsToUpdate.length,
        targetTitle: plan.targetSubject.title,
      };
      setConfirmOpen(false);
      setShowPreviewList(false);
      await onRefresh();
      setCompletedSummary(summary);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to assign unassigned hierarchy records. Existing content was not modified.'
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl border border-accent/40 bg-panel p-5 shadow-sm space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-text">
            <FolderSync className="w-3.5 h-3.5" />
            <span>Unassigned Hierarchy Repair</span>
          </div>
          <h2 className="text-base font-semibold text-ink">
            {totalPending > 0
              ? `Assign Unassigned Records to "${plan.targetSubject?.title ?? 'Uttarakhand Special'}"`
              : 'Unassigned Hierarchy Assignment Complete'}
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted">
            Updates only <code className="font-mono text-xs">subjectId</code> on Units, Chapters, and Topics that are currently unassigned or reference a missing subject. Preserves all titles, descriptions, sort orders, publication statuses, parent-child links, study materials, MCQs, PYQs, and practice tests.
          </p>
        </div>

        {plan.targetSubject && totalPending > 0 && !confirmOpen && (
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowPreviewList((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-edge-strong bg-subtle text-ink hover:bg-canvas transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{showPreviewList ? 'Hide Preview' : `Preview Records (${totalPending})`}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setCompletedSummary(null);
                setError(null);
                setConfirmOpen(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-ink hover:bg-accent-hover transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Assign to {plan.targetSubject.title}</span>
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-xs text-red-600 dark:text-red-300">
          {error}
        </div>
      )}

      {completedSummary && (
        <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-xs space-y-1">
          <div className="flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-300">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>
              Assigned {completedSummary.assignedUnits} unit(s), {completedSummary.assignedChapters} chapter(s), and{' '}
              {completedSummary.assignedTopics} topic(s) to &ldquo;{completedSummary.targetTitle}&rdquo;.
            </span>
          </div>
          {plan.targetSubject && (
            <div className="font-mono text-ink-muted pl-6">
              Refreshed counts — {plan.targetSubject.title}: {plan.currentTargetCounts.units} units ·{' '}
              {plan.currentTargetCounts.chapters} chapters · {plan.currentTargetCounts.topics} topics | Remaining unassigned:{' '}
              {plan.totalUnassignedRaw.units} units · {plan.totalUnassignedRaw.chapters} chapters ·{' '}
              {plan.totalUnassignedRaw.topics} topics
            </div>
          )}
        </div>
      )}

      {plan.targetSubjectMissingReason && (
        <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{plan.targetSubjectMissingReason}</span>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
        <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
          <div className="text-ink-muted">Units to Assign</div>
          <div className="mt-0.5 font-mono font-semibold text-ink">{plan.unitsToUpdate.length}</div>
        </div>
        <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
          <div className="text-ink-muted">Chapters to Assign</div>
          <div className="mt-0.5 font-mono font-semibold text-ink">{plan.chaptersToUpdate.length}</div>
        </div>
        <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
          <div className="text-ink-muted">Topics to Assign</div>
          <div className="mt-0.5 font-mono font-semibold text-ink">{plan.topicsToUpdate.length}</div>
        </div>
        <div className="rounded-lg border border-edge bg-subtle px-3 py-2">
          <div className="text-ink-muted">
            {plan.targetSubject ? `${plan.targetSubject.title} (Current)` : 'Target Subject'}
          </div>
          <div className="mt-0.5 font-mono font-semibold text-ink">
            {plan.targetSubject
              ? `${plan.currentTargetCounts.units}U · ${plan.currentTargetCounts.chapters}C · ${plan.currentTargetCounts.topics}T`
              : 'Not found'}
          </div>
        </div>
      </div>

      {totalSkippedConflicts > 0 && (
        <div className="rounded-lg border border-edge bg-subtle px-3.5 py-2.5 text-xs text-ink-muted">
          Note: {plan.skippedConflictUnits.length} unit(s), {plan.skippedConflictChapters.length} chapter(s), and{' '}
          {plan.skippedConflictTopics.length} topic(s) have empty/invalid{' '}
          <code className="font-mono">subjectId</code> but link to records that already belong to another valid subject, so they were left untouched to preserve parent-child consistency.
        </div>
      )}

      {confirmOpen && plan.targetSubject && (
        <div className="rounded-xl border border-accent bg-subtle p-4 space-y-3">
          <div className="text-xs sm:text-sm font-semibold text-ink">
            Confirm Bulk Assignment to &ldquo;{plan.targetSubject.title}&rdquo;
          </div>
          <p className="text-xs text-ink-muted leading-relaxed">
            You are about to assign <strong>{plan.unitsToUpdate.length} unit(s)</strong>,{' '}
            <strong>{plan.chaptersToUpdate.length} chapter(s)</strong>, and{' '}
            <strong>{plan.topicsToUpdate.length} topic(s)</strong> to existing subject{' '}
            <strong>{plan.targetSubject.title}</strong>. Records already belonging to other subjects will not be changed, and no existing content, materials, MCQs, PYQs, or practice tests will be modified or deleted.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={saving}
              onClick={() => void handleConfirmAssign()}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors"
            >
              {saving ? 'Assigning Records...' : 'Confirm & Save Assignment'}
            </button>
            <button
              type="button"
              disabled={saving}
              onClick={() => setConfirmOpen(false)}
              className="px-3 py-2 text-xs font-medium rounded-lg border border-edge-strong bg-panel text-ink hover:bg-canvas disabled:opacity-60 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showPreviewList && totalPending > 0 && (
        <div className="max-h-64 overflow-y-auto rounded-lg border border-edge bg-subtle divide-y divide-edge text-xs">
          {plan.unitsToUpdate.map((u) => (
            <div key={`u-${u.id}`} className="px-3 py-2 flex items-center justify-between gap-3">
              <span className="font-medium text-ink truncate">
                <span className="font-mono text-accent-text mr-2">[UNIT]</span>
                {u.title}
              </span>
              <span className="font-mono text-[11px] text-ink-muted shrink-0">
                #{u.sortOrder} · {u.isPublished ? 'Published' : 'Draft'} · {u.subjectId || 'empty'} →{' '}
                {plan.targetSubject?.title}
              </span>
            </div>
          ))}
          {plan.chaptersToUpdate.map((c) => (
            <div key={`c-${c.id}`} className="px-3 py-2 flex items-center justify-between gap-3">
              <span className="font-medium text-ink truncate">
                <span className="font-mono text-accent-text mr-2">[CHAPTER]</span>
                {c.title}
              </span>
              <span className="font-mono text-[11px] text-ink-muted shrink-0">
                #{c.sortOrder} · {c.isPublished ? 'Published' : 'Draft'} · {c.subjectId || 'empty'} →{' '}
                {plan.targetSubject?.title}
              </span>
            </div>
          ))}
          {plan.topicsToUpdate.map((t) => (
            <div key={`t-${t.id}`} className="px-3 py-2 flex items-center justify-between gap-3">
              <span className="font-medium text-ink truncate">
                <span className="font-mono text-accent-text mr-2">[TOPIC]</span>
                {t.title}
              </span>
              <span className="font-mono text-[11px] text-ink-muted shrink-0">
                #{t.sortOrder} · {t.isPublished ? 'Published' : 'Draft'} · {t.subjectId || 'empty'} →{' '}
                {plan.targetSubject?.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
