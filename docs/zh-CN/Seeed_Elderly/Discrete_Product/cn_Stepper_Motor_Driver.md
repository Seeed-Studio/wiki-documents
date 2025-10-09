---
description: 步进电机驱动器
title: 步进电机驱动器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Stepper_Motor_Driver
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Stepper_Motor_Driver/img/Motorshield.jpg)

**型号：[PCB117A4M](https://www.seeedstudio.com/depot/open-source-service-fusion-pcb-pool-c-64_33.html)**

该板允许您控制一个步进电机，并接收来自两个限位开关的输入。它基于 Allegro A3982 步进电机驱动器与翻译器。A3982 能够驱动每线圈最高 2A 的电流。该板旨在改进并替代基于经典 L297/L298 步进驱动器的 v1.x 系列驱动器。A3982 提供了许多改进：

*   只需焊接一个芯片，而不是 L297/L298 的双芯片组合
*   优越的 DMOS 技术（无需散热片！）
*   内置二极管和同步整流（无需大型二极管阵列！）
*   比 L297/L298 更便宜且更小（总成本约便宜 $10！）

缺点是该板主要采用 SMT（表面贴装技术），但我们在设计时有意选择了市场上最大且最容易焊接的 SMT 元件。我们使用了 1206 尺寸的电阻器，A3982 本身采用 SOIC 封装。即使是初学者，该板也非常容易组装。使用诸如焊膏 + 热板的技术，该板焊接起来非常简单。我发现以这种方式焊接 SMT 板比逐个手动焊接通孔元件要容易得多。

##   组装视图

*   您需要一个 **焊接工具包** 来完成大部分工作。
*   您还需要一个 **SMT 焊接工具包** 来组装此板。
*   如果您是新手，请阅读我们的 **电子制造指南**。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>