---
description: ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3
title: ESPHome サポート Seeed Studio XIAO ESP32C3
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/XIAO-ESP32C3-for-ESPHome-Support
last_update:
  date: 05/15/2025
  author: Zachary
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32C3 を ESPHome を介して Home Assistant に接続する（すべてのポート対応）

<!-- # ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3 -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:900, height:'auto'}}/></div>

このウィキでは、[Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) を ESPHome を使用して Home Assistant に接続し、Grove モジュールを XIAO ESP32C3 に接続した後にセンサー データを送信したりデバイスを制御したりする方法をステップバイステップで説明します。ここでは、**デジタル、アナログ、IIC、SPI、UART** を含むすべてのポートを使用しています。それでは始めましょう！

## ESPHome と Home Assistant とは？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:900, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) は、ESP ボードの管理をできるだけ簡単にすることを目的としたツールです。YAML 設定ファイルを読み取り、ESP デバイスにインストールするカスタム ファームウェアを作成します。ESPHome の設定に追加されたデバイスやセンサーは、Home Assistant の UI に自動的に表示されます。ESPHome を使用すると、データを Home Assistant デバイスに接続して送信することができます。

## ハードウェアの準備

制御ボードとして XIAO ESP32C3 を使用し、ハードウェアとして [reRouter](https://www.seeedstudio.com/reRouter-CM4102032-p-5734.html) を使用し、複数の Grove センサーを組み合わせています。

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio 拡張ボード</th>
      <th>Home Assistant デバイス</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 詳細を見る 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

**Grove センサー**

- [Grove - 温湿度センサー (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove - スマート空気質センサー (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)
- [Grove - アナログマイク](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)
- [Grove - デジタル PIR センサー](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## ソフトウェアの準備

### Home Assistant のインストール

まず、Home Assistant がすでに稼働していることを確認してください。Home Assistant を [製品](https://wiki.seeedstudio.com/ja/home_assistant_topic/#-devices-for-home-assistant-) にフラッシュする方法については、複数のウィキが紹介されています。私は Raspberry Pi CM4 を搭載した reRouter を使用しているため、[公式の手順を使用して OS を reRouter にフラッシュすることができます](https://www.home-assistant.io/installation/raspberrypi)。

### Home Assistant に ESPHome をインストール

ESPHome は **Home Assistant アドオン**として利用可能で、アドオンストアから簡単にインストールできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 1.** **INSTALL** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** すべてのオプションを有効にして、**START** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

ESPHome が正常に読み込まれると、以下のウィンドウが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## はじめに

ソフトウェアとハードウェアの準備が整ったら、作業を開始できます。

### 1. Seeed Studio XIAO ESP32C3 を ESPHome に追加

- **ステップ 1.** **+ NEW DEVICE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** **CONTINUE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** デバイスの**名前**を入力し、**ネットワーク名**や**パスワード**などの WiFi 認証情報を入力します。その後、**NEXT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/7.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 4.** **ESP32-C3** を選択してクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/8.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 5.** このボードを手動で設定するため、**SKIP** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

- **ステップ 6.** 新しく作成したボードの下にある **EDIT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/9.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 7.** **YAML** ファイルが開きます。このファイルを使用してボードのすべての設定を行います。以下のように **esp32** の内容を編集します。

```yaml
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

# ロギングを有効化
logger:
 hardware_uart: UART0

# Home Assistant API を有効化
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # WiFi 接続が失敗した場合のフォールバックホットスポットを有効化
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "Your Password"
```

:::note
ここでは、ESP32 用の最新バージョンの [Arduino core](https://github.com/espressif/arduino-esp32/releases) と [PlatformIO の ESP32 サポート](https://github.com/platformio/platform-espressif32/releases) を使用しています。
:::

- **ステップ 8.** **SAVE** をクリックし、その後 **INSTALL** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/10-2.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 9.** USB Type-C ケーブルの一端を Seeed Studio XIAO ESP32C3 に接続し、もう一端を reRouter CM4 1432 の USB ポートのいずれかに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 10.** **Plug into the computer running ESPHome Dashboard** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/12-1.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 11.** 接続されているポートを選択します。おそらく ```/dev/ttyACM1``` です。なぜなら ```/dev/ttyACM0``` は reRouter CM4 1432 に接続されているためです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/13-1.png" style={{width:900, height:'auto'}}/></div>

:::tip
2.4GHz Wi-Fi を使用することをお勧めします。
:::

これで、必要なボードパッケージがすべてダウンロードされ、ESPHome ファームウェアが XIAO ESP32C3 にフラッシュされます。フラッシュが成功すると、以下の出力が表示されます。エラーが表示された場合は、XIAO ESP32C3 を再起動するか、BOOT ボタンを押しながら接続してブートローダーモードに入ってみてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/20.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 12.** 上記のウィンドウには、接続されたボードからのリアルタイムログが表示されます。**STOP** をクリックして閉じてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/14.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 13.** ボードのステータスが **ONLINE** と表示されている場合、それはボードが WiFi に正常に接続されたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/15.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 14.** **Settings** に移動し、**Devices & Services** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 15.** **ESPHome** が検出された統合として表示されます。**CONFIGURE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/20.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 16.** **SUBMIT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/21.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 17.** パスワードを入力します。これは **STEP 8** で確認した API パスワードです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/22.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 18.** **FINISH** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/23.png"style={{width:900, height:'auto'}}/></div>

### 2. Grove モジュールを接続してデータを送信する

次に、Grove モジュールを Seeed Studio XIAO ESP32C3 に接続し、センサーデータを表示したり、Home Assistant を使用してデバイスを制御したりします。

### 開発知識

#### XIAO 拡張ボード

Grove モジュールを Seeed Studio XIAO ESP32C3 と一緒に使用するには、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) を使用し、XIAO ESP32C3 をその上に接続します。

その後、ボード上の Grove コネクタを使用して Grove モジュールを接続できます。以下はピン定義です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:900, height:'auto'}}/></div>

#### ピン定義

以下の図を参考にして、Grove Shield for Seeed Studio XIAO 上の Grove コネクタに Grove モジュールを接続する際に適切な内部ピン番号を使用してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pin_map.png"style={{width:900, height:'auto'}}/></div>

例えば、D0 ポートに Grove モジュールを接続したい場合、ESPHome 上でピンを GPIO2 として定義する必要があります。

#### ESPHome との Grove 互換性リスト

現在、以下の Grove モジュールが ESPHome に対応しています。[こちら](https://esphome.io/components/sensor/index.html#see-also) を確認してください。

### 3. Grove 接続とデータ送信

次に、いくつかの Grove モジュールを選択し、それらを ESPHome および Home Assistant と接続する方法を説明します。

#### Grove - 温湿度センサー (DHT20)

この温湿度センサーは、事前に校正されたデジタル出力を提供します。独自の静電容量センサー要素が相対湿度を測定し、温度は負の温度係数 (NTC) サーミスタによって測定されます。優れた信頼性と長期安定性を備えています。[こちらをクリック](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) して購入できます。

##### セットアップ構成

- **ステップ 1.** Grove - DHT20 を Seeed Studio Expansion Base for XIAO の I2C コネクタのいずれかに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic1.png"style={{width:300, height:'auto'}}/></div>

- **ステップ 2.** 以前に作成した **xiao-esp32c3.yaml** ファイル内でファイルを変更し、OTA を使用して XIAO ESP32C3 にプッシュします。

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

# ロギングを有効化
logger:
 hardware_uart: UART0

api:
  password: "F4MQG/rBhNmqP8Nud+AJ+5CYu7LuIhIFTOcRwOm5Nw4="

ota:
  password: "999afa1f8a07e85959a9f89f8f6aebb2"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # WiFi 接続が失敗した場合のフォールバックホットスポット (キャプティブポータル) を有効化
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "YtpCwOqLoYlp"

captive_portal:

# 0x28 は DHT20 の I2C アドレス
i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_0x38

sensor:
  - platform: aht10
    temperature:
      name: "リビングルームの温度"
    humidity:
      name: "リビングルームの湿度"
    update_interval: 60s
```

[DHT20 コンポーネント](https://esphome.io/components/sensor/aht10) についてさらに学ぶことができます。ここでは、DHT20 が I2C プロトコルを使用して通信するため、I²C バスコンポーネントを追加しています。

##### ダッシュボードでの可視化

- **ステップ 1.** Home Assistant の概要ページで、3つのドットをクリックし、**Edit Dashboard** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** **+ ADD CARD** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** **By ENTITY** を選択し、**temperature** と入力して、**Temperature** の横にある **チェックボックス** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 4.** **ADD TO DASHBOARD** をクリックします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/38.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 5.** センサーのデータをゲージとして可視化することもできます。**BY CARD** の下で **Gauge** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37-1.png"style={{width:900, height:'auto'}}/></div>

これで、Home Assistant のダッシュボードは以下のように表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/39.png"style={{width:900, height:'auto'}}/></div>



#### Grove - 光センサー (LS06-S)

Grove - 光センサー v1.2 はアナログモジュールで、さまざまな電気信号を出力し、それを異なる範囲に変換することができます。このセンサーは高感度で信頼性の高いフォトダイオードである LS06-S フォトレジスタを統合しており、環境の光の強度を検出します。光の測定、光の検出、光制御スイッチに最適な Arduino 光センサーモジュールです。

[こちらをクリック](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)して購入できます。

##### 設定手順

- **ステップ 1.** Grove - 光センサーを XIAO 用 Seeed Studio 拡張ベースのアナログ/デジタルコネクタの1つに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic2.png"style={{width:300, height:'auto'}}/></div>

- **ステップ 2.** 以前作成した **xiao-esp32c3.yaml** ファイルを編集し、OTA を使用して XIAO ESP32C3 にプッシュします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/41-1.png"style={{width:900, height:'auto'}}/></div>

すべてが正常に進行すると、以下の結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/42.png"style={{width:900, height:'auto'}}/></div>

##### ダッシュボードでの可視化

- **ステップ 1.** Home Assistant の概要ページで、3つのドットをクリックし、**Edit Dashboard** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** **+ ADD CARD** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** **By ENTITY** を選択し、**Light Sensor** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/43.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 4.** **PICK DIFFERENT CARD** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/44.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 5.** **Gauge** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/45.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 6.** 最小値と最大値を設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/46.png"style={{width:900, height:'auto'}}/></div>

- **ステップ 7.** これで、ダッシュボードに光センサーの値が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/47.png"style={{width:900, height:'auto'}}/></div>

[BME680コンポーネント](https://esphome.io/components/sensor/bme680)についての詳細はこちらをご覧ください。このコンポーネントは、BME280、BME680、BMP085、BMP280、AHT10、AHT20、AHT21ベースのセンサーを使用することができます。ここでは、AHT20がI2Cプロトコルを使用して通信するため、I²Cバスコンポーネントを追加します。


## ✨ 貢献者プロジェクト

- このプロジェクトは Seeed Studio [貢献者プロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- [Zacharyの努力](https://github.com/Seeed-Studio/wiki-documents/issues/603)に感謝します。あなたの作業は[展示されます](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>