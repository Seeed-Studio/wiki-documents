---
description: reCamera Pro に内蔵された Web UI のフィールドレベル索引 — すべてのページ、その主要な設定項目、および詳細ガイドの所在をまとめています。
title: Web UI リファレンス
keywords:
  - reCamera
  - reCamera Pro
  - Web UI
  - live preview
  - AI inference
  - record settings
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_webui_reference
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_webui_reference/
---

# Web UI リファレンス

reCamera Pro には Web UI が内蔵されています。デバイスをネットワークに接続し、ブラウザでその IP アドレスを開いてログインします（デフォルト認証情報：`root` / `recamera` — 導入前に必ず変更してください。詳しくは [ネットワーク、時刻、アクセス](/ja/recamera_pro_device_info/) を参照してください）。

このページはフィールドレベルの索引です。各 Web UI モジュールごとに、設定可能な主要項目を列挙し、それらをいつどのように使うかを説明するタスクガイドへのリンクを示します。

## モジュールマップ

| Web UI モジュール | 機能概要 | 詳細ガイド |
| --- | --- | --- |
| Live Preview | リアルタイム映像、写真撮影、ビデオ録画、メイン／サブストリーム切り替え | [プレビュー、キャプチャ、録画](/ja/recamera_pro_live_preview/) |
| Basic / Display Settings | 解像度、エンコード、FPS、GOP、ビットレート；反転／回転、昼夜切り替え、画像調整 | [画質と低照度](/ja/recamera_pro_image_quality/) |
| OSD Settings | チャンネル名、日付／時刻、シリアル番号のオーバーレイ | [OSD とプライバシーマスク](/ja/recamera_pro_osd_masks/) |
| Image Masking | 機密エリアのプライバシーマスキング | [OSD とプライバシーマスク](/ja/recamera_pro_osd_masks/) |
| Streaming Settings | サードパーティプラットフォームや NVR 向けの RTSP ストリーミング | [RTSP で映像を配信](/ja/recamera_pro_rtsp/) |
| AI Inference | モデル管理、アップロード、設定、推論制御、モニタリング、出力 | [検出の設定](/ja/recamera_pro_ai_inference/) |
| Record Settings | トリガールール（AI／スケジュール／GPIO／シリアル／HTTPS／ループ／サウンド）、ストレージ、ファイルプレビュー | [イベント録画の設定](/ja/recamera_pro_record_settings/) |
| Device Info | システム情報、時刻、ネットワーク（WiFi）、接続設定（SSH/HTTP/ボーレート）、ファームウェア、設定のエクスポート／インポート | [ネットワーク、時刻、アクセス](/ja/recamera_pro_device_info/) |
| Terminal | ライブシステムログとブラウザ上のターミナルコンソール | [Terminal、SSH、デバッグ UART](/ja/recamera_pro_terminal/) |

## Live Preview

ページ左側にリアルタイム映像プレビュー、右側に設定パネルが表示されます。

- **Start/Stop Playback** — 現在のカメラ映像をブラウザで再生／停止します
- **Main Stream / Sub-Stream** — メインストリームは高精細プレビュー、保存、AI 解析向け、サブストリームは低帯域または多チャンネル表示向けです
- **Take Photo / Record Video** — 現在の映像から静止画またはビデオクリップを取得します
- **Volume / Connection status** — 再生音量とライブ接続状態を表示し、デバイスが切断された場合やストリーム異常時にはエラープロンプトが表示されます

## Basic Settings（ビデオエンコード）

メインストリームとサブストリームで個別に設定します。**Save Video Settings** をクリックして適用し、**Reset** で元に戻します。

| パラメータ | 説明 |
| --- | --- |
| Resolution | ビデオ出力解像度（例：1920×1080（1080P）） |
| Encoding Format | ビデオコーデック（例：H.264） |
| Frame Rate (FPS) | ビデオフレームレート（例：30 FPS） |
| GOP | キーフレーム間隔 |
| Bitrate Control Mode | 例：VBR（可変ビットレート） |
| Max Bitrate | 最大ビットレート（Kbps 単位） |
| Bitrate Quality | エンコード品質レベル |

ここで音声の取得および保存を有効／無効にできます（**Audio Settings** / **Audio Storage Settings**）。

## Display Settings

| グループ | パラメータ |
| --- | --- |
| Orientation | 反転、回転（例：0°）、ビデオ方式（例：PAL 50Hz） |
| Day/Night | 切り替えモード（例：自動）、切り替えしきい値感度、切り替えヒステリシス時間 |
| Image tuning | 明るさ、コントラスト、彩度、シャープネス、色相、露出モード、ゲインモード（プロファイルベース） |

## OSD Settings

映像上にレンダリングされるオーバーレイです。座標は相対位置で、画面上を直接ドラッグして移動することもできます。

| 設定項目 | 説明 |
| --- | --- |
| Font Size / Font Color / Color Mode | OSD テキストの見た目（カスタムカラーオプションあり） |
| Channel Name Overlay / Name / Coordinates | 例：「Camera 01」を画面上の任意位置に表示 |
| Date and Time Overlay / Date Format / Time Format / Show Weekday / Coordinates | 時刻オーバーレイの各種オプション |
| Serial Number Overlay | デバイスシリアル番号の表示／非表示 |

## Image Masking

プレビュー、録画、ストリーム内の機密エリア（オフィス、住宅、玄関番号、画面など）を隠すために、プライバシーマスクを手動または自動で描画します。マスクは保存後すぐに有効になります。

## Streaming Settings

ストリーム（メイン／サブ）ごとに設定します：

| パラメータ | 説明 |
| --- | --- |
| Stream Setting Switch | 現在のストリームの配信を有効／無効にします |
| Streaming Protocol | 例：RTSP |
| Authentication Type | 例：認証なし |
| Apply Settings | 設定を保存して適用します |

設定後、サードパーティクライアント、プラットフォーム、または NVR からストリームアドレスを指定して映像を取得できます。

## AI Inference

| サブモジュール | 主な項目 |
| --- | --- |
| Model Management | Model File、Model Name、Framework（例：RKNN）、Algorithm（例：YOLO、nanodet）、Type（例：Detection）、Version、Size、操作（Configure / Delete） |
| Upload Model | ドラッグ＆ドロップまたはファイル選択で RKNN モデルファイルをアップロード |
| SenseCraft Model Conversion | エントリーポイント **View SenseCraft Models**；ONNX を RKNN に変換（量子化データセットは任意） |
| Model Configuration | Model Name、Framework、Version、Type、Algorithm、Author、Description、Detection Categories（手動または TXT インポート）、後処理（IOU、Confidence、max_obj） |
| Inference Configuration | Inference Enable、Running Model、Inference Frequency (FPS)、Inference Status、Real-time Inference FPS |
| Real-time Monitoring | ログフィールド：timestamp、task_type、class_id、class_name、score、bbox、detection_count；無効化、一時停止、クリアの操作 |
| Inference Output | 出力テンプレート、タスクタイプ、および HTTP、MQTT、UART のいずれかの出力方法 |

各フィールドの詳細とワークフロー： [検出の設定](/ja/recamera_pro_ai_inference/)。出力連携： [HTTP/UART](/ja/recamera_pro_http_uart/)、[MQTT](/ja/recamera_pro_mqtt/)。

## Record Settings

| サブモジュール | 主な項目 |
| --- | --- |
| Recording Configuration | 録画形式、トリガールール、スケジュール |
| Trigger Methods | AI Inference Trigger（カテゴリ、信頼度範囲、トリガーエリア）、Scheduled Trigger（間隔）、GPIO Trigger（ピン、状態、信号、デバウンス）、Serial Trigger（ポート、コマンド）、HTTPS Trigger（トリガー URL）、Loop Trigger（連続）、Sound Event Trigger（Sound Lab モデルとサウンドカテゴリ） |
| Schedule Management | 録画ルールが有効となる時間帯の管理 |
| Storage Management | デバイスのストレージ容量を表示・管理 |
| File Preview | 録画されたビデオファイルを閲覧 |

手順ガイド： [イベント録画の設定](/ja/recamera_pro_record_settings/) および [録画とストレージの確認](/ja/recamera_pro_storage/)。

## Device Info

| サブモジュール | 主な項目 |
| --- | --- |
| Basic Information | ハードウェア／ソフトウェアバージョン、システムリソース使用状況 |
| Time Settings | システム時刻 |
| Network Settings | WiFi ステータス、接続中ネットワークごとの詳細なネットワーク情報 |
| Connection Settings | SSH リモート接続の有効化、HTTP 設定、シリアルポートのボーレート |
| System Settings | ファームウェアバージョンと更新、再起動、パスワード変更、工場出荷時設定へのリセット |
| Export/Import Configuration | エクスポートで設定ファイル（tar）をダウンロードし、インポートで読み込んで再起動後に適用します |

詳細： [ネットワーク、時刻、アクセス](/ja/recamera_pro_device_info/)、[ファームウェアの更新と復旧](/ja/recamera_pro_firmware_update/)、[バックアップと復元](/ja/recamera_pro_backup_restore/)。

## Terminal

- **System Log** — リアルタイムの動作ログを表示し、レベルやキーワードでフィルタ、クリア、ログファイルのダウンロードによる解析・サポートが可能です
- **Terminal console** — SSH ツールを使わずにブラウザからデバイスシェルへログインします（デフォルト `root` / `recamera`）

詳細： [Terminal、SSH、デバッグ UART](/ja/recamera_pro_terminal/)。サポート向けログ収集： [ログの収集](/ja/recamera_pro_collect_logs/)。

<!-- TODO(verify): 現行リリースに対して、デフォルトの Web UI ログイン認証情報およびファームウェア出荷時のデフォルト設定を確認すること。また、出荷ファームウェア UI における正確なモジュールラベルを確認すること。 -->


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
