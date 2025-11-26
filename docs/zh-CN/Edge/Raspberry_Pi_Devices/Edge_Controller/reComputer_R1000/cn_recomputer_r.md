---
description: reComputer R1000 入门指南
title: reComputer R1000 入门指南
keywords:
  - Edge
  - reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /cn/recomputer_r
last_update:
  date: 09/15/2025
  author: Kasun Thushara
---

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

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

reComputer R1000 边缘物联网控制器基于高性能 Raspberry Pi CM4 平台构建，配备四核 A72 处理器，最大支持 8GB RAM 和 32GB eMMC。配备可灵活配置的双以太网接口，还包括 3 个隔离的 RS485 通道，支持 BACnet、Modbus RTU、Modbus TCP/IP 协议。
凭借强大的物联网网络通信能力，R1000 系列支持多种无线通信选项，包括 4G、LoRa®、Wi-Fi/BLE，允许灵活配置以用作相应的无线网关。该控制器非常适合远程设备管理、能源管理以及智能建筑领域的各种其他场景。

## 特性

### 专为楼宇自动化系统设计

- 多个隔离的 RS485 通道支持高速和低速通信。

- 支持 BACnet、Modbus RTU 和 Modbus TCP/IP 协议
- 高达 8GB RAM 支持处理数千个数据点，确保高效性能
- 清晰的双面 LED 指示灯有助于快速检查运行状态
- 高品质金属外壳，兼容 DIN 导轨和壁挂安装
- 支持 Yocto 和 Buildroot 定制操作系统

### 强大性能

- 由 Raspberry Pi CM4 驱动

- Broadcom BCM2711 四核 Cortex-A72 (ARM v8) 64 位 SoC @ 1.5GHz
- 高达 8GB RAM 和 32GB eMMC

### 丰富的无线功能

- 片上 Wi-Fi

- 片上 BLE
- Mini-PCIe1：LTE、USB LoRa®、USB Zigbee
- Mini-PCIe2：SPI LoRa®、USB LoRa®、USB Zigbee

### 丰富的接口

- 3x RS485（隔离）

- 1x 10M/100M/1000M 以太网（支持 PoE）
- 1x 10M/100M 以太网
- 1x HDMI 2.0
- 2x Type-A USB2.0
- 1x Type-C USB2.0（用于操作系统更新的 USB 控制台）
- 1x SIM 卡插槽

### 安全性和可靠性

- 硬件看门狗

- UPS 超级电容器（可选）
- 带 PC 侧板的金属外壳
- ESD：EN61000-4-2，3 级
- EFT：EN61000-4-4，2 级
- 浪涌：EN61000-4-5，2 级
- 产品生命周期：reComputer R1000 将保持生产至少到 2030 年 12 月

> \*4G 和 LoRa® 模块默认不随 reComputer R1000 提供，请相应购买相关模块。

## 命名约定

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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi OS、Ubuntu</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 针端子块</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>PoE（作为受电设备）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IEEE 802.3af 标准 12.95W PoE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>供电电压（AC/DC）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12~24V AC/9~36V DC</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 主机</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0（用于刷写操作系统）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3 针端子块（隔离）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>SIM 卡插槽</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持标准 SIM 卡</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>M.2 插槽</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持 M.2 NVMe SSD</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 个 LED 指示灯</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>蜂鸣器</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>复位按钮</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI（预留）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持 LCD*（外壳内板载）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>扬声器（预留）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持麦克风*（外壳内板载）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>无线通信</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>片上 Wi-Fi*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>否</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>片上 BLE*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>否</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Zigbee</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>USB Zigbee*</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE、FCC</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>保修</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 年</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>产品生命周期</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>至 2030 年 12 月</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>声明</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>标有 * 的选项需要根据配件清单额外购买。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>组件和接口状态说明</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>预留</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>指定用于未来使用或扩展。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>可选</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>非必需组件，用户可以选择包含或排除。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>已占用</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>当前正在使用且是产品功能的组成部分。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>包含</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>标准包装中提供的必需组件。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>机械</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>尺寸(宽 x 高 x 深)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>130 mm x 93 mm x 49.6 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>外壳</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6061 铝合金外壳，配透明 PC 侧板</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>安装方式</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>DIN 导轨/壁挂</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>重量(净重)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>560g</td>
    </tr>
  </tbody>
</table>
</div>

## 硬件概述

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig03.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig031.png" /></div>

## 主板概述

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig02.png" /></div>

## 电源图

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig13.png" /></div>

reComputer R1000 支持三种电源供电选项：AC、DC 端子和 PoE 端口。默认情况下，reComputer R1000 通过 AC/DC 端子供电（官方区域电源适配器 SKU：110061505/110061506），而**PoE 电源供电（PoE 模块，SKU：110991925）是可选的**。这提供了电源选择的灵活性，并允许轻松集成各种电源。

### 2 针电源端子

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1000 的额定 AC 电压为 12~24 V 或 DC 电压为 9~36V。电源通过 2 针电源端子块连接器连接。要为 reComputer R1000 接地，可以将接地线固定到电源端子左上角的螺丝上。

:::note
电源解决方案采用桥式整流二极管进行反极性保护，兼容 AC 和 DC 输入。这确保了**无论电源的正负极如何连接**，电路都不会损坏。通过使用桥式整流器，无论输入 DC 极性如何，输出电压极性都保持固定，提供有效的反极性保护。
:::

### POE（可选）

安装 PoE 模块后，reComputer R1000 的 ETH0 端口可以支持 PoE 电源供电，提供通过以太网为设备供电的便捷高效方式。此选项简化了安装过程并减少了所需的布线量，使其成为电源有限或电源插座不易获得的应用的理想解决方案。

- PoE 输入：范围 44~57V；典型值 48V
- PoE 输出：12V，最大 1.1A

:::note
值得注意的是，reComputer R1000 提供的 PoE 模块符合 IEEE 802.3af 标准，可提供最大 12.95W 的电源供应。因此，如果需要连接 SSD 或 4G 模块等高功耗外设，PoE 电源供应可能不足。在这种情况下，建议使用 AC/DC 端子供电，以确保设备的稳定可靠运行。
:::

### 功耗

请参考下表了解 Seeed Studio 实验室测试的 reComputer R1000 功耗。请注意，此值仅供参考，因为测试方法和环境可能导致结果差异。

| 状态   | 电压 | 电流 | 功耗 | 描述 |
|   ---      |    ---    |   ---      |         ---          |        ---    |
|关机  |24V      |  51mA  |    1.224W         | 关机和断电状态下的静态功耗测试。|
|空闲      |24V      |  120mA |    2.88W          | 测试在为 reComputer R1000 设备提供 24V 电源且未运行任何测试程序时的输入电流。|
|满载 |24V      |  230mA  |    5.52W          | 使用 "stress -c 4" 命令配置 CPU 满载运行。未连接外部设备。 |

### 开机和关机

reComputer R1000 默认不带电源按钮，一旦连接电源，系统将自动启动。关机时，请在操作系统中选择关机选项，并等待系统完全关机后再切断电源。要重启系统，只需重新连接电源即可。

:::note
请注意，关机后，请至少等待 10 秒钟再重启系统，以便内部电容器完全放电。
:::

## 框图

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig12.png" /></div>

### IIC 图

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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 主机</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0（用于刷写操作系统）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3 针端子块（隔离）</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>复位按钮</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持 LCD*（板载于外壳内）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>扬声器*</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持麦克风*（板载于外壳内）</td>
    </tr>
  </tbody>
</table>
</div>

要查询 GPIO 映射和偏移量，请使用以下命令：

```bash
cat /sys/kernel/debug/gpio
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/16.png" /></div>

### LED 指示灯状态

reComputer R1000 配备了 6 个 LED 指示灯，用于显示设备的运行状态。请参考下表了解每个 LED 的具体功能和状态：

| LED 指示灯 | 颜色          | 状态 | 描述                                                  |
| ------------- | -------------- | ------ | ------------------------------------------------------------ |
| PWR           | 绿色          | 亮起     | 设备已连接电源。                      |
|               |                | 熄灭    | 设备未连接电源。                       |
| ACT           | 绿色          |        | 在 Linux 下，此引脚会闪烁以表示 eMMC 访问。<br /> 如果启动过程中发生任何错误，此 LED 将闪烁错误模式，<br />可以使用[树莓派网站上的查找表](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes)进行解码。 |
| USER          | 绿色/红色/蓝色 |        | 需要用户自定义。                                  |
| RS485-1       | 绿色          | 熄灭    | RS485 通道 1 无数据传输。                         |
|               |                | 闪烁  | RS485 通道 1 正在接收或发送数据。               |
| RS485-2       | 绿色          | 熄灭    | RS485 通道 2 无数据传输。                         |
|               |                | 闪烁  | RS485 通道 2 正在接收或发送数据。               |
| RS485-3       | 绿色          | 熄灭    | RS485 通道 3 无数据传输。                         |
|               |                | 闪烁  | RS485 通道 3 正在接收或发送数据。               |

**ACT 状态表**

| **长闪烁** | **短闪烁** | **状态**                          |
| ---------------- | ----------------- | ----------------------------------- |
| 0                | 3                 | 通用启动失败             |
| 0                | 4                 | 未找到 start*.elf                |
| 0                | 7                 | 未找到内核镜像              |
| 0                | 8                 | SDRAM 故障                       |
| 0                | 9                 | SDRAM 不足                  |
| 0                | 10                | 处于 HALT 状态                       |
| 2                | 1                 | 分区不是 FAT 格式                   |
| 2                | 2                 | 从分区读取失败       |
| 2                | 3                 | 扩展分区不是 FAT 格式          |
| 2                | 4                 | 文件签名/哈希不匹配 - Pi 4 |
| 4                | 4                 | 不支持的板卡类型              |
| 4                | 5                 | 致命固件错误                |
| 4                | 6                 | A 类电源故障                |
| 4                | 7                 | B 类电源故障                |

如果 ACT LED 以规律的四次闪烁模式闪烁，表示无法找到启动代码（start.elf）
如果 ACT LED 以不规律的模式闪烁，表示启动已开始。
如果 ACT LED 不闪烁，则 EEPROM 代码可能已损坏，请在不连接任何设备的情况下重试以确认。更多详情请查看树莓派论坛：
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums
更多详情请查看[树莓派论坛](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)。

要控制用户 LED，我们建议使用 sysfs，这是 Linux 内核提供的伪文件系统，用于公开各种内核子系统、硬件设备及其相关驱动程序的信息。在 ReComputer R1000 上，我们将用户 LED 接口抽象为三个设备文件（led-red、led-blue 和 led-green），使用户能够通过与这些文件交互来简单地控制 LED 灯。示例如下：

1. 要点亮红色 LED，请在终端中输入以下命令：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 要关闭红色 LED，请在终端中输入以下命令：

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 您可以同时点亮红色和绿色 LED，请在终端中输入以下命令：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### 蜂鸣器

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

reComputer R1000 配备了有源蜂鸣器，可用于各种用途，如报警和事件通知。在 reComputer R1000 v1.0 中，蜂鸣器通过 GPIO21 连接到 CM4，在 reComputer R1000 1.1 中通过 GPIO20 连接到 CM4。

:::note
要区分硬件版本（v1.0 和 v1.1），您可以参考 [reComputer R1000 V1.1 产品变更详情](https://wiki.seeedstudio.com/cn/recomputer_r1000_v1_1_description/)。
:::

对于 reComputer R1000 v1.0 用户，蜂鸣器连接到 GPIO-21，要开启/关闭蜂鸣器，请在终端中输入以下命令：

```bash
raspi-gpio set 21 op dh # turn on
raspi-gpio set 21 op dl # turn off
```

对于 reComputer R1000 v1.1 用户，蜂鸣器连接到 PCA9535 P15，要关闭（开启）蜂鸣器，请在终端中输入以下命令：

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

reComputer R1000 配备了 3 组 RS485 接口，使用 3 针连接器，信号和电源均采用隔离设计，确保在工业和自动化应用中的安全可靠运行。RS485A 和 RS485B 信号使用电容隔离，提供出色的 EMI 抗扰性，满足 RS485 接口的高速通信要求。
默认情况下，未安装 120Ω 终端电阻。但是，包装盒中包含五个表面贴装电阻。如有需要，用户应自行将电阻焊接到设备上。

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
RS485 接口使用隔离电源，这意味着连接到 RS485 接口的外部设备的地信号应连接到 GND_ISO 引脚。

:::

以下是 reComputer 485 接口相关引脚的数据表。

| RS485         | RS485_POWER_EN         | OS 设备文件 | P14         | 默认（高电平） |
| ------------- | ---------------------- | -------------- | ----------- | ------------- |
| TX5           |                        | /dev/ttyAMA5   | GPIO12      |               |
| RX5           |                        |                | GPIO13      |               |
| TX2           | ID_SD                  | /dev/ttyAMA2   | GPIO0/ID_SD |               |
| RX2           | ID_SC                  |                | GPIO1/ID_SC |               |
| TX3           |                        | /dev/ttyAMA3   | GPIO4       |               |
| RX3           |                        |                | GPIO5       |               |
| RS485_1_DE/RE | (高电平/DE \|\| 低电平/RE) | /dev/ttyAMA2   | GPIO6       | 默认低电平   |
| RS485_2_DE/RE |                        | /dev/ttyAMA3   | GPIO17      | 默认低电平   |
| RS485_3_DE/RE |                        | /dev/ttyAMA5   | GPIO24      | 默认低电平   |

默认情况下，RS485 端口的电源使能端口为高电平。每个 RS485 接口都处于接收状态。您可以做一个简单的实验。

将 PC 连接到 reComputer-R 的 485 端口。

在 reComputer 的终端中输入：

```shell
cat /dev/ttyAMA2
```

然后在您计算机的串口调试工具中发送一些数据，您可以在 reComputer 的终端窗口中观察到数据。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### 启动开关

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

reComputer R1000 的启动开关连接到 CM4 的 nRPI_BOOT 引脚。此开关为用户提供了在 eMMC 和 USB 之间选择启动源的选项。在正常模式下，开关应设置为远离带有 "BOOT" 标签的一侧，使系统从 eMMC 启动。相反，当用户需要刷写系统镜像时，应将开关设置为朝向 "BOOT" 标签，允许系统从 Type-C USB 接口启动。

<div class="table-center">

| 开关位置                                              | 模式        | 描述    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 正常模式 | 从 eMMC 启动 | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | 刷写模式  | 从 USB 启动  | High      |

</div>

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R1000 配备了一个 USB Type-C 端口和两个 USB Type-A 端口。请参考下表了解它们的功能和描述。

| **类型**   | **数量** | **协议** | **功能** | **描述**                                              |
| ---------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| **Type-C** | *1           | USB2.0       | USB-Device   | 用于串口调试、烧录镜像等。          |
| **Type-A** | *2           | USB2.0       | USB-Host     | 连接不同的 USB 设备，如闪存驱动器、<br /> USB 键盘或鼠标。 |

通过运行 **lsusb** 命令检查是否检测到 USB 集线器。此命令列出所有连接的 USB 设备，包括集线器。

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

运行此命令应显示连接到系统的 USB 设备信息，包括存在的任何 USB 集线器。

如果 USB 集线器正常工作，您应该在 **lsusb** 命令的输出中看到其详细信息。如果未列出，可能是集线器或其与系统的连接存在问题。在这种情况下，您可能需要对 USB 集线器或其连接进行故障排除。

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
请注意，reComputer R1000 的标准版本不包含 4G 模块。如果您需要 4G 功能，必须单独购买额外的 4G 模块。
:::

### SSD 插槽

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
reComputer R1000 上的 SSD 插槽设计用于容纳 NVMe M.2 2280 SSD，容量可达 128GB、256GB、512GB 和 1TB。此插槽允许高速存储扩展，使用户能够增强系统的性能和容量。

要列出磁盘（包括 SSD），您可以使用 *fdisk -l* 命令。方法如下：

```bash
sudo fdisk -l
```

此命令将显示连接到系统的所有磁盘列表，包括正确检测到的 SSD。查找代表您的 SSD 的条目。它们通常以 /dev/sd 开头，后跟一个字母（例如，/dev/sda、/dev/sdb 等）。
一旦您识别出对应于 SSD 的条目，就可以根据需要进行分区或格式化。

:::note
SSD 卡有两种主要用途：<br />
1.大容量存储：SSD 卡可用于大容量存储需求。<br />
2.带镜像的启动驱动器：另一种用法是将 SSD 既用作大容量存储，又用于存储系统镜像，允许直接从 SSD 卡启动。<br />
需要注意的是，市场上并非所有 SSD 卡都支持第二种用法。因此，如果您打算将其用作启动驱动器并且不确定购买哪种型号，我们建议选择我们推荐的 1TB SSD（SKU 112990267）。此型号已经过测试并验证了启动功能，降低了兼容性问题的风险，并最大限度地减少了试错成本。
:::

### Mini-PCle 插槽

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

| 插槽        | 支持的协议 |
| ----------- | ------------------ |
| Mini-PCIe 1 | 4G LTE             |
|             | USB LoRa®          |
|             | USB Zigbee         |
| Mini-PCIe 2 | SPI LoRa®          |
|             | USB LoRa®          |
|             | USB Zigbee         |

</div>

此设备具有两个 Mini-PCIe 接口，即 Mini-PCIe 插槽 1 和 Mini-PCIe 插槽 2。插槽 1 连接到 SIM 卡槽并支持 USB 协议，而插槽 2 支持 USB 和 SPI 协议但不连接到 SIM 卡槽。因此，4G LTE、USB LoRa® 和 USB Zigbee 等设备可以通过插槽 1 连接，而 SPI LoRa®、USB LoRa® 和 USB Zigbee 设备可以通过插槽 2 连接。

### 复位孔

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

reComputer R1000 的复位孔中有一个微型按钮开关。通过用细物体按下此按钮，可以复位 CM4。此引脚为高电平时表示 CM4 已启动。将此引脚拉低会复位模块。

### 以太网 RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-center">

| 名称 | 类型                        | 速度             | PoE                                |
| ---- | --------------------------- | ------------------ | ---------------------------------- |
| ETH0 | CM4 原生千兆以太网 | 10/100/1000 Mbit/s | 支持（需要额外模块） |
| ETH1 | 从 USB 转换          | 10/100 Mbit/s      | 不支持                      |

</div>

reComputer R1000 配备两个以太网 RJ45 端口。ETH0 是 CM4 原生千兆以太网接口，支持三种不同速度：10/100/1000 Mbit/s。可以购买额外的 PoE 模块来通过此接口启用以太网供电（PoE），为 reComputer R1000 提供电源。另一个 ETH1 支持 10/100 Mbit/s，由 USB 转换而来。

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

reComputer R1000 具有来自 CM4 的原生 HDMI 接口，支持高达 4K @ 60 fps 的视频输出。它非常适合需要多显示器的应用，允许用户将内容输出到外部大屏幕。

### RTC

reComputer R1000 具有 RTC 电路，预装了 CR2032 电池，即使在断电的情况下也能保持计时功能。

要测试实时时钟（RTC）功能，请按照以下步骤操作：

1. 禁用自动时间同步：

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 将时间设置为 2024 年 3 月 20 日下午 12:00：

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

此命令将读取并显示存储在 RTC 中的时间。
5. 断开 RTC 的电源，等待几分钟，然后重新连接并再次检查 RTC 时间，看看它是否保持了正确的时间。

### 看门狗

reComputer R1000 配备了独立的硬件看门狗电路，确保在系统异常崩溃时自动重启系统。看门狗电路通过 RTC 实现，允许从 1 到 255 秒的灵活喂狗时间。

要执行看门狗测试，请按照以下步骤操作：

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

您可以根据需要调整其他设置。
3. 确保看门狗服务正在运行：

```bash
sudo systemctl start watchdog
```

4. 要测试看门狗功能，执行以下命令来模拟系统挂起：

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

:::warning
此命令会触发内核崩溃，应该会导致看门狗重启系统。
:::

5. 监控系统以确认它在指定的超时时间后重启。
这些步骤将帮助您测试并确保系统上看门狗定时器的功能。

## 可选接口和模块

reComputer R1000 支持丰富的扩展模块和配件选择，使其适用于各种场景和需求。如果您有兴趣定制 reComputer R1000，请联系 odm@seeed.cc 获取更多信息。
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
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={5} style={{height: 18, width: '25%'}}>必须配合使用以实现 LoRa®WAN 功能</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>LoRa® 模块</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>区域可选 LoRaWAN 网关模块(SPI)-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>区域可选 LoRaWAN 网关模块(SPI)-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>区域可选 LoRaWAN 网关模块(USB)-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>区域可选 LoRaWAN 网关模块(USB)-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>LoRa® 天线</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LoRa 天线套件 - 868-915 MHz</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Zigbee 模块</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Mini-PCIe USB Zigbee 模块</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992005</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Zigbee 天线</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>reComputer R 专用 Zigbee 天线套件</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>此配件是 Wi-Fi 功能所必需的</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Wi-Fi/BLE 天线</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Raspberry Pi Compute Module 4 天线套件</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={8} style={{height: 18, width: '25%'}}>4G 天线配合 4G 模块实现 4G 功能，GPS 天线配合 4G 模块实现 GPS 功能</td>
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
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>4G 模块专用 4G 天线套件</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>GPS 天线</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>EC25 4G 模块专用 GPS 天线套件</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>加密芯片 TPM 2.0</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>TPM 2.0 模块（配备英飞凌 SLB9670）</td>
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
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>MQ7813T120 PoE 模块套件适用于 reTerminal DM</td>
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

reComputer R1000 主板配备两个 Mini-PCIe 插槽。Mini-PCIe 插槽 1 支持 4G 模块、使用 USB 协议的 LoRa® 模块和使用 USB 协议的 Zigbee 模块；而 Mini-PCIe 插槽 2 支持使用 USB 和 SPI 协议的 LoRa® 模块以及使用 USB 协议的 Zigbee 模块。

:::note
不能在板上插入 2 个 LoRa® 模块。
:::

### Wi-Fi/BLE

reComputer R1000-10 由带有板载 Wi-Fi/BLE 版本的 CM4 供电，提供与 CM4 相同的 Wi-Fi/BLE 参数。有关详细参数信息，请参考树莓派官方网站。

:::note
需要注意的是，由于 reComputer R1000 的金属外壳，Wi-Fi/BLE 信号可能难以穿透金属外壳。如果您需要 Wi-Fi/BLE 功能，建议购买外置天线并[点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-wi-fible-antenna)。
:::

#### 连接 wifi

步骤 1. 扫描 Wi-Fi 网络：

```bash
nmcli dev wifi list
```

步骤 2. 连接到 wifi 网络：

```bash
sudo nmcli dev wifi connect network-ssid password "network-password"
sudo nmcli --ask dev wifi connect network-ssid #If you don't want to write your password on the screen, you can use the --ask option.
```

步骤 3. 设备开机后，会自动连接到 wifi。如果您想删除保存的 WiFi 信息：

```bash
nmcli con del network-ssid
```

连接断开后，连接到另一个 wifi。

#### 连接蓝牙设备

在添加蓝牙设备之前，您计算机上的蓝牙服务必须启动并运行。您可以使用 systemctl 命令检查这一点。

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
如果蓝牙服务状态不是活动的，您必须首先启用它。然后启动服务，使其在您启动设备时自动启动。

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

您可以使用 bluetoothctl 工具来连接和管理蓝牙，以下是一些常用命令和注释：

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

reComputer R1000 主板配备两个 Mini-PCIe 插槽，其中 Mini-PCIe 插槽 1 支持使用 USB 协议的 4G 模块。来自移远的 EC25 4G 模块已经过全面测试，与 reComputer R1000 完全兼容。

:::note
请注意，如果您需要 4G 功能，需要购买相应的 4G 模块和外置天线。[请点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna)。
:::

#### 通过 ECM 模式连接到 4G 模块

要通过 minicom 使用 AT 命令与 4G 模块交互，请按照以下步骤操作：

**步骤 1.** 请在系统启动前将支持 4G 的 SIM 卡插入[SIM 卡插槽](/cn/recomputer_r/#sim-slot)。

**步骤 2.** 使用 ```lsusb``` 检查 EC25-EUX 是否被检测到

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**步骤 3.** 安装串行通信工具 minicom。

```sh
sudo apt install minicom
```

**步骤 4.** 通过 minicom 连接 EC25-EUX 4G 模块。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

一旦串行连接打开，输入 AT 并按"Enter"，您应该看到 OK。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**步骤 5.** 启用 4G 模块连接到 4G 网络

在同一个 minicom 串行窗口中请输入：

```sh
AT+QCFG="usbnet"
```

它将返回类似 ```+QCFG: "usbnet",0,``` 的内容，但我们需要将其设置为 1（ECM 模式），因此输入以下命令：

```sh
AT+QCFG="usbnet",1
```

然后输入以下命令强制调制解调器重启：

```sh
AT+CFUN=1,1
```

然后您可以重启或等待一段时间，让模块从您的 SIM 卡运营商获取互联网连接。

您也可以使用命令 `ifconfig` 查询 reComputer R1000 的网络状态。

ECM 模式将为您创建一个新的网络接口 `usb0` 供您使用。


#### 通过 QMI 模式连接到 4G 模块

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

输入 ifconfig 检查是否已分配 IP 地址

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/get_start/image-2.png"/></div>

网络连接测试成功后，您可以创建一个 systemd 服务来确保系统启动时 4G 模块自动连接。

**步骤 4.** 创建 systemd 服务文件。

创建自动启动脚本：

```sh
sudo vi /opt/auto_4G.sh
```

输入以下内容。APN 应根据您的 SIM 卡运营商确定。这里，`3gnet` 是中国联通的 APN。

```sh
#!/bin/bash
sudo quectel-CM -s 3gnet
```

添加执行权限：

```bash
sudo chmod 0755 /opt/auto_4G.sh
```

创建自动启动服务文件：

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

然后您可以重启或等待一段时间，让模块从您的 SIM 卡运营商获取互联网连接。

您也可以使用命令 `ifconfig` 来查询 reComputer R1000 的网络状态。

QMI 模式将为您创建一个新的网络接口 `wwan0` 供您使用。




### LoRa® 模块

:::note
两个 Mini-PCIe 插槽都支持使用 USB 协议的 LoRa® 模块。同时，Mini-PCIe 插槽 2 支持使用 SPI 协议的 LoRa® 模块。来自 Seeed Studio 的 WM1302 模块已经过全面测试，与 reComputer R1000 完全兼容。但是 USB 版本需要使用为 4G 模块设计的 Mini PCIe，这意味着如果您想同时使用 4G 模块和 LoraWAN® 模块，请选择 WM1302 LoraWAN® 模块的 SPI 版本。
<br />
请注意，如果您需要 LoRa® 功能，必须购买相应的 LoRa® 模块和外部天线。
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI 模块">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

**步骤 1.** 请参考 [LoraWAN® 模块硬件组装](/cn/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) 指南，将 `WM1302 SPI LoraWAN® 模块` 安装到 `LoraWAN® Mini PCIe 插槽` 中，您应该看到 *`Lora`* 丝印。

**步骤 2.** 在命令行中输入 `sudo raspi-config` 打开 Raspberry Pi 软件配置工具：

- 选择 Interface Options
- 选择 SPI，然后选择 **Yes** 启用它
- 选择 I2C，然后选择 **Yes** 启用它
- 选择 Serial Port，然后对 "Would you like a login shell..." 选择 **No**，对 "Would you like the serial port hardware..." 选择 **Yes**

完成后，请重启 Raspberry Pi 以确保这些设置生效。

**步骤 3.** 下载 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 到 reComputer R1000 并编译它。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

将 `#define I2C_DEVICE "/dev/i2c-1"` 更改为 `#define I2C_DEVICE "/dev/i2c-3"`。

:::important
如果您使用的是 1.1 版本的 reComputer R1000，请更改为 `#define I2C_DEVICE "/dev/i2c-6"`
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

将 `"com_path": "/dev/spidev0.0"` 更改为 `"com_path": "/dev/spidev0.1"`

:::important
如果您使用的是 1.1 版本的 reComputer R1000，请更改为 `"com_path": "/dev/spidev1.1"`
:::

**步骤 6.** 启动 LoraWAN® 模块

然后根据您的 WM1302 工作频率版本运行以下代码来启动 LoraWAN® 模块。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB 模块">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

**步骤 1.** 请参考 [LoraWAN® 模块硬件组装](/cn/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) 指南，将 `WM1302 USB LoraWAN® 模块` 安装到 `4G Mini PCIe 插槽` 中，您应该看到 *`4G`* 丝印。

**步骤 2.** 在命令行中输入 `sudo raspi-config` 打开 Raspberry Pi 软件配置工具：

- 选择 Interface Options
- 选择 I2C，然后选择 **Yes** 启用它
- 选择 Serial Port，然后对 "Would you like a login shell..." 选择 **No**，对 "Would you like the serial port hardware..." 选择 **Yes**

完成后，请重启 Raspberry Pi 以确保这些设置生效。

**步骤 3.** 下载 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 到 reTerminal 并编译它。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

将 `#define I2C_DEVICE "/dev/i2c-1"` 更改为 `#define I2C_DEVICE "/dev/i2c-3"`。

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

将 `"com_path": "/dev/ttyACM0"` 更改为 `"com_path": "/dev/ttyACM4"`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/change_file.png" /></div>

**步骤 8.** 启动 LoraWAN® 模块

然后根据您的 WM1302 工作频率版本运行以下代码来启动 LoraWAN® 模块。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

此命令指定要用于 LoRa® USB 的配置文件。

</TabItem>
</Tabs>

<!-- Code END -->

### Zigbee 模块

Mini-PCIe 插槽支持使用 USB 协议的 Zigbee 模块，允许将 Zigbee 功能无缝集成到兼容设备中。此功能可在 Zigbee 网络内实现高效的通信和控制，增强系统的多功能性和连接性。由于有两个 Mini-PCIe 插槽可用于 Zigbee 模块，用户可以灵活地实施多样化的应用以增强可靠性。

:::note
请注意，如果您需要 Zigbee 功能，必须购买相应的 Zigbee 模块和外部天线。
[请点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna)。
:::

#### 将 reComputer R1000 与 Zigbee 模块设置为 Zigbee 协调器

**步骤 1.** 检查串口：
使用以下命令检查可用的串口：

```bash
cat /dev/ttyACM*
```

**步骤 2.** 安装串口通信工具，然后输入 *cutecom* 打开 UI：

```bash
sudo apt-get install cutecom
```

**步骤 3.** 配置设置并打开通信：

- 将波特率配置为 115200
- 勾选底部的 'Hex output'
- 选择正确的设备端口，例如：/dev/ttyACM0
- 然后点击 'Open' 建立通信

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbee1.png" /></div>

:::note
更多详细信息，请参考 [E18-MS1PA2-IPX](https://www.ebyte.com/product-view-news.html?id=894)。有关十六进制命令说明，请参考 [Ebyte Zigbee 3.0 模块十六进制命令标准规范](https://www.ebyte.com/pdf-down.aspx?id=2936)。
:::

**步骤 4.** 将 Zigbee 模块配置为协调器
在确认模块处于十六进制代码模式后，按照以下步骤配置第一个 Zigbee 模块：

- 设置为协调器：发送命令 `55 04 00 05 00 05`，期望响应 `55 04 00 05 00 05`。<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand.png" /></div>

- 重置设备：按下重置按钮或发送命令 `55 07 00 04 00 FF FF 00 04`。<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand2.png" /></div>

- 网络组建：发送命令 `55 03 00 02 02`。<br />
  <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand3.png" /></div>

:::note
对于校验位计算，可以使用 [Block Check Character calculator](https://bcc.beyerleinf.de/) 等工具；也可以使用带有 BCC 计算功能的串口通信工具，如 SSCOM 和 XCOM。
:::

**步骤 5.** 检查设备状态：
发送命令 `5 03 00 00 00` 检查设备状态。期望得到类似 `55 2a 00 00 00 01 XX XX XX XX` 的响应，其中 `XX` 代表设备信息。

**步骤 6.** 进入透明模式：
如果网络组建成功，通过发送命令 `55 07 00 11 00 03 00 01 13` 进入透明模式。两个模块都应处于透明模式以进行直接通信。不要忘记将输入模式设置为 *None*。要退出透明模式，发送 `+++`。
 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand4.png" /></div>

**步骤 7.** 附加说明：

- 如果路由器配置失败，设备可能已经是协调器。使用命令 `55 07 00 04 02 xx xx xx` 离开网络。
- 使用命令 `55 04 0D 00 00 0D`（查询）和 `55 04 0D 01 XX XX`（设置）测试传输功率。

然后可以通过 ZHA、zigbee2mqtt、Tasmota 平台等将 Zigbee 设备连接到 reComputer R1000。

### PoE

reComputer R1000 作为受电设备，通过添加 PoE 电源模块可以支持 IEEE 802.3af 标准。用户需要拆卸设备来安装 PoE 模块以实现以太网 PoE 功能。

:::note
reComputer R1000 支持 PoE 供电，但标准产品默认不包含 PoE 模块。Seeed 可以为批量定制订单提供 PoE 焊接和组装服务。但是，如果客户正在测试样品，他们需要[自己焊接和组装 PoE 模块](/cn/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module)。
:::

### M.2 插槽

reComputer R1000 通过板载两个 Mini-PCIe 插槽下方的 PCIe 插槽（J62）支持 2280 NVMe SSD 和 AI 加速器（Hailo）。需要注意的是，CM4 的 PCIe 是 gen2.0，最大理论速度为 5Gbps。如果您使用的是 Gen3.0 或更高版本的 SSD，可能无法达到 SSD 的最大速度。经过测试，安装了 SSD 的 reTerminal DM 可以达到最大写入速度 230MB/s 和最大读取速度 370MB/s。如果您不确定哪些 SSD 兼容，可以按照下面的配件列表购买。

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
1- 速度测试结果可能因 SSD 型号、测试方法和测试环境而异。此处提供的数值仅供参考，是在 Seeed 实验室中获得的。<br />

SSD 卡有两种主要用途：<br />
1.大容量存储：SSD 卡可用于大容量存储需求。<br />
2.带镜像的启动驱动器：另一种用法是将 SSD 既用作大容量存储，又用于存储系统镜像，允许直接从 SSD 卡启动。<br />
需要注意的是，市场上并非所有 SSD 卡都支持第二种用法。因此，如果您打算将其用作启动驱动器并且不确定购买哪种型号，我们建议选择我们推荐的 **1TB SSD（SKU [112990267](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)）**。该型号已经过测试并验证了启动功能，降低了兼容性问题的风险，并最大限度地减少了试错成本。
:::

### 加密芯片 TPM 2.0

TPM 采用英飞凌的 OPTIGA™ TPM SLB9670，符合可信计算组织（TCG）TPM 2.0 规范，推荐作为 reComputer R1000 的加密芯片。该芯片具有应用于板载 J13 端口的 SPI 接口，以实现平台完整性的信任根、远程认证和加密服务。

:::note
[请点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-tpm-20-module)。
:::

如果您将 TPM 2.0 模块连接到设备，以下代码可以帮助检查 TPM 连接。

```bash
ls /dev | grep tpm
```

如果您在输出中看到 **tpm0** 和 **tpmrm0**，这意味着检测到 TPM（可信平台模块）设备并且在您的系统上可用。这表明 TPM 硬件被识别并且可访问，这是一个好兆头。您可以继续使用与 TPM 相关的功能或应用程序，因为知道设备存在且可访问。

### UPS

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

UPS 是 7F，串联工作。UPS 模块位于 DC5V 和 CM4 组件之间，利用 GPIO 信号在 5V 电源断电时警告 CPU。收到此信号后，CPU 在超级电容器能量耗尽之前执行紧急脚本，启动 "$ shutdown" 命令。
<br />
UPS 提供的备份持续时间很大程度上取决于系统负载。以下是使用配备 4GB RAM、32GB eMMC 存储和 Wi-Fi 模块的 CM4 模块测试的一些典型场景。
<br />

| 操作模式 | 时间（秒） | 备注                                                       |
| ----------------- | ------- | ------------------------------------------------------------ |
| 空闲              | 37      | 在加载官方驱动程序的空闲条件下测试 |
| CPU 满负载  | 18      | stress -c 4 -t 10m -v &                                      |

:::note
有关 UPS 功能，请联系我们获取更多信息，警报信号为低电平有效。
[请点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module)。
:::

CPU 和 DC/AC 电源输入之间的 GPIO25 用于在 5V 电源断电时警告 CPU。然后 CPU 应该在超级电容器能量耗尽之前在脚本中执行一些紧急操作并运行 `$ shutdown`
<br />
使用此功能的另一种方法是在 GPIO 引脚变化时启动关机。给定的 GPIO 引脚配置为输入键，生成 KEY_POWER 事件。此事件由 systemd-logind 处理，启动关机。
使用 `/boot/overlays/README` 作为参考，然后修改 `/boot/config.txt`。

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

:::note

1. 有关 UPS 功能，请联系我们获取更多信息。
2. 警报信号为低电平有效。

:::

下面的 Python 代码是通过 GPIO25 检测超级电容器 UPS 工作模式的演示，并在系统断电时自动保存数据并关机。

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

### DSI 和扬声器

板载预留了一个 DSI（J24）和一个 4 针扬声器（J7）接口，用于特殊用途。用户需要根据自己的需求购买插件。

## 其他资源

- [用户手册-reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_version01.pdf)
- [用户手册-reComputer R1000 中文版](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_CN_version01.pdf )
- [reComputer R1000 3D 文件](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [reComputer R1000 原理图设计、PCB 设计](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [reComputer R1000 宣传册](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer.pdf)
- [reComputer R1000 宣传册中文版](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer_CN.pdf)
- [reComputer R1000 v1.1 引脚分配](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

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
