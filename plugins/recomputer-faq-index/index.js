'use strict';

/**
 * Docusaurus plugin: per-locale reComputer FAQ search index.
 *
 * Registered in the site config. At build time it reads the current site's
 * docs/FAQ/reComputer product FAQ Markdown (including translated files with
 * language prefixes) and exposes the localized search index through plugin
 * global data, consumed by the FaqExplorer component via
 * usePluginData('recomputer-faq-index').
 *
 * This plugin is independent from plugins/respeaker-faq-index: both can be
 * registered in the same site and each publishes its own global data, so the
 * two product families never share search results.
 *
 * Options:
 *   locale       - site locale key: en | zh-CN | ja | es | pt-BR (default en)
 *   prefix       - filename language prefix override (default derived from
 *                  locale: cn_ / ja_ / es_ / pt_)
 *   manifestPath - curated manifest path override (mainly for tests)
 */

const { buildLocaleFaqIndex } = require('./lib/faq-index');

module.exports = function recomputerFaqIndexPlugin(context, options = {}) {
  const { locale = 'en', prefix, manifestPath } = options;
  return {
    name: 'recomputer-faq-index',
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
