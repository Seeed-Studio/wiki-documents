---
description: Chirpstack LNS接続をWio SX1262とXIAO ESP32S3モジュールを使用して構築する方法
title: Chirpstackへの接続
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51_1.png
slug: /ja/wio_sx1262_xiao_esp32s3_LNS_Chirpstack
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Evelyn Chen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Wio-SX1262とXIAO ESP32S3キットを使用したChirpstackへの接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51.png" alt="pir" width={900} height="auto" /></p>


## 概要

LoRaWANは、LoRa技術を基盤とした低消費電力・広域ネットワークプロトコルです。これにより、デバイスをインターネットに無線で接続し、エンドノードデバイスとネットワークゲートウェイ間の通信を管理します。

LoRaの始め方に従い、Wio-SX1262とXIAO ESP32S3を使用して1チャンネルハブLoRaゲートウェイを構成しました。

このWikiページでは、Wio-SX1262とXIAO ESP32S3キットを使用して単一チャンネルゲートウェイを構築し、データを交換する方法を説明します。また、Sensecap S210x LoRaセンサーノードをWio-SX1262とXIAO ESP32S3キットに接続し、センサーのデータをChirpstackに送信する方法も説明します。

## Chirpstackをローカルにインストールする

Chirpstackをローカルにインストールする方法については、[こちらの手順](https://learn.semtech.com/mod/book/view.php?id=223&chapterid=266#:~:text=Enter%20the%20following%20to%20clone%20the%20ChirpStack%20Docker,Share%20it%20on%20any%20security%20popups%20you%20see.)を参照してください。

1. ブラウザを開き、http://localhost:8080 にアクセスします。

Chirpstackのログインページが表示されるはずです。

2. デフォルトのユーザー名`admin`とパスワード`admin`でサインインします。

## デバイスプロファイルを追加する

Tenantの下にデバイスプロファイルを追加します：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/45.png" alt="pir" width={600} height="auto" /></p>

## LoRaWANゲートウェイを追加する

ゲートウェイを登録し、ゲートウェイEUIを入力します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/46.png" alt="pir" width={600} height="auto" /></p>

追加が成功しました！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/47.png" alt="pir" width={600} height="auto" /></p>

## SenseCAP LoRaセンサーを追加する

### Sensecraft APPでLoRaセンサーを設定する
SensecapセンサーノードをTTNに追加します。

**ステップ1**. Sensecraftアプリをダウンロードして開きます。

**ステップ2**. センサーのボタンを押して3秒間保持します。LEDが1秒間隔で点滅します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**ステップ3**. 「スキャン」をクリックして新しいデバイスを追加し、デバイスのQRコードをスキャンします。

**ステップ4**. 「高度な設定」をクリックし、「その他のプラットフォーム」を選択します。

**ステップ5**. ゲートウェイと一致する周波数プランを選択します。ゲートウェイをEU868に設定済みなので、センサーもEU868に設定します。

**ステップ6**. デバイスはデフォルトでOTAAを使用してLoRaWANネットワークに参加します。`device EUI`、`App EUI`、`APP key`を記録してください。

### Chirpstackに追加する

**ステップ1**. アプリケーションを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/48.png" alt="pir" width={600} height="auto" /></p>

**ステップ2**. アプリケーション内でデバイスを追加し、`Device EUI`と`AppKEY`を対応する空欄に入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/49.png" alt="pir" width={600} height="auto" /></p>

**ステップ3**. センサーのステータスを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/50.png" alt="pir" width={600} height="auto" /></p>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>