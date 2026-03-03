---
description: カウンター & GPIO センサーの設定
title: カウンター & GPIO センサーの設定
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
---

# # カウンター&GPIOセンサーでS2100を始める

S2100をカウンター&GPIOセンサーと一緒に使用する方法を学習することから始めましょう。それができたら、S2100のアプリケーションの基本に進みます。これにより、将来的に独自のカスタマイズされたセンサーを接続する方法について良いアイデアが得られるでしょう。

## センサープローブ

以下のアイテムを準備してください：

- データロガー
- 雨量計RG-15雨センサー（例として）
- 8ピンワイヤー
- プラスドライバー（プラス溝No.2）
- SenseCAP Mate APP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/2.png"/></div>

# センサープローブの接続

## データロガーの分解

1. 3本のネジを外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/3.png"/></div>

2. カバーを取り外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/4.png"/></div>

3. ねじキャップを取り外し、センサーのケーブルを通し、ボトムカバーを通して、配線端子に接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/5.png"/></div>

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

## センサーの電源供給オプション

データロガーは2つの電源供給モードをサポートしており、内蔵バッテリーモードを選択します：

| **モード** | **説明** |
| --- | --- |
| 内蔵バッテリー | データロガーとセンサーはバッテリーで電源供給されます。この場合、データロガーは5Vセンサーに接続できます。 |

## データロガーへの接続

データロガーの配線順序：

| **配線タイプ** | **説明** |
| --- | --- |
| 赤線 | 5V |
| 黒線 | GND（どのポートでも問題ありません） |
| 黄線 | IO |

1. 8ピン線をボトムカバーに通し、配線順序の要件に従ってデータロガーのベースに接続します；

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/6.png"/></div>

2. アッパーカバー、ゴムリング、スクリューキャップを順番に接続します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/8.png"/></div>

3. **ネジとスクリューキャップを締めて**防水性を確認します。配線の直径が細すぎる場合は、防水テープを巻いて補強してください。

**\*注意:** デバイスを組み立てる際は、データロガーとアダプターボックスの防水パッドを取り付け、スクリューキャップとネジを締める必要があります。そうしないと、デバイスの防水効果に影響する可能性があります！

配線の直径が小さすぎる場合は、以下に示すように防水テープで巻くことができます：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/9.png"/></div>

## 雨量計センサーへの接続

雨量計センサーの配線順序：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/10.png"/></div>

1. 4本のネジを外し、カバーを取り外します。8ピン線をボトムカバーに通し、配線順序の要件に従ってJ1のベースに接続します；

|配線タイプ|説明|
| --- | --- |
|赤|  V+|
|黒| GND|
|黄|OUT|

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/11.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/12.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/13.png"/></div>

2. 雨量センサーS1ベースのDIPスイッチ**1**をONに、スイッチ**2**をOFFに、**3**と**4**をOFFに設定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/14.png"/></div>

3. カバーを取り付け、ネジを締めます。接続が完了しました。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/15.png"/></div>

これで配線が完了しました。次に、S2100をセットアップし、アプリで設定を行いましょう。

# S2100のセットアップ

## センサーをアプリに接続

1. ボタンを**3秒間**押し続けると、LEDが1秒間隔で点滅します。1分以内にアプリを使用してセンサーに接続してください。そうしないと、デバイスの電源が切れるか再起動します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/16.png"/></div>

2. 「S2100 Data Logger」を選択してください。

「Setup」ボタンをクリックしてBluetoothをオンにし、「Scan」をクリックしてセンサーのBluetoothのスキャンを開始してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/17.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/18.png"/></div>

3. S/N（シリアル番号はセンサーの前面ラベルに記載）でセンサーを選択します。その後、入力するとセンサーの基本情報が表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/19.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/20.png"/></div>

4. Bluetooth接続が成功すると設定モードに入ります：LEDが2秒間隔で点滅します。

## アプリを通じた基本パラメータの設定

### プラットフォームと周波数の選択

S210xセンサーは、1つのSKUで863MHz～928MHzのユニバーサル周波数プランをサポートするように製造されています。つまり、すべての単一デバイスが7つの周波数プランをサポートできます。

ここでは「SenseCAP for Helium」または「SenseCAP for TTN」を選択します。周波数プランは実際の状況に基づいて選択してください。

**\*注意:** Data Loggerは、ユーザーの周辺にHeliumネットワークがある場合にデータをアップロードできます。SenseCAPプライベートHeliumコンソールで動作します。ユーザーはHeliumコンソールでデバイスを作成する必要はありません。

SenseCAP for TTNプラットフォームは、SenseCAP LoRaWAN屋外[ゲートウェイ](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)と組み合わせて使用する必要があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/21.png"/></div>

### インターバルの設定

デバイスの動作モード：インターバルごとにデバイスを起動し、測定値を収集してLoRaを通じてアップロードします。

例えば、デバイスは**デフォルトで60分ごと**にデータを収集してアップロードします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/22.png"/></div>

### パケットポリシーの設定

センサーのアップリンクパケット戦略には3つのモードがあります。ここでは1Nを選択するか、独自の要件に応じて選択できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/23.png"/></div>

| **パラメータ** | **説明** |
| --- | --- |
| 2C+1N (デフォルト) | 2C+1N（2つの確認パケットと1つの非確認パケット）は最適な戦略で、このモードはパケット損失率を最小化できますが、デバイスはTTNで最も多くのデータパケットを消費するか、Heliumネットワークでデータクレジットを消費します。 |
| 1C | 1C（1つの確認）デバイスはサーバーから1つの受信確認パケットを取得した後にスリープします。 |
| 1N | 1N（1つの非確認）デバイスはパケットを送信するだけで、その後スリープを開始し、サーバーがデータを受信したかどうかは関係ありません。 |

### 工場設定の復元

SenseCAPプラットフォームを選択する場合、固定のEUI/App EUI/App Keyを使用する必要があります。そのため、他のプラットフォームからSenseCAPプラットフォームに戻す前に、工場設定を復元する必要があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/24.png"/></div>

間違いを犯した場合や、すべてをリセットしたい場合は、ボタンをクリックできます。デバイスは工場出荷時のデフォルト設定に復元されます。

**\*注意:** 「工場設定の復元」機能は、基本設定のみをリセットできます。

## アプリ経由でのGPIOセンサーの設定

「プロトコル」として「GPIO」を選択します。次に、以下のパラメータを順番に設定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/25.png"/></div>

1. センサーへの供給電圧を選択します。3V/5V/12Vをサポートしています。ここでは**5V**を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/26.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/27.png"/></div>

2. 「センサーウォームアップ時間」を設定します。ウォームアップ時間は、電圧供給が適用されてからセンサーが最高精度または性能レベルに達するまでにかかる時間を示します。ここでは**50(ms)**を入力します。
2. 入力タイプを選択します：

| レベルモード | 入力レベル信号が収集され、ハイレベルは1、ローレベルは0 |
| --- | --- |
| カウンターモード | パルス信号が収集され、パルス数が記録される |

ここでは**カウンターモード**を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/28.png"/></div>

### カウンターセンサーの設定

入力タイプとして「カウンターモード」を選択します。次に、以下のパラメータを順番に設定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/29.png"/></div>

| デジタル入力 | 入力パルスのタイプを設定します。プルハイ：立ち上がりエッジが検出されたときに有効。プルロー：立ち下がりエッジが検出されたときに有効。ここでは**プルハイ**を選択します。 |
| --- | --- |
| デジタルフィルタ | パルス幅が10msを超える場合に有効にすることを推奨します。デフォルトで有効になっています。ここでは**有効**にします。 |
| 再起動時にカウントをクリア | データロガーの再起動が発生したときに、カウントが0にクリアされます。デフォルトでは無効になっています。ここでは**無効**にします。 |
| Y= Ax + B | "Y"：データロガーがアップロードする値です。"x"：元のカウンター値です。ファクターA："x"の倍数でスケールアップまたはスケールダウンできるカスタム値。ファクターB："x"の値を増加または減少させるカスタム値。AとBの値を設定することで、希望する値を計算できます。**A=0.2**と**B=0**を設定します。 |
| 単位時間収集 | この機能を有効にすると、アップロードに値が追加されます：1時間あたりの累積量。例えば、1時間以内のYの値が1000の場合、1000/hがアップロードされます。ここでは**無効**にします。 |

設定情報の入力が完了したら、「Back to Home」をクリックします（この時点で、ノードとAPPのBluetoothは自動的に切断されます）。Data Loggerはネットワークへの接続を試行します（ネットワークへの接続を試行中はLEDインジケータが赤色でゆっくり点滅し、ネットワーク接続が成功すると緑色で素早く点滅します）。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/30.png"/></div>

# SenseCAP Portalでデータを確認する

## センサーをSenseCAP Portalにバインドする

SenseCAP Mate Appを開いてください。

1. QRコードをスキャンする

2. デバイスページの右上角にある「Add device」をクリックして、デバイスバインディングページに入ります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/31.png"/></div>

3. デバイス上のQRコードをスキャンして、デバイスをあなたのアカウントにバインドします。指定されたグループに設定しない場合、デバイスは「default」グループに配置されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/32.png"/></div>

4. EUIを手動で入力する

QRコードステッカーが破損している場合、デバイスのEUIを手動で入力してデバイスをあなたのアカウントにバインドできます。システムが推奨する形式でEUIを入力し、「confirm」をクリックしてください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/33.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/34.png"/></div>

## SenseCAP Portalでデータを確認する

SenseCAP Appまたはウェブサイト [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) で、デバイスのオンライン状態と最新データを確認できます。各センサーのリストで、オンライン状態と最後のデータアップロード時刻を確認できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/35.png"/></div>

また、SenseCAP Mate APPでもデータを確認できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/36.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/1.png"/></div>
