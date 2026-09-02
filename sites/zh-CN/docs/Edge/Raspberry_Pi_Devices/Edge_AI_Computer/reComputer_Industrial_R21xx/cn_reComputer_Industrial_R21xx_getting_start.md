---
description: reComputer Industrial R21xx 是一款由 Raspberry Pi CM5 驱动、具备 AI 能力的物联网网关与控制器。其配备 2GB RAM、8GB eMMC、双以太网、USB、RS485、RS232、DI/DO 以及无线连接（4G、5G、LoRa®、Wi-Fi/BLE），非常适合工业自动化与边缘计算。
title: reComputer Industrial R21xx 入门指南
keywords:
  - 边缘控制器
  - Raspberry pi
  - 边缘控制器
  - reComputer Industrial R21xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /recomputer_industrial_R21xx_getting_start
sku: 100099044,100061305,100091962,100097052,E2025091902
last_update:
  date: 09/28/2025
  author: Nolan Chen
createdAt: '2025-09-28'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/cn/recomputer_industrial_R21xx_getting_start/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R21xx 由 Raspberry Pi CM5 提供算力，是一款灵活适配的边缘 AI 计算机，具备 AI 能力。它配备了完备的工业接口 **（2 路以太网、4 路 USB、2 路 RS485、2 路 RS232、2 路 CAN FD、4 路 DI 和 4 路 DO）**，并支持灵活的无线连接选项（4G/5G、LoRa®、Wi-Fi/BLE），非常适合多种工业应用场景。

reComputer Industrial R21xx 系列非常适用于工业 AI 应用。它可用于数据采集与过程监控、自动化与机器人控制、智能制造以及工业通信与网络等方面。凭借其小巧尺寸、灵活性、低成本和可编程性，为自动化与物联网系统等提供了有力支撑。

:::note
可定制选项：Logo 品牌定制、包装和固件烧录。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>立即定制 ➜</font></span></strong></a>
</div>

## 特性

**工业级可靠性**

- 无风扇紧凑型 PC，支持 -20°C 至 60°C 的宽温范围
- 硬件看门狗
- 超级电容 UPS（可选）
- 高质量金属机壳，兼容导轨和壁挂安装
- 生产生命周期：reComputer Industrial R21xx 至少生产至 2030 年 12 月

**高效 AI 计算**

- 由 Raspberry Pi CM5 提供算力
- Broadcom BCM2711 四核 Cortex-A72（ARM v8）64 位 SoC，主频 1.5GHz
- 最高支持 16GB RAM 和 64GB eMMC
- 搭载 Hailo-8 AI 加速器，最高 26 TOPS（可选）

**丰富的无线能力**

- 片上 Wi-Fi
- 片上 BLE
- Mini-PCIe：LTE、USB LoRa®
- M.2 KEY-B：4G/5G

**丰富的接口**

- 2 路 RS485（隔离）、2 路 RS232（隔离）、4 路隔离 DI 端口、4 路隔离 DO 端口
- 1 路 10M/100M/1000M 以太网（支持 PoE PD）
- 1 路 10M/100M 以太网
- 2 路 HDMI 2.0
- 3 路 Type-A USB3.0
- 1 路 Type-A USB2.0
- 1 路 Type-C USB2.0（用于 OS 更新的 USB 控制台）
- 1 个 Nano SIM 卡槽

## 规格参数

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>参数</th>
        <th colspan="2">描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="3">硬件规格</td>
      </tr>
      <tr>
        <td>**产品系列**</td>
        <td>R21xx-12</td>
        <td>R21xx-10</td>
      </tr>
      <tr>
        <td> **CPU** </td>
        <td colspan="2">Raspberry Pi Compute Module 5，2.4GHz 四核 64 位 Arm Cortex-A76</td>
      </tr>
      <tr>
        <td> **AI Processor** </td>
        <td>预装 1 个 Hailo-8 M.2 AI 加速模块，26TOPS</td>
        <td>*</td>
      </tr>
      <tr>
        <td> **操作系统** </td>
        <td colspan="2">Raspbian，Debian</td>
      </tr>
      <tr>
        <td> **RAM** </td>
        <td colspan="2">2GB/4GB/8GB/16GB</td>
      </tr>
      <tr>
        <td> **eMMC** </td>
        <td colspan="2">16GB/32GB/64GB</td>
      </tr>
      <tr>
        <td colspan="3"> **系统规格** </td>
      </tr>
      <tr>
        <td> 电源输入 </td>
        <td colspan="2">DC 9V~36V，2 针端子座</td>
      </tr>
      <tr>
        <td>PoE（作为受电设备）</td>
        <td colspan="2">IEEE 802.3at 标准 25.5W PoE</td>
      </tr>
      <tr>
        <td>电源开关</td>
        <td colspan="2">无</td>
      </tr>
      <tr>
        <td>重启开关</td>
        <td colspan="2">有</td>
      </tr>
      <tr>
        <td colspan="3"> **接口** </td>
      </tr>
      <tr>
        <td rowspan="2"> 以太网 </td>
        <td colspan="3"> 1 x 10/100/1000 Mbps（支持 PoE PD） </td>
      </tr>
      <tr>
        <td colspan="3"> 1 x 10/100 Mbps IEEE 802.3/802.3u </td>
      </tr>
      <tr>
        <td rowspan="2"> USB </td>
        <td colspan="3"> 3 x USB-A 3.0 Host；1 x USB-A 2.0 Host </td>
      </tr>
      <tr>
        <td colspan="3"> 1 x USB-C 2.0（用于烧录 OS 与调试） </td>
      </tr>
      <tr>
        <td> RS485 </td>
        <td colspan="3"> 2x RS485（隔离） </td>
      </tr>
      <tr>
        <td> RS232 </td>
        <td colspan="3"> 2x RS232（隔离） </td>
      </tr>
      <tr>
        <td> CAN </td>
        <td colspan="3"> 2x CAN（隔离） </td>
      </tr>
      <tr>
        <td rowspan="2"> DI </td>
        <td colspan="3"> 4 x 隔离 DI 端口 </td>
      </tr>
      <tr>
        <td colspan="3"> 输入电压：5~24V DC </td>
      </tr>
      <tr>
        <td rowspan="2"> DO </td>
        <td colspan="3"> 4 x 隔离 DO 端口 </td>
      </tr>
      <tr>
        <td colspan="3"> 输出电压：不高于 60V DC </td>
      </tr>
      <tr>
        <td>SIM 卡</td>
        <td colspan="3">1x Nano SIM 卡槽</td>
      </tr>
      <tr>
        <td>M.2 插槽</td>
        <td>1x M.2 M-KEY 2280 插槽，用于 NVMe SSD；
1x M.2 M-KEY 2280 插槽，用于 AI 加速器
1x M.2 NVMe 插槽，t，M.2 M-KEY 2280
（预装 1x Hailo-8 M.2 AI 加速模块 26TOPS）；
1x M.2 B-KEY 3042/3052 插槽，用于 5G/4G LTE；</td>
        <td>1x M.2 M-KEY 2280 插槽，用于 NVMe SSD；
1x M.2 M-KEY 2280 插槽，用于 AI 加速器；
1x M.2 B-KEY 3042/3052 插槽，用于 5G/4G LTE
2x M.2 NVMe 插槽，t，M.2 M-KEY 2280；
1x M.2 NVMe 插槽，t，M.2 B-KEY </td>
      </tr>
      <tr>
        <td>Mini-PCIe</td>
        <td colspan="2">1x Mini-PCIe，用于 LoRa 模块</td>
      </tr>
      <tr>
        <td>LED</td>
        <td colspan="2">4 x LED 指示灯</td>
      </tr>
      <tr>
        <td>蜂鸣器</td>
        <td colspan="2">1</td>
      </tr>
      <tr>
        <td>复位按钮</td>
        <td colspan="2">1</td>
      </tr>
      <tr>
        <td>HDMI</td>
        <td colspan="2">2 x HDMI 2.0</td>
      </tr>
      <tr>
        <td colspan="3">无线通信</td>
      </tr>
      <tr>
        <td>Wi-Fi 2.4/5.0 GHz</td>
        <td colspan="2">片上 Wi-Fi</td>
      </tr>
      <tr>
        <td>BLE 5.0</td>
        <td colspan="2">片上 BLE</td>
      </tr>
      <tr>
        <td>LoRa®</td>
        <td colspan="2">USB LoRa®*/SPI LoRa®*</td>
      </tr>
      <tr>
        <td>4G/5G 蜂窝网络</td>
        <td colspan="2">4G LTE/5G*</td>
      </tr>
      <tr>
        <td colspan="3">**标准**</td>
      </tr>
      <tr>
        <td rowspan="3">EMC</td>
        <td colspan="2">ESD：EN61000-4-2，Level 3</td>
      </tr>
      <tr>
        <td colspan="2">EFT：EN61000-4-4，Level 2</td>
      </tr>
      <tr>
        <td colspan="2">Surge：EN61000-4-5，Level 2</td>
      </tr>
      <tr>
        <td rowspan="3">认证</td>
        <td colspan="2">CE，FCC</td>
      </tr>
      <tr>
        <td colspan="2">TELEC</td>
      </tr>
      <tr>
        <td colspan="2">RoHS</td>
      </tr>
      <tr>
        <td colspan="3">REACH</td>
      </tr>
      <tr>
        <td colspan="3">**环境条件**</td>
      </tr>
      <tr>
        <td>防护等级</td>
        <td colspan="2">IP40</td>
      </tr>
      <tr>
        <td>工作温度</td>
        <td colspan="2">-20~65 °C</td>
      </tr>
      <tr>
        <td>工作湿度</td>
        <td colspan="2">10~95% RH</td>
      </tr>
      <tr>
        <td>存储温度</td>
        <td colspan="2">-40~85 °C</td>
      </tr>
      <tr>
        <td colspan="3">其他</td>
      </tr>
      <tr>
        <td>超级电容 UPS</td>
        <td colspan="2">SuperCAP UPS LTC3350 模块*</td>
      </tr>
      <tr>
        <td>硬件看门狗</td>
        <td colspan="2">1~255s</td>
      </tr>
      <tr>
        <td>RTC</td>
        <td colspan="2">高精度 RTC</td>
      </tr>
      <tr>
        <td rowspan="2">安全</td>
        <td colspan="2">加密芯片 TPM 2.0*</td>
      </tr>
      <tr>
        <td colspan="2">ATECC608A</td>
      </tr>
      <tr>
        <td>散热</td>
        <td colspan="2">无风扇</td>
      </tr>
      <tr>
        <td>质保</td>
        <td colspan="2">2 年</td>
      </tr>
      <tr>
        <td>生产生命周期</td>
        <td colspan="2">至 2036 年 12 月</td>
      </tr>
      <tr>
        <td>**说明**</td>
        <td colspan="2">带 * 的选项需根据配件清单额外购买。</td>
      </tr>
    </tbody>
  </table>
</div>


<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th colspan="2">元件与接口状态说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Reserved</td>
        <td>预留，用于未来使用或扩展。</td>
      </tr>
      <tr>
        <td> Optional </td>
        <td colspan="2">可选，用于未来使用或扩展。</td>
      </tr>
      <tr>
        <td> **AI Processor** </td>
        <td>非关键元件，用户可选择是否配置。</td>
      </tr>
      <tr>
        <td> Occupied </td>
        <td>当前已被使用，是产品功能不可或缺的一部分。</td>
      </tr>
      <tr>
        <td>Included</td>
        <td colspan="2">标准包装中提供的关键元件。</td>
      </tr>
    </tbody>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/1.4_dimension_1.png" style={{width:800, height:'auto'}}/></div>

## Hailo 介绍

### 硬件介绍

[Hailo](https://hailo.ai/) 提供专为边缘设备高性能深度学习应用量身打造的尖端 AI 处理器。该公司的解决方案专注于在边缘侧实现新一代生成式 AI，以及感知与视频增强，这些都由先进的 AI 加速器和视觉处理器提供算力支持。而搭载 Hailo-8 NPU 加速器（提供 26 TOPs AI 性能）的 reComputer_R21xx，使用 YOLOv8s 时可实现超过 200 FPS 的推理性能。

### 软件介绍

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI Software Suite 提供强大的工具，可在硬件加速器上高效运行 AI 模型。它被设计为可与现有深度学习框架无缝集成，为开发者提供顺畅的工作流。整个流程包括在模型构建环境中，从 ONNX 文件生成 HEF（Hailo 可执行二进制文件）。生成后，将 HEF 文件传输到推理机器（运行时环境），并通过 HailoRT API 使用该文件执行推理。所提供的脚本可在模型构建环境中将 ONNX 文件转换为 HEF 文件。

> **注意：**
> **如果你想了解更多关于使用 Hailo NPU 的示例，请点击此[链接](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero)。**

## 硬件总览

### 系统总览

#### 接口总览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/2.1.1.png" style={{width:800, height:'auto'}}/></div>

#### 主板总览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.2_mainboard_overview_1.png" style={{width:800, height:'auto'}}/></div>

#### 电源框图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.3_power_diagram_1.png" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R21xx 支持两种供电方式：DC 端子和 PoE 接口。这为电源选择提供了灵活性，并便于与各种电源进行集成。

**2-Pin 电源端子**

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R21xx 通过端子接入 9~36V 的直流电压供电。电源通过 2-Pin 电源端子接线端子连接。
<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2-pin_power_terminal_2.png" style={{width:100, height:'auto'}}/></div>

要对 reComputer Industrial R21xx 进行接地，可将地线固定在电源端子右侧的螺丝上。

**PoE**

reComputer Industrial R21xx 的 ETH0（PoE PD）接口支持 PoE 供电，可通过以太网为设备提供一种方便高效的供电方式。该选项简化了安装过程并减少了所需布线数量，非常适合电源受限或电源插座不易获得的应用场景。

- PoE PD：IEEE 802.3at，最大 25.5W

> 注意：
> 需要注意的是，reComputer Industrial R21xx 所配备的 PoE 模块符合 IEEE 802.3at 标准，最大可提供 25W 的电源功率。因此，如果需要连接 5G 或 4G 模块等高功耗外设，PoE 供电可能无法满足需求。在这种情况下，建议改用 DC 端子供电，以确保设备稳定可靠运行。

**功耗**

reComputer Industrial R21xx 默认不带电源按钮，系统在接通电源后会自动启动。关机时，请在操作系统中选择关机选项，并等待系统完全关机后再断电。要重启系统，只需重新接通电源即可。

#### 方框图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.4_block_diagram_1.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/2.1.4_block_diagram_2.png" style={{width:800, height:'auto'}}/></div>

#### IIC 示意图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.5_iic_diagram_1.png" style={{width:800, height:'auto'}}/></div>

## 接口说明

| 类型            | 描述                                                                                 |
|-----------------|---------------------------------------------------------------------------------------|
| **以太网**      | 1 x 10/100/1000 Mbps（支持 POE PD）；1 x 10/100 Mbps IEEE802.3/802.3u                |
| **USB**         | 3 x USB-A 3.0 Host；1 x USB-C 2.0（用于烧录 OS 和调试）                               |
| **RS485**       | 2 x RS485（隔离）                                                                     |
| **RS232**       | 2 x RS232（隔离）                                                                     |
| **CAN**         | 2 x 隔离 CAN FD 接口                                                                  |
| **DI**          | 4 x 隔离 DI 接口（输入电压：5-24V DC）                                                |
| **DO**          | 4 x 隔离 DO 接口（输出电压：< 60V DC）                                                |
| **HDMI**        | 2 x HDMI 2.0                                                                          |
| **LED**         | 4 x LED 指示灯                                                                        |
| **SIM 卡槽**        | 支持 Nano SIM 卡                                                                  |
| **M.2 M-KEY 插槽** | 1 x 2280 用于 M.2 NVMe SSD；1 x 2280 用于 AI 加速卡                                 |
| **M.2 B-KEY 插槽** | 1 x 用于 5G/4G LTE                                                                  |
| **蜂鸣器**          | 1                                                                                 |
| **复位按钮**        | 1                                                                                 |

### LED 指示灯状态

reComputer Industrial R21xx 配备 4 个 LED 指示灯，用于指示设备的运行状态。请参考下表了解每个 LED 的具体功能和状态：
<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Name </th>
        <th>Color</th>
        <th>Status</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2"> **PWR** </td>
        <td rowspan="2">Green </td>
        <td>On</td>
        <td>设备已接通电源。</td>
      </tr>
      <tr>
        <td>Off</td>
        <td>设备未接通电源。</td>
      </tr>
      <tr>
        <td> **ACT** </td>
        <td>Orange</td>
        <td>On</td>
        <td>在 Linux 下，该引脚会闪烁以表示 eMMC 访问。如果在启动过程中发生任何错误，则该 LED 会闪烁错误模式，可通过 Raspberry Pi 官网上的查找表（[Raspberry Pi Documentation - Configuration](https://www.raspberrypi.com/documentation/computers/configuration.html)）进行解码。</td>
      </tr>
      <tr>
        <td> **USER** </td>
        <td>Green/Red/Blue</td>
        <td></td>
        <td>需要由用户自定义。</td>
      </tr>
      <tr>
        <td rowspan="2"> **4G/5G** </td>
        <td rowspan="2">Green </td>
        <td>On</td>
        <td>拨号成功，连接正常。</td>
      </tr>
      <tr>
        <td>Off</td>
        <td>4G/5G 信号未连接或设备未上电。</td>
      </tr>
    </tbody>
  </table>
</div>

#### ACT 状态表

| 长闪次数 | 短闪次数 | 状态                                     |
|--------------|---------------|-------------------------------------|
| 0            | 3             | 通用启动失败                          |
| 0            | 4             | 未找到 start*.elf                    |
| 0            | 7             | 未找到内核镜像                        |
| 0            | 8             | SDRAM 故障                           |
| 0            | 9             | SDRAM 容量不足                       |
| 0            | 10            | 处于 HALT 状态                       |
| 2            | 1             | 分区不是 FAT                         |
| 2            | 2             | 从分区读取失败                       |
| 2            | 3             | 扩展分区不是 FAT                     |
| 2            | 4             | 文件签名/哈希不匹配 - Pi 4           |
| 4            | 4             | 不支持的板卡类型                     |
| 4            | 5             | 致命固件错误                         |
| 4            | 6             | 电源故障类型 A                       |
| 4            | 7             | 电源故障类型 B                       |

如果 ACT LED 以规则的四次闪烁模式闪烁，则表示找不到启动代码（bootcode，start.elf）。
如果 ACT LED 以不规则模式闪烁，则表示启动已经开始。
如果 ACT LED 不闪烁，则可能是 EEPROM 代码损坏，请在不连接任何外设的情况下再试一次。更多详情请查看 Raspberry Pi 论坛：
置顶：你的树莓派无法启动？（启动问题置顶帖）- Raspberry Pi 论坛。
更多详情请查看 [Raspberry Pi forum](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)

#### USER 指示灯

reComputer Industrial R21xx 包含一个 USER 指示灯，用户可以根据实际需求自定义其状态。

### 蜂鸣器

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.2_buzzer_1.png" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R21xx 内置有一个有源蜂鸣器，可用于报警、事件通知等多种用途。在 reComputer Industrial R21xx 的终端中输入：

```bash
cat /sys/kernel/debug/gpio
```

该命令会输出与 Buzzer_EN 对应的 GPIO 为 gpio627。

### RS485

reComputer Industrial R2100 系列设备包含 2 路 RS485 接口，采用 6-Pin 3.5mm 间距凤凰端子。
单个 RS485 的丝印为 “A/B/GND”。

**引脚定义**  
端子引脚分配如下：  

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>示意图</th>
        <th>引脚 ID</th>
        <th>引脚名称</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="6"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/485_1.png" style={{width:300, height:'auto'}}/></td>
        <td>1</td>
        <td>RS485-3_A </td>
      </tr>
      <tr>
        <td>3</td>
        <td>RS485-3_B</td>
      </tr>
      <tr>
        <td>5</td>
        <td>RS485-3_GND </td>
      </tr>
      <tr>
        <td>7</td>
        <td>RS485-4_A </td>
      </tr>
      <tr>
        <td>9</td>
        <td>RS485-4_B</td>
      </tr>
      <tr>
        <td>11</td>
        <td>RS485-4_GND </td>
      </tr>
    </tbody>
  </table>
</div>

**连接线缆**
RS485 线缆示意图如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/485_2.png" style={{width:800, height:'auto'}}/></div>

注意：产品包装内附带了一些 120 欧姆终端电阻。在通过 RS485 通信时，可根据需要使用。

### RS232

reComputer Industrial R21xx 系列设备包含 1 路 RS232 接口，采用 6-Pin 3.5mm 间距凤凰端子。
单个 RS232 的丝印为 “TX/RX/GND”。

**引脚定义**

端子引脚定义如下：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>示意图</th>
        <th>引脚 ID</th>
        <th>引脚名称</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="6"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/232_1.png" style={{width:300, height:'auto'}}/></td>
        <td>2</td>
        <td>RS232-1_TX </td>
      </tr>
      <tr>
        <td>4</td>
        <td>RS232-1_RX</td>
      </tr>
      <tr>
        <td>6</td>
        <td>RS232-1_GND </td>
      </tr>
      <tr>
        <td>8</td>
        <td>RS232-2_TX </td>
      </tr>
      <tr>
        <td>10</td>
        <td>RS232-2_RX </td>
      </tr>
      <tr>
        <td>12</td>
        <td>RS232-2_GND </td>
      </tr>
    </tbody>
  </table>
</div>

**连接线缆**
RS232 线缆示意图如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/21-rs232.png" style={{width:800, height:'auto'}}/></div>

### DI（数字输入）

reComputer Industrial R2000 系列设备包含 4 路 DI 接口，采用 3-Pin 3.5mm 间距凤凰端子。
 The silkscreen of single DI is "DI/G_DI".

**引脚定义**

端子引脚定义如下：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>示意图</th>
        <th>引脚 ID</th>
        <th>引脚名称</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="5"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/DI_1.png" style={{width:300, height:'auto'}}/></td>
        <td>13</td>
        <td>DI1</td>
      </tr>
      <tr>
        <td>15</td>
        <td>DI2</td>
      </tr>
      <tr>
        <td>17</td>
        <td>DI3</td>
      </tr>
      <tr>
        <td>19</td>
        <td>DI4</td>
      </tr>
      <tr>
        <td>21</td>
        <td>G_DI</td>
      </tr>
    </tbody>
  </table>
</div>

**连接线缆**
单个 DI 线缆的示意图如下：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**原理图**</th>
        <th>**参数**</th>
        <th>**说明**</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.5_di_1.png" style={{width:900, height:'auto'}}/></td>
        <td>输入类型</td>
        <td>PNP</td>
      </tr>
      <tr>
        <td>隔离防护</td>
        <td>5kV</td>
      </tr>
      <tr>
        <td>DI 到 G_DI</td>
        <td>导通状态：5~30 VDC</td>
      </tr>
    </tbody>
  </table>
</div>

> 注意
> 有关 DI 测试的详细信息，请参阅章节 [link](https://wiki.seeedstudio.com/cn/recomputer_industrial_R21xx_configure_system/di-(digital-input)-testing)。

### DO（数字输出）

reComputer Industrial R2000 系列设备包含 4 路 DO 接口，采用 3-Pin 3.5mm 间距凤凰端子。
单个 DO 的丝印为 “DO/G_DO”。
**引脚定义**
端子引脚定义如下：
<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**原理图**</th>
        <th>**引脚 ID**</th>
        <th>**引脚名称**</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="5"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/OD_1.png" style={{width:300, height:'auto'}}/></td>
        <td>14</td>
        <td>DO1</td>
      </tr>
      <tr>
        <td>16</td>
        <td>DO2</td>
      </tr>
      <tr>
        <td>18</td>
        <td>DO3</td>
      </tr>
      <tr>
        <td>20</td>
        <td>DO4</td>
      </tr>
      <tr>
        <td>22</td>
        <td>G_DO</td>
      </tr>
    </tbody>
  </table>
</div>

**连接线缆**

单个 DO 线缆的示意图如下：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**原理图**</th>
        <th>**参数**</th>
        <th>**说明**</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/DO_2.png" style={{width:900, height:'auto'}}/></td>
        <td>输出类型</td>
        <td>晶体管</td>
      </tr>
      <tr>
        <td>隔离防护</td>
        <td>5 kV</td>
      </tr>
      <tr>
        <td>输出</td>
        <td> < 60V DC </td>
      </tr>
    </tbody>
  </table>
</div>

### CAN FD

reComputer Industrial R2100 系列设备包含 2 路 CAN FD 接口，采用 6-Pin 3.5mm 间距凤凰端子。
单个 CAN FD 的丝印为 “CANH/CANL/GND”。
**引脚定义**
端子引脚定义如下：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**原理图**</th>
        <th>**参数**</th>
        <th>**说明**</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="6"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/CAN_1.png" style={{width:900, height:'auto'}}/></td>
        <td>23</td>
        <td>CAN-0_H</td>
      </tr>
      <tr>
        <td>25</td>
        <td>CAN-0_L</td>
      </tr>
      <tr>
        <td>27</td>
        <td>CAN-0_GND</td>
      </tr>
      <tr>
        <td>24</td>
        <td>CAN-1_GND</td>
      </tr>
      <tr>
        <td>26</td>
        <td>CAN-1_GND</td>
      </tr>
      <tr>
        <td>28</td>
        <td>CAN-1_GND</td>
      </tr>
    </tbody>
  </table>
</div>

连接线缆
CAN FD 线缆示意图如下：
<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/CAN_2.jpg" style={{width:800, height:'auto'}}/></div>

### 启动拨码开关（Boot Switch）

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.7_boot_switch_1.png" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R2000 的 Boot Switch 连接到 CM5 的 nRPI_BOOT 引脚。该开关为用户提供在 eMMC 与 USB 之间选择启动源的选项。在正常模式下，开关应拨到远离带有 “BOOT” 标签一侧的位置，使系统从 eMMC 启动。相反，当用户需要烧录系统镜像时，应将开关拨向带有 “BOOT” 标签的一侧，使系统从 Type-C USB 接口启动。

| 开关位置 | 模式         | 描述              | nRPI-BOOT |
|----------------|--------------|-----------------|-----------|
|      <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/HIGH.png" alt="image" width="80"/>            | 正常模式  | 从 eMMC 启动   | Low       |
|     <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/LOW.png" alt="image" width="80"/>             | 烧录模式   | 从 USB 启动    | High      |

### USB

<div align="left">
  <img width={205} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.8_usb_1.png" />
  <img width={250} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.8_usb_2.png" />
  </div>

reComputer Industrial R21xx 配备 1 个 USB Type-C 接口和 4 个 USB Type-A 接口。其功能和说明请参考下表。

| **类型区分**   | **数量** | **协议** | **功能**   | **描述** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | *1       | USB 2.0    | USB-Device   | 用于串口调试、烧录镜像等。 |
| Type-A   | *1       | USB 2.0    | USB-Host     | 连接不同的 USB 设备，例如 U 盘、USB 键盘或鼠标。 |
| Type-A   | *3       | USB 3.0    | USB-Host     | 连接不同的 USB 设备，例如 U 盘、USB 键盘或鼠标。 |

### SIM 卡槽（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.9_sim_slot(internal)_1.png" style={{width:900, height:'auto'}}/></div>

reComputer Industrial R2000 系列设备内置 Nano SIM 卡槽，用于安装 Nano SIM 卡以获取 5G/4G 信号。
标准 SIM、Micro SIM 和 Nano SIM 卡的尺寸差异如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.9_sim_slot(internal)_2.png" style={{width:900, height:'auto'}}/></div>

> **注意**  
> 请注意，标准版本的 reComputer Industrial R2000 不带 5G/4G 模块。
> 如果你需要 5G/4G 功能，必须另外单独购买 5G/4G 模块。

### M.2 M-KEY 插槽

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/M.2_1.png" style={{width:400, height:'auto'}}/>
  <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/M.2_2.png" style={{width:400, height:'auto'}}/>
 </div>

| **插槽**       | **支持的协议**   |  
|---------------|--------------------------|  
| **M.2 M-KEY 2280** | M.2 NVMe SSD        |  
| **M.2 M-KEY 2280** | M.2 AI  Accelerator |  

reComputer Industrial R2000 上的 M.2 M-KEY 2280 插槽用于安装容量为 128GB、256GB、512GB、1TB 和 2TB 的 NVMe M.2 2280 SSD。该插槽支持高速存储扩展，使用户能够提升系统的性能和容量。

> **注意**  
> SSD 卡主要有两种用途：
>
> 1. **大容量存储：** SSD 卡可用于大容量存储需求。
> 2. **带镜像的启动盘：** 另一种用法是将 SSD 同时作为大容量存储和系统镜像存储介质，从而可以直接从 SSD 卡启动系统。
>  
> 需要特别注意的是，市面上的 SSD 卡并非都支持第二种用法。因此，如果你打算将其用作启动盘且不确定购买哪一款型号，我们建议选择我们推荐的 2TB SSD（SKU 114993467）。该型号已经过启动功能测试和验证，可降低兼容性问题风险并减少试错成本。

reComputer Industrial R2000 上的 M.2 M-KEY 2280 插槽也可用于安装 PCIE M.2 AI 加速器。而 R21xx-12 系列已预装一块 Hailo-8 M.2 AI 加速卡，算力最高可达 26TOPS。

### Mini-PCIe 插槽

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.11_mini-pcie__slot_1.png" style={{width:800, height:'auto'}}/></div>
reComputer Industrial R2000 上的 MiniPCIe 插槽可用于安装 4G LTE、USB LoRaWAN® 等设备。

### 复位孔

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/reset.jpg" style={{width:200, height:'auto'}}/></div>

在 reComputer AI Industrial R2135 的复位孔内有一个微型按键开关。使用细小物体按下该按键即可复位 CM4。当该引脚为高电平时，表示 CM4 已经启动，将该引脚拉低则会复位模块。

### M.2 B-KEY 插槽

reComputer Industrial R2000 上的 M.2 B-KEY 插槽用于安装 5G/4G LTE。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.12_m.2_b-key__slot_1.png" style={{width:800, height:'auto'}}/></div>

### 以太网 RJ45  

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.14_ethernet_rj45_1.png" style={{width:200, height:'auto'}}/></div>

**reComputer R1100** 配备了两个以太网端口：  

| **名称**  | **类型**                     | **速率**          | **PoE 受电端（PD）**
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | CM5 原生千兆以太网           | 10/100/1000 Mbit/s  | 支持       |
| ETH1  | 由 USB 转换                  | 10/100 Mbit/s       | 不支持   |

reComputer Industrial R2000 配备两个以太网 RJ45 端口。ETH0 是 CM5 原生千兆以太网接口，支持 10/100/1000 Mbit/s 三种速率。它可以通过该接口实现以太网供电（PoE），为 reComputer Industrial R2000 提供电源。另一个 ETH1 由 USB 转换而来，支持 10/100 Mbit/s。

### HDMI

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.15_hdmi_1.png" style={{width:200, height:'auto'}}/></div>

reComputer Industrial R2000 具有来自 CM5 的 2 路原生 HDMI 接口，支持最高 4K @ 60 fps 视频输出。非常适合需要多屏显示的应用场景，允许用户将内容输出到外接大屏幕。

### RTC

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.16_rtc_1.png" style={{width:200, height:'auto'}}/></div>
reComputer Industrial R2000 配备由电容供电的 RTC 电路，即使在断电情况下也能保持计时功能。

:::note
使用 RTC 时，如果设备突然断电，需要等待 RTC 完全放电后再重新接通电源并重启。若未完全放电，设备可能无法满足重启条件，从而无法正常启动。
:::

### 看门狗

reComputer Industrial R2000 内置独立硬件看门狗电路，可在系统异常崩溃时自动重启系统。看门狗电路通过 RTC 实现，喂狗时间可灵活设置在 1 到 255 秒之间。

## 可选接口与模块  

reComputer Industrial R2000 支持丰富的扩展模块和配件，适用于多种场景和需求。如果你有定制 reComputer Industrial R2000 的需求，请联系 odm@seeed.cc 获取更多信息。
以下是配件和可选模块列表：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>备注</th>
        <th>项目</th>
        <th>产品名称</th>
        <th>SKU</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="7">用于 LoRa®WAN 功能时必须配套使用</td>
        <td rowspan="6">LoRa® 模块</td>
        <td>区域可选 LoRaWAN Gateway Module (USB) - US915</td>
        <td>114992969</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN Gateway Module(USB)-US915</td>
        <td>114992629</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN Gateway Module(USB)-US915</td>
        <td>114992991</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN Gateway Module(SPI)-EU868</td>
        <td>114993268</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN Gateway Module(SPI)-EU868</td>
        <td>114992549</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN Gateway Module(USB)-EU868</td>
        <td>114992628</td>
      </tr>
      <tr>
        <td>LoRa® 天线</td>
        <td>LoRa Antenna Kit - 868-915 MHz</td>
        <td>110061501</td>
      </tr>
      <tr>
        <td rowspan="8">4G 天线需与 4G 模块配合实现 4G 功能，GPS 天线需与 4G 模块配合实现 GPS 功能</td>
        <td rowspan="6">4G 模块</td>
        <td>LTE Cat 4 EC25-AFXGA-Mini-PCIe Module - 适用于北美</td>
        <td>113991134</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-EUXGR-Mini-PCIe Module - 适用于 EMEA 和泰国</td>
        <td>113991135</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-AUXGR-Mini-PCIe Module - 适用于澳大利亚</td>
        <td>113991174</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-EFA-Mini-PCIe Module - 适用于泰国</td>
        <td>113991214</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-EMGA-Mini-PCIe Module - 适用于马来西亚</td>
        <td>113991234</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-JFA-mini-PCIe</td>
        <td>113991296</td>
      </tr>
      <tr>
        <td>4G 天线</td>
        <td>4G Antenna Kit for 4G module</td>
        <td>110061502</td>
      </tr>
      <tr>
        <td>GPS 天线</td>
        <td>GPS Antenna Kit for EC25 4G Module</td>
        <td>110061521</td>
      </tr>
      <tr>
        <td></td>
        <td>加密芯片 TPM 2.0</td>
        <td>TPM 2.0 Module with infineon SLB9670</td>
        <td>114993114</td>
      </tr>
      <tr>
        <td rowspan="5"></td>
        <td rowspan="5">SSD 卡</td>
        <td>NVMe M.2 2280 SSD 2TB</td>
        <td>114993467</td>
      </tr>
      <tr>
        <td>NVMe M.2 2280 SSD 1TB</td>
        <td>114993467</td>
      </tr>
      <tr>
        <td>512GB NVMe M.2 PCle Gen3x4 2280 内置 SSD</td>
        <td>112990247</td>
      </tr>
      <tr>
        <td>256GB NVMe M.2 PCle Gen3x4 2280 内置 SSD</td>
        <td>112990246</td>
      </tr>
      <tr>
        <td>128GB NVMe M.2 PCle Gen3x4 2280 内置 SSD</td>
        <td>112990226</td>
      </tr>
      <tr>
        <td>该模块需要焊接到 reComputer Industrial R21xx 的载板上</td>
        <td>PoE</td>
        <td>MQ7813T120 PoE Module Kit for reTerminal DM</td>
        <td>110991925</td>
      </tr>
      <tr>
        <td></td>
        <td>UPS</td>
        <td>SuperCAP UPS LTC3350 Module</td>
        <td>110992004</td>
      </tr>
    </tbody>
  </table>
</div>

reComputer Industrial R21xx 主板配备两个 Mini-PCIe 插槽。Mini-PCIe 插槽 1 通过 USB 协议支持 4G 模块和 LoRa® 模块；而 Mini-PCIe 插槽 2 通过 USB 和 SPI 协议支持 LoRa® 模块。此外，4G 模块和 LoRa® 模块不应同时使用，板上也不能同时插入两个 LoRa® 模块。

> 注意
> 板上不能插入 2 个 LoRa® 模块。

### Wi-Fi/BLE  

reComputer Industrial R21xx 由带板载 Wi-Fi/BLE 版本的 CM5 提供支持，提供与 CM5 相同的 Wi-Fi/BLE 参数。有关详细参数信息，请参考 Raspberry Pi 官方网站。  

### 4G 模块

reComputer Industrial R21xx 主板配备一个 M.2 B-KEY 插槽和一个 Mini-PCIe 插槽，M.2 B-KEY 插槽和 Mini-PCIe 插槽均支持 4G 模块。来自 Quectel 的 EC25 4G 模块已经过充分测试，可与 reComputer Industrial R21xx 完全兼容。

### 5G 模块

reComputer Industrial R21xx 主板配备一个 M.2 B-KEY 插槽，通过 USB 协议支持 4G/5G 模块。来自 Quectel 的 EC25 4G 模块已经过充分测试，可与 reComputer Industrial R21xx 完全兼容。

> 注意
> 请注意，如果你需要 4G/5G 功能，则需要购买相应的 4G 模块和外置天线，并按照 4.5 节“组装 4G/LoRa® 模块和天线”中的说明进行操作。

### LoRa® 模块  

Mini-PCIe 插槽通过 USB 和 SPI 协议支持 LoRa® 模块。来自 Seeed Studio 的 WM1302 模块已经过充分测试，可与 reComputer Industrial R2000 完全兼容。

> 注意
> 请注意，如果你需要 LoRa® 功能，则需要购买相应的 LoRa® 模块和外置天线，并按照 4.5 节“组装 4G/LoRa® 模块和天线”中的说明进行操作。

### SSD

reComputer Industrial R2000 通过使用 PCIe 插槽（J7）支持 2280 NVMe SSD。需要注意的是，CM5 的 PCIe 为 Gen2.0，最大理论速度为 5Gbps。如果你使用的是 Gen3.0 或更高版本的 SSD，可能无法达到该 SSD 的最高速度。经过测试，安装 SSD 的 reTerminal DM 可实现最高 230MB/s 的写入速度和 370MB/s 的读取速度。如果你不确定哪些 SSD 兼容，可以按照下方的配件列表进行购买。

> 注意
> 请注意：
> 速度测试结果可能会因 SSD 型号、测试方法和测试环境的不同而有所差异。此处提供的数值仅供参考，且是在 Seeed 的实验室中获得的。

> 注意
> SSD 卡主要有两种用途：
>
> 1. **大容量存储：** SSD 卡可用于大容量存储需求。
> 2. **带镜像的启动盘：** 另一种用法是将 SSD 同时用作大容量存储以及系统镜像的存储介质，从而可以直接从 SSD 卡启动。
> 需要特别注意的是，市面上并非所有 SSD 卡都支持第二种用法。因此，如果你打算将其用作启动盘且不确定购买哪种型号，我们建议选择我们推荐的 1TB SSD（SKU 112990267）。该型号已经过启动功能测试和验证，可降低兼容性问题风险并减少试错成本。

### 加密芯片 TPM 2.0

该 TPM 采用英飞凌的 OPTIGA™ TPM SLB9670，符合 Trusted Computing Group（TCG）TPM 2.0 规范，推荐作为 reComputer Industrial R2000 的加密芯片。该芯片通过 SPI 接口连接到板上的 J26 端口，用于实现平台完整性的信任根、远程认证以及加密服务。

### UPS（不间断电源）模块

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/UPS_2.png" style={{width:900, height:'auto'}}/></div>

该 UPS 为 7F，串联工作。UPS 模块位于 DC5V 与 CM5 组件之间，使用一个 GPIO 信号在 5V 电源失电时向 CPU 发出警报。在接收到该信号后，CPU 会在超级电容能量耗尽前执行紧急脚本，执行“$ shutdown”命令。
UPS 提供的备份时长在很大程度上取决于系统负载。以下是使用配备 4GB RAM、32GB eMMC 存储和 Wi-Fi 模块的 CM5 模块进行测试的一些典型场景。

| **工作模式** | **时间（秒）**  | **备注**          |
|-----------------------|------------------------------|---------------------|
| 空闲                  | 15           | 在空闲条件下测试，并加载官方驱动程序  |
| CPU 满载              | 6            | stress -c 4 -t 10m -v &       |

:::note
如需 UPS 功能的更多信息，请联系我们，且告警信号为低电平有效。
:::

## 其他资源

- [reComputer Industrial R21xx 宣传单](https://files.seeedstudio.com/wiki/raspberry-pi/Seeed_Raspberry_Pi_Flyer.pdf)



## 资源

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
