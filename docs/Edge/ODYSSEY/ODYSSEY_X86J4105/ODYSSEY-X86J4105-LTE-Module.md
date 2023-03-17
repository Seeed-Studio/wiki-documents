---
description: ODYSSEY - X86J41x5
title: LTE Modules for ODYSSEY
tags:
  - ODYSSEY
keywords:
  - ODYSSEY
image: https://avatars.githubusercontent.com/u/10758833
slug: /ODYSSEY-X86J4105-LTE-Module
last_update:
  date: 01/03/2023
  author: w0x7ce

---


This wiki will walk you through how to use the LTE module on ODYSSEY-X86 on both Windows and Linux OS. In this example, the LTE module is [Quectel EM06-E LTE Cat 6 M.2 Module](https://www.seeedstudio.com/Quectel-EM06-E-LTE-Cat6-Module-p-4567.html) which is in the M.2 form factor.

On both OS, we will demonstrate how to use the **Hotspot** feature to enable Wi-Fi availability to convert 4G LTE to Wi-Fi signals making it ODYSSEY-X86 a simple **4G Wi-Fi Router** with ease!

## Hardware Connection

- Connect the LTE module to the M.2 Connector of ODYSSEY-X86:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/connection.png" /></div>

- Connect the 4G SIM card to the slot.

- Connect the Antennas to the LTE module.

## Configurations

The Quectel EM06-E LTE Cat 6 M.2 Module has USB drivers for Windows 7/8/8.1/10, Linux and Android, DFOTA, etc. This makes it very convenient to get started, and without the need of installing drivers.

### Windows

Once connected the LTE module and booted Windows. It should automatically install the USB drivers and ready to use:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/Windows.png" /></div>

### Wi-Fi Hotspot under Windows

Once it's connected to the Internet with the LTE module, you can use the Hotspot feature from Windows to create a Wi-Fi:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/WindowsHS.png" /></div>

:::note
Make sure that the Intel Network card also has antennas connected on it.
:::

### Linux

For Linux, it is also very simple. Run the broadband configurations:

:::note
        Ubuntu 18.04 is used for reference.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/1.png" /></div>

Choose the Country Region and select your network provider:
<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/2.png" /></div>

Choose your plan (Default):

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/3.png" /></div>

Confirm details and click apply:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/4.png" /></div>

Now, the LTE module is all done and can use to browse Internet!

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/5.png" /></div>

### Wi-Fi Hotspot under Linux

For Linux, you can also create Wi-Fi Hotspot using the 4G network. This following is ran under ubuntu.

- Open Network settings in ubuntu, run the following command in terminal:

```sh
nm-connection-editor
```

The following window will appear:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-1.png" /></div>

- Select `Wi-Fi` as connection type:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-2.png" /></div>

- Configure Wi-Fi settings as follow, make sure that **mode** is `Hotspot`:

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-3.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-4.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-5.png" /></div>
</div>

- For the Wi-Fi to be identified by other device, you must connect the Wi-Fi by itself. Under Wi-Fi, select `Connect To Hidden Network`. Choose the network that we just created, and connect.

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-6.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-7.png" /></div>
</div>

- Now, the Wi-Fi is available for connections!

## Reference

- [How Fast is 5G On The ODYSSEY – X86J41x5 | 5G Speed Test](https://blog.seeedstudio.com/blog/2020/06/15/how-fast-is-5g-on-the-odyssey-x86j4105-5g-speed-test-m/)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
