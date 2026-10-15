---
description: Reachy Mini のマイクアレイからの音声録音と、録音時間を設定して WAV ファイルに保存する方法を示すサンプルです。
title: サウンド録音
slug: /reachymini_examples_sound_record
keywords:
  - 音声録音
  - マイク
  - wav ファイル
  - soundfile
  - 録音
  - マイクアレイ
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_sound_record/
---

# サウンド録音

このサンプルでは、Reachy Mini のマイクアレイから音声を録音し、WAV ファイルとして保存する方法を示します。スクリプトは 5 秒間録音し、音声を `recorded_audio.wav` に保存します。

**動作概要：**
1. `start_recording()` を使用して音声録音を開始します
2. `get_audio_sample()` を使用して音声サンプルを継続的に取得します
3. 目的の録音時間に達するまでサンプルを収集します
4. 録音を停止し、すべてのサンプルを連結します
5. `soundfile` を使用して音声データを WAV ファイルに保存します

**特長：**
- 設定可能な録音時間（デフォルト：5 秒）
- サンプルレートの自動検出
- 無限ループを防ぐためのタイムアウト保護
- さまざまなメディアバックエンドのサポート

**使用方法：**
```bash
python sound_record.py --backend [default|local|webrtc]
```

録音された音声は、カレントディレクトリ内の `recorded_audio.wav` に保存されます。

完全なサンプルはこちらを参照してください: [sound_record.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/sound_record.py)