---
description: ODYSSEY-常见问题解答
title: 解决与BIOS相关的问题（WiFi/蓝牙/风扇/自动开机/启动保护/GPIO）
#keywords:
slug: /cn/Troubleshooting_BIOS-Related_Issues
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 2023/6/26
  author: Seraphina
---

# 解决与BIOS相关的问题

一些与Odyssey相关的问题可以通过配置BIOS设置来解决。以下是一些可以通过BIOS设置解决的问题。首先，我们将介绍如何进入BIOS设置。

### 如何进入BIOS设置

按下电源按钮并持续按下 `DEL` 键，直到看到BIOS设置界面。

### 如何解决无法连接Wi-Fi和蓝牙的问题

检查BIOS设置，并在BIOS中启用Wi-Fi和蓝牙。

### 内置风扇是否可控

目前风扇由BIOS控制，用户无法直接控制。风扇速度根据CPU温度自动调整。在BIOS设置界面中检查 `Chipset` -> `FAN Control` 以获取更多信息。

### 如何设置ODYSSEY - X86J41x5在接通电源时自动开机

这需要在BIOS中进行配置。按下 `DEL` 键进入BIOS设置。导航到 `Chipset` -> `Restore on AC Power Loss`，并将设置更改为 `Last State`。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Auto-power.png" alt="pir" width={600} height="auto" /></p>

### ODYSSEY主板是否支持启动保护（Boot Guard）

是的，您可以在BIOS中启用 `Security Boot` 选项。当启用此选项时，BIOS将禁止从未经认证的设备启动。

### 为什么Odyssey关闭后GPIO仍然工作

要设置此功能，您需要更新到我们提供的最新BIOS。在最新的BIOS中，您可以将此处的设置从启用更改为禁用，以关闭GPIO和ODYSSEY。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/OdysseyFAQ1.png" alt="pir" width={600} height="auto" /></p>