---
description: reServer J2032
title: reServer J2032 Flash NVIDIA JetPack™ OS 
tags:
  - reServer
keywords:
  - reServer
image: https://avatars.githubusercontent.com/u/10758833
slug: /reServer_J2032_Flash_Jetpack
last_update:
  date: 01/03/2023
  author: w0x7ce
---

<!-- ---
name: reServer 2032 Flash Jetpack
category: reServer 2032 Flash Jetpack
bzurl: 
wikiurl: 
sku: 
--- -->

# Introduction
In this wiki, we will show you how to flash NVIDIA Jetpack Operating System on to the Jetson Xavier NX module with reServer J2032.

Here is the overview of the reServer J2030 carrier board for reference:  

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    reServer J2030 carrier board overview
  </p><table>
    <tbody><tr>
      </tr>
      <tr>
        <td align="center">Front
        </td><td align="center">Back
        </td></tr>
      <tr>
        <td align="center">
          <img width={700} src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware1.png" alt />
        </td>
        <td align="center">
          <img width={700} src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware2.png" alt />
        </td>
      </tr>
    </tbody></table>
</div>


## Getting Started

We can use **NVIDIA SDK manager** to flash the system, or we can easily do this by using the **Command Line Script**. For people who have Linux knowledge base, we highly recommend using **Command Line Script** which provides much more functionality.

- [Flashing JetPack OS via NVIDIA SDK manager and Linux terminal](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Flashing JetPack OS via Linux terminal](#flashing-jetpack-os-via-command-line)

There are still some preparation that needed:

### Software Preparation

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA account</span></a>
- Linux Host Computer with Ubuntu 18.04 OS (or above)

!!!note
	In this tutorial, we will use Ubuntu 18.04 LTS based system to complete the installation.

### Hardware Preparation (Force Recovery Mode)

Before we can move on to the installation steps, we need to make sure that the reServer J2032 is put in the force recovery mode.

**Step 1.** Before you start, you need to disconnect power of the reServer J2032.

**Step 2.** To enter recovery mode, you need to connect **FC REC** and **GND** pins using jumpers. The pins can be located as shown below: 

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    Force Recovery Jumper Setting Guide 
  </p><table>
    <tbody><tr>
      </tr>
      <tr>
        <td align="center">
          <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reServerJ2032/force_recover.png" /></div>
        </td>
        <td align="center">
          <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/debugheader_REC.png" /></div>
          <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032jumper.png" /></div>
        </td>
      </tr>
    </tbody></table>
</div>



**Step 3.** Using a Tpye-C cable to connect to the Linux Host PC with the `NX USB` (as shown in the image below) usb type C port on the reServer J2032, plug in the 12V/5A DC cable and then press the power button from the front to turn the the power for reServer J2032.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/back_type_c.png" /></div>


<!-- !!!Attention
    Before wiring, please pay attention to the power connector and data connector, please do not connect the data connector directly to DC power. -->

**Step 4.** Now on the **Host computer(Ubuntu 18.04)** open `Terminal`, enter command `lsusb`. When the returned content has the `ID 0955:7e19 NVidia Corp.` in it, it means that the reServer J2032 is in the force recovery mode and we can proceed to the next step.

- For Jetson Xavier NX: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>


## Flashing JetPack OS via NVIDIA SDK Manager

Next we will go through the tutorial about installing the system via NVIDIA SDK Manager. The an NVIDIA SDK Manager all-in-one tool that bundles developer software and provides an end-to-end development environment setup solution for NVIDIA SDKs. Thus, it is recommanded for the beginners.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>


### Step 1.  Install NVIDIA SDK Manager on the Linux Host PC.

We need to open the browser on the Linux Host PC and <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>download the NVIDIA SDK Manager</span></a> from the NVIDIA official website.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>


### Step 2.  Open NVIDIA SDK Manager and login.

On the Linux host PC screen, we can right click the mouse and open a `Terminal`. Then we can type the command below to start the SDK Manager:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>


The first time you use NVIDIA SDK Manager, a web page will pop up prompting you to log in with your previously registered NVIDIA account.

### Step 3.  Select the target device.

After logging in, you will be taken to the first screen where the first step of installing. Since we have already connected the reServer J2032, there will be a window pop up to let you select the hardware device. 

The reServer J2032 has equipped with **NVIDIA Jetson NX module**, so we can choose the first one.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>


There are more selections for you to choose in the first screen:

- The **Jetson** in the Product Category panel need to be selected.
- In the Hardware Configuration panel, we recommend that you **do not select Host Machine**. This will take more time to install the NVIDIA components for your current Ubuntu host. You can choose it if you need.
- In the Target Operating System panel, we can select different **operating system** and **JetPack version**. But be careful the version of JetPack, different modules may support different type of JetPack. We recommand "JetPack 4.6.1" here.
- In the Additional SDKs, since the storage space of eMMC is only 16GB, it will be out of memory if we install DeepStream here.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>


Click Continue to proceed to the next step.

### Step 4.  Review wanted components.

From **Details and License**, you can expand the host components and target components panels to review the components that will be installed on your system.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>


If you only need to install the system, you can uncheck the SDK component.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>


!!!Tip
    When choosing which components to install, you may want to keep an eye on the capacity used. The built-in eMMC size is only 16GB, please allocate and use this space wisely according to your actual needs.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>

    After actual testing, there is only about 500MB of eMMC space left after installing the full set of SDK components.

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>


    If you want to check how to solve the problem of insufficient capacity, please refer to [Troubleshooting](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space).

If you want SDK Manager to download all the files to a location other than the default path, go to the Download & Install Options located at the bottom of the screen, then select the path you wish to use.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>


Select Continue to proceed to the next step.

### Step 5. Install the system.

Before the installation begins, SDK Manager prompts you to enter your `sudo` password.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>


After a while, we will be asked to set up the new system for our reServer J2032. Since we manually force into recovery mode, we select `Manual setup: set the target to Force Recovery Mode via manual operations` here. Meanwhile, we choose the default **Pre-Config**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>


After that, we need to enter the name and password of our new Jetson system to our reServer J2032, it is set by yourself.

When ready, click `Flash` to continue.

The display shows the progress of the download and installation of the software. Please wait patiently for the installation to complete.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>


### (Optional)Step 6. Install the SDK components.

If you checked the installation of the component in the previous **step 4**, you will need to go through this step.

After a moment, you will be able to see a new window pop up in the NVIDIA SDK Manager, prompting you that you need to connect to your device via IP address. It means the system has been alreadly installed and the components installing will be proceeded.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>


In this case, we can **pull out the jumper** and restart the reServer J2032. Then we need to connect the reServer J2032 to a monitor via HDMI/Display Port, enter the password you entered in **step 4**, and log in to the main interface.

At this point you need to connect the reServer J2032 to the same LAN as the Linux host PC and determine the **IP address** of the Jetson by using the command `ifconfig`.

Go back to the Linux host PC and enter the IP address you just obtained. NVIDIA SDK Manager will try to connect to the Jetson device and proceed to complete the installation of the next SDK components.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>


When you see the following window appear, the installation has been done. You can start using Jetson or continue to follow the steps below to complete some basic configuration of your new system.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>


!!!Attention
    Be sure to unplug the jumper and exit force recovery mode before re-powering into the system.

## Flashing JetPack OS via Command Line

Thanks to the freedom to customize the BSP(NVIDIA Linux Driver Package), flashing JetPack OS via command line can be very easy for the Linux knowledge base users.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>


### Step 1. Download the proper NVIDIA Linux Driver Package

On the **Linux host PC**, we need to open a browser and go the <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. First we should check if the version of Jetson Linux is supported our reServer J2032 Jetson module.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/select_L4T.png" /></div>


Once you find the proper version, click to go to the downloaded page. Find and click the "L4T Driver Package (BSP)" and "Sample Root Filesystem" to download the driver files. The names of the files are like `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` and `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/download_file.png" /></div>


As the example, we choose the NVIDIA L4T 32.7.1 version since it is included as part of JetPack4.6.1 and supports the Jetson Nano module. The names of the files:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
- Jetson_Linux_R32.7.1_aarch64.tbz2

### Step 2.  Unzip Package Files and Assemble the Rootfs via Command Line

On the Linux host PC, we should find a folder and store the package files we download before. Then open a command line window(Terminal) at the folder and use the command line below to unzip the files and assemble the rootfs:

```sh
$ tar xf ${L4T_RELEASE_PACKAGE}
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
$ cd ..
$ sudo ./apply_binaries.sh
```

!!!Note
    `${}` is where you put the names of the files.

*As the example of **NVIDIA L4T 32.7.1**, the downloaded files are stored in `/Desktop/L4T_Drivers`, so under the '/Desktop/L4T_Drivers' path we open the command line window(Terminal) and execute the following command.

```sh
$ tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
$ cd ..
$ sudo ./apply_binaries.sh
```

The output should be like:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>


### Step 3.  Flash the System to reComputer

Since we alreadly force the reComputer J1020 into the recovery mode and the module is Jetson Nano. We can directly flash the system into the reComputer execute following command:

```sh
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>


!!!Tip
    Flashing L4T takes about 10 minutes, or more under a slow host computer.

At this moment, we can unplug the jumper and then power up the reComputer again to use it.

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).

<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
