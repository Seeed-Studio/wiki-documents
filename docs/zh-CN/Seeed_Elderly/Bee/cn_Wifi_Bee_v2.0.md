---
description: Wifi Bee v2.0
title: Wifi Bee v2.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wifi_Bee_v2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Wifi_bee_v2_01.jpg)

Wifi Bee v2.0 是 Wifi Bee v1.0 的升级版本。我们将使用 UART 接口的 RN-171 替换了原来的 SPI 接口的 MRF24WB0MA 收发模块。Wifi Bee v2.0 模块集成了 802.11 b/g 无线电、32 位处理器、TCP/IP 协议栈、实时时钟、加密加速器、电源管理单元和模拟传感器接口。它可以直接插入 Bee 插座，并使用 UART 端口进行通信。您还可以使用 AT 命令进行高级配置，以满足您的独特需求。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wifi-Bee-v2.0-p-1637.html)

##  规格
---
*   兼容任何 Bee 插座

*   主机接口：UART

*   发射功率：0dBm 至 12dBm

*   频率：2402~2480 MHz

*   通道：0~13

*   集成 TCP/IP 协议栈

*   板载多层芯片天线

##  演示
---
在本节中，我们将使用 Wifi Bee 创建一个 Web 服务器作为示例应用程序。按照以下步骤操作即可使其正常工作！
注意：为了配置此模块，您需要一个适配器或 Xbee 扩展板，以便与模块通信，然后才能插入并在其他模块上使用。

###  硬件安装

以下是所需的所有硬件。

*   1) Wifi Bee

*   2) 一个适配器，例如 [SBee](https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16Uart)、[Grove -Xbee Carrier](https://www.seeedstudio.com/depot/grove-xbee-carrier-p-905.html?cPath=98_16)、[Xbee Shield](https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16)

*   3) Mini USB 数据线

将 Wifi Bee 插入适配器的 Bee 插座，并通过 Mini USB 数据线将适配器连接到您的计算机。在 Wifi Bee 尚未连接到网络之前，ASSOC 指示灯会处于闪烁状态。

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Wifi_Beev2.0.jpg)

###  配置 Wifi Bee

我们需要一个串口监视器来配置 Wifi Bee。因此，在配置 Wifi Bee 之前，您需要准备一个串口工具。在本例中，我们选择常用的 [SSCOM3.2](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Sscom32E.zip)。

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Serial_Tool.png)

*   1) 选择正确的串口并点击“Open Com”按钮，如上图所示，将波特率设置为 9600。

*   2) 不要选择“SendNew”，发送 AT 命令 $$$ 到 Wifi Bee，模块会回复“CMD”，表示已正确进入配置模式。

*   3) 进入配置模式后选择“SendNew”，发送 AT 命令 set u b 9600 将波特率设置为 9600。当然，您也可以将其设置为 38400。

*   4) 输入 show net，模块会显示当前的网络设置。

*   5) 输入 scan 查看周围的 Wifi 网络列表。

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Serial_Tool_Scan_net.png)

*   6) 发送 AT 命令 set wlan join 1，如果串口回复“ADK”，表示 Wifi Bee 进入自动控制模式。

*   7) 输入 join 您路由器的 SSID（例如 join Seeed-STU）以连接到开放的接入点。如果连接的是安全网络，请按以下方式输入：

set wlan ssid 您路由器的 SSID

set wlan pass 您路由器的密码

save

reboot

串口监视器会回复当前的 IP 地址和开放端口。可以轻松发现我的 Wifi Bee 的 IP 地址是 192.168.0.28，端口是 2000。

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Join_network.png)

*   8) 使用 Web 浏览器访问 `http://ip:port`，例如：`http://192.168.0.28:2000`，串口监视器会接收到来自 Web 浏览器的 HTTP 请求，如下图所示。然而，由于 Wifi Bee 没有回复任何内容，Web 浏览器不会接收到任何信息。

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Web_access.png)

有关更多命令，请查看资源部分的 Wifly Command Reference。

###  连接 TCP 服务器和 Wifi Bee

这里我们选择 [TCPUDPbg](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/TCPUDPDbg.zip) 作为 TCP 客户端，并向 Wifi Bee 发送命令。

*   1）下载并运行 TCPUDPbg。点击“CreatConnection”，我们可以看到如下图所示的界面：

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/TCPUDPTool.png)

*   2）选择 TCP 类型，输入 Wifi Bee 的 IP 地址和端口，然后点击“Create”。

*   3）点击左侧栏中的“Connect”按钮，现在您可以通过 TCPUDPbg 模拟的 TCP 客户端向 Wifi Bee 发送命令。同时，TCPUDPbg 也会接收到串口监视器发送的字符串！

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Communication.png)

## 版本追踪
---
| 修订版 | 描述 | 发布日期 |
|--------|------|----------|
| Wifi Bee v1.0 | 使用 MRF24WB0MA 收发模块，SPI 接口，并采用 Atmega328p | 2011年12月13日 |
| Wifi Bee v2.0 | 将 MRF24WB0MA 替换为 RN-171，取消 Atmega328p 芯片 | 2013年11月11日 |

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Wifi_Bee_v2.0_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
*   [Wifi Bee v2.0 Eagle 文件](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Wifi_Bee_v2.0_Eagle_File.zip)

*   [RN-171 数据手册](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/WiFly-RN-171.pdf)

*   [Wifi 命令参考](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/WiFly-RN-UM.pdf)

*   [天线数据手册](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Antenna_Datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>