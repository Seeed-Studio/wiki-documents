---
description: Explains why initrd flashing fails with mount.nfs access denied when the Ubuntu host uses a ZFS root filesystem, and how to work around it on Seeed Jetson devices.
title: Initrd Flash Fails on ZFS Host (mount.nfs access denied)
tags:
  - JetPack
  - Flashing
  - Host PC
keywords:
  - jetson
  - flash
  - ZFS
  - NFS
  - initrd
  - l4t_initrd_flash
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/Jetson_Initrd_Flash_ZFS_nfs_error_01.png
slug: /jetson_initrd_flash_zfs_host_limitation
last_update:
  date: 08/13/2026
  author: haochen
createdAt: '2026-08-12'
updatedAt: '2026-08-13'
url: https://wiki.seeedstudio.com/jetson_initrd_flash_zfs_host_limitation/
---

# Initrd Flash Fails on ZFS Host (mount.nfs access denied)

## Introduction

When you flash a Seeed Jetson device with NVIDIA’s **initrd** workflow (`l4t_initrd_flash.sh` with `--network usb0`), the Ubuntu **host PC** temporarily shares flash files to the Jetson over **NFS** (Network File System). If your host was installed with a **ZFS root filesystem** (Ubuntu installer option *Erase disk and use ZFS*), flashing may fail with:

```text
mount.nfs: access denied by server while mounting [fc00:1:1:0::1]:/path/to/mfi_xxx/rootfs
Flash failure
Either the device cannot mount the NFS server on the host or a flash command has failed.
```

This is **not** a defect of your Seeed carrier board or Jetson module. It is a known interaction between **ZFS** and NVIDIA’s default temporary NFS export used during initrd flashing.

:::info Applicable products
Any Seeed Jetson product flashed with **`l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0`** (or similar initrd + network flash), including but not limited to:

- reComputer Classic / Mini / Super (J401 series)
- reComputer Industrial / reServer J401
- reComputer Robotics J401 / J501 / J501 Mini
- reServer J501

It is **not** specific to a single SKU. Root cause is the **host filesystem**, not the target device.
:::

## What is NFS in this context?

During initrd flashing:

1. You extract the Seeed **mfi** package on the Ubuntu host.
2. The Jetson boots a small **initrd** image over USB.
3. The host **exports** folders such as `rootfs` and `tools/kernel_flash/images` over NFS.
4. The Jetson **mounts** those folders and writes the system image.

NFS here is only a **host ↔ Jetson transfer mechanism** during flashing. It is unrelated to NFS features on the carrier board.

## Why ZFS hosts fail

NVIDIA’s script (`tools/kernel_flash/l4t_network_flash.func`) uses **`exportfs -o`** to create **temporary, in-memory** NFS exports.

On **ext4** (default Ubuntu install), this usually works.

On **ZFS**, the Linux NFS server cannot auto-assign a stable **`fsid`** for the dataset. The export may appear to succeed on the host, but the Jetson receives **access denied** when mounting.

Ubuntu has offered ZFS as a root option since 19.10, so this can affect any user who chose ZFS during installation.

## Recommended workaround (simplest)

**Copy the entire mfi directory to an ext4 filesystem**, then run the flash command from there.

```bash
# Example: copy mfi folder to an ext4 mount (adjust paths)
cp -a /path/on/zfs/mfi_recomputer-orin-super-j401 /mnt/ext4-flash/
cd /mnt/ext4-flash/mfi_recomputer-orin-super-j401

sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Tips:

- Use a dedicated ext4 partition, external USB drive formatted as ext4, or an ext4 loopback image.
- Ensure enough free space for the full extracted mfi package.
- Install flash prerequisites on the host (`nfs-kernel-server`, `sshpass`, etc.) as in your product’s Getting Started guide.

## Advanced workaround (stay on ZFS)

If you must flash from a ZFS path, configure **persistent** exports in `/etc/exports` with explicit **`fsid=`** values, and ensure permissions are correct. You may also need to patch `enable_nfs_for_folder()` in `l4t_network_flash.func` so the script uses `/etc/exports` + `exportfs -ra` instead of `exportfs -o`.

Example export lines (adjust paths and IPv6 network to match your mfi directory):

```bash
/path/to/mfi_xxx/rootfs fc00:1:1::/48(rw,nohide,insecure,no_subtree_check,async,no_root_squash,fsid=1)
/path/to/mfi_xxx/tools/kernel_flash/images fc00:1:1::/48(rw,nohide,insecure,no_subtree_check,async,no_root_squash,fsid=2)
```

Then:

```bash
sudo chmod 755 /path/to/mfi_xxx/rootfs /path/to/mfi_xxx/tools/kernel_flash/images
sudo chown root:root /path/to/mfi_xxx/rootfs /path/to/mfi_xxx/tools/kernel_flash/images
sudo systemctl restart nfs-kernel-server
sudo exportfs -rav
```

Full details and a sample patch are in [wiki-documents #4148](https://github.com/Seeed-Studio/wiki-documents/issues/4148).

## Verify your host filesystem

```bash
df -T /
findmnt -no FSTYPE /
```

If the output shows `zfs`, use the ext4 workaround above before flashing.

## Resources

- [Seeed wiki-documents #4148](https://github.com/Seeed-Studio/wiki-documents/issues/4148)
- [NVIDIA Forums: rootfs does not support NFS export](https://forums.developer.nvidia.com/t/rootfs-does-not-support-nfs-export/248850)
- [NVIDIA Forums: requires fsid= for NFS export](https://forums.developer.nvidia.com/t/requires-fsid-for-nfs-export/338708)
- [Flash BSP with Jetpack to Selected Jetson](https://wiki.seeedstudio.com/flash/jetpack_to_selected_product/)
- [reServer J501 Getting Started](https://wiki.seeedstudio.com/reserver_j501_getting_started/)
- [Flash JetPack with WSL2](https://wiki.seeedstudio.com/ai_robotics_flash_jetpack_with_wsl2/)

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
