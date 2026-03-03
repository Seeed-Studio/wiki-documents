---
description: 项目一 - 双闪烁
title: 项目一 - 双闪烁
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Project_One-Double_Blink
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project One - Double Blink
category: Tutorial
oldwikiname:  Project One - Double Blink
prodimagename:  
surveyurl: https://www.research.net/r/Project_One-Double_Blink
--- -->
本项目的目的是演示使用LED Grove的简单数字输出显示。按照下图所示连接您的设备：
将LED Grove连接到Grove扩展板上的D1/D2数字I/O接口。
Arduino引脚D1为Grove的D1连接器上的红色LED供电，Arduino引脚D2为Grove的D2连接器上的绿色LED供电。

![](https://files.seeedstudio.com/wiki/Project_One-Double_Blink/img/Conn-one.jpg)

_**现在上传以下Arduino代码：**_

```
// Project One - Double Blink
//

int del=500; // adjust for blink rate

void setup()
{
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
}

void loop()
{
    digitalWrite(1, HIGH);
    digitalWrite(2, LOW);
    delay(del);
    digitalWrite(1, LOW);
    digitalWrite(2, HIGH);
    delay(del);
}
```

如您所见，这非常简单。两个LED交替闪烁，两者之间的延迟由变量del设置。然而，通过这样做，您可以亲身体验Grove系统的使用是多么简单。

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