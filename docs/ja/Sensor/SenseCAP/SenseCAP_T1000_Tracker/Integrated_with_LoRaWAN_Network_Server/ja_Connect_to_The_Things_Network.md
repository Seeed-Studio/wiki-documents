---
description: The Things Networkに接続する
title: The Things Networkに接続する
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_TTN
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

The Things Stack（TTS）は、あらゆるLoRaWAN®ソリューションにおいて重要なコンポーネントであるLoRaWANネットワークサーバースタックです。本章では、[SenseCAP T100 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)をThe Things Networkに接続する方法を案内します。

## デバイス設定

TTSに接続する前に、SenseCAP Mateアプリでデバイスの基本パラメータを設定する必要があります。詳細は[Get Started](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker)をご確認ください。

* プラットフォームをTTNに設定し、Device EUI/APP EUI/APP Keyをコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

## The Things Network

The Things Stack（TTS）は、オープンソースのコアを基盤としたエンタープライズグレードのLoRaWANネットワークサーバーです。The Things Stackを使用すると、独自のハードウェアまたはクラウド上でLoRaWANネットワークを構築および管理できます。

まず、[The Things Network](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)でアカウントを登録してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png" alt="pir" width={800} height="auto" /></p>

### ステップ1: アプリケーションを作成する

Applicationsページに移動し、「+Create application」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Application IDを入力し、「Create Application」をクリックして変更を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

### ステップ2: デバイスを登録する

ユーザー向けにテンプレートをアップロードしましたので、製品モデルを選択するだけで簡単に設定できます。  
入力方法を「Select the end device in the LoRaWAN Device Repository」に設定します。

:::info
**エンドデバイスブランド**: SenseCAP<br />
**モデル**: SenseCAP T1000 Tracker A/B
:::

デバイスに応じて周波数プランを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_setup.png" alt="pir" width={800} height="auto" /></p>

SenseCraftアプリからDevice EUI/APP EUI/APP Keyを貼り付け、「Register end device」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_new.png" alt="pir" width={800} height="auto" /></p>

:::note
上記の「JoinEUI」は「AppEUI」と類似しています。
:::

### ステップ3: データを確認する

デバイスがネットワークに接続しようとすると、呼吸ライトが点滅します。デバイスがネットワークに正常に接続されると、呼吸ライトが速く点滅し、軽快で楽しいメロディーが流れます。

その後、TTSコンソールでデータを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_check.png" alt="pir" width={800} height="auto" /></p>

## リソース

[SenseCAP T1000 Tracker Decoder for TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/T1000/TTN)