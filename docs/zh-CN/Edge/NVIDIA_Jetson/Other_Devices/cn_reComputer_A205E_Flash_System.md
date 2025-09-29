---
description: 在 A205E 迷你电脑上刷写 Jetpack
title: A205E 迷你电脑
tags:
  - Mini PC Jetpack Flash
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_A205E_Flash_System
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---
<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

# 将 JetPack 操作系统刷写到 A205E 载板或 A205E 迷你电脑（支持 NVIDIA Jetson Xavier NX）

在本教程中，我们将向您展示如何将 Jetpack 操作系统刷写到支持 NVIDIA Jetson Xavier 模块的 A205E 载板或 A205E 迷你电脑。我们将介绍两种刷写系统的方法，由于 A205 载板与官方 NVIDIA Jetson 载板不同，因此还需要安装相应的驱动程序。

<div align="center">
  <table>
    <tbody><tr>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank"><span>A205E 载板</span></a></td>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank"><span>A205E 迷你电脑</span></a></td>
      </tr>
      <tr>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank" rel="noopener"><img width={350} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/5/_/5_7_1.png" alt /></a>
        </td>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank" rel="noopener"><img width={380} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/1/_/1_9_2.png" alt /></a>
        </td>
      </tr>
    </tbody></table>
</div>

## 入门指南

我们可以通过使用 **Linux 终端** 轻松完成此操作。对于具有 Linux 知识基础的用户，我们强烈建议仅使用 Linux 终端。

- [通过 Linux 终端刷写 JetPack 操作系统](#flashing-jetpack-os-via-command-line)

### 软件准备

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA 账户</span></a>
- 主机上的 Ubuntu 18.04 操作系统

!!!note
 在本教程中，我们将使用基于 Ubuntu 18.04 LTS 的系统来完成安装。

### 硬件准备（强制恢复模式）

- 安装有 Ubuntu 18.04 操作系统的主机
- 一根 USB Type-C 数据线
- A205E 载板或 A205E 迷你电脑的电源适配器

在进行安装步骤之前，我们需要确保开发板处于强制恢复模式

**步骤 1.** 请在 A205E 载板或 A205E 迷你电脑的侧面找到 USB Type-C 端口、电源按钮、复位按钮和恢复按钮。

<div align="center">
  <table>
    <tbody><tr>
        <td align="center">A205E 载板</td>
        <td align="center">A205E 迷你电脑</td>
      </tr>
      <tr>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank" rel="noopener"><img width={350} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/n/antenna_dc_jack_io_controller_20_pin_1_.png" alt /></a>
        </td>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank" rel="noopener"><img width={380} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/2/_/2_8_3.png" alt /></a>
        </td>
      </tr>
    </tbody></table>
</div>

要将 A205E 置于强制恢复模式，请确保 A205E 已关机。

**步骤 2.** 使用 USB Type-C 线缆连接 **A205E 载板或 A205E 迷你电脑** 上的 Type-C 编程端口与主机电脑。

**步骤 3.** 为 **A205E 载板或 A205E 迷你电脑** 连接电源适配器。

**步骤 4.** 首先 **按住** **恢复键**，然后 **按住** **电源键**，等待 LED 灯亮起，然后 **松开** **电源键**，现在 **等待 2 秒** 并 **松开** **恢复键**。

**或者**

如果 **A205E 载板或 A205E 迷你电脑** 处于 **开机** 状态，**按住** **复位键** 和 **恢复键**，**松开** **复位键** **2 秒**，然后 **松开** **恢复键**。

**步骤 5.** 在 Linux 主机电脑屏幕上，我们可以右键点击鼠标打开终端并输入命令 `lsusb`。当返回的内容中包含 `NVidia Corp.` 时，说明您的 A205 载板已进入强制恢复模式，您可以继续进行后续操作。

ID 取决于载板上的模块，信息显示如下：

- 对于 Jetson Xavier NX：**0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## 通过命令行刷写 JetPack 操作系统

以下是使用命令行脚本刷写 Jetpack 操作系统的工作流程：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### 步骤 1. 下载合适的 NVIDIA Linux 驱动包

在 **Linux 主机电脑** 上，我们需要打开浏览器并访问 <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>。首先我们应该检查 Jetson Linux 的版本是否受支持。在这种情况下，我们使用 NVIDIA L4T 35.1.0（相当于 Jetpack 5.0.2）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/select_35_1.png" /></div>

找到合适的版本后，点击进入下载页面。找到并点击"L4T Driver Package (BSP)"和"Sample Root Filesystem"来下载驱动文件。文件名类似于 `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` 和 `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/download_files.png" /></div>

以此为例，我们选择 NVIDIA L4T 35.1.0 版本，文件名应该是：

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

### 步骤 2. 解压包文件并通过命令行组装 Rootfs

在 Linux 主机电脑上，请打开 ``终端`` 并使用以下命令行来解压文件并组装 rootfs：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!注意
    `${XXX_XX_XXX}` 是您放置文件名称的地方。

- 例如，下载的文件存储在 `~/Downloads/` 中，请在您的 Ubuntu 主机上打开 ``终端`` 并输入以下命令：

```bash
cd ~/Downlands/
mkdir Jetpack_502
mv Jetson_Linux_R35.1.0_aarch64.tbz2 Jetpack_502/
mv Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2 Jetpack_502/
cd Jetpack_501/
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

### 步骤 3. 将系统刷写到开发板

在示例中，我们使用 NVIDIA Jetson Xavier NX 模块，可以直接将系统刷写到开发板，执行以下命令：

```sh
cd ~/Downlands/Jetpack_502/Linux_for_Tegra
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
