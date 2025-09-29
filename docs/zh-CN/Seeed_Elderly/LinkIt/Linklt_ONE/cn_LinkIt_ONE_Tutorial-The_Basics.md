---
description: LinkIt ONE 教程 - 基础知识
title: LinkIt ONE 教程 - 基础知识
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt_ONE_Tutorial-The_Basics
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**我们要做什么**

让我们使用晶体管、LED 和一个拨动开关来构建一个简单的电路。发光二极管（LED）将电能转化为可见光。晶体管是电子学中的基本元件，充当开关或电流放大器。在这里，我们使用开关通过晶体管间接控制 LED 的开关。

**所需材料**

*   LinkIt One x 1
*   面包板 x 1

*   电阻 330Ω, 1kΩ 各 1 个

*   5mm LED x 1

*   开关 x 1
*   晶体管 (2N3904) x 1

**原理图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-The_Basics/img/LinkItONE_Kit_0_1.jpg)

**连接图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-The_Basics/img/LinkItONE_Kit_0_2.jpg)

**故障排除**

*   确保 LED 的极性正确（长引脚为正极，短引脚为负极）。

*   检查是否短接了开关的两个引脚。

*   确保电路中没有遗漏晶体管连接（驱动 LED 需要晶体管）。

*   LED 烧毁了..？
    *   如果忘记连接作为电流限制器的输入电阻，就会发生这种情况。

**改进电路**

现在我们已经制作了一个简单的控制电路。通过添加另一个元件——电容器，可以让它更有趣。电容器就像一个临时的电荷存储设备。如果电容器与串联在 LED 上的电阻并联连接，它会使 LED 渐渐熄灭。当开关打开时，电容器充电；当开关关闭时，电容器中的存储电荷会慢慢释放，从而使 LED 渐渐熄灭。

**更多想法**

什么元件可以让 LED 在打开时逐渐变亮？

**参考**

<!-- *   [基础知识](/cn/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/cn/LinkIt_ONE_Tutorial-Hello_World)

*   [按钮开关](/cn/LinkIt_ONE_Tutorial-Push_Button)

*   [跑马灯](/cn/LinkIt_ONE_Tutorial-Marquee)

*   [多彩世界](/cn/LinkIt_ONE_Tutorial-Colorful_World)

*   [模拟接口](/cn/LinkIt_ONE_Tutorial-Analog_Interface)

*   [迷你舵机](/cn/LinkIt-ONE-Tutorial---Mini-Servo)

*   [光传感器](/cn/LinkIt_ONE_Tutorial-Light-Sensor)

*   [短信控制 LED](/cn/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [通过网页获取温度](/cn/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>