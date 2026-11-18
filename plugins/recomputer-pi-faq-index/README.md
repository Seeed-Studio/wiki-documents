# recomputer-pi-faq-index

Per-locale search index for the **reComputer Raspberry Pi FAQ Center**
(`/recomputer_pi_faq`).

## Why

The Raspberry Pi lines (reComputer R1000 / R1100, reComputer AI and
Industrial R2000, reComputer Industrial R2x, reTerminal and reTerminal DM) are
published from the same FAQ pipeline as the Rockchip lines, but they are a
different product family with their own FAQ Center. Before this plugin every
locale searched English data; now each site build reads its own translated
`docs/FAQ/reComputer/*.md` and derives the index from that locale's Markdown.

## Isolation from `recomputer-faq-index`

Isolation is **structural**, not flag-based:

- `lib/faq-index.js` lists only the four Raspberry Pi product file names in its
  `PRODUCTS` table.
- `resolveProductKey()` matches a file name against that table only, so the
  Rockchip FAQ pages that live in the same `docs/FAQ/reComputer/` directory are
  ignored here.
- The Rockchip plugin has the mirror-image table and ignores the Raspberry Pi
  pages.
- Each plugin publishes its own global-data key, so `FaqExplorer` can render
  two independent centers in the same site.

Neither plugin has to know about the other, and adding a product line to one
family never leaks into the other family's search results.

## Registration

```js
// sites/en/docusaurus.config.js
plugins: [
  [
    path.resolve(__dirname, '../../plugins/recomputer-pi-faq-index'),
    { locale: 'en' },
  ],
]
```

## What the plugin does

- reads `docs/FAQ/reComputer/*.md` of the **current** site (including
  translated files with a `cn_` / `ja_` / `es_` / `pt_` prefix);
- derives the visible fields (question, summary, product label, domain label)
  from that locale's Markdown;
- preserves stable machine metadata (FAQ id, product / domain keys, SKU,
  keywords, anchors, page slug) from the curated manifest
  `scripts/recomputer-faq/manifests/approved_faq_manifest.json`;
- builds baseUrl-aware result hrefs so a locale result stays inside its locale.

`FaqExplorer` consumes the result through `usePluginData('recomputer-pi-faq-index')`
and never imports an English JSON.
