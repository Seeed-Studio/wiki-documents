---
description: R1225 を TTN に接続する
title: TTN への接続
keywords:
  - ゲートウェイ
  - SenseCAP
  - エッジコントローラ
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_ttn
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/30/2026
  author: Kian
createdAt: '2026-03-30'
url: https://wiki.seeedstudio.com/ja/connecting_r1225_to_ttn/
updatedAt: '2026-04-03'
---
# TTN への接続

The Things Network への接続方法は、Packet forward と Basics™ Station の 2 通りがあります。ゲートウェイに適した接続方法を選択してください。

Semtech UDP Packet Forwarder は、元々の LoRaWAN® パケットフォワーダであり、Semtech UDP プロトコルを介してサーバーに接続します。

LoRa Basics™ Station は、ゲートウェイを The Things Stack に接続するための推奨方法です。

## **Packet Forwarder で接続**

Semtech UDP Packet Forwarder は、元々の LoRaWAN® パケットフォワーダであり、Semtech UDP プロトコルを介してサーバーに接続します。

### TTN の設定

- **Step 1**: [The Things Stack](https://eu1.cloud.thethings.network/console) にログインします。TTN アカウントをお持ちでない場合は、まず登録してください。

- **Step 2**: ゲートウェイを登録します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN1.png" alt="pir" width={800} height="auto" /></p>

**Gateway EUI**: Gateway EUI はデバイスラベルまたは Local Console で確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN2.png" alt="pir" width={800} height="auto" /></p>

**Gateway ID**: ゲートウェイ固有の識別子（ID には小文字、数字、ダッシュのみを使用してください）

**Gateway name**: ゲートウェイの名称

**Frequency plan**: 使用しているゲートウェイのバージョンに応じて、対応する周波数を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN3.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイの設定

Web UI からゲートウェイを設定します。まず Local Console にログインするには、[Quick Start](https://wiki.seeedstudio.com/ja/r1225_quick_start/) を参照してください。

- **Step 1**: LoRa ネットワーク設定

`LoRa` > `LoRa Network` に移動します

- **Step 2:** Mode を Packet Forwarder に設定します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN4.png" alt="pir" width={800} height="auto" /></p>

- **Step 3:**Packet Forwarder の設定:

1. **Gateway EUI**: 接続されたゲートウェイの EUI が自動的に取得されます

2. **Server Address**:
Semtech UDP Packet Forwarder を使用する場合は 'server-address' を使用します
'server-address' は、使用している The Things Stack デプロイメントのアドレスです。
詳しくは [Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/) を参照してください。

3. **Server Port(Up/Down)**: Up Port と Down Port は通常 1700 です。

その他の設定はデフォルトのままでも構いませんし、要件に合わせて変更しても構いません。

設定を反映するには **`Save&Apply`** をクリックします。

- **Step 4**: チャンネルプランの設定

`LoRa` > `Channel Plan` に移動します

実際の利用地域に応じて Region と Frequency plan を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN5.png" alt="pir" width={800} height="auto" /></p>

設定後、**`Save&Apply`** をクリックします

## **Basic Station で接続**

LoRa Basics™ Station は、ゲートウェイを The Things Stack に接続するための推奨方法です。

### TTN の設定

- **Step 1**: [The Things Stack](https://eu1.cloud.thethings.network/console) にログインします。TTN アカウントをお持ちでない場合は、まず登録してください。

- **Step 2**: ゲートウェイを登録します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN1.png" alt="pir" width={800} height="auto" /></p>

**Gateway EUI**: Gateway EUI はデバイスラベルまたは Local Console で確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN2.png" alt="pir" width={800} height="auto" /></p>

**Gateway ID**: ゲートウェイ固有の識別子（ID には小文字、数字、ダッシュのみを使用してください）

**Gateway name**: ゲートウェイの名称

**Frequency plan**: 使用しているゲートウェイのバージョンに応じて、対応する周波数を選択します

- **Step 3**:Require authenticated connection を有効にします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN6.png" alt="pir" width={800} height="auto" /></p>

これにより、TLS 対応の Basic Station または MQTT 接続を使用するゲートウェイのみが接続できるようになります。

- **Step 4:** API キーを作成します

CUPS または LNS サービス向けの API キーを自動生成するオプションを選択すると、そのままゲートウェイに権限を付与できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN7.png" alt="pir" width={800} height="auto" /></p>

ニーズに応じて Server を選択し、"Register gateway" をクリックします

#### (LNS)LoRaWAN Network Server

LNS は、LoRa Basics™ Station ゲートウェイとネットワークサーバー（この場合は The Things Stack）の間にデータ接続を確立します。LoRa® のアップリンクおよびダウンリンクフレームは、このデータ接続を介してやり取りされます。LoRaWAN データの送受信には LNS プロトコルが必要です。

#### (CUPS)Configuration and Update Server 

CUPS は、ネットワークサーバーがゲートウェイをリモートで設定し、ゲートウェイのファームウェアを更新できるようにします。CUPS は LoRaWAN データの送受信に必須ではありませんが、ゲートウェイ管理を大幅に簡素化できます。CUPS を設定すると、LNS の認証情報も自動的に取得され、ゲートウェイ上の LNS が構成されます。

LoRa Basics™ Station の詳細については、[Semtech's Developer Portal](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/) を参照してください。

### ゲートウェイの設定

- **Step 1**: LoRa ネットワーク設定
**`LoRa`** > **`LoRa Network`** に移動します

- **Step 2**:Mode を Basics Station に設定します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN8.png" alt="pir" width={800} height="auto" /></p>

ここで入力する認証情報は、TTN プラットフォームで選択した API キーと一致している必要があります。

- **Step 3**:Basic Station の設定:

1. **Gateway EUI**: 接続されたゲートウェイの EUI が自動的に取得されます

2. **Server**: LNS か CUPS を選択します
サーバーの詳細については前のステップを確認してください。

3. **URL:**
CUPS は URI として https://server-address:443 を使用し、LNS は URI として wss://server-address:8887 を使用します

4. **Authentication Mode:** TLS server authentication and Client token
The Things Stack は TLS server authentication と client token をサポートしています。これには *.trust* ファイルと *.key* ファイルが必要です。

5. **trust:** これはドメインを保護するための[認証局 (CA) 証明書](https://en.wikipedia.org/wiki/Certificate_authority)です。
一般的な証明書を含む .pem ファイルは、[Root Certificates Reference](https://www.thethingsindustries.com/docs/reference/root-certificates/) で入手できます。
**minimal certificate list** をダウンロードし、証明書ファイルのデータ内容をコピーします（証明書はテキスト形式で開くことができます）。

6. **token:** Authorization:Bearer `<Your_API_Key>`

その他の設定はデフォルトのままでも構いませんし、要件に合わせて変更しても構いません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN9.png" alt="pir" width={800} height="auto" /></p>

## ゲートウェイステータスの確認

設定が完了したら、ゲートウェイのライブデータを確認できます。

これでゲートウェイが TTN に接続されていることが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN.png" alt="pir" width={800} height="auto" /></p>