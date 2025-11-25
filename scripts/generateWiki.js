const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const rootDir = path.join(__dirname, '..');
const docsDirectory = path.join(rootDir, 'docs');
const wikiFilePath = path.join(rootDir, '/src/utils/wiki.js');

const docList = [];
const excludedPaths = [
  path.join(docsDirectory, 'Seeed_Elderly', 'weekly_wiki'), // weekly wiki 的历史目录
  path.join(docsDirectory, 'zh-CN'), // 排除中文文档的目录
  path.join(docsDirectory, 'ja'), // 排除日文文档的目录
  path.join(docsDirectory, 'es'), // 排除西班牙语文档的目录
  path.join(docsDirectory, 'weekly_wiki.md'), // 排除 weekly wiki 的文件


  // 排除指定文档
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_Watcher', 'Applications', 'SenseCAP_Watcher_for_Xiaozhi_AI', 'MCP_Endpoint.md'), //10.22
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_Watcher', 'Applications', 'SenseCAP_Watcher_for_Xiaozhi_AI', 'Extending_Grove_with_MCP.md'), //10.22
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'T1000-E', 'sensecap_t1000_e.md'), //10.29
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'Wio_Tracker_L1', 'get_started_with_wio_tracker_l1.md'), //10.29
  path.join(docsDirectory, 'Edge', 'Raspberry_Pi_Devices', 'RpiDevices.md'), //11.7
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'Wio_Tracker_L1', 'wio_tracker_node.md'), //11.5
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'XIAO_ESP32S3_&_SX1262_Kit', 'Get_Started_meshtastic.md'), //11.5
  path.join(docsDirectory, 'Robotics', 'Robot_Kits', 'Lerobot', 'Lerobot_Lekiwi.md'), //11.12
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_ONE_Weather_Station', 'SenseCAP_ONE_Compact_Weather_Station', 'Introduction.md'), //11.12
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'wio_tracker_kit', 'flash_meshtastic_kit.md'), //11.11
  path.join(docsDirectory, 'Sensor', 'reSpeaker_XVF3800_USB_4_Mic_Array', 'respeaker_xvf3800_usb_4_mic_array.md'), //11.10
  path.join(docsDirectory, 'Edge', 'reCamera', 'reCamera_HQ_POE', 'reCamera_hq_poe_microscope_demo.md'), //11.8
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'Solar_Node', 'get_started_with_solar_node.md'), //11.11
  path.join(docsDirectory, 'Robotics', 'Robot_Actuator', 'HighTorque_Control.md'), //11.19
  path.join(docsDirectory, 'Robotics', 'Robot_Actuator', 'RobStride_Control.md'), //11.19
];

// 语言目录/文件名前缀映射（语言都在 docs/<langDir> 下）
const LANG_DIR = { cn: 'zh-CN', ja: 'ja', es: 'es' };
const LANG_PREFIX = { cn: 'cn_', ja: 'ja_', es: 'es_' };

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

      if (data.last_update && data.last_update.date) {
        docList.push({
          path: slug.startsWith('/') ? slug : `/${slug}`,
          relPath,
          image: data.image || '',
          title,
          date: data.last_update.date,
        });
      }
    }
  });
}
processDirectory(docsDirectory);

// 在语言目录查找标题：同路径 或 同目录前缀文件
function getLocalizedTitle(item, lang /* 'cn'|'ja'|'es' */) {
  const langDir = LANG_DIR[lang];
  const prefix = LANG_PREFIX[lang];

  // relPath: 例如 Edge/NVIDIA_Jetson/foo/bar
  const relPath = item.relPath;

  const abs1md  = path.join(docsDirectory, langDir, relPath + '.md');
  const abs1mdx = path.join(docsDirectory, langDir, relPath + '.mdx');

  // 1) 完全相同相对路径
  let t = tryReadTitle(abs1md) || tryReadTitle(abs1mdx);
  if (t) return t;

  // 2) 同一相对目录 + 语言前缀文件名（cn_/ja_/es_）
  const dir = path.dirname(relPath);
  const base = path.basename(relPath);
  const abs2md  = path.join(docsDirectory, langDir, dir, `${prefix}${base}.md`);
  const abs2mdx = path.join(docsDirectory, langDir, dir, `${prefix}${base}.mdx`);
  t = tryReadTitle(abs2md) || tryReadTitle(abs2mdx);
  if (t) return t;

  // 3) 对 slug 解码后再重试 1) 和 2)
  const relFromSlug = (item.path.startsWith('/') ? item.path.slice(1) : item.path);
  const decoded = relFromSlug.split('/').map(s => {
    try { return decodeURIComponent(s); } catch { return s; }
  }).join('/');

  const abs3md  = path.join(docsDirectory, langDir, decoded + '.md');
  const abs3mdx = path.join(docsDirectory, langDir, decoded + '.mdx');
  t = tryReadTitle(abs3md) || tryReadTitle(abs3mdx);
  if (t) return t;

  const dirD = path.dirname(decoded);
  const baseD = path.basename(decoded);
  const abs4md  = path.join(docsDirectory, langDir, dirD, `${prefix}${baseD}.md`);
  const abs4mdx = path.join(docsDirectory, langDir, dirD, `${prefix}${baseD}.mdx`);
  t = tryReadTitle(abs4md) || tryReadTitle(abs4mdx);
  if (t) return t;

  // 4) 兜底：只用最后一段文件名在语言根下试一次
  const last = decoded.split('/').pop();
  if (last) {
    const abs5md  = path.join(docsDirectory, langDir, last + '.md');
    const abs5mdx = path.join(docsDirectory, langDir, last + '.mdx');
    t = tryReadTitle(abs5md) || tryReadTitle(abs5mdx);
    if (t) return t;

    const abs6md  = path.join(docsDirectory, langDir, `${prefix}${last}.md`);
    const abs6mdx = path.join(docsDirectory, langDir, `${prefix}${last}.mdx`);
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
  if (tCN) out.title_cn = tCN;
  if (tJA) out.title_ja = tJA;
  if (tES) out.title_es = tES;
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

console.log('wiki.js 生成成功：已从 docs/zh-CN、docs/ja、docs/es 补全 title_cn/title_ja/title_es。');
