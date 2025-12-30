---
description: reComputer Industrial R21xx 是一款基于 Raspberry Pi CM5 的物联网网关和控制器，具备 AI 功能。配备 2GB RAM、8GB eMMC、双以太网、USB、RS485、RS232、DI/DO 以及无线连接（4G、5G、LoRa®、Wi-Fi/BLE），非常适合工业自动化和边缘计算。
title: reComputer Industrial R21xx 入门指南
keywords:
- Edge Controller
- Raspberry pi
- Edge Controller
- reComputer Industrial R21xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /cn/recomputer_industrial_R21xx_getting_start
last_update:
  date: 09/28/2025
  author: Nolan Chen
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

reComputer Industrial R21xx 由 Raspberry Pi CM5 驱动，是一款具备 AI 功能的适应性边缘 AI 计算机。它具有全面的工业接口 **（2x 以太网、4x USB、2x RS485、2x RS232、2x CAN FD、4x DI 和 4x DO）** 以及灵活的无线连接选项（4G/5G、LoRa®、Wi-Fi/BLE），使其非常适合各种工业应用。

reComputer Industrial R21xx 系列非常适合用于工业 AI 应用。它可以用于数据采集和过程监控、自动化和机器人控制、智能制造以及工业通信和网络等方面。凭借其小尺寸、灵活性、低成本和可编程性，它为自动化和物联网系统等提供了强有力的支持。

## 特性

**工业级可靠性**

- 无风扇紧凑型 PC，支持 -20°C 至 60°C 宽温度范围
- 硬件看门狗
- UPS 超级电容器（可选）
- 高品质金属外壳，兼容 DIN 导轨和壁挂安装
- 生产周期：reComputer Industrial R21xx 将持续生产至少到 2030 年 12 月

**高效 AI 计算**

- 由 Raspberry Pi CM5 驱动
- Broadcom BCM2711 四核 Cortex-A72 (ARM v8) 64 位 SoC @ 1.5GHz
- 最高 16GB RAM 和 64GB eMMC
- 由 Hailo-8 AI 加速器驱动，最高 26 TOPS（可选）

**丰富的无线功能**

- 片上 Wi-Fi
- 片上 BLE
- Mini-PCIe：LTE、USB LoRa®、USB Zigbee
- M.2 KEY-B：4G/5G

**丰富的接口**

- 2x RS485（隔离）、2x RS232（隔离）、4x 隔离 DI 端口、4x 隔离 DO 端口
- 1x 10M/100M/1000M 以太网（支持 PoE PD）
- 1x 10M/100M 以太网
- 2x HDMI 2.0
- 3x Type-A USB3.0
- 1x Type-A USB2.0
- 1x Type-C USB2.0（USB 控制台用于操作系统更新）
- 1x Nano SIM 卡槽

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
        <td>R20xx-12</td>
        <td>R20xx-10</td>
      </tr>
      <tr>
        <td> **CPU** </td>
        <td colspan="2">Raspberry Pi Compute Module 5，2.4GHz 四核 64 位 Arm Cortex-A76</td>
      </tr>
      <tr>
        <td> **AI 处理器** </td>
        <td>预装 1x Hailo-8 M.2 AI 加速器 26TOPS</td>
        <td>*</td>
      </tr>
      <tr>
        <td> **操作系统** </td>
        <td colspan="2">Raspbian、Debian </td>
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
        <td colspan="2">DC 9V~36V，2 针端子块</td>
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
        <td colspan="3"> 3 x USB-A 3.0 主机；1 x USB-A 2.0 主机 </td>
      </tr>
      <tr>
        <td colspan="3"> 1 x USB-C 2.0（用于刷写操作系统和调试） </td>
      </tr>
      <tr>
        <td> RS485 </td>
        <td colspan="3"> 3x RS485（隔离） </td>
      </tr>
      <tr>
        <td> RS232 </td>
        <td colspan="3"> 1x RS232（隔离） </td>
      </tr>
      <tr>
        <td rowspan="2"> DI </td>
        <td colspan="3"> 8 x 隔离 DI 端口 </td>
      </tr>
      <tr>
        <td colspan="3"> 输入电压：5~24V DC </td>
      </tr>
      <tr>
        <td rowspan="2"> DO </td>
        <td colspan="3"> 8 x 隔离 DO 端口 </td>
      </tr>
      <tr>
        <td colspan="3"> 输出电压：低于 60V DC </td>
      </tr>
      <tr>
        <td>SIM 卡</td>
        <td colspan="3">1x Nano SIM 卡槽</td>
      </tr>
      <tr>
        <td>M.2 插槽</td>
        <td>1x M.2 M-KEY 2280 插槽用于 NVMe SSD；
1x M.2 M-KEY 2280 插槽用于 AI 加速器
1x M.2 NVMe 插槽，M.2 M-KEY 2280
（预装 1x Hailo-8 M.2 AI 加速器 26TOPS）；
1x M.2 B-KEY 3042/3052 插槽用于 5G/4G LTE；</td>
        <td>1x M.2 M-KEY 2280 插槽用于 NVMe SSD；
1x M.2 M-KEY 2280 插槽用于 AI 加速器；
1x M.2 B-KEY 3042/3052 插槽用于 5G/4G LTE
2x M.2 NVMe 插槽，M.2 M-KEY 2280；
1x M.2 NVMe 插槽，M.2 B-KEY </td>
      </tr>
      <tr>
        <td>Mini-PCIe</td>
        <td colspan="2">1x Mini-PCIe 用于 LoRa 模块</td>
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
        <td>Zigbee</td>
        <td colspan="2">USB Zigbee*</td>
      </tr>
      <tr>
        <td colspan="3">**标准**</td>
      </tr>
      <tr>
        <td rowspan="3">EMC</td>
        <td colspan="2">ESD：EN61000-4-2，等级 3</td>
      </tr>
      <tr>
        <td colspan="2">EFT：EN61000-4-4，等级 2</td>
      </tr>
      <tr>
        <td colspan="2">浪涌：EN61000-4-5，等级 2</td>
      </tr>
      <tr>
        <td rowspan="3">认证</td>
        <td colspan="2">CE、FCC</td>
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
        <td>超级电容器 UPS</td>
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
        <td>保修</td>
        <td colspan="2">2 年</td>
      </tr>
      <tr>
        <td>生产周期</td>
        <td colspan="2">至 2036 年 12 月</td>
      </tr>
      <tr>
        <td>**声明**</td>
        <td colspan="2">标有 * 的选项需要根据配件清单额外购买。</td>
      </tr>
    </tbody>
  </table>
</div>


<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th colspan="2">组件和接口状态说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>预留</td>
        <td>指定用于未来使用或扩展。</td>
      </tr>
      <tr>
        <td> 可选 </td>
        <td colspan="2">指定用于未来使用或扩展。</td>
      </tr>
      <tr>
        <td> **AI 处理器** </td>
        <td>非必需组件，用户可以选择包含或排除。</td>
      </tr>
      <tr>
        <td> 占用 </td>
        <td>当前正在使用且是产品功能的组成部分。</td>
      </tr>
      <tr>
        <td>包含</td>
        <td colspan="2">标准包装中提供的必需组件。</td>
      </tr>
    </tbody>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/1.4_dimension_1.png" style={{width:800, height:'auto'}}/></div>

## Hailo 介绍

### 硬件介绍

[Hailo](https://hailo.ai/) 提供专为边缘设备上的高性能深度学习应用量身定制的尖端 AI 处理器。该公司的解决方案专注于在边缘实现下一代生成式 AI，以及由先进的 AI 加速器和视觉处理器驱动的感知和视频增强。配备 Hailo-8 NPU 加速器的 reComputer_R21xx 提供 26 TOPs 的 AI 性能，能够在 YOLOv8s 上实现超过 200 FPS。

### 软件介绍

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI 软件套件提供强大的工具，可在硬件加速器上高效运行 AI 模型。它旨在与现有的深度学习框架无缝集成，为开发者提供流畅的工作流程。该过程涉及在模型构建环境中从 ONNX 文件生成 HEF（Hailo 可执行二进制文件）。创建后，HEF 文件被传输到推理机器（运行时环境），在那里使用 HailoRT API 执行推理。提供的脚本有助于在模型构建环境中将 ONNX 文件转换为 HEF 文件。

> **注意：**
> **如果您想了解更多关于使用 Hailo NPU 的示例，请点击此[链接](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero)。**

## 硬件概述

### 系统概述

#### 接口概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/2.1.1.png" style={{width:800, height:'auto'}}/></div>

#### 主板概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.2_mainboard_overview_1.png" style={{width:800, height:'auto'}}/></div>

#### 电源图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.3_power_diagram_1.png" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R21xx 支持两种电源供应选项：DC 端子和 PoE 端口。这提供了电源选择的灵活性，并允许与各种电源轻松集成。

**2 针电源端子**

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R21xx 通过端子提供 9~36V 的 DC 电压。电源通过 2 针电源端子块连接器连接。
<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2-pin_power_terminal_2.png" style={{width:100, height:'auto'}}/></div>

要为 reComputer Industrial R21xx 接地，接地线可以固定到位于电源端子右侧的螺丝上。

**PoE**

reComputer Industrial R21xx 的 ETH0（PoE PD）端口可以支持 PoE 电源供应，提供通过以太网为设备供电的便捷高效方式。此选项简化了安装过程并减少了所需的布线量，使其成为电源有限或电源插座不易获得的应用的理想解决方案。

- PoE PD：IEEE 802.3at，最大 25.5W

> 注意：
> 值得注意的是，reComputer Industrial R21xx 提供的 PoE 模块符合 IEEE 802.3at 标准，可提供最大 25W 的电源供应。因此，如果需要连接高功耗外设（如 5G 或 4G 模块），PoE 电源供应可能不足。在这种情况下，建议使用 DC 端子进行电源供应，以确保设备的稳定可靠运行。

**功耗**

reComputer Industrial R21xx 默认不带电源按钮，一旦连接电源，系统将自动启动。关机时，请在操作系统中选择关机选项，等待系统完全关闭后再切断电源。要重启系统，只需重新连接电源即可。

#### 框图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.4_block_diagram_1.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/2.1.4_block_diagram_2.png" style={{width:800, height:'auto'}}/></div>

#### IIC 图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.5_iic_diagram_1.png" style={{width:800, height:'auto'}}/></div>

## 接口说明

| 类型            | 说明                                                                           |
|-----------------|---------------------------------------------------------------------------------------|
| **以太网**    | 1 x 10/100/1000 Mbps（支持 POE PD）；1 x 10/100 Mbps IEEE802.3/802.3u             |
| **USB**         | 3 x USB-A 3.0 主机；1 x USB-C 2.0（用于刷写操作系统和调试）                        |
| **RS485**       | 2x RS485（隔离）                                                                   |
| **RS232**       | 2x RS232（隔离）                                                                   |
| **CAN**         | 2x 隔离 CAN FD 端口                                                              |
| **DI**          | 4 x 隔离 DI 端口（输入电压：5-24V DC）                                      |
| **DO**          | 4 x 隔离 DO 端口（输出电压：< 60V DC）                                     |
| **HDMI**        | 2 x HDMI 2.0                                                                          |
| **LED**         | 4 x LED 指示灯                                                                    |
| **SIM 卡槽**   | 支持 Nano SIM 卡                                                            |
| **M.2 M-KEY 插槽**  | 1x 2280 用于 M.2 NVMe SSD；1x 2280 用于 AI 加速器                             |
| **M.2 B-KEY 插槽**  | 1x 用于 5G/4G LTE                                                                  |
| **mini PCIe 插槽**  | 1x 用于 4G LTE/LoRa/Zigbee                                                         |
| **蜂鸣器**          | 1                                                                                 |
| **复位按钮**    | 1                                                                                 |

### LED 指示灯状态

reComputer Industrial R21xx 配备 4 个 LED 指示灯，用于指示机器的运行状态。请参考下表了解每个 LED 的具体功能和状态：
<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>名称 </th>
        <th>颜色</th>
        <th>状态</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2"> **PWR** </td>
        <td rowspan="2">绿色 </td>
        <td>开启</td>
        <td>设备已连接电源。</td>
      </tr>
      <tr>
        <td>关闭</td>
        <td>设备未连接电源。</td>
      </tr>
      <tr>
        <td> **ACT** </td>
        <td>橙色</td>
        <td>开启</td>
        <td>在 Linux 下，此引脚将闪烁以表示 eMMC 访问。如果在启动过程中发生任何错误，则此 LED 将闪烁错误模式，可以使用 Raspberry Pi 网站上的查找表（[Raspberry Pi Documentation - Configuration](https://www.raspberrypi.com/documentation/computers/configuration.html)）进行解码。</td>
      </tr>
      <tr>
        <td> **USER** </td>
        <td>绿色/红色/蓝色</td>
        <td></td>
        <td>需要由用户定义。</td>
      </tr>
      <tr>
        <td rowspan="2"> **4G/5G** </td>
        <td rowspan="2">绿色 </td>
        <td>开启</td>
        <td>拨号成功，连接正常。</td>
      </tr>
      <tr>
        <td>关闭</td>
        <td>4G/5G 信号未连接或设备未开机。</td>
      </tr>
    </tbody>
  </table>
</div>

#### ACT 状态表

| 长闪烁 | 短闪烁 | 状态                               |
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
| 4            | 6             | A 类电源故障                 |
| 4            | 7             | B 类电源故障                 |

如果 ACT LED 以规律的四次闪烁模式闪烁，则无法找到引导代码（start.elf）。
如果 ACT LED 以不规律的模式闪烁，则启动已开始。
如果 ACT LED 不闪烁，则 EEPROM 代码可能已损坏，请在不连接任何设备的情况下重试以确保。有关更多详细信息，请查看 Raspberry Pi 论坛：
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums。
有关更多详细信息，请查看 [Raspberry Pi 论坛](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)

#### USER 指示灯

reComputer Industrial R21xx 包含一个 USER 指示灯，用户可以根据实际需要自定义状态。

### 蜂鸣器

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.2_buzzer_1.png" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R21xx 包含一个有源蜂鸣器，可用于各种目的，如报警和事件通知。在 reComputer Industrial R21xx 的终端中输入：

```bash
cat /sys/kernel/debug/gpio
```

此命令将输出蜂鸣器使能对应的 GPIO 为 gpio627。

### RS485

reComputer Industrial R2100 系列设备包含 2x RS485 端口，6 针 3.5mm 间距凤凰端子。
单个 RS485 的丝印为 "A/B/GND"。

**引脚定义**  
端子引脚分配如下：  

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>原理图</th>
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
RS485 线缆的原理图如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/485_2.png" style={{width:800, height:'auto'}}/></div>

注意：产品包装中包含一些 120 欧姆终端电阻。您可以在通过 RS485 通信时根据需要使用它们。

### RS232

reComputer Industrial R21xx 系列设备包含 1x RS232 端口，6 针 3.5mm 间距凤凰端子。
单个 RS232 的丝印为 "TX/RX/GND"。

**引脚定义**

端子引脚定义如下：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>原理图</th>
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
RS232 线缆的原理图如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/21-rs232.png" style={{width:800, height:'auto'}}/></div>

### DI（数字输入）

reComputer Industrial R2000 系列设备包含 4x DI 端口，3 针 3.5mm 间距凤凰端子。
 单个 DI 的丝印为 "DI/G_DI"。

**引脚定义**

端子引脚定义如下：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>原理图</th>
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
单个 DI 线缆的原理图如下：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**原理图**</th>
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

> 注意
> 有关 DI 测试的详细信息，请参考章节 [链接](https://wiki.seeedstudio.com/cn/recomputer_industrial_R21xx_configure_system/di-(digital-input)-testing)。

### DO（数字输出）

reComputer Industrial R2000 系列设备包含 4x DO 端口，3 针 3.5mm 间距凤凰端子。
单个 DO 的丝印为 "DO/G_DO"。
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

单个 DO 线缆的原理图如下：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**原理图**</th>
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

reComputer Industrial R2100 系列设备包含 2x CAN FD 端口，6 针 3.5mm 间距凤凰端子。
单个 CAN FD 的丝印为 "CANH/CANL/GND"。
**引脚定义**
端子引脚定义如下：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**原理图**</th>
        <th>**参数**</th>
        <th>**描述**</th>
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
CAN FD 线缆的原理图如下：
<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/CAN_2.jpg" style={{width:800, height:'auto'}}/></div>

### 启动开关

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.7_boot_switch_1.png" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R2000 的启动开关连接到 CM5 的 nRPI_BOOT 引脚。此开关为用户提供了在 eMMC 和 USB 之间选择启动源的选项。在正常模式下，开关应设置为远离带有 "BOOT" 标签的一侧，使系统从 eMMC 启动。相反，当用户需要刷写系统镜像时，应将开关设置为朝向 "BOOT" 标签，允许系统从 Type-C USB 接口启动。

| 开关位置 | 模式         | 描述      | nRPI-BOOT |
|----------------|--------------|-----------------|-----------|
|      <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/HIGH.png" alt="image" width="80"/>            | 正常模式  | 从 eMMC 启动   | 低电平       |
|     <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/LOW.png" alt="image" width="80"/>             | 刷写模式   | 从 USB 启动    | 高电平      |

### USB

<div align="left">
  <img width={205} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.8_usb_1.png" />
  <img width={250} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.8_usb_2.png" />
  </div>

reComputer Industrial R21xx 配备了 1x USB Type-C 端口和 4x USB Type-A 端口。请参考下表了解它们的功能和描述。

| **类型区分**   | **数量** | **协议** | **功能**   | **描述** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | *1       | USB 2.0    | USB-Device   | 用于串口调试、烧录镜像等。 |
| Type-A   | *1       | USB 2.0    | USB-Host     | 连接不同的 USB 设备，如闪存盘、USB 键盘或鼠标。 |
| Type-A   | *3       | USB 3.0    | USB-Host     | 连接不同的 USB 设备，如闪存盘、USB 键盘或鼠标。 |

### SIM 卡槽（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.9_sim_slot(internal)_1.png" style={{width:900, height:'auto'}}/></div>

reComputer Industrial R2000 系列设备包含一个内置的 Nano SIM 卡槽，用于安装 Nano SIM 卡以获取 5G/4G 信号。
标准 SIM、Micro SIM 和 Nano SIM 卡之间的尺寸差异如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.9_sim_slot(internal)_2.png" style={{width:900, height:'auto'}}/></div>

> **注意**  
> 请注意，reComputer Industrial R2000 的标准版本不包含 5G/4G 模块。
> 如果您需要 5G/4G 功能，必须单独购买额外的 5G/4G 模块。

### M.2 M-KEY 插槽

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/M.2_1.png" style={{width:400, height:'auto'}}/>
  <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/M.2_2.png" style={{width:400, height:'auto'}}/>
 </div>

| **插槽**       | **支持的协议**   |  
|---------------|--------------------------|  
| **M.2 M-KEY 2280** | M.2 NVMe SSD        |  
| **M.2 M-KEY 2280** | M.2 AI 加速器 |  

reComputer Industrial R2000 上的 M.2 M-KEY 2280 插槽设计用于容纳 NVMe M.2 2280 SSD，容量可达 128GB、256GB、512GB、1TB 和 2TB。此插槽允许高速存储扩展，使用户能够增强系统的性能和容量。

> **注意**  
> SSD 卡有两种主要用途：
>
> 1. **大容量存储：** SSD 卡可用于大容量存储需求。
> 2. **带镜像的启动驱动器：** 另一种用法是将 SSD 既用作大容量存储，又用于存储系统镜像，允许直接从 SSD 卡启动。
>  
> 需要注意的是，市场上并非所有 SSD 卡都支持第二种用法。因此，如果您打算将其用作启动驱动器并且不确定购买哪种型号，我们建议选择我们推荐的 2TB SSD（SKU 114993467）。此型号已经过测试并验证了启动功能，降低了兼容性问题的风险，并最大限度地减少了试错成本。

reComputer Industrial R2000 上的 M.2 M-KEY 2280 插槽设计用于容纳 PCIE M.2 AI 加速器。R21xx-12 系列已预装了 Hailo-8 M.2 AI 加速器，性能高达 26TOPS。

### Mini-PCIe 插槽

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.11_mini-pcie__slot_1.png" style={{width:800, height:'auto'}}/></div>
reComputer Industrial R2000 上的 MiniPCIe 插槽设计用于容纳 4G LTE、USB LoRaWAN® 和 USB Zigbee 等设备。

### 复位孔

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/reset.jpg" style={{width:200, height:'auto'}}/></div>

reComputer AI Industrial R2135 的复位孔中有一个微型按钮开关。通过用细物体按下此按钮，可以复位 CM4。此引脚为高电平时表示 CM4 已启动。将此引脚拉低会复位模块。

### M.2 B-KEY 插槽

reComputer Industrial R2000 上的 M.2 B-KEY 插槽设计用于容纳 5G/4G LTE。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.12_m.2_b-key__slot_1.png" style={{width:800, height:'auto'}}/></div>

### 以太网 RJ45  

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.14_ethernet_rj45_1.png" style={{width:200, height:'auto'}}/></div>

**reComputer R1100** 配备两个以太网端口：  

| **名称**  | **类型**                     | **速度**          | **PoE PD**
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | CM5 原生千兆以太网  | 10/100/1000 Mbit/s  | 支持       |
| ETH1  | 从 USB 转换           | 10/100 Mbit/s       | 不支持   |

reComputer Industrial R2000 配备两个以太网 RJ45 端口。ETH0 是 CM5 原生千兆以太网接口，支持三种不同速度：10/100/1000 Mbit/s。它可以通过此接口启用以太网供电（PoE）传输，为 reComputer Industrial R2000 提供电源。另一个 ETH1 支持 10/100 Mbit/s，由 USB 转换而来。

### HDMI

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.15_hdmi_1.png" style={{width:200, height:'auto'}}/></div>

reComputer Industrial R2000 具有来自 CM5 的 2 个原生 HDMI 接口，支持高达 4K @ 60 fps 的视频输出。它非常适合需要多显示器的应用，允许用户将内容输出到外部大屏幕。

### RTC

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.16_rtc_1.png" style={{width:200, height:'auto'}}/></div>
reComputer Industrial R2000 具有由电容器供电的 RTC 电路，使其即使在断电的情况下也能保持计时功能。

### 看门狗

reComputer Industrial R2000 配备独立的硬件看门狗电路，确保在系统异常崩溃时自动重启系统。看门狗电路通过 RTC 实现，允许从 1 到 255 秒的灵活喂狗时间。

## 可选接口和模块  

reComputer Industrial R2000 支持丰富的扩展模块和配件选择，使其适用于各种场景和需求。如果您有兴趣定制 reComputer Industrial R2000，请联系 odm@seeed.cc 获取更多信息。
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
        <td rowspan="7">必须配合使用以实现 LoRa®WAN 功能</td>
        <td rowspan="6">LoRa® 模块</td>
        <td>区域可选 LoRaWAN 网关模块（USB）- US915</td>
        <td>114992969</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN 网关模块（USB）- US915</td>
        <td>114992629</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN 网关模块（USB）- US915</td>
        <td>114992991</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN 网关模块（SPI）- EU868</td>
        <td>114993268</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN 网关模块（SPI）- EU868</td>
        <td>114992549</td>
      </tr>
      <tr>
        <td>区域可选 LoRaWAN 网关模块（USB）- EU868</td>
        <td>114992628</td>
      </tr>
      <tr>
        <td>LoRa® 天线</td>
        <td>LoRa 天线套件 - 868-915 MHz</td>
        <td>110061501</td>
      </tr>
      <tr>
        <td></td>
        <td>Zigbee 模块</td>
        <td>Mini-PCIe USB Zigbee 模块</td>
        <td>110992005</td>
      </tr>
      <tr>
        <td></td>
        <td>Zigbee 天线</td>
        <td>reComputer R 用 Zigbee 天线套件</td>
        <td>110061641</td>
      </tr>
      <tr>
        <td rowspan="8">4G 天线配合 4G 模块实现 4G 功能，GPS 天线配合 4G 模块实现 GPS 功能</td>
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
        <td>4G 模块用 4G 天线套件</td>
        <td>110061502</td>
      </tr>
      <tr>
        <td>GPS 天线</td>
        <td>EC25 4G 模块用 GPS 天线套件</td>
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
        <td>此模块需要焊接到 reComputer Industrial R21xx 的载板上</td>
        <td>PoE</td>
        <td>reTerminal DM 用 MQ7813T120 PoE 模块套件</td>
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

reComputer Industrial R21xx 主板配备两个 Mini-PCIe 插槽。Mini-PCIe 插槽 1 支持 4G 模块、使用 USB 协议的 LoRa® 模块和使用 USB 协议的 Zigbee 模块；而 Mini-PCIe 插槽 2 支持使用 USB 和 SPI 协议的 LoRa® 模块以及使用 USB 协议的 Zigbee 模块。此外，4G 模块和 LoRa® 模块不应同时使用，不能在板上插入两个 LoRa® 模块。

> 注意
> 不能在板上插入 2 个 LoRa® 模块。

### Wi-Fi/BLE  

reComputer Industrial R21xx 由带有板载 Wi-Fi/BLE 版本的 CM5 供电，提供与 CM5 相同的 Wi-Fi/BLE 参数。有关详细参数信息，请参考树莓派官方网站。  

### 4G 模块

reComputer Industrial R21xx 主板配备一个 M.2 B-KEY 插槽和一个 Mini-PCIe 插槽，M.2 B-KEY 插槽和 Mini-PCIe 插槽都支持 4G 模块。来自移远通信的 EC25 4G 模块已经过全面测试，与 reComputer Industrial R21xx 完全兼容。

### 5G 模块

reComputer Industrial R21xx 主板配备一个 M.2 B-KEY 插槽，支持使用 USB 协议的 4G/5G 模块。来自移远通信的 EC25 4G 模块已经过全面测试，与 reComputer Industrial R21xx 完全兼容。

> 注意
> 请注意，如果您需要 4G/5G 功能，需要购买相应的 4G 模块和外部天线，并按照第 4.5 节"组装 4G/LoRa®/Zigbee 模块和天线"中的说明进行操作。

### LoRa® 模块  

Mini-PCIe 插槽支持使用 USB 和 SPI 协议的 LoRa® 模块。来自 Seeed Studio 的 WM1302 模块已经过全面测试，与 reComputer Industrial R2000 完全兼容。

> 注意
> 请注意，如果您需要 LoRa® 功能，需要购买相应的 LoRa® 模块和外部天线，并按照第 4.5 节"组装 4G/LoRa®/Zigbee 模块和天线"中的说明进行操作。

### Zigbee 模块

Mini-PCIe 插槽支持使用 USB 协议的 Zigbee 模块，允许将 Zigbee 功能无缝集成到兼容设备中。此功能可在 Zigbee 网络内实现高效通信和控制，增强系统的多功能性和连接性。通过可用于 Zigbee 模块的 Mini-PCIe 插槽，用户可以灵活地实施各种应用以增强可靠性。

> 注意  
> 请注意，如果您需要 Zigbee 功能，需要购买相应的 Zigbee 模块和外部天线，并按照第 4.5 节"组装 4G/LoRa®/Zigbee 模块和天线"中的说明进行操作。

### SSD

reComputer Industrial R2000 通过使用 PCIe 插槽（J7）支持 2280 NVMe SSD。需要注意的是，CM5 的 PCIe 是 gen2.0，最大理论速度为 5Gbps。如果您使用的是 Gen3.0 或更高版本的 SSD，可能无法达到 SSD 的最大速度。经过测试，安装了 SSD 的 reTerminal DM 可以达到最大写入速度 230MB/s 和最大读取速度 370MB/s。如果您不确定哪些 SSD 兼容，可以按照下面的配件列表进行购买。

> 注意
> 请注意：
> 速度测试结果可能因 SSD 型号、测试方法和测试环境而异。此处提供的数值仅供参考，是在 Seeed 实验室中获得的。

> 注意
> SSD 卡有两种主要用途：
>
> 1. **大容量存储：** SSD 卡可用于大容量存储需求。
> 2. **带镜像的启动驱动器：** 另一种用法是将 SSD 既用作大容量存储，又用于存储系统镜像，允许直接从 SSD 卡启动。
> 需要注意的是，市场上并非所有 SSD 卡都支持第二种用法。因此，如果您打算将其用作启动驱动器并且不确定要购买哪种型号，我们建议选择我们推荐的 1TB SSD（SKU 112990267）。该型号已经过测试并验证了启动功能，降低了兼容性问题的风险，并最大限度地减少了试错成本。

### 加密芯片 TPM 2.0

TPM 采用英飞凌的 OPTIGA™ TPM SLB9670，符合可信计算组织（TCG）TPM 2.0 规范，推荐作为 reComputer Industrial R2000 的加密芯片。该芯片具有应用于板上 J26 端口的 SPI 接口，以实现平台完整性、远程认证和加密服务的信任根。

### UPS（不间断电源）模块

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/UPS_2.png" style={{width:900, height:'auto'}}/></div>

UPS 是 7F，串联工作。UPS 模块位于 DC5V 和 CM5 组件之间，当 5V 电源断电时，使用 GPIO 信号来警告 CPU。收到此信号后，CPU 在超级电容器的能量耗尽之前执行紧急脚本，启动"$ shutdown"命令。
UPS 提供的备用时间很大程度上取决于系统负载。以下是使用配备 4GB RAM、32GB eMMC 存储和 Wi-Fi 模块的 CM5 模块测试的一些典型场景。

| **运行模式** | **时间（秒）**  | **备注**          |
|-----------------------|------------------------------|---------------------|
| 空闲                  | 15           | 在加载官方驱动程序的空闲条件下测试  |
| CPU 满负载      | 6            | stress -c 4 -t 10m -v &       |

:::note
有关 UPS 功能，请联系我们获取更多信息，警报信号为低电平有效。
:::

## 其他资源

- [reComputer Industrial R21xx 宣传册](https://files.seeedstudio.com/wiki/raspberry-pi/Seeed_Raspberry_Pi_Flyer.pdf)

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
