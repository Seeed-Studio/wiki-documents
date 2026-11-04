---
description: 选择一个 Recamera2 板卡配置，然后构建并打包完整的系统固件。
title: 构建完整固件
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_full_build
sku: 10003420
sidebar_position: 4
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/cn/recamera_pro_bsp_full_build/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 构建完整固件

## 三步工作流

```bash
cd recamera-pro-sdk-v1.0.10
./build.sh lunch     # 1. Select a board configuration
./build.sh all       # 2. Build and package the images
ls output/image/     # 3. Inspect the outputs
```

`./build.sh all` 按顺序运行这些阶段：`sysdrv`（U-Boot + 内核 + rootfs）→ `media` → `app` → `recovery` → `firmware`（镜像打包）。

> **在不带参数运行 `./build.sh` 时，默认执行 `allsave`**（`all` + `save`）。这还会在 `IMAGE/` 下归档镜像、补丁和构建信息。在 CI 中，如果你不想生成归档，请显式运行 `./build.sh all`。

## 选择板卡配置

```bash
./build.sh lunch
```

脚本会列出并编号 `project/cfg/` 下所有 **50** 个 `BoardConfig-*.mk` 文件。它们的命名遵循以下模式：

```text
BoardConfig-"boot-medium"-"power-scheme"-"hardware-version"-"application-scenario".mk
```

对于 reCamera Pro，从 `BoardConfig_Recamera2/` 下选择以下两个配置之一：

| Configuration file | Description |
| --- | --- |
| `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk` | **64 位，推荐**；使用 `aarch64-rockchip1240-linux-gnu` |
| `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC.mk` | 32 位版本 |

> 菜单编号在不同 SDK 版本之间可能会变化，因为条目是按文件名排序的。**不要在文档、脚本或 CI 配置中硬编码该编号；请使用完整文件名。**

### 非交互式选择（推荐用于 CI）

`lunch` 可以直接接受配置文件名，从而避免交互式菜单：

```bash
./build.sh lunch BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk
```

选择完成后，SDK 根目录中会包含一个名为 `.BoardConfig.mk` 的符号链接，指向所选文件：

```bash
ls -l .BoardConfig.mk
./build.sh info      # Check the current configuration, defconfig, DTS, partition table, and all RK_* variables
```

## 完整的 `build.sh` 命令参考

### 组件构建

| Command | Description |
| --- | --- |
| `env` | 生成 env 分区镜像（分区表和启动参数） |
| `meta` | 构建/导出多媒体 meta 头文件；可选，在构建应用时会自动处理 |
| `uboot` | 构建 U-Boot |
| `kernel` | 构建内核 |
| `rootfs` | 使用 Buildroot 构建根文件系统 |
| `driver` | 构建内核驱动模块（`.ko`） |
| `sysdrv` | 构建 U-Boot + 内核 + rootfs |
| `media` | 构建多媒体库，例如 mpp / rockit / rkaiq / rga / iva |
| `app` | 构建参考应用（**依赖 media；必须先构建 media**） |
| `recovery` | 构建恢复系统 |
| `tool` | 构建主机 PC 端工具 |
| `mcu` | 构建 MCU 侧 RT-Thread 固件。该命令在正常参数解析之前处理；使用 `./build.sh mcu [configuration]` |

### 打包与完整系统命令

| Command | Description |
| --- | --- |
| `all` | 构建并打包启动系统所需的全部镜像 |
| `allsave` | 运行 `all` + `save`；**在未提供参数时的默认行为** |
| `firmware` | 打包启动系统所需的全部镜像 |
| `updateimg` | 将所有分区镜像打包为 `update.img` |
| `unpackimg` | 解包一个 `update.img` 包 |
| `ota` | 打包 OTA 更新归档 `update_ota.tar` |
| `factory` | 使用 `tools/linux/SocToolKit` 创建工厂烧录镜像 |
| `sdcard_upgrade` | 创建 SD 卡升级镜像 |
| `save` | 将镜像、补丁和调试信息归档到 `IMAGE/`；`save xml` 还会保存仓库 manifest |

### 清理

| Command | Description |
| --- | --- |
| `clean` | 清理所有构建输出 |
| `clean uboot` / `clean kernel` / `clean driver` / `clean rootfs` / `clean sysdrv` | 清理选定组件 |
| `clean media` / `clean app` / `clean recovery` | 清理 media、应用或 recovery |

### 配置菜单

| Command | Description |
| --- | --- |
| `kernelconfig` | 打开内核 `menuconfig`；退出时自动使用 `savedefconfig` 将配置保存回 defconfig |
| `buildrootconfig` | 打开 Buildroot `menuconfig` 并在退出时保存 defconfig |

`kernelconfig` 会先保存一个 `defconfig.before` 快照。如果配置没有变化，则会跳过 `savedefconfig`。

### 安全启动与高级命令

| Command | Description |
| --- | --- |
| `dm` | 为加密或 verity 分区创建 device-mapper 镜像 |
| `dm-key-gen` | 生成 device-mapper 密钥 |
| `secure-boot-key-gen` | 生成安全启动密钥 |

### 获取帮助（注意这一点）

```bash
./build.sh help          # Print usage
./build.sh help media    # Show the actual make command used for media
./build.sh help kernel   # Likewise for kernel; also works with uboot/rootfs/sysdrv
```

**易踩坑点：**在执行 `lunch` 之前，`./build.sh --help` 可能会先打开板卡选择菜单，而不是显示帮助。脚本会在解析参数前检查 `.BoardConfig.mk`，如果缺少该链接则强制进行板卡选择。先运行 `./build.sh lunch`；在选择板卡之后，`--help` / `help` 才能显示使用信息。

`help <component>` 尤其有用，因为它会显示 `build.sh` 在底层调用的 `make` 命令和参数，从而更容易手动复现构建或诊断问题。

## 构建模式修饰符

在命令前添加前缀 `DEBUG` 或 `ASAN` 以更改构建模式：

```bash
./build.sh DEBUG app     # -O0 -g -ggdb -pg
./build.sh ASAN app      # -O0 -g -ggdb -fsanitize=address -fno-stack-protector -fno-omit-frame-pointer -fsanitize-recover=all
./build.sh app           # Default RELEASE: -Os; strip binaries during packaging
```

在 RELEASE 模式下，打包会运行 `strip`，但不会对 `libpthread*.so*` 和 `ld-*.so*` 执行 strip（gdb 的 pthread 调试和 valgrind 需要未 strip 的符号）。内核模块（`.ko`）只执行 `--strip-debug`。DEBUG 模式会跳过 strip，并安装 libc 调试符号（`runtime_lib/libc`、`lib.tar.bz2`）。

## 增量构建

```bash
./build.sh app                             # Rebuild applications only; fastest when changing application code
./build.sh app && ./build.sh firmware      # Rebuild applications and repackage the images
./build.sh kernel                          # Rebuild the kernel only
./build.sh clean app && ./build.sh app     # Clean and rebuild applications when needed
```

直接构建单个应用（先运行 `lunch`）：

```bash
make -C project/app/recamera_notify        # Build one application
make -C project/app/recamera_notify distclean
```

单独构建 media（先运行 `lunch`；media 可以独立于 SDK 其他部分构建）：

```bash
make -C media
```

## 构建输出

### `output/image/` — 可烧录镜像

| File | Description |
| --- | --- |
| `download.bin` | 用于烧录通信的设备端程序；仅加载到板卡内存中 |
| `idblock.img` | Loader，包括 DDR 初始化 |
| `uboot.img` | U-Boot |
| `env.img` | 分区表和启动参数 |
| `boot.img` | 包含 DTB 的内核镜像 |
| `rootfs.img` | 根文件系统（ext4） |
| `recovery.img` | 恢复系统（在此板卡配置中 `RK_ENABLE_RECOVERY=y`） |
| `misc.img` | 用于恢复启动标志的 misc 分区；此板卡配置使用 `recovery-misc.img` |
| `userdata.img` | userdata 分区（ext4，挂载在 `/userdata`） |
| `update.img` | 所有分区的完整打包；可用于升级 |
| `parameter.txt` | `rkflash.sh` 使用的分区表文本 |

### `output/out/` — 中间输出

| Directory | Description |
| --- | --- |
| `media_out/` | media 的 `include/` 和 `lib/`，作为应用依赖使用 |
| `app_out/` | 应用输出，在打包时合并到 rootfs 下的 `bin/lib/share/etc/root` |
| `rootfs_glibc_rv1126b/` | Rootfs 打包目录 |
| `sysdrv_out/` | sysdrv 输出 |
| `oem/`, `userdata/`, `ramdisk/` | OEM 分区、userdata 和恢复 ramdisk 内容 |
| `S20linkmount`, `S21appinit` | 生成的分区挂载脚本和 OEM 应用启动脚本 |

## 首次构建的预期耗时

一次完整的 `./build.sh all` 包含完整的 Buildroot 构建，根据 CPU 核心数和存储情况，可能需要几十分钟到数小时不等。首次运行时，Buildroot 会解压 `sysdrv/tools/board/buildroot/buildroot-2023.02.6.tar.gz` 并下载/构建大量软件包，因此**需要联网**。增量构建要快得多，因为它们只会重建发生变化的组件。

对于首次构建，建议使用 `screen` 或 `tmux` 并保存日志：

```bash
./build.sh all 2>&1 | tee build_$(date +%Y%m%d_%H%M).log
```

## 构建前检查清单

- 已完成 `./setup_build_env.sh`，并且版本摘要中没有任何必需工具显示为 `NOT INSTALLED`。
- 已通过 `./build.sh lunch` 选择 `BoardConfig_Recamera2/...IPC_64BIT.mk`，并且 `.BoardConfig.mk` 符号链接存在。
- `./build.sh info` 报告 `RK_KERNEL_DTS` 为 `rv1126b-recamera2-v1.dts`。
- SDK 所在分区至少剩余 20 GB 可用磁盘空间（推荐 100 GB 或更多）。
- 如果你更改了板卡配置，请先运行 `./build.sh clean`。

接下来，将镜像烧录到板卡上：[烧录与启动](/cn/recamera_pro_bsp_flash_boot/)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>