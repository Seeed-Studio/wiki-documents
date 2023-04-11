---
description: A203E Mini PC
title: A203E Mini PC
tags:
  - Nvidia
  - reComputer
keywords:
  - Nvidia
  - reComputer
image: https://avatars.githubusercontent.com/u/10758833
slug: /reComputer_A203E_Flash_System
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

# Flash JetPack OS to A203E Mini PC (NVIDIA Jetson Xavier NX)

In this wiki, we will show you how to flash Jetpack OS to the A203E Mini PC which supports NVIDIA Jetson Xavier NX module. We here will introduce you two ways to flash the system, and because the  A203E Mini PC is different from the official NVIDIA Jetson Carrier Board, the corresponding dirver should be installed as well.

<div align="center">
  <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html" target="_blank" rel="noopener"><img width={600} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/2/a203_mini_pc_-1.png" alt /></a></p>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
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
* a Micro-USB data Cable
* Power adptor for A203E

Before we can move on to the installation steps, we need to make sure that the board is in the force recovery mode

**Step 1.** Please locate the Micro-USB port, the power and reset button on the side of the A203E first.

TO put the A203E in Force Recovery Mode, please make sure A203E is powered off.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A203E/a203E_interface.png" /></div>

**Step 2.** Conenct the A203E and the host computer with the Micro-USB cable.

**Step 3.** Connect the Power adptor for A203E.

**Step 4.** **Press and Hold** the **Reset Key** first, and then **Press and Hold** the **Power Key**, wait for the LED to be light up, then **Release** the **Power Key**, now **Wait for 2 second** and **Release** the **Reset Key**.



**Step 5.** On the Linux host PC screen, we can right click the mouse to open a Terminal and enter the command `lsusb`. When the returned content has the `NVidia Corp.` in it, it means that your A203 Carrier Board is in force recovery mode and you can proceed to the subsequent operations.

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

### Step 3. Donwload and apply the driver

On the Linx Host PC, Please download the driver we have prepared by click <a href="https://files.seeedstudio.com/wiki/A203_V.2/203_jp5.0.2.zip">*A203E driver Download*</a>

To apply the driver please enter following command into the ``Terminal`` as continued from the previouse sample step where the driver file has downloaded and saved in **~/Downloads** folder and also the we created the **Jetpack_501** folder inside the **~/Downloads** folder to make sure we only have the latest **Jetpack 5.0.2** system files in the **Linux_for_Tegra** folder:

```
cd ~/Downloads/
unzip 203_jp5.0.2.zip
cp -r203_jp5.0.2/203_jp5.0.2/Linux_for_Tegra Jetpack_501/Linux_for_Tegra
```

### Step 4.  Flash the System to the Board

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
