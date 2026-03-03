---
description: 带有聚合物锂离子电池 5100mAh 3.8V 的电池检测器
title: 带有聚合物锂离子电池 5100mAh 3.8V 的电池检测器
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_700_s.jpg)

带有聚合物锂离子电池 5100mAh 3.8V 的电池检测器包含两个项目：一个 1050mAh 锂离子电池和一个电池电量检测器，用于测量锂离子电池的剩余电量。

锂离子电池非常纤薄、轻便且成本效益高。其输出电压为 3.8V（标称值）。您还可以使用专用充电器为其充电，最大输入电流为 5100mA，最大输入电压为 4.2V。该电池配备了预装的 JST 2.0 接头，方便插拔。它还具有内置的过流保护功能，可防止输出短路。**尽管如此，请务必注意使用安全，不要滥用电池。切勿在无人看管的情况下充电或使用。**

电池电量检测器可以检测输入电压范围为 3–4.2V。它配备了三个 JST 插座（JST 1.0、JST 2.0 和 JST 2.0）以及两个电池焊接垫，可适配不同接头的电池。当您将电池连接到电池电量检测器时，板载的四个 LED 将以百分比指示剩余电量（0–25%、26–50%、51–75%、76–100%）。如果电池接头连接方向错误，另一个 LED 将亮起。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Battery-Detector-with-Polymer-Lithium-Ion-5100mAh-38V-p-2647.html)

:::note

1. 同一时间只能测试一个可靠的电池。

2. 如果输入电压超过 9V，将会损坏该电池电量检测器。

3. 切勿在充电时使用电池。
:::

版本追踪
----------------

| 产品版本                                                         | 发布日期   | 支持状态   | 备注   |
|------------------------------------------------------------------|------------|------------|--------|
| 带有聚合物锂离子电池 1050mAh 3.8V 的电池检测器（当前版本）       | 2016年5月  | 支持       | 无     |

特点
--------

**对于电池**

- 配备预装的 JST 2.0 接头
- 输出电路短路保护
- 成本效益高

**对于电池电量检测器**

- 电池剩余电量的可视化指示
- 不同的 JST 插座适配不同的电池接头

规格
--------------

**对于电池**

| 参数                       | 值                                         |
|----------------------------|---------------------------------------------|
| 容量                       | 5100mAh                                    |
| 标称输出电压（DC）         | 3.8V                                       |
| 接头                       | JST 2.0                                     |
| 最大充电电流               | 2500mA                                     |
| 保护                       | 输出电路短路保护                           |
| 重量                       | 76g，整个包装重量为 91g                    |
| 尺寸                       | 59.8（宽）×10.8（高）×59.5（深）mm         |

**对于电池电量检测器**

| 参数               | 值                                                                                                                                     |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| 输入电压           | 3–4.2V                                                                                                                                 |
| 工作电流           | 15mA                                                                                                                                   |
| 指示方式           | 四个 LED（稍后会详细说明）                                                                                                             |
| 插座               | 三个插座适配不同电池接头以及两个电池焊接垫（稍后会详细说明）                                                                            |
| 尺寸               | 30（宽）×25（深）mm                                                                                                                    |
| CN1185             | [数据手册](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/CN1185_Datasheet.pdf)          |
| 重量               | 3.2g                                                                                                                                   |
| 备注               | 仅连接一个电池到该模块；该模块的输入电压应小于 9V，否则会损坏模块。                                                                     |

支持的平台（仅针对电池）
------------------------

<table>
<tr>
<td>
平台
</td>
<td>
Seeeduino/Arduino
</td>
<td>
Rasberry Pi
</td>
<td>
Beaglebone
</td>
<td>
LinkIt ONE
</td>
</tr>
<tr>
<td>
支持状态
</td>
<td>
支持
</td>
<td>
不支持
</td>
<td>
支持（仅适配 Grove Beaglebone v2 基板）
</td>
<td>
不支持
</td>
</tr>
<tr>
<td>
备注
</td>
<td colspan="5">
如果未提及特定平台的版本号，则表示该产品支持该平台内的所有版本。
</td>
</tr>
</table>

硬件概述
-----------------

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**，一个电压监测电路。
- **电池焊接垫**，用于焊接电池的导线。

### **包装内容**（主要部件）

| 部件名称               | 数量     |
|------------------------|----------|
| 锂离子电池             | 1 个     |
| 电池电量检测器         | 1 个     |

入门指南
---------------

按照下图连接电池和电池电量检测器。您可以看到 LED 灯亮起，表示当前电量仍然存在。

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_700_s.jpg)

<!-- \[\[|600px|none|正面视图 \]\] -->

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/110060467_Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Power_Detector.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [原理图（Eagle）文件](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/110060467_Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Power_Detector.zip)
- [CN1185 数据手册](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/CN1185_Datasheet.pdf)
- [电池数据手册](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Datasheet.pdf)
- [此电池的认证和测试报告](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/Certifications_and_Test_Report.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V -->

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