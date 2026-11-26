---
description: 拆解 reComputer Mini J501 外壳并在 M.2 Key E 插槽上安装或更换 Wi-Fi 模块
title: reComputer Mini J501 WiFi 模块安装
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
url: https://wiki.seeedstudio.com/cn/recomputer_mini_j501_wifi_module_installation/
---

## 介绍

有关完整系统概览、设置和刷机流程，请参阅 [reComputer Robotics J50 Mini 入门指南](https://wiki.seeedstudio.com/cn/recomputer_robotics_j50_mini_getting_started/)。

在本文档中，你将学习如何拆解 **reComputer Mini J501**，并在 **M.2 Key E** 插槽上安装或更换 **Wi-Fi 模块**。

Wi-Fi 插槽位于 **reComputer Mini J501 载板** 的底面。**后扩展板**覆盖了 **M.2 Key E** 插槽，因此在进行 Wi-Fi 相关操作时必须将其拆下。**上扩展板**上有开孔露出载板的安装螺丝，因此在维护过程中无需拆除。通过拆下载板的相同步骤也适用于更换 **NVMe SSD**（M.2 Key M）——后扩展板并未覆盖该插槽。

:::warning
在拆机前，请先关闭设备电源并断开所有线缆（包括直流电源输入和以太网）。在接触载板和 M.2 模块时，请使用防静电操作。
:::

## reComputer Mini (J501)

**reComputer Mini J501** 搭载 **Robotics J501 Mini 载板** 和 **NVIDIA Jetson AGX Orin** 模块（32GB/64GB），在紧凑的工业外壳中可提供高达 **275 TOPS** 的 AI 性能。载板提供双以太网、USB 3.2、DisplayPort 以及包括用于 Wi‑Fi/BT 的 **M.2 Key E** 在内的 M.2 扩展插槽。

<div align="center">
  <img width ="600" alt="reComputer Mini J501 carrier board for Jetson AGX Orin" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_08.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span>
    </strong>
  </a>
</div>
<br />

有关设备规格、JetPack 刷机和接口使用，请参阅 [Robotics J501 Mini 载板硬件与入门指南](https://wiki.seeedstudio.com/cn/recomputer_j501_mini_getting_started/)。

## Wi-Fi 模块

我们建议使用与 Jetson 兼容的 Realtek M.2 Key E Wi‑Fi/BT 模块（例如 RTL8852BE）。

<div align="center">
  <img width ="600" alt="Realtek M.2 Key E WiFi and Bluetooth module for Jetson" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_07.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8852BE-WIFI-Module-M-2-Key-E-p-6835.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span>
    </strong>
  </a>
</div>

## 硬件连接

:::info
本指南重点介绍 **Wi-Fi 模块** 的安装。若要更换 **NVMe SSD**，仅需执行步骤 2–3——跳过步骤 4（后扩展板拆卸）。
:::

**步骤 1.** 准备所有将要使用的材料。

- 已断电的 reComputer Mini J501 外壳
- 兼容的 M.2 Key E Wi-Fi/BT 模块
- IPEX 天线线缆（通常随 Wi-Fi 模块附带）
- 十字螺丝刀

### 拆解 J501 外壳

**步骤 2.** 拆下外壳顶部盖板。

<div align="center"><img width ="800" alt="reComputer Mini J501 with top enclosure cover removed" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_01.png?v=2"/></div>

**步骤 3.** 拆下主载板。

卸下载板上 **四个角上的安装螺丝**（如下图红色标记）。

<div align="center"><img width ="800" alt="Four corner mounting screws on the J501 carrier board marked in red" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_02.png"/></div>

- 小心地将载板从机箱中抬起并取出。
- 将载板放置在干净的绝缘表面上。

<div align="center"><img width ="800" alt="J501 carrier board removed from the chassis and placed on a work surface" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_03.png"/></div>

**步骤 4.** 拆下**后部**扩展板（*仅在安装 Wi-Fi 时需要*）。

将载板翻转，使**底面**朝上。**后扩展板**通过板对板连接器固定在背面，并挡住了 **M.2 Key E** 插槽的访问。如果你只是在 **M.2 Key M** 插槽中更换 NVMe SSD，则可跳过此步骤。

<div align="center"><img width ="800" alt="J501 carrier board flipped over with rear expansion board still attached via board-to-board connectors" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_04.png"/></div>

- 轻轻将后扩展板从载板连接器上拔下。
- 将后扩展板放在一旁备用。

现在可以访问 **M.2 Key E**（WiFi/BT）插槽。下面的步骤介绍 Wi-Fi 模块的安装。

<div align="center"><img width ="800" alt="M.2 Key E WiFi slot behind the rear expansion board area and M.2 Key M NVMe SSD slot accessible on the back of the J501 carrier board" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_05.png"/></div>

### 安装 Wi-Fi 模块

**步骤 5.** 以正确的角度（通常为 30°）将无线模块插入 **M.2 Key E** 接口，然后按下并用安装螺丝固定。

**步骤 6.** 将 **IPEX 天线线缆**连接到模块上。走线时避开金属屏蔽罩和螺丝孔，以免在重新组装时被夹住。

<div align="center">
  <img width ="1000" alt="WiFi module installed in M.2 Key E slot with IPEX antenna cable connected on the J501 carrier board" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_06.png"/>
</div>

### 重新组装 J501 外壳

**步骤 7.** 按相反顺序重新组装设备：

1. 如果之前拆下了后扩展板，将其重新连接到载板背面。
2. 将载板放回机箱内并拧紧四个角上的螺丝。
3. 装回外壳顶部盖板。

## 软件设置（驱动安装）

如果你使用的是 **RTL8852BE** 模块，请参考：

- [适用于 Jetson 的 RTL8852BE 无线模块](https://wiki.seeedstudio.com/cn/rtl8852be_wireless_module_for_jetson/)

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
