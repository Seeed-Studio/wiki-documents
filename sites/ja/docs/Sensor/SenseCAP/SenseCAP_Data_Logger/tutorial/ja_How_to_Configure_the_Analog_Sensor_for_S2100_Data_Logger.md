---
description: アナログセンサーを設定する
title: アナログセンサーを設定する
keywords:
  - SenseCAP データロガー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger
last_update:
  date: 3/18/2026
  author: Kian
createdAt: '2023-02-24'
updatedAt: '2026-03-26'
url: https://wiki.seeedstudio.com/ja/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger/
---

# アナログ入力センサーで S2100 を使い始める

ここでは、アナログ入力センサーと一緒に S2100 を使う方法を学ぶことから始めます。それが理解できたら、S2100 のアプリケーションの基本に進みます。これにより、将来自分でカスタマイズしたセンサーをどのように接続すればよいかがよく分かるようになります。

## 必要なものを準備する

- データロガー
- 照度センサー（例として）
- プラスドライバー（プラス No.2）
- SenseCAP Mate APP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/2.png"/></div>

# センサープローブを接続する

まず配線を行う必要があります。以下の手順に従ってください。

## データロガーを分解する

1. 3 本のネジを外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png"/></div>

2. カバーを取り外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png"/></div>

3. ネジ付きキャップを外し、それをセンサーのケーブルに通し、さらにボトムカバーに通してから、配線端子に接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png"/></div>

## 配線端子の説明

| **No.** | **ピン** | **説明** |
| --- | --- | --- |
| 1 | 12V | 外部 12V 入力電圧。データロガーは外部 12V DC 電源で給電できます。12V 電源を使用する場合、バッテリーはバックアップ電源として機能します。 |
| 2 | 5V | 5V 出力電圧で、センサーに 5V 電圧を供給します。 |
| 3 | 3V | 3V 出力電圧で、センサーに 3V 電圧を供給します。 |
| 4 | IO | レベル取得またはパルス入力 |
| 5 | V1 | 0〜10V の電圧入力を取得します |
| 6 | V2 | 0〜10V の電圧入力を取得します |
| 7 | A | RS485 A/+ |
| 8 | B | RS485 B/- |
| 9 | I1 | 4〜20mA の電流入力を取得します |
| 10 | I2 | 4〜20mA の電流入力を取得します |
| 11 | GND | グランドピン |
| 12 | GND | グランドピン |

## 分解能

| **インターフェース**                   | **値**                  |
| --------------------------------|--------------------------- |
| 電流入力                         | 4〜20 mA（2 チャンネル）     |
| 電流入力分解能 (I1/I2)           | 0.001 mA                   |
| 電圧入力                         | 0〜10V（2 チャンネル）       |
| 電圧入力分解能 (V1/V2)           | 0.01 mV                    |

## センサーの電源オプション

データロガーは 2 つの電源モードをサポートしており、照度センサーは 5V 供給のみが必要なため、ここでは内蔵バッテリーモードを選択します。

| **モード** | **説明** |
| --- | --- |
| Built-in Battery | データロガーとセンサーはバッテリーで駆動されます。この場合、データロガーは 5V センサーに接続できます。 |

## データロガーへの接続

データロガーの配線順序：

| **ワイヤ種別** | **説明** |
| --- | --- |
| 赤いワイヤ | 5V |
| 黒いワイヤ | GND（どのポートでも可） |
| 黄色いワイヤ | IO |

1. 8 ピンワイヤをボトムカバーに通し、配線順序の要件に従ってデータロガーのベースに接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/6.png"/></div>

2. 上部カバー、ゴムリング、スクリューキャップを順番に取り付けます

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/8.png"/></div>

3. **ネジとスクリューキャップをしっかり締めて**防水性を確認します。ワイヤ径が細すぎる場合は、防水テープを巻き付けてください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/9.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/10.png"/></div>

**\*注意:** 装置を組み立てる際は、データロガーおよびアダプタボックスの防水パッドを必ず取り付け、スクリューキャップとネジをしっかり締めてください。そうしないと、装置の防水性能に影響を及ぼす可能性があります。

ワイヤ径が小さすぎる場合は、下図のように防水テープを巻き付けることができます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/11.png"/></div>

これで配線は完了です。次に、S2100 をセットアップし、APP 上で設定を行いましょう。

# S2100 をセットアップする

## センサーをアプリに接続する

1. ボタンを**3 秒間**押し続けると、LED が 1 秒周期で点滅します。1 分以内にアプリを使用してセンサーに接続してください。そうしないと、デバイスは電源オフまたは再起動します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/12.png"/></div>

2. 「S2100 Data Logger」を選択してください。

「Setup」ボタンをクリックして Bluetooth をオンにし、「Scan」をクリックしてセンサーの Bluetooth のスキャンを開始してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/13.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/14.png"/></div>

3. S/N（S/N はセンサー前面のラベルに記載されています）でセンサーを選択します。その後、入室するとセンサーの基本情報が表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/15.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/16.png"/></div>

4. Bluetooth 接続が成功すると設定モードに入ります：LED が 2 秒周期で点滅します。

## アプリで基本パラメータを設定する

### プラットフォームと周波数を選択する

S210x センサーは、1 つの SKU で 863MHz〜928MHz のユニバーサル周波数プランをサポートするように製造されています。つまり、各デバイスは 7 つの周波数プランをサポートできます。

ここでは「SenseCAP for Helium」または「SenseCAP for TTN」を選択します。周波数プランは実際の状況に基づいて選択してください。

**\*注意:** ユーザーの周囲に Helium ネットワークがある場合、データロガーはデータをアップロードできます。これは SenseCAP のプライベート Helium Console 上で動作します。ユーザーが Helium Console 上でデバイスを作成する必要はありません。

SenseCAP for TTN プラットフォームは、SenseCAP LoRaWAN 屋外ゲートウェイ（https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html）と一緒に使用する必要があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/17.png"/></div>

### 送信間隔を設定する

デバイスの動作モード：設定した間隔ごとにデバイスをウェイクアップし、測定値を取得して LoRa 経由でアップロードします。

例えば、デバイスは**デフォルトで 60 分ごとに**データを収集してアップロードします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/18.png"/></div>

### パケットポリシーを設定する

センサーのアップリンクパケット戦略には 3 つのモードがあり、ここでは 1N を選択しますが、要件に応じて選択することもできます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/19.png"/></div>

| **パラメータ** | **説明** |
| --- | --- |
| 2C+1N (default) | 2C+1N（2 つの確認パケットと 1 つの非確認）は最適な戦略であり、このモードはパケットロス率を最小限に抑えることができますが、TTN では最も多くのデータパケットを消費し、Helium ネットワークでは最も多くのデータクレジットを消費します。 |
| 1C | 1C（1 つの確認）の場合、デバイスはサーバーから 1 つの確認パケットを受信するとスリープに入ります。 |
| 1N | 1N（1 つの非確認）の場合、デバイスはパケットを送信した後、サーバーがデータを受信したかどうかに関係なくスリープを開始します。 |

### 工場出荷時設定に戻す

SenseCAP プラットフォームを選択する場合は、固定の EUI/App EUI/App Key を使用する必要があります。そのため、他のプラットフォームから SenseCAP プラットフォームに戻す前に、工場出荷時設定を復元する必要があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/20.png"/></div>

誤った設定をしてしまった場合やすべてをリセットしたい場合は、このボタンをクリックします。デバイスは工場出荷時のデフォルト設定に復元されます。

**\*注意:** 「Restore Factory」機能でリセットできるのは Basic Setting のみです。

## アプリでアナログセンサーを設定する

「Protocol」として「Analog Input」を選択します。その後、以下のパラメータを順番に設定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/21.png"/></div>

Power Type として **Periodical power** を選択します。

| Power Voltage | ここでは **5V** を選択します。 |
| --- | --- |
| Sensor Warm-up Time | ウォームアップ時間とは、電源電圧が印加されてから、センサーが最高の精度または性能レベルに達するまでに必要な時間を示します。ここでは **200(ms)** を入力します。 |
| Voltage Range | 0〜10V（データロガーは 0〜10V の電圧信号を取得でき、自動的に上限を調整して精度を高めます）。ここでは **Voltage** を選択します。 |
| Interface V1 | データロガーは 2 つのアナログ電圧信号をサポートします。センサーのワイヤが V1/V2 に接続されている場合、設定を有効にできます。ここでは **Interface V1** を有効にします。 |
| Interface V2 |
| Y= Ax + B | 「Y」：データロガーがアップロードする値です。「x」：元の電流値です。係数 A： 「x」を倍数で拡大または縮小できるカスタム値です。係数 B：「x」の値を増減させるカスタム値です。A と B の値を設定することで、目的の値を算出できます。ここでは A を **100** 、B を **0** に設定します。 |

設定情報が完了したら、「Back to Home」をクリックします（この時点でノードと APP の Bluetooth は自動的に切断されます）。その後、データロガーはネットワークへの接続を試みます（ネットワーク接続を試行している間は LED インジケーターが赤くゆっくり点滅し、ネットワーク接続に成功すると緑色に素早く点滅します）。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/22.png"/></div>

# SenseCAP ポータルでデータを確認する

## センサーを SenseCAP ポータルにバインドする

SenseCAP Mate App を開いてください。

1. **QR コードをスキャンする**

1. デバイスページ右上の "Add device" をクリックして、デバイスバインドページに入ります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/23.png"/></div>

1. デバイス上の QR コードをスキャンして、デバイスをあなたのアカウントにバインドします。指定グループを設定しない場合、デバイスは "default" グループに入れられます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/24.png"/></div>

1. **EUI を手動入力する**

QR コードのラベルが破損している場合は、デバイスの EUI を手動で入力して、デバイスをあなたのアカウントにバインドすることができます。システムで指定された形式で EUI を入力し、"confirm" をクリックしてください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/25.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/26.png"/></div>

## SenseCAP Mate APP でデータを確認する

最後に、SenseCAP App または Web サイト [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) で、デバイスのオンライン状態と最新データを確認できます。各センサーの一覧で、そのオンライン状態と最後にデータをアップロードした時刻を確認できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/27.png"/></div>

また、SenseCAP Mate APP で日付を確認することもできます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/28.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/1.png"/></div>
