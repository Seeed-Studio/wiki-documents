#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 使用以下命令执行：python scripts/link_fix.py ./docs

import os
import re
import sys

def process_html_tag(match):
    """
    一个智能的回调函数，用于处理匹配到的 <a> 标签。
    - 内部链接 (seeedstudio.com): 添加 target="_blank", 移除 rel="noopener noreferrer"
    - 外部链接: 添加 target="_blank" 和 rel="noopener noreferrer"
    """
    tag_string = match.group(0)

    # 1. 从标签中提取 href 链接
    href_match = re.search(r'href\s*=\s*"([^"]*)"', tag_string, re.IGNORECASE)
    if not href_match:
        # 如果没有找到 href 属性，则不进行任何修改
        return tag_string
    
    href_url = href_match.group(1)

    # 2. 判断链接类型
    is_internal_link = href_url.startswith("https://www.seeedstudio.com/")
    
    # 为了方便处理，先移除可能已存在的相关属性
    # 这让我们可以从一个干净的状态开始添加，避免重复或冲突
    modified_tag = tag_string
    modified_tag = modified_tag.replace(' target="_blank"', '')
    modified_tag = modified_tag.replace(' rel="noopener noreferrer"', '')
    
    # 3. 根据链接类型构建新的属性字符串
    if is_internal_link:
        # 内部链接：只需要 target
        attributes_to_add = ' target="_blank"'
        # print(f"    - [Internal Link] Processing: {href_url}") # 取消注释以进行详细调试
    else:
        # 外部链接：需要 target 和 rel
        attributes_to_add = ' target="_blank" rel="noopener noreferrer"'
        # print(f"    - [External Link] Processing: {href_url}") # 取消注释以进行详细调试

    # 4. 将新属性插入到标签的末尾 ('>' 前)
    # modified_tag[:-1] 获取除最后一个字符 > 之外的所有内容
    final_tag = modified_tag[:-1] + attributes_to_add + '>'
    
    return final_tag

def process_markdown_files(root_directory):
    """
    遍历指定目录下的所有 Markdown 文件并处理它们。
    """
    print(f"[*] 开始扫描目录: {root_directory}")
    
    # 正则表达式模式保持不变，用于找到需要处理的 <a> 标签
    patterns_to_find = [
        re.compile(r'<a\s+[^>]*class\s*=\s*"(?:get_one_now_item|github_item)"[^>]*>', re.IGNORECASE),
    ]

    processed_files = 0
    modified_files = 0

    for dirpath, _, filenames in os.walk(root_directory):
        for filename in filenames:
            if filename.lower().endswith(('.md', '.markdown')):
                file_path = os.path.join(dirpath, filename)
                processed_files += 1
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        original_content = f.read()
                    
                    # 快速检查，提高效率
                    if "get_one_now_container" not in original_content and "github_container" not in original_content:
                        continue
                        
                    new_content = original_content
                    
                    for pattern in patterns_to_find:
                        # 使用 re.sub 和新的智能回调函数进行替换
                        new_content = pattern.sub(process_html_tag, new_content)

                    # 只有当内容确实发生变化时才写回文件
                    if new_content != original_content:
                        print(f"    [+] 正在修改: {file_path}")
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        modified_files += 1

                except Exception as e:
                    print(f"    [!] 处理文件时出错 {file_path}: {e}")

    print("\n[*] 处理完成！")
    print(f"    总共扫描文件数: {processed_files}")
    print(f"    成功修改文件数: {modified_files}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        target_directory = sys.argv[1]
    else:
        target_directory = '.'

    if not os.path.isdir(target_directory):
        print(f"[错误] 目录不存在: {target_directory}")
        sys.exit(1)
        
    print("="*50)
    print("重要提示 (V2):")
    print("此脚本将根据链接类型智能修改 <a> 标签：")
    print(" - SeeedStudio 链接: 添加 target=\"_blank\", 移除 rel 属性。")
    print(" - 其他外部链接: 添加 target=\"_blank\" 和 rel=\"noopener noreferrer\"。")
    print("强烈建议在运行前备份您的数据或使用 Git。")
    print("="*50)
    
    try:
        confirm = input(f"是否要在 '{os.path.abspath(target_directory)}' 目录中执行修改？(y/n): ")
    except NameError:
        confirm = raw_input(f"是否要在 '{os.path.abspath(target_directory)}' 目录中执行修改？(y/n): ")

    if confirm.lower() == 'y':
        process_markdown_files(target_directory)
    else:
        print("操作已取消。")