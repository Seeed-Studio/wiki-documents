---
description: SenseCAP Watcher 的硬件组件。
title: 硬件概述
image: https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview_1.webp
slug: /cn/watcher_hardware_overview
sidebar_position: 1
last_update:
  date: 10/18/2024
  author: Citric, Djair
---

# SenseCAP Watcher 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher 视频</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github 仓库</font></span></strong>
    </a>
</div><br />

在 Wiki 的这一部分中，我们将重点介绍 SenseCAP Watcher 的硬件组件、其构造以及附加配件的使用。

## 规格参数

<div class="table-center">
    <table align="center">
        <tr>
            <th>硬件</th>
            <th>描述</th>
        </tr>
        <tr>
            <td align="center">MCU</td>
            <td align="center">ESP32-S3 @240MHz 8MB PSRAM</td>
        </tr>
        <tr>
            <td align="center">内置AI处理器</td>
            <td align="center">Himax HX6538 (Cortex M55 + Ethos-U55)</td>
        </tr>
        <tr>
            <td align="center">摄像头</td>
            <td align="center">OV5647 120° FOV <br /> 固定焦距3米</td>
        </tr>
        <tr>
            <td align="center">Wi-Fi</td>
            <td align="center">符合IEEE 802.11b/g/n标准<br />2.4GHz频段<br />无线范围：最远100米（开放空间测试）</td>
        </tr>
        <tr>
            <td align="center">蓝牙LE</td>
            <td align="center">蓝牙5</td>
        </tr>
        <tr>
            <td align="center">天线</td>
            <td align="center">内置Wi-Fi和BLE天线</td>
        </tr>
        <tr>
            <td align="center">显示屏</td>
            <td align="center">1.45英寸触摸屏，412×412分辨率</td>
        </tr>
        <tr>
            <td align="center">麦克风</td>
            <td align="center">单麦克风</td>
        </tr>
        <tr>
            <td align="center">扬声器</td>
            <td align="center">1W扬声器输出</td>
        </tr>
        <tr>
            <td align="center">滚轮</td>
            <td align="center">支持上下滚动和按钮功能</td>
        </tr>
        <tr>
            <td align="center">LED</td>
            <td align="center">1个RGB指示灯</td>
        </tr>
        <tr>
            <td align="center">microSD卡槽</td>
            <td align="center">支持最大32GB FAT32 microSD卡</td>
        </tr>
        <tr>
            <td align="center">闪存</td>
            <td align="center">ESP32-S3的32MB闪存<br />Himax HX6538的16MB闪存</td>
        </tr>
        <tr>
            <td align="center">扩展接口</td>
            <td align="center">1个Grove IIC接口<br />2x4母头排针（1个IIC，2个GPIO，2个GND，1个3.3V_OUT，1个5V_IN）</td>
        </tr>
        <tr>
            <td align="center">USB-C</td>
            <td align="center">背面1个USB-C（仅供电）<br />底部1个USB-C（供电和编程）</td>
        </tr>
        <tr>
            <td align="center">复位按钮</td>
            <td align="center">底部孔内1个RST按钮</td>
        </tr>
        <tr>
            <td align="center">电源供应</td>
            <td align="center">5V直流电源</td>
        </tr>
        <tr>
            <td align="center">电池</td>
            <td align="center">3.7V 400mAh锂离子电池作为备用电源</td>
        </tr>
        <tr>
            <td align="center">工作温度</td>
            <td align="center">0 ~ 45°C</td>
        </tr>
        <tr>
            <td align="center">安装支架</td>
            <td align="center">支持壁挂、桌面和支架安装<br />1个万向轮和带胶粘剂的底板<br />1套1/4"母头适配器</td>
        </tr>
    </table>
</div>

## 特性

- 高效架构，结合设备端 + 服务器端 AI 处理
- 无限模态扩展
- 开源和本地部署确保隐私保护
- 可定制的情感响应

## 正面视图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-1.png" style={{width:1000, height:'auto'}}/></div>

## 背面视图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-2.png" style={{width:1000, height:'auto'}}/></div>

## 内部结构

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-3.png" style={{width:1000, height:'auto'}}/></div>

## 安装接口

在您的 Watcher 设备背面，您会发现一个安装支架，可以将设备安全地固定到各种表面或配件上。目前，我们提供两种类型的安装支架，以满足不同的放置需求：

:::tip
请注意，Watcher 主体仅配备 360° 旋转支架。如果您需要 1/4 螺纹三脚架支架，请[单独购买](https://www.seeedstudio.com/Mini-Tripod-p-5978.html)。
:::

### 360° 旋转支架

- 此支架专为在墙壁或其他垂直表面上轻松安装而设计。
- 它提供完整的 360 度旋转，让您可以调整 Watcher 设备的方向以获得所需的观看角度。
- 旋转支架在定位方面提供灵活性，并确保牢固地固定在墙上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/omni_wheel_bracket.gif" style={{width:650, height:'auto'}}/></div><br />

### 1/4 螺纹三脚架支架

- 此支架非常适合将您的 Watcher 放置在平坦表面上，如桌子、台面或架子。
- 它采用标准 1/4 英寸螺纹，与大多数三脚架和其他安装配件兼容。
- 三脚架支架提供稳定性，让您可以根据具体需求将 Watcher 定位在各种高度和角度。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/threaded_bracket.gif" style={{width:650, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Mini-Tripod-p-5978.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买</font></span></strong>
    </a>
</div>

要使用这些安装支架中的任何一种，请按照以下一般步骤操作：

1. 根据您的预期放置位置（墙壁或平坦表面）选择合适的支架。

2. 将选定的支架连接到 Watcher 设备背面的安装支架上。确保连接牢固，防止意外脱落。

3. 对于 360° 旋转支架：
   - 确定墙上要安装 Watcher 的理想位置。
   - 使用提供的螺丝和锚栓（如有必要）将支架牢固地固定在墙上。
   - 通过将 Watcher 旋转到所需角度来调整其方向。

4. 对于 1/4 螺纹三脚架支架：
   - 选择一个稳定的平坦表面来放置您的 Watcher。
   - 如果使用三脚架，请使用 1/4 英寸螺纹将三脚架连接到支架上。
   - 调整三脚架的高度和角度，为您的 Watcher 获得最佳观看位置。

5. 一旦您的 Watcher 使用任一支架牢固安装后，您就可以继续连接电源并根据您的偏好进行配置。

通过提供这两种安装支架选项，我们旨在为将您的 Watcher 设备集成到各种环境中提供灵活性和便利性。无论您偏好壁挂式设置还是桌面友好的布置，我们的支架都能确保安全且可调节的安装。

:::tip
请注意，Watcher 主体不包含以下任何支架，因此如果您需要支架，请单独购买。
:::

## 硬件图表

继续了解 Watcher 的硬件架构，让我们深入了解图表中提供的详细信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/Diagram.png" style={{width:1000, height:'auto'}}/></div>

Watcher 的核心是主 MCU，它是一个 **ESP32-S3** 芯片。这个强大的微控制器运行在 240MHz，配备 8MB PSRAM，用于高效的处理和内存管理。

ESP32-S3 与各种外设和接口通信：

1. **显示屏**：它通过 SPI/I2C 接口连接到一个 **1.45 英寸 412*412** LCD 触摸屏，实现直观的用户交互和生动的视觉输出。

2. **音频**：I2S 接口使 ESP32-S3 能够与扬声器和麦克风通信，提供音频输入和输出功能。

3. **存储**：Watcher 配备了一个 Flash 32M 模块，通过 SPI 接口连接，为固件、数据和用户文件提供充足的存储空间。

4. **无线连接**：ESP32-S3 集成了 Wi-Fi 和 BLE 功能，实现与其他设备和网络的无缝无线通信。

5. **可扩展性**：通过 I2C 接口连接的扩展端口，允许未来的硬件添加和定制。

6. **用户输入**：通过 GPIO/PWM 连接的拨盘，为用户提供直观的方式来导航和控制 Watcher 的功能。

7. **外部存储**：通过 SPI 接口的 Micro SD 卡插槽，使用户能够扩展 Watcher 的存储容量，用于额外的数据和媒体文件。

8. **电源和数据**：USB 端口可用于为 400mAh 电池充电，并在 Watcher 和其他设备之间传输数据。

AI MCU，一个配备 Cortex M55 和 US5 内核的 Himax HX6538 芯片，与主 MCU 协同工作，处理 AI 相关的任务和计算，增强 Watcher 的智能功能。

最后，Watcher 配备了一个 Camera OV5647 模块，可能通过 MIPI 接口连接，实现计算机视觉应用和视觉感知。

这种全面的硬件架构使 Watcher 能够提供功能丰富且多样化的用户体验，在紧凑高效的设计中结合了显示、音频、无线连接、存储和 AI 功能。

## 为 Watcher 充电

Watcher 上总共有两个 USB-C 端口，允许用户为不同的 Watcher 放置位置找到最合适的电源。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/charging.png" style={{width:1000, height:'auto'}}/></div>

为 Watcher 充电时，请确保使用正规制造商的电源适配器，我们建议使用 **5V/1A** 电源规格为 Watcher 供电。如果您想与 Watcher 通信，您可能需要使用带有信号线的合规 USB-C 线缆。

:::caution
请使用与 Watcher 兼容的电源插头；Watcher 必须使用 5V 电源供电，如果您使用不合规的电源适配器或电压大于 5V 的电源，可能会烧坏设备！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上图显示了推荐的适配器规格。如果您不知道在哪里可以购买合适的适配器，您可以选择通过下面的链接直接购买。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>
:::

## 连接到串口控制台

当您通过 USB 连接 Watcher 时，Windows 会注册两个新的串口。在我的情况下是 COM23 和 COM24。我决定做一个实验，看看串口终端上会出现什么，因为我是 Circuitpython 的粉丝，我喜欢 REPL！为此我使用了 Putty 并将其配置为使用 115200 波特率的串口（我很幸运，第一个 COM23 端口就是我需要用来发现命令控制台的端口）。但另一个端口 COM24 用于使用 Xmodem 协议升级固件，方式与 Grove Vision AI V2 相同。

终端立即显示一系列关于设备内存的信息。如果您按回车键，会出现一个提示符，您可以输入一些命令，我在下面列出了这些命令：

```
help  [<string>] 
Print the summary of all registered commands if no arguments are given, otherwise print summary of given command, where <string> is the name of command

wifi_sta  [-s <ssid>] [-p <password>]
WiFi is station mode, join specified soft-AP
s <ssid> SSID of AP
p <password> password of AP
ota  [-t <int>] [--url=<string>] force ota, ignoring version check
-t, --ota_type=<int> 0: ai model, 1: himax, 2: esp32
-url=<string> url for ai model, himax or esp32 firmware

taskflow  [-iej] [-f <string>]
i, --import import taskflow
e, --export export taskflow
f, --file=<string> File path, import or export taskflow json string by SD, eg: test.json
j, --json import taskflow json string by stdin

Example: Import taskflow by json string or SD file: taskflow -i -f "test.json".
Example: Export taskflow to stdout or SD file: taskflow -e -f "test.json"

factory_info
Get factory infomation

battery
Get battery percent

bsp  subcmd [subcmd args] 
Bsp call bsp functions

Example Scan the specified i2c bus: bsp i2cdetect <0|1>

reboot 
Reboot the device

factory_reset 
Factory reset and reboot the device

record  [-t <int>] [-f <string>]
Record audio and save to SD.
-t, --time=<int> record time, s
-f, --file=<string> File path, Store PCM audio data in SD card

vi_ctrl  [-sec] [-z <int>] 
Voice interaction ctrl (Probably will be used with Push to Talk function)
-s, --start start wakeup, and start record
-e, --end end record
-c, --stop stop voice interaction when analyzing or palying, Put it into idle.
-z, --exit=<int> 0: exit vi, 1:exit vi then run new taskflow

iperf  [-suVa] [-c <ip>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>]
Check conection performance. Similar to iperf linux command.
-c, --client=<ip> run in client mode, connecting to <host>
-s, --server run in server mode
-u, --udp use UDP rather than TCP
-V, --ipv6_domain use IPV6 address rather than IPV4
-p, --port=<port> server port to listen on/connect to
-l, --len=<length> Set read/write buffer size
-i, --interval=<interval> seconds between periodic bandwidth reports
-t, --time=<time> time in seconds to transmit for (default 10 secs)
-b, --bandwidth=<bandwidth> bandwidth to send at in Mbits/sec
-a, --abort abort running iperf

rgb  [-r <int>] [-g <int>] [-b <int>] [-m <int>] [-v <int>] [-t <int>]
Set the rgb LED value. eg: rgb -r 255 -g 0 -b 0 -m 3
-r, --red=<int> red value, 0~255
-g, --green=<int> green value, 0~255
-b, --blue=<int> blue value, 0~255
-m, --mode=<int> 1: breath, 2: blink, 3:solid, default 3
-v, --step_value=<int> RGB step value, default 3
-t, --step_time_ms=<int> RGB step time(ms), default 5
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
