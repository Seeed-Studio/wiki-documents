---
description: 沿着“Power On → BootROM → MB1 → MB2 → UEFI → L4TLauncher → Kernel → initrd → RootFS → systemd”这条链路，逐阶段走读一份真实的 Jetson Orin UART 启动日志，并学习如何利用“最后成功到达的启动阶段”来排查启动失败。
title: Jetson：从上电到 Ubuntu
keywords:
  - jetson
  - boot
  - bootlog
  - uart
  - uefi
  - mb1
  - mb2
  - l4t
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_boot_log_analysis
last_update:
  date: 11/02/2026
  author: youjiang
---

在上一篇文章中，我们介绍了 **JetPack、Jetson Linux / L4T、Ubuntu、Kernel 和 UEFI** 分别是什么。

但这些组件实际运行的顺序是什么？在我们按下 Jetson 的电源键之后，为什么设备不会直接进入 Ubuntu，而是必须先经过 BootROM、MB1、MB2、UEFI、Kernel 和 initrd？

更重要的是：**当 Jetson 启动失败时，如何利用 UART 日志精确判断它卡在了哪一个阶段？**

在这篇文章中，我们不再只看架构图，而是直接分析一份真实的 **Jetson Orin UART 启动日志（Boot Log）**。

如果你还不确定如何抓取启动日志，请参考以下两篇 wiki 文章：

> https://wiki.seeedstudio.com/cn/jetson_debug_guide/
> https://wiki.seeedstudio.com/cn/get_the_system_log_of_recomputer_j30_and_j40/

## 先看全局：Jetson 从上电到 Ubuntu 要经过哪些阶段？

在逐行分析启动日志之前，我们先构建一张整体的启动地图。

在 [**Jetson Linux Developer Guide**](https://docs.nvidia.com/jetson/archives/r36.5.2/DeveloperGuide/AR/BootArchitecture/JetsonOrinSeriesBootFlow.html) – Boot Architecture 中，NVIDIA 将 Jetson Orin 系列的 Boot Flow 定义为：Bootloader 逐步初始化 SoC、存储、内存、CPU、安全环境以及各种固件，最终将系统启动到 OS。根据官方文档，Orin 系列的主要 Boot Firmware 阶段是 **BootROM、PSCROM、MB1、MB2 和 UEFI**。

如果我们继续沿着官方 Boot Firmware 流程往后延伸，一直到真正进入 Ubuntu，就可以得到这样一条更完整、也更容易理解的启动链路：

> `Power On` --> `BootROM / PSCROM` --> `MB1` --> `MB2` --> `BL31 / OP-TEE` --> `UEFI` --> `L4TLauncher` --> `Linux Kernel` + `DTB + initrd` --> `Find RootFS` --> `NVMe / eMMC / SD` --> `Ubuntu RootFS` --> `systemd` --> `Login / Desktop / Application`

接下来，我们会拿一份**真实的 Jetson Orin UART 启动日志**，沿着这条启动链一步步往下走。

我们最终想建立的，不只是“Jetson 如何启动”的概念，而是一种更实用的诊断能力：

> **给你一份 Jetson 启动日志，能快速判断设备已经走到了启动链的哪一层，如果启动失败，应该优先排查哪一部分。**

NVIDIA 官方的 Boot Flow 文档可以作为这一部分的技术参考：[NVIDIA Jetson Orin Series Boot Flow](https://docs.nvidia.com/jetson/archives/r36.5.2/DeveloperGuide/AR/BootArchitecture/JetsonOrinSeriesBootFlow.html?utm_source=chatgpt.com)

---

## 上电后的第一行日志：为什么是从 MB1 开始？

这份 UART 日志的第一行是：

```text
[0000.066] I> MB1 (version: 1.4.0.4-t234-...)
[0000.071] I> t234-A01-1-Silicon
[0000.075] I> Boot-mode : Coldboot
[0000.082] I> last_boot_error: 0x0
```

有趣的地方来了。我们刚刚说过：

```text
Power On
 ↓
BootROM
 ↓
MB1
```

为什么我们在日志里看不到 BootROM，而是直接从 MB1 开始？

因为 **BootROM 是熔在 Tegra SoC 里的启动代码**。设备上电后，BootROM 已经运行完毕并成功加载了 MB1，这就是为什么 UART 从这里开始显示 MB1 的日志行。

所以：

> **当你已经看到 `MB1` 时，说明 SoC 最早的 BootROM 阶段至少已经成功推进到了 MB1。**

这是启动日志排查的第一个思路：**不要只盯着 Error，看“最后成功到达的启动阶段”。**

---

## MB1：完成基础硬件初始化

进入 MB1 之后，可以看到系统首先在初始化启动存储：

```text
[0000.296] I> Task: Boot device init
[0000.299] I> Boot_device: QSPI_FLASH instance: 0
[0000.308] I> QSPI Flash: Macronix 64MB
[0000.312] I> QSPI-0l initialized successfully
```

这说明 **MB1 可以正常访问 QSPI Flash**。即使 Ubuntu RootFS 最终在 NVMe 上，Jetson 的早期启动固件仍然需要先经过 QSPI 等启动组件。

随后，MB1 继续进行 Pinmux、电源和内存等基础初始化：

```text
[0000.784] I> Task: Pinmux init
[0000.874] I> Task: Pad voltage init
[0000.884] I> Task: Common rail init
[0000.944] I> Task: SDRAM init
[0000.980] I> SDRAM initialized!
[0000.983] I> SDRAM Size in Total 0x100000000
```

其中最值得关注的一行是：

```text
[0000.980] I> SDRAM initialized!
```

这意味着 **DRAM 已经初始化成功，MB1 的关键硬件初始化阶段基本完成**。

如果启动日志长时间停留在 MB1，且始终没有出现 `SDRAM initialized!`，那么排查重点应该放在 **MB1-BCT、DDR、PMIC、电源以及板级配置** 上——而不是 Ubuntu 或 Linux Kernel。

因为此时，**Linux 还没有开始启动。**

---

## MB1 之后，进入 MB2

在完成基础硬件初始化后，MB1 会加载下一阶段的 **MB2**：

```text
[0001.874] I> Task: Load MB2/Applet/FSKP
[0001.878] I> Loading MB2
[0001.888] I> Binary name: MB2
[0001.912] I> MB2 header integrity check is success
[0001.945] I> MB2 binary integrity check is success
[0001.950] I> Binary MB2 loaded successfully at 0x80000000
```

随后日志进入 MB2：

```text
I> MB2 (version: 0.0.0.0-t234-...)
I> Boot-mode : Coldboot
```

这说明启动流程已经从 MB1 进入 MB2。

MB2 会继续进行平台初始化，并加载、认证 SoC 内部所需的一些固件，例如 SPE、RCE、DCE、XUSB、PVA 等，为后续的 UEFI 阶段和 Linux 启动做准备。

这里的核心结论是：**在 Linux Kernel 真正开始之前，Jetson 已经完成了大量底层硬件和固件的初始化。**

---

## MB2 之后，进入 UEFI

当 MB2 完成工作后，日志中会出现一条非常明显的分界线：

```text
I> MB2 finished
```

然后进入 ARM Trusted Firmware 和 OP-TEE：

```text
NOTICE: BL31: v2.8
I/TC: OP-TEE version: 4.2
I/TC: Primary CPU switching to normal world boot
```

接着，就可以看到 UEFI 启动：

```text
Jetson UEFI firmware
(version 36.4.3-gcid-38968081 ...)
```

这里，**BL31** 负责 ARM Trusted Firmware 阶段，**OP-TEE** 提供可信执行环境。对于一般的 Jetson 开发者来说，没有必要深入研究它们的内部实现，但你需要知道：**看到 UEFI 日志，说明前面的 MB1、MB2 和安全固件阶段基本已经完成，系统即将进入 OS 启动阶段。**

这也是后续排查中一个非常重要的检查点。

---

## 进入 UEFI：启动问题开始转向“系统启动”层面

继续往下，日志显示：

```text
Jetson System firmware version 36.4.3-gcid-38968081

ESC   to enter Setup.
F11   to enter Boot Manager Menu.
Enter to continue boot.
```

这说明系统已经成功进入 **UEFI 阶段**。换句话说，前面的启动流程——BootROM、MB1、MB2 等——已经走完。

从这里开始，排查的重点发生变化。

如果设备在 UEFI 之后无法继续进入 Linux，你首先应该关注：

```text
Boot Order
Boot Device
EFI Boot Entry
L4TLauncher
Kernel / DTB / initrd
```

你可以简单地把这个阶段理解为：

```text
Early hardware init
      ↓
     UEFI
      ↓
Start selecting and loading Linux
```

> **看到 UEFI，说明系统已经完成了大部分底层启动流程。接下来要关注的是“Linux 从哪里启动，以及 Linux 启动文件是否正确”。**

---

## L4TLauncher：从 UEFI 向 Linux Kernel 移交控制权

进入 UEFI 之后，系统开始真正加载 Linux。日志显示：

```text
L4TLauncher: Attempting Direct Boot
EFI stub: Booting Linux Kernel...
EFI stub: Using DTB from configuration table
EFI stub: Loaded initrd from LINUX_EFI_INITRD_MEDIA_GUID device path
EFI stub: Exiting boot services...
```

**L4TLauncher** 是 Jetson UEFI 默认使用的 OS 加载器。它会准备启动 Linux 所需的一切，包括：

```text
Kernel   The Linux kernel
DTB      Hardware description
initrd   Temporary filesystem used in early boot
```

其中最关键的两行是：

```text
EFI stub: Booting Linux Kernel...
EFI stub: Exiting boot services...
```

它们表示 UEFI 已经完成了 Linux 启动环境的准备，正在开始把系统控制权移交给 Kernel。

于是启动流程进入了一个新的阶段。

> **当你已经看到 `EFI stub: Booting Linux Kernel...` 时，说明 Bootloader 阶段基本成功；如果之后启动失败，排查重点应逐步转向 Kernel、DTB、initrd 和 RootFS。**

---

## Linux Kernel 正式启动

紧接着，日志进入 Linux Kernel：

```text
[    0.000000] Booting Linux on physical CPU 0x0000000000
[    0.000000] Linux version 5.15.148-tegra
[    0.000000] Machine model: NVIDIA Jetson Orin NX Engineering Reference Developer Kit Super
```

这里可以看到一个明显的变化：**时间戳重新从 `0.000000` 开始计数**。

这是因为 MB1、MB2 和 UEFI 属于 Bootloader / Firmware 阶段，而现在我们已经进入了 **Linux Kernel 自己的运行阶段**。

所以以后你在分析 UART 启动日志时，只要看到：

```text
Linux version ...
```

基本就可以判断：

> **Bootloader 阶段已经结束，系统正式进入 Linux Kernel。**

从这一刻起，日志的关注点会逐渐转向 **设备驱动、DTB、存储设备、initrd 和 RootFS**。

---

## Kernel 通过启动参数找到 RootFS

Kernel 启动之后，需要知道真正的 Ubuntu RootFS 在哪里。这个信息可以在 Kernel 命令行中看到：

```text
[    0.000000] Kernel command line:
root=PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
rw rootwait rootfstype=ext4 ...
```

它告诉 Kernel：

> **要被挂载为 `/` 的 RootFS 是与此 PARTUUID 对应的分区。**

还有另一个参数：`rootwait`。

它告诉 Kernel，如果根设备尚未就绪，就等待对应的存储设备出现。对于 NVMe 和 USB SSD 这类设备，这一点非常重要，因为它们需要先完成控制器和驱动的初始化。

因此，这个阶段可以简单理解为：

> **如果你已经进入 Kernel，但始终找不到 RootFS，就应该把排查重点转移到存储设备、驱动、PARTUUID 和文件系统上——而不是更早的 UEFI。**

---

## initramfs：真正 RootFS 之前的临时环境

Kernel 启动后，首先会解包 initramfs：

```text
[    0.165968] Unpacking initramfs...
```

然后进入早期用户空间并运行 `/init`：

```text
[    2.540191] Freeing unused kernel memory: 7744K
[    2.540270] Run /init as init process
[    2.567003] Root device found: PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
```

这里的 `/init` 不是 Ubuntu 的 `systemd`，而是在**临时 initramfs 环境**中运行的初始化程序。它的一项重要任务就是准备存储设备并找到真正的 RootFS。

你可以简单地把它理解为：

```text
Linux Kernel
    ↓
initramfs
    ↓
Run /init
    ↓
Find Root Device
    ↓
Prepare to switch to Ubuntu RootFS
```

因此，如果 Jetson 在启动过程中停在 initramfs / 恢复 shell，例如：

```text
bash-5.2#
```

通常意味着**Kernel 和早期用户空间已经成功启动**。此时你应该关注后续阶段：RootFS、存储设备、PARTUUID、文件系统等。需要注意的是，进入这个 shell **并不一定代表故障**——还需要结合具体日志一起分析。

---

## Kernel 检测 NVMe 并找到包含 RootFS 的磁盘

在大多数 Seeed Studio Jetson 产品上，Ubuntu RootFS 位于 NVMe 上，因此在 Kernel 启动后，首先需要检测对应的 PCIe 和 NVMe 设备。

日志显示 PCIe Link 已经建立：

```text
[    6.639293] tegra194-pcie 14160000.pcie: Link up
[    6.640379] tegra194-pcie 14160000.pcie: Link up
```

随后系统检测到 NVMe 控制器：

```text
[    6.649660] nvme 0004:01:00.0: Adding to iommu group 5
[    6.649851] nvme nvme0: pci function 0004:01:00.0
```

最后，NVMe 磁盘及其分区被枚举出来：

```text
[    6.662942] nvme nvme0: 6/0/0 default/read/poll queues
[    6.665906] nvme0n1: p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15
```

这段日志表明整条链路已经被完整遍历：

```text
PCIe Link Up
    ↓
NVMe Controller found
    ↓
Identified as nvme0
    ↓
nvme0n1 created
    ↓
Partitions enumerated
```

**看到 `nvme0n1` 就意味着 Kernel 已成功检测到这块 NVMe。只有在此之后，它才会继续挂载真正的 RootFS。**

---

## Ubuntu RootFS 被挂载

一旦检测到 NVMe，系统就会继续挂载真正的 RootFS。日志显示：

```text
[    7.426780] EXT4-fs (nvme0n1p1): mounted filesystem with ordered data mode.
[    7.433141] Rootfs mounted over PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
[    7.439898] Switching from initrd to actual rootfs
```

这意味着系统已经离开临时的 initramfs 环境，开始使用真正的 Ubuntu RootFS。

> **看到这里，你基本可以确认 Kernel、存储设备以及 RootFS 挂载都已经成功，启动流程即将进入 Ubuntu 用户空间。**

这也对应了上一篇文章中的概念：**Ubuntu 并不是整个 Jetson 系统本身，而是在启动链后半段实际被挂载上的 RootFS 和用户空间环境。**

---

## systemd 启动：进入 Ubuntu 用户空间

在 RootFS 切换之后，你会看到 `systemd` 开始启动：

```text
[    7.550899] systemd[1]: systemd 249.11-0ubuntu3.12 running in system mode
[    7.551400] systemd[1]: Detected architecture arm64.
[    7.559528] systemd[1]: Hostname set to <ubuntu>.
```

这表明系统已经从启动阶段进入真正的 **Ubuntu 用户空间**。

随后，`systemd` 会继续启动设备管理、网络、日志、NVIDIA 服务以及图形界面等系统服务。

日志中还会显示：

```text
[    7.774172] systemd[1]: Queued start job for default target Graphical Interface.
```

也就是说，系统接下来的启动目标是：

```text
graphical.target
```

也就是图形桌面环境。此时，**Bootloader、Linux Kernel、NVMe 和 RootFS 都已经成功，系统已经进入 Ubuntu 用户空间。**到这里，从按下电源键到进入 Ubuntu 用户空间的主要启动链路基本完成。

顺带一提，如果你设置了任何开机自启动的软件，它们也会在这个阶段被依次启动。

---

## 启动问题排查：先确定“最后到达的是哪一层”

在 Seeed Jetson 技术社区中，我经常看到有人问：“为什么我的 Jetson 启不起来？”

虽然重新刷机可以解决 90% 的问题，但我仍然建议你先获取设备的 **UART 启动日志**，并根据**最后一次成功出现的启动阶段**来分析启动失败的具体原因。只有弄清楚具体原因，才能在未来避免类似问题。

分析方法本质上就是**不断缩小故障所在的启动阶段**。

还需要注意一点：启动日志中的 Error 或 Warning 并不一定意味着启动流程失败。某个 Error 也不一定就是设备无法启动的根本原因。比如，在进入 Ubuntu 用户空间之后，你仍然可能看到：

```text
imx219 ... error during i2c read probe
imx219 ... board setup failed
imx219 ... probe ... failed
```

这里真正失败的是 **IMX219 相机探测（Camera Probe）**，而不是整个 Jetson 启动流程。

我想再强调一次你现在应该记住的要点：**在阅读启动日志时，最重要的不是找到第一个 Error，而是沿着启动链找到最后一个成功的启动阶段。**

---

## 总结

虽然 Jetson 启动日志非常长，但在排查问题时，你并不需要理解每一行。我建议结合 AI 辅助分析，重点关注可疑部分。一旦确定系统停在哪一层，问题范围通常会迅速缩小。这是分析 Jetson 启动问题最重要的方法。一旦掌握了这种方法，上千行的启动日志就不再是一堆杂乱的信息，而是一张帮助你快速定位问题的 **Jetson 启动地图**。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
