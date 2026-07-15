---
description: reComputer R1100 装配指南
title: reComputer R1100 装配指南
keywords:
  - Raspberry pi
  - 边缘控制器
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer3.jpg
slug: /recomputer_r1100_assembly_guide
last_update:
  date: 2/27/2024
  author: Kasun Thushara
createdAt: '2023-05-22'
updatedAt: '2025-09-15'
url: https://wiki.seeedstudio.com/cn/recomputer_r1100_assembly_guide/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

reComputer R1100 支持多种物联网无线通信方式，包括 4G、LoRa®、Wi-Fi/BLE。它允许通过 M.2 插槽扩展 SSD 以增加存储空间，或扩展 NPU 加速器以增强 AI 能力。此外，我们的硬件工程服务包括 Logo 定制、包装品牌化、标签定制、固件烧录、镜像服务等，为您的特定需求提供全面支持。

本 Wiki 将向您展示如何装配和拆卸设备以安装外设组件，以及安装选项。

## 硬件准备

您需要准备以下硬件

- reComputer R1100 x 1
- 配件
- 螺丝刀套装
  - 十字 + 3.5 批头
  - 十字 + 3.0 批头
  - 一字 - 2.5 批头

## 设备拆卸指南

按照以下步骤操作，可安全地**拆卸设备**而不会出现任何问题：  

**步骤 1：卸下底部的四颗螺丝**  

- 使用合适的螺丝刀，找到并拧下设备底部的**四颗螺丝**。  

**步骤 2：取下底板**  

- 螺丝卸下后，小心地将设备的**底板抬起并取下**。  

**步骤 3：拆下塑料侧板**  

- 找到设备三侧的**塑料侧板**。  
- 轻轻**撬起或解锁**每一块侧板。如果装配较紧，您可以借助工具，但要注意不要损坏侧板。  

**步骤 4：注意启动开关的塑料片**  

- 注意其中一块侧板上的**启动开关**——它可能带有一块**小塑料片**。  
- 确保这块塑料片在拆卸过程中不会掉落或丢失。  

**步骤 5：拆下铝制外壳**  

- 在**侧板拆下**后，您即可接触到**铝制外壳**。  
- 小心地**抬起并取下**铝制外壳。  

**步骤 6：拆下固定 PCB 的螺丝**  

- 最后，**拧下固定 PCB（印刷电路板）的四颗螺丝**。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dissambly_guide.PNG" style={{width:600, height:'auto'}}/></div>

## 安装 Nano SIM 卡

**步骤 1：拆下后盖**  

- 按照**拆卸指南**小心拆下后盖。  

**步骤 2：插入 Nano SIM 卡**  

- 将 **Nano SIM 卡**插入指定的**SIM 卡槽**中。  

在重新装回后盖之前，确保 SIM 卡已正确对齐并插好。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/sim_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 安装 SSD  

**步骤 1：拆下后盖**  

- 按照**拆卸指南**小心取下后盖。  

**步骤 2：插入 SSD**  

- 将 **SSD**牢固地插入 **M.2 插槽**中。  
- 拧紧**螺丝**将其固定到位。  

在重新装配设备之前，确保 SSD 已正确插入并就位。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ssd_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 安装 Wi-Fi/BLE 天线  

**步骤 1：拆卸设备**  

- 按照**第 4.1 节 - 拆卸指南**小心拆解设备。  

**步骤 2：连接天线**  

- 将 **CM4 模组**上的**馈线**连接到**天线孔**，并参考提供的示意图进行正确对齐。  

**步骤 3：重新装配设备**  

- 当天线连接牢固后，**重新装配**设备以恢复正常使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wifi_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 装配 4G/LoRa® 模组和天线

**步骤 1：检查模组位置**  

- 确保 **Mini-PCIe 插槽模组**位于**SSD 卡的上方**。  

**步骤 2：安装模组**  

- 将 **4G、LoRa®** 插入相应的 **Mini-PCIe 插槽**，并参考**第 2.2.8 节**中的匹配指南。  
- 通过**拧紧螺丝**将模组固定到位。  

**步骤 3：连接天线**  

- 将**馈线**连接到模组上，并参考提供的示意图进行正确定位。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/lora_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 装配 TPM 2.0 模组

**步骤 1：拆下后盖**  

- 按照**拆卸指南**拆下后盖。  

**步骤 2：安装 TPM 2.0 模组**  

- 将 **TPM 2.0 模组**牢固地插入 **J13 插座**中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/tpm_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 装配 UPS 和 PoE 模组

**步骤 1：拆卸设备**  

- 在安装之前，按照**拆卸指南**先**拆卸整个设备**。  

**步骤 2：安装 UPS 模组**  

- 使用 **两颗 PM2.0xL5.0 螺丝**和 **M2.0x5.0 支柱**，将 **UPS 模组**固定在**无金属接触焊盘的指定孔位**上。  
- 确保 **UPS 模组**已**正确对齐**，并使用提供的螺丝和支柱牢固固定。  

**步骤 3：安装 PoE 模组**  

- 将 **PoE 模组**与板上的**指定插槽**对齐。  
- 小心地将 **PoE 模组焊接**到电路板上，操作要精确，以防损坏附近元件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ups_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 安装指南

### DIN 导轨安装指南

reComputer R1100 支持多种安装方式，包括**DIN 导轨安装**。包装内已包含 **DIN 导轨卡扣**和**安装螺丝**。请按照示意图将 DIN 导轨卡扣固定到设备侧面的安装孔上。固定完成后，即可将设备安装到导轨上。  

#### 安装步骤

- **放置设备：**  
  - 如图所示，将设备和**导轨卡扣**放置在标准**DIN 导轨**的**上边缘**。  
  - 向下**按压设备**以使其正确对齐。  

- **固定导轨卡扣：**  
  - 将**导轨卡扣**从下方向上摆动穿过 **DIN 导轨**型材。  

- **锁定到位：**  
  - 将设备**推向导轨**，直到听到**咔哒声**，表示已牢固安装。  

#### 拆卸步骤

- **释放锁扣：**  
  - 将设备**向下按压**，直到被**导轨卡扣**释放。  

- **从导轨上取下：**  
  - 将设备从 **DIN 导轨**上**向外摆出**。  

- **抬起并移除：**  
  - 将设备**向上抬起**，完全从导轨上移除。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dinmount.PNG" style={{width:600, height:'auto'}}/></div>

### 壁挂安装指南

reComputer R1100 支持**垂直壁挂安装**，但**安装支架** **不包含**在包装内，需要单独购买。  

#### 安装步骤

- **安装支架：**  
  - 将**安装支架**放置在设备**背面**。  

- **固定支架：**  
  - 使用**随附螺丝**将**支架**固定好。  

- **安装到墙面：**  
  - 在墙面上标记**钻孔位置**。  
  - 钻出所需的**孔位**。  
  - 使用**两颗螺丝**将设备固定到墙上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wallmount.PNG" style={{width:600, height:'auto'}}/></div>

## 配件清单

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}><strong>序号</strong></td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><strong>产品</strong></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}><strong>产品名称</strong></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}><strong>SKU</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={4} style={{height: 18, width: '20%'}}>LoRa® 模组</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={4} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/47.png" /></td>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">可选区域 LoRaWAN 网关模组（SPI）-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">可选区域 LoRaWAN 网关模组（SPI）-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">区域可选 LoRaWAN 网关模块（USB）-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">区域可选 LoRaWAN 网关模块（USB）-EU868</a></td>
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
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={6} style={{height: 18, width: '20%'}}>4G 模块</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={6} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/51.png" /></td>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-AFXGA-Mini-PCIe 模块 - 适用于北美</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EUXGR-Mini-PCIe 模块 - 适用于 EMEA 和泰国</a></td>
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
      <td><a href="https://www.seeedstudio.com/4G-Antenna-Kit-for-reTerminal-DM-p-5713.html" target="_blank" rel="noopener noreferrer">适用于 4G 模块的 4G 天线套件</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>GPS 天线</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/53.png" /></td>
      <td><a href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank" rel="noopener noreferrer">适用于 EC25 4G 模块的 GPS 天线套件</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>UPS 超级电容</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/54.png" /></td>
      <td><a href="https://www.seeedstudio.com/SuperCAP-UPS-LTC3350-Module-p-5934.html" target="_blank" rel="noopener noreferrer">SuperCAP UPS LTC3350 模块</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>加密芯片 TPM 2.0</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/55.png" /></td>
      <td><a href="https://www.seeedstudio.com/TPM2-0-Module-with-infineon-SLB9670-p-5711.html" target="_blank" rel="noopener noreferrer">带 infineon SLB9670 的 TPM 2.0 模块</a></td>
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
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html" target="_blank" rel="noopener noreferrer">电源适配器 - 美规</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061505</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">电源适配器 - 欧规</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061506</td>
    </tr>
  </tbody>
</table>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
