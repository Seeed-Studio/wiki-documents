---
description: SenseCAP データロガーを使用した LoRaWAN センサーの構築
title: SenseCAP データロガーを使用した LoRaWAN センサーの構築
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Builder_build_LoRaWAN_Sensors
last_update:
  date: 11/20/2023
  author: Matthew
---

## 概要

Grove センサーを使用してカスタムで費用対効果が高く、産業グレードの LoRaWAN センサーを構築し、SenseCAP データロガーを使って SenseCAP Cloud に接続することで、長距離無線データ伝送を可能にできます。

<div align="center"><img width={700} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e22011019-sensecap-s2110-lorawan-sensor-kit-first_1_.jpg"/></div>

## 前提条件

### ハードウェアの準備

このwikiには以下のリストのような製品が必要です：

:::tip
このチュートリアルでは、Grove - 酸素センサー (MIX8410) を使用します。利用可能な他の Grove モジュールや独自の Grove モジュールをカスタマイズする方法については、[こちら](https://記得加链接)で確認し、詳細情報を参照してください。
:::

<div class="table-center">
  <table align="center">
    <tr>
        <th>SenseCAP S2110 Sensor Builder</th>
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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>

</div>

### ソフトウェアの準備

お使いのOSに応じて、携帯電話に**SenseCAP Mate App**をダウンロードしてインストールしてください。

- [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
- [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

SenseCAPプラットフォームを初めて使用する場合は、まず**Register**ボタンをクリックしてアカウントを登録し、その後新しく作成したアカウントでログインしてください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/2.jpg"/></div>

:::note
*印の付いたフィールドは必須項目で、*印のないフィールドは任意で入力できます。
:::

### LoRaWANネットワークカバレッジの確認

ここではLoRaWANネットワークを使用します。そのため、HeliumまたはTTN（The Things Network）のLoRaWANネットワークカバレッジ内にいるかどうかを確認する必要があります。

- [Heliumネットワークマップを表示](https://explorer.helium.com/)
- [TTNネットワークマップを表示](https://www.thethingsnetwork.org/map)

:::note
カバレッジがない場合は、Helium/TTNを搭載した任意のゲートウェイを使用してセンサーデータをクラウドに送信できます。
- Helium用：[SenseCAP M1 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-US915-p-5023.html)または[SenseCAP M2 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5342.html)またはその他のHelium対応ゲートウェイ
- TTN用：[SenseCAP Outdoor LoRaWAN Gateway](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html)またはその他のTTN対応ゲートウェイ
:::

## はじめに

それでは始めましょう。

### 1. GroveセンサーをSenseCAP S2110 Sensor Builderに接続

- **ステップ1：** SenseCAP S2110 Sensor Builderの蓋の4本のネジを外し、蓋を開けます

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/84.jpg"/></div>

- **ステップ2：** ねじ込みキャップを取り外します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/78.jpg"/></div>

- **ステップ3：** 付属のケーブルをキャップを通してSenseCAP S2110 Sensor Builder内に通します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/79.jpg"/></div>

- **ステップ4：** ケーブルの線を以下のようにねじ端子に接続します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/86.jpg"/></div>

- **ステップ5：** GroveセンサーをSenseCAP S2110 Sensor Builder内に配置し、ネジで固定します。

:::note
2つの穴があるGrove（例：Grove - Light Sensor v1.2）
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/80.jpg"/></div>
3つの穴があるGrove（Grove Temperature and Barometer Sensor (BMP280)）
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/81.jpg"/></div>
:::

- **ステップ6：** GroveケーブルをGroveセンサーとSenseCAP S2110 Sensor Builderボード上のGroveコネクターに接続します

- **ステップ7：** 蓋を閉じて元通りにネジで固定します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/82.jpg"/></div>

- **ステップ8：** ねじ込みキャップを締めて固定します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/83.jpg"/></div>

### 2. SenseCAP S2110 Sensor BuilderをSenseCAP Data Loggerに接続

- **ステップ1：** データロガーの3本のネジを外します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **ステップ2：** 底面カバーを取り外し、ねじ端子にアクセスできるまで内部のPCBAを取り出します。基板全体を取り出す必要はありません

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **ステップ3：** 反時計回りの方向にねじを回してねじ込みキャップを取り外します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **ステップ4：** 付属のケーブルをねじ込みキャップと底面カバーを通します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **ステップ5：** ケーブルの線を以下のようにねじ端子に接続します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/74.png"/></div>

:::note
ケーブル内に5本の線があり、4本しか使用しないため、余分な線をテープで固定してねじ端子との偶発的な接触を避けることをお勧めします
:::

- **ステップ6：** ハードウェアユニットをケース内に戻し、底面カバーで閉じてネジで固定します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **ステップ7：** ねじ込みキャップを締めてケーブルを固定します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

SenseCAP S2110 Sensor BuilderとData Loggerのすべての接続が完了すると、以下のようになります：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/93.jpg"/></div>

### 3. SenseCAP Mate AppでSenseCAP Cloudに接続

- **ステップ1：** SenseCAP Mate APPを開き、登録した**メールアドレスとパスワード**を入力して**Login**ボタンをクリックし、SenseCAPアカウントにサインインします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/1.jpg"/></div>

:::note
**Server Location**はデフォルトの**Global**のままにしてください
:::

#### a. Data Loggerファームウェアの更新

- **ステップ：** **Config**ページで、**S2100 Data Logger**を選択します

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/4.jpg"/></div>

- **ステップ2：** SenseCAP Data Loggerの設定ボタンを3秒間長押しして、Bluetoothペアリングモードに入ります

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/96.jpg"/></div>

Bluetoothペアリングモードに入ると、緑色のLEDが点滅し始めます

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/99.gif"/></div>

- **ステップ 3:** **Update** をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/5.jpg"/></div>

- **ステップ 4:** 位置情報サービスをオンにするよう促されます。**GO TO** をクリックして、お使いの携帯電話の位置情報サービスページを開きます

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/6.jpg"/></div>

- **ステップ 5:** 位置情報サービスをオンにします。Android では以下のように表示されます

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/9.jpg"/></div>

- **ステップ 6:** SenseCAP Mate アプリに戻り、**Scan** をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/10.jpg"/></div>

これで近くの SenseCAP データロガーのスキャンが開始されます

- **ステップ 7:** 発見されたデバイスをクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/11.jpg"/></div>

- **ステップ 8:** アップデートが利用可能な場合は、**Get Updates** をクリックして最新バージョンに更新します。最新バージョンに更新した後、または **The device is already running the latest firmware** と表示された場合は、前のセットアップページに戻ります

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12.jpg"/></div>

#### b. データロガーと SenseCAP S2110 Sensor Builder 通信の設定

- **ステップ 1:** データロガーで再び **Bluetooth ペアリングモード** に入り、**Setup** をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/13.jpg"/></div>

- **ステップ 2:** 見つかったデバイスをクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/14.jpg"/></div>

**General** の下に有用な情報が表示されたページが開きます

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/15.jpg"/></div>

- **ステップ 3:** **Setting** ページに移動し、**Basic Setting** の下で、プラットフォームを **SenseCAP for the Things Network** または **SenseCAP for Helium** のいずれかから選択します

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/16.jpg"/></div>

**注意:** 他のオプションも選択できますが、その場合は SenseCAP プラットフォームを使用できません

- **ステップ 4:** **Frequency Plan**、**Uplink interval**、**Packet Policy** を選択します

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/17.jpg"/></div>

:::note
デフォルトの Packet Policy は **2C+1N** で、以下の表でこれと他のオプションについて詳しく説明します

| パラメータ | 説明 |
|---|---|
| 2C+1N (デフォルト) | 2C+1N（2つの確認パケットと1つの非確認パケット）は最適な戦略で、このモードはパケット損失率を最小化できますが、デバイスは TTN で最も多くのデータパケットを消費するか、Helium ネットワークでデータクレジットを消費します。 |
| 1C | 1C（1つの確認）デバイスはサーバーから1つの受信確認パケットを取得した後にスリープします。 |
| 1N | 1N（1つの非確認）デバイスはパケットを送信してからスリープを開始し、サーバーがデータを受信したかどうかは関係ありません。 |

:::

- **ステップ 5:** Sensor Setting の下で、以下のように入力します

| パラメータ | 説明 |
|---|:---:|
| Protocol | RS485 Modbus RTU |
| Baud Rate | センサーとの通信のボーレート。ここでは **9600** を選択します。 |
| Modbus Address | センサーのスレーブアドレス。範囲は1から247です。ここでは **1** を入力します。 |
| Power Type | 定期電源：データ収集前にセンサーに電源を供給し、データ収集後にセンサーの電源を切ります。このモードは消費電力を削減し、バッテリー寿命を延ばします。常時オン：センサーが常時電源供給を必要とする場合にこのモードを選択します。一般的に、外部12V DC電源が使用されます。バッテリーのみで電源供給する場合、長時間動作しない可能性があります。ここでは **periodic power** を選択します。 |
| Power Voltage | センサーへの供給電圧を選択します。3V/5V/12Vをサポートします。ここでは **5V** を選択します。 |
| Sensor Warm-up Time | ウォームアップ時間は、電圧供給が適用されてからセンサーが最高精度または性能レベルに達するまでの時間を示します。これはセンサーによって異なります。Grove **酸素センサー（MIX8410）** と **CO2・温度・湿度センサー（SCD41）** は **5秒** のウォームアップ時間が必要で、ボックス内に **5000** を入力する必要があります。現在 SenseCAP S2110 Sensor Builder でサポートされている他の Grove センサーは **0ms** のウォームアップ時間のみ必要です。 |
| Response Timeout | データロガーがセンサーにデータ読み取り要求を開始した後、応答のタイムアウト時間を待機します。この時間を超えた場合、コマンドが再送信されます。ここでは **1** を入力し、これは **100ms** を意味します。 |
| Startup Time | センサーが電源オンから Modbus との通信まで通信できるようになるまでの時間の長さ。ここでは **20** を入力し、これは **2000ms=2秒** を意味します |

入力済みの設定ページは以下のように表示されます

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/18.jpg"/></div>

- **ステップ 6:** **Measurement Number** については、特定のセンサーに応じて以下の表を参照してください。

<table>
<thead>
  <tr>
    <th>Grove センサー名</th>
    <th>測定番号</th>
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
SenseCAP Data LoggerはRS485モードで0から10の測定値を収集できます。
:::

- **ステップ7:** **測定数**を指定した後、**測定設定**を入力する必要があります。ここでは**Grove - Light Sensor v1.2**を選択します。このセンサーでは、光レベルという**1つの測定値**のみが必要です。**測定数**に**1**を選択し、**測定設定**をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/19.jpg"/></div>

- **ステップ8:** **測定設定**の下で**測定1**をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/20.jpg"/></div>

**Grove - CO2 & Temperature & Humidity Sensor (SCD41)**を使用する場合、**温度、湿度、CO2レベル**という**3つの測定値**が必要です。**測定数**に**3**を選択し、**測定設定**をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/23.jpg"/></div>

また、ここでは3つの測定値を個別に設定する必要があります

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/24.jpg"/></div>

- **ステップ9:** **レジスタアドレス**については、下記の表を参照し、**レジスタアドレス**の**10進値**を入力してください

<table>
<thead>
  <tr>
    <th>Groveセンサー名</th>
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
    <td>空気品質(VOC)</td>
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
    <td>UV強度</td>
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

**Grove - Light Sensor v1.2** の入力されたレジスタアドレスは以下のようになります

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/21.jpg"/></div>

**Grove - CO2 & Temperature & Humidity Sensor (SCD41)** の入力されたレジスタアドレスは以下のようになります

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/26.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/28.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/29.jpg"/></div>

- **ステップ 10:** 残りの設定はすべてのGroveセンサーに共通で、以下のように入力します

| Function Code | Modbusファンクションコード。ここでは**03**を選択します |
|---|---|
| Data Type | データタイプは、センサーから読み取るレジスタ数と、データが値をどのように解析するかを決定します。ここでは**Signed 32bit integer, 0xABCD**を選択します。 |
| Precision | 値の精度。測定値の小数点以下の桁数を選択できます。1を選択すると、小数点以下1桁が保持されます。ここでは**2, #.##**を選択します。 |
| Y= Ax + B | "Y": Data Loggerがアップロードする値です。"x": 元の現在値です。Factory A: "x"の倍数でスケールアップまたはスケールダウンできるカスタム値。Factory B: "x"の値を増加または減少させるカスタム値。AとBの値を設定することで、希望する値を計算できます。生の値のみをアップロードする必要がある場合は、A=1、B=0に設定します。ここでは**Factory Aを0.001、Factory Bを0**に設定します。 |
| Write Strategy | この機能は一部の特殊なセンサーでのみ有効で、通常はデフォルトで無効になっています。レジスタの値を読み取った後、センサーに特別な指示を発行できます。例えば、レジスタ0を読み取った後にレジスタを空にする指示などです。None: デフォルトでオフ。After Read: レジスタを読み取った後、センサーにRS485コマンドを送信します。On New Data: 24時間ごとにセンサーにRS485コマンドを送信します。書き込み戦略は必要ないので、ここでは**None**を選択します |

入力された**測定設定**ページの例を以下に示します

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/30.jpg"/></div>

- **ステップ 11:** **確認**をクリックして変更を保存すると、**設定**ページに戻ります

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/32.jpg"/></div>

- **ステップ 12:** **送信**をクリックして変更をデータロガーに送信します

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/33.jpg"/></div>

#### c. センサーデータのローカルテストと表示

次に、SenseCAP S2110 Sensor Builderがセンサーデータを適切にデータロガーに送信しているかをテストする必要があります。

- **ステップ 1:** 一般に移動し、**測定**をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/34.jpg"/></div>

これでセンサー値が表示され、SenseCAP S2110 Sensor Builder上のSeeed Studio XIAO RP2040のLEDが点灯するのが確認できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

以下は**Grove - 酸素センサー (MIX8410)**の場合です。これは空気中の酸素濃度が21.36%であることを示しています。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/35.jpg"/></div>

以下は**Grove 温度・気圧センサー (BMP280)**の場合です。これは気圧温度が30.55°C、大気圧が101401Pa、高度が53.08mであることを示しています。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/36.jpg"/></div>

#### d. 新しく作成したセンサーをSenseCAPプラットフォームに追加

- **ステップ 1:** アプリのホームページに戻ると、データロガーの赤色LEDが数秒間点滅し、続いて緑色LEDが短時間点滅して、LoRaWAN接続が成功し、データが送信されたことを示します。または、データロガーのボタンを一度押すことで、このデータ送信を強制的に実行することもできます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

SenseCAP S2110 Sensor Builder上のSeeed Studio XIAO RP2040のLEDも点灯するのが確認できます

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

次に、クラウド上でデータを表示するために、このセンサーをSenseCAPプラットフォームに追加する必要があります

- **ステップ 2:** **デバイス**ページに移動し、**+**記号をクリックして**デバイスを追加**をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/39.jpg"/></div>

- **ステップ 3:** データロガーに記載されているQRコードをスキャンします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/40.jpg"/></div>

- **ステップ 4:** 接続されたGroveセンサーに応じて**デバイス名**を入力し、**次へ**をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/41.jpg"/></div>

- **ステップ 5:** **デバイスの場所**を入力し、**確認**をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/42.jpg"/></div>

### 4. SenseCAP Mate Appでのセンサーデータの可視化

これで、SenseCAP Mate App上でデータロガーがオンラインになっているのが確認できます

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/43.jpg"/></div>

それをクリックしてセンサー値を表示します

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/45.jpg"/></div>

以下は**Grove 温度・気圧センサー (BMP280)**の場合です。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/44.jpg"/></div>

### 5. (オプション) SenseCAPダッシュボードでのセンサーデータの可視化

SenseCAP Webダッシュボードを使用してセンサーデータを可視化することもできます。

- **ステップ 1:** sensecap.seeed.ccにアクセスし、以前にSenseCAP Mate App内で作成したSenseCAPアカウントにサインインします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/88.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/87.png"/></div>

- **ステップ 2:** **センサーノード**をクリックし、以前にSenseCAP Mate App内で作成したセンサーを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/89.png"/></div>

- **ステップ 3:** **データ**タブをクリックすると、接続されたGroveセンサーからのすべてのセンサーデータが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/90.jpg"/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
