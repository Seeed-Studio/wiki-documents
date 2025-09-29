---
description: LinkIt ONE 教程 - Hello World
title: LinkIt ONE 教程 - Hello World
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt_ONE_Tutorial-Hello_World
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**我们正在做什么**

在上一节中，我们了解了如何使用电子元件控制 LED，现在让我们通过软件来实现 LED 的自动控制。您只需上传本节提供的代码即可。代码的初始功能是打开 LED，延迟 3 秒后关闭 LED。让我们开始使用 LinkIt 开发板吧。

**所需物品**

*   LinkIt One x 1

*   扩展板 x 1

*   电阻 330Ω, 1kΩ x 1

*   5mm LED x 1

*   晶体管（2N3904）x 1

**原理图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_1_1.jpg)

**连接图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_1_2.png)

**代码**

请点击下面的按钮下载套件代码：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

您可以将文件解压到 Arduino IDE 的 **Examples** 文件夹中。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L2_Control_LED_
```
const int pinLED = 3;                      // LED 连接到 D13

void setup()
{
    pinMode(pinLED, OUTPUT);                // 设置 D13 为输出方向
}

void loop()
{
    digitalWrite(pinLED, HIGH);             // LED 开
    delay(3000);
    digitalWrite(pinLED, LOW);              // LED 关
    delay(100);
}
```

**故障排除**

*   上传代码时遇到问题？

    *   在这种情况下，可能的问题是传输端口选择错误。您需要将其修改为 "Tools -> Serial port ->"。

*   无法停止运行？

    *   如果您的代码正在运行一个无限循环，您可以通过断开开发板的电源来终止进程。

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_2_3.jpg)

**让它更好**

在上一节中，我们使用了电容器来让 LED 的亮度逐渐增加并缓慢减弱。现在让我们通过纯粹修改代码来实现相同的效果，而无需使用电容器。

要打开示例代码：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L2_Breath_LED_

**更多想法**

如何通过修改代码来改变 LED 的频率？

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

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>