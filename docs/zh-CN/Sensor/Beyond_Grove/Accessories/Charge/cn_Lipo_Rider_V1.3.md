---
description: Lipo Rider V1.3
title: Lipo Rider V1.3
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Lipo_Rider_V1.3
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/LiPo-Rider-v1.3.jpg)

用绿色能源为您喜爱的电子设备供电！Lipo Rider 板允许您利用太阳能为您喜爱的 5V 设备供电。Lipo Rider 板是您户外传感器设计的理想绿色电源解决方案。将 Lipo Rider 板连接到您的传感器板，它可以永远运行在太阳能上！

Lipo Rider 价格极其实惠且易于使用。无需编程，只需插入即可工作。内部充电 IC 处理各种组件之间的所有电力流动。

如果太阳能不足，microUSB 端口允许您通过 USB 为锂电池充电。它还可以在不拆卸 Lipo Rider 板的情况下为您的设备编程。

Lipo Rider 可以单独购买，也可以作为套件（Lipo Rider + 锂电池 + 太阳能板）购买。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Lipo-Rider-v1.3-p-2403.html)

功能特点
--------

- Jst 2.0 接口
- 无论电源来源如何，稳定的 5V USB 电源供应
- 芯片内置充电/再充电算法
- 通过太阳能或 USB 为锂聚合物电池充电
- 通过锂电池或 USB 提供稳定的电压供应
- 2 个 USB 端口可在为锂电池充电时为您的设备编程
- LED 指示电池充满或充电状态
- 简单设计意味着价格极其实惠
- 通过简单的用户修改，可扩展到多个锂电池和大型/多个太阳能板

应用场景
--------

- 分布式户外传感器网络的绿色电源和备用电源
- 锂电池充电器

:::caution

1. 裸露的电子元件。
2. 当提供大负载时，板可能会变热。
3. 潜在的短路或电击风险，尤其是在设备放置在户外收集太阳能时被弄湿的情况下。
:::

硬件概述
--------

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-rider-blockdiagram.JPG)

规格参数
--------

- 小尺寸 – 尺寸 = 长 42 × 宽 34 × 高 6.8
- 锂电池最大充电电流为 900mA
- 锂电池最大供电电流为 600mA
- 电源二极管防止 USB 设备向锂电池回馈电流

### 关键规格

<table border="1">
<tr>
<th>
项目
</th>
<th>
最小值
</th>
<th>
标准值
</th>
<th>
最大值
</th>
</tr>
<tr align="center">
<td width="400">
U<sub>in</sub> 太阳能
</td>
<td width="200">
4.8V
</td>
<td width="200">
5.0V
</td>
<td width="200">
6.0V
</td>
</tr>
<tr align="center">
<td>
I<sub>charge</sub> (R<sub>Iset</sub>=2.0kΩ)
</td>
<td>
700mA
</td>
<td>
800mA
</td>
<td>
900mA
</td>
</tr>
<tr align="center">
<td>
I<sub>supply</sub>
</td>
<td>
0mA
</td>
<td>
</td>
<td>
600mA
</td>
</tr>
<tr align="center">
<td>
V<sub>batt</sub>(R<sub>x</sub>=0Ω)
</td>
<td colspan="3" rowspan="1">
4.2V
</td>
</tr>
<tr align="center">
<td>
V<sub>source USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
<tr align="center">
<td>
V<sub>destination USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
</table>

引脚定义与额定值
-----------------

### 引脚说明与 LED 状态

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>CH 引脚电平（红色 LED 状态）</th>
<th>OK 引脚电平（绿色 LED 状态）</th>
<th>状态说明</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>低电平（亮）</td>
<td>高电平（灭）</td>
<td>充电中</td>
</tr>
<tr class="even">
<td>高电平（灭）</td>
<td>低电平（最后亮）</td>
<td>充电完成</td>
</tr>
<tr class="odd">
<td>脉冲信号（闪烁）</td>
<td>脉冲信号（亮）</td>
<td>电池不存在</td>
</tr>
<tr class="even">
<td>高电平（灭）</td>
<td>高电平（灭）</td>
<td>
两种情况：
<ul>
<li>输入电压低于门限电压</li>
<li>输入电压低于电池电压</li>
</ul>
</td>
</tr>
</tbody>
</table>

#### 硬件组件

**太阳能板**

太阳能板通过下方的 JST 接口连接到板上。请注意，太阳能充电 IC 仅接受 4.8-6.0V 范围内的输入电压。如果充电 LED 未亮，可能是由于以下原因：

1. 锂电池已充满
2. 太阳能板电压超出范围（最可能是由于太阳能不足）。

在第二种情况下，如果可能，请重新调整太阳能板的位置以接收更多阳光。上述条件均不会阻止 Lipo Rider 向 USB 提供稳定的 5V 电源，除非电池已耗尽。

*太阳能板公式*

太阳能板输出功率 = 输出电流 × 电源电压

例如：1W = Iout × 5V

Iout = 200mA

因此，充电 1 小时将提供 200mAh（忽略损耗）。对于 1000mAh 电池，在理想条件下从空电到满电大约需要 5 小时。

**锂电池**

Lipo Rider 的名称表明应使用锂聚合物电池。然而，锂聚合物电池和锂离子电池的化学性质足够相似，可以互换使用。如果需要使用多个电池，请将它们并联连接而不是串联连接，因为充电 IC 提供 4.2V。

**滑动开关**

滑动开关控制 USB 5V 电源的来源。ON – 从锂电池和/或太阳能充电启用 OFF – 从锂电池和/或太阳能充电禁用

**源 USB 端口**

源 USB 端口是一个 **micro-USB** 端口，用作普通 USB 端口。源 USB 端口可用于为锂电池充电或通过目标 USB 端口连接到目标设备。

**目标 USB 端口**

目标 USB 端口是连接目标设备的地方。目标设备的电源将由 Lipo Rider 板提供。电源来源可以是太阳能板、锂电池或源 USB 端口。

#### 不同连接场景下的电力流向

由于组合数量庞大，这里仅列出了主要场景：

**独立模式**

太阳能为锂电池充电。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-standalone.JPG)

**USB模式**

太阳能为锂电池充电，锂电池为目标USB设备供电。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-usb.JPG)

**编程模式**

源USB为锂电池充电并为目标USB设备供电，同时源USB设备与目标USB设备之间启用数据连接。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-program.JPG)

### 示例

#### 户外传感器设备供电

Lipo Rider板的一个重要应用是作为户外传感器的经济型电源。户外传感器设备将由锂电池供电，同时由太阳能板进行补充。请注意，不建议仅依靠太阳能为户外传感器供电，因为太阳能供电可能会在一天中发生变化，可能导致传感器重置或意外断电。在这种情况下，设备运行在“USB模式”下。

如果需要对户外传感器设备进行固件重新编程，只需将微型USB端口连接到您的PC，这将使设备进入上述的“编程模式”。

可以使用更大的电池或多个电池以及太阳能板，但这需要最终用户进行修改。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/LiPo-Rider-v1.3_example.jpg)

**Lipo Rider为Arduino Duemilanove供电（严格来说，这不是一个户外传感器，因为我没有连接任何传感器，也不是在户外，但您明白我的意思）**

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/res/Li-Po_Rider_v1.3_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Li-Po Rider v1.3 原理图和布局（Eagle格式）](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/res/Li-Po_Rider_v1.3_sch_pcb.zip)

<!-- 此Markdown文件来源于 https://www.seeedstudio.com/wiki/Lipo_Rider_V1.3 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>