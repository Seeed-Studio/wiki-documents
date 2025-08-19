---
description: EdgeBox RPi 200 balena OS 设置
title: EdgeBox RPi 200 balena OS 设置
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edgebox-rpi-200-balena-OS-setup
last_update:
  date: 07/20/2023
  author: Marc Pous & Peter Pan
---

## 什么是 balena？

balena 是一个物联网 (IoT) 平台，旨在帮助开发者构建、部署和管理跨设备集群的 IoT 应用程序。它支持多种设备架构，并包含用于容器化应用程序部署的功能，使您能够轻松更新 IoT 软件和 HostOS、修复漏洞以及在 IoT 应用程序中引入新功能。balena 提供了一种统一的方式来推送代码更新、管理设备配置，并确保设备在现场可靠、安全地运行，无论设备的位置或网络条件如何。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

balenaOS 是 balena 生态系统的核心组件。balenaOS 是一个开源的基于 Linux 的操作系统，由 balena 制作，专为通过 balenaEngine（一个轻量级、针对 IoT 设备优化的容器引擎）运行容器化应用程序而设计。它针对可靠性、稳健性和安全性进行了优化，这些都是 IoT 和边缘计算环境中的关键因素。基于 Yocto 项目构建的 balenaOS 支持超过 100 种不同的硬件平台，并包含内置功能，例如主机操作系统更新和用于控制应用程序的 supervisor API。通过利用 Docker 容器，balenaOS 确保了应用程序的可移植性并简化了开发过程。

balenaCloud 提供了一个集中式仪表板，用于管理您的 IoT 设备集群。它通过远程更新、设备和应用程序监控、故障排除以及安全设备访问等功能简化了设备管理。使用 balenaCloud，您可以轻松监控如何通过单次 git push、balena CLI push 或您选择的内置持续集成和持续部署，将应用程序部署到一个设备或数千个设备。对于任何希望高效管理 IoT 设备集群及其运行的软件和主机操作系统的人来说，balena 是一个可扩展且稳健的 IoT 解决方案。

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPI-200 系列是基于 Raspberry Pi 的一体化工业边缘计算控制器，结合了多种工业用途。它被设计为高扩展性和坚固的工业硬件，配备丰富的 IO 资源，并由强大的 Raspberry Pi 工业软件生态系统支持，是智能自动化和工业物联网 (IIoT) 解决方案的理想选择。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 前置条件

在本文档中，您将学习如何将 balenaOS 刷写到 Seeed Studio EdgeBox-RPI-200，以减少更新软件和运行在 EdgeBox-RPI-200 设备上的主机操作系统的摩擦。

### 硬件

* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
* [双千兆以太网 NIC 扩展板](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)，用于将操作系统刷写到 EdgeBox-RPI-200 中的 CM4。
* DIN 导轨电源 24V (DC)，本文使用 `Mean Well HDR-100-24 AC-DC`。
* 用于连接电源和 EdgeBox-RPI-200 的电缆。

### 软件

* 一个 [balenaCloud](https://balena.io) 账户（在此注册），前 10 个设备免费。
* [balenaEtcher](https://etcher.balena.io/) 用于刷写 CM4 的存储。

## 在 EdgeBox RPI200 上刷写 balenaOS

要在 EdgeBox-RPI-200 上刷写 balenaOS，您需要拆卸设备并取出 Raspberry Pi Compute Module 4。

**步骤 1：** 将 EdgeBox-RPI-200 中的 CM4 放入 [双千兆以太网 NIC 扩展板](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)。请参考 [wiki 页面](/cn/Raspberry_pi_CM4_update_eeprom/#put-cm4-emmc-storage-into-usb-mass-storage-mode)，了解如何使用 [双千兆以太网 NIC 扩展板](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) 将 CM4 eMMC 存储设置为 USB 大容量存储模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width={600} height="auto" /></p>

**步骤 2：** 访问 balenaCloud，创建一个免费账户，并为 `Raspberry Pi 4` 或 `CM4` 设备类型创建一个 fleet。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena_cloud.png" alt="pir" width="700" height="auto" /></div>

**步骤 3：** 点击 `Add Device`，并下载包含网络凭证的 balenaOS 镜像。

:::note
请注意，没有 WiFi 天线的 EdgeBox RPI200 将无法连接到您的 WiFi 网络。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/add_new_device.png" alt="pir" width="700" height="auto" /></div>

**步骤 4：** 使用 [balenaEtcher](https://etcher.balena.io/) 将从 balenaCloud 下载的 balenaOS 镜像刷写到 CM4。

**步骤 5：** 刷写成功后，将 CM4 放回 EdgeBox-RPI-200，并使用 DIN 导轨电源适配器为其供电。设备可能会出现在 balenaCloud 仪表板上。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud_1.png" alt="pir" width="700" height="auto" /></div>

## 配置 Phoenix Connector GPIO

要访问 EdgeBox-RPI-200 的 Phoenix Connector GPIO，需要更新默认 balenaOS 镜像的设备树参数。

要通过 `/dev/ttyACM0` 或 `/dev/ttyACM1` 访问 Phoenix Connector GPIO，请进入 `Device Configuration` 并更改 DToverlays。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/config_gpio_on_balena.png" alt="pir" width="700" height="auto" /></div>

设备树在 Define DT overlays 中定义为 `"dwc2","dr_mode=host","w1-gpio"`。在 Define DT parameters 中为默认覆盖添加了参数 `"enable_serial=1"`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edit_dts.png" alt="pir" width="700" height="auto" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>