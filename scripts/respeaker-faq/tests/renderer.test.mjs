import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

import {
  DOMAINS,
  PRODUCT_ORDER,
  PRODUCTS,
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

test('manifest: exactly 7 approved entries, all PUBLISH, no BLOCK', () => {
  const manifest = loadManifest();
  assert.strictEqual(manifest.entries.length, 7);
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

test('render: exactly three non-empty product pages with expected slugs', () => {
  const manifest = loadManifest();
  const targets = planTargets(manifest);
  const docTargets = targets.filter((t) => t.rel.endsWith('.md'));
  assert.strictEqual(docTargets.length, 3);
  const slugs = docTargets.map((t) => {
    const m = t.content.match(/^slug: (\/\S+)$/m);
    return m && m[1];
  });
  assert.deepStrictEqual(slugs.sort(), ['/respeaker_flex_faq', '/respeaker_lite_faq', '/respeaker_xvf3800_faq'].sort());
});

test('render: FAQ counts per product (XVF3800=4, Lite=2, Flex=1) and anchors unique', () => {
  const manifest = loadManifest();
  const byProduct = (p) => manifest.entries.filter((e) => e.productKey === p);
  assert.strictEqual(byProduct('xvf3800_usb_4_mic').length, 4);
  assert.strictEqual(byProduct('respeaker_lite').length, 2);
  assert.strictEqual(byProduct('flex_xvf3800').length, 1);

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

test('render: search index has 7 items, products/domains contracts, slug+anchor URLs', () => {
  const manifest = loadManifest();
  const index = renderSearchIndex(manifest);
  assert.strictEqual(index.items.length, 7);
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

test('manifest and generated sources stay in sync (no drift after apply)', () => {
  // The committed generated files must match a fresh render of the manifest.
  const manifest = loadManifest();
  const targets = planTargets(manifest);
  for (const t of targets) {
    const onDisk = fs.readFileSync(path.join(REPO_ROOT, t.rel), 'utf8');
    assert.strictEqual(onDisk, t.content, `${t.rel} drifted from manifest`);
  }
});
