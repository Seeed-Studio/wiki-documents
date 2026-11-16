---
description: "开始使用 reComputer Robotics J401：规格、Orin Nano 和 NX 模组、JetPack 7.2 刷机、硬件概览和首次启动检查。"
title: 开始使用 reComputer Robotics
tags:
  - J401-Robotics 载板
  - Jetson
  - 机器人
  - reComputer
  - reComputer Robotics
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics_2.webp
slug: /recomputer_robotics_j401_getting_started
sku: 100071398, 114110310, 100026552
last_update:
  date: 10/19/2026
  author: Zibo
createdAt: '2025-08-06'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/recomputer_robotics_j401_getting_started/
---
<div style={{ textAlign: "justify" }}>
reComputer Robotics J401 是一款紧凑型、高性能的边缘 AI 载板，专为高级机器人应用设计。它兼容 Super/MAXN 模式下的 NVIDIA Jetson Orin Nano/Orin NX 模组，可提供高达 157 TOPS 的 AI 性能。板载丰富的连接选项——包括双千兆以太网口、用于 5G 和 Wi-Fi/BT 模组的 M.2 插槽、6 个 USB 3.2 接口、CAN、GMSL2（通过可选扩展）、I2C 和 UART——可作为强大的机器人“大脑”，处理来自各类传感器的复杂数据。预装 JetPack 6 和 Linux BSP，确保无缝部署。​
</div>

<div align="center">
  <img alt="带有 NVIDIA Jetson Orin Nano / Orin NX 标识、前面板接口可见的 reComputer Robotics J401 外壳" width ="600" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

<!-- 购买链接 -->

## 特性

- **坚固的硬件设计**：紧凑型、高性能边缘 AI 计算机，搭载 Super/MAXN 模式下的 NVIDIA® Jetson™ Orin™ NX 16GB 模组，提供高达 157 TOPS 的 AI 性能。
- **面向机器人应用的多种接口**：包括双 RJ45、用于 5G/Wi-Fi/BT 模组的 M.2 插槽、6x USB 3.2、2x CAN、GMSL2（需另购）、I2C 和 UART，可作为强大的机器人“大脑”。
- **软件配置**：预装 JetPack 6.2 和 Linux BSP，便于无缝部署。
- **应用与优势**：非常适合自主机器人快速开发，借助开箱即用的接口和优化的 AI 框架，加速产品上市时间。
- **宽工作温度范围**：在 25W 模式下可在 -20°C 至 60°C 范围内可靠运行，在 40W 模式下可在 -20°C 至 50°C 范围内可靠运行。

## 规格

### 载板规格

<table border="1" cellPadding="8" cellSpacing="0">
  <thead>
    <tr>
      <th>类别</th>
      <th>项目</th>
      <th>详情</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowSpan="1">存储</th>
      <td>M.2 KEY M PCIe</td>
      <td>1x M.2 KEY M PCIe（内含 M.2 NVMe 2280 SSD 128G）</td>
    </tr>
    <tr>
      <th rowSpan="3">网络</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E，用于 WiFi/Bluetooth 模组</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>1x M.2 Key B，用于 5G 模组</td>
    </tr>
    <tr>
      <td>以太网</td>
      <td>2x RJ45 千兆以太网</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A（5Gbps）；<br />1x USB 3.0 Type-C（Host/DP 1.4）；<br />1x USB 2.0 Type-C（Device 模式/调试）</td>
    </tr>
    <tr>
      <td>摄像头</td>
      <td>1x 4 合 1 GMSL2（mini fakra）（可选扩展板）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0（XT30(2+2)）；<br />3x CAN1（4-Pin GH 1.25 排针）</td>
    </tr>
    <tr>
      <td>显示</td>
      <td>1x DP1.4（Type C Host）</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART 4-Pin GH 1.25 排针</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C 4-Pin GH 1.25 排针</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td>1x 4-Pin 风扇接口（5V PWM）；<br />1x 4-Pin 风扇接口（12V PWM）</td>
    </tr>
    <tr>
      <td>扩展端口</td>
      <td>1x 摄像头扩展排针（用于 GMSL2 板）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin；<br />1x RTC 插座</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED（PWR、ACT 和用户 LED）</td>
    </tr>
    <tr>
      <td>针孔按键</td>
      <td>1x PWR；<br />1x RESET</td>
    </tr>
    <tr>
      <td>DIP 开关</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>天线孔</td>
      <td>5x 天线孔</td>
    </tr>
    <tr>
      <th rowSpan="1">电源</th>
      <td colSpan="2">19-54V XT30(2+2)（附带 XT30 转 5525 直流插头线缆）</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpack 版本</th>
      <td colSpan="2">预装 JetPack 6；支持 JetPack 7.2</td>
    </tr>
    <tr>
      <th rowSpan="3">机械特性</th>
      <td>尺寸（宽 x 深 x 高）</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td>1100g</td>
    </tr>
    <tr>
      <td>安装方式</td>
      <td>桌面、壁挂</td>
    </tr>
    <tr>
      <th rowSpan="1">工作温度</th>
      <td colSpan="2">-20℃~60℃（25W 模式）；<br />-20℃~55℃（40W 模式）；<br />-20℃~50℃（MAXN 模式）；<br />（搭配带风扇的 reComputer Robotics 散热器）</td>
    </tr>
    <tr>
      <th rowSpan="1">质保</th>
      <td>2 年</td>
    </tr>
    <tr>
      <th rowSpan="1">认证</th>
      <td>RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## 硬件概览

<div align="center">
  <img alt="reComputer Robotics J401 前面板，标注了 CAN0 和 CAN1" width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114110308_1.jpeg"/>  
</div>

<div align="center">
  <img alt="J401 载板背面视图，标注了 Orin 模组、2x XT30、CAN、UART、IIC 排针以及 5V/12V PWM 风扇接口" width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-1.jpeg"/>  
</div>

<div align="center">
  <img alt="J401 载板俯视图，标注了 USB、RTC、M.2 Key B/E/M 插槽、RJ45、摄像头扩展排针和 DIP 开关" width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-2.jpeg"/>  
</div>

## 刷写 JetPack 系统

### 支持的模组

- [NVIDIA® Jetson Orin™ Nano 模组 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano 模组 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX 模组 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX 模组 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### 前置准备

- Ubuntu 主机电脑
- reComputer Robotics
- NVIDIA® Jetson Orin™ Nano/NX 模组
- USB Type-C 数据传输线

:::info

我们建议使用物理 Ubuntu 主机设备，而不是虚拟机。
请参考下表准备主机环境。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="4"> Ubuntu 版本（主机电脑）</td>
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

<p><strong>注意：</strong>对于 JetPack 7.2，Ubuntu 24.04 仅支持刷机和目标端组件安装。如果需要主机端开发组件，请使用 Ubuntu 20.04 或 22.04。</p>

:::

### 准备 Jetpack 镜像

在这里，我们需要根据所使用的 Jetson 模组，在 Ubuntu 主机上下载对应的系统镜像：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack 版本</th>
      <th>Jetson 模组</th>
      <th> GMSL </th>
      <th>下载链接 1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBwi3AQXJiaTZiPQaKocDSkAciLsok9znKGnAPczuZ_IfY?e=S2v5QV">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>c63d1219531245abecc7bbdcafc73d34<br />f75547454c7af85de40f08396a87e5ee</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB8NF028_DESZJ9WwSg2Q34AVCNXeZFkwJi8pbvCOcX4cI?e=Zahpfm">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>5d1f3cd28eb44ca60132c87ccce5acaf<br />806ee945b486df9061a34de73fbb582b</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAakIBc6l2wS7qKAy-1ZeHPAbTtT8XLYaIgITvBGy8vezo?e=mPygXS">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>e7f0c8e6b578d411f81122879f92c766<br />6adfada5ed493a4cc458dc169ca8c1b7</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBnWlTaU6nIQLDOcM2KRQM6AQ6A-ODC8DnWFKRSfW8vRmc?e=1AAVH8">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>b08cbdad8ab6e50222146d3175a9d262<br />7d499bf1d67cfaf69cc737b5bfa9e33a</td>
    </tr>
    <tr>
      <td rowSpan={4}>7.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCXU7mPG_OyR7z-VhF3E5j8AcmgsCPAZAuXSdKduZUKtHQ">Download</a></td>
      <td>6c499899d6c00a1661a48974d4dfc734<br />e9cbfefc06fc9c5c02ac7040dd1f2eb8</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBxz11HG6naSak2wIytiRbXAaqxhsgIWFaVR9H9GfGWqus">Download</a></td>
      <td>23b68b43e630d166e5079f72509c71ea<br />0e13f76e372ddd06fe22df5494ad3f41</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBw84cKdsnuRYQLA1pkfg3mAY1x0HW0UMppZbnaDBaV6XI">下载</a></td>
      <td>2712fe373afb3dff8202cdd9288b266f<br />080b76837eb13161918efd80111d9035</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQA9PyE77GhDQLTpgDmAZ8kzAU2JC-fRK_GfqDy8ureIs1o?e=hYSAit">下载</a></td>
      <td>f09b3465e7de1032f625ae0f816a2f3c<br />fa2a470ee5fdd215840375529a8771db</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
JetPack 镜像文件较大，下载可能需要大约 60 分钟。请耐心等待下载完成。
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
  <img alt="J401 carrier board with the switch set to RESET mode and the USB Type-C flash port marked" width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**步骤 2.** 连接电源线，为载板上电。

**步骤 3.** 使用 USB Type-C 数据传输线将开发板连接到 Ubuntu 主机电脑。

**步骤 4.** 在 Linux 主机电脑上打开终端窗口并输入命令 `lsusb`。如果返回的内容中根据你使用的 Jetson SoM 出现以下任一输出，则说明开发板已进入强制恢复模式。

- 对于 Orin NX 16GB：**0955:7323 NVidia Corp**
- 对于 Orin NX 8GB：**0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB：**0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB：**0955:7623 NVidia Corp**

下图为 Orin Nano 8GB 的示例

<div align="center">
  <img alt="lsusb output with the NVIDIA Corp. APX device highlighted, confirming the board is in recovery mode" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### 刷写到 Jetson

**步骤 1：** 解压下载的镜像文件：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-orin-nano-8g-j401-gmsl-6.2-36.4.3-2026-02-06.tar.gz
```

**步骤 2：** 执行以下命令，将 JetPack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j401 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，你将看到如下输出

<div align="center"><img alt="Terminal log of the flash script ending with the message that flashing completed" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能需要运行 2-10 分钟。
:::

**步骤 3：** 将 Robotics J401 连接到显示器，可使用 PD 转 HDMI 转接器连接到支持 HDMI 输入的显示器，或者使用 PD 线直接连接到支持 PD 输入的显示器，并完成初始配置设置：

<div align="center">
  <img alt="JetPack 6 first-boot configuration wizard on a display connected over HDMI" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
请根据你的需求完成 **System Configuration**。
:::

## 硬件接口使用

:::info
如果你想进一步了解硬件接口的详细规格和使用方法，请参考[本 wiki](https://wiki.seeedstudio.com/cn/recomputer_jetson_robotics_j401_getting_started/#interfaces-usage)。
:::

## 常见问题

**设备开箱时预装了什么？**
预装了带 Seeed Linux BSP 的 JetPack 6.2，因此设备无需刷机即可直接启动到 Ubuntu 桌面。JetPack 7.2 也受支持，但需要从主机电脑进行刷写。

**我可以订购哪些模块版本？**
Orin Nano 4GB、Orin Nano 8GB、Orin NX 8GB 和 Orin NX 16GB。使用 GMSL 摄像头扩展板组装的设备会使用单独的 JetPack 6.2 镜像，其中包含 GMSL 驱动。

**我应该使用哪个 Ubuntu 主机来刷写 JetPack 7.2？**
Ubuntu 20.04、22.04 和 24.04 都可以用于刷写和目标端组件。Ubuntu 24.04 仅适用于这两个步骤——如果主机还需要开发组件，请使用 20.04 或 22.04。

**刷写前是否需要单独的恢复步骤？**
需要。将拨码开关切换到 RESET 模式，连接 USB Type-C 数据线到主机，并在运行刷写脚本前确认模块已在 `lsusb` 中显示。

**接口引脚定义和测试命令在哪里？**
它们位于硬件接口页面，在“相关资源”下有链接。该页面涵盖 M.2 Key M/B/E、CAN 和 CAN FD、UART、I2C、USB、以太网以及 40 针排针。

## 相关资源

- [reComputer Robotics J401 硬件接口使用](/cn/recomputer_robotics_j401_getting_started/)
- [在 Jetson 上使用 GMSL 扩展板运行多路 GMSL 摄像头](/cn/multiple_cameras_with_jetson/)
- [在 reComputer 上实现 EtherCAT 通信](/cn/recomputer_ethercat_communication/)
- [reComputer Robotics J4012 产品页面](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)
- [wiki-documents 仓库与讨论](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

## 资源

- [reComputer Robotics J401 载板原理图](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [reComputer Robotics J401 载板数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [reComputer Robotics 3D 文件](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [机械文档 - reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Seeed NVIDIA Jetson 产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Nvidia Jetson 对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Nvidia Jetson 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 一页纸简介](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
