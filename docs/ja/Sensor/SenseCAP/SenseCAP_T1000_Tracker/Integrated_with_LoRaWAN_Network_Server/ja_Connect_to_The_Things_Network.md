---
description: The_Things_Networkに接続する
title: The Things Networkに接続する
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_TTN
last_update:
  date: 8/15/2023
  author: Jessie
---


The Things Stack(TTS)は、LoRaWAN®ネットワークサーバースタックであり、あらゆるLoRaWANソリューションにとって重要なコンポーネントです。この章では、[SenseCAP T100 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)をThe Things Networkに接続する方法をユーザーにガイドします。


## デバイス設定

TTSに接続する前に、SenseCAP Mate APPでデバイスの基本パラメータを設定する必要があります。詳細については[Get Started](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker)を確認してください。

* プラットフォームをTTNに設定し、Device EUI/APP EUI/APP Keyをコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

## The Things Network

The Things Stack(TTS)は、オープンソースコアをベースに構築されたエンタープライズグレードのLoRaWANネットワークサーバーです。The Things Stackを使用すると、独自のハードウェアまたはクラウドでLoRaWANネットワークを構築および管理できます。

まず、[The Things Network](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)でアカウントを登録してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png" alt="pir" width={800} height="auto" /></p>


### ステップ1: アプリケーションを作成する

Applicationsページに移動し、「+Create application」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Application IDを入力し、Create Applicationをクリックして変更を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>


### ステップ2: デバイスを登録する

ユーザー向けにテンプレートをアップロードしました。製品モデルを選択するだけで素早く設定できます。
入力方法を「Select the end device in the LoRaWAN Device Repository」に選択します。

:::info
**End device brand**:SenseCAP<br />
**Model**:SenseCAP T1000 Tracker A/B
:::

デバイスに応じて周波数プランを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_setup.png" alt="pir" width={800} height="auto" /></p>


SenseCraft AppからDevice EUI/APP EUI/APP Keyを貼り付け、「Register end device」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_new.png" alt="pir" width={800} height="auto" /></p>

:::note
上記の「JoinEUI」は「AppEUI」と同様です。
:::


### ステップ3: データを確認する

デバイスがネットワークに接続しようとすると、呼吸ライトが点滅します。デバイスがネットワークに正常に参加すると、呼吸ライトが素早く点滅し、軽やかで陽気なメロディーが流れます。

その後、TTSコンソールでデータを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_check.png" alt="pir" width={800} height="auto" /></p>


## リソース

[SenseCAP T1000 Tracker Decoder for TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/T1000/TTN)