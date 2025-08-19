---
description: ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3
title: ESPHome サポート Seeed Studio XIAO ESP32S3
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/XIAO_ESP32S3_esphome
last_update:
  date: 05/15/2025
  author: Zachay-NAU
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32S3 を使用して Home Assistant に ESPHome で接続する（すべてのポート対応）

このWikiでは、[Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/) を ESPHome を介して Home Assistant に接続し、Grove モジュールを XIAO ESP32S3 に接続した後にセンサーデータを送信したりデバイスを制御したりする方法を、ステップバイステップで説明します。それでは始めましょう！

## ESPHome と Home Assistant とは？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:600, height:'auto'}}/></div>
<br />

[ESPHome](https://esphome.io/) は、ESP ボードの管理をできるだけ簡単にすることを目的としたツールです。YAML 設定ファイルを読み取り、ESP デバイスにインストールするカスタムファームウェアを作成します。ESPHome の設定に追加されたデバイスやセンサーは、自動的に Home Assistant の UI に表示されます。ESPHome を使用すると、データを Home Assistant デバイスに接続して送信することができます。

## ハードウェアの準備

このチュートリアルをすべて実行するには、以下のものを準備する必要があります。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 詳細を確認 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### 使用するセンサー

- [Grove - 温度・湿度センサー (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)<br />
- [Grove - スマート空気質センサー (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)<br />
- [6x10 RGB マトリックス for XIAO](https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#)

## ソフトウェアの準備

### Home Assistant のインストール

Home Assistant がすでにインストールされ、稼働していることを確認してください。ODYSSEY-X86 SBC に Home Assistant をインストールする手順については、[このウィキ](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant)を参照してください。または、Seeed Mini Router で Home Assistant を使用する詳細な手順については、[こちらのリンク](https://www.mbreviews.com/how-to-home-assistant-seeed-mini-router/)を参照してください。

### Home Assistant に ESPHome をインストール

ESPHome は **Home Assistant アドオン**として利用可能で、アドオンストアから簡単にインストールできます。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/3.png" width="700" />  -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

<!--  
- **ステップ 1.** ESPHome を Home Assistant に素早くセットアップするには、以下のボタンをクリックしてください

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/4.png" width="300">

- **ステップ 2.** 次のポップアップが表示されたら、**OPEN LINK** をクリックしてください

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/5.png" width="300">

-->

- **ステップ 1.** **INSTALL** をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** すべてのオプションを有効にして、**START** をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

<!-- 
- **ステップ 3.** **INSTALL** をクリック

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/6.png" width="700">

- **ステップ 4.** すべてのオプションを有効にして、**START** をクリック

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/7.png" width="700">

- **ステップ 5.** **OPEN WEB UI** またはサイドパネルの **ESPHOME** をクリック

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/8.png" width="700">

-->
<br />
ESPHome が正常に読み込まれると、以下のウィンドウが表示されます。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/9.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div> 


## はじめに

すべてのソフトウェアとハードウェアが準備できたら、作業を開始できます。

### 1. Seeed Studio XIAO ESP32S3 (Sense) を ESPHome に追加

- **ステップ 1.** **+ NEW DEVICE** をクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/10.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** **CONTINUE** をクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/11.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** デバイスの**名前**を入力し、**ネットワーク名**や**パスワード**などの WiFi 認証情報を入力します。その後、**NEXT** をクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/12.png" width="300"> 1.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/1.png" style={{width:400, height:'auto'}}/></div>

- **ステップ 4.** **ESP32-S3** を選択してクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/13.png" width="300"> 2.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/2.png" style={{width:400, height:'auto'}}/></div>

- **ステップ 5.** このボードを手動で設定するため、**SKIP** をクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/14.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

- **ステップ 6.** 新しく作成されたボードの下にある **EDIT** をクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/15.png" width="300"> 3.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/3.png" style={{width:400, height:'auto'}}/></div>

- **ステップ 7.** **YAML** ファイルが開きます。このファイルを使用してボードのすべての設定を行います。以下のように **esp32** の内容を編集してください。

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


# ログの有効化
logger:

# Home Assistant API の有効化
api:

ota:

wifi:
  ssid: "your wifi name"
  password: "your password"

  # WiFi 接続が失敗した場合のフォールバックホットスポット (キャプティブポータル) を有効化
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

```

**注意:** ここでは、ESP32 用の最新バージョンの [Arduino core](https://github.com/espressif/arduino-esp32/releases) と [PlatformIO の ESP32 サポート](https://github.com/platformio/platform-espressif32/releases) を使用しています。

- **ステップ 8.** **SAVE** をクリックし、その後 **INSTALL** をクリック

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/16.png" width="700"> 4.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/4.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 9.** USB Type-C ケーブルの一端を Seeed Studio XIAO ESP32S3 に接続し、もう一端を reRouter CM4 1432 の USB ポートのいずれかに接続します。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/17.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 10.** **ESPHome Dashboard を実行しているコンピュータに接続**をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/18.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/5.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 11.** 接続されているポートを選択します。おそらく ```/dev/ttyACM1``` です。なぜなら ```/dev/ttyACM0``` は reRouter CM4 1432 に接続されているからです。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/19.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/6.png" style={{width:900, height:'auto'}}/></div>

:::tip 
2.4GHz Wi-Fi を使用することをお勧めします。
:::

これで必要なボードパッケージがすべてダウンロードされ、ESPHome ファームウェアが XIAO ESP32S3 にフラッシュされます。フラッシュが成功すると、以下の出力が表示されます。エラーが表示された場合は、XIAO ESP32S3 を再起動するか、BOOT ボタンを押し続けてブートローダーモードに入り、XIAO ESP32S3 を接続してみてください。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/20.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/7.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 12.** 上記のウィンドウには接続されたボードからのリアルタイムログが表示されます。**STOP** をクリックして閉じます。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/21.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/8.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 13.** ボードのステータスが **ONLINE** と表示されている場合、ボードが WiFi に正常に接続されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/9.png" style={{width:400, height:'auto'}}/></div>

:::tip

これで XIAO ESP32S3 を reRouter CM4 1432 から切断し、USB ケーブルで電源を供給するだけで済みます。これ以降、XIAO ESP32S3 にファームウェアをフラッシュしたい場合は、USB ケーブルで X86 ボードに接続することなく、OTA を使用して簡単に行うことができます。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/22.png" width="300"> -->

- 1. **三点アイコン** をクリックし、**Install** をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/23.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/10.png" style={{width:400, height:'auto'}}/></div>

- 2. **Wirelessly** を選択すると、変更がボードにワイヤレスでプッシュされます。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/24.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/11.png" style={{width:400, height:'auto'}}/></div>

:::

- **ステップ 14.** **Settings** に移動し、**Devices & Services** を選択します。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/25.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 15.** **ESPHome** が検出された統合として表示されます。**CONFIGURE** をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/26.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/12.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 16.** **SUBMIT** をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/27.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/13.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 17.** **FINISH** をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/28.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

### 2. Grove モジュールを ESPHome と Home Assistant に接続する

次に、Seeed Studio XIAO ESP32S3 (センス) に Grove モジュールを接続し、センサーデータを表示したり、Home Assistant を使用してデバイスを制御したりします！

### 開発知識

#### XIAO 拡張ボード

GroveモジュールをSeeed Studio XIAO ESP32S3で使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)を使用し、XIAO ESP32S3を接続します。

その後、基板上のGroveコネクタを使用してGroveモジュールを接続することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

以下の図に従って、Grove Shield for Seeed Studio XIAOのGroveコネクタにGroveモジュールを接続する際に適切な内部ピン番号を使用する必要があります。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/pinout.png" width="1000"> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg"style={{width:900, height:'auto'}}/></div>
<br />

例えば、D0ポートにGroveモジュールを接続したい場合、ESPHomeでピンをGPIO1として定義する必要があります。詳細は[こちらをクリック](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/#resources)してください。

#### ESPHomeとのGrove互換性リスト

現在、以下のGroveモジュールがESPHomeでサポートされています。

[こちらを確認](https://esphome.io/components/sensor/index.html#see-also)

ここでは、上記の表から6つのGroveモジュールを選択し、それらをESPHomeおよびHome Assistantとどのように接続できるかを説明します。

### 3. Grove接続とデータ送信

ここでは、いくつかのGroveモジュールを選択し、それらをESPHomeおよびHome Assistantとどのように接続できるかを説明します。

#### Grove - 温度と湿度センサー (BME680)

##### 設定手順

- **ステップ1.** Grove - [温度、湿度、圧力、ガスセンサー (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)をSeeed Studio Expansion Base for XIAOのI2Cコネクタの1つに接続します。

- **ステップ2.** 以前に作成した**xiao-esp32s3-bme680.yaml**ファイルを変更し、OTAでXIAO ESP32S3にプッシュします。

```
# ESPHomeの設定
esphome:
  # ESP32-S3デバイスの名前
  name: esp32s3
  
  # PlatformIOビルドオプション
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32の設定
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# ロギングを有効化
logger:

# Home Assistant APIを有効化
api:

# OTA更新の設定
ota:

# Wi-Fi設定
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Wi-Fi接続が失敗した場合のフォールバックホットスポット（キャプティブポータル）を有効化
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# キャプティブポータル設定
captive_portal:

# BME680センサー用I2C設定
i2c:
  sda: GPIO5
  scl: GPIO6

# BME680センサー設定
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

[BME680コンポーネント](https://esphome.io/components/sensor/bme680)についてさらに学ぶことができます。このコンポーネントを使用すると、BME280、BME680、BMP085、BMP280、AHT10、AHT20、AHT21ベースのセンサーを使用できます。ここでは、AHT20がI2Cプロトコルを使用して通信するため、I²Cバスコンポーネントを追加しています。

##### Dashboardでの可視化

- **ステップ1.** Home Assistantの概要ページで、3つのドットをクリックし、**Edit Dashboard**をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **ステップ2.** **+ ADD CARD**をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **ステップ3.** **By ENTITY**を選択し、**temperature**と入力して、**Temperature**の横にある**チェックボックス**を選択します。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/33.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **ステップ4.** **Humidity**、**Gas Resistance**、**Pressure**についても同様に繰り返します。

- **ステップ5.** **CONTINUE**をクリックします。

- **ステップ6.** **ADD TO DASHBOARD**をクリックします。

これで、Home Assistantのダッシュボードは以下のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/18.png" style={{width:900, height:'auto'}}/></div>

- **ステップ7.** センサーデータをゲージとして可視化することもできます。**BY CARD**の下で**Gauge**をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/35.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/19.png" style={{width:900, height:'auto'}}/></div>

- **ステップ8.** ドロップダウンメニューから**Temperature**を選択します。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/36.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/20.png" style={{width:900, height:'auto'}}/></div>

- **ステップ9.** **SAVE**をクリックします。

- **ステップ 10.** **湿度**、**ガス抵抗**、**気圧**についても同様に繰り返します。

- これでダッシュボードは以下のようになります。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/37.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/21.png" style={{width:900, height:'auto'}}/></div>
   
<br />

#### Grove - スマート空気質センサー (SGP41)
  
- **ステップ 1.** Grove - [スマート空気質センサー (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) を Seeed Studio 拡張ベースの I2C コネクタの1つに接続します。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/38.jpg" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/22.jpg" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** 以前作成した **xiao-esp32S3.yaml** ファイルを編集し、OTA を使用して XIAO ESP32S3 Sense にプッシュします。

```
# ESPHome の設定
esphome:
  # ESP32-S3 デバイスの名前
  name: esp32s3
  
  # PlatformIO ビルドオプション
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32 の設定
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# ロギングを有効化
logger:

# Home Assistant API を有効化
api:

# OTA アップデートの設定
ota:

# Wi-Fi 設定
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Wi-Fi 接続が失敗した場合のフォールバックホットスポット (キャプティブポータル) を有効化
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# キャプティブポータル設定
captive_portal:

# SPI 設定
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

# BME680 センサー用 I2C 設定
i2c:
  sda: GPIO5
  scl: GPIO6
  scan: True
  id: bus_a
  frequency: 1MHz

# SGP4X センサー設定
sensor:
  - platform: sgp4x
    voc:
      id: sgp41_voc
      name: "VOC インデックス"
    nox:
      id: sgp41_nox
      name: "NOx インデックス"
```

- **ステップ 3.** 補正付きの例  
補正 (オプション): 補正に使用するセンサーを含むブロックです。設定されていない場合、デフォルト値が使用されます。  
温湿度センサー (BME680) を使用してスマート空気質センサー (SGP41) を補正します。以下は更新された **xiao-esp32S3.yaml** ファイルです：

```
# ESPHome の設定
esphome:
  # ESP32-S3 デバイスの名前
  name: esp32s3
  
  # PlatformIO ビルドオプション
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32 の設定
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# ロギングを有効化
logger:

# Home Assistant API を有効化
api:

# OTA アップデートの設定
ota:

# Wi-Fi 設定
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Wi-Fi 接続が失敗した場合のフォールバックホットスポット (キャプティブポータル) を有効化
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# キャプティブポータル設定
captive_portal:

# SPI 設定
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

# BME680 センサー設定
i2c:
  sda: GPIO5
  scl: GPIO6
  scan: True
  id: bus_a
  frequency: 1MHz

# BME680 センサー設定
sensor:
  - platform: bme680
    temperature:
      id: bme680_temp
      name: "BME680 温度"
      oversampling: 16x
    pressure:
      name: "BME680 気圧"
    humidity:
      id: bme680_hum
      name: "BME680 湿度"
    gas_resistance:
      name: "BME680 ガス抵抗"
    address: 0x76

# SGP4X センサー設定
  - platform: sgp4x
    voc:
      name: "VOC インデックス"
    nox:
      name: "NOx インデックス"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp
```

**注意:** このセンサーは十分なデータサンプルを収集するのに90サイクルを要し、警告を回避することは現時点ではできません。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/38.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/23.png" style={{width:900, height:'auto'}}/></div>

##### ダッシュボード での可視化

以前と同じです。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/43.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/24.png" style={{width:900, height:'auto'}}/></div>
<br />

#### OV2640 カメラ (XIAO ESP32S3 Sense)

##### 設定手順

- **ステップ 1.** OV2640 カメラ外部ボードを XIAO ESP32S3 Sense に接続します。

- **ステップ 2.** 以前作成した **xiao-esp32s3-camera.yaml** ファイルを編集し、OTA を使用して XIAO ESP32S3 Sense にプッシュします。

```
# ESPHome の設定
esphome:
  # ESP32-S3 デバイスの名前
  name: esp32s3
  
  # PlatformIO ビルドオプション
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32 の設定
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# ロギングを有効化
logger:

# Home Assistant API を有効化
api:

# OTA アップデートの設定
ota:

# Wi-Fi 設定
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Wi-Fi 接続が失敗した場合のフォールバックホットスポット (キャプティブポータル) を有効化
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# キャプティブポータル設定
captive_portal:

# ESP32 カメラの設定
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
  
# ESP32 カメラ Web サーバーの設定
esp32_camera_web_server:
  - port: 8080
    mode: stream
  - port: 8081
    mode: snapshot
```

**注**: 詳細については[こちら](https://esphome.io/components/esp32_camera.html?highlight=camera)をご覧ください。

##### ダッシュボードでの可視化

- **ステップ 1.** Home Assistant の概要ページで、3つのドットをクリックし、**ダッシュボードを編集**をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** **+ カードを追加**をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** **エンティティ別**を選択し、**Camera**を入力して**My Camera**を選択します。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/cameravisulization.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/25.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 4.** **ダッシュボードに追加**をクリックします。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/cameravisulization2.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/26.png" style={{width:400, height:'auto'}}/></div>

- **ステップ 5.** ダッシュボードでウェブストリームを表示すると、アイドルモードになり、1分間に数フレームのみ更新されます。カードをクリックするとアクティブモードに移行し、通常1秒間に1～10フレームの更新速度になります。このチュートリアルでは、更新速度は約1秒間に4フレームです。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/camera.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/27.png" style={{width:400, height:'auto'}}/></div>


#### 音声アシスタント用 PDM マイク

##### 設定構成

- **ステップ 1.** 以前作成した **xiao-esp32s3-microphone.yaml** ファイル内で、ファイルを変更し、OTA を使用して XIAO ESP32S3 Sense にプッシュします。

```
# ESPHomeの設定
esphome:
  name: esp32s3
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32の設定
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# ロギングを有効化
logger:

# Home Assistant APIを有効化
api:

# OTA更新の設定
ota:

# Wi-Fi設定
wifi:
  ssid: "your wifi name"
  password: "your password"

  # Wi-Fi接続が失敗した場合のフォールバックホットスポット（キャプティブポータル）を有効化
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# キャプティブポータルの設定
captive_portal:

# ステータスLEDライトの設定
light:
  - platform: status_led
    id: light0
    name: "Voice Assistant State"
    pin:
      number: GPIO21
      inverted: true

# I2Sオーディオの設定
i2s_audio:
  i2s_lrclk_pin: GPIO46 # 注: "useless" とラベル付けされています
  i2s_bclk_pin: GPIO42

# I2Sオーディオを使用したマイクの設定
microphone:
  - platform: i2s_audio
    id: echo_microphone
    i2s_din_pin: GPIO41
    adc_type: external
    pdm: true

# 音声アシスタントの設定
voice_assistant:
  microphone: echo_microphone

# バイナリセンサー（ブートスイッチ）の設定
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

**注**: 詳細については[こちら](https://esphome.io/components/microphone/i2s_audio)をご覧ください。

##### ダッシュボードでの可視化

- **ステップ 1.** Home Assistant の概要ページで、3つのドットをクリックし、**ダッシュボードを編集**をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** **+ カードを追加**をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** **エンティティ別**を選択し、**Esp32S3 Assist in progress**、**Esp32S3 Assist in progress**、**Esp32S3 Finished speaking detection**、**Status**、および**voice assistant state**を選択します。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va1.png" width="700">
<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va2.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/28.png" style={{width:900, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/29.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 4.** **ダッシュボードに追加**をクリックします。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va3.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/30.png" style={{width:400, height:'auto'}}/></div>

- **ステップ 5.** Seeed Studio Expansion Base for XIAO 上の **ボタン(D1)** を押すと、esp32s3 上のユーザー定義 LED (GPIO2) が点灯し、**音声アシスタント**を通じて esphome と対話することができます。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va4.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/31.png" style={{width:600, height:'auto'}}/></div>

**注意:** 詳細については、[こちらをお読みください。](https://esphome.io/components/voice_assistant.html)


#### XIAO 用 6x10 RGB マトリックス

##### セットアップ構成

- **ステップ 1.** まず、6x10 RGB マトリックスを XIAO に接続する必要があります。詳細は [この Wiki](https://wiki.seeedstudio.com/ja/rgb_matrix_for_xiao/#hardware-preparation) を参照してください。

- **ステップ 2.** 以下の .yaml 情報をコピーして、OTA を使用して XIAO ESP32S3 にプッシュします。

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

# ロギングを有効化
logger:

# Home Assistant API を有効化
api:

ota:

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Wi-Fi 接続が失敗した場合のフォールバックホットスポット (キャプティブポータル) を有効化
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

##### ダッシュボード での可視化

- **ステップ 1.** `設定 - デバイスとサービス - ESPHome - sixtyled(設定した名前)` のパスを開き、カードをダッシュボードに追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/sixty_dashboard_add.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** Home Assistant の概要ページで、3つのドットをクリックし、**ダッシュボード を編集** をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>



- **ステップ 3.** **+ カードを追加** をクリックします。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>



- **ステップ 4.** **エンティティ別** を選択し、**xiao** と入力して、**sixtyled XIAO LEDS** の横にある **チェックボックス** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/add_card.png" style={{width:900, height:'auto'}}/></div>


- **ステップ 5.** **続行** をクリックし、**ダッシュボード に追加** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/sixty_dashboard_add2.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 6.** その後、「概要」セクションにカードが表示され、XIAO 用 6x10 RGB マトリックスを制御できます。ここで、オン/オフの切り替えや、色や明るさのカスタマイズが可能です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/LEDdemo.gif" style={{width:600, height:'auto'}}/></div>

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- **Zachary** の尽力に感謝します。あなたの成果は [こちら](https://wiki.seeedstudio.com/ja/Honorary-Contributors/) で展示されます。
- **python** の尽力に感謝します。このプロジェクトのソースは [こちら](https://community.home-assistant.io/t/seeed-studio-6x10-rgb-matrix-on-xiao-esp32s3/629867) で共有されています。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズに進むよう、さまざまなサポートを提供しています。異なるニーズや好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>