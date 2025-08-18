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
  moved: 0,
  deleted: 0,
  errors: []
};

// 估算token数量
function estimateTokens(text) {
  return Math.ceil(text.length * 0.75);
}

// 生成目标文件路径（添加语言前缀）
function generateTargetPath(originalPath, targetLang) {
  const langConfig = LANGUAGE_CONFIG[targetLang];
  const relativePath = path.relative('docs', originalPath);
  
  const parsedPath = path.parse(relativePath);
  
  const langPrefix = targetLang === 'zh-CN' ? 'cn_' : 
                    targetLang === 'ja' ? 'ja_' : 
                    targetLang === 'es' ? 'es_' : '';
  
  const newFileName = langPrefix + parsedPath.name + parsedPath.ext;
  const newRelativePath = path.join(parsedPath.dir, newFileName);
  
  const targetPath = path.join('docs', langConfig.folder, newRelativePath);
  
  return targetPath;
}

// 🆕 检测文件操作类型
async function detectFileOperations(baseSha) {
  try {
    console.log(`🔍 检测文件操作 (基于 ${baseSha})...`);
    
    // 使用git diff --name-status检测文件状态
    const statusOutput = execSync(
      `git diff --name-status ${baseSha}..HEAD -- docs/`,
      { encoding: 'utf8' }
    );
    
    const operations = {
      added: [],
      modified: [],
      deleted: [],
      renamed: []
    };
    
    const lines = statusOutput.split('\n').filter(line => line.trim());
    
    for (const line of lines) {
      const parts = line.split('\t');
      const status = parts[0];
      const file = parts[1];
      
      // 只处理docs目录下的md/mdx文件，排除翻译文件
      if (!file.match(/\.mdx?$/) || file.match(/\/(zh-CN|ja|Spanish)\//)) {
        continue;
      }
      
      if (status === 'A') {
        // 新增文件
        operations.added.push(file);
      } else if (status === 'M') {
        // 修改文件
        operations.modified.push(file);
      } else if (status === 'D') {
        // 删除文件
        operations.deleted.push(file);
      } else if (status.startsWith('R')) {
        // 重命名/移动文件 (R100, R90等)
        const oldFile = file;
        const newFile = parts[2];
        operations.renamed.push({ from: oldFile, to: newFile });
      }
    }
    
    console.log(`📊 文件操作统计:`);
    console.log(`  新增: ${operations.added.length} 个`);
    console.log(`  修改: ${operations.modified.length} 个`);
    console.log(`  删除: ${operations.deleted.length} 个`);
    console.log(`  移动: ${operations.renamed.length} 个`);
    
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

// 生成翻译prompt
function generatePrompt(targetLang, pathPrefix, isChunk = false, chunkInfo = null) {
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

  return `你是一个专业的技术文档翻译专家。请将以下${isChunk ? '部分' : '完整的'} Markdown 文档从英文翻译成${langName}。

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
${termsList}${chunkInstructions}`;
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
      
      // 中英文混排处理
      if (targetLang === 'zh-CN') {
        translatedContent = addChineseEnglishSpacing(translatedContent);
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

// 🆕 处理文件翻译
async function translateFile(filePath, targetLang) {
  try {
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

// 🆕 处理文件移动
async function moveTranslationFile(oldPath, newPath, targetLang) {
  try {
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

// 🆕 处理文件删除
async function deleteTranslationFile(filePath, targetLang) {
  try {
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
  const translatedCount = results.filter(r => r.success && r.action === 'translated').length;
  const movedCount = results.filter(r => r.success && r.action === 'moved').length;
  const deletedCount = results.filter(r => r.success && r.action === 'deleted').length;
  
  let report = `## 📊 翻译完成报告\n\n`;
  report += `**目标语言:** ${languages.map(l => LANGUAGE_CONFIG[l]?.name || l).join(', ')}\n`;
  report += `**处理时间:** ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n\n`;
  report += `**统计信息:**\n`;
  report += `- ✅ 成功: ${successCount}\n`;
  report += `- ❌ 失败: ${failCount}\n`;
  report += `- 📊 总计: ${successCount + failCount}\n`;
  report += `- 📝 翻译: ${translatedCount}\n`;
  report += `- 📁 移动: ${movedCount}\n`;
  report += `- 🗑️ 删除: ${deletedCount}\n`;
  report += '\n';
  
  if (results.some(r => r.success)) {
    report += `**成功处理的文件:**\n`;
    results.filter(r => r.success).forEach(r => {
      let icon = '📝';
      if (r.action === 'moved') icon = '📁';
      else if (r.action === 'deleted') icon = '🗑️';
      else if (r.action === 'skipped') icon = 'ℹ️';
      
      report += `- ${icon} ${r.path}`;
      if (r.action && r.action !== 'translated') {
        report += ` (${r.action})`;
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
        action: 'translated', 
        language: lang,
        operation: operations.added.includes(file) ? 'added' : 'modified'
      });
    }
    
    // 处理文件移动
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