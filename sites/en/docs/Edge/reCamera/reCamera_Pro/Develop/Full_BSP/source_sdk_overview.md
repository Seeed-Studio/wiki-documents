---
description: Overview of the full BSP source package, component boundaries, and the difference between application development and system development.
title: Full Source Package Overview
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_source_overview
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/recamera_pro_bsp_source_overview/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Full Source Package Overview

## What You Receive

`recamera-pro-sdk-v1.0.10` is a **full BSP source release** based on the Rockchip RV1126B Linux IPC SDK. It includes Seeed's Recamera2 board configuration and product applications. It also contains some tools and components used for application development, but it should not be treated as an application SDK with every API library already built and ready to use after extraction.

An application development SDK typically focuses on a ready-to-use cross-compiler, target sysroot, headers, prebuilt libraries, API documentation, and examples. This source package includes a cross-toolchain and media library sources. A clean extraction does not contain build outputs under `output/`, so an application that needs media or Buildroot libraries may require you to build the relevant components and prepare a sysroot first. **This does not mean that every application requires a full U-Boot, kernel, and rootfs build.**

This source package supports three kinds of work:

- **Build or modify firmware:** use the unified build entry point to compile U-Boot, Linux, Buildroot, media libraries, and applications, then generate flashable images.
- **Develop a device-side application:** use the bundled cross-toolchain and obtain the target sysroot, media libraries, or AI libraries as needed. A simple C program does not require rebuilding the entire system first.
- **Customize product software:** modify applications such as `recamera_ipc`, `recamera_web`, and `recamera_services`, as well as system configuration.

This is neither a prebuilt firmware package nor a Buildroot-only package. It occupies about 12 GB after extraction.

## Hardware and Software Specifications

| Item | Value | Source |
| --- | --- | --- |
| SoC | Rockchip RV1126B (`RK_CHIP=rv1126b`, `RK_ARCH=arm64`) | Board configuration |
| PMIC | RK801 | Board configuration filename |
| Boot medium | eMMC (`RK_BOOT_MEDIUM=emmc`) | Board configuration |
| Kernel | Linux 6.1.157 ("Curry Ramen") | `sysdrv/source/kernel/Makefile` |
| Kernel defconfig | `rv1126b_ipc_defconfig` + 4 fragments | Board configuration |
| Device tree | `rv1126b-recamera2-v1.dts` | Board configuration |
| U-Boot defconfig | `rv1126b_recamera2_defconfig` (`CONFIG_BAUDRATE=1500000`) | `sysdrv/source/uboot/u-boot/configs/` |
| Root filesystem | Buildroot 2023.02.6, defconfig `recamera2_buildroot_aarch64_defconfig` | Board configuration |
| Build tools | Rockchip BSP build tools specified by the board configuration | `tools/`, `project/build.sh` |
| Camera sensors | SC450AI / SC850SL (IQ files are included; the kernel also builds modules for GC2053, IMX415, SC200AI, and other sensors) | `RK_CAMERA_SENSOR_IQFILES`, `rv1126b-recamera2.config` |
| Wi-Fi / Bluetooth | `RK_ENABLE_WIFI_CHIP=AP6XXX`; Bluetooth enabled | Board configuration |
| Reference application type | `RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` | Board configuration |
| Device model string | `Rockchip RV1126B RECAMERA PRO Board` | `rv1126b-recamera2-v1.dts` |

## Directory Map

```text
recamera-pro-sdk-v1.0.10/
├── build.sh -> project/build.sh         # unified build entry point
├── setup_build_env.sh                   # one-shot build environment installer
├── rkflash.sh -> project/rkflash.sh     # USB flashing helper
├── quick_start_cn.md / quick_start_en.md# Seeed quick-start guides (upstream material for this Wiki)
├── readme_cn.txt / readme_en.txt        # original Rockchip readme files
├── docs/                                # 90 Rockchip PDF manuals and copyright notices
├── media/          (1.7 G)              # multimedia and AI runtime sources
├── project/        (637 M)              # build scripts, board configuration, and applications
├── sysdrv/         (6.9 G)              # U-Boot / Kernel / MCU / prebuilt drivers
└── tools/          (1.3 G)              # cross-toolchains, flashing, and packaging tools
```

### `sysdrv/` — System Layer

- `source/uboot/`: U-Boot source, including rkbin DDR initialization firmware.
- `source/kernel/`: Linux 6.1.157 source.
- `source/mcu/`: RT-Thread firmware for the MCU-side coprocessor; build it only when needed.
- `drv_ko/` (246 M): prebuilt kernel modules.
- `tools/board/buildroot/`: **Buildroot is provided as `buildroot-2023.02.6.tar.gz`** and is extracted to `sysdrv/source/buildroot/buildroot-2023.02.6/` during the first rootfs build. This directory also contains `recamera2_buildroot_aarch64_defconfig`, `busybox.config`, and various patches.

> It is normal not to find a Buildroot directory under `sysdrv/source/` before the archive has been extracted.

### `media/` — Multimedia and Algorithms

| Directory | Purpose |
| --- | --- |
| `mpp/` | Rockchip Media Process Platform; H.264/H.265/JPEG encoding and decoding |
| `rockit/` | MPI runtime with unified VI/VPSS/VENC/AI/AO/RGN interfaces; the main entry point for video pipelines |
| `isp/` | `camera_engine_rkaiq`, 3A and IQ tuning, including `iqfiles/isp35/` |
| `rga/` | 2D accelerator for scaling, format conversion, and rotation |
| `iva/` | ROCKIVA vision algorithm libraries, including `librockiva-rv1126b-Linux` and `models/rockiva_data_rv1126b` |
| `avs/` | Around-view stitching |
| `alsa-lib/` | ALSA userspace library |
| `rknn-llm-mk/` | RKLLM SDK: rkllm-runtime, examples, RKNN Runtime and `rknn_api.h`, plus NPU driver packages |
| `common_algorithm/` | Common algorithms |
| `libdrm/`, `libv4l/` | Userspace display and V4L2 libraries |
| `prerecord/`, `rockauto/`, `sysutils/`, `third_libs/` | Prerecording, automotive components, system utilities, and third-party libraries such as freetype/libjpeg/libpng/zlib |
| `samples/` | `example/` contains demos and stress tests; `simple_test/` contains minimal single-file examples |

### `project/` — Build Framework and Applications

- `build.sh`: unified entry point that drives sysdrv → media → app → firmware packaging.
- `cfg/`: 50 `BoardConfig-*.mk` files across five product-series directories. **Only two files in `cfg/BoardConfig_Recamera2/` apply to reCamera Pro:** the 32-bit `...-IPC.mk` and 64-bit `...-IPC_64BIT.mk` configurations.
- `cfg-all-items-introduction.txt`: descriptions of all `RK_*` configuration options.
- `app/`: all applications; see [reCamera Upper-Layer Service Architecture](/recamera_pro_bsp_services/).
- `scripts/`, `make_meta/`: packaging and meta-header generation scripts.

### `tools/` — Host-PC Tools

- `linux/toolchain/`: bundled toolchains used for BSP builds. For ordinary application development, use Seeed's [application cross-compilation SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain); there is no need to select a toolchain manually from the full source package.
- `linux/Linux_Upgrade_Tool/`: `upgrade_tool` v2.26, `88-rockusb.rules`, `config.ini`, and a command-line user guide PDF.
- `linux/Linux_Pack_Firmware/`: firmware packaging tools.
- `linux/SocToolKit/`, `linux/programmer_image_tool/`: GUI flashing and factory-image tools.

## How the Components Work Together

`sysdrv`, `media`, and `project/app` each have their own build entry points, but they are not three independent products. The full build is driven by `./build.sh` in dependency order:

```text
sysdrv(uboot + kernel + rootfs) → media → app → firmware(packaging) → output/image/
```

Application builds use the board configuration, Buildroot outputs, and application-specific dependencies. Applications that use Rockchip media interfaces also depend on headers and libraries generated by media (`output/out/media_out/{include,lib}`). For a first full build, follow the [Full Firmware Build Workflow](/recamera_pro_bsp_full_build/). To develop a simple application, you do not need to flash a complete firmware image first; prepare only the build outputs required by that application's dependencies.

Keep this dependency order in mind:

1. `sysdrv` provides the kernel, root filesystem, and base target environment.
2. `media` builds media, ISP, image-processing, and some AI libraries.
3. `project/app` builds product applications that run on the target system.
4. `firmware` packages the relevant outputs into images.

New users should choose a reading path from the Wiki home page based on their goal. You do not need to read every topic from beginning to end.

## Build Output Locations

| Path | Contents |
| --- | --- |
| `output/image/` | Flashable images: `download.bin`, `idblock.img`, `uboot.img`, `env.img`, `boot.img`, `rootfs.img`, `recovery.img`, `misc.img`, `userdata.img`, and `update.img` |
| `output/out/media_out/` | media `include/` and `lib/` directories, used by application builds |
| `output/out/app_out/` | application outputs, merged into the rootfs under `bin/lib/share/etc/root` during packaging |
| `output/out/rootfs_glibc_rv1126b/` | rootfs packaging directory; its contents are used to create `rootfs.img` |
| `output/out/sysdrv_out/` | sysdrv outputs |
| `IMAGE/` | archive created by `./build.sh save` / `allsave` (images, patches, and build information) |

> A clean SDK extraction does not contain `output/`; it is generated during the build.

## Documentation Index (`docs/`)

The `docs/` directory contains 90 PDF files grouped by language and topic:

| Topic | Representative documents | When to read them |
| --- | --- | --- |
| `ipc/` | `Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf`, `Rockchip_Developer_Guide_Linux_RKAI_CN.pdf` | First steps and RKAI interfaces |
| `media/` | `Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf`, `Rockchip_Developer_Guide_MPI_C_CN.pdf`, `..._Linux_AOV_CN.pdf`, `..._Linux_DVR_CN.pdf`, `..._EIS_CN.pdf` | Developing video pipelines |
| `isp/` | `Rockchip_Tuning_Guide_ISP35_CN.pdf`, `Rockchip_Developer_Guide_Camera_Driver_CN.pdf`, `Rockchip_Driver_Guide_VI_CN.pdf` | Image tuning and sensor changes |
| `audio/` | `Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf`, `..._VQE_Introduction_CN.pdf`, `..._Microphone_Array_TEST_CN.pdf` | Audio development |
| `bsp/` | GPIO/I2C/SPI/PWM/USB/SDMMC/Thermal/Suspend/CAN_FD, etc. | Peripheral drivers |
| `npu_iva/` | `Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf` | Vision algorithms |
| `security/` | OTP, TEE, Crypto/HWRNG | Secure boot and cryptography |
| `en/` root directory | `Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf`, `Rockchip_User_Guide_Bug_System_EN.pdf` | Filing issues with Rockchip |

The SDK root also has symbolic links to frequently used documents, such as `Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf` and `Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf`.

Application-level documentation is also available in Markdown: `project/app/recamera_ipc/docs/Rockchip_Developer_Guide_Linux_RKIPC_CN.md` (RKIPC Development Guide V1.7.6) and `project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md`.

See [Glossary, Documentation Map, and Copyright](/recamera_pro_sdk_reference/) for the complete list.

## Application SDK vs. BSP Source

| Your task | What you typically need | Where to find it in this package |
| --- | --- | --- |
| Compile a regular C/C++ or RKNN device-side application | Cross-compiler, ready-to-use target sysroot, common development libraries, and examples | We recommend the [reCamera Pro Cross-Compilation SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain), which provides a curated toolchain and sysroot for application development |
| Build an application inside the full source package | Toolchain, plus media libraries or Buildroot staging generated as needed | Start with [Your First App](/recamera_pro_bsp_app_integration/); this package is also useful when modifying the application build framework or investigating product integration |
| Use Rockchip video, ISP, audio, or NPU interfaces | API headers, matching libraries, runtime firmware/drivers, and examples | The SDK provides source code, some prebuilt libraries, and examples. A clean extraction has no `output/out/media_out/`; build media as needed |
| Use third-party libraries provided by Buildroot | A sysroot and libraries matching the target rootfs | This is part of full BSP application integration; the Buildroot staging area is usually available after building the rootfs |
| Modify the kernel, drivers, DTS, or rootfs | BSP sources, configuration, and the complete build workflow | Provided by `sysdrv/`, `project/`, and `./build.sh`; see [Full Firmware Build](/recamera_pro_bsp_full_build/) |

Application developers should use the application-focused cross-compilation SDK by default. The full source package is for source-level product and BSP work. Even when developing an application inside it, build only the components required by your dependencies. Use the complete BSP workflow only when you need to produce or modify the full firmware.

## What Is Not Included

- No `.repo/` directory: this is a source snapshot, so the `repo sync` instructions in `readme_en.txt` do not apply.
- No `output/` or `IMAGE/`: you must build the images yourself.
- No RKNN-Toolkit2: the PC-side ONNX-to-RKNN conversion tool requires a separate Python environment on the host.
- No Windows flashing utility RKDevTool: `tools/` contains Linux tools only.

## Next Steps

- New to the package? Start with [Download and Extract](/recamera_pro_bsp_download/).
- Ready to build? Go to [Set Up the Build Environment](/recamera_pro_bsp_build_environment/).

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>