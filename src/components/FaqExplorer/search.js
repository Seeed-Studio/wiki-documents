/**
 * Pure, framework-free search helpers for the ReSpeaker FAQ Center.
 *
 * These functions are intentionally free of React/Docusaurus so they can be
 * unit-tested with plain Node (scripts/respeaker-faq/tests/search.test.js).
 *
 * Data shape (one FAQ item from the per-locale search index published by
 * plugins/respeaker-faq-index through Docusaurus global data):
 *   { id, question, summary, product, productLabel, primaryDomain,
 *     domains: string[], skus: string[], keywords: string[],
 *     lastVerifiedAt, url }
 */
'use strict';

/**
 * Normalize text for matching: lowercase, treat hyphens/underscores as spaces,
 * collapse whitespace and trim.
 * @param {string} [text]
 * @returns {string}
 */
function normalizeText(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Split a query into normalized, non-empty tokens.
 * @param {string} [query]
 * @returns {string[]}
 */
function tokenizeQuery(query) {
  const normalized = normalizeText(query);
  if (!normalized) return [];
  return normalized.split(' ').filter(Boolean);
}

/** Field weights per PRD §11.3. */
const FIELD_WEIGHTS = {
  question: 5,
  skus: 5,
  productLabel: 4,
  keywords: 3,
  summary: 2,
  domains: 1,
};

/**
 * Plain-text view of one field of a FAQ item.
 * @param {object} faq
 * @param {string} field
 * @returns {string}
 */
function fieldText(faq, field) {
  switch (field) {
    case 'question':
      return String(faq.question || '');
    case 'skus':
      return (faq.skus || []).join(' ');
    case 'productLabel':
      return String(faq.productLabel || '');
    case 'keywords':
      return (faq.keywords || []).join(' ');
    case 'summary':
      return String(faq.summary || '');
    case 'domains':
      return (faq.domains || []).join(' ');
    default:
      return '';
  }
}

/**
 * Score one FAQ against the query tokens.
 * @param {object} faq
 * @param {string[]} tokens
 * @returns {{ score: number, matched: Set<string> }}
 */
function scoreFaq(faq, tokens) {
  let score = 0;
  const matched = new Set();
  for (const token of tokens) {
    for (const field of Object.keys(FIELD_WEIGHTS)) {
      if (normalizeText(fieldText(faq, field)).includes(token)) {
        score += FIELD_WEIGHTS[field];
        matched.add(token);
      }
    }
  }
  return { score, matched };
}

/**
 * @param {Array<object>} faqs
 * @param {string} productKey
 * @returns {Array<object>}
 */
function filterByProduct(faqs, productKey) {
  if (!productKey) return faqs;
  return faqs.filter((f) => f.product === productKey);
}

/**
 * @param {Array<object>} faqs
 * @param {string} domainKey
 * @returns {Array<object>}
 */
function filterByDomain(faqs, domainKey) {
  if (!domainKey) return faqs;
  return faqs.filter((f) => (f.domains || []).includes(domainKey));
}

/**
 * Deterministic sort: score desc, then productLabel, then question.
 * @param {Array<object>} items
 * @returns {Array<object>}
 */
function sortResults(items) {
  return [...items].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.productLabel !== b.productLabel) return a.productLabel.localeCompare(b.productLabel);
    if (a.question !== b.question) return a.question.localeCompare(b.question);
    return 0;
  });
}

/**
 * Combined text search + product/domain filters.
 *
 * - Empty query: all items (after filters), score 0.
 * - Non-empty query: AND semantics first (every token must match at least one
 *   weighted field). If that yields nothing with >1 token, falls back to OR
 *   and reports `orFallback: true` so the UI can say so.
 *
 * @param {Array<object>} faqs
 * @param {{ query?: string, product?: string, domain?: string }} [opts]
 * @returns {{ items: Array<object>, orFallback: boolean }}
 */
function searchFaqs(faqs, { query = '', product = '', domain = '' } = {}) {
  const tokens = tokenizeQuery(query);
  let filtered = filterByProduct(faqs, product);
  filtered = filterByDomain(filtered, domain);

  if (!tokens.length) {
    return { items: sortResults(filtered.map((f) => ({ ...f, score: 0 }))), orFallback: false };
  }

  const scored = (list) =>
    sortResults(
      list.map((f) => {
        const { score, matched } = scoreFaq(f, tokens);
        return { ...f, score, matched };
      })
    );

  let results = scored(filtered).filter((r) => r.matched.size === tokens.length);
  let orFallback = false;
  if (!results.length && tokens.length > 1) {
    results = scored(filtered).filter((r) => r.matched.size > 0);
    orFallback = true;
  }

  const items = results.map(({ matched, score, ...rest }) => rest);
  return { items, orFallback };
}

module.exports = {
  normalizeText,
  tokenizeQuery,
  scoreFaq,
  filterByProduct,
  filterByDomain,
  searchFaqs,
  sortResults,
  FIELD_WEIGHTS,
};
