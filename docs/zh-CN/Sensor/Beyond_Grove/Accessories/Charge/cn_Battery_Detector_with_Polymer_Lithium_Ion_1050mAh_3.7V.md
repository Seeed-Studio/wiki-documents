---
description: 带有1050mAh 3.7V聚合物锂离子电池的电池检测器
title: 带有1050mAh 3.7V聚合物锂离子电池的电池检测器
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/img/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V.jpg)

带有1050mAh 3.8V聚合物锂离子电池的电池检测器包含两个项目：一个1050mAh锂离子电池和一个电池电量检测器，用于测量锂离子电池的剩余电量。

锂离子电池非常薄、轻且成本效益高。它的输出电压为3.7V（标称值）。您还可以使用专用充电器为其充电，最大输入电流为1050mA，最大输入电压为4.2V。该电池配有预装的JST 2.0连接器，方便插拔。它还具有内置的过流保护功能，以防止输出短路。**尽管如此，请务必小心使用电池，切勿在无人看管的情况下充电或使用。**

电池电量检测器可以检测输入电压范围为3–4.2伏。它配备了三个JST插座（JST 1.0、JST 2.0和JST 2.0）以及两个电池焊接垫，可以适配不同连接器的电池。当您将电池连接到此电池电量检测器时，板载的四个LED将以百分比指示剩余电量（0–25%、26–50%、51–75%、76–100%）。如果您错误地插入电池连接器，另一个LED将亮起。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Battery-Detector-with-Polymer-Lithium-Ion-1050mAh-3.7V-p-2648.html)

:::note

1. 每次只能测试一个可靠的电池。

2. 如果输入电压超过9伏，将会损坏此电池电量检测器。

3. 切勿在充电时使用电池。
:::

版本追踪
----------------

| 产品版本                                                             | 发布日期     | 支持状态   | 备注   |
|----------------------------------------------------------------------|--------------|------------|--------|
| 带有1050mAh 3.8V聚合物锂离子电池的电池检测器（当前版本）             | 2016年5月    | 支持       | 无     |

特点
--------

**对于电池**

- 配有预装的JST 2.0连接器
- 输出电路短路保护
- 成本效益高

**对于电池电量检测器**

- 电池剩余电量的视觉指示
- 不同的JST插座适配不同的电池连接器

规格
--------------

**对于电池**

| 参数                        | 值                                           |
|-----------------------------|---------------------------------------------|
| 容量                        | 1050 mAh                                    |
| 标称输出电压（DC）          | 3.7伏                                       |
| 连接器                      | JST 2.0                                     |
| 最大充电电流                | 1050 mA                                     |
| 保护                        | 输出电路短路保护                            |
| 重量                        | 19克，整个包装重量为33.5克                  |
| 尺寸                        | 48（宽）×4.9（高）×45（深）毫米             |

**对于电池电量检测器**

| 参数              | 值                                                                                                     |
|-------------------|-------------------------------------------------------------------------------------------------------|
| 输入电压          | 3 – 4.2V                                                                                              |
| 工作电流          | 15 mA                                                                                                 |
| 指示方式          | 四个LED（稍后将详细说明）                                                                             |
| 插座              | 三个插座适配不同电池连接器和两个电池焊接垫（稍后将详细说明）                                          |
| 尺寸              | 30（宽）×25（深）毫米                                                                                |
| CN1185            | [数据手册](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/CN1185_Datasheet.pdf) |
| 重量              | 3.2克                                                                                                 |
| 备注              | 仅将单个电池连接到此模块；输入电压应小于9伏，否则会损坏此模块。                                       |

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
支持（仅适配Grove Beaglebone v2基板）
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

本节展示了电池电量检测器组件的描述。

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**，一个电压监测电路。
- **电池焊接垫**，用于焊接电池的引线。

### **包装内容**（主要部件）

| 部件名称               | 数量     |
|------------------------|----------|
| 锂离子电池             | 1 个     |
| 电池电量检测器         | 1 个     |

入门指南
---------------

按照下图连接电池和电池电量检测器。您可以看到 LED 灯亮起，表示当前剩余电量。

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/img/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/Battery_kit-3.7V_520mAh_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [原理图（Eagle）文件](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/Battery_kit-3.7V_520mAh_Schematics.zip)
- [CN1185 数据手册](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/CN1185_Datasheet.pdf)
- [电池使用数据手册](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V_Battery_Datasheet.pdf)
- [电池安全数据手册及证书](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/Lithium-ion_Battery_3.7v-1050_mAh_Safety_Datasheet_and_Certificates.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V -->

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