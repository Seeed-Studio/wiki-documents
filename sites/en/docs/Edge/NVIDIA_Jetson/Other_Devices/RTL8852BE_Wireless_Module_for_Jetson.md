---
description: This wiki introduces the features and specifications of the RTL8852BE wireless module, a Wi-Fi 6 and Bluetooth M.2 wireless module compatible with NVIDIA Jetson devices. The article provides detailed information on its technical specifications, driver installation for JetPack 5 and JetPack 6, and methods to configure wireless networks and Bluetooth.
title: RTL8852BE Wireless Module for Jetson
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
updatedAt: '2026-04-14'
url: https://wiki.seeedstudio.com/rtl8852be_wireless_module_for_jetson/
---

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/8852be.png"/>
</div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8822CE-WIFI-Module-p-6313.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span>
    </strong>
  </a>
</div>



The RTL8852BE is a Wi-Fi 6 (802.11ax) M.2 wireless module based on the Realtek chipset. It integrates a PCIe interface for WLAN and a USB interface for Bluetooth, delivering significantly higher throughput and lower latency compared to previous-generation Wi-Fi 5 modules. It is ideal for embedded devices such as [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) that require high-performance wireless connectivity.

## Features

- Supports 2.4 GHz / 5 GHz dual-band
- IEEE 802.11 a/b/g/n/ax (Wi-Fi 6)
- PHY rate up to 1200 Mbps on 5 GHz band
- Form factor: M.2 2230, A key or E key
- Power Supply: DC 3.3V
- Supports Linux (JetPack 5 / JetPack 6), Windows 10/11

## Specifications

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
      <td>Chipset</td>
      <td>**RTL8852BE**</td>
    </tr>
    <tr>
      <td>WLAN Standards</td>
      <td>IEEE 802.11 a/b/g/n/ax (Wi-Fi 6)</td>
    </tr>
    <tr>
      <td>BT Specification</td>
      <td>Bluetooth 5.2</td>
    </tr>
    <tr>
      <td>Host Interface</td>
      <td>PCIe 2.1/2.0 for WLAN & USB 2.0 for Bluetooth</td>
    </tr>
    <tr>
      <td>Antenna</td>
      <td>Connect to the external antennas through MHF4 connector</td>
    </tr>
    <tr>
      <td>Dimension</td>
      <td>M.2 2230 (22 x 30 x 2.15 mm)</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>DC 3.3V</td>
    </tr>
    <tr>
      <td>Max Wireless Speed</td>
      <td>Up to 1200 Mbps</td>
    </tr>
    <tr>
      <td>Operation Temperature</td>
      <td>-20°C to +70°C</td>
    </tr>
    <tr>
      <td>Operation Humidity</td>
      <td>10% to 95% RH (Non-Condensing)</td>
    </tr>
    </table>
</div>

## Supported Devices

All reComputer Seri

- All reComputer Series

## Driver Installation

The RTL8852BE module may be detected by the Jetson as a PCIe device but may not have its driver loaded automatically. You will need to install the driver manually depending on your JetPack version.

```bash
lspci | grep -i network
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/lspci.PNG"/>
</div>



### JetPack 5.x

For JetPack 5, use the [lwfinger/rtw8852be](https://github.com/lwfinger/rtw8852be) driver:

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

For JetPack 6, use the [rtw89](https://github.com/a5a5aa555oo/rtw89) driver:

```bash
git clone https://github.com/a5a5aa555oo/rtw89
cd rtw89
```

Edit the `Makefile` to set the correct kernel headers path:

```diff
# JP 6.2
KDIR ?= /usr/src/linux-headers-5.15.148-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/

# JP 6.0
KDIR ?= /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/makefile.png"/>
</div>

Then build and install:

```bash
make
sudo make install
sudo modprobe rtw89_8852be
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/jp6_install.png"/>
</div>
## Verify the Wireless Module
:::info
The interface name may vary depending on the JetPack version:

- JetPack 5: typically `wlan0`
- JetPack 6: may appear as `wlP1p1s0`

Adjust the interface name in the commands below accordingly.Use following command to figure out:
```bash
ifconfig
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/interface.png"/>
</div>

:::

## Configure the Wireless Network

### Scan for Nearby WiFi Networks

```bash
sudo iw dev wlan0 scan | grep -E "SSID|freq"
```

Replace `wlan0` with your actual interface name if different.

### Connect to a WiFi Network

```bash
sudo nmcli device wifi connect "YOUR_SSID" password "YOUR_PASSWORD" ifname wlan0
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/link_wifi.PNG"/>
</div>

### Verify WiFi 6 Connection

Check the current link status:

```bash
iw dev wlan0 link
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/veryfiy_wifi6.PNG"/>
</div>

The output will show information such as:

- **freq**: The operating frequency (e.g., 5180 MHz corresponds to 5 GHz band)
- **HE-MCS**: The Wi-Fi 6 modulation and coding scheme (e.g., MCS 9 represents the highest coding efficiency)
- **TX/RX rate**: The current transmit and receive speeds

## Bluetooth Configuration

The Bluetooth functionality of the RTL8852BE module can be configured using `bluetoothctl`:

```bash
bluetoothctl
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/bluetooth.png"/>
</div>
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
