---
description: Walk through a real Jetson Orin UART boot log stage by stage along the chain Power On → BootROM → MB1 → MB2 → UEFI → L4TLauncher → Kernel → initrd → RootFS → systemd, and learn to troubleshoot boot failures using the "last successfully reached boot stage".
title: Jetson from Power-On to Ubuntu
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

In the previous article, we introduced **JetPack, Jetson Linux / L4T, Ubuntu, Kernel, and UEFI** and what each of them is.

But what order do these components actually run in? After we press the power button on a Jetson, why doesn't the device go straight into Ubuntu, and instead has to go through BootROM, MB1, MB2, UEFI, Kernel, and initrd?

More importantly: **when a Jetson fails to boot, how can you use the UART log to determine exactly which stage it is stuck at?**

In this article, instead of only looking at architecture diagrams, we will directly analyze a real **Jetson Orin UART Boot Log**.

If you are not sure how to capture the boot log, please refer to these two wiki articles:

> https://wiki.seeedstudio.com/cn/jetson_debug_guide/
> https://wiki.seeedstudio.com/cn/get_the_system_log_of_recomputer_j30_and_j40/

## The Big Picture First: What Stages Does a Jetson Go Through from Power-On to Ubuntu?

Before analyzing the boot log line by line, let's first build an overall boot map.

In the [**Jetson Linux Developer Guide**](https://docs.nvidia.com/jetson/archives/r36.5.2/DeveloperGuide/AR/BootArchitecture/JetsonOrinSeriesBootFlow.html) – Boot Architecture, NVIDIA defines the Boot Flow of the Jetson Orin series as: the bootloader progressively initializes the SoC, storage, memory, CPU, secure environment, and various firmware, finally booting the system into the OS. According to the official documentation, the main Boot Firmware stages of the Orin series are **BootROM, PSCROM, MB1, MB2, and UEFI**.

If we continue extending the official Boot Firmware flow toward the later stages, all the way until we actually enter Ubuntu, we get this more complete and easier-to-understand boot chain:

> `Power On` --> `BootROM / PSCROM` --> `MB1` --> `MB2` --> `BL31 / OP-TEE` --> `UEFI` --> `L4TLauncher` --> `Linux Kernel` + `DTB + initrd` --> `Find RootFS` --> `NVMe / eMMC / SD` --> `Ubuntu RootFS` --> `systemd` --> `Login / Desktop / Application`

Next, we will take a **real Jetson Orin UART boot log** and walk down this boot chain step by step.

What we ultimately want to build is not just the concept of "how a Jetson boots", but a more practical diagnostic skill:

> **Given a Jetson boot log, quickly determine which layer of the boot chain the device has reached, and if boot fails, which part should be investigated first.**

NVIDIA's official Boot Flow documentation can serve as the technical reference for this part: [NVIDIA Jetson Orin Series Boot Flow](https://docs.nvidia.com/jetson/archives/r36.5.2/DeveloperGuide/AR/BootArchitecture/JetsonOrinSeriesBootFlow.html?utm_source=chatgpt.com)

---

## The First Log Lines After Power-On: Why Does It Start with MB1?

The first line of this UART log is:

```text
[0000.066] I> MB1 (version: 1.4.0.4-t234-...)
[0000.071] I> t234-A01-1-Silicon
[0000.075] I> Boot-mode : Coldboot
[0000.082] I> last_boot_error: 0x0
```

Here's the interesting part. We just said:

```text
Power On
 ↓
BootROM
 ↓
MB1
```

Why don't we see BootROM in the log, with MB1 appearing directly as the first line?

Because **BootROM is boot code fused into the Tegra SoC itself**. After the device is powered on, BootROM has already run and successfully loaded MB1, which is why the UART starts showing the MB1 log lines here.

So:

> **When you already see `MB1`, it means the earliest BootROM stage of the SoC has at least successfully progressed to MB1.**

This is the first mindset for boot log troubleshooting: **Don't only look for Errors; look for "the last boot stage successfully reached".**

---

## MB1: Completing Basic Hardware Initialization

After entering MB1, you can see the system first initializing the boot storage:

```text
[0000.296] I> Task: Boot device init
[0000.299] I> Boot_device: QSPI_FLASH instance: 0
[0000.308] I> QSPI Flash: Macronix 64MB
[0000.312] I> QSPI-0l initialized successfully
```

This shows that **MB1 can access the QSPI Flash normally**. Even if the Ubuntu RootFS ends up on NVMe, the Jetson's early boot firmware still needs to go through boot components such as QSPI first.

MB1 then continues with the basic initialization of Pinmux, power, and memory:

```text
[0000.784] I> Task: Pinmux init
[0000.874] I> Task: Pad voltage init
[0000.884] I> Task: Common rail init
[0000.944] I> Task: SDRAM init
[0000.980] I> SDRAM initialized!
[0000.983] I> SDRAM Size in Total 0x100000000
```

The line worth the most attention is:

```text
[0000.980] I> SDRAM initialized!
```

This means **DRAM has been initialized successfully, and the key hardware initialization phase of MB1 is basically complete**.

If the boot log stays at MB1 for a long time and `SDRAM initialized!` never appears, the investigation should focus on **MB1-BCT, DDR, PMIC, power, and board-level configuration** — not Ubuntu or the Linux Kernel.

Because at this point, **Linux has not started booting yet.**

---

## After MB1, Entering MB2

After basic hardware initialization, MB1 loads the next-stage **MB2**:

```text
[0001.874] I> Task: Load MB2/Applet/FSKP
[0001.878] I> Loading MB2
[0001.888] I> Binary name: MB2
[0001.912] I> MB2 header integrity check is success
[0001.945] I> MB2 binary integrity check is success
[0001.950] I> Binary MB2 loaded successfully at 0x80000000
```

The log then enters MB2:

```text
I> MB2 (version: 0.0.0.0-t234-...)
I> Boot-mode : Coldboot
```

This means the boot flow has moved from MB1 to MB2.

MB2 then continues platform initialization and loads and authenticates some firmware required inside the SoC, such as SPE, RCE, DCE, XUSB, PVA, etc., preparing for the later UEFI stage and the Linux boot.

The core takeaway here: **before the Linux Kernel actually starts, Jetson has already completed a large amount of low-level hardware and firmware initialization.**

---

## After MB2, Entering UEFI

When MB2 finishes its work, a very clear boundary line appears in the log:

```text
I> MB2 finished
```

Then we enter ARM Trusted Firmware and OP-TEE:

```text
NOTICE: BL31: v2.8
I/TC: OP-TEE version: 4.2
I/TC: Primary CPU switching to normal world boot
```

Next, the UEFI boot can be seen:

```text
Jetson UEFI firmware
(version 36.4.3-gcid-38968081 ...)
```

Here, **BL31** is responsible for the ARM Trusted Firmware stage, and **OP-TEE** provides a trusted execution environment. For ordinary Jetson developers, there is no need to study their internals, but you should know: **seeing the UEFI log means the earlier MB1, MB2, and secure firmware stages are basically complete, and the system is about to enter the OS boot stage.**

This is also a very important checkpoint for later troubleshooting.

---

## Entering UEFI: Boot Issues Now Shift to "System Booting"

Continuing further down, the log shows:

```text
Jetson System firmware version 36.4.3-gcid-38968081

ESC   to enter Setup.
F11   to enter Boot Manager Menu.
Enter to continue boot.
```

This means the system has successfully entered the **UEFI stage**. In other words, the earlier boot flow — BootROM, MB1, MB2, etc. — has been completed.

From here on, the focus of troubleshooting changes.

If the device cannot continue into Linux after UEFI, you should first focus on:

```text
Boot Order
Boot Device
EFI Boot Entry
L4TLauncher
Kernel / DTB / initrd
```

You can simply understand this stage as:

```text
Early hardware init
      ↓
     UEFI
      ↓
Start selecting and loading Linux
```

> **Seeing UEFI means the system has completed most of the low-level boot flow. Next, focus on "where Linux is booted from, and whether the Linux boot files are correct".**

---

## L4TLauncher: Handing Off from UEFI to the Linux Kernel

After entering UEFI, the system starts actually loading Linux. The log shows:

```text
L4TLauncher: Attempting Direct Boot
EFI stub: Booting Linux Kernel...
EFI stub: Using DTB from configuration table
EFI stub: Loaded initrd from LINUX_EFI_INITRD_MEDIA_GUID device path
EFI stub: Exiting boot services...
```

**L4TLauncher** is the OS loader used by default in Jetson UEFI. It prepares everything needed to boot Linux, including:

```text
Kernel   The Linux kernel
DTB      Hardware description
initrd   Temporary filesystem used in early boot
```

The two most critical lines are:

```text
EFI stub: Booting Linux Kernel...
EFI stub: Exiting boot services...
```

They mean UEFI has finished preparing the Linux boot environment and is starting to hand system control over to the Kernel.

So the boot flow enters a new stage.

> **If you already see `EFI stub: Booting Linux Kernel...`, the bootloader stage has basically succeeded; if boot fails afterwards, the investigation focus should gradually shift to the Kernel, DTB, initrd, and RootFS.**

---

## The Linux Kernel Officially Starts

Immediately after, the log enters the Linux Kernel:

```text
[    0.000000] Booting Linux on physical CPU 0x0000000000
[    0.000000] Linux version 5.15.148-tegra
[    0.000000] Machine model: NVIDIA Jetson Orin NX Engineering Reference Developer Kit Super
```

You can see an obvious change here: **the timestamps restart from `0.000000`**.

This is because MB1, MB2, and UEFI belong to the Bootloader / Firmware stage, while now we have entered **the Linux Kernel's own runtime stage**.

So whenever you analyze a UART boot log in the future, as long as you see:

```text
Linux version ...
```

you can basically conclude:

> **The bootloader stage is complete, and the system has officially entered the Linux Kernel.**

From this moment on, the focus of the log gradually shifts to **device drivers, DTB, storage devices, initrd, and RootFS**.

---

## The Kernel Finds the RootFS via Boot Parameters

After the Kernel starts, it needs to know where the real Ubuntu RootFS is. This information can be seen in the Kernel command line:

```text
[    0.000000] Kernel command line:
root=PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
rw rootwait rootfstype=ext4 ...
```

It tells the Kernel:

> **The RootFS to be mounted as `/` is the partition corresponding to this PARTUUID.**

There is also another parameter: `rootwait`.

It tells the Kernel to wait for the corresponding storage device to appear if the root device is not ready yet. This is very important for devices like NVMe and USB SSDs, which need the controller and driver to be initialized first.

Therefore, this stage can be simply understood as:

> **If you have entered the Kernel but the RootFS is never found, shift the investigation focus to storage devices, drivers, PARTUUID, and the filesystem — not the earlier UEFI.**

---

## initramfs: The Temporary Environment Before the Real RootFS

After the Kernel starts, it first unpacks the initramfs:

```text
[    0.165968] Unpacking initramfs...
```

It then enters the early user space and runs `/init`:

```text
[    2.540191] Freeing unused kernel memory: 7744K
[    2.540270] Run /init as init process
[    2.567003] Root device found: PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
```

The `/init` here is not the `systemd` from Ubuntu; it is the initialization program running in the **temporary initramfs environment**. One of its important tasks is to prepare the storage devices and find the real RootFS.

You can simply understand it as:

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

Therefore, if a Jetson stops at the initramfs / recovery shell during boot, for example:

```text
bash-5.2#
```

it usually means **the Kernel and the early user space have started successfully**. At this point you should focus on later stages: RootFS, storage devices, PARTUUID, filesystem, etc. Note that reaching the shell **does not necessarily mean a fault** — it needs to be analyzed together with the specific log.

---

## The Kernel Detects NVMe and Finds the Disk Containing the RootFS

On most Seeed Studio Jetson products, the Ubuntu RootFS is located on NVMe, so after the Kernel starts, it first needs to detect the corresponding PCIe and NVMe devices.

The log shows that the PCIe Link has been established:

```text
[    6.639293] tegra194-pcie 14160000.pcie: Link up
[    6.640379] tegra194-pcie 14160000.pcie: Link up
```

The system then detects the NVMe controller:

```text
[    6.649660] nvme 0004:01:00.0: Adding to iommu group 5
[    6.649851] nvme nvme0: pci function 0004:01:00.0
```

Finally, the NVMe disk and its partitions are enumerated:

```text
[    6.662942] nvme nvme0: 6/0/0 default/read/poll queues
[    6.665906] nvme0n1: p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15
```

This log shows the whole chain has been traversed:

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

**Seeing `nvme0n1` means the Kernel has successfully detected this NVMe. Only then does it proceed to mount the real RootFS.**

---

## The Ubuntu RootFS Is Mounted

Once the NVMe is detected, the system continues to mount the real RootFS. The log shows:

```text
[    7.426780] EXT4-fs (nvme0n1p1): mounted filesystem with ordered data mode.
[    7.433141] Rootfs mounted over PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
[    7.439898] Switching from initrd to actual rootfs
```

This means the system has left the temporary initramfs environment and started using the real Ubuntu RootFS.

> **Seeing this, you can basically confirm that the Kernel, storage devices, and RootFS mounting have all succeeded, and the boot flow is about to enter the Ubuntu User Space.**

This also corresponds to the concept from the previous article: **Ubuntu is not the entire Jetson system itself; it is the RootFS and user-space environment that is actually mounted in the latter half of the boot chain.**

---

## systemd Starts: Entering the Ubuntu User Space

After the RootFS switch, you will see `systemd` starting:

```text
[    7.550899] systemd[1]: systemd 249.11-0ubuntu3.12 running in system mode
[    7.551400] systemd[1]: Detected architecture arm64.
[    7.559528] systemd[1]: Hostname set to <ubuntu>.
```

This shows the system has moved from the boot stage into the real **Ubuntu User Space**.

`systemd` then continues to start system services such as device management, networking, logging, NVIDIA services, and the graphical interface.

The log also shows:

```text
[    7.774172] systemd[1]: Queued start job for default target Graphical Interface.
```

In other words, the system's next boot target is:

```text
graphical.target
```

that is, the graphical desktop environment. At this point, **the Bootloader, Linux Kernel, NVMe, and RootFS have all succeeded, and the system has entered the Ubuntu User Space.** Here, the main boot chain from pressing power to the Ubuntu user space is basically complete.

As a side note, if you have set up any software to auto-start at boot, it will also be started one by one at this point.

---

## Troubleshooting Boot Issues: First Determine "Which Layer Was Reached Last"

In the Seeed Jetson technical community, I often see people asking, "Why won't my Jetson boot?"

Although reflashing can solve 90% of problems, I still recommend that you first obtain the device's **UART boot log** and analyze the exact cause of the boot failure based on the **last boot stage that appeared successfully**. Only by understanding the specific cause can you avoid similar problems in the future.

The analysis method itself is essentially **continuously narrowing down which boot stage the fault is in**.

One more thing to note: an Error or Warning in the boot log does not necessarily mean the boot flow failed. An Error is not necessarily the cause of the device failing to boot. For example, after entering the Ubuntu User Space, you may still see:

```text
imx219 ... error during i2c read probe
imx219 ... board setup failed
imx219 ... probe ... failed
```

What actually failed here is the **IMX219 Camera Probe**, not the entire Jetson boot flow.

Let me emphasize again what you should take away right now: **when reading a boot log, the most important thing is not finding the first Error, but finding the last successful boot stage along the boot chain.**

---

## Conclusion

Although a Jetson boot log is very long, you don't need to understand every line when troubleshooting. I suggest combining it with AI-assisted analysis and focusing on the suspicious parts. Once you determine which layer the system stopped at, the problem scope usually narrows down quickly. This is the most important approach to analyzing Jetson boot issues. Once you master this method, a boot log with thousands of lines will no longer be a pile of messy information, but a **Jetson boot map** that helps you quickly locate problems.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
