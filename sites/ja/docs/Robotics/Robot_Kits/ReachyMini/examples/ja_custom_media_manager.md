---
description: OpenCV と sounddevice を使用してカスタムパイプライン用に内蔵メディアマネージャーを無効化し、カメラとマイクに直接アクセスする方法を示す例です。
title: カスタムメディアマネージャー
slug: /reachymini_examples_custom_media_manager
keywords:
  - カスタムメディア
  - opencv
  - sounddevice
  - カメラアクセス
  - マイクアクセス
  - 直接ハードウェア
  - メディアバックエンド
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_custom_media_manager/
---

# カスタムメディアマネージャー

この例では、内蔵メディアマネージャーを無効化し、OpenCV と sounddevice を使用してカメラとマイクに直接アクセスする方法を示します。

**なぜ？** デーモンは通常、カメラとオーディオハードウェアを占有しています。生のアクセス（例：カスタム OpenCV パイプライン、sounddevice による録音、サードパーティ製ビジョンライブラリなど）が必要な場合は、まずデーモンにハードウェアを解放するよう指示する必要があります。詳細は [メディアアーキテクチャ - メディアの無効化](/ja/reachymini_sdk_media-architecture#メディアの無効化--直接ハードウェアアクセス) を参照してください。

**動作概要：**
1. `media_backend="no_media"` で接続します — これによりデーモンにカメラとオーディオハードウェアを解放するよう自動的に指示されます
2. OpenCV を使用してカメラからフレームを直接キャプチャします
3. sounddevice を使用してマイクから音声を録音します
4. 終了時には、デーモンが自動的にハードウェアを再取得します

> **💡 ヒント：** メディアが解放されている間も、ロボット制御（頭部、アンテナ、ボディ）は通常どおり動作します。影響を受けるのはカメラとオーディオのみです。

**必要条件：**
```bash
pip install opencv-python sounddevice soundfile
```

**使用方法：**
```bash
python custom_media_manager.py
```

完全なサンプルはこちらを参照してください: [custom_media_manager.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/custom_media_manager.py)