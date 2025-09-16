---
description: 在 reComputer 上使用英飞凌 Wi-Fi 模块
title: 在 reComputer 上使用英飞凌 Wi-Fi 模块
keywords:
- reComputer
- Wifi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Use_Infineon_Wifi_Module_on_reComputer
last_update:
  date: 01/10/2024
  author: Youjiang
---

## 介绍

在本文档中，您将学习如何在 reComputer J4012 上使用英飞凌的 Wi-Fi 6/6E 模块。

## reComputer

reComputer J4012 基于 Jetson Orin NX 16GB 构建，是一款功能强大且紧凑的智能边缘盒子，可为边缘带来高达 100 TOPS 的现代 AI 性能，提供比 Jetson Xavier NX 高达 5 倍的性能和比 Jetson AGX Xavier 高达 3 倍的性能。结合 NVIDIA Ampere™ GPU 架构和 64 位操作能力，Orin NX 集成了先进的多功能视频和图像处理以及 NVIDIA 深度学习加速器。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/5.png"/></div>


## 英飞凌 Wi-Fi 模块

英飞凌的 Wi-Fi 解决方案支持 Wi-Fi 6/6E 功能，具备三频能力（2.4G、5G、6G）。其功能改善了覆盖范围、功耗效率、网络稳健性和安全性，同时降低了总物料清单成本和板卡空间。该解决方案在拥挤的网络环境中提供卓越的高质量视频/音频流和无缝连接体验，并通过在 6G 频谱中运行显著降低延迟。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/wifi_module.png"/></div>

<div align="center">（图片来自 Embedded Artists：2EA M.2 模块由 Embedded Artists 和 Murata 共同开发，专为评估、集成和易用性而设计。）</div>


## 硬件连接
**步骤 1.** 准备所有将要使用的材料。
- 配备 Jetpack 5.1.2 的 reComputer J4012
- 英飞凌 Wi-Fi 模块
- 2 个 IPEX 转 SMA 母头外部天线适配器和 SMA 公头天线（用于 WIFI 模块）
- 十字螺丝刀和螺丝

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware.jpg"/></div>

**步骤 2.** 将无线模块插入 M.2 Key E 端口。并将 2 个 IPEX 插头插入无线模块的相应插座。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware_connection.jpg"/></div>

## 安装软件驱动程序

**步骤 1.** 下载并上传英飞凌 [WiFi 驱动程序](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQzCwQWQOwhNhhW-VHhKqogBYhan7liy9UY44QE4vhq95A?e=qq0ANC) 到 reComputer。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/download_package.png"/></div>

**步骤 2.** 运行以下命令来运行英飞凌 WiFi 驱动程序。

对于 Jetpack 5.1.x：

```sh
sudo dpkg -i cyw55573-nvidia-jetson-v5.15.58-backports-2.0-1-arm64.deb
```

对于 Jetpack 6：

```sh
sudo rm /lib/modules/5.15.136-tegra/build

sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build

sudo dpkg -i cyw55573-nvidia-jetson-v5.15.58-backports-2.0-1-arm64.deb
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/install_driver.png"/></div>

驱动程序编译需要一些时间。

然后，您需要重启 reComputer：

```sh
sudo reboot
```

**步骤 3.** 使用以下命令检查 wlan0 接口是否可用：

```sh
ifconfig
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/ifconfig.png"/></div>

:::caution
  如果您之前通过 `sudo apt-get install iwlwifi-modules -y` 安装了英特尔无线驱动程序，您需要在继续之前卸载此软件包。存在已知的向后移植兼容性问题。

  英特尔和英飞凌的无线驱动程序都使用向后移植兼容模块，您不能同时安装所有这些模块，否则内核会出现 `compat: exports duplicate symbol backport dependency symbol (owned by iwlwifi compat)` 错误。

  通过卸载英特尔的无线驱动程序，您可以使用英飞凌的无线驱动程序：

  ```sh
  sudo apt-get remove backport-iwlwifi-dkms
  ```
  通过卸载英飞凌的无线驱动程序，您可以使用英特尔的无线驱动程序：
  ```sh
  sudo dpkg -r cyw55573-nvidia-jetson-v5.15.58-backports
  ```

:::

**步骤 4.** 连接到 Wi-Fi 网络

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/></div>


## 可行性测试
使用浏览器打开网页来测试网络是否正常工作。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/test.png"/></div>

## 技术支持

请随时将问题提交到我们的[论坛](https://forum.seeedstudio.com/)。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>