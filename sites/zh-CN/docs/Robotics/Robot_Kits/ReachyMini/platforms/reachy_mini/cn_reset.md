---
description: 使用Reachy Mini Control应用、Web Bluetooth或nRF Connect通过蓝牙重置Wi-Fi热点或守护进程的指南。
title: 通过蓝牙重置
slug: /reachymini_platforms_reachy_mini_reset
keywords:
  - reset
  - bluetooth
  - nrf connect
  - hotspot
  - daemon
  - wireless
  - troubleshoot
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_platforms_reachy_mini_reset/
---

# 蓝牙重置和重启工具（无线版）

如果您需要通过蓝牙重置机器人的WiFi热点、重启守护进程或运行其他维护命令，请使用以下选项之一。当您在笔记本电脑或台式机上时，**优先使用官方Reachy Mini Control应用**：它包含蓝牙控制台，避免使用单独的浏览器或手机应用。

## 1. Reachy Mini Control — 蓝牙控制台（推荐）

使用**Reachy Mini Control**桌面应用（[下载](https://hf.co/reachy-mini/#/download)）。蓝牙必须在您的电脑上启用。

1. 打开**Reachy Mini Control**。在**连接到Reachy**屏幕（开始会话之前），滚动到底部并点击**"首次WiFi设置"**。

[![control-app-first-time-wifi-setup.png](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-first-time-wifi-setup.png)](https://hf.co/reachy-mini/#/download)

2. 在**"首次WiFi设置"向导**中，使用底部链接**"尝试蓝牙控制台"**（例如热点未检测到时，或无论何时您想要直接使用控制台）。

[![control-app-wifi-wizard-bluetooth-console.png](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-wifi-wizard-bluetooth-console.png)](https://hf.co/reachy-mini/#/download)

从蓝牙控制台您可以重置热点、检查网络状态，以及运行与其他方法相同的命令。

> **注意：** 在某些应用版本中，入口链接可能显示为**"首次连接到您的WiFi..."**而不是**"首次WiFi设置"**；它会打开相同的WiFi设置流程。

## 2. Web Bluetooth仪表板（手机或桌面浏览器）

使用智能手机或桌面以及**支持蓝牙的浏览器**（Chrome、Opera或Edge），打开独立工具：[蓝牙工具](https://pollen-robotics.github.io/reachy_mini/)。您可以重置热点、检查网络状态等，无需安装桌面应用。

如果您的设备或浏览器不支持Web Bluetooth API，请使用桌面应用（上文）或nRF Connect方法（下文）。

## 3. nRF Connect（高级）

Reachy Mini无线版公开了蓝牙GATT接口，因此您可以从通用BLE客户端重置WiFi热点或守护进程。

### 3.1 安装nRF Connect

- **Android**：[Google Play](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en-US&pli=1)
- **iOS**：[App Store](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

### 3.2 扫描并连接

1. 打开nRF Connect。
2. 扫描设备并选择**ReachyMini**。

[![bluetooth_1.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_1.jpg)

3. 连接到设备。

### 3.3 未知服务和使用WRITE部分

- 打开**未知服务**。
- 使用**WRITE**部分发送命令。
- 您可以使用上方的**READ**部分检查机器人的响应。

[![bluetooth_2.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_2.jpg)

### 3.4 发送命令

命令作为**十六进制字符串**发送（或作为`STATUS`或`CMD_HOTSPOT`等明文）。如果需要ASCII→十六进制，请使用[此转换器](https://www.rapidtables.com/convert/number/ascii-to-hex.html)。

**在任何其他命令之前始终发送PIN。**

#### PIN码

PIN是机器人序列号的**最后5位数字**。例如，如果序列号是`xxxxxxxx4918400018`，则PIN是`00018` — 发送`PIN_00018`（或下面的十六进制值）。

#### 命令参考

| 命令                | 十六进制值（`0x`之后）              |
|------------------------|-------------------------------------|
| STATUS                 | 535441545553                        |
| PIN_00018              | 50494E5F3030303138                  |
| CMD_HOTSPOT            | 434D445F484F5453504F54              |
| CMD_RESTART_DAEMON     | 434D445F524553544152545F4441454D4F4E |
| CMD_SOFTWARE_RESET     | 434D445F534F4654574152455F5245534554 |

如果您使用**CMD_SOFTWARE_RESET**，机器人将重启，可能需要**约5分钟**才能再次访问。

#### 提示

为便于重复使用，保存常用命令会很方便。

[![bluetooth_3.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_3.jpg)
[![bluetooth_4.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_4.jpg)