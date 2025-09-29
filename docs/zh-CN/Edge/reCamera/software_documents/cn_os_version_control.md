---
description: 版本控制，如升级或回滚
title: 操作系统版本控制
keywords:
  - Edge
  - reCamera
  - recamera
  - Operating system
  - version upgrade
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.webp
slug: /cn/recamera_os_version_control
sidebar_position: 1
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
---

# 通过 Web 界面进行操作系统更新/升级指南

使用 type-c 数据线将 reCamera 连接到您的计算机，然后在计算机浏览器中访问 `http://192.168.42.1/#/system`，或者如果您通过网络访问设备，请替换相应的 IP 地址。在升级之前，请通过检查 `ip_address/#/network` 确保 reCamera **能够访问互联网**。

点击 `System` 配置，如果有新固件发布，点击 `Apply` 来更新/升级设备系统。如果没有自动检测到新固件，按钮文本将显示为 "Check"。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image.png" /></div>

等待进度条完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-1.png" /></div>

点击 `Restart` 完成系统更新/升级。**刷新浏览器**，大约 30 秒后重新连接到设备。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-2.png" /></div>

系统将自动检查是否有可以更新/升级的新版本固件。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-3.png" /></div>

## 通过命令进行操作系统版本管理

### 通过 OTA 进行设备管理

#### 更新/升级到最新的 OTA 版本

您可以在[这里查看 reCamera OS 的最新版本。](https://github.com/Seeed-Studio/reCamera-OS)

手动更新/升级最新的 OTA 固件：

```bash
#Upgrade to the latest firmware version
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/latest 

sudo /mnt/system/upgrade.sh start
```

或者

#### 更新/升级或回滚到任何特定的 OTA 版本

如果您有想要部署的特定版本，可以使用下面的命令。

```bash
#E.g. install 0.1.4 as an example
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/tag/0.1.4

sudo /mnt/system/upgrade.sh start
```

如果您正在开发操作系统并且在 GitHub 上有自己的分支，您也可以使用您的分支链接来更新/升级系统版本。

```bash
sudo /mnt/system/upgrade.sh latest https://github.com/your-user-name/reCamera-OS/releases/your-version-file-address

sudo /mnt/system/upgrade.sh start
```

#### 对于 OS 版本 0.1.3 及以下

如果您想使用 `upgrade.sh` 进行 OTA 升级，但您的版本是 **0.1.3 及以下**，请按照以下步骤操作：

1. 通过 USB-C 数据线将设备连接到计算机，然后访问 **192.168.42.1/#/terminal**。在文件夹中找到 upgrade.sh 脚本

```bash
cd /mnt/system
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/find_upgrade_script.png" /></div>

2. 更改此脚本的权限

```bash
sudo rootfs_rw on
sudo chmod +x upgrade.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_file_permission.png" /></div>

3. 删除旧的 `upgrade.sh` 文件并检查是否成功移除。

```bash
sudo rm upgrade.sh
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/remove_script.png" /></div>

4. 前往 [Github](https://github.com/Seeed-Studio/reCamera-OS/blob/sg200x-reCamera/external/ramdisk/rootfs/overlay/cv181x_musl_riscv64/system/upgrade.sh) 并下载最新的 `upgrade.sh` 脚本。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/download_sh_github.png" /></div>

5. 更改文件夹权限

```bash
sudo chmod 777 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_folder_permission.png" /></div>

6. 打开您的桌面/PC终端，然后将下载的脚本复制到reCamera的同一文件夹下。

```bash
sudo scp your_folder_address/upgrade.sh recamera@192.168.42.1:/mnt/system/
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/scp_file.png" /></div>

7. 返回网页检查新的 `upgrade.sh` 是否已存在

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/new_script.png" /></div>

8. 为了安全起见，将文件夹权限改回原状

```bash
sudo chmod 755 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/chang_back_permission.png" /></div>

9. 现在您可以尝试 [OTA 命令](#device-management-by-ota) 来进行任何版本控制。

### 通过本地包进行设备管理

您也可以使用本地 ota 包手动更新/升级固件。ota 固件可以[在此处下载](https://github.com/Seeed-Studio/reCamera-OS/releases/)。使用 scp 等工具将文件传输到 reCamera。

```bash
sudo scp sg2002_reCamera_0.1.3_emmc_ota.zip recamera@ip_address:~/
```

然后使用 bash 进行部署。

```bash
sudo /mnt/system/upgrade.sh start sg2002_reCamera_0.1.3_emmc_ota.zip
```

:::note
如果您没有足够的权限将文件转储到 recamera 中，您可以通过输入 `rootfs_rw on/off` 来更改系统文件为可读或可写。
:::

### 手动恢复出厂设置

此命令可以将 reCamera 恢复到出厂设置。如果您使用此功能，您的所有用户数据都将被删除，例如 Node-RED 流程和本地存储。

```bash
sudo /mnt/system/upgrade.sh recovery
```

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
