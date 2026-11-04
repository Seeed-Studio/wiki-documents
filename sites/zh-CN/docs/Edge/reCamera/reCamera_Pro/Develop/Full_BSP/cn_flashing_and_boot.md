---
description: 将自编译的固件镜像烧录到 reCamera Pro 并验证启动流程。
title: 烧录与启动
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_flash_boot
sku: 10003420
sidebar_position: 6
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/cn/recamera_pro_bsp_flash_boot/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 烧录与启动

## 分区表

reCamera Pro 的分区由板级配置中的 `RK_PARTITION_CMD_IN_ENV` 定义：

```text
32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),
```

| 分区 | 大小 | 偏移 | 内容 | 镜像文件 |
| --- | --- | --- | --- | --- |
| `env` | 32 K | 0 | 分区表 + 启动参数 | `env.img` |
| `idblock` | 512 K | 32 K | Loader（包括 DDR 初始化） | `idblock.img` |
| `uboot` | 4 M | 1 M | U-Boot | `uboot.img` |
| `misc` | 64 K | — | Recovery 启动标志等 | `misc.img`（本板使用 `recovery-misc.img`） |
| `recovery` | 10 M | — | Recovery 系统 | `recovery.img` |
| `boot` | 11 M | — | 内核 + DTB | `boot.img` |
| `rootfs` | 3 G | — | 根文件系统，ext4 | `rootfs.img` |
| `userdata` | 剩余空间 | — | ext4，挂载在 `/userdata` | `userdata.img` |

文件系统类型由 `RK_PARTITION_FS_TYPE_CFG=rootfs@IGNORE@ext4,userdata@/userdata@ext4` 指定：`rootfs` 不在 fstab 中显式挂载（内核通过 `root=PARTUUID=` 挂载），而 `userdata` 挂载在 `/userdata`。

来自 `rv1126b-recamera2-v1.dts` 中 `chosen/bootargs` 的内核命令行：

```text
earlycon=uart8250,mmio32,0x20810000 console=ttyFIQ0 rw root=PARTUUID=614e0000-0000 rootfstype=ext4 rootwait snd_soc_core.prealloc_buffer_size_kbytes=16 coherent_pool=32K
```

CMA 大小由 `RK_BOOTARGS_CMA_SIZE="8M"` 控制。

## 允许主机检测设备（一次性设置）

烧录工具通过 USB Rockusb 通信，需要添加一条 udev 规则（VID `2207` 为 Rockchip）：

```bash
sudo cp tools/linux/Linux_Upgrade_Tool/88-rockusb.rules /etc/udev/rules.d/
sudo udevadm control --reload-rules
sudo udevadm trigger
```

`tools/linux/SocToolKit/` 中也包含 `88-rockusb.rules` 和 `38-disk.rules`；使用图形工具时请一并安装。

## 进入烧录模式

设备必须处于 **Maskrom** 或 **Loader** 模式，`upgrade_tool` 才能检测到：

- **Maskrom：** 完全断电关机，然后按住 Maskrom/Recovery 按钮的同时上电（或将 eMMC CLK 短接到地）。主机上应在 `lsusb` 中看到类似 `2207:xxxx` 的 Rockchip 设备。
- **Loader：** 如果已安装可用的 U-Boot，运行 `upgrade_tool db <loader>`，或在 U-Boot 倒计时期间中断以进入 Loader 模式。

> 请查阅 reCamera Pro 的硬件手册或原理图以确认按钮的具体位置和丝印。在这里补充细节前，请先在实物设备上确认。

检查设备是否被检测到：

```bash
sudo tools/linux/Linux_Upgrade_Tool/upgrade_tool ld
```

`ListDevice` 应该会显示处于烧录模式的设备。

## 使用 `rkflash.sh` 烧录（推荐）

SDK 根目录中的 `./rkflash.sh` 脚本对 `upgrade_tool` 做了封装；镜像路径固定在 `output/image/` 下。

```bash
sudo ./rkflash.sh              # Same as all: flash every partition
sudo ./rkflash.sh all
sudo ./rkflash.sh loader
sudo ./rkflash.sh uboot
sudo ./rkflash.sh boot         # Flash the kernel only
sudo ./rkflash.sh rootfs       # Flash the root filesystem only
sudo ./rkflash.sh userdata
sudo ./rkflash.sh recovery
sudo ./rkflash.sh misc
sudo ./rkflash.sh trust
sudo ./rkflash.sh rd           # Reboot the device only
sudo ./rkflash.sh erase        # Erase the entire flash
```

第二个参数可以指定自定义镜像路径：

```bash
sudo ./rkflash.sh boot /path/to/my_boot.img
```

`all` 模式的实际命令序列（见 `project/rkflash.sh`）为：

```text
upgrade_tool ul -noreset download.bin     # Download loader without resetting
upgrade_tool di -p parameter.txt          # Write partition table
upgrade_tool di -uboot uboot.img
upgrade_tool di -m misc.img
upgrade_tool di -r recovery.img
upgrade_tool di -b boot.img
upgrade_tool di -rootfs rootfs.img
upgrade_tool di -userdata userdata.img
upgrade_tool rd                           # Reset and reboot
```

**两个重要的坑点：**

- `rkflash.sh` 中 `update.img` 烧录分支被**注释掉**了，因此 `./rkflash.sh update` 不会执行任何操作。要烧录完整固件包，请直接运行 `upgrade_tool uf`。
- `all` 模式不会烧录 `env.img`；它只写入 `parameter.txt`。如果你修改了 `RK_PARTITION_CMD_IN_ENV`，请手动运行 `upgrade_tool di -p env.img`，或使用 `uf` 烧录 `update.img`。

## 直接使用 `upgrade_tool`

工具版本 v2.26（`tools/linux/Linux_Upgrade_Tool/revision.txt`）。常用命令：

| 命令 | 作用 |
| --- | --- |
| `ld` | ListDevice：列出处于烧录模式的设备 |
| `cd <n>` | ChooseDevice：在连接多个设备时选择设备 |
| `ul <loader> [-noreset] [EMMC]` | UpgradeLoader：将 loader 下载到内存 |
| `db <loader>` | DownloadBoot |
| `uf <update.img> [-noreset]` | UpgradeFirmware：烧录完整固件包 |
| `di -p [parameter.txt]` | 写入分区表 |
| `di -b [boot.img]` | 写入 boot 分区 |
| `di -rootfs [rootfs.img]` | 写入 rootfs 分区 |
| `di -u [userdata.img]` | 写入 userdata 分区 |
| `di -r [recovery.img]` | 写入 recovery |
| `di -m [misc.img]` | 写入 misc |
| `pl` | PartitionList：读取设备分区表 |
| `ef [loader|firmware]` | EraseFlash：擦除 flash |
| `rd` | ResetDevice：重启 |
| `sn [serial-number]` / `rsn` | 写入 / 读取序列号（配合 `project/app/recamera_utils/sn_tool`） |
| `sfi [firmware]` | ShowFirmwareInfo：显示固件信息 |
| `exf [firmware|loader] [dir]` | ExtractFirmware：解包固件或 loader |
| `gpt [parameter] [out.gpt]` | 根据分区表生成 GPT |
| `rl [startSec] [len] [file]` / `wl [startSec] [sizeSec] [file]` | 读 / 写 LBA 数据 |

示例：

```bash
cd tools/linux/Linux_Upgrade_Tool
sudo ./upgrade_tool ld
sudo ./upgrade_tool ul ../../../output/image/download.bin
sudo ./upgrade_tool uf ../../../output/image/update.img
sudo ./upgrade_tool rd
```

完整命令说明请参阅同目录下的 `命令行开发工具使用文档.pdf` 和 `readme.txt`。

## 图形界面烧录

- **Linux：** `tools/linux/SocToolKit/SocToolKit`（Qt 图形界面；请先安装 `38-disk.rules` 和 `88-rockusb.rules`）。
- **Windows：** 需单独下载 Rockchip RKDevTool；SDK **不**包含 Windows 工具。

## 创建出厂镜像

```bash
./build.sh factory
```

这会使用 `tools/linux/SocToolKit/bin/linux/programmer_image_tool` 将 `output/image/update.img` 解包到 `output/image/factory/`。镜像类型由 `RK_BOOT_MEDIUM` 选择（本板设置为 `emmc`）。NAND 介质还会传递块/页/OOB 参数，可通过 `RK_NAND_BLOCK_SIZE` 及相关变量进行覆盖。

## SD 卡升级镜像

```bash
./build.sh sdcard_upgrade
```

输出目录为 `output/image/sdcard_upgrade/`。

> **当前板级配置不支持：** `sdcard_upgrade` 需要定义 `RK_SDCARD_UPGRADE_UBOOT_DEFCONFIG` 和 `..._FRAGMENT`，但在 `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk` 中这两个变量都未定义。`build.sh` 中的 `check_config` 会以 `return 0` 静默跳过该命令。若要启用 SD 卡升级，请在板级配置中添加这两个变量（通常还需要 `RK_SDCARD_UPGRADE_SCREEN_ENABLE`）。

## 启动流程与 Recovery

- `RK_ENABLE_RECOVERY=y`，`RK_MISC=recovery-misc.img`：misc 分区中保存 Recovery 启动标志。
- 通过向 misc 写入标志并重启，或由上层应用触发（OTA 流程），可以进入 Recovery。
- `RK_OTA_RESOURCE="boot.img rootfs.img"`：OTA 仅更新 boot 和 rootfs 分区。
- 恢复出厂设置使用由 `RK_ENABLE_OTA=y` 提供的标志机制（板级配置注释为 “Used for set/get factory reset flag”）。

详情参见 [OTA 与固件发布](/cn/recamera_pro_bsp_ota_release/)。

## 烧录后的验证

上电后连接串口终端（1500000 8N1；参见 [设备访问与调试](/cn/recamera_pro_bsp_device_debug/)）。你应能看到 U-Boot → 内核 → rootfs 的启动日志，随后是来自 `overlay-buildroot-banner/etc/motd` 的 reCamera ASCII 横幅。

进入 shell 后，验证以下内容：

```bash
# cat /proc/version              # Kernel 6.1.157
# uname -m                       # aarch64
# cat /proc/cmdline              # Should match bootargs in the DTS
# cat /etc/os-release            # Buildroot version information
# ls /oem /userdata              # Confirm partitions are mounted
# cat /run/board_id.env          # Baseboard / expansion-board detection result
```

## 常见问题

| 现象 | 原因 | 解决方案 |
| --- | --- | --- |
| `upgrade_tool ld` 未列出设备 | 缺少 udev 规则 / 未进入烧录模式 / 未以 root 运行 | 安装规则并运行 `udevadm trigger`；确认 Maskrom 模式；使用 `sudo` 运行 |
| 运行 `upgrade_tool` 时提示 `Permission denied` | 解压时丢失了可执行权限 | 运行 `chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool` |
| 烧录后无串口输出，系统无法启动 | 未烧录 Loader/idblock 或版本不匹配 | 再次运行 `rkflash.sh all`，并确认 `download.bin` 与 `idblock.img` 来自同一次构建 |
| 挂载 rootfs 时内核崩溃（kernel panic） | `boot.img` 与 `rootfs.img` 来自不同构建 | 重新完整构建并烧录，或至少同时烧录 boot 和 rootfs |
| 修改分区大小后出现问题 | env / parameter 未更新 | 单独烧录 `env.img`（`di -p`），或使用 `uf` 烧录 `update.img` |
| `./rkflash.sh update` 没有任何反应 | 该分支被注释掉了 | 使用 `upgrade_tool uf output/image/update.img` |

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>