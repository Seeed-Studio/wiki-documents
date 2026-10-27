'use strict';
const assert = require('node:assert/strict');
const { protectCurrencyPrices } = require('./markdown-currency');
const examples = [
  ['| Lite | $4.99/月 或 $49.99/年 |', '| Lite | \\$4.99/月 或 \\$49.99/年 |'],
  ['| Lite | $4.99/月 または $49.99/年 |', '| Lite | \\$4.99/月 または \\$49.99/年 |'],
  ['| Lite | $4.99/mes o $49.99/año |', '| Lite | \\$4.99/mes o \\$49.99/año |'],
  ['| Lite | $4.99/mês ou $49.99/ano |', '| Lite | \\$4.99/mês ou \\$49.99/ano |'],
  ['| Lite | $4.99/month or $49.99/year |', '| Lite | \\$4.99/month or \\$49.99/year |'],
  ['| Add-on | $1.99/100 分钟；$4.99/300 分钟 |', '| Add-on | \\$1.99/100 分钟；\\$4.99/300 分钟 |'],
  ['| Single | $4.99/month |', '| Single | \\$4.99/month |'],
  ['| Escaped | \\$4.99/month |', '| Escaped | \\$4.99/month |'],
  ['| Math | $x^2 + 1$ |', '| Math | $x^2 + 1$ |'],
  ['| Inline code | `$4.99/month` |', '| Inline code | `$4.99/month` |'],
  ['| Math | $4.99 / month$ |', '| Math | $4.99 / month$ |'],
  ['| Formula | $4.99/month$ |', '| Formula | $4.99/month$ |'],
  ['Plain $4.99/month', 'Plain $4.99/month'],
  ['```md\n| $4.99/month |\n```', '```md\n| $4.99/month |\n```'],
  ['~~~md\n| $4.99/month |\n~~~', '~~~md\n| $4.99/month |\n~~~'],
  ['| JSX | <span>$4.99/month</span> |', '| JSX | <span>$4.99/month</span> |'],
];
for (const [input, expected] of examples) {
  assert.equal(protectCurrencyPrices(input).text, expected, input);
  assert.equal(protectCurrencyPrices(expected).text, expected, 'idempotence: ' + input);
}
console.log(`Passed ${examples.length} offline currency regression cases`);
