---
description: reComputer R1000 入门指南
title: reComputer R1000 入门指南
keywords:
  - 边缘
  - reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /recomputer_r
sku: 113991274,E24010521,113991314,113991294,113991295
last_update:
  date: 09/15/2025
  author: Kasun Thushara
createdAt: '2024-05-10'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/cn/recomputer_r/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<!-- ---
name: The reComputer R1000 edge IoT controller is built on the high-performance Raspberry Pi CM4 platform, featuring a quad-core A72 processor with a maximum support of 8GB RAM and 32GB eMMC.
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 113991274
tags:
--- -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width="600" height="auto"/></p>

reComputer R1000 边缘物联网控制器基于高性能 Raspberry Pi CM4 平台构建，采用四核 A72 处理器，最高支持 8GB RAM 和 32GB eMMC。配备可灵活配置的双以太网接口，并集成 3 路隔离 RS485 通道，支持 BACnet、Modbus RTU、Modbus TCP/IP 协议。
凭借强大的物联网网络通信能力，R1000 系列支持包括 4G、LoRa®、Wi-Fi/BLE 在内的多种无线通信方式，可灵活配置为相应的无线网关。该控制器非常适合用于远程设备管理、能源管理以及智慧楼宇领域的多种应用场景。

:::note
可提供 Logo 品牌定制、包装定制以及固件烧录服务。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>立即定制 ➜</font></span></strong></a>
</div>

## 特性

### 为楼宇自控系统而设计

- 多路隔离 RS485 通道，支持高速和低速通信。

- 支持 BACnet、Modbus RTU 和 Modbus TCP/IP 协议
- 最高 8GB RAM，可处理数千个数据点，确保高效性能
- 清晰的双面 LED 指示灯，便于快速检查运行状态
- 高质量金属外壳，兼容导轨和壁挂安装
- 支持 Yocto 和 Buildroot，用于定制操作系统

### 强劲性能

- 由 Raspberry Pi CM4 提供算力

- Broadcom BCM2711 四核 Cortex-A72 (ARM v8) 64 位 SoC @ 1.5GHz
- 最高 8GB RAM 和 32GB eMMC

### 丰富的无线能力

- 片上 Wi-Fi

- 片上 BLE
- Mini-PCIe1：LTE、USB LoRa®
- Mini-PCIe2：SPI LoRa®、USB LoRa®

### 丰富接口

- 3x RS485（隔离）

- 1x 10M/100M/1000M 以太网（支持 PoE）
- 1x 10M/100M 以太网
- 1x HDMI 2.0
- 2x Type-A USB2.0
- 1x Type-C USB2.0（用于操作系统更新的 USB 控制台）
- 1x SIM 卡槽

### 安全与可靠性

- 硬件看门狗

- UPS 超级电容（可选）
- 金属外壳配 PC 侧板
- ESD：EN61000-4-2，3 级
- EFT：EN61000-4-4，2 级
- Surge：EN61000-4-5，2 级
- 生产生命周期：reComputer R1000 至少将生产至 2030 年 12 月

> \*4G 和 LoRa® 模块默认不随 reComputer R1000 一同提供，请根据需要另行购买相关模块。

## 命名规则

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig11.png" alt="pir" width="800" height="auto"/></p>

## 规格参数

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>参数</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>描述</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>硬件规格</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>产品系列</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>R10xx-10</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>R10xx-00</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>CPU</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi CM4，四核 Cortex-A72@ 1.5GHz</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>操作系统</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi OS，Ubuntu</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RAM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1GB/2GB/4GB/8GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>eMMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>8GB/16GB/32GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>系统规格</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>输入</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 针端子座</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>PoE（作为受电设备）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IEEE 802.3af 标准 12.95W PoE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>供电电压（AC/DC）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12\~24V AC/9\~36V DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>过压保护</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>40V</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>功耗</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>空闲：2.88W；满载：5.52W</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>电源开关</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>无</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>重启开关</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>有</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>接口</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>以太网</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps（支持 PoE*）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 Host</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0（用于烧录操作系统）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3 针端子座（隔离）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>SIM Card Slot</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持标准 SIM 卡</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>M.2 插槽</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持 M.2 NVMe SSD</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x LED 指示灯</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>蜂鸣器</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>重置按钮</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI（预留）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持 LCD*（机壳内板载）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>扬声器（预留）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持麦克风*（机壳内板载）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>无线通信</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>片上 Wi-Fi*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>无</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>片上 BLE*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>无</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>USB LoRa®/SPI LoRa®*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4G 蜂窝网络</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4G LTE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>标准</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={3} style={{height: 18, width: '35.4622%'}}>EMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ESD：EN61000-4-2，等级 3</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>EFT：EN61000-4-4，等级 2</td>
    </tr>
     <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>浪涌：EN61000-4-5，等级 2</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={4} style={{height: 18, width: '35.4622%'}}>认证</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE，FCC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>TELEC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RoHS</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>REACH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>环境条件</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>防护等级</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IP40</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>工作温度</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-30~70 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>工作湿度</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>10~95% RH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>存储温度</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-40~80 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>其他</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>超级电容 UPS</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SuperCAP UPS LTC3350 模块*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>硬件看门狗</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1~255s</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RTC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>高精度 RTC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>安全</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>加密芯片 TPM 2.0*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ATECC608A</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>散热</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>无风扇</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>质保</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 年</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>产品生命周期</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>至 2030 年 12 月</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>说明</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>带 * 标记的选项需要根据配件清单额外购买。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>元件和接口状态说明</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>预留</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>为将来使用或扩展而预留。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>可选</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>非关键元件，用户可选择包含或不包含。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>已占用</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>当前正在使用且是产品功能不可或缺的一部分。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>已包含</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>标准包装中提供的关键元件。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>机械特性</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>尺寸(W x H x D)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>130 mm x 93 mm x 49.6 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>外壳</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6061 铝合金外壳，配透明 PC 侧板</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>安装方式</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>DIN 导轨/墙面</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>重量(净重)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>560g</td>
    </tr>
  </tbody>
</table>
</div>

## 硬件概览

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig03.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig031.png" /></div>

## 主板概览

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig02.png" /></div>

## 电源框图

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig13.png" /></div>

reComputer R1000 支持三种电源供电方式：AC、DC 端子和 PoE 端口。默认情况下，reComputer R1000 通过 AC/DC 端子供电（官方区域电源适配器 SKU:110061505/110061506），而**PoE 供电（PoE 模块，SKU:110991925）为可选项**。这为电源选择提供了灵活性，并便于与各种电源轻松集成。

### 2-Pin 电源端子

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1000 可使用 12\~24 V 的额定 AC 电压或 \9~36 V 的 DC 电压供电。电源通过 2-Pin 电源端子块连接器接入。要对 reComputer R1000 接地，可将地线固定在电源端子左上角的螺丝上。

:::note
该电源方案采用桥式整流二极管进行反接保护，并兼容 AC 和 DC 输入。这确保了**无论电源正负极如何连接**，电路都不会损坏。通过使用桥式整流器，输出电压极性在输入 DC 极性变化时仍保持不变，从而提供有效的反接保护。
:::

### POE（可选）

安装 PoE 模块后，reComputer R1000 的 ETH0 端口即可支持 PoE 供电，从而通过以太网为设备供电，提供一种方便高效的供电方式。该选项简化了安装过程并减少了所需布线数量，非常适合电源受限或电源插座不易获得的应用场景。

- PoE 输入：范围 44~57V；典型值 48V
- PoE 输出：12V，最大 1.1A

:::note
需要注意的是，随 reComputer R1000 提供的 PoE 模块符合 IEEE 802.3af 标准，最大可提供 12.95W 的电源。因此，如果需要连接 SSD 或 4G 模块等高功耗外设，PoE 供电可能不足。在这种情况下，建议改用 AC/DC 端子供电，以确保设备稳定可靠运行。
:::

### 功耗

reComputer R1000 的功耗测试数据如下表所示，测试在 Seeed Studio 实验室中完成。请注意，该数值仅供参考，不同的测试方法和环境可能会导致结果有所差异。

| 状态   | 电压 | 电流 | 功耗 | 说明 |
|   ---      |    ---    |   ---      |         ---          |        ---    |
|关机  |24V      |  51mA  |    1.224W         | 在关机断电状态下的静态功耗测试。|
|空闲      |24V      |  120mA |    2.88W          | 在未运行任何测试程序的情况下，为 reComputer R1000 设备提供 24V 电源时的输入电流测试。|
|满载 |24V      |  230mA  |    5.52W          | 使用 "stress -c 4" 命令将 CPU 配置为满载运行。无外接设备连接。 |

### 开机与关机

reComputer R1000 默认不带电源按钮，接通电源后系统会自动启动。关机时，请在操作系统中选择关机选项，并等待系统完全关机后再切断电源。要重启系统，只需重新接通电源即可。

:::note
请注意，关机后请至少等待 10 秒再重启系统，以便内部电容器完全放电。
:::

## 方框图

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig12.png" /></div>

### IIC 框图

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig10.png" /></div>

## 接口

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>接口</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>以太网</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008（支持 PoE*）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 Host</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0（用于烧录 OS）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3-Pin 端子块（隔离）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>SIM 卡槽</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持标准 SIM 卡</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>M.2 插槽</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持 M.2 NVMe SSD</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x LED 指示灯</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>蜂鸣器</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>重置按钮</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持 LCD*（机壳内板载）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Speaker*</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持 Microphone*（机壳内板载）</td>
    </tr>
  </tbody>
</table>
</div>

要查询 GPIO 映射和偏移，请使用以下命令：

```bash
cat /sys/kernel/debug/gpio
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/16.png" /></div>

### LED 指示灯状态

reComputer R1000 具有 6 个 LED 指示灯，用于指示设备的运行状态。请参考下表了解每个 LED 的具体功能和状态：

| LED 指示灯 | 颜色           | 状态 | 描述                                                         |
| ----------- | -------------- | ---- | ------------------------------------------------------------ |
| PWR         | 绿色           | 亮   | 设备已连接电源。                                             |
|             |                | 灭   | 设备未连接电源。                                             |
| ACT         | 绿色           |      | 在 Linux 下，此引脚会闪烁以表示 eMMC 访问。<br /> 如果在启动过程中发生任何错误，则该 LED 会闪烁<br />错误模式，可使用 [Raspberry Pi 官网表格](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes) 进行解码。 |
| USER        | 绿色/红色/蓝色 |      | 需要由用户自定义。                                           |
| RS485-1     | 绿色           | 灭   | RS485 通道 1 上没有数据传输。                                |
|             |                | 闪烁 | RS485 通道 1 正在接收或发送数据。                            |
| RS485-2     | 绿色           | 灭   | RS485 通道 2 上没有数据传输。                                |
|             |                | 闪烁 | RS485 通道 2 正在接收或发送数据。                            |
| RS485-3     | 绿色           | 灭   | RS485 通道 3 上没有数据传输。                                |
|             |                | 闪烁 | RS485 通道 3 正在接收或发送数据。                            |

**ACT 状态表**

| **长闪次数** | **短闪次数** | **状态**                        |
| ------------ | ------------ | ------------------------------- |
| 0            | 3            | 启动失败（通用）                |
| 0            | 4            | 未找到 start*.elf               |
| 0            | 7            | 未找到内核镜像                  |
| 0            | 8            | SDRAM 故障                      |
| 0            | 9            | SDRAM 不足                      |
| 0            | 10           | 处于 HALT 状态                  |
| 2            | 1            | 分区不是 FAT                    |
| 2            | 2            | 从分区读取失败                  |
| 2            | 3            | 扩展分区不是 FAT                |
| 2            | 4            | 文件签名/哈希不匹配 - Pi 4      |
| 4            | 4            | 不支持的板卡类型                |
| 4            | 5            | 严重固件错误                    |
| 4            | 6            | 电源故障类型 A                  |
| 4            | 7            | 电源故障类型 B                  |

如果 ACT LED 以规则的四次闪烁模式闪烁，则表示找不到启动代码（start.elf）
如果 ACT LED 以不规则模式闪烁，则表示已开始启动。
如果 ACT LED 不闪烁，则可能是 EEPROM 代码损坏，请在不连接任何外设的情况下再试一次。更多详情请查看 Raspberry Pi 论坛：
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums
更多详情请查看 [Raspberry Pi 论坛](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)。

为了控制用户 LED，我们建议使用 sysfs，这是 Linux 内核提供的一个伪文件系统，用于暴露各种内核子系统、硬件设备及其相关驱动的信息。在 reComputer R1000 上，我们将用户 LED 接口抽象为三个设备文件（led-red、led-blue 和 led-green），用户只需与这些文件交互即可轻松控制 LED 灯。示例如下：

1. 要点亮红色 LED，请在终端中输入以下命令：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 要熄灭红色 LED，请在终端中输入以下命令：

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 你可以同时点亮红色和绿色 LED，请在终端中输入以下命令：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### 蜂鸣器

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

reComputer R1000 配备有有源蜂鸣器，可用于报警和事件通知等多种用途。在 reComputer R1000 v1.0 中，蜂鸣器通过 GPIO21 连接到 CM4；在 reComputer R1000 1.1 中，则通过 GPIO20 连接到 CM4。

:::note
要区分硬件版本（v1.0 和 v1.1），可以参考 [reComputer R1000 V1.1 产品变更详情](https://wiki.seeedstudio.com/cn/recomputer_r1000_v1_1_description/)。
:::

对于 reComputer R1000 v1.0 用户，蜂鸣器连接到 GPIO-21，要打开/关闭蜂鸣器，请在终端中输入以下命令：

```bash
raspi-gpio set 21 op dh # turn on
raspi-gpio set 21 op dl # turn off
```

对于 reComputer R1000 v1.1 用户，蜂鸣器连接到 PCA9535 P15，要关闭（打开）蜂鸣器，请在终端中输入以下命令：

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

reComputer R1000 配备了 3 组使用 3 针连接器的 RS485 接口，信号和电源均采用隔离设计，以确保在工业和自动化应用中的安全可靠运行。RS485A 和 RS485B 信号采用电容隔离，具有出色的 EMI 抗扰度，并满足 RS485 接口的高速通信要求。
默认情况下，未安装 120Ω 终端电阻。但包装盒中包含 5 个贴片电阻，如有需要，用户需自行将电阻焊接到设备上。

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
RS485 接口使用隔离电源，这意味着连接到 RS485 接口的外部设备的地信号应连接到 GND_ISO 引脚。

:::

以下是 reComputer 的 485 接口相关引脚数据表。

| RS485         | RS485_POWER_EN         | OS 设备文件   | P14         | 默认（高）    |
| ------------- | ---------------------- | -------------- | ----------- | ------------- |
| TX5           |                        | /dev/ttyAMA5   | GPIO12      |               |
| RX5           |                        |                | GPIO13      |               |
| TX2           | ID_SD                  | /dev/ttyAMA2   | GPIO0/ID_SD |               |
| RX2           | ID_SC                  |                | GPIO1/ID_SC |               |
| TX3           |                        | /dev/ttyAMA3   | GPIO4       |               |
| RX3           |                        |                | GPIO5       |               |
| RS485_1_DE/RE | (高/DE \|\| 低/RE)     | /dev/ttyAMA2   | GPIO6       | 默认低        |
| RS485_2_DE/RE |                        | /dev/ttyAMA3   | GPIO17      | 默认低        |
| RS485_3_DE/RE |                        | /dev/ttyAMA5   | GPIO24      | 默认低        |

默认情况下，RS485 端口的电源使能端为高电平，并且每个 RS485 接口都处于接收状态。你可以做一个简单的实验。

将连接 PC 与 reComputer-R 的 485 端口连好。

在 reComputer 的终端中输入：

```shell
cat /dev/ttyAMA2
```

然后在电脑的串口调试工具中发送一些数据，你可以在 reComputer 的终端窗口中观察到这些数据。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### 启动开关

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

reComputer R1000 的启动开关连接到 CM4 的 nRPI_BOOT 引脚。该开关为用户提供在 eMMC 和 USB 之间选择启动源的选项。在正常模式下，开关应拨到远离带有 “BOOT” 标签一侧的位置，使系统从 eMMC 启动。相反，当用户需要烧录系统镜像时，应将开关拨向带有 “BOOT” 标签的一侧，使系统从 Type-C USB 接口启动。

<div class="table-center">

| 开关位置                                                       | 模式        | 描述           | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 普通模式    | 从 eMMC 启动  | 低        |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | 刷机模式    | 从 USB 启动   | 高        |

</div>

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R1000 配备了一个 USB Type-C 接口和两个 USB Type-A 接口。请参考下表了解它们的功能和说明。

| **类型**   | **数量** | **协议** | **功能**     | **描述**                                                     |
| ---------- | -------- | -------- | ------------ | ------------------------------------------------------------ |
| **Type-C** | *1       | USB2.0   | USB-Device   | 用于串口调试、烧录镜像等。                                   |
| **Type-A** | *2       | USB2.0   | USB-Host     | 连接不同的 USB 设备，例如 U 盘、<br /> USB 键盘或鼠标。      |

通过运行 **lsusb** 命令检查是否检测到 USB 集线器。该命令会列出所有已连接的 USB 设备，包括集线器。

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

运行此命令后，应会显示系统中已连接 USB 设备的信息，包括存在的任何 USB 集线器。

如果 USB 集线器工作正常，你应当能在 **lsusb** 命令的输出中看到它的详细信息。如果没有列出，可能是集线器本身或其与系统连接存在问题。在这种情况下，你可能需要对 USB 集线器或其连接进行排查。

### SIM 卡槽

<div style={{ position: 'relative', left: '150px' }}>
    <img
        width="40"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig19.png"
        style={{ transform: 'rotate(90deg)', position: 'absolute', top: '0', left: '0', transformOrigin: 'left top' }}
    />
</div>
<br />
<br />
reComputer R1000 使用工业应用中常见的标准尺寸 SIM 卡槽，需要尺寸为 25mm x 15mm 的标准 SIM 卡。
:::note
请注意，reComputer R1000 标准版本不带 4G 模块。如果你需要 4G 功能，必须另外单独购买 4G 模块。
:::

### SSD 插槽

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
reComputer R1000 上的 SSD 插槽用于安装 NVMe M.2 2280 规格的 SSD，容量支持 128GB、256GB、512GB 和 1TB。该插槽支持高速存储扩展，使用户能够提升系统的性能和容量。

要列出包括 SSD 在内的磁盘，可以使用 *fdisk -l* 命令。操作如下：

```bash
sudo fdisk -l
```

该命令会显示系统中连接的所有磁盘列表，如果 SSD 被正确检测到，也会包含在内。请查找代表 SSD 的条目，它们通常以 /dev/sd 加一个字母开头（例如 /dev/sda、/dev/sdb 等）。
确定与 SSD 对应的条目后，你就可以根据需要对其进行分区或格式化操作。

:::note
SSD 卡主要有两种用途：<br />
1.大容量存储：SSD 卡可用于满足大容量存储需求。<br />
2.带镜像的启动盘：另一种用法是将 SSD 同时作为大容量存储和系统镜像的存储介质，从而可以直接从 SSD 卡启动系统。<br />
需要注意的是，市面上的 SSD 卡并非都支持第二种用法。因此，如果你打算将其用作启动盘且不确定购买哪一款型号，我们建议选择我们推荐的 1TB SSD（SKU 112990267）。该型号已经过启动功能测试和验证，可降低兼容性问题风险并减少试错成本。
:::

### Mini-PCle 插槽

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

| 插槽        | 支持的协议        |
| ----------- | ------------------ |
| Mini-PCIe 1 | 4G LTE             |
|             | USB LoRa®          |
| Mini-PCIe 2 | SPI LoRa®          |
|             | USB LoRa®          |

</div>

该设备具有两个 Mini-PCIe 接口，即 Mini-PCIe 插槽 1 和 Mini-PCIe 插槽 2。插槽 1 连接到 SIM 卡槽并支持 USB 协议，而插槽 2 支持 USB 和 SPI 协议，但不连接到 SIM 卡槽。因此，4G LTE 和 USB LoRa® 等设备可以通过插槽 1 连接，而 SPI LoRa® 和 USB LoRa® 设备可以通过插槽 2 连接。

### 复位孔

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

reComputer R1000 的复位孔内设有一个微型按键开关。使用细小物体按下该按键即可复位 CM4。当该引脚为高电平时，表示 CM4 已经启动；将该引脚拉低则会复位模块。

### 以太网 RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-center">

| 名称 | 类型                        | 速率              | PoE                                |
| ---- | --------------------------- | ----------------- | ---------------------------------- |
| ETH0 | CM4 原生千兆以太网          | 10/100/1000 Mbit/s | 支持（需额外模块）                 |
| ETH1 | 由 USB 转换                 | 10/100 Mbit/s     | 不支持                             |

</div>

reComputer R1000 配备了两个以太网 RJ45 接口。ETH0 是 CM4 原生千兆以太网接口，支持 10/100/1000 Mbit/s 三种速率。可额外购买 PoE 模块，通过该接口实现以太网供电（PoE），为 reComputer R1000 提供电源。另一个 ETH1 由 USB 转换而来，支持 10/100 Mbit/s。

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

reComputer R1000 具有来自 CM4 的原生 HDMI 接口，支持最高 4K @ 60 fps 的视频输出。非常适合需要多屏显示的应用，允许用户将内容输出到外接大屏幕。

### RTC

reComputer R1000 配备了 RTC 电路，并预装 CR2032 电池，即使在断电情况下也能保持计时功能。

要测试实时时钟（RTC）功能，请按以下步骤操作：

1. 禁用自动时间同步：

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 将时间设置为 2024 年 3 月 20 日 12:00：

```bash
sudo hwclock --set --date "2024-03-20 12:00:00"
```

3. 将 RTC 时间同步到系统：

```bash
sudo hwclock --hctosys
```

4. 检查 RTC 时间：

```bash
sudo hwclock -r
```

该命令会读取并显示存储在 RTC 中的时间。
5. 断开 RTC 的电源，等待几分钟后重新接通电源，再次检查 RTC 时间以确认是否保持了正确时间。

### 看门狗

reComputer R1000 内置独立硬件看门狗电路，可在系统异常崩溃时自动重启系统。看门狗电路通过 RTC 实现，喂狗时间可灵活设置为 1 到 255 秒。

要进行看门狗测试，请按以下步骤操作：

1. 安装看门狗软件：

```bash
sudo apt install watchdog 
```

2. 编辑看门狗配置文件：

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

按如下方式修改配置：

```bash
watchdog-device  = /dev/watchdog
# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.vi
watchdog-timeout = 120
# If your watchdog trips by itself when the first timeout interval
# elapses then try uncommenting the line below and changing the
# value to 'yes'.
#watchdog-refresh-use-settimeout = auto
# If you have a buggy watchdog device (e.g. some IPMI implementations)
# try uncommenting this line and setting it to 'yes'.
#watchdog-refresh-ignore-errors = no
# ====================== Other system settings ========================
#
# Interval between tests. Should be a couple of seconds shorter than
# the hardware time-out value.
interval  = 15
max-load-1  = 24
#max-load-5  = 18
#max-load-15  = 12
realtime  = yes
priority  = 1
```

你可以根据需要调整其他设置。
3. 确认看门狗服务正在运行：

```bash
sudo systemctl start watchdog
```

4. 要测试看门狗功能，执行以下命令来模拟系统死机：

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

:::warning
该命令会触发内核崩溃，并应当使看门狗重启系统。
:::

5. 监控系统以确认其在指定的超时时间后重新启动。
通过这些步骤，您可以测试并确保系统上的看门狗定时器功能正常。

## 可选接口和模块

reComputer R1000 支持丰富的扩展模块和配件选择，使其适用于各种场景和需求。如果您有兴趣定制 reComputer R1000，请联系 odm@seeed.cc 以获取更多信息。
以下是配件和可选模块列表：

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><strong>备注</strong></td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><strong>项目</strong></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}><strong>产品名称</strong></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}><strong>SKU</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={5} style={{height: 18, width: '25%'}}>用于 LoRa®WAN 功能时必须一起使用</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>LoRa® 模块</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>区域可选 LoRaWAN 网关模块（SPI）-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>区域可选 LoRaWAN 网关模块（SPI）-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>区域可选 LoRaWAN 网关模块（USB）-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>区域可选 LoRaWAN 网关模块（USB）-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>LoRa® 天线</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LoRa 天线套件 - 868-915 MHz</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>此配件是实现 Wi-Fi 功能所必需的</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Wi-Fi/BLE 天线</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Raspberry Pi Compute Module 4 天线套件</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={8} style={{height: 18, width: '25%'}}>4G 功能需搭配 4G 模块使用 4G 天线，GPS 功能需搭配 4G 模块使用 GPS 天线</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={6} style={{height: 18, width: '25%'}}>4G 模块</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-AFXGA-Mini-PCIe 模块 - 适用于北美</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EUXGR-Mini-PCIe 模块 - 适用于 EMEA 和泰国</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-AUXGR-Mini-PCIe 模块 - 适用于澳大利亚</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EFA-Mini-PCIe 模块 - 适用于泰国</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EMGA-Mini-PCIe 模块 - 适用于马来西亚</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991234</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-JFA-mini-PCIe</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991296</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>4G 天线</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>适用于 4G 模块的 4G 天线套件</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>GPS 天线</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>适用于 EC25 4G 模块的 GPS 天线套件</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>加密芯片 TPM 2.0</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>带 infineon SLB9670 的 TPM 2.0 模块</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSD 卡</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>512GB NVMe M.2 PCle Gen3x4 2280 内置 SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>256GB NVMe M.2 PCle Gen3x4 2280 内置 SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>128GB NVMe M.2 PCle Gen3x4 2280 内置 SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>此模块需要焊接到 reComputer R1000 的载板上</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>PoE</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>适用于 reTerminal DM 的 MQ7813T120 PoE 模块套件</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>UPS</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>SuperCAP UPS LTC3350 模块</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
  </tbody>
</table>
</div>

reComputer R1000 主板具有两个 Mini-PCIe 插槽。Mini-PCIe 插槽 1 支持使用 USB 协议的 4G 模块和 LoRa® 模块；而 Mini-PCIe 插槽 2 支持使用 USB 和 SPI 协议的 LoRa® 模块。

:::note
主板上不能同时插入 2 个 LoRa® 模块。
:::

### Wi-Fi/BLE

reComputer R1000-10 由带有板载 Wi-Fi/BLE 版本的 CM4 提供支持，提供与 CM4 相同的 Wi-Fi/BLE 参数。有关详细参数信息，请参考 Raspberry Pi 官方网站。

:::note
需要特别注意的是，由于 reComputer R1000 采用金属外壳，Wi-Fi/BLE 信号可能难以穿透金属外壳。如果你需要 Wi-Fi/BLE 功能，建议购买外置天线，并[点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-wi-fible-antenna)。
:::

#### 连接 Wi-Fi

步骤 1. 扫描 Wi-Fi 网络：

```bash
nmcli dev wifi list
```

步骤 2. 连接到 Wi-Fi 网络：

```bash
sudo nmcli dev wifi connect network-ssid password "network-password"
sudo nmcli --ask dev wifi connect network-ssid #If you don't want to write your password on the screen, you can use the --ask option.
```

步骤 3. 设备上电后会自动连接到 Wi-Fi。如果你想删除已保存的 Wi-Fi 信息：

```bash
nmcli con del network-ssid
```

连接断开后，可以连接到另一个 Wi-Fi。

#### 连接蓝牙设备

在添加蓝牙设备之前，必须先启动并运行计算机上的蓝牙服务。你可以使用 systemctl 命令检查这一点。

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
如果蓝牙服务状态不是 active，你必须先启用它。然后启动该服务，以便在你启动设备时自动启动。

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

你可以使用 bluetoothctl 工具连接和管理蓝牙，以下是一些常用命令和注释：

```bash
#Scan attachments to the device
bluetoothctl scan on

#To make your Bluetooth adapter discoverable to other devices, use the following command:
bluetoothctl discoverable on


#Replace A4:C1:38:F4:83:2E below with the Media Access Control (MAC) address you want to connect to
#Pair a new Bluetooth device
bluetoothctl pair A4:C1:38:F4:83:2E

#Connect previously paired devices
bluetoothctl connect A4:C1:38:F4:83:2E

#View the list of devices paired with the system
bluetoothctl paired-devices

#When a Bluetooth device is trusted, the system automatically connects to it after discovering it
bluetoothctl trust A4:C1:38:F4:83:2E

#Cancel trust
bluetoothctl untrust A4:C1:38:F4:83:2E

#Remove a paired Bluetooth device
bluetoothctl remove A4:C1:38:F4:83:2E

#Disconnect the Bluetooth connection, but do not remove it from the paired list
bluetoothctl disconnect A4:C1:38:F4:83:2E

#Block specific devices from connecting to your system
bluetoothctl block A4:C1:38:F4:83:2E

#Unblock device
bluetoothctl unblock A4:C1:38:F4:83:2E


#Use interactive mode and exit
bluetoothctl
exit 
```

### 4G 模块

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991135--lte-cat-4-ec25-eux-mini-pcie-font_1.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

reComputer R1000 主板具有两个 Mini-PCIe 插槽，其中 Mini-PCIe 插槽 1 支持使用 USB 协议的 4G 模块。来自 Quectel 的 EC25 4G 模块已经过充分测试，可与 reComputer R1000 完全兼容。

:::note
请注意，如果你需要 4G 功能，则必须购买相应的 4G 模块和外置天线。[请点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna)。
:::

#### 通过 ECM 模式连接 4G 模块

要通过 minicom 使用 AT 命令与 4G 模块交互，请按照以下步骤操作：

**步骤 1.** 在系统上电之前，请将启用 4G 的 SIM 卡插入[SIM 卡槽](/cn/recomputer_r/#sim-slot)。

**步骤 2.** 使用 ```lsusb``` 检查 EC25-EUX 是否被检测到

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**步骤 3.** 安装串口通信工具 minicom。

```sh
sudo apt install minicom
```

**步骤 4.** 通过 minicom 连接 EC25-EUX 4G 模块。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

串口连接打开后，输入 AT 并按下回车键，你应该会看到 OK。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**步骤 5.** 使 4G 模块连接到 4G 网络

在同一个 minicom 串口窗口中请输入：

```sh
AT+QCFG="usbnet"
```

它会返回类似 ```+QCFG: "usbnet",0,``` 的内容，但我们需要将其设置为 1（ECM 模式），因此输入以下命令：

```sh
AT+QCFG="usbnet",1
```

然后输入以下命令强制调制解调器重启：

```sh
AT+CFUN=1,1
```

然后你可以重启，或者等待一段时间，让模块从 SIM 卡运营商那里获取网络。

你也可以使用 `ifconfig` 命令查询 reComputer R1000 的网络状态。

ECM 模式会为你创建一个新的网络接口 `usb0` 供使用。


#### 通过 QMI 模式连接 4G 模块

要通过 qmicli 使用 QMI 协议与 4G 模块交互，请按照以下步骤操作：

**步骤 1.** 将 quectel-CM 工具下载到 `/usr/bin/` 目录。

```sh
# Use wget to download the compiled quectel-CM to /usr/bin/
sudo wget -O /usr/bin/quectel-CM https://files.seeedstudio.com/wiki/reComputer-R1000/network/quectel-CM
# Add execution permission
sudo chmod 777 /usr/bin/quectel-CM
```

**步骤 2.** 将 4G 网卡模式设置为 QMI。

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200

# Enter the following command
AT+QCFG="usbnet",0
# Enter the following command to verify
AT+QCFG="usbnet"
# Successful configuration is indicated by the following response
AT+QCFG="usbnet",0

# Enter the command to restart and enable the module
AT+CFUN=1,1
```

**步骤 3.** 测试网络连接。

```sh
# Use the -s parameter to specify the APN for the data connection
sudo ./quectel-CM -s APN

# APN settings for different carriers
China Mobile: "cmnet"
China Unicom: "3gnet"
China Telecom: "ctnet"
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/get_start/image-1.png"/></div>

输入 ifconfig 检查是否已经分配 IP 地址

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/get_start/image-2.png"/></div>

网络连接测试成功后，你可以创建一个 systemd 服务，以确保系统启动时 4G 模块自动连接。

**步骤 4.** 创建一个 systemd 服务文件。

创建一个自启动脚本：

```sh
sudo vi /opt/auto_4G.sh
```

输入以下内容。APN 应根据你的 SIM 卡运营商来确定。这里 `3gnet` 是中国联通的 APN。

```sh
#!/bin/bash
sudo quectel-CM -s 3gnet
```

添加执行权限：

```bash
sudo chmod 0755 /opt/auto_4G.sh
```

创建一个自启动服务文件：

```bash
sudo vi /etc/systemd/system/auto_4G.service
```

服务文件内容：

```bash
[Unit]
Description = auto_4G daemon

[Service]
ExecStart = /opt/auto_4G.sh
Restart = always
Type = simple

[Install]
WantedBy = multi-user.target
```

启用并启动 auto_4G.service：

```bash
sudo systemctl enable auto_4G
sudo systemctl start auto_4G
```

然后你可以重启，或者等待一段时间，让模块从 SIM 卡运营商那里获取网络。

你也可以使用 `ifconfig` 命令查询 reComputer R1000 的网络状态。

QMI 模式会为你创建一个新的网络接口 `wwan0` 供使用。




### LoRa® 模块

:::note
两个 Mini-PCIe 插槽都支持使用 USB 协议的 LoRa® 模块。同时，Mini-PCIe 插槽 2 支持使用 SPI 协议的 LoRa® 模块。来自 Seeed Studio 的 WM1302 模块已经过充分测试，可与 reComputer R1000 完全兼容。但是 USB 版本需要使用为 4G 模块设计的 Mini PCIe，这意味着如果你想同时使用 4G 模块和 LoraWAN® 模块，请选择 WM1302 LoraWAN® 模块的 SPI 版本。
<br />
请注意，如果你需要 LoRa® 功能，则必须购买相应的 LoRa® 模块和外置天线。
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI 模块">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br />

**步骤 1.** 请参考 [LoraWAN® 模块硬件组装](/cn/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) 指南，将 `WM1302 SPI LoraWAN® Module` 安装到 `LoraWAN® Mini PCIe slot` 中，你应该能看到 *`Lora`* 丝印。

**步骤 2.** 在命令行中输入 `sudo raspi-config` 打开 Raspberry Pi 软件配置工具：

- 选择 Interface Options
- 选择 SPI，然后选择 **Yes** 以启用它
- 选择 I2C，然后选择 **Yes** 以启用它
- 选择 Serial Port，然后在 "Would you like a login shell..." 中选择 **No**，在 "Would you like the serial port hardware..." 中选择 **Yes**

完成上述操作后，请重启 Raspberry Pi 以确保这些设置生效。

**步骤 3.** 将 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 下载到 reComputer R1000 并进行编译。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

将 `#define I2C_DEVICE "/dev/i2c-1"` 修改为 `#define I2C_DEVICE "/dev/i2c-3"`。

:::important
如果你使用的是 1.1 版本的 reComputer R1000，请修改为 `#define I2C_DEVICE "/dev/i2c-6"`
:::

```bash
sudo make
```

**步骤 4.** 复制 reset_lgw.sh 脚本

```bash
vim ./tools/reset_lgw.sh
```

修改代码：

```bash
SX1302_RESET_PIN=580     # SX1302 reset
SX1302_POWER_EN_PIN=578  # SX1302 power enable
SX1261_RESET_PIN=579     # SX1261 reset (LBT / Spectral Scan)
// AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**步骤 5.** 修改 `global_conf.json.sx1250.EU868` 配置文件的内容：

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868
```

将 `"com_path": "/dev/spidev0.0"` 修改为 `"com_path": "/dev/spidev0.1"`

:::important
如果你使用的是 1.1 版本的 reComputer R1000，请修改为 `"com_path": "/dev/spidev1.1"`
:::

**步骤 6.** 启动 LoraWAN® 模块

然后根据你的 WM1302 工作频率版本运行以下代码来启动 LoraWAN® 模块。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

**步骤 1.** 请参考 [LoraWAN® 模块硬件组装](/cn/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) 指南，将 `WM1302 USB LoraWAN®  Module` 安装到 `4G Mini PCIe slot` 中，你应该能看到 *`4G`* 丝印。

**步骤 2.** 在命令行中输入 `sudo raspi-config` 打开 Raspberry Pi 软件配置工具：

- 选择 Interface Options
- 选择 I2C，然后选择 **Yes** 以启用它
- 选择 Serial Port，然后在 "Would you like a login shell..." 中选择 **No**，在 "Would you like the serial port hardware..." 中选择 **Yes**

完成上述操作后，请重启 Raspberry Pi 以确保这些设置生效。

**步骤 3.** 将 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 下载到 reTerminal 并进行编译。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

将 `#define I2C_DEVICE "/dev/i2c-1"` 修改为 `#define I2C_DEVICE "/dev/i2c-3"`。

```bash
sudo make
```

**步骤 4.** 复制 reset_lgw.sh 脚本

```bash
vim ./tools/reset_lgw.sh
```

修改代码：

```bash
SX1302_RESET_PIN=580     # SX1302 reset
SX1302_POWER_EN_PIN=578  # SX1302 power enable
SX1261_RESET_PIN=579     # SX1261 reset (LBT / Spectral Scan)
// AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**步骤 5.** 加载 WM1302-USB 模块

```bash
# Check the device
lsusb
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/check_lora_device.png" /></div>

```bash
# Use the ID number to find the port number
sudo dmesg | grep 5740
# Load ACM module 
sudo modprobe cdc_acm
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/load_lora_device.png" /></div>

**步骤 6.** 查找设备文件

```bash
sudo dmesg | grep 1-1.3.3
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ACM.png" /></div>

**步骤 7.** 修改 `global_conf.json.sx1250.EU868.USB` 配置文件的内容：

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868.USB
```

将 `"com_path": "/dev/ttyACM0"` 修改为 `"com_path": "/dev/ttyACM4"`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/change_file.png" /></div>

**步骤 8.** 启动 LoraWAN® 模块

然后根据你的 WM1302 工作频率版本运行以下代码来启动 LoraWAN® 模块。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

该命令指定用于 LoRa® USB 的配置文件。

</TabItem>
</Tabs>

<!-- Code END -->

### PoE

作为受电设备工作的 reComputer R1000，可以通过添加 PoE 供电模块来支持 IEEE 802.3af 标准。用户需要拆解设备以安装 PoE 模块，从而实现以太网 PoE 功能。

:::note
reComputer R1000 支持 PoE 供电，但标准产品默认不包含 PoE 模块。Seeed 可以为批量定制订单提供 PoE 焊接和组装服务。然而，如果客户在测试样机，则需要[自行焊接和组装 PoE 模块](/cn/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module)。
:::

### M.2 插槽

reComputer R1000 通过主板上两个 Mini-PCIe 插槽下方的 PCIe 插槽（J62）支持 2280 NVMe SSD 和 AI 加速器（Hailo）。需要注意的是，CM4 的 PCIe 为 Gen2.0，最大理论速度为 5Gbps。如果你使用的是 Gen3.0 或更高版本的 SSD，可能无法达到该 SSD 的最高速度。经过测试，安装 SSD 的 reTerminal DM 可实现最高 230MB/s 的写入速度和 370MB/s 的读取速度。如果你不确定哪些 SSD 兼容，可以按照下方配件列表进行购买。

[请点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-ssd)。

<div class="table-center">

<table >
  <tbody>
  <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSD 卡</td>
      <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">112990267</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>512GB NVMe M.2 PCle Gen3x4 2280 内置 SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html">112990247</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>256GB NVMe M.2 PCle Gen3x4 2280 内置 SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html">112990246</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>128GB NVMe M.2 PCle Gen3x4 2280 内置 SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html">112990226</a></td>
  </tr>
  </tbody>
</table>
</div>

:::note
请注意：<br />
1- 速度测试结果可能因 SSD 型号、测试方法和测试环境而异。此处提供的数值仅供参考，数据来源于 Seeed 实验室。<br />

SSD 卡主要有两种用途：<br />
1.大容量存储：SSD 卡可用于大容量存储需求。<br />
2.带镜像的启动盘：另一种用法是将 SSD 同时用于大容量存储和存放系统镜像，从而可以直接从 SSD 卡启动系统。<br />
需要特别注意的是，市面上并非所有 SSD 卡都支持第二种用法。因此，如果你打算将其用作启动盘且不确定购买哪种型号，我们建议选择我们推荐的 **1TB SSD（SKU [112990267](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)）**。该型号已经过启动功能测试和验证，可降低兼容性问题风险并减少试错成本。
:::

### 加密芯片 TPM 2.0

推荐在 reComputer R1000 上使用符合 Trusted Computing Group (TCG) TPM 2.0 规范的 Infineon OPTIGA™ TPM SLB9670 作为加密芯片。该芯片通过应用于板载 J13 接口的 SPI 接口，实现平台完整性的信任根、远程认证以及加密服务。

:::note
[请点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-tpm-20-module).
:::

如果你将 TPM 2.0 模块连接到设备，下面的代码可以帮助检查 TPM 连接情况。

```bash
ls /dev | grep tpm
```

如果你在输出中看到 **tpm0** 和 **tpmrm0**，这意味着系统已经检测到 TPM（可信平台模块）设备并且可以使用。这表明 TPM 硬件已被识别且可访问，这是一个良好的信号。你可以在确认这些设备存在且可访问的前提下，继续使用与 TPM 相关的功能或应用程序。

### UPS

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

UPS 为 7F，采用串联方式工作。UPS 模块位于 DC5V 和 CM4 组件之间，使用一个 GPIO 信号在 5V 电源失电时向 CPU 发出警报。CPU 在接收到该信号后，会在超级电容能量耗尽之前执行紧急脚本，执行 "$ shutdown" 命令。
<br />
UPS 提供的备份时长在很大程度上取决于系统负载。下面是使用配备 4GB RAM、32GB eMMC 存储和 Wi-Fi 模块的 CM4 模块进行测试的一些典型场景。
<br />

| 工作模式 | 时间(s) | 备注                                                       |
| ----------------- | ------- | ------------------------------------------------------------ |
| 空闲              | 37      | 在空闲条件下测试，并加载官方驱动程序 |
| CPU 满载          | 18      | stress -c 4 -t 10m -v &                                      |

:::note
如需 UPS 功能的更多信息，请联系我们，且告警信号为低电平有效。
[请点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module).
:::

CPU 与 DC/AC 电源输入之间的 GPIO25 用于在 5V 电源掉电时向 CPU 报警。然后 CPU 应在超级电容能量耗尽之前在脚本中执行一些紧急操作，并运行 `$ shutdown`
<br />
使用此功能的另一种方式是：当 GPIO 引脚状态变化时发起关机。给定的 GPIO 引脚被配置为输入按键，用于产生 KEY_POWER 事件。systemd-logind 通过处理该事件来发起关机。
参考 `/boot/overlays/README`，然后修改 `/boot/config.txt`。

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

:::note

1. 如需 UPS 功能的更多信息，请联系我们。
2. 告警信号为低电平有效。

:::

下面的 Python 代码是一个通过 GPIO25 检测超级电容 UPS 工作模式的示例，并在系统断电时自动保存数据并关机。

```python
import RPi.GPIO as GPIO
import time,os

num = 0

GPIO.setmode(GPIO.BCM)
#set GPIO25 as input mode
#add 500ms jitter time for software stabilization
GPIO.setup(25,GPIO.IN,pull_up_down = GPIO.PUD_UP)
GPIO.add_event_detect(25,GPIO.FALLING, bouncetime = 500) 
while True:
  if GPIO.event_detected(25):
    print('...External power off...')
    print('')
    os.system('sync')
    print('...Data saving...')
    print('')
    time.sleep(3)
    os.system('sync')
    #saving two times
    while num<5:
      print('-----------')
      s = 5-num
      print('---' + str(s) + '---')
      num = num + 1
      time.sleep(1)
    print('---------')
    os.system('sudo shutdown -h now')
```

### DSI 与扬声器

板载预留了一个 DSI（J24）接口和一个 4 针扬声器（J7）接口，用于特殊用途。用户需要根据自身需求购买相应的插件。

## 其他资源

- [用户手册 - reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_version01.pdf)
- [用户手册 - reComputer R1000（中文）](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_CN_version01.pdf )
- [reComputer R1000 3D 文件](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [reComputer R1000 原理图设计、PCB 设计](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [reComputer R1000 宣传页](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer.pdf)
- [reComputer R1000 宣传页（中文）](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer_CN.pdf)
- [reComputer R1000 v1.1 引脚分配](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)



## 资源

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
