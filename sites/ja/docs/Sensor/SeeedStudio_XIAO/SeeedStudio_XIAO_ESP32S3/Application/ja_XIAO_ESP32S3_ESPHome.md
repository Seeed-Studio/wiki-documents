---
description: ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3
title: ESPHome Support on Seeed Studio XIAO ESP32S3
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO_ESP32S3_esphome
last_update:
  date: 12/25/2023
  author: Zachay-NAU
---

# XIAO ESP32S3 sense を ESPHome 経由で Home Assistant に接続する（全ポート対応）

この Wiki では、[Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/) を Home Assistant 上で動作する ESPHome に接続し、Grove モジュールを XIAO ESP32S3 に接続した後にセンサーデータを送信/デバイスを制御する方法を段階的に説明します。それでは始めましょう！

## ESPHome と Home Assistant とは？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:600, height:'auto'}}/></div>
<br />

[ESPHome](https://esphome.io/) は、ESP ボードの管理を可能な限りシンプルにすることを目的としたツールです。YAML 設定ファイルを読み込み、ESP デバイスにインストールするカスタムファームウェアを作成します。ESPHome の設定に追加されたデバイスやセンサーは、Home Assistant の UI に自動的に表示されます。ESPHome は、デバイスを接続して Home Assistant デバイスにデータを送信するのに役立ちます。

## ハードウェアの準備

このチュートリアルをすべて実行したい場合は、以下を準備する必要があります。

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Seeed Studio Expansion Board</th>
      <th>Home Assistant デバイス</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
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

#### 使用されたセンサー

- [Grove - Temperature and Humidity Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)<br />
- [Grove -Smart Air Quality Sensor (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)<br />
- [6x10 RGB MATRIX for XIAO](https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#)

## ソフトウェアの準備

### Home Assistantのインストール

Home Assistantがすでに稼働していることを確認してください。ODYSSEY-X86 SBCにHome Assistantをインストールする手順については[このwiki](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant)を、Seeed Mini RouterでHome Assistantを使用する詳細な手順については[このリンク](https://www.mbreviews.com/how-to-home-assistant-seeed-mini-router/)を参照してください。

### Home AssistantにESPHomeをインストール

ESPHomeは**Home Assistantアドオン**として利用でき、アドオンストアから簡単にインストールできます。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/3.png" width="700" />  -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

<!--  
- **ステップ 1.** Home Assistant で ESPHome を素早くセットアップするには、以下のボタンをクリックしてください

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/4.png" width="300">

- **ステップ 2.** 次のポップアップが表示されたら、**OPEN LINK** をクリックします

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/5.png" width="300">

-->

- **ステップ1.** **INSTALL**をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **ステップ2.** すべてのオプションを有効にして**START**をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

<!-- 
- **ステップ 3.** **INSTALL** をクリックします

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/6.png" width="700">

- **ステップ 4.** すべてのオプションを有効にして **START** をクリックします

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/7.png" width="700">

- **ステップ 5.** **OPEN WEB UI** または **サイドパネルの ESPHOME** をクリックします

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/8.png" width="700">

-->

<br />
ESPHomeが正常に読み込まれると、以下のウィンドウが表示されます

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/9.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## はじめに

すべてのソフトウェアとハードウェアの準備ができたら、開始できます。

### 1. Seeed Studio XIAO ESP32S3 (Sense)をESPHomeに追加

- **ステップ1.** **+ NEW DEVICE**をクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/10.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **ステップ2.** CONTINUEをクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/11.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **ステップ3.** デバイスの**名前**を入力し、**ネットワーク名**と**パスワード**などのWiFi認証情報を入力します。その後、**NEXT**をクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/12.png" width="300"> 1.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/1.png" style={{width:400, height:'auto'}}/></div>

- **ステップ4.** **ESP32-S3**を選択してクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/13.png" width="300"> 2.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/2.png" style={{width:400, height:'auto'}}/></div>

- **ステップ5.** このボードを手動で設定するため、**SKIP**をクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/14.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

- **ステップ6.** 新しく作成されたボードの下にある**EDIT**をクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/15.png" width="300"> 3.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/3.png" style={{width:400, height:'auto'}}/></div>

- **ステップ7.** これにより**YAML**ファイルが開き、このファイルはすべてのボード設定を行うために使用されます。**esp32**の下の内容を以下のように編集します

```
esphome:
  name: esp32s3
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "your wifi name"
  password: "your password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

```

**注意：** ここでは、ESP32用の最新バージョンの[Arduinoコア](https://github.com/espressif/arduino-esp32/releases)と[PlatformIOのESP32サポート](https://github.com/platformio/platform-espressif32/releases)を使用しています

- **ステップ 8.** **SAVE**をクリックし、次に**INSTALL**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/16.png" width="700"> 4.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/4.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 9.** USB Type-Cケーブルの一端をSeeed Studio XIAO ESP32S3に接続し、もう一端をreRouter CM4 1432のUSBポートの1つに接続します

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/17.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 10.** **Plug into the computer running ESPHome Dashboard**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/18.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/5.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 11.** 接続されたポートを選択します。```/dev/ttyACM0```がreRouter CM4 1432に接続されているため、```/dev/ttyACM1```である可能性が高いです

 <!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/19.png" width="700"> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/6.png" style={{width:900, height:'auto'}}/></div>

:::tip
2.4GHz Wi-Fiを使用することをお勧めします
:::

これで、必要なボードパッケージがすべてダウンロードされ、ESPHomeファームウェアがXIAO ESP32S3にフラッシュされます。フラッシュが成功すると、以下の出力が表示されます。エラーが表示された場合は、XIAO ESP32S3を再起動するか、BOOTボタンを押しながらXIAO ESP32S3を接続してブートローダーモードに入ってください。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/20.png" width="700"> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/7.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 12.** 上記のウィンドウには、接続されたボードからのリアルタイムログが表示されます。**STOP**をクリックして閉じます

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/21.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/8.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 13.** ボードのステータスが**ONLINE**と表示されている場合、ボードがWiFiに正常に接続されていることを意味します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/9.png" style={{width:400, height:'auto'}}/></div>

:::tip

これで、XIAO ESP32S3をreRouter CM4 1432から切り離し、USBケーブル経由で電源を供給するだけで済みます。これは、今後XIAO ESP32S3にファームウェアをフラッシュしたい場合、USBケーブルでX86ボードに接続することなく、単純にOTAで実行できるためです。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/22.png" width="300"> -->

- 1. **3つの点**をクリックし、**Install**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/23.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/10.png" style={{width:400, height:'auto'}}/></div>

- 2. **Wirelessly**を選択すると、変更がワイヤレスでボードにプッシュされます

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/24.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/11.png" style={{width:400, height:'auto'}}/></div>

:::

- **ステップ 14.** **Settings**に移動し、**Devices & Services**を選択します

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/25.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 15.** 発見された統合として**ESPHome**が表示されます。**CONFIGURE**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/26.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/12.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 16.** **SUBMIT**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/27.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/13.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 17.** **FINISH**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/28.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

### 2. GroveモジュールをESPHomeとHome Assistantに接続する

今度はGroveモジュールをSeeed Studio XIAO ESP32S3 (sense)に接続して、Home Assistantを使用してセンサーデータを表示したり、デバイスを制御したりできるようにします！

### 開発知識

#### XIAO拡張ボード

  Seeed Studio XIAO ESP32S3でGroveモジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)を使用し、その上にXIAO ESP32S3を接続します。
  
  その後、ボード上のGroveコネクタを使用してGroveモジュールを接続できます

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

  GroveモジュールをSeeed Studio XIAO用GroveシールドのGroveコネクタに接続する際は、以下の図に従って適切な内部ピン番号を使用する必要があります。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/pinout.png" width="1000"> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg"style={{width:900, height:'auto'}}/></div>
<br />

例えば、GroveモジュールをD0ポートに接続したい場合は、ESPHomeでピンをGPIO1として定義する必要があります。詳細については[こちらをクリック](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/#resources)してください。

#### GroveとESPHomeの互換性リスト
  
  現在、以下のGroveモジュールがESPHomeでサポートされています
  
  [こちら](https://esphome.io/components/sensor/index.html#see-also)で確認してください
  
  今度は上記の表から6つのGroveモジュールを選択し、それらがESPHomeとHome Assistantとどのように接続できるかを説明します。

### 3. Grove接続とデータ伝送

今度はいくつかのGroveモジュールを選択し、それらがESPHomeとHome Assistantとどのように接続できるかを説明します。

#### Grove - 温湿度センサー (BME680)
  
##### セットアップ設定

- **ステップ 1.** Grove - [Temperature, Humidity, Pressure and Gas Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)をSeeed Studio Expansion Base for XIAOのI2Cコネクタの1つに接続します

- **ステップ 2.** 以前に作成した**xiao-esp32s3-bme680.yaml**ファイル内で、ファイルを変更してOTA経由でXIAO ESP32S3にプッシュします
  
```
# Configuration for ESPHome
esphome:
  # Name of the ESP32-S3 device
  name: esp32s3
  
  # PlatformIO build options
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# Configuration for ESP32
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:

# Over-the-Air update configuration
ota:

# Wi-Fi configuration
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# Captive portal configuration
captive_portal:

# I2C configuration for BME680 sensor
i2c:
  sda: GPIO5
  scl: GPIO6

# BME680 sensor configuration
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

[BME680コンポーネント](https://esphome.io/components/sensor/bme680)についてはこちらで詳しく学ぶことができます。BME280、BME680、BMP085、BMP280、AHT10、AHT20、AHT21ベースのセンサーを使用することができます。ここではAHT20がI2Cプロトコルを使用して通信するため、I²C Busコンポーネントを追加します。

##### ダッシュボードでの可視化

- **ステップ1.** Home Assistantの概要ページで、3つの点をクリックし、**Edit Dashboard**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **ステップ2.** **+ ADD CARD**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **ステップ3.** **By ENTITY**を選択し、**temperature**と入力して**Temperature**の横の**チェックボックス**を選択します

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/33.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **ステップ4.** **Humidity**、**Gas Resitance**、**Pressure**についても同様に繰り返します

- **ステップ5.** **CONTINUE**をクリックします

- **ステップ6.** **ADD TO DASHBOARD**をクリックします

これでHome Assistantダッシュボードは以下のようになります

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/18.png" style={{width:900, height:'auto'}}/></div>

- **ステップ7.** センサーデータをゲージとして可視化することもできます。**BY CARD**の下の**Gauge**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/35.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/19.png" style={{width:900, height:'auto'}}/></div>

- **ステップ8.** ドロップダウンメニューから**Temperature**を選択します

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/36.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/20.png" style={{width:900, height:'auto'}}/></div>

- **ステップ9.** **SAVE**をクリックします

- **ステップ10.** **Humidity**、**Gas Resitance**、**Pressure**についても同様に繰り返します

- これでダッシュボードは以下のようになります

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/37.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/21.png" style={{width:900, height:'auto'}}/></div>

<br />

#### Grove -スマート空気品質センサー (SGP41)
  
- **ステップ1.** Grove - [Smart Air Quality Sensor (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products)をSeeed Studio Expansion Base for XIAOのI2Cコネクターの1つに接続します

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/38.jpg" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/22.jpg" style={{width:900, height:'auto'}}/></div>

- **ステップ2.** 以前に作成した**xiao-esp32S3.yaml**ファイル内で、ファイルを変更してOTA経由でXIAO ESP32S3 senseにプッシュします

```
# Configuration for ESPHome
esphome:
  # Name of the ESP32-S3 device
  name: esp32s3
  
  # PlatformIO build options
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# Configuration for ESP32
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:

# Over-the-Air update configuration
ota:

# Wi-Fi configuration
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# Captive portal configuration
captive_portal:

# SPI configuration
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

# I2C configuration for BME680 sensor
i2c:
  sda: GPIO5
  scl: GPIO6
  scan: True
  id: bus_a
  frequency: 1MHz

# Sensor configuration for SGP4X
sensor:
  - platform: sgp4x
    voc:
      id: sgp41_voc
      name: "VOC Index"
    nox:
      id: sgp41_nox
      name: "NOx Index"
```

- **ステップ 3.** 補償を使用した例
compensation（オプション）：補償に使用されるセンサーを含むブロック。設定されていない場合、デフォルト値が使用されます。
温度・湿度センサー（BME680）を使用してスマート空気品質センサー（SGP41）を補償します。
更新された **xiao-esp32S3.yaml** ファイルは以下の通りです：

```
# Configuration for ESPHome
esphome:
  # Name of the ESP32-S3 device
  name: esp32s3
  
  # PlatformIO build options
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# Configuration for ESP32
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:

# Over-the-Air update configuration
ota:

# Wi-Fi configuration
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# Captive portal configuration
captive_portal:

# SPI configuration
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

# I2C configuration for BME680 sensor
i2c:
  sda: GPIO5
  scl: GPIO6
  scan: True
  id: bus_a
  frequency: 1MHz

# BME680 sensor configuration
sensor:
  - platform: bme680
    temperature:
      id: bme680_temp
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

# SGP4X sensor configuration
  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp
```

**注意:** このセンサーは十分なデータサンプルを収集するために90サイクルを消費し、現在のところ警告を回避することはできません。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/38.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/23.png" style={{width:900, height:'auto'}}/></div>

##### ダッシュボードでの可視化

前回と同様です。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/43.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/24.png" style={{width:900, height:'auto'}}/></div>
<br />

#### OV2640/OV3660 カメラ (XIAO ESP32S3 Sense)

##### セットアップ設定

- **ステップ 1.** OV2640またはOV660カメラ外部ボードをxiao esp32s3 senseに接続します

- **ステップ 2.** 以前に作成した**xiao-esp32s3-camera.yaml**ファイル内で、ファイルを変更してOTA経由でXIAO ESP32S3 senseにプッシュします

```
# Configuration for ESPHome
esphome:
  # Name of the ESP32-S3 device
  name: esp32s3
  
  # PlatformIO build options
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# Configuration for ESP32
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:

# Over-the-Air update configuration
ota:

# Wi-Fi configuration
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# Captive portal configuration
captive_portal:

# Configuration for the ESP32 Camera
esp32_camera:
  id: espcam
  name: My Camera
  external_clock:
    pin: GPIO10
    frequency: 20MHz
  i2c_pins:
    sda: GPIO40
    scl: GPIO39
  data_pins: [GPIO15, GPIO17, GPIO18, GPIO16, GPIO14, GPIO12, GPIO11, GPIO48]
  vsync_pin: GPIO38
  href_pin: GPIO47
  pixel_clock_pin: GPIO13
  resolution: 800x600
  
# Configuration for the ESP32 Camera Web Server
esp32_camera_web_server:
  - port: 8080
    mode: stream
  - port: 8081
    mode: snapshot
```

**注意**: 詳細については、[こちら](https://esphome.io/components/esp32_camera.html?highlight=camera)をお読みください。
  
##### ダッシュボードでの可視化

- **ステップ 1.** Home Assistantの概要ページで、3つの点をクリックし、**Edit Dashboard**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** **+ ADD CARD**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** **By ENTITY**を選択し、**Camera**と入力して**My Camera**を選択します
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/cameravisulization.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/25.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 4.** **Add to Dashboard**をクリックします
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/cameravisulization2.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/26.png" style={{width:400, height:'auto'}}/></div>

- **ステップ 5.** ダッシュボードでWebストリームを表示する際、アイドルモードになっており、1分間に数フレームのみ更新されます。カードをクリックするとアクティブモードに移行し、通常は1秒間に1〜10フレームの更新レートになります。このチュートリアルでは、更新レートは約4フレーム/秒です。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/camera.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/27.png" style={{width:400, height:'auto'}}/></div>

#### 音声アシスタント用PDMマイクロフォン
  
##### セットアップ設定

- **ステップ 1.** 以前に作成した**xiao-esp32s3-microphone.yaml**ファイル内で、ファイルを変更し、OTA経由でXIAO ESP32S3 senseにプッシュします

```
# Configuration for ESPHome
esphome:
  name: esp32s3
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# Configuration for ESP32
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:

# Over-the-Air update configuration
ota:

# Wi-Fi configuration
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# Captive portal configuration
captive_portal:

# Configuration for the status LED light
light:
  - platform: status_led
    id: light0
    name: "Voice Assistant State"
    pin:
      number: GPIO21
      inverted: true

# Configuration for I2S audio
i2s_audio:
  i2s_lrclk_pin: GPIO46 # Note: labeled as "useless"
  i2s_bclk_pin: GPIO42

# Configuration for the microphone using I2S audio
microphone:
  - platform: i2s_audio
    id: echo_microphone
    i2s_din_pin: GPIO41
    adc_type: external
    pdm: true

# Configuration for the Voice Assistant
voice_assistant:
  microphone: echo_microphone

# Configuration for the binary sensor (Boot Switch)
binary_sensor:    
  - platform: gpio
    pin: 
      number: GPIO2
      mode:
        input: true
        pullup: true
    name: Boot Switch
    internal: true
    on_press:
      - voice_assistant.start:
      - light.turn_off: light0
    on_release:
      - voice_assistant.stop:
      - light.turn_on: light0
```

**注意**: 詳細については、[こちら](https://esphome.io/components/microphone/i2s_audio)をお読みください。

##### ダッシュボードでの可視化

- **ステップ 1.** Home Assistantの概要ページで、3つの点をクリックし、**Edit Dashboard**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** **+ ADD CARD**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** **By ENTITY**を選択し、**Esp32S3 Assist in progress**、**Esp32S3 Assist in progress**、**Esp32S3 Finished speaking detection**、**Status**、**voice assistant state**を選択します
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va1.png" width="700">
<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va2.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/28.png" style={{width:900, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/29.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 4.** **Add to Dashboard**をクリックします
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va3.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/30.png" style={{width:400, height:'auto'}}/></div>

- **ステップ 5.** Seeed Studio Expansion Base for XIAOの**Button(D1)**を押すと、esp32s3のユーザー定義LED（GPIO2）が点灯し、**音声アシスタント**を通じてesphomeと会話できます。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va4.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/31.png" style={{width:600, height:'auto'}}/></div>

**注意:** 詳細については、[こちらをお読みください](https://esphome.io/components/voice_assistant.html)。

#### XIAO用6x10 RGB MATRIX

##### セットアップ設定

- **ステップ 1.** まず、6x10 RGB MATRIXをXIAOに接続する必要があります。詳細については[このWiki](https://wiki.seeedstudio.com/ja/rgb_matrix_for_xiao/#hardware-preparation)を参照してください。

- **ステップ 2.** 以下の.yaml情報をコピーし、OTA経由でXIAO ESP32S3にプッシュします。

```
esphome:
  name: sixtyled
  friendly_name: sixtyled

esp32:
  board: seeed_xiao_esp32s3
  variant: esp32s3
  framework:
    type: arduino
    version: latest
    platform_version: 6.4.0

# Enable logging
logger:

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Sixtyled Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:
    
light:
  - platform: esp32_rmt_led_strip
    rgb_order: GRB
    pin: GPIO1
    num_leds: 60
    rmt_channel: 0
    chipset: ws2812
    name: "XIAO LEDS"

```

##### ダッシュボードでの可視化

- **ステップ 1.** パス `Setting - Devices&services - ESPHome - sixtyled(設定した名前)` を開いて、ダッシュボードにカードを追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/sixty_dashboard_add.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** Home Assistantの概要ページで、3つの点をクリックし、**Edit Dashboard**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** **+ ADD CARD**をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 4.** **By ENTITY**を選択し、**xiao**と入力して、**sixtyled XIAO LEDS**の横にある**チェックボックス**を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/add_card.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 5.** **CONTINUE**をクリックし、**Add to Dashboard**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/sixty_dashboard_add2.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 6.** その後、「概要」セクションでXIAO用の6x10 RGB MATRIXを制御できるカードを見つけることができます。ここで、オン/オフ状態を切り替え、色と明度をカスタマイズできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/LEDdemo.gif" style={{width:600, height:'auto'}}/></div>

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- **Zacharyの努力**に感謝し、あなたの作品は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。
- **pythonの努力**に感謝し、プロジェクトのソースは[こちら](https://community.home-assistant.io/t/seeed-studio-6x10-rgb-matrix-on-xiao-esp32s3/629867)で共有されています。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
