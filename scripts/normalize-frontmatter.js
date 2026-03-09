#!/usr/bin/env node
/* scripts/normalize-frontmatter.js */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const fg = require("fast-glob");
const yaml = require("js-yaml");
const { execSync } = require("child_process");

const ROOT = process.cwd();
const BASE_URL = "https://wiki.seeedstudio.com";

const LANG_RULES = [
  { dir: path.join("sites", "en", "docs"), prefix: "" },
  { dir: path.join("sites", "zh-CN", "docs"), prefix: "/cn" },
  { dir: path.join("sites", "ja", "docs"), prefix: "/ja" },
  { dir: path.join("sites", "es", "docs"), prefix: "/es" },
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
    return execSync(cmd, { cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] })
      .toString("utf8")
      .trim();
  } catch {
    return "";
  }
}

function getGitTimes(fileAbsPath) {
  // 最新提交时间
  const latest = runGit(`git log -1 --format=%aI -- "${fileAbsPath}"`);
  // 最早提交时间（文件首次出现）
  // --follow 对重命名更友好；--diff-filter=A 获取“新增该文件”的提交
  // 若历史中有重命名导致 A 取不到，则 fallback 到 reverse 的第一条
  let first = runGit(
    `git log --follow --diff-filter=A --format=%aI -1 -- "${fileAbsPath}"`
  );

  if (!first) {
    const all = runGit(`git log --follow --format=%aI --reverse -- "${fileAbsPath}"`);
    first = all ? all.split(/\r?\n/)[0].trim() : "";
  }

  return { createdAt: first, updatedAt: latest };
}

function toYMD(iso) {
  if (!iso || typeof iso !== "string") return "";
  // git 的 %aI 格式是 ISO 8601，前 10 位就是 YYYY-MM-DD
  return iso.slice(0, 10);
}

function normalizeSlug(slug) {
  if (!slug || typeof slug !== "string") return "";
  let s = slug.trim();
  if (!s.startsWith("/")) s = "/" + s;

  // ✅ 空白（空格/tab/多空白）=> 下划线
  s = s.replace(/\s+/g, "_");

  // ✅ 可选：避免出现多个连续下划线
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
  // 不排序：尽量保留你原本 key 的相对习惯（js-yaml 默认不保证顺序，但多数情况下保持插入顺序）
  // noRefs: 避免出现 &a *a 之类引用
  return yaml.dump(data, {
    noRefs: true,
    lineWidth: 1000,
  }).trimEnd();
}

function normalizeFile(fileAbsPath, { checkOnly = false } = {}) {
  const raw = fs.readFileSync(fileAbsPath, "utf8");
  const parsed = matter(raw);

  const data = parsed.data || {};
  const content = parsed.content || "";

  const prefix = detectLangPrefix(fileAbsPath);
  // 你给的语言目录里应该都能匹配上；匹配不上就跳过 url 生成
  const slug = normalizeSlug(data.slug);

  const gitTimes = getGitTimes(fileAbsPath);

  // createdAt：优先用已有值（如果你之前手工写过），否则用 git 最早提交时间
  // 如果已有值为空/无效，再补
  if (!data.createdAt && gitTimes.createdAt) data.createdAt = toYMD(gitTimes.createdAt);
  // updatedAt：总是更新为 git 最新提交时间（若取不到则不动）
  if (gitTimes.updatedAt) data.updatedAt = toYMD(gitTimes.updatedAt);

  // url：只要能识别语言 + slug，就生成/更新
  if (prefix !== null && slug) {
    data.url = buildUrl(prefix, slug);
    // 同时把规范化后的 slug 写回（可选，但通常是你想要的）
    data.slug = slug;
  }

  const newFm = dumpFrontmatter(data);
  const newRaw = `---\n${newFm}\n---\n${content.replace(/^\n+/, "")}`;

  const changed = newRaw !== raw;

  if (changed) {
    if (!checkOnly) fs.writeFileSync(fileAbsPath, newRaw, "utf8");
  }
  return { changed, fileAbsPath };
}

async function main() {
  const args = process.argv.slice(2);
  const checkOnly = args.includes("--check");

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

  const files = await fg(patterns, { absolute: true, dot: false });
  let changedCount = 0;

  for (const f of files) {
    const r = normalizeFile(f, { checkOnly });
    if (r.changed) changedCount++;
  }

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