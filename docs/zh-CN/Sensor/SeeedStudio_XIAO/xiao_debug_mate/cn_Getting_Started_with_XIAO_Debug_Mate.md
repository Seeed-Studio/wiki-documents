---
description: 本文提供了 Seeed Studio XIAO Debug Mate 的全面介绍和使用指南。
title: XIAO Debug Mate 入门指南
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/main_1.webp
slug: /cn/getting_started_with_xiao_debug_mate
sidebar_position: 1
last_update:
  date: 10/22/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/main_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>


## 简介

Seeed Studio XIAO Debug Mate 是一款开源的 ESP32-S3 多功能工具，通过可视化反馈简化嵌入式系统调试。这款一体化设备配备独立的 2.01 英寸 TFT LCD 显示屏、LED 状态矩阵和原生 Seeed Studio XIAO 支持，提供基本的调试功能：DAPLink 芯片级调试、内置串口监控和 UART 透传，以及精确的功耗测量。即插即用的设计消除了复杂的接线，简化了开发流程。

### 规格参数

<div class="table-center">
	<table align="center">
		<tr>
			<th>参数</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>处理器</td>
			<td>Espressif ESP32-S3</td>
		</tr>
		<tr>
			<td>电源输入</td>
			<td>USB-C 5V/1A</td>
		</tr>
		<tr>
			<td>显示屏</td>
			<td>2.01 英寸 TFT LCD，分辨率 240 x 296</td>
		</tr>
		<tr>
			<td>LED</td>
			<td>36 个 LED 矩阵用于状态指示（默认：串口波特率）</td>
		</tr>
		<tr>
			<td>用户输入</td>
			<td>1 x 用户按钮/Boot 按钮 <br /> 1 x 滚轮 <br /> 1 x 凹陷式复位按钮</td>
		</tr>
		<tr>
			<td>I/O 接口</td>
			<td>14 x XIAO 标准引脚 <br /> 8 x 扩展引脚 <br /> 4 x SWD 调试引脚 <br /> 1 x UART Grove 连接器</td>
		</tr>
		<tr>
			<td>产品尺寸</td>
			<td>100x20x56 mm</td>
		</tr>
		<tr>
			<td>软件</td>
			<td>支持 DAPLink 调试</td>
		</tr>
		<tr>
			<td>支持的 OpenOCD 目标芯片组</td>
			<td>SAMD21, nRF52840 (Sense), RP2040, RP2350, RA4M1, MG24 (Sense)</td>
		</tr>
		<tr>
			<td>外壳</td>
			<td>黑色 PLA 3D 打印</td>
		</tr>
	</table>
</div>

### 特性

- 兼容 DAPLink 的 SWD 接口，用于专业芯片级调试

- 智能串口监控和 UART 透传

- 精密功耗分析

- 独立可视化反馈系统

- 为 XIAO 设计的开源平台，具有通用兼容性


## 硬件概述

XIAO Debug Mate 是一款紧凑的一体化工具，旨在简化您的嵌入式开发工作流程。以下是其硬件布局和组件的详细介绍。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

该设备配备以下关键硬件组件：

* ① **用户按钮**：位于顶部边缘的按钮，用于用户输入，如进行选择或确认操作。

* ② **XIAO 插座**：由母头组成的专用插座，设计用于与 Seeed Studio XIAO 系列板直接即插即用连接。

* ③ **弹簧针**：位于 XIAO 插座（②）内的一组弹簧加载探针。它们的特定功能是与安装的 XIAO 主板背面的焊盘建立可靠的电气连接。

* ④ **外层内部扩展排针**：此排针专门设计用于引出 XIAO 主板背面引脚的信号，这些引脚通过弹簧针（③）连接。它采用双接口设计，顶部为母头（用于杜邦线），底部为公针。这种多功能设计允许整个设备用作另一个系统的子板。

* ⑤ **内层扩展排针**：此排针引出 XIAO 主板左右两侧的引脚。与排针④一样，它顶部为母头，底部为公针，方便访问 XIAO 的后向 I/O。

* ⑥ **旋转编码器**：位于顶部边缘的旋转编码器滚轮，用于导航菜单、滚动选项和调整显示屏上的数值。

* ⑦ **显示屏**：2.01 英寸 TFT LCD，分辨率为 240x296，用于清晰的数据可视化和交互。

* ⑧ **Grove 端口**：用于连接外部基于 UART 的 Grove 模块。

* ⑨ **波特率指示器**：设备背面的可视指示器，清楚地显示当前选择的 UART 波特率。

* ⑩ **USB-C 端口**：位于侧面的 USB-C 端口，用于为设备供电和促进数据通信，如编程 XIAO 板或 UART 透传。

## 入门指南

### 为 XIAO Debug Mate 安装引脚贴纸

在包装内，您会找到四张引脚图贴纸。这些贴纸设计用于贴在 Debug Mate 扩展排针旁边，为您提供每个引脚功能的快速便捷参考。

要正确应用它们，请注意每张贴纸一角的小**白色三角形**。这个三角形是对齐标记。它应该定向以匹配 Debug Mate PCB 的相应角落。正面和背面贴纸也有不同的文字方向，以确保从正确的一侧可读。请参考下图了解正确的放置方法。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/sticket_1.jpg" style={{width:600, height:'auto'}}/></div>

贴纸使用不同颜色来区分两排引脚的功能。深蓝色引脚标签对应内排，浅绿色引脚标签对应外排。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/sticket_2.jpg" style={{width:600, height:'auto'}}/></div>

正面和背面的标记也不同。例如，在正面，XIAO 引脚标有引脚编号：D6、D7、D8 等。在背面，这些引脚标有协议或功能：TX、RX、SCK 等。

### 首次开机

XIAO Debug Mate 需要通过其 USB-C 端口持续供应 5V/1A 电源。连接电源后，设备将启动，显示启动动画，然后进入主界面，准备操作。

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/first_power.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
一般来说，Debug Mate 上 XIAO 的所有功能都不需要为 XIAO 额外供电，除非另有说明。
:::

### 操作逻辑

设备的界面由简单直观的两部分系统控制：

*   **旋转编码器（滚轮）：** 滚动滚轮以导航菜单并高亮显示可选选项。
*   **按钮：**
    *   **单击：** 确认选择或进入高亮显示的菜单。
    *   **长按（按住 >2 秒后释放）：** 作为"返回"按钮，返回到上一个屏幕或菜单。

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/operational_logic.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 操作菜单介绍

XIAO Debug Mate 的固件组织为三个主要功能页面，您可以使用滚轮和按钮进行导航。

**1. 主页面（仪表板）**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/1.jpg" style={{width:600, height:'auto'}}/></div>

这是默认屏幕，作为中央仪表板。它提供所有关键功能的实时概览：
*   **调试状态：** 指示 SWD `DEBUG` 功能是否激活。
*   **UART 状态：** 显示当前波特率和 RX/TX 线路上的活动。
*   **功耗指标：** 显示连接的 XIAO 消耗的瞬时电压（`U`）、电流（`I`）和功率（`P`）。

从此页面，您可以访问其他两个主要功能。只需滚动滚轮以高亮显示 UART 模块（左下）或功耗模块（右下），然后单击按钮进入其专用页面。

<div class="table-center">
	<table align="center">
		<tr>
			<th>UART 模块</th>
			<th>功耗模块</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/2.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/3.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

:::tip
1. 调试功能**仅在**主页面菜单下有效。
2. 主页面无法获取串口消息。串口透传和监控功能需要访问串口设置页面。
:::

**2. UART 页面**

此页面专用于串行通信，提供两种不同的模式：

*   **UART 监控：** 此模式直接在 Debug Mate 的 2.01 英寸 LCD 屏幕上捕获和显示串行数据。它非常适合无需 PC 的快速移动调试。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/5.jpg" style={{width:600, height:'auto'}}/></div>

*   **UART 透传：** 在此模式下，Debug Mate 充当 USB 转串口桥。它将目标设备的所有串行数据转发到您的 PC。数据**不会**显示在设备屏幕上，但可以使用计算机上的任何串口监控软件查看（例如 Arduino IDE Serial Monitor、PuTTY、CoolTerm）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/4.jpg" style={{width:600, height:'auto'}}/></div>

在 UART 页面中，您可以通过滚轮高亮选项并点击按钮来配置以下内容：
*   **Source：** 选择监控板载 `XIAO` 或连接到 `Grove` 端口的外部设备。

<div class="table-center">
	<table align="center">
		<tr>
			<th>选择 XIAO</th>
			<th>选择 Grove</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/6.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/7.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

*   **Baud Rate：** 从 9 个预设波特率中选择，范围从 4800 bps 到 921600 bps。背面的 LED 矩阵将直观地更新以反映您的选择。

<div class="table-center">
	<table align="center">
		<tr>
			<th>正面</th>
			<th>背面</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/8.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/9.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

**3. 功率分析器页面**

此页面提供高精度功率分析工具，具有三种不同的 UI 视图，您可以通过滚动滚轮来循环切换。

*   **视图 1：简单数字表**
    此视图提供清晰的大字体显示，显示瞬时电压 (V)、电流 (A) 和功率 (W)，测量精度高达四位小数。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/10.jpg" style={{width:600, height:'auto'}}/></div>

*   **视图 2：低功耗详细视图**
    针对低功耗应用优化，此视图专注于电流和功率。它同时显示多个单位的值（例如，`18.234 mA` 和 `18234 uA`），在跟踪微安级消耗时为您节省手动单位转换的工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/11.jpg" style={{width:600, height:'auto'}}/></div>

*   **视图 3：统计分析**
    此视图非常适合项目验证和电池寿命估算。它跟踪并显示：
    *   **Min/Max：** 会话期间记录的最小和最大电流和功率值。
    *   **Total：** 随时间累积的能量 (`Wh`) 和电荷 (`Ah`) 消耗。
    *   **Time：** 测量会话的持续时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/12.jpg" style={{width:600, height:'auto'}}/></div>

    :::tip
    第一次进入视图 3 时，功耗计时器将开始计时。当您长按确认按钮退出功率分析器页面时，计时器将重置为零。
    :::

:::tip **功率测量重要说明：**
功率分析功能测量通过其 **5V 引脚** 向 XIAO 供应的功率。此测量包括 XIAO 板载电源管理 IC (PMIC) 和其他 5V 轨道组件消耗的功率。如果您计划在最终项目中使用直接连接到 XIAO 的 3.3V/BAT 焊盘的 LiPo 电池供电，实际功耗将**低于** Debug Mate 报告的功耗。请将此数据作为有价值的参考，在最终电池计算时请记住这一差异。
:::

### XIAO Debug Mate：功能和使用

有关如何在特定 IDE 和项目中使用 DAPLink 调试器、UART 监视器和功率分析器的详细指南，请参阅我们的专用功能指南。

- [XIAO Debug Mate DAPLink 调试器](https://wiki.seeedstudio.com/cn/xiao_debug_mate_debug)
- [XIAO Debug Mate UART 监视器](https://wiki.seeedstudio.com/cn/xiao_debug_mate_serial)
- [XIAO Debug Mate 功率计](https://wiki.seeedstudio.com/cn/xiao_debug_mate_power)

## 重置

如果您需要重启 XIAO Debug Mate，您有两个选择：
1.  拔掉并重新插入 USB-C 电源线。
2.  使用隐藏的**重置按钮**。它位于 USB-C 端口正下方的小孔中。您可以使用 SIM 卡弹出工具或回形针轻轻按压。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/13.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
使用重置按钮时不要用力过猛，因为这可能会损坏内部开关。
:::

## 启动

设备上的主按钮具有双重功能。在正常操作期间，它充当**确认/返回**按钮。但是，它也充当进入 ESP32-S3 闪存模式的 **BOOT** 按钮。

进入闪存模式：
1.  确保设备已关闭电源（已拔掉插头）。
2.  **按住**主按钮。
3.  在仍然按住按钮的同时，连接 USB-C 线缆为设备供电。
4.  设备现在将处于闪存模式，准备接收新固件。

## 出厂固件

如果您需要恢复原始出厂固件，可以使用以下方法之一。首先，按照上述部分中的说明将设备置于**启动模式**。

### 方法 1：使用闪存脚本

我们为所有主要操作系统准备了一个包含易于使用的闪存脚本的软件包。

1.  下载固件包。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_Flash_Script.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 固件版本 1.0</font></span></strong>
    </a>
</div>

2.  解压缩 zip 文件的内容。
3.  将您的 XIAO Debug Mate 置于启动模式。
4.  运行适合您操作系统的脚本。

<Tabs>
<TabItem value="Windows" label="Windows" default>
双击 `flash.bat` 文件。
</TabItem>
<TabItem value="MacOS" label="MacOS">
打开终端，导航到解压的文件夹，并运行命令：`sh flash.sh`
</TabItem>
<TabItem value="Linux" label="Linux">
打开终端，导航到解压的文件夹，并运行命令：`sh flash.sh`
</TabItem>
</Tabs>

### 方法 2：使用 esptool

如果您已将 `esptool` 作为 ESP-IDF 的一部分或作为 Python 包安装，您可以手动闪存固件。

1.  下载出厂固件 `.bin` 文件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_Flash_Script.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 固件版本 1.0</font></span></strong>
    </a>
</div>

2.  将您的 XIAO Debug Mate 置于启动模式。
3.  打开终端或命令提示符并运行下面的相应命令。

<Tabs>
<TabItem value="Windows" label="Windows" default>

```bash
esptool.exe --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
<TabItem value="MacOS" label="MacOS">

```bash
esptool.py --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
esptool.py --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
</Tabs>

### 方法 3：使用 PlatformIO 和开源固件

XIAO Debug Mate 的固件完全开源，可在 [GitHub](https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate) 上获得。如果您想自定义固件或从源代码构建，可以使用 PlatformIO。

1. 克隆仓库：

```bash
git clone https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate.git
```

2. 导航到固件目录

3. 在 PlatformIO 中打开项目：
   - 如果使用 PlatformIO IDE（VS Code 扩展），打开包含 `platformio.ini` 的文件夹
   - 或使用 PlatformIO Core CLI

4. 按照上面启动部分中的说明将您的 XIAO Debug Mate 置于**启动模式**。

5. 构建并上传固件：

<Tabs>
<TabItem value="PlatformIO IDE" label="PlatformIO IDE" default>
- 点击 PlatformIO 工具栏中的 "Upload" 按钮
- 或使用命令面板：`PlatformIO: Upload`
</TabItem>
<TabItem value="PlatformIO CLI" label="PlatformIO CLI">

```bash
pio run --target upload
```

</TabItem>
</Tabs>

此方法允许您：
- 修改固件以添加自定义功能
- 构建最新的开发版本
- 为开源项目做出贡献
- 从源代码实现中学习

:::tip
确保您已安装 PlatformIO。您可以将其作为 VS Code 扩展安装，或通过 pip 作为独立的 CLI 工具安装：`pip install platformio`
:::

## 故障排除

### Q1：XIAO Debug Mate 引脚兼容性指南

**问题：** 我在调试功能方面遇到问题；似乎连接不良。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/14.jpg" style={{width:600, height:'auto'}}/></div>

**解决方案：** 这可能由于两个主要原因发生：

1.  **与较旧 XIAO 板的兼容性：**
    一些较早的 XIAO 板，如 **XIAO SAMD21**、**XIAO RP2040** 和 **XIAO nRF52840**，是在建立背面焊盘统一标准之前设计的。虽然 Debug Mate 的弹簧针定位尽可能兼容，但这些较旧板的轻微变化可能导致接触不完美。

    如果您遇到不稳定的调试连接，请尝试**稍微调整** XIAO 板在插座中的位置。您可能不需要将其完全按下。小幅移动通常可以确保弹簧针与 XIAO 背面的 SWD 焊盘建立牢固接触。

2.  **接头的磨损：**
    母接头与任何机械连接器一样，都有有限的使用寿命。为了最大化其耐用性并确保可靠连接，请遵循以下最佳实践：
    *   插入或拔出 XIAO 开发板时，请**垂直向上或向下**施力。
    *   **避免来回摆动或摇晃** XIAO 开发板，因为这可能会弯曲引脚，扩大母接头中的触点，并随着时间推移导致连接不良。

## 特别感谢

特别感谢 **啊猫啊狗晒太阳** 为 LED 矩阵提供的设计灵感。Debug Mate 板载 LED 指示器的设计参考了他们优秀的开源项目。原始设计非常有创意且实用。

如果您想查看原始设计，可以通过以下链接查看演示视频和作者主页。

*   [原始设计演示视频](https://www.bilibili.com/video/BV1Sc411273Y/)
*   [作者的 Bilibili 主页](https://space.bilibili.com/1155738723)

## 资源

- **[ZIP]** [Seeed Studio XIAO Debug Mate 3D 打印外壳](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_3D_Printed_Case.zip)
- **[PDF]** [Seeed Studio XIAO Debug Mate 原理图 PDF](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_V1.0_SCH_20250926.pdf)
- **[ZIP]** [Seeed Studio XIAO Debug Mate 原理图和 PCB KiCAD 文件](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_V1.0_SCH&PCB_20250926.zip)
- **[GITHUB]** [Seeed Studio XIAO Debug Mate 固件仓库](https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate)

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
