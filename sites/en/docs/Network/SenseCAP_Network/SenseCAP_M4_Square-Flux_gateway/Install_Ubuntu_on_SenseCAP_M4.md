---
description: Install Ubuntu on SenseCAP M4 via USB
title: Install Ubuntu on SenseCAP M4 via USB
keywords:
  - SenseCAP Network
  - SenseCAP M4
  - Ubuntu
image: https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Overview.png
slug: /install_ubuntu_on_sensecap_m4
sku: E23010412, 110991885, 110991865
last_update:
  date: 08/18/2026
  author: Zhai Chenyang
createdAt: '2026-08-18'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/
---

# Install Ubuntu on SenseCAP M4 via USB

This guide explains how to install Ubuntu 24.04 on the SenseCAP M4 using a USB drive.

## Installation Requirements

1. A USB flash drive with at least 4 GB of storage
2. A computer running Microsoft Windows XP or later
3. Rufus, a free and open-source USB creation tool
4. An Ubuntu ISO image file

## 1. Download the Ubuntu ISO Image

Click [here](https://releases.ubuntu.com/24.04/) to download.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-01.png" /></div>

## 2. Download Rufus

Click [here](https://rufus.ie/en/#download) to download.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-02.png" /></div>

## 3. Create a Bootable USB Drive

Please refer to this [link](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview).

### 3.1 Open Rufus and select the USB drive

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-03.png" /></div>

### 3.2 Select the ISO image

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-04.png" /></div>

### 3.3 Start writing the ISO image

After selecting the ISO image, click **START**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-05.png" /></div>

### 3.4 Select the ISO image writing mode

When the following pop-up window appears, select **Write in ISO Image mode (Recommended)**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-06.png" /></div>

You may be prompted that Rufus needs to download additional files to complete writing the ISO image. If this dialog box appears, click **Yes** to continue.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-07.png" /></div>

When prompted to erase the USB drive, click **Yes** to continue.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-08.png" /></div>

Once the status shows **READY**, you can close Rufus.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-09.png" /></div>

## 4. Install Ubuntu

Click [here](https://ubuntu.com/tutorials/install-ubuntu-server#1-overview) for reference.

Insert the USB drive into the SenseCAP M4, connect a keyboard and a display via the HDMI port, then power on the device and press the **Delete** key.

### 4.1 Enter the BIOS password

Enter the password: `QbCuNBAz`

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-10.png" /></div>

### 4.2 Boot from the USB drive

On the **Save & Exit** screen, select the USB drive under **Boot Override**, then press **Enter** to boot from it.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-11.png" /></div>

### 4.3 Start the Ubuntu installation

Select the first option to begin installing Ubuntu.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-12.png" /></div>

### 4.4 Select the language

After entering the installation interface, select your preferred language.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-13.png" /></div>

### 4.5 Select the keyboard layout

Select the keyboard layout. The default settings can be used.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-14.png" /></div>

### 4.6 Select the installation option

Select the option to install Ubuntu.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-15.png" /></div>

### 4.7 Configure the network

You may skip the network connection step for now.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-16.png" /></div>

### 4.8 Configure the proxy

You may also skip the proxy configuration step.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-17.png" /></div>

### 4.9 Configure the Ubuntu archive mirror

For the Ubuntu archive mirror configuration, keep the default settings and proceed to the next step.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-18.png" /></div>

### 4.10 Configure the storage

Configure the storage and select **Custom storage layout**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-19.png" /></div>

### 4.11 Format the disk

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-20.png" /></div>

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-21.png" /></div>

### 4.12 Create the partitions

You may customize the partition layout as needed. In this example, separate root and data partitions are created.

Set the root partition size to **50 GB**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-22.png" /></div>

### 4.13 Allocate the remaining space

Allocate the remaining space to the data partition. Leaving this field blank assigns all remaining space to `/data`.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-23.png" /></div>

### 4.14 Confirm the partition layout

Once the partitions have been created, click **Next**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-24.png" /></div>

### 4.15 Configure the user account

Enter the hostname, username, and password.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-25.png" /></div>

### 4.16 Skip Ubuntu Pro

You may skip the Ubuntu Pro upgrade for now.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-26.png" /></div>

### 4.17 Install OpenSSH

Install OpenSSH here to enable SSH connections.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-27.png" /></div>

### 4.18 Restart the system

Once the installation is complete, select **Reboot Now**. You may remove the USB drive while the system is restarting.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-28.png" /></div>

### 4.19 Complete the installation

Installation completed successfully.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-29.png" /></div>

