---
description: recamera_pro_ai_inference
title: Ai 推論
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_ai_inference_legacy
draft: true
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/ja/recamera_pro_ai_inference_legacy/
---
<!-- LEGACY PAGE (reCamera Pro wiki restructure, phase 2): this page has been superseded by Build_Your_App/configure_detection.md (https://wiki.seeedstudio.com/ja/recamera_pro_ai_inference/), which now serves the original slug /recamera_pro_ai_inference. This file is kept for history as a draft (slug /recamera_pro_ai_inference_legacy) and is excluded from production builds. Do not link here. -->

## コンテンツ移行インデックス（レガシーページ）

| 元のセクション | 新しい場所 |
| --- | --- |
| Feature Overview, Model Configuration, Inference Configuration, Real-time Monitoring | [Configure Detection](https://wiki.seeedstudio.com/ja/recamera_pro_ai_inference/) (this slug) |
| Model Management, Upload Model | [Upload and Configure an RKNN Model](https://wiki.seeedstudio.com/ja/recamera_pro_rknn_upload/) |
| SenseCraft Model Conversion | [SenseCraft ONNX-to-RKNN](https://wiki.seeedstudio.com/ja/recamera_pro_sensecraft/) |
| Inference Output Configuration | [HTTP/UART Results](https://wiki.seeedstudio.com/ja/recamera_pro_http_uart/), [MQTT](https://wiki.seeedstudio.com/ja/recamera_pro_mqtt/) |
| Model format/compatibility summary | [Model Compatibility and Output Formats](https://wiki.seeedstudio.com/ja/recamera_pro_model_compatibility/) |
| Web UI field reference | [Web UI Reference](https://wiki.seeedstudio.com/ja/recamera_pro_webui_reference/) |

reCamera Pro には AI 推論管理ページが組み込まれており、ユーザーは Web UI 内でモデルの管理、モデルのアップロード、モデルの変換、推論パラメータの設定、リアルタイム推論ステータスの確認、推論結果出力の設定を直接行うことができます。このページは、物体検出、産業用認識、防犯監視、イベントトリガー、エッジ AI アプリケーション開発などのシナリオに適しています。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_YJH8NuV7ED.png" />

Web UI に入った後、左側メニューの **AI Inference** をクリックして AI 推論設定ページにアクセスします。

## 機能概要

AI Inference ページには主に次の機能モジュールが含まれます：

- **Model Management**: モデルファイルの表示、設定、削除、またはアップロードを行います。
- **SenseCraft Model Conversion**: reCamera Pro 上で実行可能な RKNN モデルに ONNX モデルを変換します。
- **Inference Configuration**: 実行するモデルの選択、推論の有効／無効の設定、推論頻度の設定を行います。
- **Real-time Inference Monitoring**: モデルの出力結果と推論ステータスをリアルタイムで表示します。
- **Inference Output Configuration**: HTTP、MQTT、UART を介して推論結果を外部システムへ出力します。

このページを通じて、ユーザーはコマンドラインを使用せずにモデルのデプロイと推論設定を完了できます。

## モデル管理

Model Management エリアは、すでにアップロードされた、または現在のデバイスに内蔵されている AI モデルを表示するために使用されます。リストには、モデルファイル、モデル名、推論フレームワーク、アルゴリズムタイプ、タスクタイプ、バージョン、ファイルサイズ、および利用可能な操作が表示されます。

一般的なフィールドの説明は次のとおりです：

| フィールド        | 説明                               |
| ------------ | ----------------------------------------- |
| Model File   | デバイス上の現在のモデルのファイル名 |
| Model Name   | モデルの表示名               |
| Framework    | モデルの実行フレームワーク（例：RKNN）   |
| Algorithm    | モデルのアルゴリズムタイプ（例：YOLO、nanodet） |
| Type         | モデルのタスクタイプ（例：Detection）      |
| Version      | モデルのバージョン情報                   |
| Size         | モデルファイルサイズ                           |
| Operations   | モデルの設定または削除をサポート    |

reCamera Pro は内蔵の検出モデルを使用できるほか、ユーザーによるカスタムモデルのアップロードにも対応しています。物体検出シナリオでは、人検出、ヘルメット検出、建設現場の安全検出、車両検出など、アプリケーションニーズに応じて異なるモデルを選択できます。

## モデルのアップロード

ユーザーは **Upload Model** ボタンをクリックして、ローカルのモデルファイルを reCamera Pro にアップロードできます。アップロードウィンドウでは、ファイルのドラッグ＆ドロップまたは手動でのファイル選択に対応しています。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

現在のページでは RKNN モデルファイルのアップロードをサポートしています。アップロード後、モデルは Model Management リストに表示され、ユーザーはモデル情報、カテゴリ、後処理パラメータの設定を続けて行うことができます。

モデルのアップロードは次のようなシナリオに適しています：

- ユーザーが学習した検出モデルの使用
- デフォルトモデルの置き換え
- 業界特化モデルのデプロイ
- プロジェクト要件に基づく新しい認識カテゴリの追加

## SenseCraft モデル変換

AI Inference ページには **View SenseCraft Models** への入り口が用意されています。ユーザーは SenseCraft モデル変換インターフェースに入り、ONNX モデルを reCamera Pro 上で実行可能な RKNN モデルに変換できます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_FQNy2aeXpQ.png" />

モデル変換インターフェースでは、ユーザーは変換タスクを作成し、ONNX モデルファイルをアップロードし、必要に応じて量子化データセットをアップロードできます。量子化データセットを提供しない場合、システムはデフォルトのデータセットを使用して変換を完了できます。

変換プロセスは次のとおりです：

1. **View SenseCraft Models** をクリックします。
2. 変換する ONNX モデルファイルを選択します。
3. 必要に応じて量子化データセットをアップロードします。
4. **Start Conversion** をクリックします。
5. 変換完了後、生成された RKNN モデルを reCamera Pro にデプロイして実行します。

この機能により、ユーザーはモデルをデバイス実行可能なモデルへ迅速に変換でき、モデルデプロイのハードルが下がります。

## モデル設定

各モデルは **Configure** ページに入り、基本的なモデル情報、検出カテゴリ、および後処理パラメータを設定できます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

モデル設定では次の項目をサポートします：

| 設定項目 | 説明                               |
| ------------------ | ----------------------------------------- |
| Model Name         | モデルの表示名を設定します         |
| Framework          | モデルの実行フレームワークを選択します（例：RKNN） |
| Version            | モデルのバージョン情報を設定します           |
| Type               | モデルのタスクタイプを設定します（例：Object Detection） |
| Algorithm          | モデルのアルゴリズムを選択します（例：YOLOv5） |
| Author             | モデルの作者情報を入力します            |
| Description        | モデルの説明を追加します                     |
| Detection Categories | モデルの出力カテゴリ名を設定します |
| Post-processing Configuration | IOU、Confidence、max_obj などのパラメータを設定します |

ユーザー定義の検出モデルの場合、設定ページで検出カテゴリを手動で追加するか、TXT ファイルを介してカテゴリリストを一括インポートできます。カテゴリを設定すると、推論結果はユーザー定義のカテゴリ名に従って表示および出力されます。

後処理パラメータは、検出結果のフィルタリングと出力を制御するために使用されます。例えば：

| パラメータ   | 説明                                     |
| ----------- | ----------------------------------------------- |
| IOU         | バウンディングボックスの Non-Maximum Suppression における Intersection over Union のしきい値 |
| Confidence  | 物体検出の信頼度しきい値           |
| max_obj     | フレームごとに出力する物体の最大数   |

設定後、**Save** をクリックしてモデル設定を適用します。

## 推論設定

Inference Configuration エリアは、AI 推論タスクの実行状態と選択モデルを制御するために使用されます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

ユーザーは次のパラメータを設定できます：

| パラメータ         | 説明                               |
| ----------------- | ----------------------------------------- |
| Inference Enable  | AI 推論機能を有効または無効にします   |
| Running Model     | 現在実行するモデルを選択します         |
| Inference Frequency (FPS) | モデルの推論頻度を設定します       |
| Inference Status  | 現在の推論タスクが実行中かどうかを表示します |
| Real-time Inference FPS | 現在の実際の推論フレームレートを表示します |

ユーザーはモデルリストからモデルを選択して現在の実行モデルとし、スライダーを使用して推論頻度を設定できます。設定後、**Save Configuration** をクリックして推論タスクを開始または更新します。

ページ右側には、**Running** などの現在の推論ステータスが表示され、現在の実際の推論フレームレートも表示されるため、モデルが正常に動作しているかどうかを簡単に確認できます。

## リアルタイム推論モニタリング

AI Inference ページには、モデル推論結果を表示するためのリアルタイム推論出力モニタリングエリアが用意されています。推論結果はログとしてリアルタイムに表示されるため、開発者はモデル出力のデバッグ、バウンディングボックス座標、クラス ID、信頼度スコア、タイムスタンプの確認を容易に行えます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_VulyBOkn3D.png" />

リアルタイム出力には通常、次の情報が含まれます：

| フィールド              | 説明                     |
| ------------------ | ------------------------------- |
| timestamp          | 推論結果のタイムスタンプ      |
| task_type          | 現在のタスクタイプ               |
| class_id           | 検出されたクラス ID               |
| class_name         | 検出されたクラス名             |
| score              | 検出の信頼度            |
| bbox               | バウンディングボックス座標        |
| detection_count    | 現在のフレームで検出された物体数 |

このページでは、監視の無効化、リアルタイム表示の一時停止、ログのクリアなどのリアルタイム出力制御機能を提供しており、デバッグ中にユーザーが出力内容を観察・管理しやすくなります。

## 推論出力設定

Web UI でリアルタイム推論ログを閲覧できるだけでなく、reCamera Pro は推論結果を外部システムへ出力することもサポートしています。ユーザーは **Inference Output Configuration** で、出力テンプレート、タスクタイプ、出力方法を選択できます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WaXFL9Pz9G.png" />

サポートされている出力方法は次のとおりです：

- HTTP
- MQTT
- UART

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
