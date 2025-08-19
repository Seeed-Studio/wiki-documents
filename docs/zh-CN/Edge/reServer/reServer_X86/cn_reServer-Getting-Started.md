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

reServer 作为 reThings 家族的里程碑产品，体积小巧但功能强大。这款智能小型服务器能够轻松高效地从边缘到云端运行。

reServer 基于 ODYSSEY X86 v2 主板，搭载最新的第 11 代 Intel® Core™ 处理器和 Intel® UHD Graphics 或 Intel® Iris Xe Graphics，提供高性能的 CPU 和 AI 能力，适用于多种应用场景。它配备了两个高速 2.5-Gigabit 以太网端口，并支持包括 5G、LoRa、BLE 和 WiFi 在内的混合连接。同时，reServer 的紧凑设计使其几乎可以在任何场景中高效工作。reServer 的简洁结构还使硬盘、内存和 PCIe 插槽的访问变得简单，便于安装、升级和维护。

通过双 SATA III 6.0Gbps 数据连接器，reServer 可支持最多两个 3.5"/2.5" SATA 内部硬盘驱动器以获得更多存储空间。它还配备了 M.2 接口，可连接各种 SSD 以实现更快的读写速度。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-X86-i3-8G-256SSD-p-4965.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 紧凑设计的服务器，整体尺寸为 132mm x124mm x233mm
- 搭载最新的第 11 代 Intel® Core™ CPU 和 Intel® UHD Graphics 或 Intel® Iris Xe Graphics
- 丰富的外设接口，包括双 2.5-Gigabit 以太网端口、USB 3.2 Type-A 端口、USB 2.0 Type-A 端口、HDMI 端口和 DP 端口
- 支持混合连接，包括 5G、LoRa、BLE 和 WiFi（5G 和 LoRa 需要额外模块）
- 双 SATA III 6.0 Gbps 数据连接器，可支持 3.5"/2.5" SATA 硬盘驱动器，机箱内部有足够空间容纳两块硬盘
- M.2 B-Key/M-Key/E-Key 接口，支持 SSD、4G/5G 模块、WiFi 6 等扩展
- 配备安静的散热风扇和大型 VC 散热片，散热性能优异
- 易于安装、升级和维护，打开机箱后即可轻松访问内部组件
- 预装 Windows 10 Enterprise（未激活），同时支持其他 Windows 操作系统和 Linux 操作系统

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
    <td>Intel® Core™ 第 11 代 i3 1115G4</td>
    <td>Intel® Core™ 第 11 代 i3 1125G4</td>
    <td>Intel® Core™ 第 11 代 i5 1135G7</td>
    <td>Intel® Core™ vPro® 第 11 代 i5 1145GRE</td>
    <td>Intel® Core™ vPro® 第 11 代 i7 1185GRE</td>
  </tr>
  <tr>
    <td>处理器核心/线程</td>
    <td>2C/4T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
  </tr>
  <tr>
    <td>协处理器</td>
    <td colspan="3">Microchip® ATSAMD21G18 32 位 ARM® Cortex-M0+ @ 48MHz</td>
    <td colspan="2">Raspberry Pi® RP2040 32 位双核 ARM Cortex-M0+ @ 133MHz</td>
  </tr>
  <tr>
    <td rowspan="3">内存</td>
    <td>技术</td>
    <td colspan="5">双通道 DDR4-3200</td>
  </tr>
  <tr>
    <td>容量</td>
    <td colspan="3">8GB；16GB（支持最高 64GB）</td>
    <td colspan="2">支持最高 64GB</td>
  </tr>
  <tr>
    <td>支持 ECC 内存</td>
    <td colspan="3">否</td>
    <td colspan="2">是</td>
  </tr>
  <tr>
    <td>图形</td>
    <td>控制器</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs (400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs (400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 96EUs (400-1300MHz)</td>
  </tr>
  <tr>
    <td rowspan="2">高级技术</td>
    <td>Intel® vPro®</td>
    <td colspan="3">否</td>
    <td colspan="2">是</td>
  </tr>
  <tr>
    <td>Intel® 全内存加密</td>
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
    <td colspan="5">M.2 E-Key（支持 PCIe 和 CNVi），Intel® Wi-Fi 6 AX201（可选）</td>
  </tr>
  <tr>
    <td>蓝牙</td>
    <td colspan="5">蓝牙 5.0，BLE（可选）</td>
  </tr>
  <tr>
    <td rowspan="4">显示</td>
    <td>LCD</td>
    <td colspan="5">eDP 40 针 4 通道连接器</td>
  </tr>
  <tr>
    <td>HDMI</td>
    <td colspan="5">1 x HDMI 2.0b，最高支持 4Kx2Kx24bpp@60Hz</td>
  </tr>
  <tr>
    <td>DP</td>
    <td colspan="5">1 x DP1.4a，7680x4320x24bpp@60Hz</td>
  </tr>
  <tr>
    <td>多显示</td>
    <td colspan="5">支持 4 个显示接口组合的同时显示</td>
  </tr>
  <tr>
    <td rowspan="7">外部 I/O</td>
    <td>以太网</td>
    <td colspan="5">2 x 2.5GbE LAN 端口（RJ45，支持 10/100/1000/2500 Mbps），Intel® i225</td>
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
    <td colspan="3">USB2.0 Type A x1；USB3.2 Type A x1</td>
    <td colspan="2">USB2.0 Type A x2；USB3.2 Type A x1</td>
  </tr>
  <tr>
    <td>LED</td>
    <td colspan="5">电源状态</td>
  </tr>
  <tr>
    <td>电源供应</td>
    <td colspan="5">1x5.5x2.5mm DC 插孔 / Wafer 2.0mm 8 针</td>
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
    <td colspan="5">1 x RS-232/422/485，1 x RS-232</td>
  </tr>
  <tr>
    <td>GPIO</td>
    <td colspan="3">28 针 Arduino 协处理器 2.54mm 接头</td>
    <td colspan="2">30 针 Raspberry Pi 协处理器 2.54mm 接头</td>
  </tr>
  <tr>
    <td>音频</td>
    <td colspan="5">Realtek 高保真音频，麦克风 + 耳机组合接口</td>
  </tr>
  <tr>
    <td>USB2.0</td>
    <td colspan="5">USB2.0 9 针接头 x2，480Mbps</td>
  </tr>
  <tr>
    <td>风扇</td>
    <td colspan="5">2 x 12V 4 线风扇接头，PWM 控制</td>
  </tr>
  <tr>
    <td>前面板控制</td>
    <td colspan="5">电源开关、重置、电源状态 LED、SATA 状态 LED</td>
  </tr>
  <tr>
    <td>S/PDIF</td>
    <td colspan="5">3 针 2.54mm 接头</td>
  </tr>
  <tr>
    <td>SATA 电源</td>
    <td colspan="5">WAFER4 针 2.0 间距连接器</td>
  </tr>
  <tr>
    <td>协处理器调试端口</td>
    <td colspan="5">6 针 0.5mm FPC 接头（SWD）</td>
  </tr>
  <tr>
    <td rowspan="4">扩展</td>
    <td>M.2 M-Key</td>
    <td colspan="5">1 x M-Key 2242/2280（PCIe 3.0 x4）</td>
  </tr>
  <tr>
    <td>M.2 E-Key</td>
    <td colspan="5">1 x E-Key 2230（PCIe 3.0 x1；USB2.0 x1；Intel CNVi）</td>
  </tr>
  <tr>
    <td>M.2 B-Key</td>
    <td colspan="5">1 x B-Key 2242/2252/2280（PCIe 3.0 x2；USB2.0 x1）</td>
  </tr>
  <tr>
    <td>高速 I/O</td>
    <td colspan="3">1 x PCIe x4 Gen4</td>
    <td colspan="2">1 x PCIe 3.0 x4/SMBus/LPC/USB 2.0/CPU GPIO 等</td>
  </tr>
  <tr>
    <td rowspan="2">电源</td>
    <td>供电电压</td>
    <td colspan="3">DC 插孔：12V</td>
    <td colspan="2">DC 插孔：12V-19V</td>
  </tr>
  <tr>
    <td>RTC 电池</td>
    <td colspan="5">锂电池 3V/210mAH</td>
  </tr>
  <tr>
    <td>认证</td>
    <td>EMC</td>
    <td colspan="5">CE、FCC、TELEC</td>
  </tr>
  <tr>
    <td rowspan="3">机械</td>
    <td>尺寸</td>
    <td colspan="5">132mm*124mm*233mm</td>
  </tr>
  <tr>
    <td>散热方案</td>
    <td colspan="5">热管组件/热扩散蒸汽腔组件</td>
  </tr>
  <tr>
    <td>重量</td>
    <td colspan="5">1800g</td>
  </tr>
</tbody>
</table>

## 比较

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
    <td>Intel® Core™ 第11代 i3 1115G4</td>
    <td>Intel® Core™ 第11代 i3 1125G4</td>
    <td>Intel® Core™ 第11代 i5 1135G7</td>
    <td>Intel® Core™ vPro® 第11代 i5 1145GRE</td>
    <td>Intel® Core™ vPro® 第11代 i7 1185GRE </td>
  </tr>
  <tr>
    <td>处理器核心/线程</td>
    <td>2核/4线程</td>
    <td>4核/8线程</td>
    <td>4核/8线程</td>
    <td>4核/8线程</td>
    <td>4核/8线程</td>
  </tr>
  <tr>
    <td>协处理器</td>
    <td colspan="3">Microchip® ATSAMD21G18 32位 ARM® Cortex-M0+ @ 48MHz </td>
    <td colspan="2">Raspberry Pi® RP2040 32位 双核 ARM Cortex-M0+ @ 133MHz</td>
  </tr>
  <tr>
    <td>Intel® vPro®</td>
    <td colspan="3">否</td>
    <td colspan="2">是</td>
  </tr>
  <tr>
    <td>Intel® 全内存加密</td>
    <td colspan="3">否</td>
    <td colspan="2">是</td>
  </tr>
  <tr>
    <td>图形</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 96EUs(400-1300MHz)</td>
  </tr>
  <tr>
    <td>内存</td>
    <td colspan="5">双通道 DDR4-3200（支持总容量最高64GB）</td>
  </tr>
  <tr>
    <td>支持ECC内存</td>
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
    <td colspan="3">USB Type-A(USB2.0 Type-A x1 ; USB3.2 Type-A x1);  HDMI; DP; 2.5GbE LAN 端口 x2; 音频插孔; DC 插孔(12V);</td>
    <td colspan="2"><div>
  USB Type-C(USB PD / USB 4.0 / Thunderbolt 4);<br />USB Type-A(USB2.0 Type-A x2 ; USB3.2 Type-A x1);  HDMI;DP; 2.5GbE LAN 端口 x2; 音频插孔; DC 插孔(12V-19V);
</div>
</td>
  </tr>
  <tr>
    <td>无线连接</td>
    <td colspan="5">WIFI, BLE 并支持 LTE/4G/5G/LoRaWAN</td>
  </tr>
</tbody>
</table>

## 硬件概览

reServer 有两个不同的版本：基础版和高性能版，它们的硬件配置有所不同。

### 基础版

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/09%20%E4%BD%8E%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reServer%20mainboard%20.png" alt="pir" width={1000} height="auto" /></p>

### 高性能版

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/09-%E9%AB%98%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

### 引脚信息

#### 8 针电源连接器
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/8P_power_connector.png" alt="pir" width={800} height="auto" /></p>

#### 28 针 Arduino 引脚
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/28P_arduino.png" alt="pir" width={800} height="auto" /></p>

#### 9 针 COM 引脚
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_COM_pinout.png" alt="pir" width={800} height="auto" /></p>

#### 9 针 USB2.0 引脚
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_USB2.0_pinout.png" alt="pir" width={800} height="auto" /></p>

#### 9 针前面板引脚
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_front_panel_pinout.png" alt="pir" width={800} height="auto" /></p>

## 尺寸

两个版本的尺寸相同。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/10-%E4%BD%8E%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

## 快速开始使用 reServer

如果您想以最快、最简单的方式开始使用 reServer，可以按照以下指南操作。

### 所需硬件

在开始使用 reServer 之前，您需要准备以下硬件：

- reServer
- 电源适配器（已提供）
- 外接显示器
- HDMI/DP 线缆
- 键盘和鼠标

### 硬件安装

在本部分中，我们将介绍如何安装或更换 reServer 内部的一些硬件。如果您不需要，请跳过此部分。
在阅读本部分之前，您可以按照页面末尾附带的 **组装指南手册** 访问 reServer 的主板。

#### DDR4 安装

您可以添加新的 DDR4 来扩展内存。双通道 SO-DIMM 插槽支持 DDR4-3200MT/s，总容量可达 64GB。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/ddr4.png" alt="pir" width={800} height="auto" /></p>

#### SSD 安装

M.2 M-Key 2242/2280（PCIe 3.0 x4）允许您添加 SSD。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20M-Key.png" alt="pir" width={800} height="auto" /></p>

#### WiFi 模块安装

您可以按照以下步骤添加 WiFi 模块。

- **步骤 1.** 从 M.2 M-Key 插槽中移除 SSD。

- **步骤 2.** 拆下 WiFi 天线线缆，并从 M.2 E-Key 中移除预装的 WiFi 模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20E-Key.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3.** 安装新的 WiFi 模块，并将 WiFi 天线线缆重新连接到模块。

- **步骤 4.** 将 SSD 重新安装到 M.2 M-Key 插槽。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20E-Key%20antenna.png" alt="pir" width={800} height="auto" /></p>

**注意：** reServer 配备了两个 2.4/5GHz WiFi 天线，您可以将天线连接到适配器上，该适配器与 reServer 内部 WiFi 模块的天线线缆相连，以获得更好的 WiFi 连接性能。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/antenna.png" alt="pir" width={800} height="auto" /></p>

#### 4G/5G/LoRaWAN 模块安装

reServer 支持在 M.2 B-Key 2242/2252/2280（PCIe 3.0 x2；USB2.0 x1）上安装 4G/5G/LoRaWAN 模块。**（reServer 不包含 4G/5G/LoRaWAN 模块）**
请按照以下步骤添加 4G/5G/LoRaWAN 模块。

- **步骤 1.** 将 4G/5G/LoRaWAN 模块安装到 M.2 B-Key 插槽。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20B-Key.png" alt="pir" width={800} height="auto" /></p>

- **步骤 2.** 将天线线缆连接到模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20B-Key%20antenna.png" alt="pir" width={800} height="auto" /></p>

**注意：** 您需要将标准 SIM 卡插入 micro SIM 卡插槽以启用 5G/4G。

#### HDD 安装

reServer 支持安装两个 3.5"/2.5" 内部硬盘驱动器以获得更多存储空间。**（reServer 不包含硬盘驱动器）**
请按照以下步骤安装硬盘驱动器。

- **步骤 1.** 拆下螺丝并拉出支架。

- **步骤 2.** 使用螺丝将硬盘固定到支架上。

- **步骤 3.** 将硬盘支架推下以连接硬盘与 SATA 接口。

- **步骤 4.** 使用螺丝固定硬盘支架。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/07.png" alt="pir" width height="auto" /></p>

### 硬件连接

在本部分中，我们将介绍 reServer 的接口连接。
reServer 有两个版本，请注意不同版本可能具有不同的接口。

#### 显示连接

reServer 有三种方法可以连接到显示器，其中第三种方法仅适用于高性能版本。
**方法 1.** HDMI 接口

**方法 2.** DP 接口

**方法 3.** USB Type-C（仅适用于高性能版本）

基础版
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/DIsplay%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

高性能版本  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20display.png" alt="pir" width={800} height="auto" /></p>

#### 键盘和鼠标连接

通过 USB 接口连接键盘和鼠标。基础版本提供一个 USB 3.2 接口和一个 USB 2.0 接口，而高性能版本提供一个 USB 3.2 接口和两个 USB 2.0 接口。

基础版本  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/USB%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

高性能版本  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20usb.png" alt="pir" width={800} height="auto" /></p>

#### 音频连接

对于基础版本，音频插孔位于左侧 I/O 面板；而对于高性能版本，音频插孔位于右侧 I/O 面板。

基础版本  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/Audio%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

高性能版本  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20audio.png" alt="pir" width={800} height="auto" /></p>

#### 电源连接

为 reServer 供电有两种方法，第二种方法仅适用于高性能版本。

**方法 1.** 简单地将 AC-DC 电源适配器（产品包装内附带）与 AC 电源线（产品包装外但仍在包装内）连接，然后将其连接到 reServer 的 12V DC 插孔。

**方法 2.** 将 USB Type-C 充电线（reServer 不附带）连接到 Thunderbolt 4 USB Type-C 接口（此接口仅适用于高性能版本）。

基础版本  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/Power%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

高性能版本  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20power.png" alt="pir" width={800} height="auto" /></p>

### 操作系统安装

对于所有版本的 reServer，已预装 Windows 10 Enterprise（未激活），您可以直接启动并激活操作系统。然而，reServer 仍然支持其他 Windows 操作系统以及 Linux 操作系统，因此您可以覆盖预装的操作系统，安装您需要的系统。

## 资源

- **[PDF]** [reServer 装配指南](https://files.seeedstudio.com/wiki/reServer/Assembly%20Guide%20of%20reServer.pdf)
- **[PDF]** [Atmel-SAMD21-数据手册](https://files.seeedstudio.com/wiki/reServer/wiki/Atmel-SAMD21-datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>