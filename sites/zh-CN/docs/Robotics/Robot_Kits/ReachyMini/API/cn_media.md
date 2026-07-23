---
description: Reachy Mini 媒体 API 参考，涵盖媒体管理器、音频、摄像头和 WebRTC 组件。
title: 媒体 API
slug: /reachymini_api_media
keywords:
  - media
  - api
  - audio
  - camera
  - webrtc
  - gstreamer
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/cn/reachymini_api_media/
---

# 媒体

## 媒体管理器

### `reachy_mini.media.media_manager.MediaManager`

用于管理 Reachy Mini 机器人上的音频和视频流的 MediaManager 类。

### 方法

#### `start_audio`

启动音频流。

---

#### `stop_audio`

停止音频流。

---

#### `start_video`

启动视频流。

---

#### `stop_video`

停止视频流。

---

## 音频

### `reachy_mini.media.audio_base.AudioBase`

Reachy Mini 音频处理的基础类。

### 方法

#### `play_sound`

播放声音文件。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `file_path` | `str` | 要播放的声音文件的路径。 |

---

#### `set_volume`

设置音频音量。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `volume` | `int` | 音量级别（0-100）。 |

---

#### `get_volume`

获取当前音频音量。

**返回：**

`int` — 当前音量级别（0-100）。

---

### `reachy_mini.media.audio_gstreamer.GStreamerAudio`

基于 GStreamer 的 Reachy Mini 音频实现。

### 方法

#### `start_recording`

开始音频录制。

---

#### `stop_recording`

停止音频录制。

---

#### `get_audio_stats`

获取音频统计信息。

**返回：**

`Dict` — 包含音频统计信息的字典。

---

## 音频工具函数

### `reachy_mini.media.audio_utils.get_respeaker_card_number`

获取 ReSpeaker 设备的卡号。

**返回：**

`int` — ReSpeaker 的 ALSA 卡号。

---

### `reachy_mini.media.audio_utils.has_reachymini_asoundrc`

检查 Reachy Mini asoundrc 配置文件是否存在。

**返回：**

`bool` — 如果配置文件存在则为 True。

---

### `reachy_mini.media.audio_utils.check_reachymini_asoundrc`

检查 Reachy Mini asoundrc 配置是否有效。

**返回：**

`bool` — 如果配置有效则为 True。

---

### `reachy_mini.media.audio_utils.write_asoundrc_to_home`

将 asoundrc 配置写入用户主目录。

---

## 音频控制工具函数

### `reachy_mini.media.audio_control_utils.ReSpeaker`

ReSpeaker USB 麦克风阵列控制器。

### 方法

#### `set_channel`

设置 ReSpeaker 的活动通道。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `channel` | `int` | 要设置为活动的通道号。 |

---

#### `get_volume`

获取麦克风音量。

**返回：**

`int` — 当前麦克风音量（0-100）。

---

#### `set_volume`

设置麦克风音量。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `volume` | `int` | 音量级别（0-100）。 |

---

### `reachy_mini.media.audio_control_utils.find`

查找已连接的 ReSpeaker 设备。

**返回：**

`List[ReSpeaker]` — 找到的 ReSpeaker 设备列表。

---

### `reachy_mini.media.audio_control_utils.init_respeaker_usb`

初始化 ReSpeaker USB 麦克风。

**返回：**

`ReSpeaker` — 已初始化的 ReSpeaker 设备。

---

## 摄像头

### `reachy_mini.media.camera_gstreamer.GStreamerCamera`

基于 GStreamer 的 Reachy Mini 摄像头实现。

### 方法

#### `start`

启动摄像头流。

---

#### `stop`

停止摄像头流。

---

#### `get_frame`

获取当前摄像头帧。

**返回：**

`np.ndarray` — 作为 numpy 数组的当前摄像头帧。

---

#### `undistort_points`

使用摄像头校准参数去畸变图像点。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `points` | `np.ndarray` | 要去畸变的输入点。 |
| `camera_matrix` | `np.ndarray` | 摄像头内参矩阵。 |
| `dist_coeffs` | `np.ndarray` | 畸变系数。 |

**返回：**

`np.ndarray` — 去畸变后的点。

---

## 摄像头工具函数

### `reachy_mini.media.camera_utils.undistort_points`

使用摄像头校准参数去畸变点。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `points` | `np.ndarray` | 要去畸变的输入点。 |
| `camera_matrix` | `np.ndarray` | 摄像头内参矩阵。 |
| `dist_coeffs` | `np.ndarray` | 畸变系数。 |

**返回：**

`np.ndarray` — 去畸变后的点。

---

### `reachy_mini.media.camera_utils.scale_intrinsics`

为不同图像分辨率缩放摄像头内参参数。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `intrinsics` | `np.ndarray` | 原始摄像头内参矩阵。 |
| `scale_factor` | `float` | 内参的缩放因子。 |

**返回：**

`np.ndarray` — 缩放后的摄像头内参矩阵。

---

## 摄像头常量

### `reachy_mini.media.camera_constants.CameraResolution`

摄像头分辨率配置类。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `width` | `int` | 图像宽度（像素）。 |
| `height` | `int` | 图像高度（像素）。 |

---

### `reachy_mini.media.camera_constants.CameraSpecs`

摄像头规格的基础类。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `resolution` | `CameraResolution` | 摄像头分辨率。 |
| `frame_rate` | `int` | 帧率（fps）。 |
| `camera_matrix` | `np.ndarray` | 摄像头内参矩阵。 |
| `dist_coeffs` | `np.ndarray` | 畸变系数。 |

---

### `reachy_mini.media.camera_constants.ArducamSpecs`

Arducam 摄像头模块的规格。

---

### `reachy_mini.media.camera_constants.ReachyMiniLiteCamSpecs`

Reachy Mini Lite 摄像头的规格。

---

### `reachy_mini.media.camera_constants.ReachyMiniWirelessCamSpecs`

Reachy Mini Wireless 摄像头的规格。

---

### `reachy_mini.media.camera_constants.OlderRPiCamSpecs`

较旧的 Raspberry Pi 摄像头模块的规格。

---

### `reachy_mini.media.camera_constants.MujocoCameraSpecs`

MuJoCo 仿真摄像头的规格。

---

### `reachy_mini.media.camera_constants.GenericWebcamSpecs`

通用 USB 网络摄像头的规格。

---

## WebRTC

### `reachy_mini.media.webrtc_client_gstreamer.GstWebRTCClient`

使用 GStreamer 流式传输音频和视频的 WebRTC 客户端。

### 方法

#### `connect`

连接到信令服务器。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `signaling_url` | `str` | 信令服务器的 URL。 |
| `token` | `str` | 认证令牌。 |

---

#### `disconnect`

断开与信令服务器的连接。

---

#### `start_stream`

开始流式传输音频和视频。

---

#### `stop_stream`

停止流式传输音频和视频。

---

#### `attach_video`

附加视频元素以接收流。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `video_element` | `HTMLVideoElement` | 要附加的视频元素。 |

---

#### `set_audio_muted`

静音或取消静音音频。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `muted` | `bool` | 是否静音音频。 |

---

### `reachy_mini.media.media_server.GstMediaServer`

用于处理 WebRTC 流的基于 GStreamer 的媒体服务器。

### 方法

#### `start`

启动媒体服务器。

---

#### `stop`

停止媒体服务器。

---

#### `create_offer`

为传入连接创建 WebRTC offer。

**返回：**

`str` — SDP offer 字符串。

---

#### `handle_answer`

处理来自客户端的 WebRTC answer。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `answer` | `str` | 来自客户端的 SDP answer。 |

---

#### `add_track`

向连接添加媒体轨道。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `track` | `MediaStreamTrack` | 要添加的媒体轨道。 |

---

#### `remove_track`

从连接中移除媒体轨道。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `track` | `MediaStreamTrack` | 要移除的媒体轨道。 |