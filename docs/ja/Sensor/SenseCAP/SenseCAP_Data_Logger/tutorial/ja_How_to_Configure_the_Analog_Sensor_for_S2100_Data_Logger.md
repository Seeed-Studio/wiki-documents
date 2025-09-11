---
description: アナログセンサーの設定
title: アナログセンサーの設定
keywords:
- SenseCAP データロガー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger
last_update:
  date: 05/15/2025
  author: Yvonne
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# S2100をアナログ入力センサーで始める
S2100をアナログ入力センサーと一緒に使用する方法を学びましょう。その後、S2100の基本的なアプリケーションについて説明します。これにより、将来的にカスタマイズされたセンサーを接続する方法についての良い理解が得られるでしょう。

## 必要なアイテムを準備する

- データロガー
- 光センサー（例として使用）
- 十字ドライバー（十字溝 No.2）
- SenseCAP Mate APP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/2.png"/></div>

# センサープローブを接続する
まず、配線を行います。以下の手順に従ってください。

## データロガーを分解する

1. 3本のネジを外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png"/></div>

2. カバーを取り外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png"/></div>

3. ねじ込みキャップを取り外し、センサーのケーブルを通し、底部カバーを通して配線端子に接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png"/></div>

## 配線端子の説明

| **番号** | **ピン** | **説明** |
| --- | --- | --- |
| 1 | 12V | 外部12V入力電圧。データロガーは外部12V DC電源で動作可能。12V電源を使用する場合、バッテリーはバックアップ電源として機能します。 |
| 2 | 5V | 5V出力電圧、センサーに5V電圧を供給します。 |
| 3 | 3V | 3V出力電圧、センサーに3V電圧を供給します。 |
| 4 | IO | レベルまたはパルス入力の取得 |
| 5 | V1 | 0〜10Vの電圧入力を収集 |
| 6 | V2 | 0〜10Vの電圧入力を収集 |
| 7 | A | RS485 A/+ |
| 8 | B | RS485 B/- |
| 9 | I1 | 4〜20mAの電流入力を収集 |
| 10 | I2 | 4〜20mAの電流入力を収集 |
| 11 | GND | グランドピン |
| 12 | GND | グランドピン |

## センサーの電源供給オプション

データロガーは2つの電源供給モードをサポートしています。光センサーは5V供給のみ必要なため、内蔵バッテリーモードを選択します。

| **モード** | **説明** |
| --- | --- |
| 内蔵バッテリー | データロガーとセンサーはバッテリーで動作します。この場合、データロガーは5Vセンサーに接続可能です。 |

## データロガーへの接続

データロガーの配線順：

| **ワイヤタイプ** | **説明** |
| --- | --- |
| 赤いワイヤ | 5V |
| 黒いワイヤ | GND（どのポートでも可） |
| 黄色いワイヤ | IO |

1. 8ピンワイヤを底部カバーを通してデータロガーのベースに接続し、配線順の要件に従います。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/6.png"/></div>

2. 上部カバー、ゴムリング、ねじ込みキャップを順に接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/8.png"/></div>

3. **ネジとねじ込みキャップを締めて防水性を確認します**。ワイヤ径が細すぎる場合は、防水テープを巻いてください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/9.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/10.png"/></div>

**\*注意:** デバイスを組み立てる際には、データロガーとアダプターボックスの防水パッドを取り付け、ねじ込みキャップとネジを締める必要があります。そうしないと、デバイスの防水効果が損なわれる可能性があります！

ワイヤ径が小さすぎる場合は、防水テープで巻くことができます。以下の図を参照してください：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/11.png"/></div>

これで配線が完了しました。次に、S2100を設定し、APPで構成を行いましょう。

# S2100のセットアップ

## センサーをアプリに接続する

1. ボタンを**3秒間**押し続けると、LEDが1秒間隔で点滅します。この状態で、1分以内にアプリを使用してセンサーに接続してください。それ以外の場合、デバイスは電源が切れるか再起動します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/12.png"/></div>

2. 「S2100 Data Logger」を選択してください。

「Setup」ボタンをクリックしてBluetoothをオンにし、「Scan」をクリックしてセンサーのBluetoothをスキャンします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/13.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/14.png"/></div>

3. S/N（センサーの前面ラベルに記載）でセンサーを選択します。その後、センサーの基本情報が表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/15.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/16.png"/></div>

4. Bluetooth接続が成功すると、設定モードに入ります：LEDが2秒間隔で点滅します。

## アプリを使用して基本パラメータを設定する

### プラットフォームと周波数を選択する

S210xセンサーは、1つのSKUで863MHz～928MHzのユニバーサル周波数プランをサポートするように製造されています。つまり、各デバイスは7つの周波数プランをサポートできます。

ここでは、「SenseCAP for Helium」または「SenseCAP for TTN」を選択します。周波数プランは実際の状況に基づいて選択してください。

**\*注意:** データロガーは、ユーザーの周囲にHeliumネットワークがある場合にデータをアップロードできます。これはSenseCAP専用のHeliumコンソールで動作します。ユーザーはHeliumコンソールでデバイスを作成する必要はありません。

SenseCAP for TTNプラットフォームは、SenseCAP LoRaWAN屋外ゲートウェイ(https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)と一緒に使用する必要があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/17.png"/></div>

### インターバルを設定する

デバイスの動作モード：デバイスを一定の間隔で起動し、測定値を収集してLoRaを介してアップロードします。

例えば、デバイスは**デフォルトで60分ごと**にデータを収集してアップロードします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/18.png"/></div>

### パケットポリシーを設定する

センサーのアップリンクパケット戦略には3つのモードがあります。ここでは1Nを選択しますが、必要に応じて選択してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/19.png"/></div>

| **パラメータ** | **説明** |
| --- | --- |
| 2C+1N (デフォルト) | 2C+1N（2つの確認パケットと1つの非確認パケット）は最適な戦略であり、このモードはパケット損失率を最小限に抑えます。ただし、デバイスはTTNで最も多くのデータパケット、またはHeliumネットワークでデータクレジットを消費します。 |
| 1C | 1C（1つの確認パケット）は、サーバーから1つの確認パケットを受信した後にデバイスがスリープします。 |
| 1N | 1N（1つの非確認パケット）は、デバイスがパケットを送信した後、サーバーがデータを受信したかどうかに関係なくスリープを開始します。 |

### 工場出荷時設定にリセットする

SenseCAPプラットフォームを選択する場合、固定されたEUI/App EUI/App Keyを使用する必要があります。そのため、他のプラットフォームからSenseCAPプラットフォームに戻す前に、工場出荷時設定にリセットする必要があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/20.png"/></div>

誤操作をした場合やすべてをリセットしたい場合は、ボタンをクリックしてください。デバイスは工場出荷時のデフォルト設定に戻ります。

**\*注意:** 「工場出荷時設定にリセット」機能は、基本設定のみをリセットできます。

## アナログセンサーをアプリで設定する
「プロトコル」を「アナログ入力」として選択します。その後、以下のパラメータを順に設定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/21.png"/></div>

電源タイプを **周期的電源** として選択します。

| 電源電圧 | ここでは **5V** を選択します。 |
| --- | --- |
| センサーウォームアップ時間 | ウォームアップ時間は、電源供給が適用されてからセンサーが最高の精度または性能レベルに達するまでに必要な時間を示します。ここでは **200(ms)** を入力します。 |
| 電圧範囲 | 0-10V（データロガーは0~10Vの範囲内の電圧信号を収集し、精度を高めるために上限を自動調整します）。ここでは **Voltage** を選択します。 |
| インターフェース V1 | データロガーは2つのアナログ電圧信号をサポートします。センサーの配線がV1/V2に接続されている場合、設定を有効にできます。ここでは **インターフェース V1** を有効にします。 |
| インターフェース V2 |
| Y= Ax + B | 「Y」: データロガーがアップロードする値。「x」: 元の電流値。係数A: 「x」を倍数で拡大または縮小するカスタム値。係数B: 「x」の値を増加または減少させるカスタム値。AとBの値を設定することで、希望する値を計算できます。ここでは A を **100**、B を **0** に設定します。 |

設定情報を完了したら、「ホームに戻る」をクリックします（この時点でノードとアプリのBluetooth接続が自動的に切断されます）。その後、データロガーはネットワークへの接続を試みます（ネットワーク接続を試みている間はLEDインジケーターが赤くゆっくり点滅し、ネットワーク接続が成功すると緑色に素早く点滅します）。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/22.png"/></div>

# SenseCAP ポータルでデータを確認する

## センサーを SenseCAP ポータルにバインドする

SenseCAP Mate アプリを開いてください。

1. **QRコードをスキャンする**

1. デバイスページの右上にある「デバイスを追加」をクリックして、デバイスバインドページに進みます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/23.png"/></div>

1. デバイスのQRコードをスキャンして、デバイスをアカウントにバインドします。指定されたグループに設定しない場合、デバイスは「デフォルト」グループに配置されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/24.png"/></div>

1. **EUIを手動で入力する**

QRコードのステッカーが破損している場合、デバイスのEUIを手動で入力してアカウントにバインドすることができます。システムが提案する形式でEUIを入力し、「確認」をクリックしてください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/25.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/26.png"/></div>

## SenseCAP Mate アプリでデータを確認する

最後に、SenseCAP アプリまたはウェブサイト [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) で、デバイスのオンライン状態と最新データを確認できます。各センサーのリストでは、オンライン状態と最後のデータアップロードの時間を確認できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/27.png"/></div>

また、SenseCAP Mate アプリでデータを確認することもできます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/28.png"/></div> 

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/1.png"/></div> 