---
description: Build, play, and innovate with Reachy Mini using the Python SDK. Quick start guide with code examples and links to detailed documentation.
title: Reachy Mini SDK
keywords:
- Reachy Mini
- SDK
- Python
- Getting Started
- Installation
- Quickstart
- Examples
slug: /reachymini/sdk/readme
last_update:
  date: 02/11/2026
  author: Tienjui Wong
translation:
  skip: [zh-CN]
---

# Build, play, and innovate with Reachy Mini 🤖


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
* **[Installation](../installation)**: 5 minutes to set up your computer
* **[Quickstart Guide](../quickstart)**: Run your first behavior on Reachy Mini
* **[Python SDK](../python-sdk)**: Learn to move, see, speak, and hear.
* **[AI Integrations](../integration)**: Connect LLMs, build Apps, and publish to Hugging Face.
* **[Core Concepts](../core-concept)**: Architecture, coordinate systems, and safety limits.

## 📂 Code Examples

We provide a collection of ready-to-run scripts to help you understand how to use specific features of the robot.

[**👉 Browse the Examples Folder**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🤖 AI-Assisted Development

Using an AI coding assistant (Claude, GPT, Copilot, etc.)? This section is coming soon - stay tuned for AI-assisted development guides!

## ❓ Troubleshooting

Encountering an issue? 👉 **[Check the Troubleshooting & FAQ Guide](../troubleshooting)**

## 💬 Community
* [Discord](https://discord.gg/Y7FgMqHsub) - Get help and share projects.
* [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini) - Discover community apps.
* [GitHub Discussions](https://github.com/pollen-robotics/reachy_mini/discussions) - Feature requests and bugs.
