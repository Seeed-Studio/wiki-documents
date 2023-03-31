---
description: Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit 
title: NVIDIA® Jetson AGX Orin 32GB H01 Kit
keywords:
- NVIDIA Jetson Alternative
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

First of all, you need to install the peripheral drivers for this board. These are needed for some hardware peripherals to function on the board. [Click here](https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2) to download the drivers according to Jetpack 5.0.2.

**Note:** Currently we only provide the drivers for JetPack 5.0.2. We will keep updating the drivers in the future with the release of new JetPack versions.

## Flash to Jetson

Here we will use **NVIDIA L4T 35.1** to install **Jetpack 5.0.2** on the Jetson AGX Orin 32GB H01 Kit.

- **Step 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r351) the NVIDIA drivers on the host PC. The required drivers are shown below:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

- **Step 2:** Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/7.png"/></div>

- **Step 3:** Extract **Jetson_Linux_R35.1.0_aarch64.tbz2** and **Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2** by navigating to the folder containing these files and apply the changes

```sh
cd <directory_where_the_files_are_located>
tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
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

## Tech Support

Please do not hesitate to submit issues into our [forum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
