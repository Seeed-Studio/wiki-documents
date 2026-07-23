---
description: このWikiでは、デバイス上のシリアルポートを使用してデバッグを行い、写真/動画の撮影・録画をトリガーする方法について簡単に紹介します。
title: UART の使用方法
keywords:
  - reCamera
  - reCamera Pro
  - UART
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_uart_usage
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/ja/recamera_pro_uart_usage/
---

# reCamera Pro で UART インターフェースを使用する

デバイスには 2 つのシリアルポートがあります。1 つはデバッグ専用の DEBUG UART、もう 1 つは Web UI トリガー用の UART インターフェースです。
![Hardware Base Board Interface Diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/base_board_pin.png)
![Expansion Port Schematic](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/EXT_GPIO.jpg)

## DEBUG UART の接続

デバッグシリアルポートのボーレートは 1500000 で、ハードウェアインターフェース仕様は MX1.25 です。ピン配列は以下のとおりです。
![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

1. まず、USB-シリアル変換器を用意します。変換器の TX をデバイスの RX ピンに、変換器の RX をデバイスの TX ピンに接続します。GND を接続することも忘れないでください。
2. デバイスの電源を入れると、変換器上でデバイスのデバッグ情報を確認できます。
![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

## 拡張インターフェース上の UART の使用

この UART インターフェースは、Web UI トリガー用の UART インターフェースとして使用されます。AI 推論データの受信に使用できるほか、コマンドを送信してイベントをトリガーすることもできます。

### シリアルポートトリガー

1. まず、10 ピンの MX1.25 ケーブルを用意し、拡張インターフェースに接続します。

2. 次に、上記の拡張インターフェース図のピン配列に従って、USB-to-TTL ツールに接続します。変換器の TX をデバイスの RX ピンに、変換器の RX をデバイスの TX ピンに接続します。GND を接続することも忘れないでください。

3. ***Device Info*** -> ***Connection Settings*** で、シリアルポートのボーレートを設定できます。
![DEBUG_UART_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_CONNECT_CONFIG.png)

4. ***Recording Settings*** -> ***Recording Configuration*** -> ***Serial Port Trigger*** で、Configure をクリックしてトリガーコマンドを設定します。
![DEBUG_UART_COMMAND_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_TRIGGER_CONFIG.png)

5. シリアルポートツールを開き、対応するシリアルポートデバイスを選択して、トリガーコマンドを送信します。
![DEBUG_UART_SEND_COMMAND](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_SEND_COMMAND.png)

6. ***Recording Settings*** -> ***File Preview*** で、先ほどシリアルポートトリガーで撮影された写真や動画を確認できます。
![DEBUG_UART_FILE_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_FILE_SHOW.png)

:::note
トリガーコマンドは ASCII 形式でのみ送信できます。HEX 送信には対応しておらず、中国語文字にも対応していません。
:::

### AI 推論結果の受信

1. まず、***AI Inference*** -> ***Output Method*** で ***Serial Port*** を選択します。
![UART_AI_OUTPUT_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. シリアルポートツールを開くと、出力結果を確認できます。
![UART_AI_OUTPUT](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

## テクニカルサポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
