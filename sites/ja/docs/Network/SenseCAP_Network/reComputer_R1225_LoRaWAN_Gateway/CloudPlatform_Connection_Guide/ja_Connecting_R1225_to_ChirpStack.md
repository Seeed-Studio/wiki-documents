---
description: R1225 を ChirpStack に接続する
title: ChirpStack への接続
keywords:
  - Gateway
  - SenseCAP
  - Edge Controller
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_chirpstack
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/30/2026
  author: Kian
createdAt: '2026-03-30'
url: https://wiki.seeedstudio.com/ja/connecting_r1225_to_chirpstack/
updatedAt: '2026-03-30'
---
## ChirpStack 設定

ChirpStack は LoRaWAN ネットワーク向けのオープンソースコンポーネントを提供します。これらを組み合わせることで、デバイス管理用のユーザーフレンドリーな Web インターフェースと統合用 API を含む、すぐに使えるソリューションを構成できます。

### ゲートウェイの追加

開始する前に、[ChirpStack Application Server](https://www.chirpstack.io/application-server/) に [Login](https://www.chirpstack.io/application-server/use/login/) してください。

デフォルトの認証情報は次のとおりです:Username: admin;Password: admin

:::tip Note
まだお使いの [ChirpStack Application Server](https://www.chirpstack.io/project/application-server/) インスタンスを [ChirpStack Network Server](https://www.chirpstack.io/project/network-server/) インスタンスに接続していない場合は、まずこれを行う必要があります。[Network servers](https://www.chirpstack.io/application-server/use/network-servers/) を参照してください。また、[Service profile](https://www.chirpstack.io/application-server/use/service-profiles/) を作成して、組織を Network Server に接続する必要があります。
:::

`Gateway` > `Add gateway` に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack4.png" alt="pir" width={800} height="auto" /></p>

`Gateway Name` と `Gateway ID (EUI: 64)` を入力します

**Gateway name**: ゲートウェイの名前

**Gateway EUI**: Gateway EUI はデバイスラベルまたはローカルコンソールで確認できます

**Stats interval(secs)**: ゲートウェイが統計情報を送信する想定の間隔（秒）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack5.png" alt="pir" width={800} height="auto" /></p>

その後、`Submit` をクリックします

### デバイスプロファイルの追加

デバイスを ChirpStack に追加する前に、まだ作成していない場合は [Device-profile](https://www.chirpstack.io/application-server/use/device-profiles/) を作成する必要があります。

**`Device profile` > `Add device profile`** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**Name**: デバイスプロファイルの名前

**Region**: ゲートウェイに応じてリージョンプランを選択します。

**MAC version**: LoRaWAN 1.0.3

**Regional parameters revision**: A

**ADR algorithm**: デフォルト ADR アルゴリズム（LoRa のみ）

:::note
MAC version/Regional parameters revision/ADR algorithm はデバイスに応じて選択してください。詳細は https://lora-alliance.org/resource_hub/ を参照してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

### デバイスの追加

**`Application` > `Add Application`** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

デバイスを追加したいアプリケーションをクリックします。**Devices** タブの下で、**Add device** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**Name**: デバイスの名前

**Device EUI**: Device EUI はデバイスラベルまたは SenseCAP Mate APP で確認できます

**Device profile**: 1.2 手順 1 で作成したデバイスプロファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

## ゲートウェイ設定

Web UI からゲートウェイを設定します。まずローカルコンソールにログインするには、[Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) を確認してください。

### LoRa ネットワーク設定

**LoRa > LoRa Network** に移動します

**Mode:** Packet Forward

Packet Forwarder 設定:

**Gateway EUI**: 接続されているゲートウェイの EUI を自動的に取得します

**Server Address**: ChirpStack サーバーのアドレス

**Server Port(Up/Down)**: 1700

その他の設定はデフォルトのままでも構いませんし、要件に合わせて変更することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/chirpstack_packet_forwarder.png" alt="pir" width={800} height="auto" /></p>

### チャネルプラン設定

**`LoRa` > `Channel Plan`** に移動します


実際の選択に応じてリージョンと周波数プランを選択します。

設定後、**Save&Apply** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/chirpstack_channel_plan.png" alt="pir" width={800} height="auto" /></p>

## データ表示

### ゲートウェイデータ

**`Gateways`** に移動し、確認したいゲートウェイを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

### デバイスデータ

LoRaWAN デバイスを ChirpStack に追加したら、デバイスがアクティベート可能（OTAA の場合）であり、データを送信できることを確認します。

**Applications** > **Devices** に移動し、確認したいデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>