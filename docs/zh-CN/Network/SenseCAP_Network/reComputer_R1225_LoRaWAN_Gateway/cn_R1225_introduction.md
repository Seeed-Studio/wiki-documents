---
description: reComputer R1225 LoRaWAN 网关概述
title: reComputer R1225 LoRaWAN 网关概述
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/r1225_introduction
last_update:
  date: 01/04/2026
  author: Kian
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Appearance_Image/R1225_White_Background.png" alt="pir" width={500} height="auto" /></p>

<!--缺少商详链接，待产品上架后补上-->
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 产品描述
reComputer R1225 是一款功能强大且灵活的工业级 Raspberry Pi IoT LoRaWAN 网关和控制器，采用 CM4 驱动，具备 AI 功能。配备 3 个 RS485 接口、双以太网、BACnet 和 Modbus 支持，具备坚固可靠的工业边缘 IoT 设备所需的所有必要功能。兼容 AI NPU 加速器，是远程访问控制的完美选择，特别适用于 BMS、BAS 和 iBMS。


## 特性

### 专为楼宇自动化系统设计

- 多个隔离的 RS485 通道支持高速和低速通信。

- 支持 BACnet、Modbus RTU 和 Modbus TCP/IP 协议
- 高达 4GB RAM 支持处理数千个数据点，确保高效性能
- 清晰的双面 LED 指示灯有助于快速检查运行状态
- 高品质金属外壳，兼容 DIN 导轨和壁挂安装
- 开源软件 Seeed Gateway OS、ChirpStack、Basics™ Station、Packet Forward 内置。支持定制和衍生开发。

### 强大性能

- 采用 Raspberry Pi CM4 驱动

- Broadcom BCM2711 四核 Cortex-A72 (ARM v8) 64 位 SoC @ 1.5GHz
- 高达 4GB RAM 和 32GB eMMC

### 丰富的无线功能

- 片上 Wi-Fi

- 片上 BLE

- Mini-PCIe1: LTE
  - 4G 版本预装 LTE 模块：
    - EU868: EC25-EUX-mini-PCIe (LTE Cat 4)
    - US915: EC25-AFXGA-mini-PCIe (LTE Cat 4)

- Mini-PCIe2: 预装 SPI LoRa® 模块
  - EU868: Wio-WM1302 LoRaWAN Gateway Module (SPI) - EU868
  - US915: Wio-WM1302 LoRaWAN Gateway Module (SPI) - US915 

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

- UPS 超级电容器（**包含**）
- 金属外壳配 PC 侧板
- ESD: EN61000-4-2，3 级
- EFT: EN61000-4-4，2 级
- 浪涌: EN61000-4-5，2 级
- 产品生命周期：reComputer R1225 将持续生产至少到 2030 年 12 月



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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi OS, Ubuntu</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 针端子块</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI（预留）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持 LCD*（外壳内板载）</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®（已占用）</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE、FCC</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>保修</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 年</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>产品生命周期</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>至 2030 年 12 月</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>当前正在使用且对产品功能至关重要。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>包含</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>标准包装中提供的必需组件。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>机械</strong></td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>安装</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>DIN 导轨/壁挂</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>重量（净重）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>待重新称重补充</td>
    </tr>
  </tbody>
</table>
</div>

### 声明

**标有 * 的选项需要根据配件清单额外购买。**


## 硬件概述

<!--缺少 3 天线接口照片，待更新后补充-->
<div align="center"><img width={800} src="" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig031.png" /></div>

## 电源图

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig13.png" /></div>

reComputer R1225 支持三种电源供电选项：AC、DC 端子和 PoE 端口。默认情况下，reComputer R1225 通过 AC/DC 端子供电（官方区域电源适配器 SKU：110061505/110061506），同时**包含 PoE 电源供电（PoE 模块，SKU：110991925）**。这提供了电源选择的灵活性，并允许与各种电源轻松集成。

### 2 针电源端子

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1225 的额定 AC 电压为 12&#126;24 V 或 DC 电压为 9&#126;36V。电源通过 2 针电源端子块连接器连接。要为 reComputer R1225 接地，可以将接地线固定到电源端子左上角的螺丝上。

:::note
电源解决方案采用桥式整流二极管进行反极性保护，兼容 AC 和 DC 输入。这确保了**无论电源的正负极如何连接**，电路都不会损坏。通过使用桥式整流器，无论输入 DC 极性如何，输出电压极性都保持固定，提供有效的反极性保护。
:::

### POE（已包含）

安装 PoE 模块后，reComputer R1225 的 ETH0 端口可以支持 PoE 电源供电，提供了一种通过以太网为设备供电的便捷高效方式。此选项简化了安装过程并减少了所需的布线量，使其成为电源有限或电源插座不易获得的应用的理想解决方案。

- PoE 输入：范围 44~57V；典型值 48V
- PoE 输出：12V，最大 1.1A

:::note
值得注意的是，reComputer R1225 提供的 PoE 模块符合 IEEE 802.3af 标准，可提供最大 12.95W 的电源供应。**因此，如果需要连接 SSD 或 4G 模块等高功耗外设，PoE 电源供应可能不足**。在这种情况下，建议使用 AC/DC 端子供电，以确保设备的稳定可靠运行。
:::

### 功耗

请参考下表了解 Seeed Studio 实验室测试的 reComputer R1225 功耗。请注意，此值仅供参考，因为测试方法和环境可能导致结果变化。

待测试

| 状态   | 电压 | 电流 | 功耗 | 描述 |
|   ---    |    ---  |   ---   |         ---       |      ---    |
|关机  |24V      |  mA   |    W         | 关机和断电状态下的静态功耗测试。|
|空闲      |24V      |  mA  |    W          | 测试在为 reComputer R1225 设备提供 24V 电源且不运行任何测试程序时的输入电流。|
|满载 |24V      |  mA  |    W          | 使用 "stress -c 4" 命令配置 CPU 满载运行。未连接外部设备。 |

### 开机和关机

reComputer R1225 默认不带电源按钮，一旦连接电源，系统将自动启动。关机时，请在操作系统中选择关机选项，等待系统完全关机后再切断电源。要重启系统，只需重新连接电源即可。

:::note
请注意，关机后，请等待**至少 10 秒**再重启系统，以便内部电容器完全放电。
:::

## 框图
<!--缺少最新照片，待更新后补充-->
<div align="center"><img width={800} src="" /></div>

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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008（支持 PoE）</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>支持 LCD*（机箱内板载）</td>
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

reComputer R1225 具有 6 个 LED 指示灯，用于指示机器的运行状态。请参考下表了解每个 LED 的具体功能和状态：

| LED 指示灯 | 颜色          | 状态 | 描述                                                  |
| ------------- | -------------- | ------ | ------------------------------------------------------------ |
| PWR           | 绿色          | 亮起     | 设备已连接电源。                      |
|               |                | 熄灭    | 设备未连接电源。                       |
| ACT           | 绿色          |        | 在 Linux 下，此引脚将闪烁以表示 eMMC 访问。<br /> 如果在启动过程中发生任何错误，则此 LED 将闪烁错误模式，<br />可以使用 [Raspberry Pi 网站上的查找表](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes) 进行解码。 |
| USER          | 绿色/红色/蓝色 |        | 需要用户定义。                                  |
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

如果 ACT LED 以规律的四次闪烁模式闪烁，则表示无法找到引导代码（start.elf）
如果 ACT LED 以不规律的模式闪烁，则表示启动已开始。
如果 ACT LED 不闪烁，则 EEPROM 代码可能已损坏，请在不连接任何设备的情况下重试以确认。更多详情请查看 Raspberry Pi 论坛：
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums
更多详情请查看 [Raspberry Pi 论坛](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)。


#### 通过 Luci 界面自定义 LED 灯

#### 通过命令控制 LED 灯

为了控制用户 LED，我们建议使用 sysfs，这是 Linux 内核提供的伪文件系统，用于公开各种内核子系统、硬件设备及其相关驱动程序的信息。在 reComputer R1225 上，我们将用户 LED 接口抽象为三个设备文件（led-red、led-blue 和 led-green），使用户能够通过与这些文件交互来简单地控制 LED 灯。示例如下：

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

reComputer R1225 配备了有源蜂鸣器，可用于各种用途，如报警和事件通知。

对于 reComputer R1225 用户（**R1225 基于 R1000 v1.1 硬件平台**），蜂鸣器连接到 PCA9535 P15，要关闭（打开）蜂鸣器，请在终端中输入以下命令：

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

reComputer R1225 配备了 3 组使用 3 针连接器的 RS485 接口，信号和电源均采用隔离设计，确保在工业和自动化应用中的安全可靠运行。RS485A 和 RS485B 信号使用电容隔离，提供出色的 EMI 抗扰性，满足 RS485 接口的高速通信要求。
**默认情况下，未安装 120Ω 终端电阻。但是，包装盒中包含五个贴片电阻。如有需要，用户应自行将电阻焊接到设备上。**

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

reComputer R1225 的启动开关连接到 CM4 的 nRPI_BOOT 引脚。此开关为用户提供了在 eMMC 和 USB 之间选择启动源的选项。在正常模式下，开关应设置为远离带有 "BOOT" 标签的一侧，使系统从 eMMC 启动。相反，当用户需要刷写系统镜像时，应将开关设置为朝向 "BOOT" 标签，允许系统从 Type-C USB 接口启动。

<div class="table-center">

| 开关位置                                              | 模式        | 描述    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 正常模式 | 从 eMMC 启动 | 低电平       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | 刷写模式  | 从 USB 启动  | 高电平      |

</div>

:::note
**在启动模式下，POE 电源功能不可用。**
:::

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R1225 配备了一个 USB Type-C 端口和两个 USB Type-A 端口。请参考下表了解它们的功能和描述。

| **类型**   | **数量** | **协议** | **功能** | **描述**                                              |
| ---------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| **Type-C** | *1           | USB2.0       | USB-Device   | 用于串口调试、烧录镜像等。          |
| **Type-A** | *2           | USB2.0       | USB-Host     | 连接不同的 USB 设备，如闪存驱动器、<br /> USB 键盘或鼠标。 |

通过运行 **lsusb** 命令检查是否检测到 USB 集线器。此命令列出所有连接的 USB 设备，包括集线器。

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

运行此命令应显示有关连接到系统的 USB 设备的信息，包括存在的任何 USB 集线器。

如果 USB 集线器正常工作，您应该在 **lsusb** 命令的输出中看到其详细信息。如果未列出，则集线器或其与系统的连接可能存在问题。在这种情况下，您可能需要对 USB 集线器或其连接进行故障排除。

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
reComputer R1225 提供 4G 版本。如果您购买的是标准版（不含 4G 模块），可以单独购买 4G 模块进行安装。Bazaar Mall 目前提供两种 4G 模块：欧洲（EMEA 和泰国 <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>）和美洲（北美 **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**）
:::

### SSD 插槽

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
reComputer R1225 上的 SSD 插槽设计用于容纳 NVMe M.2 2280 SSD，容量支持 128GB、256GB、512GB 和 1TB。此插槽支持高速存储扩展，使用户能够增强系统的性能和容量。

要列出磁盘（包括 SSD），您可以使用 *fdisk -l* 命令。操作方法如下：

```bash
sudo fdisk -l
```

此命令将显示连接到系统的所有磁盘列表，如果 SSD 被正确检测到，也会包含在内。查找代表您的 SSD 的条目。它们通常以 /dev/sd 开头，后跟一个字母（例如 /dev/sda、/dev/sdb 等）。
一旦您识别出对应 SSD 的条目，就可以根据需要进行分区或格式化。

:::note
SSD 卡有两种主要用途：<br />
1.大容量存储：SSD 卡可用于大容量存储需求。<br />
2.带镜像的启动驱动器：另一种用途是将 SSD 既用作大容量存储，又用于存储系统镜像，允许直接从 SSD 卡启动。<br />
需要注意的是，市场上并非所有 SSD 卡都支持第二种用途。因此，如果您打算将其用作启动驱动器且不确定购买哪种型号，我们建议选择我们推荐的 1TB SSD（SKU 112990267）。此型号已经过测试并验证了启动功能，降低了兼容性问题的风险，并最大限度地减少了试错成本。
:::

### Mini-PCle 插槽

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

|         插槽         | 支持的协议 |
| -------------------- | ------------------ |
|       Mini-PCIe 1    |       4G LTE       |
|       Mini-PCIe 2    |      SPI LoRa®     |

</div>

:::note
reComputer R1225 有标准版和 4G 版：标准版的 Mini-PCIe 1 为空置；4G 版的 Mini-PCIe 1 预装了 4G LTE。
:::



此设备具有两个 Mini-PCIe 接口，即 Mini-PCIe 插槽 1 和 Mini-PCIe 插槽 2。插槽 1 连接到 SIM 卡插槽并支持 USB 协议，而插槽 2 支持 USB 和 SPI 协议但不连接到 SIM 卡插槽。因此，4G LTE 等设备可以通过插槽 1 连接，而 SPI LoRa® 设备可以通过插槽 2 连接。

### 复位孔

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

reComputer R1225 的复位孔中有一个微型按钮开关。通过用细物体按下此按钮，可以复位 CM4。此引脚为高电平时表示 CM4 已启动。将此引脚拉低会复位模块。

### 以太网 RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-left">

| 名称 | 类型                        | 速度             | PoE                                |
| ---- | --------------------------- | ------------------ | ---------------------------------- |
| ETH0 | CM4 原生千兆以太网 | 10/100/1000 Mbit/s | 预装                      |
| ETH1 | 从 USB 转换          | 10/100 Mbit/s      | 不支持                      |

</div>

reComputer R1225 配备两个以太网 RJ45 端口。ETH0 是 CM4 原生千兆以太网接口，支持三种不同速度：10/100/1000 Mbit/s。可以购买额外的 PoE 模块来通过此接口启用以太网供电（PoE），为 reComputer R1225 提供电源。另一个 ETH1 支持 10/100 Mbit/s，由 USB 转换而来。

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

reComputer R1225 具有来自 CM4 的原生 HDMI 接口，支持高达 4K @ 60 fps 的视频输出。它非常适合需要多显示器的应用，允许用户将内容输出到外部大屏幕。

### RTC

reComputer R1225 具有 RTC 电路，预装了 CR2032 电池，即使在断电的情况下也能保持计时功能。

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

reComputer R1225 配备了独立的硬件看门狗电路，确保在系统异常崩溃时自动重启系统。看门狗电路通过 RTC 实现，允许灵活的喂狗时间从 1 到 255 秒。

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

### Wi-Fi/BLE（已包含）

reComputer R1225 由带有板载 Wi-Fi/BLE 版本的 CM4 驱动，提供与 CM4 相同的 Wi-Fi/BLE 参数。有关详细参数信息，请参考树莓派官方网站。

:::note
需要注意的是，由于 reComputer R1225 的金属外壳，Wi-Fi/BLE 信号可能难以穿透金属外壳。因此，如果您需要此功能，我们建议安装我们为您准备的外部天线。
:::

#### 连接 wifi

##### 通过 Luci UI 连接到 Wi-Fi

##### 使用命令连接到 Wi-Fi

步骤 1. 扫描 Wi-Fi 网络：

  ```bash
  nmcli dev wifi list
  ```

步骤 2. 连接到 wifi 网络：

  ```bash
  sudo nmcli dev wifi connect network-ssid password "network-password"
  sudo nmcli --ask dev wifi connect network-ssid
  ```

步骤 3. 设备开机后，将自动连接到 wifi。  
  如果您想删除保存的 WiFi 信息：

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

### 4G 模块（可选）

reComputer R1225 LoRaWAN 网关提供标准版和 4G 版本。标准版的 Mini-PCIe 插槽 1 为空置，而 4G 版本预装了专为欧洲（EMEA 和泰国 <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>）和美洲（北美 **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**）定制的 Mini-PCIe 模块。

### LoRa® 模块（已包含）

reComputer R1225 LoRaWAN 网关的 Mini-PCIe 插槽 2 被 SPI LoRa® 模块占用。

### PoE（已包含）

reComputer R1225 LoRaWAN 网关配备了 PoE 模块，用户无需自行购买、焊接和组装。

### M.2 插槽（可选）

reComputer R1225 通过板载两个 Mini-PCIe 插槽下方的 PCIe 插槽（J62）支持 2280 NVMe SSD 和 AI 加速器（Hailo）。需要注意的是，CM4 的 PCIe 为 gen2.0，最大理论速度为 5Gbps。如果您使用 Gen3.0 或更高版本的 SSD，可能无法达到 SSD 的最大速度。经过测试，安装 SSD 的 reTerminal DM 可以达到最大写入速度 230MB/s 和最大读取速度 370MB/s。如果您不确定哪些 SSD 兼容，可以按照下面的配件列表进行购买。

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
需要注意的是，市场上并非所有 SSD 卡都支持第二种用法。因此，如果您打算将其用作启动驱动器且不确定购买哪种型号，我们建议选择我们推荐的 **1TB SSD（<a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">SKU [112990267]</a>）**。该型号已经过测试并验证了启动功能，降低了兼容性问题的风险，最大限度地减少了试错成本。
:::


### 加密芯片 TPM 2.0（可选）

TPM 采用英飞凌的 OPTIGA™ TPM SLB9670，符合可信计算组织（TCG）TPM 2.0 规范，推荐作为 reComputer R1225 的加密芯片。该芯片具有 SPI 接口，应用于板载 J13 端口，以实现平台完整性的信任根、远程认证和加密服务。

:::note
[请点击此处查看组装说明](https://wiki.seeedstudio.com/cn/recomputer_r1000_assembly_guide/#assemble-tpm-20-module)。
:::

如果您将 TPM 2.0 模块连接到设备，以下代码可以帮助检查 TPM 连接。

```bash
ls /dev | grep tpm
```

如果您在输出中看到 **tpm0** 和 **tpmrm0**，这意味着检测到 TPM（可信平台模块）设备并且在您的系统上可用。这表明 TPM 硬件被识别并可访问，这是一个好兆头。您可以继续使用 TPM 相关功能或应用程序，因为知道设备存在且可访问。

### UPS（已包含）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

UPS 为 7F，串联工作。UPS 模块位于 DC5V 和 CM4 组件之间，当 5V 电源断电时，使用 GPIO 信号警告 CPU。收到此信号后，CPU 在超级电容器能量耗尽之前执行紧急脚本，启动 "$ shutdown" 命令。
<br />
UPS 提供的备份持续时间很大程度上取决于系统负载。以下是使用配备 4GB RAM、32GB eMMC 存储和 Wi-Fi 模块的 CM4 模块测试的一些典型场景。
<br />

| 运行模式 | 时间（秒） | 备注                                                       |
| ----------------- | ------- | ------------------------------------------------------------ |
| 空闲              | 37      | 在空闲条件下测试，加载官方驱动程序 |
| CPU 满负载  | 18      | stress -c 4 -t 10m -v &                                      |

:::note
有关 UPS 功能，请联系我们获取更多信息，警报信号为低电平有效。
:::

CPU 和 DC/AC 电源输入之间的 GPIO25 用于在 5V 电源断电时警告 CPU。然后 CPU 应该在超级电容器能量耗尽之前在脚本中执行一些紧急操作并运行 `$ shutdown`
<br />
使用此功能的另一种方法是在 GPIO 引脚变化时启动关机。给定的 GPIO 引脚配置为输入键，生成 KEY_POWER 事件。此事件由 systemd-logind 处理，启动关机。
使用 `/boot/overlays/README` 作为参考，然后修改 `/boot/config.txt`。

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

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

### DSI（可选） 

板载预留了一个 DSI（J24），用于特殊用途。用户需要根据自己的需求购买插件。

## 其他资源

- [reComputer R1225 3D 文件](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [reComputer R1225 原理图设计、PCB 设计](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [reComputer R1225（R1000 v1.1）引脚分配](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
