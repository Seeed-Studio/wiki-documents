---
description: '本页面是 TRMNL 7.5英寸(OG) DIY 套件的导航页面。'
title: TRMNL 7.5英寸(OG) DIY 套件入门指南
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.webp
slug: /cn/trmnl_7inch5_diy_kit_main_page
sidebar_position: 1
last_update:
  date: 06/29/2025
  author: Allen
---

# TRMNL 7.5" (OG) DIY 套件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 介绍

### 产品概述

TRMNL 7.5" (OG) DIY 套件由 Seeed Studio 和 TRMNL 联合开发，是一款多功能的电子墨水开发解决方案。它结合了 7.5 英寸 800×480 单色电子墨水显示屏、XIAO ESP32-S3 PLUS 驱动板、2000 mAh 可充电电池和 10cm FPC 延长线。该套件完全兼容 TRMNL BYOD 生态系统，支持无代码仪表板构建，拥有超过 375 个插件和 8 种布局，非常适合 DIY 爱好者、智能家居界面和创意数字标牌。

### 特性

:::tip
为庆祝此次合作，TRMNL 团队为 TRMNL BYOD 固件访问提供 30% 折扣（35 美元，原价 50 美元）。结账时使用代码 **trmnl-seeed-diy**（前 200 名客户，每人限购 1 个）。先到先得！
:::

- **TRMNL BYOD 兼容性**：构建 TRMNL 7.5'' OG 设备的官方套件，支持 375+ 插件和 8 种无代码布局（如日历、Shopify、GitHub）
- **7.5" 电子墨水显示屏**：800×480 单色显示屏，支持局部刷新（0.34秒）和全屏刷新（3.5秒）
- **节能设计**：2000mAh 电池在深度睡眠模式下可提供长达 3 个月的运行时间（6 小时刷新间隔）
- **双生态系统支持**：兼容 Home Assistant（通过 ESPHome）和 Arduino IDE 进行自定义开发
- **开源外壳**：在 Printables 和 Thingiverse 上提供，便于定制

### 规格参数

| 参数 | 描述 |
| --- | --- |
| MCU | XIAO ePaper 显示开发板，板载 XIAO ESP32-S3 Plus |
| 显示屏 | 7.5 英寸单色电子纸显示屏 |
| 分辨率 | 800x480 |
| 工作电压 | 5V |
| 电池 | 2000mAh 可充电锂离子电池（深度睡眠模式下电池续航 3 个月） |
| 工作温度 | -40°C 至 85°C |
| 外壳 | 不包含（Printables 和 Thingiverse 上有开源设计） |

## 硬件概述

### 组件图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/overview.png" style={{width:600, height:'auto'}}/></div>

### 零件清单

| 产品 | 数量 |
| --- | --- |
| XIAO ePaper 显示开发板 (XIAO ESP32-S3 Plus) | 1 |
| 7.5英寸单色电子纸显示屏 (800×480) | 1 |
| FPC 延长线 (10 cm) | 1 |
| FPC 连接器 | 1 |
| 2000mAh 可充电锂离子电池 | 1 |

## 入门指南

### 设备安装

**步骤 1. 将显示屏连接到驱动板**  
将 FPC 线缆与 XIAO ePaper 显示板上的连接器对齐，然后固定锁扣以确保连接牢固。  

:::tip
FPC 线缆的金属面应朝上，否则不会显示任何内容。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 2. 连接电池**  
将电池线缆连接到驱动板上的 JST 连接器，确保极性正确（红线接 +，黑线接 -）。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 3. 外壳组装（可选）**  

:::tip
请注意屏幕的柔性线缆非常脆弱。操作时请小心。如果损坏，整个屏幕将停止工作。
:::
从[资源部分](#resources)打印开源外壳零件并将组件组装在内。  

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

将屏幕插入外壳并让 FPC 线缆伸出。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

连接 FPC 延长线缆并组装整个外壳。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

L 型外壳的组装非常相似。

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
如果您的 TRMNL 套件距离路由器较远，您可以将天线移到外壳外面。这样会有更好的性能。
:::

## Wiki 中心

### 探索详细指南

#### 1. [TRMNL BYOD 生态系统教程](https://wiki.seeedstudio.com/cn/ogdiy_kit_works_with_trmnl/)

了解如何使用 TRMNL BYOD 平台的 375+ 插件，包括为您的工作和生活创建无代码仪表板。

#### 2. [与 Home Assistant 配合使用](https://wiki.seeedstudio.com/cn/ogdiy_kit_works_with_esphome)

学习如何通过 ESPHome 将您的 TRMNL 套件与 Home Assistant 配置，包括固件上传和基础编程。

#### 3. [与 Arduino 配合使用](https://wiki.seeedstudio.com/cn/ogdiy_kit_works_with_arduino/)

掌握使用 Arduino 控制 TRMNL 套件，包括刷新机制、图形渲染和电源管理。

## <span id="resource">资源</span>

- **[固件]** [TRMNL 电子纸库 (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[硬件]** [驱动板原理图](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[可打印]** [三角形底座](https://www.printables.com/model/1354873)  
- **[可打印]** [保护型三角形底座](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)  
- **[可打印]** [L型底座](https://www.printables.com/model/1354879)  
- **[Thingiverse]** [三角形底座](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [保护型三角形底座](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [L型底座](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [三角形底座](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [保护型三角形底座](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [L型底座](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
