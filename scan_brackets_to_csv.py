#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import csv
import re
import argparse
from typing import List, Dict, Set

BRACKET_REGEX = re.compile(r"[()\[\]{}（）【】｛｝]")
FULLWIDTH_SET = set("（）【】｛｝")

def find_brackets(name: str):
    matches = BRACKET_REGEX.findall(name)
    return {
        "labels": list(set(matches)),
        "has_fullwidth": any(ch in FULLWIDTH_SET for ch in matches),
        "count": len(matches),
    }

def should_skip_hidden(name: str):
    return name.startswith(".")

def scan(root: str, include_hidden: bool, exclude_dirs: Set[str]) -> List[Dict[str, str]]:
    results: List[Dict[str, str]] = []
    for dirpath, dirnames, filenames in os.walk(root):
        # 过滤目录
        dirnames[:] = [
            d for d in dirnames
            if d not in exclude_dirs and (include_hidden or not should_skip_hidden(d))
        ]

        # 相对路径基准
        rel_dir = os.path.relpath(dirpath, root)

        # 当前目录检查（跳过根本身）
        if dirpath != root:
            base = os.path.basename(dirpath)
            if include_hidden or not should_skip_hidden(base):
                info = find_brackets(base)
                if info["count"] > 0:
                    results.append({
                        "kind": "dir",
                        "rel_path": os.path.join(rel_dir, base) if rel_dir != "." else base,
                        "name": base,
                        "parent": rel_dir,
                        "brackets": "".join(info["labels"]),
                        "has_fullwidth": "yes" if info["has_fullwidth"] else "no",
                        "count": str(info["count"]),
                    })

        # 文件检查
        for fname in filenames:
            if not include_hidden and should_skip_hidden(fname):
                continue
            info = find_brackets(fname)
            if info["count"] > 0:
                rel_file = os.path.relpath(os.path.join(dirpath, fname), root)
                results.append({
                    "kind": "file",
                    "rel_path": rel_file,
                    "name": fname,
                    "parent": rel_dir,
                    "brackets": "".join(info["labels"]),
                    "has_fullwidth": "yes" if info["has_fullwidth"] else "no",
                    "count": str(info["count"]),
                })

    results.sort(key=lambda r: (r["kind"], r["rel_path"]))
    return results

def write_csv(rows: List[Dict[str, str]], output_path: str) -> None:
    fieldnames = ["kind", "rel_path", "name", "parent", "brackets", "has_fullwidth", "count"]
    with open(output_path, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

def main():
    parser = argparse.ArgumentParser(description="Scan file/dir names containing brackets and export to CSV (relative paths).")
    parser.add_argument("--root", default="docs", help="Root directory to scan (default: docs)")
    parser.add_argument("--output", default="brackets_report.csv", help="Output CSV filename (default: brackets_report.csv)")
    parser.add_argument("--include-hidden", action="store_true", help="Include hidden files/dirs")
    parser.add_argument("--exclude", action="append", default=[], help="Exclude these directory names (can be repeated)")
    args = parser.parse_args()

    if not os.path.isdir(args.root):
        print(f"[ERROR] Root not found: {args.root}")
        raise SystemExit(1)

    rows = scan(root=args.root, include_hidden=args.include_hidden, exclude_dirs=set(args.exclude))
    write_csv(rows, args.output)

    print(f"[OK] scanned: {args.root}")
    print(f"[OK] matches: {len(rows)}")
    print(f"[OK] CSV: {args.output}")

if __name__ == "__main__":
    main()
