---
description: SenseCAP データロガーを使用して LoRaWAN センサーを構築する
title: SenseCAP データロガーを使用して LoRaWAN センサーを構築する
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Builder_build_LoRaWAN_Sensors
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概要

Groveセンサーを使用して、カスタムで費用対効果の高い産業用グレードのLoRaWANセンサーを構築し、SenseCAPデータロガーを使用してSenseCAPクラウドに接続することで、長距離のワイヤレスデータ送信を可能にします。

<div align="center"><img width={700} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e22011019-sensecap-s2110-lorawan-sensor-kit-first_1_.jpg"/></div>

## 予備知識

### ハードウェア準備

このWikiでは以下の製品が必要です：

:::tip
このチュートリアルでは、Grove - 酸素センサー (MIX8410) を使用します。他の利用可能なGroveモジュールや独自のGroveモジュールをカスタマイズする方法については、[こちら](https://記得加链接)を確認して詳細情報をご覧ください。
:::

<div class="table-center">
  <table align="center">
    <tr>
        <th>SenseCAP S2110 センサービルダー</th>
        <th>Grove - 酸素センサー (MIX8410)</th>
        <th>SenseCAP S2100 データロガー/DTU</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-105.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990680_preview-34.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/i/first_page_all-22.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ソフトウェア準備

お使いのOSに応じて、モバイル端末に**SenseCAP Mate App**をダウンロードしてインストールしてください。

- [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
- [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

SenseCAPプラットフォームを初めて使用する場合は、まず**登録**ボタンをクリックしてアカウントを作成し、その後新しく作成したアカウントでログインしてください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/2.jpg"/></div>

:::note
*が付いているフィールドは必須項目であり、*が付いていないフィールドは任意で入力できます。
:::

### LoRaWAN ネットワークカバレッジの確認

ここではLoRaWANネットワークを使用します。そのため、HeliumまたはTTN (The Things Network) のLoRaWANネットワークカバレッジ内にいるかどうかを確認する必要があります。

- [Helium ネットワークマップを見る](https://explorer.helium.com/)
- [TTN ネットワークマップを見る](https://www.thethingsnetwork.org/map)

:::note
カバレッジがない場合は、Helium/TTN対応のゲートウェイを使用してセンサーデータをクラウドに送信することができます。
- Helium用の[SenseCAP M1 LoRaWAN 屋内ゲートウェイ](https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-US915-p-5023.html)または[SenseCAP M2 LoRaWAN 屋内ゲートウェイ](https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5342.html)またはその他のHelium対応ゲートウェイ。
- TTN用の[SenseCAP 屋外 LoRaWAN ゲートウェイ](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html)またはその他のTTN対応ゲートウェイ。
:::

## はじめに

今すぐ始めることができます。

### 1. GroveセンサーをSenseCAP S2110 Sensor Builderに接続する

- **ステップ1:** SenseCAP S2110 Sensor Builderの蓋にある4つのネジを外し、蓋を開けます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/84.jpg"/></div>

- **ステップ2:** スレッドキャップを取り外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/78.jpg"/></div>

- **ステップ3:** 同梱されているケーブルをキャップを通してSenseCAP S2110 Sensor Builder内に通します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/79.jpg"/></div>

- **ステップ4:** ケーブルの配線を以下のようにスクリュー端子に接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/86.jpg"/></div>

- **ステップ5:** GroveセンサーをSenseCAP S2110 Sensor Builder内に設置し、ネジで固定します。

:::note
2つの穴があるGroveセンサー (例: Grove - Light Sensor v1.2)
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/80.jpg"/></div>
3つの穴があるGroveセンサー (Grove Temperature and Barometer Sensor (BMP280))
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/81.jpg"/></div>
:::

- **ステップ6:** GroveケーブルをGroveセンサーおよびSenseCAP S2110 Sensor BuilderボードのGroveコネクタに接続します。

- **ステップ7:** 蓋を閉じてネジで固定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/82.jpg"/></div>

- **ステップ8:** スレッドキャップを締めて固定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/83.jpg"/></div>

### 2. SenseCAP S2110 Sensor BuilderをSenseCAP Data Loggerに接続する

- **ステップ1:** データロガーの3つのネジを外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **ステップ2:** 底部カバーを取り外し、内部のPCBAをスクリュー端子がアクセス可能になるまで取り出します。ボード全体を取り出す必要はありません。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **ステップ3:** スレッドキャップを時計回りまたは反時計回りに回して取り外します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **ステップ4:** 同梱されているケーブルをスレッドキャップと底部カバーを通して通します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **ステップ5:** ケーブルの配線を以下のようにスクリュー端子に接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/74.png"/></div>

:::note
ケーブル内には5本の配線がありますが、使用するのは4本のみです。余分な配線がスクリュー端子に偶然接触しないようにテープで固定することをお勧めします。
:::

- **ステップ6:** ハードウェアユニットをケース内に戻し、底部カバーを閉じてネジで固定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **ステップ7:** スレッドキャップを締めてケーブルを固定します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

SenseCAP S2110 Sensor Builderとデータロガーのすべての接続が完了すると、以下のようになります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/93.jpg"/></div>

### 3. SenseCAP Mateアプリを使用してSenseCAP Cloudに接続する

- **ステップ1:** SenseCAP Mateアプリを開き、登録済みの**メールアドレスとパスワード**を入力してSenseCAPアカウントにサインインし、**ログイン**ボタンをクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/1.jpg"/></div>

:::note
**サーバーの場所**はデフォルトの**Global**のままにしてください。
:::

#### a. データロガーのファームウェアを更新する

- **ステップ1:** **Config**ページで**S2100 Data Logger**を選択します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/4.jpg"/></div>

- **ステップ2:** SenseCAPデータロガーの設定ボタンを3秒間押し続けてBluetoothペアリングモードに入ります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/96.jpg"/></div>

Bluetoothペアリングモードに入ると、緑色のLEDが点滅を開始します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/99.gif"/></div>

- **ステップ3:** **Update**をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/5.jpg"/></div>

- **ステップ4:** 位置情報サービスをオンにするように求められます。**GO TO**をクリックして、スマートフォンの位置情報サービスページを開きます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/6.jpg"/></div>

- **ステップ5:** 位置情報サービスをオンにします。Androidの場合、以下のように表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/9.jpg"/></div>

- **ステップ6:** SenseCAP Mateアプリに戻り、**Scan**をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/10.jpg"/></div>

これで近くのSenseCAPデータロガーのスキャンが開始されます。

- **ステップ7:** 検出されたデバイスをクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/11.jpg"/></div>

- **ステップ8:** 更新が利用可能な場合は、**Get Updates**をクリックして最新バージョンに更新します。最新バージョンに更新した後、または**The device is already running the latest firmware**と表示された場合は、前のセットアップページに戻ります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12.jpg"/></div>

#### b. データロガーとSenseCAP S2110 Sensor Builderの通信設定を構成する

- **ステップ1:** データロガーで再度**Bluetoothペアリングモード**に入り、**Setup**をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/13.jpg"/></div>

- **ステップ 2:** 検出されたデバイスをクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/14.jpg"/></div>

これにより、**General** の下に有用な情報が表示されるページが開きます

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/15.jpg"/></div>

- **ステップ 3:** **Setting** ページに移動し、**Basic Setting** の下で、プラットフォームを **SenseCAP for the Things Network** または **SenseCAP for Helium** として選択します

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/16.jpg"/></div>

**注意:** 他のプラットフォームを選択することもできますが、その場合、SenseCAP プラットフォームを使用することはできません

- **ステップ 4:** **Frequency Plan**、**Uplink interval**、および **Packet Policy** を選択します

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/17.jpg"/></div>

:::note
デフォルトの Packet Policy は **2C+1N** であり、以下の表でそれと他のポリシーについて説明しています

| パラメータ | 説明 |
|---|---|
| 2C+1N (デフォルト) | 2C+1N (2つの確認パケットと1つの非確認パケット) は最適な戦略であり、このモードはパケット損失率を最小化します。ただし、デバイスは TTN で最も多くのデータパケットを消費するか、Helium ネットワークでデータクレジットを消費します。 |
| 1C | 1C (1つの確認パケット) デバイスはサーバーから1つの確認パケットを受信した後にスリープします。 |
| 1N | 1N (1つの非確認パケット) デバイスはパケットを送信した後、サーバーがデータを受信したかどうかに関係なくスリープを開始します。 |

:::

- **ステップ 5:** **Sensor Setting** の下で以下のように入力します

| パラメータ | 説明 |
|---|:---:|
| Protocol | RS485 Modbus RTU |
| Baud Rate | センサーとの通信のボーレート。ここでは **9600** を選択します。 |
| Modbus Address | センサーのスレーブアドレス。範囲は 1 から 247 です。ここでは **1** を入力します。 |
| Power Type | 周期的電源: データ収集前にセンサーに電力を供給し、データ収集後にセンサーの電源を切ります。このモードは電力消費を削減し、バッテリー寿命を延ばします。 常時オン: センサーが常に電力供給を必要とする場合にこのモードを選択します。通常、外部の 12V DC 電源が使用されます。バッテリーのみで供給される場合、長時間動作しない可能性があります。ここでは **周期的電源** を選択します。 |
| Power Voltage | センサーへの供給電圧を選択します。3V/5V/12V をサポートしています。ここでは **5V** を選択します。 |
| Sensor Warm-up Time | ウォームアップ時間は、電圧供給が適用された後にセンサーが最高の精度または性能レベルに達するまでの時間を示します。センサーによって異なります。Grove **Oxygen Sensor (MIX8410)** および **CO2 & Temperature & Humidity Sensor(SCD41)** は **5秒** のウォームアップ時間が必要であり、ボックス内に **5000** を入力する必要があります。現在 SenseCAP S2110 Sensor Builder がサポートしている他の Grove センサーは **0ms** のウォームアップ時間のみ必要です。 |
| Response Timeout | データロガーがセンサーにデータ読み取り要求を開始した後、応答を待つタイムアウト時間。この時間を超えると、コマンドが再送されます。ここでは **1** を入力します。つまり **100ms** です。 |
| Startup Time | センサーが電源オンから Modbus と通信可能になるまでの時間。ここでは **20** を入力します。つまり **2000ms=2秒** です。 |

設定が入力されたページは以下のようになります

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/18.jpg"/></div>

- **ステップ 6:** **Measurement Number** に関しては、特定のセンサーに応じて以下の表を参照してください。

<table>
<thead>
  <tr>
    <th>Grove センサー名</th>
    <th>測定数</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Grove - Light Sensor v1.2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - Flame Sensor</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - Oxygen Sensor (MIX8410)</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - CO2 &amp; Temperature &amp; Humidity Sensor (SCD41)</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Grove - Sunlight sensor (SI1151)</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Grove Temperature and Barometer Sensor (BMP280)</td>
    <td>3</td>
  </tr>
</tbody>
</table>

:::note
SenseCAP データロガーは RS485 モードで 0 から 10 の測定を収集できます。
:::

- **ステップ 7:** **Measurement Number** を指定した後、**Measurement Settings** を入力する必要があります。ここでは **Grove - Light Sensor v1.2** を選択します。このセンサーでは、必要な測定は **1つ** のみで、光レベルです。**Measurement Number** に **1** を選択し、**Measurement Setting** をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/19.jpg"/></div>

- **ステップ 8:** **Measurement Setting** の下で **Measurement1** をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/20.jpg"/></div>

**Grove - CO2 & Temperature & Humidity Sensor (SCD41)** を使用する場合、必要な測定は **3つ** で、**温度、湿度、CO2 レベル** です。**Measurement Number** に **3** を選択し、**Measurement Setting** をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/23.jpg"/></div>

また、ここでは 3つの測定を個別に設定する必要があります

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/24.jpg"/></div>

- **ステップ 9:** **Register Address** に関しては、以下の表を参照し、**Register Address** の **10進値** を入力してください。

<table>
<thead>
  <tr>
    <th>Grove センサー名</th>
    <th>レジスタ名</th>
    <th>レジスタアドレス<br />(16進数)</th>
    <th>レジスタアドレス<br />(10進数)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Grove - Oxygen Sensor (MIX8410)</td>
    <td>酸素</td>
    <td>0x000E</td>
    <td>14</td>
  </tr>
  <tr>
    <td>大気圧</td>
    <td>0x0018</td>
    <td>24</td>
  </tr>
  <tr>
    <td>高度</td>
    <td>0x001A</td>
    <td>26</td>
  </tr>
  <tr>
     <td rowspan="4">Grove - Temperature Humidity Pressure Gas Sensor(BME680)</td>
     <td>温度</td>
     <td>0x001C</td>
     <td>28</td>
  </tr>
  <tr>
    <td>大気圧</td>
    <td>0x001E</td>
    <td>30</td>
  </tr>
  <tr>
    <td>湿度</td>
    <td>0x0020</td>
    <td>32</td>
  </tr>
  <tr>
    <td>空気質(VOC)</td>
    <td>0x0022</td>
    <td>34</td>
  </tr>
  <tr>
    <td rowspan="4">Grove - Gas Sensor V2(Multichannel)</td>
    <td>N02</td>
    <td>0x0024</td>
    <td>36</td>
  </tr>
  <tr>
    <td>C2H50H</td>
    <td>0x0026</td>
    <td>38</td>
  </tr>
  <tr>
    <td>VOC</td>
    <td>0x0028</td>
    <td>40</td>
  </tr>
  <tr>
    <td>CO</td>
    <td>0x002A</td>
    <td>42</td>
  </tr>
  <tr>
    <td>Grove - UV Sensor</td>
    <td>UV 強度</td>
    <td>0x002C</td>
    <td>44</td>
  </tr>
  <tr>
    <td>Grove - Turbidity Sensor Meter V1.0</td>
    <td>濁度</td>
    <td>0x002E</td>
    <td>46</td>
  </tr>
  <tr>
    <td>Grove - TDS Sensor</td>
    <td>TDS</td>
    <td>0x0030</td>
    <td>48</td>
  </tr>
  <tr>
    <td>Grove - Ultrasonic Ranger</td>
    <td>距離</td>
    <td>0x0032</td>
    <td>50</td>
  </tr>
</tbody>
</table>

**Grove - Light Sensor v1.2** の登録済みアドレスは以下の通りです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/21.jpg"/></div>

**Grove - CO2 & Temperature & Humidity Sensor (SCD41)** の登録済みアドレスは以下の通りです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/26.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/28.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/29.jpg"/></div>

- **ステップ 10:** 残りの設定はすべての Grove センサーに共通であり、以下のように入力します。

| 機能コード | Modbus 機能コード。ここでは **03** を選択します |
|---|---|
| データ型 | データ型はセンサーから読み取るレジスタの数と、データの値を解析する方法を決定します。ここでは **Signed 32bit integer, 0xABCD** を選択します。 |
| 精度 | 値の精度。測定値の小数点以下の桁数を選択できます。1 を選択すると、小数点以下1桁が保持されます。ここでは **2, #.##** を選択します。 |
| Y= Ax + B | “Y”: Data Logger がアップロードする値です。  “x”: 元の現在値です。  Factory A: “x” の倍数で拡大または縮小できるカスタム値です。  Factory B: “x” の値を増加または減少させるカスタム値です。 A と B の値を設定することで、希望する値を計算できます。生の値のみをアップロードする必要がある場合は、A=1、B=0 を設定します。ここでは **Factory A を 0.001、Factory B を 0** に設定します。 |
| 書き込み戦略 | この機能は一部の特殊なセンサーでのみ有効であり、通常はデフォルトで無効です。レジスタの値を読み取った後、レジスタを空にする指示など、センサーに特別な指示を発行できます。 None: デフォルトでオフ。 After Read: レジスタを読み取った後にセンサーに RS485 コマンドを送信します。 On New Data: 毎日24時間ごとにセンサーに RS485 コマンドを送信します。 書き込み戦略は必要ないため、ここでは **None** を選択します。 |

登録済み **測定設定** ページは以下の通りです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/30.jpg"/></div>

- **ステップ 11:** **Confirm** をクリックして変更を保存すると、**Setting** ページに戻ります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/32.jpg"/></div>

- **ステップ 12:** **Send** をクリックして変更を Data Logger に送信します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/33.jpg"/></div>

#### c. センサーデータをローカルでテストおよび表示する

次に、SenseCAP S2110 Sensor Builder がセンサーデータを Data Logger に正しく送信しているかどうかをテストする必要があります。

- **ステップ 1:** General に移動し、**Measure** をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/34.jpg"/></div>

これでセンサー値が表示され、SenseCAP S2110 Sensor Builder 上の Seeed Studio XIAO RP2040 の LED が点灯しているのが確認できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

以下は **Grove - Oxygen Sensor (MIX8410)** の例です。これは空気中の酸素濃度が 21.36% であることを示しています。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/35.jpg"/></div>

以下は **Grove Temperature and Barometer Sensor (BMP280)** の例です。これは気圧温度が 30.55°C、大気圧が 101401Pa、高度が 53.08m であることを示しています。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/36.jpg"/></div>

#### d. 新しく作成したセンサーを SenseCAP プラットフォームに追加する

- **ステップ 1:** アプリのホームページに戻ると、Data Logger の赤色 LED が数秒間点滅し、その後緑色 LED が短時間点滅して LoRaWAN 接続が成功し、データが送信されたことを示します。代わりに、Data Logger のボタンを一度押してデータ送信を強制することもできます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

また、SenseCAP S2110 Sensor Builder 上の Seeed Studio XIAO RP2040 の LED が点灯しているのが確認できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

次に、このセンサーを SenseCAP プラットフォームに追加して、クラウド上でデータを表示する必要があります。

- **ステップ 2:** **Device** ページに移動し、**+** 記号をクリックして **Add device** を選択します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/39.jpg"/></div>

- **ステップ 3:** Data Logger にある QR コードをスキャンします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/40.jpg"/></div>

- **ステップ 4:** 接続された Grove センサーに応じて **Device name** を入力し、**Next** をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/41.jpg"/></div>

- **ステップ 5:** **Device Location** を入力し、**Confirm** をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/42.jpg"/></div>

### 4. SenseCAP Mate アプリでセンサーデータを視覚化する

これで SenseCAP Mate アプリ上で Data Logger がオンラインで表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/43.jpg"/></div>

クリックするとセンサー値が表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/45.jpg"/></div>

以下は **Grove Temperature and Barometer Sensor (BMP280)** の例です。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/44.jpg"/></div>

### 5. (オプション) SenseCAP Dashboard でセンサーデータを視覚化する

SenseCAP Web Dashboard を使用してセンサーデータを視覚化することもできます。

- **ステップ 1:** sensecap.seeed.cc にアクセスし、以前 SenseCAP Mate App 内で作成した SenseCAP アカウントにサインインしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/88.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/87.png"/></div>

- **ステップ 2:** **Sensor Node** をクリックし、以前 SenseCAP Mate App 内で作成したセンサーを選択してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/89.png"/></div>

- **ステップ 3:** **Data** タブをクリックすると、接続された Grove センサーから取得されたすべてのセンサーデータが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/90.jpg"/></div>

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>