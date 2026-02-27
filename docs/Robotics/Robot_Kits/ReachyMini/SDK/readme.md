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
  skip: [zh-CN]
---

# Build, play, and innovate with Reachy Mini 🤖

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/h2lyqR2eMyM"
  frameborder="0"
  allowfullscreen
/>

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

:::tip New to Reachy Mini?
Follow these guides in order:
:::

* **[Installation](installation)**: 5 minutes to set up your computer
* **[Quickstart Guide](quickstart)**: Run your first behavior on Reachy Mini
* **[Python SDK](python-sdk)**: Learn to move, see, speak, and hear.
* **[AI Integrations](integration)**: Connect LLMs, build Apps, and publish to Hugging Face.
* **[Core Concepts](core-concept)**: Architecture, coordinate systems, and safety limits.

## 📂 Code Examples

:::info Ready to run
We provide a collection of ready-to-run scripts to help you understand how to use specific features of the robot.
:::

[**👉 Browse the Examples Folder**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🤖 AI-Assisted Development

:::tip For AI coding agents
Using an AI coding agent (Claude Code, Codex, Copilot, etc.)? You can start building apps right away. Paste this prompt to your agent:
:::

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/develop/AGENTS.md*

This [**AGENTS.md**](../AGENTS.md) guide gives AI agents everything they need: SDK patterns, best practices, example apps, and step-by-step skills.

## ❓ Troubleshooting

Encountering an issue? 👉 **[Check the Troubleshooting & FAQ Guide](../troubleshooting)**

## 💬 Community

* [Discord](https://discord.gg/Y7FgMqHsub) - Get help and share projects.
* [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini) - Discover community apps.
* [GitHub Discussions](https://github.com/pollen-robotics/reachy_mini/discussions) - Feature requests and bugs.
