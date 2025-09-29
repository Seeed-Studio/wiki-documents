---
title: I2C
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Terminal-IO-I2C/
slug: /cn/Wio-Terminal-IO-I2C
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 在 Wio Terminal 上使用 Grove I2C 端口

本仓库演示了如何在 Wio Terminal 上使用 Grove I2C 端口，您可以简单地使用这个即插即用功能与 Grove 生态系统配合使用！

## 端口配置

要在 Wio Terminal 上使用 Grove I2C 端口，只需将使用 I2C 的 Grove 传感器连接到 Wio Terminal 上的物理 I2C 端口即可。

**注意：** 记得在 Arduino IDE 中包含传感器库。更多信息请参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)。

## 示例代码

在这个示例中，使用了 Grove LCD 来进行演示。这是来自 RGB LCD 库的 `HelloWorld` 示例。

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