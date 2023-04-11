---
description: Project Six – LCD Demonstration
title: Project Six – LCD Demonstration
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Six-LCD_Demonstration
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
Now it is time to demonstrate the LCD module and matching Grove units. With the LCD you can display data or messages within the two line, eight-character display. For this example, connect the wires from the following LCD sockets to the Grove Base Shield:

* right-bottom to D1/2;

* bottom-left to D3/4;

* bottom-right to D5/6;

![](https://files.seeedstudio.com/wiki/Project_Six-LCD_Demonstration/img/Conn-six.jpg)

_**Now upload the following Arduino sketch:**_

```c++
// Project Six - LCD demonstration
//

#include &lt;LiquidCrystal.h&gt;

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

The lcd.clear() functions blanks the LCD screen; lcd.setCursor() moves the cursor to (column, row); and lcd.print(“”); writes text to the cursor position on the LCD.

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
