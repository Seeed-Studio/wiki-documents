#!/usr/bin/env node
/**
 * ReSpeaker FAQ publication pipeline (PRD Phases 2-4).
 *
 * Renders the approved curated manifest into:
 *   - product FAQ aggregation pages under sites/en/docs/FAQ/respeaker/
 *   - the public search index at src/data/respeaker_faq_index.json
 *
 * Behavior:
 *   - Deterministic/idempotent: identical manifest => byte-identical output.
 *   - Product FAQ pages carry a pipeline-managed region delimited by
 *     <!-- RESPEAKER_FAQ_AUTO_START --> / <!-- RESPEAKER_FAQ_AUTO_END -->.
 *     Only that region is pipeline-owned: frontmatter, intro and support
 *     sections are manually owned and preserved byte-for-byte.
 *   - Reconcile compares managed-region hashes for product pages, so
 *     normalize-frontmatter.js reformatting or ordinary hand edits outside
 *     the region never cause a false conflict or later overwrite.
 *   - Dry-run by default: prints a reconcile report, writes nothing.
 *   - `--apply` writes only "create-needed"/"update-needed" files and never
 *     overwrites a file that was manually edited after the last publish
 *     (conflict). Conflicts are reported and the affected item is left alone.
 *   - Computes source hash (manifest) and wiki hash (per target file) for the
 *     reconcile report.
 *
 * Usage:
 *   node scripts/respeaker-faq/pipeline.mjs            # dry-run report
 *   node scripts/respeaker-faq/pipeline.mjs --apply    # write non-conflicted files
 *   node scripts/respeaker-faq/pipeline.mjs --validate # manifest-only validation
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(__dirname, '..', '..');

const MANIFEST_PATH = path.join(__dirname, 'manifests', 'approved_faq_manifest.json');
const INDEX_TARGET = path.join(REPO_ROOT, 'src', 'data', 'respeaker_faq_index.json');
const FAQ_DOC_DIR = path.join(REPO_ROOT, 'sites', 'en', 'docs', 'FAQ', 'respeaker');
const STATE_PATH = path.join(__dirname, 'state', 'reconcile-state.json');

export const DOMAINS = [
  { key: 'documentation_usage', label: 'Documentation & Usage', anchor: 'documentation-and-usage' },
  { key: 'connectivity', label: 'Connectivity & Detection', anchor: 'connectivity-and-detection' },
  { key: 'firmware_software', label: 'Firmware & Software', anchor: 'firmware-and-software' },
  { key: 'audio', label: 'Audio Issues', anchor: 'audio-issues' },
  { key: 'algorithm_tuning', label: 'Algorithm Tuning', anchor: 'algorithm-tuning' },
  { key: 'hardware', label: 'Hardware Issues', anchor: 'hardware-issues' },
  { key: 'product_business', label: 'Product & Business', anchor: 'product-and-business' },
];
const DOMAIN_BY_KEY = Object.fromEntries(DOMAINS.map((d) => [d.key, d]));

export const PRODUCT_ORDER = [
  'xvf3800_usb_4_mic',
  'flex_xvf3800',
  'respeaker_lite',
  'xvf3000',
  'respeaker_2_mics_pi_hat',
  'respeaker_clip',
];

export const PRODUCTS = {
  xvf3800_usb_4_mic: {
    key: 'xvf3800_usb_4_mic',
    label: 'reSpeaker XVF3800 USB 4-Mic Array',
    file: 'xvf3800_usb_4_mic_faq.md',
    title: 'reSpeaker XVF3800 USB 4-Mic Array FAQ',
    description:
      'Frequently asked questions about setup, USB connectivity, firmware, audio and tuning for the reSpeaker XVF3800 USB 4-Mic Array.',
    keywords: ['reSpeaker XVF3800 FAQ', 'reSpeaker XVF3800 troubleshooting', 'reSpeaker XVF3800 firmware'],
  },
  flex_xvf3800: {
    key: 'flex_xvf3800',
    label: 'reSpeaker Flex',
    file: 'flex_xvf3800_faq.md',
    title: 'reSpeaker Flex FAQ',
    description:
      'Frequently asked questions about USB detection, host control and firmware for the reSpeaker Flex.',
    keywords: ['reSpeaker Flex FAQ', 'reSpeaker Flex troubleshooting', 'reSpeaker Flex USB'],
  },
  respeaker_lite: {
    key: 'respeaker_lite',
    label: 'reSpeaker Lite',
    file: 'respeaker_lite_faq.md',
    title: 'reSpeaker Lite FAQ',
    description:
      'Frequently asked questions about USB audio, ESPHome and operation for the reSpeaker Lite.',
    keywords: ['reSpeaker Lite FAQ', 'reSpeaker Lite troubleshooting', 'reSpeaker Lite USB audio', 'ESPHome'],
  },
  xvf3000: {
    key: 'xvf3000',
    label: 'reSpeaker XVF3000',
    file: 'xvf3000_faq.md',
    title: 'reSpeaker XVF3000 FAQ',
    description:
      'Frequently asked questions about DSP tuning and parameter control for the reSpeaker Mic Array v2.0 with XVF3000.',
    keywords: ['reSpeaker XVF3000 FAQ', 'reSpeaker XVF3000 DSP tuning', 'reSpeaker Mic Array tuning', 'tuning.py'],
  },
  respeaker_2_mics_pi_hat: {
    key: 'respeaker_2_mics_pi_hat',
    label: 'reSpeaker 2-Mics Pi HAT V2.0',
    file: 'respeaker_2_mics_pi_hat_faq.md',
    title: 'reSpeaker 2-Mics Pi HAT V2.0 FAQ',
    description:
      'Frequently asked questions about the V2.0 codec I2C address and hardware use for the reSpeaker 2-Mics Pi HAT V2.0.',
    keywords: ['reSpeaker 2-Mics Pi HAT FAQ', 'reSpeaker 2-Mics Pi HAT V2.0', 'TLV320AIC3104', 'codec I2C address'],
  },
  respeaker_clip: {
    key: 'respeaker_clip',
    label: 'reSpeaker Clip',
    file: 'respeaker_clip_faq.md',
    title: 'reSpeaker Clip FAQ',
    description:
      'Frequently asked questions about official documentation, live transcription prototyping and mechanical resources for the reSpeaker Clip.',
    keywords: ['reSpeaker Clip FAQ', 'reSpeaker Clip documentation', 'live transcription', 'mechanical drawing'],
  },
};

export const DOMAIN_FILTER_ORDER = [
  'connectivity',
  'audio',
  'algorithm_tuning',
  'firmware_software',
  'hardware',
  'documentation_usage',
  'product_business',
];

// Canonical display names used by the FAQ Center product filter (selector options).
export const PRODUCT_LABELS = {
  xvf3800_usb_4_mic: 'reSpeaker XVF3800 USB 4-Mic Array',
  flex_xvf3800: 'reSpeaker Flex',
  respeaker_lite: 'reSpeaker Lite',
  xvf3000: 'reSpeaker XVF3000',
  respeaker_2_mics_pi_hat: 'reSpeaker 2-Mics Pi HAT V2.0',
  respeaker_clip: 'reSpeaker Clip',
};

export const DOMAIN_LABELS = {
  documentation_usage: 'Documentation',
  connectivity: 'Connectivity',
  firmware_software: 'Firmware',
  audio: 'Audio',
  algorithm_tuning: 'Tuning',
  hardware: 'Hardware',
  product_business: 'Business',
};

export const FAQ_PAGE_CLASS = 'respeaker-faq-page';
export const FAQ_PAGE_WRAPPER_OPEN = `<div class="${FAQ_PAGE_CLASS}">`;

export const FAQ_AUTO_START_MARKER = '<!-- RESPEAKER_FAQ_AUTO_START -->';
export const FAQ_AUTO_END_MARKER = '<!-- RESPEAKER_FAQ_AUTO_END -->';

/* ------------------------------------------------------------------ */
/* Manifest loading & validation                                        */
/* ------------------------------------------------------------------ */

export function loadManifest() {
  return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
}

export function validateManifest(manifest) {
  const errors = [];
  const seenIds = new Set();
  const seenSlugAnchors = new Set();
  const blocked = [];
  for (const entry of manifest.entries) {
    const id = entry.publicFaqId;
    if (!id) errors.push('entry without publicFaqId');
    if (seenIds.has(id)) errors.push(`duplicate publicFaqId: ${id}`);
    seenIds.add(id);

    if (entry.publicationDecision === 'BLOCK') {
      blocked.push(id);
      continue;
    }
    if (entry.publicationDecision !== 'PUBLISH') {
      errors.push(`${id}: unexpected publicationDecision ${entry.publicationDecision}`);
    }
    for (const field of [
      'productKey',
      'primaryDomain',
      'questionEn',
      'directAnswerEn',
      'appliesTo',
      'lastVerifiedAt',
      'wikiSlug',
      'wikiAnchor',
    ]) {
      if (!entry[field]) errors.push(`${id}: missing ${field}`);
    }
    if (!PRODUCTS[entry.productKey]) errors.push(`${id}: unknown productKey ${entry.productKey}`);
    if (!DOMAIN_BY_KEY[entry.primaryDomain]) errors.push(`${id}: unknown primaryDomain ${entry.primaryDomain}`);
    for (const d of entry.secondaryDomains || []) {
      if (!DOMAIN_BY_KEY[d]) errors.push(`${id}: unknown secondaryDomain ${d}`);
    }
    if (typeof entry.wikiSlug !== 'string' || !entry.wikiSlug.startsWith('/')) {
      errors.push(`${id}: wikiSlug must start with "/"`);
    }
    if (typeof entry.wikiAnchor !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(entry.wikiAnchor)) {
      errors.push(`${id}: wikiAnchor must be a stable lowercase slug`);
    }
    const sa = `${entry.wikiSlug}#${entry.wikiAnchor}`;
    if (seenSlugAnchors.has(sa)) errors.push(`duplicate slug+anchor: ${sa}`);
    seenSlugAnchors.add(sa);

    for (const ref of entry.officialReferences || []) {
      if (!ref.title || !/^https:\/\//.test(ref.url || '')) {
        errors.push(`${id}: officialReference must be an https URL with a title`);
      }
    }
  }
  if (blocked.length) errors.push(`BLOCK entries must never be published: ${blocked.join(', ')}`);
  return { ok: errors.length === 0, errors, blocked };
}

/* ------------------------------------------------------------------ */
/* Rendering                                                           */
/* ------------------------------------------------------------------ */

function bulletList(items) {
  return items.map((s) => `- ${s}`).join('\n');
}

function numberedList(items) {
  return items.map((s, i) => `${i + 1}. ${s}`).join('\n');
}

function renderFaqBlock(entry) {
  const lines = [];
  lines.push(`### ${entry.questionEn} {#${entry.wikiAnchor}}`);
  lines.push('');
  lines.push(`**Applies to:** ${entry.appliesTo}`);
  lines.push('');
  lines.push(`**Last verified:** ${entry.lastVerifiedAt}`);
  lines.push('');
  lines.push(entry.directAnswerEn);
  lines.push('');
  if (entry.prerequisites && entry.prerequisites.length) {
    lines.push('**Prerequisites:**');
    lines.push('');
    lines.push(bulletList(entry.prerequisites));
    lines.push('');
  }
  if (entry.steps && entry.steps.length) {
    lines.push(numberedList(entry.steps));
    lines.push('');
  }
  if (entry.successCriteria && entry.successCriteria.length) {
    lines.push('**Success criteria:**');
    lines.push('');
    lines.push(bulletList(entry.successCriteria));
    lines.push('');
  }
  if (entry.notes && entry.notes.length) {
    lines.push('**Notes:**');
    lines.push('');
    lines.push(bulletList(entry.notes));
    lines.push('');
  }
  if (entry.officialReferences && entry.officialReferences.length) {
    lines.push('**References:**');
    lines.push('');
    for (const ref of entry.officialReferences) {
      lines.push(`- [${ref.title}](${ref.url})`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

export function renderManagedFaqRegion(productKey, entries) {
  const product = PRODUCTS[productKey];
  if (!product) throw new Error(`unknown productKey ${productKey}`);
  const byDomain = new Map();
  for (const d of DOMAINS) byDomain.set(d.key, []);
  for (const e of entries) byDomain.get(e.primaryDomain).push(e);

  const lines = [];
  for (const d of DOMAINS) {
    const faqs = byDomain.get(d.key);
    if (!faqs.length) continue;
    lines.push(`## ${d.label} {#${d.anchor}}`);
    lines.push('');
    for (const e of faqs) {
      lines.push(renderFaqBlock(e));
    }
  }
  // The managed region ends at the last FAQ block; page assembly places the
  // AUTO_END marker directly after it, so no trailing blank lines.
  while (lines.length && lines[lines.length - 1] === '') lines.pop();
  return lines.join('\n');
}

export function renderProductPage(productKey, entries) {
  const product = PRODUCTS[productKey];
  const slug = entries[0].wikiSlug;
  for (const e of entries) {
    if (e.wikiSlug !== slug) {
      throw new Error(`${e.publicFaqId}: multiple slugs for product ${productKey}`);
    }
  }
  const managed = renderManagedFaqRegion(productKey, entries);

  const lines = [];
  lines.push('---');
  lines.push(`title: ${product.title}`);
  lines.push(`description: ${product.description}`);
  lines.push(`slug: ${slug}`);
  lines.push('last_update:');
  lines.push('  date: 9/2/2026');
  lines.push('  author: ray');
  lines.push('keywords:');
  for (const kw of product.keywords) lines.push(`  - ${kw}`);
  lines.push('---');
  lines.push('');
  lines.push(FAQ_PAGE_WRAPPER_OPEN);
  lines.push('');
  lines.push(`# ${product.title}`);
  lines.push('');
  lines.push(
    `This page contains verified answers for the ${product.label}. Each answer states the product variant and firmware mode it applies to, together with the date it was last verified against current official sources.`
  );
  lines.push('');
  lines.push('## Before you begin');
  lines.push('');
  lines.push('- Confirm the exact product variant and the firmware mode (USB or I2S) the device is running.');
  lines.push('- Check the current firmware version before applying version-specific steps.');
  lines.push(`- Answers on this page were last verified on ${entries[0].lastVerifiedAt}; re-check the linked official sources if you are reading this later.`);
  lines.push('');
  lines.push(FAQ_AUTO_START_MARKER);
  lines.push(managed);
  lines.push(FAQ_AUTO_END_MARKER);
  lines.push('');
  lines.push('## Tech Support & Product Discussion');
  lines.push('');
  lines.push('Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.');
  lines.push('');
  lines.push('<div class="button_tech_support_container">');
  lines.push('<a href="https://forum.seeedstudio.com/" class="button_forum"></a>');
  lines.push('<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>');
  lines.push('</div>');
  lines.push('');
  lines.push('<div class="button_tech_support_container">');
  lines.push('<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>');
  lines.push('<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>');
  lines.push('</div>');
  lines.push('');
  lines.push('</div>');
  const content = lines.join('\n').replace(/\n+$/, '');
  return `${content}\n`;
}

export function renderSearchIndex(manifest) {
  const products = PRODUCT_ORDER.map((key) => ({ key, label: PRODUCT_LABELS[key] }));
  const domains = DOMAIN_FILTER_ORDER.map((key) => ({ key, label: DOMAIN_LABELS[key] }));
  const items = [];
  for (const entry of manifest.entries) {
    const product = PRODUCTS[entry.productKey];
    const summary = truncate(entry.directAnswerEn, 240);
    items.push({
      id: entry.publicFaqId,
      question: entry.questionEn,
      summary,
      product: entry.productKey,
      productLabel: product.label,
      primaryDomain: entry.primaryDomain,
      domains: [entry.primaryDomain].concat(entry.secondaryDomains || []),
      skus: entry.skus || [],
      keywords: entry.keywords || [],
      lastVerifiedAt: entry.lastVerifiedAt,
      url: `${entry.wikiSlug}#${entry.wikiAnchor}`,
    });
  }
  return { schemaVersion: '1.0', artifactType: 'respeaker_faq_search_index', products, domains, items };
}

function truncate(text, max) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}…`;
}

/* ------------------------------------------------------------------ */
/* Target planning & reconcile                                         */
/* ------------------------------------------------------------------ */

export function planTargets(manifest) {
  const targets = [];
  for (const p of PRODUCT_ORDER) {
    const entries = manifest.entries.filter((e) => e.productKey === p);
    const product = PRODUCTS[p];
    if (!entries.length) continue;
    targets.push({
      rel: `sites/en/docs/FAQ/respeaker/${product.file}`,
      abs: path.join(FAQ_DOC_DIR, product.file),
      kind: 'doc',
      managedRegion: renderManagedFaqRegion(p, entries),
      content: renderProductPage(p, entries),
    });
  }
  targets.push({
    rel: 'src/data/respeaker_faq_index.json',
    abs: INDEX_TARGET,
    kind: 'json',
    content: `${JSON.stringify(renderSearchIndex(manifest), null, 2)}\n`,
  });
  return targets;
}

function sha256(buf) {
  return crypto.createHash('sha256').update(buf).digest('hex');
}

function gitHeadContent(rel) {
  try {
    return execFileSync('git', ['show', `HEAD:${rel}`], { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore','pipe','ignore'] });
  } catch {
    return null;
  }
}


/**
 * Pure classification of one target file's reconcile state. Exported for tests.
 *
 * @param {object} args
 * @param {string} args.rendered - freshly rendered content
 * @param {string|null} args.onDisk - current file content (null if absent)
 * @param {string|null} args.baselineHash - sha256 of the committed HEAD version
 * @param {string|undefined} args.stateHash - sha256 of the last pipeline output
 * @returns {{ status: 'up-to-date'|'create-needed'|'update-needed'|'conflict', reason: string }}
 */
export function classifyTarget({ rendered, onDisk, baselineHash, stateHash }) {
  const onDiskHash = onDisk === null ? null : sha256(onDisk);
  if (onDisk === rendered) return { status: 'up-to-date', reason: '' };
  if (onDisk === null) return { status: 'create-needed', reason: '' };
  if (baselineHash !== null && onDiskHash === baselineHash) {
    return { status: 'update-needed', reason: 'source changed since last publish' };
  }
  if (stateHash !== undefined && onDiskHash === stateHash) {
    return { status: 'update-needed', reason: 'renderer changed since last apply' };
  }
  return { status: 'conflict', reason: 'manual edit detected after last publish' };
}

/* ------------------------------------------------------------------ */
/* Managed-region helpers (product FAQ pages)                          */
/* ------------------------------------------------------------------ */

/**
 * Locates the pipeline-managed region delimited by
 * <!-- RESPEAKER_FAQ_AUTO_START --> / <!-- RESPEAKER_FAQ_AUTO_END -->.
 *
 * @param {string} content full file content
 * @returns {{ region: string, startLine: number, endLine: number }|null}
 *   null when either marker is missing or out of order.
 */
export function extractManagedRegion(content) {
  if (typeof content !== 'string') return null;
  const lines = content.split('\n');
  const startLine = lines.findIndex((l) => l.trim() === FAQ_AUTO_START_MARKER);
  if (startLine === -1) return null;
  const endLine = lines.findIndex((l, i) => i > startLine && l.trim() === FAQ_AUTO_END_MARKER);
  if (endLine === -1) return null;
  return { region: lines.slice(startLine + 1, endLine).join('\n'), startLine, endLine };
}

/**
 * Replaces the managed region in `content` with `newRegion`, preserving every
 * byte outside the markers. Returns null when the markers are absent.
 */
export function patchManagedRegion(content, newRegion) {
  const parsed = extractManagedRegion(content);
  if (!parsed) return null;
  const lines = content.split('\n');
  const replacement = [FAQ_AUTO_START_MARKER, ...newRegion.split('\n'), FAQ_AUTO_END_MARKER];
  return [...lines.slice(0, parsed.startLine), ...replacement, ...lines.slice(parsed.endLine + 1)].join('\n');
}

/**
 * Pure classification for a product FAQ page target. Compares only the
 * pipeline-managed region: edits outside the markers (frontmatter, intro,
 * support section) never conflict and are always preserved.
 *
 * @param {object} args
 * @param {string|null} args.onDisk current full file content (null if absent)
 * @param {string} args.renderedRegion freshly rendered managed region
 * @param {string|null} args.baselineHash sha256 of the committed HEAD version (whole file)
 * @param {string|null} args.baselineRegionHash sha256 of the managed region of the committed HEAD version
 * @param {string|undefined} args.stateRegionHash sha256 of the managed region from the last applied state
 * @returns {{ status: 'up-to-date'|'create-needed'|'update-needed'|'conflict', reason: string }}
 */
export function classifyManagedTarget({ onDisk, renderedRegion, baselineHash, baselineRegionHash, stateRegionHash }) {
  if (onDisk === null) return { status: 'create-needed', reason: '' };
  const parsed = extractManagedRegion(onDisk);
  if (parsed !== null) {
    const onDiskRegionHash = sha256(parsed.region);
    if (parsed.region === renderedRegion) return { status: 'up-to-date', reason: '' };
    if (baselineRegionHash !== null && onDiskRegionHash === baselineRegionHash) {
      return { status: 'update-needed', reason: 'source changed since last publish' };
    }
    if (stateRegionHash !== undefined && onDiskRegionHash === stateRegionHash) {
      return { status: 'update-needed', reason: 'renderer changed since last apply' };
    }
    return { status: 'conflict', reason: 'manual edit inside managed FAQ region' };
  }
  // Legacy page without markers: the whole file is provably pipeline output
  // only when it matches the committed baseline; anything else is a manual
  // edit and must be left alone.
  const onDiskHash = sha256(onDisk);
  if (baselineHash !== null && onDiskHash === baselineHash) {
    return { status: 'update-needed', reason: 'legacy page without markers (migrate)' };
  }
  return { status: 'conflict', reason: 'manual edit detected after last publish' };
}

/* ------------------------------------------------------------------ */
/* Reconcile state                                                     */
/* ------------------------------------------------------------------ */

const STATE_SCHEMA_VERSION = '1.1';

function readState() {
  if (!fs.existsSync(STATE_PATH)) return null;
  try {
    const state = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
    const files = state && state.files ? state.files : {};
    const upgraded = {};
    for (const [rel, value] of Object.entries(files)) {
      if (typeof value === 'string') {
        // Legacy schema 1.0 stored whole-file hashes. Product pages keep no
        // region hash until the next apply migrates them to markers.
        upgraded[rel] = rel.endsWith('.json')
          ? { kind: 'json', hash: value }
          : { kind: 'doc', managedHash: null };
      } else if (value && typeof value === 'object') {
        upgraded[rel] = value;
      }
    }
    state.files = upgraded;
    state.schemaVersion = STATE_SCHEMA_VERSION;
    return state;
  } catch {
    return null;
  }
}

function stateValueFor(state, rel) {
  const v = state && state.files ? state.files[rel] : undefined;
  return v && typeof v === 'object' ? v : undefined;
}

function stateValueForTarget(t) {
  return t.kind === 'json'
    ? { kind: 'json', hash: sha256(t.content) }
    : { kind: 'doc', managedHash: sha256(t.managedRegion) };
}

export function computeReconcile(manifest) {
  const sourceHash = sha256(fs.readFileSync(MANIFEST_PATH));
  const state = readState();
  const targets = planTargets(manifest);
  const rows = [];
  let conflicts = 0;
  let drift = 0;
  for (const t of targets) {
    const onDisk = fs.existsSync(t.abs) ? fs.readFileSync(t.abs, 'utf8') : null;
    const onDiskHash = onDisk === null ? null : sha256(onDisk);
    const renderedHash = sha256(t.content);
    const baseline = gitHeadContent(t.rel);
    const baselineHash = baseline === null ? null : sha256(baseline);

    let decision;
    let stateHash = null;
    if (t.kind === 'json') {
      const stateValue = stateValueFor(state, t.rel);
      const stateWholeHash = stateValue && stateValue.hash !== undefined ? stateValue.hash : undefined;
      decision = classifyTarget({ rendered: t.content, onDisk, baselineHash, stateHash: stateWholeHash });
      stateHash = stateValue && stateValue.hash !== undefined ? stateValue.hash : null;
    } else {
      const baselineParsed = baseline === null ? null : extractManagedRegion(baseline);
      const baselineRegionHash = baselineParsed === null ? null : sha256(baselineParsed.region);
      const stateValue = stateValueFor(state, t.rel);
      const stateRegionHash = stateValue && stateValue.managedHash != null ? stateValue.managedHash : undefined;
      decision = classifyManagedTarget({
        onDisk,
        renderedRegion: t.managedRegion,
        baselineHash,
        baselineRegionHash,
        stateRegionHash,
      });
      stateHash = stateRegionHash === undefined ? null : stateRegionHash;
    }
    const status = decision.status;
    const reason = decision.reason;
    if (status === 'update-needed' || status === 'create-needed') {
      drift += 1;
    } else if (status === 'conflict') {
      conflicts += 1;
    }

    rows.push({
      rel: t.rel,
      kind: t.kind,
      status,
      reason,
      onDiskHash,
      renderedHash,
      baselineHash,
      stateHash,
    });
  }

  const stateSource = state && state.sourceHash ? state.sourceHash : null;
  const sourceChanged = stateSource !== null && stateSource !== sourceHash;
  return {
    sourceHash,
    stateSourceHash: stateSource,
    sourceChanged,
    rows,
    conflicts,
    drift,
    upToDate: conflicts === 0 && drift === 0,
  };
}

export function applyTargets(reconcile) {
  const targets = planTargets(loadManifest());
  const byRel = new Map(targets.map((t) => [t.rel, t]));
  const written = [];
  const skipped = [];
  // Preserve every previously recorded hash so skipped/conflicted files keep
  // their last-applied baseline and cannot be mistaken for manual edits.
  const prevState = readState();
  const stateFiles = prevState && prevState.files ? { ...prevState.files } : {};
  for (const row of reconcile.rows) {
    const t = byRel.get(row.rel);
    if (row.status === 'up-to-date') {
      stateFiles[row.rel] = stateValueForTarget(t);
      continue;
    }
    if (row.status === 'conflict') {
      skipped.push({ rel: row.rel, reason: row.reason });
      continue;
    }
    fs.mkdirSync(path.dirname(t.abs), { recursive: true });
    if (t.kind === 'json') {
      fs.writeFileSync(t.abs, t.content);
    } else {
      // Product pages: patch only the managed region. The full shell is
      // written only for brand-new pages and marker-less legacy migrations.
      const currentOnDisk = fs.existsSync(t.abs) ? fs.readFileSync(t.abs, 'utf8') : null;
      const patched =
        currentOnDisk === null ? null : patchManagedRegion(currentOnDisk, t.managedRegion);
      fs.writeFileSync(t.abs, patched === null ? t.content : patched);
    }
    written.push(row.rel);
    stateFiles[row.rel] = stateValueForTarget(t);
  }
  if (written.length || skipped.length) {
    fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
    const state = {
      schemaVersion: STATE_SCHEMA_VERSION,
      sourceHash: reconcile.sourceHash,
      publishedAt: new Date().toISOString(),
      files: stateFiles,
    };
    fs.writeFileSync(STATE_PATH, `${JSON.stringify(state, null, 2)}\n`);
  }
  return { written, skipped };
}

/* ------------------------------------------------------------------ */
/* Reporting & CLI                                                     */
/* ------------------------------------------------------------------ */

function renderReport(reconcile) {
  const lines = [];
  lines.push('# ReSpeaker FAQ pipeline reconcile report');
  lines.push('');
  lines.push(`source hash:   ${reconcile.sourceHash}`);
  lines.push(`state source:  ${reconcile.stateSourceHash || '(none)'}`);
  lines.push(`source changed since last apply: ${reconcile.sourceChanged ? 'yes' : 'no'}`);
  lines.push('');
  lines.push('| target | status | reason |');
  lines.push('| --- | --- | --- |');
  for (const r of reconcile.rows) {
    lines.push(`| ${r.rel} | ${r.status} | ${r.reason || '—'} |`);
  }
  lines.push('');
  lines.push(`conflicts: ${reconcile.conflicts}`);
  lines.push(`drift (needs apply): ${reconcile.drift}`);
  return lines.join('\n') + '\n';
}

export function run({ apply = false, validateOnly = false } = {}) {
  const manifest = loadManifest();
  const validation = validateManifest(manifest);
  if (!validation.ok) {
    console.error('Manifest validation FAILED:');
    for (const e of validation.errors) console.error(`  - ${e}`);
    process.exitCode = 2;
    return { validation, reconcile: null, applied: null };
  }
  if (validateOnly) {
    console.log(`Manifest validation PASS (${manifest.entries.length} entries, all PUBLISH, validated).`);
    return { validation, reconcile: null, applied: null };
  }
  const reconcile = computeReconcile(manifest);
  console.log(renderReport(reconcile));
  if (apply) {
    const { written, skipped } = applyTargets(reconcile);
    console.log('');
    if (written.length) {
      console.log('Applied:');
      for (const w of written) console.log(`  + ${w}`);
    } else {
      console.log('Applied: (nothing to write)');
    }
    if (skipped.length) {
      console.log('Conflicts skipped (not overwritten):');
      for (const s of skipped) console.log(`  ! ${s.rel}: ${s.reason}`);
    }
  } else {
    console.log(reconcile.upToDate ? 'Dry-run: output is up to date.' : 'Dry-run: drift or conflict detected.');
  }
  return { validation, reconcile, applied: apply };
}

function main() {
  const args = process.argv.slice(2);
  const apply = args.includes('--apply');
  const validateOnly = args.includes('--validate');
  run({ apply, validateOnly });
}

const isMain =
  process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;
if (isMain) {
  main();
}
