---
description: Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit 
title: NVIDIA® Jetson AGX Orin 32GB H01 Kit
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_AGX_Orin_32GB_H01_Flash_Jetpack
last_update:
  date: 10/14/2025
  author: Lakshantha/Youjiang
---

<!-- # Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit  -->

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div>

:::info
Please note, the following updates were made to the product on November 25, 2024:

1. The 5V power supply scheme has been changed (the power IC was replaced from ONNCP3020ADR2G to TI TPS53015DGS, and the peripheral components have been adjusted accordingly), which resolves the issue of device rebooting when using certain USB devices with high dynamic current.
2. The board layout has been optimized to enlarge the slot for the fan cable to accommodate the fan wiring.
3. To stabilize accessory supply, the WiFi module model has been changed from 8265.NGW to BL-M8822CP1, and the software drivers have been updated accordingly.

:::

This wiki will guide you how to install JetPack to Jetson AGX Orin 32GB H01 Kit.

## Prerequisites

- [Ubuntu Host PC](https://developer.nvidia.com/sdk-manager) (native or VM using VMware Workstation Player).
- Jetson AGX Orin H01 Kit.
- USB Type-C data transmission cable

## Enter Force Recovery Mode

- **Step 1:** There is a recovery button on the board, which is in the middle of the three buttons as shown in the below picture. Hold the recovery button and then connect the board to the power supply to enter force recovery mode.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/4.jpg"/></div>

- **Step 2:** Connect Jetson AGX Orin 32GB H01 Kit with the Ubuntu host PC with a USB Type-C data transmission cable.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/5.jpg"/></div>

- **Step 3:** Use the `lsusb` command on the Ubuntu host machine to verify that the device has entered recovery mode.
<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/check_rec.png"/></div>

:::info
If `0955:7223 NVIDIA Corp.` appears in the logs, it indicates that the device has entered recovery mode.
:::

## Download the peripheral drivers

First of all, you need to install the peripheral drivers for this board. These are needed for some hardware peripherals to function on the board. Click the below links to download the drivers according to the JetPack version

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>L4T Version</th>
      <th>Driver Download Link</th>
      <th>L4T Download Link </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5.0.2</td>
      <td>35.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2/AGX-Orin-32GB-H01-JP5.0.2.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.1.1/AGX-Orin-32GB-H01-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaRL0XDaYCdFhkBiwvO3b8UBk4HmzRBQgfhYCKlN_ANVpA?e=5ndnMu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3560" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfdaZCD6wMZPrW_LtMm3eQgBXnPq_8ri8WmKw3nsxXVf1Q?e=uvKRhE" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r363" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbYu41kk-LNNmsssNIuM5AoBLYjTFZo_mEUTUtIJlCCnyw?e=dvCgKk" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3640" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
    <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ES6058EFNl1LkrJGAvTYR6IBFTldWYyxJ4ZxQP3EM00BbQ?e=rjshwu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3643" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

## Flash to Jetson

:::danger
NVIDIA® Jetson AGX Orin 32GB H01 Kit comes pre-installed with the `JetPack 5.1.4` operating system. The default username and password are user: nvidia / password: nvidia. Upon receiving the device, you can directly log into the system and start using it without the need to reflash the system.

If your system becomes corrupted, you can refer to the steps below to reflash the system.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.0.2/JP5.1.1" label="JP5.0.2/JP5.1.1">

Here we will use: **NVIDIA L4T 35.1** to install **Jetpack 5.0.2** or **NVIDIA L4T 35.3.1** to install **Jetpack 5.1.1** on the Jetson AGX Orin 32GB H01 Kit.

- **Step 1:** Download appropriate NVIDIA drivers on the host PC. The required drivers are shown below:

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

### Encountered Errors

- **ERROR: failed to read rcm_state** on **AGX Orin** and **NX Orin** for *Jetpack 5.1.1*
  - There is PCN changes on Jetson AGX Orin made by NVidia, but it's not Seeed's PCN changes.
  - Beside materials mentioned in Wiki, please download [Overlay_PCN210361_PCN210100_r35.3.1.tbz2](https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/overlay_pcn210361_pcn210100_r35.3.1.tbz2) at bottom of the page Jetson Linux 35.3.1.
  - After extracting *Jetson_Linux* and before applying binaries, please extract *Overlay_PCN210361_PCN210100_r35.3.1.tbz2*. Then copy all files, folders to *Linux_For_Tegra* (merge, not skip).
  - Then continue remaining steps in guidances.

</TabItem>

<TabItem value="JP5.1.4" label="JP5.1.4">

Here we will use: **NVIDIA L4T 35.6.0** to install **Jetpack 5.1.4** on the Jetson AGX Orin 32GB H01 Kit.

Enter the following command in the terminal window of the Ubuntu host machine:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2

tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
sudo tar xf 605_jp514.tbz2  # Please copy 605_jp514.tbz2 to the Linux_for_Tegra/ directory before execution.

```

Choose one of the following commands to perform the flashing operation:

(1). Flash the system to eMMC:

```bash
sudo ./flash.sh jetson-agx-orin-devkit internal
```

(2). Flash the system to the SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  --showlogs --network usb0 jetson-agx-orin-devkit external
```

<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/flash_successful.png"/></div>

After the flashing is complete, the device will automatically reboot.

</TabItem>


<TabItem value="JP6.0" label="JP6.0">

Here we will use **NVIDIA L4T 36.3** to install **Jetpack 6.0** on the Jetson AGX Orin 32GB H01 Kit.

- **Step 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r363) the NVIDIA drivers on the host PC. The required drivers are shown below:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Step 2:** Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/files.png"/>
</div>

- **Step 3:** Extract **Jetson_Linux_R36.3.0_aarch64.tbz2** and **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** by navigating to the folder containing these files and apply the changes:

```bash
cd < directory_where_the_files_are_located >
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Step 4:** Extract **AGX-Orin-H01-JP6.0.zip**. Here we additionally install the **unzip** package which is needed to decompress the .zip file.

```sh
cd ..
sudo apt install unzip 
sudo unzip AGX-Orin-H01-JP6.0.zip
```

Here it will ask whether to replace the files. Type **A** and press **ENTER** to replace the necessary files

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/extract_drivers.png"/>
</div>

- **Step 5:** Flash the system to the eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

You will see the following output if the flashing process is successful:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Here we will use **NVIDIA L4T 36.4** to install **Jetpack 6.1** on the Jetson AGX Orin 32GB H01 Kit.

- **Step 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r3640) the NVIDIA drivers on the Ubuntu host PC. The required drivers are shown below:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Step 2:** Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
You can use the following command to verify that the downloaded file is complete.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **Step 3:** Extract **Jetson_Linux_R36.4.0_aarch64.tbz2** and **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2** by navigating to the folder containing these files and apply the changes:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Step 4:** Extract **A605_Jetpack_6.1.tar.gz**:

```bash
cd ..
tar xf A605_Jetpack_6.1.tar.gz
sudo cp -r 605_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Step 5:** Flash the system to the eMMC:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

You will see the following output if the flashing process is successful:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
We can also run the following command to install the system onto the SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Here we will use **NVIDIA L4T 36.4** to install **Jetpack 6.2** on the Jetson AGX Orin 32GB H01 Kit.

- **Step 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r3643) the NVIDIA drivers on the Ubuntu host PC. The required drivers are shown below:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Step 2:** Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder.

:::info
Similar to the flashing process of Jetpack 6.1！
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
You can use the following command to verify that the downloaded file is complete.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **Step 3:** Extract **Jetson_Linux_R36.4.3_aarch64.tbz2** and **Tegra_Linux_Sample-Root-Filesystem_R36.4.3_aarch64.tbz2** by navigating to the folder containing these files and apply the changes:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.3_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Step 4:** Extract **605_jp62.tar.gz**:

```bash
cd ..
tar xf 605_jp62.tar.gz
sudo cp -r 605_jp62/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Step 5:** Flash the system to the eMMC:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

You will see the following output if the flashing process is successful:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
We can also run the following command to install the system onto the SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

</Tabs>

## Developer Tools

### Pre-installed Jetpack for fast development and edge AI integration

[Jetson Software](https://developer.nvidia.com/embedded/develop/software) begins with NVIDIA JetPack™ SDK which provides a full development environment and includes CUDA-X accelerated libraries and other NVIDIA technologies to kickstart your development. JetPack includes the Jetson Linux Driver package which provides the Linux kernel, bootloader, NVIDIA drivers, flashing utilities, sample filesystem, and toolchains for the Jetson platform. It also includes security features, over-the-air update capabilities, and much more.

### Computer Vision and embedded machine learning

- [Deepstream](https://developer.nvidia.com/deepstream-sdk) delivers a complete streaming analytics toolkit for AI-based multi-sensor processing and video and image understanding on Jetson.
- [TAO](https://developer.nvidia.com/tao-toolkit), built on TensorFlow and PyTorch, is a low-code version of the NVIDIA TAO framework that accelerates the model training
- [alwaysAI](https://alwaysai.co/blog/getting-started-with-the-jetson-nano-using-alwaysai): build, train, and deploy computer vision applications directly at the edge of reComputer. Get free access to 100+ pre-trained Computer Vision Models and train custom AI models in the cloud in a few clicks via enterprise subscription. Check out our [wiki](https://wiki.seeedstudio.com/alwaysAI-Jetson-Getting-Started/#object-detection-on-pre-loaded-video-file) guide to get started with alwaysAI.
- [edge impulse](https://www.edgeimpulse.com/) : the easiest embedded machine learning pipeline for deploying audio, classification, and object detection applications at the edge with zero dependencies on the cloud.
- [Roboflow](https://blog.roboflow.com/deploy-to-nvidia-jetson/) provides tools to convert raw images into a custom-trained computer vision model of object detection and classification and deploy the model for use in applications. See the https://docs.roboflow.com/inference/nvidia-jetson  for deploying to NVIDIA Jetson with Roboflow.
- [ultralytics yolo](https://github.com/ultralytics/yolov5): use transfer learning to realize few-shot object detection with YOLOv5 which needs only a very few training samples. See our step-by-step [wiki](https://wiki.seeedstudio.com/YOLOv5-Object-Detection-Jetson/) tutorials.
- [Deep Learning](https://deci.ai/blog/jetson-machine-learning-inference/): optimize your models on NVIDIA Jetson Nano. Check [here](https://info.deci.ai/benchmark-optimize-runtime-performance-nvidia-jetson) at Deci of Automatically Benchmark and Optimize Runtime Performance on NVIDIA Jetson Nano and Xavier NX Devices

### Speech AI

- [Riva](https://developer.nvidia.com/riva) is a GPU-accelerated SDK for building Speech AI applications that are customized for your use case and deliver real-time performance.

### Remote Fleet Management

Enable secure OTA and remote device management with [allxon](https://www.allxon.com/). Unlock 90 days free trial with code H4U-NMW-CPK.

### Robot and ROS Development

- NVIDIA Isaac ROS GEMs are hardware-accelerated packages that make it easier for ROS developers to build high-performance solutions on NVIDIA hardware. Learn more about [NVIDIA Isaac](https://developer.nvidia.com/embedded/develop/software).
- [Cogniteam Nimbus](https://www.cogniteam.com/nimbus) is a cloud-based solution that allows developers to manage autonomous robots more effectively. Nimbus platform supports NVIDIA® Jetson™ and ISAAC SDK and GEMs out-of-the-box. Check out our [webinar](https://www.seeedstudio.com/blog/2022/04/21/webinar-connect-your-ros-project-to-the-cloud-with-nimbus/) on connecting your ROS Project to the Cloud with Nimbus.

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
