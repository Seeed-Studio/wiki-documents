---
description: reComputer Super 入门指南
title: reComputer Super 入门指南
keywords:
  - reComputer Super
  - reComputer Super 入门
  - Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /cn/recomputer_jetson_super_getting_started
last_update:
  date: 06/19/2025
  author: Yaohui
---

# reComputer Super 入门指南
reComputer Super 系列在 reComputer Classic 的基础上进行了性能提升，AI 性能高达 157 TOPS，提升幅度达 1.7 倍。该系列包括搭载 Jetson Orin Nano（11410311, 11410312）和 Jetson Orin NX（11410313, 11410314）的型号。
它专为开发和生产设计，配备了丰富的接口，包括 M.2 Key E/M、双 RJ45 以太网、Mini-PCIe、4x USB 3.2、HDMI 2.1、4x CSI 和 CAN。预装 Jetpack 6.2 和 Linux OS BSP，支持即刻投入市场。
此外，它还支持广泛的 LLM 和物理 AI 框架，如 NVIDIA、Hugging Face、ONNX、PyTorch 和 ROS2/1，能够在边缘设备上无缝运行，甚至将这些多模态能力与机器人应用相结合，丰富物理 AI 的开发。

<div align="center">
  <img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>


## 主要特点  

### 🚀 ​**性能提升**  
- ​**AI 性能提升 1.7 倍**，达到 ​**157 TOPS**  
- 搭载 ​**Jetson Orin Nano**（型号：11410311, 11410312）和 ​**Jetson Orin NX**（型号：11410313, 11410314）  

### 🔌 ​**丰富的连接性与接口**  
- ​**M.2 Key E/M** + ​**Mini-PCIe**，支持扩展  
- ​**双 RJ45 以太网**端口，支持高速网络  
- ​**4x USB 3.2**，​**HDMI 2.1**，​**4x CSI**（摄像头串行接口）  
- ​**CAN 总线**，支持工业/机器人应用  

### 🛠️ ​**适用于开发与生产**  
- 预装 ​**Jetpack 6.2** 和 ​**Linux OS BSP**，开箱即用  
- 无缝集成边缘 AI 框架：  
  - ​**NVIDIA**，​**Hugging Face**，​**ONNX**，​**PyTorch**  
  - ​**ROS2/1**，支持机器人应用  
- 支持 ​**多模态 AI** 和 ​**物理 AI** 开发  

### 🤖 ​**优化的边缘 AI 与机器人**  
- 在边缘设备上融合 ​**LLM（大语言模型）** 与 ​**物理 AI**  
- 适用于机器人、工业自动化和实时 AI 推理  
- 通过预配置的软件栈加速 ​**市场投放**  

:::tip

### ⚠️ 电源与配件指南  

#### 1. ​**电源适配器**  
- ​**Jetson Orin Nano**：12V 5A（5525 圆孔插头）  
- ​**Jetson Orin NX**：19V 4.74A（5525 圆孔插头）  
- 始终使用 ​**官方适配器**，并满足电源要求。  

#### 2. ​**交流电源线**  
- 使用 ​**符合地区标准** 的三叶草电源线。  

#### 3. ​**配件**  
- 仅使用 ​**官方推荐** 的配件（如摄像头、无线模块），以确保最佳性能和兼容性。

:::

## 规格

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin 超级模块</th>
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
      <td>512核 NVIDIA Ampere 架构 GPU，带 16 个 Tensor 核心</td>
      <td colSpan={3}>1024核 NVIDIA Ampere 架构 GPU，带 32 个 Tensor 核心</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6核 Arm® Cortex®-A78AE v8.2 64位 CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6核 Arm® Cortex®-A78AE v8.2 64位 CPU 1.5MB L2 + 4MB L3</td>
      <td>8核 Arm® Cortex®-A78AE v8.2 64位 CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU 最大频率</td>
      <td colSpan={2}>1.7 GHz (MAXN_SUPER)</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>内存</td>
      <td>4GB 64位 LPDDR5<br />34 GB/s</td>
      <td>8GB 128位 LPDDR5<br />68 GB/s</td>
      <td>8GB 128位 LPDDR5 102.4GB/s</td>
      <td>16GB 128位 LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>深度学习加速器</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>视频编码器</td>
      <td colSpan={2}>1080p30 支持 1-2 个 CPU 核心</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>视频解码器</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td colSpan={5}>支持最多 4 个摄像头<br />(通过虚拟通道支持 8 个)<br />8 通道 MIPI CSI-2<br />D-PHY 2.1 (最高 20Gbps)</td>
    </tr>
    <tr>
      <td>机械规格</td>
      <td colSpan={5}>69.6mm x 45mm<br />260针 SO-DIMM 连接器</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>载板</th>
    </tr>
    <tr>
      <td>存储</td>
      <td colSpan={4}>1x M.2 KEY M PCIe (包含 M.2 NVMe 2280 SSD 128G)</td>
    </tr>
    <tr>
      <td rowSpan={3}>网络</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E 用于 WiFi/蓝牙模块</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan={3}>1x mini-PCIe 用于 LTE 4G 模块</td>
    </tr>
    <tr>
      <td>以太网</td>
      <td colSpan={3}>2x RJ45 千兆以太网</td>
    </tr>
    <tr>
      <td rowSpan={11}>I/O</td>
      <td>USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (5Gbps); <br />1x USB 2.0 Type-C (设备模式/调试);</td>
    </tr>
    <tr>
      <td>摄像头</td>
      <td colSpan={3}>4x mipi CSI(2通道 15针)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1 x CAN(4针头)</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan={3}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan={3}>1x 4针风扇连接器 (5V PWM); <br />1x 4针风扇连接器 (12V PWM);</td>
    </tr>
    <tr>
      <td>扩展端口</td>
      <td colSpan={3}>1x 40针扩展头;<br />1x 12针控制和 UART 头;</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2针;<br />1x RTC 插槽</td>
    </tr>
    <tr>
      <td>LED</td>
      <td colSpan={3}>2x LED(电源和活动指示)</td>
    </tr>
    <tr>
      <td>针孔按钮</td>
      <td colSpan={3}>1x 电源;<br />1x 重置;</td>
    </tr>
    <tr>
      <td>DIP 开关</td>
      <td colSpan={3}>1x 录制</td>
    </tr>
    <tr>
      <td>天线孔</td>
      <td colSpan={3}>4x 天线孔</td>
    </tr>
    <tr>
      <td>电源</td>
      <td colSpan={4}>12-19V 5525 圆柱 DC 插孔</td>
    </tr>
    <tr>
      <td>Jetpack 版本</td>
      <td colSpan={4}>Jetpack 6.2</td>
    </tr>
    <tr>
      <td>机械尺寸</td>
      <td colSpan={4}>130mm x 120mm x 66mm</td>
    </tr>
    <tr>
      <td>安装方式</td>
      <td colSpan={4}>桌面，壁挂</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td colSpan={4}>-10℃~60℃</td>
    </tr>
    <tr>
      <td>保修</td>
      <td colSpan={4}>2 年</td>
    </tr>
    <tr>
      <td>认证</td>
      <td colSpan={4}>CE,FCC,RoHS,REACH,Telec, KC, 振动测试(GB/T 2423)</td>
    </tr>
  </tbody>
</table>
</div>

## Flash JetPack 操作系统

### 支持的模块
- [NVIDIA® Jetson Orin™ Nano 模块 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html) 
- [NVIDIA® Jetson Orin™ Nano 模块 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer) 
- [NVIDIA® Jetson Orin™ NX 模块 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html) 
- [NVIDIA® Jetson Orin™ NX 模块 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html) 

### 前置条件

- Ubuntu 主机电脑
- reComputer Super
- USB Type-C 数据传输线

:::info

我们建议您使用物理的 Ubuntu 主机设备，而不是虚拟机。
请参考下表准备主机设备。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="3"> Ubuntu 版本 (主机电脑) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### 准备 Jetpack 镜像

在这里，我们需要根据所使用的 Jetson 模块下载对应的系统镜像到 Ubuntu 主机电脑：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack 版本</th>
      <th>Jetson 模块</th>
      <th> GMSL </th>
      <th>下载链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQiC_is_O2tEkvFzu-3SrWYBFdcQr0zZRUf81lkjnXpnkQ?e=f3ISaO">下载</a></td>
      <td>8FF204A65C006717ED45241186C14B4 <br />FAA8ACE5BEBCDCE755F94C3CBF1311C38</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbEYa6n_P6pCh1TQbVBSpcQBZlFVm_-il3sqXEBDGpdPJA?e=S1dgfv">下载</a></td>
      <td>7EC06C0D17E33AE43D3C69EED791F64<br />CB9CFDC497E01D525E18EBAC1547A0236</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EevZ9hO7BfhDuJvDPYIdHGkBGhrKcWgCyAuTQu1gpHsz4g?e=xbXfbL">下载</a></td>
      <td>06B175484220DA7A63CC7CDAAE339F7E<br />FF8997180AF1C4B836D1098CBD8A169D</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeIg8k2osZFAuPzOlcO-FtIBdhbgULGQrsQOg4uUrXoK4w?e=uo29A8">下载</a></td>
      <td> CF37D028D6466DCC13201367E6358A6<br />9B7B5305CAE2A2B785E3ECFD3D8C66304</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6 镜像文件大小约为 **14.1GB**，下载大约需要 60 分钟。请耐心等待下载完成。
:::

:::info
为了验证下载的固件完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机电脑上，打开终端并运行命令 `sha256sum <文件>` 来获取下载文件的 SHA256 哈希值。如果生成的哈希值与 Wiki 中提供的 SHA256 哈希值一致，则说明您下载的固件是完整且无损的。
:::

### 进入强制恢复模式

:::info
在继续安装步骤之前，我们需要确保开发板处于强制恢复模式。
:::

<details>

<summary> 分步操作 </summary>

**步骤 1.** 将开关切换到 RESET 模式。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/flash.jpg"/>  
</div>

**步骤 2.** 通过连接电源线为 reComputer Super 供电。

**步骤 3.** 使用 USB Type-C 数据传输线将 Super 连接到 Ubuntu 主机电脑。

**步骤 4.** 在 Linux 主机电脑上，打开终端窗口并输入命令 `lsusb`。如果返回的内容包含以下输出之一（根据您使用的 Jetson SoM），则说明开发板已进入强制恢复模式。

- 对于 Orin NX 16GB: **0955:7323 NVidia Corp**
- 对于 Orin NX 8GB: **0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB: **0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB: **0955:7623 NVidia Corp**

以下图片为 Orin Nano 8GB 的示例：

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### 刷写到 Jetson

**步骤 1:** 解压下载的镜像文件：

```bash
cd <镜像文件路径>
sudo tar xpf mfi_xxxx.tar.gz
# 示例: sudo tar xpf mfi_recomputer-super-orin-nx-16g-j401-6.2-36.4.3-2025-05-22.tar.gz
```

**步骤 2:** 执行以下命令，将 Jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，您将看到以下输出：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能运行 2-10 分钟。
:::

**步骤 3:** 使用 HDMI 线连接显示器，并完成 reComputer Super 系统的初始化配置：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
请根据您的需求完成 **系统配置**。
:::



## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>