---
description: reComputer R1100 组装指南
title: reComputer R1100 组装指南
keywords:
- Raspberry pi
- Edge Controller
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer3.jpg
slug: /cn/recomputer_r1100_assembly_guide
last_update:
  date: 2/27/2024
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

reComputer R1100 支持多种物联网无线通信，包括 4G、LoRa®、Wi-Fi/BLE 和 Zigbee。它允许通过 M.2 接口扩展 SSD 卡以增加存储空间或添加 NPU 加速器以实现 AI 功能。此外，我们的硬件工程服务包括徽标定制、包装品牌化、标签制作、固件刷写、镜像服务等，为您的特定需求提供全面支持。

本 Wiki 将向您展示如何组装和拆卸设备以安装外围组件，以及安装选项。

## 硬件先决条件

您需要准备以下硬件

- reComputer R1000 x 1
- 配件
- 螺丝刀套装
  - 十字 + 3.5 位
  - 十字 + 3.0 位
  - 一字 - 2.5 位

## 设备拆卸指南

按照以下步骤安全地**拆卸设备**，避免任何问题：

**步骤 1：拆除底部的四颗螺丝**

- 找到并使用合适的螺丝刀拧下设备底部的**四颗螺丝**。

**步骤 2：取下底板**

- 螺丝拆除后，小心地从设备上**抬起底板**。

**步骤 3：拆除塑料侧板**

- 识别设备三侧的**塑料侧板**。
- 轻轻地**撬开或解开**每个面板。如果它们安装得很紧，您可能需要工具，但要小心不要损坏它们。

**步骤 4：注意启动开关塑料板**

- 注意其中一个面板上的**启动开关**——它可能有一个**小塑料板**连接。
- 确保在拆卸过程中这个板子不会掉落或丢失。

**步骤 5：拆除铝制外壳**

- **侧板拆除**后，您现在可以接触到**铝制外壳**。
- 小心地**抬起并拆除**铝制外壳。

**步骤 6：拆除固定 PCB 的螺丝**

- 最后，**拧下四颗螺丝**，这些螺丝固定着**PCB（印刷电路板）**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dissambly_guide.PNG" style={{width:600, height:'auto'}}/></div>

## 安装 Nano SIM 卡

**步骤 1：拆除后盖**

- 按照**拆卸指南**小心地拆除后盖。

**步骤 2：插入 Nano SIM 卡**

- 将**Nano SIM 卡**放入指定的**SIM 卡槽**中。

在将后盖重新固定到位之前，确保 SIM 卡正确对齐。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/sim_dis.PNG" style={{width:600, height:'auto'}}/></div>## 安装 SSD  

## 安装固态硬盘

**步骤 1：拆除后盖**  

- 按照**拆卸指南**小心地取下后盖。  

**步骤 2：插入 SSD**  

- 将 **SSD** 牢固地插入 **M.2 插槽**。  
- 拧紧**螺丝**将其锁定到位。  

在重新组装设备之前，确保 SSD 已正确就位。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ssd_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 安装 Wi-Fi/BLE 天线  

**步骤 1：拆卸设备**  

- 按照**第 4.1 节 - 拆卸指南**小心地拆卸设备。  

**步骤 2：连接天线**  

- 将 **CM4 模块**的**馈线**连接到**天线孔**，参考提供的图示进行正确对齐。  

**步骤 3：重新组装设备**  

- 天线牢固连接后，**重新组装**设备以正常运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wifi_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 组装 4G/LoRa®/Zigbee 模块和天线

**步骤 1：检查模块位置**  

- 确保 **Mini-PCIe 插槽模块**位于 **SSD 卡上方**。  

**步骤 2：安装模块**  

- 将 **4G、LoRa® 或 Zigbee 模块**插入相应的 **Mini-PCIe 插槽**，按照**第 2.2.8 节**的匹配指南进行操作。  
- 通过**拧紧螺丝**将模块固定到位。  

**步骤 3：连接天线**  

- 将**馈线**连接到模块，参考提供的图示进行正确定位。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/lora_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 组装 TPM 2.0 模块

**步骤 1：拆除后盖**  

- 按照**拆卸指南**拆下后盖。  

**步骤 2：安装 TPM 2.0 模块**  

- 将 **TPM 2.0 模块**牢固地插入 **J13 插槽**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/tpm_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 组装 UPS 和 PoE 模块

**步骤 1：拆卸设备**  

- 安装前，按照**拆卸指南****完全拆卸设备**。  

**步骤 2：安装 UPS 模块**  

- 使用**两颗 PM2.0xL5.0 螺丝**和 **M2.0x5.0 支柱**将 **UPS 模块**固定到**指定孔位**（无金属接触垫）。  
- 确保 **UPS 模块****正确对齐**并用提供的螺丝和支柱牢固固定。  

**步骤 3：安装 PoE 模块**  

- 将 **PoE 模块**与电路板上的**指定插槽**对齐。  
- 小心地将 **PoE 模块****焊接**到电路板上，确保精确操作以防止损坏附近的组件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ups_dis.PNG" style={{width:600, height:'auto'}}/></div>

## 安装指南

### DIN 导轨安装指南

reComputer R1100 支持多种安装方式，包括 **DIN 导轨安装**。包装中包含 **DIN 导轨夹**和**安装螺丝**。按照图示将 DIN 导轨夹连接到设备侧面的安装孔。固定后，您可以将设备安装到安装导轨上。  

#### 安装步骤

- **定位设备：**  
  - 如图所示，将设备和**导轨夹**放置在标准 **DIN 导轨**的**上边缘**。  
  - 将设备**向下推**以正确对齐。  

- **固定导轨夹：**  
  - 从下方将**导轨夹**摆动穿过 **DIN 导轨**轮廓。  

- **锁定到位：**  
  - 将设备**推向导轨**直到听到**咔嗒声**，表示已牢固安装。  

#### 拆卸步骤

- **释放锁定：**  
  - 将设备**向下推**直到被**导轨夹**释放。  

- **从导轨分离：**  
  - 将设备从 **DIN 导轨**中**摆出**。  

- **提起并移除：**  
  - 将设备**向上提起**以完全从安装导轨上移除。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dinmount.PNG" style={{width:600, height:'auto'}}/></div>

### 壁挂安装指南

reComputer R1100 支持**垂直壁挂安装**，但包装中**不包含****安装支架**，必须单独购买。  

#### 安装步骤

- **安装支架：**  
  - 将**安装支架**放置在设备的**背面**。  

- **固定支架：**  
  - 使用**随附的螺丝**固定**支架**。  

- **安装到墙上：**  
  - 在墙上标记**钻孔位置**。  
  - 钻出所需的**孔**。  
  - 使用**两颗螺丝**将设备固定到墙上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wallmount.PNG" style={{width:600, height:'auto'}}/></div>

## 配件清单

<div class="table-center">
<table >
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
      <td><a href="https://www.seeedstudio.com/Compute-Module-CM4-Antenna-kit-p-4717.html" target="_blank" rel="noopener noreferrer">树莓派计算模块 4 天线套件</a></td>
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
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>reComputer R 专用 Zigbee 天线套件</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={6} style={{height: 18, width: '20%'}}>4G 模块</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={6} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/51.png" /></td>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-AFXGA-Mini-PCIe 模块 - 适用于北美地区</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EUXGR-Mini-PCIe 模块 - 适用于欧洲、中东、非洲和泰国地区</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AUXGR-mini-PCIe-p-5885.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-AUXGR-Mini-PCIe 模块 - 适用于澳大利亚地区</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EFA-mini-PCIe-p-5824.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EFA-Mini-PCIe 模块 - 适用于泰国地区</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EMGA-mini-PCIe-p-5831.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EMGA-Mini-PCIe 模块 - 适用于马来西亚地区</a></td>
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
      <td><a href="https://www.seeedstudio.com/SuperCAP-UPS-LTC3350-Module-p-5934.html" target="_blank" rel="noopener noreferrer">SuperCAP UPS LTC3350 模块</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>加密芯片 TPM 2.0</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/55.png" /></td>
      <td><a href="https://www.seeedstudio.com/TPM2-0-Module-with-infineon-SLB9670-p-5711.html" target="_blank" rel="noopener noreferrer">TPM 2.0 模块（配备英飞凌 SLB9670）</a></td>
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
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html" target="_blank" rel="noopener noreferrer">256GB NVMe M.2 PCle Gen3x4 2280 内置固态硬盘</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html" target="_blank" rel="noopener noreferrer">128GB NVMe M.2 PCle Gen3x4 2280 内置固态硬盘</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>PoE</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/57.png" /></td>
      <td><a href="https://www.seeedstudio.com/POE-Module-Kit-for-reTerminal-DM-p-5707.html" target="_blank" rel="noopener noreferrer">MQ7813T120 PoE 模块套件适用于 reTerminal DM</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={2} style={{height: 18, width: '20%'}}>电源适配器</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={2} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/58.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html" target="_blank" rel="noopener noreferrer">电源适配器-美式</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061505</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">电源适配器-欧式</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061506</td>
    </tr>
  </tbody>
</table>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
