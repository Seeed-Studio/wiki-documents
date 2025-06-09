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
    es: 'docs/Spanish'    
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
    
    const stats = {
      total: allSlugs.size,
      multiLanguage: Object.keys(languageMapping).length,
      singleLanguage: allSlugs.size - Object.keys(languageMapping).length
    };
    
    console.log('\n📊 统计信息:');
    console.log(`   总页面数: ${stats.total}`);
    console.log(`   多语言页面: ${stats.multiLanguage}`);
    console.log(`   单语言页面: ${stats.singleLanguage}`);
    
    // 生成诊断和修复版本的JavaScript代码
    const jsContent = `// 语言切换器 - 诊断和修复版本
// 生成时间: ${new Date().toISOString()}
// 多语言页面: ${stats.multiLanguage} 个

(function() {
  'use strict';

  const DEBUG = true; // 默认开启调试，帮助诊断问题
  
  function log(...args) {
    if (DEBUG) {
      console.log('🔄 [诊断版]', new Date().toISOString().slice(11, 23), ...args);
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

  // 状态管理变量
  let isInitialized = false;
  let retryCount = 0;
  const MAX_RETRIES = 3; // 减少重试次数
  const RETRY_INTERVAL = 200;
  
  // 诊断变量
  let injectionCount = 0;
  let removalCount = 0;
  let lastRemovalReason = '';
  let watchdogInterval = null;

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
    
    log('路径解析:', { currentPath, detectedLanguage, basePath });
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
      log('⚪ 单语言，跳过切换器');
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
      '<div class="navbar__item dropdown dropdown--hoverable navbar-language-switcher navbar_dorp_items" data-injected-at="' + Date.now() + '">',
      '  <a href="#" class="navbar__link" aria-haspopup="true" aria-expanded="false" role="button">',
      '    <span class="lang-flag">' + currentLangConfig.flag + '</span>',
      '    <span class="lang-label">' + currentLangConfig.label + '</span>',
      '    <svg width="8" height="8" class="lang-arrow" aria-hidden="true">',
      '      <path d="M1 2l3 3 3-3" stroke="currentColor" stroke-width="1.5" fill="none"></path>',
      '    </svg>',
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
    
    log('🎨 创建切换器HTML');
    return switcherHTML;
  }

  function injectLanguageSwitcher() {
    const startTime = Date.now();
    injectionCount++;
    
    log('🔧 开始注入切换器... (#' + injectionCount + ', 尝试 ' + (retryCount + 1) + '/' + MAX_RETRIES + ')');
    
    let navbar = document.querySelector('.navbar__items--right') || 
                 document.querySelector('.navbar__items') ||
                 document.querySelector('.navbar');
    
    if (!navbar) {
      log('⏳ 导航栏未找到');
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(injectLanguageSwitcher, RETRY_INTERVAL);
        return;
      } else {
        log('❌ 达到最大重试次数，放弃注入');
        return;
      }
    }

    // 严格检查是否已存在
    const existingSwitcher = document.querySelector('.navbar-language-switcher');
    if (existingSwitcher) {
      const injectedAt = existingSwitcher.getAttribute('data-injected-at');
      log('⚠️ 切换器已存在，注入时间: ' + (injectedAt || '未知'));
      return;
    }

    const { currentLanguage, basePath } = getCurrentLanguageAndPath();
    
    try {
      const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
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
          log('✅ 插入到 ' + insertPosition.tagName + ' 前面');
        } else {
          navbar.insertAdjacentHTML('beforeend', switcherHTML);
          log('✅ 插入到导航栏末尾');
        }
        
        // 防止默认链接行为
        const switcherElement = navbar.querySelector('.navbar-language-switcher');
        if (switcherElement) {
          const switcherButton = switcherElement.querySelector('.navbar__link');
          if (switcherButton) {
            switcherButton.addEventListener('click', function(e) {
              e.preventDefault();
            });
          }
        }
        
        const injectTime = Date.now() - startTime;
        log('🎉 切换器注入成功! (#' + injectionCount + ', 用时' + injectTime + 'ms)');
        log('🌐 支持语言: ' + availableLanguages.join(', '));
        
        retryCount = 0;
        
      } else {
        log('⚪ 单语言页面，无需切换器');
      }
    } catch (error) {
      log('❌ 注入失败:', error);
      
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(injectLanguageSwitcher, RETRY_INTERVAL);
      }
    }
  }

  // 看门狗：定期检查切换器是否还存在
  function startWatchdog() {
    if (watchdogInterval) {
      clearInterval(watchdogInterval);
    }
    
    watchdogInterval = setInterval(function() {
      const { currentLanguage, basePath } = getCurrentLanguageAndPath();
      const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
      
      // 如果应该有切换器但不存在，重新注入
      if (availableLanguages.length > 1) {
        const existingSwitcher = document.querySelector('.navbar-language-switcher');
        if (!existingSwitcher) {
          log('🚨 看门狗发现切换器丢失，重新注入...');
          injectLanguageSwitcher();
        }
      }
    }, 2000); // 每2秒检查一次
    
    log('🐕 看门狗启动，每2秒检查一次');
  }

  // 极简化的路由监听 - 只监听最关键的事件
  function observeRouteChanges() {
    let currentPathname = location.pathname;
    
    function handleRouteChange(source) {
      if (location.pathname !== currentPathname) {
        log('🔄 路由变化 [' + source + ']: ' + currentPathname + ' -> ' + location.pathname);
        currentPathname = location.pathname;
        
        const oldSwitcher = document.querySelector('.navbar-language-switcher');
        if (oldSwitcher) {
          removalCount++;
          lastRemovalReason = source;
          const injectedAt = oldSwitcher.getAttribute('data-injected-at');
          const lifespan = injectedAt ? (Date.now() - parseInt(injectedAt)) : '未知';
          
          oldSwitcher.remove();
          log('🗑️ 移除旧切换器 (#' + removalCount + ', 存在时间: ' + lifespan + 'ms, 原因: ' + source + ')');
        }
        
        retryCount = 0;
        setTimeout(injectLanguageSwitcher, 100);
      }
    }

    // 只监听真正的路由变化
    window.addEventListener('popstate', function() {
      handleRouteChange('popstate');
    });
    
    // 禁用MutationObserver，因为它太敏感了
    log('⚠️ 禁用MutationObserver，只监听popstate事件');
  }

  function init() {
    if (isInitialized) {
      log('⚠️ 已初始化，跳过');
      return;
    }
    
    log('🚀 初始化诊断版语言切换器...');
    log('📊 包含 ' + Object.keys(languageMapping).length + ' 个多语言页面');
    log('📍 当前页面: ' + location.pathname);
    
    isInitialized = true;
    
    // 启动极简路由监听
    observeRouteChanges();
    
    // 立即注入
    injectLanguageSwitcher();
    
    // 启动看门狗
    setTimeout(startWatchdog, 3000); // 3秒后启动看门狗
    
    // 诊断信息
    setTimeout(function() {
      log('📊 诊断统计:');
      log('   注入次数: ' + injectionCount);
      log('   移除次数: ' + removalCount);
      log('   最后移除原因: ' + (lastRemovalReason || '无'));
      
      const currentSwitcher = document.querySelector('.navbar-language-switcher');
      if (currentSwitcher) {
        const injectedAt = currentSwitcher.getAttribute('data-injected-at');
        const age = injectedAt ? (Date.now() - parseInt(injectedAt)) : '未知';
        log('   当前切换器存在，年龄: ' + age + 'ms');
      } else {
        log('   当前无切换器');
      }
    }, 5000);
  }

  // 立即初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 0);
  }

})();`;

    // 确保输出目录存在
    const outputDir = path.dirname(config.outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // 写入JavaScript文件
    fs.writeFileSync(config.outputFile, jsContent, 'utf8');
    
    console.log(`\n✅ 诊断版语言切换器已生成: ${config.outputFile}`);
    console.log(`📄 包含 ${stats.multiLanguage} 个多语言页面的映射数据`);
    console.log(`⚡ 用时: ${Date.now() - startTime}ms`);
    console.log(`🔍 包含详细诊断功能，帮助定位问题！`);
    
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