import { useEffect, useMemo, useState } from 'react';
import { compareNaturalText, safeSortOrder } from '../../lib/syllabusHierarchy';
import { Chapter, Subject, Topic, Unit } from '../../types/academic';

interface CascadingTopicSelectorProps {
  subjects: Subject[];
  units: Unit[];
  chapters: Chapter[];
  topics: Topic[];
  valueTopicId: string;
  valueSubjectId?: string;
  onChange: (next: { topicId: string; subjectId: string; chapterId: string; unitId: string }) => void;
  allowEmptyTopic?: boolean;
  emptyTopicLabel?: string;
  emptySubjectLabel?: string;
}

export function CascadingTopicSelector({
  subjects,
  units,
  chapters,
  topics,
  valueTopicId,
  valueSubjectId = '',
  onChange,
  allowEmptyTopic = false,
  emptyTopicLabel = 'No specific topic (Multi-topic / Subject-wide)',
  emptySubjectLabel = 'All Subjects',
}: CascadingTopicSelectorProps) {
  const subjectMap = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);
  const unitMap = useMemo(() => new Map(units.map((u) => [u.id, u])), [units]);
  const chapterMap = useMemo(() => new Map(chapters.map((c) => [c.id, c])), [chapters]);
  const topicMap = useMemo(() => new Map(topics.map((t) => [t.id, t])), [topics]);

  const sortedSubjects = useMemo(
    () =>
      [...subjects].sort(
        (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
      ),
    [subjects]
  );

  const selectedTopic = valueTopicId ? topicMap.get(valueTopicId) : undefined;
  const selectedTopicChapter = selectedTopic ? chapterMap.get(selectedTopic.chapterId) : undefined;
  const selectedTopicUnit =
    (selectedTopic?.unitId && unitMap.get(selectedTopic.unitId)) ||
    (selectedTopicChapter?.unitId && unitMap.get(selectedTopicChapter.unitId)) ||
    undefined;
  const derivedSubjectId =
    selectedTopic?.subjectId ||
    selectedTopicChapter?.subjectId ||
    selectedTopicUnit?.subjectId ||
    valueSubjectId ||
    (allowEmptyTopic ? '' : sortedSubjects[0]?.id ?? '');

  const [subjectId, setSubjectId] = useState(derivedSubjectId);
  const [unitId, setUnitId] = useState(selectedTopicUnit?.id ?? '');
  const [chapterId, setChapterId] = useState(selectedTopicChapter?.id ?? '');

  useEffect(() => {
    if (selectedTopic) {
      const ch = chapterMap.get(selectedTopic.chapterId);
      const un =
        (selectedTopic.unitId && unitMap.get(selectedTopic.unitId)) ||
        (ch?.unitId && unitMap.get(ch.unitId)) ||
        undefined;
      const su = selectedTopic.subjectId || ch?.subjectId || un?.subjectId || '';
      setSubjectId(su);
      setUnitId(un?.id ?? '');
      setChapterId(ch?.id ?? '');
    } else if (valueSubjectId !== undefined && valueSubjectId !== subjectId && !valueTopicId) {
      setSubjectId(valueSubjectId);
      setUnitId('');
      setChapterId('');
    }
  }, [selectedTopic, valueTopicId, valueSubjectId, chapterMap, unitMap, subjectId]);

  const unitsForSubject = useMemo(() => {
    const list = subjectId ? units.filter((u) => u.subjectId === subjectId) : units;
    return [...list].sort(
      (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
    );
  }, [units, subjectId]);

  const chaptersForSelection = useMemo(() => {
    const list = chapters.filter((c) => {
      const parentUnit = c.unitId ? unitMap.get(c.unitId) : undefined;
      const effSubject = c.subjectId || parentUnit?.subjectId || '';
      if (subjectId && effSubject !== subjectId) return false;
      if (unitId && c.unitId !== unitId) return false;
      return true;
    });
    return [...list].sort(
      (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
    );
  }, [chapters, unitMap, subjectId, unitId]);

  const topicsForSelection = useMemo(() => {
    const list = topics.filter((t) => {
      const ch = chapterMap.get(t.chapterId);
      const un = unitMap.get(t.unitId || ch?.unitId || '');
      const effSubject = t.subjectId || ch?.subjectId || un?.subjectId || '';
      const effUnit = t.unitId || ch?.unitId || '';
      if (subjectId && effSubject !== subjectId) return false;
      if (unitId && effUnit !== unitId) return false;
      if (chapterId && t.chapterId !== chapterId) return false;
      return true;
    });
    return [...list].sort(
      (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || compareNaturalText(a.title, b.title)
    );
  }, [topics, chapterMap, unitMap, subjectId, unitId, chapterId]);

  const emitTopic = (nextTopic: Topic | undefined, fallbackSubjectId: string) => {
    if (!nextTopic) {
      onChange({
        topicId: '',
        subjectId: fallbackSubjectId,
        chapterId: '',
        unitId: '',
      });
      return;
    }
    const ch = chapterMap.get(nextTopic.chapterId);
    const un = unitMap.get(nextTopic.unitId || ch?.unitId || '');
    const su = nextTopic.subjectId || ch?.subjectId || un?.subjectId || fallbackSubjectId;
    onChange({
      topicId: nextTopic.id,
      subjectId: su,
      chapterId: ch?.id ?? nextTopic.chapterId ?? '',
      unitId: un?.id ?? nextTopic.unitId ?? '',
    });
  };

  const handleSubjectChange = (nextSubjId: string) => {
    setSubjectId(nextSubjId);
    setUnitId('');
    setChapterId('');
    if (allowEmptyTopic) {
      emitTopic(undefined, nextSubjId);
      return;
    }
    const firstTopic = topics.find((t) => {
      const ch = chapterMap.get(t.chapterId);
      const un = unitMap.get(t.unitId || ch?.unitId || '');
      return (t.subjectId || ch?.subjectId || un?.subjectId || '') === nextSubjId;
    });
    emitTopic(firstTopic, nextSubjId);
  };

  const handleUnitChange = (nextUnitId: string) => {
    setUnitId(nextUnitId);
    setChapterId('');
    if (allowEmptyTopic && !valueTopicId) return;
    const firstTopic = topics.find((t) => {
      const ch = chapterMap.get(t.chapterId);
      const effSubject = t.subjectId || ch?.subjectId || (ch?.unitId && unitMap.get(ch.unitId)?.subjectId) || '';
      const effUnit = t.unitId || ch?.unitId || '';
      return (!subjectId || effSubject === subjectId) && (!nextUnitId || effUnit === nextUnitId);
    });
    emitTopic(firstTopic, subjectId);
  };

  const handleChapterChange = (nextChapterId: string) => {
    setChapterId(nextChapterId);
    if (allowEmptyTopic && !valueTopicId) return;
    const firstTopic = topics.find((t) => {
      const ch = chapterMap.get(t.chapterId);
      const effSubject = t.subjectId || ch?.subjectId || '';
      const effUnit = t.unitId || ch?.unitId || '';
      return (
        (!subjectId || effSubject === subjectId) &&
        (!unitId || effUnit === unitId) &&
        (!nextChapterId || t.chapterId === nextChapterId)
      );
    });
    emitTopic(firstTopic, subjectId);
  };

  const handleTopicChange = (nextTopicId: string) => {
    if (!nextTopicId) {
      emitTopic(undefined, subjectId);
      return;
    }
    const found = topicMap.get(nextTopicId);
    emitTopic(found, subjectId);
  };

  const pathSubject = subjectMap.get(subjectId)?.title || (subjectId ? 'Subject' : emptySubjectLabel);
  const pathUnit = selectedTopicUnit?.title || (unitId ? unitMap.get(unitId)?.title : '');
  const pathChapter = selectedTopicChapter?.title || (chapterId ? chapterMap.get(chapterId)?.title : '');

  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div>
          <label className="block text-[11px] font-medium text-ink-muted mb-1">
            1. Subject
          </label>
          <select
            aria-label="Select Subject"
            value={subjectId}
            onChange={(e) => handleSubjectChange(e.target.value)}
            className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">{emptySubjectLabel}</option>
            {sortedSubjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-medium text-ink-muted mb-1">
            2. Unit
          </label>
          <select
            aria-label="Select Unit"
            value={unitId}
            disabled={unitsForSubject.length === 0}
            onChange={(e) => handleUnitChange(e.target.value)}
            className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60"
          >
            <option value="">All Units ({unitsForSubject.length})</option>
            {unitsForSubject.map((u) => (
              <option key={u.id} value={u.id}>
                {u.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-medium text-ink-muted mb-1">
            3. Chapter
          </label>
          <select
            aria-label="Select Chapter"
            value={chapterId}
            disabled={chaptersForSelection.length === 0}
            onChange={(e) => handleChapterChange(e.target.value)}
            className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60"
          >
            <option value="">All Chapters ({chaptersForSelection.length})</option>
            {chaptersForSelection.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-medium text-ink-muted mb-1">
            4. Topic ({topicsForSelection.length})
          </label>
          <select
            aria-label="Select Topic"
            value={valueTopicId}
            required={!allowEmptyTopic}
            onChange={(e) => handleTopicChange(e.target.value)}
            className="w-full px-2.5 py-2 text-xs rounded-lg border border-edge-strong bg-field text-ink focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {allowEmptyTopic ? (
              <option value="">{emptyTopicLabel}</option>
            ) : (
              topicsForSelection.length === 0 && <option value="">No topics found</option>
            )}
            {topicsForSelection.map((t) => (
              <option key={t.id} value={t.id}>
                {t.title} {!t.isPublished ? '(Draft)' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-lg border border-edge bg-subtle/80 px-3 py-2 text-[11px]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-semibold text-ink-muted uppercase tracking-wider">
            Selected Topic Path
          </span>
          {selectedTopic && (
            <span className="font-mono text-ink-faint">
              ID: {selectedTopic.id} · {selectedTopic.isPublished ? 'Published' : 'Draft'}
            </span>
          )}
        </div>
        <div className="mt-1 font-medium text-ink">
          {selectedTopic
            ? [pathSubject, pathUnit, pathChapter, selectedTopic.title].filter(Boolean).join(' / ')
            : allowEmptyTopic
              ? `${pathSubject} — ${emptyTopicLabel}`
              : 'Select a target topic above before saving'}
        </div>
      </div>
    </div>
  );
}
