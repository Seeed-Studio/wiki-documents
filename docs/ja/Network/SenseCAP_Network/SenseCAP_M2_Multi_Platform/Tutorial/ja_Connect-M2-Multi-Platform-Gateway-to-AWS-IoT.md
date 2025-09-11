---
description: SenseCAP M2 Multi-Platform Gateway を AWS に接続する
title: AWS IoT への接続
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT
last_update:
  date: 08/29/2023
  author: Jessie
---


## AWS IoT 設定

[AWS](https://signin.aws.amazon.com) にログインします。
AWS アカウントをお持ちでない場合は、まず新しいアカウントを作成してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### ゲートウェイの追加


**Internet of Things** > **IoT Core** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS1.PNG" alt="pir" width={800} height="auto" /></p>

**LPWAN devices** > **Gateway** を選択してゲートウェイを追加します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS4.PNG" alt="pir" width={800} height="auto" /></p>

**Gateway's EUI:** ゲートウェイ EUI はデバイスラベルまたは[ローカルコンソール](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)で確認できます

**Frequency band:** 実際の選択に応じて周波数プランを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>


#### 証明書の作成

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS7.PNG" alt="pir" width={800} height="auto" /></p>

証明書ファイルとサーバー信頼証明書をダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS5.PNG" alt="pir" width={800} height="auto" /></p>

ロールを選択します：**IoT Wireless Gateway Cert Manager Role**、その後設定を送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS9.PNG" alt="pir" width={800} height="auto" /></p>

#### ゲートウェイ接続状態の確認

Gateways ページに移動し、追加したゲートウェイを選択します。

Gateway details ページの LoRaWAN specific details セクションで、接続状態と最後のアップリンクを受信した日時を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS8.PNG" alt="pir" width={800} height="auto" /></p>

### プロファイルの追加

デバイスプロファイルとサービスプロファイルを定義して、一般的なデバイス設定を記述できます。これらのプロファイルは、デバイス間で共有される設定パラメータを記述し、それらのデバイスの追加を容易にします。AWS IoT Core for LoRaWAN はデバイスプロファイルとサービスプロファイルをサポートしています。

#### デバイスプロファイルの追加

**Devices** > **Profiles** に移動し、Add device profile をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

Device profile name を入力し、デバイスとゲートウェイで使用している Frequency band (RfRegion) を選択し、その他の設定はデフォルト値のままにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### サービスプロファイルの追加

**Devices** > **Profiles** に移動し、Add service profile をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

AddGWMetaData 設定を有効にしておくことをお勧めします。これにより、各ペイロードに対してデータ送信の RSSI や SNR などの追加のゲートウェイメタデータを受信できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### 宛先の追加

**Devices** > **Destination** に移動し、Add destination をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

AWS IoT Core メッセージブローカーに公開

**Permissions**: 既存のサービスロールを選択 > IoT Wireless Gateway Cert Manager Role

:::tip Note
宛先名には英数字、- (ハイフン)、_ (アンダースコア) 文字のみを使用でき、スペースを含めることはできません。
:::


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### LoRaWAN デバイスの追加

#### ワイヤレスデバイスの追加

**LPWAN devices** > **Devices** に移動し、Add wireless device をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### デバイスの設定

**Wireless device specification**: OTAAv1.0x 

**DevEUI:** `device EUI/APP EUI/APP` キーはデバイスラベルで確認できます。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>


#### デバイス接続状態の確認

**Devices** ページに移動し、追加したデバイスを選択します。

Wireless devices details ページの Details セクションで、最後のアップリンクを受信した日時を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## ゲートウェイ設定

ローカルコンソールにログインして、デバイスの[クイックスタート](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)でログイン方法を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS22.PNG" alt="pir" width={800} height="auto" /></p>

### LoRaWANネットワーク設定

**LoRa** > **LoRa Network**に移動します

**Mode**: Basics Station

**Gateway EUI**: 接続されたゲートウェイのEUIが自動的に取得されます

**Server**: CUPSサーバーまたはLNSサーバーを選択します（CUPSの場合はポート443、LNSの場合はポート8887）

[CUPSとLNSサーバー](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)について詳しく学ぶ

**Authenentication Mode**: TLS Server and Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>


設定が完了したら、Save&Applyをクリックします。

