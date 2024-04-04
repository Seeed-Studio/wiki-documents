---
title: I2C端口
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-IO-I2C/
slug: /cn/Wio-Terminal-IO-I2C
last_update:
  date: 3/10/2024
  author: 金菊
---

# 在Wio Terminal上使用Grove I2C端口

这个仓库演示了如何在Wio Terminal上使用Grove I2C端口，您可以直接与Grove生态系统进行插拔式功能的使用！

## 端口配置

要在Wio Terminal上使用Grove I2C端口，只需将使用I2C的Grove传感器连接到Wio Terminal上的物理I2C端口即可。

**Note:** 记得在Arduino IDE中包含传感器库。有关更多信息，请参考 [如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) 。

## 示例代码

在这个示例中，使用了一个Grove LCD来演示。这是RGB LCD库中的 `HelloWorld` 示例。

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

const int colorR = 255;
const int colorG = 0;
const int colorB = 0;

void setup()
{
    // set up the LCD's number of columns and rows:
    lcd.begin(16, 2);
    
    lcd.setRGB(colorR, colorG, colorB);
    
    // Print a message to the LCD.
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // set the cursor to column 0, line 1
    // (note: line 1 is the second row, since counting begins with 0):
    lcd.setCursor(0, 1);
    // print the number of seconds since reset:
    lcd.print(millis()/1000);

    delay(100);
}
```

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您对我们的产品拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
