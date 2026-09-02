const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const rootDir = path.join(__dirname, '..');
const docsDirectory = path.join(rootDir, 'sites', 'en', 'docs');
const wikiFilePath = path.join(rootDir, '/src/utils/wiki.js');

const docList = [];

const SITE_DOCS_ROOT = {
  cn: path.join(rootDir, 'sites', 'zh-CN', 'docs'),
  ja: path.join(rootDir, 'sites', 'ja', 'docs'),
  es: path.join(rootDir, 'sites', 'es', 'docs'),
  pt: path.join(rootDir, 'sites', 'pt-BR', 'docs'),
};

const excludedPaths = [
  path.join(docsDirectory, 'Seeed_Elderly', 'weekly_wiki'), // weekly wiki 的历史目录
  path.join(docsDirectory, 'weekly_wiki.md'), // 排除 weekly wiki 的文件
  path.join(docsDirectory, 'Robotics', 'Robot_Kits', 'ReachyMini'), // 排除 ReachyMini 目录

  // 排除指定文档
  path.join(docsDirectory, 'Sensor', 'reSpeaker_clip', 'respeaker_clip_sensecraft_voice_sdk.md'), //8.7
  path.join(docsDirectory, 'Edge', 'NVIDIA_Jetson', 'FAQs', 'Jetson_Initrd_Flash_Fails_with_ZFS_Host.md'), //8.13
  path.join(docsDirectory, 'Edge', 'NVIDIA_Jetson', 'FAQs', 'Headless_Setup_and_Recovery_for_A603.md'), //8.7
  path.join(docsDirectory, 'Edge', 'NVIDIA_Jetson', 'FAQs', 'Weston_EGL_NOT_INITIALIZED_on_Jetson_Cold_Boot.md'), //8.17
  path.join(docsDirectory, 'Edge', 'NVIDIA_Jetson', 'FAQs', 'Use_Arducam_OV9281_Camera_with_A603.md'), //8.7
  path.join(docsDirectory, 'Edge', 'reCamera', 'reCamera_Pro', 'faqs', 'FAQs.md'), //8.19
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_Data_Logger', 'SenseCAP_Combo', 'Get_Started_with_SenseCAP_Combo.md'), //8.23
  path.join(docsDirectory, 'Edge', 'reCamera', 'reCamera_Pro', 'Hardware_Usage', 'GPIO_Usage.md'), //8.25
  path.join(docsDirectory, 'Edge', 'reCamera', 'reCamera_Pro', 'Secondary_Development', 'reCamera_Pro_RKNN_Model_Conversion.md'), //8.28
];

// 语言目录/文件名前缀映射（语言 docs 在 sites/<lang>/docs 下）
const LANG_DIR = { cn: 'zh-CN', ja: 'ja', es: 'es', pt: 'pt-BR' };
const LANG_PREFIX = { cn: 'cn_', ja: 'ja_', es: 'es_', pt: 'pt_' };

// 提取标题：首个 H1 或 frontmatter.title
function extractTitle(fileContent) {
  const { data, content } = matter(fileContent);
  const markdownWithoutYaml = content.replace(/^---[\s\S]+?---\s*/, '');
  const markdownWithoutCodeBlocks = markdownWithoutYaml.replace(/```[\s\S]*?```/g, '');
  const titleMatch = markdownWithoutCodeBlocks.match(/^#\s+(.*)/m);
  return (titleMatch ? titleMatch[1].trim() : (data.title || '')).trim();
}

// 读取文件标题（若存在）
function tryReadTitle(absFile) {
  if (!absFile) return null;
  if (!fs.existsSync(absFile)) return null;
  try {
    const raw = fs.readFileSync(absFile, 'utf-8');
    const t = extractTitle(raw);
    return t || null;
  } catch {
    return null;
  }
}

// 提取文档时间：优先 createdAt，没有则回退到 last_update.date
function extractDocDate(data) {
  if (data.createdAt && !isNaN(new Date(data.createdAt).getTime())) {
    return data.createdAt;
  }

  if (
    data.last_update &&
    data.last_update.date &&
    !isNaN(new Date(data.last_update.date).getTime())
  ) {
    return data.last_update.date;
  }

  return null;
}

// 扫描英文文档
function processDirectory(directory) {
  if (excludedPaths.includes(directory)) return;

  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (excludedPaths.includes(filePath)) return;

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (stat.isFile() && path.extname(file) === '.md') {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(raw);

      const title = extractTitle(raw);
      let relPath = path.relative(docsDirectory, filePath).replace(/\\/g, '/');
      relPath = relPath.replace(/\.md$/i, ''); // 去掉 .md

      const slug = data.slug || relPath;
      const docDate = extractDocDate(data);

      if (docDate) {
        docList.push({
          path: slug.startsWith('/') ? slug : `/${slug}`,
          relPath,
          image: data.image || '',
          title,
          date: docDate,
        });
      }
    }
  });
}
processDirectory(docsDirectory);

// 在语言目录查找标题：同路径 或 同目录前缀文件
function getLocalizedTitle(item, lang /* 'cn'|'ja'|'es'|'pt' */) {
  const langDir = LANG_DIR[lang];
  const prefix = LANG_PREFIX[lang];

  // 语言 docs 根目录
  const localizedDocsRoot = SITE_DOCS_ROOT[lang];
  if (!localizedDocsRoot) return null;

  // relPath: 例如 Edge/NVIDIA_Jetson/foo/bar
  const relPath = item.relPath;

  const abs1md  = path.join(localizedDocsRoot, relPath + '.md');
  const abs1mdx = path.join(localizedDocsRoot, relPath + '.mdx');

  // 1) 完全相同相对路径
  let t = tryReadTitle(abs1md) || tryReadTitle(abs1mdx);
  if (t) return t;

  // 2) 同一相对目录 + 语言前缀文件名（cn_/ja_/es_/pt_）
  const dir = path.dirname(relPath);
  const base = path.basename(relPath);
  const abs2md  = path.join(localizedDocsRoot, dir, `${prefix}${base}.md`);
  const abs2mdx = path.join(localizedDocsRoot, dir, `${prefix}${base}.mdx`);
  t = tryReadTitle(abs2md) || tryReadTitle(abs2mdx);
  if (t) return t;

  // 3) 对 slug 解码后再重试 1) 和 2)
  const relFromSlug = (item.path.startsWith('/') ? item.path.slice(1) : item.path);
  const decoded = relFromSlug.split('/').map(s => {
    try { return decodeURIComponent(s); } catch { return s; }
  }).join('/');

  const abs3md  = path.join(localizedDocsRoot, decoded + '.md');
  const abs3mdx = path.join(localizedDocsRoot, decoded + '.mdx');
  t = tryReadTitle(abs3md) || tryReadTitle(abs3mdx);
  if (t) return t;

  const dirD = path.dirname(decoded);
  const baseD = path.basename(decoded);
  const abs4md  = path.join(localizedDocsRoot, dirD, `${prefix}${baseD}.md`);
  const abs4mdx = path.join(localizedDocsRoot, dirD, `${prefix}${baseD}.mdx`);
  t = tryReadTitle(abs4md) || tryReadTitle(abs4mdx);
  if (t) return t;

  // 4) 兜底：只用最后一段文件名在语言根下试一次
  const last = decoded.split('/').pop();
  if (last) {
    const abs5md  = path.join(localizedDocsRoot, last + '.md');
    const abs5mdx = path.join(localizedDocsRoot, last + '.mdx');
    t = tryReadTitle(abs5md) || tryReadTitle(abs5mdx);
    if (t) return t;

    const abs6md  = path.join(localizedDocsRoot, `${prefix}${last}.md`);
    const abs6mdx = path.join(localizedDocsRoot, `${prefix}${last}.mdx`);
    t = tryReadTitle(abs6md) || tryReadTitle(abs6mdx);
    if (t) return t;
  }

  return null;
}

// 排序/截取
docList.sort((a, b) => new Date(b.date) - new Date(a.date));
const latestDocs = docList.slice(0, 12);

// 填充多语言标题
const latestDocsWithI18n = latestDocs.map((it) => {
  const out = { ...it };
  const tCN = getLocalizedTitle(it, 'cn');
  const tJA = getLocalizedTitle(it, 'ja');
  const tES = getLocalizedTitle(it, 'es');
  const tPT = getLocalizedTitle(it, 'pt');
  if (tCN) out.title_cn = tCN;
  if (tJA) out.title_ja = tJA;
  if (tES) out.title_es = tES;
  if (tPT) out.title_pt = tPT;
  delete out.relPath;
  return out;
});

// 每 2 条分组
const docList2D = [];
for (let i = 0; i < latestDocsWithI18n.length; i += 2) {
  docList2D.push(latestDocsWithI18n.slice(i, i + 2));
}

// 输出 wiki.js
const wikiContent = `const docList = ${JSON.stringify(docList2D, null, 2)};\n\nexport default docList;`;
fs.writeFileSync(wikiFilePath, wikiContent);

console.log('wiki.js 生成成功：已从 sites/zh-CN/docs、sites/ja/docs、sites/es/docs、sites/pt-BR/docs 补全 title_cn/title_ja/title_es/title_pt。');