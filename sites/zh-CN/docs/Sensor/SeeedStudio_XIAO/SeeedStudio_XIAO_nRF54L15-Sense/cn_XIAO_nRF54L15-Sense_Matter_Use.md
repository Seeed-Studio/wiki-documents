---
title: Seeed Studio XIAO nRF54L15 Matter
description: |
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /xiao_nrf54l15_sense_matter
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

Nordic Semiconductor 的 nRF54L15 是一款新一代超低功耗无线 SoC，专为物联网设计。它支持多种协议，包括 Matter、Thread、Zigbee、Bluetooth LE 和 NFC，使开发者能够构建具有互操作性且面向未来的智能家居设备。

随着由 Connectivity Standards Alliance (CSA) 推动的统一连接标准 Matter 的兴起，nRF54L15 提供了一个强大的开发平台，用于探索和验证 Matter 应用。其高性能、低功耗以及集成的多协议射频，使其非常适合消费级智能家居产品和工业物联网设备。

在本篇文档中，我们将逐步介绍 Nordic SDK 中适用于 nRF54L15 的 Matter 示例应用。这些示例展示了设备配网、安全通信，以及与 Apple HomeKit、Google Home 和 Amazon Alexa 等常见生态系统交互等关键特性。


## 前置准备

要在 XIAO nRF54L15 上开始开发 Matter 应用，请确保已准备好以下软硬件组件。

### 硬件

- Seeed Studio XIAO nRF54L15 开发板。
- 支持 Matter 的 Hub（例如 [Amazon - Echo Dot](https://www.amazon.com/Amazon-vibrant-helpful-routines-Charcoal/dp/B09B8V1LZ3?th=1)），用于连接到 Matter 网络。
- Matter Controller（例如 Amazon Alexa App），用于管理和与您的 Matter 设备进行交互

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15</th>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### 软件

:::tip
在运行示例之前，请确保已经在 nRF Connect SDK 中完成对 XIAO nRF54L15 的配置。如果尚未完成，请参考此 [Wiki](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/) 指南。
:::

## 快速开始使用 Matter 示例

### 创建一个 Matter 例程
在 VSCode 的 nRF Connect 扩展中，选择：Create New Application → Copy Example → 输入 “matter” → 选择 Matter Thermostat

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter_54l15.png" style={{width:900, height:'auto'}}/></div>


在完成烧录后，示例会自动启动 Bluetooth® LE 广播，并为 Matter 设备加入支持 Matter 的 Thread 网络做好准备。该示例使用一个 LED 来显示连接状态。

该示例可以在以下模式之一下运行：

- 模拟温度传感器模式 - 在此模式下，恒温器示例会生成模拟温度测量值并将其打印到终端。这是默认模式，在该模式下示例提供模拟温度值。**（此处我们默认使用该模式）**

- 实际温度传感器模式 - 在此模式下，恒温器示例会绑定到远程 Matter 温度传感器，由其提供真实温度测量值。此模式需要外部传感器集成。



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/1.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/2.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
:::tip
- 请注意，您的 SDK 版本必须为 3.0.2。低于该版本可能会导致错误。

- 目前仅支持两个例程（Matter Thermostat 和 Matter Light Bulb）。后续将逐步增加更多例程。
:::

### 配置开发板

在 board 目录下创建以下两个文件，并分别命名为：

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.overlay)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/3.png" style={{width:600, height:'auto'}}/></div>

导航到 `sysbuild/mcuboot/boards` 目录，并添加以下两个文件：

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.overlay)



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/4.png" style={{width:600, height:'auto'}}/></div>

###  启用分区和 DFU
- [pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/5.png" style={{width:600, height:'auto'}}/></div>


### Sysbuild 配置

- [sysbuild.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/sysbuild.conf)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/00000.png" style={{width:600, height:'auto'}}/></div>


### 构建项目
- 打开 Add Build Configuration 窗口。
- 在 SDK 字段中选择所需版本（例如 nRF Connect SDK v3.0.2）。
- 在 Toolchain 字段中选择匹配的版本。
- Board target：`xiao_nrf54l15/nrf54l15/cpuapp`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/16.png" style={{width:600, height:'auto'}}/></div>


### West Flash 烧录程序
- 打开 nRF 终端
- 只需输入 west flash 命令即可烧录设备。红色高亮的路径表示已编译的 .elf 文件所在位置。你可以使用同一路径找到对应的 .hex 文件，该文件适用于通过 J-Link 调试器进行编程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/30.png" style={{width:900, height:'auto'}}/></div>


### 添加 Matter 设备
在将固件编译并烧录到 XIAO nRF54L15 后，你可以使用 nRF Serial Terminal 工具查看调试日志并获取设备配网用的二维码链接。

**步骤 1.** 打开 Manager Toolchains 并启动 Terminal Tools。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/10.png" style={{width:900, height:'auto'}}/></div>

**步骤 2.** 在侧边栏工具栏中选择 nRF Serial Terminal 以访问串口。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/11.png" style={{width:900, height:'auto'}}/></div>

**步骤 3.** 在弹出的菜单中，选择与你的 XIAO nRF54L15 对应的串口。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/12.png" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 终端打开后，你会在日志中看到打印出的配网二维码链接。复制该链接并在浏览器中打开，以生成 Matter 设备二维码。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/13.png" style={{width:900, height:'auto'}}/></div>

**步骤 5.** 使用支持 Matter 的平台扫描此二维码以添加你的设备。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/14.png" style={{width:900, height:'auto'}}/></div>


## Matter Hub 配置

### 下载 Alexa App
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/app.png" style={{width:900, height:'auto'}}/></div>

### 在 Alexa App 中添加 Matter 设备

- 进入 Home：打开 Alexa App，点击右上角的 “+” 按钮。
- Add Device：在菜单中选择 “Device”。
- 选择设备类型：在设备列表中选择 “Matter”。
- 扫描二维码：在 Matter 设置界面点击 “Scan QR Code”，并扫描你设备上的二维码（或选择输入数字代码）。
<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter7.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter9.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

- 重命名设备：设置完成后，为你的设备命名，例如 “Thermostat”，然后点击 Update Name。
- 设备出现在列表中：添加完成后，你会在 Devices 列表中看到新的 Thermostat。
- 控制设备：打开 Thermostat 控制页面来调节温度（例如，Cool to 79°F，Heat to 68°F），并设置模式（例如，Auto）。

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter4.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/15.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter5.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>


## 项目目录概览

### default_zap/
- thermostat.zap
  - ZAP 配置文件，用于定义 Matter 恒温器应用的簇和属性设置。
- zap-generated/
  - 基于 .zap 配置由 ZAP 工具自动生成的源文件。


### temperature_measurement/

- `sensor.cpp` / `sensor.h`
  - 温度传感器的底层驱动抽象。
  - 负责读取原始温度值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code1.png" style={{width:900, height:'auto'}}/></div>


- `temp_sensor_manager.cpp` / `temp_sensor_manager.h`
  - 管理传感器数据采集。
  - 为更高层组件提供处理后的温度值。
  - temperature_manager.cpp / temperature_manager.h
  - 负责温度控制逻辑。
  - 与 Matter 属性交互（例如当前温度、设定点）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code3.png" style={{width:900, height:'auto'}}/></div>


### 应用层

- `app_task.cpp` / `app_task.h`
  - 定义主应用任务循环。
  - 协调初始化、事件处理以及与 Matter 协议栈的通信。
- main.cpp
  - 应用程序入口。
  - 初始化硬件、Matter 协议栈并启动应用任务。
  - chip_project_config.h
  - Matter 协议栈的项目特定配置。
  - 包含簇定义、属性存储大小以及功能开关。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code2.png" style={{width:900, height:'auto'}}/></div>

### Matter 集成

- `thermostat.matter`
  - 描述恒温器簇、属性和端点的 Matter 设备定义文件。
- `zcl_callbacks.cpp`
  - 实现 Zigbee Cluster Library (ZCL) 的回调函数。
  - 处理属性变化、命令（例如设定点更新）和上报。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code5.png" style={{width:900, height:'auto'}}/></div>

## 参考与资源

如果你是第一次接触 Matter，以下资源可以为你提供基础知识和开发支持，帮助你在 Matter 生态系统中开展工作：

- **[Quick-Start Guides](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**：学习 Matter 基础知识的理想起点，涵盖生态系统的关键概念和组件。
- **[Matter Developer Journey](https://www.silabs.com/wireless/matter/matter-developer-journey)**：贯穿 Matter 开发流程的综合指南，包括所需工具、资源以及高效实现的最佳实践。
- **[Matter Specifications](https://csa-iot.org/developer-resource/specifications-download-request/)**：Matter 协议及其组件的技术规范。这是理解协议能力和运行细节的主要参考资料。
- **[The Device Data Model - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**：对设备数据模型的深入讲解，该模型标准化了在 Matter 生态系统中表示设备特性和能力的方式。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
