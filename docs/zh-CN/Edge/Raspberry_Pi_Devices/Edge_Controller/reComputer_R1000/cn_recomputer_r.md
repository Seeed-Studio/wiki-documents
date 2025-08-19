---
description: reComputer R1000 入门指南
title: reComputer R1000 入门指南
keywords:
  - 边缘计算
  - reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /cn/recomputer_r
last_update:
  date: 07/17/2025
  author: Jiahao
---

<!-- ---
name: reComputer R1000 边缘物联网控制器基于高性能的 Raspberry Pi CM4 平台构建，配备四核 A72 处理器，最高支持 8GB RAM 和 32GB eMMC。
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

reComputer R1000 边缘物联网控制器基于高性能的 Raspberry Pi CM4 平台构建，配备四核 A72 处理器，最高支持 8GB RAM 和 32GB eMMC。该设备配备双以太网接口，可灵活配置，同时包括 3 个隔离的 RS485 通道，支持 BACnet、Modbus RTU、Modbus TCP/IP 协议。  
凭借强大的物联网网络通信能力，R1000 系列支持多种无线通信选项，包括 4G、LoRa®、Wi-Fi/BLE，可灵活配置为相应的无线网关。该控制器非常适合远程设备管理、能源管理以及智能建筑领域的各种场景。

## 特性

### 专为楼宇自动化系统设计
* 多个隔离的 RS485 通道支持高速和低速通信。
* 支持 BACnet、Modbus RTU 和 Modbus TCP/IP 协议
* 高达 8GB RAM 支持处理数千个数据点，确保高效性能
* 清晰的双面 LED 指示灯可快速检查运行状态
* 高质量金属外壳，兼容 DIN 导轨和墙面安装
* 支持 Yocto 和 Buildroot 定制操作系统

### 强大的性能
* 由 Raspberry Pi CM4 提供动力
* Broadcom BCM2711 四核 Cortex-A72 (ARM v8) 64 位 SoC @ 1.5GHz
* 高达 8GB RAM 和 32GB eMMC

### 丰富的无线功能
* 芯片内置 Wi-Fi
* 芯片内置 BLE
* Mini-PCIe1：LTE、USB LoRa®、USB Zigbee
* Mini-PCIe2：SPI LoRa®、USB LoRa®、USB Zigbee

### 丰富的接口
* 3x RS485（隔离）
* 1x 10M/100M/1000M 以太网（支持 PoE）
* 1x 10M/100M 以太网
* 1x HDMI 2.0
* 2x Type-A USB2.0
* 1x Type-C USB2.0（用于操作系统更新的 USB 控制台）
* 1x SIM 卡插槽

### 安全性与可靠性
* 硬件看门狗
* UPS 超级电容（可选）
* 金属外壳，配备 PC 侧面板
* ESD：EN61000-4-2，等级 3
* EFT：EN61000-4-4，等级 2
* 浪涌：EN61000-4-5，等级 2
* 生产生命周期：reComputer R1000 至少生产至 2030 年 12 月

> \*4G 和 LoRa® 模块默认不随 reComputer R1000 一起提供，请根据需要购买相关模块。

## 命名规则
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig11.png" alt="pir" width="800" height="auto"/></p>

## 规格

<div class="table-center">

<table>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2针端子块</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3针端子块（隔离）</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI（保留）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持 LCD*（机壳内板载）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>扬声器（保留）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持麦克风*（机壳内板载）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>无线通信</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>板载 Wi-Fi*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>无</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>板载 BLE*</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>超级电容 UPS LTC3350 模块*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>硬件看门狗</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1~255秒</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RTC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>高精度 RTC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>安全性</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2年</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>生产寿命</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>至2030年12月</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>声明</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>标有 * 的选项需根据配件清单额外购买。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>组件和接口状态声明</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>保留</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>用于未来使用或扩展。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>可选</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>非必要组件，用户可选择是否包含。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>已占用</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>当前正在使用并对产品功能至关重要。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>已包含</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>标准包装中提供的必要组件。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>机械规格</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>尺寸（宽 x 高 x 深）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>130 mm x 93 mm x 49.6 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>外壳</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6061 铝合金外壳，透明 PC 侧板</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>安装方式</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>DIN 导轨/墙面安装</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>重量（净重）</td>
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

## 电源示意图

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig13.png" /></div>

reComputer R1000 支持三种电源供电选项：AC、DC 端子和 PoE 端口。默认情况下，reComputer R1000 通过 AC/DC 端子供电（官方区域电源适配器 SKU:110061505/110061506），而 **PoE 供电（PoE 模块，SKU:110991925）为可选项**。这为电源选择提供了灵活性，并允许轻松集成各种电源。

### 2 针电源端子

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1000 的额定供电电压为 12~24V AC 或 9~36V DC。电源通过 2 针电源端子块连接器连接。为了接地 reComputer R1000，可以将接地线固定在电源端子左上角的螺丝上。

:::note
电源解决方案采用了桥式整流二极管以实现反接保护，并兼容 AC 和 DC 输入。这确保了**无论电源的正负极如何连接**，电路都不会损坏。通过使用桥式整流器，无论输入 DC 极性如何，输出电压极性始终保持固定，从而提供了有效的反接保护。
:::

### PoE（可选）

安装 PoE 模块后，reComputer R1000 的 ETH0 端口可以支持 PoE 供电，为设备通过以太网供电提供了一种方便高效的方式。此选项简化了安装过程，并减少了所需的布线量，非常适合电源有限或电源插座不可用的应用场景。

* PoE 输入：范围 44~57V；典型值 48V
* PoE 输出：12V，最大 1.1A

:::note
需要注意的是，reComputer R1000 提供的 PoE 模块符合 IEEE 802.3af 标准，最大可提供 12.95W 的电源。因此，如果需要连接高功率外设（如 SSD 或 4G 模块），PoE 供电可能不足。在这种情况下，建议使用 AC/DC 端子供电，以确保设备的稳定可靠运行。
:::

### 功耗

请参考下表，了解 Seeed Studio 实验室测试的 reComputer R1000 功耗数据。请注意，此数据仅供参考，因为测试方法和环境可能会导致结果有所不同。

| 状态       | 电压   | 电流    | 功耗            | 描述 |
|------------|--------|---------|-----------------|------|
| 关机       | 24V    | 51mA    | 1.224W          | 在关机和断电状态下的静态功耗测试。 |
| 空闲       | 24V    | 120mA   | 2.88W           | 测试在未运行任何测试程序时，向 reComputer R1000 设备提供 24V 电源时的输入电流。 |
| 满载       | 24V    | 230mA   | 5.52W           | 使用 "stress -c 4" 命令将 CPU 配置为满载运行。未连接外部设备。 |

### 开机与关机

reComputer R1000 默认不配备电源按钮，系统在连接电源后会自动启动。关机时，请选择操作系统中的关机选项，并等待系统完全关闭后再切断电源。要重新启动系统，只需重新连接电源即可。

:::note
请注意，在关机后，请至少等待 10 秒再重新启动系统，以便内部电容器完全放电。
:::

## 模块图

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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持 LCD*（机壳内置）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>扬声器*</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持麦克风*（机壳内置）</td>
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

reComputer R1000 配备了 6 个 LED 指示灯，用于指示设备的运行状态。请参考下表了解每个 LED 的具体功能和状态：

| LED 指示灯     | 颜色           | 状态   | 描述                                                         |
| -------------- | -------------- | ------ | ------------------------------------------------------------ |
| PWR            | 绿色           | 开启   | 设备已连接电源。                                             |
|                |                | 关闭   | 设备未连接电源。                                             |
| ACT            | 绿色           |        | 在 Linux 下，此引脚会闪烁以表示 eMMC 访问。<br />如果启动过程中发生任何错误，此 LED 将闪烁<br />错误模式，可使用 [Raspberry Pi 网站上的查找表](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes) 解码。 |
| USER           | 绿色/红色/蓝色 |        | 需由用户定义。                                               |
| RS485-1    | 绿色           | 关闭   | RS485 通道 1 上无数据传输。                              |
|                |                | 闪烁   | RS485 通道 1 正在接收或发送数据。                        |
| RS485-2    | 绿色           | 关闭   | RS485 通道 2 上无数据传输。                              |
|                |                | 闪烁   | RS485 通道 2 正在接收或发送数据。                        |
| RS485-3    | 绿色           | 关闭   | RS485 通道 3 上无数据传输。                              |
|                |                | 闪烁   | RS485 通道 3 正在接收或发送数据。                        |

**ACT 状态表**

| **长闪次数** | **短闪次数** | **状态**                          |
| ------------ | ------------ | --------------------------------- |
| 0            | 3            | 启动失败（通用错误）              |
| 0            | 4            | 未找到 start*.elf                |
| 0            | 7            | 未找到内核镜像                    |
| 0            | 8            | SDRAM 故障                       |
| 0            | 9            | SDRAM 不足                       |
| 0            | 10           | 处于 HALT 状态                   |
| 2            | 1            | 分区不是 FAT 格式                |
| 2            | 2            | 从分区读取失败                   |
| 2            | 3            | 扩展分区不是 FAT 格式            |
| 2            | 4            | 文件签名/哈希值不匹配 - Pi 4     |
| 4            | 4            | 不支持的板类型                   |
| 4            | 5            | 致命固件错误                     |
| 4            | 6            | 电源故障类型 A                   |
| 4            | 7            | 电源故障类型 B                   |

如果 ACT LED 以规律的四次闪烁模式闪烁，则表示无法找到启动代码（start.elf）。  
如果 ACT LED 以不规则模式闪烁，则表示启动已开始。  
如果 ACT LED 不闪烁，则可能是 EEPROM 代码已损坏，请在没有任何连接的情况下重试以确保。有关更多详细信息，请查看 Raspberry Pi 论坛：  
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums  
更多详细信息请查看 [Raspberry Pi 论坛](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)。

为了控制用户 LED，我们推荐使用 sysfs，这是 Linux 内核提供的伪文件系统，用于暴露各种内核子系统、硬件设备及其相关驱动程序的信息。在 reComputer R1000 上，我们将用户 LED 接口抽象为三个设备文件（led-red、led-blue 和 led-green），用户可以通过与这些文件交互来简单地控制 LED 灯。示例如下：

1. 要打开红色 LED，请在终端中输入以下命令：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 要关闭红色 LED，请在终端中输入以下命令：

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 您可以同时打开红色和绿色 LED，请在终端中输入以下命令：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### 蜂鸣器

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

reComputer R1000 配备了一个有源蜂鸣器，可用于报警和事件通知等多种用途。蜂鸣器通过 GPIO21 控制（适用于 reComputer R1000 v1.0），在 reComputer R1000 1.1 中通过 GPIO20 控制。

:::note
要区分硬件版本（v1.0 和 v1.1），您可以参考 [reComputer R1000 V1.1 产品变更详情](https://wiki.seeedstudio.com/cn/recomputer_r1000_v1_1_description/)。
:::

对于 reComputer R1000 v1.0 用户，蜂鸣器连接到 GPIO21，要打开/关闭蜂鸣器，请在终端中输入以下命令：

```bash
raspi-gpio set 21 op dh # 打开
raspi-gpio set 21 op dl # 关闭
```

对于 reComputer R1000 v1.1 用户，蜂鸣器连接到 PCA9535 P15，要打开/关闭蜂鸣器，请在终端中输入以下命令：

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # 打开
echo 0 | sudo tee /sys/class/gpio/gpio591/value # 关闭
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

reComputer R1000 配备了 3 组 RS485 接口，使用 3 针连接器，信号和电源均隔离，以确保在工业和自动化应用中的安全可靠运行。RS485A 和 RS485B 信号通过电容隔离实现，这提供了出色的 EMI 抗扰性，并满足 RS485 接口的高速通信要求。  
默认情况下，未安装 120Ω 终端电阻。然而，包装盒中包含五个贴片电阻。如果需要，用户需自行将电阻焊接到设备上。

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
RS485 接口使用隔离电源，这意味着连接到 RS485 接口的外部设备的地信号应连接到 GND_ISO 引脚。
:::

以下是与 reComputer 的 485 接口相关的数据表。

| RS485         | RS485_POWER_EN         | OS 设备文件    | P14         | 默认状态（高电平） |
| ------------------ | ---------------------- | -------------- | ----------- | ------------------ |
| TX5               |                        | /dev/ttyAMA5   | GPIO12      |                    |
| RX5               |                        |                | GPIO13      |                    |
| TX2               | ID_SD                  | /dev/ttyAMA2   | GPIO0/ID_SD |                    |
| RX2               | ID_SC                  |                | GPIO1/ID_SC |                    |
| TX3               |                        | /dev/ttyAMA3   | GPIO4       |                    |
| RX3               |                        |                | GPIO5       |                    |
| RS485_1_DE/RE     | (高电平/DE \|\| 低电平/RE) | /dev/ttyAMA2   | GPIO6       | 默认低电平         |
| RS485_2_DE/RE     |                        | /dev/ttyAMA3   | GPIO17      | 默认低电平         |
| RS485_3_DE/RE     |                        | /dev/ttyAMA5   | GPIO24      | 默认低电平         |

默认情况下，RS485端口的电源使能端口为高电平，每个RS485接口处于接收状态。您可以进行一个简单的实验。

将485端口连接到PC和reComputer-R。

在reComputer的终端中输入：

```shell
cat /dev/ttyAMA2
```

然后在您电脑的串口调试工具中发送一些数据，您可以在reComputer的终端窗口中观察到这些数据。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### 启动开关

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

reComputer R1000的启动开关连接到CM4的nRPI_BOOT引脚。此开关为用户提供了在eMMC和USB之间选择启动源的选项。在正常模式下，开关应设置为远离带有“BOOT”标签的一侧，使系统从eMMC启动。相反，当用户需要刷写系统镜像时，应将开关设置为靠近“BOOT”标签的一侧，使系统从Type-C USB接口启动。

<div class="table-center">

| 开关位置                                                    | 模式        | 描述           | nRPI-BOOT |
| ----------------------------------------------------------- | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 正常模式    | 从eMMC启动     | 低电平    |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | 刷写模式    | 从USB启动      | 高电平    |

</div>

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R1000配备了一个USB Type-C端口和两个USB Type-A端口。请参考下表了解它们的功能和描述。

| **类型**   | **数量**     | **协议**     | **功能**     | **描述**                                                    |
| ---------- | ------------ | ------------ | ------------ | ----------------------------------------------------------- |
| **Type-C** | *1           | USB2.0       | USB设备      | 用于串口调试、刷写镜像等。                                  |
| **Type-A** | *2           | USB2.0       | USB主机      | 连接不同的USB设备，例如U盘、<br />USB键盘或鼠标。           |

通过运行**lsusb**命令检查是否检测到USB集线器。此命令列出所有连接的USB设备，包括集线器。

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

运行此命令应显示连接到系统的USB设备的信息，包括任何存在的USB集线器。

如果USB集线器正常工作，您应该在**lsusb**命令的输出中看到其详细信息。如果未列出，则可能是集线器或其与系统连接存在问题。在这种情况下，您可能需要对USB集线器或其连接进行故障排除。

### SIM卡槽

<div style={{ position: 'relative', left: '150px' }}>
    <img 
        width="40" 
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig19.png" 
        style={{ transform: 'rotate(90deg)', position: 'absolute', top: '0', left: '0', transformOrigin: 'left top' }} 
    />
</div>
<br />
<br />
reComputer R1000使用工业应用中常见的标准尺寸SIM卡槽，需要尺寸为25mm x 15mm的标准SIM卡。
:::note
请注意，reComputer R1000的标准版本不附带4G模块。如果需要4G功能，必须单独购买额外的4G模块。
:::

### SSD卡槽

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
reComputer R1000的SSD卡槽设计用于容纳NVMe M.2 2280 SSD，支持128GB、256GB、512GB和1TB容量。此卡槽允许进行高速存储扩展，使用户能够提升系统的性能和容量。

要列出包括SSD在内的磁盘，可以使用*fdisk -l*命令。操作如下：

```bash
sudo fdisk -l
```

此命令将显示连接到系统的所有磁盘的列表，包括正确检测到的SSD。查找代表您的SSD的条目。它们通常以/dev/sd开头，后跟一个字母（例如/dev/sda、/dev/sdb等）。
一旦识别出与您的SSD对应的条目，您可以根据需要进行分区或格式化。

:::note
SSD卡的主要用途有两种：<br />
1. 高容量存储：SSD卡可用于满足高容量存储需求。<br />
2. 带镜像的启动盘：另一种用途是将SSD既用作高容量存储，又用于存储系统镜像，从而直接从SSD卡启动。<br />
需要注意的是，并非市场上的所有SSD卡都支持第二种用途。因此，如果您打算将其用作启动盘并不确定购买哪个型号，我们建议选择我们推荐的1TB SSD（SKU 112990267）。此型号已通过测试并验证了启动功能，降低了兼容性问题的风险，并减少了试错成本。
:::

### Mini-PCle卡槽

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig05.png" /></div>
<br />
<div class="table-center">

| 插槽        | 支持的协议         |
| ----------- | ------------------ |
| Mini-PCIe 1 | 4G LTE             |
|             | USB LoRa®          |
|             | USB Zigbee     |
| Mini-PCIe 2 | SPI LoRa®      |
|             | USB LoRa®          |
|             | USB Zigbee     |

</div>

该设备具有两个 Mini-PCIe 接口，分别为 Mini-PCIe 插槽 1 和 Mini-PCIe 插槽 2。插槽 1 连接到 SIM 卡插槽并支持 USB 协议，而插槽 2 支持 USB 和 SPI 协议，但不连接到 SIM 卡插槽。因此，诸如 4G LTE、USB LoRa® 和 USB Zigbee 等设备可以通过插槽 1 连接，而 SPI LoRa®、USB LoRa® 和 USB Zigbee 设备可以通过插槽 2 连接。

### 复位孔

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

在 reComputer R1000 的复位孔中有一个迷你按键开关。通过使用细小物体按下此按钮，可以复位 CM4。当该引脚为高电平时，表示 CM4 已启动。将该引脚拉低会复位模块。

### 以太网 RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-center">

| 名称 | 类型                        | 速度              | PoE                                |
| ---- | --------------------------- | ----------------- | ---------------------------------- |
| ETH0 | CM4 原生千兆以太网接口      | 10/100/1000 Mbit/s | 支持（需额外模块）                 |
| ETH1 | 由 USB 转换                 | 10/100 Mbit/s     | 不支持                            |

</div>

reComputer R1000 配备了两个以太网 RJ45 接口。ETH0 是一个 CM4 原生千兆以太网接口，支持三种速度：10/100/1000 Mbit/s。可以购买额外的 PoE 模块，通过该接口启用以太网供电（PoE），为 reComputer R1000 提供电源。另一个接口 ETH1 支持 10/100 Mbit/s，由 USB 转换而来。

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

reComputer R1000 配备了一个来自 CM4 的原生 HDMI 接口，支持最高 4K @ 60 fps 的视频输出。它非常适合需要多显示器的应用，允许用户将内容输出到外部大屏幕。

### RTC

reComputer R1000 配备了 RTC 电路，并预装了一块 CR2032 电池，即使在断电的情况下也能保持时间功能。

测试实时时钟 (RTC) 功能，请按照以下步骤操作：
1. 禁用自动时间同步：

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 将时间设置为 2024 年 3 月 20 日中午 12:00：

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
5. 断开 RTC 的电源，等待几分钟后重新连接电源，再次检查 RTC 时间，确认是否保留了正确的时间。

### 看门狗

reComputer R1000 配备了独立的硬件看门狗电路，可在系统异常崩溃时自动重启系统。看门狗电路通过 RTC 实现，并允许灵活设置喂狗时间，范围为 1 到 255 秒。

要执行看门狗测试，请按照以下步骤操作：

1. 安装看门狗软件：

```bash
sudo apt install watchdog 
```

2. 编辑看门狗配置文件：

```bash
# 确保已安装 vim，如果未安装，可以通过以下命令安装
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

修改配置如下：

```bash
watchdog-device		= /dev/watchdog
# 取消注释并编辑此行，以设置不同于默认一分钟的硬件超时值。
watchdog-timeout	= 120
# 如果你的看门狗在第一个超时间隔结束时就自动触发，
# 那么可以尝试取消下面这行的注释并将其值改为 'yes'。
#watchdog-refresh-use-settimeout	= auto
# 如果你使用的看门狗设备存在缺陷（例如某些 IPMI 实现），
# 可以尝试取消下面这行的注释，并将其值设置为 'yes'。
#watchdog-refresh-ignore-errors	= no
# ====================== 其他系统设置 ========================
#
# 测试之间的间隔。应该比硬件超时值少几秒。
interval		= 15
max-load-1		= 24
#max-load-5		= 18
#max-load-15		= 12
realtime		= yes
priority		= 1
```

您可以根据需要调整其他设置。
3. 确保看门狗服务正在运行：

```bash
sudo systemctl start watchdog
```

4. 测试看门狗功能，执行以下命令模拟系统挂起：

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

:::warning
此命令会触发内核崩溃，并应导致看门狗重启系统。
:::

5. 监控系统，确认其在指定超时时间后重新启动。
这些步骤将帮助您测试并确保系统上看门狗定时器的功能。

## 可选接口和模块

reComputer R1000 支持丰富的扩展模块和配件，适用于各种场景和需求。如果您有兴趣定制 reComputer R1000，请联系 odm@seeed.cc 了解更多信息。以下是配件和可选模块列表：

<div class="table-center">

<table>
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
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Zigbee 天线套件适用于 reComputer R</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>此配件是 Wi-Fi 功能所需</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Wi-Fi/BLE 天线</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Raspberry Pi Compute Module 4 天线套件</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={8} style={{height: 18, width: '25%'}}>4G 功能需配备 4G 模块和 4G 天线，GPS 功能需配备 4G 模块和 GPS 天线</td>
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
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>4G 模块用 4G 天线套件</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>GPS 天线</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>EC25 4G 模块用 GPS 天线套件</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>加密芯片 TPM 2.0</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>TPM 2.0 模块，带 Infineon SLB9670</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSD 卡</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>512GB NVMe M.2 PCle Gen3x4 2280 内部 SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>256GB NVMe M.2 PCle Gen3x4 2280 内部 SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>128GB NVMe M.2 PCle Gen3x4 2280 内部 SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>此模块需焊接到 reComputer R1000 的载板上</td>
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

reComputer R1000 主板配备了两个 Mini-PCIe 插槽。Mini-PCIe 插槽 1 支持使用 USB 协议的 4G 模块、LoRa® 模块以及使用 USB 协议的 Zigbee 模块；而 Mini-PCIe 插槽 2 支持使用 USB 和 SPI 协议的 LoRa® 模块以及使用 USB 协议的 Zigbee 模块。

:::note
不能在主板上同时插入两个 LoRa® 模块。
:::

### Wi-Fi/BLE

reComputer R1000-10 由带有板载 Wi-Fi/BLE 版本的 CM4 提供支持，提供与 CM4 相同的 Wi-Fi/BLE 参数。有关详细的参数信息，请参考 Raspberry Pi 官方网站。

:::note
需要注意的是，由于 reComputer R1000 的金属外壳，Wi-Fi/BLE 信号可能难以穿透金属外壳。如果您需要 Wi-Fi/BLE 功能，建议购买外部天线，并[点击此处查看安装说明](/cn/recomputer_r1000_assembly_guide/#assemble-wi-fible-antenna)。
:::

#### 连接 Wi-Fi

步骤1. 扫描 Wi-Fi 网络：

```bash
nmcli dev wifi list
```

步骤2. 连接到 Wi-Fi 网络：

```bash
sudo nmcli dev wifi connect network-ssid password "network-password"
sudo nmcli --ask dev wifi connect network-ssid # 如果您不想在屏幕上输入密码，可以使用 --ask 选项。
```

步骤3. 设备上电后会自动连接到 Wi-Fi。如果您想删除保存的 Wi-Fi 信息：

```bash
nmcli con del network-ssid
```

断开连接后，可以连接到其他 Wi-Fi。

#### 连接蓝牙设备

在添加蓝牙设备之前，您的计算机上必须启动并运行蓝牙服务。您可以使用 systemctl 命令检查。

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
如果蓝牙服务状态未激活，您必须先启用它。然后启动服务，以便在设备启动时自动启动。

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

您可以使用 bluetoothctl 工具连接和管理蓝牙，以下是一些常用命令及注释：

```bash
# 扫描设备附件
bluetoothctl scan on

# 使您的蓝牙适配器对其他设备可见，使用以下命令：
bluetoothctl discoverable on

# 将以下 A4:C1:38:F4:83:2E 替换为您要连接的设备的 MAC 地址
# 配对新的蓝牙设备
bluetoothctl pair A4:C1:38:F4:83:2E

# 连接之前配对的设备
bluetoothctl connect A4:C1:38:F4:83:2E

# 查看系统中配对的设备列表
bluetoothctl paired-devices

# 当蓝牙设备被信任时，系统在发现它后会自动连接
bluetoothctl trust A4:C1:38:F4:83:2E

# 取消信任
bluetoothctl untrust A4:C1:38:F4:83:2E

# 移除配对的蓝牙设备
bluetoothctl remove A4:C1:38:F4:83:2E

# 断开蓝牙连接，但不从配对列表中移除
bluetoothctl disconnect A4:C1:38:F4:83:2E

# 阻止特定设备连接到您的系统
bluetoothctl block A4:C1:38:F4:83:2E

# 解除设备阻止
bluetoothctl unblock A4:C1:38:F4:83:2E

# 使用交互模式并退出
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

reComputer R1000 主板配备了两个 Mini-PCIe 插槽，其中 Mini-PCIe 插槽 1 支持使用 USB 协议的 4G 模块。Quectel 的 EC25 4G 模块已完全测试与 reComputer R1000 兼容。

:::note
请注意，如果您需要 4G 功能，则需要购买相应的 4G 模块和外部天线。[请点击此处查看安装说明](/cn/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna)。
:::

通过 minicom 使用 AT 命令与 4G 模块交互，请按照以下步骤操作：

**步骤 1.** 在系统上电之前，请将支持 4G 的 SIM 卡插入 [SIM 卡插槽](/cn/recomputer_r/#sim-slot)。

**步骤 2.** 使用 ```lsusb``` 检查是否检测到 EC25-EUX。

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

打开串行连接后，输入 AT 并按下 'Enter'，您应该会看到 OK。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**步骤 5.** 启用 4G 模块连接到 4G 网络。

在相同的 minicom 串行窗口中输入：

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

然后您可以重启或等待一段时间，让模块从您的 SIM 卡运营商获取互联网。

您还可以使用命令 `ifconfig` 查询 reComputer R1000 的网络状态。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### LoRa® 模块

:::note
两个 Mini-PCIe 插槽均支持使用 USB 协议的 LoRa® 模块。同时，Mini-PCIe 插槽 2 支持使用 SPI 协议的 LoRa® 模块。Seeed Studio 的 WM1302 模块已完全测试与 reComputer R1000 兼容。然而，USB 版本需要使用为 4G 模块设计的 Mini PCIe 插槽，这意味着如果您想同时使用 4G 模块和 LoRaWAN® 模块，请选择 SPI 版本的 WM1302 LoRaWAN® 模块。
<br />
请注意，如果您需要 LoRa® 功能，则需要购买相应的 LoRa® 模块和外部天线。
:::

<!-- 代码 -->

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

**步骤 1.** 请参考 [LoraWAN® 模块硬件组装](/cn/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) 指南，将 `WM1302 SPI LoraWAN® 模块` 安装到 `LoraWAN® Mini PCIe 插槽` 中，您应该能看到 *`Lora`* 丝印。

**步骤 2.** 在命令行中输入 `sudo raspi-config` 打开 Raspberry Pi 软件配置工具：

- 选择 Interface Options
- 选择 SPI，然后选择 **Yes** 启用它
- 选择 I2C，然后选择 **Yes** 启用它
- 选择 Serial Port，然后选择 **No** 表示“是否需要登录 shell...”，并选择 **Yes** 表示“是否需要串口硬件...”

完成后，请重启 Raspberry Pi 以确保这些设置生效。

**步骤 3.** 下载 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 到 reComputer R1000 并编译。

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
SX1302_RESET_PIN=580     # SX1302 复位
SX1302_POWER_EN_PIN=578  # SX1302 电源启用
SX1261_RESET_PIN=579     # SX1261 复位（LBT / 频谱扫描）
// AD5338R_RESET_PIN=13    # AD5338R 复位（全双工 CN490 参考设计）
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**步骤 5.** 修改 `global_conf.json.sx1250.EU868` 配置文件的内容：

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868
```

将 `"com_path": "/dev/spidev0.0"` 修改为 `"com_path": "/dev/spidev0.1"`。

**步骤 6.** 启动 LoraWAN® 模块

然后运行以下代码，根据您的 WM1302 操作频率版本启动 LoraWAN® 模块。

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

**步骤 1.** 请参考 [LoraWAN® 模块硬件组装](/cn/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) 指南，将 `WM1302 USB LoraWAN® 模块` 安装到 `4G Mini PCIe 插槽` 中，您应该能看到 *`4G`* 丝印。

**步骤 2.** 在命令行中输入 `sudo raspi-config` 打开 Raspberry Pi 软件配置工具：

- 选择 Interface Options
- 选择 I2C，然后选择 **Yes** 启用它
- 选择 Serial Port，然后选择 **No** 表示“是否需要登录 shell...”，并选择 **Yes** 表示“是否需要串口硬件...”

完成后，请重启 Raspberry Pi 以确保这些设置生效。

**步骤 3.** 下载 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 到 reTerminal 并编译。

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
SX1302_RESET_PIN=580     # SX1302 复位
SX1302_POWER_EN_PIN=578  # SX1302 电源启用
SX1261_RESET_PIN=579     # SX1261 复位（LBT / 频谱扫描）
// AD5338R_RESET_PIN=13    # AD5338R 复位（全双工 CN490 参考设计）
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**步骤 5.** 加载 WM1302-USB 模块

```bash
# 检查设备
lsusb
```
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/check_lora_device.png" /></div>


```bash
# 使用 ID 号查找端口号
sudo dmesg | grep 5740
# 加载 ACM 模块 
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

将 `"com_path": "/dev/ttyACM0"` 修改为 `"com_path": "/dev/ttyACM4"`。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/change_file.png" /></div>

**步骤 8.** 启动 LoraWAN® 模块

然后运行以下代码，根据您的 WM1302 操作频率版本启动 LoraWAN® 模块。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

此命令指定用于 LoRa® USB 的配置文件。

</TabItem>
</Tabs>

<!-- 代码结束 -->


### Zigbee 模块

Mini-PCIe 插槽支持使用 USB 协议的 Zigbee 模块，从而实现 Zigbee 功能与兼容设备的无缝集成。此功能可在 Zigbee 网络中实现高效的通信与控制，增强系统的多功能性和连接性。通过两个 Mini-PCIe 插槽支持 Zigbee 模块，用户可以灵活实现多样化的应用，以提高可靠性。

:::note
请注意，如果需要 Zigbee 功能，必须购买相应的 Zigbee 模块和外部天线。
[点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna)。
:::

#### 将 reComputer R1000 配置为 Zigbee 协调器：

**步骤 1.** 检查串口：
使用以下命令检查可用的串口：

```bash
cat /dev/ttyACM*
```

**步骤 2.** 安装串口通信工具，然后进入 *cutecom* 打开界面：

```bash
sudo apt-get install cutecom
```

**步骤 3.** 配置设置并打开通信：
* 配置波特率为 115200
* 勾选底部的“Hex output”
* 选择正确的设备端口，例如：/dev/ttyACM0
* 然后点击“Open”以建立通信

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbee1.png" /></div>

:::note
更多详细信息，请参考 [E18-MS1PA2-IPX](https://www.ebyte.com/product-view-news.html?id=894)。有关 Hex 命令说明，请参考 [Ebyte Zigbee 3.0 模块 HEX 命令标准规范](https://www.ebyte.com/pdf-down.aspx?id=2936)。
:::

**步骤 4.** 将 Zigbee 模块配置为协调器
在确认模块处于 HEX 代码模式后，按照以下步骤配置第一个 Zigbee 模块：

- 设置为协调器：发送命令 `55 04 00 05 00 05`，预期响应为 `55 04 00 05 00 05`。<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand.png" /></div>

- 重置设备：按下重置按钮或发送命令 `55 07 00 04 00 FF FF 00 04`。<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand2.png" /></div>

- 网络组建：发送命令 `55 03 00 02 02`。<br />
  <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand3.png" /></div>

:::note
对于校验位计算，可以使用 [Block Check Character calculator](https://bcc.beyerleinf.de/) 工具；也可以使用 SSCOM 和 XCOM 等串口通信工具进行 BCC 计算。
:::

**步骤 5.** 检查设备状态：
发送命令 `5 03 00 00 00` 检查设备状态。预期响应类似于 `55 2a 00 00 00 01 XX XX XX XX`，其中 `XX` 表示设备信息。

**步骤 6.** 进入透明模式：
如果网络组建成功，发送命令 `55 07 00 11 00 03 00 01 13` 进入透明模式。两个模块都应处于透明模式以实现直接通信。不要忘记将输入模式设置为 *None*。要退出透明模式，发送 `+++`。
 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand4.png" /></div>

**步骤 7.** 其他注意事项：
- 如果路由器配置失败，设备可能已经是协调器。使用命令 `55 07 00 04 02 xx xx xx` 离开网络。
- 使用命令 `55 04 0D 00 00 0D`（查询）和 `55 04 0D 01 XX XX`（设置）测试传输功率。

然后可以通过 ZHA、zigbee2mqtt、Tasmota 平台等将 Zigbee 设备连接到 reComputer R1000。

### PoE

作为受电设备的 reComputer R1000 可通过添加 PoE 电源模块支持 IEEE 802.3af 标准。用户需要拆卸设备以安装 PoE 模块以实现以太网 PoE 功能。

:::note
reComputer R1000 支持 PoE 电源，但标准产品默认不包含 PoE 模块。Seeed 可为批量定制订单提供 PoE 焊接和组装服务。然而，如果客户正在测试样品，则需要 [自行焊接和组装 PoE 模块](/cn/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module)。
:::

### M.2 插槽

reComputer R1000 支持通过主板上两个 Mini-PCIe 插槽下方的 PCIe 插槽（J62）使用 2280 NVMe SSD 和 AI 加速器（Hailo）。需要注意的是，CM4 的 PCIe 为 Gen2.0，最大理论速度为 5Gbps。如果使用 Gen3.0 或更高版本的 SSD，可能无法达到 SSD 的最大速度。经过测试，安装 SSD 的 reTerminal DM 可实现最大写入速度 230MB/s 和最大读取速度 370MB/s。如果不确定哪些 SSD 兼容，可以根据以下配件列表购买。

[点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-ssd)。

<div class="table-center">

<table >
  <tbody>
  <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSD 卡</td>
      <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">112990267</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>512GB NVMe M.2 PCle Gen3x4 2280 内部 SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html">112990247</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>256GB NVMe M.2 PCle Gen3x4 2280 内部 SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html">112990246</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>128GB NVMe M.2 PCle Gen3x4 2280 内部 SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html">112990226</a></td>
  </tr>
  </tbody>
</table>

</div>

:::note
请注意：<br />
1- 速度测试结果可能因 SSD 型号、测试方法和测试环境的不同而有所差异。此处提供的数值仅供参考，这些数据是在 Seeed 实验室中获得的。<br />

SSD 卡主要有两种用途：<br />
1. 高容量存储：SSD 卡可用于满足高容量存储需求。<br />
2. 带有镜像的启动盘：另一种用途是将 SSD 用作高容量存储，同时存储系统镜像，从而可以直接从 SSD 卡启动。<br />
需要注意的是，并非市场上的所有 SSD 卡都支持第二种用途。因此，如果您打算将其用作启动盘且不确定购买哪种型号，我们建议选择我们推荐的 **1TB SSD(SKU [112990267](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html))**。此型号已通过启动功能测试和验证，可降低兼容性问题的风险并减少试错成本。
:::

### 加密芯片 TPM 2.0

TPM 采用 Infineon 的 OPTIGA™ TPM SLB9670 芯片，该芯片符合 Trusted Computing Group (TCG) TPM 2.0 规范，推荐作为 reComputer R1000 的加密芯片。该芯片具有 SPI 接口，应用于板载的 J13 端口，以实现平台完整性的信任根、远程认证和加密服务。

:::note
[请点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-tpm-20-module)。
:::

如果您将 TPM 2.0 模块连接到设备，可以使用以下代码检查 TPM 连接。

```bash
ls /dev | grep tpm
```

如果输出中看到 **tpm0** 和 **tpmrm0**，则表示系统已检测到 TPM（可信平台模块）设备并可用。这表明 TPM 硬件已被识别并可访问，这是一个良好的信号。您可以继续使用与 TPM 相关的功能或应用程序，因为设备已准备就绪并可用。

### UPS

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

UPS 是 7F，采用串联方式运行。UPS 模块位于 DC5V 和 CM4 组件之间，使用 GPIO 信号在 5V 电源丢失时向 CPU 发出警报。收到此信号后，CPU 会在超级电容器的能量耗尽之前执行紧急脚本，启动 "$ shutdown" 命令。
<br />
UPS 提供的备份时长在很大程度上取决于系统负载。以下是使用配备 4GB RAM、32GB eMMC 存储和 Wi-Fi 模块的 CM4 模块进行的一些典型测试场景。
<br />

| 操作模式         | 时间(s) | 备注                                                         |
| ---------------- | ------- | ------------------------------------------------------------ |
| 空闲             | 37      | 在加载官方驱动程序的空闲条件下测试                           |
| CPU 满载         | 18      | stress -c 4 -t 10m -v &                                      |

:::note
有关 UPS 功能的更多信息，请联系我们，警报信号为低电平有效。
[请点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module)。
:::

CPU 和 DC/AC 电源之间的 GPIO25 用于在 5V 电源断电时向 CPU 发出警报。然后，CPU 应在超级电容器能量耗尽之前通过脚本执行紧急操作并运行 `$ shutdown`。
<br />
另一种使用此功能的方法是当 GPIO 引脚状态变化时启动关机。给定的 GPIO 引脚被配置为生成 KEY_POWER 事件的输入键。此事件由 systemd-logind 处理以启动关机。
参考 `/boot/overlays/README`，然后修改 `/boot/config.txt`。

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

:::note
1. 有关 UPS 功能的更多信息，请联系我们。
2. 警报信号为低电平有效。
:::

以下 Python 代码是一个示例，用于通过 GPIO25 检测超级电容 UPS 的工作模式，并在系统断电时自动保存数据并关机。

```python
import RPi.GPIO as GPIO
import time,os

num = 0

GPIO.setmode(GPIO.BCM)
# 设置 GPIO25 为输入模式
# 添加 500ms 抖动时间以实现软件稳定性
GPIO.setup(25,GPIO.IN,pull_up_down = GPIO.PUD_UP)
GPIO.add_event_detect(25,GPIO.FALLING, bouncetime = 500) 
while True:
  if GPIO.event_detected(25):
    print('...外部电源断开...')
    print('')
    os.system('sync')
    print('...数据保存中...')
    print('')
    time.sleep(3)
    os.system('sync')
    # 保存两次
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

板载保留了一个 DSI (J24) 和一个 4 针扬声器 (J7) 接口，用于特殊用途。用户需根据自身需求购买插件。

## 其他资源

*  [用户手册 - reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_version01.pdf)
*  [用户手册 - reComputer R1000（中文版）](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_CN_version01.pdf)
*  [reComputer R1000 3D 文件](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
*  [reComputer R1000 原理图设计、PCB设计](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
*  [reComputer R1000 宣传单页](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer.pdf)
*  [reComputer R1000 宣传单页（中文版）](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer_CN.pdf)
*  [reComputer R1000 v1.1 引脚分配](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>