---
description: 您的第一个端到端 reCamera Pro 任务——配置一个由 AI 触发的录像规则，让检测到的目标自动开始录像，然后找到并回放该视频文件。
title: '第一个任务：检测并录像'
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - event recording
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_first_recording
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_first_recording/
---

# 第一个任务：检测并录像

在[快速上手](/cn/recamera_pro_getting_started/)中，您已经确认 AI 检测在实时预览中可以正常工作。本教程将把这种检测变成设备自主完成的动作：**当目标出现时，reCamera Pro 自动开始录像**——然后您在 Web UI 中回放这段视频。

整体流程：

1. [准备：选择模型和目标](#1-prepare-pick-a-model-and-a-target)
2. [设置录像格式](#2-set-the-recording-format)
3. [配置 AI 推理触发器](#3-configure-the-ai-inference-trigger)
4. [应用规则并触发一次录像](#4-apply-the-rule-and-trigger-a-recording)
5. [查找并回放录像](#5-find-and-play-back-the-recording)

{/* TODO(verify): run this tutorial end-to-end on a real device — record the exact model and target used, the configuration values (confidence range, category filter), the trigger action, and attach screenshots of the resulting recording and playback. */}

## 1. 准备：选择模型和目标

- 确保 AI 推理正在运行：**AI Inference → Inference Configuration → Inference Enable** 打开，已选择一个检测模型作为 **Running Model**，状态为 **Running**。如果您尚未完成这些步骤，请参考[快速上手的第 4 步](/cn/recamera_pro_getting_started/#4-确认-ai-检测正常工作)。
- 决定什么应当触发录像。最简单的第一个任务：当有**人**走入画面时开始录像。可用的类别来自当前运行模型的输出（例如 Person、Vehicle、Hardhat、Mask、Safety Vest、Machinery）。

检测参数本身（类别、置信度/IOU 阈值、推理频率）是在 [AI 推理配置页面](/cn/recamera_pro_ai_inference/)中配置的——本教程只会引用这些参数。

## 2. 设置录像格式

在左侧导航栏中打开 **Recording Settings**。在页面顶部，选择录像文件格式：

| 参数 | 说明 |
| --- | --- |
| Recording Format | 保存文件的格式：MP4（视频）、JPG（图像）或 RAW（原始图像数据） |

在本教程中，选择 **MP4**。注意：当选择 MP4 时，每段录像的固定时长为 **1 分钟**。

本页面上的所有录像选项——触发方式、计划任务、存储配额——都在[事件录像配置页面](/cn/recamera_pro_record_settings/)中有详细说明。

## 3. 配置 AI 推理触发器

在触发方式列表中，选择 **AI Inference Trigger** 并点击 **Configure**：

| 配置项 | 在本教程中如何设置 |
| --- | --- |
| Inference Task | 选择正在运行的 AI 推理任务 |
| Confidence Range | 保持默认范围，完成您的第一次录像 |
| Category Filter | 选择 **Person**（或您想检测的类别） |
| Trigger Area | 保持为空——未绘制区域时，整帧都会触发 |

{/* TODO(verify): capture the default confidence range shown in the UI and confirm whether the trigger area default is "entire frame" on current firmware. */}

您也可以使用 **Schedule Management** 限制规则生效的时间（例如仅在夜间）。对于第一次测试，保持计划覆盖当前时间即可。

## 4. 应用规则并触发一次录像

1. 点击 AI Inference Trigger 旁边的 **Apply**。页面顶部的状态会显示当前激活的触发方式，例如 *Current: AI Inference Trigger*。
2. 走入摄像头的视野（或将您选择的目标举到画面中）。
3. 系统检测到目标后会自动开始录像。使用 MP4 格式时，录像片段长度为 1 分钟。

## 5. 查找并回放录像

仍然在 **Recording Settings** 中：

1. 打开 **File Preview**——录制的文件会按日期分目录列出。
2. 打开今天的文件：Web UI 会在页面内直接播放，您无需下载即可回看事件。
3. 查看 **Storage Management** 以了解磁盘使用情况和文件保存位置。您可以设置存储配额并启用覆盖旧文件，以便始终保留最新的录像。

关于存储行为的详细说明（配额、磁盘已满策略、下载）：请参见[查找录像与存储](/cn/recamera_pro_storage/)。

{/* TODO(verify): confirm playback and download behavior of File Preview on current firmware and attach a screenshot of a recorded clip playing back. */}

## 结果

现在，您已经拥有一个独立运行的 AI 录像规则：无需电脑参与，设备可以自行检测并录像。典型的下一步操作包括：

- 使用 **Trigger Area** 将触发范围缩小到某个区域（入口、危险区域）。
- 在[事件录像配置页面](/cn/recamera_pro_record_settings/)中切换或组合触发源——计划任务、GPIO、串口、HTTPS、循环或声音事件。
- 通过 [MQTT](/cn/recamera_pro_mqtt/) 或 [HTTP/UART](/cn/recamera_pro_http_uart/) 将检测结果发送到您自己的系统。
- 在将设备永久安装到位之前，先执行[部署前检查清单](/cn/recamera_pro_deploy_checklist/)。

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
