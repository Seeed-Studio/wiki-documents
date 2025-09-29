---
description: 步进电机驱动器 v2.3
title: 步进电机驱动器 v2.3
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Stepper_Motor_Driver_v2.3
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Stepper_Motor_Driver_v2.3/img/Steperdriver.jpg)

该板允许您控制一个步进电机，并接收来自两个限位开关的输入。它基于 Allegro A3982 步进电机驱动器与翻译器。A3982 能够驱动每线圈高达 2A 的电流。该板旨在改进并替代基于经典 L297/L298 步进驱动器的 v1.x 系列步进驱动器。A3982 提供了许多改进：

* 仅需焊接一个芯片，而不是 L297/L298 组合的两个芯片
* 优越的 DMOS 技术（无需散热片！）
* 内置二极管和同步整流（无需大型二极管阵列！）
* 比 L297/L298 更便宜且更小（总成本约便宜 $10！）

缺点是该板主要采用 SMT（表面贴装技术），但我们在设计时有意识地选择了市场上最大且最容易焊接的 SMT 元件。我们使用了 1206 尺寸的电阻器，A3982 本身采用 SOIC 封装。即使是初学者，该板也非常容易组装。使用诸如焊膏 + 热板的技术，该板焊接起来非常简单。我发现以这种方式焊接 SMT 板比逐个焊接通孔组件的引脚要容易得多。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>