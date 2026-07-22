---
description: 本维基介绍 RTL8852BE 无线模块的功能和规格，这是一款适用于 NVIDIA Jetson 设备的 Wi-Fi 6 和 Bluetooth M.2 无线模块。本文提供其技术规格、适用于 JetPack 5 和 JetPack 6 的驱动安装方法，以及配置无线网络和 Bluetooth 的方法。
title: 适用于 Jetson 的 RTL8852BE 无线模块
keywords:
  - Edge
  - reComputer
  - Wifi
  - Wifi 6
  - Bluetooth
  - Wireless
  - RTL8852BE
slug: /rtl8852be_wireless_module_for_jetson
last_update:
  date: 4/14/2026
  author: Zibo
createdAt: '2026-04-14'
updatedAt: '2026-06-23'
sku: 100042928
url: https://wiki.seeedstudio.com/cn/rtl8852be_wireless_module_for_jetson/
---

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/8852be.png"/>
</div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8852BE-WIFI-Module-M-2-Key-E-p-6835.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span>
    </strong>
  </a>
</div>



RTL8852BE 是一款基于 Realtek 芯片组的 Wi-Fi 6（802.11ax）M.2 无线模块。它集成了用于 WLAN 的 PCIe 接口和用于 Bluetooth 的 USB 接口，与上一代 Wi-Fi 5 模块相比，提供显著更高的吞吐量和更低的延迟。它非常适合诸如 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 等需要高性能无线连接的嵌入式设备。

## 特性

- 支持 2.4 GHz / 5 GHz 双频
- IEEE 802.11 a/b/g/n/ax（Wi-Fi 6）
- 在 5 GHz 频段上物理速率最高可达 1200 Mbps
- 封装形式：M.2 2230，A Key 或 E Key
- 电源：DC 3.3V
- 支持 Linux（JetPack 5 / JetPack 6）、Windows 10/11

## 规格参数

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
      <td>芯片组</td>
      <td>**RTL8852BE**</td>
    </tr>
    <tr>
      <td>WLAN 标准</td>
      <td>IEEE 802.11 a/b/g/n/ax (Wi-Fi 6)</td>
    </tr>
    <tr>
      <td>BT 规范</td>
      <td>Bluetooth 5.2</td>
    </tr>
    <tr>
      <td>主机接口</td>
      <td>用于 WLAN 的 PCIe 2.1/2.0 & 用于 Bluetooth 的 USB 2.0</td>
    </tr>
    <tr>
      <td>天线</td>
      <td>通过 MHF4 接头连接到外置天线</td>
    </tr>
    <tr>
      <td>尺寸</td>
      <td>M.2 2230（22 x 30 x 2.15 mm）</td>
    </tr>
    <tr>
      <td>电源</td>
      <td>DC 3.3V</td>
    </tr>
    <tr>
      <td>最大无线速率</td>
      <td>最高 1200 Mbps</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td>-20°C 至 +70°C</td>
    </tr>
    <tr>
      <td>工作湿度</td>
      <td>10% 至 95% RH（无冷凝）</td>
    </tr>
    </table>
</div>

## 支持的设备

所有 reComputer Seri

- 所有 reComputer 系列

## 驱动安装

Jetson 可能会将 RTL8852BE 模块识别为 PCIe 设备，但不会自动加载其驱动程序。您需要根据 JetPack 版本手动安装驱动。

```bash
lspci | grep -i network
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/lspci.PNG"/>
</div>



### JetPack 5.x

对于 JetPack 5，请使用 [lwfinger/rtw8852be](https://github.com/lwfinger/rtw8852be) 驱动：

```bash
git clone https://github.com/lwfinger/rtw8852be.git
cd rtw8852be/
sudo apt-get update
sudo apt-get install make gcc linux-headers-$(uname -r) build-essential git
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/jp5_install.png"/>
</div>

```bash
make
sudo make install
sudo modprobe 8852be
```

### JetPack 6.x

对于 JetPack 6，请使用 [rtw89](https://github.com/a5a5aa555oo/rtw89) 驱动：

```bash
git clone https://github.com/a5a5aa555oo/rtw89
cd rtw89
```

编辑 `Makefile` 以设置正确的内核头文件路径：

```diff
# JP 6.2
KDIR ?= /usr/src/linux-headers-5.15.148-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/

# JP 6.0
KDIR ?= /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/makefile.png"/>
</div>

然后进行编译和安装：

```bash
make
sudo make install
sudo modprobe rtw89_8852be
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/jp6_install.png"/>
</div>
## 验证无线模块
:::info
接口名称可能会因 JetPack 版本而异：

- JetPack 5：通常为 `wlan0`
- JetPack 6：可能显示为 `wlP1p1s0`

请根据实际情况在下面的命令中调整接口名称。使用以下命令来确认：
```bash
ifconfig
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/interface.png"/>
</div>

:::

## 配置无线网络

### 扫描附近的 WiFi 网络

```bash
sudo iw dev wlan0 scan | grep -E "SSID|freq"
```

如果不同，请将 `wlan0` 替换为实际的接口名称。

### 连接到 WiFi 网络

```bash
sudo nmcli device wifi connect "YOUR_SSID" password "YOUR_PASSWORD" ifname wlan0
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/link_wifi.PNG"/>
</div>

### 验证 WiFi 6 连接

检查当前链路状态：

```bash
iw dev wlan0 link
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/veryfiy_wifi6.PNG"/>
</div>

输出将显示如下信息：

- **freq**：工作频率（例如 5180 MHz 对应 5 GHz 频段）
- **HE-MCS**：Wi-Fi 6 的调制与编码方案（例如 MCS 9 代表最高编码效率）
- **TX/RX rate**：当前发送和接收速率

## Bluetooth 配置

可以使用 `bluetoothctl` 配置 RTL8852BE 模块的 Bluetooth 功能：

```bash
bluetoothctl
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/bluetooth.png"/>
</div>
## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
