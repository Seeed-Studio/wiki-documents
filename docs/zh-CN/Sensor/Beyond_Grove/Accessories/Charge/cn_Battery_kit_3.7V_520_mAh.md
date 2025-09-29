---
title: 电池套件 3.7V 520mAh
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Battery_kit_3.7V_520_mAh/
slug: /cn/Battery_kit_3.7V_520_mAh
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Product_View_960.jpg)

电池套件-3.7V 520mAh 包含两个组件：一个 520mAh 锂离子电池和一个电池电量检测器，用于测量锂离子电池的剩余电量。

锂离子电池非常纤薄、轻便且成本效益高。其额定输出电压为 3.7V。您可以使用专用充电器为其充电，充电器的最大输入电流为 520mA，最大输入电压为 4.2V。此电池配备了预装的 JST 1.0 接头，方便插拔。它还内置了过流保护，以防止输出短路。**尽管如此，请务必小心使用电池，切勿滥用。切勿在无人看管的情况下充电或使用电池。**

电池电量检测器可以检测输入电压范围为 3–4.2V。它配备了三个 JST 插座（JST 1.0、JST 2.0 和 JST 2.0）以及两个电池焊接垫，可适配不同接头的电池。当您将电池连接到此电池电量检测器时，板载的四个 LED 将以百分比显示剩余电量（0–25%、26–50%、51–75%、76–100%）。如果您错误地插入电池接头，另一个 LED 将亮起。

**注意**：一次只能测试一个电池。

**注意**：如果输入电压超过 9V，将会损坏此电池电量检测器。

**注意**：切勿在充电时使用电池。

### 版本追踪 ###

| 产品版本 | 发布日期 | 支持状态 | 备注 |
|---|---|---|---|
| 电池套件-3.7V 520mAh（第一版） | 2016年5月 | 支持 | 无 |

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png) ](https://www.seeedstudio.com/depot/Battery-kit37V-520mAh-p-2646.html)

## 特性 ##

**对于电池**

- 配备预装的 JST 1.0 接头

- 输出电路短路保护

- 成本效益高

**对于电池电量检测器**

- 可视化显示电池剩余电量

- 不同的 JST 插座适配不同电池接头

## 规格 ##

**对于电池**

| 项目 | 参数 |
|--|--|
| 容量 | 520mAh |
| 额定输出电压（直流） | 3.7V |
| 接头 | JST 1.0 |
| 最大充电电流 | 520mA |
| 保护 | 输出电路短路保护 |
| 重量 | 11g |
| 尺寸 | 50（宽）×2.5（高）×41（深）mm |

**对于电池电量检测器**

| 项目 | 参数 |
|---|---|
| 输入电压 | 3–4.2V |
| 工作电流 | 15mA |
| 指示方式 | 四个 LED（稍后详细说明） |
| 插座 | 三个适配不同电池接头的插座和两个电池焊接垫（稍后详细说明） |
| 尺寸 | 30（宽）×25（深）mm |
| CN1185 | [数据手册](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/CN1185_Datasheet.pdf) |
| 重量 | 3.2g |
| 备注 | 仅连接一个电池到此模块；输入电压应小于 9V，否则会损坏此模块。 |

### 支持的平台（仅针对电池） ###

| 平台 | Seeeduino/Arduino | Raspberry Pi | Beaglebone | LinkIt ONE |
|--|--|--|--|--|
| 支持状态 | 支持 | 不支持 | 支持（仅适配 [Grove Beaglebone 基础扩展板](https://seeeddoc.github.io/Grove_Base_Cape_for_BeagleBone_v2/)） | 不支持 |
| 备注 | 如果未为特定平台表示版本号，则表示此产品支持该平台的所有版本。|||||

## 硬件概述 ##

本节展示了电池电量检测器组件的描述。

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**，一个电压监测电路。

- **电池焊接垫**，用于焊接电池的引线。

### 包装内容（主要部件） ###

| 部件名称         | 数量       |
|------------------|------------|
| 锂离子电池       | 1 个       |
| 电池电量检测器   | 1 个       |

## 入门指南 ##

按照下图连接电池和电池电量检测器。您可以看到 LED 灯亮起，指示实际剩余电量。

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Battery_power_demo_1200_s.jpg)

## 在线原理图查看器 ##

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery_kit-3.7V_520mAh_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[Eagle]** [原理图（Eagle）文件](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery_kit-3.7V_520mAh_Schematics.zip)
- **[PDF]** [电池检测器 v1.0 PCB](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery%20Detector%20v1.0pcb.pdf)
- **[PDF]** [电池检测器 v1.0 原理图](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-m-ah/res/Battery%20Detector%20v1.0.pdf)
- **[Datasheet]** [CN1185 数据手册](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/CN1185_Datasheet.pdf)
- **[Datasheet]** [电池数据手册](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Lithium-ion_Battery_3.7V-520mAH_Datasheet.pdf)

## 技术支持与产品讨论 ##

如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>