---
description: XadowTtutorial-Shaking Shaking
title: XadowTtutorial-Shaking Shaking
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Tutorial_Shaking_Shaking
last_update:
  date: 1/13/2023
  author: shuxu hu
---

For this demo, you need to use the:

*   Xadow Main Board

*   Xadow OLED

*   Xadow Accelerometer

*   Xadow Barometer.

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Untitled.png)

Connect them with FFC Cables, then you need to do some preparations that refer to the first Demo's steps. Differ from the demo1, you need to download [the library:Smile](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/SMILE.zip) and directly open SMILE INO file.

This demo functions: In normal circumstances, the OLED displays the current barometric pressure value. When you shake the Xadow Accelerometer, there will appear a smile face on the screen.

## Note

Before uploading the code：smile to Xadow main board, please make sure there are the library:OLED_Display12864 and [DigitalAccelerometer_ADX345](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/DigitalAccelerometer_ADXL345.zip) in the Arduino Library. If not, please download them and put them on the libraries file of Arduino IDE by the path: ..\arduino-1.0.1\libraries after unzipping. Do not forget to select Seeed Xadow from the Tools | Board menu of the Arduino environment._

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Demo_2_display_data.jpg)

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Demo_2_display_smile.jpg)

## Resources

[Demo2 SMILE Code](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/SMILE.zip)

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
