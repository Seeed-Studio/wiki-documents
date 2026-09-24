---
description: Send AI detection results from reCamera Pro to an MQTT broker for integration with dashboards, automation platforms, or custom applications.
title: Send Detection Results over MQTT
keywords:
  - reCamera
  - reCamera Pro
  - MQTT
  - AI inference
  - detection output
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_mqtt
sku: 10003420
sidebar_position: 10
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_mqtt/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Send Detection Results over MQTT

reCamera Pro can output AI inference results to external systems via MQTT. This is useful for integrating with dashboards (e.g. Home Assistant, Node-RED), automation platforms, or custom applications that subscribe to detection events.

## Configure MQTT output

1. In the Web UI, go to **AI Inference** → **Inference Output Configuration**.
2. Select the output template, task type, and **MQTT** as the output method.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WaXFL9Pz9G.png" />

{/* TODO(verify): document MQTT broker configuration fields (broker address, port, topic, username/password, TLS), and confirm whether the Web UI exposes these or if they require SSH/API configuration */}

## Output format

The MQTT message payload typically includes:

| Field | Description |
|---|---|
| timestamp | Inference result timestamp |
| task_type | Current task type |
| class_id | Detected class ID |
| class_name | Detected class name |
| score | Detection confidence |
| bbox | Bounding box coordinates |
| detection_count | Number of objects detected in the current frame |

{/* TODO(verify): confirm exact MQTT payload JSON schema and topic naming convention on production firmware */}

## Related pages

- [Configure Detection](/recamera_pro_ai_inference/)
- [Send Detection Results over HTTP/UART](/recamera_pro_http_uart/)
- [Home Assistant Sound-Triggered Photo Alert](/recamera_pro_ha_sound_alert/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
