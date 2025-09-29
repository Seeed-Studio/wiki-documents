#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
只处理 docs/es、docs/ja、docs/zh-CN 三个目录下的 .md/.mdx/.markdown 文件。
- es 目录 => /es/ 或 https://wiki.seeedstudio.com/es/...
- ja 目录 => /ja/ 或 https://wiki.seeedstudio.com/ja/...
- zh-CN 目录 => /cn/ 或 https://wiki.seeedstudio.com/cn/...
不会生成 .bak 备份。

稳健性：
- 代码块/行内代码使用不可见占位符并用字符串替换还原，避免漏还原。
- 协议相对 URL（以 // 开头）视为外站链接，直接跳过。
- 保护路径：/contributors 与 /contributors/（区分大小写，只有小写生效）不修改；但 /Contributor 会正常加语言前缀。
"""

import argparse
import pathlib
import re
import sys
from typing import Iterable, List, Tuple

WIKI_HOST = "wiki.seeedstudio.com"
MD_EXTS = {".md", ".mdx", ".markdown"}

# 仅这三个目录
DIR_LANG_MAP = {
    "es": "es",
    "ja": "ja",
    "zh-CN": "cn",  # 目录 zh-CN，但链接统一成 /cn/
}

# 链接提取
A_HREF_RE = re.compile(r'(<a\b[^>]*?\bhref\s*=\s*")(?P<url>[^"]*)(")', re.IGNORECASE)
MD_LINK_RE = re.compile(r'(?<!\!)\[([^\]]*)\]\(\s*(?P<url>[^()\s]+)\s*\)', re.IGNORECASE)

# 可被替换的语言前缀（允许把 zh/zh-cn 也替换成 cn）
LANG_PREFIX_RE = re.compile(r'^(cn|ja|es|zh|zh-cn)(/|$)', re.IGNORECASE)

# 代码保护：围栏代码块（``` 或 ~~~），行内代码
FENCED_BACKTICKS_RE = re.compile(r"```[\s\S]*?```", re.MULTILINE)
FENCED_TILDES_RE   = re.compile(r"~~~[\s\S]*?~~~", re.MULTILINE)
INLINE_CODE_RE     = re.compile(r"`[^`\n]*`")  # 行内反引号，避免跨行

# 需要保护的路径（大小写敏感）；支持带或不带末尾斜杠
PROTECTED_BASES = {"/contributors"}  # 只有小写 contributors 受保护


def is_skippable_url(url: str) -> bool:
    u = url.strip().lower()
    return (not u or u.startswith(("mailto:", "tel:", "javascript:")) or u.startswith("#"))


def split_url(url: str) -> Tuple[str, str, str] | Tuple[None, None, str]:
    # 拆分 query/fragment
    qpos = len(url)
    for ch in "?#":
        p = url.find(ch)
        if p != -1:
            qpos = min(qpos, p)
    base = url[:qpos]
    suffix = url[qpos:]

    # 绝对 URL
    m = re.match(r'^(https?://[^/]+)(/.*)?$', base, re.IGNORECASE)
    if m:
        scheme_host = m.group(1)
        path = m.group(2) or '/'
        return scheme_host, path, suffix

    # 站内根路径
    if base.startswith("/"):
        return "", base, suffix

    # 其他相对路径保留原样
    return None, None, url


def needs_process(scheme_host: str, path: str) -> bool:
    if scheme_host == "":
        return path.startswith("/")
    host = scheme_host.lower().split("://", 1)[-1]
    return host == WIKI_HOST


def is_protected_path(path: str) -> bool:
    """
    仅当去掉末尾斜杠后精确等于受保护基路径时返回 True。
    区分大小写：/contributors 保护；/Contributor 不保护。
    """
    if not path.startswith("/"):
        return False
    base = path.rstrip("/")  # 支持 /contributors 与 /contributors/
    return base in PROTECTED_BASES


def inject_lang(path: str, lang: str) -> str:
    # 特殊保护：保持原样
    if is_protected_path(path):
        return path

    rest = path.lstrip("/")
    m = LANG_PREFIX_RE.match(rest)
    if m:
        return "/" + lang + "/" + rest[m.end():]
    else:
        return "/" + lang + "/" + rest


def transform_url(url: str, lang: str) -> str:
    if is_skippable_url(url):
        return url
    # 协议相对外链（例如 //example.com/...）——跳过
    if url.startswith("//"):
        return url

    scheme_host, path, suffix = split_url(url)
    if scheme_host is None or not needs_process(scheme_host, path):
        return url

    # 保护绝对/相对到 wiki 主机上的 /contributors（含末尾 /）
    if is_protected_path(path):
        new_path = path  # 不改
    else:
        new_path = inject_lang(path, lang)

    return f"{scheme_host}{new_path}{suffix}" if scheme_host else f"{new_path}{suffix}"


def replace_in_noncode(text: str, lang: str) -> str:
    def repl_a(m):
        return m.group(1) + transform_url(m.group("url"), lang) + m.group(3)
    def repl_md(m):
        return m.group(0).replace(m.group("url"), transform_url(m.group("url"), lang), 1)
    text = A_HREF_RE.sub(repl_a, text)
    text = MD_LINK_RE.sub(repl_md, text)
    return text


def protect_code(text: str) -> Tuple[str, List[str]]:
    """把代码片段替换为不可见占位符"""
    chunks: List[str] = []

    def _make_placeholder(idx: int) -> str:
        return f"\x00CB{idx}\x00"

    def _collect(pattern: re.Pattern, s: str) -> str:
        out, last = [], 0
        for m in pattern.finditer(s):
            out.append(s[last:m.start()])
            chunks.append(m.group(0))
            out.append(_make_placeholder(len(chunks)-1))
            last = m.end()
        out.append(s[last:])
        return "".join(out)

    tmp = _collect(FENCED_BACKTICKS_RE, text)
    tmp = _collect(FENCED_TILDES_RE,   tmp)
    tmp = _collect(INLINE_CODE_RE,     tmp)
    return tmp, chunks


def restore_code(text: str, chunks: List[str]) -> str:
    for idx, code in enumerate(chunks):
        placeholder = f"\x00CB{idx}\x00"
        text = text.replace(placeholder, code)
    return text


def process_text(text: str, lang: str) -> str:
    protected, chunks = protect_code(text)
    processed = replace_in_noncode(protected, lang)
    restored = restore_code(processed, chunks)
    return restored


def iter_lang_files(docs_root: pathlib.Path) -> Iterable[tuple[pathlib.Path, str]]:
    for dirname, lang in DIR_LANG_MAP.items():
        sub = docs_root / dirname
        if not sub.exists():
            print(f"[提示] 跳过不存在目录：{sub}")
            continue
        for p in sub.rglob("*"):
            if p.is_file() and p.suffix.lower() in MD_EXTS:
                yield p, lang


def main():
    default_docs = (pathlib.Path(__file__).resolve().parent / ".." / "docs").resolve()
    ap = argparse.ArgumentParser(description="修正 docs/es, docs/ja, docs/zh-CN 下的链接为 /es /ja /cn（保护代码块 & 跳过 // 外链 & /contributors）")
    ap.add_argument("--root", type=pathlib.Path, default=default_docs,
                    help="docs 根目录（默认 scripts/ 的上一级 docs）")
    args = ap.parse_args()

    docs_root = args.root
    if not docs_root.exists():
        print(f"[错误] 根目录不存在：{docs_root}", file=sys.stderr)
        sys.exit(1)

    print(f"[根目录] {docs_root}")
    print("[范围] 仅处理：docs/es、docs/ja、docs/zh-CN\n")

    total, changed = 0, 0
    for file, lang in iter_lang_files(docs_root):
        total += 1
        raw = file.read_text(encoding="utf-8")
        fixed = process_text(raw, lang)
        if fixed != raw:
            file.write_text(fixed, encoding="utf-8")
            changed += 1
            print(f"[修改 | {lang}] {file}")
        else:
            print(f"[无变化 | {lang}] {file}")

    print(f"\n完成：扫描 {total} 个文件，修改 {changed} 个。")


if __name__ == "__main__":
    main()
