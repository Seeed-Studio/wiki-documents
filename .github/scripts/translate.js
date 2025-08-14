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

// 标准化文本用于比较（去除格式，保留核心内容）
function normalizeForComparison(text) {
  return text
    .toLowerCase()
    .replace(/[#*`\[\]()]/g, '') // 移除markdown标记
    .replace(/\s+/g, ' ') // 标准化空格
    .replace(/[^\w\s]/g, '') // 移除标点符号
    .trim();
}

// 改进的查找修改上下文函数
async function findModificationContext(filePath, modification, contextLines = 8) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const lines = content.split('\n');
    
    console.log(`🔍 在原文中查找修改内容的精确位置`);
    
    // 对于新增内容，找到它在文档中的位置
    if (modification.type === 'add' && modification.newContent) {
      const newContentLines = modification.newContent.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      
      if (newContentLines.length === 0) {
        console.warn(`⚠️ 新增内容为空，跳过`);
        return null;
      }
      
      console.log(`📄 搜索新增内容: "${newContentLines[0].substring(0, 50)}..." (${newContentLines.length} 行)`);
      
      let bestMatch = null;
      let bestScore = 0;
      
      // 使用滑动窗口查找最佳匹配位置
      for (let i = 0; i <= lines.length - newContentLines.length; i++) {
        let matchScore = 0;
        let totalWeight = 0;
        
        for (let j = 0; j < newContentLines.length; j++) {
          if (i + j >= lines.length) break;
          
          const originalLine = normalizeForComparison(lines[i + j]);
          const newLine = normalizeForComparison(newContentLines[j]);
          
          if (newLine.length > 3) { // 只考虑有意义的行
            const lineScore = similarity(originalLine, newLine);
            const weight = Math.min(newLine.length / 10, 3); // 根据行长度加权
            
            matchScore += lineScore * weight;
            totalWeight += weight;
          }
        }
        
        const avgScore = totalWeight > 0 ? matchScore / totalWeight : 0;
        
        if (avgScore > bestScore && avgScore > 0.7) { // 提高阈值
          bestScore = avgScore;
          bestMatch = {
            startLine: i,
            endLine: i + newContentLines.length - 1,
            score: avgScore,
            // 精确记录行数信息
            absoluteLineNumber: i,
            relativePosition: i / lines.length,
            totalLines: lines.length
          };
        }
      }
      
      if (bestMatch) {
        console.log(`✅ 找到新增内容位置: 第 ${bestMatch.startLine + 1}-${bestMatch.endLine + 1} 行`);
        console.log(`📊 相对位置: ${(bestMatch.relativePosition * 100).toFixed(1)}% (${bestMatch.absoluteLineNumber}/${bestMatch.totalLines})`);
        console.log(`🎯 匹配度: ${(bestMatch.score * 100).toFixed(1)}%`);
        
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
        return null;
      }
    }
    
    // 对于修改和删除，查找原有内容
    if ((modification.type === 'modify' || modification.type === 'delete') && modification.oldContent) {
      const searchLines = modification.oldContent.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      
      for (let i = 0; i <= lines.length - searchLines.length; i++) {
        let matchScore = 0;
        
        for (let j = 0; j < searchLines.length; j++) {
          if (similarity(normalizeForComparison(lines[i + j]), normalizeForComparison(searchLines[j])) > 0.8) {
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

// 🤖 使用AI判断最佳插入位置的核心函数
async function findInsertionPointWithAI(englishContext, targetContent, newContent, targetLang) {
  try {
    console.log(`🤖 使用AI分析最佳插入位置...`);
    
    const targetLines = targetContent.split('\n');
    const englishRelativePos = englishContext.relativePosition;
    
    // 1. 基于英文位置确定中文候选区域（前后25行）
    const windowSize = parseInt(process.env.AI_INSERTION_WINDOW) || 30;
    const estimatedLine = Math.round(englishRelativePos * targetLines.length);
    const startLine = Math.max(0, estimatedLine - windowSize);
    const endLine = Math.min(targetLines.length - 1, estimatedLine + windowSize);
    
    const candidateRegion = {
      startLine: startLine,
      endLine: endLine,
      content: targetLines.slice(startLine, endLine + 1).join('\n'),
      estimatedInsertionLine: estimatedLine
    };
    
    console.log(`📍 英文新增位置: 第 ${englishContext.absoluteLineNumber + 1} 行 (${(englishRelativePos * 100).toFixed(1)}%)`);
    console.log(`🎯 中文候选区域: 第 ${candidateRegion.startLine + 1}-${candidateRegion.endLine + 1} 行 (共 ${endLine - startLine + 1} 行)`);
    
    // 2. 构造AI分析prompt
    const langName = LANGUAGE_CONFIG[targetLang].name;
    const analysisPrompt = `你是一个专业的文档结构分析专家。我需要你帮我确定在${langName}翻译文档中插入新内容的最佳位置。

## 背景信息
- 这是一个英文技术文档的${langName}翻译版本
- 英文原文中在第 ${englishContext.absoluteLineNumber + 1} 行（文档 ${(englishContext.relativePosition * 100).toFixed(1)}% 位置）新增了内容
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

## 分析要求
请仔细分析上述内容，考虑以下因素：
1. **内容逻辑关系**: 新增内容在英文中的逻辑位置和上下文关系
2. **段落结构**: 保持翻译文档的段落完整性  
3. **语义连贯**: 确保插入后语义流畅自然
4. **文档结构**: 考虑标题、列表、代码块等Markdown结构元素
5. **翻译对应**: 找到英文上下文在中文译文中的对应位置

## 输出格式
请严格按照以下格式输出：

ANALYSIS: [简要说明你的分析思路，包括你识别的关键结构和对应关系]

POSITION: LINE: X [X为相对于候选区域的行号，从1开始计数，表示在第X行之前插入]

CONFIDENCE: [1-10分的信心程度]

REASON: [详细解释为什么选择这个位置，包括与英文上下文的对应关系]`;
    
    // 3. 调用AI分析
    console.log(`📤 发送AI分析请求...`);
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      temperature: 0.1,
      system: analysisPrompt,
      messages: [{
        role: 'user', 
        content: `请分析以下新增内容并确定最佳插入位置：\n\n${newContent}`
      }]
    });
    
    // 4. 解析AI响应
    const aiResponse = response.content[0].text;
    console.log(`🤖 AI分析结果:\n${aiResponse}`);
    
    // 5. 提取位置信息
    const positionMatch = aiResponse.match(/POSITION:\s*LINE:\s*(\d+)/i);
    const confidenceMatch = aiResponse.match(/CONFIDENCE:\s*(\d+)/i);
    
    if (positionMatch) {
      const relativeLine = parseInt(positionMatch[1]);
      const confidence = confidenceMatch ? parseInt(confidenceMatch[1]) : 5;
      const absoluteLine = candidateRegion.startLine + relativeLine - 1;
      
      console.log(`✅ AI推荐插入位置: 第 ${absoluteLine + 1} 行 (置信度: ${confidence}/10)`);
      
      // 6. 验证位置安全性
      const validatedPoint = validateInsertionPointSafety(targetLines, absoluteLine);
      if (validatedPoint !== absoluteLine) {
        console.log(`🛡️ 安全调整: 第 ${absoluteLine + 1} 行 → 第 ${validatedPoint + 1} 行`);
      }
      
      return validatedPoint;
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

// 验证插入位置的安全性
function validateInsertionPointSafety(targetLines, insertionPoint) {
  let safePoint = Math.max(0, Math.min(insertionPoint, targetLines.length));
  
  // 避免在Front Matter内部插入
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
      console.log(`🛡️ 调整到Front Matter之后`);
    }
  }
  
  // 避免在代码块中间插入
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
        console.log(`🛡️ 调整到代码块结束后`);
        break;
      }
    }
  }
  
  return safePoint;
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
  
  console.log(`📍 回退插入点: 第 ${insertionPoint + 1} 行`);
  return insertionPoint;
}

// 🆕 新的插入位置查找函数（集成AI判断）
async function findTargetInsertionPoint(targetContent, englishContext, modification) {
  try {
    if (!englishContext) {
      console.warn(`⚠️ 没有英文上下文，使用默认策略`);
      return findFallbackInsertionPoint(targetContent.split('\n'));
    }
    
    // 检查是否启用AI分析（默认启用）
    const useAI = process.env.USE_AI_INSERTION !== 'false';
    
    if (useAI) {
      console.log(`🤖 启用AI插入位置分析...`);
      const targetLang = global.currentTargetLang || 'zh-CN';
      return await findInsertionPointWithAI(
        englishContext, 
        targetContent, 
        modification.newContent, 
        targetLang
      );
    } else {
      // 备用：使用相对位置策略
      console.log(`📍 使用相对位置策略...`);
      const targetLines = targetContent.split('\n');
      const relativePoint = Math.round(englishContext.relativePosition * targetLines.length);
      console.log(`📍 相对位置插入点: 第 ${relativePoint + 1} 行`);
      return relativePoint;
    }
    
  } catch (error) {
    console.warn(`⚠️ 插入位置分析失败: ${error.message}`);
    return findFallbackInsertionPoint(targetContent.split('\n'));
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
        const targetLine = normalizeForComparison(targetLines[i + j]);
        const searchLine = normalizeForComparison(searchLines[j]);
        
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

// 提取确切的修改内容
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
    return null;
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
          
          // 🆕 使用AI判断插入位置
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