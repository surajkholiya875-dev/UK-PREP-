import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';
import { fetchStudentOwned, removeBookmark } from '../../services/firestoreService';
import { Bookmark, BookmarkTargetType } from '../../types/academic';

export function BookmarksPage() {
  const { firebaseUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [filter, setFilter] = useState<'all' | BookmarkTargetType>('all');

  const loadBookmarks = async () => {
    if (!firebaseUser) return;
    setLoading(true);
    setError(null);
    try {
      const items = await fetchStudentOwned<Bookmark>('bookmarks', firebaseUser.uid);
      setBookmarks(items);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load bookmarks.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadBookmarks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.uid]);

  const handleRemove = async (id: string) => {
    try {
      await removeBookmark(id);
      setBookmarks((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to remove bookmark.');
    }
  };

  const filtered = bookmarks.filter((b) => filter === 'all' || b.targetType === filter);

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Bookmarks & Saved Materials"
      breadcrumb="UK Prep / Student / Bookmarks"
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-1 p-1 bg-field border border-edge rounded-lg w-fit">
          {(['all', 'material', 'question', 'topic', 'course'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap capitalize ${
                filter === t
                  ? 'bg-accent text-accent-ink font-semibold shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {t === 'all' ? 'All Saved' : `${t}s`}
            </button>
          ))}
        </div>

        {loading ? (
          <LoadingState label="Loading saved bookmarks..." />
        ) : error ? (
          <ErrorState message={error} onRetry={() => void loadBookmarks()} />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No saved bookmarks"
            description="Bookmark study materials, practice questions, or syllabus topics while studying to revisit them quickly here."
          />
        ) : (
          <div className="bg-panel border border-edge rounded-xl divide-y divide-edge shadow-sm">
            {filtered.map((item) => (
              <div key={item.id} className="p-4 sm:p-5 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-ink-faint">
                    {item.targetType.toUpperCase()}
                    {item.subjectTitle ? ` · ${item.subjectTitle}` : ''}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-ink">
                    {item.title}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => void handleRemove(item.id)}
                  aria-label={`Remove bookmark ${item.title}`}
                  className="p-2 rounded-lg text-ink-faint hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
