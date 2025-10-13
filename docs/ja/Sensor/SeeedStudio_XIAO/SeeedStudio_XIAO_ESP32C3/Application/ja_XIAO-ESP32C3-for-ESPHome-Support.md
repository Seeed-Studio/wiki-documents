---
description: ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3
title: ESPHome Support on Seeed Studio XIAO ESP32C3
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/XIAO-ESP32C3-for-ESPHome-Support
last_update:
  date: 10/20/2023
  author: Zachary
---

# XIAO ESP32C3をESPHome経由でHome Assistantに接続（全ポート対応）

<!-- # ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3 -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:900, height:'auto'}}/></div>

このwikiでは、[Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)をHome Assistant上で動作するESPHomeに接続し、GroveモジュールをXIAO ESP32C3に接続した後にセンサーデータを送信/デバイスを制御する方法を段階的に説明します。ここでは**デジタル、アナログ、IIC、SPI、UART**を含むあらゆる種類のポートを適用しました。それでは始めましょう！

## ESPHomeとHome Assistantとは？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:900, height:'auto'}}/></div>

[ESPHome](https://esphome.io/)は、ESPボードの管理を可能な限りシンプルにすることを目的としたツールです。YAML設定ファイルを読み込み、ESPデバイスにインストールするカスタムファームウェアを作成します。ESPHomeの設定に追加されたデバイスやセンサーは、Home AssistantのUIに自動的に表示されます。ESPHomeは、デバイスをHome Assistantに接続してデータを送信するのに役立ちます。

## ハードウェアの準備

制御ボードとしてXIAO ESP32C3を使用し、ハードウェアとして[reRouter](https://www.seeedstudio.com/reRouter-CM4102032-p-5734.html)を使用し、複数のGroveセンサーと組み合わせています。

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio Expansion Board</th>
      <th>Home Assistantデバイス</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Check More 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

**Grove センサー**

- [Grove - 温湿度センサー (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove -スマート空気品質センサー (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)
- [Grove - アナログマイクロフォン](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)
- [Grove - デジタルPIRセンサー](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## ソフトウェアの準備

### Home Assistantのインストール

Home Assistantが既に稼働していることを確認してください。[製品](https://wiki.seeedstudio.com/ja/home_assistant_topic/#-devices-for-home-assistant-)にHome Assistantをフラッシュする方法を紹介する複数のwikiがあります。私はRaspberry Pi CM4を搭載したreRouterを使用しているので、[公式のものを直接使用してOSをreRouterにフラッシュできます](https://www.home-assistant.io/installation/raspberrypi)。

### Home AssistantにESPHomeをインストール

ESPHomeは**Home Assistantアドオン**として利用でき、アドオンストアから簡単にインストールできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

<!-- - **Step 1.** To quickly setup ESPHome on Home Asssistant, click the below button -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png"style={{width:300, height:'auto'}}/></div> -->
<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png" style={{width:300, height:'auto'}}/></div> -->

<!-- - **Step 2.** Once you see the following pop-up, click **OPEN LINK** -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png"style={{width:300, height:'auto'}}/></div> -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png" style={{width:300, height:'auto'}}/></div> -->

- **ステップ1.** **INSTALL**をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **ステップ2.** すべてのオプションを有効にして**START**をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

<!-- - **Step 3.** Click **OPEN WEB UI** or **ESPHOME from the side-panel** -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/8.png"style={{width:700, height:'auto'}}/></div> -->

ESPHomeが正常に読み込まれると、以下のウィンドウが表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## はじめに

すべてのソフトウェアとハードウェアの準備が整ったら、開始できます。

### 1. Seeed Studio XIAO ESP32C3 を ESPHome に追加する

- **ステップ 1.** **+ NEW DEVICE** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** CONTINUE をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** デバイスの **名前** を入力し、**ネットワーク名** や **パスワード** などのWiFi認証情報を入力します。その後、**NEXT** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/7.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 4.** **ESP32-C3** を選択してクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/8.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 5.** このボードを手動で設定するため、**SKIP** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

- **ステップ 6.** 新しく作成されたボードの下にある **EDIT** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/9.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 7.** これにより **YAML** ファイルが開き、このファイルはすべてのボード設定を行うために使用されます。**esp32** の下の内容を以下のように編集します

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "Your Password"
```

:::note ここでは、ESP32用の最新バージョンの[Arduinoコア](https://github.com/espressif/arduino-esp32/releases)と[PlatformIO用のESP32サポート](https://github.com/platformio/platform-espressif32/releases)を使用しています
:::

- **ステップ8.** **SAVE**をクリックし、次に**INSTALL**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/10-2.png" style={{width:900, height:'auto'}}/></div>

- **ステップ9.** USB Type-Cケーブルの一端をSeeed Studio XIAO ESP32C3に接続し、もう一端をreRouter CM4 1432のUSBポートの1つに接続します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **ステップ10.** **ESPHome Dashboardを実行しているコンピューターに接続**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/12-1.png" style={{width:900, height:'auto'}}/></div>

- **ステップ11.** 接続されたポートを選択します。```/dev/ttyACM0```はreRouter CM4 1432に接続されているため、```/dev/ttyACM1```である可能性が高いです

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/13-1.png" style={{width:900, height:'auto'}}/></div>

:::tip
2.4GHz Wi-Fiを使用することをお勧めします
:::

これで、必要なボードパッケージがすべてダウンロードされ、ESPHomeファームウェアがXIAO ESP32C3にフラッシュされます。フラッシュが成功すると、以下の出力が表示されます。エラーが表示された場合は、XIAO ESP32C3を再起動するか、BOOTボタンを押しながらXIAO ESP32C3を接続してブートローダーモードに入ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/20.png" style={{width:900, height:'auto'}}/></div>

- **ステップ12.** 上記のウィンドウは、接続されたボードからのリアルタイムログを表示します。**STOP**をクリックして閉じます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/14.png" style={{width:900, height:'auto'}}/></div>

- **ステップ13.** ボードのステータスが**ONLINE**と表示されている場合、ボードがWiFiに正常に接続されていることを意味します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/15.png" style={{width:900, height:'auto'}}/></div>

- **ステップ14.** **Settings**に移動し、**Devices & Services**を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png" style={{width:900, height:'auto'}}/></div>

- **ステップ15.** 発見された統合として**ESPHome**が表示されます。**CONFIGURE**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/20.png"style={{width:900, height:'auto'}}/></div>

- **ステップ16.** **SUBMIT**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/21.png"style={{width:900, height:'auto'}}/></div>

- **ステップ17.** パスワードを入力します。これは**ステップ8**で確認できるAPIパスワードです

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/22.png"style={{width:900, height:'auto'}}/></div>

- **ステップ18.** **FINISH**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/23.png"style={{width:900, height:'auto'}}/></div>

### 2. Groveモジュールを接続してデータを送信する

次に、GroveモジュールをSeeed Studio XIAO ESP32C3に接続して、Home Assistantを使用してセンサーデータを表示したり、デバイスを制御したりできるようにします！

### 開発知識

#### XIAO拡張ボード

Seeed Studio XIAO ESP32C3でGroveモジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)を使用し、その上にXIAO ESP32C3を接続します。

その後、ボード上のGroveコネクターを使用してGroveモジュールを接続できます。以下がピン定義です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:900, height:'auto'}}/></div>

#### ピン定義

Seeed Studio XIAO用GroveシールドのGroveコネクターにGroveモジュールを接続する際は、以下の図に従って適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pin_map.png"style={{width:900, height:'auto'}}/></div>

例えば、GroveモジュールをD0ポートに接続したい場合は、ESPHomeでピンをGPIO2として定義する必要があります

#### ESPHomeとのGrove互換性リスト

現在、以下のGroveモジュールがESPHomeでサポートされています。[こちら](https://esphome.io/components/sensor/index.html#see-also)を確認してください

### 3. Grove接続とデータ送信

次に、いくつかのGroveモジュールを選択し、それらがESPHomeとHome Assistantとどのように接続できるかを説明します。

#### Grove - 温湿度センサー（DHT20）

この温湿度センサーは、事前校正されたデジタル出力を提供します。独自の容量式センサー素子が相対湿度を測定し、温度は負の温度係数（NTC）サーミスターによって測定されます。優れた信頼性と長期安定性を備えています。購入は[こちら](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)をクリックしてください。

##### セットアップ設定

- **ステップ1.** Grove - DHT20をSeeed Studio Expansion Base for XIAOのI2Cコネクターの1つに接続します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic1.png"style={{width:300, height:'auto'}}/></div>

- **ステップ2.** 以前に作成した**xiao-esp32c3.yaml**ファイル内で、ファイルを変更し、OTA経由でXIAO ESP32C3にプッシュします

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

api:
  password: "F4MQG/rBhNmqP8Nud+AJ+5CYu7LuIhIFTOcRwOm5Nw4="

ota:
  password: "999afa1f8a07e85959a9f89f8f6aebb2"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "YtpCwOqLoYlp"

captive_portal:

# 0x28 is the I2C address of DHT20
i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_0x38

sensor:
  - platform: aht10
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    update_interval: 60s
```

[DHT20コンポーネント](https://esphome.io/components/sensor/aht10)について詳しく学ぶことができます。ここでは、DHT20がI2Cプロトコルを使用して通信するため、I²Cバスコンポーネントを追加します。

##### ダッシュボードでの可視化

- **ステップ1.** Home Assistantの概要ページで、3つの点をクリックし、**Edit Dashboard**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **ステップ2.** **+ ADD CARD**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **ステップ3.** **By ENTITY**を選択し、**temperature**と入力して、**Temperature**の横の**チェックボックス**を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37.png"style={{width:900, height:'auto'}}/></div>

- **ステップ4.** **ADD TO DASHBOARD**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/38.png"style={{width:900, height:'auto'}}/></div>

- **ステップ5.** センサーデータをゲージとして可視化することもできます。**BY CARD**の下の**Gauge**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37-1.png"style={{width:900, height:'auto'}}/></div>

これでHome Assistantダッシュボードは以下のようになります

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/39.png"style={{width:900, height:'auto'}}/></div>

#### Grove - 光センサー(LS06-S)

Grove - 光センサー v1.2はアナログモジュールで、異なる範囲に変換できる様々な電気信号を出力できます。高感度で信頼性の高いフォトダイオードであるLS06-Sフォトレジスタを統合し、環境の光の強度を検出します。光測定、光検出、光制御スイッチに最適なArduino光センサーモジュールです。

購入は[こちら](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)をクリックしてください。

##### セットアップ設定

- **ステップ1.** Grove - 光センサーをSeeed Studio Expansion Base for XIAOのアナログ/デジタルコネクタの1つに接続します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic2.png"style={{width:300, height:'auto'}}/></div>

- **ステップ2.** 以前に作成した**xiao-esp32c3.yaml**ファイル内で、ファイルを変更してOTA経由でXIAO ESP32C3にプッシュします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/41-1.png"style={{width:900, height:'auto'}}/></div>

うまくいけば、この結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/42.png"style={{width:900, height:'auto'}}/></div>

##### ダッシュボードでの可視化

- **ステップ1.** Home Assistantの概要ページで、3つの点をクリックし、**Edit Dashboard**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **ステップ2.** **+ ADD CARD**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **ステップ3.** **By ENTITY**を選択し、**Light Sensor**を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/43.png"style={{width:900, height:'auto'}}/></div>

- **ステップ4.** **PICK DIFFERENT CARD**を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/44.png"style={{width:900, height:'auto'}}/></div>

- **ステップ5.** **Gauge**を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/45.png"style={{width:900, height:'auto'}}/></div>

- **ステップ6.** 最小値と最大値を設定します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/46.png"style={{width:900, height:'auto'}}/></div>

- **ステップ7.** ダッシュボードに光センサーの値が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/47.png"style={{width:900, height:'auto'}}/></div>

<!-- #### Grove - 温度・湿度センサー (BME680)

Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680)は、温度、圧力、湿度、ガスを同時に測定できる多機能センサーです。BME680モジュールをベースにしており、GPS、IoTデバイス、またはこれら4つのパラメータが必要なその他のデバイスでこのセンサーを使用できます。購入は[こちら](https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html)をクリックしてください。

##### セットアップ設定

- **ステップ1.** Grove - [Temperature, Humidity, Pressure and Gas Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)をSeeed Studio Expansion Base for XIAOのI2Cコネクタの1つに接続します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/30.jpg"style={{width:700, height:'auto'}}/></div>

- **ステップ2.** 以前に作成した**xiao-esp32c3.yaml**ファイル内で、ファイルを変更してOTA経由でXIAO ESP32C3にプッシュします

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

i2c:
  sda: GPIO6
  scl: GPIO7

sensor:
  - platform: bme680
    temperature:
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76
    update_interval: 60s
```

[BME680コンポーネント](https://esphome.io/components/sensor/bme680)について詳しく学ぶことができます。これにより、BME280、BME680、BMP085、BMP280、AHT10、AHT20、AHT21ベースのセンサーを使用できます。ここでは、AHT20がI2Cプロトコルを使用して通信するため、I²Cバスコンポーネントを追加します。

##### ダッシュボードでの可視化

- **ステップ1.** Home Assistantの概要ページで、3つの点をクリックし、**Edit Dashboard**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/31.png"style={{width:900, height:'auto'}}/></div>

- **ステップ2.** **+ ADD CARD**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/32.png"style={{width:900, height:'auto'}}/></div>

- **ステップ3.** **By ENTITY**を選択し、**temperature**と入力して、**Temperature**の横の**チェックボックス**を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/33.png"style={{width:900, height:'auto'}}/></div>

- **ステップ4.** **Humidity**、**Gas Resitance**、**Pressure**についても同じ手順を繰り返します

- **ステップ5.** **CONTINUE**をクリックします

- **ステップ6.** **ADD TO DASHBOARD**をクリックします

これで、Home Assistantダッシュボードは以下のようになります

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/34.png"style={{width:900, height:'auto'}}/></div>

- **ステップ7.** センサーデータをゲージとして可視化することもできます。**BY CARD**の下の**Gauge**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/35.png"style={{width:900, height:'auto'}}/></div>

- **ステップ8.** ドロップダウンメニューから**Temperature**を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/36.png"style={{width:900, height:'auto'}}/></div>

- **ステップ9.** **SAVE**をクリックします

- **ステップ10.** **Humidity**、**Gas Resitance**、**Pressure**についても同じ手順を繰り返します

- これで、ダッシュボードは以下のようになります

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/37.png"style={{width:900, height:'auto'}}/></div>

<!--#### Grove -スマート空気品質センサー (SGP41)

SGP41デジタルガスセンサーは、SensirionのCMOSens®技術を使用しており、単一チップ上で完全で使いやすいセンサーシステムを提供します。室内空気中の揮発性有機化合物（VOC）と窒素酸化物（NOx）の濃度を測定し、デジタル出力信号を提供できます。さらに、このセンサーは優れた長期安定性と寿命を持っています。[こちらをクリック](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products)して購入してください。

##### セットアップ設定

- **ステップ1.** Grove - [Smart Air Quality Sensor (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products)をSeeed Studio Expansion Base for XIAOのI2Cコネクターの1つに接続します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.jpg"style={{width:900, height:'auto'}}/></div>

- **ステップ2.** 以前に作成した**xiao-esp32c3.yaml**ファイル内で、ファイルを変更し、OTA経由でXIAO ESP32C3にプッシュします

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

sensor:
  - platform: sgp4x
    voc:
      id: sgp41_voc
      name: "VOC Index"
    nox:
      id: sgp41_nox
      name: "NOx Index"

``` 

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz
sensor:
  - platform: bme680
    temperature:
      id:  bme680_temp
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      id: bme680_hum
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76
  
  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp
```

**注意:** このセンサーは十分なデータサンプルを収集するために90サイクルを要し、現在のところ警告を回避することはできません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.png"style={{width:700, height:'auto'}}/></div>

##### ダッシュボードでの可視化

前述を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/39.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Grove - Analog Microphone

Grove - Analog Microphoneは、高性能SiSonic MEMS技術をベースとしており、オープンソースハードウェア業界に極めて低ノイズ、低電流、信頼性が高く、小型のマイクロフォンを提供し、厳しい条件下でも性能が向上しています。[こちらをクリック](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)して購入してください。

##### セットアップ設定

- **ステップ 1.** Grove - [Analog Microphone](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)をSeeed Studio Expansion Base for XIAOのA0コネクタに接続します

- **ステップ 2.** 以前に作成した**xiao-esp32c3.yaml**ファイル内で、ファイルを変更してOTA経由でXIAO ESP32C3にプッシュします
```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

binary_sensor:
  - platform: gpio
    pin: GPIO2
    name: "Sound level"
    device_class: sound
```

[Binary Sensor Component](https://esphome.io/components/binary_sensor/index.html#binary-sensor-component)について詳細情報を確認できます

##### ダッシュボードでの可視化

前述を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/41.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Grove - Digital PIR Sensor

PIRセンサーは人の動きを検出するIRセンサーです。このGrove Digital PIRセンサーはPIRファミリーの中で最も安価なPIRセンサーですが、素早い応答を提供し、「sig」ピンから高信号を生成することができます。購入については[こちらをクリック](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)してください。

##### セットアップ設定

- **ステップ1.** [Grove - Digital PIR Sensor](https://wiki.seeedstudio.com/ja/Grove-Digital-PIR-Sensor/)をSeeed Studio Expansion Base for XIAOのD7コネクタに接続します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/42.jpg"style={{width:700, height:'auto'}}/></div>

- **ステップ2.** 以前に作成した**xiao-esp32c3.yaml**ファイル内で、ファイルを変更してOTA経由でXIAO ESP32C3にプッシュします

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

binary_sensor:
  - platform: gpio
    pin: GPIO20
    name: "PIR Sensor"
    device_class: motion
```

##### ダッシュボードで可視化

前述の通りです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### XIAO拡張ボード上のディスプレイ(SSD1306)

##### セットアップ設定

- **ステップ1.** ディスプレイ用のフォントファイルをダウンロードします。参考として[こちらをクリック](https://esphome.io/components/display/index.html#fonts)してください

- **ステップ2.** **設定** >>> **アドオン** >>> **ファイルエディタ**で「ファイルエディタ」をインストールします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/44.png"style={{width:700, height:'auto'}}/></div>

- **ステップ3.** **ファイルエディタ**をクリック >>> パス：**config/esphome**を入力 >>> フォントファイルを**アップロード**します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/45.png"style={{width:700, height:'auto'}}/></div>

- **ステップ4.** 前に作成した**xiao-esp32c3.yaml**ファイル内で、ファイルを変更してOTA経由でXIAO ESP32C3にプッシュします

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    lambda: |-
      it.print(0, 0, id(font), "Wi-fi Connected");

sensor:
  - platform: bme680
    temperature:
      id:  bme680_temp
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      id: bme680_hum
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76
  
  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp

binary_sensor:
  - platform: gpio
    pin: GPIO20
    name: "PIR Sensor"
    device_class: motion
    
  - platform: gpio
    pin: GPIO2
    name: "Sound level"
    device_class: sound
```

 ESPHomeの強力なレンダリングおよびディスプレイエンジンを搭載したディスプレイコンポーネントについて、[こちらをクリック](https://esphome.io/components/display/#display-engine)してさらに詳しく探索できます。
 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/46.jpg"style={{width:700, height:'auto'}}/></div> -->

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Zacharyの努力](https://github.com/Seeed-Studio/wiki-documents/issues/603)に感謝し、あなたの作品は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
