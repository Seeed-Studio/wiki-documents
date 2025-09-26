---
title: Seeed Studio XIAO nRF54L15 Matter
description: |
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /cn/xiao_nrf54l15_sense_matter
keywords:
  - XIAO
  - nRF54L15
  - Matter
last_update:
  date: 9/22/2025
  author: Jason
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';


## 介绍

Nordic Semiconductor 的 nRF54L15 是为物联网设计的下一代超低功耗无线 SoC。它支持多种协议，包括 Matter、Thread、Zigbee、Bluetooth LE 和 NFC，使开发者能够构建可互操作且面向未来的智能家居设备。

随着 Matter 作为连接标准联盟（CSA）推广的统一连接标准的兴起，nRF54L15 提供了一个强大的开发平台来探索和验证 Matter 应用。其高性能、低功耗和集成的多协议无线电使其非常适合消费级智能家居产品和工业物联网设备。

在本文档中，我们将介绍 nRF54L15 的 Nordic SDK 中可用的 Matter 示例应用程序。这些示例演示了关键功能，如设备入网、安全通信以及与 Apple HomeKit、Google Home 和 Amazon Alexa 等常见生态系统的交互。


## 先决条件

要开始在 XIAO nRF54L15 上开发 Matter 应用程序，请确保以下硬件和软件组件已准备就绪。

### 硬件
- Seeed Studio XIAO nRF54L15 开发板
- 支持 Matter 的集线器（例如 Echo Dot）

### 软件

:::tip
在运行示例之前，请确保 XIAO nRF54L15 已在 nRF Connect SDK 中配置。如果尚未完成，请参考此 [Wiki](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/) 指南。
:::

## Matter 示例快速入门

### 创建 Matter 例程
在 VSCode 的 nRF Connect 扩展中，选择：Create New Application → Copy Example → 输入 "matter" → 选择 Matter Thermostat
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/1.png" style={{width:900, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/2.png" style={{width:900, height:'auto'}}/></div>
:::tip
- 请注意，您的 SDK 版本必须是 3.0.2。低于此版本可能会导致错误。

- 目前仅支持两个例程。未来将逐步添加更多例程。
:::

### 配置开发板

在 board 目录下创建以下两个文件，分别命名为

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.overlay)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/3.png" style={{width:600, height:'auto'}}/></div>

导航到 `sysbuild/mcuboot/boards` 目录并添加以下两个文件：

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.overlay)



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/4.png" style={{width:600, height:'auto'}}/></div>

### 启用分区和 DFU
- [pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/5.png" style={{width:600, height:'auto'}}/></div>

### 构建项目
- 打开 Add Build Configuration 窗口。
- 在 SDK 字段中，选择所需版本（例如 nRF Connect SDK v3.0.2）。
- 在 Toolchain 字段中，选择匹配的版本。
- 对于 Board target：`xiao_nrf54l15/nrf54l15/cpuapp`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/16.png" style={{width:600, height:'auto'}}/></div>


### West Flash 烧录程序
- 打开 nRF 终端
- 只需输入 west flash 命令，要烧录您的设备，只需输入 west flash 命令。红色高亮显示的路径表示您编译的 .elf 文件的位置。您可以使用相同的路径找到相应的 .hex 文件，该文件适用于使用 J-Link 调试器进行编程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/30.png" style={{width:900, height:'auto'}}/></div>


### 添加 Matter 设备
编译并将固件烧录到 XIAO nRF54L15 后，您可以使用 nRF Serial Terminal 工具查看调试日志并获取设备配网二维码。

**步骤 1.** 打开 Manager Toolchains 并启动 Terminal Tools。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/10.png" style={{width:900, height:'auto'}}/></div>

**步骤 2.** 在侧边栏工具栏中，选择 nRF Serial Terminal 以访问串口。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/11.png" style={{width:900, height:'auto'}}/></div>

**步骤 3.** 从弹出菜单中，选择与您的 XIAO nRF54L15 对应的串口。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/12.png" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 终端打开后，您将在日志中看到打印的配网二维码链接。复制此链接并在浏览器中打开以生成 Matter 设备二维码。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/13.png" style={{width:900, height:'auto'}}/></div>

**步骤 5.** 使用兼容 Matter 的平台扫描此二维码以添加您的设备。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/14.png" style={{width:900, height:'auto'}}/></div>

## 参考资料与资源

如果您是 Matter 新手，以下资源提供了在 Matter 生态系统中工作的基础知识和开发支持：

- **[快速入门指南](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**：学习 Matter 基础知识的理想起点，涵盖生态系统的基本概念和组件。
- **[Matter 开发者之旅](https://www.silabs.com/wireless/matter/matter-developer-journey)**：Matter 开发过程的综合指南，包括有效实施所需的工具、资源和最佳实践。
- **[Matter 规范](https://csa-iot.org/developer-resource/specifications-download-request/)**：Matter 协议及其组件的技术规范。这是了解协议功能和操作细节的主要资源。
- **[设备数据模型 - Google Home 开发者](https://developers.home.google.com/matter/primer/device-data-model)**：设备数据模型的深入解释，该模型标准化了设备功能和能力在 Matter 生态系统中的表示方式。
- **[Matter 开发框架概述](/cn/matter_development_framework)**：专门为 XIAO ESP32C6 的 Matter 开发框架量身定制的指南，为 Matter 设备开发提供了另一种方法。

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
