---
description: reTerminal-FAQ
title: Troubleshooting Touch Screen Inaccuracy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /troubleshooting-touch-screen-inaccuracy
last_update:
  date: 6/21/2023
  author: Seraphina
---

 <!-- Q12: Troubleshooting Touch Screen Inaccuracy -->

After configuring the screen to the correct orientation, the touch position may still be inaccurate, causing the cursor to move in unexpected directions when you touch a specific area on the display. To address this issue, it is essential to take the following steps.

- **Step 1** : Open the terminal and enter to xorg.conf.d folder by typing

```sh
cd /usr/share/X11/xorg.conf.d
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width={1000} height="auto" /></p>

- **Step 2** : You will have access to the "40-libinput.conf" file, which can be edited by using the command.

```sh
sudo nano 40-libinput.conf
```

- **Step 3**: Find the InputClass section of **touchscreen** InputClass.

- **Step 4**: Add following phrase. You can refer the screenshot

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width={1000} height="auto" /></p>

- **Step 5** : Save by Ctrl+O and press enter then Ctrl+X  after that Reboot

```sh
Sudo reboot 
```

After rebooting, you may notice that the touch position is now accurate. This means that when you touch a specific area on the display, the cursor moves in the intended direction.
