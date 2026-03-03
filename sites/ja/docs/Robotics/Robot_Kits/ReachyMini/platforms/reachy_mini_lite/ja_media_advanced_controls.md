---
description: OpenCV と GStreamer v4l2src を使用したカメラ設定に加え、マイクとスピーカーの設定を含む Reachy Mini Lite 向けの高度なメディアコントロール。
title: 高度なメディアコントロール
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
  skip: [zh-CN]
---

# 高度なメディアコントロール

このページでは、Reachy Mini Lite のカメラとサウンドシステムを細かく調整するための高度な設定について説明します。標準版と比べて異なるのは、カメラへのアクセス方法のみです。

## カメラ

Raspberry Pi カメラは CSI-to-USB アダプタに取り付けられており、システムからは UVC カメラとして認識されます。カメラデバイスを開くことができる任意のプログラムから直接アクセスできます。

### Windows と macOS

現在、これらのプラットフォームのデフォルトバックエンドは OpenCV です。パラメータは[コード](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/camera_opencv.py)内で設定できます：

```python
self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, self._resolution.value[0])
self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, self._resolution.value[1])

# Example camera control settings:
# self.cap.set(cv2.CAP_PROP_BRIGHTNESS, 0.5)
# self.cap.set(cv2.CAP_PROP_CONTRAST, 0.5)
# self.cap.set(cv2.CAP_PROP_SATURATION, 64)
```

利用可能なパラメータの一覧については、以下の Linux セクションを参照してください。

### Linux

Linux ユーザーは、次のコマンドでカメラを確認できます：

```bash
v4l2-ctl --list-devices
# Reachy Mini Camera: Reachy Mini (usb-0000:00:14.0-3.4):
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

# User Controls
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

# Camera Controls
#
# auto_exposure 0x009a0901 (menu)   : min=0 max=3 default=3 value=3 (Aperture Priority Mode)
# exposure_time_absolute 0x009a0902 (int)    : min=3 max=2047 step=1 default=166 value=166 flags=inactive
# exposure_dynamic_framerate 0x009a0903 (bool)   : default=0 value=1
```

GStreamer を使用すると、パラメータ変更の効果を直接可視化できます：

```bash
gst-launch-1.0 v4l2src device=/dev/video2 extra-controls=s,exposure_auto=1,exposure_absolute=100,saturation=0 ! videoconvert ! autovideosink
```

SDK レベルでは、カメラは [v4l2src](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/camera_gstreamer.py) コンポーネントを使用して GStreamer によって制御されます。利用可能なパラメータは次のコマンドで確認できます：

パラメータは、次のように[コード](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/camera_gstreamer.py)内で設定できます：

```python
camsrc = Gst.ElementFactory.make("v4l2src")
camsrc.set_property("device", cam_path)
# Example camera control settings:
# extra_controls_structure = Gst.Structure.new_empty("extra-controls")
# extra_controls_structure.set_value("saturation", 64)
# extra_controls_structure.set_value("brightness", 50)
# camsrc.set_property("extra-controls", extra_controls_structure)
self.pipeline.add(camsrc)
```

デフォルトの OpenCV バックエンドも Linux で利用可能です。

## マイクとスピーカー

ハードウェアは Lite 版でもまったく同じなので、[Reachy Mini ドキュメント](/ja/reachymini_platforms_reachy_mini_media_advanced_controls#microphones-and-speakers)を参照してください。
