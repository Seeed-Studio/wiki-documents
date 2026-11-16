---
description: "在 JetPack 5.1.3 和 6.2 上备份和恢复 reComputer J3011 镜像：将系统克隆到 NVMe 或 USB，然后将其写入新设备。"
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
updatedAt: '2026-05-08'
url: https://wiki.seeedstudio.com/cn/create_backup_and_restore_on_recomputer/
---

# 在 reComputer 上创建备份与恢复

## 介绍

reComputer 在紧凑的边缘设备中提供高达 275 TOPS 的 AI 性能。手动重新安装一个已配置好的设备非常耗时，因此下面的流程使用 `l4t_backup_restore.sh` 将 [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) 上 NVMe 的系统镜像读取到主机上，然后再将该镜像写入另一台设备。本文同时涵盖 JetPack 5.1.3 和 JetPack 6.2。

:::note
我们的测试平台是 reComputer J3011，JetPack 5.1.3 和 JetPack 6.2 的内容仅供参考。请根据你的 JetPack 版本选择相应章节。
:::

## 前提条件

- Ubuntu 主机电脑
- USB Type-C 数据传输线
- reComputer J3011（已安装 JetPack 5.1.3 或 JetPack 6.2 系统）

:::info
请在你的 reComputer 上安装并配置好所需的软件和应用程序。确保这些修改不会影响设备的启动功能。建议在完成更改后重启设备以确认系统稳定。

<div align="center"><img alt="在 reComputer 终端中运行的 jtop，显示已安装的 JetPack 版本" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
如上图所示，我们已经安装了 jtop 软件，因此可以直接在终端中使用这些命令。
<a id="Recovery"></a>
:::

## JetPack 5.1.3
### 备份系统


**步骤 1.** 将设备设置为恢复模式，请参考此 [wiki 页面](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack/#进入强制恢复模式)。

**步骤 2.** 获取与你的 Jetson 模组对应的 JetPack BSP。对于 JetPack 5.1.3，请从 [NVIDIA 官方网站](https://developer.nvidia.com/embedded/jetson-linux-r3550) 下载 Jetson Linux R35.5.0 BSP。
<div align="center"><img alt="用于 JetPack 5.1.3 的 NVIDIA Jetson Linux R35.5.0 BSP 下载页面" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**步骤 3.** 解压 BSP 文件以访问 Linux_for_Tegra 目录。

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img alt="解压后的 Linux_for_Tegra 目录的 ls，显示 flash.sh、apply_binaries.sh 和板卡 .conf 文件" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>

**步骤 4.** 将 Linux_for_Tegra 的内容复制到你的 JetPack 刷机包目录（例如 mfi_recomputer-orin）。
:::note
“刷机包目录”是你在刷写系统过程中使用的目录。
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
你可以进入你的 JetPack 刷机包目录，找到一个 `xxx.conf` 文件。
`xxx` 就是你的 `<target_board>`

```bash
ls | grep *.conf
```

<div align="center"><img alt="刷机包目录的 ls，其中 recomputer-orin.conf 被框出" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img alt="在主机终端启动备份后：l4t_initrd_flash.sh 正在生成 RCM 启动命令行" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

耐心等待直到完成。
如果一切顺利，你会在终端中看到类似下图的输出：

<div align="center"><img alt="备份完成，镜像已写入主机目录" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
在此过程中，你的设备可能会像刷机过程一样多次重启，不建议使用虚拟机或 WSL，因为可能会导致连接丢失，从而使备份/恢复过程失败。你可能会遇到某些文件缺失的情况；可以打开 `recomputer-orin.conf` 并删除不存在的文件。
通常这些是临时的设备树 overlay 目标文件；它们不会影响备份和恢复结果。但如果你对 BSP 做过修改，则需要合并你的 overlay 文件。
:::

### 恢复系统

**步骤 1.** 将一个新的空白 [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) 插入你的 reComputer。

<div align="center"><img alt="原始 SSD 仍在板上（被框出），旁边是新的空白 M.2 2280 SSD" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**步骤 2.** 按照[前文描述](#Recovery)进入强制恢复模式。

**步骤 3.** 在你的主机系统上，进入 JetPack 刷机包目录，并在主机上执行恢复命令：  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

如果一切顺利，你会在终端中看到类似下图的输出：
<div align="center"><img alt="恢复命令完成，镜像已写回 NVMe 硬盘" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**步骤 4.** 给 Jetson 设备上电，使用我们之前设置的用户名和密码登录，并测试之前安装的一些软件。如果运行正常，则说明恢复成功。
<div align="center"><img alt="在恢复后的系统中再次可用的 jtop，确认镜像已成功启动" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
由于我们在之前的系统中已经安装了 jtop，因此可以在新系统的终端中直接启动 jtop。

:::info
另外，以下备份与恢复场景已通过测试：  

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

**步骤 6.** 现在工作目录已经准备就绪。进入 `Linux_for_Tegra/` 目录，将设备设置为恢复模式，请参考此 [wiki 页面](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode) 并执行备份脚本：

```bash
cd ../
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin-j401
```

:::info
-b `<target_board>` 替换为你的设备。对于 JetPack 6.2，默认的 target board 为 `recomputer-orin-j401`。
:::

耐心等待直到完成。如果一切顺利，你会在终端中看到成功提示信息。

:::note
在此过程中，你的设备可能会像刷机过程一样多次重启，不建议使用虚拟机或 WSL，因为可能会导致连接丢失，从而使备份/恢复过程失败。
:::

### 恢复系统

**步骤 1.** 将一个新的空白 [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) 插入你的 reComputer。

**步骤 2.** 按照[前文描述](#Recovery)进入强制恢复模式。

**步骤 3.** 在你的主机系统上，进入 `Linux_for_Tegra/` 目录，并在主机上执行恢复命令：

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin-j401
```

如果一切顺利，你会在终端中看到成功提示信息。

**步骤 4.** 给 Jetson 设备上电，使用我们之前设置的用户名和密码登录，并测试之前安装的一些软件。如果运行正常，则说明恢复成功。

:::info
另外，以下备份与恢复场景已通过测试：

- 将备份恢复到原始 SSD。
- 将备份恢复到不同的 SSD。
- 在同一载板上恢复备份，Jetson 模组为同一批次，不同 SSD。
:::

## 资源

- [将 JetPack OS 刷写到 J401 载板](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack/)
- [reComputer J30x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 原理图](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D 文件](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson 系列产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 系列对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson 设备一览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson 示例](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-for-Beginners](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## 常见问题

**备份需要在哪种主机上运行？**
一台运行 Ubuntu 的主机，通过 USB Type-C 线连接到 reComputer。不要在虚拟机或 WSL 中运行——在此过程中设备会重启多次，一旦 USB 连接中断，就会导致镜像只写了一半。

**`-b` 和 `-r` 参数有什么作用？**
`-b` 会从模组中读取系统镜像到烧录包目录；`-r` 会将镜像写回 NVMe。两者都需要使用 `-e nvme0n1` 指定存储设备，以及目标板卡名称：在 JetPack 5.1.3 上为 `recomputer-orin`，在 JetPack 6.2 上为 `recomputer-orin-j401`。

**备份因缺少文件错误而中止。**
`recomputer-orin.conf` 中引用的临时设备树覆盖对象可能不存在。从该 `.conf` 文件中删除这些行并重新运行——除非你修改过 BSP，否则它们不会影响镜像；如果你修改过 BSP，则应改为合并你自己的 overlay。

**镜像可以恢复到不同的 SSD 或不同的设备上吗？**
可以。已经测试过恢复到原始 SSD、不同的 SSD，以及同一载板和模组批次的另一台设备。不同模组 SKU 属于不同镜像，不在适用范围内。

## 相关资源

- [将 JetPack 烧录到 reComputer J4012](/cn/reComputer_J4012_Flash_Jetpack/)
- [在 reComputer 上部署 OTA 更新](/cn/deploy_ota_on_recomputer/)
- [reComputer J3011 产品页面](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html)
- [Jetson Linux R35.5.0 BSP](https://developer.nvidia.com/embedded/jetson-linux-r3550)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
