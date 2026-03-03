---
description: 5分で産業用LoRaWANセンサーを開発する
title: 5分で産業用LoRaWANセンサーを開発する
keywords:
- LoRaWAN
- Sensor
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/develop_an_industrial_lorawan_sensor
last_update:
  date: 9/15/2023
  author: Jessie
---

5分で商用利用可能な産業グレードのLoRaWANワイヤレスセンサーを素早く構築してみましょう。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519816/_CFY3itZc4v.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={600} height="auto" /></p>

商用データ収集プロジェクトのプロトタイピングでは、プロトタイプの作成に多くの時間とコストがかかります。例えば、農業プロジェクト用のワイヤレスpHセンサーを作る必要がある場合、1) 開発ボードとセンサープローブを見つける。2) コードを書く。3) シェルを3Dプリントする。4) 最終組み立てテストを行う。プロトタイプを完成させるまでに、数日から数週間かかることがあります。

今日では、ワイヤレスLoRaコレクターを使用し、Bluetooth経由でアプリに接続するセンサーを設定し、5分で製品を構築して、直接商用プロジェクトに投入することができます。

### 準備

データロガー、センサープローブ、ゲートウェイ、ツールを準備します。

1) [データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html): これはMODBUS RS485/アナログ/GPIOセンサーをLoRa対応センサーに変換し、LoRaWANプロトコルを通じてデータを転送するLoRaWANコンバーターです。

2) センサープローブ: ケーブル付きでRS485 / 4-20mA /0-10V / パルス/レベルのいずれかの信号を出力するセンサープローブを準備します。このチュートリアルでは、液面測定用のRS485超音波センサーを使用します。

3) プラスドライバー: センサープローブの組み立てに使用します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519859/image_iq7PU8q7nt.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

4) ゲートウェイ: LoRaWANセンサーはLoRaWANゲートウェイにデータを送信し、ゲートウェイがクラウドサーバーに転送します。ゲートウェイをお持ちでない場合、2つのオプションがあります：

**オプション1**: Helium Networkでカバーされているエリアでセンサーを動作させる（[Helium Explorer](https://explorer.helium.com/)で確認）。heliumネットワークが利用可能な場所であれば、ゲートウェイを購入することなくセンサーを使用してデータを転送できます。
**オプション2**: [ゲートウェイ](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)を購入する。
5) 設定用のSenseCAP Mateアプリをダウンロードします：

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519867/image_hQX9CstNtP.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={500} height="auto" /></p>

準備完了です。始めましょう！

### ネットワークアーキテクチャ

LoRaWANネットワークから始めましょう。

データロガーはセンサーデータをLoRaデータに変換し、ゲートウェイにデータをアップロードします。ゲートウェイはデータをサーバーにアップロードします。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519879/image_SUwd9Yyglx.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### センサーの接続

1) データロガーを分解します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519881/image_TmNcqHz98z.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

2) センサーを端子に接続し、内蔵バッテリーでセンサーに電源を供給します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519884/image_XZETiBWTBz.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

:::info ヒント
4-20mAなど他のプロトコルを使用している場合は、ピン表を参照してください：
:::

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519889/image_RHiaxQkid9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
3) センサーを組み立てます。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519904/image_6qTGLlXoOZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519908/image_LDPEOEC9ik.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519912/image_jStYF3uKW6.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### アプリでセンサーを設定

1) SenseCAPアプリを開いてログインします。

2) 「S2100 Data Logger」を選択し、設定ページで「Setup」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519915/image_au0YfmfVoo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
3) ボタンを3秒間長押しすると、緑色のLEDが1秒間隔で点滅します。次に「Scan」をクリックして、データロガーのBluetoothのスキャンを開始します。

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520082/video_ZKG2GDw54j.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

4) lorawanとセンサーパラメータ（RS485 Modbus-RTUコマンドを含む）を設定します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520084/image_tAKr7NohSn.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

```cpp
#########Basic Setting#############
Platform: 
    -SenseCAP for helium (use helium network)
    -SenseCAP for The Things Network (use SenseCAP gateway)
Frequency Plan: EU868 (Select this based on the frequency or region of the gateway)
Uplink Interval: 5 min
Packet Policy: 2C+1N (use the default parameter)

#########Sensor Setting#############
Protocol: RS485 Modbus RTU
Baud Rate: 9600
Modbus Address: 128 (Sensor's modbus address)
Power Type: Periodic power (Power the sensor before data collection, and power off the sensor after data collection)
Power Voltage: 5V
Sensor Warm-up Time: 100ms
Response Timeout: 100ms
Startup Time: 100ms
Measurement Number: 2 (distance and temperature)

#########Measurement1#############
Register Address: 256 (DEC)
Function code: 03
Data Type: Unsigned 16bit integer,0xAB
Precision: 0,# (No decimal number)
FactoryA: 1 (Y=Ax+B, “Y”: It is the value of Data Logger will upload.
“x”: It is the original current value.If only raw values are uploaded, set A=1 and B=0.)
FactoryB: 0
Write Strategy: None

#########Measurement2#############
Register Address: 258 (DEC)
Function code: 03
Data Type: Unsigned 16bit integer,0xAB
Precision: 0,# (No decimal number)
FactoryA: 0.1 (The final value is divided by 10)
FactoryB: 0
Write Strategy: None
```

5) 送信をクリックし、「Measure」をクリックしてセンサーをテストします

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520088/image_iAmOflFRIQ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

センサーの距離と温度が正常に取得されました！

### SenseCAP PortalとMate Appにデータをアップロードする

データをアップロードする前に、ゲートウェイが正常に動作しているか、heliumネットワークのカバレッジがあることを確認してください。

1) アプリはホームページに戻り、Bluetooth接続を切断します。データロガーはLoRaWANネットワークへの参加を試行します。

LoRaネットワークへの参加待機中：赤い呼吸ライトが点滅
LoRaネットワーク参加成功：緑色LEDが2秒間高速点滅

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520108/video(1)_yWY0orezqU.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

2) QRコードをスキャンしてデータロガーをバインドします。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520115/image_9JdYx3MCrg.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

3) アプリとポータル（https://sensecap.seeed.cc/）でデータを確認します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520128/image_K6j6TDHXX4.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### 実環境でセンサーをテストする

長期監視のための屋外実環境への迅速な適用。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520150/image_MoA2h9E8lq.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

現在、LoRaWANセンサーが開発されました。

あなたのプロジェクトに新しいソリューションを試してみてください！

### リソース

[5 Minutes to Develop an Industrial LoRaWAN Sensor](https://www.hackster.io/jenkinlu001/5-minutes-to-develop-an-industrial-lorawan-sensor-6631dc)

[SenseCAP S2100 Data Logger User Guide](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)
