---
description: 列出 Jetson 刷机过程中超时问题的可能原因。
title: 解决 UUID 错误问题
keywords:
- reComputer
- jetpack
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /deal_the_issue_of_UUID
sku: 100001302,E2025021103
last_update:
  date: 01/08/2026
  author: Dayu
---

# 🚨 问题描述

即使没有修改任何 Jetson 内核相关内容，Jetson 设备在启动过程中也会遇到与 UUID 相关的错误并进入恢复终端。此问题会阻止正常的系统启动，需要手动干预才能解决。

## 🔍 症状

**无法访问用户分区（UUID 错误）**

最初，系统神秘地无法挂载用户分区，导致持续的启动失败，如下图所示：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/other/UUID-error.jpg"/></div>

**系统进入恢复模式**

系统随后异常进入恢复模式（救援终端）：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/other/rc-terminal.png"/></div>

此问题通常发生在启动过程中遇到损坏的系统文件或错误的分区标志时，导致系统无法正常启动并进入恢复 shell 环境。UUID 错误表明系统无法正确识别或挂载根文件系统，而这对正常运行是必需的。




# 🛠️ 解决方案




## 方法 1：清除 OTA 标志并替换 initrd 文件

**可能原因：** `/boot/initrd` 镜像文件损坏，导致启动过程中断。

**症状：** 系统在启动时无法进入正常操作系统，反复进入恢复模式，进入 `bash-5.1#` shell。

### 步骤 1：在恢复终端中挂载 EFI 变量

首先，在恢复终端中挂载 EFI 变量文件系统：

```bash
mount -t efivarfs efivarfs /sys/firmware/efi/efivars
```

### 步骤 2：清除 OTA 标志变量

在 `bash-5.1#` shell 环境中，移除并删除 OTA 标志位：
**1. 移除并清除 L4T 默认启动模式标志：**

```bash
chattr -i /sys/firmware/efi/efivars/L4TDefaultBootMode-781e084c-a330-417c-b678-38e696380cb9
rm /sys/firmware/efi/efivars/L4TDefaultBootMode-781e084c-a330-417c-b678-38e696380cb9
```



**2. 移除并清除分区 A 状态标志：**

```bash
chattr -i /sys/firmware/efi/efivars/RootfsStatusSlotA-781e084c-a330-417c-b678-38e696380cb9
rm /sys/firmware/efi/efivars/RootfsStatusSlotA-781e084c-a330-417c-b678-38e696380cb9
```



**3. 移除并清除分区 B 状态标志：**

```bash
chattr -i /sys/firmware/efi/efivars/RootfsStatusSlotB-781e084c-a330-417c-b678-38e696380cb9
rm /sys/firmware/efi/efivars/RootfsStatusSlotB-781e084c-a330-417c-b678-38e696380cb9
```

### 步骤 3：关闭系统电源

清除错误标志位后，关闭并断开 Jetson 设备的电源。

### 步骤 4：替换 /boot/initrd 文件

使用 SSD 外接盒将 Jetson 的 SSD 连接到 PC 来替换 `/boot/initrd` 文件。**建议在替换前备份旧的 initrd 文件。**

**详细步骤：**
- **移除驱动器：** 从开发板中取出 SSD，使用 SSD 外接盒将其连接到 PC（Linux 环境）。
- **挂载分区：** 从 SSD 挂载系统根分区（RootFS）。
- **替换文件：**
  - a. 在挂载点中找到 `/boot/initrd` 文件。
  - b. 用新的、经过验证的工作 initrd 镜像（或新编译的镜像）替换它。
- **恢复测试：** 将 SSD 重新安装回开发板并开机。


**initrd 文件下载链接：**

**🔗 L4T 36.4.0 (JetPack 6.1)：**
[点击下载](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQD15MxbJs_tTqEKA0ouhCygAR7LuRFU5wZzczSziLYUX2s?e=kM4KjT)

**🔗 L4T 36.4.3 (JetPack 6.2)：**
[点击下载](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCpm0jqIgDxRIvM3kk_40P6AX8bfvYF6AbEJ8fRWCNMS8c?e=4nMyMM)

**🔗 L4T 36.4.4 (JetPack 6.2.1)：**
[点击下载](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBFn84LQJqlQ7BgIzvCPp6gAcD9I80K2RBW0v88Uvjh8zs?e=IyaREq)



### 步骤 5：重启 Jetson

完成文件替换后，重启 Jetson 设备。

## 🔄 方法 2：全新安装方法

准备一个<div>空白 SSD</div>并在 Jetson 设备中替换它。刷机系统后（确保 JetPack 版本与旧 SSD 匹配），再换回旧 SSD。

旧 SSD 上的内容将保持完整，现在应该能够正常启动。




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
