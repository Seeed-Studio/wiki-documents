# respeaker-faq-index (Docusaurus plugin)

Build-time, per-locale ReSpeaker FAQ search index for the FAQ Center.

## Why

`FaqExplorer` used to import the single English `src/data/respeaker_faq_index.json`,
so every locale site searched English data. This plugin removes that runtime
dependency: each site build reads the **current site's** translated FAQ docs
(`docs/FAQ/respeaker/*.md`, filenames with `cn_` / `ja_` / `es_` / `pt_`
prefixes) and exposes a localized index through Docusaurus plugin global data.

No locale JSON needs to be translated or committed.

## How it works

- `index.js` — Docusaurus plugin factory, registered in every site config
  (see `plugins` in `sites/*/docusaurus.config.js`):

  ```js
  [
    path.resolve(__dirname, '../../plugins/respeaker-faq-index'),
    { locale: 'en' }, // or zh-CN / ja / es / pt-BR
  ],
  ```

- `lib/faq-index.js` — pure extraction (framework-free, unit-tested):

  - scans `<siteDir>/docs/FAQ/respeaker/*.md`
  - resolves the stable product key from the file name (language prefix
    stripped), and the stable domain key from the explicit H2/H3 `{#anchor}`
    attributes
  - derives `question` / `summary` / `productLabel` / domain labels from that
    locale's Markdown (localized labels are read from the page H1/H2, safe for
    translated "常见问题" / "よくある質問" / "Preguntas frecuentes" titles)
  - preserves stable machine metadata (FAQ id, anchors, slug, SKU, keywords)
    from the curated manifest `scripts/respeaker-faq/manifests/approved_faq_manifest.json`
  - builds result hrefs with the site `baseUrl` (`/`, `/cn/`, `/ja/`, `/es/`,
    `/pt-br/`), so a search stays inside the current locale

- `FaqExplorer` consumes the data via
  `usePluginData('respeaker-faq-index')` and never imports the English JSON.

## UI chrome localization

The FAQ Center page passes visible text slots to `<FaqExplorer>`:

```mdx
<FaqExplorer>
  <span data-slot="searchLabel">Search</span>
  <span data-slot="searchPlaceholder">Search by product, SKU, error or keyword…</span>
  ...
</FaqExplorer>
```

The `data-slot` attribute is machine metadata (stable, not translated), the
text between the tags is visible text (translated by the regular MD/MDX
translation workflow). Unknown or missing slots fall back to the English
defaults in `FaqExplorer`.
