---
description: Reachy Mini のメディアアーキテクチャについて、GStreamer と WebRTC を用いた各ロボットモデルでの音声・映像ストリーミング機能を詳しく解説します。
title: メディアアーキテクチャ
slug: /reachymini_sdk_media-architecture
keywords:
  - media
  - audio
  - video
  - gstreamer
  - webrtc
  - streaming
  - camera
  - microphone
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_media-architecture/
---

# メディアアーキテクチャ

Reachy Mini のメディアアーキテクチャを理解することは、その音声および映像機能を効果的に活用するために不可欠です。

## 統一アーキテクチャ

デーモンは、Reachy Mini（Wireless）か Reachy Mini Lite かに関わらず、常に `GstMediaServer`（`media_server.py`）を介してカメラとオーディオハードウェアを管理します。この統一により、両モデルは同じ方法で動作します：

- **デーモン** が物理カメラとオーディオデバイスを所有します。
- **ローカルクライアント**（同一マシン）は、ローカル IPC エンドポイントからカメラフレームを読み取り、GStreamer 経由でオーディオデバイスを直接開きます — `LOCAL` バックエンド。
- **リモートクライアント** は、デーモンから WebRTC 経由でカメラ + オーディオをストリーミングします — `WEBRTC` バックエンド。
- SDK は、デーモンの IPC エンドポイントに到達可能かどうかに基づいて、使用するバックエンドを自動検出します。

### デーモン側

デーモンは、`--no-media` フラグが渡されない限り、メディアパイプラインを自動的に起動します。具体的には次の処理を行います：
1. カメラを開きます（プラットフォーム対応：v4l2、libcamera、DirectShow、AVFoundation、またはシミュレーション用の UDP）。
2. オーディオデバイスを開きます（プラットフォーム対応：PulseAudio、ALSA、WASAPI、CoreAudio）。
3. 両方を WebRTC サーバー（`webrtcsink`）に入力し、リモートストリーミングを行います。
4. ローカル IPC エンドポイント（Linux/macOS では `unixfdsink`、Windows では `win32ipcvideosink`）経由で生のカメラフレームを公開します。

[![Reachy Mini Media Daemon](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachymini_media_daemon.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

### クライアント側

SDK の `MediaManager` はバックエンドを自動的に選択します：

- **LOCAL**: クライアントがデーモンと同じマシン上で動作している場合に使用されます。IPC からカメラフレームを読み取り、GStreamer 経由でオーディオデバイスを直接開きます。エンコード/デコードのオーバーヘッドはありません。
- **WEBRTC**: クライアントがリモートの場合に使用されます。カメラ + オーディオを WebRTC 経由でストリーミングします。
- **NO_MEDIA**: すべてのメディア初期化をスキップします（ヘッドレス動作）。

[![Reachy Mini Media Client](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachymini_media_client.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

### Web アクセス

WebRTC により、音声および映像ストリームには Web ブラウザから直接アクセスすることもできます。たとえば [desktop application](/ja/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control) はこの機能を利用しています。

[![Reachy Mini Media Web](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachymini_media_web.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

## メディアの無効化 / ハードウェアへの直接アクセス

デフォルトでは、デーモンがカメラとオーディオデバイスを所有します。OpenCV、sounddevice、または独自のビジョンパイプラインを使用するなど、ハードウェアへ直接アクセスする必要がある場合は、組み込みのメディアマネージャを無効化できます：

```python
from reachy_mini import ReachyMini

with ReachyMini(media_backend="no_media") as mini:
    # The daemon has released camera and audio hardware.
    # Use OpenCV, sounddevice, or any other library directly.
    import cv2
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    cap.release()

    # Robot control still works normally.
    mini.goto_target(antennas=[0.3, -0.3], duration=0.5)

# On exit, the daemon automatically re-acquires the hardware.
```

`media_backend="no_media"` が渡されると、SDK は次の処理を行います：
1. デーモンに対してカメラとオーディオデバイスを**解放**するよう要求します（GStreamer パイプラインを停止）。
2. ローカルの `MediaManager` を `NO_MEDIA` に設定します（SDK 経由のカメラ/オーディオはなし）。
3. コンテキストマネージャの終了時（`__exit__`）に、デーモンへハードウェアを自動的に**再取得**するよう指示します。

また、任意のタイミングで `release_media()` と `acquire_media()` を手動で呼び出すこともできます：

```python
mini = ReachyMini()

# ... use the built-in media manager ...
frame = mini.media.get_frame()

# Switch to direct access
mini.release_media()
# ... use OpenCV, sounddevice, etc. ...

# Switch back to the SDK media manager
mini.acquire_media()
frame = mini.media.get_frame()
```

> **⚠️ Note:** どちらのメソッドも冪等であり、`release_media()` を 2 回呼び出しても安全です。

OpenCV と sounddevice の両方を用いた完全なサンプルについては、[Custom Media Manager](/ja/reachymini_examples_custom_media_manager) を参照してください。

## 高度な制御

[Reachy Mini](/ja/reachymini_platforms_reachy_mini_media_advanced_controls) および [Reachy Mini Lite](/ja/reachymini_platforms_reachy_mini_lite_media_advanced_controls) のカメラとマイクのパラメータを詳細に調整するには、専用ページを参照してください。