---
description: ODYSSEY-常见问题解答
title: Arduino IDE 无法识别 ODYSSEY - X86J4105/X86J4125 上的板载微控制器
#keywords:
slug: /cn/not_recognize-onboard-microcontroller
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 2023/6/26
  author: Seraphina
---

如果您的 Arduino IDE 无法识别 ODYSSEY - X86J4105/X86J4125 上的板载微控制器，请在 4 针排针（位于 SAMD21 的 28 针左侧）上的 **RST 引脚** 和 **GND 引脚** 之间添加一根跳线，以重置 AMSAMDG21。

<!-- 插入图片 -->

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/oydsseyx86J4105_pinout1.png)