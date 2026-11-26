import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Search } from 'lucide-react';
import { compareNaturalText, safeSortOrder } from '../../lib/syllabusHierarchy';
import { Chapter, Question, StudyMaterial, Subject, TestPaper, Topic, Unit } from '../../types/academic';

interface ContentCoverageReportProps {
  subjects: Subject[];
  units: Unit[];
  chapters: Chapter[];
  topics: Topic[];
  materials: StudyMaterial[];
  questions: Question[];
  tests: TestPaper[];
}

export function ContentCoverageReport({
  subjects,
  units,
  chapters,
  topics,
  materials,
  questions,
  tests,
}: ContentCoverageReportProps) {
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyMissing, setOnlyMissing] = useState(false);

  const subjectById = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);
  const unitById = useMemo(() => new Map(units.map((u) => [u.id, u])), [units]);
  const chapterById = useMemo(() => new Map(chapters.map((c) => [c.id, c])), [chapters]);

  const report = useMemo(() => {
    const publishedTopics = topics.filter((t) => t.isPublished);

    const materialsByTopic = new Map<string, number>();
    for (const m of materials) {
      if (!m.topicId || !m.isPublished) continue;
      materialsByTopic.set(m.topicId, (materialsByTopic.get(m.topicId) ?? 0) + 1);
    }

    const mcqsByTopic = new Map<string, number>();
    const pyqsByTopic = new Map<string, number>();
    for (const q of questions) {
      if (!q.topicId || !q.isPublished) continue;
      if (q.questionType === 'pyq') {
        if (q.isVerified !== false && Boolean(q.examName?.trim()) && Number.isInteger(q.examYear)) {
          pyqsByTopic.set(q.topicId, (pyqsByTopic.get(q.topicId) ?? 0) + 1);
        }
      } else {
        mcqsByTopic.set(q.topicId, (mcqsByTopic.get(q.topicId) ?? 0) + 1);
      }
    }

    const testsByTopic = new Map<string, number>();
    for (const t of tests) {
      if (!t.topicId || !t.isPublished) continue;
      testsByTopic.set(t.topicId, (testsByTopic.get(t.topicId) ?? 0) + 1);
    }

    const rows = publishedTopics.map((topic) => {
      const chap = chapterById.get(topic.chapterId);
      const unit = unitById.get(topic.unitId || chap?.unitId || '');
      const effSubjectId = topic.subjectId || chap?.subjectId || unit?.subjectId || '';
      const subj = subjectById.get(effSubjectId);
      const notes = materialsByTopic.get(topic.id) ?? 0;
      const mcqs = mcqsByTopic.get(topic.id) ?? 0;
      const pyqs = pyqsByTopic.get(topic.id) ?? 0;
      const assessments = testsByTopic.get(topic.id) ?? 0;

      const missing: string[] = [];
      if (notes === 0) missing.push('Study Material');
      if (mcqs < 15) missing.push(mcqs === 0 ? 'MCQs (0/15)' : `MCQs (${mcqs}/15)`);
      if (assessments === 0) missing.push('Practice Assessment');

      return {
        topic,
        subjectId: effSubjectId,
        subjectTitle: subj?.title || 'Unassigned Subject',
        subjectSort: safeSortOrder(subj?.sortOrder),
        chapterTitle: chap?.title || 'Chapter',
        notes,
        mcqs,
        pyqs,
        assessments,
        missing,
      };
    });

    rows.sort(
      (a, b) =>
        a.subjectSort - b.subjectSort ||
        compareNaturalText(a.subjectTitle, b.subjectTitle) ||
        safeSortOrder(a.topic.sortOrder) - safeSortOrder(b.topic.sortOrder) ||
        compareNaturalText(a.topic.title, b.topic.title)
    );

    const bySubjectMap = new Map<
      string,
      {
        subjectId: string;
        subjectTitle: string;
        totalTopics: number;
        withNotes: number;
        with15Mcqs: number;
        withPyqs: number;
        withAssessments: number;
        incompleteTopics: number;
      }
    >();

    for (const r of rows) {
      const current = bySubjectMap.get(r.subjectId) ?? {
        subjectId: r.subjectId,
        subjectTitle: r.subjectTitle,
        totalTopics: 0,
        withNotes: 0,
        with15Mcqs: 0,
        withPyqs: 0,
        withAssessments: 0,
        incompleteTopics: 0,
      };
      current.totalTopics += 1;
      if (r.notes > 0) current.withNotes += 1;
      if (r.mcqs >= 15) current.with15Mcqs += 1;
      if (r.pyqs > 0) current.withPyqs += 1;
      if (r.assessments > 0) current.withAssessments += 1;
      if (r.missing.length > 0) current.incompleteTopics += 1;
      bySubjectMap.set(r.subjectId, current);
    }

    return {
      rows,
      subjects: Array.from(bySubjectMap.values()),
      totals: {
        topics: rows.length,
        withNotes: rows.filter((r) => r.notes > 0).length,
        with15Mcqs: rows.filter((r) => r.mcqs >= 15).length,
        withPyqs: rows.filter((r) => r.pyqs > 0).length,
        withAssessments: rows.filter((r) => r.assessments > 0).length,
        incomplete: rows.filter((r) => r.missing.length > 0).length,
      },
    };
  }, [topics, materials, questions, tests, chapterById, unitById, subjectById]);

  const filteredRows = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return report.rows.filter((r) => {
      if (selectedSubjectId && r.subjectId !== selectedSubjectId) return false;
      if (onlyMissing && r.missing.length === 0) return false;
      if (
        q &&
        !r.topic.title.toLowerCase().includes(q) &&
        !r.subjectTitle.toLowerCase().includes(q) &&
        !r.chapterTitle.toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }, [report.rows, selectedSubjectId, onlyMissing, searchQuery]);

  return (
    <section className="bg-panel border border-edge rounded-xl p-5 sm:p-6 shadow-sm space-y-5">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-ink">
            Subject &amp; Topic Coverage Report (Published Content)
          </h2>
          <p className="mt-0.5 text-xs text-ink-muted">
            Live Firestore audit of published Study Materials, MCQs (15+ target), Verified PYQs, and Practice Assessments per topic.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <Link
            to="/admin/topics"
            className="px-3 py-1.5 font-semibold rounded-lg border border-accent/50 bg-subtle text-accent-text hover:bg-accent hover:text-accent-ink transition-colors"
          >
            Open Topic Batch Sync
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs">
        <div className="rounded-lg border border-edge bg-subtle px-3 py-2.5">
          <div className="text-ink-muted">Published Topics</div>
          <div className="mt-1 font-mono tabular-nums font-bold text-ink">{report.totals.topics}</div>
        </div>
        <div className="rounded-lg border border-edge bg-subtle px-3 py-2.5">
          <div className="text-ink-muted">Notes Published</div>
          <div className="mt-1 font-mono tabular-nums font-bold text-ink">
            {report.totals.withNotes}/{report.totals.topics}
          </div>
        </div>
        <div className="rounded-lg border border-edge bg-subtle px-3 py-2.5">
          <div className="text-ink-muted">15+ MCQs Ready</div>
          <div className="mt-1 font-mono tabular-nums font-bold text-ink">
            {report.totals.with15Mcqs}/{report.totals.topics}
          </div>
        </div>
        <div className="rounded-lg border border-edge bg-subtle px-3 py-2.5">
          <div className="text-ink-muted">Verified PYQs</div>
          <div className="mt-1 font-mono tabular-nums font-bold text-ink">
            {report.totals.withPyqs} topics
          </div>
        </div>
        <div className="rounded-lg border border-edge bg-subtle px-3 py-2.5">
          <div className="text-ink-muted">Practice Tests</div>
          <div className="mt-1 font-mono tabular-nums font-bold text-ink">
            {report.totals.withAssessments}/{report.totals.topics}
          </div>
        </div>
        <div className="rounded-lg border border-edge bg-subtle px-3 py-2.5">
          <div className="text-ink-muted">Topics w/ Gaps</div>
          <div className="mt-1 font-mono tabular-nums font-bold text-accent-text">
            {report.totals.incomplete}
          </div>
        </div>
      </div>

      {report.subjects.length > 0 && (
        <div className="overflow-x-auto rounded-lg border border-edge">
          <table className="w-full text-left text-xs">
            <thead className="bg-subtle text-ink-muted border-b border-edge">
              <tr>
                <th className="px-3 py-2 font-semibold">Subject</th>
                <th className="px-3 py-2 font-semibold text-right">Topics</th>
                <th className="px-3 py-2 font-semibold text-right">Notes</th>
                <th className="px-3 py-2 font-semibold text-right">15+ MCQs</th>
                <th className="px-3 py-2 font-semibold text-right">Verified PYQs</th>
                <th className="px-3 py-2 font-semibold text-right">Assessments</th>
                <th className="px-3 py-2 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-edge">
              {report.subjects.map((s) => (
                <tr
                  key={s.subjectId || s.subjectTitle}
                  className={`hover:bg-subtle/60 cursor-pointer ${
                    selectedSubjectId === s.subjectId ? 'bg-accent/10' : ''
                  }`}
                  onClick={() =>
                    setSelectedSubjectId((prev) => (prev === s.subjectId ? '' : s.subjectId))
                  }
                >
                  <td className="px-3 py-2 font-medium text-ink">{s.subjectTitle}</td>
                  <td className="px-3 py-2 font-mono tabular-nums text-right text-ink">
                    {s.totalTopics}
                  </td>
                  <td className="px-3 py-2 font-mono tabular-nums text-right text-ink">
                    {s.withNotes}/{s.totalTopics}
                  </td>
                  <td className="px-3 py-2 font-mono tabular-nums text-right text-ink">
                    {s.with15Mcqs}/{s.totalTopics}
                  </td>
                  <td className="px-3 py-2 font-mono tabular-nums text-right text-ink-muted">
                    {s.withPyqs}
                  </td>
                  <td className="px-3 py-2 font-mono tabular-nums text-right text-ink">
                    {s.withAssessments}/{s.totalTopics}
                  </td>
                  <td className="px-3 py-2 text-right">
                    {s.incompleteTopics === 0 ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Complete
                      </span>
                    ) : (
                      <span className="font-mono text-accent-text">
                        {s.incompleteTopics} pending
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-ink-faint absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topic or chapter..."
                className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <select
              aria-label="Filter report by subject"
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value)}
              className="px-2.5 py-1.5 text-xs rounded-lg border border-edge-strong bg-field text-ink"
            >
              <option value="">All Subjects ({report.subjects.length})</option>
              {report.subjects.map((s) => (
                <option key={s.subjectId} value={s.subjectId}>
                  {s.subjectTitle} ({s.totalTopics})
                </option>
              ))}
            </select>
            <label className="inline-flex items-center gap-1.5 text-xs text-ink cursor-pointer">
              <input
                type="checkbox"
                checked={onlyMissing}
                onChange={(e) => setOnlyMissing(e.target.checked)}
                className="accent-accent"
              />
              <span>Only Topics with Missing Items</span>
            </label>
          </div>
          <div className="text-xs font-mono text-ink-muted">
            Showing {filteredRows.length} topic{filteredRows.length === 1 ? '' : 's'}
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto rounded-lg border border-edge">
          <table className="w-full text-left text-xs">
            <thead className="bg-subtle text-ink-muted border-b border-edge sticky top-0">
              <tr>
                <th className="px-3 py-2 font-semibold">Topic &amp; Subject</th>
                <th className="px-3 py-2 font-semibold text-right">Notes</th>
                <th className="px-3 py-2 font-semibold text-right">MCQs</th>
                <th className="px-3 py-2 font-semibold text-right">Verified PYQs</th>
                <th className="px-3 py-2 font-semibold text-right">Assessments</th>
                <th className="px-3 py-2 font-semibold">Missing Items</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-edge">
              {filteredRows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-3 py-6 text-center text-ink-muted">
                    No topics match the current filters.
                  </td>
                </tr>
              ) : (
                filteredRows.map((r) => (
                  <tr key={r.topic.id} className="hover:bg-subtle/40">
                    <td className="px-3 py-2">
                      <div className="font-medium text-ink">{r.topic.title}</div>
                      <div className="text-[11px] text-ink-faint">
                        {r.subjectTitle} / {r.chapterTitle}
                      </div>
                    </td>
                    <td className="px-3 py-2 font-mono tabular-nums text-right text-ink">
                      {r.notes}
                    </td>
                    <td className="px-3 py-2 font-mono tabular-nums text-right text-ink">
                      {r.mcqs}
                    </td>
                    <td className="px-3 py-2 font-mono tabular-nums text-right text-ink-muted">
                      {r.pyqs}
                    </td>
                    <td className="px-3 py-2 font-mono tabular-nums text-right text-ink">
                      {r.assessments}
                    </td>
                    <td className="px-3 py-2">
                      {r.missing.length === 0 ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                          Ready
                        </span>
                      ) : (
                        <span className="text-amber-600 dark:text-amber-400 font-medium">
                          {r.missing.join(', ')}
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
