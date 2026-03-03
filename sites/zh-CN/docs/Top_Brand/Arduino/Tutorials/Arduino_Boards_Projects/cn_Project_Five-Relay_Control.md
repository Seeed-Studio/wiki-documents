---
description: 项目五 – 继电器控制
title: 项目五 – 继电器控制
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Project_Five-Relay_Control
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project Five – Relay Control
category: Tutorial
oldwikiname:  Project Five – Relay Control
prodimagename:
surveyurl: https://www.research.net/r/Project_Five-Relay_Control
--- -->

在这个项目中，我们将演示如何使用继电器。使用按钮，按钮一将打开继电器，按钮二将关闭继电器。如前所述，继电器可以处理250V、10安培的峰值电压能力。

即使您可能熟悉低电压和微电子技术，如果您不具备处理市电电压的资格，请咨询持证电工来完成工作。

将双按钮连接到D1/D2输入插孔。

双按钮Grove的红色按钮使用D1连接器向Arduino的D1数字输入发送信号，绿色按钮使用D2连接器向Arduino的D2数字输入发送信号。

将继电器连接到D6/D7输入插孔。

Arduino的D6引脚通过D1连接器向继电器发送信号。继电器Grove的红色指示灯显示继电器是开启还是关闭，继电器在切换时会发出咔嗒声。

![](https://files.seeedstudio.com/wiki/Project_Five-Relay_Control/img/Conn-five.jpg)

_**现在上传以下Arduino代码：**_

```cpp
// Project Five - Relay Control
//

void setup()
{
  pinMode(1, INPUT);
  pinMode(2, INPUT);
  pinMode(6, OUTPUT);
}

void loop()
{
  if (digitalRead(1)==HIGH)
  {
    digitalWrite(6, HIGH);
    delay(100);
  }
  if (digitalRead(2)==HIGH)
  {
    digitalWrite(6, LOW);
  }
}
```

<font color="magenta">
当与XBee载板一起使用时，请注意您应该将输出16设置为低电平，以确保XBee载板上的MOSFET提供足够的功率来可靠地拉入继电器
</font>

在设置继电器为高电平或低电平后使用延迟函数的原因是让代码暂停——这样做会忽略按钮十分之一秒。这通常被称为"软件去抖动"。虽然在这个特定示例中这样做可能看起来不必要，但这样做是一个好习惯。

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