---
description: 为 NVIDIA® Jetson AGX Orin 32GB H01 套件刷写 JetPack
title: NVIDIA® Jetson AGX Orin 32GB H01 套件
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack
sku: 114110207
last_update:
  date: 10/14/2025
  author: Lakshantha/Youjiang
---

<!-- # Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit  -->

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>

:::info
请注意，该产品在 2024 年 11 月 25 日进行了以下更新：

1. 5V 电源方案已更改（电源 IC 从 ONNCP3020ADR2G 更换为 TI TPS53015DGS，外围元件也相应调整），这解决了使用某些高动态电流 USB 设备时设备重启的问题。
2. 电路板布局已优化，扩大了风扇线缆插槽以适应风扇接线。
3. 为稳定配件供应，WiFi 模块型号已从 8265.NGW 更改为 BL-M8822CP1，软件驱动程序也相应更新。

:::

本教程将指导您如何为 Jetson AGX Orin 32GB H01 套件安装 JetPack。

## 前提条件

- [Ubuntu 主机](https://developer.nvidia.com/sdk-manager)（原生或使用 VMware Workstation Player 的虚拟机）。
- Jetson AGX Orin H01 套件。
- USB Type-C 数据传输线

## 进入强制恢复模式

- **步骤 1：** 板上有一个恢复按钮，位于三个按钮的中间，如下图所示。按住恢复按钮，然后将板连接到电源以进入强制恢复模式。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/4.jpg"/></div>

- **步骤 2：** 使用 USB Type-C 数据传输线将 Jetson AGX Orin 32GB H01 套件与 Ubuntu 主机连接。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/5.jpg"/></div>

- **步骤 3：** 在 Ubuntu 主机上使用 `lsusb` 命令验证设备是否已进入恢复模式。
<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/check_rec.png"/></div>

:::info
如果日志中出现 `0955:7223 NVIDIA Corp.`，则表示设备已进入恢复模式。
:::

## 下载外设驱动程序

首先，您需要为此板安装外设驱动程序。这些驱动程序是板上某些硬件外设正常工作所必需的。点击下面的链接根据 JetPack 版本下载驱动程序

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack 版本</th>
      <th>L4T 版本</th>
      <th>驱动程序下载链接</th>
      <th>L4T 下载链接</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5.0.2</td>
      <td>35.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2/AGX-Orin-32GB-H01-JP5.0.2.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.1.1/AGX-Orin-32GB-H01-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaRL0XDaYCdFhkBiwvO3b8UBk4HmzRBQgfhYCKlN_ANVpA?e=5ndnMu" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3560" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfdaZCD6wMZPrW_LtMm3eQgBXnPq_8ri8WmKw3nsxXVf1Q?e=uvKRhE" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r363" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbYu41kk-LNNmsssNIuM5AoBLYjTFZo_mEUTUtIJlCCnyw?e=dvCgKk" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3640" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
    <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ES6058EFNl1LkrJGAvTYR6IBFTldWYyxJ4ZxQP3EM00BbQ?e=rjshwu" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3643" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
  </tbody>
</table>
</div>

## 刷写到 Jetson

:::danger
NVIDIA® Jetson AGX Orin 32GB H01 套件预装了 `JetPack 5.1.4` 操作系统。默认用户名和密码为用户：nvidia / 密码：nvidia。收到设备后，您可以直接登录系统并开始使用，无需重新刷写系统。

如果您的系统损坏，可以参考以下步骤重新刷写系统。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.0.2/JP5.1.1" label="JP5.0.2/JP5.1.1">

这里我们将使用：**NVIDIA L4T 35.1** 安装 **Jetpack 5.0.2** 或 **NVIDIA L4T 35.3.1** 安装 **Jetpack 5.1.1** 到 Jetson AGX Orin 32GB H01 套件。

- **步骤 1：** 在主机上下载相应的 NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

- **步骤 2：** 将之前下载的外设驱动程序移动到与 NVIDIA 驱动程序相同的文件夹中。现在您将在同一文件夹中看到三个压缩文件。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/7.png"/></div>

- **步骤 3：** 通过导航到包含这些文件的文件夹来解压 **Jetson_Linux_R35.1.0_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2** 并应用更改

```sh
cd <directory_where_the_files_are_located>
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

- **步骤 4：** 解压 **AGX-Orin-32GB-H01-JP5.0.2.zip**。这里我们额外安装了解压 .zip 文件所需的 **unzip** 包

```sh
cd ..
sudo apt install unzip 
unzip AGX-Orin-32GB-H01-JP5.0.2.zip
```

这里会询问是否替换文件。输入 **A** 并按 **ENTER** 键替换必要的文件

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/3.jpg"/></div>

- **步骤 5：** 将系统刷写到 eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson‐agx‐orin‐devkit mmcblk0p1
```

如果刷写过程成功，您将看到以下输出

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/9.jpg"/></div>

### 遇到的错误

- **AGX Orin** 和 **NX Orin** 在 *Jetpack 5.1.1* 上出现 **ERROR: failed to read rcm_state**
  - NVidia 对 Jetson AGX Orin 进行了 PCN 更改，但这不是 Seeed 的 PCN 更改。
  - 除了教程中提到的材料外，请在 Jetson Linux 35.3.1 页面底部下载 [Overlay_PCN210361_PCN210100_r35.3.1.tbz2](https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/overlay_pcn210361_pcn210100_r35.3.1.tbz2)。
  - 在解压 *Jetson_Linux* 之后、应用二进制文件之前，请解压 *Overlay_PCN210361_PCN210100_r35.3.1.tbz2*。然后将所有文件和文件夹复制到 *Linux_For_Tegra*（合并，不要跳过）。
  - 然后继续指南中的其余步骤。

</TabItem>

<TabItem value="JP5.1.4" label="JP5.1.4">

这里我们将使用：**NVIDIA L4T 35.6.0** 在 Jetson AGX Orin 32GB H01 套件上安装 **Jetpack 5.1.4**。

在 Ubuntu 主机的终端窗口中输入以下命令：

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2

tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
sudo tar xf 605_jp514.tbz2  # Please copy 605_jp514.tbz2 to the Linux_for_Tegra/ directory before execution.

```

选择以下命令之一执行刷写操作：

(1). 将系统刷写到 eMMC：

```bash
sudo ./flash.sh jetson-agx-orin-devkit internal
```

(2). 将系统刷写到 SSD：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  --showlogs --network usb0 jetson-agx-orin-devkit external
```

<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/flash_successful.png"/></div>

刷写完成后，设备将自动重启。

</TabItem>


<TabItem value="JP6.0" label="JP6.0">

这里我们将使用 **NVIDIA L4T 36.3** 在 Jetson AGX Orin 32GB H01 套件上安装 **Jetpack 6.0**。

- **步骤 1：** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r363) NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **步骤 2：** 将之前下载的外设驱动程序移动到与 NVIDIA 驱动程序相同的文件夹中。现在您将在同一文件夹中看到三个压缩文件。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/files.png"/>
</div>

- **步骤 3：** 通过导航到包含这些文件的文件夹来解压 **Jetson_Linux_R36.3.0_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** 并应用更改：

```bash
cd < directory_where_the_files_are_located >
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **步骤 4：** 解压 **AGX-Orin-H01-JP6.0.zip**。这里我们额外安装了解压 .zip 文件所需的 **unzip** 包。

```sh
cd ..
sudo apt install unzip 
sudo unzip AGX-Orin-H01-JP6.0.zip
```

这里会询问是否替换文件。输入 **A** 并按 **ENTER** 键来替换必要的文件

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/extract_drivers.png"/>
</div>

- **步骤 5：** 将系统刷写到 eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

如果刷写过程成功，您将看到以下输出：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

这里我们将使用 **NVIDIA L4T 36.4** 在 Jetson AGX Orin 32GB H01 套件上安装 **Jetpack 6.1**。

- **步骤 1：** 在 Ubuntu 主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3640) NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **步骤 2：** 将之前下载的外设驱动程序移动到与 NVIDIA 驱动程序相同的文件夹中。现在您将在同一文件夹中看到三个压缩文件。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
您可以使用以下命令来验证下载的文件是否完整。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **步骤 3：** 通过导航到包含这些文件的文件夹来解压 **Jetson_Linux_R36.4.0_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2** 并应用更改：

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **步骤 4：** 解压 **A605_Jetpack_6.1.tar.gz**：

```bash
cd ..
tar xf A605_Jetpack_6.1.tar.gz
sudo cp -r 605_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

- **步骤 5：** 将系统刷写到 eMMC：

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

如果刷写过程成功，您将看到以下输出：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
我们也可以运行以下命令将系统安装到 SSD：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

这里我们将使用 **NVIDIA L4T 36.4** 在 Jetson AGX Orin 32GB H01 套件上安装 **Jetpack 6.2**。

- **步骤 1：** 在 Ubuntu 主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3643) NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **步骤 2：** 将之前下载的外设驱动程序移动到与 NVIDIA 驱动程序相同的文件夹中。现在您将在同一文件夹中看到三个压缩文件。

:::info
与 Jetpack 6.1 的刷写过程类似！
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
您可以使用以下命令来验证下载的文件是否完整。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **步骤 3：** 通过导航到包含这些文件的文件夹来解压 **Jetson_Linux_R36.4.3_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R36.4.3_aarch64.tbz2** 并应用更改：

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.3_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **步骤 4：** 解压 **605_jp62.tar.gz**：

```bash
cd ..
tar xf 605_jp62.tar.gz
sudo cp -r 605_jp62/Linux_for_Tegra/* Linux_for_Tegra/
```

- **步骤 5：** 将系统刷写到 eMMC：

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

如果刷写过程成功，您将看到以下输出：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
我们也可以运行以下命令将系统安装到 SSD：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

</Tabs>

## 开发者工具

### 预装 Jetpack 用于快速开发和边缘 AI 集成

[Jetson 软件](https://developer.nvidia.com/embedded/develop/software)始于 NVIDIA JetPack™ SDK，它提供了完整的开发环境，包括 CUDA-X 加速库和其他 NVIDIA 技术来启动您的开发。JetPack 包含 Jetson Linux 驱动程序包，提供 Linux 内核、引导加载程序、NVIDIA 驱动程序、刷写实用程序、示例文件系统和 Jetson 平台的工具链。它还包括安全功能、空中更新功能等等。

### 计算机视觉和嵌入式机器学习

- [Deepstream](https://developer.nvidia.com/deepstream-sdk) 为基于 AI 的多传感器处理以及 Jetson 上的视频和图像理解提供完整的流分析工具包。
- [TAO](https://developer.nvidia.com/tao-toolkit) 基于 TensorFlow 和 PyTorch 构建，是 NVIDIA TAO 框架的低代码版本，可加速模型训练
- [alwaysAI](https://alwaysai.co/blog/getting-started-with-the-jetson-nano-using-alwaysai)：直接在 reComputer 边缘构建、训练和部署计算机视觉应用程序。免费访问 100+ 预训练的计算机视觉模型，并通过企业订阅在云端几次点击即可训练自定义 AI 模型。查看我们的 [wiki](https://wiki.seeedstudio.com/cn/alwaysAI-Jetson-Getting-Started/#object-detection-on-pre-loaded-video-file) 指南开始使用 alwaysAI。
- [edge impulse](https://www.edgeimpulse.com/)：最简单的嵌入式机器学习管道，用于在边缘部署音频、分类和目标检测应用程序，无需依赖云端。
- [Roboflow](https://blog.roboflow.com/deploy-to-nvidia-jetson/) 提供工具将原始图像转换为自定义训练的目标检测和分类计算机视觉模型，并部署模型用于应用程序。请参阅 https://docs.roboflow.com/inference/nvidia-jetson 了解如何使用 Roboflow 部署到 NVIDIA Jetson。
- [ultralytics yolo](https://github.com/ultralytics/yolov5)：使用迁移学习实现 YOLOv5 的少样本目标检测，只需要很少的训练样本。请参阅我们的分步 [wiki](https://wiki.seeedstudio.com/cn/YOLOv5-Object-Detection-Jetson/) 教程。
- [深度学习](https://deci.ai/blog/jetson-machine-learning-inference/)：在 NVIDIA Jetson Nano 上优化您的模型。查看 Deci 的[这里](https://info.deci.ai/benchmark-optimize-runtime-performance-nvidia-jetson)关于在 NVIDIA Jetson Nano 和 Xavier NX 设备上自动基准测试和优化运行时性能。

### 语音 AI

- [Riva](https://developer.nvidia.com/riva) 是一个 GPU 加速的 SDK，用于构建针对您的用例定制并提供实时性能的语音 AI 应用程序。

### 远程车队管理

使用 [allxon](https://www.allxon.com/) 启用安全的 OTA 和远程设备管理。使用代码 H4U-NMW-CPK 解锁 90 天免费试用。

### 机器人和 ROS 开发

- NVIDIA Isaac ROS GEMs 是硬件加速包，使 ROS 开发人员更容易在 NVIDIA 硬件上构建高性能解决方案。了解更多关于 [NVIDIA Isaac](https://developer.nvidia.com/embedded/develop/software) 的信息。
- [Cogniteam Nimbus](https://www.cogniteam.com/nimbus) 是一个基于云的解决方案，允许开发人员更有效地管理自主机器人。Nimbus 平台开箱即用地支持 NVIDIA® Jetson™ 和 ISAAC SDK 和 GEMs。查看我们关于使用 Nimbus 将您的 ROS 项目连接到云端的[网络研讨会](https://www.seeedstudio.com/blog/2022/04/21/webinar-connect-your-ros-project-to-the-cloud-with-nimbus/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
