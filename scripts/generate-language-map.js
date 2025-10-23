// 语言切换器（内嵌数据）
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 配置
const config = {
  docsPaths: {
    en: 'docs',
    cn: 'docs/zh-CN',
    ja: 'docs/ja',
    es: 'docs/es',
  },

  languagePrefixes: {
    en: '',
    cn: '/cn',
    ja: '/ja',
    es: '/es',
  },

  outputFile: 'static/js/language-switcher.js',
  verbose: true,
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
        if (
          entry.name.startsWith('.') ||
          entry.name === 'node_modules' ||
          entry.name === '_site' ||
          entry.name === 'build'
        ) {
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
            fileName: entry.name,
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

    if (languageCode !== 'en' && slug.startsWith(config.languagePrefixes[languageCode])) {
      slug = slug.replace(config.languagePrefixes[languageCode], '') || '/';
    }

    slugMap.set(slug, {
      file: file.relativePath,
      language: languageCode,
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
          files: {},
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
    const HOMEPAGE_LOCALES = ['en', 'cn', 'ja', 'es'];
    languageMapping['/'] = HOMEPAGE_LOCALES;
    languageMapping[''] = HOMEPAGE_LOCALES; // 兼容 basePath = '' 的情况

    const SPECIAL_ROUTE_LOCALES = ['en', 'cn', 'ja', 'es'];
    ['/knowledgebase/', '/knowledgebase'].forEach((slug) => {
      languageMapping[slug] = SPECIAL_ROUTE_LOCALES;
    });

    const stats = {
      total: allSlugs.size,
      multiLanguage: Object.keys(languageMapping).length,
      singleLanguage: allSlugs.size - Object.keys(languageMapping).length,
    };

    console.log('\n📊 统计信息:');
    console.log(`   总页面数: ${stats.total}`);
    console.log(`   多语言页面: ${stats.multiLanguage}`);
    console.log(`   单语言页面: ${stats.singleLanguage}`);

    // 生成北京时间
    const now = new Date();
    const beijingTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const beijingTimeString =
      beijingTime.toISOString().replace('T', ' ').slice(0, 19) + ' (北京时间)';

    // 生成生产环境优化版本的JavaScript代码（多行 JSON + Hydration 友好挂载）
    const jsContent = `// 语言切换器 - 生产环境优化版（Hydration 友好 / 多行可读数据）
// 生成时间: ${beijingTimeString}
// 多语言页面: ${stats.multiLanguage} 个

(function () {
  'use strict';

  var DEBUG = false;
  function log() {
    if (DEBUG && typeof console !== 'undefined' && console.log) {
      var args = Array.prototype.slice.call(arguments);
      args.unshift('🔄 [语言切换器]', new Date().toISOString().slice(11, 23));
      console.log.apply(console, args);
    }
  }

  // 语言配置
  var languages = {
    en: { label: 'English', flag: '🇺🇸', prefix: '' },
    cn: { label: '简体中文', flag: '🇨🇳', prefix: '/cn' },
    ja: { label: '日本語', flag: '🇯🇵', prefix: '/ja' },
    es: { label: 'Español', flag: '🇪🇸', prefix: '/es' }
  };

  // 内嵌的语言映射数据（多行可读 JSON）
  // 如需紧凑体积版：把下一行改成 JSON.stringify(languageMapping)（不带 pretty 参数）
  var languageMapping = ${JSON.stringify(languageMapping, null, 2)};

  // ====== 轻量状态 ======
  var isInitialized = false;
  var currentPageInfo = null;
  var cachedNavbar = null;
  var cachedBrand = null;
  var domObserver = null;

  // ========= 通用工具 =========
  function getNavbar() {
    if (cachedNavbar && document.body.contains(cachedNavbar)) return cachedNavbar;
    cachedNavbar =
      document.querySelector('.navbar__items--right') ||
      document.querySelector('.navbar__items') ||
      document.querySelector('.navbar');
    return cachedNavbar;
  }

  function getBrand() {
    if (cachedBrand && document.body.contains(cachedBrand)) return cachedBrand;
    cachedBrand = document.querySelector('.navbar__brand');
    return cachedBrand;
  }

  function isMobileViewport() {
    return window.matchMedia && window.matchMedia('(max-width: 996px)').matches;
  }

  function getCurrentLanguageAndPath() {
    var currentPath = window.location.pathname;
    var detectedLanguage = 'en';
    var basePath = currentPath;

    if (currentPath.indexOf('/cn/') === 0) {
      detectedLanguage = 'cn';
      basePath = currentPath.replace('/cn', '') || '/';
    } else if (currentPath.indexOf('/ja/') === 0) {
      detectedLanguage = 'ja';
      basePath = currentPath.replace('/ja', '') || '/';
    } else if (currentPath.indexOf('/es/') === 0) {
      detectedLanguage = 'es';
      basePath = currentPath.replace('/es', '') || '/';
    }

    if (basePath.charAt(0) !== '/') {
      basePath = '/' + basePath;
    }

    return { currentLanguage: detectedLanguage, basePath: basePath };
  }

  function findAvailableLanguages(basePath, currentLanguage) {
    var pathsToTry = [
      basePath,
      basePath.replace(/\\/$/, ''),
      basePath + (basePath.charAt(basePath.length - 1) === '/' ? '' : '/')
    ];

    for (var i = 0; i < pathsToTry.length; i++) {
      var p = pathsToTry[i];
      if (languageMapping[p]) {
        var availableLanguages = languageMapping[p];
        log('🌐 多语言页面', p, availableLanguages);
        return availableLanguages;
      }
    }
    log('ℹ️ 单语言页面:', basePath);
    return [currentLanguage];
  }

  // ========= 桌面版 =========
  function createLanguageSwitcher(availableLanguages, currentLanguage, basePath) {
    if (!availableLanguages || availableLanguages.length <= 1) return null;

    var currentLangConfig = languages[currentLanguage];
    var priority = { en: 0, cn: 1, ja: 2, es: 3 };
    var sortedLanguages = availableLanguages.slice().sort(function (a, b) {
      if (a === currentLanguage) return -1;
      if (b === currentLanguage) return 1;
      return (priority[a] || 999) - (priority[b] || 999);
    });

    var items = sortedLanguages.map(function (langCode) {
      var lang = languages[langCode];
      var langPath = lang.prefix + basePath;
      var isActive = langCode === currentLanguage;
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
    }).join('\\n');

    var html = [
      '<div class="navbar__item dropdown dropdown--hoverable navbar-language-switcher navbar_dorp_items" data-page-path="' + basePath + '" data-current-lang="' + currentLanguage + '">',
      '  <a href="#" class="navbar__link" aria-haspopup="true" aria-expanded="false" role="button">',
      '    <span class="lang-flag">' + currentLangConfig.flag + '</span>',
      '    <span class="lang-label">' + currentLangConfig.label + '</span>',
      '  </a>',
      '  <ul class="dropdown__menu">',
      items,
      '  </ul>',
      '</div>'
    ].join('\\n');

    return html;
  }

  function injectOrUpdateSwitcher() {
    var navbar = getNavbar();
    if (!navbar) {
      log('⏳ 导航栏未找到');
      return false;
    }

    var info = getCurrentLanguageAndPath();
    var currentLanguage = info.currentLanguage;
    var basePath = info.basePath;

    var availableLanguages = findAvailableLanguages(basePath, currentLanguage);
    var existingSwitcher = document.querySelector('.navbar-language-switcher');

    // 更新当前页面信息
    currentPageInfo = {
      basePath: basePath,
      currentLanguage: currentLanguage,
      availableLanguages: availableLanguages,
      timestamp: Date.now()
    };

    // 单语言页面：移除后返回
    if (availableLanguages.length <= 1) {
      if (existingSwitcher) existingSwitcher.remove();
      return true;
    }

    // 不存在则创建
    if (!existingSwitcher) {
      var switcherHTML = createLanguageSwitcher(availableLanguages, currentLanguage, basePath);
      if (switcherHTML) {
        var insertPosition = null;
        var selectors = ['a[href*="seeedstudio.com"]', '.header-github-link', '.navbar__item:last-child'];
        for (var i = 0; i < selectors.length; i++) {
          var el = navbar.querySelector(selectors[i]);
          if (el) { insertPosition = el; break; }
        }
        if (insertPosition) {
          insertPosition.insertAdjacentHTML('beforebegin', switcherHTML);
        } else {
          navbar.insertAdjacentHTML('beforeend', switcherHTML);
        }

        var switcherElement = navbar.querySelector('.navbar-language-switcher');
        if (switcherElement) {
          var switcherButton = switcherElement.querySelector('.navbar__link');
          if (switcherButton) {
            switcherButton.addEventListener('click', function (e) { e.preventDefault(); });
          }
        }
        log('✅ 创建新的语言切换器');
        return true;
      }
    }

    // 存在则检查是否需要更新
    if (existingSwitcher) {
      var currentPagePath = existingSwitcher.getAttribute('data-page-path');
      var currentLang = existingSwitcher.getAttribute('data-current-lang');
      if (currentPagePath !== basePath || currentLang !== currentLanguage) {
        existingSwitcher.remove();
        return injectOrUpdateSwitcher(); // 递归重新创建
      }
    }
    return true;
  }

  // ========= 移动端（Logo 右侧顶栏） =========
  function createMobileTopbarLanguageSwitcher(availableLanguages, currentLanguage, basePath) {
    if (!availableLanguages || availableLanguages.length <= 1) return null;

    var currentLangConfig = languages[currentLanguage];
    var priority = { en: 0, cn: 1, ja: 2, es: 3 };
    var sorted = availableLanguages.slice().sort(function (a, b) {
      if (a === currentLanguage) return -1;
      if (b === currentLanguage) return 1;
      return (priority[a] || 999) - (priority[b] || 999);
    });

    var itemsHTML = sorted.map(function (code) {
      var lang = languages[code];
      var langPath = lang.prefix + basePath;
      var isActive = code === currentLanguage;
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
        '</li>'
      ].join('\\n');
    }).join('\\n');

    var switcherHTML = [
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

  function bindMobileTopbarDropdown(container) {
    var btn = container.querySelector('.lang-switcher-btn');
    var menu = container.querySelector('.dropdown__menu');
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
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMenu(); else openMenu();
    }

    btn.addEventListener('click', toggleMenu);
    btn.addEventListener('touchstart', function (e) { toggleMenu(e); }, { passive: false });

    function outside(e) { if (!container.contains(e.target)) closeMenu(); }
    document.addEventListener('click', outside);
    document.addEventListener('touchstart', outside, { passive: true });

    window.addEventListener('resize', closeMenu);
    window.addEventListener('orientationchange', closeMenu);
  }

  function injectOrUpdateMobileTopbarSwitcherLogo() {
    var existing = document.querySelector('.lang-switcher-inline-mobile');
    if (!isMobileViewport()) {
      if (existing) existing.remove();
      return false;
    }

    var brand = getBrand();
    if (!brand) return false;

    var info = getCurrentLanguageAndPath();
    var currentLanguage = info.currentLanguage;
    var basePath = info.basePath;

    var availableLanguages = findAvailableLanguages(basePath, currentLanguage);
    if (availableLanguages.length <= 1) {
      if (existing) existing.remove();
      return true;
    }

    // 顶部栏优先显示，避免与侧边栏重复
    if (!existing) {
      var html = createMobileTopbarLanguageSwitcher(availableLanguages, currentLanguage, basePath);
      if (html) {
        brand.insertAdjacentHTML('afterend', html);
        var container = document.querySelector('.lang-switcher-inline-mobile');
        if (container) bindMobileTopbarDropdown(container);
        log('✅ 移动端顶部栏语言切换器已插入（Logo 右侧）');
        return true;
      }
    } else {
      var curPath = existing.getAttribute('data-page-path');
      var curLang = existing.getAttribute('data-current-lang');
      if (curPath !== basePath || curLang !== currentLanguage) {
        existing.remove();
        return injectOrUpdateMobileTopbarSwitcherLogo();
      }
    }
    return true;
  }

  // ========= Hydration 友好：等待导航栏“静默稳定”再挂载 =========
  // 逻辑：观察 navbar（或其父节点）DOM 变动，连续 quietPeriod 毫秒无变动即认为稳定；超时则兜底执行。
  var HYDRATION_QUIET_PERIOD = 160;   // 静默期阈值（毫秒）：调小更“即时”，调大更“稳”
  var HYDRATION_MAX_WAIT = 1800;      // 最长等待（毫秒）：避免极端情况下卡死

  function mountAfterNavbarStable(callback) {
    var navbar = getNavbar();
    if (!navbar) { observeForNavbarOnce(); return; }

    var root = (navbar.parentNode || navbar);
    var lastMut = Date.now();
    var done = false;
    var timer = null;
    var timeout = null;

    function finish() {
      if (done) return;
      done = true;
      if (observer) observer.disconnect();
      if (timer) clearTimeout(timer);
      if (timeout) clearTimeout(timeout);
      callback();
    }

    function scheduleCheck() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        if (Date.now() - lastMut >= HYDRATION_QUIET_PERIOD) {
          finish();
        } else {
          scheduleCheck();
        }
      }, HYDRATION_QUIET_PERIOD);
    }

    var observer = new MutationObserver(function () {
      lastMut = Date.now();
      scheduleCheck();
    });

    try {
      observer.observe(root, { childList: true, subtree: true });
    } catch (_) {
      // 某些情况下 root 不可观察，直接执行
      return callback();
    }

    // 立即安排一次检查（应对“初始就稳定”的情况）
    scheduleCheck();

    // 兜底：最长等待后强制执行
    timeout = setTimeout(finish, HYDRATION_MAX_WAIT);
  }

  // 监听导航栏被 React 重新挂载时，若切换器不在，则补回
  function watchNavbarForRemoval() {
    var navbar = getNavbar();
    if (!navbar) return;
    if (navbar.__langSwitcherWatch) return;

    var debTimer = null;
    var observer = new MutationObserver(function () {
      if (debTimer) clearTimeout(debTimer);
      debTimer = setTimeout(function () {
        var hasDesktop = !!document.querySelector('.navbar-language-switcher');
        var hasMobile = !!document.querySelector('.lang-switcher-inline-mobile');
        if (!hasDesktop || (isMobileViewport() && !hasMobile)) {
          mountSwitchers();
        }
      }, 60);
    });

    observer.observe(navbar.parentNode || navbar, { childList: true, subtree: true });
    navbar.__langSwitcherWatch = observer;
  }

  function mountSwitchers() {
    injectOrUpdateSwitcher();
    injectOrUpdateMobileTopbarSwitcherLogo();
    watchNavbarForRemoval();
  }

  // ========= 事件驱动 & 观察器 =========
  function tryInject() {
    if (!getNavbar()) { observeForNavbarOnce(); return; }
    // 等到导航栏“稳定”后再挂载，避免 Hydration 把我们插入的节点清掉
    mountAfterNavbarStable(mountSwitchers);
  }

  function observeForNavbarOnce() {
    if (domObserver) { domObserver.disconnect(); domObserver = null; }
    if (getNavbar()) return true;

    domObserver = new MutationObserver(function () {
      if (getNavbar()) {
        domObserver.disconnect();
        domObserver = null;
        tryInject();
      }
    });
    domObserver.observe(document.documentElement, { childList: true, subtree: true });
    return false;
  }

  function setupRouteDetection() {
    var lastPathname = location.pathname;
    var lastHref = location.href;

    function onRouteChange() {
      setTimeout(function () {
        if (location.pathname === lastPathname && location.href === lastHref) return;
        lastPathname = location.pathname;
        lastHref = location.href;
        tryInject();
      }, 80);
    }

    window.addEventListener('popstate', onRouteChange);

    var _pushState = history.pushState;
    var _replaceState = history.replaceState;
    history.pushState = function () { _pushState.apply(this, arguments); onRouteChange(); };
    history.replaceState = function () { _replaceState.apply(this, arguments); onRouteChange(); };

    document.addEventListener('click', function (e) {
      var link = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!link) return;
      try {
        var url = new URL(link.href);
        if (url.origin === location.origin && url.pathname !== location.pathname) {
          setTimeout(onRouteChange, 120);
        }
      } catch (err) {}
    }, true);
  }

  function initFast() {
    if (isInitialized) return;
    isInitialized = true;

    tryInject();           // 初次挂载（等待稳定后注入）
    setupRouteDetection(); // 路由变化时按同样方式处理

    // 视口变化时，重算移动端顶栏（轻量 debounce）
    var resizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        injectOrUpdateMobileTopbarSwitcherLogo();
      }, 120);
    });
    window.addEventListener('orientationchange', function () {
      injectOrUpdateMobileTopbarSwitcherLogo();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFast, { once: true });
  } else {
    initFast();
  }
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
