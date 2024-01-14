---
description: Use Infineon Wi-Fi Module on reComputer
title: Use Infineon Wi-Fi Module on reComputer
keywords:
- reComputer
- Wifi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Use_Infineon_Wifi_Module_on_reComputer
last_update:
  date: 01/10/2024
  author: Youjiang
---

## Introduction 

In this document, you will learn how to use Infineon’s Wi-Fi 6/6E module on reComputer J4012.

## reComputer

reComputer J4012 is built with Jetson Orin NX 16GB a powerful and compact intelligent edge box to bring up to 100 TOPS modern AI performance to the edge, which offers up to 5X the performance of Jetson Xavier NX and up to 3X the performance of Jetson AGX Xavier. Combining the NVIDIA Ampere™ GPU architecture with 64-bit operating capability, Orin NX integrates advanced multi-function video and image processing, and NVIDIA Deep Learning Accelerators.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/5.png"/></div>


## Infineon Wi-Fi Module

Infineon’s Wi-Fi  solution supports Wi-Fi 6/6E features, is tri-band capable (2.4G, 5G, 6G). Its features improve range, power efficiency, network robustness, and security, while reducing the total Bill of Materials cost and board space. The solution delivers an exceptional high-quality video/audio streaming and seamless connectivity experience in congested network environments and significantly reduces latency by operating in the 6G spectrum.

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/wifi_module.png"/></div>

<div align="center">(Picture from Embedded Artists: The 2EA M.2 module, co-developed by Embedded Artists and Murata, is designed for evaluation, integration and ease-of-use.)</div>


## Hardware connection
**Step 1.** Prepare all materials that will be used.
- reComputer J4012 equipped with Jetpack 5.1.2
- Infineon Wi-Fi Module
- 2 x IPEX to SMA Female External Antenna Adapter and SMA Male Antenna for WIFI Module
- Phillips screwdriver and screws

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware.jpg"/></div>

**Step 2.** Insert the wireless module into the M.2 Key E port. And insert 2 IPEX plugs into the corresponding sockets of the wireless module.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware_connection.jpg"/></div>

## Install the software driver

**Step 1.** Download and upload the Infineon [WiFi driver](https://community.infineon.com/gfawx74859/attachments/gfawx74859/WiFiBluetoothLinux/2968/2/cyw55573-jetson-orin-agx-1.0-1-arm64.deb.zip) and [hostap installation package](https://community.infineon.com/gfawx74859/attachments/gfawx74859/WiFiBluetoothLinux/2968/1/ifx-hostap-jetson-2.10-arm64.deb.zip) to reComputer.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/download_package.png"/></div>

**Step 2.** Open a terminal on reComputer and run the following command to install the Infineon hostap(wpa_supplicant/hostapd) package，you only need to run this step once:

```sh
sudo killall wpa_supplicant
sudo dpkg -i  ifx-hostap-jetson-2.10-arm64.deb
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/install_hostap.png"/></div>

**Step 3.** Run the following command to run Infineon WiFi driver, you need to run this step after system boot up every time:

```sh
sudo dpkg -i cyw55573-jetson-orin-agx-1.0-1-arm64.deb
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/install_driver.png"/></div>

**Step 4.** Use the following command to check if the wlan0 interface is available:

```sh
ifconfig
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/ifconfig.png"/></div>


**Step 5.** Connect to  Wi-Fi network

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/></div>


## Feasibility testing
Use the browser to open a web page to test whether the network is working properly.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/test.png"/></div>

## Tech Support

Please do not hesitate to submit issues into our [forum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>