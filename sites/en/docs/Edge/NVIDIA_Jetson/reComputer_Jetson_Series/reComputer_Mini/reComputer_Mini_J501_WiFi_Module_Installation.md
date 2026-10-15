---
description: Disassemble the reComputer Mini J501 enclosure and install or replace a Wi-Fi module on the M.2 Key E slot
title: reComputer Mini J501 WiFi Module Installation
keywords:
  - reComputer Mini
  - J501
  - WiFi
  - SSD
  - NVMe
  - M.2 Key E
  - M.2 Key M
  - AGX Orin
  - Jetson AGX Orin
image: https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_08.png
slug: /recomputer_mini_j501_wifi_module_installation
last_update:
  date: 06/17/2026
  author: HaoChen
sku: 100042928, 114993556, 100020039
createdAt: '2026-06-15'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/recomputer_mini_j501_wifi_module_installation/
---

## Introduction

In this document, you will learn how to disassemble the **reComputer Mini J501** and install or replace a **Wi-Fi module** (M.2 Key E).

The Wi-Fi slot is on the underside of the **reComputer Mini J501 Carrier Board**. The **rear expansion board** covers the **M.2 Key E** slot and must be detached for Wi-Fi service. The **top expansion board** has cutouts that expose the carrier board mounting screws, so it does not need to be removed during service. The same disassembly steps through carrier board removal also apply when replacing the **NVMe SSD** (M.2 Key M) — the rear expansion board does not cover that slot.

:::warning
Power off the device and disconnect all cables (including DC input and Ethernet) before disassembly. Use ESD-safe handling when touching the carrier board and M.2 modules.
:::

## reComputer Mini (J501)

The **reComputer Mini J501** uses the **Robotics J501 Mini carrier board** with **NVIDIA Jetson AGX Orin** modules (32GB/64GB), delivering up to **275 TOPS** AI performance in a compact industrial enclosure. The carrier board provides dual Ethernet, USB 3.2, DisplayPort, and M.2 expansion slots including **M.2 Key E** for Wi‑Fi/BT.

<div align="center">
  <img width ="600" alt="reComputer Mini J501 carrier board for Jetson AGX Orin" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_08.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span>
    </strong>
  </a>
</div>
<br />

For device specifications, JetPack flashing, and interface usage, see [Robotics J501 Mini carrier board Hardware and Getting Started](https://wiki.seeedstudio.com/recomputer_j501_mini_getting_started/).

## Wi-Fi Module

We recommend using a Realtek M.2 Key E Wi‑Fi/BT module that is compatible with Jetson (for example RTL8852BE).

<div align="center">
  <img width ="600" alt="Realtek M.2 Key E WiFi and Bluetooth module for Jetson" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_07.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8852BE-WIFI-Module-M-2-Key-E-p-6835.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span>
    </strong>
  </a>
</div>

## Hardware Connection

:::info
This guide focuses on **Wi-Fi module** installation. To replace the **NVMe SSD**, follow Steps 2–3 only — skip Step 4 (rear expansion board removal).
:::

**Step 1.** Prepare all materials that will be used.

- reComputer Mini J501 enclosure (powered off)
- Compatible M.2 Key E Wi-Fi/BT module
- IPEX antenna cable(s) (usually included with the Wi-Fi module)
- Phillips screwdriver

### Disassemble the J501 Enclosure

**Step 2.** Remove the top enclosure cover.

<div align="center"><img width ="800" alt="reComputer Mini J501 with top enclosure cover removed" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_01.png?v=2"/></div>

**Step 3.** Remove the main carrier board.

Remove all **four corner mounting screws** on the carrier board (marked in red below).

<div align="center"><img width ="800" alt="Four corner mounting screws on the J501 carrier board marked in red" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_02.png"/></div>

- Carefully lift the carrier board up and out of the chassis.
- Place the board on a clean, non-conductive surface.

<div align="center"><img width ="800" alt="J501 carrier board removed from the chassis and placed on a work surface" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_03.png"/></div>

**Step 4.** Remove the **rear** expansion board *(Wi-Fi installation only)*.

Flip the carrier board over so the **bottom side** faces up. A **rear expansion board** is attached to the back via board-to-board connectors and blocks access to the **M.2 Key E** slot. Skip this step if you are only replacing the NVMe SSD in the **M.2 Key M** slot.

<div align="center"><img width ="800" alt="J501 carrier board flipped over with rear expansion board still attached via board-to-board connectors" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_04.png"/></div>

- Gently pull the rear expansion board away from the carrier board connectors.
- Set the rear expansion board aside.

The **M.2 Key E** (WiFi/BT) slot is now accessible. The steps below cover Wi-Fi module installation.

<div align="center"><img width ="800" alt="M.2 Key E WiFi slot behind the rear expansion board area and M.2 Key M NVMe SSD slot accessible on the back of the J501 carrier board" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_05.png"/></div>

### Install the Wi-Fi Module

**Step 5.** Insert the wireless module into the **M.2 Key E** port at the correct angle (typically 30°), then press down and secure with the mounting screw.

**Step 6.** Connect the **IPEX antenna cable(s)** to the module. Route the cables clear of metal shields and screw holes so they are not pinched during reassembly.

<div align="center">
  <img width ="1000" alt="WiFi module installed in M.2 Key E slot with IPEX antenna cable connected on the J501 carrier board" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_06.png"/>
</div>

### Reassemble the J501 Enclosure

**Step 7.** Reassemble the device in reverse order:

1. If you removed it, reattach the rear expansion board to the back of the carrier board.
2. Place the carrier board back into the chassis and tighten the four corner screws.
3. Replace the top enclosure cover.

## Software Setup (Driver Installation)

If you are using an **RTL8852BE** module, follow:

- [RTL8852BE Wireless Module for Jetson](https://wiki.seeedstudio.com/rtl8852be_wireless_module_for_jetson/)

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
