import React from 'react';

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      nodes.push(
        <strong key={`b-${key++}`} className="font-semibold text-ink">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      nodes.push(
        <code
          key={`c-${key++}`}
          className="rounded bg-subtle px-1.5 py-0.5 font-mono text-[13px] text-accent-text"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      nodes.push(
        <em key={`i-${key++}`} className="italic">
          {token.slice(1, -1)}
        </em>
      );
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

function parseTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function isTableSeparator(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed.includes('|')) return false;
  const cells = parseTableRow(trimmed);
  return cells.length > 0 && cells.every((cell) => /^:?-{2,}:?$/.test(cell));
}

export function MarkdownContent({ content }: { content: string }) {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let keyCounter = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push(<hr key={`hr-${keyCounter++}`} className="my-5 border-edge" />);
      i += 1;
      continue;
    }

    // Headings
    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingText = headingMatch[2];
      if (level === 1) {
        blocks.push(
          <h2 key={`h-${keyCounter++}`} className="mt-6 mb-3 text-xl font-bold text-ink">
            {renderInline(headingText)}
          </h2>
        );
      } else if (level === 2) {
        blocks.push(
          <h3
            key={`h-${keyCounter++}`}
            className="mt-6 mb-2.5 border-b border-edge pb-1.5 text-lg font-bold text-accent-text"
          >
            {renderInline(headingText)}
          </h3>
        );
      } else if (level === 3) {
        blocks.push(
          <h4 key={`h-${keyCounter++}`} className="mt-4 mb-2 text-base font-semibold text-ink">
            {renderInline(headingText)}
          </h4>
        );
      } else {
        blocks.push(
          <h5 key={`h-${keyCounter++}`} className="mt-3 mb-1.5 text-sm font-semibold text-ink">
            {renderInline(headingText)}
          </h5>
        );
      }
      i += 1;
      continue;
    }

    // Tables
    if (
      trimmed.includes('|') &&
      i + 1 < lines.length &&
      isTableSeparator(lines[i + 1])
    ) {
      const headers = parseTableRow(trimmed);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().includes('|') && lines[i].trim() !== '') {
        rows.push(parseTableRow(lines[i]));
        i += 1;
      }
      blocks.push(
        <div key={`tbl-${keyCounter++}`} className="my-4 overflow-x-auto rounded-xl border border-edge">
          <table className="w-full border-collapse text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-edge bg-subtle">
                {headers.map((header, idx) => (
                  <th key={idx} className="px-3.5 py-2.5 font-semibold text-ink">
                    {renderInline(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-edge">
              {rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-subtle/40">
                  {headers.map((_, colIdx) => (
                    <td key={colIdx} className="px-3.5 py-2.5 text-ink-muted align-top">
                      {renderInline(row[colIdx] ?? '')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Blockquotes
    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i += 1;
      }
      blocks.push(
        <blockquote
          key={`bq-${keyCounter++}`}
          className="my-4 rounded-r-lg border-l-4 border-accent bg-subtle/60 px-4 py-3 text-sm leading-7 text-ink"
        >
          {quoteLines.map((qLine, qIdx) => (
            <p key={qIdx} className={qIdx > 0 ? 'mt-1.5' : undefined}>
              {renderInline(qLine)}
            </p>
          ))}
        </blockquote>
      );
      continue;
    }

    // Unordered list
    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i += 1;
      }
      blocks.push(
        <ul key={`ul-${keyCounter++}`} className="my-3 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-ink">
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i += 1;
      }
      blocks.push(
        <ol key={`ol-${keyCounter++}`} className="my-3 list-decimal space-y-1.5 pl-5 text-[15px] leading-7 text-ink">
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Paragraph (collect consecutive text lines)
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^(#{1,4}\s+|[-*]\s+|\d+\.\s+|>\s?|---+)/.test(lines[i].trim()) &&
      !(lines[i].trim().includes('|') && i + 1 < lines.length && isTableSeparator(lines[i + 1]))
    ) {
      paraLines.push(lines[i].trim());
      i += 1;
    }
    blocks.push(
      <p key={`p-${keyCounter++}`} className="my-3 text-[15px] leading-7 text-ink">
        {renderInline(paraLines.join(' '))}
      </p>
    );
  }

  return <div className="space-y-1 break-words">{blocks}</div>;
}
