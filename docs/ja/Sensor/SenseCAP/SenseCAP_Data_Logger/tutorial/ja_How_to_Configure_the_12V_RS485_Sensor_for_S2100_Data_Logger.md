---
description: 12V RS485センサーの設定
title: 12V RS485センサーの設定
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/i/first_page_all-22.jpg
slug: /ja/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger
keywords: [SenseCAP データロガー, データロガー, コレクター]
last_update:
  date: 05/15/2025
  author: Yvonne
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# S2100と12V RS485センサーのセットアップガイド

このガイドでは、S2100と12V RS485センサーのセットアップ方法を説明します。このガイドを完了すると、将来的にカスタマイズしたセンサーを接続する方法を理解できるようになります。

## ステップ1: 必要なアイテムを準備する

- データロガー
- ONEコンパクト気象ステーションセンサー（例として）
- ジャンクションボックス
- M12ケーブル
- 8ピンワイヤー（40cm）
- プラスドライバー（プラスNo.2）
- SenseCAP Mateアプリ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/2.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## ステップ2: センサーを接続する

以下の手順に従って配線プロセスを完了してください。

### ステップ2.1: データロガーを分解する

1. 3本のネジを外します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. カバーを取り外します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. ネジキャップを外し、センサーケーブルをキャップと底面カバーを通して配線端子に接続します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### ステップ2.2: 配線端子の説明

|**番号**|**ピン**|**説明**|
| - | - | - |
| 1 | 12V | 外部12V入力電圧。データロガーは外部12V DC電源で動作可能です。12V電源を使用する場合、バッテリーはバックアップ電源として機能します。 |
| 2 | 5V  | 5V出力電圧。センサーに5V電圧を供給します。 |
| 3 | 3V  | 3V出力電圧。センサーに3V電圧を供給します。 |
| 4 | IO  | レベル取得またはパルス入力。 |
| 5 | V1  | 0～10Vの電圧入力を取得します。 |
| 6 | V2  | 0～10Vの電圧入力を取得します。 |
| 7 | A   | RS485 A/+ |
| 8 | B   | RS485 B/- |
| 9 | I1  | 4～20mAの電流入力を取得します。 |
| 10 | I2 | 4～20mAの電流入力を取得します。 |
| 11 | GND| グランドピン。 |
| 12 | GND| グランドピン。 |

### ステップ2.3: センサーの電源供給オプション

データロガーは2つの電源供給モードをサポートしています。ここでは外部12V DCモードを使用します：

| **モード** | **説明** |
| - | - |
| 内蔵バッテリー | データロガーとセンサーはバッテリーで動作します。この場合、データロガーは5Vセンサーに接続可能です。 |
| 外部12V DC | 外部12V電源を通じてデータロガーとセンサーに電力を供給します。外部12Vが切断された場合、システムはバッテリー電源に切り替わります。外部12V電源を使用する場合、防水性能を確保するためにジャンクションボックスと一緒に使用してください。 |

### ステップ2.4: ジャンクションボックスへの接続

M12ケーブルの配線順：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/6.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

センサーが12V電源を必要とする場合、バッテリーだけではセンサーを駆動できません。そのため、外部12V電源が必要です。

1. 以下のアイテムを準備します：12V DCアダプター、ジャンクションボックス、8ピンワイヤー（4ピンのみ使用）。
2. データロガーの端子を配線します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/7.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

   カバー、ゴムリング、ネジキャップを順番に取り付けます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/8.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/9.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. ジャンクションボックスの端子を配線します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/10.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. M12センサーケーブルをジャンクションボックスに接続します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/11.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

5. 12V DCアダプターを電源に接続します。

## ステップ 3: センサーへの接続

ジャンクションボックスを S2100 に接続することに成功したら、次はセンサーの接続に進みます。

### ステップ 3.1: ONE コンパクト気象観測センサーの配線順序を確認

このデバイスは M12 8ピンコネクタを使用します。異なる色のピンは以下のように電力供給とデータ通信を提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/12.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

RS-485 を使用する場合、4本のワイヤのみを接続できます（加熱機能は使用しません）。残りのワイヤは短絡を防ぐために個別にテープで巻いてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/13.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

ケーブルの穴とデバイスのコネクタピンが**正しく整列している**ことを確認してからケーブルを差し込んでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/14.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

ケーブルを差し込み、時計回りに締めてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/15.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

最後に組み立てを完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/16.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**ネジとスクリューキャップを締める**ことで防水性を確保してください。ワイヤの直径が細すぎる場合は、防水テープを巻いてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/17.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**\*注意:** デバイスを組み立てる際には、データロガーとアダプターボックスの防水パッドが取り付けられていること、スクリューキャップとネジが締められていることを確認してください。そうしないとデバイスの防水性が損なわれる可能性があります。ワイヤの直径が小さすぎる場合は、以下のように防水テープを巻いてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/18.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

これで配線が完了しました。次は S2100 をセットアップし、アプリを使用して設定を行います。

## ステップ 4: S2100 のセットアップ

### ステップ 4.1: アプリを使用してセンサーに接続

1. ボタンを押して**3秒間**保持します。LED が 1秒間隔で点滅します。アプリを使用して 1分以内にセンサーに接続してください。そうしないとデバイスが電源オフまたは再起動します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/19.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. 「S2100 Data Logger」を選択します。

   「Setup」ボタンをクリックして Bluetooth をオンにし、「Scan」をクリックしてセンサーの Bluetooth をスキャンします。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/20.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/21.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. センサーを S/N（センサーの前面ラベルに記載されている S/N）で選択します。センサーの基本情報が表示されます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/22.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/23.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. Bluetooth 接続が成功した後、設定モードに入ります。LED が 2秒間隔で点滅します。

### ステップ 4.2: アプリを使用して基本パラメータを設定

#### プラットフォームと周波数を選択

S210x センサーは 863MHz から 928MHz のユニバーサル周波数プランをサポートしています。各デバイスは 7つの周波数プランをサポートできます。

ここでは、実際の状況に応じて「SenseCAP for Helium」または「SenseCAP for TTN」を選択してください。

**\*注意:** データロガーは近くに Helium ネットワークがある場合にデータをアップロードできます。SenseCAP のプライベート Helium コンソールで動作するため、ユーザーは Helium コンソールでデバイスを作成する必要はありません。

SenseCAP for TTN プラットフォームは、[SenseCAP LoRaWAN 屋外ゲートウェイ](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)と一緒に使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/25.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### インターバルを設定

デバイスは**デフォルトで 60分ごと**にデータを収集してアップロードします。このインターバルは必要に応じて調整可能です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/26.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### パケットポリシーを設定

要件に応じてアップリンクパケット戦略を選択します。ここでは 1N を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/27.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **パラメータ** | **説明** |
| - | - |
| 2C+1N (デフォルト) | 2C+1N (2つの確認パケットと1つの非確認パケット) はパケット損失を最小限に抑えますが、TTN のデータパケットや Helium ネットワークのデータクレジットを最も消費します。 |
| 1C | 1C (1つの確認) は、サーバーから1つの確認済みパケットを受信した後にデバイスがスリープ状態になります。 |
| 1N | 1N (1つの非確認) は、パケットを送信した後、サーバーがデータを受信したかどうかに関係なくスリープ状態になります。 |

#### 工場出荷時設定の復元

他のプラットフォームから SenseCAP プラットフォームに戻る場合は、工場出荷時設定を復元してください。これにより、デバイスの基本設定がリセットされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/28.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### ステップ 4.3: アプリを使用して RS485 Modbus-RTU センサーを設定する

「プロトコル」を「RS485 Modbus RTU」に選択し、以下のパラメータを順に設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/29.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **ボーレート** | センサーとの通信のボーレート。**9600** を選択します。 |
| - | - |
| **Modbus アドレス** | デフォルトのアドレスは、Five in ONE が 10、Seven in ONE が 20、Nine in ONE が 38、Ten in ONE が 43 です。センサーのスレーブアドレスは 1 から 247 の範囲です。ここでは **20** を入力します。 |
| **電源タイプ** | **常時オン** を選択します。周期的な電源供給は、データ収集前にセンサーに電力を供給することで消費電力を削減し、バッテリー寿命を延ばします。 |
| **電源電圧** | センサーに供給する電圧として **12V** を選択します。 |
| **センサーウォームアップ時間** | 電源が供給された後、センサーが最高の精度または性能レベルに達するまでの時間。**200ms** を入力します。 |
| **応答タイムアウト** | データロガーがセンサーにデータ読み取り要求を送信した後、応答を待つ時間。この時間を超えると、コマンドが再送されます。**5(\*100ms)** が適切です。 |
| **起動時間** | センサーが電源オン後に Modbus と通信を開始するまでの時間。**10\*(100ms)** が適切です。 |
| **測定数** | RS485 モードで 0 から 10 の測定値を収集します。センサーには 7 種類のセンサーレジスタがあるため、**7** を選択します。 |
| **動作モード** | **周期的収集** モードを選択します：データを定期的に収集してアップロードします。 |
| **測定設定** | 測定値のレジスタやその他の設定を構成します。 |

#### 測定設定

各測定を順に設定します。測定1 (**気温**)

|レジスタアドレス|センサー内の測定値のレジスタアドレス（整数）。気温のレジスタアドレスは 0 です。ここでは **0** を入力します。|
| - | - |
|ファンクションコード|Modbus ファンクションコード。ここでは **03** を選択します。|
|データ型|<p>データ型は、センサーから読み取るレジスタの数とデータの解析方法を決定します。</p><p>ここでは **Signed 32bit integer, 0xABCD** を選択します。</p>|
|精度|<p>値の精度。測定値の小数点以下の桁数を選択できます。1 を選択すると、小数点以下 1 桁が保持されます。</p><p>ここでは **2, #.##** を選択します。</p>|
|Y= Ax + B|<p>「Y」: データロガーがアップロードする値。</p><p>「x」: 元の現在値。</p><p>係数 A: 「x」をスケーリングするためのカスタム値。</p><p>係数 B: 「x」の値を増減させるカスタム値。</p><p>A と B の値を設定することで、希望する値を計算できます。生の値のみをアップロードする場合は、A=1、B=0 を設定します。</p><p>**係数 A は 0.001、係数 B は 0** です。</p>|
|書き込み戦略|<p>この機能は一部の特殊なセンサーでのみ有効で、通常はデフォルトで無効です。</p><p>レジスタの値を読み取った後、センサーに特別な指示を送信できます（例: レジスタ 0 を読み取った後にレジスタを空にする指示）。</p><p>None: デフォルトでオフ。</p><p>After Read: レジスタを読み取った後に RS485 コマンドをセンサーに送信。</p><p>On New Data: 毎日 24 時間ごとに RS485 コマンドをセンサーに送信。</p><p>書き込み戦略は不要なので、ここでは **None** を選択します。</p>|

測定2 (**湿度**)

|レジスタアドレス|ここでは **2** を入力します。|
| - | - |
|ファンクションコード|ここでは **03** を選択します。|
|データ型|ここでは **Signed 32bit integer, 0xABCD** を選択します。|
|精度|ここでは **2, #.##** を選択します。|
|Y= Ax + B|**係数 A は 0.001、係数 B は 0** です。|
|書き込み戦略|書き込み戦略は不要なので、ここでは **None** を選択します。|

測定3 (**気圧**)

|レジスタアドレス|ここでは **4** を入力します。|
| - | - |
|ファンクションコード|ここでは **03** を選択します。|
|データ型|ここでは **Signed 32bit integer, 0xABCD** を選択します。|
|精度|ここでは **0, #** を選択します。|
|Y= Ax + B|**係数 A は 0.001、係数 B は 0** です。|
|書き込み戦略|書き込み戦略は不要なので、ここでは **None** を選択します。|

測定4 (**光強度**)

|レジスタアドレス|ここでは **6** を入力します。|
| - | - |
|ファンクションコード|ここでは **03** を選択します。|
|データ型|ここでは **Signed 32bit integer, 0xABCD** を選択します。|
|精度|ここでは **0, #** を選択します。|
|Y= Ax + B|**係数 A は 0.001、係数 B は 0** です。|
|書き込み戦略|書き込み戦略は不要なので、ここでは **None** を選択します。|

測定5 (**平均風向**)

|レジスタアドレス|ここでは **12** を入力します。|
| - | - |
|ファンクションコード|ここでは **03** を選択します。|
|データ型|ここでは **Signed 32bit integer, 0xABCD** を選択します。|
|精度|ここでは **1, #.#** を選択します。|
|Y= Ax + B|**係数 A は 0.001、係数 B は 0** です。|
|書き込み戦略|書き込み戦略は不要なので、ここでは **None** を選択します。|

測定6 (**平均風速**)

|レジスタアドレス|ここでは **18** を入力します。|
| - | - |
|ファンクションコード|ここでは **03** を選択します。|
|データ型|ここでは **Signed 32bit integer, 0xABCD** を選択します。|
|精度|ここでは **1, #.#** を選択します。|
|Y= Ax + B|**係数 A は 0.001、係数 B は 0** です。|
|書き込み戦略|書き込み戦略は不要なので、ここでは **None** を選択します。|

測定7 (**降雨強度**)

|レジスタアドレス|ここでは **24** を入力します。|
| - | - |
|ファンクションコード|ここでは **03** を選択します。|
|データ型|ここでは **Signed 32bit integer, 0xABCD** を選択します。|
|精度|ここでは **1, #.#** を選択します。|
|Y= Ax + B|**係数 A は 0.001、係数 B は 0** です。|
|書き込み戦略|書き込み戦略は不要なので、ここでは **None** を選択します。|

これらの測定値を設定した後、**「Back to Home」** をクリックします。ノードとアプリのBluetooth接続は自動的に切断されます。データロガーはネットワークへの接続を試みます。接続中はLEDインジケーターが赤くゆっくり点滅し、ネットワーク接続が成功すると緑色に素早く点滅します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/30.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## ステップ5: SenseCAP ポータルでデータを確認する

### ステップ5.1: センサーを SenseCAP ポータルにバインドする

SenseCAP Mate アプリを開きます。

1. **QRコードをスキャン**: デバイスページの右上にある **「Add device」** をクリックして、デバイスバインディングページに進みます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/31.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. デバイスのQRコードをスキャンしてアカウントにバインドします。特定のグループに設定しない場合、デバイスは **「default」** グループに配置されます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/32.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. **EUIを手動で入力**: QRコードのステッカーが破損している場合、デバイスのEUIを手動で入力してアカウントにバインドできます。システムが提案する形式でEUIを入力し、**「confirm」** をクリックします。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/33.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/34.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### ステップ5.2: SenseCAP ポータルでデータを確認する

SenseCAP Mate アプリまたは [SenseCAP ポータル](http://sensecap.seeed.cc/) で、デバイスのオンライン状態と最新データを確認できます。各センサーのリストには、オンライン状態と最後のデータアップロード時刻が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/35.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

また、SenseCAP Mate アプリでデータを確認することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/36.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/1.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>