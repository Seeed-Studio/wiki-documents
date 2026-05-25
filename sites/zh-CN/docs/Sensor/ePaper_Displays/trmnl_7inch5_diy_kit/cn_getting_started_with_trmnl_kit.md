---
description: 本页面是 TRMNL 7inch5(OG) DIY Kit 的导航页面。
title: TRMNL 7.5inch(OG) DIY Kit 入门指南
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.webp
slug: /trmnl_7inch5_diy_kit_main_page
sidebar_position: 1
last_update:
  date: 06/29/2025
  author: Allen
createdAt: '2025-07-16'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/cn/trmnl_7inch5_diy_kit_main_page/
---

# TRMNL 7.5" (OG) DIY Kit 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

### 产品概述

TRMNL 7.5" (OG) DIY Kit 由 Seeed Studio 与 TRMNL 联合开发，是一款多功能电子墨水开发方案。它集成了 7.5 英寸 800×480 单色电子墨水屏、XIAO ESP32-S3 PLUS 驱动板、2000 mAh 可充电电池以及 10cm FPC 延长线。该套件与 TRMNL BYOD 生态系统完全兼容，可通过 375+ 插件和 8 种布局实现零代码仪表盘搭建，非常适合 DIY 爱好者、智能家居界面以及创意数字标牌应用。

### 产品特性

<!-- :::tip
To celebrate the collaboration, Team TRMNL offers 30% off on TRMNL BYOD firmware access (35 dollar, usually for 50 dollar). Use code **trmnl-seeed-diy** at checkout (first 200 customers, 1 per customer). First come, first serve!
::: -->

- **TRMNL BYOD 兼容性**：用于构建 TRMNL 7.5'' OG 设备的官方套件，支持 375+ 插件和 8 种零代码布局（如日历、Shopify、GitHub）
- **7.5" 电子墨水屏**：800×480 单色显示，支持局部刷新（0.34s）和全屏刷新（3.5s）
- **高能效设计**：2000mAh 电池在深度睡眠模式下（6 小时刷新间隔）可提供最长 3 个月续航
- **双生态支持**：兼容 Home Assistant（通过 ESPHome）和 Arduino IDE，可进行自定义开发
- **开源外壳**：在 Printables 和 Thingiverse 上提供，便于个性化定制

### 规格参数

| 参数 | 描述 |
| --- | --- |
| MCU | 板载 XIAO ESP32-S3 Plus 的 XIAO 电子墨水显示开发板 |
| Display | 7.5 英寸单色电子墨水显示屏 |
| Resolution | 800x480 |
| Operating Voltage | 5V |
| Battery | 2000mAh 可充电锂电池（深度睡眠模式下电池寿命 3 个月） |
| Operating Temperature | -40°C 至 85°C |
| Enclosure | 不包含（在 Printables 和 Thingiverse 上提供开源设计） |

## 硬件概览

### 组件示意图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/overview.png" style={{width:600, height:'auto'}}/></div>

### 清单

| 产品 | 数量 |
| --- | --- |
| XIAO 电子墨水显示开发板（XIAO ESP32-S3 Plus） | 1 |
| 7.5 英寸单色电子墨水显示屏（800×480） | 1 |
| FPC 延长线（10 cm） | 1 |
| FPC 连接器 | 1 |
| 2000mAh 可充电锂电池 | 1 |

## 入门

### 设备安装

**步骤 1. 将显示屏连接到驱动板**  
将 FPC 线缆与 XIAO 电子墨水显示板上的连接器对齐，然后扣上卡扣以确保连接牢固。  

:::tip
FPC 线缆的金属面应朝上，否则屏幕不会显示任何内容。

请按照下面的安装教程操作，很多人都会装错。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 2. 连接电池**  
将电池线缆连接到驱动板上的 JST 接口，确保极性正确（红线接 +，黑线接 -）。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 3. 外壳组装（可选）**  

:::tip
请注意，屏幕的软排线非常脆弱，操作时务必小心。如果损坏，整个屏幕将无法工作。
:::
从[资源部分](#资源)中打印开源外壳部件，并将组件装入其中。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

首先，组装驱动板和电池。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

测试 TRMNL 套件是否工作正常。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

将屏幕插入外壳，并让 FPC 线缆能够从外壳中引出。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

连接 FPC 延长线并组装整个外壳。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

L 型外壳的组装方式也非常相似。

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
如果你的 TRMNL 套件离路由器较远，可以将天线移到外壳外面，这样性能会更好。
:::

## Wiki 中心

### 浏览详细指南

#### 1. [TRMNL BYOD 生态系统教程](https://wiki.seeedstudio.com/cn/reterminal_e10xx_trmnl/)

了解如何使用 TRMNL BYOD 平台及其 375+ 插件，为你的工作和生活创建零代码仪表盘。

#### 2. [适配 Home Assistant](https://wiki.seeedstudio.com/cn/ogdiy_kit_works_with_esphome)

学习如何通过 ESPHome 将 TRMNL 套件接入 Home Assistant，包括固件烧录和基础编程。

#### 3. [适配 Arduino](https://wiki.seeedstudio.com/cn/ogdiy_kit_works_with_arduino/)

掌握使用 Arduino 控制 TRMNL 套件的方法，包括刷新机制、图形渲染以及电源管理。

## <span id="resource">资源</span>

- **[Firmware]** [TRMNL 电子墨水库 (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[Hardware]** [驱动板原理图](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[Printable]** [三角底座](https://www.printables.com/model/1354873)  
- **[Printable]** [带保护的三角底座](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)  
- **[Printable]** [L 型底座](https://www.printables.com/model/1354879)  
- **[Thingiverse]** [三角底座](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [带保护的三角底座](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [L 型底座](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [三角底座](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [带保护的三角底座](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [L 型底座](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

## 技术支持与产品讨论

感谢你选择我们的产品！我们提供多种支持渠道：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
