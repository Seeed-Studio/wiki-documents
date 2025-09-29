---
description: 树莓派 4 通道 SPDT 继电器 HAT
title: 树莓派 4 通道 SPDT 继电器 HAT
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Raspberry_Pi_Relay_Board_v1.0
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Raspberry-Relay-Hat/1.png" /></p>

树莓派 4 通道 SPDT 继电器 HAT 采用四个高质量的 SPDT（单刀双掷）继电器，提供 NO/NC（常开/常闭）接口，可以控制大电流负载。这意味着它可以很好地解决控制那些无法直接通过 I2C 总线控制的设备的问题。标准化的扩展板外形设计使其能够与树莓派顺畅连接，同时还配有四个 LED 指示灯，显示每个继电器的开/关状态。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-4-Channel-SPDT-Relay-Hat-p-4850.html)

## 版本

| 产品版本 | 变更 | 发布日期 |
|-|-|-|
| Raspberry Pi Relay Board v1.0 | 初始版本 | 2015-04-08 |
| 4-Channel SPDT Relay HAT for Raspberry Pi | 1.更换元件以提高稳定性<br />2.电子元件布局变更 | 2021-02-08 |

## 特性

--------

- 高质量 SPDT（单刀双掷）继电器
- 兼容树莓派 1、2、3、4
- I2C 接口，带有三个硬件 SW1（1、2、3）开关用于选择固定的 I2C 总线地址
- 继电器螺丝端子，便于连接
- 标准化扩展板外形和设计
- 每个继电器的 LED 工作状态指示灯
- 每个继电器的 COM、NO（常开）和 NC（常闭）继电器引脚

## 规格参数

--------------

<table border="1" cellspacing="0" width="520">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
供电电压
</th>
<td>
4.75
</td>
<td>
5
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
工作电流
</th>
<td>
10
</td>
<td>
/
</td>
<td>
360
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
开关电压
</th>
<td>
/
</td>
<td>
/
</td>
<td>
30/250
</td>
<td>
VDC/VAC
</td>
</tr>
<tr align="center">
<th scope="row">
开关电流
</th>
<td>
/
</td>
<td>
/
</td>
<td>
15
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
频率
</th>
<td>
/
</td>
<td>
1
</td>
<td>
/
</td>
<td>
HZ
</td>
</tr>
<tr align="center">
<th scope="row">
开关功率
</th>
<td>
/
</td>
<td>
/
</td>
<td>
2770VA/240
</td>
<td>
W
</td>
</tr>
<tr align="center">
<th scope="row">
继电器寿命
</th>
<td>
100,000
</td>
<td>
/
</td>
<td>
/
</td>
<td>
次
</td>
</tr>
<tr align="center">
<th scope="row">
尺寸
</th>
<td colspan="3">
91.20 *56.15* 32
</td>
<td>
mm
</td>
</tr>
</table>

## 硬件概述

-----------------

![](https://files.seeedstudio.com/wiki/Raspberry-Relay-Hat/2.png)

## 使用方法

-----
本节由 John M. Wargo 编写，在此我们对 John 的贡献表示感谢。我们对原文进行了少量修改以适应整个 Seeed 文档。请点击[这里](http://johnwargo.com/microcontrollers-single-board-computers/using-the-seeed-studio-raspberry-pi-relay-board.html)访问他网站上的原始文档。

安装扩展板并验证其工作的步骤包括以下几步：

- 步骤1. 将继电器扩展板安装到树莓派上
- 步骤2. 启用 Raspbian I2C 软件接口
- 步骤3. 验证树莓派识别到扩展板
- 步骤4. 运行一些 Python 代码来测试扩展板

### 步骤1. 安装继电器扩展板

安装扩展板很简单，它配有适当的母排针，您需要将其安装到任何带有公排针的树莓派板上。注意：您需要为树莓派 Zero 添加公排针才能使用此扩展板。

我们建议您在安装扩展板之前在树莓派以太网端口顶部贴一些电工胶带。如果您在不使用支柱的情况下安装扩展板（如下面示例图所示），扩展板可能会与以太网端口外壳接触并造成问题。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-01.png)
**图 1**

对于生产项目，我们绝对建议使用支柱来固定两块板。

继电器扩展板是为带有 26 针排针的较旧树莓派配置的，所以当您将其连接到带有 40 针排针的树莓派时，您需要将其完全移到一边，如我们在图中所示。如果您没有正确对齐引脚，稍后会出现问题，因为它根本无法工作。

### 启用 I2C

继电器扩展板通过 I2C 接口 [https://en.wikipedia.org/wiki/I%C2%B2C](https://en.wikipedia.org/wiki/I%C2%B2C) 与树莓派通信。此接口在 Pi 的 Raspbian 操作系统中默认是禁用的，所以您必须在使用扩展板之前将其打开。启动 Pi 并让其引导到图形界面。当它启动并运行时，打开 Pi 菜单，选择首选项，然后选择树莓派配置，如下图所示：

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-02.png)
**图 2**

在打开的窗口中，选择接口选项卡，如下图所示。启用 I2C 旁边的选项，如图所示，然后点击确定按钮继续。当您重启 PC 时，Pi 应该能看到继电器扩展板。在下一节中，我们将验证 Pi 是否看到继电器扩展板。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-03.png)
**图 3**

### 验证树莓派识别到继电器扩展板

启用 I2C 接口后，是时候确保树莓派看到继电器扩展板了。在 Pi 上打开终端窗口并执行以下命令：

```
i2cdetect -y -r 1
```

应用程序将显示识别到的I2C设备的转储信息，如下图所示。在这个例子中，系统中只有一个I2C板，即配置在地址20的继电器板。您将在本文后面看到这个值的重要性。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-04.png)
**图4**

您应该能够使用继电器板上的开关来设置I2C地址，板上有4个DIP开关，让我们看看当您更改它们时会发生什么。

有四个开关，三个标记为A0到A2，一个标记为NC。NC表示无连接。每个开关都有高电平和低电平设置，因此下表将说明如何使用它们来为板设置I2C地址：

|A0| A1 |A2 |地址|
|---|---|---|---|
|高|高|高|20|
|低|高|高|21|
|高|低|高|22|
|高|高|低|24|
|高|低|低|26|
|低|低|低|27|

### 运行测试应用程序

请使用来自[github仓库](https://github.com/johnwargo/Seed-Studio-Relay-Board)的测试代码。从那里获取代码，您将能够轻松完成以下步骤。

要运行测试应用程序，请打开终端窗口，导航到您提取示例应用程序的位置，并使用以下命令运行应用程序：

```
python ./seeed_relay_test.py
```

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-05.png)
**图4**

当提示输入时，您将键入命令来打开和关闭继电器：

- 键入1on、2on、3on或4on并按回车键将使指定的继电器打开。
- 键入1off、2off、3off或4off并按回车键将使指定的继电器关闭
- 键入allon或alloff将打开或关闭所有继电器。

### 使用Python模块

要在您自己的Python应用程序中使用该模块，请将模块（relay_lib_seeed.py）复制到您的项目文件夹中，然后通过在应用程序开头添加以下行来在Python应用程序中导入该模块：

>from relay_lib_seeed import *

这将向您的应用程序公开一系列函数：

- relay_on(int_value) - 打开单个继电器。向函数传递一个1到4（包含）之间的整数值来指定您希望打开的继电器。例如：relay_on(1)将打开第一个继电器（内部实际上是继电器0）。
- relay_off(int_value) - 打开单个继电器。向函数传递一个1到4（包含）之间的整数值来指定您希望打开的继电器。例如：relay_on(4)将关闭第一个继电器（内部实际上是继电器3）。
- relay_all_on() - 同时打开所有继电器。
- relay_all_off() - 同时关闭所有继电器。

该模块公开了一个配置值，在使用该板时您需要记住：

```
# 7 bit address (will be left shifted to add the read write bit)
DEVICE_ADDRESS = 0x20
```

还记得那个值吗？20？板默认使用这个地址。如果您更改板上的开关，您需要相应地更新此变量。

要查看模块的运行情况，请在Raspberry Pi上打开终端窗口，导航到您提取此仓库文件的文件夹，并执行以下命令：

```
python ./relay_lib_seeed_test.py
```

应用程序将：

- 将所有继电器打开一秒钟
- 关闭所有继电器
- 循环遍历每个继电器（1到4），将每个继电器打开一秒钟

模块将在执行每个步骤时向控制台写入指示器，如下图所示：

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-06.png)
**图6**

继电器板上的LED（每个继电器一个）将在继电器打开时点亮。在我的板上，它们不是按顺序排列的，所以不要期望它们按顺序点亮。

完成所有这些工作的代码如下所示：

```
# turn all of the relays on
relay_all_on()
# wait a second
time.sleep(1)
# turn all of the relays off
relay_all_off()
# wait a second
time.sleep(1)
# now cycle each relay every second in an infinite loop
while True:
for i in range(1, 5):
   relay_on(i)
   time.sleep(1)
   relay_off(i)
```

就是这样，这就是全部内容。祝您使用愉快。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/res/Raspberry_Pi_Relay_Board_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [原理图](https://files.seeedstudio.com/wiki/Raspberry-Relay-Hat/Raspberry-Pi-Relay-Hat_v1.0_SCH.zip)
- [HLS8L 数据手册](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/res/HLS8L.pdf)
- [PCAL9535A 数据手册](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/res/PCAL9535A.pdf)
- [Python 测试代码](https://github.com/johnwargo/Seed-Studio-Relay-Board)
- [C# 测试代码](https://github.com/SeeedDocument/Raspberry_Pi_Relay_Board_v1.0/tree/master/res/RPiRelayBoard)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0 -->

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