'use strict';

/**
 * Focused tests for the per-locale reComputer Raspberry Pi FAQ search index:
 *   - build-time extraction from English + synthetic translated (zh-CN)
 *     Raspberry Pi fixture Markdown into a localized index
 *   - stable FAQ id/product/domain keys, SKU, anchors and page slug preserved
 *   - locale-aware result hrefs (baseUrl /, /cn/, /ja/, /es/, /pt-br/)
 *   - structural isolation from the Rockchip reComputer index
 *   - the Raspberry Pi FAQ center is wired to its own index source
 */

const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const fs = require('node:fs');

const plugin = require(path.join(__dirname, '..', '..', '..', 'plugins', 'recomputer-pi-faq-index', 'index.js'));
const {
  buildLocaleFaqIndex,
  deriveProductLabel,
  resolveProductKey,
  PRODUCT_ORDER,
  DOMAIN_ORDER,
} = require(path.join(__dirname, '..', '..', '..', 'plugins', 'recomputer-pi-faq-index', 'lib', 'faq-index.js'));
const {
  buildLocaleFaqIndex: buildLocaleRkFaqIndex,
} = require(path.join(__dirname, '..', '..', '..', 'plugins', 'recomputer-faq-index', 'lib', 'faq-index.js'));

const REPO_ROOT = path.join(__dirname, '..', '..', '..');
const FIXTURES = path.join(__dirname, 'fixtures', 'recomputer-pi-faq-index');
const FIXTURE_MANIFEST = path.join(FIXTURES, 'manifests', 'approved_faq_manifest.json');

const buildFixture = (locale, baseUrl) =>
  buildLocaleFaqIndex({
    siteDir: path.join(FIXTURES, locale),
    locale,
    baseUrl,
    manifestPath: FIXTURE_MANIFEST,
  });

/* ------------------------------------------------------------------ */

test('extraction: English fixture produces a localized index with stable keys and anchors', () => {
  const index = buildFixture('en', '/');
  assert.strictEqual(index.artifactType, 'recomputer_pi_faq_search_index');
  assert.strictEqual(index.locale, 'en');
  assert.deepStrictEqual(index.products, [
    { key: 'recomputer_r1000', label: 'reComputer R1000 and R1100' },
    { key: 'reterminal', label: 'reTerminal and reTerminal DM' },
  ]);
  assert.deepStrictEqual(index.domains, [
    { key: 'os_firmware', label: 'OS & Firmware' },
    { key: 'hardware_interfaces', label: 'Hardware & Interfaces' },
  ]);
  assert.strictEqual(index.items.length, 2);

  // Items follow PRODUCT_ORDER: recomputer_r1000 first, reterminal last.
  const [credentials, bridge] = index.items;
  assert.strictEqual(bridge.id, 'reterminal_default_bridge');
  assert.strictEqual(credentials.id, 'r1000_default_credentials');
  assert.ok(bridge.url.endsWith('#reterminal-bridge-overlay'));
  assert.strictEqual(bridge.question, 'Which device tree overlay enables the reTerminal bridge?');
  assert.strictEqual(
    bridge.summary,
    'The reTerminal bridge overlay is enabled with `dtoverlay=reTerminal-bridge`.',
  );
  assert.strictEqual(bridge.productLabel, 'reTerminal and reTerminal DM');
  assert.strictEqual(bridge.primaryDomain, 'hardware_interfaces');
  assert.deepStrictEqual(bridge.domains, ['hardware_interfaces', 'os_firmware']);
  assert.deepStrictEqual(bridge.skus, ['110070048']);
  assert.deepStrictEqual(credentials.skus, ['113991274']);
  assert.strictEqual(bridge.lastVerifiedAt, '2026-11-10');
  assert.strictEqual(bridge.url, '/reterminal_faq#reterminal-bridge-overlay');
  assert.strictEqual(credentials.url, '/recomputer_r1000_r1100_faq#r1000-default-credentials');
});

test('extraction: translated (zh-CN) fixture localizes visible fields and keeps machine metadata stable', () => {
  const index = buildFixture('zh-CN', '/cn/');
  assert.strictEqual(index.locale, 'zh-CN');
  assert.deepStrictEqual(index.products, [{ key: 'reterminal', label: 'reTerminal 与 reTerminal DM' }]);
  assert.deepStrictEqual(index.domains, [{ key: 'hardware_interfaces', label: '硬件现象' }]);
  assert.strictEqual(index.items.length, 1);

  const [bridge] = index.items;
  assert.strictEqual(bridge.id, 'reterminal_default_bridge');
  assert.strictEqual(bridge.question, '哪个设备树叠加层启用了 reTerminal 桥接？');
  assert.strictEqual(bridge.product, 'reterminal');
  assert.deepStrictEqual(bridge.skus, ['110070048']);
  assert.strictEqual(bridge.lastVerifiedAt, '2026-11-10');
  assert.strictEqual(bridge.url, '/cn/reterminal_faq#reterminal-bridge-overlay');
});

test('extraction: locale prefix handling for every site', () => {
  assert.strictEqual(resolveProductKey('reterminal_faq.md', ''), 'reterminal');
  assert.strictEqual(resolveProductKey('cn_reterminal_faq.md', 'cn_'), 'reterminal');
  assert.strictEqual(resolveProductKey('ja_recomputer_r1000_faq.md', 'ja_'), 'recomputer_r1000');
  assert.strictEqual(resolveProductKey('pt_recomputer_ai_r2000_faq.md', 'pt_'), 'recomputer_ai_r2000');
  assert.strictEqual(resolveProductKey('recomputer_industrial_r2x_faq.md', ''), 'recomputer_industrial_r2x');
  assert.strictEqual(resolveProductKey('recomputer_pi_faq.mdx', ''), null); // center page is skipped
  assert.strictEqual(resolveProductKey('unrelated_guide.md', ''), null);
  // A Rockchip product page is not part of this family.
  assert.strictEqual(resolveProductKey('recomputer_rk_faq.md', ''), null);
  assert.strictEqual(resolveProductKey('recomputer_rk_module_faq.md', ''), null);
});

test('extraction: localized product label derivation for all five locales', () => {
  assert.strictEqual(deriveProductLabel('reTerminal and reTerminal DM FAQ', 'en'), 'reTerminal and reTerminal DM');
  assert.strictEqual(deriveProductLabel('reTerminal 与 reTerminal DM 常见问题解答', 'zh-CN'), 'reTerminal 与 reTerminal DM');
  assert.strictEqual(deriveProductLabel('reTerminal よくある質問', 'ja'), 'reTerminal');
  assert.strictEqual(deriveProductLabel('Preguntas frecuentes de reTerminal', 'es'), 'reTerminal');
  assert.strictEqual(deriveProductLabel('Perguntas frequentes do reTerminal', 'pt-BR'), 'reTerminal');
});

test('plugin ABI: loadContent builds the index and contentLoaded publishes it as global data', async () => {
  let captured = null;
  const instance = plugin(
    { siteDir: path.join(FIXTURES, 'en'), siteConfig: { baseUrl: '/' } },
    { locale: 'en', manifestPath: FIXTURE_MANIFEST },
  );
  assert.strictEqual(instance.name, 'recomputer-pi-faq-index');
  const content = await instance.loadContent();
  assert.strictEqual(content.artifactType, 'recomputer_pi_faq_search_index');
  assert.strictEqual(content.items.length, 2);
  instance.contentLoaded({
    content,
    actions: { setGlobalData: (value) => { captured = value; } },
  });
  assert.strictEqual(captured, content);
});

test('isolation: the Raspberry Pi index never contains Rockchip items, and the reverse holds too', () => {
  const siteDir = path.join(REPO_ROOT, 'sites', 'en');
  const pi = buildLocaleFaqIndex({ siteDir, locale: 'en', baseUrl: '/' });
  const rk = buildLocaleRkFaqIndex({ siteDir, locale: 'en', baseUrl: '/' });

  const piIds = new Set(pi.items.map((i) => i.id));
  const rkIds = new Set(rk.items.map((i) => i.id));
  assert.ok(piIds.size > 0, 'the Raspberry Pi index must not be empty');
  assert.ok(rkIds.size > 0, 'the Rockchip index must not be empty');

  for (const item of pi.items) {
    assert.ok(!rkIds.has(item.id), `index item ${item.id} leaked into the Rockchip index`);
    assert.ok(PRODUCT_ORDER.includes(item.product), `${item.id} belongs to unknown product ${item.product}`);
  }
  for (const item of rk.items) {
    assert.ok(!piIds.has(item.id), `index item ${item.id} leaked into the Raspberry Pi index`);
  }
  // The two product sets are disjoint by construction.
  assert.strictEqual(piIds.size + rkIds.size, new Set([...piIds, ...rkIds]).size);
});

test('isolation: the Raspberry Pi FAQ center uses its own index source', () => {
  const center = fs.readFileSync(
    path.join(REPO_ROOT, 'sites/en/docs/FAQ/reComputer/recomputer_pi_faq.mdx'),
    'utf8',
  );
  assert.ok(center.includes('source="recomputer-pi-faq-index"'));
  assert.ok(!center.includes('source="recomputer-faq-index"'));
  assert.ok(!center.includes('respeaker-faq-index'));
});

test('isolation: the Rockchip FAQ center keeps the Rockchip index source', () => {
  const center = fs.readFileSync(
    path.join(REPO_ROOT, 'sites/en/docs/FAQ/reComputer/recomputer_faq.mdx'),
    'utf8',
  );
  assert.ok(center.includes('source="recomputer-faq-index"'));
  assert.ok(!center.includes('recomputer-pi-faq-index'));
});

test('UI chrome: the Raspberry Pi FAQ Center MDX declares a data-slot for every UI string', () => {
  const component = fs.readFileSync(path.join(REPO_ROOT, 'src', 'components', 'FaqExplorer', 'index.tsx'), 'utf8');
  const defaultsBlock = component.match(/const DEFAULT_UI = \{([\s\S]*?)\n\} as const;/);
  assert.ok(defaultsBlock, 'DEFAULT_UI block must exist');
  const defaultKeys = [...defaultsBlock[1].matchAll(/^\s{2}([a-zA-Z0-9]+):/gm)].map((m) => m[1]);

  const center = fs.readFileSync(
    path.join(REPO_ROOT, 'sites/en/docs/FAQ/reComputer/recomputer_pi_faq.mdx'),
    'utf8',
  );
  const slotKeys = [...center.matchAll(/data-slot="([a-zA-Z0-9]+)"/g)].map((m) => m[1]);
  assert.deepStrictEqual(
    [...slotKeys].sort(),
    [...defaultKeys].sort(),
    'the Raspberry Pi FAQ Center must provide a translatable slot for every component UI string',
  );
});

test('stable metadata tables mirror the publication pipeline', () => {
  assert.deepStrictEqual(PRODUCT_ORDER, [
    'recomputer_r1000',
    'recomputer_ai_r2000',
    'recomputer_industrial_r2x',
    'reterminal',
  ]);
  const anchors = DOMAIN_ORDER.map((d) => d.anchor);
  assert.deepStrictEqual(anchors, [
    'documentation-and-usage',
    'os-and-firmware',
    'connectivity-and-networking',
    'hardware-and-interfaces',
    'algorithm-tuning',
    'thermal-and-power',
    'product-and-service',
  ]);
});
