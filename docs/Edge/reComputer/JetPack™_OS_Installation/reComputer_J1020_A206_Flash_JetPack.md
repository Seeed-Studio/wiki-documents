---
description: reComputer J1020 | A206
title: reComputer J1020 | A206
keywords:
  - Edge
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J1020_A206_Flash_JetPack
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Flash JetPack OS to reComputer J1020 (A206 carrier board)

In this wiki, we will show you how to flash Jetpack OS to reComputer J1020. Since the carrier board of it is designed like the offical NVIDIA Nano Developer Carrier Board, we can flash the JetPack in two ways.

## Getting Started

We can use **NVIDIA SDK Manager** Linux Software or we can directly use the **NVIDIA Linux Driver Package** via Linux command line to flash JetPack OS into the reComputer J1020. For the beginners to NVIDIA Jetson, we highly recommand NVIDIA SDK Manager.

- [Option 1 - Flashing JetPack OS via NVIDIA SDK Manage](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Option 2 - Flashing JetPack OS via Command Line](#flashing-jetpack-os-via-command-line)

There are still some preparation that we need first:

### Software Preparation

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA account</span></a>
- Linux Host Computer with Ubuntu 18.04 OS (or above)

!!!note
 In this tutorial, we will use Ubuntu 18.04 LTS based system to complete the installation.

### Hardware Preparation (Force Recovery Mode)

Before we can move on to the installation steps, we need to make sure that our reComputer is in the force recovery mode.

**Step 1.** Before you start, you need to disconnect power of the reComputer.
**Step 2.** To enter recovery mode, you need to connect **FC REC** and **GND** using jumpers.

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">Button Header</th>
      <th align="center">Description</th>  
      <th align="center">Button Header</th>
      <th align="center">Description</th>
    </tr>
    <tr>
      <td rowSpan={6}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/J202-b.png" /></div></td>
      <td align="center">1</td>
      <td align="center">PWR BTN</td>
      <td align="center">7</td>
      <td align="center">AUTO ON</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">DISABLE</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td align="center">FC REC</td>
      <td align="center">9</td>
      <td align="center">UART TXD</td>
    </tr>
    <tr>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">10</td>
      <td align="center">UART RXD</td>
    </tr>
    <tr>
      <td align="center">5</td>
      <td align="center">SYS RET</td>
      <td align="center">11</td>
      <td align="center">LED +</td>
    </tr>
    <tr>
      <td align="center">6</td>
      <td align="center">GND</td>
      <td align="center">12</td>
      <td align="center">LED -</td>
    </tr>
  </tbody></table>

**Step 3.** Power up the reComputer with 12V/5A DC cable on the left of the reComputer and use a Tpye-C cable to connect the Linux Host PC on the right of the reComputer.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

!!!Attention
    Before wiring, please pay attention to the power connector and data connector, please do not connect the data connector directly to DC power.

**Step 4.** Under the command line window of the host computer, enter the command `lsusb`. When the returned content has the `ID 0955:7f21 NVidia Corp.` in it, it means that the reComputer is in the force recovery mode and we can proceed to the subsequent operations.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## Flashing JetPack OS via NVIDIA SDK Manager

Next we will go through the tutorial about installing the system via NVIDIA SDK Manager. The an NVIDIA SDK Manager all-in-one tool that bundles developer software and provides an end-to-end development environment setup solution for NVIDIA SDKs. Thus, it is recommanded for the beginners.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### Step 1.  Install NVIDIA SDK Manager on the Linux Host PC

We need to open the browser on the Linux Host PC and <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>download the NVIDIA SDK Manager</span></a> from the NVIDIA official website.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### Step 2.  Open NVIDIA SDK Manager and login

On the Linux host PC screen, we can right click the mouse and open a Terminal. Then we can type the command below to start the SDK Manager:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

The first time you use NVIDIA SDK Manager, a web page will pop up prompting you to log in with your previously registered NVIDIA account.

### Step 3.  Select the target device

After logging in, you will be taken to the first screen where the first step of installing. Since we have already connected the reComputer J1020, there will be a window pop up to let you select the hardware device.

The reComputer J1020 has equipped with **NVIDIA Jetson Nano 4GB module**, so we can choose the first one.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

There are more selections for you to choose in the first screen:

- The **Jetson** in the Product Category panel need to be selected.
- In the Hardware Configuration panel, we recommend that you **do not select Host Machine**. This will take more time to install the NVIDIA components for your current Ubuntu host. You can choose it if you need.
- In the Target Operating System panel, we can select different **operating system** and **JetPack version**. But be careful the version of JetPack, different modules may support different type of JetPack. We recommand "JetPack 4.6.1" here.
- In the Additional SDKs, since the storage space of eMMC is only 16GB, it will be out of memory if we install DeepStream here.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Click Continue to proceed to the next step.

### Step 4.  Review wanted components

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

### Step 5. Install the system

Before the installation begins, SDK Manager prompts you to enter your `sudo` password.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

After a while, we will be asked to set up the new system for our reComputer. Since we manually force into recovery mode, we select `Manual setup: set the target to Force Recovery Mode via manual operations` here. Meanwhile, we choose the default **Pre-Config**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

After that, we need to enter the name and password of our new Jetson system to our reComputer, it is set by yourself.

When ready, click `Flash` to continue.

The display shows the progress of the download and installation of the software. Please wait patiently for the installation to complete.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### (Optional)Step 6. Install the SDK components

If you checked the installation of the component in the previous **step 4**, you will need to go through this step.

After a moment, you will be able to see a new window pop up in the NVIDIA SDK Manager, prompting you that you need to connect to your device via IP address. It means the system has been alreadly installed and the components installing will be proceeded.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

In this case, we can **pull out the jumper** and restart the reComputer. Then we need to connect the reComputer to a monitor via HDMI, enter the password you entered in **step 4**, and log in to the main interface.

At this point you need to connect the reComputer to the same LAN as the Linux host PC and determine the **IP address** of the Jetson by using the command `ifconfig`.

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

On the **Linux host PC**, we need to open a browser and go the <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. First we should check if the version of Jetson Linux is supported our reComputer Jetson module.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

Once you find the proper version, click to go to the downloaded page. Find and click the "L4T Driver Package (BSP)" and "Sample Root Filesystem" to download the driver files. The names of the files are like `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` and `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

As the example, we choose the NVIDIA L4T 32.7.1 version since it is included as part of JetPack4.6.1 and supports the Jetson Nano module. The names of the files:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### Step 2.  Unzip Package Files and Assemble the Rootfs via Command Line

On the Linux host PC, we should find a folder and store the package files we download before. Then open a command line window(Terminal) at the folder and use the command line below to unzip the files and assemble the rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!Note
    `${}` is where you put the names of the files.

*As the example of **NVIDIA L4T 32.7.1**, the downloaded files are stored in `/Desktop/L4T_Drivers`, so under the '/Desktop/L4T_Drivers' path we open the command line window(Terminal) and execute the following command.

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

The output should be like:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### Step 3.  Flash the System to reComputer

Since we alreadly force the reComputer J1020 into the recovery mode and the module is Jetson Nano. We can directly flash the system into the reComputer execute following command:

```sh
sudo ./flash.sh jetson-nano-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    Flashing L4T takes about 10 minutes, or more under a slow host computer.

At this moment, we can unplug the jumper and then power up the reComputer again to use it.

## Troubleshooting

### Troubleshooting Installation with NVIDIA SDK Manager

There are many causes of various installation errors. Below is a checklist of common installation issues, which may help you recover from a broken installation.

1. Review the summary table to identify which component failed.

    a. Expand the group with the "Error" status.

    b. When you find the failed component, click the details icon to the right of Install Error to be redirected to the Terminal tab, which will display the exact error.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. If the error is related to an environment issue, such as a broken apt repository or missing prerequisite, try to fix it manually, then click the Retry Failed Items button.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Retrying the installation is also available in two other ways:

    a. From **Flashing to eMMC with SDK Manager -- Step 3**, use the Repair/Uninstall button to get to the Manage NVIDIA SDKs page. If needed, expand the SDK that has the "Broken" status, then click Repair for the relevant part (Host or Target).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. At **Flashing to eMMC with SDK Manager -- Step 3**, select the required SDK and run through the installation again.

5. Finally, try to uninstall and reinstall the relevant SDK.

### Troubleshooting installation using the command line

The command line installation method is relatively simple, and is often prone to error in scenarios where force recovery mode is used.

If you encounter the error shown below in **Flashing to eMMC with command-line -- Step 2**, you probably did not succeed in getting the Carrier Board into force recovery mode. Please pay special attention, do not enter force recovery mode with the Carrier Board powered on, as this is not valid.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

If you can't get into the system in **Flashing to eMMC with command-line -- Step 3** and are stuck on the boot up display command line, you probably did not exit force recovery mode. Likewise, it is not valid for you to unplug the jumper to exit force recovery mode while the Carrier Board is powered up, this all needs to be done while you are powered down.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

!!!Note
    If more storage space is needed, we can use SD card to expand the capacity, or burn the system on SD card, you can refer to our recommended solution [Flash System on SD card](https://wiki.seeedstudio.com/Flash_System_on_SD_card/)

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
