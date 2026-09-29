---
description: GPIO ピン、シリアルコマンド、または HTTPS リクエストを使用して、外部デバイスから reCamera Pro の写真または動画撮影をトリガーします。
title: 外部デバイスから撮影をトリガーする
keywords:
  - reCamera
  - reCamera Pro
  - GPIO
  - UART
  - serial trigger
  - HTTPS trigger
  - external trigger
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_uart_usage
sku: 10003420
sidebar_position: 12
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_uart_usage/
---

# 外部デバイスから撮影をトリガーする

reCamera Pro には 2 つのシリアルポートがあります。システムデバッグ用の **DEBUG UART** と、Web UI によるトリガーおよび AI 推論データの受信に使用する拡張ポート上の **UART インターフェース** です。これを GPIO トリガーや HTTPS トリガーと組み合わせることで、カメラを外部コントローラ、センサー、自動化システムと連携させることができます。

![Hardware Base Board Interface Diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/base_board_pin.png)
![Expansion Port Schematic](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/EXT_GPIO.jpg)

## DEBUG UART の接続

デバッグシリアルポートのボーレートは **1500000** で、ハードウェアインターフェースは **MX1.25** です。

![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

1. USB-シリアル変換アダプタを用意します。
2. 変換アダプタとデバイスの間を TX→RX、RX→TX、GND→GND で接続します。
3. デバイスの電源を入れると、変換アダプタ側でデバッグ情報を確認できます。

![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

{/* TODO(verify): confirm whether the debug UART baud rate is configurable or fixed at 1500000 */}

## トリガー用に拡張 UART を使用する

### 拡張ポートを接続する

1. **10 ピン MX1.25 ケーブル** を用意し、拡張インターフェースに接続します。
2. 上記の拡張ポート図に従って、TX→RX、RX→TX、GND→GND を USB-TTL ツールに接続します。

### ボーレートを設定する

**Device Info** → **Connection Settings** で、シリアルポートのボーレートを設定します。

![UART connection config](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_CONNECT_CONFIG.png)

### シリアルポートトリガー

1. **Recording Settings** → **Recording Configuration** → **Serial Port Trigger** で、**Configure** をクリックしてトリガーコマンドを設定します。

![UART trigger config](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_TRIGGER_CONFIG.png)

2. シリアルポートツールを開き、正しいシリアルポートを選択してトリガーコマンドを送信します。

![UART send command](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_SEND_COMMAND.png)

3. **Recording Settings** → **File Preview** で、撮影された写真または動画を確認します。

![UART file preview](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_FILE_SHOW.png)

:::note
トリガーコマンドは **ASCII format** でのみ送信できます。HEX 送信および中国語文字はサポートされていません。
:::

### AI 推論結果を受信する

1. **AI Inference** → **Output Method** で **Serial Port** を選択します。

![UART AI output config](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. シリアルポートツールを開き、推論結果を確認します。

![UART AI output](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

{/* TODO(verify): document the exact serial data format for inference results and whether it matches the real-time monitoring log fields */}

## GPIO トリガー

GPIO トリガーは **Recording Settings** → **Recording Configuration** → **GPIO Trigger** で設定します：

| Configuration Item | Description |
|---|---|
| GPIO Pin Name | GPIO ピンを選択します |
| Pin State | 浮動などのデフォルトのピン状態 |
| Trigger Signal | High レベルなどのトリガーレベル |
| Debounce Duration | デバウンス時間（ミリ秒） |

外部センサー、ボタン、ドアマグネット、PIR センサー、リレーとの連携に適しています。

{/* TODO(verify): document which GPIO pins are available on the expansion port and their voltage levels */}

## HTTPS トリガー

HTTPS トリガーは **Recording Settings** → **Recording Configuration** → **HTTPS Trigger** で設定します。このページには、外部システムから呼び出すことができる HTTPS トリガーアドレスが表示されます。

サードパーティプラットフォーム、警報システム、自動化スクリプトとの連携に適しています。

{/* TODO(verify): document the exact HTTPS trigger URL format, HTTP method, and request body schema */}

## 関連ページ

- [イベント録画を設定する](/ja/recamera_pro_record_settings/)
- [検出結果を HTTP/UART で送信する](/ja/recamera_pro_http_uart/)
- [GPIO ピンガイド](/ja/recamera_pro_gpio_guide/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
