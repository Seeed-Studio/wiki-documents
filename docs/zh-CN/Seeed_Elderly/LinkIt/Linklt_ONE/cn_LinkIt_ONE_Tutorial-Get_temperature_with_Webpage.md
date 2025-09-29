---
description: LinkIt ONE 教程 - 使用网页获取温度
title: LinkIt ONE 教程 - 使用网页获取温度
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**我们正在做什么**

LinkIt ONE 具有 Wi-Fi 通信功能。我们通过 LinkIt ONE 收集了一些数据，并作为互联网 AP 提供数据访问支持，通过 Web 服务器访问。通过浏览器访问对应的 IP 地址即可获取数据。接下来，您需要连接电路，从温度传感器采集数据。然后安装好 Wi-Fi 天线并连接到网络，请选择网络并填写三个参数：网络名称（WiFi_AP）、访问密码（WIFI_PASSWORD）以及路由器的传输模式（选项 LWIFI_OPEN、LWIFI_WPA、LWIFI_WEP）。最后，将代码上传到 LinkIt ONE。使用带网络的终端设备，打开浏览器并输入 IP 地址即可获取温度数据。（通过 DHCP 路由器访问分配的 IP 地址）

**所需物品**

*   LinkIt ONE x 1

*   面包板 x 1

*   电阻 330Ω x 1
*   Wi-Fi 天线 x 1

**原理图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/LinkItONE_Kit_10_1.jpg)

**连接图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/LinkItONE_Kit_10_2.jpg)

**代码**

请点击下方按钮下载套件代码：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

您可以将文件解压到 Arduino IDE 的 **Examples** 文件夹中。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L10_Web_Temp_

**注意**：您需要打开串行监视器并输入任意内容以启动程序。

**故障排除**

*   天线无法工作？

    *   请检查天线连接是否稳定。（天线插座位于背面，标记为 Wi-Fi/BT ANT）

*   IP 地址在哪里？

    *   首先调整串行模式（DEBUG -> MOLDE），您可以通过串口查询。点击编译器右上角的放大图标，标准查询分配的 IP 地址。（请点击此步骤更改 Tools -> Port -> COMX）

**优化改进**

想要实时更改数据吗？我们通过 Web 端口监控光敏值的变化。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L10_Web_Temp_Advanced_

**更多想法**

如果想通过网页控制 LinkIt ONE，该如何控制硬件的工作呢？

**参考**
<!-- 
*   [基础知识](/cn/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/cn/LinkIt_ONE_Tutorial-Hello_World)

*   [按钮控制](/cn/LinkIt_ONE_Tutorial-Push_Button)

*   [跑马灯](/cn/LinkIt_ONE_Tutorial-Marquee)

*   [多彩世界](/cn/LinkIt_ONE_Tutorial-Colorful_World)

*   [模拟接口](/cn/LinkIt_ONE_Tutorial-Analog_Interface)

*   [迷你舵机](/cn/LinkIt-ONE-Tutorial---Mini-Servo)

*   [光传感器](/cn/LinkIt_ONE_Tutorial-Light-Sensor)

*   [短信控制 LED](/cn/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [使用网页获取温度](/cn/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>