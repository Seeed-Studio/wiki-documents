---
description: Reachy Mini媒体架构详细指南，解释使用GStreamer和WebRTC在不同机器人型号上的音频和视频流功能。
title: 媒体架构
slug: /reachymini_sdk_media-architecture
keywords:
  - 媒体
  - 音频
  - 视频
  - gstreamer
  - webrtc
  - 流传输
  - 摄像头
  - 麦克风
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/reachymini_sdk_media-architecture/
---

# 媒体架构

了解Reachy Mini的媒体架构对于有效利用其音频和视觉能力至关重要。

## 统一架构

守护进程始终通过`GstMediaServer`（`media_server.py`）管理摄像头和音频硬件，无论您使用的是Reachy Mini（无线版）还是Reachy Mini Lite。这种统一意味着两种型号的工作方式相同：

- **守护进程**拥有物理摄像头和音频设备。
- **本地客户端**（同一台机器）从本地IPC端点读取摄像头帧，并直接通过GStreamer打开音频设备 — `LOCAL`后端。
- **远程客户端**通过WebRTC从守护进程流传输摄像头+音频 — `WEBRTC`后端。
- SDK根据守护进程的IPC端点是否可访问自动检测使用哪个后端。

### 守护进程端

守护进程自动启动其媒体管道，除非传递了`--no-media`标志。它：
1. 打开摄像头（平台感知：v4l2、libcamera、DirectShow、AVFoundation或用于仿真的UDP）。
2. 打开音频设备（平台感知：PulseAudio、ALSA、WASAPI、CoreAudio）。
3. 将两者输入WebRTC服务器（`webrtcsink`）用于远程流传输。
4. 通过本地IPC端点（Linux/macOS上的`unixfdsink`，Windows上的`win32ipcvideosink`）暴露原始摄像头帧。

[![Reachy Mini媒体守护进程](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachymini_media_daemon.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

### 客户端

SDK的`MediaManager`自动选择后端：

- **LOCAL**：当客户端与守护进程在同一台机器上运行时使用。从IPC读取摄像头帧，并通过GStreamer直接打开音频设备。无编码/解码开销。
- **WEBRTC**：当客户端是远程时使用。通过WebRTC从守护进程流传输摄像头+音频。
- **NO_MEDIA**：跳过所有媒体初始化（无头操作）。

[![Reachy Mini媒体客户端](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachymini_media_client.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

### Web访问

由于WebRTC，音频和视频流也可以直接从Web浏览器访问。例如，[桌面应用](/reachymini_platforms_reachy_mini_lite_get_started#3--下载reachy-mini-control)使用此功能。

[![Reachy Mini媒体Web](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachymini_media_web.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

## 禁用媒体/直接硬件访问

默认情况下，守护进程拥有摄像头和音频设备。如果您需要直接访问硬件 — 例如使用OpenCV、sounddevice或自定义视觉管道 — 您可以停用内置媒体管理器：

```python
from reachy_mini import ReachyMini

with ReachyMini(media_backend="no_media") as mini:
    # 守护进程已释放摄像头和音频硬件。
    # 直接使用OpenCV、sounddevice或任何其他库。
    import cv2
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    cap.release()

    # 机器人控制仍然正常工作。
    mini.goto_target(antennas=[0.3, -0.3], duration=0.5)

# 退出时，守护进程自动重新获取硬件。
```

当传递`media_backend="no_media"`时，SDK：
1. 请求守护进程**释放**摄像头和音频设备（停止GStreamer管道）。
2. 将本地`MediaManager`设置为`NO_MEDIA`（SDK中无摄像头/音频）。
3. 在上下文管理器退出时（`__exit__`），告诉守护进程自动**重新获取**硬件。

您也可以随时手动调用`release_media()`和`acquire_media()`：

```python
mini = ReachyMini()

# ... 使用内置媒体管理器 ...
frame = mini.media.get_frame()

# 切换到直接访问
mini.release_media()
# ... 使用OpenCV、sounddevice等 ...

# 切换回SDK媒体管理器
mini.acquire_media()
frame = mini.media.get_frame()
```

> **⚠️ 注意：** 两种方法都是幂等的 — 调用两次`release_media()`是安全的。

有关使用OpenCV和sounddevice的完整示例，请参阅[自定义媒体管理器](/reachymini_examples_custom_media_manager)。

## 高级控制

请参阅专用页面来微调[Reachy Mini](/reachymini_platforms_reachy_mini_media_advanced_controls)和[Reachy Mini Lite](/reachymini_platforms_reachy_mini_lite_media_advanced_controls)的摄像头和麦克风参数。
