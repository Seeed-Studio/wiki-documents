---
description: R1225 を AWS IoT に接続する
title: AWS IoT への接続
keywords:
  - Gateway
  - SenseCAP
  - Edge Controller
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_aws_iot
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/07/2026
  author: Kian
createdAt: '2026-05-25'
url: https://wiki.seeedstudio.com/ja/connecting_r1225_to_aws_iot/
updatedAt: '2026-04-15'
---

## AWS IoT ゲートウェイ設定

[AWS](https://signin.aws.amazon.com) にログインします。
AWS アカウントをお持ちでない場合は、まず新規アカウントを作成してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### ゲートウェイの追加

**モノのインターネット** > **IoT Core** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws1.png" alt="pir" width={800} height="auto" /></p>

**LPWAN デバイス** > **ゲートウェイ** を選択してゲートウェイを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws2.png" alt="pir" width={800} height="auto" /></p>

**ゲートウェイの EUI:** ゲートウェイ EUI はデバイスのラベルまたは [ローカルコンソール](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) で確認できます。

**周波数帯:** 実際の選択に応じて周波数プランを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws3.png" alt="pir" width={800} height="auto" /></p>

#### 証明書の作成

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws4.png" alt="pir" width={800} height="auto" /></p>

証明書ファイルとサーバートラスト証明書をダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws5.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws6.png" alt="pir" width={800} height="auto" /></p>

#### ロールの選択

**IoT Wireless Gateway Cert Manager Role** を選択し、設定を送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws7.png" alt="pir" width={800} height="auto" /></p>

## R1225 ゲートウェイ設定

ローカルコンソールにログインします。デバイスの [クイックスタート](https://wiki.seeedstudio.com/ja/r1225_quick_start/) を参照してログインしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws9.webp" alt="pir" width={800} height="auto" /></p>

### LoRaWAN ネットワーク設定

**LoRa** > **LoRa ネットワーク** に移動します。

**モード**: Basics Station

**ゲートウェイ EUI**: 接続されたゲートウェイの EUI が自動的に取得されます。

**サーバー**: CUPS サーバーまたは LNS サーバーを選択します (CUPS の場合、ポートは 443；LNS の場合、ポートは 8887)。

[CUPS および LNS サーバー](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/) について詳しく見る。

**認証モード**: TLS サーバーおよびクライアント認証

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws10.png" alt="pir" width={800} height="auto" /></p>

設定が完了したら、保存して適用をクリックします。

## ゲートウェイ接続ステータスの確認

ゲートウェイページに移動し、追加したゲートウェイを選択します。

ゲートウェイ詳細ページの LoRaWAN 詳細セクションで、接続ステータスと最後のアップリンクを受信した日時を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws8.png" alt="pir" width={800} height="auto" /></p>

## AWS IoT デバイス設定

### プロファイルの追加

共通のデバイス設定を記述するために、デバイスおよびサービスプロファイルを定義できます。これらのプロファイルは、デバイスが共有する設定パラメータを記述し、それらのデバイスを追加しやすくします。AWS IoT Core for LoRaWAN は、デバイスプロファイルとサービスプロファイルをサポートしています。

#### デバイスプロファイルの追加

**デバイス** > **プロファイル** に移動し、デバイスプロファイルの追加をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

デバイスプロファイル名を入力し、デバイスとゲートウェイに使用している周波数帯 (RfRegion) を選択し、その他の設定はデフォルト値のままにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### サービスプロファイルの追加

**デバイス** > **プロファイル** に移動し、サービスプロファイルの追加をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

各ペイロードに対して RSSI や SNR などの追加のゲートウェイメタデータを受信できるように、AddGWMetaData 設定を有効のままにすることをお勧めします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### 宛先の追加

**デバイス** > **宛先** に移動し、宛先の追加をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

AWS IoT Core メッセージブローカーに公開します。

**権限**: 既存のサービスロールを選択 > IoT Wireless Gateway Cert Manager Role

:::tip 注記
宛先名には、英数字、- (ハイフン)、_ (アンダースコア) のみ使用でき、スペースを含めることはできません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### LoRaWAN デバイスの追加

#### ワイヤレスデバイスの追加

**LPWAN デバイス** > **デバイス** に移動し、ワイヤレスデバイスの追加をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### デバイスの設定

**ワイヤレスデバイス仕様**: OTAAv1.0x

**DevEUI:** `デバイス EUI/APP EUI/APP` キーはデバイスのラベルで確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

#### デバイス接続ステータスの確認

**デバイス** ページに移動し、追加したデバイスを選択します。

ワイヤレスデバイス詳細ページの詳細セクションで、最後のアップリンクを受信した日時を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>
