import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { BrandMark } from '../../components/ui/BrandMark';
import { ThemeToggle } from '../../components/ui/ThemeToggle';
import {
  GENERAL_SUBJECT_TAXONOMY,
  UTTARAKHAND_SUBJECT_TAXONOMY,
} from '../../types/academic';

const HERO_IMAGE = '/src/assets/images/hero_uttarakhand_academics_1795011392569.jpg';
const DESK_IMAGE = '/src/assets/images/uttarakhand_study_desk_1795011392580.jpg';

const EXAM_CATEGORIES = [
  {
    code: 'UKPSC',
    title: 'Uttarakhand Public Service Commission',
    tracks: 'Combined State Civil (Upper PCS) · Lower PCS · RO / ARO · Forest Services',
    summary:
      'Structured Prelims and Mains curriculum balancing Uttarakhand state history, administrative polity, and national general studies.',
  },
  {
    code: 'UKSSSC',
    title: 'Uttarakhand Subordinate Service Selection Commission',
    tracks: 'VDO / VPDO · Patwari / Lekhpal · Group C · Police & Forest Guard',
    summary:
      'Targeted objective preparation covering district-wise Uttarakhand general knowledge, Hindi grammar, reasoning, and state current affairs.',
  },
  {
    code: 'UPSC & National',
    title: 'Union Public Service Commission & National Exams',
    tracks: 'Civil Services (IAS / IPS) · CDS · CAPF · State-aligned GS Foundation',
    summary:
      'National-standard foundational coverage across Indian Constitution, Modern History, Economy, Environment, and CSAT aptitude.',
  },
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Select Examination & Course',
    description:
      'Enroll in a structured UKPSC, UKSSSC, or national examination track published in the verified course catalogue.',
  },
  {
    step: '02',
    title: 'Navigate the Syllabus Hierarchy',
    description:
      'Follow the complete academic tree from Subject and Unit down to Chapter, Topic, and curated Study Materials.',
  },
  {
    step: '03',
    title: 'Practice Questions & Mock Tests',
    description:
      'Attempt topic-wise objective questions, previous-year papers, and timed mock examinations with negative marking.',
  },
  {
    step: '04',
    title: 'Review Progress & Bookmarks',
    description:
      'Track completed topics, inspect attempt history, and revisit bookmarked notes inside a distraction-free study theme.',
  },
];

export function LandingPage() {
  const { firebaseUser, isAdmin } = useAuth();
  const [subjectTab, setSubjectTab] = useState<'uttarakhand' | 'general'>('uttarakhand');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroImgError, setHeroImgError] = useState(false);
  const [deskImgError, setDeskImgError] = useState(false);

  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [contactState, setContactState] = useState<{
    submitting: boolean;
    error: string | null;
    successRef: string | null;
  }>({ submitting: false, error: null, successRef: null });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactState({ submitting: true, error: null, successRef: null });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });
      const data = (await res.json()) as { error?: string; referenceId?: string };
      if (!res.ok) {
        setContactState({
          submitting: false,
          error: data.error || 'Could not submit inquiry.',
          successRef: null,
        });
        return;
      }
      setContactState({
        submitting: false,
        error: null,
        successRef: data.referenceId || 'Submitted',
      });
      setContactForm({ fullName: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setContactState({
        submitting: false,
        error: 'Network error while sending inquiry. Please try again.',
        successRef: null,
      });
    }
  };

  const portalDestination = firebaseUser
    ? isAdmin
      ? '/admin/overview'
      : '/student/dashboard'
    : '/login';

  const activeSubjects =
    subjectTab === 'uttarakhand' ? UTTARAKHAND_SUBJECT_TAXONOMY : GENERAL_SUBJECT_TAXONOMY;

  return (
    <div className="min-h-screen bg-canvas text-ink">
      {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (5 concise links) — Zone 3 (1 primary action) */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur border-b border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          <BrandMark to="/" />

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-muted">
            <a href="#examinations" className="hover:text-ink transition-colors whitespace-nowrap shrink-0">
              Examinations
            </a>
            <a href="#subjects" className="hover:text-ink transition-colors whitespace-nowrap shrink-0">
              Subjects
            </a>
            <a href="#how-it-works" className="hover:text-ink transition-colors whitespace-nowrap shrink-0">
              How It Works
            </a>
            <a href="#about" className="hover:text-ink transition-colors whitespace-nowrap shrink-0">
              About
            </a>
            <a href="#contact" className="hover:text-ink transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to={portalDestination}
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {firebaseUser ? 'Open Portal' : 'Sign In'}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-lg text-ink-muted hover:bg-subtle hover:text-ink"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-edge bg-surface px-4 py-4 space-y-2">
            {[
              { href: '#examinations', label: 'Examinations' },
              { href: '#subjects', label: 'Subjects' },
              { href: '#how-it-works', label: 'How It Works' },
              { href: '#about', label: 'About' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-ink-muted hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="border-b border-edge bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <p className="text-xs font-medium text-accent-text">
                    Uttarakhand & National Competitive Examinations
                  </p>
                  <ThemeToggle compact />
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight [text-wrap:balance] max-w-2xl">
                  Disciplined Preparation for UKPSC, UKSSSC, and Civil Services
                </h1>

                <p className="mt-5 text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl">
                  UK Prep organizes Uttarakhand state-specific studies and national general studies into an exact academic hierarchy—built for serious aspirants seeking clarity, structured revision, and accountable test tracking.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to={firebaseUser ? portalDestination : '/register'}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span>{firebaseUser ? 'Go to Dashboard' : 'Create Student Account'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  {!firebaseUser && (
                    <Link
                      to="/login"
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-lg border border-edge-strong bg-panel text-ink hover:bg-subtle transition-colors whitespace-nowrap"
                    >
                      Student Sign In
                    </Link>
                  )}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-edge grid grid-cols-3 gap-6">
                <div>
                  <div className="text-xl font-bold font-mono tabular-nums text-accent-text">
                    09
                  </div>
                  <div className="text-xs text-ink-muted mt-1">
                    Uttarakhand Core Subjects
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold font-mono tabular-nums text-accent-text">
                    12
                  </div>
                  <div className="text-xs text-ink-muted mt-1">
                    National GS & CSAT Tracks
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold font-mono tabular-nums text-accent-text">
                    13
                  </div>
                  <div className="text-xs text-ink-muted mt-1">
                    Districts Covered in Detail
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] lg:min-h-[420px] rounded-xl overflow-hidden border border-edge bg-panel relative shadow-sm">
                {!heroImgError ? (
                  <img
                    src={HERO_IMAGE}
                    alt="Garhwal Himalayan range at dawn viewed from a quiet study terrace in Uttarakhand"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgError(true)}
                    className="w-full h-full object-cover lg:h-full"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-navy-900 to-navy-950 text-white">
                    <BookOpen className="w-10 h-10 text-saffron-400 mb-3" />
                    <p className="text-sm font-medium">Uttarakhand Academic Archive</p>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent p-6">
                  <p className="text-xs font-mono text-saffron-400">
                    Academic Hierarchy
                  </p>
                  <p className="text-sm text-white/95 mt-1">
                    Examination · Course · Subject · Unit · Chapter · Topic · Material · Assessment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examination Categories */}
      <section id="examinations" className="py-16 lg:py-20 bg-canvas border-b border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink [text-wrap:balance]">
              Examination Categories
            </h2>
            <p className="mt-3 text-base text-ink-muted">
              Dedicated preparation tracks structured around official commission syllabi across Uttarakhand state services and national civil services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXAM_CATEGORIES.map((exam) => (
              <div
                key={exam.code}
                className="bg-panel border border-edge rounded-xl p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="text-xs font-mono font-semibold text-accent-text mb-2">
                    {exam.code}
                  </div>
                  <h3 className="text-lg font-semibold text-ink">
                    {exam.title}
                  </h3>
                  <p className="mt-2 text-xs text-ink-faint leading-relaxed">
                    {exam.tracks}
                  </p>
                  <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                    {exam.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-edge">
                  <Link
                    to={firebaseUser ? '/student/catalogue' : '/register'}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:text-accent-hover transition-colors"
                  >
                    <span>Explore curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject & Academic Hierarchy Overview */}
      <section id="subjects" className="py-16 lg:py-20 bg-surface border-b border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink [text-wrap:balance]">
                Subject Architecture & Syllabus Taxonomy
              </h2>
              <p className="mt-3 text-base text-ink-muted">
                Every course is organized into clean, verifiable layers from Examination down to Unit, Chapter, Topic, Study Material, and Practice Assessment.
              </p>
            </div>

            <div className="inline-flex p-1 bg-field rounded-lg border border-edge shrink-0 self-start">
              <button
                type="button"
                onClick={() => setSubjectTab('uttarakhand')}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  subjectTab === 'uttarakhand'
                    ? 'bg-accent text-accent-ink font-semibold shadow-sm'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                Uttarakhand-Specific (09)
              </button>
              <button
                type="button"
                onClick={() => setSubjectTab('general')}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  subjectTab === 'general'
                    ? 'bg-accent text-accent-ink font-semibold shadow-sm'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                General Competitive (12)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeSubjects.map((subject, idx) => (
              <div
                key={subject}
                className="p-5 rounded-xl border border-edge bg-panel shadow-sm flex items-start gap-3.5"
              >
                <span className="font-mono text-xs font-semibold tabular-nums text-accent-text mt-0.5">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">
                    {subject}
                  </h3>
                  <p className="text-xs text-ink-muted mt-1">
                    {subjectTab === 'uttarakhand'
                      ? 'State Syllabus · Units · Chapters · Topics · PYQs'
                      : 'Core General Studies · Units · Chapters · Assessments'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Platform Works */}
      <section id="how-it-works" className="py-16 lg:py-20 bg-canvas border-b border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink [text-wrap:balance]">
              How UK Prep Works
            </h2>
            <p className="mt-3 text-base text-ink-muted">
              Built for sustained daily study without distractions—every student account keeps private progress, bookmarks, and test attempt records isolated and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-panel border border-edge rounded-xl p-6 shadow-sm"
              >
                <div className="font-mono text-xs font-semibold tabular-nums text-accent-text mb-3">
                  Step {item.step}
                </div>
                <h3 className="text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Contact Section */}
      <section id="about" className="py-16 lg:py-20 bg-surface border-b border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink [text-wrap:balance]">
                Academic Discipline Rooted in Uttarakhand
              </h2>
              <p className="mt-4 text-base text-ink-muted leading-relaxed">
                Aspirants across Dehradun, Haldwani, Almora, Pithoragarh, Srinagar, and remote hill districts deserve an organized learning management system that respects serious exam preparation.
              </p>
              <p className="mt-3 text-base text-ink-muted leading-relaxed">
                UK Prep maintains strict separation between public academic catalogs and private student progress, enforces role-based administrative publishing workflows, and supports both midnight navy and optional light study themes.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-edge aspect-[4/3] bg-panel shadow-sm">
              {!deskImgError ? (
                <img
                  src={DESK_IMAGE}
                  alt="Civil service reference books and brass desk lamp overlooking misty Uttarakhand pine hills"
                  referrerPolicy="no-referrer"
                  onError={() => setDeskImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8 text-ink-muted">
                  Reference Study Archive
                </div>
              )}
            </div>
          </div>

          <div id="contact" className="lg:col-span-6 bg-panel border border-edge rounded-xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-ink">
              Academic & Platform Inquiries
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Questions about UKPSC/UKSSSC course structure, syllabus updates, or student enrollment? Send a message directly to the UK Prep desk.
            </p>

            {contactState.successRef && (
              <div className="mt-5 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-sm text-emerald-900 dark:text-emerald-200">
                  Inquiry recorded (Reference: <span className="font-mono font-semibold">{contactState.successRef}</span>). Thank you for contacting UK Prep.
                </div>
              </div>
            )}

            {contactState.error && (
              <div className="mt-5 p-4 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-sm text-red-800 dark:text-red-300">
                {contactState.error}
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-ink-muted mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={120}
                    value={contactForm.fullName}
                    onChange={(e) => setContactForm((p) => ({ ...p, fullName: e.target.value }))}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-medium text-ink-muted mb-1.5">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    maxLength={20}
                    value={contactForm.phone}
                    onChange={(e) => setContactForm((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    placeholder="+91 98XXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-ink-muted mb-1.5">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  maxLength={160}
                  value={contactForm.email}
                  onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="aspirant@example.com"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium text-ink-muted mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  minLength={3}
                  maxLength={200}
                  value={contactForm.subject}
                  onChange={(e) => setContactForm((p) => ({ ...p, subject: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="UKPSC Upper PCS Syllabus / Account Query"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-ink-muted mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  minLength={10}
                  maxLength={3000}
                  value={contactForm.message}
                  onChange={(e) => setContactForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-edge-strong bg-field text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="Write your question or feedback..."
                />
              </div>

              <button
                type="submit"
                disabled={contactState.submitting}
                className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-ink hover:bg-accent-hover disabled:opacity-60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {contactState.submitting ? 'Sending Inquiry...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quiet Academic Footer */}
      <footer className="py-10 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <BrandMark to="/" size="sm" />
            <p className="text-xs text-ink-muted mt-2">
              UK Prep – Uttarakhand Exam Preparation Platform · Dehradun, Uttarakhand
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-ink-muted">
            <Link to="/login" className="hover:text-ink transition-colors">
              Student Login
            </Link>
            <Link to="/register" className="hover:text-ink transition-colors">
              Student Registration
            </Link>
            <a href="#examinations" className="hover:text-ink transition-colors">
              Examinations
            </a>
            <a href="#subjects" className="hover:text-ink transition-colors">
              Subjects
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
