---
description: A205E Mini PC
title: A205E Mini PC
keywords:
  - Nvidia
  - reComputer
image: https://avatars.githubusercontent.com/u/10758833
slug: /reComputer_A205E_Flash_System
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

# Flash JetPack OS to A205E Carrier Board or A205E Mini PC (NVIDIA Jetson Xavier NX supported)

In this wiki, we will show you how to flash Jetpack OS to the A205E Carrier Board or A205E Mini PC which supports NVIDIA Jetson Xavier module. We here will introduce you two ways to flash the system, and because the A205 Carrier Board is different to the official NVIDIA Jetson Carrier Board, the corresponding driver should be installed as well.

<div align="center">
  <table>
    <tbody><tr>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank"><span>A205E Carrier Board</span></a>
        </td>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank"><span>A205E Mini PC</span></a>
        </td></tr>
      <tr>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank" rel="noopener"><img width={350} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/5/_/5_7_1.png" alt /></a>
        </td>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank" rel="noopener"><img width={380} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/1/_/1_9_2.png" alt /></a>
        </td>
      </tr>
    </tbody></table>
</div>

## Getting Started

we can easily do this by using the **Linux Terminal**. For people who have Linux knowledge base, we highly recommand using Linux Terminal only.

- [Flashing JetPack OS via Linux terminal](#flashing-jetpack-os-via-command-line)

### Software Preparation

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA account</span></a>
- Ubuntu 18.04 OS on the Host Computer

!!!note
	In this tutorial, we will use Ubuntu 18.04 LTS based system to complete the installation.

### Hardware Preparation (Force Recovery Mode)

* Host computer with Ubuntu 18.04 OS
* a USB Type-C data Cable
* Power adptor for A205E Carrier Board or A205E Mini PC

Before we can move on to the installation steps, we need to make sure that the board is in the force recovery mode

**Step 1.** Please locate the USB Type-C port, the Power Button, Reset Button and Recovery Button on the side of the A205E Carrier Board or A205E Mini PC.

<div align="center">
  <table>
    <tbody><tr>
        <td align="center">A205E Carrier Board
        </td><td align="center">A205E Mini PC
        </td></tr>
      <tr>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank" rel="noopener"><img width={350} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/n/antenna_dc_jack_io_controller_20_pin_1_.png" alt /></a>
        </td>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank" rel="noopener"><img width={380} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/2/_/2_8_3.png" alt /></a>
        </td>
      </tr>
    </tbody></table>
</div>


TO put the A205E in Force Recovery Mode, please make sure A205E is powered off.

**Step 2.** Conenct the USB Type-C cable with the Type-C programming port on **A205E Carrier Board or A205E Mini PC** and the host computer.

**Step 3.** Connect the Power adptor for **A205E Carrier Board or A205E Mini PC**.

**Step 4.** **Press and Hold** the **Recovery Key** first, and then **Press and Hold** the **Power Key**, wait for the LED to be light up, then **Release** the **Power Key**, now **Wait for 2 second** and **Release** the **Recovery Key**. 

**Or**

If the **A205E Carrier Board or A205E Mini PC** is in the **Power On** state, **Press and Hold** the **Reset Key** and the **Recovery Key**, **Release** the **Reset Key** for **2 Second**, then **Release** the **Recovery Key**. 

**Step 5.** On the Linux host PC screen, we can right click the mouse to open a Terminal and enter the command `lsusb`. When the returned content has the `NVidia Corp.` in it, it means that your A205 Carrier Board is in force recovery mode and you can proceed to the subsequent operations.

The ID depends on the modules on the carrier board and the information show as below:

- For Jetson Xavier NX: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>


## Flashing JetPack OS via Command Line

Here is the workflow of using Command Line scrpit to flash Jetpack OS:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>


### Step 1. Download the proper NVIDIA Linux Driver Package

On the **Linux host PC**, we need to open a browser and go the <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. First we should check if the version of Jetson Linux is supported. In this case we are using the NVIDIA L4T 35.1.0(equivalent of Jetpack 5.0.2)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/select_35_1.png" /></div>


Once you find the proper version, click to go to the downloaded page. Find and click the "L4T Driver Package (BSP)" and "Sample Root Filesystem" to download the driver files. The names of the files are like `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` and `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/download_files.png" /></div>


As the example, we choose the NVIDIA L4T 35.1.0 version, The names of the files should be:

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

### Step 2.  Unzip Package Files and Assemble the Rootfs via Command Line

On the Linux Host PC, Please open a ``Terminal`` and use the command line below to unzip the files and assemble the rootfs:

```sh
$ tar xf ${L4T_RELEASE_PACKAGE}
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
$ cd ..
$ sudo ./apply_binaries.sh
```

!!!Note
    `${XXX_XX_XXX}` is where you put the names of the files.

* For example, the downloaded files are stored in `~/Downloads/`, please open the ``Terminal`` on your Ubuntu Host Computer and enter following commands:

```bash
cd ~/Downlands/
mkdir Jetpack_502
mv Jetson_Linux_R35.1.0_aarch64.tbz2 Jetpack_502/
mv Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2 Jetpack_502/
cd Jetpack_501/
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

### Step 3.  Flash the System to the Board

In the example we use NVIDIA Jetson Xavier NX module and we can directly flash the system into the board execute following command:

```sh
cd ~/Downlands/Jetpack_502/Linux_for_Tegra
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>


## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
