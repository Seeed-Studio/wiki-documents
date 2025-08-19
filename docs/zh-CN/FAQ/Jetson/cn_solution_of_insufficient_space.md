---
description: reComputer-常见问题解答
title: 收到的reComputer中eMMC剩余空间仅约2GB，如何解决空间不足问题？
#keywords:
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /cn/solution_of_insufficient_space
last_update:
  date: 2023/6/30
  author: Seraphina
---

<!-- ### Q1: 收到的reComputer中eMMC剩余空间仅约2GB，如何解决空间不足问题？ -->

我们目前提供了三种方法来解决这一特定情况，您可以根据实际情况选择适合您的解决方案。

**方案1.** 将系统重新部署到外部存储设备

如果您尚未开始使用reComputer进行项目开发，您可以考虑使用此选项，将新系统重新部署到具有足够容量的存储设备上。

- 通常有两种方式为reComputer安装系统，第一种是使用 **NVIDIA SDK Manager**。

如果您使用的是 **reComputer J2011** 或 **reComputer J2012**，在[通过SDK Manager刷写到eMMC](/cn/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line)的**步骤12**中，您可以通过更改系统烧录位置来扩展容量。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::tip
此方法不适用于Jetson Nano模块。
:::

- 通常有两种方式为reComputer安装系统，第二种是使用 **命令行**。

- 如果您使用的是 **A20X载板**，通过命令行安装系统的方法请参考[通过命令行刷写到eMMC](/cn/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line)。

- 如果您使用的是 **reComputer J1010载板**，请参考[通过命令行刷写到eMMC](/cn/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line)来使用命令行安装系统。

这两种方法本质上都是通过以下命令完成系统安装：

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

其中：

1. `[options]` 是一个或多个命令行选项。所有选项都是可选的。有关选项的详细信息，请参阅[刷写脚本使用说明](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage)。

2. `<board>` 指定要刷写的设备的配置。值列在[快速入门](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart)主题中的[Jetson模块和配置](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations)表中。`flash.sh` 从名为 `<board>.conf` 的配置文件中获取配置。

3. `<rootdev>` 指定要刷写的设备类型。使用值 **mmcblk0p1** 来刷写本地存储设备（eMMC或SD卡，具体取决于平台），例如，与NFS服务器区分开。

从上述说明可以看出，如果我们希望将系统安装到外部存储设备中，可以通过更改 `<rootdev>` 选项来实现。

对于连接到reComputer设备的USB存储设备上的分区，输入以下命令：

```sh
sudo ./flash.sh <board> sda<x>
```

对于连接到reComputer设备的NVMe存储设备上的分区，输入以下命令：

```sh
sudo ./flash.sh <board> nvme0n1p<x>
```

`<x>` 是指定存储设备上APP分区位置的数字，例如USB设备的 `sda1`，或NVMe存储设备的 `nvme0n1p1`。

**方案2.** 删除不需要的 JetPack 组件以增加eMMC空间

NVIDIA JetPack SDK 是构建端到端加速AI应用程序的最全面解决方案。所有Jetson模块和开发套件均由 JetPack SDK 支持。

JetPack SDK 包括Jetson Linux驱动程序包（L4T）及其Linux操作系统，以及用于深度学习、计算机视觉、加速计算和多媒体的CUDA-X加速库和API。它还包括主机计算机和开发套件的示例、文档和开发工具，并支持更高级别的SDK，例如用于流视频分析的 DeepStream 和用于机器人技术的Isaac。

[此表](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages)列出了 JetPack 4.6 中包含的所有组件。

<table align="center">
  <tbody><tr>
      <th align="center">组件组</th>
      <th colSpan={2} align="center" valign="middle">软件包</th>
    </tr>
    <tr>
      <th align="center" valign="middle">L4T的CUDA工具包</th>
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
      <th align="center">NVIDIA容器运行时与Docker集成</th>
      <td align="center">libnvidia-container0 <br /> libnvidia-container1 <br /> libnvidia-container-tools</td>
      <td align="center">nvidia-container-toolkit <br /> nvidia-container-runtime <br /> nvidia-docker2</td>
    </tr>
    <tr>
      <th align="center">多媒体API</th>
      <td colSpan={2} align="center">nvidia-l4t-jetson-multimedia-api</td>
    </tr>
  </tbody></table>

JetPack SDK 包含了大量内容，但并不是所有开发者都需要使用它。因此，选择性地移除这些内容以释放更多存储空间是一个不错的选择。

我们可以通过以下命令查看安装在 reComputer Jetson 上的 JetPack 信息。

```sh
sudo apt-cache show nvidia-jetpack
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png" /></div>

通过此命令，您可以快速了解 JetPack 中已安装组件的内容，例如 CUDA、openCV 等。

如果需要更详细的信息，可以使用以下命令查看 reComputer 当前安装的所有软件及其描述信息。

```sh
dpkg-query -l
```

然后，您可以根据实际需求和组件的描述信息选择性地移除不需要的内容。删除命令如下：

```sh
sudo apt autoremove ${packagesname}
```

环境变量 `${packagesname}` 表示您想要移除的组件包的名称。如果您想移除所有以某个名称为前缀的包，可以在该前缀后添加 `*` 来表示。

例如，如果我们想移除所有与 **CUDA** 相关的组件，可以使用以下命令：

```sh
sudo apt autoremove cuda*
```

在释放 CUDA 组件的内容后，您会发现 eMMC 的剩余容量也会变得更大。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

同样的方法适用于其他 JetPack 组件。

**选项 3.** 通过外部存储设备扩展容量

如果您已经正常使用 reComputer 一段时间，并且不希望破坏现有的系统环境来完成扩展解决方案，可以选择此选项。

我们已经开发了一个完善的扩展指南 [reComputer 系列的内存扩展](https://wiki.seeedstudio.com/cn/reComputer_Jetson_Memory_Expansion/)。

需要注意的是，任何扩展操作都存在风险，我们建议您在开始之前主动**备份**您的系统。