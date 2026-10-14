---
description: "了解完整源码包中 reCamera 产品服务的角色、构建选项和启动关系。"
title: "产品服务架构"
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
url: https://wiki.seeedstudio.com/cn/recamera_pro_bsp_services/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 产品服务架构

本页介绍 `project/app/` 下各应用的职责、语言、构建选项、启动方式以及定制入口。**这里是 Seeed 对原始 Rockchip SDK 做出最大增量的地方，也是产品定制最常发生的地方。**

## 服务概览

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

## 应用索引与构建选项

| 应用 | 语言 | 板级构建选项 | 描述 |
| --- | --- | --- | --- |
| `recamera_ipc` | C (CMake + protobuf) | `RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` | **核心** 产品级 IPC 应用 |
| `recamera_web` | React/Node + C/C++ | `RK_APP_RECAMERA_WEB=y` | Web 配置界面（前端 + 后端） |
| `recamera_services` | Rust | `RK_APP_RECAMERA_SERVICES=y` | 包含 gmgr、skt2ws、tmir 和 rcisd 的系统服务 |
| `recamera_notify` | Python | `RK_APP_RECAMERA_NOTIFY=y` | AI 推理通知（MQTT/HTTP/UART/WebSocket） |
| `recamera_onvif` | C | `RK_APP_RECAMERA_ONVIF=y` | ONVIF 协议实现 |
| `recamera_utils` | Shell / Python / C | 无显式构建选项 | 工厂测试、序列号工具和压力测试 |
| `rkai` | C++ (CMake) | 由 `RK_APP_TYPE` 控制 | RKAI 封装（LLM/VLM）和示例 |
| `rkllm-inference` | C++ | `RK_APP_RKLLM_INFERENCE=y` | RKNN + RKLLM 多模态推理演示 |
| `rkipc` | C | Rockchip 参考实现 | `recamera_ipc` 的上游基线 |
| `wifi_app` | C + 第三方源码 | `RK_ENABLE_WIFI=y` | wpa_supplicant / hostapd / bluez / GATT |
| `cvr` | C | — | 车载录像 |
| `aov_sample` | C | — | 常开低功耗视觉（AOV）示例 |
| `ao_record_demo` | C | `RK_APP_TYPE` 包含 `RK_AO_RECORD_DEMO` | 音频录制演示 |
| `uvc_app_tiny` | C | — | UVC 摄像头模式 |
| `ipcweb` | 前端和后端 | — | 原始 Rockchip Web 参考实现 |
| `testdemo` | C/C++ | — | `low_delay_net_display`、`yoloworld_demo` |
| `fastboot_client` | C | `RK_ENABLE_FASTBOOT` | Fastboot 客户端 |
| `nginx_mk` | — | — | nginx 打包 |
| `component/` | 混合 | — | 通用组件：`ao_record_service`、`fastboot_server`、`lvgl`、`rkadk`、`rkfsmk` |

`RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` 是一个复合标识符。某些应用（例如 `ao_record_demo`）使用 `$(filter RK_XXX, $(RK_APP_TYPE))` 来决定是否参与构建。

## recamera_ipc（核心应用）

### 结构

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

### common 模块（功能映射）

`project/app/recamera_ipc/common/` 中的代码按功能组织。使用下表查找相关目录：

| 模块 | 职责 |
| --- | --- |
| `audio/` | `audio.c` 采集与编码；`rkaudio_mp3.c` MP3 提示音 |
| `isp/` | rkaiq 封装 |
| `venc/` | 视频编码 |
| `rtsp/` | 内部 RTSP 服务（127.0.0.1:5554） |
| `rtmp/` | RTMP 推流 |
| `osd/` | 时间戳/文字叠加 |
| `region_clip/`、`roi/` | 区域裁剪和 ROI |
| `rockiva/` | ROCKIVA 算法集成 |
| `rc_infer/`、`rc_model/` | 自定义推理框架和模型管理 |
| `rc_notify/` | 将推理结果发送到 `recamera_notify` |
| `event/` | 事件系统 |
| `storage/` | 录像存储和 SD 卡管理 |
| `network/` | 网络配置 |
| `socket_server/` | 为 Web 后端和 notify 提供 Socket 服务 |
| `system/`、`sysutil/` | 系统信息和工具函数 |
| `param/` | INI 参数读写 |
| `vendor_storage/` | 厂商存储区（序列号、MAC 地址等） |
| `vigil/`、`vigil_device_support/` | 与 vigil 相关的代码（依赖 protobuf 和 libblkid） |
| `player/` | 播放器 |
| `lvgl/`、`ui/` | 屏显 UI（LVGL） |
| `uvc/` | UVC 模式 |
| `ivm/` | 智能视频监控 |
| `gstreamer/` | 与 GStreamer 相关的代码 |

### 启动与停止

在设备上，生成的 init 脚本会调用以下命令：

```bash
# sh /oem/usr/bin/RkLunch.sh         # Start
# sh /oem/usr/bin/RkLunch-stop.sh    # Stop
```

`RkLunch.sh` 会 source `/etc/profile.d/RkEnv.sh`，然后启动 rkipc 及相关进程。**如果你希望在开机时启动自己的应用，请优先修改此脚本**，而不是再添加一个新的 init 脚本。

### 配置

设备上的运行时配置文件是 `/userdata/config/rkipc.ini`（位于可写分区），初始内容来自 `rkipc-3840x2160.ini`。go2rtc 启动脚本会读取其 `[video.0.rtsp]`、`[video.0.onvif]`、`[video.1.rtsp]` 小节，以决定是否开放 554 端口。

修改配置后，需要重启 rkipc，并且**同时重启 go2rtc**（其配置会在启动时生成到 `/tmp/go2rtc/go2rtc.yaml`）：

```bash
# sh /oem/usr/bin/RkLunch-stop.sh && sh /oem/usr/bin/RkLunch.sh
# /oem/usr/etc/init.d/S50go2rtc restart
```

## recamera_services（Rust 系统服务）

以下信息来自 `recamera_services/README.md`：

| 组件 | 作用 | 配置 |
| --- | --- | --- |
| **gmgr** | GPIO 管理器；提供用于 GPIO 控制和监控的 HTTP/WebSocket API | `gmgr/config.json` |
| **skt2ws** | Socket → WebSocket 桥接器，用于转发 Unix socket 数据（被 `rkipc-record-events` 使用） | `skt2ws/config.json` |
| **tmir** | TTY Mirror；将串口复用到 socket/WebSocket（镜像 `ttyS4`） | `tmir/config.json` |
| **rcisd** | reCamera Intellisense 守护进程；负责事件排队和文件传输 | 无外部配置 |

其他目录包括 `inotify_passwd/`（监视密码文件变更）、`key_factory/`（工厂按键）、`led/`（LED 控制）以及 `scripts/init.d/`。

### 构建

```bash
cd project/app/recamera_services
make                                          # Default target: armv7-unknown-linux-gnueabihf
make SERVICE_TARGET=aarch64-unknown-linux-gnu # Use 64-bit for reCamera Pro
make gmgr                                     # Build one component
make clean && make help
```

需要安装 Rust 和 Docker（`cross` 使用 Docker 进行交叉编译）。`gmgr/setup-libgpiod.sh` 用于准备 libgpiod 依赖。

> **默认目标是 32 位 armv7。** reCamera Pro 使用 aarch64，因此需要显式传入 `SERVICE_TARGET=aarch64-unknown-linux-gnu`；否则生成的二进制将无法运行。使用 `./build.sh app` 时 SDK 会设置正确的目标，但在手动调用 `make` 时很容易忽略这一点。

### 输出布局

```text
out/
├── etc/init.d/{S40gmgr,S40skt2ws,S40tmir,S49rcisd}
└── usr/
    ├── bin/{gmgr,skt2ws,tmir,rcisd}
    └── share/{gmgr_config.json,skt2ws_config.json,tmir_config.json}
```

### gmgr API

监听 HTTP 端口 `8080`，并同时提供 Unix socket `/dev/shm/gmgr.sock`：

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

本地开发默认启用 `mock-gpio` 功能。对于硬件构建，请添加 `--features hardware-gpio`：

```bash
cargo build --release --features hardware-gpio
cargo test
```

## recamera_notify（Python 通知服务）

该服务从 `rkipc` 接收 protobuf 推理数据，并通过多种通道转发 AI 相机结果。

| 功能 | 说明 |
| --- | --- |
| Socket 服务器 | 从 rkipc 接收推理数据 |
| 解析 | protobuf（`protobufs/inference_pb2.py`） |
| 格式化 | 基于模板的输出 |
| 通知通道 | **MQTT、HTTP、UART、WebSocket** |
| 可靠性 | 在 MQTT 断开连接后自动重连 |
| 配置 | JSON（`notify_config_default.json`） |
| 状态 | MQTT/HTTP/UART 运行时状态会写入一个临时 JSON 文件 |

模块：`core/`（`config_manager`、`inference_parser`、`template_formatter`、`socket_server`、`notifier_manager`），`notifiers/`（`base_notifier`、`mqtt_notifier`、`http_notifier`、`uart_notifier`、`websocket_server`、`notifier_factory`），以及 `tests/`（包括 `run_all_tests.py`）。

### 构建与部署

```bash
export RK_APP_RECAMERA_NOTIFY=y
make -C project/app/recamera_notify
```

设备上的安装路径：

| 项目 | 路径 |
| --- | --- |
| Python 包 | `/usr/lib/python3.11/site-packages/recamera_notify/` |
| 启动脚本 | `/usr/bin/notify_server.sh` |
| 系统服务 | `/etc/init.d/S49notify` |

```bash
# /etc/init.d/S49notify start
# /etc/init.d/S49notify stop
# ps aux | grep notify_server
```

> 目标设备使用 Python **3.11**。如果你在主机上使用其他版本进行开发，请检查语法和依赖兼容性。

## recamera_onvif（C）

实现标准 ONVIF 设备发现和控制。该目录包含 `src/`（`dom.c`、`authenticate.c`、`cJSON.c` 以及其他 SOAP/XML 处理代码）、`socket_client/` 和 `script/`。还包括用于抓包调试的 `RECV.log`、`SENT.log` 和 `TEST.log`。

通过 `RK_APP_RECAMERA_ONVIF=y` 启用。当启用 ONVIF 时，go2rtc 也会启用外部 RTSP（优先级规则参见 [设备访问与调试](/cn/recamera_pro_bsp_device_debug/)）。

## recamera_web（前端与后端）

```text
project/app/recamera_web/
├── recamera_web_react/     # React frontend
│   ├── package.json / src / public / backend / nginx.conf / requirements.txt
└── recamera_web_backend/   # C/C++ backend (CMake + thirdparty + ipcweb-env-rv1126b)
```

前端特性（摘自其 README）：

- 国际化（英文和中文）、明暗主题、自适应布局
- **设备信息：** 型号、序列号、CPU/内存/存储监控、保存配置、重启和恢复出厂设置
- **实时预览：** 码流预览、播放/暂停、截图、录像，以及分辨率/帧率/码率/编码格式控制
- **录像设置：** 连续、定时、移动侦测触发或 AI 事件触发录像；存储路径、分段、循环覆盖，以及文件浏览、回放、下载和删除
- **AI 推理：** 目标检测（YOLO 系列）、图像分割、关键点检测（姿态/人脸/手部）和图像分类（ResNet、EfficientNet）。每个任务都可以配置其模型、置信度阈值、批大小、推理设备（GPU/CPU/NPU）和可视化。
- **终端：** 通过命令行界面管理设备（集成 ttyd）

前端需要 Node.js 18 或更高版本。构建输出会根据 `nginx.conf` 部署（nginx 由 `nginx_mk` 提供）。视频预览使用 go2rtc 的 WebRTC，端口为 `:8555`。

## recamera_utils（工厂与测试工具）

| 目录 | 项目 |
| --- | --- |
| `hw_test/` | `bt_adv.sh`（蓝牙广播测试）、`imu_test.py`（IMU 测试；对应内核选项 `CONFIG_INV_ICM42670_I2C=y`） |
| `emc_test/` | `AP6256_MFG.bin`、`wl` 工具，以及 `BT RF Test Commands for Linux-v09.pdf` —— Wi-Fi/蓝牙射频认证测试 |
| `rf_range_test/` | `bt_client.py`、`bt_server.py`、`wifi_ap.py`、`wifi_sta.py` —— 射频距离测试 |
| `stress_test/` | `cpu_stress.py`、`npu_stress.py`、`emmc_sd_stress.py`、`emc_test.py` |
| `sn_tool/` | `SN_TOOL` —— 写入序列号（与 `upgrade_tool sn` 配合使用） |

使用这些工具作为工厂作业指导书的基础。每个目录都包含一个 `README.md`。

## 其他应用

| 应用 | 说明 |
| --- | --- |
| `rkai` | RKAI 封装库（`rkai_LLM`、`rkai_VLM`）、示例（`rkai_samples_llm.cpp`、`rkai_samples_vlm.cpp`、`rkai_samples_vlm_vision.cpp`）以及文档 `doc/Rockchip_Developer_Guide_Linux_RKAI_{CN,EN}.md`；`common/include/` 中包含 `rknn_api.h`、`rknn_custom_op.h`、`cJSON.h`、`cnpy.h` 和 `easy_timer.h` |
| `rkllm-inference` | 参见 [AI 与 NPU 开发](/cn/recamera_pro_ai_npu_development/) |
| `wifi_app` | 构建 wpa_supplicant（2.6，或用于 WPA3 的 2.10）、hostapd、libnl 3.9.0、openssl 3.2.1、bluez 5.77、`rtk_hciattach` 以及 GATT 服务端/客户端工具；配置位于 `/userdata/rk96x/conf`。`RK_ENABLE_WIFI_CHIP` 用于选择 RK960 或 RK962 前缀 |
| `aov_sample` | AOV 低功耗示例：`sample_aov_aiisp_iva_venc.c`、`sample_aoa_capture.c`、`sample_aov_audio.c`、`resume_suspend_test.sh` |
| `testdemo/yoloworld_demo` | 端到端 YOLO-World 演示 |
| `component/` | `ao_record_service`（音频录制服务）、`fastboot_server`（快速启动）、`lvgl`（GUI）、`rkadk`（应用开发套件）、`rkfsmk`（文件系统） |

## 启动顺序概览

设备上 `/etc/init.d/` 和 `/oem/usr/etc/init.d/` 中的脚本会按数字顺序运行：

| 顺序 | 脚本 | 来源 |
| --- | --- | --- |
| S00 | `board-id` | overlay |
| S10 | `log`（WebSocket 日志） | overlay |
| S15 | `watchdog` | overlay |
| S20 | `hwclock` | overlay |
| S20/S21 | `linkmount` / `appinit` | `build.sh` 自动生成（挂载分区 / 调用 `RkLunch.sh`） |
| S40 | `gmgr`、`skt2ws`、`tmir` | recamera_services |
| S49 | `rcisd` | recamera_services |
| S49 | `notify` | recamera_notify |
| S50 | `sshd`、`ttyd`、`go2rtc` | overlay |
| S70 | `vsftpd` | overlay |
| S99 | `factorykey`、`inotify_passwd`、`led` | recamera_services |

在添加服务时，请选择一个未使用的序号，并考虑依赖关系。例如，网络相关服务应在 S40 之后启动，而需要 `/userdata` 的服务应在 `S20linkmount` 之后启动。

## 源码仓库

这是一个不包含 `.git` 元数据的源码快照。各 README 文件表明这些应用对应 Seeed 内部 GitLab 仓库：

| 应用 | 仓库 |
| --- | --- |
| `recamera_onvif` | `https://iteam-gitlab.seeed.cn/rockchip/linux-ipc-app-recamera2-onvif.git` |
| `recamera_utils` | `https://iteam-gitlab.seeed.cn/rockchip/linux-ipc-app-recamera2-utils.git` |

命名模式为 `rockchip/linux-ipc-app-recamera2-<module>`。其他 `recamera_*` 应用很可能遵循相同约定（**在完成下表前，请在内部 GitLab 中进行确认**）。请在对应的仓库中进行上游修改，而不是在此 SDK 快照中，否则在下次同步时可能会丢失。

## 变更影响速查表

| 如果你想修改… | 在此编辑 | 需要重建 |
| --- | --- | --- |
| 视频分辨率/码流/RTSP/ONVIF 选项 | `recamera_ipc/src/rv1126b_ipc/rkipc-3840x2160.ini` 或设备上的 `/userdata/config/rkipc.ini` | `app` + `firmware`（或直接编辑设备上的 INI） |
| Web UI 页面 | `recamera_web/recamera_web_react/src/` | `app` + `firmware` |
| Web 后端 API | `recamera_web/recamera_web_backend/src/` | 同上 |
| GPIO 定义/API | `recamera_services/gmgr/config.json` 和 `src/` | 同上 |
| 推理通知格式/通道 | `recamera_notify/notify-server/`、`notify_config_default.json` | 同上 |
| AI 模型 | `recamera_ipc/model/rknn/` 及对应的 `.json` 文件 | `app` + `firmware` |
| 启动应用 | `recamera_ipc/src/rv1126b_ipc/RkLunch.sh` | `app` + `firmware` |
| 日志格式/输出 | `overlay-buildroot-syslog-ng/etc/syslog-ng.conf` | `rootfs` + `firmware` |
| 串口/SSH/ttyd 策略 | `overlay-buildroot-sshd`、`overlay-buildroot-ttyd` | `rootfs` + `firmware` |
| 音频通道映射 | `overlay-buildroot-asound/etc/asound.conf` | `rootfs` + `firmware` |

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>