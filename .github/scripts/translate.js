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

// 文档保护列表 - 这些文件和目录不进行翻译
const PROTECTED_PATHS = [
  'docs/Getting_Started.md',           // 各语言首页有不同内容
  'docs/index.md',                     // 首页
  'docs/README.md',                    // README
  'docs/CONTRIBUTING.md',              // 贡献指南
  'docs/LICENSE.md',                   // 许可证
  // 可以添加目录保护，以/结尾
  // 'docs/special-folder/',           // 整个目录
];

// 翻译状态跟踪
const translationStatus = {
  total: 0,
  completed: 0,
  failed: 0,
  moved: 0,
  deleted: 0,
  protected: 0,
  errors: []
};

// 估算token数量
function estimateTokens(text) {
  return Math.ceil(text.length * 0.75);
}

// 检查文件是否受保护
function isProtectedPath(filePath) {
  // 标准化路径
  const normalizedPath = filePath.replace(/\\/g, '/');
  
  for (const protectedPath of PROTECTED_PATHS) {
    const normalizedProtected = protectedPath.replace(/\\/g, '/');
    
    // 检查精确匹配
    if (normalizedPath === normalizedProtected) {
      return true;
    }
    
    // 检查目录匹配（以/结尾的保护路径）
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
  
  // 特殊处理_category.yml文件
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

// 🆕 检测文件操作类型（改进版）
async function detectFileOperations(baseSha) {
  try {
    console.log(`🔍 检测文件操作 (基于 ${baseSha})...`);
    
    const statusOutput = execSync(
      `git diff --name-status ${baseSha}..HEAD -- docs/`,
      { encoding: 'utf8' }
    );
    
    const operations = {
      added: [],
      modified: [],
      deleted: [],
      renamed: [],
      renamedAndModified: []  // 🆕 新增：重命名且修改的文件
    };
    
    const lines = statusOutput.split('\n').filter(line => line.trim());
    
    for (const line of lines) {
      const parts = line.split('\t');
      const status = parts[0];
      const file = parts[1];
      
      // 处理md/mdx和_category.yml文件，排除翻译文件
      if ((!file.match(/\.(md|mdx)$/) && !file.endsWith('_category_.yml')) || 
          file.match(/\/(zh-CN|ja|Spanish)\//)) {
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
        
        // 🆕 检查重命名的文件是否也有内容修改
        const similarity = status.match(/R(\d+)/);
        const similarityScore = similarity ? parseInt(similarity[1]) : 100;
        
        if (similarityScore < 100) {
          // 相似度小于100%，说明除了重命名还有内容修改
          operations.renamedAndModified.push({ from: oldFile, to: newFile, similarity: similarityScore });
          console.log(`📝 检测到重命名+修改: ${oldFile} -> ${newFile} (相似度: ${similarityScore}%)`);
        } else {
          // 纯重命名，无内容修改
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
  
  // 处理正文内容
  const contentLines = lines.slice(contentStartIndex);
  
  for (let i = 0; i < contentLines.length; i++) {
    const line = contentLines[i];
    const lineWithNewline = line + '\n';
    const potentialChunk = currentChunk + lineWithNewline;
    
    if (line.match(/^#+\s/) && currentChunk.trim() && 
        estimateTokens(potentialChunk) > maxTokens) {
      chunks.push(currentChunk.trim());
      currentChunk = lineWithNewline;
    } else if (estimateTokens(potentialChunk) > maxTokens) {
      if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
      }
      currentChunk = lineWithNewline;
    } else {
      currentChunk = potentialChunk;
    }
  }
  
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }
  
  if (chunks.length === 0) {
    return [{
      content: content,
      frontMatter: '',
      isComplete: true,
      index: 0,
      total: 1
    }];
  }
  
  if (chunks.length === 1 && estimateTokens(content) <= maxTokens) {
    return [{
      content: content,
      frontMatter: '',
      isComplete: true,
      index: 0,
      total: 1
    }];
  }
  
  return chunks.map((chunk, index) => ({
    content: chunk,
    frontMatter: index === 0 ? frontMatter : '',
    isComplete: false,
    index: index,
    total: chunks.length
  }));
}

// 生成_category.yml翻译prompt
function generateCategoryPrompt(targetLang, pathPrefix) {
  const langName = LANGUAGE_CONFIG[targetLang].name;
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  // 去掉 pathPrefix 前面的 /，避免重复
  const cleanPathPrefix = pathPrefix.startsWith('/') ? pathPrefix.slice(1) : pathPrefix;

  return `你是一个专业的技术文档翻译专家。请将以下 _category_.yml 文件从英文翻译成${langName}。

重要规则：
1. **保持YAML格式完全不变**：缩进、冒号、引号等格式必须完全保持
2. **只翻译以下字段的值**：
   - label: 标签名称（如果不是专有产品名）
   - title: 标题
   - description: 描述
   - 注释内容（# 开头的行）
3. **不要翻译以下内容**：
   - 专有产品名称和品牌名
   - 数字、布尔值、技术参数
   - position、collapsible、collapsed、className等字段名
   - type、slug等技术字段
4. **link字段特殊处理**：
   - 如果有slug字段，在其值前添加 "${cleanPathPrefix}/" 前缀
   - 例如：slug: applications → slug: ${cleanPathPrefix}/applications
   - 翻译title和description字段的值
5. **术语保护**（保持不变）：
${termsList}
6. **换行保持**：确保输出的换行结构与输入完全一致

请只输出翻译后的YAML内容，不要添加任何解释。`;
}

// 重新设计的翻译prompt - 专门解决换行问题
function generatePrompt(targetLang, pathPrefix, isChunk = false, chunkInfo = null) {
  const langName = LANGUAGE_CONFIG[targetLang].name;
  const termsList = Object.entries(PRESERVE_TERMS)
    .map(([original, preserved]) => `- ${original} → ${preserved}`)
    .join('\n');

  const chunkInstructions = isChunk ? `

**分块翻译说明：**
- 这是文档的第 ${chunkInfo.index + 1} 部分，共 ${chunkInfo.total} 部分` : '';

  return `请将以下Markdown文档从英文翻译成${langName}。

**关键要求：逐行对照翻译，每一行必须独立处理**

示例正确格式：
原文：
---
description: Some description.
title: Some title here
keywords:
- keyword1
- keyword2
slug: /some-path
---

译文：
---
description: 这里是描述翻译。
title: 这里是标题翻译
keywords:
- keyword1
- keyword2
slug: ${pathPrefix}/some-path
---

**绝对禁止的错误示例：**
❌ title: 标题翻译 keywords:  (两个字段在同一行)
❌ ## 标题翻译 正文内容...     (标题和正文在同一行)

**翻译规则：**
1. 只翻译title、description字段的值和正文内容
2. keywords、slug、image等其他字段保持不变
3. slug字段：/path → ${pathPrefix}/path
4. 代码块、链接、文件名保持不变

**术语保护：**
${termsList}

**最重要：每一行都必须独立处理，保持原文的行结构！**${chunkInstructions}`;
}

// 强化的格式后处理 - 真正修复换行问题
function strictFormatPostProcess(translatedContent, originalContent) {
  try {
    console.log('🔧 开始严格格式检查和修复...');
    
    let fixed = translatedContent;
    let attempt = 0;
    const maxAttempts = 3;
    
    while (attempt < maxAttempts) {
      attempt++;
      console.log(`🔍 格式检查第${attempt}次...`);
      
      // 先进行修复
      fixed = forceFixFrontMatter(fixed, originalContent);
      fixed = forceFixHeaders(fixed, originalContent);
      
      // 然后验证
      const isValid = validateFormat(fixed, originalContent);
      
      if (isValid) {
        console.log(`✅ 格式验证通过 (第${attempt}次尝试)`);
        break;
      } else {
        console.warn(`❌ 格式验证失败 (第${attempt}次尝试)，继续修复...`);
        
        if (attempt === maxAttempts) {
          console.error('🚨 经过多次尝试仍有格式问题，请检查翻译结果');
        }
      }
    }
    
    return fixed;
    
  } catch (error) {
    console.warn(`⚠️ 格式修复失败: ${error.message}`);
    return translatedContent;
  }
}

// 强化的 Front Matter 修复
function forceFixFrontMatter(content, originalContent) {
  const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!frontMatterMatch) return content;
  
  let frontMatterContent = frontMatterMatch[1];
  let isFixed = false;
  
  // 修复字段合并问题
  frontMatterContent = frontMatterContent.replace(
    /^(\w+):\s*(.+?)\s+(\w+):/gm, 
    (match, field1, value1, field2) => {
      console.log(`🔧 修复字段合并: ${field1} 和 ${field2}`);
      isFixed = true;
      return `${field1}: ${value1.trim()}\n${field2}:`;
    }
  );
  
  // 特别处理title字段中包含其他字段的情况
  frontMatterContent = frontMatterContent.replace(
    /^(title|description):\s*(.+?)\s+(keywords|image|slug|last_update):/gm,
    (match, field1, value1, field2) => {
      console.log(`🔧 修复${field1}字段包含${field2}字段的问题`);
      isFixed = true;
      return `${field1}: ${value1.trim()}\n${field2}:`;
    }
  );
  
  if (isFixed) {
    const fixedFrontMatter = `---\n${frontMatterContent}\n---\n`;
    return content.replace(frontMatterMatch[0], fixedFrontMatter);
  }
  
  return content;
}

// 强化的标题格式修复
function forceFixHeaders(content, originalContent) {
  const lines = content.split('\n');
  const originalLines = originalContent.split('\n');
  const fixedLines = [];
  let isFixed = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    fixedLines.push(line);
    
    // 如果是标题行且下一行不是空行
    if (line.match(/^#{1,6}\s+/) && i + 1 < lines.length) {
      const nextLine = lines[i + 1];
      
      // 检查下一行是否直接是内容（不是空行，也不是另一个标题）
      if (nextLine && nextLine.trim() !== '' && !nextLine.match(/^#{1,6}\s+/)) {
        // 在原文中找对应的标题位置
        const headerLevel = line.match(/^(#{1,6})/)[1].length;
        let shouldHaveEmptyLine = false;
        
        // 检查原文中同级别标题后是否有空行
        for (let j = 0; j < originalLines.length - 1; j++) {
          const origLine = originalLines[j];
          if (origLine.match(/^#{1,6}\s+/)) {
            const origHeaderLevel = origLine.match(/^(#{1,6})/)[1].length;
            if (origHeaderLevel === headerLevel && originalLines[j + 1].trim() === '') {
              shouldHaveEmptyLine = true;
              break;
            }
          }
        }
        
        if (shouldHaveEmptyLine) {
          console.log(`🔧 修复标题后缺少空行: "${line.substring(0, 30)}..."`);
          fixedLines.push('');
          isFixed = true;
        }
      }
    }
  }
  
  if (isFixed) {
    console.log('✅ 标题格式已修复');
  }
  
  return fixedLines.join('\n');
}

// 重新设计的格式验证 - 真正检测换行问题
function validateFormat(content, originalContent) {
  const issues = [];
  
  // 检查 Front Matter 中最常见的换行问题
  const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (frontMatterMatch) {
    const frontMatterContent = frontMatterMatch[1];
    const lines = frontMatterContent.split('\n');
    
    lines.forEach((line, index) => {
      // 检查是否有字段合并到同一行的问题
      const fieldMatches = line.match(/^(\w+):\s*(.+?)\s+(\w+):/);
      if (fieldMatches) {
        issues.push(`🚨 严重错误: 第${index + 1}行字段合并: "${fieldMatches[1]}" 和 "${fieldMatches[3]}" 在同一行`);
      }
      
      // 检查title字段后是否有其他字段
      if (line.startsWith('title:')) {
        const afterColon = line.substring(6); // "title:".length = 6
        const wordsAfterTitle = afterColon.trim().split(/\s+/);
        if (wordsAfterTitle.length > 10) { // 如果title后面有很多词，可能是合并了其他字段
          issues.push(`⚠️ 警告: title字段可能过长或包含其他字段: "${line}"`);
        }
        
        // 检查是否包含其他字段关键词
        const otherFields = ['keywords', 'description', 'image', 'slug', 'last_update'];
        for (const field of otherFields) {
          if (afterColon.includes(field + ':')) {
            issues.push(`🚨 严重错误: title字段包含"${field}"字段: "${line}"`);
          }
        }
      }
      
      // 检查description字段
      if (line.startsWith('description:')) {
        const afterColon = line.substring(12); // "description:".length = 12
        const otherFields = ['title', 'keywords', 'image', 'slug', 'last_update'];
        for (const field of otherFields) {
          if (afterColon.includes(field + ':')) {
            issues.push(`🚨 严重错误: description字段包含"${field}"字段: "${line}"`);
          }
        }
      }
    });
  }
  
  // 检查标题后是否直接跟正文（没有空行）
  const allLines = content.split('\n');
  allLines.forEach((line, index) => {
    if (line.match(/^#{1,6}\s+/) && index + 1 < allLines.length) {
      const nextLine = allLines[index + 1];
      if (nextLine && nextLine.trim() !== '' && !nextLine.match(/^#{1,6}\s+/)) {
        // 检查原文中对应位置是否应该有空行
        const originalLines = originalContent.split('\n');
        let shouldHaveEmptyLine = false;
        
        // 简单匹配：如果原文中同级别标题后有空行，译文也应该有
        for (let i = 0; i < originalLines.length - 1; i++) {
          if (originalLines[i].match(/^#{1,6}\s+/) && originalLines[i + 1].trim() === '') {
            shouldHaveEmptyLine = true;
            break;
          }
        }
        
        if (shouldHaveEmptyLine) {
          issues.push(`⚠️ 警告: 第${index + 1}行标题后可能缺少空行: "${line}"`);
        }
      }
    }
  });
  
  if (issues.length > 0) {
    console.error('🚨 发现格式问题:');
    issues.forEach(issue => console.error(`  ${issue}`));
    return false; // 返回false表示验证失败
  } else {
    console.log('✅ 格式验证通过');
    return true; // 返回true表示验证通过
  }
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
      const cleanPath = path.startsWith('/') ? path.slice(1) : path;
      return `https://wiki.seeedstudio.com${pathPrefix}/${cleanPath}`;
    }
  );
  
  // 处理 HTML 格式的相对路径链接
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
  
  // 处理 Markdown 格式的相对路径链接
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

// 中英文混排处理
function addChineseEnglishSpacing(content) {
  content = content.replace(/([一-龯])([a-zA-Z])/g, '$1 $2');
  content = content.replace(/([a-zA-Z])([一-龯])/g, '$1 $2');
  content = content.replace(/([一-龯])(\d)/g, '$1 $2');
  content = content.replace(/(\d)([一-龯])/g, '$1 $2');
  content = content.replace(/([一-龯])\s+([a-zA-Z])/g, '$1 $2');
  content = content.replace(/([a-zA-Z])\s+([一-龯])/g, '$1 $2');
  content = content.replace(/([一-龯])\s+(\d)/g, '$1 $2');
  content = content.replace(/(\d)\s+([一-龯])/g, '$1 $2');
  
  return content;
}

// Claude翻译函数
async function translateWithClaude(text, targetLang, maxRetries = 2, isChunk = false, chunkInfo = null, isCategory = false) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  if (!langConfig) {
    throw new Error(`不支持的语言: ${targetLang}`);
  }
  
  // 选择合适的prompt
  const systemPrompt = isCategory ? 
    generateCategoryPrompt(targetLang, langConfig.pathPrefix) :
    generatePrompt(targetLang, langConfig.pathPrefix, isChunk, chunkInfo);
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`📡 调用Claude API (尝试 ${attempt}/${maxRetries})${isCategory ? ' [Category]' : ''}...`);
      
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 20000,
        temperature: 0, // 🔥 完全确定性输出
        system: systemPrompt,
        messages: [
          { role: 'user', content: text }
        ]
      });
      
      let translatedContent = response.content[0].text;
      
      // 对非category文件进行后处理
      if (!isCategory) {
        // 🆕 强化的格式后处理
        translatedContent = strictFormatPostProcess(translatedContent, text);
        
        // 处理链接
        translatedContent = processInternalLinks(translatedContent, targetLang);
        
        // 中英文混排处理
        if (targetLang === 'zh-CN') {
          translatedContent = addChineseEnglishSpacing(translatedContent);
        }
      }
      
      console.log(`✅ Claude翻译成功 (尝试 ${attempt})`);
      return translatedContent;
      
    } catch (error) {
      console.error(`❌ Claude翻译失败 (尝试 ${attempt}/${maxRetries}): ${error.message}`);
      
      if (attempt === maxRetries) {
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
    const firstChunk = translatedChunks[0];
    const otherChunks = translatedChunks.slice(1);
    
    const frontMatterMatch = firstChunk.match(/^---\n[\s\S]*?\n---\n/);
    
    if (frontMatterMatch) {
      const frontMatter = frontMatterMatch[0];
      const firstContent = firstChunk.replace(frontMatterMatch[0], '').trim();
      
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

// 翻译_category.yml文件
async function translateCategoryFile(filePath, targetLang) {
  try {
    console.log(`📋 翻译Category文件: ${filePath} -> ${targetLang}`);
    translationStatus.total++;
    
    const content = await fs.readFile(filePath, 'utf8');
    console.log(`🔍 文件大小: ${content.length} 字符`);
    
    const translatedContent = await translateWithClaude(
      content, 
      targetLang, 
      3, 
      false, 
      null, 
      true  // isCategory = true
    );
    
    const targetPath = generateTargetPath(filePath, targetLang);
    
    // 确保目录存在
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    
    // 写入翻译文件
    await fs.writeFile(targetPath, translatedContent, 'utf8');
    
    console.log(`✅ Category文件翻译完成: ${targetPath}`);
    return { success: true, path: targetPath, fileType: 'category' };
    
  } catch (error) {
    console.error(`❌ Category文件翻译失败 ${filePath}:`, error.message);
    translationStatus.failed++;
    return { success: false, error: error.message, path: filePath, fileType: 'category' };
  }
}

// 处理文件翻译（支持md和_category.yml）
async function translateFile(filePath, targetLang) {
  try {
    // 检查文件是否受保护
    if (isProtectedPath(filePath)) {
      console.log(`🛡️ 文件受保护，跳过翻译: ${filePath}`);
      translationStatus.protected++;
      return { success: true, path: filePath, action: 'protected' };
    }
    
    // 根据文件类型选择处理方式
    if (filePath.endsWith('_category_.yml')) {
      return await translateCategoryFile(filePath, targetLang);
    }
    
    console.log(`📝 翻译文件: ${filePath} -> ${targetLang}`);
    translationStatus.total++;
    
    const content = await fs.readFile(filePath, 'utf8');
    console.log(`🔍 文件大小: ${content.length} 字符 (约 ${estimateTokens(content)} tokens)`);
    
    // 分块处理
    const chunks = chunkDocument(content);
    console.log(`📦 文档分为 ${chunks.length} 块`);
    
    const translatedContent = await translateDocumentChunks(chunks, targetLang, filePath);
    
    const targetPath = generateTargetPath(filePath, targetLang);
    
    // 确保目录存在
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    
    // 写入翻译文件
    await fs.writeFile(targetPath, translatedContent, 'utf8');
    
    console.log(`✅ 文件翻译完成: ${targetPath}`);
    return { success: true, path: targetPath };
    
  } catch (error) {
    console.error(`❌ 文件翻译失败 ${filePath}:`, error.message);
    translationStatus.failed++;
    return { success: false, error: error.message, path: filePath };
  }
}

// 🆕 处理重命名+修改的文件
async function translateRenamedAndModifiedFile(oldPath, newPath, targetLang) {
  try {
    console.log(`🔄 处理重命名+修改文件: ${oldPath} -> ${newPath} (${targetLang})`);
    
    // 检查文件是否受保护
    if (isProtectedPath(oldPath) || isProtectedPath(newPath)) {
      console.log(`🛡️ 文件受保护，跳过处理: ${oldPath} -> ${newPath}`);
      translationStatus.protected++;
      return { success: true, path: newPath, action: 'protected' };
    }
    
    // 先删除旧的翻译文件
    const oldTargetPath = generateTargetPath(oldPath, targetLang);
    try {
      await fs.access(oldTargetPath);
      await fs.unlink(oldTargetPath);
      console.log(`🗑️ 已删除旧翻译文件: ${oldTargetPath}`);
    } catch (error) {
      console.log(`ℹ️ 旧翻译文件不存在: ${oldTargetPath}`);
    }
    
    // 重新翻译新文件
    const result = await translateFile(newPath, targetLang);
    
    if (result.success) {
      result.action = 'renamed_and_retranslated';
      console.log(`✅ 重命名+修改文件处理完成: ${newPath}`);
    }
    
    return result;
    
  } catch (error) {
    console.error(`❌ 处理重命名+修改文件失败: ${error.message}`);
    return { success: false, error: error.message, path: newPath, action: 'rename_modify_failed' };
  }
}

// 处理文件移动
async function moveTranslationFile(oldPath, newPath, targetLang) {
  try {
    // 检查文件是否受保护
    if (isProtectedPath(oldPath) || isProtectedPath(newPath)) {
      console.log(`🛡️ 文件受保护，跳过移动: ${oldPath} -> ${newPath}`);
      translationStatus.protected++;
      return { success: true, path: newPath, action: 'protected' };
    }
    
    console.log(`📁 移动翻译文件: ${oldPath} -> ${newPath} (${targetLang})`);
    
    const oldTargetPath = generateTargetPath(oldPath, targetLang);
    const newTargetPath = generateTargetPath(newPath, targetLang);
    
    // 检查原文件是否存在
    try {
      await fs.access(oldTargetPath);
    } catch (error) {
      console.log(`ℹ️ 原翻译文件不存在，跳过移动: ${oldTargetPath}`);
      return { success: true, path: newTargetPath, action: 'skipped' };
    }
    
    // 确保新目录存在
    await fs.mkdir(path.dirname(newTargetPath), { recursive: true });
    
    // 移动文件
    await fs.rename(oldTargetPath, newTargetPath);
    
    // 删除空目录
    try {
      await fs.rmdir(path.dirname(oldTargetPath));
    } catch (error) {
      // 目录不为空，忽略错误
    }
    
    console.log(`✅ 翻译文件移动完成: ${oldTargetPath} -> ${newTargetPath}`);
    translationStatus.moved++;
    
    return { success: true, path: newTargetPath, action: 'moved' };
    
  } catch (error) {
    console.error(`❌ 移动翻译文件失败: ${error.message}`);
    return { success: false, error: error.message, path: oldPath, action: 'move_failed' };
  }
}

// 处理文件删除
async function deleteTranslationFile(filePath, targetLang) {
  try {
    // 检查文件是否受保护
    if (isProtectedPath(filePath)) {
      console.log(`🛡️ 文件受保护，跳过删除: ${filePath}`);
      translationStatus.protected++;
      return { success: true, path: filePath, action: 'protected' };
    }
    
    console.log(`🗑️ 删除翻译文件: ${filePath} (${targetLang})`);
    
    const targetPath = generateTargetPath(filePath, targetLang);
    
    // 检查文件是否存在
    try {
      await fs.access(targetPath);
    } catch (error) {
      console.log(`ℹ️ 翻译文件不存在，跳过删除: ${targetPath}`);
      return { success: true, path: targetPath, action: 'skipped' };
    }
    
    // 删除文件
    await fs.unlink(targetPath);
    
    // 删除空目录
    try {
      await fs.rmdir(path.dirname(targetPath));
    } catch (error) {
      // 目录不为空，忽略错误
    }
    
    console.log(`✅ 翻译文件删除完成: ${targetPath}`);
    translationStatus.deleted++;
    
    return { success: true, path: targetPath, action: 'deleted' };
    
  } catch (error) {
    console.error(`❌ 删除翻译文件失败: ${error.message}`);
    return { success: false, error: error.message, path: filePath, action: 'delete_failed' };
  }
}

// 生成进度报告
function generateProgressReport(languages, results) {
  const successCount = results.filter(r => r.success).length;
  const failCount = results.filter(r => !r.success).length;
  const translatedCount = results.filter(r => r.success && (r.action === 'translated' || !r.action)).length;
  const categoryCount = results.filter(r => r.success && r.fileType === 'category').length;
  const movedCount = results.filter(r => r.success && r.action === 'moved').length;
  const deletedCount = results.filter(r => r.success && r.action === 'deleted').length;
  const renamedAndModifiedCount = results.filter(r => r.success && r.action === 'renamed_and_retranslated').length;
  const protectedCount = results.filter(r => r.success && r.action === 'protected').length;
  
  let report = `## 📊 翻译完成报告\n\n`;
  report += `**目标语言:** ${languages.map(l => LANGUAGE_CONFIG[l]?.name || l).join(', ')}\n`;
  report += `**处理时间:** ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n\n`;
  report += `**统计信息:**\n`;
  report += `- ✅ 成功: ${successCount}\n`;
  report += `- ❌ 失败: ${failCount}\n`;
  report += `- 📊 总计: ${successCount + failCount}\n`;
  report += `- 📝 文档翻译: ${translatedCount}\n`;
  report += `- 📋 Category翻译: ${categoryCount}\n`;
  report += `- 📁 纯移动: ${movedCount}\n`;
  report += `- 🔄 移动+重译: ${renamedAndModifiedCount}\n`;
  report += `- 🗑️ 删除: ${deletedCount}\n`;
  report += `- 🛡️ 保护跳过: ${protectedCount}\n`;
  report += '\n';
  
  if (results.some(r => r.success)) {
    report += `**成功处理的文件:**\n`;
    results.filter(r => r.success).forEach(r => {
      let icon = '📝';
      if (r.fileType === 'category') icon = '📋';
      else if (r.action === 'moved') icon = '📁';
      else if (r.action === 'renamed_and_retranslated') icon = '🔄';
      else if (r.action === 'deleted') icon = '🗑️';
      else if (r.action === 'protected') icon = '🛡️';
      else if (r.action === 'skipped') icon = 'ℹ️';
      
      report += `- ${icon} ${r.path}`;
      if (r.action && r.action !== 'translated') {
        report += ` (${r.action})`;
      }
      if (r.fileType === 'category') {
        report += ` [Category]`;
      }
      report += '\n';
    });
    report += '\n';
  }
  
  if (results.some(r => !r.success)) {
    report += `**处理失败的文件:**\n`;
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
  const baseSha = process.env.BASE_SHA;
  
  console.log('🌍 开始翻译任务...');
  console.log('目标语言:', languages);
  console.log('🛡️ 保护路径:', PROTECTED_PATHS);
  
  // 验证API密钥
  if (!process.env.TRANSLATION_API_KEY) {
    console.error('❌ 缺少TRANSLATION_API_KEY环境变量');
    process.exit(1);
  }
  
  // 验证BASE_SHA
  if (!baseSha) {
    console.error('❌ 缺少BASE_SHA环境变量');
    process.exit(1);
  }
  
  // 检测文件操作
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
    
    // 处理新增和修改文件（直接全文翻译）
    const filesToTranslate = [...operations.added, ...operations.modified];
    for (const file of filesToTranslate) {
      const result = await translateFile(file, lang);
      allResults.push({
        ...result, 
        action: result.action || 'translated', 
        language: lang,
        operation: operations.added.includes(file) ? 'added' : 'modified'
      });
    }
    
    // 🆕 处理重命名+修改文件（需要重新翻译）
    for (const rename of operations.renamedAndModified) {
      const result = await translateRenamedAndModifiedFile(rename.from, rename.to, lang);
      allResults.push({...result, language: lang, operation: 'renamed_and_modified'});
    }
    
    // 处理纯重命名文件（只移动）
    for (const rename of operations.renamed) {
      const result = await moveTranslationFile(rename.from, rename.to, lang);
      allResults.push({...result, language: lang, operation: 'renamed'});
    }
    
    // 处理文件删除
    for (const file of operations.deleted) {
      const result = await deleteTranslationFile(file, lang);
      allResults.push({...result, language: lang, operation: 'deleted'});
    }
  }
  
  // 生成最终报告
  const report = generateProgressReport(languages, allResults);
  console.log('\n' + report);
  
  // 保存报告到文件供GitHub Action使用
  await fs.writeFile('/tmp/translation-report.md', report, 'utf8');
  
  // 🆕 设置输出变量来指示是否需要触发其他工作流
  const hasChanges = allResults.some(r => r.success && 
    (r.action === 'translated' || r.action === 'renamed_and_retranslated'));
  
  if (hasChanges) {
    console.log('\n🚀 设置触发其他工作流标志...');
    await fs.writeFile('/tmp/trigger-deploy.txt', 'true', 'utf8');
  }
  
  if (allResults.some(r => !r.success)) {
    console.log('⚠️ 部分操作失败，请查看详细错误信息');
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