'use strict';

// Escape clear USD price expressions in Markdown table cells, not arbitrary math.
// Require a decimal amount followed by a slash and a textual billing unit.
const USD_PRICE = /(?<!\\)\$(\d+\.\d{2})(?=\/(?:\d+\s*)?[\p{L}\p{Script=Han}])/gu;

function protectCurrencyPrices(markdown) {
  let inFence = false;
  let fenceMarker = '';
  let fenceSize = 0;
  let fixes = 0;
  const lines = markdown.split('\n');
  const output = lines.map((line) => {
    const fence = line.match(/^\s*(`{3,}|~{3,})/);
    if (fence) {
      const token = fence[1];
      if (!inFence) {
        inFence = true;
        fenceMarker = token[0];
        fenceSize = token.length;
      } else if (token[0] === fenceMarker && token.length >= fenceSize) {
        inFence = false;
      }
      return line;
    }
    if (inFence || !/^\s*\|/.test(line)) return line;

    // Preserve Markdown inline code verbatim. In particular do not touch shell
    // examples or literal Markdown inside table cells.
    // Conservatively ignore rows with unmatched inline-code markers.
    if ((line.match(/`/g) || []).length % 2 !== 0) return line;
    return line.replace(/(`+)([\s\S]*?)\1|[^`]+/g, (part, ticks) => {
      if (ticks) return part;
      if (part.includes('<') || part.includes('>') || /\\\(|\\\[/.test(part)) return part;
      // Only price cells, not general prose or potential inline formulas.
      return part.replace(USD_PRICE, (match, _amount, offset) => {
        // A later dollar sign that is not another slash-unit price may be
        // closing an inline mathematical expression. Leave it unchanged.
        const remainder = part.slice(offset + match.length);
        const next = remainder.match(/(?<!\\)\$/);
        if (next && !/^\$\d+\.\d{2}\/(?:\d+\s*)?[\p{L}\p{Script=Han}]/u.test(remainder.slice(next.index))) {
          return match;
        }
        fixes++;
        return '\\' + match;
      });
    });
  });
  return { text: output.join('\n'), fixes };
}

module.exports = { protectCurrencyPrices };
