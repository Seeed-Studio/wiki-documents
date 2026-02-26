const OpenAI = require('openai');
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

// 使用 js-yaml 解析 Front Matter（若不可用，则回退正则）
let yaml;
try {
  yaml = require('js-yaml');
} catch (e) {
  console.log('ℹ️ 未安装 js-yaml，将使用简易解析回退逻辑');
}

const openai = new OpenAI({
  apiKey: process.env.TRANSLATION_API_KEY
});

// 语言配置
const LANGUAGE_CONFIG = {
  'zh-CN': {
    folder: 'zh-CN',
    name: '简体中文',
    pathPrefix: '/cn'
  },
  'ja': {
    folder: 'ja',
    name: '日本語',
    pathPrefix: '/ja'
  },
  'es': {
    folder: 'es',
    name: 'Español',
    pathPrefix: '/es'
  }
};

// 术语保护列表
const PRESERVE_TERMS = {
    'reCamera': 'reCamera',
    'Grove': 'Grove',
    'SenseCAP': 'SenseCAP',
    'LoRa-E5': 'LoRa-E5',
    'API': 'API',
    'GitHub': 'GitHub',
    'Seeed': 'Seeed',
    'IoT': 'IoT',
    'WiFi': 'WiFi',
    'USB': 'USB',
    'reComputer': 'reComputer',
    'XIAO': 'XIAO',
    'ReSpeaker': 'ReSpeaker',
    'LinkStar': 'LinkStar',
    'reTerminal': 'reTerminal',
    'reServer': 'reServer',
    'BeagleBone': 'BeagleBone',
    'SenseCraft': 'SenseCraft',
    'Home Assistant': 'Home Assistant'
};

// 术语表：强制把英文术语译成指定目标语言短语（优先从 .github/scripts/glossary.json 读取；不存在则使用内置空表）
let GLOSSARY = { "zh-CN": {}, "ja": {}, "es": {} };
(async () => {
  try {
    const gPath = path.join(__dirname, 'glossary.json');
    const raw = await fs.readFile(gPath, 'utf8');
    const obj = JSON.parse(raw);
    if (obj && typeof obj === 'object') GLOSSARY = { ...GLOSSARY, ...obj };
  } catch (e) {
    console.log('ℹ️ 未找到自定义术语表 glossary.json，使用内置空表');
  }
})();

// 文档保护列表
const PROTECTED_PATHS = [
  'docs/Getting_Started.md',
  'docs/weekly_wiki.md',
  'docs/LICENSE.md',
  'docs/Seeed_Elderly/weekly_wiki/',
];

// 翻译状态跟踪
const translationStatus = {
  total: 0,
  completed: 0,
  failed: 0,
  moved: 0,
  deleted: 0,
  protected: 0,
  // 被 front matter 跳过的次数
  skipped: 0,
  errors: []
};

// 预处理文档，添加行号标记（保留缩进）
function preprocessDocument(content, startsInsideCodeBlock = false) {
  const lines = content.split('\n');
  const processedLines = [];
  const lineMetadata = [];

  let inCodeBlock = startsInsideCodeBlock;

  lines.forEach((line, index) => {
    // 计算缩进（空格和制表符）
    const indentMatch = line.match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[1] : '';
    const trimmedContent = line.slice(indent.length);

    // 是否为围栏行（```、```js 等）
    const isFence = trimmedContent.trim().startsWith('```');
    // 保存每行的元数据
    const meta = {
      originalLine: line,
      indent: indent,
      content: trimmedContent,
      isEmpty: line.trim() === '',
      inCodeBlockLine: false, // 标记该行是否属于代码块（含围栏行）
    };

    // 根据围栏切换代码块状态，并标记当前行
    if (isFence) {
      meta.inCodeBlockLine = true;
      inCodeBlock = !inCodeBlock;
    } else if (inCodeBlock) {
      meta.inCodeBlockLine = true;
    }

    // 为每行添加唯一标识符，保留缩进
    const lineId = `[LINE_${index}]`;

    if (meta.isEmpty) {
      // 空行
      processedLines.push(`${lineId}[EMPTY_LINE]`);
    } else if (meta.inCodeBlockLine) {
      // 特殊情况：这一行里有 HTML 注释结束符 -->，
      // 需要让模型看到它，否则它会以为前面的 <!-- 注释永远没结束
      if (trimmedContent.includes('-->')) {
        // 只暴露 -->，其余内容用占位符掩盖（模型只需要知道注释结束了）
        processedLines.push(`${lineId}-->`);
      } else {
        // 普通代码行：用占位符顶替真实内容，保持行数/位置
        processedLines.push(`${lineId}__CODE_LINE_PLH__`);
      }
    } else {
      processedLines.push(`${lineId}${indent}${trimmedContent}`);
    }

    lineMetadata.push(meta);
  });

  return {
    processed: processedLines.join('\n'),
    lineMetadata: lineMetadata,
    totalLines: lines.length,
    endsInsideCodeBlock: inCodeBlock // 返回块末状态
  };
}

// 后处理移除标记并恢复缩进
function postprocessDocument(translatedContent, lineMetadata, totalLines) {
  const translatedLines = translatedContent.split('\n');
  const finalLines = [];

  for (let i = 0; i < totalLines; i++) {
    const metadata = lineMetadata[i];

    if (i >= translatedLines.length) {
      // 如果译文行数不够，使用原文
      console.log(`⚠️ 第${i+1}行缺失，使用原文`);
      finalLines.push(metadata.originalLine);
      continue;
    }

    let translatedLine = translatedLines[i];

    // 移除行号标记
    translatedLine = translatedLine.replace(/^\[LINE_\d+\]/, '');

    // 处理空行
    if (translatedLine.includes('[EMPTY_LINE]')) {
      finalLines.push('');
      continue;
    }

    // 代码块内的行：无条件使用原文整行
    if (metadata.inCodeBlockLine) {
      finalLines.push(metadata.originalLine);
      continue;
    }

    // 恢复原始缩进
    if (metadata.indent) {
      // 移除译文中可能存在的缩进（避免双重缩进）
      const translatedTrimmed = translatedLine.trimStart();
      // 添加原始缩进
      finalLines.push(metadata.indent + translatedTrimmed);
    } else {
      finalLines.push(translatedLine);
    }
  }

  // 确保行数完全一致
  if (finalLines.length !== totalLines) {
    console.log(`⚠️ 行数修复: 期望 ${totalLines} 行，实际 ${finalLines.length} 行`);

    // 强制修正行数
    while (finalLines.length < totalLines) {
      const missingIndex = finalLines.length;
      const metadata = lineMetadata[missingIndex];
      finalLines.push(metadata ? metadata.originalLine : '');
    }

    // 如果行数过多，截断
    if (finalLines.length > totalLines) {
      finalLines.length = totalLines;
    }
  }

  return finalLines.join('\n');
}

// 智能分块，避免在关键位置切断
function smartChunkDocument(content, maxChunkSize = 10000) {
  const lines = content.split('\n');
  const chunks = [];
  let frontMatter = '';
  let inFrontMatter = false;
  let contentStartIndex = 0;
  
  // 提取Front Matter
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (i === 0 && line.trim() === '---') {
      inFrontMatter = true;
      frontMatter += line + '\n';
      continue;
    }
    
    if (inFrontMatter) {
      frontMatter += line + '\n';
      if (line.trim() === '---') {
        inFrontMatter = false;
        contentStartIndex = i + 1;
        break;
      }
      continue;
    }
  }
  
  // 智能分块正文内容
  const contentLines = lines.slice(contentStartIndex);
  const contentChunks = intelligentSplit(contentLines, maxChunkSize);
  
  // 构建最终chunks
  if (contentChunks.length <= 1) {
    return [{
      content: content,
      frontMatter: '',
      isComplete: true,
      index: 0,
      total: 1
    }];
  }
  
  return contentChunks.map((chunk, index) => ({
    content: chunk,
    frontMatter: index === 0 ? frontMatter : '',
    isComplete: false,
    index: index,
    total: contentChunks.length
  }));
}

// 智能分割，保持段落和代码块完整性
function intelligentSplit(lines, maxSize) {
  const chunks = [];
  let currentChunk = [];
  let currentSize = 0;
  let inCodeBlock = false;
  let inTable = false;
  let lastHeaderIndex = -1;
  
  // 将换行字节也计入阈值，避免边界误差
  const NL_BYTES = Buffer.byteLength('\n', 'utf8');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // 统计“行+换行”的字节数
    const lineSize = Buffer.byteLength(line, 'utf8') + NL_BYTES;
    
    // 检测代码块
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
    }
    
    // 检测表格
    if (!inCodeBlock && line.includes('|') && line.trim().startsWith('|')) {
      inTable = true;
    } else if (inTable && !line.includes('|')) {
      inTable = false;
    }
    
    // 检测标题
    if (!inCodeBlock && line.match(/^#{1,6}\s/)) {
      lastHeaderIndex = currentChunk.length;
    }
    
    // 决定是否分割
    let shouldSplit = false;
    // 仅在不处于代码块/表格时考虑切割（原逻辑保留）
    if (currentSize + lineSize > maxSize && !inCodeBlock && !inTable) {
      // 空行是理想分割点
      if (line.trim() === '') {
        shouldSplit = true;
      } else if (lastHeaderIndex > 0 && currentChunk.length - lastHeaderIndex > 10) {
        // 在最近的标题处分割（但要确保标题后有足够内容）
        shouldSplit = true;
      } else if (currentSize > maxSize * 1.2) {
        // 超过120%必须分割
        shouldSplit = true;
      }
    }
    
    if (shouldSplit && currentChunk.length > 0) {
      chunks.push(currentChunk.join('\n'));
      currentChunk = [];
      currentSize = 0;
      lastHeaderIndex = -1;
    }
    
    currentChunk.push(line);
    currentSize += lineSize;
  }
  
  // 添加最后一个块
  if (currentChunk.length > 0) {
    chunks.push(currentChunk.join('\n'));
  }
  
  return chunks.length > 0 ? chunks : [lines.join('\n')];
}

// 提示词生成
function generateEnhancedPrompt(targetLang, pathPrefix, isChunk = false, chunkInfo = null) {
  const langName = LANGUAGE_CONFIG[targetLang].name;

  // 术语保护（不翻译/不改写）展示前 5 个示例，避免提示太长
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  // 术语表（强制翻译为指定译法）
  const glossaryPairs = Object.entries(GLOSSARY?.[targetLang] || {})
    .map(([src, dst]) => `- ${src} → ${dst}`)
    .join('\n') || '（无）';

  let prompt = `<instruction>
你是一个专业的技术文档翻译助手。你的任务是将Markdown文档从英文翻译成${langName}。

<critical_rule>
**最重要的规则：保持格式完全一致**
1. 输出必须与输入有完全相同的行数
2. 每个[LINE_X]标记必须保持在对应行的开始
3. [LINE_X]标记后的缩进（空格或制表符）必须完全保留
4. [EMPTY_LINE]表示空行，必须保持为空行
5. 绝对不能合并或拆分任何行
6. 绝对不能改变任何行的缩进级别
</critical_rule>

<translation_rules>
1. **只翻译自然语言文本**，保持以下内容不变：
   - 所有[LINE_X]标记
   - 所有[EMPTY_LINE]标记
   - 标记后的所有缩进（空格和制表符）
   - 代码块内容（\`\`\`之间的内容）
   - 行内代码（\`...\`）中的内容必须**逐字符原样保留**：包括大小写、空格、标点、连字符等都不得改变；即使反引号内看起来是可翻译的英文单词/状态值（例如 \`Low\`、\`High\`、\`On\`、\`Off\`、\`True\`、\`False\`、\`Input\`、\`Output\`），也禁止翻译/本地化/改写
   - URL链接
   - HTML 标签**结构**与**属性**保持不变（不要新增/删除/重排标签；不要修改属性名/属性值）
   - 但标签之间的**可见文本内容要翻译**（例如 <span>、<strong>、<font> 内部的文字）
   - 专有名词：${termsList.split('\n').slice(0, 5).join(', ')}等
   - **教程中引用的目标软件或系统界面的英文元素**（如 App 内的菜单项、按钮名称、字段名、设置项等，通常出现在引号 "..."、加粗 **...**、或菜单路径 File > Preferences 等），请保持英文原文，不要翻译，以便与实际界面一致。
   - 但**网页自身的 HTML 或 JSX 标签内的可见文字**（例如 <span>、<strong>、<font>、导航链接、标题等）若是文档页面展示给读者看的内容，应正常翻译。

2. **术语表（强制翻译）**：以下术语若出现，必须严格使用右侧译法（不允许其它译法）：
${glossaryPairs}

3. **Front Matter处理**：
   - 只翻译title和description字段的值
   - slug字段添加前缀：${pathPrefix}

4. **缩进保持**：
   - 如果原文有缩进，译文必须保持相同的缩进
   - 列表项的缩进级别必须保持不变
   - 代码块内的缩进必须完全保留

5. **内部链接的锚点（fragment）处理——仅限 Seeed 内部链接（合并规则）**：
   - 仅当链接满足以下任一条件时处理锚点：
     1) 以 \`https://wiki.seeedstudio.com/\` 开头；或  
     2) 为相对链接（以 \`/\` 开头或以 \`#\` 开头）
   - **不要尝试推断标题位置**。对 \`#\` 后的 fragment 采用如下**机械流程**：
     - 第一步：将 fragment 中的连字符 \`-\` **视为空格**，还原为一个正常短语/句子（不改变词序，不删除词元）
     - 第二步：翻译这个短语/句子为目标语言
     - 第三步：**将译文中的空格恢复为 \`-\`**；若译文中**没有空格**，则**不添加** \`-\`
   - **禁止出现空格**于最终 fragment；**不得改动** \`#\` 之前的任何部分（域名、路径、查询参数等保持不变）。
   - 处理要点：
     - 专有名词/保留词（如 Grove, SenseCAP, API 等）按“术语保护/术语表”规则保留或按指定译法替换；
     - 仅翻译词语本身，不新增、不删除词元，不改变顺序。
   - 示例：
     - \`[BLE Scanner](#ble-scanner)\`  
       还原：\`ble scanner\` → 译文：\`BLE 扫描器\` → 空格→\`-\` → **\`#BLE-扫描器\`**
     - \`[Intro](/Sensor/Guide/#hardware-overview)\`  
       还原：\`hardware overview\` → 译文：\`硬件概述\`（无空格）→ **\`#硬件概述\`**
     - \`<a href="https://wiki.seeedstudio.com/Sensor/ABC/#getting-started">…\`  
       还原：\`getting started\` → 译文：\`入门指南\`（无空格）→ **\`#入门指南\`**

6. **严格禁止**：
   - 添加或删除任何行
   - 改变任何缩进
   - 添加原文没有的\`\`\`代码块标记
   - 改变[LINE_X]标记的位置
   - 在锚点链接的#后面使用空格

7. **组件规则（Docusaurus Tabs，仅 <TabItem>）**：
   - 若存在 \`label="…"\` 或 \`label='…'\`：**只翻译 label 的值**；不要改动属性名；不要改动其他属性值；此时**不要改动 value**
   - 若不存在 \`label\`，但存在 \`value="…"\` 或 \`value='…'\`：**翻译 value 的值**
   - 示例：
     - \`<TabItem value="For E1002" label="For E1002">\` → \`<TabItem value="For E1002" label="适用于 E1002">\`
     - \`<TabItem value='Install through browser'>\` → \`<TabItem value='通过浏览器安装'>\`
   - 反例（禁止）：\`<TabItem value="适用于 E1002" label="适用于 E1002">\`（有 label 时不应改 value）

8. **产品系列命名（“… Series” 后缀）**：
   - 当出现 “… Series” 这类产品线后缀（如 \`reTerminal E Series\`）时，保留前缀的产品名按术语保护/术语表不变，仅将 \`Series\` 翻译为**该目标语言中表示“产品系列”的常用词**。
   - 各语言示例（仅作参考，实际输出只使用当前目标语言）：
     - 若目标语言为 zh-CN：\`reTerminal E Series\` → \`reTerminal E 系列\`
     - 若目标语言为 ja：\`reTerminal E Series\` → \`reTerminal E シリーズ\`
     - 若目标语言为 es：\`reTerminal E Series\` → \`reTerminal E Serie\`
   - **禁止**在日文或西班牙文译文中输出中文“系列”；必须使用目标语言自身的词汇。
</translation_rules>

<example>
输入：
[LINE_0] ## Getting Started
[LINE_1][EMPTY_LINE]
[LINE_2] This is a tutorial about:
[LINE_3]   - First item
[LINE_4]   - [BLE Scanner](#ble-scanner)
[LINE_5]     - Nested item
[LINE_6] <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
[LINE_7] Click "Settings" in the app (File > Preferences).
[LINE_8] <a className="nav-item"><span className="text">Developer Center</span></a>
[LINE_9] <TabItem value="For E1002" label="For E1002">
[LINE_10] <TabItem value='Install through host'>
[LINE_11] See more: [Intro](/Sensor/Guide/#hardware-overview)
[LINE_12] <a href="https://wiki.seeedstudio.com/Sensor/ABC/#getting-started">Open</a>

正确输出：
[LINE_0] ## 入门指南
[LINE_1][EMPTY_LINE]
[LINE_2] 这是一个关于以下内容的教程：
[LINE_3]   - 第一项
[LINE_4]   - [BLE 扫描器](#BLE-扫描器)
[LINE_5]     - 嵌套项
[LINE_6] <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
[LINE_7] 在应用中点击 "Settings"（File > Preferences）。
[LINE_8] <a className="nav-item"><span className="text">开发者中心</span></a>
[LINE_9] <TabItem value="For E1002" label="适用于 E1002">
[LINE_10] <TabItem value='通过主机安装'>
[LINE_11] 查看更多：[简介](/Sensor/Guide/#硬件概述)
[LINE_12] <a href="https://wiki.seeedstudio.com/Sensor/ABC/#入门指南">Open</a>

错误输出（绝对禁止）：
[LINE_3] - 第一项                                       ❌ 缩进丢失
[LINE_4]   - [BLE 扫描器](#BLE 扫描器)                   ❌ 锚点中出现空格
[LINE_9] <TabItem value="适用于 E1002" label="适用于 E1002"> ❌ 有 label 时不应改动 value
[LINE_10] <TabItem value='Install through host'>         ❌ 无 label 时 value 未翻译
[LINE_11] [简介](#/Sensor/Guide/硬件-概述)                 ❌ 不能改动 \`#\` 之前的 URL 结构
[LINE_12] <a href="https://wiki.seeedstudio.com/Sensor/ABC/#入门-指南">Open</a> ❌ 未按“还原短语→翻译→空格转连字符”的流程，应为 #入门指南
</example>
</instruction>

请直接翻译以下内容，保持所有标记、缩进和格式：`;

  // === 语言一致性硬约束（插入到 <translation_rules> 开头） ===
  const LANGUAGE_GUARD =
    '\n0. **语言一致性**：除代码、行内代码、保留术语与产品名外，所有可见文本必须使用 ' +
    langName +
    ' 输出；不得混用其它自然语言。若发生混用，改译为目标语言。\n';
  prompt = prompt.replace('<translation_rules>', '<translation_rules>\n' + LANGUAGE_GUARD);

  // === 按目标语言替换 <example> 为本地化示例（仅 es / ja 覆盖；默认保留中文示例） ===
  function getLocalizedExampleBlock(lang) {
    if (lang === 'es') {
      return (
`<example>
Entrada:
[LINE_0] ## Getting Started
[LINE_1][EMPTY_LINE]
[LINE_2] This is a tutorial about:
[LINE_3]   - First item
[LINE_4]   - [BLE Scanner](#ble-scanner)
[LINE_5]     - Nested item
[LINE_6] <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
[LINE_7] Click "Settings" in the app (File > Preferences).
[LINE_8] <a className="nav-item"><span className="text">Developer Center</span></a>
[LINE_9] <TabItem value="For E1002" label="For E1002">
[LINE_10] <TabItem value='Install through host'>
[LINE_11] See more: [Intro](/Sensor/Guide/#hardware-overview)
[LINE_12] <a href="https://wiki.seeedstudio.com/Sensor/ABC/#getting-started">Open</a>

Salida correcta:
[LINE_0] ## Introducción
[LINE_1][EMPTY_LINE]
[LINE_2] Este es un tutorial sobre:
[LINE_3]   - Primer elemento
[LINE_4]   - [Escáner BLE](#BLE-escáner)
[LINE_5]     - Elemento anidado
[LINE_6] <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
[LINE_7] Haz clic en "Settings" (File > Preferences) dentro de la app.
[LINE_8] <a className="nav-item"><span className="text">Centro de Desarrolladores</span></a>
[LINE_9] <TabItem value="For E1002" label="Para E1002">
[LINE_10] <TabItem value='Instalar a través del host'>
[LINE_11] Ver más: [Introducción](/Sensor/Guide/#visión-general-del-hardware)
[LINE_12] <a href="https://wiki.seeedstudio.com/Sensor/ABC/#Primeros-pasos">Open</a>

Salida incorrecta (prohibido):
[LINE_3] - Primer elemento                           ❌ Se perdió la sangría
[LINE_4]   - [Escáner BLE](#BLE escáner)              ❌ Espacio dentro del fragmento
[LINE_9] <TabItem value="Para E1002" label="Para E1002"> ❌ Con label presente no se cambia value
[LINE_10] <TabItem value='Install through host'>         ❌ Sin label, el value debe traducirse
[LINE_11] [Introducción](#/Sensor/Guide/visión-general-del-hardware) ❌ No se modifica nada antes de "#"
[LINE_12] <a href="https://wiki.seeedstudio.com/Sensor/ABC/#入门指南">Open</a> ❌ No usar chino en salida española
</example>`
      );
    }

    if (lang === 'ja') {
      return (
`<example>
入力:
[LINE_0] ## Getting Started
[LINE_1][EMPTY_LINE]
[LINE_2] This is a tutorial about:
[LINE_3]   - First item
[LINE_4]   - [BLE Scanner](#ble-scanner)
[LINE_5]     - Nested item
[LINE_6] <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
[LINE_7] Click "Settings" in the app (File > Preferences).
[LINE_8] <a className="nav-item"><span className="text">Developer Center</span></a>
[LINE_9] <TabItem value="For E1002" label="For E1002">
[LINE_10] <TabItem value='Install through host'>
[LINE_11] See more: [Intro](/Sensor/Guide/#hardware-overview)
[LINE_12] <a href="https://wiki.seeedstudio.com/Sensor/ABC/#getting-started">Open</a>

正しい出力:
[LINE_0] ## 入門ガイド
[LINE_1][EMPTY_LINE]
[LINE_2] これは次の内容についてのチュートリアルです：
[LINE_3]   - 最初の項目
[LINE_4]   - [BLE スキャナ](#BLE-スキャナ)
[LINE_5]     - ネストされた項目
[LINE_6] <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
[LINE_7] アプリ内で "Settings"（File > Preferences）をクリックします。
[LINE_8] <a className="nav-item"><span className="text">開発者センター</span></a>
[LINE_9] <TabItem value="For E1002" label="E1002 向け">
[LINE_10] <TabItem value='ホスト経由でインストール'>
[LINE_11] さらに見る：[イントロ](/Sensor/Guide/#ハードウェア概要)
[LINE_12] <a href="https://wiki.seeedstudio.com/Sensor/ABC/#入門ガイド">Open</a>

誤った出力（禁止）:
[LINE_3] - 最初の項目                           ❌ インデント欠落
[LINE_4]   - [BLE スキャナ](#BLE スキャナ)          ❌ fragment 内に空白
[LINE_9] <TabItem value="E1002 向け" label="E1002 向け"> ❌ label がある場合は value を変更しない
[LINE_10] <TabItem value='Install through host'>        ❌ label がない場合、value は翻訳する必要がある
[LINE_11] [イントロ](#/Sensor/Guide/ハードウェア概要)   ❌ 「#」より前の URL 構造を変更しない
[LINE_12] <a href="https://wiki.seeedstudio.com/Sensor/ABC/#入门指南">Open</a> ❌ 中国語混在
</example>`
      );
    }
    return '';
  }

  const localizedExample = getLocalizedExampleBlock(targetLang);
  if (localizedExample) {
    prompt = prompt.replace(/<example>[\s\S]*?<\/example>/, localizedExample);
  }

  if (isChunk && chunkInfo) {
    prompt += `\n\n注意：这是第${chunkInfo.index + 1}/${chunkInfo.total}块。`;
  }

  return prompt;
}

// 验证翻译结果,自动识别原文中的代码块行，并在逐行校验时跳过这些行的格式检查
function validateTranslation(original, translated) {
  const originalLines = original.split('\n');
  const translatedLines = translated.split('\n');

  const issues = [];

  // 检查行数
  if (originalLines.length !== translatedLines.length) {
    issues.push({
      type: 'line_count',
      message: `行数不匹配: 原文${originalLines.length}行，译文${translatedLines.length}行`
    });
  }

  // 检查代码块标记
  const originalCodeBlocks = (original.match(/```/g) || []).length;
  const translatedCodeBlocks = (translated.match(/```/g) || []).length;

  if (originalCodeBlocks !== translatedCodeBlocks) {
    issues.push({
      type: 'code_blocks',
      message: `代码块标记不匹配: 原文${originalCodeBlocks}个，译文${translatedCodeBlocks}个`
    });
  }

  // 预先计算：原文哪些行属于代码块（含围栏行）
  const inCodeFlags = [];
  let inCode = false;
  for (let i = 0; i < originalLines.length; i++) {
    const trimmed = originalLines[i].replace(/^\s*/, '');
    const isFence = trimmed.startsWith('```');
    if (isFence) {
      inCodeFlags[i] = true;
      inCode = !inCode;
    } else {
      inCodeFlags[i] = inCode;
    }
  }

  // 检查锚点链接中的空格（不应该有空格）
  const anchorWithSpaces = translated.match(/\[[^\]]*\]\(#[^)]*\s[^)]*\)/g);
  if (anchorWithSpaces) {
    issues.push({
      type: 'anchor_spaces',
      message: `锚点链接中包含空格: ${anchorWithSpaces.join(', ')}`,
      autofix: true
    });
  }

  // 检查关键格式和缩进（跳过代码块行）
  for (let i = 0; i < Math.min(originalLines.length, translatedLines.length); i++) {
    if (inCodeFlags[i]) continue; // 代码块行跳过格式检查

    const origLine = originalLines[i];
    const transLine = translatedLines[i];

    // 检查缩进级别
    const origIndent = origLine.match(/^(\s*)/)[1].length;
    const transIndent = transLine.match(/^(\s*)/)[1].length;

    if (origIndent !== transIndent && origLine.trim() !== '' && transLine.trim() !== '') {
      issues.push({
        type: 'indent',
        line: i + 1,
        message: `缩进不一致: 第${i + 1}行，原文${origIndent}个空格，译文${transIndent}个空格`
      });
    }

    // 检查标题级别
    const origHeader = origLine.match(/^(\s*)(#{1,6})\s/);
    const transHeader = transLine.match(/^(\s*)(#{1,6})\s/);

    if (origHeader && (!transHeader || origHeader[2] !== transHeader[2])) {
      issues.push({
        type: 'header',
        line: i + 1,
        message: `标题格式不一致: 第${i + 1}行`
      });
    }

    // 检查列表标记（保持缩进后的列表标记）
    const origList = origLine.match(/^(\s*)[-*+]\s/);
    const transList = transLine.match(/^(\s*)[-*+]\s/);

    if (origList && !transList) {
      issues.push({
        type: 'list',
        line: i + 1,
        message: `列表格式丢失: 第${i + 1}行`
      });
    }

    // 检查表格分隔符
    if (origLine.includes('|') && origLine.trim().startsWith('|')) {
      if (!transLine.includes('|')) {
        issues.push({
          type: 'table',
          line: i + 1,
          message: `表格格式丢失: 第${i + 1}行`
        });
      }
    }
  }

  return issues;
}

// Claude翻译函数
async function translateWithClaude(text, targetLang, maxRetries = 2, isChunk = false, chunkInfo = null, isCategory = false, startsInsideCodeBlock = false) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  if (!langConfig) {
    throw new Error(`不支持的语言: ${targetLang}`);
  }

  // 对于category文件，使用原有逻辑
  if (isCategory) {
    const systemPrompt = generateCategoryPrompt(targetLang, langConfig.pathPrefix);

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await openai.chat.completions.create({
          model: 'gpt-5.1-2025-11-13',
          max_completion_tokens: 20000,
          temperature: 0,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: text }
          ]
        });

        // 为了保持调用点一致，这里也返回对象
        return { text: response.choices[0].message.content, endsInsideCodeBlock: false };
      } catch (error) {
        console.error(`❌ Category翻译失败 (尝试 ${attempt}/${maxRetries}): ${error.message}`);
        if (attempt === maxRetries) throw error;
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }

  // 对于markdown文件，使用改进的流程
  const { processed, lineMetadata, totalLines, endsInsideCodeBlock: preEnd } = preprocessDocument(text, startsInsideCodeBlock);
  const systemPrompt = generateEnhancedPrompt(targetLang, langConfig.pathPrefix, isChunk, chunkInfo);

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`📡 调用Claude API (尝试 ${attempt}/${maxRetries})...`);

      const response = await openai.chat.completions.create({
        model: 'gpt-5.1-2025-11-13',
        max_completion_tokens: 20000,
        temperature: 0,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: processed }
        ]
      });

      let translatedContent = response.choices[0].message.content;

      // 先做链接/排版修复（此时代码块仍是占位符，不会被改动）
      translatedContent = fixAnchorLinks(translatedContent);
      translatedContent = processInternalLinks(translatedContent, targetLang);
      if (targetLang === 'zh-CN') {
        translatedContent = addChineseEnglishSpacing(translatedContent);
      }
      // 应用术语表
      translatedContent = applyGlossary(translatedContent, targetLang);

      // 最后一步再恢复行号/缩进，并把代码块整行原样回写
      translatedContent = postprocessDocument(translatedContent, lineMetadata, totalLines);

      // 验证翻译结果（针对最终文本）
      const issues = validateTranslation(text, translatedContent);

      // 过滤掉已自动修复的问题
      const unresolved = issues.filter(issue => !issue.autofix);

      if (unresolved.length > 0) {
        console.log(`⚠️ 发现${unresolved.length}个格式问题:`);
        unresolved.forEach(issue => {
          console.log(`  - ${issue.message}`);
        });

        // 如果问题太多且还有重试机会，重新翻译
        if (unresolved.length > 3 && attempt < maxRetries) {
          console.log(`🔄 问题较多，重新翻译...`);
          continue;
        }
      }

      // 如果有自动修复的问题，记录日志
      const autofixed = issues.filter(issue => issue.autofix);
      if (autofixed.length > 0) {
        console.log(`✅ 自动修复了${autofixed.length}个问题:`);
        autofixed.forEach(issue => {
          console.log(`  - ${issue.message}`);
        });
      }

      console.log(`✅ 翻译成功 (尝试 ${attempt})`);
      return { text: translatedContent, endsInsideCodeBlock: preEnd };

    } catch (error) {
      console.error(`❌ 翻译失败 (尝试 ${attempt}/${maxRetries}): ${error.message}`);

      if (attempt === maxRetries) {
        throw error;
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
}

// Category翻译prompt
function generateCategoryPrompt(targetLang, pathPrefix) {
  const langName = LANGUAGE_CONFIG[targetLang].name;
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  const cleanPathPrefix = pathPrefix.startsWith('/') ? pathPrefix.slice(1) : pathPrefix;
  const localeFolder = LANGUAGE_CONFIG[targetLang].folder;

  const langFilePrefix =
    targetLang === 'zh-CN' ? 'cn_' :
    targetLang === 'ja'    ? 'ja_' :
    targetLang === 'es'    ? 'es_' : '';

  return `你是一个专业的技术文档翻译专家。请将以下 _category_.yml 文件从英文翻译成${langName}。

重要规则：
1. **保持YAML格式完全不变**
2. **只翻译以下字段的值**：
   - label: 标签名称
   - title: 标题
   - description: 描述
3. **不要翻译**：
   - 专有产品名称
   - 技术字段名
4. **link字段处理**：
   - slug：
     - 只修改 slug 的值
     - 在原始值前面加 "${cleanPathPrefix}/" 作为 URL 前缀
   - id：
     - 不翻译 id 里面的英文路径，只改“前缀”和“最后一段文件名”
     - 假设英文原始 id 的格式是： "A/B/C/F"
       - A/B/C 是中间目录
       - F 是最后一段文件名（不带扩展名）
     - 目标语言的 id 按下面的公式改写：
       1. 保留中间目录 A/B/C 不变
       2. 把最后一段 F 改成 "${langFilePrefix}F"
       3. 最前面再加上语言前缀 "${localeFolder}/"
       4. 也就是：英文 id = "A/B/C/F"
          目标语言 id = "${localeFolder}/A/B/C/${langFilePrefix}F"
5. **术语保护**：
${termsList}

只输出翻译后的YAML内容。`;
}

// 修复锚点链接中的空格问题
function fixAnchorLinks(content) {
  // 处理带路径的锚点链接，例如 /slug#fragment 或官方 Wiki 链接中的 #fragment
  content = content.replace(
    /\[([^\]]*)\]\(((?:\/|https:\/\/wiki\.seeedstudio\.com\/)[^)#\s]*)#([^)]*)\)/gi,
    (match, text, base, anchor) => {
      const fixedAnchor = anchor.replace(/\s+/g, '-');
      return `[${text}](${base}#${fixedAnchor})`;
    }
  );

  // 修复锚点链接中的空格
  // 匹配 [文本](#锚点) 格式，将锚点中的空格替换为连字符
  content = content.replace(
    /\[([^\]]*)\]\(#([^)]*)\)/g,
    (match, text, anchor) => {
      // 将锚点中的空格替换为连字符
      const fixedAnchor = anchor.replace(/\s+/g, '-');
      return `[${text}](#${fixedAnchor})`;
    }
  );
  
  // 同时处理HTML格式的锚点链接
  content = content.replace(
    /<a\s+([^>]*\s+)?href="#([^"]*)"([^>]*)>/gi,
    (match, beforeAttrs, anchor, afterAttrs) => {
      const fixedAnchor = anchor.replace(/\s+/g, '-');
      const before = beforeAttrs || '';
      const after = afterAttrs || '';
      return `<a ${before}href="#${fixedAnchor}"${after}>`;
    }
  );
  
  // 修复标题的id属性（如果有的话）
  content = content.replace(
    /^(#{1,6})\s+(.*?)\s*\{#([^}]+)\}/gm,
    (match, hashes, title, id) => {
      const fixedId = id.replace(/\s+/g, '-');
      return `${hashes} ${title} {#${fixedId}}`;
    }
  );
  
  return content;
}

// 处理内部链接
function processInternalLinks(content, targetLang) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  if (!langConfig || !langConfig.pathPrefix) return content;
  
  const pathPrefix = langConfig.pathPrefix;
  
  // 处理各种链接格式
  content = content.replace(
    /https:\/\/wiki\.seeedstudio\.com\/((?!zh-CN|ja|es|cn)[^#\s"')]*)/gi,
    (match, path) => {
      const cleanPath = path.startsWith('/') ? path.slice(1) : path;
      return `https://wiki.seeedstudio.com${pathPrefix}/${cleanPath}`;
    }
  );
  
  content = content.replace(
    /<a\s+([^>]*\s+)?href="(\/[^"]*)"([^>]*)>/gi, 
    (match, beforeAttrs, url, afterAttrs) => {
      if (url.startsWith('http') || url.match(/^\/(zh-CN|ja|es|cn)\//)) {
        return match;
      }
      const newUrl = pathPrefix + url;
      const before = beforeAttrs || '';
      const after = afterAttrs || '';
      return `<a ${before}href="${newUrl}"${after}>`;
    }
  );
  
  content = content.replace(
    /\[([^\]]*)\]\((\/[^)]*)\)/gi,
    (match, text, url) => {
      if (url.startsWith('http') || url.match(/^\/(zh-CN|ja|es|cn)\//)) {
        return match;
      }
      const newUrl = pathPrefix + url;
      return `[${text}](${newUrl})`;
    }
  );
  
  // 修复锚点链接
  content = fixAnchorLinks(content);
  
  return content;
}

// 中英文混排处理
function addChineseEnglishSpacing(content) {
  // 先保存所有的锚点链接
  const anchorLinks = [];
  let tempContent = content.replace(/\[([^\]]*)\]\(#([^)]*)\)/g, (match, text, anchor) => {
    anchorLinks.push(match);
    return `__ANCHOR_PLACEHOLDER_${anchorLinks.length - 1}__`;
  });
  
  // 进行中英文混排处理
  tempContent = tempContent.replace(/([一-龯])([a-zA-Z])/g, '$1 $2');
  tempContent = tempContent.replace(/([a-zA-Z])([一-龯])/g, '$1 $2');
  tempContent = tempContent.replace(/([一-龯])(\d)/g, '$1 $2');
  tempContent = tempContent.replace(/(\d)([一-龯])/g, '$1 $2');
  
  // 恢复锚点链接
  anchorLinks.forEach((link, index) => {
    tempContent = tempContent.replace(`__ANCHOR_PLACEHOLDER_${index}__`, link);
  });
  
  return tempContent;
}

// 在非代码行、且行内反引号之外，应用术语表替换
function applyGlossary(content, targetLang) {
  const map = GLOSSARY?.[targetLang] || {};
  const entries = Object.entries(map);
  if (!entries.length) return content;

  const lines = content.split('\n');
  const out = [];

  // 用于跳过代码块（围栏）整行
  let inFence = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // 跳过 [LINE_x] 标记本身（只处理其后的内容）
    const m = line.match(/^(\[LINE_\d+\])(.*)$/);
    if (!m) { out.push(line); continue; }
    const prefix = m[1];
    let body = m[2];

    // 追踪围栏状态
    const trimmed = body.trimStart();
    const isFence = trimmed.startsWith('```');
    if (isFence) {
      inFence = !inFence;
      out.push(prefix + body);
      continue;
    }
    if (inFence) { out.push(prefix + body); continue; }

    // 保护行内反引号片段：分段替换
    // 例如: 文本 `code Trilateration` 文本
    const parts = body.split(/(`[^`]*`)/g); // 奇数索引处为反引号片段
    for (let pi = 0; pi < parts.length; pi++) {
      const seg = parts[pi];
      // 反引号片段保持不变
      if (seg.startsWith('`') && seg.endsWith('`')) continue;

      // 对可替换片段做术语替换（使用 \b 边界，避免误伤）
      let replaced = seg;
      for (const [src, dst] of entries) {
        // 仅匹配独立词；若需要大小写不敏感可加 'i'
        const re = new RegExp(`\\b${escapeRegExp(src)}\\b`, 'g');
        replaced = replaced.replace(re, dst);
      }
      parts[pi] = replaced;
    }

    out.push(prefix + parts.join(''));
  }

  return out.join('\n');
}

// 简单的正则转义
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 安全拼接：确保块与块之间至少保留一个换行，避免跨块黏连
function joinChunksPreservingNewlines(chunks) {
  if (!Array.isArray(chunks) || chunks.length === 0) return '';
  let out = '';
  for (let i = 0; i < chunks.length; i++) {
    const s = chunks[i] ?? '';
    if (i === 0) {
      out = s;
      continue;
    }
    // 如果上一段不以 '\n' 结尾，则补一个 '\n'
    if (!out.endsWith('\n')) out += '\n';
    out += s;
  }
  return out;
}

// 检查文件是否受保护
function isProtectedPath(filePath) {
  const normalizedPath = filePath.replace(/\\/g, '/');
  
  for (const protectedPath of PROTECTED_PATHS) {
    const normalizedProtected = protectedPath.replace(/\\/g, '/');
    
    if (normalizedPath === normalizedProtected) {
      return true;
    }
    
    if (normalizedProtected.endsWith('/') && normalizedPath.startsWith(normalizedProtected)) {
      return true;
    }
  }
  
  return false;
}

// 生成目标文件路径
function generateTargetPath(originalPath, targetLang) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  const relativePath = path.relative('docs', originalPath);
  
  const parsedPath = path.parse(relativePath);
  
  if (parsedPath.base === '_category_.yml') {
    const targetPath = path.join('docs', langConfig.folder, relativePath);
    return targetPath;
  }
  
  const langPrefix = targetLang === 'zh-CN' ? 'cn_' : 
                    targetLang === 'ja' ? 'ja_' : 
                    targetLang === 'es' ? 'es_' : '';
  
  const newFileName = langPrefix + parsedPath.name + parsedPath.ext;
  const newRelativePath = path.join(parsedPath.dir, newFileName);
  
  const targetPath = path.join('docs', langConfig.folder, newRelativePath);
  
  return targetPath;
}

// ===== Front Matter 工具（支持黑名单 translation.skip / 白名单 translation.only）=====
function extractFrontMatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n/);
  return m ? m[1] : null;
}

function parseFrontMatterObj(fmText) {
  if (!fmText) return {};
  if (yaml) {
    try { return yaml.load(fmText) || {}; } catch {}
  }
  // 回退：简易解析，仅抓 translation.skip / translation.only
  const obj = {};
  // translation.skip: [zh-CN, ...]
  const skipMatch = fmText.match(/translation:\s*[\s\S]*?skip:\s*\[([^\]]*)\]/m);
  if (skipMatch) {
    obj.translation = obj.translation || {};
    obj.translation.skip = skipMatch[1].split(',').map(s => s.trim().replace(/^['"]|['"]$/g,'')).filter(Boolean);
  }
  // translation.only: [ja, es]
  const onlyMatch = fmText.match(/translation:\s*[\s\S]*?only:\s*\[([^\]]*)\]/m);
  if (onlyMatch) {
    obj.translation = obj.translation || {};
    obj.translation.only = onlyMatch[1].split(',').map(s => s.trim().replace(/^['"]|['"]$/g,'')).filter(Boolean);
  }
  return obj;
}

function shouldSkipLangByFrontMatter(frontMatterObj, targetLang) {
  if (!frontMatterObj || typeof frontMatterObj !== 'object') return false;
  const t = frontMatterObj.translation || {};
  // 黑名单 skip：包含当前语言则跳过
  if (Array.isArray(t.skip)) {
    const lowered = t.skip.map(x => String(x));
    if (lowered.includes(targetLang)) return true;
  }
  // 白名单 only：存在 only 且不包含当前语言 → 跳过
  if (Array.isArray(t.only) && !t.only.includes(targetLang)) return true;
  return false;
}

// 翻译_category.yml文件
async function translateCategoryFile(filePath, targetLang) {
  try {
    console.log(`📋 翻译Category文件: ${filePath} -> ${targetLang}`);
    translationStatus.total++;
    
    const content = await fs.readFile(filePath, 'utf8');
    
    const translatedObj = await translateWithClaude(
      content, 
      targetLang, 
      3, 
      false, 
      null, 
      true
    );
    const translatedContent = translatedObj.text || translatedObj; // 向后兼容
    
    const targetPath = generateTargetPath(filePath, targetLang);
    
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.writeFile(targetPath, translatedContent, 'utf8');
    
    console.log(`✅ Category文件翻译完成: ${targetPath}`);
    translationStatus.completed++;
    return { success: true, path: targetPath, fileType: 'category', action: 'translated' };
    
  } catch (error) {
    console.error(`❌ Category文件翻译失败 ${filePath}:`, error.message);
    translationStatus.failed++;
    return { success: false, error: error.message, path: filePath, fileType: 'category' };
  }
}

// 翻译文档块
async function translateDocumentChunks(chunks, targetLang, filePath) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  const translatedChunks = [];
  
  console.log(`📚 开始翻译文档 ${filePath} 到 ${langConfig.name} (共${chunks.length}块)`);
  
  // 跨块延续代码块状态
  let carryInCode = false;
  
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const chunkInfo = { index: i, total: chunks.length };
    
    console.log(`📄 翻译块 ${i + 1}/${chunks.length}`);
    
    try {
      let contentToTranslate;
      
      if (chunk.isComplete || (i === 0 && chunk.frontMatter)) {
        contentToTranslate = chunk.frontMatter + chunk.content;
      } else {
        contentToTranslate = chunk.content;
      }
      
      const translatedResult = await translateWithClaude(
        contentToTranslate, 
        targetLang, 
        3, 
        chunks.length > 1, 
        chunkInfo,
        false,
        carryInCode
      );
      
      translatedChunks.push(translatedResult.text);
      // 将本块结束时的代码块状态传给下一块
      carryInCode = translatedResult.endsInsideCodeBlock;
      
      // API限流延迟
      if (i < chunks.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
    } catch (error) {
      console.error(`❌ 块 ${i + 1} 翻译失败: ${error.message}`);
      throw error;
    }
  }
  
  // 合并翻译结果
  let finalContent;
  if (chunks.length === 1) {
    finalContent = translatedChunks[0];
  } else {
    const firstChunk = translatedChunks[0];
    const restChunks = translatedChunks.slice(1);
    const fmMatch = firstChunk.match(/^---\n[\s\S]*?\n---\n/);
    if (fmMatch) {
      const frontMatter = fmMatch[0];
      const firstBody = firstChunk.slice(frontMatter.length);
      // 保留 front matter + 正文，后续块用安全方式拼接（自动补换行）
      finalContent = joinChunksPreservingNewlines([frontMatter + firstBody, ...restChunks]);
    } else {
      finalContent = joinChunksPreservingNewlines(translatedChunks);
    }
  }

  // 整文行数与原文一致性检查（按当前文件内容）
  try {
    const originalTotalLines = (await fs.readFile(filePath, 'utf8'))
      .toString()
      .replace(/\r\n/g, '\n').replace(/\r/g, '\n')
      .split('\n').length;
    let finalTotalLines = finalContent.split('\n').length;
    if (finalTotalLines !== originalTotalLines) {
      console.warn(`⚠️ 拼接后行数不一致: 原文 ${originalTotalLines}, 译文 ${finalTotalLines}。尝试更保守的换行拼接。`);
      // 强制在块之间都插入换行（即使已有换行也不去掉）
      finalContent = translatedChunks.join('\n');
      finalTotalLines = finalContent.split('\n').length;
      console.log(`🧾 兜底后行数: 译文 ${finalTotalLines}`);
    }
  } catch (e) {
    console.warn(`ℹ️ 行数兜底检查失败（非致命）：${e.message}`);
  }
  
  return finalContent;
}

// 处理文件翻译
async function translateFile(filePath, targetLang) {
  try {
    if (isProtectedPath(filePath)) {
      console.log(`🛡️ 文件受保护，跳过翻译: ${filePath}`);
      translationStatus.protected++;
      return { success: true, path: filePath, action: 'protected' };
    }
    
    if (filePath.endsWith('_category_.yml')) {
      return await translateCategoryFile(filePath, targetLang);
    }
    
    console.log(`📝 翻译文件: ${filePath} -> ${targetLang}`);
    translationStatus.total++;
    
    let content = await fs.readFile(filePath, 'utf8');
    // 统一换行为 LF，避免 CR 残留导致围栏/解析异常
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    console.log(`🔍 文件大小: ${content.length} 字符`);

    // Front Matter 跳过规则判断（仅 md/mdx 有意义）
    if (/\.(md|mdx)$/i.test(filePath)) {
      const fmText = extractFrontMatter(content);
      const fmObj = parseFrontMatterObj(fmText);
      if (shouldSkipLangByFrontMatter(fmObj, targetLang)) {
        console.log(`🚫 Front Matter 指定跳过 ${targetLang}，不生成该语言译文: ${filePath}`);
        translationStatus.skipped++;
        // 返回“成功但跳过”，以便后续报告能统计到
        return { success: true, path: generateTargetPath(filePath, targetLang), action: 'skipped_by_frontmatter' };
      }
    }
    
    // 使用智能分块
    const chunks = smartChunkDocument(content, 10000);
    console.log(`📦 文档分为 ${chunks.length} 块`);
    
    const translatedContent = await translateDocumentChunks(chunks, targetLang, filePath);
    
    const targetPath = generateTargetPath(filePath, targetLang);
    
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.writeFile(targetPath, translatedContent, 'utf8');
    
    console.log(`✅ 文件翻译完成: ${targetPath}`);
    translationStatus.completed++;
    return { success: true, path: targetPath, action: 'translated' };
    
  } catch (error) {
    console.error(`❌ 文件翻译失败 ${filePath}: ${error.message}`);
    translationStatus.failed++;
    return { success: false, error: error.message, path: filePath };
  }
}

// 检测文件操作
async function detectFileOperations(baseSha) {
  try {
    console.log(`🔍 检测文件操作 (基于 ${baseSha})...`);
    
    const statusOutput = execSync(
      `git diff --name-status -M90 ${baseSha}..HEAD -- docs/`,
      { encoding: 'utf8' }
    );
    
    const operations = {
      added: [],
      modified: [],
      deleted: [],
      renamed: [],
      renamedAndModified: []
    };
    
    const lines = statusOutput.split('\n').filter(line => line.trim());
    
    for (const line of lines) {
      const parts = line.split('\t');
      const status = parts[0];
      const file = parts[1];
      
      if ((!file.match(/\.(md|mdx)$/) && !file.endsWith('_category_.yml')) || 
          file.match(/\/(zh-CN|ja|es)\//)) {
        continue;
      }
      
      if (status === 'A') {
        operations.added.push(file);
      } else if (status === 'M') {
        operations.modified.push(file);
      } else if (status === 'D') {
        operations.deleted.push(file);
      } else if (status.startsWith('R')) {
        const oldFile = file;
        const newFile = parts[2];
        
        const similarity = status.match(/R(\d+)/);
        const similarityScore = similarity ? parseInt(similarity[1]) : 100;
        
        if (similarityScore < 100) {
          operations.renamedAndModified.push({ from: oldFile, to: newFile, similarity: similarityScore });
        } else {
          operations.renamed.push({ from: oldFile, to: newFile });
        }
      }
    }
    
    console.log(`📊 文件操作统计:`);
    console.log(`  新增: ${operations.added.length} 个`);
    console.log(`  修改: ${operations.modified.length} 个`);
    console.log(`  删除: ${operations.deleted.length} 个`);
    console.log(`  移动: ${operations.renamed.length} 个`);
    console.log(`  移动+修改: ${operations.renamedAndModified.length} 个`);
    
    return operations;
    
  } catch (error) {
    console.warn(`⚠️ 检测文件操作失败: ${error.message}`);
    return null;
  }
}

// 处理重命名+修改的文件
async function translateRenamedAndModifiedFile(oldPath, newPath, targetLang) {
  try {
    console.log(`🔄 处理重命名+修改文件: ${oldPath} -> ${newPath} (${targetLang})`);
    
    if (isProtectedPath(oldPath) || isProtectedPath(newPath)) {
      console.log(`🛡️ 文件受保护，跳过处理`);
      translationStatus.protected++;
      return { success: true, path: newPath, action: 'protected' };
    }
    
    const oldTargetPath = generateTargetPath(oldPath, targetLang);
    try {
      await fs.access(oldTargetPath);
      await fs.unlink(oldTargetPath);
      console.log(`🗑️ 已删除旧翻译文件: ${oldTargetPath}`);
    } catch (error) {
      console.log(`ℹ️ 旧翻译文件不存在: ${oldTargetPath}`);
    }
    
    const result = await translateFile(newPath, targetLang);
    
    if (result.success) {
      result.action = 'renamed_and_retranslated';
    }
    
    return result;
    
  } catch (error) {
    console.error(`❌ 处理重命名+修改文件失败: ${error.message}`);
    return { success: false, error: error.message, path: newPath };
  }
}

// 处理文件移动
async function moveTranslationFile(oldPath, newPath, targetLang) {
  try {
    if (isProtectedPath(oldPath) || isProtectedPath(newPath)) {
      console.log(`🛡️ 文件受保护，跳过移动`);
      translationStatus.protected++;
      return { success: true, path: newPath, action: 'protected' };
    }
    
    console.log(`📁 移动翻译文件: ${oldPath} -> ${newPath} (${targetLang})`);
    
    const oldTargetPath = generateTargetPath(oldPath, targetLang);
    const newTargetPath = generateTargetPath(newPath, targetLang);
    
    try {
      await fs.access(oldTargetPath);
      await fs.mkdir(path.dirname(newTargetPath), { recursive: true });
      await fs.rename(oldTargetPath, newTargetPath);
      
      console.log(`✅ 翻译文件移动完成`);
      translationStatus.moved++;
      
      return { success: true, path: newTargetPath, action: 'moved' };
    } catch (error) {
      console.log(`ℹ️ 原翻译文件不存在，跳过移动`);
      return { success: true, path: newTargetPath, action: 'skipped' };
    }
    
  } catch (error) {
    console.error(`❌ 移动翻译文件失败: ${error.message}`);
    return { success: false, error: error.message, path: oldPath };
  }
}

// 处理文件删除
async function deleteTranslationFile(filePath, targetLang) {
  try {
    if (isProtectedPath(filePath)) {
      console.log(`🛡️ 文件受保护，跳过删除`);
      translationStatus.protected++;
      return { success: true, path: filePath, action: 'protected' };
    }
    
    console.log(`🗑️ 删除翻译文件: ${filePath} (${targetLang})`);
    
    const targetPath = generateTargetPath(filePath, targetLang);
    
    try {
      await fs.access(targetPath);
      await fs.unlink(targetPath);
      
      console.log(`✅ 翻译文件删除完成`);
      translationStatus.deleted++;
      
      return { success: true, path: targetPath, action: 'deleted' };
    } catch (error) {
      console.log(`ℹ️ 翻译文件不存在，跳过删除`);
      return { success: true, path: targetPath, action: 'skipped' };
    }
    
  } catch (error) {
    console.error(`❌ 删除翻译文件失败: ${error.message}`);
    return { success: false, error: error.message, path: filePath };
  }
}

// 生成进度报告
function generateProgressReport(languages, results) {
  const successCount = results.filter(r => r.success).length;
  const failCount = results.filter(r => !r.success).length;
  const skippedList = results.filter(r => r.success && r.action === 'skipped_by_frontmatter');
  
  let report = `#### 📊 翻译完成报告\n\n`;
  report += `**目标语言:** ${languages.map(l => LANGUAGE_CONFIG[l]?.name || l).join(', ')}\n`;
  report += `**处理时间:** ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n\n`;
  report += `**统计信息:**\n`;
  report += `- ✅ 成功: ${successCount}\n`;
  report += `- ❌ 失败: ${failCount}\n`;
  report += `- ⏭️ 跳过: ${skippedList.length}\n`;
  report += `- 📊 总计: ${successCount + failCount}\n\n`;
  
  if (skippedList.length) {
    report += `**因 Front Matter 跳过的文件:**\n`;
    skippedList.forEach(r => {
      report += `- ${r.path}\n`;
    });
    report += '\n';
  }

  if (results.some(r => r.success && r.action !== 'skipped_by_frontmatter')) {
    report += `**成功处理的文件:**\n`;
    results
      .filter(r => r.success && r.action !== 'skipped_by_frontmatter')
      .forEach(r => {
        report += `- ${r.path}\n`;
      });
    report += '\n';
  }
  
  if (results.some(r => !r.success)) {
    report += `**处理失败的文件:**\n`;
    results.filter(r => !r.success).forEach(r => {
      report += `- ❌ ${r.path}: ${r.error}\n`;
    });
  }
  
  return report;
}

// 主函数
async function main() {
  const languages = process.env.TARGET_LANGUAGES ? process.env.TARGET_LANGUAGES.split(' ') : [];
  const baseSha = process.env.BASE_SHA;
  
  console.log('🌍 开始翻译任务...');
  console.log('目标语言:', languages);
  
  if (!process.env.TRANSLATION_API_KEY) {
    console.error('❌ 缺少TRANSLATION_API_KEY环境变量');
    process.exit(1);
  }
  
  if (!baseSha) {
    console.error('❌ 缺少BASE_SHA环境变量');
    process.exit(1);
  }
  
  const operations = await detectFileOperations(baseSha);
  if (!operations) {
    console.error('❌ 无法检测文件操作');
    process.exit(1);
  }
  
  const allResults = [];
  
  for (const lang of languages) {
    if (!LANGUAGE_CONFIG[lang]) {
      console.log(`⚠️ 跳过未知语言: ${lang}`);
      continue;
    }
    
    const langConfig = LANGUAGE_CONFIG[lang];
    console.log(`\n📄 开始处理 ${langConfig.name}...`);
    
    // 处理新增和修改的文件
    const filesToTranslate = [...operations.added, ...operations.modified];
    for (const file of filesToTranslate) {
      const result = await translateFile(file, lang);
      allResults.push(result);
    }
    
    // 处理重命名+修改
    for (const rename of operations.renamedAndModified) {
      const result = await translateRenamedAndModifiedFile(rename.from, rename.to, lang);
      allResults.push(result);
    }
    
    // 处理纯重命名
    for (const rename of operations.renamed) {
      const result = await moveTranslationFile(rename.from, rename.to, lang);
      allResults.push(result);
    }
    
    // 处理删除
    for (const file of operations.deleted) {
      const result = await deleteTranslationFile(file, lang);
      allResults.push(result);
    }
  }
  
  const report = generateProgressReport(languages, allResults);
  console.log('\n' + report);
  
  await fs.writeFile('/tmp/translation-report.md', report, 'utf8');
  
  const hasChanges = allResults.some(r => r.success && (
    r.action === 'translated' ||
    r.action === 'renamed_and_retranslated' ||
    r.action === 'moved' ||
    r.action === 'deleted' ||
    (!r.action)  // 兼容旧返回
  ) && r.action !== 'skipped' && r.action !== 'protected' && r.action !== 'skipped_by_frontmatter');
  
  if (hasChanges) {
    console.log('\n🚀 设置触发其他工作流标志...');
    await fs.writeFile('/tmp/trigger-deploy.txt', 'true', 'utf8');
  }
  
  if (allResults.some(r => !r.success)) {
    console.log('⚠️ 部分操作失败');
    process.exit(1);
  }
  
  console.log('\n🎉 翻译任务完成！');
}

// 异常处理
process.on('unhandledRejection', (reason, promise) => {
  console.error('未处理的Promise拒绝:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('未捕获的异常:', error);
  process.exit(1);
});

main().catch(error => {
  console.error('❌ 翻译任务失败:', error);
  process.exit(1);
});
