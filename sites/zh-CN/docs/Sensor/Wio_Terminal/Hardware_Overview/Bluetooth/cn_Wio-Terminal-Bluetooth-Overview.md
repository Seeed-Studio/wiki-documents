---
description: 概述
title: 蓝牙概述
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Bluetooth-Overview
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# 蓝牙概述

本wiki介绍如何为Wio Terminal上的无线核心Realtek RTL8720更新最新固件，以及安装Wio Terminal的所有依赖库以启用蓝牙连接。

## 更新无线核心固件

请按照[此指南](https://wiki.seeedstudio.com/cn/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware)更新Wio Terminal上的无线核心固件。

:::note
        此固件允许Wi-Fi和蓝牙同时工作！
:::

## 更新Seeed SAMD ArduinoCore

:::note
请将**Seeed SAMD ArduinoCore更新到最新版本(1.8.1)**！
:::

- **步骤1：** 打开**Arduino IDE**，点击`工具` -> `开发板` -> `开发板管理器`，在搜索框中搜索**Wio Terminal**

- **步骤2：** 确保安装了最新版本(1.8.1)。如果没有，点击`选择版本`下拉菜单，选择最新版本并点击`安装`

<p style={{textalign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>

> 您也可以在[**这里**](https://github.com/Seeed-Studio/ArduinoCore-samd)找到Seeed SAMD ArduinoCore的源代码。

## 库安装

蓝牙连接需要几个Arduino库。我们已经在**Arduino库管理器**中包含了Wio Terminal的所有无线相关库。因此，您只需在Arduino IDE中打开Arduino库管理器，搜索您需要的库并轻松安装它们！

### 如何从Arduino库管理器安装库

- **步骤1：** 打开**Arduino IDE**，点击`项目` -> `加载库` -> `管理库...`

- **步骤2：** 输入我们需要的**库名称**，并从下拉菜单中选择**最新版本**（如果可用）

- **步骤3：** 点击**安装**

<p style={{textalign:  'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>

### 蓝牙所需的库

我们需要以下库来开始在Wio Terminal上使用蓝牙。您可以在Arduino库管理器的搜索框中输入库名称来搜索这些库。

- [**Seeed_Arduino_rpcBLE**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE) - 搜索`"seeed rpcble"`

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - 搜索`"seeed rpcunified"`