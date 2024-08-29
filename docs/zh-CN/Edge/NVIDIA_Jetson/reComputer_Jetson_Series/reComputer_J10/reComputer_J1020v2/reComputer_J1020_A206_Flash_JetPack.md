---
description: 将JetPack闪存到reComputer J1020v1（A206载板）
title: 将JetPack闪存到reComputer J1020v1（A206载板）
keywords:
  - Edge
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_J1020_A206_Flash_JetPack
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# 将JetPack闪存到reComputer J1020v1（A206载板）

在这个wiki中，我们将向您展示如何将Jetpack OS闪存到reComputer J1020。由于其载板设计类似于官方NVIDIA Nano开发者载板，我们可以通过两种方式来闪存JetPack。

## 入门指南

我们可以使用**NVIDIA SDK Manager** Linux软件，也可以直接通过Linux命令行使用**NVIDIA Linux Driver Package**将JetPack OS闪存到reComputer J1020。对于素未谋面的NVIDIA Jetson新手，我们强烈推荐使用NVIDIA SDK Manager。

- [选项1 - 通过NVIDIA SDK Manager刷新JetPack操作系统。](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [选项2 - 通过命令行刷新JetPack操作系统。](#flashing-jetpack-os-via-command-line)

我们还需要一些准备工作。

### 软件准备

- <a href="https://developer.nvidia.com/login" target="_blank"><span>英伟达账户</span></a>
- Linux主机计算机配备Ubuntu 18.04操作系统（或更高版本）。

!!!note
 在这个教程中，我们将使用基于Ubuntu 18.04 LTS系统来完成安装。

### 硬件准备（强制恢复模式）

在我们继续安装步骤之前，我们需要确保我们的reComputer处于强制恢复模式。

**步骤1.** 在开始之前，您需要断开reComputer的电源。
**步骤2.** 要进入恢复模式，您需要使用跳线将**FC REC**和**GND**连接起来。

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">Button Header</th>
      <th align="center">Description</th>  
      <th align="center">Button Header</th>
      <th align="center">Description</th>
    </tr>
    <tr>
      <td rowSpan={6}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/J202-b.png" /></div></td>
      <td align="center">1</td>
      <td align="center">PWR BTN</td>
      <td align="center">7</td>
      <td align="center">AUTO ON</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">DISABLE</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td align="center">FC REC</td>
      <td align="center">9</td>
      <td align="center">UART TXD</td>
    </tr>
    <tr>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">10</td>
      <td align="center">UART RXD</td>
    </tr>
    <tr>
      <td align="center">5</td>
      <td align="center">SYS RET</td>
      <td align="center">11</td>
      <td align="center">LED +</td>
    </tr>
    <tr>
      <td align="center">6</td>
      <td align="center">GND</td>
      <td align="center">12</td>
      <td align="center">LED -</td>
    </tr>
  </tbody></table>

**第三步。** 使用左侧12V/5A DC电缆给reComputer供电，并使用Type-C电缆将Linux主机PC连接到reComputer的右侧。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

!!!Attention
   在接线前，请注意电源连接器和数据连接器，请勿直接将数据连接器连接到直流电源。

**第4步。** 在主机计算机的命令行窗口下，输入命令 `lsusb`。当返回的内容中包含 `ID 0955:7f21 NVidia Corp.` 时，意味着reComputer处于强制恢复模式，我们可以继续进行后续操作。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## 通过 NVIDIA SDK 管理器刷写 JetPack 操作系统

接下来，我们将通过NVIDIA SDK Manager教程，介绍如何安装系统。NVIDIA SDK Manager是一个全能工具，捆绑了开发者软件，为NVIDIA SDK提供了端到端的开发环境设置解决方案。因此，它适合初学者使用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### 第一步。在Linux主机PC上安装NVIDIA SDK Manager。

我们需要在Linux主机PC上打开浏览器，从NVIDIA官方网站<a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>请从NVIDIA官方网站下载NVIDIA SDK Manager</span></a> 

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### 第二步。打开NVIDIA SDK Manager并登录。

在Linux主机PC屏幕上，我们可以右键单击鼠标并打开一个终端。然后我们可以输入以下命令启动SDK Manager：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

首次使用NVIDIA SDK Manager时，会弹出一个网页提示您使用之前注册的NVIDIA账户登录。

### Step 3.  请选择目标设备。

登录成功后，您将进入第一个屏幕，开始安装的第一步。由于我们已经连接了 reComputer J1020，将会弹出一个窗口让您选择硬件设备。

reComputer J1020配备了**NVIDIA Jetson Nano 4GB模块**，因此我们可以选择第一个。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

第一个屏幕有更多选择供您选择：

- 在产品类别面板中需要选择**Jetson**。
- 在硬件配置面板中，我们建议您**不要选择主机机器**。这将需要更多时间来为您当前的Ubuntu主机安装NVIDIA组件。如果有需要，您可以选择它。
- 在目标操作系统面板中，我们可以选择不同的**操作系统**和**JetPack版本**。但要小心JetPack的版本，不同的模块可能支持不同类型的JetPack。我们推荐在这里选择"JetPack 4.6.1"。
- 在额外的SDK中，由于eMMC的存储空间仅为16GB，如果在此安装DeepStream，会导致内存不足。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

请点击“继续”以进行下一步操作。

### 第四步。审查所需的组件。

在**详细信息和许可**中，您可以展开主机组件和目标组件面板，以审查将安装在您的系统上的组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

如果您只需要安装系统，则可以取消选择SDK组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    在选择要安装的组件时，您可能需要注意已使用的容量。内置eMMC的大小仅为16GB，请根据实际需求明智地分配和使用这些空间。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    实际测试后，安装完整的SDK组件后，只剩下大约500MB的eMMC空间。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>

    如果您想查看如何解决容量不足的问题，请参考[故障排除]。(https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space).

如果您希望SDK管理器将所有文件下载到除默认路径之外的位置，请转到位于屏幕底部的“下载和安装选项”，然后选择您希望使用的路径。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

请点击“继续”以进入下一步。

### 第五步。安装系统。

安装开始之前，SDK 管理器会提示您输入您的 `sudo` 密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

一段时间后，我们将被要求为我们的reComputer设置新系统。由于我们手动进入恢复模式，我们在这里选择“手动设置：通过手动操作将目标设置为强制恢复模式”。同时，我们选择默认的“Pre-Config”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

之后，我们需要将新Jetson系统的名称和密码输入到我们的reComputer中，这是由您自行设置的。

准备好后，点击“刷新”以继续。

显示屏显示软件的下载和安装进度。请耐心等待安装完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### （可选）步骤6. 安装SDK组件

如果您在上一个**第4步**已经检查过组件的安装情况，那么您需要继续进行这一步骤。

片刻之后，您将会在NVIDIA SDK Manager中看到一个新窗口弹出，提示您需要通过IP地址连接设备。这意味着系统已经安装完成，组件的安装将继续进行。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

在这种情况下，我们可以**拔出跳线**并重新启动 reComputer。然后，我们需要通过 HDMI 将 reComputer 连接到显示器，输入您在**第 4 步**中输入的密码，然后登录到主界面。

此时，您需要将 reComputer 连接到与 Linux 主机 PC 相同的 LAN，并使用 `ifconfig` 命令确定 Jetson 的**IP 地址**。

返回 Linux 主机 PC 并输入刚刚获得的 IP 地址。NVIDIA SDK Manager 将尝试连接到 Jetson 设备并继续安装下一个 SDK 组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

当您看到以下窗口出现时，安装已经完成。您可以开始使用Jetson，或继续按照下面的步骤完成对您的新系统的一些基本配置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!Attention
    确保在重新启动系统之前拔掉跳线并退出强制恢复模式。

## 通过命令行闪现JetPack操作系统。

感谢自由定制BSP（NVIDIA Linux驱动程序包），通过命令行刷写JetPack操作系统对于Linux知识库用户来说可以非常容易。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### 第一步。下载适当的NVIDIA Linux驱动程序包。


在**Linux主机**上，我们需要打开浏览器，访问<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>。首先，我们应检查Jetson Linux的版本是否支持我们的reComputer Jetson模块。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

找到适合的版本后，点击进入下载页面。找到并点击“L4T Driver Package (BSP)”和“Sample Root Filesystem”以下载驱动程序文件。文件的名称类似于`Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` 和 `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

作为示例，我们选择NVIDIA L4T 32.7.1版本，因为它作为JetPack4.6.1的一部分，支持Jetson Nano模块。文件的名称为：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### 第二步。通过命令行解压软件包文件并组装Rootfs。

在Linux主机PC上，我们应该找到一个文件夹，并在下载前将软件包文件存储在其中。然后在该文件夹中打开一个命令行窗口（终端），并使用以下命令行解压文件并组装根文件系统：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!Note
    `${}` 这里是您放置文件名称的地方。

在**NVIDIA L4T 32.7.1**的示例中，下载的文件存储在`/Desktop/L4T_Drivers`中，因此在'/Desktop/L4T_Drivers'路径下我们打开命令行窗口（终端）并执行以下命令。

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

请将上述文本从原语言翻译成中文（简体）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### 第三步。刷新系统以重新计算机。

由于我们已经将reComputer J1020强制进入恢复模式，并且模块是Jetson Nano。我们可以直接将系统刷入reComputer，执行以下命令：

```sh
sudo ./flash.sh jetson-nano-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
   刷写L4T大约需要10分钟时间，或者在慢的主机电脑下需要更长时间。

此刻，我们可以拔掉跳线，然后重新启动reComputer以继续使用。

## 故障排除

### 使用NVIDIA SDK Manager进行安装故障排除。

安装错误的原因有很多种。以下是常见安装问题的检查表，可能会帮助您从破损的安装中恢复。

1. 查看摘要表，确定哪个组件出现故障。

    a. 展开具有“错误”状态的组。

    b. 当找到故障组件时，单击 Install Error 右侧的详细信息图标，将被重定向至终端标签页，显示确切的错误信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. 如果错误与环境问题有关，例如破损的apt存储库或缺少的先决条件，请尝试手动修复，然后点击“重试失败项”按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. 重新安装也有两种其他方式可供选择：

    从**使用 SDK 管理器进行闪存到 eMMC 的第三步**，使用“修复/卸载”按钮进入管理 NVIDIA SDKs 页面。必要时，展开具有“损坏”状态的 SDK，然后点击相应部分（主机或目标）的“修复”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. 在**SDK 管理器会闪存到 eMMC — 第 3 步**，选择所需的 SDK，并重新运行安装程序。

5. 最后，尝试卸载并重新安装相关的SDK。
   
### 使用命令行故障排除安装问题。

命令行安装方法相对简单，但在使用强制恢复模式时常会出现错误。

如果在**使用命令行闪存到 eMMC -- 第 2步**中遇到下面显示的错误，可能是由于未成功将载板进入强制恢复模式。请特别注意，不要在开机状态下将载板进入强制恢复模式，这是无效的。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

如果您无法进入“使用命令行将**闪存到eMMC** - 第3步”系统，并卡在启动显示命令行上，那么您可能没有退出强制恢复模式。同样，在载板仍供电时拔掉跳线以退出强制恢复模式是无效的，所有这些操作都需要在断电状态下完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

!!!Note
    

    如果需要更多的存储空间，我们可以使用SD卡来扩展容量，或者将系统烧录到SD卡上，您可以参考我们推荐的解决方案[在SD卡上刷系统](https://wiki.seeedstudio.com/J101_Enable_SD_Card/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您与我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
