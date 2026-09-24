---
description: Send AI detection results from reCamera Pro to external systems via HTTP or UART serial port.
title: Send Detection Results over HTTP or UART
keywords:
  - reCamera
  - reCamera Pro
  - HTTP
  - UART
  - AI inference
  - detection output
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_http_uart
sku: 10003420
sidebar_position: 11
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_http_uart/
---

# Send Detection Results over HTTP or UART

In addition to [MQTT](/recamera_pro_mqtt/), reCamera Pro supports outputting AI inference results to external systems via HTTP and UART.

## HTTP output

In the Web UI, go to **AI Inference** → **Inference Output Configuration** and select **HTTP** as the output method.

{/* TODO(verify): document HTTP output configuration fields (target URL, method, headers, payload format), and confirm whether reCamera Pro sends a POST request with the inference JSON */}

The HTTP output is suitable for integration with REST APIs, webhooks, custom backend services, or third-party platforms that accept HTTP requests.

## UART output

UART output sends inference results over the expansion interface serial port. This is useful for integration with external controllers, MCUs, or industrial equipment that communicate via serial protocol.

### Configure UART output

1. In **AI Inference** → **Output Method**, select **Serial Port**.

![UART AI output configuration](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. Open your serial port tool to receive the inference results.

![UART AI output results](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

### Output format

The UART output contains the same fields as the real-time inference monitoring log (timestamp, task_type, class_id, class_name, score, bbox, detection_count).

{/* TODO(verify): confirm UART output baud rate (set in Device Info → Connection Settings), data format (JSON lines? raw text?), and whether output is sent only when detection_count > 0 or on every frame */}

:::note
The trigger command for serial port triggering (see [Trigger Capture from External Devices](/recamera_pro_uart_usage/)) can only be sent in ASCII format. HEX sending and Chinese characters are not supported.
:::

## Related pages

- [Configure Detection](/recamera_pro_ai_inference/)
- [Send Detection Results over MQTT](/recamera_pro_mqtt/)
- [Trigger Capture from External Devices](/recamera_pro_uart_usage/)

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
