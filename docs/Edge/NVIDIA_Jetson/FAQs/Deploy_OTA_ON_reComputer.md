---
description: This guide walks through creating an end-to-end OTA package to upgrade a reComputer mini J4012 from JetPack 5.1.3 to JetPack 6.2, including BSP preparation, package generation, and on-device deployment.
title: Deploy OTA on reComputer
keywords:
- jetson
- OTA
- JetPack
- reComputer
- BSP
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /deploy_ota_on_recomputer
last_update:
  date: 12/05/2025
  author: Zibo
---

# Deploy OTA on reComputer

## Introduction

NVIDIA Jetson Over-the-Air (OTA) updates allow developers to upgrade edge devices from an older JetPack version to a newer release remotely via a network connection, eliminating the need for a host PC or physical USB re-flashing. 
This wiki will demonstrate how to perform OTA (Over-the-Air) updates on reComputer.

:::note
Demonstration platform: reComputer mini J4012 with JetPack 5.1.3 → JetPack 6.2 OTA. Other Orin-based reComputers can follow the same logic, but adapt the `<target_board>` name that matches your carrier board.
:::

## Prerequisite
- Ubuntu x86_64 PC
- [reComputer mini J4012](https://www.seeedstudio.com/reComputer-Mini-J4012-with-Extension-p-6353.html)

## Quickly perform OTA

Here we provide a pre-compiled upgrade package for the Seeed development board, 
which upgrades from Jetpack 5.1.3 to Jetpack 6.2. If you are planning to directly upgrade from Jetpack 5.1.3 to Jetpack 6.2 via OTA, 
you can simply download and proceed with the upgrade quickly.


import OtaProductSelect from '@site/src/components/jetson/OtaProductSelect';

export const productOptions = [
  {
    value: 'j4012mini',
    label: 'reComputer mini',
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg',
    otaDescription: 'Ready-to-use JP5.1.3 → JP6.2 OTA payload for reComputer mini serial mini',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBkQzbsk18YRpFT6j1BK8VnAaH18J6nKGimI0xa4DTLsFg?e=PKhf7u',
      filename: 'ota_payload_package.tar.gz',
      sha256: '3da8fd97c450f4f7bd83390ab50f951dffd5ec1d43c39a1e6156b4806f7df7c6',
    },
  },
  {
    value: 'j4012classic',
    label: 'reComputer J30/40/401B',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg',
    otaDescription: 'Ready-to-use JP5.1.3 → JP6.2 OTA payload for reComputer classic J30/40/401B',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDRxYlSWuWvRbELB8tyGQ88AUa3cDYrNoj0kAyyzU3YTFA?e=P60b7N',
      filename: 'ota_payload_package.tar.gz',
      sha256: 'b0dde3e8fb5ac3838d8d569def1a373949ca30f59f52e30197f872c95aa7a777',
    },
  },
  {
    value: 'j4012industrial',
    label: 'reComputer industrial Serials',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg',
    otaDescription: 'Ready-to-use JP5.1.3 → JP6.2 OTA payload for reComputer Industrial serial',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC1cwAhknjjRLGyVc_Ze7QOAUAQ7KSi3IkzUSZ3XD45gL4?e=Q68dEF',
      filename: 'ota_payload_package.tar.gz',
      sha256: '31f17fe8606b19730c3d5a29b8cf96db99dff587de93136dbd74f39c71aeb4e9',
    },
  },
  {
    value: 'j4012reserver',
    label: 'reServer industrial Serials',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110247-reserver-industrial-j4012-first.jpg',
    otaDescription: 'Ready-to-use JP5.1.3 → JP6.2 OTA payload for for reServer industrial serial.',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBGOUJ8bXdYQbfRVpP9y_QHAdO-UoETL5AlRco6eTWg_Kg?e=loYpgD',
      filename: 'ota_payload_package.tar.gz',
      sha256: '879c2ab65019955ee798479d5303d91df22d496215657ea132dcfd3a11e46d24',
    },
  },
  {
    value: 'j501-carrier A GX-Orin',
    label: 'reServer industrial J501 AGX-Orin with GMSL',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_1.jpg',
    otaDescription: 'Ready-to-use JP5.1.3 → JP6.2 OTA payload for reServer industrial J501 with GMSL.',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBhfhZjS7orSLpp2ZS_CmhcAeGMpeh9xFsOJV7op2b0VIY?e=AgpgCt',
      filename: 'ota_payload_package.tar.gz',
      sha256: '83deb4d1a5f5a999c4cfb08581baf4fb4754cab5f867ae2809e0d03f1d817b60',
    },
  },
  {
    value: 'j501-carrier AGX-Orin',
    label: 'reServer industrial J501 AGX-Orin without GMSL',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_1.jpg',
    otaDescription: 'Ready-to-use JP5.1.3 → JP6.2 OTA payload for reServer industrial J501 without GMSL.',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC6wipGORa_SqinT6KB6eEXAZfD80o1uAo2jpZMVo7M5aU?e=eqbjZY',
      filename: 'ota_payload_package.tar.gz',
      sha256: '9d015fdcbabb77a9669fb8f0f6762c9a69260cd47ec4710d79de7cbdc19e9f23',
    },
  },
]

<OtaProductSelect options={productOptions} />



### On-device OTA procedure

:::note
The following operations are performed on the Jetson (via remote connection)
:::

**Step 1.** Install dependent software
```bash
sudo apt-get update
sudo apt-get install efibootmgr nvme-cli -y
```

**Step 2.** Download the OTA tool 
```bash
#Create a workspace directory
mkdir ~/ota_ws && cd ota_ws
#Download the OTA tools from Nvidia
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/ota_tools_r36.4.3_aarch64.tbz2
# Uncompress
tar xvf ota_tools_r36.4.3_aarch64.tbz2
```
After decompressing the above files, you will obtain a folder named "Linux_for_Tegra".

**Step 3.** Transfer the ota file to Jetson(This step is to be performed on your PC!)

:::info
Replace `<Jetson IP>` with your Jetson actual IP address. For example: 192..168.137.xx
Replace the path of the `ota_payload_package.tar.gz` file and the `ota_ws` path with your actual path
:::

```bash
#example:Use scp to transfer files
scp /path/to/your downloaded/ota_payload_package.tar.gz seeed@<Jetson IP>:/home/user/ota_ws
```
**Step 4.** Back up the files of the original system
```bash
cd /path/ota_ws/Linux_for_Tegra/tools/ota_tools/version_upgrade/
#The editor needs to keep a backup of the file directory that needs to be preserved.
vim ota_backup_files_list.txt
```
:::note
List out the files or folders that you want to keep.
Use absolute path!
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/backup_list.png"/>
</div>
:::

```bash
./nv_ota_preserve_data.sh
```
**Step 5.** Start OTA

```bash
cd Linux_for_Tegra/tools/ota_tools/version_upgrade
#Specify the directory of the OTA file
sudo ./nv_ota_start.sh ~/ota_ws/ota_payload_package.tar.gz
```
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sh.png"/>
</div>

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sh_finish.png"/>
</div>

After the script is executed, you can restart Jetson to initiate the OTA process.
If your device is connected to a monitor, when you restart, you will see that the monitor will display the Nvidia logo and then enter kernel overlay. The screen will remain black (a normal phenomenon) for a while, and then it will enter the OTA process.
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_process.jpg"/>
</div>

After the entire process is completed, you need to enter the system to configure the username and password.

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/update_finish.jpg"/>
</div>
**Step 6.** Post-upgrade validation

Once the device boots into JetPack 6.2:

```bash
nvbootctrl -t
sudo nvme list
cat /etc/nv_tegra_release
```
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sucess.png"/>
</div>
Ensure the reported release matches `R36 (release), REVISION: 4.3`, and confirm that your applications start as expected.
Congratulations! The OTA process was successful. The system files were also saved previously!
## Other versions of OTA (optional)
Above, we have only provided the common version of the OTA package. If you need to upgrade from the current version of OTA to another version, please refer to the following steps to generate the corresponding OTA package.
What we are demonstrating now is the upgrade from Jetpack 5.1.3 to the target version, Jetpack 6.2.

### Prepare the Target BSP(JetPack 6.2)
All commands below run on the Ubuntu PC.

**Step 1. Download NVIDIA JetPack 6.2 packages.**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**Step 2. Extract the BSP into `Linux_for_Tegra`.**

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**Step 3. Sync NVIDIA sources for JP6.2.**

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
cd ../..
```

**Step 4. Overlay Seeed customizations.**

```bash
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

**Step 5. Apply NVIDIA binaries and host dependencies.**

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo apt-get update
sudo apt-get install -y build-essential flex bison libssl-dev sshpass \
  abootimg nfs-kernel-server libxml2-utils qemu-user-static
```

**Step 6. Install the Jetson toolchain for kernel compilation.**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/toolchain/aarch64--glibc--stable-2022.08-1.tar.bz2
mkdir -p l4t-gcc
tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE=$(realpath .)/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

**Step 7. Build the kernel, DTBs, and modules.**

```bash
cd source
./nvbuild.sh
./do_copy.sh
export INSTALL_MOD_PATH=$(realpath ../rootfs/)
./nvbuild.sh -i
cd ..
```

At this point the JP6.2 BSP under `~/JP6.2/Linux_for_Tegra` (or your chosen path) is ready to be used as the TARGET BSP for the OTA generation script.

### Prepare the Base BSP (JetPack 5.1.3)

Use a clean workspace (e.g., `~/JP5.1.3/`).

**Step 1. Download JetPack 5.1.3 packages.**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/Jetson_Linux_R35.5.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/Tegra_Linux_Sample-Root-Filesystem_r35.5.0_aarch64.tbz2
```

**Step 2. Extract and copy Seeed BSP overlays.**

```bash
tar xf Jetson_Linux_R35.5.0_aarch64.tbz2 -C JP5.1.3
cd JP5.1.3
git clone -b r35.5.0 https://github.com/Seeed-Studio/Linux_for_Tegra.git
cp -rf Linux_for_Tegra/* ./Linux_for_Tegra/
```

**Step 3. Populate the root filesystem and apply binaries.**

```bash
cd Linux_for_Tegra
sudo tar xpf ../Tegra_Linux_Sample-Root-Filesystem_r35.5.0_aarch64.tbz2 -C rootfs
sudo ./apply_binaries.sh
```

**Step 4. Install the Bootlin GCC toolchain for JP5 kernel builds.**

```bash
wget https://developer.nvidia.com/embedded/jetson-linux/bootlin-toolchain-gcc-93 -O bootlin-toolchain-gcc-93.tar.bz2
mkdir -p l4t-gcc
tar xf bootlin-toolchain-gcc-93.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE_AARCH64_PATH=$(realpath .)/l4t-gcc
```

**Step 5. Build and install modules, device trees, and custom drivers.**

```bash
cd source
export INSTALL_MOD_PATH=$(realpath ../rootfs/)
./nvbuild.sh -i -r ${INSTALL_MOD_PATH}
./do_copy.sh
```

Your JP5.1.3 BSP path (for example `/home/seeed/test/5.1.3/Linux_for_Tegra`) will act as the BASE BSP during OTA package generation.

### Generate the OTA Package on the Host

Navigate to the JP6.2 workspace and run NVIDIA's OTA helper script:

```bash
cd ~/JP6.2/Linux_for_Tegra/tools/ota_tools/
./start_generate_ota_pkg.sh
```

The script will prompt for the following information:

- **BASE_BSP path**: `/home/seeed/test/5.1.3/Linux_for_Tegra`
- **TARGET_BSP path**: `/home/seeed/test/6.2/Linux_for_Tegra`
- **target_board name**: `recomputer-orin-j40mini` (use the `.conf` name that matches your device)
- **bsp_version (Rmm-n)**: `R35-5` for JetPack 5.1.3

If everything is configured correctly, the tool ends with:

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_pkg_generate.png"/>
</div>

### Perform the OTA on the Jetson Device
Refer back to the [on-device OTA procedure](#on-device-ota-procedure) for the detailed steps.


## Resources

- [Create Backup and Restore on reComputer](https://wiki.seeedstudio.com/create_backup_and_restore_on_recomputer/)
- [Seeed Jetson Serials Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed-Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/r36.4.3)

## Tech Support & Product Discussion

Thank you for choosing Seeed Studio! If you need further assistance, reach out through the following channels:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
