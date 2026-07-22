---
description: 本文将指导你快速上手 reTerminal E1002。
title: reTerminal E1002 入门指南
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_with_reterminal_e1002
sidebar_position: 3
last_update:
  date: 07/21/2025
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-06-16'
url: https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1002/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E1002 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div><br />

:::tip 在无需搭建开发环境的情况下体验示例
如果你想在搭建开发环境之前，快速预览项目效果或体验基础示例固件，请打开 **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**。你可以选择受支持的 reTerminal E 系列设备，并直接通过浏览器烧录示例固件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

:::caution 固件更新提示
我们建议你在收到产品后尽快**[完成产品固件更新](#preliminary)**，以获得最佳体验。
:::

:::danger 屏幕寿命警告
1. 如果你的 reTerminal 长时间处于闲置状态，你可以长按设备上的绿色按键 5 秒来清除屏幕内容（使用出厂固件），这可以有效防止残影并延长屏幕寿命。

2. 在条件允许的情况下，请尽量避免长时间（超过 1 天）显示同一画面，这可能会产生残影，建议屏幕画面至少每天刷新一次。如果设备长时间不使用，建议清除设备的显示内容。

3. 在使用和调试程序时，请尽量减少屏幕刷新的频率。长时间高速刷新屏幕也可能会降低屏幕的使用寿命。
:::

## 介绍

reTerminal E1002 是一款 7.3 英寸开源全彩电子纸显示屏，具备卓越的 3 个月电池续航。其由 ESP32-S3 驱动，原生支持我们的 SenseCraft HMI 零代码 UI 平台，可轻松创建仪表盘，同时也支持 Home Assistant、TRMNL E-ink dashboard、Arduino 和 ESP-IDF 进行进一步开发。凭借 E Ink® Spectra™ 6 全彩电子纸显示屏，它非常适合作为数码相框、多彩仪表盘可视化等应用。

### 特性

- **精美、开箱即用的 E Ink® Spectra™6 彩色电子纸显示屏**
- **超低功耗，电池续航长达 3 个月**
- **基于 SenseCraft HMI 的零代码 UI 设计与部署**
- **兼容主流软件平台**
- **灵活的软硬件定制能力**

## 规格参数

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">项目</th>
			<th align="center">描述</th>
		</tr>
		<tr>
			<td align="center"><strong>产品名称</strong></td>
			<td align="center">reTerminal E1002</td>
		</tr>
		<tr>
			<td align="center"><strong>处理器</strong></td>
			<td align="center">ESP32-S3，带 8MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>存储</strong></td>
			<td align="center">32MB Flash，支持 Micro SD 卡</td>
		</tr>
		<tr>
			<td align="center"><strong>显示屏</strong></td>
			<td align="center">7.3" 全彩（E Ink® Spectra™ 6）</td>
		</tr>
		<tr>
			<td align="center"><strong>分辨率</strong></td>
			<td align="center">800 x 480 像素</td>
		</tr>
		<tr>
			<td align="center"><strong>Micro SD 卡</strong></td>
			<td align="center">最大支持 32GB SD 卡，FAT32 格式</td>
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
			<td align="center"><strong>麦克风</strong></td>
			<td align="center">为语音交互应用预留</td>
		</tr>
		<tr>
			<td align="center"><strong>蜂鸣器</strong></td>
			<td align="center">用于声音提醒的蜂鸣器</td>
		</tr>
		<tr>
			<td align="center"><strong>电池</strong></td>
			<td align="center">2000mAh</td>
		</tr>
		<tr>
			<td align="center"><strong>电源输入</strong></td>
			<td align="center">USB-C 5V/1A</td>
		</tr>
		<tr>
			<td align="center"><strong>工作温度</strong></td>
			<td align="center">0-40°C</td>
		</tr>
		<tr>
			<td align="center"><strong>尺寸</strong></td>
			<td align="center">176mm x 120mm x 53mm（带支架）/ 17mm（不带支架）</td>
		</tr>
	</table>
</div>

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/207.png" style={{width:1000, height:'auto'}}/></div><br />

reTerminal E1002 的硬件包括：

1. **7.3 英寸全彩电子纸显示屏**：800×480 分辨率的全彩显示屏
2. **按键**：位于设备顶部，用于手动操作屏幕
3. **麦克风**
4. **MicroSD 卡槽**：用于扩展存储
5. **电源开关**：位于背面，用于开启/关闭设备电源
6. **状态指示灯**：用户指示灯（绿色）
7. **电源指示灯**：充电指示灯（红色）
8. **USB-C 接口**：用于充电和固件更新
9. **扩展接口**：8 针扩展排针，提供 VDD、GND、UART、I2C 和 GPIO 连接
10. **支架安装孔位**：设备背面底部内嵌螺母（螺丝孔），用于安装 3D 打印支架

## 快速上手

### 前期准备

**步骤 1.** 打开 reTerminal E1002 包装盒，确认所有配件齐全：

- reTerminal E1002 设备
- USB-C 线缆
- 快速入门指南
- 长螺丝刀
- 螺丝
- 3D 打印支架

**步骤 2.**（可选）安装 3D 打印支架，使设备能够竖直放置：

找到包装中附带的 3D 打印支架，将支架对准 reTerminal E1002 背面底部指定的安装区域（嵌入螺母的位置）。使用长螺丝刀将螺丝拧入 reTerminal E1002 背面的嵌入螺母中，将支架牢固固定在设备上。安装完成后，将 reTerminal E1002 放置在平坦的表面上，支架即可支撑其保持竖直状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
该支架提供固定的观看角度，无法调节。此固定位置旨在在大多数使用场景下提供最佳可视性。
:::

**步骤 3.**（可选）如果你计划将设备用作数码相框或需要额外存储空间，请插入一张 microSD 卡。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
reTerminal E 系列电子纸显示屏仅支持容量不超过 32GB、格式为 Fat32 的 MicroSD 卡。  
32GB SD 卡默认格式为 exFAT。将其格式化为 FAT32 后，即可成功挂载并用于存储图片。
:::

**步骤 4.**（可选）如有需要，安装 USB 驱动：

根据你的操作系统，你可能需要安装 USB 驱动，以确保与 reTerminal E1002 正常通信：

<Tabs>
<TabItem value="Windows" label="Windows" default>

- Windows 11 系统通常已默认包含该驱动
- 对于 Windows 10 及更早版本，你可能需要从 [WCH 官方网站](https://www.wch-ic.com/downloads/CH341SER_ZIP.html) 下载并安装 CH341 驱动

</TabItem>

<TabItem value="MacOS" label="MacOS">

从 [WCH 官方网站](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) 下载并安装 CH34X 驱动

</TabItem>

<TabItem value="Linux" label="Linux">

大多数现代 Linux 发行版通常已默认包含所需驱动

</TabItem>
</Tabs>

### 开机

**步骤 1.** 将电源开关拨到 **ON** 位置以开启设备。电源开关位于机身背面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>


**步骤 2.** 首次启动时，设备会显示产品信息和网络配置说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/17.png" style={{width:600, height:'auto'}}/></div><br />


**步骤 3.** 绿色用户指示灯会点亮约 30 秒，表示设备已上电并正在初始化。在 30 秒内如果没有对设备进行任何操作，为了保证电量，设备会自动进入休眠模式，指示灯会自动熄灭。

:::tip
因此，我们需要在这段时间内完成后续的网络配置步骤。当设备进入休眠后，你将无法找到设备的热点。如果出现这种情况，可以按一次设备上的绿色唤醒按键来唤醒设备。
:::

### 网络配置

<Tabs>
<TabItem value="Network Setup via PC" label="通过 PC 配置网络" default>

**步骤 1.** 使用手机或电脑连接设备的 Wi-Fi 接入点。AP 名称会显示在屏幕上（无需密码）。网络凭据为 `reTerminal E1002-{MAC Adress}`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**步骤 2.** 连接成功后，你的手机应会自动跳转到 Wi-Fi 配置页面。如果没有自动跳转，请打开浏览器并访问 `192.168.4.1`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**步骤 3.** 选择你本地的 Wi-Fi 网络并输入密码，然后点击 "Connect"。

:::note
reTerminal E 系列电子墨水屏仅支持 2.4GHz WiFi 网络，不支持 5GHz 或其他频段。
:::

**步骤 4.** 连接成功后，设备会发出提示音并显示配对码界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/2.png" style={{width:600, height:'auto'}}/></div>

### 连接到 SenseCraft 平台

**步骤 1.** 在浏览器中访问 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi)，并创建账号或登录。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**步骤 2.** 在左侧边栏点击 **Device** 进入设备页面，然后点击左上角的 **+ New Device** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/200.png" style={{width:600, height:'auto'}}/></div>

**步骤 3.** 为你的设备命名，并输入设备屏幕上显示的配对码，然后点击 **Create**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**步骤 4.** 配对完成后，设备会显示一条消息，提示你创建第一个仪表盘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/18.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup via SenseCraft APP" label="通过 SenseCraft APP 进行网络设置">

此方法使用 SenseCraft 手机应用，通过蓝牙为设备配置网络并将其添加到你的 SenseCraft 账号中。

首先下载 SenseCraft App。你可以在 Google Play 商店或 Apple App Store 中搜索 "SenseCraft" 获取。或者，你也可以从以下网站下载。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**步骤 1.** 打开 SenseCraft App，登录你的账号，并进入 **User** 选项卡。点击 **Device Bluetooth Configuration** 开始配置流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 2.** 在 "Please select the device type" 界面，选择你的 reTerminal 型号（例如 **reTerminal E1001** 或 **reTerminal E1002**）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 3.** 按照屏幕上的指引将设备置于蓝牙广播模式。通常是同时按下 **Up** 和 **Down** 翻页按键。确保手机的蓝牙已开启。点击 **Scan**，应用会搜索附近的设备。从列表中选择你的设备进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 4.** 通过蓝牙连接成功后，应用会提示你设置 Wi-Fi 连接。从下拉列表中选择本地的 2.4GHz Wi-Fi 网络，输入密码，然后点击 **Next**。

:::note
设备只能通过 2.4G Wi-Fi 网络进行配置。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 5.** 应用会将 Wi-Fi 凭据发送到设备，并将其添加到你的 SenseCraft 账号中。完成后会出现 "Device added successfully" 提示信息。现在你可以点击 **Start exploring!** 继续。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 6.** 你的 reTerminal 现在会出现在应用主界面的 **Device** 选项卡设备列表中，并已成功连接到你的 SenseCraft 账号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 7.** 你可以点击列表中的设备进入其 **Device Detail** 页面。在这里可以管理设备并上传照片。对于更复杂的仪表盘和画布设计，系统会提示你使用 SenseCraft 的网页版本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### 固件更新

当设备成功添加到你的 SenseCraft 账号后，平台会自动检查固件版本。如果有更新的固件可用，你会收到更新提示。

你也可以随时手动检查固件版本：

**步骤 1.** 在 **Device** 页面找到你的 reTerminal E1002 查看其详情，并记下**当前固件版本**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/201.png" style={{width:350, height:'auto'}}/></div>

**步骤 2.** 在左侧边栏点击 **Tools**，打开 **Firmware Flasher** 选项卡，以查看该设备可用的**最新固件版本**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 如果当前版本低于最新版本，请按照 Firmware Flasher 页面上的 3 步流程进行更新：

1. **选择你的设备** — 使用 USB-C 线将 reTerminal E1002 连接到电脑，确保电源开关为 **ON**，然后点击 **Select** 并在列表中选择你的设备。

2. **选择固件** — 在下拉菜单中选择最新的固件版本。

3. **烧录（Flash）** — 点击 **Flash** 并等待更新完成。仅当你希望将设备恢复到出厂状态时才启用 **Full Flash**（所有数据、设置和设计都会被清除）。

:::note

1. 更新固件可以确保最佳性能并获取最新功能。

2. 当设备处于关机或睡眠状态时，无法正确烧录固件。如果你选择了正确的设备端口却始终看不到固件烧录进度，可能需要按下设备顶部的绿色按钮唤醒设备，然后重试。

3. **执行标准 Flash** 可保留你的配置：Wi-Fi、已部署的设计和图片都会被保留。**执行 Full Flash 以全新开始**：所有数据、设置和设计都会被清除（恢复出厂状态）。

:::

## 在你的 reTerminal E1002 上显示内容

设备配对完成后，你就可以开始用它来显示你想要的内容。我们推荐使用 **SenseCraft HMI** —— 一个零代码云平台，只需几次点击就能为 reTerminal E1002 设计并部署内容。

SenseCraft HMI 拥有专门的 Wiki，提供完整的教程和功能文档。关于更深入的指南（账号设置、固件烧录、高级编辑器使用、部署等），请参考：

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

由于本文是产品**入门指南**，我们不会在此重复相同内容——下面仅展示如何在你的 reTerminal E1002 上快速显示一些内容。

### Home — 从社区模板开始

最快在屏幕上显示内容的方法是从现成模板开始。在 SenseCraft HMI 的 **Home** 页面，你会看到一个由社区贡献、规模庞大且持续增长的模板集合——仪表盘、时钟、天气面板、语录墙、日历、相框等。浏览图库，选择你喜欢的设计，一键部署到你的 reTerminal E1002 上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — 管理和设计你自己的内容

**Workspace** 页面用于管理当前绑定设备上显示的所有页面和内容。在这里你可以：

- 从零开始创建和排列你自己的设计页面
- 上传图片并将其组织成幻灯片
- 在一个拖拽式编辑器中组合文本、小部件、形状、数据、RSS 源、网页内容等
- 将最终设计通过无线方式部署到你的 reTerminal E1002

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/205.png" style={{width:1000, height:'auto'}}/></div>

设计保存后，点击 **Deploy to Device**，选择已配对的 reTerminal E1002，内容就会通过无线方式传输到设备。电子墨水屏会更新以显示你的设计，如果你创建了多个页面，可以使用设备上的左/右导航按钮在页面之间切换。

关于其他内容——编辑器的详细操作、技巧和更新说明——请参考 [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)。

## 操作设备

### 刷新按钮

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

设备顶部的刷新按钮具有以下几个功能：

- **单击**：手动刷新显示屏并从 SenseCraft 平台检查新内容。蜂鸣器会鸣叫一次以确认操作。此按钮也常用于唤醒设备。当设备进入睡眠状态且通常无法立即向设备发送仪表盘刷新命令时，你可以使用此按钮唤醒设备。

- **长按**（未来功能）：将激活语音输入模式。

### 导航按钮

如果你的仪表盘包含多个页面，左右按钮可用于在多个页面之间导航：

- **左键**：导航到上一页

- **右键**：导航到下一页

### 网络重置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

如果你需要连接到不同的 Wi-Fi 网络：

**步骤 1.** 同时按住两个导航按钮（左和右）2 秒钟。

**步骤 2.** 设备将进入 Wi-Fi 配置模式，你可以再次按照 [网络设置](#网络设置) 的步骤连接到新网络。

### LED 指示灯

- **红色 LED**：
  - 熄灭：已充满电或未在充电
  - 常亮：正在充电

- **绿色 LED**：
  - 启动时亮 30 秒：设备正在上电

### 电池运行

当使用电池供电时：

- 设备将在两次刷新之间自动进入低功耗模式

- 电池寿命取决于刷新频率（在默认设置下，满电通常可使用 3 个月）

- 当电池电量低于 20% 时，设备会在右上角显示低电量图标

:::tip
如果你想自己编写一些代码来读取电池电压，在 `analogRead()` 函数之前添加 10ms 延时会更加精确。
:::

### 扩展引脚

reTerminal E1002 配备了一个 8 针扩展排针（J2），可用于连接外部传感器、模块或其他硬件，以扩展设备的功能。该扩展排针引出了多个 ESP32-S3 GPIO 引脚和通信接口，使其成为 DIY 项目中多功能的连接点。

#### 扩展排针引脚定义

8 针扩展排针（J2）的引脚定义如下：

<div class="table-center">
	<table align="center">
		<tr>
			<th>引脚（从上到下）</th>
			<th>标号</th>
			<th>ESP32-S3 引脚</th>
			<th>功能</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>1</td>
			<td>HEADER_3V3</td>
			<td>-</td>
			<td>电源</td>
			<td>为外部设备提供 3.3V 电源</td>
		</tr>
		<tr>
			<td>2</td>
			<td>GND</td>
			<td>-</td>
			<td>地</td>
			<td>公共地参考</td>
		</tr>
		<tr>
			<td>3</td>
			<td>ESP_IO46</td>
			<td>GPIO46</td>
			<td>GPIO/ADC</td>
			<td>具有模拟输入能力的通用 I/O</td>
		</tr>
		<tr>
			<td>4</td>
			<td>ESP_IO2/ADC1_CH4</td>
			<td>GPIO2</td>
			<td>GPIO/ADC</td>
			<td>具有模拟输入能力的通用 I/O（ADC1 通道 4）</td>
		</tr>
		<tr>
			<td>5</td>
			<td>ESP_IO17/TX1</td>
			<td>GPIO17</td>
			<td>GPIO/UART TX</td>
			<td>GPIO 或 UART 发送（TX）信号</td>
		</tr>
		<tr>
			<td>6</td>
			<td>ESP_IO18/RX1</td>
			<td>GPIO18</td>
			<td>GPIO/UART RX</td>
			<td>GPIO 或 UART 接收（RX）信号</td>
		</tr>
		<tr>
			<td>7</td>
			<td>ESP_IO20/I2C0_SCL</td>
			<td>GPIO20</td>
			<td>GPIO/I2C SCL</td>
			<td>GPIO 或 I2C 时钟信号</td>
		</tr>
		<tr>
			<td>8</td>
			<td>ESP_IO19/I2C0_SDA</td>
			<td>GPIO19</td>
			<td>GPIO/I2C SDA</td>
			<td>GPIO 或 I2C 数据信号</td>
		</tr>
	</table>
</div>

## 故障排查

### Q1：设备无法开机

- 确保电源开关处于 ON 位置
- 连接 USB-C 线为设备充电
- 检查红色 LED 是否常亮（表示正在充电）
- 如果使用电池供电，确保电池连接正确且有电

### Q2：无法连接到 Wi-Fi

- 确认你输入了正确的 Wi-Fi 密码
- 确保你的 Wi-Fi 网络正常工作
- 检查你的 Wi-Fi 路由器是否支持 2.4GHz 网络（不支持 5GHz）
- 尝试将设备放置在更靠近 Wi-Fi 路由器的位置

### Q3：显示未更新

- 按下刷新按钮手动触发更新
- 确认设备已连接到 Wi-Fi（角落中没有断开连接图标）
- 检查你的 SenseCraft 账户，确保仪表盘已正确部署
- 如果问题仍然存在，尝试重启设备
- 如果设备在重启后仍无响应，请在 SenseCraft HMI 平台上重新烧录相应固件，并检查设备是否可以正常刷新

### Q4：网络连接丢失

- 设备会自动尝试重新连接到已知网络
- 重新连接后，Wi-Fi 断开图标将消失
- 如果无法重新连接，请按照上面的网络重置步骤操作

### Q5：在 macOS 上找不到串口（COM）

如果你的 Mac 无法通过 USB 识别 reTerminal，请按照以下简要指南安装 CH340/CH340K 驱动：

**步骤 1. 下载并安装驱动**
从[官方 WCH 页面](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)下载驱动并运行 `CH34xVCPDriver.pkg`。 
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
确保设备**电源开关已打开**，并使用**数据 USB-C 线缆**（非仅充电线）。打开 Terminal 并运行：
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

如果你在输出中看到设备路径，则说明驱动已正确安装，你的 reTerminal 可以正常使用了！

### Q6：设备无法充电

如果你发现设备无法充电，请尝试将充电头更换为非苹果品牌的电源适配器。

## 资源

- [reTerminal E1002 原理图（PDF）](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004321_reTerminal_E1002_V1_2_SCH_251120.pdf)
- [ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [SenseCraft HMI 平台文档](https://wiki.seeedstudio.com/cn/sensecraft_hmi_overview)
- [外壳整体 3D 模型 STP 文件](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reterminal_esp-250904.stp)
<!-- - [GitHub Repository](/cn/getting_started_with_reterminal_e1002) -->

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
