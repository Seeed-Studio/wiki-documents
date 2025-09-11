---
description: Wio SX1262とXIAO ESP32S3モジュールを使用したTTN LNS接続
title: TTNへの接続
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png
slug: /ja/wio_sx1262_xiao_esp32s3_LNS_TTN
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Evelyn Chen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png" alt="pir" width={900} height="auto" /></p>

## 概要

LoRaWANは、LoRa技術を基盤とした低消費電力の広域ネットワークプロトコルです。これにより、デバイスをインターネットに無線で接続し、エンドノードデバイスとネットワークゲートウェイ間の通信を管理します。

LoRaの始め方に従い、XIAO ESP32S3を使用してWio-SX1262を1チャンネルハブLoRaゲートウェイとして構成しました。

このWikiページでは、Wio-SX1262とXIAO ESP32S3キットを使用して単一チャンネルゲートウェイを設定し、TTNとデータを交換する方法を説明します。また、SenseCAP S210x LoRaセンサーノードをWio-SX1262とXIAO ESP32S3キットに接続し、センサーデータをTTN（The Things Network）に送信する方法も説明します。

## LoRaWANゲートウェイの追加

TTNの新しいアカウントを作成してください: https://www.thethingsnetwork.org/

すでにアカウントをお持ちの場合は、https://eu1.cloud.thethings.network/ に直接アクセスできます。

ログイン後、ゲートウェイを登録します。

**ステップ 1**. ゲートウェイを登録

**ステップ 2**. `ゲートウェイEUI`、`ゲートウェイID`、`周波数プラン`の正しい情報を入力します。

**ステップ 3**. ゲートウェイモジュールを再起動し、約2分待ちます。その後、接続されたゲートウェイのステータスを確認できます。

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## アプリケーションの作成

TTNで新しいアプリケーションを追加します。

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## SenseCAP LoRaセンサーの追加

### Sensecraftアプリを使用したLoRaセンサーの設定
SenseCAPセンサーノードをTTNに追加します。

**ステップ 1**. Sensecraftアプリをダウンロードして開きます。

**ステップ 2**. センサーのボタンを押し、3秒間押し続けます。LEDが1秒間隔で点滅します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**ステップ 3**. 「スキャン」をクリックして新しいデバイスを追加し、デバイスのQRコードをスキャンします。

**ステップ 4**. 「詳細設定」をクリックし、「The Things Network」のプラットフォームを選択します。

**ステップ 5**. ゲートウェイと一致する周波数プランを選択します。ゲートウェイをEU868に設定済みなので、センサーもEU868に設定します。

**ステップ 6**. デバイスはデフォルトでOTAAを使用してLoRaWANネットワークに参加します。`デバイスEUI`、`App EUI`、`APPキー`を記録してください。

SenseCAP S210xセンサーをThe Things Networkに接続するための[詳細な手順](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)もあります。

### TTNでの登録
エンドデバイスを登録します。

**ステップ 1**. エンドデバイスタイプを選択し、JoinEUI（SensecraftからのAppEUI）を入力します。その後、*確認*をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/42.png" alt="pir" width={600} height="auto" /></p>

**ステップ 2**. DevEUIとAppKeyを入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/43.png" alt="pir" width={600} height="auto" /></p>

**ステップ 3**. 入力したプロビジョン情報を再確認し、エンドデバイスを登録します。センサーデータがダッシュボードに表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/44.png" alt="pir" width={600} height="auto" /></p>

## リソース

* [The Things Network](https://eu1.cloud.thethings.network/)
* [SenseCAPセンサーをTTNに接続する手順](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)

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