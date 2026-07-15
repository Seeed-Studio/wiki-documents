---
description: 示例演示如何停用内置媒体管理器并使用OpenCV和sounddevice直接访问摄像头和麦克风，以实现自定义管道。
title: 自定义媒体管理器
slug: /reachymini_examples_custom_media_manager
keywords:
  - custom media
  - opencv
  - sounddevice
  - camera access
  - microphone access
  - direct hardware
  - media backend
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_examples_custom_media_manager/
---

# 自定义媒体管理器

此示例演示如何停用内置媒体管理器并使用OpenCV和sounddevice直接访问摄像头和麦克风。

**为什么？** 守护进程通常拥有摄像头和音频硬件。如果您需要原始访问权限（例如自定义OpenCV管道、sounddevice录制或第三方视觉库），您必须首先告诉守护进程释放硬件。请参阅[媒体架构 - 停用媒体](/reachymini_sdk_media-architecture#disabling-media--direct-hardware-access)了解更多详情。

**工作原理：**
1. 使用`media_backend="no_media"`连接 — 这会自动告诉守护进程释放摄像头和音频硬件
2. 使用OpenCV直接从摄像头捕获帧
3. 使用sounddevice从麦克风录制音频
4. 退出时，守护进程自动重新获取硬件

> **💡 提示：** 当媒体释放时，机器人控制（头部、天线、身体）仍然正常工作。只有摄像头和音频会受到影响。

**要求：**
```bash
pip install opencv-python sounddevice soundfile
```

**用法：**
```bash
python custom_media_manager.py
```

请参阅完整示例：[custom_media_manager.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/custom_media_manager.py)