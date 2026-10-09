---
description: Select a Recamera2 board configuration, then build and package the complete system firmware.
title: Build the Complete Firmware
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
url: https://wiki.seeedstudio.com/recamera_pro_bsp_full_build/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Build the Complete Firmware

## The Three-Step Workflow

```bash
cd recamera-pro-sdk-v1.0.10
./build.sh lunch     # 1. Select a board configuration
./build.sh all       # 2. Build and package the images
ls output/image/     # 3. Inspect the outputs
```

`./build.sh all` runs these stages in order: `sysdrv` (U-Boot + kernel + rootfs) → `media` → `app` → `recovery` → `firmware` (image packaging).

> **Running `./build.sh` with no arguments executes `allsave` by default** (`all` + `save`). This also archives images, patches, and build information under `IMAGE/`. In CI, run `./build.sh all` explicitly if you do not want the archive.

## Select a Board Configuration

```bash
./build.sh lunch
```

The script lists and numbers all **50** `BoardConfig-*.mk` files under `project/cfg/`. Their names follow this pattern:

```text
BoardConfig-"boot-medium"-"power-scheme"-"hardware-version"-"application-scenario".mk
```

For reCamera Pro, choose one of the two configurations under `BoardConfig_Recamera2/`:

| Configuration file | Description |
| --- | --- |
| `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk` | **64-bit, recommended**; uses `aarch64-rockchip1240-linux-gnu` |
| `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC.mk` | 32-bit version |

> The menu number can change between SDK versions because entries are sorted by filename. **Do not hard-code the number in documentation, scripts, or CI configuration; use the full filename instead.**

### Non-Interactive Selection (Recommended for CI)

`lunch` accepts a configuration filename directly, avoiding the interactive menu:

```bash
./build.sh lunch BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk
```

After selection, the SDK root contains a symbolic link named `.BoardConfig.mk` pointing to the selected file:

```bash
ls -l .BoardConfig.mk
./build.sh info      # Check the current configuration, defconfig, DTS, partition table, and all RK_* variables
```

## Complete `build.sh` Command Reference

### Component Builds

| Command | Description |
| --- | --- |
| `env` | Generate the env partition image (partition table and boot arguments) |
| `meta` | Build/export multimedia meta headers; optional, handled automatically when building apps |
| `uboot` | Build U-Boot |
| `kernel` | Build the kernel |
| `rootfs` | Build the root filesystem with Buildroot |
| `driver` | Build kernel driver modules (`.ko`) |
| `sysdrv` | Build U-Boot + kernel + rootfs |
| `media` | Build multimedia libraries such as mpp / rockit / rkaiq / rga / iva |
| `app` | Build reference applications (**depends on media; media must be built first**) |
| `recovery` | Build the recovery system |
| `tool` | Build host-PC tools |
| `mcu` | Build MCU-side RT-Thread firmware. This command is handled before normal argument parsing; use `./build.sh mcu [configuration]` |

### Packaging and Complete-System Commands

| Command | Description |
| --- | --- |
| `all` | Build and package all images required to boot the system |
| `allsave` | Run `all` + `save`; the **default when no argument is provided** |
| `firmware` | Package all images required to boot the system |
| `updateimg` | Package all partition images into `update.img` |
| `unpackimg` | Extract an `update.img` package |
| `ota` | Package the OTA update archive `update_ota.tar` |
| `factory` | Create a factory flashing image using `tools/linux/SocToolKit` |
| `sdcard_upgrade` | Create an SD-card upgrade image |
| `save` | Archive images, patches, and debug information to `IMAGE/`; `save xml` also saves the repo manifest |

### Clean

| Command | Description |
| --- | --- |
| `clean` | Clean all build outputs |
| `clean uboot` / `clean kernel` / `clean driver` / `clean rootfs` / `clean sysdrv` | Clean the selected component |
| `clean media` / `clean app` / `clean recovery` | Clean media, applications, or recovery |

### Configuration Menus

| Command | Description |
| --- | --- |
| `kernelconfig` | Open kernel `menuconfig`; on exit, automatically save the configuration back to defconfig with `savedefconfig` |
| `buildrootconfig` | Open Buildroot `menuconfig` and save the defconfig on exit |

`kernelconfig` first saves a `defconfig.before` snapshot. If the configuration has not changed, it skips `savedefconfig`.

### Secure Boot and Advanced Commands

| Command | Description |
| --- | --- |
| `dm` | Create device-mapper images for encrypted or verity partitions |
| `dm-key-gen` | Generate a device-mapper key |
| `secure-boot-key-gen` | Generate secure-boot keys |

### Get Help (Watch Out for This)

```bash
./build.sh help          # Print usage
./build.sh help media    # Show the actual make command used for media
./build.sh help kernel   # Likewise for kernel; also works with uboot/rootfs/sysdrv
```

**Pitfall:** before `lunch`, `./build.sh --help` may first open the board-selection menu instead of showing help. The script checks for `.BoardConfig.mk` before parsing arguments and forces board selection if the link is missing. Run `./build.sh lunch` first; after selecting a board, `--help` / `help` can show the usage information.

`help <component>` is especially useful because it reveals the underlying `make` command and arguments used by `build.sh`, making it easier to reproduce a build manually or diagnose a problem.

## Build Mode Modifiers

Prefix a command with `DEBUG` or `ASAN` to change the build mode:

```bash
./build.sh DEBUG app     # -O0 -g -ggdb -pg
./build.sh ASAN app      # -O0 -g -ggdb -fsanitize=address -fno-stack-protector -fno-omit-frame-pointer -fsanitize-recover=all
./build.sh app           # Default RELEASE: -Os; strip binaries during packaging
```

In RELEASE mode, packaging runs `strip`, except on `libpthread*.so*` and `ld-*.so*` (gdb's pthread debugging and valgrind require unstripped symbols). Kernel modules (`.ko`) receive only `--strip-debug`. DEBUG mode skips stripping and also installs libc debug symbols (`runtime_lib/libc`, `lib.tar.bz2`).

## Incremental Builds

```bash
./build.sh app                             # Rebuild applications only; fastest when changing application code
./build.sh app && ./build.sh firmware      # Rebuild applications and repackage the images
./build.sh kernel                          # Rebuild the kernel only
./build.sh clean app && ./build.sh app     # Clean and rebuild applications when needed
```

Build one application directly (run `lunch` first):

```bash
make -C project/app/recamera_notify        # Build one application
make -C project/app/recamera_notify distclean
```

Build media separately (run `lunch` first; media can be built independently of the rest of the SDK):

```bash
make -C media
```

## Build Outputs

### `output/image/` — Flashable Images

| File | Description |
| --- | --- |
| `download.bin` | Device-side program used for flashing communication; loaded into board memory only |
| `idblock.img` | Loader, including DDR initialization |
| `uboot.img` | U-Boot |
| `env.img` | Partition table and boot arguments |
| `boot.img` | Kernel image including the DTB |
| `rootfs.img` | Root filesystem (ext4) |
| `recovery.img` | Recovery system (`RK_ENABLE_RECOVERY=y` in this board configuration) |
| `misc.img` | misc partition used for the recovery boot flag; this board configuration uses `recovery-misc.img` |
| `userdata.img` | userdata partition (ext4, mounted at `/userdata`) |
| `update.img` | Complete package for all partitions; can be used for an update |
| `parameter.txt` | Partition table text used by `rkflash.sh` |

### `output/out/` — Intermediate Outputs

| Directory | Description |
| --- | --- |
| `media_out/` | media `include/` and `lib/`, used as application dependencies |
| `app_out/` | Application outputs merged into the rootfs under `bin/lib/share/etc/root` during packaging |
| `rootfs_glibc_rv1126b/` | Rootfs packaging directory |
| `sysdrv_out/` | sysdrv outputs |
| `oem/`, `userdata/`, `ramdisk/` | OEM partition, userdata, and recovery ramdisk contents |
| `S20linkmount`, `S21appinit` | Generated partition-mount and OEM application-startup scripts |

## Expected First-Build Time

A full `./build.sh all` includes a complete Buildroot build and can take tens of minutes to several hours, depending on CPU cores and storage. On the first run, Buildroot extracts `sysdrv/tools/board/buildroot/buildroot-2023.02.6.tar.gz` and downloads/builds many packages, so **an internet connection is required**. Incremental builds are much faster because they rebuild only changed components.

For the first build, consider using `screen` or `tmux` and saving the log:

```bash
./build.sh all 2>&1 | tee build_$(date +%Y%m%d_%H%M).log
```

## Pre-Build Checklist

- `./setup_build_env.sh` has completed, and the version summary shows no required tool as `NOT INSTALLED`.
- `./build.sh lunch` selected `BoardConfig_Recamera2/...IPC_64BIT.mk`, and the `.BoardConfig.mk` symbolic link exists.
- `./build.sh info` reports `rv1126b-recamera2-v1.dts` for `RK_KERNEL_DTS`.
- At least 20 GB of free disk space remains on the SDK partition (100 GB or more recommended).
- If you changed the board configuration, run `./build.sh clean` first.

Next, flash the images to the board: [Flashing and Boot](/recamera_pro_bsp_flash_boot/).
