---
description: 本文将指导你快速上手使用 reTerminal E1001。
title: reTerminal E1001 入门指南
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.webp
slug: /getting_started_with_reterminal_e1001
sidebar_position: 2
sku: 100073581
last_update:
  date: 07/21/2025
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-03-31'
url: https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1001/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E1001 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div><br />

:::caution 固件更新提示
我们建议你在收到产品后尽快**[完成产品固件更新](#preliminary)**，以获得最佳体验。
:::

## 介绍

reTerminal E1001 是一款 7.5 英寸开源黑白电子纸显示屏，拥有卓越的 3 个月电池续航。其由 ESP32-S3 驱动，原生支持我们的 SenseCraft HMI 零代码 UI 平台，可轻松创建仪表盘，同时也支持 Home Assistant、TRMNL E-ink dashboard、Arduino 和 ESP-IDF 进行进一步开发。无论是用于智能家居仪表盘可视化、办公显示，还是教育项目，这款开箱即用的 HMI 设备都能在一体化的优雅外观中提供精美的显示效果和灵活的自定义能力。

### 特性

- **精美、开箱即用的电子纸显示屏**
- **超低功耗，电池续航长达 3 个月**
- **基于 SenseCraft HMI 的零代码 UI 设计与部署**
- **兼容主流软件平台**
- **灵活的软硬件自定义能力**

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/150.png" style={{width:1000, height:'auto'}}/></div><br />

reTerminal E1001 的硬件包括：

1. **7.5 英寸电子纸显示屏**：黑白显示，分辨率为 800×480
2. **按键**：位于设备顶部，用于手动操作屏幕
3. **麦克风**
4. **MicroSD 卡槽**：用于扩展存储
5. **电源开关**：位于背面，用于开启/关闭设备电源
6. **状态指示灯**：用户指示灯（绿色）
7. **电源指示灯**：充电指示灯（红色）
8. **USB-C 接口**：用于充电和固件更新
9. **扩展接口**：8 针扩展排针，提供 VDD、GND、I2C 和 GPIO 连接


## 快速上手

### 准备工作

**步骤 1.** 打开 reTerminal E1001 包装盒，确认所有配件齐全：

- reTerminal E1001 设备
- 充电数据线
- 快速入门指南

**步骤 2.**（可选）如果你计划将设备用作电子相框或需要额外存储空间，请插入一张 microSD 卡。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
reTerminal E 系列电子纸显示屏仅支持容量不超过 64GB、格式为 Fat32 的 MicroSD 卡。  
64GB SD 卡默认格式为 exFAT。将其格式化为 FAT32 后，即可成功挂载并用于存储图片。
:::

**步骤 3.**（可选）如有需要，安装 USB 驱动：

根据你的操作系统，你可能需要安装 USB 驱动，以确保与 reTerminal E1001 正常通信：

- **对于 Mac 电脑**：从 [WCH 官方网站](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) 下载并安装 CH34X 驱动

- **对于 Windows 电脑**：
  - Windows 11 系统通常默认已包含该驱动
  - 对于 Windows 10 及更早版本，你可能需要从 [WCH 官方网站](https://www.wch-ic.com/downloads/CH341SER_ZIP.html) 下载并安装 CH341 驱动

- **对于 Linux 系统**：大多数现代 Linux 发行版默认已包含所需驱动

**步骤 4.** 更新固件，以确保你的设备运行的是最新版本：

1. 使用 USB-C 线将 reTerminal E1001 连接到电脑

2. 使用背面的电源开关打开设备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/134.jpg" style={{width:700, height:'auto'}}/></div>

3. 访问 **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** 并登录你的账号

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

4. 进入 **Workspace** 页面

5. 点击右上角的 **Device Flasher**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/9.png" style={{width:1000, height:'auto'}}/></div>

6. 在列表中选择你的 reTerminal E1001 设备。根据本教程，你应选择 **reTerminal E1001 7.5" Monochrome Display**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/11.png" style={{width:800, height:'auto'}}/></div>

7. 从下拉菜单中选择最新的固件版本

8. 点击 **Flash** 并等待更新过程完成

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/10.png" style={{width:800, height:'auto'}}/></div>

:::note

1. 更新固件可以确保最佳性能并获取最新功能。建议在首次使用设备前完成此更新。

2. 当设备处于关机或睡眠状态时，无法正确烧录固件。如果你选择了正确的设备端口，但始终看不到固件烧录进度，则可能需要按下设备顶部的绿色按键唤醒设备，然后重试。

:::

### 开机

**步骤 1.** 将电源开关拨到 **ON** 位置以开启设备。电源开关位于机身背面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>

**步骤 2.** 首次启动时，设备会显示产品信息和网络配置说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/1.png" style={{width:600, height:'auto'}}/></div><br />

**步骤 3.** 绿色用户指示灯会亮起约 30 秒，表示设备已上电并正在初始化。在 30 秒内如果没有对设备进行任何操作，为了节省电量，设备会自动进入睡眠模式，指示灯也会自动熄灭。

:::tip
因此，我们需要在这段时间内完成后续的网络配置步骤。当设备进入睡眠后，你将无法找到设备的热点。如果出现这种情况，可以按一下设备上的绿色唤醒按键来唤醒设备。
:::

### 网络配置

<Tabs>
<TabItem value="Network Setup vis PC" label="通过 PC 配置网络" default>

**步骤 1.** 使用手机或电脑连接设备的 Wi-Fi 热点。AP 名称会显示在屏幕上（无需密码）。网络凭据格式为 `reTerminal E1001-{MAC Adress}`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**步骤 2.** 连接成功后，你的手机应会自动跳转到 Wi-Fi 配置页面。如果没有自动跳转，请打开浏览器并访问 `192.168.4.1`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**步骤 3.** 选择你的本地 Wi-Fi 网络并输入密码，然后点击 "Connect"。

:::note
reTerminal E 系列电子纸显示屏仅支持 2.4GHz WiFi 网络，不支持 5GHz 或其他频段。
:::

**步骤 4.** 连接成功后，设备会发出提示音并显示配对码界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

### 连接 SenseCraft 平台

**步骤 1.** 在浏览器中访问 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi)，注册账号或登录。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

**步骤 2.** 进入 **Workspace** 页面并点击 **Add Device**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/7.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 为你的设备命名，输入设备屏幕上显示的配对码，然后点击 **Create**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**步骤 4.** 配对成功后，设备会显示一条消息，提示你创建第一个仪表盘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/3.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup vis SenseCraft APP" label="通过 SenseCraft APP 配置网络">

此方法通过 SenseCraft 手机应用，使用蓝牙为设备配置网络并将其添加到你的 SenseCraft 账号中。

首先下载 SenseCraft App。你可以在 Google Play 商店或 Apple App Store 中搜索 "SenseCraft" 获取。或者，也可以从本网站下载。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载 APP 🖱️</font></span></strong>
    </a>
</div><br />

**步骤 1.** 打开 SenseCraft App，登录你的账户，并导航到 **User** 选项卡。点击 **Device Bluetooth Configuration** 开始配置流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 2.** 在 "Please select the device type" 界面，选择你的 reTerminal 型号（例如 **reTerminal E1001** 或 **reTerminal E1002**）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 3.** 按照屏幕上的指引将设备置于蓝牙广播模式。通常通过同时按下 **Up** 和 **Down** 翻页按键来完成。确保手机的蓝牙已开启。点击 **Scan**，应用会搜索附近的设备。从列表中选择你的设备进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 4.** 通过蓝牙连接成功后，应用会提示你设置 Wi-Fi 连接。从下拉列表中选择本地 2.4GHz Wi-Fi 网络，输入密码，然后点击 **Next**。

:::note
设备只能通过 2.4G Wi-Fi 网络进行配置。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 5.** 应用会将 Wi-Fi 凭据发送到设备，并将其添加到你的 SenseCraft 账户中。完成后会显示 “Device added successfully” 提示信息。现在你可以点击 **Start exploring!** 继续。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 6.** 你的 reTerminal 现在会出现在应用主界面的 **Device** 选项卡中的设备列表里，并已成功连接到你的 SenseCraft 账户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**步骤 7.** 你可以点击列表中的设备进入其 **Device Detail** 页面。在这里，你可以管理设备并上传照片。对于更复杂的仪表盘和画布设计，系统会提示你使用 SenseCraft 的网页浏览器版本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>


## 创建仪表盘

reTerminal E1001 与 SenseCraft HMI 平台无缝集成，该平台为你提供强大的工具，用于在设备上创建和自定义内容。这里不再逐步讲解具体操作，而是通过介绍平台的关键特性，帮助你了解它可以实现什么功能。

### SenseCraft HMI 功能

**AI Generator**

让人工智能为你设计仪表盘！只需描述你希望显示哪些信息，AI Generator 就会自动创建一个美观且实用的布局。非常适合快速生成天气显示、日历、待办事项列表或信息面板，而无需手动设计。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/12.png" style={{width:300, height:'auto'}}/></div>

**Gallery**

通过 Gallery 功能，将你的 reTerminal E1001 打造成一款数字相框。上传你喜欢的图片，平台会为 ePaper 显示屏进行优化。你可以创建带有自定义切换时间的幻灯片放映。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/19.png" style={{width:1000, height:'auto'}}/></div>

**Canvas**

使用 Canvas 从零开始设计你的仪表盘，这是一个拖拽式界面，提供多种元素：

- 可自定义字体和大小的文本块
- 图像占位符
- 时间、日期和天气小部件
- 数据可视化工具
- 用于布局组织的形状和分隔线

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/20.png" style={{width:1000, height:'auto'}}/></div>

**RSS Feed Integration**

通过在仪表盘中添加 RSS 源，随时获取你喜爱的新闻来源、博客或网站的最新内容。RSS 功能允许你显示来自多个来源的标题、摘要或完整文章。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/21.png" style={{width:1000, height:'auto'}}/></div>

**Web Content Display**

在设备上捕获并显示特定网页内容。Web 功能可以渲染网站的选定部分，使你能够显示诸如公交时刻表、股票行情或其他在线数据源等信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/16.png" style={{width:1000, height:'auto'}}/></div>

### 开始使用 SenseCraft HMI

按照上一节所述，将设备与 SenseCraft 平台配对后，你就可以创建第一个仪表盘了。关于每个功能的详细使用说明，请参考对应的 Wiki 页面：

- [SenseCraft HMI Overview](https://sensecraft-hmi-docs.seeed.cc/en/)

在 SenseCraft 平台中创建并保存仪表盘后，只需点击 "Deploy to Device"，选择已配对的 reTerminal E1001，你的自定义内容就会通过无线方式传输到设备上。ePaper 显示屏会更新以显示你的仪表盘，如果你创建了多个页面，可以使用导航按键在页面之间切换。

## 操作设备

### 刷新按键

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

设备顶部的刷新按键具有多种功能：

- **单击**：手动刷新显示屏并检查来自 SenseCraft 平台的新内容。蜂鸣器会鸣叫一次以确认操作。该按键也常用于唤醒设备。当设备进入休眠且通常无法立即接收到仪表盘刷新指令时，你可以使用此按键唤醒设备。

- **长按**（未来功能）：将激活语音输入模式。

### 导航按键

如果你的仪表盘包含多个页面，左右按键可用于在页面之间导航：

- **左键**：跳转到上一页

- **右键**：跳转到下一页

### 网络重置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

如果你需要连接到不同的 Wi-Fi 网络：

**步骤 1.** 同时按住左右两个导航按键 2 秒。

**步骤 2.** 设备将进入 Wi-Fi 配置模式，你可以再次按照 [Network Setup](#network-setup) 中的步骤连接到新网络。

### LED 指示灯

- **红色 LED**：
  - 熄灭：已充满电或未在充电
  - 常亮：正在充电

- **绿色 LED**：
  - 启动时亮 30 秒：设备正在上电启动

### 电池运行

当使用电池供电时：

- 设备会在两次刷新之间自动进入低功耗模式

- 电池寿命取决于刷新频率（在默认设置下，满电通常可使用 3 个月）

- 当电量低于 20% 时，设备会在右上角显示低电量图标

:::tip
如果你想自己编写代码读取电池电压，在 `analogRead()` 函数前增加 10ms 延时会更精确。
:::

### 扩展引脚

reTerminal E1001 配备一个 8 针扩展排针（J2），可用于连接外部传感器、模块或其他硬件，以扩展设备功能。该扩展排针引出了多个 ESP32-S3 GPIO 引脚和通信接口，使其成为 DIY 项目中灵活多用的连接点。

#### 扩展排针引脚定义

8 针扩展排针（J2）的引脚定义如下：

<div class="table-center">
 <table align="center">
  <tr>
   <th>引脚（从上到下）</th>
   <th>标注</th>
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
   <td>通用输入输出，带模拟输入功能</td>
  </tr>
  <tr>
   <td>4</td>
   <td>ESP_IO2/ADC1_CH4</td>
   <td>GPIO2</td>
   <td>GPIO/ADC</td>
   <td>通用输入输出，带模拟输入功能（ADC1 通道 4）</td>
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

reTerminal E1001 配备了一个 3D 打印的支架配件，可让你将设备竖直摆放，以获得最佳观看效果：

**步骤 1.** 找到包装中附带的 3D 打印支架。

**步骤 2.** 将支架对准 reTerminal E1001 背面底部指定的安装区域，即内嵌螺母所在的位置。

**步骤 3.** 使用一把长螺丝刀，将螺丝拧入 reTerminal E1001 背面的内嵌螺母中，将支架牢固固定在设备上。

**步骤 4.** 固定好之后，将 reTerminal E1001 放在平坦的表面上，使支架能够支撑其保持竖直状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
该支架提供固定的观看角度，无法调节。此固定位置旨在在大多数使用场景下提供最佳可视性。

支架允许将设备放置在桌面、台面或架子上，非常适合作为信息展示屏、控制面板或数码相框等在各种环境中使用。
:::

## 故障排查

### Q1：设备无法开机

- 确保电源开关处于 ON 位置
- 连接 USB-C 线缆为设备充电
- 检查红色 LED 是否常亮（表示正在充电）
- 如果使用电池供电，请确保电池连接正确且已充电

### Q2：无法连接到 Wi-Fi

- 确认输入的 Wi-Fi 密码是否正确
- 确保你的 Wi-Fi 网络正常工作
- 检查你的 Wi-Fi 路由器是否支持 2.4GHz 网络（不支持 5GHz）
- 尝试将设备放置在更靠近 Wi-Fi 路由器的位置

### Q3：显示内容不更新

- 按下刷新按钮手动触发更新
- 确认设备已连接到 Wi-Fi（角落中没有断线图标）
- 检查你的 SenseCraft 账户，确保仪表盘已正确部署
- 如果问题仍然存在，尝试重启设备
- 如果设备在重启后仍无响应，请在 SenseCraft HMI 平台上重新烧录对应固件，并检查设备是否可以正常刷新

### Q4：网络连接丢失

- 设备会自动尝试重新连接已知网络
- 重新连接后，Wi-Fi 断线图标会消失
- 如果无法重新连接，请按照上文的网络重置步骤操作

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

- [reTerminal E1001 原理图 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004307_reTerminal_E1001_V1_2_SCH_251120.pdf)
- [ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [SenseCraft HMI 平台文档](https://wiki.seeedstudio.com/cn/sensecraft_hmi_overview)
- [外观整体 3D 模型 STP 文件](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reterminal_esp-250904.stp)
<!-- - [GitHub Repository](/cn/getting_started_with_reterminal_e1001) -->

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
