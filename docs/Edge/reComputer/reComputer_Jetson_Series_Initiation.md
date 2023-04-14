---
description: reComputer for Jetson Initiation
title: reComputer for Jetson Initiation
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Jetson_Series_Initiation
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# reComputer for Jetson Initiation

All reComputer for Jetson are loaded 16 GB eMMC where `ubuntu 18.04 LTS` and `NVIDIA JetPack 4.6` are both already installed. Follow the instructions, connect peripherals, you can power it up and directly use it in few seconds.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaijiss.png" alt="pir" width="auto" height="auto" /></p>

## 1. Connect Peripherals

Connect the reComputer host to a USB-connected keyboard, mouse, and connect to the screen display via HDMI port or DP port (A206 carrier board only).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji1.jpg" alt="pir" width={600} height="auto" /></p>

:::note
For the reComputer host with both HDMI or DP interface, although it has two display output ports, it does not support dual display output, which means only one display output interface can be used at the same time.
:::

## 2. Power Up

After connecting peripherals, connect power to the reComputer host.

- The power supply of the [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) is powered by the Type-C interface, and the position of the power supply near the HDMI interface is shown in the figure below.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc1.png" alt="pir" width={600} height="auto" /></p>

:::note
[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) has a Type-C port on the both sides, where the one on the right near the LAN port is the data transmission port. It is strictly forbidden to insert the Type-C power supply into the data transmission port on the right, which may cause damage to the components.
:::

- [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html), [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html), and [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) are powered by DC interface where is near the HDMI interface.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc2.png" alt="pir" width={600} height="auto" /></p>

After connecting to the power supply, the reComputer host will automatically power on.

## 3. Initial Setup

The new reComputer has already flashed the system. But before we can use it, it still requires some necessary initial settings.

### Step 1: Wait for powering on

After powering on, the first thing you see will be the huge NVIDIA icon displayed in the middle of the screen. Before entering the configuration page, you may find reComputer automatically restarting twice, this process will take about a minute.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji5.jpg" alt="pir" width={600} height="auto" /></p>

### Step 2: Review and accept the license

In the configuration page, first you will be asked to check the license and select "**I accept the terms of these licenses**" to agree it and then proceed to the next step.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji6.jpg" alt="pir" width={600} height="auto" /></p>

### Step 3：Choose system language and keyboard layout

After clicking the "Continue" button, the next page will ask you to select the system language and keyboard layout. You can select them according to your actual needs.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji7.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji8.jpg" alt="pir" width={600} height="auto" /></p>

### Step 4: Connect to the network

There are two ways to connect the reComputer to the Internet. One is to connect directly with a network cable, and the other one is to connect to the Internet through Wi-Fi (wireless module required). If you do not need Internet access for software updates, you can choose not to connect to the Internet for the next step when you are in this step.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji9.jpg" alt="pir" width={600} height="auto" /></p>

### Step 5: Configure user information and password

On the next page, you will be asked to enter your username and password. You will need to remember your startup password as you will need to start reComputer later.

If you find it tedious to enter your password every time you start reComputer, and to ensure that no one else can use it, you can select the "Require my password to log in" option below as we do not recommand it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji10.jpg" alt="pir" width={600} height="auto" /></p>

### Step 6: Select the supply voltage

The final you will chose is the supply voltage while the reComputer operating.

- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) and [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) are both equipped with Jetson Nano module. We highly recommand the **MAXN** model, for which ensure your reComputer operate normally.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji11.jpg" alt="pir" width={600} height="auto" /></p>

- [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html) and  [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) are both equipped with Jetson Xavier NX module, at which will provide a variety of power supply output power options. The default model is 10 W as `MODE_10W_DESKTOP - (Default)` that you can see here:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji12.jpg" alt="pir" width={600} height="auto" /></p>

:::note
The following table shows NVIDIA predefined power modes and associated module resource usage caps.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/21.jpg" /></div>
:::

After completing the above instructions, we need to wait 1~2 minutes for the reComputer to do the final configuration.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/46.jpg" /></div>

## 4. Get Started

After reComputer completes the initial setup, it will automatically restart. And After that, it will enter the system desktop as shown in the figure below. It shows the system is in place and can be used.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji4.jpg" alt="pir" width={800} height="auto" /></p>

Because the product incldes a built-in 16 GB eMMC where has been installed `ubuntu 18.04 LTS` and `NVIDIA JetPack 4.6`, the remaining user free space is about 2GB. The following figure shows the result after using the disk space command in the terminal:

```shell
seeed@seeed-desktop:~$ df -hl
Filesystem      Size  Used Avail Use% Mounted on
/dev/mmcblk0p1   14G   12G  2.0G  86% /
none            3.5G     0  3.5G   0% /dev
tmpfs           3.8G   75M  3.8G   2% /dev/shm
tmpfs           3.8G   22M  3.8G   1% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           3.8G     0  3.8G   0% /sys/fs/cgroup
tmpfs           777M  128K  777M   1% /run/user/1000
seeed@seeed-desktop:~$
```

## Install NVIDIA system on reComputer

If your reComputer devicess crash and you want to reinstall the NVIDIA system. We here provide you the wiki about how to install NVIDIA System on reComputer. The provided wikis include A20X carrier boards and reComputer J1010 Carrier Board:

- [Install NVIDIA system based on A20X carrier board](https://wiki.seeedstudio.com/Tutorial-of-A20X-Carrier-Boards/)
- [Install NVIDIA system based on reComputer J1010 Carrier Board](https://wiki.seeedstudio.com/install_NVIDIA_software_to_Jetson-10-1-A0/)

## Troubleshooting

### Q1: The remaining space in the eMMC in the received reComputer is only about 2GB, how can I solve the problem of insufficient space?

We currently offer three ways to deal with this particular situation, and you can choose the right solution for you based on the actual situation.

**Option 1.** Redeployment of systems to external storage devices

If you haven't started a project with reComputer, you might consider using this option to redeploy the new system on a storage device with sufficient capacity.

- There are generally two ways to install a system for reComputer, the first is to use the **NVIDIA SDK Manager**.

If you are on a **reComputer J2011** or **reComputer J2012**, in **step 12** of [Flashing to eMMC with SDK Manager](reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line), you can expand the capacity by changing the location of the system burn-in.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::tip
This method is not applicable to the Jetson Nano module.
:::

- There are generally two ways to install a system for reComputer, the second is to use the **command lines**.

- If you are using an **A20X carrier board**, the method to install the system using the command line is in [Flashing to eMMC with command-line](reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line).

- If you are using the **reComputer J1010 Carrier Board**, then use the command line to install the system at [Flashing to eMMC with command-line](reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line).

They both essentially complete the installation of the system by using the following command.

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

Where:

1. `[options]` is one or more command line options. All of the options are optional. See [Flashing Script Usage](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage) for information about the options.

2. `<board>` specifies the configuration to be applied to the device to be flashed. Values are listed in the table in [Jetson Modules and Configurations](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations) in the topic [Quick Start](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart). `flash.sh` gets the configuration from a configuration file named `<board>.conf`.

3. `<rootdev>` specifies the type of device to be flashed. Use the value **mmcblk0p1** to flash a local storage device (eMMC or SD card, depending on platform), as distinguished from an NFS server, for example.

As you can see from the above explanation, if we want to install the system in external storage, we can do so by changing the `<rootdev>` option.

For a partition on a USB storage device connected to the reComputer device, enter this command:

```sh
sudo ./flash.sh <board> sda<x>
```

For a partition on an NVMe storage device connected to the reComputer device, enter this command:

```sh
sudo ./flash.sh <board> nvme0n1p<x>
```

`<x>` is a number specifying the APP partition’s position on the storage device, e.g. `sda1` for a USB device, or `nvme0n1p1` for an NVMe storage device.

**Option 2.** Remove unneeded JetPack components to increase eMMC space.

NVIDIA JetPack SDK is the most comprehensive solution for building end-to-end accelerated AI applications. All Jetson modules and developer kits are supported by JetPack SDK.

JetPack SDK includes the Jetson Linux Driver Package (L4T) with Linux operating system and CUDA-X accelerated libraries and APIs for Deep Learning, Computer Vision, Accelerated Computing and Multimedia. It also includes samples, documentation, and developer tools for both host computer and developer kit, and supports higher level SDKs such as DeepStream for streaming video analytics and Isaac for robotics.

[This table](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages) lists all components included in JetPack 4.6.

<table align="center">
  <tbody><tr>
      <th align="center">Component Group</th>
      <th colSpan={2} align="center" valign="middle">Packages</th>
    </tr>
    <tr>
      <th align="center" valign="middle">CUDA Toolkit for L4T</th>
      <td align="center">cuda <br /> cuda-11-4 <br /> cuda-cccl-11-4 <br /> cuda-command-line-tools-11-4 <br /> cuda-compiler-11-4 <br /> cuda-cudart-11-4 <br /> cuda-cudart-dev-11-4 <br /> cuda-cuobjdump-11-4 <br /> cuda-cupti-11-4 <br /> cuda-cupti-dev-11-4 <br /> cuda-cuxxfilt-11-4 <br /> cuda-documentation-11-4 <br /> cuda-driver-dev-11-4 <br /> cuda-gdb-11-4 <br /> cuda-gdb-src-11-4 <br /> cuda-libraries-11-4 <br /> cuda-libraries-dev-11-4 <br /> cuda-minimal-build-11-4 <br /> cuda-nvcc-11-4 <br /> cuda-nvdisasm-11-4 <br /> cuda-nvml-dev-11-4 <br /> cuda-nvprof-11-4 <br /> cuda-nvprune-11-4 <br /> cuda-nvrtc-11-4 <br /> cuda-nvrtc-dev-11-4 <br /> cuda-nvtx-11-4</td>
      <td align="center">cuda-runtime-11-4 <br /> cuda-samples-11-4 <br /> cuda-sanitizer-11-4 <br /> cuda-toolkit-11-4 <br /> cuda-toolkit-11-4-config-common <br /> cuda-toolkit-11-config-common <br /> cuda-toolkit-config-common <br /> cuda-tools-11-4 <br /> cuda-visual-tools-11-4 <br /> libcublas-11-4 <br /> libcublas-dev-11-4 <br /> libcudla-11-4 <br /> libcudla-dev-11-4 <br /> libcufft-11-4 <br /> libcufft-dev-11-4 <br /> libcurand-11-4 <br /> libcurand-dev-11-4 <br /> libcusolver-11-4 <br /> libcusolver-dev-11-4 <br /> libcusparse-11-4 <br /> libcusparse-dev-11-4 <br /> libnpp-11-4 <br /> libnpp-dev-11-4</td>
    </tr>
    <tr>
      <th align="center">cuDNN</th>
      <td align="center">libcudnn8 <br /> libcudnn8-dev</td>
      <td align="center">libcudnn8-samples</td>
    </tr>
    <tr>
      <th align="center">TensorRT</th>
      <td align="center">graphsurgeon-tf <br /> libnvinfer-bin <br /> libnvinfer-dev <br /> libnvinfer-doc <br /> libnvinfer-plugin-dev <br /> libnvinfer-plugin8 <br /> libnvinfer-samples <br /> libnvinfer8</td>
      <td align="center">libnvonnxparsers-dev <br /> libnvonnxparsers8 <br /> libnvparsers-dev <br /> libnvparsers8 <br /> python3-libnvinfer <br /> python3-libnvinfer-dev <br /> tensorrt <br /> uff-converter-tf</td>
    </tr>
    <tr>
      <th align="center">OpenCV</th>
      <td align="center">libopencv <br /> libopencv-dev <br /> opencv-licenses</td>
      <td align="center">libopencv-python <br /> libopencv-samples</td>
    </tr>
    <tr>
      <th align="center">VPI</th>
      <td align="center">libnvvpi2 <br /> vpi2-dev <br /> python-vpi2</td>
      <td align="center">python3.9-vpi2 <br /> vpi2-samples <br /> vpi2-demos</td>
    </tr>
    <tr>
      <th align="center">NVIDIA container runtime with Docker integration</th>
      <td align="center">libnvidia-container0 <br /> libnvidia-container1 <br /> libnvidia-container-tools</td>
      <td align="center">nvidia-container-toolkit <br /> nvidia-container-runtime <br /> nvidia-docker2</td>
    </tr>
    <tr>
      <th align="center">Multimedia API</th>
      <td colSpan={2} align="center">nvidia-l4t-jetson-multimedia-api</td>
    </tr>
  </tbody></table>

The JetPack SDK contains a lot of content, but it's not something that all developers will need to use. So, it is one of the good options to selectively remove them for more storage space.

We can view information about the JetPack installed in reComputer Jetson with the following command.

```sh
sudo apt-cache show nvidia-jetpack
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png" /></div>

With this command, you can quickly learn the content of the installed components in JetPack, such as CUDA, openCV, etc.

To get more detailed information, you can use the following command to find out all the software currently installed by reComputer and its description information.

```sh
dpkg-query -l
```

Then, you can selectively remove the content you don't need according to your actual needs and the description information for the component. The command to delete is as follows.

```sh
sudo apt autoremove ${packagesname}
```

The environment variable `${packagesname}` indicates the name of the component package you want to remove. If you want to remove all packages prefixed by a certain name, you can add `*` to this prefix to indicate that.

As an example, if we want to remove all components about **CUDA**, then we can use the following command.

```sh
sudo apt autoremove cuda*
```

After releasing the contents of the CUDA component, you can see that the remaining capacity of the eMMC will also become larger.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

The same applies to other JetPack components.

**Option 3.** Capacity expansion via external storage devices.

You can choose this option if you have been using reComputer normally for some time and do not want to destroy the existing system environment to complete the expansion solution.

We already have a well-developed expansion wiki [Memory Expansion for reComputer series](https://wiki.seeedstudio.com/reComputer_Jetson_Memory_Expansion/).

It is worth noting that any expansion operation is dangerous and we expect you to be proactive in **making backups** of your system before everything starts.

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
