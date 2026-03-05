---
description: Reachy Mini のクライアント・サーバー設計、座標系、安全リミット、モーターモードなどのコアコンセプトとアーキテクチャを理解し、堅牢なアプリケーションを開発できるようにします。
title: コアコンセプトとアーキテクチャ
slug: /reachymini_sdk_core-concept
keywords:
  - architecture
  - coordinate systems
  - safety limits
  - motor modes
  - client-server
  - daemon
  - sdk
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_core-concept/
---

# コアコンセプトとアーキテクチャ

Reachy Mini の内部動作を理解することで、堅牢なアプリケーションを構築し、問題をデバッグしやすくなります。

## ソフトウェアアーキテクチャ

Reachy Mini は **Client-Server** アーキテクチャを採用しています：

1.  **Daemon（サーバー）:**
    * ロボット（またはシミュレーション）に接続されたコンピュータ上で動作します。
    * ハードウェア I/O（USB/Serial）、安全チェック、センサー読み取りを処理します。
    * REST API（`localhost:8000`）と WebSocket を公開します。

2.  **SDK（クライアント）:**
    * あなたの Python コード（`reachy_mini` パッケージ）。
    * ネットワーク経由で Daemon に接続します。
    * *利点:* Daemon をロボットに接続された Raspberry Pi 上で動かしつつ、AI コードを高性能なサーバー上で実行できます。

## 座標系

ロボットを動かす際には、主に 2 つの基準座標系を扱います：

### 1. Head フレーム
頭部の基部に配置されます。`goto_target` と `set_target` コマンドで使用されます。

![Reachy Mini Head Frame](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/head_frame.png)

### 2. World フレーム
ロボットのベースに対して固定されています。`look_at_world` コマンドで使用されます。

![Reachy Mini World Frame](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/world_frame.png)

## 安全リミット ⚠️

Reachy Mini には自己干渉や損傷を防ぐための物理的およびソフトウェア上のリミットがあります。SDK は値を自動的に最も近い有効な位置にクランプします。

| 関節 / 軸 | 制限範囲 |
| :--- | :--- |
| **Head Pitch/Roll** | [-40°, +40°] |
| **Head Yaw** | [-180°, +180°] |
| **Body Yaw** | [-160°, +160°] |
| **Yaw Delta** | Head と Body の Yaw の最大差 65° |

## モーターモード

モーターの動作モードを変更できます：
* **`mini.enable_motors()`**: 剛体モード。位置を保持します。
* **`mini.disable_motors()`**: だらんとした状態。電源オフ。
* **`mini.enable_gravity_compensation()`**: 「ソフト」モード。頭部を手で動かすことができ、離すとその位置に留まります。（Placo kinematics backend でのみ動作します。）


## 次のステップ
* **[クイックスタートガイド](/ja/reachymini_sdk_quickstart)**: Reachy Mini で最初の振る舞いを実行する
* **[Python SDK](/ja/reachymini_sdk_python-sdk)**: 動かす・見る・話す・聞く方法を学びます。
* **[AI 連携](/ja/reachymini_sdk_integration)**: LLM を接続し、アプリを構築して Hugging Face に公開します。
