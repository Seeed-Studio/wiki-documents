---
description: Reachy Mini 向けの完全な Python SDK リファレンス。モーション制御、カメラ、IMU、音声の録音と再生、およびメディアバックエンドオプションを網羅します。
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
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_python-sdk/
---

# Python SDK リファレンス

> **💡 Reminder:** SDK は、USB/localhost 経由で接続すべきかネットワーク経由で接続すべきかを自動検出するようになったため、`ReachyMini()` をそのまま使うだけで動作します。必要であれば、`ReachyMini(connection_mode="localhost_only" | "network")` を使ってモードを強制指定することもできます。

## モーション

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

**補間方式:** `linear`、`minjerk`（デフォルト）、`ease_in_out`、`cartoon`。

### 即時制御（`set_target`）
補間をバイパスします。ジョイスティック追従や生成された軌道の追従など、高頻度制御に使用します。

## センサー & メディア

メディアアーキテクチャの詳細は、[Media Architecture](/ja/reachymini_sdk_media-architecture) セクションで説明しています。SDK からの音声および映像へのアクセス方法は Reachy Mini の各バージョンでほぼ共通ですが、内部実装は異なります。

### カメラ 📷

カメラのフレームには次のようにアクセスできます：

```python
from reachy_mini import ReachyMini

with ReachyMini(media_backend="default") as mini:
    frame = mini.media.get_frame()
```
返されるフレームは、形状が `(height, width, 3)`、データ型が `uint8` の numpy 配列です。

### IMU 🧭

> ⚠️ IMU は Reachy Mini のワイヤレス版でのみ利用可能です

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

> **⚠️ Note:** `push_audio_sample()` はノンブロッキングであり、バックグラウンドで音声を再生している間も即座に戻ります。再生完了まで待つ必要がある場合は、サンプル長とサンプリングレートに基づいて再生時間を計算してください。

## メディアバックエンドのオプション

Reachy Mini のバージョンと要件に応じて、適切なメディアバックエンドを選択してください：

**Reachy Mini Lite:**
- `media_backend="default"` - カメラに OpenCV、オーディオに Sounddevice を使用します（ほとんどのユーザーに推奨）
- `media_backend="gstreamer"` - カメラとオーディオの両方に GStreamer を使用します（[インストールが必要](/ja/reachymini_sdk_gstreamer-installation)）

**Reachy Mini Wireless:**
- **ローカル実行**（SSH でロボット上で実行）: 自動的に `"gstreamer"` を使用します
- **リモート実行**（PC から制御）: 自動的に `"webrtc"` を使用します。このバックエンドでは、GStreamer は Raspberry Pi 上でローカルに動作し、リモート PC 上で WebRTC を用いて音声と映像の両方をストリーミングします。

> **💡 Tip:** ワイヤレス構成では、ローカル実行かリモート実行かに基づいてバックエンドが自動的に選択されます。`media_backend` の値を指定する必要はありません。

> **💡 Tip:** ワイヤレス構成で WebRTC バックエンドを使用するには、特別なインストールが必要です。詳しくは [gstreamer-installation.md](/ja/reachymini_sdk_gstreamer-installation) を参照してください。現在のところ、クライアントとしてサポートされているのは Linux プラットフォームのみです。他のプラットフォーム（Windows、macOS）は[今後のリリース](https://github.com/pollen-robotics/reachy_mini/issues/572)でサポートされる予定です。

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
* **[AI Integrations](/ja/reachymini_sdk_integration)**: LLM を接続し、アプリを構築して Hugging Face に公開します。
* **[Core Concepts](/ja/reachymini_sdk_core-concept)**: アーキテクチャ、座標系、安全制限について説明します。

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認](/ja/reachymini_troubleshooting)**
