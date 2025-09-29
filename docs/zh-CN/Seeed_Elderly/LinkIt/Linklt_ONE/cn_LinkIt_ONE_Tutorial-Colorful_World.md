---
description: LinkIt ONE 教程 - 多彩世界
title: LinkIt ONE 教程 - 多彩世界
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt_ONE_Tutorial-Colorful_World
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**我们正在做什么**

我们现在已经知道如何控制 LED，让我们结合一些关于颜色混合的基本概念。R-红色、G-绿色、B-蓝色是三原色，这些颜色以不同比例混合时会产生不同的颜色。一个 RGB LED 由四个引脚组成，长引脚是正极端子，其他三个引脚用于控制 RGB 颜色。按照图 5.2 所示进行连接并上传代码。

**所需材料**

*   LinkIt One x 1
*   面包板 x 1
*   电阻 330Ω、10kΩ、1kΩ x 3
*   8mm RGB LED x 1
*   晶体管（2N3904） x 3
*   按钮 x 3

**原理图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//LinkItONE_Kit_5_1.jpg)

**连接图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//LinkItONE_Kit_5_2.jpg)

**代码**

请点击下面的按钮下载套件代码：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

您可以将文件解压到 Arduino IDE 的 **Examples** 文件夹中。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L5_Color_Pannel_

```cpp
const int ledR = 2;
const int ledB = 3;
const int ledG = 4;

const int buttonR = 5;
const int buttonG = 6;
const int buttonB = 7;

void setup()
{
    pinMode(ledR, OUTPUT);                          // 设置所有 LED 引脚为输出
    pinMode(ledG, OUTPUT);
    pinMode(ledB, OUTPUT);

    pinMode(buttonR, INPUT);                        // 设置所有按钮引脚为输入
    pinMode(buttonG, INPUT);
    pinMode(buttonB, INPUT);
}

void loop()
{
    int stateR = 1-digitalRead(buttonR);            // 获取按钮状态
    int stateG = 1-digitalRead(buttonG);
    int stateB = 1-digitalRead(buttonB);

    digitalWrite(ledR, stateR);                     // 设置 LED
    digitalWrite(ledG, stateG);
    digitalWrite(ledB, stateB);

    delay(10);
}
```

**故障排除**

*   显示错误的颜色

    *   由于 LED 有四个引脚，连接错误的可能性较高，请确保所有控制引脚连接到正确的端子。

*   红色偏重？

    *   在 RGB LED 中，红色的亮度比其他两种颜色在相同电压下更高。为了使整体颜色调和，可以尝试使用更大的电阻值来降低红色 LED 的亮度。

**让它更好**

想要获得更多颜色吗？可以使用两个按钮来调整 RGB 值的逐步增加。这样我们可以找到更多颜色。尝试构建连接两个模拟输出接口的电路（RGB 值逐步增加或减少）。代码已经定义好以实现这一点。（PWM 模拟输出，您可以获得 0-1023 的模拟输出返回值。）

要打开示例代码：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L5_Colourful_RGB_

**更多想法**

如何扩展代码以降低 RGB 值？

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

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>