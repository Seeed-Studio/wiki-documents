---
description: Controles avanzados de medios para Reachy Mini Lite, incluyendo ajustes de cámara mediante OpenCV y GStreamer v4l2src, además de la configuración de micrófono y altavoz.
title: Controles avanzados de medios
slug: /es/reachymini_platforms_reachy_mini_lite_media_advanced_controls
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

# Controles avanzados de medios

Esta página describe ajustes avanzados para afinar la cámara y el sistema de sonido de Reachy Mini Lite. Solo el acceso a la cámara difiere ligeramente de la versión estándar.

## Cámara

La cámara Raspberry Pi está montada en un adaptador CSI-a-USB y el sistema la detecta como una cámara UVC. Se puede acceder a ella directamente desde cualquier programa capaz de abrir un dispositivo de cámara.

### Windows y macOS

Actualmente, el backend predeterminado para estas plataformas es OpenCV. Los parámetros se pueden configurar en el [código](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/camera_opencv.py):

```python
self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, self._resolution.value[0])
self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, self._resolution.value[1])

# Example camera control settings:
# self.cap.set(cv2.CAP_PROP_BRIGHTNESS, 0.5)
# self.cap.set(cv2.CAP_PROP_CONTRAST, 0.5)
# self.cap.set(cv2.CAP_PROP_SATURATION, 64)
```

Consulta la sección de Linux más abajo para ver una lista de parámetros disponibles.

### Linux

Los usuarios de Linux pueden comprobar la cámara usando:

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

Usar GStreamer te permite visualizar directamente el efecto de los cambios de parámetros:

```bash
gst-launch-1.0 v4l2src device=/dev/video2 extra-controls=s,exposure_auto=1,exposure_absolute=100,saturation=0 ! videoconvert ! autovideosink
```

A nivel del SDK, la cámara se controla con GStreamer usando el componente [v4l2src](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/camera_gstreamer.py). Puedes ver los parámetros disponibles con el siguiente comando:

Los parámetros se pueden configurar en [el código](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/camera_gstreamer.py) de la siguiente manera:

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

El backend predeterminado de OpenCV también está disponible para Linux.

## Micrófonos y altavoces

Consulta la [documentación de Reachy Mini](/es/reachymini_platforms_reachy_mini_media_advanced_controls#microphones-and-speakers). El hardware es exactamente el mismo para la versión Lite.
