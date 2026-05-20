---
description: Reachy Mini SDK overview with quick start guide, code examples, and links to installation, Python SDK documentation, and community resources.
title: Reachy Mini SDK
slug: /reachymini_sdk_readme
keywords:
  - sdk
  - quick start
  - python
  - code examples
  - tutorials
  - getting started
  - robot control
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/reachymini_sdk_readme/
---

# Build, play, and innovate with Reachy Mini 🤖


<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: '1px solid #ddd', borderRadius: '8px'}} />
    <p><i>▶️ 点击在 YouTube 上观看：Reachy Mini SDK 运行指南</i></p>
  </a>
</div>

## ⚡️ Quick Look
Control your robot in just **a few lines of code**:

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

with ReachyMini() as mini:
    # Look up and tilt head
    mini.goto_target(
        head=create_head_pose(z=10, roll=15, degrees=True, mm=True),
        duration=1.0
    )
```

## 🚀 Get Started
* **[Installation](/reachymini_sdk_installation)**: 5 minutes to set up your computer
* **[Quickstart Guide](/reachymini_sdk_quickstart)**: Run your first behavior on Reachy Mini
* **[Python SDK](/reachymini_sdk_python-sdk)**: Learn to move, see, speak, and hear.
* **[AI Integrations](/reachymini_sdk_integration)**: Connect LLMs, build Apps, and publish to Hugging Face.
* **[Building & Publishing Apps](/reachymini_sdk_apps)**: Create, test, publish, and debug Reachy Mini apps.
* **[Core Concepts](/reachymini_sdk_core-concept)**: Architecture, coordinate systems, and safety limits.

## 📂 Code Examples

We provide a collection of ready-to-run scripts to help you understand how to use specific features of the robot.

[**👉 Browse the Examples Folder**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🤖 AI-Assisted Development

Using an AI coding agent (Claude Code, Codex, Copilot, etc.)? You can start building apps right away. Paste this prompt to your agent:

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md*

This [**AGENTS.md**](/reachymini_agents) guide gives AI agents everything they need: SDK patterns, best practices, example apps, and step-by-step skills.

## ❓ Troubleshooting

Encountering an issue? 👉 **[Check the Troubleshooting & FAQ Guide](/reachymini_troubleshooting)**

## 💬 Community
* [Discord](https://discord.gg/Y7FgMqHsub) - Get help and share projects.
* [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini) - Discover community apps.
* [GitHub Discussions](https://github.com/pollen-robotics/reachy_mini/discussions) - Feature requests and bugs.