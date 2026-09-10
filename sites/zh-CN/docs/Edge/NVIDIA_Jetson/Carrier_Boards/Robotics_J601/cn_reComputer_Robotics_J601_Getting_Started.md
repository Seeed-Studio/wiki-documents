---
description: 开始使用适用于 NVIDIA Jetson AGX Thor 模组的 reComputer Robotics J601 载板。
title: reComputer Robotics J601 入门指南
sidebar_label: 刷写 JetPack
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robotics
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 08/28/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/cn/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import J601DemoGrid from '@site/src/components/jetson/J601DemoGrid';

# reComputer Robotics J601 入门指南

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg"/>
</div>

reComputer J601 是一款紧凑而强大的 Jetson AGX Thor 边缘 AI 载板，提供高达 2070 TFLOPS 的算力。它面向开发与量产，集成了 M.2 Key E/M/B、4 路 10Gb RJ45、4 路 USB 3.2、HDMI 2.1、8 路 GMSL 以及多种 IO，便于无缝集成，可作为人形机器人的“大脑”。它支持 NVIDIA Isaac、Hugging Face、PyTorch 和 ROS2/1 等 LLM 与物理 AI 框架，连接 AI 与机器人领域。凭借优化的实时处理能力，它可以运行视觉 AI、Transformer 和多模态模型，为边缘设备解锁先进 AI 能力。

## 特性

- 支持 **NVIDIA Jetson AGX Thor T5000 和 T4000** 模组
- 最高 **2070 TFLOPS** AI 性能
- 最多 **4 路 10GbE RJ45** 接口
- **4 路 USB 3.2 Type-A** 接口，速率最高 10Gbps
- **HDMI 2.1** 显示输出
- **M.2 Key M**，用于 PCIe Gen 4 NVMe 2280 SSD
- **M.2 Key E**，用于 M.2 2230 Wi-Fi 模组
- **M.2 Key B**，用于 4G/5G 模组
- 通过两个 Mini-Fakra 接口和 GMSL 扩展板，支持最多 **8 路 GMSL2 摄像头**
- 机器人 I/O，包括隔离 CAN、RS-232/422/485、I2C、I2S、GPI 和 GPO
- 通过 XT30 提供宽范围 **19V 至 48V DC** 输入
- 软件平台：**JetPack 7.1**

## 规格参数

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td>模组兼容性</td>
      <td>NVIDIA Jetson AGX Thor T5000 / T4000</td>
    </tr>
    <tr>
      <td>PCB 尺寸</td>
      <td>168 mm x 155 mm（不含 Jetson AGX Thor 模组）</td>
    </tr>
    <tr>
      <td>显示</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4x USB 3.2 Type-A（10Gbps，Host），1x USB 2.0 Type-C（调试），1x USB 3.0 Type-C（恢复）</td>
    </tr>
    <tr>
      <td>以太网</td>
      <td>搭配 T5000 时为 4x RJ45 10GbE；搭配 T4000 时为 3x RJ45 10GbE</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td>1x M.2 Key M，用于 PCIe Gen 4 NVMe 2280 SSD</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td>1x M.2 Key E，用于 M.2 2230 Wi-Fi 模组</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td>1x M.2 Key B，用于 4G/5G 模组</td>
    </tr>
    <tr>
      <td>串口</td>
      <td>1x RS-232/422/485（DB9 接口）</td>
    </tr>
    <tr>
      <td>JST 接口</td>
      <td>搭配 T5000 时为 4x CAN，或搭配 T4000 时为 2x CAN，1x RS-485，1x I2S，1x I2C，4x GPI 和 4x GPO</td>
    </tr>
    <tr>
      <td>音频</td>
      <td>1x 麦克风输入和 1x 音频输出</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td>1x 4 针风扇接口（12V PWM）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 针排针</td>
    </tr>
    <tr>
      <td>LED 指示灯</td>
      <td>1x 绿色 PWR LED，1x 绿色 SSD LED，以及 1x RGB USR LED</td>
    </tr>
    <tr>
      <td>按键</td>
      <td>1x Recovery 按键和 1x Reset 按键</td>
    </tr>
    <tr>
      <td>GMSL</td>
      <td>2x Mini-Fakra 接口，可连接最多 8x GMSL2 摄像头</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td>使用导热硅脂时为 -10°C 至 60°C；使用导热垫时为 -10°C 至 55°C</td>
    </tr>
    <tr>
      <td>电源</td>
      <td>XT30，19V 至 48V DC</td>
    </tr>
    <tr>
      <td>JetPack</td>
      <td>JetPack 7.1</td>
    </tr>
  </tbody>
</table>
</div>

## 硬件概览

| **侧视图 1** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg) |
| **侧视图 2** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg) |
| **底视图** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg) |

## 刷写 JetPack

本节将向你展示如何将 JetPack 刷写到连接在 reComputer Robotics J6014 / J6015 上的 NVMe SSD。两款设备都使用 J601 载板，刷写步骤完全相同。

### 支持的模组

- [NVIDIA Jetson T4000 module](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html)
- [NVIDIA Jetson T5000 module](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html)

### 前置条件

- Ubuntu 主机电脑
- reComputer Robotics J6014 或 J6015
- NVMe M.2 2280 内置 SSD
- USB Type-C 数据传输线
- 主机电脑上至少 220 GB 可用存储空间

:::info
我们建议使用物理 Ubuntu 主机，而不是虚拟机。Seeed Jetson DevelopTool 也通过 WSL2 支持 Windows，但原生 Ubuntu 主机能提供最稳定可靠的刷写体验。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="3"> Ubuntu 版本（主机电脑） </td>
    </tr>
    <tr>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 7.1</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### 选择刷写方式

在下面选择图形化的 Seeed Jetson DevelopTool 工作流或命令行工作流之一。

<Tabs groupId="j601-flashing-method">

<TabItem value="software" label="软件刷写" default>

Seeed Jetson DevelopTool 提供引导式图形工作流，可在无需 BSP 命令的情况下完成固件的下载、校验、解压和刷写。请按照 [Seeed Jetson DevelopTool 安装指南](/cn/jetson_developtool_installation) 安装该工具。

#### 视频教程

<div class="video-container">
<iframe width="1071" height="803" src="https://www.youtube.com/embed/O2rlSOdYujE" title="Flash Jetpack for reCompurer J601 by Jetson Develop Tool!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### 软件刷写流程

<details>

<summary> 分步说明 </summary>

**步骤 1.** 启动 Seeed Jetson DevelopTool 并打开 **Flash Center**。选择 **reComputer J601** 和 **JetPack 7.1 (L4T 38.4.0)**。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg"/></div>

**步骤 2.** 使用 **USB 3.0 Type-C 刷写接口** 将主机电脑连接到设备。按住 **RECOVERY** 按键，通过 XT30 接入 19V 至 48V DC 电源，约两秒后松开按键。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg"/></div>

**步骤 3.** 点击 **Detect Device**。确认已检测到连接的 Jetson 模组（例如 **AGX Thor T5000**），然后点击 **Next**。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg"/></div>

**步骤 4.** 点击 **Download / Prepare BSP**。工具会自动下载固件、校验其 SHA256 校验和，并解压 BSP。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg"/></div>

**步骤 5.** 点击 **Start Flash**，并等待界面提示刷写完成。在此过程中不要断开电源或 USB 连接线。

:::caution
刷写会清除目标 NVMe SSD 上的数据。开始前请备份重要数据。
:::

**步骤 6.** 将 reComputer Robotics J601 连接到 HDMI 显示器，并完成系统的初始配置。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</details>

</TabItem>

<TabItem value="command-line" label="命令行刷写">

下载并刷写与你板载 Jetson 模组匹配的 JetPack 镜像。两款产品都使用相同的 J601 载板；请根据你的模组选择对应的选项卡：

<Tabs groupId="j601-thor-module">

<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

#### 准备 JetPack 镜像

<div class="table-center">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>JetPack 版本</th>
      <th>Jetson 模组</th>
      <th>产品</th>
      <th>下载链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T5000</td>
      <td>reComputer Robotics J6015</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAq5ofKK9Y1RaCzAfJ8-3J4ARhePBbGBc-mcjQ1bNAP0bY?e=CbmAN9" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>3f75780b43f6559bc950b6a97aa38fd6f61d4d001cce870bdfb498f64e6d18e5</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
JetPack 镜像文件体积较大，下载可能需要大约 60 分钟。请在解压压缩包前等待下载完成。
:::

要验证下载的固件，请在 Ubuntu 主机上运行 `sha256sum <file>`，并将结果与表格中的 SHA256 值进行比对。

#### 进入强制恢复模式

:::info
在刷写之前，请确保载板已进入强制恢复模式（Force Recovery Mode）。
:::

**步骤 1.** 使用 USB Type-C 数据线将 Ubuntu 主机电脑连接到**USB 3.0 Type-C 烧录接口**。

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg"/></div>

**步骤 2.** 按住 **RECOVERY** 按钮不放。

**步骤 3.** 连接电源（通过 XT30 提供 19V 至 48V 直流电）。

**步骤 4.** 两秒后松开 **RECOVERY** 按钮。

**步骤 5.** 在主机电脑上运行 `lsusb`。出现以下条目表示开发板已进入强制恢复模式（Force Recovery Mode）：

- **0955:7026 NVIDIA Corp.**

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg"/></div>

#### 烧录到 Jetson

**步骤 1.** 解压下载的镜像：

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6015-7.1-38.4.0-YYYY-MM-DD.tar.gz
```

**步骤 2.** 将 JetPack 烧录到 NVMe SSD：

```bash
cd mfi_recomputer-thor-carrier-j6015
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6015 external
```

烧录命令通常需要 2–10 分钟。出现以下输出表示烧录成功：

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

**步骤 3.** 将 reComputer Robotics J6015 连接到 HDMI 显示器，并完成初始系统配置。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</TabItem>

<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

#### 准备 JetPack 镜像

<div class="table-center">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>JetPack 版本</th>
      <th>Jetson 模组</th>
      <th>产品</th>
      <th>下载链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T4000</td>
      <td>reComputer Robotics J6014</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBofCO4bWF9SLdbLQE1V8DgAS1tW6-UmQGEH3ULOZ7W16o?e=zdnK3s" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>c63eddfe7005a088ab439c64fb5d3bf9a52b85d62d377c6a4bf829295f7222ef</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
JetPack 镜像文件较大，下载可能需要大约 60 分钟。请等待下载完成后再解压压缩包。
:::

要验证下载的固件，请在 Ubuntu 主机上运行 `sha256sum <file>`，并将结果与表格中的 SHA256 值进行比较。

#### 进入强制恢复模式（Force Recovery Mode）

:::info
在烧录之前，请确保开发板处于强制恢复模式（Force Recovery Mode）。
:::

**步骤 1.** 使用 USB Type-C 数据线将 Ubuntu 主机电脑连接到**USB 3.0 Type-C 烧录接口**。

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg"/></div>

**步骤 2.** 按住 **RECOVERY** 按钮不放。

**步骤 3.** 连接电源（通过 XT30 提供 19V 至 48V 直流电）。

**步骤 4.** 两秒后松开 **RECOVERY** 按钮。

**步骤 5.** 在主机电脑上运行 `lsusb`。出现以下条目表示开发板已进入强制恢复模式（Force Recovery Mode）：

- **0955:7226 NVIDIA Corp.**

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg"/></div>

#### 烧录到 Jetson

**步骤 1.** 解压下载的镜像：

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6014-7.1-38.4.0-YYYY-MM-DD.tar.gz
```

**步骤 2.** 将 JetPack 烧录到 NVMe SSD：

```bash
cd mfi_recomputer-thor-carrier-j6014
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6014 external
```

烧录命令通常需要 2–10 分钟。出现以下输出表示烧录成功：

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

**步骤 3.** 将 reComputer Robotics J6014 连接到 HDMI 显示器，并完成初始系统配置。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</TabItem>

</Tabs>

⚙️ **所有 Seeed Jetson 载板的 `.dts` 文件和其他源代码都可以从** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) 下载。

</TabItem>

</Tabs>

:::info
首次启动后，请根据需要完成**系统配置**。
:::

有关详细的接口使用方法，请参考 [Robotics J601 硬件接口使用说明](/cn/recomputer_jetson_robotics_j601_interfaces_usage)。

## J601 可以做什么？

在你烧录好 JetPack 之后，可以浏览下面的示例 Wiki，了解可以在 reComputer Robotics J601 上构建哪些项目。这些卡片是从已发布的、提到 **J601** 或 **Jetson Thor** 的 Jetson **应用**和**其他设备**相关 Wiki 中自动生成的。

<J601DemoGrid />

## 资源

- [reComputer J601 载板数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf)
- [reComputer J601 载板原理图](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf)
- [reComputer J601 3D 文件](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp)
- [Seeed NVIDIA Jetson 产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed NVIDIA Jetson 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson AGX 一页纸简介](https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf)
- [Linux_for_Tegra BSP 源码](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [reComputer J601 载板产品页面](https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thor-p-6937.html)

## 技术支持

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
