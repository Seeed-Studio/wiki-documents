---
title: Seeed Studio XIAO ESP32-C5 を HomeAssitant に接続
description: |
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /ja/xiao_esp32c5_homeassistant
last_update:
  date: 12/17/2025
  author: Zeller
  sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# XIAO ESP32-C5 を Home Assistant に接続

このwikiチュートリアルでは、Seeed Studio XIAO ESP32-C5をHome Assistantに接続する方法、およびXIAO ESP32-C5にGroveモジュールを接続した後にデバイスを制御したりデータを送信したりする方法を説明します。それでは始めましょう！

## [Home Assistant](https://www.home-assistant.io/) の紹介

Home Assistantは、単一の統合インターフェースからスマートホームデバイスを制御・監視できる強力なオープンソースホームオートメーションプラットフォームです。スマートホームの中央ハブとして機能し、ルーチンの自動化、センサーの監視、より知的な生活空間の構築を可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 詳細を見る 🖱️</font></span></strong></a>
</div>

## [ESPHome](https://esphome.io/) 統合

ESPHomeは、ESP8266 / ESP32デバイス専用に設計されたオープンソースファームウェア作成ツールです。シンプルなYAML設定ファイルを使用してカスタムファームウェアを作成し、デバイスにフラッシュできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:600, height:'auto'}}/></div>
<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 詳細を見る 🖱️</font></span></strong></a>
</div>

## 方法1：ESPHomeを使用

この例では、ESPHome経由でHome Assistantに接続します。

### ハードウェアの準備

表に記載されているアイテムを準備する必要があります。

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32-C5</th>
      <th>Seeed Studio Grove Base for XIAO</th>
      <th>Grove - Red LED</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 詳細を確認 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### ファームウェアのインストール

Home Assistantをまだセットアップしていない場合は、このリンクをクリックして公式のHome Assistantチュートリアルに従ってセットアップを完了してください。[Home Assistant Installation](https://www.home-assistant.io/installation/)

**ステップ1.** ESPhomeをインストール<br/>

すでにESPHomeをインストールしている場合は、このステップをスキップできます。

- **Settings** -> **Add-ons** に移動

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

- **ADD-ON STORE** -> **Search ESPHome**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

- ESPhomeを開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
インストールしたESPHomeのバージョンが**25.11.5以上**であることを確認してください。そうでないと、XIAO ESP32-C5をサポートしない可能性があります。
:::

**ステップ2.** 新しいデバイスを追加

ESPHomeに移動し、右下の**Add New Device**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device1.png" style={{width:800, height:'auto'}}/></div>
<br/>
新しいデバイスを追加し、**XIAO ESP32-C5**と名前を付けます。
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_2.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_3.png" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

**ステップ3.** ファームウェアをインストール

<details>
<summary>参考YAMLファイル設定</summary>

:::tip
APIキー、SSID、パスワードなど、デバイスに合わせてパラメータを変更する必要があります。さらに、XIAO ESP32-C5はデュアルバンドWiFi（2.4 GHz & 5 GHz）をサポートしているため、自宅の5 GHzルーターに接続できます。
:::

```yaml
esphome:
  name: xiao-esp32-c5
  friendly_name: XIAO ESP32-C5

esp32:
  board: esp32-c5-devkitc-1
  variant: esp32c5
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: 

ota:
  - platform: esphome
    password: 

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32-C5 Fallback Hotspot"
    password: 

captive_portal:
  # Example configuration entry
output:
  - platform: gpio
    pin: GPIO1
    id: led_gpio_output
    inverted: false

switch:
  - platform: output
    name: "LED Switch"
    output: led_gpio_output
    id: dev_board_led
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_4.png" style={{width:800, height:'auto'}}/></div>

**INSTALL**をクリックしてコードをデバイスにインストールすると、次の画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_5.png" style={{width:800, height:'auto'}}/></div>

<Tabs>
<TabItem value='ブラウザ経由でインストール'>

:::tip
Home Assistantホスト（Raspberry PI/Green/Yellowなど）が遠くにある場合は、この方法をお勧めします。手元にあるコンピュータでインストールできます。
:::

まず、**Manual download**をクリックしてコンパイル済みファームウェアをダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

このウェブサイトを開いて、XIAO ESP32-C5にファームウェアをアップロードします。<br/>
[ESPHome dashboard_install](https://web.esphome.io/?dashboard_install)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
ESPHomeに戻ってファームウェアをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>
<br/>
Factory formatを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

USBケーブルを使用して**デバイスをコンピュータに接続**し、**CONNECT**をクリックします。<br/>
[ESPHome dashboard_install](https://web.esphome.io/?dashboard_install)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>
<br/>
usbmodemxxx（WindowsではCOMxxx）を選択してconnectをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

**INSTALL**をクリックして、先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value='ホスト経由でインストール'>

:::tip
Home Assistantホスト（Raspberry PI/Green/Yellowなど）が近くにある場合は、より簡単なこの方法をお勧めします。
:::

デバイスにコードをインストールする前に、USBケーブルを使用して**このデバイスをHome Assistantが動作しているRaspberry PiやHA Green（Yellow）などに接続**する必要があります。

画像に従ってオプションをクリックし、デバイスにコードをインストールします。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'120%', height:'auto'}}/></div>
</div>

しばらく待つと、以下の画像のようなフィードバックが表示されます。これはコードが正常に動作していることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value='Wi-Fi経由でインストール'>

:::tip
これは最も簡単な方法ですが、初回プログラムをインストールする際は、まず左側の方法を使用してePaper Panelにプログラムをアップロードする必要があります。その後、wifi経由でアップロードできます。また、この方法が機能するためには、YAMLの設定に適切に設定された`ota`と`api`セクションが有効な暗号化キーと共に含まれていることを確認してください。
:::

この方法では、XIAO ESP32-C5を何にも接続する必要がなく、オンラインであることを確認するだけです。

オプションをクリックすると、ファームウェアが自動的にePaper panelにインストールされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

しばらく待つと、以下の画像のようなフィードバックが表示されます。失敗した場合は、信号が弱いことが原因の可能性があります。デバイスをルーターに近づけてください。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device7.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

**ステップ 4.** デバイスの追加

- **Settings** → **Devices & services**に移動します

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_1.png" style={{width:800, height:'auto'}}/></div>

- ESPHome Device -> Add。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_6.png" style={{width:800, height:'auto'}}/></div>

- シークレットキーの追加を選択した場合は、作成したYAMLファイルで確認できるキーを入力する必要があります。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_7.png" style={{width:800, height:'auto'}}/></div>

- 追加が成功すると、以下の画面が表示されます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_8.png" style={{width:800, height:'auto'}}/></div>

### ダッシュボードでの表示

**ステップ 1.**  Overview を開く -> 右上角の Edit をクリック

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_9.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2.** セクションを作成し、**LED Control**と名前を付ける -> カードを追加

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_10.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3.** Add by entity -> **XIAO ESP32-C5**を検索 -> Continue

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_11.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** ポップアップウィンドウで**Add to dashboard**を選択 -> 右上角の**Done**をクリックして追加を完了します。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_12.png" style={{width:800, height:'auto'}}/></div>

- 効果は以下の通りです：

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_13.png" style={{width:800, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_effect_1.gif" style={{width:800, height:'auto'}}/></div>

## 方法 2: [Seeed Home Assistant Discovery](https://github.com/limengdu/Seeed-Homeassistant-Discovery)

- **Seeed HA Discovery**は、[Seeed Studio](https://www.seeedstudio.com/)が提供する、ESP32/nRF52840デバイスをHome Assistantに簡単に接続するための完全なソリューションです。<br/>
- XIAOシリーズ開発ボード用のArduino IDEまたはPlatformIOでわずか数行のコードを書くだけで、WiFiまたはBLE経由でHome Assistantに接続できます。<br/>
- ここでは、温室の温湿度センサーを読み取る例を使用して、Seeed Home Assistant DiscoveryでXIAO ESP32-C5をHome Assistantに接続する方法を説明します。

### ハードウェアの準備

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32-C5</th>
      <th>Seeed Studio Grove Base for XIAO</th>
      <th>Grove - Temperature & Humidity Sensor (DHT11)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-temperature-humidity-sensor-dht11-preview.png" style={{width:400, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 詳細を確認 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### HACS インテグレーションのインストール

**Seeed Home Assistant Discovery**インテグレーションを追加する前に、まず**HACS**をインストールする必要があります。

インストール手順：

1. Settings -> Devices & services -> Add integration -> **HACS**を検索

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_1.png" style={{width:800, height:'auto'}}/></div>

2. すべてのオプションを選択 -> Submit

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_2.png" style={{width:800, height:'auto'}}/></div>

3. ハイパーリンクをクリックし、その中のアクティベーションコードをコピーします。

4. 先ほどのアクティベーションコードを入力します

5. HomeAssistantに戻る -> Developer tools -> Reboot system

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_3.png" style={{width:800, height:'auto'}}/></div>

6. 左のナビゲーションバーにHACSが表示されます

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_4.png" style={{width:800, height:'auto'}}/></div>

### インテグレーションのインストール

- HACS経由でのワンクリックインストール（推奨）

1. HACS -> Integrations を開く：

    <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_1.png" style={{width:800, height:'auto'}}/></div> -->

2. 右上角の**⋮**アイコンをクリック -> **Custom repositories**

      <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_2.png" style={{width:800, height:'auto'}}/></div> -->

3. `https://github.com/limengdu/Seeed-Homeassistant-Discovery`を入力し、カテゴリ**Integration**を選択

    <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_3.png" style={{width:800, height:'auto'}}/></div> -->

4. Addをクリックし、**Seeed HA Discovery**を検索してインストール

      <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_4.png" style={{width:800, height:'auto'}}/></div> -->

5. Home Assistantを再起動

### Arduinoライブラリのインストール

#### WiFi依存ライブラリのインストール

- Arduino IDE用

1. `arduino/SeeedHADiscovery`フォルダをダウンロード

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. `C:\Users\yourname\Documents\Arduino\libraries\` にコピーします

3. ArduinoJson (by Benoit Blanchon)

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_5.png" style={{width:800, height:'auto'}}/></div>

4. WebSockets (by Markus Sattler)

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_6.png" style={{width:800, height:'auto'}}/></div>

- PlatformIO の場合

```ini
lib_deps =
    bblanchon/ArduinoJson@^7.0.0
    links2004/WebSockets@^2.4.0
```

#### BLE 依存ライブラリのインストール

- Arduino IDE の場合

1. `arduino/SeeedHADiscoveryBLE` フォルダをダウンロードします

2. `C:\Users\yourname\Documents\Arduino\libraries\` にコピーします

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. NimBLE-Arduino

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_7.png" style={{width:800, height:'auto'}}/></div>

- PlatformIO の場合

```ini
lib_deps =
    h2zero/NimBLE-Arduino@^1.4.0
```

### Arduino プログラムの作成

実際のニーズに応じて対応するバージョンを選択してください。

<Tabs>
<TabItem value='WiFi バージョンコード'>

```cpp
#include <SeeedHADiscovery.h>

const char* WIFI_SSID = "Your WiFi Name";
const char* WIFI_PASSWORD = "Your WiFi Password";

SeeedHADiscovery ha;
SeeedHASensor* tempSensor;
SeeedHASensor* humiditySensor;

void setup() {
    Serial.begin(115200);
    ha.setDeviceInfo("Living Room Sensor", "ESP32-C5", "1.0.0");
    ha.enableDebug(true);

    if (!ha.begin(WIFI_SSID, WIFI_PASSWORD)) {
        Serial.println("WiFi connection failed!");
        while (1) delay(1000);
    }

    tempSensor = ha.addSensor("temperature", "Temperature", "temperature", "°C");
    tempSensor->setPrecision(1);

    humiditySensor = ha.addSensor("humidity", "Humidity", "humidity", "%");
    humiditySensor->setPrecision(0);
}

void loop() {
    ha.handle();

    static unsigned long lastUpdate = 0;
    if (millis() - lastUpdate > 5000) {
        lastUpdate = millis();
        tempSensor->setValue(25.5);
        humiditySensor->setValue(55);
    }
}
```

コードをアップロードした後、シリアルモニターを開きます。WiFi 接続が成功すると、対応する IP アドレスが印刷されます。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_8.png" style={{width:800, height:'auto'}}/></div>

:::tip
XIAO ESP-C5 はデュアルバンド WiFi（2.4 GHz & 5 GHz）をサポートしています。<br/>
手動でのネットワーク設定が面倒だと感じる場合は、私たちが開始したファームウェア書き込みウェブページも使用できます：[Web Firmware Flasher](https://limengdu.github.io/Seeed-Homeassistant-Discovery/flasher/)
:::

</TabItem>

<TabItem value='BLE バージョンコード'>

```cpp
#include <SeeedHADiscoveryBLE.h>

SeeedHADiscoveryBLE ble;
SeeedBLESensor* tempSensor;
SeeedBLESensor* humiditySensor;
SeeedBLESensor* batterySensor;

void setup() {
    Serial.begin(115200);
    ble.enableDebug(true);

    if (!ble.begin("XIAO Temperature Sensor")) {
        Serial.println("BLE initialization failed!");
        while (1) delay(1000);
    }

    // Use BTHome standard sensor types
    tempSensor = ble.addTemperature();
    humiditySensor = ble.addHumidity();
    batterySensor = ble.addBattery();
}

void loop() {
    // Set sensor values
    tempSensor->setValue(25.5f);      // Temperature 25.5°C
    humiditySensor->setValue(55.0f);  // Humidity 55%
    batterySensor->setValue(100.0f);    // Battery 100%

    // Send BLE broadcast
    ble.advertise();

    // Wait 10 seconds (BLE is suitable for low frequency updates)
    delay(10000);
}
```

コードをアップロードした後、シリアルモニターを開くと、XIAO ESP32-C5 の Bluetooth 情報が出力されます。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_9.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Home Assistant でのデバイス追加

<Tabs>
<TabItem value='WiFi デバイス'>

自動的に検出されます！または手動で追加：

1. **Settings** -> **Devices & Services** に移動します

2. **Add Integration** をクリックします

3. **Seeed HA Discovery** を検索します

4. ESP32 の IP アドレスを入力します

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_10.png" style={{width:800, height:'auto'}}/></div>

</TabItem>

<TabItem value='BLE デバイス'>

BTHome プロトコルを使用し、Home Assistant によって自動的に検出されます！

1. HA に Bluetooth アダプターまたは ESP32 Bluetooth プロキシがあることを確認してください

2. デバイスは Settings -> Devices & Services -> BTHome に自動的に表示されます

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_11.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## 効果のデモンストレーション

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_12.png" style={{width:800, height:'auto'}}/></div>
<br/>
おめでとうございます！これで、**XIAO ESP32-C5** を **Home Assistant** に接続する 2 つの方法をマスターしたはずです。あなたの素晴らしいプロジェクトを見ることを楽しみにしており、ぜひ私たちと共有してください！

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
