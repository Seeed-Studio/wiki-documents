---
description: reTerminal-FAQ
title: How to disable screen rotation on reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /disable_screen_rotation_on_reTerminal
last_update:
  date: 6/21/2023
  author: Seraphina
---

If your screen displays properly but rotates with the reTerminal, you can deactivate the screen's automatic rotation by removing the accelerometer, resulting in a static landscape display. <br/>
The steps to disable screen rotation are outlined below:

- **Step 1** : Open the terminal and navigate to the path to locate and open the **raspi-blacklist.conf**.

```
/etc/modprobe.d/raspi-blacklist.conf 
```

- **Step 2** : Add the following line of code to the **raspi-blacklist.conf**.

```
blacklist lis331dlh_i2c
```

- **Step 3** : Reboot the reTerminal

```sh
sudo reboot
```

Following these steps will result in a static landscape display!
