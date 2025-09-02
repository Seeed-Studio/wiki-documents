---
description: Flash Jetpack on Jetson Xavier AGX H01
title: Jetson Xavier AGX H01
tags:
   - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_Xavier_AGX_H01_Driver_Installation
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

# Jetson Xavier AGX H01 Kit Driver Installation

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/first_1.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div>

This wiki will show you how to install driver to Jetson Xavier AGX H01 Kit. There are server ways to accomplish that.

## Install Jetson Xavier AGX H01 with Command Line

This is the installation through command lines, with stabilized steps.

### Materials Required

- Ubuntu Host PC
- Jetson Xavier AGX H01
- Type C data transmission cable

### Driver Installation

Before will install the driver, it is required to set the board into the Force Recovery Model.

#### Force Recovery Model

There is a recovery button on the board, which is in the middle of three buttons. Hold the recovery button and then power it up, which will enter the Force Recovery Model.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver1.png" /></div>

Connect Jetson Xavier AGX H01 with the Ubuntu host PC with a Type-C data transmit cable.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver.png" /></div>

#### Driver Required

We provide different versions of drivers for different versions of Jetpack system, for your convenience to install.

<table>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>Driver Required</th>
      <th>Jetson Linux Archive</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.4</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_4.4.zip">Click to Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/linux-tegra-r32.4.3">NVIDIA L4T 32.4.3</a></td>
    </tr>
    <tr>
      <td>4.6.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip">Click to Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/linux-tegra-r3271">NVIDIA L4T 32.7.1</a></td>
    </tr>
    <tr>
      <td>5.0.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.0.1.zip">Click to Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3411">NVIDIA L4T 34.1.1</a></td>
    </tr>
    <tr>
      <td>5.0.2</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.0.2.zip">Click to Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351">NVIDIA L4T 35.1</a></td>
    </tr>
    <tr>
      <td>5.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.rar" target="_blank" rel="noopener noreferrer">Click to Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3521" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.2.1</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.1.zip" target="_blank" rel="noopener noreferrer">Click to Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.3.1</a></td>
    </tr>
    <tr>
      <td>5.1.2</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.2.zip" target="_blank" rel="noopener noreferrer">Click to Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3541" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.4.1</a></td>
    </tr>
  </tbody>
</table>

#### Getting Started

The example here is using **NVIDIA L4T 32.7.1** to install **Jetpack 4.6.1** on the Jetson AGX H01.

- **Step 1**. [Download](https://developer.nvidia.com/embedded/linux-tegra-r3271) the drivers on the host PC form NVIDIA. The required 32.7.1 drivers are shown below:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver4.png" /></div>

- **Step 2**. [Download](https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip) additional required installation files **H01_Drivers** on the host PC.

Move downloaded files at **Step 1** into the same folder with **H01_Drivers**. Now you will see three unzipped files in the same folder.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01drivera.png" /></div>

- **Step 3**. Unzip the file of **AGX_H01_Drivers.zip**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver1b.png" /></div>

- **Step 4**. Open terminal in the folder and unzip the rest files. Execute the command below:

```
tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo  ./apply_binaries.sh
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver5.png" /></div>

!!!Note
    If you donwnload files in somewhere else, make sure you add the path to the files. Like example here is "/Desktop/AGX/". If you directly open the terminal in the file, the path will be automatically added.

The command lines should be like:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx0.png" /></div>

- **Step 5**. Move back and copy & paste the file from downloaded **H01_Driver** file to the unzipped file **Jetson_Linux_R32.6.1_aarch64.tbz2**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver6.png" /></div>

Here are the commands below:

```
cd ..
cp -a -f H01_Driver/Linux_for_Tegra/kernel Linux_for_Tegra/
cd Linux_for_Tegra/
sudo ./flash.sh jetson-xavier mmcblk0p1
```

The flash will be running and the progress is like:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx2.png" /></div>

The final result shoule be like:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx3.png" /></div>

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
