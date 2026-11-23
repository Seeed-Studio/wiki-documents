---
description: 本文说明如何在不替换 Seeed 载板驱动的前提下更新 Jetson 软件，以及 JetPack 5.1.3 和 JetPack 6.2 被 nvidia-l4t 误升级后的修复方法。
title: 为Jetson升级软件包
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /upgrade_software_packages_for_jetson
last_update:
  date: 10/16/2026
  author: Youjiang/Dayu
createdAt: '2025-05-30'
updatedAt: '2026-10-16'
url: https://wiki.seeedstudio.com/cn/upgrade_software_packages_for_jetson/
---

#### 如果你告诉我不能执行 apt upgrade，那我如何升级软件包？如果不升级软件会有安全风险吗？

答：不要在 Seeed Jetson 系统上执行 `sudo apt upgrade` 或 `sudo apt full-upgrade`。普通应用可以单独更新，但一次不受控制的 NVIDIA 升级可能把 Seeed 的 `nvidia-l4t` 内核、设备树和驱动包替换成 NVIDIA 原版软件包，导致设备无法启动或载板外设失效。

对于不依赖 `nvidia-l4t` 的应用软件包，只安装需要的软件包：

```bash
sudo apt update
sudo apt-get install <your-package>
```

大多数开源软件也可以下载源码自行编译。内核、bootloader 和载板驱动仍应通过完整的 Seeed BSP 或 JetPack 镜像一起更新。

## 修复被误升级的 nvidia-l4t

下面两个 JetPack 版本没有内置 apt 保护，可以使用对应修复包：

| JetPack | Jetson Linux | 修复包 |
| --- | --- | --- |
| JetPack 5.1.3 | R35.5.0 | [seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBHzK-usznrT72e9lsjdzvnAZf8tB1ohV93_-vjlazshYQ?e=ljS4tL) |
| JetPack 6.2 | R36.4.3 | [seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQCTqH9GsRQWSI-PhfPuJeycAR_oaUGvZc7jBTgcMMWS-fc?e=jV1YJF) |

JetPack 7 及之后发布的 Seeed 固件已经锁定 NVIDIA 内核和驱动包，`apt` 不能再误升级这些组件，因此没有修复包。如果 JetPack 7 或更新版本的系统已经损坏，请重新烧录对应的 Seeed 镜像。

:::caution
请在 Jetson 本机执行修复，并只使用与 `cat /etc/nv_tegra_release` 匹配的修复包。脚本会恢复 Seeed 内核和驱动包；除非明确加入 `--with-bootloader`，否则不会安装 bootloader 包。
:::

### JetPack 5.1.3 / L4T R35.5.0

先确认版本：

```bash
cat /etc/nv_tegra_release
```

第一行必须包含 `R35 (release), REVISION: 5`。下载 `seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip`，复制到 Jetson 后执行：

```bash
unzip -o seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip
cd seeed-jetson-linux-r35.5.0-bsp-bundle
sudo ./seeed-linux-bsp-repair.sh
sudo reboot
```

只有 bootloader 本身需要修复时，才追加 `--with-bootloader`。重启后检查：

```bash
dpkg -l nvidia-l4t-kernel nvidia-l4t-kernel-dtbs nvidia-l4t-kernel-headers nvidia-l4t-display-kernel
cat /etc/nv_boot_control.conf
dpkg --audit
```

这四个软件包应为已安装或已锁定状态，版本中包含 `+seeed1`。`dpkg --audit` 不应输出内容。修复日志位于 `/var/log/seeed-linux-bsp-r35.5.0-repair.log`。

### JetPack 6.2 / L4T R36.4.3

先确认版本：

```bash
cat /etc/nv_tegra_release
```

输出必须同时包含 `R36` 和 `REVISION: 4.3`。下载 `seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip`，复制到 Jetson 后执行：

```bash
unzip -o seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip
cd seeed-jetson-linux-r36.4.3-bsp-bundle
sudo ./seeed-linux-bsp-repair.sh
sudo reboot
```

如果脚本无法识别载板，停止执行并用 Seeed 产品名称重新运行：

```bash
sudo ./seeed-linux-bsp-repair.sh --board recomputer-orin-super-j401
```

把 `recomputer-orin-super-j401` 替换为正在修复的 Seeed 载板或产品名称。只有自动识别结果已经正确，并且命令需要非交互执行时，才使用 `--auto`。只有需要修复固件时才加入 `--with-bootloader`。R36.4.3 修复包不包含 Orin Super bootloader capsule，在 Orin Super 硬件上使用该选项前，请先核对模组和固件。

重启后检查：

```bash
dpkg -l nvidia-l4t-kernel nvidia-l4t-kernel-dtbs nvidia-l4t-kernel-headers nvidia-l4t-kernel-oot-modules nvidia-l4t-display-kernel
uname -r
dpkg --audit
```

软件包版本应包含 `+seeed1`，`uname -r` 应显示 `5.15.148-tegra`。修复日志位于 `/var/log/seeed-linux-bsp-r36.4.3-repair.log`，脚本备份位于 `/opt/nvidia/l4t-packages/seeed-r36.4.3-repair-backup`。


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
