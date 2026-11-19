import { useEffect, useState } from 'react';
import { Pin } from 'lucide-react';
import { AppShell } from '../../components/ui/AppShell';
import { EmptyState, ErrorState, LoadingState } from '../../components/ui/StateBlocks';
import { STUDENT_NAV_ITEMS } from '../../config/navigation';
import { fetchPublishedCollection } from '../../services/firestoreService';
import { Announcement, AnnouncementCategory } from '../../types/academic';

export function AnnouncementsPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [filter, setFilter] = useState<'all' | AnnouncementCategory>('all');

  const loadAnnouncements = async () => {
    setLoading(true);
    setError(null);
    try {
      const items = await fetchPublishedCollection<Announcement>('announcements');
      const sorted = [...items].sort((a, b) => Number(b.isPinned) - Number(a.isPinned));
      setAnnouncements(sorted);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load announcements.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadAnnouncements();
  }, []);

  const filtered = announcements.filter((a) => filter === 'all' || a.category === filter);

  return (
    <AppShell
      workspaceTitle="Student LMS"
      navItems={STUDENT_NAV_ITEMS}
      pageTitle="Announcements"
      breadcrumb="UK Prep / Student / Announcements"
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-1 p-1 bg-field border border-edge rounded-lg w-fit">
          {(
            [
              { id: 'all', label: 'All Notices' },
              { id: 'exam_notice', label: 'Exam Notices' },
              { id: 'syllabus', label: 'Syllabus Updates' },
              { id: 'current_affairs', label: 'Current Affairs' },
              { id: 'platform', label: 'Platform' },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setFilter(t.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === t.id
                  ? 'bg-accent text-accent-ink font-semibold shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {loading ? (
          <LoadingState label="Loading announcements..." />
        ) : error ? (
          <ErrorState message={error} onRetry={() => void loadAnnouncements()} />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No announcements published"
            description="Official UKPSC/UKSSSC exam notices, syllabus revisions, and platform announcements will appear here."
          />
        ) : (
          <div className="space-y-4">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="bg-panel border border-edge rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs text-accent-text font-medium">
                  {item.isPinned && <Pin className="w-3.5 h-3.5" />}
                  <span>{item.category.replace('_', ' ')}</span>
                  {item.isPinned && <span>· Pinned</span>}
                </div>
                <h2 className="mt-1.5 text-lg font-semibold text-ink">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-ink-muted whitespace-pre-wrap leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
