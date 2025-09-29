---
description: SenseCAP M2 マルチプラットフォームゲートウェイを TTN に接続する
title: TTN への接続
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network
last_update:
  date: 07/14/2023
  author: Jessie
---


The Things Networkに接続する方法は2つあります：パケットフォワードとBasics™ Stationです。ゲートウェイを接続する方法を選択してください。

Semtech UDP Packet ForwarderはオリジナルのLoRaWAN®パケットフォワーダーで、Semtech UDPプロトコルを通じてサーバーに接続します。

LoRa Basics™ StationはゲートウェイをThe Things Stackに接続する推奨方法です。

## **パケットフォワーダー経由での接続**

Semtech UDP Packet ForwarderはオリジナルのLoRaWAN®パケットフォワーダーで、Semtech UDPプロトコルを通じてサーバーに接続します。

### TTN 設定

- **ステップ1**: [The Things Stack](https://eu1.cloud.thethings.network/console)にログインします。TTNアカウントをお持ちでない場合は、まず登録してください。

- **ステップ2**: ゲートウェイを登録します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

**Gateway EUI**: Gateway EUIはデバイスラベルまたはローカルコンソールで確認できます

**Gateway ID**: ゲートウェイの一意の識別子（IDは小文字、数字、ダッシュのみを含む必要があります）

**Gateway name**: ゲートウェイの名前

**Frequency plan**: ゲートウェイのバージョンに応じて対応する周波数を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set1.png" alt="pir" width={600} height="auto" /></p>

登録が成功すると、概要でゲートウェイを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set2.png" alt="pir" width={600} height="auto" /></p>

### ゲートウェイ設定

Web UIを介してゲートウェイを設定します。まず[クイックスタート](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)を確認してローカルコンソールにログインしてください。

- **ステップ1**: LoRaネットワーク設定

**LoRa** > **LoRa** **Network**に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **ステップ2:** モードをPacket Forwardに設定します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/packet.png" alt="pir" width={600} height="auto" /></p>

- **ステップ3:**パケットフォワーダー設定：

1. **Gateway EUI**: 接続されたゲートウェイのEUIを自動的に取得します

2. **Server Address**:
Semtech UDP Packet Forwarderには'server-address'を使用します
'server-address'はThe Things Stackデプロイメントのアドレスです。
詳細については[Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/)を参照してください。

3. **Server Port(Up/Down)**: Up PortとDown Portは通常1700です。

その他の設定はデフォルトのままにするか、要件に合わせて変更できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/server_address.png" alt="pir" width={600} height="auto" /></p>

**Save&Apply**をクリックして設定を適用します。

- **ステップ4**: チャンネルプラン設定

**LoRa** > **LoRa Network**に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

実際の選択に応じてRegionとFrequency planを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/setting3.png" alt="pir" width={600} height="auto" /></p>

設定後、**Save&Apply**をクリックします

## **Basic Station経由での接続**

LoRa Basics™ Stationは、ゲートウェイをThe Things Stackに接続する推奨方法です。

### TTN 設定

- **ステップ1**: ゲートウェイの登録

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ2**: 認証済み接続を要求を有効化

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/enable_setting.png" alt="pir" width={600} height="auto" /></p>

これにより、TLS対応のBasic StationまたはMQTT接続を使用する場合のみ、ゲートウェイの接続が許可されます。

- **ステップ3:** APIキーの作成

CUPSまたはLNSサービス用のAPIキーを自動生成するオプションを選択し、すぐにゲートウェイを認証できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/APIkey.png" alt="pir" width={600} height="auto" /></p>

必要に応じてサーバーを選択し、「Register gateway」をクリックします。

**LoRaWAN Network Server (LNS)**

LNSは、LoRa Basics™ Stationゲートウェイとネットワークサーバー（この場合はThe Things Stack）間のデータ接続を確立します。LoRa®のアップリンクおよびダウンリンクフレームは、このデータ接続を通じて交換されます。LNSプロトコルは、LoRaWANデータの送受信に必要です。

**Configuration and Update Server (CUPS)**

CUPSにより、ネットワークサーバーはゲートウェイをリモートで設定し、ゲートウェイファームウェアを更新できます。CUPSはLoRaWANデータの送受信には必須ではありませんが、ゲートウェイの管理を大幅に簡素化できます。CUPSを設定すると、LNS認証情報も自動的に取得され、ゲートウェイでLNSが設定されます。

LoRa Basics™ Stationの詳細情報は、[Semtechの開発者ポータル](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/)で入手できます。

### ゲートウェイ設定

- **ステップ1**: LoRaネットワーク設定
**LoRa** > **LoRa Network**に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **ステップ2**: モードをBasics Stationに設定

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/basic.png" alt="pir" width={600} height="auto" /></p>

- **ステップ3**: Basic Station設定:

1. **Gateway EUI**: 接続されたゲートウェイのEUIを自動的に取得します

2. **Server**: LNSまたはCUPSを選択
サーバーの詳細については、前のステップを確認してください。

3. **URL:**
CUPSはURI: https://server-address:443 を使用し、LNSはURI: wss://server-address:8887を使用します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/url.png" alt="pir" width={600} height="auto" /></p>

4. **Authentication Mode:** TLSサーバー認証とクライアントトークン
The Things StackはTLSサーバー認証とクライアントトークンをサポートしています。これには*.trust*ファイルと*.key*ファイルが必要です。

5. **trust:** これは、ドメインを保護する[CA証明書](https://en.wikipedia.org/wiki/Certificate_authority)です。
一般的な証明書を含む.pemファイルは、[Root Certificates Reference](https://www.thethingsindustries.com/docs/reference/root-certificates/)で入手できます。
**minimal certificate list**をダウンロードし、証明書ファイルのデータ内容をコピーします（証明書はテキスト形式で開くことができます）。

6. **token:** Authorization:Bearer `<Your_API_Key>`

その他の設定はデフォルトのままにするか、要件に合わせて変更できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/token.png" alt="pir" width={600} height="auto" /></p>

## ゲートウェイステータスの確認

設定が完了したら、ゲートウェイのライブデータを表示できます。

ゲートウェイがTTNに接続されていることが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/status.png" alt="pir" width={600} height="auto" /></p>
