---
description: ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3
title: Seeed Studio XIAO ESP32S3 における ESPHome サポート
keywords:
  - ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO_ESP32S3_esphome
last_update:
  date: 12/25/2023
  author: Zachay-NAU
createdAt: '2023-12-20'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/ja/XIAO_ESP32S3_esphome/
---

# XIAO ESP32S3 Sense を ESPHome 経由で Home Assistant に接続する（全ポート対応）

この Wiki では、[Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/) を Home Assistant 上で動作する ESPHome に接続し、Grove モジュールを XIAO ESP32S3 に接続した後にセンサーデータを送信したりデバイスを制御したりする方法を、ステップバイステップで解説します。さっそく始めましょう！

## ESPHome と Home Assistant とは？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:600, height:'auto'}}/></div>
<br />

[ESPHome](https://esphome.io/) は、ESP ボードの管理をできるだけ簡単にすることを目的としたツールです。YAML 設定ファイルを読み込み、ESP デバイスにインストールされるカスタムファームウェアを生成します。ESPHome の設定に追加されたデバイスやセンサーは、自動的に Home Assistant の UI に表示されます。ESPHome を使うことで、Home Assistant デバイスと接続し、データを送信できます。

## ハードウェアの準備

このチュートリアルを最初から最後まで追いたい場合は、以下を準備してください。

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Seeed Studio 拡張ボード</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> もっと見る 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### 使用するセンサー

- [Grove - Temperature and Humidity Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)<br />
- [Grove -Smart Air Quality Sensor (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)<br />
- [6x10 RGB MATRIX for XIAO](https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#)

## ソフトウェアの準備

### Home Assistant をインストールする

Home Assistant がすでに動作していることを確認してください。ODYSSEY-X86 SBC 上に Home Assistant をインストールする手順については、[この wiki](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant) を参照してください。また、Seeed Mini Router で Home Assistant を使用する詳細な手順については、この [リンク](https://www.mbreviews.com/how-to-home-assistant-seeed-mini-router/) を参照してください。

### Home Assistant に ESPHome をインストールする

ESPHome は **Home Assistant Add-On** として利用可能で、アドオンストアから簡単にインストールできます。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/3.png" width="700" />  -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

<!--  
- **Step 1.** To quickly setup ESPHome on Home Asssistant, click the below button

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/4.png" width="300">

- **Step 2.** Once you see the following pop-up, click **OPEN LINK**

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/5.png" width="300">

-->

- **Step 1.** **INSTALL** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **Step 2.** すべてのオプションを有効にし、**START** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

<!-- 
- **Step 3.** Click **INSTALL**

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/6.png" width="700">

- **Step 4.** Enable all the options and click **START**

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/7.png" width="700">

- **Step 5.** Click **OPEN WEB UI** or **ESPHOME from the side-panel**

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/8.png" width="700">

-->
<br />
ESPHome が正常に読み込まれると、次のウィンドウが表示されます

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/9.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## はじめに

ソフトウェアとハードウェアの準備がすべて整ったら、作業を開始できます。

### 1. Seeed Studio XIAO ESP32S3（Sense）を ESPHome に追加する

- **Step 1.** **+ NEW DEVICE** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/10.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **Step 2.** CONTINUE をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/11.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **Step 3.** デバイスの **Name** を入力し、**Network name** と **Password** などの WiFi 認証情報を入力します。その後 **NEXT** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/12.png" width="300"> 1.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/1.png" style={{width:400, height:'auto'}}/></div>

- **Step 4.** **ESP32-S3** を選択し、クリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/13.png" width="300"> 2.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/2.png" style={{width:400, height:'auto'}}/></div>

- **Step 5.** このボードは手動で設定するため、**SKIP** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/14.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

- **Step 6.** 新しく作成されたボードの下にある **EDIT** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/15.png" width="300"> 3.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/3.png" style={{width:400, height:'auto'}}/></div>

- **Step 7.** これにより **YAML** ファイルが開き、このファイルを使用してすべてのボード設定を行います。**esp32** の下の内容を次のように編集します

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

**Note:** ここでは、ESP32 用の最新バージョンの [Arduino core](https://github.com/espressif/arduino-esp32/releases) と [PlatformIO 向け ESP32 サポート](https://github.com/platformio/platform-espressif32/releases) を使用しています

- **Step 8.** **SAVE** をクリックし、その後 **INSTALL** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/16.png" width="700"> 4.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/4.png" style={{width:900, height:'auto'}}/></div>

- **Step 9.** USB Type-C ケーブルの一方を Seeed Studio XIAO ESP32S3 に、もう一方を reRouter CM4 1432 の USB ポートのいずれかに接続します

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/17.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **Step 10.** **Plug into the computer running ESPHome Dashboard** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/18.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/5.png" style={{width:900, height:'auto'}}/></div>

- **Step 11.** 接続されているポートを選択します。```/dev/ttyACM0``` が reRouter CM4 1432 に接続されているため、```/dev/ttyACM1``` である可能性が高いです

 <!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/19.png" width="700"> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/6.png" style={{width:900, height:'auto'}}/></div>

:::tip
2.4GHz の Wi-Fi を使用することをおすすめします
:::

これで、必要なすべてのボードパッケージがダウンロードされ、ESPHome ファームウェアが XIAO ESP32S3 に書き込まれます。書き込みが成功すると、次のような出力が表示されます。エラーが表示される場合は、XIAO ESP32S3 を再起動するか、BOOT ボタンを押しながら XIAO ESP32S3 を接続してブートローダーモードに入ってみてください。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/20.png" width="700"> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/7.png" style={{width:900, height:'auto'}}/></div>

- **Step 12.** 上のウィンドウには、接続されたボードからのリアルタイムログが表示されます。**STOP** をクリックして閉じます

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/21.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/8.png" style={{width:900, height:'auto'}}/></div>

- **Step 13.** ボードのステータスが **ONLINE** と表示されていれば、ボードが WiFi に正常に接続されていることを意味します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/9.png" style={{width:400, height:'auto'}}/></div>

:::tip

これで、XIAO ESP32S3 を reRouter CM4 1432 から取り外し、USB ケーブルで給電するだけで動作させることができます。これは、今後 XIAO ESP32S3 にファームウェアを書き込みたい場合、USB ケーブルで X86 ボードに接続しなくても、OTA で簡単に行えるためです。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/22.png" width="300"> -->

- 1. **three dots** をクリックし、**Install** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/23.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/10.png" style={{width:400, height:'auto'}}/></div>

- 2. **Wirelessly** を選択すると、変更内容がワイヤレスでボードにプッシュされます

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/24.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/11.png" style={{width:400, height:'auto'}}/></div>

:::

- **Step 14.** **Settings** に移動し、**Devices & Services** を選択します

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/25.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png" style={{width:900, height:'auto'}}/></div>

- **Step 15.** **ESPHome** が検出されたインテグレーションとして表示されます。**CONFIGURE** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/26.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/12.png" style={{width:900, height:'auto'}}/></div>

- **Step 16.** **SUBMIT** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/27.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/13.png" style={{width:900, height:'auto'}}/></div>

- **Step 17.** **FINISH** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/28.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

### 2. Grove モジュールを ESPHome と Home Assistant に接続する

ここでは Grove モジュールを Seeed Studio XIAO ESP32S3 (sense) に接続し、Home Assistant を使ってセンサーデータを表示したり、デバイスを制御したりできるようにします。

### 開発に関する知識

#### XIAO 拡張ボード

  Seeed Studio XIAO ESP32S3 で Grove モジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) を使用し、その上に XIAO ESP32S3 を接続します。

  その後、ボード上の Grove コネクタを使用して Grove モジュールを接続できます

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=s3sense" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

  Grove Shield for Seeed Studio XIAO 上の Grove コネクタに Grove モジュールを接続する際は、下の図に従って、適切な内部ピン番号を使用する必要があります。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/pinout.png" width="1000"> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg"style={{width:900, height:'auto'}}/></div>
<br />

例えば、Grove モジュールを D0 ポートに接続したい場合、ESPHome 上ではピンを GPIO1 として定義する必要があります。詳しくは[こちらをクリック](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/#resources)して確認できます。

#### ESPHome と互換性のある Grove 一覧

  現在、以下の Grove モジュールが ESPHome によってサポートされています

  [こちら](https://esphome.io/components/sensor/index.html#see-also)を確認してください

  ここでは上記の表から 6 つの Grove モジュールを選択し、それらを ESPHome と Home Assistant にどのように接続できるかを説明します。

### 3. Grove の接続とデータ送信

ここではいくつかの Grove モジュールを選択し、それらを ESPHome と Home Assistant にどのように接続できるかを説明します。

#### Grove - Temperature and Humidity Sensor (BME680)

##### セットアップ構成

- **Step 1.** Grove - [Temperature, Humidity, Pressure and Gas Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) を Seeed Studio Expansion Base for XIAO 上の I2C コネクタのいずれかに接続します

- **Step 2.** 以前に作成した **xiao-esp32s3-bme680.yaml** ファイルの内容を変更し、OTA で XIAO ESP32S3 にプッシュします

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

この[BME680 コンポーネント](https://esphome.io/components/sensor/bme680)についての詳細はここから学ぶことができます。これは BME280、BME680、BMP085、BMP280、AHT10、AHT20、AHT21 ベースのセンサーを使用することができます。ここでは、AHT20 が I2C プロトコルを使用して通信するため、I²C Bus コンポーネントを追加しています。

##### ダッシュボードでの可視化

- **Step 1.** Home Assistant の Overview ページで 3 つの点をクリックし、**Edit Dashboard** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **Step 2.** **+ ADD CARD** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** **By ENTITY** を選択し、**temperature** と入力して、**Temperature** の横にある **チェックボックス** を選択します

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/33.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 4.** **Humidity**、**Gas Resitance**、**Pressure** についても同じ操作を繰り返します

- **ステップ 5.** **CONTINUE** をクリックします

- **ステップ 6.** **ADD TO DASHBOARD** をクリックします

これで Home Assistant のダッシュボードは次のようになります

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/18.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 7.** センサーデータをゲージとして可視化することもできます。**BY CARD** の下にある **Gauge** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/35.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/19.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 8.** ドロップダウンメニューから **Temperature** を選択します

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/36.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/20.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 9.** **SAVE** をクリックします

- **ステップ 10.** **Humidity**、**Gas Resitance**、**Pressure** についても同じ操作を繰り返します

- これでダッシュボードは次のようになります

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/37.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/21.png" style={{width:900, height:'auto'}}/></div>

<br />

#### Grove -Smart Air Quality Sensor (SGP41)

- **ステップ 1.** Grove - [Smart Air Quality Sensor (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) を Seeed Studio Expansion Base for XIAO の I2C コネクタの 1 つに接続します

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/38.jpg" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/22.jpg" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** 以前に作成した **xiao-esp32S3.yaml** ファイル内の内容を変更し、OTA で XIAO ESP32S3 Sense に書き込みます

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

- **ステップ 3.** 補正付きの例
compensation（オプション）：補正に使用されるセンサーを含むブロックです。設定しない場合はデフォルト値が使用されます。
Temperature and Humidity Sensor (BME680) を使用して、Smart Air Quality Sensor (SGP41) を補正します。
更新された **xiao-esp32S3.yaml** ファイルは次のとおりです：

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

**注意：** このセンサーは十分なデータサンプルを収集するのに 90 サイクルを要し、現時点では警告を回避することはできません。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/38.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/23.png" style={{width:900, height:'auto'}}/></div>

##### ダッシュボードでの可視化

前と同じです。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/43.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/24.png" style={{width:900, height:'auto'}}/></div>
<br />

#### OV2640/OV3660 カメラ (XIAO ESP32S3 Sense)

##### 設定構成

- **ステップ 1.** OV2640 または OV660 カメラ外付けボードを XIAO ESP32S3 Sense に接続します

- **ステップ 2.** 以前に作成した **xiao-esp32s3-camera.yaml** ファイル内の内容を変更し、OTA で XIAO ESP32S3 Sense に書き込みます

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

**注意**: 詳細については、[こちら](https://esphome.io/components/esp32_camera.html?highlight=camera) をお読みください。

##### ダッシュボードでの可視化

- **ステップ 1.** Home Assistant の Overview ページで 3 つのドットをクリックし、**Edit Dashboard** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** **+ ADD CARD** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** **By ENTITY** を選択し、**Camera** と入力して **My Camera** を選択します
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/cameravisulization.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/25.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 4.** **Add to Dashboard** をクリックします
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/cameravisulization2.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/26.png" style={{width:400, height:'auto'}}/></div>

- **Step 5.** ダッシュボードで Web ストリームを表示しているときはアイドルモードになっており、1 分あたり数フレームのみ更新されます。カードをクリックするとアクティブモードに移行し、通常は 1〜10 fps の更新レートになります。このチュートリアルでは、更新レートはおよそ 4 fps です。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/camera.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/27.png" style={{width:400, height:'auto'}}/></div>

#### 音声アシスタント用 PDM マイク

##### セットアップ構成

- **Step 1.** 先ほど作成した **xiao-esp32s3-microphone.yaml** ファイルの内容を変更し、OTA で XIAO ESP32S3 Sense に書き込みます

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

**Note**: さらに詳しい情報は[こちら](https://esphome.io/components/microphone/i2s_audio)をお読みください。

##### ダッシュボードでの可視化

- **Step 1.** Home Assistant の Overview ページで 3 つの点をクリックし、**Edit Dashboard** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **Step 2.** **+ ADD CARD** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **Step 3.** **By ENTITY** を選択し、**Esp32S3 Assist in progress**、**Esp32S3 Assist in progress**、**Esp32S3 Finished speaking detection**、**Status**、**voice assistant state** を選択します
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va1.png" width="700">
<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va2.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/28.png" style={{width:900, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/29.png" style={{width:900, height:'auto'}}/></div>

- **Step 4.** **Add to Dashboard** をクリックします
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va3.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/30.png" style={{width:400, height:'auto'}}/></div>

- **Step 5.** Seeed Studio Expansion Base for XIAO 上の **Button(D1)** を押すと、esp32s3 上のユーザー定義 LED（GPIO2）が点灯し、**voice assitant** を通じて ESPHome と対話できます。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va4.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/31.png" style={{width:600, height:'auto'}}/></div>

**Note:** さらに詳しい情報は[こちら](https://esphome.io/components/voice_assistant.html)をお読みください。

#### 6x10 RGB MATRIX for XIAO

##### セットアップ構成

- **Step 1.** まず 6x10 RGB MATRIX を XIAO に接続する必要があります。詳細は[この Wiki](https://wiki.seeedstudio.com/ja/rgb_matrix_for_xiao/#ハードウェア準備)を参照してください。

- **Step 2.** 下記の .yaml 情報をコピーし、OTA で XIAO ESP32S3 に書き込みます。

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

- **Step 1.** カードをダッシュボードに追加するために、`Setting - Devices&services - ESPHome - sixtyled(the name you set)` のパスを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/sixty_dashboard_add.png" style={{width:900, height:'auto'}}/></div>

- **Step 2.** Home Assistant の Overview ページで 3 つの点をクリックし、**Edit Dashboard** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **Step 3.** **+ ADD CARD** をクリックします

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **Step 4.** **By ENTITY** を選択し、**xiao** と入力して **sixtyled XIAO LEDS** の横の **check box** を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/add_card.png" style={{width:900, height:'auto'}}/></div>

- **Step 5.** **CONTINUE** と **Add to Dashboard** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/sixty_dashboard_add2.png" style={{width:900, height:'auto'}}/></div>

- **Step 6.** その後、「Overview」セクションに XIAO 用 6x10 RGB MATRIX を制御できるカードが表示されます。ここでオン/オフ状態を切り替えたり、色や明るさをカスタマイズしたりできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/LEDdemo.gif" style={{width:600, height:'auto'}}/></div>

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の[Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によって支援されています。
- **Zachary の尽力**に感謝します。あなたの成果は[こちら](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)で展示されます。
- **python の尽力**に感謝します。このプロジェクトのソースは[こちら](https://community.home-assistant.io/t/seeed-studio-6x10-rgb-matrix-on-xiao-esp32s3/629867)で共有されています。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
