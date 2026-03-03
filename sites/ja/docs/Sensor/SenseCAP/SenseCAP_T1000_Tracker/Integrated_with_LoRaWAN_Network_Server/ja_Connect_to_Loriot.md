---
description: SenseCAP T1000 TrackerをLoriotに接続する
title: Loriotに接続する
keywords:
- Tracker
- Loriot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_Tracker_Loriot
last_update:
  date: 12/12/2023
  author: KeweiLee
---


[LORIOT](https://docs.loriot.io/display/NMS/Getting+Started) LoRAWAN Network Server (LNS) はハードウェアに依存せず、市場のすべてのLoRaWAN®ゲートウェイとセンサーをサポートします。

:::info
Loriotアカウントをお持ちでない場合は、[こちら](https://loriot.io/register.html)にアクセスして、お住まいの地域のLORIOT Community Public Serverの1つを選択し、新しいアカウントを登録してください。
:::

## ネットワークの追加

ネットワークは単純にLoRaWANゲートウェイのコレクションであり、ゲートウェイを監視・管理するための効率的な環境を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddNetwork.png" alt="pir" width={800} height="auto" /></p>

新しいゲートウェイを追加する際は、ネットワークに割り当てる必要があります。単独でも、他のゲートウェイのコレクションと一緒でも構いません。

ゲートウェイをネットワークにグループ化する典型的な方法は、地理的位置、モデル、クライアント、またはあなたにとって最適な構造によるものです。

ネットワークに含めることができるゲートウェイの数に制限はありません（アカウントのゲートウェイ制限内である限り）が、各ゲートウェイは単一のネットワークにのみ属することができます。

### 最初のゲートウェイの追加

最初のゲートウェイを追加してLoRaWANネットワークを開始しましょう！Loriotの[ステップバイステップ](https://docs.loriot.io/display/NMS/Register+a+Gateway+or+Base+Station)ガイドに従ってゲートウェイまたはベースステーションを登録することもできます。

ここでは例としてゲートウェイ（Basics Station Semtech）を作成します。`Network`に移動し、先ほど追加したネットワークをクリックします。`Add Gateway`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddGateway.png" alt="pir" width={800} height="auto" /></p>

ページの下半分にゲートウェイのリストが表示されます。画像をクリックして関連するゲートウェイモデルを選択します。
ゲートウェイを登録するには、ゲートウェイのeth0 MACアドレス（コロンで区切られた6つのオクテット）を入力する必要があります。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/NInfo.png" alt="pir" width={800} height="auto" /></p>

最後に、その位置を設定できます。これは2つの異なる方法で定義できます。マップ上で位置を選択するか、必要な情報を入力してアドレスを手動で登録するかです。

### ゲートウェイ証明書の設定

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/ConfigureGateway.png" alt="pir" width={800} height="auto" /></p>

`Certificate`ページでは、Network Server Address、Network Server Port、およびゲートウェイモデルを設定するためのTLS CA Certificateをダウンロードまたはコピーできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/Certificate.png" alt="pir" width={800} height="auto" /></p>

ゲートウェイのユーザーインターフェースで、動作モードとして「LoRa Basics Station」を選択します。前のステップで取得した情報を使用して、アドレス、ポート、およびサーバー証明書を必ず設定してください。これは、ゲートウェイとLORIOT Network Management System間の接続を確立するためです。

LORIOTのUIに戻り、LoRa Basics™ Stationがオンラインになり、LORIOT Network Management Systemで正常に機能していることを確認します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/GatewayOnline.png" alt="pir" width={800} height="auto" /></p>


## アプリケーションの追加

[アプリケーション](https://docs.loriot.io/display/NMS/Create+a+New+Application)は、デバイスを登録、管理、整理し、デバイスデータの出力先を選択する場所です。
新しいデバイスを追加する際は、アプリケーションに割り当てられます。これにより、デバイスが登録されているアプリケーションと選択したデータ出力の詳細がサーバーに通知されます。

デバイスの総数がユーザーのアカウント制限を超えない限り、センサーの種類やメーカーに関係なく、任意の数のデバイスをアプリケーションに追加できます。

通常、アプリケーションには特定のユースケースのすべてのデバイス（例：スマートビルディング内のすべてのセンサー）または同じタイプのデバイス（例：温度センサー）が含まれます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddApplicaiton.png" alt="pir" width={800} height="auto" /></p>


### 最初のデバイス（SenseCAP T1000 Tracker）の追加


`Enroll Device`をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddDevice.png" alt="pir" width={800} height="auto" /></p>

LORIOT Network ServerはLoRaWAN 1.0.xと1.1の両方のデバイスをサポートします。デバイスは2つの異なる登録プロセスで追加できます。OTAA（Over-The-Air-Activation）はほとんどのデバイスで推奨されるオプションですが、ABP（activation by personalization）も利用可能です。SenseCAP Mate AppのBluetoothを使用してTrackerに正常に接続した後、このタブでOTAA情報を取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={600} height="auto" /></p>

プラットフォームをother platformに設定し、Device EUI/APP EUI/APP Keyをコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/OTAAInfo.png" alt="pir" width={400} height="auto" /></p>

最後に、Enrollを選択します。デバイスを追加すると、Loriot上でデータストリームを確認できるようになります。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/DeviceDetails.png" alt="pir" width={800} height="auto" /></p>