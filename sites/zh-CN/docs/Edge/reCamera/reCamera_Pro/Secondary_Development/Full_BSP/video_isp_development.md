---
description: "Develop applications with reCamera Pro video, rockit/MPI, ISP, sensor, and RGA capabilities."
title: "Video and ISP Development"
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
url: https://wiki.seeedstudio.com/recamera_pro_video_isp_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Video and ISP Development

This page focuses on the product video pipeline and ISP interfaces. For a regular C/C++ application environment and deployment, follow the quick start in [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain). The `rockit`, IQ, and sensor configuration details referenced here are advanced topics from the full source package.

## Core Concept: The rockit MPI Pipeline

Rockchip video processing uses the **rockit** (MPI, Media Process Interface) model of modules, channels, and bindings. Avoid operating V4L2 directly. Module abbreviations:

| Module | Full Name | Purpose |
| --- | --- | --- |
| `VI` | Video Input | Captures frames from the sensor through the ISP |
| `VPSS` | Video Process Sub System | Multi-channel scaling, cropping, and format conversion |
| `VENC` | Video Encoder | H.264 / H.265 / JPEG / MJPEG encoding |
| `VDEC` | Video Decoder | Decoding |
| `VO` | Video Output | Sends frames to a display |
| `RGN` | Region | OSD overlays and watermarks |
| `AI` / `AO` | Audio In / Out | Capture / playback |
| `AENC` / `ADEC` | Audio Encoder / Decoder | Audio encoding / decoding |
| `AVS` | Around View System | Multi-camera surround-view stitching |
| `IVS` | Intelligent Video Surveillance | Intelligent analysis, such as motion detection |
| `TDE` | Two Dimensional Engine | 2D acceleration |
| `MB` | Media Buffer | Media buffer pool management |
| `SYS` | System | Initialization, binding, and memory management |

The corresponding headers are in `output/out/media_out/include/`. They follow the `rk_mpi_<module>.h` naming convention (for example, `rk_mpi_vi.h`, `rk_mpi_venc.h`, and `rk_mpi_sys.h`). Other headers include `rk_debug.h`, `rk_defines.h`, and `rk_errno.h`.

Typical pipeline:

```text
sensor → VI(dev0/pipe0/chn0) → VPSS(grp0) → VENC(chn0) → RTSP/File
                              ↘ RGN overlay
                              ↘ IVS intelligent analysis
```

Connect modules with `RK_MPI_SYS_Bind()`. Data then flows automatically, so you do not need to move frames yourself.

## Existing Sample Index

### `media/samples/simple_test/` — Minimal Single-File Samples (Recommended Starting Point)

Each `.c` file is a complete, independently buildable program. The filename describes the pipeline:

| File | Demonstration |
| --- | --- |
| `simple_vi_get_frame.c` | Captures VI frames; the smallest VI example |
| `simple_vi_get_frame_rkaiq.c` | Captures frames and manually initializes rkaiq |
| `simple_vi_bind_venc.c` | VI to VENC, encoding to a file |
| `simple_vi_bind_venc_jpeg.c` | JPEG snapshot capture |
| `simple_vi_bind_venc_rtsp.c` | **VI to VENC to RTSP streaming; the most common starting point** |
| `simple_vi_bind_venc_rtsp_lowdelay.c` | Low-latency RTSP |
| `simple_vi_bind_venc_rtsp_eptz.c` | Electronic PTZ |
| `simple_vi_bind_venc_svc_rtsp.c` | SVC scalable encoding |
| `simple_vi_bind_venc_osd.c` | OSD overlay |
| `simple_vi_bind_vpss_bind_venc.c` | Adds VPSS for multiple streams |
| `simple_vi_bind_vpss_bind_vo.c` | Adds display output |
| `simple_vi_bind_ivs.c` | Connects intelligent analysis |
| `simple_vi_bind_avs_bind_venc.c` | Surround-view stitching |
| `simple_vi_gdc_vo.c` | Distortion correction |
| `simple_vdec_bind_vo.c` / `simple_vdec_bind_vo_rtsp_lowdelay.c` | Decode and display / low-latency restreaming |
| `simple_ai_bind_aenc.c` / `simple_adec_bind_ao.c` / `simple_ao_send_frame.c` | Audio capture and encoding / decoding and playback / direct frame playback |
| `simple_multi_ahd_vpss_test.c` | Multi-channel AHD |
| `rv1126b/simple_irfpa_vi_bind_venc_rtsp.c` | **RV1126B only**: infrared focal-plane array and streaming |

The `simple_test/` directory also includes `rk_2_1920x1080.json` / `.xml` as a dual-camera 1080p AVS calibration example.

### `media/samples/example/` — Full Examples

| Subdirectory | File |
| --- | --- |
| `vi/` | `sample_vi.c`, `sample_multi_vi.c`, `sample_vi_eis.c` (electronic image stabilization) |
| `venc/` | `sample_vi_vpss_osd_venc.c`、`sample_multi_vi_avs_osd_venc.c` |
| `vo/` | `sample_vi_vo.c` |
| `audio/` | `sample_ai.c`、`sample_ai_aenc.c` |
| `avs/` | `sample_avs.c`、`sample_multi_vi_avs.c` |
| `demo/` | `sample_demo_vi_venc.c`、`sample_demo_dual_camera.c`、`sample_demo_dual_camera_wrap.c`、`sample_demo_multi_cam.c`、`sample_demo_multi_camera_eptz.c`、`sample_demo_eis.c`、`sample_demo_aiisp.c`、`sample_demo_dual_aiisp.c`、`sample_demo_vi_avs_venc.c` |
| `test/` | Stress tests:`sample_venc_stresstest.c`、`sample_vpss_stresstest.c`、`sample_isp_stresstest.c`、`sample_mulit_isp_stresstest.c`、`sample_multi_cam_stresstest.c`、`sample_rgn_stresstest.c`、`sample_ai_aenc_adec_ao_stresstest.c`、`sample_avs_stresstest.c`、`sample_vdec_vo_stresstest.c`、`sample_vdec_vpss_vo_stresstest.c`、`sample_demo_*_stresstest.c` |

For stability testing, run the corresponding stress test under `test/`.

### Application-Level Examples under `project/app/`

| Directory | Contents |
| --- | --- |
| `testdemo/low_delay_net_display` | Low-latency network display |
| `testdemo/yoloworld_demo` | YOLO-World detection demo (includes `3rdparty`, `resources`, and `RkLunch.sh`) |
| `aov_sample/` | Low-power always-on vision:`sample_aov_aiisp_iva_venc.c`、`sample_aoa_capture.c`、`sample_aov_audio.c`、`resume_suspend_test.sh` |
| `cvr/` | In-vehicle recording |
| `ao_record_demo/` | Audio recording demo; its Makefile is a useful template for linking rockit |
| `uvc_app_tiny/` | UVC camera mode |
| `recamera_ipc/` | The complete product implementation; see [Product Service Architecture](/recamera_pro_bsp_services/) |

## Build and Run Samples

Samples are built with media (`make -C ./samples` is called by the `all` target in `media/Makefile`):

```bash
./build.sh media
ls output/out/media_out/           # should contain the sample binaries
```

For RV1126B, the build automatically adds `-DRV1126B` and uses chip-specific source files under `simple_test/rv1103_rv1106_rv1103b_rv1126b/` and `simple_test/rv1126b/`.

Copy a sample to the device and run it:

```bash
scp output/out/media_out/bin/simple_vi_bind_venc_rtsp root@<device-ip>:/userdata/
ssh root@<device-ip>
# /userdata/simple_vi_bind_venc_rtsp --help
```

> **Resource conflict warning:** On product firmware, `rkipc` (`recamera_ipc`) is already running and owns VI/VENC/ISP resources and the RTSP service on port 5554. A sample may fail because the device nodes are already in use. Stop the application before debugging:
>
> ```bash
> # sh /oem/usr/bin/RkLunch-stop.sh
> # Or use /etc/init.d/S21appinit stop
> ```
>
> **Do not kill system services indiscriminately to access device nodes.** Restart them after debugging. In production, coordinate access through shared configuration or an explicit service-stop procedure.

## RTSP Streaming Architecture (Important)

Streaming on reCamera Pro uses **two stages**:

```text
recamera_ipc(rkipc) internal RTSP service listening on 127.0.0.1:5554
        ↓ rtsp://127.0.0.1:5554/live/0 (main)  /live/1 (sub)
     go2rtc converts the stream
        ↓ WebRTC :8555 / RTSP :554 (optional) / HLS, etc.
      External clients
```

Configuration is in `project/cfg/BoardConfig_Recamera2/overlay/overlay-buildroot-go2rtc/oem/usr/etc/go2rtc/go2rtc.yaml`. Whether port 554 is exposed externally is controlled by the `enable` settings in the `[video.0.rtsp]`, `[video.0.onvif]`, and `[video.1.rtsp]` sections of `/userdata/config/rkipc.ini`. See [Device Access and Debugging](/recamera_pro_bsp_device_debug/).

The default configuration file for `recamera_ipc` is `project/app/recamera_ipc/src/rv1126b_ipc/rkipc-3840x2160.ini`. It contains resolution, bitrate, frame rate, and RTSP/ONVIF settings.

For a custom streaming application, there are two options:

1. **Use rockit and `librtsp`:** Start your own RTSP service as in `simple_vi_bind_venc_rtsp.c` (link with `-lrtsp`) and choose a port other than 5554.
2. **Use GStreamer:** The device has GStreamer 1.22 (**the plugin list still needs verification on hardware**) and can capture with `v4l2src`. The following probe command is recorded as working:

```bash
# gst-launch-1.0 -v v4l2src device=/dev/video13 num-buffers=30 \
#   ! 'video/x-raw,format=NV12,width=1920,height=1080,framerate=30/1' \
#   ! videoconvert ! fakesink
```

Device node numbers (such as `/dev/video13`) **depend on the firmware** and may change between versions. Confirm them on the device with `v4l2-ctl --list-devices`.

## ISP and rkaiq

### Source Locations

- Engine source:`media/isp/camera_engine_rkaiq/`
- IQ File：`media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/`(this board configuration uses **isp35**)
- FEC calibration:`media/isp/camera_engine_rkaiq/IspFec/fec_calib/`
- Headers (after building): `output/out/media_out/include/rkaiq/`, with subdirectories such as `uAPI`, `uAPI2`, `algos`, `common`, `xcore`, `iq_parser`, `iq_parser_v2`, and `smartIr`
- Libraries: `-lrkaiq` (also link `-lstdc++ -lm`)

Newer code consistently uses **uAPI2** (`rk_aiq_user_api2_*.h`); only builds with the `RV1126_RV1109` macro use the older uAPI.

### IQ Files in the Board Configuration

The board configuration specifies:

```bash
export RK_CAMERA_SENSOR_IQFILES="ainr/sc450ai_default_default.json ainr/sc450ai ainr/sc850sl ainr/sc850sl_default_default.json"
export RK_CAMERA_SENSOR_CAC_BIN=""
export RK_AIISP_MODEL=NONE
```

This packages AINR (AI noise reduction) IQ files for the **SC450AI** and **SC850SL** sensors in the image. The AI-ISP model is disabled (`RK_AIISP_MODEL=NONE`).

On the device, the packaged files are located at `/oem/usr/share/iqfiles/`, and `/etc/iqfiles` is a symlink to this directory (created by `__PACKAGE_OEM()` / `__PACKAGE_ROOTFS()` in `build.sh`).

### Replace or Tune IQ Files

- During debugging, replace the file on the device directly: `/oem/usr/share/iqfiles/<sensor>/<Module>.json`(remount `/oem` if it is read-only), then restart `rkipc` to apply the change.
- For a release, put the tuned JSON file back in `media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/ainr/` and list it in `RK_CAMERA_SENSOR_IQFILES`, then rebuild media and the firmware.

For tuning tools and procedures, see `docs/zh/isp/Rockchip_Tuning_Guide_ISP35_CN.pdf`、`Rockchip_Color_Optimization_Guide_ISP39_ISP33_ISP35_CN.pdf`、`Rockchip_Development_Guide_IRFPA_CN.pdf`(infrared), and`Rockchip_Development_Guide_FEC_CN.pdf`(distortion calibration).

## Sensors and Kernel Drivers

The kernel fragment `rv1126b-recamera2.config` builds many sensor drivers as **modules**:

```text
SC450AI SC850SL SC200AI SC3336 SC401AI SC4336 SC530AI SC635HAI SC00AI series
GC2053 GC8613 GST412C IMX415 IMX464 IMX586 IMX708 OS04A10 PS5458
TECHPOINT(AHD Decoding) 
```

It also enables `CONFIG_VIDEO_ROCKCHIP_FEC=y` (distortion correction hardware) and `CONFIG_OF_OVERLAY=y` (runtime DTBO overlays); `CONFIG_VIDEO_RK_IRCUT` is **disabled**.

Camera-related device trees:

| File | Purpose |
| --- | --- |
| `rv1126b-recamera2-v1.dts` | Top-level entry point,`model = "Rockchip RV1126B RECAMERA PRO Board"` |
| `rv1126b-recamera2-cam-csi0.dtsi` / `-cam-csi1.dtsi` | CSI0 / CSI1 camera paths |
| `rv1126b-recamera2-ext-cam-csi1.dts` | **Expansion board** camera (compiled as `.dtbo`) |
| `rv1126b-recamera2-baseboard-0.dts` / `-baseboard-1.dts` | Baseboard variants |
| `rv1126b-recamera2-extboard-0.dts` / `-extboard-1.dts` | Expansion-board variants |
| `rv1126b-recamera2-disp.dtsi` | Display |

`RK_KERNEL_RC_DTO=y` enables DTBO (Runtime Device Tree Overlay). The build outputs `rv1126b-recamera2-ext-*.dtbo` are copied by `build.sh` to `/oem/usr/share/`. At boot, board identification (`S00board-id`) reads the ADC and writes `/run/board_id.env`; the system uses this information to select an overlay dynamically. This mechanism allows one firmware image to support multiple reCamera Pro hardware configurations. See [System Customization (DTS / Kernel / Buildroot / Overlay)](/recamera_pro_bsp_system_customization/).

## RGA and Format Conversion

`media/rga/` provides 2D acceleration for scaling, NV12↔RGB conversion, rotation, and blending. Link with `-lrga`.

A common use case: VENC requires NV12, while the NPU model requires RGB. Converting with RGA is much faster and uses less CPU than `videoconvert`.

**Do not pass raw NV12 bytes directly to an RGB/BGR model.** Convert the pixel format and normalize the data explicitly.

## Related Documentation

| Document | Path |
| --- | --- |
| Rockit Runtime Developer Guide | `docs/zh/media/Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf` |
| MPI C API Guide | `docs/zh/media/Rockchip_Developer_Guide_MPI_C_CN.pdf` |
| VI Driver Guide | `docs/zh/isp/Rockchip_Driver_Guide_VI_CN.pdf` |
| Camera Driver Guide | `docs/zh/isp/Rockchip_Developer_Guide_Camera_Driver_CN.pdf` |
| ISP35 Development and Tuning | `docs/zh/isp/Rockchip_Development_Guide_ISP35_CN.pdf`、`Rockchip_Tuning_Guide_ISP35_CN.pdf` |
| EIS Electronic image stabilization | `docs/zh/media/Rockchip_Developer_Guide_EIS_CN.pdf`、`Rockchip_RV1126B_Development_Guide_DIS_CN.pdf` |
| AOV Low-Power Mode | `docs/zh/media/Rockchip_Developer_Guide_Linux_AOV_CN.pdf` |
| DVR In-Vehicle Recording | `docs/zh/media/Rockchip_Developer_Guide_Linux_DVR_CN.pdf` |
| VENC Troubleshooting | `docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf` |
| AVS Calibration | `docs/zh/media/Rockchip_Developer_Guide_AVS_Calib_Product_CN.pdf` |
| Fast Boot | `docs/zh/ipc/Rockchip_Developer_Guide_Linux_RKAI_CN.pdf`(Thunder Boot) |
