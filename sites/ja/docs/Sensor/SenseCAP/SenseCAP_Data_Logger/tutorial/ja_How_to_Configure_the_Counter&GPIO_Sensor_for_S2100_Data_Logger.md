---
description: Counter&GPIO センサーを設定する
title: Counter&GPIO センサーを設定する
keywords:
  - SenseCAP データロガー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger/
---

# # Counter&GPIO センサーで S2100 を使い始める

まずは Counter&GPIO センサー付きの S2100 の使い方を学びましょう。それが理解できたら、S2100 アプリケーションの基本に進みます。これにより、将来自分でカスタマイズしたセンサーをどのように接続するかの良いイメージが得られます。

## センサープローブ

以下のものを準備します：

- データロガー
- 雨量計 RG-15 レインセンサー（例として）
- 8 ピンワイヤー
- プラスドライバー（十字 No.2）
- SenseCAP Mate APP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/2.png"/></div>

# センサープローブを接続する

## データロガーを分解する

1. 3 本のネジを外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/3.png"/></div>

2. カバーを取り外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/4.png"/></div>

3. スレッドキャップを外し、センサーのケーブルを通してから、ボトムカバーに通し、配線端子に接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/5.png"/></div>

| **No.** | **ピン** | **説明** |
| --- | --- | --- |
| 1 | 12V | 外部 12V 入力電圧。データロガーは外部 12V DC 電源で給電できます。12V 電源を使用する場合、バッテリーはバックアップ電源として機能します。 |
| 2 | 5V | 5V 出力電圧で、センサーに 5V 電圧を供給します。 |
| 3 | 3V | 3V 出力電圧で、センサーに 3V 電圧を供給します。 |
| 4 | IO | レベルまたはパルス入力の取得 |
| 5 | V1 | 0〜10V の電圧入力を取得 |
| 6 | V2 | 0〜10V の電圧入力を取得 |
| 7 | A | RS485 A/+ |
| 8 | B | RS485 B/- |
| 9 | I1 | 4〜20mA の電流入力を取得 |
| 10 | I2 | 4〜20mA の電流入力を取得 |
| 11 | GND | グランドピン |
| 12 | GND | グランドピン |

## センサーの電源オプション

データロガーは 2 つの電源モードをサポートしており、ここでは内蔵バッテリーモードを選択します：

| **モード** | **説明** |
| --- | --- |
| Built-in Battery | データロガーとセンサーはバッテリーで駆動されます。この場合、データロガーは 5V センサーに接続できます。 |

## データロガーへの接続

データロガー側の配線順序：

| **ワイヤー種別** | **説明** |
| --- | --- |
| 赤いワイヤー | 5V |
| 黒いワイヤー | GND（どのポートでも可） |
| 黄色いワイヤー | IO |

1. 8 ピンワイヤーをボトムカバーに通し、配線順序の要件に従ってデータロガーのベースに接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/6.png"/></div>

2. 上部カバー、ゴムリング、スクリューキャップを順番に取り付けます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/8.png"/></div>

3. **ネジとスクリューキャップをしっかり締めて** 防水性を確認します。ワイヤー径が細すぎる場合は、防水テープを巻き付けてください。

**\*注意：** 装置を組み立てる際は、データロガーおよびアダプタボックスの防水パッドを必ず取り付け、スクリューキャップとネジをしっかり締めてください。そうしないと、装置の防水性能に影響を与える可能性があります。

ワイヤー径が小さすぎる場合は、下図のように防水テープを巻き付けることができます：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/9.png"/></div>

## レインゲージセンサーへの接続

レインゲージセンサーの配線順序：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/10.png"/></div>

1. 4 本のネジを外してカバーを取り外します。8 ピンワイヤーをボトムカバーに通し、配線順序の要件に従って J1 のベースに接続します。

|Wire Type|Description|
| --- | --- |
|Red|  V+|
|Black| GND|
|Yellow|OUT|

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/11.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/12.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/13.png"/></div>

2. レインセンサー S1 ベースの DIP スイッチ **1** を ON にし、スイッチ **2** を OFF、**3** と **4** も OFF にします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/14.png"/></div>

3. カバーを取り付けてネジを締めます。これで接続完了です。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/15.png"/></div>

これで配線は完了しました。次に、S2100 をセットアップし、APP 上で設定を行いましょう。

## 漏水検知器への接続

漏水検知センサーの配線順序：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/37.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/38.png"/></div>

|Wire Type|Description|
| --- | --- |
|Red|V+|
|Blue|NC (normally closed signal)|
|Yellow|COM|
|White|IN IO|
|Brown|V-|

1. 5 芯ケーブルをボトムカバーに通し、配線順序の要件に従ってデータロガーのベースに接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/39.png"/></div>

| **センサーのワイヤー色** | **機能** | **S2100 上の端子** |
| --- | --- | --- |
| **Red** | 正電源 | **`5V OUT`** |
| **Brown** | 負電源 | **`GND`** |
| **Yellow** | 信号共通 | **`GND`** |
| **White** | デジタルスイッチ信号 | **`IO IN`** |
| **Blue** | ノーマルクローズ信号 | *(接続せずテープで絶縁する)* |

2. 上部カバー、ゴムリング、ケーブルナットを順番に再度取り付けます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/41.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/42.png"/></div>

# S2100 をセットアップする

## センサーをアプリに接続する

1. ボタンを**3 秒間**押し続けると、LED が 1 秒周期で点滅します。1 分以内にアプリを使用してセンサーに接続してください。そうしないと、デバイスは電源が切れるか再起動します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/16.png"/></div>

2. 「S2100 Data Logger」を選択してください。

「User」ボタンをクリックしてユーザー設定に入り、「Bluetooth Configuration」をクリックしてセンサーの Bluetooth のスキャンを開始します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/50.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/51.png"/></div>

3. S/N（S/N はセンサー前面ラベルに記載）でセンサーを選択します。その後、入室するとセンサーの基本情報が表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/52.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/53.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/54.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/55.png"/></div>

4. Bluetooth 接続が成功すると設定モードに入ります：LED が 2 秒周期で点滅します。

## アプリで基本パラメータを設定する

### プラットフォームと周波数を選択する

S210x センサーは、1 つの SKU で 863MHz〜928MHz のユニバーサル周波数プランをサポートするよう製造されています。つまり、各デバイスは 7 つの周波数プランをサポートできます。

ここでは「SenseCAP for Helium」または「SenseCAP for TTN」を選択します。周波数プランは実際の状況に基づいて選択してください。

**\*注意：** データロガーは、ユーザーの周囲に Helium ネットワークがある場合にデータをアップロードできます。これは SenseCAP プライベート Helium Console 上で動作します。ユーザーが Helium Console 上でデバイスを作成する必要はありません。

SenseCAP for TTN プラットフォームは、SenseCAP LoRaWAN 屋外用 [gateway](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html) と組み合わせて使用する必要があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/56.png"/></div>

### インターバルを設定する

デバイスの動作モード：設定したインターバルごとにデバイスをウェイクアップし、測定値を収集して LoRa 経由でアップロードします。

例えば、デバイスは**デフォルトで 5 分ごと**にデータを収集してアップロードします。

### パケットポリシーを設定する

センサーのアップリンクパケット戦略には 3 つのモードがあり、ここでは 1N を選択しますが、要件に応じて選択することもできます。

| **パラメータ** | **説明** |
| --- | --- |
| 2C+1N (default) | 2C+1N（2 つの確認パケットと 1 つの非確認）は最適な戦略であり、このモードはパケットロス率を最小限に抑えられますが、TTN では最も多くのデータパケットを消費し、Helium ネットワークでは最も多くのデータクレジットを消費します。 |
| 1C | 1C（1 つの確認）の場合、デバイスはサーバーから 1 つの確認パケットを受信するとスリープに入ります。 |
| 1N | 1N（1 つの非確認）の場合、デバイスはパケットを送信したら、サーバーがデータを受信したかどうかに関係なくスリープを開始します。 |

### 工場出荷時設定に戻す

SenseCAP プラットフォームを選択する場合は、固定の EUI/App EUI/App Key を使用する必要があります。そのため、他のプラットフォームから SenseCAP プラットフォームに戻す前に、工場出荷時設定を復元する必要があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/57.png"/></div>

誤操作をした場合や、すべてをリセットしたい場合は、このボタンをクリックします。デバイスは工場出荷時のデフォルト設定に復元されます。

**\*注意：** "Restore Factory" 機能でリセットできるのは Basic Setting のみです。

## アプリで GPIO センサーを設定する

"Protocol" を "GPIO" に選択します。その後、以下のパラメータを順番に設定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/25.png"/></div>

1. センサーへの供給電圧を選択します。3V/5V/12V をサポートします。ここでは **5V** を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/26.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/27.png"/></div>

2. "Sensor Warm-up time" を設定します。ウォームアップ時間とは、電源が投入されてからセンサーが最高の精度または性能レベルに達するまでに必要な時間を示します。ここでは **50(ms)** を入力します。
2. 入力タイプを選択します：

| レベルモード | 入力レベル信号を取得し、高レベルを 1、低レベルを 0 として扱います |
| --- | --- |
| カウンターモード | パルス信号を取得し、パルス数を記録します |

ここでは **Counter Mode** を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/28.png"/></div>

### カウンターセンサーの設定

入力タイプとして "Counter Mode" を選択します。その後、以下のパラメータを順番に設定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/29.png"/></div>

| デジタル入力 | 入力パルスのタイプを設定します。Pull High：立ち上がりエッジを検出したときに有効。Pull Low：立ち下がりエッジを検出したときに有効。ここでは **Pull High** を選択します。 |
| --- | --- |
| デジタルフィルタ | パルス幅が 10 ms を超える場合、有効にすることを推奨します。デフォルトで有効です。ここでは **Enable** のままにします。 |
| 再起動でカウントをクリア | Datalogger が再起動したとき、カウントを 0 にクリアします。デフォルトでは無効です。ここでは **Disable** のままにします。 |
| Y= Ax + B | "Y"：Datalogger がアップロードする値です。"x"：元のカウンター値です。Factory A："x" を倍率で拡大または縮小できるカスタム値です。Factory B："x" の値を増減させるカスタム値です。A と B の値を設定することで、目的の値を算出できます。ここでは **A=0.2**、**B=0** に設定します。 |
| 単位時間収集 | この機能を有効にすると、アップロードされる値が増えます：1 時間あたりの累積量です。例えば、1 時間内の Y の値が 1000 の場合、1000/h がアップロードされます。ここでは **Disable** のままにします。 |

設定情報が完了したら "Back to Home" をクリックします（この時点でノードと APP の Bluetooth は自動的に切断されます）。その後、Data Logger はネットワークへの接続を試みます（ネットワーク接続を試行中は LED インジケータが赤色でゆっくり点滅し、ネットワーク接続に成功すると緑色で高速点滅します）。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/30.png"/></div>

# SenseCAP ポータルでデータを確認する

## センサーを SenseCAP ポータルにバインドする

SenseCAP Mate App を開いてください。

1. QR コードをスキャンします

2. デバイスページ右上の "Add device" をクリックして、デバイスバインドページに入ります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/31.png"/></div>

3. デバイス上の QR コードをスキャンして、デバイスをあなたのアカウントにバインドします。指定グループを設定しない場合、デバイスは "default" グループに配置されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/32.png"/></div>

4. EUI を手動で入力する

QR コードのステッカーが破損している場合は、デバイスの EUI を手動で入力して、デバイスをあなたのアカウントにバインドできます。システムが推奨する形式で EUI を入力し、"confirm" をクリックしてください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/33.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/34.png"/></div>

## SenseCAP ポータルでデータを確認する

SenseCAP App またはウェブサイト [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) 上で、デバイスのオンライン状態と最新データを確認できます。各センサーの一覧では、そのオンライン状態と最後にデータがアップロードされた時刻を確認できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/35.png"/></div>

また、SenseCAP Mate APP で日付を確認することもできます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/36.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/1.png"/></div>
