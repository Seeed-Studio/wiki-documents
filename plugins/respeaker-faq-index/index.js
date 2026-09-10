'use strict';

/**
 * Docusaurus plugin: per-locale ReSpeaker FAQ search index.
 *
 * Registered in every site config (en, zh-CN, ja, es, pt-BR). At build time it
 * reads the current site's docs/FAQ/respeaker product FAQ Markdown (including
 * translated files with language prefixes) and exposes the localized search
 * index through plugin global data, consumed by the FaqExplorer component via
 * usePluginData('respeaker-faq-index').
 *
 * Options:
 *   locale       - site locale key: en | zh-CN | ja | es | pt-BR (default en)
 *   prefix       - filename language prefix override (default derived from
 *                  locale: cn_ / ja_ / es_ / pt_)
 *   manifestPath - curated manifest path override (mainly for tests)
 */

const { buildLocaleFaqIndex } = require('./lib/faq-index');

module.exports = function respeakerFaqIndexPlugin(context, options = {}) {
  const { locale = 'en', prefix, manifestPath } = options;
  return {
    name: 'respeaker-faq-index',
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
