---
description: A205 载板
title: A205 载板
keywords:
  - Edge
  - reComputer Carrier_Board_for_Jetson_Moudule
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_A205_Flash_System
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

# 为 A205 载板刷写 JetPack 操作系统（支持 NVIDIA Jetson Nano 和 NVIDIA Jetson Xavier NX）

在本教程中，我们将向您展示如何为 A205 载板刷写 Jetpack 操作系统，该载板同时支持 NVIDIA Jetson Nano 模块和 NVIDIA Jetson Xavier 模块。我们将介绍两种刷写系统的方法，由于 A205 载板与官方 NVIDIA Jetson 载板不同，因此还需要安装相应的驱动程序。

![image](https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A205.png)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A205-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5133.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

## 入门指南

我们可以使用 **NVIDIA SDK manager 和 Linux 终端**来刷写系统，或者我们可以简单地使用 **Linux 终端**来完成此操作。对于有 Linux 知识基础的用户，我们强烈推荐仅使用 Linux 终端。

- [通过 NVIDIA SDK manager 刷写 JetPack 操作系统](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [通过 Linux 终端刷写 JetPack 操作系统](#flashing-jetpack-os-via-command-line)

首先我们需要进行一些准备工作：

### 软件准备

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA 账户</span></a>
- 安装 Ubuntu 18.04 操作系统（或更高版本）的 Linux 主机

!!!note
 在本教程中，我们将使用基于 Ubuntu 18.04 LTS 的系统来完成安装。

### 硬件准备（强制恢复模式）

在进行安装步骤之前，我们需要确保开发板处于强制恢复模式。不同类型的开发板存在差异，请注意区别。

**步骤 1.** 首先，我们需要断开开发板的电源。

**步骤 2.** 使用 **USB type-C 线缆**连接您的载板和 Linux 主机

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A2051.png" /></div>

**步骤 3.** 在按住 **RECOVERY 按钮（W32）**的同时给开发板上电并开机，然后松开按钮。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A2052.jpg" /></div>

**步骤 4.** 在 Linux 主机屏幕上，我们可以右键单击鼠标打开终端并输入命令 `lsusb`。当返回的内容中包含 `NVidia Corp.` 时，说明您的 A205 载板处于强制恢复模式，您可以继续进行后续操作。

ID 取决于载板上的模块，信息显示如下：

- 对于 Jetson Nano：**0955:7f21 NVidia Corp**
- 对于 Jetson Xavier NX：**0955:7e19 NVidia Corp**
- 对于 Jetson TX2 NX：**0955:7c18 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## 通过 NVIDIA SDK Manager 刷写 JetPack 操作系统

接下来我们将介绍通过 NVIDIA SDK Manager 安装系统的教程。NVIDIA SDK Manager 是一个集成工具，它捆绑了开发者软件并为 NVIDIA SDK 提供端到端的开发环境设置解决方案。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### 步骤 1. 在 Linux 主机 PC 上安装 NVIDIA SDK Manager

我们需要在 Linux 主机 PC 上打开浏览器，从 NVIDIA 官方网站<a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>下载 NVIDIA SDK Manager</span></a>。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack1.png" /></div>

### 步骤 2. 打开 NVIDIA SDK Manager 并登录

在 Linux 主机 PC 屏幕上，我们可以右键单击鼠标并打开终端。然后我们可以输入以下命令来启动 SDK Manager：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

第一次使用 NVIDIA SDK Manager 时，会弹出一个网页提示您使用之前注册的 NVIDIA 账户登录。

### 步骤 3. 选择目标设备

登录后，您将进入安装第一步的第一个屏幕。由于我们已经连接了开发板，会弹出一个窗口让您选择硬件设备。

这里的示例配备了 **NVIDIA Jetson Nano 4GB 模块**，所以我们可以选择第一个。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

在第一个屏幕中有更多选项供您选择：

- 需要选择产品类别面板中的 **Jetson**。
- 在硬件配置面板中，我们建议您**不要选择主机**。这将花费更多时间为您当前的 Ubuntu 主机安装 NVIDIA 组件。如果需要，您可以选择它。
- 在目标操作系统面板中，我们可以选择不同的**操作系统**和 **JetPack 版本**。但要注意 JetPack 的版本，不同的模块可能支持不同类型的 JetPack。我们在这里推荐"JetPack 4.6.1"。
- 在附加 SDK 中，由于 eMMC 的存储空间只有 16GB，如果我们在这里安装 DeepStream，将会出现内存不足的情况。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

点击继续进入下一步。

### 步骤 4. 查看所需组件

在**详细信息和许可证**中，您可以展开主机组件和目标组件面板来查看将安装在您系统上的组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

如果您只需要安装系统，可以取消选中 SDK 组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    在选择要安装的组件时，您可能需要关注使用的容量。内置 eMMC 大小只有 16GB，请根据您的实际需求明智地分配和使用这个空间。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    经过实际测试，安装完整套 SDK 组件后，eMMC 空间只剩下约 500MB。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
    如果您想了解如何解决容量不足的问题，请参考[故障排除](https://wiki.seeedstudio.com/cn/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space)。

如果您希望 SDK Manager 将所有文件下载到默认路径以外的位置，请转到屏幕底部的下载和安装选项，然后选择您希望使用的路径。

由于 A205 载板需要刷写驱动，请确保首先选中**立即下载。稍后安装。**复选框来下载系统但不安装它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/60.png" /></div>

选择继续进入下一步。

此时系统将开始下载到您选择的路径，所以我们可以利用这个时间准备驱动程序。

### 步骤 5. 选择合适的驱动程序

现在，我们需要安装驱动程序以确保开发板上的每个组件都能正常工作。首先我们需要根据载板和模块在 Ubuntu 主机中选择驱动程序文件。

<table align="center">
  <tbody><tr>
      <th align="center">载板</th>
      <th align="center">Jetson 模块</th>  
      <th align="center">JetPack 版本</th>
      <th align="center">L4T 版本</th>
      <th align="center">下载地址</th>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Nano eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nano.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nx.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_tx2nx.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.0.2</td>
      <td align="center">35.1.0</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/A205/205nx_jp5.0.2.zip">下载</a></td>
    </tr>
  </tbody></table>

!!!Note
 下载的文件中包含两个适用于 A205 的 JetPack 5.0.2 驱动程序。两个都可以正常工作，只是其中一个支持 **IMX-219 摄像头**，另一个支持 **IMX-477 摄像头**。

### 步骤 6. 在系统文件夹中解压驱动程序

!!!Attention
 请注意，确保 SDK Manager 已完成系统下载后再进行此步骤！

在 Linux 主机 PC 中，我们需要用下载的驱动程序包文件替换官方镜像中的一些文件。由于我们在这里使用 SDK Manager，官方镜像的位置（路径）是：

`/home/<username>/nvidia/nvidia_sdk/JetPack_<version num>_Linux_<board name>_TARGETS/Linux_for_Tegra`

### 替换文件

!!!Attention
 在替换文件之前，您可以选择备份 `kernel` 文件夹中将要被替换的 `.dtb` 文件，并将其临时保存在另一个路径中，以便您可以随时恢复官方下载。

我们可以将文件拖拽到官方文件中：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

或者我们可以执行以下命令来替换文件：

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

!!!注意
    `${}` 是环境变量的使用方式。
 `${驱动包内核路径}` 表示内核镜像文件夹的完整路径
 `${官方解压的 Linux_for_Tegra 路径}` 表示 L4T zip 包解压后官方提供的 Linux_for_Tegra 文件夹的完整路径。

### 步骤 7. 安装系统

由于我们之前选择了稍后安装系统，此时我们需要重新执行之前的**步骤 3 到 4**，这将在已经替换了驱动文件的 A205 上安装系统。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/61.png" /></div>

在安装开始之前，SDK Manager 会提示您输入 `sudo` 密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

SDK Manager 支持两种选项来让您的 Jetson 目标设备进入强制恢复模式。我们了解 Jetson-202 载板进入强制恢复模式的操作，并且在之前的步骤中已经进入了强制恢复模式。所以我们选择 `Manual setup: set the target to Force Recovery Mode via manual operations`。

您还可以选择是否预配置 OEM 配置。

- **Pre-Config**：SDK Manager 将使用预定义配置刷写目标设备，刷写后无需完成系统配置向导。
- **Runtime**：目标设备上未设置默认配置，刷写后您需要手动完成系统配置向导。

这里，我们选择默认的 **Pre-Config**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

之后，在底部输入新 Jetson 系统的用户名和密码，请记住它们。

准备就绪后，点击 `Flash` 继续。

显示屏显示软件下载和安装的进度。请耐心等待安装完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### （可选）步骤 7. 安装 SDK 组件

如果您在之前的**步骤 4** 中勾选了组件安装，您将需要执行此步骤。

稍等片刻，您将能够看到 NVIDIA SDK Manager 中弹出一个新窗口，提示您需要通过 IP 地址连接到您的设备。这意味着系统已经安装完成，组件安装将继续进行。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

在这种情况下，我们可以**拔出跳线**并重启板子。然后我们需要通过 HDMI 将板子连接到显示器，输入您在**步骤 4** 中输入的密码，并登录到主界面。

此时您需要将板子连接到与 Linux 主机 PC 相同的局域网，并使用命令 `ifconfig` 确定 Jetson 的 **IP 地址**。

回到 Linux 主机 PC 并输入您刚刚获得的 IP 地址。NVIDIA SDK Manager 将尝试连接到 Jetson 设备并继续完成下一个 SDK 组件的安装。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

当您看到以下窗口出现时，安装已经完成。但我们仍然需要安装驱动程序，所以应该保持板子处于**强制恢复模式**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

刷写完成后，您可以完全使用该板子。

## 通过命令行刷写 JetPack 操作系统

由于可以自由定制 BSP（NVIDIA Linux 驱动程序包），对于具有 Linux 知识基础的用户来说，通过命令行刷写 JetPack 操作系统会非常简单。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### 步骤 1. 下载合适的 NVIDIA Linux 驱动程序包

在 **Linux 主机 PC** 上，我们需要打开浏览器并访问 <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>。首先我们应该检查 Jetson Linux 的版本是否受支持。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

找到合适的版本后，点击进入下载页面。找到并点击"L4T Driver Package (BSP)"和"Sample Root Filesystem"来下载驱动文件。文件名类似于 `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` 和 `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/A205_Flash_Jetpack.png" /></div>

作为示例，我们选择 NVIDIA L4T 32.7.1 版本，因为它包含在 JetPack4.6.1 中并支持 Jetson Nano 模块。文件名为：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### 步骤 2. 通过命令行解压包文件并组装 Rootfs

在 Linux 主机 PC 上，我们应该找到一个文件夹并存储之前下载的包文件。然后在该文件夹中打开命令行窗口（终端），使用下面的命令行来解压文件并组装 rootfs：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
```

!!!注意
    `${}` 是您放置文件名称的地方。

*以 **NVIDIA L4T 32.7.1** 为例，下载的文件存储在 `/Desktop/L4T_Drivers` 中，因此我们在 '/Desktop/L4T_Drivers' 路径下打开命令行窗口（终端）并执行以下命令。

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
```

### 步骤 3. 选择合适的驱动程序

解压包后，我们还需要安装驱动程序以确保板上的每个组件都能正常工作。首先，我们需要根据载板和模块在 Ubuntu 主机中选择驱动程序文件。

<table align="center">
  <tbody><tr>
      <th align="center">载板</th>
      <th align="center">Jetson 模块</th>  
      <th align="center">JetPack 版本</th>
      <th align="center">L4T 版本</th>
      <th align="center">下载地址</th>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Nano eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nano.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nx.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_tx2nx.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.0.2</td>
      <td align="center">35.1.0</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/A205/205nx_jp5.0.2.zip">下载</a></td>
    </tr>
  </tbody>
</table>

!!!Note
 下载文件中包含两个用于 A205 的 JetPack 5.0.2 驱动程序。两个都能正常工作，只是其中一个支持 **IMX-219 摄像头**，另一个支持 **IMX-477 摄像头**。

### 步骤 4. 解压文件中的驱动程序

我们可以将文件拖拽到官方文件中：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

或者我们可以执行以下命令来替换文件：

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

!!!注意
    `${}` 是环境变量的使用方式。
 `${Drive package kernel path}` 表示内核镜像文件夹的完整路径
 `${Officially unpacked Linux_for_Tegra path}` 表示官方提供的 L4T zip 包解压后 Linux_for_Tegra 文件夹的完整路径。

### 步骤 5. 将系统刷写到开发板

在示例中我们使用 NVIDIA Jetson Nano 模块，我们可以直接将系统刷写到开发板，执行以下命令：

```sh
sudo ./apply_binaries.sh
sudo ./flash.sh ${BOARD} mmcblk0p1
```

!!!Note
    `${BOARD}` 是环境变量的使用，它的信息应该是您的模块在载板中的名称。您可以查看<a href="https://files.seeedstudio.com/wiki/A20X/6.png" target="_blank"><span>这里</span></a>获取完整信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    刷写 L4T 大约需要 10 分钟，在较慢的主机上可能需要更长时间。

刷写完成后，您就可以完全使用该板子了。

## 故障排除

### 使用 NVIDIA SDK Manager 安装故障排除

各种安装错误的原因很多。以下是常见安装问题的检查清单，可能有助于您从损坏的安装中恢复。

1. 查看摘要表以识别哪个组件失败了。

    a. 展开状态为"Error"的组。

    b. 当您找到失败的组件时，点击"Install Error"右侧的详细信息图标，将重定向到终端选项卡，该选项卡将显示确切的错误。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. 如果错误与环境问题相关，例如损坏的 apt 存储库或缺少先决条件，请尝试手动修复，然后点击"Retry Failed Items"按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. 重试安装还可以通过其他两种方式进行：

    a. 从**使用 SDK Manager 刷写到 eMMC -- 步骤 3**，使用"Repair/Uninstall"按钮进入"Manage NVIDIA SDKs"页面。如果需要，展开状态为"Broken"的 SDK，然后点击相关部分（Host 或 Target）的"Repair"。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. 在**使用 SDK Manager 刷写到 eMMC -- 步骤 3**，选择所需的 SDK 并重新运行安装。

5. 最后，尝试卸载并重新安装相关的 SDK。

### 使用命令行安装故障排除

命令行安装方法相对简单，在使用强制恢复模式的场景中经常容易出错。

如果您在**使用命令行刷写到 eMMC -- 步骤 2**中遇到下面显示的错误，您可能没有成功让板子进入强制恢复模式。请特别注意，不要在载板通电的情况下进入强制恢复模式，因为这是无效的。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

如果您在**使用命令行刷写到 eMMC -- 步骤 3**中无法进入系统并卡在启动显示命令行，您可能没有退出强制恢复模式。同样，在载板通电时拔掉跳线来退出强制恢复模式是无效的，这些都需要在断电时完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

!!!Note
    如果需要更多存储空间，我们可以使用 SD 卡来扩展容量，或者将系统烧录到 SD 卡上，您可以参考我们推荐的解决方案[在 SD 卡上刷写系统](https://wiki.seeedstudio.com/cn/J101_Enable_SD_Card/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
