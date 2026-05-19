---
description: Reachy Mini の移動制御、カメラ、IMU、音声の録音と再生、およびメディアバックエンドオプションを網羅した完全な Python SDK リファレンスです。
title: Python SDK リファレンス
slug: /reachymini_sdk_python-sdk
keywords:
  - python
  - sdk
  - movement
  - camera
  - imu
  - audio
  - media backend
  - goto_target
  - set_target
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_python-sdk/
---

# Python SDK リファレンス

> **💡 リマインダー:** SDK は、USB/localhost 経由で接続すべきかネットワーク経由で接続すべきかを自動検出するようになったため、`ReachyMini()` はそのまま動作します。必要であれば、`ReachyMini(connection_mode="localhost_only" | "network")` を使ってモードを強制することもできます。

## 動作（Movement）

### 基本制御（`goto_target`）
ポイント間をスムーズに補間します。`head`、`antennas`、`body_yaw` を制御できます。

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose
import numpy as np

with ReachyMini() as mini:
    # Move everything at once
    mini.goto_target(
        head=create_head_pose(z=10, mm=True),    # Up 10mm
        antennas=np.deg2rad([45, 45]),           # Antennas out
        body_yaw=np.deg2rad(30),                 # Turn body
        duration=2.0,                            # Take 2 seconds
        method="minjerk"                         # Smooth acceleration
    )
```

**補間方法:** `linear`、`minjerk`（デフォルト）、`ease_in_out`、`cartoon`。

### 即時制御（`set_target`）
補間をバイパスします。ジョイスティック追従や生成された軌道の追従など、高頻度制御に使用します。

## センサー & メディア

メディアアーキテクチャの詳細は、[Media Architecture](/ja/reachymini_sdk_media-architecture) セクションで説明しています。SDK からの音声および映像へのアクセス方法は Reachy Mini のバージョン間で似ていますが、内部実装は異なります。

### カメラ 📷

カメラのフレームには次のようにアクセスできます：

```python
from reachy_mini import ReachyMini

with ReachyMini(media_backend="default") as mini:
    frame = mini.media.get_frame()
```
返されるフレームは、形状が `(height, width, 3)`、データ型が `uint8` の numpy 配列です。

### IMU 🧭

> ⚠️ IMU は Reachy Mini のワイヤレスバージョンでのみ利用可能です

[このサンプル](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/imu_example.py) を参照してください
```python
with ReachyMini() as mini:
    imu_data = mini.imu
    accel_x, accel_y, accel_z = imu_data["accelerometer"] # (m/s^2)
    gyro_x, gyro_y, gyro_z = imu_data["gyroscope"] # (rad/s)
    quat_w, quat_x, quat_y, quat_z = imu_data["quaternion"] # (w, x, y, z)
    temperature = imu_data["temperature"] # (°C)

```


### オーディオ 🎙️ 🔊

オーディオ入力（マイク）と出力（スピーカー）は次のように扱います：

```python
from reachy_mini import ReachyMini
from scipy.signal import resample
import time

with ReachyMini(media_backend="default") as mini:
    # Initialization - After this point, both audio devices (input/output) will be seen as busy by other applications!
    mini.media.start_recording()
    mini.media.start_playing()

    # Record
    samples = mini.media.get_audio_sample()

    # Resample (if needed)
    samples = resample(samples, mini.media.get_output_audio_samplerate()*len(samples)/mini.media.get_input_audio_samplerate())

    # Play
    mini.media.push_audio_sample(samples)
    time.sleep(len(samples) / mini.media.get_output_audio_samplerate())

    # Get Direction of Arrival
    # 0 radians is left, π/2 radians is front/back, π radians is right.
    doa, is_speech_detected = mini.media.get_DoA()
    print(doa, is_speech_detected)

    # Release audio devices (input/output)
    mini.media.stop_recording()
    mini.media.stop_playing()
```

**オーディオデータ形式:**
- `get_audio_sample()` は、形状が `(samples, 2)`、データ型が `float32`、サンプリングレートが 16kHz の numpy 配列を返します。
- `push_audio_sample()` は、形状が `(samples, 1 or 2)`、データ型が `float32`、サンプリングレートが 16kHz の numpy 配列を受け取ります。

どちらの場合も、チャンネル数とサンプリングレートの情報は、`get_input/output_audio_samplerate()` および `get_input/output_channels()` で確実に取得できます。

> **⚠️ 注意:** `push_audio_sample()` はノンブロッキングであり、バックグラウンドで音声が再生されている間も即座に戻ります。再生完了まで待つ必要がある場合は、サンプル長とサンプリングレートに基づいて再生時間を計算してください。

## メディアバックエンドオプション

Reachy Mini のバージョンと要件に応じて、適切なメディアバックエンドを選択してください：

- `media_backend="default"` - 最適なバックエンドを自動検出します：デーモンと同じマシン上で動作している場合は LOCAL、リモートの場合は WEBRTC（ほとんどのユーザーに推奨）。
- `media_backend="local"` - LOCAL バックエンド（GStreamer IPC カメラ + GStreamer オーディオ）を強制します。デーモンと同じマシン上で動作している場合に使用します。
- `media_backend="webrtc"` - WEBRTC バックエンドを強制します。デーモンは H.264 ビデオと Opus オーディオを WebRTC 経由でクライアントにストリーミングします。
- `media_backend="no_media"` - メディアマネージャーを無効化し、デーモンにカメラとオーディオハードウェアを解放させます。OpenCV、sounddevice、その他の外部ライブラリから直接アクセスする必要がある場合に使用します。コンテキストマネージャーが終了すると、ハードウェアは自動的に再取得されます。[Media Architecture - Disabling Media](/ja/reachymini_sdk_media-architecture#メディアの無効化--ハードウェアへの直接アクセス) および [Custom Media Manager](../examples/custom_media_manager.md) のサンプルを参照してください。

> **💡 ヒント:** ほとんどの構成では、ローカルで実行しているかリモートで実行しているかに基づいてバックエンドが自動的に選択されます。`media_backend` の値を指定する必要はありません！

> **💡 ヒント:** WebRTC バックエンドでは、クライアントマシンに GStreamer がインストールされている必要があります。[GStreamer Installation](/ja/reachymini_sdk_gstreamer-installation) を参照してください。現時点では、リモートクライアントとして完全にサポートされているのは Linux のみです。他のプラットフォーム（Windows、macOS）は[今後のリリース](https://github.com/pollen-robotics/reachy_mini/issues/572)でサポートされる予定です。

## モーションの記録
ロボットを動かす（コンプライアントモード）かコマンドを送信することで動作を記録し、後で再生するために保存できます。

```python
from reachy_mini import ReachyMini
with ReachyMini() as mini:
    mini.start_recording()
    # ... robot moves ...
    recorded_data = mini.stop_recording()
```

## 次のステップ
* **[サンプルフォルダを参照](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)**
* **[AI 連携](/ja/reachymini_sdk_integration)**: LLM を接続し、アプリを構築して Hugging Face に公開します。
* **[コアコンセプト](/ja/reachymini_sdk_core-concept)**: アーキテクチャ、座標系、安全制限について説明します。

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認](/ja/reachymini_troubleshooting)**