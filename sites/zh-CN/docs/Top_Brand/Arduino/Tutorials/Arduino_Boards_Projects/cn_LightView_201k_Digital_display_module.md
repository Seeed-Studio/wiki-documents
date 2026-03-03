---
description: LightView 201k 数字显示模块
title: LightView 201k 数字显示模块
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LightView_201k_Digital_display_module
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: LightView 201k Digital display module
category: Tutorial
bzurl:
oldwikiname: LightView 201k Digital display module
prodimagename:
surveyurl: https://www.research.net/r/LightView_201k_Digital_display_module
sku:
--- -->

LightView 201k 数字显示器入门指南
本指南将向您展示如何将 LightView 201k 数字显示器与摄像头扩展板连接，以便轻松入门。

1. 材料

- Seeeduino V3.0
- 摄像头扩展板
- LightView 201k 数字显示器

2. 连接

![](https://files.seeedstudio.com/wiki/LightView_201k_Digital_display_module/img/Lightviewdisplay.png)

1. – 亮度+
2. – 亮度-
3. – GND
4. – AV-
5. – AV+
6. – GND
7. – VCC (3.9~5V)

您只需要连接 4 根线。

1. 4 AV- =&gt; 摄像头扩展板的 V_OUT-（需要焊接一个 2PIN 排针）

2. 5 AV+ =&gt; 摄像头扩展板的 V_OUT+（需要焊接一个 2PIN 排针）

3. 6 GND =&gt; Arduino 的 GND

4. 7 VCC =&gt; Arduino 的 5V

最终组装效果如下：

![](https://files.seeedstudio.com/wiki/LightView_201k_Digital_display_module/img/图片2.jpg)

3. 工作原理
显示器只需要 AV 输入。摄像头扩展板用于生成 AV 信号。您无需向 Seeeduino 上传任何代码。Seeeduino 只做一件事：为摄像头扩展板供电。输出 AV 信号是摄像头扩展板使用的 VC0706 芯片组的内置功能。换句话说，您可能不需要 Seeeduino+摄像头扩展板。您需要的是 AV 信号。您可以将显示器连接到任何能够输出 AV 信号的电视盒子。您也可以将显示器连接到 GoPro 的 AV 输出。就是这样。

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