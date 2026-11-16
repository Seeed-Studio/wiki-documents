'use strict';

const yaml = require('js-yaml');

/**
 * 修复翻译后 Front Matter 中未加引号的冒号。
 * 仅处理顶层 description / title，不修改正文及其他字段。
 */
function protectTranslatedFrontMatter(content) {
  const text = String(content);
  const match = text.match(/^---\n([\s\S]*?)\n---(?=\n|$)/);

  if (!match) {
    return { text, fixes: 0 };
  }

  let fixes = 0;

  const fixedLines = match[1].split('\n').map(line => {
    const field = line.match(
      /^((?:description|title)[ \t]*:[ \t]*)(.*)$/
    );

    if (!field) return line;

    const prefix = field[1];
    const value = field[2];
    const trimmed = value.trimStart();

    // 空值、已加引号的值、多行 YAML 字符串不处理。
    if (
      !trimmed ||
      /^["'|>]/.test(trimmed) ||
      !/:(?:[ \t]|$)/.test(value)
    ) {
      return line;
    }

    fixes++;

    // JSON 字符串格式兼容 YAML 双引号字符串。
    // 自动处理值中的双引号、反斜杠等字符。
    return prefix + JSON.stringify(value);
  });

  const fixedYaml = fixedLines.join('\n');

  // 修复后验证整个 Front Matter，而不是只检查 description。
  try {
    yaml.load(fixedYaml);
  } catch (error) {
    throw new Error(
      `翻译后的 Front Matter YAML 无效: ${error.message}`
    );
  }

  return {
    text: `---\n${fixedYaml}\n---${text.slice(match[0].length)}`,
    fixes
  };
}

module.exports = { protectTranslatedFrontMatter };