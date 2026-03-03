---
description: SenseCAP S2120 8-in-1 LoRaWAN気象センサーの使用開始
title: SenseCAP S2120 8-in-1 LoRaWAN気象センサーの使用開始
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Getting_Started_with_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor
last_update:
  date: 7/26/2023
  author: Jessie
---

## 設置前の準備

### 図解

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor95.png" /></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor98.png" /></div>

### 雨量計の設置

> 雨量計のファンネルを設置し、時計回りに回転させて気象ステーションにファンネルを固定します。
>
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor220.png" /></div>

### 電源供給方式

> 気象ステーションにはバッテリーが含まれていないため、追加のバッテリーが必要です。
>
> センサーはソーラーパネルとバッテリーの組み合わせで電力供給されます。ソーラーパネルが動作している時は、デバイスはソーラーパネルから電力供給されます。太陽エネルギーが低い時は、バッテリーから電力供給されます。
>
> バッテリーの種類によってセンサーの動作温度範囲が影響を受けます。また、バッテリーの数によってセンサーのバッテリー寿命が決まります。
>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor699.png" /></div>

**オプション1：内蔵ボックスでバッテリーを設置**

- **ステップ1：** 気象ステーション底部のバッテリードアのネジを外します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor817.png" /></div>

- **ステップ2：** 表示されている+/-の極性に従って3本のAA電池を挿入します。その後、バッテリードアを閉じます。バッテリードアのネジを締めます。設置が完了すると、気象ステーション底部の赤色LEDインジケーターが点滅します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1069.png" /></div>

**オプション2：外部ボックスでバッテリーを設置**

- **ステップ1：** バッテリーボックスのロックスイッチをアンロック位置にスライドします。矢印の方向に従ってバッテリーボックスのドアを押して開きます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1250.png" /></div>

- **ステップ2：** 表示されている+/-の極性に従って6本のAA電池を挿入します。その後、バッテリーボックスのドアを配置してロックします。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1375.png" /></div>

- **ステップ3：** 気象ステーション底部のバッテリードアのネジを外します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1451.png" /></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1452.png" /></div>

- **ステップ4：** ダミーバッテリーをバッテリーコンパートメントに挿入し、「OUTSIDE」マーキングが外側を向き、+/-の極性が正しい向きになっていることを確認します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1615.png" /></div>

**ステップ5：** 外部バッテリーボックスに付属のバッテリードアに交換し、バッテリードアのネジを締めます。設置が完了すると、気象ステーション底部の赤色LEDインジケーターが点滅します。

:::tip **注意**
ダミーバッテリーが正しい向きで設置されていない場合、バッテリー電源接続が失敗し、LEDインジケーターが点滅しません。
:::

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2013.png" /></div>

- **ステップ 6:** ケーブルタイを使用してバッテリーボックスを取り付けポールに固定します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2093.png" /></div>

## インジケーターステータス

気象ステーションの底部にはボタンとインジケーターがあります：

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2193.png" /></div>

センサーの動作状態については、LEDインジケーターを参照できます。以下のチャートでステータスの説明をご確認ください：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2327.png" /></div>

:::tip **注意**
バッテリーを初回インストール後、Bluetoothに接続し、周波数を設定してLoRaWANネットワークに参加し、正常に動作させる必要があります。周波数が設定されていない場合、赤色LEDが点灯し続けます。
:::

## SenseCAP Mate Appへの接続

**ステップ 1:** アプリのダウンロード

ツールとして、SenseCAP Mate AppはLoRaパラメーターの設定、間隔の設定、デバイスのアカウントへのバインド、デバイスの基本情報の確認に使用されます。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2808.png" /></div>

**ステップ 2:** 新しいアカウントの作成

SenseCAP Mateはデバイス設定とリモート管理をサポートします。SenseCAP Portalプラットフォームやその他の機能を使用するには、アカウントを登録してください。

SenseCAP Mateはオフライン機能をサポートしており、設定センサーのみを使用する場合はアカウントを作成しなくても構いません。**Skip**をクリックしてください。

サーバーロケーションは**Global**を選択してください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor3406.png" /></div>

SenseCAP Portal経由でもアカウントを作成できます：http://sensecap.seeed.cc

:::tip **注意**
メールが見つからない場合、「スパム」として自動識別され「ゴミ箱」に入っている可能性があります。
:::

**ステップ 3:** センサーをアプリに接続

バッテリーをインストール後、赤色LEDが点灯し続けます。また、Bluetoothがアクティブになります。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4059.png" /></div>

「S2120 Weather Station」を選択してください。
「Setup」ボタンをクリックしてBluetoothをオンにし、「Scan」をクリックしてセンサーのBluetoothのスキャンを開始してください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4213.png" /></div>

ペアリングパスワードを入力してください。**デフォルトパスワードは000000です**。

BT ID（BT IDはセンサー底部のラベルに記載）でセンサーを選択してください。入力後、センサーの基本情報が表示されます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4428.png" /></div>

**ステップ 4:** アプリを通じてパラメーターを設定

- プラットフォームの選択

S2120気象ステーションは、1つのSKUで863MHz～928MHzのユニバーサル周波数プランをサポートするように製造されています。つまり、すべての単一デバイスが7つの周波数プランをサポートできます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4675.png" /></div>

- 周波数の選択

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4678.png" /></div>

:::tip **注意**
異なる国とLoRaWANネットワークサーバーは異なる周波数プランを使用します。

- Heliumネットワークについては、以下を参照してください：

https://docs.helium.com/lorawan-on-helium/frequency-plans

- The Things Networkについては、以下を参照してください：

https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/

- SenseCAPプラットフォームを使用する場合、EUI、APP EUI、APP Keyは固定されており、センサーラベルと同じです。
- センサーがHeliumやTTNなどのパブリックプラットフォームで使用するように選択された場合、EUIは変更されず、センサーはネットワークアクセス用の新しい固定App EUIとApp Keyを生成します。
:::

- **インターバルの設定**

デバイスの動作モード：インターバルごとにデバイスをウェイクアップし、測定値を収集してLoRaを通じてアップロードします。例えば、デバイスは**デフォルトで60分ごと**にデータを収集・アップロードします。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor7708.png" /></div>

- **EUIとキーの設定**

デバイスはデフォルトでOTAAを使用してLoRaWANネットワークに参加します。そのため、デバイスEUIとApp EUIを設定できます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor7835.png" /></div>

- **パケットポリシーの設定**

センサーのアップリンクパケット戦略には3つのモードがあります。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor7913.png" /></div>

- **アクティベーションタイプの設定**

センサーは2つのネットワークアクセスモードをサポートしており、デフォルトはOTAAです。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8003.png" /></div>

ABPモードを使用する場合は、以下の情報を設定する必要があります：

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8076.png" /></div>

:::tip **注意**
工場出荷時は固定値にデフォルト設定されています。
:::

- **工場設定の復元**

SenseCAPプラットフォームを選択する場合、固定のEUI/App EUI/App Keyを使用する必要があります。そのため、他のプラットフォームからSenseCAPプラットフォームに戻す前に、工場設定を復元する必要があります。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8357.png" /></div>

間違いを犯した場合やすべてをリセットしたい場合は、このボタンをクリックできます。デバイスは工場出荷時のデフォルト設定に復元されます。

## SenseCAP Portalへの接続

[SenseCAP Portal](http://sensecap.seeed.cc)の主な機能は、SenseCAPデバイスを管理し、データを保存することです。これはMicrosoftの安全で信頼性の高いクラウドサービスであるAzure上に構築されています。アカウントを申請し、すべてのデバイスをこのアカウントにバインドできます。SenseCAPはWebポータルとAPIを提供します。WebポータルにはDashboard、Device Management、Data Management、Access Key Managementが含まれ、APIはユーザーのさらなる開発のために公開されています。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8976.png" /></div>

>**Dashboard:** Device Overview、Announcement、Scene Data、Data Chartなどが含まれます。
>**Device Management:** SenseCAPデバイスを管理します。
>
>**Data Management:** Data TableとGraphセクションを含むデータを管理し、データを検索する方法を提供します。
>
>**Subaccount System:** 異なる権限を持つサブアカウントを登録します。
>
>**Access Key Management:** Access Key（APIサービスにアクセスするため）を管理し、Key Create、Key Update、Key Checkが含まれます。

詳細については[Quick Start](https://sensecap-docs.seeed.cc/quickstart.html)をご確認ください。

>**API説明**
>
> SenseCAP APIは、ユーザーがIoTデバイスとデータを管理するためのものです。HTTPプロトコル、MQTTプロトコル、Websocketプロトコルの3種類のAPIメソッドが含まれます。
>
>- HTTP APIを使用すると、ユーザーはLoRaデバイスを管理し、生データや
   履歴データを取得できます。
>
>- MQTT APIを使用すると、ユーザーはMQTTプロトコルを通じて
    > センサーのリアルタイム測定データを購読できます。
>
>- Websocket APIを使用すると、ユーザーはWebsocketプロトコルを通じてセンサーのリアルタイム測定データを取得できます。
>

[API User Guide](https://sensecap-docs.seeed.cc/)については、このリンクを参照してください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor10672.png" /></div>

## Heliumネットワークに接続

センサーをHeliumパブリックコンソールに接続するには、以下のマニュアルを参照してください：

[Heliumネットワークに接続](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20Helium%20Network.pdf)

[Helium用S2120デコーダー](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S2120/Helium)

## The Things Networkに接続

- **このマニュアルを参照してください：**

[TTNに接続](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)

- **TTNプラットフォームを使用するには、以下のリンクを参照してください：**

[The Things Networkウェブサイト](https://www.thethingsnetwork.org)

[The Things Industriesログイン](https://accounts.thethingsindustries.com/login)

[TTNクイックスタート](https://www.thethingsnetwork.org/docs/quick-start/)

[TTN用S2120デコーダー](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S2120/TTN)

## デバイスの設置

**ステップ1：** 適切な設置場所の選択

気象ステーションを設置する前に、以下の点を考慮してください：

**(1)**雨量計は数ヶ月ごとに清掃する必要があります。

**(2)**隣接する建物や構造物からの反射熱を避けてください。理想的には、気象ステーションは建物、構造物、地面、または屋上から1.5m（5フィート）離れた場所に設置する必要があります。

**(3)**雨、風、日光を遮るものがない直射日光の当たる開けた場所を選択してください。

**(4)**気象ステーションとゲートウェイ間の伝送範囲は、見通しの良い場所で2～10kmの距離に達することができます。ただし、樹木、タワー、高圧線などの干渉する障害物が間や近くにないことが条件です。良好な受信を確保するために受信信号品質を確認してください。

**(5)**冷蔵庫、照明、調光器などの家電製品は電磁干渉（EMI）を引き起こす可能性があり、同じ周波数範囲で動作するデバイスからの無線周波数干渉（RFI）は信号を断続的に妨害する可能性があります。最良の受信を確保するために、これらの干渉源から少なくとも1～2メートル（3～5フィート）離れた場所を選択してください。

**ステップ2：** 気象ステーションの設置

**(1)**ソーラーパネルの調整

ソーラーパネルの傾斜角度は、お住まいの地域に応じて0°から15°、30°、45°、60°の位置まで垂直に調整できます。年間を通じて最適な電力出力を得るために、緯度に最も近い傾斜角度に設定してください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor21897.png" /></div>

南半球に設置されるセンサーは、ソーラーパネルを北向きにする必要があります。

**(2)** ソーラーパネルの保護フィルムを取り除き、反対側のギアがロック位置から離れるまでネジを軽く緩めます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor22132.png" /></div>

**(3)** 設置場所の緯度に応じてソーラーパネルの垂直角度（0°、15°、30°、45°、60°）を調整し、ギアを押してギアがしっかりとロックされるまでネジを締めます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor22334.png" /></div>

**ステップ3：** 取り付けポールの設置

**(1)** マウントベース、クランプ、ワッシャー、ネジ、ナットを使用して、プラスチックポールを固定ポールに取り付けます。以下の順序に従ってください：
プラスチックポールをマウントスタンドの穴に挿入し、ネジとナットで固定します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2001.png" /></div>

マウントクランプに2つのゴムパッドを取り付けます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2002.png" /></div>

マウントスタンドとクランプを固定ポールに4本の長いネジとナットで一緒に取り付けます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2003.png" /></div>

**(2)** マウントベースの内側に2つのゴムパッドを取り付け、気象ステーションをクランプし、軽く締めて固定します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor22882.png" /></div>

**(3)** 気象ステーションを取り付けポールの上に置き、ネジを締める前に北の方向に合わせます。

:::info 注意
金属製の物体は取り付けポールを含めて落雷を引き寄せる可能性があります。嵐の日には気象ステーションを設置しないでください。
家や建物に気象ステーションを設置したい場合は、適切な接地を確保するために認定電気技師に相談してください。金属ポールへの直接的な落雷は、あなたの家を損傷または破壊する可能性があります。

センサーを高い場所に設置すると、人身事故や死亡事故につながる可能性があります。可能な限り多くの初期検査と操作を地上や建物内で実行してください。晴れて乾燥した日にのみ気象ステーションを設置してください。
:::

**ステップ4：** 方向の調整

正確な雨量と風速測定のために、センサーの上部と周囲に障害物のない開けた場所に気象ステーションを設置してください。

気象ステーションの上部にある北（N）マーカーを見つけ、最終設置時にコンパスまたはGPSを使用してマーカーが北を指すように調整してください。付属の2本のネジとナットを使用して、直径30〜40mmのポール（別売り）に取り付けブラケットを固定してください。

気象ステーションの水準器を使用して、降雨量、UV、光強度の適切な測定のためにセンサーが完全に水平になっていることを確認してください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2004.png" /></div>

>**最適なワイヤレス通信のための推奨事項**
>
> 効果的なワイヤレス通信は、環境内のノイズ干渉、およびセンサー
> 送信機とゲートウェイ間の距離と障害物の影響を受けやすくなります。
>
>- 設置方向。機器を設置する際は、風向きの方向に加えて、ワイヤレス伝送の方向も考慮する必要があります。図に示す方向で、ゲートウェイを指すようにするとより良い信号が得られます。
>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture05.png" /></div>

>
>- 距離。パスロスは距離とともに自然に発生します。この装置は見通し線で10km（干渉のない環境で障害物がない場合）の定格です。しかし、通常、実際の設置では最大1〜3kmが得られ、これには障害物を通過することが含まれます。
>
>- 障害物。無線信号はアルミニウム外装などの金属障害物によって遮断されます。金属外装がある場合は、窓を通して見通し線が確保できるように気象ステーションとゲートウェイを調整してください。
>
> 下の表は、信号がこれらの建築材料を通過するたびの信号強度の典型的な減少レベルを示しています（参考用のRF信号減少）：

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture06.png" /></div>

## トラブルシューティング

### 気象ステーションのメンテナンス

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Trouble%20Shooting%20&%20Tech%20Support.files/Trouble%20Shooting%20&%20Tech%20Support49.png)

### センサーがLoRaネットワークに参加できない場合の対処法は？

1. ゲートウェイの周波数設定を確認してください。ゲートウェイとセンサーが同じアップリンクおよびダウンリンク周波数を持っていることを確認してください。

2. リアルタイムログを確認し、センサーの設定ボタンをクリックして、センサーデータパケットがあるかどうかを確認してください。パケットがある場合は、ゲートウェイがダウンリンクパケットを送信しているかどうかを確認してください。

3. チャンネルやその他の設定が正しく、ゲートウェイログにパケットがない場合は、技術サポートにお問い合わせください。

### バッテリー寿命予測

> 消費電力表は参考用です。バッテリー寿命は、周波数帯域、
> ゲートウェイからの距離、周囲温度など、さまざまな要因に
> 依存します。
>

[バッテリー寿命予測](https://files.seeedstudio.com/SenseCAP_S21XX_Sensor_%20Battery_Life_Prediction.xlsx)
