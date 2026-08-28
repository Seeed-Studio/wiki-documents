#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 定义要搜索的多语言目录
const APP_DIRS = {
  en: 'sites/en/docs/Edge/NVIDIA_Jetson/Application',
  zh: 'sites/zh-CN/docs/Edge/NVIDIA_Jetson/Application',
  ja: 'sites/ja/docs/Edge/NVIDIA_Jetson/Application',
  es: 'sites/es/docs/Edge/NVIDIA_Jetson/Application',
  pt: 'sites/pt-BR/docs/Edge/NVIDIA_Jetson/Application'
};

// 站点语言前缀
const LANG_URL_PREFIX = {
  en: '',
  zh: '/cn',
  ja: '/ja',
  es: '/es',
  pt: '/pt-br'
};

// 定义分类映射（目录名 -> 配置变量名）
const CATEGORY_MAPPING = {
  'Computer_Vision': 'communityList_cv',
  'Generative_AI': 'communityList_gen',
  'Robotics': 'communityList_robot',
  'Developer_Tools': 'developerToolsList',
  'Multimodal_AI': 'multimodalList',
  'Physical_AI': 'physicalAIList',
  'Managed_Services': 'managedServicesList'
};

// J601 / Jetson Thor demo auto-filter
const J601_LANG_DIRS = {
  en: [
    'sites/en/docs/Edge/NVIDIA_Jetson/Application',
    'sites/en/docs/Edge/NVIDIA_Jetson/Other_Devices'
  ],
  zh: [
    'sites/zh-CN/docs/Edge/NVIDIA_Jetson/Application',
    'sites/zh-CN/docs/Edge/NVIDIA_Jetson/Other_Devices'
  ],
  ja: [
    'sites/ja/docs/Edge/NVIDIA_Jetson/Application',
    'sites/ja/docs/Edge/NVIDIA_Jetson/Other_Devices'
  ],
  es: [
    'sites/es/docs/Edge/NVIDIA_Jetson/Application',
    'sites/es/docs/Edge/NVIDIA_Jetson/Other_Devices'
  ],
  pt: [
    'sites/pt-BR/docs/Edge/NVIDIA_Jetson/Application',
    'sites/pt-BR/docs/Edge/NVIDIA_Jetson/Other_Devices'
  ]
};

const J601_KEYWORDS = [
  'j601',
  'jetson thor',
  'agx thor',
  'robotics j601',
  'recomputer robotics j601'
];

const J601_FOLDER_CATEGORY = {
  Computer_Vision: 'Computer Vision',
  Generative_AI: 'Generative AI',
  Robotics: 'Robotics',
  Developer_Tools: 'Developer Tools',
  Multimodal_AI: 'Multimodal AI',
  Physical_AI: 'Physical AI',
  Managed_Services: 'Managed Services',
  Other_Devices: 'Other Devices'
};

const j601DemoData = [];


// 存储提取的数据（按分类）
const data = {
  communityList_cv: [],
  communityList_gen: [],
  communityList_robot: [],
  developerToolsList: [],
  multimodalList: [],
  physicalAIList: [],
  managedServicesList: []
};

// 用于跨语言聚合同一项目
const projectMap = {
  communityList_cv: new Map(),
  communityList_gen: new Map(),
  communityList_robot: new Map(),
  developerToolsList: new Map(),
  multimodalList: new Map(),
  physicalAIList: new Map(),
  managedServicesList: new Map()
};

// 遍历目录提取数据
function extractData() {
  Object.entries(APP_DIRS).forEach(([lang, dir]) => {
    if (!fs.existsSync(dir)) {
      console.warn(`[WARN] Directory not found for ${lang}: ${dir}`);
      return;
    }

    fs.readdirSync(dir, { withFileTypes: true }).forEach(categoryDir => {
      if (!categoryDir.isDirectory()) return;

      const category = categoryDir.name;
      const categoryKey = CATEGORY_MAPPING[category] || 'communityList_cv';
      const categoryPath = path.join(dir, category);

      fs.readdirSync(categoryPath, { withFileTypes: true }).forEach(file => {
        if (!file.isFile() || !(file.name.endsWith('.md') || file.name.endsWith('.mdx'))) {
          return;
        }

        const filePath = path.join(categoryPath, file.name);
        const content = fs.readFileSync(filePath, 'utf8');

        const project = extractProjectInfo(content, filePath, lang);
        if (!project) return;

        const map = projectMap[categoryKey];
        const mergeKey = project.mergeKey;

        if (!map.has(mergeKey)) {
          map.set(mergeKey, {
            name: {},
            img: project.img,
            URL: {},
            category: {},
            lastUpdated: project.lastUpdated,
            author: project.author
          });
        }

        const existing = map.get(mergeKey);

        existing.name[lang] = project.name;
        existing.URL[lang] = project.URL;
        existing.category[lang] = project.category;

        if (!existing.img && project.img) {
          existing.img = project.img;
        }

        if (lang === 'en' || !existing.lastUpdated) {
          existing.lastUpdated = project.lastUpdated;
        }

        if (lang === 'en' || !existing.author) {
          existing.author = project.author;
        }
      });
    });
  });

  Object.keys(projectMap).forEach(categoryKey => {
    data[categoryKey] = Array.from(projectMap[categoryKey].values());
  });
}

// 从文件内容中提取项目信息
function extractProjectInfo(content, filePath, lang) {
  // 提取 frontmatter
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';

  // 提取标题（优先从 frontmatter 的 title 字段，否则从正文）
  const titleMatch = frontmatter.match(/^title:\s*(.*)$/m) || content.match(/^#\s+(.*)$/m);
  if (!titleMatch) return null;

  const name = cleanValue(titleMatch[1]);

  // 提取图片（优先从 frontmatter 的 image 字段）
  let img = 'https://files.seeedstudio.com/wiki/reComputer-Jetson/default-project.png';
  const frontmatterImgMatch = frontmatter.match(/^image:\s*(.*)$/m);

  if (frontmatterImgMatch) {
    img = cleanValue(frontmatterImgMatch[1]);

    // 如果是临时图片，寻找文档中的首个真实图片
    if (img === 'https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png') {
      const markdownImgMatch = content.match(/!\[.*?\]\((.*?\.(jpg|jpeg|png|webp|gif))\)/i);
      const htmlImgMatch = content.match(/<img[^>]+src=["']([^"']*?\.(jpg|jpeg|png|webp|gif))["']?[^>]*>/is);
      const htmlImgMatchMultiline = content.match(/<img[^>]*src=["']([^"']*?\.(jpg|jpeg|png|webp|gif))["']?[^>]*>/is);

      if (markdownImgMatch && markdownImgMatch[1] !== img) {
        img = markdownImgMatch[1];
      } else if (htmlImgMatch && htmlImgMatch[1] !== img) {
        img = htmlImgMatch[1].replace(/\s+/g, '');
      } else if (htmlImgMatchMultiline && htmlImgMatchMultiline[1] !== img) {
        img = htmlImgMatchMultiline[1].replace(/\s+/g, '');
      }
    }
  } else {
    const markdownImgMatch = content.match(/!\[.*?\]\((.*?)\)/);
    const htmlImgMatch = content.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);

    if (markdownImgMatch) {
      img = markdownImgMatch[1];
    } else if (htmlImgMatch) {
      img = htmlImgMatch[1].replace(/\s+/g, '');
    }
  }

  // 生成 URL（所有语言 slug 相同，靠站点前缀区分）
  let slug = '';
  const slugMatch = frontmatter.match(/^slug:\s*(.*)$/m);

  if (slugMatch) {
    slug = cleanSlug(slugMatch[1]);
  } else {
    slug = buildSlugFromFilePath(filePath, lang);
  }

  const URL = `https://wiki.seeedstudio.com${LANG_URL_PREFIX[lang]}${slug}`;
  const mergeKey = slug;

  // 提取分类标签
  const categoryMatch = content.match(/categories:\s*\[(.*?)\]/s);
  const categoryArray = categoryMatch
    ? categoryMatch[1]
        .split(',')
        .map(c => c.trim().replace(/['"]/g, ''))
        .filter(Boolean)
    : [];

  // 提取最后更新时间
  const dateMatch =
    frontmatter.match(/last_update:\s*\n\s*date:\s*(.*)/) ||
    content.match(/lastUpdated:\s*(.*)/);

  const lastUpdated = dateMatch ? cleanValue(dateMatch[1]) : new Date().toLocaleDateString();

  // 提取作者
  const authorMatch =
    frontmatter.match(/last_update:\s*\n[\s\S]*?author:\s*(.*)/) ||
    content.match(/author:\s*(.*)/);

  const author = authorMatch ? cleanValue(authorMatch[1]) : 'Seeed Studio';

  const descriptionMatch = frontmatter.match(/^description:\s*(.*)$/m);
  const description = descriptionMatch ? cleanValue(descriptionMatch[1]) : '';

  return {
    mergeKey,
    name,
    img,
    URL,
    description,
    category: categoryArray,
    lastUpdated,
    author
  };
}

function cleanValue(value) {
  return String(value || '')
    .trim()
    .replace(/^['"]|['"]$/g, '');
}

function cleanSlug(value) {
  const slug = cleanValue(value);
  if (!slug) return '';
  return slug.startsWith('/') ? slug : `/${slug}`;
}

// 当没有 slug 时，从文件名推导 slug
function buildSlugFromFilePath(filePath, lang) {
  const normalized = filePath.replace(/\\/g, '/');
  const baseDir = APP_DIRS[lang].replace(/\\/g, '/');

  let relativePath = normalized.replace(`${baseDir}/`, '').replace(/\.mdx?$/, '');

  // 只取文件名作为 slug，避免把 docs 目录路径带进 URL
  const fileName = path.basename(relativePath);
  return `/${fileName}`;
}



function walkMarkdownFiles(dir, callback) {
  if (!fs.existsSync(dir)) return;

  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkMarkdownFiles(fullPath, callback);
      return;
    }

    if (!entry.isFile() || !(entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      return;
    }

    callback(fullPath, fs.readFileSync(fullPath, 'utf8'));
  });
}

function extractFrontmatterList(frontmatter, field) {
  const blockMatch = frontmatter.match(new RegExp(`^${field}:\\s*\\n((?:\\s+-\\s+.+(?:\\n|$))*)`, 'm'));
  if (blockMatch) {
    return blockMatch[1];
  }

  const inlineMatch = frontmatter.match(new RegExp(`^${field}:\\s*\\[(.*?)\\]`, 's'));
  return inlineMatch ? inlineMatch[1] : '';
}

function buildJ601SearchText(project, frontmatter, filePath) {
  return [
    project.name,
    project.description,
    project.mergeKey,
    extractFrontmatterList(frontmatter, 'keywords'),
    extractFrontmatterList(frontmatter, 'tags'),
    path.basename(filePath)
  ]
    .join(' ')
    .toLowerCase();
}

function matchesJ601Keywords(searchText) {
  return J601_KEYWORDS.some(keyword => searchText.includes(keyword));
}

function getJ601FolderCategory(relativePath) {
  if (relativePath.includes('/Application/')) {
    const folder = relativePath.split('/Application/')[1].split('/')[0];
    return J601_FOLDER_CATEGORY[folder] || folder.replace(/_/g, ' ');
  }

  return J601_FOLDER_CATEGORY.Other_Devices;
}

function collectJ601MatchedKeys() {
  const matchedKeys = new Set();
  const enDirs = J601_LANG_DIRS.en || [];

  enDirs.forEach(baseDir => {
    walkMarkdownFiles(baseDir, (filePath, content) => {
      const project = extractProjectInfo(content, filePath, 'en');
      if (!project) return;

      const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
      const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';
      const searchText = buildJ601SearchText(project, frontmatter, filePath);

      if (matchesJ601Keywords(searchText)) {
        matchedKeys.add(project.mergeKey);
      }
    });
  });

  return matchedKeys;
}

function extractJ601DemoList() {
  const matchedKeys = collectJ601MatchedKeys();
  const projectMap = new Map();

  Object.entries(J601_LANG_DIRS).forEach(([lang, dirs]) => {
    dirs.forEach(baseDir => {
      walkMarkdownFiles(baseDir, (filePath, content) => {
        const project = extractProjectInfo(content, filePath, lang);
        if (!project || !matchedKeys.has(project.mergeKey)) return;

        const relativePath = filePath.replace(/\\/g, '/');
        const folderCategory = getJ601FolderCategory(relativePath);
        const categoryValue = project.category.length ? project.category : [folderCategory];

        if (!projectMap.has(project.mergeKey)) {
          projectMap.set(project.mergeKey, {
            name: {},
            description: {},
            img: project.img,
            URL: {},
            category: {},
            lastUpdated: project.lastUpdated,
            author: project.author
          });
        }

        const existing = projectMap.get(project.mergeKey);
        existing.name[lang] = project.name;
        existing.description[lang] = project.description || '';
        existing.URL[lang] = project.URL.replace('https://wiki.seeedstudio.com', '');
        existing.category[lang] = categoryValue;

        if (!existing.img && project.img) {
          existing.img = project.img;
        }

        if (lang === 'en' || !existing.lastUpdated) {
          existing.lastUpdated = project.lastUpdated;
        }

        if (lang === 'en' || !existing.author) {
          existing.author = project.author;
        }
      });
    });
  });

  j601DemoData.length = 0;
  j601DemoData.push(
    ...Array.from(projectMap.values()).sort((a, b) => {
      return String(b.lastUpdated || '').localeCompare(String(a.lastUpdated || ''));
    })
  );
}

// 生成配置文件// 生成配置文件
function generateConfig() {
  let output = `// Auto-generated by generate-jetson-config.js
// DO NOT EDIT MANUALLY - Run "node scripts/generate-jetson-config.js" to regenerate
// Generated at: ${new Date().toISOString()}\n\n`;

  Object.entries(data).forEach(([key, projects]) => {
    output += `export const ${key} = [\n`;
    projects.forEach((project, index) => {
      const jsonStr = JSON.stringify(project, null, 2);
      const indentedStr = jsonStr.split('\n').map(line => '  ' + line).join('\n');
      output += indentedStr;
      if (index < projects.length - 1) {
        output += ',\n';
      }
    });
    output += '\n]\n\n';
  });

  output += `export const j601DemoList = ${JSON.stringify(j601DemoData, null, 2)}\n\n`;

  const outputPath = path.join(__dirname, '../src/components/jetson/config.auto.js');
  fs.writeFileSync(outputPath, output);
  console.log(`Generated config.auto.js at ${outputPath}`);
  console.log(`Total projects extracted: ${Object.values(data).reduce((sum, arr) => sum + arr.length, 0)}`);
  console.log(`J601 demo projects extracted: ${j601DemoData.length}`);
}

// 执行提取和生成
if (require.main === module) {
  console.log('Extracting Jetson project data...');
  extractData();
  extractJ601DemoList();
  generateConfig();
  console.log('Done!');
}

module.exports = { extractData, extractJ601DemoList, generateConfig };