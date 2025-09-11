---
description: 12V RS485 センサーの設定
title: 12V RS485 センサーの設定
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/i/first_page_all-22.jpg
slug: /ja/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger
keywords: [SenseCAP data logger, data logger, collector]
last_update:
  date: 08/17/2024
  author: Yvonne
---

# S2100と12V RS485 センサーの使用開始

このガイドでは、S2100と12V RS485 センサーの使用開始方法を説明します。これを完了すると、将来的に独自のカスタマイズされたセンサーを接続する方法を理解できるようになります。

## ステップ1：必要なアイテムを準備する

- データロガー
- ONE コンパクト気象観測ステーションセンサー（例として）
- ジャンクションボックス
- M12ケーブル
- 8ピンワイヤー（40cm）
- プラスドライバー（プラス溝No.2）
- SenseCAP Mateアプリ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/2.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## ステップ2：センサーを接続する

以下の手順に従って配線プロセスを完了してください。

### ステップ2.1：データロガーを分解する

1. 3本のネジを外します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. カバーを取り外します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. ねじ込みキャップを取り外し、センサーケーブルをキャップと底面カバーに通し、配線端子に接続します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### ステップ2.2：配線端子の説明

|**No.**|**ピン**|**説明**|
| - | - | - |
| 1 | 12V | 外部12V入力電圧。データロガーは外部12V DC電源で駆動できます。12V電源を使用する場合、バッテリーはバックアップ電源として機能します。 |
| 2 | 5V  | 5V出力電圧、センサーに5V電圧を供給します。 |
| 3 | 3V  | 3V出力電圧、センサーに3V電圧を供給します。 |
| 4 | IO  | レベルまたはパルス入力の取得。 |
| 5 | V1  | 0〜10Vの電圧入力を収集します。 |
| 6 | V2  | 0〜10Vの電圧入力を収集します。 |
| 7 | A   | RS485 A/+ |
| 8 | B   | RS485 B/- |
| 9 | I1  | 4〜20mAの電流入力を収集します。 |
| 10 | I2 | 4〜20mAの電流入力を収集します。 |
| 11 | GND| グランドピン。 |
| 12 | GND| グランドピン。 |

### ステップ 2.3: センサーの電源供給オプション

データロガーは2つの電源供給モードをサポートしています。ここでは外部12V DCモードを使用します：

| **モード** | **説明** |
| - | - |
| 内蔵バッテリー | データロガーとセンサーはバッテリーで駆動されます。この場合、データロガーは5Vセンサーに接続できます。 |
| 外部12V DC | 外部12V電源を通じてデータロガーとセンサーに電力を供給します。外部12Vが切断された場合、システムはバッテリー電源に切り替わります。外部12V電源を使用する場合は、デバイスの防水性能を確保するためにジャンクションボックスと一緒に使用してください。 |

### ステップ 2.4: ジャンクションボックスへの接続

M12ケーブルの配線順序：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/6.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

センサーが12V電源を必要とする場合、バッテリーだけではセンサーを駆動できません。そのため、外部12V電源が必要です。

1. 以下のアイテムを準備してください：12V DCアダプター、ジャンクションボックス、8ピンワイヤー（4ピンのみ必要）。
2. データロガーの端子を配線します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/7.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

   カバー、ゴムリング、スクリューキャップを順番に取り付けます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/8.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/9.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. ジャンクションボックスの端子を配線します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/10.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. M12センサーワイヤーをジャンクションボックスに接続します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/11.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

5. 12V DCアダプターを電源に接続します。

## ステップ 3: センサーへの接続

ジャンクションボックスをS2100に正常に接続できたので、次はセンサーの接続に進みます。

### ステップ 3.1: ONE Compact Weather Stationセンサーの配線順序を学ぶ

このデバイスはM12 8ピンコネクターを使用します。異なる色のピンは、以下に示すように電源とデータ通信を提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/12.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

RS-485を使用する場合、4本のワイヤーのみを接続できます（加熱機能は使用しません）。残りは短絡を防ぐために個別にテープで包む必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/13.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

ケーブルを差し込む際は、ケーブルの穴とデバイスコネクターのピンが**正しく整列**していることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/14.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

ケーブルを差し込み、時計回りに締めます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/15.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

最後に、組み立てを完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/16.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

防水性を確保するために**ネジとスクリューキャップを締めます**。ワイヤーの直径が細すぎる場合は、防水テープを巻いて補強してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/17.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**\*注意:** デバイスを組み立てる際は、データロガーとアダプターボックスの防水パッドが取り付けられ、スクリューキャップとネジが締められていることを確認してください。そうでなければ、デバイスの防水性が損なわれる可能性があります。ワイヤーの直径が小さすぎる場合は、以下に示すように防水テープで包んでください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/18.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

この時点で、配線は完了です。次に、S2100をセットアップし、アプリを使用して設定しましょう。

## ステップ 4: S2100 のセットアップ

### ステップ 4.1: アプリを通してセンサーに接続する

1. ボタンを押して **3秒間** 長押しします。LED が 1秒間隔で点滅します。1分以内にアプリを使用してセンサーに接続してください。そうしないと、デバイスは電源が切れるか再起動します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/19.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. "S2100 Data Logger" を選択します。

   "Setup" ボタンをクリックして Bluetooth をオンにし、"Scan" をクリックしてセンサーの Bluetooth のスキャンを開始します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/20.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/21.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. S/N でセンサーを選択します（S/N はセンサーの前面ラベルに記載されています）。センサーの基本情報が表示されます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/22.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/23.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. Bluetooth 接続が成功すると設定モードに入ります。LED が 2秒間隔で点滅します。

### ステップ 4.2: アプリを通して基本パラメータを設定する

#### プラットフォームと周波数を選択する

S210x センサーは 863MHz から 928MHz までのユニバーサル周波数プランをサポートしています。各デバイスは 7つの周波数プランをサポートできます。

ここでは、実際の状況に基づいて "SenseCAP for Helium" または "SenseCAP for TTN" のいずれかを選択します。

**\*注意:** Data Logger は近くに Helium ネットワークがある場合にデータをアップロードできます。SenseCAP のプライベート Helium Console で動作するため、ユーザーは Helium Console でデバイスを作成する必要がありません。

SenseCAP for TTN プラットフォームは [SenseCAP LoRaWAN 屋外ゲートウェイ](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html) と組み合わせて使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/25.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### インターバルを設定する

デバイスは **デフォルトで 60分ごと** にデータを収集してアップロードします。必要に応じてこの間隔を調整できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/26.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### パケットポリシーを設定する

要件に基づいてアップリンクパケット戦略を選択します。ここでは 1N を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/27.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **パラメータ** | **説明** |
| - | - |
| 2C+1N (デフォルト) | 2C+1N（2つの確認パケットと1つの非確認パケット）はパケット損失を最小限に抑えますが、TTN で最も多くのデータパケットまたは Helium ネットワークでデータクレジットを消費します。 |
| 1C | 1C（1つの確認）は、サーバーから1つの確認パケットを受信した後にデバイスをスリープ状態にします。 |
| 1N | 1N（1つの非確認）は、サーバーがデータを受信したかどうかに関係なく、パケットを送信してからスリープを開始します。 |

#### 工場設定の復元

他のプラットフォームからSenseCAPプラットフォームに戻す場合は、工場設定を復元してください。これによりデバイスの基本設定がリセットされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/28.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### ステップ4.3：アプリ経由でRS485 Modbus-RTUセンサーを設定する

「プロトコル」として「RS485 Modbus RTU」を選択し、以下のパラメータを順番に設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/29.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **ボーレート** | センサーとの通信のボーレート。**9600**を選択してください。 |
| - | - |
| **Modbusアドレス** | デフォルトアドレスは、Five in ONEが10、Seven in ONEが20、Nine in ONEが38、Ten in ONEが43です。センサーのスレーブアドレスは1から247の範囲です。ここでは**20**を入力してください。 |
| **電源タイプ** | **常時オン**を選択してください。定期電源は、データ収集前にのみセンサーに電力を供給することで消費電力を削減し、バッテリー寿命を延ばします。 |
| **電源電圧** | センサーへの供給電圧**12V**を選択してください。 |
| **センサーウォームアップ時間** | 電源投入後、センサーが最高精度または性能レベルに達するまでの時間。**200ms**を入力してください。 |
| **応答タイムアウト** | データロガーがセンサーにデータ読み取り要求を送信した後、応答を待つ時間。これを超えるとコマンドが再送信されます。**5(\*100ms)**が適切です。 |
| **起動時間** | 電源投入後、センサーがModbusとの通信を開始するまでの時間。**10\*(100ms)**が適切です。 |
| **測定数** | RS485モードで0から10の測定を収集します。センサーには7種類のセンサーレジスタがあるため、**7**を選択してください。 |
| **動作モード** | **定期収集**モードを選択：定期的にデータを収集してアップロードします。 |
| **測定設定** | 測定値のレジスタとその他の設定を設定します。 |

#### 測定設定

各測定を順番に設定します。測定1（**気温**）

|レジスタアドレス|センサー内の測定値のレジスタアドレスで、整数です。気温のレジスタアドレスは0です。ここに**0**を入力します。|
| - | - |
|ファンクションコード|Modbusファンクションコード、ここで**03**を選択します。|
|データタイプ|<p>データタイプは、センサーから読み取るレジスタ数と、データが値をどのように解析するかを決定します。</p><p>ここで**Signed 32bit integer, 0xABCD**を選択します。</p>|
|精度|<p>値の精度。測定値の小数点以下の桁数を選択できます。1を選択すると、小数点以下1桁が保持されます。</p><p>ここで**2, #.##**を選択します。</p>|
|Y= Ax + B|<p>"Y": Data Loggerがアップロードする値です。</p><p>"x": 元の現在値です。</p><p>ファクターA: "x"の倍数で拡大または縮小できるカスタム値です。</p><p>ファクターB: "x"の値を増加または減少させるカスタム値です。</p><p>AとBの値を設定することで、希望する値を計算できます。生の値のみをアップロードする場合は、A=1、B=0に設定します。</p><p>**ファクターAは0.001、ファクターBは0です。**</p>|
|書き込み戦略|<p>この機能は一部の特殊なセンサーでのみ有効で、通常はデフォルトで無効になっています</p><p>レジスタの値を読み取った後、センサーに特別な指示を発行できます。例えば、レジスタ0を読み取った後にレジスタを空にする指示などです。</p><p>None: デフォルトでオフ。</p><p>After Read: レジスタを読み取った後、センサーにRS485コマンドを送信します。</p><p>On New Data: 24時間ごとにセンサーにRS485コマンドを送信します。</p><p>書き込み戦略は必要ないので、ここで**None**を選択します。</p>|

Measurement2 (**大気湿度**)

|Register Address|ここに **2** を入力してください。|
| - | - |
|Function Code|ここで **03** を選択してください。|
|Data Type|ここで **Signed 32bit integer, 0xABCD** を選択してください。|
|Precision|ここで **2, #.##** を選択してください。|
|Y= Ax + B|**工場出荷時のAは0.001、工場出荷時のBは0です。**|
|Write Strategy|書き込み戦略は不要なので、ここで **None** を選択します。|

Measurement3 (**気圧**)

|Register Address|ここに **4** を入力してください。|
| - | - |
|Function Code|ここで **03** を選択してください。|
|Data Type|ここで **Signed 32bit integer, 0xABCD** を選択してください。|
|Precision|ここで **0, #** を選択してください。|
|Y= Ax + B|**工場出荷時のAは0.001、工場出荷時のBは0です。**|
|Write Strategy|書き込み戦略は不要なので、ここで **None** を選択します。|

Measurement4 (**光強度**)

|Register Address|ここに **6** を入力してください。|
| - | - |
|Function Code|ここで **03** を選択してください。|
|Data Type|ここで **Signed 32bit integer, 0xABCD** を選択してください。|
|Precision|ここで **0, #** を選択してください。|
|Y= Ax + B|**工場出荷時のAは0.001、工場出荷時のBは0です。**|
|Write Strategy|書き込み戦略は不要なので、ここで **None** を選択します。|

Measurement5 (**平均風向**)

|Register Address|ここに **12** を入力してください。|
| - | - |
|Function Code|ここで **03** を選択してください。|
|Data Type|ここで **Signed 32bit integer, 0xABCD** を選択してください。|
|Precision|ここで **1, #.#** を選択してください。|
|Y= Ax + B|**工場出荷時のAは0.001、工場出荷時のBは0です。**|
|Write Strategy|書き込み戦略は不要なので、ここで **None** を選択します。|

Measurement6 (**平均風速**)

|Register Address|ここに **18** を入力してください。|
| - | - |
|Function Code|ここで **03** を選択してください。|
|Data Type|ここで **Signed 32bit integer, 0xABCD** を選択してください。|
|Precision|ここで **1, #.#** を選択してください。|
|Y= Ax + B|**工場出荷時のAは0.001、工場出荷時のBは0です。**|
|Write Strategy|書き込み戦略は不要なので、ここで **None** を選択します。|

Measurement7 (**雨量強度**)

|Register Address|ここに **24** を入力してください。|
| - | - |
|Function Code|ここで **03** を選択してください。|
|Data Type|ここで **Signed 32bit integer, 0xABCD** を選択してください。|
|Precision|ここで **1, #.#** を選択してください。|
|Y= Ax + B|**工場出荷時のAは0.001、工場出荷時のBは0です。**|
|Write Strategy|書き込み戦略は不要なので、ここで **None** を選択します。|

これらの測定値を設定した後、**「Back to Home」**をクリックします。ノードとアプリのBluetoothは自動的に切断されます。Data Loggerはネットワークへの接続を試行します。LEDインジケーターは接続を試行している間はゆっくりと赤く点滅し、ネットワーク接続が成功すると緑色で素早く点滅します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/30.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## ステップ5: SenseCAP Portalでデータを確認する

### ステップ5.1: センサーをSenseCAP Portalにバインドする

SenseCAP Mate Appを開きます。

1. **QRコードをスキャン**: デバイスページの右上角にある**「Add device」**をクリックして、デバイスバインディングページに入ります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/31.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. デバイス上のQRコードをスキャンして、あなたのアカウントにバインドします。指定されたグループに設定しない場合、デバイスは**「default」**グループに配置されます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/32.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. **EUIを手動で入力**: QRコードステッカーが破損している場合、デバイスのEUIを手動で入力してあなたのアカウントにバインドできます。EUIがシステムによって提案された形式で入力されていることを確認し、**「confirm」**をクリックします。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/33.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/34.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### ステップ5.2: SenseCAP Portalでデータを確認する

SenseCAP Mate Appまたは[SenseCAP Portal](http://sensecap.seeed.cc/)で、デバイスのオンライン状態と最新のデータを確認できます。各センサーのリストには、そのオンライン状態と最後のデータアップロード時刻が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/35.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

SenseCAP Mate Appでもデータを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/36.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/1.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
