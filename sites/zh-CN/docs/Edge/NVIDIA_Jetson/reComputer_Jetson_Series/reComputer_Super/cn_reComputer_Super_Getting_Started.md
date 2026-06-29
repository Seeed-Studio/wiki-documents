---
description: reComputer Super 入门指南
title: reComputer Super 入门指南
keywords:
  - reComputer Super
  - reComputer Super Getting Started
  - Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /recomputer_jetson_super_getting_started
sku: E2025032601,114110314,114110312,114110313,114110311
last_update:
  date: 06/19/2025
  author: Yaohui
createdAt: '2025-03-26'
updatedAt: '2026-06-26'
url: https://wiki.seeedstudio.com/cn/recomputer_jetson_super_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# reComputer Super 入门指南

<div align="center">
  <img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png"/>  
</div>

reComputer Super 系列为 reComputer Classic 提供了强劲升级，在 AI 性能方面带来高达 1.7 倍的提升，达到 157 TOPS。该系列包含搭载 Jetson Orin Nano（11410311、11410312）和 Jetson Orin NX（11410313、11410314）的型号。
它面向开发与量产双重场景设计，集成了丰富的接口，包括 M.2 Key E/M、双 RJ45 以太网、Mini-PCIe、4xUSB 3.2、HDMI 2.1、4xCSI 和 CAN。预装 Jetpack 6.2 和 Linux OS BSP，可实现开箱即用、快速推向市场。
它还支持广泛的 LLM 与 Physical AI 框架，例如 NVIDIA、Hugging Face、ONNX、PyTorch 和 ROS2/1，可在边缘侧无缝运行，并将这些多模态能力与机器人应用相结合，助力 Physical AI 开发。

:::note
可定制选项：Logo 品牌定制、包装和固件烧录。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>立即定制 ➜</font></span></strong></a>
</div>

## 主要特性  

### 🚀 ​**性能提升**  

- 相比 reComputer Classic，​**AI 性能提升 1.7 倍**，可提供 ​**157 TOPS**  
- 由 ​**Jetson Orin Nano**（型号：11410311、11410312）和 ​**Jetson Orin NX**（型号：11410313、11410314）驱动  

### 🔌 ​**丰富的连接与接口**  

- ​**M.2 Key E/M** + ​**Mini-PCIe**，便于扩展  
- ​**双 RJ45 以太网** 接口，支持高速网络  
- ​**4x USB 3.2**、​**HDMI 2.1**、​**4x CSI**（摄像头串行接口）  
- 支持 ​**CAN 总线**，适用于工业/机器人应用  

### 🛠️ ​**面向开发与量产**  

- 预装 ​**Jetpack 6.2** 和 ​**Linux OS BSP**，支持开箱部署  
- 与以下框架无缝集成边缘 AI：  
  - ​**NVIDIA**、​**Hugging Face**、​**ONNX**、​**PyTorch**  
  - 面向机器人应用的 ​**ROS2/1**  
- 支持 ​**多模态 AI** 和 ​**Physical AI** 开发  

### 🤖 ​**面向边缘 AI 与机器人优化**  

- 在边缘侧融合 ​**LLM（大语言模型）** 能力与 ​**Physical AI**  
- 非常适合机器人、工业自动化和实时 AI 推理  
- 通过预配置的软件栈加速 ​**产品上市**  

:::tip

### ⚠️ 电源与配件指南  

#### 1. ​**电源适配器**  

- ​**Jetson Orin Nano**：12V 5A（5525 圆孔电源接口）  
- ​**Jetson Orin NX**：19V 4.74A（5525 圆孔电源接口）  
- 始终使用 ​**官方适配器** 并满足供电要求。  

#### 2. ​**交流电源线**  

- 使用 ​**符合所在地区标准** 的三叶草电源线。  

#### 3. ​**配件**  

- 仅使用 ​**官方推荐** 的配件（如摄像头、无线模块），以获得最佳性能与兼容性。

:::

## 规格参数

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin Super 系统模块</th>
    </tr>
    <tr>
      <th>规格</th>
      <th>reComputer Super J3010</th>
      <th>reComputer Super J3011</th>
      <th>reComputer Super J4011</th>
      <th>reComputer Super J4012</th>
    </tr>
    <tr>
      <td>模块</td>
      <td>NVIDIA Jetson Orin™ Nano 4GB</td>
      <td>NVIDIA Jetson Orin™ Nano 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 16GB</td>
    </tr>
    <tr>
      <td>AI 性能</td>
      <td>34 TOPS</td>
      <td>67 TOPS</td>
      <td>117 TOPS</td>
      <td>157 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512 核 NVIDIA Ampere 架构 GPU，带 16 个 Tensor Core</td>
      <td colSpan={3}>1024 核 NVIDIA Ampere 架构 GPU，带 32 个 Tensor Core</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6 核 Arm® Cortex®-A78AE v8.2 64 位 CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6 核 Arm® Cortex®-A78AE v8.2 64 位 CPU 1.5MB L2 + 4MB L3</td>
      <td>8 核 Arm® Cortex®-A78AE v8.2 64 位 CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU 最大频率</td>
      <td colSpan={2}>1.7 GHz（MAXN_SUPER）</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>内存</td>
      <td>4GB 64 位 LPDDR5<br />34 GB/s</td>
      <td>8GB 128 位 LPDDR5<br />68 GB/s</td>
      <td>8GB 128 位 LPDDR5 102.4GB/s</td>
      <td>16GB 128 位 LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>DL 加速器</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>视频编码器</td>
      <td colSpan={2}>1080p30，由 1–2 个 CPU 核心支持</td>
      <td colSpan={2}>1x 4K60（H.265）| 3x 4K30（H.265）<br />6x 1080p60（H.265）| 12x 1080p30（H.265）</td>
    </tr>
    <tr>
      <td>视频解码器</td>
      <td colSpan={2}>1x 4K60（H.265）<br />2x 4K30（H.265）<br />5x 1080p60（H.265）<br />11x 1080p30（H.265）</td>
      <td colSpan={2}>1x 8K30（H.265）<br />2x 4K60（H.265）<br />4x 4K30（H.265）<br />9x 1080p60（H.265）<br />18x 1080p30（H.265）</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td colSpan={5}>最多支持 4 路摄像头<br />（通过虚拟通道可达 8 路）<br />8 通道 MIPI CSI-2<br />D-PHY 2.1（最高 20Gbps）</td>
    </tr>
    <tr>
      <td>机械尺寸</td>
      <td colSpan={5}>69.6mm x 45mm<br />260 针 SO-DIMM 连接器</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>载板</th>
    </tr>
    <tr>
      <td>存储</td>
      <td colSpan={4}>1x M.2 KEY M PCIe（内置 1 块 M.2 NVMe 2280 128G SSD）</td>
    </tr>
    <tr>
      <td rowSpan={3}>网络</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E，用于 WiFi/Bluetooth 模块</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan={3}>1x mini-PCIe，用于 LTE 4G 模块</td>
    </tr>
    <tr>
      <td>以太网</td>
      <td colSpan={3}>2x RJ45 千兆以太网</td>
    </tr>
    <tr>
      <td rowSpan={11}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A（5Gbps）；<br />1x USB 2.0 Type-C（设备模式/调试）；</td>
    </tr>
    <tr>
      <td>摄像头</td>
      <td colSpan={3}>4x mipi CSI（2 通道 15-Pin）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1x CAN（4 针排针）</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan={3}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan={3}>1x 4 针风扇接口（5V PWM）；<br />1x 4 针风扇接口（12V PWM）；</td>
    </tr>
    <tr>
      <td>扩展接口</td>
      <td colSpan={3}>1x 40 针扩展排针；<br />1x 12 针控制与 UART 排针；</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2 针；<br />1x RTC 座</td>
    </tr>
    <tr>
      <td>LED</td>
      <td colSpan={3}>2x LED（PWR 和 ACT）</td>
    </tr>
    <tr>
      <td>针孔按键</td>
      <td colSpan={3}>1x PWR；<br />1x RESET；</td>
    </tr>
    <tr>
      <td>拨码开关</td>
      <td colSpan={3}>1x REC</td>
    </tr>
    <tr>
      <td>天线孔</td>
      <td colSpan={3}>4x 天线孔</td>
    </tr>
    <tr>
      <td>电源</td>
      <td colSpan={4}>12–19V 5525 圆孔直流电源接口 </td>
    </tr>
    <tr>
      <td>Jetpack 版本</td>
      <td colSpan={4}>Jetpack 6.2 </td>
    </tr>
    <tr>
      <td>机械尺寸</td>
      <td colSpan={4}>130mm x 120mm x 66mm</td>
    </tr>
    <tr>
      <td>安装方式</td>
      <td colSpan={4}>桌面、壁挂</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td colSpan={4}>-10℃~60℃</td>
    </tr>
    <tr>
      <td>质保</td>
      <td colSpan={4}>2 年</td>
    </tr>
    <tr>
      <td>认证</td>
      <td colSpan={4}>CE、FCC、RoHS、REACH、Telec、KC、振动测试（GB/T 2423）</td>
    </tr>
  </tbody>
</table>
</div>

## 刷写 JetPack 操作系统

### 支持的模块

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### 前置准备

- Ubuntu 主机电脑
- reComputer Super
- USB Type-C 数据传输线

:::info

我们建议使用物理 Ubuntu 主机设备，而不是虚拟机。
请参考下表准备主机环境。

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

<p><strong>注意：</strong>对于 JetPack 7.2，Ubuntu 24.04 仅支持刷写和目标端组件安装；如果需要主机开发组件，请使用 Ubuntu 20.04 或 22.04。</p>

:::

### 准备 Jetpack 镜像

在这里，我们需要在 Ubuntu 主机上下载与所使用 Jetson 模块对应的系统镜像：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack 版本</th>
      <th>Jetson 模组</th>
      <th>下载链接 1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>7.2</td>
      <td> Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCV69WYpn_UQJdspFy9nF_RAasSxjXtRsD-9tSaG0JmlOM?e=9F5lLm">下载</a></td>
      <td>0978be490c5ff7c1648317240e8f00d7<br />6b2d025ed30a945249eaa69112a047c8</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDFEKDfgr0CS7jHtF-JwR0KAZC0l4XMAUKFW4Tsq2960iU?e=PI5PkJ">下载</a></td>
      <td>22a21d0ee9abdceb812e06ac399d8ca<br />5f14a3880fdf989c876223e72b21f4de6</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCGFV45fF3ZQY8l084qj5JHAaRDJdUOkgfpCodzXowNI5c?e=KkELx1">下载</a></td>
      <td>7613332f8eeb315a0d9d51744a8f0a9<br />e8e11e92e091d2a06ad609235a54f7c72</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDt08wmY21ATJaU8NZ0vAzUAYi1CjW17NXVMd0NdC5qRAk?e=CSOkBf">下载</a></td>
      <td>5c66fcbf8f4bcb21477ada08c78796f<br />69524ccc6eccf929fdd9f026e948482f1</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC_1-Pv5_FDR4n5j9gQV5KQAZ_mvUQAiacz_5QTE0xdeQ8?e=LkQBPH">下载</a></td>
      <td>7a1f2085f50d77e5d86d3f01ccdc1255<br />c90a7c7d22a6ab7e4c4e3263e3148670</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCkqeSMa1GUQ57Y0K-pz0GtAYgobLanXDHP_d-rJIAzkcY?e=VqEnca">下载</a></td>
      <td>d26cbf4e16b9d5879e4b737754f65bb0<br />ea485b98760a1aa0657e07054efd8877</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAuSOue4x97QKJGLUkBabdzAamlCy6twJd68P69GlaTzws?e=hw82Sw">下载</a></td>
      <td>55a559dc6736650d45c2d787265c7e2c<br />36cd2d7f233ae58b00364aec7d82455c</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAdI1ka4kNkRb8wipNloxXOAUAyCwTYci47z_eLpjvh1iQ?e=9YQ5nm">下载</a></td>
      <td>51f816d57dedd6e2305acd0ae8e0ffdc<br />19aec7319e351b7a70489f7eab8d69c6</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
JetPack 镜像文件较大，下载可能需要约 60 分钟。请耐心等待下载完成。
:::

:::info
要验证已下载固件的完整性，可以对比 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 以获取下载文件的 SHA256 哈希值。如果得到的哈希值与本 wiki 中提供的 SHA256 哈希值一致，则说明你下载的固件是完整且未损坏的。
:::

### 进入强制恢复模式

:::info
在继续安装步骤之前，我们需要确保开发板处于强制恢复模式。
:::

<details>

<summary> 分步说明 </summary>

**步骤 1.** 将拨码开关切换到 RESET 模式。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/flash.jpg"/>  
</div>

**步骤 2.** 连接电源线，为 reComputer Super 上电。

**步骤 3.** 使用 USB Type-C 数据线将 Super 连接到 Ubuntu 主机电脑。

**步骤 4.** 在 Linux 主机电脑上打开终端窗口并输入命令 `lsusb`。如果返回的内容中根据你使用的 Jetson SoM 出现以下任一输出，则说明开发板已进入强制恢复模式。

- 对于 Orin NX 16GB：**0955:7323 NVidia Corp**
- 对于 Orin NX 8GB：**0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB：**0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB：**0955:7623 NVidia Corp**

下图为 Orin Nano 8GB 的示例

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### 刷写到 Jetson

**步骤 1：** 解压下载的镜像文件：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# JetPack 6.2 示例: sudo tar xpf mfi_recomputer-super-orin-nx-16g-j401-6.2-36.4.3-2026-02-05.tar.gz
# JetPack 7.2 示例: sudo tar xpf mfi_recomputer-super-orin-nx-16g-7.2.0-39.2.0-2026-06-19.tar.gz
```

**步骤 2：** 执行以下命令，将 JetPack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# 示例: cd mfi_recomputer-orin-super-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，你将看到如下输出

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能会运行 2-10 分钟。
:::

**步骤 3：** 使用 HDMI 线连接显示器，并完成 reComputer Super 系统的初始化配置：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
请根据你的需求完成 **System Configuration**。
:::


## 资源

- [reComputer Super 规格书](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
- [原理图](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
- [3D 文件](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
- [机械文档 - reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
- [机械文档 - reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)
- [Seeed Nvidia Jetson 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 一页纸简介](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
