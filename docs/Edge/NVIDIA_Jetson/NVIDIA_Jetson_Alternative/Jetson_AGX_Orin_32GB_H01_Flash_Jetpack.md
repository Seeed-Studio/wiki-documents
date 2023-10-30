---
description: Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit 
title: NVIDIA® Jetson AGX Orin 32GB H01 Kit
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_AGX_Orin_32GB_H01_Flash_Jetpack
last_update:
  date: 3/30/2023
  author: Lakshantha
---

<!-- # Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit  -->

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

This wiki will guide you how to install JetPack to Jetson AGX Orin 32GB H01 Kit.

## Prerequisites

- Ubuntu Host PC (native or VM using VMware Workstation Player)
- Jetson AGX Xavier H01 Kit
- USB Type-C data transmission cable

## Enter Force Recovery Mode

- **Step 1:** There is a recovery button on the board, which is in the middle of the three buttons as shown in the below picture. Hold the recovery button and then connect the board to the power supply to enter force recovery mode.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/4.jpg"/></div>

- **Step 2:** Connect Jetson AGX Orin 32GB H01 Kit with the Ubuntu host PC with a USB Type-C data transmission cable

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/5.jpg"/></div>

## Download the peripheral drivers

First of all, you need to install the peripheral drivers for this board. These are needed for some hardware peripherals to function on the board. Click the below links to download the drivers according to the JetPack version


<table>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>L4T Version</th>
      <th>Download Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5.0.2</td>
      <td>35.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2/AGX-Orin-32GB-H01-JP5.0.2.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.1.1/AGX-Orin-32GB-H01-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>

## Flash to Jetson

Here we will use **NVIDIA L4T 35.1** to install **Jetpack 5.0.2** on the Jetson AGX Orin 32GB H01 Kit.

- **Step 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r351) the NVIDIA drivers on the host PC. The required drivers are shown below:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

- **Step 2:** Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/7.png"/></div>

- **Step 3:** Extract **Jetson_Linux_R35.1.0_aarch64.tbz2** and **Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2** by navigating to the folder containing these files and apply the changes

```sh
cd <directory_where_the_files_are_located>
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

- **Step 4:** Extract **AGX-Orin-32GB-H01-JP5.0.2.zip**. Here we additionally install the **unzip** package which is needed to decompress the .zip file

```sh
cd ..
sudo apt install unzip 
unzip AGX-Orin-32GB-H01-JP5.0.2.zip
```

Here it will ask whether to replace the files. Type **A** and press **ENTER** to replace the necessary files

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/3.jpg"/></div>

- **Step 5:** Flash the system to the eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson‐agx‐orin‐devkit mmcblk0p1
```

You will see the following output if the flashing process is successful

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/9.jpg"/></div>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>