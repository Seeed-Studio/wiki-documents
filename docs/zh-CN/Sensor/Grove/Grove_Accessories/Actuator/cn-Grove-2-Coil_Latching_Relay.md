---
title: Grove - 双线圈自锁继电器
description: Grove - 双线圈自锁继电器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-2-Coil_Latching_Relay/
slug: /cn/Grove-2-Coil_Latching_Relay
last_update:
  date: 03/18/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/img/2Coil_Latching_Relay_01.jpg)

这个模块基于双线圈锁存继电器。与普通继电器相比，这种锁存继电器不需要连续供电来保持状态，只需要一个上升/下降脉冲即可改变工作状态。即使在不需要改变工作状态的情况下也可以断电，这使得该模块特别适用于低功耗项目。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html)

## 特性

- Grove 接口
- 低功耗
- 双开关

:::提示
    关于Grove模块的更多详情，请查阅 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/):::

规格
-------------

<table border="1" cellspacing="0" width="80%">
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
工作电压
</th>
<td>
4.7
</td>
<td>
5.0
</td>
<td>
5.3
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
设置/复位电压(最大)
</th>
<td colspan="3">
4.0
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
线圈电阻
</th>
<td>
151
</td>
<td>
167
</td>
<td>
183
</td>
<td>
Ω
</td>
</tr>
<tr align="center">
<th scope="row">
切换电压（最大）
</th>
<td colspan="3">
35VAC/35VDC
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
切换电流（最大）
</th>
<td colspan="3">
3
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
设置时间（锁存）
</th>
<td colspan="3">
4.5（最大）
</td>
<td>
ms
</td>
</tr>
<tr align="center">
<th scope="row">
复位时间（锁存）
</th>
<td colspan="3">
3.5（最大）
</td>
<td>
ms
</td>
</tr>
</table>


支持的平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::注意
    以上提到的支持平台仅表示该模块的软件或理论兼容性。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户需要编写自己的软件库。
:::

## 使用前准备

### 相关阅读

在使用气体传感器之前，我们建议您阅读以下知识，这将有助于您更深入地了解Arduino和我们的产品，同时使您更容易地使用开源硬件。

<!-- - [Arduino入门指南](/Getting_Started_with_Seeeduino)

- [Grove 系统是什么](/Grove_System)
- [为什么我需要一个基础盾板?](/Base_Shield_V2) -->

- Arduino入门指南
- Grove 系统是什么
- 为什么我需要一个基础盾板?

阅读这些内容后，您将了解如何使用基础盾板与Grove产品配合Arduino进行良好的工作。让我们开始吧！

### 所需准备

本教程将包含一些必要的产品：

<!-- - [Arduino UNO R3](https://www.seeedstudio.com/depot/Arduino-Uno-Rev3-p-694.html) 或[Seeeduino v4](https://www.seeedstudio.com/depot/Seeeduino-V4-p-669.html)

- [Base Shield](https://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html)
- Grove - 2-Coil Latching Relay -->

- Arduino UNO R3 或 Seeeduino v4（主控制板）
- Base Shield（基础盾板）
- Grove - 2-Coil Latching Relay（Grove双线圈锁存继电器）

## 入门指南

### 与Arduino配合使用

锁存继电器仅在状态改变时消耗电能。在信号引脚上的上升/下降电压脉冲会改变其工作状态。这在能源效率至关重要的场合以及需要继电器记住其状态的场合中非常有用。

现在，让我们开始使用它。

- 将模块连接到Grove - Base Shield的D3端口。
- 继电器默认处于“设置”状态（Comm和NO连接），当SIG引脚上有上升边沿时，它会切换到“复位”状态（Comm和NC连接）。参考代码如下所示：

```c
#define LatchingRelay 3
void setup()
{
    pinMode(LatchingRelay,OUTPUT);

    digitalWrite(LatchingRelay,LOW);
    delay(1000);
    digitalWrite(LatchingRelay,HIGH);
    delay(1000);
}
void loop()
{

}
```

- 当SIG引脚上有下降边沿时，继电器会保持在“复位”状态（Comm和NC连接）。当SIG引脚上有上升边沿时，继电器会切换到“设置”状态（Comm和NO连接）。参考代码如下所示：

```c
#define LatchingRelay 3
void setup()
{
    pinMode(LatchingRelay,OUTPUT);

    digitalWrite(3,HIGH);
    delay(1000);
    digitalWrite(3,LOW);
    delay(1000);
}
void loop()
{

}
```

- 当工作状态不改变时，此模块消耗的功率很小。在设定继电器状态后，您无需再为锁存继电器供电，这使得其功耗极低。

<div class="admonition note">
<p class="admonition-title">注意</p>
继电器在从库存中取出时处于“复位”状态。
</div>


![](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/img/Latching_Relay_Diagram.jpg)

<div class="admonition note">
<p class="admonition-title">注意</p>
<p> 1. 两个继电器是同时控制的。</p>
<p> 2. 当切换到“设置”（“复位”）状态时，NO（NC）指示灯会闪烁一次。</p>
</div>

### 与Raspberry Pi配合使用

1.您应该已经拥有一个Raspberry Pi和一个GrovePi或GrovePi+。

2.您应该已经完成了开发环境的配置，否则请按照 [这里](/GrovePi_Plus)的指引进行。

3.连接

- 使用Grove线缆将传感器连接到GrovePi的D4插槽。

4.导航到演示目录：

```
cd yourpath/GrovePi/Software/Python/
```

- 查看代码

```
nano grove_2_coil_latching_relay.py   # "Ctrl+x" to exit #
```

```
import time
import grovepi

# Connect the Grove 2-Coil Latching Relay to digital port D4
# SIG,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # switch on for 5 seconds
        grovepi.digitalWrite(relay,1)
        print "on"
        time.sleep(5)

        # switch off for 5 seconds
        grovepi.digitalWrite(relay,0)
        print "off"
        time.sleep(5)

    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

5.运行演示

```
sudo python grove_2_coil_latching_relay.py
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- [Grove - 双线圈自锁继电器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip)
- [自锁继电器数据手册](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Latching_Relay_Datesheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_2-Coil_Latching_Relay -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足您不同的偏好和需求。
