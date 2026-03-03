---
description: 从现有 Jetson 开发环境创建自定义 BSP
title: 从 Jetson 开发环境创建自定义 BSP 包
keywords:
- reComputer
- BSP
- backup
- Jetson
- JetPack
- custom image
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /make_diy_bsp_for_jetson
last_update:
  date: 01/04/2026
  author: Dayu
---

本 wiki 指南演示了如何从现有 Jetson 设备克隆完整的开发环境，并创建可刷写的 BSP（板级支持包），该 BSP 可用于在其他 Jetson 设备上复制相同的环境。使用此方法创建的 BSP 在刷写到其他 Jetson 设备时能够实现完整的环境克隆。

本指南以 JetPack 6.2 为例。

## 前提条件

- 源 Jetson 设备（已配置开发环境）
- Ubuntu 22.04 主机电脑
- USB Type-C 数据传输线

:::danger
reComputer Classic 系列的散热不足以支持 MAXN 超级模式。如果您在 reComputer Classic 系列设备上刷写了 JetPack 6.2，请不要启用 MAXN 模式。
:::

## 1. 在 PC 上准备工作目录

从下表下载所需的工作目录包：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack 版本</th>
      <th>下载链接 ⬇️</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      <td>6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDNJYXWuLpRTL-8U39aMd4UAcrfcWTjtkSjCsJ3ZisTFck?e=s7PNxX">下载</a></td>
    </tr>
    <tr>
      <td>6.2</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA9G3wk_0LMQ65sJpp7_HQYAf1ShPRNi0WRSFGWNU3_XN8?e=uQFpeH">下载</a></td>
    </tr>
    <tr>
      <td>6.2.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBqETUyZgfSSrL0w7OEp3q-AbTyZVWbh9l5utvtQPsfpZ0?e=T3TiLg">下载</a></td>
    </tr>
  </tbody>
</table>
</div>

在您的 PC 上安装所需的依赖项：

```bash
sudo apt-get update -y
sudo apt-get install -y \
  build-essential flex bison libssl-dev \
  sshpass abootimg nfs-kernel-server \
  libxml2-utils qemu-user-static
```

解压下载的包，并在您的 PC 终端中使用以下命令生成必要的内容：

```bash
sudo tar xpf xxx.tar.gz
# For example: sudo tar xpf L4T36-4-3_plus.tar

cd Linux_for_Tegra/
sudo ./apply_binaries.sh
cd ..
```

在解压的目录中设置环境变量（tar.gz 包所在的位置）：

```bash
export ARCH=arm64 
export CROSS_COMPILE="$PWD/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-"
export PATH="$PWD/aarch64--glibc--stable-2022.08-1/bin:$PATH"
export INSTALL_MOD_PATH="$PWD/Linux_for_Tegra/rootfs/"
```

导航到源目录并编译源代码（此过程需要一些时间）：

```bash
cd Linux_for_Tegra/source
./nvbuild.sh
```

编译完成后，复制并安装编译的组件：

```bash
./do_copy.sh
./nvbuild.sh -i
```

工作目录现已准备就绪。后续步骤将在 `Linux_for_Tegra/` 目录中执行，以从 Jetson 设备克隆完整的开发环境并创建 BSP。

## 2. 生成自定义 BSP

使用 USB Type-C 数据线通过刷写端口将您的源 Jetson 设备连接到 PC，并确保您的源 Jetson 处于恢复模式。

有关进入恢复模式的说明，请参考：
[https://wiki.seeedstudio.com/cn/flash/jetpack_to_selected_product/](https://wiki.seeedstudio.com/flash/jetpack_to_selected_product/)

选择您的设备并展开 `3. Enter Recovery mode` 部分。您也可以在同一链接中找到有关设备刷写端口的信息。

:::info
确保您的 PC 有足够的磁盘空间。BSP 大小通常需要大约两倍于您的 Jetson 开发环境所使用的存储空间。
:::

在您的 PC 上导航回 `Linux_for_Tegra/` 目录，并执行以下命令从 Jetson 设备复制完整的开发环境：

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b -c <board-name>

# For example:
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b -c recomputer-orin-j401
```

将 `<board-name>` 替换为您设备的名称。您需要提供一个有效的 `device name` 作为参数，可以通过检查 `Linux_for_Tegra` 根目录中的 .conf 文件名来找到。这些文件名的前缀对应有效的 `device name` 参数。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png"/></div>

**L4T 36.4.3** 的可用设备名称参数如下。请注意，**j40** 和 **j30** 系列使用相同的配置文件：

- recomputer-industrial-orin-j201（recomputer-industrial-orin-j40/j30 也使用此 `device name` 作为参数）
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401

将克隆的内容打包成可刷写的 BSP（在此过程中备份设备必须保持在恢复模式）：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --use-backup-image --no-flash --network usb0 --massflash 5 <board-name> internal

# For example:
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --use-backup-image --no-flash --network usb0 --massflash 5 recomputer-orin-j401 internal
```

将 `<board-name>` 替换为您的设备名称，与前一步类似。

此过程需要相当长的时间。完成后，将在 `Linux_for_Tegra/` 目录中生成带有 `mfi_` 前缀的文件和一个 `tar.gz` 压缩包。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/generate-bsp.png"/></div>

`mfi_xxxxx.tar.gz` 文件是可刷写的 BSP。解压后，它会创建 `mfi_xxxxx` 目录。

**（可选）** 如果您需要生成适用于工厂生产的 QSPI 闪存格式 BSP，请按如下方式修改 BSP 创建参数（在此过程中备份设备必须保持在恢复模式）：

```bash
sudo BOARDID=$BOARDID BOARDSKU=$BOARDSKU FAB=$FAB BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU ./tools/kernel_flash/l4t_initrd_flash.sh \
--external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
-p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash --massflash 5 --showlogs \
--network usb0 <board-name> internal

# For example:
sudo BOARDID=$BOARDID BOARDSKU=$BOARDSKU FAB=$FAB BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU ./tools/kernel_flash/l4t_initrd_flash.sh \
--external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
-p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash --massflash 5 --showlogs \
--network usb0 recomputer-orin-super-j401 internal
```

## 3. 刷写和验证

从前面的步骤获得 tar.gz BSP 包后，您可以使用单个命令将其解压并刷写到其他目标 Jetson 设备，实现完整的开发环境克隆。**此 BSP 与环境无关，可以复制到其他 PC 上使用。**

严格按照以下命令格式解压包：

```bash
sudo tar xpf mfi_xxxx.tar.gz
```

导航到解压的目录并执行刷写过程：

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

刷写也需要目标 Jetson 处于恢复模式。有关详细的刷写步骤，请参考同一链接（**无需下载新的 BSP**）：
[https://wiki.seeedstudio.com/cn/flash/jetpack_to_selected_product/](https://wiki.seeedstudio.com/flash/jetpack_to_selected_product/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>