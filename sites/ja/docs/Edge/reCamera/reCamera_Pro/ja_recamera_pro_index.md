---
description: ここから始めましょう — reCamera Pro でやりたいことに合ったガイドを見つけてください。
title: reCamera Pro
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro
sku: 10003420
last_update:
  date: 09/21/2026
  author: Seeed Studio
url: https://wiki.seeedstudio.com/ja/recamera_pro/
---

# ここから始める

reCamera Pro は Rockchip RV1126B SoC（クアッドコア Cortex-A53 @ 1.2 GHz、3 TOPS NPU）を搭載した AI カメラで、4K カメラ（SC850SL、4K@30FPS）、6 軸 IMU、マイク入力、1 W スピーカー、16 GB eMMC と SD カードスロット、そして豊富な拡張インターフェース（GPIO、UART、CAN、MIPI-DSI）を備えています。デバイス上のあらゆる機能 — ライブプレビュー、AI 検出、イベント録画、サウンドモデルのトレーニング — は内蔵の Web UI から操作でき、HTTP API とネイティブ SDK を通じて、より深い統合も可能です。

このページはタスクナビゲーターです。以下からやりたいことを選ぶか、初めての場合はデフォルトの入門ルートに従ってください。

<!-- TODO(O1, per migration map): add real preview screenshot as the capability entry image (from Live Preview page assets); verify all statements in this intro against the shipping firmware before release. -->

## デフォルトの入門ルート

reCamera Pro は初めてですか？次の 3 ステップを順番に進めてください：

1. [クイックスタート：最初の AI 検出を見る](/ja/recamera_pro_getting_started/) — デバイスの電源を入れ、Web UI にログインし、ライブ検出を確認します。
2. [最初のタスク：検出して録画する](/ja/recamera_pro_first_recording/) — 検出をイベント録画に変換し、再生します。
3. [Wi-Fi 経由でデバイスにアクセスする](/ja/recamera_pro_wifi_access/) — 直接接続からローカルネットワークへの接続に移行します。

## 何をしたいですか？

### 1. はじめに

- [最初の AI 検出を見る](/ja/recamera_pro_getting_started/)
- [最初のイベントを検出して録画する](/ja/recamera_pro_first_recording/)
- [Wi-Fi 経由でデバイスにアクセスする](/ja/recamera_pro_wifi_access/)

### 2. アプリを構築する

- [プレビュー、写真撮影、手動録画](/ja/recamera_pro_live_preview/)
- [画質と低照度性能を調整する](/ja/recamera_pro_image_quality/) — 0.3 lux 低照度サンプルを含みます <!-- TODO(O1/B2): link the actual 0.3 lux sample once captured and verified on the image quality page; do not fabricate sample images. -->
- [外部プレーヤーでストリームを見る（RTSP）](/ja/recamera_pro_rtsp/)
- [OSD とプライバシーマスクを設定する](/ja/recamera_pro_osd_masks/)
- [検出を設定する：クラス、しきい値、スケジュール](/ja/recamera_pro_ai_inference/)
- [イベント録画を設定する](/ja/recamera_pro_record_settings/) および [録画の検索とストレージ管理](/ja/recamera_pro_storage/)
- [独自のサウンドモデルをトレーニングする](/ja/recamera_pro_acoustic_lab_usage/) および [サウンドでキャプチャをトリガーする](/ja/recamera_pro_sound_trigger/)
- [検出結果を外部に送信する：MQTT](/ja/recamera_pro_mqtt/) · [HTTP / UART](/ja/recamera_pro_http_uart/)
- [外部デバイスからキャプチャをトリガーする](/ja/recamera_pro_uart_usage/)
- [Home Assistant でのサウンドトリガーアラート](/ja/recamera_pro_ha_sound_alert/)
- [最初の API 呼び出しを行う](/ja/recamera_pro_api_quick_start/)

### 3. 自分のモデルを使う

- [モデルのデプロイパスを選ぶ](/ja/recamera_pro_model_path/)
- [RKNN モデルをアップロードして設定する](/ja/recamera_pro_rknn_upload/)
- [SenseCraft で ONNX モデルを変換する](/ja/recamera_pro_sensecraft/)
- [RKNN-Toolkit2 でモデルを変換する](/ja/recamera_pro_rknn_model_conversion/)
- [デバイス上でモデル性能を検証する](/ja/recamera_pro_model_validate/)

### 4. 独自アプリを開発する

- [開発パスを選ぶ](/ja/recamera_pro_dev_path/)
- [最小限の SDK アプリケーションを構築する](/ja/recamera_pro_sdk_setup/)
- [ターミナル、SSH、デバッグ UART](/ja/recamera_pro_terminal/)
- [AI コーディングエージェントで開発する](/ja/recamera_pro_development_cpp_skill/)
- [カメラ / オーディオ / 推論パイプライン](/ja/recamera_pro_media_dev/)
- 周辺機器： [IMU データ](/ja/recamera_pro_imu_usage/) · [MIPI-DSI ディスプレイ](/ja/recamera_pro_mipi_dsi_screen_usage/) · [スピーカーと音量](/ja/recamera_pro_speaker_usage/) · [GPIO ピン](/ja/recamera_pro_gpio_guide/)
- 例： [傾き & シェイク検出](/ja/recamera_pro_imu_tilt_shake_detection/) · [ビジュアルウェイク + 音声認識](/ja/recamera_pro_visual_wake_stt/)
- [実験的な Debian 13 イメージ](/ja/recamera_pro_debian/)

### 5. デプロイと運用

- [デプロイ前チェックリスト](/ja/recamera_pro_deploy_checklist/)
- [ネットワーク、時刻、アクセス制御](/ja/recamera_pro_device_info/)
- [設定のバックアップと復元](/ja/recamera_pro_backup_restore/)
- [ファームウェアの更新とリカバリ](/ja/recamera_pro_firmware_update/)

### 6. リファレンス

- [ハードウェア仕様とインターフェース図](/ja/recamera_pro_hardware_specifications/)
- [Web UI のフィールド & ボタン索引](/ja/recamera_pro_webui_reference/)
- [モデル互換性と出力フォーマット](/ja/recamera_pro_model_compatibility/)
- [ダウンロードとリリースノート](/ja/recamera_pro_downloads/)
- [API リファレンス](/ja/recamera_pro_api_introduction/)

### 7. トラブルシューティング

- [症状別トラブルシューティング](/ja/recamera_pro_faqs/)
- [サポート用ログを収集する](/ja/recamera_pro_collect_logs/)
- [API 呼び出しのトラブルシューティング](/ja/recamera_pro_api_faq/)

## 機能の概要

<!-- TODO(O1, per migration map "capability status"): build the capability status matrix from the shipping firmware — for each capability (AI detection, event recording, sound training/Acoustic Lab, RTSP streaming, MQTT/HTTP/UART output, external trigger, API), state availability and any known limitations. Sources: Ai_Inference §Feature Overview, Acoustic Lab §Introduction, Live Preview real preview image. Do not invent firmware facts; verify version by version. -->

- **AI ビジョン** — デバイス上での物体 / 人物検出。クラス、しきい値、スケジュールを設定可能です。
- **サウンドセンシング** — Acoustic Lab によるカスタムサウンドモデルのトレーニング。サウンドでキャプチャやアラートをトリガーできます。
- **録画** — 手動録画に加え、イベントベース録画とストレージ管理に対応します。
- **ストリーミング** — Web UI でのライブプレビューと、外部プレーヤー向け RTSP 出力。
- **インテグレーション** — HTTP API、MQTT/HTTP/UART による結果出力、GPIO/UART 外部トリガー、Home Assistant 向けサンプル。
- **開発** — ネイティブ SDK、AI コーディングエージェントワークフロー、実験的な Debian 13。

## 次に進むには

- 初めての方は、上の [デフォルトの入門ルート](#デフォルトの入門ルート) から始めてください。
- 自分のモデルを持ち込む場合は、[自分のモデルを使う](/ja/recamera_pro_model_path/) に進んでください。
- コードを書く場合は、[独自アプリを開発する](/ja/recamera_pro_dev_path/) に進んでください。
- うまく動作しない場合は、[トラブルシューティング](/ja/recamera_pro_faqs/) を参照してください。
