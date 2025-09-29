---
description: reTerminal-常见问题解答
title: 如何唤醒休眠后的reTerminal LCD屏幕
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wakeup_reTerminal_LCD_after_sleep
last_update:
  date: 12/16/2024
  author: Joshua Lee
---

<!-- Q6:我无法唤醒休眠后的reTerminal LCD屏幕 -->

根据 [github.com/Seeed-Studio/pi-gen-expand/commit/8affb3b](https://github.com/Seeed-Studio/pi-gen-expand/commit/8affb3b)，此问题的修复已集成到驱动程序中，因此您无需手动执行额外步骤。

对于较早版本，请考虑从 [github.com/Seeed-Studio/seeed-linux-dtoverlays](https://github.com/Seeed-Studio/seeed-linux-dtoverlays) 重新安装驱动程序。详细步骤请参阅 [在刷新新的Raspbian OS后安装reTerminal驱动程序](/cn/reterminal-dm-flash-OS/#install-reterminal-drivers-after-flashing-new-raspbian-os)。