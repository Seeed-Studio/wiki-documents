---
description: SenseCAP M2 Multi-Platform Gateway を TTN に接続する
title: TTN への接続
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network
last_update:
  date: 07/14/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network/
---
The Things Network に接続する方法は Packet forward と Basics™ Station の 2 つがあります。ゲートウェイに接続する方法を選択してください。

Semtech UDP Packet Forwarder は元々の LoRaWAN® パケットフォワーダであり、Semtech UDP プロトコルを介してサーバーに接続します。

LoRa Basics™ Station はゲートウェイを The Things Stack に接続するために推奨される方法です。

## **Packet Forwarder 経由で接続**

Semtech UDP Packet Forwarder は元々の LoRaWAN® パケットフォワーダであり、Semtech UDP プロトコルを介してサーバーに接続します。

### TTN 設定

- **Step 1**: [The Things Stack](https://eu1.cloud.thethings.network/console) にログインします。TTN アカウントをお持ちでない場合は、まず登録してください。

- **Step 2**: ゲートウェイを登録します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

**Gateway EUI**: Gateway EUI はデバイスラベルまたはローカルコンソールで確認できます

**Gateway ID**: ゲートウェイの一意の識別子（ID には小文字、数字、ハイフンのみを含める必要があります）

**Gateway name**: ゲートウェイの名前

**Frequency plan**: ゲートウェイのバージョンに応じて対応する周波数を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set1.png" alt="pir" width={600} height="auto" /></p>

登録に成功すると、概要でゲートウェイを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set2.png" alt="pir" width={600} height="auto" /></p>

### ゲートウェイ設定

Web UI を通してゲートウェイを設定します。まずローカルコンソールにログインするために、[Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) を確認してください。

- **Step 1**: LoRa ネットワーク設定

**LoRa** > **LoRa** **Network** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **Step 2:** モードを Packet Forward に設定します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/packet.png" alt="pir" width={600} height="auto" /></p>

- **Step 3:** Packet Forwarder 設定:

1. **Gateway EUI**: 接続されているゲートウェイの EUI を自動的に取得します

2. **Server Address**:
Semtech UDP Packet Forwarder には 'server-address' を使用します
'server-address' は The Things Stack デプロイメントのアドレスです。
詳細は [Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/) を参照してください。

3. **Server Port(Up/Down)**: Up ポートと Down ポートは通常 1700 です。

その他の設定はデフォルトのままにするか、要件に合わせて変更できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/server_address.png" alt="pir" width={600} height="auto" /></p>

設定を適用するには **Save&Apply** をクリックします。

- **Step 4**: チャネルプラン設定

**LoRa** > **LoRa Network** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

実際の選択に応じて、リージョンおよび周波数プランを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/setting3.png" alt="pir" width={600} height="auto" /></p>

設定後、**Save&Apply** をクリックします

## **Basic Station 経由で接続**

LoRa Basics™ Station はゲートウェイを The Things Stack に接続するために推奨される方法です。

### TTN 設定

- **Step 1**: ゲートウェイを登録します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

- **Step 2**: Require authenticated connection を有効化します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/enable_setting.png" alt="pir" width={600} height="auto" /></p>

これにより、TLS 対応の Basic Station または MQTT 接続を使用する場合にのみゲートウェイの接続が許可されます。

- **Step 3:** API キーを作成します

オプションを選択して CUPS または LNS サービス用の API キーを自動生成すると、すぐにゲートウェイを認可できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/APIkey.png" alt="pir" width={600} height="auto" /></p>

必要に応じてサーバーを選択し、"Register gateway" をクリックします

**LoRaWAN Network Server (LNS)**

LNS は LoRa Basics™ Station ゲートウェイとネットワークサーバー（この場合は The Things Stack）との間にデータ接続を確立します。LoRa® のアップリンクおよびダウンリンクフレームは、このデータ接続を介して交換されます。LoRaWAN データの送受信には LNS プロトコルが必要です。

**Configuration and Update Server (CUPS)**

CUPS により、ネットワークサーバーはゲートウェイをリモートで構成し、ゲートウェイのファームウェアを更新できます。CUPS は LoRaWAN データの送受信には必須ではありませんが、ゲートウェイの管理を大幅に簡素化できます。CUPS を構成すると、LNS 資格情報も自動的に取得され、ゲートウェイ上の LNS が構成されます。

LoRa Basics™ Station の詳細情報は [Semtech's Developer Portal](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/) で確認できます。

### ゲートウェイ設定

- **Step 1**: LoRa ネットワーク設定
**LoRa** > **LoRa Network** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **Step 2**: モードを Basics Station に設定します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/basic.png" alt="pir" width={600} height="auto" /></p>

- **Step 3**: Basic Station 設定:

1. **Gateway EUI**: 接続されているゲートウェイの EUI を自動的に取得します

2. **Server**: LNS または CUPS を選択します
サーバーの詳細については前のステップを確認してください。

3. **URL:**
CUPS は URI: https://server-address:443 を使用し、LNS は URI: wss://server-address:8887 を使用します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/url.png" alt="pir" width={600} height="auto" /></p>

4. **Authentication Mode:** TLS サーバー認証およびクライアントトークン
The Things Stack は TLS サーバー認証およびクライアントトークンをサポートしています。これには *.trust* ファイルと *.key* ファイルが必要です。

5. **trust:** これはドメインを保護する[認証局 (CA) 証明書](https://en.wikipedia.org/wiki/Certificate_authority)です。

.pem ファイルに、一般的な証明書が含まれており、[Root Certificates Reference](https://www.thethingsindustries.com/docs/reference/root-certificates/) で入手できます。

最小証明書リストをダウンロードし、その後、証明書ファイルのデータ内容（証明書はテキスト形式で開くことができます）をコピーします。

6. **token:** Authorization:Bearer `<Your_API_Key>`

その他の設定はデフォルトのままにするか、要件に合わせて変更できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/token.png" alt="pir" width={600} height="auto" /></p>

## ゲートウェイステータスを確認する

設定完了後、ゲートウェイのライブデータを表示できます。

ゲートウェイが現在 TTN に接続されていることが確認できます。
