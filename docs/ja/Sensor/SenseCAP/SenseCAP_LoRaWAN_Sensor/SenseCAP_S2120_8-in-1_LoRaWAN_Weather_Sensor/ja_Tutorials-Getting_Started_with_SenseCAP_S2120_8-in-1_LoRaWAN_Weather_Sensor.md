---
description: SenseCAP S2120 8-in-1 LoRaWAN 気象センサーの使い方
title: SenseCAP S2120 8-in-1 LoRaWAN 気象センサーの使い方
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Getting_Started_with_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 事前準備

### 図解

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor95.png" /></div>



<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor98.png" /></div>



### 雨量計の取り付け

> 雨量計の漏斗を取り付け、時計回りに回して漏斗を気象ステーションに固定します。
>
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor220.png" /></div>



### 電源供給モード

> 気象ステーションにはバッテリーが含まれていないため、追加のバッテリーが必要です。
>
> センサーはソーラーパネルとバッテリーの組み合わせで動作します。ソーラーパネルが動作している場合、デバイスはソーラーパネルから電力を供給されます。ソーラーエネルギーが不足している場合は、バッテリーから電力が供給されます。
>
> バッテリーの種類によってセンサーの動作温度範囲が異なります。また、バッテリーの数によってセンサーのバッテリー寿命が決まります。
>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor699.png" /></div>



**オプション 1: 内蔵ボックスにバッテリーを取り付ける**

* **ステップ 1:** 気象ステーション底部のバッテリードアをネジで外します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor817.png" /></div>



* **ステップ 2:** +/- の極性に従って 3 本の AA バッテリーを挿入します。その後、バッテリードアを閉じ、ネジを締めます。取り付けが完了すると、気象ステーション底部の赤色 LED インジケーターが点滅します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1069.png" /></div>



**オプション 2: 外部ボックスにバッテリーを取り付ける**

* **ステップ 1:** バッテリーボックスのロックスイッチを解除位置にスライドさせます。矢印の方向に従ってバッテリーボックスのドアを押して開けます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1250.png" /></div>



* **ステップ 2:** +/- の極性に従って 6 本の AA バッテリーを挿入します。その後、バッテリーボックスのドアを閉じてロックします。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1375.png" /></div>



* **ステップ 3:** 気象ステーション底部のバッテリードアをネジで外します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1451.png" /></div>


<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1452.png" /></div>



* **ステップ 4:** ダミーバッテリーをバッテリーコンパートメントに挿入します。「OUTSIDE」のマークが外側を向き、+/- の極性が正しい方向であることを確認してください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1615.png" /></div>




**ステップ 5:** 外部バッテリーボックスに付属するバッテリードアを取り付け、ネジを締めます。取り付けが完了すると、気象ステーション底部の赤色 LED インジケーターが点滅します。


:::tip **注意**
ダミーバッテリーが正しい向きで取り付けられていない場合、バッテリー電源の接続が失敗し、LED インジケーターが点滅しません。
:::

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2013.png" /></div>


* **ステップ 6:** ケーブルタイを使用して、バッテリーボックスを取り付けポールに固定します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2093.png" /></div>




## インジケーターステータス

気象ステーションの底部にはボタンとインジケーターがあります：

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2193.png" /></div>



センサーの動作状態を確認するには、LEDインジケーターを参照してください。以下の表でステータスの説明をご覧ください：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2327.png" /></div>




:::tip **注意**
バッテリーを初めて取り付けた後、Bluetoothを接続し、周波数を設定してLoRaWANネットワークに参加し、正常に動作させる必要があります。周波数が設定されていない場合、赤色LEDが点灯したままになります。
:::


## SenseCAP Mate アプリへの接続

**ステップ 1:** アプリをダウンロード

SenseCAP Mate アプリは、LoRaパラメータの設定、間隔の設定、デバイスをアカウントにバインド、デバイスの基本情報の確認に使用されます。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2808.png" /></div>




**ステップ 2:** 新しいアカウントを作成

SenseCAP Mate はデバイスの設定とリモート管理をサポートします。SenseCAP Portal プラットフォームやその他の機能を使用するには、アカウントを登録してください。

SenseCAP Mate はオフライン機能をサポートしており、設定センサーのみを使用する場合はアカウントを作成しなくても構いません。**スキップ**をクリックしてください。

サーバーの場所として**Global**を選択してください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor3406.png" /></div>


また、SenseCAP Portal を通じてアカウントを作成することもできます：http://sensecap.seeed.cc



:::tip **注意**
メールが見つからない場合、自動的に「迷惑メール」として識別され、「ゴミ箱」に入れられる可能性があります。
:::

**ステップ 3:** センサーをアプリに接続

バッテリーを取り付けた後、赤色LEDが点灯したままになります。また、Bluetoothを有効にしてください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4059.png" /></div>


「S2120 Weather Station」を選択してください。
「Setup」ボタンをクリックしてBluetoothをオンにし、「Scan」をクリックしてセンサーのBluetoothをスキャンしてください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4213.png" /></div>


ペアリングパスワードを入力してください。**デフォルトのパスワードは 000000 です**。

BT ID（センサーの底部ラベルに記載）でセンサーを選択してください。その後、センサーの基本情報が表示されます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4428.png" /></div>



**ステップ 4:** アプリを通じてパラメータを設定

* プラットフォームを選択 

S2120 気象ステーションは、1つのSKUで863MHz～928MHzのユニバーサル周波数プランをサポートするように製造されています。つまり、各デバイスは7つの周波数プランをサポートできます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4675.png" /></div>


* 周波数を選択

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4678.png" /></div>


:::tip **注意**
異なる国やLoRaWANネットワークサーバーでは、異なる周波数プランが使用されます。

* Heliumネットワークの場合、以下を参照してください：

https://docs.helium.com/lorawan-on-helium/frequency-plans

* The Things Networkの場合、以下を参照してください：

https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/

* SenseCAPプラットフォームを使用する場合、EUI、APP EUI、およびAPP Keyは固定されており、センサーラベルと同じです。
* センサーがHeliumやTTNなどの公共プラットフォームで使用される場合、EUIは変更されず、センサーはネットワークアクセス用に新しい固定App EUIおよびApp Keyを生成します。
:::

* **間隔の設定**

デバイスの動作モード：デバイスを一定の間隔で起動し、測定値を収集してLoRaを通じてアップロードします。例えば、デバイスは**デフォルトで60分ごと**にデータを収集してアップロードします。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor7708.png" /></div>

* **EUIとキーの設定**

デバイスはデフォルトでOTAAを使用してLoRaWANネットワークに参加します。そのため、デバイスEUIとApp EUIを設定できます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor7835.png" /></div>

* **パケットポリシーの設定**

センサーのアップリンクパケット戦略には3つのモードがあります。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor7913.png" /></div>

* **アクティベーションタイプの設定**

センサーは2つのネットワークアクセスモードをサポートしており、デフォルトではOTAAです。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8003.png" /></div>

ABPモードを使用する場合、以下の情報を設定する必要があります：

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8076.png" /></div>

:::tip **注意**
工場出荷時の設定は固定値です。
:::

* **工場出荷時設定の復元**

SenseCAPプラットフォームを選択する場合、固定されたEUI/App EUI/App Keyを使用する必要があります。そのため、他のプラットフォームからSenseCAPプラットフォームに戻る前に、工場出荷時設定を復元する必要があります。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8357.png" /></div>

誤操作をした場合やすべてをリセットしたい場合は、ボタンをクリックすることでデバイスを工場出荷時のデフォルト設定に復元できます。

## SenseCAPポータルへの接続

[SenseCAPポータル](http://sensecap.seeed.cc)の主な機能は、SenseCAPデバイスの管理とデータの保存です。このポータルはMicrosoftの安全で信頼性の高いクラウドサービスであるAzure上に構築されています。アカウントを申請し、すべてのデバイスをこのアカウントに紐付けることができます。SenseCAPはウェブポータルとAPIを提供しています。ウェブポータルにはダッシュボード、デバイス管理、データ管理、アクセスキー管理が含まれ、APIはさらなる開発のためにユーザーに公開されています。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8976.png" /></div>

>**ダッシュボード:** デバイス概要、アナウンスメント、シーンデータ、データチャートなどを含む。
>**デバイス管理:** SenseCAPデバイスを管理。
>
>**データ管理:** データテーブルやグラフセクションを含むデータ管理機能を提供し、データ検索方法を提供。
>
>**サブアカウントシステム:** 異なる権限を持つサブアカウントを登録。
>
>**アクセスキー管理:** APIサービスにアクセスするためのアクセスキーを管理（キーの作成、更新、確認を含む）。

詳細については[クイックスタート](https://sensecap-docs.seeed.cc/quickstart.html)を参照してください。

>**APIの説明**
>
> SenseCAP APIは、IoTデバイスとデータを管理するためのものです。3種類のAPIメソッドを提供しています：HTTPプロトコル、MQTTプロトコル、Websocketプロトコル。
>
>-   HTTP APIを使用すると、LoRaデバイスを管理し、生データや履歴データを取得できます。
>
>-   MQTT APIを使用すると、MQTTプロトコルを通じてセンサーのリアルタイム測定データを購読できます。
>
>-   Websocket APIを使用すると、Websocketプロトコルを通じてセンサーのリアルタイム測定データを取得できます。
>

[APIユーザーガイド](https://sensecap-docs.seeed.cc/)を参照してください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor10672.png" /></div>

## Helium ネットワークへの接続

センサーを Helium 公共コンソールに接続する方法については、以下のマニュアルを参照してください：

[Helium ネットワークへの接続](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20Helium%20Network.pdf)

[S2120 デコーダー for Helium](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S2120/Helium)

## The Things Network への接続

* **以下のマニュアルを参照してください：**

[TTN への接続](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)

* **TTN プラットフォームの使用については以下のリンクを参照してください：**

[The Things Network ウェブサイト](https://www.thethingsnetwork.org)

[The Things Industries ログイン](https://accounts.thethingsindustries.com/login)

[TTN クイックスタート](https://www.thethingsnetwork.org/docs/quick-start/)

[S2120 デコーダー for TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S2120/TTN)

## デバイスの設置

**ステップ 1:** 適切な設置場所を選択

気象観測ステーションを設置する前に、以下の点を考慮してください：

**(1)** 雨量計は数か月ごとに清掃する必要があります。

**(2)** 隣接する建物や構造物からの反射熱を避けてください。理想的には、気象観測ステーションは建物、構造物、地面、または屋上から 1.5m（5フィート）離れた場所に設置してください。

**(3)** 雨、風、日光を遮るものがない、直射日光の当たる開けた場所を選んでください。

**(4)** 気象観測ステーションとゲートウェイ間の通信範囲は、見通しの良い状態で 2～10km に達する可能性があります。ただし、間や近くに木、塔、高圧線などの障害物がないことを確認してください。受信信号の品質を確認し、良好な受信を確保してください。

**(5)** 冷蔵庫、照明、調光器などの家庭用電化製品は電磁干渉（EMI）を引き起こす可能性があり、同じ周波数帯で動作するデバイスからの無線周波数干渉（RFI）は信号が断続的になる原因となる可能性があります。これらの干渉源から少なくとも 1～2 メートル（3～5 フィート）離れた場所を選んで、最良の受信を確保してください。

**ステップ 2:** 気象観測ステーションの設置

**(1)** ソーラーパネルの調整

ソーラーパネルの傾斜角度は、居住地域に応じて垂直方向に 0°、15°、30°、45°、60° の位置に調整できます。年間を通じて最適な電力出力を得るために、緯度に最も近い傾斜角度を設定してください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor21897.png" /></div>

南半球に設置するセンサーは、ソーラーパネルを北向きにする必要があります。

**(2)** ソーラーパネルの保護フィルムを取り外し、ネジを軽く緩めて反対側のギアがロック位置から外れるようにします。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor22132.png" /></div>

**(3)** ソーラーパネルの垂直角度（0°、15°、30°、45°、60°）を設置場所の緯度に応じて調整し、ギアを押し込んでネジを締め、ギアがしっかりとロックされるようにします。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor22334.png" /></div>

**ステップ 3:** 取り付けポールの設置

**(1)** プラスチック製のポールを取り付けベース、クランプ、ワッシャー、ネジ、ナットを使用して固定ポールに取り付けます。以下の手順に従ってください：
プラスチック製のポールを取り付けスタンドの穴に挿入し、ネジとナットで固定します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2001.png" /></div>

取り付けクランプにゴムパッドを 2 枚貼り付けます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2002.png" /></div>

取り付けスタンドとクランプを一緒に固定ポールに取り付け、長いネジとナットを 4 本使用して固定します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2003.png" /></div>

**(2)** 取り付けベースの内側にゴムパッドを 2 枚貼り付け、気象観測ステーションをクランプし、軽く固定します。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor22882.png" /></div>

**(3)** 気象観測ステーションを取り付けポールの上に置き、北方向に合わせてからネジを締めます。

:::info 注意
金属製の物体は雷を引き寄せる可能性があります。取り付けポールを含むすべての金属製の物体に注意してください。雷雨の日に気象観測ステーションを設置しないでください。
家や建物に気象観測ステーションを設置する場合は、適切な接地を確保するために有資格の電気技師に相談してください。金属製のポールに雷が直接当たると、家が損傷したり破壊されたりする可能性があります。

センサーを高所に設置することは、個人の怪我や死亡のリスクを伴う可能性があります。可能な限り、初期点検や操作は地上や建物内で行ってください。気象観測ステーションの設置は、晴れて乾燥した日にのみ行ってください。
:::

**ステップ 4:** 方向の調整

気象観測ステーションを、センサーの上部および周囲に障害物がない開けた場所に設置し、正確な降雨量と風速の測定を行います。

天気観測ステーションの上部にある北（N）マーカーを見つけ、コンパスまたはGPSを使用して最終設置時にマーカーが北を指すように調整してください。付属の2本のネジとナットを使用して、30～40mm直径のポール（別売）に取り付けブラケットをしっかりと固定してください。

天気観測ステーションの気泡レベルを使用して、センサーが完全に水平であることを確認し、降雨量、UV、光強度の正確な測定を行ってください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2004.png" /></div>



>**無線通信の最適化に関する推奨事項**
>
> 効果的な無線通信は、環境内のノイズ干渉、センサー送信機とゲートウェイ間の距離および障害物に影響を受けやすいです。
>
>- 設置方向。機器を設置する際には、風向きだけでなく無線通信の方向も考慮する必要があります。図に示す方向でゲートウェイを指すようにすると、より良い信号を得ることができます。
>
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture05.png" /></div>


>
>- 距離。距離が増えると自然にパスロスが発生します。このデバイスは見通し線上で最大10km（干渉のない環境および障害物なし）で動作するように設計されています。ただし、実際の設置環境では通常1～3kmが最大となります（障害物を通過する場合を含む）。
>
>- 障害物。無線信号はアルミニウムクラッディングなどの金属障害物によって遮断されます。金属クラッディングがある場合は、窓を通して天気観測ステーションとゲートウェイを見通し線上に配置してください。
>
> 以下の表は、無線信号がこれらの建築材料を通過するたびに信号強度が減少する典型的なレベルを示しています（RF信号減衰の参考値）：

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture06.png" /></div>





## トラブルシューティング 
### 天気観測ステーションのメンテナンス

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Trouble%20Shooting%20&%20Tech%20Support.files/Trouble%20Shooting%20&%20Tech%20Support49.png)

### センサーがLoRaネットワークに接続できない場合の対処方法

1. ゲートウェイの周波数設定を確認してください。ゲートウェイとセンサーが同じアップリンクおよびダウンリンク周波数を持っていることを確認してください。

2. リアルタイムログを確認し、センサーの設定ボタンをクリックしてセンサーデータパケットがあるかどうかを確認してください。パケットがある場合は、ゲートウェイがダウンリンクパケットを送信しているかどうかを確認してください。

3. チャネルやその他の設定が正しい場合で、ゲートウェイログにパケットがない場合は、技術サポートに連絡してください。

### バッテリー寿命の予測

> 電力消費表は参考値です。バッテリー寿命は、周波数帯域、ゲートウェイからの距離、周囲温度などのさまざまな要因に依存します。
>

[バッテリー寿命予測](https://files.seeedstudio.com/SenseCAP_S21XX_Sensor_%20Battery_Life_Prediction.xlsx)