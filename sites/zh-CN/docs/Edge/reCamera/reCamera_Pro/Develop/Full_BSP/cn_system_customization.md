---
description: 通过 DTS、内核、Buildroot、overlay、分区和 MCU 配置来自定义系统。
title: 系统定制
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_system_customization
sku: 10003420
sidebar_position: 9
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/cn/recamera_pro_bsp_system_customization/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 系统定制

本页涵盖四种常见的系统定制路径：设备树、内核配置、Buildroot 软件包以及 overlay 文件覆盖。完整的配置选项列表请参见 `project/cfg-all-items-introduction.txt`。

## 板级配置文件

reCamera Pro 的配置位于：

```text
project/cfg/BoardConfig_Recamera2/
├── BoardConfig-EMMC-RK801-RV1126B_V1-IPC.mk        # 32-bit
├── BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk  # 64-bit (recommended)
├── RECAMERA2-IPC-RELEASE-NOTES.md
└── overlay/                                        # 15 overlay directories
```

执行 `./build.sh lunch` 之后，SDK 根目录下的 `.BoardConfig.mk` 会成为指向所选文件的符号链接。**请编辑实际的配置文件本身**；修改会通过该符号链接被使用。

64 位配置中的关键设置：

```bash
export RK_ARCH=arm64
export RK_CHIP=rv1126b
export RK_TOOLCHAIN_CROSS=aarch64-rockchip1240-linux-gnu
export RK_BOOT_MEDIUM=emmc
export RK_UBOOT_DEFCONFIG=rv1126b_recamera2_defconfig
export RK_UBOOT_DEFCONFIG_FRAGMENT="rk-emmc.config rv1126b-ipc.config"
export RK_UBOOT_RKBIN_MINIALL_INI_FILE=RV1126BMINIALL_IPC.ini
export RK_KERNEL_DEFCONFIG=rv1126b_ipc_defconfig
export RK_KERNEL_DEFCONFIG_FRAGMENT="rv1126b-display.config rv1126b-sdiowifi.config rv1126b-bt.config rv1126b-recamera2.config"
export RK_KERNEL_DTS=rv1126b-recamera2-v1.dts
export RK_KERNEL_RC_DTO=y
export RK_BUILDROOT_DEFCONFIG=recamera2_buildroot_aarch64_defconfig
export RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2
export RK_PARTITION_CMD_IN_ENV="32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),"
export RK_PARTITION_FS_TYPE_CFG=rootfs@IGNORE@ext4,userdata@/userdata@ext4
export RK_ENABLE_RECOVERY=y
export RK_MISC=recovery-misc.img
export RK_OTA_RESOURCE="boot.img rootfs.img"
export RK_OTA_VERSION=V1.0.10
export RK_BOOTARGS_CMA_SIZE="8M"
export RK_AIISP_MODEL=NONE
export RK_ENABLE_WIFI=y
export RK_ENABLE_WIFI_CHIP=AP6XXX
export RK_ENABLE_BLUETOOTH=y
export RK_APP_RECAMERA_WEB=y
export RK_APP_RECAMERA_NOTIFY=y
export RK_APP_RECAMERA_ONVIF=y
export RK_APP_RECAMERA_SERVICES=y
export RK_APP_RKLLM_INFERENCE=y
export RK_BUILD_APP_TO_OEM_PARTITION=n
export RK_FREETYPE_USE_BUILDROOT=y
export RK_CAMERA_SENSOR_IQFILES="ainr/sc450ai_default_default.json ainr/sc450ai ainr/sc850sl ainr/sc850sl_default_default.json"
```

> 在更改板级配置后，请在重新构建前使用 `./build.sh clean` 清理受影响的组件，以避免不同配置的输出混在一起。

## 1. 设备树定制

### 文件布局

内核 DTS 文件位于 `sysdrv/source/kernel/arch/arm64/boot/dts/rockchip/`：

| 文件 | 作用 |
| --- | --- |
| `rv1126b-recamera2-v1.dts` | **顶层入口点**（由 `RK_KERNEL_DTS` 选择）；`model = "Rockchip RV1126B RECAMERA PRO Board"` |
| `rv1126b-recamera2-cam-csi0.dtsi` | CSI0 相机通路 |
| `rv1126b-recamera2-cam-csi1.dtsi` | CSI1 相机通路 |
| `rv1126b-recamera2-disp.dtsi` | 显示通路 |
| `rv1126b-recamera2-ext-cam-csi1.dts` | **扩展板相机**，编译为 `.dtbo` |
| `rv1126b-recamera2-baseboard-0.dts` / `-baseboard-1.dts` | 底板变体 |
| `rv1126b-recamera2-extboard-0.dts` / `-extboard-1.dts` | 扩展板变体 |

`rv1126b-recamera2-v1.dts` 中被注释掉的 include（`rv1126b-aoa.dtsi`、`rv1126b-recamera2.dtsi` 和 `rv1126b-recamera2-v1.dtsi`）表明该 DTS 是**自包含**的：电源树（`vcc12v_dcin` → `vcc5v0_sys` → `vdd_npu` 等）直接在顶层文件中通过 `regulator-fixed` 定义。

### 修改内核命令行

顶层的 `chosen` 节点为：

```dts
chosen {
    bootargs = "earlycon=uart8250,mmio32,0x20810000 console=ttyFIQ0 rw root=PARTUUID=614e0000-0000 rootfstype=ext4 rootwait snd_soc_core.prealloc_buffer_size_kbytes=16 coherent_pool=32K";
};
```

不要在这里修改 CMA 大小。请在板级配置中设置 `RK_BOOTARGS_CMA_SIZE`；`build.sh` 会将其添加到命令行片段中（`__PREPARE_BOARD_CFG` → `RK_KERNEL_CMDLINE_FRAGMENT`）。

### DTBO（运行时设备树 Overlay）

在 `RK_KERNEL_RC_DTO=y` 且内核 `CONFIG_OF_OVERLAY=y` 的情况下，reCamera Pro 使用 DTBO 来支持**一个固件镜像适配多个底板和扩展板**：

1. 在构建时，每个 `rv1126b-recamera2-ext-*.dts` 会被编译为对应的 `.dtbo`。
2. `build.sh` 中的 `__PACKAGE_OEM()` 会将 `sysdrv/source/objs_kernel/arch/arm64/boot/dts/rockchip/rv1126b-recamera2-ext-*.dtbo` 复制到 `/oem/usr/share/`。
3. 启动时，`S00board-id` overlay 通过读取 ADC 来识别板卡，并将结果写入 `/run/board_id.env`。
4. 启动脚本会根据检测到的 ID 选择要应用的 `.dtbo`。

**板卡识别机制**（`overlay-buildroot-board-id/etc/init.d/S00board-id`）：

```text
ADC device       : /sys/bus/iio/devices/iio:device0
Output file      : /run/board_id.env
Samples          : Average of 3 readings
Tolerance        : 440
ADC levels       : 0 1365 2730 4094 5460 6824 8191
Corresponding V  : 0.0 0.3 0.6 0.9 1.2 1.5 1.8 V
Baseboard revs   : V0.9 V1.0 V1.1 V1.2 V1.3 V1.4 V1.5 (BASEBOARD_VERSIONS)
Baseboard models : TYPE0 ... TYPE6 (BASEBOARD_MODELS)
Expansion revs   : V0.9 ... V1.5 (EXPBOARD_VERSIONS)
Expansion models : TYPE0 ... TYPE6 (EXPBOARD_MODELS)
```

要添加一个硬件变体：**添加一个分压电阻电平 → 更新 `S00board-id` 中的 `LEVELS` / `VERSIONS` / `MODELS` 数组 → 添加对应的 `.dts` → 在启动脚本中添加一个分支**。请保持这三部分一致；否则，新板卡可能会被识别为已有型号。

### 更换相机 Sensor

1. 确认匹配的驱动在内核片段中被设置为 `m` 或 `y`（`rv1126b-recamera2.config` 已包含许多驱动，例如 SC450AI、SC850SL、GC2053 和 IMX415）。如果缺少该驱动，请启用相应的 `CONFIG_VIDEO_xxx` 选项。
2. 在 DTS 中更新相机节点的 `compatible`、I2C 地址、时钟和电源稳压器。
3. 将 IQ 文件放在 `media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/` 下，并在板级配置中更新 `RK_CAMERA_SENSOR_IQFILES`。
4. 重新构建 `kernel` + `media` + `firmware`。

## 2. 内核配置

```bash
./build.sh kernelconfig      # Open menuconfig; savedefconfig runs on exit
./build.sh kernel            # Rebuild the kernel
./build.sh clean kernel      # Clean the kernel outputs
```

`kernelconfig` 会先保存一个 `defconfig.before` 快照。退出时，它会比较配置，并且**只有在确实有变更时才写入 defconfig**，从而避免无关的 diff。

最终配置由 `RK_KERNEL_DEFCONFIG=rv1126b_ipc_defconfig` 加上按顺序应用的四个片段组成：

| 片段 | 内容 |
| --- | --- |
| `rv1126b-display.config` | 显示设置 |
| `rv1126b-sdiowifi.config` | SDIO Wi-Fi |
| `rv1126b-bt.config` | 蓝牙 |
| **`rv1126b-recamera2.config`** | **Seeed 定制项**；请编辑此文件 |

`rv1126b-recamera2.config` 位于 `sysdrv/source/kernel/arch/arm64/configs/`（32 位版本是同名文件，位于 `arch/arm/configs/`；对于 64 位板卡，请编辑 arm64 目录下的文件）。文件末尾有一个 `#### recamera2 defconfig ####` 标记。Seeed 的新增内容位于该标记之后，包括：

```text
CONFIG_CAN=y / CONFIG_CAN_RK3576=y            # CAN bus
CONFIG_STMMAC_ETHTOOL=y / CONFIG_DWMAC_ROCKCHIP_TOOL=y / CONFIG_REALTEK_PHY=y / CONFIG_MAXIO_PHY=y
CONFIG_GENERIC_ADC_BATTERY=y / CONFIG_CHARGER_GPIO=y / CONFIG_POWER_SUPPLY_DEBUG=y
CONFIG_SND_SOC_ES7202=y                        # Microphone-array ADC
CONFIG_TYPEC_AW35615=y / CONFIG_TYPEC_TCPM=y   # USB Type-C
CONFIG_NEW_LEDS=y / CONFIG_LEDS_CLASS=y / CONFIG_LEDS_PWM=y / CONFIG_LEDS_TRIGGERS=y
CONFIG_LEDS_TRIGGER_TIMER=y / _HEARTBEAT=y / _PATTERN=y
CONFIG_RTC_DRV_PCF8563=y                       # RTC
CONFIG_INV_ICM42670_I2C=y                     # IMU (used by recamera_utils/hw_test/imu_test.py)
CONFIG_FANOTIFY=y
CONFIG_CRYPTO*=m / CONFIG_CRYPTO_DEV_ROCKCHIP=m
CONFIG_OF_OVERLAY=y                            # DTBO support
CONFIG_DRM_PANEL_ILITEK_ILI9881C=y / CONFIG_REGULATOR_RASPBERRYPI_TOUCHSCREEN_V2=y
CONFIG_INPUT_TOUCHSCREEN=y / CONFIG_TOUCHSCREEN_GOODIX=y
CONFIG_USB_CONFIGFS_NCM=y
CONFIG_NETFILTER=y / CONFIG_IP_NF_IPTABLES=y / CONFIG_IP_NF_FILTER=y / CONFIG_BPFILTER=y
```

推荐的添加内核选项方式是**将它们追加到 `rv1126b-recamera2.config` 中 Recamera2 段落之后**，而不是直接编辑 `rv1126b_ipc_defconfig`。后者是上游 Rockchip 文件，在 SDK 升级时更容易产生冲突。

一些值得注意的现有选择：

- `CONFIG_PANIC_ON_OOPS=y` + `CONFIG_BOOTPARAM_SOFTLOCKUP_PANIC=y` + `CONFIG_BOOTPARAM_HARDLOCKUP_PANIC=y`：oops、soft lockup 和 hard lockup 都会触发 panic。**在开发阶段可考虑暂时关闭这些选项**；否则，一旦发生故障系统会立即重启，从而丢失调试所需的现场状态。
- `CONFIG_ROCKCHIP_DEBUG=y`、`CONFIG_DEBUG_FS=y`、`CONFIG_RK_CMA_PROCFS=y`、`CONFIG_RK_DMABUF_PROCFS=y`、`CONFIG_RK_MEMBLOCK_PROCFS=y` 和 `CONFIG_ROCKCHIP_RGA_PROC_FS=y`：已启用调试节点。`/proc/rk*` 和 `/sys/kernel/debug/` 下的内存与 RGA 统计信息有助于排查内存泄漏。
- `CONFIG_ELF_CORE=y` + `CONFIG_CORE_DUMP_DEFAULT_ELF_HEADERS=y`：启用 coredump。`build.sh` 中的 `__BUILD_ENABLE_COREDUMP_SCRIPT()` 可以生成启用 coredump 的脚本。
- `CONFIG_VIDEO_RK_IRCUT` **未启用**。如需 IRCUT 控制，请自行启用。

## 3. Buildroot 定制

### 位置与解压

Buildroot 源码以压缩包形式提供：

```text
sysdrv/tools/board/buildroot/buildroot-2023.02.6.tar.gz
sysdrv/tools/board/buildroot/recamera2_buildroot_aarch64_defconfig   # 64-bit (this board)
sysdrv/tools/board/buildroot/recamera2_buildroot_defconfig           # 32-bit
sysdrv/tools/board/buildroot/busybox.config
sysdrv/tools/board/buildroot/{busybox_patch,mpv_patch,qemu_patch,hcitool_patch,prelink-cross_patch}
sysdrv/tools/board/buildroot/font
```

第一次运行 `./build.sh rootfs` 会将其解压到 `sysdrv/source/buildroot/buildroot-2023.02.6/`。构建输出位于：

```text
sysdrv/source/buildroot/buildroot-2023.02.6/output/
├── staging/    # Buildroot development sysroot (headers + libraries)
├── target/     # Target rootfs contents
├── host/       # Host-side tools
└── build/      # Package build directories
```

`staging/` 供完整 BSP 中需要链接 Buildroot 软件包的应用使用。对于普通应用开发，请使用 [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain)。

### 常用命令

```bash
./build.sh buildrootconfig   # Open Buildroot menuconfig; savedefconfig runs on exit
./build.sh rootfs            # Rebuild rootfs
./build.sh clean rootfs      # Clean rootfs outputs
```

### 添加一个软件包

1. 在 `./build.sh buildrootconfig` 中选中该软件包，然后退出并保存；defconfig 会自动更新。
2. 如果 defconfig 没有自动更新（某些软件包是通过依赖项被选中的），则手动将 `BR2_PACKAGE_XXX=y` 添加到 `sysdrv/tools/board/buildroot/recamera2_buildroot_aarch64_defconfig`。
3. 使用 `./build.sh rootfs` 重新构建。
4. 验证该软件包，例如使用 `ls sysdrv/source/buildroot/buildroot-2023.02.6/output/target/usr/bin/`。

要添加一个小型 BusyBox 工具，例如 `i2cdetect` 或 `nc`，请编辑 `busybox.config`。板级配置已经包含诸如 `RK_ENABLE_SYSSTAT=y`、`RK_ENABLE_FIO=y` 和 `RK_ENABLE_I2C_TOOLS=y` 等选项，表明常用工具可以通过 `RK_ENABLE_*` 开关启用。**在直接编辑 defconfig 之前，先查找是否已有对应开关。**

### 关于 `/oem`

由于 `RK_BUILD_APP_TO_OEM_PARTITION=n`，因此 **`/oem` 是 rootfs 内部的普通目录，而不是单独的分区**。在打包过程中，`build.sh` 会将 `output/out/oem/` 复制到 rootfs 预处理目录的 `oem/` 子目录中，然后删除单独的 OEM 目录。因此：

- 覆盖层中的 `oem/` 下的文件（例如 `overlay-buildroot-go2rtc/oem/usr/bin/go2rtc`）最终会出现在设备上的 `/oem/usr/bin/go2rtc`。
- `/oem` 会与 rootfs 一起更新。要更改它，需要重新烧录 `rootfs.img`；它不能像 OEM 分区那样单独烧录。

## 4. 覆盖层文件覆盖机制

覆盖层是 Seeed 对 rootfs 进行定制的主要机制，也是最容易上手的路径之一。

### 工作原理

在 `build.sh` 中的实现（约在第 2971 行）：

```bash
for overlay_dir in $RK_POST_OVERLAY; do
    if [ -d "$tmp_path/overlay/$overlay_dir" ]; then
        rsync -a --ignore-times --keep-dirlinks --chmod=u=rwX,go=rX --exclude .empty \
            $tmp_path/overlay/$overlay_dir/* $RK_PROJECT_PACKAGE_ROOTFS_DIR/
    fi
done
```

换句话说，`project/cfg/BoardConfig_Recamera2/overlay/<name>/` 下的文件会通过 rsync 复制到 rootfs 预处理目录中，并保留其相对路径。

`cfg-all-items-introduction.txt` 对 `RK_POST_OVERLAY` 的描述如下：

> 覆盖层资源文件会被复制到文件系统中。例如，在对应的 `BoardConfig.mk` 目录下创建 `overlay/user_overlay_files`，并设置 `RK_POST_OVERLAY=user_overlay_files`。

### 当前已启用的覆盖层

`RK_POST_OVERLAY` 列出了 14 个条目，对应 15 个目录（go2rtc 有三个目录，但只启用了两个）：

| 覆盖层目录 | 安装内容 | 作用 |
| --- | --- | --- |
| `overlay-buildroot-banner` | `/etc/motd`、`/etc/profile.d/banner.sh` | reCamera ASCII 标志；仅在交互式非 SSH 会话中打印 |
| `overlay-buildroot-hwclock` | `/etc/init.d/S20hwclock` | 同步 RTC 与系统时间 |
| `overlay-buildroot-sshd` | `/etc/ssh/sshd_config`、`/etc/pam.d/sshd`、`/etc/init.d/S50sshd`、`/usr/libexec/ssh-login-lock.py` | SSH 服务和登录失败锁定（5 次尝试 / 300 秒） |
| `overlay-buildroot-syslog-ng` | `/etc/syslog-ng.conf` | 将日志路由到文件和 UDP |
| `overlay-buildroot-vsftpd` | `/etc/vsftpd.conf`、`/etc/pam.d/vsftpd`、`/etc/shells`、`/etc/vsftpd.{chroot_,user_}list`、`/etc/init.d/S70vsftpd` | FTP；隐藏配置目录 |
| `overlay-buildroot-log` | `/oem/usr/bin/websocket_log.py`、`/oem/usr/etc/init.d/S10log` | UDP 5140 → WebSocket 8765 |
| `overlay-buildroot-ttyd` | `/oem/usr/etc/init.d/S50ttyd`、`/oem/usr/bin/ssh-login-whitelist.sh` | 浏览器终端（7681），允许列表 `root` / `admin` |
| `overlay-buildroot-udhcpc` | `/usr/share/udhcpc/default.script` | DHCP 脚本；eth0 的 DNS 优先 |
| `overlay-buildroot-go2rtc` | `/oem/usr/etc/go2rtc/go2rtc.yaml`、`/oem/usr/etc/init.d/S50go2rtc` | 流媒体配置和启动脚本 |
| `overlay-buildroot-go2rtc-arm64` | `/oem/usr/bin/go2rtc` | 64 位 go2rtc 可执行文件 |
| `overlay-buildroot-board-id` | `/etc/init.d/S00board-id` | 从 ADC 读取板卡 ID → `/run/board_id.env` |
| `overlay-buildroot-asound` | `/etc/asound.conf` | 六通道采集 → 为两个麦克风 + 两个参考通道提供虚拟设备 |
| `overlay-buildroot-watchdog` | `/etc/init.d/S15watchdog` | 硬件看门狗（`-T 30 -t 15`） |
| `overlay-buildroot-rkenv` | `/etc/profile.d/RkEnv.sh` | `OEM_HOME`、`PATH`、`LD_LIBRARY_PATH`、`HOME=/userdata` |

**存在但未启用：**`overlay-buildroot-go2rtc-arm`（32 位 go2rtc 可执行文件）；64 位板卡不会使用它。

### 添加你自己的覆盖层

```bash
# 1. Create a directory and arrange files by their target absolute paths
mkdir -p project/cfg/BoardConfig_Recamera2/overlay/my_overlay/etc/init.d
cp my_script.sh project/cfg/BoardConfig_Recamera2/overlay/my_overlay/etc/init.d/S60myservice

# 2. Append it to RK_POST_OVERLAY in the board configuration (keep the line-continuation backslash)
#    export RK_POST_OVERLAY="... overlay-buildroot-rkenv \
#    my_overlay"

# 3. Rebuild rootfs and package the firmware
./build.sh rootfs && ./build.sh firmware
```

### 覆盖层的三个陷阱

- **rsync 会重写权限：**`--chmod=u=rwX,go=rX` 表示组和其他用户永远不会获得写权限。大写的 `X` 只会为目录或原本就可执行的文件保留执行权限。请在构建前在源覆盖层中将脚本设置为可执行。
- **`.empty` 文件会被排除：**用于创建空目录的占位文件不会进入镜像。这是有意为之，用于仅保留目录结构。
- **覆盖层只会覆盖而不会删除：**rsync 没有使用 `--delete`，因此从覆盖层中删除文件并 **不会** 将其从 rootfs 中删除。要删除文件，请使用 Buildroot 的 rootfs post-build 脚本或 `RK_POST_CLEAN_FILES`（`build.sh` 中的 `__RUN_POST_CLEAN_FILES`）。

## 5. U-Boot 定制

```bash
./build.sh uboot
./build.sh clean uboot
```

配置：`RK_UBOOT_DEFCONFIG=rv1126b_recamera2_defconfig` 位于 `sysdrv/source/uboot/u-boot/configs/` 下，外加 `rk-emmc.config` 和 `rv1126b-ipc.config` 片段。

一个关键设置是 `CONFIG_BAUDRATE=1500000`。在该 defconfig 中修改启动延时、默认启动目标、fastboot 支持以及相关选项。

DDR 初始化固件由 `RK_UBOOT_RKBIN_MINIALL_INI_FILE=RV1126BMINIALL_IPC.ini` 选择；输出包括 `idblock.img` / `download.bin`。**修改 DDR 参数风险极高**；除非必要，请避免修改。

`build.sh` 中包含 `__modify_file()` 和 `__modify_file_ddr_bin()`，它们会在 U-Boot 构建期间根据板级配置修改 rkbin DDR 固件参数。在排查 DDR 问题时，请优先检查这些函数。

## 6. 分区表定制

编辑 `RK_PARTITION_CMD_IN_ENV`。各条目使用 `size(name)` 或 `size@offset(name)`；`-` 表示使用所有剩余空间：

```text
32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),
```

同时更新 `RK_PARTITION_FS_TYPE_CFG`，其格式为 `partition@mount-point@filesystem`；`IGNORE` 表示该分区不会被 fstab 挂载：

```text
rootfs@IGNORE@ext4,userdata@/userdata@ext4
```

修改这些值后，运行：

```bash
./build.sh env          # Regenerate env.img
./build.sh firmware     # Repackage the firmware
```

**在烧录时重写分区表：**运行 `sudo ./rkflash.sh all`，或者至少运行 `upgrade_tool di -p output/image/parameter.txt`。仅烧录 rootfs 而不更新分区表可能会导致分区错位。

`build.sh` 中的 `parse_partition_env()`、`parse_partition_file()`、`get_partition_dev_node()` 和 `get_partition_num()` 负责解析；在调试分区问题时请检查这些函数。

重要注意事项：

- `boot` 只有 11 M。如果内核 + DTB 超过此大小，打包会失败。在启用大量内核特性后，请使用 `ls -lh output/image/boot.img` 检查。
- `rootfs` 固定为 3 G；`userdata` 使用剩余空间。增大 rootfs 会减少 userdata 容量。
- 内核命令行使用 `root=PARTUUID=614e0000-0000`。更改分区顺序可能会影响 PARTUUID；在任何分区变更后，请确认 DTS 中的 bootargs 仍然正确。

## 7. MCU 侧（RT-Thread）

`sysdrv/source/mcu/` 中包含 RV1126B 内置 MCU 的 RT-Thread 固件。它独立于 Linux：

```text
sysdrv/source/mcu/
├── build.sh
├── docs/          # Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf
├── prebuilts/
├── project/
├── readme.txt
└── rt-thread/
```

使用以下命令构建：

```bash
./build.sh mcu              # From the SDK root
# Or enter sysdrv/source/mcu/ and use its own build.sh
```

`mcu` 参数会在 `build.sh` 中在正常参数解析 **之前** 单独处理（`if [ "$1" = "mcu" ]; then shift; build_mcu $@; fi`）。根据配置，MCU 构建也可能在 U-Boot / 内核构建期间通过 `build_mcu amp` 或 `build_mcu $RK_UBOOT_RKBIN_MCU_CFG` 自动触发。

当前的板级配置没有显式启用 MCU。请运行 `./build.sh info` 查看它是否包含在构建中。

## 定制后的验证

```bash
./build.sh info                      # Confirm that the configuration took effect
./build.sh kernel && ./build.sh rootfs && ./build.sh firmware
ls -lh output/image/                 # Check that image sizes are reasonable (boot < 11M, rootfs < 3G)
sudo ./rkflash.sh all                # A partition-table change requires flashing everything
```

在设备上：

```bash
# /bin/sdkinfo                       # Print Build Time / SDK Version / BoardConfig name
# cat /etc/ota_version               # Should be V1.0.10 (or your updated value)
# cat /proc/cmdline                  # Check that the command line matches expectations
# cat /run/board_id.env              # Check the detected board ID
# ls /oem/usr/share/*.dtbo           # Confirm the DTBO files are present
# zcat /proc/config.gz | grep XXX    # Check a kernel option (if IKCFG is enabled)
```

`/bin/sdkinfo` 由 `build.sh` 在打包过程中生成。它会报告 SDK 版本和 BoardConfig 文件名，因此是**识别设备上正在运行哪个固件构建的最快方式**。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>