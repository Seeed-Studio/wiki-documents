---
description: 概述
title: Bluetooth概述
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Bluetooth-Overview
last_update:
  date: 3/08/2024
  author: 金菊
---

# Bluetooth 概述

本wiki介绍了如何更新Wio Terminal上无线核心Realtek RTL8720的最新固件，以及安装所有Wio Terminal的依赖库，以实现蓝牙连接。

## 更新无线核心固件

请按照 [此指南](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware) 来更新Wio Terminal上的无线核心固件。

:::注
        此固件允许Wi-Fi和蓝牙同时工作！
:::

## 更新Seeed SAMD ArduinoCore

:::注
请将 **Seeed SAMD ArduinoCore更新到最新版本（1.8.1）**!
:::

- **步骤 1:** 打开 **Arduino IDE**, 点击 `Tools` -> `Board` -> `Boards Manager`, 在搜索框中搜索 **Wio Terminal** 。

- **步骤 2:** 确保已安装最新版本（1.8.1）。如果没有，请点击 `Select version` 下拉菜单，选择最新版本然后点击k `Install`。

<p style={{textalign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>

> 您也可以在 [**此处**](https://github.com/Seeed-Studio/ArduinoCore-samd)找到Seeed SAMD ArduinoCore的源代码。

## 库的安装

为了实现Wio Terminal的蓝牙连接，需要安装一些Arduino库。我们已经在 **Arduino Library Manager**。 中包含了所有与无线相关的Wio Terminal库。因此，您只需在Arduino IDE中打开Arduino库管理器，并搜索需要的库并轻松安装它们！

### 如何从Arduino库管理器安装库

- **步骤 1:** 打开 **Arduino IDE**, 点击 `Sketch` -> `Include Library` -> `Manage Libraries...`

- **步骤 2:** 输入我们需要的 **name of the library** 并从下拉菜单中选择 **latest version** （如果有）。

- **步骤 3:** 点击 **Install**。

<p style={{textalign:  'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>

### 蓝牙所需的库

我们需要以下库来开始使用Wio Terminal上的蓝牙。您可以在Arduino库管理器的搜索框中输入库名来搜索这些库。

- [**Seeed_Arduino_rpcBLE**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE) - 搜索 `"seeed rpcble"`

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - 搜索 `"seeed rpcunified"`
