---
description: LinkIt ONE 教程 - 微型舵机
title: LinkIt ONE 教程 - 微型舵机
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt-ONE-Tutorial---Mini-Servo
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**我们正在做什么**

舵机（servo motor）通常用于小型机器人和其他机器中，以控制角度位置。它由一个小型齿轮箱包裹，并通过定时控制脉冲进行定位。在本节中，我们将借助电位器来控制微型舵机的角度位置。

**所需物品**

*   LinkIt One x 1
*   扩展板 x 1
*   滑动电位器 10kΩ x 1
*   舵机 x 1

**原理图**

![](https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/LinkItONE_Kit_7_1.jpg)

**连接图**

![](https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/LinkItONE_Kit_7_2.jpg)

**代码**

请点击下面的按钮下载套件代码：

[![](https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

您可以将文件解压到 Arduino IDE 的 **Examples** 文件夹中。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L7_Servo_

```
#include <Servo.h>

Servo myservo;              // 创建舵机对象以控制舵机
int potpin = A0;             // 模拟引脚用于连接电位器
int val;                    // 变量用于读取模拟引脚的值

void setup()
{
    myservo.attach(9);                  // 将舵机连接到引脚 9
}

void loop() {
    val = analogRead(potpin);          // 读取电位器的值（值范围为 0 到 1023）
    val = map(val, 0, 1023, 0, 179);   // 将值映射到舵机使用的范围（值范围为 0 到 180）
    myservo.write(val);                // 根据映射值设置舵机位置
    delay(15);                         // 等待舵机到达目标位置
}
```

**故障排除**

*   舵机有三个引脚，它们根据功能进行颜色编码：黄色 - 模拟端口，红色 - 正极，深棕色 - 地线。因此，请根据其功能进行连接。

*   确保 5V 电源已连接到板子。

**改进方法**

如果微型舵机能够正常工作，我们可以通过使用电位器来调整旋转速度。上传以下代码以实现不同的功能。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L7_Servo_Speed_

**更多想法**

如何同时控制两个舵机，以便制作一个机器人？

**参考**

<!-- *   [基础知识](/cn/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/cn/LinkIt_ONE_Tutorial-Hello_World)

*   [按钮开关](/cn/LinkIt_ONE_Tutorial-Push_Button)

*   [跑马灯](/cn/LinkIt_ONE_Tutorial-Marquee)

*   [多彩世界](/cn/LinkIt_ONE_Tutorial-Colorful_World)

*   [模拟接口](/cn/LinkIt_ONE_Tutorial-Analog_Interface)

*   [微型舵机](/cn/LinkIt-ONE-Tutorial---Mini-Servo)

*   [光传感器](/cn/LinkIt_ONE_Tutorial-Light-Sensor)

*   [短信控制 LED](/cn/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [通过网页获取温度](/cn/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>