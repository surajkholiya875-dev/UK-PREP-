import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LogOut, Menu, ShieldCheck, User, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { BrandMark } from './BrandMark';
import { ThemeToggle } from './ThemeToggle';

export interface NavItem {
  label: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  section?: string;
}

interface AppShellProps {
  workspaceTitle: string;
  navItems: NavItem[];
  pageTitle: string;
  breadcrumb: string;
  headerAction?: React.ReactNode;
  isAdminWorkspace?: boolean;
  children: React.ReactNode;
}

export function AppShell({
  workspaceTitle,
  navItems,
  pageTitle,
  breadcrumb,
  headerAction,
  isAdminWorkspace = false,
  children,
}: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { profile, firebaseUser, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await logout();
    navigate('/');
  };

  const renderNavLinks = (onClick?: () => void) => {
    let lastSection = '';
    return (
      <nav className="space-y-1" aria-label={workspaceTitle}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const showSection = item.section && item.section !== lastSection;
          if (item.section) lastSection = item.section;

          return (
            <React.Fragment key={item.to}>
              {showSection && (
                <div className="pt-4 pb-1.5 px-3 text-xs font-semibold text-ink-faint">
                  {item.section}
                </div>
              )}
              <NavLink
                to={item.to}
                onClick={onClick}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-accent text-accent-ink font-semibold shadow-sm'
                      : 'text-ink-muted hover:bg-subtle hover:text-ink'
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </NavLink>
            </React.Fragment>
          );
        })}
      </nav>
    );
  };

  return (
    <div className="min-h-screen bg-canvas text-ink flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:shrink-0 border-r border-edge bg-surface">
        <div className="h-16 px-5 flex items-center justify-between border-b border-edge">
          <BrandMark to={isAdminWorkspace ? '/admin/overview' : '/student/dashboard'} size="sm" />
          <span className="text-xs font-mono text-ink-faint">
            {isAdminWorkspace ? 'Admin' : 'Student'}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">{renderNavLinks()}</div>

        <div className="p-4 border-t border-edge space-y-2">
          {isAdmin && (
            <Link
              to={isAdminWorkspace ? '/student/dashboard' : '/admin/overview'}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-edge-strong bg-panel text-ink hover:bg-subtle transition-colors whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4 shrink-0 text-accent" />
              <span>{isAdminWorkspace ? 'Switch to Student LMS' : 'Open Admin Workspace'}</span>
            </Link>
          )}
          <button
            type="button"
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg text-ink-muted hover:bg-subtle hover:text-ink transition-colors whitespace-nowrap"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-navy-950/70 backdrop-blur-xs"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <aside className="relative z-10 w-72 max-w-[85vw] bg-surface border-r border-edge flex flex-col h-full">
            <div className="h-16 px-4 flex items-center justify-between border-b border-edge">
              <BrandMark to={isAdminWorkspace ? '/admin/overview' : '/student/dashboard'} size="sm" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-lg text-ink-muted hover:bg-subtle hover:text-ink"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-4">
              {renderNavLinks(() => setMobileOpen(false))}
            </div>
            <div className="p-4 border-t border-edge space-y-2">
              {isAdmin && (
                <Link
                  to={isAdminWorkspace ? '/student/dashboard' : '/admin/overview'}
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-edge-strong bg-panel text-ink hover:bg-subtle transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 shrink-0 text-accent" />
                  <span>{isAdminWorkspace ? 'Switch to Student LMS' : 'Open Admin Workspace'}</span>
                </Link>
              )}
              <button
                type="button"
                onClick={handleSignOut}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg text-ink-muted hover:bg-subtle hover:text-ink transition-colors"
              >
                <LogOut className="w-4 h-4 shrink-0" />
                <span>Sign Out</span>
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-16 bg-surface border-b border-edge px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 sticky top-0 z-30">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden p-2 -ml-2 rounded-lg text-ink-muted hover:bg-subtle hover:text-ink shrink-0"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="min-w-0">
              <div className="text-xs text-ink-faint truncate">{breadcrumb}</div>
              <h1 className="text-base sm:text-lg font-semibold text-ink truncate">
                {pageTitle}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {headerAction}
            <ThemeToggle compact />
            <Link
              to={isAdminWorkspace ? '/admin/settings' : '/student/profile'}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-edge-strong bg-panel text-xs font-medium text-ink hover:bg-subtle transition-colors whitespace-nowrap"
            >
              <User className="w-3.5 h-3.5 shrink-0 text-accent" />
              <span className="max-w-[140px] truncate">
                {profile?.fullName || profile?.displayName || firebaseUser?.displayName || 'Account'}
              </span>
            </Link>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1320px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
