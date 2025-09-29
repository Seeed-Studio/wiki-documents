---
description: Wio Terminal 电池底座
title: Wio Terminal 电池底座
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Battery-Chassis
last_update:
  date: 1/30/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

:::note
1. 此版本的 Wio Terminal 电池底座无法完全关闭电源（不影响使用）。
2. 充电电流可达 1.5A，这可能会缩短电池寿命或导致其他问题。
我们正在优化新版本的设计（预计发布日期尚未确定），如果您是初学者，我们推荐使用新版本。
*如果您在使用此版本期间遇到任何问题，请联系我们 (techsupport@seeed.cc) 获取技术支持或更换。
*通电时请勿让引脚接触其他物体。
:::

Wio Terminal 电池底座是 [Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 开发板的必备扩展板，它为 Wio Terminal 提供外部电源，增强其便携性和紧凑性。它具有 **650mAH 可充电锂聚合物电池、4 个 Grove 模拟/数字端口、1 个 Grove I2C 端口和 1 个 Grove UART 端口，以及用于美观和保护的 ABS 外壳。** Wio Terminal 电池底座背面还有相同的树莓派 40 引脚兼容 GPIO，可用于更多扩展！

使用 [Wio-Terminal 开发板](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) + Wio Terminal 电池底座，您可以轻松构建最强大、最紧凑的物联网项目。通过扩展的 Grove 端口，您可以享受 [Grove 生态系统](https://www.seeedstudio.com/category/Grove-c-1003.html) 的即插即用功能！

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>

## 特性

- 内置 650mAh 可充电锂聚合物电池
- USB Type-C 充电
- 过流保护
- 打嗝模式/打嗝保护
- 4 x Grove 模拟/数字端口
- 1 x Grove I2C 端口
- 1 x Grove UART 端口
- 外壳内隐藏磁铁，可以吸附在白板上！

## 规格

- Wio Terminal 电池底座可通过 USB Type-C 接口或内置电池供电。USB Type-C 的最大输入电流为 2A，输入电压范围为 **4.75V ~ 5.25V。**

- 内置电池是可充电锂聚合物电池，容量为 650mAh。电池输出电压为 3.7V，电池充电电压为 4.2V。
电池只能通过 USB Type-C 接口充电，不能通过母连接器或 Grove 接口充电。

- Wio Terminal 电池底座待机电流小于 300uA。

- 当通过 USB Type-C 接口供电时，Wio Terminal 电池底座具有过流保护，过流保护的电流阈值为 2.5A。

- 当 Wio Terminal 电池底座在电池供电模式下短路时，它将进入打嗝模式。短路消除后，它将自动恢复到正常供电模式。

## 硬件概述

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg" /></div>

## 注意事项

- Wio Terminal 电池底座本身无法输出 3.3V 电压，只能输出 5V 电压。要输出 3.3V，必须与 Wio Terminal 一起使用。
- 当 Wio Terminal 电池底座从电池充电模式切换到电池供电模式时，会有 1.2s 的电压下降时间。
- 默认情况下，当 Wio Terminal 电池底座未连接 USB Type-C 时，由电池供电。插入 USB Type-C 后，自动切换到 USB Type-C 供电。
- 当 Wio Terminal 电池底座插入 USB Type-C 时，它将同时为电池和连接器上的 RPI_5V 引脚供电。此时，电池不会供电。如果锂电池未充满，充电到 100% 后将停止充电。

## 常见问题

充电电流：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/sch.png" /></div>

- 此电阻更改为 **680kΩ/1%** 以将充电电流限制为 **450mA**。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Wio Terminal 电池底座原理图设计文件](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip)

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