// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seeed Studio Wiki',
  tagline:
    'The Seeed Studio Files Management Platform, Opening up and Cooperation.',

  url: 'https://wiki.seeedstudio.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/S.png',

  scripts: [
    // String format.
    // 'https://viewer.altium.com/client/static/js/embed.js',

    // Object format.
    {
      src: 'https://viewer.altium.com/client/static/js/embed.js',
      async: true,
    },
    {
      src: '/js/custom.js', // 添加你的 JavaScript 文件名、
      async: true,
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Seeed-Studio', // Usually your GitHub org/user name.
  projectName: 'wiki-documents', // Usually your repo name.
  trailingSlash: true,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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

          remarkPlugins: [],
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
            'https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/',
        },

        googleTagManager: {
          containerId: 'GTM-M4JG2HVB',
        },

        //         blog: {
        //           showReadingTime: true,
        //           // Please change this to your repo.
        //           // Remove this to remove the "edit this page" links.
        //           editUrl:
        //             'https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/',
        //         },
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
            href: '/img/S.png',
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
    'docusaurus-plugin-sass',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          dark: 'rgb(50, 50, 50)',
          light: 'rgb(255, 255, 255)',
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        // https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom
        config: {},
      },

      colorMode: {
        defaultMode: 'dark',
        // disableSwitch: true,
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },

      giscus: {
        repo: 'Seeed-Studio/wiki-documents',
        repoId: 'MDEwOlJlcG9zaXRvcnkzMDM5NTk0Nzk=',
        category: 'Q&A',
        categoryId: 'DIC_kwDOEh4Nt84CTIbM',
        theme: 'light_high_contrast',
        darkTheme: 'dark_tritanopia',
      },

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'Seeed Studio',
          src:
            'https://files.seeedstudio.com/wiki/wiki-platform/SeeedStudio.png',
          srcDark:
            'https://files.seeedstudio.com/wiki/wiki-platform/seeed_white_logo.png',
          href: '/',
          className: 'navbar_logo_items',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'Getting_Started',
          //   position: 'left',
          //   label: 'Getting Started',
          //   className: 'navbar_doc_items',
          // },
          // {
          //   type: 'doc',
          //   docId: 'Sensor_Network',
          //   position: 'left',
          //   label: 'Sensing & Network',
          //   className: 'navbar_doc_items',
          // },
          // {
          //   type: 'doc',
          //   docId: 'Edge_Computing',
          //   position: 'left',
          //   label: 'Edge Computing',
          //   className: 'navbar_doc_items',
          // },
          // {
          //   type: 'doc',
          //   docId: 'CloudnChain',
          //   position: 'left',
          //   label: 'Cloud',
          //   className: 'navbar_doc_items',
          // },

          // home navigation
          {
            label: 'Quick Links',
            to: '/Getting_Started',
            position: 'left',
            className: 'navbar_dorp_items home_nav js_getting_started',
          },
          {
            label: 'Explore with Topics',
            to: '/Getting_Started',
            position: 'left',
            className: 'navbar_dorp_items home_nav js_explore_learn',
          },
          // wiki documents navigation
          {
            type: 'dropdown',
            label: 'Getting Started',
            to: '/Getting_Started',
            position: 'left',
            className: 'navbar_dorp_items doc_nav',
            items: [
              {
                label: 'Sensing and Connectivity',
                to: 'Sensor_Network',
              },
              {
                label: 'Edge Computing',
                to: 'Edge_Computing',
              },
              {
                label: 'Cloud and Chain',
                to: 'CloudnChain',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Topics',
            to: '/Getting_Started',
            position: 'left',
            className: 'navbar_dorp_items doc_nav',
            items: [
              {
                label: 'TinyML',
                to: '/tinyml_topic',
              },
              {
                label: 'Home Assistant',
                to: '/home_assistant_topic',
              },
              {
                label: 'Open Source',
                to: '/open_source_topic',
              },
              {
                label: 'Edge AI',
                to: '/edge_ai_topic',
              },
            ],
          },
          {
            type: 'dropdown',
            label: '文/A',
            to: '/Getting_Started',
            position: 'left',
            className: 'navbar_dorp_items doc_nav',
            items: [
              {
                label: 'Seeed Studio Wiki Platform',
                to: '/Getting_Started',
              },
              {
                label: '矽递科技 Wiki 文档平台（测试）',
                to: '/cn/Getting_Started',
              },
            ],
          },

          // {
          //   label: 'Contribution',
          //   className: 'navbar_doc_items',
          //   to: '/Contribution',
          // },

          {
            to: 'https://www.seeedstudio.com/',
            label: 'Bazaar 🛍️',
            position: 'right',
            className: 'navbar_doc_right_items',
          },
          // {
          //   label: 'Help 🙋',
          //   position: 'right',
          //   className: 'navbar_doc_right_items',
          //   to: '/knowledgebase',
          // },
          // {
          //   type: 'doc',
          //   docId: 'Solutions',
          //   position: 'left',
          //   label: 'Solutions',
          //   className: 'navbar_doc_items'
          // },
          // {
          //   to: 'https://wiki-gpt.seeedstudio.com/chat',
          //   label: 'Chat 🤖️',
          //   position: 'right',
          //   className: 'navbar_doc_right_items',
          // },
          // {
          //   to: 'https://wiki-gpt.seeedstudio.com/chat',
          //   label: 'Rangers ✨',
          //   position: 'right',
          //   className: 'navbar_doc_right_items',
          // },
          // {
          //   to: 'https://wiki-gpt.seeedstudio.com/chat',
          //   label: 'Collaborations ✨',
          //   position: 'right',
          //   className: 'navbar_doc_right_items',
          // },
          {
            type: 'dropdown',
            label: 'Collaborations ✨',
            to: '/Getting_Started',
            position: 'right',
            items: [
              {
                label: 'Rangers',
                to: '/knowledgebase/',
              },
              {
                label: 'Contributors',
                to: '/cn/Getting_Started',
              },
            ],
          },
          {
            href:
              'https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process',
            position: 'right',
            className: 'header-SSCMA',
          },
          {
            href: 'https://github.com/Seeed-Studio/wiki-documents',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },

          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          //   className: 'navbar_doc_items'
          // },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          //   className: 'navbar_doc_items'
          // },
          // {
          //   type: 'dropdown',
          //   label: 'Page',
          //   position: 'right',
          //   items: [
          //     {
          //       label: 'SenseCAP',
          //       to: '/indexIAG',
          //       target: '_blank',
          //     },
          //     {
          //       label: 'Initial',
          //       to: './',
          //       target: '_blank',
          //     },
          //   ],
          //   className:'navbar_doc_items'
          // },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Getting Started',
                to: '/Getting_Started',
              },
              {
                label: 'Sensor Network',
                to: '/Sensor_Network',
              },
              {
                label: 'Edge Computing',
                to: '/Edge_Computing',
              },
              {
                label: 'Cloud & Chain',
                to: '/CloudnChain',
              },
              {
                label: 'Solutions',
                to: '/Solutions',
              },
            ],
          },
          {
            title: 'Ecosystem',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.com/invite/QqMgVwHT3X',
              },
              {
                label: 'Project Hub',
                to: 'https://project.seeedstudio.com/',
              },
              {
                label: 'Partners',
                to: 'https://www.seeedstudio.com/ecosystem/',
              },
              {
                label: 'Distributors',
                to: 'https://www.seeedstudio.com/distributors.html',
              },
            ],
          },
          {
            title: 'Quick Guide',
            items: [
              {
                label: 'Bazzar',
                to: 'https://www.seeedstudio.com/',
              },
              {
                label: 'How to get help',
                to: 'https://www.seeedstudio.com/get_help/HowToGetHelp',
              },
              {
                label: 'FAQs',
                to: 'https://support.seeedstudio.com/knowledgebase',
              },
              {
                label: 'Forum',
                to: 'https://forum.seeedstudio.com/',
              },
              {
                label: 'Technical Support',
                to: 'https://www.seeedstudio.com/get_help/TechnicalSupport',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Seeed',
                to: 'https://www.seeedstudio.com/about-us/',
              },
              {
                label: 'Join us',
                to: 'https://www.seeedstudio.com/join-us/',
              },
              {
                label: 'Contact Us',
                to: 'https://www.seeedstudio.com/contacts',
              },
              {
                label: 'Press',
                to:
                  'https://www.seeedstudio.com/blog/2020/04/22/seeed-in-the-news/',
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
        appId: 'AKPIWVFYW0',

        // Public API key: it is safe to commit it
        apiKey: 'dd2e490797af4d0ef1afdd73f66e3174',

        indexName: 'wiki_update',

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
          // 'We are looking forward to your contribution! Welcome to check our <a target="_blank" rel="https://github.com/orgs/Seeed-Studio/projects/3/views/1" href="https://github.com/BilltheWorld/wiki-documents/blob/docusaurus-version/TASK.md">task lists</a>！',
          'All planned updates to the wiki platform has been publicly availble. Your <a target="_blank" href="https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=30957479">contributions</a> will be essential to us!',
        backgroundColor: '#013949',
        textColor: '#FFFFFF',
        isCloseable: false,
      },
    }),
}

module.exports = config
