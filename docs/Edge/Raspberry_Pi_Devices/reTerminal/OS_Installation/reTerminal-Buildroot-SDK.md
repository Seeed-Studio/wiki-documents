---
description:  Buildroot for reTerminal
title:  Buildroot for reTerminal
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-Buildroot-SDK
last_update:
  date: 2/1/2023
  author: jianjing Huang
---


# Buildroot for reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/thumb.jpg" alt="pir" width="500" height="auto"/></p>

## Introduction

[Buildroot](https://buildroot.org) is an easy-to-use tool that simplifies and automates the process of building a complete Linux system for an embedded system, using cross-compilation.

In order to achieve this, Buildroot is able to generate a cross-compilation toolchain, a root filesystem, a Linux kernel image and a bootloader for your target. Buildroot can be used for any combination of these options, independently (you can for example use an existing cross-compilation toolchain, and build only your root filesystem with Buildroot).

It has a simple structure that makes it easy to understand and extend. It relies only on the well-known Makefile language. Buildroot is an open source project and many developers contribute to it daily.

By following the guide below, you will be able to build your own [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) system image using Buildroot. So let's get started!

## Compile Buildroot Source Code

### Manual Compilation on Local Machine

Now we will move on to manually compiling the system image for reTerminal using Buildroot.

**note:** This guide was written after testing on a host PC with Ubuntu 20.04 installed. However, it will work for other Linux systems.

- **Step 1.** Prepare the development environment on the host PC by installing the following packages (git, gcc and make)

```sh
sudo apt update
sudo apt install git
sudo apt install build-essential
```

**Note:** If you already have the above packages installed. You can skip it.

- **Step 2.** Clone the following GitHub repo

```sh
git clone --depth=1 https://github.com/Seeed-Studio/seeed-linux-buildroot.git -b master
```

- **Step 3.** Navigate to the **seeed-linux-buildroot** directory

```sh
cd seeed-linux-buildroot
```

#### Compile with the default configuration for reTerminal

Type the following to start compiling with the default reTerminal configuration

```sh
make reTerminal_64_defconfig
make
```

#### Compile with your own configuration for reTerminal

Type the following to install the necessary package to compile with your own configuration

```sh
sudo apt install libncurses-dev
```

- **Step 5.** Type the following to open the buildroot configuration window

```sh
make menuconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/menuconfig.png" alt="pir" width="1000" height="auto"/></p>

You can use this configuration window and navigate through the options available and **customize the image** according to your needs. Also if you click **Save** and **Exit** from this window without making any changes, the default reTerminal configuration will be loaded.

#### Find the Compiled Image

Once the compilation is successful, navigate to `seeed-linux-buildroot/output/images` and you will find the compiled image as **sdcard.img**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/image-location-1.png" alt="pir" width="1000" height="auto"/></p>

### Download Already Compiled Image

If you want to download a reTerminal system image which is already compiled using Buildroot, you can proceed to the steps below.

- **Step 1.** Open [this link](https://github.com/Seeed-Studio/seeed-linux-buildroot/actions) to enter the **Actions** page of **seeed-linux-buildroot** GitHub repo

- **Step 2.** Click on the latest **Seeed reTerminal buildroot** workflow

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/workflow.png" alt="pir" width="1000" height="auto"/></p>

- **Step 3.** Under **Artifacts**, click on **buildroot deploy** to start downloading the image

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/download.jpg" alt="pir" width="1000" height="auto"/></p>

**Note:** After the downloading the image, extract the image to obtain the **sdcard.img** file

## Flash the Image to reTerminal

Now we will move onto flashing the image to the eMMC of the CM4 on the reTerminal.

Follow the steps in [this wiki](https://wiki.seeedstudio.com/reTerminal/#getting-started-with-reterminal-extended) and pay attention to the following step:

**Note:** When you open **Raspberry Pi Imager**, click **CHOOSE OS**, select **Use custom** and choose the downloaded **sdcard.img** file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## First Boot on reTerminal

After we flash the system image to the reTerminal, power on the reTerminal. Here you will see the kernel log pop up on the reTerminal LCD and at last a demo application will open which is made using Qt.

The boot up time of the default system image is around 30 seconds

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## Analyze Buildroot Image

As mentioned earlier, Buildroot is a very powerful tool, it can rely on third-party libraries and tools, can quickly build what we need. If you want to understand the Buildroot compilation time, dependencies, size of the resources consumed by the compilation and so on, it is very inconvenient to check through the code. However, Buildroot provides visual analysis tools to analyse the above-mentioned and we only need a few simple commands to use them.

Start by installing the following packages

```sh
sudo apt install python3-matplotlib python3-numpy
```

### Generate Dependency Diagrams

One of Buildroot's jobs is to understand the dependencies between packages and make sure they are built in the correct order. These dependencies can sometimes be complex, and for a given system, it is often not easy to understand why one package or another was introduced by Buildroot and built successfully. To help understand dependencies and better understand the role of different components in embedded Linux systems, Buildroot is able to generate dependency diagrams (in PDF format)

- **Step 1.** Install the following package

```sh
sudo apt install graphviz
```

- **Step 2.** Generate dependency diagrams

```sh
make graph-depends
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/depends-command.png" alt="pir" width="1000" height="auto"/></p>

After the above commands, the dependency diagrams will be generated at `seeed-linux-buildroot > output > graphs` as:

- graph-depends.pdf
- graph-depends.dot

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)

**Note:** Click on the above image to view an enlarged version

### Generate Analysis of Size of the Resources Consumed by the Compilation

Buildroot can generate an analysis of the size of the resources consumed by the compilation.

Type the following command

```sh
make graph-size
```

After the above command, the visual analysis files will be generated at `seeed-linux-buildroot > output > graphs` as:

- graph-size.pdf
- file-size-stats.csv
- package-size-stats.csv

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)

**Note:** Click on the above image to view an enlarged version

## Test Buildroot Image

To test the above Buildroot image with reTerminal, you can visit the [reTerminal Hardware and Interfaces Usage wiki](https://wiki.seeedstudio.com/reTerminal-hardware-interfaces-usage) and refer to the steps mentioned.

## Resources

- **[Webpage]** [Buildroot Documentation](https://buildroot.org/docs.html)
- **[GitHub]** [seeed-linux-buildroot](https://github.com/Seeed-Studio/seeed-linux-buildroot)

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
