---
description: 从 Jetson SoC 的 USB 资源、载板的 USB Hub 原理图，到 Linux 中的 lsusb -t 拓扑，解释为什么 USB 3.0 设备有时只以 USB 2.0（480M）运行，以及如何沿着 SuperSpeed 链路逐层排查问题。
title: Jetson USB
keywords:
  - jetson
  - usb
  - usb3
  - usb2
  - 480M
  - super speed
  - lsusb
  - carrier board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_usb
last_update:
  date: 11/02/2026
  author: youjiang
---

在这篇文章中，我们来聊一个在 Jetson 上非常常见、也非常容易搞错的问题：**USB。**

比如，你插入了一个 USB 3.0 相机，但运行 `lsusb -t` 后发现速度只有 `480M`。也就是说，这个原生支持 USB 3.0 的设备，在 Jetson 上实际上只以 USB 2.0 在跑。此时很多人的第一反应是：是不是 USB 3.0 驱动没工作？但事情往往没这么简单。因为从 Jetson SoC 到你手里的 USB 设备，中间其实隔了不少东西。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/usb_data_path.png"/></div>

这些层级中任何一层出问题，都可能导致一个 USB 3.x 设备最终只能以 USB 2.0 工作。

所以在这篇文章中，我不只是想解释“为什么会变成 480M”，而是想借这个问题串起来：**USB 在 Jetson 上是如何工作的、载板是如何把 USB 引出来的、以及 Linux 又是如何看到这些设备的。**

在接下来的内容中，我们将以 **reComputer Classic J4012** 为例，一步步拆解 Jetson USB 的底层逻辑。我相信你会从中学到很多！先提前打消两个顾虑：

1. 如果你的 Jetson 设备是其他型号，也不会影响你阅读下面的内容。关键在于出问题时的分析思路，而不是具体硬件。
2. 如果你对 `lsusb -t`、USB Hub 或 UPHY 等概念还不熟悉，也不用担心——我们会结合真实日志，一步步拆开来看。

请慢慢阅读。

---

## Jetson Orin NX 实际上有多少 USB？

我们先从 NVIDIA Jetson 模组的规格说起。每个模组都有固定的资源，我们通常称之为原生接口。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/jetson_modules.png"/></div>

图片来源: https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/

对于 Jetson Orin Nano 和 Jetson Orin NX，NVIDIA 提供了 3 路 USB 3.2 Gen2 和 3 路 USB 2.0。你可以在 NVIDIA 官网找到详细说明。看到这里，很容易产生一个误解：

```text
[3 × USB3] + [3 × USB2] = 6 USB Connectors?
```

其实并不是。这里描述的是：

> **Jetson 模组提供的底层 USB 接口 / PHY 资源。**

它们最终会变成几个 Type-A 口、几个 Type-C 口，还是接到 Hub、M.2 或板载设备上，是由载板来决定的。

换句话说，Jetson 模组提供 USB 资源；载板决定这些资源如何被使用；最后才变成我们看到的那些接口。

## reComputer Classic J401 是如何使用这些 USB 口的？

在 J401 的 Datasheet 中，这块板最终为用户提供了 4 路 USB 3.2 Type-A 和 1 路 USB 2.0 Type-C。Type-C 口工作在 Device 模式，主要用于烧录系统；4 个 Type-A 口工作在 Host 模式，用于连接外设。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/j401_ports.png"/></div>

但这里有一个很有意思的问题：Orin NX 只有 3 个原生 USB3 口，为什么 J401 上会有 4 个 USB3 Type-A 口？

答案已经写在这块板开源的[原理图](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)里了：**一个 USB Hub。**

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/j401_blockdiagram.png"/></div>

载板把一条 USB3.2 通道扩展成了 4 个 USB 3.2 Type-A 口。继续往下看原理图，你会发现这个 Hub 是一颗 `VL822-Q7`。

需要注意的是，虽然这 4 个接口都支持 10 Gbps，但它们最终共享的是 **从 Hub 到 Jetson 的上行链路**。也就是说，这 4 个 USB 口总共共享 10 Gbps 的带宽。

---

## USB3 接口里依然包含 USB2

如果只看外观，USB 2.0 Type-A 和 USB 3.x Type-A 几乎一模一样，而且 USB3 设备也可以直接插到 USB2 口上。

所以很容易形成一种直觉：USB3 只是把 USB2 的速度从 480 Mbps 升级到了 5 Gbps 或 10 Gbps。

但事实并不是这样。为了兼容 USB2，USB3 并不是简单地“升级”原来的 USB2 信号，而是在保留 USB2 走线的基础上，额外增加了一组专门用于 SuperSpeed 的高速信号。

一个 USB2 Type-A 接口通常有 4 根线：VBUS、D+、D- 和 GND。一个 USB3 Type-A 接口在这些引脚的基础上，又增加了额外的 SuperSpeed 信号：SSTX+ / SSTX- 和 SSRX+ / SSRX-。

所以虽然 USB2 和 USB3 Type-A 在**物理上兼容**，但内部实际使用的信号并不完全相同。

你可以简单理解为：

```text
              USB 3.x Type-A Connector
                         │
          ┌──────────────┴──────────────┐
          ↓                             ↓
       USB 2.0                       USB 3.x
      Original pins               New high-speed pins
          │                             │
       D+ / D-                     SSTX / SSRX
          │                             │
      USB2 PHY                        UPHY
          │                             │
        480M                         5G / 10G
```

换句话说，一个 USB3 Type-A 接口实际上同时包含两条数据通路。这种设计最大的好处就是**向下兼容**。

这也解释了一个非常重要的现象：**即使一个 USB3 设备的 SuperSpeed 链路出了问题，它仍然有可能通过 USB2 的 D+ / D- 引脚被系统识别。在很多情况下，“能用”并不代表“工作正常”。**

我们再回到载板原理图。VL822-Q7 既有 HSD0+/HSD0-，也有 SSTX0+/SSTX0- 和 SSRX0+/SSRX0-。这里 HSD 对应的是 USB2 High-Speed 通道，而 SSTX / SSRX 对应的是 USB SuperSpeed 通道。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/vl822_schematic.png"/></div>

所以 J401 的真实 USB 架构，其实更接近于：

```text
                     Jetson Orin NX

                USB2                USB3
                  │                   │
                D+/D-             TX / RX
                  │                   │
                  └────────┬──────────┘
                           ↓
                        VL822-Q7
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
           USB2 Path                USB3 Path
              │                         │
           HSD1~4                 SSTX/SSRX 1~4
              │                         │
              └────────────┬────────────┘
                           ↓
                      4 × USB-A
```

也就是说：**J401 上的每一个 USB3 Type-A 接口背后，同时都有一条 USB2 通路和一条 SuperSpeed 通路。**这一点对后面的故障分析非常重要。

---

## Linux 是如何看到这些 USB 设备的？

分析完电路，我们再回到 Linux，看看系统最终是如何看到这些 USB 设备的。

先补充一个命令：在 Linux 上排查 USB 时，一个非常常用的命令是 `lsusb -t`。它可以直接显示：

```text
USB Topology
Hub
Driver
Interface
Link Speed
```

最常见的几种速度可以理解为：

| lsusb -t Display | 对应的 USB 链路 |
|---|---|
| 1.5M | 低速（Low-Speed） |
| 12M | 全速（Full-Speed） |
| 480M | USB 2.0 高速（High-Speed） |
| 5000M | USB 3.x SuperSpeed 5 Gbps |
| 10000M | USB 3.x SuperSpeed 10 Gbps |

注意：

> **这里显示的是 USB 链路速率，而不是设备的实际数据吞吐。**

比如，`5000M` 表示这条 USB 链路工作在 5 Gbps 的 SuperSpeed 模式；并不代表这颗相机实际能持续跑到 5000 Mbps 的有效数据。

在我的 reComputer Classic J4012 上，我连接了一颗支持 USB 3.0 的 Orbbec 相机，并运行了 `lsusb -t` 命令，得到如下图所示的信息。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/lsusb_camera.png"/></div>

这里你可以很清楚地看到两条总线，分别对应 USB2 Root Hub 和 SuperSpeed Root Hub 的两套逻辑拓扑。

我们一起来解析一下终端输出。

```text
/:  Bus 02.Port 1: Dev 1, Class=root_hub, Driver=tegra-xusb/4p, 10000M
    |__ Port 1: Dev 2, If 0, Class=Hub, Driver=hub/4p, 10000M
        |__ Port 3: Dev 3, If 0, Class=Video, Driver=uvcvideo, 5000M
        |__ Port 3: Dev 3, If 1, Class=Video, Driver=uvcvideo, 5000M
        ...
```

先不用管中间那些 `If 0 / If 1 / If 2` 的行，我们只看最主要的三层：

```text
Jetson XUSB Root Hub
       10000M
          ↓
   J401 VL822 Hub
       10000M
          ↓
    Orbbec Camera
        5000M
```

这其实就和我们前面分析的原理图一一对应。

```text
Driver=tegra-xusb/4p, 10000M
```

这里的 `tegra-xusb` 就是 Jetson 的 USB Host 控制器驱动。而 `10000M` 表示这一侧的 Root Hub 支持 10 Gbps 的 SuperSpeed。

```text
Class=Hub, Driver=hub/4p, 10000M
```

这个 Hub 就对应着我们在 J401 原理图中看到的 `VL822-Q7`。它同样显示为 `10000M`，这意味着 **Jetson 与 VL822 Hub 之间的 SuperSpeed 上行链路已经正常建立。**

```text
Class=Video, Driver=uvcvideo, 5000M
```

你可以看到相机当前的链路速率是 `5000M`，这意味着这台 Orbbec 相机已经成功建立了一条 5 Gbps 的 SuperSpeed 链路。

所以完整的链路可以画成这样：

```text
Jetson XUSB
   │
   │ 10000M
   ↓
J401 VL822 Hub
   │
   │ 5000M
   ↓
Orbbec Camera
```

这里可能有人会问：Hub 明明是 `10000M`，为什么相机只有 `5000M`？

这是完全正常的。因为 `10000M` 描述的是 **Jetson ↔ Hub** 这一段的能力，而 `5000M` 描述的是 **Hub ↔ Camera** 这一段协商出来的速率。不同的链路段完全可以跑在不同的速率上。

---

## 为什么同一台相机会出现这么多行？

我借这个机会解释一个很容易被误解的问题。我只接了一台相机，为什么会有多行信息？

在日志中，`Dev 3` 出现了很多次。这并不意味着连接了 8 个 USB 设备，而是说：**同一个 USB 复合设备暴露出了多个 USB 接口（Interface）。** 我的深度相机有很多功能，每一个可以独立使用的功能都有一个 Interface。Linux 会给这些 Interface 分别绑定对应的 Driver。所以 `Dev` 可以理解为一个 USB 设备，而 `If` 则表示这个设备内部的不同接口。

---

## 现在我们来看 480M 总线

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/lsusb_480m.png"/></div>

注意下面还有内容：

```bash
Port 3: Dev 3, If 0, Class=Wireless, Driver=btusb, 12M
```

这是一个蓝牙设备。但我并没有在 USB Type-A 口上接任何蓝牙设备，那 Linux 是怎么发现这个设备的呢？在最开始看载板原理图的时候，我们已经知道 USB2_D 是连到 M.2 Key E 插槽上的。这里出现的 `btusb` 实际上是挂在 M.2 接口上的。

## 排障思路：当 USB3 设备变成 USB2

现在我们终于可以回答开头的问题了。从排障的角度，更准确地理解“一个 USB3 设备降级成 USB2”是：**USB2 链路是正常的，但 SuperSpeed 链路没有建立起来。** 所以如果一个原生支持 USB3 的设备在 `lsusb -t` 中只显示 `480M`，你就应该沿着 USB 通信链路往回追溯。以我当前的测试场景为例，如果你看到：

```text
Hub      10000M
Camera    480M
```

这说明 `Jetson → VL822` 的 SuperSpeed 链路是正常的。那问题更有可能出在：

```text
VL822 Downstream Port --> USB Connector --> Cable --> Camera
```

这时，排查的优先级应该是：

- 检查是否存在外置 HUB，以及外置 HUB 是否支持 USB3.x
- 换另一个 USB Type-A 口，以排除单个 USB Type-A 口损坏的可能
- 检查当前使用的数据线是否支持 USB3.x
- 换另一台已知正常的 USB3 设备，以排除 USB 设备本身的问题
- ...

反过来，如果连 `Hub 10000M` 都不见了，只能看到 USB2 的 `Hub 480M`，那问题就更靠近上游：

```text
Jetson --> UPHY --> Carrier Board
```

在这种情况下，你需要检查：

- 刷写的系统是否为设备厂商提供的版本
- 如果是自己编译的固件，检查 UPHY Configuration、Device Tree 等配置文件是否正确
- 载板设计是否合理、USB HUB 走线是否正常
- ...

---

## 总结

最后，我快速总结一下本文的核心内容。当一个 USB3 设备只显示 480M 时，通常并不是“整个 USB 都坏了”，而是 USB2 链路是正常的，而 SuperSpeed 链路没有建立起来。排障时，先用 `lsusb -t` 判断 SuperSpeed 链路成功建立到了哪一层，然后沿着数据线、Hub、载板、UPHY 和 BSP 一层一层缩小范围。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
