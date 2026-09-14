---
description: Wio-LR2021 介绍
title: Wio-LR2021 介绍
keywords:
  - Wio-LR2021
  - LoRa
  - LR2021
  - Semtech
  - Sub-GHz
  - 2.4GHz
  - LoRaWAN
  - BLE 5.0
  - Transceiver
  - Wio
image: https://files.seeedstudio.com/wiki/Wio-LR2021/img/1-100058045-Seeed-Studio-Wio-LR2021-Wireless-module-masked.jpg
slug: /wio_lr2021_introduction
sku: 100058045
sidebar_position: 1
last_update:
  date: 06/03/2026
  author: David Du
createdAt: '2026-06-03'
updatedAt: '2026-06-22'
url: https://wiki.seeedstudio.com/cn/wio_lr2021_introduction/
---

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/1-100058045-Seeed-Studio-Wio-LR2021-Wireless-module-masked.jpg" style={{width:900, height:'auto'}}/></div></td>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Wio-LR2021-Wireless-module-868-915MHz-Tape-reel-p-6831.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 1. 介绍
**Wio-LR2021 无线模块**是一款新一代多频段无线收发模块，基于 Semtech 第四代 LR2021 芯片组驱动。它将 **Sub-GHz (863-928MHz)** 和 **2.4GHz ISM** 工作模式集成在一个紧凑的子系统中，消除了在不同地区和应用场景中设计多套射频方案的需求。

Wio-LR2021 专为 IoT 开发者、LPWAN 解决方案提供商、资产追踪工程师、智慧农业系统集成商以及工业 IoT 产品经理而设计，在超远距离 Sub-GHz 通信与高速 2.4GHz 数据链路之间架起桥梁，使开发者无需维护多种 RF 硬件版本即可构建可全球部署的产品。

## 2. 特性

### 2.1. 统一多频段 RF 架构

Wio-LR2021 将多个不同的 RF 频段集成到一个紧凑的子系统中。Sub-GHz 覆盖范围 (863-928MHz) 确保符合全球各地区的免授权频段要求，而 2.4GHz ISM 工作模式则提供更高的数据速率和全球统一性。

:::info 技术细节
Semtech LR2021 芯片组采用 **Switchless Direct-Tie** 匹配网络架构，无需外部 RF 开关。PA 输出和 LNA 输入在 Sub-GHz 端口共享同一个 RF 节点，从而减少 BOM 数量和板级复杂度。当发射功率高于 +6dBm 时，需要额外的前端保护；绝对最大输入为 +10dBm。
:::

:::caution
模块的 RF 接口最大输入功率为 **+10dBm**；超过该值可能造成不可逆损坏。我们建议当输入功率超过 **+6dBm** 时，为 RF 前端增加额外保护。在靠近高功率发射机使用本模块时请特别注意。
:::

### 2.2. 超低功耗设计

Wio-LR2021 的深度睡眠电流仅为 **583nA**，空闲电流为 **960uA**，针对电池供电和能量采集类应用进行了优化。 

:::info 功耗优化提示
为了获得最长电池寿命，请使用 Warm Sleep 模式，该模式会在唤醒周期之间保留 DIO 配置。
:::

| 模式 | 电流 | 条件 |
|------|---------|------------|
| TX (868MHz, +22dBm) | 116.0 mA | Sub-GHz 最大功率 |
| TX (915MHz, +22dBm) | 119.4 mA | Sub-GHz 最大功率 |
| TX (2.4GHz, +12dBm) | 28.4 mA | 2.4GHz 最大功率 |
| RX (Sub-GHz, LoRa SF12/125kHz) | 8.19 mA | 最大灵敏度模式 |
| RX (2.4GHz, LoRa SF12/125kHz) | 8.59 mA | 最大灵敏度模式 |
| Deep Sleep | 583 nA | 所有功能关闭，配置保留 |
| Idle / Standby | 960 uA | RC 振荡器运行，寄存器保持 |

### 2.3. 高级调制与协议支持

该模块支持广泛的调制方式：用于远距离 LPWAN 的 **LoRa**，用于最高 2.6Mbps 高速链路的 **FLRC**（Fast Long Range Communication），用于传统兼容性的 **(G)FSK** 和 **(G)MSK**，用于标准化协议的 **4-FSK** 和 **O-QPSK**，以及用于高可靠卫星 IoT 连接的 LR-FHSS。

:::info 协议灵活性
原生硬件支持使其能够在无需更改硬件的情况下，通过软件定义在 LoRaWAN、BLE 5.0、IEEE 802.15.4（Thread/Zigbee）、Wi-SUN、Wireless M-BUS 和 Amazon Sidewalk 之间迁移。这使设计在面对不断演进的标准和地区要求时更具前瞻性。
:::

### 2.4. 面向多媒体流的高速 FLRC

FLRC 调制支持高达 2.6Mbps 的数据速率——远超传统 LoRa 能力。这使 Wio-LR2021 适用于需要视频预览、音频流传输或通过无线链路进行大容量固件更新的应用，同时仍可受益于 LoRa 的测距和高鲁棒性特性。

### 2.5. 世界一流的接收灵敏度

Wio-LR2021 在 Sub-GHz SF12/125kHz 带宽下可实现 **-141.1dBm** 的灵敏度，在良好条件下可实现超过 160dBm 的链路预算。在 2.4GHz 下，其在 SF12/400kHz 时的灵敏度可达 **-133dBm**，优于大多数竞品双频解决方案。

### 2.6. 紧凑的 SMT 封装与预认证

Wio-LR2021 采用 22 引脚 SMT 封装，尺寸仅为 17.07x10.42x2.8mm，在最小化板级空间占用的同时最大化功能。其 FCC 和 CE 预认证状态通过简化整机认证流程，缩短产品上市时间。

:::note 需要主控 MCU
Wio-LR2021 是一款纯 RF 收发模块，不集成应用处理器。它需要外部主控 MCU（例如 STM32、nRF52、ESP32 或 RP2040），通过 SPI 接口进行控制。
:::

## 3. 硬件概览

### 3.1. 原理图

<td><div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/Wio-LR2021-pinout-5-mask.jpg" style={{width:950, height:'auto'}}/></div></td>

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/WIO-LR2021_Pinout-3.png" style={{width:900, height:'auto'}}/></div></td>

### 3.2. 引脚定义
| 引脚号| 引脚名 | 类型 | 描述 |
|-----|----------|------|-------------|
|1| VCC_IN | 电源输入 | 1.8V - 3.7V 电源输入 |
|2| DIO5 | 数字 I/O | IRQ、RF 开关控制、时钟输出，复位时内部弱上拉到 VCC_IN |
|3| RESET | 数字输入 | **低电平有效** |
|4| SPI_MISO | 数字输出 | 3.3V 逻辑，当 NSS 释放（HIGH）时为高阻态 |
|5| SPI_MOSI | 数字输入 | 3.3V 逻辑，当 NSS 释放（HIGH）时为高阻态 |
|6| SPI_SCK | 数字输入 | 最大 16MHz，模式 0（CPOL=0, CPHA=0）。 |
|7| SPI_NSS | 数字输入 | **低电平有效** |
|8| BUSY | 数字输出 | 开漏输出，主机 PCB 需外部上拉。LOW = 就绪；HIGH = 处理中。NSS 下降沿时自动被拉高。 |
|9| GND | 地 | 公共地参考 |
|10| SubG_RF | RF | Sub-GHz 射频引脚 |
|11| GND | 地 | 公共地参考 |
|12| GND | 地 | 公共地参考 |
|13| 2.4G_RF | RF | 2.4GHz 射频引脚 |
|14| GND | 地 | 公共地参考 |
|15| GND | 地 | 公共地参考 |
|16| DIO11 | 数字 I/O | 复位时为高阻态 |
|17| DIO10 | 数字 I/O | 复位时为高阻态 |
|18| DIO9 | 数字 I/O | 复位时为高阻态 |
|19| DIO8 | 数字 I/O | 复位时为高阻态 |
|20| GND | 地 | 公共地参考 |
|21| DIO6 | 数字 I/O | 复位时内部弱上拉到 VCC_IN |
|22| DIO7 | 数字 I/O | 复位时为高阻态 |

<br />

:::tip DIO 配置
所有 DIO 功能必须在 STDBY_RC 模式下通过 SPI `SetDioFunction` 命令进行配置。配置在 Warm Sleep 周期之间会被保留。请规划好主机固件，在模块复位后立即配置 DIO。
:::



## 资源

- **[PDF]** [Wio-LR2021 模块数据手册](https://files.seeedstudio.com/wiki/Wio-LR2021/res/Wio-LR2021%20Module%20Datasheet.pdf)

- **[STEP]** [Wio-LR2021 模块 3D 模型](https://files.seeedstudio.com/wiki/Wio-LR2021/res/Wio-LR2021_3D%20Model.step)

- **[DXF]** [Wio-LR2021 模块机械图纸](https://files.seeedstudio.com/wiki/Wio-LR2021/res/Wio-LR2021_Mechanical%20Drawing.dxf)

- **[ZIP]** [Wio-LR2021 模块 KiCad 库](https://files.seeedstudio.com/wiki/Wio-LR2021/res/kicad-library.zip)

- **[ZIP]** [Wio-LR2021 模块 Allegro 库](https://files.seeedstudio.com/wiki/Wio-LR2021/res/allegro-library.zip)

- **[LINK]** [Semtech 的 LoRa USP™ 固件平台](https://github.com/Lora-net/usp)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将通过多种支持方式，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>