---
description: "Back up and restore a reComputer J3011 image on JetPack 5.1.3 and 6.2: clone the system to NVMe or USB, then write it to a new device."
title: Create Backup and Restore on reComputer
keywords:
  - jetson
  - BSP
  - L4T
  - Backup
  - Restore
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /create_backup_and_restore_on_recomputer
last_update:
  date: 04/11/2025
  author: Zibo
createdAt: '2025-04-14'
updatedAt: '2026-05-08'
url: https://wiki.seeedstudio.com/create_backup_and_restore_on_recomputer/
---

# Create Backup and Restore on reComputer

## Introduction

The reComputer brings up to 275 TOPS of AI performance in a compact edge enclosure. Reinstalling a configured unit by hand is slow, so the flow below uses `l4t_backup_restore.sh` to read the NVMe system image off a [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) onto a host, then writes that image to another unit. Both JetPack 5.1.3 and JetPack 6.2 are covered.

:::note
Our testing platform is reComputer J3011, JetPack 5.1.3 and JetPack 6.2 are provided for reference. Please select the appropriate section based on your JetPack version.
:::

## Prerequisite

- Ubuntu Host Computer
- USB Type-C data transmission cable
- reComputer J3011 (with JetPack 5.1.3 or JetPack 6.2 OS)

:::info
Installed and configured necessary software and applications on your reComputer. Ensure these modifications do not impair the device's boot functionality. It's recommended to reboot the device after making changes to confirm stability.

<div align="center"><img alt="jtop running in the terminal on the reComputer, showing the installed JetPack version" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
Like the screenshot above, we installed the jtop software, where we can use these commands on the terminal directly.
<a id="Recovery"></a>
:::

## JetPack 5.1.3
### Backing Up the System


**Step 1.** Setting the device into recovery mode refer to this [wiki page](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode).

**Step 2.** Obtain the JetPack BSP corresponding to your Jetson module. For JetPack 5.1.3, download the Jetson Linux R35.5.0 BSP from [NVIDIA's official site.](https://developer.nvidia.com/embedded/jetson-linux-r3550)
<div align="center"><img alt="NVIDIA Jetson Linux R35.5.0 BSP download page used for JetPack 5.1.3" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**Step 3.** Extract the BSP file to access the Linux_for_Tegra directory.

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img alt="ls of the extracted Linux_for_Tegra directory showing flash.sh, apply_binaries.sh and the board .conf files" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>
  
**Step 4.** Copy the contents of Linux_for_Tegra to your JetPack flashing package directory (e.g., mfi_recomputer-orin).
:::note
"flashing package directory" is the directory file used during the process of flashing the system.
:::

Use the `-rn` options to preserve existing files:

```bash
sudo cp -rn Linux_for_Tegra/* mfi_recomputer-orin
```

**Step 5.** Navigate to your JetPack flashing package directory:

```bash
cd /path/to/mfi_recomputer-orin
```

**Step 6.** Execute the backup script, specifying your storage device and desired backup name:

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin
```

:::info
-b `<target_board>` replace with your device

:::

:::note
you can navigate  to your Jepack flashing package directory and find a `xxx.conf` file.
`xxx` is your  `<target_board>`

```bash
ls | grep *.conf
```

<div align="center"><img alt="ls of the flashing package directory with recomputer-orin.conf boxed" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img alt="Host terminal after launching the backup: l4t_initrd_flash.sh generating the RCM boot command line" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

wait patiently until it finished.
If all goes well, you will see something similar to the screenshot below in the terminal:

<div align="center"><img alt="Backup finishing with the image written to the host directory" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
During this process, your device may reboot many times like the flashing  process, you are not recommended to use virtual machines or WSL  because it might lose connection and cause the backup/restore process  failed.   You may encounter some missing files; you can open the `recomputer-orin.conf` and remove the file that didn’t exist.
Usually  these are temporary device tree overlay object files; they don't affect the  backup and restore results. But if you made modifications to BSP, you will  need to merge your overlay files.
:::

### Restoring the System

**Step 1.** Insert a new, empty [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) into your reComputer.

<div align="center"><img alt="Original SSD still on the board, boxed, next to the new empty M.2 2280 SSD" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**Step 2.** Enter force recovery mode as [previously described.](#Recovery)

**Step 3.** On your host system, navigate to your JetPack flashing package directory and execute the restore command on host:  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

If all goes well, you will see something similar to the screenshot below in the terminal:
<div align="center"><img alt="Restore command finishing with the image written back to the NVMe drive" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**Step 4.** Power up the jetson device, use the username and password we previously set. And test some software we previously installed. If it worked, then our restore is successful.
<div align="center"><img alt="jtop available again on the restored system, confirming the image booted" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
Because we had installed jtop in our previous system, we can directly launch jtop in the terminal of the new system.

:::info
Additionally, following cases have been tested for backup and restore:  

- Restore the backup to original SSD.
- Restore the backup to different SSD.  
- Restore the backup to same carrier board, with Jetson module in same  batch, different SSDs.

:::

## JetPack 6.2
### Backing Up the System

For JetPack 6.2 (L4T 36.4.3), the backup process requires downloading the compiled Seeed BSP firmware and compiling the source code before performing the backup.

**Step 1.** Download the compiled Seeed BSP firmware: [L4T-36.4.3](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/L4T36-4-3_plus.tar)

**Step 2.** Extract the downloaded package and generate the necessary content using the following commands in your PC terminal:

```bash
sudo tar xpf L4T36-4-3_plus.tar
# For example: sudo tar xpf L4T36-4-3_plus.tar

cd Linux_for_Tegra/
sudo ./apply_binaries.sh
cd ..
```

**Step 3.** Set up environment variables in the extracted directory (where the tar.gz package is located):

```bash
export ARCH=arm64 
export CROSS_COMPILE="$PWD/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-"
export PATH="$PWD/aarch64--glibc--stable-2022.08-1/bin:$PATH"
export INSTALL_MOD_PATH="$PWD/Linux_for_Tegra/rootfs/"
```

**Step 4.** Navigate to the source directory and compile the source code (this process will take some time):

```bash
cd Linux_for_Tegra/source
./nvbuild.sh
```

**Step 5.** After compilation is complete, copy and install the compiled components:

```bash
./do_copy.sh
./nvbuild.sh -i
```

**Step 6.** The working directory is now prepared. Navigate to the `Linux_for_Tegra/` directory,Setting the device into recovery mode refer to this [wiki page](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode) and execute the backup script:

```bash
cd ../
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin-j401
```

:::info
-b `<target_board>` replace with your device. For JetPack 6.2, the default target board is `recomputer-orin-j401`.
:::

Wait patiently until it finishes. If all goes well, you will see a success message in the terminal.

:::note
During this process, your device may reboot many times like the flashing process, you are not recommended to use virtual machines or WSL because it might lose connection and cause the backup/restore process failed.
:::

### Restoring the System

**Step 1.** Insert a new, empty [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) into your reComputer.

**Step 2.** Enter force recovery mode as [previously described.](#Recovery)

**Step 3.** On your host system, navigate to your `Linux_for_Tegra/` directory and execute the restore command on host:

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin-j401
```

If all goes well, you will see a success message in the terminal.

**Step 4.** Power up the Jetson device, use the username and password we previously set. And test some software we previously installed. If it worked, then our restore is successful.

:::info
Additionally, following cases have been tested for backup and restore:

- Restore the backup to original SSD.
- Restore the backup to different SSD.
- Restore the backup to same carrier board, with Jetson module in same batch, different SSDs.
:::

## Resources

- [Flash JetPack OS to J401 Carrier Board](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/)
- [reComputer J30x Datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x Datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 Schematic](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D File](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson Serials Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI Success Stories](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson Serials Comparision](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson Devices One Page](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson examples](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-for-Beginners](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## FAQ

**Which host can run the backup?**
An Ubuntu host with the USB Type-C cable connected to the reComputer. Do not run it in a virtual machine or WSL — the device reboots several times during the process and a dropped USB connection leaves a half-written image.

**What do the `-b` and `-r` flags do?**
`-b` reads the system image off the module into the flashing package directory; `-r` writes an image back to the NVMe. Both take `-e nvme0n1` for the storage device and the target board name, which is `recomputer-orin` on JetPack 5.1.3 and `recomputer-orin-j401` on JetPack 6.2.

**The backup stops with missing file errors.**
Temporary device-tree overlay objects referenced in `recomputer-orin.conf` may not exist. Remove those lines from the `.conf` file and rerun — they do not affect the image unless you modified the BSP, in which case merge your overlays instead.

**Can the image go to a different SSD or a different unit?**
Yes. Restoring to the original SSD, to a different SSD, and to another unit of the same carrier board and module batch have all been tested. A different module SKU is a different image and is not covered.

## Related Resources

- [Flash JetPack onto reComputer J4012](/reComputer_J4012_Flash_Jetpack/)
- [Deploy OTA updates on reComputer](/deploy_ota_on_recomputer/)
- [reComputer J3011 product page](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html)
- [Jetson Linux R35.5.0 BSP](https://developer.nvidia.com/embedded/jetson-linux-r3550)

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
