---
description: GroveモジュールをODYSSEYおよびSeeed Studio XIAO ESP32C3上のESPHomeを使用してHome Assistantに接続する方法
title: GroveモジュールをESPHomeを使用してHome Assistantに接続する
tags:
  - Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Connect-Grove-to-Home-Assistant-ESPHome
last_update:
  date: 05/15/2025
  author: Lakshantha
---


# GroveモジュールをESPHomeを使用してHome Assistantに接続する

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/106.png" /></div>


## はじめに

このWikiでは、[Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)をHome Assistant上で動作するESPHomeに接続し、GroveモジュールをXIAO ESP32C3に接続した後にセンサーデータを送信したりデバイスを制御する方法をステップバイステップで説明します。それでは始めましょう！

## ESPHomeとは？

[ESPHome](https://esphome.io)は、ESPボードの管理を可能な限り簡単にすることを目的としたツールです。YAML構成ファイルを読み取り、ESPデバイスにインストールするカスタムファームウェアを作成します。ESPHomeの構成に追加されたデバイスやセンサーは、Home AssistantのUIに自動的に表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/54.png" /></div>


## Home Assistantのインストール

Home Assistantがすでにインストールされていることを確認してください。ODYSSEY-X86 SBCにHome Assistantをインストールする手順については、[このWiki](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant)を参照してください。

## Home AssistantにESPHomeをインストールする

ESPHomeは**Home Assistantアドオン**として利用可能で、アドオンストアから簡単にインストールできます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/6.png" /></div>

- **ステップ1.** Home AssistantでESPHomeを迅速にセットアップするには、以下のボタンをクリックしてください

<div align="center"><a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=5c53de3b_esphome&repository_url=https%3A%2F%2Fgithub.com%2Fesphome%2Fhome-assistant-addon"><img width={200} src="https://files.seeedstudio.com/wiki/ESPHome/1.png" /></a></div>


- **ステップ2.** 以下のポップアップが表示されたら、**OPEN LINK**をクリックしてください

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/2.png" /></div>


- **ステップ3.** **INSTALL**をクリックしてください

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/3.png" /></div>

- **ステップ4.** すべてのオプションを有効にして**START**をクリックしてください

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/4.png" /></div>

- **ステップ5.** **OPEN WEB UI**またはサイドパネルの**ESPHOME**をクリックしてください

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/5.png" /></div>

ESPHomeが正常に読み込まれると、以下のウィンドウが表示されます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/7.png" /></div>

## Seeed Studio XIAO ESP32C3をESPHomeに追加する

- **ステップ1.** **+ NEW DEVICE**をクリックしてください

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/8.png" /></div>

- **ステップ2.** **CONTINUE**をクリックしてください

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/9.png" /></div>

- **ステップ3.** デバイスの**名前**を入力し、**ネットワーク名**や**パスワード**などのWiFi資格情報を入力してください。その後、**NEXT**をクリックしてください

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/10.png" /></div>


- **ステップ4.** **ESP32-C3**を選択してクリックしてください

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/11.png" /></div>


- **ステップ5.** このボードを手動で構成するため、**SKIP**をクリックしてください

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/12.png" /></div>


- **ステップ6.** 新しく作成されたボードの下にある**EDIT**をクリックしてください

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/13.png" /></div>


- **ステップ7.** これにより**YAML**ファイルが開き、このファイルを使用してすべてのボード構成を設定します。**esp32**の内容を以下のように編集してください

```sh
esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    version: 2.0.5
    platform_version: 5.2.0
```

**注意:** ここでは、[ESP32用Arduinoコア](https://github.com/espressif/arduino-esp32/releases)および[PlatformIOのESP32サポート](https://github.com/platformio/platform-espressif32/releases)の最新バージョンを使用しています

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/14.png" /></div>


- **ステップ8.** **SAVE**をクリックし、その後**INSTALL**をクリックしてください

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/ESPHome/16.png" /></div>

- **ステップ9.** USB Type-Cケーブルの一端をSeeed Studio XIAO ESP32C3に接続し、もう一端をODYSSEY-X86のUSBポートのいずれかに接続してください

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/49.png" /></div>


- **ステップ10.** **Plug into the computer running ESPHome Dashboard**をクリックしてください

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/17.png" /></div>


- **ステップ11.** 接続されたポートを選択してください。**/dev/ttyACM1**である可能性が高いです。これは、**/dev/ttyACM0**がODYSSEY-X86のオンボードATSAMD21コプロセッサに接続されているためです

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>


これで必要なボードパッケージがすべてダウンロードされ、ESPHomeファームウェアがXIAO ESP32C3にフラッシュされます。フラッシュが成功すると、以下の出力が表示されます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>


- **ステップ12.** 上記のウィンドウには接続されたボードからのリアルタイムログが表示されます。**STOP**をクリックして閉じてください

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/20.png" /></div>


- **ステップ12.** ボードのステータスが**ONLINE**と表示されている場合、ボードがWiFiに正常に接続されていることを意味します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/21.png" /></div>

これで、XIAO ESP32C3をX86ボードから切り離し、USBケーブルで電源を供給するだけで済みます。これは、今後XIAO ESP32C3にファームウェアを書き込む場合、USBケーブルでX86ボードに接続することなく、OTAで簡単に行えるようになるためです。

- **ステップ13.** **三つの点**をクリックし、**Install**をクリックします。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ESPHome/28.png" /></div>

- **ステップ14.** **三つの点**をクリックし、**Install**をクリックします。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ESPHome/28.png" /></div>

- **ステップ15.** **Wirelessly**を選択すると、変更がワイヤレスでボードにプッシュされます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/29.png" /></div>

- **ステップ16.** **Settings**に移動し、**Devices & Services**を選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/22.png" /></div>

- **ステップ17.** **ESPHome**が検出された統合として表示されます。**CONFIGURE**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/23.png" /></div>

- **ステップ18.** **SUBMIT**をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/24.png" /></div>

ここで、xiao-esp32c3の設定にある暗号化キーを入力するよう求められます。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/25.png" /></div>

- **ステップ19.** **xiao-esp32c3.yaml**に戻り、暗号化キーをコピーして、上記のダイアログボックスに貼り付け、**SUBMIT**をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/26.png" /></div>

- **ステップ20.** **FINISH**をクリックします。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/27.png" /></div>

## GroveモジュールをESPHomeとHome Assistantで使用する

次に、GroveモジュールをSeeed Studio XIAO ESP32C3に接続し、センサーデータを表示したり、Home Assistantを使用してデバイスを制御したりします！

### GroveモジュールをXIAO ESP32C3に接続する

GroveモジュールをSeeed Studio XIAO ESP32C3で使用するには、[Grove Shield for Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)を使用し、XIAO ESP32C3を接続します。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/51.png" /></div>

その後、ボード上のGroveコネクタを使用してGroveモジュールを接続できます。

### ピン定義

Grove Shield for Seeed Studio XIAOのGroveコネクタにGroveモジュールを接続する際には、以下の表に従って適切な内部ピン番号を使用する必要があります。

| 内部ピン番号 	| ピンマッピング 	|
|---	|---	|
| 2 	| D0 	|
| 3 	| D1 	|
| 4 	| D2 	|
| 5 	| D3 	|
| 6 	| D4 	|
| 7 	| D5 	|
| 21 	| D6 	|
| 20 	| D7 	|
| 8 	| D8 	|
| 9 	| D9 	|
| 10 	| D10 	|
| 6 	| SDA 	|
| 7 	| SCL 	|

例えば、**D0**ポートにGroveモジュールを接続したい場合、ESPHomeでピンを**2**として定義する必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/50.png" /></div>

### ESPHomeでのGrove互換性リスト

現在、以下のGroveモジュールがESPHomeでサポートされています。

<table>
<thead>
  <tr>
    <th>Grove</th>
    <th>カテゴリ</th>
    <th>ESPHomeコンポーネント</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html">Grove - レーザーPM2.5ダストセンサー</a></td>
    <td>ガス</td>
    <td><a href="https://esphome.io/components/sensor/hm3301">Grove - レーザーPM2.5センサー (HM3301)</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html">Grove - SEN55 オールインワン環境センサー</a>, NOx, PM, VOC, RH, 温度</td>
    <td>ガス</td>
    <td><a href="https://esphome.io/components/sensor/sen5x.html">Sen5xシリーズ環境センサー</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html">Grove - SEN54 オールインワン環境センサー</a>, PM, VOC, RH, 温度</td>
    <td>ガス</td>
    <td><a href="https://esphome.io/components/sensor/sen5x.html">Sen5xシリーズ環境センサー</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html">Grove - VOCおよびeCO2ガスセンサー - SGP30</a></td>
    <td>ガス</td>
    <td><a href="https://esphome.io/components/sensor/sgp30.html">SGP30 CO₂および揮発性有機化合物センサー</a></td>
  </tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html">Grove - VOCガスセンサー (SGP40)</a></td>
  <td>ガス</td>
  <td><a href="https://esphome.io/components/sensor/sgp4x.html">SGP40揮発性有機化合物センサーおよびSGP41 VOCおよびNOxセンサー</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html">Grove - ホルムアルデヒドセンサー (SFA30) - HCHOセンサー</a></td>
  <td>空気質</td>
  <td><a href="https://esphome.io/components/sensor/sfa30.html">SFA30ホルムアルデヒドセンサー</a></td>
</tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-4-Digit-Display.html">Grove - 4桁ディスプレイ</a></td>
    <td>ディスプレイ</td>
    <td><a href="https://esphome.io/components/display/tm1637.html">TM1637 7セグメントディスプレイ</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank" rel="noopener noreferrer">Grove - サーボ</a></td>
    <td>アクチュエータ</td>
    <td><a href="https://esphome.io/components/servo.html">サーボコンポーネント</a></td>
  </tr>
  <tr>
  <td><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-TB6612FNG-p-3220.html">Grove - I2Cモータードライバー (TB6612FNG)</a></td>
  <td>アクチュエータ</td>
  <td><a href="https://esphome.io/components/grove_tb6612fng.html">Grove TB6612FNGモータードライブ</a></td>
</tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-RTC-DS1307.html">Grove - DS1307 RTC (リアルタイムクロック) for Arduino</a></td>
    <td>時間</td>
    <td><a href="https://esphome.io/components/time/">時間コンポーネント</a></td>
  </tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-High-Precision-RTC.html">Grove - 高精度RTC (DS1307)</a></td>
  <td>時間</td>
  <td><a href="https://esphome.io/components/time/">時間コンポーネント</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-30-LED-m-1m.html">Grove - WS2813 RGB LEDストリップ防水 - 30 LED/m - 1m</a></td>
  <td>ライト</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBusライト</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-60-LED-m-1m.html">Grove - WS2813 RGB LEDストリップ防水 - 60 LED/m - 1m</a></td>
  <td>ライト</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBusライト</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">Grove - RGB LEDリング (20 - WS2813 Mini)</a></td>
  <td>ライト</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBusライト</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html">Grove - RGB LEDスティック (10 - WS2813 Mini)</a></td>
  <td>ライト</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBusライト</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-24-WS2813-Mini-p-4202.html">Grove - RGB LEDリング (24-WS2813 Mini)</a></td>
  <td>ライト</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBusライト</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html">Grove - RGB LED (WS2813 Mini)</a></td>
  <td>ライト</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBusライト</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-20-WS2813-Mini-p-4271.html">Grove - RGB LEDスティック (20-WS2813 Mini)</a></td>
  <td>ライト</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBusライト</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-16-WS2813-Mini-p-4201.html">Grove - RGB LEDリング (16-WS2813 Mini)</a></td>
  <td>ライト</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBusライト</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html">Grove - RGB LEDスティック (15-WS2813 Mini)</a></td>
  <td>ライト</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBusライト</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-Ultimate-RGB-LED-Ring-p-4203.html">Grove - アルティメットRGB LEDリング</a></td>
  <td>ライト</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBusライト</a></td>
</tr>
</tbody>
</table>

これより、上記の表から6つのGroveモジュールを選択し、それらをESPHomeおよびHome Assistantと接続する方法を説明します。

### Grove - 温度と湿度センサー (AHT20)

#### 設定手順

- **ステップ 1.** [Grove - 温度と湿度センサー (AHT20)](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html) をSeeed Studio XIAO用のGrove ShieldのI2Cコネクタの1つに接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **ステップ 2.** 以前作成した **xiao-esp32c3.yaml** ファイルの末尾に以下を追加し、OTAでXIAO ESP32C3にプッシュします。

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: aht10
    variant: AHT20
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

**AHT10コンポーネント**についての詳細は[こちら](https://esphome.io/components/sensor/aht10.html)をご覧ください。このコンポーネントを使用すると、**AHT10、AHT20、AHT21**ベースのセンサーを利用できます。ここでは、AHT20がI2Cプロトコルを使用して通信するため、[I²Cバス](https://esphome.io/components/i2c.html)コンポーネントを追加しています。

#### ダッシュボードでの可視化

- **ステップ 1.** Home Assistantの**概要**ページで、**3つのドット**をクリックし、**ダッシュボードを編集**を選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/30.png" /></div>

- **ステップ 2.** **+ カードを追加**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/31.png" /></div>

- **ステップ 3.** **エンティティ別**を選択し、**temperature**と入力して**Temperature**の横にあるチェックボックスを選択します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/ESPHome/32.png" /></div>

- **ステップ 4.** 同じ手順を**Humidity**にも繰り返します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/ESPHome/33.png" /></div>

- **ステップ 5.** **続行**をクリックします。

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/ESPHome/34.png" /></div>

- **ステップ 6.** **ダッシュボードに追加**をクリックします。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/35.png" /></div>

これでHome Assistantのダッシュボードは以下のようになります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/37.png" /></div>

- **ステップ 7.** センサーのデータをゲージとして可視化することもできます。**カード別**で**ゲージ**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/39.png" /></div>

- **ステップ 8.** ドロップダウンメニューから**Temperature**を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/42.png" /></div>

- **ステップ 9.** **保存**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/43.png" /></div>

- **ステップ 10.** 同じ手順を**Humidity**にも繰り返します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/44.png" /></div>

これでダッシュボードは以下のようになります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/45.png" /></div>

このWiki内の**Grove - VOCとeCO2ガスセンサー (SGP30)**および**Grove - CO2 & 温度 & 湿度センサー (SCD41)**についても、同様の手順でセンサーデータをダッシュボードに可視化できます。

### Grove - VOCとeCO2ガスセンサー (SGP30)

#### 設定手順

- **ステップ 1.** [Grove - VOCとeCO2ガスセンサー (SGP30)](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html) をSeeed Studio XIAO用のGrove ShieldのI2Cコネクタの1つに接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **ステップ 2.** 以前作成した **xiao-esp32c3.yaml** ファイルの末尾に以下を追加し、OTAでXIAO ESP32C3にプッシュします。

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: sgp30
    eco2:
      name: "eCO2"
      accuracy_decimals: 1
    tvoc:
      name: "TVOC"
      accuracy_decimals: 1
```

**SGP30コンポーネント**についての詳細は[こちら](https://esphome.io/components/sensor/sgp30.html)をご覧ください。

### Grove - CO2 & 温度 & 湿度センサー (SCD41)

#### 設定手順

- **ステップ 1.** [Grove - CO2 & 温度 & 湿度センサー (SCD41)](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html) をSeeed Studio XIAO用のGrove ShieldのI2Cコネクタの1つに接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **ステップ 2.** 以前作成した **xiao-esp32c3.yaml** ファイルの末尾に以下を追加し、OTAでXIAO ESP32C3にプッシュします。

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: scd4x
    co2:
      name: "CO2"
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

**SGP4xコンポーネント**についての詳細は[こちら](https://esphome.io/components/sensor/scd4x.html)をご覧ください。

### Grove - リレー

#### 設定手順

- **ステップ 1.** [Grove - リレー](https://www.seeedstudio.com/Grove-Relay.html) をSeeed Studio XIAO用のGrove Shieldの**デジタル**ポートの1つに接続します。ここでは**D0**ポートを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png" /></div>

- **ステップ 2.** 以前作成した **xiao-esp32c3.yaml** ファイルの末尾に以下を追加し、OTAでXIAO ESP32C3にプッシュします。

```sh
switch:
  - platform: gpio
    pin: 2
    name: "Relay"
```

**リレーコンポーネント**についての詳細は[こちら](https://esphome.io/cookbook/relay.html)をご覧ください。

#### ダッシュボードでの可視化

- **ステップ 1.** 以前説明した**+ カードを追加**の下で、**エンティティ別**を選択し、**relay**と入力して選択し、**続行**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/55.png" /></div>

- **ステップ 2.** **ダッシュボードに追加**をクリックします。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/56.png" /></div>

これでトグルスイッチを使用してリレーを**オン/オフ**することができます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/57.jpg" /></div>


### Grove - mini PIR モーションセンサー

#### 設定構成

- **ステップ 1.** [Grove - mini PIR モーションセンサー](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html) を Grove Shield for Seeed Studio XIAO の **デジタル**ポートのいずれかに接続します。ここでは **D0** ポートを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png" /></div>


- **ステップ 2.** 以前に作成した **xiao-esp32c3.yaml** ファイルの末尾に以下を追加し、OTA を使用して XIAO ESP32C3 にプッシュします。

```sh
binary_sensor:
  - platform: gpio
    pin: 2
    name: "PIR Sensor"
    device_class: motion
```

**PIR コンポーネント**についての詳細は [こちら](https://esphome.io/cookbook/pir.html) をご覧ください。

#### ダッシュボードでの可視化

- **ステップ 1.** 以前に説明した **+ ADD CARD** の下で、**BY ENTITY** を選択し、**pir** と入力して選択し、**CONTINUE** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/58.png" /></div>


- **ステップ 2.** **ADD TO DASHBOARD** をクリックします。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/59.png" /></div>


モーションが検出されると、**Detected** と表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/60.png" /></div>


## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>