---
description: reTerminal E1004 是一款 13.3 英寸开源全彩电子纸显示屏，由 ESP32-S3 驱动，采用 E Ink® Spectra™ 6 技术，并支持 SenseCraft HMI。
title: reTerminal E1004 入门指南
sidebar_position: 5
keywords:
  - reTerminal E1004
  - 电子纸显示屏
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - 智能家居仪表盘
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg
slug: /getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 4/24/2026
  author: Citric
createdAt: '2026-01-29'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1004/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E1004 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

reTerminal E1004 是一款 13.3 英寸开源全彩电子纸显示屏，电池续航最长可达 6 个月。其由 ESP32-S3 驱动，原生支持我们的 SenseCraft HMI 零代码 UI 平台，可轻松创建仪表盘，同时也支持 Home Assistant、Arduino 和 ESP-IDF 进行进一步开发。凭借 E Ink® Spectra™ 6 全彩电子纸显示技术，它非常适合作为数码相框、多彩仪表盘可视化等应用。

### 特性

- 高分辨率、美观且开箱即用的 E Ink® Spectra™6 彩色电子纸显示屏
- 使用 SenseCraft HMI 进行零代码 UI 设计与部署
- 支持图像幻灯片播放与实时数据同步，电池可续航数月
- 适应不同场景下的装饰与展示需求

## 规格参数

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">项目</th>
			<th align="center">描述</th>
		</tr>
		<tr>
			<td align="center"><strong>产品名称</strong></td>
			<td align="center">reTerminal E1004</td>
		</tr>
		<tr>
			<td align="center"><strong>处理器</strong></td>
			<td align="center">ESP32-S3，带 8MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>存储</strong></td>
			<td align="center">32MB Flash，支持 Micro SD 卡（最大 32GB，内置 16GB）</td>
		</tr>
		<tr>
			<td align="center"><strong>显示</strong></td>
			<td align="center">13.3" Spectra™ 6 全彩电子纸</td>
		</tr>
		<tr>
			<td align="center"><strong>分辨率</strong></td>
			<td align="center">1200 x 1600 像素</td>
		</tr>
		<tr>
			<td align="center"><strong>无线连接</strong></td>
			<td align="center">2.4GHz 802.11 b/g/n Wi-Fi，Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>传感器</strong></td>
			<td align="center">温度、湿度传感器</td>
		</tr>
		<tr>
			<td align="center"><strong>音频</strong></td>
			<td align="center">蜂鸣器（声音提醒）</td>
		</tr>
		<tr>
			<td align="center"><strong>电池</strong></td>
			<td align="center">5000mAh</td>
		</tr>
		<tr>
			<td align="center"><strong>电源输入</strong></td>
			<td align="center">USB-C 5V / 1A</td>
		</tr>
		<tr>
			<td align="center"><strong>工作温度</strong></td>
			<td align="center">0-40°C</td>
		</tr>
		<tr>
			<td align="center"><strong>尺寸</strong></td>
			<td align="center">376mm x 311mm x 40mm</td>
		</tr>
	</table>
</div>

## 应用场景

- **低功耗电子相框：** 以纸张般的显示效果呈现高分辨率家庭照片或艺术作品，而无需担心每天充电。
- **家庭信息板：** 以时尚、常显的形式展示日历、通知、天气和新闻等信息。
- **家庭自动化仪表盘：** 通过 Home Assistant 可视化实时智能家居数据（温度、湿度、空气质量）。
- **智能办公显示屏：** 显示会议室日程、使用状态或指引信息。
- **零售与公共标牌：** 用于菜单、时刻表或占用状态指示的节能显示方案。
- **教育与原型开发：** 学习物联网、嵌入式系统和 UI 设计的理想平台。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/209.png" style={{width:1000, height:'auto'}}/></div>

1. **电子纸显示屏：** 13.3" E Ink® Spectra™ 6 全彩电子纸显示区域。
2. **触摸按键：** 位于前面框上的电容式触摸按键，用于屏幕刷新和页面导航（上一页 / 下一页）。
3. **上一页 / 下一页 / 刷新按键：** 位于背面的物理按键，用于翻页和手动刷新电子纸显示。
4. **红色充电指示灯：** 指示电池充电状态。
5. **USB-C 数据与充电接口：** 用于设备充电和数据传输。
6. **电源开关：** 用于打开或关闭设备电源。
7. **绿色状态指示灯：** 指示当前运行或系统状态。
8. **复位按键：** 用于重置设备。
9. **Boot 按键：** 用于进入启动 / 固件下载模式。
10. **扩展接口：** 2 × 4Pin 排针，提供 VDD、GND、UART、I2C、GPIO 和 ADC 接口，用于连接外部传感器、模块或外设。
11. **支架安装螺纹孔：** 背面的螺纹孔，用于将设备固定在支架上。

## 快速上手

reTerminal E1004 预装了支持 **SenseCraft HMI** 的固件，这是一个零代码平台，可让你轻松设计并部署个性化仪表盘。

### 前期准备

**步骤 1.** 打开 reTerminal E1004 包装盒，确认所有配件齐全：

- reTerminal E1004 设备
- USB-C 线缆
- 快速入门指南
- 螺丝刀
- 螺丝
- 金属支架（支持横向和纵向放置）

**步骤 2.**（可选）安装金属支架，将设备以横向或纵向方式摆放：

找到包装内附带的金属支架。该支架通过 reTerminal E1004 背面的螺纹孔进行固定——你可以垂直安装以获得纵向方向，或者将支架旋转 90°，安装到另一组螺纹孔上以获得横向方向。使用附带的螺丝刀和螺丝固定支架。安装完成后，将 reTerminal E1004 放置在平坦的表面上，支架即可支撑其保持所选方向。

<div class="table-center">
<iframe width="600" height="380" src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/213.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**步骤 3.**（可选）更换或取出 microSD 卡。

reTerminal E1004 内置了一张 16GB microSD 卡，因此在大多数情况下你无需自行插卡。如果你想更换为其他容量的卡或取出该卡，请参考下方视频中的操作说明。

<div class="table-center">
<iframe width="600" height="380" src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/214.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
reTerminal E 系列电子纸显示屏仅支持容量不超过 32GB、格式为 Fat32 的 MicroSD 卡。  
32GB SD 卡默认格式为 exFAT。将其格式化为 FAT32 后，即可成功挂载并用于存储图片。
:::

**步骤 4.**（可选）如有需要，安装 USB 驱动：

根据你的操作系统，你可能需要安装 USB 驱动，以确保能够与 reTerminal E1004 正常通信：

<Tabs>
<TabItem value="Windows" label="Windows" default>

- Windows 11 系统通常已默认包含该驱动
- 对于 Windows 10 及更早版本，你可能需要从 [WCH official website](https://www.wch-ic.com/downloads/CH341SER_ZIP.html) 下载并安装 CH341 驱动

</TabItem>

<TabItem value="MacOS" label="MacOS">

从 [WCH official website](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) 下载并安装 CH34X 驱动

</TabItem>

<TabItem value="Linux" label="Linux">

大多数现代 Linux 发行版默认已包含所需驱动

</TabItem>
</Tabs>

### 开机

**步骤 1.** 将电源开关拨到 **ON** 位置以开启设备。电源开关位于机身背面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/215.gif" style={{width:600, height:'auto'}}/></div>

**步骤 2.** 首次启动时，设备会显示产品信息和网络配置说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/212.png" style={{width:400, height:'auto'}}/></div><br />

**步骤 3.** 绿色用户指示灯会点亮约 3 秒，表示设备已上电并正在初始化。若 30 秒内未对设备进行任何操作，为了节省电量，设备会自动进入睡眠模式，指示灯也会自动熄灭。

:::tip
因此，我们需要在这段时间内完成后续的网络配置步骤。当设备进入睡眠后，你将无法找到设备的热点。如果出现这种情况，可以通过按下前面框上的 **Refresh** 触摸按键，或背面的 **Refresh** 物理按键来唤醒设备。
:::

### 网络配置

<Tabs>
<TabItem value="Network Setup via PC" label="通过 PC 配置网络" default>

**步骤 1.** 使用手机或电脑连接设备的 Wi-Fi 热点。AP 名称会显示在屏幕上（无需密码）。网络凭据格式为 `reTerminal E1004-{MAC Address}`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**步骤 2.** 连接成功后，你的手机应会自动跳转到 Wi-Fi 配置页面。如果没有自动跳转，请打开浏览器并访问 `192.168.4.1`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**步骤 3.** 选择你的本地 Wi-Fi 网络并输入密码，然后点击 "Connect"。

:::note
reTerminal E 系列电子纸显示屏仅支持 2.4GHz WiFi 网络，不支持 5GHz 或其他频段。
:::

**步骤 4.** 连接成功后，设备会发出提示音并显示配对码界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/213.png" style={{width:400, height:'auto'}}/></div>

### 连接到 SenseCraft 平台

**步骤 1.** 在浏览器中访问 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi)，并创建账户或登录。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**步骤 2.** 在左侧边栏中点击 **Device** 进入设备页面，然后点击左上角的 **+ New Device** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/200.png" style={{width:600, height:'auto'}}/></div>

**步骤 3.** 为设备命名，并输入设备屏幕上显示的配对码，然后点击 **Create**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

**步骤 4.** 配对完成后，设备会显示一条消息，提示你创建第一个仪表盘。

</TabItem>
<TabItem value="Network Setup via SenseCraft APP" label="Network Setup via SenseCraft APP">

此方法使用 SenseCraft 手机应用通过蓝牙配置设备网络，并将其添加到你的 SenseCraft 账户。

首先下载 SenseCraft App。你可以在 Google Play 商店或 Apple App Store 中搜索 "SenseCraft" 获取。或者，你也可以从以下网站下载。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**步骤 1.** 打开 SenseCraft App，登录你的账户，并进入 **User** 选项卡。点击 **Device Bluetooth Configuration** 开始配置流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 2.** 在 "Please select the device type" 界面中，选择 **reTerminal E1004**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 3.** 按照屏幕上的指引将设备置于蓝牙广播模式。确保手机的蓝牙已开启。点击 **Scan**，应用会搜索附近的设备。从列表中选择你的设备进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 4.** 蓝牙连接成功后，应用会提示你设置 Wi-Fi 连接。从下拉列表中选择本地 2.4GHz Wi-Fi 网络，输入密码，然后点击 **Next**。

:::note
设备只能通过 2.4G Wi-Fi 网络进行配置。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 5.** 应用会将 Wi-Fi 凭据发送到设备，并将其添加到你的 SenseCraft 账户。完成后会出现 "Device added successfully" 消息。现在你可以点击 **Start exploring!** 继续。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 6.** 你的 reTerminal 现在会出现在应用主界面的 **Device** 选项卡设备列表中，并已成功连接到你的 SenseCraft 账户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 7.** 你可以点击列表中的设备进入其 **Device Detail** 页面。在这里可以管理设备并上传照片。对于更复杂的仪表盘和画布设计，系统会提示你使用 SenseCraft 的网页浏览器版本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### 固件更新

设备成功添加到你的 SenseCraft 账户后，平台会自动检查固件版本。如果有更新的固件可用，你会收到更新提示。

你也可以随时手动检查固件版本：

**步骤 1.** 在 **Device** 页面找到你的 reTerminal E1004 查看其详情，并记下 **当前固件版本**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/201.png" style={{width:350, height:'auto'}}/></div>

**步骤 2.** 在左侧边栏中点击 **Tools**，打开 **Firmware Flasher** 选项卡，以查看该设备可用的 **最新固件版本**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 如果当前版本低于最新版本，请按照 Firmware Flasher 页面上的 3 步流程进行更新：

1. **选择你的设备** — 通过 USB-C 线将 reTerminal E1004 插入电脑，确保电源开关为 **ON**，然后点击 **Select** 并在列表中选择你的设备。

2. **选择固件** — 在发布选项下拉列表中选择最新固件。

3. **烧录（Flash）** — 点击 **Flash** 并等待更新完成。仅当你希望将设备恢复到出厂状态时才启用 **Full Flash**（所有数据、设置和设计都会被清除）。

:::note

1. 更新固件可确保最佳性能并获取最新功能。

2. 当设备处于关机或睡眠状态时，无法正确烧录固件。如果你为设备选择了正确的端口，但始终看不到固件烧录进度，可能需要按下设备上的 **Refresh** 按钮唤醒设备，然后重试。

3. **执行标准 Flash** 可保留你的配置：Wi-Fi、已部署的设计和图片都会被保留。**执行 Full Flash 重新开始**：所有数据、设置和设计都会被清除（恢复出厂状态）。

:::

## 在 reTerminal E1004 上显示内容

设备配对完成后，你就可以开始用它显示你想要的内容。我们推荐使用 **SenseCraft HMI** —— 一个零代码云平台，只需几次点击即可为 reTerminal E1004 设计并部署内容。

SenseCraft HMI 拥有专门的 Wiki，提供完整的教程和功能文档。有关更深入的指南（账户设置、固件烧录、高级编辑器使用、部署等），请参考：

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

由于本文是产品 **快速上手**，我们不会在此重复相同内容——下面仅展示如何在 reTerminal E1004 上快速显示一些内容。

### Home — 从社区模板开始

最快在屏幕上显示内容的方法是从现成模板开始。在 SenseCraft HMI 的 **Home** 页面，你会看到一个由社区贡献的大量且持续增长的模板集合——仪表盘、时钟、天气面板、语录墙、日历、相框等。浏览图库，选择你喜欢的设计，一键部署到 reTerminal E1004 上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — 管理和设计你自己的内容

**Workspace** 页面用于管理当前绑定设备上显示的所有页面和内容。在这里你可以：

- 从零开始创建并排布你自己的设计页面
- 上传图片并将其组织成幻灯片
- 在一个拖拽式编辑器中组合文本、小部件、形状、数据、RSS 源、网页内容等
- 将最终设计通过无线方式部署到 reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/205.png" style={{width:1000, height:'auto'}}/></div>

设计保存后，点击 **Deploy to Device**，选择已配对的 reTerminal E1004，内容就会通过无线方式传输到设备上。电子墨水屏会更新以显示你的设计。

:::note
由于 E Ink 技术的特性，屏幕刷新可能需要几秒钟才能完全更新图像并清除残影。
:::

关于其他内容——编辑器的详细操作、技巧和发行说明——请参考 [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)。

## 操作设备

### 刷新按钮

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/216.jpg" style={{width:700, height:'auto'}}/></div>

刷新按钮要么位于设备正面下方最左侧按钮位置，要么位于设备背面如上图所示位置。它具有以下几个功能：

- **单击**：手动刷新显示并从 SenseCraft 平台检查新内容。蜂鸣器会响一声以确认操作。该按钮也常用于唤醒设备。当设备进入睡眠状态且通常无法立即接收到仪表盘刷新命令时，你可以使用此按钮唤醒设备。

- **长按**（未来功能）：将激活语音输入模式。

### 导航按钮

如果你的仪表盘包含多个页面，左右按钮可用于在多个页面之间导航：

- **左按键**：导航到上一页

- **右按键**：导航到下一页

### 网络重置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/217.jpg" style={{width:700, height:'auto'}}/></div>

如果你需要连接到不同的 Wi-Fi 网络：

**步骤 1.** 同时按住左右两个导航按键 2 秒。

**步骤 2.** 设备将进入 Wi-Fi 配置模式，你可以再次按照 [网络设置](#网络设置) 的步骤连接到新的网络。

### LED 指示灯

- **红色 LED**：
  - 关闭：已充满电或未在充电
  - 常亮：正在充电

- **绿色 LED**：
  - 启动时亮 3 秒：设备正在上电

### 电池运行

当使用电池供电时：

- 设备将在两次刷新之间自动进入低功耗模式

- 电池寿命取决于刷新频率（在默认设置下，满电通常可使用 3 个月）

- 当电池电量低于 20% 时，设备会在右上角显示低电量图标

:::tip
如果你想自己编写代码来读取电池电压，在 `analogRead()` 函数前增加 10ms 延时会更加精确。
:::

### 扩展引脚

reTerminal E1004 配备了一个 8 针扩展排针（J2），可用于连接外部传感器、模块或其他硬件，以扩展设备功能。该扩展排针引出了多个 ESP32-S3 GPIO 引脚和通信接口，使其成为 DIY 项目中非常灵活的连接点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/217.png" style={{width:700, height:'auto'}}/></div>

#### 扩展排针引脚定义

扩展连接器（J2）是一个 2×4 排针（料号 **ST-FH-254-0148-2×4P**），提供两列共 8 个引脚。下面的引脚位置标记使用 `Lx` 表示左列、`Rx` 表示右列（从上到下编号，如上图所示）：

<div class="table-center">
	<table align="center">
		<tr>
			<th>引脚</th>
			<th>标号</th>
			<th>ESP32-S3 引脚</th>
			<th>类型</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>L1</td>
			<td>I2C2_SCL</td>
			<td>GPIO40</td>
			<td>GPIO / I2C SCL</td>
			<td>GPIO 或 I2C 时钟信号</td>
		</tr>
		<tr>
			<td>L2</td>
			<td>I2C1_SDA</td>
			<td>GPIO39</td>
			<td>GPIO / I2C SDA</td>
			<td>GPIO 或 I2C 数据信号</td>
		</tr>
		<tr>
			<td>L3</td>
			<td>GND</td>
			<td>-</td>
			<td>地</td>
			<td>公共地参考</td>
		</tr>
		<tr>
			<td>L4</td>
			<td>3V3</td>
			<td>-</td>
			<td>电源</td>
			<td>为外部设备提供 3.3V 电源</td>
		</tr>
		<tr>
			<td>R1</td>
			<td>RX1</td>
			<td>GPIO42</td>
			<td>GPIO / UART RX</td>
			<td>GPIO 或 UART 接收（RX）信号</td>
		</tr>
		<tr>
			<td>R2</td>
			<td>TX1</td>
			<td>GPIO41</td>
			<td>GPIO / UART TX</td>
			<td>GPIO 或 UART 发送（TX）信号</td>
		</tr>
		<tr>
			<td>R3</td>
			<td>ADC</td>
			<td>GPIO6</td>
			<td>GPIO / ADC</td>
			<td>带有模拟输入能力的通用 I/O</td>
		</tr>
		<tr>
			<td>R4</td>
			<td>GND</td>
			<td>-</td>
			<td>地</td>
			<td>公共地参考</td>
		</tr>
	</table>
</div>

## 故障排查

### Q1：设备无法开机

- 确保电源开关处于 ON 位置
- 连接 USB-C 线缆为设备充电
- 检查红色 LED 是否常亮（表示正在充电）
- 如果使用电池供电，确保电池连接正确且已充电

### Q2：无法连接到 Wi-Fi

- 确认你输入了正确的 Wi-Fi 密码
- 确保你的 Wi-Fi 网络工作正常
- 检查你的 Wi-Fi 路由器是否支持 2.4GHz 网络（不支持 5GHz）
- 尝试将设备放置在更靠近 Wi-Fi 路由器的位置

### Q3：显示未更新

- 按下刷新按键手动触发一次更新
- 确认设备已连接到 Wi-Fi（角落中没有断线图标）
- 检查你的 SenseCraft 账户，确保仪表盘已正确部署
- 如果问题仍然存在，尝试重启设备
- 如果设备在重启后仍无响应，请在 SenseCraft HMI 平台上重新烧录对应固件，并检查设备是否可以正常刷新

### Q4：网络连接丢失

- 设备会自动尝试重新连接到已知网络
- 重新连接成功后，Wi-Fi 断线图标会消失
- 如果无法重新连接，请按照上面的网络重置步骤操作

### Q5：在 macOS 上找不到串口（COM）

如果你的 Mac 无法通过 USB 识别 reTerminal，请按照下面的简要指南安装 CH340/CH340K 驱动：

**步骤 1. 下载并安装驱动**
从 [官方 WCH 页面](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) 下载驱动并运行 `CH34xVCPDriver.pkg`。 
:::tip
如果 macOS 阻止安装，请前往 **System Settings → Privacy & Security**，向下滚动找到被阻止的 WCH 软件，然后点击 **Allow**。
:::
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/02_installer_welcome.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/03_install_success.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**步骤 2. 启用驱动扩展（关键）**
从 Launchpad 打开 **CH34xVCPDriver** 应用，点击 **Install**，然后前往 **System Settings → General → Login Items & Extensions → Driver Extensions**。将 **CH34xVCPDriver Extensions** 切换为 **ON**（蓝色）。
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle1.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle2.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**步骤 3. 连接并验证**
确保设备 **电源开关已打开**，并使用 **数据 USB-C 线缆**（非仅充电线）。打开 Terminal 并运行：
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

如果你在输出中看到了设备路径，说明驱动已正确安装，你的 reTerminal 可以正常使用了！

## 资源

- [reTerminal E1004 原理图 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004523_reTerminal%20E1004_V1.0_SCH_260105.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
