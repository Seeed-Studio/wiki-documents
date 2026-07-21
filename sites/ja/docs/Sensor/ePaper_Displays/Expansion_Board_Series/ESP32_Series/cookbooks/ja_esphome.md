---
description: XIAO ePaper Driver Board (EE0x) ファミリ向け ESPHome クックブック - お好みの ePaper スクリーンを接続した XIAO ESP32-S3 + EE0x ドライバボードを Home Assistant と連携させる方法を解説します。EE04 を動作例として使用しますが、EE02 / EE03 / EE05 も同じワークフローを共有します。
title: ESPHome クックブック
keywords:
  - ePaper ディスプレイ
  - ESPHome
  - Home Assistant
  - EE02
  - EE03
  - EE04
  - EE05
  - XIAO ESP32-S3
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /EE04_with_esphome_advanced
aliases:
  - /ee0x_with_esphome
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: Jason
createdAt: '2023-08-20'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/EE04_with_esphome_advanced/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESPHome クックブック: XIAO ePaper ドライバボード (EE0x)

:::tip まずメインの ESPHome ガイドを読んでください
このページは **EE0x ドライバボード向け ESPHome クックブック** です。対象は **EE02 / EE03 / EE04 / EE05** となります。4 つのボードはいずれも同じ XIAO ESP32-S3 をベースにし、同じ SPI 接続の ePaper インターフェースを共有しているため、ワークフローは同一です。ボード間で変わるのは YAML の `display:` ブロック内で選択するスクリーンのモデルだけです。

**動作例: 7.5 インチ 800×480 モノクロスクリーンを接続した EE04。** `display.model` 行のボード + スクリーンの組み合わせを自分のものに置き換えれば、残りの設定はそのまま適用できます。

共通のボイラープレート — 書き込み方法の選択、汎用 YAML スケルトン、Home Assistant への接続 — は **[Work with ESPHome](/ja/epaper_work_with_esphome)** にまとめてあります。Seeed の ePaper で ESPHome を使うのが初めての場合は、まずそちらに目を通してください。
:::

## ESPHome とは？

[ESPHome](https://esphome.io/) は、一般的な WiFi 対応マイコン向けのカスタムファームウェアを簡単に作成できる、オープンソースのファームウェアフレームワークです。ESPHome を使うと、次のことができます。

- シンプルな YAML 設定ファイルを使って、カスタムスマートホームデバイスを作成する
- Home Assistant とシームレスに統合し、統一されたスマートホーム体験を実現する
- 複数のインターフェース（Web、API、MQTT）を通じてデバイスを制御・監視する
- 強力なオンデバイスオートメーションで自宅を自動化する
- 物理的にアクセスすることなく、「Over The Air」（OTA）でワイヤレスにデバイスを更新する

## はじめに

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

Home Assistant Green は、最も簡単かつプライバシー重視で自宅を自動化できる方法です。セットアップは手軽で、すべてのスマートデバイスを 1 つのシステムから制御でき、データはデフォルトですべてローカルに保存されます。このボードは活発な Home Assistant エコシステムの恩恵を受けており、オープンソースによって毎月改善されていきます。

また、いくつかの Seeed Studio 製品向けに Home Assistant のインストール方法もまとめていますので、そちらも参照してください。

- **[ODYSSEY-X86 での Home Assistant 入門](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)**
- **[LinkStar H68K/reRouter CM4 での Home Assistant 入門](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)**

:::tip Home Assistant をインストールする
Seeed Studio 製品を使用していない場合でも、公式の Home Assistant ウェブサイトで、他の製品向けの Home Assistant のインストール方法を確認して学ぶことができます。

- **[Home Assistant のインストール](https://www.home-assistant.io/installation/)**
:::

### ステップ 1. ESPHome をインストールする

**Settings** -> **Add-ons** -> **ADD-ON STORE** に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

検索欄に **ESPHome** と入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

**INSTALL** と **START** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
アドオンストアで ESPHome が見つからない場合は、使用している Home Assistant のインストール形態がアドオンをサポートしているか（Home Assistant OS や supervised インストールなど）を確認してください。その他のインストール形態（Home Assistant Container など）の場合は、Docker を使って ESPHome Device Builder を独立して実行する必要があるかもしれません。詳しくは [公式 ESPHome ドキュメント](https://esphome.io/guides/getting_started_hassio) を参照してください。
:::

### ステップ 2. 新しいデバイスを追加する

ESPHome を開き、**NEW DEVICE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

XIAO ePaper Display Board(ESP32-S3) - EE04 に好きな名前を付け、チップタイプとして **ESP32-S3** を選択し、**SKIP** をクリックします。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome8.png" style={{width:400, height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

新しいデバイスを作成したら、**EDIT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome6.png" style={{width:900, height:'auto'}}/></div><br />

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->


### ステップ 3. ファームウェアをインストールする

これは基本的なサンプルで、ディスプレイに "Hello World!" を表示します。

**主な目的は、デバイスにファームウェアをインストールするさまざまな方法を紹介することです。**

以下のコードをコピーして、YAML ファイル内の `captive_portal` のコード行の後に貼り付けることで、このサンプルを利用できます。

:::note
- 次のルーチンでは、ファームウェアをダウンロードする前にフォントが必要になるため、この [リンク](https://wiki.seeedstudio.com/ja/EE04_with_esphome_advanced/#drawing-truetype-fonts) をクリックして設定を完了してください。
- `ssid:`,`password:` には、使用するネットワーク名とパスワードを追加する必要があります。
- **Quadruple Color 2.13** と **Quadruple Color 2.9** は外部ライブラリを使用するため、ESPHome で使用する `board` 名が異なります。
:::
***以下は 24 ピンコネクタのスクリーンタイプです:***

<Tabs>
<TabItem value="1.54 Inch" label="1.54 インチ モノクロカラー" default>

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

<TabItem value="2.13 Inch" label="2.13 インチ モノクロカラー">

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

<TabItem value="2.13 Inch Quadruple Color" label="2.13 インチ Quadruple Color">

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

<TabItem value="2.9 Inch" label="2.9 Inch モノクロカラー">

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

<TabItem value="2.9 Inch Quadruple Color" label="2.9 Inch 4色カラー">

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

<TabItem value="4.2 Inch" label="4.2 Inch モノクロカラー">

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

<TabItem value="5.83 Inch" label="5.83 Inc モノクロカラー">

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

<TabItem value="7.5 Inch" label="7.5 Inch モノクロカラー" default>

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

***以下は 50 ピンコネクタのスクリーンタイプです：***

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Inch spectra™ 6" default>

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


**INSTALL** をクリックしてコードをデバイスにインストールすると、次の画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphome_ee042.png" style={{width:1000, height:'auto'}}/></div><br />

<Tabs>
<TabItem value='Install through browser'>

:::tip
Home Assistant ホスト（Raspberry PI/Green/Yellow など）が手元から離れた場所にある場合は、この方法を推奨します。手元のコンピュータを使ってインストールできます。
:::

まず、コンパイル済みファームウェアをダウンロードするために **Manual download** をクリックする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

この Web サイトを開き、ここから ePaper パネルにファームウェアを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

ESPHome に戻り、ファームウェアをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

**Factory format** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

USB ケーブルを使用して**ePaper パネルをコンピュータに接続し**、**CONNECT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

usbmodemxxx（Windows では COMxxx）を選択し、connect をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

**INSTALL** をクリックし、先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:800, height:'auto'}}/></div>

しばらく待つと、ディスプレイに「Hello world!」と表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Home Assistant ホスト（Raspberry Pi / Green / Yellow など）が近くにある場合は、この方法の方が簡単なので推奨します。
:::

デバイスにコードをインストールする前に、Home Assistant を実行している Raspberry Pi や HA Green（Yellow）などに USB ケーブルで**このデバイスを接続する必要があります**。

画像に従ってオプションをクリックし、コードをデバイスにインストールします。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

しばらく待つと、次の画像のようなフィードバックが表示されます。これはコードが正常に動作していることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
これは最も簡単な方法ですが、最初にプログラムをインストールする際には、左側の方法を使って ePaper パネルにプログラムをアップロードしておく必要があります。その後は Wi-Fi 経由でアップロードできます。また、この方法が機能するためには、YAML 設定に有効な暗号化キーを含む適切に設定された `ota` と `api` セクションが含まれていることを確認してください。
:::

この方法では、ePaper パネルを何かに接続する必要はなく、オンラインになっていることだけを確認してください。

オプションをクリックすると、ファームウェアが自動的に ePaper パネルにインストールされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:800, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## ESPHome での描画の基本

### シンプルなグラフィックの描画

このサンプル YAML コードは、ESPHome プロジェクト用に SPI インターフェースと XIAO ePaper Display Board（ESP32-S3）- EE04 を設定します。`lambda` セクションには、画面上にシンプルな図形を描画するコマンドが含まれています：

- 2 つの長方形（位置 (10, 10)、サイズ 100x50 のものと、(150, 10)、サイズ 50x50 のもの）
- 半径 25 の円 1 つ（位置 (250, 35)）
- 2 つの塗りつぶし長方形（(10, 80) と (150, 80)）
- 半径 25 の塗りつぶし円 1 つ（位置 (250, 105)）

このサンプルは、以下のコードをコピーして YAML ファイル内の `captive_portal` コード行の後に貼り付けることで使用できます。

<Tabs>
<TabItem value="1.54 Inch Monochrome" label="1.54 インチ モノクロ カラー" default>

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

<TabItem value="2.13 Inch Quadruple Color" label="2.13 インチ 4 色カラー">

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

<TabItem value="2.13 Inch" label="2.13 インチ モノクロ カラー">

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

<TabItem value="2.9 Inch Quadruple Color" label="2.9 インチ 4 色カラー">

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

<TabItem value="2.9 Inch" label="2.9 インチ モノクロ カラー">

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

<TabItem value="4.2 Inch" label="4.2 インチ モノクロカラー">

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


<TabItem value="5.83 Inch" label="5.83 インチ モノクロカラー">

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

<TabItem value="7.5 Inch-24Pin" label="7.5 インチ モノクロカラー" default>

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

次の画像のようなフィードバックが表示されたら、コードは正常に実行されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphomeee044.png" style={{width:1000, height:'auto'}}/></div><br />

紙面の都合上、他のパターンの描画方法や原理については詳しく説明しません。必要に応じて、読者の方は[ESPHome のこの部分の詳細なサンプル](https://esphome.io/components/display/)を参照することをおすすめします。


### TrueType フォントの描画

この例では、TrueType フォントを使用して XIAO ePaper Display Board(ESP32-S3) - EE04 にカスタムアイコンを表示する方法を説明します。Material Design Icons は、ePaper ディスプレイに最適な、拡大縮小可能な豊富なシンボルを提供します。

#### 必要なツールのインストール

ステップ 1. まず、ファイルを管理するために **Studio Code Server** アドオンをインストールする必要があります。Home Assistant の Add-ons ストアに移動し、**Studio Code Server** を検索してクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphome00444.png" style={{width:1000, height:'auto'}}/></div>

ステップ 2. **INSTALL** をクリックしてインストールが完了するまで待ちます。インストールが完了したら、**START** をクリックしてエディタを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### アイコンフォントの設定

ステップ 3. ESPHome の設定ディレクトリ内に **fonts** という新しいフォルダを作成します。このフォルダには、アイコン表示に必要な TrueType フォントファイルを保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphme_ee041.png" style={{width:800, height:'auto'}}/></div>

ステップ 4. 下のボタンをクリックして Material Design Icons のフォントファイルをダウンロードし、内容を展開します。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Material Design Icons フォントをダウンロード</button></p>
</a>
</div>

ステップ 5. ダウンロードしたフォントファイル（`materialdesignicons-webfont.ttf`）を、先ほど作成した fonts フォルダにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### アイコン用に ESPHome を設定する

ステップ 6. 次のコードを、ESPHome の設定ファイル内の `captive_portal` セクションの後に追加します。このコードでは、アイコン用の 2 つのフォントサイズを定義し、ディスプレイに天気アイコンを表示するように設定します。

<Tabs>
<TabItem value="1.54 Inch" label="1.54 インチ モノクロカラー" default>

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

<TabItem value="2.13 Inch Quadruple Color" label="2.13 Inch 4色">

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


<TabItem value="2.13 Inch" label="2.13 Inch モノクロ">

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

<TabItem value="2.9 Inch Quadruple Color" label="2.9 Inch 4色">

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

<TabItem value="2.9 Inch" label="2.9 Inch モノクロ">

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

<TabItem value="4.2 Inch" label="4.2 Inch モノクロ">

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


<TabItem value="5.83 Inch" label="5.83 Inch モノクロ">

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

<TabItem value="24 Pin" label="7.5 Inch モノクロカラー" default>

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
<TabItem value="7.3 Inch" label="7.3 Inch spectra™ 6" default>

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

1. `glyphs` セクションは、フォントファイルからどのアイコンを読み込むかを定義します。必要なアイコンだけを読み込むことで、デバイスのメモリを節約できます。

2. 書き込みが完了してから最終的な表示が出るまで、プログラムには 2～3 分かかる場合があります。

:::

ステップ 7. 設定を保存し、XIAO ePaper Display Board(ESP32-S3) - EE04 にアップロードします。次の画像のようなフィードバックが表示されたら、コードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphomeee045.png" style={{width:1000, height:'auto'}}/></div><br />

#### 異なるアイコンでカスタマイズする

Material Design Icons ライブラリには、プロジェクトで使用できる何千ものアイコンが含まれています。ここでは、さまざまなアイコンを見つけて使用する方法を説明します。

ステップ 1. 下のボタンをクリックして Material Design Icons の Web サイトにアクセスします。

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Material Design Icons を閲覧</button></p>
</a>
</div>

ステップ 2. プロジェクトで使用したいアイコンを検索します。カテゴリ別に閲覧するか、検索機能を使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

ステップ 3. 気に入ったアイコンを見つけたら、それをクリックして詳細を表示します。`F0595` のような形式の Unicode 値を探します。

ステップ 4. 次のようにして、その Unicode 値を ESPHome の設定に追加します：

- フォント設定の `glyphs` リストに追加する
- 新しいアイコンを使用するようにディスプレイコードを更新する

例えば、Unicode `F0123` の新しいアイコンを使用するには：

```yaml
glyphs:
  - "\U000F0595" # weather-cloudy icon
  - "\U000F0592" # weather-hail icon
  - "\U000F0123" # your new icon
```

そして display lambda 内で：

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

ステップ 5. 更新した設定を保存し、デバイスにアップロードして新しいアイコンを確認します。

:::tip
天気ダッシュボードには、`F0590`（晴れ）、`F0591`（晴れ時々曇り）、`F0593`（雨）、`F059E`（風）などのアイコンを使用することを検討してください。
:::

先ほど設定した Home Assistant からの天気データとこれらのアイコンを組み合わせることで、現在の状況を適切なアイコンで表示する動的な天気ディスプレイを作成できます。

### カスタム画像の表示

この例では、XIAO ePaper Display Board(ESP32-S3) - EE04 にカスタム画像を表示する方法を説明します。この機能を使用して、ロゴやアイコン、ダッシュボード体験を向上させる任意のグラフィックを表示できます。

#### 準備

ステップ 1. Home Assistant に **Studio Code Server** アドオンがインストールされていることを確認します。まだインストールしていない場合は、前の例の手順に従ってください。

ステップ 2. ESPHome の設定ディレクトリに **image** という新しいフォルダを作成します。このフォルダには、表示したい画像ファイルを保存します。

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### 画像の追加

ステップ 3. 機能をテストするためにサンプル画像をダウンロードします。以下で提供されている WiFi アイコンを使用するか、自分の画像を使用することもできます。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>WiFi サンプル画像をダウンロード</button></p>
</a>
</div>

ステップ 4. Studio Code Server のファイルマネージャーを使用して、ダウンロードした画像を先ほど作成した **image** フォルダにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
ePaper ディスプレイで最良の結果を得るには、白黒の領域がはっきりした高コントラストの画像を使用してください。JPG と PNG の両方の形式がサポートされています。
:::

#### 画像表示用に ESPHome を設定する

ステップ 5. 次のコードを `captive_portal` セクションの後に ESPHome の設定ファイルへ追加します。このコードは画像リソースを定義し、それを表示するようにディスプレイを設定します。

<Tabs>
<TabItem value="1.54 Inch" label="1.54 Inch モノクロカラー" default>

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

<TabItem value="2.13 Inch" label="2.13 Inch モノクロカラー">

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

<TabItem value="2.13 Inch Quadruple Color" label="2.13 Inch 4色">

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

<TabItem value="2.9 Inch Quadruple Color" label="2.9 Inch 4色">

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

<TabItem value="2.9 Inch" label="2.9 Inch モノクロ">

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

<TabItem value="4.2 Inch" label="4.2 Inch モノクロ">

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


<TabItem value="5.83 Inch" label="5.83 Inch モノクロ">

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

<TabItem value="7.5 Inch" label="7.5 Inch モノクロ" default>

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
<TabItem value="7.3 Inch" label="7.3 Inch spectra™ 6" default>

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

ステップ 6. 設定を保存し、XIAO ePaper Display Board(ESP32-S3) - EE04 にアップロードします。更新が完了すると、ePaper ディスプレイに画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphomeee046.png" style={{width:1000, height:'auto'}}/></div><br />


#### 高度な画像テクニック

次のような追加テクニックを使って、画像表示を強化できます：

**画像の位置指定**

画面上の特定の座標に画像を配置するには：

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**画像とテキストの組み合わせ**

同じ画面上に画像とテキストの両方を表示できます：

```yaml
lambda: |-
  // Display image
  it.image(0, 0, id(myImage));

  // Add text below or beside the image
  it.printf(400, 400, id(myFont), TextAlign::CENTER, "WiFi Connected");
```

**複数画像の使用**

同じ画面に複数の画像を表示するには、設定内でそれぞれの画像を定義します：

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
ePaper ディスプレイにはリフレッシュレートに制限があることを忘れないでください。`update_interval: 300s` の設定は、ディスプレイが 5 分ごとに 1 回だけリフレッシュされることを意味します。必要に応じてこの値を調整できますが、リフレッシュが頻繁すぎると ePaper ディスプレイの寿命が短くなる可能性がある点に注意してください。
:::

画像とテキスト、そして前の例で扱ったその他の表示要素を組み合わせることで、XIAO ePaper Display Board(ESP32-S3) - EE04 上にリッチで情報量の多いダッシュボードを作成できます。

## 参考 & リソース

- [ESPHome](https://esphome.io/)
- [ESPHome の詳細なサンプル](https://esphome.io/components/display/)
## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
