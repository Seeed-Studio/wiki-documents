---
description: reTerminal-FAQ
title: How to solve the issue of buzzer, LEDs do not work after installing the reTerminal drivers
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /buzzer-leds-not-work_by_drivers
last_update:
  date: 6/21/2023
  author: Seraphina
---


<!-- Q13: LEDs and Buzzer do not work after installing reTerminal drivers -->

This issue will not last long. We will completely solve this issue later from reTerminal drivers itself

- **Step 1.** Open **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Step 2.** Comment the following line and save the file by typing **:wq** after pressing **ESC**

```sh
#dtoverlay=reTerminal-bridge
```

- **Step 3.** Reboot reTerminal

```sh
sudo reboot
```

Now the LEDs and Buzzer will work as normal.
