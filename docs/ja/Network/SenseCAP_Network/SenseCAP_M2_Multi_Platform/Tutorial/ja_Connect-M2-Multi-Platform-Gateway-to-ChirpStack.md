---
description: SenseCAP M2 マルチプラットフォームゲートウェイを ChirpStack に接続する
title: ChirpStack への接続
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

### ChirpStack の設定

ChirpStack は LoRaWAN ネットワーク向けのオープンソースコンポーネントを提供します。これらを組み合わせることで、デバイス管理用のユーザーフレンドリーなウェブインターフェースや統合用の API を含む、すぐに使用可能なソリューションを構築できます。

#### ゲートウェイの追加

開始する前に、[ChirpStack Application Server](https://www.chirpstack.io/application-server/use/login/) に [ログイン](https://www.chirpstack.io/application-server/use/login/)してください。

デフォルトの認証情報は以下の通りです：
ユーザー名: admin  
パスワード: admin

:::tip 注意
まだ [ChirpStack Application Server](https://www.chirpstack.io/project/application-server/) インスタンスを [ChirpStack Network Server](https://www.chirpstack.io/project/network-server/) インスタンスに接続していない場合は、まずこれを行う必要があります。[Network servers](https://www.chirpstack.io/application-server/use/network-servers/) を参照してください。また、ネットワークサーバーと組織を接続するために [Service profile](https://www.chirpstack.io/application-server/use/service-profiles/) を作成する必要があります。
:::

**Gateways > Add gateway** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-gateway.png" alt="pir" width={800} height="auto" /></p>

**Gateway name**: ゲートウェイの名前

**Gateway EUI**: ゲートウェイ EUI はデバイスラベルまたはローカルコンソールで確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_2.png" alt="pir" width={800} height="auto" /></p>




#### デバイスプロファイルの追加

ChirpStack にデバイスを追加する前に、まだ作成していない場合は [Device-profile](https://www.chirpstack.io/application-server/use/device-profiles/) を作成する必要があります。

**Device profile > Add device profile** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>


**Name**: デバイスプロファイルの名前

**Region**: ゲートウェイに応じた地域プランを選択します。

**MAC version**: LoRaWAN 1.0.3

**Regional parameters revision**: A

**ADR algorithm**: デフォルトの ADR アルゴリズム (LoRa のみ)

:::note
デバイスに応じて MAC バージョン / 地域パラメータのリビジョン / ADR アルゴリズムを選択してください。詳細については以下を参照してください：https://lora-alliance.org/resource\_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>





#### デバイスの追加

**Application > Add Application** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>



デバイスを追加したいアプリケーションをクリックします。**Devices** タブの下で **Add device** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>



**Name**: デバイスの名前

**Device EUI**: デバイス EUI はデバイスラベルまたは SenseCAP Mate APP で確認できます。

**Device profile**: 1.2 ステップ1で作成したデバイスプロファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>




### ゲートウェイの設定

Web UI を介してゲートウェイを設定します。まず [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) を確認してローカルコンソールにログインしてください。

#### LoRa ネットワーク設定

**LoRa > LoRa Network** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_8.png" alt="pir" width={800} height="auto" /></p>

**Mode:** Packet Forward

Packet Forwarder 設定：

**Gateway EUI**: 接続されたゲートウェイの EUI を自動的に取得します。

**Server Address**: ChirpStack サーバーのアドレス

**Server Port(Up/Down)**: 1700

その他の設定はデフォルトのままにするか、必要に応じて変更してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_9.png" alt="pir" width={800} height="auto" /></p>



#### チャンネルプラン設定

**LoRa > Channel Plan** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_10.png" alt="pir" width={800} height="auto" /></p>


実際の選択に応じて地域と周波数プランを選択します。

設定後、**Save&Apply** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_11.png" alt="pir" width={800} height="auto" /></p>




### データビュー

#### ゲートウェイデータ

**Gateways** に移動し、確認したいゲートウェイを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>


#### デバイスデータ

LoRaWAN デバイスを ChirpStack に追加した後、デバイスがアクティベート可能 (OTAA の場合) でデータを送信できることを確認してください。

**Applications > Devices** に移動し、確認したいデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>