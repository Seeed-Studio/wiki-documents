---
description: reCamera Pro 部署前检查清单——在设备投入现场前，验证电源、网络、时间、存储、AI 模型以及重启行为。
title: 部署前检查清单
keywords:
  - reCamera
  - reCamera Pro
  - 部署
  - 检查清单
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_deploy_checklist
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_deploy_checklist/
---

# 部署前检查清单

在**将 reCamera Pro 安装到最终位置之前，在工作台上运行这份检查清单**。每一项都有明确的通过标准——如果某一项未通过，请先根据链接的指南修复，或收集日志并联系技术支持。通过全部六项检查的设备可以无人值守部署。

| # | 检查项 | 通过标准 |
| --- | --- | --- |
| 1 | 电源 | 设备在最终电源上电后，指示灯为常亮绿色 |
| 2 | 网络 | 可从监控电脑通过局域网地址访问 Web UI |
| 3 | 时间 | 设备时钟与实际时间一致，并且在重启后仍然正确 |
| 4 | 存储 | 录像存储容量满足所需保留时间；已设置磁盘满盘策略 |
| 5 | AI 模型 | 正确的模型正在运行，并能检测到真实环境中的目标 |
| 6 | 重启 | 设备可自动恢复运行，设置和检测状态保持不变 |

{/* TODO(verify): validate each check below on a real device in the field-installation orientation, and add measured pass/fail thresholds (e.g. minimum supply voltage, Wi-Fi signal level, retention days per GB) once tested. */}

## 1. 电源

- 使用出厂 12 V 直流电源（12 V，至少 1 A；出厂电源为 12 V，3 A），或在**最终**布线上的同等稳定电源——不要使用工作台上的 USB 线供电。
- 如果通过 Type-C 供电，适配器必须支持 PD 协议；电源不稳定会表现为反复的 Wi-Fi 错误和预览失败。
- **通过**：启动后绿灯常亮，并且设备能在完整的预览 + 推理会话中保持运行。参见 [快速上手](/cn/recamera_pro_getting_started/) 的硬件部分。

## 2. 网络

- 将设备连接到生产 Wi-Fi/网络，在路由器上为其 MAC 保留固定地址（或记录分配的地址），并确认可在将要用于监控的电脑上打开 Web UI。
- 有意识地设置访问控制：仅在需要时启用 SSH，检查 HTTP 设置，并修改默认密码。
- **通过**：在拔掉 USB 线后，仍可通过局域网地址访问 Web UI。参见 [通过 Wi-Fi 访问设备](/cn/recamera_pro_wifi_access/) 和 [网络、时间与访问控制](/cn/recamera_pro_device_info/)。

## 3. 时间

- 录像计划和文件时间戳依赖于正确的时钟。在 **Device Info → Time Settings** 中设置系统时间（以及时间源）。
- **通过**：显示时间与实际时间一致，且录制文件的时间戳落在正确的日期目录中——包括重启之后。

## 4. 存储

- 插入/确认你实际将用于录制的存储介质，然后在 **Recording Settings → Storage Management** 中：检查磁盘使用情况，设置可用存储大小/配额，并决定满盘策略（覆盖最旧文件或停止）。
- **通过**：已设置配额和策略，并且测试录像会出现在 **File Preview** 中。参见 [查找录像和存储](/cn/recamera_pro_storage/)。

## 5. AI 模型

- 加载你将在生产环境中运行的模型（预置或自定义），配置其检测类别和阈值，启用推理，并验证它能在**实际安装位置**检测到**你的真实目标**——包括光照、角度和距离。
- **通过**：实时推理监控中，对你的目标显示正确的 `class_name`/`score`，且帧率在可接受范围内。参见 [AI 推理配置](/cn/recamera_pro_ai_inference/)；自定义模型参见 [选择模型部署路径](/cn/recamera_pro_model_path/)。

## 6. 重启

- 作为最终测试，从 **Device Info → System Settings** 重启设备（或断电重上电）。
- **通过**：设备可自行启动到绿灯常亮状态，保持其时间、网络、密码、录像规则和正在运行的模型——并在无需任何人工操作的情况下重新开始检测。

## 在你关上机箱之前

- [备份配置](/cn/recamera_pro_backup_restore/)，并妥善保存导出的文件——这是你最快的恢复路径。
- 记录 **Device Info → System Settings** 中显示的固件版本到资产清单中；随手保留 [固件更新与恢复](/cn/recamera_pro_firmware_update/) 指南。
- 在你自己的运维文档中记录设备的局域网地址、管理员账号策略以及安装位置。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将通过多种支持方式，尽力确保你在使用产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
