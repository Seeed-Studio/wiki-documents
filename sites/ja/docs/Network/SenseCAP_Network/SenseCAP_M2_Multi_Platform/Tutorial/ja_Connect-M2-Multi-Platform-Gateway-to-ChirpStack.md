---
description: SenseCAP M2 マルチプラットフォームゲートウェイをChirpStackに接続する
title: ChirpStackへの接続
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack
last_update:
  date: 08/29/2023
  author: Jessie
---


### ChirpStack設定

ChirpStackはLoRaWANネットワーク用のオープンソースコンポーネントを提供します。これらを組み合わせることで、デバイス管理用のユーザーフレンドリーなWebインターフェースと統合用のAPIを含む、すぐに使用できるソリューションを形成します。

#### ゲートウェイの追加

開始する前に、[ChirpStack Application Server](https://www.chirpstack.io/application-server/)に[ログイン](https://www.chirpstack.io/application-server/use/login/)してください。

デフォルトの認証情報は：ユーザー名: admin；パスワード: admin

:::tip Note
[ChirpStack Application Server](https://www.chirpstack.io/project/application-server/)インスタンスを[ChirpStack Network Server](https://www.chirpstack.io/project/network-server/)インスタンスにまだ接続していない場合は、最初にこれを行う必要があります。[Network servers](https://www.chirpstack.io/application-server/use/network-servers/)を参照してください。また、[Service profile](https://www.chirpstack.io/application-server/use/service-profiles/)を作成して、組織をネットワークサーバーに接続する必要があります。
:::

**Gateways > Add gateway**に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-gateway.png" alt="pir" width={800} height="auto" /></p>

**Gateway name**: ゲートウェイの名前

**Gateway EUI**: Gateway EUIはデバイスラベルまたはLocal Consoleで確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_2.png" alt="pir" width={800} height="auto" /></p>

#### デバイスプロファイルの追加

デバイスをChirpStackに追加する前に、まだ作成していない場合は[Device-profile](https://www.chirpstack.io/application-server/use/device-profiles/)を作成する必要があります。

**Device profile> Add device profile**に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**Name**: デバイスプロファイルの名前

**Region**: ゲートウェイに応じてRegion planを選択します。

**MAC version**: LoRaWAN 1.0.3

**Regional parameters revision**: A

**ADR algorithm**: Default ADR algorithm( LoRa only)

:::note
デバイスに応じてMAC version/Regional parameters revision/ADR algorithmを選択してください。詳細については、https://lora-alliance.org/resource_hub/ を参照してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

#### デバイスの追加

**Application > Add Application**に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

デバイスを追加したいアプリケーションをクリックします。**Devices**タブの下で、**Add device**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**Name**: デバイスの名前

**Device EUI**: Device EUIはデバイスラベルまたはSenseCAP Mate APPで確認できます

**Device profile**: 1.2ステップ1で作成したデバイスプロファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイ設定

Web UIを介してゲートウェイを設定します。最初にLocal Consoleにログインするには、[Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)を確認してください。

#### LoRaネットワーク設定

**LoRa > LoRa Network**に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_8.png" alt="pir" width={800} height="auto" /></p>

**Mode:** Packet Forward

Packet Forwarder Settings:

**Gateway EUI**: 接続されたゲートウェイのEUIを自動的に取得します

**Server Address**: ChirpStackサーバーアドレス

**Server Port(Up/Down)**: 1700

その他の設定はデフォルトのままにするか、要件に合わせて変更できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_9.png" alt="pir" width={800} height="auto" /></p>

#### チャンネルプラン設定

**LoRa > Channel Plan**に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_10.png" alt="pir" width={800} height="auto" /></p>

実際の選択に応じてRegionとFrequency planを選択します。

設定後、**Save&Apply**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_11.png" alt="pir" width={800} height="auto" /></p>

### データ表示

#### ゲートウェイデータ

**Gateways**に移動し、確認したいゲートウェイを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

#### デバイスデータ

LoRaWANデバイスをChirpStackに追加した後、デバイスがアクティベート（OTAAの場合）してデータを送信できることを検証します。

**Applications** > **Devices**に移動し、確認したいデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>