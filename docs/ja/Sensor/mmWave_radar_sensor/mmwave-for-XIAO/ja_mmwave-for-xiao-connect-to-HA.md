---
description: mmWaveセンサーをHAに接続する方法の紹介。
title: mmWave for XIAO を Bluetooth または Wifi 経由で Home Assistant に接続
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/mmwave_for_xiao_to_ha_bt
last_update:
  date: 09/14/2024
  author: Allen, Djair
---

# mmWave for XIAO を Bluetooth 経由で Home Assistant に接続

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

## はじめに

24GHz mmWave Sensor for XIAO - Human Static Presence は、Seeed Studio XIAO シリーズ用の拡張ボードです。これは、FMCW 原理に基づいたアンテナ一体型の高感度 mmWave センサーです。センサー信号処理と正確な人体検知アルゴリズムを組み合わせることで、動いている状態と静止している状態の人体を識別できます。

この章では、主に 24GHz mmWave Sensor for XIAO が Bluetooth 経由で HA に接続する方法を紹介します。24GHz mmWave Sensor for XIAO の詳細な機能については、[こちら](https://wiki.seeedstudio.com/ja/mmwave_for_xiao/)を参照してください。

:::caution
この Wiki のすべての内容は 24GHz mmWave for XIAO にのみ適用され、他のミリ波センサーには使用できない場合があります。
:::

## はじめに

### ハードウェアの準備

この記事では、美観と配線の簡単さのために、mmWave for XIAO を XIAO ESP32C3 と組み合わせて使用し、Home Assistant に接続します。このチュートリアルに正確に従いたい場合は、以下のモジュールを準備する必要があります。

<table align="center">
	<tr>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>24GHz mmWave for XIAO</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:150, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

このセンサーはXIAO互換性を考慮して設計されているため、一般的にこのセンサーを使用したい場合は、XIAOを準備し、センサー用のメスヘッダーピンを取り付ける必要があります。XIAOに接続する際は、センサーの取り付け方向に特に注意してください。逆向きに差し込まないでください。そうしないとセンサーやXIAOを焼損する可能性があります。

:::caution
正しい方向は、センサーのアンテナが外側を向くようにすることです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

接続方向が正しいことを確認した後、USB-Cタイプケーブルをコンピューターまたは3.3V電源に接続すると、センサーが動作を開始します。

:::tip
現在XIAOが手元にない場合は、TTLをmmwave for XIAOの3.3VピンとGNDピンに接続して個別に電源を供給することもでき、このチュートリアルの内容を使用することができます。このチュートリアルでは、RXピンとTXピンを使用する必要はありません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/10.jpg" style={{width:300, height:'auto'}}/></div>
:::


### ソフトウェアの準備

まだHomeAssistantをインストールしていない場合は、[こちら](https://www.home-assistant.io/installation/)をクリックしてHomeAssistantの公式チュートリアルを参照してください。

## 手順

### ステップ1. デバイスの発見

Home Assistantで、左下の**setting**をクリックし、中央の**Devices&Services**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/1.png" style={{width:1000, height:'auto'}}/></div>

Discoveredゾーンにセンサーアイコンが表示されるので、**configure**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/2.png" style={{width:1000, height:'auto'}}/></div>

ポップアップウィンドウが表示されるので、**submit**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/3.png" style={{width:1000, height:'auto'}}/></div>

設定成功のポップアップが表示されるので、**finish**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/4.png" style={{width:1000, height:'auto'}}/></div>

### ステップ2. デバイスの設定

configuredゾーンで、**ld2410_ble**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/5.png" style={{width:1000, height:'auto'}}/></div>

センサー設定ページに入ったら、**1 device**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/6.png" style={{width:1000, height:'auto'}}/></div>

センサーの戻り値をダッシュボードに追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/7.png" style={{width:1000, height:'auto'}}/></div>

ポップアップウィンドウで**ADD TO DASHBOARD**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/8.png" style={{width:1000, height:'auto'}}/></div>

最後に、左上の**overview**をクリックすると、mmwave-for-xiaoセンサーデータがダッシュボードに正常に表示されます。これでmmwave for xiaoセンサーがHome Assistantに正常に接続されました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

次に、自動化を創造的に活用できます！

# ESPHomeを使用してWifi経由でmmWave for XIAOをHome Assistantに接続
以下のyamlファイルは、ESPHomeファームウェアを使用して、レーダーモジュール付きSeeed XIAO ESP32S3 SenseをHome Assistantに接続します：

```
# Configuration for ESPHome
esphome:
  # Name of the ESP32-S3 device
  name: "seeed-xiao-esp32s3-cam"
  
  # PlatformIO build options
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# Configuration for ESP32 board
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API - use your api and password
api:
  encryption:
    key: ""

ota:
  - platform: esphome
    password: ""

# Wi-Fi configuration - fill with your data
wifi:
  ssid: ""
  password: ""

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: ""

# Captive portal configuration
captive_portal:

# Configuration for the ESP32 Camera
esp32_camera:
  id: espcam
  name: Xiao Cam
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

# Configuration for the 24GHz mmwave XIAO Radar
ld2410:
  id: ld2410_radar
  
uart:
  tx_pin: GPIO4
  rx_pin: GPIO3
  baud_rate: 256000
  parity: NONE
  stop_bits: 1

number:
  - platform: ld2410
    timeout:
      name: Radar Timeout
    max_move_distance_gate:
      name: Radar Max Move Distance
    max_still_distance_gate:
      name: Radar Max Still Distance
    g0:
      move_threshold:
        name: g0 move threshold
      still_threshold:
        name: g0 still threshold
    g1:
      move_threshold:
        name: g1 move threshold
      still_threshold:
        name: g1 still threshold
    g2:
      move_threshold:
        name: g2 move threshold
      still_threshold:
        name: g2 still threshold
    g3:
      move_threshold:
        name: g3 move threshold
      still_threshold:
        name: g3 still threshold
    g4:
      move_threshold:
        name: g4 move threshold
      still_threshold:
        name: g4 still threshold
    g5:
      move_threshold:
        name: g5 move threshold
      still_threshold:
        name: g5 still threshold
    g6:
      move_threshold:
        name: g6 move threshold
      still_threshold:
        name: g6 still threshold
    g7:
      move_threshold:
        name: g7 move threshold
      still_threshold:
        name: g7 still threshold
    g8:
      move_threshold:
        name: g8 move threshold
      still_threshold:
        name: g8 still threshold

binary_sensor:
  - platform: ld2410
    has_target:
      name: Radar Target
      id: radar_has_target
    has_moving_target:
      name: Radar Moving Target
    has_still_target:
      name: Radar Still Target

sensor:
  - platform: ld2410
    moving_distance:
      name: Radar Moving Distance
      id: moving_distance
    still_distance:
      name: Radar Still Distance
      id: still_distance
    moving_energy:
      name: Radar Move Energy
    still_energy:
      name: Radar Still Energy
    detection_distance:
      name: Radar Detection Distance
      id: radar_detection_distance
    g0:
      move_energy:
        name: g0 move energy
      still_energy:
        name: g0 still energy
    g1:
      move_energy:
        name: g1 move energy
      still_energy:
        name: g1 still energy
    g2:
      move_energy:
        name: g2 move energy
      still_energy:
        name: g2 still energy
    g3:
      move_energy:
        name: g3 move energy
      still_energy:
        name: g3 still energy
    g4:
      move_energy:
        name: g4 move energy
      still_energy:
        name: g4 still energy
    g5:
      move_energy:
        name: g5 move energy
      still_energy:
        name: g5 still energy
    g6:
      move_energy:
        name: g6 move energy
      still_energy:
        name: g6 still energy
    g7:
      move_energy:
        name: g7 move energy
      still_energy:
        name: g7 still energy
    g8:
      move_energy:
        name: g8 move energy
      still_energy:
        name: g8 still energy
```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
