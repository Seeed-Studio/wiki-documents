#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
一键生成多语言 sidebar（只选语言即可）
- 从 ProductSidebar 复制结构
- 自动用 Claude 翻译 label（是否翻译 dirName 可在预设里控制）
- 改写所有文档引用：id / items 中裸字符串 / link.id
- 写回目标 Sidebar 键（CNSidebar/jaSidebar/esSidebar）
- 读取 .env 中的 ANTHROPIC_API_KEY

最简用法（只选语言）：
  python scripts/sidebars_ai_pipeline.py --lang es

可选参数：
  --sidebars        sidebars.js 路径（默认 ./sidebars.js）
  --product-key     英文源键名（默认 ProductSidebar）
  --model           Claude 模型（默认 claude-sonnet-4-20250514）
  --dry-run         只打印修改摘要，不写盘
"""

import os, re, json, time, argparse, random
from pathlib import Path
from typing import Dict, List, Optional, Tuple, Set

# ========== 语言预设（按需修改） ==========
# - target_key: 目标 Sidebar 键名
# - folder: 语言目录前缀（会放在路径最前面）
# - fileprefix: 文件名前缀（会加在最后一段文件名之前）
# - translate_dirname: 是否也翻译 dirName（多数情况下 False 更稳）
LANG_PRESETS = {
    "zh": {"target_key": "CNSidebar", "folder": "zh-CN/", "fileprefix": "cn_", "translate_dirname": False},
    "ja": {"target_key": "jaSidebar","folder": "ja/", "fileprefix": "ja_", "translate_dirname": False},
    "es": {"target_key": "esSidebar","folder": "es/", "fileprefix": "es_", "translate_dirname": False},
}

ANTHROPIC_MODEL_DEFAULT = "claude-sonnet-4-20250514"

# ========== .env 读取 ==========
def load_env():
    # 优先 python-dotenv
    try:
        from dotenv import load_dotenv
        load_dotenv()
        return
    except Exception:
        pass
    # 简易解析 .env（仅支持 KEY=VALUE）
    env_path = Path(".env")
    if env_path.exists():
        for line in env_path.read_text(encoding="utf-8").splitlines():
            line=line.strip()
            if not line or line.startswith("#") or "=" not in line: continue
            k,v=line.split("=",1)
            k=k.strip(); v=v.strip().strip('"').strip("'")
            if k and (k not in os.environ):
                os.environ[k]=v

# ========== Claude 客户端 ==========
def _make_claude_client():
    api_key = os.environ.get("ANTHROPIC_API_KEY") or os.environ.get("ANTHROPIC_APIKEY")
    if not api_key:
        raise RuntimeError("未检测到 ANTHROPIC_API_KEY（请在 .env 中配置）。")
    try:
        from anthropic import Anthropic
        return ("sdk", Anthropic(api_key=api_key))
    except Exception:
        try:
            import requests  # noqa
        except Exception:
            raise RuntimeError("未安装 anthropic SDK，且缺少 requests。请 `pip install anthropic requests python-dotenv`")
        return ("http", api_key)
    
def _strip_code_fences(s: str) -> str:
    s = s.strip()
    # 去掉 ```json / ``` 代码块围栏（首尾各一行）
    if s.startswith("```"):
        s = re.sub(r'^```[a-zA-Z0-9_-]*\r?\n', '', s, flags=re.MULTILINE)
        s = re.sub(r'\r?\n```$', '', s, flags=re.MULTILINE)
    return s.strip()

def _extract_balanced_json(s: str) -> Optional[str]:
    """
    从任意文本中提取第一个“配对完整的大括号”JSON 对象子串。
    """
    start = s.find('{')
    if start == -1:
        return None
    depth = 0
    for i in range(start, len(s)):
        ch = s[i]
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                return s[start:i+1]
    return None  # 找不到闭合

def _strip_comments_preserve_tokens(js: str) -> Tuple[str, Dict[str, str]]:
    """
    把 JS 单行 // 与多行 /* */ 注释替换成占位符，返回 (去注释文本, 占位映射)。
    会跳过字符串内容，避免把字符串里的 // 或 /* 当成注释。
    """
    tokens: Dict[str, str] = {}
    out = []
    i = 0
    n = len(js)
    cidx = 0

    def new_token(text: str) -> str:
        nonlocal cidx
        tok = f"__COMMENT__{cidx}__"
        cidx += 1
        tokens[tok] = text
        return tok

    while i < n:
        ch = js[i]
        # 字符串：'...' 或 "..."
        if ch in ("'", '"'):
            start = i
            i = _skip_string(js, i)
            # _skip_string 返回的是引号位置，需包含该引号
            out.append(js[start:i+1])
            i += 1
            continue

        # 单行注释 //
        if ch == "/" and i + 1 < n and js[i+1] == "/":
            j = js.find("\n", i)
            if j == -1:
                j = n
            comment_text = js[i:j]
            out.append(new_token(comment_text))
            i = j
            continue

        # 多行注释 /* ... */
        if ch == "/" and i + 1 < n and js[i+1] == "*":
            j = js.find("*/", i + 2)
            if j == -1:
                j = n - 2
            comment_text = js[i:j+2]
            out.append(new_token(comment_text))
            i = j + 2
            continue

        out.append(ch)
        i += 1

    return "".join(out), tokens


def _restore_comments_from_tokens(js: str, tokens: Dict[str, str]) -> str:
    if not tokens:
        return js
    # 用最简单安全的替换（token 不会相互包含）
    for tok, text in tokens.items():
        js = js.replace(tok, text)
    return js

def claude_translate(values: List[str], target_lang: str, what: str, model: str, never_translate: Optional[List[str]] = None) -> Dict[str, str]:
    if not values:
        return {}

    mode, client_or_key = _make_claude_client()

    # ===== 保护专有名词 / 标识符 =====
    glossary = ""
    if never_translate:
        glossary = "Never translate these terms (keep exactly as-is): " + ", ".join(sorted(set(never_translate))) + "\n"

    sys_rules = (
        "You are translating UI strings for a documentation sidebar.\n"
        "Return ONLY a raw JSON object mapping original->translation. No markdown code fences. No prose.\n"
        "Rules:\n"
        "- Translate visible natural-language words ONLY.\n"
        "- DO NOT translate proper nouns, product/brand names, or glossary terms.\n"
        "- Preserve code identifiers, CamelCase/PascalCase, ALL-CAPS tokens, numbers, slashes '/', hyphens '-', underscores '_', version tokens.\n"
        "- If unsure whether a token is a proper noun or identifier, KEEP IT UNCHANGED.\n"
        "- No comments, no trailing commas, no extra keys.\n"
        "- Keep leading/trailing spaces unchanged.\n"
    ) + glossary

    prompt_map = {
        "zh": f"将以下 {what} 列表翻译为简体中文。仅翻译可见自然语言，保留专有名词/产品名/路径/标识符；只返回**裸 JSON**：",
        "ja": f"次の{what}を日本語に翻訳してください。可視テキストのみ翻訳し、固有名詞・製品名・パス・識別子は保持。**生のJSON**のみ返してください：",
        "es": f"Traduce la lista de {what} al español. Traduce solo texto visible; conserva nombres propios/marcas/rutas/identificadores. Devuelve **solo JSON en crudo**:",
    }
    user_inst = prompt_map.get(
        target_lang,
        f"Translate {what} values to {target_lang}. Translate visible text only; keep proper nouns/brands/paths/identifiers unchanged. Return **only raw JSON**, no markdown, no prose:"
    )
    payload = json.dumps(values, ensure_ascii=False, indent=2)
    user_content = user_inst + "\n" + payload

    # ===== 内部一个小重试器（用于 5xx/网络错误）
    def _post_with_http():
        import requests
        url = "https://api.anthropic.com/v1/messages"
        headers = {
            "x-api-key": client_or_key if mode == "http" else os.environ.get("ANTHROPIC_API_KEY") or os.environ.get("ANTHROPIC_APIKEY",""),
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        }
        data = {
            "model": model,
            "max_tokens": 4000,      # ← 合理上限
            "temperature": 0.2,      # ← 与 SDK 对齐
            "system": sys_rules,
            "messages": [{"role": "user", "content": user_content}],
        }
        last_err = None
        for attempt in range(4):  # 0,1,2,3
            try:
                r = requests.post(url, headers=headers, data=json.dumps(data), timeout=60)
                if r.status_code >= 500:
                    raise RuntimeError(f"HTTP {r.status_code}: {r.text[:200]}")
                if r.status_code >= 400:
                    # 4xx 直接抛
                    raise RuntimeError(f"Claude API 错误：{r.status_code} {r.text[:200]}")
                j = r.json()
                blocks = j.get("content", [])
                return (blocks[0].get("text", "") if blocks else "") or j.get("text", "")
            except Exception as e:
                last_err = e
                if attempt < 3:
                    delay = (0.6 * (2 ** attempt)) + random.uniform(0, 0.3)
                    print(f"[warn] HTTP call failed ({e}); retry in {delay:.2f}s")
                    time.sleep(delay)
                else:
                    raise last_err

    text = ""
    if mode == "sdk":
        # 先试 SDK；失败再回退 HTTP
        try:
            from anthropic import InternalServerError
        except Exception:
            InternalServerError = tuple()  # 哑元

        try:
            cli = client_or_key
            # SDK 也加一点重试（只对 5xx/网络）
            for attempt in range(3):
                try:
                    resp = cli.messages.create(
                        model=model,
                        max_tokens=4000,
                        temperature=0.2,
                        system=sys_rules,
                        messages=[{"role": "user", "content": user_content}],
                    )
                    text = resp.content[0].text if getattr(resp, "content", None) else ""
                    break
                except Exception as e:
                    msg = str(e)
                    retriable = isinstance(e, InternalServerError) or "upstream" in msg or "timeout" in msg.lower()
                    if attempt < 2 and retriable:
                        delay = (0.6 * (2 ** attempt)) + random.uniform(0, 0.3)
                        print(f"[warn] SDK call failed ({e}); retry in {delay:.2f}s")
                        time.sleep(delay)
                        continue
                    # SDK 兜底转 HTTP
                    print("[info] Falling back to HTTP client...")
                    text = _post_with_http()
                    break
        except Exception:
            # SDK 失败后再试 HTTP（含重试）
            print("[info] SDK unavailable; using HTTP client.")
            text = _post_with_http()
    else:
        # 纯 HTTP 模式（含重试）
        text = _post_with_http()

    # ===== 解析：去围栏 -> 找配对大括号 -> 去尾逗号 -> json.loads =====
    raw = _strip_code_fences(text)
    cand = _extract_balanced_json(raw) or _extract_balanced_json(text)
    if not cand:
        raise RuntimeError(f"Claude 返回非 JSON：{text[:200]}")

    cand_clean = re.sub(r',(\s*[}\]])', r'\1', cand)
    try:
        obj = json.loads(cand_clean)
    except Exception as e:
        try:
            obj = json.loads(cand)
        except Exception:
            raise RuntimeError(f"Claude JSON 解析失败：{e}. 原始返回片段：{text[:200]}")

    if not isinstance(obj, dict):
        raise RuntimeError("Claude 返回的不是 JSON 对象。")
    return {str(k): str(v) for k, v in obj.items()}

def translate_values_batched(
    values: List[str],
    target_lang: str,
    what: str,
    model: str,
    never_translate: Optional[List[str]] = None,
    batch_size: int = 100,
    sleep_sec: float = 0.35,
) -> Dict[str, str]:
    """
    将 values 分批送给 claude_translate，合并结果，避免长输出被截断。
    对每个 batch 加指数退避重试，抗 5xx/网络抖动。
    """
    all_map: Dict[str, str] = {}
    unique_vals = list(dict.fromkeys(values))  # 去重且保序

    for idx, chunk in enumerate(_chunk_list(unique_vals, batch_size), start=1):
        # 对单个 batch 做最多 4 次重试
        last_err = None
        for attempt in range(4):
            try:
                part = claude_translate(chunk, target_lang, what, model, never_translate=never_translate)
                # 兜底：确保每个输入都有映射。若缺失则回退为原文
                for src in chunk:
                    all_map[src] = part.get(src, src)
                break
            except Exception as e:
                last_err = e
                if attempt < 3:
                    delay = (0.8 * (2 ** attempt)) + random.uniform(0, 0.5)
                    print(f"[warn] Batch {idx} attempt {attempt+1} failed: {e}; retry in {delay:.2f}s")
                    time.sleep(delay)
                else:
                    raise RuntimeError(f"Batch {idx} translate failed: {e}") from e

        if sleep_sec:
            time.sleep(sleep_sec)

    return all_map

# ========== 文本处理 ==========
def ensure_trailing_slash(s:str)->str:
    return s if (not s or s.endswith("/")) else s+"/"

def split_path_id(val:str)->Tuple[str,str]:
    if "/" in val:
        a,b=val.rsplit("/",1); return a,b
    return "",val

def transform_doc_id(val:str, folder_prefix:str, file_prefix:str)->str:
    if not val or val.startswith(("http://","https://","#")): return val
    folder_prefix=ensure_trailing_slash(folder_prefix)
    base=val[len(folder_prefix):] if folder_prefix and val.startswith(folder_prefix) else val
    parent,last=split_path_id(base)
    if not last.startswith(file_prefix): last=f"{file_prefix}{last}"
    new_path=(parent+"/" if parent else "")+last
    return (folder_prefix+new_path) if folder_prefix else new_path

# ========== 解析 sidebars.js：支持变量导出 ==========
def _skip_string(js: str, i: int) -> int:
    q = js[i]; i += 1
    while i < len(js):
        ch = js[i]
        if ch == '\\': i += 2; continue
        if ch == q: return i
        i += 1
    return i

def _chunk_list(lst, n):
    """Yield successive n-sized chunks from lst."""
    for i in range(0, len(lst), n):
        yield lst[i:i+n]

def _match_span(js: str, lpos: int, lchar: str, rchar: str) -> Optional[Tuple[int, int]]:
    depth = 0; i = lpos
    while i < len(js):
        ch = js[i]
        if ch in ("'", '"'):
            i = _skip_string(js, i)
        elif ch == lchar:
            depth += 1
        elif ch == rchar:
            depth -= 1
            if depth == 0:
                return (lpos, i)
        i += 1
    return None

def find_top_object_span(js_text: str) -> Optional[Tuple[int, int]]:
    """
    支持：
      a) export default { ... }
      b) module.exports = { ... }
      c) export default IDENT / module.exports = IDENT   +   const/let/var IDENT = { ... }
    返回对象字面量花括号的起止位置（含花括号）。
    """
    # a/b：直接导出对象字面量
    m = re.search(r'(?:export\s+default|module\.exports\s*=)\s*(\{)', js_text)
    if m:
        brace_l = m.start(1)
        return _match_span(js_text, brace_l, '{', '}')

    # c：导出变量名
    m = re.search(r'(?:export\s+default|module\.exports\s*=)\s*([A-Za-z_$][\w$]*)', js_text)
    if not m:
        return None
    ident = m.group(1)

    # 反向查找该变量的对象定义：const/let/var IDENT = { ... }
    pat = re.compile(rf'(?:const|let|var)\s+{re.escape(ident)}\s*=\s*(\{{)', re.MULTILINE)
    m2 = pat.search(js_text)
    if not m2:
        return None
    brace_l = m2.start(1)
    return _match_span(js_text, brace_l, '{', '}')

def find_key_array_span(js_text: str, key: str) -> Optional[Tuple[int, int]]:
    obj_span = find_top_object_span(js_text)
    if not obj_span:
        return None
    obj_l, obj_r = obj_span
    body = js_text[obj_l:obj_r+1]

    # 支持 "ProductSidebar": [ ... ] / 'ProductSidebar': [ ... ] / ProductSidebar: [ ... ]
    key_pat = re.compile(
        rf'(?:"{re.escape(key)}"|\'{re.escape(key)}\'|\b{re.escape(key)}\b)\s*:\s*(\[)', 
        re.MULTILINE
    )
    for m in key_pat.finditer(body):
        arr_l = obj_l + m.start(1)
        span = _match_span(js_text, arr_l, '[', ']')
        if span:
            return span
    return None

def extract_array_text(js_text: str, key: str) -> Tuple[str, Tuple[int, int]]:
    span = find_key_array_span(js_text, key)
    if not span:
        raise RuntimeError(f"找不到 {key}: [ ... ]")
    a, b = span
    return js_text[a:b+1], span

def upsert_key_array(js_text: str, key: str, new_array_text: str) -> str:
    # 若已存在 → 只替换方括号区间
    span = find_key_array_span(js_text, key)
    if span:
        a, b = span
        return js_text[:a] + new_array_text + js_text[b+1:]

    # 否则插入到顶层对象结束大括号前
    obj_span = find_top_object_span(js_text)
    if not obj_span:
        raise RuntimeError("未识别到顶层导出的对象（export default/module.exports）")
    obj_l, obj_r = obj_span

    # 估算缩进：取结束花括号上一行的前导空白
    before = js_text[:obj_r]
    last_nl = before.rfind("\n")
    indent = "  "
    if last_nl != -1:
        line = before[last_nl+1:obj_r]
        m = re.match(r'^\s*', line)
        indent = m.group(0) or "  "

    insert = f"\n{indent}{key}: {new_array_text},"
    return js_text[:obj_r] + insert + js_text[obj_r:]

# ========== 抽取/替换 ==========
def collect_unique_values(array_text:str, field:str)->List[str]:
    pat=re.compile(rf'\b{re.escape(field)}\s*:\s*([\'"])(.*?)\1',re.DOTALL)
    seen:Set[str]=set(); out:List[str]=[]
    for m in pat.finditer(array_text):
        val=m.group(2)
        if val not in seen:
            seen.add(val); out.append(val)
    return out

def apply_mapping_to_field(array_text:str, field:str, mapping:Dict[str,str])->str:
    pat=re.compile(rf'(\b{re.escape(field)}\s*:\s*)([\'"])(.*?)(\2)',re.DOTALL)
    def _sub(m):
        prefix,quote,val=m.group(1),m.group(2),m.group(3)
        if val in mapping: return f"{prefix}{quote}{mapping[val]}{quote}"
        return m.group(0)
    return pat.sub(_sub,array_text)

def _rewrite_and_format_items_arrays(js_text: str, folder_prefix: str, file_prefix: str) -> str:
    """
    安全改写 items 数组（任意嵌套层级）：
      - 顶层字符串元素：替换为加前缀后的文档 id
      - 若顶层所有元素都是字符串：美化为一行一个（保留 items 行缩进）
      - 若混合（含对象/数组/表达式等）：仅替换字符串，整体排版完全保持原样
    （注：build_lang_sidebar() 里已先剥离注释，这里无需处理注释）
    """
    s = js_text
    n = len(s)
    i = 0
    pos = 0        # ← 关键：记录“尚未输出”的起点
    out = []

    def process_inner(inner: str):
        # 扫描 inner，替换顶层字符串字面量，同时判断是否“全部为字符串元素”
        out_chars = []
        parts_for_pretty = []  # 收集替换后的顶层字符串（用于纯字符串场景的美化）
        j = 0
        m = len(inner)
        depth = 0
        all_top_level_are_strings = True
        seen_any_element = False

        while j < m:
            ch = inner[j]

            # 字符串字面量
            if ch in ("'", '"'):
                start = j
                end = _skip_string(inner, j)  # 返回引号位置
                lit = inner[start:end+1]      # 包含引号
                if depth == 0:
                    seen_any_element = True
                    q = lit[0]
                    val = lit[1:-1]
                    new_val = transform_doc_id(val, folder_prefix, file_prefix)
                    new_lit = f"{q}{new_val}{q}"
                    out_chars.append(new_lit)
                    parts_for_pretty.append(new_lit)
                else:
                    out_chars.append(lit)
                    all_top_level_are_strings = False
                j = end + 1
                continue

            # 顶层的非空白非逗号：出现对象/数组/标识符等，判定为混合
            if depth == 0 and ch not in " \t\r\n,":
                if ch in "[{(":
                    depth += 1
                out_chars.append(ch)
                all_top_level_are_strings = False
                seen_any_element = True
                j += 1
                continue

            # 顶层空白/逗号：照抄
            if depth == 0:
                out_chars.append(ch)
                j += 1
                continue

            # 非顶层：跟踪深度并照抄
            if ch in "[{(":
                depth += 1
            elif ch in "]})":
                depth -= 1
            out_chars.append(ch)
            j += 1

        return "".join(out_chars), (all_top_level_are_strings and seen_any_element), parts_for_pretty

    while i < n:
        ch = s[i]

        # 跳过字符串
        if ch in ("'", '"'):
            i = _skip_string(s, i) + 1
            continue

        # 尝试匹配 items\s*:\s*\[
        if s.startswith("items", i):
            # 确保是标识符边界
            prev = s[i-1] if i > 0 else ""
            nxt = s[i+5] if i+5 < n else ""
            if (not prev.isalnum() and prev not in "_$") and (not nxt.isalnum() and nxt not in "_$"):
                m1 = re.match(r'items\s*:\s*', s[i:])
                if m1:
                    pre_end = i + m1.end()      # 指向 '[' 之前
                    if pre_end < n and s[pre_end] == '[':
                        arr_l = pre_end         # '[' 位置
                        # 找到匹配的 ']'
                        depth = 1
                        j = arr_l + 1
                        while j < n and depth > 0:
                            cj = s[j]
                            if cj in ("'", '"'):
                                j = _skip_string(s, j) + 1
                                continue
                            if cj == '[':
                                depth += 1
                            elif cj == ']':
                                depth -= 1
                            j += 1
                        if depth == 0:
                            arr_r = j - 1  # ']' 位置
                            inner = s[arr_l+1:arr_r]
                            replaced_inner, all_strings, pretty_parts = process_inner(inner)

                            # 计算缩进
                            line_start = s.rfind('\n', 0, i) + 1
                            leading = re.match(r'\s*', s[line_start:i]).group(0)
                            item_indent = leading + '  '

                            # 先把“未输出的前缀”写出去
                            out.append(s[pos:i])

                            if not all_strings:
                                # 混合：保持原排版，只替换顶层字符串
                                # 关键：对 inner 再递归处理，确保其中的 items 也被改写
                                inner_processed = _rewrite_and_format_items_arrays(replaced_inner, folder_prefix, file_prefix)

                                out.append(s[i:pre_end])         # 'items ... : '
                                out.append('[')
                                out.append(inner_processed)
                                out.append(']')
                            else:
                                # 纯字符串：多行美化
                                lines = [f"{s[i:pre_end]}["]
                                for lit in pretty_parts:
                                    lines.append(f"{item_indent}{lit},")
                                lines.append(f"{leading}]")
                                out.append("\n".join(lines))

                            # 移动游标：跳过整个 items 数组
                            pos = j        #  ] 后一位
                            i = j
                            continue
        # 没命中：继续扫描
        i += 1

    # 拼上最后一段未输出文本
    out.append(s[pos:])
    return "".join(out)

def rewrite_doc_refs(array_text:str, folder_prefix:str, file_prefix:str)->str:
    # 1) id: '...'
    pat_id = re.compile(r'(\bid\s*:\s*)([\'"])(.*?)(\2)', re.DOTALL)
    def _sid(m):
        prefix, quote, val = m.group(1), m.group(2), m.group(3)
        return f"{prefix}{quote}{transform_doc_id(val, folder_prefix, file_prefix)}{quote}"
    out = pat_id.sub(_sid, array_text)

    # 2) link: { type: 'doc', id: '...' } 或 link: {id:'...'}
    pat_link_doc = re.compile(
        r'(link\s*:\s*\{\s*[^{}]*?\b(?:type\s*:\s*[\'"]doc[\'"]\s*,\s*)?id\s*:\s*)([\'"])(.*?)(\2)',
        re.DOTALL
    )
    def _slink(m):
        prefix, quote, val = m.group(1), m.group(2), m.group(3)
        return f"{prefix}{quote}{transform_doc_id(val, folder_prefix, file_prefix)}{quote}"
    out = pat_link_doc.sub(_slink, out)

    # 3) items：逐字符扫描，任意嵌套层级
    prev = out
    for _ in range(10):
        curr = _rewrite_and_format_items_arrays(prev, folder_prefix, file_prefix)
        if curr == prev:
            break
        prev = curr
    out = prev

    return out

# ========== 主流程 ==========
def build_lang_sidebar(en_array_text:str, *, target_lang:str, translate_dirname:bool,
                       folder_prefix:str, file_prefix:str, model:str)->str:
    out = en_array_text

    # === 新增：先剥离注释，所有改写对去注释文本进行 ===
    work, cmt_map = _strip_comments_preserve_tokens(out)

    # 1) 翻译 label（对去注释文本收集/替换）
    labels = collect_unique_values(work, "label")
    if labels:
        print(f"[i] labels: {len(labels)}; batch={int(os.environ.get('CLAUDE_BATCH_SIZE','100'))}")
        label_map = translate_values_batched(
            labels,
            target_lang,
            "label",
            model,
            never_translate=None,
            batch_size=int(os.environ.get("CLAUDE_BATCH_SIZE", "100")),
        )
        work = apply_mapping_to_field(work, "label", label_map)
        time.sleep(0.35)

    # 2) dirName：不翻译，只加前缀（对去注释文本）
    if translate_dirname:
        # 这里你的预设本就 False；若有人改成 True，我们也建议不翻译，仅加前缀：
        fp = ensure_trailing_slash(folder_prefix)
        if fp:
            pat = re.compile(r'(\bdirName\s*:\s*)([\'"])(.*?)(\2)', re.DOTALL)
            def _sub(m):
                prefix, quote, val = m.group(1), m.group(2), m.group(3)
                if not val.startswith(fp):
                    val = fp + val.lstrip('/')
                return f"{prefix}{quote}{val}{quote}"
            work = pat.sub(_sub, work)
    else:
        fp = ensure_trailing_slash(folder_prefix)
        if fp:
            pat = re.compile(r'(\bdirName\s*:\s*)([\'"])(.*?)(\2)', re.DOTALL)
            def _sub(m):
                prefix, quote, val = m.group(1), m.group(2), m.group(3)
                if not val.startswith(fp):
                    val = fp + val.lstrip('/')
                return f"{prefix}{quote}{val}{quote}"
            work = pat.sub(_sub, work)

    # 3) 改写链接 + items 多行重排（对去注释文本）
    work = rewrite_doc_refs(work, folder_prefix, file_prefix)

    # === 新增：把注释还原回去（注释内容完全不受影响）
    out = _restore_comments_from_tokens(work, cmt_map)
    return out

def run_once(sidebars_path:Path, product_key:str, lang:str, model:str, dry_run:bool=False):
    # 读 .env
    load_env()

    # 语言预设
    preset=LANG_PRESETS.get(lang)
    if not preset:
        raise SystemExit(f"不支持的语言：{lang}（可选 {', '.join(LANG_PRESETS.keys())}）")
    target_key=preset["target_key"]
    folder=preset["folder"]
    fileprefix=preset["fileprefix"]
    translate_dirname=preset["translate_dirname"]

    js=sidebars_path.read_text(encoding="utf-8")

    # 取英文源数组
    en_array, _ = extract_array_text(js, product_key)

    # 构建目标数组
    out_arr=build_lang_sidebar(
        en_array,
        target_lang=lang,
        translate_dirname=translate_dirname,
        folder_prefix=folder,
        file_prefix=fileprefix,
        model=model or ANTHROPIC_MODEL_DEFAULT
    )

    # 生成/覆盖目标键
    out_js=upsert_key_array(js,target_key,out_arr)

    # 摘要
    print(f"\n=== 计划更新 ===")
    print(f"语言: {lang}  →  目标键: {target_key}")
    print(f"目录前缀: {folder}   文件前缀: {fileprefix}")
    print(f"翻译 dirName: {translate_dirname}")
    print(f"模型: {model or ANTHROPIC_MODEL_DEFAULT}")
    if dry_run:
        print("\n--dry-run 模式，不写盘。")
        return

    # 备份并写盘
    backup=sidebars_path.with_suffix(sidebars_path.suffix+".bak")
    backup.write_text(js,encoding="utf-8")
    sidebars_path.write_text(out_js,encoding="utf-8")
    print(f"\n✅ 已更新：{sidebars_path}")
    print(f"🗂 备份：{backup}")

# ========== CLI ==========
def main():
    parser=argparse.ArgumentParser(description="从 ProductSidebar 生成多语言 sidebar（只选语言即可）")
    parser.add_argument("--lang", required=True, help=f"目标语言：{', '.join(LANG_PRESETS.keys())}")
    parser.add_argument("--sidebars", default="sidebars.js", help="sidebars.js 路径（默认 ./sidebars.js）")
    parser.add_argument("--product-key", default="ProductSidebar", help="英文源键名（默认 ProductSidebar）")
    parser.add_argument("--model", default=ANTHROPIC_MODEL_DEFAULT, help="Claude 模型名")
    parser.add_argument("--dry-run", action="store_true", help="只打印变更摘要，不写盘")
    args=parser.parse_args()

    sidebars_path=Path(args.sidebars)
    if not sidebars_path.exists():
        raise SystemExit(f"找不到 {sidebars_path}，请用 --sidebars 指定正确路径。")

    run_once(
        sidebars_path=sidebars_path,
        product_key=args.product_key,
        lang=args.lang,
        model=args.model,
        dry_run=args.dry_run
    )

if __name__=="__main__":
    main()
