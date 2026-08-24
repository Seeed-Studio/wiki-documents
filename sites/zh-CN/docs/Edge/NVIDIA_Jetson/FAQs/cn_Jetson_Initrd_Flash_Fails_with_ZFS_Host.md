---
description: 解释当 Ubuntu 主机使用 ZFS 根文件系统时，为何使用 initrd 刷机会因 mount.nfs access denied 失败，以及如何在 Seeed Jetson 设备上规避该问题。
title: 在 ZFS 主机上 Initrd 刷机失败（mount.nfs access denied）
tags:
  - JetPack
  - 刷机
  - 主机 PC
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
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/cn/jetson_initrd_flash_zfs_host_limitation/
---

# 在 ZFS 主机上 Initrd 刷机失败（mount.nfs access denied）

## 介绍

当你使用 NVIDIA 的 **initrd** 工作流（使用 `l4t_initrd_flash.sh` 搭配 `--network usb0`）为 Seeed Jetson 设备刷机时，Ubuntu **主机 PC** 会通过 **NFS**（网络文件系统）临时将刷机文件共享给 Jetson。如果你的主机是使用 **ZFS 根文件系统** 安装的（Ubuntu 安装器选项 *Erase disk and use ZFS*），刷机可能会失败并出现如下错误：

```text
mount.nfs: access denied by server while mounting [fc00:1:1:0::1]:/path/to/mfi_xxx/rootfs
Flash failure
Either the device cannot mount the NFS server on the host or a flash command has failed.
```

这**不是**你的 Seeed 载板或 Jetson 模组的缺陷。这是 **ZFS** 与 NVIDIA 在 initrd 刷机过程中使用的默认临时 NFS 导出之间的已知交互问题。

:::info 适用产品
任何使用 **`l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0`**（或类似 initrd + 网络刷机方式）刷机的 Seeed Jetson 产品，包括但不限于：

- reComputer Classic / Mini / Super（J401 系列）
- reComputer Industrial / reServer J401
- reComputer Robotics J401 / J501 / J501 Mini
- reServer J501

这**不是**某个特定 SKU 的问题。根本原因在于**主机文件系统**，而不是目标设备。
:::

## 在这里 NFS 是什么？

在 initrd 刷机过程中：

1. 你在 Ubuntu 主机上解压 Seeed 的 **mfi** 包。
2. Jetson 通过 USB 启动一个精简的 **initrd** 镜像。
3. 主机通过 NFS **导出** `rootfs` 和 `tools/kernel_flash/images` 等文件夹。
4. Jetson **挂载**这些文件夹并写入系统镜像。

这里的 NFS 只是刷机期间的一个 **主机 ↔ Jetson 传输机制**。它与载板上提供的 NFS 功能无关。

## 为什么 ZFS 主机会失败

NVIDIA 的脚本（`tools/kernel_flash/l4t_network_flash.func`）使用 **`exportfs -o`** 来创建**临时的、仅在内存中的** NFS 导出。

在 **ext4**（Ubuntu 默认安装）上，这通常可以正常工作。

在 **ZFS** 上，Linux NFS 服务器无法为数据集自动分配稳定的 **`fsid`**。导出在主机上看起来可能是成功的，但 Jetson 在挂载时会收到 **access denied**。

Ubuntu 自 19.10 起就提供 ZFS 作为根分区选项，因此任何在安装时选择 ZFS 的用户都可能受到影响。

## 推荐规避方案（最简单）

**将整个 mfi 目录复制到一个 ext4 文件系统上**，然后从该位置运行刷机命令。

```bash
# Example: copy mfi folder to an ext4 mount (adjust paths)
cp -a /path/on/zfs/mfi_recomputer-orin-super-j401 /mnt/ext4-flash/
cd /mnt/ext4-flash/mfi_recomputer-orin-super-j401

sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

提示：

- 使用一个独立的 ext4 分区、格式化为 ext4 的外置 USB 硬盘，或 ext4 loopback 镜像。
- 确保有足够的可用空间容纳完整解压后的 mfi 包。
- 按照你所用产品的入门指南，在主机上安装刷机前置依赖（`nfs-kernel-server`、`sshpass` 等）。

## 高级规避方案（继续使用 ZFS）

如果你必须从 ZFS 路径进行刷机，请在 `/etc/exports` 中配置带有显式 **`fsid=`** 值的**持久**导出，并确保权限正确。你可能还需要修改 `l4t_network_flash.func` 中的 `enable_nfs_for_folder()`，让脚本使用 `/etc/exports` + `exportfs -ra`，而不是 `exportfs -o`。

示例导出行（根据你的 mfi 目录调整路径和 IPv6 网段）：

```bash
/path/to/mfi_xxx/rootfs fc00:1:1::/48(rw,nohide,insecure,no_subtree_check,async,no_root_squash,fsid=1)
/path/to/mfi_xxx/tools/kernel_flash/images fc00:1:1::/48(rw,nohide,insecure,no_subtree_check,async,no_root_squash,fsid=2)
```

然后：

```bash
sudo chmod 755 /path/to/mfi_xxx/rootfs /path/to/mfi_xxx/tools/kernel_flash/images
sudo chown root:root /path/to/mfi_xxx/rootfs /path/to/mfi_xxx/tools/kernel_flash/images
sudo systemctl restart nfs-kernel-server
sudo exportfs -rav
```

完整细节和示例补丁请参考 [wiki-documents #4148](https://github.com/Seeed-Studio/wiki-documents/issues/4148)。

## 验证你的主机文件系统

```bash
df -T /
findmnt -no FSTYPE /
```

如果输出中显示 `zfs`，请在刷机前使用上面的 ext4 规避方案。

## 资源

- [Seeed wiki-documents #4148](https://github.com/Seeed-Studio/wiki-documents/issues/4148)
- [NVIDIA 论坛：rootfs does not support NFS export](https://forums.developer.nvidia.com/t/rootfs-does-not-support-nfs-export/248850)
- [NVIDIA 论坛：requires fsid= for NFS export](https://forums.developer.nvidia.com/t/requires-fsid-for-nfs-export/338708)
- [使用 Jetpack 为指定 Jetson 刷写 BSP](https://wiki.seeedstudio.com/cn/flash/jetpack_to_selected_product/)
- [reServer J501 入门指南](https://wiki.seeedstudio.com/cn/reserver_j501_getting_started/)
- [在 WSL2 中刷写 JetPack](https://wiki.seeedstudio.com/cn/ai_robotics_flash_jetpack_with_wsl2/)

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
