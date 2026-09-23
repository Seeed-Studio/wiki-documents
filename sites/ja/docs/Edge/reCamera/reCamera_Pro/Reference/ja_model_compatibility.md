---
description: reCamera Pro がサポートするモデル形式、フレームワーク、アルゴリズム、および出力フィールドの一覧です。独自モデルをデプロイする際の互換性サマリーとして利用できます。
title: モデル互換性と出力フォーマット
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - RV1126B
  - model compatibility
  - inference output
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_compatibility
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_model_compatibility/
---

# モデル互換性と出力フォーマット

このページでは、reCamera Pro の NPU（Rockchip RV1126B、3 TOPS、混在 INT8/INT16）上で動作する内容と、推論パイプラインが出力する内容をまとめています。モデルの変換や学習に時間をかける前のクイックチェックとして利用してください。

## サポートされるモデル形式

| 項目 | 値 |
| --- | --- |
| デバイス上のモデル形式 | RKNN (`.rknn`)、**RV1126B** 向けにコンパイル |
| 必要なターゲットプラットフォーム | RKNN-Toolkit2 でビルドする際は `target_platform='rv1126b'` |
| 変換ツールキット | [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2) **2.3.2**、ホスト側（x86_64 Linux または WSL 2、Python 3.6–3.12） |
| ランタイムの整合性 | 使用する Toolkit のバージョンを、reCamera Pro ファームウェアに同梱されている RKNN Runtime と揃えてください |
| 精度 | FP16（非量子化のベースライン）および INT8（キャリブレーションデータセットを用いた量子化） |
| ソース形式 | ONNX（RKNN-Toolkit2 または SenseCraft 変換経由）；Ultralytics YOLO チェックポイント（`.pt`）は RKNN へ直接エクスポート可能 |

- 変換には `rknn-toolkit-lite2` を使用しないでください。これはデバイス側のランタイムライブラリであり、コンバータではありません。
- 別の Rockchip SoC（例：RK3566/RK3588）向けにビルドされたモデルは、RV1126B 上では動作しません。

変換手順の解説： [RKNN-Toolkit2 Conversion](/ja/recamera_pro_rknn_model_conversion/)（ホスト側、スクリプト対応）および [SenseCraft ONNX-to-RKNN](/ja/recamera_pro_sensecraft/)（ブラウザベース、コード不要）。

## ビルトインおよびテスト済みモデルファミリ

ファームウェアにはビルトインの検出モデルが同梱されており、Web UI の Model Management リストでは、モデルごとに次の属性が表示されます：

| フィールド | 代表的な値 |
| --- | --- |
| Framework | RKNN |
| Algorithm | YOLO, nanodet |
| Type | Detection |

テスト済み／同梱ユースケースには、人検出、安全ヘルメット検出、建設現場の安全検出、車両検出などが含まれます。

<!-- TODO(verify): enumerate the exact list of built-in models (names, classes, sizes) shipped with the current firmware; confirm additional supported algorithms beyond YOLO/nanodet (e.g., classification, segmentation support level). -->

## 入力コントラクト要件

ONNX モデルは、変換前に既知かつ静的な入力コントラクトを持っている必要があります。RKNN は `(input − mean) / std` を 1 回だけ適用します — すでに ONNX グラフ内に正規化が含まれている場合は、恒等値（`mean=[0,0,0]`, `std=[1,1,1]`）を使用してください。

| 項目 | 要件 |
| --- | --- |
| 入力形状 | 静的、バッチサイズ 1 推奨（例：`[1, 3, 640, 640]`） |
| レイアウト | エクスポートされたグラフに合わせて NCHW または NHWC |
| チャンネル順序 | RGB と BGR は学習時と一致している必要があります — 入れ替わると精度が大きく低下します |
| リサイズポリシー | 伸縮、クロップ、レターボックスのいずれであっても、実行時と完全に一致している必要があります |
| 非サポート演算子 | ONNX モデルを再エクスポートするか、意味的に同等なサポート済み演算子を使用してください |

変換前に [Netron](https://netron.app/) や `model-inspect` を使ってコントラクトを確認してください。詳細とトラブルシューティングは [RKNN-Toolkit2 Conversion](/ja/recamera_pro_rknn_model_conversion/) を参照してください。

## カスタムクラスと後処理

アップロードしたモデルは Web UI で設定します（[Upload and Configure an RKNN Model](/ja/recamera_pro_rknn_upload/)、[Configure Detection](/ja/recamera_pro_ai_inference/)）：

- **Detection Categories** — 出力クラス名を手動で設定するか、TXT ファイルからカテゴリリストを一括インポートします。推論結果には、設定したラベルが表示されます
- **Post-processing parameters** — `IOU`（NMS しきい値）、`Confidence`（検出しきい値）、`max_obj`（フレームあたりの最大オブジェクト数）

## 推論出力フォーマット

リアルタイム推論出力（Web UI モニタリング、ログ）では、次のフィールドが使用されます：

| フィールド | 説明 |
| --- | --- |
| `timestamp` | 推論結果のタイムスタンプ |
| `task_type` | 現在のタスク種別 |
| `class_id` | 検出クラス ID |
| `class_name` | 検出クラス名 |
| `score` | 検出の信頼度 |
| `bbox` | バウンディングボックス座標 |
| `detection_count` | 現在のフレームで検出されたオブジェクト数 |

結果は、出力テンプレートとタスク種別を設定したうえで、次の 3 チャネル経由で外部システムへ送信できます：

| チャネル | ガイド |
| --- | --- |
| HTTP | [Send Detection Results over HTTP/UART](/ja/recamera_pro_http_uart/) |
| UART | [Send Detection Results over HTTP/UART](/ja/recamera_pro_http_uart/) |
| MQTT | [Send Detection Results over MQTT](/ja/recamera_pro_mqtt/) |

録画は、推論結果（カテゴリ、信頼度レンジ、トリガーエリア）によって直接トリガーすることもできます：[Configure Event Recording](/ja/recamera_pro_record_settings/)。

<!-- TODO(verify): document the exact JSON payload schema for HTTP/MQTT output (field names, nesting, configurable template variables) against the shipping firmware. -->

## ネイティブ（C/C++）推論

Web UI の外で動作するカスタムアプリケーション向けには、RKNN Runtime C API を通じてモデルをロードします。クロスコンパイル環境のセットアップと最小アプリケーションについては [SDK Setup](/ja/recamera_pro_sdk_setup/)、[Native Development](/ja/recamera_pro_media_dev/) を参照してください。C++ テンプレートを用いた AI エージェント支援ワークフローについては [Develop with AI Coding Agents](/ja/recamera_pro_development_cpp_skill/) を参照してください。

## サウンドモデル

サウンドイベント検出は別のパイプラインを使用します。モデルは Sound Lab（Web UI）で可視化・学習・切り替えが行え、選択したサウンドカテゴリによって録画をトリガーできます。[Train a Sound Model](/ja/recamera_pro_acoustic_lab_usage/) および [Sound-Triggered Capture](/ja/recamera_pro_sound_trigger/) を参照してください。

<!-- TODO(verify): document sound model format and on-device runtime (distinct from RKNN visual models). -->


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
