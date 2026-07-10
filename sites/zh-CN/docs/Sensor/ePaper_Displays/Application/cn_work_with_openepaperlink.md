---
description: 通过 OpenDisplay 和 OpenEPaperLink 生态系统使用低功耗蓝牙驱动 Seeed ePaper 硬件，包括 reTerminal E1001、E1002、E1003、XIAO ePaper Display Board EN04，以及 XIAO ePaper Breakout Board 路径。
title: 搭配 OpenEPaperLink / OpenDisplay 使用
keywords:
  - ePaper 显示屏
  - OpenEPaperLink
  - OEPL
  - OpenDisplay
  - reTerminal E1001
  - reTerminal E1002
  - reTerminal E1003
  - EN04
  - ePaper Breakout Board
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
slug: /EN04_opendisplay
sidebar_position: 10
last_update:
  date: 06/30/2026
  author: dimo
aliases:
  - /epaper_breakout_board_with_oepl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/EN04_opendisplay/
updatedAt: '2026-06-30'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 搭配 OpenEPaperLink / OpenDisplay 使用

[OpenDisplay](https://opendisplay.org/) 和 [OpenEPaperLink (OEPL)](https://openepaperlink.de/) 是用于通过 **Bluetooth Low Energy (BLE)** 驱动 ePaper 显示屏的开源生态系统。手机、电脑或 Home Assistant 主机可以直接连接到显示屏，因此基础工作流程不需要 802.15.4 接入点。

本指南涵盖两条 Seeed 硬件路径：

- **OpenDisplay Toolbox 路径** —— 推荐用于在 **reTerminal E1001**、**reTerminal E1002**、**reTerminal E1003** 和 **XIAO ePaper Display Board EN04** 上直接使用可用的 OpenDisplay 固件。
- **OEPL_BLE 路径** —— 适用于使用 **ePaper Breakout Board for Seeed Studio XIAO** 和 **XIAO nRF52840 系列开发板** 搭建模块化 DIY 方案。

两条路径的用户体验类似：安装固件，通过 BLE 配置设备，然后上传图像。工具和支持的预设不同，请根据你的硬件选择对应的选项卡。

## 兼容硬件

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E 系列" default>

OpenDisplay Toolbox 包含 **reTerminal E1001**、**reTerminal E1002** 和 **reTerminal E1003** 的预设。

<div class="table-center">
	<table align="center">
		<tr>
			<th>reTerminal E1001</th>
			<th>reTerminal E1002</th>
			<th>reTerminal E1003</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
		<tr>
			<td align="center">7.5" 黑白，800 × 480</td>
			<td align="center">7.3" Spectra 6 彩色，800 × 480</td>
			<td align="center">10.3" 黑白，1404 × 1872，触控</td>
		</tr>
		<tr>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1001" target="_blank" rel="noopener noreferrer">在 Toolbox 中打开</a></td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1002" target="_blank" rel="noopener noreferrer">在 Toolbox 中打开</a></td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1003" target="_blank" rel="noopener noreferrer">在 Toolbox 中打开</a></td>
		</tr>
	</table>
</div>

当你希望在已完成的 reTerminal E 系列设备上直接运行 OpenDisplay 固件时，请使用此路径。

:::caution
安装 OpenDisplay 固件会替换当前在设备上运行的固件。请准备好恢复路径，例如使用官方 reTerminal E-Series Firmware Hub 或产品 Wiki 推荐的固件包。
:::

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ePaper Display Board EN04</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
		<tr>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?driver=en04" target="_blank" rel="noopener noreferrer">在 Toolbox 中打开 EN04</a></td>
		</tr>
	</table>
</div>

EN04 是一块基于 nRF52840 的 ePaper 驱动板。当你希望将受支持的 ePaper 面板与以 BLE 为重点的控制器配对时，它是实现 OpenDisplay 的最直接 DIY 路径。

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

<div class="table-center">
	<table align="center">
		<tr>
			<th>4.26" 黑白 ePaper 显示屏</th>
			<th>ePaper Breakout Board for Seeed Studio XIAO</th>
			<th>Seeed Studio XIAO nRF52840 Sense Plus</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

当你希望构建模块化 OEPL_BLE 方案时，请使用此路径。XIAO nRF52840 系列可以驱动这个 DIY 套件，而社区 OEPL 工作流则提供了用于配置和图像上传的独立工具。

</TabItem>
</Tabs>

## 为什么使用 OpenDisplay / OpenEPaperLink？

- **以 BLE 为先的工作流** —— 无需专用 802.15.4 接入点即可配置和上传图像。
- **基于浏览器的工具** —— 在受支持的浏览器中安装固件、选择预设、配置设备并上传图像。
- **Seeed 硬件预设** —— OpenDisplay Toolbox 包含 reTerminal E1001、E1002、E1003 和 EN04 的预设。
- **Home Assistant 支持** —— OpenDisplay 设备可以通过 Home Assistant 官方的 OpenDisplay 集成添加。
- **开源生态系统** —— 固件、工具和集成都在公共代码库中开发。

## 步骤 1：硬件连接

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E 系列" default>

**步骤 1。** 使用 USB-C 数据线将 reTerminal E 系列设备连接到电脑。

**步骤 2。** 打开设备电源并将其保持在靠近电脑的位置。浏览器将使用 USB 进行固件安装，并使用 BLE 进行配置。

**步骤 3。** 将你的硬件与正确的 OpenDisplay Toolbox 预设进行匹配：

<div class="table-center">
	<table align="center">
		<tr>
			<th>设备</th>
			<th>Toolbox 预设</th>
			<th>显示屏</th>
		</tr>
		<tr>
			<td>reTerminal E1001</td>
			<td><code>reterminal-e1001</code></td>
			<td>7.5" 黑白，800 × 480</td>
		</tr>
		<tr>
			<td>reTerminal E1002</td>
			<td><code>reterminal-e1002</code></td>
			<td>7.3" Spectra 6 彩色，800 × 480</td>
		</tr>
		<tr>
			<td>reTerminal E1003</td>
			<td><code>reterminal-e1003</code></td>
			<td>10.3" 黑白，1404 × 1872</td>
		</tr>
	</table>
</div>

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**步骤 1。** 将 ePaper 面板的 FPC 线缆插入 EN04 连接器并锁紧卡扣。

:::tip
对于 50 针连接器，请将 FPC 上印刷的 `1` 和 `50` 标记与板子上的对应标记对齐。在下图所示的 EN04 套件中，FPC 的金属接触面朝上。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 2。** 将电池连接到 JST 接口。红线接 **+**，黑线接 **-**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 3。** 使用 USB-C 数据线将 EN04 板连接到电脑。

:::caution
在为开发板供电前，请检查电池极性。极性接反的电池连接器可能会损坏硬件。
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

**步骤 1.** 将 XIAO nRF52840 系列开发板安装到 ePaper Breakout Board 上。

**步骤 2.** 将 ePaper 面板的 FPC 线缆插入 Breakout Board 上的连接器并锁紧卡扣。

**步骤 3.** 使用 USB-C 数据线将 XIAO 连接到电脑。

</TabItem>
</Tabs>

## 步骤 2：安装固件

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E 系列" default>

OpenDisplay 为 reTerminal E 系列提供了直接可用的 Toolbox 预设。

**步骤 1.** 在 Chrome 或 Edge 中打开与之匹配的 Toolbox 预设：

- [reTerminal E1001 Toolbox 预设](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1001)
- [reTerminal E1002 Toolbox 预设](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1002)
- [reTerminal E1003 Toolbox 预设](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1003)

**步骤 2.** 确认所选预设与您的设备型号一致。

**步骤 3.** 点击 **Install firmware (USB)**。

**步骤 4.** 在浏览器配对对话框中，选择连接 reTerminal 后出现的 USB 串口设备。

**步骤 5.** 等待安装程序完成并让设备重启。

安装完成后，在下一步继续进行 BLE 配置。

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

当前的 OpenDisplay 流程使用 Toolbox 来完成 EN04 的设置。

**步骤 1.** 在 Chrome 或 Edge 中打开 [OpenDisplay Toolbox for EN04](https://opendisplay.org/firmware/toolbox/index.html?driver=en04)。

**步骤 2.** 选择与您连接的 ePaper 显示屏相匹配的面板。

**步骤 3.** 点击 **Install firmware (USB)** 并按照浏览器提示操作。

**步骤 4.** 如果浏览器要求进入 bootloader 模式，请在 EN04 板上双击复位按钮，然后选择新检测到的 USB 设备。

**步骤 5.** 等待固件安装完成。

EN04 将重启进入 OpenDisplay 固件，此后即可通过 BLE 进行配置。

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

XIAO nRF52840 + Breakout Board 路径在 OEPL Config Builder 能连接之前，需要先使用 **OEPL_BLE** 固件。

**步骤 1.** 打开 [OEPL_BLE 发布页面](https://github.com/OpenEPaperLink/OEPL_BLE/releases)，并下载与您的 XIAO nRF52840 开发板匹配的固件包。

<div class="github_container" style={{textAlign: 'center'}}>
	<a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases" target="_blank" rel="noopener noreferrer">
	<strong><span><font color={'FFFFFF'} size={"4"}> Download OEPL_BLE Firmware</font></span></strong>
	</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

**步骤 2.** 双击 XIAO 上的复位按钮。它会以 USB 磁盘的形式出现。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 将下载好的 `.uf2` 固件文件拖拽到该 USB 磁盘中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

XIAO 会重启，并在下一次上电时运行 OEPL_BLE 固件。

</TabItem>
</Tabs>

## 步骤 3：通过 BLE 配置设备

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E 系列" default>

**步骤 1.** 在同一 OpenDisplay Toolbox 页面中，点击 **Configure over Bluetooth**。

**步骤 2.** 在 BLE 配对对话框中选择您的 reTerminal 设备。

**步骤 3.** 等待 Toolbox 将所选预设写入设备。

**步骤 4.** 确认显示屏刷新，或显示 OpenDisplay 的启动/测试图像。

现在设备已经可以通过 OpenDisplay 工具或 Home Assistant 上传图像。

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**步骤 1.** 在 OpenDisplay Toolbox 中，保持 **EN04** 作为驱动板选项，并确认匹配的面板选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>

**步骤 2.** 点击 **Configure over Bluetooth**。

**步骤 3.** 在 BLE 配对对话框中选择 EN04 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png" style={{width:500, height:'auto'}}/></div>

**步骤 4.** 等待 Toolbox 写入配置并让显示屏刷新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

**步骤 1.** 打开 [OEPL Config Builder](https://config.openepaperlink.org/)。

**步骤 2.** 点击 **Connect**，并在 BLE 配对对话框中选择您的 XIAO nRF52840 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 使用配置面板来设置主控 IC、电源参数、显示屏、LED、传感器、总线以及二进制输入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

**步骤 4.** 对于 Seeed 4.26" 单色 ePaper 的设置，请导入下面的示例配置。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank" rel="noopener noreferrer">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>4.26" 示例配置（JSON）</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

**步骤 5.** 点击 **Write Config** 将配置保存到 MCU。

</TabItem>
</Tabs>

## 步骤 4：上传图像

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E 系列" default>

OpenDisplay 设备可以通过浏览器显示工具接收图像。

**步骤 1.** 打开 [OpenDisplay display tool](https://opendisplay.org/firmware/display/index.html)。

**步骤 2.** 点击 **Connect**，并在 BLE 配对对话框中选择您的 reTerminal 设备。

**步骤 3.** 点击 **Select Image** 并选择本地图像文件。

**步骤 4.** 点击 **Upload Image**。

传输完成后，ePaper 显示屏会刷新并显示上传的图像。

:::tip
使用与面板分辨率匹配的图像尺寸可以获得最清晰的效果：

- reTerminal E1001：800 × 480 像素
- reTerminal E1002：800 × 480 像素
- reTerminal E1003：1404 × 1872 像素
:::

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**步骤 1.** 打开 [OpenDisplay display tool](https://opendisplay.org/firmware/display/index.html)。

**步骤 2.** 点击 **Connect**，并在 BLE 配对对话框中选择 EN04 设备。

**步骤 3.** 点击 **Select Image** 并选择本地图像文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>

**步骤 4.** 点击 **Upload Image**。传输完成后，ePaper 显示屏会刷新。

:::tip
请使用与所连接面板分辨率匹配的图像尺寸。例如，7.3" Spectra 6 面板使用 800 × 480 像素。
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

OEPL Image Uploader 是针对 OEPL_BLE 路径的独立 BLE 网页工具。

**步骤 1.** 打开 [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html)。

**步骤 2.** 在 **E-Paper prefix filter(s)** 中输入 `OEPL`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

**步骤 3.** 通过 BLE 连接到 XIAO 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

**步骤 4.** 点击 **Select File** 并选择本地图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

**步骤 5.** 点击 **Upload Image**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

当上传器显示 **Upload Complete** 时，ePaper 显示屏已经完成刷新。

</TabItem>
</Tabs>

## Home Assistant 集成

Home Assistant 为 OpenDisplay 固件设备提供了官方的 **OpenDisplay** 集成。它通过 BLE 通信，并提供 `opendisplay.upload_image` 动作用于向显示屏发送图像。

### 前置条件

- Home Assistant 2026.4 或更高版本。
- 一个可正常工作的 Bluetooth 设置，支持主动 BLE 连接。
- 一台已上电且在 Bluetooth 覆盖范围内的 OpenDisplay 固件设备。

以下 Bluetooth 路径是可行的：

- Home Assistant Green 或其他带有受支持 Bluetooth 硬件的 Home Assistant 主机。
- 运行 ESPHome 固件 2022.9.3 或更高版本的 ESPHome Bluetooth Proxy。

:::info
Shelly 蓝牙代理对被动 BLE 传感器很有用，但 OpenDisplay 图像上传需要主动 BLE 连接。请在此工作流中使用 Home Assistant 蓝牙适配器或 ESPHome Bluetooth Proxy。
:::

### 添加设备

**步骤 1.** 在 Home Assistant 中，进入 **Settings > Devices & services**。

**步骤 2.** 如果设备被自动发现，点击 OpenDisplay 卡片上的 **Add**。

**步骤 3.** 如果没有被自动发现，点击 **Add Integration**，搜索 **OpenDisplay**，并按照设置流程进行。

**步骤 4.** 分配设备名称和区域。

设备添加后，Home Assistant 可以通过蓝牙发现并连接到 OpenDisplay 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

### 从 Home Assistant 上传图像

将图像存储在 Home Assistant 的本地媒体文件夹中，然后调用 `opendisplay.upload_image`。

```yaml
action: opendisplay.upload_image
data:
  device_id: "your_device_id"
  image:
    media_content_id: "media-source://media_source/local/photo.png"
    media_content_type: "image/png"
```

对于定时更新，在自动化中使用相同的动作。

```yaml
triggers:
  - trigger: time
    at: "08:00:00"
actions:
  - action: opendisplay.upload_image
    data:
      device_id: "your_device_id"
      image:
        media_content_id: "media-source://media_source/local/daily.png"
        media_content_type: "image/png"
```

:::tip
在调用 `opendisplay.upload_image` 之前，使用 Home Assistant 自动化生成或复制新的 PNG。随后 OpenDisplay 集成会处理到显示屏的 BLE 传输。
:::

### 可选：自定义绘制负载

OpenDisplay 社区还维护了一个带有 `drawcustom` 工作流的 HACS 集成，可直接通过 Home Assistant 负载绘制文本、图标、形状、二维码、图像、图表和进度条。

当你特别需要绘图命令布局而不是上传预先准备好的图像时，请使用此路径。

<div class="github_container" style={{textAlign: 'center'}}>
	<a class="github_item" href="https://github.com/OpenDisplay-org/Home_Assistant_Integration" target="_blank" rel="noopener noreferrer">
	<strong><span><font color={'FFFFFF'} size={"4"}> OpenDisplay HACS 集成</font></span></strong>
	</a>
</div>

在 Home Assistant 可视化编辑器中，创建一个自动化，添加时间触发器，然后添加 OpenDisplay 绘制动作并选择目标设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

## 使用 ESPHome Bluetooth Proxy

ESPHome Bluetooth Proxy 可以扩展蓝牙覆盖范围，并在显示屏远离 Home Assistant 主机时提高可靠性。

### 前提条件

- 一块 ESP32 设备，例如 XIAO ESP32S3。
- 在 Home Assistant 中已安装 ESPHome。
- 用于首次烧录的 USB 数据线。

### 分步配置

**步骤 1.** 将 ESP32 设备连接到用于烧录的电脑或 Home Assistant 主机。

**步骤 2.** 创建一个新的 ESPHome 设备，并使用类似下面示例的 Bluetooth Proxy 配置。

```yaml
esphome:
  name: esps3-proxy
  friendly_name: ESP32S3 Bluetooth Proxy

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

logger:
  level: INFO

esp32_ble_tracker:
  scan_parameters:
    active: true

bluetooth_proxy:
  active: true

api:
  encryption:
    key: "YOUR_ENCRYPTION_KEY"

ota:
  - platform: esphome
    password: "YOUR_OTA_PASSWORD"

wifi:
  ssid: "YOUR_WIFI_SSID"
  password: "YOUR_WIFI_PASSWORD"

captive_portal:
```

**步骤 3.** 在 ESPHome 中点击 **Install**，并将固件烧录到 ESP32 设备。

**步骤 4.** 在 ESP32 连接到 Wi-Fi 后，在 Home Assistant 中添加已发现的 Bluetooth Proxy。

**步骤 5.** 在图像上传期间，将代理设备保持在靠近 OpenDisplay 设备的位置。

当代理工作正常时，Home Assistant 会显示 Bluetooth Proxy 已连接，并且可以通过它发现这块电子墨水屏。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png" style={{width:700, height:'auto'}}/></div>

## 额外内容：3D 打印支架

对于使用 7.3" Spectra 面板的 EN04，此社区模型为宜家 RODALM 相框提供了一个嵌件：

- **[MakerWorld]** [Seeed 7.3" Spectra Insert for IKEA RODALM Frame](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## 资源

- **[Web Tool]** [OpenDisplay Toolbox](https://opendisplay.org/firmware/toolbox/index.html)
- **[Web Tool]** [OpenDisplay display tool](https://opendisplay.org/firmware/display/index.html)
- **[Web Tool]** [OEPL Config Builder](https://config.openepaperlink.org/)
- **[Web Tool]** [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html)
- **[Home Assistant]** [Official OpenDisplay Integration](https://www.home-assistant.io/integrations/opendisplay/)

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
