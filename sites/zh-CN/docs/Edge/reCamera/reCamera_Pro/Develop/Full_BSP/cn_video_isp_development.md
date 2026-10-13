---
description: "使用 reCamera Pro 的视频、rockit/MPI、ISP、传感器和 RGA 能力开发应用。"
title: "视频与 ISP 开发"
keywords:
  - "reCamera"
  - "reCamera Pro"
  - "RV1126B"
  - "SDK"
  - "C/C++"
  - "RKNN"
  - "Application Development"
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_video_isp_development
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/cn/recamera_pro_video_isp_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 视频与 ISP 开发

本页重点介绍产品的视频流水线和 ISP 接口。关于常规 C/C++ 应用环境与部署，请遵循 [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain) 中的快速上手指南。此处引用的 `rockit`、IQ 和传感器配置细节属于完整源码包中的高级主题。

## 核心概念：rockit MPI 流水线

Rockchip 视频处理使用 **rockit**（MPI，Media Process Interface，媒体处理接口）模块-通道-绑定模型。请避免直接操作 V4L2。模块缩写说明如下：

| 模块 | 全称 | 作用 |
| --- | --- | --- |
| `VI` | 视频输入 | 通过 ISP 从传感器采集帧 |
| `VPSS` | 视频处理子系统 | 多通道缩放、裁剪和格式转换 |
| `VENC` | 视频编码器 | H.264 / H.265 / JPEG / MJPEG 编码 |
| `VDEC` | 视频解码器 | 解码 |
| `VO` | 视频输出 | 将帧发送到显示设备 |
| `RGN` | 区域 | OSD 叠加和水印 |
| `AI` / `AO` | 音频输入 / 输出 | 采集 / 回放 |
| `AENC` / `ADEC` | 音频编码器 / 解码器 | 音频编码 / 解码 |
| `AVS` | 环视系统 | 多摄像头环视拼接 |
| `IVS` | 智能视频监控 | 智能分析，例如运动检测 |
| `TDE` | 二维引擎 | 2D 加速 |
| `MB` | 媒体缓冲区 | 媒体缓冲池管理 |
| `SYS` | 系统 | 初始化、绑定和内存管理 |

对应的头文件位于 `output/out/media_out/include/` 中，遵循 `rk_mpi_<module>.h` 命名约定（例如 `rk_mpi_vi.h`、`rk_mpi_venc.h` 和 `rk_mpi_sys.h`）。其他头文件包括 `rk_debug.h`、`rk_defines.h` 和 `rk_errno.h`。

典型流水线：

```text
sensor → VI(dev0/pipe0/chn0) → VPSS(grp0) → VENC(chn0) → RTSP/File
                              ↘ RGN overlay
                              ↘ IVS intelligent analysis
```

使用 `RK_MPI_SYS_Bind()` 连接模块。之后数据会自动流动，因此你无需自己搬运帧数据。

## 现有示例索引

### `media/samples/simple_test/` — 最小化单文件示例（推荐起点）

每个 `.c` 文件都是一个完整的、可独立构建的程序。文件名描述了其流水线：

| 文件 | 演示内容 |
| --- | --- |
| `simple_vi_get_frame.c` | 采集 VI 帧；最小的 VI 示例 |
| `simple_vi_get_frame_rkaiq.c` | 采集帧并手动初始化 rkaiq |
| `simple_vi_bind_venc.c` | VI 到 VENC，编码到文件 |
| `simple_vi_bind_venc_jpeg.c` | JPEG 抓拍 |
| `simple_vi_bind_venc_rtsp.c` | **VI 到 VENC 再到 RTSP 推流；最常见的起点** |
| `simple_vi_bind_venc_rtsp_lowdelay.c` | 低延迟 RTSP |
| `simple_vi_bind_venc_rtsp_eptz.c` | 电子云台（Electronic PTZ） |
| `simple_vi_bind_venc_svc_rtsp.c` | SVC 可伸缩编码 |
| `simple_vi_bind_venc_osd.c` | OSD 叠加 |
| `simple_vi_bind_vpss_bind_venc.c` | 添加 VPSS 以支持多路码流 |
| `simple_vi_bind_vpss_bind_vo.c` | 添加显示输出 |
| `simple_vi_bind_ivs.c` | 接入智能分析 |
| `simple_vi_bind_avs_bind_venc.c` | 环视拼接 |
| `simple_vi_gdc_vo.c` | 畸变校正 |
| `simple_vdec_bind_vo.c` / `simple_vdec_bind_vo_rtsp_lowdelay.c` | 解码并显示 / 低延迟再推流 |
| `simple_ai_bind_aenc.c` / `simple_adec_bind_ao.c` / `simple_ao_send_frame.c` | 音频采集与编码 / 解码与回放 / 直接帧回放 |
| `simple_multi_ahd_vpss_test.c` | 多路 AHD |
| `rv1126b/simple_irfpa_vi_bind_venc_rtsp.c` | **仅限 RV1126B**：红外焦平面阵列采集与推流 |

`simple_test/` 目录还包含 `rk_2_1920x1080.json` / `.xml`，作为双摄 1080p AVS 标定示例。

### `media/samples/example/` — 完整示例

| 子目录 | 文件 |
| --- | --- |
| `vi/` | `sample_vi.c`、`sample_multi_vi.c`、`sample_vi_eis.c`（电子防抖） |
| `venc/` | `sample_vi_vpss_osd_venc.c`、`sample_multi_vi_avs_osd_venc.c` |
| `vo/` | `sample_vi_vo.c` |
| `audio/` | `sample_ai.c`、`sample_ai_aenc.c` |
| `avs/` | `sample_avs.c`、`sample_multi_vi_avs.c` |
| `demo/` | `sample_demo_vi_venc.c`、`sample_demo_dual_camera.c`、`sample_demo_dual_camera_wrap.c`、`sample_demo_multi_cam.c`、`sample_demo_multi_camera_eptz.c`、`sample_demo_eis.c`、`sample_demo_aiisp.c`、`sample_demo_dual_aiisp.c`、`sample_demo_vi_avs_venc.c` |
| `test/` | 压力测试：`sample_venc_stresstest.c`、`sample_vpss_stresstest.c`、`sample_isp_stresstest.c`、`sample_mulit_isp_stresstest.c`、`sample_multi_cam_stresstest.c`、`sample_rgn_stresstest.c`、`sample_ai_aenc_adec_ao_stresstest.c`、`sample_avs_stresstest.c`、`sample_vdec_vo_stresstest.c`、`sample_vdec_vpss_vo_stresstest.c`、`sample_demo_*_stresstest.c` |

进行稳定性测试时，请在 `test/` 下运行对应的压力测试。

### `project/app/` 下的应用级示例

| 目录 | 内容 |
| --- | --- |
| `testdemo/low_delay_net_display` | 低延迟网络显示 |
| `testdemo/yoloworld_demo` | YOLO-World 检测演示（包含 `3rdparty`、`resources` 和 `RkLunch.sh`） |
| `aov_sample/` | 低功耗常开视觉：`sample_aov_aiisp_iva_venc.c`、`sample_aoa_capture.c`、`sample_aov_audio.c`、`resume_suspend_test.sh` |
| `cvr/` | 车载录像 |
| `ao_record_demo/` | 音频录制演示；其 Makefile 是链接 rockit 的有用模板 |
| `uvc_app_tiny/` | UVC 摄像头模式 |
| `recamera_ipc/` | 完整的产品实现；参见 [产品服务架构](/cn/recamera_pro_bsp_services/) |

## 构建并运行示例

示例随 media 一起构建（`media/Makefile` 中的 `all` 目标会调用 `make -C ./samples`）：

```bash
./build.sh media
ls output/out/media_out/           # should contain the sample binaries
```

对于 RV1126B，构建会自动添加 `-DRV1126B`，并使用 `simple_test/rv1103_rv1106_rv1103b_rv1126b/` 和 `simple_test/rv1126b/` 下的芯片专用源码文件。

将某个示例拷贝到设备上并运行：

```bash
scp output/out/media_out/bin/simple_vi_bind_venc_rtsp root@<device-ip>:/userdata/
ssh root@<device-ip>
# /userdata/simple_vi_bind_venc_rtsp --help
```

> **资源冲突警告：** 在产品固件中，`rkipc`（`recamera_ipc`）已经在运行，并占用 VI/VENC/ISP 资源以及 5554 端口上的 RTSP 服务。示例可能因为设备节点已被占用而失败。调试前请先停止该应用：
>
> ```bash
> # sh /oem/usr/bin/RkLunch-stop.sh
> # 或使用 /etc/init.d/S21appinit stop
> ```
>
> **不要为了访问设备节点而随意杀死系统服务。** 调试结束后请重新启动它们。在量产环境中，请通过共享配置或明确的停服流程来协调访问。

## RTSP 推流架构（重要）

reCamera Pro 上的推流使用 **两级架构**：

```text
recamera_ipc(rkipc) internal RTSP service listening on 127.0.0.1:5554
        ↓ rtsp://127.0.0.1:5554/live/0 (main)  /live/1 (sub)
     go2rtc converts the stream
        ↓ WebRTC :8555 / RTSP :554 (optional) / HLS, etc.
      External clients
```

配置文件位于 `project/cfg/BoardConfig_Recamera2/overlay/overlay-buildroot-go2rtc/oem/usr/etc/go2rtc/go2rtc.yaml`。554 端口是否对外开放由 `/userdata/config/rkipc.ini` 中 `[video.0.rtsp]`、`[video.0.onvif]` 和 `[video.1.rtsp]` 段落里的 `enable` 设置控制。参见 [设备访问与调试](/cn/recamera_pro_bsp_device_debug/)。

`recamera_ipc` 的默认配置文件为 `project/app/recamera_ipc/src/rv1126b_ipc/rkipc-3840x2160.ini`。其中包含分辨率、码率、帧率以及 RTSP/ONVIF 设置。

对于自定义推流应用，有两种选择：

1. **使用 rockit 和 `librtsp`：** 像 `simple_vi_bind_venc_rtsp.c` 那样启动你自己的 RTSP 服务（链接 `-lrtsp`），并选择一个非 5554 的端口。
2. **使用 GStreamer：** 设备上提供 GStreamer 1.22（**插件列表仍需在硬件上验证**），可以通过 `v4l2src` 采集。以下探测命令已验证可用：

```bash
# gst-launch-1.0 -v v4l2src device=/dev/video13 num-buffers=30 \
#   ! 'video/x-raw,format=NV12,width=1920,height=1080,framerate=30/1' \
#   ! videoconvert ! fakesink
```

设备节点编号（例如 `/dev/video13`）**取决于固件**，在不同版本之间可能变化。请在设备上使用 `v4l2-ctl --list-devices` 进行确认。

## ISP 与 rkaiq

### 源码位置

- 引擎源码：`media/isp/camera_engine_rkaiq/`
- IQ 文件：`media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/`（此板级配置使用 **isp35**）
- FEC 标定：`media/isp/camera_engine_rkaiq/IspFec/fec_calib/`
- 头文件（构建后）：`output/out/media_out/include/rkaiq/`，包含 `uAPI`、`uAPI2`、`algos`、`common`、`xcore`、`iq_parser`、`iq_parser_v2` 和 `smartIr` 等子目录
- 库：`-lrkaiq`（同时链接 `-lstdc++ -lm`）

较新的代码统一使用 **uAPI2**（`rk_aiq_user_api2_*.h`）；只有使用 `RV1126_RV1109` 宏构建时才会使用旧的 uAPI。

### 板级配置中的 IQ 文件

板级配置中指定了：

```bash
export RK_CAMERA_SENSOR_IQFILES="ainr/sc450ai_default_default.json ainr/sc450ai ainr/sc850sl ainr/sc850sl_default_default.json"
export RK_CAMERA_SENSOR_CAC_BIN=""
export RK_AIISP_MODEL=NONE
```

这会在镜像中打包 **SC450AI** 和 **SC850SL** 传感器的 AINR（AI 降噪）IQ 文件。AI-ISP 模型被禁用（`RK_AIISP_MODEL=NONE`）。

在设备上，打包后的文件位于 `/oem/usr/share/iqfiles/`，而 `/etc/iqfiles` 是指向该目录的符号链接（由 `build.sh` 中的 `__PACKAGE_OEM()` / `__PACKAGE_ROOTFS()` 创建）。

### 替换或调优 IQ 文件

- 调试期间，可直接替换设备上的文件：`/oem/usr/share/iqfiles/<sensor>/<Module>.json`（如果 `/oem` 为只读，请先重新挂载），然后重启 `rkipc` 以应用更改。
- 发布版本时，请将调好的 JSON 文件放回 `media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/ainr/`，并在 `RK_CAMERA_SENSOR_IQFILES` 中列出，然后重新构建 media 和固件。

有关调试工具和流程，请参阅 `docs/zh/isp/Rockchip_Tuning_Guide_ISP35_CN.pdf`、`Rockchip_Color_Optimization_Guide_ISP39_ISP33_ISP35_CN.pdf`、`Rockchip_Development_Guide_IRFPA_CN.pdf`（红外）以及 `Rockchip_Development_Guide_FEC_CN.pdf`（畸变标定）。

## 传感器与内核驱动

内核片段 `rv1126b-recamera2.config` 将许多传感器驱动构建为**模块**：

```text
SC450AI SC850SL SC200AI SC3336 SC401AI SC4336 SC530AI SC635HAI SC00AI series
GC2053 GC8613 GST412C IMX415 IMX464 IMX586 IMX708 OS04A10 PS5458
TECHPOINT(AHD Decoding)
```

它还启用了 `CONFIG_VIDEO_ROCKCHIP_FEC=y`（畸变校正硬件）和 `CONFIG_OF_OVERLAY=y`（运行时 DTBO 覆盖）；`CONFIG_VIDEO_RK_IRCUT` 被**禁用**。

与相机相关的设备树：

| 文件 | 用途 |
| --- | --- |
| `rv1126b-recamera2-v1.dts` | 顶层入口，`model = "Rockchip RV1126B RECAMERA PRO Board"` |
| `rv1126b-recamera2-cam-csi0.dtsi` / `-cam-csi1.dtsi` | CSI0 / CSI1 相机路径 |
| `rv1126b-recamera2-ext-cam-csi1.dts` | **扩展板**相机（编译为 `.dtbo`） |
| `rv1126b-recamera2-baseboard-0.dts` / `-baseboard-1.dts` | 底板变体 |
| `rv1126b-recamera2-extboard-0.dts` / `-extboard-1.dts` | 扩展板变体 |
| `rv1126b-recamera2-disp.dtsi` | 显示 |

`RK_KERNEL_RC_DTO=y` 启用 DTBO（运行时设备树覆盖）。构建输出的 `rv1126b-recamera2-ext-*.dtbo` 会被 `build.sh` 复制到 `/oem/usr/share/`。在启动时，板卡识别程序（`S00board-id`）读取 ADC 并写入 `/run/board_id.env`；系统使用该信息动态选择覆盖层。此机制允许一个固件镜像支持多种 reCamera Pro 硬件配置。参见 [系统定制（DTS / Kernel / Buildroot / Overlay）](/cn/recamera_pro_bsp_system_customization/)。

## RGA 与格式转换

`media/rga/` 提供用于缩放、NV12↔RGB 转换、旋转和混合的 2D 加速。链接时使用 `-lrga`。

一个常见用例：VENC 需要 NV12，而 NPU 模型需要 RGB。使用 RGA 转换比使用 `videoconvert` 更快且占用更少 CPU。

**不要将原始 NV12 字节直接传给 RGB/BGR 模型。** 请显式转换像素格式并对数据进行归一化。

## 相关文档

| 文档 | 路径 |
| --- | --- |
| Rockit Runtime 开发者指南 | `docs/zh/media/Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf` |
| MPI C API 指南 | `docs/zh/media/Rockchip_Developer_Guide_MPI_C_CN.pdf` |
| VI 驱动指南 | `docs/zh/isp/Rockchip_Driver_Guide_VI_CN.pdf` |
| 相机驱动指南 | `docs/zh/isp/Rockchip_Developer_Guide_Camera_Driver_CN.pdf` |
| ISP35 开发与调试 | `docs/zh/isp/Rockchip_Development_Guide_ISP35_CN.pdf`、`Rockchip_Tuning_Guide_ISP35_CN.pdf` |
| EIS 电子防抖 | `docs/zh/media/Rockchip_Developer_Guide_EIS_CN.pdf`、`Rockchip_RV1126B_Development_Guide_DIS_CN.pdf` |
| AOV 低功耗模式 | `docs/zh/media/Rockchip_Developer_Guide_Linux_AOV_CN.pdf` |
| DVR 车载录像 | `docs/zh/media/Rockchip_Developer_Guide_Linux_DVR_CN.pdf` |
| VENC 故障排查 | `docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf` |
| AVS 标定 | `docs/zh/media/Rockchip_Developer_Guide_AVS_Calib_Product_CN.pdf` |
| 快速启动 | `docs/zh/ipc/Rockchip_Developer_Guide_Linux_RKAI_CN.pdf`（Thunder Boot） |

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>