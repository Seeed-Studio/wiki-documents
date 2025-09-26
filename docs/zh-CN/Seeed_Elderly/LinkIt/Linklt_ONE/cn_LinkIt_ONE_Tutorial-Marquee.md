---
description: LinkIt ONE 教程 - 跑马灯
title: LinkIt ONE 教程 - 跑马灯
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt_ONE_Tutorial-Marquee
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**我们正在做什么**

前面章节的实验仅使用了一个 LED，而为了展示炫目的灯光效果，我们将使用三个 LED。按照图 4.2 所示进行连接，并上传以下代码，观察发生的变化。

**所需材料**

*   LinkIt One x 1
*   扩展板 x 1
*   电阻 330Ω, 1kΩ x 3
*   5mm LED x 3
*   晶体管 (2N3904) x 3

**原理图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/LinkItONE_Kit_4_1.jpg)

**连接图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/LinkItONE_Kit_4_2.jpg)

**代码**

请点击下面的按钮下载套件代码：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

您可以将文件解压到 Arduino IDE 的 **Examples** 文件夹中。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L4_Control_LEDs_

```
const int pinLed1    = 2;                       // LED1 的引脚
const int pinLed2    = 3;                       // LED2 的引脚
const int pinLed3    = 4;                       // LED3 的引脚

void setup()
{
    pinMode(pinLed1, OUTPUT);                   // 设置所有引脚为输出模式
    pinMode(pinLed2, OUTPUT);
    pinMode(pinLed3, OUTPUT);
}

void loop()
{
    digitalWrite(pinLed4, LOW);                 // LED4 关闭
    digitalWrite(pinLed1, HIGH);                // LED1 打开
    delay(100);

    digitalWrite(pinLed1, LOW);                 // LED1 关闭
    digitalWrite(pinLed2, HIGH);                // LED2 打开
    delay(100);

    digitalWrite(pinLed2, LOW);                 // LED2 关闭
    digitalWrite(pinLed3, HIGH);                // LED3 打开
    delay(100);

    digitalWrite(pinLed3, LOW);                 // LED3 关闭
    digitalWrite(pinLed4, HIGH);                // LED4 打开
    delay(100);
}
```

**故障排除**

*   检查 LED 的极性。
*   确保 LED 已连接到正确的端口引脚。

**改进效果**

上传以下代码并保持相同的面包板连接，以获得不同的闪烁效果。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L4_Control_LEDs_Speed_

**更多创意**

修改现有代码，使 LED 闪烁频率增加。

**参考**

<!-- *   [基础知识](/cn/LinkIt_ONE_Tutorial-The_Basics)

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

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>