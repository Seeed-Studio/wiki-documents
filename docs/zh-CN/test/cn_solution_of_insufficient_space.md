---
description: reComputer-FAQ
title: 收到的 reComputer 中 eMMC 的剩余空间只有约 2GB，如何解决空间不足的问题？
#keywords:
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /cn/solution_of_insufficient_space
last_update:
  date: 2023/6/30
  author: Seraphina
---

你好，你好。这是一个测试，用来检查 ```#define RF_SW_PIN PB4``` 是否会被正确翻译。

<!-- ### Q1: The remaining space in the eMMC in the received reComputer is only about 2GB, how can I solve the problem of insufficient space? -->

我们目前提供三种方式来处理这种特殊情况，您可以根据实际情况选择适合您的解决方案。

**选项 1.** 将系统重新部署到外部存储设备

如果您还没有开始使用 reComputer 进行项目，您可以考虑使用此选项将新系统重新部署到具有足够容量的存储设备上。

- 通常有两种方式为 reComputer 安装系统，第一种是使用 **NVIDIA SDK Manager**。

如果您使用的是 **reComputer J2011** 或 **reComputer J2012**，在[使用 SDK Manager 刷写到 eMMC](/cn/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line) 的**步骤 12** 中，您可以通过更改系统烧录位置来扩展容量。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::tip 此方法不适用于 Jetson Nano 模块。
:::

- 通常有两种方式为 reComputer 安装系统，第二种是使用**命令行**。

- 如果您使用的是 **A20X 载板**，使用命令行安装系统的方法在[使用命令行刷写到 eMMC](/cn/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line)。

- 如果您使用的是 **reComputer J1010 载板**，则在[使用命令行刷写到 eMMC](/cn/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line) 使用命令行安装系统。

它们本质上都是通过使用以下命令来完成系统安装。

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

其中：

1. `[options]` 是一个或多个命令行选项。所有选项都是可选的。有关选项的信息，请参阅[刷写脚本使用](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage)。

2. `<board>` 指定要应用于要刷写的设备的配置。值列在[Jetson 模块和配置](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations)主题[快速入门](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart)的表格中。`flash.sh` 从名为 `<board>.conf` 的配置文件中获取配置。

3. `<rootdev>` 指定要刷写的设备类型。使用值 **mmcblk0p1** 来刷写本地存储设备（eMMC 或 SD 卡，取决于平台），与 NFS 服务器等区别开来。

从上述解释可以看出，如果我们想在外部存储中安装系统，可以通过更改 `<rootdev>` 选项来实现。

对于连接到 reComputer 设备的 USB 存储设备上的分区，输入此命令：

```sh
sudo ./flash.sh <board> sda<x>
```

对于连接到 reComputer 设备的 NVMe 存储设备上的分区，输入此命令：

```sh
sudo ./flash.sh <board> nvme0n1p<x>
```

`<x>` 是指定 APP 分区在存储设备上位置的数字，例如 USB 设备的 `sda1`，或 NVMe 存储设备的 `nvme0n1p1`。

**选项 2.** 移除不需要的 JetPack 组件以增加 eMMC 空间。

NVIDIA JetPack SDK 是构建端到端加速 AI 应用程序的最全面解决方案。所有 Jetson 模块和开发套件都受 JetPack SDK 支持。

JetPack SDK 包括带有 Linux 操作系统的 Jetson Linux 驱动程序包 (L4T) 和用于深度学习、计算机视觉、加速计算和多媒体的 CUDA-X 加速库和 API。它还包括主机计算机和开发套件的示例、文档和开发工具，并支持更高级别的 SDK，如用于流视频分析的 DeepStream 和用于机器人技术的 Isaac。

[此表格](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages)列出了 JetPack 4.6 中包含的所有组件。

<table align="center">
  <tbody><tr>
      <th align="center">组件组</th>
      <th colSpan={2} align="center" valign="middle">包</th>
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

JetPack SDK 包含大量内容，但并非所有开发者都需要使用。因此，有选择地移除它们以获得更多存储空间是一个不错的选择。

我们可以使用以下命令查看 reComputer Jetson 中安装的 JetPack 信息。

```sh
sudo apt-cache show nvidia-jetpack
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png" /></div>

使用此命令，您可以快速了解 JetPack 中已安装组件的内容，如 CUDA、openCV 等。

要获取更详细的信息，您可以使用以下命令找出 reComputer 当前安装的所有软件及其描述信息。

```sh
dpkg-query -l
```

然后，您可以根据实际需求和组件的描述信息有选择地移除不需要的内容。删除命令如下。

```sh
sudo apt autoremove ${packagesname}
```

环境变量 `${packagesname}` 表示您要移除的组件包的名称。如果您想移除以某个名称为前缀的所有包，可以在此前缀后添加 `*` 来表示。

例如，如果我们想移除所有关于 **CUDA** 的组件，那么我们可以使用以下命令。

```sh
sudo apt autoremove cuda*
```

释放 CUDA 组件的内容后，您可以看到 eMMC 的剩余容量也会变大。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

其他 JetPack 组件同样适用。

**选项 3.** 通过外部存储设备进行容量扩展。

如果您已经正常使用 reComputer 一段时间，并且不想破坏现有的系统环境来完成扩展解决方案，您可以选择此选项。

我们已经有一个完善的扩展 wiki [reComputer 系列内存扩展](https://wiki.seeedstudio.com/cn/reComputer_Jetson_Memory_Expansion/)。

值得注意的是，任何扩展操作都是危险的，我们希望您在一切开始之前主动**备份**您的系统。