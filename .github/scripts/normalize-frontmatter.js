#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const yaml = require("js-yaml");
const { execSync } = require("child_process");

const ROOT = process.cwd();
const BASE_URL = "https://wiki.seeedstudio.com";

// 这些字段的变化不算“有效更新”
const MANAGED_FIELDS = new Set(["createdAt", "updatedAt", "url", "slug"]);

const LANG_RULES = [
  { dir: path.join("sites", "en", "docs"), prefix: "" },
  { dir: path.join("sites", "zh-CN", "docs"), prefix: "/cn" },
  { dir: path.join("sites", "ja", "docs"), prefix: "/ja" },
  { dir: path.join("sites", "es", "docs"), prefix: "/es" },
  { dir: path.join("sites", "pt-BR", "docs"), prefix: "/pt-br" },
];

function detectLangPrefix(fileAbsPath) {
  const rel = path.relative(ROOT, fileAbsPath).split(path.sep).join("/");
  for (const r of LANG_RULES) {
    const dirNorm = r.dir.split(path.sep).join("/");
    if (rel.startsWith(dirNorm + "/") || rel === dirNorm) {
      return r.prefix;
    }
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
  const latest = runGit(
    `git log -1 --format=%aI -- "${shellQuoteDouble(fileAbsPath)}"`
  );

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
  return yaml
    .dump(data, {
      noRefs: true,
      lineWidth: 1000,
    })
    .trimEnd();
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

  return getCommitDateYMD(entries[entries.length - 1].commit);
}

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

  const newFm = dumpFrontmatter(data);
  const newRaw = `---\n${newFm}\n---\n${content.replace(/^\n+/, "")}`;

  const changed = newRaw !== raw;

  if (changed && !checkOnly) {
    fs.writeFileSync(fileAbsPath, newRaw, "utf8");
  }

  return { changed, fileAbsPath };
}

async function main() {
  const args = process.argv.slice(2);
  const checkOnly = args.includes("--check");
  const fileArgs = args.filter((a) => !a.startsWith("--"));

  if (fileArgs.length === 0) {
    console.log("[INFO] No files provided. Nothing to do.");
    return;
  }

  const files = fileArgs
    .map((f) => path.resolve(ROOT, f))
    .filter((f) => fs.existsSync(f))
    .filter((f) => /\.(md|mdx)$/i.test(f));

  if (files.length === 0) {
    console.log("[INFO] No valid markdown files found. Nothing to do.");
    return;
  }

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