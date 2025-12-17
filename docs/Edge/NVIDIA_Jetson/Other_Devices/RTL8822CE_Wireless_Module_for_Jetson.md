---
description: This wiki introduces the features and specifications of the RTL8822CE wireless module, a dual-band Wi-Fi and Bluetooth v5.0 M.2 wireless module compatible with various embedded devices (e.g., reComputer J4012). The article provides detailed information on its technical specifications, supported devices, hardware installation steps, and methods to configure wireless networks and Bluetooth via the desktop interface or command line.
title: RTL8822CE Wireless Module for Jetson
keywords:
  - Edge
  - reComputer
  - Wifi
  - Bluetooth
  - Wireless 
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.webp
slug: /rtl8822ce_wireless_module_for_jetson
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
      <span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span>
    </strong>
  </a>
</div>


The RTL8822CE is a compact Dual-band WLAN+Bluetooth Combo M.2 Card that integrates a 2T2R Dual-band WLAN subsystem with PCI Express controllers and a Bluetooth v5.0 subsystem with USB support. Compatible with IEEE 802.11 a/b/g/n/ac standards, it delivers a maximum PHY rate of up to 867 Mbps and supports Bluetooth dual mode (v5.0/v4.2/v2.1). Ideal for high-performance wireless and Bluetooth connectivity for using with embedded devices such as [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

## Features

- Supports 2.4G/5GHz dual-band
- Wireless PHY rate can reach up to 867Mbps
- IEEE Standards: IEEE 802.11a/b/g/n/ac
- Form factor: M.2 2230 generic A key or E key
- Connect to external antenna through MHF4 connectors
- Power Supply: DC3.3V±0.2V power supply
- Supports Linux, Windows 10/11, etc.

## Specifications

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
      <td>Chipset</td>
      <td>**TRL8822CE-CG**</td>
    </tr>
    <tr>
      <td>WLAN Standards</td>
      <td>IEEE802.11a/b/g/n/ac</td>
    </tr>
    <tr>
      <td>BT Specification</td>
      <td>Bluetooth Core Specification v5.0/4.2/2.1</td>
    </tr>
    <tr>
      <td>Host Interface</td>
      <td>PCI Express 2.1 for WLAN & USB2.0 FS for Bluetooth</td>
    </tr>
    <tr>
      <td>Antenna</td>
      <td>Connect to the external antennas through MHF4 connector</td>
    </tr>
    <tr>
      <td>Dimension</td>
      <td>M.2 30*22*2.15mm (L*W*H)</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>DC 3.3V±0.2V@ 1000mA(Max)</td>
    </tr>
    <tr>
      <td>Operation Temperature</td>
      <td>-20℃ to +70℃</td>
    </tr>
    <tr>
      <td>Operation Humidity</td>
      <td>10% to 95% RH (Non-Condensing)</td>
    </tr>
    </table>
</div>

## Supported Devices

- [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html)
- [reComputer J4011](https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html)
- [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011-w-o-power-adapter-p-5630.html)
- [reComputer J3010](https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html)

## Hardware Connection

:::danger
In this wiki, we will use the reComputer J4012 as an example to demonstrate how to install and configure a RTL8822CE wireless module on Jetson device.
:::

Step1. Prepare all materials that will be used.

- reComputer J4012 equipped with Jetpack 5.1.2
- Infineon Wi-Fi Module

Step 2. Insert the wireless module into the M.2 Key E port.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.jpg"/>
</div>

## Configure the Wireless Module

We can directly access the Jetson desktop and connect to wifi network through `Settings` --> `WiFi`.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/>
</div>

We can also configure Bluetooth through `Settings` --> `Bluetooth`.

:::info
Additionally, we can configure the wireless module via the command line, such as using the `bluetoothctl` command to configure Bluetooth devices.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/>
</div>

:::

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
