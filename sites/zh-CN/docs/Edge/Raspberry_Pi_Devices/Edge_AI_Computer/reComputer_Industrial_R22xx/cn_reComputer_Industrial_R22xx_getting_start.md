---
description: reComputer Industrial R22xx 是一款基于 Raspberry Pi CM5 的工业级 AI 驱动 NVR，配备 Hailo-8 AI 加速器，提供高达 26 TOPS 的算力。其具备 4 个支持 PoE PSE 的千兆以太网端口以及 1 个额外的千兆以太网端口，可实现高带宽视频流传输，并简化 IP 摄像机的 PoE 部署。提供丰富的工业 I/O、灵活的无线连接、无风扇散热设计，以及 -20 °C 至 50 °C 的宽工作温度范围，确保在严苛场景下实现可靠的 AI 视频分析和持续稳定运行。
title: reComputer Industrial R22xx 入门指南
keywords:
  - 边缘 AI NVR
  - Raspberry pi
  - 边缘 AI NVR
  - reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg
slug: /recomputer_industrial_r22xx_getting_start
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
createdAt: '2025-09-28'
updatedAt: '2026-06-23'
url: https://wiki.seeedstudio.com/cn/recomputer_industrial_r22xx_getting_start/
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R22xx 由 Raspberry Pi CM5 提供算力，是一款具备 AI 能力的灵活边缘 AI NVR。它具备全面的工业接口 **(5x Ethernet, 4xUSB, 2x RS485, 1x RS232, 1x CAN FD, 4x DI 和 4x DO)**，以及灵活的无线连接选项（4G/5G、LoRa®、Wi-Fi/BLE），非常适合多种工业应用场景。

reComputer Industrial R22xx 系列非常适用于工业 AI 应用。它可用于数据采集与过程监控、自动化与机器人控制、智能制造以及工业通信与网络等方面。凭借其小巧尺寸、灵活性、低成本和可编程性，为自动化与物联网系统等提供了有力支持。

:::note
可定制选项：Logo 品牌定制、包装和固件烧录。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>立即定制 ➜</font></span></strong></a>
</div>

## 特性

**工业级可靠性**

- 无风扇紧凑型 PC，支持 -20°C 至 50°C 宽温
- 硬件看门狗
- UPS 超级电容（可选）
- 高品质金属机壳，兼容导轨和壁挂安装
- 生产生命周期：reComputer Industrial R22xx 至少生产至 2036 年 1 月

**高效 AI 计算**

- 由 Raspberry Pi CM5 提供算力
- Broadcom BCM2711 四核 Cortex-A72 (ARM v8) 64 位 SoC @ 1.5GHz
- 高达 16GB RAM 和 64GB eMMC
- 搭载 Hailo-8 AI 加速器，算力高达 26 TOPS

**丰富的无线能力**

- 片上 Wi-Fi
- 片上 BLE
- Mini-PCIe：LTE、USB LoRa®
- M.2 KEY-B：4G/5G

**丰富接口**

- 2x RS485（隔离）、1x RS232（隔离）、4x 隔离 DI 端口、4x 隔离 DO 端口
- 4 x 10/100/1000 Mbps（支持 PoE PSE）
- 1 x 10/100/1000 Mbps IEEE 802.3/802.3u
- 2x HDMI 2.0
- 4x Type-A USB3.0
- 1x Type-C USB2.0（用于 OS 更新的 USB 控制台）
- 1x Nano SIM 卡槽

## 规格参数

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Parameter </th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2">硬件规格</td>
      </tr>
      <tr>
        <td>**产品系列**</td>
        <td>R22xx-12</td>
      </tr>
      <tr>
        <td> **CPU** </td>
        <td>Raspberry Pi Compute Module 5，2.4GHz 四核 64 位 Arm Cortex-A76</td>
      </tr>
      <tr>
        <td> **AI Processor** </td>
        <td>预装 1x Hailo-8 M.2 AI 加速卡，26TOPS</td>
      </tr>
      <tr>
        <td> **Operating System** </td>
        <td>Raspbian, Debian </td>
      </tr>
      <tr>
        <td> **RAM** </td>
        <td>2GB/4GB/8GB/16GB</td>
      </tr>
      <tr>
        <td> **eMMC** </td>
        <td>16GB/32GB/64GB</td>
      </tr>
      <tr>
        <td colspan="2"> **系统规格** </td>
      </tr>
      <tr>
        <td> 电源输入 </td>
        <td>DC 9V~36V，2 针端子</td>
      </tr>
      <tr>
        <td>PoE（作为受电设备）</td>
        <td>IEEE 802.3at 标准 25.5W PoE</td>
      </tr>
      <tr>
        <td>电源开关</td>
        <td>无</td>
      </tr>
      <tr>
        <td>重启开关</td>
        <td>有</td>
      </tr>
      <tr>
        <td colspan="2"> **接口** </td>
      </tr>
      <tr>
        <td rowspan="2"> Ethernet </td>
        <td colspan="2"> 1 x 10/100/1000 Mbps（支持 PoE PD） </td>
      </tr>
      <tr>
        <td colspan="2"> 1 x 10/100 Mbps IEEE 802.3/802.3u </td>
      </tr>
      <tr>
        <td rowspan="2"> USB </td>
        <td colspan="2"> 4 x USB-A 3.0 主机</td>
      </tr>
      <tr>
        <td colspan="2"> 1 x USB-C 2.0（用于烧录 OS 和调试） </td>
      </tr>
      <tr>
        <td> RS485 </td>
        <td colspan="2"> 2x RS485（隔离） </td>
      </tr>
      <tr>
        <td> RS232 </td>
        <td colspan="2"> 1x RS232（隔离） </td>
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
        <td colspan="2"> 4 x 隔离 DO 端口 </td>
      </tr>
      <tr>
        <td colspan="2"> 输出电压：小于 60V DC </td>
      </tr>
      <tr>
        <td>SIM Card</td>
        <td colspan="2">1x Nano SIM 卡槽</td>
      </tr>
      <tr>
        <td>M.2 Slot</td>
        <td>2x M.2 M-key 2280 插槽，用于 NVMe SSD；
1x M.2 M-key 2240 插槽，用于 AI 加速器
（预装 1x Hailo-8 M.2 AI 加速卡 26TOPS）；
1x M.2 B-key 3042/3052 插槽，用于 5G/4G LTE</td>
      </tr>
      <tr>
        <td>Mini-PCIe</td>
        <td>1x Mini-PCIe，用于 LoRa 模块</td>
      </tr>
      <tr>
        <td>LED</td>
        <td>4 x LED 指示灯</td>
      </tr>
      <tr>
        <td>蜂鸣器</td>
        <td>1</td>
      </tr>
      <tr>
        <td>复位按钮</td>
        <td>1</td>
      </tr>
      <tr>
        <td>HDMI</td>
        <td>2 x HDMI 2.0</td>
      </tr>
      <tr>
        <td colspan="2">无线通信</td>
      </tr>
      <tr>
        <td>Wi-Fi 2.4/5.0 GHz</td>
        <td>片上 Wi-Fi</td>
      </tr>
      <tr>
        <td>BLE 5.0</td>
        <td>片上 BLE</td>
      </tr>
      <tr>
        <td>LoRa®</td>
        <td>USB LoRa®*/SPI LoRa®*</td>
      </tr>
      <tr>
        <td>4G/5G Cellular</td>
        <td>4G LTE/5G*</td>
      </tr>
      <tr>
        <td colspan="2">**标准**</td>
      </tr>
      <tr>
        <td rowspan="3">EMC</td>
        <td>ESD：EN61000-4-2，Level 3</td>
      </tr>
      <tr>
        <td>EFT：EN61000-4-4，Level 2</td>
      </tr>
      <tr>
        <td>Surge：EN61000-4-5，Level 2</td>
      </tr>
      <tr>
        <td rowspan="4">认证</td>
        <td>CE, FCC</td>
      </tr>
      <tr>
        <td>TELEC</td>
      </tr>
      <tr>
        <td>RoHS</td>
      </tr>
      <tr>
        <td>REACH</td>
      </tr>
      <tr>
        <td colspan="2">**环境条件**</td>
      </tr>
      <tr>
        <td>防护等级</td>
        <td>IP40</td>
      </tr>
      <tr>
        <td>工作温度</td>
        <td>-20~50 °C</td>
      </tr>
      <tr>
        <td>工作湿度</td>
        <td>10~95% RH</td>
      </tr>
      <tr>
        <td>存储温度</td>
        <td>-40~85 °C</td>
      </tr>
      <tr>
        <td colspan="2">其他</td>
      </tr>
      <tr>
        <td>超级电容 UPS</td>
        <td>SuperCAP UPS LTC3350 模块*</td>
      </tr>
      <tr>
        <td>硬件看门狗</td>
        <td>1~255s</td>
      </tr>
      <tr>
        <td>RTC</td>
        <td>高精度 RTC</td>
      </tr>
      <tr>
        <td rowspan="2">安全</td>
        <td>加密芯片 TPM 2.0*</td>
      </tr>
      <tr>
        <td>ATECC608A</td>
      </tr>
      <tr>
        <td>散热</td>
        <td>无风扇</td>
      </tr>
      <tr>
        <td>质保</td>
        <td>2 年</td>
      </tr>
      <tr>
        <td>生产生命周期</td>
        <td>至 2036 年 1 月</td>
      </tr>
      <tr>
        <td>**声明**</td>
        <td>带 * 的选项需根据配件清单额外购买。</td>
      </tr>
    </tbody>
  </table>
</div>


<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th colspan="3">组件与接口状态说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Reserved</td>
        <td colspan="2">预留用于未来使用或扩展。</td>
      </tr>
      <tr>
        <td> Optional </td>
        <td colspan="2">预留用于未来使用或扩展。</td>
      </tr>
      <tr>
        <td> **AI Processor** </td>
        <td colspan="2">非关键组件，用户可选择是否配置。</td>
      </tr>
      <tr>
        <td> Occupied </td>
        <td colspan="2">当前正在使用且对产品功能至关重要。</td>
      </tr>
      <tr>
        <td>Included</td>
        <td colspan="2">标准包装中提供的关键组件。</td>
      </tr>
    </tbody>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Njc4ODc5NDY4NA_832447_3YqS-tCWChlrd6Y9_1767151175?w=2929&h=1991&type=image/png" style={{width:800, height:'auto'}}/></div>

## Hailo 介绍

### 硬件介绍

[Hailo](https://hailo.ai/) 提供前沿的 AI 处理器，专为边缘设备上的高性能深度学习应用量身打造。该公司的解决方案专注于在边缘侧实现新一代生成式 AI，同时支持感知与视频增强，这些能力由先进的 AI 加速器和视觉处理器提供。搭载 Hailo-8 NPU 加速器、具备 26 TOPs AI 性能的 reComputer_R22xx，可在 YOLOv8s 上实现超过 200 FPS 的推理速度。

### 软件介绍

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI Software Suite 提供强大的工具，可在硬件加速器上高效运行 AI 模型。它被设计为可与现有深度学习框架无缝集成，为开发者提供顺畅的工作流。流程包括在模型构建环境中从 ONNX 文件生成 HEF（Hailo 可执行二进制文件）。生成后，将 HEF 文件传输到推理设备（运行环境），并通过 HailoRT API 执行推理。提供的脚本可在模型构建环境中将 ONNX 文件转换为 HEF 文件。

> **注意：**
> **如果你想了解更多使用 Hailo NPU 的示例，请点击此[链接](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero)。**

## 硬件概览

### 系统概览

#### 接口概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.1.1-1.png" style={{width:800, height:'auto'}}/></div>

#### 主板概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.1.2-1.png" style={{width:800, height:'auto'}}/></div>

#### 电源框图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.1.3-1.png" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R22xx 支持两种供电方式：DC 端子和 PoE 端口。这为电源选择提供了灵活性，并便于与各种电源轻松集成。

**2-Pin 电源端子**

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R22xx 通过 9~36V 的端子 DC 电压供电。电源通过 2-Pin 电源端子块连接器接入。
<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2-pin_power_terminal_2.png" style={{width:100, height:'auto'}}/></div>

要对 reComputer Industrial R22xx 进行接地，可以将地线固定在电源端子右侧的螺丝上。

**PoE**

reComputer Industrial R22xx 的 ETH1~4（PoE PSE）端口支持最高 40W 的高功率输入。这提供了一种通过以太网为设备供电的便捷高效方式，大大简化了安装过程并减少了布线需求。对于电源受限或传统电源插座难以接入的工业部署场景，这是理想的解决方案。


- PoE PSE（供电设备，Power Sourcing Equipment）

> 注意：
> 虽然 ETH0 端口支持高达 40W 的 PoE 输入，但 reComputer Industrial R2235-12 集成了高性能的 Raspberry Pi CM5 和 26 TOPS 的 Hailo-8 AI 加速器。如果你的应用需要在满负载进行 AI 推理的同时，还要使用高功耗外设（例如 4G/5G 模块或 NVMe SSD），或者通过 PSE 端口驱动多路高功率摄像头，建议使用 DC 端子（9-36V）供电。这样可以在高强度负载下确保最大稳定性和峰值性能。

**功耗**

reComputer Industrial R22xx 默认不带电源按钮，系统在接通电源后会自动启动。关机时，请在操作系统中选择关机选项，并等待系统完全关机后再断电。要重启系统，只需重新接通电源即可。

#### 方框图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.1.4-1.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.1.4-2.png" style={{width:800, height:'auto'}}/></div>


## 接口说明

| 类型            | 描述                                                                           |
|-----------------|---------------------------------------------------------------------------------------|
| **以太网**      | 4 x 10/100/1000 Mbps（支持 PoE PSE）；1 x 10/100/1000 Mbps IEEE 802.3/802.3u       |
| **USB**         | 4 x USB-A 3.0 Host；1 x USB-C 2.0（用于烧录 OS 和调试）                        |
| **RS485**       | 2x RS485（隔离）                                                                   |
| **RS232**       | 1x RS232（隔离）                                                                   |
| **CAN**         | 1x 隔离 CAN FD 端口                                                              |
| **DI**          | 4 x 隔离 DI 端口（输入电压：5-24V DC）                                      |
| **DO**          | 4 x 隔离 DO 端口（输出电压：< 60V DC）                                     |
| **HDMI**        | 2 x HDMI 2.0                                                                          |
| **LED**         | 4 x LED 指示灯                                                                    |
| **SIM 卡槽**    | 支持 Nano SIM 卡                                                            |
| **M.2 M-KEY 插槽**  | 2x M.2 M-key 2280 插槽，用于 NVMe SSD；1x M.2 M-key 2240 插槽，用于 AI 加速器（预装 1x Hailo-8 M.2 AI 加速卡 26TOPS） |
| **M.2 B-KEY 插槽**  | 1x 用于 5G/4G LTE                                                                  |
| **蜂鸣器**          | 1                                                                                 |
| **复位按钮**        | 1                                                                                 |

### LED 指示灯状态

reComputer Industrial R22xx 配备了 4 个 LED 指示灯，用于指示设备的运行状态。各个 LED 的具体功能和状态请参考下表：
<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>名称</th>
        <th>颜色</th>
        <th>状态</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2"> **PWR** </td>
        <td rowspan="2">绿色</td>
        <td>On</td>
        <td>设备已接通电源。</td>
      </tr>
      <tr>
        <td>Off</td>
        <td>设备未接通电源。</td>
      </tr>
      <tr>
        <td> **ACT** </td>
        <td>橙色</td>
        <td>On</td>
        <td>在 Linux 下，此引脚会闪烁以表示 eMMC 访问。如果在启动过程中发生任何错误，则该 LED 会闪烁错误模式，可通过 Raspberry Pi 官网上的查找表（[Raspberry Pi Documentation - Configuration](https://www.raspberrypi.com/documentation/computers/configuration.html)）进行解码。</td>
      </tr>
      <tr>
        <td> **USER** </td>
        <td>绿色/红色/蓝色</td>
        <td></td>
        <td>需要由用户自定义。</td>
      </tr>
      <tr>
        <td rowspan="2"> **4G/5G** </td>
        <td rowspan="2">绿色</td>
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

4G/5G 状态指示灯以模块的具体规格为准，表中信息仅供参考。

#### ACT 状态表

| 长闪次数 | 短闪次数 | 状态                               |
|--------------|---------------|-------------------------------------|
| 0            | 3             | 通用启动失败              |
| 0            | 4             | 未找到 start*.elf                 |
| 0            | 7             | 未找到内核镜像               |
| 0            | 8             | SDRAM 故障                        |
| 0            | 9             | SDRAM 不足                   |
| 0            | 10            | 处于 HALT 状态                        |
| 2            | 1             | 分区不是 FAT                    |
| 2            | 2             | 从分区读取失败        |
| 2            | 3             | 扩展分区不是 FAT           |
| 2            | 4             | 文件签名/哈希不匹配 - Pi 4  |
| 4            | 4             | 不支持的板卡类型               |
| 4            | 5             | 致命固件错误                 |
| 4            | 6             | 电源故障类型 A                 |
| 4            | 7             | 电源故障类型 B                 |

如果 ACT LED 以规则的四次闪烁模式闪烁，则表示找不到引导代码（bootcode，start.elf）。
如果 ACT LED 以不规则模式闪烁，则表示启动已经开始。
如果 ACT LED 不闪烁，则可能是 EEPROM 代码损坏，请在未连接任何外设的情况下重试。更多详情请查看 Raspberry Pi 论坛：
置顶帖：你的 Pi 无法启动吗？（启动问题置顶帖）- Raspberry Pi 论坛。
更多详情请查看 [Raspberry Pi 论坛](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)

#### USER 指示灯

reComputer Industrial R22xx 包含一个 USER 指示灯，用户可以根据实际需求自定义其状态。

### 蜂鸣器

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.2-1.png" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R22xx 内置有源蜂鸣器，可用于报警和事件通知等多种用途。在 reComputer Industrial R22xx 的终端中输入：

```bash
cat /sys/kernel/debug/gpio
```

该命令会输出与 Buzzer_EN 对应的 GPIO 为 gpio627。

### RS485

reComputer Industrial R2200 系列设备包含 2x RS485 端口，6-Pin 3.5mm 间距凤凰端子。
单个 RS485 的丝印为 “A/B/GND”。

**引脚定义**  
端子引脚分配如下：  

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>示意图</th>
        <th>引脚编号</th>
        <th>引脚名称</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="6"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.3-table-1.png" style={{width:300, height:'auto'}}/></td>
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
RS485 线缆的示意图如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.3-1.png" style={{width:800, height:'auto'}}/></div>

注意：产品包装中包含一些 120 欧姆终端电阻。在通过 RS485 通信时，可以根据需要使用它们。

### RS232

reComputer Industrial R22xx 系列设备包括 1 个 RS232 接口，采用 6 针 3.5mm 间距凤凰端子。
单个 RS232 的丝印为 "TX/RX/GND"。

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
        <td rowspan="6"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.4-table-1.png" style={{width:300, height:'auto'}}/></td>
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
    </tbody>
  </table>
</div>

**连接线缆**
RS232 线缆的示意图如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.4-1.png" style={{width:800, height:'auto'}}/></div>

### DI（数字输入）

reComputer Industrial R2000 系列设备包括 4 个 DI 接口，采用 3 针 3.5mm 间距凤凰端子。
 单个 DI 的丝印为 "DI/G_DI"。

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
        <td rowspan="5"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.5-table-5.png" style={{width:300, height:'auto'}}/></td>
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
单个 DI 线缆的示意图如下所示：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**示意图**</th>
        <th>**参数**</th>
        <th>**描述**</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.5_di_1.png" style={{width:900, height:'auto'}}/></td>
        <td>输入类型</td>
        <td>PNP</td>
      </tr>
      <tr>
        <td>隔离保护</td>
        <td>5kV</td>
      </tr>
      <tr>
        <td>DI 到 G_DI</td>
        <td>导通状态：5~30 VDC</td>
      </tr>
    </tbody>
  </table>
</div>

> Note
> 有关 DI 测试的详细信息，请参阅章节 [link](https://wiki.seeedstudio.com/cn/recomputer_industrial_R22xx_configure_system/di-(digital-input)-testing)。

### DO（数字输出）

reComputer Industrial R22xx 系列设备包括 4 个 DO 接口，采用 3 针 3.5mm 间距凤凰端子。
单个 DO 的丝印为 "DO/G_DO"。
**引脚定义**
端子引脚定义如下：
<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**SchSchematic diagramematic**</th>
        <th>**引脚 ID**</th>
        <th>**引脚名称**</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="5"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.6-table-1.png" style={{width:300, height:'auto'}}/></td>
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

单个 DO 线缆的示意图如下所示：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**示意图**</th>
        <th>**参数**</th>
        <th>**描述**</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/DO_2.png" style={{width:900, height:'auto'}}/></td>
        <td>输出类型</td>
        <td>晶体管</td>
      </tr>
      <tr>
        <td>隔离保护</td>
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

reComputer Industrial R2200 系列设备包括 1 个 CAN FD 接口，采用 6 针 3.5mm 间距凤凰端子。
单个 CAN FD 的丝印为 "CANH/CANL/GND"。
**引脚定义**
端子引脚定义如下：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**示意图**</th>
        <th>**参数**</th>
        <th>**描述**</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="6"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.7-table-1.png" style={{width:900, height:'auto'}}/></td>
        <td>8</td>
        <td>CAN-0_H</td>
      </tr>
      <tr>
        <td>10</td>
        <td>CAN-0_L</td>
      </tr>
      <tr>
        <td>12</td>
        <td>CAN-0_GND</td>
      </tr>
    </tbody>
  </table>
</div>

连接线缆
CAN FD 线缆的示意图如下所示：
<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.7-1.png" style={{width:800, height:'auto'}}/></div>

### 启动开关

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.7_boot_switch_1.png" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R2000 的启动开关连接到 CM5 的 nRPI_BOOT 引脚。该开关为用户提供在 eMMC 和 USB 之间选择启动源的选项。在正常模式下，开关应设置为远离带有 "BOOT" 标签的一侧，使系统从 eMMC 启动。相反，当用户需要烧录系统镜像时，应将开关拨向带有 "BOOT" 标签的一侧，使系统从 Type-C USB 接口启动。

| 开关位置 | 模式         | 描述      | nRPI-BOOT |
|----------------|--------------|-----------------|-----------|
|      <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/HIGH.png" alt="image" width="80"/>            | 正常模式  | 从 eMMC 启动   | 低电平       |
|     <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/LOW.png" alt="image" width="80"/>             | 烧录模式   | 从 USB 启动    | 高电平      |

### USB

<div align="left">
  <img width={205} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.8_usb_1.png" />
  <img width={250} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.8-3.png" />
  </div>

reComputer Industrial R22xx 配备 1 个 USB Type-C 接口和 4 个 USB Type-A 接口。其功能和说明请参阅下表。

| **类型区分**   | **数量** | **协议** | **功能**   | **描述** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | *1       | USB 2.0    | USB-Device   | 用于串口调试、烧录镜像等。 |
| Type-A   | *4       | USB 3.0    | USB-Host     | 连接 U 盘、USB 键盘或鼠标等不同 USB 设备。 |

### SIM 卡槽（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.9-1.png" style={{width:900, height:'auto'}}/></div>

reComputer Industrial R2000 系列设备包含一个内部 Nano SIM 卡槽，用于安装 Nano SIM 卡以获取 5G/4G 信号。
标准 SIM、Micro SIM 和 Nano SIM 卡的尺寸差异如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.9_sim_slot(internal)_2.png" style={{width:900, height:'auto'}}/></div>

> **注意**  
> 请注意，标准版本的 reComputer Industrial R2000 不带 5G/4G 模块。
> 如果您需要 5G/4G 功能，必须另外单独购买 5G/4G 模块。

### M.2 M-KEY 插槽

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.10-table-1.png" style={{width:400, height:'auto'}}/>
  <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.10-table-2.png" style={{width:400, height:'auto'}}/>
 </div>

| **插槽**       | **支持的协议**   |  
|---------------|--------------------------|  
| **M.2 M-KEY 2280** | 2 x M.2 NVMe SSD        |  
| **M.2 M-KEY 2240** | 1 x M.2 AI  Accelerator |  

reComputer Industrial R22xx 上的 M.2 M-KEY 2280 插槽用于安装容量为 128GB、256GB、512GB、1TB 和 2TB 的 NVMe M.2 2280 SSD。该插槽支持高速存储扩展，使用户能够提升系统的性能和容量。

> **注意**  
> SSD 卡主要有两种用途：
>
> 1. **大容量存储：** SSD 卡可用于满足大容量存储需求。
> 2. **带镜像的启动盘：** 另一种用法是将 SSD 同时用作大容量存储以及系统镜像的存储介质，从而可以直接从 SSD 卡启动系统。
>  
> 需要特别注意的是，市面上并非所有 SSD 卡都支持第二种用法。因此，如果你打算将其用作启动盘且不确定购买哪一款型号，我们建议选择我们推荐的 2TB SSD（SKU 114993467）。该型号已经过启动功能测试和验证，可降低兼容性问题的风险，并尽量减少试错成本。

reComputer Industrial R22xx 上的 M.2 M-KEY 2240 插槽用于安装 PCIE M.2 AI 加速器。而 R22xx-12 系列已预装一块 Hailo-8 M.2 AI 加速模块，算力最高可达 26TOPS。

### Mini-PCIe 插槽

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.11-1.png" style={{width:800, height:'auto'}}/></div>
reComputer Industrial R22xx 上的 MiniPCIe 插槽可用于安装诸如 4G LTE、USB LoRaWAN® 等设备。

### 复位孔

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/reset.jpg" style={{width:200, height:'auto'}}/></div>

在 reComputer AI Industrial R22xx 的复位孔内设有一个微型按键开关。通过使用细小物体按下该按键，可以对 CM4 进行复位。当该引脚为高电平时，表示 CM4 已经启动；将该引脚拉低则会复位模块。

### M.2 B-KEY 插槽

reComputer Industrial R22xx 上的 M.2 B-KEY 插槽用于安装 5G/4G LTE 模块。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.12-1.png" style={{width:800, height:'auto'}}/></div>

### 以太网 RJ45 

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.14-1.png" style={{width:400, height:'auto'}}/></div>

**reComputer R1100** 配备了两个以太网端口：  

| **名称**  | **类型**                     | **速率**            | **PoE PSE**
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | CM5 原生千兆以太网           | 10/100/1000 Mbit/s  | 不支持              |
| ETH1  | 由 USB 转换                  | 10/100/1000 Mbit/s  | 不支持              |
| ETH2-4|	由 PCIe 转换                 | 10/100/1000 Mbit/s	 | 支持                |

reComputer Industrial R2200 配备多个以太网 RJ45 端口以实现多样化连接：ETH0 为 CM5 原生千兆以太网接口，支持 10/100/1000 Mbit/s 以及 PoE PD 功能，可通过该端口为设备供电；ETH1 由 USB 转换，支持 10/100/1000 Mbit/s；而 ETH2、ETH3 和 ETH4 则由 PCIe 转换，以确保高速性能。值得注意的是，所有扩展端口（ETH1-ETH4）均支持 PoE PSE，使 R2200 能够为外接设备供电。

### HDMI

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.15-1.png" style={{width:200, height:'auto'}}/></div>

reComputer Industrial R2200 具备来自 CM5 的 2 路原生 HDMI 接口，支持最高 4K @ 60 fps 视频输出。非常适合需要多屏显示的应用场景，允许用户将内容输出到外接大屏幕。


### RTC

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.16-1.png" style={{width:200, height:'auto'}}/></div>
reComputer Industrial R2200 配备由电容供电的 RTC 电路，即使在断电情况下也能保持计时功能。

:::note
使用 RTC 时，如果设备突然断电，需要等待 RTC 完全放电后再重新接通电源并重启。若未完全放电，设备可能无法满足重启条件，从而无法正常启动。
:::

### 看门狗

reComputer Industrial R2000 内置独立硬件看门狗电路，可在系统异常崩溃时自动重启系统。看门狗电路通过 RTC 实现，并支持 1 到 255 秒范围内灵活设置喂狗时间。

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
        <td>区域可选 LoRaWAN 网关模块 (USB) - US915</td>
        <td>114992969</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN 网关模块 (USB) - US915</td>
        <td>114992629</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN 网关模块 (USB) - US915</td>
        <td>114992991</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN 网关模块 (SPI) - EU868</td>
        <td>114993268</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN 网关模块 (SPI) - EU868</td>
        <td>114992549</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN 网关模块 (USB) - EU868</td>
        <td>114992628</td>
      </tr>
      <tr>
        <td>LoRa® 天线</td>
        <td>LoRa 天线套件 - 868-915 MHz</td>
        <td>110061501</td>
      </tr>
      <tr>
        <td rowspan="8">4G 功能需搭配 4G 模块与 4G 天线使用，GPS 功能需搭配 4G 模块与 GPS 天线使用</td>
        <td rowspan="6">4G 模块</td>
        <td>LTE Cat 4 EC25-AFXGA-Mini-PCIe 模块 - 适用于北美</td>
        <td>113991134</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-EUXGR-Mini-PCIe 模块 - 适用于 EMEA 和泰国</td>
        <td>113991135</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-AUXGR-Mini-PCIe 模块 - 适用于澳大利亚</td>
        <td>113991174</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-EFA-Mini-PCIe 模块 - 适用于泰国</td>
        <td>113991214</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-EMGA-Mini-PCIe 模块 - 适用于马来西亚</td>
        <td>113991234</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-JFA-mini-PCIe</td>
        <td>113991296</td>
      </tr>
      <tr>
        <td>4G 天线</td>
        <td>适用于 4G 模块的 4G 天线套件</td>
        <td>110061502</td>
      </tr>
      <tr>
        <td>GPS 天线</td>
        <td>适用于 EC25 4G 模块的 GPS 天线套件</td>
        <td>110061521</td>
      </tr>
      <tr>
        <td></td>
        <td>加密芯片 TPM 2.0</td>
        <td>带 infineon SLB9670 的 TPM 2.0 模块</td>
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
        <td>该模块需要焊接到 reComputer Industrial R22xx 的载板上</td>
        <td>PoE</td>
        <td>适用于 reTerminal DM 的 MQ7813T120 PoE 模块套件</td>
        <td>110991925</td>
      </tr>
      <tr>
        <td></td>
        <td>UPS</td>
        <td>SuperCAP UPS LTC3350 模块</td>
        <td>110992004</td>
      </tr>
    </tbody>
  </table>
</div>

reComputer Industrial R22xx 主板配备两个 Mini-PCIe 插槽。Mini-PCIe 插槽 1 支持使用 USB 协议的 4G 模块和 LoRa® 模块；Mini-PCIe 插槽 2 支持使用 USB 和 SPI 协议的 LoRa® 模块。此外，4G 模块和 LoRa® 模块不能同时使用，板上也不能同时插入两个 LoRa® 模块。

> 注意
> 板上不能插入 2 个 LoRa® 模块。

### Wi-Fi/BLE  

reComputer Industrial R22xx 由带板载 Wi-Fi/BLE 版本的 CM5 提供支持，其 Wi-Fi/BLE 参数与 CM5 保持一致。有关详细参数信息，请参考 Raspberry Pi 官方网站。  

### 4G 模块

reComputer Industrial R22xx 主板配备一个 M.2 B-KEY 插槽和一个 Mini-PCIe 插槽，M.2 B-KEY 插槽和 Mini-PCIe 插槽均支持 4G 模块。来自 Quectel 的 EC25 4G 模块已经过充分测试，可与 reComputer Industrial R22xx 完全兼容。

### 5G 模块

reComputer Industrial R22xx 主板配备一个 M.2 B-KEY 插槽，支持使用 USB 协议的 4G/5G 模块。来自 Quectel 的 EC25 4G 模块已经过充分测试，可与 reComputer Industrial R22xx 完全兼容。

> 注意
> 请注意，如果你需要 4G/5G 功能，必须购买相应的 4G 模块和外置天线，并按照 4.5 节“组装 4G/LoRa® 模块和天线”中的说明进行操作。

### LoRa® 模块  

Mini-PCIe 插槽支持使用 USB 和 SPI 协议的 LoRa® 模块。来自 Seeed Studio 的 WM1302 模块已经过充分测试，可与 reComputer Industrial R2000 完全兼容。

> 注意
> 请注意，如果你需要 LoRa® 功能，必须购买相应的 LoRa® 模块和外置天线，并按照 4.5 节“组装 4G/LoRa® 模块和天线”中的说明进行操作。

### SSD

reComputer Industrial R2000 通过使用 PCIe 插槽（J7）支持 2280 NVMe SSD。需要注意的是，CM5 的 PCIe 为 Gen2.0，最大理论速度为 5Gbps。如果你使用的是 Gen3.0 或更高版本的 SSD，可能无法达到该 SSD 的最高速度。经过测试，安装 SSD 的 reTerminal DM 可实现最高 230MB/s 的写入速度和 370MB/s 的读取速度。如果你不确定哪些 SSD 兼容，可以参考下方的配件列表进行购买。

> 注意
> 请注意：
> 速度测试结果可能会因 SSD 型号、测试方法和测试环境的不同而有所差异。此处提供的数值仅供参考，且是在 Seeed 实验室中获得的。

> 注意
> SSD 卡主要有两种用途：
>
> 1. **大容量存储：** SSD 卡可用于大容量存储需求。
> 2. **带镜像的启动盘：** 另一种用法是将 SSD 同时用于大容量存储和存放系统镜像，从而可以直接从 SSD 卡启动系统。
> 需要特别注意的是，市面上并非所有 SSD 卡都支持第二种用法。因此，如果你打算将其用作启动盘且不确定购买哪种型号，我们建议选择我们推荐的 1TB SSD（SKU 112990267）。该型号已通过启动功能测试和验证，可降低兼容性问题风险并减少试错成本。

### 加密芯片 TPM 2.0

推荐将符合 Trusted Computing Group（TCG）TPM 2.0 规范的英飞凌 OPTIGA™ TPM SLB9670 作为 reComputer Industrial R2000 的加密芯片。该芯片采用 SPI 接口，连接到板载的 J26 端口，用于实现平台完整性的信任根、远程认证以及密码学服务。

### UPS（不间断电源）模块

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.3.8-1.png" style={{width:900, height:'auto'}}/></div>

UPS 为 7F，串联工作。UPS 模块位于 DC5V 与 CM5 组件之间，使用 GPIO 信号在 5V 电源丢失时向 CPU 发出警报。CPU 在接收到该信号后，会在超级电容能量耗尽前执行紧急脚本，发出 "`$ shutdown`" 命令。
UPS 提供的备份时长在很大程度上取决于系统负载。下面是使用配备 4GB RAM、32GB eMMC 存储和 Wi-Fi 模块的 CM5 模块进行测试的一些典型场景。

| **工作模式** | **时间（秒）**  | **备注**          |
|-----------------------|------------------------------|---------------------|
| 空闲                  | 15           | 在空闲条件下测试，并加载官方驱动程序  |
| CPU 满载              | 6            | stress -c 4 -t 10m -v &       |

:::note
如需 UPS 功能的更多信息，请联系我们，且告警信号为有效低电平（LOW）。
:::


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
