---
description: Reachy Mini完整的Python SDK参考，涵盖运动控制、摄像头、IMU、音频录制和播放以及媒体后端选项。
title: Python SDK参考
slug: /reachymini_sdk_python-sdk
keywords:
  - python
  - sdk
  - movement
  - camera
  - imu
  - audio
  - media backend
  - goto_target
  - set_target
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/cn/reachymini_sdk_python-sdk/
---

# Python SDK参考

> **💡 提示：** SDK现在会自动检测是应该通过USB/localhost还是通过网络连接，因此`ReachyMini()`开箱即用。如果需要，您仍然可以使用`ReachyMini(connection_mode="localhost_only" | "network")`强制使用某种模式。

## 运动

### 基本控制（`goto_target`）
点之间的平滑插值。您可以控制`head`、`antennas`和`body_yaw`。

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose
import numpy as np

with ReachyMini() as mini:
    # 同时移动所有
    mini.goto_target(
        head=create_head_pose(z=10, mm=True),    # 向上移动10mm
        antennas=np.deg2rad([45, 45]),           # 天线向外
        body_yaw=np.deg2rad(30),                # 转动身体
        duration=2.0,                           # 用时2秒
        method="minjerk"                         # 平滑加速
    )
```

**插值方法：** `linear`、`minjerk`（默认）、`ease_in_out`、`cartoon`。

### 即时控制（`set_target`）
绕过插值。在高频控制时使用（例如跟随操纵杆或生成轨迹）。

## 传感器和媒体

媒体架构在[媒体架构](/reachymini_sdk_media-architecture)部分有详细描述。尽管从SDK访问音频和视频的方式在Reachy Mini版本之间相似，但底层实现有所不同。

### 摄像头 📷

摄像头帧可以通过以下方式访问：

```python
from reachy_mini import ReachyMini

with ReachyMini(media_backend="default") as mini:
    frame = mini.media.get_frame()
```
返回的帧是一个形状为`(height, width, 3)`、数据类型为`uint8`的numpy数组。

### IMU 🧭

> ⚠️ IMU仅在无线版Reachy Mini上可用

查看[此示例](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/imu_example.py)
```python
with ReachyMini() as mini:
    imu_data = mini.imu
    accel_x, accel_y, accel_z = imu_data["accelerometer"] # (m/s^2)
    gyro_x, gyro_y, gyro_z = imu_data["gyroscope"] # (rad/s)
    quat_w, quat_x, quat_y, quat_z = imu_data["quaternion"] # (w, x, y, z)
    temperature = imu_data["temperature"] # (°C)

```


### 音频 🎙️ 🔊

音频输入（麦克风）和输出（扬声器）的处理如下：

```python
from reachy_mini import ReachyMini
from scipy.signal import resample
import time

with ReachyMini(media_backend="default") as mini:
    # 初始化 - 此后，两个音频设备（输入/输出）将对其他应用程序显示为占用状态！
    mini.media.start_recording()
    mini.media.start_playing()

    # 录制
    samples = mini.media.get_audio_sample()

    # 重采样（如需要）
    samples = resample(samples, mini.media.get_output_audio_samplerate()*len(samples)/mini.media.get_input_audio_samplerate())

    # 播放
    mini.media.push_audio_sample(samples)
    time.sleep(len(samples) / mini.media.get_output_audio_samplerate())

    # 获取到达方向
    # 0弧度是左边，π/2弧度是前/后，π弧度是右边。
    doa, is_speech_detected = mini.media.get_DoA()
    print(doa, is_speech_detected)

    # 释放音频设备（输入/输出）
    mini.media.stop_recording()
    mini.media.stop_playing()
```

**音频数据格式：**
- `get_audio_sample()`返回形状为`(samples, 2)`、数据类型为`float32`的numpy数组，采样率为16kHz。
- `push_audio_sample()`期望形状为`(samples, 1 or 2)`、数据类型为`float32`的numpy数组，采样率为16kHz。

在这两种情况下，通道和采样率信息都可以通过`get_input/output_audio_samplerate()`和`get_input/output_channels()`可靠地获取。

> **⚠️ 注意：** `push_audio_sample()`是非阻塞的，意味着它会立即返回，而音频在后台播放。如果您需要等待播放完成，请根据样本长度和采样率计算持续时间。

## 媒体后端选项

根据您的Reachy Mini版本和需求选择合适的媒体后端：

- `media_backend="default"` - 自动检测最佳后端：在与守护进程同一台机器上运行时使用LOCAL，远程时使用WEBRTC（推荐给大多数用户）。
- `media_backend="local"` - 强制使用LOCAL后端（GStreamer IPC摄像头+GStreamer音频）。在与守护进程同一台机器上运行时使用。
- `media_backend="webrtc"` - 强制使用WEBRTC后端。守护进程通过WebRTC向客户端流传输H.264视频和Opus音频。目前只有Linux作为远程客户端得到完全支持。其他平台（Windows、macOS）将在[未来版本](https://github.com/pollen-robotics/reachy_mini/issues/572)中得到支持。
- `media_backend="no_media"` - 停用媒体管理器并告诉守护进程释放摄像头和音频硬件。当您需要通过OpenCV、sounddevice或任何其他外部库直接访问时使用此选项。硬件在上下文管理器退出时会自动重新获取。请参阅[媒体架构 - 禁用媒体](/reachymini_sdk_media-architecture#disabling-media--direct-hardware-access)和[自定义媒体管理器](/reachymini_examples_custom_media_manager)示例。

> **💡 提示：** 对于大多数设置，后端会根据您是本地运行还是远程运行自动选择。无需指定`media_backend`值！

> **💡 提示：** WebRTC后端需要在客户端机器上安装GStreamer。请参阅[GStreamer安装](/reachymini_sdk_gstreamer-installation)。目前只有Linux作为远程客户端得到完全支持。其他平台（Windows、macOS）将在[未来版本](https://github.com/pollen-robotics/reachy_mini/issues/572)中得到支持。

## 录制动作
您可以通过移动机器人（柔顺模式）或发送命令来录制动作，并保存以供稍后重放。

```python
from reachy_mini import ReachyMini
with ReachyMini() as mini:
    mini.start_recording()
    # ... 机器人移动 ...
    recorded_data = mini.stop_recording()
```

## 下一步
* **[浏览示例文件夹](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)**
* **[AI集成](/reachymini_sdk_integration)**：连接LLM、构建应用并发布到Hugging Face。
* **[核心概念](/reachymini_sdk_core-concept)**：架构、坐标系统和安全限制。

## ❓ 故障排除

遇到问题了吗？👉**[查看故障排除和常见问题指南](/reachymini_troubleshooting)**