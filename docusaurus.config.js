// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seeed Studio Wiki',
  tagline: 'The IoT Hardware Development Documentation',
  url: 'https://c1ev0ps.github.io',
  baseUrl: '/docusaurus_wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Seeed Studio', // Usually your GitHub org/user name.
  projectName: 'docusaurus_wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en',  'fa'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
        calendar: 'persian',
        path: 'fa',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'Seeed Studio',
          src: 'https://statics3.seeedstudio.com/assets/img/common/logo_2018_horizontal.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'About',
            position: 'left',
            label: 'Tutorial',
          },
          {to: 'https://www.seeedstudio.com/blog/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/c1ev0ps/docusaurus_wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/About',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Form',
                href: 'https://forum.seeedstudio.com/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/QqMgVwHT3X',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/seeedstudio',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://www.seeedstudio.com/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Seeed Studio, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '8182LB8Y0D',
  
        // Public API key: it is safe to commit it
        apiKey: 'a2761291fdfe389c56720a86986d1952',
  
        indexName: 'w0x7ce_test',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      mermaid: {
        options: {
          maxTextSize: 50,
        },
      },
    }),
};

module.exports = config;
