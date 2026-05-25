#!/usr/bin/env node
import fs from "fs";
import path from "path";

/**
 * gen-giscus-dup.mjs
 *
 * 目标：
 * - 从 Docusaurus build 产物中读出每个页面的 <title>（即 document.title）
 * - 找出 title 重复的页面组
 * - 对每个重复组：根据 GitHub Discussion 正文中出现的 wiki 链接自动选出“保留页 keep”
 * - 输出 JSON：usePathnameTerm（重复组中除 keep 以外的页面，用 pathname term）
 *
 * 输出文件：src/utils/giscus-dup.json（可用 --out 改）
 */

const DEFAULT_OWNER = "Seeed-Studio";
const DEFAULT_REPO = "wiki-documents";
const DEFAULT_CATEGORY = "Q&A";
const DEFAULT_OUT = path.join(process.cwd(), "src", "utils", "giscus-dup.json");

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const key = a.slice(2);
    const val = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : true;
    args[key] = val;
  }
  return args;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function normalizePathname(p) {
  if (!p.startsWith("/")) p = "/" + p;
  if (!p.endsWith("/")) p = p + "/";
  return p;
}

function htmlEntityDecode(s) {
  // 够用的实体解码
  return s
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function extractTitleFromHtml(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!m) return null;
  return htmlEntityDecode(m[1].trim());
}

function readFileIfExists(p) {
  try {
    if (fs.existsSync(p)) return fs.readFileSync(p, "utf8");
  } catch {}
  return null;
}

function listSitemapXmlFiles(buildDir) {
  const out = [];
  function walk(dir) {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(full);
      else if (ent.isFile() && /^sitemap.*\.xml$/i.test(ent.name)) out.push(full);
    }
  }
  walk(buildDir);
  return out;
}

function pickRootSitemap(buildDir) {
  const direct = path.join(buildDir, "sitemap.xml");
  if (fs.existsSync(direct)) return direct;

  const candidates = listSitemapXmlFiles(buildDir);
  if (!candidates.length) return null;

  // 选择“最靠近 build 根目录”的 sitemap.xml
  candidates.sort((a, b) => a.split(path.sep).length - b.split(path.sep).length);
  return candidates[0];
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

function loadAllPageUrlsFromSitemap(buildDir) {
  const sitemapFiles = listSitemapXmlFiles(buildDir);
  if (!sitemapFiles.length) {
    throw new Error("No sitemap*.xml found under build/. Run `yarn build` first.");
  }

  const visitedXml = new Set();
  const pageUrls = new Set();

  function locToLocalXmlPath(loc) {
    try {
      const u = new URL(loc);
      const rel = u.pathname.replace(/^\/+/, "");
      const p1 = path.join(buildDir, rel);
      if (fs.existsSync(p1)) return p1;

      const p2 = path.join(buildDir, path.basename(rel));
      if (fs.existsSync(p2)) return p2;
    } catch {
      const rel = String(loc).replace(/^\/+/, "");
      const p1 = path.join(buildDir, rel);
      if (fs.existsSync(p1)) return p1;

      const p2 = path.join(buildDir, path.basename(rel));
      if (fs.existsSync(p2)) return p2;
    }
    return null;
  }

  function walkXmlFile(xmlPath) {
    const real = path.resolve(xmlPath);
    if (visitedXml.has(real)) return;
    visitedXml.add(real);

    const xml = readFileIfExists(real);
    if (!xml) return;

    if (xml.includes("<sitemapindex")) {
      const locs = extractLocs(xml);
      for (const loc of locs) {
        if (loc.endsWith(".gz")) continue;
        const childPath = locToLocalXmlPath(loc);
        if (childPath) walkXmlFile(childPath);
      }
      return;
    }

    if (xml.includes("<urlset")) {
      const locs = extractLocs(xml);
      for (const loc of locs) {
        if (loc.endsWith(".xml") || loc.endsWith(".xml.gz")) continue;
        pageUrls.add(loc);
      }
      return;
    }

    for (const loc of extractLocs(xml)) {
      if (loc.endsWith(".xml") || loc.endsWith(".xml.gz")) continue;
      pageUrls.add(loc);
    }
  }

  for (const sitemapFile of sitemapFiles) {
    walkXmlFile(sitemapFile);
  }

  const urls = [...pageUrls];
  console.log(`Sitemap files found: ${sitemapFiles.length}`);
  console.log(`Sitemap sample:`, sitemapFiles.slice(0, 10));
  console.log(`Sitemap page URLs: ${urls.length}`);
  console.log(`Page URL sample:`, urls.slice(0, 10));
  return urls;
}

function resolveHtmlPathFromPathname(buildDir, pathname) {
  // pathname 如：/Wio-Terminal-Audio-Overview/
  const rel = pathname.replace(/^\/+/, "");      // 去掉开头 /
  const relNoSlash = rel.replace(/\/$/, "");     // 去掉末尾 /

  const candidates = [];

  if (relNoSlash === "") {
    candidates.push(path.join(buildDir, "index.html"));
  } else {
    // 目录输出：build/a/b/index.html
    candidates.push(path.join(buildDir, relNoSlash, "index.html"));
    // 非 trailingSlash 输出：build/a/b.html
    candidates.push(path.join(buildDir, `${relNoSlash}.html`));
  }

  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function readTitlesFromBuild(buildDir, pageUrls) {
  const pages = [];
  let missing = 0;

  for (const loc of pageUrls) {
    let pathname;
    try {
      pathname = new URL(loc).pathname;
    } catch {
      // loc 不是完整 URL
      pathname = loc;
    }
    pathname = normalizePathname(pathname);

    const htmlPath = resolveHtmlPathFromPathname(buildDir, pathname);
    if (!htmlPath) {
      missing++;
      continue;
    }
    const html = fs.readFileSync(htmlPath, "utf8");
    const title = extractTitleFromHtml(html);
    if (!title) {
      missing++;
      continue;
    }
    pages.push({ pathname, title });
  }

  console.log(`Pages with title: ${pages.length} (missing/unreadable: ${missing})`);
  console.log(`Page sample:`, pages.slice(0, 3));
  return pages;
}

/** -------- GitHub GraphQL -------- */

async function ghGraphQL(token, query, variables) {
  const resp = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Authorization": `bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "gen-giscus-dup-script"
    },
    body: JSON.stringify({ query, variables })
  });
  const json = await resp.json();
  if (!resp.ok || json.errors) {
    const msg = json.errors ? JSON.stringify(json.errors, null, 2) : await resp.text();
    throw new Error(`GitHub GraphQL error: ${msg}`);
  }
  return json.data;
}

async function getDiscussionCategoryId(token, owner, repo, categoryName) {
  const q = `
    query($owner:String!, $repo:String!) {
      repository(owner:$owner, name:$repo) {
        discussionCategories(first:100) {
          nodes { id name }
        }
      }
    }`;
  const data = await ghGraphQL(token, q, { owner, repo });
  const nodes = data.repository.discussionCategories.nodes;
  const hit = nodes.find((c) => c.name === categoryName);
  if (!hit) {
    const names = nodes.map((x) => x.name).join(", ");
    throw new Error(`Category "${categoryName}" not found. Available: ${names}`);
  }
  return hit.id;
}

async function fetchAllDiscussionsInCategory(token, owner, repo, categoryId) {
  const discussions = [];
  let cursor = null;

  const q = `
    query($owner:String!, $repo:String!, $categoryId:ID!, $cursor:String) {
      repository(owner:$owner, name:$repo) {
        discussions(first:100, after:$cursor, categoryId:$categoryId, orderBy:{field:UPDATED_AT, direction:DESC}) {
          pageInfo { hasNextPage endCursor }
          nodes {
            number
            title
            url
            body
            createdAt
            comments { totalCount }
          }
        }
      }
    }`;

  while (true) {
    const data = await ghGraphQL(token, q, { owner, repo, categoryId, cursor });
    const conn = data.repository.discussions;
    discussions.push(...conn.nodes);
    if (!conn.pageInfo.hasNextPage) break;
    cursor = conn.pageInfo.endCursor;
  }
  return discussions;
}

function extractFirstWikiPathnameFromBody(body) {
  // 找正文里第一个 wiki.seeedstudio.com 的链接
  const m = body.match(/https?:\/\/wiki\.seeedstudio\.com\/[^\s)"]+/i);
  if (!m) return null;
  try {
    const u = new URL(m[0]);
    return normalizePathname(u.pathname);
  } catch {
    return null;
  }
}

function pickKeepPathnameForTitleGroup(groupPages, discussionListSameTitle) {
  // 优先：从“评论最多”的 discussion 正文里找 wiki 链接作为 keep
  const sorted = [...discussionListSameTitle].sort((a, b) => {
    const ca = a.comments?.totalCount ?? 0;
    const cb = b.comments?.totalCount ?? 0;
    if (cb !== ca) return cb - ca;
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  for (const d of sorted) {
    const p = extractFirstWikiPathnameFromBody(d.body || "");
    if (!p) continue;
    const hit = groupPages.find((x) => x.pathname === p);
    if (hit) return { keepPathname: p, keepDiscussion: d };
  }

  // 兜底：用“最短 pathname”当 keep（通常更像主入口）
  const keep = [...groupPages].sort((a, b) => a.pathname.length - b.pathname.length)[0];
  return { keepPathname: keep.pathname, keepDiscussion: null };
}

/** -------- main -------- */

async function main() {
  const args = parseArgs(process.argv);
  const owner = args.owner || DEFAULT_OWNER;
  const repo = args.repo || DEFAULT_REPO;
  const category = args.category || DEFAULT_CATEGORY;
  const outPath = args.out ? path.resolve(args.out) : DEFAULT_OUT;

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error("Missing env GITHUB_TOKEN");
    process.exit(1);
  }

  const buildDir = path.join(process.cwd(), "build");
  if (!fs.existsSync(buildDir)) {
    console.error("Missing build/ directory. Run `yarn build` first.");
    process.exit(1);
  }

  // 1) sitemap -> page urls
  const pageUrls = loadAllPageUrlsFromSitemap(buildDir);

  // 2) urls -> (pathname, title)
  const pages = readTitlesFromBuild(buildDir, pageUrls);
  if (!pages.length) {
    console.error("No pages with title found. Check build output structure or sitemap path.");
    process.exit(1);
  }

  // 3) build title -> pages map
  const byTitle = new Map();
  for (const p of pages) {
    const arr = byTitle.get(p.title) || [];
    arr.push(p);
    byTitle.set(p.title, arr);
  }

  const dupTitles = [...byTitle.entries()].filter(([, arr]) => arr.length > 1);
  console.log(`Duplicate titles: ${dupTitles.length}`);

  // 4) fetch discussions (category)
  const categoryId = await getDiscussionCategoryId(token, owner, repo, category);
  const discussions = await fetchAllDiscussionsInCategory(token, owner, repo, categoryId);

  // 5) map discussion title -> list
  const discByTitle = new Map();
  for (const d of discussions) {
    const arr = discByTitle.get(d.title) || [];
    arr.push(d);
    discByTitle.set(d.title, arr);
  }

  // 6) decide keep & others for each duplicate title group
  const usePathnameTerm = [];
  const report = [];

  for (const [title, groupPages] of dupTitles) {
    const dlist = discByTitle.get(title) || [];
    const { keepPathname, keepDiscussion } = pickKeepPathnameForTitleGroup(groupPages, dlist);

    const others = groupPages
      .map((x) => x.pathname)
      .filter((p) => p !== keepPathname);

    usePathnameTerm.push(...others);

    report.push({
      title,
      keepPathname,
      keepDiscussionUrl: keepDiscussion ? keepDiscussion.url : null,
      keepDiscussionNumber: keepDiscussion ? keepDiscussion.number : null,
      pages: groupPages.map((x) => x.pathname),
      others
    });
  }

  // 去重 + 排序
  const uniq = [...new Set(usePathnameTerm)].sort();

  const out = {
    generatedAt: new Date().toISOString(),
    owner,
    repo,
    category,
    duplicateTitles: dupTitles.length,
    pathnameTermCount: uniq.length,
    usePathnameTerm: uniq,
    report
  };

  ensureDir(path.dirname(outPath));
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), "utf8");

  console.log(`Wrote ${outPath}`);
  console.log(`Pathnames using pathname-term: ${uniq.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
