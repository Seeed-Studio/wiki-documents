---
description: Access the reCamera Pro command line through the WebUI terminal, SSH, or the DEBUG UART serial console, and learn when to use each one.
title: Terminal, SSH, and Debug UART
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
url: https://wiki.seeedstudio.com/recamera_pro_terminal/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Terminal, SSH, and Debug UART

reCamera Pro offers three ways to reach a command line, each useful in different situations:

| Method | Requires network | Use when |
| --- | --- | --- |
| WebUI terminal console | Yes | Quick checks from a browser, no extra tools |
| SSH | Yes | Scripting, file transfer, long development sessions |
| DEBUG UART serial console | No | The device will not boot, the network is misconfigured, or you need boot logs |

## WebUI Terminal Console

The terminal console lets you log in directly to the reCamera Pro system terminal from the Web UI, without an additional SSH tool.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2dvKqObUbo.png" />

Log in with the following default account:

```bash
Username: root
Password: recamera
```

The same Web UI page also provides a system log view for real-time log inspection, filtering, and download — see [Collect Logs](/recamera_pro_collect_logs/).

## SSH

When the device is reachable on the network, SSH is the most convenient access method for development: it supports file transfer (`scp`), port forwarding, and long-running sessions. From a computer on the same network (USB virtual Ethernet default address `192.168.42.1`):

```bash
ssh root@192.168.42.1
```

{/* TODO(verify): confirm the SSH default credentials on stock Buildroot firmware (whether root login uses the same password as the WebUI terminal console) and whether SSH is enabled out of the box */}

## DEBUG UART Serial Console

The DEBUG UART is dedicated to debugging. It works without any network configuration and shows boot-time output, making it the recovery path when the device will not boot or the IP address is unknown.

The baud rate of the debug serial port is **1500000**, and the hardware interface specification is MX1.25. The pin sequence is shown below.

![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

### Connect the DEBUG UART

1. Prepare a USB-to-serial converter. Connect the TX of the converter to the RX pin of the device, and connect the RX of the converter to the TX pin of the device. Remember to connect GND as well.
2. Power on the device, and you will see the device debugging information on the converter.

![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

:::note
Set your serial tool to a baud rate of 1500000. A mismatched baud rate produces garbled output.
:::

{/* TODO(verify): confirm the DEBUG UART console login account on stock firmware and whether it accepts the same root credentials as the WebUI terminal */}

## Related Pages

- [UART Usage](/recamera_pro_uart_usage/) — the second serial port on the expansion interface, used for WebUI triggering and AI inference output
- [Collect Logs](/recamera_pro_collect_logs/) — gather logs for troubleshooting and support

## Technical Support and Product Discussion

Thank you for choosing our products! We are here to provide you with various support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to meet different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
