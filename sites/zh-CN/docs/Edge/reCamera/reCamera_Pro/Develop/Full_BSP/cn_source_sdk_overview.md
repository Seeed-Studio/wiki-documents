---
description: 对完整 BSP 源码包、组件边界，以及应用开发与系统开发差异的概览。
title: 完整源码包概览
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
url: https://wiki.seeedstudio.com/cn/recamera_pro_bsp_source_overview/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 完整源码包概览

## 你将获得什么

`recamera-pro-sdk-v1.0.10` 是基于 Rockchip RV1126B Linux IPC SDK 的**完整 BSP 源码发布包**。它包含 Seeed 的 Recamera2 板级配置和产品应用程序。它还包含了一些用于应用开发的工具和组件，但不应将其视为一个在解压后就已经构建好所有 API 库、可直接使用的应用 SDK。

一个应用开发 SDK 通常侧重于可直接使用的交叉编译器、目标 sysroot、头文件、预编译库、API 文档和示例。此源码包包含交叉工具链和媒体库源码。干净解压后，在 `output/` 下不会包含构建产物，因此，一个需要媒体或 Buildroot 库的应用，可能需要你先构建相关组件并准备好 sysroot。**这并不意味着每个应用都需要完整构建 U-Boot、内核和 rootfs。**

此源码包支持三类工作：

- **构建或修改固件：** 使用统一的构建入口来编译 U-Boot、Linux、Buildroot、媒体库和应用，然后生成可烧录镜像。
- **开发设备端应用：** 使用捆绑的交叉工具链，并按需获取目标 sysroot、媒体库或 AI 库。一个简单的 C 程序不需要先重建整个系统。
- **定制产品软件：** 修改 `recamera_ipc`、`recamera_web` 和 `recamera_services` 等应用，以及系统配置。

它既不是预编译固件包，也不是仅包含 Buildroot 的包。解压后大约占用 12 GB 空间。

## 硬件与软件规格

| 项目 | 数值 | 来源 |
| --- | --- | --- |
| SoC | Rockchip RV1126B（`RK_CHIP=rv1126b`，`RK_ARCH=arm64`） | 板级配置 |
| PMIC | RK801 | 板级配置文件名 |
| 启动介质 | eMMC（`RK_BOOT_MEDIUM=emmc`） | 板级配置 |
| 内核 | Linux 6.1.157（"Curry Ramen"） | `sysdrv/source/kernel/Makefile` |
| 内核 defconfig | `rv1126b_ipc_defconfig` + 4 个片段 | 板级配置 |
| 设备树 | `rv1126b-recamera2-v1.dts` | 板级配置 |
| U-Boot defconfig | `rv1126b_recamera2_defconfig`（`CONFIG_BAUDRATE=1500000`） | `sysdrv/source/uboot/u-boot/configs/` |
| 根文件系统 | Buildroot 2023.02.6，defconfig 为 `recamera2_buildroot_aarch64_defconfig` | 板级配置 |
| 构建工具 | 由板级配置指定的 Rockchip BSP 构建工具 | `tools/`，`project/build.sh` |
| 摄像头传感器 | SC450AI / SC850SL（包含 IQ 文件；内核还会为 GC2053、IMX415、SC200AI 及其他传感器构建模块） | `RK_CAMERA_SENSOR_IQFILES`，`rv1126b-recamera2.config` |
| Wi-Fi / 蓝牙 | `RK_ENABLE_WIFI_CHIP=AP6XXX`；蓝牙已启用 | 板级配置 |
| 参考应用类型 | `RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` | 板级配置 |
| 设备型号字符串 | `Rockchip RV1126B RECAMERA PRO Board` | `rv1126b-recamera2-v1.dts` |

## 目录结构

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

### `sysdrv/` — 系统层

- `source/uboot/`：U-Boot 源码，包括 rkbin DDR 初始化固件。
- `source/kernel/`：Linux 6.1.157 源码。
- `source/mcu/`：MCU 侧协处理器的 RT-Thread 固件；仅在需要时构建。
- `drv_ko/`（246 M）：预编译内核模块。
- `tools/board/buildroot/`：**Buildroot 以 `buildroot-2023.02.6.tar.gz` 的形式提供**，在首次构建 rootfs 时会被解压到 `sysdrv/source/buildroot/buildroot-2023.02.6/`。该目录还包含 `recamera2_buildroot_aarch64_defconfig`、`busybox.config` 和各种补丁。

> 在归档文件尚未解压之前，在 `sysdrv/source/` 下找不到 Buildroot 目录是正常现象。

### `media/` — 多媒体与算法

| 目录 | 作用 |
| --- | --- |
| `mpp/` | Rockchip Media Process Platform；H.264/H.265/JPEG 编解码 |
| `rockit/` | 具有统一 VI/VPSS/VENC/AI/AO/RGN 接口的 MPI 运行时；视频处理流水线的主要入口 |
| `isp/` | `camera_engine_rkaiq`，3A 与 IQ 调优，包括 `iqfiles/isp35/` |
| `rga/` | 用于缩放、格式转换和旋转的 2D 加速器 |
| `iva/` | ROCKIVA 视觉算法库，包括 `librockiva-rv1126b-Linux` 和 `models/rockiva_data_rv1126b` |
| `avs/` | 环视拼接 |
| `alsa-lib/` | ALSA 用户态库 |
| `rknn-llm-mk/` | RKLLM SDK：rkllm-runtime、示例、RKNN Runtime 和 `rknn_api.h`，以及 NPU 驱动包 |
| `common_algorithm/` | 通用算法 |
| `libdrm/`, `libv4l/` | 用户态显示和 V4L2 库 |
| `prerecord/`, `rockauto/`, `sysutils/`, `third_libs/` | 预录、车载组件、系统工具，以及 freetype/libjpeg/libpng/zlib 等第三方库 |
| `samples/` | `example/` 包含演示和压力测试；`simple_test/` 包含最小的单文件示例 |

### `project/` — 构建框架与应用

- `build.sh`：统一入口，驱动 sysdrv → media → app → 固件打包。
- `cfg/`：分布在五个产品系列目录中的 50 个 `BoardConfig-*.mk` 文件。**在 `cfg/BoardConfig_Recamera2/` 中只有两个文件适用于 reCamera Pro：**32 位的 `...-IPC.mk` 和 64 位的 `...-IPC_64BIT.mk` 配置。
- `cfg-all-items-introduction.txt`：所有 `RK_*` 配置项的说明。
- `app/`：所有应用；参见 [reCamera 上层服务架构](/cn/recamera_pro_bsp_services/)。
- `scripts/`、`make_meta/`：打包和元数据头文件生成脚本。

### `tools/` — 主机 PC 工具

- `linux/toolchain/`：用于 BSP 构建的捆绑工具链。对于普通应用开发，请使用 Seeed 的[应用交叉编译 SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain)；无需从完整源码包中手动选择工具链。
- `linux/Linux_Upgrade_Tool/`：`upgrade_tool` v2.26、`88-rockusb.rules`、`config.ini` 和命令行用户指南 PDF。
- `linux/Linux_Pack_Firmware/`：固件打包工具。
- `linux/SocToolKit/`、`linux/programmer_image_tool/`：GUI 烧录和工厂镜像工具。

## 组件如何协同工作

`sysdrv`、`media` 和 `project/app` 各自有独立的构建入口，但它们并不是三个独立的产品。完整构建由 `./build.sh` 按依赖顺序驱动：

```text
sysdrv(uboot + kernel + rootfs) → media → app → firmware(packaging) → output/image/
```

应用构建会使用板级配置、Buildroot 产物以及应用特定的依赖。使用 Rockchip 媒体接口的应用还依赖于由 media 生成的头文件和库（`output/out/media_out/{include,lib}`）。对于首次完整构建，请遵循[完整固件构建流程](/cn/recamera_pro_bsp_full_build/)。要开发一个简单应用，你不需要先烧录完整固件镜像；只需准备该应用依赖所需的构建产物。

请牢记以下依赖顺序：

1. `sysdrv` 提供内核、根文件系统和基础目标环境。
2. `media` 构建媒体、ISP、图像处理以及部分 AI 库。
3. `project/app` 构建运行在目标系统上的产品应用。
4. `firmware` 将相关产物打包成镜像。

新用户应根据自己的目标，从 Wiki 首页选择阅读路径。你不需要从头到尾阅读每一个主题。

## 构建产物位置

| 路径 | 内容 |
| --- | --- |
| `output/image/` | 可烧录镜像：`download.bin`、`idblock.img`、`uboot.img`、`env.img`、`boot.img`、`rootfs.img`、`recovery.img`、`misc.img`、`userdata.img` 和 `update.img` |
| `output/out/media_out/` | 媒体的 `include/` 和 `lib/` 目录，用于应用构建 |
| `output/out/app_out/` | 应用产物，在打包时合并进 rootfs 下的 `bin/lib/share/etc/root` |
| `output/out/rootfs_glibc_rv1126b/` | rootfs 打包目录；其内容用于创建 `rootfs.img` |
| `output/out/sysdrv_out/` | sysdrv 产物 |
| `IMAGE/` | 由 `./build.sh save` / `allsave` 创建的归档（镜像、补丁和构建信息） |

> 干净解压的 SDK 中不包含 `output/`；它会在构建过程中生成。

## 文档索引（`docs/`）

`docs/` 目录包含按语言和主题分组的 90 个 PDF 文件：

| 主题 | 代表性文档 | 适合在何时阅读 |
| --- | --- | --- |
| `ipc/` | `Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf`、`Rockchip_Developer_Guide_Linux_RKAI_CN.pdf` | 入门步骤和 RKAI 接口 |
| `media/` | `Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf`、`Rockchip_Developer_Guide_MPI_C_CN.pdf`、`..._Linux_AOV_CN.pdf`、`..._Linux_DVR_CN.pdf`、`..._EIS_CN.pdf` | 开发视频处理流水线 |
| `isp/` | `Rockchip_Tuning_Guide_ISP35_CN.pdf`、`Rockchip_Developer_Guide_Camera_Driver_CN.pdf`、`Rockchip_Driver_Guide_VI_CN.pdf` | 图像调优与传感器变更 |
| `audio/` | `Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf`、`..._VQE_Introduction_CN.pdf`、`..._Microphone_Array_TEST_CN.pdf` | 音频开发 |
| `bsp/` | GPIO/I2C/SPI/PWM/USB/SDMMC/Thermal/Suspend/CAN_FD 等 | 外设驱动 |
| `npu_iva/` | `Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf` | 视觉算法 |
| `security/` | OTP、TEE、Crypto/HWRNG | 安全启动与密码学 |
| `en/` 根目录 | `Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf`、`Rockchip_User_Guide_Bug_System_EN.pdf` | 向 Rockchip 提交问题 |

SDK 根目录还包含指向常用文档的符号链接，例如 `Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf` 和 `Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf`。

应用层文档也提供了 Markdown 版本：`project/app/recamera_ipc/docs/Rockchip_Developer_Guide_Linux_RKIPC_CN.md`（RKIPC 开发指南 V1.7.6）和 `project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md`。

完整列表请参见[术语表、文档地图和版权](/cn/recamera_pro_sdk_reference/)。

## 应用 SDK 与 BSP 源码的区别

| 你的任务 | 通常需要什么 | 在本包中的位置 |
| --- | --- | --- |
| 编译常规 C/C++ 或 RKNN 设备端应用 | 交叉编译器、可直接使用的目标 sysroot、常用开发库和示例 | 我们推荐使用 [reCamera Pro 交叉编译 SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain)，它为应用开发提供了精选的工具链和 sysroot |
| 在完整源码包内构建应用 | 工具链，以及按需生成的媒体库或 Buildroot staging | 从[你的第一个应用](/cn/recamera_pro_bsp_app_integration/)开始；当你需要修改应用构建框架或研究产品集成时，此包也很有用 |
| 使用 Rockchip 视频、ISP、音频或 NPU 接口 | API 头文件、匹配的库、运行时固件/驱动和示例 | SDK 提供源代码、部分预编译库和示例。干净解压后没有 `output/out/media_out/`；按需构建媒体组件 |
| 使用 Buildroot 提供的第三方库 | 与目标 rootfs 匹配的 sysroot 和库 | 这是完整 BSP 应用集成的一部分；在构建 rootfs 后通常可以获得 Buildroot staging 区 |
| 修改内核、驱动、DTS 或 rootfs | BSP 源码、配置以及完整构建流程 | 由 `sysdrv/`、`project/` 和 `./build.sh` 提供；参见[完整固件构建](/cn/recamera_pro_bsp_full_build/) |

应用开发者默认应使用面向应用的交叉编译 SDK。完整源码包用于源码级产品和 BSP 工作。即使在其中开发应用，也只构建依赖所需的组件。只有在需要生成或修改完整固件时，才使用完整 BSP 工作流。

## 不包含的内容

- 不包含 `.repo/` 目录：这是一个源码快照，因此 `readme_en.txt` 中的 `repo sync` 指令不适用。
- 不包含 `output/` 或 `IMAGE/`：你必须自行构建镜像。
- 不包含 RKNN-Toolkit2：PC 端 ONNX 到 RKNN 的转换工具需要在主机上单独的 Python 环境。
- 不包含 Windows 刷机工具 RKDevTool：`tools/` 仅包含 Linux 工具。

## 后续步骤

- 第一次使用此包？请从[下载与解压](/cn/recamera_pro_bsp_download/)开始。
- 准备好开始构建？前往[搭建构建环境](/cn/recamera_pro_bsp_build_environment/)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>