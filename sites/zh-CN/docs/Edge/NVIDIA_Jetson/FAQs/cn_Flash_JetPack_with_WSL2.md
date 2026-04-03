---
description: 本教程展示如何在 Windows 上使用 WSL2 刷写 JetPack。
title: 使用 WSL2 刷写 JetPack
tags:
  - JetPack
  - WSL2
  - Windows
image: https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/check_custom_kernel.png
slug: /ai_robotics_flash_jetpack_with_wsl2
sku: 110110145
last_update:
  date: 02/24/2026
  author: Lorraine
createdAt: '2026-02-26'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/cn/ai_robotics_flash_jetpack_with_wsl2/
---

# 使用 WSL2 刷写 JetPack

## 介绍

本教程演示如何使用 Windows Subsystem for Linux 2 (WSL2) 在 Jetson 设备上刷写 JetPack。通过这种方式，Windows 用户无需单独搭建一台 Ubuntu 主机即可刷写 JetPack。

:::warning
这**不被视为稳定方案**，且不会提供主动技术支持。如果你遇到错误，请改用原生 Ubuntu 主机。
:::

## 前置条件

### 系统要求

- **Windows**: Windows 10 1903（内部版本 18362.1049 或更高）或 Windows 11
- **WSL**: 需要 WSL2
- **usbipd-win**: 版本 4.x 及以上

### 检查你的系统

检查 Windows 内部版本：

```bash
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v CurrentBuild
```

检查 WSL 版本：

```bash
wsl -v
```

检查 usbipd 版本：

```bash
usbipd --version
```

### 推荐的 WSL 发行版

| JetPack 版本 | 推荐的 WSL 发行版 |
|-----------------|-------------------------------|
| JetPack 4.x     | Ubuntu 18.04                  |
| JetPack 5.x     | Ubuntu 18.04 / Ubuntu 20.04   |
| JetPack 6.x     | Ubuntu 20.04 / Ubuntu 22.04   |

关于具体版本要求，请参考 [NVIDIA SDK Manager 文档](https://developer.nvidia.com/sdk-manager#installation_get_started)。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/jetpack_host.png" />
</div>

从 Microsoft Store 安装发行版，或使用命令行：


```bash
# For example, install Ubuntu 22.04
wsl --install -d Ubuntu-22.04
```

## 设置 WSL2 内核

### 自定义 WSL 内核
需要一个自定义 WSL 内核来支持不同的 USB 设备。你可以：
- 使用下面提供的预编译内核
- 按照[此指南](https://github.com/dorssel/usbipd-win/wiki/WSL-support)自行编译内核

**预编译内核下载**: [OneDrive Link](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBAoWWTQQsBSYpacMvUN9LYAUi6X_jPQmzYrGWtZtb5ilc?e=ZjNaJr)
- SHA256: `f249022feab9372d448d236a4401e087d0f150dd6b3367b571f0b9a703bd2d38`

要验证内核兼容性，请在安装后检查是否支持 RNDIS。

### 替换标准 WSL 内核

1. **关闭 WSL**：

```bash
wsl --shutdown
```

2. **配置 WSL 内核**：

**适用于 Windows 11**（或更高版本的 Windows 10）：
- 打开 WSL Settings 图形界面应用
- 进入设置并配置自定义内核路径

**适用于所有 Windows 版本**：
编辑 `.wslconfig` 文件：

```bash
notepad $env:USERPROFILE\.wslconfig
```

在 `[wsl2]` 下添加以下配置：

```ini
[wsl2]
kernel=D:\\WSL_Kernel\\bzImage
```

:::note
将 `D:\\WSL_Kernel\\bzImage` 替换为你实际下载的内核文件路径。
:::

3. **重启 WSL 并验证**：

```bash
# Restart WSL
wsl

# Check kernel information
uname -a

# Check RNDIS features
zcat /proc/config.gz | grep RNDIS
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/check_custom_kernel.png" />
</div>

## 刷写 JetPack

大部分刷写步骤与原生 Ubuntu 相同。本示例使用 reComputer J4012。

**步骤 1：下载 JetPack**

从 [Seeed 刷写汇总页面](https://wiki.seeedstudio.com/cn/flash/jetpack_to_selected_product/)下载适用于你设备的 JetPack 版本。该页面提供：
- 所有 Seeed Jetson 设备的 JetPack 镜像
- 各设备进入强制恢复模式的详细操作说明

:::warning
从 Windows 向 WSL 移动文件时，请注意文件权限问题。
:::

移动并验证文件：

```bash
# Move file from Windows drive to WSL storage
mv /mnt/c/Users/seeed/Downloads/mfi_recomputer-<xxxx>.tar.gz ~

# Remove execute permission
chmod -x mfi_recomputer-<xxxx>.tar.gz

# Verify SHA256 checksum
sha256sum mfi_recomputer-<xxxx>.tar.gz
```

:::note
将路径 `/mnt/c/Users/seeed/Downloads/` 中的 `seeed` 替换为你实际的 Windows 用户名。
:::

**步骤 2：进入强制恢复模式**

:::tip
关于特定设备的恢复模式操作说明（引脚位置、按键组合等），请参考 [Seeed 刷写汇总页面](https://wiki.seeedstudio.com/cn/flash/jetpack_to_selected_product/)，并选择你的设备型号。
:::

大多数设备的一般步骤：

1. **完全断电**关闭 Jetson 设备
2. 使用跳线帽或镊子**短接 FEC 和 GND 引脚**
3. 将 **USB-C 数据线**连接到 Windows 主机
4. **接通电源**到设备
5. **等待 2-3 秒**，然后移除跳线帽

你的设备将进入强制恢复模式。

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png" />
</div>

:::note
上面的示例展示的是 reComputer J4012。不同设备的引脚位置会有所不同——请务必查阅你设备的专用文档。
:::

**步骤 3：将 USB 设备挂载到 WSL**

以 **管理员**权限打开 **PowerShell** 或 **Windows Terminal**。

**列出 USB 设备**（在 PowerShell 中）：

```powershell
usbipd list
```

:::note
如果看到 `usbipd: command not found`，请确认已安装 usbipd-win 并将其加入系统 PATH。安装后可能需要重启终端。
:::

你应该能看到你的设备被列为 **APX**，这表明它已进入强制恢复模式。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_list.png" />
</div>

**绑定设备**（在 PowerShell 中）：

```powershell
usbipd bind -b 1-1 -f
```

:::note
将 `1-1` 替换为 `usbipd list` 输出中显示的实际总线 ID。
:::

再次使用 `usbipd list`，确认 STATE 已变为 **Shared(forced)**。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_list_shared.png" />
</div>

**挂载到 WSL**（在 PowerShell 中）：

```powershell
usbipd attach -b 1-1 --wsl --auto-attach
```

你应该会看到类似如下的输出：

```
usbipd: info: Using WSL distribution 'Ubuntu-22.04' to attach; the device will be available in all WSL 2 distributions.
usbipd: info: Using IP address 172.24.240.1 to reach the host.
usbipd: info: Starting endless attach loop; press Ctrl+C to quit.
WSL Attached
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_attach_apx.png" />
</div>

:::tip
保持此终端窗口打开。仅在刷写完成后再按 `Ctrl+C`。
:::

**在 WSL 中验证**：

在新终端中启动 WSL 并检查：

```bash
lsusb
```

你应该会看到类似如下的输出：

```
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 002: ID 0955:7323 NVIDIA Corp. APX
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_rndis.png" />
</div>

设备已成功连接到 WSL。

**步骤 4：刷写设备**

进入你的 JetPack 目录并执行刷写命令：

根据你的设备和需求选择合适的刷写方式：

**选项 1：Seeed BSP（推荐用于 Seeed 设备）**

对于 Seeed reComputer 设备，使用预构建的 Massflash 包：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

:::note
请确保已安装刷写所需的前置依赖：

```bash
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```
:::

**选项 2：NVIDIA SDK Manager**

适用于 NVIDIA 官方开发套件，或当你需要 SDK 组件时：

**1. 启动 SDK Manager：**

```bash
sdkmanager
```

**2. 按照屏幕上的指引**完成刷写流程。

:::tip
关于在 WSL2 上使用 SDK Manager 的更详细说明，请参考 [NVIDIA 官方文档](https://docs.nvidia.com/sdk-manager/wsl-systems/index.html)。
:::

:::warning
**已知限制**：通过 WSL2 使用 SDK Manager 无法刷写到外部 NVMe/SSD 存储设备。如果你需要刷写到外部 SSD，请使用选项 3（Initrd 刷写）或使用原生 Ubuntu 主机。
:::

**选项 3：Initrd 刷写（适用于 NVIDIA 官方开发套件）**

适用于 NVIDIA 官方开发套件（Jetson Orin Nano Developer Kit 等）：

以 Jetson Orin Nano Super Developer Kit 为例：

```bash
# Download Jetson Linux
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2

# Download Root Filesystem
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2

# Extract Jetson Linux
tar xpf Jetson_Linux_r36.4.3_aarch64.tbz2

# Extract Root Filesystem
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C ./Linux_for_Tegra/rootfs

# Install prerequisites
sudo ./tools/l4t_flash_prerequisites.sh

# Apply binaries
sudo ./apply_binaries.sh

# Flash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/flash_send_blob.png" />
</div>

:::tip
将 `jetson-orin-nano-devkit` 替换为你具体设备的 target 名称。请查阅 NVIDIA 文档以获取正确的 target 名称。
:::

当刷写过程成功完成后，你会看到类似如下的输出：

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/flash_success.png" />
</div>

刷写完成后，你可以将 USB 设备从 WSL 分离：

```powershell
usbipd detach -b 1-1
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_detached.png" />
</div>

## 故障排查

### USB 设备未在 WSL 中显示

- 确保 usbipd-win 版本为 4.x 或更高
- 确认设备处于强制恢复模式（应显示为 APX）
- 尝试使用 `-f`（force）标志重新绑定设备
- **暂时禁用 Windows Defender Firewall** 或杀毒软件，因为它们可能会阻止 USB 设备访问
- 尝试使用其他 USB 接口（最好是 USB 3.0）

### 刷写失败或超时

- 如果问题持续存在，请使用原生 Ubuntu 主机
- 检查 USB 线质量和连接情况（尽量使用原装线缆）
- 确保 Jetson 设备有足够的电源供给（使用 5V/4A 电源适配器）
- 关闭可能正在使用该 USB 设备的其他软件
- 尝试在不使用 `--auto-attach` 标志的情况下刷写，并手动监控连接

### 权限问题

- 始终以 **Administrator** 权限运行 usbipd 命令
- 从 Windows 向 WSL 移动文件时，检查文件权限
- 如果在 WSL 中遇到权限被拒绝错误，尝试运行：`sudo chmod 666 /dev/bus/usb/001/*`

### WSL 内核问题

如果你看到关于缺少 USB 支持的错误：
- 验证自定义内核是否已正确加载：`uname -r` 应显示与标准 WSL 内核不同的版本
- 检查 RNDIS 支持：`zcat /proc/config.gz | grep CONFIG_USB_NET_RNDIS`
- 如果问题仍然存在，请按照[官方指南](https://github.com/dorssel/usbipd-win/wiki/WSL-support)重新构建内核

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
