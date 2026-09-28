---
description: reCamera Pro からの AI 検出結果を MQTT ブローカーへ送信し、ダッシュボード、オートメーションプラットフォーム、またはカスタムアプリケーションと連携します。
title: MQTT 経由で検出結果を送信
keywords:
  - reCamera
  - reCamera Pro
  - MQTT
  - AI 推論
  - 検出出力
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_mqtt
sku: 10003420
sidebar_position: 10
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_mqtt/
---

# MQTT 経由で検出結果を送信

reCamera Pro は、MQTT を介して AI 推論結果を外部システムへ出力できます。これは、ダッシュボード（例：Home Assistant、Node-RED）、オートメーションプラットフォーム、または検出イベントを購読するカスタムアプリケーションとの連携に役立ちます。

## MQTT 出力を設定する

1. Web UI で **AI Inference** → **Inference Output Configuration** に移動します。
2. 出力テンプレート、タスクタイプを選択し、出力方法として **MQTT** を選択します。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WaXFL9Pz9G.png" />

{/* TODO(verify): document MQTT broker configuration fields (broker address, port, topic, username/password, TLS), and confirm whether the Web UI exposes these or if they require SSH/API configuration */}

## 出力フォーマット

MQTT メッセージのペイロードには通常、次の内容が含まれます：

| Field | Description |
|---|---|
| timestamp | 推論結果のタイムスタンプ |
| task_type | 現在のタスクタイプ |
| class_id | 検出されたクラス ID |
| class_name | 検出されたクラス名 |
| score | 検出の信頼度 |
| bbox | バウンディングボックスの座標 |
| detection_count | 現在のフレームで検出されたオブジェクト数 |

{/* TODO(verify): confirm exact MQTT payload JSON schema and topic naming convention on production firmware */}

## 関連ページ

- [検出を設定する](/ja/recamera_pro_ai_inference/)
- [HTTP/UART 経由で検出結果を送信](/ja/recamera_pro_http_uart/)
- [Home Assistant 音声トリガー付き写真アラート](/ja/recamera_pro_ha_sound_alert/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
