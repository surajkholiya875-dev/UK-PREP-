import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light study theme' : 'Switch to dark navy theme'}
      className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-edge-strong bg-panel text-ink hover:bg-subtle transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-accent" />
      ) : (
        <Moon className="w-4 h-4 text-navy-900" />
      )}
      {!compact && <span>{isDark ? 'Light Study' : 'Navy Theme'}</span>}
    </button>
  );
}
