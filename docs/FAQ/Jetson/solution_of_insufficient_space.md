---
description: reComputer-FAQ
title: The remaining space in the eMMC in the received reComputer is only about 2GB, how to solve the problem of insufficient space?
#keywords:
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /solution_of_insufficient_space
last_update:
  date: 2023/6/30
  author: Seraphina
---

<!-- ### Q1: The remaining space in the eMMC in the received reComputer is only about 2GB, how can I solve the problem of insufficient space? -->

We currently offer three ways to deal with this particular situation, and you can choose the right solution for you based on the actual situation.

**Option 1.** Redeployment of systems to external storage devices

If you haven't started a project with reComputer, you might consider using this option to redeploy the new system on a storage device with sufficient capacity.

- There are generally two ways to install a system for reComputer, the first is to use the **NVIDIA SDK Manager**.

If you are on a **reComputer J2011** or **reComputer J2012**, in **step 12** of [Flashing to eMMC with SDK Manager](/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line), you can expand the capacity by changing the location of the system burn-in.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::tip
This method is not applicable to the Jetson Nano module.
:::

- There are generally two ways to install a system for reComputer, the second is to use the **command lines**.

- If you are using an **A20X carrier board**, the method to install the system using the command line is in [Flashing to eMMC with command-line](/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line).

- If you are using the **reComputer J1010 Carrier Board**, then use the command line to install the system at [Flashing to eMMC with command-line](/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line).

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
