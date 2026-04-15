---
description: Build and flash the BSP source package for the NVIDIA Jetson AGX Thor Developer Kit.
title: How to Build and Flash BSP Source for Jetson Thor
keywords:
  - Jetson Thor
  - BSP
  - source build
  - flashing
  - JetPack 7.1
image: https://files.seeedstudio.com/wiki/other/thor-post.png
slug: /how_to_build_and_flash_bsp_source_for_jetson_thor
sku: 100060965
last_update:
  date: 04/14/2026
  author: Youjiang
createdAt: '2026-04-14'
updatedAt: '2026-04-14'
url: https://wiki.seeedstudio.com/how_to_build_and_flash_bsp_source_for_jetson_thor/
---

# How to Build and Flash BSP Source for Jetson Thor

<div align="center">
  <img width ="700" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
  </a>
</div>

This wiki explains how to use the BSP source package to build and flash the **NVIDIA Jetson AGX Thor Developer Kit** from an Ubuntu host.

The workflow in this article uses the **JetPack 7.1** BSP package provided below and covers:

- Downloading and extracting the BSP package
- Entering USB recovery mode on Thor
- Running `thor_build_flash.sh`
- Cleaning the workspace with `thor_cleanup.sh`
- Optional post-flash package installation

## Prerequisites

- NVIDIA Jetson AGX Thor Developer Kit
- Ubuntu host PC
- USB Type-C data cable
- Stable power supply for Thor
- BSP package for Thor

:::info
Use the **USB Type-C flashing port closest to the HDMI connector** when connecting Thor to the host PC.
:::

## 1. Download and Extract the BSP Package

Download the BSP package first:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>Download Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAnZOQBV-uhTbnY0Zp3-HEqAQzFPrkH5LKgCsJ4KHRYCMg?e=rjGn93">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

After downloading the package, extract it and enter the working directory:

```bash
cd /other_data
sudo tar xpf <downloaded_package>.tar.gz
cd thor-dev/linux_for_tegra
```

:::tip
Use `sudo tar xpf` when extracting the package so file ownership and permissions are preserved correctly.
:::

## 2. Enter USB Recovery Mode on Thor

First connect the host PC to the **USB Type-C flashing port near the HDMI connector**:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/flash-Thor-dev.png"/>
</div>

The side buttons are shown below:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/JAT-Button-Side_white.png"/>
</div>

Button definitions in the image:

- `11`: Power button
- `12`: Force Recovery button
- `13`: Reset button
- `14`: White LED

To enter recovery mode:

1. Power off Thor.
2. Connect the USB Type-C cable between the host PC and the Thor flashing port.
3. Press and hold the **Force Recovery button** (`12`).
4. While holding the **Force Recovery button** (`12`), press the **Power button** (`11`) to power on the board.
5. Release the button after the board enters recovery mode.

On the host PC, verify recovery mode with:

```bash
lsusb
```

Thor in USB recovery mode is typically enumerated as:

```text
0955:7045
```

Reference image:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/recovery-mode.png"/>
</div>

## 3. Build and Flash

Run the help command first:

```bash
cd /other_data/thor-dev/linux_for_tegra
./thor_build_flash.sh help
```

Default board settings are already configured for **Thor J601**:

- `CONFIG=recomputer-thor-carrier-j601`
- `BOARDID=3834`
- `BOARDSKU=0008`
- `FAB=400`
- `BOARDREV=G.5`
- `CHIP_SKU=00:00:00:A0`

### Typical Flow

```bash
cd /other_data/thor-dev/linux_for_tegra

./thor_build_flash.sh prepare
./thor_build_flash.sh build
sudo -E ./thor_build_flash.sh flash
```

You can also run the full process in one shot:

```bash
./thor_build_flash.sh all
```

:::tip
For the first flash, the split `prepare -> build -> flash` flow is recommended because it makes failures easier to identify.
:::

### Stage Meaning

- `prepare`
  - Download the rootfs tarball
  - Extract `rootfs/`
  - Run `apply_binaries.sh`
  - Download and extract the cross toolchain

- `build`
  - Compile the kernel and out-of-tree modules
  - Copy the kernel image into `rootfs/boot/`
  - Run `rootfs_magic.sh`
  - Update initrd
  - Create the default user

- `flash`
  - Call `l4t_initrd_flash.sh`
  - Require the target board to be in USB recovery mode

### Important Notes

- Run `build` as a normal user, not as `root`.
- Run `flash` with `sudo -E`.
- Thor USB recovery mode is typically visible on the host as `0955:7045`.
- The script auto-fixes a missing `nvethernetrm` symlink before build.

### Common Overrides

Use environment variables when you need to override defaults:

```bash
CONFIG=recomputer-thor-carrier-j601 \
DOWNLOAD_BASE_URL=http://192.168.1.77/jetson \
DEFAULT_USER=seeed \
DEFAULT_PASSWORD=seeed \
DEFAULT_HOSTNAME=jetson-test \
./thor_build_flash.sh build
```

Useful variables:

- `DOWNLOAD_BASE_URL`
- `ROOTFS_NAME`
- `TOOLCHAIN_NAME`
- `DEFAULT_USER`
- `DEFAULT_PASSWORD`
- `DEFAULT_HOSTNAME`
- `FLASH_TARGET`
- `RUN_ROOTFS_MAGIC`

## 4. Cleanup

Show help:

```bash
./thor_cleanup.sh help
```

### Recommended Daily Cleanup

```bash
./thor_cleanup.sh incremental
```

This keeps `source/kernel_out` so the next compile remains fast, while removing:

- `output/`
- `bootloader/system.img*`
- `bootloader/esp.img*`
- `bootloader/recovery.img*`
- `bootloader/boot*.img`
- Flash temporary artifacts and logs

### Cleanup Modes

- `incremental`
  - Keep `source/kernel_out`
  - Best choice for normal development

- `rebuild`
  - Also remove `source/kernel_out`
  - The next build becomes a full rebuild

- `distclean`
  - Also remove `rootfs/` and `l4t-gcc/`
  - Use only when archiving or fully resetting the environment

### Dry Run

```bash
./thor_cleanup.sh incremental --dry-run
```

## 5. Optional Post-Flash Packages

After Thor boots successfully, you can optionally update package metadata and install the `nvidia-jetpack` meta-package:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Troubleshooting

### Boot shows an `mmap` error

If Thor does not boot normally and the screen shows an `mmap` error like the image below, re-enter USB recovery mode and reflash the board:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/mmap-error-thor.png"/>
</div>

Run the following command from the flashing workspace:

```bash
cd /other_data/thor-dev/linux_for_tegra
sudo BOARDID=$BOARDID FAB=$FAB BOARDSKU=$BOARDSKU BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU \
./l4t_initrd_flash.sh --erase-all jetson-agx-thor-devkit internal
```

:::note
If the `mmap` error persists after running the erase-and-reflash command above, collect the full boot log and contact support.
:::

## Resources

- [NVIDIA Jetson AGX Thor Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)
- [Thor BSP Package for JetPack 7.1](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAnZOQBV-uhTbnY0Zp3-HEqAQzFPrkH5LKgCsJ4KHRYCMg?e=rjGn93)

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
