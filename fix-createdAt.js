#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const fg = require("fast-glob");
const yaml = require("js-yaml");

const ROOT = process.cwd();
const BAD_CREATED_AT = "2026-03-03";

const patterns = [
  "sites/en/docs/**/*.md",
  "sites/en/docs/**/*.mdx",
  "sites/zh-CN/docs/**/*.md",
  "sites/zh-CN/docs/**/*.mdx",
  "sites/ja/docs/**/*.md",
  "sites/ja/docs/**/*.mdx",
  "sites/es/docs/**/*.md",
  "sites/es/docs/**/*.mdx",
];

function pad2(n) {
  return String(n).padStart(2, "0");
}

function isValidYMD(y, m, d) {
  if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d)) return false;
  if (y < 1900 || y > 2100) return false;
  if (m < 1 || m > 12) return false;
  if (d < 1 || d > 31) return false;

  const dt = new Date(Date.UTC(y, m - 1, d));
  return (
    dt.getUTCFullYear() === y &&
    dt.getUTCMonth() === m - 1 &&
    dt.getUTCDate() === d
  );
}

function toYMD(y, m, d) {
  return `${y}-${pad2(m)}-${pad2(d)}`;
}

/**
 * 尝试把各种 last_update.date 解析为 YYYY-MM-DD
 *
 * 支持：
 * - YYYY-MM-DD
 * - YYYY/M/D
 * - MM/DD/YYYY
 * - M/D/YYYY
 * - DD/MM/YYYY (仅在 MM/DD 不成立时作为兜底)
 *
 * 解析策略：
 * - 如果是年在前，直接按 Y-M-D
 * - 如果是年在后：
 *   1) 优先按 M/D/Y
 *   2) 若 M/D/Y 不合法，但 D/M/Y 合法，则按 D/M/Y
 *   3) 若两者都合法（如 04/01/2024），默认按 M/D/Y
 */
function parseLooseDate(input) {
  if (!input || typeof input !== "string") return null;
  const s = input.trim();
  if (!s) return null;

  // 1) YYYY-MM-DD / YYYY/M/D / YYYY.M.D
  let m = s.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);
  if (m) {
    const y = Number(m[1]);
    const mo = Number(m[2]);
    const d = Number(m[3]);
    if (isValidYMD(y, mo, d)) return toYMD(y, mo, d);
    return null;
  }

  // 2) M/D/YYYY or D/M/YYYY
  m = s.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
  if (m) {
    const a = Number(m[1]);
    const b = Number(m[2]);
    const y = Number(m[3]);

    const mdyValid = isValidYMD(y, a, b);
    const dmyValid = isValidYMD(y, b, a);

    if (mdyValid) return toYMD(y, a, b);
    if (dmyValid) return toYMD(y, b, a);
    return null;
  }

  return null;
}

function dumpFrontmatter(data) {
  return yaml.dump(data, {
    noRefs: true,
    lineWidth: 1000,
  }).trimEnd();
}

function fixFile(fileAbsPath, { checkOnly = false } = {}) {
  const raw = fs.readFileSync(fileAbsPath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data || {};
  const content = parsed.content || "";

  if (data.createdAt !== BAD_CREATED_AT) {
    return { changed: false, reason: "createdAt_not_bad", fileAbsPath };
  }

  const rawLastUpdate = data?.last_update?.date;
  const parsedLastUpdate = parseLooseDate(rawLastUpdate);

  if (!parsedLastUpdate) {
    return { changed: false, reason: "last_update_unparseable", fileAbsPath, rawLastUpdate };
  }

  if (parsedLastUpdate === BAD_CREATED_AT) {
    return { changed: false, reason: "same_as_bad_date", fileAbsPath, rawLastUpdate };
  }

  const oldCreatedAt = data.createdAt;
  data.createdAt = parsedLastUpdate;

  const newFm = dumpFrontmatter(data);
  const newRaw = `---\n${newFm}\n---\n${content.replace(/^\n+/, "")}`;

  const changed = newRaw !== raw;
  if (changed && !checkOnly) {
    fs.writeFileSync(fileAbsPath, newRaw, "utf8");
  }

  return {
    changed,
    reason: changed ? "fixed" : "no_diff",
    fileAbsPath,
    oldCreatedAt,
    newCreatedAt: parsedLastUpdate,
    rawLastUpdate,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const checkOnly = args.includes("--check");

  const files = await fg(patterns, { absolute: true, dot: false });

  let changedCount = 0;
  let candidateCount = 0;
  const logs = [];

  for (const f of files) {
    const r = fixFile(f, { checkOnly });

    if (r.reason !== "createdAt_not_bad") {
      candidateCount++;
      logs.push(r);
    }

    if (r.changed) changedCount++;
  }

  for (const r of logs) {
    const rel = path.relative(ROOT, r.fileAbsPath).split(path.sep).join("/");
    if (r.reason === "fixed") {
      console.log(`[FIXED] ${rel}: ${r.oldCreatedAt} -> ${r.newCreatedAt} (from last_update.date=${JSON.stringify(r.rawLastUpdate)})`);
    } else if (r.reason === "last_update_unparseable") {
      console.log(`[SKIP]  ${rel}: last_update.date 无法解析 (${JSON.stringify(r.rawLastUpdate)})`);
    } else if (r.reason === "same_as_bad_date") {
      console.log(`[SKIP]  ${rel}: last_update.date 解析后仍是 ${BAD_CREATED_AT}`);
    }
  }

  if (checkOnly) {
    console.log(`\n[CHECK] candidates=${candidateCount}, would_change=${changedCount}`);
    process.exitCode = changedCount > 0 ? 1 : 0;
  } else {
    console.log(`\n[DONE] candidates=${candidateCount}, changed=${changedCount}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});