---
description: Reachy Mini の座標系、安全リミット、モーターモード、ソフトウェアアーキテクチャを網羅したコアコンセプトとアーキテクチャのドキュメントです。
title: コアコンセプト & アーキテクチャ
slug: /reachymini_sdk_core-concept
keywords:
  - コアコンセプト
  - アーキテクチャ
  - 座標系
  - 安全リミット
  - モーターモード
  - ヘッド座標系
  - ワールド座標系
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_core-concept/
---

# コアコンセプト & アーキテクチャ

Reachy Mini が内部でどのように動作しているかを理解することで、堅牢なアプリケーションを構築し、問題をデバッグしやすくなります。

## ソフトウェアアーキテクチャ

Reachy Mini は **クライアント-サーバー** アーキテクチャを採用しています：

1.  **デーモン（サーバー）：**
    * ロボット（またはシミュレーション）に接続されたコンピュータ上で動作します。
    * ハードウェア I/O（USB/シリアル）、安全チェック、センサー読み取りを処理します。
    * REST API（`localhost:8000`）と WebSocket を公開します。

2.  **SDK（クライアント）：**
    * あなたの Python コード（`reachy_mini` パッケージ）。
    * ネットワーク経由でデーモンに接続します。
    * *利点：* デーモンをロボットに接続された Raspberry Pi 上で動かしつつ、AI コードを高性能なサーバー上で実行できます。

## 座標系

ロボットを動かすときは、主に 2 つの基準座標系を扱います：

### 1. ヘッド座標系
頭部の基部に配置されています。`goto_target` と `set_target` コマンドで使用されます。

[![Reachy Mini Head Frame](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/head_frame.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

### 2. ワールド座標系
ロボットのベースに対して固定されています。`look_at_world` コマンドで使用されます。

[![Reachy Mini World Frame](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/world_frame.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

## 安全リミット ⚠️

Reachy Mini には自己干渉や損傷を防ぐための物理的およびソフトウェア上のリミットがあります。SDK は値を自動的に最も近い有効な位置にクランプします。

| 関節 / 軸 | 制限範囲 |
| :--- | :--- |
| **ヘッド ピッチ/ロール** | [-40°, +40°] |
| **ヘッド ヨー** | [-180°, +180°] |
| **ボディ ヨー** | [-160°, +160°] |
| **ヨー差分** | ヘッドとボディのヨーの差分は最大 65° |

## モーターモード

モーターの動作モードを変更できます：
* **`mini.enable_motors()`**: 剛体モード。位置を保持します。
* **`mini.disable_motors()`**: だらんとした状態。電源なし。
* **`mini.enable_gravity_compensation()`**: 「ソフト」モード。頭部を手で動かすことができ、離した位置にとどまります。（Placo キネマティクスバックエンドでのみ動作します。）


## 次のステップ
* **[クイックスタートガイド](/ja/reachymini_sdk_quickstart)**: Reachy Mini で最初の振る舞いを実行する
* **[Python SDK](/ja/reachymini_sdk_python-sdk)**: 動かす・見る・話す・聞く方法を学ぶ。
* **[AI 連携](/ja/reachymini_sdk_integration)**: LLM を接続し、アプリを構築して Hugging Face に公開する。