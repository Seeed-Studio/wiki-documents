// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

// 从 frontmatter 中提取 aliases
function getFrontmatterAliases() {
  try {
    const fs = require('fs');
    const path = require('path');
    const glob = require('glob');

    // ====== 1) 只在本地 dev server 跳过（更可靠的判断） ======
    // Docusaurus 在 start/build/deploy 的环境变量有时会被工具链改写，
    // 所以不要再单纯依赖 NODE_ENV/BABEL_ENV。
    // 这里用一个更稳的策略：如果是交互式 dev server（start）才跳过扫描。
    const argv = process.argv.join(' ');
    const isStartCommand = /\bdocusaurus\b.*\bstart\b/.test(argv) || /\bstart\b/.test(argv);
    if (isStartCommand) {
      return [];
    }

    const docsDir = path.join(__dirname, 'docs');
    const docsExists = fs.existsSync(docsDir);

    if (!docsExists) {
      console.warn('警告: docs 目录不存在，跳过 aliases 处理');
      return [];
    }

    // ====== 2) 扫描所有 md/mdx ======
    const files = glob.sync(path.join(docsDir, '**/*.{md,mdx}'), {
      windowsPathsNoEscape: true,
      dot: false,
      nodir: true,
    });

    if (files.length === 0) {
      console.warn('警告: 没有找到任何文档文件');
      return [];
    }

    // ====== 3) 更稳的 frontmatter 匹配（兼容 BOM / CRLF / 前置空行） ======
    const FM_RE = /^\uFEFF?\s*---\s*\r?\n([\s\S]*?)\r?\n---/;

    /** @param {string} p */
    const normPath = (p) => {
      if (!p) return '/';
      let x = p.trim();
      x = x.startsWith('/') ? x : `/${x}`;
      x = x.replace(/\/{2,}/g, '/');
      return x;
    };

    /** @param {string} p */
    const withSlash = (p) => (p.endsWith('/') ? p : `${p}/`);

    // ====== 4) 先收集所有真实页面路径（slug 或文件路径）用于 to 校验 ======
    const existingPaths = new Set();

    for (const filePath of files) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fm = content.match(FM_RE);
        if (!fm) continue;

        const frontmatterText = fm[1];
        const slugMatch = frontmatterText.match(/slug:\s*['"]?([^'"\n\r]+)['"]?/);

        /** @type {string} */
        let target;
        if (slugMatch) {
          target = normPath(slugMatch[1]);
        } else {
          const relativePath = path.relative(docsDir, filePath);
          const docPath = relativePath.replace(/\.(md|mdx)$/, '').replace(/\\/g, '/');
          target = normPath(docPath);
        }

        existingPaths.add(target);
        existingPaths.add(withSlash(target));
      } catch {
        // ignore single file errors
      }
    }

    // ====== 5) 生成 redirects（from 去重 + 只生成带 / 的 from） ======
    /** @type {{from: string; to: string}[]} */
    const redirects = [];
    const seenFrom = new Set();

    let processedDocsWithAliases = 0;
    let aliasFrontmatterFiles = 0;
    let skippedCount = 0;
    let dedupedCount = 0;

    for (const filePath of files) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fm = content.match(FM_RE);
        if (!fm) continue;

        const frontmatterText = fm[1];
        if (!frontmatterText.includes('aliases:')) continue;

        aliasFrontmatterFiles++;

        const slugMatch = frontmatterText.match(/slug:\s*['"]?([^'"\n\r]+)['"]?/);

        /** @type {string[]} */
        let aliases = [];

        // 形式 1：aliases: ["/a", "/b"]
        const bracketMatch = frontmatterText.match(/aliases:\s*\[(.*?)\]/s);
        if (bracketMatch) {
          aliases = bracketMatch[1]
            .split(',')
            .map((a) => a.trim().replace(/['"]/g, ''))
            .filter(Boolean);
        } else {
          // 形式 2：YAML list
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

        if (aliases.length === 0) continue;

        // 目标路径（统一带 /）
        /** @type {string} */
        let targetPath;
        if (slugMatch) {
          targetPath = normPath(slugMatch[1]);
        } else {
          const relativePath = path.relative(docsDir, filePath);
          const docPath = relativePath.replace(/\.(md|mdx)$/, '').replace(/\\/g, '/');
          targetPath = normPath(docPath);
        }
        const to = withSlash(targetPath);

        // to 校验：存在任意一种就认为有效
        if (!existingPaths.has(targetPath) && !existingPaths.has(to)) {
          skippedCount++;
          continue;
        }

        // from：只生成带 / 的版本（避免 trailingSlash 下落盘冲突）
        for (const alias of aliases) {
          const from = withSlash(normPath(alias));

          if (seenFrom.has(from)) {
            dedupedCount++;
            continue;
          }
          seenFrom.add(from);
          redirects.push({ from, to });
        }

        processedDocsWithAliases++;
      } catch (/** @type {any} */ error) {
        console.warn(`警告: 处理文件 ${filePath} 时出错: ${error.message}`);
      }
    }

    console.log(
      `🔗 从 ${processedDocsWithAliases} 个文档中创建 ${redirects.length} 个有效的 aliases 重定向（去重丢弃 ${dedupedCount} 条）`,
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

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'Seeed Studio Wiki',
    tagline:
      'The Seeed Studio Files Management Platform, Opening up and Cooperation.',

    url: 'https://wiki.seeedstudio.com',
    baseUrl: '/es/',
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
      defaultLocale: 'es',
      locales: ['es'],
      path: 'i18n',
      localeConfigs: {
        es: {
          label: 'Español',
          direction: 'ltr',
          htmlLang: 'es-ES',
          calendar: 'gregory',
          path: 'es',
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
              path: 'docs',
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
                'https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/sites/es/',
            };

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

      function webpackAliasPlugin() {
        return {
          name: 'webpack-alias-assets',
          configureWebpack() {
            return {
              resolve: {
                alias: {
                  '@assets': path.resolve(__dirname, '../../assets'),
                },
              },
            };
          },
        };
      },
      
      // 添加 frontmatter aliases 重定向插件
      [
        '@docusaurus/plugin-client-redirects',
        (() => {
          const redirects = getFrontmatterAliases();
          return { redirects };
        })(),
      ],
      
      path.resolve(__dirname, '../../plugins/image-zoom'),
      [
        path.resolve(__dirname, '../../plugins/respeaker-faq-index'),
        { locale: 'es' },
      ],
      'docusaurus-plugin-sass',
      [
        'docusaurus-plugin-copy-page-button',
        {
          injectButton: false,
          enabledActions: ['copy', 'view', 'chatgpt', 'claude', 'gemini'],
          labels: {
            button: {
              label: 'Copiar página',
            },
            copy: {
              title: 'Copiar como Markdown',
              description: 'Copia el contenido de esta página como Markdown',
            },
            view: {
              title: 'Ver como Markdown',
              description: 'Ver el contenido de esta página en formato Markdown',
            },
            chatgpt: {
              title: 'Abrir en ChatGPT',
              description: 'Abrir el contenido de esta página como contexto en ChatGPT',
            },
            claude: {
              title: 'Abrir en Claude',
              description: 'Abrir el contenido de esta página como contexto en Claude',
            },
            gemini: {
              title: 'Abrir en Gemini',
              description: 'Abrir el contenido de esta página como contexto en Gemini',
            },
          },
        },
      ],
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
                  to: 'https://wiki.seeedstudio.com/cn/Getting_Started',
                },
                {
                  label: 'Wiki SeeedStudio (日本語)',
                  to: 'https://wiki.seeedstudio.com/ja/Getting_Started',
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
              type: 'dropdown',
              label: 'Plataformas de IA',
              position: 'right',
              className: 'navbar_doc_right_items ai-platform-dropdown',
              items: [
                {
                  label: 'SenseCraft AI',
                  to: 'https://sensecraft.seeed.cc/ai/#/home',
                  className: 'ai-platform-menu-item sensecraft-ai-menu-item',
                },
                {
                  label: 'reComputer AI Lab',
                  to: 'https://sensecraft.seeed.cc/ai-lab',
                  className: 'ai-platform-menu-item recomputer-ai-lab-menu-item',
                },
              ],
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
          typesenseCollectionName: 'wiki_platform_aliases_v1',
          typesenseServerConfig: {
            nodes: [
              {
                host: 'search.seeedstudio.com',
                port: 443,
                protocol: 'https',
              },
            ],
            apiKey: 'Wq4m3wi2ltwebP1v7bYlmkTGBcu31kHe',
          },
          typesenseSearchParameters: {
            query_by: 'product_aliases,resolved_category,hierarchy.lvl0,hierarchy.lvl2,content,sku_tag',
            query_by_weights: '10,6,4,3,2,1',
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
                query_by_weights: '1',   
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
