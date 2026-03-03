---
description: LinkIt ONE 教程 - 按钮开关
title: LinkIt ONE 教程 - 按钮开关
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt_ONE_Tutorial-Push_Button
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**我们正在做什么**

在上一章中，我们已经了解了软件和硬件的工作原理。在本章中，我们将学习如何将软件和硬件集成起来控制 LED。按照图 3.2 所示进行面包板连接并上传代码。现在这个电路可以作为一个双向开关工作，当按下左侧按钮开关时，LED 会亮起；当按下右侧按钮开关时，LED 会熄灭。

**所需材料**

*   LinkIt One x 1

*   面包板 x 1

*   电阻 330Ω, 1kΩ x 1

*   电阻 10kΩ x 2

*   5mm LED x 1

*   晶体管 (2N3904) x 1

*   按钮开关 x 2

**原理图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/LinkItONE_Kit_3_1.jpg)

**连接图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/LinkItONE_Kit_3_2.jpg)

**代码**

请点击下面的按钮下载套件代码：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

您可以将文件解压到 Arduino IDE 的 **Examples** 文件夹中。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L3_Control_LED_Button_
```
const int pinLED = 3;                      // LED 连接到 D13

const int btnOn  = 5;                       // 开按钮
const int btnOff = 6;                       // 关按钮

void setup()
{
    pinMode(pinLED, OUTPUT);                // 设置 D13 为输出
    pinMode(btnOff, INPUT);                 // 设置 D2 为输入
    pinMode(btnOn, INPUT);
}

void loop()
{
    if(0 == digitalRead(btnOn))            // 按下开按钮
    {
        digitalWrite(pinLED, HIGH);
    }

    if(0 == digitalRead(btnOff))
    {
        digitalWrite(pinLED, LOW);
    }
}
```

**改进**

保持相同的硬件连接，上传以下代码。当按下左侧按钮开关时，亮度会增强；当按下右侧按钮开关时，亮度会减弱。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L3_Brightness_

**更多想法**

如何修改代码以改变 LED 的闪烁频率？

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

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>