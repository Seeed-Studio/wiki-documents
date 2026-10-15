---
title: 基于 Wifi HaLow 的 AI 远程无线监控系统
description: 本维基页面介绍了一个基于 Wifi Halow 的 AI 远程无线监控系统演示，并提供搭建用户自有系统的分步指南。
keywords:
  - Wifi Halow
  - reCamera
  - AI 边缘感知
slug: /ai_remote_wireless_monitor_system
sku: 102991897, 110070108
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 2
last_update:
  date: 2025-11-19
  author: John Xiang
createdAt: '2025-11-21'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/cn/ai_remote_wireless_monitor_system/
---

# 基于 reCamera 和 Wifi Halow 的 AI 远程无线监控系统

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/6.gif" /></div>

如果你是户外爱好者，是否经常被野外没有网络、传统 WiFi 覆盖范围有限、摄像头无法进行远距离实时图像传输所困扰？通过本 Wiki，你可以基于 **reCamera 系列** 和 **Wifi Halow** 图传模块，实现自己的 **AI 远程无线监控系统**。当然，你也可以有更多想象力，包括但不限于以下场景：

- 你希望为整个房产实现无线监控，但不需要布线或路由器，并且通过板载 AI 检测可疑活动。

- 你有一辆卡车，希望检测靠近车辆的任何可疑人员，但全年网络都不稳定，无法实时上传视频，或者普通摄像头必须依赖云端。

- 当你在森林中探险时，希望随时接收营地固定摄像头的画面，以识别是否有熊或其他危险动物，但普通无线传输距离太短。

**那么为什么 reCamera 和 Wifi Halow 能实现这样的系统？** 首先，reCamera 提供 1 Tops 算力的端侧 AI 能力，因此它可以在设备内部运行 AI，而无需依赖其他边缘设备。

它还集成了 Node-RED，使开发过程非常方便高效。如果你想通过 rtsp 推流或使用 WebSocket 发送数据，只需要拖拽节点即可实现，而不必从零开始构建大量程序。更多详情请查看链接：[Node-RED Tutorial on reCamera](https://wiki.seeedstudio.com/cn/recamera_develop_with_node-red/)

下面是一个 Node-RED 开发示例：只需简单拖拽 3 个节点即可构建一个 AI 视觉工作流：
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_1.png" /></div>

在 Wi-Fi HaLow 方面，它是一种为物联网设计的低频无线技术，具有远距离、低功耗和高带宽等优势。在 902–928 MHz 频段下，8 MHz 带宽条件下最大传输速率可达约 16 Mbps，通信距离可达 1 km。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_2.png" /></div>

与传统 2.4G/5G Wi-Fi 相比，HaLow 具有更强的穿透力和更广的覆盖范围；而与 LoRa、Sub-GHz 等其他远距离通信方式相比，HaLow 具有更高的带宽，能够同时支持文本、音频、图像甚至视频流等多种媒体的传输。

| 特性 | Wi-Fi (2.4/5GHz) | **Wi-Fi HaLow (802.11ah)** | LoRaWAN |
|---------|------------------|-----------------------------|----------|
| 频段 | 2.4GHz / 5GHz | **Sub-GHz (902–928MHz)** | Sub-GHz (例如 868/915MHz) |
| 覆盖范围 | 50–100 m | **最高约 1 km** | 2–15 km（取决于环境） |
| 穿透能力 | 中等 | **强（更好的墙体穿透能力）** | 非常强 |
| 典型数据速率 | 数百 Mbps 到 Gbps | **最高约 16 Mbps（8 MHz 信道）** | 非常低（0.3–50 kbps） |
| 时延 | 低 | **低（支持图像/视频）** | 高（秒级） |
| 功耗 | 中等–高 | **低于传统 Wi-Fi** | 非常低|
| 适用场景 | 局域网、高清/4K 视频 | **远距离视频、远程监控、工业物联网** | 远距离感知、遥测、超低功耗物联网 |

因此，该系统可以降低你开发智能监控系统的技术门槛，使非专业用户也能轻松上手。具体来说，它提供：

1. **边缘 AI 模型**：无需从零构建自己的 AI 架构，无需 AI 团队，无需理解算法，上电即用。

2. **内置算力**：不依赖笔记本、台式机或其他边缘计算设备

3. **Node-RED 图形化编程工具**：无需掌握前后端编程，无需深入计算机网络、系统集成等专业知识

4. **远程无线连接**：无需复杂布线，无需交换机/路由器

## 整体架构

系统结构非常简单。两个 HaLow 模块分别通过以太网线连接 reCamera 和 reTerminal，之后这两台设备通过 Wifi HaLow 进行无线传输。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1.png" /></div>

## 硬件准备

要完成本项目，你需要任意一款 reCamera：reCamera 2002 系列、reCamera HQ PoE、reCamera Gimbal。

### 📦 reCamera

<table align="center">

<tbody><tr>

<th>Seeed Studio reCamera 2002W 8GB/64GB</th>

<th>Seeed Studio reCamera 2002HQ PoE 64GB</th>

<th>Seeed Studio reCamera Gimbal</th>

</tr>

<tr>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:210, height:'auto'}}/></div></td>

</tr>

<tr>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

### reTerminal 和扩展板

如果你希望移动运行该应用，可以使用带专用扩展板的 reTerminal，扩展板内置两节 18650 电池。

:::note

这里的 reTerminal 可以替换为任何带网口和屏幕的边缘计算设备。包括但不限于笔记本、台式机、开发板等。我们鼓励你多做尝试。本教程中仅使用 reTerminal 进行演示，reTerminal 是一款基于 Raspberry Pi CM4 的终端设备，带有网口等多种接口。

:::

<table align="center">

<tbody><tr>

<th>Seeed Studio reTerminal - 5'' HMI CM4108032</th>

<th>Seeed Studio reTerminal E10-1 Expansion Board(Optional)</th>

</tr>

<tr>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" style={{width:300, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" style={{width:210, height:'auto'}}/></div></td>

</tr>

<tr>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-CM4108032-p-5712.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

### Wifi Halow 图像传输模块

这是我们在项目中使用的 Wifi Halow 模块。工作频段为 902-928 MHz，带宽为 8 MHz，最高速率 16 Mbps，最大通信距离可达 1 km，发射功率为 20 dBm。设备提供 IPEX 天线接口、10/100 Mbps 网口、TTL 串口（最高 350 kbps），支持 WPA2-PSK AES 加密，5V/12V 供电，可在 -20 ℃ 至 70 ℃ 范围内可靠运行，平均功耗 1.5W。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_2.jpg" /></div>

## 工具准备

- **PC**：用于连接 reCamera 进行调试。后续操作需要登录 reCamera 的后台，以及为 reTerminal 刷写树莓派操作系统。同时，一旦在 PC 端出现问题，调试会更加方便，各类软件工具也更齐全。

- **3 根 USB-C 线缆**：

一根用于连接 reCamera 给 PC 供电，另外两根用于给 Wifi Halow 模块供电。

- **键盘/鼠标**：连接 reTerminal 进行调试。

- **5V3A USB-C 电源适配器** 与树莓派 4/5 相同的电源，为 reTerminal 供电。购买链接：[5V3A USB-C Power Supply](https://www.seeedstudio.com/Wall-Adapter-Power-Supply-5VDC-3A-Type-C-p-4103.html)

- **（可选）12V 直流电源适配器** 用于为 reTerminal 扩展板供电。购买链接：[12V DC Power Supply(US/EU)](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)

- **（可选）reCamera 三角支架** 购买链接：[Mini Tripod](https://www.seeedstudio.com/Mini-Tripod-p-5978.html)

:::note

如果你打算使用扩展板，就不必再为设备电源发愁，Raspberry Pi 4/5 的电源可以同时被 reTerminal 使用，只需要 12V 直流电源，不再需要 5V3A USB-C 电源，因为 reTerminal 可以直接从扩展板获取电源。

:::

## 详细教程：reCamera Wifi HaLow 模块配置与 reTerminal 配置

整个系统的一般思路是让 reCamera 通过 Wifi HaLow 与终端设备组成一个网络。首先，在终端设备（reTerminal）和 reCamera 上配置静态 IP，因为在户外或移动应用中无法使用路由器，没有 DHCP 服务，需要手动分配 IP。

IP 分配完成后，这些设备就形成了一个“局域网”，它们可以通过 IP 互相访问。此时，通过 Node-RED 在 reCamera 上创建流节点和 WebSocket 节点，以 rtsp 推流的形式发送视频流，并通过 WebSocket 发送 yolo 检测结果。

最后，在终端设备上访问视频流和 AI 检测结果，例如 Windows/Linux 上的 VLC Media Player。本教程将演示如何在 Linux 上通过 ffplay 获取 rtsp 推流。

### 阶段 1：配置 reCamera

#### 步骤 1.1 登录 reCamera

使用 USB-C 线将 reCamera 连接到电脑。设备刚上电启动需要一些时间，等待 1-2 分钟后，打开任意网页浏览器，输入 ** 192.68.42.1 ** 进入 reCamera 系统。

首次登录需要配置自己的密码。请记住你的密码，后续会用到。进入 reCamera 系统后，你应该会看到如下页面：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t2.png" /></div>

:::note

如果你没有看到这个页面，请刷新浏览器。

如果你的设备之前已经使用或配置过，有可能会直接跳转到 Workspace。此时，网址为：'http:// 192.168.42.1/#/workspace' 请跳到下一步。总之，只要进入 Workspace 即可。

如果刷新仍然无法解决，请重置设备或联系技术支持解决。

:::

#### 步骤 1.2 配置相机节点

点击页面右下角的绿色按钮进入 Workspace。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3.png" /></div>

Workspace 页面显示

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_0.png" /></div>

双击相机节点进入配置页面。为保证流畅性，我们将相机节点配置为 **480P，5 帧**。你可以尝试更高的分辨率或帧率，但延迟可能会更高。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_1.png" /></div>

#### 步骤 1.3 配置流节点

如上所述，我们需要在 Node-RED 上配置 rtsp 推流。在左侧节点列表中搜索 'stream' 节点，或向下滑动鼠标滚轮到最底部找到 Stream 节点。关于配置方法，请参考：[Node-Red Stream Node Configuration](https://wiki.seeedstudio.com/cn/recamera_develop_with_node-red/#stream-node)配置完成后，你应该得到如下结果：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_3.png" /></div>

请完全按照 Node-RED 教程进行操作，确保你的输出为 sscma，最终视频流将输出到：rtsp:// admin:admin@192.168.xxx.xxx:554/live，其中 192.168.xxx.xxx 为 reCamera 的静态 IP 地址。静态 IP 可以自由配置，这里演示使用 192.168.10.100。

#### 步骤 1.4.1 配置 WebSocket 节点

为了在终端设备上显示 yolo 检测到的结果，我们需要通过 WebSocket 发送检测结果。WebSocket 节点的类型应配置为 'connect' 而不是 'listen'。

在这里配置 WebSocket 节点的 URL 时，需要配置为 ws://192.168.
nnn.nnn:9000 实际上，192.168.nnn.nnn 是 reTerminal 或你自己的其他终端设备的静态 IP 地址，而不是上面 reCamera 的静态 IP 地址。这里演示使用 192.168.10.3。最终结果如下：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_5.png" /></div>

#### 步骤 1.5 进入设置页面

或者在刚刚修改 Node RED 的 Workspace 页面，点击左上角的 "Setting"

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t4_1.png" /></div>

> 图 4：Workspace 设置界面

#### 步骤 1.6 进入 reCamera 终端

进入设置页面后，选择 'Terminal' 进入 reCamera 命令行

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t5.png" /></div>

> 图 5：设置页面 Terminal 界面

点击 Terminal 后，需要再次登录，输入用户名：'recamera'，然后输入设置的密码即可使用 Terminal。效果如下所示。如果你忘记密码，请参考以下教程重置设备：[reCamera Factory Reset](https://wiki.seeedstudio.com/cn/recamera_getting_started/#factory-reset)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t6.png" /></div>

> 图 6：登录后 Terminal 页面效果

#### 步骤 1.7 配置 reCamera 静态 IP

在 reCamera 上，我们需要通过传统的 Linux 网络系统（ifupdown）来配置网络。方法非常简单，我们只需要进入网络配置文件，将 reCamera 上的以太网端口配置为你想要的静态 IP：192.168.xxx.xxx.xxx。这里我将静态 IP 配置为

102.168.10.100 首先通过 vi 编辑器进入网络配置文件，在 reCamera 终端输入以下命令：

```bash
sudo vi /etc/network/interfaces
```

请在文件末尾添加：

```bash
auto eth0
iface eth0 inet static
address 192.168.10.100
netmask 255.255.255.0
gateway 192.168.10.1
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t7_0.png" /></div>

这些代码将配置 reCamera 的以太网端口为静态 IP 192.168.10.100，子网掩码为 255.255.255.0，网关为 192.168.10.1。当然，你也可以自由配置为 192.168.3.xxx 或 192.168.42.xxx 等具体 IP。但是，请确保它与 reTerminal 或终端设备处于同一网段。例如，你的 reCamera 是 192.168.33，那么 reTerminal 需要配置为 192.168.33.nnn。如果 reTerminal 的静态 IP 变成 192.168.32.nnn 或 192.168.34.nnn，则无法通信。

添加完上述代码后，输入 ''':wq''' 退出 vi 编辑器并返回 reCamera 终端。然后输入 '''sudo reboot ''' 重启 reCamera。

:::note

需要注意的是，配置静态 IP 后，reCamera 必须通过网线连接到 PC。同时，在再次登录 reCamera 之前，必须在 PC 上配置静态 IP。登录时使用新配置的 reCamera 静态 IP。这里以 Windows 配置静态 IP 为示例。同样，对于所有配置了静态 IP 的设备，必须确保它们处于同一网段，例如 reCamera-192.168.10.100、reTerminal-192.168.10.3、笔记本电脑（Windows）-192.168.10.2，否则它们之间无法通信。Windows 上的参考配置如下：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/tx.png" /></div>

:::

#### 步骤 1.8 检查静态 IP 配置

重复步骤 1.5 返回 reCamera 设置页面，检查静态 IP 是否配置成功：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t7_1.png" /></div>

很好，现在我们已经在 reCamera 上配置好了静态 IP，接下来进入下一阶段

### 阶段 2：配置 Wifi HaLow 图传模块

#### 步骤 2.1 设置两个 HaLow 模块的工作模式

首先，将其中一个 Wifi HaLow 模块设置为 AP 模式，另一个设置为 STA 模式。不要担心 AT 或 STA 模块是否连接到 reCamera/终端，顺序并不重要，但必须保证至少一个 STA 和一个 AP 模式的模块。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t8.png" /></div>

#### 步骤 2.2 HaLow 模块配对

现在同时按下两个模块上的配对按钮：
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t9.png" /></div>
之后，两个模块上的绿色 LED 会闪烁。当闪烁停止且绿色 LED 常亮时，模块配对成功。

非常好！你已经成功配对了两个 Wifi HaLow 模块，它们现在可以被视为网线的两端，可用于连接 reCamera 和终端设备。

### 阶段 3：配置终端设备（reTerminal）

现在我们要在 reTerminal 上配置静态 IP。理论上有很多方法，例如 NetworkManager。NetworkManager 是 Linux 系统中的网络管理守护进程，它会自动帮助你管理所有网络连接工具，如 Wi-Fi/以太网/IP 地址/DHCP/热点/路由。你可以尝试通过 NetworkManager 来实现。不过，为了降低学习成本，我们采用与 reCamera 相同的方法，通过 '/etc/network/interfaces 配置静态 IP 地址。

:::note

同样地，reTerminal 可以替换为任何带有网络端口和屏幕的（边缘）计算设备，包括但不限于笔记本电脑、台式机、开发板等。对于固定位置监控，可以使用 Windows 笔记本/台式机。对于移动部署，可以使用带屏幕的基于 Raspberry Pi 的终端设备。本教程使用 reTerminal reTerminal E10 扩展板（用于户外供电的扩展板）。你可以自行选择供电方式。

:::

#### 步骤 3.1 启动 reTerminal

reTerminal 出厂自带系统，理论上可以直接进入 Raspbian。但是，如果上电后左下角绿色 LED 亮起/闪烁但屏幕黑屏，请参考以下教程重新烧录系统。此步骤需要外接显示器调试。[reTerminal 初始化教程](https://wiki.seeedstudio.com/cn/reTerminal/#入门指南)
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t10.jpg" /></div>

#### 步骤 3.2 禁用 NetworkManager 服务

将键盘和鼠标连接到 reTerminal，并按下 **Ctrl Alt T** 打开终端。由于 NetworkManager 与上述方法冲突，我们需要禁用 NetworkManager 服务。在 reTerminal 终端上执行：

```bash
sudo systemctl stop NetworkManager
sudo systemctl disable NetworkManager
```

#### 步骤 3.3 配置 reTerminal 静态 IP

与步骤 1.7 相同，在 reTerminal 终端上：

```bash
sudo nano /etc/network/interfaces
```

进入网络配置文件，在文件末尾添加以下内容。这里将 reTerminal 静态 IP 设置为 **192.168.10.3**：

```bash
auto eth0
iface eth0 inet static
address 192.168.10.3
netmask 255.255.255.0
gateway 192.168.10.1
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t11.jpg" /></div>

:::note

如果你之后想重新使用 NetworkManager，只需要删除在 '/etc/network/interfaces' 中新添加的 'auto eth0' 4 行，共计 5 行。

然后执行：

```bash
sudo systemctl enable NetworkManager
sudo systemctl restart NetworkManager
```

:::

保存 ctrl s、ctrl x 并退出。然后输入 '''reboot''' 重启 reTerminal。

#### 步骤 3.4 验证静态 IP 配置

回到 reTerminal 终端，运行命令：'''ifconfig''' 来验证静态 IP 地址是否配置成功。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t12.png" /></div>

如果你在 'eth0' 中看到 IP = **192.168.10.3**，则表示成功。

完美！所有设备都已设置完成，现在你可以进入下一阶段 :)

### 阶段 4：连接并开始使用

还记得我们在步骤 1.2 中配置的 rtsp 推流节点吗？这里已经有一个 rtsp 视频流：'''rtsp:// admin:admin@192.168.xxx.xxx:554/live''' 其中 '192.168.xxx.xxx' 是你在步骤 1.6 中手动配置的 **reCamera 静态 IP**，而不是 reTermnial 静态 IP。以我的情况为例，对应的 rtsp 推流为：

```
rtsp://admin:admin@192.168.10.100:554/live
```

实际上，你可以使用任何软件方式打开视频流，例如 **VLC Player**。

不过，为了方便，我们在终端中使用 ffmpeg 中的 **ffplay 命令** 直接打开 rtsp 视频流。

#### 步骤 4.1 安装 reTerminal 扩展板

参考教程：[reTerminal E10 安装指南](https://wiki.seeedstudio.com/cn/reTerminal_Mount_Options/)

安装扩展板后，你可以使用 reTerminal 上的 usbc 接口为 HaLow 模块供电，两个 usba 接口可以连接鼠标和键盘。

#### 步骤 4.2 安装 Wifi HaLow 图传模块

将两块配对的图传模块分别安装在 reCamera 和 reTerminal 上

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t13_1.jpg" /></div>

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t13_2.jpg" /></div>

#### 步骤 4.3 在 reTerminal 上安装 ffmpeg 和 nmap

ffmpeg 用于获取 rtsp 推流，nmap 用于扫描列表。在 reTerminal 终端中执行：

```bash
sudo apt install ffmpeg
sudo apt install nmap
```

#### 步骤 4.4 播放 rtsp 视频流

运行 ffplay 命令获取 reCamera rtsp 流（属于 ffmpeg 命令）：

```bash
ffplay -rtsp_transport udp -max_delay 20000 -probesize 2M rtsp://admin:admin@192.168.10.100:554/live
```

下面是对 ffplay 命令中参数的说明：

- '-rtsp_transport udp'：指定使用 UDP 传输协议，因为 reCamera 默认使用 UDP 推流。

- '-max_delay 20000'：将最大延迟设置为 20 秒，用于处理网络延迟。

- '-probesize 2M'：将探测大小设置为 2MB，以提高视频流的播放速度。

- 'rtsp:// admin:admin@192.168.10.100:554/live'：这是 reCamera 的 rtsp 拉流地址。请替换为你自己的地址。

此时会弹出一个新窗口，rtsp 视频流会显示在其中，双击窗口可以全屏播放。

:::note
或者，你也可以使用 VLC Player 或 GStreamer 打开 rtsp 视频流。在 reTerminal 终端中运行以下命令安装 GStreamer：

```bash
sudo apt update
sudo apt install -y \
    gstreamer1.0-tools \
    gstreamer1.0-plugins-base \
    gstreamer1.0-plugins-good \
    gstreamer1.0-plugins-bad \
    gstreamer1.0-plugins-ugly \
    gstreamer1.0-libav \
    gstreamer1.0-rtsp \
    gstreamer1.0-x \
    gstreamer1.0-gl \
    gstreamer1.0-alsa \
    gstreamer1.0-pulseaudio

```

然后运行命令播放 rtsp 视频流：

```bash
gst-launch-1.0 rtspsrc location=rtsp://admin:admin@192.168.10.100:554/live latency=2000 ! rtph264depay ! h264parse ! avdec_h264 ! videoconvert ! autovideosink
```

:::
bus

#### 步骤 4.5 监控 Yolo 测试结果

在 reTerminal 上按 **Ctrl + Alt + T** 打开一个新的终端。我们将启动一个 WebSocket 服务器来接收 AI 检测结果。运行以下命令：

```bash
wscat -l 9000
```

当服务器启动时，会显示：

```bash
Listening on port 9000 (press CTRL+C to quit)
```

保持此终端打开，以显示从 reCamera 推送过来的检测结果。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t15.jpg" /></div>
上图展示了通过 GStreamer 的 RTSP 推流以及通过 WebSocket 的文本 AI 检测结果。

左侧的终端展示了检测结果：

```bash
< counts=person:1; person(682,359,1175,704)
< counts=person:1; person(649,359,1247,704)
< counts=person:1; person(678,359,1188,704)
< counts=person:1; person(652,359,1240,704)
< counts=person:1; person(656,359,1227,704)
< counts=person:1; person(648,359,1236,704)
< counts=person:1; person(648,359,1243,704)
< counts=person:1; person(650,359,1227,703)
< counts=person:1; person(652,359,1241,704)
< counts=person:1; person(646,359,1246,704)
< counts=person:1; person(647,359,1244,704)
< counts=person:1; person(653,359,1252,704)
< counts=person:1; person(650,359,1238,704)
```

**恭喜！你已经实现了自己的远程 AI 检测系统。**

## 探索更多可能性

如开头所述，本项目只是一个远程 AI 检测的简单示例。你可以将其扩展到更复杂的场景。我们会在这里介绍一些示例。所有这些示例稍后都会更新到 Github。

### 案例 1：野外露营熊出没预警系统

将熊检测模型上传到 reCamera，并将设备部署在森林露营地的固定位置，用于检测潜在的熊入侵。你可以通过 reTerminal 或其他设备远程监控该区域，帮助你避免过于接近野生动物，降低危险风险。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/ta_1.jpg" /></div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>
