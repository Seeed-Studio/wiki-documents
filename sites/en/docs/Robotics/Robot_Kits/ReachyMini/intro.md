---
description: Reachy Mini is an open-source, expressive robot made for hackers and AI builders. Features app store, Python SDK, and multiple platform options.
title: Reachy Mini
slug: /reachymini_intro
keywords:
  - reachy mini
  - robotics
  - open source
  - robot kit
  - expressive robot
  - python sdk
  - ai robot
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_intro/
---

# Reachy Mini 🤖

[![Discord](https://img.shields.io/badge/Discord-Join_the_Community-7289DA?logo=discord&logoColor=white)](https://discord.gg/Y7FgMqHsub)

**Reachy Mini is an open-source, expressive robot made for hackers and AI builders.**

🛒 [**Buy Reachy Mini**](https://www.hf.co/reachy-mini/)

[![Reachy Mini Hello](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachy_mini_hello.gif)](https://www.pollen-robotics.com/reachy-mini/)

## ⚡️ Build and start your own robot

**Choose your platform to access the specific guide:**

| **🤖 Reachy Mini (Wireless)** | **🔌 Reachy Mini Lite** | **💻 Simulation** |
| :---: | :---: | :---: |
| The full autonomous experience.<br/>Raspberry Pi CM4 + Battery + WiFi. | The developer version.<br/>USB connection to your computer. | No hardware required.<br/>Prototype in MuJoCo. |
| 👉 [**Go to Wireless Guide**](/reachymini_platforms_reachy_mini_get_started) | 👉 [**Go to Lite Guide**](/reachymini_platforms_reachy_mini_lite_get_started) | 👉 [**Go to Simulation**](/reachymini_platforms_simulation_get_started) |

:::tip Pro tip
Install [uv](https://docs.astral.sh/uv/getting-started/installation/) for 10-100x faster app installations (auto-detected, falls back to `pip`).
:::

## 📱 Apps & Ecosystem

Reachy Mini comes with an app store powered by Hugging Face Spaces. You can install these apps directly from Reachy Mini Control with one click!

* **🗣️ [Conversation App](https://huggingface.co/spaces/pollen-robotics/reachy_mini_conversation_app):** Talk naturally with Reachy Mini (powered by LLMs).
* **📻 [Radio](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio):** Listen to the radio with Reachy Mini!
* **👋 [Hand Tracker](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2):** The robot follows your hand movements in real-time.

👉 [**Browse all apps on Hugging Face**](https://hf.co/reachy-mini/#/apps)

## 🚀 Getting Started with Reachy Mini SDK

<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: '1px solid #ddd', borderRadius: '8px'}} />
    <p><i>▶️ 点击在 YouTube 上观看：Reachy Mini SDK 运行指南</i></p>
  </a>
</div>

### Quick Look
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

### User guides
* **[Installation](/reachymini_sdk_installation)**: 5 minutes to set up your computer
* **[Quickstart Guide](/reachymini_sdk_quickstart)**: Run your first behavior on Reachy Mini
* **[Python SDK](/reachymini_sdk_python-sdk)**: Learn to move, see, speak, and hear.
* **[AI Integrations](/reachymini_sdk_integration)**: Connect LLMs, build Apps, and publish to Hugging Face.
* **[Building & Publishing Apps](/reachymini_sdk_apps)**: Create, test, publish, and debug Reachy Mini apps.
* **[Core Concepts](/reachymini_sdk_core-concept)**: Architecture, coordinate systems, and safety limits.
* **[Tutorials](/reachymini_sdk-tutorials)**: Hands-on Jupyter notebooks to learn the SDK step by step.
* 📂 [**Browse the Examples Folder**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🛠 Hardware Overview

Reachy Mini robots are sold as kits and generally take **2 to 3 hours** to assemble. Detailed step-by-step guides are available in the platform-specific folders linked above.

* **Reachy Mini (Wireless):** Runs onboard (RPi CM4), autonomous, includes IMU. [See specs](/reachymini_platforms_reachy_mini_hardware).
* **Reachy Mini Lite:** Runs on your PC, powered via wall outlet. [See specs](/reachymini_platforms_reachy_mini_lite_hardware).

## ❓ Troubleshooting

Encountering an issue? 👉 **[Check the Troubleshooting & FAQ Guide](/reachymini_troubleshooting)**

## 🤝 Community & Contributing

* **Join the Community:** Join [Discord](https://discord.gg/2bAhWfXme9) to share your moments with Reachy, build apps together, and get help.
* **Found a bug?** Open an issue on [this repository](https://github.com/pollen-robotics/reachy_mini/issues).
* **Next Steps:** Check out our [roadmap](/reachymini_troubleshooting_roadmap) and share your feedback!

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](https://github.com/pollen-robotics/reachy_mini/tree/main/LICENSE) file for details.
Hardware design files are licensed under Creative Commons BY-SA-NC.