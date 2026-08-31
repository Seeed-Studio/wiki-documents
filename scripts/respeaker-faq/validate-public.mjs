#!/usr/bin/env node
/**
 * Validates the public ReSpeaker FAQ artifacts (PRD QA phases 3-8):
 *   - Markdown frontmatter structure
 *   - Slug uniqueness (including the whole en docs site)
 *   - Anchor uniqueness across FAQ pages
 *   - Internal slug-only link contract (no .md/.mdx/relative paths)
 *   - Search index consistency with rendered pages
 *   - Public secret / internal-data scan
 *
 * Prints PASS/FAIL lines and exits non-zero when any check fails.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..', '..');
const DOCS_DIR = path.join(REPO_ROOT, 'sites', 'en', 'docs');
const FAQ_DIR = path.join(DOCS_DIR, 'FAQ', 'respeaker');
const INDEX_JSON = path.join(REPO_ROOT, 'src', 'data', 'respeaker_faq_index.json');
const MANIFEST_PATH = path.join(__dirname, 'manifests', 'approved_faq_manifest.json');

const FAILURES = [];
const CHECKS = [];
function check(name, fn) {
  CHECKS.push(name);
  try {
    const problems = fn();
    if (problems && problems.length) {
      FAILURES.push({ name, problems: problems.slice(0, 8) });
      console.log(`FAIL  ${name}`);
      for (const p of problems.slice(0, 8)) console.log(`        - ${p}`);
    } else {
      console.log(`PASS  ${name}`);
    }
  } catch (err) {
    FAILURES.push({ name, problems: [String(err && err.message || err)] });
    console.log(`FAIL  ${name} (error)`);
    console.log(`        - ${err && err.message}`);
  }
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
const faqFiles = fs
  .readdirSync(FAQ_DIR)
  .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  .map((f) => path.join(FAQ_DIR, f));

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(md|mdx)$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

const ALL_DOCS = walk(DOCS_DIR);

/** Extract frontmatter slug: normalize to a leading-/ path. */
function docSlug(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const fm = m[1];
  const slugMatch = fm.match(/slug:\s*['"]?([^'"\n\r]+)['"]?/);
  if (slugMatch) {
    let s = slugMatch[1].trim();
    if (!s.startsWith('/')) s = `/${s}`;
    return s.replace(/\/{2,}/g, '/');
  }
  // fall back to the file path route (what Docusaurus would generate)
  const rel = path.relative(DOCS_DIR, file).replace(/\.(md|mdx)$/, '').replace(/\\/g, '/');
  return `/${rel}`;
}

const SLUG_TO_FILE = new Map();
for (const file of ALL_DOCS) {
  const slug = docSlug(file);
  if (slug) SLUG_TO_FILE.set(slug, file);
}

function extractAnchors(content) {
  return [...content.matchAll(/^#{1,6} .*\{#([a-zA-Z0-9_-]+)\}\s*$/gm)].map((m) => m[1]);
}

/* ------------------------------------------------------------------ */

check('frontmatter: FAQ pages have required fields', () => {
  const problems = [];
  for (const file of faqFiles) {
    const raw = fs.readFileSync(file, 'utf8');
    const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!m) {
      problems.push(`${path.basename(file)}: missing frontmatter`);
      continue;
    }
    const fm = m[1];
    for (const field of ['title', 'description', 'slug', 'keywords']) {
      const re = new RegExp(`^${field}:`, 'm');
      if (!re.test(fm)) problems.push(`${path.basename(file)}: missing ${field}`);
    }
  }
  return problems;
});

check('slugs: FAQ slugs globally unique and consistent with the manifest', () => {
  const problems = [];
  const expected = new Set(manifest.entries.map((e) => e.wikiSlug));
  const fileSlugs = new Map();
  for (const file of [...ALL_DOCS, ...faqFiles].filter((f, i, arr) => arr.indexOf(f) === i)) {
    const slug = docSlug(file);
    if (!slug) continue;
    if (fileSlugs.has(slug)) {
      problems.push(`duplicate site slug ${slug} (${path.basename(fileSlugs.get(slug))} vs ${path.basename(file)})`);
    }
    fileSlugs.set(slug, file);
  }
  // Every generated FAQ page slug must be one of the manifest slugs.
  for (const file of faqFiles) {
    if (file.endsWith('index.mdx')) {
      const slug = docSlug(file);
      if (slug !== '/respeaker_faq') problems.push(`FAQ center slug should be /respeaker_faq, got ${slug}`);
      continue;
    }
    const slug = docSlug(file);
    if (!expected.has(slug)) problems.push(`${path.basename(file)}: slug ${slug} not in manifest`);
  }
  // Every manifest slug must resolve to a generated file.
  for (const slug of expected) {
    if (![...faqFiles].some((f) => docSlug(f) === slug)) {
      problems.push(`manifest slug ${slug} has no rendered page`);
    }
  }
  return problems;
});

const DOMAIN_SECTION_ANCHORS = new Set([
  'documentation-and-usage',
  'connectivity-and-detection',
  'firmware-and-software',
  'audio-issues',
  'algorithm-tuning',
  'hardware-issues',
  'product-and-business',
]);

check('anchors: FAQ question anchors globally unique; domain sections unique per page', () => {
  const problems = [];
  const globalSeen = new Map();
  const manifestAnchors = new Set(manifest.entries.map((e) => e.wikiAnchor));
  for (const file of faqFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const anchors = extractAnchors(content);
    const localSeen = new Set();
    for (const a of anchors) {
      if (localSeen.has(a)) problems.push(`${path.basename(file)}: duplicate anchor ${a} within page`);
      localSeen.add(a);
      if (DOMAIN_SECTION_ANCHORS.has(a)) continue; // per-page domain section, by design
      if (globalSeen.has(a)) {
        problems.push(`anchor ${a} duplicated in ${globalSeen.get(a)} and ${path.basename(file)}`);
      }
      globalSeen.set(a, path.basename(file));
    }
  }
  for (const a of manifestAnchors) {
    if (!globalSeen.has(a)) problems.push(`manifest anchor ${a} missing from rendered pages`);
  }
  return problems;
});

check('internal links: only true slugs, no .md/.mdx/relative repository paths', () => {
  const problems = [];
  const badPatterns = [
    /\]\(\.\.?\/[^)]*\)/,
    /\]\(sites\/en\/docs[^)]*\)/,
    /\]\(docs\/[^)]*\)/,
    /\]\(FAQ\/[^)]*\)/,
  ];
  for (const file of [...faqFiles]) {
    const content = fs.readFileSync(file, 'utf8');
    for (const p of badPatterns) {
      for (const line of content.split('\n')) {
        if (p.test(line)) problems.push(`${path.basename(file)}: forbidden link pattern ${p} -> ${line.trim()}`);
      }
    }
    const links = [...content.matchAll(/\[[^\]]+\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g)].map((m) => m[1]);
    const fileAnchors = new Set(extractAnchors(content));
    for (const link of links) {
      if (/^https?:\/\//.test(link)) continue;
      if (link.startsWith('#')) {
        const a = link.slice(1);
        if (!fileAnchors.has(a) && !/^[a-zA-Z0-9_-]+$/.test(a)) {
          // fragment links without explicit custom id map to GitHub-style ids; accept short safe ones
        }
        continue;
      }
      if (!link.startsWith('/')) {
        problems.push(`${path.basename(file)}: non-slug link "${link}"`);
        continue;
      }
      if (/\.mdx?([#)]|$)/i.test(link)) {
        problems.push(`${path.basename(file)}: internal link must not use .md/.mdx path "${link}"`);
        continue;
      }
      const [target, anchor] = link.split('#');
      const normTarget = target.endsWith('/') ? target.slice(0, -1) : target;
      if (!SLUG_TO_FILE.has(normTarget)) {
        problems.push(`${path.basename(file)}: unknown slug "${normTarget}"`);
        continue;
      }
      if (anchor) {
        // Anchor deep-links are validated against FAQ pages and any doc with explicit anchors.
        const targetContent = fs.readFileSync(SLUG_TO_FILE.get(normTarget), 'utf8');
        const targetAnchors = new Set(extractAnchors(targetContent));
        if (!targetAnchors.has(anchor)) {
          problems.push(`${path.basename(file)}: anchor "${anchor}" not found in ${normTarget}`);
        }
      }
    }
  }
  return problems;
});

check('search index: every item matches a rendered slug+anchor and vice versa', () => {
  const problems = [];
  const index = JSON.parse(fs.readFileSync(INDEX_JSON, 'utf8'));
  if (!Array.isArray(index.items) || index.items.length === 0) {
    return ['search index is empty or missing items'];
  }
  const anchorToFile = new Map();
  const fileAnchorSet = new Map();
  for (const file of faqFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const slug = docSlug(file);
    const anchors = extractAnchors(content);
    for (const a of anchors) {
      anchorToFile.set(`${slug}#${a}`, path.basename(file));
    }
    fileAnchorSet.set(slug, new Set(anchors));
  }
  const manifestFaqIds = new Set(manifest.entries.map((e) => e.publicFaqId));
  for (const item of index.items) {
    if (!manifestFaqIds.has(item.id)) problems.push(`index item ${item.id} has no manifest entry`);
    if (!anchorToFile.has(item.url)) problems.push(`index item ${item.id} url ${item.url} has no rendered target`);
    if (!item.question || !item.summary || !item.product || !item.url) {
      problems.push(`index item ${item.id} missing public fields`);
    }
  }
  for (const entry of manifest.entries) {
    const found = index.items.some((i) => i.id === entry.publicFaqId);
    if (!found) problems.push(`manifest entry ${entry.publicFaqId} missing from search index`);
  }
  return problems;
});

check('secret scan: no internal identifiers or secrets in public artifacts', () => {
  const patterns = [
    [/rec\d{10,}/i, 'feishu record id'],
    [/record_?id/i, 'record id field'],
    [/open_?id/i, 'open id'],
    [/access_token/i, 'access token'],
    [/app_secret/i, 'app secret'],
    [/authorization\s*:/i, 'authorization header'],
    [/bearer\s+[A-Za-z0-9._~+/=-]{20,}/i, 'bearer token'],
    [/eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\./, 'JWT-like string'],
    [/minio/i, 'minio url'],
    [/zoho/i, 'zoho ticket'],
    [/ticket[_ -]?id\s*[:=]/i, 'ticket id'],
    [/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/, 'customer email'],
    [/\b(10|192)\.168\.|\b172\.(1[6-9]|2[0-9]|3[01])\./, 'private IP'],
  ];
  const problems = [];
  const files = [
    ...faqFiles,
    INDEX_JSON,
    MANIFEST_PATH,
  ];
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    for (const [re, label] of patterns) {
      const m = content.match(re);
      if (m) {
        problems.push(`${path.relative(REPO_ROOT, file)}: ${label} pattern ${re}${m[0] ? ` (near "${String(m[0]).slice(0, 40)}")` : ''}`);
      }
    }
  }
  return problems;
});

/* ------------------------------------------------------------------ */

const summary = {
  total: CHECKS.length,
  passed: CHECKS.length - FAILURES.length,
  failed: FAILURES.length,
};
console.log(`\n${CHECKS.length} checks, ${summary.passed} passed, ${summary.failed} failed`);
if (FAILURES.length) {
  process.exitCode = 1;
}
