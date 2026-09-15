'use strict';

/**
 * Per-locale ReSpeaker FAQ search index extraction.
 *
 * Build-time source for the FAQ Center search: reads the FAQ docs of the
 * *current* site (docs/FAQ/respeaker/*.md, including translated files with a
 * language prefix such as cn_ / ja_ / es_ / pt_) and derives a search index
 * whose visible fields (question, summary, product label, domain label) come
 * from that locale's Markdown, while stable machine metadata (FAQ id, product
 * / domain keys, SKU, keywords, anchors, page slug) is preserved.
 *
 * The runtime bundle never imports a translated JSON: only this build-time
 * plugin reads locale-independent stable metadata (the curated manifest) to
 * fill in non-translated fields such as SKU.
 */

const fs = require('node:fs');
const path = require('node:path');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');
const DEFAULT_MANIFEST_PATH = path.join(
  REPO_ROOT,
  'scripts',
  'respeaker-faq',
  'manifests',
  'approved_faq_manifest.json',
);

/** Stable product keys in canonical publication order (mirrors the pipeline). */
const PRODUCT_ORDER = [
  'xvf3800_usb_4_mic',
  'flex_xvf3800',
  'respeaker_lite',
  'xvf3000',
  'respeaker_2_mics_pi_hat',
  'respeaker_clip',
];

/**
 * English file name -> stable product key. Translated files keep the same
 * basename with a language prefix (cn_flex_xvf3800_faq.md), so stripping the
 * prefix yields the same product key for every locale.
 */
const PRODUCTS = {
  xvf3800_usb_4_mic: { file: 'xvf3800_usb_4_mic_faq.md', slug: '/respeaker_xvf3800_faq' },
  flex_xvf3800: { file: 'flex_xvf3800_faq.md', slug: '/respeaker_flex_faq' },
  respeaker_lite: { file: 'respeaker_lite_faq.md', slug: '/respeaker_lite_faq' },
  xvf3000: { file: 'xvf3000_faq.md', slug: '/respeaker_xvf3000_faq' },
  respeaker_2_mics_pi_hat: { file: 'respeaker_2_mics_pi_hat_faq.md', slug: '/respeaker_2_mics_pi_hat_faq' },
  respeaker_clip: { file: 'respeaker_clip_faq.md', slug: '/respeaker_clip_faq' },
};

/** Stable domain keys in canonical order; anchors are stable machine metadata. */
const DOMAIN_ORDER = [
  { key: 'documentation_usage', anchor: 'documentation-and-usage' },
  { key: 'connectivity', anchor: 'connectivity-and-detection' },
  { key: 'firmware_software', anchor: 'firmware-and-software' },
  { key: 'audio', anchor: 'audio-issues' },
  { key: 'algorithm_tuning', anchor: 'algorithm-tuning' },
  { key: 'hardware', anchor: 'hardware-issues' },
  { key: 'product_business', anchor: 'product-and-business' },
];
const ANCHOR_TO_DOMAIN = Object.fromEntries(DOMAIN_ORDER.map((d) => [d.anchor, d.key]));

/** Site directory name -> filename language prefix used by the translation workflow. */
const LOCALE_PREFIXES = {
  en: '',
  'zh-CN': 'cn_',
  ja: 'ja_',
  es: 'es_',
  'pt-BR': 'pt_',
};

/**
 * Locale-aware rules to derive the product label from the page H1 by removing
 * the localized "FAQ" word. When no rule matches, the H1 itself is used (still
 * localized, still from that locale's Markdown).
 */
const PRODUCT_LABEL_RULES = {
  en: [/^(.+?)\s*FAQ$/i],
  'zh-CN': [/^(.+?)\s*常见问题解答$/, /^(.+?)\s*常见问题$/],
  ja: [/^(.+?)\s*よくある質問$/, /^(.+?)\s*FAQ$/i],
  es: [/^(?:Preguntas\s+frecuentes\s+(?:de|sobre|acerca\s+de)?\s*)(.+)$/i],
  'pt-BR': [/^(?:Perguntas\s+frequentes\s+(?:de|do|da|sobre)?\s*)(.+)$/i],
};

function deriveProductLabel(h1, locale) {
  const text = String(h1 || '').trim();
  if (!text) return '';
  const rules = PRODUCT_LABEL_RULES[locale] || [];
  for (const re of rules) {
    const m = text.match(re);
    if (m && m[1] && m[1].trim()) return m[1].trim();
  }
  return text;
}

/** Truncate a summary like the publication pipeline does. */
function truncate(text, max = 240) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}…`;
}

/** Join a Docusaurus baseUrl and a leading-/ slug into a site-absolute URL. */
function joinBaseUrl(baseUrl, slug, anchor = '') {
  const base = String(baseUrl || '/').replace(/\/+$/, '') + '/';
  const target = String(slug || '').replace(/^\/+/, '');
  return `${base}${target}${anchor ? `#${anchor}` : ''}`;
}

/** Load the curated manifest for non-translated stable fields (SKU etc.). */
function loadManifest(manifestPath) {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath || DEFAULT_MANIFEST_PATH, 'utf8'));
    const byAnchor = new Map();
    for (const entry of manifest.entries || []) {
      if (entry && entry.wikiAnchor) byAnchor.set(entry.wikiAnchor, entry);
    }
    return byAnchor;
  } catch {
    return new Map();
  }
}

function parseFrontmatter(content) {
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const fm = m[1];
  const slugMatch = fm.match(/slug:\s*['"]?([^'"\n\r]+)['"]?/);
  return { slug: slugMatch ? slugMatch[1].trim() : null };
}

/** Split a heading line into visible text + stable explicit anchor. */
function parseHeading(line) {
  const m = line.match(/^(#{1,6})\s+(.+?)\s*\{#([a-zA-Z0-9_-]+)\}\s*$/);
  if (!m) return null;
  return { level: m[1].length, text: m[2].trim(), anchor: m[3] };
}

/** First paragraph after the question metadata (skips bold labels/lists). */
function extractSummary(lines, start) {
  const collected = [];
  for (let i = start; i < lines.length; i += 1) {
    const trimmed = lines[i].trim();
    if (!trimmed) {
      if (collected.length) break;
      continue;
    }
    if (/^(#{1,6}\s|[-*]\s|\d+\.\s|>\s)/.test(trimmed)) break;
    if (/^\*\*.*\*\*:?/.test(trimmed)) continue; // bold metadata labels (localized)
    collected.push(trimmed);
  }
  return truncate(collected.join(' '));
}

/** ISO date in the heading metadata, localized "Last verified" label agnostic. */
function extractLastVerified(lines, start) {
  const end = Math.min(lines.length, start + 8);
  for (let i = start; i < end; i += 1) {
    const m = lines[i].match(/(\d{4}-\d{2}-\d{2})/);
    if (m) return m[1];
  }
  return '';
}

/** Maps a product FAQ file name (with/without language prefix) to a product key. */
function resolveProductKey(fileName, localePrefix) {
  const base = fileName.replace(/\.mdx?$/, '');
  const candidates = [base];
  const ownPrefix = localePrefix || '';
  if (ownPrefix && base.startsWith(ownPrefix)) candidates.push(base.slice(ownPrefix.length));
  // Also accept any other known locale prefix in case a file was copied across sites.
  for (const prefix of Object.values(LOCALE_PREFIXES)) {
    if (prefix && base.startsWith(prefix)) candidates.push(base.slice(prefix.length));
  }
  for (const candidate of candidates) {
    for (const [key, product] of Object.entries(PRODUCTS)) {
      if (product.file === `${candidate}.md`) return key;
    }
  }
  return null;
}

/**
 * Parse one product FAQ Markdown file into a searchable FAQ item collection.
 *
 * @returns {object|null} { productKey, slug, productLabel, domainLabels, items }
 *   or null when the file is not a recognized product FAQ page.
 */
function parseProductFaqFile(filePath, { locale = 'en', localePrefix = '', baseUrl = '/', byAnchor }) {
  let content;
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
  const { slug: fmSlug } = parseFrontmatter(content);
  const productKey = resolveProductKey(path.basename(filePath), localePrefix);
  if (!productKey) return null;
  const product = PRODUCTS[productKey];
  const slug = fmSlug || product.slug;
  const lines = content.split(/\r?\n/);

  let h1 = '';
  let currentDomainKey = '';
  const domains = new Map(); // key -> localized label
  const items = [];

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const heading = parseHeading(line);
    if (!heading) {
      // Product pages carry the localized H1 without an explicit anchor.
      const plainH1 = line.match(/^#\s+(.+?)\s*$/);
      if (plainH1 && !h1) h1 = plainH1[1].trim();
      continue;
    }
    if (heading.level === 1 && !h1) {
      h1 = heading.text;
      continue;
    }
    if (heading.level === 2) {
      const key = ANCHOR_TO_DOMAIN[heading.anchor];
      if (key) {
        currentDomainKey = key;
        if (!domains.has(key)) domains.set(key, heading.text);
      }
      continue;
    }
    if (heading.level === 3) {
      const meta = byAnchor.get(heading.anchor);
      const summary = extractSummary(lines, i + 1);
      // Secondary domains are stable machine metadata (not rendered per locale),
      // so they are preserved from the curated manifest when available.
      const itemDomains = meta
        ? [meta.primaryDomain].concat(meta.secondaryDomains || [])
        : currentDomainKey
          ? [currentDomainKey]
          : [];
      items.push({
        // Stable FAQ id: the curated manifest's publicFaqId (snake_case);
        // the explicit heading anchor is the URL fragment and stays stable too.
        id: (meta && meta.publicFaqId) || heading.anchor,
        question: heading.text,
        summary,
        product: productKey,
        productLabel: '',
        primaryDomain: currentDomainKey,
        domains: itemDomains,
        skus: (meta && meta.skus) || [],
        keywords: (meta && meta.keywords) || [],
        lastVerifiedAt: extractLastVerified(lines, i + 1),
        url: joinBaseUrl(baseUrl, slug, heading.anchor),
      });
    }
  }

  const productLabel = deriveProductLabel(h1, locale);
  for (const item of items) item.productLabel = productLabel;
  return { productKey, slug, productLabel, h1, domainLabels: domains, items };
}

/**
 * Build the localized FAQ search index for one site.
 *
 * @param {object} opts
 * @param {string} opts.siteDir - Docusaurus site directory
 * @param {string} [opts.locale] - locale key (en, zh-CN, ja, es, pt-BR)
 * @param {string} [opts.prefix] - filename prefix override (default from locale)
 * @param {string} [opts.baseUrl] - site baseUrl used to build result hrefs
 * @param {string} [opts.manifestPath] - curated manifest override (tests)
 * @param {string} [opts.faqDir] - FAQ docs dir override (tests)
 */
function buildLocaleFaqIndex({ siteDir, locale = 'en', prefix, baseUrl = '/', manifestPath, faqDir }) {
  const localeKey = Object.prototype.hasOwnProperty.call(LOCALE_PREFIXES, locale) ? locale : 'en';
  const localePrefix = prefix !== undefined ? prefix : LOCALE_PREFIXES[localeKey];
  const dir = faqDir || path.join(siteDir, 'docs', 'FAQ', 'respeaker');
  const byAnchor = loadManifest(manifestPath);

  let files = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.md'))
      .sort();
  } catch {
    files = [];
  }

  /** @type {Map<string, object>} productKey -> parsed page */
  const pages = new Map();
  for (const file of files) {
    const parsed = parseProductFaqFile(path.join(dir, file), {
      locale: localeKey,
      localePrefix,
      baseUrl,
      byAnchor,
    });
    if (parsed) pages.set(parsed.productKey, parsed);
  }

  const orderIndex = new Map(PRODUCT_ORDER.map((key, i) => [key, i]));
  const sortedKeys = [...pages.keys()].sort(
    (a, b) =>
      (orderIndex.has(a) ? orderIndex.get(a) : orderIndex.size) -
        (orderIndex.has(b) ? orderIndex.get(b) : orderIndex.size) || a.localeCompare(b),
  );

  const domainOrderIndex = new Map(DOMAIN_ORDER.map((d, i) => [d.key, i]));
  const items = [];
  const seenProducts = new Map(); // key -> localized label (first page that declares it)
  const seenDomains = new Map(); // key -> localized label (first page section)
  for (const key of sortedKeys) {
    const page = pages.get(key);
    if (!seenProducts.has(key)) seenProducts.set(key, page.productLabel);
    for (const domainKey of page.domainLabels.keys()) {
      if (!seenDomains.has(domainKey)) seenDomains.set(domainKey, page.domainLabels.get(domainKey));
    }
    for (const item of page.items) items.push(item);
  }

  const products = [...seenProducts].map(([key, label]) => ({ key, label }));
  const domains = [...seenDomains]
    .map(([key, label]) => ({ key, label }))
    .sort(
      (a, b) =>
        (domainOrderIndex.has(a.key) ? domainOrderIndex.get(a.key) : domainOrderIndex.size) -
          (domainOrderIndex.has(b.key) ? domainOrderIndex.get(b.key) : domainOrderIndex.size) ||
        a.key.localeCompare(b.key),
    );

  return {
    schemaVersion: '1.0',
    artifactType: 'respeaker_faq_search_index',
    locale: localeKey,
    baseUrl,
    products,
    domains,
    items,
  };
}

module.exports = {
  REPO_ROOT,
  DEFAULT_MANIFEST_PATH,
  PRODUCT_ORDER,
  PRODUCTS,
  DOMAIN_ORDER,
  ANCHOR_TO_DOMAIN,
  LOCALE_PREFIXES,
  deriveProductLabel,
  truncate,
  joinBaseUrl,
  loadManifest,
  parseFrontmatter,
  parseHeading,
  extractSummary,
  extractLastVerified,
  resolveProductKey,
  parseProductFaqFile,
  buildLocaleFaqIndex,
};
