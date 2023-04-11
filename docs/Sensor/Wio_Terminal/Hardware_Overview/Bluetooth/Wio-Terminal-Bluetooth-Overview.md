---
description: Overview
title: Overview
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Bluetooth-Overview
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Bluetooth Overview

This wiki introduces how to update the latest firmware for the Wireless Core Realtek RTL8720 on the Wio Terminal, as well as installing all the dependent libraries for Wio Terminal to enable Bluetooth connectivity.

## Update the Wireless Core Firmware

Please follow [this guide](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware) to update the wireless core firmware on the Wio Terminal.

:::note
        This firmware allows Wi-Fi and Bluetooth to work at the same time!
:::

## Update Seeed SAMD ArduinoCore

:::note
Please update the **Seeed SAMD ArduinoCore to the latest version (1.8.1)**!
:::

- **STEP 1:** Open the **Arduino IDE**, and click `Tools` -> `Board` -> `Boards Manager`, and search **Wio Terminal** in the search box

- **STEP 2:** Make sure the latest version (1.8.1) is installed. If not, click on the `Select version` drop-down menu, select the latest version and click `Install`

<p style={{textalign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>

> You can also find the source code of Seeed SAMD ArduinoCore [**here**](https://github.com/Seeed-Studio/ArduinoCore-samd).

## Libraries Installation

There are a few Arduino Libraries that are needed for Bluetooth connectivity. We have included all the wireless-related libraries for the Wio Terminal in the **Arduino Library Manager**. So you simply have to open Arduino Library Manager within Arduino IDE and search for the libraries that you need and easily install them!

### How to Install a Library from Arduino Library Manager

- **STEP 1:** Open the **Arduino IDE**, and click `Sketch` -> `Include Library` -> `Manage Libraries...`

- **STEP 2:** Type the **name of the library** that we need and select the **latest version** from the drop-down menu (if available)

- **STEP 3:** Click **Install**

<p style={{textalign:  'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>

### Needed Libraries for Bluetooth

We need the following libraries to get started with Bluetooth on the Wio Terminal. You can search for these libraries by typing the library name in the search box of Arduino Library Manager.

- [**Seeed_Arduino_rpcBLE**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE) - search for `"seeed rpcble"`

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - search for `"seeed rpcunified"`
