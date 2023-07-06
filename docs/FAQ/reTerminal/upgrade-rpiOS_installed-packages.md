---
description: reTerminal-FAQ
title: How to upgrade Raspberry Pi OS and the installed packages
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /upgrade-rpiOS_installed-packages
last_update:
  date: 6/21/2023
  author: cheng.tang
---

<!-- ## Q3: How to upgrade Raspberry Pi OS and the installed packages -->

We will update all the packages and also the Raspberry Pi OS to the latest version

### **Step 1.** Open a terminal window on the reTerminal and type the following

```sh
sudo apt update
sudo apt full-upgrade
```

### **Step 2.** Reinstall kernel headers

```sh
sudo apt install raspberrypi-kernel-headers
```

### **Step 3.** Reboot the reTerminal

```sh
sudo reboot
```

Now your Raspberry Pi OS and all the necessary packages are up to update!
