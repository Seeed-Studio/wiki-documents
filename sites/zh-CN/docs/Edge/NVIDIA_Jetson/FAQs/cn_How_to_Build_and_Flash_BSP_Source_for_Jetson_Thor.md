---
description: 为 NVIDIA Jetson AGX Thor 开发者套件构建并刷写 BSP 源码包。
title: 如何为 Jetson Thor 构建和刷写 BSP 源码
keywords:
  - Jetson Thor
  - BSP
  - 源码构建
  - 刷写
  - JetPack 7.1
image: https://files.seeedstudio.com/wiki/other/thor-post.png
slug: /how_to_build_and_flash_bsp_source_for_jetson_thor
sku: 100060965
last_update:
  date: 04/14/2026
  author: Dayu
createdAt: '2026-04-14'
updatedAt: '2026-05-25'
url: https://wiki.seeedstudio.com/cn/how_to_build_and_flash_bsp_source_for_jetson_thor/
---

# 如何为 Jetson Thor 构建和刷写 BSP 源码

<div align="center">
  <img width ="700" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
  </a>
</div>

本 Wiki 解释了如何使用 BSP 源码包在 Ubuntu 主机上为 **NVIDIA Jetson AGX Thor 开发者套件** 进行构建和刷写。

本文中的工作流程使用下面提供的 **JetPack 7.1** BSP 包，并涵盖：

- 下载并解压 BSP 包
- 在 Thor 上进入 USB 恢复模式
- 运行 `thor_build_flash.sh`
- 使用 `thor_cleanup.sh` 清理工作空间
- 可选的刷写后软件包安装

## 前提条件

- NVIDIA Jetson AGX Thor 开发者套件
- Ubuntu 主机 PC
- USB Type-C 数据线
- Thor 的稳定电源供应
- Thor 的 BSP 包

:::info
将 Thor 连接到主机 PC 时，请使用 **最靠近 HDMI 连接器的 USB Type-C 刷写端口**。
:::

## 1. 下载并解压 BSP 包

首先下载 BSP 包：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack 版本</th>
      <th>下载链接</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAnZOQBV-uhTbnY0Zp3-HEqAQzFPrkH5LKgCsJ4KHRYCMg?e=rjGn93">下载</a></td>
    </tr>
  </tbody>
</table>
</div>

下载包后，解压并进入工作目录：

```bash
cd /other_data
sudo tar xpf <downloaded_package>.tar.gz
cd thor-dev/linux_for_tegra
```

:::tip
解压包时使用 `sudo tar xpf`，以便正确保留文件所有权和权限。
:::

## 2. 在 Thor 上进入 USB 恢复模式

首先将主机 PC 连接到 **靠近 HDMI 连接器的 USB Type-C 刷写端口**：

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/flash-Thor-dev.png"/>
</div>

侧边按钮如下图所示：

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/JAT-Button-Side_white.png"/>
</div>

图中按钮定义：

- `11`: 电源按钮
- `12`: 强制恢复按钮
- `13`: 复位按钮
- `14`: 白色 LED

要进入恢复模式：

1. 关闭 Thor 电源。
2. 使用 USB Type-C 线缆连接主机 PC 和 Thor 的刷写端口。
3. 按住 **强制恢复按钮** (`12`)。
4. 在按住 **强制恢复按钮** (`12`) 的同时，按下 **电源按钮** (`11`) 为板子上电。
5. 板子进入恢复模式后松开按钮。

在主机 PC 上，使用以下命令验证恢复模式：

```bash
lsusb
```

处于 USB 恢复模式的 Thor 通常被枚举为：

```text
0955:7045
```

参考图片：

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/recovery-mode.png"/>
</div>

## 3. 构建与刷写

首先运行帮助命令：

```bash
cd /other_data/thor-dev/linux_for_tegra
./thor_build_flash.sh help
```

默认的板级设置已为 **Thor J601** 配置好：

- `CONFIG=jetson-agx-thor-devkit`
- `BOARDID=3834`
- `BOARDSKU=0008`
- `FAB=400`
- `BOARDREV=G.5`
- `CHIP_SKU=00:00:00:A0`

### 典型流程

```bash
cd /other_data/thor-dev/linux_for_tegra

./thor_build_flash.sh prepare
./thor_build_flash.sh build
sudo -E ./thor_build_flash.sh flash
```

你也可以一次性运行完整流程：

```bash
./thor_build_flash.sh all
```

:::tip
对于首次刷写，推荐使用分步的 `prepare -> build -> flash` 流程，因为这使得故障更容易定位。
:::

### 阶段含义

- `prepare`
  - 下载 rootfs 压缩包
  - 解压 `rootfs/`
  - 运行 `apply_binaries.sh`
  - 下载并解压交叉工具链

- `build`
  - 编译内核和树外模块
  - 将内核镜像复制到 `rootfs/boot/`
  - 运行 `rootfs_magic.sh`
  - 更新 initrd
  - 创建默认用户

- `flash`
  - 调用 `l4t_initrd_flash.sh`
  - 要求目标板处于 USB 恢复模式

### 重要注意事项

- 以普通用户身份运行 `build`，而不是 `root`。
- 使用 `sudo -E` 运行 `flash`。
- Thor USB 恢复模式在主机上通常显示为 `0955:7045`。
- 脚本会在构建前自动修复缺失的 `nvethernetrm` 符号链接。

### 常用覆盖项

当需要覆盖默认值时，使用环境变量：

```bash
CONFIG=jetson-agx-thor-devkit \
DOWNLOAD_BASE_URL=http://192.168.1.77/jetson \
DEFAULT_USER=seeed \
DEFAULT_PASSWORD=seeed \
DEFAULT_HOSTNAME=jetson-test \
./thor_build_flash.sh build
```

有用的变量：

- `DOWNLOAD_BASE_URL`
- `ROOTFS_NAME`
- `TOOLCHAIN_NAME`
- `DEFAULT_USER`
- `DEFAULT_PASSWORD`
- `DEFAULT_HOSTNAME`
- `FLASH_TARGET`
- `RUN_ROOTFS_MAGIC`

## 4. 清理

显示帮助：

```bash
./thor_cleanup.sh help
```

### 推荐的日常清理

```bash
./thor_cleanup.sh incremental
```

这会保留 `source/kernel_out` 以便下次编译保持快速，同时删除：

- `output/`
- `bootloader/system.img*`
- `bootloader/esp.img*`
- `bootloader/recovery.img*`
- `bootloader/boot*.img`
- 刷写临时文件和日志

### 清理模式

- `incremental`
  - 保留 `source/kernel_out`
  - 正常开发的最佳选择

- `rebuild`
  - 同时删除 `source/kernel_out`
  - 下次构建将进行完整重建

- `distclean`
  - 同时删除 `rootfs/` 和 `l4t-gcc/`
  - 仅在归档或完全重置环境时使用

### 试运行

```bash
./thor_cleanup.sh incremental --dry-run
```

## 5. 可选的刷写后软件包

在 Thor 成功启动后，你可以选择性地更新软件包元数据并安装 `nvidia-jetpack` 元软件包：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## 故障排除

### 启动显示 `mmap` 错误

如果 Thor 无法正常启动，并且屏幕显示如下图的 `mmap` 错误，请重新进入 USB 恢复模式并重新刷写板子：

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/mmap-error-thor.png"/>
</div>

从刷写工作空间运行以下命令：

```bash
cd /other_data/thor-dev/linux_for_tegra
sudo BOARDID=$BOARDID FAB=$FAB BOARDSKU=$BOARDSKU BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU \
./l4t_initrd_flash.sh --erase-all jetson-agx-thor-devkit internal
```

:::note
如果运行上述擦除并重新刷写命令后 `mmap` 错误仍然存在，请收集完整的启动日志并联系技术支持。
:::

## 资源

- [NVIDIA Jetson AGX Thor 开发者套件](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)
- [适用于 JetPack 7.1 的 Thor BSP 包](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAnZOQBV-uhTbnY0Zp3-HEqAQzFPrkH5LKgCsJ4KHRYCMg?e=rjGn93)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
