---
description: 将 reCamera Pro 的所有官方下载集中在一处——固件镜像、烧录工具、驱动、转换工具包和开发资源。
title: 下载与发行说明
keywords:
  - reCamera
  - reCamera Pro
  - download
  - firmware
  - Debian 13
  - release notes
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_downloads
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_downloads/
---

# 下载与发行说明

本页汇总了 reCamera Pro 文档中引用的所有下载和外部资源，并给出了使用它们的指南链接。

## 固件

| 项目 | 获取方式 | 指南 |
| --- | --- | --- |
| 原厂固件更新 | 通过 Web UI：**Device Info → System Settings** 会显示当前固件版本并提供更新；出厂重置和重启也可在此进行 | [网络、时间与访问](/cn/recamera_pro_device_info/)、[固件更新与恢复](/cn/recamera_pro_firmware_update/) |
| 实验性 Debian 13 镜像 | [recamera_pro_debian13_v1.0.0.tar.gz](https://github.com/yyling0101-a11y/reCamere_pro_debian_img/releases/download/v1.0.0/recamera_pro_debian13_v1.0.0.tar.gz) | [实验性 Debian 13 镜像](/cn/recamera_pro_debian/) |

<!-- TODO(verify): add the official stock firmware image download location (if publicly distributed) and the current firmware version/changelog; the Web UI update path is currently the only documented method. -->

## 烧录工具（Debian 13 / 恢复）

| 项目 | 下载 | 说明 |
| --- | --- | --- |
| Windows USB 驱动 | [DriverAssistant_v5.12.zip](https://drive.google.com/file/d/1_Efm8nJlQivU2F7BgVokVPfGUl12fI6E/view?usp=drive_link) | 在 Windows 上烧录前必须安装 |
| Windows 烧录工具 | [SocToolKit-window.zip](https://drive.google.com/file/d/1wFMHF_KSm…utDP-DPQ_NONp/view?usp=drive_link) | 与处于 Loader 模式的设备配合使用 |
| Linux 烧录工具 | [rkbin](https://github.com/rockchip-linux/rkbin.git) 和 [Linux_Upgrade_Tool](https://github.com/vicharak-in/Linux_Upgrade_Tool.git) | 在 Linux 烧录流程中通过克隆获取 |

完整烧录流程（Windows 与 Linux、进入 Loader 模式、分区顺序）：[实验性 Debian 13 镜像](/cn/recamera_pro_debian/)。无法再启动的设备恢复方法：[固件更新与恢复](/cn/recamera_pro_firmware_update/)。

## 模型转换与 AI 工具

| 项目 | 下载 | 指南 |
| --- | --- | --- |
| RKNN-Toolkit2 2.3.2（主机侧转换，x86_64） | [airockchip/rknn-toolkit2 releases](https://github.com/airockchip/rknn-toolkit2) — 在 `packages/x86_64` 下选择与你的 CPython 版本匹配的 wheel | [转换与量化模型](/cn/recamera_pro_rknn_model_conversion/) |
| SenseCraft（基于浏览器的 ONNX→RKNN） | 从 Web UI 访问：**AI Inference → View SenseCraft Models** | [SenseCraft ONNX-to-RKNN](/cn/recamera_pro_sensecraft/) |
| model-inspect（ONNX 合约检查） | `pip install model-inspect-tool` | [转换与量化模型](/cn/recamera_pro_rknn_model_conversion/) |

版本对齐规则：Toolkit 版本必须与 reCamera Pro 固件中随附的 RKNN Runtime 版本一致（当前为 2.3.2）。

## 开发资源

| 项目 | 下载 | 指南 |
| --- | --- | --- |
| reCamera Pro Development Skill（面向 AI 编码代理） | [Seeed-Projects/recamera-pro-development-skill](https://github.com/Seeed-Projects/recamera-pro-development-skill) | [使用 AI 编码代理进行开发](/cn/recamera_pro_development_cpp_skill/) |
| Ultralytics（直接导出 YOLO→RKNN） | 在 Toolkit 环境中执行 `pip install ultralytics` | [转换与量化模型](/cn/recamera_pro_rknn_model_conversion/) |
| 产品页面 | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html) | — |

在 Web UI、原生 SDK 与完整 Debian 开发之间进行选择：[选择你的开发路径](/cn/recamera_pro_dev_path/)。

## 发行说明

| 版本 | 日期 | 要点 |
| --- | --- | --- |
| Debian 13 镜像 v1.0.0 | — | reCamera Pro 的首个公开实验性 Debian 13 镜像 |

<!-- TODO(verify): obtain the official firmware release history (version, date, changes) from the product team and populate this table; also record the Debian v1.0.0 release date. -->

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
