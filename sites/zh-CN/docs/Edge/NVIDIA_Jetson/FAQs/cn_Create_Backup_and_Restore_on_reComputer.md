---
description: 本指南介绍如何在 reComputer J3011 上备份和恢复系统，以便将您配置的环境和软件传输到新设备。备份过程包括进入恢复模式、下载 JetPack BSP，并使用备份脚本复制数据。在恢复过程中，插入新的 SSD，重新进入恢复模式，并运行恢复命令。此过程允许高效复制已配置的系统环境。
title: 在 reComputer 上创建备份和恢复
keywords:
- jetson
- BSP
- L4T
- Backup
- Restore
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /cn/create_backup_and_restore_on_recomputer
last_update:
  date: 04/11/2025
  author: Zibo
---

# 在 reComputer 上创建备份和恢复

## 介绍

reComputer 是一款功能强大且紧凑的智能边缘盒，可为边缘带来高达 275TOPS 的现代 AI 性能。当您在 recomputer 上配置并安装了业务所需的软件和环境，并需要从另一台新的 recomputer 复制项目时，重新安装软件并不高效。因此，本 wiki 页面将使用 [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) 来介绍如何备份 recomputer 系列上现有的软件和环境，方便您恢复并移植到新的 recomputer。

:::note
我们的测试平台是 reComputer J3011，提供 JetPack 5.1.3 供参考。
:::

## 先决条件

- Ubuntu 主机
- USB Type-C 数据传输线
- reComputer J3011（带有 JetPack 5.1.3 操作系统）

:::info
在您的 reComputer 上安装并配置必要的软件和应用程序。确保这些修改不会影响设备的启动功能。建议在进行更改后重启设备以确认稳定性。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
如上面的截图所示，我们安装了 jtop 软件，我们可以直接在终端上使用这些命令。
<a id="Recovery"></a>
:::

## 备份系统

**步骤 1.** 将设备设置为恢复模式，请参考此 [wiki 页面](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode)。

**步骤 2.** 获取与您的 Jetson 模块对应的 JetPack BSP。对于 JetPack 5.1.3，从 [NVIDIA 官方网站](https://developer.nvidia.com/embedded/jetson-linux-r3550) 下载 Jetson Linux R35.5.0 BSP。
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**步骤 3.** 解压 BSP 文件以访问 Linux_for_Tegra 目录。

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>
  
**步骤 4.** 将 Linux_for_Tegra 的内容复制到您的 JetPack 刷写包目录（例如，mfi_recomputer-orin）。
:::note
"刷写包目录"是在刷写系统过程中使用的目录文件。
:::

使用 `-rn` 选项来保留现有文件：

```bash
sudo cp -rn Linux_for_Tegra/* mfi_recomputer-orin
```

**步骤 5.** 导航到你的 JetPack 刷机包目录：

```bash
cd /path/to/mfi_recomputer-orin
```

**步骤 6.** 执行备份脚本，指定您的存储设备和所需的备份名称：

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin
```

:::info
-b `<target_board>` 替换为您的设备

:::

:::note
您可以导航到您的 Jetpack 刷写包目录并找到一个 `xxx.conf` 文件。
`xxx` 是您的 `<target_board>`

```bash
ls | grep *.conf
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

耐心等待直到完成。
如果一切顺利，您将在终端中看到类似下面截图的内容：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
在此过程中，您的设备可能会像刷写过程一样重启多次，不建议您使用虚拟机或 WSL，因为这可能会丢失连接并导致备份/恢复过程失败。您可能会遇到一些缺失的文件；您可以打开 `recomputer-orin.conf` 并删除不存在的文件。
通常这些是临时的设备树覆盖对象文件；它们不会影响备份和恢复结果。但如果您对 BSP 进行了修改，您需要合并您的覆盖文件。
:::

## 恢复系统

**步骤 1.** 将一个新的、空的 [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) 插入您的 reComputer。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**步骤 2.** 如[之前所述](#Recovery)进入强制恢复模式。

**步骤 3.** 在您的主机系统上，导航到您的 JetPack 刷写包目录并在主机上执行恢复命令：  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

如果一切顺利，您将在终端中看到类似下面截图的内容：
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**步骤 4.** 启动 jetson 设备，使用我们之前设置的用户名和密码。测试我们之前安装的一些软件。如果正常工作，那么我们的恢复就成功了。
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
因为我们在之前的系统中安装了 jtop，所以可以直接在新系统的终端中启动 jtop。

:::info
此外，以下情况已经过备份和恢复测试：  

- 将备份恢复到原始 SSD。
- 将备份恢复到不同的 SSD。  
- 将备份恢复到相同的载板，使用同一批次的 Jetson 模块，不同的 SSD。

:::

## 资源

- [将 JetPack 操作系统刷写到 J401 载板](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack/)
- [reComputer J30x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 原理图](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D 文件](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson 系列产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 系列对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson 设备单页介绍](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson 示例](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson 入门指南](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

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
