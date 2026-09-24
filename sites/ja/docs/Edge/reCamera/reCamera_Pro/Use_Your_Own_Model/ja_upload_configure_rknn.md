---
description: RKNN モデルファイルを reCamera Pro にアップロードし、検出カテゴリを設定し、後処理パラメータを構成します。
title: RKNN モデルのアップロードと設定
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - model upload
  - detection categories
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rknn_upload
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_rknn_upload/
---

# RKNN モデルのアップロードと設定

すでに `.rknn` モデルファイルをお持ちの場合（[モデルデプロイパスを選択](/ja/recamera_pro_model_path/) を参照）、それを reCamera Pro にアップロードし、Web UI から設定します。

## モデルをアップロードする

1. Web UI で **AI Inference** → **Model Management** に移動します。
2. **Upload Model** をクリックします。
3. `.rknn` ファイルをドラッグ＆ドロップするか、選択します。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

アップロード後、モデルは Model Management の一覧に表示されます。

{/* TODO(verify): confirm maximum model file size limit and whether multiple models can be stored simultaneously */}

## モデルフィールド

| フィールド | 説明 |
|---|---|
| Model File | デバイス上のファイル名 |
| Model Name | 表示名 |
| Framework | 実行時フレームワーク（RKNN） |
| Algorithm | アルゴリズムの種類（例：YOLO、nanodet） |
| Type | タスク種別（例：検出） |
| Version | モデルバージョン |
| Size | ファイルサイズ |
| Operations | 設定または削除 |

## モデルを設定する

各モデルには、基本情報、検出カテゴリ、および後処理パラメータを設定するための **Configure** ページがあります。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

| 設定項目 | 説明 |
|---|---|
| Model Name | 表示名 |
| Framework | 実行時フレームワーク（例：RKNN） |
| Version | モデルバージョン |
| Type | タスク種別（例：物体検出） |
| Algorithm | アルゴリズム（例：YOLOv5） |
| Author | 作者情報 |
| Description | モデルの説明 |
| Detection Categories | モデルの出力カテゴリ名 |
| Post-processing Configuration | IOU、Confidence、max_obj |

### 検出カテゴリ

カテゴリは手動で追加するか、TXT ファイルから一括インポートできます。カテゴリを設定すると、推論結果は設定したカテゴリ名で表示および出力されます。

### 後処理パラメータ

| パラメータ | 説明 |
|---|---|
| IOU | バウンディングボックスの Non-Maximum Suppression に用いる Intersection over Union のしきい値 |
| Confidence | 物体検出の信頼度しきい値 |
| max_obj | フレームごとに出力される物体の最大数 |

{/* TODO(verify): confirm recommended IOU/Confidence defaults for common detection models (YOLOv5, nanodet) on reCamera Pro */}

**Save** をクリックして適用します。

## モデルを実行する

1. **AI Inference** → **Inference Configuration** に移動します。
2. 推論を有効にし、アップロードしたモデルを **Running Model** として選択し、推論頻度を設定します。
3. **Save Configuration** をクリックします。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

## 関連ページ

- [モデルデプロイパスを選択](/ja/recamera_pro_model_path/)
- [SenseCraft ONNX-to-RKNN 変換](/ja/recamera_pro_sensecraft/)
- [検出の設定](/ja/recamera_pro_ai_inference/)
- [モデル性能の検証](/ja/recamera_pro_model_validate/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
