---
description: Getting Started with balenaOS on ODYSSEY-X86
title: BalenaOS Installation
keywords:
- Sorftware Allxon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BalenaOS-X86-Getting-Started
last_update:
  date: 1/13/2023
  author: jianjing Huang
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/thumb.png" alt="pir" width="1000" height="auto"/></p>

## What is balenaOS?

[balenaOS](https://www.balena.io/os) is an operating system optimized for running Docker containers on embedded devices, with an emphasis on reliability over long periods of operation, as well as a productive developer workflow inspired by the lessons learned while building balena.

The core insight behind balenaOS is that Linux containers offer, for the first time, a practical path to using virtualization on embedded devices. VMs and hypervisors have led to huge leaps in productivity and automation for cloud deployments, but their abstraction of hardware, as well as their resource overhead and lack of hardware support, means that they are not suitable for embedded scenarios. With OS-level virtualization, as implemented for Linux containers, both those objections are lifted for Linux devices, of which there are many in the Internet of Things.

## What is balenaCloud?

[balenaCloud](https://www.balena.io/cloud) is a comprehensive cloud-based device deployment and management infrastructure hosted by balena. It allows even the most novice fleet owner to build applications in any language, seamlessly provision devices, quickly test new features, and easily manage their device fleet. Docker container technology enables safe, secure, and reliable updates through a single command while devices remain online and fully functional. Users can view and manage their entire device fleet using the balenaCloud dashboard or they can choose to interact directly with the API.

## Quickstart with balenaOS on ODYSSEY - X86

The easiest way to install balenaOS on the ODYSSEY - X86, along with balenaCloud, involves just a few steps:

- Create a device fleet on balenaCloud
- Flash the balenaOS image to a USB drive
- Connect a USB drive to ODYSSEY - X86 and boot live image
- Booted ODYSSEY - X86 appears on balenaCloud dashboard

Now let's proceed!

### Prerequisites

Prepare the following before getting started:

- [ODYSSEY - X86 board](https://www.seeedstudio.com/ODYSSEY-X86J4125864-p-4916.html)
- USB flash drive
- Ethernet cable or WiFi connectivity
- [balena account](https://dashboard.balena-cloud.com/signup)
- [balenaEtcher](https://www.balena.io/etcher) or any other image flashing software

### Create a device fleet on balenaCloud

- **Step 1.** [Sign up](https://dashboard.balena-cloud.com/signup) for a balena account and log in

- **Step 2.** After logging in, click **Create fleet** to create your first device fleet

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/5.png" alt="pir" width="1000" height="auto"/></p>

**Note:** A fleet is a group of devices that share the same architecture and run the same code. When you provision a device, it is added to a specific fleet, but can be migrated to another fleet at any time.

- **Step 3.** Type a name for the fleet, select **Seeed ODYSSEY-X86** as the default device type, keep **Starter** as the Fleet type and finally click **Create new fleet**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/6.png" alt="pir" width="1000" height="auto"/></p>

**Note:** To create a fleet with multiple containers, you'll want to use the Starter or Microservices fleet type. The Starter fleets are full-featured and free for all users, with a limit of up to 10 total devices across all Starter fleets.

- **Step 4.** Click **+ Add device** to add ODYSSEY - X86 board to this fleet and connect it with balenaCloud

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/7.png" alt="pir" width="1000" height="auto"/></p>

- **Step 5.** Here **device type** will be already selected and **version** will be selected as the latest available one. Select **Development** as the **edition**, since it is recommended for first time users. You can also select the network connection as either **Ethernet only** or **Wifi + Ethernet**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/8.png" alt="pir" width="650" height="auto"/></p>

**Note:** When you're getting started, a Development image is the most useful, as it permits many testing and troubleshooting features. For production use, be sure to switch to a Production image. More details on the differences between Development and Production images are detailed [here](https://www.balena.io/docs/reference/OS/overview/2.x/#development-vs-production-images).

- **Step 6.** Click **+ Advanced** to select the rate at which your device checks for updates

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/9.png" alt="pir" width="350" height="auto"/></p>

### Flash and run balenaOS image from a USB drive

- **Step 1.** Once the image configuration is done, click the arrow next to **Flash**, and select **Download balenaOS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/10.jpg" alt="pir" width="300" height="auto"/></p>

When the download completes, you should have a zipped image file with a name like **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img**, where **ODYSSEY-fleet** is the name you gave your fleet on the dashboard. Alternatively, by clicking on the toggle section of the download button, you also have the option to download just a configuration file (config.json) rather than an entire image.

- **Step 2.** Open [balenaEtcher](https://www.balena.io/etcher), click **Flash from file** and select the **zip** file that we downloaded before.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/etcher.png" alt="pir" width="600" height="auto"/></p>

- **Step 3.** Connect a USB flash drive to the PC, select the **target** as the connected flash drive and then click **Flash**

Next, we will run this image on the ODYSSEY - X86

- **Step 4.** Connect Flash drive to ODYSSEY - X86 board and turn on the board

- **Step 5.** While turning on the board, keep pressing **DELETE key** to enter **BIOS setup**

- **Step 6.** Go to **Boot** section and set the **Boot Option #1** to **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **Step 7.** Go to **Save & Exit** and select **Save Changes and Reset**

Now the OS will be successfully booted from the USB Flash Drive

### Manage ODYSSEY - X86 from balenaCloud dashboard

- **Step 1.** Open balenaCloud dashboard again and the ODYSSEY - X86 board will appear after about a minute!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/11.png" alt="pir" width="1000" height="auto"/></p>

- **Step 2.** Click on the device from the list to access the device dashboard

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/12.png" alt="pir" width="1000" height="auto"/></p>

If you can't get the device online, please visit  [balena support channel](https://www.balena.io/docs/learn/welcome/support)

## FAQ

### Q1: How can I run balenaOS image from HDD/ SSD?

If you want to run the balenaOS image from HDD/ SSD rather than running from a USB drive, you can follow the steps below

- **Step 1.** Follow from **step 1 - step 7** in above **Flash and run balenaOS image from a USB drive** section

- **Step 2.** After booting successfully, turn off the board from balenaCloud dashboard

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/13.png" alt="pir" width="700" height="auto"/></p>

**Note:** We need to boot once after flashing because the **resin-data** partition will grow to take up the remaining space on the flash drive, and we will use that space to store the image we need to flash to the HDD/SSD.

- **Step 3.** Remove the flash drive from the ODYSSEY - X86 and connect to the PC

- **Step 4.** Extract the **zipped image file** downloaded before

- **Step 5.** Open a terminal window and copy the extracted **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img** image to the **resin-data** folder inside **resin-data** partition of the flash drive

```sh
sudo cp balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img /media/username/resin-data/resin-data
```

**Note:** Change **username** to the username of your PC

- **Step 6.** Remove Flash drive from PC and connect to the ODYSSEY - X86 board. Also connect an external HDD/ SSD to the ODYSSEY board.

- **Step 7.** After the board is booted, navigate to balenaCloud dashboard and access the **Terminal**. Here click on the **Select a target** drop-down-menu, select **Host OS** and click **Start terminal session**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/15.jpg" alt="pir" width="10000" height="auto"/></p>

- **Step 8.** Type the following command on the terminal

```sh
fdisk -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/fdisk-l.png" alt="pir" width="620" height="auto"/></p>

We can see that the connected HDD as **/dev/sda**

- **Step 9.** Flash the **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img** file that we copied before to the connected HDD/SSD using **dd** utility

```sh
dd if=/resin-data/balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img of=/dev/sda
```

**Note:** Replace **/dev/sda** with the name corresponding to the connected HDD/SSD

- **Step 10.** Once flashing is done, poweroff the ODYSSEY - X86

- **Step 11.** Remove the USB Flash drive and turn on the ODYSSEY - X86

- **Step 12.** While turning on the board, keep pressing **DELETE KEY** to enter BIOS setup

- **Step 13.** Go to **BOOT** section and set the **Boot Option #1** to **UEFI OS xxxxx**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/bios.png" alt="pir" width="1000" height="auto"/></p>

- **Step 14.** Go to **Save & Exit** and select **Save Changes and Reset**

Now the OS will be successfully booted from the HDD/SSD

### Q2: How can I access ODYSSEY - X86 using terminal?

You can access ODYSSEY - X86 via terminal but you need to have Balena CLI installed on the host PC. Balena CLI is a Command Line Interface for balenaCloud or openBalena. It is a software tool available for Windows, macOS and Linux, used through a command prompt / terminal window. It can be used interactively or invoked in scripts.

- **Step 1.** Follow [this link](https://github.com/balena-io/balena-cli/blob/master/INSTALL.md) to install Balena CLI according to your operating system.

**Note:** For this tutorial, we will use Balena CLI on Ubuntu. However, the instructions will be similar for other systems.

- **Step 2.** Connect an Ethernet cable to the ODYSSEY - X86 board from your router

**Note:** Make sure host PC and ODYSSEY - X86 are on the same network

- **Step 3.** Open a terminal window and scan for BalenaOS devices on the local network

```sh
sudo balena scan
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/scan.png" alt="pir" width="550" height="auto"/></p>

- **Step 4.** SSH into the board using the IP address

```sh
balena ssh <ip address>
```

```sh
example:
balena ssh 192.168.1.78
```

Now we are inside the ODYSSEY - X86 running BalenaOS!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/ssh.png" alt="pir" width="650" height="auto"/></p>

Learn more about balena CLI [here](https://www.balena.io/docs/reference/balena-cli/)

### Q3: How can I compile balenaOS from source code

Eventhough we can obtain the balenaOS image from the balenaCloud dashboard as explained before, if you feel adventurous, you can go ahead and compile the balenaOS image from source code!

#### Manual Compilation on Local Machine

Now we will move on to manually compiling the BalenaOS system image for ODYSSEY - X86 using Yocto via the command line.

**Note:** This guide was written after testing on a host PC with Ubuntu 20.04 installed. However, it will work for other Linux systems.

- **Step 1.** Prepare the development environment on the host PC by installing the following packages

```sh
sudo apt update
sudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils
```

**Note:** If the host PC is running a different Linux distribution, please check [here](https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system)

- **Step 2.** Clone the following repo and enter the repo

```sh
git clone https://github.com/balena-os/balena-seeed-x86
cd balena-seeed-x86
```

- **Step 3.** Download all the required dependencies

```sh
git submodule update --init --recursive
```

- **Step 4.** Run the build script

```sh
./balena-yocto-scripts/build/barys
```

Now the compilation process will start. Wait patiently until the compilation is finished. The compilation time will depend on the hardware specifications of the build machine.

#### Find the Compiled Image

After compilation is finished, run the following command to check whether the system image is successfully generated

```sh
cd build/tmp/deploy/images/odyssey-x86/;ls -lh *balenaos-img
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/image-location.png" alt="pir" width="1000" height="auto"/></p>

- **balena-image-odyssey-x86** is used to boot directly from external storage (Flash Drive, SSD, HDD) connected to ODYSSEY - X86.
- **balena-image-flasher-odyssey-x86** is used to boot directly from internal eMMC storage on ODYSSEY - X86. So this flasher image is burned onto a Flash Drive that is used for the initial boot. When booted, this flasher image will automatically install BalenaOS on internal eMMC storage.

#### Using the Compiled Image

By default, the images have the file extension **.balenaos-img**. Before moving onto flashing these images, you need to rename the file extension to **.img**.

For example:

- Rename **balena-image-odyssey-x86.balenaos-img** to **balena-image-odyssey-x86.img**.
- Rename **balena-image-flasher-odyssey-x86.balenaos-img** to **balena-image-flasher-odyssey-x86.img**

## Resources

- **[Web Page]** [Balena documentation](https://www.balena.io/docs)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
