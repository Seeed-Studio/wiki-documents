---
description: reTerminal-FAQ
title: The screen orientation is incorrect after installing Raspberry Pi OS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Incorrect_screen_orientation_on_RPiOS_Bullseye
last_update:
  date: 11/24/2023
  author: Seraphina
---

<!-- Q11: The screen orientation is incorrect after installing Raspberry Pi OS Bullseye -->
### Raspberry Pi OS Bullseye

If you notice an erroneous screen orientation after installing **Raspberry Pi OS Bullseye**, do as follows:

- **Step 1.** After flashing **Raspberry Pi OS Bullseye** to reTerminal eMMC, follow [this guide](https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os) to install the necessary drivers

- **Step 2.** Create a new file named **monitors.xml** under **.config** directory

```sh
sudo vi ~/.config/monitors.xml
```

- **Step 3.** Copy the following content into the above file to explicitly set the LCD display (DSI-1) and save the file by typing **:wq** after pressing **ESC**

```sh
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DSI-1</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>720</width>
          <height>1280</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
      <transform>
        <rotation>right</rotation>
      </transform>
    </logicalmonitor>
  </configuration>
</monitors>
```

- **Step 4.** Open **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Step 5.** Add the following into the file

```sh
dtoverlay=reTerminal,tp_rotate=1
```

- **Step 6.** Reboot reTerminal

```sh
sudo reboot
```

Now the screen will be displayed in the correct orientation on Raspberry Pi OS Bullseye!

### Raspberry Pi OS Bookworm

If you notice an erroneous screen orientation after installing **Raspberry Pi OS Bookworm**, do as follows:

- **Step 1.** After flashing **Raspberry Pi OS Bookworm** to reTerminal eMMC, follow [this guide](https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os) to install the necessary drivers


If you configured a user other than root, and the Bookworm image from July 24,  I found I had to do:
```sh
sudo chown $USER ~/.config
sudo chgrp $USER ~/.config
sudo chmod u+rwx ~/.config
```

- **Step 2.** Open .config/wayfire.ini

```sh
sudo vi ~/.config/wayfire.ini
```

- **Step 3.** Copy the following content into the above file to explicitly set the LCD display (DSI-1) and save the file by typing **:wq** after pressing **ESC**

```sh
[output:DSI-1]
mode = 720x1280@60
transform = 270
```


- **Step 4.** Open **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Step 5.** Add the following into the file

```sh
dtoverlay=reTerminal
```

- **Step 6.** Reboot reTerminal

```sh
sudo reboot
```

Now the screen will be displayed in the correct orientation on Raspberry Pi OS Bookworm!
