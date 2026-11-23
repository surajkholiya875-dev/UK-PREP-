import { useMemo, useState } from 'react';
import { CheckCircle2, HelpCircle, XCircle } from 'lucide-react';
import { TestAttemptReviewItem } from '../../types/academic';

type ReviewFilter = 'all' | 'incorrect' | 'unanswered' | 'correct';

export function TestReviewSection({
  review,
  initialFilter = 'all',
}: {
  review: TestAttemptReviewItem[];
  initialFilter?: ReviewFilter;
}) {
  const [filter, setFilter] = useState<ReviewFilter>(initialFilter);

  const counts = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    for (const item of review) {
      if (item.isCorrect) correct += 1;
      else if (item.selectedIndex === null || item.selectedIndex === undefined) unanswered += 1;
      else incorrect += 1;
    }
    return { all: review.length, correct, incorrect, unanswered };
  }, [review]);

  const filtered = useMemo(() => {
    return review
      .map((item, idx) => ({ item, questionNumber: idx + 1 }))
      .filter(({ item }) => {
        if (filter === 'correct') return item.isCorrect;
        if (filter === 'incorrect') {
          return !item.isCorrect && item.selectedIndex !== null && item.selectedIndex !== undefined;
        }
        if (filter === 'unanswered') {
          return item.selectedIndex === null || item.selectedIndex === undefined;
        }
        return true;
      });
  }, [review, filter]);

  if (!review || review.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-panel border border-edge rounded-xl p-4">
        <div>
          <h3 className="text-sm font-semibold text-ink">Answer Key &amp; Detailed Review</h3>
          <p className="text-xs text-ink-muted">
            Review your responses, check the correct answer key, and focus on incorrect questions.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              { id: 'all', label: `All (${counts.all})` },
              { id: 'incorrect', label: `Incorrect (${counts.incorrect})` },
              { id: 'unanswered', label: `Skipped (${counts.unanswered})` },
              { id: 'correct', label: `Correct (${counts.correct})` },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                filter === tab.id
                  ? 'border-accent bg-accent text-accent-ink'
                  : 'border-edge-strong bg-field text-ink-muted hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-edge bg-panel p-6 text-center text-sm text-ink-muted">
          No questions match the selected filter.
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(({ item, questionNumber }) => {
            const isSkipped = item.selectedIndex === null || item.selectedIndex === undefined;
            return (
              <article
                key={item.questionId}
                className="rounded-xl border border-edge bg-panel p-5 space-y-3 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-ink-faint">Question {questionNumber}</span>
                  {item.isCorrect ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Correct
                    </span>
                  ) : isSkipped ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-subtle px-2.5 py-0.5 text-xs font-semibold text-ink-muted">
                      <HelpCircle className="w-3.5 h-3.5" />
                      Skipped
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-semibold text-red-600 dark:text-red-400">
                      <XCircle className="w-3.5 h-3.5" />
                      Incorrect
                    </span>
                  )}
                </div>

                <h4 className="text-sm sm:text-base font-medium leading-7 text-ink">{item.stem}</h4>

                <div className="grid gap-2 sm:grid-cols-2">
                  {item.options.map((option, optIdx) => {
                    const isCorrectOpt = optIdx === item.correctOptionIndex;
                    const isSelectedOpt = item.selectedIndex === optIdx;
                    let optClass = 'border-edge bg-field text-ink-muted';
                    if (isCorrectOpt) {
                      optClass = 'border-emerald-500 bg-emerald-500/10 text-ink font-medium';
                    } else if (isSelectedOpt && !isCorrectOpt) {
                      optClass = 'border-red-500 bg-red-500/10 text-ink';
                    }

                    return (
                      <div key={optIdx} className={`rounded-lg border px-3.5 py-2.5 text-xs sm:text-sm ${optClass}`}>
                        <span className="font-mono text-xs mr-2 font-semibold">
                          {String.fromCharCode(65 + optIdx)}.
                        </span>
                        <span>{option}</span>
                        {isCorrectOpt && (
                          <span className="ml-2 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                            (Correct Answer)
                          </span>
                        )}
                        {isSelectedOpt && !isCorrectOpt && (
                          <span className="ml-2 text-[11px] font-semibold text-red-600 dark:text-red-400">
                            (Your Answer)
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {item.explanation && (
                  <div className="rounded-lg border border-edge bg-subtle/70 p-3.5 text-xs sm:text-sm leading-6 text-ink-muted">
                    <span className="font-semibold text-ink">Explanation: </span>
                    {item.explanation}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
