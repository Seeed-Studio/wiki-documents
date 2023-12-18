---
description:  Yocto for reTerminal
title:  Yocto for reTerminal
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-Yocto
last_update:
  date: 2/1/2023
  author: jianjing Huang
---


# Yocto for reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" alt="pir" width="500" height="auto"/></p>

## Overview

### What is Yocto Project®?

The [Yocto Project](https://www.yoctoproject.org) is an open source collaboration project that helps developers create custom Linux-based systems for embedded products, regardless of the hardware architecture.

The project provides a flexible set of tools and a space where embedded developers worldwide can share technologies, software stacks, configurations and best practices which can be used to create tailored Linux images for embedded devices.

The project provides a standard to delivering hardware support and software stacks, allowing the interchange of software configurations and builds. The tools allow users to build and support customizations for multiple hardware platforms and software stacks in a maintainable and scalable way.

### Why Use Yocto?

Yocto Project has a development model for embedded Linux creation which distinguishes it from other simple build systems. It is called the **Layer Model**.

The Layer Model is designed to support both collaboration and customization at the same time. Layers are repositories containing related sets of instructions which tell the build system what to do. Users can collaborate, share, and reuse layers. Layers can contain changes to previous instructions or settings at any time.

This powerful override capability is what allows you to customize previous collaborative or community supplied layers to suit your product requirements.

Use different layers to logically separate information in your build. As an example, you could have a BSP layer, a GUI layer, a distro configuration, middleware, or an application. Putting your entire build into one layer limits and complicates future customization and reuse. Isolating information into layers, on the other hand, helps simplify future customizations and reuse.

### Features of Yocto

Yocto has the following features:

- **CII Best Practices:** The Linux Foundation (LF) Core Infrastructure Initiative (CII) Best Practices badge is a way for Free/Libre and Open Source Software (FLOSS) projects to show that they follow best practices. The Yocto Project is registered and has the following badge level.

- **Binary Reproducibility:** If a distribution isn’t specific about which packages to pull in to support dependencies, or their order, build systems can arbitrarily include packages based on when dependencies are filled. The Yocto Project controls dependencies avoiding contamination and has achieved reproducibility of 99.8% in “core-image minimal” and slightly less in expanded tests.

- **Cross Platform Development Framework (CROPS):** CROPS is an open source, cross-platform development framework that leverages Docker containers to provide an easily managed, extensible environment which allows developers to build binaries for a variety of architectures of Windows, Linux and Mac OS X hosts.

- **Extensible SDK:** The Yocto Project Extensible SDK (eSDK) has tools that allow you to easily add new applications and libraries to an image, modify the source of an existing component and test changes on the target hardware.

- **Toaster:** Toaster is a web interface to OpenEmbedded and BitBake, the build system used by the Yocto Project. Toaster allows you configure and run your builds, and provides information and statistics about the build process.

- **Multi-Config:** The build system can automatically and efficiently build multiple specified architectures with one command.

- **Binary Builds:** The Yocto Project allows binary files to be included in the build without including the corresponding source code files.

- **Open Source License Manifest Generation:** The Yocto Project can keep track of all open source licenses used in the build and provide you with a manifest of those licenses and source references.

By following the guide below, you will be able to build your own [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) system image using Yocto. So let's get started!

## Compile Yocto Source Code

### Manual Compilation on Local Machine - Using Bitbake (Command Line)

Now we will move on to manually compiling the system image for reTerminal using Yocto via the command line.

**Note:** This guide was written after testing on a host PC with Ubuntu 20.04 installed. However, it will work for other Linux systems.

#### Compile with the default configuration for reTerminal

Follow the steps below to start compiling with the default reTerminal configuration

- **Step 1.** Prepare the development environment on the host PC by installing the following packages

```sh
sudo apt update
sudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils
```

**Note:** If the host PC is running a different Linux distribution, please check [here](https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system)

- **Step 2.** Create a new working directory and enter it

```sh
mkdir reterminal-yocto
cd reterminal-yocto
```

- **Step 3.** Create a new directory to add layers and enter it

```sh
mkdir layers 
cd layers
```

- **Step 4.** Clone the following GitHub repo

```sh
git clone -b dunfell git://git.yoctoproject.org/poky
```

- **Step 5.** Clone the following repos

```sh
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git
git clone -b master git://git.yoctoproject.org/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git
```

- **Step 6.** Change kernel version from 5.4 to 5.10 in meta-raspberrypi layer

```sh
cd meta-raspberrypi/
cp -r recipes-kernel/linux/ ../
git checkout dunfell
rm -r recipes-kernel/linux/
mv -f ../linux/ recipes-kernel/
cd ../../
```

- **Step 7.** Initialize the build environment

```sh
source layers/poky/oe-init-build-env
```

- **Step 8.** Add the layers to the build environment

```sh
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
```

- **Step 9.** Move back to the **build** directory and execute the following to start compiling

```sh
MACHINE="seeed-reterminal" bitbake rpi-test-image
```

#### Find the Compiled Image

After compilation is finished, go to the **build** directory and run the following command to check whether the **system image** is sucessfully generated

```sh
cd tmp/deploy/images/seeed-reterminal/;ls -lh rpi-test-image*.wic.bz2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/Yocto-bitbake-image-location.png" alt="pir" width="1000" height="auto"/></p>

As shown in the image above, **rpi-test-image-seeed-reterminal.rootfs.wic.bz2** is the generated system image

#### Useful Bitbake Commands

Refer to the following to get familiarized with some useful Bitbake commands

##### Start compiling the image

- bitbake < image >

This command will start compiling the image. You can add -k to continue compiling even errors are found. While the target that failed and anything depending on it cannot be built, as much as possible will be built before stopping.

Example 1:

```sh
bitbake rpi-test-image
```

Example 2:

```sh
bitbake rpi-test-image -k
```

##### Show packages in the image

- bitbake -g < image > && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '{print $1}' | sort | uniq

This will save the packages inside the image into a file named **pn-buildlist** and then list them on console

Example:

```sh
bitbake -g rpi-test-image && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '{print $1}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/image-packages.png" alt="pir" width="800" height="auto"/></p>

##### Show package dependencies

- bitbake -g < package > && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '{print $1}' | sort | uniq

This will save the package dependencies into a file named **pn-buildlist** and then list them on console

Example:

```sh
bitbake -g i2c-tools && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '{print $1}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/package-depends.png" alt="pir" width="800" height="auto"/></p>

##### Task dependency explorer UI

- bitbake < image > -g -u taskexp

This is will helpful to show the Task Dependency Explorer UI. It shows dependencies between tasks

Example:

```sh
bitbake rpi-test-image -g -u taskexp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/task-explorer-ui.png" alt="pir" width="800" height="auto"/></p>

##### Launch devshell for a package

- bitbake < package > -c devshell

This will open a new shell where with the neccesary system values already defined for the package

Example:

```sh
bitbake evtest -c devshell
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/devshell.png" alt="pir" width="800" height="auto"/></p>

##### List package tasks

- bitbake -c listtasks

This will list all tasks for a package

Example:

```sh
bitbake evtest -c listtasks
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/tasks.png" alt="pir" width="800" height="auto"/></p>

##### Interactive kernel configuration

- bitbake virtual/kernel -c menuconfig

This will open an interactive kernel configuration window where you can change the settings according to your needs

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/kernel-config.png" alt="pir" width="800" height="auto"/></p>

##### Show layers

- bitbake-layers show-layers

This will show a list of the layers currently in use, and their priorities. If a package exists in two or more layers, it will be built from the layer with higher priority

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/layers.png" alt="pir" width="800" height="auto"/></p>

##### Show recipes

- bitbake-layers show-recipes

This will show all the available recipes

If you type the following, you can check for the recipe that we used previously, which is **rpi-test-image**

```sh
bitbake-layers show-recipes | grep rpi
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/rpi-test.png" alt="pir" width="800" height="auto"/></p>

##### Check for package

- bitbake -s | grep

This will check if a certain package is present on current Yocto Setup

```sh
bitbake -s | grep openssl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/check-package.png" alt="pir" width="800" height="auto"/></p>

##### Save verbose build log

- bitbake -v < image > 2>&1 | tee image_build.log

This will print (on console) as the image starts building and store the output in **image_build.log** with verbose mode

Example:

```sh
bitbake -v rpi-test-image 2>&1 | tee image_build.log 
```

##### Clean the build environment

- bitbake -c cleanall [package]

This will remove everything in the work directory, state cache, and all previously downloaded source files related to the package. This will be helpful if you are running into build problems for a particular package

Example:

```
bitbake -c cleanall i2c-tools
```

### Manual Compilation on Local Machine - Using Toaster (GUI)

Now we will move on to manually compiling the system image for reTerminal using Toaster.

Toaster is a web interface to OpenEmbedded and BitBake, the build system used by the Yocto Project®. Toaster allows you configure and run your builds, and provides information and statistics about the build process.

**Note:** This guide was written after testing on a host PC with Ubuntu 20.04 installed.

- **Step 1.** Update the packages list

```sh
sudo apt update
```

- **Step 2.** Prepare the development environment on the host PC by installing the following packages

```sh
sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \
     build-essential chrpath socat cpio python3 python3-pip python3-pexpect \
     xz-utils debianutils iputils-ping python3-git python3-jinja2 libegl1-mesa libsdl1.2-dev \
     pylint3 xterm
```

**Note:** If your host PC is running a different flavor of Linux, [click here](https://www.yoctoproject.org/docs/3.1/ref-manual/ref-manual.html#required-packages-for-the-build-host) to check the packages that needs to be installed according to your OS

- **Step 3.** Clone the following GitHub repo

```sh
git clone -b master git://git.yoctoproject.org/poky
```

- **Step 4.** Navigate to the **poky** directory

```sh
cd poky
```

- **Step 5.** Install the following toaster packages

```sh
pip3 install --user -r bitbake/toaster-requirements.txt
```

- **Step 6.** Revert to the following commit for the poky directory

```sh
git reset --hard 7ade8346b3a09983257589d22aaada47e0eec010
```

- **Step 7.** Source the build environment script

```sh
source oe-init-build-env
```

- **Step 8.** From the **build** directory, start toaster

```sh
source toaster start
```

- **Step 9.** To access the Toaster web interface, open your favorite browser and enter the following

```sh
http://127.0.0.1:8000
```

**Note:** By default, Toaster starts on port 8000. You can use the **WEBPORT** parameter to set a different port. For example, the following command sets the port to "9000"

```sh
source toaster start webport=9000
```

- **Step 10.** Once you are inside the Toaster web interface, click on **New project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-ui.png" alt="pir" width="1000" height="auto"/></p>

- **Step 11.** Enter a **Project name**, set the **project type** to **New project**, under **Release**, select **Local Yocto Project** and finally click **Create project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-name.jpg" alt="pir" width="450" height="auto"/></p>

- **Step 12.** Inside the **Configuration** tab, under **Machine**, change the name to **raspberrypi4-64** and click **Save**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-rpi64.png" alt="pir" width="700" height="auto"/></p>

- **Step 13.** Click **Import layer**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-import-layer.png" alt="pir" width="500" height="auto"/></p>

- **Step 14.** Fill in the information as follows

  - Layer name: meta-raspberrypi
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: <https://github.com/agherzan/meta-raspberrypi.git>
  - Git revision: 8dc3a310883ea87cd9900442f46f20bb08e57583

- **Step 15.** Click **Import and add to project**

- **Step 16.** Repeat the steps above to import more layers as follows

- **meta-qt5**

  - Layer name: meta-qt5
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: <https://github.com/meta-qt5/meta-qt5.git>
  - Git revision: master

- **meta-seeed-reterminal**

  - Layer name: meta-seeed-reterminal
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: <https://github.com/Seeed-Studio/meta-seeed-reterminal.git>
  - Git revision: main

- **meta-oe**

  - Layer name: meta-oe
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: <https://github.com/openembedded/meta-openembedded.git>
  - Repository subdirectory: meta-oe
  - Git revision: master

- **meta-python**

  - Layer name: meta-python
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: <https://github.com/openembedded/meta-openembedded.git>
  - Repository subdirectory: meta-python
  - Git revision: master

- **Step 17.** Once all the layers are imported, click on **Layers** tab to check the layers that we have added

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-layers.png" alt="pir" width="1000" height="auto"/></p>

- **Step 18.** Navigate to **BitBake variables** and add a new variable with the following

```sh
- Variable:RPI_KERNEL_DEVICETREE_OVERLAYS_append
- Value: overlays/reTerminal.dtbo overlays/i2c3.dtbo
```

**Note:** Make sure to add a space before **overlays/xxxx**

- **Step 19.** Repeat the same to add the following

```sh
- Variable:PACKAGECONFIG_append_pn-qtbase
- Value: eglfs 
```

**Note:** Make sure to add a space before **eglfs**

```sh
- Variable:DISTRO_FEATURES_remove
- Value: x11 wayland vulkan 
```

**Note:** Make sure to add a space before **x11 xxx**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-variables.png" alt="pir" width="500" height="auto"/></p>

- **Step 20.** Finally type **rpi-test-image** and click on **Build** to start building the project

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build.png" alt="pir" width="500" height="auto"/></p>

Now you will see the building process as follows

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-process.png" alt="pir" width="1000" height="auto"/></p>

Once the build is finished, you will see the following

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-finish.png" alt="pir" width="1000" height="auto"/></p>

- **Step 21.** Click on **rpi-test-image** to find more details about the image build

- **Step 22.** Under **Image files**, click on **tar.bz2** to download the compiled image

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-1.png" alt="pir" width="1000" height="auto"/></p>

- **Step 23.** Go further down on this page to learn more about the **Build Summary**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-2.png" alt="pir" width="1000" height="auto"/></p>

### Download Already Compiled Image

If you want to download a reTerminal system image which is already compiled using Yocto, you can proceed to the steps below.

- **Step 1.** Open [this link](https://github.com/Seeed-Studio/meta-seeed-reterminal/actions) to enter the **Actions** page of **meta-seeed-reterminal** GitHub repo

- **Step 2.** Click on the latest **Seeed reTerminal Yocto embedded linux** workflow

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/workflows.png" alt="pir" width="1000" height="auto"/></p>

- **Step 3.** Under **Artifacts**, click on **yocto deploy** to start downloading the image

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/deploy.png" alt="pir" width="1000" height="auto"/></p>

- **Step 4.** After downloading the image, the image will be named as **yocto deploy.zip**. Extract this **.zip** file and you will find a file named **yocto-image.tar.xz**

- **Step 5.** Extract this **yocto-image.tar.xz** file and you will find a file named **yocto-image.tar**

- **Step 5.** Extract this **yocto-image.tar** file and navigate to `deploy > images > raspberrypi4-64`. Look for a file with extension **.rootfs.wic.bz2**. That is the system image file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/compiled-image-search.png" alt="pir" width="1000" height="auto"/></p>

## Flash the Image to reTerminal

Now we will move onto flashing the image to the eMMC of the CM4 on the reTerminal.

Follow the steps in [this wiki](https://wiki.seeedstudio.com/reTerminal/#getting-started-with-reterminal-extended) and pay attention to the following step:

**Note:** When you open **Raspberry Pi Imager**, click **CHOOSE OS**, select **Use custom** and choose the downloaded **.rootfs.wic.bz2** file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## First Boot on reTerminal

After we flash the system image to the reTerminal, power on the reTerminal. Here you will see the kernel log pop up on the reTerminal LCD and at last a demo application will open which is made using Qt.

The boot up time of the default system image is around 17 seconds

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## Login to reTerminal from PC via Serial Console

It is recommended to login to the OS inside the reTerminal using a serial console connection. Check [this wiki](https://wiki.seeedstudio.com/reTerminal-FAQ/#q5-how-can-i-log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-a-usb-to-serial-converter) to make the hardware connections and login as **root**

## Test Yocto Image

To test the above Yocto image with reTerminal, you can visit the [reTerminal Hardware and Interfaces Usage wiki](https://wiki.seeedstudio.com/reTerminal-hardware-interfaces-usage) and refer to the steps mentioned.

## Talk at Yocto Project Summit 2021

This talk mainly focuses on explaining how easily you can create custom Linux images for CM4 Carrier Boards, X86, and STM32 Boards using Yocto project. Also, at the end of the talk, there are two HMI demos based on Qt, LVGL, and a demo to showcase secure and robust OTA updates to these SBCs using Mender.

<p style={{textAlign: 'center'}}><iframe width="720" height="480" src="https://www.youtube.com/embed/OHT9f_NOEpA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Resources

- **[Webpage]** [Yocto Documentation](https://docs.yoctoproject.org/)
- **[Webpage]** [Toaster Manual](https://www.yoctoproject.org/docs/current/toaster-manual/toaster-manual.html)
- **[GitHub]** [meta-seeed-reterminal](https://github.com/Seeed-Studio/meta-seeed-reterminal)

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
