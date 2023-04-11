---
description: reRouter Introduction
title: reRouter Introduction
keywords:
- Device
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Raspberry-OpenWrt-Getting-Started
last_update:
  date: 1/10/2022
  author: jianjing Huang
---


# Getting Started with OpenWrt on Your Router

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png" alt="pir" width="650" height="auto"/></p>

This Mini Router is equipped with dual Gigabit Ethernet ports and dual USB 3.0 ports, making it suitable for soft router applications, while keeping the hardware to a minimum. We have pre-installed a Raspberry Pi Compute Module 4 with 4GB RAM and 32GB eMMC to enable fast boot-up times and a smooth overall experience.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview1.png" alt="pir" width="650" height="auto"/></p>

## Quick Start with Mini Router

### OpenWrt Pre-Installed

The Compute Module 4 comes with <a href="https://wiki.seeedstudio.com/OpenWrt-Getting-Started/" target="_blank"><span>OpenWrt Firmware</span></a> out-of-the-box. This means you just need to unbox the package, take out the board, connect to your existing home network and have your own mini router!

OpenWrt is an open-source Linux operating system which runs on embedded devices/ routers. It offers more features, performance, and security than a traditional router. It has a filesystem that’s fully writable and includes a package management system. You can make use of these packages to suit your applications in various ways. Once you connect this board to your home network and access the router from a web browser, you will be presented with a beautiful and interactive dashboard as follows.

## 2 Step to run Mini Router with OpenWrt

**Hardware Required**

You need to prepare the following hardware before getting started with OpenWRT on Mini Router
● 1 x Mini Router
● 1 x Power adapter (5V/3A) with USB Type-C cable
● 2 x Ethernet cables

**Instruction**

Once the ethernet cables are connected,
● Step 1. Power on the board
● Step 2. Open a web browser and type 192.168.2.1
You will see the OpenWrt Luci web-interface here. The OpenWrt image compiled by Seeed is included with many packages out-of-the-box. So you can use these package to realize many applications!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview2.png" alt="pir" width="650" height="auto"/></p>

## FAQ

### Q1 I can’t change root password on OpenWrt because of the read-only file system. How should I deal with it?

It can be solved by reflashing the image on to the eMMC.

### Q2: What if I connect the OpenWrt router to my existing router which has a default gateway IP of 192.168.2.1?

Seeed OpenWrt image comes preconfigured with the necessary network settings. You might only need to change one network setting for the scenario which involves the Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 connecting to your existing router, and the router has the default gateway IP set to 192.168.2.1 which is the same as the default gateway IP for OpenWrt. In this scenario, you need to change the default IP of LAN interface on OpenWrt as follows:

- **Step 1.** Open a web browser and log in to the OpenWrt portal by typing **192.168.2.1**

- **Step 2.** Navigate to **System > TTYD Terminal** and login with **root** as the username

- **Step 3.** Open the following file

```sh
vi /etc/config/network
```

- **Step 4.** Change the static IP address on the LAN interface as follows

```sh
config interface 'lan'
        option type 'bridge'
        option ifname 'eth0'
        option proto 'static'
        option ipaddr '192.168.3.1'
        option netmask '255.255.255.0'
        option ip6assign '60'
```

**Note:** Here the static IP is changhed to **192.168.3.1**. However, you can type any IP address of your choice

- **Step 4.** Reboot the router

```sh
reboot
```

### Q3: What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without emmC?

If you want to use a Compute Module 4 without eMMC on the Dual Gigabit Ethernet Carrier Board, then you need to flash OpenWrt on to a micro-SD card and insert it into the board. Follow the steps below according to your operating system.

- **Step 1.** Insert a micro-SD card to the computer using a **micro-SD card reader** connected to the computer, or by using a **built-in card reader** on a laptop

- **Step 2.** Download **balenaEtcher** software by visiting [this link](https://www.balena.io/etcher) according to your operating system

- **Step 3.** Run **balenaEtcher** as **administrator**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Step 4.** Click **Flash from file** and point to the OpenWrt image file that you downloaded before

- **Step 5.** Click **Select target** and select the connected micro-SD card

- **Step 6.** Finally, click **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Please wait a few minutes until the flashing process is complete.

- **Step 7.** Eject the micro-SD card from computer and insert it into the Dual Gigabit Ethernet Carrier Board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/micro-sd-install.png" alt="pir" width="400" height="auto"/></p>

### Q4: I cannot successfully set up Rclone from web UI

Rclone is a program to manage files on cloud storage drives. You can use it to make sure your cloud files are always in sync with the local storage.

Eventhough there is a UI to configure Rclone within OpenWrt Luci interface, you need to first do all the configurations within a command line. After that only you will be able to view your files by using the web UI.

Please follow the steps below:

- **Step 1.** Visit **OpenWrt Luci web UI** and navigate to `Services > Terminal`

- **Step 2.** Log in with your OpenWrt credentials

- **Step 3.** Start the **rclone configuration process** by typing the following

```sh
rclone config
```

- **Step 4.** Press **n** and press **Enter** to create a new remote.

- **Step 5.** Type a name of your choice for the new remote

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-1.1.png" alt="pir" width="600" height="auto"/></p>

- **Step 6.** Find the **type of storage** you are creating a remote connection to, and enter the corresponding number from the long list

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-2.png" alt="pir" width="450" height="auto"/></p>

**Note:** Here number **13** is chosen for **Google Drive** as an example

- **Step 7.** When you are prompted for a **Client ID**, press **Enter** to accept the default

- **Step 8.** When you are prompted for a **Client Secret**, press **Enter** to accept the default

- **Step 9.** Choose **1** as the scope that rclone should use when requesting access from the drive

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-3.png" alt="pir" width="550" height="auto"/></p>

**Note:** This will give full access to all the files in the drive

- **Step 10.** When you are prompted for **root folder ID**, press **Enter** to accept the default

- **Step 11.** When you are prompted for **service account credentials JSON file path**, press **Enter** to accept the default

- **Step 12.** On **Edit advanced config**  prompt, press **Enter** which selects **No** by default

- **Step 13.** On **Use auto config** menu, press **n** and then press **Enter**

- **Step 14.** Copy and paste the link shown on a web browser

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-4.png" alt="pir" width="500" height="auto"/></p>

- **Step 15.** Sign in to your Google account and **Allow** access

- **Step 16.** **Copy** the code shown on the **Google sign in page** and **paste** it inside the **command line** that we used before

- **Step 17.** On **Configure as a team drive** press **Enter** to accept the default

- **Step 18.** Press **Enter** to confirm the creation of the remote

You will see the output as follows:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-5.png" alt="pir" width="300" height="auto"/></p>

- **Step 19.** Type **q** to quit the configuration

- **Step 20.** Navigate to `NAS > Rclone`, check the box next to **run Rclone as daemon** and click **SAVE & APPLY**

- **Step 21.** Copy the **rclone address**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-6.png" alt="pir" width="600" height="auto"/></p>

- **Step 22.** Click **WEBUI REACT** and a new web page will open

- **Step 23.** Paste the previously copied **rclone address** on to the first blank column

- **Step 24.** Type **admin** for both username and password, and press **Verify**

You will see the following output if the connection is verified

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-7.png" alt="pir" width="300" height="auto"/></p>

- **Step 25.** Click **Login** and go to **Explore** from the side menu

- **Step 26.** Type the name of the remote we created before and click **Open**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-8.png" alt="pir" width="1000" height="auto"/></p>

Now you will see all your files in available in your drive

### Q5: How do I fix my device when I faced the "Read Only Root filesystem"?

For devices in the "Read Only Root filesystem", we can use `e2fsck` to check the system and fix it. Please open the terminal window and run the following command:

```
e2fsck /dev/mmcblk0p2
```

## Resources

- **[Web Page]** [OpenWrt Offficial Documentation](https://openwrt.org)

- **[GitHub]** [Seeed OpenWrt](https://github.com/Seeed-Studio/seeed-linux-openwrt)

- **[OneDrive]** [Seeed OpenWrt Images](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
