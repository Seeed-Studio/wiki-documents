#!/usr/bin/env node
/* scripts/normalize-frontmatter.js */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const fg = require("fast-glob");
const yaml = require("js-yaml");
const { execSync } = require("child_process");
const cliProgress = require("cli-progress");

const ROOT = process.cwd();
const BASE_URL = "https://wiki.seeedstudio.com";

// 这些字段的变化不算“有效更新”
const MANAGED_FIELDS = new Set(["createdAt", "updatedAt", "url", "slug"]);

const LANG_RULES = [
  { dir: path.join("sites", "en", "docs"), prefix: "" },
  // { dir: path.join("sites", "zh-CN", "docs"), prefix: "/cn" },
  // { dir: path.join("sites", "ja", "docs"), prefix: "/ja" },
  // { dir: path.join("sites", "es", "docs"), prefix: "/es" },
  // { dir: path.join("sites", "pt-BR", "docs"), prefix: "/pt-br" },
];

function detectLangPrefix(fileAbsPath) {
  const rel = path.relative(ROOT, fileAbsPath).split(path.sep).join("/");
  for (const r of LANG_RULES) {
    const dirNorm = r.dir.split(path.sep).join("/");
    if (rel.startsWith(dirNorm + "/") || rel === dirNorm) return r.prefix;
  }
  return null;
}

function runGit(cmd) {
  try {
    return execSync(cmd, {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    }).trim();
  } catch {
    return "";
  }
}

function toRepoRelative(fileAbsPath) {
  return path.relative(ROOT, fileAbsPath).split(path.sep).join("/");
}

function shellQuoteDouble(str) {
  return String(str).replace(/(["\\$`])/g, "\\$1");
}

function getGitTimes(fileAbsPath) {
  const latest = runGit(`git log -1 --format=%aI -- "${shellQuoteDouble(fileAbsPath)}"`);

  let first = runGit(
    `git log --follow --diff-filter=A --format=%aI -1 -- "${shellQuoteDouble(fileAbsPath)}"`
  );

  if (!first) {
    const all = runGit(
      `git log --follow --format=%aI --reverse -- "${shellQuoteDouble(fileAbsPath)}"`
    );
    first = all ? all.split(/\r?\n/)[0].trim() : "";
  }

  return { createdAt: first, updatedAt: latest };
}

/**
 * 返回文件历史条目（按新到旧）：
 * [
 *   { commit: "abc", path: "sites/en/docs/foo.md" },
 *   { commit: "def", path: "docs/foo.md" },
 * ]
 *
 * 关键：path 是“该 commit 下文件当时的真实路径”
 */
function getFileHistoryEntries(fileAbsPath) {
  const rel = toRepoRelative(fileAbsPath);

  const out = runGit(
    `git log --follow --format=__COMMIT__%H --name-only -- "${shellQuoteDouble(rel)}"`
  );

  if (!out) return [];

  const lines = out.split(/\r?\n/);
  const entries = [];
  let currentCommit = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("__COMMIT__")) {
      currentCommit = trimmed.slice("__COMMIT__".length);
      continue;
    }

    if (currentCommit) {
      entries.push({
        commit: currentCommit,
        path: trimmed,
      });
      currentCommit = null;
    }
  }

  return entries;
}

function getFileContentAtCommit(commit, filePathAtThatCommit) {
  try {
    return execSync(`git show ${commit}:"${filePathAtThatCommit}"`, {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    });
  } catch {
    return "";
  }
}

function getCommitDateYMD(commit) {
  const iso = runGit(`git show -s --format=%aI ${commit}`);
  return toYMD(iso);
}

function toYMD(iso) {
  if (!iso || typeof iso !== "string") return "";
  return iso.slice(0, 10);
}

function todayYMD() {
  return new Date().toISOString().slice(0, 10);
}

function detectLineEnding(raw) {
  return raw.includes("\r\n") ? "\r\n" : "\n";
}

function applyLineEnding(text, eol) {
  const normalized = String(text || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n");

  return eol === "\r\n" ? normalized.replace(/\n/g, "\r\n") : normalized;
}

function splitRawFrontmatter(raw) {
  const text = String(raw || "");

  const match = text.match(
    /^(\uFEFF?)---[^\r\n]*(\r\n|\n|\r)([\s\S]*?)(\r\n|\n|\r)---[ \t]*(?:(\r\n|\n|\r)|$)/
  );

  if (!match) {
    return null;
  }

  return {
    bom: match[1] || "",
    eol: match[2] || "\n",
    body: text.slice(match[0].length),
    hasClosingEol: Boolean(match[5]),
  };
}

function normalizeSlug(slug) {
  if (!slug || typeof slug !== "string") return "";
  let s = slug.trim();

  if (!s.startsWith("/")) s = "/" + s;

  s = s.replace(/\s+/g, "_");
  s = s.replace(/_+/g, "_");

  return s;
}

function buildUrl(prefix, slug) {
  const p = prefix ? (prefix.startsWith("/") ? prefix : "/" + prefix) : "";
  const s = normalizeSlug(slug);
  if (!s) return "";
  let u = `${BASE_URL}${p}${s}`;
  if (!u.endsWith("/")) u += "/";
  return u;
}

function dumpFrontmatter(data) {
  let dumped = yaml.dump(data, {
    noRefs: true,
    lineWidth: 1000,
  }).trimEnd();

  dumped = keepLastUpdateDateYMD(dumped, data);
  dumped = keepTranslationSkipInline(dumped, data);

  return dumped;
}

function keepLastUpdateDateYMD(frontmatterText, data) {
  const value = data?.last_update?.date;

  if (!(value instanceof Date)) {
    return frontmatterText;
  }

  const ymd = value.toISOString().slice(0, 10);
  const lines = frontmatterText.split("\n");

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "last_update:") continue;

    for (let j = i + 1; j < lines.length && lines[j].startsWith("  "); j++) {
      if (lines[j].startsWith("  date:")) {
        lines[j] = `  date: ${ymd}`;
        return lines.join("\n").trimEnd();
      }
    }
  }

  return frontmatterText;
}

function keepTranslationSkipInline(frontmatterText, data) {
  const skip = data?.translation?.skip;

  if (!Array.isArray(skip)) {
    return frontmatterText;
  }

  const inlineSkip = yaml
    .dump(skip, {
      flowLevel: 0,
      noRefs: true,
      lineWidth: 1000,
    })
    .trim();

  const lines = frontmatterText.split("\n");

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "translation:") continue;

    for (let j = i + 1; j < lines.length && lines[j].startsWith("  "); j++) {
      if (lines[j] !== "  skip:") continue;

      let k = j + 1;

      while (k < lines.length && lines[k].startsWith("    - ")) {
        k++;
      }

      if (k > j + 1) {
        lines.splice(j, k - j, `  skip: ${inlineSkip}`);
      }

      return lines.join("\n").trimEnd();
    }
  }

  return frontmatterText;
}

function parseMatterSafe(raw) {
  if (!raw) return { data: {}, content: "" };
  try {
    const parsed = matter(raw);
    return {
      data: parsed.data || {},
      content: parsed.content || "",
    };
  } catch {
    return { data: {}, content: raw };
  }
}

function stripManagedFields(value) {
  if (Array.isArray(value)) {
    return value.map(stripManagedFields);
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const key of Object.keys(value)) {
      if (MANAGED_FIELDS.has(key)) continue;
      out[key] = stripManagedFields(value[key]);
    }
    return out;
  }
  return value;
}

function sortDeep(value) {
  if (Array.isArray(value)) {
    return value.map(sortDeep);
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const key of Object.keys(value).sort()) {
      out[key] = sortDeep(value[key]);
    }
    return out;
  }
  return value;
}

function normalizeContentForCompare(content) {
  return String(content || "")
    .replace(/\r\n/g, "\n")
    .replace(/^\n+/, "")
    .replace(/\s+$/, "");
}

function buildComparableFromRaw(raw) {
  const parsed = parseMatterSafe(raw);
  return JSON.stringify({
    data: sortDeep(stripManagedFields(parsed.data || {})),
    content: normalizeContentForCompare(parsed.content || ""),
  });
}

/**
 * 找出“最近一次有效更新”的日期：
 * - 从文件历史最新提交往回看
 * - 比较相邻两个版本
 * - 忽略 createdAt / updatedAt / url / slug
 * - 一旦发现还有其他差异，说明 newer 这个提交是最近一次有效更新
 *
 * 关键修复：
 * - 使用该 commit 下文件当时的真实路径来读取内容
 * - 因而支持 rename / move / 按语言拆目录
 */
function getLastMeaningfulUpdatedAt(fileAbsPath) {
  const entries = getFileHistoryEntries(fileAbsPath);

  if (entries.length === 0) return "";
  if (entries.length === 1) return getCommitDateYMD(entries[0].commit);

  for (let i = 0; i < entries.length - 1; i++) {
    const newer = entries[i];
    const older = entries[i + 1];

    const newerRaw = getFileContentAtCommit(newer.commit, newer.path);
    const olderRaw = getFileContentAtCommit(older.commit, older.path);

    if (!newerRaw || !olderRaw) continue;

    const newerComparable = buildComparableFromRaw(newerRaw);
    const olderComparable = buildComparableFromRaw(olderRaw);

    if (newerComparable !== olderComparable) {
      return getCommitDateYMD(newer.commit);
    }
  }

  // 如果历史里所有相邻版本的差异都只落在托管字段上
  // 则认为最后一次“有效更新时间”是创建时间
  return getCommitDateYMD(entries[entries.length - 1].commit);
}

/**
 * 当前工作区相对 HEAD 是否存在“有效变化”
 * - 用于处理“你还没提交，但正文或其他 frontmatter 已经改了”的场景
 * - 若只有 createdAt / updatedAt / url / slug 不同，则不算有效变化
 */
function hasWorkingTreeMeaningfulChanges(fileAbsPath) {
  const currentRaw = fs.readFileSync(fileAbsPath, "utf8");
  const rel = toRepoRelative(fileAbsPath);
  const headRaw = getFileContentAtCommit("HEAD", rel);

  if (!headRaw) return true;

  return buildComparableFromRaw(currentRaw) !== buildComparableFromRaw(headRaw);
}

function normalizeFile(fileAbsPath, { checkOnly = false } = {}) {
  const raw = fs.readFileSync(fileAbsPath, "utf8");
  const parsed = matter(raw);

  const data = { ...(parsed.data || {}) };
  const content = parsed.content || "";

  const prefix = detectLangPrefix(fileAbsPath);
  const slug = normalizeSlug(data.slug);
  const gitTimes = getGitTimes(fileAbsPath);

  if (!data.createdAt && gitTimes.createdAt) {
    data.createdAt = toYMD(gitTimes.createdAt);
  }

  if (prefix !== null && slug) {
    data.url = buildUrl(prefix, slug);
    data.slug = slug;
  }

  if (hasWorkingTreeMeaningfulChanges(fileAbsPath)) {
    data.updatedAt = todayYMD();
  } else {
    const meaningfulUpdatedAt = getLastMeaningfulUpdatedAt(fileAbsPath);
    if (meaningfulUpdatedAt) {
      data.updatedAt = meaningfulUpdatedAt;
    }
  }

  const rawParts = splitRawFrontmatter(raw);
  const eol = rawParts ? rawParts.eol : detectLineEnding(raw);
  const newFm = applyLineEnding(dumpFrontmatter(data), eol);

  let newRaw;

  if (rawParts) {
    newRaw = `${rawParts.bom}---${eol}${newFm}${eol}---`;

    if (rawParts.hasClosingEol) {
      newRaw += eol;
    }

    newRaw += rawParts.body;
  } else {
    const contentForOutput = String(content || "");
    newRaw = applyLineEnding(`---\n${dumpFrontmatter(data)}\n---\n${contentForOutput}`, eol);
  }

  const changed = newRaw !== raw;

  if (changed && !checkOnly) {
    fs.writeFileSync(fileAbsPath, newRaw, "utf8");
  }

  return { changed, fileAbsPath };
}

async function main() {
  const args = process.argv.slice(2);
  const checkOnly = args.includes("--check");

  const patterns = LANG_RULES.flatMap(({ dir }) => [
    path.join(dir, "**/*.md").split(path.sep).join("/"),
    path.join(dir, "**/*.mdx").split(path.sep).join("/"),
  ]);

  const files = await fg(patterns, { absolute: true, dot: false });
  let changedCount = 0;

  // 创建进度条
  const bar = new cliProgress.SingleBar(
    {
      format: "Processing [{bar}] {percentage}% | {value}/{total} files",
    },
    cliProgress.Presets.shades_classic
  );

  bar.start(files.length, 0);

  for (const f of files) {
    const r = normalizeFile(f, { checkOnly });
    if (r.changed) changedCount++;

    bar.increment();
  }

  bar.stop();

  if (checkOnly) {
    if (changedCount > 0) {
      console.log(`[CHECK] ${changedCount} files would be modified.`);
      process.exitCode = 1;
    } else {
      console.log("[CHECK] All good. No changes needed.");
    }
  } else {
    console.log(`[DONE] Updated ${changedCount} files.`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});