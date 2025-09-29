---
description: 项目三 – 模拟输入 v1.0b
title: 项目三 – 模拟输入 v1.0b
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Project_Three-Analog_Input_v1b
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project Three – Analog Input v1.0b
category: Tutorial
oldwikiname:  Project Three – Analog Input v1.0b
prodimagename:
surveyurl: https://www.research.net/r/Project_Three-Analog_Input_v1b
--- -->

本示例的目的是演示使用电位器 Grove 进行模拟输入的一种形式。我们将使用它来设置项目一中闪烁LED的延迟时间。

将LED模块连接到D1/D2数字I/O接口，就像在项目1和项目2中一样。
Arduino引脚D1为LED Grove的SIG连接器供电，Arduino引脚D2连接到LED Grove的NC连接器。

将电位器模块连接到模拟A0/A1输入接口。

电位器模块在其SIG输出上产生模拟电压，该输出连接到A0/A1输入接口上的Arduino A0模拟输入。

![](https://files.seeedstudio.com/wiki/Project_Three-Analog_Input_v1b/img/Analog_Input_v1.0b.jpg)

_**现在上传以下Arduino代码：**_

```cpp
// Project Three - Analog Input
//

void setup()
{
  pinMode(1, OUTPUT);
}

void loop()
{
  digitalWrite(1, HIGH);
  delay(analogRead(0));
  digitalWrite(1, LOW);
  delay(analogRead(0));
}
```

最大延迟值是1023，因为这是analogRead()函数返回值的上限。您可以使用数学函数来增加或缩小延迟的范围。

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