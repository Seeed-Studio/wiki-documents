---
description: 比较 reCamera Pro 的四种开发路径——Web API、原生 SDK 开发、AI 编码代理，以及实验性的 Debian 13 镜像——并为你的项目选择合适的方案。
title: 选择开发路径
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Web API
  - RKNN
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_dev_path
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_dev_path/
---

# 选择开发路径

reCamera Pro（Rockchip RV1126B，aarch64 Linux）支持多种方式构建你的应用，从零代码配置到完整原生开发。本页将帮助你选择合适的起点。

## 路径对比

| 路径 | 最适合的场景 | 所需技能 | 从这里开始 |
| --- | --- | --- | --- |
| WebUI 零代码应用 | 在浏览器中配置检测、录制和告警工作流 | 无 | [构建你的专属应用](/cn/recamera_pro_ai_inference/) |
| Web API | 将现有设备集成到你自己的后端或脚本中 | HTTP/JSON 基础 | [API 简介](/cn/recamera_pro_api_introduction/) |
| 原生 SDK（C/C++ + RKNN） | 具有完全控制权的自定义端侧 AI 应用 | C/C++、交叉编译 | [SDK 与最小应用](/cn/recamera_pro_sdk_setup/) |
| AI 编码代理 | 通过与 Codex、Claude Code、Copilot、Cursor 或 Gemini CLI 的自然语言对话来构建原生应用 | 提示工程；代理负责工具链细节 | [使用 AI 编码代理开发](/cn/recamera_pro_development_cpp_skill/) |
| 实验性 Debian 13 | 需要在设备上使用 `apt`、CMake 或 Docker 的用户 | Linux 运维 | [实验性 Debian 13 镜像](/cn/recamera_pro_debian/) |

## WebUI 零代码应用

出厂的 Buildroot 固件自带 Web 界面，用于 AI 推理、事件录制和告警输出（MQTT、HTTP、串口）。如果你的项目可以表述为“检测这个，然后录制或通知”，请优先在 WebUI 中进行配置——完全不需要写代码。参见本 Wiki 中的“构建你的专属应用”章节。

## Web API

设备提供基于 HTTP 的 Web API，用于设备信息、系统配置、网络管理、音视频控制、AI 推理、文件管理和固件更新。

| 项目 | 说明 |
| --- | --- |
| 协议 | HTTP 或 HTTPS |
| 基础路径 | `/cgi-bin/entry.cgi`（大多数端点）；串口和文件端点使用 `/api/v1/...` |
| 内容类型 | `application/json` |
| 认证方式 | 通过 Cookie 传递 JWT Token |

当需要由外部系统（后端服务、家庭自动化中枢、脚本）控制或读取设备时，请选择此路径。从 [API 简介](/cn/recamera_pro_api_introduction/) 和 [快速开始](/cn/recamera_pro_api_quick_start/) 入手。

## 原生 SDK（C/C++ + RKNN）

对于自定义端侧 AI 应用，目标约定如下：

| 项目 | 支持的配置 |
| --- | --- |
| SoC | Rockchip RV1126B |
| 目标架构 | aarch64 Linux |
| 模型格式 | ONNX 输入，RKNN 输出 |
| RKNN Toolkit | RKNN-Toolkit2 2.3.2 |
| RKNN Runtime | 2.3.2 |
| 摄像头框架 | GStreamer |
| 原生应用语言 | C/C++ |

你需要在 Linux（或 WSL）主机上，针对与 reCamera Pro 兼容的 sysroot 进行交叉编译，然后将可执行文件和 RKNN 模型部署到设备上。环境搭建和完整示例请参见 [SDK 与最小应用](/cn/recamera_pro_sdk_setup/)，媒体管线细节请参见 [摄像头、音频与推理开发](/cn/recamera_pro_media_dev/)。

:::note
该平台特定于**搭载 RV1126B SoC 且运行 aarch64 Linux 的 reCamera Pro**。它与 SG2002/riscv64 reCamera 平台不兼容。
:::

## AI 编码代理

[reCamera Pro Development Skill](https://github.com/Seeed-Projects/recamera-pro-development-skill) 将同样的原生开发知识——模型转换、交叉编译、摄像头、音频、GStreamer 和 RTSP 指南，以及 C++ 应用模板——打包给 AI 编码代理使用。如果你更倾向于用自然语言描述应用，并让代理驱动工具链，请从 [使用 AI 编码代理开发](/cn/recamera_pro_development_cpp_skill/) 开始。

## 实验性 Debian 13 镜像

社区提供的 Debian 13 镜像会替换出厂的 Buildroot 系统，使你可以在设备上直接使用 `apt`、CMake 和 Docker。摄像头、麦克风、扬声器和 Wi-Fi 可通过 Seeed 的出厂驱动工作；不支持蓝牙，且原有的 USB-C 虚拟网卡不可用。

:::warning
Debian 13 固件为实验性固件。Seeed 目前不对其进行维护；它仅作为额外的开发选项提供。刷写和恢复的详细信息请参见 [实验性 Debian 13 镜像](/cn/recamera_pro_debian/)。
:::

{/* TODO(verify): confirm which stock-firmware features (WebUI, vendor AI services, OTA update) are lost when the Debian 13 image is flashed, and document the official path back to factory firmware */}

## 决策指南

- **“我想基于预训练或自定义模型实现告警/录制”** → WebUI，若需要自定义检测器，请参见 [使用你自己的模型](/cn/recamera_pro_model_path/)。
- **“我想让我的后端控制设备”** → Web API。
- **“我想要一个完全自定义的端侧应用”** → 原生 SDK，可选由 AI 编码代理驱动。
- **“我想要一台带摄像头的通用 Linux 计算机”** → 实验性 Debian 13。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
