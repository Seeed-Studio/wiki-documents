---
description: reComputer Robotics J50 Mini 入门指南
title: reComputer Robotics J50 Mini 入门指南
keywords:
  - reComputer Robotics
  - reComputer Robotics J50 Mini
  - Jetson
  - 入门指南
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg
slug: /ai_robotics_recomputer_j501_robotics_getting_started
sku: 100085113
last_update:
  date: 11/16/2026
  author: Shijun
createdAt: '2026-11-16'
updatedAt: '2026-11-16'
url: https://wiki.seeedstudio.com/cn/ai_robotics_recomputer_robotics_j50_mini_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';
import { getL4TData } from '@site/src/components/jetson/DownloadLink';

# reComputer Robotics J50 Mini 入门指南

<div align="center">
  <img width="600" alt="reComputer Mini J501 complete system" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg" />
</div>

reComputer Robotics J50 Mini（reComputer Mini J501）是一款用于机器人和嵌入式 AI 开发的紧凑型边缘 AI 计算机，提供 **搭载 NVIDIA Jetson AGX Orin 32GB 的 J5011** 和 **搭载 NVIDIA Jetson AGX Orin 64GB 的 J5012** 两种型号。两种 GMSL 配置均包含 **128GB NVMe SSD** 和 **八通道 GMSL 扩展板**。机箱尺寸为 **119 × 119 × 100 mm**，重量为 **1325 g**。

该平台可搭配 NVIDIA Isaac ROS、ROS、PyTorch 以及其他兼容 Jetson 的软件，用于多相机感知、传感器集成和机器人开发。

:::note
可定制选项：Logo 品牌定制、包装和固件烧录。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5011-with-GMSL-Extension-p-6876.html" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>购买 J5011 · 32GB 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>购买 J5012 · 64GB 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>立即定制 ➜</font></span></strong></a>
</div>

## 特性

- **AGX Orin 性能：** 64GB 模组最高可达 275 TOPS，支持感知和边缘 AI 工作负载。
- **紧凑机箱：** 119 × 119 mm 的占板面积，便于集成到空间受限的机器人中。
- **摄像头连接：** 搭载 GMSL 的 J5012 包含 GMSL 扩展板，可连接多达 8 路 GMSL2 摄像头；需搭配兼容的摄像头和驱动。
- **有线与无线扩展：** 提供 10GbE 和 1GbE 网络接口，以及用于 Wi-Fi/蓝牙扩展的 M.2 Key E 插槽。
- **机器人 I/O：** 隔离 CAN 和 RS485、数字输入/输出、I2S、USB 和 HDMI。
- **48V 系统集成：** XT30 电源输入，标称工作电压范围为 19–48V DC，最大输入电压 54V。

## 规格参数

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Jetson AGX Orin 系统模块</th></tr>
    <tr><th colSpan={2}>规格</th><th>reComputer Mini J5011</th><th>reComputer Mini J5012</th></tr>
    <tr><td colSpan={2}>模组</td><td>NVIDIA Jetson AGX Orin 32GB</td><td>NVIDIA Jetson AGX Orin 64GB</td></tr>
    <tr><td colSpan={2}>AI 性能</td><td>最高 200 TOPS</td><td>最高 275 TOPS</td></tr>
    <tr><td colSpan={2}>GPU</td><td>1792 核 NVIDIA Ampere 架构 GPU<br />56 个 Tensor Core</td><td>2048 核 NVIDIA Ampere 架构 GPU<br />64 个 Tensor Core</td></tr>
    <tr><td colSpan={2}>GPU 最大频率</td><td>930 MHz</td><td>1.3 GHz</td></tr>
    <tr><td colSpan={2}>CPU</td><td>8 核 Arm Cortex-A78AE</td><td>12 核 Arm Cortex-A78AE</td></tr>
    <tr><td colSpan={2}>CPU 最大频率</td><td colSpan={2}>2.2 GHz</td></tr>
    <tr><td colSpan={2}>内存</td><td>32GB 256-bit LPDDR5<br />204.8 GB/s</td><td>64GB 256-bit LPDDR5<br />204.8 GB/s</td></tr>
    <tr><td colSpan={2}>模组存储</td><td colSpan={2}>64GB eMMC 5.1</td></tr>
    <tr><td colSpan={2}>视频编码器</td><td>1 × 4K60 / 3 × 4K30（H.265）<br />6 × 1080p60 / 12 × 1080p30（H.265）</td><td>2 × 4K60 / 4 × 4K30（H.265）<br />8 × 1080p60 / 16 × 1080p30（H.265）</td></tr>
    <tr><td colSpan={2}>视频解码器</td><td>1 × 8K30 / 2 × 4K60 / 4 × 4K30（H.265）<br />9 × 1080p60 / 18 × 1080p30（H.265）</td><td>1 × 8K30 / 3 × 4K60 / 7 × 4K30（H.265）<br />11 × 1080p60 / 22 × 1080p30（H.265）</td></tr>
    <tr><td colSpan={2}>模组功耗</td><td>15W / 40W</td><td>15W / 60W</td></tr>
    <tr><td colSpan={2}>JetPack</td><td colSpan={2}>预装 JetPack 6.2；支持 JetPack 7.2</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>载板</th></tr>
    <tr><td colSpan={2}>存储</td><td colSpan={2}>内置 128GB NVMe SSD<br />1 × M.2 Key M，用于 NVMe 2280 SSD</td></tr>
    <tr><td rowSpan={2} style={{verticalAlign: 'middle'}}>网络</td><td>以太网</td><td colSpan={2}>1 × RJ45 10GbE；1 × RJ45 1GbE</td></tr>
    <tr><td>无线扩展</td><td colSpan={2}>1 × M.2 Key E，用于 Wi-Fi/蓝牙模组</td></tr>
    <tr><td rowSpan={10} style={{verticalAlign: 'middle'}}>I/O</td><td>USB</td><td colSpan={2}>2 × USB 3.2 Gen 2 Type-A（10Gbps）<br />1 × USB 2.0 Type-C（调试）<br />1 × USB 3.0 Type-C（恢复）</td></tr>
    <tr><td>显示</td><td colSpan={2}>1 × HDMI 2.1</td></tr>
    <tr><td>CAN</td><td colSpan={2}>2 × 隔离 CAN</td></tr>
    <tr><td>RS485</td><td colSpan={2}>1 × 隔离 RS485</td></tr>
    <tr><td>数字 I/O</td><td colSpan={2}>4 × GPI（3.3V）；4 × GPO（3.3V）</td></tr>
    <tr><td>I2S</td><td colSpan={2}>1 × I2S（3.3V）</td></tr>
    <tr><td>风扇</td><td colSpan={2}>1 × 4 针风扇接口（12V PWM）</td></tr>
    <tr><td>RTC</td><td colSpan={2}>1 × 2 针 RTC 排针</td></tr>
    <tr><td>指示灯</td><td colSpan={2}>PWR、ACT 和 USR 指示灯</td></tr>
    <tr><td>按键</td><td colSpan={2}>1 × Reset；1 × Recovery</td></tr>
    <tr><td colSpan={2}>电源输入</td><td colSpan={2}>1 × XT30；19–48V DC；最大输入 54V</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>GMSL 扩展板</th></tr>
    <tr><td colSpan={2}>GMSL 连接</td><td colSpan={2}>两种带 GMSL 的配置均包含<br />2 × Mini-Fakra 接口，可连接最多 8 路 GMSL2 摄像头</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>其他</th></tr>
    <tr><td rowSpan={3} style={{verticalAlign: 'middle'}}>机械特性</td><td>尺寸（宽 × 深 × 高）</td><td colSpan={2}>119 × 119 × 100 mm</td></tr>
    <tr><td>重量</td><td colSpan={2}>1325 g</td></tr>
    <tr><td>安装方式</td><td colSpan={2}>桌面</td></tr>
    <tr><td colSpan={2}>工作温度</td><td colSpan={2}>−10°C 至 60°C</td></tr>
  </tbody>
</table>
</div>

## 硬件概览

<div align="center">
  <img width="800" alt="reComputer Mini J501 hardware overview 1" src="https://media-cdn.seeedstudio.com/cdn-cgi/image/format=auto%2Cwidth=3840%2Cquality=100/media/wysiwyg/111-photo/1.hard.100020407.png" />
</div>

<div align="center">
  <img width="800" alt="reComputer Mini J501 hardware overview 2" src="https://www.seeedstudio.com/media/catalog/product/h/a/hardware_img_2.jpg" />
</div>

<div align="center">
  <img width="800" alt="Mini J501 carrier board top view" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/top.png" />
</div>

<div align="center">
  <img width="800" alt="Mini J501 carrier board side view" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/side.png" />
</div>

<div align="center">
  <img width="800" alt="Mini J501 carrier board bottom view" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/bottom.png" />
</div>


## 刷写 JetPack 操作系统

本节将介绍如何将 Mini J501 系统镜像刷写到 reComputer Robotics J50 Mini 中的 NVMe SSD 上。

### 支持的 NVIDIA Jetson 模组

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### 前置准备

- Ubuntu 主机电脑
- 搭载 Jetson AGX Orin 模组、NVMe SSD 和兼容电源的 reComputer Robotics J50 Mini
- USB Type-C 数据传输线

:::info

我们建议使用物理 Ubuntu 主机设备，而不是虚拟机。
请参考下表准备主机环境。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowSpan="2"> JetPack 版本 </td>
        <td class="dbon" colSpan="4"> Ubuntu 版本（主机电脑）</td>
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

<p><strong>Note:</strong> 对于 JetPack 7.2，Ubuntu 24.04 仅支持刷机和目标端组件安装。如果需要主机端开发组件，请使用 Ubuntu 20.04 或 22.04。</p>

:::

### 准备 JetPack 镜像

在这里，我们需要在 Ubuntu 主机上下载与所使用 Jetson 模组对应的系统镜像：

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
      <td rowSpan={2}>7.2</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-64g", "39.2.0").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-64g", "39.2.0").sha256}</code></td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-32g", "39.2.0").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-32g", "39.2.0").sha256}</code></td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-64g", "36.4.4 (GMSL✅)").mainlink}>下载</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-64g", "36.4.4 (GMSL✅)").sha256}</code></td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-32g", "36.4.4 (GMSL✅)").mainlink}>下载</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-32g", "36.4.4 (GMSL✅)").sha256}</code></td>
    </tr>
  </tbody>
</table>
</div>

:::danger
JetPack 镜像文件体积较大，下载可能需要大约 60 分钟。请耐心等待下载完成。
:::

:::info
要验证已下载固件的完整性，可以对比 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 以获取已下载文件的 SHA256 哈希值。如果得到的哈希值与 wiki 中提供的 SHA256 哈希值一致，则说明你下载的固件是完整且未损坏的。
:::



### 进入强制恢复模式

:::info
在继续安装步骤之前，我们需要确保开发板处于强制恢复模式。
:::

<details>

<summary> 分步说明 </summary>

**步骤 1.** 按住 **REC** 按钮不放。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/recomputer-mini-j501-flash-Interface2.png" />
</div>

**步骤 2.** 连接电源线为载板上电，然后松开 **REC** 按钮。

**步骤 3.** 使用 USB Type-C 数据线将开发板连接到 Ubuntu 主机电脑。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/recomputer-mini-j501-flash-Interface1.png" />
</div>

**步骤 4.** 在 Linux 主机电脑上打开终端窗口并输入命令 `lsusb`。如果返回的内容中根据你使用的 Jetson SoM 出现以下任一输出，则说明开发板已进入强制恢复模式。

- 对于 AGX Orin 32GB：**0955:7223 NVidia Corp**
- 对于 AGX Orin 64GB：**0955:7023 NVidia Corp**

下图为 AGX Orin 32GB 的示例：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### 分步刷写 Jetson

**步骤 1：** 解压下载的镜像文件：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For JetPack 7.2 example: sudo tar xpf mfi_recomputer-mini-agx-orin-j501x-32g-7.2.0-39.2.0-2026-06-25.tar.gz
# For JetPack 6.2.1 example: sudo tar xpf mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11.tar.gz
```

**步骤 2：** 执行以下命令将 JetPack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，你将看到如下输出

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能会运行 2-10 分钟。
:::

**步骤 3：** 通过 HDMI 将 reComputer Robotics J50 Mini 连接到显示器，然后完成初始系统配置：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
请根据你的需求完成 **System Configuration**。
:::

**步骤 4（可选）：** 安装 NVIDIA JetPack SDK。在 Jetson 上打开终端并运行：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## 硬件接口使用

:::info[硬件接口指南]
**点击下方按钮打开 Mini J501 接口指南，查看连接器引脚定义、接线方式和分步使用说明。**
:::

<div style={{display: 'flex', justifyContent: 'center', margin: '1rem 0'}}>
  <a className="button button--primary button--lg" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', lineHeight: '1.4', padding: '0.9rem 1.5rem'}} href="https://wiki.seeedstudio.com/cn/recomputer_j501_mini_getting_started/#-interfaces-usage" target="_blank" rel="noopener noreferrer">
    <span>打开硬件接口指南 ↗</span>
  </a>
</div>

## 资源

- [Seeed Jetson BSP 源代码](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [整机用户手册和数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Mini_J501_Datasheet.pdf)
- [Mini J501 载板原理图](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Mini%20J501%20Carrier%20Board_Rev1.0_SCH_251027.pdf)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技术支持与产品讨论

感谢你选择我们的产品！如需技术支持和产品讨论，请通过以下渠道联系我们。

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum" aria-label="Seeed Studio forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email" aria-label="Contact Seeed Studio"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord" aria-label="Seeed Studio Discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion" aria-label="GitHub discussions"></a>
</div>
