'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const fs = require('node:fs');

const search = require(path.join(__dirname, '..', '..', '..', 'src', 'components', 'FaqExplorer', 'search.js'));

const { normalizeText, tokenizeQuery, scoreFaq, filterByProduct, filterByDomain, searchFaqs, sortResults } = search;

const FIXTURES = [
  {
    id: 'xvf3800_usb_not_detected',
    question: 'Why is my XVF3800 not detected over USB on Raspberry Pi 5 or Linux?',
    summary: 'Check the USB mode, cable, host detection and firmware recovery path.',
    product: 'xvf3800_usb_4_mic',
    productLabel: 'XVF3800 USB 4-Mic Array',
    primaryDomain: 'connectivity',
    domains: ['connectivity', 'firmware_software'],
    skus: ['114993702'],
    keywords: ['Raspberry Pi 5', 'Linux', 'USB not detected', 'DFU'],
    lastVerifiedAt: '2026-08-31',
    url: '/respeaker_xvf3800_faq#usb-not-detected',
  },
  {
    id: 'xvf3800_48khz',
    question: 'Does the XVF3800 USB 4-Mic Array support 48 kHz over USB?',
    summary: 'Use the dedicated v2.1.0 48 kHz two-channel image.',
    product: 'xvf3800_usb_4_mic',
    productLabel: 'XVF3800 USB 4-Mic Array',
    primaryDomain: 'product_business',
    domains: ['product_business', 'firmware_software'],
    skus: [],
    keywords: ['48 kHz', 'USB audio'],
    lastVerifiedAt: '2026-08-31',
    url: '/respeaker_xvf3800_faq#usb-48-khz-support',
  },
  {
    id: 'lite_esphome',
    question: 'How do I troubleshoot an ESPHome compile failure for ReSpeaker Lite?',
    summary: 'Use the current community configuration and its min_version.',
    product: 'respeaker_lite',
    productLabel: 'ReSpeaker Lite',
    primaryDomain: 'firmware_software',
    domains: ['firmware_software'],
    skus: [],
    keywords: ['ESPHome', 'compile failure', 'XIAO ESP32S3'],
    lastVerifiedAt: '2026-08-31',
    url: '/respeaker_lite_faq#esphome-compile-failure',
  },
];

// Load the real public index for integration assertions.
const REAL_INDEX = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', '..', '..', 'src', 'data', 'respeaker_faq_index.json'), 'utf8')
);

test('normalizeText: lowercase, hyphen/underscore to space, collapse, trim', () => {
  assert.strictEqual(normalizeText('Hello-World_Test'), 'hello world test');
  assert.strictEqual(normalizeText('  a   b  '), 'a b');
  assert.strictEqual(normalizeText(''), '');
  assert.strictEqual(normalizeText(undefined), '');
});

test('tokenizeQuery: empty query yields no tokens; multi-word splits', () => {
  assert.deepStrictEqual(tokenizeQuery(''), []);
  assert.deepStrictEqual(tokenizeQuery('  '), []);
  assert.deepStrictEqual(tokenizeQuery('USB not detected'), ['usb', 'not', 'detected']);
});

test('scoreFaq: question hit carries the highest weight', () => {
  // Use a minimal item where the token exists only in the question field.
  const minimal = {
    id: 'q',
    question: 'sample query token here',
    summary: '',
    product: '',
    productLabel: '',
    domains: [],
    skus: [],
    keywords: [],
  };
  const { score } = scoreFaq(minimal, ['sample']);
  assert.strictEqual(score, 5);
});

test('scoreFaq: exact SKU hit is weighted like question', () => {
  const { score, matched } = scoreFaq(FIXTURES[0], ['114993702']);
  assert.strictEqual(score, 5);
  assert.strictEqual(matched.size, 1);
});

test('filterByProduct: filters by product key; empty key returns all', () => {
  assert.strictEqual(filterByProduct(FIXTURES, 'respeaker_lite').length, 1);
  assert.strictEqual(filterByProduct(FIXTURES, 'nope').length, 0);
  assert.strictEqual(filterByProduct(FIXTURES, '').length, 3);
});

test('filterByDomain: matches primary and secondary domains', () => {
  const connectivity = filterByDomain(FIXTURES, 'connectivity');
  assert.strictEqual(connectivity.length, 1);
  const firmware = filterByDomain(FIXTURES, 'firmware_software');
  assert.deepStrictEqual(firmware.map((f) => f.id).sort(), ['lite_esphome', 'xvf3800_48khz', 'xvf3800_usb_not_detected'].sort());
  assert.strictEqual(filterByDomain(FIXTURES, '').length, 3);
});

test('searchFaqs: empty query returns all items with no OR fallback', () => {
  const { items, orFallback } = searchFaqs(FIXTURES, {});
  assert.strictEqual(items.length, 3);
  assert.strictEqual(orFallback, false);
});

test('searchFaqs: AND semantics — all tokens must match', () => {
  // "raspberry pi" both match the first fixture only.
  const { items } = searchFaqs(FIXTURES, { query: 'raspberry pi' });
  assert.strictEqual(items.length, 1);
  assert.strictEqual(items[0].id, 'xvf3800_usb_not_detected');
});

test('searchFaqs: OR fallback when AND fails with multiple tokens', () => {
  // "esphome raspberry" — no single item matches both, fall back to OR.
  const { items, orFallback } = searchFaqs(FIXTURES, { query: 'esphome raspberry' });
  assert.strictEqual(orFallback, true);
  assert.strictEqual(items.length, 2);
});

test('searchFaqs: product + domain filters intersect with text search', () => {
  const { items } = searchFaqs(FIXTURES, {
    query: 'usb',
    product: 'xvf3800_usb_4_mic',
    domain: 'connectivity',
  });
  assert.strictEqual(items.length, 1);
  assert.strictEqual(items[0].id, 'xvf3800_usb_not_detected');
});

test('searchFaqs: product filter alone can empty the result set', () => {
  const { items } = searchFaqs(FIXTURES, { product: 'respeaker_lite', domain: 'connectivity' });
  assert.strictEqual(items.length, 0);
});

test('sortResults is deterministic (tie broken by product label then question)', () => {
  const a = { ...FIXTURES[0], score: 1 };
  const b = { ...FIXTURES[2], score: 1 };
  const sorted = sortResults([b, a]);
  assert.strictEqual(sorted[0].id, a.id === 'xvf3800_usb_not_detected' ? b.id : a.id);
  assert.deepStrictEqual(
    sortResults([b, a]).map((x) => x.id),
    sortResults([b, a])
      .map((x) => x.id)
      .sort((x, y) => x.localeCompare(y)),
  );
});

test('integration: real index has 7 items and every URL uses slug+anchor', () => {
  assert.strictEqual(REAL_INDEX.items.length, 7);
  for (const item of REAL_INDEX.items) {
    assert.match(item.url, /^\/[a-z0-9_]+#[a-z0-9-]+$/, item.id);
    assert.ok(item.question);
    assert.ok(item.summary);
    assert.ok(item.productLabel);
    assert.ok(item.product);
    assert.ok(item.lastVerifiedAt);
  }
});

test('integration: searching the real index for "48khz" style query finds the 48 kHz item', () => {
  const { items } = searchFaqs(REAL_INDEX.items, { query: '48 kHz' });
  assert.ok(items.some((i) => i.id === 'xvf3800_48khz_usb_support'));
});

test('integration: product filter XVF3800 returns four items on real data', () => {
  const { items } = searchFaqs(REAL_INDEX.items, { product: 'xvf3800_usb_4_mic' });
  assert.strictEqual(items.length, 4);
});

test('integration: no-result state for a bogus query', () => {
  const { items, orFallback } = searchFaqs(REAL_INDEX.items, { query: 'supercalifragilistic' });
  assert.strictEqual(items.length, 0);
  assert.strictEqual(orFallback, false);
});
