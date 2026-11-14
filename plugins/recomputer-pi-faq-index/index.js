'use strict';

/**
 * Docusaurus plugin: per-locale reComputer Raspberry Pi FAQ search index.
 *
 * Registered in the site config. At build time it reads the current site's
 * docs/FAQ/reComputer product FAQ Markdown for the Raspberry Pi lines only
 * (including translated files with language prefixes) and exposes the
 * localized search index through plugin global data, consumed by the
 * FaqExplorer component via usePluginData('recomputer-pi-faq-index').
 *
 * This plugin is independent from plugins/recomputer-faq-index: it publishes
 * its own global data under its own key and only indexes the Raspberry Pi
 * product pages, so the two FAQ centers never share search results.
 *
 * Options:
 *   locale       - site locale key: en | zh-CN | ja | es | pt-BR (default en)
 *   prefix       - filename language prefix override (default derived from
 *                  locale: cn_ / ja_ / es_ / pt_)
 *   manifestPath - curated manifest path override (mainly for tests)
 */

const { buildLocaleFaqIndex } = require('./lib/faq-index');

module.exports = function recomputerPiFaqIndexPlugin(context, options = {}) {
  const { locale = 'en', prefix, manifestPath } = options;
  return {
    name: 'recomputer-pi-faq-index',
    async loadContent() {
      return buildLocaleFaqIndex({
        siteDir: context.siteDir,
        locale,
        prefix,
        baseUrl: context.siteConfig ? context.siteConfig.baseUrl || '/' : '/',
        manifestPath,
      });
    },
    contentLoaded({ content, actions }) {
      if (content) actions.setGlobalData(content);
    },
  };
};
