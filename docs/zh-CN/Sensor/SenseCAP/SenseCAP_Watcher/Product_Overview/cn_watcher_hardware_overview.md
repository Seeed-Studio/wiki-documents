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

在 Wiki 的这一部分，我们将重点介绍 SenseCAP Watcher 的硬件组件、其构造以及附加配件的使用。

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
            <td align="center">内置 AI 处理器</td>
            <td align="center">Himax HX6538 (Cortex M55 + Ethos-U55)</td>
        </tr>
        <tr>
            <td align="center">摄像头</td>
            <td align="center">OV5647 120° FOV <br /> 固定焦距 3 米</td>
        </tr>
        <tr>
            <td align="center">Wi-Fi</td>
            <td align="center">符合 IEEE 802.11b/g/n 标准<br />2.4GHz 频段<br />无线范围：最远 100 米（开放空间测试）</td>
        </tr>
        <tr>
            <td align="center">蓝牙 LE</td>
            <td align="center">蓝牙 5</td>
        </tr>
        <tr>
            <td align="center">天线</td>
            <td align="center">内置 Wi-Fi 和 BLE 天线</td>
        </tr>
        <tr>
            <td align="center">显示屏</td>
            <td align="center">1.45 英寸触摸屏，412×412 分辨率</td>
        </tr>
        <tr>
            <td align="center">麦克风</td>
            <td align="center">单麦克风</td>
        </tr>
        <tr>
            <td align="center">扬声器</td>
            <td align="center">1W 扬声器输出</td>
        </tr>
        <tr>
            <td align="center">滚轮</td>
            <td align="center">支持上下滚动和按钮功能</td>
        </tr>
        <tr>
            <td align="center">LED</td>
            <td align="center">1x RGB 指示灯</td>
        </tr>
        <tr>
            <td align="center">microSD 卡槽</td>
            <td align="center">支持最大 32GB FAT32 microSD 卡</td>
        </tr>
        <tr>
            <td align="center">闪存</td>
            <td align="center">ESP32-S3 32MB 闪存<br />Himax HX6538 16MB 闪存</td>
        </tr>
        <tr>
            <td align="center">扩展接口</td>
            <td align="center">1x Grove IIC 接口<br />2x4 母头排针（1x IIC，2x GPIO，2x GND，1x 3.3V_OUT，1x 5V_IN）</td>
        </tr>
        <tr>
            <td align="center">USB-C</td>
            <td align="center">背面 1x USB-C（仅供电）<br />底部 1x USB-C（供电和编程）</td>
        </tr>
        <tr>
            <td align="center">复位按钮</td>
            <td align="center">底部孔内 1x RST 按钮</td>
        </tr>
        <tr>
            <td align="center">电源</td>
            <td align="center">5V DC 供电</td>
        </tr>
        <tr>
            <td align="center">电池</td>
            <td align="center">3.7V 400mAh 锂离子电池作为备用电源</td>
        </tr>
        <tr>
            <td align="center">工作温度</td>
            <td align="center">0 ~ 45°C</td>
        </tr>
        <tr>
            <td align="center">安装支架</td>
            <td align="center">支持壁挂、桌面和支架安装<br />1x 万向轮和带胶底板<br />1x 1/4" 母头适配器套装</td>
        </tr>
    </table>
</div>

## 功能特性

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

8. **电源和数据**：USB 端口可用于为 400mAh 电池充电，以及在 Watcher 和其他设备之间传输数据。

AI MCU，一个配备 Cortex M55 和 US5 内核的 Himax HX6538 芯片，与主 MCU 协同工作，处理 AI 相关的任务和计算，增强 Watcher 的智能功能。

最后，Watcher 配备了一个 Camera OV5647 模块，可能通过 MIPI 接口连接，实现计算机视觉应用和视觉感知。

这种全面的硬件架构使 Watcher 能够提供功能丰富且多样化的用户体验，在紧凑高效的设计中结合了显示、音频、无线连接、存储和 AI 功能。

## 为 Watcher 充电

Watcher 上总共有两个 USB-C 端口，允许用户为不同的 Watcher 放置位置找到最合适的电源。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/charging.png" style={{width:1000, height:'auto'}}/></div>

为 Watcher 充电时，请确保使用正规制造商的电源适配器，我们建议使用 **5V/1A** 电源规格为 Watcher 供电。如果您想与 Watcher 通信，您可能需要使用带有信号线的合规 USB-C 线缆。

:::caution
请使用与 Watcher 兼容的电源插头；Watcher 必须由 5V 电源供电，如果您使用不合规的电源适配器或电压大于 5V 的电源，可能会烧坏！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上图显示了推荐的适配器规格。如果您不知道在哪里可以购买合适的适配器，您可以选择直接在下面的链接购买。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>
:::

## 连接到串行控制台

当您通过 USB 连接 Watcher 时，Windows 会注册两个新的串行端口。在我的情况下是 COM23 和 COM24。我决定做一个实验，看看串行终端上会出现什么，因为我是 Circuitpython 的粉丝，我喜欢 REPL！为此我使用了 Putty 并将其配置为使用 115200 波特率的串行端口（我很幸运，第一个 COM23 端口就是我需要发现命令控制台的端口）。但另一个端口 COM24 用于使用 Xmodem 协议升级固件，方式与 Grove Vision AI V2 相同。

终端立即显示一系列关于设备内存的信息。如果您按回车键，会出现一个提示符，您可以输入一些命令，我在下面列出：

```
help  [<string>] 
如果没有给出参数，打印所有已注册命令的摘要，否则打印给定命令的摘要，其中 <string> 是命令的名称

wifi_sta  [-s <ssid>] [-p <password>]
WiFi 为站点模式，加入指定的软接入点
s <ssid> 接入点的 SSID
p <password> 接入点的密码
ota  [-t <int>] [--url=<string>] 强制 ota，忽略版本检查
-t, --ota_type=<int> 0: ai 模型, 1: himax, 2: esp32
-url=<string> ai 模型、himax 或 esp32 固件的 url

taskflow  [-iej] [-f <string>]
i, --import 导入任务流
e, --export 导出任务流
f, --file=<string> 文件路径，通过 SD 卡导入或导出任务流 json 字符串，例如：test.json
j, --json 通过标准输入导入任务流 json 字符串

示例：通过 json 字符串或 SD 文件导入任务流：taskflow -i -f "test.json"。
示例：将任务流导出到标准输出或 SD 文件：taskflow -e -f "test.json"

factory_info
获取工厂信息

battery
获取电池百分比

bsp  subcmd [subcmd args] 
Bsp 调用 bsp 函数

示例 扫描指定的 i2c 总线：bsp i2cdetect <0|1>

reboot 
重启设备

factory_reset 
恢复出厂设置并重启设备

record  [-t <int>] [-f <string>]
录制音频并保存到 SD 卡。
-t, --time=<int> 录制时间，秒
-f, --file=<string> 文件路径，将 PCM 音频数据存储在 SD 卡中

vi_ctrl  [-sec] [-z <int>] 
语音交互控制（可能与按键通话功能一起使用）
-s, --start 开始唤醒，并开始录制
-e, --end 结束录制
-c, --stop 在分析或播放时停止语音交互，将其置于空闲状态。
-z, --exit=<int> 0: 退出 vi, 1:退出 vi 然后运行新的任务流

iperf  [-suVa] [-c <ip>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>]
检查连接性能。类似于 iperf linux 命令。
-c, --client=<ip> 以客户端模式运行，连接到 <host>
-s, --server 以服务器模式运行
-u, --udp 使用 UDP 而不是 TCP
-V, --ipv6_domain 使用 IPV6 地址而不是 IPV4
-p, --port=<port> 要监听/连接的服务器端口
-l, --len=<length> 设置读/写缓冲区大小
-i, --interval=<interval> 定期带宽报告之间的秒数
-t, --time=<time> 传输时间（秒）（默认 10 秒）
-b, --bandwidth=<bandwidth> 发送带宽，单位为 Mbits/sec
-a, --abort 中止正在运行的 iperf

rgb  [-r <int>] [-g <int>] [-b <int>] [-m <int>] [-v <int>] [-t <int>]
设置 rgb LED 值。例如：rgb -r 255 -g 0 -b 0 -m 3
-r, --red=<int> 红色值，0~255
-g, --green=<int> 绿色值，0~255
-b, --blue=<int> 蓝色值，0~255
-m, --mode=<int> 1: 呼吸, 2: 闪烁, 3:常亮, 默认 3
-v, --step_value=<int> RGB 步进值，默认 3
-t, --step_time_ms=<int> RGB 步进时间（毫秒），默认 5
```

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