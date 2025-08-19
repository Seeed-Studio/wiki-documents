---
description: reComputer R1000 装配指南
title: reComputer R1000 装配指南
keywords:
  - Edge
  - reComputer R1000
  - 装配指南
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/recomputer_r1000_assembly_guide
last_update:
  date: 06/06/2024
  author: Evelyn Chen
---
# reComputer R1000 装配指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/recomputer_r1000_assembly.gif" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

reComputer R1000 支持多种物联网无线通信，包括 4G、LoRa®、Wi-Fi/BLE 和 Zigbee。它通过 M.2 插槽支持扩展 SSD 卡以增加存储空间，或安装 NPU 加速器以增强 AI 功能。此外，我们的硬件工程服务包括标志定制、包装品牌化、标签设计、固件烧录、镜像服务等，为您的特定需求提供全面支持。

本 Wiki 将向您展示如何组装和拆卸设备以安装外设组件，以及安装选项。

## 硬件准备
您需要准备以下硬件：

- reComputer R1000 x 1
- 配件
- 螺丝刀套装
  * 十字螺丝刀 + 3.5 bit
  * 十字螺丝刀 + 3.0 bit
  * 一字螺丝刀 - 2.5 bit

### 拆卸指南

按照以下步骤操作，可以帮助您顺利拆卸设备。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/Disassembly_guide.gif" /></div>

**步骤 1：** 拆下底部的四颗螺丝和侧面板上的接地螺丝：

- 使用合适的螺丝刀找到并拧下设备底部的四颗螺丝。
- 拆下并拧下侧面板上的接地螺丝。

**步骤 2：** 取下底板：

- 拆下螺丝后，小心地将底板从设备上取下。

**步骤 3：** 拆下塑料侧面板：

- 找到设备三侧的塑料侧面板。
- 轻轻撬开或拆下每个侧面板。如果面板较紧，您可能需要使用工具，但要小心不要损坏面板。

**步骤 4：** 注意启动开关的塑料板：

- 请注意其中一个面板上的启动开关，可能附有一个小塑料板。
- 确保在拆卸过程中该塑料板不会掉落或丢失。

**步骤 5：** 拆下铝制外壳：

- 拆下侧面板后，您可以接触到铝制外壳。
- 小心地将铝制外壳从设备上取下。

**步骤 6：** 拆下固定 PCB 的四颗螺丝

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass01.jpg" /></div>

### 安装 SSD

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/ssd.gif" /></div>

**步骤 1：** 按照拆卸指南拆下后盖。

**步骤 2：** 将 SSD 插入 M.2 插槽并锁紧螺丝。

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass02.jpg" /></div>

### 安装 Wi-Fi/BLE 天线

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/Wifi_and_ble.gif" /></div>

**步骤 1：** 按照[拆卸指南](/cn/recomputer_r1000_assembly_guide/#assembly--disassembly-guide)拆卸整个设备。

**步骤 2：** 根据下图将馈线从 CM4 模块连接到天线孔。

**步骤 3：** 组装设备以供使用。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass08.jpg" /></div>

### 安装 LTE 和 GNSS 天线

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/LTE.gif" /></div>

### 安装 4G/LoRa®/Zigbee 模块和天线

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/LoRa.gif" /></div>

**步骤 1：** 确保 Mini-PCIe 插槽的模块安装在 SSD 卡上方。

**步骤 2：** 将 4G 模块/LoRa® 模块/Zigbee 模块（根据“2.2.8”部分的每个插槽匹配关系）插入 Mini-PCIe 插槽并锁紧螺丝。

**步骤 3：** 按照下图安装馈线。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass03.jpg" /></div>

### 安装 TPM 2.0 模块

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/TPM2_0.gif" /></div>

**步骤 1：** 按照拆卸指南拆下后盖。

**步骤 2：** 将 TPM 2.0 模块插入 J13 插槽。

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass04.jpg" /></div>

### 安装 UPS 和 PoE 模块

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/UPS.gif" /></div>

**步骤 1：** 在 CM4 模块侧的板上安装 UPS 和 PoE 模块之前，按照提供的拆卸指南拆卸整个设备。

**步骤 2：**
- 使用两颗 PM2.0xL5.0 螺丝和 M2.0x5.0 支柱，将 UPS 模块固定在没有金属接触垫的两个孔上。
- 确保 UPS 模块正确对齐并使用提供的螺丝和支柱牢固固定。

**步骤 3：** 安装 PoE 模块
- 将 PoE 模块与板上的指定孔对齐。
- 小心地将 PoE 模块焊接到板上。由于板的紧凑性，在焊接时要小心，避免损坏附近的组件。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/POE-AE.gif" /></div>

:::note
请正确安装 PoE 模块，将白点朝内，靠近电容放置。
:::

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass05.jpg" /></div>

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/POE.png" /></div>

## 安装指南

### DIN 导轨安装指南

reComputer R1000 提供多种安装方式。包装中包含 DIN 导轨夹和安装螺钉。请按照图示正确将 DIN 导轨夹固定到设备侧面的安装孔上。螺钉固定牢固后，即可将设备安装到导轨上。

**步骤 1：** 将设备和导轨夹放置在标准型材导轨的上边缘，如图所示位置，并向下推设备。
**步骤 2：** 将设备的导轨夹从下方摆动穿过标准型材导轨。
**步骤 3：** 将设备向标准型材导轨方向推。您会听到设备卡入到位的声音。
<br />

*拆卸*
**步骤 1：** 向下推设备，直到导轨夹释放设备。
**步骤 2：** 将设备从标准型材导轨中摆出。
**步骤 3：** 将设备抬起并移开。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass06.jpg" /></div>

### 壁挂安装指南

垂直安装方法也适用于 reComputer R1000，但安装支架**未包含**在包装中，需要**额外购买**。

**步骤 1：** 将安装支架放置在设备背面。
**步骤 2：** 使用提供的螺钉固定支架。
**步骤 3：** 标记钻孔位置，在墙上钻出所需的孔，并使用两颗螺钉将设备固定到墙上。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass07.jpg" /></div>

## 配件清单

<div class="table-center">

<table>
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}><strong>项目</strong></td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><strong>产品</strong></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}><strong>产品名称</strong></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}><strong>SKU</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={4} style={{height: 18, width: '20%'}}>LoRa® 模块</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={4} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/47.png" /></td>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">区域可选 LoRaWAN 网关模块(SPI)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">区域可选 LoRaWAN 网关模块(SPI)-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">区域可选 LoRaWAN 网关模块(USB)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">区域可选 LoRaWAN 网关模块(USB)-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>LoRa® 天线</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/48.png" /></td>
      <td><a href="https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html" target="_blank" rel="noopener noreferrer">LoRa 天线套件 - 868-915 MHz</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Wi-Fi/BLE 天线</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/49.png" /></td>
      <td><a href="https://www.seeedstudio.com/Compute-Module-CM4-Antenna-kit-p-4717.html" target="_blank" rel="noopener noreferrer">Raspberry Pi Compute Module 4 天线套件</a></td>      
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Zigbee 模块</td>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}></td>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Mini-PCIe USB Zigbee 模块</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992005</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Zigbee 天线</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/50.png" /></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Zigbee 天线套件适用于 reComputer R</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={6} style={{height: 18, width: '20%'}}>4G 模块</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={6} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/51.png" /></td>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-AFXGA-Mini-PCIe 模块 - 适用于北美</a></td>    
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EUXGR-Mini-PCIe 模块 - 适用于欧洲、中东和泰国</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AUXGR-mini-PCIe-p-5885.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-AUXGR-Mini-PCIe 模块 - 适用于澳大利亚</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EFA-mini-PCIe-p-5824.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EFA-Mini-PCIe 模块 - 适用于泰国</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EMGA-mini-PCIe-p-5831.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EMGA-Mini-PCIe 模块 - 适用于马来西亚</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991234</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-JFA-mini-PCIe-p-5899.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-JFA-mini-PCIe</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991296</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>4G 天线</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/52.png" /></td>
      <td><a href="https://www.seeedstudio.com/4G-Antenna-Kit-for-reTerminal-DM-p-5713.html" target="_blank" rel="noopener noreferrer">4G 模块天线套件</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>GPS 天线</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/53.png" /></td>
      <td><a href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank" rel="noopener noreferrer">EC25 4G 模块 GPS 天线套件</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>UPS 超级电容</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/54.png" /></td>
      <td><a href="https://www.seeedstudio.com/SuperCAP-UPS-LTC3350-Module-p-5934.html" target="_blank" rel="noopener noreferrer">超级电容 UPS LTC3350 模块</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>加密芯片 TPM 2.0</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/55.png" /></td>
      <td><a href="https://www.seeedstudio.com/TPM2-0-Module-with-infineon-SLB9670-p-5711.html" target="_blank" rel="noopener noreferrer">TPM 2.0 模块，搭载英飞凌 SLB9670</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={4} style={{height: 18, width: '20%'}}>SSD 卡</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={4} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/56.png" /></td>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html" target="_blank" rel="noopener noreferrer">NVMe M.2 2280 SSD 1TB</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html" target="_blank" rel="noopener noreferrer">512GB NVMe M.2 PCle Gen3x4 2280 内置 SSD</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html" target="_blank" rel="noopener noreferrer">256GB NVMe M.2 PCle Gen3x4 2280 内置 SSD</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html" target="_blank" rel="noopener noreferrer">128GB NVMe M.2 PCle Gen3x4 2280 内置 SSD</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>PoE</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/57.png" /></td>
      <td><a href="https://www.seeedstudio.com/POE-Module-Kit-for-reTerminal-DM-p-5707.html" target="_blank" rel="noopener noreferrer">MQ7813T120 PoE 模块套件，适用于 reTerminal DM</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={2} style={{height: 18, width: '20%'}}>电源适配器</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={2} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/58.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html" target="_blank" rel="noopener noreferrer">电源适配器-美规</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061505</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">电源适配器-欧规</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061506</td>
    </tr>
  </tbody>
</table>

</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>