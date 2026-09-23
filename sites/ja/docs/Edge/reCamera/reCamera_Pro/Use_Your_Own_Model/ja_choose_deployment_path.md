---
description: reCamera Pro でカスタム AI モデルをデプロイする方法を選択します — 事前学習済み RKNN モデルをアップロードする、SenseCraft で ONNX を変換する、またはローカルで RKNN-Toolkit2 を使用します。
title: モデルデプロイメントパスを選択する
keywords:
  - reCamera
  - reCamera Pro
  - モデルデプロイ
  - RKNN
  - SenseCraft
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_path
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_model_path/
---

# モデルデプロイメントパスを選択する

reCamera Pro は、物体検出、分類、その他のタスク向けにカスタム AI モデルのデプロイをサポートしています。このページでは、モデル形式とワークフローに基づいて最適なパスを選ぶのに役立ちます。

## 3 つのデプロイメントパス

| パス | 使用するタイミング | スキルレベル |
|---|---|---|
| **事前学習済み RKNN モデルをアップロード** | すでに RKNN モデルファイル（`.rknn`）を持っている場合 | 初級者 |
| **SenseCraft で ONNX を RKNN に変換** | ONNX モデルを持っており、クラウドベースで変換したい場合 | 初級者〜中級者 |
| **RKNN-Toolkit2 で ONNX を RKNN に変換** | 量子化（INT8/FP16）やキャリブレーションを完全に制御したい場合 | 中級者〜上級者 |

## パス 1: 事前学習済み RKNN モデルをアップロード

すでに `.rknn` モデルファイルがある場合は、Web UI から直接アップロードします。

→ [RKNN モデルのアップロードと設定](/ja/recamera_pro_rknn_upload/)

## パス 2: SenseCraft クラウド変換

SenseCraft プラットフォームは、ONNX モデルをクラウド上で RKNN 形式に変換し、オプションで量子化も行います。ローカルツールは不要です。

→ [SenseCraft による ONNX から RKNN への変換](/ja/recamera_pro_sensecraft/)

## パス 3: RKNN-Toolkit2 ローカル変換

量子化パラメータ、キャリブレーションデータセット、モデル最適化を完全に制御したい場合は、PC 上で RKNN-Toolkit2 を使用します。

→ [RKNN-Toolkit2 による変換](/ja/recamera_pro_rknn_model_conversion/)

## デプロイ後

モデルをデバイスに配置したら、次の手順を実行します：

1. [検出の設定](/ja/recamera_pro_ai_inference/) — クラス、しきい値、推論頻度を設定
2. [モデル性能の検証](/ja/recamera_pro_model_validate/) — FPS、精度、リソース使用率を確認
3. [モデル互換性](/ja/recamera_pro_model_compatibility/) — サポートされるオペレータと量子化形式

## 関連ページ

- [RKNN モデルのアップロードと設定](/ja/recamera_pro_rknn_upload/)
- [SenseCraft による ONNX から RKNN への変換](/ja/recamera_pro_sensecraft/)
- [RKNN-Toolkit2 による変換](/ja/recamera_pro_rknn_model_conversion/)
- [モデル性能の検証](/ja/recamera_pro_model_validate/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
