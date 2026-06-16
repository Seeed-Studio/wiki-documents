---
description: Reachy Mini Lite高级媒体控制，包括通过OpenCV和GStreamer v4l2src的摄像头设置，以及麦克风和扬声器配置。
title: 高级媒体控制
slug: /reachymini_platforms_reachy_mini_lite_media_advanced_controls
keywords:
  - media
  - camera
  - opencv
  - gstreamer
  - v4l2src
  - microphone
  - speaker
  - controls
  - settings
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/reachymini_platforms_reachy_mini_lite_media_advanced_controls/
---

# 高级媒体控制

本页面描述了微调Reachy Mini Lite的摄像头和声音系统的高级设置。只有摄像头访问与标准版本略有不同。

## 摄像头

Raspberry Pi摄像头安装在CSI到USB适配器上，并在系统中检测为UVC摄像头。任何能够打开摄像头设备的程序都可以直接访问它。

### 摄像头访问

守护进程管理摄像头硬件，并通过本地IPC端点或WebRTC流公开帧。客户端代码通过使用LOCAL或WEBRTC后端的MediaManager读取帧。

### Linux

Linux用户可以使用以下命令检查摄像头：

```bash
v4l2-ctl --list-devices
# Reachy Mini摄像头：Reachy Mini (usb-0000:00:14.0-3.4):
#	/dev/video2
#	/dev/video3
#	/dev/media1
```

```bash
v4l2-ctl --device=/dev/video2 --list-formats-ext
# ioctl: VIDIOC_ENUM_FMT
# 	Type: Video Capture
#
# 	[0]: 'MJPG' (Motion-JPEG, compressed)
# 		Size: Discrete 3840x2592
# 			Interval: Discrete 0.033s (30.000 fps)
# 		Size: Discrete 1920x1080
# 			Interval: Discrete 0.017s (60.000 fps)
# 		Size: Discrete 3840x2160
# 			Interval: Discrete 0.033s (30.000 fps)
# 		Size: Discrete 3264x2448
# 			Interval: Discrete 0.033s (30.000 fps)
# 	[1]: 'YUYV' (YUYV 4:2:2)
# 		Size: Discrete 3840x2592
# 			Interval: Discrete 1.000s (1.000 fps)
# 		Size: Discrete 1920x1080
# 			Interval: Discrete 0.200s (5.000 fps)
# 		Size: Discrete 3840x2160
# 			Interval: Discrete 1.000s (1.000 fps)
# 		Size: Discrete 3264x2448
# 			Interval: Discrete 1.000s (1.000 fps)
```

```bash
v4l2-ctl --device=/dev/video2 --list-ctrls

# 用户控制
#
# brightness 0x00980900 (int)    : min=-64 max=64 step=1 default=0 value=0
# contrast 0x00980901 (int)    : min=0 max=95 step=1 default=1 value=1
# saturation 0x00980902 (int)    : min=0 max=100 step=1 default=48 value=48
# hue 0x00980903 (int)    : min=-2000 max=2000 step=1 default=0 value=0
# white_balance_automatic 0x0098090c (bool)   : default=1 value=1
# gamma 0x00980910 (int)    : min=80 max=160 step=1 default=100 value=100
# gain 0x00980913 (int)    : min=0 max=255 step=1 default=32 value=32
# power_line_frequency 0x00980918 (menu)   : min=0 max=2 default=1 value=1 (50 Hz)
# white_balance_temperature 0x0098091a (int)    : min=2800 max=6500 step=1 default=4600 value=4600 flags=inactive
# sharpness 0x0098091b (int)    : min=0 max=7 step=1 default=2 value=2
# backlight_compensation 0x0098091c (int)    : min=0 max=10 step=1 default=2 value=2

# 摄像头控制
#
# auto_exposure 0x009a0901 (menu)   : min=0 max=3 default=3 value=3 (Aperture Priority Mode)
# exposure_time_absolute 0x009a0902 (int)    : min=3 max=2047 step=1 default=166 value=166 flags=inactive
# exposure_dynamic_framerate 0x009a0903 (bool)   : default=0 value=1
```

使用GStreamer允许您直接可视化参数更改的效果：

```bash
gst-launch-1.0 v4l2src device=/dev/video2 extra-controls=s,exposure_auto=1,exposure_absolute=100,saturation=0 ! videoconvert ! autovideosink
```

在SDK级别，摄像头通过[v4l2src](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/camera_gstreamer.py)组件由GStreamer控制。您可以使用以下命令查看可用参数：

可以在[代码中](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/camera_gstreamer.py)中设置参数，如下所示：

```python
camsrc = Gst.ElementFactory.make("v4l2src")
camsrc.set_property("device", cam_path)
# 示例摄像头控制设置：
# extra_controls_structure = Gst.Structure.new_empty("extra-controls")
# extra_controls_structure.set_value("saturation", 64)
# extra_controls_structure.set_value("brightness", 50)
# camsrc.set_property("extra-controls", extra_controls_structure)
self.pipeline.add(camsrc)
```

Linux也可使用默认的OpenCV后端。

## 麦克风和扬声器

请参阅[Reachy Mini文档](/reachymini_platforms_reachy_mini_media_advanced_controls#microphones-and-speakers)。Lite版本的硬件完全相同。