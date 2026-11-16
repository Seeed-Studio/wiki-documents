'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const fs = require('node:fs');

const search = require(path.join(__dirname, '..', '..', '..', 'src', 'components', 'FaqExplorer', 'search.js'));
const { buildLocaleFaqIndex } = require(path.join(__dirname, '..', '..', '..', 'plugins', 'recomputer-faq-index', 'lib', 'faq-index.js'));
const {
  buildLocaleFaqIndex: buildLocalePiFaqIndex,
  PRODUCT_ORDER: PI_PRODUCT_ORDER,
} = require(path.join(__dirname, '..', '..', '..', 'plugins', 'recomputer-pi-faq-index', 'lib', 'faq-index.js'));

const { normalizeText, tokenizeQuery, scoreFaq, filterByProduct, filterByDomain, searchFaqs, sortResults } = search;

const FIXTURES = [
  {
    id: 'rk_npu_device_paths',
    question: 'Which NPU device path does my reComputer RK use?',
    summary: 'The RK3588 uses renderD129 and the RK3576 uses renderD128.',
    product: 'recomputer_rk',
    productLabel: 'reComputer RK',
    primaryDomain: 'hardware_interfaces',
    domains: ['hardware_interfaces', 'algorithm_tuning'],
    skus: ['100062096'],
    keywords: ['reComputer RK', 'NPU', 'renderD129'],
    lastVerifiedAt: '2026-11-01',
    url: '/recomputer_rk_faq#npu-device-paths',
  },
  {
    id: 'rk3576_nvme_boot',
    question: 'Can the reComputer RK3576 boot the system from an M.2 NVMe SSD?',
    summary: 'Install Armbian on the NVMe SSD and boot from it.',
    product: 'recomputer_rk',
    productLabel: 'reComputer RK',
    primaryDomain: 'documentation_usage',
    domains: ['documentation_usage', 'hardware_interfaces'],
    skus: [],
    keywords: ['NVMe', 'M.2', 'Armbian'],
    lastVerifiedAt: '2026-11-01',
    url: '/recomputer_rk_faq#rk3576-nvme-boot',
  },
  {
    id: 'rk3588_ip_camera_rtsp',
    question: 'Can the reComputer RK3588-30 take an IP camera and run object detection?',
    summary: 'The board has two 2.5GbE ports, a VPU and an NPU.',
    product: 'recomputer_rk',
    productLabel: 'reComputer RK',
    primaryDomain: 'connectivity',
    domains: ['connectivity', 'algorithm_tuning'],
    skus: ['100071234'],
    keywords: ['RTSP', 'IP camera', '2.5GbE'],
    lastVerifiedAt: '2026-11-01',
    url: '/recomputer_rk_faq#rk3588-ip-camera-rtsp',
  },
];

// Build the real English runtime index through the same plugin used by Docusaurus.
const REAL_INDEX = buildLocaleFaqIndex({
  siteDir: path.join(__dirname, '..', '..', '..', 'sites', 'en'),
  locale: 'en',
  baseUrl: '/',
});

test('normalizeText: lowercase, hyphen/underscore to space, collapse, trim', () => {
  assert.strictEqual(normalizeText('Hello-World_Test'), 'hello world test');
  assert.strictEqual(normalizeText('  a   b  '), 'a b');
  assert.strictEqual(normalizeText(''), '');
  assert.strictEqual(normalizeText(undefined), '');
});

test('tokenizeQuery: empty query yields no tokens; multi-word splits', () => {
  assert.deepStrictEqual(tokenizeQuery(''), []);
  assert.deepStrictEqual(tokenizeQuery('   '), []);
  assert.deepStrictEqual(tokenizeQuery('USB not detected'), ['usb', 'not', 'detected']);
});

test('scoreFaq: question hit carries the highest weight', () => {
  const byQuestion = scoreFaq(FIXTURES[0], ['npu']);
  const byKeyword = scoreFaq(FIXTURES[0], ['renderd129']);
  assert.ok(byQuestion.score > 0);
  assert.ok(byKeyword.score > 0);
  assert.ok(byQuestion.score >= byKeyword.score, 'question must weigh at least as much as keywords');
});

test('scoreFaq: exact SKU hit is weighted like question', () => {
  const bySku = scoreFaq(FIXTURES[0], ['100062096']);
  const byQuestion = scoreFaq(FIXTURES[0], ['npu']);
  assert.ok(bySku.score > 0);
  assert.ok(byQuestion.score > 0);
  assert.ok(bySku.matched.has('100062096'));
});

test('filterByProduct: filters by product key; empty key returns all', () => {
  assert.strictEqual(filterByProduct(FIXTURES, 'recomputer_rk').length, 3);
  assert.strictEqual(filterByProduct(FIXTURES, 'respeaker_lite').length, 0);
  assert.strictEqual(filterByProduct(FIXTURES, '').length, 3);
});

test('filterByDomain: matches primary and secondary domains', () => {
  const byPrimary = filterByDomain(FIXTURES, 'connectivity');
  const bySecondary = filterByDomain(FIXTURES, 'algorithm_tuning');
  assert.strictEqual(byPrimary.length, 1);
  assert.strictEqual(bySecondary.length, 2);
  assert.strictEqual(filterByDomain(FIXTURES, '').length, 3);
});

test('searchFaqs: empty query returns all items with no OR fallback', () => {
  const { items, orFallback } = searchFaqs(FIXTURES, { query: '' });
  assert.strictEqual(items.length, 3);
  assert.strictEqual(orFallback, false);
});

test('searchFaqs: AND semantics — all tokens must match', () => {
  const { items, orFallback } = searchFaqs(FIXTURES, { query: 'NPU device path' });
  assert.strictEqual(items.length, 1);
  assert.strictEqual(items[0].id, 'rk_npu_device_paths');
  assert.strictEqual(orFallback, false);
});

test('searchFaqs: OR fallback when AND fails with multiple tokens', () => {
  // No fixture carries both tokens, so the AND pass is empty and the OR
  // fallback returns every fixture that matches at least one token.
  const { items, orFallback } = searchFaqs(FIXTURES, { query: 'NPU Armbian' });
  assert.strictEqual(items.length, 3);
  assert.strictEqual(orFallback, true);
});

test('searchFaqs: product + domain filters intersect with text search', () => {
  const { items } = searchFaqs(FIXTURES, { query: 'RTSP', product: 'recomputer_rk', domain: 'connectivity' });
  assert.strictEqual(items.length, 1);
  assert.strictEqual(items[0].id, 'rk3588_ip_camera_rtsp');
});

test('searchFaqs: product filter alone can empty the result set', () => {
  const { items } = searchFaqs(FIXTURES, { product: 'respeaker_lite' });
  assert.strictEqual(items.length, 0);
});

test('sortResults is deterministic (tie broken by product label then question)', () => {
  const a = { ...FIXTURES[0], score: 1 };
  const b = { ...FIXTURES[2], score: 1 };
  const sorted = sortResults([b, a]);
  // Same score and same product label: the question breaks the tie.
  assert.ok(sorted[0].question < sorted[1].question, 'tie must be broken by the question');
  // Deterministic regardless of the input order.
  assert.deepStrictEqual(
    sortResults([b, a]).map((x) => x.id),
    sortResults([a, b]).map((x) => x.id),
  );
});

test('integration: real index has 15 items and every URL uses slug+anchor', () => {
  assert.strictEqual(REAL_INDEX.items.length, 15);
  for (const item of REAL_INDEX.items) {
    assert.match(item.url, /^\/[a-z0-9_]+#[a-z0-9-]+$/, item.id);
    assert.ok(item.question);
    assert.ok(item.summary);
    assert.ok(item.productLabel);
    assert.ok(item.product);
    assert.ok(item.lastVerifiedAt);
  }
});

const CANONICAL_LABELS = ['reComputer RK', 'reComputer Industrial RK', 'reComputer RK Module'];

test('integration: index products and result tags use canonical full reComputer labels', () => {
  assert.deepStrictEqual(
    REAL_INDEX.products.map((p) => p.label),
    CANONICAL_LABELS,
    'product filter options must be the canonical display names',
  );
  for (const item of REAL_INDEX.items) {
    assert.ok(CANONICAL_LABELS.includes(item.productLabel), `${item.id}: non-canonical productLabel ${item.productLabel}`);
    assert.match(item.productLabel, /^reComputer /, `${item.id}: tag must use lowercase-r reComputer`);
  }
});

test('integration: searching the real index for "NVMe" style query finds the boot item', () => {
  const { items } = searchFaqs(REAL_INDEX.items, { query: 'NVMe' });
  assert.ok(items.some((i) => i.id === 'rk3576_nvme_boot'));
});

test('integration: product filters return the expected number of items on real data', () => {
  const { items } = searchFaqs(REAL_INDEX.items, { product: 'recomputer_rk' });
  assert.strictEqual(items.length, 12);
  const { items: industrial } = searchFaqs(REAL_INDEX.items, { product: 'recomputer_industrial_rk' });
  assert.strictEqual(industrial.length, 2);
  const { items: module } = searchFaqs(REAL_INDEX.items, { product: 'recomputer_rk_module' });
  assert.strictEqual(module.length, 1);
});

test('integration: product filters resolve for every rendered product page', () => {
  for (const product of ['recomputer_rk', 'recomputer_industrial_rk', 'recomputer_rk_module']) {
    const { items } = searchFaqs(REAL_INDEX.items, { product });
    assert.ok(items.length >= 1, `product ${product} has no searchable items`);
    for (const item of items) {
      assert.strictEqual(item.product, product);
      assert.match(item.url, /^\/[a-z0-9_]+#[a-z0-9-]+$/, item.id);
    }
  }
});

test('integration: every manifest FAQ id appears exactly once in its own index', () => {
  const manifest = JSON.parse(
    require('fs').readFileSync(
      require('path').join(__dirname, '..', 'manifests', 'approved_faq_manifest.json'),
      'utf8',
    ),
  );
  const piProducts = new Set(PI_PRODUCT_ORDER);
  const piIndex = buildLocalePiFaqIndex({
    siteDir: require('path').join(__dirname, '..', '..', '..', 'sites', 'en'),
    locale: 'en',
    baseUrl: '/',
  });
  const rkIndex = REAL_INDEX;
  const indexIds = new Set(rkIndex.items.map((i) => i.id));
  assert.strictEqual(indexIds.size, rkIndex.items.length, 'duplicate index ids');
  for (const entry of manifest.entries) {
    const owner = piProducts.has(entry.productKey) ? piIndex : rkIndex;
    const ownerIds = new Set(owner.items.map((i) => i.id));
    assert.ok(ownerIds.has(entry.publicFaqId), `manifest entry ${entry.publicFaqId} missing from its index`);
  }
  // Each index holds exactly the entries of its own products.
  assert.strictEqual(rkIndex.items.length, manifest.entries.filter((e) => !piProducts.has(e.productKey)).length);
  assert.strictEqual(piIndex.items.length, manifest.entries.filter((e) => piProducts.has(e.productKey)).length);
});

test('integration: the Raspberry Pi index carries only the Raspberry Pi product lines', () => {
  const piIndex = buildLocalePiFaqIndex({
    siteDir: require('path').join(__dirname, '..', '..', '..', 'sites', 'en'),
    locale: 'en',
    baseUrl: '/',
  });
  assert.strictEqual(piIndex.artifactType, 'recomputer_pi_faq_search_index');
  assert.ok(piIndex.items.length > 0, 'the Raspberry Pi index must not be empty');
  for (const item of piIndex.items) {
    assert.ok(PI_PRODUCT_ORDER.includes(item.product), `${item.id} belongs to unknown product ${item.product}`);
    assert.match(item.url, /^\/(recomputer_r1000_r1100_faq|recomputer_ai_r2000_faq|recomputer_industrial_r2x_faq|reterminal_faq)#[a-z0-9-]+$/, item.id);
  }
  // The Rockchip pages never leak into the Raspberry Pi index.
  const rkIndexIds = new Set(REAL_INDEX.items.map((i) => i.id));
  for (const item of piIndex.items) {
    assert.ok(!rkIndexIds.has(item.id), `index item ${item.id} leaked between product families`);
  }
  // ... and the Raspberry Pi pages never leak into the Rockchip index.
  const piIndexIds = new Set(piIndex.items.map((i) => i.id));
  for (const item of REAL_INDEX.items) {
    assert.ok(!piIndexIds.has(item.id), `index item ${item.id} leaked between product families`);
  }
});

test('integration: no-result state for a bogus query', () => {
  const { items, orFallback } = searchFaqs(REAL_INDEX.items, { query: 'supercalifragilistic' });
  assert.strictEqual(items.length, 0);
  assert.strictEqual(orFallback, false);
});
