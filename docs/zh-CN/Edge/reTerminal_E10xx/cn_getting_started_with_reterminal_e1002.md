---
description: 本文将指导您快速开始使用 reTerminal E1002。
title: reTerminal E1002 入门指南
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/getting_started_with_reterminal_e1002
sidebar_position: 3
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E1002 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

:::caution 固件更新提示
我们建议您在收到产品后**[立即完成产品的固件更新](#preliminary)**，以获得最佳体验。
:::

:::danger 屏幕寿命警告
1. 如果您的 reTerminal 长时间闲置，您可以长按设备上的绿色按钮 5 秒钟来清除屏幕内容（使用出厂固件），这可以有效防止残影并延长屏幕寿命。

2. 尽可能不要长时间（超过 1 天）显示同一画面，因为这可能会产生残影，建议至少每天刷新一次屏幕图像。如果设备长时间不使用，建议清除设备显示内容。

3. 在使用和调试程序时，请尽可能减少屏幕刷新频率。长时间高速刷新屏幕也可能会降低屏幕的使用寿命。
:::

## 简介

reTerminal E1002 是一款 7.3 英寸开源全彩电子纸显示器，具有出色的 3 个月电池续航能力。由 ESP32-S3 驱动，原生支持我们的 SenseCraft HMI 无代码 UI 平台，可轻松创建仪表板，同时支持 Home Assistant、TRMNL E-ink dashboard、Arduino 和 ESP-IDF 进行进一步开发。配备 E Ink® Spectra™ 6 全彩电子纸显示屏，非常适合数字相框和彩色仪表板可视化。

### 特性

- **美观、即用型 E Ink® Spectra™6 彩色电子纸显示屏**
- **超低功耗，3 个月电池续航**
- **使用 SenseCraft HMI 进行无代码 UI 设计和部署**
- **兼容流行的软件平台**
- **灵活的硬件和软件定制**

## 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/150.png" style={{width:1000, height:'auto'}}/></div><br />

reTerminal E1002 硬件包括：

1. **7.3 英寸全彩电子纸显示屏**：分辨率为 800×480 的全彩显示屏
2. **按钮**：位于设备顶部，用于手动屏幕操作
3. **麦克风**
4. **MicroSD 卡槽**：用于扩展存储
5. **电源开关**：位于背面，用于开关设备电源
6. **状态 LED**：用户指示灯（绿色）
7. **电源 LED**：充电指示灯（红色）
8. **USB-C 端口**：用于充电和固件更新
9. **扩展端口**：8 针扩展接头，提供 VDD、GND、I2C 和 GPIO 连接

## 入门指南

### 准备工作

**步骤 1.** 拆开您的 reTerminal E1002 包装，确保包含所有组件：
- reTerminal E1002 设备
- USB-C 数据线
- 快速入门指南

**步骤 2.** （可选）如果您计划将设备用作数字相框或需要额外存储空间，请插入 microSD 卡。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
reTerminal E 系列电子纸显示器仅支持最大 32GB 的 Fat32 格式 MicroSD 卡。
:::

**步骤 3.** （可选）如需要，请安装 USB 驱动程序：

根据您的操作系统，您可能需要安装 USB 驱动程序以确保与 reTerminal E1002 的正常通信：

- **Mac 电脑**：从 [WCH 官方网站](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) 下载并安装 CH34X 驱动程序

- **Windows 电脑**：
  - Windows 11 系统通常默认包含驱动程序
  - 对于 Windows 10 及更早版本，您可能需要从 [WCH 官方网站](https://www.wch-ic.com/downloads/CH341SER_ZIP.html) 下载并安装 CH341 驱动程序

- **Linux 系统**：大多数现代 Linux 发行版默认包含必要的驱动程序

**步骤 4.** 更新固件以确保您的设备运行最新版本：

1. 使用 USB-C 数据线将您的 reTerminal E1002 连接到计算机

2. 使用背面的电源开关打开设备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/134.jpg" style={{width:700, height:'auto'}}/></div>

3. 访问 **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** 并登录您的账户

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

4. 导航到 **Workspace** 部分

5. 点击右上角的 **Device Flasher**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/9.png" style={{width:1000, height:'auto'}}/></div>

6. 从列表中选择您的 reTerminal E1002 设备。根据本教程，您应该选择 **reTerminal E1002 7.3" Full Color Display**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/11.png" style={{width:800, height:'auto'}}/></div>

7. 从下拉菜单中选择最新的固件版本

8. 点击 **Flash** 并等待更新过程完成

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/10.png" style={{width:800, height:'auto'}}/></div>

:::note
1. 更新固件可确保最佳性能并访问最新功能。建议在首次使用设备之前执行此更新。

2. 当设备处于关机或睡眠状态时，无法正确刷写固件。如果您选择了设备的正确端口但从未看到刷写固件进度，则可能需要通过按下设备顶部的绿色按钮来唤醒设备，然后重试。
:::

### 开机

**步骤 1.** 将电源开关滑动到 **ON** 位置来开启设备。电源开关位于设备背面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>


**步骤 2.** 首次启动时，设备将显示产品信息和网络设置说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/17.png" style={{width:600, height:'auto'}}/></div><br />


**步骤 3.** 绿色用户 LED 将亮起约 30 秒，表示设备已开机并正在初始化。设备 30 秒无操作后，为了确保电源，设备将自动进入睡眠模式，LED 灯将自动关闭。

:::tip
因此，我们需要在此期间完成配置网络的后续步骤。当设备进入睡眠状态时，您将无法找到设备的热点。如果出现这种情况，您可以通过单击设备的绿色唤醒按钮来唤醒设备。
:::

### 网络设置

<Tabs>
<TabItem value="Network Setup vis PC" label="通过 PC 进行网络设置" default>

**步骤 1.** 从您的智能手机或计算机连接到设备的 Wi-Fi 接入点。AP 名称将显示在屏幕上（无需密码）。网络凭据为 `reTerminal E1002-{MAC Adress}`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**步骤 2.** 连接后，您的手机应该会自动重定向到 Wi-Fi 配置页面。如果没有，请打开浏览器并导航到 `192.168.4.1`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**步骤 3.** 选择您的本地 Wi-Fi 网络并输入密码，然后点击 "Connect"。

:::note
reTerminal E 系列电子纸显示器仅支持 2.4GHz WiFi 网络，不支持 5GHz 或其他频段。
:::

**步骤 4.** 连接成功后，设备将发出确认蜂鸣声并显示配对码屏幕。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/2.png" style={{width:600, height:'auto'}}/></div>

### 连接到 SenseCraft 平台

**步骤 1.** 在您的网络浏览器中访问 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 并创建账户或登录。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**步骤 2.** 导航到 **Workspace** 部分并点击 **Add Device**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/7.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 为您的设备命名，输入设备屏幕上显示的配对码，然后点击 **Create**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**步骤 4.** 配对完成后，设备将显示一条消息，提示您创建第一个仪表板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/18.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup vis SenseCraft APP" label="通过 SenseCraft APP 进行网络设置">

此方法使用 SenseCraft 移动应用程序通过蓝牙配置设备网络并将其添加到您的 SenseCraft 账户。

首先，下载 SenseCraft App。您可以在 Google Play Store 或 Apple App Store 中搜索 "SenseCraft" 找到它。或者，您可以从此网站下载。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载应用 🖱️</font></span></strong>
    </a>
</div><br />

**步骤 1.** 打开 SenseCraft App，登录您的账户，并导航到 **User** 选项卡。点击 **Device Bluetooth Configuration** 开始配置过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 2.** 在 "Please select the device type" 屏幕上，选择您的 reTerminal 型号（例如，**reTerminal E1001** 或 **reTerminal E1002**）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 3.** 按照屏幕上的说明将您的设备置于蓝牙广播模式。这通常通过同时按下 **Up** 和 **Down** 翻页按钮来完成。确保您手机的蓝牙已启用。点击 **Scan**，应用程序将发现附近的设备。从列表中选择您的设备进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 4.** 通过蓝牙连接后，应用程序将提示您设置 Wi-Fi 连接。从下拉列表中选择您的本地 2.4GHz Wi-Fi 网络，输入密码，然后点击 **Next**。

:::note
设备只能通过 2.4G Wi-Fi 网络进行配置。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 5.** 应用程序将把 Wi-Fi 凭据发送到设备并将其添加到您的 SenseCraft 账户。完成后将出现 "Device added successfully" 消息。您现在可以点击 **Start exploring!** 继续。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 6.** 您的 reTerminal 现在将出现在应用程序主 **Device** 选项卡的设备列表中，成功连接到您的 SenseCraft 账户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 7.** 您可以点击列表中的设备查看其 **Device Detail** 页面。从这里，您可以管理设备并上传照片。对于更复杂的仪表板和画布设计，系统将提示您使用 SenseCraft 的网页浏览器版本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

## 创建仪表板

reTerminal E1002 与 SenseCraft HMI 平台无缝集成，该平台为您的设备提供了强大的内容创建和自定义工具。我们不在这里详细介绍逐步操作，而是探索平台的关键功能，帮助您了解可能的应用。

### SenseCraft HMI 功能

**AI 生成器**

让人工智能设计您的仪表板！只需描述您想要显示的信息，AI 生成器将自动创建一个美观、实用的布局。这非常适合快速生成天气显示、日历、待办事项列表或信息面板，无需手动设计工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/12.png" style={{width:300, height:'auto'}}/></div>

**图库**

使用图库功能将您的 reTerminal E1002 转换为数字相框。上传您喜爱的图片，平台将为电子纸显示屏优化它们。创建具有自定义过渡时间的幻灯片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/13.png" style={{width:1000, height:'auto'}}/></div>

**画布**

使用画布从头开始设计您的仪表板，这是一个拖放界面，提供各种元素：
- 具有可自定义字体和大小的文本块
- 图像占位符
- 时间、日期和天气小部件
- 数据可视化工具
- 用于布局组织的形状和分隔符

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/14.png" style={{width:1000, height:'auto'}}/></div>

**RSS 订阅集成**

通过向您的仪表板添加 RSS 订阅，随时了解您喜爱的新闻来源、博客或网站的最新动态。RSS 功能允许您显示来自多个来源的标题、摘要或完整文章。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/15.png" style={{width:1000, height:'auto'}}/></div>

**网页内容显示**

在您的设备上捕获和显示特定的网页内容。网页功能可以渲染网站的选定部分，允许您显示交通时刻表、股票行情或其他在线数据源等信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/22.png" style={{width:1000, height:'auto'}}/></div>

### SenseCraft HMI 入门

按照上一节中描述的方法将您的设备与 SenseCraft 平台配对后，您就可以创建您的第一个仪表板了。有关使用每个功能的详细说明，请参考相应的 Wiki 页面：

- [SenseCraft HMI 概述](https://sensecraft-hmi-docs.seeed.cc/en/)

在 SenseCraft 平台中创建并保存仪表板后，只需点击 "Deploy to Device"，选择您配对的 reTerminal E1002，您的自定义内容将无线传输到设备。电子纸显示屏将更新以显示您的仪表板，如果您创建了多个页面，可以使用导航按钮在它们之间切换。

## 设备操作

### 刷新按钮

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

设备顶部的刷新按钮具有多种功能：

- **单击**：手动刷新显示屏并检查来自 SenseCraft 平台的新内容。蜂鸣器将响一次以确认操作。此按钮也常用于唤醒设备。当设备进入睡眠状态且仪表板刷新命令无法立即传达到设备时，您可以使用此按钮唤醒设备。

- **长按**（未来功能）：将激活语音输入模式。

### 导航按钮

左右按钮允许您在仪表板包含多个页面时在它们之间导航：

- **左按钮**：导航到上一页

- **右按钮**：导航到下一页

### 网络重置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

如果您需要连接到不同的 Wi-Fi 网络：

**步骤 1.** 同时按住两个导航按钮（左和右）2 秒钟。

**步骤 2.** 设备将进入 Wi-Fi 配置模式，您可以再次按照[网络设置](#network-setup)步骤连接到新网络。

### LED 指示灯

- **红色 LED**：
  - 关闭：完全充电或未充电
  - 常亮：充电中

- **绿色 LED**：
  - 启动时亮 30 秒：设备正在开机

### 电池操作

使用电池供电时：

- 设备将在刷新间隔自动进入低功耗模式

- 电池寿命取决于刷新频率（在默认设置下，满电通常可使用 3 个月）

- 当电池电量低于 20% 时，设备将在右上角显示低电量图标

:::tip
如果您想自己编写代码来读取电池电压，在 analogRead() 函数之前添加 10ms 延迟会更精确。
:::

### 扩展引脚

reTerminal E1002 具有一个 8 引脚扩展接头（J2），为添加外部传感器、模块或其他硬件以扩展设备功能提供连接选项。此扩展接头暴露了几个 ESP32-S3 GPIO 引脚和通信接口，使其成为您 DIY 项目的多功能连接点。

#### 扩展接头引脚定义

8 引脚扩展接头（J2）具有以下引脚定义：

<div class="table-center">
	<table align="center">
		<tr>
			<th>引脚（从上到下）</th>
			<th>标签</th>
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
			<td>接地</td>
			<td>公共接地参考</td>
		</tr>
		<tr>
			<td>3</td>
			<td>ESP_IO46</td>
			<td>GPIO46</td>
			<td>GPIO/ADC</td>
			<td>具有模拟输入功能的通用 I/O</td>
		</tr>
		<tr>
			<td>4</td>
			<td>ESP_IO2/ADC1_CH4</td>
			<td>GPIO2</td>
			<td>GPIO/ADC</td>
			<td>具有模拟输入功能的通用 I/O（ADC1 通道 4）</td>
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

## 设备放置

reTerminal E1002 配备了一个 3D 打印支撑架配件，可让您将设备直立放置以获得最佳观看效果：

**步骤 1.** 找到包装中包含的 3D 打印支撑架。

**步骤 2.** 将支撑架放置在 reTerminal E1002 底部背面的指定安装区域，该区域有嵌入式螺母。

**步骤 3.** 使用长螺丝刀将螺丝拧入 reTerminal E1002 背面的嵌入式螺母中，将支撑架固定到设备上。

**步骤 4.** 牢固连接后，将 reTerminal E1002 放置在平坦表面上，支撑架将支撑设备保持直立位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
支撑架提供固定的观看角度，无法调节。这种固定定位设计旨在在大多数使用场景中提供最佳可见性。

支撑架允许设备放置在桌子、台面或架子上，使其非常适合在各种环境中用作信息显示器、控制面板或数字相框。
:::

## 故障排除

### Q1：设备无法开机

- 确保电源开关处于 ON 位置
- 连接 USB-C 线缆为设备充电
- 检查红色 LED 是否常亮（表示正在充电）
- 如果使用电池供电，确保电池正确连接且已充电

### Q2：无法连接到 Wi-Fi

- 验证您输入的 Wi-Fi 密码是否正确
- 确保您的 Wi-Fi 网络正常运行
- 检查您的 Wi-Fi 路由器是否支持 2.4GHz 网络（不支持 5GHz）
- 尝试将设备移近 Wi-Fi 路由器

### Q3：显示不更新

- 按下刷新按钮手动触发更新
- 验证设备是否连接到 Wi-Fi（角落没有断开连接图标）
- 检查您的 SenseCraft 账户以确保仪表板已正确部署
- 如果问题持续存在，尝试重启设备

### Q4：网络连接丢失

- 设备将自动尝试重新连接到已知网络
- 重新连接后，Wi-Fi 断开连接图标将消失
- 如果无法重新连接，请按照上述网络重置程序操作

## 资源

- [reTerminal E1002 原理图（PDF）](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004321_reTerminal_E1002_V1.0_SCH_250805.pdf)
- [ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [SenseCraft HMI 平台文档](https://wiki.seeedstudio.com/cn/sensecraft_hmi_overview)
- [外观整体 3D 模型 STP 文件](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reterminal_esp-250904.stp)
<!-- - [GitHub Repository](/cn/getting_started_with_reterminal_e1002) -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
