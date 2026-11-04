---
description: 使用软件栈示意图，厘清 Jetson 软件生态中 JetPack、Jetson Linux / L4T、Ubuntu、Linux Kernel 和 UEFI 之间的分层关系。
title: JetPack、L4T、Ubuntu、Kernel 和 UEFI 之间是什么关系？
keywords:
  - jetson
  - jetpack
  - l4t
  - ubuntu
  - kernel
  - uefi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_jetpack_l4t_ubuntu_kernel_uefi
last_update:
  date: 11/02/2026
  author: youjiang
---

当你第一次开始使用 Jetson 时，几乎每个人都会遇到一个问题：**Jetson 到底有多少种“系统版本”？**

你可能会在不同地方看到完全不同的版本号：

```text
JetPack 6.2.3
L4T / Jetson Linux R36.5.2
Ubuntu 22.04
Linux Kernel 5.15
UEFI 36.5.2
```

它们看起来像是五个独立的系统。而实际上，它们描述的是**同一台 Jetson 设备的软件栈中，不同层次的内容**。

理解这些概念，最重要的不是死记硬背定义，而是建立这样一种意识：

**Jetson 软件并不是简单的“Ubuntu + NVIDIA GPU 驱动”。它是一个完整的软件平台，从启动固件、Linux 内核，到 Ubuntu 用户空间，再到 CUDA、TensorRT 等加速软件包，一应俱全。**

我们先从一张示意图开始，看看这些组件之间是如何相互关联、相互包含的。

```text
JetPack
│
├── Jetson Linux / L4T
│   │
│   ├── UEFI
│   ├── Linux Kernel
│   ├── NVIDIA Drivers
│   └── Ubuntu RootFS
│
├── CUDA
├── TensorRT
├── cuDNN
├── VPI
└── ...
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/jetpack_architecture.png"/></div>

这张图并不完整，但足以展示本文中涉及的各个术语之间的关系。更完整的架构图会在文章末尾给出。

---

## JetPack

你可以把 **JetPack** 理解为 NVIDIA 为 Jetson 边缘计算设备准备的完整软件开发环境。它不仅包含与操作系统相关的组件，还包括安全相关的软件包以及 AI 加速软件包。

所以当有人问：“你现在用的是什么 JetPack？”

他们真正想问的是：

> **你当前使用的是哪一个 NVIDIA Jetson 软件平台？**

从这个意义上说，JetPack 可以理解为最顶层的“软件合集”。

如果你的 Jetson 设备上已经有可用系统，可以在 Jetson 终端中运行下面的命令来查看 JetPack 版本：

```bash
seeed@ubuntu:~$ dpkg -l | grep nvidia-jetpack
ii  nvidia-jetpack                                    6.2.1+b38                                   arm64        NVIDIA Jetpack Meta Package
ii  nvidia-jetpack-dev                                6.2.1+b38                                   arm64        NVIDIA Jetpack dev Meta Package
ii  nvidia-jetpack-runtime                            6.2.1+b38                                   arm64        NVIDIA Jetpack runtime Meta Package
```

输出结果表明当前设备运行的是 JetPack 6.2.1。

---

## Jetson Linux / L4T

如果说 JetPack 是 Jetson 的“完整软件”，那么 **Jetson Linux / L4T 就是 Jetson 实际赖以运行的底层系统**。我们先澄清一下 Jetson Linux 和 L4T 之间的关系：

> L4T 是较早期 / 更技术向的名称，而 Jetson Linux 是 NVIDIA 现在更常用的名称。可以把它们理解为同一套软件。

为了行文简洁，本文后续统一用 L4T 来指代 Jetson Linux / L4T。

L4T 的全称是 **Linux for Tegra**。

Tegra 是 NVIDIA Jetson 所使用的 SoC 平台，因此 L4T 可以理解为：

> **由 NVIDIA 专门为 Jetson 硬件定制的 Linux BSP。**

这里我们又遇到了一个新术语：**BSP，Board Support Package（板级支持包）**。

它的作用不仅仅是提供一个 Linux 桌面；它真正负责的是把 Linux 系统和 Jetson 硬件连接起来。

你可以这样来理解它：

```text
                Jetson Linux / L4T
                        │
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
      UEFI          Linux Kernel     Ubuntu RootFS
        │               │               │
   Boot system      Manage HW      User space
                        │
                   NVIDIA Drivers
                        │
                  Jetson Hardware
```

换句话说，L4T 并不是某一个单独的软件组件，而是一整套完整的底层系统环境。

它通常包括：

- UEFI / Bootloader：负责在设备上电后，**最早期的启动和系统拉起**。
- Linux Kernel：Linux 的内核，负责 **CPU 调度、内存管理、进程管理以及各种硬件驱动的框架**。
- Device Tree：描述 **板子上有哪些硬件，以及这些硬件是如何连接的**。
- NVIDIA Drivers：NVIDIA 为 Jetson 硬件提供的驱动，用于支持 GPU、ISP、NVCSI 等功能。
- Ubuntu RootFS：Jetson 的用户空间环境——也就是我们每天看到和使用的 Ubuntu 桌面。
- ...

需要注意的是，Jetson 不是一台普通的 ARM Linux 电脑。它有大量 NVIDIA 特有的硬件：GPU、NVCSI、VI 等等。要让这些硬件正常工作，Device Tree、内核驱动、固件和 NVIDIA 驱动必须协同配合。这些底层支持在标准 Ubuntu 中是不存在的——而是由 L4T 提供的。

因此：

> **真正让 Ubuntu 能够在 Jetson 硬件上运行的，是 L4T。**

:::caution
这里我们引入了很多术语。此时你不需要对每个组件都理解得非常深入——只要先建立一个大致的心智模型即可。等到以后在实际工作中遇到它们时，再进一步深入理解。
:::

可以使用下面的命令来查看 Jetson 设备的 L4T 版本：

```bash
seeed@ubuntu:~$ cat /etc/nv_tegra_release
# R36 (release), REVISION: 4.3, GCID: 38968081, BOARD: generic, EABI: aarch64, DATE: Wed Jan  8 01:49:37 UTC 2025
# KERNEL_VARIANT: oot
TARGET_USERSPACE_LIB_DIR=nvidia
TARGET_USERSPACE_LIB_DIR_PATH=usr/lib/aarch64-linux-gnu/nvidia
```

输出结果表明当前设备运行的是 L4T 36.4.3。

:::info
需要注意的是，JetPack 和 L4T 之间是严格一一对应的关系。你可以在这个链接中查到 NVIDIA 发布过的所有 JetPack 版本：https://developer.nvidia.com/embedded/jetson-linux-archive
:::

---

## Ubuntu：你在 Jetson 上最常接触的用户空间

在 Jetson 上，Ubuntu 是你最常看到、每天都在与之交互的那一层。

当你启动进入桌面、打开终端并运行：

```text
apt install
python3
docker
systemctl
cd /home
```

所有这些操作都发生在 **Ubuntu 用户空间** 中。这也是为什么很多人会认为：“Jetson 跑的是 Ubuntu。”而现在你已经可以分辨，这句话并没有错，但并不完整。更准确的说法是：**L4T 使用 Ubuntu 作为 RootFS 和用户空间基础，但 Ubuntu 并不是整个 Jetson 系统。**

换句话说，**Ubuntu 提供的是用户交互层——“它让用户和应用可以使用这台机器”。**

真正直接管理 Jetson 硬件的，主要是：

```text
Linux Kernel
NVIDIA Drivers
Device Tree
Firmware
```

我们会在后续文章中进一步展开细节。现在你只需要记住两点关键内容：

1. 当我们说“**系统装在 NVMe 上**”时，很多情况下真正的含义是“**Ubuntu RootFS 存在 NVMe 上**”。
2. Ubuntu 只是 Jetson Linux 的用户空间部分，而不是整个系统。这也是为什么两台 Jetson 设备都运行 Ubuntu 22.04，却可能表现完全不同。例如，L4T R36.4.x 和 L4T R36.5.x 都使用 Ubuntu 22.04 作为文件系统，但它们的 Kernel 和 NVIDIA Driver 版本是不同的。

在 Jetson 上，你可以直接运行 `cat /etc/os-release` 来查看 Ubuntu 版本。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/os_release.png"/></div>

---

## Linux Kernel

如果说 Ubuntu 是我们每天看到和使用的“用户空间”，那么 **Linux Kernel 就是整个系统真正负责管理硬件和系统资源的核心。**

它位于 Ubuntu 和硬件之间：`Application` --> `Ubuntu` --> `Linux Kernel` --> `Drivers` --> `Jetson`

简单来说：

> **Ubuntu 负责和用户交互；Kernel 负责和硬件交互。**

Linux Kernel 要处理的事情非常多，其中最重要的包括 CPU 调度、内存管理、进程管理等等。

我们来看一个 Linux Kernel 工作方式的例子。如果你插入一个 USB 摄像头，在你看到 `/dev/video0` 这个设备之前，数据会经过：

```text
USB Camera
    ↓
USB Controller
    ↓
Kernel USB Driver
    ↓
/dev/video0
    ↓
Application
```

你可以在 Jetson 终端中使用 `uname -r` 来查看 Linux Kernel 版本：

```bash
seeed@ubuntu:~$ uname -r
5.15.148-tegra
```

---

## UEFI

如果说 Ubuntu 是用户空间、Linux Kernel 是系统核心，那么 **UEFI 就是在 Linux 启动之前，负责“把系统拉起来”的关键一层**。UEFI 的全称是 **Unified Extensible Firmware Interface**——你可以把它理解为**现代计算机用来取代传统 BIOS 的启动固件接口**。

在 Jetson 上，它负责把设备从“硬件刚刚上电”带到“Linux Kernel 可以开始运行”的状态。它的工作包括：初始化启动环境、识别可启动设备、读取启动配置、加载 Kernel、加载 initrd、加载 Device Tree，并把控制权交给 Linux。

我们先建立一个简单的心智模型：

`Power On` --> `UEFI` --> `Linux Kernel` --> `Ubuntu RootFS`

也就是说：

> **当 UEFI 在工作时，Linux Kernel 实际上还没有开始运行，Ubuntu 更是尚未启动。**

这里有几点需要注意：

1. 在很多 Jetson Orin 设备上，启动固件存储在 QSPI NOR Flash 中。即使你的 Ubuntu RootFS 安装在 NVMe 上，设备仍然可能需要先通过 QSPI 中的 UEFI 来启动。

2. 如果一台 Jetson 无法启动，首先要检查的是启动过程中的 UEFI 日志——问题的根源很有可能就隐藏在那里。

3. UEFI 决定 Linux 应该优先从哪个启动设备加载。当上电后出现 NVIDIA 标志时，你可以按下 `ESC` 或 `F1` 进入 UEFI 设置页面进行配置。

在 Jetson 终端中运行 `cat /sys/class/dmi/id/bios_version` 来检查 UEFI 版本：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/uefi_version.png"/></div>

---

今天我们把 Jetson 软件栈中几个常见的启动相关概念放在一起，目的是快速构建一张“地图”。本文最重要的不是记住每个术语的定义，而是建立一个基本认识：这些概念并不是彼此独立的系统——它们是 Jetson 软件栈中的不同层级。有了这个基础，无论是在调试 Jetson 启动/系统问题，还是与其他开发者讨论技术细节时，你都会更加高效、更加得心应手。

当然，我们今天所讲的只是 Jetson 启动相关话题中的一小部分。你可以在 NVIDIA 的网站上找到更多内容。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/nvidia_ecosystem.png"/></div>

图片来源：https://developer.nvidia.com/embedded/jetpack

在接下来的文章中，我们会沿着这条启动链继续往下——先讲解从上电、固件初始化、Kernel 加载直到进入 Ubuntu 的完整过程，然后再扩展到硬件接口、相机、机器人控制等更多内容。如果你有想要了解的话题，欢迎在评论区留言或给我发消息。

下一次，我们将从最根本的一个问题开始：

> **Jetson 从上电到进入 Ubuntu，究竟经历了什么？**

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
