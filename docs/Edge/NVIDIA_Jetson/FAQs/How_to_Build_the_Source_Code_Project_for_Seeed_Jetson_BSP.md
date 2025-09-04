---
description: How to Build the Source Code Project for Seeed's Jetson BSP
title: How to Build the Source Code Project for Seeed's Jetson BSP
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /how_to_build_the_source_code_project_for_seeed_jetson_bsp
last_update:
  date: 08/04/2025
  author: Dayu
---

**This wiki demonstrates how to obtain the BSP source code for Seeed's Jetson products, organize it into a complete BSP source package, and compile/flash it onto Jetson devices.**

## 1. Prepare workspace

This guide takes **L4T 36.4.3** as an example to demonstrate how to build the source code project, compile it, and flash it to the Jetson device. The same process applies to other versions—simply **replace the version number in the subsequent example commands with your desired build version**.

Before getting start, you need to prepare an **Ubuntu 20.04/22.04 PC host**.

If you're unsure about the relationship between L4T versions and JetPack versions, you can refer to this link:
https://developer.nvidia.com/embedded/jetpack-archive.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/L4T-jetpack.png
"/></div>

Search for the specific **L4T (Linux for Tegra)** release you want to compile, e.g.:
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/google_L4T.jpg"/></div>

<!-- After clicking on the web, download and prepare the sample root file system, NVIDIA's official BSP and the toolchain used for cross-compilation, as shown below.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-BSP-rootfs-toolchain.png"/></div> -->

Extract the official BSP from NVIDIA, and you will get a directory named `Linux_for_Tegra`. Then, extract the root file system archive into the official `Linux_for_Tegra` directory:

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

Sync the source code for compiling. Replace the argument after `-t` with **the L4T version you want**:

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
```

Exit to the root directory of your workspace. Git clone the source code of your desired branch to your local machine using the following command
(replace `-b <branch name>` with the target branch):

```bash
sudo apt update
sudo apt install git-lfs
cd ../..
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
```

The BSP source code for Seeed's Jetson is available in **this [GitHub repository](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/main).**
You can check the different branches to find your desired L4T version, as each branch corresponds to a different L4T release.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/github_L4T.jpg"/></div>

Then overwrite the original source code:

```bash
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

Apply necessary changes to rootfs:

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
```

Install dependencies on your PC:

```bash
sudo apt-get update
sudo apt-get install build-essential flex bison libssl-dev
sudo apt-get install sshpass
sudo apt-get install abootimg
sudo apt-get install nfs-kernel-server
sudo apt-get install libxml2-utils
sudo apt-get install qemu-user-static
```

prepare work for kernel build:

```bash
mkdir -p l4t-gcc
tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE=/your_path/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

Compile and build kernel:

```bash
cd source
./nvbuild.sh
```

Install new kernel dtbs and drivers:

```bash
./do_copy.sh
export INSTALL_MOD_PATH=/your_path/Linux_for_Tegra/rootfs/
./nvbuild.sh -i
```

:::tip
For JetPack 5, since the file paths are different, you need to modify the `-p` parameter to:
`-p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml"`
:::

For **Jetpack 6**, flashing the device(take **recomputer-orin-j401** for example):

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
--external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
-p "-c bootloader/generic/cfg/flash_t234_qspi.xml"  --showlogs \
--network usb0 recomputer-orin-j401 internal
```

Replace `recomputer-orin-j401` with the name of the device you are using. You need to provide a valid `device name` as a parameter, which you can find by checking the .conf filenames in the root directory of `Linux_for_Tegra`. The prefix of these filenames corresponds to the valid `device name` parameters.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png
"/></div>

Therefore, the available device name parameters for **L4T 36.4.3** are as follows. The **j40** and **j30** series use the same configuration file:

- recomputer-industrial-orin-j201 (recomputer-industrial-orin-j40/j30 also uses this `device name` as the parameter.)
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401

## Resources

- [Source code of Seeed's L4T](https://github.com/Seeed-Studio/Linux_for_Tegra)

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
