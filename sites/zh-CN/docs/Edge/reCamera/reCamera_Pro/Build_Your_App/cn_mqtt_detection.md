---
description: 将 reCamera Pro 的 AI 检测结果发送到 MQTT 代理，以便集成到看板、自动化平台或自定义应用中。
title: 通过 MQTT 发送检测结果
keywords:
  - reCamera
  - reCamera Pro
  - MQTT
  - AI 推理
  - 检测输出
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_mqtt
sku: 10003420
sidebar_position: 10
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_mqtt/
---

# 通过 MQTT 发送检测结果

reCamera Pro 可以通过 MQTT 将 AI 推理结果输出到外部系统。这对于与看板（例如 Home Assistant、Node-RED）、自动化平台或订阅检测事件的自定义应用进行集成非常有用。

## 配置 MQTT 输出

1. 在 Web UI 中，进入 **AI Inference** → **Inference Output Configuration**。
2. 选择输出模板、任务类型，并将 **MQTT** 设为输出方式。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WaXFL9Pz9G.png" />

{/* TODO(verify): document MQTT broker configuration fields (broker address, port, topic, username/password, TLS), and confirm whether the Web UI exposes these or if they require SSH/API configuration */}

## 输出格式

MQTT 消息负载通常包括：

| 字段 | 描述 |
|---|---|
| timestamp | 推理结果时间戳 |
| task_type | 当前任务类型 |
| class_id | 检测到的类别 ID |
| class_name | 检测到的类别名称 |
| score | 检测置信度 |
| bbox | 边界框坐标 |
| detection_count | 当前帧中检测到的目标数量 |

{/* TODO(verify): confirm exact MQTT payload JSON schema and topic naming convention on production firmware */}

## 相关页面

- [配置检测](/cn/recamera_pro_ai_inference/)
- [通过 HTTP/UART 发送检测结果](/cn/recamera_pro_http_uart/)
- [Home Assistant 声音触发拍照告警](/cn/recamera_pro_ha_sound_alert/)

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
