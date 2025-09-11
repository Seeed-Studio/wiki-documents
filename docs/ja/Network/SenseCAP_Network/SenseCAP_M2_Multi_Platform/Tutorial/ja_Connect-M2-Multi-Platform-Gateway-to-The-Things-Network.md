---
description: SenseCAP M2 マルチプラットフォームゲートウェイを TTN に接続する
title: TTN への接続
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

The Things Network に接続する方法は 2 つあります：Packet Forwarder と Basics™ Station。ゲートウェイを接続する方法を選択してください。

Semtech UDP Packet Forwarder は、Semtech UDP プロトコルを介してサーバーに接続する、オリジナルの LoRaWAN® パケットフォワーダーです。

LoRa Basics™ Station は、ゲートウェイを The Things Stack に接続するための推奨方法です。

## **Packet Forwarder を使用した接続**

Semtech UDP Packet Forwarder は、Semtech UDP プロトコルを介してサーバーに接続する、オリジナルの LoRaWAN® パケットフォワーダーです。

### TTN の設定

* **ステップ 1**: [The Things Stack](https://eu1.cloud.thethings.network/console) にログインします。TTN アカウントをお持ちでない場合は、まず登録してください。

* **ステップ 2**: ゲートウェイを登録します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

**Gateway EUI**: Gateway EUI はデバイスラベルまたはローカルコンソールで確認できます。

**Gateway ID**: ゲートウェイの一意の識別子（ID は小文字、数字、ダッシュのみを含む必要があります）

**Gateway name**: ゲートウェイの名前

**Frequency plan**: ゲートウェイのバージョンに応じた対応する周波数を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set1.png" alt="pir" width={600} height="auto" /></p>

登録が成功した後、概要でゲートウェイを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set2.png" alt="pir" width={600} height="auto" /></p>

### ゲートウェイの設定

Web UI を介してゲートウェイを設定します。まず [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) を確認してローカルコンソールにログインしてください。

* **ステップ 1**: LoRa ネットワーク設定

**LoRa** > **LoRa Network** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 2**: モードを Packet Forward に設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/packet.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 3**: Packet Forwarder の設定:

1. **Gateway EUI**: 接続されたゲートウェイの EUI を自動的に取得します。

2. **Server Address**: 
Semtech UDP Packet Forwarder を使用する場合は 'server-address' を入力します。
'server-address' は The Things Stack のデプロイメントのアドレスです。
詳細は [Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/) を参照してください。

3. **Server Port(Up/Down)**: Up Port と Down Port は通常 1700 です。

その他の設定はデフォルトのままにするか、必要に応じて変更してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/server_address.png" alt="pir" width={600} height="auto" /></p>

**Save&Apply** をクリックして設定を適用します。

* **ステップ 4**: チャンネルプランの設定

**LoRa** > **Channel Plan** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

実際の選択に応じて地域と周波数プランを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/setting3.png" alt="pir" width={600} height="auto" /></p>

設定後、**Save&Apply** をクリックします。

## **Basic Station を使用した接続**

LoRa Basics™ Station は、ゲートウェイを The Things Stack に接続するための推奨方法です。

### TTN 設定

* **ステップ 1**: ゲートウェイを登録する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 2**: 認証された接続を要求する設定を有効化する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/enable_setting.png" alt="pir" width={600} height="auto" /></p>

これにより、TLS が有効な Basic Station または MQTT 接続を使用する場合のみゲートウェイが接続できるようになります。

* **ステップ 3**: API キーを作成する

CUPS または LNS サービス用の API キーを自動的に生成するオプションを選択すると、すぐにゲートウェイを認証できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/APIkey.png" alt="pir" width={600} height="auto" /></p>

必要に応じてサーバーを選択し、「Register gateway」をクリックします。

**LoRaWAN ネットワークサーバー (LNS)**

LNS は、LoRa Basics™ Station ゲートウェイとネットワークサーバー（この場合は The Things Stack）間のデータ接続を確立します。LoRa® のアップリンクおよびダウンリンクフレームは、このデータ接続を通じて交換されます。LNS プロトコルは LoRaWAN データの送受信に必要です。

**構成および更新サーバー (CUPS)**

CUPS は、ネットワークサーバーがゲートウェイをリモートで構成し、ゲートウェイのファームウェアを更新できるようにします。CUPS は LoRaWAN データの送受信には必要ありませんが、ゲートウェイの管理を大幅に簡素化することができます。CUPS を構成すると、LNS の資格情報も自動的に取得され、ゲートウェイ上で LNS が構成されます。

LoRa Basics™ Station に関する詳細情報は、[Semtech の開発者ポータル](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/)をご覧ください。

### ゲートウェイ設定

* **ステップ 1**: LoRa ネットワーク設定  
**LoRa** > **LoRa Network** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 2**: モードを Basics Station に設定する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/basic.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 3**: Basics Station 設定:

1. **Gateway EUI**: 接続されたゲートウェイの EUI を自動的に取得します。

2. **Server**: LNS または CUPS を選択します。  
前のステップでサーバーの詳細を確認してください。

3. **URL:**  
CUPS は URI: https://server-address:443 を使用し、LNS は URI: wss://server-address:8887 を使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/url.png" alt="pir" width={600} height="auto" /></p>

4. **認証モード:** TLS サーバー認証とクライアントトークン  
The Things Stack は TLS サーバー認証とクライアントトークンをサポートしています。これには *.trust* ファイルと *.key* ファイルが必要です。

5. **trust:**  
これは [CA 証明書](https://en.wikipedia.org/wiki/Certificate_authority) であり、ドメインを保護します。  
一般的な証明書を含む .pem ファイルは [Root Certificates Reference](https://www.thethingsindustries.com/docs/reference/root-certificates/) で利用可能です。  
**最小証明書リスト**をダウンロードし、証明書ファイルのデータ内容をコピーします（証明書はテキスト形式で開くことができます）。

6. **token:**
Authorization:Bearer `<Your_API_Key>`

その他の設定はデフォルトのままにするか、必要に応じて変更してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/token.png" alt="pir" width={600} height="auto" /></p>

## ゲートウェイのステータスを確認する
設定が完了した後、ゲートウェイのライブデータを確認することができます。

現在、ゲートウェイが TTN に接続されていることが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/status.png" alt="pir" width={600} height="auto" /></p>