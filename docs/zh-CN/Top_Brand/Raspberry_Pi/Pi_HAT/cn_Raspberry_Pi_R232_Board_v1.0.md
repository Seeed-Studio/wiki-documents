---
description: Raspberry Pi RS232 Board v1.0
title: Raspberry Pi RS232 Board v1.0
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Raspberry_Pi_R232_Board_v1.0
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi-R232-Board-v1.0.jpg)

Raspberry Pi RS232 Board v1.0 是工业设备的标准通信端口。该模块基于 MAX3232，这是一个双驱动器/接收器，包含一个电容式电压发生器，可从单个 5V 电源提供 TIA/EIA-232-F 电压电平。该扩展板集成了 DB9 连接器（母头），可连接各种具有 RS232 接口的设备。此外，RS232 引脚头将便于您的连接和调试。它提供焊接区域以充分利用其上的额外空间，这对于原型制作非常方便。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-RS232-Board-v1.0-p-2408.html)

特性
--------

- 低供电电流：300μA
- 保证数据速率：120kbps
- 在低至 3.0V 时满足 EIA/TIA-232 规范
- 与工业标准 MAX232 引脚兼容
- 保证转换速率：6V/μs
- LED 指示灯
- DB9 连接器（母头）

规格参数
-------------

<table border={1} cellSpacing={0} style={{width: 500, height: 442}} width={800}>
  <tbody>
    <tr>
      <th align="center" scope="col" style={{width: '50%'}}>项目</th>
      <th align="center" scope="col">最小值</th>
      <th align="center" scope="col">典型值</th>
      <th align="center" scope="col">最大值</th>
      <th align="center" scope="col">单位</th>
    </tr>
    <tr>
      <th scope="row">输入电压范围</th>
      <td align="center">-25</td>
      <td align="center">/</td>
      <td align="center">25</td>
      <td align="center">V</td>
    </tr>
    <tr>
      <th scope="row">输入低阈值(VCC=3.3V/5.0V)</th>
      <td align="center">0.6 / 0.8</td>
      <td align="center">1.2 / 1.5</td>
      <td align="center">/</td>
      <td align="center">V</td>
    </tr>
    <tr>
      <th scope="row">输入高阈值 (VCC=3.3V/5.0V)</th>
      <td align="center">/</td>
      <td align="center">1.5 / 1.8</td>
      <td align="center">2.4 / 2.4</td>
      <td align="center">V</td>
    </tr>
    <tr>
      <th scope="row">最大数据速率</th>
      <td align="center">120</td>
      <td align="center">235</td>
      <td align="center"></td>
      <td align="center">kHz</td>
    </tr>
    <tr>
      <th scope="row">工作温度</th>
      <td align="center">0</td>
      <td align="center">/</td>
      <td align="center">70</td>
      <td align="center">℃</td>
    </tr>
    <tr>
      <th scope="row">尺寸</th>
      <td align="center" colSpan={3}>91.20 *56.15*32</td>
      <td align="center">mm</td>
    </tr>
  </tbody>
</table>

硬件概述
------------------

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p2.jpg)

如果您想连接到树莓派，UART 引脚必须进行跳线连接。

使用方法
-----

使用串行 COM 端口在树莓派上配置系统。

### 硬件安装

1. 树莓派和 USB 转串行 COM 端口线。

2. 按照下图进行连接：

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p5.jpg)

3. 在您 PC 的设备管理器中找出使用的是哪个 COM 端口。
4. 运行串口助手，并按如下设置：

    COM 必须设置为您在 PC 设备管理器中找到的端口。然后给您的树莓派上电。您可以看到串口助手如下所示。

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p6.jpg)

5. 成功与树莓派进行通信。

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p4.jpg)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/Raspberry_Pi_RS232_Board_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- [Raspberry_Pi_RS232_Board_v1.0_sch_pcb](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/Raspberry_Pi_RS232_Board_v1.0_sch_pcb.zip)
- [MAX3232](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/MAX3232.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0 -->

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