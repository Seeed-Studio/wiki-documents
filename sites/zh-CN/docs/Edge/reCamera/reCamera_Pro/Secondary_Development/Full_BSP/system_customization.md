---
description: Customize the system through DTS, kernel, Buildroot, overlay, partition, and MCU configuration.
title: System Customization
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
url: https://wiki.seeedstudio.com/recamera_pro_bsp_system_customization/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# System Customization

This page covers four common system-customization paths: device tree, kernel configuration, Buildroot packages, and overlay file overrides. For a complete list of configuration options, see `project/cfg-all-items-introduction.txt`.

## Board Configuration Files

reCamera Pro configuration is under:

```text
project/cfg/BoardConfig_Recamera2/
├── BoardConfig-EMMC-RK801-RV1126B_V1-IPC.mk        # 32-bit
├── BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk  # 64-bit (recommended)
├── RECAMERA2-IPC-RELEASE-NOTES.md
└── overlay/                                        # 15 overlay directories
```

After `./build.sh lunch`, `.BoardConfig.mk` at the SDK root is a symbolic link to the selected file. **Edit the actual configuration file**; changes will be picked up through the symlink.

Key settings in the 64-bit configuration:

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

> After changing the board configuration, clean the affected components with `./build.sh clean` before rebuilding to avoid mixing outputs from different configurations.

## 1. Device-Tree Customization

### File Layout

Kernel DTS files are under `sysdrv/source/kernel/arch/arm64/boot/dts/rockchip/`:

| File | Purpose |
| --- | --- |
| `rv1126b-recamera2-v1.dts` | **Top-level entry point** (selected by `RK_KERNEL_DTS`); `model = "Rockchip RV1126B RECAMERA PRO Board"` |
| `rv1126b-recamera2-cam-csi0.dtsi` | CSI0 camera path |
| `rv1126b-recamera2-cam-csi1.dtsi` | CSI1 camera path |
| `rv1126b-recamera2-disp.dtsi` | Display path |
| `rv1126b-recamera2-ext-cam-csi1.dts` | **Expansion-board camera**, compiled as `.dtbo` |
| `rv1126b-recamera2-baseboard-0.dts` / `-baseboard-1.dts` | Baseboard variants |
| `rv1126b-recamera2-extboard-0.dts` / `-extboard-1.dts` | Expansion-board variants |

The commented-out includes in `rv1126b-recamera2-v1.dts` (`rv1126b-aoa.dtsi`, `rv1126b-recamera2.dtsi`, and `rv1126b-recamera2-v1.dtsi`) indicate that this DTS is **self-contained**: the power tree (`vcc12v_dcin` → `vcc5v0_sys` → `vdd_npu`, etc.) is defined directly in the top-level file using `regulator-fixed`.

### Change the Kernel Command Line

The top-level `chosen` node is:

```dts
chosen {
    bootargs = "earlycon=uart8250,mmio32,0x20810000 console=ttyFIQ0 rw root=PARTUUID=614e0000-0000 rootfstype=ext4 rootwait snd_soc_core.prealloc_buffer_size_kbytes=16 coherent_pool=32K";
};
```

Do not change the CMA size here. Set `RK_BOOTARGS_CMA_SIZE` in the board configuration instead; `build.sh` adds it to a command-line fragment (`__PREPARE_BOARD_CFG` → `RK_KERNEL_CMDLINE_FRAGMENT`).

### DTBO (Runtime Device-Tree Overlays)

With `RK_KERNEL_RC_DTO=y` and kernel `CONFIG_OF_OVERLAY=y`, reCamera Pro uses DTBOs to support **one firmware image across multiple baseboards and expansion boards**:

1. At build time, each `rv1126b-recamera2-ext-*.dts` is compiled into a corresponding `.dtbo`.
2. `__PACKAGE_OEM()` in `build.sh` copies `sysdrv/source/objs_kernel/arch/arm64/boot/dts/rockchip/rv1126b-recamera2-ext-*.dtbo` to `/oem/usr/share/`.
3. At boot, the `S00board-id` overlay reads the ADC to identify the board and writes the result to `/run/board_id.env`.
4. A startup script uses the detected ID to select a `.dtbo` to apply.

**Board-identification mechanism** (`overlay-buildroot-board-id/etc/init.d/S00board-id`):

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

To add a hardware variant: **add a resistor-divider level → update the `LEVELS` / `VERSIONS` / `MODELS` arrays in `S00board-id` → add the corresponding `.dts` → add a branch to the startup script**. Keep all three parts in sync; otherwise, the new board may be identified as an existing model.

### Change the Camera Sensor

1. Confirm that the matching driver is set to `m` or `y` in the kernel fragment (`rv1126b-recamera2.config` already includes many drivers, such as SC450AI, SC850SL, GC2053, and IMX415). Enable the appropriate `CONFIG_VIDEO_xxx` option if the driver is missing.
2. Update the camera node's `compatible`, I2C address, clock, and power regulators in the DTS.
3. Place the IQ file under `media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/` and update `RK_CAMERA_SENSOR_IQFILES` in the board configuration.
4. Rebuild `kernel` + `media` + `firmware`.

## 2. Kernel Configuration

```bash
./build.sh kernelconfig      # Open menuconfig; savedefconfig runs on exit
./build.sh kernel            # Rebuild the kernel
./build.sh clean kernel      # Clean the kernel outputs
```

`kernelconfig` saves a `defconfig.before` snapshot first. On exit, it compares the configuration and **writes defconfig only if there are actual changes**, avoiding irrelevant diffs.

The configuration is composed of `RK_KERNEL_DEFCONFIG=rv1126b_ipc_defconfig` plus four fragments applied in order:

| Fragment | Contents |
| --- | --- |
| `rv1126b-display.config` | Display settings |
| `rv1126b-sdiowifi.config` | SDIO Wi-Fi |
| `rv1126b-bt.config` | Bluetooth |
| **`rv1126b-recamera2.config`** | **Seeed customizations**; edit this file |

`rv1126b-recamera2.config` is under `sysdrv/source/kernel/arch/arm64/configs/` (the 32-bit version is the file with the same name under `arch/arm/configs/`; for the 64-bit board, edit the arm64 file). It ends with a `#### recamera2 defconfig ####` marker. Seeed's additions are after this marker, including:

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

The recommended way to add kernel options is to **append them after the Recamera2 section in `rv1126b-recamera2.config`**, rather than editing `rv1126b_ipc_defconfig` directly. The latter is an upstream Rockchip file and is more likely to conflict during SDK upgrades.

Notable existing choices:

- `CONFIG_PANIC_ON_OOPS=y` + `CONFIG_BOOTPARAM_SOFTLOCKUP_PANIC=y` + `CONFIG_BOOTPARAM_HARDLOCKUP_PANIC=y`: oops, soft lockup, and hard lockup all cause a panic. **Consider disabling these temporarily during development**; otherwise, a fault immediately reboots the system and removes the live state needed for debugging.
- `CONFIG_ROCKCHIP_DEBUG=y`, `CONFIG_DEBUG_FS=y`, `CONFIG_RK_CMA_PROCFS=y`, `CONFIG_RK_DMABUF_PROCFS=y`, `CONFIG_RK_MEMBLOCK_PROCFS=y`, and `CONFIG_ROCKCHIP_RGA_PROC_FS=y`: debug nodes are enabled. Memory and RGA statistics under `/proc/rk*` and `/sys/kernel/debug/` are useful for investigating memory leaks.
- `CONFIG_ELF_CORE=y` + `CONFIG_CORE_DUMP_DEFAULT_ELF_HEADERS=y`: enables coredumps. `__BUILD_ENABLE_COREDUMP_SCRIPT()` in `build.sh` can generate a script to enable them.
- `CONFIG_VIDEO_RK_IRCUT` is **not enabled**. Enable it yourself if you need IRCUT control.

## 3. Buildroot Customization

### Location and Extraction

Buildroot sources are provided as an archive:

```text
sysdrv/tools/board/buildroot/buildroot-2023.02.6.tar.gz
sysdrv/tools/board/buildroot/recamera2_buildroot_aarch64_defconfig   # 64-bit (this board)
sysdrv/tools/board/buildroot/recamera2_buildroot_defconfig           # 32-bit
sysdrv/tools/board/buildroot/busybox.config
sysdrv/tools/board/buildroot/{busybox_patch,mpv_patch,qemu_patch,hcitool_patch,prelink-cross_patch}
sysdrv/tools/board/buildroot/font
```

The first `./build.sh rootfs` extracts it to `sysdrv/source/buildroot/buildroot-2023.02.6/`. Build outputs are under:

```text
sysdrv/source/buildroot/buildroot-2023.02.6/output/
├── staging/    # Buildroot development sysroot (headers + libraries)
├── target/     # Target rootfs contents
├── host/       # Host-side tools
└── build/      # Package build directories
```

`staging/` is for applications in the full BSP that link against Buildroot packages. For ordinary application development, use the [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain).

### Common Commands

```bash
./build.sh buildrootconfig   # Open Buildroot menuconfig; savedefconfig runs on exit
./build.sh rootfs            # Rebuild rootfs
./build.sh clean rootfs      # Clean rootfs outputs
```

### Add a Package

1. Select the package in `./build.sh buildrootconfig`, then exit and save; the defconfig is updated automatically.
2. If the defconfig is not updated automatically (some packages are selected through dependencies), add `BR2_PACKAGE_XXX=y` manually to `sysdrv/tools/board/buildroot/recamera2_buildroot_aarch64_defconfig`.
3. Rebuild with `./build.sh rootfs`.
4. Verify the package, for example with `ls sysdrv/source/buildroot/buildroot-2023.02.6/output/target/usr/bin/`.

To add a small BusyBox utility such as `i2cdetect` or `nc`, edit `busybox.config`. The board configuration already has options such as `RK_ENABLE_SYSSTAT=y`, `RK_ENABLE_FIO=y`, and `RK_ENABLE_I2C_TOOLS=y`, showing that common tools can be enabled through `RK_ENABLE_*` switches. **Look for an existing switch before editing the defconfig directly.**

### About `/oem`

`RK_BUILD_APP_TO_OEM_PARTITION=n`, so **`/oem` is a regular directory inside the rootfs, not a separate partition**. During packaging, `build.sh` copies `output/out/oem/` into the `oem/` subdirectory of the rootfs staging area and then removes the separate OEM directory. Therefore:

- Files under `oem/` in an overlay (for example, `overlay-buildroot-go2rtc/oem/usr/bin/go2rtc`) end up at `/oem/usr/bin/go2rtc` on the device.
- `/oem` is updated together with the rootfs. To change it, reflash `rootfs.img`; it cannot be flashed separately as an OEM partition.

## 4. Overlay File Overrides

Overlays are the main mechanism for Seeed's rootfs customizations and often the easiest path to get started.

### How It Works

Implementation in `build.sh` (around line 2971):

```bash
for overlay_dir in $RK_POST_OVERLAY; do
    if [ -d "$tmp_path/overlay/$overlay_dir" ]; then
        rsync -a --ignore-times --keep-dirlinks --chmod=u=rwX,go=rX --exclude .empty \
            $tmp_path/overlay/$overlay_dir/* $RK_PROJECT_PACKAGE_ROOTFS_DIR/
    fi
done
```

In other words, files under `project/cfg/BoardConfig_Recamera2/overlay/<name>/` are rsynced into the rootfs staging directory, preserving their relative paths.

`cfg-all-items-introduction.txt` describes `RK_POST_OVERLAY` as follows:

> Overlay resource files are copied to the filesystem. For example, create `overlay/user_overlay_files` under the corresponding `BoardConfig.mk` directory and set `RK_POST_OVERLAY=user_overlay_files`.

### Currently Enabled Overlays

`RK_POST_OVERLAY` lists 14 entries that map to 15 directories (go2rtc has three directories, but only two are enabled):

| Overlay directory | Installed contents | Purpose |
| --- | --- | --- |
| `overlay-buildroot-banner` | `/etc/motd`, `/etc/profile.d/banner.sh` | reCamera ASCII logo; printed only in interactive non-SSH sessions |
| `overlay-buildroot-hwclock` | `/etc/init.d/S20hwclock` | Sync RTC and system time |
| `overlay-buildroot-sshd` | `/etc/ssh/sshd_config`, `/etc/pam.d/sshd`, `/etc/init.d/S50sshd`, `/usr/libexec/ssh-login-lock.py` | SSH service and failed-login lockout (5 attempts / 300 seconds) |
| `overlay-buildroot-syslog-ng` | `/etc/syslog-ng.conf` | Route logs to files and UDP |
| `overlay-buildroot-vsftpd` | `/etc/vsftpd.conf`, `/etc/pam.d/vsftpd`, `/etc/shells`, `/etc/vsftpd.{chroot_,user_}list`, `/etc/init.d/S70vsftpd` | FTP; hides the config directory |
| `overlay-buildroot-log` | `/oem/usr/bin/websocket_log.py`, `/oem/usr/etc/init.d/S10log` | UDP 5140 → WebSocket 8765 |
| `overlay-buildroot-ttyd` | `/oem/usr/etc/init.d/S50ttyd`, `/oem/usr/bin/ssh-login-whitelist.sh` | Browser terminal (7681), allowlist `root` / `admin` |
| `overlay-buildroot-udhcpc` | `/usr/share/udhcpc/default.script` | DHCP script; eth0 DNS takes priority |
| `overlay-buildroot-go2rtc` | `/oem/usr/etc/go2rtc/go2rtc.yaml`, `/oem/usr/etc/init.d/S50go2rtc` | Stream configuration and startup script |
| `overlay-buildroot-go2rtc-arm64` | `/oem/usr/bin/go2rtc` | 64-bit go2rtc binary |
| `overlay-buildroot-board-id` | `/etc/init.d/S00board-id` | Read board ID from ADC → `/run/board_id.env` |
| `overlay-buildroot-asound` | `/etc/asound.conf` | Six-channel capture → virtual devices for two microphones + two reference channels |
| `overlay-buildroot-watchdog` | `/etc/init.d/S15watchdog` | Hardware watchdog (`-T 30 -t 15`) |
| `overlay-buildroot-rkenv` | `/etc/profile.d/RkEnv.sh` | `OEM_HOME`, `PATH`, `LD_LIBRARY_PATH`, `HOME=/userdata` |

**Present but not enabled:** `overlay-buildroot-go2rtc-arm` (32-bit go2rtc binary); the 64-bit board does not use it.

### Add Your Own Overlay

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

### Three Overlay Pitfalls

- **rsync rewrites permissions:** `--chmod=u=rwX,go=rX` means group and other users never get write permission. Uppercase `X` preserves execute permission only for directories or files that were already executable. Make scripts executable in the source overlay before building.
- **`.empty` files are excluded:** placeholder files used to create empty directories do not enter the image. This is intentional and preserves the directory structure.
- **Overlays overwrite but do not delete:** rsync is not passed `--delete`, so removing a file from an overlay does **not** remove it from the rootfs. To remove a file, use a Buildroot rootfs post-build script or `RK_POST_CLEAN_FILES` (`__RUN_POST_CLEAN_FILES` in `build.sh`).

## 5. U-Boot Customization

```bash
./build.sh uboot
./build.sh clean uboot
```

Configuration: `RK_UBOOT_DEFCONFIG=rv1126b_recamera2_defconfig` under `sysdrv/source/uboot/u-boot/configs/`, plus the `rk-emmc.config` and `rv1126b-ipc.config` fragments.

A key setting is `CONFIG_BAUDRATE=1500000`. Change boot delay, default boot target, fastboot support, and related options in this defconfig.

DDR initialization firmware is selected by `RK_UBOOT_RKBIN_MINIALL_INI_FILE=RV1126BMINIALL_IPC.ini`; outputs include `idblock.img` / `download.bin`. **Changing DDR parameters is high risk**; avoid it unless necessary.

`build.sh` contains `__modify_file()` and `__modify_file_ddr_bin()`, which modify rkbin DDR firmware parameters from the board configuration during U-Boot builds. Check these functions first when investigating DDR issues.

## 6. Partition-Table Customization

Edit `RK_PARTITION_CMD_IN_ENV`. Entries use `size(name)` or `size@offset(name)`; `-` means use all remaining space:

```text
32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),
```

Also update `RK_PARTITION_FS_TYPE_CFG`, whose format is `partition@mount-point@filesystem`; `IGNORE` means that the partition is not mounted by fstab:

```text
rootfs@IGNORE@ext4,userdata@/userdata@ext4
```

After changing these values, run:

```bash
./build.sh env          # Regenerate env.img
./build.sh firmware     # Repackage the firmware
```

**Rewrite the partition table when flashing:** run `sudo ./rkflash.sh all`, or at least `upgrade_tool di -p output/image/parameter.txt`. Flashing only rootfs without updating the partition table can misalign the partitions.

`parse_partition_env()`, `parse_partition_file()`, `get_partition_dev_node()`, and `get_partition_num()` in `build.sh` handle parsing; inspect these functions when debugging partition issues.

Important considerations:

- `boot` is only 11 M. Packaging fails if the kernel + DTB exceeds this size. After enabling many kernel features, check with `ls -lh output/image/boot.img`.
- `rootfs` is fixed at 3 G; `userdata` uses the remaining space. Increasing rootfs reduces userdata capacity.
- The kernel command line uses `root=PARTUUID=614e0000-0000`. Changing the partition order may affect the PARTUUID; after any partition change, verify that the DTS bootargs remain correct.

## 7. MCU Side (RT-Thread)

`sysdrv/source/mcu/` contains RT-Thread firmware for the MCU built into RV1126B. It is independent of Linux:

```text
sysdrv/source/mcu/
├── build.sh
├── docs/          # Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf
├── prebuilts/
├── project/
├── readme.txt
└── rt-thread/
```

Build it with:

```bash
./build.sh mcu              # From the SDK root
# Or enter sysdrv/source/mcu/ and use its own build.sh
```

The `mcu` argument is handled separately **before** normal argument parsing in `build.sh` (`if [ "$1" = "mcu" ]; then shift; build_mcu $@; fi`). MCU builds may also be triggered automatically during U-Boot / kernel builds according to the configuration via `build_mcu amp` or `build_mcu $RK_UBOOT_RKBIN_MCU_CFG`.

The current board configuration does not explicitly enable the MCU. Check `./build.sh info` to see whether it is included in the build.

## Post-Customization Verification

```bash
./build.sh info                      # Confirm that the configuration took effect
./build.sh kernel && ./build.sh rootfs && ./build.sh firmware
ls -lh output/image/                 # Check that image sizes are reasonable (boot < 11M, rootfs < 3G)
sudo ./rkflash.sh all                # A partition-table change requires flashing everything
```

On the device:

```bash
# /bin/sdkinfo                       # Print Build Time / SDK Version / BoardConfig name
# cat /etc/ota_version               # Should be V1.0.10 (or your updated value)
# cat /proc/cmdline                  # Check that the command line matches expectations
# cat /run/board_id.env              # Check the detected board ID
# ls /oem/usr/share/*.dtbo           # Confirm the DTBO files are present
# zcat /proc/config.gz | grep XXX    # Check a kernel option (if IKCFG is enabled)
```

`/bin/sdkinfo` is generated by `build.sh` during packaging. It reports the SDK version and BoardConfig filename, making it the **quickest way to identify which firmware build is running on the device**.
