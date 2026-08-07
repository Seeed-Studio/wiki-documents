---
description: Jetson 常见问题
title: Jetson 使用常见问题解答
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_FAQ
last_update:
  date: 07/15/2026
  author: Seraphina
createdAt: '2025-04-11'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/cn/Jetson_FAQ/
---


本文档包含所有与 Jetson 系列产品相关的常见问题。如果你在使用 Jetson 时遇到任何问题，这将对你非常有帮助。

#### Q1: 安装问题排查

详情请点击[这里](/cn/Troubleshooting_Installation)

#### Q2: 收到的 reComputer 中 eMMC 剩余空间只有约 2GB，如何解决空间不足的问题？

详情请点击[这里](/cn/solution_of_insufficient_space)

#### Q3: 如何解决 reComputer 与 VEYE 相机之间的兼容性问题？

详情请点击[这里](/cn/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera)

#### Q4: 如何解决 IMX477 相机与 A603 载板之间的兼容性问题？

详情请点击[这里](/cn/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board)

#### Q5: 如何获取 reComputer J30/J40 的系统日志？

详情请点击[这里](/cn/get_the_system_log_of_recomputer_j30_and_j40)

#### Q6: Jetson 刷机过程中常见的刷机错误。

详情请点击[这里](/cn/usb_timeout_during_flash)

#### Q7: 刷机后无法使用 USB-A 接口、以太网接口，或者没有 HDMI 显示。
**A:** 请检查文件完整性（例如，我们提供了 SHA256 校验和）。对于某些载板（尤其是 A60X 系列），请确保驱动补丁已成功复制/应用到 **Linux_for_tegra** 目录中。注意有些文件需要 **sudo** 权限，在复制目录时，请确保命令中包含 **-r** 参数。

#### Q8: 在执行 "sudo apt-get update && sudo apt-get upgrade" 命令后，系统崩溃/无法启动/黑屏/外设驱动丢失。
**A:** 这些问题可以归纳为：**“为什么在自定义载板上不能使用 apt upgrade 升级系统？”** 简单来说：在 **自定义/第三方** 载板上**不要**运行 apt upgrade 命令。此外，请避免运行任何包含 apt upgrade 命令的脚本，或在 Ubuntu 中使用带图形界面的更新工具。从服务器获取的 Debian 软件包并不会考虑我们自定义载板的具体设计，强制升级可能导致不兼容，从而使设备变砖。该升级流程仅与官方开发套件兼容。要解决这些问题，请按照我们的指南重新刷写 JetPack。

#### Q9: 如果你们说不能执行 apt upgrade，那我该如何升级软件包？如果不升级软件会有安全风险吗？

详情请点击[这里](/cn/upgrade_software_packages_for_jetson)

<!-- #### Q10: How to use the OTA (Over-the-Air) method to upgrade the system version of the Jetson device. 

For details, please click [here](/cn/updating_jetpack_with_ota) -->

#### Q11: Seeed 对 NVIDIA 的 Jetson BSP 做了哪些修改。

详情请点击[这里](/cn/differences_of_l4t_between_seeed_and_nvidia)

#### Q12: 如何在 Jetson-nano 上启用 SPI 接口？
详情请点击[这里](/cn/enable_spi_interface_on_jetsonnano)

#### Q13: 为什么有时在完成 Jetson 刷机后，系统无法从 SSD 启动？
该问题目前在刷写 JetPack 5 时会出现，NVIDIA 已有官方文档说明。解决方案请点击[这里。](/cn/issue_of_jetpack5_failing_to_boot_from_certain_ssd)

#### Q14: 如何为 Seeed 的 Jetson BSP 构建源码工程？
详情请点击[这里](/cn/how_to_build_the_source_code_project_for_seeed_jetson_bsp)

#### Q15: 为什么不能在 reComputer/reServer 上执行 `apt upgrade` 命令？
**reComputer/reServer** 的内核和驱动都是定制的。如果执行 `apt upgrade` 命令，一些与内核和驱动相关的软件包可能会被 NVIDIA 官方资源替换，从而导致软件兼容性问题。<mark>因此，请不要在任何第三方 Jetson 平台上运行 `apt upgrade`。</mark>

你可以参考以下说明锁定相关的 APT 源。这样即使不小心执行了 apt upgrade，其影响也会被降到最低：
```bash
sudo apt-mark hold <package-name>

### For example: 
sudo apt-mark hold nvidia-l4t-core
```

#### Q16: 如果 reComputer/reServer 中没有所需的 `.ko` 驱动模块，该如何编译可用的驱动？

详情请点击[这里](/cn/how_to_build_the_ko_module_for_seeed_jetson)

#### Q17：如何在 Jetson（JetPack 6）上挂载使用 exFAT 格式化的外置硬盘？

首先，安装依赖：
```
sudo apt install build-essential autoconf automake libtool pkg-config
sudo apt install git libfuse-dev
```

然后从源码克隆并构建 exFAT 驱动：
```
git clone https://github.com/relan/exfat
cd exfat
autoreconf --install
./configure
make
sudo make install
```

接下来，将磁盘手动挂载到本地目录：
```
lsblk   # Check the device name of your external hard drive

sudo mkdir /media/seeed/tmp-exfat   # Create a mount point
sudo mount.exfat /dev/sda3 /media/seeed/tmp-exfat/
```

这样就会将使用 exFAT 格式化的外置硬盘挂载到 `/media/seeed/tmp-exfat/`，从而可以在 Jetson 上正常访问。

#### Q18：如何在刷写镜像前对 Jetson 的磁盘进行加密？

详情请点击[这里](/cn/how_to_encrypt_the_disk_for_jetson)

#### Q19：如何在 Jetson 上与 EtherCAT 设备建立通信？

详情请点击[这里](/cn/how_to_establish_the_ethercat_on_jetson)

#### Q20：我没有修改任何与 Jetson 内核相关的内容，但在启动过程中 Jetson 报告了与 UUID 相关的错误，然后进入了恢复终端。

该问题的解决方案：请点击[这里](/cn/deal_the_issue_of_UUID)

#### Q21: 如何在 NVIDIA Jetson 设备上使用 IMX219 相机？

详情请点击[这里](/cn/how_to_use_camera_imx219)

#### Q22: JetPack 7.2 为 Jetson AGX Orin 的推理性能带来了哪些变化？

详情请点击[这里](/cn/jetpack72_deep_dive)

#### Q23: 升级到 JetPack 7.2 后，如何恢复 Intel AX210/AX200 或 Realtek RTL8852BE 等 Wi-Fi 模块？

详情请点击[这里](/cn/jetpack72_ax210_ax200_wifi_setup_guide)

## 技术支持

感谢你选择我们的产品！我们**在这里**为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
