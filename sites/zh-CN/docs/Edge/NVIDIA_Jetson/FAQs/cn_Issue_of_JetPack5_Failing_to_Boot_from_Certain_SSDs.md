---
description: 解决 JetPack5 无法从某些 SSD 启动的问题
title: 解决 JetPack5 无法从某些 SSD 启动的问题
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /cn/issue_of_jetpack5_failing_to_boot_from_certain_ssd
last_update:
  date: 07/30/2025
  author: Dayu
---

**本 wiki 简要介绍了 JetPack 的组件，帮助您快速了解 JetPack 与 Jetson 之间的关系，并回答一些最常见的问题。**

## 1. 问题

如果将 JetPack 5 刷写到 Jetson 的 SSD 上，即使刷写过程成功完成，系统仍有一定概率无法启动。启动过程中可能出现以下错误：
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/other/jetpack_boot_failure.jpg"/></div>

这个问题在 NVIDIA 官方论坛上也有记录。可能是由于文件系统不兼容或刷写过程中擦除不完整导致的启动失败。
到目前为止，**在 Jetson 设备上刷写和使用 JetPack 6 时，尚未观察到类似问题。**

## 2. 解决方案
**这里提供两种解决方案供您参考。您可以根据具体情况选择：**

###  方案 A

首先，从 Jetson 设备中取出无法正常启动的 SSD，使用 SSD 硬盘盒（任何类似下图所示的兼容硬盘盒）将其连接到您的 PC。然后对驱动器进行格式化。
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/Jetson/nvme-faslhing.jpg"/></div>

然后，在终端中输入以下命令来定位挂载到 PC 的 SSD，它可能被命名为 `sda`、`sdb` 等：
```bash
lsblk
```

如果您不确定哪个名称对应您插入的 SSD，可以检查挂载目录的内容：
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/ssd-mount.jpg
"/></div>

以图中的挂载目录为例，检查是否存在 **Jetson 特定的设备树**：
```bash
ls /your_path/boot
# 例如：ls /media/darklee/bc5769eb-36d6-4c42-86d1-565554112264/boot
```

如果这是来自 Jetson 的 SSD，您将看到类似下图的结果：
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device-tree-example.png
"/></div>

**您可以继续检查 SSD 挂载目录中其他文件的内容，以进一步确认它属于 Jetson。**

:::danger
在格式化 Jetson 的 SSD 之前，请仔细检查以确保准确性。如果 SSD 包含重要数据，请务必备份。确保您知道自己在做什么。
:::

确认这是 Jetson 的 SSD 并完成必要的备份后，对 SSD 进行完全格式化。
`bs=100M`、`count=800` 格式化前 **80GB** 的空间。**如果您的 SSD 容量更大，可以相应增加格式化空间。**
```bash
sudo wipefs -a /dev/sda
sudo dd if=/dev/zero of=/dev/sda bs=100M count=800
```
格式化完成后，将 SSD 重新安装到 Jetson 中。如果 SSD 已被彻底擦除，理论上刷写 JetPack 5 应该可以防止任何启动失败。

参考此 [wiki](https://wiki.seeedstudio.com/cn/flash/jetpack_to_selected_product/) 获取刷写 Jetson 的说明。

###  方案 B

参考此 [wiki](/cn/how_to_build_the_source_code_project_for_seeed_jetson_bsp) 准备用于刷写的源代码项目。

当使用 `--erase-all` 参数执行 `./tools/kernel_flash/l4t_initrd_flash.sh` 时，固态硬盘将在刷写过程中被完全擦除。

## 资源

- [Seeed L4T 源代码](https://github.com/Seeed-Studio/Linux_for_Tegra)

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