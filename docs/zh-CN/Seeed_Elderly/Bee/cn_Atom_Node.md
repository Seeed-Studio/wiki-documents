---
description: Atom 节点
title: Atom 节点
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Atom_Node
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node.jpg)

你可能想要自己动手制作一个报警系统来监测花园中的土壤湿度。当你清晨还舒适地躺在床上时，你可能需要一个设备，它可以自动打开狗舍，让你的狗狗出来享受温暖的阳光。然而，复杂的软件和硬件让你望而却步。现在，Atom来了，它扫清了荆棘和障碍，帮助你完成这些奇妙的自制项目。

Atom 是物联网中的一个节点。它不仅可以独立工作，还可以与其他设备协同工作。Atom 具有高度的扩展性且易于使用。标准的 Grove 接口允许连接不同的传感器。Atom 智能地完成任务：收集的大量数据通过无线方式传输到执行器。更令人着迷的是，你只需通过设置你的安卓手机即可完成所有任务。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_03.jpg)

Atom 具有无线数据传输和移动监控功能。配备标准 Bee 接口，Atom 可以连接到 XBee、RFBee 和 Bluetooth Bee，形成无线通信网络，自动收集和管理数据。Atom 还可以将不同传感器的数据上传到云端，使您可以随时随地通过网页浏览器方便地分析数据。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html)

## 特性
---
*   以移动设备/应用为中心进行配置
*   开源
*   从 Ad-hoc 到 Mesh 的灵活无线网络拓扑
*   内置电池
*   多种指示器，易于区分工作状态
*   皮肤-骨架-核心哲学

## 规格
---
<table cellspacing="0" width="80%">
<tr>
<th scope="col">项目</th>
<th scope="col">典型值</th>
<th scope="col">单位</th>
</tr>
<tr>
<th scope="row">USB 供电电压</th>
<td>4.75-5.25</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">静态电流（连接 RF Bee）</th>
<td>25~40</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">GPIO 电压</th>
<td>3.3</td>
<td>V</td>
</tr>
<tr>
<th scope="row">电池容量</th>
<td>300</td>
<td>mAH</td>
</tr>
<tr>
<th scope="row">充电电流</th>
<td>300-500</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">USB 接口</th>
<td>MICRO USB</td>
<td>/</td>
</tr>
<tr>
<th scope="row">工作频率</th>
<td>16</td>
<td>MHz</td>
</tr>
<tr>
<th scope="row">Grove 供电电压</th>
<td>3.3</td>
<td>V</td>
</tr>
<tr>
<th scope="row">输出电流（最大值）</th>
<td>500</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">连续工作时间（最大值）</th>
<td>22</td>
<td>小时</td>
</tr>
<tr>
<th scope="row">光敏传感器响应频率</th>
<td>100</td>
<td>Hz</td>
</tr>
<tr>
<th scope="row">低电量指示</th>
<td>3.71</td>
<td>V</td>
</tr>
<tr>
<th scope="row">光敏传感器响应频率</th>
<td>100</td>
<td>Hz</td>
</tr>
<tr>
<th scope="row">RF BEE（Seeed）通信距离（最大值，户外）</th>
<td>200</td>
<td>m</td>
</tr>
<tr>
<th scope="row">Xbee（Xbee）通信距离（最大值，户外）</th>
<td>30</td>
<td>m</td>
</tr>
<tr>
<th scope="row">Bluetooth Bee（Seeed）通信距离（最大值，户外）</th>
<td>20</td>
<td>m</td>
</tr>
<tr>
<th scope="row">Grove 接口</th>
<td>3（IIC；UART；PWM）</td>
<td>/</td>
</tr>
<tr>
<th scope="row">20Pin Bee 插座</th>
<td>兼容 Rfbee、Xbee、Bluetooth Bee</td>
<td>/</td>
</tr>
<tr>
<th scope="row">双色充电指示灯</th>
<td>绿色/红色</td>
<td>/</td>
</tr>
<tr>
<th scope="row">双色用户指示灯</th>
<td>绿色/红色</td>
<td>/</td>
</tr>
<tr>
<th scope="row">蜂鸣器频率</th>
<td>2.7±0.3</td>
<td>K</td>
</tr>
</table>

## 拓扑结构

Atom Node 配备了传感器/执行器连接器，可单独使用。通过 XBee 或其他开放式 RF 通信模块，当多个设备一起使用时，它也可以在多种网络拓扑中进行通信。例如：

**1. 第一种模式：**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node1.jpg)

在这种模式下，传感器和执行器连接到一个 Atom Node。Atom Node 读取传感器数据，并决定是否驱动执行器执行相关动作。使用中的示例 1 就是以这种模式运行。

**2. 第二种模式：**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node2.jpg)

在这种模式下，传感器和执行器分别连接到两个 Atom Node。一个 Atom Node 接收另一个 Atom Node 通过 RFBee 发送的传感器数据，并决定是否驱动自身的执行器执行相关动作。使用中的示例 2 就是以这种模式运行。

**3. 第三种模式：**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node3.jpg)

在这种模式下，传感器连接到一个 Atom Node（我们称之为 AtomSensor）。其他 Atom Node 接收 AtomSensor 通过 RFBee 发送的传感器数据，并决定是否驱动自身的执行器执行相关动作。

## 结构设计

Node 解决方案的设计遵循 SSG（皮肤-骨架-内脏）哲学。
- **内脏（Gut）**：内部电子元件
- **骨架（Skeleton）**：一个最小化的铝框架，用于保护和固定，同时留有足够的开口以适配各种传感器/执行器

产品尺寸：82mm * 63.5mm * 17mm

材料：铝合金 5052

表面处理：黑色/银色阳极氧化

突出特点：铰链结构

零件清洁度：去除所有毛刺和尖角。清除所有油污、灰尘或其他污染物。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom.node.jpg)

让我们期待这些原型……

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View1.jpg)![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View2.jpg)

## 硬件设计
---
系统采用 Atmel 32U4 作为主芯片，并配备标准 Bee 接口插座用于无线通信。它采用 3.3V 电源供电，外部电源接口为 Micro USB。当连接外部电源时，通过基于 TD6810 芯片的 DC‐DC 可调电路转换为 3.3V，并为整个系统供电。同时，5V 电源通过 CN3065 充电管理 IC 为锂电池充电。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_Interface_Function.jpg)

**U1:** Atmel 32U4 IC，8 位 AVR 微控制器；

**U3:** TD6810-ADJ IC，1.5MHz 800mA 同步降压稳压器；

**U4:** CN3065 IC，充电管理芯片。

**Micro USB:** 用于锂电池充电和编程。

**充电指示灯:** 在充电过程中，指示灯为红色；充电完成后，指示灯变为绿色。当未连接外部电源或电池处于正常状态时，指示灯不会亮起。当电池电量低（未连接外部电源）时，指示灯显示红色。

**用户指示灯:** 绿色闪烁表示数据传输，红色闪烁表示初始化。红灯表示处于配置模式。

**光传感器:** 接收 Android 设备发送的编码参数。

**ADC 接口:** 可连接传感器（非 IIC 接口）。

**PWM 接口:** 可连接执行器（非 IIC 接口）。

**IIC 接口:** 可连接传感器或执行器（为 IIC 接口）。

**<font color="red">注意：</font>** 一个 Atom Node 不能同时连接两个或多个传感器（执行器）。

**关键特性**

- 兼容 Arduino 的 MCU

- 配备锂电池及充电电路

- LED/LDR 用于参数设置

- 传感器/执行器连接器

- 兼容 XBee 的插座

- Micro USB 用于编程和供电

- 低功耗设计

**框图**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Beacon_ATOM_hardware.jpg)

**硬件设计说明**

[https://www.seeedstudio.com/wiki/images/1/1b/Beacon_Atom_Hardware_Design_Analysis_.pdf](https://files.seeedstudio.com/wiki/Atom_Node/res/Beacon_Atom_Hardware_Design_Analysis_.pdf)

**Atom Node 概览**

现在让我们看看 Atom Node 的外观。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Hardware_View.jpg)

## 固件和软件
---
### 固件

已上传到 Atom Node 的固件可以驱动传感器和执行器。
Atom Node 可用的传感器：

<table cellspacing="0" width="40%">
<tr>
<th scope="col">ID</th>
<th scope="col">名称</th>
<th scope="col">类型</th>
<th scope="col">控制模式</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Grove - 按钮</td>
<td>传感器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Grove - 倾斜开关</td>
<td>传感器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Grove - 巡线传感器</td>
<td>传感器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Grove - PIR运动传感器</td>
<td>传感器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Grove - 红外反射传感器</td>
<td>传感器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Grove - 磁性开关</td>
<td>传感器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Grove - 触摸传感器</td>
<td>传感器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Grove - 红外距离中断器</td>
<td>传感器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Grove - 霍尔传感器</td>
<td>传感器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Grove - 碰撞传感器</td>
<td>传感器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Grove - 湿度传感器</td>
<td>传感器</td>
<td>模拟</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Grove - 光传感器</td>
<td>传感器</td>
<td>模拟</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Grove - 旋转角度传感器</td>
<td>传感器</td>
<td>模拟</td>
</tr>
<tr>
<th scope="row">44</th>
<td>Grove - 温度传感器</td>
<td>传感器</td>
<td>模拟</td>
</tr>
<tr>
<th scope="row">45</th>
<td>Grove - 水传感器</td>
<td>传感器</td>
<td>模拟</td>
</tr>
<tr>
<th scope="row">46</th>
<td>Grove - 80cm红外接近传感器</td>
<td>传感器</td>
<td>模拟</td>
</tr>
<tr>
<th scope="row">47</th>
<td>Grove - 红外温度传感器</td>
<td>传感器</td>
<td>模拟</td>
</tr>
<tr>
<th scope="row">48</th>
<td>Grove - 滑动电位器</td>
<td>传感器</td>
<td>模拟</td>
</tr>
<tr>
<th scope="row">59</th>
<td>Grove - 空气质量传感器1.0</td>
<td>传感器</td>
<td>模拟</td>
</tr>
<tr>
<th scope="row">50</th>
<td>Grove - 电流传感器</td>
<td>传感器</td>
<td>模拟</td>
</tr>
<tr>
<th scope="row">51</th>
<td>Grove - 酒精传感器</td>
<td>传感器</td>
<td>模拟</td>
</tr>
</table>

目前它几乎可以驱动所有传感器。由此可见，该固件功能强大。
Atom Node 可用的执行器：

<table cellspacing="0" width="40%">
<tr>
<th scope="col">ID</th>
<th scope="col">名称</th>
<th scope="col">类型</th>
<th scope="col">控制模式</th>
</tr>
<tr>
<th scope="row">128</th>
<td>Grove - 继电器</td>
<td>执行器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">129</th>
<td>Grove - LED</td>
<td>执行器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">135</th>
<td>Grove - 多色闪烁LED (5mm)</td>
<td>执行器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">136</th>
<td>Grove - 可变色LED</td>
<td>执行器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">137</th>
<td>Grove - 蜂鸣器</td>
<td>执行器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">138</th>
<td>Grove - 振动器</td>
<td>执行器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">201</th>
<td>Grove - OLED显示屏 128*64</td>
<td>执行器</td>
<td>IIC</td>
</tr>
<tr>
<th scope="row">202</th>
<td>Grove - OLED 96x96</td>
<td>执行器</td>
<td>IIC</td>
</tr>
<tr>
<th scope="row">223</th>
<td>Grove - LED条</td>
<td>执行器</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">224</th>
<td>Grove - 红外发射器</td>
<td>执行器</td>
<td>IR</td>
</tr>
</table>

### 软件

有一个用于配置 Atom Node 模块的应用程序。该程序运行在 Android 设备上。在配置过程中，Android 设备的屏幕区域会闪烁，通过光敏晶体管将编码参数传输到 Atom Node。配置界面如下所示：

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Configuration_Interface_.png)

## 使用方法
---
Atom Node 是一个开源的物联网硬件解决方案，可以支持多个 Grove 传感器和执行器，用于收集物理数据并执行某些操作。在使用之前，需要对 Atom Node 进行配置。配置完成后，多个模块可以通过 RFBee 无线收集和传输数据。

我们以温度传感器为例来说明 Atom Node 的使用。让我们尝试实现以下功能：当温度超过 28 ℃ 时，蜂鸣器会发出声音。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Effect_diagram.jpg)

**准备工作：**
使用该设备时，至少需要一个 RFBee/Xbee（如果只使用一个 Atom Node，则不需要）和一个 Android 设备（Atom Node 不包含 Android 设备）。如果希望 Atom Node 正常工作，这些是必需的。此外，请确保 RFBee/XBee 的波特率设置为 57,600。如果不是，您需要修改配置，可以使用自己的方法或上传 [库文件：RFBee](https://files.seeedstudio.com/wiki/Atom_Node/res/RFBee.zip) 的示例到 RFBee。然后下载 [应用程序包：BeaconUI](https://files.seeedstudio.com/wiki/Atom_Node/res/BeaconUI.zip) 并安装到 Android 设备上。

### 示例 1：使用一个 Atom Node

现在使用一个处于 IFTTT 模式的 Atom Node，按照以下步骤操作：

<!-- * 使用 [Grove - 通用 4 针电缆](/cn/Grove_System/#grove-cables) 将 Grove - 温度传感器连接到 ADC 端口，将 Grove - 蜂鸣器连接到 PWM 端口。 -->

* 将 RFBee 插入 Bee 插座。
* 按下 Atom Node 一侧的按钮以打开设备。另一侧的 LED 会亮起。然后再次按下按钮，使 Atom Node 进入配置模式。同时，用户指示灯变为红色。

* 打开 Atom Node 应用程序，您可以看到以下界面：

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Interface1.jpg)

* 点击右上角的加号以添加设备，会弹出一个选择面板。
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface2.jpg)

让我们暂停一下，简要介绍界面。

1) 设备名称：可以是任何单词，例如 "Sensor-temperature" 或您喜欢的任何单词。

2) 传感器：选择一个传感器。

3) 其余配置用于执行器。如果不需要执行器，请选择 NULL，其余选项会自动忽略。

现在让我们进行配置，并将设备名称设置为 "temp"。

* 如下图所示，输入 "temp" 作为设备名称。在 "Sensor" 中选择 "Grove - 温度传感器"，在执行器中选择 "Grove - 蜂鸣器"。在 "Sensor Radio Frequency" 中选择除 "Null" 之外的任何选项，输入 "if" 值并选择 "then"：
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface9.png)

<font color="red">在独立模式下，触发源应选择设备本身，因此您应该在 "Trigger from" 的下拉框中选择 "temp"。但现在只有一个 "Null" 选项。请忽略此问题。当您在设备列表中看到设备名称时，可以重新配置 "Trigger from" 中的设备名称。</font>

* 将设备放置在 Android 设备屏幕上。注意光传感器面向屏幕。屏幕亮度最好设置为大约 35%。
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface3.jpg)

<!-- * 点击 "Submit"。它将开始配置。<font color="red">配置成功后，用户指示灯会变为绿色并闪烁。</font>如果配置失败，请点击 "Again"。如果持续失败，可以参考 [FAQ](/cn/Atom_Node)。 -->

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface4.jpg)

* 我们已经完成了配置，现在可以在设备列表中看到它。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface5.jpg)

<font color="red">请记住，您刚刚选择的触发源是 Null。您需要重新配置。</font>

* 一旦温度传感器读取的值超过 28 ℃，蜂鸣器将发出声音。

### 示例 2：使用两个 Atom Node

使用两个处于 IFTTT 模式的 Atom Node，您可以按照以下步骤操作：

* 将 Grove - 温度传感器连接到 Atom Node 的 ADC 端口，并将一个 RFBee（波特率 57,600）插入 Bee 插座。

* 将 Grove - 蜂鸣器连接到另一个 Atom Node 的 PWM 端口，并将一个 RFBee 插入 Bee 插座。

* 打开 Atom Node 应用程序。点击右上角的加号。我们将设备名称设置为 "temp"，并在 "Sensor" 中选择 Grove - 温度传感器，如下所示：
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface6.jpg)

* 打开 Atom Node 并通过按下按钮进入配置模式，然后将其放置在 Android 屏幕上。点击 "Submit"。它将开始配置。

* 完成一个 Atom Node 的配置后，您可以在设备列表中看到它。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface5.jpg)

* 然后以类似方式配置另一个 Atom Node，连接 Grove - 蜂鸣器。
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface7.jpg)

在配置执行器时，设置执行器的名称。然后在 "Trigger from" 中选择执行器的触发源。我们希望使用之前配置的设备 "temp" 来触发执行器，因此我们应该在 "Trigger from" 的下拉框中选择 "temp"。还有一些其他触发条件和动作，例如 "If" 和 "then"，它们可以帮助您建立某个条件与相应动作之间的链接。顺便提一下，"If" 值应始终遵循您使用的传感器的数据类型。

* 当两个节点配置完成后，它将开始工作。然后您可以看到用户 LED 为绿色。
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface8.jpg)

## 工作状态描述
---
<table cellspacing="0">
<tr>
<th scope="col">操作</th>
<th scope="col">状态</th>
</tr>
<tr>
<th>按下电源按钮</th>
<td>电源指示灯将亮起（蓝色）</td>
</tr>
<tr>
<th>在 Atom Node 开机后按下电源按钮</th>
<td>电源指示灯亮起（蓝色），用户指示灯将亮起（如果未配对，用户指示灯为红色；成功配对后，用户指示灯为绿色并闪烁）</td>
</tr>
<tr>
<th>在配置模式下按下电源按钮</th>
<td>电源指示灯亮起（蓝色），用户指示灯将关闭</td>
</tr>
<tr>
<th>长按电源按钮</th>
<td>所有指示灯将关闭，蜂鸣器将发声</td>
</tr>
<tr>
<th>双击电源按钮</th>
<td>用户指示灯将关闭或打开</td>
</tr>
<tr>
<th>四击电源按钮</th>
<td>所有指示灯保持当前状态</td>
</tr>
<tr>
<th>使用 USB 数据线连接 Atom Node 到电脑</th>
<td>充电指示灯将亮起（充电时充电指示灯为红色，充电完成后充电指示灯为绿色），电源指示灯将亮起</td>
</tr>
</table>

## 固件升级
---
### 连接设备并安装驱动

* 下载 [Atom Node 驱动文件](https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Driver.zip) 并保存。
* 将 Micro-USB 数据线连接到 Atom Node，并将另一端连接到电脑的 USB 端口。
* 等待新硬件提示。如果安装程序未自动启动，请导航到 Windows 设备管理器并找到 Seeeduino Lite 列表。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/A_Unknow_Device.jpg)

* 右键点击并选择更新驱动程序。当询问是自动安装还是从特定位置安装时，选择“浏览我的电脑以查找驱动程序软件”。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Update_Driver.jpg)

* 选择“在这些位置搜索最佳驱动程序”，并勾选“在搜索中包含此位置”选项。点击浏览按钮并导航到您下载的驱动文件夹。选择驱动文件夹并点击 **确定**。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Browse_the_Driver.jpg)

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Update_the_Driver.jpg)

### 修改文件：boards.txt 和 USBCore.cpp

* 打开 Arduino-1.0.1/hardware/arduino/cohttps://files.seeedstudio.com/wiki/Atom_Node/res/arduino 目录，用 [新的 USBCore.cpp 文件](https://files.seeedstudio.com/wiki/Atom_Node/res/USBCore.zip) 替换 USBCore.cpp 文件。

* 并用 [新的 boards.txt 文件](https://files.seeedstudio.com/wiki/Atom_Node/res/Boards-Atom_Node-.txt) 替换路径 Arduino-1.0.1/hardware/arduino 中的 boards.txt 文件。

### 下载所需的库文件和 Atom.Node 固件

* 最新的 Atom.Node 固件：[https://github.com/reeedstudio/Atom_Node](https://github.com/reeedstudio/Atom_Node)

* 最新的 Atom.Node 库：[https://github.com/reeedstudio/Atom_Node_Libraries](https://github.com/reeedstudio/Atom_Node_Libraries)

### 使用 Arduino IDE 上传程序

* 打开 Atom.Node 固件文件中的 Atom_Node.ino。

* 在 Arduino 环境的工具菜单中选择板子 | Seeeduino Node，并选择正确的端口。
* 编译并上传代码。

现在您已经完成了固件升级。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
- [Atom_Node_Eagle_File.zip](https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Eagle_File.zip)

- [Atom Node 库](https://github.com/reeedstudio/Atom_Node_Libraries)

- [Atom Node 固件](https://github.com/reeedstudio/Atom_Node)

- [应用程序：BeaconUI](https://files.seeedstudio.com/wiki/Atom_Node/res/BeaconUI.zip)

- [硬件设计说明](https://files.seeedstudio.com/wiki/Atom_Node/res/Beacon_Atom_Hardware_Design_Analysis_.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>