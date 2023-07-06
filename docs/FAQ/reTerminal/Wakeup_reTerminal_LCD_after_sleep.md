---
description: reTerminal-FAQ
title: How to wake up the reTerminal LCD after sleep
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wakeup_reTerminal_LCD_after_sleepblack_screen
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q6:I cannot wake up the reTerminal LCD after sleep -->

Open a terminal window after connecting through SSH or VNC and enter the following commands

```sh
DISPLAY=:0 xset dpms force off
DISPLAY=:0 xset dpms force on
```

This will reinitialize the LCD on the reTerminal!
