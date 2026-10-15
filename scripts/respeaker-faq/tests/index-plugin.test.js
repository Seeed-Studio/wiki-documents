'use strict';

/**
 * Focused tests for the per-locale ReSpeaker FAQ search index:
 *   - build-time extraction from English + synthetic translated (zh-CN)
 *     FAQ fixture Markdown into a localized index
 *   - stable FAQ id/product/domain keys, SKU, anchors and page slug preserved
 *   - locale-aware result hrefs (baseUrl /, /cn/, /ja/, /es/, /pt-br/)
 *   - no English JSON import in the FaqExplorer component
 *   - MDX text slots for UI chrome stay translatable
 */

const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const fs = require('node:fs');

const plugin = require(path.join(__dirname, '..', '..', '..', 'plugins', 'respeaker-faq-index', 'index.js'));
const {
  buildLocaleFaqIndex,
  deriveProductLabel,
  joinBaseUrl,
  resolveProductKey,
  PRODUCT_ORDER,
  DOMAIN_ORDER,
} = require(path.join(__dirname, '..', '..', '..', 'plugins', 'respeaker-faq-index', 'lib', 'faq-index.js'));

const REPO_ROOT = path.join(__dirname, '..', '..', '..');
const FIXTURES = path.join(__dirname, 'fixtures', 'respeaker-faq-index');
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
  assert.strictEqual(index.artifactType, 'respeaker_faq_search_index');
  assert.strictEqual(index.locale, 'en');
  assert.deepStrictEqual(index.products, [{ key: 'flex_xvf3800', label: 'reSpeaker Flex' }]);
  assert.deepStrictEqual(index.domains, [
    { key: 'documentation_usage', label: 'Documentation & Usage' },
    { key: 'hardware', label: 'Hardware Issues' },
  ]);
  assert.strictEqual(index.items.length, 2);

  const [cad, fpc] = index.items;
  // FAQ id === explicit heading anchor; page slug from frontmatter.
  assert.strictEqual(cad.id, 'flex_mechanical_cad_files');
  assert.strictEqual(fpc.id, 'flex_fpc_cable_spec');
  assert.deepStrictEqual(
    index.items.map((i) => i.id),
    ['flex_mechanical_cad_files', 'flex_fpc_cable_spec'],
  );
  // The URL fragment still uses the stable anchor, not the snake_case id.
  assert.ok(cad.url.endsWith('#mechanical-cad-files'));

  // Visible fields come from the English Markdown.
  assert.strictEqual(cad.question, 'Where can I download ReSpeaker Flex mechanical files?');
  assert.strictEqual(
    cad.summary,
    'Use the official Flex Resources section. It publishes DXF and STEP files for the Circular-4 and Linear-4 arrays.',
  );
  assert.strictEqual(cad.productLabel, 'reSpeaker Flex');

  // Domain keys come from H2 anchors; localized label from the H2 text.
  assert.strictEqual(cad.primaryDomain, 'documentation_usage');
  assert.deepStrictEqual(cad.domains, ['documentation_usage', 'product_business']);
  assert.strictEqual(fpc.primaryDomain, 'hardware');

  // Stable machine metadata (SKU/keywords) preserved from the manifest.
  assert.deepStrictEqual(cad.skus, ['100005504', '100099135']);
  assert.deepStrictEqual(cad.keywords, ['mechanical files', 'CAD', 'DXF', 'STEP']);
  assert.deepStrictEqual(fpc.skus, []);

  // Verified date extracted from the bold "Last verified" metadata line.
  assert.strictEqual(cad.lastVerifiedAt, '2026-08-31');
  assert.strictEqual(fpc.lastVerifiedAt, '2026-09-01');

  // English baseUrl "/" yields the same href shape as before.
  assert.strictEqual(cad.url, '/respeaker_flex_faq#mechanical-cad-files');
  assert.strictEqual(fpc.url, '/respeaker_flex_faq#fpc-cable-spec');
});

test('extraction: translated (zh-CN) fixture localizes visible fields and keeps machine metadata stable', () => {
  const index = buildFixture('zh-CN', '/cn/');
  assert.strictEqual(index.locale, 'zh-CN');
  assert.strictEqual(index.baseUrl, '/cn/');
  // Prefixed file name cn_flex_xvf3800_faq.md resolves to the same product key.
  assert.deepStrictEqual(index.products, [{ key: 'flex_xvf3800', label: 'reSpeaker Flex' }]);
  assert.deepStrictEqual(index.domains, [
    { key: 'documentation_usage', label: '文档与使用' },
    { key: 'hardware', label: '硬件问题' },
  ]);
  assert.strictEqual(index.items.length, 2);

  const [cad, fpc] = index.items;
  // FAQ ids / anchors / product / domain keys unchanged.
  assert.deepStrictEqual(
    index.items.map((i) => i.id),
    ['flex_mechanical_cad_files', 'flex_fpc_cable_spec'],
  );
  assert.ok(cad.url.endsWith('#mechanical-cad-files'), 'anchor fragment preserved');
  assert.ok(fpc.url.endsWith('#fpc-cable-spec'), 'anchor fragment preserved');
  // The URL fragment still uses the stable anchor, not the snake_case id.
  assert.ok(cad.url.endsWith('#mechanical-cad-files'));
  assert.strictEqual(cad.product, 'flex_xvf3800');
  assert.strictEqual(cad.primaryDomain, 'documentation_usage');
  assert.deepStrictEqual(cad.domains, ['documentation_usage', 'product_business']);

  // Visible fields localized from the zh-CN Markdown.
  assert.strictEqual(cad.question, '在哪里可以下载 ReSpeaker Flex 的机械设计文件？');
  assert.strictEqual(cad.summary, '请使用官方的 Flex 资源页面，其中发布了 Circular-4 与 Linear-4 阵列的 DXF 和 STEP 文件。');
  assert.strictEqual(cad.productLabel, 'reSpeaker Flex');
  // SKU/keywords still preserved (locale-independent).
  assert.deepStrictEqual(cad.skus, ['100005504', '100099135']);
  assert.strictEqual(cad.lastVerifiedAt, '2026-08-31');

  // Locale-aware href: result stays inside /cn/.
  assert.strictEqual(cad.url, '/cn/respeaker_flex_faq#mechanical-cad-files');
  assert.strictEqual(fpc.url, '/cn/respeaker_flex_faq#fpc-cable-spec');
});

test('baseUrl: locale result hrefs respect every site baseUrl without double slashes', () => {
  const cases = [
    ['/', '/respeaker_flex_faq', 'mechanical-cad-files', '/respeaker_flex_faq#mechanical-cad-files'],
    ['/cn/', '/respeaker_flex_faq', 'mechanical-cad-files', '/cn/respeaker_flex_faq#mechanical-cad-files'],
    ['/ja/', '/respeaker_flex_faq', 'mechanical-cad-files', '/ja/respeaker_flex_faq#mechanical-cad-files'],
    ['/es/', '/respeaker_flex_faq', 'mechanical-cad-files', '/es/respeaker_flex_faq#mechanical-cad-files'],
    ['/pt-br/', '/respeaker_flex_faq', 'mechanical-cad-files', '/pt-br/respeaker_flex_faq#mechanical-cad-files'],
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
      assert.ok(item.url.startsWith(`${baseUrl}respeaker_flex_faq#`), `${locale}: ${item.url}`);
      assert.ok(!item.url.includes('//'), `${locale}: double slash in ${item.url}`);
    }
  }
});

test('extraction: locale prefix handling for every site', () => {
  assert.strictEqual(resolveProductKey('flex_xvf3800_faq.md', ''), 'flex_xvf3800');
  assert.strictEqual(resolveProductKey('cn_flex_xvf3800_faq.md', 'cn_'), 'flex_xvf3800');
  assert.strictEqual(resolveProductKey('ja_flex_xvf3800_faq.md', 'ja_'), 'flex_xvf3800');
  assert.strictEqual(resolveProductKey('es_flex_xvf3800_faq.md', 'es_'), 'flex_xvf3800');
  assert.strictEqual(resolveProductKey('pt_flex_xvf3800_faq.md', 'pt_'), 'flex_xvf3800');
  assert.strictEqual(resolveProductKey('cn_respeaker_faq.mdx', 'cn_'), null); // center page is skipped
  assert.strictEqual(resolveProductKey('unrelated_guide.md', ''), null);
});

test('extraction: localized product label derivation for all five locales', () => {
  assert.strictEqual(deriveProductLabel('reSpeaker Flex FAQ', 'en'), 'reSpeaker Flex');
  assert.strictEqual(deriveProductLabel('reSpeaker Flex 常见问题', 'zh-CN'), 'reSpeaker Flex');
  assert.strictEqual(deriveProductLabel('reSpeaker Flex よくある質問', 'ja'), 'reSpeaker Flex');
  assert.strictEqual(deriveProductLabel('Preguntas frecuentes de reSpeaker Flex', 'es'), 'reSpeaker Flex');
  assert.strictEqual(deriveProductLabel('Perguntas frequentes do reSpeaker Flex', 'pt-BR'), 'reSpeaker Flex');
});

test('extraction: unanchored headings are ignored, anchors are required for index items', () => {
  const index = buildFixture('en', '/');
  for (const item of index.items) {
    assert.match(item.id, /^[a-z0-9_-]+$/);
  }
  // The "Tech Support" H2 (no anchor) must not become a domain.
  assert.deepStrictEqual(
    index.domains.map((d) => d.key),
    ['documentation_usage', 'hardware'],
  );
});

test('plugin ABI: loadContent builds the index and contentLoaded publishes it as global data', async () => {
  const factory = plugin(
    { siteDir: path.join(FIXTURES, 'zh-CN'), siteConfig: { baseUrl: '/cn/' } },
    { locale: 'zh-CN', manifestPath: FIXTURE_MANIFEST },
  );
  assert.strictEqual(factory.name, 'respeaker-faq-index');
  const content = await factory.loadContent();
  assert.strictEqual(content.locale, 'zh-CN');
  assert.strictEqual(content.items.length, 2);

  const globalData = [];
  factory.contentLoaded({
    content,
    actions: { setGlobalData: (data) => globalData.push(data) },
  });
  assert.strictEqual(globalData.length, 1);
  assert.strictEqual(globalData[0], content);
});

test('no static data import: FaqExplorer consumes plugin global data only', () => {
  const source = fs.readFileSync(path.join(REPO_ROOT, 'src', 'components', 'FaqExplorer', 'index.tsx'), 'utf8');
  assert.ok(!source.includes("@site/src/data"), 'FaqExplorer must not import from src/data');
  assert.ok(source.includes("usePluginData('respeaker-faq-index')"), 'FaqExplorer must read the plugin global data');
});

test('UI chrome: FAQ Center MDX declares a data-slot for every UI string with English defaults', () => {
  const component = fs.readFileSync(path.join(REPO_ROOT, 'src', 'components', 'FaqExplorer', 'index.tsx'), 'utf8');
  const defaultsBlock = component.match(/const DEFAULT_UI = \{([\s\S]*?)\n\} as const;/);
  assert.ok(defaultsBlock, 'DEFAULT_UI block must exist');
  const defaultKeys = [...defaultsBlock[1].matchAll(/^\s{2}([a-zA-Z0-9]+):/gm)].map((m) => m[1]);
  assert.ok(defaultKeys.length >= 15, `expected many UI strings, got ${defaultKeys.length}`);

  const center = fs.readFileSync(path.join(REPO_ROOT, 'sites', 'en', 'docs', 'FAQ', 'respeaker', 'respeaker_faq.mdx'), 'utf8');
  const slotKeys = [...center.matchAll(/data-slot="([a-zA-Z0-9]+)"/g)].map((m) => m[1]);
  assert.deepStrictEqual(
    [...slotKeys].sort(),
    [...defaultKeys].sort(),
    'the FAQ Center must provide a translatable slot for every component UI string',
  );
});

test('translation contract: explicit FAQ anchors and UI placeholders are protected', () => {
  for (const script of ['translate.js', 'translate_openrouter.js']) {
    const source = fs.readFileSync(path.join(REPO_ROOT, '.github', 'scripts', script), 'utf8');
    assert.ok(source.includes('显式自定义锚点'), `${script}: explicit heading anchors must be protected`);
    assert.ok(source.includes('%count%'), `${script}: FAQ UI placeholders must be protected`);
  }
});

test('stable metadata tables mirror the publication pipeline', () => {
  // Product keys in canonical order with the same English file names.
  assert.deepStrictEqual(PRODUCT_ORDER, [
    'xvf3800_usb_4_mic',
    'flex_xvf3800',
    'respeaker_lite',
    'xvf3000',
    'respeaker_2_mics_pi_hat',
    'respeaker_clip',
  ]);
  // Domain anchors used for key resolution.
  const anchors = DOMAIN_ORDER.map((d) => d.anchor);
  assert.deepStrictEqual(anchors, [
    'documentation-and-usage',
    'connectivity-and-detection',
    'firmware-and-software',
    'audio-issues',
    'algorithm-tuning',
    'hardware-issues',
    'product-and-business',
  ]);
});
