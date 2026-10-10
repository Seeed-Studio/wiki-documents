---
description: "Learn about the roles, build options, and startup relationships of reCamera product services in the full source package."
title: "Product Service Architecture"
keywords:
  - "reCamera"
  - "reCamera Pro"
  - "RV1126B"
  - "SDK"
  - "BSP"
  - "Linux"
  - "Firmware"
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_services
sku: 10003420
sidebar_position: 10
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/recamera_pro_bsp_services/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Product Service Architecture

This page describes the responsibilities, languages, build options, startup methods, and customization entry points for applications under `project/app/`. **This is where Seeed has made the largest additions to the original Rockchip SDK, and where product customization most often takes place.**

## Service Overview

```text
                        ┌──────────────────────────────┐
   sensor ──► rockit ──►│  recamera_ipc (rkipc, C)     │──► Internal RTSP 127.0.0.1:5554
      ▲                 │  Main application for video, audio, recording, and AI inference │        │
      │                 └──────────────┬───────────────┘        ▼
   rkaiq(ISP)                          │ protobuf          ┌─────────┐
   rockiva(NPU)                        │ Unix socket       │ go2rtc  │──► WebRTC :8555
   librknnrt(NPU)                      ▼                   └─────────┘   RTSP :554 (optional)
                        ┌──────────────────────────────┐
                        │ recamera_notify (Python)     │──► MQTT / HTTP / UART / WebSocket
                        └──────────────────────────────┘

   ┌────────────────────┐   ┌─────────────────────┐   ┌──────────────────────┐
   │ recamera_web       │   │ recamera_services   │   │ recamera_onvif (C)   │
   │ React frontend + backend  │   │ Rust: gmgr/skt2ws/  │   │ ONVIF device discovery and control │
   │ nginx static assets     │   │ tmir/rcisd          │   └──────────────────────┘
   └────────────────────┘   └─────────────────────┘
                                    │
   ┌────────────────────┐   ┌───────▼─────────────┐
   │ overlay system services   │   │ recamera_utils      │
   │ ttyd/sshd/syslog/  │   │ Factory and test tools      │
   │ watchdog/board-id  │   └─────────────────────┘
   └────────────────────┘
```

## Application Index and Build Options

| Application | Language | Board Build Option | Description |
| --- | --- | --- | --- |
| `recamera_ipc` | C (CMake + protobuf) | `RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` | **Core** product-level IPC application |
| `recamera_web` | React/Node + C/C++ | `RK_APP_RECAMERA_WEB=y` | Web configuration interface (frontend + backend) |
| `recamera_services` | Rust | `RK_APP_RECAMERA_SERVICES=y` | System services including gmgr, skt2ws, tmir, and rcisd |
| `recamera_notify` | Python | `RK_APP_RECAMERA_NOTIFY=y` | AI inference notifications (MQTT/HTTP/UART/WebSocket) |
| `recamera_onvif` | C | `RK_APP_RECAMERA_ONVIF=y` | ONVIF protocol implementation |
| `recamera_utils` | Shell / Python / C | No explicit build option | Factory testing, serial number tools, and stress tests |
| `rkai` | C++ (CMake) | Controlled by `RK_APP_TYPE` | RKAI wrappers (LLM/VLM) and examples |
| `rkllm-inference` | C++ | `RK_APP_RKLLM_INFERENCE=y` | RKNN + RKLLM multimodal inference demo |
| `rkipc` | C | Rockchip reference implementation | Upstream baseline for `recamera_ipc` |
| `wifi_app` | C + third-party source | `RK_ENABLE_WIFI=y` | wpa_supplicant / hostapd / bluez / GATT |
| `cvr` | C | — | In-vehicle recording |
| `aov_sample` | C | — | Always-on, low-power vision (AOV) example |
| `ao_record_demo` | C | `RK_APP_TYPE` includes `RK_AO_RECORD_DEMO` | Audio recording demo |
| `uvc_app_tiny` | C | — | UVC camera mode |
| `ipcweb` | Frontend and backend | — | Original Rockchip web reference implementation |
| `testdemo` | C/C++ | — | `low_delay_net_display`、`yoloworld_demo` |
| `fastboot_client` | C | `RK_ENABLE_FASTBOOT` | Fastboot client |
| `nginx_mk` | — | — | nginx packaging |
| `component/` | Mixed | — | Common components:`ao_record_service`、`fastboot_server`、`lvgl`、`rkadk`、`rkfsmk` |

`RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` is a composite identifier. Some applications (such as `ao_record_demo`) use `$(filter RK_XXX, $(RK_APP_TYPE))` to determine whether to build.

## recamera_ipc (Core Application)

### Structure

```text
project/app/recamera_ipc/
├── CMakeLists.txt / Makefile / cmake/ / format.sh
├── LICENSE
├── docs/                       # Rockchip_Developer_Guide_Linux_RKIPC_{CN,EN}.md (V1.7.6) + resources
├── protobufs/                  # Message definitions for communication with notify and web
├── model/rknn/                 # yolox_s.rknn(+json)、nanodet-plus-m_416.rknn(+json)
├── lib/
├── system/
└── src/rv1126b_ipc/
    ├── main.c
    ├── CMakeLists.txt
    ├── RkLunch.sh              # ★ System-wide application startup entry point
    ├── RkLunch-stop.sh
    ├── rkipc-3840x2160.ini     # ★ Default configuration (resolution/bitrate/RTSP/ONVIF options)
    └── video/
```

### common Modules (Feature Map)

`project/app/recamera_ipc/common/` The code is organized by feature. Use this table to find the relevant directory:

| Module | Responsibility |
| --- | --- |
| `audio/` | `audio.c` Capture and encoding;`rkaudio_mp3.c` MP3 prompt audio |
| `isp/` | rkaiq wrapper |
| `venc/` | Video encoding |
| `rtsp/` | Internal RTSP service (127.0.0.1:5554) |
| `rtmp/` | RTMP streaming |
| `osd/` | Timestamp/text overlay |
| `region_clip/`、`roi/` | Region cropping and ROI |
| `rockiva/` | ROCKIVA algorithm integration |
| `rc_infer/`、`rc_model/` | Custom inference framework and model management |
| `rc_notify/` | Sends inference results to `recamera_notify` |
| `event/` | Event system |
| `storage/` | Recording storage and SD card management |
| `network/` | Network configuration |
| `socket_server/` | Socket service for the web backend and notify |
| `system/`、`sysutil/` | System information and utility functions |
| `param/` | INI parameter read/write |
| `vendor_storage/` | Vendor storage area (serial number, MAC address, and more) |
| `vigil/`、`vigil_device_support/` | vigil-related code (depends on protobuf and libblkid) |
| `player/` | Player |
| `lvgl/`、`ui/` | On-screen UI (LVGL) |
| `uvc/` | UVC mode |
| `ivm/` | Intelligent video monitoring |
| `gstreamer/` | GStreamer-related code |

### Start and Stop

On the device, generated init scripts call these commands:

```bash
# sh /oem/usr/bin/RkLunch.sh         # Start
# sh /oem/usr/bin/RkLunch-stop.sh    # Stop
```

`RkLunch.sh` sources `/etc/profile.d/RkEnv.sh`, then starts rkipc and related processes. **To start your own application at boot, modify this script first** instead of adding another init script.

### Configuration

The runtime configuration on the device is `/userdata/config/rkipc.ini` (on a writable partition), initially populated from `rkipc-3840x2160.ini`. The go2rtc startup script reads its `[video.0.rtsp]`、`[video.0.onvif]`、`[video.1.rtsp]` sections to determine whether to expose port 554.

After changing the configuration, restart rkipc and **restart go2rtc as well** (its configuration is generated at startup at `/tmp/go2rtc/go2rtc.yaml`):

```bash
# sh /oem/usr/bin/RkLunch-stop.sh && sh /oem/usr/bin/RkLunch.sh
# /oem/usr/etc/init.d/S50go2rtc restart
```

## recamera_services (Rust System Services)

The following information is from `recamera_services/README.md`:

| Component | Purpose | Configuration |
| --- | --- | --- |
| **gmgr** | GPIO Manager; provides an HTTP/WebSocket API for GPIO control and monitoring | `gmgr/config.json` |
| **skt2ws** | Socket → WebSocket bridge that forwards Unix socket data (used by `rkipc-record-events`) | `skt2ws/config.json` |
| **tmir** | TTY Mirror; multiplexes a serial port to a socket/WebSocket (mirrors `ttyS4`) | `tmir/config.json` |
| **rcisd** | reCamera Intellisense daemon; queues events and transfers files | No external configuration |

Other directories include `inotify_passwd/` (watches for password file changes), `key_factory/` (factory button), `led/` (LED control), and `scripts/init.d/`.

### Build

```bash
cd project/app/recamera_services
make                                          # Default target: armv7-unknown-linux-gnueabihf
make SERVICE_TARGET=aarch64-unknown-linux-gnu # Use 64-bit for reCamera Pro
make gmgr                                     # Build one component
make clean && make help
```

Rust and Docker are required (`cross` uses Docker for cross-compilation). `gmgr/setup-libgpiod.sh` prepares the libgpiod dependency.

> **The default target is 32-bit armv7.** reCamera Pro uses aarch64, so pass `SERVICE_TARGET=aarch64-unknown-linux-gnu` explicitly; otherwise, the binaries will not run. The SDK sets the correct target when you use `./build.sh app`, but it is easy to miss when invoking `make` manually.

### Output Layout

```text
out/
├── etc/init.d/{S40gmgr,S40skt2ws,S40tmir,S49rcisd}
└── usr/
    ├── bin/{gmgr,skt2ws,tmir,rcisd}
    └── share/{gmgr_config.json,skt2ws_config.json,tmir_config.json}
```

### gmgr API

Listens on HTTP port `8080` and also provides the Unix socket `/dev/shm/gmgr.sock`:

```text
GET    /api/v1/gpios                     # Lists all pins and their full descriptions
GET    /api/v1/gpios/events              # WebSocket stream of events from all pins
GET    /api/v1/gpio/{pin_id}             # Full description of one pin
GET    /api/v1/gpio/{pin_id}/info        # Configuration information
GET/POST /api/v1/gpio/{pin_id}/settings  # state / edge / debounce_ms
GET/POST /api/v1/gpio/{pin_id}/value     # Reads or writes the pin level
GET    /api/v1/gpio/{pin_id}/event       # Most recent event
GET    /api/v1/gpio/{pin_id}/events?limit=5
```

Local development enables the `mock-gpio` feature by default. For a hardware build, add `--features hardware-gpio`:

```bash
cargo build --release --features hardware-gpio
cargo test
```

## recamera_notify (Python Notification Service)

This service receives protobuf inference data from `rkipc` and forwards AI camera results through multiple channels.

| Capability | Description |
| --- | --- |
| Socket server | Receives inference data from rkipc |
| Parsing | protobuf (`protobufs/inference_pb2.py`) |
| Formatting | Template-based output |
| Notification channels | **MQTT、HTTP、UART、WebSocket** |
| Reliability | Automatically reconnects after an MQTT disconnection |
| Configuration | JSON (`notify_config_default.json`) |
| Status | MQTT/HTTP/UART runtime status is written to a temporary JSON file |

Modules: `core/` (`config_manager`, `inference_parser`, `template_formatter`, `socket_server`, `notifier_manager`), `notifiers/` (`base_notifier`, `mqtt_notifier`, `http_notifier`, `uart_notifier`, `websocket_server`, `notifier_factory`), and `tests/` (including `run_all_tests.py`).

### Build and Deploy

```bash
export RK_APP_RECAMERA_NOTIFY=y
make -C project/app/recamera_notify
```

Installed paths on the device:

| Item | Path |
| --- | --- |
| Python package | `/usr/lib/python3.11/site-packages/recamera_notify/` |
| Startup script | `/usr/bin/notify_server.sh` |
| System service | `/etc/init.d/S49notify` |

```bash
# /etc/init.d/S49notify start
# /etc/init.d/S49notify stop
# ps aux | grep notify_server
```

> The target device uses Python **3.11**. Check syntax and dependency compatibility if you develop on the host with another version.

## recamera_onvif (C)

Implements standard ONVIF device discovery and control. The directory contains `src/` (`dom.c`, `authenticate.c`, `cJSON.c`, and other SOAP/XML handling code), `socket_client/`, and `script/`. It also includes `RECV.log`, `SENT.log`, and `TEST.log` for packet-capture debugging.

Enabled by `RK_APP_RECAMERA_ONVIF=y` When ONVIF is enabled, go2rtc also enables external RTSP (see [Device Access and Debugging](/recamera_pro_bsp_device_debug/) for the precedence rules).

## recamera_web (Frontend and Backend)

```text
project/app/recamera_web/
├── recamera_web_react/     # React frontend
│   ├── package.json / src / public / backend / nginx.conf / requirements.txt
└── recamera_web_backend/   # C/C++ backend (CMake + thirdparty + ipcweb-env-rv1126b)
```

Frontend features (from its README):

- Internationalization (English and Chinese), light/dark themes, and responsive layout
- **Device information:** model, serial number, CPU/memory/storage monitoring, save configuration, reboot, and factory reset
- **Live view:** stream preview, play/pause, snapshots, recording, and resolution/frame rate/bitrate/codec controls
- **Recording settings:** continuous, scheduled, motion-triggered, or AI-event-triggered recording; storage path, segments, loop overwrite, and file browsing, playback, download, and deletion
- **AI inference:** object detection (YOLO series), image segmentation, keypoint detection (pose/face/hand), and image classification (ResNet, EfficientNet). Each task can configure its model, confidence threshold, batch size, inference device (GPU/CPU/NPU), and visualization.
- **Terminal:** manage the device through a command-line interface (integrated with ttyd)

The frontend requires Node.js 18 or later. The build output is deployed according to `nginx.conf` (nginx is provided by `nginx_mk`). Video preview uses go2rtc WebRTC on port `:8555`.

## recamera_utils (Factory and Test Utilities)

| Directory | Item |
| --- | --- |
| `hw_test/` | `bt_adv.sh` (Bluetooth advertising test), `imu_test.py` (IMU test; corresponds to kernel option `CONFIG_INV_ICM42670_I2C=y`) |
| `emc_test/` | `AP6256_MFG.bin`, the `wl` utility, and `BT RF Test Commands for Linux-v09.pdf` — Wi-Fi/Bluetooth RF certification tests |
| `rf_range_test/` | `bt_client.py`、`bt_server.py`、`wifi_ap.py`、`wifi_sta.py` —— RF range tests |
| `stress_test/` | `cpu_stress.py`、`npu_stress.py`、`emmc_sd_stress.py`、`emc_test.py` |
| `sn_tool/` | `SN_TOOL` — writes the serial number (used with `upgrade_tool sn`) |

Use these tools as the basis for factory work instructions. Each directory contains a `README.md`.

## Other Applications

| Application | Description |
| --- | --- |
| `rkai` | RKAI wrapper library (`rkai_LLM`, `rkai_VLM`), examples (`rkai_samples_llm.cpp`, `rkai_samples_vlm.cpp`, `rkai_samples_vlm_vision.cpp`), and documentation `doc/Rockchip_Developer_Guide_Linux_RKAI_{CN,EN}.md`; `common/include/` contains `rknn_api.h`, `rknn_custom_op.h`, `cJSON.h`, `cnpy.h`, and `easy_timer.h` |
| `rkllm-inference` | See [AI and NPU Development](/recamera_pro_ai_npu_development/) |
| `wifi_app` | Builds wpa_supplicant (2.6, or 2.10 for WPA3), hostapd, libnl 3.9.0, openssl 3.2.1, bluez 5.77, `rtk_hciattach`, and GATT server/client tools; configuration is in `/userdata/rk96x/conf`. `RK_ENABLE_WIFI_CHIP` selects the RK960 or RK962 prefix |
| `aov_sample` | AOV low-power examples:`sample_aov_aiisp_iva_venc.c`、`sample_aoa_capture.c`、`sample_aov_audio.c`、`resume_suspend_test.sh` |
| `testdemo/yoloworld_demo` | End-to-end YOLO-World demo |
| `component/` | `ao_record_service` (audio recording service), `fastboot_server` (fast boot), `lvgl` (GUI), `rkadk` (application development kit), `rkfsmk` (filesystem) |

## Startup Order Overview

Scripts in `/etc/init.d/` and `/oem/usr/etc/init.d/` run in numerical order on the device:

| Order | Script | Source |
| --- | --- | --- |
| S00 | `board-id` | overlay |
| S10 | `log`(WebSocket logging) | overlay |
| S15 | `watchdog` | overlay |
| S20 | `hwclock` | overlay |
| S20/S21 | `linkmount` / `appinit` | `build.sh` generated automatically (mounts partitions / calls `RkLunch.sh`) |
| S40 | `gmgr`、`skt2ws`、`tmir` | recamera_services |
| S49 | `rcisd` | recamera_services |
| S49 | `notify` | recamera_notify |
| S50 | `sshd`、`ttyd`、`go2rtc` | overlay |
| S70 | `vsftpd` | overlay |
| S99 | `factorykey`、`inotify_passwd`、`led` | recamera_services |

When adding a service, choose an unused sequence number and account for dependencies. For example, start network-dependent services after S40 and services that need `/userdata` after `S20linkmount`.

## Source Repositories

This is a source snapshot without `.git` metadata. The README files identify these applications as corresponding to Seeed internal GitLab repositories:

| Application | Repository |
| --- | --- |
| `recamera_onvif` | `https://iteam-gitlab.seeed.cn/rockchip/linux-ipc-app-recamera2-onvif.git` |
| `recamera_utils` | `https://iteam-gitlab.seeed.cn/rockchip/linux-ipc-app-recamera2-utils.git` |

The naming pattern is `rockchip/linux-ipc-app-recamera2-<module>`. Other `recamera_*` applications likely follow the same convention (**verify this in the internal GitLab before completing the table**). Make upstream changes in the corresponding repository rather than in this SDK snapshot, or they may be lost during the next sync.

## Change Impact Quick Reference

| If you want to change… | Edit here | Rebuild |
| --- | --- | --- |
| Video resolution/stream/RTSP/ONVIF options | `recamera_ipc/src/rv1126b_ipc/rkipc-3840x2160.ini` or on the device `/userdata/config/rkipc.ini` | `app` + `firmware`(or edit the device INI directly) |
| Web UI pages | `recamera_web/recamera_web_react/src/` | `app` + `firmware` |
| Web backend APIs | `recamera_web/recamera_web_backend/src/` | Same as above |
| GPIO definitions/API | `recamera_services/gmgr/config.json` and `src/` | Same as above |
| Inference notification format/channels | `recamera_notify/notify-server/`、`notify_config_default.json` | Same as above |
| AI models | `recamera_ipc/model/rknn/` and the corresponding `.json` files | `app` + `firmware` |
| Startup applications | `recamera_ipc/src/rv1126b_ipc/RkLunch.sh` | `app` + `firmware` |
| Log format/output | `overlay-buildroot-syslog-ng/etc/syslog-ng.conf` | `rootfs` + `firmware` |
| Serial/SSH/ttyd policy | `overlay-buildroot-sshd`、`overlay-buildroot-ttyd` | `rootfs` + `firmware` |
| Audio channel mapping | `overlay-buildroot-asound/etc/asound.conf` | `rootfs` + `firmware` |
