---
description: Flash a self-built firmware image to reCamera Pro and verify the boot process.
title: Flashing and Boot
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
url: https://wiki.seeedstudio.com/recamera_pro_bsp_flash_boot/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Flashing and Boot

## Partition Table

reCamera Pro partitions are defined by `RK_PARTITION_CMD_IN_ENV` in the board configuration:

```text
32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),
```

| Partition | Size | Offset | Contents | Image file |
| --- | --- | --- | --- | --- |
| `env` | 32 K | 0 | Partition table + boot arguments | `env.img` |
| `idblock` | 512 K | 32 K | Loader (including DDR initialization) | `idblock.img` |
| `uboot` | 4 M | 1 M | U-Boot | `uboot.img` |
| `misc` | 64 K | — | Recovery boot flag, etc. | `misc.img` (this board uses `recovery-misc.img`) |
| `recovery` | 10 M | — | Recovery system | `recovery.img` |
| `boot` | 11 M | — | Kernel + DTB | `boot.img` |
| `rootfs` | 3 G | — | Root filesystem, ext4 | `rootfs.img` |
| `userdata` | Remaining space | — | ext4, mounted at `/userdata` | `userdata.img` |

Filesystem types are specified by `RK_PARTITION_FS_TYPE_CFG=rootfs@IGNORE@ext4,userdata@/userdata@ext4`: `rootfs` is not explicitly mounted in fstab (the kernel mounts it with `root=PARTUUID=`), while `userdata` is mounted at `/userdata`.

Kernel command line from `chosen/bootargs` in `rv1126b-recamera2-v1.dts`:

```text
earlycon=uart8250,mmio32,0x20810000 console=ttyFIQ0 rw root=PARTUUID=614e0000-0000 rootfstype=ext4 rootwait snd_soc_core.prealloc_buffer_size_kbytes=16 coherent_pool=32K
```

CMA size is controlled by `RK_BOOTARGS_CMA_SIZE="8M"`.

## Allow the Host to Detect the Device (One-Time Setup)

The flashing tool communicates over USB Rockusb and needs a udev rule (VID `2207` is Rockchip):

```bash
sudo cp tools/linux/Linux_Upgrade_Tool/88-rockusb.rules /etc/udev/rules.d/
sudo udevadm control --reload-rules
sudo udevadm trigger
```

`tools/linux/SocToolKit/` also includes `88-rockusb.rules` and `38-disk.rules`; install both when using the GUI tool.

## Enter Flashing Mode

The device must be in **Maskrom** or **Loader** mode for `upgrade_tool` to detect it:

- **Maskrom:** power the device off completely, then hold the Maskrom/Recovery button while powering it on (or short eMMC CLK to ground). The host should show a Rockchip device such as `2207:xxxx` in `lsusb`.
- **Loader:** if a working U-Boot is installed, run `upgrade_tool db <loader>` or interrupt the U-Boot countdown to enter Loader mode.

> Check the hardware manual or schematic for the exact button location and silkscreen on reCamera Pro. Confirm this on a physical device before adding details here.

Check whether the device is detected:

```bash
sudo tools/linux/Linux_Upgrade_Tool/upgrade_tool ld
```

`ListDevice` should show devices in flashing mode.

## Flash with `rkflash.sh` (Recommended)

The `./rkflash.sh` script in the SDK root wraps `upgrade_tool`; image paths are fixed under `output/image/`.

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

The second argument can specify a custom image path:

```bash
sudo ./rkflash.sh boot /path/to/my_boot.img
```

The actual command sequence for `all` mode (see `project/rkflash.sh`) is:

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

**Two important pitfalls:**

- The `update.img` flashing branch in `rkflash.sh` is **commented out**, so `./rkflash.sh update` does nothing. To flash the full package, run `upgrade_tool uf` directly.
- `all` mode does not flash `env.img`; it writes only `parameter.txt`. If you changed `RK_PARTITION_CMD_IN_ENV`, manually run `upgrade_tool di -p env.img` or flash `update.img` with `uf`.

## Use `upgrade_tool` Directly

Tool version v2.26 (`tools/linux/Linux_Upgrade_Tool/revision.txt`). Common commands:

| Command | Purpose |
| --- | --- |
| `ld` | ListDevice: list devices in flashing mode |
| `cd <n>` | ChooseDevice: select a device when multiple are connected |
| `ul <loader> [-noreset] [EMMC]` | UpgradeLoader: download the loader to memory |
| `db <loader>` | DownloadBoot |
| `uf <update.img> [-noreset]` | UpgradeFirmware: flash the full package |
| `di -p <parameter.txt>` | Write the partition table |
| `di -b <boot.img>` | Write the boot partition |
| `di -rootfs <rootfs.img>` | Write the rootfs partition |
| `di -u <userdata.img>` | Write the userdata partition |
| `di -r <recovery.img>` | Write recovery |
| `di -m <misc.img>` | Write misc |
| `pl` | PartitionList: read the device partition table |
| `ef <loader|firmware>` | EraseFlash: erase flash |
| `rd` | ResetDevice: reboot |
| `sn <serial-number>` / `rsn` | Write / read the serial number (with `project/app/recamera_utils/sn_tool`) |
| `sfi <firmware>` | ShowFirmwareInfo: show firmware information |
| `exf <firmware|loader> <dir>` | ExtractFirmware: extract an image or loader |
| `gpt <parameter> <out.gpt>` | Generate GPT from the partition table |
| `rl <startSec> <len> [file]` / `wl <startSec> [sizeSec] <file>` | Read / write LBA data |

Example:

```bash
cd tools/linux/Linux_Upgrade_Tool
sudo ./upgrade_tool ld
sudo ./upgrade_tool ul ../../../output/image/download.bin
sudo ./upgrade_tool uf ../../../output/image/update.img
sudo ./upgrade_tool rd
```

For full command details, see `命令行开发工具使用文档.pdf` and `readme.txt` in the same directory.

## GUI Flashing

- **Linux:** `tools/linux/SocToolKit/SocToolKit` (Qt GUI; install `38-disk.rules` and `88-rockusb.rules` first).
- **Windows:** download Rockchip RKDevTool separately; the SDK does **not** include the Windows tool.

## Create a Factory Image

```bash
./build.sh factory
```

This uses `tools/linux/SocToolKit/bin/linux/programmer_image_tool` to unpack `output/image/update.img` into `output/image/factory/`. The image type is selected from `RK_BOOT_MEDIUM` (set to `emmc` for this board). NAND media also pass block/page/OOB parameters, which can be overridden with `RK_NAND_BLOCK_SIZE` and related variables.

## SD-Card Upgrade Image

```bash
./build.sh sdcard_upgrade
```

The output directory is `output/image/sdcard_upgrade/`.

> **Not available for this board configuration:** `sdcard_upgrade` requires `RK_SDCARD_UPGRADE_UBOOT_DEFCONFIG` and `..._FRAGMENT`, but neither variable is defined in `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk`. `check_config` in `build.sh` silently skips the command with `return 0`. To enable SD-card upgrades, add both variables to the board configuration (usually also `RK_SDCARD_UPGRADE_SCREEN_ENABLE`).

## Boot Flow and Recovery

- `RK_ENABLE_RECOVERY=y`, `RK_MISC=recovery-misc.img`: the misc partition contains the recovery boot flag.
- Recovery is entered by writing the flag to misc and rebooting, or by triggering it from an upper-layer application (OTA flow).
- `RK_OTA_RESOURCE="boot.img rootfs.img"`: OTA updates only the boot and rootfs partitions.
- Factory reset uses the flag mechanism provided by `RK_ENABLE_OTA=y` (the board configuration comment says “Used for set/get factory reset flag”).

See [OTA and Firmware Releases](/recamera_pro_bsp_ota_release/) for details.

## Verify After Flashing

Connect the serial console after powering on (1500000 8N1; see [Device Access and Debugging](/recamera_pro_bsp_device_debug/)). You should see U-Boot → kernel → rootfs boot logs, followed by the reCamera ASCII banner from `overlay-buildroot-banner/etc/motd`.

After opening a shell, verify:

```bash
# cat /proc/version              # Kernel 6.1.157
# uname -m                       # aarch64
# cat /proc/cmdline              # Should match bootargs in the DTS
# cat /etc/os-release            # Buildroot version information
# ls /oem /userdata              # Confirm partitions are mounted
# cat /run/board_id.env          # Baseboard / expansion-board detection result
```

## Common Problems

| Symptom | Cause | Resolution |
| --- | --- | --- |
| `upgrade_tool ld` does not list the device | Missing udev rule / not in flashing mode / not run as root | Install the rule and run `udevadm trigger`; confirm Maskrom mode; run with `sudo` |
| `Permission denied` when running `upgrade_tool` | Execute permission was lost during extraction | Run `chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool` |
| No serial output after flashing; system does not boot | Loader/idblock was not flashed or the versions do not match | Run `rkflash.sh all` again and confirm `download.bin` and `idblock.img` came from the same build |
| Kernel panic while mounting rootfs | `boot.img` and `rootfs.img` came from different builds | Rebuild everything and flash again, or at least flash boot and rootfs together |
| Problems after changing partition sizes | env / parameter was not updated | Flash `env.img` (`di -p`) separately or flash `update.img` with `uf` |
| `./rkflash.sh update` does nothing | The branch is commented out | Use `upgrade_tool uf output/image/update.img` |
