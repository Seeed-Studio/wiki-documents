---
description: Wio Terminal电池底座
title: Wio Terminal电池底座
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Battery-Chassis
last_update:
  date: 3/05/2024
  author: 金菊
---


![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

:::注
1. 这个版本的Wio Terminal电池底盘无法完全关闭电源（不影响使用）。
2. 充电电流将达到1.5A，可能会缩短电池寿命或引起其他问题。
我们正在优化新版本的设计（预计发布日期尚不可用），如果您是初学者，我们推荐使用新版本。
*如果在使用此版本时遇到任何问题，请与我们联系（techsupport@seeed.cc）进行技术支持或更换。
*请勿在电源打开时让引脚接触其他物体。
:::

Wio Terminal电池底座是 [Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 开发板的必备扩展板，它为Wio Terminal提供外部电源，增强了其便携性和紧凑性。它具有 **650mAh的可充电锂聚合物电池, 4个Grove模拟/数字端口, 1个Grove I2C端口和1个Grove UART端口, 以及用于美观和保护的ABS外壳** ，Wio Terminal电池底座的背面还有与树莓派40引脚兼容的GPIO接口，可用于添加更多扩展！

通过 [Wio-Terminal 开发板](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) + Wio Terminal电池底座, 您可以轻松构建最强大、最紧凑的物联网项目。借助扩展的Grove端口，您可以享受 [Grove 生态系统](https://www.seeedstudio.com/category/Grove-c-1003.html)的即插即用功能!

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html"><strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div>

## 特点

- 内置650mAh可充电锂聚合物电池
- USB Type-C充电
- 过电流保护
- Hiccup模式/保护
- 4个Grove模拟/数字端口
- 1个Grove I2C端口
- 1个Grove UART端口
- 外壳内部隐藏有磁铁，可以粘贴在白板上！

## 规格

- Wio Terminal电池底座可以通过USB Type-C接口或内部电池供电。USB Type-C的最大输入电流为2A，输入电压范围为 **4.75V ~ 5.25V.**。

- 内置电池是可充电锂聚合物电池，容量为650mAh。电池输出电压为3.7V，电池充电电压为4.2V。
电池只能通过USB Type-C接口充电，不能通过女性连接器或Grove接口充电。

- Wio Terminal电池底座的待机电流小于300uA。

- 当通过USB Type-C接口供电时，Wio Terminal电池底座具有过流保护功能，过流保护的电流阈值为2.5A。
- 当Wio Terminal电池底座在电池供电模式下发生短路时，它将进入Hiccup模式。短路解除后，它将自动返回正常供电模式。

## 硬件概述

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg" /></div>

## 注意事项

- Wio Terminal电池底座不能自身输出3.3V电压，只能输出5V电压。要输出3.3V电压，必须与Wio Terminal一起使用。
- 当Wio Terminal电池底座从电池充电模式切换到电池供电模式时，将有1.2秒的电压下降时间。
- 默认情况下，当Wio Terminal电池底座未连接到USB Type-C时，它由电池供电。插入USB Type-C后，它会自动切换到USB Type-C供电。
- 当Wio Terminal电池底座插入USB Type-C时，它将为电池和连接器上的RPI_5V引脚提供电源。此时，电池将不会供电。如果锂电池未充满，充电到100%后将停止充电。

## 常见问题

充电电流：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/sch.png" /></div>

- 将此电阻更改为 **680kΩ/1%** 以将充电电流限制为 **450mA**。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Wio Terminal电池底座原理图设计文件](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip)

## 技术支持&产品讨论


感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们的产品的体验尽可能顺畅。我们提供了几种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
