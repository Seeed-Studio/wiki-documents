---
description: 通过 HTTP 或 UART 串口将 reCamera Pro 的 AI 检测结果发送到外部系统。
title: 通过 HTTP 或 UART 发送检测结果
keywords:
  - reCamera
  - reCamera Pro
  - HTTP
  - UART
  - AI 推理
  - 检测输出
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_http_uart
sku: 10003420
sidebar_position: 11
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_http_uart/
---

# 通过 HTTP 或 UART 发送检测结果

除了 [MQTT](/cn/recamera_pro_mqtt/) 之外，reCamera Pro 还支持通过 HTTP 和 UART 将 AI 推理结果输出到外部系统。

## HTTP 输出

在 Web UI 中，进入 **AI Inference** → **Inference Output Configuration**，并选择 **HTTP** 作为输出方式。

{/* TODO(verify): document HTTP output configuration fields (target URL, method, headers, payload format), and confirm whether reCamera Pro sends a POST request with the inference JSON */}

HTTP 输出适用于与 REST API、webhook、自定义后端服务或支持 HTTP 请求的第三方平台进行集成。

## UART 输出

UART 输出通过扩展接口串口发送推理结果。这对于与通过串行协议通信的外部控制器、MCU 或工业设备集成非常有用。

### 配置 UART 输出

1. 在 **AI Inference** → **Output Method** 中选择 **Serial Port**。

![UART AI output configuration](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. 打开你的串口工具以接收推理结果。

![UART AI output results](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

### 输出格式

UART 输出包含与实时推理监控日志相同的字段（timestamp、task_type、class_id、class_name、score、bbox、detection_count）。

{/* TODO(verify): confirm UART output baud rate (set in Device Info → Connection Settings), data format (JSON lines? raw text?), and whether output is sent only when detection_count > 0 or on every frame */}

:::note
串口触发的触发命令（参见 [Trigger Capture from External Devices](/cn/recamera_pro_uart_usage/)）只能以 ASCII 格式发送。不支持 HEX 发送和中文字符。
:::

## 相关页面

- [配置检测](/cn/recamera_pro_ai_inference/)
- [通过 MQTT 发送检测结果](/cn/recamera_pro_mqtt/)
- [从外部设备触发拍摄](/cn/recamera_pro_uart_usage/)

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
