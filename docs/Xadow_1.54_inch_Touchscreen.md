---
name: Xadow 1.54'' Touchscreen
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-1.54-inch-Touchscreen-p-2553.html
oldwikiname: Xadow 1.54'' Touchscreen
prodimagename: Xadow_1.54%E2%80%99%E2%80%99_Touchscreen.JPG
surveyurl: https://www.research.net/r/Xadow_1_54_Touchscreen
sku: 104040002
---

---
If you have used or heard about Rephone, the world's first open source and modular phone, you will not be strange with the product we are going to talk about. Yes! The Xadow 1.54'' Touchscreen is right just the touchscreen that Rephone uses.

This TFT Display contains 240 x 240 pixels that can be controlled individually to display up to 262K colors. Above the display is a layer of a capacitive touchscreen, offering 29.4mm x 29.4mm active area at the center of the display. As a single touch screen, it can detect finger presses anywhere within the active area during normal operations. The TFT driver gets the ST7789S IC Driver inside with 2-bit data and 4-bit control serial interface while the capacitive touchscreen controller uses I2C.

![](https://github.com/SeeedDocument/Xadow_1.54_Inch_Touchscreen/raw/master/images/Xadow_1.54%E2%80%99%E2%80%99_Touchscreen.JPG)

!!!Note
    We have few modifications to library of Xadow 1.54" Touchscreen. Please refer to the **Notice** section for detail information.

### Version Tracker

|Product |Version|	Release date|	Support status|	Notes|
|---|---|---|---|---|
|Xadow 1.54" Touchscreen|(v1.0, older version)|	Oct 2015	|Supported	|None|
|Xadow 1.54" Touchscreen|(v1.1, latest version)|	June 2016	|Supported|	None|

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/Xadow-1.54-inch-Touchscreen-p-2553.html)

## Features
---
- 240 x 240 resolution
- Display up to 262K colors
- 4x 2mm/0.9” mounting holds
- Built-in Xadow Connectors for easy pluggable FPC cables
- Perfect choice for your DIY phone project

## Specification
---

|General|Value|
|---|---|
|**TFT Driver**|	ST7789S|
|**Touchscreen** |Type	Capacitive|
|**Backlight**|	3 adjustable while LEDs|
|**Current draw**|	~ 100mA at full backlight|
|**Resolution**|240 × 240 pixels|
|**Connectors**|2 × 35 PIN Xadow Connectors for Xadow <br>GSM+BLE & Xadow Audio
|**Interfaces**| Four-wire serial interface for TFT display<br> I2C for touchscreen

**Dimensions**

|Item |Unit(mm)|Unit(inch)|
|---|---|---|
|Board | 50.22mm × 47.21mm   |1.98” × 1.86”|
|Touchscreen | 38.1mm × 37.8mm |1.51”× 1.51”|
|Active Area | 27.72mm × 27.72mm  |1.09” × 1.09”|
|Mounting holds|4 × 2mm|4 x 0.9”|

## Hardware Overview
---
![](https://github.com/SeeedDocument/Xadow_1.54_Inch_Touchscreen/raw/master/images/Xadow_1.54%E2%80%99%E2%80%99_Touchscreen.png)

!!!Warning
    Please insert controller, such as Xadow GSM+BLE to the **RIGHT** port, and insert the Audio module to the **LEFT** port.


## Notice
---
- The product is not as tough as it looks, so try to use it in a stable environment as an abrupt variation of temperature and humidity may cause malfunction of the panel.
- Try to keep the panel surface clean and avoid any adhesive applied on the surface, if you have to clean the screen, we recommend you to use clean and  soft cloth with neutral detergent or isopropyl alcohol.
- Note that we have few modifications to library of Xadow 1.54" Touchscreen for newer version. If you are using Xadow 1.54" Touchscreen v1.1:
  - For development environment of JavaScript, Lua, and Arduino or using - RePhone Create Kit source code, you need to comment the corresponding line #define _TOUCH_SCREEN_V1_0_ and un-comment(enable) the line //#define _TOUCH_SCREEN_V1_1_. We have provided those corresponding lines at:
    - https://github.com/Seeed-Studio/Arduino_IDE_for_RePhone/blob/master/hardware/arduino/mtk/libraries/LDisplay/utility/lcd_sitronix_st7789s.h.
    - https://github.com/Seeed-Studio/JavaScript_for_RePhone/blob/master/src/lcd_sitronix_st7789s.h.
    - https://github.com/Seeed-Studio/Lua_for_RePhone/blob/master/src/lcd_sitronix_st7789s.h
    - https://github.com/WayenWeng/RePhone_Create_Kit_Source_Code/blob/master/RePhone_Create_Source_Code/lcd_sitronix_st7789s.h
  - For .VXP file of RePhone Create Kit, please change the line App=C:\MRE\RePhone_Create_Kit_v6_4_TP_v1_x.vxp to be App=C:\MRE\RePhone_Create_Kit_v6_4_TP_v1_1.vxp at https://github.com/WayenWeng/RePhone_Create_Kit_VXP/blob/master/RePhone%20Create%20Kit%20VXP/autostart.txt
  - For development environment of Eclipse, you don't have to change anything.

## Rephone Community
---
[![](https://github.com/SeeedDocument/Xadow_1.54_Inch_Touchscreen/raw/master/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

We’ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules’ development in the future. And then here we go, the [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone).

Now join us in the [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone)! Together we seek answers, make interesting stuff, care about each other, and share our experiences.

## Resources
---
The schematic diagram of Xadow 1.54” Touchscreen is provided in the following link:

- [Xadow 1.54”Touchscreen schematic files](https://github.com/SeeedDocument/Xadow_1.54_Inch_Touchscreen/raw/master/resources/202000724_PCBA%3BXadow%201.54''Touchscreen%20v1.0%20schematic%20files.zip)

Check more info about the TFT Display and the Capacitive Touchscreen:

- [Datasheet of the TFT display](https://github.com/SeeedDocument/Xadow_1.54_Inch_Touchscreen/raw/master/res/Datasheet-Capacitive_touchscreen.pdf)
- [Datasheet of the capacitive touchscreen](https://github.com/SeeedDocument/Xadow_1.54_Inch_Touchscreen/raw/master/res/TFT_Display.rar)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>