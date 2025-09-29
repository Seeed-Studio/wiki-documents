---
description: SenseCAP S2110 传感器构建器概述
title: SenseCAP S2110 传感器构建器
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger
last_update:
  date: 11/20/2023
  author: Matthew
---

<!-- This wiki has been devided into 3 parts. -->

# SenseCAP S2110 传感器构建器

SenseCAP S2110 传感器构建器是一个突破性的解决方案，能够融合工业级模块和创客级模块。它是一个开源工具，具有将 500+ 个 Grove 模块构建为 RS485 功能模块的能力。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-105.jpg"/></div>

## 概述

### 小巧物件，工业级功能

它采用 Seeed Studio XIAO RP2040 作为双核 ARM Cortex M0+ 处理器，具有一个 Grove 和一个 RS485 连接器，使开发者能够连接 500+ 个 Grove 传感器和各种 MODBUS RS485 传感器，为各种物联网应用开发定制的工业级 MODBUS RS485 传感器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/107.jpg"/></div>

### 通过 LoRaWAN® 实现远距离无线数据传输

对于远距离无线应用（LoRaWAN®），开发者可以轻松地将其与 [SenseCAP LoRaWAN 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) 连接，将数据传输到 SenseCAP 云端，只需在 SenseCAP Mate 应用中进行 5 分钟的简单蓝牙配置。可以从 SenseCAP 仪表板和 SenseCAP Mate 应用中轻松获得清晰的数据结果和进一步分析。还支持 Helium、TTN、LORIOT 等物联网平台。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-106.jpg"/></div>

## 特性

- **轻松构建 Modbus RS485 工业级传感器：** 通过开源源代码和 IP66 外壳，轻松将 500+ 个现有的 Grove 传感器转换为 Modbus RS485 工业级传感器。6 个最受欢迎的环境 Grove 传感器已经与原生固件完全兼容，更多传感器即将推出
- **SenseCAP 数据记录器和物联网平台兼容：** 通过 SenseCAP 数据记录器转换为 SenseCAP LoRaWAN® 传感器，利用 SenseCAP Mate 应用在 5 分钟内快速轻松设置
- **支持第三方数据记录器和物联网平台：** 除了 SenseCAP 数据记录器，开发者还可以连接到其他支持 Modbus RS485 协议的数据记录器和第三方物联网平台
- **即用型工业级户外外壳：** IP66 防水等级户外外壳，为光线和气体传感器预留了窗口和防水通风孔，还配有定制安装面板，适用于杆式和壁式安装
- **由 Seeed Studio XIAO RP2040 驱动：** 利用强大的 Seeed Studio XIAO RP2040 双核 ARM M0+ 处理器和丰富的开源资源来定制您自己的传感器。通过 USB-C 端口轻松上传代码

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/108.png"/></div>

该产品配有 IP66 工业级外壳以及安装垫和螺丝套件，使您能够轻松安全地在户外部署传感器。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a> <a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-outdoor-lorawan-sensor-kit-based-on-grove-p-5503.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 获取 LoRaWAN 套件 🖱️</font></span></strong></a> </div>

## 使用不同方式开始使用 Builder

作为一个突破性的解决方案，它能够融合工业级模块和创客级模块。有多种方式可以启用 Builder。

### 启用 Builder 与 SenseCAP 数据记录器构建 LoRaWAN 传感器

<div align="center"><img width={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e22011019-sensecap-s2110-lorawan-sensor-kit-first_1_.jpg"/></div>

您可以使用 Grove 传感器构建一个定制的、经济高效的工业级 LoRaWAN 传感器，通过 SenseCAP 数据记录器连接到 SenseCAP 云，实现长距离无线数据传输。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即获取 </font></span></strong></a> </div>

### 添加更多工业级 LoRaWAN Grove 传感器

我们正在寻找更多的 Grove 模块添加到 Builder 中。如果您能加入我们，我们将深感荣幸！查看下面的信息并向我们贡献您的作品（这属于 [Seeed Studio 贡献者计划](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=34120904)）！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/cn/list_of_supported_grove_n_adding_more" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 开始使用 </font></span></strong></a> <a class="get_one_now_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_S2110" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 源代码 </font></span></strong></a> <a class="get_one_now_item" href="https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 🙋 贡献者 </font></span></strong></a> </div>


### 使用 RS485 与 XIAO RP2040 开发板进行开发

由于它由 Seeed Studio XIAO RP2040 供电，并且板上有一个 Grove 连接器。您可以直接将其用作普通开发设备。配合 RS485 连接功能，您可以向 XIAO 添加更多支持 RS485 的传感器，扩展您的项目想法。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Arduino </font></span></strong></a> <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-MicroPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 MicroPython </font></span></strong></a> <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-CircuitPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 CircuitPython </font></span></strong></a></div>

## 出厂固件烧录

现在我们将介绍将固件烧录到 SenseCAP S2110 传感器构建器的步骤。这里我们将烧录初始出厂固件，在开始之前请下载[最新的 uf2 固件](https://github.com/Seeed-Studio/Seeed_Arduino_S2110/releases)。

- **步骤 1：** 拧下 SenseCAP S2110 传感器构建器盖子上的四颗螺丝以打开盖子，并拧下 PG 连接器（用硬币）

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/92.jpg"/></div>

- **步骤 2：** 如果您已经用 4 根线连接了 SenseCAP S2110 传感器构建器和数据记录器，建议移除连接到 SenseCAP S2110 传感器构建器 5V 引脚的红线

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/97.jpg"/></div>

- **步骤 3：** 将 USB Type-C 线缆的一端连接到 SenseCAP S2110 传感器构建器。按住 **B** 按钮的同时，将 USB 线缆的另一端连接到 PC 以进入大容量存储模式。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/98.jpg"/></div>

- **步骤 4：** 如果 PC 上显示了 **RPI-RP2** 磁盘且 XIAO 上的电源 LED 亮起，则连接完成。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/91.png"/></div>

- **步骤 5：** 将 sensorBuilder.ino.uf2 固件文件复制到 **RPI-RP2** 磁盘中。

固件烧录完成后，**RPI-RP2** 磁盘将消失。

## 资源

- **[GitHub]** [SenseCAP S2110 传感器构建器源代码](https://github.com/Seeed-Studio/Seeed_Arduino_S2110)

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
