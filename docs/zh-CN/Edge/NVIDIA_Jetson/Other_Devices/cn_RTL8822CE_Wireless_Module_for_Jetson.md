---
description: 本 wiki 介绍了 RTL8822CE 无线模块的功能和规格，这是一款双频 Wi-Fi 和蓝牙 v5.0 M.2 无线模块，兼容各种嵌入式设备（如 reComputer J4012）。文章提供了其技术规格、支持设备、硬件安装步骤以及通过桌面界面或命令行配置无线网络和蓝牙的方法的详细信息。
title: 适用于 Jetson 的 RTL8822CE 无线模块
keywords:
  - Edge
  - reComputer
  - Wifi
  - Bluetooth
  - Wireless 
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.webp
slug: /cn/rtl8822ce_wireless_module_for_jetson
last_update:
  date: 12/3/2024
  author: Youjiang
---

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/RTL8822CE_Wireless_NIC_for_Jetson.png"/>
</div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8822CE-WIFI-Module-p-6313.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span>
    </strong>
  </a>
</div>


RTL8822CE 是一款紧凑的双频 WLAN+蓝牙组合 M.2 卡，集成了带有 PCI Express 控制器的 2T2R 双频 WLAN 子系统和带有 USB 支持的蓝牙 v5.0 子系统。兼容 IEEE 802.11 a/b/g/n/ac 标准，提供高达 867 Mbps 的最大 PHY 速率，并支持蓝牙双模（v5.0/v4.2/v2.1）。非常适合与嵌入式设备（如 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)）配合使用，提供高性能的无线和蓝牙连接。

## 功能特性

- 支持 2.4G/5GHz 双频
- 无线 PHY 速率可达 867Mbps
- IEEE 标准：IEEE 802.11a/b/g/n/ac
- 外形规格：M.2 2230 通用 A 键或 E 键
- 通过 MHF4 连接器连接外部天线
- 电源供应：DC3.3V±0.2V 电源供应
- 支持 Linux、Windows 10/11 等

## 规格参数

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
      <td>芯片组</td>
      <td>**TRL8822CE-CG**</td>
    </tr>
    <tr>
      <td>WLAN 标准</td>
      <td>IEEE802.11a/b/g/n/ac</td>
    </tr>
    <tr>
      <td>蓝牙规格</td>
      <td>Bluetooth Core Specification v5.0/4.2/2.1</td>
    </tr>
    <tr>
      <td>主机接口</td>
      <td>PCI Express 2.1 for WLAN & USB2.0 FS for Bluetooth</td>
    </tr>
    <tr>
      <td>天线</td>
      <td>通过 MHF4 连接器连接外部天线</td>
    </tr>
    <tr>
      <td>尺寸</td>
      <td>M.2 30*22*2.15mm (L*W*H)</td>
    </tr>
    <tr>
      <td>电源供应</td>
      <td>DC 3.3V±0.2V@ 1000mA(Max)</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td>-20℃ to +70℃</td>
    </tr>
    <tr>
      <td>工作湿度</td>
      <td>10% to 95% RH (Non-Condensing)</td>
    </tr>
    </table>
</div>

## 支持设备

- [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html)
- [reComputer J4011](https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html)
- [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011-w-o-power-adapter-p-5630.html)
- [reComputer J3010](https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html)

## 硬件连接

:::danger
在本 wiki 中，我们将以 reComputer J4012 为例，演示如何在 Jetson 设备上安装和配置 RTL8822CE 无线模块。
:::

步骤 1. 准备所有将要使用的材料。

- 配备 Jetpack 5.1.2 的 reComputer J4012
- Infineon Wi-Fi 模块

步骤 2. 将无线模块插入 M.2 Key E 端口。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.jpg"/>
</div>

## 配置无线模块

我们可以直接访问 Jetson 桌面，通过 `Settings` --> `WiFi` 连接到 wifi 网络。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/>
</div>

我们也可以通过 `Settings` --> `Bluetooth` 配置蓝牙。

:::info
此外，我们可以通过命令行配置无线模块，例如使用 `bluetoothctl` 命令配置蓝牙设备。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/>
</div>

:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
