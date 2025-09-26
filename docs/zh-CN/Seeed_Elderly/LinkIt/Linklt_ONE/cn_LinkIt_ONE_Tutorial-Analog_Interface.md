---
description: LinkIt ONE 教程 - 模拟接口
title: LinkIt ONE 教程 - 模拟接口
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt_ONE_Tutorial-Analog_Interface
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**我们正在做什么**

在之前的章节中，我们学习了如何使用数字接口控制电路的输入和输出。在本章节中，我们将学习如何使用一种称为电位器（也称为可变电阻）的模拟设备来改变输出。电位器用于在 0 ~ 5V 范围内调节电压。MPU 会读取 0-1023 范围内的电压值。这可以用来控制 LED 的亮度（PWM 模拟输出接口）。如果顺时针旋转电位器，LED 会逐渐变亮。如果逆时针旋转，亮度会逐渐减弱。

**所需物品**

*   LinkIt One x 1

*   面包板 x 1

*   电阻 330Ω、10kΩ、1kΩ 各 1 个

*   5mm LED x 1

*   滑动电位器 10kΩ x 1

*   晶体管（2N3904） x 1

**原理图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/LinkItONE_Kit_6_1.jpg)

**连接图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/LinkItONE_Kit_6_2.jpg)

**代码**

请点击下面的按钮下载套件代码：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

您可以将文件解压到 Arduino IDE 的 **Examples** 文件夹中。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L6_Analog_Ctrl_LED_
```
const int led = 3;
const int pot = A0;

void setup()
{
    // 无需初始化
}

void loop()
{
    int val = analogRead(pot);              // 从电位器获取值
    val = map(val, 0, 1023, 0, 255);        // 将值映射到 0~255
    analogWrite(led, val);                  // 设置 LED 的 PWM
    delay(10);
}
```

**故障排除**

*   接口连接问题？

    *   如果您将输入连接到数字引脚而不是模拟引脚，电路可能无法正常工作。

*   不工作？

    *   电位器有三个引脚。检查是否将中间引脚连接到模拟接口，否则电路可能无法正常工作。

**改进方法**

要使用电位器控制 LED 的闪烁频率，请上传以下代码。

要打开示例代码：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L6_Flashing_LED_

**更多创意**

使用电位器返回值还能做什么？

**参考**
<!-- 
*   [基础知识](/cn/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/cn/LinkIt_ONE_Tutorial-Hello_World)

*   [按钮](/cn/LinkIt_ONE_Tutorial-Push_Button)

*   [跑马灯](/cn/LinkIt_ONE_Tutorial-Marquee)

*   [多彩世界](/cn/LinkIt_ONE_Tutorial-Colorful_World)

*   [模拟接口](/cn/LinkIt_ONE_Tutorial-Analog_Interface)

*   [迷你舵机](/cn/LinkIt-ONE-Tutorial---Mini-Servo)

*   [光传感器](/cn/LinkIt_ONE_Tutorial-Light-Sensor)

*   [短信控制 LED](/cn/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [通过网页获取温度](/cn/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>