import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

import {
  DOMAINS,
  PRODUCT_ORDER,
  PRODUCTS,
  PRODUCT_LABELS,
  FAQ_AUTO_START_MARKER,
  FAQ_AUTO_END_MARKER,
  loadManifest,
  validateManifest,
  renderManagedFaqRegion,
  renderProductPage,
  planTargets,
  extractManagedRegion,
  patchManagedRegion,
  classifyTarget,
  classifyManagedTarget,
  normalizeRegion,
} from '../pipeline.mjs';

const TESTS_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(TESTS_DIR, '..', '..', '..');
const MANIFEST_PATH = path.join(TESTS_DIR, '..', 'manifests', 'approved_faq_manifest.json');

const sha256 = (buf) => crypto.createHash('sha256').update(buf).digest('hex');

// `createdAt`, `url` and `updatedAt` are owned by normalize-frontmatter.js and
// update-doc-updatedat.yml, not by the FAQ pipeline (the "frontmatter reformat"
// test below treats them as external and non-conflicting), so they are removed
// before a committed page is compared against a fresh render.
const stripToolingFrontmatter = (content) => {
  const open = content.indexOf('---\n');
  const close = open === -1 ? -1 : content.indexOf('\n---\n', open + 4);
  if (close === -1) return content;
  const frontmatter = content
    .slice(open + 4, close)
    .split('\n')
    .filter((line) => !/^(createdAt|url|updatedAt):/.test(line))
    .join('\n');
  return `${content.slice(0, open + 4)}${frontmatter}${content.slice(close)}`;
};

test('manifest: exactly 55 approved entries, all PUBLISH, no BLOCK', () => {
  const manifest = loadManifest();
  assert.strictEqual(manifest.entries.length, 55);
  for (const entry of manifest.entries) {
    assert.strictEqual(entry.publicationDecision, 'PUBLISH');
  }
  const validation = validateManifest(manifest);
  assert.strictEqual(validation.ok, true, validation.errors.join('; '));
  assert.deepStrictEqual(validation.blocked, []);
});

test('validation: BLOCK entries are rejected by the validator', () => {
  const manifest = loadManifest();
  const withBlock = {
    ...manifest,
    entries: [
      ...manifest.entries,
      { ...manifest.entries[0], publicFaqId: 'blocked_item', publicationDecision: 'BLOCK' },
    ],
  };
  const validation = validateManifest(withBlock);
  assert.strictEqual(validation.ok, false);
  assert.ok(validation.errors.some((e) => e.includes('BLOCK')));
});

test('render: exactly seven non-empty product pages with the expected slugs', () => {
  const manifest = loadManifest();
  const targets = planTargets(manifest);
  const docTargets = targets.filter((t) => t.rel.endsWith('.md'));
  assert.strictEqual(docTargets.length, 7);
  const slugs = docTargets.map((t) => {
    const m = t.content.match(/^slug: (\/\S+)$/m);
    return m && m[1];
  });
  assert.deepStrictEqual(slugs.sort(), [
    '/recomputer_ai_r2000_faq',
    '/recomputer_industrial_r2x_faq',
    '/recomputer_industrial_rk_faq',
    '/recomputer_r1000_r1100_faq',
    '/recomputer_rk_faq',
    '/recomputer_rk_module_faq',
    '/reterminal_faq',
  ]);
});

test('render: only products with approved entries produce pages (no empty pages)', () => {
  const manifest = loadManifest();
  const targets = planTargets(manifest);
  const docTargets = targets.filter((t) => t.rel.endsWith('.md'));
  for (const t of docTargets) {
    // Every rendered page must contain at least one published FAQ block.
    assert.ok((t.content.match(/^### .*\{#[a-z0-9-]+\}$/gm) || []).length >= 1, `${t.rel} is empty`);
  }
  // Every manifest product that has entries must render; none may be skipped.
  const productKeys = new Set(manifest.entries.map((e) => e.productKey));
  const rendered = new Set(docTargets.map((t) => t.content.match(/^slug: (\/\S+)$/m)[1]));
  for (const key of productKeys) {
    const slug = manifest.entries.find((e) => e.productKey === key).wikiSlug;
    assert.ok(rendered.has(slug), `product ${key} (${slug}) has entries but no page`);
  }
});

test('render: FAQ counts per product (RK=12, Industrial=2, Module=1, R1000=10, AI R2000=1, Industrial R2x=8, reTerminal=21) and anchors unique', () => {
  const manifest = loadManifest();
  const byProduct = (p) => manifest.entries.filter((e) => e.productKey === p);
  assert.strictEqual(byProduct('recomputer_rk').length, 12);
  assert.strictEqual(byProduct('recomputer_industrial_rk').length, 2);
  assert.strictEqual(byProduct('recomputer_rk_module').length, 1);
  assert.strictEqual(byProduct('recomputer_r1000').length, 10);
  assert.strictEqual(byProduct('recomputer_ai_r2000').length, 1);
  assert.strictEqual(byProduct('recomputer_industrial_r2x').length, 8);
  assert.strictEqual(byProduct('reterminal').length, 21);

  const targets = planTargets(manifest);
  for (const t of targets.filter((x) => x.rel.endsWith('.md'))) {
    const anchors = [...t.content.matchAll(/\{#([a-z0-9-]+)\}/g)].map((m) => m[1]);
    assert.strictEqual(new Set(anchors).size, anchors.length, `${t.rel}: duplicate anchors`);
    assert.ok(anchors.length >= 1, `${t.rel}: expected at least one anchor`);
  }
});

test('render: domain sections follow the fixed PRD order and only non-empty sections render', () => {
  const manifest = loadManifest();
  const targets = planTargets(manifest);
  const rkPage = targets.find((t) => t.rel.includes('recomputer_rk')).content;
  const order = [...rkPage.matchAll(/^## .* \{#([a-z0-9-]+)\}$/gm)].map((m) => m[1]);
  const domainKeys = order.filter((a) => DOMAINS.some((d) => d.anchor === a));
  const expectedSequence = DOMAINS.map((d) => d.anchor).filter((a) => domainKeys.includes(a));
  assert.deepStrictEqual(domainKeys, expectedSequence, 'domain section order must match the fixed PRD order');
});

test('render: no internal IDs or forbidden tokens leak into public artifacts', () => {
  const manifest = loadManifest();
  const targets = planTargets(manifest);
  const forbidden = [/rec\d{10,}/i, /record_?id/i, /open_id/i, /access_token/i, /app_secret/i, /minio/i, /zoho/i, /ticket/i];
  for (const t of targets) {
    for (const re of forbidden) {
      assert.ok(!re.test(t.content), `${t.rel} matched forbidden pattern ${re}`);
    }
  }
});

test('idempotency: two renders produce byte-identical outputs', () => {
  const manifest = loadManifest();
  const a = planTargets(manifest);
  const b = planTargets(manifest);
  assert.strictEqual(a.length, b.length);
  for (let i = 0; i < a.length; i++) {
    assert.strictEqual(a[i].content, b[i].content, `${a[i].rel} not deterministic`);
    assert.strictEqual(a[i].content.length, b[i].content.length);
  }
});

test('classifyTarget: up-to-date / create-needed / update-needed / conflict rules', () => {
  const rendered = '# hello\n';
  const sha = (s) => sha256(s);
  const same = sha(rendered);

  // Up to date: on disk matches rendered.
  assert.deepStrictEqual(classifyTarget({ rendered, onDisk: rendered, baselineHash: null, stateHash: undefined }), {
    status: 'up-to-date',
    reason: '',
  });
  // Create needed: no file on disk.
  assert.deepStrictEqual(classifyTarget({ rendered, onDisk: null, baselineHash: null, stateHash: undefined }), {
    status: 'create-needed',
    reason: '',
  });
  // Update needed: on-disk matches committed baseline but renderer moved.
  const old = '# old\n';
  assert.deepStrictEqual(classifyTarget({ rendered, onDisk: old, baselineHash: sha(old), stateHash: undefined }), {
    status: 'update-needed',
    reason: 'source changed since last publish',
  });
  // Update needed: on-disk matches last pipeline output (state), not committed yet.
  assert.deepStrictEqual(classifyTarget({ rendered, onDisk: old, baselineHash: null, stateHash: sha(old) }), {
    status: 'update-needed',
    reason: 'renderer changed since last apply',
  });
  // Conflict: manual edit after last publish (matches neither baseline nor state).
  const manual = 'manual content that someone wrote\n';
  assert.deepStrictEqual(classifyTarget({ rendered, onDisk: manual, baselineHash: sha(old), stateHash: sha(old) }), {
    status: 'conflict',
    reason: 'manual edit detected after last publish',
  });
});

const CANONICAL_LABELS = {
  recomputer_rk: 'reComputer RK',
  recomputer_industrial_rk: 'reComputer Industrial RK',
  recomputer_rk_module: 'reComputer RK Module',
  recomputer_r1000: 'reComputer R1000 and R1100',
  recomputer_ai_r2000: 'reComputer AI and Industrial R2000',
  recomputer_industrial_r2x: 'reComputer Industrial R2x series',
  reterminal: 'reTerminal and reTerminal DM',
};

// The reComputer product lines keep the lowercase-r "reComputer" prefix. The
// reTerminal displays are published on the same Raspberry Pi FAQ pages but
// carry their own product name, so they are excluded from that rule.
const RECOMPUTER_FAMILY_KEYS = [
  'recomputer_rk',
  'recomputer_industrial_rk',
  'recomputer_rk_module',
  'recomputer_r1000',
  'recomputer_ai_r2000',
  'recomputer_industrial_r2x',
];

test('labels: the canonical product display names with exact reComputer casing', () => {
  const manifest = loadManifest();
  for (const key of PRODUCT_ORDER) {
    const canonical = CANONICAL_LABELS[key];
    assert.ok(canonical, `${key}: missing canonical display name`);
    if (RECOMPUTER_FAMILY_KEYS.includes(key)) {
      assert.ok(canonical.startsWith('reComputer '), `${key}: must start with lowercase-r reComputer`);
    }
    assert.strictEqual(PRODUCT_LABELS[key], canonical, `${key} PRODUCT_LABELS (FAQ filter option)`);
    assert.strictEqual(PRODUCTS[key].label, canonical, `${key} PRODUCTS.label (search tag / intro)`);
    assert.strictEqual(PRODUCTS[key].title, `${canonical} FAQ`, `${key} PRODUCTS.title`);
  }
  // Rendered pages: frontmatter title, H1 and page-introduction label all canonical.
  for (const t of planTargets(manifest).filter((x) => x.rel.endsWith('.md'))) {
    const key = PRODUCT_ORDER.find((k) => t.rel.includes(PRODUCTS[k].file));
    const canonical = CANONICAL_LABELS[key];
    assert.ok(
      t.content.includes(`title: ${canonical} FAQ`),
      `${t.rel}: frontmatter title must be "${canonical} FAQ"`,
    );
    assert.ok(t.content.includes(`# ${canonical} FAQ`), `${t.rel}: H1 must be "${canonical} FAQ"`);
    assert.ok(
      t.content.includes(`This page contains verified answers for the ${canonical}.`),
      `${t.rel}: page-introduction product label must be "${canonical}"`,
    );
    // No legacy product display names leak into the rendered page header block.
    const header = t.content.slice(0, t.content.indexOf('## Before you begin'));
    for (const legacy of ['ReComputer RK', 'recomputer RK', 'reComputer RK Series']) {
      assert.ok(!header.includes(legacy), `${t.rel}: legacy name "${legacy}" in header`);
    }
  }
});

test('center page: exact lowercase-r "reComputer FAQ Center" title/H1, no legacy casing', () => {
  const center = fs.readFileSync(
    path.join(REPO_ROOT, 'sites', 'en', 'docs', 'FAQ', 'reComputer', 'recomputer_faq.mdx'),
    'utf8',
  );
  // Required canonical page-presentation strings (lowercase r, uppercase C).
  assert.ok(center.includes('title: reComputer FAQ Center'), 'frontmatter title must be "reComputer FAQ Center"');
  assert.ok(center.includes('# reComputer FAQ Center'), 'H1 must be "reComputer FAQ Center"');
  assert.ok(center.includes('the reComputer family'), 'intro must say "the reComputer family"');
  // No legacy uppercase-R "ReComputer FAQ Center" may remain on the center page.
  assert.ok(!center.includes('ReComputer FAQ Center'), 'legacy "ReComputer FAQ Center" must not remain');
});

test('published FAQ pages include author and publication date frontmatter', () => {
  const faqDir = path.join(REPO_ROOT, 'sites', 'en', 'docs', 'FAQ', 'reComputer');
  const files = [
    { file: 'recomputer_faq.mdx', date: '11/06/2026', author: 'doublelf' },
    ...PRODUCT_ORDER.map((key) => ({
      file: PRODUCTS[key].file,
      date: PRODUCTS[key].lastUpdateDate ?? '11/06/2026',
      author: PRODUCTS[key].lastUpdateAuthor ?? 'doublelf',
    })),
  ];
  for (const { file, date, author } of files) {
    const content = fs.readFileSync(path.join(faqDir, file), 'utf8');
    const frontmatter = content.split('---', 3)[1];
    assert.ok(
      frontmatter.includes(`\nlast_update:\n  date: ${date}\n  author: ${author}\n`),
      `${file}: last_update metadata missing or malformed`,
    );
  }
});

test('render: every generated product page carries the FAQ question-callout wrapper and unchanged question headings/anchors', () => {
  const manifest = loadManifest();
  const docTargets = planTargets(manifest).filter((t) => t.rel.endsWith('.md'));
  assert.strictEqual(docTargets.length, 7);
  const entriesByProduct = new Map();
  for (const e of manifest.entries) {
    if (!entriesByProduct.has(e.productKey)) entriesByProduct.set(e.productKey, []);
    entriesByProduct.get(e.productKey).push(e);
  }
  for (const t of docTargets) {
    const key = PRODUCT_ORDER.find((k) => t.rel.includes(PRODUCTS[k].file));
    const entries = entriesByProduct.get(key);
    assert.ok(entries.length >= 1, `${t.rel}: no manifest entries`);

    // Stable FAQ-specific wrapper emitted by renderProductPage, opened before
    // the first question heading and closed after the last one.
    const open = t.content.indexOf('<div class="recomputer-faq-page">');
    const close = t.content.indexOf('</div>');
    const firstQuestion = t.content.indexOf('### ');
    assert.ok(open !== -1, `${t.rel}: missing FAQ page wrapper open tag`);
    assert.ok(close !== -1 && close > open, `${t.rel}: missing FAQ page wrapper close tag`);
    assert.ok(open < firstQuestion, `${t.rel}: wrapper must open before the first question heading`);
    assert.ok(close > firstQuestion, `${t.rel}: wrapper must close after the question headings`);
    assert.ok(open < t.content.indexOf('## '), `${t.rel}: wrapper must open before the first h2 section`);
    assert.match(t.content, /## Tech Support & Product Discussion/, `${t.rel}: missing support section`);
    assert.match(t.content, /class="button_forum"/, `${t.rel}: missing forum support link`);
    assert.match(t.content, /class="button_discussion"/, `${t.rel}: missing discussion support link`);

    // The exact `### question {#anchor}` markdown lines stay byte-for-byte
    // identical to the manifest (ids/anchors/ToC contract unchanged).
    const headingLines = [...t.content.matchAll(/^### .*\{#[a-z0-9-]+\}$/gm)].map((m) => m[0]);
    const expected = entries.map((e) => `### ${e.questionEn} {#${e.wikiAnchor}}`);
    // Questions are rendered grouped by domain section (PRD order), so compare
    // the exact heading lines order-insensitively: every manifest question
    // heading + anchor must appear verbatim, and nothing else may.
    assert.deepStrictEqual(
      [...headingLines].sort(),
      [...expected].sort(),
      `${t.rel}: question heading/anchor lines must match the manifest exactly`,
    );
  }
});

test('css: FAQ question-callout contract stays scoped, lime and responsive', () => {
  const css = fs.readFileSync(path.join(REPO_ROOT, 'src', 'css', 'custom.css'), 'utf8');
  // Selectors must be scoped through the FAQ page class (never a global h3).
  assert.match(css, /\.recomputer-faq-page\s+h3\s*\{/, 'scoped FAQ question selector required');
  assert.doesNotMatch(css, /\.recomputer-faq-page\s+h3::before/, 'FAQ question icon must not be rendered');
  // Bright lime rail/text color and responsive clamp() scale.
  assert.match(css, /#b6f30d/, 'bright lime #b6f30d required');
  assert.match(css, /clamp\(/, 'clamp() question-callout scale required');
  // Narrow-viewport fallback down to 320px.
  assert.match(css, /@media \(max-width: 480px\)/, 'narrow-viewport responsive block required');
});

test('manifest and generated sources stay in sync (no drift after apply)', () => {
  // The committed generated files must match a fresh render of the manifest.
  // Only the tooling-owned frontmatter fields are excluded from the comparison;
  // every pipeline-owned byte (managed region, title, description, slug,
  // keywords, last_update, intro and support sections) is still compared.
  const manifest = loadManifest();
  const targets = planTargets(manifest);
  for (const t of targets) {
    const onDisk = fs.readFileSync(path.join(REPO_ROOT, t.rel), 'utf8');
    assert.strictEqual(stripToolingFrontmatter(onDisk), t.content, `${t.rel} drifted from manifest`);
  }
});

test('managed region: exactly one AUTO marker pair per rendered page, shell content outside', () => {
  const manifest = loadManifest();
  const docTargets = planTargets(manifest).filter((t) => t.rel.endsWith('.md'));
  assert.strictEqual(docTargets.length, 7);
  for (const t of docTargets) {
    const starts = (t.content.match(/<!-- RECOMPUTER_FAQ_AUTO_START -->/g) || []).length;
    const ends = (t.content.match(/<!-- RECOMPUTER_FAQ_AUTO_END -->/g) || []).length;
    assert.strictEqual(starts, 1, `${t.rel}: exactly one AUTO_START marker`);
    assert.strictEqual(ends, 1, `${t.rel}: exactly one AUTO_END marker`);

    const parsed = extractManagedRegion(t.content);
    assert.ok(parsed, `${t.rel}: markers must delimit an extractable region`);
    assert.strictEqual(parsed.region, t.managedRegion, `${t.rel}: rendered region must match extracted region`);

    // Every FAQ question heading lives inside the managed region, so the
    // search-index deep links (slug#anchor) are pipeline-owned.
    const regionQuestions = [...parsed.region.matchAll(/^### .*\{#[a-z0-9-]+\}$/gm)].map((m) => m[0]);
    const pageQuestions = [...t.content.matchAll(/^### .*\{#[a-z0-9-]+\}$/gm)].map((m) => m[0]);
    assert.deepStrictEqual(regionQuestions, pageQuestions, `${t.rel}: all FAQ blocks must live inside the managed region`);

    // Frontmatter, intro and support sections stay in the manually-owned shell.
    const before = t.content.slice(0, t.content.indexOf(FAQ_AUTO_START_MARKER));
    const after = t.content.slice(t.content.indexOf(FAQ_AUTO_END_MARKER) + FAQ_AUTO_END_MARKER.length);
    assert.match(before, /^---\r?\ntitle:/, `${t.rel}: frontmatter must stay outside the managed region`);
    assert.ok(before.includes('# '), `${t.rel}: H1 must stay outside the managed region`);
    assert.ok(before.includes('## Before you begin'), `${t.rel}: intro section must stay outside the managed region`);
    assert.ok(after.includes('## Tech Support & Product Discussion'), `${t.rel}: support section must stay outside the managed region`);
    assert.ok(after.includes('</div>'), `${t.rel}: closing wrapper must stay outside the managed region`);
  }
});

test('patchManagedRegion: only the managed span is replaced, outside bytes preserved', () => {
  const manifest = loadManifest();
  const t = planTargets(manifest).find((x) => x.rel.endsWith('.md'));
  const changed = '## New Section {#new-section}\n\n### New question {#new-question}';
  const patched = patchManagedRegion(t.content, changed);
  assert.ok(patched, 'patched content expected');

  const parsed = extractManagedRegion(patched);
  assert.strictEqual(parsed.region, changed);
  const patchedEnd = patched.indexOf(FAQ_AUTO_END_MARKER) + FAQ_AUTO_END_MARKER.length;
  const originalEnd = t.content.indexOf(FAQ_AUTO_END_MARKER) + FAQ_AUTO_END_MARKER.length;
  assert.strictEqual(patched.slice(0, patched.indexOf(FAQ_AUTO_START_MARKER)), t.content.slice(0, t.content.indexOf(FAQ_AUTO_START_MARKER)), 'bytes before the start marker must be preserved');
  assert.strictEqual(patched.slice(patchedEnd), t.content.slice(originalEnd), 'bytes after the end marker must be preserved');
});

test('idempotency: applying a rendered region to its own page is a byte no-op', () => {
  const manifest = loadManifest();
  for (const t of planTargets(manifest).filter((x) => x.rel.endsWith('.md'))) {
    assert.strictEqual(patchManagedRegion(t.content, t.managedRegion), t.content, `${t.rel}: second apply must be a no-op`);
    assert.strictEqual(extractManagedRegion(t.content).region, t.managedRegion, `${t.rel}: extraction round-trip`);
  }
});

test('classifyManagedTarget: create-needed / update-needed / conflict rules on the managed region', () => {
  const manifest = loadManifest();
  const t = planTargets(manifest).find((x) => x.rel.endsWith('.md'));
  const oldRegion = '## Old Section {#old-section}\n\n### Old question {#old-question}';
  const oldMarked = patchManagedRegion(t.content, oldRegion);

  // Missing file -> create-needed.
  assert.deepStrictEqual(
    classifyManagedTarget({ onDisk: null, renderedRegion: t.managedRegion, baselineHash: null, baselineRegionHash: null, stateRegionHash: undefined }),
    { status: 'create-needed', reason: '' },
  );
  // Region equals the committed baseline region -> source-driven update.
  assert.deepStrictEqual(
    classifyManagedTarget({
      onDisk: oldMarked,
      renderedRegion: t.managedRegion,
      baselineHash: null,
      baselineRegionHash: sha256(normalizeRegion(oldRegion)),
      stateRegionHash: undefined,
    }),
    { status: 'update-needed', reason: 'source changed since last publish' },
  );
  // Region equals the last applied state region -> renderer-driven update.
  assert.deepStrictEqual(
    classifyManagedTarget({
      onDisk: oldMarked,
      renderedRegion: t.managedRegion,
      baselineHash: null,
      baselineRegionHash: null,
      stateRegionHash: sha256(normalizeRegion(oldRegion)),
    }),
    { status: 'update-needed', reason: 'renderer changed since last apply' },
  );
  // An edit inside the managed region must conflict and never be overwritten.
  const tampered = patchManagedRegion(t.content, '## Tampered {#tampered}\n\nHuman edit inside the managed region.');
  assert.deepStrictEqual(
    classifyManagedTarget({
      onDisk: tampered,
      renderedRegion: t.managedRegion,
      baselineHash: sha256(t.content),
      baselineRegionHash: sha256(normalizeRegion(t.managedRegion)),
      stateRegionHash: sha256(normalizeRegion(t.managedRegion)),
    }),
    { status: 'conflict', reason: 'manual edit inside managed FAQ region' },
  );
});

test('classifyManagedTarget: a CRLF working tree is not reported as a manual edit', () => {
  const manifest = loadManifest();
  const t = planTargets(manifest).find((x) => x.rel.endsWith('.md'));
  const crlfPage = t.content.replace(/\n/g, '\r\n');
  assert.deepStrictEqual(
    classifyManagedTarget({
      onDisk: crlfPage,
      renderedRegion: t.managedRegion,
      baselineHash: sha256(t.content),
      baselineRegionHash: sha256(normalizeRegion(t.managedRegion)),
      stateRegionHash: sha256(normalizeRegion(t.managedRegion)),
    }),
    { status: 'up-to-date', reason: '' },
    'a CRLF checkout must not look like a manual edit',
  );
});

test('classifyManagedTarget: frontmatter reformat and external edits never conflict', () => {
  const manifest = loadManifest();
  for (const t of planTargets(manifest).filter((x) => x.rel.endsWith('.md'))) {
    // normalize-frontmatter-like rewrite: reordered keys plus added
    // createdAt/updatedAt/url fields, plus ordinary hand edits in the shell.
    const closingIdx = t.content.indexOf('\n---\n');
    const body = t.content.slice(closingIdx + 1); // '---\n' + body
    const fmLines = [
      `slug: ${t.content.match(/^slug: (\S+)$/m)[1]}`,
      `description: ${t.content.match(/^description: (.+)$/m)[1]}`,
      `title: ${t.content.match(/^title: (.+)$/m)[1]}`,
      'keywords:',
      ...t.content.match(/^  - .+$/gm),
      'createdAt: 2026-11-05',
      'updatedAt: 2026-11-06',
      `url: https://wiki.seeedstudio.com${t.content.match(/^slug: (\S+)$/m)[1]}/`,
      'last_update:',
      '  date: 11/06/2026',
      '  author: doublelf',
    ];
    const edited =
      `---\n${fmLines.join('\n')}\n` +
      body
        .replace('Each answer states the product variant', 'Each answer describes the product variant')
        .replace('## Tech Support & Product Discussion', '## Tech Support & Product Discussion (revised)');

    const decision = classifyManagedTarget({
      onDisk: edited,
      renderedRegion: t.managedRegion,
      baselineHash: sha256(t.content),
      baselineRegionHash: sha256(normalizeRegion(t.managedRegion)),
      stateRegionHash: sha256(normalizeRegion(t.managedRegion)),
    });
    assert.deepStrictEqual(decision, { status: 'up-to-date', reason: '' }, `${t.rel}: external edits must not conflict`);

    // Even without any baseline/state hashes the unchanged region is up-to-date.
    assert.deepStrictEqual(
      classifyManagedTarget({ onDisk: edited, renderedRegion: t.managedRegion, baselineHash: null, baselineRegionHash: null, stateRegionHash: undefined }),
      { status: 'up-to-date', reason: '' },
      `${t.rel}: unchanged region is up-to-date without baseline/state`,
    );
  }
});

test('classifyManagedTarget: marker-less legacy pages migrate only when they match the committed baseline', () => {
  const manifest = loadManifest();
  const t = planTargets(manifest).find((x) => x.rel.endsWith('.md'));
  const legacy = t.content
    .split('\n')
    .filter((l) => l !== FAQ_AUTO_START_MARKER && l !== FAQ_AUTO_END_MARKER)
    .join('\n');

  // Byte-identical to HEAD baseline -> safe migration.
  assert.deepStrictEqual(
    classifyManagedTarget({ onDisk: legacy, renderedRegion: t.managedRegion, baselineHash: sha256(legacy), baselineRegionHash: null, stateRegionHash: undefined }),
    { status: 'update-needed', reason: 'legacy page without markers (migrate)' },
  );
  // Manually edited legacy page -> conflict, never overwritten.
  const edited = legacy.replace('## Before you begin', '## Before you begin (changed)');
  assert.deepStrictEqual(
    classifyManagedTarget({ onDisk: edited, renderedRegion: t.managedRegion, baselineHash: sha256(legacy), baselineRegionHash: null, stateRegionHash: undefined }),
    { status: 'conflict', reason: 'manual edit detected after last publish' },
  );
});

test('published pages: on-disk managed region matches a fresh render (no region drift)', () => {
  const manifest = loadManifest();
  for (const t of planTargets(manifest).filter((x) => x.rel.endsWith('.md'))) {
    const onDisk = fs.readFileSync(path.join(REPO_ROOT, t.rel), 'utf8');
    const parsed = extractManagedRegion(onDisk);
    assert.ok(parsed, `${t.rel}: published page must carry the AUTO markers`);
    assert.strictEqual(
      normalizeRegion(parsed.region),
      normalizeRegion(t.managedRegion),
      `${t.rel}: on-disk managed region drifted from render`,
    );
  }
});
