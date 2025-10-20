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
    es: 'docs/es'    
  },
  
  languagePrefixes: {
    en: '',
    cn: '/cn',
    ja: '/ja', 
    es: '/es'
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
    es: { label: 'Español', flag: '🇪🇸', prefix: '/es' }
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
    const priority = { en: 0, cn: 1, ja: 2, es: 3 };
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
    
    // 情况2：需要切换器但不存在 - 创建
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
      
      // 如果页面路径或当前语言发生变化，则更新
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

  // 生产环境优化的监控策略
  function startProductionMonitoring() {
    // 清除可能存在的监控
    if (primaryCheckInterval) clearInterval(primaryCheckInterval);
    if (backupCheckInterval) clearInterval(backupCheckInterval);
    
    // 主要监控：每200ms检查一次（针对生产环境优化）
    primaryCheckInterval = setInterval(function() {
      const { currentLanguage, basePath } = getCurrentLanguageAndPath();
      
      // 检查页面是否发生变化
      if (!currentPageInfo || 
          currentPageInfo.basePath !== basePath || 
          currentPageInfo.currentLanguage !== currentLanguage) {
        
        log('🔄 检测到页面变化，执行更新');
        injectOrUpdateSwitcher();
      }
    }, 200);
    
    // 备用监控：每2秒进行完整检查
    backupCheckInterval = setInterval(function() {
      const { currentLanguage, basePath } = getCurrentLanguageAndPath();
      const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
      const existingSwitcher = document.querySelector('.navbar-language-switcher');
      
      // 完整性检查
      if (availableLanguages.length > 1 && !existingSwitcher) {
        log('🚨 备用监控发现切换器丢失，重新创建');
        injectOrUpdateSwitcher();
      } else if (availableLanguages.length <= 1 && existingSwitcher) {
        log('🚨 备用监控发现多余切换器，移除');
        existingSwitcher.remove();
        currentPageInfo = null;
      }
    }, 2000);
    
    log('🔧 启动生产环境监控机制');
  }

  // 强化的路由变化检测（专为生产环境设计）
  function setupProductionRouteDetection() {
    let lastPathname = location.pathname;
    let lastHref = location.href;
    
    // 方法1：历史记录变化
    function handleHistoryChange(source) {
      setTimeout(function() {
        if (location.pathname !== lastPathname || location.href !== lastHref) {
          log('🔄 路由变化 [' + source + ']: ' + lastPathname + ' -> ' + location.pathname);
          lastPathname = location.pathname;
          lastHref = location.href;
          
          // 强制更新
          setTimeout(function() {
            injectOrUpdateSwitcher();
          }, 100);
        }
      }, 50);
    }
    
    window.addEventListener('popstate', function() {
      handleHistoryChange('popstate');
    });
    
    // 拦截pushState和replaceState
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
    
    // 方法2：全局点击监听（捕获所有内部链接）
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
    
    // 方法3：定期URL检查（生产环境备用方案）
    setInterval(function() {
      if (location.pathname !== lastPathname || location.href !== lastHref) {
        handleHistoryChange('periodic');
      }
    }, 1000);
    
    log('🔧 启动生产环境路由检测');
  }

  function productionInitialization() {
    log('🚀 初始化生产环境优化版语言切换器');
    
    // 等待DOM完全稳定
    function attemptInitialization() {
      const navbar = document.querySelector('.navbar__items--right') || 
                     document.querySelector('.navbar__items');
      
      if (navbar) {
        log('✅ 导航栏就绪，开始初始化');
        
        // 立即执行一次注入
        injectOrUpdateSwitcher();
        
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
    
    // 延迟初始化以确保生产环境稳定性
    setTimeout(productionInitialization, 800);
  }

  // 多重初始化策略
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 100);
  }
  
  // 确保初始化的备用机制
  setTimeout(function() {
    if (!isInitialized) {
      log('🔄 备用初始化触发');
      init();
    }
  }, 2000);

})();`;

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
