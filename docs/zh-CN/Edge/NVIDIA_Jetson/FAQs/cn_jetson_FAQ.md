---
description: Jetson-FAQ
title: Jetson 使用常见问题
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Jetson_FAQ
last_update:
  date: 7/5/2023
  author: Seraphina
---


本文档包含了与 Jetson 系列产品相关的所有常见问题。如果您在使用 Jetson 时遇到任何问题，这将非常有帮助。

#### Q1: 安装故障排除

详情请点击[这里](/cn/Troubleshooting_Installation)

#### Q2: 收到的 reComputer 中 eMMC 的剩余空间只有约 2GB，如何解决空间不足的问题？

详情请点击[这里](/cn/solution_of_insufficient_space)

#### Q3: 如何解决 reComputer 与 VEYE 摄像头的兼容性问题？

详情请点击[这里](/cn/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera)

#### Q4: 如何解决 IMX477 摄像头与 A603 载板的兼容性问题？

详情请点击[这里](/cn/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board)

#### Q5: 如何获取 reComputer J30/J40 的系统日志？

详情请点击[这里](/cn/get_the_system_log_of_recomputer_j30_and_j40)

#### Q6: 刷写 Jetpack 时的超时问题。

详情请点击[这里](/cn/usb_timeout_during_flash)

#### Q7: 刷写设备后无法使用 USB-A 端口、以太网端口或没有 HDMI 显示。
**A:** 请检查文件完整性（例如，我们提供了 SHA256 校验和），对于某些载板（特别是 A60X 系列），确保驱动补丁已成功复制/应用到 **Linux_for_tegra** 目录。有些文件需要 **sudo** 权限，当您复制目录时，确保在命令中包含 **-r** 参数。

#### Q8: 执行 "sudo apt-get update && sudo apt-get upgrade" 命令后，我的系统崩溃/无法启动/黑屏/丢失外设驱动。
**A:** 这些问题可以归结为 **"为什么我不能在自定义载板上使用 apt upgrade 升级系统？"** 简短的答案是：**不要**在**自定义/第三方**载板上运行 apt upgrade 命令。此外，避免运行任何包含 apt upgrade 命令的脚本或在 Ubuntu 中使用 GUI 更新工具。来自服务器的 Debian 包不考虑我们自定义板的特定设计，强制升级可能导致不兼容问题，可能会损坏您的设备。此过程仅与官方开发套件兼容。要解决这些问题，请按照我们的指南重新刷写 JetPack。

#### Q9: 如果您告诉我不能执行 apt upgrade，我如何升级软件包？如果我不升级软件，会有安全风险吗？

详情请点击[这里](/cn/upgrade_software_packages_for_jetson)

<!-- #### Q10: How to use the OTA (Over-the-Air) method to upgrade the system version of the Jetson device. 

For details, please click [here](/cn/updating_jetpack_with_ota) -->

#### Q11: Seeed 对 NVIDIA 的 Jetson BSP 做了哪些修改。

详情请点击[这里](/cn/differences_of_l4t_between_seeed_and_nvidia)

#### Q12: 如何在 Jetson-nano 上启用 SPI 接口？
详情请点击[这里](/cn/enable_spi_interface_on_jetsonnano)

#### Q13: 为什么有时在 Jetson 上完成刷写过程后，系统无法从 SSD 启动？
此问题目前在刷写 JetPack 5 时出现，NVIDIA 已正式记录了此问题。解决方案请点击[这里。](/cn/issue_of_jetpack5_failing_to_boot_from_certain_ssd)

#### Q14: 如何构建 Seeed 的 Jetson BSP 源代码项目？
详情请点击[这里](/cn/how_to_build_the_source_code_project_for_seeed_jetson_bsp)

#### Q15: 为什么不能在 reComputer/reServer 上执行 `apt upgrade` 命令？
**reComputer/reServer** 的内核和驱动是定制的。如果执行 `apt upgrade` 命令，一些内核和驱动相关的包可能会被 NVIDIA 的官方资源替换，这可能导致软件兼容性问题。<mark>因此，请不要在任何第三方 Jetson 平台上运行 `apt upgrade`。</mark>

您可以参考以下说明来锁定相关的 APT 源。这样，如果意外执行了 apt upgrade，影响将被最小化：
```bash
sudo apt-mark hold <package-name>

### For example: 
sudo apt-mark hold nvidia-l4t-core
```

#### Q16: 如果 reComputer/reServer 没有所需的 `.ko` 驱动模块，我如何编译一个可用的驱动？

详情请点击[这里](/cn/how_to_build_the_ko_module_for_seeed_jetson)

#### Q17：如何在 Jetson（JetPack 6）上挂载格式化为 exFAT 的外部硬盘？

首先，安装依赖项：
```
sudo apt install build-essential autoconf automake libtool pkg-config
sudo apt install git libfuse-dev
```

然后从源代码克隆并构建 exFAT 驱动：
```
git clone https://github.com/relan/exfat
cd exfat
autoreconf --install
./configure
make
sudo make install
```

接下来，手动将磁盘挂载到本地目录：
```
lsblk   # Check the device name of your external hard drive

sudo mkdir /media/seeed/tmp-exfat   # Create a mount point
sudo mount.exfat /dev/sda3 /media/seeed/tmp-exfat/
```

这将 exFAT 格式的外部驱动器挂载到 `/media/seeed/tmp-exfat/`，以便在 Jetson 上正常访问。

#### Q18：如何在刷写镜像前加密 Jetson 的磁盘？

详情请点击[这里](/cn/how_to_encrypt_the_disk_for_jetson)

#### Q18：如何建立 Jetson 与 EtherCAT 设备之间的通信？

详情请点击[这里](/cn/how_to_establish_the_ethercat_on_jetson)


## 技术支持

感谢您选择我们的产品！我们**在这里**为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

