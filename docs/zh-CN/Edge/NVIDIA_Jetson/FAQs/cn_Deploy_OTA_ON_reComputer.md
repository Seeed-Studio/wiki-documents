---
description: 本指南介绍如何创建端到端的 OTA 升级包，将 reComputer mini J4012 从 JetPack 5.1.3 升级到 JetPack 6.2，包括 BSP 准备、包生成和设备部署。
title: 在 reComputer 上部署 OTA
keywords:
- jetson
- OTA
- JetPack
- reComputer
- BSP
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /cn/deploy_ota_on_recomputer
last_update:
  date: 12/05/2025
  author: Zibo
---

# 在 reComputer 上部署 OTA

## 简介

NVIDIA Jetson 空中升级（OTA）更新允许开发者通过网络连接远程将边缘设备从旧版 JetPack 升级到新版本，无需主机 PC 或物理 USB 重新刷写。
本 wiki 将演示如何在 reComputer 上执行 OTA（空中升级）更新。

:::note
演示平台：reComputer mini J4012，从 JetPack 5.1.3 → JetPack 6.2 OTA。其他基于 Orin 的 reComputer 可以遵循相同的逻辑，但需要调整与您的载板匹配的 `<target_board>` 名称。
:::

## 前提条件
- Ubuntu x86_64 PC
- [reComputer mini J4012](https://www.seeedstudio.com/reComputer-Mini-J4012-with-Extension-p-6353.html)

## 快速执行 OTA

这里我们为 Seeed 开发板提供了预编译的升级包，
从 Jetpack 5.1.3 升级到 Jetpack 6.2。如果您计划直接通过 OTA 从 Jetpack 5.1.3 升级到 Jetpack 6.2，
您可以简单地下载并快速进行升级。


import OtaProductSelect from '@site/src/components/jetson/OtaProductSelect';

export const productOptions = [
  {
    value: 'j4012mini',
    label: 'reComputer mini',
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg',
    otaDescription: '适用于 reComputer mini 系列的即用型 JP5.1.3 → JP6.2 OTA 载荷',
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
    otaDescription: '适用于 reComputer classic J30/40/401B 的即用型 JP5.1.3 → JP6.2 OTA 载荷',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDRxYlSWuWvRbELB8tyGQ88AUa3cDYrNoj0kAyyzU3YTFA?e=P60b7N',
      filename: 'ota_payload_package.tar.gz',
      sha256: 'b0dde3e8fb5ac3838d8d569def1a373949ca30f59f52e30197f872c95aa7a777',
    },
  },
  {
    value: 'j4012industrial',
    label: 'reComputer industrial 系列',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg',
    otaDescription: '适用于 reComputer Industrial 系列的即用型 JP5.1.3 → JP6.2 OTA 载荷',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC1cwAhknjjRLGyVc_Ze7QOAUAQ7KSi3IkzUSZ3XD45gL4?e=Q68dEF',
      filename: 'ota_payload_package.tar.gz',
      sha256: '31f17fe8606b19730c3d5a29b8cf96db99dff587de93136dbd74f39c71aeb4e9',
    },
  },
  {
    value: 'j4012reserver',
    label: 'reServer industrial 系列',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110247-reserver-industrial-j4012-first.jpg',
    otaDescription: '适用于 reServer industrial 系列的即用型 JP5.1.3 → JP6.2 OTA 载荷。',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBGOUJ8bXdYQbfRVpP9y_QHAdO-UoETL5AlRco6eTWg_Kg?e=loYpgD',
      filename: 'ota_payload_package.tar.gz',
      sha256: '879c2ab65019955ee798479d5303d91df22d496215657ea132dcfd3a11e46d24',
    },
  },
  {
    value: 'j501-carrier A GX-Orin',
    label: 'reServer industrial J501 AGX-Orin 带 GMSL',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_1.jpg',
    otaDescription: '适用于带 GMSL 的 reServer industrial J501 的即用型 JP5.1.3 → JP6.2 OTA 载荷。',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBhfhZjS7orSLpp2ZS_CmhcAeGMpeh9xFsOJV7op2b0VIY?e=AgpgCt',
      filename: 'ota_payload_package.tar.gz',
      sha256: '83deb4d1a5f5a999c4cfb08581baf4fb4754cab5f867ae2809e0d03f1d817b60',
    },
  },
  {
    value: 'j501-carrier AGX-Orin',
    label: 'reServer industrial J501 AGX-Orin 不带 GMSL',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_1.jpg',
    otaDescription: '适用于不带 GMSL 的 reServer industrial J501 的即用型 JP5.1.3 → JP6.2 OTA 载荷。',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC6wipGORa_SqinT6KB6eEXAZfD80o1uAo2jpZMVo7M5aU?e=eqbjZY',
      filename: 'ota_payload_package.tar.gz',
      sha256: '9d015fdcbabb77a9669fb8f0f6762c9a69260cd47ec4710d79de7cbdc19e9f23',
    },
  },
]

<OtaProductSelect options={productOptions} lang="zh" />



### 设备端 OTA 流程

:::note
以下操作在 Jetson 上执行（通过远程连接）
:::

**步骤 1.** 安装依赖软件
```bash
sudo apt-get update
sudo apt-get install efibootmgr nvme-cli -y
```

**步骤 2.** 下载 OTA 工具
```bash
#Create a workspace directory
mkdir ~/ota_ws && cd ota_ws
#Download the OTA tools from Nvidia
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/ota_tools_r36.4.3_aarch64.tbz2
# Uncompress
tar xvf ota_tools_r36.4.3_aarch64.tbz2
```
解压上述文件后，您将获得一个名为 "Linux_for_Tegra" 的文件夹。

**步骤 3.** 将 ota 文件传输到 Jetson（此步骤在您的 PC 上执行！）

:::info
将 `<Jetson IP>` 替换为您的 Jetson 实际 IP 地址。例如：192..168.137.xx
将 `ota_payload_package.tar.gz` 文件的路径和 `ota_ws` 路径替换为您的实际路径
:::

```bash
#example:Use scp to transfer files
scp /path/to/your downloaded/ota_payload_package.tar.gz seeed@<Jetson IP>:/home/user/ota_ws
```
**步骤 4.** 备份原系统文件
```bash
cd /path/ota_ws/Linux_for_Tegra/tools/ota_tools/version_upgrade/
#The editor needs to keep a backup of the file directory that needs to be preserved.
vim ota_backup_files_list.txt
```
:::note
列出您想要保留的文件或文件夹。
使用绝对路径！
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/backup_list.png"/>
</div>
:::

```bash
./nv_ota_preserve_data.sh
```
**步骤 5.** 开始 OTA

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

脚本执行完成后，您可以重启 Jetson 以启动 OTA 过程。
如果您的设备连接了显示器，重启时您会看到显示器显示 Nvidia 标志，然后进入内核覆盖。屏幕会保持黑屏（正常现象）一段时间，然后进入 OTA 过程。
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_process.jpg"/>
</div>

整个过程完成后，您需要进入系统配置用户名和密码。

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/update_finish.jpg"/>
</div>
**步骤 6.** 升级后验证

设备启动到 JetPack 6.2 后：

```bash
nvbootctrl -t
sudo nvme list
cat /etc/nv_tegra_release
```
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sucess.png"/>
</div>
确保报告的版本匹配 `R36 (release), REVISION: 4.3`，并确认您的应用程序按预期启动。
恭喜！OTA 过程成功。系统文件之前也已保存！
## 其他版本的 OTA（可选）
上面，我们只提供了常见版本的 OTA 包。如果您需要从当前版本的 OTA 升级到另一个版本，请参考以下步骤生成相应的 OTA 包。
我们现在演示的是从 Jetpack 5.1.3 升级到目标版本 Jetpack 6.2。

### 准备目标 BSP（JetPack 6.2）
以下所有命令在 Ubuntu PC 上运行。

**步骤 1. 下载 NVIDIA JetPack 6.2 包。**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**步骤 2. 将 BSP 解压到 `Linux_for_Tegra`。**

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**步骤 3. 同步 JP6.2 的 NVIDIA 源码。**

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
cd ../..
```

**步骤 4. 覆盖 Seeed 自定义内容。**

```bash
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

**步骤 5. 应用 NVIDIA 二进制文件和主机依赖项。**

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo apt-get update
sudo apt-get install -y build-essential flex bison libssl-dev sshpass \
  abootimg nfs-kernel-server libxml2-utils qemu-user-static
```

**步骤 6. 安装用于内核编译的 Jetson 工具链。**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/toolchain/aarch64--glibc--stable-2022.08-1.tar.bz2
mkdir -p l4t-gcc
tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE=$(realpath .)/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

**步骤 7. 构建内核、DTB 和模块。**

```bash
cd source
./nvbuild.sh
./do_copy.sh
export INSTALL_MOD_PATH=$(realpath ../rootfs/)
./nvbuild.sh -i
cd ..
```

此时，`~/JP6.2/Linux_for_Tegra`（或您选择的路径）下的 JP6.2 BSP 已准备好用作 OTA 生成脚本的 TARGET BSP。

### 准备基础 BSP（JetPack 5.1.3）

使用一个干净的工作空间（例如 `~/JP5.1.3/`）。

**步骤 1. 下载 JetPack 5.1.3 软件包。**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/Jetson_Linux_R35.5.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/Tegra_Linux_Sample-Root-Filesystem_r35.5.0_aarch64.tbz2
```

**步骤 2. 提取并复制 Seeed BSP 覆盖文件。**

```bash
tar xf Jetson_Linux_R35.5.0_aarch64.tbz2 -C JP5.1.3
cd JP5.1.3
git clone -b r35.5.0 https://github.com/Seeed-Studio/Linux_for_Tegra.git
cp -rf Linux_for_Tegra/* ./Linux_for_Tegra/
```

**步骤 3. 填充根文件系统并应用二进制文件。**

```bash
cd Linux_for_Tegra
sudo tar xpf ../Tegra_Linux_Sample-Root-Filesystem_r35.5.0_aarch64.tbz2 -C rootfs
sudo ./apply_binaries.sh
```

**步骤 4. 安装用于 JP5 内核构建的 Bootlin GCC 工具链。**

```bash
wget https://developer.nvidia.com/embedded/jetson-linux/bootlin-toolchain-gcc-93 -O bootlin-toolchain-gcc-93.tar.bz2
mkdir -p l4t-gcc
tar xf bootlin-toolchain-gcc-93.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE_AARCH64_PATH=$(realpath .)/l4t-gcc
```

**步骤 5. 构建并安装模块、设备树和自定义驱动程序。**

```bash
cd source
export INSTALL_MOD_PATH=$(realpath ../rootfs/)
./nvbuild.sh -i -r ${INSTALL_MOD_PATH}
./do_copy.sh
```

您的 JP5.1.3 BSP 路径（例如 `/home/seeed/test/5.1.3/Linux_for_Tegra`）将在 OTA 软件包生成期间充当 BASE BSP。

### 在主机上生成 OTA 软件包

导航到 JP6.2 工作空间并运行 NVIDIA 的 OTA 辅助脚本：

```bash
cd ~/JP6.2/Linux_for_Tegra/tools/ota_tools/
./start_generate_ota_pkg.sh
```

脚本将提示输入以下信息：

- **BASE_BSP 路径**：`/home/seeed/test/5.1.3/Linux_for_Tegra`
- **TARGET_BSP 路径**：`/home/seeed/test/6.2/Linux_for_Tegra`
- **target_board 名称**：`recomputer-orin-j40mini`（使用与您的设备匹配的 `.conf` 名称）
- **bsp_version (Rmm-n)**：JetPack 5.1.3 使用 `R35-5`

如果一切配置正确，工具将以以下内容结束：

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_pkg_generate.png"/>
</div>

### 在 Jetson 设备上执行 OTA
请参考[设备上 OTA 程序](#设备上OTA程序)了解详细步骤。


## 资源

- [在 reComputer 上创建备份和恢复](https://wiki.seeedstudio.com/cn/create_backup_and_restore_on_recomputer/)
- [Seeed Jetson 系列目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed-Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/r36.4.3)

## 技术支持与产品讨论

感谢您选择 Seeed Studio！如果您需要进一步的帮助，请通过以下渠道联系我们：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
