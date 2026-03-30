---
description: WAV ファイル、または push_audio_sample API を用いた連続ライブオーディオによって、Reachy Mini のスピーカーから音声を再生する例です。
title: サウンド再生
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
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_sound_play/
---

# サウンド再生

このサンプルでは、Reachy Mini のスピーカーから音声を再生する 2 つの方法を紹介します：
- **`--wav`**: `play_sound()` API を使用して WAV ファイルを再生します。
- **`--live`**: 低レベルの `push_audio_sample()` API を使用して連続したサイン波トーンを送信します。テキスト読み上げエンジンやマイク入力など、リアルタイムの音声ソースに便利です。

**使用方法:**
```bash
# Play a wav file
python sound_play.py --wav /path/to/file.wav --backend webrtc

# Push a continuous sine tone (Ctrl+C to stop)
python sound_play.py --live --backend webrtc --tone-hz 440
```

**オプション:**
- `--wav <path>`: 再生する WAV ファイルへのパス。
- `--live`: 連続したサイン波トーンを送信します。
- `--tone-hz <freq>`: サイン波の周波数（Hz）。`--live` モードでのみ有効、デフォルト: 440。
- `--backend`: 使用するメディアバックエンド（`default_no_video`、`gstreamer_no_video`、または `webrtc`）。

完全なサンプルはこちら: [sound_play.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/sound_play.py)
