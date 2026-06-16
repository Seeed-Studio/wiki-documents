---
description: This guide explains how to migrate user data from an NVIDIA Jetson Orin Nano Developer Kit running JetPack 6 to a Seeed Studio reComputer by backing up and restoring only the /home directory. It uses reComputer J4012 and reComputer Super J4012 as target examples and avoids copying board-specific boot files, device trees, kernel modules, and BSP configuration from the developer kit.
title: Migrate /home Data from Jetson Orin Nano Developer Kit to reComputer
keywords:
  - reComputer
  - reComputer Super
  - Orin Nano Developer Kit
  - Jetson
  - JetPack 6
  - Backup
  - Restore
  - Migration
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer
sku: E2025021104, E2025032601
last_update:
  date: 06/05/2026
  author: Dayu
createdAt: '2026-06-04'
updatedAt: '2026-06-08'
url: https://wiki.seeedstudio.com/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/
---

# Migrate /home Data from Jetson Orin Nano Developer Kit to reComputer

## Introduction

When moving from an NVIDIA Jetson Orin Nano Developer Kit to a Seeed Studio reComputer, you may want to keep your user workspace, project files, Conda environments, scripts, and application data. However, restoring a full developer kit system image directly onto a reComputer is not recommended because the carrier board, device tree, bootloader, and BSP configuration are different.

This wiki shows how to use the [reComputer Classic backup to Super migration project](https://github.com/jjjadand/reComputer_classic-backup-to-super.git) to migrate only `/home` from the source Jetson Orin Nano Developer Kit to a target reComputer. In this guide, [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) and [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html) are used as target examples. Flash the target reComputer with its matching Seeed JetPack 6 BSP first, then restore the `/home` package on top of that clean reComputer system.

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Get J4012</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Get Super J4012</font></span></strong>
  </a>
</div>

## Hardware Reference

This guide uses the Jetson Orin Nano Developer Kit as the source device and reComputer J4012 / reComputer Super J4012 as target examples. The same `/home`-only migration idea can also be used for other Jetson-to-reComputer combinations when both systems are running JetPack 6 / L4T R36 and the target has been flashed with its matching Seeed BSP.

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th>Source Device</th>
      <th>Target Example 1</th>
      <th>Target Example 2</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.webp" />
        </div>
        <br />
        Jetson Orin Nano Developer Kit
      </td>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
        </div>
        <br />
        <a href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">reComputer J4012</a>
      </td>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp" />
        </div>
        <br />
        <a href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">reComputer Super J4012</a>
      </td>
    </tr>
  </tbody>
</table>
</div>

## What This Migration Does

The migration package contains:

- `/home`
- source system metadata
- `/home` user and group metadata
- manually installed APT package list, if available
- installed dpkg package list, if available
- package checksums

It intentionally does not restore:

- `/boot`
- `/boot/dtb`
- `/lib/modules`
- `/usr/lib/modules`
- `/etc/nv_boot_control.conf`
- `/etc/fstab`
- bootloader partitions
- board-specific BSP files

:::caution
This workflow is for user data migration, not full system cloning. Applications installed under `/usr`, services configured under `/etc`, Docker images under `/var/lib/docker`, and system-level BSP changes are not migrated. Reinstall or reconfigure those components on the target reComputer after the `/home` restore.
:::

## Prerequisites

- Source NVIDIA Jetson Orin Nano Developer Kit running JetPack 6 / L4T R36
- Target reComputer J4012 or reComputer Super J4012 running its matching Seeed JetPack 6 BSP
- Network access or removable storage to transfer the package
- Enough free space for a compressed `/home` backup package
- `git`, `tar`, `sha256sum`, `awk`, and `find`

:::note
Before restoring the package, flash the target reComputer with the correct Seeed firmware. For reComputer J4012, refer to [Flash JetPack OS to J401 Carrier Board](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/). For reComputer Super J4012, refer to [Getting Started with reComputer Super](https://wiki.seeedstudio.com/recomputer_jetson_super_getting_started/#flash-jetpack-os).
:::

## Workflow Overview

1. Flash the target reComputer with the matching Seeed JetPack 6 BSP.
2. Clone the migration project on the source Jetson Orin Nano Developer Kit.
3. Create a `/home` migration package on the source device.
4. Copy the package to the target reComputer.
5. Inspect or dry-run the restore on the target.
6. Restore `/home` on the target and reboot.
7. Reinstall any required system packages or services that are outside `/home`.

## Backup on the Source Jetson Orin Nano Developer Kit

**Step 1.** Install `git` if it is not already installed.

```bash
sudo apt update
sudo apt install -y git
```

**Step 2.** Clone the migration project.

```bash
git clone https://github.com/jjjadand/reComputer_classic-backup-to-super.git
cd reComputer_classic-backup-to-super
chmod +x *.sh
```

**Step 3.** Create a backup package.

Replace `/path/to/output` with a directory that has enough free space, such as a USB drive, external SSD, or a shared network folder.

```bash
sudo ./backup_home_jp6.sh -o /path/to/output
```

After the backup finishes, you will see two files:

```text
jetson-home-jp6-<hostname>-<timestamp>.tar.gz
jetson-home-jp6-<hostname>-<timestamp>.tar.gz.sha256
```

By default, the script excludes common cache directories to reduce package size:

```text
/home/*/.cache
/home/*/.ccache
/home/*/.nv/ComputeCache
/home/*/.npm/_cacache
/home/*/.local/share/Trash
/home/*/.local/share/gvfs-metadata
```

If you need a closer copy of the user cache data, add `--include-caches`:

```bash
sudo ./backup_home_jp6.sh -o /path/to/output --include-caches
```

If you need to exclude additional data, create an exclude file with tar exclude patterns and pass it to the script:

```bash
sudo ./backup_home_jp6.sh -o /path/to/output --exclude-file /path/to/exclude-patterns.txt
```

:::info
The backup script uses `--one-file-system` for `/home`. If you mount external storage inside `/home`, back up that mounted data separately.
:::

## Inspect the Backup Package

Before restoring, you can inspect the package on either the source device or the target device.

```bash
./inspect_home_package.sh /path/to/jetson-home-jp6-xxx.tar.gz
```

The inspect command verifies the package checksum and prints the package format, source system metadata, source `/home` users, and the first entries in the `/home` archive.

## Copy the Package to the Target reComputer

Copy the `.tar.gz` package to the target reComputer. For example, using `scp`:

```bash
scp /path/to/jetson-home-jp6-xxx.tar.gz seeed@<recomputer-ip>:/home/seeed/
```

You can also copy the package using a USB drive or external SSD.

:::note
Keep the `.sha256` file as an external checksum record. The restore script also verifies the checksums embedded inside the migration package.
:::

## Restore on the Target reComputer

**Step 1.** Make sure the target reComputer has already been flashed with the correct Seeed JetPack 6 BSP and completed the first boot setup.

**Step 2.** Clone the migration project on the target.

```bash
git clone https://github.com/jjjadand/reComputer_classic-backup-to-super.git
cd reComputer_classic-backup-to-super
chmod +x *.sh
```

:::note
The restore script name contains `super` because the original project was created for a reComputer Super migration scenario. In this guide, it is still used only to verify and overlay the `/home` package on the selected reComputer target.
:::

**Step 3.** Run a dry run first.

```bash
./restore_home_on_super_jp6.sh --dry-run /home/seeed/jetson-home-jp6-xxx.tar.gz
```

The dry run verifies the package and prints a summary without restoring files.

**Step 4.** Restore the package.

```bash
sudo ./restore_home_on_super_jp6.sh --create-users /home/seeed/jetson-home-jp6-xxx.tar.gz
```

The `--create-users` option creates missing source users and groups by UID/GID before extracting the package. This helps preserve file ownership when the source user does not yet exist on the target reComputer system.

By default, the restore script creates a rollback archive of the current target `/home` before overlaying the source package:

```text
/var/backups/jetson_home_migration/super-home-before-restore-<timestamp>.tar.gz
```

If `/var/backups` does not have enough space, use another backup directory:

```bash
sudo ./restore_home_on_super_jp6.sh --create-users --backup-dir /path/to/backup-dir /home/seeed/jetson-home-jp6-xxx.tar.gz
```

Only use `--no-backup` if you already have a separate backup of the target `/home`:

```bash
sudo ./restore_home_on_super_jp6.sh --create-users --no-backup /home/seeed/jetson-home-jp6-xxx.tar.gz
```

:::caution
The restore operation overlays files onto `/home`. It overwrites matching files from the package, but it does not delete files that exist only on the target.
:::

**Step 5.** Reboot the target.

```bash
sudo sync
sudo reboot
```

## Validate the Migration

After the target reComputer reboots, check the restored users and files:

```bash
ls -lah /home
id <source-user>
du -sh /home/<source-user>
```

Then validate your application data and user environments:

```bash
ls -lah /home/<source-user>/projects
conda env list
python3 --version
```

If you use Jetson tools such as `jtop`, run them again on the target reComputer:

```bash
jtop
```

:::info
If an application command is missing after migration, it was probably installed outside `/home`. Use the metadata in the package to check the source package list, then reinstall the required software on the target reComputer system.
:::

## Roll Back the Target /home

If you need to restore the target `/home` state that existed before migration, use the rollback archive created by the restore script.

```bash
sudo tar --extract \
  --gzip \
  --file /var/backups/jetson_home_migration/super-home-before-restore-xxx.tar.gz \
  --directory / \
  --preserve-permissions \
  --same-owner \
  --acls \
  --xattrs \
  --xattrs-include='*' \
  --numeric-owner \
  --overwrite

sudo sync
sudo reboot
```

## Troubleshooting

### The Script Warns That the System Does Not Look Like JetPack 6

The scripts check `/etc/nv_tegra_release` and expect L4T R36. Confirm that both the source and target are running JetPack 6.

```bash
cat /etc/nv_tegra_release
```

### File Ownership Looks Numeric After Restore

This usually means the target does not have the same UID/GID users as the source. Run the restore command with `--create-users`, or manually create users with matching UID/GID before restoring.

### The Package Is Too Large

Use the default cache exclusions, remove unnecessary files from `/home`, or provide an additional exclude pattern file with `--exclude-file`.

### Some Files Changed During Backup

The backup script accepts tar status `1`, which usually means live files changed during the backup. Close running applications and repeat the backup if the changed files are important.

### Docker Images or System Services Are Missing

This migration only restores `/home`. Docker images, system services, APT-installed applications, and files under `/etc`, `/usr`, and `/var` need to be reinstalled or reconfigured on the target reComputer system.

## Resources

- [reComputer Classic backup to Super migration project](https://github.com/jjjadand/reComputer_classic-backup-to-super.git)
- [Create Backup and Restore on reComputer](https://wiki.seeedstudio.com/create_backup_and_restore_on_recomputer/)
- [How to Update Jetson Orin Nano Developer Kit to Super Kit](https://wiki.seeedstudio.com/update_orin_nano_developer_kit_to_super_kit/)
- [Flash JetPack OS to J401 Carrier Board](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/)
- [Getting Started with reComputer Super](https://wiki.seeedstudio.com/recomputer_jetson_super_getting_started/)
- [reComputer J30/J40 Getting Started](https://wiki.seeedstudio.com/reComputer_J30_40_with_Jetson_getting_start/)
- [Seeed Jetson Devices One Page](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
