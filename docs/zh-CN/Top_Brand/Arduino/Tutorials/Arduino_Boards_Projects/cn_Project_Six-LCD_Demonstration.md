---
description: 项目六 – LCD 演示
title: 项目六 – LCD 演示
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Project_Six-LCD_Demonstration
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project Six – LCD Demonstration
category: Tutorial
oldwikiname:  Project Six – LCD Demonstration
prodimagename:  
surveyurl: https://www.research.net/r/Project_Six-LCD_Demonstration
--- -->
现在是时候演示 LCD 模块和匹配的 Grove 单元了。使用 LCD，您可以在两行八字符显示屏上显示数据或消息。对于此示例，将以下 LCD 插座的线连接到 Grove Base Shield：

* 右下角连接到 D1/2；

* 左下角连接到 D3/4；

* 右下角连接到 D5/6；

![](https://files.seeedstudio.com/wiki/Project_Six-LCD_Demonstration/img/Conn-six.jpg)

_**现在上传以下 Arduino 代码：**_

```cpp
// Project Six - LCD demonstration
//

#include <LiquidCrystal.h>

LiquidCrystal lcd(1,2,3,4,5,6);

void setup()
{
  lcd.begin(8,2);
}

void loop()
{
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("01234567");
  lcd.setCursor(0,1);
  lcd.print("ABCDEFGH");
  delay(65000);
}
```

lcd.clear() 函数清空 LCD 屏幕；lcd.setCursor() 将光标移动到（列，行）位置；lcd.print(""); 在 LCD 上的光标位置写入文本。

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