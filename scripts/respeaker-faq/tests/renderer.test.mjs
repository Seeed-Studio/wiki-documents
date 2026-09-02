import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

import {
  DOMAINS,
  PRODUCT_ORDER,
  PRODUCTS,
  PRODUCT_LABELS,
  loadManifest,
  validateManifest,
  renderProductPage,
  renderSearchIndex,
  planTargets,
  classifyTarget,
} from '../pipeline.mjs';

const REPO_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..', '..');
const MANIFEST_PATH = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'manifests', 'approved_faq_manifest.json');

const sha256 = (buf) => crypto.createHash('sha256').update(buf).digest('hex');

test('manifest: exactly 29 approved entries, all PUBLISH, no BLOCK', () => {
  const manifest = loadManifest();
  assert.strictEqual(manifest.entries.length, 29);
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

test('render: exactly six non-empty product pages with expected slugs', () => {
  const manifest = loadManifest();
  const targets = planTargets(manifest);
  const docTargets = targets.filter((t) => t.rel.endsWith('.md'));
  assert.strictEqual(docTargets.length, 6);
  const slugs = docTargets.map((t) => {
    const m = t.content.match(/^slug: (\/\S+)$/m);
    return m && m[1];
  });
  assert.deepStrictEqual(
    slugs.sort(),
    [
      '/respeaker_flex_faq',
      '/respeaker_lite_faq',
      '/respeaker_xvf3800_faq',
      '/respeaker_xvf3000_faq',
      '/respeaker_2_mics_pi_hat_faq',
      '/respeaker_clip_faq',
    ].sort(),
  );
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

test('render: FAQ counts per product (XVF3800=12, Lite=8, Flex=4, Pi HAT=1, Clip=3, XVF3000=1) and anchors unique', () => {
  const manifest = loadManifest();
  const byProduct = (p) => manifest.entries.filter((e) => e.productKey === p);
  assert.strictEqual(byProduct('xvf3800_usb_4_mic').length, 12);
  assert.strictEqual(byProduct('respeaker_lite').length, 8);
  assert.strictEqual(byProduct('flex_xvf3800').length, 4);
  assert.strictEqual(byProduct('respeaker_2_mics_pi_hat').length, 1);
  assert.strictEqual(byProduct('respeaker_clip').length, 3);
  assert.strictEqual(byProduct('xvf3000').length, 1);

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
  const xvfPage = targets.find((t) => t.rel.includes('xvf3800_usb_4_mic')).content;
  const order = [...xvfPage.matchAll(/^## .* \{#([a-z0-9-]+)\}$/gm)].map((m) => m[1]);
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

test('render: search index has 29 items, products/domains contracts, slug+anchor URLs', () => {
  const manifest = loadManifest();
  const index = renderSearchIndex(manifest);
  assert.strictEqual(index.items.length, 29);
  assert.deepStrictEqual(index.products.map((p) => p.key), PRODUCT_ORDER);
  assert.ok(index.domains.length >= 3);
  const byKey = new Map(manifest.entries.map((e) => [e.publicFaqId, e]));
  for (const item of index.items) {
    assert.match(item.url, /^\/[a-z0-9_]+#[a-z0-9-]+$/);
    const entry = byKey.get(item.id);
    assert.ok(entry, 'index item missing: ' + item.id);
    assert.strictEqual(item.product, entry.productKey);
    assert.strictEqual(item.productLabel, PRODUCTS[item.product].label);
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
  const ia = JSON.stringify(renderSearchIndex(manifest));
  const ib = JSON.stringify(renderSearchIndex(manifest));
  assert.strictEqual(ia, ib);
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
  xvf3800_usb_4_mic: 'reSpeaker XVF3800 USB 4-Mic Array',
  flex_xvf3800: 'reSpeaker Flex',
  respeaker_lite: 'reSpeaker Lite',
  xvf3000: 'reSpeaker XVF3000',
  respeaker_2_mics_pi_hat: 'reSpeaker 2-Mics Pi HAT V2.0',
  respeaker_clip: 'reSpeaker Clip',
};

test('labels: six canonical product display names with exact reSpeaker casing', () => {
  const manifest = loadManifest();
  for (const key of PRODUCT_ORDER) {
    const canonical = CANONICAL_LABELS[key];
    assert.ok(canonical.startsWith('reSpeaker '), `${key}: must start with lowercase-r reSpeaker`);
    assert.strictEqual(PRODUCT_LABELS[key], canonical, `${key} PRODUCT_LABELS (FAQ filter option)`);
    assert.strictEqual(PRODUCTS[key].label, canonical, `${key} PRODUCTS.label (search tag / intro)`);
    assert.strictEqual(PRODUCTS[key].title, `${canonical} FAQ`, `${key} PRODUCTS.title`);
  }
  const index = renderSearchIndex(manifest);
  assert.deepStrictEqual(
    index.products.map((p) => p.label),
    PRODUCT_ORDER.map((k) => CANONICAL_LABELS[k]),
    'search index product filter labels must be the canonical full names',
  );
  for (const item of index.items) {
    assert.strictEqual(item.productLabel, CANONICAL_LABELS[item.product], `${item.id} productLabel`);
    assert.match(item.productLabel, /^reSpeaker /, `${item.id} productLabel casing`);
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
    for (const legacy of ['Flex XVF3800', 'ReSpeaker XVF3800 USB 4-Mic Array', 'ReSpeaker 2-Mics Pi HAT', 'ReSpeaker Lite', 'ReSpeaker Clip', 'ReSpeaker XVF3000']) {
      assert.ok(!header.includes(legacy), `${t.rel}: legacy name "${legacy}" in header`);
    }
  }
});

test('center page: exact lowercase-r "reSpeaker FAQ Center" title/H1, no legacy casing', () => {
  const center = fs.readFileSync(
    path.join(REPO_ROOT, 'sites', 'en', 'docs', 'FAQ', 'respeaker', 'respeaker_faq.mdx'),
    'utf8',
  );
  // Required canonical page-presentation strings (lowercase r, uppercase S).
  assert.ok(center.includes('title: reSpeaker FAQ Center'), 'frontmatter title must be "reSpeaker FAQ Center"');
  assert.ok(center.includes('# reSpeaker FAQ Center'), 'H1 must be "reSpeaker FAQ Center"');
  assert.ok(center.includes('the reSpeaker family'), 'intro must say "the reSpeaker family"');
  assert.ok(center.includes('[reSpeaker Introduction](/respeaker)'), 'help-link text must be "reSpeaker Introduction"');
  // No legacy uppercase-R "ReSpeaker FAQ Center" may remain on the center page.
  assert.ok(!center.includes('ReSpeaker FAQ Center'), 'legacy "ReSpeaker FAQ Center" must not remain');
});

test('published FAQ pages include author and publication date frontmatter', () => {
  const faqDir = path.join(REPO_ROOT, 'sites', 'en', 'docs', 'FAQ', 'respeaker');
  const files = [
    'respeaker_faq.mdx',
    ...PRODUCT_ORDER.map((key) => PRODUCTS[key].file),
  ];
  for (const file of files) {
    const content = fs.readFileSync(path.join(faqDir, file), 'utf8');
    const frontmatter = content.split('---', 3)[1];
    assert.match(
      frontmatter,
      /\nlast_update:\n  date: 9\/2\/2026\n  author: ray\n/,
      `${file}: last_update metadata missing or malformed`,
    );
  }
});


test('render: every generated product page carries the FAQ question-callout wrapper and unchanged question headings/anchors', () => {
  const manifest = loadManifest();
  const docTargets = planTargets(manifest).filter((t) => t.rel.endsWith('.md'));
  assert.strictEqual(docTargets.length, 6);
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
    const open = t.content.indexOf('<div class="respeaker-faq-page">');
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
  assert.match(css, /\.respeaker-faq-page\s+h3\s*\{/, 'scoped FAQ question selector required');
  assert.doesNotMatch(css, /\.respeaker-faq-page\s+h3::before/, 'FAQ question icon must not be rendered');
  // Bright lime rail/text color and responsive clamp() scale.
  assert.match(css, /#b6f30d/, 'bright lime #b6f30d required');
  assert.match(css, /clamp\(/, 'clamp() question-callout scale required');
  // Narrow-viewport fallback down to 320px.
  assert.match(css, /@media \(max-width: 480px\)/, 'narrow-viewport responsive block required');
});

test('manifest and generated sources stay in sync (no drift after apply)', () => {
  // The committed generated files must match a fresh render of the manifest.
  const manifest = loadManifest();
  const targets = planTargets(manifest);
  for (const t of targets) {
    const onDisk = fs.readFileSync(path.join(REPO_ROOT, t.rel), 'utf8');
    assert.strictEqual(onDisk, t.content, `${t.rel} drifted from manifest`);
  }
});
