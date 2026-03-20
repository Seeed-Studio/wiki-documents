---
description: reComputer R1225 LoRaWAN 网关概述
title: reComputer R1225 LoRaWAN 网关概述
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_introduction
last_update:
  date: 01/04/2026
  author: Kian
createdAt: '2026-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/r1225_introduction/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Appearance_Image/R1225_White_Background.png" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-US915-p-6722.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 描述

reComputer R1225 是一款功能强大且灵活的工业级 Raspberry Pi 物联网 LoRaWAN 网关与控制器，基于 CM4，具备 AI 能力。配备 3 路 RS485、双以太网、支持 BACnet 和 Modbus，具备坚固可靠的工业边缘物联网设备所需的一切特性。兼容 AI NPU 加速器，非常适合远程访问控制，尤其是 BMS、BAS 和 iBMS 场景。

## 特性

### 为楼宇自动化系统而设计

- 多路隔离 RS485 通道，支持高速和低速通信。

- 支持 BACnet、Modbus RTU 和 Modbus TCP/IP 协议
- 高达 4GB RAM，可处理数千个数据点，确保高效性能
- 清晰的双面 LED 指示灯，便于快速检查运行状态
- 高质量金属外壳，兼容导轨和壁挂安装
- 开源软件 Seeed Gateway OS，内置 ChirpStack、Basics™ Station、Packet Forward。支持定制化和衍生开发。

### 强劲性能

- 由 Raspberry Pi CM4 驱动

- Broadcom BCM2711 四核 Cortex-A72 (ARM v8) 64 位 SoC @ 1.5GHz
- 高达 4GB RAM 和 32GB eMMC

### 丰富的无线能力

- 片上 Wi-Fi

- 片上 BLE

- Mini-PCIe1：LTE
  - 4G 版本预装 LTE 模块：
    - EU868: EC25-EUX-mini-PCIe (LTE Cat 4)
    - US915: EC25-AFXGA-mini-PCIe (LTE Cat 4)

- Mini-PCIe2：预装 SPI LoRa® 模块
  - EU868: Wio-WM1302 LoRaWAN Gateway Module (SPI) - EU868
  - US915: Wio-WM1302 LoRaWAN Gateway Module (SPI) - US915

### 丰富接口

- 3x RS485（隔离）
- 1x 10M/100M/1000M 以太网（支持 PoE）
- 1x 10M/100M 以太网
- 1x HDMI 2.0
- 2x Type-A USB2.0
- 1x Type-C USB2.0（用于操作系统更新的 USB 控制台）
- 1x SIM 卡槽

### 安全性与可靠性

- 硬件看门狗
- UPS 超级电容（**已包含**）
- 金属外壳配 PC 侧板
- ESD：EN61000-4-2，3 级
- EFT：EN61000-4-4，2 级
- 浪涌：EN61000-4-5，2 级
- 生产生命周期：reComputer R1225 至少将生产至 2030 年 12 月

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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>CPU</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi CM4，四核 Cortex-A72@ 1.5GHz</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>操作系统</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi OS，Ubuntu</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RAM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>eMMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>32GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>系统规格</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>输入</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 针端子排</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>PoE（作为受电设备）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IEEE 802.3af 标准 12.95W PoE</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>供电电压（AC/DC）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12&#126;24V AC/9&#126;36V DC</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0（用于刷写操作系统）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3 针端子排（隔离）</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x LED indicators</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Buzzer</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Reset Button</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI(reserved)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>supports LCD*(on board within the enclosure)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>无线通信</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>片上 Wi-Fi</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>是</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>片上 BLE</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>是</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®(Occupied)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SPI LoRa®</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4G 蜂窝网络（可选）</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={3} style={{height: 18, width: '35.4622%'}}>认证</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE，FCC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RoHS</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SuperCAP UPS LTC3350 模块</td>
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
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>元器件和接口状态说明</strong></td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>尺寸（宽 x 高 x 深）</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>重量（净重）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>           </td>
    </tr>
  </tbody>
</table>
</div>
<!--待重新称重后补充-->

### 说明

**带 * 标记的选项需要根据配件清单额外购买。**

## 硬件概览

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Hardware_Overview03.jpg" /></div>

## 主板概览

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Mainboard_Overview02.jpg" /></div>

## 电源框图

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Power_Diagram04.jpg" /></div>

reComputer R1225 支持三种供电方式：交流电、直流端子和 PoE 端口。默认情况下，reComputer R1225 通过 AC/DC 端子供电（官方区域电源适配器 SKU:110061505/110061506），同时**已包含 PoE 供电模块（PoE 模块，SKU:110991925）**。这为电源选择提供了灵活性，并便于与各种电源轻松集成。

### 2-Pin 电源端子

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1225 可接受 12&#126;24V 的额定交流电压或 9&#126;36V 的直流电压。电源通过 2-pin 电源端子块连接。要对 reComputer R1225 接地，可以将地线固定在电源端子左上角的螺丝上。

:::note
该电源方案采用桥式整流二极管进行反接保护，并兼容交流和直流输入。这确保了**无论电源正负极如何连接**，电路都不会损坏。通过使用桥式整流器，输出电压极性在输入直流极性变化时仍保持不变，从而提供有效的反接保护。
:::

### POE（已包含）

安装 PoE 模块后，reComputer R1225 的 ETH0 端口即可支持 PoE 供电，从而通过以太网为设备供电，提供一种方便高效的供电方式。此选项简化了安装过程并减少了所需布线数量，非常适合电源受限或电源插座不易获得的应用场景。

- PoE 输入：范围 44~57V；典型值 48V
- PoE 输出：12V，最大 1.1A

:::note
值得注意的是，随 reComputer R1225 提供的 PoE 模块符合 IEEE 802.3af 标准，最大可提供 12.95W 的电源功率。**因此，如果需要连接 SSD 或 4G 模块等高功耗外设，PoE 供电可能无法满足需求**。在这种情况下，建议改用 AC/DC 端子供电，以确保设备稳定可靠运行。
:::

### 功耗

reComputer R1225 的功耗测试数据来自 Seeed Studio 实验室，如下表所示。请注意，该数值仅供参考，不同的测试方法和环境可能会导致结果有所差异。

待测试

| 状态     | 电压   | 电流   | 功耗               | 描述                                                                                                              |
|   ---    |    ---  |   ---   |         ---       |      ---                                                                                                            |
| 关机     |24V      |  mA     |    W              | 在关机断电状态下的静态功耗测试。                                                                                  |
| 空闲     |24V      |  mA     |    W              | 在未运行任何测试程序的情况下，为 reComputer R1225 设备提供 24V 电源时的输入电流测试。                            |
| 满载     |24V      |  mA     |    W              | 使用 "stress -c 4" 命令让 CPU 以满载运行进行配置测试，不连接任何外部设备。                                       |

### 开机与关机

reComputer R1225 默认不带电源按钮，连接电源后系统会自动启动。关机时，请在操作系统中选择关机选项，并等待系统完全关机后再切断电源。要重启系统，只需重新接通电源即可。

:::note
请注意，关机后请至少等待 **10 秒** 再重启系统，以便内部电容器完全放电。
:::

## 方框图

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Block_Diagram05.jpg" /></div>

### IIC 示意图

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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008（支持 PoE）</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3-pin 端子块（隔离）</td>
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
  </tbody>
</table>
</div>

要查询 GPIO 映射和偏移，请使用以下命令：

```bash
cat /sys/kernel/debug/gpio
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/16.png" /></div>

### LED 指示灯状态

reComputer R1225 配备 6 个 LED 指示灯，用于指示设备的运行状态。各 LED 的具体功能和状态请参见下表：

| LED 指示灯 | 颜色           | 状态 | 描述                                                                         |
| ------------- | -------------- | ------ | -------------------------------------------------------------------------- |
| PWR           | 绿色           | On     | 设备已连接电源。                                                             |
|               |                | Off    | 设备未连接电源。                                                             |
| ACT           | 绿色           |        | 在 Linux 下，该引脚会闪烁以表示 eMMC 访问。<br /> 如果在启动过程中发生任何错误，该 LED 将闪烁<br />错误模式，可通过查阅[树莓派官网上的对照表](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes)进行解码。 |
| USER          | 绿色/红色/蓝色 |        | 需要由用户自定义。                                                           |
| RS485-1       | 绿色           | Off    | RS485 通道 1 上无数据传输。                                                  |
|               |                | Blink  | RS485 通道 1 正在接收或发送数据。                                           |
| RS485-2       | 绿色           | Off    | RS485 通道 2 上无数据传输。                                                  |
|               |                | Blink  | RS485 通道 2 正在接收或发送数据。                                           |
| RS485-3       | 绿色           | Off    | RS485 通道 3 上无数据传输。                                                  |
|               |                | Blink  | RS485 通道 3 正在接收或发送数据。                                           |

#### ACT 状态表

| **长闪次数** | **短闪次数** | **状态**                          |
| ---------------- | ----------------- | ----------------------------------- |
| 0                | 3                 | 启动通用故障                       |
| 0                | 4                 | 未找到 start*.elf                  |
| 0                | 7                 | 未找到内核镜像                     |
| 0                | 8                 | SDRAM 故障                         |
| 0                | 9                 | SDRAM 不足                         |
| 0                | 10                | 处于 HALT 状态                     |
| 2                | 1                 | 分区不是 FAT                       |
| 2                | 2                 | 从分区读取失败                     |
| 2                | 3                 | 扩展分区不是 FAT                   |
| 2                | 4                 | 文件签名/哈希不匹配 - Pi 4         |
| 4                | 4                 | 不支持的板卡类型                   |
| 4                | 5                 | 致命固件错误                       |
| 4                | 6                 | 电源故障类型 A                     |
| 4                | 7                 | 电源故障类型 B                     |

如果 ACT LED 以规则的四次闪烁模式闪烁，则表示找不到引导代码（start.elf）
如果 ACT LED 以不规则模式闪烁，则表示启动已经开始。
如果 ACT LED 不闪烁，则 EEPROM 代码可能已损坏，请在未连接任何设备的情况下重试以确保。更多详情请查看 Raspberry Pi 论坛：
置顶帖：你的 Pi 无法启动吗？（启动问题置顶帖）- Raspberry Pi 论坛
更多详情请查看 [Raspberry Pi 论坛](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)。

#### 通过 Luci 界面自定义 LED 灯

#### 通过命令控制 LED 灯

要控制用户 LED，我们建议使用 sysfs，这是 Linux 内核提供的伪文件系统，用于公开各种内核子系统、硬件设备及其相关驱动的信息。在 reComputer R1225 上，我们将用户 LED 接口抽象为三个设备文件（led-red、led-blue 和 led-green），用户只需与这些文件交互即可轻松控制 LED 灯。示例如下：

1. 要打开红色 LED，请在终端中输入以下命令：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 要关闭红色 LED，请在终端中输入以下命令：

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 你可以同时打开红色和绿色 LED，请在终端中输入以下命令：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### 蜂鸣器

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

reComputer R1225 配备了有源蜂鸣器，可用于报警和事件通知等多种用途。

对于 reComputer R1225 用户（**R1225 基于 R1000 v1.1 硬件平台**），蜂鸣器连接到 PCA9535 P15，要关闭（打开）蜂鸣器，请在终端中输入以下命令：

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

reComputer R1225 配备了 3 组使用 3 针连接器的 RS485 接口，信号和电源均隔离，以确保在工业和自动化应用中的安全可靠运行。RS485A 和 RS485B 信号采用电容隔离，具有出色的 EMI 抗扰度，并满足 RS485 接口的高速通信要求。
**默认情况下，未安装 120Ω 终端电阻。但包装盒中包含五个贴片电阻。如有需要，用户需自行将电阻焊接到设备上。**

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
RS485 接口使用隔离电源，这意味着连接到 RS485 接口的外部设备的地信号应连接到 GND_ISO 引脚。

:::

以下是与 reComputer 的 485 接口相关的数据表引脚。

| RS485         | RS485_POWER_EN         | OS 设备文件  | P14         | 默认（高）   |
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

将 485 端口连接 PC 与 reComputer-R。

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

reComputer R1225 的启动开关连接到 CM4 的 nRPI_BOOT 引脚。该开关为用户提供在 eMMC 和 USB 之间选择启动源的选项。在正常模式下，开关应拨到远离带有 “BOOT” 标签一侧的位置，使系统从 eMMC 启动。相反，当用户需要烧录系统镜像时，应将开关拨向带有 “BOOT” 标签的一侧，使系统从 Type-C USB 接口启动。

<div class="table-center">

| 开关位置                                                                                                        | 模式        | 描述           | nRPI-BOOT |
| ---------------------------------------------------------------------------------------------------------------------- | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 正常模式    | 从 eMMC 启动   | 低        |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | 烧录模式    | 从 USB 启动    | 高        |

</div>

:::note
**在 Boot 模式下，POE 供电功能不可用。**
:::

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R1225 配备了一个 USB Type-C 接口和两个 USB Type-A 接口。请参考下表了解其功能和说明。

| **类型**   | **数量** | **协议** | **功能** | **说明**                                                                          |
| ---------- | ------------ | ------------ | ------------ | ---------------------------------------------------------------------------------- |
| **Type-C** | *1           | USB2.0       | USB-Device   | 用于串口调试、烧录镜像等。                                                        |
| **Type-A** | *2           | USB2.0       | USB-Host     | 连接不同的 USB 设备，如 U 盘、<br /> USB 键盘或鼠标。                              |

通过运行 **lsusb** 命令检查是否检测到 USB 集线器。该命令会列出所有已连接的 USB 设备，包括集线器。

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

运行此命令应会显示系统中已连接 USB 设备的信息，包括存在的任何 USB 集线器。

如果 USB 集线器工作正常，你应当能在 **lsusb** 命令的输出中看到其详细信息。如果未列出，则可能是集线器或其与系统连接存在问题。在这种情况下，你可能需要对 USB 集线器或其连接进行故障排查。

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
reComputer R1225 使用工业应用中常见的标准尺寸 SIM 卡槽，需要尺寸为 25mm x 15mm 的标准 SIM 卡。
:::note
reComputer R1225 提供 4G 版本。如果你购买的是标准版（不带 4G 模块），可以单独购买 4G 模块进行安装。Bazaar Mall 目前提供两种 4G 模块：欧洲（EMEA & Thai <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>）和美洲（北美 **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**）
:::

### SSD 插槽

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
reComputer R1225 上的 SSD 插槽用于安装 NVMe M.2 2280 SSD，容量支持 128GB、256GB、512GB 和 1TB。该插槽支持高速存储扩展，使用户能够提升系统的性能和容量。

要列出包括 SSD 在内的磁盘，可以使用 *fdisk -l* 命令。操作如下：

```bash
sudo fdisk -l
```

该命令会显示系统中连接的所有磁盘列表，如果 SSD 被正确识别，也会包含在内。请查找代表 SSD 的条目，它们通常以 /dev/sd 加一个字母开头（例如 /dev/sda、/dev/sdb 等）。
确认对应 SSD 的条目后，你就可以根据需要对其进行分区或格式化操作。

:::note
SSD 卡主要有两种用途：<br />
1.大容量存储：SSD 卡可用于满足大容量存储需求。<br />
2.带镜像的启动盘：另一种用法是将 SSD 同时作为大容量存储和系统镜像存储介质，从而可以直接从 SSD 卡启动系统。<br />
需要注意的是，市面上并非所有 SSD 卡都支持第二种用法。因此，如果你打算将其用作启动盘且不确定购买哪一款型号，我们建议选择我们推荐的 1TB SSD（SKU 112990267）。该型号已经过启动功能测试和验证，可降低兼容性问题风险并减少试错成本。
:::

### Mini-PCle 插槽

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

|         插槽         | 支持的协议 |
| -------------------- | ---------- |
|       Mini-PCIe 1    |   4G LTE   |
|       Mini-PCIe 2    |  SPI LoRa® |

</div>

:::note
reComputer R1225 提供标准版和 4G 版：对于标准版，Mini-PCIe 1 为空；对于 4G 版，Mini-PCIe 1 预装了 4G LTE。
:::

该设备配备两个 Mini-PCIe 接口，即 Mini-PCIe 插槽 1 和 Mini-PCIe 插槽 2。插槽 1 连接到 SIM 卡槽并支持 USB 协议，而插槽 2 支持 USB 和 SPI 协议，但不连接到 SIM 卡槽。因此，4G LTE 等设备可以通过插槽 1 连接，而 SPI LoRa® 设备可以通过插槽 2 连接。

### 复位孔

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

reComputer R1225 的复位孔内设有一个微型按键开关。使用细小物体按下该按键即可复位 CM4。当该引脚为高电平时，表示 CM4 已经启动；将该引脚拉低则会复位模块。

### 以太网 RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-left">

| 名称 | 类型                         | 速率               | PoE           |
| ---- | --------------------------- | ------------------ | ------------- |
| ETH0 | CM4 原生千兆以太网          | 10/100/1000 Mbit/s | 预装          |
| ETH1 | 由 USB 转换而来             | 10/100 Mbit/s      | 不支持        |

</div>

reComputer R1225 配备两个以太网 RJ45 接口。ETH0 是 CM4 原生千兆以太网接口，支持 10/100/1000 Mbit/s 三种速率。可额外购买 PoE 模块，通过该接口实现以太网供电（PoE），为 reComputer R1225 提供电源。另一个 ETH1 支持 10/100 Mbit/s，由 USB 转换而来。

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

reComputer R1225 具有来自 CM4 的原生 HDMI 接口，支持最高 4K @ 60 fps 视频输出。非常适合需要多显示器的应用，允许用户将内容输出到外部大屏幕。

### RTC

reComputer R1225 集成了 RTC 电路，并预装 CR2032 电池，即使在断电情况下也能保持计时功能。

要测试实时时钟（RTC）功能，请按以下步骤操作：

1. 禁用自动时间同步：

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 将时间设置为 2024 年 3 月 20 日 12:00 PM：

```bash
sudo hwclock --set --date "2024-03-20 12:00:00"
```

3. 将 RTC 时间同步到系统：

```bash
sudo hwclock --hctosys
```

4. 查看 RTC 时间：

```bash
sudo hwclock -r
```

该命令会读取并显示存储在 RTC 中的时间。
5. 断开 RTC 的电源，等待几分钟后重新接通电源，再次检查 RTC 时间以确认是否保持了正确时间。

### 看门狗

reComputer R1225 配备了独立的硬件看门狗电路，可在系统异常崩溃时自动重启系统。看门狗电路通过 RTC 实现，并支持 1 到 255 秒范围内灵活设置喂狗时间。

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

将配置修改如下：

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
3. 确保看门狗服务正在运行：

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
该命令会触发内核崩溃，并应促使看门狗重启系统。
:::

5. 监控系统，确认其在指定超时时间后完成重启。
通过这些步骤，你可以测试并确保系统上的看门狗定时器功能正常。

## 可选接口和模块

### Wi-Fi/BLE（已包含）

reComputer R1225 由带板载 Wi-Fi/BLE 版本的 CM4 提供支持，其 Wi-Fi/BLE 参数与 CM4 相同。有关详细参数信息，请参考 Raspberry Pi 官方网站。

:::note
需要特别注意的是，由于 reComputer R1225 采用金属外壳，Wi-Fi/BLE 信号可能难以穿透金属外壳。因此，如果你需要此功能，建议安装我们为你准备的外置天线。
:::

#### 连接 Wi-Fi

##### 通过 Luci UI 连接 Wi-Fi

##### 通过命令连接 Wi-Fi

步骤 1. 扫描 Wi-Fi 网络：

  ```bash
  nmcli dev wifi list
  ```

步骤 2. 连接到 Wi-Fi 网络：

  ```bash
  sudo nmcli dev wifi connect network-ssid password "network-password"
  sudo nmcli --ask dev wifi connect network-ssid
  ```

步骤 3. 设备上电后会自动连接到 Wi-Fi。  
  如果你想删除已保存的 Wi-Fi 信息：

  ```bash
  nmcli con del network-ssid
  ```

  连接断开后，再连接到另一个 Wi-Fi。

#### 连接蓝牙设备

在添加蓝牙设备之前，必须先启动并运行计算机上的蓝牙服务。你可以使用 systemctl 命令进行检查。

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
如果蓝牙服务状态不是 active，则必须先启用它。然后启动该服务，以便在设备启动时自动运行。

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

你可以使用 bluetoothctl 工具连接和管理蓝牙，以下是一些常用命令及说明：

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

### 4G 模块（可选）

reComputer R1225 LoRaWAN 网关提供标准版和 4G 版。标准版的 Mini-PCIe 插槽 1 为空，而 4G 版则预装了针对欧洲（EMEA 和泰国 <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>）和美洲（北美 **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**）分别定制的 Mini-PCIe 模块。

### LoRa® 模块（已包含）

reComputer R1225 LoRaWAN 网关上的 Mini-PCIe 插槽 2 被 SPI LoRa® 模块占用。

### PoE（已包含）

reComputer R1225 LoRaWAN 网关配备了 PoE 模块，用户无需自行购买、焊接和组装。

### M.2 插槽（可选）

reComputer R1225 通过主板上两个 Mini-PCIe 插槽下方的 PCIe 插槽（J62）支持 2280 NVMe SSD 和 AI 加速器（Hailo）。需要注意的是，CM4 的 PCIe 为 Gen2.0，理论最高速度为 5Gbps。如果你使用的是 Gen3.0 或更高版本的 SSD，可能无法达到 SSD 的最高速度。经过测试，安装 SSD 的 reTerminal DM 可实现最高 230MB/s 的写入速度和 370MB/s 的读取速度。如果你不确定哪些 SSD 兼容，可以按照下方配件列表进行购买。

[请点击此处查看组装说明](/cn/recomputer_r1000_assembly_guide/#组装-ssd)。

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
1- 速度测试结果可能会因 SSD 型号、测试方法和测试环境而有所不同。此处提供的数值仅供参考，且是在 Seeed 的实验室中获得的。<br />

SSD 卡主要有两种用途：<br />
1.大容量存储：SSD 卡可用于大容量存储需求。<br />
2.带镜像的启动盘：另一种用法是将 SSD 同时用作大容量存储和系统镜像存储，从而可以直接从 SSD 卡启动。<br />
需要注意的是，市面上并非所有 SSD 卡都支持第二种用法。因此，如果你打算将其用作启动盘且不确定购买哪种型号，我们建议选择我们推荐的 **1TB SSD（<a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">SKU [112990267]</a>）**。该型号已经过启动功能测试和验证，可降低兼容性问题风险并减少试错成本。
:::

### 加密芯片 TPM 2.0（可选）

推荐将符合 Trusted Computing Group（TCG）TPM 2.0 规范的 Infineon OPTIGA™ TPM SLB9670 作为 reComputer R1225 的加密芯片。该芯片采用 SPI 接口，应用于板载的 J13 端口，用于实现平台完整性的信任根、远程认证以及加密服务。

:::note
[请点击此处查看组装说明](https://wiki.seeedstudio.com/cn/recomputer_r1000_assembly_guide/#组装-tpm-20-模块)。
:::

如果你将 TPM 2.0 模块连接到设备，以下代码可以帮助检查 TPM 连接情况。

```bash
ls /dev | grep tpm
```

如果你在输出中看到 **tpm0** 和 **tpmrm0**，这意味着系统已检测到 TPM（可信平台模块）设备并可用。这表明 TPM 硬件已被识别且可访问，这是一个良好的信号。你可以在确认设备存在且可访问的前提下，继续使用与 TPM 相关的功能或应用程序。

### UPS（已包含）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

UPS 为 7F，串联工作。UPS 模块位于 DC5V 和 CM4 组件之间，使用一个 GPIO 信号在 5V 电源掉电时提醒 CPU。在接收到该信号后，CPU 会在超级电容能量耗尽前执行紧急脚本，并执行 "$ shutdown" 命令。
<br />
UPS 提供的备份时长在很大程度上取决于系统负载。以下是在配备 4GB RAM、32GB eMMC 存储和 Wi-Fi 模块的 CM4 模块上测试的一些典型场景。
<br />

| 工作模式 | 时间（秒） | 备注                                                            |
| ----------------- | ------- | ----------------------------------------------------------------- |
| 空闲              | 37      | 在空闲条件下测试，并加载官方驱动程序                             |
| CPU 满载          | 18      | stress -c 4 -t 10m -v &                                           |

:::note
如需了解 UPS 功能的更多信息，请联系我们，报警信号为低电平有效（LOW）。
:::

在 CPU 与 DC/AC 电源输入之间使用一个 GPIO25，当 5V 电源掉电时用于向 CPU 报警。然后 CPU 应在超级电容能量耗尽前在脚本中执行一些紧急操作，并运行 `$ shutdown`
<br />
使用此功能的另一种方式是：当 GPIO 引脚状态变化时触发关机。指定的 GPIO 引脚被配置为输入按键，用于产生 KEY_POWER 事件。systemd-logind 通过处理该事件来发起关机。
参考 `/boot/overlays/README`，然后修改 `/boot/config.txt`。

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

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

### DSI（可选）

板载预留了一个 DSI（J24），用于特殊用途。用户需根据自身需求购买配套插件。

## 其他资源

- [reComputer R1225 3D 文件](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [reComputer R1225 原理图设计、PCB 设计](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [reComputer R1225（R1000 v1.1）引脚分配](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

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
