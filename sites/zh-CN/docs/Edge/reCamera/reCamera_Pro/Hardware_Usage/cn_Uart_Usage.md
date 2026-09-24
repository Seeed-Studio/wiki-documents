---
description: 本文将简要介绍如何使用设备上的串口进行调试，以及触发拍照/视频拍摄/录制。
title: UART 使用
keywords:
  - reCamera
  - reCamera Pro
  - UART
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_uart_usage_legacy
draft: true
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-14'
url: https://wiki.seeedstudio.com/cn/recamera_pro_uart_usage_legacy/
---
<!-- LEGACY PAGE (reCamera Pro wiki restructure, phase 2): this page has been superseded by Build_Your_App/external_trigger.md (https://wiki.seeedstudio.com/cn/recamera_pro_uart_usage/), which now serves the original slug /recamera_pro_uart_usage. This file is kept for history as a draft (slug /recamera_pro_uart_usage_legacy) and is excluded from production builds. Do not link here. -->

## 内容迁移索引（历史页面）

| 原章节 | 新位置 |
| --- | --- |
| 连接 DEBUG UART | [终端、SSH 和调试 UART](https://wiki.seeedstudio.com/cn/recamera_pro_terminal/) |
| 串口触发 | [通过 UART 的外部触发](https://wiki.seeedstudio.com/cn/recamera_pro_uart_usage/) (此 slug) |
| 接收 AI 推理结果 | [通过 HTTP/UART 发送检测结果](https://wiki.seeedstudio.com/cn/recamera_pro_http_uart/) |

# 在 reCamera Pro 上使用 UART 接口

设备上有两个串口：一个是专用于调试的 DEBUG UART，另一个是用于 Web UI 触发的 UART 接口。
![硬件底板接口示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/base_board_pin.png)
![扩展口原理图](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/EXT_GPIO.jpg)

## 连接 DEBUG UART

调试串口的波特率为 1500000，硬件接口规格为 MX1.25，引脚顺序如下图所示。
![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

1. 首先准备一个 USB 转串口工具，将工具的 TX 接到设备的 RX 引脚，将工具的 RX 接到设备的 TX 引脚，同时记得连接 GND。
2. 给设备上电后，即可在转换器上看到设备的调试信息。
![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

## 使用扩展接口上的 UART

该 UART 接口作为 Web UI 触发使用，可以用于接收 AI 推理数据，也可以用于发送命令以触发事件。

### 串口触发

1. 首先准备一根 10 针 MX1.25 线缆，并插入扩展接口。

2. 然后根据上方扩展口示意图中的引脚顺序，将其连接到你的 USB 转 TTL 工具。将转换器的 TX 接到设备的 RX 引脚，将转换器的 RX 接到设备的 TX 引脚，同时记得连接 GND。

3. 在 ***Device Info*** -> ***Connection Settings*** 中，可以设置串口波特率。
![DEBUG_UART_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_CONNECT_CONFIG.png)

4. 在 ***Recording Settings*** -> ***Recording Configuration*** -> ***Serial Port Trigger*** 中，点击 Configure 来设置触发命令。
![DEBUG_UART_COMMAND_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_TRIGGER_CONFIG.png)

5. 打开串口工具，选择对应的串口设备，发送触发命令。
![DEBUG_UART_SEND_COMMAND](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_SEND_COMMAND.png)

6. 在 ***Recording Settings*** -> ***File Preview*** 中，可以查看刚刚通过串口触发拍摄的照片或视频。
![DEBUG_UART_FILE_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_FILE_SHOW.png)

:::note
触发命令只能以 ASCII 格式发送，不支持 HEX 发送，也不支持中文字符。
:::

### 接收 AI 推理结果

1. 首先在 ***AI Inference*** -> ***Output Method*** 中选择 ***Serial Port***。
![UART_AI_OUTPUT_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. 打开串口工具，即可看到输出结果。
![UART_AI_OUTPUT](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
