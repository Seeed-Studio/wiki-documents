---
name: reTerminal Yocto SDK 
category: reTerminal
bzurl: 
wikiurl: 
sku: 
---

# reTerminal Yocto SDK

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" alt="pir" width="500" height="auto"></p>

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

- **Step 1.** Prepare the development environment on the host PC by installing the following packages (git, gcc, make and chrpath)

```sh
sudo apt update
sudo apt install git
sudo apt install build-essential
sudo apt install chrpath
```

**Note:** If you already have the above packages installed. You can skip it.

- **Step 2.** Clone the following GitHub repo

```sh
git clone -b master git://git.yoctoproject.org/poky
```

- **Step 3.** Navigate to the **poky** directory

```sh
cd poky
```

- **Step 4.** Revert to the following commit

```sh
git reset --hard 7ade8346b3a09983257589d22aaada47e0eec010
```

- **Step 5.** Clone the following repos

```sh
git clone -b master https://github.com/agherzan/meta-raspberrypi.git
git clone -b master https://github.com/meta-qt5/meta-qt5.git
git clone -b master https://github.com/openembedded/meta-openembedded.git
git clone -b master https://github.com/openembedded/openembedded-core.git
git clone -b main https://github.com/Seeed-Studio/meta-seeed-reterminal.git
```

- **Step 6.** Switch to the **meta-raspberrypi** directory

```sh
cd meta-raspberrypi
```

- **Step 7.** Revert to the following commit

```sh
git reset --hard 8dc3a310883ea87cd9900442f46f20bb08e57583
```

- **Step 8.** Move back one directory

```sh
cd ..
```

- **Step 9.** run the Yocto Project **oe-init-build-env** environment setup script

```sh
source oe-init-build-env
```

- **Step 10.** Add the following meta layers

```sh
bitbake-layers add-layer ../meta-raspberrypi
bitbake-layers add-layer ../meta-seeed-reterminal
bitbake-layers add-layer ../meta-qt5
bitbake-layers add-layer ../meta-openembedded/meta-oe
bitbake-layers add-layer ../meta-openembedded/meta-python
```

- **Step 11.** Open **local.conf** file

```sh
vi conf/local.conf
```

**Note:** Here in **vi text editor** you need to press **i** to enter **editing mode**

- **Step 12.** Replace **MACHINE ??= "xxx"** with the following

```sh
MACHINE ??= "raspberrypi4-64"
```

- **Step 13.** At the end of **local.conf** file, add the following lines

```sh
RPI_KERNEL_DEVICETREE_OVERLAYS_append = " overlays/reTerminal.dtbo overlays/i2c3.dtbo"
PACKAGECONFIG_append_pn-qtbase = " eglfs "
DISTRO_FEATURES_remove = " x11 wayland vulkan"
```

- **Step 14.** Press **ESC** to exit **editing mode** and type **:wq** to save the file

- **Step 15.** Move back to the **build** directory and execute the following to start compiling

```sh
bitbake rpi-test-image
```

#### Find the Compiled Image

After compilation is finished, go to the **build** directory and run the following command to check whether the **system image** is sucessfully generated

```sh
cd tmp/deploy/images/raspberrypi4-64/;ls -lh rpi-test-image*.wic.bz2
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/compiled-image-location.png" alt="pir" width="1000" height="auto"></p>

As shown in the image above, **rpi-test-image-raspberrypi4-64-20210831080948.rootfs.wic.bz2** is the generated system image

#### Useful Bitbake Commands

Refer to the following to get familiarized with some useful Bitbake commands

<table>
<thead>
  <tr>
    <th>bitbake command</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>bitbake &lt;image&gt;</td>
    <td>Bake an image (add -k to continue building even errors are found in the tasks execution)</td>
  </tr>
  <tr>
    <td>bitbake &lt;package&gt; -c &lt;task&gt;</td>
    <td>Execute a particular package's task. Default Tasks names: <br>fetch, unpack, patch, configure, compile, install, package, package_write, and build.<br><br>Example: To (force) compiling a kernel and then build, type:<br><br>$ bitbake  linux-imx -f -c compile<br><br>$ bitbake linux-imx</td>
  </tr>
  <tr>
    <td>bitbake &lt;image &gt; -g -u depexp<br></td>
    <td>Show the package dependency for image.<br><br><br><br>Example: To show all packages included on fsl-image-gui<br><br>$ bitbake fsl-image-gui -g -u depexp<br><br>NOTE: This command will open a UI window, so it must be execute on a console inside the host machine (either virtual or native).</td>
  </tr>
  <tr>
    <td>bitbake &lt;package&gt; -c  devshell</td>
    <td>Open a new shell where with neccesary system values already defined for package</td>
  </tr>
  <tr>
    <td>hob</td>
    <td>bitbake frontend/GUI.</td>
  </tr>
  <tr>
    <td>bitbake &lt;package&gt; -c listtasks</td>
    <td>List all tasks for package</td>
  </tr>
  <tr>
    <td>bitbake virtual/kernel -c menuconfig</td>
    <td>Interactive kernel configuration</td>
  </tr>
  <tr>
    <td>bitbake &lt;image&gt; -c fetchall</td>
    <td>Fetch sources for a particular image</td>
  </tr>
  <tr>
    <td>bitbake-layers show-layers</td>
    <td>Show layers</td>
  </tr>
  <tr>
    <td>bitbake-layers show-recipes "*-image-*"</td>
    <td>Show possible images to bake. Without "*-images-*", it shows ALL recipes</td>
  </tr>
  <tr>
    <td>bitbake -g &lt;image&gt; &amp;&amp; cat pn-depends.dot | grep <br>-v -e '-native' | grep -v digraph | grep -v -e <br>'-image' | awk '{print $1}' | sort | uniq</td>
    <td>Show image's packages</td>
  </tr>
  <tr>
    <td>bitbake -g &lt;pkg&gt; &amp;&amp; cat pn-depends.dot | grep<br> -v -e '-native' | grep -v digraph | grep -v -e<br> '-image' | awk '{print $1}' | sort | uniq</td>
    <td>Show package's dependencies</td>
  </tr>
  <tr>
    <td>bitbake –v &lt;image&gt; 2&gt;&amp;1 | tee image_build.log</td>
    <td>Print (on console) and store verbose baking</td>
  </tr>
  <tr>
    <td>bitbake -s | grep &lt;pkg&gt;</td>
    <td>Check if certain package is present on current Yocto Setup</td>
  </tr>
</tbody>
</table>

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

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-ui.png" alt="pir" width="1000" height="auto"></p>

- **Step 11.** Enter a **Project name**, set the **project type** to **New project**, under **Release**, select **Local Yocto Project** and finally click **Create project**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-name.jpg" alt="pir" width="450" height="auto"></p>

- **Step 12.** Inside the **Configuration** tab, under **Machine**, change the name to **raspberrypi4-64** and click **Save**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-rpi64.png" alt="pir" width="700" height="auto"></p>

- **Step 13.** Click **Import layer**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-import-layer.png" alt="pir" width="500" height="auto"></p>

- **Step 14.** Fill in the information as follows


    - Layer name: meta-raspberrypi
    - Where is the layer source code?: In a **Git repository**
    - Git repository URL: https://github.com/agherzan/meta-raspberrypi.git
    - Git revision: 8dc3a310883ea87cd9900442f46f20bb08e57583

- **Step 15.** Click **Import and add to project**

- **Step 16.** Repeat the steps above to import more layers as follows

- **meta-qt5**


    - Layer name: meta-qt5
    - Where is the layer source code?: In a **Git repository**
    - Git repository URL: https://github.com/meta-qt5/meta-qt5.git
    - Git revision: master

- **meta-seeed-reterminal**


    - Layer name: meta-seeed-reterminal
    - Where is the layer source code?: In a **Git repository**
    - Git repository URL: https://github.com/Seeed-Studio/meta-seeed-reterminal.git
    - Git revision: main

- **meta-oe**


    - Layer name: meta-oe
    - Where is the layer source code?: In a **Git repository**
    - Git repository URL: https://github.com/openembedded/meta-openembedded.git
    - Repository subdirectory: meta-oe
    - Git revision: master

- **meta-python**


    - Layer name: meta-python
    - Where is the layer source code?: In a **Git repository**
    - Git repository URL: https://github.com/openembedded/meta-openembedded.git
    - Repository subdirectory: meta-python
    - Git revision: master

- **Step 17.** Once all the layers are imported, click on **Layers** tab to check the layers that we have added

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-layers.png" alt="pir" width="1000" height="auto"></p>

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

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-variables.png" alt="pir" width="500" height="auto"></p>

- **Step 20.** Finally type **rpi-test-image** and click on **Build** to start building the project

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build.png" alt="pir" width="500" height="auto"></p>

Now you will see the building process as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-process.png" alt="pir" width="1000" height="auto"></p>

Once the build is finished, you will see the following

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-finish.png" alt="pir" width="1000" height="auto"></p>

- **Step 21.** Click on **rpi-test-image** to find more details about the image build 

- **Step 22.** Under **Image files**, click on **tar.bz2** to download the compiled image

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-1.png" alt="pir" width="1000" height="auto"></p>

- **Step 23.** Go further down on this page to learn more about the **Build Summary**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-2.png" alt="pir" width="1000" height="auto"></p>

### Download Already Compiled Image

If you want to download a reTerminal system image which is already compiled using Yocto, you can proceed to the steps below.

- **Step 1.** Open [this link](https://github.com/Seeed-Studio/meta-seeed-reterminal/actions) to enter the **Actions** page of **meta-seeed-reterminal** GitHub repo

- **Step 2.** Click on the latest **Seeed reTerminal Yocto embedded linux** workflow

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/workflows.png" alt="pir" width="1000" height="auto"></p>

- **Step 3.** Under **Artifacts**, click on **yocto deploy** to start downloading the image 

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/deploy.png" alt="pir" width="1000" height="auto"></p>

- **Step 4.** After downloading the image, the image will be named as **yocto deploy.zip**. Extract this **.zip** file and you will find a file named **yocto-image.tar.xz**

- **Step 5.** Extract this **yocto-image.tar.xz** file and you will find a file named **yocto-image.tar**

- **Step 5.** Extract this **yocto-image.tar** file and navigate to `deploy > images > raspberrypi4-64`. Look for a file with extension **.rootfs.wic.bz2**. That is the system image file

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/compiled-image-search.png" alt="pir" width="1000" height="auto"></p>

## Flash the Image to reTerminal

Now we will move onto flashing the image to the eMMC of the CM4 on the reTerminal.

Follow the steps in [this wiki](https://wiki.seeedstudio.com/reTerminal/#getting-started-with-reterminal-extended) and pay attention to the following step:

**Note:** When you open **Raspberry Pi Imager**, click **CHOOSE OS**, select **Use custom** and choose the downloaded **.rootfs.wic.bz2** file.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"></p>

## First Boot on reTerminal

After we flash the system image to the reTerminal, power on the reTerminal. Here you will see the kernel log pop up on the reTerminal LCD and at last a demo application will open which is made using Qt.

The boot up time of the default system image is around 17 seconds

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"></p>

## Test Yocto Image

To test the above Yocto image with reTerminal, you can visit the [reTerminal Hardware and Interfaces Usage wiki](https://wiki.seeedstudio.com/reTerminal-hardware-interfaces-usage) and refer to the steps mentioned. However, some steps may not work the same for the Yocto image and therefore you can refer to a few pointers mentioned below:

### GPIO Usage

- **sudo -i** is not needed because we already log in as **root**
- Follow the other steps as mentioned

### I2C Usage

- I2C is not enabled when turned on. It only works with **modprobe i2c-dev** after each boot. This will be updated once it is fixed.

### SPI Usage

- To turn on SPI, open **config.txt** by **vi /boot/config.txt** command
- Add **dtparam=spi=on** at the end (press **i** to enter edit mode)
- Press **ESC** to quit from edit mode
- Save the file by typing **:wq**
- Reboot
- spidev_test tool has problem when running. This will be updated once it is fixed.

### CSI camera

- The CSI camera interface is not tested yet. This will be updated once it is tested.

### Touch Panel, Accelerometer, Buttons

- You don't need to install **evtest tool** because it is already installed 
- Follow the other steps as mentioned

### 3 User Programmable LEDs

- **sudo -i** is not needed because we already log in as **root**
- Follow the other steps as mentioned

### Encryption Co-Processor

- I2C is not enabled when turned on. It only works with **modprobe i2c-dev** after each boot. This will be updated once it is fixed.

### RTC

- **sudo** is not needed because we already log in as **root**
- Just type **hwclock**

### Light Sensor

- **sudo -i** is not needed because we already log in as **root**
- Follow the other steps as mentioned

### Buzzer

- **sudo -i** is not needed because we already log in as **root**
- Follow the other steps as mentioned

### Micro-HDMI Port

- Hot-plug doesn’t work at the moment. This will be updated once it is fixed.
- So you need to first connect to HDMI display and then turn on reTerminal
- Note that **arandr** package is not available for Yocto system image

### Python Library for reTerminal

- Eventhough Python is installed, pip is not installed. We will later pack [this library](https://github.com/Seeed-Studio/Seeed_Python_ReTerminal) inside this system image

### Qt App Demo 

- **SHUTDOWN button** in Qt app doesnt completely shutdown reTerminal. It get stuck in **Unmounting remote filesystems**. 
- However when **poweroff** command is used, it shutdown successfully
- This will be updated once it is fixed.

## Resources

- **[Webpage]** [Yocto Documentation](https://docs.yoctoproject.org/)
- **[Webpage]** [Toaster Manual](https://www.yoctoproject.org/docs/current/toaster-manual/toaster-manual.html)
- **[GitHub]** [meta-seeed-reterminal](https://github.com/Seeed-Studio/meta-seeed-reterminal)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>