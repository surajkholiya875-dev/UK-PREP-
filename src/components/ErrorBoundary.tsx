import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    let readable = error.message;
    try {
      const parsed = JSON.parse(error.message) as { error?: string; path?: string; operationType?: string };
      if (parsed && parsed.error) {
        readable = `${parsed.error}${parsed.path ? ` (Path: ${parsed.path})` : ''}`;
      }
    } catch {
      // Plain error message
    }
    return { hasError: true, message: readable };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-canvas text-ink p-6">
          <div className="max-w-lg w-full bg-panel border border-edge rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 text-red-700 dark:text-red-400 mb-3">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <h1 className="text-lg font-semibold">Application Error</h1>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed mb-6">
              {this.state.message || 'An unexpected error occurred while processing your request.'}
            </p>
            <button
              type="button"
              onClick={() => window.location.assign('/')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <RotateCcw className="w-4 h-4" />
              Return to Home
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
