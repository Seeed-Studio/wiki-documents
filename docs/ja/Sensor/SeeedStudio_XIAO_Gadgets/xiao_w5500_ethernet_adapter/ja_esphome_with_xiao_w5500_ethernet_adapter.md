---
description: Home Assistant 用 XIAO W5500 での ESPHome
title: Home Assistant 用 ESPHome on XIAO(ESP32-S3) W5500 Ethernet Adapter
keywords:
  - esphome
  - ethernet
  - w5500
image: https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.webp
sidebar_position: 2
slug: /ja/esphome_xiao_w5500_ethernet_adapter
last_update:
  date: 12/08/2025
  author: Zeller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113100042-xiao-w5500-ethernet-adapter.jpg" style={{width:800, height:'auto'}}/></div>

このチュートリアルでは、**XIAO W5500 Ethernet Adapter** を使用して **Bluetooth Proxy** を実装し、**Home Assistant** での統合と検証を行う方法を説明します。

このチュートリアルを進める前に、以下の前提条件が満たされていることを確認してください：

1. [Home Assistant](https://www.home-assistant.io/) を実行できるホストデバイス。
2. 安定したイーサネットまたは Wi-Fi 接続。
3. （推奨）PoE（Power over Ethernet）機能または外部 5V 電源。
4. [XIAO(ESP32-S3) W5500 Ethernet Adapter](https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html)

<div class="table-center">
 <table>
  <tr>
   <th>XIAO(ESP32-S3) W5500 Ethernet Adapter</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113100042-xiao-w5500-ethernet-adapter.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## [Home Assistant](https://www.home-assistant.io/) の紹介

Home Assistant は、単一の統合インターフェースからスマートホームデバイスを制御・監視できる強力なオープンソースホームオートメーションプラットフォームです。スマートホームの中央ハブとして機能し、ルーチンの自動化、センサーの監視、より知的な生活空間の構築を可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 詳細を見る 🖱️</font></span></strong></a>
</div>

### [ESPHome](https://esphome.io/) 統合

ESPHome は ESP8266 / ESP32 デバイス専用に設計されたオープンソースファームウェア作成ツールです。シンプルな YAML 設定ファイルを使用してカスタムファームウェアを作成し、デバイスにフラッシュできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 詳細を見る 🖱️</font></span></strong></a>
</div>

## ESPHome の開始

### Bluetooth Proxy 概要

Bluetooth Proxy は、Home Assistant の Bluetooth カバレッジをホストの内蔵範囲を超えて拡張する軽量な分散センシングブリッジとして機能します。空間全体に複数の **ESP32 ノード** を配置することで、家全体の Bluetooth センシングネットワークを構築し、温湿度センサー、ドア/窓センサー、照明モジュール、植物モニターなど、さまざまな BLE デバイスへの安定した接続を可能にします。

**主要機能：**

- **拡張カバレッジ：** 分散 ESP32 プロキシノードを利用してホストの Bluetooth 範囲への依存を排除し、家全体の Bluetooth 接続を実現します。
- **動作原理：**
  - **XIAO W5500 Ethernet Adapter** が Bluetooth スキャンを有効にします
  - 近くの BLE ブロードキャストパケット（温度計、スマートロック、ライトなど）を受信します
  - データは **イーサネットまたは Wi-Fi** 経由で Home Assistant に転送されます
  - Home Assistant はこれらのデバイスを **Bluetooth エンティティ** として認識します
  - ユーザーは Home Assistant インターフェースで温度、バッテリーレベル、信号強度、その他のメトリクスを直接確認できます

### ファームウェアのインストール

Home Assistant をまだセットアップしていない場合は、このリンクをクリックして公式の Home Assistant チュートリアルに従ってセットアップを完了してください。[Home Assistant Installation](https://www.home-assistant.io/installation/)

**ステップ 1.** ESPhome をインストール<br/>

  すでに ESPHome をインストールしている場合は、このステップをスキップできます。

- **Settings** -> **Add-ons** に移動

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

- **ADD-ON STORE** -> **Search ESPHome**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

- ESPhome を開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2.** 新しいデバイスを追加

    ESPHome に移動し、右下の **Add New Device** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device1.png" style={{width:800, height:'auto'}}/></div>

    機器に名前を付け、対応するメインコントロールチップを選択します。XIAO W5500 は **XIAO ESP32-S3** をベースに設計されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device2.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device3.png" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

**ステップ 3.** ファームウェアをインストール

<details>
<summary>yaml ファイルをコピーするにはここをクリック</summary>

```yaml
esphome:
  name: seeed-esp32-s3
  friendly_name: Bluetooth Proxy
  min_version: 2025.8.0
  name_add_mac_suffix: true

esp32:
  variant: esp32s3
  framework:
    type: esp-idf

ethernet:
  type: W5500
  cs_pin: GPIO2
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

api:
logger:

ota:
  - platform: esphome
    id: ota_esphome

esp32_ble_tracker:
  scan_parameters:
    interval: 1100ms
    window: 1100ms
    active: true

bluetooth_proxy:
  active: true

button:
  - platform: safe_mode
    id: button_safe_mode
    name: Safe Mode Boot

  - platform: factory_reset
    id: factory_reset_btn
    name: Factory reset
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device4.png" style={{width:800, height:'auto'}}/></div>

    **INSTALL** をクリックしてコードをデバイスにインストールすると、以下の画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device5.png" style={{width:800, height:'auto'}}/></div>

<Tabs>
<TabItem value='ブラウザ経由でインストール'>

:::tip
Home Assistant ホスト（Raspberry PI/Green/Yellow など）が遠くにある場合は、この方法をお勧めします。手元にあるコンピューターでインストールできます。
:::

まず、**Manual download** をクリックしてコンパイル済みファームウェアをダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

このウェブサイトを開き、XIAO(ESP32-S3) W5500 Ethernet Adapter にファームウェアをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device5.png" style={{width:800, height:'auto'}}/></div>

ESPHome に戻ってファームウェアをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Factory format を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

USB ケーブルを使用して**デバイスをコンピューターに接続**し、**CONNECT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

usbmodemxxx（Windows では COMxxx）を選択し、connect をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

**INSTALL** をクリックし、先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value='ホスト経由でインストール'>

:::tip
Home Assistant ホスト（Raspberry PI/Green/Yellow など）が近くにある場合は、より簡単なこの方法をお勧めします。
:::

デバイスにコードをインストールする前に、USB ケーブルを使用して**このデバイスを Home Assistant を実行している Raspberry Pi または HA Green（Yellow）などに接続**する必要があります。

画像に従ってオプションをクリックし、デバイスにコードをインストールします。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'120%', height:'auto'}}/></div>
</div>

しばらく待つと、以下の画像のようなフィードバックが表示されます。これはコードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value='Wi-Fi経由でインストール'>

:::tip
これは最も簡単な方法ですが、初回プログラムインストール時には、まず左側の方法を使用してePaper Panelにプログラムをアップロードする必要があります。その後、wifi経由でアップロードできます。また、この方法が機能するためには、YAMLの設定に適切に設定された`ota`と`api`セクションが有効な暗号化キーと共に含まれていることを確認してください。
:::

この方法では、ePaper panelを何にも接続する必要がなく、オンラインであることを確認するだけです。

オプションをクリックすると、ファームウェアが自動的にePaper panelにインストールされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

しばらく待つと、次の画像のようなフィードバックが表示されます。失敗した場合は、信号が弱い可能性があります。デバイスをルーターに近づけてください。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device7.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

**ステップ4.** スキャン結果の確認

- **Settings** → **Devices & services** → Bluetoothに移動し、**Bluetooth Proxy**デバイスを選択します。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_1.png" style={{width:800, height:'auto'}}/></div>
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_2.png" style={{width:800, height:'auto'}}/></div>
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_3.png" style={{width:800, height:'auto'}}/></div>

- **Advertisement Monitor**を選択して、スキャンされたBluetoothデバイス情報を表示します。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_4.png" style={{width:800, height:'auto'}}/></div>

  - **Address**: Bluetoothデバイスのブロードキャストアドレス（MAC形式）。これは実際の物理MACアドレスではなく、BLEプライバシーメカニズムによって生成されるランダム化されたプライベートアドレスで、定期的に変更されることに注意してください。
  - **Name**: Bluetoothデバイスのアドバタイズされた名前。デバイスがその名前をブロードキャストする場合、このフィールドがデバイスの識別に役立ちます。
  - **Device**: Home Assistantで認識されたBluetoothエンティティ。デバイスがまだペアリングまたは識別されていない場合、このフィールドは空のままです。
  - **Source**: スキャンソース、つまり特定のBluetooth Proxyノード（例：**Bluetooth Proxy 8fed20**）を示します。これは複数のプロキシノードからのデータを区別するのに役立ちます。
  - **RRSI**: 受信信号強度インジケータ（dBm単位）。値が0に近いほど、信号が強くなります。

- または、**Visualization**を選択してビューにアクセスします。

    図は、Home AssistantのBluetooth Advertisement Visualizationを示しており、Bluetoothプロキシネットワークのトポロジーを説明しています。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_5.jpg" style={{width:800, height:'auto'}}/></div>

:::tip
多くのBLEデバイスはセキュリティのためにプライバシーアドレスを使用しており、ブロードキャストされるアドレスがランダム化され、定期的に更新されることを意味します。その結果、同じ物理デバイスがHome Assistantのアドバタイズメントリストに異なるアドレスで表示される場合があります。
デバイスを確実に識別するには、アドバタイズされた名前やサービスUUID、信号強度パターンなどの他の特性を使用してください。
:::

## アプリケーション

**XIAO(ESP32-S3) W5500 Ethernet Adapter**に実装されたBluetoothプロキシを活用することで、Bluetoothカバレッジを大幅に拡張してBluetoothデバイスを接続できます。具体的には、これは異なるBluetoothプロトコルに基づいて実現できます。以下では、Home Assistant（HA）の既存の統合を例に、スマートホームアプリケーションシナリオに合わせた実装方法を示します。

### [BTHome](https://bthome.io/)

BTHomeは、デバイスがセンサーデータとボタン押下をブロードキャストするためのエネルギー効率的で柔軟なBLE形式です。<br/>
DHT11温湿度センサーからデータを読み取る例として、Home Assistant（HA）に対応する統合を追加し、Bluetoothプロキシ経由でデータを読み取り、安定した

XIAO(ESP32-S3) W5500 Ethernet Adapterに加えて、XIAO ESP32-C3とDHT11温湿度センサーも準備する必要があります。

1. Arduinoコードの追加

:::tip
作成したディレクトリにBTHomeファイルとDHTファイルも追加する必要があります。具体的なファイルは次の場所でアクセスできます：[DHT&BTHome.zip](https://files.seeedstudio.com/wiki/xiao_w5500_poe/BTHome_Temp_or_Hei_sensor.zip)
:::

```cpp
#include "BTHome.h"
#include "DHT.h"

#define DHTTYPE DHT11   // DHT 11
#define DHTPIN D0     // what pin we're connected to（DHT10 and DHT20 don't need define it）
DHT dht(DHTPIN, DHTTYPE);   //   DHT11 DHT21 DHT22

#define DEVICE_NAME "DIY-sensor"
#define ENABLE_ENCRYPT

String BIND_KEY = "231d39c1d7cc1ab1aee224cd096db912"; // Change this key with a string containing 32 of: a-f and 0-9 characters (hex) this will be asked in HA
BTHome bthome;

void setup() {
  Serial.begin(115200);
#ifdef ENABLE_ENCRYPT
  bthome.begin(DEVICE_NAME, true, BIND_KEY, false);
#else
  bthome.begin(DEVICE_NAME, false, "", false);
#endif
  Wire.begin();
  dht.begin();
}

void loop() {
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) 
  {
    Serial.print("Humidity: ");
    Serial.print(temp_hum_val[0]);
    Serial.print(" %\t");
    Serial.print("Temperature: ");
    Serial.print(temp_hum_val[1]);
    Serial.println(" *C");
  } 
  else 
  {
    Serial.println("Failed to get temprature and humidity value.");
  }

  bthome.resetMeasurement();

  bthome.addMeasurement(ID_TEMPERATURE_PRECISE, temp_hum_val[1]);//3
  bthome.addMeasurement(ID_HUMIDITY_PRECISE, temp_hum_val[0]);//3

  bthome.sendPacket();
  bthome.stop();
  delay(500);
}
```

2. 統合の追加

- Home Assistantを開き、Settingsに移動します。BTHomeデバイスがDevices & Servicesの下で発見されます。Addをクリックし、キー（コードから32文字のBIND_KEYを貼り付け）を入力し、Submitを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_1.png" style={{width:800, height:'auto'}}/></div>

- 送信後、送信された温度と湿度データ、およびBluetooth MACアドレスを表示できるページにリダイレクトされます。**Add to dashboard**を選択することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_2.png" style={{width:800, height:'auto'}}/></div>

- MACアドレスをクリックすると、デバイスがXIAO(ESP32-S3) W5500 Ethernet Adapterに実装されたBluetoothプロキシによって発見されたことが明らかになります。これにより、Bluetoothプロキシが意図したとおりに機能していることが確認されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_3.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_4.png" style={{width:800, height:'auto'}}/></div>

:::tip
BTHomeプロトコルはHome Assistantへの一方向データ送信のみをサポートし、送信される各データは一意のIDに対応します。より多くのデバイスを追加したい場合は、[BThome Format](https://bthome.io/format/)を参照してください。
:::

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
