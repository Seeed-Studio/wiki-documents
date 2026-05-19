---
description: 专家指南，使用rpiboot和bmaptool在Linux、macOS和Windows上为Reachy Mini的CM4重新刷写ReachyMiniOS镜像。
title: 重新刷写Raspberry Pi OS镜像
slug: /reachymini_platforms_reachy_mini_reflash_the_rpi_iso
keywords:
  - reflash
  - factory reset
  - os image
  - rpiboot
  - bmaptool
  - cm4
  - expert
  - recovery
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/
---

# 高级：重新刷写Raspberry Pi OS镜像

:::danger 仅限专家指南
本指南解释如何将ReachyMiniOS镜像重新刷写到Reachy Mini的CM4。这样做将_出厂重置_您的Reachy Mini。

大多数用户不需要此操作。Reachy Mini预装了软件。只有在您遇到无法调试的损坏安装时，才按照这些步骤操作。
:::

---

## 下载OS镜像（和bmap）

首先，从以下位置下载最新的OS镜像和`.bmap`文件：
https://github.com/pollen-robotics/reachy-mini-os/releases

:::tip
`.bmap`文件由`bmaptool`使用（Linux/macOS）。如果您使用Raspberry Pi Imager（Windows）刷写，则只需要OS镜像文件。
:::

---

## 安装rpiboot

:::info Linux / macOS
按照以下说明构建：
https://github.com/raspberrypi/usbboot?tab=readme-ov-file#building-1
:::

:::info Windows
从官方Raspberry Pi仓库下载并安装rpiboot GUI：
https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe
:::

---

## 安装刷写工具

:::info Linux
安装bmaptool：
```bash
sudo apt install bmap-tools
```
:::

:::tip Linux用户
Linux用户可以使用`bmaptool`或Raspberry Pi Imager（Windows选项）。对于此工作流，Raspberry Pi Imager通常_比`bmaptool`慢得多_，因此在可用时优先使用`bmaptool`。
:::

:::info macOS
从官方仓库安装bmaptool：
```bash
python3 -m pip install --user "git+https://github.com/yoctoproject/bmaptool.git"
export PATH="$HOME/.local/bin:$PATH"
bmaptool --version
```
:::

:::tip macOS用户
macOS用户可以使用`bmaptool`或Raspberry Pi Imager（Windows选项）。对于此工作流，Raspberry Pi Imager通常_比`bmaptool`慢得多_，因此在可用时优先使用`bmaptool`。
:::

:::info Windows
下载并安装Raspberry Pi Imager：
https://www.raspberrypi.com/software/
:::

---

## 设置

**第1步：** 在继续之前完全关闭机器人。

:::tip 第2步：启动rpiboot
启动**rpiboot**（它将等待机器人连接）：
:::

* **Linux / macOS**：在终端中运行`rpiboot`命令：
  ```bash
  sudo ./rpiboot -d mass-storage-gadget64
  ```
* **Windows**：运行您在上一步中安装的**RPiBoot**可执行文件。

:::tip 第3步
将头部的PCB上的开关设置为**DOWNLOAD（SW1）**：
:::

![pcb_usb_and_switch](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/pcb_usb_and_switch.png)

**第4步：** 插入USB电缆（上面图像中标记为**USB2**的那根）。

**第5步：** 打开机器人电源。

现在内部eMMC应该显示为大容量存储设备。

---

## 卸载并刷写ISO

:::info Linux
:::warning 确保设备在刷写之前已卸载。

**检查并卸载设备**

您的设备应该显示为`/dev/sdx`（类似于`/dev/sda`）。

**通过运行检查已挂载的分区**：
```bash
lsblk
```

如果您看到`bootfs`和`rootfs`如下图，则表示它**已挂载**：
```
sda           8:0    1  14.6G  0 disk
├─sda1        8:1    1   512M  0 part /media/<username>/bootfs
└─sda2        8:2    1  14.1G  0 part /media/<username>/rootfs
```

**卸载**分区：
```bash
sudo umount /media/<username>/bootfs
sudo umount /media/<username>/rootfs
```

**刷写ISO**
```bash
sudo bmaptool copy <reachy_mini_os>.zip --bmap <reachy_mini_os>.bmap /dev/sda
```

例如使用`v0.0.10`版本：
```bash
sudo bmaptool copy image_2025-11-19-reachyminios-lite-v0.0.10.zip --bmap 2025-11-19-reachyminios-lite-v0.0.10.bmap /dev/sda
```

:::info macOS
:::warning 确保设备在刷写之前已卸载。

**检查并卸载设备**

您的设备应该显示为`/dev/diskX`（类似于`/dev/disk4`）。

**通过运行检查已挂载的分区**：
```bash
mount
```

查找提及`bootfs`或`rootfs`的条目，例如`/dev/disk4s1`或`/dev/disk4s2`。

**卸载**整个磁盘（不是单个分区）：
```bash
diskutil unmountDisk /dev/disk4
```

将`/dev/disk4`替换为您的实际磁盘标识符。

:::note
`unmountDisk`一次卸载磁盘上的所有卷（`bootfs`、`rootfs`...）。
:::

:::warning 刷写ISO
使用`/dev/rdiskX`（注意**r**前缀！）而不是`/dev/diskX`。r前缀提供原始磁盘访问，这对于刷写命令是必需的。
:::

```bash
sudo bmaptool copy <reachy_mini_os>.zip --bmap <reachy_mini_os>.bmap /dev/rdiskX
```

例如使用`v0.0.10`版本（将`/dev/rdisk4`替换为您的实际磁盘标识符）：
```bash
sudo bmaptool copy image_2025-11-19-reachyminios-lite-v0.0.10.zip --bmap 2025-11-19-reachyminios-lite-v0.0.10.bmap /dev/rdisk4
```
:::

:::info Windows（Raspberry Pi Imager）
使用**Raspberry Pi Imager**可执行文件刷写OS镜像：

1. 打开**Raspberry Pi Imager**
2. 选择`Raspberry Pi 4`作为设备
3. 选择`使用自定义`作为操作系统，并提供下载的OS镜像（`.zip`或提取的`.img`）
4. 选择存储系统的唯一可用磁盘（通常是`RPi-MSD- 0001`）
5. 点击**写入**
:::

---

## 恢复正常启动模式

**第1步：** 关闭机器人电源

**第2步：** 将开关移回DEBUG

**第3步：** 断开USB电缆

**第4步：** 重新打开机器人电源

---

## 检查一切是否正常工作

:::tip 将您的电脑连接到机器人的WiFi热点：
* 网络名称：`reachy-mini-ap`
* 密码：`reachy-mini`
:::

SSH进入机器人：
```bash
ssh pollen@reachy-mini.local
# 密码：root
```

然后运行：
```bash
reachyminios_check
```

:::success
如果成功，您应该看到：
```bash
Image validation PASSED
```
:::