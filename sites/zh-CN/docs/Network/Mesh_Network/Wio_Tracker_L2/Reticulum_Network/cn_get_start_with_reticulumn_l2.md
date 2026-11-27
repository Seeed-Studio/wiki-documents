---
description: 本指南介绍如何安装 Reticulous，以便使用 Seeed Studio L2 Pro 连接到 Reticulum 网状网络。
title: Reticulous 入门
keywords:
    - reticulum
    - L2 Pro
    - reticulous
    - mesh network
    - network stack
    - LoRa mesh
    - transport-agnostic
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /reticulum_l2_pro_reticulous
sku: 100029766
sidebar_position: 1
last_update:
  date: 11/27/2026
  author: Michelle Huang
createdAt: '2026-11-27'
updatedAt: '2026-11-27'
url: https://wiki.seeedstudio.com/cn/reticulum_l2_pro_reticulous/
---

# 在 L2 Pro 上使用 Reticulum 与 Reticulous

## 什么是 Reticulum？

[Reticulum](ihttps://reticulum.network/) 是一个与传输无关的网状_网络栈_，它允许构建远远超出仅使用 LoRa 的网状网络：借助 Reticulum，节点可以通过 LoRa、WiFi、蓝牙 BLE、任何其他可用的无线电类型（FM、AM、UHF 等），以及通过互联网或未来出现的任何方式进行互联，_并且可以同时使用所有这些方式_。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/reticulumdescription.png" style={{width:900, height:'auto'}}/>
</div>

Reticulum 也不同于以往仅限 LoRa 的网状网络尝试，因为它是一个完整的_网络栈_，而不仅仅是一个消息协议。可以在 Reticulum 之上构建和使用各种协议和应用程序，且没有限制。Reticulum 真正代表了一种用于网状网络和通信的全新[理念](https://reticulum.network/manual/zen.html)，面向_后互联网_时代的网络。

Reticulum Network Stack（RNS）拥有极其广阔的可能性，目前才刚刚开始被探索。它的[文档](https://reticulum.network/manual/index.html)非常详尽，是任何希望深入理解并在其基础上进行构建的人应当首先阅读的内容。

任何愿意探索 Reticulum 的人，都可以使用运行任意操作系统的计算机来实现。通过包管理器（apt、pip、pipx）轻松安装基础的 _reticulum_ 软件包，以及其基于终端的配套应用 _nomadnet_ 或图形程序 _sideband_，是一个不错的起点。有些人可能更喜欢更现代、集成度更高的连接 Reticulum 的方式，例如 [ratspeak](https://ratspeak.org/) 或 [meshchatX](https://meshchatx.com/)。已经有许多此类应用，可以让手机和电脑连接到 Reticulum 网络，例如通过本地 WiFi 或互联网。

## Reticulous

一种简单、集成度高且几乎不需要任何技术背景知识就能连接到 Reticulum 的方式是 [Reticulous](https://reticulous.net/)，本快速教程的主题正是它。

Reticulous 是为 ESP32 系列微控制器打造的全功能集成套件，运行完整的 Reticulum 栈、图形化操作系统（包括 Web UI）以及众多易用应用，用于发送消息、浏览 nomadnet 页面、进行语音通话、参与语音会议等更多功能，并通过 LoRa、蓝牙和 WiFi 工作。

Reticulous 主要由荷兰互联网先驱 Rop Gonggrijp 开发。它经过精心设计，并完全通过使用 LLM 进行编程实现。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/1_reticulous-website.png" style={{width:900, height:'auto'}}/>
</div>

### 在 L2 Pro 上安装 Reticulous


1. 使用兼容 _WebSerial_ 协议的网页浏览器。也就是版本高于 v.151 的 FireFox（更早的版本需要安装 [Webserial 插件](https://addons.mozilla.org/en-US/firefox/addon/webserial-for-firefox/)。），或任意基于 Chrome 的浏览器。

2. 在浏览器中访问 [reticulous 网站](https://reticulous.net)，点击 _"flashing"_，再点击链接 [open flashmon](https://reticulous.net/flashmon/)，或者直接访问 [flashmon](https://reticulous.net/flashmon/)，这是 Reticulous 的烧录应用。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/2_reticulous-flashing.png" style={{width:600, height:'auto'}}/>
</div>

3. 确保你的设备通过 USB 连接。你可能需要以不同方式授权浏览器_访问串口_，这取决于浏览器和你的操作系统。

对于基于 Linux 的操作系统用户，你的用户需要被加入 _dialout_ 组，可通过执行以下命令实现：

```
sudo adduser [name-of-your-user] dialout
``` 

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/2_L2-usb-connect.jpg" style={{width:600, height:'auto'}}/>
</div>

4. 设备必须进入 DFU 模式才能进行烧录。按住位于设备右侧中部的 _user_（“U/B”）按钮，并在开机时保持按下，或者在设备已开机的情况下按住该按钮并按下 _reset_ 按钮。屏幕会保持黑屏，此时设备已进入 DFU 模式，可以开始烧录。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/3_reticulous-flashing-detecting.png" style={{width:600, height:'auto'}}/>
</div>

5. Reticulous Flashmon 应该会检测到正确的设备型号，并弹出一个对话框。点击 _"Flash Reticulous to seeed-l2pro"_。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/4_reticulous-flashing-in-progress.png" style={{width:600, height:'auto'}}/>
</div>

6. 等待烧录完成，设备会自动重启。


### 配置 Reticulous

烧录成功后，有多种方式可以配置 Reticulous：

#### 通过屏幕上的引导应用

设备屏幕会提示你配置一些基本参数：连接到 WiFi 网络、为设备设置主密码、输入一些 LoRa 参数。

#### 通过 WebUI

Reticulous 的一个实用特性是其 WebUI。你可以通过网页浏览器控制 Reticulous 的所有功能，比在设备自带屏幕上操作更轻松、空间更大。这也可以用于远程控制（例如对于安装在屋顶或阳台机箱中的 Xiao 等嵌入式设备），以及对于（如 Xiao 这类）甚至没有屏幕或界面的设备。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-webui-LXMF.png" style={{width:900, height:'auto'}}/>
</div>

在启动后的前 10 分钟内，reticulous 会创建一个以 _"reticulous_" 开头的 WiFi 网络。连接到该网络，然后在浏览器中打开 https://reticulous.local（它可能会对证书提出警告，这是正常现象，直接继续连接即可）。

此时你会看到与在设备上相同的引导选项：主密码、WiFi 配置、LoRa 参数等。


#### 接口（Interfaces）

Reticulum 中的一个关键概念是_接口_。由于 Reticulum 与传输方式无关，这意味着它可以通过任何可能的方式进行连接。每个_接口_就是一种连接方式。只要正确配置接口，Reticulum 就会根据目标所在位置，在所有接口之间无缝路由信息。当某个接口中断时，流量会继续通过剩余的接口传输。

接口可以在 "settings" / "reticulum mesh" / "interfaces" 菜单中进行配置，并且可以有多种不同类型：

- _TCP_：一种通过互联网连接到 Reticulum 的接口类型。如果你想连接到更大范围的 Reticulum 网络，这是一个不错的起点。可以在 [RNS recipes 目录](https://directory.rns.recipes/) 中找到可用作 TCP 接口的地址。

- _auto_："auto" 接口会利用可用的连接方式（WiFi、蓝牙 BLE）自动连接到范围内同样启用了 "auto" 接口的其他设备。这是让两个设备在本地网络中互联的最简单方式。

- _LoRa_：配置 LoRa 的共享设置（如基准频率、带宽和扩频因子（SF））可以让多个设备在长距离上互联。这些设置需要在本地达成共识，取决于当地法规、频谱占用情况以及你的具体需求。

- _Bluetooth_：如果启用，该设备可以连接到启用了蓝牙接口的其他设备。与 WiFi 或 LoRa 相比，它的能力相当有限，但在某些情况下仍然有用（例如基于 nRF52 的设备就没有蓝牙连接……）

- _rnode_：一种特殊类型的接口，用于将具备 LoRa 能力的设备连接到另一个不具备 LoRa 能力的设备，从而为后者提供 LoRa 能力（有点类似“LoRa 调制解调器”）。Reticulous 支持此功能，因此你的 L2 Pro 设备可以为笔记本电脑或手机提供 _rnode_ 接口，使其能够通过 USB 线或蓝牙连接，通过 LoRa 接入 Reticulum。你可以在为某个设备（笔记本、手机）提供 rnode 接口的同时，继续使用 Reticulous 的所有其他功能。


### 使用 Reticulous

#### 通过 WebUI

在配置好 WiFi 网络后，你可以返回 WiFi 配置界面（通过进入 _"settings"_ 菜单，然后进入 _"wifi"_ 子菜单），查看 L2 Pro 的 IP 地址，然后在连接到同一网络的电脑浏览器中输入该 IP 地址，以访问 WebUI。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-wifi-settings.png" style={{width:300, height:'auto'}}/>
</div>

输入你的_主密码_后，你就可以在浏览器中的窗口化环境里访问 Reticulous 的全部功能。

#### 在设备上通过触摸屏使用

Reticulous 提供了类似手机的界面，包含一系列专用应用，用于在 Reticulum 网络上使用不同的协议。点击任意应用即可使用，随时按下 _user_ 按钮（位于设备右侧中部）即可返回到 _应用抽屉_。下面是一些应用示例：


<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-main-menu.png" style={{width:300, height:'auto'}}/>
</div>


##### LXMF

LXMF（Lightweight Extensible Message Format，轻量级可扩展消息格式）是通过 Reticulum 发送加密消息所使用的协议。输入某人的 LXMF 地址，或者等待他们的目标地址被广播并显示在 LXMF 应用的 _"on the mesh"_ 区域，然后就可以开始聊天了！

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-LXMF.png" style={{width:300, height:'auto'}}/>
</div>


##### Nomadnet

Reticulum 上的一些节点是 Nomadnet 节点，它们使用 _Micron_ 标记语言提供非常简单的文本页面。使用 Nomadnet 应用程序，可以手动输入此类页面的 _destination_（例如 Aleph Rngit 页面是其作者 Mark Qvist 分发 Reticulum 主源代码的地方，其 destination 为："a8d24177d946de4f1f0a0fe1af9a1338"），或者在 Nomadnet 应用的 _on the mesh_ 部分中等待一些 destination 以 _announces_ 的形式出现。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/6_reticulous-webui-Nomadnet.png" alt="Nomad Browser displaying a chat room in the Reticulous web UI" style={{width:900, height:'auto'}} />
</div>

##### RRC

RRC 是 Reticulum Relay Chat，一种类似于互联网早期使用的古老 IRC 协议的协议，它允许在聊天室中进行群聊。

添加一个已知 _hub_ 的 destination（例如流行的 _rnscommunity_ hub 的 destination 为 "28c7c1a68c735693aa8e6b8193ed44b2"），或者等待它在应用的 _on the mesh_ 部分中被 announce，然后连接到它并选择一个房间加入，或者创建你自己的房间。


##### 唯一的限制就是天空！

探索 Reticulous 套件中的许多其他应用程序，进一步了解 Reticulum 及其无穷的可能性，加入由成千上万用户组成的社区，与朋友一起发起本地线下聚会，见证后互联网网络的诞生！你也许会想为 Reticulum 开发你自己的协议和应用程序……但这已经超出了本教程的范围。


### 连接到其他设备

为了在本地连接到其他设备，或构建一个网状网络（无论它是否连接到 Reticulum 网络的其余部分），你需要确保以下几点：

1. 原始的 Reticulum 软件非常精简且节省资源，可以在任何不到 20 年的计算机上运行。使用任何旧笔记本电脑、旧的 Raspberry Pi 或任何其他 SBC 作为节点。任何手机都可以。任何其他基于微控制器的设备，例如另一台 L2 Pro，或一块 Xiao，也都可以成为完美的 Reticulum 节点……

2. 在另一台设备上安装 Reticulum（如果是基于 ESP32 的设备，则安装 Reticulous）；

3. 确保如果你想使用 LoRa，两台设备具有相同的 LoRa 参数；或者确保两台设备都在互联的网络上使用 Wifi；或者两台设备都在使用 _"auto"_ 接口并启用了 wifi 或蓝牙；或者两台设备都有一个 TCP 接口将它们连接到互联网；

4. 等待两台设备彼此 _announced_ 它们的 _destination_，然后在其中一台设备上使用 LXMF 应用，在另一台设备的 destination 出现在 "on the mesh" 列表中后点击它，以开始聊天；

提示：Reticulum 网络栈在路由时依赖节点对其 _destination_ 进行 _announces_，以及节点向其邻居发送 _path requests_，以尝试找到到特定 destination 的 _path_。为了连接到另一台运行 Reticulum 的设备，请确保两台设备都已向其邻居 _announced_ 自己的 destination。通常在 Reticulous 启动时会自动完成一次，然后每隔 30 分钟再执行一次。

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>