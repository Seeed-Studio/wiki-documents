---
description: 在 reComputer 上接入英飞凌 Wi-Fi 模组
title: 在 reComputer 上接入英飞凌 Wi-Fi 模组
keywords:
- reComputer
- Wifi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Use_Infineon_Wifi_Module_on_reComputer
last_update:
  date: 01/10/2024
  author: Youjiang
---

## 在 reComputer 上接入英飞凌 Wi-Fi 模组

在本文档中，您将学习如何在reComputer J4012上使用Infineon的Wi-Fi 6/6E模块。

## reComputer

reComputer J4012采用Jetson Orin NX 16GB构建，这是一个功能强大且紧凑的智能边缘盒，为边缘带来高达100 TOPS的现代人工智能性能，比Jetson Xavier NX快高达5倍，比Jetson AGX Xavier快高达3倍。Jetson Orin NX将NVIDIA Ampere™ GPU架构与64位操作能力相结合，集成了先进的多功能视频和图像处理以及NVIDIA深度学习加速器。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/5.png"/></div>


## 英飞凌Wi-Fi模块

英飞凌的Wi-Fi解决方案支持Wi-Fi 6/6E功能，具备三频段能力（2.4G、5G、6G）。其功能提高了范围、功率效率、网络稳定性和安全性，同时降低了材料成本和电路板空间。该解决方案在拥挤的网络环境中提供出色的高质量视频/音频流媒体和无缝连接体验，并通过在6G频谱中运行显著降低延迟。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/wifi_module.png"/></div>

<div align="center">(从嵌入式艺术家图片：由嵌入式艺术家和村田共同开发的2EA M.2模块旨在评估、集成和易用性。)</div>


## 硬件连接
**第一步。** 准备所有将要使用的材料。
- 搭载Jetpack 5.1.2的reComputer J4012
- Infineon Wi-Fi模块
- 2个IPEX转SMA母外置天线适配器和WIFI模块用的SMA公天线
- 菲利普斯螺丝刀和螺丝

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware.jpg"/></div>

**步骤2。**将无线模块插入M.2 Key E插槽。并将2个IPEX插头插入无线模块的对应插座。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware_connection.jpg"/></div>

## 安装软件驱动程序。

**步骤1。**下载并上传 Infineon [WiFi 驱动程序](https://community.infineon.com/gfawx74859/attachments/gfawx74859/WiFiBluetoothLinux/2968/2/cyw55573-jetson-orin-agx-1.0-1-arm64.deb.zip) 和 [hostap 安装包](https://community.infineon.com/gfawx74859/attachments/gfawx74859/WiFiBluetoothLinux/2968/1/ifx-hostap-jetson-2.10-arm64.deb.zip) 到 reComputer。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/download_package.png"/></div>

**步骤2.** 在 reComputer 上打开一个终端，并运行以下命令来安装 Infineon hostap（wpa_supplicant/hostapd）软件包，您只需运行此步骤一次：

```sh
sudo killall wpa_supplicant
sudo dpkg -i  ifx-hostap-jetson-2.10-arm64.deb
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/install_hostap.png"/></div>

**第三步。** 运行以下命令来运行Infineon WiFi驱动程序，每次系统启动后都需要运行此步骤：

```sh
sudo dpkg -i cyw55573-jetson-orin-agx-1.0-1-arm64.deb
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/install_driver.png"/></div>

**第四步。** 使用以下命令检查wlan0接口是否可用：

```sh
ifconfig
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/ifconfig.png"/></div>


**步骤5.** 连接到Wi-Fi网络

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/></div>


## 可行性测试.
请使用浏览器打开一个网页，测试网络是否正常工作。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/test.png"/></div>

## 技术支持

请随时在我们的[论坛](https://forum.seeedstudio.com/)中提交问题。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>