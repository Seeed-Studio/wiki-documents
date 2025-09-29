---
title: 逻辑直流插座
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Logic_DC_Jack/
slug: /cn/Logic_DC_Jack
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian.JPG)

这是一个易于使用的逻辑控制器，可以实现逻辑与（AND）和逻辑非（NOT）功能。
它采用 H 桥设计，具有一定的驱动功能，可以驱动电机和其他应用，现在您的应用将不再仅限于 LED 应用。
如果您是编程新手并倾向于制作简单的应用程序，这是一个开始的明智选择。

## 特性

* 双输入单输出

* 通过开关选择逻辑

* 输入默认设置为高电平

* 半桥输出，可直接驱动电机

* 使用 9V 电池供电

## 规格

* 空载电流：10±1mA；

* 输入电压：6~9V；

* 输出电压：5V；

* 电源转换效率：82±5%

## 硬件概述

以下是 Logic_DC_Jack 模块的框图，包含以下部分。

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_overview1.JPG)

* **输入** - 逻辑输入

  * GND - 接地

  * VCC - 连接到电源

  * IN2 - 输入2

  * IN1 - 输入1

* **输出** - 逻辑输出

  * GND - 接地

  * VCC - 连接到电源

  * OUT - 输出

  * OUT - 输出

* **状态指示灯** - 一个红色指示灯

  * ON - NOT 模式

  * OFF - AND 模式

* **功能开关**

  * Off - 关闭电源

  * Not - NOT 模式，表示当前板是一个 NOT 逻辑门，仅支持一个输入模块。

  * And - AND 模式，当只有一个 Grove 电缆插入主板左侧插座时，主板将作为一个简单连接器。但如果使用分支 Grove 电缆，主板将表现为 AND 逻辑门。

_注意：在 AND 模式下，IN2 默认设置为高电平，因此当只有一个输入模块时，Logic DC Jack 充当缓冲器。_

* **电源输入** - 直流电源输入，要求 6-9V

* **电源指示灯** - 一个绿色指示灯，当有电源供应时亮起

## 入门指南

在本节之后，您只需几个步骤即可让 Logic DC Jack 运行。

### 它是如何工作的？

Logic DC Jack 是一个逻辑设备，用于实现一些简单的逻辑功能。在开始之前，请参考以下链接了解有关 [NOT 门](https://en.wikipedia.org/wiki/Inverter_logic_gate) 和 [AND 门](https://en.wikipedia.org/wiki/AND_gate) 的信息。

该模块包括两种类型的电缆，您将在将一个或两个输入插入输入端口时使用其中一种。

<dl>
  <dd> 情况 1 – 一个输入 </dd>
  <dd> 如果输入只有一个模块，Logic DC Jack 可以实现 AND 和 NOT 的逻辑功能。以下是逻辑功能图： </dd>
</dl>

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_3.png)

<dl>
  <dd> 情况 2 – 两个输入 </dd>
  <dd> 如果输入是两个模块，Logic DC Jack 只能实现 AND 的逻辑功能。以下是逻辑功能图： </dd>
</dl>

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_4.png)

首先选择输入的数量，然后将开关调整到正确的位置，即可确认所需的逻辑功能。

### 如何判断输入端口和输出端口？

外壳上有两个箭头标记，您可以轻松区分输入和输出。

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian_2.JPG)

### 如何知道默认输入电平？

即使我们知道如何使用逻辑功能，但如何知道输入的默认电平状态呢？因为不同的默认电平状态会导致不同的输出状态。这里，您可以通过一个简单的实验来了解。

#### 准备工作

需要以下物品：

* [Grove - 按钮](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)

* [Grove - 红色 LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35)

* 9V 电池

#### 硬件连接

在本演示中，我们使用 [Grove - 按钮](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50) 作为输入，使用 [Grove - 红色 LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35) 作为输出。

切换到 **NOT** 门。

如下图所示：

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_setting_stared_not.JPG)

#### 查看结果

如您所知，只有当输出电平为 1 时，Grove - LED 才会亮起。通电后，您会发现 Grove - LED 亮起，换句话说，根据逻辑图，输出电平为 1，因此我们可以知道：如果输出为 1，开关模式为 NOT，那么默认输入电平为 0。

### 关于两个输入的演示

如果您想使用两个输入，您需要 Grove 分支电缆。

使用此电缆，您可以将两个 Grove 连接到输入端口。一个连接到 Input1，另一个连接到 Input2。

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_cable.JPG)

以下是一个示例，两个按钮作为输入，一个 LED 作为输出：

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_and.jpg)

只有当两个按钮都按下时，LED 才会亮起。

<font color="Red">提示：此电缆也可以用作输出，如果您想同时控制两个 Grove 的状态电平，则需要此电缆。请注意：如果以这种方式使用电缆，两个输出的状态电平是相同的。</font>

### 与乐高协作

Logic DC Jack 包含一个与乐高兼容的外壳，您可以将 Logic DC Jack 插入乐高，使其更有趣。

关于与乐高兼容的 Grove 基座，敬请期待。

以下是一个演示：

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_with_lego.jpg)

## 兼容 Logic DC Jack 的 Grove 模块

以下 Grove 模块可以很好地与 Logic DC Jack 配合使用：

### 输入模块

* [Grove - 按钮](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)

* [Grove - 触摸传感器](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html?cPath=85_94)

* [Grove - 开关](https://www.seeedstudio.com/Grove-SwitchP-p-1252.html?cPath=85_50)

* [Grove - 光线传感器](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html?cPath=25_27)

* [Grove - 音量传感器](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html?cPath=25_128)

* [Grove - 土壤湿度传感器](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html?cPath=25_27)

* [Grove - 水传感器](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html?cPath=25_27)

* [Grove - 磁性开关](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

* [Grove - 倾斜开关](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)

* [Grove - 线路检测传感器](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html?cPath=25_31)

* [Grove - PIR运动传感器](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html?cPath=25_31)

* [Grove - 旋转角度传感器](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html?cPath=85_52)

* [Grove - 滑动电位器](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html?cPath=85_52)

* [Grove - 火焰传感器](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)

### 输出模块

* [Grove - LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)

* [Grove - LED灯串](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)

* [Grove - 振动电机](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

* [Grove - 蜂鸣器](https://www.seeedstudio.com/Grove-Buzzer-p-768.html?cPath=38)

* [Grove - 迷你风扇](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)

* [Grove - 录音模块](https://www.seeedstudio.com/Grove-Recorder-p-1825.html?cPath=25_128)

* [Grove - 电磁铁](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html?cPath=25_33)

* [Grove - 继电器](https://www.seeedstudio.com/Grove-Relay-p-769.html?cPath=39_42)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **[PDF]**   [PDF格式原理图](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH.pdf)
* **[Eagle]**    [Eagle格式原理图](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip)
* **[PDF]**[Logic DC Jack v1.0 pdf](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.pdf)
* **[EAGLE]**[Logic DC Jack v1.0 sch](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.sch)
* **[Wik]**   [NOT门的维基页面](https://en.wikipedia.org/wiki/Inverter_(logic_gate))
* **[Wik]**    [AND门的维基页面](https://en.wikipedia.org/wiki/AND_gate)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>