---
description: 本指南说明如何在 reComputer J3011 上备份和恢复系统，以便将已配置的环境和软件迁移到新设备。备份过程包括进入恢复模式、下载 JetPack BSP，并使用备份脚本复制数据。恢复过程中，需要插入新的 SSD、重新进入恢复模式并运行恢复命令。通过该流程可以高效复制已配置好的系统环境。
title: 在 reComputer 上创建备份与恢复
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
updatedAt: '2025-09-15'
url: https://wiki.seeedstudio.com/cn/create_backup_and_restore_on_recomputer/
---

# 在 reComputer 上创建备份与恢复

## 介绍

reComputer 是一款强大且紧凑的智能边缘盒子，可为边缘侧带来高达 275TOPS 的现代 AI 性能。当你已经在 reComputer 上为业务配置并安装好所需的软件和环境，并需要在另一台新的 reComputer 上复制该项目时，重新安装软件的方式效率不高。因此，本 wiki 页面将以 [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) 为例，介绍如何在 reComputer 系列上备份现有的软件和环境，方便你将其恢复并迁移到新的 reComputer 上。

:::note
我们的测试平台是 reComputer J3011，文中提供 JetPack 5.1.3 和 JetPack 6.2 作为参考。请根据你的 JetPack 版本选择相应章节。
:::

## 前置条件

- Ubuntu 主机电脑
- USB Type-C 数据传输线
- reComputer J3011（搭载 JetPack 5.1.3 或 JetPack 6.2 系统）

:::info
已在 reComputer 上安装并配置好所需的软件和应用程序。请确保这些修改不会影响设备的正常启动。建议在完成更改后重启设备以确认稳定性。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
如上图所示，我们安装了 jtop 软件，这样就可以在终端中直接使用这些命令。
<a id="Recovery"></a>
:::

## JetPack 5.1.3
### 备份系统


**步骤 1.** 将设备设置为恢复模式，请参考此 [wiki 页面](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode)。

**步骤 2.** 获取与你的 Jetson 模组对应的 JetPack BSP。对于 JetPack 5.1.3，请从 [NVIDIA 官方网站](https://developer.nvidia.com/embedded/jetson-linux-r3550) 下载 Jetson Linux R35.5.0 BSP。
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**步骤 3.** 解压 BSP 文件，以访问 Linux_for_Tegra 目录。

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>

**步骤 4.** 将 Linux_for_Tegra 的内容复制到你的 JetPack 刷机包目录（例如 mfi_recomputer-orin）。
:::note
“刷机包目录”是指在刷写系统过程中所使用的目录文件。
:::

使用 `-rn` 选项以保留已有文件：

```bash
sudo cp -rn Linux_for_Tegra/* mfi_recomputer-orin
```

**步骤 5.** 进入你的 JetPack 刷机包目录：

```bash
cd /path/to/mfi_recomputer-orin
```

**步骤 6.** 执行备份脚本，指定你的存储设备和期望的备份名称：

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin
```

:::info
-b `<target_board>` 替换为你的设备

:::

:::note
你可以进入 JetPack 刷机包目录，找到一个 `xxx.conf` 文件。
`xxx` 就是你的 `<target_board>`

```bash
ls | grep *.conf
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

耐心等待直到完成。
如果一切顺利，你将在终端中看到类似下图的内容：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
在此过程中，你的设备可能会像刷机过程一样多次重启。不建议使用虚拟机或 WSL，因为可能会导致连接丢失，从而使备份/恢复过程失败。你可能会遇到某些文件缺失的情况；此时可以打开 `recomputer-orin.conf` 并删除不存在的文件条目。
通常这些是临时的设备树 overlay 目标文件，它们不会影响备份和恢复结果。但如果你对 BSP 做过修改，则需要合并自己的 overlay 文件。
:::

### 恢复系统

**步骤 1.** 在 reComputer 中插入一块新的空白 [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**步骤 2.** 按照[前文说明](#Recovery)进入强制恢复模式。

**步骤 3.** 在主机系统上，进入你的 JetPack 刷机包目录，并在主机上执行恢复命令：  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

如果一切顺利，你将在终端中看到类似下图的内容：
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**步骤 4.** 给 Jetson 设备上电，使用我们之前设置的用户名和密码登录，并测试之前安装的一些软件。如果可以正常运行，则说明恢复成功。
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
由于我们在之前的系统中已经安装了 jtop，因此可以在新系统的终端中直接启动 jtop。

:::info
另外，以下场景已通过备份与恢复测试：  

- 将备份恢复到原始 SSD。
- 将备份恢复到不同的 SSD。  
- 在同一载板上恢复备份，Jetson 模组为同一批次，不同 SSD。

:::

## JetPack 6.2
### 备份系统

对于 JetPack 6.2（L4T 36.4.3），备份过程需要先下载已编译的 Seeed BSP 固件，并在执行备份前编译源码。

**步骤 1.** 下载已编译的 Seeed BSP 固件：[L4T-36.4.3](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/L4T36-4-3_plus.tar)

**步骤 2.** 解压下载的压缩包，并在 PC 终端中使用以下命令生成所需内容：

```bash
sudo tar xpf L4T36-4-3_plus.tar
# For example: sudo tar xpf L4T36-4-3_plus.tar

cd Linux_for_Tegra/
sudo ./apply_binaries.sh
cd ..
```

**步骤 3.** 在解压后的目录中（tar.gz 包所在位置）设置环境变量：

```bash
export ARCH=arm64 
export CROSS_COMPILE="$PWD/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-"
export PATH="$PWD/aarch64--glibc--stable-2022.08-1/bin:$PATH"
export INSTALL_MOD_PATH="$PWD/Linux_for_Tegra/rootfs/"
```

**步骤 4.** 进入源码目录并编译源码（该过程需要一定时间）：

```bash
cd Linux_for_Tegra/source
./nvbuild.sh
```

**步骤 5.** 编译完成后，复制并安装已编译的组件：

```bash
./do_copy.sh
./nvbuild.sh -i
```

**步骤 6.** 现在工作目录已经准备就绪。进入 `Linux_for_Tegra/` 目录，将设备设置为恢复模式，请参考此 [wiki 页面](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode)，并执行备份脚本：

```bash
cd ../
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin-j401
```

:::info
-b `<target_board>` 替换为你的设备。对于 JetPack 6.2，默认的 target board 为 `recomputer-orin-j401`。
:::

耐心等待直到完成。如果一切顺利，你将在终端中看到成功提示信息。

:::note
在此过程中，你的设备可能会像刷机过程一样多次重启。不建议使用虚拟机或 WSL，因为可能会导致连接丢失，从而使备份/恢复过程失败。
:::

### 恢复系统

**步骤 1.** 在 reComputer 中插入一块新的空白 [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)。

**步骤 2.** 按照[前文说明](#Recovery)进入强制恢复模式。

**步骤 3.** 在主机系统上，进入你的 `Linux_for_Tegra/` 目录，并在主机上执行恢复命令：

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin-j401
```

如果一切顺利，你将在终端中看到成功提示信息。

**步骤 4.** 给 Jetson 设备上电，使用我们之前设置的用户名和密码登录，并测试之前安装的一些软件。如果可以正常运行，则说明恢复成功。

:::info
另外，以下场景已通过备份与恢复测试：

- 将备份恢复到原始 SSD。
- 将备份恢复到不同的 SSD。
- 在同一载板上恢复备份，Jetson 模组为同一批次，不同 SSD。
:::

## 资源

- [为 J401 载板刷写 JetPack 系统](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack/)
- [reComputer J30x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 原理图](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D 文件](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson 系列目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 系列对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson 设备一览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson 示例](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-初学者指南](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
