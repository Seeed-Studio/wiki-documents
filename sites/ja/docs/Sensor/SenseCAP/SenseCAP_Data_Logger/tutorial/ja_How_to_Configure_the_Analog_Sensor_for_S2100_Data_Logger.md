---
description: アナログセンサーの設定
title: アナログセンサーの設定
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
---

# アナログ入力センサーでS2100を始める

アナログ入力センサーでS2100を使用する方法を学習することから始めましょう。それができたら、S2100のアプリケーションの基本に進みます。これにより、将来的に独自のカスタマイズされたセンサーを接続する方法について良いアイデアが得られるでしょう。

## これらのアイテムを準備してください

- データロガー
- 光センサー（例として）
- プラスドライバー（プラス溝No.2）
- SenseCAP Mate APP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/2.png"/></div>

# センサープローブの接続

まず、配線を行う必要があります。以下の手順に従ってください。

## データロガーの分解

1. 3本のネジを外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png"/></div>

2. カバーを取り外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png"/></div>

3. ねじ込みキャップを取り外し、センサーのケーブルを通し、底面カバーを通して、配線端子に接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png"/></div>
## 配線端子の説明

| **No.** | **ピン** | **説明** |
| --- | --- | --- |
| 1 | 12V | 外部12V入力電圧。データロガーは外部12V DC電源で電力供給できます。12V電源使用時、バッテリーはバックアップ電源として機能します。 |
| 2 | 5V | 5V出力電圧、センサーに5V電圧を提供します。 |
| 3 | 3V | 3V出力電圧、センサーに3V電圧を提供します。 |
| 4 | IO | レベルまたはパルス入力の取得 |
| 5 | V1 | 0から10Vの電圧入力を収集 |
| 6 | V2 | 0から10Vの電圧入力を収集 |
| 7 | A | RS485 A/+ |
| 8 | B | RS485 B/- |
| 9 | I1 | 4から20mAの電流入力を収集 |
| 10 | I2 | 4から20mAの電流入力を収集 |
| 11 | GND | グランドピン |
| 12 | GND | グランドピン |

## センサーの電源オプション

データロガーは2つの電源供給モードをサポートしており、光センサーは5v電源のみを必要とするため、内蔵バッテリーモードを選択します：

| **モード** | **説明** |
| --- | --- |
| 内蔵バッテリー | データロガーとセンサーはバッテリーで電源供給されます。この場合、データロガーは5Vセンサーに接続できます。 |

## データロガーへの接続

データロガーの配線順序：

| **配線タイプ** | **説明** |
| --- | --- |
| 赤線 | 5V |
| 黒線 | GND（どのポートでも問題ありません。） |
| 黄線 | IO |

1. 8ピンワイヤーを底面カバーに通し、ワイヤーシーケンス要件に従ってData Loggerのベースに接続します；

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/6.png"/></div>

2. 上部カバー、ゴムリング、スクリューキャップを順番に接続します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/8.png"/></div>

3. **ネジとスクリューキャップを締めて****防水性を確認します**。ワイヤー径が細すぎる場合は、防水テープを巻いて補強してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/9.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/10.png"/></div>

**\*注意:** デバイスを組み立てる際は、Data Loggerとアダプターボックスの防水パッドを取り付け、スクリューキャップとネジを締める必要があります。そうしないと、デバイスの防水効果に影響する可能性があります！

ワイヤー径が小さすぎる場合は、以下に示すように防水テープで巻くことができます：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/11.png"/></div>

これで配線が完了しました。次に、S2100をセットアップし、APPで設定しましょう。

# S2100のセットアップ

## センサーをアプリに接続

1. ボタンを押して**3秒間**保持すると、LEDが1秒間隔で点滅します。1分以内にアプリを使用してセンサーに接続してください。そうしないと、デバイスの電源が切れるか再起動します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/12.png"/></div>

2. 「S2100 Data Logger」を選択してください。

「Setup」ボタンをクリックしてBluetoothをオンにし、「Scan」をクリックしてセンサーのBluetoothのスキャンを開始してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/13.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/14.png"/></div>

3. S/N（S/Nはセンサーの前面ラベルに記載）でセンサーを選択します。その後、入力後にセンサーの基本情報が表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/15.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/16.png"/></div>

4. Bluetooth接続が成功した後、設定モードに入ります：LEDが2秒間隔で点滅します。

## アプリを通じて基本パラメータを設定

### プラットフォームと周波数の選択

S210xセンサーは、1つのSKUで863MHz～928MHzのユニバーサル周波数プランをサポートするように製造されています。つまり、すべての単一デバイスが7つの周波数プランをサポートできます。

ここでは「SenseCAP for Helium」または「SenseCAP for TTN」を選択します。実際の状況に基づいて周波数プランを選択してください。

**\*注意:** Data Loggerは、ユーザーの周りにHeliumネットワークがある場合にデータをアップロードできます。SenseCAP専用のHelium Consoleで動作します。ユーザーはHelium Consoleでデバイスを作成する必要はありません；

SenseCAP for TTNプラットフォームは、SenseCAP LoRaWAN屋外ゲートウェイ(https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)と組み合わせて使用する必要があります

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/17.png"/></div>

### インターバルの設定

デバイスの動作モード：インターバルごとにデバイスを起動し、測定値を収集してLoRaを通じてアップロードします。

例えば、デバイスは**デフォルトで60分ごと**にデータを収集してアップロードします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/18.png"/></div>

### パケットポリシーの設定

センサーのアップリンクパケット戦略には3つのモードがあります。ここでは1Nを選択するか、独自の要件に応じて選択できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/19.png"/></div>

| **パラメータ** | **説明** |
| --- | --- |
| 2C+1N (デフォルト) | 2C+1N（2つの確認パケットと1つの非確認）は最適な戦略で、このモードはパケット損失率を最小化できますが、デバイスはTTNで最も多くのデータパケットを消費するか、Heliumネットワークでデータクレジットを消費します。 |
| 1C | 1C（1つの確認）デバイスはサーバーから1つの受信確認パケットを取得した後にスリープします。 |
| 1N | 1N（1つの非確認）デバイスはパケットを送信するだけで、その後スリープを開始し、サーバーがデータを受信したかどうかは関係ありません。 |

### 工場出荷時設定に復元

SenseCAPプラットフォームを選択する場合、固定のEUI/App EUI/App Keyを使用する必要があります。そのため、他のプラットフォームからSenseCAPプラットフォームに戻す前に、工場出荷時設定に復元する必要があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/20.png"/></div>

間違いを犯した場合やすべてをリセットしたい場合は、ボタンをクリックできます。デバイスは工場出荷時のデフォルト設定に復元されます。

**\*注意:** 「工場出荷時設定に復元」機能は、基本設定のみをリセットできます。

## アプリ経由でアナログセンサーを設定

「プロトコル」を「アナログ入力」として選択します。次に、以下のパラメータを順番に設定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/21.png"/></div>

電源タイプを**定期電源**として選択します。

| 電源電圧 | ここでは**5V**を選択します。 |
| --- | --- |
| センサーウォームアップ時間 | ウォームアップ時間は、電圧供給が適用された後、センサーが最高精度または性能レベルに達するまでにかかる時間を示します。ここでは**200(ms)**を入力します。 |
| 電圧範囲 | 0-10V（データロガーは0～10V内の電圧信号を収集でき、精度を向上させるために上限を自動調整します）。ここでは**電圧**を選択します。 |
| インターフェースV1 | データロガーは2つのアナログ電圧信号をサポートします。センサーワイヤーがV1/V2に接続されている場合、設定を有効にできます。ここでは**インターフェースV1**を有効にします。 |
| インターフェースV2 |
| Y= Ax + B | 「Y」：データロガーがアップロードする値です。「x」：元の電流値です。ファクターA：「x」の倍数でスケールアップまたはスケールダウンできるカスタム値。ファクターB：「x」の値を増加または減少させるカスタム値。AとBの値を設定することで、希望する値を計算できます。ここではAを**100**、Bを**0**に設定します。 |

設定情報の入力が完了したら、「Back to Home」をクリックします（この時点で、ノードとAPPのBluetoothは自動的に切断されます）。Data Loggerはネットワークへの接続を試行します（ネットワークへの接続を試行中はLEDインジケータが赤色でゆっくり点滅し、ネットワーク接続が成功すると緑色で素早く点滅します）。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/22.png"/></div>

# SenseCAP Portalでデータを確認する

## センサーをSenseCAP Portalにバインドする

SenseCAP Mate Appを開いてください。

1. **QRコードをスキャンする**

1. デバイスページの右上角にある「Add device」をクリックして、デバイスバインディングページに入ります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/23.png"/></div>

1. デバイス上のQRコードをスキャンして、デバイスをあなたのアカウントにバインドします。指定されたグループに設定しない場合、デバイスは「default」グループに配置されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/24.png"/></div>

1. **EUIを手動で入力する**

QRコードステッカーが破損している場合は、デバイスのEUIを手動で入力してデバイスをあなたのアカウントにバインドできます。システムが推奨する形式でEUIを入力し、「confirm」をクリックしてください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/25.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/26.png"/></div>

## SenseCAP Mate APPでデータを確認する

最後に、SenseCAP AppまたはWebサイト [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) で、デバイスのオンライン状態と最新データを確認できます。各センサーのリストで、オンライン状態と最後のデータアップロード時刻を確認できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/27.png"/></div>

また、SenseCAP Mate APPでデータを確認することもできます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/28.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/1.png"/></div>
