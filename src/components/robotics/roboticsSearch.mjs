export function normalizeSearchText(value) {
  return value.normalize('NFKC').toLocaleLowerCase()
    .replace(/([a-z0-9])([\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}])/gu, '$1 $2')
    .replace(/([\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}])([a-z0-9])/gu, '$1 $2')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\bso\s+arm\b/g, 'soarm')
    .replace(/\bros\s+([12])\b/g, 'ros$1')
    .replace(/\bso\s+(100|101)\b/g, 'so$1')
    .trim();
}

function matchesQuery(text, query) {
  // Short model names must stand alone: RS matches b601_rs, not conversation.
  if (/^[a-z0-9]{1,2}$/.test(query)) {
    return new RegExp(`(^|[^a-z0-9])${query}(?=$|[^a-z0-9])`).test(text);
  }
  return text.includes(query);
}

function scoreSearchResult(item, query, terms) {
  const title = normalizeSearchText(item.title);
  const description = normalizeSearchText(item.description || '');
  const keywords = normalizeSearchText(item.keywords || '');
  const href = normalizeSearchText(item.href.split(/[?#]/)[0]);
  const fields = [title, description, keywords, href];
  if (!terms.every((term) => fields.some((field) => matchesQuery(field, term)))) return 0;

  let score = 0;
  if (title === query) score += 120;
  else if (matchesQuery(title, query)) score += title.startsWith(query) ? 90 : 70;
  for (const term of terms) {
    if (matchesQuery(title, term)) score += 40;
    if (matchesQuery(description, term)) score += 15;
    if (matchesQuery(keywords, term)) score += 10;
    if (matchesQuery(href, term)) score += 8;
  }
  if (/(getting_started|get_started|quick_start|inicio_rapido)/i.test(item.href)) score += 45;
  return score;
}

export function searchRoboticsItems(items, query, limit = 12) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];
  const terms = [...new Set(normalizedQuery.split(' '))];
  const seen = new Set();
  return items
    .map((item, index) => ({item, index, score: scoreSearchResult(item, normalizedQuery, terms)}))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .filter(({item}) => {
      if (seen.has(item.href)) return false;
      seen.add(item.href);
      return true;
    })
    .slice(0, limit)
    .map((result) => result.item);
}
