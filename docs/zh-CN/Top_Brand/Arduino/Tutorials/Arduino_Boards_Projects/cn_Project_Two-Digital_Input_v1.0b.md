---
description: 项目二 - 数字输入 v1.0b
title: 项目二 - 数字输入 v1.0b
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Project_Two-Digital_Input_v1.0b
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: Project Two - Digital Input v1.0b
category: Tutorial
oldwikiname:  Project Two - Digital Input v1.0b
prodimagename:
surveyurl: https://www.research.net/r/Project_Two-Digital_Input_v1b
--- -->

本项目的目的是演示两种数字输入形式 - 使用按钮 Grove 和倾斜开关 Grove。按下按钮将点亮LED，激活倾斜开关也将点亮LED。

**接线：**

1. 将LED模块连接到D1/D2数字I/O接口，就像在项目1中一样。

2. Arduino引脚D1通过Grove的SIG连接器为LED供电，Arduino引脚D2连接到LED Grove的NC连接器。

3. 将倾斜开关Grove连接到D5/D6数字I/O接口。

4. 倾斜开关Grove的SIG连接器向Arduino的D5数字输入发送高电平或低电平信号。

5. 将按钮模块连接到D7/D8输入接口（在第二行）。

6. 按钮Grove使用SIG连接器向Arduino的D7数字输入发送信号。
![](https://files.seeedstudio.com/wiki/Project_Two-Digital_Input_v1.0b/img/Digitalv1.0b.jpg)

_**现在上传以下Arduino代码：**_

```cpp
// Project Two - Digital Inputs
//

void setup()
{
  pinMode(1, OUTPUT);
  pinMode(5, INPUT);
  pinMode(7, INPUT);
}

void loop()
{

if (digitalRead(5)==HIGH)
  {
    digitalWrite(1, HIGH);
    delay(100);
    digitalWrite(1, LOW);
  }

  if (digitalRead(7)==HIGH)
  {
    digitalWrite(1, HIGH);
    delay(200);
    digitalWrite(1, LOW);
  }

}
```

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