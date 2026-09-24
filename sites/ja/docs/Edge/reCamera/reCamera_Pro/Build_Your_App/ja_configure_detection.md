---
description: 実行するAIモデルの選択、検出クラスの設定、ConfidenceおよびIOUしきい値の構成、推論頻度の制御、そしてreCamera Pro上でのリアルタイム出力の監視を行います。
title: "検出の設定：クラス、しきい値、頻度"
keywords:
  - reCamera
  - reCamera Pro
  - AI inference
  - detection
  - confidence
  - IOU
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_ai_inference
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_ai_inference/
---

# 検出の設定：クラス、しきい値、頻度

reCamera Pro には Web UI 内にAI推論管理ページが組み込まれています。モデルの管理、モデルのアップロード、モデルの変換、推論パラメータの設定、推論結果のリアルタイム監視を、コマンドラインを使わずにすべて行うことができます。

ログイン後、左側メニューの **AI Inference** をクリックします。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_YJH8NuV7ED.png" />

## 機能概要

AI Inference ページには次のモジュールがあります：

- **Model Management** — モデルファイルの表示、設定、削除、アップロード
- **SenseCraft Model Conversion** — ONNXモデルをRKNNに変換
- **Inference Configuration** — 実行するモデルの選択、推論の有効化/無効化、推論頻度の設定
- **Real-time Inference Monitoring** — 実行中のモデル出力を表示
- **Inference Output Configuration** — HTTP、MQTT、UART経由で外部システムに結果を送信

## モデル管理

Model Management エリアには、デバイスに内蔵されているモデルおよびアップロードされたモデルが一覧表示されます。主な項目は次のとおりです：

| 項目 | 説明 |
|---|---|
| Model File | デバイス上のファイル名 |
| Model Name | 表示名 |
| Framework | 実行時フレームワーク（例：RKNN） |
| Algorithm | アルゴリズムの種類（例：YOLO、nanodet） |
| Type | タスクの種類（例：Detection） |
| Version | モデルのバージョン |
| Size | ファイルサイズ |
| Operations | 設定または削除 |

reCamera Pro は、内蔵の検出モデルとユーザーがアップロードしたカスタムモデルの両方をサポートします。物体検出では、人検出、安全ヘルメット検出、建設現場の安全監視、車両検出などのモデルを選択できます。

### モデルをアップロードする

**Upload Model** をクリックしてローカルのモデルファイルをアップロードします。アップロードウィンドウではドラッグ＆ドロップと手動選択の両方に対応しています。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

このページでは現在、RKNNモデルファイルのアップロードをサポートしています。アップロード後、モデルは Model Management に表示され、そこで名前、カテゴリ、後処理パラメータを設定できます。

### モデルを設定する

各モデルには、基本情報、検出カテゴリ、後処理パラメータを設定するための **Configure** ページがあります。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

| 設定項目 | 説明 |
|---|---|
| Model Name | 表示名 |
| Framework | 実行時フレームワーク（例：RKNN） |
| Version | モデルのバージョン |
| Type | タスクの種類（例：Object Detection） |
| Algorithm | アルゴリズム（例：YOLOv5） |
| Author | 作者情報 |
| Description | モデルの説明 |
| Detection Categories | モデルの出力カテゴリ名 |
| Post-processing Configuration | IOU、Confidence、max_obj |

検出カテゴリは手動で追加することも、TXTファイルから一括インポートすることもできます。カテゴリを設定すると、推論結果は設定したカテゴリ名で表示および出力されます。

**後処理パラメータ** は、検出結果のフィルタリング方法を制御します：

| パラメータ | 説明 |
|---|---|
| IOU | バウンディングボックスのNon-Maximum Suppressionに用いるIntersection over Unionしきい値 |
| Confidence | 物体検出のConfidenceしきい値 |
| max_obj | フレームごとに出力される物体の最大数 |

Confidence を低くすると検出数が増えます（誤検出も増加）。IOU を高くすると重複ボックスが減少します。利用シーンに合わせて調整してください。

{/* TODO(verify): document recommended confidence/IOU ranges for common scenarios, and confirm max_obj upper limit on production firmware */}

**Save** をクリックして適用します。

## 推論設定

Inference Configuration エリアでは、AI推論を実行するかどうか、およびどのモデルを有効にするかを制御します。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

| パラメータ | 説明 |
|---|---|
| Inference Enable | AI推論の有効化/無効化 |
| Running Model | 実行するモデルの選択 |
| Inference Frequency (FPS) | 1秒あたり何フレームに対して推論を実行するか |
| Inference Status | 現在推論タスクが実行中かどうか |
| Real-time Inference FPS | 実際の推論フレームレート |

モデルを選択し、スライダーで推論頻度を設定してから **Save Configuration** をクリックします。右側には現在のステータス（例：**Running**）と実際のFPSが表示されます。

{/* TODO(verify): confirm maximum supported inference frequency and behavior when FPS exceeds model throughput */}

## リアルタイム推論モニタリング

このページでは、バウンディングボックス座標、クラスID、Confidenceスコア、タイムスタンプなどの推論出力をリアルタイムログとして提供し、デバッグに利用できます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_VulyBOkn3D.png" />

| 項目 | 説明 |
|---|---|
| timestamp | 推論結果のタイムスタンプ |
| task_type | 現在のタスク種別 |
| class_id | 検出されたクラスID |
| class_name | 検出されたクラス名 |
| score | 検出のConfidence |
| bbox | バウンディングボックス座標 |
| detection_count | 現在のフレームで検出された物体数 |

モニタリングエリアでは、ログの無効化、一時停止、クリアが可能です。

## 検出結果を録画および出力に接続する

検出を設定したら、推論結果を次の用途に利用できます：

- **録画のトリガー** — [イベント録画の設定](/ja/recamera_pro_record_settings/)（AI Inference Trigger）を参照
- **MQTTで結果を送信** — [MQTTで検出結果を送信](/ja/recamera_pro_mqtt/)を参照
- **HTTP または UART で結果を送信** — [HTTP/UARTで検出結果を送信](/ja/recamera_pro_http_uart/)を参照

## 関連ページ

- [RKNNモデルのアップロードと設定](/ja/recamera_pro_rknn_upload/)
- [SenseCraft ONNX-to-RKNN 変換](/ja/recamera_pro_sensecraft/)
- [画質と低照度](/ja/recamera_pro_image_quality/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
