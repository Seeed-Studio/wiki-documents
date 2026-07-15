---
description: 常见 Jetson 刷机错误及其排查方法。
title: 常见刷机错误及解决方法
keywords:
  - reComputer
  - Jetson
  - flashing
  - USB
  - NFS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /usb_timeout_during_flash
last_update:
  date: 3/18/2026
  author: Lorraine
createdAt: '2025-01-22'
updatedAt: '2026-03-18'
url: https://wiki.seeedstudio.com/cn/usb_timeout_during_flash/
---

本页总结了若干常见的 Jetson 刷机失败情况，尤其是与 USB 重新连接、NFS 挂载、主机环境问题、缺少刷机工具以及首次启动 OEM 设置相关的错误。

## 开始之前

在排查具体错误之前，请先确认以下事项：

1. 尽可能使用独立的物理 Ubuntu 主机。避免使用虚拟机、Docker 容器和 WSL 进行刷机。
2. 使用一根短且质量良好的 USB 线缆，确保数据传输稳定。
3. 将线缆直接连接到主机 PC，避免使用 USB 集线器。
4. 如有需要，再次将 Jetson 置于恢复模式并重新连接电源。
5. 确保主机操作系统与 JetPack 版本匹配：
   - JetPack 5.x：推荐使用 Ubuntu 18.04 或 20.04。
   - JetPack 6.x：推荐使用 Ubuntu 20.04 或 22.04。

## 错误：刷机过程中 USB 超时

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/timeout_issue.png"/>
</div>

典型症状包括如下信息：

```text
ERROR: might be timeout in usb write
```

或者设备在刷机过程中断开连接。

### 原因分析

在刷机过程中，Jetson 可能会重启并通过 USB 重新枚举。在物理 Ubuntu 主机上，通常会自动重新连接。而在 VM 或 WSL 环境中，往往需要手动重新挂载设备，这就可能导致超时失败。

### 检查项

1. 确认主机是物理 Ubuntu PC、虚拟机还是 WSL。
2. 如果使用虚拟机，在 Jetson 刷机过程中重启后，手动重新连接 Jetson 的 USB 设备。
3. 如果使用 WSL，在设备重新连接后重新挂载设备。有关设置详情，请参考 [Flash JetPack with WSL2](/cn/ai_robotics_flash_jetpack_with_wsl2/)。
4. 确认直流电源适配器能够为 Jetson 设备提供足够的功率。
5. 更换另一根高质量 USB Type-C 线缆。线缆至少应支持 USB 2.0 数据通信，且长度最好短于 1.5 米。
6. 尝试主机上的其他 USB-A 接口。
7. 避免使用 USB 集线器，因为它们可能降低刷机过程中的连接稳定性。
8. 确认为目标 Jetson 产品和 JetPack 版本选择了正确的刷机包。
9. 再次进入恢复模式并重新连接电源后再尝试。
10. 完成以上检查后，重新启动刷机脚本并再次尝试。

### 建议

强烈建议使用独立的物理 Ubuntu 主机进行刷机。

## 错误：刷机过程中 NFS 挂载失败

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/nfs_error.png"/>
</div>

典型日志可能包含：

```text
Formatting APP partition /dev/nvme0n1p1 ...
tar --checkpoint-action="ttyout=Hit %s checkpoint #%u%*\r" -x -I 'zstd -T0' -pf /mnt/external/system.img --warning=no-timestamp --numeric-owner --xattrs --xattrs-include=* -C /tmp/ci-EUsLOiqBxk
Flash failure
Either the device cannot mount the NFS server on the host or a flash command has failed.
Check your network setting (VPN, firewall,...) to make sure the device can mount NFS server.
```

参考：
[Flash fails Orin AGX at 99% - NVIDIA Developer Forums](https://forums.developer.nvidia.com/t/either-the-device-cannot-mount-the-nfs-server-on-the-host-or-a-flash-command-has-failed-while-using-sdk-manager/312719/3)

### 原因分析

在使用 initrd 刷机时，Jetson 会通过 USB0 网络接口挂载由主机 PC 导出的 NFS 共享。如果主机 NFS 服务不可用、被防火墙规则阻止，或者主机环境不稳定，刷机可能会在接近结束时失败。

### 检查清单

1. 确保 NFS 服务器在 Ubuntu 主机上正在运行：

```bash
systemctl status nfs-kernel-server
```

2. 临时禁用 Ubuntu 防火墙后再次测试：

```bash
sudo ufw status
sudo ufw disable
```

3. 避免使用 VM、Docker 和 WSL 环境。
4. 在使用前将 NVMe SSD 格式化为 `ext4`。
5. 在主机上安装所需依赖：

```bash
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```

6. 检查主机 PC 是否有足够的可用磁盘空间。当主机存储空间不足时，也可能导致 NFS 挂载失败。
7. 如果问题仍然存在，请使用经过验证的 SSD 型号进行测试。Seeed SSD 参考：
[NVMe M.2 2280 SSD 256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)

## 错误：`The connected jetson device is not ready for flash: Stat for blob_boot0.imgimg failed`

关键日志行为：

```text
Stat for blob_boot0.imgimg failed Error: Return value 19
```

### 原因分析

在实际使用中，这通常意味着用于生成 boot blob 的主机环境与刷机工具链不兼容。我们在 Ubuntu 24.04 主机上见过这种情况。

### 推荐解决方案

使用 Ubuntu 20.04 或 Ubuntu 22.04 作为刷机主机，而不是 Ubuntu 24.04。

## 错误：`could not find tegrarcm_v2`

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/tegrarcm_v2_failed.jpg"/>
</div>

典型日志：

```text
Error: could not find tegrarcm_v2
```

### 原因分析

刷机包和 MFI 刷机工具是为 x86 主机设计的。当用户尝试从另一台 Jetson 设备或其他不受支持的主机架构上刷机时，常会出现此错误。

### 推荐解决方案

使用 x86 架构的 Ubuntu 主机 PC 进行刷机。

## 错误：首次启动后卡在 OEM 配置界面

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/oem_failed.png"/>
</div>

典型提示信息：

```text
(1 of 2) A start job is running for End-user configuration after initial OEM installation (Debconf UI)
```

### 原因分析

这通常意味着 OEM 设置服务正在等待用户交互，但当前没有可用的显示路径。常见情况是首次启动时未连接 HDMI 显示器，而是在之后才接上。

### 处理步骤

1. 关闭 Jetson 电源。
2. 断开不必要的外设。
3. 仅保留 HDMI 显示器和电源连接。
4. 重启设备。
5. 如有需要，可多重启几次。

## 其他说明

- 如果设备在刷机过程中重启，这是预期行为。关键在于主机是否能正确重新检测并连接 Jetson。
- 如果刷写到 NVMe，请确认目标硬盘健康且已正确格式化。
- 如果使用 SDK Manager，请同时查看终端输出，以确定具体失败的组件。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
