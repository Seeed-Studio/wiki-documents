---
description: この記事では、XIAO ePaper Display Board EE04のハードウェア機能をESPHomeで活用し、Home Assistantと統合する方法について説明します。
title: XIAO ePaper Display Board(ESP32-S3) with ESPHome
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /ja/EE04_with_esphome_advanced
sidebar_position: 2
last_update:
  date: 10/07/2025
  author: Jason
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# XIAO ePaper Display Board(ESP32-S3) - EE04 ePaper Display Work with ESPHome

## ESPHomeとは？

[ESPHome](https://esphome.io/)は、人気のあるWiFi対応マイクロコントローラー用のカスタムファームウェア作成プロセスを簡素化するオープンソースファームウェアフレームワークです。ESPHomeを使用すると、以下のことができます：

- シンプルなYAML設定ファイルを使用してカスタムスマートホームデバイスを作成
- Home Assistantとシームレスに統合して統一されたスマートホーム体験を実現
- 複数のインターフェース（Web、API、MQTT）を通じてデバイスを制御・監視
- 強力なオンデバイス自動化でホームを自動化
- 物理的なアクセスなしに「Over The Air」（OTA）アップデートでデバイスをワイヤレス更新

## 入門ガイド

### ハードウェア概要

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:320, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Greenは、ホームを自動化する最も簡単でプライバシーに配慮した方法です。簡単なセットアップを提供し、すべてのスマートデバイスを1つのシステムで制御でき、すべてのデータはデフォルトでローカルに保存されます。このボードは活発なHome Assistantエコシステムの恩恵を受け、オープンソースによって毎月改善されています。

また、Seeed Studioの一部製品にHome Assistantをインストールする方法についても記載していますので、参考にしてください。

- **[ODYSSEY-X86でHome Assistantを始める](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)**
- **[LinkStar H68K/reRouter CM4でHome Assistantを始める](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)**

:::tip Home Assistantのインストール
Seeed Studio製品を使用していない場合でも、Home Assistant公式ウェブサイトで他の製品にHome Assistantをインストールする方法を確認し、学習することができます。

- **[Home Assistantインストール](https://www.home-assistant.io/installation/)**
:::

### ステップ1. ESPHomeのインストール

**Settings** -> **Add-ons** -> **ADD-ON STORE**に移動します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

検索語として**ESPHome**を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

**INSTALL**と**START**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
アドオンストアでESPHomeが見つからない場合は、アドオンをサポートするHome Assistantインストール（Home Assistant OSまたは監視付きインストールなど）を使用していることを確認してください。他のインストールタイプ（Home Assistant Containerなど）の場合、DockerでESPHome Device Builderを独立して実行する必要がある場合があります。詳細については、[公式ESPHomeドキュメント](https://esphome.io/guides/getting_started_hassio)を参照してください。
:::

### ステップ2. 新しいデバイスの追加

ESPHomeに移動し、**NEW DEVICE**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

XIAO ePaper Display Board(ESP32-S3) - EE04に好きな名前を付け、チップタイプに**ESP32-S3**を選択し、**SKIP**をクリックします。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome8.png" style={{width:400, height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

新しいデバイスを作成した後、**EDIT**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome6.png" style={{width:900, height:'auto'}}/></div><br />

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->


### ステップ3. ファームウェアのインストール

これは基本的な例で、ディスプレイに「Hello World!」を表示します。

**主な目的は、デバイスにファームウェアをインストールするさまざまな方法を示すことです。**

以下のコードをコピーして、YAMLファイルの`captive_portal`コード行の後に貼り付けることで、この例を使用できます。

:::note
- 以下のルーチンはファームウェアをダウンロードする前にフォントが必要なため、この[リンク](https://wiki.seeedstudio.com/ja/EE04_with_esphome_advanced/#drawing-truetype-fonts)をクリックして設定を完了してください。
- `ssid:`、`password:`ここにはネットワーク名とパスワードを追加する必要があります。
- **Quadruple Color 2.13**と**Quadruple Color 2.9**は外部ライブラリを使用するため、ESPHomeで使用される`board`名が異なります。
:::
***以下は24ピンコネクタスクリーンタイプです：***

<Tabs>
<TabItem value="1.54 Inch" label="1.54インチ モノクロ" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv2 #More models you can refer to here: https://esphome.io/components/display/waveshare_epaper/
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

<TabItem value="2.13 Inch Quadruple Color" label="2.13インチ 4色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey0213f51
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.fill(YELLOW); 
      it.print(0, 0, id(font1), BLACK, "Hello World in BLACK!");
      it.print(0, 30, id(font1), RED, "Hello World in RED!");
      it.print(0, 60, id(font1), YELLOW, "Hello World in YELLOW!");
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```


</TabItem>

<TabItem value="2.9 Inch Quadruple Color" label="2.9インチ 4色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]


# external_components:
#   - source:
#       type: local
#       path: components_epaper
#     components : [waveshare_epaper]

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey029f51h
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.print(0, 0, id(font1), BLACK, "Hello World in BLACK!");
      it.print(0, 30, id(font1), RED, "Hello World in RED!");
      it.print(0, 60, id(font1), YELLOW, "Hello World in YELLOW!");
      ESP_LOGD("epaper", "reflash......");
```

</TabItem>

<TabItem value="4.2 Inch" label="4.2インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"


# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey042t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

<!-- <TabItem value="4.26 Inch Monochrome Color" label="4.26 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/seeed_esphome
    components: [ waveshare_epaper ]

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: 4.26in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.print(0, 150, id(font1), "Hello World!");
```

</TabItem> -->

<TabItem value="5.83 Inch" label="5.83インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey0583t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```
</TabItem>

<TabItem value="7.5 Inch" label="7.5インチ モノクロ" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

</Tabs>

<br></br>

***以下は50ピンコネクタ画面タイプです：***

<Tabs>
<TabItem value="7.3 Inch" label="7.3インチ spectra™ 6" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

external_components:
  - source:
      type: git
      url: https://github.com/esphome/esphome/
      ref: 2025.10.5
    components: [ epaper_spi, display ]

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: my_display
    model: 7.3in-Spectra-E6
    cs_pin: GPIO44
    dc_pin:
      number: GPIO10
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto BLUE     = Color(0, 0,   255,   0);
      const auto GREEN     = Color(0, 255,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.fill(WHITE); 
      it.print(0, 0, id(font1), BLACK, "Hello World in BLACK!");
      it.print(0, 30, id(font1), RED, "Hello World in RED!");
      it.print(0, 60, id(font1), YELLOW, "Hello World in YELLOW!");
      it.print(0, 90, id(font1), GREEN, "Hello World in GREEN!");
      it.print(0, 120, id(font1), BLUE, "Hello World in BLUE!");
```

</TabItem>
</Tabs>


**INSTALL** をクリックしてコードをデバイスにインストールすると、以下の画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphome_ee042.png" style={{width:1000, height:'auto'}}/></div><br />

<Tabs>
<TabItem value='ブラウザ経由でインストール'>

:::tip
Home Assistant ホスト（Raspberry PI/Green/Yellow など）が遠くにある場合は、この方法をお勧めします。手元にあるコンピュータでインストールできます。
:::

まず、**Manual download** をクリックしてコンパイル済みファームウェアをダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

ファームウェアを ePaper パネルにアップロードするこのウェブサイトを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

ESPHome に戻ってファームウェアをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

**Factory format** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

USB ケーブルを使用して **ePaper パネルをコンピュータに接続** し、**CONNECT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

usbmodemxxx（Windows では COMxxx）を選択し、connect をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

**INSTALL** をクリックし、先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:800, height:'auto'}}/></div>

しばらく待つと、ディスプレイに「Hello world!」が表示されます ～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='ホスト経由でインストール'>

:::tip
Home Assistant ホスト（Raspberry PI/Green/Yellow など）が近くにある場合は、より簡単なこの方法をお勧めします。
:::

デバイスにコードをインストールする前に、USB ケーブルを使用して**このデバイスを Home Assistant を実行している Raspberry Pi または HA Green（Yellow）などに接続**する必要があります。

画像に従ってオプションをクリックして、デバイスにコードをインストールします。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

しばらく待つと、次の画像のようなフィードバックが表示されます。これはコードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Wi-Fi経由でインストール'>

:::tip
これは最も簡単な方法ですが、初回プログラムインストール時には、まず左側の方法を使用して ePaper Panel にプログラムをアップロードする必要があります。その後、wifi 経由でアップロードできます。また、この方法が機能するには、YAML 設定に有効な暗号化キーを持つ適切に設定された `ota` および `api` セクションが含まれていることを確認してください。
:::

この方法では、ePaper パネルを何かに接続する必要はなく、オンラインであることを確認するだけです。

オプションをクリックすると、ファームウェアが ePaper パネルに自動的にインストールされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:800, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## ESPHome での描画の基本

### 簡単なグラフィックの描画

この YAML コード例は、ESPHome プロジェクト用の SPI インターフェースと XIAO ePaper Display Board（ESP32-S3）- EE04 を設定します。`lambda` セクションには、画面上に簡単な図形をレンダリングする描画コマンドが含まれています：

- 2つの長方形（1つは位置（10, 10）でサイズ 100x50、もう1つは（150, 10）でサイズ 50x50）
- 1つの円（250, 35）で半径 25
- 2つの塗りつぶし長方形（（10, 80）と（150, 80））
- 1つの塗りつぶし円（250, 105）で半径 25

以下のコードをコピーして、YAML ファイルの `captive_portal` コード行の後に貼り付けることで、この例を使用できます。

<Tabs>
<TabItem value="1.54 Inch Monochrome" label="1.54 インチ モノクロ" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>

<TabItem value="2.13 Inch Quadruple Color" label="2.13 インチ 4色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey0213f51
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50,YELLOW);
      it.rectangle(150, 10, 50, 50,YELLOW);
      it.circle(250, 35, 25,YELLOW);
      it.filled_rectangle(10, 80, 100, 50,YELLOW);
      it.filled_rectangle(150, 80, 50, 50,YELLOW);
      it.filled_circle(250, 105, 25,YELLOW);
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13 インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv2 #More models you can refer to here: https://esphome.io/components/display/waveshare_epaper/
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>

<TabItem value="2.9 Inch Quadruple Color" label="2.9 インチ 4色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey029f51h
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50,YELLOW);
      it.rectangle(150, 10, 50, 50,YELLOW);
      it.circle(250, 35, 25,YELLOW);
      it.filled_rectangle(10, 80, 100, 50,YELLOW);
      it.filled_rectangle(150, 80, 50, 50,YELLOW);
      it.filled_circle(250, 105, 25,YELLOW);
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2 インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey042t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>

<!-- <TabItem value="4.26 Inch Monochrome Color" label="4.26 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/seeed_esphome
    components: [ waveshare_epaper ]

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: 4.26in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem> -->


<TabItem value="5.83 Inch" label="5.83インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey0583t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```
</TabItem>

<TabItem value="7.5 Inch-24Pin" label="7.5インチ モノクロ" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3インチ spectra™ 6" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

external_components:
  - source:
      type: git
      url: https://github.com/esphome/esphome/
      ref: 2025.10.5
    components: [ epaper_spi, display ]

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: my_display
    model: 7.3in-Spectra-E6
    cs_pin: GPIO44
    dc_pin:
      number: GPIO10
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto BLUE     = Color(0, 0,   255,   0);
      const auto GREEN     = Color(0, 255,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50,BLACK);
      it.rectangle(150, 10, 50, 50,RED);
      it.circle(250, 35, 25,BLUE);
      it.filled_rectangle(10, 80, 100, 50,GREEN);
      it.filled_rectangle(150, 80, 50, 50,YELLOW);
      it.filled_circle(250, 105, 25,WHITE);
```

</TabItem>
</Tabs>

以下の画像のようなフィードバックが表示されたら、コードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphomeee044.png" style={{width:1000, height:'auto'}}/></div><br />

スペースの制約により、他のパターンの描画方法と原理については詳しく説明しませんが、必要に応じて読者は[ESPHomeのこの部分の詳細な例](https://esphome.io/components/display/)を読むことをお勧めします。


### TrueTypeフォントの描画

この例では、TrueTypeフォントを使用してXIAO ePaper Display Board(ESP32-S3) - EE04にカスタムアイコンを表示する方法を説明します。Material Design Iconsは、ePaperディスプレイに最適な幅広いスケーラブルなシンボルを提供します。

#### 必要なツールのインストール

ステップ1. まず、ファイルを管理するために**Studio Code Server**アドオンをインストールする必要があります。Home AssistantのAdd-onsストアに移動し、**Studio Code Server**を検索してクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphome00444.png" style={{width:1000, height:'auto'}}/></div>

ステップ2. **INSTALL**をクリックし、インストールが完了するまで待ちます。インストールが完了したら、**START**をクリックしてエディタを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### アイコンフォントの設定

ステップ3. ESPHome設定ディレクトリに**fonts**という新しいフォルダを作成します。このフォルダには、アイコンを表示するために必要なTrueTypeフォントファイルが保存されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphme_ee041.png" style={{width:800, height:'auto'}}/></div>

ステップ4. 下のボタンをクリックしてMaterial Design Iconsフォントファイルをダウンロードし、内容を展開します。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Material Design Iconsフォントをダウンロード</button></p>
</a>
</div>

ステップ5. ダウンロードしたフォントファイル（`materialdesignicons-webfont.ttf`）を、先ほど作成したfontsフォルダにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### アイコン用のESPHome設定

ステップ6. `captive_portal`セクションの後に、以下のコードをESPHome設定ファイルに追加します。このコードは、アイコン用の2つのフォントサイズを定義し、天気アイコンを表示するようにディスプレイを設定します。

<Tabs>
<TabItem value="1.54 Inch" label="1.54インチ モノクロ" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="2.13 Inch Quadruple Color" label="2.13インチ 4色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]


# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey0213f51
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>


<TabItem value="2.13 Inch" label="2.13インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv2 #More models you can refer to here: https://esphome.io/components/display/waveshare_epaper/
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="2.9 Inch Quadruple Color" label="2.9インチ 4色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]


# external_components:
#   - source:
#       type: local
#       path: components_epaper
#     components : [waveshare_epaper]


captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey029f51h
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey042t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<!-- <TabItem value="4.26 Inch Monochrome Color" label="4.26 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/seeed_esphome
    components: [ waveshare_epaper ]

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: 4.26in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem> -->


<TabItem value="5.83 Inch" label="5.83インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey0583t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```
</TabItem>

<TabItem value="24 Pin" label="7.5インチ モノクロ" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3 インチ spectra™ 6" default>

```yaml

esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

external_components:
  - source:
      type: git
      url: https://github.com/esphome/esphome/
      ref: 2025.10.5
    components: [ epaper_spi, display ]

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: my_display
    model: 7.3in-Spectra-E6
    cs_pin: GPIO44
    dc_pin:
      number: GPIO10
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");

```

</TabItem>
</Tabs>

:::note

1. `glyphs` セクションは、フォントファイルから読み込むアイコンを定義します。必要なアイコンのみを読み込むことで、デバイスのメモリを節約できます。

2. プログラムは書き込み完了から最終表示まで2〜3分かかる場合があります。

:::

ステップ 7. 設定を保存し、XIAO ePaper Display Board(ESP32-S3) - EE04 にアップロードします。以下の画像のようなフィードバックが表示されれば、コードが正常に実行されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphomeee045.png" style={{width:1000, height:'auto'}}/></div><br />

#### 異なるアイコンでのカスタマイズ

Material Design Icons ライブラリには、プロジェクトで使用できる数千のアイコンが含まれています。異なるアイコンを見つけて使用する方法は以下の通りです：

ステップ 1. 下のボタンをクリックして Material Design Icons ウェブサイトにアクセスします。

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Material Design Icons を閲覧</button></p>
</a>
</div>

ステップ 2. プロジェクトで使用したいアイコンを検索します。カテゴリ別に閲覧するか、検索機能を使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

ステップ 3. 気に入ったアイコンが見つかったら、それをクリックして詳細を表示します。`F0595` の形式の Unicode 値を探します。

ステップ 4. 以下の方法で Unicode 値を ESPHome 設定に追加します：

- フォント設定の `glyphs` リストに追加する
- 新しいアイコンを使用するように表示コードを更新する

例えば、Unicode `F0123` の新しいアイコンを使用する場合：

```yaml
glyphs:
  - "\U000F0595" # weather-cloudy icon
  - "\U000F0592" # weather-hail icon
  - "\U000F0123" # your new icon
```

そして表示ラムダ内で：

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

ステップ 5. 更新した設定を保存し、デバイスにアップロードして新しいアイコンを確認します。

:::tip
天気ダッシュボードには、`F0590`（晴れ）、`F0591`（部分的に曇り）、`F0593`（雨）、`F059E`（風）などのアイコンの使用を検討してください。
:::

これらのアイコンを先ほど設定した Home Assistant からの天気データと組み合わせることで、適切なアイコンを使用して現在の状況を表示する動的な天気表示を作成できます。

### カスタム画像の表示

この例では、XIAO ePaper Display Board(ESP32-S3) - EE04 にカスタム画像を表示する方法を説明します。この機能を使用して、ダッシュボード体験を向上させるロゴ、アイコン、またはグラフィックを表示できます。

#### 準備

ステップ 1. Home Assistant に **Studio Code Server** アドオンがインストールされていることを確認します。まだインストールしていない場合は、前の例の手順に従ってください。

ステップ 2. ESPHome 設定ディレクトリに **image** という新しいフォルダを作成します。このフォルダには、表示したい画像ファイルを保存します。

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### 画像の追加

ステップ 3. 機能をテストするためのサンプル画像をダウンロードします。下記の WiFi アイコンを使用するか、独自の画像を使用できます。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>サンプル WiFi 画像をダウンロード</button></p>
</a>
</div>

ステップ 4. Studio Code Server ファイルマネージャーを使用して、ダウンロードした画像を先ほど作成した **image** フォルダにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
ePaper ディスプレイで最良の結果を得るには、明確な黒と白の領域を持つ高コントラストの画像を使用してください。JPG と PNG の両方の形式がサポートされています。
:::

#### 画像表示用の ESPHome 設定

ステップ 5. `captive_portal` セクションの後に、以下のコードを ESPHome 設定ファイルに追加します。このコードは画像リソースを定義し、それを表示するようにディスプレイを設定します。

<Tabs>
<TabItem value="1.54 Inch" label="1.54 インチ モノクロ" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13 インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv2 #More models you can refer to here: https://esphome.io/components/display/waveshare_epaper/
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.13 Inch Quadruple Color" label="2.13 インチ 4色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]


image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey0213f51
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.9 Inch Quadruple Color" label="2.9インチ 4色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey029f51h
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey042t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<!-- <TabItem value="4.26 Inch Monochrome Color" label="4.26 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/seeed_esphome
    components: [ waveshare_epaper ]

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: 4.26in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem> -->


<TabItem value="5.83 Inch" label="5.83インチ モノクロ">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey0583t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```
</TabItem>

<TabItem value="7.5 Inch" label="7.5インチ モノクロ" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3インチ spectra™ 6" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

external_components:
  - source:
      type: git
      url: https://github.com/esphome/esphome/
      ref: 2025.10.5
    components: [ epaper_spi, display ]

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: my_display
    model: 7.3in-Spectra-E6
    cs_pin: GPIO44
    dc_pin:
      number: GPIO10
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```
</TabItem>
</Tabs>

ステップ 6. 設定を保存し、XIAO ePaper Display Board(ESP32-S3) - EE04にアップロードします。アップデートが完了すると、ePaperディスプレイに画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphomeee046.png" style={{width:1000, height:'auto'}}/></div><br />


#### 高度な画像技術

これらの追加技術で画像表示を強化できます：

**画像の位置指定**

画面上の特定の座標に画像を配置するには：

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**画像とテキストの組み合わせ**

同じ画面に画像とテキストの両方を表示できます：

```yaml
lambda: |-
  // Display image
  it.image(0, 0, id(myImage));

  // Add text below or beside the image
  it.printf(400, 400, id(myFont), TextAlign::CENTER, "WiFi Connected");
```

**複数画像の使用**

同じ画面に複数の画像を表示するには、設定で各画像を定義します：

```yaml
image:
  - file: /config/esphome/image/wifi.jpg
    id: wifiImage
    type: BINARY
    resize: 200x200

  - file: /config/esphome/image/temperature.png
    id: tempImage
    type: BINARY
    resize: 200x200

# In the display lambda:
lambda: |-
  it.image(50, 50, id(wifiImage));
  it.image(300, 50, id(tempImage));
```

:::caution
ePaperディスプレイのリフレッシュレートは制限されていることを覚えておいてください。`update_interval: 300s`設定は、ディスプレイが5分ごとにのみ更新されることを意味します。必要に応じてこの値を調整してください。ただし、頻繁な更新はePaperディスプレイの寿命を短くする可能性があることに注意してください。
:::

画像を前の例で説明したテキストやその他の表示要素と組み合わせることで、XIAO ePaper Display Board(ESP32-S3) - EE04で豊富で情報量の多いダッシュボードを作成できます。

## リファレンス & リソース

- [ESPHome](https://esphome.io/)
- [ESPHome詳細例](https://esphome.io/components/display/)
## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
