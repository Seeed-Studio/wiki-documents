---
description: SenseCAP T1000 トラッカーを Loriot に接続する方法
title: Loriot に接続する
keywords:
- トラッカー
- Loriot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_Tracker_Loriot
last_update:
  date: 05/15/2025
  author: KeweiLee
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[LORIOT](https://docs.loriot.io/display/NMS/Getting+Started) LoRAWAN ネットワークサーバー (LNS) はハードウェアに依存せず、市場にあるすべての LoRaWAN® ゲートウェイとセンサーをサポートします。

:::info
Loriot アカウントをお持ちでない場合は、[こちら](https://loriot.io/register.html)にアクセスし、お住まいの地域の LORIOT Community Public Servers のいずれかを選択して新しいアカウントを登録してください。
:::

## ネットワークを追加する

ネットワークは単に LoRaWAN ゲートウェイのコレクションであり、ゲートウェイを効率的に監視および管理する環境を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddNetwork.png" alt="pir" width={800} height="auto" /></p>

新しいゲートウェイを追加する際には、それをネットワークに割り当てる必要があります。それは単独でも、他のゲートウェイのコレクションと一緒でも構いません。

ゲートウェイをネットワークにグループ化する一般的な方法は、地理的な場所、モデル、クライアント、または最適な構造に基づいて行います。

アカウントのゲートウェイ制限内であれば、ネットワークに含めるゲートウェイの数に制限はありませんが、各ゲートウェイは単一のネットワークにのみ属することができます。

### 最初のゲートウェイを追加する

最初のゲートウェイを追加して、LoRaWAN ネットワークを開始しましょう！ Loriot の [ステップバイステップガイド](https://docs.loriot.io/display/NMS/Register+a+Gateway+or+Base+Station) に従って、ゲートウェイまたはベースステーションを登録する方法を確認することもできます。

ここでは例として、ゲートウェイ（Basics Station Semtech）を作成します。`Network` に移動し、先ほど追加したネットワークをクリックします。その後、`Add Gateway` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddGateway.png" alt="pir" width={800} height="auto" /></p>

ページの下半分にゲートウェイのリストが表示されます。該当するゲートウェイモデルをクリックして選択します。
ゲートウェイを登録するには、ゲートウェイの eth0 MAC アドレス（コロンで区切られた 6 オクテット）を入力する必要があります。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/NInfo.png" alt="pir" width={800} height="auto" /></p>

最後に、ゲートウェイの位置を設定します。これは、地図上で位置を選択するか、住所を手動で登録するために必要な情報を入力することで定義できます。

### ゲートウェイ証明書を設定する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/ConfigureGateway.png" alt="pir" width={800} height="auto" /></p>

`Certificate` ページでは、ネットワークサーバーアドレス、ネットワークサーバーポートを確認し、ゲートウェイモデルを設定するために必要な TLS CA 証明書をダウンロードまたはコピーすることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/Certificate.png" alt="pir" width={800} height="auto" /></p>

ゲートウェイのユーザーインターフェースで、動作モードとして「LoRa Basics Station」を選択します。前のステップで取得した情報を使用して、アドレス、ポート、サーバー証明書を確実に設定してください。これにより、ゲートウェイと LORIOT ネットワーク管理システム間の接続が確立されます。

LORIOT の UI に戻り、LoRa Basics™ Station がオンラインであり、LORIOT ネットワーク管理システムと正常に機能していることを確認してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/GatewayOnline.png" alt="pir" width={800} height="auto" /></p>

## アプリケーションを追加する

[アプリケーション](https://docs.loriot.io/display/NMS/Create+a+New+Application) は、デバイスを登録、管理、整理し、デバイスデータの出力先を選択する場所です。
新しいデバイスを追加する際には、それをアプリケーションに割り当てます。これにより、サーバーはデバイスが登録されているアプリケーションと、選択したデータ出力の詳細を認識します。

ユーザーアカウントのデバイス制限を超えない限り、センサーの種類やメーカーに関係なく、任意の数のデバイスをアプリケーションに追加できます。

通常、アプリケーションには特定のユースケース（例：スマートビルディング内のすべてのセンサー）や同じ種類のデバイス（例：温度センサー）のすべてのデバイスが含まれます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddApplicaiton.png" alt="pir" width={800} height="auto" /></p>

### 最初のデバイスを追加する（SenseCAP T1000 トラッカー）

`Enroll Device` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddDevice.png" alt="pir" width={800} height="auto" /></p>

LORIOT ネットワークサーバーは、LoRaWAN 1.0.x および 1.1 デバイスの両方をサポートしています。デバイスは 2 つの異なる登録プロセスを通じて追加できます。ほとんどのデバイスには OTAA（Over-The-Air-Activation）が推奨されますが、ABP（Activation by Personalization）も利用可能です。SenseCAP Mate アプリの Bluetooth を使用してトラッカーに正常に接続した後、このタブで OTAA 情報を取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={600} height="auto" /></p>

プラットフォームを他のプラットフォームに設定し、Device EUI/APP EUI/APP Key をコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/OTAAInfo.png" alt="pir" width={400} height="auto" /></p>

最後に、`Enroll` を選択します。デバイスを追加すると、Loriot 上でデータストリームを確認できるようになります。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/DeviceDetails.png" alt="pir" width={800} height="auto" /></p>