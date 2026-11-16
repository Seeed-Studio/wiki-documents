'use strict';

/**
 * Focused tests for the per-locale reComputer FAQ search index:
 *   - build-time extraction from English + synthetic translated (zh-CN)
 *     FAQ fixture Markdown into a localized index
 *   - stable FAQ id/product/domain keys, SKU, anchors and page slug preserved
 *   - locale-aware result hrefs (baseUrl /, /cn/, /ja/, /es/, /pt-br/)
 *   - no English JSON import in the FaqExplorer component
 *   - MDX text slots for UI chrome stay translatable
 *   - the reComputer index stays isolated from the reSpeaker index
 */

const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const fs = require('node:fs');

const plugin = require(path.join(__dirname, '..', '..', '..', 'plugins', 'recomputer-faq-index', 'index.js'));
const {
  buildLocaleFaqIndex,
  deriveProductLabel,
  joinBaseUrl,
  resolveProductKey,
  PRODUCT_ORDER,
  DOMAIN_ORDER,
} = require(path.join(__dirname, '..', '..', '..', 'plugins', 'recomputer-faq-index', 'lib', 'faq-index.js'));

const REPO_ROOT = path.join(__dirname, '..', '..', '..');
const FIXTURES = path.join(__dirname, 'fixtures', 'recomputer-faq-index');
const FIXTURE_MANIFEST = path.join(FIXTURES, 'manifests', 'approved_faq_manifest.json');

const buildFixture = (locale, baseUrl, extra = {}) =>
  buildLocaleFaqIndex({
    siteDir: path.join(FIXTURES, locale),
    locale,
    baseUrl,
    manifestPath: FIXTURE_MANIFEST,
    ...extra,
  });

/* ------------------------------------------------------------------ */

test('extraction: English fixture produces a localized index with stable keys and anchors', () => {
  const index = buildFixture('en', '/');
  assert.strictEqual(index.artifactType, 'recomputer_faq_search_index');
  assert.strictEqual(index.locale, 'en');
  assert.deepStrictEqual(index.products, [{ key: 'recomputer_rk', label: 'reComputer RK' }]);
  assert.deepStrictEqual(index.domains, [
    { key: 'documentation_usage', label: 'Documentation & Usage' },
    { key: 'hardware_interfaces', label: 'Hardware & Interfaces' },
  ]);
  assert.strictEqual(index.items.length, 2);

  const [nvme, npu] = index.items;
  // FAQ id === explicit heading anchor; page slug from frontmatter.
  assert.strictEqual(nvme.id, 'rk3576_nvme_boot');
  assert.strictEqual(npu.id, 'rk_npu_device_paths');
  assert.deepStrictEqual(
    index.items.map((i) => i.id),
    ['rk3576_nvme_boot', 'rk_npu_device_paths'],
  );
  // The URL fragment still uses the stable anchor, not the snake_case id.
  assert.ok(nvme.url.endsWith('#rk3576-nvme-boot'));

  // Visible fields come from the English Markdown.
  assert.strictEqual(nvme.question, 'Can the reComputer RK3576 boot the system from an M.2 NVMe SSD?');
  assert.strictEqual(
    nvme.summary,
    'Yes. The engineers confirmed that the reComputer RK3576 supports installing and booting the system from an M.2 NVMe SSD.',
  );
  assert.strictEqual(nvme.productLabel, 'reComputer RK');

  // Domain keys come from H2 anchors; localized label from the H2 text.
  assert.strictEqual(nvme.primaryDomain, 'documentation_usage');
  assert.deepStrictEqual(nvme.domains, ['documentation_usage', 'hardware_interfaces']);
  assert.strictEqual(npu.primaryDomain, 'hardware_interfaces');

  // Stable machine metadata (SKU/keywords) preserved from the manifest.
  assert.deepStrictEqual(npu.skus, ['100000000']);
  assert.deepStrictEqual(npu.keywords, ['reComputer RK', 'NPU', 'renderD129']);
  assert.deepStrictEqual(nvme.skus, []);

  // Verified date extracted from the bold "Last verified" metadata line.
  assert.strictEqual(nvme.lastVerifiedAt, '2026-11-01');
  assert.strictEqual(npu.lastVerifiedAt, '2026-11-01');

  // English baseUrl "/" yields the same href shape as before.
  assert.strictEqual(nvme.url, '/recomputer_rk_faq#rk3576-nvme-boot');
  assert.strictEqual(npu.url, '/recomputer_rk_faq#npu-device-paths');
});

test('extraction: translated (zh-CN) fixture localizes visible fields and keeps machine metadata stable', () => {
  const index = buildFixture('zh-CN', '/cn/');
  assert.strictEqual(index.locale, 'zh-CN');
  assert.strictEqual(index.baseUrl, '/cn/');
  // Prefixed file name cn_recomputer_rk_faq.md resolves to the same product key.
  assert.deepStrictEqual(index.products, [{ key: 'recomputer_rk', label: 'reComputer RK' }]);
  assert.deepStrictEqual(index.domains, [
    { key: 'documentation_usage', label: '文档与使用' },
    { key: 'hardware_interfaces', label: '硬件现象' },
  ]);
  assert.strictEqual(index.items.length, 2);

  const [nvme, npu] = index.items;
  // FAQ ids / anchors / product / domain keys unchanged.
  assert.deepStrictEqual(
    index.items.map((i) => i.id),
    ['rk3576_nvme_boot', 'rk_npu_device_paths'],
  );
  assert.ok(nvme.url.endsWith('#rk3576-nvme-boot'), 'anchor fragment preserved');
  assert.ok(npu.url.endsWith('#npu-device-paths'), 'anchor fragment preserved');
  assert.strictEqual(nvme.product, 'recomputer_rk');
  assert.strictEqual(nvme.primaryDomain, 'documentation_usage');
  assert.deepStrictEqual(nvme.domains, ['documentation_usage', 'hardware_interfaces']);

  // Visible fields localized from the zh-CN Markdown.
  assert.strictEqual(nvme.question, 'reComputer RK3576 能否从 M.2 NVMe SSD 启动系统？');
  assert.strictEqual(
    nvme.summary,
    '可以。工程师确认 reComputer RK3576 支持从 M.2 NVMe SSD 安装并启动系统。',
  );
  assert.strictEqual(nvme.productLabel, 'reComputer RK');
  // SKU/keywords still preserved (locale-independent).
  assert.deepStrictEqual(npu.skus, ['100000000']);
  assert.strictEqual(npu.lastVerifiedAt, '2026-11-01');

  // Locale-aware href: result stays inside /cn/.
  assert.strictEqual(nvme.url, '/cn/recomputer_rk_faq#rk3576-nvme-boot');
  assert.strictEqual(npu.url, '/cn/recomputer_rk_faq#npu-device-paths');
});

test('baseUrl: locale result hrefs respect every site baseUrl without double slashes', () => {
  const cases = [
    ['/', '/recomputer_rk_faq', 'rk3576-nvme-boot', '/recomputer_rk_faq#rk3576-nvme-boot'],
    ['/cn/', '/recomputer_rk_faq', 'rk3576-nvme-boot', '/cn/recomputer_rk_faq#rk3576-nvme-boot'],
    ['/ja/', '/recomputer_rk_faq', 'rk3576-nvme-boot', '/ja/recomputer_rk_faq#rk3576-nvme-boot'],
    ['/es/', '/recomputer_rk_faq', 'rk3576-nvme-boot', '/es/recomputer_rk_faq#rk3576-nvme-boot'],
    ['/pt-br/', '/recomputer_rk_faq', 'rk3576-nvme-boot', '/pt-br/recomputer_rk_faq#rk3576-nvme-boot'],
  ];
  for (const [baseUrl, slug, anchor, expected] of cases) {
    assert.strictEqual(joinBaseUrl(baseUrl, slug, anchor), expected);
  }
  // Building the index with each baseUrl produces matching item hrefs.
  for (const locale of ['en', 'zh-CN', 'ja', 'es', 'pt-BR']) {
    const baseUrl =
      locale === 'en' ? '/' : locale === 'zh-CN' ? '/cn/' : locale === 'ja' ? '/ja/' : locale === 'es' ? '/es/' : '/pt-br/';
    const index = buildFixture(locale === 'en' ? 'en' : 'zh-CN', baseUrl);
    for (const item of index.items) {
      assert.ok(item.url.startsWith(`${baseUrl}recomputer_rk_faq#`), `${locale}: ${item.url}`);
      assert.ok(!item.url.includes('//'), `${locale}: double slash in ${item.url}`);
    }
  }
});

test('extraction: locale prefix handling for every site', () => {
  assert.strictEqual(resolveProductKey('recomputer_rk_faq.md', ''), 'recomputer_rk');
  assert.strictEqual(resolveProductKey('cn_recomputer_rk_faq.md', 'cn_'), 'recomputer_rk');
  assert.strictEqual(resolveProductKey('ja_recomputer_rk_faq.md', 'ja_'), 'recomputer_rk');
  assert.strictEqual(resolveProductKey('es_recomputer_rk_faq.md', 'es_'), 'recomputer_rk');
  assert.strictEqual(resolveProductKey('pt_recomputer_rk_faq.md', 'pt_'), 'recomputer_rk');
  assert.strictEqual(resolveProductKey('cn_recomputer_faq.mdx', 'cn_'), null); // center page is skipped
  assert.strictEqual(resolveProductKey('unrelated_guide.md', ''), null);
  // A reSpeaker product page is not part of this family.
  assert.strictEqual(resolveProductKey('respeaker_clip_faq.md', ''), null);
});

test('extraction: localized product label derivation for all five locales', () => {
  assert.strictEqual(deriveProductLabel('reComputer RK FAQ', 'en'), 'reComputer RK');
  assert.strictEqual(deriveProductLabel('reComputer RK 常见问题解答', 'zh-CN'), 'reComputer RK');
  assert.strictEqual(deriveProductLabel('reComputer RK よくある質問', 'ja'), 'reComputer RK');
  assert.strictEqual(deriveProductLabel('Preguntas frecuentes de reComputer RK', 'es'), 'reComputer RK');
  assert.strictEqual(deriveProductLabel('Perguntas frequentes do reComputer RK', 'pt-BR'), 'reComputer RK');
});

test('extraction: unanchored headings are ignored, anchors are required for index items', () => {
  const index = buildFixture('en', '/');
  for (const item of index.items) {
    assert.ok(item.url.includes('#'), 'every item must carry an explicit anchor');
    assert.ok(item.id, 'every item must carry a stable id');
  }
});

test('plugin ABI: loadContent builds the index and contentLoaded publishes it as global data', async () => {
  let captured = null;
  const instance = plugin(
    { siteDir: path.join(FIXTURES, 'en'), siteConfig: { baseUrl: '/' } },
    { locale: 'en', manifestPath: FIXTURE_MANIFEST },
  );
  assert.strictEqual(instance.name, 'recomputer-faq-index');
  const content = await instance.loadContent();
  assert.strictEqual(content.artifactType, 'recomputer_faq_search_index');
  assert.strictEqual(content.items.length, 2);
  instance.contentLoaded({
    content,
    actions: { setGlobalData: (value) => { captured = value; } },
  });
  assert.strictEqual(captured, content);
});

test('no static data import: FaqExplorer consumes plugin global data only', () => {
  const source = fs.readFileSync(path.join(REPO_ROOT, 'src', 'components', 'FaqExplorer', 'index.tsx'), 'utf8');
  assert.ok(!source.includes('@site/src/data'), 'FaqExplorer must not import from src/data');
  assert.ok(source.includes('usePluginData(source)'), 'FaqExplorer must read the plugin global data');
  // The reSpeaker FAQ center keeps the default data source.
  assert.ok(
    source.includes("source = 'respeaker-faq-index'"),
    'the reSpeaker FAQ index must stay the default data source',
  );
});

test('UI chrome: FAQ Center MDX declares a data-slot for every UI string with English defaults', () => {
  const component = fs.readFileSync(path.join(REPO_ROOT, 'src', 'components', 'FaqExplorer', 'index.tsx'), 'utf8');
  const defaultsBlock = component.match(/const DEFAULT_UI = \{([\s\S]*?)\n\} as const;/);
  assert.ok(defaultsBlock, 'DEFAULT_UI block must exist');
  const defaultKeys = [...defaultsBlock[1].matchAll(/^\s{2}([a-zA-Z0-9]+):/gm)].map((m) => m[1]);
  assert.ok(defaultKeys.length >= 15, `expected many UI strings, got ${defaultKeys.length}`);

  const center = fs.readFileSync(
    path.join(REPO_ROOT, 'sites/en/docs/FAQ/reComputer/recomputer_faq.mdx'),
    'utf8',
  );
  const slotKeys = [...center.matchAll(/data-slot="([a-zA-Z0-9]+)"/g)].map((m) => m[1]);
  assert.deepStrictEqual(
    [...slotKeys].sort(),
    [...defaultKeys].sort(),
    'the reComputer FAQ Center must provide a translatable slot for every component UI string',
  );
});

test('isolation: the reComputer FAQ center uses its own index source', () => {
  const center = fs.readFileSync(
    path.join(REPO_ROOT, 'sites/en/docs/FAQ/reComputer/recomputer_faq.mdx'),
    'utf8',
  );
  assert.ok(center.includes('source="recomputer-faq-index"'));
  assert.ok(!center.includes('respeaker-faq-index'));
});

test('isolation: the reSpeaker FAQ center keeps its default index source', () => {
  const center = fs.readFileSync(
    path.join(REPO_ROOT, 'sites/en/docs/FAQ/respeaker/respeaker_faq.mdx'),
    'utf8',
  );
  assert.ok(!center.includes('recomputer-faq-index'), 'the reSpeaker center must not switch index');
});

test('isolation: the two product families never share index items', () => {
  const recomputer = buildLocaleFaqIndex({
    siteDir: path.join(REPO_ROOT, 'sites', 'en'),
    locale: 'en',
    baseUrl: '/',
  });
  const respeaker = buildLocaleFaqIndex({
    siteDir: path.join(REPO_ROOT, 'sites', 'en'),
    locale: 'en',
    baseUrl: '/',
    faqDir: path.join(REPO_ROOT, 'sites', 'en', 'docs', 'FAQ', 'respeaker'),
  });
  const recomputerIds = new Set(recomputer.items.map((i) => i.id));
  for (const item of respeaker.items) {
    assert.ok(!recomputerIds.has(item.id), `index item ${item.id} leaked between product families`);
  }
  const allowed = new Set(PRODUCT_ORDER);
  for (const item of recomputer.items) {
    assert.ok(allowed.has(item.product), `index item ${item.id} belongs to unknown product ${item.product}`);
  }
});

test('translation contract: explicit FAQ anchors and UI placeholders are protected', () => {
  for (const script of ['translate.js', 'translate_openrouter.js']) {
    const source = fs.readFileSync(path.join(REPO_ROOT, '.github', 'scripts', 'translation', script), 'utf8');
    assert.ok(source.includes('显式自定义锚点'), `${script}: explicit heading anchors must be protected`);
    assert.ok(source.includes('%count%'), `${script}: FAQ UI placeholders must be protected`);
  }
});

test('stable metadata tables mirror the publication pipeline', () => {
  // Product keys in canonical order with the same English file names.
  assert.deepStrictEqual(PRODUCT_ORDER, ['recomputer_rk', 'recomputer_industrial_rk', 'recomputer_rk_module']);
  // Domain anchors used for key resolution.
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
