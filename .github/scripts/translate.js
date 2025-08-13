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

// 获取文件的修改行信息
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
async function translateWithClaude(text, targetLang, maxRetries = 2, isChunk = false, chunkInfo = null) {
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

// 处理修改文件（增量翻译）
async function handleModifiedFile(filePath, targetLang) {
  try {
    console.log(`✏️ 翻译文件修改: ${filePath} -> ${targetLang}`);
    translationStatus.total++;
    
    const content = await fs.readFile(filePath, 'utf8');
    const targetPath = generateTargetPath(filePath, targetLang);
    
    // 获取基础SHA
    const baseSha = process.env.BASE_SHA;
    if (!baseSha) {
      console.warn(`⚠️ 无法获取基础SHA，将进行完整文档翻译`);
      return await handleNewFile(filePath, targetLang);
    }
    
    // 获取修改的行信息
    const modifiedRanges = await getModifiedLines(filePath, baseSha);
    if (!modifiedRanges || modifiedRanges.length === 0) {
      console.log(`ℹ️ 未检测到具体修改，将进行完整文档翻译`);
      return await handleNewFile(filePath, targetLang);
    }
    
    console.log(`📊 检测到 ${modifiedRanges.length} 个修改区域`);
    
    // 提取修改部分的上下文
    const contextRanges = extractModifiedContext(content, modifiedRanges, 15);
    if (!contextRanges || contextRanges.length === 0) {
      console.log(`ℹ️ 无法提取修改上下文，将进行完整文档翻译`);
      return await handleNewFile(filePath, targetLang);
    }
    
    console.log(`🔍 将翻译 ${contextRanges.length} 个上下文区域`);
    
    // 翻译每个修改区域
    const translatedRanges = [];
    for (let i = 0; i < contextRanges.length; i++) {
      const range = contextRanges[i];
      const estimatedTokens = estimateTokens(range.content);
      
      console.log(`📄 翻译区域 ${i + 1}/${contextRanges.length} (行 ${range.originalStart + 1}-${range.originalEnd + 1}, ${estimatedTokens} tokens)`);
      
      try {
        const translatedContent = await translateWithClaude(
          range.content,
          targetLang,
          3,
          false,
          null,
          true // isIncremental = true
        );
        
        translatedRanges.push({
          ...range,
          translatedContent: translatedContent
        });
        
        translationStatus.completed++;
        
        // API限流延迟
        if (i < contextRanges.length - 1) {
          console.log('⏳ API限流延迟 2秒...');
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
      } catch (error) {
        console.error(`❌ 区域 ${i + 1} 翻译失败: ${error.message}`);
        translationStatus.failed++;
        throw error;
      }
    }
    
    // 检查目标文件是否存在
    let existingTargetContent = '';
    let targetExists = false;
    try {
      existingTargetContent = await fs.readFile(targetPath, 'utf8');
      targetExists = true;
      console.log(`📄 找到现有翻译文件，将进行增量更新`);
    } catch (error) {
      console.log(`📄 翻译文件不存在，将创建新文件`);
      // 如果目标文件不存在，先完整翻译一次
      return await handleNewFile(filePath, targetLang);
    }
    
    // 合并翻译结果
    let finalContent;
    if (targetExists) {
      finalContent = await mergeTranslatedContent(existingTargetContent, translatedRanges, targetPath);
    } else {
      // 如果目标文件不存在，使用完整翻译
      finalContent = await translateDocumentChunks(chunkDocument(content), targetLang, filePath);
    }
    
    // 确保目录存在
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    
    // 写入翻译文件
    await fs.writeFile(targetPath, finalContent, 'utf8');
    
    const tokensSaved = estimateTokens(content) - translatedRanges.reduce((sum, range) => sum + estimateTokens(range.content), 0);
    console.log(`✅ 增量翻译完成: ${targetPath}`);
    console.log(`💰 节省 tokens: ${tokensSaved} (约 ${Math.round(tokensSaved / estimateTokens(content) * 100)}%)`);
    
    return { success: true, path: targetPath, incremental: true, tokensSaved };
    
  } catch (error) {
    console.error(`❌ 增量翻译失败 ${filePath}:`, error.message);
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
  report += `- 🔄 增量翻译: ${incrementalCount}\n`;
  if (totalTokensSaved > 0) {
    report += `- 💰 节省 Tokens: ${totalTokensSaved}\n`;
  }
  report += '\n';
  
  if (results.some(r => r.success)) {
    report += `**成功翻译的文件:**\n`;
    results.filter(r => r.success).forEach(r => {
      const typeIcon = r.type === 'new' ? '🆕' : '✏️';
      const incrementalInfo = r.incremental ? ' (增量)' : '';
      const tokenInfo = r.tokensSaved ? ` [节省${r.tokensSaved} tokens]` : '';
      report += `- ${typeIcon} ${r.path}${incrementalInfo}${tokenInfo}\n`;
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
    console.log(`\n🔄 开始翻译到 ${langConfig.name}...`);
    
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