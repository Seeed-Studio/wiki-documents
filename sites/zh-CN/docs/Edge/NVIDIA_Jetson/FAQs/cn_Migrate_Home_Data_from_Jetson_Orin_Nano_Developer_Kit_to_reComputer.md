---
description: 本指南说明如何通过仅备份和恢复 /home 目录，将运行 JetPack 6 的 NVIDIA Jetson Orin Nano Developer Kit 上的用户数据迁移到 Seeed Studio reComputer。它以 reComputer J4012 和 reComputer Super J4012 作为目标示例，并避免从开发套件复制与板卡相关的启动文件、设备树、内核模块和 BSP 配置。
title: 将 Jetson Orin Nano Developer Kit 的 /home 数据迁移到 reComputer
keywords:
  - reComputer
  - reComputer Super
  - Orin Nano Developer Kit
  - Jetson
  - JetPack 6
  - 备份
  - 恢复
  - 迁移
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer
sku: E2025021104, E2025032601
last_update:
  date: 06/05/2026
  author: Dayu
createdAt: '2026-06-04'
updatedAt: '2026-06-08'
url: https://wiki.seeedstudio.com/cn/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/
---

# 将 Jetson Orin Nano Developer Kit 的 /home 数据迁移到 reComputer

## 介绍

当你从 NVIDIA Jetson Orin Nano Developer Kit 迁移到 Seeed Studio reComputer 时，可能希望保留你的用户工作区、项目文件、Conda 环境、脚本和应用数据。然而，不建议将开发套件的完整系统镜像直接恢复到 reComputer 上，因为载板、设备树、引导加载程序和 BSP 配置都不相同。

本 wiki 展示如何使用 [reComputer Classic backup to Super migration project](https://github.com/jjjadand/reComputer_classic-backup-to-super.git)，仅将源 Jetson Orin Nano Developer Kit 的 `/home` 迁移到目标 reComputer。在本指南中，[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 和 [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html) 被用作目标示例。首先使用匹配的 Seeed JetPack 6 BSP 刷写目标 reComputer，然后在该干净的 reComputer 系统之上恢复 `/home` 包。

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>获取 J4012</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>获取 Super J4012</font></span></strong>
  </a>
</div>

## 硬件参考

本指南使用 Jetson Orin Nano Developer Kit 作为源设备，reComputer J4012 / reComputer Super J4012 作为目标示例。当源和目标系统都运行 JetPack 6 / L4T R36，且目标已刷写其匹配的 Seeed BSP 时，相同的仅迁移 `/home` 的思路也可以用于其他 Jetson 到 reComputer 的组合。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th>源设备</th>
      <th>目标示例 1</th>
      <th>目标示例 2</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.webp" />
        </div>
        <br />
        Jetson Orin Nano Developer Kit
      </td>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
        </div>
        <br />
        <a href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">reComputer J4012</a>
      </td>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp" />
        </div>
        <br />
        <a href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">reComputer Super J4012</a>
      </td>
    </tr>
  </tbody>
</table>
</div>

## 本次迁移的作用

迁移包包含：

- `/home`
- 源系统元数据
- `/home` 用户和用户组元数据
- 手动安装的 APT 软件包列表（如果可用）
- 已安装的 dpkg 软件包列表（如果可用）
- 软件包校验和

它刻意不会恢复以下内容：

- `/boot`
- `/boot/dtb`
- `/lib/modules`
- `/usr/lib/modules`
- `/etc/nv_boot_control.conf`
- `/etc/fstab`
- 引导加载程序分区
- 与板卡相关的 BSP 文件

:::caution
此工作流用于用户数据迁移，而不是完整系统克隆。安装在 `/usr` 下的应用、在 `/etc` 下配置的服务、位于 `/var/lib/docker` 下的 Docker 镜像以及系统级 BSP 更改都不会被迁移。请在 `/home` 恢复后，在目标 reComputer 上重新安装或重新配置这些组件。
:::

## 前提条件

- 运行 JetPack 6 / L4T R36 的源 NVIDIA Jetson Orin Nano Developer Kit
- 运行匹配 Seeed JetPack 6 BSP 的目标 reComputer J4012 或 reComputer Super J4012
- 用于传输迁移包的网络访问或可移动存储
- 足够的可用空间用于存放压缩的 `/home` 备份包
- `git`、`tar`、`sha256sum`、`awk` 和 `find`

:::note
在恢复迁移包之前，请先使用正确的 Seeed 固件刷写目标 reComputer。对于 reComputer J4012，请参考 [Flash JetPack OS to J401 Carrier Board](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack/)。对于 reComputer Super J4012，请参考 [Getting Started with reComputer Super](https://wiki.seeedstudio.com/cn/recomputer_jetson_super_getting_started/#flash-jetpack-os)。
:::

## 工作流概览

1. 使用匹配的 Seeed JetPack 6 BSP 刷写目标 reComputer。
2. 在源 Jetson Orin Nano Developer Kit 上克隆迁移项目。
3. 在源设备上创建一个 `/home` 迁移包。
4. 将迁移包复制到目标 reComputer。
5. 在目标设备上检查或试运行恢复过程。
6. 在目标设备上恢复 `/home` 并重启。
7. 重新安装任何位于 `/home` 之外、所需的系统软件包或服务。

## 在源 Jetson Orin Nano Developer Kit 上备份

**步骤 1.** 如果尚未安装 `git`，请先安装。

```bash
sudo apt update
sudo apt install -y git
```

**步骤 2.** 克隆迁移项目。

```bash
git clone https://github.com/jjjadand/reComputer_classic-backup-to-super.git
cd reComputer_classic-backup-to-super
chmod +x *.sh
```

**步骤 3.** 创建备份包。

将 `/path/to/output` 替换为具有足够可用空间的目录，例如 U 盘、外置 SSD 或共享网络文件夹。

```bash
sudo ./backup_home_jp6.sh -o /path/to/output
```

备份完成后，你会看到两个文件：

```text
jetson-home-jp6-<hostname>-<timestamp>.tar.gz
jetson-home-jp6-<hostname>-<timestamp>.tar.gz.sha256
```

默认情况下，脚本会排除常见的缓存目录以减小迁移包大小：

```text
/home/*/.cache
/home/*/.ccache
/home/*/.nv/ComputeCache
/home/*/.npm/_cacache
/home/*/.local/share/Trash
/home/*/.local/share/gvfs-metadata
```

如果你需要更接近原始的用户缓存数据副本，请添加 `--include-caches`：

```bash
sudo ./backup_home_jp6.sh -o /path/to/output --include-caches
```

如果你需要排除额外的数据，请创建一个包含 tar 排除模式的排除文件，并将其传递给脚本：

```bash
sudo ./backup_home_jp6.sh -o /path/to/output --exclude-file /path/to/exclude-patterns.txt
```

:::info
备份脚本对 `/home` 使用 `--one-file-system`。如果你在 `/home` 内挂载了外部存储，请单独备份这些挂载的数据。
:::

## 检查备份包

在恢复之前，你可以在源设备或目标设备上检查迁移包。

```bash
./inspect_home_package.sh /path/to/jetson-home-jp6-xxx.tar.gz
```

检查命令会验证迁移包的校验和，并打印迁移包格式、源系统元数据、源 `/home` 用户以及 `/home` 归档中的前几项条目。

## 将迁移包复制到目标 reComputer

将 `.tar.gz` 迁移包复制到目标 reComputer。例如，使用 `scp`：

```bash
scp /path/to/jetson-home-jp6-xxx.tar.gz seeed@<recomputer-ip>:/home/seeed/
```

你也可以使用 U 盘或外置 SSD 复制迁移包。

:::note
请保留 `.sha256` 文件作为外部校验和记录。恢复脚本同样会验证嵌入在迁移包内部的校验和。
:::

## 在目标 reComputer 上恢复

**步骤 1.** 确保目标 reComputer 已经刷写正确的 Seeed JetPack 6 BSP，并完成首次启动设置。

**步骤 2.** 在目标设备上克隆迁移项目。

```bash
git clone https://github.com/jjjadand/reComputer_classic-backup-to-super.git
cd reComputer_classic-backup-to-super
chmod +x *.sh
```

:::note
恢复脚本名称中包含 `super`，是因为最初的项目是为 reComputer Super 迁移场景创建的。在本指南中，它仍然只用于在选定的 reComputer 目标上验证并覆盖 `/home` 迁移包。
:::

**步骤 3.** 先执行一次试运行（dry run）。

```bash
./restore_home_on_super_jp6.sh --dry-run /home/seeed/jetson-home-jp6-xxx.tar.gz
```

试运行会验证迁移包并打印摘要，而不会恢复文件。

**步骤 4.** 恢复迁移包。

```bash
sudo ./restore_home_on_super_jp6.sh --create-users /home/seeed/jetson-home-jp6-xxx.tar.gz
```

`--create-users` 选项会在解包前，根据 UID/GID 创建缺失的源用户和用户组。这有助于在源用户尚未在目标 reComputer 系统上存在时，仍然保留文件所有权。

默认情况下，恢复脚本会在覆盖源迁移包之前，为当前目标 `/home` 创建一个回滚归档：

```text
/var/backups/jetson_home_migration/super-home-before-restore-<timestamp>.tar.gz
```

如果 `/var/backups` 没有足够空间，请使用其他备份目录：

```bash
sudo ./restore_home_on_super_jp6.sh --create-users --backup-dir /path/to/backup-dir /home/seeed/jetson-home-jp6-xxx.tar.gz
```

只有在你已经为目标 `/home` 做好了单独备份时，才使用 `--no-backup`：

```bash
sudo ./restore_home_on_super_jp6.sh --create-users --no-backup /home/seeed/jetson-home-jp6-xxx.tar.gz
```

:::caution
恢复操作会将文件覆盖到 `/home` 上。它会用迁移包中的同名文件覆盖目标上的文件，但不会删除仅存在于目标上的文件。
:::

**步骤 5.** 重启目标设备。

```bash
sudo sync
sudo reboot
```

## 验证迁移结果

目标 reComputer 重启后，检查恢复的用户和文件：

```bash
ls -lah /home
id <source-user>
du -sh /home/<source-user>
```

然后验证你的应用数据和用户环境：

```bash
ls -lah /home/<source-user>/projects
conda env list
python3 --version
```

如果你使用 `jtop` 等 Jetson 工具，请在目标 reComputer 上再次运行它们：

```bash
jtop
```

:::info
如果在迁移后发现某个应用程序命令缺失，很可能是因为它安装在 `/home` 之外。请使用软件包中的元数据检查其来源软件包列表，然后在目标 reComputer 系统上重新安装所需软件。
:::

## 回滚目标 /home

如果你需要恢复迁移前目标 `/home` 的状态，请使用还原脚本创建的回滚归档文件。

```bash
sudo tar --extract \
  --gzip \
  --file /var/backups/jetson_home_migration/super-home-before-restore-xxx.tar.gz \
  --directory / \
  --preserve-permissions \
  --same-owner \
  --acls \
  --xattrs \
  --xattrs-include='*' \
  --numeric-owner \
  --overwrite

sudo sync
sudo reboot
```

## 故障排查

### 脚本警告系统看起来不像 JetPack 6

脚本会检查 `/etc/nv_tegra_release` 并期望为 L4T R36。请确认源端和目标端都在运行 JetPack 6。

```bash
cat /etc/nv_tegra_release
```

### 还原后文件所有者显示为数字

这通常意味着目标端没有与源端相同 UID/GID 的用户。请使用 `--create-users` 选项运行还原命令，或者在还原前手动创建 UID/GID 匹配的用户。

### 归档包太大

使用默认的缓存排除规则，从 `/home` 中删除不必要的文件，或者通过 `--exclude-file` 提供额外的排除模式文件。

### 备份过程中有部分文件发生了变化

备份脚本接受 tar 状态码 `1`，这通常意味着在备份过程中有活动文件发生了变化。如果这些变更的文件很重要，请关闭正在运行的应用程序并重新执行备份。

### Docker 镜像或系统服务缺失

本次迁移只会还原 `/home`。Docker 镜像、系统服务、通过 APT 安装的应用程序，以及 `/etc`、`/usr` 和 `/var` 下的文件，都需要在目标 reComputer 系统上重新安装或重新配置。

## 资源

- [reComputer Classic 备份到 Super 的迁移项目](https://github.com/jjjadand/reComputer_classic-backup-to-super.git)
- [在 reComputer 上创建备份与还原](https://wiki.seeedstudio.com/cn/create_backup_and_restore_on_recomputer/)
- [如何将 Jetson Orin Nano Developer Kit 升级到 Super Kit](https://wiki.seeedstudio.com/cn/update_orin_nano_developer_kit_to_super_kit/)
- [为 J401 载板烧录 JetPack OS](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack/)
- [reComputer Super 入门指南](https://wiki.seeedstudio.com/cn/recomputer_jetson_super_getting_started/)
- [reComputer J30/J40 入门指南](https://wiki.seeedstudio.com/cn/reComputer_J30_40_with_Jetson_getting_start/)
- [Seeed Jetson 设备一页概览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
