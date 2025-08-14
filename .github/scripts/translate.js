const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const anthropic = new Anthropic({
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
    folder: 'Spanish',
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
    'Bluetooth': 'Bluetooth',
    'reComputer': 'reComputer',
    'XIAO': 'XIAO',
    'ReSpeaker': 'ReSpeaker',
    'LinkStar': 'LinkStar',
    'reTerminal': 'reTerminal',
    'reserver': 'reserver',
    'BeagleBone': 'BeagleBone',
    'SenseCraft': 'SenseCraft',
    'Home Assistant': 'Home Assistant'
};

// 翻译状态跟踪
const translationStatus = {
  total: 0,
  completed: 0,
  failed: 0,
  errors: []
};

// 估算token数量（粗略估算：1个字符约等于0.75个token）
function estimateTokens(text) {
  return Math.ceil(text.length * 0.75);
}

// 生成目标文件路径（添加语言前缀）
function generateTargetPath(originalPath, targetLang) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  const relativePath = path.relative('docs', originalPath);
  
  // 解析文件路径
  const parsedPath = path.parse(relativePath);
  
  // 为文件名添加语言前缀
  const langPrefix = targetLang === 'zh-CN' ? 'cn_' : 
                    targetLang === 'ja' ? 'ja_' : 
                    targetLang === 'es' ? 'es_' : '';
  
  const newFileName = langPrefix + parsedPath.name + parsedPath.ext;
  const newRelativePath = path.join(parsedPath.dir, newFileName);
  
  // 构造最终目标路径
  const targetPath = path.join('docs', langConfig.folder, newRelativePath);
  
  return targetPath;
}

// 按Markdown结构分块文档
function chunkDocument(content, maxTokens = 15000) {
  const lines = content.split('\n');
  const chunks = [];
  let currentChunk = '';
  let frontMatter = '';
  let inFrontMatter = false;
  let frontMatterEnded = false;
  let contentStartIndex = 0;
  
  // 首先提取Front Matter
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
        frontMatterEnded = true;
        contentStartIndex = i + 1;
        break;
      }
      continue;
    }
  }
  
  // 处理正文内容（跳过Front Matter部分）
  const contentLines = lines.slice(contentStartIndex);
  
  for (let i = 0; i < contentLines.length; i++) {
    const line = contentLines[i];
    const lineWithNewline = line + '\n';
    const potentialChunk = currentChunk + lineWithNewline;
    
    // 如果是标题行且当前chunk不为空，且添加这行会超出限制，则保存当前chunk
    if (line.match(/^#+\s/) && currentChunk.trim() && 
        estimateTokens(potentialChunk) > maxTokens) {
      chunks.push(currentChunk.trim());
      currentChunk = lineWithNewline;
    } else if (estimateTokens(potentialChunk) > maxTokens) {
      // 如果添加这行会超出限制，保存当前chunk
      if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
      }
      currentChunk = lineWithNewline;
    } else {
      currentChunk = potentialChunk;
    }
  }
  
  // 添加最后一个chunk
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }
  
  // 如果没有内容需要分块，返回完整文档
  if (chunks.length === 0) {
    return [{
      content: content,
      frontMatter: '',
      isComplete: true,
      index: 0,
      total: 1
    }];
  }
  
  // 如果只有一个chunk且不超限制，直接返回原内容
  if (chunks.length === 1 && estimateTokens(content) <= maxTokens) {
    return [{
      content: content,
      frontMatter: '',
      isComplete: true,
      index: 0,
      total: 1
    }];
  }
  
  // 为每个chunk添加元数据
  return chunks.map((chunk, index) => ({
    content: chunk,
    frontMatter: index === 0 ? frontMatter : '', // 只有第一个chunk包含Front Matter
    isComplete: false,
    index: index,
    total: chunks.length
  }));
}

// 生成翻译prompt
function generatePrompt(targetLang, pathPrefix, isChunk = false, chunkInfo = null, isIncremental = false) {
  const langName = LANGUAGE_CONFIG[targetLang].name;
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  const chunkInstructions = isChunk ? `

**分块翻译说明：**
- 这是文档的第 ${chunkInfo.index + 1} 部分，共 ${chunkInfo.total} 部分
- 请保持与前后部分的连贯性
- 如果chunk开头或结尾的内容看起来不完整，请根据上下文合理处理
- 保持原有的Markdown结构和格式` : '';

  const incrementalInstructions = isIncremental ? `

**增量翻译说明：**
- 这是文档中被修改的部分及其上下文
- 请只翻译修改的内容，保持上下文部分与原有翻译风格一致
- 确保翻译结果与文档其他部分保持连贯性` : '';

  return `你是一个专业的技术文档翻译专家。请将以下${isChunk ? '部分' : isIncremental ? '修改部分' : '完整的'} Markdown 文档从英文翻译成${langName}。

重要规则：
1. 保持所有 Markdown 格式不变（链接、代码块、标题等）
2. 不要翻译代码示例、文件名、API 名称等技术术语
3. 保持相同的结构和格式
4. 对于内部链接（以 / 开头的链接），请在路径前添加 "${pathPrefix}" 前缀
5. 例如：href="/Sensor_Network" 应该改为 href="${pathPrefix}/Sensor_Network"
6. [链接文本](/path) 应该改为 [链接文本](${pathPrefix}/path)
7. 对于 seeedstudio.com wiki 链接，请添加语言前缀：
   - https://wiki.seeedstudio.com/Sensor_Network 改为 https://wiki.seeedstudio.com${pathPrefix}/Sensor_Network
   - https://wiki.seeedstudio.com/guides/getting-started 改为 https://wiki.seeedstudio.com${pathPrefix}/guides/getting-started
8. 外部链接（其他http开头）和已有语言前缀的链接保持不变
9. 只翻译人类可读的文本内容

Front Matter 处理规则：
- 如果文档开头有 Front Matter（被 --- 包围的 YAML 部分），请按以下规则处理：
  - last_update 字段完全不翻译：包括 date 和 author 的值都必须保持原文不变
  - keywords 字段不翻译：保持原始英文关键词
  - image 字段不翻译：图片链接保持不变
  - slug 字段需要添加语言前缀：如果是 "/hello" 改为 "${pathPrefix}/hello"，如果是 "/path/to/page" 改为 "${pathPrefix}/path/to/page"
  - 只翻译 description 和 title 字段的值
  - 保持 Front Matter 的 YAML 结构和缩进完全不变

格式保持铁律：
- Markdown表格（| 列1 | 列2 |）必须保持为Markdown表格格式，绝对不能转换为HTML表格
- HTML表格（<table><tr><td>）必须保持为HTML表格格式，绝对不能转换为Markdown表格
- 空行数量必须与原文完全一致
- 缩进空格数量必须与原文完全一致
- 所有特殊字符的位置必须与原文完全一致

严格要求：
- 绝对不能添加、删除或修改任何标题
- 绝对不能改变文档结构，包括段落顺序、列表顺序、表格行列顺序等
- 逐句对应翻译，确保译文的每一句都对应原文的特定句子
- 代码块标记和编程代码本身保持不变，绝对不能省略代码块内容
- 不要输出"内容同原文档"或类似的省略说明
- 不要重复输出Front Matter，整个文档只能有一个Front Matter部分

术语保护（保持不变）：
${termsList}${chunkInstructions}${incrementalInstructions}`;
}

// 处理内部链接和seeedstudio.com链接
function processInternalLinks(content, targetLang) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  if (!langConfig || !langConfig.pathPrefix) return content;
  
  const pathPrefix = langConfig.pathPrefix;
  
  // 处理 seeedstudio.com wiki 链接
  content = content.replace(
    /https:\/\/wiki\.seeedstudio\.com\/((?!zh-CN|ja|Spanish|cn)[^#\s"')]*)/gi,
    (match, path) => {
      // 移除路径开头的斜杠（如果有）
      const cleanPath = path.startsWith('/') ? path.slice(1) : path;
      return `https://wiki.seeedstudio.com${pathPrefix}/${cleanPath}`;
    }
  );
  
  // 处理 HTML 格式的相对路径链接：<a href="/path">
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
  
  // 处理 Markdown 格式的相对路径链接：[text](/path)
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
  
  return content;
}

// 提取文档的结构标记用于匹配
function extractStructuralMarkers(content) {
  const lines = content.split('\n');
  const markers = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // 提取标题
    const headerMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headerMatch) {
      markers.push({
        type: 'header',
        level: headerMatch[1].length,
        text: headerMatch[2].replace(/[^\w\s]/g, '').toLowerCase(),
        line: i
      });
    }
    
    // 提取代码块标记
    if (line.startsWith('```')) {
      markers.push({
        type: 'codeblock',
        text: line,
        line: i
      });
    }
    
    // 提取图片或链接
    const linkMatch = line.match(/!\[([^\]]*)\]\([^)]+\)|<img[^>]+src="([^"]+)"/);
    if (linkMatch) {
      markers.push({
        type: 'image',
        text: linkMatch[1] || linkMatch[2] || '',
        line: i
      });
    }
    
    // 提取HTML标签
    const htmlMatch = line.match(/<(\w+)[^>]*>/);
    if (htmlMatch) {
      markers.push({
        type: 'html',
        tag: htmlMatch[1],
        line: i
      });
    }
  }
  
  return markers;
}

// 在目标语言文件中找到对应的上下文片段
async function findCorrespondingTargetContext(englishContext, targetPath, contextPadding = 5) {
  try {
    // 检查目标文件是否存在
    const targetContent = await fs.readFile(targetPath, 'utf8');
    const englishLines = englishContext.content.split('\n');
    const targetLines = targetContent.split('\n');
    
    // 提取英文上下文的结构标记
    const englishMarkers = extractStructuralMarkers(englishContext.content);
    const targetMarkers = extractStructuralMarkers(targetContent);
    
    console.log(`🔍 英文上下文包含 ${englishMarkers.length} 个结构标记`);
    
    if (englishMarkers.length === 0) {
      console.warn(`⚠️ 无法找到结构标记，使用模糊匹配`);
      return await findByFuzzyMatch(englishContext, targetContent, contextPadding);
    }
    
    // 尝试匹配第一个和最后一个标记
    const firstMarker = englishMarkers[0];
    const lastMarker = englishMarkers[englishMarkers.length - 1];
    
    let startLine = -1;
    let endLine = -1;
    
    // 查找开始位置
    for (const targetMarker of targetMarkers) {
      if (markersMatch(firstMarker, targetMarker)) {
        startLine = Math.max(0, targetMarker.line - contextPadding);
        console.log(`✅ 找到开始标记匹配: "${firstMarker.text}" 在第 ${targetMarker.line + 1} 行`);
        break;
      }
    }
    
    // 查找结束位置
    if (startLine >= 0) {
      for (let i = targetMarkers.length - 1; i >= 0; i--) {
        const targetMarker = targetMarkers[i];
        if (targetMarker.line > startLine && markersMatch(lastMarker, targetMarker)) {
          endLine = Math.min(targetLines.length - 1, targetMarker.line + contextPadding);
          console.log(`✅ 找到结束标记匹配: "${lastMarker.text}" 在第 ${targetMarker.line + 1} 行`);
          break;
        }
      }
    }
    
    if (startLine >= 0 && endLine >= 0 && endLine > startLine) {
      const matchedContent = targetLines.slice(startLine, endLine + 1).join('\n');
      console.log(`✅ 成功匹配目标上下文: 第 ${startLine + 1}-${endLine + 1} 行`);
      
      return {
        content: matchedContent,
        startLine: startLine,
        endLine: endLine,
        matchType: 'structural'
      };
    }
    
    console.warn(`⚠️ 结构匹配失败，尝试模糊匹配`);
    return await findByFuzzyMatch(englishContext, targetContent, contextPadding);
    
  } catch (error) {
    console.warn(`⚠️ 无法读取目标文件或匹配失败: ${error.message}`);
    return null;
  }
}

// 检查两个标记是否匹配
function markersMatch(marker1, marker2) {
  if (marker1.type !== marker2.type) return false;
  
  switch (marker1.type) {
    case 'header':
      return marker1.level === marker2.level && 
             similarity(marker1.text, marker2.text) > 0.6;
    case 'codeblock':
      return marker1.text === marker2.text;
    case 'image':
      return similarity(marker1.text, marker2.text) > 0.8;
    case 'html':
      return marker1.tag === marker2.tag;
    default:
      return false;
  }
}

// 计算文本相似度（简单的编辑距离）
function similarity(str1, str2) {
  if (!str1 || !str2) return 0;
  
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix = Array(len1 + 1).fill().map(() => Array(len2 + 1).fill(0));
  
  for (let i = 0; i <= len1; i++) matrix[i][0] = i;
  for (let j = 0; j <= len2; j++) matrix[0][j] = j;
  
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  
  const distance = matrix[len1][len2];
  const maxLen = Math.max(len1, len2);
  return maxLen === 0 ? 1 : (maxLen - distance) / maxLen;
}

// 模糊匹配方案（备用）
async function findByFuzzyMatch(englishContext, targetContent, contextPadding) {
  const englishLines = englishContext.content.split('\n');
  const targetLines = targetContent.split('\n');
  
  // 提取英文上下文的关键文本（去除标记）
  const englishText = englishLines
    .map(line => line.replace(/[#*`\[\]()]/g, '').trim())
    .filter(line => line.length > 10)
    .slice(0, 3); // 取前3行有意义的文本
  
  if (englishText.length === 0) {
    console.warn(`⚠️ 无法提取关键文本进行模糊匹配`);
    return null;
  }
  
  let bestMatch = null;
  let bestScore = 0;
  
  // 在目标文件中搜索相似的文本片段
  for (let i = 0; i < targetLines.length - englishText.length; i++) {
    const targetSegment = targetLines.slice(i, i + englishText.length)
      .map(line => line.replace(/[#*`\[\]()]/g, '').trim());
    
    let totalScore = 0;
    for (let j = 0; j < englishText.length; j++) {
      totalScore += similarity(englishText[j], targetSegment[j] || '');
    }
    const avgScore = totalScore / englishText.length;
    
    if (avgScore > bestScore && avgScore > 0.3) {
      bestScore = avgScore;
      const startLine = Math.max(0, i - contextPadding);
      const endLine = Math.min(targetLines.length - 1, i + englishText.length + contextPadding);
      
      bestMatch = {
        content: targetLines.slice(startLine, endLine + 1).join('\n'),
        startLine: startLine,
        endLine: endLine,
        matchType: 'fuzzy',
        confidence: avgScore
      };
    }
  }
  
  if (bestMatch) {
    console.log(`✅ 模糊匹配成功: 第 ${bestMatch.startLine + 1}-${bestMatch.endLine + 1} 行 (置信度: ${(bestMatch.confidence * 100).toFixed(1)}%)`);
  } else {
    console.warn(`⚠️ 模糊匹配失败`);
  }
  
  return bestMatch;
}

// 生成上下文翻译prompt
function generateContextualPrompt(targetLang, pathPrefix, englishContext, targetContext) {
  const langName = LANGUAGE_CONFIG[targetLang].name;
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  return `你是一个专业的技术文档翻译专家。你需要更新一个现有的${langName}翻译文档中的特定部分。

## 任务说明
以下是英文原文的一个修改片段及其上下文，以及对应的现有${langName}翻译片段。请根据英文的修改，更新${langName}翻译，保持与现有翻译风格的一致性。

## 英文上下文（包含修改）：
\`\`\`
${englishContext.content}
\`\`\`

## 现有${langName}翻译上下文：
\`\`\`
${targetContext.content}
\`\`\`

## 翻译要求：
1. **风格一致性**：参考现有翻译的用词和语言风格
2. **只更新修改部分**：保持其他内容基本不变，除非有明显的翻译错误
3. **保持格式**：所有Markdown格式、HTML标签、代码块必须完全保持
4. **链接处理**：
   - 内部链接添加语言前缀：/path → ${pathPrefix}/path
   - seeedstudio.com链接：https://wiki.seeedstudio.com/path → https://wiki.seeedstudio.com${pathPrefix}/path
5. **术语保护**：以下术语保持不变
${termsList}

## 输出要求：
- 输出完整的更新后的${langName}上下文片段
- 保持相同的行数和结构
- 不要添加任何解释或注释

请开始翻译：`;
}

async function getModifiedLines(filePath, baseSha) {
  try {
    // 获取文件的diff信息，显示行号
    const diffOutput = execSync(
      `git diff -U0 ${baseSha}..HEAD -- "${filePath}"`,
      { encoding: 'utf8' }
    );
    
    const modifiedRanges = [];
    const lines = diffOutput.split('\n');
    
    for (const line of lines) {
      // 匹配 @@ -老行号,老行数 +新行号,新行数 @@ 格式
      const match = line.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      if (match) {
        const newStart = parseInt(match[3]);
        const newCount = parseInt(match[4] || '1');
        
        modifiedRanges.push({
          start: newStart,
          end: newStart + newCount - 1
        });
      }
    }
    
    return modifiedRanges;
  } catch (error) {
    console.warn(`⚠️ 无法获取文件差异信息: ${error.message}`);
    return null;
  }
}

// 提取修改行的上下文
function extractModifiedContext(content, modifiedRanges, contextLines = 15) {
  if (!modifiedRanges || modifiedRanges.length === 0) {
    return null;
  }
  
  const lines = content.split('\n');
  const extractedRanges = [];
  
  for (const range of modifiedRanges) {
    const start = Math.max(0, range.start - contextLines - 1); // -1 because line numbers start from 1
    const end = Math.min(lines.length - 1, range.end + contextLines - 1);
    
    extractedRanges.push({
      originalStart: start,
      originalEnd: end,
      modifiedStart: range.start - 1, // Convert to 0-based
      modifiedEnd: range.end - 1,
      content: lines.slice(start, end + 1).join('\n'),
      lineCount: end - start + 1
    });
  }
  
  // 合并重叠的范围
  const mergedRanges = [];
  extractedRanges.sort((a, b) => a.originalStart - b.originalStart);
  
  for (const range of extractedRanges) {
    if (mergedRanges.length === 0) {
      mergedRanges.push(range);
    } else {
      const lastRange = mergedRanges[mergedRanges.length - 1];
      if (range.originalStart <= lastRange.originalEnd + 1) {
        // 合并重叠范围
        lastRange.originalEnd = Math.max(lastRange.originalEnd, range.originalEnd);
        lastRange.modifiedEnd = Math.max(lastRange.modifiedEnd, range.modifiedEnd);
        lastRange.content = lines.slice(lastRange.originalStart, lastRange.originalEnd + 1).join('\n');
        lastRange.lineCount = lastRange.originalEnd - lastRange.originalStart + 1;
      } else {
        mergedRanges.push(range);
      }
    }
  }
  
  return mergedRanges;
}

// 将翻译结果合并回原文件
async function mergeTranslatedContent(originalContent, translatedRanges, targetPath) {
  try {
    // 检查翻译目标文件是否已存在
    let existingContent = '';
    try {
      existingContent = await fs.readFile(targetPath, 'utf8');
    } catch (error) {
      // 文件不存在，使用原文件作为基础
      console.log(`📄 目标文件不存在，将创建新文件: ${targetPath}`);
      return originalContent; // 如果目标文件不存在，返回完整翻译
    }
    
    const existingLines = existingContent.split('\n');
    
    // 从后往前替换，避免行号偏移问题
    for (let i = translatedRanges.length - 1; i >= 0; i--) {
      const range = translatedRanges[i];
      const translatedLines = range.translatedContent.split('\n');
      
      // 替换对应的行
      existingLines.splice(range.originalStart, range.lineCount, ...translatedLines);
    }
    
    return existingLines.join('\n');
  } catch (error) {
    console.error(`❌ 合并翻译内容失败: ${error.message}`);
    throw error;
  }
}

// 辅助函数：查找Front Matter结束位置
function findFrontMatterEnd(lines) {
  if (!lines[0] || lines[0].trim() !== '---') return -1;
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] && lines[i].trim() === '---') {
      return i;
    }
  }
  return -1;
}

// 辅助函数：检查是否在代码块中
function isInCodeBlock(lines, position) {
  let inCodeBlock = false;
  
  for (let i = 0; i <= position && i < lines.length; i++) {
    if (lines[i] && lines[i].trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
    }
  }
  
  return inCodeBlock;
}

// 辅助函数：在附近寻找最佳插入位置
function findNearbyOptimalPosition(lines, basePosition) {
  const searchRange = 20; // ±20行搜索范围
  
  if (!lines[basePosition] || lines[basePosition].trim() === '') {
    console.log(`   - 基础位置已是空行，无需调整`);
    return basePosition;
  }
  
  console.log(`🔍 在第 ${basePosition + 1} 行附近±${searchRange}行寻找最佳插入位置...`);
  
  // 向下查找空行（优先）
  for (let i = 1; i <= searchRange; i++) {
    const downPos = basePosition + i;
    if (downPos < lines.length && (!lines[downPos] || lines[downPos].trim() === '')) {
      console.log(`   - 向下找到空行: 第 ${downPos + 1} 行 (+${i})`);
      return downPos;
    }
  }
  
  // 向上查找空行
  for (let i = 1; i <= searchRange; i++) {
    const upPos = basePosition - i;
    if (upPos >= 0 && (!lines[upPos] || lines[upPos].trim() === '')) {
      console.log(`   - 向上找到空行: 第 ${upPos + 1} 行 (-${i})`);
      return upPos + 1; // 在空行后插入
    }
  }
  
  // 查找段落边界
  for (let i = 0; i <= searchRange; i++) {
    const pos = basePosition + i;
    if (pos >= lines.length) break;
    
    const line = lines[pos];
    
    // 找到标题行（新段落开始）
    if (line && line.match(/^#+\s/)) {
      console.log(`   - 找到标题边界: 第 ${pos + 1} 行 (+${i})`);
      return pos;
    }
    
    // 找到列表行（新段落开始）
    if (line && (line.match(/^\s*[-*+]\s/) || line.match(/^\s*\d+\.\s/))) {
      console.log(`   - 找到列表边界: 第 ${pos + 1} 行 (+${i})`);
      return pos;
    }
  }
  
  // 最后回退到基础位置
  console.log(`   - 使用基础位置: 第 ${basePosition + 1} 行`);
  return basePosition;
}

// 修改后的目标插入点查找函数 - 以直接位置映射为主导
async function findTargetInsertionPoint(targetContent, englishContext, modification) {
  try {
    const targetLines = targetContent.split('\n');
    
    if (!englishContext) {
      console.warn(`⚠️ 没有英文上下文，使用文档末尾`);
      return Math.max(0, targetLines.length - 1);
    }
    
    // 主策略：直接位置映射
    const englishRelativePos = englishContext.relativePosition;
    const directMappedLine = Math.round(englishRelativePos * targetLines.length);
    
    console.log(`🎯 直接位置映射分析:`);
    console.log(`   - 英文位置: 第 ${englishContext.absoluteLineNumber + 1} 行 (${(englishRelativePos * 100).toFixed(1)}%)`);
    console.log(`   - 译文总行数: ${targetLines.length}`);
    console.log(`   - 直接映射到: 第 ${directMappedLine + 1} 行`);
    
    // 结构安全检查
    let safeInsertionPoint = directMappedLine;
    
    // 避开Front Matter
    const frontMatterEnd = findFrontMatterEnd(targetLines);
    if (frontMatterEnd >= 0 && safeInsertionPoint <= frontMatterEnd) {
      safeInsertionPoint = frontMatterEnd + 1;
      console.log(`   - 调整：避开Front Matter，移至第 ${safeInsertionPoint + 1} 行`);
    }
    
    // 避开代码块
    if (isInCodeBlock(targetLines, safeInsertionPoint)) {
      for (let i = safeInsertionPoint; i < targetLines.length; i++) {
        if (targetLines[i] && targetLines[i].trim().startsWith('```')) {
          safeInsertionPoint = i + 1;
          console.log(`   - 调整：避开代码块，移至第 ${safeInsertionPoint + 1} 行`);
          break;
        }
      }
    }
    
    // 在±20行内寻找最佳插入位置
    const finalInsertionPoint = findNearbyOptimalPosition(targetLines, safeInsertionPoint);
    
    console.log(`✅ 最终插入位置: 第 ${finalInsertionPoint + 1} 行`);
    console.log(`📏 与英文相对位置偏差: ${Math.abs(finalInsertionPoint / targetLines.length - englishRelativePos) * 100:.1f}%`);
    
    return finalInsertionPoint;
    
  } catch (error) {
    console.warn(`⚠️ 查找插入点失败: ${error.message}`);
    const targetLines = targetContent.split('\n');
    return Math.max(0, targetLines.length - 1);
  }
}

// 修改后的查找修改上下文函数 - 专注于准确定位
async function findModificationContext(filePath, modification, contextLines = 5) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const lines = content.split('\n');
    
    console.log(`🔍 定位修改内容在原文中的精确位置`);
    
    if (modification.type === 'add' && modification.newContent) {
      const newContentLines = modification.newContent.split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 0);
      
      if (newContentLines.length === 0) {
        console.warn(`⚠️ 新增内容为空`);
        return null;
      }
      
      console.log(`📍 搜索内容: "${newContentLines[0].substring(0, 60)}..." (${newContentLines.length} 行)`);
      
      // 精确匹配查找
      for (let i = 0; i <= lines.length - newContentLines.length; i++) {
        let exactMatches = 0;
        
        for (let j = 0; j < newContentLines.length; j++) {
          if (i + j >= lines.length) break;
          
          const originalLine = lines[i + j].trim();
          const searchLine = newContentLines[j];
          
          if (originalLine === searchLine) {
            exactMatches++;
          }
        }
        
        // 要求至少80%完全匹配
        if (exactMatches >= Math.ceil(newContentLines.length * 0.8)) {
          console.log(`✅ 精确定位: 第 ${i + 1}-${i + newContentLines.length} 行`);
          console.log(`📊 位置信息: ${(i / lines.length * 100).toFixed(1)}% (${i}/${lines.length})`);
          
          return {
            type: 'add',
            absoluteLineNumber: i,
            relativePosition: i / lines.length,
            totalLines: lines.length,
            matchScore: exactMatches / newContentLines.length
          };
        }
      }
      
      console.warn(`⚠️ 无法精确定位新增内容`);
      return null;
    }
    
    // 对于修改和删除，查找原有内容（保持原逻辑）
    if ((modification.type === 'modify' || modification.type === 'delete') && modification.oldContent) {
      const searchLines = modification.oldContent.split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 0);
      
      for (let i = 0; i <= lines.length - searchLines.length; i++) {
        let matchScore = 0;
        
        for (let j = 0; j < searchLines.length; j++) {
          if (similarity(lines[i + j].trim(), searchLines[j]) > 0.8) {
            matchScore++;
          }
        }
        
        if (matchScore >= Math.max(1, searchLines.length * 0.8)) {
          console.log(`✅ 找到原有内容: 第 ${i + 1}-${i + searchLines.length} 行`);
          
          return {
            type: modification.type,
            absoluteLineNumber: i,
            relativePosition: i / lines.length,
            totalLines: lines.length,
            matchScore: matchScore / searchLines.length
          };
        }
      }
    }
    
    return null;
    
  } catch (error) {
    console.warn(`⚠️ 查找修改位置失败: ${error.message}`);
    return null;
  }
}

// 在目标文件中找到对应的具体内容片段
async function findExactTargetMatch(modification, targetContent, contextLines = 3) {
  try {
    const targetLines = targetContent.split('\n');
    
    // 如果是添加操作，没有对应的旧内容需要查找
    if (modification.type === 'add' && !modification.oldContent) {
      console.log(`ℹ️ 添加操作，无需查找对应内容`);
      return null;
    }
    
    // 确定搜索内容
    const searchContent = modification.oldContent || modification.newContent;
    
    if (!searchContent || !searchContent.trim()) {
      console.warn(`⚠️ 搜索内容为空，跳过`);
      return null;
    }
    
    // 将搜索内容按行分割并清理
    const searchLines = searchContent.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
    
    if (searchLines.length === 0) {
      console.warn(`⚠️ 没有有效的搜索行，跳过`);
      return null;
    }
    
    const searchPreview = searchLines[0].substring(0, 50);
    console.log(`🔍 搜索内容: "${searchPreview}..." (${searchLines.length} 行)`);
    
    let bestMatch = null;
    let bestScore = 0;
    
    // 在目标文件中搜索匹配的内容
    for (let i = 0; i <= targetLines.length - searchLines.length; i++) {
      let totalScore = 0;
      let matchedLines = 0;
      
      // 尝试匹配连续的行
      for (let j = 0; j < searchLines.length && i + j < targetLines.length; j++) {
        const targetLine = targetLines[i + j].trim().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ');
        const searchLine = searchLines[j].toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ');
        
        // 使用相似度匹配，允许一定的翻译差异
        const lineScore = similarity(targetLine, searchLine);
        if (lineScore > 0.5) { // 降低阈值，更容易匹配
          totalScore += lineScore;
          matchedLines++;
        }
      }
      
      const avgScore = matchedLines > 0 ? totalScore / searchLines.length : 0;
      
      // 如果找到了较好的匹配
      if (avgScore > bestScore && avgScore > 0.4 && matchedLines >= Math.min(1, searchLines.length)) {
        bestScore = avgScore;
        const matchEnd = i + searchLines.length - 1;
        bestMatch = {
          startLine: i,
          endLine: matchEnd,
          originalContent: targetLines.slice(i, matchEnd + 1).join('\n'),
          confidence: avgScore,
          matchedLines: matchedLines
        };
      }
    }
    
    if (bestMatch) {
      console.log(`✅ 找到匹配内容: 第 ${bestMatch.startLine + 1}-${bestMatch.endLine + 1} 行 (置信度: ${(bestMatch.confidence * 100).toFixed(1)}%, 匹配行数: ${bestMatch.matchedLines})`);
      return bestMatch;
    } else {
      console.warn(`⚠️ 未找到匹配的内容 (最高得分: ${(bestScore * 100).toFixed(1)}%)`);
      return null;
    }
    
  } catch (error) {
    console.warn(`⚠️ 查找目标匹配失败: ${error.message}`);
    return null;
  }
}

// 生成精确修改的翻译prompt
function generatePreciseModificationPrompt(targetLang, pathPrefix, modification, targetMatch) {
  const langName = LANGUAGE_CONFIG[targetLang].name;
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  let taskDescription = '';
  if (modification.type === 'add') {
    taskDescription = `请将以下新增的英文内容翻译成${langName}：`;
  } else if (modification.type === 'delete') {
    taskDescription = `以下英文内容被删除了，请告诉我应该删除对应的${langName}内容：`;
  } else {
    taskDescription = `请将以下修改后的英文内容翻译成${langName}，替换现有的译文：`;
  }

  return `你是一个专业的技术文档翻译专家。

## 任务
${taskDescription}

## 英文修改内容：
\`\`\`
${modification.newContent || modification.oldContent}
\`\`\`

${targetMatch ? `## 现有的${langName}内容（将被替换）：
\`\`\`
${targetMatch.originalContent}
\`\`\`` : ''}

## 翻译要求：
1. **保持格式**：所有Markdown格式、HTML标签、代码块必须完全保持
2. **链接处理**：
   - 内部链接添加语言前缀：/path → ${pathPrefix}/path
   - seeedstudio.com链接：https://wiki.seeedstudio.com/path → https://wiki.seeedstudio.com${pathPrefix}/path
3. **术语保护**：以下术语保持不变
${termsList}
4. **简洁输出**：只输出翻译结果，不要添加任何解释

${modification.type === 'delete' ? '如果是删除操作，请输出"DELETE"' : '请开始翻译：'}`;
}

async function translateWithClaude(text, targetLang, maxRetries = 3, isChunk = false, chunkInfo = null) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  if (!langConfig) {
    throw new Error(`不支持的语言: ${targetLang}`);
  }
  
  const systemPrompt = generatePrompt(targetLang, langConfig.pathPrefix, isChunk, chunkInfo);
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`📡 调用Claude API (尝试 ${attempt}/${maxRetries})...`);
      
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 20000,
        temperature: 0.05,
        system: systemPrompt,
        messages: [
          { role: 'user', content: text }
        ]
      });
      
      let translatedContent = response.content[0].text;
      
      // 后处理：确保链接正确
      translatedContent = processInternalLinks(translatedContent, targetLang);
      
      console.log(`✅ Claude翻译成功 (尝试 ${attempt})`);
      return translatedContent;
      
    } catch (error) {
      console.error(`❌ Claude翻译失败 (尝试 ${attempt}/${maxRetries}): ${error.message}`);
      
      if (attempt === maxRetries) {
        // 记录详细错误信息
        const errorInfo = {
          error: error.message,
          attempt: attempt,
          textLength: text.length,
          estimatedTokens: estimateTokens(text),
          targetLang: targetLang
        };
        translationStatus.errors.push(errorInfo);
        throw new Error(`Claude翻译失败 (${maxRetries}次尝试): ${error.message}`);
      }
      
      // 指数退避重试
      const delay = Math.pow(2, attempt) * 1000;
      console.log(`⏳ 等待 ${delay}ms 后重试...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// 翻译文档块
async function translateDocumentChunks(chunks, targetLang, filePath) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  const translatedChunks = [];
  
  console.log(`📚 开始翻译文档 ${filePath} 到 ${langConfig.name} (共${chunks.length}块)`);
  
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const chunkInfo = { index: i, total: chunks.length };
    
    console.log(`📄 翻译块 ${i + 1}/${chunks.length} (${estimateTokens(chunk.content)} tokens)`);
    
    try {
      let contentToTranslate;
      
      // 只有在处理完整文档或第一个块时才包含Front Matter
      if (chunk.isComplete || (i === 0 && chunk.frontMatter)) {
        contentToTranslate = chunk.frontMatter + chunk.content;
      } else {
        contentToTranslate = chunk.content;
      }
      
      const translatedContent = await translateWithClaude(
        contentToTranslate, 
        targetLang, 
        3, 
        chunks.length > 1, 
        chunkInfo
      );
      
      translatedChunks.push(translatedContent);
      translationStatus.completed++;
      
      // API限流延迟
      if (i < chunks.length - 1) {
        console.log('⏳ API限流延迟 2秒...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
    } catch (error) {
      console.error(`❌ 块 ${i + 1} 翻译失败: ${error.message}`);
      translationStatus.failed++;
      throw error;
    }
  }
  
  // 合并翻译结果
  let finalContent;
  if (chunks.length === 1) {
    finalContent = translatedChunks[0];
  } else {
    // 多块情况下，第一块包含Front Matter，后续块只是内容
    const firstChunk = translatedChunks[0];
    const otherChunks = translatedChunks.slice(1);
    
    // 检查第一块是否包含Front Matter
    const frontMatterMatch = firstChunk.match(/^---\n[\s\S]*?\n---\n/);
    
    if (frontMatterMatch) {
      const frontMatter = frontMatterMatch[0];
      const firstContent = firstChunk.replace(frontMatterMatch[0], '').trim();
      
      // 确保内容连接正确
      finalContent = frontMatter + '\n' + firstContent;
      if (otherChunks.length > 0) {
        finalContent += '\n\n' + otherChunks.join('\n\n');
      }
    } else {
      finalContent = translatedChunks.join('\n\n');
    }
  }
  
  return finalContent;
}

// 处理新增文件
async function handleNewFile(filePath, targetLang) {
  try {
    console.log(`🆕 翻译新文件: ${filePath} -> ${targetLang}`);
    translationStatus.total++;
    
    const content = await fs.readFile(filePath, 'utf8');
    console.log(`📏 文件大小: ${content.length} 字符 (约 ${estimateTokens(content)} tokens)`);
    
    // 分块处理
    const chunks = chunkDocument(content);
    console.log(`📦 文档分为 ${chunks.length} 块`);
    
    const translatedContent = await translateDocumentChunks(chunks, targetLang, filePath);
    
    // 使用新的路径生成逻辑
    const targetPath = generateTargetPath(filePath, targetLang);
    
    // 确保目录存在
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    
    // 写入翻译文件
    await fs.writeFile(targetPath, translatedContent, 'utf8');
    
    console.log(`✅ 新文件翻译完成: ${targetPath}`);
    return { success: true, path: targetPath };
    
  } catch (error) {
    console.error(`❌ 新文件翻译失败 ${filePath}:`, error.message);
    translationStatus.failed++;
    return { success: false, error: error.message, path: filePath };
  }
}

// 提取确切的修改内容（不是上下文）
async function extractExactModifications(filePath, baseSha) {
  try {
    console.log(`📍 分析文件修改: ${filePath} (基于 ${baseSha})`);
    
    // 使用更简单可靠的git diff命令
    const diffOutput = execSync(
      `git diff ${baseSha}..HEAD --word-diff=porcelain -- "${filePath}"`,
      { encoding: 'utf8' }
    );
    
    if (!diffOutput.trim()) {
      console.log(`ℹ️ 文件无修改内容`);
      return [];
    }
    
    console.log(`📄 Git diff输出长度: ${diffOutput.length} 字符`);
    
    const modifications = [];
    const lines = diffOutput.split('\n');
    
    let currentMod = null;
    let addedContent = '';
    let removedContent = '';
    let isInHunk = false;
    
    for (const line of lines) {
      if (line.startsWith('@@')) {
        // 新的diff块开始
        if (currentMod) {
          modifications.push(currentMod);
          currentMod = null;
        }
        isInHunk = true;
        addedContent = '';
        removedContent = '';
        console.log(`📍 进入新的diff块: ${line}`);
        continue;
      }
      
      if (!isInHunk) continue;
      
      if (line.startsWith('~')) {
        // 这是word-diff的分隔符，忽略
        continue;
      } else if (line.startsWith('-')) {
        // 删除的内容
        removedContent += line.substring(1) + '\n';
      } else if (line.startsWith('+')) {
        // 添加的内容
        addedContent += line.substring(1) + '\n';
      } else if (line.startsWith(' ')) {
        // 未修改的内容 - 如果有累积的修改，处理它们
        if (removedContent || addedContent) {
          if (removedContent && addedContent) {
            // 修改操作
            modifications.push({
              type: 'modify',
              oldContent: removedContent.trim(),
              newContent: addedContent.trim()
            });
          } else if (removedContent) {
            // 删除操作
            modifications.push({
              type: 'delete',
              oldContent: removedContent.trim(),
              newContent: ''
            });
          } else if (addedContent) {
            // 添加操作
            modifications.push({
              type: 'add',
              oldContent: '',
              newContent: addedContent.trim()
            });
          }
          
          // 重置
          addedContent = '';
          removedContent = '';
        }
      }
    }
    
    // 处理最后的修改
    if (removedContent || addedContent) {
      if (removedContent && addedContent) {
        modifications.push({
          type: 'modify',
          oldContent: removedContent.trim(),
          newContent: addedContent.trim()
        });
      } else if (removedContent) {
        modifications.push({
          type: 'delete',
          oldContent: removedContent.trim(),
          newContent: ''
        });
      } else if (addedContent) {
        modifications.push({
          type: 'add',
          oldContent: '',
          newContent: addedContent.trim()
        });
      }
    }
    
    console.log(`✅ 检测到 ${modifications.length} 个修改:`);
    modifications.forEach((mod, i) => {
      const preview = (mod.newContent || mod.oldContent).substring(0, 50);
      console.log(`   ${i + 1}. ${mod.type}: "${preview}..."`);
    });
    
    return modifications.filter(mod => 
      (mod.oldContent && mod.oldContent.trim().length > 0) || 
      (mod.newContent && mod.newContent.trim().length > 0)
    );
    
  } catch (error) {
    console.warn(`⚠️ Git diff失败: ${error.message}`);
    
    // 备用方案：使用简单的行级diff
    try {
      console.log(`📄 尝试备用方案：行级差异检测`);
      return await extractLineBasedModifications(filePath, baseSha);
    } catch (backupError) {
      console.warn(`⚠️ 备用方案也失败: ${backupError.message}`);
      return null;
    }
  }
}

// 备用方案：基于行的修改检测
async function extractLineBasedModifications(filePath, baseSha) {
  try {
    // 获取旧版本文件内容
    const oldContent = execSync(
      `git show ${baseSha}:"${filePath}"`,
      { encoding: 'utf8' }
    );
    
    // 读取当前文件内容
    const newContent = await fs.readFile(filePath, 'utf8');
    
    console.log(`📊 文件对比: 旧版本 ${oldContent.length} 字符, 新版本 ${newContent.length} 字符`);
    
    const oldLines = oldContent.split('\n');
    const newLines = newContent.split('\n');
    
    // 简单的行级差异检测
    const modifications = [];
    const maxLines = Math.max(oldLines.length, newLines.length);
    
    for (let i = 0; i < maxLines; i++) {
      const oldLine = oldLines[i] || '';
      const newLine = newLines[i] || '';
      
      if (oldLine !== newLine) {
        if (!oldLine) {
          // 新增行
          modifications.push({
            type: 'add',
            oldContent: '',
            newContent: newLine,
            lineNumber: i
          });
        } else if (!newLine) {
          // 删除行
          modifications.push({
            type: 'delete',
            oldContent: oldLine,
            newContent: '',
            lineNumber: i
          });
        } else {
          // 修改行
          modifications.push({
            type: 'modify',
            oldContent: oldLine,
            newContent: newLine,
            lineNumber: i
          });
        }
      }
    }
    
    console.log(`✅ 行级检测到 ${modifications.length} 个修改`);
    return modifications.slice(0, 10); // 限制修改数量，避免过多
    
  } catch (error) {
    console.error(`❌ 行级差异检测失败: ${error.message}`);
    return null;
  }
}

// 处理修改文件（精确修改翻译）
async function handleModifiedFile(filePath, targetLang) {
  try {
    console.log(`✏️ 精确翻译文件修改: ${filePath} -> ${targetLang}`);
    translationStatus.total++;
    
    const content = await fs.readFile(filePath, 'utf8');
    const targetPath = generateTargetPath(filePath, targetLang);
    
    // 获取基础SHA
    const baseSha = process.env.BASE_SHA;
    if (!baseSha) {
      console.warn(`⚠️ 无法获取基础SHA，将进行完整文档翻译`);
      return await handleNewFile(filePath, targetLang);
    }
    
    // 检查目标翻译文件是否存在
    let targetExists = false;
    let originalTargetContent = '';
    try {
      originalTargetContent = await fs.readFile(targetPath, 'utf8');
      targetExists = true;
      console.log(`📄 找到现有翻译文件: ${targetPath}`);
    } catch (error) {
      console.log(`📄 翻译文件不存在，将进行完整文档翻译`);
      return await handleNewFile(filePath, targetLang);
    }
    
    // 获取精确的修改信息
    const exactModifications = await extractExactModifications(filePath, baseSha);
    if (!exactModifications || exactModifications.length === 0) {
      console.log(`ℹ️ 未检测到精确修改，将进行完整文档翻译`);
      return await handleNewFile(filePath, targetLang);
    }
    
    console.log(`📊 检测到 ${exactModifications.length} 个精确修改`);
    
    // 读取现有的目标文件
    let targetLines = originalTargetContent.split('\n');
    
    let modificationsProcessed = 0;
    let totalTokensUsed = 0;
    let totalTokensSaved = 0;
    
    // 从后往前处理修改，避免行号偏移
    for (let i = exactModifications.length - 1; i >= 0; i--) {
      const modification = exactModifications[i];
      
      console.log(`\n🔍 处理修改 ${exactModifications.length - i}/${exactModifications.length} (${modification.type})`);
      
      const contentPreview = (modification.newContent || modification.oldContent).substring(0, 100);
      console.log(`📄 修改内容预览: "${contentPreview}..."`);
      
      try {
        // 查找修改内容在英文原文中的精确位置
        const englishContext = await findModificationContext(filePath, modification);
        
        // 处理新增操作
        if (modification.type === 'add') {
          console.log(`➕ 新增操作，查找合适的插入位置`);
          
          // 翻译新增内容
          const prompt = generatePreciseModificationPrompt(targetLang, LANGUAGE_CONFIG[targetLang].pathPrefix, modification, null);
          
          console.log(`📡 调用Claude翻译新增内容...`);
          const response = await anthropic.messages.create({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 10000,
            temperature: 0.05,
            system: prompt,
            messages: [
              { role: 'user', content: modification.newContent }
            ]
          });
          
          let translatedContent = response.content[0].text.trim();
          translatedContent = processInternalLinks(translatedContent, targetLang);
          
          // 使用改进的插入位置查找
          const currentTargetContent = targetLines.join('\n');
          let insertionPoint = await findTargetInsertionPoint(currentTargetContent, englishContext, modification);
          
          if (insertionPoint === null) {
            // 简单回退：插入到文档末尾
            insertionPoint = targetLines.length;
            console.log(`⚠️ 回退到文档末尾: 第 ${insertionPoint + 1} 行`);
          }
          
          // 插入翻译内容
          console.log(`📍 在第 ${insertionPoint + 1} 行处插入新增内容`);
          const newLines = translatedContent.split('\n');
          
          // 确保适当的空行间距
          if (insertionPoint > 0 && targetLines[insertionPoint - 1] && targetLines[insertionPoint - 1].trim() !== '') {
            newLines.unshift(''); // 在前面添加空行
          }
          if (insertionPoint < targetLines.length && targetLines[insertionPoint] && targetLines[insertionPoint].trim() !== '') {
            newLines.push(''); // 在后面添加空行
          }
          
          targetLines.splice(insertionPoint, 0, ...newLines);
          
          const tokensUsed = estimateTokens(modification.newContent);
          totalTokensUsed += tokensUsed;
          modificationsProcessed++;
          
        } else {
          // 处理修改和删除操作
          // 在目标文件中找到对应的内容
          const currentTargetContent = targetLines.join('\n');
          const targetMatch = await findExactTargetMatch(modification, currentTargetContent);
          
          if (!targetMatch) {
            console.warn(`⚠️ 无法找到对应的${LANGUAGE_CONFIG[targetLang].name}内容，跳过此修改`);
            continue;
          }
          
          console.log(`✅ 找到对应内容 (置信度: ${(targetMatch.confidence * 100).toFixed(1)}%)`);
          
          if (modification.type === 'delete') {
            // 删除操作：直接删除对应的行
            console.log(`🗑️ 删除第 ${targetMatch.startLine + 1}-${targetMatch.endLine + 1} 行`);
            targetLines.splice(targetMatch.startLine, targetMatch.endLine - targetMatch.startLine + 1);
            modificationsProcessed++;
            
          } else if (modification.type === 'modify') {
            // 修改操作：翻译新内容并替换
            const prompt = generatePreciseModificationPrompt(targetLang, LANGUAGE_CONFIG[targetLang].pathPrefix, modification, targetMatch);
            
            console.log(`📡 调用Claude翻译修改内容...`);
            const response = await anthropic.messages.create({
              model: 'claude-sonnet-4-20250514',
              max_tokens: 10000,
              temperature: 0.05,
              system: prompt,
              messages: [
                { role: 'user', content: modification.newContent }
              ]
            });
            
            let translatedContent = response.content[0].text.trim();
            
            // 跳过删除操作的响应
            if (translatedContent.toUpperCase() === 'DELETE') {
              console.log(`🗑️ AI确认删除操作，删除第 ${targetMatch.startLine + 1}-${targetMatch.endLine + 1} 行`);
              targetLines.splice(targetMatch.startLine, targetMatch.endLine - targetMatch.startLine + 1);
            } else {
              // 后处理：确保链接正确
              translatedContent = processInternalLinks(translatedContent, targetLang);
              
              const newLines = translatedContent.split('\n');
              const oldLineCount = targetMatch.endLine - targetMatch.startLine + 1;
              
              console.log(`📄 替换第 ${targetMatch.startLine + 1}-${targetMatch.endLine + 1} 行 (${oldLineCount} → ${newLines.length} 行)`);
              
              // 替换对应的行
              targetLines.splice(targetMatch.startLine, oldLineCount, ...newLines);
            }
            
            const tokensUsed = estimateTokens(modification.newContent);
            totalTokensUsed += tokensUsed;
            modificationsProcessed++;
          }
        }
        
        translationStatus.completed++;
        
        // API限流延迟
        if (i > 0) {
          console.log('⏳ API限流延迟 1秒...');
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
      } catch (error) {
        console.error(`❌ 修改 ${exactModifications.length - i} 处理失败: ${error.message}`);
        translationStatus.failed++;
        // 继续处理其他修改，不要因为一个修改失败就整个失败
      }
    }
    
    if (modificationsProcessed === 0) {
      console.warn(`⚠️ 没有成功处理任何修改，回退到完整文档翻译`);
      return await handleNewFile(filePath, targetLang);
    }
    
    // 计算token节省
    const fullDocTokens = estimateTokens(content);
    totalTokensSaved = fullDocTokens - totalTokensUsed;
    const savingsPercent = Math.round((totalTokensSaved / fullDocTokens) * 100);
    
    // 写入更新后的文件
    const finalContent = targetLines.join('\n');
    await fs.writeFile(targetPath, finalContent, 'utf8');
    
    console.log(`✅ 精确增量翻译完成: ${targetPath}`);
    console.log(`📊 处理了 ${modificationsProcessed}/${exactModifications.length} 个修改`);
    console.log(`💰 节省 tokens: ${totalTokensSaved} (约 ${savingsPercent}%)`);
    
    return { 
      success: true, 
      path: targetPath, 
      incremental: true, 
      tokensSaved: totalTokensSaved,
      modificationsProcessed: modificationsProcessed,
      totalModifications: exactModifications.length
    };
    
  } catch (error) {
    console.error(`❌ 精确增量翻译失败 ${filePath}:`, error.message);
    console.log(`📄 回退到完整文档翻译...`);
    
    // 回退到完整翻译
    try {
      return await handleNewFile(filePath, targetLang);
    } catch (fallbackError) {
      console.error(`❌ 完整翻译也失败: ${fallbackError.message}`);
      translationStatus.failed++;
      return { success: false, error: fallbackError.message, path: filePath };
    }
  }
}

// 生成进度报告
function generateProgressReport(languages, results) {
  const successCount = results.filter(r => r.success).length;
  const failCount = results.filter(r => !r.success).length;
  const incrementalCount = results.filter(r => r.success && r.incremental).length;
  const totalTokensSaved = results
    .filter(r => r.success && r.tokensSaved)
    .reduce((sum, r) => sum + r.tokensSaved, 0);
  
  let report = `## 📊 翻译完成报告\n\n`;
  report += `**目标语言:** ${languages.map(l => LANGUAGE_CONFIG[l]?.name || l).join(', ')}\n`;
  report += `**处理时间:** ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n\n`;
  report += `**统计信息:**\n`;
  report += `- ✅ 成功: ${successCount}\n`;
  report += `- ❌ 失败: ${failCount}\n`;
  report += `- 📊 总计: ${successCount + failCount}\n`;
  report += `- 🎯 精确增量翻译: ${incrementalCount}\n`;
  if (totalTokensSaved > 0) {
    report += `- 💰 节省 Tokens: ${totalTokensSaved}\n`;
  }
  report += '\n';
  
  if (results.some(r => r.success)) {
    report += `**成功翻译的文件:**\n`;
    results.filter(r => r.success).forEach(r => {
      const typeIcon = r.type === 'new' ? '🆕' : '✏️';
      let info = '';
      if (r.incremental) {
        info += ' (精确增量)';
        if (r.modificationsProcessed && r.totalModifications) {
          info += ` [${r.modificationsProcessed}/${r.totalModifications}修改]`;
        }
      }
      const tokenInfo = r.tokensSaved ? ` [节省${r.tokensSaved} tokens]` : '';
      report += `- ${typeIcon} ${r.path}${info}${tokenInfo}\n`;
    });
    report += '\n';
  }
  
  if (results.some(r => !r.success)) {
    report += `**翻译失败的文件:**\n`;
    results.filter(r => !r.success).forEach(r => {
      report += `- ❌ ${r.path}: ${r.error}\n`;
    });
    report += '\n';
  }
  
  if (translationStatus.errors.length > 0) {
    report += `**详细错误信息:**\n`;
    translationStatus.errors.forEach((error, index) => {
      report += `${index + 1}. **${error.targetLang}** - ${error.error}\n`;
      report += `   - 文本长度: ${error.textLength} 字符\n`;
      report += `   - 估算Token: ${error.estimatedTokens}\n`;
      report += `   - 尝试次数: ${error.attempt}\n\n`;
    });
  }
  
  return report;
}

// 主函数
async function main() {
  const languages = process.env.TARGET_LANGUAGES ? process.env.TARGET_LANGUAGES.split(' ') : [];
  const newFiles = process.env.NEW_FILES ? process.env.NEW_FILES.split(' ').filter(f => f.trim()) : [];
  const modifiedFiles = process.env.MODIFIED_FILES ? process.env.MODIFIED_FILES.split(' ').filter(f => f.trim()) : [];
  
  console.log('🌍 开始翻译任务...');
  console.log('目标语言:', languages);
  console.log('新增文件:', newFiles);
  console.log('修改文件:', modifiedFiles);
  
  // 验证API密钥
  if (!process.env.TRANSLATION_API_KEY) {
    console.error('❌ 缺少TRANSLATION_API_KEY环境变量');
    process.exit(1);
  }
  
  const allResults = [];
  
  for (const lang of languages) {
    if (!LANGUAGE_CONFIG[lang]) {
      console.log(`⚠️ 跳过未知语言: ${lang}`);
      continue;
    }
    
    const langConfig = LANGUAGE_CONFIG[lang];
    console.log(`\n📄 开始翻译到 ${langConfig.name}...`);
    
    // 处理新增文件
    for (const file of newFiles) {
      if (file.trim()) {
        const result = await handleNewFile(file, lang);
        allResults.push({...result, type: 'new', language: lang});
      }
    }
    
    // 处理修改文件
    for (const file of modifiedFiles) {
      if (file.trim()) {
        const result = await handleModifiedFile(file, lang);
        allResults.push({...result, type: 'modified', language: lang});
      }
    }
  }
  
  // 生成最终报告
  const report = generateProgressReport(languages, allResults);
  console.log('\n' + report);
  
  // 保存报告到文件供GitHub Action使用
  await fs.writeFile('/tmp/translation-report.md', report, 'utf8');
  
  if (allResults.some(r => !r.success)) {
    console.log('⚠️ 部分翻译失败，请查看详细错误信息');
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