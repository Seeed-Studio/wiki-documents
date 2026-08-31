import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from '@docusaurus/router';
import faqIndexData from '@site/src/data/respeaker_faq_index.json';
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
  products: FilterOption[];
  domains: FilterOption[];
  items: FaqItem[];
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
function StaticFallback({ items }: { items: FaqItem[] }) {
  const groups = buildStaticGroups(items);
  return (
    <div className={styles.staticFallback}>
      <p className={styles.staticNote}>
        Enable JavaScript in your browser for full-text search and filtering. This static list is always available.
      </p>
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

export default function FaqExplorer() {
  const data = faqIndexData as unknown as FaqIndexData;
  const items = data.items || [];
  const productOptions = data.products || [];
  const domainOptions = data.domains || [];

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
    return <StaticFallback items={items} />;
  }

  return (
    <div className={styles.explorer}>
      <div className={styles.controls}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Search</span>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search by product, SKU, error or keyword…"
            value={query}
            onChange={(e) => setField('query')(e.target.value)}
            aria-label="Search ReSpeaker FAQs"
          />
        </label>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Product</span>
          <select
            className={styles.select}
            value={product}
            onChange={(e) => setField('product')(e.target.value)}
            aria-label="Filter by product"
          >
            <option value="">All</option>
            {productOptions.map((opt) => (
              <option key={opt.key} value={opt.key}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Domain</span>
          <select
            className={styles.select}
            value={domain}
            onChange={(e) => setField('domain')(e.target.value)}
            aria-label="Filter by domain"
          >
            <option value="">All</option>
            {domainOptions.map((opt) => (
              <option key={opt.key} value={opt.key}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        {hasActiveFilters && (
          <button type="button" className={styles.clearButton} onClick={clearAll}>
            Clear filters
          </button>
        )}
      </div>

      <p className={styles.resultCount}>
        Showing <strong>{results.length}</strong> of <strong>{items.length}</strong> questions
        {orFallback && (
          <span className={styles.orNote}> — no result matched every term, so matches for any term are shown.</span>
        )}
      </p>

      {results.length === 0 ? (
        <div className={styles.emptyState} role="status">
          <p>No FAQ matches the current search and filters.</p>
          <ul>
            <li>Check the spelling or remove one of the filters.</li>
            <li>Try a product name or a keyword such as “DFU”, “Safe Mode” or “ESPHome”.</li>
            <li>If the topic is not listed here, prepare your product model, SKU, firmware version, host system and a minimal reproduction before contacting support.</li>
          </ul>
          {hasActiveFilters && (
            <button type="button" className={styles.clearButton} onClick={clearAll}>
              Clear search and filters
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
                  <span className={styles.badge}>SKU: {item.skus.join(', ')}</span>
                )}
                <span className={styles.verified}>Last verified: {item.lastVerifiedAt}</span>
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
