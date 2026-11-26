declare module 'word-extractor' {
  export interface WordDocument {
    getBody(options?: { includeHeadersAndFooters?: boolean }): string;
    getHeaders?(options?: { includeFooters?: boolean }): string;
    getFootnotes?(): string;
    getEndnotes?(): string;
    getTextboxes?(options?: { includeHeadersAndFooters?: boolean }): string;
  }

  export default class WordExtractor {
    extract(source: string | Buffer): Promise<WordDocument>;
  }
}
