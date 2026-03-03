---
title: Lipo Rider V1.1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/DC_framework_solenoid_HCNE1-0630/
slug: /cn/Lipo_Rider_V1.1
last_update:
  date: 02/03/2022
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Liporider-setup.jpg)

用绿色能源为您喜爱的电子套件供电！Lipo Rider 板允许您利用太阳能运行您喜爱的 5V 设备。Lipo Rider 板是您户外传感器设计的理想绿色电源解决方案。将 Lipo Rider 板连接到您的传感器板，它可以永远运行在太阳能上！

Lipo Rider 价格极其实惠且易于使用。无需编程。插入即可使用。内部充电 IC 处理各种组件之间的所有电力流动。

如果太阳能不足，microUSB 端口允许您通过 USB 为锂电池充电。它还可以在不拆卸 Lipo Rider 板的情况下为您的套件编程。

Lipo Rider 可以作为单独的板或套件（Lipo Rider + 锂电池 + 太阳能板）从 [Seeed Studio](https://www.seeedstudio.com/depot/) 购买。

型号：POW115D2P

## 特性 ##

- Jst 2.0 接口

- 无论电源来源如何，稳定的 5V USB 电源供应

- 芯片内置充电/再充电算法

- 通过太阳能或 USB 为锂聚合物电池充电

- 通过锂电池或 USB 提供稳定的电压供应

- 2 个 USB 端口可让您在为锂电池充电时为您的套件编程

- LED 指示电池充满或充电状态

- 简单设计意味着价格极其实惠

- 通过简单的终端用户修改，可扩展至多个锂电池和大型/多个太阳能板

## 应用场景 ##

- 分布式户外传感器网络的绿色电源和备用电源

- 锂电池充电器

## 注意事项 ##

- 暴露的电子元件

- 在提供大负载时，板可能会变热

- 潜在的短路或电击风险，尤其是在设备放置在户外收集太阳能时受潮

- 不建议用于为手机充电，因为模块可能会过热

## 原理图 ##

### 模块图 ###

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-rider-blockdiagram.JPG)

## 规格 ##

- 小尺寸 – 尺寸 = 长47 × 高37.5 × 厚6.6

- 锂电池最大充电电流为 600mA

- 锂电池最大供电电流为 350mA

- 电源二极管防止 USB 设备向锂电池回馈电流

### 关键规格 ###

|项目|最小值|标准值|最大值|
|---|---|---|---|
| Iin Solar| 4.8V| 5.0V| 6.5V|
| Icharge (RIset=3.9kΩ)| 400mA| 500mA| 600mA|
| Isupply 0mA|350mA|||
| Vbatt(Rx=0Ω)|4.2V|||
| Vsource USB 5.0V|Vdestination USB 5.0V||||

## 引脚定义和额定值 ##

### 引脚说明和 LED 状态 ###

|CH 引脚电平（红色 LED 状态）|OK 引脚电平（绿色 LED 状态）|状态说明|
|---|---|---|
|低电平（亮）|高电平（灭）|充电中|
|高电平（灭）|低电平（最后亮）|充电完成|
|脉冲信号（闪烁）|脉冲信号（亮）|电池不存在|
|高电平（灭）|高电平（灭）|两种情况：- 输入电压低于门限电压 - 输入电压低于电池电压|

## 使用说明 ##

Lipo Rider 是一个电源模块，用于为 **MCU** 项目提供稳定的 5VDC 电源。以下是一个驱动 300mA 输出波形的电源示例：

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/MAP001.jpg)

### 硬件设置 ###

#### 硬件组件 ####

**太阳能板**

太阳能板通过下方的 JST 接口连接到板子。请注意，太阳能充电 IC 仅接受 4.8-6.5V 范围内的输入电压。如果充电 LED 未亮，可能是由于以下原因：

1. 锂电池已充满。

2. 太阳能板电压超出范围（通常是由于太阳能不足）。

在第二种情况下，请尽可能重新调整太阳能板的位置以接收更多阳光。以上情况均不会阻止 Lipo Rider 为 USB 提供稳定的 5V 电源，除非电池完全耗尽。

太阳能板公式：

太阳能板输出功率 = 输出电流 × 供电电压

例如：1W = Iout × 5V

Iout = 200mA

因此，忽略损耗的情况下，充电 1 小时将提供 200mAh。对于 1000mAh 的电池，从空电到满电大约需要 5 小时（理想条件下）。

**锂电池**

Lipo Rider 的名称表明应使用锂聚合物电池。然而，锂聚合物电池和锂离子电池的化学性质足够相似，两种电池可以互换使用。如果需要使用多个电池，请将它们并联连接，而不是串联连接，因为充电 IC 提供 4.2V 电压。

**滑动开关**

滑动开关控制 USB 5V 电源的来源。
- ON – 从锂电池和/或太阳能板启用充电。
- OFF – 从锂电池和/或太阳能板禁用充电。

**源 USB 接口**

源 USB 接口是一个迷你 USB 接口，用作普通 USB 接口。源 USB 接口可用于为锂电池充电，或通过目标 USB 接口连接到目标设备。

**目标 USB 接口**

目标 USB 接口用于连接目标设备。目标设备的电源将由 Lipo Rider 板提供，电源来源可以是太阳能板、锂电池或源 USB 接口。

#### 不同连接场景下的电源流向 ####

由于组合数量众多，这里仅列出主要场景：

**独立模式**

太阳能为锂电池充电。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-standalone.JPG)

**USB 模式**

太阳能为锂电池充电，锂电池为目标 USB 设备供电。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-usb.JPG)

**编程模式**

源 USB 为锂电池充电并为目标 USB 设备供电，同时源和目标 USB 设备之间启用数据连接。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-program.JPG)

### 示例 ###

#### 户外传感器设备电源 ####

Lipo Rider 板的一个重要应用是作为户外传感器的经济型电源。户外传感器设备将由锂电池供电，并由太阳能板补充。请注意，不建议仅依靠太阳能为户外传感器供电，因为太阳能可能在一天中变化，可能导致传感器意外重置或断电。在这种情况下，设备运行在“USB 模式”。

如果需要重新编程户外传感器设备的固件，只需将迷你 USB 接口连接到您的电脑，这将使设备进入上述的“编程模式”。

可以使用更大的电池或多个电池和/或太阳能板，但需要最终用户自行修改。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-exam1.JPG)

Lipo Rider 为 Arduino Duemilanove 提供电源（在此情况下严格来说不是户外传感器，因为我没有连接任何传感器且设备不在户外，但您明白我的意思）。

## 支持 ##

如果您有任何问题或更好的设计建议，可以前往我们的 [论坛](https://www.seeedstudio.com/forum) 或 **愿望** 页面进行讨论。

## 版本追踪 ##

|版本|描述|日期|编辑者|
|---|---|---|---|
|Lipo Rider V0.9b | 初始公开发布|2010年11月2日| Lafier|
|Lipo Rider V1.0 |修订发布|2011年1月11日|Silas Wan|
|Lipo Rider V1.1 |将Jst连接器从2.54更改为2.0|2011年11月2日|Mike|

## 在线原理图查看器 ##

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/res/Lipo_rider_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- [文件:Lipo rider v1.1.zip](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/res/Lipo_rider_v1.1.zip)

## 如何购买 ##

点击 [这里](https://www.seeedstudio.com/depot/lipo-rider-p-710.html?cPath=104_107) 购买 [Lipo Rider](https://seeeddoc.github.io/Lipo_Rider/)，或其他您喜欢的 **产品**。

## 另请参阅 ##

[Lipo Rider Pro](https://seeeddoc.github.io/Lipo_Rider_Pro/)

## 许可 ##

本文档依据 Creative Commons [署名-相同方式共享 3.0 许可协议](http://creativecommons.org/licenses/by-sa/3.0/) 授权。源代码和库依据 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 授权，详情请参阅源代码文件。

## 技术支持与产品讨论 ##

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>