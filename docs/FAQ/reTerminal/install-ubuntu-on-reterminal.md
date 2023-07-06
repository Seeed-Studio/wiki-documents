---
description: reTerminal-FAQ
title: How to install Ubuntu on reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /install-ubuntu-on-reterminal
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q10: How can I install Ubuntu on reTerminal? -->

If you want to install Ubuntu on reTerminal, follow the steps below step by step:

- **Step 1.** Flash [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi) to reTerminal eMMC storage

:::note
Refer to flashing instructions [here](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc). After opening **Raspberry Pi Imager**, navigate to `CHOOSE OS > Use custom` and select the above image to flash
:::

- **Step 2.** SSH into reTerminal and run the following commands one after the other. Make sure to use **ubuntu** as the username and **ubuntu** as the password

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

- **Step 3.** Now, reTerminal will boot into Ubuntu Desktop, but in wrong orientation

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

- **Step 4.** Click the **power icon** on top right corner and click **Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

- **Step 5.** Select **Displays** and choose **Portrait Left** under **Orientation** and click **Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

Finally you will see the Ubuntu Desktop in proper orientation!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>
