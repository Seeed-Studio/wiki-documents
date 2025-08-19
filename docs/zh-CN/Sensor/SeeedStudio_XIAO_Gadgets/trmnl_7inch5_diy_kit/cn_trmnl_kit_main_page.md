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
TRMNL 7.5" (OG) DIY 套件由 Seeed Studio 和 TRMNL 联合开发，是一款多功能电子墨水开发解决方案。它结合了 7.5 英寸 800×480 单色电子墨水显示屏、XIAO ESP32-S3 PLUS 驱动板、2000 mAh 可充电电池和 10cm FPC 延长线。完全兼容 TRMNL BYOD 生态系统，该套件支持无代码仪表板构建，拥有超过 375 个插件和 8 种布局，非常适合 DIY 爱好者、智能家居界面和创意数字标牌。

### 特性
:::tip
为庆祝此次合作，TRMNL 团队为 TRMNL BYOD 固件访问提供 30% 折扣（35 美元，原价 50 美元）。结账时使用代码 **trmnl-seeed-diy**（前 200 名客户，每人限用一次）。先到先得！
:::

- **TRMNL BYOD 兼容性**：构建 TRMNL 7.5'' OG 设备的官方套件，拥有 375+ 插件和 8 种无代码布局（如日历、Shopify、GitHub）
- **7.5" 电子墨水显示屏**：800×480 单色显示屏，支持局部刷新（0.34秒）和全屏刷新（3.5秒）
- **节能设计**：2000mAh 电池在深度睡眠模式下可提供长达 3 个月的运行时间（6 小时刷新间隔）
- **双生态系统支持**：兼容 Home Assistant（通过 ESPHome）和 Arduino IDE 进行自定义开发
- **开源外壳**：在 Printables 和 Thingiverse 上提供，便于自定义

### 规格参数
| 参数 | 描述 |
| --- | --- |
| MCU | XIAO ePaper 显示开发板，板载 XIAO ESP32-S3 Plus |
| 显示屏 | 7.5 英寸单色电子纸显示屏 |
| 分辨率 | 800x480 |
| 工作电压 | 5V |
| 电池 | 2000mAh 可充电锂离子电池（深度睡眠模式下 3 个月电池寿命） |
| 工作温度 | -40°C 至 85°C |
| 外壳 | 不包含（Printables 和 Thingiverse 上有开源设计） |

## 硬件概述
### 组件图
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_7.5_Epaper_Panel/hardware_components.jpg" style={{width:1000, height:'auto'}}/></div>

### 零件清单
| 产品 | 数量 |
| --- | --- |
| XIAO ePaper 显示开发板（XIAO ESP32-S3 Plus） | 1 |
| 7.5 英寸单色电子纸显示屏（800×480） | 1 |
| FPC 延长线（10 cm） | 1 |
| FPC 连接器 | 1 |
| 2000mAh 可充电锂离子电池 | 1 |

## 入门指南
### 设备安装
**步骤 1. 连接显示屏到驱动板**  
将 FPC 线缆与 XIAO ePaper 显示板上的连接器对齐，然后固定锁扣以确保牢固连接。  

:::tip
FPC 线缆的金属面应朝上，否则不会显示任何内容。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 2. 连接电池**  
将电池线缆连接到驱动板上的 JST 连接器，确保极性正确（红线接 +，黑线接 -）。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 3. 外壳组装（可选）**  
从 [Printables](https://www.printables.com/) 打印开源外壳零件，并将组件装配到内部。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>


## Wiki 中心
### 探索详细指南

#### 1. [TRMNL BYOD 生态系统教程](https://wiki.seeedstudio.com/cn/ogdiy_kit_works_with_trmnl/)

了解如何使用拥有 375+ 插件的 TRMNL BYOD 平台，包括为您的工作和生活创建无代码仪表板。

#### 2. [与 Home Assistant 配合使用](https://wiki.seeedstudio.com/cn/ogdiy_kit_works_with_esphome)

学习如何通过 ESPHome 将您的 TRMNL 套件与 Home Assistant 配置，包括固件上传和基础编程。

#### 3. [与 Arduino 配合使用](https://wiki.seeedstudio.com/cn/ogdiy_kit_works_with_arduino/)

掌握使用 Arduino 控制 TRMNL 套件，包括刷新机制、图形渲染和电源管理。

## 资源
- **[固件]** [TRMNL ePaper 库（GitHub）](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)   
- **[硬件]** [驱动板原理图](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[可打印文件]** [三角形底座](https://www.printables.com/model/1354873)  
- **[可打印文件]** [L 形底座](https://www.printables.com/model/1354879)  
- **[Thingiverse]** [三角形底座](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [L 形底座](https://www.thingiverse.com/thing:7091096)

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