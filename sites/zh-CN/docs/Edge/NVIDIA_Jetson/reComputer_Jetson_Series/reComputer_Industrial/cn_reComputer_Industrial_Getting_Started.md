---
description: reComputer Industrial 入门指南
title: reComputer Industrial 入门指南
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Industrial_Getting_Started
sku: 110110190, 110110193, 110110188, 110110191, 110110189, 110110192, B802000101
last_update:
  date: 05/16/2023
  author: Lakshantha
createdAt: '2025-06-05'
updatedAt: '2026-06-27'
url: https://wiki.seeedstudio.com/cn/reComputer_Industrial_Getting_Started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# reComputer Industrial 入门指南

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png"/></div>

reComputer Industrial 系列提供包含 NVIDIA Jetson™ Xavier NX / Orin Nano / Orin NX 模组的完整系统，AI 性能范围从 20 TOPS 到 100 TOPS。预装 Jetpack 5.1.3，reComputer Industrial 简化了开发流程，非常适合构建视频分析、目标检测、自然语言处理、医学影像和机器人等应用，为智慧城市、安全、工业自动化、智能工厂等行业带来数字化转型。

reComputer Industrial 配备被动散热片并采用无风扇设计，非常适合在严苛环境中使用。被动散热片无需风扇即可实现高效散热，降低因灰尘或其他污染物导致元件故障的风险。无风扇设计还可降低噪音水平和功耗，适用于对噪音敏感的环境，并最大限度减少能源成本。

reComputer Industrial 具有 2 个 RJ45 GbE 接口，其中一个是 PoE PSE 接口，可为 IP 摄像头等设备提供以太网供电。这消除了单独电源的需求，使在缺乏现成电源插座的区域部署网络设备更加容易。另一个 GbE 接口用于连接到网络交换机或路由器，从而实现与网络上其他设备的通信并访问互联网。

:::note
可定制选项：Logo 品牌定制、包装和固件烧录。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>立即定制 ➜</font></span></strong></a>
</div>

## 特性

- **无风扇紧凑型 PC：** 热设计参考，支持更宽温度范围 -20 ~ 60°C，0.7m/s 气流
- **为工业接口而设计：** 2x RJ-45 GbE（1 个用于 POE-PSE 802.3 af）；1x RS-232/RS-422/RS-485；4x DI/DO；1x CAN；3x USB3.2；1x TPM2.0（可选模组）
- **混合连接：** 支持 5G/4G/LTE/LoRaWAN®（可选模组），带 1x Nano SIM 卡槽
- **灵活安装：** 桌面、DIN 导轨、壁挂、VESA
- **认证：** FCC、CE、RoHS、UKCA

## 规格

<table>
  <thead>
    <tr>
      <th colSpan={2}>Product Name</th>
      <th>reComputer Industrial J4012</th>
      <th>reComputer Industrial J4011</th>
      <th> reComputer Industrial J3011 </th>
      <th> reComputer Industrial J3010</th>
      <th>reComputer Industrial J2012</th>
      <th>reComputer Industrial J2011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>NVIDIA Jetson Module</td>
      <td>Orin NX 16GB</td>
      <td>Orin NX 8GB</td>
      <td>Orin Nano 8GB</td>
      <td>Orin Nano 4GB</td>
      <td>Xavier NX 16GB</td>
      <td>Xavier NX 8GB</td>
    </tr>
    <tr>
      <td colSpan={2}>SKU</td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html">110110191</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html">110110190</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html">110110193</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J3010-p-5686.html">110110192</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J2012-p-5685.html">110110189</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J2011-p-5683.html">110110188</a></td>
    </tr>
    <tr>
      <td rowSpan={6}>Processor System</td>
      <td>AI Performance</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
      <td colSpan={2}>21 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>1024-core NVIDIA Ampere architecture GPU with 32 Tensor Cores</td>
      <td>512-core NVIDIA Ampere architecture GPU with 16 Tensor Cores</td>
      <td colSpan={2}>384-core NVIDIA Volta™ GPU with 48 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8-core Arm® Cortex®-A78AE v8.2 64-bit CPU<br />2MB L2 + 4MB L3</td>
      <td colSpan={3}>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU<br />1.5MB L2 + 4MB L3</td>
      <td colSpan={2}>6-core NVIDIA Carmel ARM®v8.2 64-bit CPU, 6MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Memory</td>
      <td>16GB 128-bit LPDDR5<br />102.4GB/s</td>
      <td>8GB 128-bit LPDDR5<br />102.4GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>16GB 128-bit LPDDR4x<br />59.7GB/s</td>
      <td>8GB 128-bit LPDDR4x<br />59.7GB/s</td>
    </tr>
    <tr>
      <td>Video Encode</td>
      <td colSpan={2}>1*4K60 (H.265) | 3*4K30 (H.265) | 6*1080p60 (H.265) | 12*1080p30 (H.265)</td>
      <td colSpan={2}>由 1-2 个 CPU 核心支持的 1080p30</td>
      <td colSpan={2}>2*4K60 | 4*4K30 | 10*1080p60 | 22*1080p30 (H.265)<br /> 2*4K60 | 4*4K30 | 10*1080p60 | 20*108p30 (H.264)</td>
    </tr>
    <tr>
      <td>Video Decode</td>
      <td colSpan={2}>1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>1*4K60 (H.265) | 2*4K30 (H.265) | 5*1080p60 (H.265) | 11*1080p30 (H.265)</td>
      <td colSpan={2}>2*8K30 | 6*4K60 | 12*4K30 | 22*1080p60 | 44*1080p30 (H.265)<br /> 2*4K60 | 6*4K30 | 10*1080p60 | 22*1080p30 (H.264)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Storage</td>
      <td>eMMC<br /></td>
      <td><br />-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td colSpan={2}>16GB eMMC 5.1</td>
    </tr>
    <tr>
      <td>Expansion</td>
      <td colSpan={6}>M.2 Key M PCIe Gen4.0 SSD（包含 M.2 NVMe 2280 SSD 128G）</td>
    </tr>
    <tr>
      <td rowSpan={6}>I/O</td>
      <td>Networking</td>
      <td colSpan={6}>1* LAN1 RJ45 GbE PoE(PSE 802.3 af 15 W)<br />1* LAN2 RJ45 GbE (10/100/1000Mbps) </td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={6}>3* USB3.2 Gen1，1* USB2.0 Type C（设备模式），1* USB2.0 Type C 用于 Debug UART 和 RP2040</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={6}>4*DI，4*DO，3*GND_DI，2*GND_DO，1*GND_ISO，1*CAN<br /></td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={6}>1* DB9（RS232/RS422/RS485）</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan={6}>1*HDMI 2.0 Type A</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={6}>1* Nano SIM 卡槽</td>
    </tr>
    <tr>
      <td rowSpan={7}>Expansion</td>
      <td>Mini PCIe</td>
      <td colSpan={6}>Mini PCIe 用于 4G/LoRaWAN®&nbsp;&nbsp;（可选模组）<br /></td>
    </tr>
    <tr>
      <td>Wi-Fi</td>
      <td colSpan={6}>支持 SMD Wi-Fi/Bluetooth（可选模组）</td>
    </tr>
    <tr>
      <td>M.2 Key B </td>
      <td colSpan={6}>M.2 Key B 支持 4G/5G（可选模组）</td>
    </tr>
    <tr>
      <td>Fan</td>
      <td colSpan={6}>无风扇，被动散热片<br />1* 风扇连接器（5V PWM）</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={6}>1* TPM 2.0 接口（可选模组）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={6}>1* RTC 座（含 CR1220），1* RTC 2 针</td>
    </tr>
    <tr>
      <td>Camera</td>
      <td colSpan={6}>2* CSI（2-lane 15pin）</td>
    </tr>
    <tr>
      <td rowSpan={2}>Power</td>
      <td>Power Supply</td>
      <td colSpan={6}>DC 12V-24V 2 针端子块</td>
    </tr>
    <tr>
      <td>Power Adapter</td>
      <td colSpan={6}>19V 电源适配器（不含电源线）</td>
    </tr>
    <tr>
      <td rowSpan={3}>Mechanical<br /></td>
      <td>Dimensions (W x D x H)</td>
      <td colSpan={6}>159mm×155mm×57mm</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td colSpan={6}>1.57kg</td>
    </tr>
    <tr>
      <td>Installation</td>
      <td colSpan={6}>桌面、DIN 导轨、壁挂、VESA</td>
    </tr>
    <tr>
      <td rowSpan={4}>Environment</td>
      <td>Operating Temperature</td>
      <td colSpan={6}> -20 ~ 60°C，0.7m/s</td>
    </tr>
    <tr>
      <td>Operating Humidity</td>
      <td colSpan={6}>95% @ 40 °C（无冷凝）</td>
    </tr>
    <tr>
      <td>Vibration</td>
      <td colSpan={6}>3 Grms @ 5 ~ 500 Hz，随机，1 小时/轴</td>
    </tr>
    <tr>
      <td>Shock</td>
      <td colSpan={6}>50G 峰值加速度（11 毫秒）</td>
    </tr>
    <tr>
      <td colSpan={2}>OS</td>
      <td colSpan={6}>预装 Jetpack 5.1（及以上）（提供带有板级支持包的 Linux OS）</td>
    </tr>
    <tr>
      <td colSpan={2}>Certification</td>
      <td colSpan={6}>FCC、CE、RoHS、UKCA</td>
    </tr>
    <tr>
      <td colSpan={2}>Warranty</td>
      <td colSpan={6}>2 年</td>
    </tr>
  </tbody>
</table>

## 硬件概览

### 完整系统

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/3.jpg"/></div>

### 载板

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/4.jpg"/></div>

## 刷写 JetPack

reComputer Industrial 预装了 JetPack 5.1.3 和必要的驱动程序在一块 128GB SSD 上，其中包含 CUDA、CUDNN 和 TensorRT 等 SDK 组件。不过，如果你想将 Jetpack 重新刷写到这块 SSD 或新的 SSD 上，可以按照以下步骤进行。

:::note
如果你想在 reComputer Industrial 上使用 SSD，我们只推荐你选择 Seeed 提供的 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) 和 [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) 版本。
:::

### 前置准备

在开始使用 reComputer Industrial 之前，你需要准备以下硬件

- reComputer Industrial
- 随机附带的带电源线电源适配器（[US version](https://www.seeedstudio.com/AC-US-p-5122.html) 或 [EU version](https://www.seeedstudio.com/AC-EU-p-5121.html)）
- Ubuntu 主机电脑
- USB Type-C 数据传输线
- 外接显示器
- HDMI 线
- 键盘和鼠标

:::info
我们建议你使用物理的 Ubuntu 主机设备，而不是虚拟机。
请参考下表来准备主机设备。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="4"> Ubuntu 版本（主机电脑） </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 7.2</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> 对于 JetPack 7.2，Ubuntu 24.04 仅支持用于烧录和目标端组件安装。如果你需要主机端开发组件，请使用 Ubuntu 20.04 或 22.04。</p>
:::

### 进入强制恢复模式

现在你需要让 reComputer Industrial 板进入恢复模式，以便对设备进行烧录。

1. 使用 USB Type-C 线连接 **USB2.0 DEVICE** 接口和你的电脑。
2. 使用一根针插入 **RECOVERY** 孔中按下恢复按键，并保持按住。
3. 将随附的 **2-Pin 端子电源连接器** 连接到板上的电源接口，并连接随附的电源适配器和电源线以开启开发板。
4. 松开恢复按键。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/97.png"/></div>

:::note
请确保在按住 RECOVERY 按键的同时给设备上电，否则将无法进入恢复模式
:::

在 Ubuntu 主机电脑上，打开一个终端窗口并输入命令 **lsusb**。如果返回的内容中根据你使用的 Jetson SoM 出现以下任一输出，则说明开发板已进入强制恢复模式。

- 对于 Orin NX 16GB：**0955:7323 NVidia Corp**
- 对于 Orin NX 8GB：**0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB：**0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB：**0955:7623 NVidia Corp**

### 烧录到 Jetson

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Jetpack 5.1.1" label="Jetpack 5.1.1">

这里我们提供 2 种不同的烧录方法。

1. 下载我们已经准备好的完整系统镜像，其中包含 NVIDIA JetPack、硬件外设驱动并烧录到设备
2. 下载官方 NVIDIA L4T，使用随附的硬件外设驱动并烧录到设备

:::note
第一种方法的下载大小约为 14GB，第二种方法的下载大小约为 3GB。
:::

<Tabs>
<TabItem value="Method 1" label="Method 1">

- **步骤 1：** 将与你所使用开发板对应的系统镜像下载到 Ubuntu 电脑

<div class="table-center">
  <table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>设备</th>
      <th>镜像链接 1</th>
      <th>镜像链接 2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUhr3fzFqx9DmH83QrXmFAwBEpfC-VGsyBnqHSoOPPAzGQ?e=Wv7d8f" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EcXVegQs83tJpv3kmJPMmSEB8M9djK_gWgJapIJnOJQeUw?e=ntbXLi" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>F6623A277E538F309999107297405E1<br />378CF3791EA9FD19F91D263E3B4C88333</td>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbaTHCLEwfNOqAR1DH-IAWYB20HBEPG2G-IkPJ1dJJcWJw?e=2VYQXJ" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EStCSSWeyUtLkJXMj5Y6tXcBru2PIQNHLl6p2BZsRbzxjA?e=Gaaa6m" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>414DFE16703D0A2EE972DF1C77FCE2E<br />8B44BC71726BB6EE4B1439C2D0F19A653</td>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbQu844dGA5Fjn3n-320hmoBt6wngMrIv6fErKLEZI1GyQ?e=uSU6qb" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERgyc60CqY9Aog6BMW9-yqQBj8pMaakSFTzHHvb4edt_eg?e=9qFHKp" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>347AB7247ED83286BDFAEF84B49B84C<br />5F5B871AEE68192339EDE4773149D8737</td>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETnL5lrC6IBPqm6Lafx1nCMBJJjml1IrCagrHPGhxFpzxA?e=BBM0kl" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb7J_TSNsDBCrvc1RbSOmnoBqmjR9jYhkvZpdQJOzkH5KA?e=h4r74v" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>860EC8EB3245CB91E7C5C321B26333B<br />59456A3418731FEF73AE0188DF655EE46</td>
    </tr>
    <tr>
      <td>reComputer Industrial J2012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeD01G8dJ8pIm187oS_VX-sBu3SmD4LhaBmwVz7X4-n_Gw?e=x9ULSq" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Ef_fEAq0aA5JksfnEz62JKABfYTUzlTdOxkiKwoThp17xg?e=UlSs7A" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>821CF92AF1FE8A785689FAF4751615A<br />A30E7F0770B4FA23327DFAF2C8B53FDD7</td>
    </tr>
    <tr>
      <td>reComputer Industrial J2011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVYQRYavCVRJrHGz12qUPlIBdmK3hrjEyglRkuLhBSlYuA?e=SBnrTU" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EVVUAexfVKxDnjbUGtYrJhEB1He6ZXIAD4uriNP76fxbMg?e=kGYF6h" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>DAB8FC069E4C62434C77AE3A6BA13EE<br />FB30003C9A14BFE82DE879B88ACDD85FA</td>
    </tr>
  </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * 来自 Download1 和 Download2 的镜像文件是相同的。你可以选择下载速度更快的链接。
</p>

:::info
为了验证下载固件的完整性，你可以对比 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 以获取下载文件的 SHA256 哈希值。如果得到的哈希值与 wiki 中提供的 SHA256 哈希值一致，则说明你下载的固件是完整且未损坏的。
:::

上述镜像的源代码可以在[这里](https://github.com/Seeed-Studio/Linux_for_Tegra)找到

- **步骤 2：** 解压生成的文件

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **步骤 3：** 进入之前解压得到的文件目录，并按如下方式执行烧录命令

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始把系统镜像烧录到开发板。如果烧录成功，你会看到如下输出

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 4：** 使用板载的 HDMI 接口将开发板连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

之后，开发板会重启并准备就绪，可以开始使用了！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>
  </TabItem>
<TabItem value="Method 2" label="Method 2">

**下载并准备 NVIDIA L4T 和 rootfs**

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**下载并准备驱动**

- **步骤 1：** 将与你所使用开发板对应的驱动文件下载到 Ubuntu 电脑

<table>
  <thead>
    <tr>
      <th>Jetson 模组</th>
      <th>下载链接</th>
      <th>JetPack 版本</th>
      <th>L4T 版本</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB,<br />Orin Nano 8GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nx-8-16-nano-8-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nano-4-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>Jetson Xavier NX 8GB/ 16GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/xavier-nx-8-16-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
  </tbody>
</table>

- **步骤 2：** 将下载的外设驱动程序移动到与 **Linux_For_Tegra** 目录相同的文件夹中

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/125.png"/></div>

- **步骤 3：** 解压下载的驱动 `.zip` 文件。这里我们另外安装用于解压 `.zip` 文件所需的 **unzip** 软件包

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Replace xxxx with the driver file name
```

此时会询问是否替换文件。输入 A 并按 ENTER 键以替换必要的文件

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/126.png"/></div>

- **步骤 4：** 进入 **Linux_for_Tegra** 目录并按如下方式执行烧录命令

```sh
cd Linux_for_Tegra

# For Orin NX and Orin Nano
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0 recomputer-orin-industrial external

# For Xavier NX
sudo ADDITIONAL_DTB_OVERLAY_OPT="BootOrderNvme.dtbo" ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_l4t_t194_qspi_p3668.xml --no-systemimg" --network usb0  recomputer-xavier-nx-industrial external
```

现在将开始向板卡烧录系统镜像。如果烧录成功，你将看到如下输出

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 5：** 使用板载 HDMI 接口将板卡连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

之后，板卡会重启，你将看到如下界面

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **步骤 6：** 在设备中打开终端窗口，执行以下命令，设备将重启并准备就绪！

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

此外，如果你想安装 CUDA、cuDNN、TensorRT 等 SDK 组件，请执行以下命令

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

  </TabItem>
  </Tabs>

---

</TabItem>

<TabItem value="Jetpack 5.1.3" label="Jetpack5.1.3">

- **步骤 1：** 将与你所使用板卡对应的系统镜像下载到 Ubuntu PC 上

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>设备</th>
      <th>链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAJh3XDNNnbT7NU_WmR6d8-AV2KS89nk2raBrtbDX5lbRY" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>436017DA6FBA2EF910F5F6C5D80749FB53029EC5108A461101CA3A69C1F8CEC3</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCggS3uTiIzQqidauGapvXtAS8tiOaWRZtusAN1S6SXsTs?e=LLjnrY" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>9c590665723aa8847898f976070ecc120b936474262b360459627342c4c0c6f1</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAx3qELD5fvTKvYA8Bi-TwAAV5SJdxC6ok_lnwjqiw3Prg?e=MIcJng" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>fe3fe9b275156ddd9cde2b4fcf628122bf4a66e1ff1184cf6769be81ba6e4942</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBiL7sGB2_7RZs5FNIf2bikAXzJxCr6z1XA8fIkgqpzluA?e=dZYPSh" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>75de6440ca1c04f08b4356fee0d8e4a4ba1cb858f9fabb5bbc0eebd3c387c81d</th>
    </tr>
        <tr>
      <td>reComputer Industrial J2012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfB-onLVAIxFreZTCSpejYIBPX42dZoKnKrDm8ZC27DI_w?e=fAOXZr" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>B54CF2545A8ED8BFE115C439B0B427112BD882F03292B9F5C03AB55746C707C1</th>
    </tr>
        <tr>
      <td>reComputer Industrial J2011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXmfIDIx80hCk61-dZogyUwBe6uOlz0U6tZEW3i7WC2JBw?e=BLjUW3" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>11BDB47D06CA8409CFCEA109B8BACD9BB79A54A275D2664D6CF492BFEAD31131</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
要验证下载固件的完整性，你可以对比 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 以获取下载文件的 SHA256 哈希值。如果得到的哈希值与 wiki 中提供的 SHA256 哈希值一致，则说明你下载的固件是完整且未损坏的。
:::

:::info
上述镜像的源代码可以在[这里](https://github.com/Seeed-Studio/Linux_for_Tegra)找到。
:::

- **步骤 2：** 解压生成的文件

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **步骤 3：** 进入之前解压得到的文件目录，并按如下方式执行烧录命令

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始向板卡烧录系统镜像。如果烧录成功，你将看到如下输出

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 4：** 使用板载 HDMI 接口将 J401 连接到显示器，并完成初始配置设置：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据你的需求完成 **System Configuration**。
:::

</TabItem>

<TabItem value="Jetpack 6.0" label="Jetpack6.0">

- **步骤 1：** 将与你所使用板卡对应的系统镜像下载到 Ubuntu PC 上

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>设备</th>
      <th>链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbKZo6jvhR5MtP5hSB2mWIUBLkMB_pl4zCJoGhAbao5yQw?e=WmoPbO" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>6c1e5abbdd60f771cd5c1a6e82f4ce7dfd0448018af94926d0240b853badbaf0</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdScxnClMMZElyNJXLzqY5EBSXN9cyUnkkl4fWfsDhn0xg?e=XYZB6n" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>79c16c25602ebefa239402c23d0dcdae5ddc3eb23fdadb90654fbc34a1aa44dd</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Edt8dUapj7VCh5-X5ZgdeUIBjBSnx2wSweO-gjkMs1BxSw?e=Hi5rvU" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>7221185ba7f499d837b046e6f8b73c1c9f4e28cc76eb2068719370e00dcd3f42</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbKvTU_hdp9DjvFMMqi_RwkBC6LlpTtF_xfchhTtiV7fFg?e=pEhzOx" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>7b997786317b518f9762e0828a0ac411ef984bd9927a9eeb5f8a900b185627ba</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
要验证下载固件的完整性，你可以对比 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 以获取下载文件的 SHA256 哈希值。如果得到的哈希值与 wiki 中提供的 SHA256 哈希值一致，则说明你下载的固件是完整且未损坏的。
:::

:::info
上述镜像的源代码可以在[这里](https://github.com/Seeed-Studio/Linux_for_Tegra)找到。
:::

- **步骤 2：** 解压生成的文件

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **步骤 3：** 进入之前解压得到的文件目录，并按如下方式执行烧录命令

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始把系统镜像烧录到板卡上。如果烧录成功，你会看到如下输出

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 4：** 使用板载的 HDMI 接口将板卡连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

之后，板卡会重启并准备就绪，可以开始使用了！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>
</TabItem>

<TabItem value="Jetpack 6.1" label="Jetpack6.1">

- **步骤 1：** 将与你所使用板卡对应的系统镜像下载到 Ubuntu 电脑上

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>设备</th>
      <th>链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNMocOFBZNPqqC-W9uiIM4BgYUw-ZL0pk6juOVPFd_vqg?e=C8ldYX" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>6A2B3A71EE77E7000034351020FBF9A5260F944FB30B5DE672BF7897DEE87B5A</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfYrDXxD_oRCuk5nv8WmtqIBPY9FjkEHiAmsZDpvDj-sfQ?e=qxV5MG" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>EC94A1F9E10D07CE2C78D8C1B742575A84DA543CCD95564D8E0BEC823C0CA514</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeOq0sfMDhBEqZPX-ti_gJ0BzUdSGeFf5RrSdxFnQ70aNQ?e=GVr10a" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>547E541E40A133A2CDEB3FAC399850ABC108325BBF109771420DDBCAF19E5E29</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXK1GomjByJKnmt3OdE5Vq8BSqzYZm1MY_yD18YjmRplLw?e=dIWPKA" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>B7F400C225423C8BC4C00A5915C3C634D2D7B15145FE0735479E6AD7613D07E5</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
为了验证下载固件的完整性，你可以对比 SHA256 哈希值。

在 Ubuntu 主机上打开终端，运行命令 `sha256sum <File>` 获取下载文件的 SHA256 哈希值。如果结果与 wiki 中提供的 SHA256 哈希值一致，则说明你下载的固件是完整且未损坏的。
:::

:::info
上述镜像的源代码可以在[这里](https://github.com/Seeed-Studio/Linux_for_Tegra)找到。
:::

- **步骤 2：** 解压生成的文件

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **步骤 3：** 进入之前解压得到的文件目录，并按如下方式执行烧录命令

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始把系统镜像烧录到板卡上。如果烧录成功，你会看到如下输出

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 4：** 使用板载的 HDMI 接口将 J401 连接到显示器，并完成初始配置设置：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据你的需求完成**系统配置**。
:::

</TabItem>

<TabItem value="Jetpack 6.2" label="Jetpack6.2">

:::danger
如果你使用的是 **Orin NX 16GB/8GB** 模块，**请不要启用 MAXN SUPER 模式**。
J4011/J4012 的散热能力不足以支持该模式，强行启用可能会对模块造成永久性损坏。
:::

- **步骤 1：** 将与你所使用板卡对应的系统镜像下载到 Ubuntu 电脑上

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>设备</th>
      <th>链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB2G7x8LjMaTZ_JSm8QTKebAfjjE1zNMkx9967kemKxPdw?e=hdGqgd" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>adf524fa3c77f32da9a12bb875ec4b24<br />8da9dad4e4cce9c51641e1cabca4ab88</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAj4lhkKh6xTIe49xxjoViRAdXQciVaQMQmvpeAuo_ng6k?e=nGj5c7" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>38c8a5cbf2df922725824503e76605d4<br />43111e7ffec1db9eb3de4fccc7d54c21</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBUOqMK6XUtQL30glQY9r0jAeyJSw9AMIaGOzh5jsgSrAc?e=iRMDpG" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>2bd6ebb246f5b967a64b0fb10a4e85ac<br />4de9e40951d1fdde9fc69025525d8d5a</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
为了验证下载固件的完整性，你可以对比 SHA256 哈希值。

在 Ubuntu 主机上打开终端，运行命令 `sha256sum <File>` 获取下载文件的 SHA256 哈希值。如果结果与 wiki 中提供的 SHA256 哈希值一致，则说明你下载的固件是完整且未损坏的。
:::

:::info
上述镜像的源代码可以在[这里](https://github.com/Seeed-Studio/Linux_for_Tegra)找到。
:::

:::note
请注意，由于启用 `super mode` 后功耗和发热量增加，[reComputer Industrial J4011](https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html) 和 [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html) 在 JetPack 6.2 下无法在最高模式下稳定运行。因此，只有 J4012（Orin NX 16GB）适用于 JetPack 6.2，而不推荐 J4011（Orin NX 8GB）。
我们目前正在设计新版本的 reComputer，敬请期待！
:::

- **步骤 2：** 解压生成的文件

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **步骤 3：** 进入之前解压得到的文件目录，并按如下方式执行烧录命令

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始把系统镜像烧录到板卡上。如果烧录成功，你会看到如下输出

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 4：** 使用板载的 HDMI 接口将板卡连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据你的需求完成**系统配置**。
:::

- **步骤 4：** 使用板载的 HDMI 接口将 J401 连接到显示器，并完成初始配置设置：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据你的需求完成**系统配置**。
:::

</TabItem>

<TabItem value="Jetpack 7.2" label="Jetpack7.2">

- **步骤 1：** 将与你所使用板卡对应的系统镜像下载到 Ubuntu 电脑上

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>设备</th>
      <th>链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBfReHmaDICTY_-byQpDlSOAXzoeJxfBtyuMYKgIKn5pqo?e=kum4Aa" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>51035f2fee6a383a973250f1efcc2ea7<br />7c083dc4f3e7661541c5fdc579bc9f9d</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC2tUVw9b3HTqtmb7QI6Bi5AZS9iz9O9lXJyPlI07R5XUY?e=yY7o3T" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>dd03129ba599101972eb2ea75eaa2e5e<br />3b203d04130dbf6aaf4683461587945f</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQClwzLEoHNhR5r0RVE9G5H8Aa6Tc4-uBwOJNP-eDi4gSMI?e=8v78Ro" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>2bacc1a2577819630702901f2200e2e38<br />a905eb292a71e63532b5056a9e73f87</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQD1SrMagx31RoPYJRTfH0anAS_G9TCSJckK1pV_DdYFFPU?e=K0QfUg" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>b0a1466b3b0c7582a9d398109f53e507<br />92a6526fc51b5b1b9ddb1c04bdb52692</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
为了验证下载的固件完整性，你可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 以获取下载文件的 SHA256 哈希值。如果得到的哈希值与 wiki 中提供的 SHA256 哈希值一致，则说明你下载的固件是完整且未被篡改的。
:::

:::info
上述镜像的源代码可以在[这里](https://github.com/Seeed-Studio/Linux_for_Tegra)找到。
:::

- **步骤 2：** 解压生成的文件

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **步骤 3：** 进入之前解压得到的文件目录，并按如下方式执行烧录命令

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在系统镜像将开始烧录到板卡上。如果烧录成功，你会看到如下输出

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 4：** 使用板载 HDMI 接口将板卡连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据你的需求完成 **System Configuration**。
:::

</TabItem>

</Tabs>

<!-- Code END -->

## 硬件与接口使用

若想进一步了解如何使用 reComputer Industrial 板上的所有硬件和接口，我们建议你参考我们准备的相关 wiki 文档。

- [reComputer Industrial J20 硬件与接口使用](https://wiki.seeedstudio.com/cn/reComputer_Industrial_J20_Hardware_Interfaces_Usage)
- [reComputer Industrial J40、J30 硬件与接口使用](https://wiki.seeedstudio.com/cn/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage)

## 资源

- [reComputer Industrial 规格书](https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-datasheet.pdf)
- [reComputer Industrial 参考指南](https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson 设备与载板对比](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reComputer Industrial 3D 文件](https://files.seeedstudio.com/products/NVIDIA/Industrial/reComputer-Industrial.stp)
- [Seeed Jetson 系列产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 系列产品对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson 设备一页概览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
