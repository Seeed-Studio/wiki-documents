---
description: HaLowLink 2 Wi-Fi HaLow 网关简介——功能特性、规格参数、硬件概览、包装内容和资源
title: HaLowLink 2 Wi-Fi HaLow 网关
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - MM8108
  - IEEE 802.11ah
  - OpenWrt
  - Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_introduction
sku: 100072966
last_update:
  date: 11/12/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/cn/halowlink2_introduction/
---

# HaLowLink 2 Wi-Fi HaLow 网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-hero.png" alt="HaLowLink 2 Wi-Fi HaLow Gateway standing on a desk with its antenna attached" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>HaLowLink 2 立在支架上，并连接了对应地区的天线。</em></p>

## 介绍

**HaLowLink 2** 是 Seeed Studio 销售的一款 Wi-Fi HaLow（IEEE 802.11ah）网关（SKU **100072966**）。它可以作为 Wi-Fi HaLow **路由器、接入点或扩展器** 工作：创建新的 HaLow 网络、为现有网络增加 HaLow 连接，或将两台设备配对以在视距条件下连接最远 1 km 之外的远程站点（具体取决于环境）。其 **MM8108** 亚 1 GHz 射频芯片提供 HaLow 链路。

配合第二台设备作为扩展器，它还能通过 HaLow 链路将 **2.4 GHz Wi-Fi 热点和有线以太网扩展到远程站点**——这样普通手机、笔记本电脑和 IoT 设备也能加入网络。路由器和接入点配置可在基于 OpenWrt 的设置向导中选择；物理 Mode 按钮用于将设备切换到扩展器模式、启动配对或执行出厂重置。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/HaLowLink-2-Wi-Fi-Halow-Gateway-p-7025.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 特性

<!-- Internal note: features below are taken from the Seeed product page and the official Morse Micro HaLowLink 2 Product Brief (Rev 9), which agree with each other. -->

- **远距离亚 1 GHz Wi-Fi HaLow** —— 基于 MM8108 射频的 IEEE 802.11ah：视距范围最长可达 1 km，相比 2.4 GHz Wi-Fi 具有更好的穿透力，支持 1 / 2 / 4 / 8 MHz 信道带宽，最高 PHY 速率 43.3 Mbps。
- **三种模式，向导或按键切换** —— 可作为 Wi-Fi HaLow 路由器、接入点或扩展器工作。在设置向导中选择路由器或接入点；使用 Mode 按钮将设备切换到扩展器模式并完成配对。
- **HaLow 与 2.4 GHz 双重连接** —— 同时提供 Wi-Fi HaLow 和 2.4 GHz（802.11n，2×2）接入点，使非 HaLow 设备也能加入网络。
- **千兆有线接口** —— 2× 千兆以太网端口（WAN 和 LAN），以及一 个同时承载电源和以太网数据的 USB-C 端口。
- **基于 OpenWrt 的管理** —— 基于 OpenWrt 23.05，提供 Web UI、设置向导、诊断工具、SSH/CLI 以及在线升级。

:::note
43.3 Mbps 是在 8 MHz 带宽下的最大 **PHY（物理层）数据速率**，而不是实际测得的应用层吞吐量；“最长 1 km” 是视距条件下的最大值，并不能在所有环境中得到保证。
:::

## 规格参数

<!-- Internal note (Specifications Audit): every row below was cross-checked between the Seeed product page (primary baseline) and the Morse Micro HaLowLink 2 Product Brief (Rev 9). No conflicts were found as of 2026-11-06. Audit table: D:\SeeedWiki\notes\halowlink2\SPEC_AUDIT.md. Never populate this table with HaLowLink 1 values. -->

### 无线

| 项目 | 参数 |
|:----:|:-----:|
| Wi-Fi HaLow 标准 | IEEE 802.11ah |
| HaLow 模组 / 射频 | AzureWave AW-HM677 / Morse Micro MM8108 |
| 信道带宽 | 1 / 2 / 4 / 8 MHz（取决于地区） |
| 最大 PHY 数据速率 | 8 MHz 带宽下 43.3 Mbps（PHY 速率，非应用层吞吐量） |
| 发射功率 | 最高 26 dBm（取决于地区） |
| 2.4 GHz Wi-Fi | IEEE 802.11n，MediaTek MT7603E，2×2，内置天线 |
| 网络模式 | Wi-Fi HaLow 路由器 / 接入点 / 扩展器 |
| 覆盖范围 | 视距最长 1 km（取决于环境，不作保证） |

### 硬件

| 项目 | 参数 |
|:----:|:-----:|
| CPU | MediaTek MT7621 |
| 内存 / 存储 | 256 MB DRAM / 32 MB NAND Flash |
| 电源输入 | 5 V ⎓ 2 A（USB-C） |
| 工作温度 | 0–40 °C，5–95% RH 无冷凝 |
| 尺寸 / 重量 | 88 × 68 × 24 mm / 102 g（含支架和天线为 168 g） |

### 接口与软件

| 项目 | 参数 |
|:----:|:-----:|
| 以太网 | 2× 千兆以太网端口（标记为 WAN 和 LAN） |
| USB-C | 1× USB-C 端口（电源和以太网数据） |
| 天线接口 | SMA（附带对应地区的外置天线） |
| 控制 / 指示灯 | Mode 按钮；Status、Wi-Fi HaLow 和 Wi-Fi 2.4 GHz 指示灯 |
| 操作系统 | 基于 OpenWrt 23.05（可能随固件更新而变化） |
| 配置方式 | Web UI（HTTPS）和 SSH/CLI（SSH 默认禁用） |
| 管理地址 | `https://192.168.12.1`（默认） |

:::note 区域信息
该产品系列支持的区域市场包括 **美国、加拿大、澳大利亚、英国、欧洲和日本**。在欧盟/英国发射功率限制为 14 dBm，在日本为 16 dBm；可用频段、信道和带宽会因地区型号而异，且在欧盟或英国不支持 EasyMesh / 802.11s Mesh 组网。请使用适用于您所在国家或地区的型号，并配合随附的天线和电源适配器。监管区域无法通过受支持的用户配置进行更改。认证和合规声明适用于特定型号和地区；购买前请确认具体的区域型号。
:::

<!-- Requires Verification (internal): confirm the manufacturer regional part number for Seeed SKU 100072966 and archive the applicable FCC, EU DoC, Japan MIC/Giteki, and Wi-Fi CERTIFIED documents before listing them as certifications of this SKU. The existing specification audit records source agreement, not certificate coverage verification. -->

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-ports.jpg" alt="HaLowLink 2 rear panel with WAN and LAN Ethernet ports and the USB-C power port" width={500} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>后面板：WAN 和 LAN 千兆以太网端口以及 USB-C 电源端口（5 V ⎓ 2 A）；SMA 天线接口位于顶部边缘。</em></p>

| 接口 | 作用 |
|:---------:|:-----|
| 以太网端口（WAN） | 上行链路——连接到现有路由器或网络 |
| 以太网端口（LAN） | 本地网络——连接用于配置的电脑或下游设备 |
| USB-C 端口 | 电源输入（5 V ⎓ 2 A），连接电脑时也可传输以太网数据 |
| SMA 接口 | 外置对应地区的 Wi-Fi HaLow 天线（上电前请先连接） |
| Mode 按钮 | 进入扩展器模式（按住直到 Status 指示灯快速青色闪烁后松开）；启动配对（短按）；执行出厂重置（按住直到 Status 指示灯缓慢绿色闪烁后松开） |

三枚指示灯——**Status**、**Wi-Fi HaLow** 和 **Wi-Fi 2.4 GHz**——用于显示设备状态。在路由器或接入点配置下（两者都承载 HaLow AP），Status 指示灯为常亮绿色；在扩展器模式下为常亮青色。对于扩展器，Wi-Fi HaLow 指示灯常亮紫色表示已通过 HaLow 建立关联；而在接入点上，常亮紫色仅表示 HaLow 已启用，因此请在“已连接设备”中确认客户端。带标签的特写图见 [配对设备](/cn/halowlink2_getting_started#配对设备)；完整指示灯行为见 [快速上手](/cn/halowlink2_getting_started#网络配置)。

## 包装内容

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-package.png" alt="HaLowLink 2 retail box with the package contents laid out beside it" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>零售包装内容与零售盒并排展示：设备本体、支架、对应地区天线、USB-C 转 USB-C 线缆、以太网线缆、带地区插头适配器的电源适配器，以及纸质文档（快速入门指南和支持与保修卡）。</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-box-diagram.png" alt="Official What's in the box diagram with labelled ports, dimensions and included accessories" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>官方包装示意图：标注的端口（SMA 接口、WAN、LAN、USB-C）、设备尺寸（88 × 68 mm；支架高度 94 mm），以及所有随附配件及其地区插头适配器。</em></p>

<!-- Internal note: box contents below are from the official Morse Micro HaLowLink 2 Product Brief (Rev 9); the retail-package photo above (provided 2026-11-11) shows the same items in a Seeed-branded retail box. -->

- HaLowLink 2 设备
- HaLowLink 2 支架
- 电源适配器
- USB-C 转 USB-C 线缆
- 以太网线缆
- 对应地区天线（SMA）
- 地区插头适配器：美国、澳大利亚、英国、欧盟
- 快速入门指南
- 支持与保修卡

## 资源

- [Seeed Studio 产品页面 — HaLowLink 2 Wi-Fi HaLow Gateway](https://www.seeedstudio.com/HaLowLink-2-Wi-Fi-Halow-Gateway-p-7025.html)（SKU 100072966）
- [HaLowLink 2 产品简介（PDF）](https://www.morsemicro.com/resources/product_brief/HaLowLink-2_Product-Brief.pdf)
- [HaLowLink 用户指南（PDF）](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf)
- [HaLowLink 2 软件发行说明](https://docs.morsemicro.com/software-releases/halowlink2-software-release-notes)
- [Morse Micro OpenWrt 源代码（GitHub）](https://github.com/MorseMicro/openwrt)

**相关 Seeed Studio Wiki 教程：**

- [Getting Started with Wi-Fi HaLow Module for XIAO](/cn/getting_started_with_wifi_halow_module_for_xiao)（Wio-WM6180）
- [Getting Started with Wi-Fi HaLow Mini PCIe Module](/cn/getting_started_with_wifi_halow_mini_pcie_module)（Wio-WM6108 系列）

**下一步：**继续阅读 [快速上手](/cn/halowlink2_getting_started)，首次完成 HaLowLink 2 的设置。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
