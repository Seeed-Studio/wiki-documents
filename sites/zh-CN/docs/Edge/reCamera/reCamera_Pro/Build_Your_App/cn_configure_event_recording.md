---
description: 使用 AI 检测、定时计划、GPIO、串口、HTTPS、循环或声音事件触发，在 reCamera Pro 上设置事件触发录像。
title: 配置事件录像
keywords:
  - reCamera
  - reCamera Pro
  - recording
  - event trigger
  - GPIO
  - AI trigger
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_record_settings
sku: 10003420
sidebar_position: 6
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_record_settings/
---

# 配置事件录像

reCamera Pro 支持规则触发录像。在 Web UI 中，点击左侧菜单中的 **Recording Settings**，然后点击 **Recording Configuration**。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_gejZVIuI5B.png" />

该页面包含四个模块：

- **Recording Configuration** — 触发规则、视频格式、录像计划
- **Storage Management** — 设备存储空间
- **File Preview** — 已录制的视频文件
- **Schedule Management** — 录像规则的生效时间段

## 录像格式

| 参数 | 说明 |
|---|---|
| Recording Format | MP4（视频）、JPG 图像数据或 RAW 原始图像数据 |

当选择 MP4 时，每段录像的固定时长为 1 分钟。

## 触发方式

在录像配置页面，每种触发方式都有 **Configure** 和 **Apply** 按钮。点击 **Configure** 设置参数，然后点击 **Apply** 以启用。顶部状态会显示当前生效的触发方式，例如 “Current: Sound Event Trigger”。

### AI 推理触发

当 AI 模型识别结果满足你的条件时自动触发录像。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_TmHQB024iW.png" />

| 配置项 | 说明 |
|---|---|
| Inference Task | 选择用于触发录像的 AI 推理任务 |
| Confidence Range | AI 识别结果的置信度阈值范围 |
| Category Filter | 触发录像的目标类别（例如 Person、Vehicle、Hardhat） |
| Trigger Area | 触发用的多边形屏幕区域；默认是整帧画面 |

{/* TODO(verify): confirm whether multiple trigger methods can be active simultaneously or are mutually exclusive */}

### 定时触发

按固定时间间隔触发录像。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_uzhd2b91Fx.png" />

| 配置项 | 说明 |
|---|---|
| Trigger Interval | 以秒为单位的时间间隔 |

:::note
**Scheduled Trigger** 按固定间隔触发录像。下面的 **Schedule Management** 控制的是允许任意触发生效的*时间段*。它们是相互独立的功能。
:::

### GPIO 触发

通过外部硬件信号触发录像。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_tLth7eTsfP.png" />

| 配置项 | 说明 |
|---|---|
| GPIO Pin Name | 选择 GPIO 引脚 |
| Pin State | 引脚默认状态，例如悬空 |
| Trigger Signal | 触发电平，例如高电平 |
| Debounce Duration | 去抖动时间，单位为毫秒 |

适合集成外部传感器、按键、门磁、PIR 传感器或继电器。

### 串口触发

通过串口命令触发录像。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_RS8p10rmUL.png" />

| 配置项 | 说明 |
|---|---|
| Serial Port Name | 要监听的串口，例如 ttyS4 |
| Trigger Command | 触发录像的串口命令 |

适合集成外部控制器、MCU 或工业设备。

### HTTPS 触发

通过网络请求触发录像。页面会显示可供外部系统调用的 HTTPS 触发地址。

适合集成第三方平台、报警系统或自动化脚本。

{/* TODO(verify): document the exact HTTPS trigger URL format, authentication method, and request body schema */}

### 循环触发

连续或周期性录像，用于全天候监控或持续数据采集。

### 声音事件触发

基于声音模型识别到的音频事件触发录像。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_7a3c7kZ2np.png" />

| 配置项 | 说明 |
|---|---|
| Sound Category Filter | 触发录像的声音类别 |
| Continuous Activity Window | 要求的连续活动时长（毫秒） |
| Confidence Range | 声音识别的置信度阈值 |

要训练自定义声音模型，请参阅 [Train a Sound Model](/cn/recamera_pro_acoustic_lab_usage/)。

## 时间表管理

使用每周时间表（星期 × 小时网格）设置录像规则的生效时间段。点击或拖动单元格以选择时间段。

| 快捷方式 | 说明 |
|---|---|
| Weekdays (9 AM – 6 PM) | 白天工作时间 |
| Night (6 PM – 6 AM) | 夜间录像 |
| All Day (24 Hours) | 全天录像 |
| Clear | 清除已选择的时间段 |

## 相关页面

- [查找录像与存储](/cn/recamera_pro_storage/)
- [Train a Sound Model](/cn/recamera_pro_acoustic_lab_usage/)
- [通过声音触发抓拍](/cn/recamera_pro_sound_trigger/)
- [从外部设备触发抓拍](/cn/recamera_pro_uart_usage/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
