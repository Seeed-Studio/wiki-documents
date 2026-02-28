---
description: Reachy Mini のマイクアレイから音声を録音し、継続時間を設定して WAV ファイルとして保存する例です。
title: サウンド録音
slug: /ja/reachymini_examples_sound_record
keywords:
- audio recording
- microphone
- wav file
- soundfile
- recording
- microphone array
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# サウンド録音

この例では、Reachy Mini のマイクアレイから音声を録音し、WAV ファイルとして保存する方法を示します。スクリプトは 5 秒間録音し、音声を `recorded_audio.wav` に保存します。

**動作概要：**
1. `start_recording()` を使って音声録音を開始します
2. `get_audio_sample()` を使って連続的に音声サンプルを取得します
3. 目的の録音時間に達するまでサンプルを収集します
4. 録音を停止し、すべてのサンプルを連結します
5. `soundfile` を使って音声データを WAV ファイルとして保存します

**特長：**
- 設定可能な録音時間（デフォルト：5 秒）
- サンプリングレートの自動検出
- 無限ループを防ぐためのタイムアウト保護
- さまざまなメディアバックエンドのサポート

**使用方法：**
```bash
python sound_record.py --backend [default_no_video|gstreamer_no_video|webrtc]
```

録音された音声は、カレントディレクトリ内の `recorded_audio.wav` に保存されます。

完全なサンプルはこちらを参照してください: [sound_record.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/sound_record.py)
