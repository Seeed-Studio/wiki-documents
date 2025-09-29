---
description: 本wiki介绍了RTL8822CE无线模块的功能和规格，这是一款双频Wi-Fi和蓝牙v5.0 M.2无线模块，兼容各种嵌入式设备（如reComputer J4012）。文章提供了其技术规格、支持设备、硬件安装步骤以及通过桌面界面或命令行配置无线网络和蓝牙的方法的详细信息。
title: 适用于Jetson的RTL8822CE无线模块
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

<!-- Need to jump button  -->

RTL8822CE是一款紧凑的双频WLAN+蓝牙组合M.2卡，集成了带PCI Express控制器的2T2R双频WLAN子系统和带USB支持的蓝牙v5.0子系统。兼容IEEE 802.11 a/b/g/n/ac标准，提供高达867 Mbps的最大PHY速率，支持蓝牙双模（v5.0/v4.2/v2.1）。非常适合为嵌入式设备（如[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)）提供高性能无线和蓝牙连接。

## 特性

- 支持2.4G/5GHz双频
- 无线PHY速率可达867Mbps
- IEEE标准：IEEE 802.11a/b/g/n/ac
- 外形规格：M.2 2230通用A键或E键
- 通过MHF4连接器连接外部天线
- 电源：DC3.3V±0.2V电源
- 支持Linux、Windows 10/11等

## 规格

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
      <td>芯片组</td>
      <td>**TRL8822CE-CG**</td>
    </tr>
    <tr>
      <td>WLAN标准</td>
      <td>IEEE802.11a/b/g/n/ac</td>
    </tr>
    <tr>
      <td>蓝牙规格</td>
      <td>蓝牙核心规格v5.0/4.2/2.1</td>
    </tr>
    <tr>
      <td>主机接口</td>
      <td>WLAN使用PCI Express 2.1，蓝牙使用USB2.0 FS</td>
    </tr>
    <tr>
      <td>天线</td>
      <td>通过MHF4连接器连接外部天线</td>
    </tr>
    <tr>
      <td>尺寸</td>
      <td>M.2 30*22*2.15mm (长*宽*高)</td>
    </tr>
    <tr>
      <td>电源</td>
      <td>DC 3.3V±0.2V@ 1000mA(最大)</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td>-20℃ 至 +70℃</td>
    </tr>
    <tr>
      <td>工作湿度</td>
      <td>10% 至 95% RH（非冷凝）</td>
    </tr>
    </table>
</div>

## 支持的设备

- [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html)
- [reComputer J4011](https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html)
- [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011-w-o-power-adapter-p-5630.html)
- [reComputer J3010](https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html)

## 硬件连接

:::danger
在本wiki中，我们将使用reComputer J4012作为示例，演示如何在Jetson设备上安装和配置RTL8822CE无线模块。
:::

步骤1. 准备所有将要使用的材料。

- 配备Jetpack 5.1.2的reComputer J4012
- Infineon Wi-Fi模块

步骤2. 将无线模块插入M.2 Key E端口。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.jpg"/>
</div>

## 配置无线模块

我们可以直接访问Jetson桌面，通过`设置` --> `WiFi`连接到wifi网络。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/>
</div>

我们也可以通过`设置` --> `蓝牙`配置蓝牙。

:::info
此外，我们可以通过命令行配置无线模块，例如使用`bluetoothctl`命令配置蓝牙设备。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/>
</div>

:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>