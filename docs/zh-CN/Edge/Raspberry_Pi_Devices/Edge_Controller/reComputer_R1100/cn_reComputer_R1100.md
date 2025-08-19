---
description: reComputer R1100 是一款由 Raspberry Pi CM4 驱动的物联网网关和控制器，具备 AI 功能。配备 2GB RAM、8GB eMMC、双以太网、USB、RS485、RS232、DI/DO 和无线连接（4G、LoRa®、Wi-Fi/BLE），非常适合工业自动化和边缘计算。
title: reComputer R1100 入门指南
keywords:
- Raspberry pi
- 边缘控制器
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer2.jpg
slug: /cn/recomputer_r1100_intro
last_update:
  date: 2024/2/25
  author: Kasun Thushara
---

## 概述

reComputer R1100 由 Raspberry Pi CM4 提供动力，是一款多功能的边缘物联网网关，具备 AI 功能。它提供了全面的工业接口，包括 **2x 以太网、2x USB、2x RS485、2x RS232、2x DI 和 2x DO**，以及灵活的无线连接选项，如 **4G、LoRa® 和 Wi-Fi/BLE**。这些特性使其成为各种工业应用的理想选择。

reComputer R1100 系列广泛应用于物联网领域，包括 **数据采集与过程监控、自动化与机器人控制、智能制造以及工业通信与网络**。其紧凑的尺寸、灵活性、低成本和可编程性为 **自动化、物联网系统及其他领域** 提供了强有力的支持。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

**为自动化与物联网系统设计**  
- 支持 **BACnet、Modbus RTU、Modbus TCP/IP 和 KNX** 协议  
- 兼容 **Node-RED、CODESYS、Balena 等**  
- **双面 LED 指示灯**，便于快速状态检查  
- **耐用金属外壳**，支持 **DIN 导轨和壁挂安装**  
- 支持 **Yocto 和 Buildroot** 定制操作系统  

**强大的性能**  
- 由 **Raspberry Pi CM4** 提供动力  
- **Broadcom BCM2711** 四核 **Cortex-A72 (ARM v8) 64 位 SoC @ 1.5GHz**  
- 高达 **8GB RAM** 和 **32GB eMMC 存储**  

**丰富的无线功能**  
- **芯片内置 Wi-Fi 和 BLE**  
- **Mini-PCIe 1**：支持 **LTE、USB LoRa®、USB Zigbee**  
- **Mini-PCIe 2**：支持 **SPI LoRa®、USB LoRa®、USB Zigbee**  

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
- **金属外壳，配备 PC 侧面板**  
- **电磁兼容性 (EMC) 标准**：  
  - **ESD**：EN61000-4-2，3 级  
  - **EFT**：EN61000-4-4，2 级  
  - **浪涌保护**：EN61000-4-5，2 级  
- **生产寿命**：**reComputer R1100** 将至少生产至 **2030 年 12 月**  



## 规格

| **参数**               | **描述**               |
|------------------------|------------------------|
| **硬件规格**           |                        |
| **产品系列**           | R11xx-10, R11xx-00    |
| **CPU**                | Raspberry Pi CM4, 四核 Cortex-A72 @ 1.5GHz |
| **操作系统**           | Raspbian, Debian, Yocto, Buildroot |
| **内存**               | 1GB / 2GB / 4GB / 8GB |
| **eMMC 存储**          | 8GB / 16GB / 32GB     |
| **系统规格**           |                        |
| **电源输入**           | DC 9V~36V, 2 针端子块 |
| **PoE（作为受电设备）**| IEEE 802.3af 标准 12.95W PoE* |
| **过压保护**           | 40V                   |
| **功耗**               | 空闲：2.88W；满载：5.52W |
| **电源开关**           | 无                    |
| **重启开关**           | 有                    |
| **接口**               |                        |
| **以太网**             | 1x 10/100/1000Mbps（支持 PoE*），1x 10/100Mbps IEEE 802.3/802.3u |
| **USB**                | 2x USB-A 2.0 主机，1x USB-C 2.0（用于刷写操作系统） |
| **RS485**          | 2x RS485（隔离）  |
| **RS232**              | 2x RS232（隔离）      |
| **DI（数字输入）**     | 2x 隔离 DI 端口，输入电压：5~24V DC |
| **DO（数字输出）**     | 2x 隔离 DO 端口，输出电压：&lt;60V DC |
| **SIM 卡**             | 1x Nano SIM 卡槽（内置） |
| **SD 卡**              | 1x MicroSD 卡槽       |
| **SSD**                | 1x M.2 NVMe SSD 插槽（2280-M Key） |
| **LED 指示灯**         | 12x LED 指示灯        |
| **蜂鸣器**             | 1                     |
| **复位按钮**           | 1                     |
| **HDMI**               | 1x HDMI 2.0           |
| **无线通信**           |                        |
| **Wi-Fi 2.4/5.0GHz**   | 芯片内置 Wi-Fi*       |
| **BLE 5.0**            | 芯片内置 BLE*         |
| **LoRa®**              | USB LoRa®* / SPI LoRa®* |
| **4G 蜂窝网络**        | 4G LTE*               |
| **Zigbee**         | USB Zigbee*       |
| **标准**               |                        |
| **EMC 合规性**         | ESD: EN61000-4-2, Level 3; EFT: EN61000-4-4, Level 2; Surge: EN61000-4-5, Level 2 |
| **认证**               | CE, FCC, TELEC, RoHS, REACH |
| **环境条件**           |                        |
| **防护等级**           | IP40                  |
| **工作温度**           | -30 ~ 70°C            |
| **工作湿度**           | 10 ~ 95% RH           |
| **存储温度**           | -40 ~ 80°C            |
| **其他特性**           |                        |
| **超级电容 UPS**       | SuperCAP UPS LTC3350 模块* |
| **硬件看门狗**         | 1 ~ 255s              |
| **RTC**                | 高精度 RTC            |
| **安全性**             |                        |
| **加密芯片**           | TPM 2.0*, ATECC608A   |
| **散热系统**           | 无风扇                |
| **保修期**             | 2 年                  |
| **产品生命周期**       | 至 2030 年 12 月      |
| **声明**               | 标注有 * 的选项需根据配件清单额外购买。 |
| **组件与接口状态**     |                        |
| **保留**               | 为未来使用或扩展预留。 |
| **可选**               | 非必要组件，用户可选择是否包含。 |
| **占用**               | 当前正在使用且对产品功能至关重要。 |
| **包含**               | 标准包装中提供的必要组件。 |

**声明**：标注有 `*` 的选项需根据配件清单额外购买。



## 机械尺寸  

| **参数**               | **描述**               |
|------------------------|------------------------|
| **尺寸（宽 x 高 x 深）** | 130 mm x 93 mm x 49.6 mm |
| **外壳**               | 6061 铝合金外壳，透明 PC 侧板 |
| **安装方式**           | DIN 导轨 / 壁挂        |
| **重量（净重）**       | 560g                  |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dimensions.PNG" style={{width:800, height:'auto'}}/></div>

## 硬件概览

### 系统概览

#### 接口概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/interface.PNG" style={{width:800, height:'auto'}}/></div>

#### 主板概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/mainboard.PNG" style={{width:800, height:'auto'}}/></div>

#### 电源图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power.PNG" style={{width:800, height:'auto'}}/></div>

reComputer R1100 提供两种电源供电选项：DC 端子和 PoE 端口。默认情况下，通过 DC 端子使用官方区域电源适配器（SKU: 110061505/110061506）供电。此外，还可以选择使用 PoE 电源模块（SKU: 110991925）。这种灵活性使其能够无缝集成不同的电源，满足各种应用需求。

**2 针电源端子**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

reComputer R1100 的工作电压范围为 9 至 36V，通过 2 针电源端子块连接。接地线可以牢固地连接到电源端子左上角的螺丝上。

**PoE**

安装 PoE 模块后，reComputer R1100 的 ETH0 端口支持 PoE 供电，为设备通过以太网供电提供了一种方便高效的方式。这种选项简化了安装并减少了布线，非常适合电源有限或没有现成电源插座的位置。
- **PoE 输入**: 44~57V（典型值：48V）
- **PoE 输出**: 12V，最大 1.1A

:::note
随附的 PoE 模块符合 IEEE 802.3af 标准，最大输出功率为 12.95W。然而，对于高功耗外设（如 SSD 或 4G 模块），PoE 电源可能不足。在这种情况下，建议使用 DC 端子供电，以确保设备运行稳定可靠。
:::

**功耗**

以下表格提供了 Seeed Studio 实验室测试的 reComputer R1100 功耗值。请注意，这些值仅供参考，因为测试方法和环境条件的变化可能会影响结果。

| **状态**   | **电压** | **电流** | **功耗** | **描述** |
|-------------|------------|------------|----------------------|----------------|
| **关机** | 24V | 51mA | 1.224W | 在关机和断电状态下的静态功耗测试。 |
| **空闲** | 24V | 120mA | 2.88W | 在未运行任何测试程序时，测量 24V 电源输入电流。 |
| **满载** | 24V | 230mA | 5.52W | 使用 `"stress -c 4"` 命令让 CPU 满载运行，未连接任何外部设备。 |

**开机与关机**  
reComputer R1100 默认不包含电源按钮。系统在连接电源时会自动开机。

- 要关机，请使用操作系统中的关机选项，并在完成关机过程后断开电源。  
- 要重启系统，只需重新连接电源即可。

此操作可确保安全运行，防止潜在的数据丢失或系统问题。

#### 功能框图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

#### IIC 图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/IIC.PNG" style={{width:600, height:'auto'}}/></div>

## 接口描述

| **接口** | **描述** |
|----------|----------|
| **以太网** | 1 × 10/100/1000 Mbps（支持 PoE*），1 × 10/100 Mbps（符合 IEEE 802.3/802.3u 标准） |
| **USB** | 2 × USB-A 2.0（主机），1 × USB-C 2.0（用于刷写操作系统） |
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

R1100 计算机配备了 12 个 LED 指示灯，用于显示系统状态。其具体功能如下表所示：

以下是 **LED 指示灯状态** 的结构化表格：

| **LED 指示灯** | **颜色** | **状态** | **描述** |
|----------------|----------|----------|----------|
| **PWR** | 绿色 | 常亮 | 设备已连接电源。 |
| | | 熄灭 | 设备未连接电源。 |
| **ACT** | 绿色 | 闪烁 | 表示 Linux 下 eMMC 访问。如果启动过程中发生错误，会闪烁错误模式（参考 Raspberry Pi 文档）。 |
| **USER** | 绿/红/蓝 | 用户定义 | 可由用户编程定义。 |
| **4G** | 绿色 | 常亮 | 拨号成功，连接正常。 |
| | | 熄灭 | 4G 信号未连接或设备未通电。 |
| **DI1** | 绿色 | 常亮/闪烁 | 检测到输入信号。 |
| | | 熄灭 | 无电源或无数据传输。 |
| **DI2** | 绿色 | 常亮/闪烁 | 检测到输入信号。 |
| | | 熄灭 | 无电源或无数据传输。 |
| **DO1** | 绿色 | 常亮/闪烁 | 检测到输出信号。 |
| | | 熄灭 | 无电源或无数据传输。 |
| **DO2** | 绿色 | 常亮/闪烁 | 检测到输出信号。 |
| | | 熄灭 | 无电源或无数据传输。 |
| **COM1（RS485 通道 1）** | 绿色 | 常亮/闪烁 | 正在接收或发送数据。 |
| | | 熄灭 | RS485 通道 1 无数据传输。 |
| **COM2（RS485 通道 2）** | 绿色 | 常亮/闪烁 | 正在接收或发送数据。 |
| | | 熄灭 | RS485 通道 2 无数据传输。 |
| **COM3（RS232 通道 1）** | 绿色 | 常亮/闪烁 | 正在接收或发送数据。 |
| | | 熄灭 | RS232 通道 1 无数据传输。 |
| **COM4（RS232 通道 2）** | 绿色 | 常亮/闪烁 | 正在接收或发送数据。 |
| | | 熄灭 | RS232 通道 2 无数据传输。 |

### ACT 状态代码

以下是 **ACT 状态代码** 的结构化表格：

| 长闪次数 | 短闪次数 | 状态描述 |
|----------|----------|----------|
| 0 | 3 | 启动失败（通用错误） |
| 0 | 4 | 未找到 `start*.elf` 文件 |
| 0 | 7 | 未找到内核镜像 |
| 0 | 8 | SDRAM 故障 |
| 0 | 9 | SDRAM 不足 |
| 0 | 10 | 进入 HALT 状态 |
| 2 | 1 | 分区不是 FAT 格式 |
| 2 | 2 | 从分区读取失败 |
| 2 | 3 | 扩展分区不是 FAT 格式 |
| 2 | 4 | 文件签名/哈希值不匹配（Pi 4） |
| 4 | 4 | 不支持的板类型 |
| 4 | 5 | 固件致命错误 |
| 4 | 6 | 电源故障类型 A |
| 4 | 7 | 电源故障类型 B |

**附加说明：**  
- 如果 **ACT LED 以规则的四次闪烁模式闪烁**，表示缺少启动代码文件（`start.elf`）。  
- 如果 **ACT LED 以不规则模式闪烁**，表示启动过程已开始。  
- 如果 **ACT LED 完全不闪烁**，可能是 EEPROM 代码损坏。尝试在不连接任何外设的情况下启动。  
- 更多详情请参考 **Raspberry Pi 论坛**：[你的 Pi 无法启动？（启动问题置顶帖）](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)。

**USER 指示灯**

reComputer R1100 包含一个 **USER** 指示灯，可根据用户需求进行自定义。

**注意：**  
有关 **USER LED** 测试的详细信息，请参考 [此部分](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/#control-led-indicators)。

### 蜂鸣器

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/buzzer.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 配备了一个有源蜂鸣器，可用于报警和事件通知。

要检查与 **Buzzer_EN** 对应的 GPIO，请在终端中输入以下命令：

```
cat /sys/kernel/debug/gpio
```

这将输出 **gpio587**，表示分配给蜂鸣器的 GPIO。

**注意：**  
有关 **蜂鸣器测试** 的详细信息，请参考 [此部分](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/#controlling-the-buzzer-via-gpio)。

### RS485

reComputer R1100 系列配备 **两个 RS485 端口**，采用 **6 针 3.5mm 间距的凤凰端子**。每个 RS485 端口均标有丝印标记 **"A/B/GND"**，便于识别。

**引脚定义**  
端子引脚分配如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485.PNG" style={{width:600, height:'auto'}}/></div>

| **引脚 ID** | **引脚名称** |
|-------------|--------------|
| 1           | RS485-1_A |
| 2           | RS485-2_A |
| 3           | RS485-1_B |
| 4           | RS485-2_B |
| 5           | GND          |
| 6           | GND          |

连接电缆  
RS485 接线的示意图如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
产品包装中包含 120 欧姆终端电阻，可根据需要用于 RS485 通信。
:::

有关 RS485 测试的详细信息，请参考 [此部分](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/#rs485-testing)。

### RS232

reComputer R1100 系列配备 2 个 RS232 端口，采用 6 针 3.5mm 间距的凤凰端子。  
单个 RS232 端口的丝印标记为 **TX/RX/GND**。

**引脚定义**

端子引脚定义如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285.PNG" style={{width:600, height:'auto'}}/></div>

以下是 RS232 引脚定义表：

| **引脚 ID** | **引脚名称**  |
|-------------|---------------|
| 13          | R232-3_RX     |
| 14          | R232-4_RX     |
| 15          | R232-3_TX     |
| 16          | R232-4_TX     |
| 17          | GND           |
| 18          | GND           |

**连接电缆**

以下是 RS232 接线的原理图：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
有关 RS232 测试的详细说明，请参考 [此部分](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/#rs232-testing)。
:::

### DI（数字输入）
reComputer R1100 系列包括 2 个 DI 端口，采用 3 针 3.5mm 间距的凤凰端子。  
单个 DI 端口的丝印标记为 **"DI/G_DI"**。

**引脚定义**

端子引脚定义如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI.PNG" style={{width:600, height:'auto'}}/></div>

以下是 **DI（数字输入）引脚定义表**：

| **引脚 ID** | **引脚名称** |
|-------------|--------------|
| 7           | DI1          |
| 9           | DI2          |
| 11          | G_DI         |

**连接电缆**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI_connect.PNG" style={{width:600, height:'auto'}}/></div>

以下是 **DI（数字输入）参数表**：

| **参数**               | **描述**         |
|------------------------|------------------|
| 输入类型              | PNP              |
| 隔离保护              | 5 kV             |
| DI 到 G_DI（导通状态） | 5~30 VDC         |

:::note
有关 DI 测试的详细说明，请参考 [此部分](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/#di-digital-input-testing)。
:::

### DO（数字输出）

reComputer R1100 系列设备包括 2 个 DO 端口，采用 3 针 3.5mm 间距的凤凰端子。单个 DO 的丝印标记为 **"DO/G_DO"**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO.PNG" style={{width:600, height:'auto'}}/></div>

**引脚定义表**

| **引脚 ID** | **引脚名称** |
|-------------|--------------|
| 8           | DO1          |
| 10          | DO2          |
| 12          | G_DO         |

**连接电缆**

单个 DO 接线的原理图如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO_connect.PNG" style={{width:600, height:'auto'}}/></div>

**DO 端口参数**

| **参数**             | **描述**         |
|----------------------|------------------|
| 输出类型            | 晶体管           |
| 隔离保护            | 5 kV             |
| 输出电压            | &lt; 60VDC       |

:::note
有关 DO 测试的详细说明，请参考 [此部分](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/#do-digital-output)。
:::

### 启动开关

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/Boot.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 的启动开关连接到 CM4 模块的 nRPI_BOOT 引脚。此开关允许用户在 eMMC 和 USB 启动源之间进行选择。

- **正常模式：** 将开关设置为远离 "BOOT" 标签的位置，从 eMMC 启动。  
- **刷写模式：** 将开关设置为靠近 "BOOT" 标签的位置，从 Type-C USB 接口启动以刷写系统镜像。

以下是启动开关位置及其对应模式的表格：

| **开关位置**         | **模式**       | **描述**           | **nRPI-BOOT** |
|----------------------|----------------|--------------------|---------------|
| 远离 "BOOT"         | 正常模式       | 从 eMMC 启动       | 低电平        |
| 靠近 "BOOT"         | 刷写模式       | 从 USB 启动        | 高电平        |

### USB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/usb.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 配备一个 USB Type-C 端口和两个 USB Type-A 端口。以下表格列出了它们的功能和描述。

| **类型**   | **数量** | **协议** | **功能**       | **描述**                                   |
|------------|----------|----------|----------------|-------------------------------------------|
| Type-C     | 1        | USB 2.0  | USB-Device     | 用于串口调试、镜像烧录等。                |
| Type-A     | 2        | USB 2.0  | USB-Host       | 连接不同的 USB 设备，如 U 盘、USB 键盘或鼠标。 |

### SD 卡槽
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SD.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 系列设备包括一个 micro SD 卡槽，用于安装 micro SD 卡以存储用户数据。

### SIM 卡槽（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/simslot.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 系列包括一个内部 Nano SIM 卡槽，用于安装 Nano SIM 卡以实现 4G 连接。以下表格展示了标准 SIM 卡、Micro SIM 卡和 Nano SIM 卡的尺寸差异。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SIMsizes.PNG" style={{width:400, height:'auto'}}/></div>

:::note
reComputer R1100 的标准版本不包含内置的 4G 模块。如果需要 4G 功能，必须单独购买额外的 4G 模块。有关更多详情，请参考 [此部分](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/#optional-interfaces-and-modules)。
:::

### SSD 插槽

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SSD.PNG" style={{width:600, height:'auto'}}/></div>
 

reComputer R1100 配备了一个 **NVMe M.2 2280 SSD 插槽**，支持 **128GB、256GB、512GB 和 1TB** 的存储容量。该插槽支持高速存储扩展，用户可以通过它提升系统的 **性能** 和 **容量**。

**注意：**  
SSD 卡主要有两种用途：  
1. **大容量存储** – SSD 可用于满足大容量存储需求。  
2. **带有系统镜像的启动盘** – 某些 SSD 可同时用作大容量存储和系统启动盘。  

然而，并非所有 SSD 都支持启动功能。如果您计划将 SSD 用作启动盘，但不确定购买哪种型号，我们推荐使用 **1TB SSD (SKU112990267)**，该型号已通过测试并验证支持启动功能。这可以减少兼容性问题并降低试错成本。

### reComputer R1100 的 Mini-PCIe 插槽

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/pci.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 配备了 **两个 Mini-PCIe 插槽**，支持多种通信协议。下表列出了每个插槽支持的协议：  

| **插槽**       | **支持的协议**           |  
|---------------|--------------------------|  
| **Mini-PCIe 1** | 4G LTE, USB LoRa®, USB Zigbee |  
| **Mini-PCIe 2** | SPI LoRa®, USB LoRa®, USB Zigbee |  

这些插槽允许用户扩展连接选项，根据需要集成 **4G LTE、LoRa® 和 Zigbee** 模块。

该设备包含两个 **Mini-PCIe 接口**：**插槽 1** 和 **插槽 2**。  

- **Mini-PCIe 插槽 1** 连接到 **SIM 卡插槽**，支持 **USB 协议**，适用于连接 **4G LTE、USB LoRa® 和 USB Zigbee** 模块。  
- **Mini-PCIe 插槽 2** 支持 **USB 和 SPI 协议**，但 **未连接** 到 SIM 卡插槽。它可用于连接 **SPI LoRa®、USB LoRa® 和 USB Zigbee** 设备。  

这些插槽为各种无线通信模块提供了灵活的扩展选项。

### 重置孔  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reset.PNG" style={{width:200, height:'auto'}}/></div>


reComputer R1100 配备了一个位于重置孔内的 **迷你按键开关**。用户可以使用细小物体按下此按钮来 **重置 CM4**。

- 当该引脚为 **高电平** 时，表示 **CM4 已启动**。  
- 当该引脚被 **拉低** 时，**模块将被重置**。

### 以太网 RJ45  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/eth.PNG" style={{width:200, height:'auto'}}/></div>

**reComputer R1100** 配备了两个以太网端口：  

| 名称  | 类型                         | 速度                | PoE 支持                  |
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | CM4 原生千兆以太网接口       | 10/100/1000 Mbit/s  | 支持（需额外模块）         |
| ETH1  | 由 USB 转换                  | 10/100 Mbit/s       | 不支持                    |

**reComputer R1100** 配备了两个以太网 RJ45 端口：  

- **ETH0**：一个 **CM4 原生千兆以太网** 接口，支持 **10/100/1000 Mbit/s** 的速度。通过添加额外的 **PoE 模块**，可以实现 **以太网供电 (PoE)**，为设备供电。  
- **ETH1**：一个 **USB 转换的以太网** 接口，支持 **10/100 Mbit/s** 的速度，但 **不支持 PoE**。

**注意**  
有关 PoE 的更多详情，请参考 [此部分](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/#poe-power-over-ethernet)。

### HDMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/display.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 配备了一个来自 CM4 的原生 HDMI 接口，支持最高 **4K@60fps** 的视频输出。它非常适合需要多显示器的应用场景，用户可以将内容输出到外部大屏幕。

### RTC  
reComputer R1100 包含一个 **RTC（实时时钟）电路**，并预装了一块 **CR2032 电池**，即使在断电时也能确保时间的准确性。  

:::note
有关 RTC 测试的详情，请参考 [此部分](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/#rtc-real-time-clock-testing)。
:::  

### 看门狗  
reComputer R1100 配备了一个 **独立的硬件看门狗电路**，在系统崩溃时会自动重启系统。该看门狗通过 **RTC** 实现，并支持 **1 到 255 秒** 的灵活喂狗时间。  

:::note 
有关看门狗测试的详情，请参考 [此部分](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/#watchdog-timer-testing)。
:::

## 可选接口和模块  
reComputer R1100 支持**广泛的扩展模块和配件**，使其能够适应各种使用场景。如果您有兴趣定制 reComputer R1100，请联系 **odm@seeed.cc** 了解更多信息。  

#### 配件和可选模块列表  

以下是格式化表格以便于阅读：  

| **备注**                                       | **项目**               | **产品名称**                                      | **SKU**         |
|------------------------------------------------|------------------------|--------------------------------------------------|----------------|
| **必须配合使用以实现 LoRa® WAN 功能**           | LoRa® 模块             | 区域可选 LoRaWAN 网关模块 (SPI) - US915      | 114992969      |
|                                                |                        | 区域可选 LoRaWAN 网关模块 (SPI) - EU868      | 114993268      |
|                                                |                        | 区域可选 LoRaWAN 网关模块 (USB) - US915          | 114992991      |
|                                                |                        | 区域可选 LoRaWAN 网关模块 (USB) - EU868          | 114992628      |
| **LoRa® 天线**                                 | LoRa® 天线             | LoRa 天线套件 - 868-915MHz                       | 110061501      |
| **Zigbee 模块**                            | Zigbee 模块         | Mini-PCIe USB Zigbee 模块                    | 110992005      |
| **Zigbee 天线**                            | Zigbee 天线        | reComputer R1100 的 Zigbee 天线套件          | 110061641      |
| **此配件为 Wi-Fi 功能所需**                     | Wi-Fi/BLE 天线         | Raspberry Pi Compute Module 4 天线套件          | 114992364      |
| **4G 模块需配合 4G 天线使用，GPS 模块需配合 GPS 天线使用** | 4G 模块               | LTE Cat 4 EC25-AFXGA Mini-PCIe 模块 - 北美       | 113991134      |
|                                                |                        | LTE Cat 4 EC25-EUXGR Mini-PCIe 模块 - EMEA & 泰国 | 113991135      |
|                                                |                        | LTE Cat 4 EC25-AUXGR Mini-PCIe 模块 - 澳大利亚   | 113991174      |
|                                                |                        | LTE Cat 4 EC25-EFA Mini-PCIe 模块 - 泰国         | 113991214      |
|                                                |                        | LTE Cat 4 EC25-EMGA Mini-PCIe 模块 - 马来西亚    | 113991234      |
|                                                |                        | LTE Cat 4 EC25-JFA Mini-PCIe 模块 - 日本         | 113991296      |
| **4G 天线**                                   | 4G 天线                | 4G 模块用 4G 天线套件                           | 110061502      |
| **GPS 天线**                                  | GPS 天线               | EC25 4G 模块用 GPS 天线套件                     | 110061521      |
| **加密芯片**                                   | TPM 2.0                | 带有 Infineon SLB9670 的 TPM 2.0 模块           | 114993114      |
| **SSD 存储**                                   | SSD 卡                 | NVMe M.2 2280 SSD 1TB                           | 112990267      |
|                                                |                        | 512GB NVMe M.2 PCIe Gen3x4 2280 内部 SSD        | 112990247      |
|                                                |                        | 256GB NVMe M.2 PCIe Gen3x4 2280 内部 SSD        | 112990246      |
|                                                |                        | 128GB NVMe M.2 PCIe Gen3x4 2280 内部 SSD        | 112990226      |
| **此模块需焊接到 reComputer R1100 的载板上**    | PoE                    | reTerminal DM 用 MQ7813T120 PoE 模块套件        | 110991925      |
| **UPS**                                       | UPS                    | SuperCAP UPS LTC3350 模块                       | 110992004      |

**reComputer R1100** 主板配备**两个 Mini-PCIe 插槽**，其兼容性如下：  

- **Mini-PCIe 插槽 1** 支持：  
  - **4G 模块**（USB 协议）  
  - **LoRa® 模块**（USB 协议）  
  - **Zigbee 模块**（USB 协议）  

- **Mini-PCIe 插槽 2** 支持：  
  - **LoRa® 模块**（USB 和 SPI 协议）  
  - **Zigbee 模块**（USB 协议）  

:::note
 **4G 和 LoRa® 模块不能同时使用。**  
 **主板上不能插入两个 LoRa® 模块。**  
:::

这意味着您需要在使用 **4G 或 LoRa®** 之间进行选择，并且一次只能安装**一个** LoRa® 模块。

### Wi-Fi/BLE  
**reComputer R1100-10** 由带有板载 **Wi-Fi/BLE 版本**的 **CM4** 提供支持，其 Wi-Fi/BLE 参数与 CM4 相同。有关详细规格，请参阅 **Raspberry Pi 官方网站**。  

### 4G 模块  
**reComputer R1100** 主板配备**两个 Mini-PCIe 插槽**，其中 **Mini-PCIe 插槽 1** 支持通过 USB 协议的 **4G 模块**。**Quectel EC25 4G 模块**已通过与 reComputer R1100 的完全兼容性测试。  

:::note 
如果您需要 **4G 功能**，必须**购买相应的 4G 模块和外部天线**，并按照 [组装 4G/LoRa®/Zigbee 模块和天线](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna) 中的说明进行操作。  
:::

### LoRa® 模块  
两个 **Mini-PCIe 插槽**均支持通过 USB 协议的 **LoRa® 模块**。此外，**Mini-PCIe 插槽 2** 支持使用 SPI 协议的 **LoRa® 模块**。**Seeed Studio 的 WM1302 模块**已通过与 reComputer R1100 的完全兼容性测试。  

:::note 
如果您需要 **LoRa® 功能**，必须**购买相应的 LoRa® 模块和外部天线**，并按照 [组装 4G/LoRa®/Zigbee 模块和天线](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna) 中的说明进行操作。  
:::  

### Zigbee 模块
Mini-PCIe 插槽支持**使用 USB 协议的 Zigbee 模块**，允许将 Zigbee 功能无缝集成到兼容设备中。这使得在 Zigbee 网络中的高效通信和控制成为可能，从而增强了系统的多功能性和连接性。通过两个 Mini-PCIe 插槽支持 Zigbee 模块，用户可以灵活地实现多样化的应用，以提高可靠性。

:::note  
如果您需要 **Zigbee 功能**，必须**购买相应的 Zigbee 模块和外部天线**，并按照[组装 4G/LoRa®/Zigbee 模块和天线](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna)中的说明进行操作。  
:::


### PoE（以太网供电）

通过添加 **PoE 电源模块**，**reComputer R1100 支持 IEEE 802.3af PD（受电设备）标准**。**PoE 插座已预焊接在板上**，但用户必须**拆解设备以安装 PoE 模块**，以实现以太网 PoE 功能。

有关拆解指南，请参考[拆解指南](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-ups-and-poe-module)。

:::note  
- **reComputer R1100 支持 PoE 供电，但标准产品默认不包含 PoE 模块。**  
- **Seeed 提供 PoE 焊接和组装服务，适用于批量定制订单。**  
- 对于样品测试，客户必须**自行焊接和组装 PoE 模块**。相关说明可在**“组装 PoE 模块”**中找到。  
:::



### SSD（存储扩展）
**reComputer R1100 支持通过板上两个 Mini-PCIe 插槽下方的 **PCIe 插槽 (J62)** 安装 2280 NVMe SSD。  

:::note
- **CM4 的 PCIe 接口为 Gen 2.0**，最大理论速度为 **5Gbps**。  
- 如果使用 **Gen 3.0 或更高版本的 SSD**，其速度可能无法达到最大值。  
- **reTerminal DM 的测试结果显示：**  
  - **最大写入速度：**230MB/s  
  - **最大读取速度：**370MB/s  
- SSD 的兼容性可能有所不同，因此**建议从批准的配件列表中购买 SSD**。  
:::


**SSD 使用场景：**  
- **大容量存储** – SSD 可用于扩展存储空间。  
- **带有系统镜像的启动盘** – 某些 SSD 可存储系统镜像并**直接从 SSD 启动**。  

:::note
**并非所有 SSD 都支持启动功能！**  
如果您需要用于启动的 SSD，但不确定购买哪种型号，Seeed **推荐 1TB SSD（SKU: 112990267）**，该型号已**经过测试并验证支持启动功能**，可最大限度地降低兼容性风险和故障排查成本。  
:::

### 加密芯片 - TPM 2.0  

reComputer R1100 支持 **Infineon 的 OPTIGA™ TPM SLB9670**，符合 **Trusted Computing Group (TCG) TPM 2.0** 规范。

**主要特性：**  
- **用于安全的加密芯片**  
- **SPI 接口**（连接到板上的 **J13 端口**）  
- **提供信任根**，用于：  
  - **平台完整性**  
  - **远程认证**  
  - **加密服务**  

:::note  
有关安装说明，请参考[组装 TPM 2.0 模块](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-tpm-20-module)。  
:::


### UPS（不间断电源）模块

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/UPS.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 的 **UPS 模块**是一个基于 **7F 超级电容器**的电源备份系统，采用**串联**方式运行。

**工作原理：**  
1. 位于 **DC 5V 电源**和 **CM4** 之间。  
2. 使用 **GPIO 信号**在 **5V 电源故障**时通知 **CPU**。  
3. CPU 在电源耗尽前运行**紧急脚本**。  
4. 脚本执行 **"$ shutdown"** 命令以安全关闭系统。  

**备份时长：**  
**UPS 运行时间**取决于**系统负载**。以下是测试结果：  
- **CM4（4GB RAM，32GB eMMC，Wi-Fi 模块）。**  

## 额外资源

- [reComputer R1100 3D 文件](https://files.seeedstudio.com/R11/reComputer%20R1100_3D.stp)
- [reComputer R1100 原理图设计、PCB 设计](https://files.seeedstudio.com/R11/reComputer%20R1100_schematic_design_files.zip)
- [reComputer R1100 宣传单](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer-R1100/reComputer-R1100-flyer.pdf)
- [用户手册](https://files.seeedstudio.com/R11/reComputer%20R1100%20User%20Manual-V1.0.pdf)

  
## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>