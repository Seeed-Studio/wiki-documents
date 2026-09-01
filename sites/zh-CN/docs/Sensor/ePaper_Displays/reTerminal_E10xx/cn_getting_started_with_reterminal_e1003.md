---
description: reTerminal E1003 是一款 10.3 英寸开源黑白电子纸显示屏，具备 16 级灰度和 1404×1872 像素的高分辨率，在 HMI 固件 v1.1.2 上支持触控交互。
title: reTerminal E1003 入门指南
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
sidebar_position: 4
sku: 100090602
last_update:
  date: 05/09/2026
  author: dimo
createdAt: '2026-03-18'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1003/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E1003 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

:::tip 在不搭建开发环境的情况下体验演示
如果你想在搭建开发环境之前，快速预览项目效果或体验基础演示固件，请打开 **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**。你可以选择受支持的 reTerminal E 系列设备，并直接通过浏览器烧录演示固件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 固件烧录工具 🖱️</font></span></strong>
    </a>
</div><br />
:::

## 介绍

reTerminal E1003 是一款 10.3 英寸支持触控的开源黑白电子纸显示屏，具备 16 级灰度和 1404×1872 像素的高分辨率，在每天刷新一次的情况下，电池续航最长可达 6 个月。其由 ESP32-S3 提供算力，原生支持我们的零代码 UI 平台 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi)，可轻松创建仪表盘。无论是智能家居仪表盘可视化与控制、办公信息展示，还是教育项目，这款开箱即用的触控设备都能提供出色的显示效果和灵活的定制能力，满足你的各种需求。

:::tip
reTerminal E1003 的触控交互从 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 固件 v1.1.2 开始支持。目前最新版本为 v1.1.4.3 —— 我们建议升级到该版本以获得最佳体验。
与触控相关的库支持计划在未来开源发布，以提供更大的面板定制灵活性。更多更新将很快与大家分享。

reTerminal E1003 在 Home Assistant 中支持 [ESPHome](/cn/reterminal_e10xx_with_esphome)。你可以先从[显示 cookbook](/cn/reterminal_e10xx_with_esphome)开始，然后继续阅读 [I/O、电池、触控和低功耗](/cn/reterminal_e10xx_with_esphome_advanced) 以及 [RTC、SD 卡和麦克风](/cn/reterminal_e10xx_with_esphome_rtc_sd_microphone)。E1003 显示驱动需要 ESPHome **2026.7.0 或更高版本**。
:::

### 特性

- 3 秒全屏刷新，实现响应更快的电子纸仪表盘
- 借助 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 和触控支持，轻松构建交互界面
- 16 级灰度与高分辨率电子纸显示，呈现清晰细腻的视觉效果
- 最长 6 个月电池续航（基于每天刷新一次）
- 灵活的软硬件定制能力


## 规格参数

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">项目</th>
			<th align="center">描述</th>
		</tr>
		<tr>
			<td align="center"><strong>产品名称</strong></td>
			<td align="center">reTerminal E1003</td>
		</tr>
		<tr>
			<td align="center"><strong>处理器</strong></td>
			<td align="center">ESP32-S3，带 8MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>存储</strong></td>
			<td align="center">32 MB Flash；支持 microSD 卡</td>
		</tr>
		<tr>
			<td align="center"><strong>显示</strong></td>
			<td align="center">10.3" 黑白 / 16 级灰度</td>
		</tr>
		<tr>
			<td align="center"><strong>分辨率</strong></td>
			<td align="center">1404 x 1872 像素</td>
		</tr>
		<tr>
			<td align="center"><strong>Micro SD 卡</strong></td>
			<td align="center">支持最大 64 GB 的 microSD 卡（FAT32）</td>
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
			<td align="center">预留用于语音交互应用</td>
		</tr>
		<tr>
			<td align="center"><strong>音频</strong></td>
			<td align="center">蜂鸣器，用于声音提醒</td>
		</tr>
		<tr>
			<td align="center"><strong>电池</strong></td>
			<td align="center">3000mAh</td>
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
			<td align="center">224mm x 187mm x 18.6mm</td>
		</tr>
	</table>
</div>


## 应用场景

- **家庭自动化仪表盘：** 通过 Home Assistant 显示温度、湿度、空气质量等智能家居实时数据。
- **低功耗黑白电子相框：** 借助 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 或 App，你可以轻松远程上传相册中的一系列照片。配合大尺寸、高分辨率的黑白电子墨水屏，实现超低功耗的图像显示，让你不再担心电池续航。
- **智能办公显示屏：** 在低功耗、类“永远在线”的电子纸屏上显示会议室占用情况、办公日程或指引信息。
- **零售与公共信息展示：** 用于菜单、时刻表或占用指示等的低功耗电子纸标牌，具备长续航能力。


## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/208.png" style={{width:1000, height:'auto'}}/></div>

1. **10.3 英寸电子纸显示屏：** 支持触控的黑白面板，具备 16 级灰度和 1404×1872 分辨率
2. **按键：** 位于设备顶部 —— **绿色按键** 用于手动刷新屏幕；**两个白色按键** 为向上翻页和向下翻页，用于在页面之间导航
3. **麦克风：** 载板上的 PDM 数字麦克风，用于语音交互应用
4. **MicroSD 卡 / TF 卡槽：** 用于扩展存储（FAT32，最大 64 GB）
5. **电源开关：** 用于打开或关闭设备。
6. **红色电源指示灯：** 指示电池充电状态。
7. **绿色状态指示灯：** 指示当前运行或系统状态。
8. **USB-C 数据与充电接口：** 用于给设备充电和进行数据传输。
9. **扩展接口：** 排针提供 VDD、GND、I2C 和 GPIO 连接，用于外接传感器、模块或外设。
10. **支架安装螺丝孔：** 位于设备背面的螺纹孔，用于固定支撑支架。

## 快速上手

reTerminal E1003 预装了支持 **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** 的固件，这是一个零代码平台，可让你轻松设计并部署个性化仪表盘。

### 前期准备

**步骤 1.** 打开 reTerminal E1003 包装盒，确认所有配件齐全：

- reTerminal E1003 电子纸显示屏
- USB Type-C 线缆
- 快速入门指南
- 螺丝刀
- 螺丝
- 3D 打印支撑支架

**步骤 2.**（可选）安装 3D 打印支撑支架，使设备可以竖直放置：

找到包装中附带的 3D 打印支撑支架，将支架对准 reTerminal E1003 背面带有嵌入螺母的指定安装区域。使用螺丝刀将螺丝拧入背面的嵌入螺母中，将支架牢固固定在设备上。安装完成后，将 reTerminal E1003 放置在平整的表面上，支架即可支撑其保持竖直状态。

:::note
该支架提供固定的观看角度，无法调节。此固定位置旨在在大多数使用场景下提供最佳可视性。
:::

**步骤 3.**（可选）如果你计划将设备用作电子相框或需要额外存储空间，请插入一张 microSD 卡。

:::note
reTerminal E1003 支持 **64 GB** 以内、FAT32 格式的 microSD 卡。  
大于 32 GB 的卡通常默认格式为 exFAT。将其格式化为 FAT32 后，即可挂载并用于存储图片。
:::

**步骤 4.**（可选）如有需要，安装 USB 驱动：

根据你的操作系统，你可能需要安装 USB 驱动，以确保与 reTerminal E1003 正常通信：

<Tabs>
<TabItem value="Windows" label="Windows" default>

- Windows 11 系统通常已默认包含该驱动
- 对于 Windows 10 及更早版本，你可能需要从 [WCH 官方网站](https://www.wch-ic.com/downloads/CH341SER_ZIP.html) 下载并安装 CH341 驱动

</TabItem>

<TabItem value="MacOS" label="MacOS">

如果你使用的是 Mac，并且之前没有手动安装过 CH34X 驱动，请按照以下步骤完成安装：

**步骤 1. 下载并安装驱动**
从 [WCH 官方页面](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) 下载驱动，并运行 `CH34xVCPDriver.pkg`。 
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
确保设备的**电源开关处于 ON**，并使用**数据 USB-C 线缆**（非仅充电线）。打开 Terminal 并运行：
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

如果你在输出中看到了设备路径，说明驱动已正确安装，你的 reTerminal 已准备就绪，可以开始使用了！

</TabItem>

<TabItem value="Linux" label="Linux">

Ubuntu 22.04 及更高版本默认已包含所需驱动。
对于更早的发行版，如果设备无法被识别，你可能需要手动加载驱动。


</TabItem>
</Tabs>

### 开机

**步骤 1.** 将电源开关拨到 **ON** 位置以开启设备。电源开关位于机身背面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/235.gif" style={{width:700, height:'auto'}}/></div>

**步骤 2.** 首次启动时，设备会显示产品信息和网络配置说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/229.png" style={{width:600, height:'auto'}}/></div><br />

**步骤 3.** 绿色状态指示灯会亮起约 3 秒后熄灭，这表示设备已上电并正在初始化。如果在 30 秒内没有进行任何操作，设备会自动进入睡眠模式以节省电量。

:::tip
因此，我们需要在这段时间内完成后续的网络配置步骤。当设备进入睡眠后，你将无法找到设备的热点。如果出现这种情况，可以按下机身顶部的 **Refresh** 按钮唤醒设备。
:::

### 网络配置

<Tabs>
<TabItem value="Network Setup via PC" label="Network Setup via PC" default>

**步骤 1.** 使用手机或电脑连接设备的 Wi-Fi 接入点。AP 名称会显示在屏幕上（无需密码）。网络凭据为 `reTerminal E1003-{MAC Address}`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/228.png" style={{width:400, height:'auto'}}/></div><br />

**步骤 2.** 连接成功后，你的手机应会自动跳转到 Wi-Fi 配置页面。如果没有自动跳转，你可以使用手机扫描 reTerminal E1003 屏幕上显示的二维码，或在浏览器中手动访问 `192.168.4.1`。

如果输入了错误的密码，只需重新输入并再次提交即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/222.png" style={{width:700, height:'auto'}}/></div><br />

**步骤 3.** 选择你的本地 Wi-Fi 网络并输入密码，然后点击 “Connect”。

:::note
reTerminal E 系列电子墨水屏仅支持 2.4 GHz Wi-Fi 网络，不支持 5 GHz 或其他频段。
:::

**步骤 4.** 连接成功后，设备会发出提示音并显示配对码界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/230.png" style={{width:600, height:'auto'}}/></div>

### 连接到 SenseCraft 平台

**步骤 1.** 在浏览器中访问 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi)，创建账号或登录。



**步骤 2.** 在左侧边栏点击 **Device** 进入设备页面，然后点击左上角的 **+ New Device** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/225.png" style={{width:600, height:'auto'}}/></div>

**步骤 3.** 为你的设备命名，并输入设备屏幕上显示的配对码，然后点击 **Create**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**步骤 4.** 配对成功后，设备会显示一条提示信息，提醒你创建第一个仪表盘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/231.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup via SenseCraft APP" label="Network Setup via SenseCraft APP">

此方法通过 SenseCraft 手机应用来配置设备网络，并通过蓝牙将其添加到你的 SenseCraft 账号中。

首先下载 SenseCraft App。你可以在 Google Play Store 或 Apple App Store 中搜索 “SenseCraft” 获取。或者，你也可以从本网站下载。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**步骤 1.** 打开 SenseCraft App，登录你的账号，并进入 **User** 选项卡。点击 **Device Bluetooth Configuration** 开始配置流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 2.** 在 “Please select the device type” 界面中，选择 **reTerminal E1003**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/225.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 3.** 按照屏幕提示将设备置于蓝牙广播模式。确保手机的蓝牙已开启。点击 **Scan**，应用会搜索附近的设备。从列表中选择你的设备进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 4.** 通过蓝牙连接成功后，应用会提示你设置 Wi-Fi 连接。从下拉列表中选择本地 2.4GHz Wi-Fi 网络，输入密码，然后点击 **Next**。

:::note
设备只能通过 2.4 GHz Wi-Fi 网络进行配置。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 5.** 应用会将 Wi-Fi 凭据发送到设备，并将其添加到你的 SenseCraft 账号中。完成后会显示 “Device added successfully” 提示信息。此时你可以点击 **Start exploring!** 继续操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 6.** 你的 reTerminal 现在会出现在应用主界面的 **Device** 选项卡设备列表中，表示已成功连接到你的 SenseCraft 账号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 7.** 你可以点击列表中的设备进入其 **Device Detail** 页面。在这里可以管理设备并上传图片。对于更复杂的仪表盘和画布设计，系统会提示你使用 SenseCraft 的网页版。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### 固件更新

当设备成功添加到你的 SenseCraft 账号后，平台会自动检查固件版本。如果有更新的固件可用，你会收到更新提示。

你也可以随时手动检查固件版本：

**步骤 1.** 在 **Device** 页面找到你的 reTerminal E1003 查看其详情，并记下**当前固件版本**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/227.png" style={{width:350, height:'auto'}}/></div>

**步骤 2.** 在左侧边栏点击 **Tools** 并打开 **Firmware Flasher** 选项卡，以查看该设备可用的**最新固件版本**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 如果当前版本低于最新版本，请按照 Firmware Flasher 页面上的 3 步流程进行更新：

1. **选择你的设备** — 通过 USB-C 线缆将 reTerminal E1003 插入电脑，确保电源开关为 **ON**，然后点击 **Select** 并在列表中选择你的设备。

2. **选择固件** — 在发布选项下拉列表中选择最新固件。

3. **烧录** — 点击 **Flash** 并等待更新完成。仅当你希望将设备恢复到出厂状态时才启用 **Full Flash**（所有数据、设置和设计都会被清除）。

:::note

1. 更新固件可以确保最佳性能并获取最新功能。reTerminal E1003 的触控交互需要固件 **v1.1.2 或更高版本**。当前最新版本为 v1.1.4.3 —— 我们建议更新到该版本以获得最佳体验。

2. 当设备处于关机或睡眠状态时，无法正确烧录固件。如果你为设备选择了正确的端口，但始终看不到固件烧录进度，你可能需要按下机身顶部的 **Refresh** 按钮唤醒设备，然后重试。

3. **执行标准烧录（Standard Flash）** 以保留你的设置：Wi-Fi、已部署的设计和图片都会被保留。**执行完整烧录（Full Flash）以全新开始**：所有数据、设置和设计都会被清除（恢复出厂状态）。

:::

## 在你的 reTerminal E1003 上显示内容

设备配对完成后，你就可以开始用它来显示你想要的任何内容。我们推荐使用 **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** —— 一个零代码云平台，只需几次点击就能为你的 reTerminal E1003 设计并部署内容。

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 拥有独立的 Wiki，提供完整的教程和功能文档。关于更深入的指南（账号设置、固件烧录、高级编辑器使用、部署等），请参考：

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

由于本文是产品的**入门指南（Getting Started）**，我们不会在此重复相同内容——下面仅展示如何在你的 reTerminal E1003 上快速显示一些内容。

### Home —— 从社区模板开始

最快在屏幕上显示内容的方式是从现成模板开始。在 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 的 **Home** 页面，你可以找到一个由社区贡献、规模庞大且持续增长的模板集合——仪表盘、时钟、天气面板、语录墙、日历、相框等。浏览图库，选择你喜欢的设计，一键部署到你的 reTerminal E1003 上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace —— 管理和设计你的自定义内容

**Workspace** 页面用于管理当前绑定设备上显示的所有页面和内容。在这里你可以：

- 从零开始创建并排布你自己的设计页面
- 上传图片并将其组织成幻灯片
- 在一个拖拽式编辑器中组合文本、小部件、形状、数据、RSS 源、网页内容等
- 将最终设计通过无线方式部署到你的 reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/226.png" style={{width:1000, height:'auto'}}/></div>

设计保存后，点击 **Deploy to Device**，选择与你配对的 reTerminal E1003，内容就会通过无线方式传输到设备上。电子墨水屏会更新以显示你的设计。触控交互需要固件版本 **v1.1.2 或更高**——当前最新版本为 **v1.1.4.3**，我们建议更新到该版本以获得最佳体验。

关于其他所有内容——编辑器的详细操作、技巧和版本说明——请参考 [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)。

## 手动设备控制

### 刷新按钮

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/233.png" style={{width:700, height:'auto'}}/></div>

设备顶部的绿色刷新按钮具有多种功能：

- **单击**：手动刷新显示并从 SenseCraft 平台检查新内容。蜂鸣器会响一声以确认操作。当设备进入睡眠且仪表盘无法立即刷新时，这个按钮也常用于唤醒设备。

- **长按**（未来功能）：将激活语音输入模式。

### 导航按钮

设备顶部的两个白色翻页按钮可用于在多个页面之间导航（如果你的仪表盘包含多页）：

- **左键**：跳转到上一页

- **右键**：跳转到下一页

### 网络重置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/234.png" style={{width:700, height:'auto'}}/></div>

如果你需要连接到不同的 Wi-Fi 网络：

**步骤 1.** 同时按住两个导航按钮（左和右）2 秒。

**步骤 2.** 设备将进入 Wi-Fi 配置模式，你可以再次按照 [Network Setup](#network-setup) 的步骤连接到新网络。

### LED 指示灯

- **所有 LED 熄灭：**
  - 未连接 USB 线缆

- **红色 LED：**
  - 连接 USB 线缆且正在充电时常亮

- **绿色 LED：**
  - 每次上电时点亮约 3 秒，然后熄灭
  - 连接 USB 线缆且电池已充满时常亮


### 电池工作

当使用电池供电时：

- 设备会在两次刷新之间自动进入低功耗模式

- 电池寿命取决于刷新频率（在满电且每天刷新一次的情况下，典型续航为 6 个月）

- 当电池电量低于 20% 时，设备会在右上角显示低电量图标

:::tip
如果你想自己编写代码来读取电池电压，在 `analogRead()` 函数前增加 10ms 延时会更精确。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/232.png" style={{width:300, height:'auto'}}/></div>


### 扩展引脚

reTerminal E1003 配备了一个 6 针扩展排针（J2），可用于连接外部传感器、模块或其他硬件，以扩展设备功能。该扩展排针引出了多个 ESP32-S3 GPIO 引脚和通信接口，使其成为 DIY 项目中非常灵活的连接点。

#### 扩展排针引脚定义

6 针扩展排针（J2）的引脚定义如下：

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
			<td>ESP_IO47</td>
			<td>GPIO47</td>
			<td>GPIO/ADC</td>
			<td>通用输入输出，具备模拟输入能力</td>
		</tr>
		<tr>
			<td>4</td>
			<td>ESP_IO6/ADC1_CH</td>
			<td>GPIO6</td>
			<td>GPIO/ADC</td>
			<td>通用输入输出，具备模拟输入能力</td>
		</tr>
		<tr>
			<td>5</td>
			<td>ESP_IO20/I2C0_SCL</td>
			<td>GPIO20</td>
			<td>GPIO/I2C SCL</td>
			<td>GPIO 或 I2C 时钟信号</td>
		</tr>
		<tr>
			<td>6</td>
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
- 连接 USB-C 线缆为设备充电
- 检查红色 LED 是否常亮（表示正在充电）
- 如果使用电池供电，确保电池连接正确且已充电

### Q2：无法连接到 Wi-Fi

- 确认你输入了正确的 Wi-Fi 密码
- 确保你的 Wi-Fi 网络工作正常
- 检查你的 Wi-Fi 路由器是否支持 2.4GHz 网络（不支持 5GHz）
- 尝试将设备放置在更靠近 Wi-Fi 路由器的位置

### Q3：显示未更新

- 按下刷新按钮手动触发更新
- 确认设备已连接到 Wi-Fi（右上角没有断网图标）
- 检查你的 SenseCraft 账号，确保仪表盘已正确部署
- 如果问题仍然存在，尝试重启设备
- 如果重启后设备仍无响应，请在 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 平台上重新烧录对应固件，并检查是否恢复正常刷新

### Q4：网络连接丢失

- 设备会自动尝试重新连接已知网络
- 重新连接成功后，Wi-Fi 断开图标会消失
- 如果无法重新连接，请按照上文的网络重置步骤操作

### Q5：在 macOS 上找不到串口（COM）

如果你的 Mac 无法通过 USB 识别 reTerminal，请按照以下简要指南安装 CH340/CH340K 驱动：

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
确保设备**电源开关已打开**，并使用**数据 USB-C 线缆**（非仅充电线）。打开 Terminal 并运行：
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

如果你在输出中看到设备路径，则说明驱动已正确安装，你的 reTerminal 已经可以使用了！

## 资源

- [reTerminal E1003 原理图 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)
- [外观整体 3D 模型 STP 文件](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reTerminal_E1003_3D.stp)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
