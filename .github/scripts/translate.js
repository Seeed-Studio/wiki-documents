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
10. **中英文混排规则**：确保中文和英文之间有适当的空格分隔

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

// 🆕 中英文混排处理 - 确保中英文之间有空格
function addChineseEnglishSpacing(content) {
  // 匹配中文字符后面紧跟英文字母的情况，添加空格
  content = content.replace(/([一-龯])([a-zA-Z])/g, '$1 $2');
  
  // 匹配英文字母后面紧跟中文字符的情况，添加空格
  content = content.replace(/([a-zA-Z])([一-龯])/g, '$1 $2');
  
  // 匹配中文字符后面紧跟数字的情况，添加空格
  content = content.replace(/([一-龯])(\d)/g, '$1 $2');
  
  // 匹配数字后面紧跟中文字符的情况，添加空格
  content = content.replace(/(\d)([一-龯])/g, '$1 $2');
  
  // 处理已经有空格但是多余空格的情况，确保只有一个空格
  content = content.replace(/([一-龯])\s+([a-zA-Z])/g, '$1 $2');
  content = content.replace(/([a-zA-Z])\s+([一-龯])/g, '$1 $2');
  content = content.replace(/([一-龯])\s+(\d)/g, '$1 $2');
  content = content.replace(/(\d)\s+([一-龯])/g, '$1 $2');
  
  return content;
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

// 🔧 改进的文本标准化函数 - 更好地处理中英文混合内容
function normalizeForComparison(text) {
  if (!text) return '';
  
  // 先保存一些关键信息
  const originalText = text;
  
  // 提取主要文本内容，移除标记但保留核心信息
  let cleanText = text
    .replace(/<[^>]*>/g, ' ') // 移除HTML标签
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // 保留链接文本：[text](url) -> text
    .replace(/[#*`_]/g, '') // 移除markdown标记
    .replace(/[^\w\s\u4e00-\u9fff]/g, ' ') // 保留字母数字中文，其他转为空格
    .replace(/\s+/g, ' ') // 标准化空格
    .toLowerCase()
    .trim();
  
  // 如果清理后太短且原文较长，尝试提取更多有用信息
  if (cleanText.length < 5 && originalText.length > 20) {
    // 提取所有有意义的词汇
    const keywords = originalText
      .replace(/<[^>]*>/g, ' ')
      .replace(/[^\w\s\u4e00-\u9fff]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2)
      .join(' ')
      .toLowerCase()
      .trim();
    
    if (keywords.length > cleanText.length) {
      cleanText = keywords;
    }
  }
  
  return cleanText;
}

// 🆕 改进的相似度计算 - 支持中英文混合
function enhancedSimilarity(str1, str2) {
  if (!str1 || !str2) return 0;
  
  // 标准化文本
  const norm1 = normalizeForComparison(str1);
  const norm2 = normalizeForComparison(str2);
  
  if (!norm1 || !norm2) return 0;
  
  // 基于编辑距离的相似度
  const editDistance = similarity(norm1, norm2);
  
  // 基于关键词重叠的相似度
  const words1 = norm1.split(/\s+/).filter(w => w.length > 2);
  const words2 = norm2.split(/\s+/).filter(w => w.length > 2);
  
  if (words1.length === 0 || words2.length === 0) {
    return editDistance;
  }
  
  const commonWords = words1.filter(word => words2.includes(word));
  const keywordSimilarity = commonWords.length / Math.max(words1.length, words2.length);
  
  // 组合相似度（编辑距离权重0.6，关键词权重0.4）
  return editDistance * 0.6 + keywordSimilarity * 0.4;
}

// 🆕 文档结构分析函数 - 识别关键结构元素
function analyzeDocumentStructure(lines) {
  const structure = {
    frontMatterEnd: -1,
    firstImage: -1,
    firstTitle: -1,
    majorSections: [],
    htmlBlocks: []
  };
  
  // 识别Front Matter
  if (lines[0] && lines[0].trim() === '---') {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] && lines[i].trim() === '---') {
        structure.frontMatterEnd = i;
        break;
      }
    }
  }
  
  // 识别第一张图片
  for (let i = structure.frontMatterEnd + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line && (line.includes('<img') || line.match(/!\[.*\]\(.*\)/))) {
      structure.firstImage = i;
      break;
    }
  }
  
  // 识别第一个主要标题
  for (let i = structure.frontMatterEnd + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line && (line.match(/^#+\s/) || line.includes('<strong>') && line.includes('font'))) {
      structure.firstTitle = i;
      break;
    }
  }
  
  // 识别主要章节
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line && line.match(/^##?\s/)) {
      structure.majorSections.push(i);
    }
  }
  
  // 识别HTML块结构
  let inHtmlBlock = false;
  let blockStart = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line && line.match(/<(table|div|section)/)) {
      blockStart = i;
      inHtmlBlock = true;
    }
    if (inHtmlBlock && line && line.match(/<\/(table|div|section)>/)) {
      structure.htmlBlocks.push({ start: blockStart, end: i });
      inHtmlBlock = false;
    }
  }
  
  return structure;
}

// 🔧 修复后的查找修改上下文函数 - 包含HTML匹配优化
async function findModificationContext(filePath, modification, contextLines = 8) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const lines = content.split('\n');
    
    console.log(`🔍 在原文中查找修改内容的精确位置 (包含Front Matter)`);
    
    // 对于新增内容，找到它在文档中的位置
    if (modification.type === 'add' && modification.newContent) {
      const newContentLines = modification.newContent.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      
      if (newContentLines.length === 0) {
        console.warn(`⚠️ 新增内容为空，跳过`);
        return null;
      }
      
      console.log(`📄 搜索新增内容: "${newContentLines[0].substring(0, 50)}..." (${newContentLines.length} 行)`);
      
      // 🆕 输出调试信息
      console.log(`🔍 新增内容详细分析:`);
      newContentLines.forEach((line, idx) => {
        const normalized = normalizeForComparison(line);
        console.log(`   第${idx + 1}行: "${line.substring(0, 60)}..."`);
        console.log(`   标准化后: "${normalized}" (长度: ${normalized.length})`);
      });
      
      let bestMatch = null;
      let bestScore = 0;
      
      // 🔧 改进的匹配逻辑
      for (let i = 0; i <= lines.length - newContentLines.length; i++) {
        let matchScore = 0;
        let totalWeight = 0;
        let validLines = 0;
        
        for (let j = 0; j < newContentLines.length; j++) {
          if (i + j >= lines.length) break;
          
          const originalLine = lines[i + j].trim();
          const newLine = newContentLines[j];
          
          // 🔧 改进的匹配策略
          let lineScore = 0;
          let weight = 1;
          
          // 策略1: 直接文本匹配（最高优先级）
          if (originalLine === newLine) {
            lineScore = 1.0;
            weight = 3;
            validLines++;
          }
          // 策略2: 标准化后的文本匹配
          else {
            const normalizedOriginal = normalizeForComparison(originalLine);
            const normalizedNew = normalizeForComparison(newLine);
            
            if (normalizedOriginal.length > 2 && normalizedNew.length > 2) {
              const textSimilarity = enhancedSimilarity(originalLine, newLine); // 使用增强的相似度
              if (textSimilarity > 0.6) {
                lineScore = textSimilarity;
                weight = Math.min(Math.max(normalizedNew.length / 10, 1), 2);
                validLines++;
              }
            }
            
            // 策略3: 对于HTML内容，检查关键词匹配
            if (lineScore < 0.5 && (originalLine.includes('<') || newLine.includes('<'))) {
              // 提取HTML中的关键词
              const extractKeywords = (text) => {
                return text.replace(/<[^>]*>/g, ' ')
                          .replace(/[^\w\s]/g, ' ')
                          .split(/\s+/)
                          .filter(word => word.length > 2)
                          .map(word => word.toLowerCase());
              };
              
              const originalKeywords = extractKeywords(originalLine);
              const newKeywords = extractKeywords(newLine);
              
              if (originalKeywords.length > 0 && newKeywords.length > 0) {
                const commonKeywords = originalKeywords.filter(word => newKeywords.includes(word));
                const keywordScore = commonKeywords.length / Math.max(originalKeywords.length, newKeywords.length);
                
                if (keywordScore > 0.5) {
                  lineScore = keywordScore;
                  weight = 1.5;
                  validLines++;
                  console.log(`🔗 HTML关键词匹配: ${commonKeywords.join(', ')} (得分: ${keywordScore.toFixed(2)})`);
                }
              }
            }
          }
          
          if (lineScore > 0) {
            matchScore += lineScore * weight;
            totalWeight += weight;
          }
        }
        
        const avgScore = totalWeight > 0 ? matchScore / totalWeight : 0;
        
        // 🔧 调整匹配阈值和要求
        const minValidLines = Math.max(1, Math.floor(newContentLines.length * 0.3)); // 至少30%的行匹配
        const minScore = newContentLines.some(line => line.includes('<')) ? 0.5 : 0.7; // HTML内容降低阈值
        
        if (avgScore > bestScore && avgScore > minScore && validLines >= minValidLines) {
          bestScore = avgScore;
          bestMatch = {
            startLine: i,
            endLine: i + newContentLines.length - 1,
            score: avgScore,
            validLines: validLines,
            absoluteLineNumber: i,
            relativePosition: i / lines.length,
            totalLines: lines.length
          };
          
          console.log(`🎯 发现候选匹配: 第${i + 1}行, 得分: ${avgScore.toFixed(3)}, 有效行: ${validLines}/${newContentLines.length}`);
        }
      }
      
      if (bestMatch) {
        console.log(`✅ 找到新增内容位置: 第 ${bestMatch.startLine + 1}-${bestMatch.endLine + 1} 行`);
        console.log(`📊 相对位置: ${(bestMatch.relativePosition * 100).toFixed(1)}% (${bestMatch.absoluteLineNumber}/${bestMatch.totalLines})`);
        console.log(`🎯 匹配度: ${(bestMatch.score * 100).toFixed(1)}% (${bestMatch.validLines}/${newContentLines.length} 行匹配)`);
        
        // 提取上下文
        const contextStart = Math.max(0, bestMatch.startLine - contextLines);
        const contextEnd = Math.min(lines.length - 1, bestMatch.endLine + contextLines);
        
        return {
          type: 'add',
          absoluteLineNumber: bestMatch.absoluteLineNumber,
          relativePosition: bestMatch.relativePosition,
          totalLines: bestMatch.totalLines,
          matchScore: bestMatch.score,
          beforeContext: lines.slice(contextStart, bestMatch.startLine).join('\n'),
          matchedContent: lines.slice(bestMatch.startLine, bestMatch.endLine + 1).join('\n'),
          afterContext: lines.slice(bestMatch.endLine + 1, contextEnd + 1).join('\n')
        };
      } else {
        console.warn(`⚠️ 无法在原文中找到新增内容的精确位置 (最高得分: ${(bestScore * 100).toFixed(1)}%)`);
        
        // 🆕 额外的调试信息
        console.log(`🔍 调试信息 - 搜索了 ${lines.length} 行，候选窗口大小: ${newContentLines.length}`);
        console.log(`🔍 前5行原文内容:`);
        for (let i = 0; i < Math.min(5, lines.length); i++) {
          const line = lines[i];
          console.log(`   第${i + 1}行: "${line.substring(0, 80)}..."`);
          console.log(`   标准化: "${normalizeForComparison(line)}"`);
        }
        
        return null;
      }
    }
    
    // 对于修改和删除，查找原有内容
    if ((modification.type === 'modify' || modification.type === 'delete') && modification.oldContent) {
      const searchLines = modification.oldContent.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      
      for (let i = 0; i <= lines.length - searchLines.length; i++) {
        let matchScore = 0;
        
        for (let j = 0; j < searchLines.length; j++) {
          if (enhancedSimilarity(lines[i + j], searchLines[j]) > 0.8) {
            matchScore++;
          }
        }
        
        if (matchScore >= Math.max(1, searchLines.length * 0.8)) {
          console.log(`✅ 找到原有内容位置: 第 ${i + 1}-${i + searchLines.length} 行`);
          
          const contextStart = Math.max(0, i - contextLines);
          const contextEnd = Math.min(lines.length - 1, i + searchLines.length + contextLines);
          
          return {
            type: modification.type,
            absoluteLineNumber: i,
            relativePosition: i / lines.length,
            totalLines: lines.length,
            matchScore: matchScore / searchLines.length,
            beforeContext: lines.slice(contextStart, i).join('\n'),
            matchedContent: lines.slice(i, i + searchLines.length).join('\n'),
            afterContext: lines.slice(i + searchLines.length, contextEnd + 1).join('\n')
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

// 🆕 改进的AI插入位置分析 - 更精确的结构对应
async function findInsertionPointWithAI(englishContext, targetContent, newContent, targetLang) {
  try {
    console.log(`🤖 使用改进的AI分析最佳插入位置...`);
    
    const targetLines = targetContent.split('\n');
    const englishRelativePos = englishContext.relativePosition;
    
    // 🆕 分析文档结构
    const englishStructure = analyzeDocumentStructure(englishContext.beforeContext.split('\n').concat(
      englishContext.matchedContent.split('\n'),
      englishContext.afterContext.split('\n')
    ));
    const targetStructure = analyzeDocumentStructure(targetLines);
    
    console.log(`📐 结构分析:`);
    console.log(`  英文: Front Matter结束=${englishStructure.frontMatterEnd}, 首图=${englishStructure.firstImage}, 首标题=${englishStructure.firstTitle}`);
    console.log(`  中文: Front Matter结束=${targetStructure.frontMatterEnd}, 首图=${targetStructure.firstImage}, 首标题=${targetStructure.firstTitle}`);
    
    // 1. 基于英文位置和结构特征确定中文候选区域
    const windowSize = parseInt(process.env.AI_INSERTION_WINDOW) || 40; // 稍微增大窗口
    
    let estimatedLine;
    
    // 🆕 特殊处理：如果英文新增内容在文档前部（前20%），使用结构锚点对应
    if (englishRelativePos < 0.2) {
      console.log(`🎯 检测到前置区域插入，使用结构锚点定位...`);
      
      // 根据结构锚点进行更精确的对应
      if (targetStructure.frontMatterEnd >= 0 && targetStructure.firstImage >= 0) {
        // 如果英文插入在front matter之后，图片之前或之后
        if (englishContext.absoluteLineNumber <= 15) { // 假设前15行为前置区域
          estimatedLine = Math.max(targetStructure.frontMatterEnd + 1, targetStructure.firstImage);
          console.log(`📍 使用结构锚点定位: Front Matter后=${targetStructure.frontMatterEnd + 1}, 首图=${targetStructure.firstImage}`);
        } else {
          estimatedLine = Math.round(englishRelativePos * targetLines.length);
        }
      } else {
        estimatedLine = Math.round(englishRelativePos * targetLines.length);
      }
    } else {
      estimatedLine = Math.round(englishRelativePos * targetLines.length);
    }
    
    const startLine = Math.max(0, estimatedLine - windowSize);
    const endLine = Math.min(targetLines.length - 1, estimatedLine + windowSize);
    
    const candidateRegion = {
      startLine: startLine,
      endLine: endLine,
      content: targetLines.slice(startLine, endLine + 1).join('\n'),
      estimatedInsertionLine: estimatedLine
    };
    
    console.log(`🔍 英文新增位置: 第 ${englishContext.absoluteLineNumber + 1} 行 (${(englishRelativePos * 100).toFixed(1)}%)`);
    console.log(`🎯 中文候选区域: 第 ${candidateRegion.startLine + 1}-${candidateRegion.endLine + 1} 行 (共 ${endLine - startLine + 1} 行)`);
    
    // 2. 构造改进的AI分析prompt
    const langName = LANGUAGE_CONFIG[targetLang].name;
    const analysisPrompt = `你是一个专业的文档结构分析专家，专门负责确定多语言文档中内容插入的最佳位置。

## 背景信息
- 这是一个英文技术文档的${langName}翻译版本
- 英文原文在第 ${englishContext.absoluteLineNumber + 1} 行（文档 ${(englishContext.relativePosition * 100).toFixed(1)}% 位置）新增了内容
- 需要在${langName}译文的对应位置插入翻译后的内容

## 英文原文上下文（包含新增位置）:
\`\`\`
${englishContext.beforeContext}

[===== 新增内容在此位置 =====]

${englishContext.afterContext}
\`\`\`

## ${langName}译文候选区域（第 ${candidateRegion.startLine + 1}-${candidateRegion.endLine + 1} 行）:
\`\`\`
${candidateRegion.content}
\`\`\`

## 结构分析要点
${englishRelativePos < 0.2 ? `
**重要**：新增内容位于文档前置区域（${(englishRelativePos * 100).toFixed(1)}%位置），需要特别注意以下结构对应：
1. **Front Matter区域**: 英文和中文都有---包围的YAML配置区域
2. **首个图片**: 通常在Front Matter之后
3. **欢迎标题**: 通常在图片之后
4. **内容链接**: 主要内容开始前的导航链接
5. **正文开始**: 实际的介绍性段落开始

请特别关注英文新增内容相对于这些结构元素的位置关系，确保中文插入位置保持相同的逻辑关系。
` : ''}

## 分析要求
请仔细分析上述内容，考虑以下因素：
1. **精确结构对应**: 新增内容在英文中的确切结构位置（相对于Front Matter、图片、标题等）
2. **段落完整性**: 保持翻译文档的段落完整性，不要在段落中间插入
3. **语义连贯**: 确保插入后语义流畅自然
4. **文档结构**: 考虑标题、列表、代码块、表格等Markdown/HTML结构元素
5. **翻译对应**: 找到英文上下文在中文译文中的对应位置
6. **结构完整性**: 避免在HTML标签（如\`</table>\`、\`</div>\`等）内部插入，应该在完整的结构块之后插入

## 输出格式
请严格按照以下格式输出：

ANALYSIS: [详细说明你的分析思路，包括识别的关键结构和对应关系，特别是前置区域的结构匹配]

POSITION: AFTER_LINE: X [X为相对于候选区域的行号，从1开始计数，表示在第X行之后插入新内容]

CONFIDENCE: [1-10分的信心程度]

REASON: [详细解释为什么选择这个位置，包括与英文上下文的对应关系和结构考虑，特别说明结构锚点的匹配]

## 重要提示
- 如果目标位置是HTML标签（如\`</table>\`、\`</div>\`等），请选择在完整标签结构之后插入
- 对于文档前置区域，优先基于结构锚点（Front Matter、图片、标题）进行精确对应
- 确保不会破坏现有的文档结构完整性
- 优先选择段落之间、章节之间或完整结构块之间的位置`;
    
    // 3. 调用AI分析
    console.log(`📤 发送改进的AI分析请求...`);
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 10000,
      temperature: 0.05, // 更低的温度以获得更一致的结果
      system: analysisPrompt,
      messages: [{
        role: 'user', 
        content: `请分析以下新增内容并确定最佳插入位置：\n\n${newContent}`
      }]
    });
    
    // 4. 解析AI响应
    const aiResponse = response.content[0].text;
    console.log(`🤖 AI分析结果:\n${aiResponse}`);
    
    // 5. 解析位置信息
    let positionMatch = aiResponse.match(/POSITION:\s*AFTER_LINE:\s*(\d+)/i);
    if (!positionMatch) {
      // 兼容原来的 LINE 格式
      positionMatch = aiResponse.match(/POSITION:\s*LINE:\s*(\d+)/i);
    }
    
    const confidenceMatch = aiResponse.match(/CONFIDENCE:\s*(\d+)/i);
    
    if (positionMatch) {
      const relativeLine = parseInt(positionMatch[1]);
      const confidence = confidenceMatch ? parseInt(confidenceMatch[1]) : 5;
      
      // 🔧 修复位置计算：AI返回的是候选区域内的行号（从1开始），需要转换为绝对行号
      let absoluteLine;
      if (aiResponse.includes('AFTER_LINE')) {
        // AFTER_LINE: X 表示在候选区域第X行之后插入
        absoluteLine = candidateRegion.startLine + relativeLine;
      } else {
        // LINE: X 表示在候选区域第X行插入（兼容旧格式）
        absoluteLine = candidateRegion.startLine + relativeLine - 1;
      }
      
      // 确保不超出范围
      absoluteLine = Math.max(0, Math.min(absoluteLine, targetLines.length));
      
      console.log(`✅ AI推荐插入位置: 第 ${absoluteLine + 1} 行 (候选区域第 ${relativeLine} 行${aiResponse.includes('AFTER_LINE') ? '之后' : '之前'}) (置信度: ${confidence}/10)`);
      console.log(`🔧 位置计算: 候选区域起始=${candidateRegion.startLine + 1}, 相对位置=${relativeLine}, 绝对位置=${absoluteLine + 1}`);
      
      // 6. 位置安全性验证和调整
      const safePoint = validateAndAdjustInsertionPoint(targetLines, absoluteLine, aiResponse);
      if (safePoint !== absoluteLine) {
        console.log(`🛡️ 结构安全调整: 第 ${absoluteLine + 1} 行 → 第 ${safePoint + 1} 行`);
      }
      
      return safePoint;
    } else {
      console.warn(`⚠️ 无法解析AI位置响应，使用相对位置备用策略`);
      return Math.round(englishRelativePos * targetLines.length);
    }
    
  } catch (error) {
    console.error(`❌ AI插入位置分析失败: ${error.message}`);
    const targetLines = targetContent.split('\n');
    return Math.round(englishContext.relativePosition * targetLines.length);
  }
}

// 🔧 增强的插入位置验证和调整函数
function validateAndAdjustInsertionPoint(targetLines, insertionPoint, aiAnalysis = '') {
  let safePoint = Math.max(0, Math.min(insertionPoint, targetLines.length));
  
  console.log(`🔍 验证插入位置安全性: 第 ${safePoint + 1} 行`);
  
  // 检查插入点的内容
  if (safePoint < targetLines.length) {
    const currentLine = targetLines[safePoint].trim();
    const nextLine = safePoint + 1 < targetLines.length ? targetLines[safePoint + 1].trim() : '';
    
    console.log(`🔍 目标位置内容: "${currentLine.substring(0, 80)}"`);
    if (nextLine) {
      console.log(`🔍 下一行内容: "${nextLine.substring(0, 80)}"`);
    }
  }
  
  // 1. 避免在Front Matter内部插入
  if (targetLines[0] && targetLines[0].trim() === '---') {
    let frontMatterEnd = -1;
    for (let i = 1; i < targetLines.length; i++) {
      if (targetLines[i] && targetLines[i].trim() === '---') {
        frontMatterEnd = i;
        break;
      }
    }
    
    if (frontMatterEnd >= 0 && safePoint <= frontMatterEnd) {
      safePoint = frontMatterEnd + 1;
      console.log(`🛡️ 调整到Front Matter之后: 第 ${safePoint + 1} 行`);
    }
  }
  
  // 2. 避免在代码块中间插入
  let inCodeBlock = false;
  for (let i = 0; i <= safePoint && i < targetLines.length; i++) {
    if (targetLines[i] && targetLines[i].trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
    }
  }
  
  if (inCodeBlock) {
    for (let i = safePoint; i < targetLines.length; i++) {
      if (targetLines[i] && targetLines[i].trim().startsWith('```')) {
        safePoint = i + 1;
        console.log(`🛡️ 调整到代码块结束后: 第 ${safePoint + 1} 行`);
        break;
      }
    }
  }
  
  // 3. 🔧 特别处理HTML表格和标签结构
  if (safePoint < targetLines.length) {
    const currentLine = targetLines[safePoint].trim();
    
    // 检查是否在HTML标签位置
    const isClosingTag = currentLine.match(/^<\/\w+>$/);
    const isOpeningTag = currentLine.match(/^<\w+[^>]*>$/);
    const isTableRelated = currentLine.includes('</table>') || currentLine.includes('</tr>') || currentLine.includes('</td>');
    
    if (isClosingTag || isTableRelated) {
      console.log(`🔧 检测到HTML结构标签: "${currentLine}"`);
      
      // 如果是 </table> 等结束标签，插入到该行之后
      if (currentLine.includes('</table>') || currentLine.includes('</div>') || currentLine.includes('</section>')) {
        safePoint = safePoint + 1;
        console.log(`🛡️ 调整到HTML结构块结束后: 第 ${safePoint + 1} 行`);
      }
    }
  }
  
  // 4. 🔧 改进的空行优化 - 但不要过度调整
  const originalPoint = safePoint;
  
  // 只在很近的范围内（1-2行）寻找更好的位置
  for (let i = safePoint; i < Math.min(targetLines.length, safePoint + 2); i++) {
    if (!targetLines[i] || targetLines[i].trim() === '') {
      safePoint = i;
      console.log(`🛡️ 优化到空行位置: 第 ${safePoint + 1} 行`);
      break;
    }
  }
  
  return Math.max(0, Math.min(safePoint, targetLines.length));
}

// 回退插入点查找
function findFallbackInsertionPoint(targetLines) {
  console.log(`🔄 使用回退策略查找插入点`);
  
  // 跳过 Front Matter
  let insertionPoint = 0;
  if (targetLines[0] && targetLines[0].trim() === '---') {
    for (let i = 1; i < targetLines.length; i++) {
      if (targetLines[i] && targetLines[i].trim() === '---') {
        insertionPoint = i + 2; // Front Matter 后留一行空行
        break;
      }
    }
  }
  
  // 如果文档很短，插入到中间
  if (targetLines.length < 20) {
    insertionPoint = Math.floor(targetLines.length / 2);
  } else {
    // 插入到文档的 80% 位置（通常是内容区域）
    insertionPoint = Math.floor(targetLines.length * 0.8);
  }
  
  console.log(`🔍 回退插入点: 第 ${insertionPoint + 1} 行`);
  return insertionPoint;
}

// 🆕 新的插入位置查找函数（集成AI判断）
async function findTargetInsertionPoint(targetContent, englishContext, modification) {
  try {
    if (!englishContext) {
      console.warn(`⚠️ 没有英文上下文，使用默认策略`);
      return findFallbackInsertionPoint(targetContent.split('\n'));
    }
    
    // 检查是否可用AI分析（默认可用）
    const useAI = process.env.USE_AI_INSERTION !== 'false';
    
    if (useAI) {
      console.log(`🤖 可用AI插入位置分析...`);
      const targetLang = global.currentTargetLang || 'zh-CN';
      return await findInsertionPointWithAI(
        englishContext, 
        targetContent, 
        modification.newContent, 
        targetLang
      );
    } else {
      // 备用：使用相对位置策略
      console.log(`🔍 使用相对位置策略...`);
      const targetLines = targetContent.split('\n');
      const relativePoint = Math.round(englishContext.relativePosition * targetLines.length);
      console.log(`🔍 相对位置插入点: 第 ${relativePoint + 1} 行`);
      return relativePoint;
    }
    
  } catch (error) {
    console.warn(`⚠️ 插入位置分析失败: ${error.message}`);
    return findFallbackInsertionPoint(targetContent.split('\n'));
  }
}

// 🔧 增强的目标内容匹配函数 - 改进中英文匹配
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
    
    // 🆕 多重匹配策略
    console.log(`🔍 使用增强匹配算法搜索对应内容...`);
    
    // 策略1: 尝试完整匹配（适用于较短的内容）
    if (searchLines.length <= 3) {
      for (let i = 0; i <= targetLines.length - searchLines.length; i++) {
        let totalScore = 0;
        let matchedLines = 0;
        
        for (let j = 0; j < searchLines.length && i + j < targetLines.length; j++) {
          const targetLine = targetLines[i + j].trim();
          const searchLine = searchLines[j].trim();
          
          // 使用增强的相似度匹配
          const lineScore = enhancedSimilarity(targetLine, searchLine);
          
          if (lineScore > 0.4) { // 降低阈值以适应翻译差异
            totalScore += lineScore;
            matchedLines++;
          }
        }
        
        const avgScore = matchedLines > 0 ? totalScore / searchLines.length : 0;
        
        if (avgScore > bestScore && avgScore > 0.3 && matchedLines >= Math.min(1, searchLines.length)) {
          bestScore = avgScore;
          const matchEnd = i + searchLines.length - 1;
          bestMatch = {
            startLine: i,
            endLine: matchEnd,
            originalContent: targetLines.slice(i, matchEnd + 1).join('\n'),
            confidence: avgScore,
            matchedLines: matchedLines,
            strategy: 'complete'
          };
        }
      }
    }
    
    // 策略2: 关键词匹配（适用于无法完整匹配的情况）
    if (!bestMatch || bestScore < 0.5) {
      console.log(`🔍 尝试关键词匹配策略...`);
      
      // 提取搜索内容的关键词
      const searchKeywords = searchLines.join(' ')
        .replace(/<[^>]*>/g, ' ')
        .replace(/[^\w\s\u4e00-\u9fff]/g, ' ')
        .split(/\s+/)
        .filter(word => word.length > 2)
        .map(word => word.toLowerCase());
      
      if (searchKeywords.length > 0) {
        for (let i = 0; i < targetLines.length; i++) {
          const targetLine = targetLines[i].trim();
          if (!targetLine) continue;
          
          // 提取目标行的关键词
          const targetKeywords = targetLine
            .replace(/<[^>]*>/g, ' ')
            .replace(/[^\w\s\u4e00-\u9fff]/g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 2)
            .map(word => word.toLowerCase());
          
          if (targetKeywords.length === 0) continue;
          
          // 计算关键词重叠度
          const commonKeywords = searchKeywords.filter(word => 
            targetKeywords.some(tword => 
              tword.includes(word) || word.includes(tword) || enhancedSimilarity(word, tword) > 0.8
            )
          );
          
          const keywordScore = commonKeywords.length / Math.max(searchKeywords.length, targetKeywords.length);
          
          if (keywordScore > bestScore && keywordScore > 0.3) {
            bestScore = keywordScore;
            bestMatch = {
              startLine: i,
              endLine: i,
              originalContent: targetLine,
              confidence: keywordScore,
              matchedLines: 1,
              strategy: 'keyword',
              commonKeywords: commonKeywords
            };
          }
        }
      }
    }
    
    // 策略3: 模糊位置匹配（基于相对位置）
    if (!bestMatch || bestScore < 0.4) {
      console.log(`🔍 尝试位置辅助匹配...`);
      
      // 这里可以基于git diff的上下文信息来辅助定位
      // 暂时跳过，但为将来扩展留出接口
    }
    
    if (bestMatch) {
      console.log(`✅ 找到匹配内容: 第 ${bestMatch.startLine + 1}-${bestMatch.endLine + 1} 行 (置信度: ${(bestMatch.confidence * 100).toFixed(1)}%, 策略: ${bestMatch.strategy})`);
      if (bestMatch.commonKeywords) {
        console.log(`🔗 匹配关键词: ${bestMatch.commonKeywords.join(', ')}`);
      }
      return bestMatch;
    } else {
      console.warn(`⚠️ 未找到匹配的内容 (最高得分: ${(bestScore * 100).toFixed(1)}%)`);
      
      // 🆕 调试信息：显示搜索关键词
      const debugKeywords = searchLines.join(' ')
        .replace(/<[^>]*>/g, ' ')
        .replace(/[^\w\s\u4e00-\u9fff]/g, ' ')
        .split(/\s+/)
        .filter(word => word.length > 2)
        .slice(0, 5);
      console.log(`🔍 搜索关键词: ${debugKeywords.join(', ')}`);
      
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
3. **中英文混排**：确保中文和英文之间有适当的空格分隔
4. **术语保护**：以下术语保持不变
${termsList}
5. **简洁输出**：只输出翻译结果，不要添加任何解释

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
      
      // 🆕 后处理：添加中英文之间的空格
      if (targetLang === 'zh-CN') {
        translatedContent = addChineseEnglishSpacing(translatedContent);
      }
      
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
    console.log(`🔍 文件大小: ${content.length} 字符 (约 ${estimateTokens(content)} tokens)`);
    
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

// 🔧 增强的修改提取函数 - 改进git diff解析
async function extractExactModifications(filePath, baseSha) {
  try {
    console.log(`🔍 分析文件修改: ${filePath} (基于 ${baseSha})`);
    
    // 使用更详细的git diff命令获取行级别的变化
    const diffOutput = execSync(
      `git diff ${baseSha}..HEAD --unified=3 -- "${filePath}"`,
      { encoding: 'utf8' }
    );
    
    if (!diffOutput.trim()) {
      console.log(`ℹ️ 文件无修改内容`);
      return [];
    }
    
    console.log(`📄 Git diff输出长度: ${diffOutput.length} 字符`);
    
    const modifications = [];
    const lines = diffOutput.split('\n');
    
    let currentHunkStart = -1;
    let removedLines = [];
    let addedLines = [];
    let contextBefore = [];
    let contextAfter = [];
    let inHunk = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('@@')) {
        // 处理前一个hunk的累积变化
        if (inHunk && (removedLines.length > 0 || addedLines.length > 0)) {
          processHunkChanges(removedLines, addedLines, contextBefore, contextAfter, modifications);
        }
        
        // 新的hunk开始
        inHunk = true;
        removedLines = [];
        addedLines = [];
        contextBefore = [];
        contextAfter = [];
        console.log(`📍 进入新的diff块: ${line}`);
        continue;
      }
      
      if (!inHunk) continue;
      
      if (line.startsWith('-')) {
        // 删除的行
        removedLines.push(line.substring(1));
      } else if (line.startsWith('+')) {
        // 添加的行
        addedLines.push(line.substring(1));
      } else if (line.startsWith(' ')) {
        // 上下文行 - 如果有累积的变化，先处理
        if (removedLines.length > 0 || addedLines.length > 0) {
          processHunkChanges(removedLines, addedLines, contextBefore, contextAfter, modifications);
          removedLines = [];
          addedLines = [];
          contextBefore = [];
          contextAfter = [];
        }
        
        // 保存上下文（最多保留3行）
        contextBefore.push(line.substring(1));
        if (contextBefore.length > 3) {
          contextBefore.shift();
        }
      }
    }
    
    // 处理最后的变化
    if (inHunk && (removedLines.length > 0 || addedLines.length > 0)) {
      processHunkChanges(removedLines, addedLines, contextBefore, contextAfter, modifications);
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
    return null;
  }
}

// 🆕 处理hunk中的变化的辅助函数
function processHunkChanges(removedLines, addedLines, contextBefore, contextAfter, modifications) {
  if (removedLines.length === 0 && addedLines.length === 0) return;
  
  if (removedLines.length > 0 && addedLines.length > 0) {
    // 修改操作
    modifications.push({
      type: 'modify',
      oldContent: removedLines.join('\n').trim(),
      newContent: addedLines.join('\n').trim(),
      contextBefore: contextBefore.join('\n'),
      contextAfter: contextAfter.join('\n')
    });
  } else if (removedLines.length > 0) {
    // 删除操作
    modifications.push({
      type: 'delete',
      oldContent: removedLines.join('\n').trim(),
      newContent: '',
      contextBefore: contextBefore.join('\n'),
      contextAfter: contextAfter.join('\n')
    });
  } else if (addedLines.length > 0) {
    // 添加操作
    modifications.push({
      type: 'add',
      oldContent: '',
      newContent: addedLines.join('\n').trim(),
      contextBefore: contextBefore.join('\n'),
      contextAfter: contextAfter.join('\n')
    });
  }
}

// 处理修改文件（精确修改翻译）
async function handleModifiedFile(filePath, targetLang) {
  try {
    console.log(`✏️ 精确翻译文件修改: ${filePath} -> ${targetLang}`);
    translationStatus.total++;
    
    // 🆕 设置当前目标语言供AI分析使用
    global.currentTargetLang = targetLang;
    
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
        // 查找修改内容在英文原文中的上下文位置
        const englishContext = await findModificationContext(filePath, modification);
        
        // 处理新增操作
        if (modification.type === 'add') {
          console.log(`➕ 新增操作，使用AI查找最佳插入位置`);
          
          // 翻译新增内容
          const prompt = generatePreciseModificationPrompt(targetLang, LANGUAGE_CONFIG[targetLang].pathPrefix, modification, null);
          
          console.log(`📡 调用Claude翻译新增内容...`);
          const response = await anthropic.messages.create({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 10000,
            temperature: 0.05,
            system: prompt,
            messages: [{ role: 'user', content: modification.newContent }]
          });
          
          let translatedContent = response.content[0].text.trim();
          translatedContent = processInternalLinks(translatedContent, targetLang);
          
          // 🆕 添加中英文空格处理
          if (targetLang === 'zh-CN') {
            translatedContent = addChineseEnglishSpacing(translatedContent);
          }
          
          // 🆕 使用改进的AI判断插入位置
          const currentTargetContent = targetLines.join('\n');
          const insertionPoint = await findTargetInsertionPoint(currentTargetContent, englishContext, modification);
          
          console.log(`📍 在第 ${insertionPoint + 1} 行处插入新增内容`);
          const newLines = translatedContent.split('\n');
          
          // 确保插入时保持适当的空行间距
          if (insertionPoint > 0 && targetLines[insertionPoint - 1] && targetLines[insertionPoint - 1].trim() !== '') {
            newLines.unshift('');
          }
          if (insertionPoint < targetLines.length && targetLines[insertionPoint] && targetLines[insertionPoint].trim() !== '') {
            newLines.push('');
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
            
            // 🆕 增强的调试信息
            console.log(`🔍 调试信息:`);
            console.log(`   修改类型: ${modification.type}`);
            console.log(`   搜索内容长度: ${(modification.oldContent || modification.newContent || '').length} 字符`);
            
            if (modification.contextBefore) {
              console.log(`   上下文线索: "${modification.contextBefore.substring(0, 100)}..."`);
            }
            
            // 🆕 如果是modify操作且有新内容，尝试作为add操作处理
            if (modification.type === 'modify' && modification.newContent && modification.newContent.trim()) {
              console.log(`🔄 尝试将modify操作转为add操作...`);
              
              // 使用英文上下文查找插入位置
              const insertionPoint = await findTargetInsertionPoint(currentTargetContent, englishContext, {
                type: 'add',
                newContent: modification.newContent,
                oldContent: ''
              });
              
              // 翻译新内容
              const prompt = generatePreciseModificationPrompt(targetLang, LANGUAGE_CONFIG[targetLang].pathPrefix, {
                type: 'add',
                newContent: modification.newContent,
                oldContent: ''
              }, null);
              
              console.log(`📡 调用Claude翻译modify转add的内容...`);
              const response = await anthropic.messages.create({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 10000,
                temperature: 0.05,
                system: prompt,
                messages: [{ role: 'user', content: modification.newContent }]
              });
              
              let translatedContent = response.content[0].text.trim();
              translatedContent = processInternalLinks(translatedContent, targetLang);
              
              if (targetLang === 'zh-CN') {
                translatedContent = addChineseEnglishSpacing(translatedContent);
              }
              
              const newLines = translatedContent.split('\n');
              console.log(`📍 在第 ${insertionPoint + 1} 行处插入转换的内容`);
              
              // 确保适当的空行间距
              if (insertionPoint > 0 && targetLines[insertionPoint - 1] && targetLines[insertionPoint - 1].trim() !== '') {
                newLines.unshift('');
              }
              if (insertionPoint < targetLines.length && targetLines[insertionPoint] && targetLines[insertionPoint].trim() !== '') {
                newLines.push('');
              }
              
              targetLines.splice(insertionPoint, 0, ...newLines);
              
              const tokensUsed = estimateTokens(modification.newContent);
              totalTokensUsed += tokensUsed;
              modificationsProcessed++;
              
              console.log(`✅ modify转add操作成功完成`);
            }
            
            continue;
          }
          
          console.log(`✅ 找到对应内容 (置信度: ${(targetMatch.confidence * 100).toFixed(1)}%, 策略: ${targetMatch.strategy || 'default'})`);
          
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
              
              // 🆕 添加中英文空格处理
              if (targetLang === 'zh-CN') {
                translatedContent = addChineseEnglishSpacing(translatedContent);
              }
              
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
    console.log(`🔄 回退到完整文档翻译...`);
    
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