import React from 'react';
import { AlertCircle, CheckCircle2, FolderOpen } from 'lucide-react';

export function LoadingState({ label = 'Loading records...' }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-panel border border-edge rounded-xl p-8 shadow-sm"
    >
      <div className="space-y-4 animate-pulse">
        <div className="h-4 w-48 bg-subtle rounded" />
        <div className="h-10 w-full bg-subtle/70 rounded" />
        <div className="h-10 w-full bg-subtle/70 rounded" />
        <div className="h-10 w-3/4 bg-subtle/70 rounded" />
      </div>
      <p className="mt-4 text-xs text-ink-muted">{label}</p>
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="bg-panel border border-edge rounded-xl p-10 text-center shadow-sm">
      <div className="mx-auto w-10 h-10 rounded-lg bg-subtle flex items-center justify-center text-ink-muted mb-4">
        <FolderOpen className="w-5 h-5" />
      </div>
      <h3 className="text-base font-semibold text-ink mb-1.5">{title}</h3>
      <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
        {description}
      </p>
      {action && <div className="mt-5 flex justify-center">{action}</div>}
    </div>
  );
}

export function ErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      className="bg-red-50 dark:bg-red-950/35 border border-red-200 dark:border-red-900/60 rounded-xl p-5 flex items-start gap-3"
    >
      <AlertCircle className="w-5 h-5 text-red-700 dark:text-red-400 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-red-900 dark:text-red-200">Unable to complete request</p>
        <p className="text-sm text-red-800 dark:text-red-300 mt-1 break-words">{message}</p>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="mt-3 px-3 py-1.5 text-xs font-medium rounded-md bg-panel border border-red-300 dark:border-red-800 text-red-800 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}

export function SuccessBanner({ message }: { message: string }) {
  return (
    <div
      role="status"
      className="bg-emerald-50 dark:bg-emerald-950/35 border border-emerald-200 dark:border-emerald-900/60 rounded-xl p-4 flex items-start gap-3"
    >
      <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
      <p className="text-sm text-emerald-900 dark:text-emerald-200">{message}</p>
    </div>
  );
}
