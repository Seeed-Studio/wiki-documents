---
description: OpenWrt-FAQ
title: How to change default gateway IP in OpenWrt?
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /change_default_gateway_IP
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q1: What if I connect the OpenWrt router to my existing router which has a default gateway IP of 192.168.2.1? -->

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
