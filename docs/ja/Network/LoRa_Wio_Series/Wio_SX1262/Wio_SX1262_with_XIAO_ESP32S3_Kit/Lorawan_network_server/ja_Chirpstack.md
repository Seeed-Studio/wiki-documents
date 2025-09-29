---
description: XIAO ESP32S3モジュールを使用したWio SX1262に基づくChirpstack LNS接続
title: Chirpstackに接続
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51_1.png
slug: /ja/wio_sx1262_xiao_esp32s3_LNS_Chirpstack
sidebar_position: 2
last_update:
  date: 10/17/2024
  author: Evelyn Chen
---

# Wio-SX1262とXIAO ESP32S3キットをChirpstackに接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51.png" alt="pir" width={900} height="auto" /></p>

## 概要

LoRaWANは、LoRa技術の上に構築された低電力広域ネットワーキングプロトコルです。デバイスをワイヤレスでインターネットに接続し、エンドノードデバイスとネットワークゲートウェイ間の通信を管理します。

Loraの入門ガイドに従って、Wio-SX1262とXIAO ESP32S3を1チャンネルハブLoRaゲートウェイとして設定しました。

このwikiページでは、Wio-SX1262とXIAO ESP32S3キットを単一チャンネルゲートウェイとしてLoRaWANを設定し、データ交換を行う方法について説明します。また、Sensecap S210x LoRaセンサーノードをWio-SX1262とXIAO ESP32S3キットに接続し、センサーデータをChirpstackに送信する方法も説明します。

## Chirpstackをローカルにインストール

Chirpstackをローカルにインストールするには、[こちらの手順](https://learn.semtech.com/mod/book/view.php?id=223&chapterid=266#:~:text=Enter%20the%20following%20to%20clone%20the%20ChirpStack%20Docker,Share%20it%20on%20any%20security%20popups%20you%20see.)を参照してください。

1. ブラウザを開いてhttp://localhost:8080 にアクセスします。

ChirpStackのログインページが表示されます。

2. デフォルトのユーザー名`admin`とパスワード`admin`でサインインします。

## デバイスプロファイルの追加

テナント下でデバイスプロファイルを追加します：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/45.png" alt="pir" width={600} height="auto" /></p>

## LoRaWANゲートウェイの追加

ゲートウェイを登録し、ゲートウェイEUIを入力します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/46.png" alt="pir" width={600} height="auto" /></p>

正常に追加されました！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/47.png" alt="pir" width={600} height="auto" /></p>

## SenseCAP LoRaセンサーの追加

### Sensecraft APPを使用したLoRaセンサーの設定

sensecapセンサーノードをTTNに追加します。

**ステップ1**. Sensecraft Appをダウンロードして開きます。

**ステップ2**. センサーボタンを3秒間長押しすると、LEDが1秒間隔で点滅します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**ステップ3**. 「Scan」をクリックして新しいデバイスを追加し、デバイス上のQRコードのスキャンを開始してください。

**ステップ4**. 「Advanced Configuration」をクリックし、「Other Platform」のプラットフォームを選択します。

**ステップ5**. ゲートウェイと一致する周波数プランを選択します。ゲートウェイをすでにEU868に設定しているので、センサーもEU868に設定します。

**ステップ6**. デバイスはデフォルトでOTAAを使用してLoRaWANネットワークに参加します。`device EUI`、`App EUI`、`APP key`をメモしてください。

### Chirpstackに追加

**ステップ1**. アプリケーションを作成

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/48.png" alt="pir" width={600} height="auto" /></p>

**ステップ2**. アプリケーションにデバイスを追加し、`Device EUI`と`AppKEY`を対応する欄にコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/49.png" alt="pir" width={600} height="auto" /></p>

**ステップ3**. センサーの状態を確認

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/50.png" alt="pir" width={600} height="auto" /></p>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
