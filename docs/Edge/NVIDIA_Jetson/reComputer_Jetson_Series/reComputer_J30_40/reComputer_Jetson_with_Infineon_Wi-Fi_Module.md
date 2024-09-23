---
description: Use Infineon Wi-Fi Module on reComputer
title: Use Infineon Wi-Fi Module on reComputer
keywords:
- reComputer
- Wifi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Use_Infineon_Wifi_Module_on_reComputer
last_update:
  date: 01/10/2024
  author: Youjiang
---

## Introduction 

In this document, you will learn how to use Infineon’s Wi-Fi 6/6E module on reComputer J4012.

## reComputer

reComputer J4012 is built with Jetson Orin NX 16GB a powerful and compact intelligent edge box to bring up to 100 TOPS modern AI performance to the edge, which offers up to 5X the performance of Jetson Xavier NX and up to 3X the performance of Jetson AGX Xavier. Combining the NVIDIA Ampere™ GPU architecture with 64-bit operating capability, Orin NX integrates advanced multi-function video and image processing, and NVIDIA Deep Learning Accelerators.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/5.png"/></div>


## Infineon Wi-Fi Module

Infineon’s Wi-Fi  solution supports Wi-Fi 6/6E features, is tri-band capable (2.4G, 5G, 6G). Its features improve range, power efficiency, network robustness, and security, while reducing the total Bill of Materials cost and board space. The solution delivers an exceptional high-quality video/audio streaming and seamless connectivity experience in congested network environments and significantly reduces latency by operating in the 6G spectrum.

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/wifi_module.png"/></div>

<div align="center">(Picture from Embedded Artists: The 2EA M.2 module, co-developed by Embedded Artists and Murata, is designed for evaluation, integration and ease-of-use.)</div>


## Hardware connection
**Step 1.** Prepare all materials that will be used.
- reComputer J4012 equipped with Jetpack 5.1.2
- Infineon Wi-Fi Module
- 2 x IPEX to SMA Female External Antenna Adapter and SMA Male Antenna for WIFI Module
- Phillips screwdriver and screws

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware.jpg"/></div>

**Step 2.** Insert the wireless module into the M.2 Key E port. And insert 2 IPEX plugs into the corresponding sockets of the wireless module.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware_connection.jpg"/></div>

## Install the software driver

**Step 1.** Download and upload the Infineon [WiFi driver](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQzCwQWQOwhNhhW-VHhKqogBYhan7liy9UY44QE4vhq95A?e=qq0ANC) to reComputer.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/download_package.png"/></div>

**Step 2.** Run the following command to run Infineon WiFi driver.

For Jetpack 5.1.x:

```sh
sudo dpkg -i cyw55573-nvidia-jetson-v5.15.58-backports-2.0-1-arm64.deb
```

For Jetpack 6:

```sh
sudo rm /lib/modules/5.15.136-tegra/build

sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build

sudo dpkg -i cyw55573-nvidia-jetson-v5.15.58-backports-2.0-1-arm64.deb
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/install_driver.png"/></div>

It takes a while for driver to compile.

Then, you need to reboot the reComptuer:

```sh
sudo reboot
```

**Step 3.** Use the following command to check if the wlan0 interface is available:

```sh
ifconfig
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/ifconfig.png"/></div>

:::caution
  If you installed the Intel wireless drivers via `sudo apt-get install iwlwifi-modules -y` previously, you need to uninstall this package before you proceed. There is a known issue with backport compatibilities. 

  Both Intel and Infineon’s wireless driver used the backport compat module, you can’t install all of them, otherwise kernel will rise an error of `compat: exports duplicate symbol backport dependency symbol (owned by iwlwifi compat)`.

  By uninstalling the Intel's wireless drivers, you can use Infineon’s wireless driver:

  ```sh
  sudo apt-get remove backport-iwlwifi-dkms
  ```
  By uninstalling Infineon's wireless driver, you can use Intel's wireless drivers:
  ```sh
  sudo dpkg -r cyw55573-nvidia-jetson-v5.15.58-backports
  ```

:::

**Step 4.** Connect to  Wi-Fi network

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/></div>


## Feasibility testing
Use the browser to open a web page to test whether the network is working properly.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/test.png"/></div>

## Tech Support

Please do not hesitate to submit issues into our [forum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>