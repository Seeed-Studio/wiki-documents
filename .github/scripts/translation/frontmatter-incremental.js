'use strict';

function normalizeLf(raw) {
  return String(raw ?? '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

function splitDocument(raw) {
  const text = normalizeLf(raw);
  const match = text.match(/^---\n[\s\S]*?\n---(?:\n|$)/);
  if (!match) return null;

  return {
    frontMatter: match[0],
    body: text.slice(match[0].length),
  };
}

function analyzeFrontMatterOnlyChange(baseRaw, currentRaw) {
  const base = splitDocument(baseRaw);
  const current = splitDocument(currentRaw);

  if (!base || !current) return null;
  if (base.body !== current.body) return null;
  if (base.frontMatter === current.frontMatter) return null;

  return {
    frontMatter: current.frontMatter,
  };
}

function canReplaceFrontMatter(targetRaw) {
  return Boolean(splitDocument(targetRaw));
}

function replaceFrontMatter(targetRaw, translatedFrontMatterRaw) {
  const target = splitDocument(targetRaw);
  const translated = splitDocument(translatedFrontMatterRaw);

  if (!target || !translated) return null;

  return translated.frontMatter + target.body;
}

module.exports = {
  normalizeLf,
  splitDocument,
  analyzeFrontMatterOnlyChange,
  canReplaceFrontMatter,
  replaceFrontMatter,
};
