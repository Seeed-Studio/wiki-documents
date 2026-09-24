---
description: reCamera Pro からの AI 検出結果を HTTP または UART シリアルポート経由で外部システムに送信します。
title: HTTP または UART で検出結果を送信する
keywords:
  - reCamera
  - reCamera Pro
  - HTTP
  - UART
  - AI inference
  - detection output
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_http_uart
sku: 10003420
sidebar_position: 11
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_http_uart/
---

# HTTP または UART で検出結果を送信する

[MQTT](/ja/recamera_pro_mqtt/) に加えて、reCamera Pro は HTTP および UART を介して AI 推論結果を外部システムに出力することをサポートしています。

## HTTP 出力

Web UI で **AI Inference** → **Inference Output Configuration** に移動し、出力方法として **HTTP** を選択します。

{/* TODO(verify): document HTTP output configuration fields (target URL, method, headers, payload format), and confirm whether reCamera Pro sends a POST request with the inference JSON */}

HTTP 出力は、REST API、Webhook、カスタムバックエンドサービス、または HTTP リクエストを受け付けるサードパーティプラットフォームとの連携に適しています。

## UART 出力

UART 出力は、拡張インターフェースのシリアルポート経由で推論結果を送信します。これは、シリアルプロトコルで通信する外部コントローラ、MCU、または産業機器との連携に有用です。

### UART 出力の設定

1. **AI Inference** → **Output Method** で **Serial Port** を選択します。

![UART AI output configuration](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. シリアルポートツールを開き、推論結果を受信します。

![UART AI output results](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

### 出力フォーマット

UART 出力には、リアルタイム推論モニタリングログと同じフィールド（timestamp、task_type、class_id、class_name、score、bbox、detection_count）が含まれます。

{/* TODO(verify): confirm UART output baud rate (set in Device Info → Connection Settings), data format (JSON lines? raw text?), and whether output is sent only when detection_count > 0 or on every frame */}

:::note
シリアルポートトリガー用のトリガーコマンド（[外部デバイスからのトリガー撮影](/ja/recamera_pro_uart_usage/) を参照）は ASCII 形式でのみ送信できます。HEX 送信および中国語文字には対応していません。
:::

## 関連ページ

- [検出の設定](/ja/recamera_pro_ai_inference/)
- [MQTT で検出結果を送信する](/ja/recamera_pro_mqtt/)
- [外部デバイスからのトリガー撮影](/ja/recamera_pro_uart_usage/)

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
