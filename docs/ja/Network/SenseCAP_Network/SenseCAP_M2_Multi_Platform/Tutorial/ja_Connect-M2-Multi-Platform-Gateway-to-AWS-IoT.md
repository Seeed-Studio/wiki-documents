---
description: SenseCAP M2 マルチプラットフォームゲートウェイを AWS に接続する
title: AWS IoT への接続
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## AWS IoT の設定

[AWS](https://signin.aws.amazon.com) にログインします。  
AWS アカウントをお持ちでない場合は、まず新しいアカウントを作成してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### ゲートウェイを追加

**Internet of Things** > **IoT Core** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS1.PNG" alt="pir" width={800} height="auto" /></p>

**LPWAN devices** > **Gateway** を選択してゲートウェイを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS4.PNG" alt="pir" width={800} height="auto" /></p>

**ゲートウェイの EUI:** ゲートウェイの EUI はデバイスラベルまたは [ローカルコンソール](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) で確認できます。

**周波数帯域:** 実際の選択に応じて周波数プランを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

#### 証明書を作成

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS7.PNG" alt="pir" width={800} height="auto" /></p>

証明書ファイルとサーバートラスト証明書をダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS5.PNG" alt="pir" width={800} height="auto" /></p>

ロールを選択します: **IoT Wireless Gateway Cert Manager Role**、その後設定を送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS9.PNG" alt="pir" width={800} height="auto" /></p>

#### ゲートウェイ接続ステータスを確認

ゲートウェイページに移動し、追加したゲートウェイを選択します。

ゲートウェイ詳細ページの LoRaWAN 特定の詳細セクションで、接続ステータスと最後にアップリンクを受信した日時を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS8.PNG" alt="pir" width={800} height="auto" /></p>

### プロファイルを追加

デバイスとサービスプロファイルを定義して、一般的なデバイス構成を記述できます。これらのプロファイルは、デバイスを追加しやすくするために共有される構成パラメータを記述します。AWS IoT Core for LoRaWAN はデバイスプロファイルとサービスプロファイルをサポートしています。

#### デバイスプロファイルを追加

**Devices** > **Profiles** に移動し、[Add device profile] をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

デバイスプロファイル名を入力し、デバイスとゲートウェイで使用している周波数帯域 (RfRegion) を選択し、その他の設定はデフォルト値のままにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### サービスプロファイルを追加

**Devices** > **Profiles** に移動し、[Add service profile] をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

データ送信の RSSI や SNR など、各ペイロードに追加のゲートウェイメタデータを受信するために、設定 [AddGWMetaData] を有効にしておくことをお勧めします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### 宛先を追加

**Devices** > **Destination** に移動し、[Add destination] をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

AWS IoT Core メッセージブローカーに公開します。

**Permissions**: 既存のサービスロールを選択 > IoT Wireless Gateway Cert Manager Role

:::tip 注意
宛先名には英数字、-（ハイフン）、_（アンダースコア）のみ使用可能で、スペースを含めることはできません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### LoRaWAN デバイスを追加

#### ワイヤレスデバイスを追加

**LPWAN devices** > **Devices** に移動し、[Add wireless device] をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### デバイスを構成

**ワイヤレスデバイス仕様**: OTAAv1.0x

**DevEUI:** `device EUI/APP EUI/APP` キーはデバイスラベルで確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

#### デバイス接続ステータスを確認

**Devices** ページに移動し、追加したデバイスを選択します。

ワイヤレスデバイス詳細ページの詳細セクションで、最後にアップリンクを受信した日時を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## ゲートウェイ設定

ローカルコンソールにログインして、デバイスの[クイックスタートガイド](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS22.PNG" alt="pir" width={800} height="auto" /></p>

### LoRaWAN ネットワーク設定

**LoRa** > **LoRa Network** に移動します。

**モード**: Basics Station

**ゲートウェイ EUI**: 接続されたゲートウェイの EUI を自動的に取得します。

**サーバー**: CUPS サーバーまたは LNS サーバーを選択します（CUPS の場合、ポートは 443; LNS の場合、ポートは 8887）。

[CUPS と LNS サーバーについてさらに詳しく学ぶ](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)

**認証モード**: TLS サーバーおよびクライアント認証

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>

設定が完了したら、「Save&Apply」をクリックしてください。