---
description: 示例演示通过WAV文件或使用push_audio_sample API的连续实时音频通过Reachy Mini的扬声器进行音频播放。
title: 声音播放
slug: /reachymini_examples_sound_play
keywords:
  - audio
  - sound
  - speaker
  - wav
  - playback
  - live audio
  - sine tone
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_examples_sound_play/
---

# 声音播放

此示例演示通过Reachy Mini的扬声器播放音频的两种方式：
- **`--wav`**：使用`play_sound()`API播放WAV文件。
- **`--live`**：使用低级`push_audio_sample()`API推送连续正弦波，适用于文本转语音引擎或麦克风输入等实时音频源。

**用法：**
```bash
# 播放wav文件
python sound_play.py --wav /path/to/file.wav --backend webrtc

# 推送连续正弦波（Ctrl+C停止）
python sound_play.py --live --backend webrtc --tone-hz 440
```

**选项：**
- `--wav <path>`：要播放的WAV文件的路径。
- `--live`：推送连续正弦波。
- `--tone-hz <freq>`：正弦波频率（仅限`--live`模式，默认：440）。
- `--backend`：要使用的媒体后端（`default`、`local`或`webrtc`）。

请参阅完整示例：[sound_play.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/sound_play.py)