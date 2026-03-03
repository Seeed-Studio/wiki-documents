---
description: Xadow教程-摇一摇
title: Xadow教程-摇一摇
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Tutorial_Shaking_Shaking
last_update:
  date: 1/13/2023
  author: shuxu hu
---

在这个演示中，你需要使用以下组件：

*   Xadow主板

*   Xadow OLED

*   Xadow加速度计

*   Xadow气压计

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Untitled.png)

使用FFC电缆连接它们，然后需要进行一些准备工作，参考第一个演示的步骤。与演示1不同的是，你需要下载[库：Smile](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/SMILE.zip)并直接打开SMILE INO文件。

这个演示的功能：在正常情况下，OLED显示当前的气压值。当你摇动Xadow加速度计时，屏幕上会出现一个笑脸。

## 注意

在将代码：smile上传到Xadow主板之前，请确保Arduino库中已经包含库：OLED_Display12864和[DigitalAccelerometer_ADX345](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/DigitalAccelerometer_ADXL345.zip)。如果没有，请下载它们并解压后放到Arduino IDE的库文件夹路径：..\arduino-1.0.1\libraries。不要忘记在Arduino环境的工具菜单中选择Seeed Xadow作为板类型。

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Demo_2_display_data.jpg)

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Demo_2_display_smile.jpg)

## 资源

[Demo2 SMILE代码](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/SMILE.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>