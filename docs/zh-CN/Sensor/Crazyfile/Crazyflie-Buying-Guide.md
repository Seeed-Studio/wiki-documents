---
description: Crazyflie Buying Guide
title: Crazyflie Buying Guide
keywords:
- Crazyflie
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Crazyflie-Buying-Guide
last_update:
  date: 4/6/2023
  author: Matthew
---

# 买家指南  

## 用 Arduino 或 Raspberry Pi 探测无人机的动作  

Flow breakout 模块是一款可连接到机器人或其他开发板、用于捕获和跟踪动作的产品。该模块兼容 Arduino 或其他嵌入式系统。  

**产品链接：** [Flow Breakout 模块](https://www.seeedstudio.com/Flow-Breakout-Board-p-2949.html)  


## 用移动设备控制 Crazyflie 2.X  

您可以使用具有低功耗蓝牙功能的移动设备控制 Crazyflie 2.X 。当前支持 [Android](https://play.google.com/store/apps/details?id=se.bitcraze.crazyfliecontrol2) 和 [IOS](https://itunes.apple.com/us/app/crazyflie-2.0/id946151480?mt=8) 设备。  

**产品链接：** [Carzyflie 2.X](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.14.f7c41cccwmZtLO&id=531865932925)  


## 通过 PC 用手柄控制 Crazyflie 2.X  

[Crazyradio PA](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.16.f7c41cccwmZtLO&id=531489898863) 使得您可以将 Crazyflie 2.X 连接到 PC 上。再插上手柄，即可用我们的客户端控制 Crazyflie 2.X。  

**产品链接：** [无人机入门套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.26.f7c41cccwmZtLO&id=604069230143)  

:::note
套件中并不包含手柄。
:::


## 将 Crazyflie 2.X 用于开发  

[Crazyradio PA](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.16.f7c41cccwmZtLO&id=531489898863) 使得 Crazyflie 2.X 能够与 PC 无线连接，您可以根据您的喜好下载新的固件。无人机的日志记录和参数框架提供了 API，即使在飞行时您也可以在 Crazyflie 2.X live 中获取和设置数据。  

与 PC 客户端一样，所有软件和固件都是开源的。您可以根据您的喜好修改源代码。  

连接到 PC 时，您可能需要一个 [手柄](https://wiki.bitcraze.io/projects:crazyflie:pc_utils:inputdevices) 操控无人机。  

**产品链接：** [无人机入门套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.26.f7c41cccwmZtLO&id=604069230143)

:::note
套件中并不包含手柄。
:::


## 用 Crazyflie 2.X 进行深度开发  

Crazyflie 2.X 和 Crazyradion PA 可以在很大程度上帮助初学者们学习相关知识，但对于深度开发的发烧友而言，我们建议使用 JTAG/SWD 接口。您可以使用 [调试适配器套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.36.f7c41cccwmZtLO&id=580986288339) 将其他 JTAG/SWD 调试器连接到 Crazyflie 2.X 上以供断点设置、单步运行等等。

**产品链接：** [极客飞行器套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.20.f7c41cccwmZtLO&id=604283599564)  

:::note
套件中并不包含 JTAG/SWD 调试器
:::



## 在 Crazyflie 2.X 中增加一个传感器  

您可以通过 Crazyflie 2.X 上的扩展接口连接硬件。制作原型时，您可以使用无人机扩展版将 Crazyflie 2.X 连接到面包板中以便调试；当您对硬件设计满意后，您就可以将其转移到原型扩展板中。您甚至可以修改扩展版的 [PCB](https://github.com/bitcraze/crazyflie2-exp-template-electronics) ，增加一些排母。   

**产品链接：** [无人机扩展板](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.58.f7c41cccwmZtLO&id=531757807177) 、[原型扩展板](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.60.f7c41cccwmZtLO&id=531757551763) 、[排母](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.50.1d761cccYKtndf&id=531838589756)  


## 让 Crazyflie 在黑暗中绘画  

Crazyflie 2.X 支持增加一块 LED 环形面板，让无人机在黑暗中飞行成为了一种享受。您可以编程控制传感器让 RGB LED 发出任何颜色的光，显示各种 RGB 图案组合。  

启动您的 Crazyflie ，用快门捕捉黑暗中最美丽的瞬间吧！  

**产品链接：** [LED 环形面板](https://www.seeedstudio.com/Crazyflie-2-0-LED-ring-Expansion-Board-p-2105.html)  


## 让 Crazyflie 通过声音或灯光给予反馈  

LED 环形灯可用于发出各色灯光，蜂鸣器可用于发出声音。无人机可以很轻松地实现自动显示系统就绪、错误状态等类似信息。  

**产品链接：** [艺术家套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.30.20d31cccKXz3OA&id=603635316534) 、[蜂鸣器模块](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.46.20d31cccKXz3OA&id=534637727490)  


## 更大的 Crazyflie 2.X  

BigQuad 控制板增大模块用于使用 Crazyflie 2.X 控制一个更大的 4 轴无人机框架。将 Crazyflie 上原有的电机取下来，装上增大模块，固定到新框架中，再将新框架的无刷电机控制器（ESC）连接到增大模块上。您将得到一个与原 Crazyflie 一样、但尺寸更大的系统。  

**产品链接：** [无人机入门套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.26.f7c41cccwmZtLO&id=604069230143) 、[控制板增大模块](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.48.20d31cccKXz3OA&id=534623481981)  

:::note
套件中并不包含无人机框架、无刷电机和 ESC。
:::


## 对 Crazyflie 进行无线充电  

Qi 无线充电模块用于对无人机进行无线充电。当 Crazyflie 2.X 放到无线充电器顶部时自动充电，无需充电线。  

**产品链接：** [Qi 无线充电模块](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.56.20d31cccKXz3OA&id=531757859044)  

:::note
产品中并不包含无线充电器。
:::



## Crazyflie 2.X 飞行时记录数据  

如果飞行时需要记录大量数据，某些情况下 Crazyradio PA 带宽可能不足。SD 卡扩展模块中可放入外部 SD 卡用于记录和存储所有数据。  

**产品链接：** [SD 卡扩展模块](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.44.20d31cccKXz3OA&id=548223035199)  


:::note
产品中并不包含 SD 卡
:::


## 用 SD 卡配置 Crazyflie  

SD 卡扩展模块可用于存储 Crazyflie 配置数据。其中一个例子就是 Crazyflie 不通过无线电连接的自主实现。您可以用 PC 将配置文件写入 SD 卡，在 Crazyflie 启动前将 SD 卡插入其中。这也是一种分别配置硬固件、避免将不同固件刷入 Crazyflie 个体中的方法。  

**产品链接：** [SD 卡扩展模块](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.44.20d31cccKXz3OA&id=548223035199)  

:::note
产品中并不包含 SD 卡
:::



## Crazyflie 协助飞行  

“驾驶” 一架 4 轴无人机需要一定的技巧和练习，Z-ranger 模块或 Flow 模块让您获得更多动作信息以协助您操控无人机。当前协助模式仅支持 PC 手柄控制的飞行，而非移动设备。  

### Z-ranger 模块  

Z-ranger 模块用于测量无人机与地面间的距离，帮助无人机保持一定的高度，操作者可以专心控制其位置。  

**产品链接：** [无人机入门套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.26.f7c41cccwmZtLO&id=604069230143) 、[Z-ranger 模块](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.34.20d31cccKXz3OA&id=591770179770)  

:::note
套件中并不包含手柄。
:::


### Flow 模块  

该模块不仅仅能够测量无人机与地面的距离，还提供了一种特殊的飞行模式。此模式下，操作者不直接控制无人机倾斜的角度，而是告诉系统飞行的方向；如果不进行控制，无人机则悬停在一个位置上。  

**产品链接：** [无人机入门套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.26.f7c41cccwmZtLO&id=604069230143) 、[Flow 模块](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.14.72c61ccc7UjlLV&id=557253255642)  

:::note
套件中并不包含手柄。
:::


## Crazyflie 实现周围的环境的探测  

Multi-ranger 模块能够测量前后左右上 5 个方向上物体的距离，可用于避障、映射房间布局或控制无人机在房间的两面墙之间来回飞行的小游戏。与 Flow 模块搭配使用可测量对地距离，实现自主飞行。  

**产品链接：** [无人机入门套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.26.f7c41cccwmZtLO&id=604069230143) 、[Multi-ranger 模块](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.62.69221cccXv0Hfq&id=591602510455) 、[Flow 模块](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.14.72c61ccc7UjlLV&id=557253255642) 或 [STEM 测距套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.32.69221cccXv0Hfq&id=603635096111)  


## 将 Crazyflie 2.X 用于教育  

Crazyflie 让小朋友们轻易地接触到与大学接轨的机器人和电脑知识，非常适合教育。  

### STEM 创客教育套件  

通过 STEM 创客教育套件和 Flow 模块，Crazyflie 2.X 可以轻松实现自主飞行，或使用简单 Python 脚本实现 PC 远程控制，非常适合机器人初学者。对于高等教育，学生可以训练对现实世界的机器人重新实现控制器或其他类似的算法。他们甚至可以把设备带回家，进行进一步的研究和学习。  

**产品链接：** [STEM 创客教育套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.22.69221cccXv0Hfq&id=604094410284)  

### STEM 测距套件  

STEM 测距套件中除了 STEM 创客教育套件中的所有器件之外，还包含了 Multi-ranger 模块。Multi-ranger 模块帮助与 Crazyflie 2.X 进行交互，也可以用于映射房间的布局。  

**产品链接：** [STEM 测距套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.32.69221cccXv0Hfq&id=603635096111)  


## 实现自主飞行，通过 PC 控制 Crazyflie 2.X  

Crazyflie 需要从外部源中获取位置信息才能实现完全自主飞行，内部的传感器只适用于短暂的飞行。Crazyflie 如果获得了更多的位置信息，您就可以通过内部程序或外部 PC 使用命令告诉它该去哪。  

获取位置信息有很多方法，它们都有各自的特点。  

### Flow 模块  

通过 Flow 模块，Crazyflie 可以获取与地面之间的距离和相对运动信息，帮助其悬停或沿着一条轨迹移动。这个方法的优点是不需要任何外部系统，价格非常实惠。  

因为得到的位置信息是相对的，且任何运动都基于初始位置，Crazyflie 并不知道实际所处的位置。此外，位置会随着时间的推移发生变化，在大多数情况下，自主飞行最多可持续一分钟。  

**产品链接：**  [无人机入门套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.26.f7c41cccwmZtLO&id=604069230143) 、[Flow 模块](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.14.72c61ccc7UjlLV&id=557253255642)  

### Loco 定位系统  

通过 Loco 定位系统 Crazyflie 可以精确计算空间里的绝对位置。有了绝对位置信息，无人机能够知道其实际所处位置，而且因为位置计算是在无人机上完成的，真正实现了无需连接外部 PC 的自主飞行。Loco 定位系统位置精度大约为 ± 10cm 。  

**产品链接：** [室内探险家套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.24.69221cccXv0Hfq&id=604079642234)  

### 基于摄像头的定位系统  

使用外部摄像头（ 通常称为 MoCap ）的定位系统（ 如 Qualisys 或 Vicon 提供的方案 ）可用于高精度位置计算。在这些系统中，位置计算由外部计算机完成，必须通过无线电将位置信息或俯仰、横滚、偏航和推力命令实时发送给 Crazyflie 。根据不同的摄像头系统配置，定位系统的精度可低至毫米级别。  

**产品链接：** 联系我们以获取更多信息和方案支持。  


## 实现多架无人机集群飞行  

使用 Crazyflie 实现无人机集群飞行类似于自主飞行，但是需要同时精确定位多架无人机并确保它们的移动路线不会冲突。系统支持集群飞行，但要求开发者深刻理解相关原理并针对不同方案进行编程。  

注意，集群飞行的关键是定位技术及其特性。  

### Flow 模块  

经过我们的测试，Flow 模块支持小规模的集群飞行（ 5 架次 ）。因为每架 Crazyflie 位置计算均相对于初始位置，所以该方案要求定位准确且起飞平稳。出现问题后恢复非常困难，可靠度较低，但是比较有趣！  

**产品链接：** [无人机入门套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.26.f7c41cccwmZtLO&id=604069230143) 、[Flow 模块](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.14.72c61ccc7UjlLV&id=557253255642)  

### Loco 定位系统  

Loco 定位系统默认模式（ 双向测距 ）下仅支持一架 Crazyflie 的定位，要实现多架次定位，需要将系统切换到 TDoA 模式。TDoA 模式就像室内 GPS 系统一样，其中 Crazyflies 仅侦听来自锚点的定位信息，这使得系统可以同时定位大量的无人机。鉴于 TDoA 的性质，位置计算在锚点（凸包）内部的空间中效果最好，我们建议使用 8 个锚点用于 TDoA 模式。  

**产品链接：** [室内探险家套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.24.69221cccXv0Hfq&id=604079642234) 、2 x [Loco 定位节点](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.38.76c51cccnrMgIM&id=578210698291) 、[Carzyflie](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.14.f7c41cccwmZtLO&id=531865932925) 、[Loco 定位模块](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.40.76c51cccnrMgIM&id=578210270177) 或 [集群套件](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-17798475675.28.76c51cccnrMgIM&id=603636672166)  
<!--个人认为把原文中的 positioning node 翻译为定位节点、positioning decks 翻译为定位模块更为恰当。-->

### 基于摄像头的定位系统  

基于摄像头的定位系统（ 如 Qualisys 或 Vicon 提供的方案 ）可以同时跟踪多个目标。为区别不同的 Crazyflie 个体，系统会对不同个体使用不同物理配置的标记，通过对标记运动情况的持续跟踪得知对应的无人机。注意，由于位置计算由外部计算机完成，因此必须通过无线电将位置信息或俯仰、横滚、偏航和推力命令实时发送给 Crazyflie 。社区中有一些用于这些系统的框架，例如 [Crazy Swarm](https://github.com/USC-ACTLab/crazyswarm) ，可支持多达 50 架 Crazyflie 。  

**产品链接：** 联系我们以获取更多信息和方案支持。  


## 用于  

- [研究](https://www.bitcraze.io/research/)
- [教育](https://www.bitcraze.io/education/)
- [开发](https://www.bitcraze.io/development/)
- [DIY](https://www.bitcraze.io/diy/)  


## 更多信息  

- [常见问题](https://www.bitcraze.io/frequently-asked-questions-Crazyflie-2.0/)
- [Crazyflie 2.X 入门](https://www.bitcraze.io/getting-started-with-the-crazyflie-2-0/)
- [扩展板入门](https://www.bitcraze.io/getting-started-with-expansion-decks/)
- [开发入门](https://www.bitcraze.io/getting-started-with-development/)  

