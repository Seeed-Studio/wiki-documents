// 语言切换器（内嵌数据）
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 配置
const config = {
  docsPaths: {
    en: 'sites/en/docs',
    cn: 'sites/zh-CN/docs',
    ja: 'sites/ja/docs',
    es: 'sites/es/docs',
    pt: 'sites/pt-BR/docs'
  },

  languagePrefixes: {
    en: '',
    cn: '/cn',
    ja: '/ja',
    es: '/es',
    pt: '/pt-br'
  },

  outputFile: 'static/js/language-switcher.js',
  verbose: true
};

// 获取所有markdown文件
function getAllMarkdownFiles(dir) {
  const files = [];

  if (!fs.existsSync(dir)) {
    if (config.verbose) {
      console.log(`⚠️  目录不存在: ${dir}`);
    }
    return files;
  }

  function traverse(currentDir, relativePath = '') {
    try {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        if (entry.name.startsWith('.') ||
            entry.name === 'node_modules' ||
            entry.name === '_site' ||
            entry.name === 'build') {
          continue;
        }

        const fullPath = path.join(currentDir, entry.name);
        const relPath = path.join(relativePath, entry.name);

        if (entry.isDirectory()) {
          traverse(fullPath, relPath);
        } else if (entry.isFile() && /\.(md|mdx)$/i.test(entry.name)) {
          files.push({
            fullPath,
            relativePath: relPath,
            fileName: entry.name
          });
        }
      }
    } catch (error) {
      console.warn(`⚠️  读取目录失败: ${currentDir}`, error.message);
    }
  }

  traverse(dir);
  return files;
}

function extractSlugFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(content);
    const slug = parsed.data.slug;
    return slug ? (slug.startsWith('/') ? slug : `/${slug}`) : null;
  } catch (error) {
    console.error(`❌ 读取文件失败: ${filePath}`, error.message);
    return null;
  }
}

function inferSlugFromPath(relativePath) {
  const withoutExt = relativePath.replace(/\.(md|mdx)$/i, '');
  const normalized = withoutExt.replace(/\\/g, '/');

  if (normalized.endsWith('/index') || normalized === 'index') {
    const dir = path.dirname(normalized);
    return dir === '.' ? '/' : `/${dir}/`;
  }

  return `/${normalized}/`;
}

// ✅ 把 slug 统一成“站点内 basePath”，也就是不含语言前缀的形式：/Getting_Started/
function normalizeToBasePath(slug, languageCode) {
  if (!slug) return slug;

  // 确保以 / 开头
  if (!slug.startsWith('/')) slug = '/' + slug;

  const prefix = config.languagePrefixes[languageCode] || '';

  // 只在 slug 明确包含语言前缀时才剥离（比如有人手写了 /cn/xxx）
  if (languageCode !== 'en' && prefix) {
    if (slug === prefix) return '/';
    if (slug.startsWith(prefix + '/')) {
      const stripped = slug.slice(prefix.length);
      return stripped || '/';
    }
  }

  return slug;
}

function processLanguageDocuments(languageCode, docsPath) {
  if (config.verbose) {
    console.log(`\n🔍 处理 ${languageCode} 文档: ${docsPath}`);
  }

  const files = getAllMarkdownFiles(docsPath);
  const slugMap = new Map();

  if (config.verbose) {
    console.log(`   找到 ${files.length} 个文件`);
  }

  for (const file of files) {
    let slug = extractSlugFromFile(file.fullPath);

    if (!slug) {
      slug = inferSlugFromPath(file.relativePath);
    }

    // ✅ 分站后：md slug 通常不带 /cn，但最终 URL 由 baseUrl 加上 /cn。
    // 这里统一把 key 归一化为 basePath（不含语言前缀），用于跨语言对齐。
    slug = normalizeToBasePath(slug, languageCode);

    slugMap.set(slug, {
      file: file.relativePath,
      language: languageCode
    });

    if (config.verbose) {
      console.log(`   ✅ ${file.relativePath} -> ${slug}`);
    }
  }

  return slugMap;
}

function generateLanguageMapping() {
  console.log('🚀 开始生成语言映射表...\n');

  const allSlugs = new Map();

  for (const [langCode, docsPath] of Object.entries(config.docsPaths)) {
    const slugMap = processLanguageDocuments(langCode, docsPath);

    for (const [slug, fileInfo] of slugMap) {
      if (!allSlugs.has(slug)) {
        allSlugs.set(slug, {
          languages: [],
          files: {}
        });
      }

      const slugInfo = allSlugs.get(slug);
      slugInfo.languages.push(langCode);
      slugInfo.files[langCode] = fileInfo;
    }
  }

  const languageMapping = {};

  for (const [slug, info] of allSlugs) {
    if (info.languages.length > 1) {
      languageMapping[slug] = info.languages.sort();
    }
  }

  return { languageMapping, allSlugs };
}

function generateJavaScriptFile() {
  const startTime = Date.now();

  try {
    const { languageMapping, allSlugs } = generateLanguageMapping();

    // ✅ 首页多语言映射（仅追加，不影响 docs 的自动映射）
    const HOMEPAGE_LOCALES = ['en', 'cn', 'ja', 'es', 'pt'];
    languageMapping['/'] = HOMEPAGE_LOCALES;
    languageMapping[''] = HOMEPAGE_LOCALES; // 兼容 basePath = '' 的情况

    const SPECIAL_ROUTE_LOCALES = ['en', 'cn', 'ja', 'es', 'pt'];
    ['/knowledgebase/', '/knowledgebase'].forEach((slug) => {
      languageMapping[slug] = SPECIAL_ROUTE_LOCALES;
    });

    const stats = {
      total: allSlugs.size,
      multiLanguage: Object.keys(languageMapping).length,
      singleLanguage: allSlugs.size - Object.keys(languageMapping).length
    };

    console.log('\n📊 统计信息:');
    console.log(`   总页面数: ${stats.total}`);
    console.log(`   多语言页面: ${stats.multiLanguage}`);
    console.log(`   单语言页面: ${stats.singleLanguage}`);

    // 生成北京时间
    const now = new Date();
    const beijingTime = new Date(now.getTime() + (8 * 60 * 60 * 1000));
    const beijingTimeString = beijingTime.toISOString().replace('T', ' ').slice(0, 19) + ' (北京时间)';

    // 生成生产环境优化版本的JavaScript代码
    const jsContent = `// 语言切换器 - 生产环境优化版本
// 生成时间: ${beijingTimeString}
// 多语言页面: ${stats.multiLanguage} 个

(function() {
  'use strict';

  const DEBUG = false; // 生产环境关闭调试

  function log(...args) {
    if (DEBUG) {
      console.log('🔄 [生产优化版]', new Date().toISOString().slice(11, 23), ...args);
    }
  }

  // 语言配置
  const languages = {
    en: { label: 'English', flag: '🇺🇸', prefix: '' },
    cn: { label: '简体中文', flag: '🇨🇳', prefix: '/cn' },
    ja: { label: '日本語', flag: '🇯🇵', prefix: '/ja' },
    es: { label: 'Español', flag: '🇪🇸', prefix: '/es' },
    pt: { label: 'Português (Brasil)', flag: '🇧🇷', prefix: '/pt-br' }
  };

  // 内嵌的语言映射数据
  const languageMapping = ${JSON.stringify(languageMapping, null, 2)};

  // 生产环境优化的状态管理
  let isInitialized = false;
  let currentPageInfo = null;
  let observerConnected = false;

  // 监控间隔ID
  let primaryCheckInterval = null;
  let backupCheckInterval = null;

  function getCurrentLanguageAndPath() {
    const currentPath = window.location.pathname;
    let detectedLanguage = 'en';
    let basePath = currentPath;

    if (currentPath.startsWith('/cn/')) {
      detectedLanguage = 'cn';
      basePath = currentPath.replace('/cn', '') || '/';
    } else if (currentPath.startsWith('/ja/')) {
      detectedLanguage = 'ja';
      basePath = currentPath.replace('/ja', '') || '/';
    } else if (currentPath.startsWith('/es/')) {
      detectedLanguage = 'es';
      basePath = currentPath.replace('/es', '') || '/';
    } else if (currentPath.startsWith('/pt-br/')) {
      detectedLanguage = 'pt';
      basePath = currentPath.replace('/pt-br', '') || '/';
    }

    if (!basePath.startsWith('/')) {
      basePath = '/' + basePath;
    }

    return { currentLanguage: detectedLanguage, basePath };
  }

  function findAvailableLanguages(basePath, currentLanguage) {
    const pathsToTry = [
      basePath,
      basePath.replace(/\\/$/, ''),
      basePath + (basePath.endsWith('/') ? '' : '/'),
    ];

    for (const tryPath of pathsToTry) {
      if (languageMapping[tryPath]) {
        const availableLanguages = languageMapping[tryPath];
        log('🌐 找到多语言页面 ' + tryPath + ':', availableLanguages);
        return availableLanguages;
      }
    }

    log('ℹ️ 单语言页面: ' + basePath);
    return [currentLanguage];
  }

  function createLanguageSwitcher(availableLanguages, currentLanguage, basePath) {
    if (availableLanguages.length <= 1) {
      return null;
    }

    const currentLangConfig = languages[currentLanguage];
    const priority = { en: 0, cn: 1, ja: 2, es: 3, pt: 4 };
    const sortedLanguages = [...availableLanguages].sort((a, b) => {
      if (a === currentLanguage) return -1;
      if (b === currentLanguage) return 1;
      return (priority[a] || 999) - (priority[b] || 999);
    });

    const switcherHTML = [
      '<div class="navbar__item dropdown dropdown--hoverable navbar-language-switcher navbar_dorp_items" data-page-path="' + basePath + '" data-current-lang="' + currentLanguage + '">',
      '  <a href="#" class="navbar__link" aria-haspopup="true" aria-expanded="false" role="button">',
      '    <span class="lang-flag">' + currentLangConfig.flag + '</span>',
      '    <span class="lang-label">' + currentLangConfig.label + '</span>',
      '  </a>',
      '  <ul class="dropdown__menu">',
      sortedLanguages.map(langCode => {
        const lang = languages[langCode];
        const langPath = lang.prefix + basePath;
        const isActive = langCode === currentLanguage;

        return [
          '    <li>',
          '      <a class="dropdown__link ' + (isActive ? 'dropdown__link--active' : '') + '"',
          '         href="' + langPath + '"',
          '         title="切换到 ' + lang.label + '"',
          (isActive ? '         aria-current="page">' : '>'),
          '        <span class="lang-flag">' + lang.flag + '</span>',
          '        <span class="lang-label">' + lang.label + '</span>',
          (isActive ? '        <span class="lang-check">✓</span>' : ''),
          '      </a>',
          '    </li>'
        ].join('\\n');
      }).join('\\n'),
      '  </ul>',
      '</div>'
    ].join('\\n');

    return switcherHTML;
  }

  function injectOrUpdateSwitcher() {
    const navbar = document.querySelector('.navbar__items--right') ||
                   document.querySelector('.navbar__items') ||
                   document.querySelector('.navbar');

    if (!navbar) {
      log('⏳ 导航栏未找到');
      return false;
    }

    const { currentLanguage, basePath } = getCurrentLanguageAndPath();
    const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
    const existingSwitcher = document.querySelector('.navbar-language-switcher');

    // 更新当前页面信息
    currentPageInfo = {
      basePath: basePath,
      currentLanguage: currentLanguage,
      availableLanguages: availableLanguages,
      timestamp: Date.now()
    };

    // 情况1：不需要切换器
    if (availableLanguages.length <= 1) {
      if (existingSwitcher) {
        existingSwitcher.remove();
        log('🗑️ 移除切换器（单语言页面）');
      }
      return true;
    }

    // 情况2：需要切换器但不存在 - 创建（⚠️ 桌面端逻辑保持不变）
    if (!existingSwitcher) {
      const switcherHTML = createLanguageSwitcher(availableLanguages, currentLanguage, basePath);
      if (switcherHTML) {
        let insertPosition = null;
        const positionSelectors = [
          'a[href*="seeedstudio.com"]',
          '.header-github-link',
          '.navbar__item:last-child'
        ];

        for (const selector of positionSelectors) {
          const element = navbar.querySelector(selector);
          if (element) {
            insertPosition = element;
            break;
          }
        }

        if (insertPosition) {
          insertPosition.insertAdjacentHTML('beforebegin', switcherHTML);
        } else {
          navbar.insertAdjacentHTML('beforeend', switcherHTML);
        }

        const switcherElement = navbar.querySelector('.navbar-language-switcher');
        if (switcherElement) {
          const switcherButton = switcherElement.querySelector('.navbar__link');
          if (switcherButton) {
            switcherButton.addEventListener('click', function(e) {
              e.preventDefault();
            });
          }
        }

        log('✅ 创建新的语言切换器');
        return true;
      }
    }

    // 情况3：切换器存在 - 检查是否需要更新
    if (existingSwitcher) {
      const currentPagePath = existingSwitcher.getAttribute('data-page-path');
      const currentLang = existingSwitcher.getAttribute('data-current-lang');

      if (currentPagePath !== basePath || currentLang !== currentLanguage) {
        log('🔄 检测到页面变化，更新切换器');
        log('   从: ' + (currentPagePath || '未知') + ' (' + (currentLang || '未知') + ')');
        log('   到: ' + basePath + ' (' + currentLanguage + ')');

        existingSwitcher.remove();
        return injectOrUpdateSwitcher(); // 递归调用重新创建
      }
    }

    return true;
  }

  // 移动端支持

  function createMobileLanguageSwitcher(availableLanguages, currentLanguage, basePath) {
    if (availableLanguages.length <= 1) return null;

    const currentLangConfig = languages[currentLanguage];
    const priority = { en: 0, cn: 1, ja: 2, es: 3, pt: 4 };
    const sortedLanguages = [...availableLanguages].sort((a, b) => {
      if (a === currentLanguage) return -1;
      if (b === currentLanguage) return 1;
      return (priority[a] || 999) - (priority[b] || 999);
    });

    const header =
      '<button class="menu__link menu__link--sublist" aria-expanded="false" type="button">' +
      '<span class="lang-flag">' + currentLangConfig.flag + '</span>' +
      '<span class="lang-label" style="margin-left: .5rem;">' + currentLangConfig.label + '</span>' +
      '</button>';

    const listItems = sortedLanguages.map((code) => {
      const lang = languages[code];
      const langPath = lang.prefix + basePath;
      const isActive = code === currentLanguage;
      return (
        '<li class="menu__list-item">' +
        '  <a class="menu__link' + (isActive ? ' menu__link--active' : '') + '" href="' + langPath + '" data-lang="' + code + '">' +
        '    <span class="lang-flag">' + lang.flag + '</span>' +
        '    <span class="lang-label" style="margin-left: .5rem;">' + lang.label + '</span>' +
        (isActive ? '<span class="lang-check" style="margin-left:auto;">✓</span>' : '') +
        '  </a>' +
        '</li>'
      );
    }).join('');

    const html =
      '<li class="menu__list-item mobile-language-switcher" data-page-path="' + basePath + '" data-current-lang="' + currentLanguage + '">' +
      '  <div class="menu__list-item-collapsible">' +
      header +
      '    <ul class="menu__list" hidden>' + listItems + '</ul>' +
      '  </div>' +
      '</li>';

    return html;
  }

  function getSidebarMenuList() {
    const container = document.querySelector('.navbar-sidebar__items .menu__list');
    return container || null;
  }

  function bindMobileSwitcherBehavior(li) {
    const toggle = li.querySelector('.menu__link--sublist');
    const sublist = li.querySelector('.menu__list');
    if (toggle && sublist) {
      toggle.addEventListener('click', function () {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        if (expanded) {
          sublist.setAttribute('hidden', '');
        } else {
          sublist.removeAttribute('hidden');
        }
      });
    }

    li.querySelectorAll('a.menu__link').forEach((a) => {
      a.addEventListener('click', function () {
        setTimeout(() => {
          const body = document.querySelector('body');
          body && body.classList.remove('navbar-sidebar--show');
          const backdrop = document.querySelector('.navbar-sidebar__backdrop');
          backdrop && backdrop.click();
        }, 50);
      });
    });
  }

  function injectOrUpdateMobileSwitcher() {
    const sidebarList = getSidebarMenuList();
    if (!sidebarList) return false;

    const { currentLanguage, basePath } = getCurrentLanguageAndPath();
    const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
    const existing = sidebarList.querySelector('.mobile-language-switcher');

    if (availableLanguages.length <= 1) {
      if (existing) existing.remove();
      return true;
    }

    if (!existing) {
      const html = createMobileLanguageSwitcher(availableLanguages, currentLanguage, basePath);
      if (html) {
        sidebarList.insertAdjacentHTML('beforeend', html);
        const li = sidebarList.querySelector('.mobile-language-switcher');
        if (li) bindMobileSwitcherBehavior(li);
        log('✅ 移动端语言切换器已插入（侧边栏）');
        return true;
      }
    }

    if (existing) {
      const curPath = existing.getAttribute('data-page-path');
      const curLang = existing.getAttribute('data-current-lang');
      if (curPath !== basePath || curLang !== currentLanguage) {
        existing.remove();
        return injectOrUpdateMobileSwitcher();
      }
    }

    return true;
  }

  function isMobileViewport() {
    return window.matchMedia && window.matchMedia('(max-width: 996px)').matches;
  }

  // 与 PC 端一致的 dropdown 结构（dropdown / dropdown__menu / dropdown__link / navbar__link）
  // 注意：容器不上 .navbar__item，避免被移动端样式隐藏；增加 position:relative 以定位菜单
  function createMobileTopbarLanguageSwitcher(availableLanguages, currentLanguage, basePath) {
    if (availableLanguages.length <= 1) return null;

    const currentLangConfig = languages[currentLanguage];
    const priority = { en: 0, cn: 1, ja: 2, es: 3, pt: 4 };
    const sorted = [...availableLanguages].sort((a, b) => {
      if (a === currentLanguage) return -1;
      if (b === currentLanguage) return 1;
      return (priority[a] || 999) - (priority[b] || 999);
    });

    const itemsHTML = sorted
      .map((code) => {
        const lang = languages[code];
        const langPath = lang.prefix + basePath;
        const isActive = code === currentLanguage;
        return [
          '<li>',
          '  <a class="dropdown__link ' + (isActive ? 'dropdown__link--active' : '') + '"',
          '     href="' + langPath + '"',
          '     data-lang="' + code + '"',
          '     title="切换到 ' + lang.label + '"' + (isActive ? ' aria-current="page"' : '') + '>',
          '    <span class="lang-flag">' + lang.flag + '</span>',
          '    <span class="lang-label" style="margin-left:.35rem;">' + lang.label + '</span>',
          (isActive ? '    <span class="lang-check" style="margin-left:auto;">✓</span>' : ''),
          '  </a>',
          '</li>',
        ].join('\\n');
      })
      .join('\\n');

    const switcherHTML = [
      '<div class="dropdown navbar_dorp_items lang-switcher-inline-mobile" data-page-path="' + basePath + '" data-current-lang="' + currentLanguage + '"',
      '     style="display:flex;align-items:center;margin-left:8px;position:relative;">',
      '  <a href="#" class="navbar__link lang-switcher-btn" role="button" aria-haspopup="true" aria-expanded="false"',
      '     style="display:flex;align-items:center;">',
      '    <span class="lang-flag">' + currentLangConfig.flag + '</span>',
      '    <span class="lang-label" style="margin-left:.35rem;">' + currentLangConfig.label + '</span>',
      '  </a>',
      '  <ul class="dropdown__menu" style="min-width: 180px;">',
           itemsHTML,
      '  </ul>',
      '</div>',
    ].join('\\n');

    return switcherHTML;
  }

  // 点击展开/收起（移动端无 hover）：通过切换父容器类名 dropdown--show 来控制显示
  function bindMobileTopbarDropdown(container) {
    const btn = container.querySelector('.lang-switcher-btn');
    const menu = container.querySelector('.dropdown__menu');
    if (!btn || !menu) return;

    function closeMenu() {
      btn.setAttribute('aria-expanded', 'false');
      container.classList.remove('dropdown--show');
    }

    function openMenu() {
      btn.setAttribute('aria-expanded', 'true');
      container.classList.add('dropdown--show');
    }

    function toggleMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMenu(); else openMenu();
    }

    // 点击/触摸触发
    btn.addEventListener('click', toggleMenu);
    btn.addEventListener('touchstart', function(e){ toggleMenu(e); }, {passive:false});

    // 外击关闭
    function outside(e) {
      if (!container.contains(e.target)) closeMenu();
    }
    document.addEventListener('click', outside);
    document.addEventListener('touchstart', outside, {passive:true});

    // 路由或尺寸变化关闭
    window.addEventListener('resize', closeMenu);
    window.addEventListener('orientationchange', closeMenu);
  }

  function injectOrUpdateMobileTopbarSwitcherLogo() {
    // 仅在移动端视口处理；切回桌面时自动移除
    const existing = document.querySelector('.lang-switcher-inline-mobile');
    if (!isMobileViewport()) {
      if (existing) existing.remove();
      return false;
    }

    // 找到 Logo 区域
    const brand = document.querySelector('.navbar__brand');
    if (!brand) return false;

    const { currentLanguage, basePath } = getCurrentLanguageAndPath();
    const availableLanguages = findAvailableLanguages(basePath, currentLanguage);

    // 不需要切换器
    if (availableLanguages.length <= 1) {
      if (existing) existing.remove();
      return true;
    }

    // 顶部栏优先显示，避免与侧边栏重复
    const sidebarList = (typeof getSidebarMenuList === 'function') && getSidebarMenuList();
    const mobileSidebarItem = sidebarList && sidebarList.querySelector('.mobile-language-switcher');
    if (mobileSidebarItem) mobileSidebarItem.remove();

    // 新建或更新
    if (!existing) {
      const html = createMobileTopbarLanguageSwitcher(availableLanguages, currentLanguage, basePath);
      if (html) {
        // 插到 Logo 的右侧
        brand.insertAdjacentHTML('afterend', html);
        const container = document.querySelector('.lang-switcher-inline-mobile');
        if (container) {
          bindMobileTopbarDropdown(container);
        }
        log('✅ 移动端顶部栏语言切换器已插入（Logo 右侧，PC 同款样式）');
        return true;
      }
    } else {
      const curPath = existing.getAttribute('data-page-path');
      const curLang = existing.getAttribute('data-current-lang');
      if (curPath !== basePath || curLang !== currentLanguage) {
        existing.remove();
        return injectOrUpdateMobileTopbarSwitcherLogo();
      }
    }
    return true;
  }

  // 生产环境优化的监控策略
  function startProductionMonitoring() {
    if (primaryCheckInterval) clearInterval(primaryCheckInterval);
    if (backupCheckInterval) clearInterval(backupCheckInterval);

    primaryCheckInterval = setInterval(function() {
      const { currentLanguage, basePath } = getCurrentLanguageAndPath();

      if (!currentPageInfo ||
          currentPageInfo.basePath !== basePath ||
          currentPageInfo.currentLanguage !== currentLanguage) {

        log('🔄 检测到页面变化，执行更新');
        injectOrUpdateSwitcher();                 // 桌面端（保持原样）
        injectOrUpdateMobileTopbarSwitcherLogo(); // 移动端顶部栏（Logo 右侧）
        // injectOrUpdateMobileSwitcher();        // 如需侧边栏也显示，可另行开启
      }
    }, 200);

    backupCheckInterval = setInterval(function() {
      const { currentLanguage, basePath } = getCurrentLanguageAndPath();
      const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
      const existingSwitcher = document.querySelector('.navbar-language-switcher');
      const existingMobileTopbar = document.querySelector('.lang-switcher-inline-mobile');

      if (availableLanguages.length > 1) {
        if (!existingSwitcher) injectOrUpdateSwitcher();
        if (!existingMobileTopbar) injectOrUpdateMobileTopbarSwitcherLogo();
      } else {
        if (existingSwitcher) existingSwitcher.remove();
        if (existingMobileTopbar) existingMobileTopbar.remove();
        const sidebarList = (typeof getSidebarMenuList === 'function') && getSidebarMenuList();
        const mobileExists = sidebarList && sidebarList.querySelector('.mobile-language-switcher');
        if (mobileExists) mobileExists.remove();
        currentPageInfo = null;
      }
    }, 2000);

    log('🔧 启动生产环境监控机制');

    // 监听视口变化（横竖屏/缩放）
    let resizeTimer = null;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        injectOrUpdateMobileTopbarSwitcherLogo();
      }, 150);
    });
  }

  // 强化的路由变化检测（专为生产环境设计）
  function setupProductionRouteDetection() {
    let lastPathname = location.pathname;
    let lastHref = location.href;

    function handleHistoryChange(source) {
      setTimeout(function() {
        if (location.pathname !== lastPathname || location.href !== lastHref) {
          log('🔄 路由变化 [' + source + ']: ' + lastPathname + ' -> ' + location.pathname);
          lastPathname = location.pathname;
          lastHref = location.href;

          setTimeout(function() {
            injectOrUpdateSwitcher();
            injectOrUpdateMobileTopbarSwitcherLogo();
            // setTimeout(injectOrUpdateMobileSwitcher, 50); // 若要侧边栏也显示，可开启
          }, 100);
        }
      }, 50);
    }

    window.addEventListener('popstate', function() {
      handleHistoryChange('popstate');
    });

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function() {
      originalPushState.apply(this, arguments);
      handleHistoryChange('pushState');
    };

    history.replaceState = function() {
      originalReplaceState.apply(this, arguments);
      handleHistoryChange('replaceState');
    };

    document.addEventListener('click', function(e) {
      const link = e.target.closest('a[href]');
      if (link && link.href) {
        try {
          const url = new URL(link.href);
        if (url.origin === window.location.origin && url.pathname !== lastPathname) {
            setTimeout(function() {
              handleHistoryChange('click');
            }, 150);
          }
        } catch (err) {
          // 忽略无效URL
        }
      }
    }, true);

    setInterval(function() {
      if (location.pathname !== lastPathname || location.href !== lastHref) {
        handleHistoryChange('periodic');
      }
    }, 1000);

    log('🔧 启动生产环境路由检测');
  }

  function productionInitialization() {
    log('🚀 初始化生产环境优化版语言切换器');

    function attemptInitialization() {
      const navbar = document.querySelector('.navbar__items--right') ||
                     document.querySelector('.navbar__items');

      if (navbar) {
        log('✅ 导航栏就绪，开始初始化');

        // 立即执行一次注入
        injectOrUpdateSwitcher();                  // 桌面端（保持原样）
        injectOrUpdateMobileTopbarSwitcherLogo();  // 移动端顶部栏（Logo 右侧）
        // injectOrUpdateMobileSwitcher();          // 如需侧边栏也显示，可开启

        // 启动监控机制
        setTimeout(function() {
          startProductionMonitoring();
          setupProductionRouteDetection();
        }, 500);

      } else {
        log('⏳ 等待导航栏加载...');
        setTimeout(attemptInitialization, 300);
      }
    }

    attemptInitialization();
  }

  function init() {
    if (isInitialized) {
      return;
    }

    log('🚀 启动生产环境优化版语言切换器');
    log('📊 映射数据包含 ' + Object.keys(languageMapping).length + ' 个多语言页面');

    isInitialized = true;

    setTimeout(productionInitialization, 800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 100);
  }

  setTimeout(function() {
    if (!isInitialized) {
      log('🔄 备用初始化触发');
      init();
    }
  }, 2000);

})();
`;

    // 确保输出目录存在
    const outputDir = path.dirname(config.outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // 写入JavaScript文件
    fs.writeFileSync(config.outputFile, jsContent, 'utf8');

    console.log(`\n✅ 语言切换器已生成: ${config.outputFile}`);
    console.log(`📄 包含 ${stats.multiLanguage} 个多语言页面的映射数据`);
    console.log(`⚡ 用时: ${Date.now() - startTime}ms`);
    console.log(`🕐 生成时间: ${beijingTimeString}`);

    const stats_file = fs.statSync(config.outputFile);
    console.log(`📦 文件大小: ${Math.round(stats_file.size / 1024)}KB`);

  } catch (error) {
    console.error('❌ 生成失败:', error);
    process.exit(1);
  }
}

// 运行脚本
if (require.main === module) {
  generateJavaScriptFile();
}

module.exports = { generateJavaScriptFile, config };