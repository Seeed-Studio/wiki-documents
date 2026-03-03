---
description: Wio SX1262とXIAO esp32s3モジュールを使用したTTN LNS接続
title: TTNに接続する
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png
slug: /ja/wio_sx1262_xiao_esp32s3_LNS_TTN
sidebar_position: 1
last_update:
  date: 10/17/2024
  author: Evelyn Chen
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png" alt="pir" width={900} height="auto" /></p>

## 概要

LoRaWANは、LoRa技術の上に構築された低電力広域ネットワークプロトコルです。デバイスをワイヤレスでインターネットに接続し、エンドノードデバイスとネットワークゲートウェイ間の通信を管理します。

Loraの入門ガイドに従って、Wio-SX1262とXIAO ESP32S3を1チャンネルハブLoRaゲートウェイとして設定しました。

このwikiページでは、Wio-SX1262とXIAO ESP32S3キットを単一チャンネルゲートウェイとしてLoRaWANを設定し、TTNとデータ交換する方法について説明します。また、Sensecap S210x LoRaセンサーノードをWio-SX1262とXIAO ESP32S3キットに接続し、センサーデータをTTN（The Things Network）に送信する方法も説明します。

## LoRaWANゲートウェイの追加

TTNの新しいアカウントをクリックして作成してください：https://www.thethingsnetwork.org/

アカウントをお持ちの場合は、https://eu1.cloud.thethings.network/ に直接アクセスできます。

ログインして、ゲートウェイを登録します。

**ステップ1**. ゲートウェイを登録

**ステップ2**. `gateway EUI`、`gateway ID`、`frequency plan`の正しい情報を入力します。

**ステップ3**. ゲートウェイモジュールを再起動し、約2分間待ちます。その後、ゲートウェイの接続状態を確認できます。

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## アプリケーションの作成

TTNで新しいアプリケーションを追加します

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## SenseCAP LoRaセンサーの追加

### Sensecraft APPを使用したLoRaセンサーの設定

sensecapセンサーノードをTTNに追加します。

**ステップ1**. Sensecraft Appをダウンロードして開きます。

**ステップ2**. センサーボタンを3秒間押し続けると、LEDが1秒間隔で点滅します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**ステップ3**. 「スキャン」をクリックして新しいデバイスを追加し、デバイス上のQRコードのスキャンを開始してください。

**ステップ4**. 「詳細設定」をクリックし、「The Things Network」のプラットフォームを選択します。

**ステップ5**. ゲートウェイと一致する周波数プランを選択します。ゲートウェイをすでにEU868に設定しているため、センサーもEU868に設定します。

**ステップ6**. デバイスはデフォルトでOTAAを使用してLoRaWANネットワークに参加します。`device EUI`、`App EUI`、`APP key`をメモしてください。

sensecap S210xセンサーをThe Things Networkに接続するための[詳細な手順書](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)があります。

### TTNでの登録

エンドデバイスを登録します。

**ステップ1**. エンドデバイスタイプを選択し、JoinEUI（sensecraftからのAppEUI）を入力します。その後、*確認*をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/42.png" alt="pir" width={600} height="auto" /></p>

**ステップ2**. DevEUIとAppKeyを入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/43.png" alt="pir" width={600} height="auto" /></p>

**ステップ3**. 入力したプロビジョニング情報を再確認し、エンドデバイスを登録をクリックします。センサーデータがダッシュボードに表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/44.png" alt="pir" width={600} height="auto" /></p>

## リソース

- [The Things Network](https://eu1.cloud.thethings.network/)
- [SensecapセンサーをTTNに接続する手順書](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験を可能な限りスムーズにするため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>