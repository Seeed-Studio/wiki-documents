---
title: Grove - 双线圈保持继电器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-2-Coil_Latching_Relay/
slug: /cn/Grove-2-Coil_Latching_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/img/2Coil_Latching_Relay_01.jpg)

该模块基于双线圈保持继电器。与普通继电器相比，这种保持继电器不需要持续供电来保持状态，仅需一个上升/下降脉冲即可改变工作状态。即使在工作状态无需改变时也可以断电，使得该模块特别适合低功耗项目。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html)

特点
-------

- Grove 接口
- 低功耗
- 双开关

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

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
设置/复位电压（最大值）
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
切换电压（最大值）
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
切换电流（最大值）
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
设置时间（保持）
</th>
<td colspan="3">
4.5（最大值）
</td>
<td>
ms
</td>
</tr>
<tr align="center">
<th scope="row">
复位时间（保持）
</th>
<td colspan="3">
3.5（最大值）
</td>
<td>
ms
</td>
</tr>
</table>

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

使用前
------------

### 相关阅读

我们建议您在使用气体传感器之前阅读以下内容，这将帮助您更好地了解 Arduino 和我们的产品，同时也能让您更轻松地使用开源硬件。

<!-- - [Getting Started with Arduino](/cn/Getting_Started_with_Seeeduino)
- [What is Grove system](/cn/Grove_System)
- [Why i need a Base shield?](/cn/Base_Shield_V2) -->

- Arduino 入门指南
- 什么是 Grove 系统
- 为什么需要 Base Shield？

阅读完这些内容后，您将了解如何使用 Base Shield 与 Grove 产品配合 Arduino 工作。让我们开始吧！

### 准备工作

本教程将包括一些必要的产品：

<!-- - [Arduino UNO R3](https://www.seeedstudio.com/depot/Arduino-Uno-Rev3-p-694.html) or [Seeeduino v4](https://www.seeedstudio.com/depot/Seeeduino-V4-p-669.html)
- [Base Shield](https://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html)
- Grove - 2-Coil Latching Relay -->

- Arduino UNO R3 或 Seeeduino v4
- Base Shield
- Grove - 双线圈保持继电器

入门指南
-----

### 使用 Arduino

保持继电器仅在状态改变时消耗电力。信号引脚上的上升/下降电压脉冲会改变其工作状态。这在需要节能的情况下非常有用，同时也适用于需要继电器记住其状态的情况。

让我们开始使用它。

- 将模块连接到 Grove - Base Shield 的 D3 端口。
- 继电器默认处于“设置”状态（Comm 和 NO 连接），当 SIG 引脚上出现上升沿时，它会切换到“复位”状态（Comm 和 NC 连接）。参考代码如下：

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

- 继电器处于“复位”状态（Comm 和 NC 连接），当 SIG 引脚上出现下降沿时，它会切换到“设置”状态（Comm 和 NO 连接）。参考代码如下：

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

- 当工作状态不改变时，该模块功耗极低。在设置继电器状态后，无需继续为双稳态继电器供电，这使其特别节能。

<div class="admonition note">
<p class="admonition-title">注意</p>
继电器在出厂时处于“复位”状态。
</div>

![](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/img/Latching_Relay_Diagram.jpg)

<div class="admonition note">
<p class="admonition-title">注意事项</p>
<p> 1. 双向继电器同时受控。</p>
<p> 2. 当切换到“设置”（“复位”）状态时，NO（NC）指示灯会闪烁一次。</p>
</div>

### 使用 Raspberry Pi

1. 您需要准备一个 Raspberry Pi 和一个 GrovePi 或 GrovePi+。

2. 您需要完成开发环境的配置，否则请参考[这里](/cn/GrovePi_Plus)。

3. 连接

- 使用 Grove 电缆将传感器插入 GrovePi 插座 D4。

4. 导航到示例代码目录：

```
cd yourpath/GrovePi/Software/Python/
```

- 查看代码

```
nano grove_2_coil_latching_relay.py   # 按 "Ctrl+x" 退出 #
```

```
import time
import grovepi

# 将 Grove 双稳态继电器连接到数字端口 D4
# SIG,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # 打开继电器 5 秒
        grovepi.digitalWrite(relay,1)
        print "on"
        time.sleep(5)

        # 关闭继电器 5 秒
        grovepi.digitalWrite(relay,0)
        print "off"
        time.sleep(5)

    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

5. 运行示例代码。

```
sudo python grove_2_coil_latching_relay.py
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- [Grove - 双稳态继电器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip)
- [双稳态继电器数据手册](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Latching_Relay_Datesheet.pdf)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_2-Coil_Latching_Relay -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>