// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Seeed Studio Wiki',
  tagline: 'The open documentation platform for Seeed Studio.',
  
  url: 'https://c1ev0ps.github.io',
  baseUrl: '/docusaurus_wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  scripts: [
    {
      src: 'https://viewer.altium.com/client/static/js/embed.js',
      async: true,
    },
  ],

  scripts: [
    // String format.
    // 'https://viewer.altium.com/client/static/js/embed.js',
    
    // Object format.
    {
      src: 'https://viewer.altium.com/client/static/js/embed.js',
      async: true,
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Seeed Studio', // Usually your GitHub org/user name.
  projectName: 'docusaurus_wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en',  'zh-CN'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {

          routeBasePath: '/',

          sidebarPath: require.resolve('./sidebars.js'),
          
          remarkPlugins: [math],
          rehypePlugins: [katex],

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editLocalizedFiles: false,
          editCurrentVersion: false,

          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],

          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          disableVersioning: false,
          includeCurrentVersion: true,
          lastVersion: undefined,

          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],

          editUrl:
            'https://github.com/c1ev0ps/docusaurus_wiki/edit/main/',
        },

        
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/c1ev0ps/docusaurus_wiki/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
    'docusaurus-plugin-image-zoom',
  ],
  
  themeConfig:
    
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({

      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        // https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom
        config: {}
      },

      giscus: {
        repo: 'c1ev0ps/docusaurus_wiki',
        repoId: 'R_kgDOIabZbQ',
        category: 'Q&A',
        categoryId: 'DIC_kwDOIabZbc4CSlHH',
        theme: 'light_high_contrast',
        darkTheme: 'dark_tritanopia'
      },

      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'Seeed Studio',
          src: 'https://statics3.seeedstudio.com/assets/img/common/logo_2018_horizontal.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'weekly_wiki',
            position: 'left',
            label: 'Product',
          },
          {
            type: 'doc',
            docId: 'SenseCAP/SenseCAP_Introdution',
            position: 'left',
            label: 'SenseCAP',
          },
          {
            type: 'doc',
            docId: 'Maker/Maker_Introduction',
            position: 'left',
            label: 'Maker',
          },

          {
          type: 'dropdown',
          label: 'SEEED',
          position: 'left',
          items: [
            {
              label: 'Bazaar',
              to: 'https://www.seeedstudio.com/',
            },
            {
              label: 'Fusion',
              to: 'https://www.seeedstudio.com/fusion.html',
            },
            {
              label: 'Service',
              to: 'https://www.seeedstudio.com/odm',
            },
            {
              label: 'Forum',
              to: 'https://forum.seeedstudio.com/',
            },
            {
              label: 'Solution',
              to: 'https://solution.seeedstudio.com/',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Ecosystem',
          position: 'left',
          items: [
            {
              label: 'Discord',
              to: 'https://discord.com/invite/QqMgVwHT3X',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/seeedstudio',
            },
            {
              label: 'Hackster',
              to: 'https://www.hackster.io/seeed',
            },
            {
              label: 'Youtube',
              to: 'http://www.youtube.com/c/SeeedStudioSZ',
            },
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/company/seeedstudio',
            },
          ],
        },

          {
            href: 'https://github.com/c1ev0ps/docusaurus_wiki',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
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
                to: '/About',
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
                href: 'https://github.com/c1ev0ps/docusaurus_wiki',
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
  
        indexName: 'wiki',
  
        // Optional: see doc section below
        contextualSearch: false,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
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

      announcementBar: {
        id: 'support_us',
        content:
          'We are looking forward to your contribution! Welcome come to our <a target="_blank" rel="https://github.com/orgs/c1ev0ps/projects/3/views/1" href="#">Task Project</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },

    }),
  
  
};

module.exports = config;
