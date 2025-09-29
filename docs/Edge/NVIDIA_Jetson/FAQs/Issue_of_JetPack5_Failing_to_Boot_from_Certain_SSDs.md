---
description: Resolve the issue of JetPack5 failing to boot from certain SSDs
title: Resolve the issue of JetPack5 failing to boot from certain SSDs
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /issue_of_jetpack5_failing_to_boot_from_certain_ssd
last_update:
  date: 07/30/2025
  author: Dayu
---

**This wiki provides a b_rief introduction to the components of JetPack, helping you quickly understand the relationship between JetPack and Jetson, and answering some of the most frequently asked questions.**

## 1. Issue

If JetPack 5 is flashed to the SSD of Jetson, there is still a certain probability that the system may fail to boot even if the flashing process completes successfully. The following error may occur during startup:
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/other/jetpack_boot_failure.jpg"/></div>


This issue has also been documented on NVIDIA’s official forums. It may be caused by filesystem incompatibility or incomplete wiping during the flashing process, which leads to boot failure.
So far, **no similar issues have been observed when flashing and using JetPack 6 on Jetson devices.**


## 2. Solution
**Here are two solutions provided for your reference. You can choose based on your specific situation:**

###  Option A

First, remove the SSD that fails to boot properly from the Jetson device, and connect it to your PC using an SSD enclosure (any compatible enclosure similar to the one shown in the image below). Proceed with formatting the drive.
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/Jetson/nvme-faslhing.jpg"/></div>


Then, enter the following command in the terminal to locate the SSD mounted to the PC, which may be named `sda`, `sdb` etc.:
```bash
lsblk
```

If you're unsure which name corresponds to the SSD you inserted, you can check the contents of the mounted directory:
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/ssd-mount.jpg
"/></div>

Taking the mounted directory in the image as an example, check whether there is a **Jetson-specific device tree**:
```bash
ls /your_path/boot
# For example: ls /media/darklee/bc5769eb-36d6-4c42-86d1-565554112264/boot
```

If it's the SSD from the Jetson, you will see results similar to the following image:
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device-tree-example.png
"/></div>

**You can continue checking the contents of other files in the SSD's mounted directory to further confirm that it belongs to the Jetson.**

:::danger
Please double-check to ensure accuracy before formatting the Jetson's SSD. If the SSD contains important data, be sure to back it up. Make sure you know what you're doing.
:::

Once you've confirmed it's the Jetson's SSD and completed any necessary backups, proceed with a full format of the SSD。
`bs=100M`, `count=800` formats the first **80GB** of space. **If your SSD has a larger capacity, you can increase the formatted space accordingly.**
```bash
sudo wipefs -a /dev/sda
sudo dd if=/dev/zero of=/dev/sda bs=100M count=800
```
After the formatting is complete, reinstall the SSD into the Jetson. If the SSD has been thoroughly wiped, flashing JetPack 5 should theoretically prevent any boot failures.

Refer to this [wik](https://wiki.seeedstudio.com/flash/jetpack_to_selected_product/) for instructions on flashing the Jetson.



###  Option B


Refer this [wiki](/how_to_build_the_source_code_project_for_seeed_jetson_bsp) to prepare the source code project to flashing.

When executing `./tools/kernel_flash/l4t_initrd_flash.sh` with the `--erase-all` parameter, the solid-state drive will be completely erased during the flashing process.


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

