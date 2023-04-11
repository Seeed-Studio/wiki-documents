---
description: Raspberry Pi 3 Model B
title: Raspberry Pi 3 Model B
keywords:
- Raspberry_Pi
- Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Raspberry_Pi_3_Model_B
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Raspberry Pi getting started
category: MakerPro
bzurl: https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html
oldwikiname:  Raspberry Pi 3 Model B
prodimagename:  rpi4.png
surveyurl: https://www.research.net/r/Raspberry_Pi_3_Model_B
sku:     110061131
--- -->

**Raspberry Pi®** is an **ARM** based credit card sized **SBC**(Single Board Computer) created by [Raspberry Pi Foundation](http://www.raspberrypi.org). Raspberry Pi runs Debian based **GNU/Linux** operating system [Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/) and ports of many other OSes exist for this SBC.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/rpi4.png)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)

## GETTING STARTED

### Requirement

- [Raspberry Pi 4](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)/[3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B--p-3037.html)/[3B](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)/[3](https://www.seeedstudio.com/Raspberry-Pi-Compute-Module-3-p-2848.html)/[3A+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-p-3216.html)/[2B](https://www.seeedstudio.com/Raspberry-Pi-2-Model-B-w-ARMv7-Quad-Core-1GB-RAM-p-2289.html)/[B](https://www.seeedstudio.com/Raspberry-Pi-Model-B-p-1634.html)/[Zero](https://www.seeedstudio.com/Raspberry-Pi-Zero-p-4254.html)
- Wi-Fi network/Mobile hotspot
- 4GB (or larger) SD card and SD reader
- PC or Mac
- 5V 3A USB adapter for power supply (optional)  
- One usb-c data cable(we use Pi 4 as an example)

:::note
Please insert the USB cable gently, otherwise the interface may be damaged. Please use the USB cable with 4 internal cables. The USB cable with 2 internal cables cannot transfer data. If you are not sure about your line, you can buy it [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html).
:::
  
### Boot from SD card

#### How to burn a Raspberry Pi OS

**1. Raspberry Pi OS Stretch download**

Download [Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/) from Raspberry Pi official website and select “with desktop and recommended software” version.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/rspberrypios.png)

**2. Etcher**

Click to download <a href="https://etcher.io/">Etcher</a> here, and burn the ```*.img.xz``` file directly to your SD card with Etcher. Or unzip the ```*.img.xz``` file to a ```*.img``` file, then burn it to SD card with other image writing tools.
<br />

- Click the Plus icon to add the image you just download, the software will automatically select the SD card you plug.Then click Flash! to start burning. It will take about 10 minutes to finish.
- Exit the imager and eject the SD card.
- After writing the image to the SD card, insert the SD card into raspberry PI. Use the USB adapter and usb-c interface to power it. Do not remove the SD card during the writing process. Raspberry PI will start from SD card.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/etcher.png)

#### Basic Configuration

**Wireless connection and SSH**

**1.** Create a file called "wpa_supplicant.conf" into the /boot folder, and copy the following code.

```txt
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

:::note
The Wi-Fi name and password should be the same as your local Wi-Fi which your PC connected to(make sure your PC and Raspberry Pi are in the same LAN).
:::

**2.** Create a blank file called "ssh" into the /boot folder.

**3.** Insert the SD Card with Raspberry Pi OS into the Raspberry Pi.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/sd_card.jpg)

**4.** Connect the Raspberry Pi to the power source and power it up.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/power.jpg)

**5.** Open putty to connect PC to Raspberry Pi.

Download putty： [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png)

**Raspberry Pi**
Default username : pi
Default password : raspberry

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss4.jpg)

**VNC Configuration**

**1.** Open raspi-config by typing following command in terminal.

```bash
sudo raspi-config
```

Arrow down to 5 interfacing Options and press "enter" to select.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

Arrow down to P3 VNC and press "enter" to select.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss6.png)

Select "Yes" to enable it.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss7.png)

Select "Ok".

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss8.png)

**2.** Install VNC Viewer

Downloadr [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss9.png)

Open VNC Viewer and enter the IP address of Raspberry Pi. You can find the IP address by typing `ifconfig` command in the terminal of Raspberry Pi (or you can enter raspberrypi.local).

:::note

If you use raspberrypi.local to login your Pi, you should make sure there is only one Raspberry Pi in use in your LAN.
:::

Enter the default user name and password, and now you can enter the Raspberry Pi's remote desktop!

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss10.png)

Success！

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss11.PNG)

## UART enable

- enable miniuart-bt

## Use with GrovePi

Please refer to [Grove Base Hat for Raspberry Pi wiki](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/).

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
