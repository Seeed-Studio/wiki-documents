---
description: Reachy Mini Lite设置指南，包括组装说明、USB连接，以及适用于Windows、macOS和Linux的桌面应用下载。
title: Reachy Mini Lite设置指南
slug: /reachymini_platforms_reachy_mini_lite_get_started
keywords:
  - lite
  - setup
  - assembly
  - usb
  - desktop app
  - connection
  - education
  - development
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_platforms_reachy_mini_lite_get_started/
---

# Reachy Mini Lite - 设置指南

**Reachy Mini Lite**是为教育和开发而设计的有线版本。它需要一台计算机来运行其智能。

## 1. 🔧 组装

Reachy Mini以套件形式提供。构建它是您旅程的第一步！

* **所需时间：** 2到3小时。
* **工具：** 一切都包含在盒子中。
* **说明：** 我们强烈建议随手册一起观看视频指南。

:::tip 专业提示
我们强烈建议将**在线指南**或**组装视频**与纸质手册一起打开（见下文）。在线版本包括每个步骤的短视频片段，这使组装更容易理解。
:::

| **📖 交互式数字指南** | **📺 完整组装视频** |
| :---: | :---: |
| [![组装指南](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/digital_assembly_guide_preview_mini_lite.jpg)](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_LITE_Assembly_Guide)<br/>[**打开分步指南**](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_LITE_Assembly_Guide)<br/>*（包括短视频循环）* | [![在YouTube上观看](https://img.youtube.com/vi/PC5Yx950nMY/maxresdefault.jpg)](https://www.youtube.com/watch?v=PC5Yx950nMY)<br/>[**在YouTube上观看**](https://www.youtube.com/watch?v=PC5Yx950nMY)<br/>*（每个步骤都有部分）* |

## 2. 💻 连接

1.  **电源开启：** 使用提供的电源将机器人插入壁挂式插座。
2.  **数据连接：** 使用USB电缆将机器人连接到您的计算机。

## 3. 📥 下载Reachy Mini Control

:::warning 桌面应用兼容性
**⚠️ Reachy Mini Control兼容性：**
- **ARM64系统（DGX、Jetson、Surface等）和不常见的Linux发行版：** 桌面应用可能无法在您的系统上运行。

**替代方案：** 如果桌面应用在您的设置上不起作用，您可以直接安装和使用[Python SDK](/reachymini_sdk_readme)——这是一种完全受支持且有效的控制机器人的方式！
:::

**Reachy Mini Control**桌面应用是您机器人的指挥中心。它包含可视化工具、应用启动器和系统设置——无需命令行。

<div align="center">
  <a href="https://hf.co/reachy-mini/#/download">
    <img src="https://huggingface.co/spaces/pollen-robotics/Reachy_Mini/resolve/main/public/assets/desktop-app-screenshot--white.png" width="600" alt="Reachy Mini Control应用" />
  </a>
</div>

**获取应用：**

* **👉 [从官方网站下载](https://hf.co/reachy-mini/#/download)**（适用于Windows、macOS、Linux）
* *替代：* [GitHub Releases](https://github.com/pollen-robotics/reachy-mini-desktop-app/releases)（适用于特定版本）

:::info 自动更新
安装后，只需打开应用。它会自动检查并安装应用和机器人内部软件的最新更新。
:::

## 4. 🕹️ 下一步：使用机器人

现在一切已连接并安装，您已准备好开始玩耍！

👉 **[进入使用指南](/reachymini_platforms_reachy_mini_lite_usage)**了解如何：
* 使用**桌面应用**功能。
* 安装和运行**社区应用**（对话、游戏等）。
* 使用**Python**对Reachy进行编程。

## ❓ 故障排除

遇到问题了吗？👉 **[查看故障排除和常见问题指南](/reachymini_troubleshooting)**