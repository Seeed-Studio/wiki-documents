---
description: Jetson-FAQ
title: Jetson 使用常见问题
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Jetson_FAQ
last_update:
  date: 7/5/2023
  author: Seraphina
---


本文档包含与 Jetson 系列产品相关的所有常见问题。如果您在使用 Jetson 时遇到任何问题，这将非常有帮助。

#### Q1: 安装故障排除

详细信息，请点击[这里](/Troubleshooting_Installation)

#### Q2: 收到的 reComputer 中 eMMC 的剩余空间只有约 2GB，如何解决空间不足的问题？

详细信息，请点击[这里](/solution_of_insufficient_space)

#### Q3: 如何解决 reComputer 与 VEYE 摄像头之间的兼容性问题？

详细信息，请点击[这里](/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera)

#### Q4: 如何解决 IMX477 摄像头与 A603 载板之间的兼容性问题？

详细信息，请点击[这里](/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board)

#### Q5: 如何获取 reComputer J30/J40 的系统日志？

详细信息，请点击[这里](/get_the_system_log_of_recomputer_j30_and_j40)

#### Q6: 刷写 Jetpack 时的超时问题。

详细信息，请点击[这里](/usb_timeout_during_flash)

#### Q7: 刷写设备后无法使用 USB-A 端口、以太网端口或没有 HDMI 显示。
**A:** 请检查文件完整性（例如，我们提供了 SHA256 校验和），对于某些载板（特别是 A60X 系列），确保驱动程序补丁已成功复制/应用到 **Linux_for_tegra** 目录。有些文件需要 **sudo** 权限，当您复制目录时，确保在命令中包含 **-r** 参数。

#### Q8: 执行 "sudo apt-get update && sudo apt-get upgrade" 命令后，我的系统崩溃/无法启动/黑屏/丢失外设驱动程序。
**A:** 这些问题可以归结为 **"为什么我不能在自定义载板上使用 apt upgrade 升级系统？"** 简短的答案是：**不要**在**自定义/第三方**载板上运行 apt upgrade 命令。此外，避免运行包含 apt upgrade 命令的任何脚本或在 Ubuntu 中使用 GUI 更新工具。来自服务器的 Debian 软件包不考虑我们自定义板的特定设计，强制升级可能导致不兼容问题，可能会损坏您的设备。此过程仅与官方开发套件兼容。要解决这些问题，请按照我们的指南重新刷写 JetPack。

#### Q9: 如果您告诉我不能执行 apt upgrade，我如何升级软件包？如果我不升级软件，会有安全风险吗？

详细信息，请点击[这里](/upgrade_software_packages_for_jetson)

<!-- #### Q10: 如何使用 OTA（空中升级）方法升级 Jetson 设备的系统版本。 -->

<!-- 详细信息，请点击[这里](/updating_jetpack_with_ota) -->

#### Q11: Seeed 对 NVIDIA 的 Jetson BSP 做了哪些修改。

详细信息，请点击[这里](/differences_of_l4t_between_seeed_and_nvidia)

#### Q12: 如何在 Jetson-nano 上启用 SPI 接口？
详细信息，请点击[这里](/enable_spi_interface_on_jetsonnano)

#### Q13: 为什么有时在 Jetson 上完成刷写过程后，系统无法从 SSD 启动？
此问题目前在刷写 JetPack 5 时出现，NVIDIA 已正式记录了此问题。解决方案，请点击[这里。](/issue_of_jetpack5_failing_to_boot_from_certain_ssd)

#### Q14: 如何构建 Seeed 的 Jetson BSP 源代码项目？
详细信息，请点击[这里](/how_to_build_the_source_code_project_for_seeed_jetson_bsp)

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