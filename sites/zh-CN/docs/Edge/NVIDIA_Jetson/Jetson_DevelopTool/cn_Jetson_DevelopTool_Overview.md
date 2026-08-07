---
description: Seeed Jetson DevelopTool 是一款面向 Seeed Studio Jetson 产品的一体化 AI 开发工作台，涵盖固件烧录、设备管理、应用部署、远程开发等功能。
title: Seeed Jetson DevelopTool 概览
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - AI workbench
  - Jetson flashing
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/video-cover-recomputer-guide-en.png
slug: /jetson_developtool_overview
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/cn/jetson_developtool_overview/
---

**Seeed Jetson DevelopTool** 是一款专为 Seeed Studio Jetson 产品设计的一体化 AI 开发工作台。它将最常见的 Jetson 开发流程——从首次固件烧录到 AI 应用部署——整合到一个桌面图形界面应用中。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/8_SjIEZI2lQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-overview.png" style={{width:800, height:'auto'}}/></div>

## 为什么选择 Seeed Jetson DevelopTool？

从零开始配置一台 Jetson 设备，传统方式需要下载 BSP 压缩包、运行命令行烧录脚本、手动配置 SSH、安装驱动并寻找 AI 框架。Seeed Jetson DevelopTool 用一个引导式的可视化界面替代了这一切，并且同时支持 Linux 和 Windows 主机。

## 功能模块

| 模块 | 描述 |
|--------|-------------|
| **Flash Center** | 一键下载、校验（SHA256）并为所有 Jetson 系列烧录固件 |
| **Device Management** | 快速诊断、外设检测、实时设备信息 |
| **App Market** | 浏览并安装 AI 应用——YOLOv8、Ollama、DeepSeek、Node-RED 等 |
| **Skills** | 内置 50+ 自动化技能，覆盖驱动、AI 部署和系统调优 |
| **Remote Dev** | SSH、VS Code Server、Jupyter Lab、VNC 远程桌面、AI agent 安装 |
| **PC Network Sharing** | 通过以太网将 PC 网络共享给 Jetson，并自动转发代理 |
| **Jetson Init** | 首次启动串口终端向导，用于用户名、网络和系统初始化配置 |
| **Community** | 快速访问 Wiki、论坛、Discord 和视频教程 |

## 系统要求

| 项目 | 要求 |
|------|-------------|
| Host OS | Ubuntu 20.04 / 22.04 / 24.04（推荐在 Linux 上进行烧录） |
| Python | 3.8+ |
| Dependencies | PyQt5, paramiko, requests |

:::tip
在**原生 Linux 主机**上进行固件烧录最为可靠。在 Windows 上，该工具可以引导使用 WSL2 + usbipd 的工作流程，但如果 USB 透传不稳定，建议使用原生 Ubuntu。
:::

## 快速开始

- [安装 →](/cn/jetson_developtool_installation)
- [连接你的设备 →](/cn/jetson_developtool_connect_device)
- [烧录固件 →](/cn/jetson_developtool_flash_firmware)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
