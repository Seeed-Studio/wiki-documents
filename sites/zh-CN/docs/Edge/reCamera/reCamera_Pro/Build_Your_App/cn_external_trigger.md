---
description: 使用 GPIO 引脚、串口命令或 HTTPS 请求，从外部设备触发 reCamera Pro 拍照或录像。
title: 从外部设备触发拍摄
keywords:
  - reCamera
  - reCamera Pro
  - GPIO
  - UART
  - 串口触发
  - HTTPS 触发
  - 外部触发
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_uart_usage
sku: 10003420
sidebar_position: 12
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_uart_usage/
---

# 从外部设备触发拍摄

reCamera Pro 具有两个串口：用于系统调试的 **DEBUG UART**，以及位于扩展口上的 **UART 接口**，用于 Web UI 触发和接收 AI 推理数据。结合 GPIO 和 HTTPS 触发，您可以将相机集成到外部控制器、传感器和自动化系统中。

![硬件底板接口示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/base_board_pin.png)
![扩展口原理图](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/EXT_GPIO.jpg)

## 连接 DEBUG UART

调试串口的波特率为 **1500000**，硬件接口为 **MX1.25**。

![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

1. 准备一个 USB 转串口转换器。
2. 将转换器与设备之间的 TX→RX、RX→TX 和 GND→GND 连接好。
3. 给设备上电，即可在转换器上看到调试信息。

![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

{/* TODO(verify): confirm whether the debug UART baud rate is configurable or fixed at 1500000 */}

## 使用扩展 UART 进行触发

### 连接扩展口

1. 准备一根 **10 针 MX1.25 线缆**，插入扩展接口。
2. 按上方扩展口示意图，将 TX→RX、RX→TX 和 GND→GND 连接到您的 USB 转 TTL 工具。

### 设置波特率

在 **Device Info** → **Connection Settings** 中设置串口波特率。

![UART connection config](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_CONNECT_CONFIG.png)

### 串口触发

1. 在 **Recording Settings** → **Recording Configuration** → **Serial Port Trigger** 中，点击 **Configure** 设置触发命令。

![UART trigger config](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_TRIGGER_CONFIG.png)

2. 打开串口工具，选择正确的串口并发送触发命令。

![UART send command](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_SEND_COMMAND.png)

3. 在 **Recording Settings** → **File Preview** 中查看拍摄的照片或视频。

![UART file preview](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_FILE_SHOW.png)

:::note
触发命令只能以 **ASCII 格式** 发送。不支持 HEX 发送和中文字符。
:::

### 接收 AI 推理结果

1. 在 **AI Inference** → **Output Method** 中选择 **Serial Port**。

![UART AI output config](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. 打开串口工具查看推理结果。

![UART AI output](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

{/* TODO(verify): document the exact serial data format for inference results and whether it matches the real-time monitoring log fields */}

## GPIO 触发

GPIO 触发在 **Recording Settings** → **Recording Configuration** → **GPIO Trigger** 中进行配置：

| 配置项 | 描述 |
|---|---|
| GPIO 引脚名称 | 选择 GPIO 引脚 |
| 引脚状态 | 默认引脚状态，例如悬空 |
| 触发信号 | 触发电平，例如高电平 |
| 消抖时长 | 消抖时间（毫秒） |

适用于与外部传感器、按键、门磁、PIR 传感器或继电器集成。

{/* TODO(verify): document which GPIO pins are available on the expansion port and their voltage levels */}

## HTTPS 触发

HTTPS 触发在 **Recording Settings** → **Recording Configuration** → **HTTPS Trigger** 中进行配置。页面会显示可供外部系统调用的 HTTPS 触发地址。

适用于与第三方平台、报警系统或自动化脚本集成。

{/* TODO(verify): document the exact HTTPS trigger URL format, HTTP method, and request body schema */}

## 相关页面

- [配置事件录像](/cn/recamera_pro_record_settings/)
- [通过 HTTP/UART 发送检测结果](/cn/recamera_pro_http_uart/)
- [GPIO 引脚指南](/cn/recamera_pro_gpio_guide/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持方式，以确保您在使用产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
