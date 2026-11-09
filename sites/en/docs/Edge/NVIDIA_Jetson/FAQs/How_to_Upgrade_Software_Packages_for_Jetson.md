---
description: This FAQ explains how to update Jetson software without replacing Seeed carrier-board drivers, and how to repair JetPack 5.1.3 or JetPack 6.2 after a mistaken nvidia-l4t upgrade.
title: Upgrade Software Packages for Jetson
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /upgrade_software_packages_for_jetson
last_update:
  date: 10/16/2026
  author: Youjiang/Dayu
createdAt: '2025-02-11'
updatedAt: '2026-10-16'
url: https://wiki.seeedstudio.com/upgrade_software_packages_for_jetson/
---

#### How can I upgrade software packages if you told me that I cannot execute apt upgrade? Will there be security risks if I don't upgrade the software?

A: Do not run `sudo apt upgrade` or `sudo apt full-upgrade` on a Seeed Jetson image. A normal application update is fine, but an unattended NVIDIA upgrade can replace the Seeed `nvidia-l4t` kernel, device tree, and driver packages with NVIDIA stock packages. The device may then fail to boot, or carrier-board peripherals may stop working.

For application packages that do not depend on `nvidia-l4t`, install only the package you need:

```bash
sudo apt update
sudo apt-get install <your-package>
```

For most open-source software, another safe option is to download the source and build it yourself. A full Seeed BSP or JetPack image is still the preferred way to update the kernel, bootloader, and carrier-board drivers together.

## Repair a mistaken nvidia-l4t upgrade

Repair packages are available for the two JetPack releases that do not already contain the apt protection:

| JetPack | Jetson Linux | Repair package |
| --- | --- | --- |
| JetPack 5.1.3 | R35.5.0 | [seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBHzK-usznrT72e9lsjdzvnAZf8tB1ohV93_-vjlazshYQ?e=ljS4tL) |
| JetPack 6.2 | R36.4.3 | [seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQCTqH9GsRQWSI-PhfPuJeycAR_oaUGvZc7jBTgcMMWS-fc?e=jV1YJF) |

JetPack 7 and later Seeed firmware already holds the NVIDIA kernel and driver packages, so `apt` cannot replace them by mistake. There is no repair package for those releases. If a JetPack 7 or later system is already damaged, reflash the matching Seeed image.

:::caution
Run the repair on the Jetson itself, and use only the package that matches `cat /etc/nv_tegra_release`. The script restores Seeed kernel and driver packages. It does not install the bootloader package unless you explicitly add `--with-bootloader`.
:::

### JetPack 5.1.3 / L4T R35.5.0

Confirm the release first:

```bash
cat /etc/nv_tegra_release
```

The first line must contain `R35 (release), REVISION: 5`. Download `seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip`, copy it to the Jetson, and run:

```bash
unzip -o seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip
cd seeed-jetson-linux-r35.5.0-bsp-bundle
sudo ./seeed-linux-bsp-repair.sh
sudo reboot
```

Add `--with-bootloader` only when the bootloader itself must be repaired. After reboot, check the restored packages:

```bash
dpkg -l nvidia-l4t-kernel nvidia-l4t-kernel-dtbs nvidia-l4t-kernel-headers nvidia-l4t-display-kernel
cat /etc/nv_boot_control.conf
dpkg --audit
```

The four packages should be installed or held, and their versions should contain `+seeed1`. `dpkg --audit` should print nothing. The repair log is `/var/log/seeed-linux-bsp-r35.5.0-repair.log`.

### JetPack 6.2 / L4T R36.4.3

Confirm the release first:

```bash
cat /etc/nv_tegra_release
```

The output must contain `R36` and `REVISION: 4.3`. Download `seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip`, copy it to the Jetson, and run:

```bash
unzip -o seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip
cd seeed-jetson-linux-r36.4.3-bsp-bundle
sudo ./seeed-linux-bsp-repair.sh
sudo reboot
```

If the script cannot identify the carrier board, stop and rerun it with the Seeed product name:

```bash
sudo ./seeed-linux-bsp-repair.sh --board recomputer-orin-super-j401
```

Replace `recomputer-orin-super-j401` with the name of the Seeed carrier or product being repaired. Use `--auto` only when the detected board name is already correct and the command must run without interaction. Add `--with-bootloader` only when firmware repair is required. The R36.4.3 repair package does not contain an Orin Super bootloader capsule, so check the module and firmware before using that option on Orin Super hardware.

After reboot, check:

```bash
dpkg -l nvidia-l4t-kernel nvidia-l4t-kernel-dtbs nvidia-l4t-kernel-headers nvidia-l4t-kernel-oot-modules nvidia-l4t-display-kernel
uname -r
dpkg --audit
```

The package versions should contain `+seeed1`, and `uname -r` should report `5.15.148-tegra`. The repair log is `/var/log/seeed-linux-bsp-r36.4.3-repair.log`, and the script backup is `/opt/nvidia/l4t-packages/seeed-r36.4.3-repair-backup`.


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
