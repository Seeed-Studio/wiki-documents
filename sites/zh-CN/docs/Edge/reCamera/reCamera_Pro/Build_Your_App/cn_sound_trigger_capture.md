---
description: 在 reCamera Pro 上部署已训练的声音模型并配置声音事件触发器，以在检测到特定声音时自动拍照或录音。
title: 通过声音触发采集
keywords:
  - reCamera
  - reCamera Pro
  - sound trigger
  - acoustic lab
  - recording
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sound_trigger
sku: 10003420
sidebar_position: 9
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_sound_trigger/
---

# 通过声音触发采集

在训练好声音模型之后（参见 [Train a Sound Model](/cn/recamera_pro_acoustic_lab_usage/)），将其部署并配置声音事件触发器，以在检测到特定声音时自动拍照或录音。

## 部署模型

1. 在 Acoustic Lab 中，在界面底部找到 **Deploy** 选项。
2. 在 **MODELS** 列表中选择你训练好的模型并进行部署。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

## 配置声音事件触发

1. 返回 Web UI 主界面 → **Record Settings** → **Recording Configuration**。
2. 找到 **Sound Event Trigger** 选项并点击 **Configure**。
3. 选择你希望用于触发录制的声音类别。
4. 点击 **Confirm** 以应用配置。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

### 配置项

| 配置项 | 描述 |
|---|---|
| Sound Category Filter | 用于触发录制的声音类别 |
| Continuous Activity Window | 所需连续活动时长（毫秒） |
| Confidence Range | 声音识别的置信度阈值 |

{/* TODO(verify): confirm default confidence threshold and whether continuous activity window is required or optional */}

## 典型使用场景

- 异常声音检测（玻璃破碎、警报、机械故障）
- 语音指令触发（例如 "help"、"stop"）
- 设备状态声音识别
- 环境监测

## 相关页面

- [Train a Sound Model](/cn/recamera_pro_acoustic_lab_usage/)
- [Configure Event Recording](/cn/recamera_pro_record_settings/)
- [Find Recordings and Storage](/cn/recamera_pro_storage/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
