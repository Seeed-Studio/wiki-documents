---
description: 这是一个关于使用OTA或增量更新可能导致系统不稳定和安全风险的常见问题解答，因此建议执行完整的ROM更新以维护系统安全性和稳定性，避免部分更新。
title: 为Jetson升级软件包
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/upgrade_software_packages_for_jetson
last_update:
  date: 2/11/2025
  author: Youjiang
---

#### 如果你告诉我不能执行apt upgrade，那我如何升级软件包？如果不升级软件会有安全风险吗？

答：首先，重要的是要理解**OTA（空中下载）/增量更新/部分更新**可能会损害您的操作系统，因为它们允许用户仅更新一部分软件包。这种方法可能导致依赖关系不匹配、系统不稳定和遗漏安全补丁，最终增加软件故障或漏洞的风险。此外，管理部分升级通常需要手动干预，这可能容易出错。相反，**完整ROM/完整更新**确保所有软件包和依赖关系一起更新，保持系统兼容性和稳定性。通过在整个系统中应用安全补丁和错误修复，完整升级有助于保持系统安全和一致，减少冲突的可能性。虽然完整升级可能需要更多时间，但从长远来看，它们通常被认为更安全、更可靠。对于我们的Jetson设备，我们在NVIDIA发布JetPack后发布我们的JetPack（驱动程序发布和组装您自己的JetPack也是如此），这确保了比使用apt升级更稳定和安全的系统。如果您担心软件过时并想要更新特定软件包，以下是一些选项：

1. 如果您确定您的软件包不依赖于系统软件包，运行"sudo apt-get install `<Your_Package>`"来升级软件包。
2. 对于大多数开源软件，下载源文件并自己编译。
3. 等待新的JetPack发布。


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