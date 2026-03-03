---
description: LinkIt ONE 教程 - 光传感器
title: LinkIt ONE 教程 - 光传感器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt_ONE_Tutorial-Light-Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**我们正在做什么**

现在是时候了解一些新的传感器了，这些传感器可以让我们的项目更加有趣。光敏电阻（光依赖电阻或光电池）是一种光传感器，其电阻值会根据环境光的强度变化。蜂鸣器是一种电声设备，当连接到电源时可以产生标准音调。让我们在实验中使用这些组件。

**所需物品**

*   LinkIt One x 1

*   面包板 x 1

*   电阻 10kΩ, 1kΩ, 330Ω 各 1 个

*   蜂鸣器 x 1

*   光敏电阻 x 1

*   晶体管（2N3904）x 1

**原理图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/LinkItONE_Kit_8_1.jpg)

**连接图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/LinkItONE_Kit_8_2.jpg)

**代码**

请点击下面的按钮下载套件代码：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

您可以将文件解压到 Arduino IDE 的 **Examples** 文件夹中。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L8_Light_Control_Buzzer_
```
const int pinBuz   = 3;                        // LED 引脚定义
const int pinLight = A0;                       // 光传感器引脚定义

void setup()
{
    pinMode(pinBuz, OUTPUT);
    pinMode(pinLight, INPUT);
}

void loop()
{
    int value = analogRead(pinLight);
    value = map(value, 0, 1023, 255, 0);
    analogWrite(pinBuz, value);
    delay(100);
}
```
**故障排除**

*   光敏功能不起作用？

    *   光敏电阻的引线间距不标准，容易导致引线短路。请仔细检查。

*   没有声音？

    *   蜂鸣器的引线非常短。请仔细检查是否正确插入面包板。

**让它更好**

让我们进一步使用光敏电阻控制蜂鸣器的音调。如果改变光敏电阻上的光强度，可以生成不同的音调。上传以下代码并观察差异。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L8_Buzzer_Music_

**更多创意**

我们可以使用光电池制作更多有趣的应用。试着制作一个光敏圣诞礼物。

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