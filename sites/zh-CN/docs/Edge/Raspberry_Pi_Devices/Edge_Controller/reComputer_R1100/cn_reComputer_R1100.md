---
description: reComputer R1100 是一款由 Raspberry Pi CM4 驱动、具备 AI 能力的物联网网关与控制器。其配备 2GB RAM、8GB eMMC、双以太网、USB、RS485、RS232、DI/DO 以及无线连接（4G、LoRa®、Wi-Fi/BLE），非常适合工业自动化与边缘计算应用。
title: reComputer R1100 入门指南
keywords:
  - Raspberry pi
  - 边缘控制器
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer2.jpg
slug: /recomputer_r1100_intro
last_update:
  date: 2/25/2024
  author: Kasun Thushara
createdAt: '2025-02-27'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

## 概述

reComputer R1100 由 Raspberry Pi CM4 提供算力，是一款多功能的边缘物联网网关，具备 AI 能力。它集成了丰富的工业接口，包括 **2x 以太网、2x USB、2x RS485、2x RS232、2x DI 和 2x DO**，并提供灵活的无线连接选项，如 **4G、LoRa® 和 Wi-Fi/BLE**。这些特性使其成为多种工业应用的理想选择。
reComputer R1100 系列广泛应用于物联网场景，包括 **数据采集与过程监控、自动化与机器人控制、智能制造以及工业通信与网络**。其小巧的体积、灵活性、低成本和可编程性，为 **自动化、物联网系统及更多应用** 提供了有力支持。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 特性

**为自动化与物联网系统而设计**  

- 支持 **BACnet、Modbus RTU、Modbus TCP/IP 和 KNX** 协议  
- 兼容 **Node-RED、CODESYS、Balena 等**  
- **双侧 LED 指示灯**，便于快速查看状态  
- **坚固金属外壳**，支持 **导轨安装和壁挂安装**  
- 支持 **Yocto 和 Buildroot** 以定制操作系统  

**强劲性能**  

- 由 **Raspberry Pi CM4** 提供算力  
- **Broadcom BCM2711** 四核 **Cortex-A72 (ARM v8) 64 位 SoC @ 1.5GHz**  
- 最高支持 **8GB RAM** 和 **32GB eMMC 存储**  

**丰富的无线能力**  

- **片上 Wi-Fi 和 BLE**  
- **Mini-PCIe 1**：支持 **LTE、USB LoRa® 
- **Mini-PCIe 2**：支持 **SPI LoRa®、USB LoRa®

**全面的接口**  

- **2x RS485（隔离）、2x RS232（隔离）、2x 隔离 DI 端口、2x 隔离 DO 端口**  
- **1x 10M/100M/1000M 以太网**（支持 **PoE**）  
- **1x 10M/100M 以太网**  
- **1x HDMI 2.0**  
- **2x Type-A USB 2.0**  
- **1x Type-C USB 2.0**（用于操作系统更新的 USB 控制台）  
- **1x MicroSD 卡槽**  
- **1x Nano SIM 卡槽（内部）**  

**安全性与可靠性**  

- **硬件看门狗**  
- **可选 UPS 超级电容**  
- **金属外壳配 PC 侧板**  
- **电磁兼容性（EMC）标准**：  
  - **ESD**：EN61000-4-2，Level 3  
  - **EFT**：EN61000-4-4，Level 2  
  - **浪涌保护**：EN61000-4-5，Level 2  
- **产品生命周期**：**reComputer R1100** 将至少 **生产至 2030 年 12 月**  

## 规格

| **参数**          | **描述** |
|------------------------|----------------|
| **硬件规格** | |
| **产品系列** | R11xx-10, R11xx-00 |
| **CPU** | Raspberry Pi CM4，四核 Cortex-A72 @ 1.5GHz |
| **操作系统** | Raspbian、Debian、Yocto、Buildroot |
| **RAM** | 1GB / 2GB / 4GB / 8GB |
| **eMMC 存储** | 8GB / 16GB / 32GB |
| **系统规格** | |
| **电源输入** | DC 9V~36V，2 针端子块 |
| **PoE（受电设备）** | IEEE 802.3af 标准 12.95W PoE* |
| **过压保护** | 40V |
| **功耗** | 空闲：2.88W；满载：5.52W |
| **电源开关** | 无 |
| **重启开关** | 有 |
| **接口** | |
| **以太网** | 1x 10/100/1000Mbps（支持 PoE*），1x 10/100Mbps IEEE 802.3/802.3u |
| **USB** | 2x USB-A 2.0 Host，1x USB-C 2.0（用于刷写 OS） |
| **RS485** | 2x RS485（隔离） |
| **RS232** | 2x RS232（隔离） |
| **DI（数字输入）** | 2x 隔离 DI 端口，输入电压：5~24V DC |
| **DO（数字输出）** | 2x 隔离 DO 端口，输出电压：&lt;60V DC |
| **SIM 卡** | 1x Nano SIM 卡槽（内部） |
| **SD 卡** | 1x MicroSD 卡槽 |
| **SSD** | 1x M.2 NVMe SSD 插槽（2280-M Key） |
| **LED 指示灯** | 12x LED 指示灯 |
| **蜂鸣器** | 1 |
| **复位按钮** | 1 |
| **HDMI** | 1x HDMI 2.0 |
| **无线通信** | |
| **Wi-Fi 2.4/5.0GHz** | 片上 Wi-Fi* |
| **BLE 5.0** | 片上 BLE* |
| **LoRa®** | USB LoRa®*/ SPI LoRa®* |
| **4G 蜂窝网络** | 4G LTE* |
| **标准** | |
| **EMC 符合性** | ESD：EN61000-4-2，Level 3；EFT：EN61000-4-4，Level 2；Surge：EN61000-4-5，Level 2 |
| **认证** | CE、FCC、TELEC、RoHS、REACH |
| **环境条件** | |
| **防护等级** | IP40 |
| **工作温度** | -30 ~ 70°C |
| **工作湿度** | 10 ~ 95% RH |
| **存储温度** | -40 ~ 80°C |
| **其他特性** | |
| **超级电容 UPS** | SuperCAP UPS LTC3350 模块* |
| **硬件看门狗** | 1 ~ 255s |
| **RTC** | 高精度 RTC |
| **安全性** | |
| **加密芯片** | TPM 2.0*，ATECC608A |
| **散热系统** | 无风扇 |
| **质保** | 2 年 |
| **产品生命周期** | 至 2030 年 12 月 |
| **说明** | 标有 * 的选项需根据配件清单另行购买。 |
| **元件与接口状态** | |
| **预留** | 为未来使用或扩展预留。 |
| **可选** | 非关键元件；用户可选择是否配置。 |
| **已占用** | 当前正在使用且对产品功能至关重要。 |
| **已包含** | 标准包装中提供的关键元件。 |

**说明**：标有 `*` 的选项需根据配件清单另行购买。

## 机械尺寸  

| **参数** | **描述** |
|--------------|----------------|
| **尺寸（宽 x 高 x 深）** | 130 mm x 93 mm x 49.6 mm |
| **外壳** | 6061 铝合金外壳，配透明 PC 侧板 |
| **安装方式** | 导轨 / 壁挂 |
| **重量（净重）** | 560g |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dimensions.PNG" style={{width:800, height:'auto'}}/></div>

## 硬件总览

### 系统总览

#### 接口总览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/interface.PNG" style={{width:800, height:'auto'}}/></div>

#### 主板总览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/mainboard.PNG" style={{width:800, height:'auto'}}/></div>

#### 电源框图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power.PNG" style={{width:800, height:'auto'}}/></div>

reComputer R1100 提供两种供电方式：DC 端子和 PoE 端口。默认情况下，通过 DC 端子使用官方区域电源适配器（SKU: 110061505/110061506）供电。或者，也可以选配 PoE 供电（PoE 模块，SKU: 110991925）。这种灵活性便于与不同电源方案无缝集成，以满足多种应用需求。

**2 针电源端子**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

reComputer R1100 通过 2 针电源端子块接入 9 至 36V 的 DC 电压供电。接地时，可将地线牢固连接到电源端子左上角的螺丝上。

**PoE**

安装 PoE 模块后，reComputer R1100 的 ETH0 端口支持 PoE 供电，可通过以太网为设备提供一种便捷高效的供电方式。该选项简化了安装并减少布线，非常适合电源受限或缺乏现成电源插座的应用场景。

- **PoE 输入**：44~57V（典型值：48V）
- **PoE 输出**：12V，最大 1.1A

:::note
随附的 PoE 模块符合 IEEE 802.3af 标准，最大输出功率为 12.95W。然而，对于 SSD 或 4G 模块等高功耗外设，PoE 供电可能不足。在此情况下，建议使用 DC 端子供电，以确保设备稳定可靠运行。
:::

**功耗**

下表给出了在 Seeed Studio 实验室测试得到的 reComputer R1100 功耗数据。请注意，这些数值仅供参考，不同的测试方法和环境条件可能会影响结果。  

| **状态**   | **电压** | **电流** | **功耗** | **描述** |
|-------------|------------|------------|----------------------|----------------|
| **关机** | 24V | 51mA | 1.224W | 在关机断电状态下的静态功耗测试。 |
| **空闲** | 24V | 120mA | 2.88W | 在提供 24V 电源且未运行任何测试程序时测量输入电流。 |
| **满载** | 24V | 230mA | 5.52W | 使用 `"stress -c 4"` 命令让 CPU 满载运行，且未连接任何外部设备。 |

 **上电与断电**  
reComputer R1100 默认不带电源按钮。连接电源后系统会自动启动。  

- 要关机，请在操作系统中使用关机选项，并等待关机过程完成后再断开电源。  
- 要重启系统，只需重新接通电源即可。  

这样可以确保安全运行，避免潜在的数据丢失或系统问题。

#### 方框图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

#### IIC 示意图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/IIC.PNG" style={{width:600, height:'auto'}}/></div>

## 接口说明

| **接口** | **描述** |
|--------------|----------------|
| **以太网** | 1 × 10/100/1000 Mbps（支持 PoE*），1 × 10/100 Mbps（IEEE 802.3/802.3u） |
| **USB** | 2 × USB-A 2.0（Host），1 × USB-C 2.0（用于刷写 OS） |
| **RS485** | 2 × RS485（隔离） |
| **RS232** | 2 × RS232（隔离） |
| **DI（数字输入）** | 2 × 隔离 DI 端口，输入电压：5~24V DC |
| **DO（数字输出）** | 2 × 隔离 DO 端口，输出电压：< 60V DC |
| **HDMI** | 1 × HDMI 2.0 |
| **SD 卡槽** | 支持 MicroSD 卡 |
| **SIM 卡槽** | 支持 Nano SIM 卡 |
| **M.2 插槽** | 支持 M.2 NVMe SSD |
| **LED 指示灯** | 12 × LED 指示灯 |
| **蜂鸣器** | 1 |
| **复位按钮** | 1 |

### LED 指示灯状态

R1100 计算机配备了 12 个 LED，用于指示系统状态。它们的具体功能如下表所示。

下面是结构化格式的 **LED 指示灯状态** 表：  

| **LED 指示灯** | **颜色** | **状态** | **描述** |
|------------------|---------|-----------|----------------|
| **PWR** | 绿色 | 亮 | 设备已连接电源。 |
| | | 灭 | 设备未连接电源。 |
| **ACT** | 绿色 | 闪烁 | 表示在 Linux 下访问 eMMC。如果在启动过程中发生错误，它会闪烁错误模式（请参考 Raspberry Pi 文档）。 |
| **USER** | 绿色/红色/蓝色 | 用户自定义 | 可由用户自行编程控制。 |
| **4G** | 绿色 | 亮 | 拨号成功，连接正常。 |
| | | 灭 | 4G 信号未连接，或设备未上电。 |
| **DI1** | 绿色 | 亮/闪烁 | 检测到输入信号。 |
| | | 灭 | 无电源或无数据传输。 |
| **DI2** | 绿色 | 亮/闪烁 | 检测到输入信号。 |
| | | 灭 | 无电源或无数据传输。 |
| **DO1** | 绿色 | 亮/闪烁 | 检测到输出信号。 |
| | | 灭 | 无电源或无数据传输。 |
| **DO2** | 绿色 | 亮/闪烁 | 检测到输出信号。 |
| | | 灭 | 无电源或无数据传输。 |
| **COM1 (RS485 通道 1)** | 绿色 | 亮/闪烁 | 正在接收或发送数据。 |
| | | 灭 | RS485 通道 1 上无数据传输。 |
| **COM2 (RS485 通道 2)** | 绿色 | 亮/闪烁 | 正在接收或发送数据。 |
| | | 灭 | RS485 通道 2 上无数据传输。 |
| **COM3 (RS232 通道 1)** | 绿色 | 亮/闪烁 | 正在接收或发送数据。 |
| | | 灭 | RS232 通道 1 上无数据传输。 |
| **COM4 (RS232 通道 2)** | 绿色 | 亮/闪烁 | 正在接收或发送数据。 |
| | | 灭 | RS232 通道 2 上无数据传输。 |

### ACT 状态代码

下面是结构化格式的 **ACT 状态代码** 表：  

| 长闪次数 | 短闪次数 | 状态描述 |
|-------------|--------------|--------------------|
| 0 | 3 | 通用启动失败 |
| 0 | 4 | 未找到 `start*.elf` |
| 0 | 7 | 未找到内核镜像 |
| 0 | 8 | SDRAM 故障 |
| 0 | 9 | SDRAM 不足 |
| 0 | 10 | 处于 HALT 状态 |
| 2 | 1 | 分区不是 FAT 格式 |
| 2 | 2 | 从分区读取失败 |
| 2 | 3 | 扩展分区不是 FAT 格式 |
| 2 | 4 | 文件签名/哈希不匹配（Pi 4） |
| 4 | 4 | 不支持的板卡类型 |
| 4 | 5 | 致命固件错误 |
| 4 | 6 | 电源故障类型 A |
| 4 | 7 | 电源故障类型 B |

**附加说明：**  

- 如果 **ACT LED 以规则的四次闪烁模式闪烁**，表示缺少启动代码（`start.elf`）。  
- 如果 **ACT LED 以不规则模式闪烁**，表示启动过程已经开始。  
- 如果 **ACT LED 完全不闪烁**，EEPROM 代码可能已损坏。请尝试在不连接任何外设的情况下启动。  
- 更多详情请参考 **Raspberry Pi 论坛**： [Is your Pi not booting? (Boot Problems Sticky)](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151).

**USER 指示灯**

reComputer R1100 包含一个 **USER** 指示灯，可根据用户需求进行自定义。  

**注意：**  
关于 **USER LED** 测试的详细信息，请参考 [This Section](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/#control-led-indicators).

### 蜂鸣器

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/buzzer.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 配备了一个有源蜂鸣器，可用于报警和事件通知。  

要查看与 **Buzzer_EN** 对应的 GPIO，请在终端中输入以下命令：  

```
cat /sys/kernel/debug/gpio
```

这将输出 **gpio587** 作为蜂鸣器对应的 GPIO。  

**注意：**  
关于 **蜂鸣器测试** 的详细信息，请参考 [This Section](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/#controlling-the-buzzer-via-gpio).

### RS485

reComputer R1100 系列配备了 **两个 RS485 接口**，采用 **6 针 3.5mm 间距 Phoenix 端子**。每个 RS485 接口的丝印标注为 **"A/B/GND"**，便于识别。  

**引脚定义**  
端子引脚分配如下：  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485.PNG" style={{width:600, height:'auto'}}/></div>

| **Pin ID** | **Pin Name**  |  
|-----------|-------------|  
| 1         | RS485-1_A   |  
| 2         | RS485-2_A   |  
| 3         | RS485-1_B   |  
| 4         | RS485-2_B   |  
| 5         | GND         |  
| 6         | GND         |  

连接线缆
RS485 接线示意图如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
产品包装中包含 120 欧姆终端电阻，可根据 RS485 通信需要使用。
:::

关于 RS485 测试的详细信息，请参考 [This Section](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/#rs485-testing).

### RS232

reComputer R1100 系列配备了 2 个 RS232 接口，采用 6 针 3.5mm 间距 Phoenix 端子。
单个 RS232 接口的丝印标注为 **TX/RX/GND**。

**引脚定义**

端子引脚定义如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285.PNG" style={{width:600, height:'auto'}}/></div>

下面是 RS232 引脚定义表：

| **Pin ID** | **Pin Name**  |
|-----------|--------------|
| 13        | R232-3_RX    |
| 14        | R232-4_RX    |
| 15        | R232-3_TX    |
| 16        | R232-4_TX    |
| 17        | GND          |
| 18        | GND          |

**连接线缆**

RS232 接线示意图如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
关于 RS232 测试的详细说明，请参考 [This Section](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/#rs232-testing)。

:::

### DI（数字输入）

reComputer R1100 系列包含 2 个 DI 接口，采用 3 针 3.5mm 间距 Phoenix 端子。  
单个 DI 接口的丝印标注为 **"DI/G_DI"**。  

**引脚定义**

端子引脚定义如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI.PNG" style={{width:600, height:'auto'}}/></div>

下面是 **DI（数字输入）引脚定义** 表：  

| **Pin ID** | **Pin Name** |
|-----------|------------|
| 7         | DI1        |
| 9         | DI2        |
| 11        | G_DI       |

**连接线缆**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI_connect.PNG" style={{width:600, height:'auto'}}/></div>

下面是 **DI（数字输入）参数** 表：  

| **参数**           | **说明**    |
|------------------------|-------------------|
| 输入类型            | PNP               |
| 隔离防护  | 5 kV              |
| DI 到 G_DI（导通状态） | 5~30 VDC          |

:::note
关于 DI 测试的详细信息，请参考 [This Section](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/#di-digital-input-testing).
:::

### DO（数字输出）

reComputer R1100 系列设备包含 2 个 DO 接口，采用 3 针 3.5mm 间距 Phoenix 端子。单个 DO 的丝印为 **"DO/G_DO"。**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO.PNG" style={{width:600, height:'auto'}}/></div>

**引脚定义表**

| Pin ID | Pin Name |  
|--------|------------|  
| 8      | DO1       |  
| 10     | DO2       |  
| 12     | G_DO      |

 **连接线缆**

 单个 DO 接线示意图如下：

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO_connect.PNG" style={{width:600, height:'auto'}}/></div>

**DO 接口参数**

| 参数            | 说明     |  
|----------------------|----------------|  
| 输出类型         | 晶体管      |  
| 隔离防护 | 5 kV           |  
| 输出说明        | &lt; 60VDC         |

:::note
关于 DO 测试的详细信息，请参考 [This Section](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/#do-digital-output).
:::

### 启动拨码开关（Boot Switch）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/Boot.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 上的 Boot Switch 连接到 CM4 模块的 nRPI_BOOT 引脚。该开关允许用户在 eMMC 和 USB 之间选择启动源。  

- **正常模式：** 将开关拨到 **远离** “BOOT” 标识的一侧，从 eMMC 启动。  
- **烧录模式：** 将开关拨到 **靠近** “BOOT” 标识的一侧，从 Type-C USB 接口启动以烧录系统镜像。

下面是 Boot Switch 各位置及其对应模式的表格：  

| **开关位置** | **模式**       | **描述**      | **nRPI-BOOT** |
|---------------------|---------------|----------------------|---------------|
| 远离 "BOOT"   | 正常模式    | 从 eMMC 启动       | 低           |
| 靠近 "BOOT"     | 烧录模式     | 从 USB 启动        | 高          |

### USB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/usb.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 配备了一个 USB Type-C 接口和两个 USB Type-A 接口。下表列出了它们的功能和说明。

下面是 USB 接口及其功能的表格：  

| **类型**   | **数量** | **协议** | **功能**   | **说明** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | 1          | USB 2.0    | USB-Device   | 用于串口调试、烧录镜像等。 |
| Type-A   | 2          | USB 2.0    | USB-Host     | 连接 U 盘、USB 键盘或鼠标等各种 USB 设备。 |

### SD 卡槽

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SD.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 系列设备包含一个 micro SD 卡槽，用于安装 micro SD 卡以存储用户数据。

### SIM 卡槽（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/simslot.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 系列包含一个内部 Nano SIM 卡槽，用于安装 Nano SIM 卡以实现 4G 连接。下表展示了标准 SIM、Micro SIM 和 Nano SIM 卡之间的尺寸差异。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SIMsizes.PNG" style={{width:400, height:'auto'}}/></div>

:::note
reComputer R1100 标准版本不包含内置 4G 模块。如果需要 4G 功能，必须另外单独购买 4G 模块。更多详情请参考[本节](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/#可选接口和模块)。
:::

### SSD 卡槽

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SSD.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 配备了一个 **NVMe M.2 2280 SSD 卡槽**，支持 **128GB、256GB、512GB 和 1TB** 的存储容量。该卡槽可实现高速存储扩展，使用户能够提升系统的**性能**和**容量**。  

**注意：**  
SSD 卡主要有两种用途：  

1. **大容量存储** – SSD 可用于大容量存储需求。  
2. **带系统镜像的启动盘** – 部分 SSD 既可作为大容量存储，也可作为系统的启动盘。  

然而，并非所有 SSD 都支持启动功能。如果你计划将 SSD 用作启动盘且不确定购买哪一款型号，我们推荐 **1TB SSD (SKU112990267)**，因为其已通过启动功能测试与验证。这可以减少兼容性问题并降低试错成本。

### reComputer R1100 上的 Mini-PCIe 插槽

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/pci.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 配备了**两个 Mini-PCIe 插槽**，支持多种通信协议。下表列出了每个插槽所支持的协议：  

| **插槽**       | **支持的协议**   |  
|---------------|--------------------------|  
| **Mini-PCIe 1** | 4G LTE, USB LoRa® |  
| **Mini-PCIe 2** | SPI LoRa®, USB LoRa® |  

这些插槽允许用户扩展连接选项，根据需要集成 **4G LTE 和 LoRa® 模块。

该设备包含两个 **Mini-PCIe 接口**：**插槽 1** 和 **插槽 2**。  

- **Mini-PCIe 插槽 1** 连接到 **SIM 卡槽** 并支持 **USB 协议**，适合连接 **4G LTE 和 USB LoRa® 模块。  
- **Mini-PCIe 插槽 2** 同时支持 **USB 和 SPI 协议**，但**未连接**到 SIM 卡槽。它可用于安装 **SPI LoRa® 和 USB LoRa® 设备。  

这些插槽为多种无线通信模块提供了灵活的扩展选项。

### 复位孔  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reset.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 在复位孔内配备了一个**微型按键开关**。通过使用细小物体按下该按键，用户可以**复位 CM4**。  

- 当该引脚为**高电平**时，表示 **CM4 已启动**。  
- 当该引脚被**拉低**时，将**复位模块**。

### 以太网 RJ45  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/eth.PNG" style={{width:200, height:'auto'}}/></div>

**reComputer R1100** 配备了两个以太网端口：  

| 名称  | 类型                         | 速率              | PoE 支持情况                |
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | CM4 原生千兆以太网           | 10/100/1000 Mbit/s  | 支持（需额外模块） |
| ETH1  | 由 USB 转换                  | 10/100 Mbit/s       | 不支持             |

**reComputer R1100** 配备了两个以太网 RJ45 端口：  

- **ETH0**：一个 **CM4 原生千兆以太网** 接口，支持 **10/100/1000 Mbit/s** 速率。可通过额外的 **PoE 模块** 升级以实现 **以太网供电 (PoE)**，用于为设备供电。  
- **ETH1**：一个 **由 USB 转换的以太网** 接口，支持 **10/100 Mbit/s** 速率，但**不支持 PoE**。

**注意**  
关于 PoE 的更多详情，请参考[本节](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/#poe-以太网供电)。

### HDMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/display.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 具有来自 CM4 的原生 HDMI 接口，支持最高 **4K@60fps** 视频输出。它非常适合需要多屏显示的应用，使用户能够将内容输出到外部大屏幕。

### RTC  

reComputer R1100 集成了一个带有预装 **CR2032 电池** 的 **RTC（实时时钟）电路**，即使在断电期间也能确保时间保持准确。  

:::note
有关 RTC 测试的详细信息，请参考[本节](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/#rtc-实时时钟测试)。
:::  

### 看门狗  

reComputer R1100 具有一个**独立的硬件看门狗电路**，在系统崩溃时会自动重启系统。该看门狗通过 **RTC** 实现，并支持 **1 到 255 秒范围内灵活可调的喂狗时间**。  

:::note
有关看门狗测试的详细信息，请参考[本节](https://wiki.seeedstudio.com/cn/recomputer_r/#看门狗)。
:::

## 可选接口和模块  

reComputer R1100 支持**多种扩展模块和配件**，可适配多种应用场景。如果你有定制 reComputer R1100 的需求，请联系 **odm@seeed.cc** 以获取更多信息。  

#### 配件和可选模块列表

下面是经过格式化的表格，以便于阅读：  

| **备注**                                     | **项目**               | **产品名称**                                      | **SKU**         |
|------------------------------------------------|------------------------|------------------------------------------------------|----------------|
| **LoRa® WAN 功能必须配套使用** | LoRa® 模块           | Region optional LoRaWAN Gateway Module (SPI) - US915 | 114992969      |
|                                                |                        | Region optional LoRaWAN Gateway Module (SPI) - EU868 | 114993268      |
|                                                |                        | Region optional LoRaWAN Gateway Module (USB) - US915 | 114992991      |
|                                                |                        | Region optional LoRaWAN Gateway Module (USB) - EU868 | 114992628      |
| **LoRa® 天线**                              | LoRa® 天线          | LoRa Antenna Kit - 868-915MHz                        | 110061501      |
| **该配件是实现 Wi-Fi 功能所必需的** | Wi-Fi/BLE 天线     | Raspberry Pi Compute Module 4 Antenna Kit           | 114992364      |
| **4G 天线需与 4G 模块配合实现 4G 功能，GPS 天线需与 4G 模块配合实现 GPS 功能** | 4G 模块 | LTE Cat 4 EC25-AFXGA Mini-PCIe Module - North America | 113991134      |
|                                                |                        | LTE Cat 4 EC25-EUXGR Mini-PCIe Module - EMEA & Thai  | 113991135      |
|                                                |                        | LTE Cat 4 EC25-AUXGR Mini-PCIe Module - Australia    | 113991174      |
|                                                |                        | LTE Cat 4 EC25-EFA Mini-PCIe Module - Thailand       | 113991214      |
|                                                |                        | LTE Cat 4 EC25-EMGA Mini-PCIe Module - Malaysia      | 113991234      |
|                                                |                        | LTE Cat 4 EC25-JFA Mini-PCIe Module - Japan          | 113991296      |
| **4G 天线**                                 | 4G 天线            | 4G Antenna Kit for 4G module                        | 110061502      |
| **GPS 天线**                                | GPS 天线           | GPS Antenna Kit for EC25 4G Module                  | 110061521      |
| **加密芯片**                            | TPM 2.0               | TPM 2.0 Module with Infineon SLB9670                | 114993114      |
| **SSD 存储**                                | SSD 卡              | NVMe M.2 2280 SSD 1TB                               | 112990267      |
|                                                |                        | 512GB NVMe M.2 PCIe Gen3x4 2280 Internal SSD        | 112990247      |
|                                                |                        | 256GB NVMe M.2 PCIe Gen3x4 2280 Internal SSD        | 112990246      |
|                                                |                        | 128GB NVMe M.2 PCIe Gen3x4 2280 Internal SSD        | 112990226      |
| **该模块需要焊接到 reComputer R1100 载板上** | PoE | MQ7813T120 PoE Module Kit for reTerminal DM | 110991925 |
| **UPS**                                        | UPS                   | SuperCAP UPS LTC3350 Module                         | 110992004      |

**reComputer R1100** 主板具有**两个 Mini-PCIe 插槽**，其兼容性如下：  

- **Mini-PCIe 插槽 1** 支持：  
  - **4G 模块**（USB 协议）  
  - **LoRa® 模块**（USB 协议）  

- **Mini-PCIe 插槽 2** 支持：  
  - **LoRa® 模块**（USB 和 SPI 协议）  

:::note
 **4G 和 LoRa® 模块不能同时使用。**  
 **你不能在板上插入两个 LoRa® 模块。**  

:::

这意味着你需要在 **4G 或 LoRa®** 之间进行选择，并且在任意时刻只能安装 **一个** LoRa® 模块。

### Wi-Fi/BLE  

**reComputer R1100-10** 由带有板载 **Wi-Fi/BLE 版本** 的 **CM4** 提供支持，提供与 CM4 相同的 Wi-Fi/BLE 参数。有关详细规格，请参考 **Raspberry Pi 官方网站**。  

### 4G 模块

**reComputer R1100** 主板具有 **两个 Mini-PCIe 插槽**，其中 **Mini-PCIe 插槽 1** 支持通过 **USB 协议的 4G 模块**。**Quectel EC25 4G 模块** 已经过全面测试，可与 reComputer R1100 兼容。  

:::note
如果你需要 **4G 功能**，必须 **购买相应的 4G 模块和外置天线**，并按照 [Assemble 4G/LoRa® and Antenna](https://wiki.seeedstudio.com/cn/recomputer_r1100_assembly_guide/) 中的说明进行操作。
:::

### LoRa® 模块  

两个 **Mini-PCIe 插槽** 都支持通过 **USB 协议的 LoRa® 模块**。此外，**Mini-PCIe 插槽 2** 还支持使用 **SPI 协议的 LoRa® 模块**。**来自 Seeed Studio 的 WM1302 模块** 已经过全面测试，可与 reComputer R1100 兼容。

:::note
如果你需要 **LoRa® 功能**，必须 **购买相应的 LoRa® 模块和外置天线**，并按照 [Assemble 4G/LoRa® and Antenna](https://wiki.seeedstudio.com/cn/recomputer_r1100_assembly_guide/) 中的说明进行操作。
:::

### PoE（以太网供电）

通过添加 **PoE 供电模块**，**reComputer R1100 支持 IEEE 802.3af PD（受电设备）标准**。**PoE 座子已预先焊接在板上**，但用户必须 **拆解设备以安装 PoE 模块**，从而实现以太网 PoE 功能。  

有关拆解指南，请参考 [Disassembly Guide](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-ups-and-poe-module)  

:::note  

- **reComputer R1100 支持 PoE 供电，但标准产品默认不包含 PoE 模块。**  
- **Seeed 为批量定制订单提供 PoE 焊接和组装服务。**  
- 对于样品测试，客户必须 **自行焊接和组装 PoE 模块**。相关说明可在 **“Assemble PoE Module”** 中找到。  

:::

### SSD（存储扩展）

**reComputer R1100 支持 2280 NVMe SSD**，通过位于板上两个 Mini-PCIe 插槽下方的 **PCIe 插槽（J62）** 连接。  

:::note

- **CM4 的 PCIe 接口为 Gen 2.0**，**最大理论速度为 5Gbps**。  
- 如果你使用 **Gen 3.0 或更高版本的 SSD**，它可能无法达到其最大速度。  
- **来自 reTerminal DM 的测试结果显示：**  
  - **最大写入速度：**230MB/s  
  - **最大读取速度：**370MB/s  
- SSD 兼容性可能有所不同，因此 **建议从已批准的配件列表中购买 SSD**。  

:::

**SSD 使用场景：**  

- **大容量存储** – SSD 可用于扩展存储空间。  
- **带系统镜像的启动盘** – 某些 SSD 可以存储系统镜像并 **直接从 SSD 启动**。  

:::note
**并非所有 SSD 都支持启动功能！**  
如果你需要用于启动的 SSD 且不确定购买哪一款，Seeed **推荐 1TB SSD（SKU: 112990267）**，该产品已 **经过启动功能测试和验证**，可最大限度降低兼容性风险和排障成本。  
:::

### 加密芯片 - TPM 2.0  

reComputer R1100 支持 **Infineon 的 OPTIGA™ TPM SLB9670**，其符合 **Trusted Computing Group（TCG）TPM 2.0** 规范。  

**主要特性：**  

- **用于安全性的加密芯片**  
- **SPI 接口**（连接到板上的 **J13 端口**）  
- **提供信任根**，用于：
  - **平台完整性**
  - **远程证明**
  - **密码学服务**  

:::note  
有关安装说明，请参考 [Assemble TPM 2.0 Module](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-tpm-20-module)  

:::

### UPS（不间断电源）模块

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/UPS.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 中的 **UPS 模块** 是一个 **基于 7F 超级电容的** 备用电源系统，以 **串联方式** 工作。  

**工作原理：**  

1. 位于 **DC 5V 电源** 与 **CM4** 之间。  
2. 使用 **GPIO 信号** 在 **5V 电源故障** 时通知 **CPU**。  
3. CPU 在电源耗尽前运行 **应急脚本**。  
4. 脚本执行 **"$ shutdown"** 命令，以安全关闭系统。  

**备份时长：**  
**UPS 运行时间** 取决于 **系统负载**。以下是测试结果：  

- **CM4（4GB RAM，32GB eMMC，Wi-Fi 模块）。**  

## 其他资源

- [reComputer R1100 3D 文件](https://files.seeedstudio.com/R11/reComputer%20R1100_3D.stp)
- [reComputer R1100 原理图设计、PCB 设计](https://files.seeedstudio.com/R11/reComputer%20R1100_schematic_design_files.zip)
- [reComputer R1100 宣传单](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer-R1100/reComputer-R1100-flyer.pdf)
- [用户手册](https://files.seeedstudio.com/R11/reComputer%20R1100%20User%20Manual-V1.0.pdf)



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
