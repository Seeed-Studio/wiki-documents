---
description: H28K 数据手册
title: H28K 简介
keywords:
- 网络
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/H28K_Datasheet
last_update:
  date: 12/07/2023
  author: Parker
---

<!-- ---
name: 带有 8GB eMMC 和 QWRT 支持的 H28K 路由器
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: *******
tags:
--- -->

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/Overview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H28K-0208-p-5848.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

LinkStar-H28K 配备了两个使用 PCIE/RGMII 千兆技术的千兆网络端口和一个四核芯片。它拥有 4GB 的 LPDDR4X 内存和 8GB 的 eMMC 存储，可通过 TF 卡扩展至 512GB。此外，它还支持 5V-12V 的 Type-C PD（电源传输）功能。在本维基中，我们将向您展示硬件概览。

## 硬件概览

以下是 H28K 的硬件概览，我们将在此为您展示每个组件的详细信息。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/29.png" /></div>

## 特性

- **高速稳定的网络端口**：配备双千兆以太网端口，采用 PCIE/RGMII 技术。无适配器的网络端口使速度更加稳定。
- **先进的四核处理器**：搭载高性能 RK3528 四核 ARM Cortex-A53 @1.5 GHz 芯片，提供高效的处理能力，确保运行流畅可靠。
- **PD 电源传输功能**：配备先进的 5V-12V Type-C 接口，支持 PD（电源传输）。
- **可扩展的存储和内存**：内置 2GB LPDDR4 内存和 8GB eMMC 存储，支持 TF 卡扩展，最大容量可达 512GB。
- **紧凑便携的设计**：尺寸仅为 55.2 x 65.15 x 22.6 mm，小巧的设计便于集成到任何环境中。
- **操作系统**：QWRT（基于 OpenWRT）

## 规格

| **参数**       | **详情**                                                     |
| -------------- | ----------------------------------------------------------- |
| 处理器         | RK3528 四核 ARM Cortex-A53 @1.5 GHz                          |
| 内存           | 2GB/4GB LPDDR4X                                             |
| 存储           | 板载 8GB eMMC                                               |
|                | 1× TF 卡插槽用于存储扩展（最大支持 512GB）                   |
| 网络           | 1x PCIe + 1x RGMII 千兆以太网端口                           |
| USB            | 1x USB Type-C，用于电源供电；1x USB 2.0 Type-A              |
| 电源供电       | 5V-12V Type-C（PD）                                         |
| 尺寸           | 55.2\*65.15\*22.6mm                                        |

## 指示灯

| 电源指示灯                 | 工作指示灯                 | WAN 指示灯                   | LAN 指示灯                   |
| -------------------------- | -------------------------- | ---------------------------- | ---------------------------- |
| 正常电源连接指示           | 系统运行指示               | WAN 端口连接指示             | LAN 端口连接指示             |

## 快速开始

H28K 路由器未预装系统。您需要按照以下教程手动安装操作系统。[H28K-安装系统](/cn/H28K-install-system)

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>