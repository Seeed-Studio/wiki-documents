---
description: Reachy Mini SDK概述，包含快速入门指南、代码示例、安装链接、Python SDK文档和社区资源。
title: Reachy Mini SDK
slug: /reachymini_sdk_readme
keywords:
  - sdk
  - 快速入门
  - python
  - 代码示例
  - 教程
  - 入门
  - 机器人控制
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/cn/reachymini_sdk_readme/
---

# 构建、玩耍和创新 Reachy Mini 🤖


<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: "1px solid #ddd", borderRadius: "8px"}} />
    <p><i>▶️ 点击在 YouTube 上观看：Reachy Mini SDK 运行指南</i></p>
  </a>
</div>

## ⚡️ 快速概览
仅用**几行代码**即可控制您的机器人：

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

with ReachyMini() as mini:
    # 向上看并倾斜头部
    mini.goto_target(
        head=create_head_pose(z=10, roll=15, degrees=True, mm=True),
        duration=1.0
    )
```

## 🚀 入门指南
* **[安装](/reachymini_sdk_installation)**：5分钟设置您的计算机
* **[快速入门指南](/reachymini_sdk_quickstart)**：在Reachy Mini上运行您的第一个行为
* **[Python SDK](/reachymini_sdk_python-sdk)**：学习移动、查看、说话和倾听。
* **[AI集成](/reachymini_sdk_integration)**：连接LLM、构建应用并发布到Hugging Face。
* **[构建和发布应用](/reachymini_sdk_apps)**：创建、测试、发布和调试Reachy Mini应用。
* **[核心概念](/reachymini_sdk_core-concept)**：架构、坐标系和安全限制。

## 📂 代码示例

我们提供了一系列即运行脚本，帮助您了解如何使用机器人的特定功能。

[**👉 浏览示例文件夹**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🤖 AI辅助开发

使用AI编码代理（Claude Code、Codex、Copilot等）？您可以立即开始构建应用。将此提示粘贴给您的代理：

> *我想创建一个Reachy Mini应用。首先阅读 https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md*

这份[**AGENTS.md**](/reachymini_agents)指南为AI代理提供了所需的一切：SDK模式、最佳实践、示例应用和分步技能。

## ❓ 故障排除

遇到问题了吗？👉 **[查看故障排除和常见问题指南](/reachymini_troubleshooting)**

## 💬 社区
* [Discord](https://discord.gg/Y7FgMqHsub) - 获取帮助和分享项目。
* [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini) - 发现社区应用。
* [GitHub Discussions](https://github.com/pollen-robotics/reachy_mini/discussions) - 功能请求和错误报告。
