// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// 从 frontmatter 中提取 aliases
function getFrontmatterAliases() {
  try {
    console.log('[aliases] getFrontmatterAliases() called');

    // 只在本地 dev server（docusaurus start）跳过，build/deploy 必须执行
    const isDevServer = process.env.BABEL_ENV === 'development';
    if (isDevServer) {
      return [];
    }

    const fs = require('fs');
    const path = require('path');
    const glob = require('glob');

    const docsDir = path.join(__dirname, 'docs');
    if (!fs.existsSync(docsDir)) {
      console.warn('警告: docs 目录不存在，跳过 aliases 处理');
      return [];
    }

    const files = glob.sync(path.join(docsDir, '**/*.{md,mdx}'), {
      windowsPathsNoEscape: true,
      dot: false,
    });

    if (files.length === 0) {
      console.warn('警告: 没有找到任何文档文件');
      return [];
    }

    // 兼容 BOM + \r\n
    const FM_RE = /^\uFEFF?---\s*\r?\n([\s\S]*?)\r?\n---/;

    /** @param {string} p */
    const normPath = (p) => {
      if (!p) return '/';
      let x = p.startsWith('/') ? p : `/${p}`;
      x = x.replace(/\/{2,}/g, '/');
      return x;
    };

    /** @param {string} p */
    const withSlash = (p) => (p.endsWith('/') ? p : `${p}/`);

    // 收集所有真实页面路径（用于校验 to 是否存在）
    const existingPaths = new Set();

    files.forEach((filePath) => {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fm = content.match(FM_RE);
        if (!fm) return;

        const frontmatterText = fm[1];
        const slugMatch = frontmatterText.match(/slug:\s*['"]?([^'"\n\r]+)['"]?/);

        /** @type {string} */
        let target;
        if (slugMatch) {
          target = normPath(slugMatch[1].trim());
        } else {
          const relativePath = path.relative(docsDir, filePath);
          const docPath = relativePath.replace(/\.(md|mdx)$/, '').replace(/\\/g, '/');
          target = normPath(docPath);
        }

        existingPaths.add(target);
        existingPaths.add(withSlash(target));
      } catch {
        // ignore
      }
    });

    /** @type {{from: string; to: string}[]} */
    const redirects = [];
    const seenFrom = new Set(); // from 去重，避免 EEXIST

    let processedCount = 0;
    let skippedCount = 0;
    let dedupedCount = 0;

    files.forEach((filePath) => {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fm = content.match(FM_RE);
        if (!fm) return;

        const frontmatterText = fm[1];
        if (!frontmatterText.includes('aliases:')) return;

        const slugMatch = frontmatterText.match(/slug:\s*['"]?([^'"\n\r]+)['"]?/);

        /** @type {string[]} */
        let aliases = [];

        const bracketMatch = frontmatterText.match(/aliases:\s*\[(.*?)\]/s);
        if (bracketMatch) {
          aliases = bracketMatch[1]
            .split(',')
            .map((a) => a.trim().replace(/['"]/g, ''))
            .filter(Boolean);
        } else {
          const yamlMatch = frontmatterText.match(/aliases:\s*\r?\n((?:\s*-\s*.+\r?\n?)*)/);
          if (yamlMatch) {
            aliases = yamlMatch[1]
              .split(/\r?\n/)
              .map((line) => {
                const m = line.match(/^\s*-\s*(.+)$/);
                return m ? m[1].trim().replace(/['"]/g, '') : '';
              })
              .filter(Boolean);
          }
        }

        if (aliases.length === 0) return;

        // 目标路径（统一用带 /，你配置 trailingSlash:true）
        /** @type {string} */
        let targetPath;
        if (slugMatch) {
          targetPath = normPath(slugMatch[1].trim());
        } else {
          const relativePath = path.relative(docsDir, filePath);
          const docPath = relativePath.replace(/\.(md|mdx)$/, '').replace(/\\/g, '/');
          targetPath = normPath(docPath);
        }
        const to = withSlash(targetPath);

        // to 必须存在（任意一种形式存在都算）
        if (!existingPaths.has(targetPath) && !existingPaths.has(to)) {
          skippedCount++;
          return;
        }

        // 只生成 “带 / 的 from”，并去重
        aliases.forEach((alias) => {
          const from = withSlash(normPath(alias.trim()));

          if (seenFrom.has(from)) {
            dedupedCount++;
            return;
          }
          seenFrom.add(from);
          redirects.push({ from, to });
        });

        processedCount++;
      } catch (/** @type {any} */ error) {
        console.warn(`警告: 处理文件 ${filePath} 时出错: ${error.message}`);
      }
    });

    console.log(
      `🔗 从 ${processedCount} 个文档中创建 ${redirects.length} 个有效的 aliases 重定向（去重丢弃 ${dedupedCount} 条）`,
    );
    if (skippedCount > 0) {
      console.log(`⚠️  跳过了 ${skippedCount} 个无效的目标路径`);
    }

    return redirects;
  } catch (/** @type {any} */ error) {
    console.error('处理 frontmatter aliases 时出错:', error.message);
    return [];
  }
}

// Wrap the entire config in an async IIFE
module.exports = (async () => {
  // Dynamically import ESM modules
  const remarkMath = (await import('remark-math')).default;
  const rehypeKatex = (await import('rehype-katex')).default;

  // 用于单语言 / 多语言 dev 控制
  const isDev = process.env.NODE_ENV === 'development';
  const rawDocLangs = process.env.DOC_LANGS || 'all';
  const activeLangs = rawDocLangs.split(',').map(l => l.trim()).filter(Boolean);
  const knownLangDirs = ['zh-CN', 'ja', 'es'];

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'Seeed Studio Wiki',
    tagline:
      'The Seeed Studio Files Management Platform, Opening up and Cooperation.',

    url: 'https://wiki.seeedstudio.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'ignore',
    onBrokenAnchors: 'ignore',
    favicon: 'img/S.png',
    themes: ['docusaurus-theme-search-typesense'],
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
      {
      src: '/js/language-switcher.js',
      async: true,
      },
    ],

    future: {
      v4: true, // Enable future Docusaurus v4 features
      experimental_faster: true, // Enable experimental faster features
    },

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
          docs: (function () {
            const base = {
              routeBasePath: '/',
              sidebarPath: require.resolve('./sidebars.js'),

              // Use the resolved plugins directly as an array
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex],

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
            };

            // dev 下如果设置了 DOC_LANGS，则只处理部分语言目录
            if (isDev && rawDocLangs !== 'all') {
              const wantEn = activeLangs.indexOf('en') !== -1;
              const nonEnWanted = activeLangs.filter(function (l) { return l !== 'en'; });

              if (wantEn) {
                // 需要英文 + 若干非英文语言：排除不需要的语言目录
                const unwantedDirs = knownLangDirs.filter(function (dir) {
                  return nonEnWanted.indexOf(dir) === -1;
                });
                base.exclude = base.exclude.concat(unwantedDirs.map(function (dir) {
                  return dir + '/**';
                }));
              } else if (nonEnWanted.length > 0) {
                // 不需要英文，只保留指定的非英文语言目录
                base.include = [];
                nonEnWanted.forEach(function (lang) {
                  base.include.push(lang + '/**/*.md');
                  base.include.push(lang + '/**/*.mdx');
                });
              }
            }

            return base;
          })(),

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
      // [
      //   '@docusaurus/plugin-pwa',
      //   {
      //     debug: true,
      //     offlineModeActivationStrategies: [
      //       'appInstalled',
      //       'standalone',
      //       'queryString',
      //     ],
      //     pwaHead: [
      //       {
      //         tagName: 'link',
      //         rel: 'icon',
      //         href: '/img/S.png',
      //       },
      //       {
      //         tagName: 'link',
      //         rel: 'manifest',
      //         href: '/manifest.json', // your PWA manifest
      //       },
      //       {
      //         tagName: 'meta',
      //         name: 'theme-color',
      //         content: 'rgb(37, 194, 160)',
      //       },
      //     ],
      //   },
      // ],
      
      // 添加 frontmatter aliases 重定向插件
      [
        '@docusaurus/plugin-client-redirects',
        (() => {
          console.log(`[aliases] config loaded, NODE_ENV=${process.env.NODE_ENV}`);
          const redirects = getFrontmatterAliases();
          console.log(`[aliases] redirects computed: ${redirects.length}`);
          return { redirects };
        })(),
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

          // zoom: { // This seems to be a duplicate key "zoom", perhaps meant for medium-zoom options?
          //   selector: '.markdown :not(a) > img', // Exclude images inside links
          // },
          // The options for docusaurus-plugin-image-zoom are usually directly under the plugin's key in themeConfig, not nested again under "zoom"
          // Check the plugin's documentation. If the inner zoom is for medium-zoom options, it should be under 'config'
          config: { // This is the correct place for medium-zoom options
            // selector: '.markdown :not(a) > img', // If you want to override default selector for zoom behavior
          },
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
            {
              label: 'Quick Links',
              to: '/Getting_Started',
              position: 'left',
              className: 'navbar_dorp_items js_getting_started',
              items: [
                {
                  label: 'Sensor and Sensing',
                  to: 'Sensor_Network',
                },
                {
                  label: 'Networking',
                  to: 'Network',
                },
                {
                  label: 'Edge Computing',
                  to: 'Edge_Computing',
                },
                {
                  label: 'Cloud',
                  to: 'Cloud',
                },
              ],
            },
            {
              label: 'Explore with Topics',
              to: '/topicintroduction',
              position: 'left',
              className: 'navbar_dorp_items js_explore_learn',
              items: [
                {
                  label: 'TinyML',
                  to: '/tinyml_topic',
                },
                {
                  label: 'SenseCraft Model Assistant',
                  to: '/ModelAssistant_Introduce_Overview',
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
                {
                  label: 'Wiki 矽递科技 (中文)',
                  to: '/cn/Getting_Started',
                },
                {
                  label: 'Wiki SeeedStudio (日本語)',
                  to: '/ja/Getting_Started',
                },
                // {
                //   label: 'Wiki SeeedStudio (Español)',
                //   to: '/es/SeeedStudio_XIAO_Series_Introduction',
                // },
              ],
            },
            {
              type: 'dropdown',
              label: 'FAQs',
              to: '/knowledgebase',
              position: 'left',
              className: 'navbar_dorp_items',
              items: [
                {
                  label: 'NVIDIA Jetson Series',
                  to: '/Jetson_FAQ',
                },
                {
                  label: 'Seeed Studio XIAO Series',
                  to: '/XIAO_FAQ',
                },
                {
                  label: 'reComputer R1000 Series',
                  to: '/reComputer_R1000_FAQ',
                },
                {
                  label: 'reTerminal',
                  to: '/reTerminal-new_FAQ',
                },
                {
                  label: 'reRouter',
                  to: '/FAQs_For_openWrt',
                },
                {
                  label: 'Odyssey',
                  to: '/ODYSSEY_FAQ',
                },
                {
                  label: 'Wio Terminal',
                  to: '/wio_terminal_faq',
                },
                {
                  type: 'html',
                  value: '<hr style="margin: 8px 0;">',
                },
                {
                  label: 'Discord',
                  href: 'https://discord.com/invite/eWkprNDMU7',
                },
                {
                  label: 'Email',
                  href: 'https://www.seeedstudio.com/contacts',
                },
                {
                  label: 'Forum',
                  href: 'https://forum.seeedstudio.com/',
                },
                {
                  label: 'Have Suggestions?',
                  href:
                    'https://github.com/Seeed-Studio/wiki-documents/discussions/69',
                },
              ],
            },
            {
              type: 'dropdown',
              label: 'Get Involved',
              to: 'https://www.seeedstudio.com/ranger-program',
              position: 'left',
              className: 'navbar_dorp_items',
              items: [
                {
                  label: 'Affiliate & Creator',
                  to: 'https://www.seeedstudio.com/blog/affiliate-program/',
                },
                {
                  label: 'Rangers',
                  to: 'https://www.seeedstudio.com/ranger-program/',
                },
                {
                  label: 'Contributors',
                  to: '/contributors',
                },
                {
                  label: 'Apply for Rangers',
                  href:
                    'https://docs.google.com/forms/d/e/1FAIpQLSdiAWHmRJqgVNTJyJDkzhufc1dygFyhWFyEtUTm-mrgSKaEgg/viewform',
                },
                {
                  label: 'Direct to Assignments',
                  href: 'https://github.com/orgs/Seeed-Studio/projects/6',
                },
                {
                  label: 'More about Rangers',
                  href:
                    'https://www.seeedstudio.com/blog/2023/09/15/join-the-seeed-ranger-program-empowering-developers-and-building-communities/',
                },
                {
                  label: 'More about Contributors',
                  href: 'https://wiki.seeedstudio.com/Contributor',
                },
              ],
            },
            {
              to: 'https://www.seeedstudio.com/',
              label: 'Bazaar 🛍️',
              position: 'right',
              className: 'navbar_doc_right_items',
            },
            {
              to: 'https://sensecraft.seeed.cc/ai/#/home',
              label: 'SenseCraft AI',
              position: 'right',
              className: 'navbar_doc_right_items',
            },
            {
              href: 'https://sensecraft.seeed.cc/ai/#/home',
              position: 'right',
              className: 'header-SSCMA',
            },
            {
              href: 'https://github.com/Seeed-Studio/wiki-documents',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository',
            },
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
                  label: 'Sensor and Sensing',
                  to: '/Sensor_Network',
                },
                {
                  label: 'Network',
                  to: '/Network',
                },
                {
                  label: 'Edge Computing',
                  to: '/Edge_Computing',
                },
                {
                  label: 'Cloud',
                  to: '/Cloud',
                },
                {
                  label: 'Solutions',
                  to: 'https://solution.seeed.cc/',
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
                  label: 'Bazaar',
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
          additionalLanguages: ['bash'],
        },
        contextualSearch: true,
        typesense: {
          typesenseCollectionName: 'wiki_platform_test_1767765204',
          typesenseServerConfig: {
            nodes: [
              {
                host: 'search.seeedstudio.com',
                protocol: 'https',
              },
            ],
            apiKey: 'z1DHV8drOZizrn9TSlf0U9QgNENgBxGR',
          },
          typesenseSearchParameters: {
            query_by: 'hierarchy.lvl0,hierarchy.lvl2,content,sku_tag',
          },
          transformSearchParameters: (
            /** @type {string} */ inputString,
            /** @type {Record<string, unknown>} */ searchParameters,
          ) => {
            if (/^\d{5,}$/.test(inputString)) {
              console.log('检测到 SKU 搜索:', inputString);
              return {
                ...searchParameters,
                query_by: 'sku_tag',
                query: inputString,
                // filter_by: 'doc_type_tag:=gettingstarted && !doc_type_tag:=project',
              };
            }
            return searchParameters;
          },
        },
        announcementBar: {
          id: 'support_us',
          content: '<span id="announcement-text">Collaborate with Seeed - <a target="_blank" href="https://www.seeedstudio.com/blog/affiliate-program/">Creator</a>, <a target="_blank" href="https://www.seeedstudio.com/ranger-program/">Ranger</a>, or <a target="_blank" href="https://wiki.seeedstudio.com/contributors/">Contributor</a>, there is always a role ideal for you!</span>',
          backgroundColor: '#013949',
          textColor: '#FFFFFF',
          isCloseable: false,
        },
      }),
  };

  return config; // Return the config object from the IIFE
})();
