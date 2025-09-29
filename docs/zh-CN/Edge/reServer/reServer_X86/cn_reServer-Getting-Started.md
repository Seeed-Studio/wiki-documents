---
description: reServer X86
title: reServer X86 入门指南
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reServer-Getting-Started
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: reServer
category: reServer
bzurl: 
wikiurl: 
sku: 
--- -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/上架01.png" alt="pir" width={600} height="auto" /></p>

reServer 作为 reThings 系列的里程碑产品，极其紧凑且功能强大。这款智能小型服务器能够轻松高效地从边缘到云端工作。

reServer 基于 ODYSSEY X86 v2 主板，搭载最新的 Intel® Core™ 第 11 代处理器和 Intel® UHD Graphics 或 Intel® Iris Xe Graphics，为各种应用提供高 CPU 和 AI 性能。它具有两个高速 2.5 千兆以太网端口，支持包括 5G、LoRa、BLE 和 WiFi 在内的混合连接。同时，reServer 采用紧凑设计，能够在几乎任何场景中高效工作。reServer 的整洁结构也使其能够简单地访问硬盘驱动器、内存和 PCIe 插槽，从而实现轻松的安装、升级和维护。

reServer 具有双 SATA III 6.0Gbps 数据连接器，能够配备多达两个 3.5"/2.5" SATA 内置硬盘驱动器以获得更多存储空间。它还具有 M.2 连接器，可连接各种 SSD 以实现更快的读写速度。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-X86-i3-8G-256SSD-p-4965.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 紧凑的服务器设计，整体尺寸为 132mm x124mm x233mm
- 搭载最新的第 11 代 Intel® Core™ CPU 和 Intel® UHD Graphics 或 Intel® Iris Xe Graphics
- 丰富的外设，包括双® 2.5 千兆以太网端口、USB 3.2 Type-A 端口、USB 2.0 Type-A 端口、HDMI 端口和 DP 端口
- 支持包括 5G、LoRa、BLE 和 WiFi 在内的混合连接（5G 和 LoRa 需要额外模块）
- 双 SATA III 6.0 Gbps 数据连接器，用于 3.5"/2.5" SATA 硬盘驱动器，机箱内有足够空间存储两个硬盘
- M.2 B-Key/ M-Key/ E-Key 用于扩展性，如 SSD、4G/5G 模块、WiFi 6
- 静音冷却风扇配备大型 VC 散热器，实现出色的散热效果
- 打开机箱后可轻松访问内部组件，便于安装、升级和维护
- 预装 Windows 10 企业版（未激活），也支持其他 Windows 操作系统和 Linux 操作系统

## 规格

<table style={{tableLayout: 'fixed', width: 1173}}>

<thead>
  <tr>
    <th colspan="2">版本</th>
    <th colspan="3">基础版本</th>
    <th colspan="2">高性能版本</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">平台</td>
    <td>处理器</td>
    <td>Intel® Core™ 11th Gen. i3 1115G4</td>
    <td>Intel® Core™ 11th Gen. i3 1125G4</td>
    <td>Intel® Core™ 11th Gen. i5 1135G7</td>
    <td>Intel® Core™ vPro® 11th Gen. i5 1145GRE</td>
    <td>Intel® Core™ vPro® 11th Gen. i7 1185GRE </td>
  </tr>
  <tr>
    <td>处理器核心/线程数</td>
    <td>2C/4T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
  </tr>
  <tr>
    <td>协处理器</td>
    <td colspan="3">Microchip® ATSAMD21G18 32-Bit ARM® Cortex-M0+ @ 48MHz </td>
    <td colspan="2">Raspberry Pi® RP2040 32-Bit Dual ARM Cortex-M0+ @ 133MHz</td>
  </tr>
  <tr>
    <td rowspan="3">内存</td>
    <td>技术</td>
    <td colspan="5">双通道 DDR4-3200</td>
  </tr>
  <tr>
    <td>容量</td>
    <td colspan="3">8GB; 16GB (支持最大 64GB)</td>
    <td colspan="2">支持最大 64GB</td>
  </tr>
  <tr>
    <td>ECC 内存支持</td>
    <td colspan="3">否</td>
    <td colspan="2">是</td>
  </tr>
  <tr>
    <td>图形</td>
    <td>控制器</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 96EUs(400-1300MHz)</td>
  </tr>
  <tr>
    <td rowspan="2">先进技术</td>
    <td>Intel®  vPro®</td>
    <td colspan="3">否</td>
    <td colspan="2">是</td>
  </tr>
  <tr>
    <td>Intel® Total Memory Encryption</td>
    <td colspan="3">否</td>
    <td colspan="2">是</td>
  </tr>
  <tr>
    <td>网络</td>
    <td>控制器</td>
    <td colspan="3">Intel® Ethernet Controller I225-V</td>
    <td colspan="2">Intel® Ethernet Controller I225-LM</td>
  </tr>
  <tr>
    <td rowspan="2">无线</td>
    <td>WiFi</td>
    <td colspan="5">M.2 E-Key(PCIE &amp; CNVi Support), Intel® Wi-Fi 6 AX201(可选)</td>
  </tr>
  <tr>
    <td>蓝牙</td>
    <td colspan="5">蓝牙 5.0, BLE(可选)</td>
  </tr>
  <tr>
    <td rowspan="4">显示</td>
    <td>LCD</td>
    <td colspan="5">eDP 40-Pin 4 Lane 连接器</td>
  </tr>
  <tr>
    <td>HDMI</td>
    <td colspan="5">1 x HDMI 2.0b, 最高 4Kx2Kx24bpp@60Hz</td>
  </tr>
  <tr>
    <td>DP</td>
    <td colspan="5">1 x DP1.4a 7680x4320x24bpp@60Hz</td>
  </tr>
  <tr>
    <td>多显示器</td>
    <td colspan="5">每种显示接口组合支持 4 个同时显示</td>
  </tr>
  <tr>
    <td rowspan="7">外部 I/O</td>
    <td>以太网</td>
    <td colspan="5">2 x 2.5GbE LAN 端口 (RJ45, 支持 10/100/1000/2500 Mbps), Intel® i225</td>
  </tr>
  <tr>
    <td>HDMI/DP</td>
    <td colspan="5">一个/一个</td>
  </tr>
  <tr>
    <td>USB Type-C</td>
    <td colspan="3">无</td>
    <td colspan="2">USB PD / USB 4.0 / Thunderbolt 4</td>
  </tr>
  <tr>
    <td>USB Type-A</td>
    <td colspan="3">USB2.0 Type A x1 ; USB3.2 Type A x1</td>
    <td colspan="2">USB2.0 Type A x2 ; USB3.2 Type A x1</td>
  </tr>
  <tr>
    <td>LED</td>
    <td colspan="5">电源状态</td>
  </tr>
  <tr>
    <td>电源供应</td>
    <td colspan="5">1x5.5x2.5mm DC 插孔 / Wafer 2.0mm 8pin</td>
  </tr>
  <tr>
    <td>Micro Sim 卡槽</td>
    <td colspan="5">1</td>
  </tr>
  <tr>
    <td rowspan="10">内部 I/O</td>
    <td>SATA</td>
    <td colspan="5">2 x SATA Gen III 6.0 Gb/s 数据连接器 + 3 x SATA 电源连接器</td>
  </tr>
  <tr>
    <td>COM 端口</td>
    <td colspan="5">1 x RS-232/422/485, 1 x RS-232</td>
  </tr>
  <tr>
    <td>GPIO</td>
    <td colspan="3">28-Pin Arduino 协处理器 2.54mm 排针</td>
    <td colspan="2">30-Pin Raspberry Pi 协处理器 2.54mm 排针</td>
  </tr>
  <tr>
    <td>音频</td>
    <td colspan="5">Realtek 高清音频，麦克风 + 耳机组合连接器</td>
  </tr>
  <tr>
    <td>USB2.0</td>
    <td colspan="5">USB2.0 9-pin 排针 x2 480Mbps</td>
  </tr>
  <tr>
    <td>风扇</td>
    <td colspan="5">2 x 12V 4-wire 风扇排针，PWM 控制</td>
  </tr>
  <tr>
    <td>前面板控制</td>
    <td colspan="5">开机，重置，电源状态 LED，SATA 状态 LED</td>
  </tr>
  <tr>
    <td>S/PDIF</td>
    <td colspan="5">3-Pin 2.54mm 排针</td>
  </tr>
  <tr>
    <td>SATA 电源</td>
    <td colspan="5">WAFER4-Pin 2.0 pitch 连接器</td>
  </tr>
  <tr>
    <td>协处理器调试端口</td>
    <td colspan="5">6-Pin 0.5mm FPC 连接器 (SWD)</td>
  </tr>
  <tr>
    <td rowspan="4">扩展</td>
    <td>M.2 M-Key</td>
    <td colspan="5">1 x M-Key 2242/2280(PCIe 3.0 x4）</td>
  </tr>
  <tr>
    <td>M.2 E-Key</td>
    <td colspan="5">1 x E-Key 2230(PCIe 3.0 x1; USB2.0 x1;Intel CNVi)</td>
  </tr>
  <tr>
    <td>M.2 B-Key</td>
    <td colspan="5">1 x B-Key2242/2252/2280(PCIe 3.0 x2; USB2.0 x1)</td>
  </tr>
  <tr>
    <td>高速 I/O</td>
    <td colspan="3">1 X PCIe x4 Gen4 </td>
    <td colspan="2">1 X PCIe 3.0 x4/SMBus/LPC/USB 2.0/CPU GPIO 等</td>
  </tr>
  <tr>
    <td rowspan="2">电源</td>
    <td>供电电压</td>
    <td colspan="3">DC 插孔: 12V</td>
    <td colspan="2">DC 插孔: 12V-19V</td>
  </tr>
  <tr>
    <td>RTC 电池</td>
    <td colspan="5">锂电池 3V/210mAH</td>
  </tr>
  <tr>
    <td>认证</td>
    <td>EMC</td>
    <td colspan="5">CE,FCC,TELEC</td>
  </tr>
  <tr>
    <td rowspan="3">机械</td>
    <td>尺寸</td>
    <td colspan="5">132mm*124mm*233mm</td>
  </tr>
  <tr>
    <td>散热解决方案</td>
    <td colspan="5">热管组件/散热均温板组件</td>
  </tr>
  <tr>
    <td>重量</td>
    <td colspan="5">1800g</td>
  </tr>
</tbody>
</table>

## 对比

<table style={{tableLayout: 'fixed', width: 1354}}>
<thead>
  <tr>
    <th>版本</th>
    <th colspan="3">基础版本</th>
    <th colspan="2">高性能版本</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>外观</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%E4%BD%8E%E9%85%8D.png" alt="reserver basic" width={150} height={100} />
</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%E4%BD%8E%E9%85%8D.png" alt="reserver basic" width={150} height={100} />
</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%E4%BD%8E%E9%85%8D.png" alt="reserver basic" width={150} height={100} />
</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%20%E9%AB%98%E9%85%8D.png" alt="reserver high" width={150} height={100} />
</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%20%E9%AB%98%E9%85%8D.png" alt="reserver high" width={150} height={100} />
</td>
  </tr>
  <tr>
    <td>处理器</td>
    <td>Intel® Core™ 11th Gen. i3 1115G4</td>
    <td>Intel® Core™ 11th Gen. i3 1125G4</td>
    <td>Intel® Core™ 11th Gen. i5 1135G7</td>
    <td>Intel® Core™ vPro® 11th Gen. i5 1145GRE</td>
    <td>Intel® Core™ vPro® 11th Gen. i7 1185GRE </td>
  </tr>
  <tr>
    <td>处理器核心/线程数</td>
    <td>2C/4T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
  </tr>
  <tr>
    <td>协处理器</td>
    <td colspan="3">Microchip® ATSAMD21G18 32-Bit ARM® Cortex-M0+ @ 48MHz </td>
    <td colspan="2">Raspberry Pi® RP2040 32-Bit Dual ARM Cortex-M0+ @ 133MHz</td>
  </tr>
  <tr>
    <td>Intel®  vPro®</td>
    <td colspan="3">否</td>
    <td colspan="2">是</td>
  </tr>
  <tr>
    <td>Intel® Total Memory Encryption</td>
    <td colspan="3">否</td>
    <td colspan="2">是</td>
  </tr>
  <tr>
    <td>显卡</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 96EUs(400-1300MHz)</td>
  </tr>
  <tr>
    <td>内存</td>
    <td colspan="5">双通道 DDR4-3200（总计支持最高 64GB）</td>
  </tr>
  <tr>
    <td>支持 ECC 内存</td>
    <td colspan="3">否</td>
    <td colspan="2">是</td>
  </tr>
  <tr>
    <td>网络控制器</td>
    <td colspan="3">Intel® Ethernet Controller I225-V</td>
    <td colspan="2">Intel® Ethernet Controller I225-LM</td>
  </tr>
  <tr>
    <td>扩展</td>
    <td colspan="3">M.2 M-Key; M.2 B-Key; M.2 E-Key; 1 X PCIe x4 Gen4 </td>
    <td colspan="2">M.2 M-Key; M.2 B-Key; M.2 E-Key; 1 X PCIe 3.0 x4/SMBus/LPC/USB 2.0/CPU GPIO 等</td>
  </tr>
  <tr>
    <td>外部 I/O</td>
    <td colspan="3">USB Type-A（USB2.0 Type-A x1；USB3.2 Type-A x1）；HDMI；DP；2.5GbE LAN 端口 x2；音频接口；DC 接口（12V）；</td>
    <td colspan="2"><div>
  USB Type-C（USB PD / USB 4.0 / Thunderbolt 4）；<br />USB Type-A（USB2.0 Type-A x2；USB3.2 Type-A x1）；HDMI；DP；2.5GbE LAN 端口 x2；音频接口；DC 接口（12V-19V）；
</div>
</td>
  </tr>
  <tr>
    <td>无线连接</td>
    <td colspan="5">WIFI、BLE 并支持 LTE/4G/5G/LoRaWAN</td>
  </tr>
</tbody>
</table>

## 硬件概述

reServer 有两个不同版本，基础版和高性能版，它们具有不同的硬件配置。

### 基础版

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/09%20%E4%BD%8E%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reServer%20mainboard%20.png" alt="pir" width={1000} height="auto" /></p>

### 高性能版

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/09-%E9%AB%98%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

### 引脚信息

#### 8针电源连接器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/8P_power_connector.png" alt="pir" width={800} height="auto" /></p>

#### 28针 Arduino 引脚定义

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/28P_arduino.png" alt="pir" width={800} height="auto" /></p>

#### 9针 COM 引脚定义

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_COM_pinout.png" alt="pir" width={800} height="auto" /></p>

#### 9针 USB2.0 引脚定义

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_USB2.0_pinout.png" alt="pir" width={800} height="auto" /></p>

#### 9针前面板引脚定义

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_front_panel_pinout.png" alt="pir" width={800} height="auto" /></p>

## 尺寸

两个版本具有相同的尺寸。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/10-%E4%BD%8E%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

## reServer 快速入门

如果您想以最快最简单的方式开始使用 reServer，可以按照以下指南进行。

### 所需硬件

在开始使用 reServer 之前，您需要准备以下硬件。

- reServer
- 电源适配器（已提供）
- 外接显示器
- HDMI/DP 线缆
- 键盘和鼠标

### 硬件安装

在这一部分，我们将介绍如何在 reServer 内部安装或更换一些硬件。如果您没有这方面的需求，请跳过此部分。
在阅读此部分之前，您可能需要按照本页末尾附带的**组装指南手册**来访问 reServer 的主板。

#### DDR4 安装

您可以添加新的 DDR4 来扩展内存。双通道 SO-DIMM 插槽支持 DDR4-3200MT/s，总容量最高可达 64GB。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/ddr4.png" alt="pir" width={800} height="auto" /></p>

#### SSD 安装

M.2 M-Key 2242/2280（PCIe 3.0 x4）允许您添加 SSD。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20M-Key.png" alt="pir" width={800} height="auto" /></p>

#### WiFi 模块安装

您可以按照以下步骤添加 WiFi 模块。

- **步骤 1.** 从 M.2 M-Key 插槽中取出 SSD。

- **步骤 2.** 取下 WiFi 天线线缆，并从 M.2 E-Key 中移除预装的 WiFi 模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20E-Key.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3.** 安装新的 WiFi 模块并将 WiFi 天线线缆重新连接到它上面。

- **步骤 4.** 将 SSD 重新安装到 M.2 M-Key。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20E-Key%20antenna.png" alt="pir" width={800} height="auto" /></p>

**注意：** reServer 配备了两个 2.4/5GHz WiFi 天线，您可以将天线连接到适配器上，该适配器与 reServer 内部 WiFi 模块的天线线缆相连，以实现更好的 WiFi 连接性。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/antenna.png" alt="pir" width={800} height="auto" /></p>

#### 4G/5G/LoRaWAN 模块安装

reServer 支持在 M.2 B-Key 2242/2252/2280（PCIe 3.0 x2；USB2.0 x1）上安装 4G/5G/LoRaWAN 模块。**（4G/5G/LoRaWAN 模块不包含在 reServer 中）**
请按照以下步骤添加 4G/5G/LoRaWAN 模块。

- **步骤 1.** 将 4G/5G/LoRaWAN 模块安装到 M.2 B-Key。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20B-Key.png" alt="pir" width={800} height="auto" /></p>

- **步骤 2.** 将天线线缆连接到模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20B-Key%20antenna.png" alt="pir" width={800} height="auto" /></p>

**注意：** 您必须将标准 SIM 卡插入 micro SIM 卡插槽才能启用 5G/4G。

#### HDD 安装

reServer 支持安装两个 3.5"/2.5" 内置硬盘驱动器以获得更多存储空间。**（HDD 不包含在 reServer 中）**
请按照以下步骤安装 HDD。

- **步骤 1.** 拆下螺丝并拉出支架

- **步骤 2.** 用螺丝将 HDD 固定到支架上

- **步骤 3.** 将 HDD 支架向下推，使 HDD 与 SATA 端口连接。

- **步骤 4.** 用螺丝固定 HDD 支架

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/07.png" alt="pir" width height="auto" /></p>

### 硬件连接

在这一部分，我们将介绍 reServer 的接口连接。
reServer 有两个版本。请注意，不同版本可能具有不同的接口。

#### 显示器连接

reServer 有三种连接显示器的方法，其中第三种方法仅适用于高性能版本。
**方法 1.** HDMI 端口

**方法 2.** DP 端口

**方法 3.** USB Type-C（仅适用于高性能版本）

基础版
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/DIsplay%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

高性能版本
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20display.png" alt="pir" width={800} height="auto" /></p>

#### 键盘和鼠标连接

通过USB端口连接键盘和鼠标。基础版本有一个USB 3.2端口和一个USB 2.0端口，而高性能版本有一个USB 3.2端口和两个USB 2.0端口。
基础版本
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/USB%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

高性能版本
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20usb.png" alt="pir" width={800} height="auto" /></p>

#### 音频连接

对于基础版本，音频插孔位于左侧I/O面板上，而对于高性能版本，音频插孔位于右侧I/O面板上。

基础版本
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/Audio%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

高性能版本
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20audio.png" alt="pir" width={800} height="auto" /></p>

#### 电源连接

有两种方法为reServer供电，第二种方法仅适用于高性能版本。

**方法1.** 简单地连接AC-DC电源适配器（包含在产品盒中）和AC电源线（不在产品盒中但仍在包装中），然后将其连接到reServer的12V DC插孔。

**方法2.** 将USB Type-C充电线（不包含在reServer中）连接到Thunderbolt 4 USB Type-C端口（此端口仅在高性能版本中可用）

基础版本
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/Power%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

高性能版本
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20power.png" alt="pir" width={800} height="auto" /></p>

### 操作系统安装

对于所有版本的reServer，Windows 10企业版（未激活）已预装，您可以简单地启动并激活操作系统。但是，reServer仍然支持其他Windows操作系统以及Linux操作系统，因此您可以用您想要的操作系统覆盖预装的操作系统。

## 资源

- **[PDF]** [reServer组装指南](https://files.seeedstudio.com/wiki/reServer/Assembly%20Guide%20of%20reServer.pdf)
- **[PDF]** [Atmel-SAMD21-数据手册](https://files.seeedstudio.com/wiki/reServer/wiki/Atmel-SAMD21-datasheet.pdf)

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
