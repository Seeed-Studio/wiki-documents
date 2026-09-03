import React, { type ReactElement, type ReactNode, useEffect, useMemo, useState } from 'react';
import { useHistory } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData';
import { searchFaqs } from './search';
import styles from './styles.module.css';

export interface FaqItem {
  id: string;
  question: string;
  summary: string;
  product: string;
  productLabel: string;
  primaryDomain: string;
  domains: string[];
  skus: string[];
  keywords: string[];
  lastVerifiedAt: string;
  url: string;
}

export interface FilterOption {
  key: string;
  label: string;
}

export interface FaqIndexData {
  schemaVersion: string;
  artifactType: string;
  locale?: string;
  baseUrl?: string;
  products: FilterOption[];
  domains: FilterOption[];
  items: FaqItem[];
}

export interface FaqExplorerProps {
  /**
   * Optional visible-text slots for the UI chrome. Each child element must
   * carry a stable `data-slot` attribute naming the string; the text between
   * the tags is what the MD/MDX translation workflow translates, while the
   * attribute stays stable. Unknown slots fall back to English defaults.
   */
  children?: ReactNode;
}

/**
 * English fallbacks for every UI string. Locale sites override them through
 * MDX text slots in the FAQ Center page.
 */
const DEFAULT_UI = {
  searchLabel: 'Search',
  searchPlaceholder: 'Search by product, SKU, error or keyword…',
  searchAria: 'Search ReSpeaker FAQs',
  productLabel: 'Product',
  productAria: 'Filter by product',
  allOption: 'All',
  domainLabel: 'Domain',
  domainAria: 'Filter by domain',
  clearFilters: 'Clear filters',
  resultsShowing: 'Showing %count% of %total% questions',
  orNote: 'no result matched every term, so matches for any term are shown',
  emptyTitle: 'No FAQ matches the current search and filters.',
  emptyHint1: 'Check the spelling or remove one of the filters.',
  emptyHint2: 'Try a product name or a keyword such as “DFU”, “Safe Mode” or “ESPHome”.',
  emptyHint3:
    'If the topic is not listed here, prepare your product model, SKU, firmware version, host system and a minimal reproduction before contacting support.',
  clearSearchAndFilters: 'Clear search and filters',
  staticNote:
    'Enable JavaScript in your browser for full-text search and filtering. This static list is always available.',
  lastVerified: 'Last verified: %date%',
  skuBadge: 'SKU: %skus%',
} as const;

type UiKey = keyof typeof DEFAULT_UI;
type UiStrings = Record<UiKey, string>;

const EMPTY_INDEX: FaqIndexData = { schemaVersion: '', artifactType: '', products: [], domains: [], items: [] };

/** Concatenate all text nodes under a React subtree (fragments/arrays included). */
function textContent(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textContent).join('');
  const element = node as ReactElement;
  return textContent(element.props?.children);
}

/**
 * Collect translated UI strings from MDX text slots:
 *   <FaqExplorer>
 *     <span data-slot="searchLabel">Search</span>
 *   </FaqExplorer>
 * The `data-slot` attribute is machine metadata (stable), the text between the
 * tags is visible text (translated by the regular MD/MDX translation flow).
 */
function collectUiStrings(children: ReactNode | undefined): UiStrings {
  const ui: UiStrings = { ...DEFAULT_UI };
  if (!children) return ui;
  const visit = (nodes: ReactNode): void => {
    React.Children.forEach(nodes, (child) => {
      if (!React.isValidElement(child)) return;
      const slot = child.props?.['data-slot'] ?? child.props?.slot;
      if (typeof slot === 'string' && slot in DEFAULT_UI) {
        const value = textContent(child.props?.children).replace(/\s+/g, ' ').trim();
        if (value) ui[slot as UiKey] = value;
      }
      visit(child.props?.children);
    });
  };
  visit(children);
  return ui;
}

function formatTemplate(template: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce(
    (out, [key, value]) => out.split(`%${key}%`).join(String(value)),
    template,
  );
}

interface StaticGroup {
  product: string;
  label: string;
  items: FaqItem[];
}

function buildStaticGroups(items: FaqItem[]): StaticGroup[] {
  const groups: StaticGroup[] = [];
  const indexByProduct = new Map<string, number>();
  for (const item of items) {
    let idx = indexByProduct.get(item.product);
    if (idx === undefined) {
      idx = groups.length;
      indexByProduct.set(item.product, idx);
      groups.push({ product: item.product, label: item.productLabel, items: [] });
    }
    groups[idx].items.push(item);
  }
  return groups;
}

/**
 * No-JavaScript fallback: a plain, product-grouped list of links. This is what
 * is server-rendered first, so the page remains usable when JavaScript is off.
 */
function StaticFallback({ items, ui }: { items: FaqItem[]; ui: UiStrings }) {
  const groups = buildStaticGroups(items);
  return (
    <div className={styles.staticFallback}>
      <p className={styles.staticNote}>{ui.staticNote}</p>
      {groups.map((group) => (
        <section key={group.product} className={styles.staticGroup}>
          <h4 className={styles.staticGroupTitle}>{group.label}</h4>
          <ul className={styles.staticList}>
            {group.items.map((item) => (
              <li key={item.id}>
                <a href={item.url}>{item.question}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default function FaqExplorer({ children }: FaqExplorerProps) {
  const data = (usePluginData('respeaker-faq-index') as FaqIndexData | undefined) ?? EMPTY_INDEX;
  const items = data.items || [];
  const productOptions = data.products || [];
  const domainOptions = data.domains || [];
  const ui = useMemo(() => collectUiStrings(children), [children]);

  const history = useHistory();
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState('');
  const [product, setProduct] = useState('');
  const [domain, setDomain] = useState('');

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setQuery(params.get('q') || '');
      setProduct(params.get('product') || '');
      setDomain(params.get('domain') || '');
    }
  }, []);

  const syncUrl = (next: { query: string; product: string; domain: string }) => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams();
    if (next.query) params.set('q', next.query);
    if (next.product) params.set('product', next.product);
    if (next.domain) params.set('domain', next.domain);
    const qs = params.toString();
    history.replace({ search: qs ? `?${qs}` : '' });
  };

  const setField = (field: 'query' | 'product' | 'domain') => (value: string) => {
    const next =
      field === 'query'
        ? { query: value, product, domain }
        : field === 'product'
          ? { query, product: value, domain }
          : { query, product, domain: value };
    setQuery(next.query);
    setProduct(next.product);
    setDomain(next.domain);
    syncUrl(next);
  };

  const clearAll = () => {
    setQuery('');
    setProduct('');
    setDomain('');
    syncUrl({ query: '', product: '', domain: '' });
  };

  const { items: results, orFallback } = useMemo(
    () => searchFaqs(items, { query, product, domain }),
    [items, query, product, domain],
  );

  const hasActiveFilters = Boolean(query || product || domain);

  if (!mounted) {
    return <StaticFallback items={items} ui={ui} />;
  }

  return (
    <div className={styles.explorer}>
      <div className={styles.controls}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>{ui.searchLabel}</span>
          <input
            type="search"
            className={styles.searchInput}
            placeholder={ui.searchPlaceholder}
            value={query}
            onChange={(e) => setField('query')(e.target.value)}
            aria-label={ui.searchAria}
          />
        </label>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>{ui.productLabel}</span>
          <select
            className={styles.select}
            value={product}
            onChange={(e) => setField('product')(e.target.value)}
            aria-label={ui.productAria}
          >
            <option value="">{ui.allOption}</option>
            {productOptions.map((opt) => (
              <option key={opt.key} value={opt.key}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>{ui.domainLabel}</span>
          <select
            className={styles.select}
            value={domain}
            onChange={(e) => setField('domain')(e.target.value)}
            aria-label={ui.domainAria}
          >
            <option value="">{ui.allOption}</option>
            {domainOptions.map((opt) => (
              <option key={opt.key} value={opt.key}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        {hasActiveFilters && (
          <button type="button" className={styles.clearButton} onClick={clearAll}>
            {ui.clearFilters}
          </button>
        )}
      </div>

      <p className={styles.resultCount}>
        {formatTemplate(ui.resultsShowing, { count: results.length, total: items.length })}
        {orFallback && <span className={styles.orNote}> — {ui.orNote}</span>}
      </p>

      {results.length === 0 ? (
        <div className={styles.emptyState} role="status">
          <p>{ui.emptyTitle}</p>
          <ul>
            <li>{ui.emptyHint1}</li>
            <li>{ui.emptyHint2}</li>
            <li>{ui.emptyHint3}</li>
          </ul>
          {hasActiveFilters && (
            <button type="button" className={styles.clearButton} onClick={clearAll}>
              {ui.clearSearchAndFilters}
            </button>
          )}
        </div>
      ) : (
        <ul className={styles.resultList}>
          {results.map((item) => (
            <li key={item.id} className={styles.resultCard}>
              <a className={styles.resultLink} href={item.url}>
                {item.question}
              </a>
              <p className={styles.resultSummary}>{item.summary}</p>
              <div className={styles.resultMeta}>
                <span className={styles.badge}>{item.productLabel}</span>
                {item.skus.length > 0 && (
                  <span className={styles.badge}>
                    {formatTemplate(ui.skuBadge, { skus: item.skus.join(', ') })}
                  </span>
                )}
                <span className={styles.verified}>
                  {formatTemplate(ui.lastVerified, { date: item.lastVerifiedAt })}
                </span>
              </div>
              {item.keywords.length > 0 && (
                <ul className={styles.keywordList}>
                  {item.keywords.slice(0, 5).map((kw) => (
                    <li key={kw} className={styles.keyword}>
                      {kw}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
