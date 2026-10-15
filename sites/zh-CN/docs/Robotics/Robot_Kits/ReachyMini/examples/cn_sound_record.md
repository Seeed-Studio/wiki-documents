---
description: 示例演示如何从Reachy Mini的麦克风阵列录制音频并保存为WAV文件，可配置持续时间。
title: 声音录制
slug: /reachymini_examples_sound_record
keywords:
  - audio recording
  - microphone
  - wav file
  - soundfile
  - recording
  - microphone array
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_examples_sound_record/
---

# 声音录制

此示例演示如何从Reachy Mini的麦克风阵列录制音频并将其保存为WAV文件。脚本录制5秒并将音频保存到`recorded_audio.wav`。

**工作原理：**
1. 使用`start_recording()`开始音频录制
2. 使用`get_audio_sample()`持续检索音频样本
3. 收集样本直到达到所需持续时间
4. 停止录制并连接所有样本
5. 使用`soundfile`将音频数据保存为WAV文件

**功能：**
- 可配置录制持续时间（默认：5秒）
- 自动采样率检测
- 超时保护以防止无限循环
- 支持不同的媒体后端

**用法：**
```bash
python sound_record.py --backend [default|local|webrtc]
```

录制的音频将保存在当前目录中的`recorded_audio.wav`文件中。

请参阅完整示例：[sound_record.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/sound_record.py)