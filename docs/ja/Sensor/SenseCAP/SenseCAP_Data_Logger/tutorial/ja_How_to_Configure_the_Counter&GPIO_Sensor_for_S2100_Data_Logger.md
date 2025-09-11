---
description: カウンター & GPIO センサーの設定
title: カウンター & GPIO センサーの設定
keywords:
- SenseCAP データロガー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger
last_update:
  date: 05/15/2025
  author: Yvonne
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# # S2100をカウンター & GPIO センサーで始める
S2100をカウンター & GPIO センサーと一緒に使用する方法を学びましょう。その後、S2100の基本的なアプリケーションについて説明します。これにより、将来的にカスタマイズしたセンサーを接続する方法についての良いアイデアが得られるでしょう。

## センサープローブ

以下のアイテムを準備してください：

- データロガー
- 雨量計 RG-15 雨センサー（例として）
- 8ピンワイヤー
- プラスドライバー（プラスリセス No.2）
- SenseCAP Mate アプリ
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/2.png"/></div>

# センサープローブを接続する

## データロガーを分解する

1. 3本のネジを外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/3.png"/></div>

2. カバーを取り外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/4.png"/></div>

3. スレッドキャップを取り外し、センサーのケーブルを通し、底カバーを通して配線端子に接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/5.png"/></div>

| **番号** | **ピン** | **説明** |
| --- | --- | --- |
| 1 | 12V | 外部12V入力電圧。データロガーは外部12V DC電源で動作可能です。12V電源を使用する場合、バッテリーはバックアップ電源として機能します。 |
| 2 | 5V | 5V出力電圧、センサーに5V電圧を供給します。 |
| 3 | 3V | 3V出力電圧、センサーに3V電圧を供給します。 |
| 4 | IO | レベル取得またはパルス入力 |
| 5 | V1 | 0～10Vの電圧入力を取得 |
| 6 | V2 | 0～10Vの電圧入力を取得 |
| 7 | A | RS485 A/+ |
| 8 | B | RS485 B/- |
| 9 | I1 | 4～20mAの電流入力を取得 |
| 10 | I2 | 4～20mAの電流入力を取得 |
| 11 | GND | グランドピン |
| 12 | GND | グランドピン |

## センサーの電源供給オプション

データロガーは2つの電源供給モードをサポートしており、内蔵バッテリーモードを選択します：

| **モード** | **説明** |
| --- | --- |
| 内蔵バッテリー | データロガーとセンサーはバッテリーで動作します。この場合、データロガーは5Vセンサーに接続可能です。 |

## データロガーへの接続

データロガーの配線順：

| **ワイヤータイプ** | **説明** |
| --- | --- |
| 赤いワイヤー | 5V |
| 黒いワイヤー | GND（どのポートでも可） |
| 黄色いワイヤー | IO |

1. 8ピンワイヤーを底カバーを通してデータロガーのベースに接続し、配線順の要件に従います。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/6.png"/></div>

2. 上部カバー、ゴムリング、スクリューキャップを順番に接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/8.png"/></div>

3. **ネジとスクリューキャップを締めて**防水性を確認します。ワイヤーの直径が細すぎる場合は、防水テープを巻いてください。

**\*注意:** デバイスを組み立てる際には、データロガーとアダプターボックスの防水パッドを取り付け、スクリューキャップとネジを締める必要があります。そうしないと、デバイスの防水効果が損なわれる可能性があります！

ワイヤーの直径が小さすぎる場合は、防水テープで巻くことができます。以下の図を参照してください：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/9.png"/></div>

## 雨量計センサーへの接続

雨量計センサーの配線順序：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/10.png"/></div>

1. 4つのネジを外し、カバーを取り外します。8ピンのワイヤーを底部カバーを通して、配線順序の要件に従ってJ1のベースに接続します。

| ワイヤータイプ | 説明 |
| --- | --- |
| 赤 | V+ |
| 黒 | GND |
| 黄色 | OUT |

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/11.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/12.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/13.png"/></div>

2. 雨量計センサーS1ベースのDIPスイッチ**1**をONにし、スイッチ**2**をOFFにします。さらに**3**と**4**をOFFにします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/14.png"/></div>

3. カバーを取り付け、ネジを締めます。接続が完了しました。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/15.png"/></div>

これで配線が完了しました。次に、S2100をセットアップし、アプリで設定を行います。

# S2100のセットアップ

## センサーをアプリに接続する

1. ボタンを押して**3秒間**保持します。LEDが1秒間隔で点滅します。この間にアプリを使用してセンサーに接続してください。1分以内に接続しない場合、デバイスは電源が切れるか再起動します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/16.png"/></div>

2. 「S2100 Data Logger」を選択してください。

「Setup」ボタンをクリックしてBluetoothをオンにし、「Scan」をクリックしてセンサーのBluetoothをスキャンします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/17.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/18.png"/></div>

3. センサーをS/N（センサーの前面ラベルに記載されているS/N）で選択します。入力後、センサーの基本情報が表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/19.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/20.png"/></div>

4. Bluetooth接続が成功すると、設定モードに入ります：LEDが2秒間隔で点滅します。

## アプリを使用して基本パラメータを設定する

### プラットフォームと周波数を選択する

S210xセンサーは、863MHz～928MHzのユニバーサル周波数プランを1つのSKUでサポートするように製造されています。つまり、各デバイスは7つの周波数プランをサポートできます。

ここでは「SenseCAP for Helium」または「SenseCAP for TTN」を選択します。周波数プランは実際の状況に基づいて選択してください。

**\*注意:** データロガーは、ユーザー周辺にHeliumネットワークがある場合にデータをアップロードできます。これはSenseCAP専用のHeliumコンソールで動作します。ユーザーはHeliumコンソールでデバイスを作成する必要はありません。

SenseCAP for TTNプラットフォームは、SenseCAP LoRaWAN屋外[ゲートウェイ](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)と一緒に使用する必要があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/21.png"/></div>

### インターバルを設定する

デバイスの動作モード：デバイスを一定間隔で起動し、測定値を収集してLoRaを介してアップロードします。

例えば、デバイスは**デフォルトで60分ごと**にデータを収集してアップロードします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/22.png"/></div>

### パケットポリシーを設定する

センサーのアップリンクパケット戦略には3つのモードがあります。ここでは1Nを選択するか、必要に応じて選択してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/23.png"/></div>

| **パラメータ** | **説明** |
| --- | --- |
| 2C+1N (デフォルト) | 2C+1N（2つの確認パケットと1つの非確認パケット）は最適な戦略であり、このモードはパケット損失率を最小化します。ただし、デバイスはTTNで最も多くのデータパケットを消費し、Heliumネットワークではデータクレジットを消費します。 |
| 1C | 1C（1つの確認パケット）デバイスはサーバーから1つの確認パケットを受信した後にスリープします。 |
| 1N | 1N（1つの非確認パケット）デバイスはパケットを送信した後、サーバーがデータを受信したかどうかに関係なくスリープを開始します。 |

### 工場出荷時設定に戻す

SenseCAPプラットフォームを選択する場合、固定されたEUI/App EUI/App Keyを使用する必要があります。そのため、他のプラットフォームからSenseCAPプラットフォームに戻す前に工場出荷時設定に戻す必要があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/24.png"/></div>

誤操作をした場合やすべてをリセットしたい場合は、ボタンをクリックしてください。デバイスは工場出荷時のデフォルト設定に戻ります。

**\*注意:** 「Restore Factory」機能は基本設定のみをリセットできます。

## アプリでGPIOセンサーを設定する

「プロトコル」を「GPIO」として選択します。その後、以下のパラメータを順番に設定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/25.png"/></div>

1. センサーへの供給電圧を選択します。3V/5V/12Vをサポートしています。ここでは**5V**を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/26.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/27.png"/></div>

2. 「センサーウォームアップ時間」を設定します。ウォームアップ時間は、電圧供給が適用された後、センサーが最高の精度または性能レベルに達するまでにかかる時間を示します。ここでは**50(ms)**を入力します。
3. 入力タイプを選択します：

| レベルモード | 入力レベル信号が収集されます。高レベルは1、低レベルは0です。 |
| --- | --- |
| カウンターモード | パルス信号が収集され、パルスの数が記録されます。 |

ここでは**カウンターモード**を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/28.png"/></div>

### カウンターセンサーを設定する

入力タイプとして「カウンターモード」を選択します。その後、以下のパラメータを順番に設定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/29.png"/></div>

| デジタル入力 | パルス入力のタイプを設定します。プルハイ：立ち上がりエッジが検出された場合に有効。プルロー：立ち下がりエッジが検出された場合に有効。ここでは**プルハイ**を選択します。 |
| --- | --- |
| デジタルフィルター | パルス幅が10msを超える場合に有効化することを推奨します。デフォルトで有効化されています。ここでは**有効化**します。 |
| 再起動でカウントをクリア | データロガーが再起動すると、カウントが0にクリアされます。デフォルトでは無効化されています。ここでは**無効化**します。 |
| Y= Ax + B | 「Y」：データロガーがアップロードする値。「x」：元のカウンター値。ファクトリーA：カスタム値で、「x」を倍数でスケールアップまたはダウンできます。ファクトリーB：カスタム値で、「x」の値を増加または減少させます。AとBの値を設定することで、希望する値を計算できます。ここでは**A=0.2**、**B=0**を設定します。 |
| 単位時間収集 | この機能を有効化すると、アップロード値が増加します：1時間あたりの累積量。例えば、1時間内のYの値が1000の場合、1000/hがアップロードされます。ここでは**無効化**します。 |

設定情報が完了したら、「ホームに戻る」をクリックします（この時点でノードとアプリのBluetooth接続が自動的に切断されます）。データロガーはネットワークへの接続を試みます（ネットワーク接続を試みている間はLEDインジケーターが赤くゆっくり点滅し、ネットワーク接続が成功すると緑色に速く点滅します）。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/30.png"/></div>

# SenseCAPポータルでデータを確認する

## センサーをSenseCAPポータルにバインドする

SenseCAP Mateアプリを開いてください。

1. QRコードをスキャンします。

2. デバイスページの右上にある「デバイスを追加」をクリックして、デバイスバインドページに移動します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/31.png"/></div>

3. デバイスのQRコードをスキャンして、デバイスをアカウントにバインドします。指定されたグループに設定しない場合、デバイスは「デフォルト」グループに配置されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/32.png"/></div>

4. EUIを手動で入力する

QRコードステッカーが損傷している場合、デバイスのEUIを手動で入力してアカウントにバインドすることができます。システムが提案する形式でEUIを入力し、「確認」をクリックしてください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/33.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/34.png"/></div>

## SenseCAP ポータルでデータを確認する

SenseCAP アプリまたはウェブサイト [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) で、デバイスのオンラインステータスや最新データを確認することができます。各センサーのリストでは、オンラインステータスや最後のデータアップロード時刻を確認できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/35.png"/></div>

また、SenseCAP Mate アプリで日付を確認することもできます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/36.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/1.png"/></div>