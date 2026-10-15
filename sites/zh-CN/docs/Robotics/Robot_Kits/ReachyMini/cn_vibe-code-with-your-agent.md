---
description: 使用AI编码代理构建Reachy Mini应用的指南，指向AGENTS.md文档以帮助AI代理理解SDK模式和最佳实践。
title: 使用代理进行Vibe编码
slug: /reachymini_vibe-code-with-your-agent
keywords:
  - vibe coding
  - ai agent
  - claude code
  - copilot
  - agent
  - app building
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-07-27'
url: https://wiki.seeedstudio.com/cn/reachymini_vibe-code-with-your-agent/
---
# 使用您最喜欢的代理对Reachy Mini应用进行Vibe编码 🤖

使用AI编码代理（Claude Code、Codex、Copilot等）？您可以立即开始构建应用。
将此提示粘贴给您的代理：

> *我想创建一个Reachy Mini应用。首先请阅读https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md 我希望我的应用能够[在此描述您的应用创意]。*

此AGENTS.md指南为AI代理提供了他们需要的一切：SDK模式、最佳实践、示例应用和分步技能。

## 具体步骤

**1. 让代理分析项目**

打开我们的代理工具，此处以Kimi Code为例，让其分析以下两个网页下的文件与项目：

示例：分析https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md 和 https://github.com/pollen-robotics/reachy_mini/tree/main 两个网页下的项目和文件

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_vibe/reachymini_1.webp" />
</div>

**2. 告知硬件版本并开始开发**

分析完成后，告诉AI我们现在使用的Reachy Mini是有线版还是无线版，并开始让其为我们开发项目。

示例：我现在连接的是有线版本，做一个坐姿矫正的项目，当识别到当前的人坐姿不端正时进行语音播报提示坐姿不端正。

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_vibe/reachymini_2.webp" />
</div>

**3. 启动守护进程**

AI做完项目后，打开一个终端，进入相应的虚拟环境，运行：

```bash
reachymini-mini-daemon
```

**4. 运行脚本**

打开另外一个终端，运行AI所写的脚本，即可开始运行了。如果有相应的小bug或者还想在当前基础上进行增加功能，也可以继续跟AI对话让其完成相应的修改。

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_vibe/reachymini_3.webp" />
</div>

这将让您能够快速进行AI编程开发机器人，创建、测试和迭代Reachy Mini应用。甚至可以将它们发布到Hugging Face应用商店供全世界使用！
