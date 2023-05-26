---
title: I2C
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-IO-I2C/
slug: /Wio-Terminal-IO-I2C
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Using the Grove I2C Port on Wio Terminal

This repo demonstrates how to use the Grove I2C Port on Wio Terminal, you can simply use this plug and play functionality with the Grove Ecosystem!

## Port Configurations

To use the Grove I2C port on Wio Terminal, Simply connect your Grove sensor that uses I2C to the physical I2C port on Wio Terminal.

**Note:** Remember to include the Sensor libraries in Arduino IDE. Refer to this [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) for more information.

## Example Code

In this example, a Grove LCD is used to demonstrate. This is the `HelloWorld` example from the RGB LCD libabry.

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

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
