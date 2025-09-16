---
description: This guide explains how to back up and restore the system on a reComputer J3011 to transfer your configured environment and software to a new device. The backup process includes entering recovery mode, downloading the JetPack BSP, and using a backup script to copy the data. During restoration, insert a new SSD, re-enter recovery mode, and run the restore command. This process allows for efficient replication of the configured system environment.
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
---

# Create Backup and Restore on reComputer

## Introduction

reComputer  is a powerful and compact intelligent edge box to bring up to 275TOPS modern AI performance to the edge.When you have configured and installed the software and environment necessary for your business on recomputer, and need to replicate the project from another new recomputer, reinstalling the software is not efficient. Therefore, this wiki page will use [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) to introduce how to back up your existing software and environment on the recomputer series, making it convenient for you to restore and transplant it to the new recomputer.

:::note
Our testing platform is reComputer J3011, JetPack 5.1.3 is provided for reference.
:::

## Prerequisite

- Ubuntu Host Computer
- USB Type-C data transmission cable
- reComputer J3011 (with JetPack 5.1.3 OS)

:::info
Installed and configured necessary software and applications on your reComputer. Ensure these modifications do not impair the device's boot functionality. It's recommended to reboot the device after making changes to confirm stability.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
Like the screenshot above, we installed the jtop software, where we can use these commands on the terminal directly.
<a id="Recovery"></a>
:::

## Backing Up the System

**Step 1.** Setting the device into recovery mode refer to this [wiki page](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode).

**Step 2.** Obtain the JetPack BSP corresponding to your Jetson module. For JetPack 5.1.3, download the Jetson Linux R35.5.0 BSP from [NVIDIA's official site.](https://developer.nvidia.com/embedded/jetson-linux-r3550)
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**Step 3.** Extract the BSP file to access the Linux_for_Tegra directory.

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>
  
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

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

wait patiently until it finished.
If all goes well, you will see something similar to the screenshot below in the terminal:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
During this process, your device may reboot many times like the flashing  process, you are not recommended to use virtual machines or WSL  because it might lose connection and cause the backup/restore process  failed.   You may encounter some missing files; you can open the `recomputer-orin.conf` and remove the file that didn’t exist.
Usually  these are temporary device tree overlay object files; they don't affect the  backup and restore results. But if you made modifications to BSP, you will  need to merge your overlay files.
:::

## Restoring the System

**Step 1.** Insert a new, empty [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) into your reComputer.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**Step 2.** Enter force recovery mode as [previously described.](#Recovery)

**Step 3.** On your host system, navigate to your JetPack flashing package directory and execute the restore command on host:  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

If all goes well, you will see something similar to the screenshot below in the terminal:
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**Step 4.** Power up the jetson device, use the username and password we previously set. And test some software we previously installed. If it worked, then our restore is successful.
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
Because we had installed jtop in our previous system, we can directly launch jtop in the terminal of the new system.

:::info
Additionally, following cases have been tested for backup and restore:  

- Restore the backup to original SSD.
- Restore the backup to different SSD.  
- Restore the backup to same carrier board, with Jetson module in same  batch, different SSDs.

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
