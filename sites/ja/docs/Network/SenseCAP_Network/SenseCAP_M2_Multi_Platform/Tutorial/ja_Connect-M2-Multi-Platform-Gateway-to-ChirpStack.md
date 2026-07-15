---
description: SenseCAP M2 Multi-Platform Gateway を ChirpStack に接続する
title: ChirpStack への接続
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack
last_update:
  date: 08/29/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/
---
### ChirpStack の設定

ChirpStack は、LoRaWAN ネットワーク向けのオープンソースコンポーネントを提供します。これらを組み合わせることで、デバイス管理用の使いやすい Web インターフェースと、統合用の API を含む、すぐに利用できるソリューションを構成できます。

#### ゲートウェイの追加

開始する前に、[ChirpStack Application Server](https://www.chirpstack.io/application-server/) に [Login](https://www.chirpstack.io/application-server/use/login/) してください。

デフォルトの認証情報は次のとおりです：Username: admin;Password: admin

:::tip Note
まだお使いの [ChirpStack Application Server](https://www.chirpstack.io/project/application-server/) インスタンスを [ChirpStack Network Server](https://www.chirpstack.io/project/network-server/) インスタンスに接続していない場合は、まずそれを行う必要があります。[Network servers](https://www.chirpstack.io/application-server/use/network-servers/) を参照してください。また、[Service profile](https://www.chirpstack.io/application-server/use/service-profiles/) を作成して、組織を Network Server に接続する必要があります。
:::

**Gateways > Add gateway** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-gateway.png" alt="pir" width={800} height="auto" /></p>

**Gateway name**: ゲートウェイの名前

**Gateway EUI**: Gateway EUI はデバイスラベルまたはローカルコンソールで確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_2.png" alt="pir" width={800} height="auto" /></p>

#### デバイスプロファイルの追加

デバイスを ChirpStack に追加する前に、まだ作成していない場合は [Device-profile](https://www.chirpstack.io/application-server/use/device-profiles/) を作成する必要があります。

**Device profile > Add device profile** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**Name**: デバイスプロファイルの名前

**Region**: ゲートウェイに応じて Region プランを選択します。

**MAC version**: LoRaWAN 1.0.3

**Regional parameters revision**: A

**ADR algorithm**: デフォルトの ADR アルゴリズム（LoRa のみ）

:::note
MAC version / Regional parameters revision / ADR algorithm は、使用するデバイスに応じて選択してください。詳細については https://lora-alliance.org/resource_hub/ を参照してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

#### デバイスの追加

**Application > Add Application** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

デバイスを追加したいアプリケーションをクリックします。**Devices** タブで、**Add device** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**Name**: デバイスの名前

**Device EUI**: Device EUI はデバイスラベルまたは SenseCAP Mate APP で確認できます

**Device profile**: 手順 1.2 の step1 で作成したデバイスプロファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイの設定

Web UI を介してゲートウェイを構成します。まずローカルコンソールにログインするには、[Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) を確認してください。

#### LoRa ネットワーク設定

**LoRa > LoRa Network** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_8.png" alt="pir" width={800} height="auto" /></p>

**Mode:** Packet Forward

Packet Forwarder 設定:

**Gateway EUI**: 接続されているゲートウェイの EUI が自動的に取得されます

**Server Address**: ChirpStack サーバーのアドレス

**Server Port(Up/Down)**: 1700

その他の設定はデフォルトのままにするか、要件に合わせて変更できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_9.png" alt="pir" width={800} height="auto" /></p>

#### チャネルプラン設定

**LoRa > Channel Plan** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_10.png" alt="pir" width={800} height="auto" /></p>

実際の選択に応じて Region と周波数プランを選択します。

設定後、**Save&Apply** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_11.png" alt="pir" width={800} height="auto" /></p>

### データの表示

#### ゲートウェイのデータ

**Gateways** に移動し、確認したいゲートウェイを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

#### デバイスのデータ

LoRaWAN デバイスを ChirpStack に追加した後、デバイスが（OTAA の場合は）アクティベーションでき、データを送信できることを確認します。

**Applications** > **Devices** に移動し、確認したいデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>
