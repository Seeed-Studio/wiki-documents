---
description: 微调Reachy Mini摄像头和麦克风阵列的高级设置，包括libcamerasrc控制、GStreamer配置和XMOS XVF3800音频参数。
title: 高级媒体控制
slug: /reachymini_platforms_reachy_mini_media_advanced_controls
keywords:
  - media
  - camera
  - microphone
  - speaker
  - libcamerasrc
  - gstreamer
  - xmos
  - xvf3800
  - audio
  - dof
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/reachymini_platforms_reachy_mini_media_advanced_controls/
---

# 高级媒体控制

本页面描述了微调摄像头和声音系统的高级设置。

## 摄像头

Raspberry Pi摄像头可以使用以下命令检测：

```bash
rpicam-hello --list
# 可用摄像头
# -----------------
# 0 : imx708_wide [4608x2592 10-bit RGGB] (/base/soc/i2c0mux/i2c@0/imx708@1a)
#     Modes: 'SRGGB10_CSI2P' : 1536x864 [120.13 fps - (768, 432)/3072x1728 crop]
#                             2304x1296 [56.03 fps - (0, 0)/4608x2592 crop]
#                              4608x2592 [14.35 fps - (0, 0)/4608x2592 crop]
```

使用Reachy Mini拍照：

```bash
rpicam-still -t 1 -r -o test.jpg --width 4608 --height 2592
# 将图片复制到您的电脑
# scp pollen@reachy-mini.local:/home/pollen/test.jpg .
```

所有摄像头控件都在[官方文档](https://www.raspberrypi.com/documentation/computers/camera_software.html)中详细说明。例如，您可以更改自动对焦设置：

```bash
rpicam-still -t 1 -r -o test.jpg --width 4608 --height 2592 --autofocus-mode manual --lens-position 0
rpicam-still -t 1 -r -o test.jpg --width 4608 --height 2592 --autofocus-mode manual --lens-position 1000
```

在SDK级别，摄像头通过[libcamerasrc](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/webrtc_daemon.py)组件由GStreamer控制。您可以使用以下命令查看可用参数：

```bash
gst-inspect-1.0 libcamerasrc
```

然后，代码可以如下调整：

```python
def _configure_video(
    self, cam_path: str, pipeline: Gst.Pipeline, webrtcsink: Gst.Element
) -> None:
    self._logger.debug(f"Configuring video {cam_path}")
    camerasrc = Gst.ElementFactory.make("libcamerasrc")
    # camerasrc.set_property("af-mode", "manual")
    # camerasrc.set_property("lens-position", 1000)
```

## 麦克风和扬声器

4麦克风阵列基于[Seeed的reSpeaker XMOS XVF3800](https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/)。它还提供音频输出。默认情况下，音频处理器执行声学回声消除（AEC），因此扬声器的输出会在麦克风输入中被消除。这样机器人就不会听到自己。

它在系统中显示为`Pollen Robotics Reachy Mini Audio`。音量控制可以通过`alsamixer`调整。按F6选择声卡，F5可视化输入和输出音量。建议将所有内容保持在100%，除了PCM（输出音量），您可以根据需要进行调整。

AEC和其他音频过滤可以通过XMOS XVF3800进行调整。高级用户可以参考[官方文档](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/01_overview.html)以更好地理解声音处理。参数的摘要列在[此页面](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/AA_control_command_appendix.html)上。

要访问这些参数，请使用我们的助手Python脚本[audio_control_utils.py](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/audio_control_utils.py)：

```bash
# 读取参数
python src/reachy_mini/media/audio_control_utils.py PP_MIN_NS
# 输出：
# PP_MIN_NS: (0.15000000596046448,)

# 写入参数
python src/reachy_mini/media/audio_control_utils.py PP_MIN_NS --values 0
# 输出：
# Writing to PP_MIN_NS with values: [0.0]
# Write operation completed successfully
```

麦克风阵列输出立体声通道，因此无法同时获取所有4个麦克风的原始输出。但是，您可以一次输出两个原始麦克风：

```bash
# 麦克风0 - 左通道
python audio_control_utils.py AUDIO_MGR_OP_L --values 3 0
# 麦克风1 - 右通道
python audio_control_utils.py AUDIO_MGR_OP_R --values 3 1

# 麦克风2 - 左通道
python audio_control_utils.py AUDIO_MGR_OP_L --values 3 2
# 麦克风3 - 右通道
python audio_control_utils.py AUDIO_MGR_OP_R --values 3 3
```

线性阵列的布局如下：

![线性阵列布局](https://www.xmos.com/documentation/XM-014888-PC/html/_images/03_DoA_azimuth_linear.png)

Reachy Mini的右天线靠近麦克风0，而左天线靠近麦克风3。

### 声音到达方向

多亏了4个麦克风，系统可以估计声音的到达方向（DoA）。方向根据上面的布局给出。

```bash
python src/reachy_mini/media/audio_control_utils.py DOA_VALUE
# 输出
# DOA_VALUE: [0, 133, 0, 0, 0, 1, 0, 0, 0]
python src/reachy_mini/media/audio_control_utils.py DOA_VALUE_RADIANS
# 输出
# DOA_VALUE_RADIANS: (0.5410520434379578, 1.0)
```

此功能也可以直接从[SDK](/reachymini_sdk_python-sdk#sensors--media)获得。