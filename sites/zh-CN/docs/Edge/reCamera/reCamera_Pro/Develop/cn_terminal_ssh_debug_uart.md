---
description: 通过 WebUI 终端、SSH 或 DEBUG UART 串口控制台访问 reCamera Pro 命令行，并了解各自适用的场景。
title: 终端、SSH 和 Debug UART
keywords:
  - reCamera
  - reCamera Pro
  - terminal
  - SSH
  - UART
  - debugging
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_terminal
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_terminal/
---

# 终端、SSH 和 Debug UART

reCamera Pro 提供三种方式访问命令行，每种方式适用于不同场景：

| 方式 | 是否需要网络 | 适用场景 |
| --- | --- | --- |
| WebUI 终端控制台 | 是 | 通过浏览器进行快速检查，无需额外工具 |
| SSH | 是 | 脚本编写、文件传输、长时间开发会话 |
| DEBUG UART 串口控制台 | 否 | 设备无法启动、网络配置错误，或需要查看启动日志时 |

## WebUI 终端控制台

终端控制台允许你直接从 Web UI 登录到 reCamera Pro 系统终端，而无需额外的 SSH 工具。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2dvKqObUbo.png" />

使用以下默认账号登录：

```bash
Username: root
Password: recamera
```

同一 Web UI 页面还提供系统日志视图，用于实时日志查看、过滤和下载——参见 [收集日志](/cn/recamera_pro_collect_logs/)。

## SSH

当设备可以通过网络访问时，SSH 是开发时最方便的访问方式：它支持文件传输（`scp`）、端口转发以及长时间会话。在同一网络中的电脑上（USB 虚拟以太网默认地址为 `192.168.42.1`）：

```bash
ssh root@192.168.42.1
```

{/* TODO(verify): confirm the SSH default credentials on stock Buildroot firmware (whether root login uses the same password as the WebUI terminal console) and whether SSH is enabled out of the box */}

## DEBUG UART 串口控制台

DEBUG UART 专用于调试。它无需任何网络配置即可工作，并显示启动时的输出，因此当设备无法启动或 IP 地址未知时，它是恢复路径。

调试串口的波特率为 **1500000**，硬件接口规格为 MX1.25。引脚顺序如下图所示。

![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

### 连接 DEBUG UART

1. 准备一个 USB 转串口转换器。将转换器的 TX 连接到设备的 RX 引脚，将转换器的 RX 连接到设备的 TX 引脚，并记得连接 GND。
2. 给设备上电，你就可以在转换器上看到设备的调试信息。

![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

:::note
将串口工具的波特率设置为 1500000。波特率不匹配会产生乱码输出。
:::

{/* TODO(verify): confirm the DEBUG UART console login account on stock firmware and whether it accepts the same root credentials as the WebUI terminal */}

## 相关页面

- [UART 使用](/cn/recamera_pro_uart_usage/) — 扩展接口上的第二个串口，用于 WebUI 触发和 AI 推理输出
- [收集日志](/cn/recamera_pro_collect_logs/) — 收集日志以便排障和技术支持

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
