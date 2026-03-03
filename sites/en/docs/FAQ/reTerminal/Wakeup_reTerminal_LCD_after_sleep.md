---
description: reTerminal-FAQ
title: How to wake up the reTerminal LCD after sleep
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wakeup_reTerminal_LCD_after_sleep
last_update:
  date: 12/16/2024
  author: Joshua Lee
---

<!-- Q6:I cannot wake up the reTerminal LCD after sleep -->

As of [github.com/Seeed-Studio/pi-gen-expand/commit/8affb3b](https://github.com/Seeed-Studio/pi-gen-expand/commit/8affb3b), the fix for this issue has been integrated into the driver, so you don't need to perform additional steps manually

For previous versions, please consider reinstalling the driver from [github.com/Seeed-Studio/seeed-linux-dtoverlays](https://github.com/Seeed-Studio/seeed-linux-dtoverlays). See [Install reTerminal drivers after flashing new Raspbian OS](/reterminal-dm-flash-OS/#install-reterminal-drivers-after-flashing-new-raspbian-os) for detailed steps.
