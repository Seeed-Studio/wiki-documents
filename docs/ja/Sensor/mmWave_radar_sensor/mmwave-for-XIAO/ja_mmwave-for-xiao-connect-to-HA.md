---
description: mmWaveセンサーをHome Assistantに接続する方法の紹介。
title: mmWave for XIAOをBluetoothまたはWiFi経由でHome Assistantに接続
keywords:
- mmwave
- レーダー
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/mmwave_for_xiao_to_ha_bt
last_update:
  date: 05/15/2025
  author: Allen, Djair
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# mmWave for XIAOをBluetooth経由でHome Assistantに接続

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

## はじめに

24GHz mmWave Sensor for XIAO - Human Static Presenceは、Seeed Studio XIAOシリーズ向けの拡張ボードです。このセンサーはアンテナ統合型で高感度のmmWaveセンサーであり、FMCW原理に基づいています。センサー信号処理と正確な人体検知アルゴリズムを組み合わせることで、動いている状態と静止している状態の人体を識別することができます。

この章では主に、24GHz mmWave Sensor for XIAOをBluetooth経由でHome Assistantに接続する方法を紹介します。24GHz mmWave Sensor for XIAOの詳細な機能については、[こちら](https://wiki.seeedstudio.com/ja/mmwave_for_xiao/)をご参照ください。

:::caution
このWikiの内容は24GHz mmWave for XIAOにのみ適用され、他のミリ波センサーには使用できません。
:::

## 始める前に

### ハードウェア準備

この記事では、mmWave for XIAOをXIAO ESP32C3と組み合わせて使用し、Home Assistantに接続します。これは美観と配線の容易さを考慮したものです。このチュートリアルを完全に再現したい場合は、以下のモジュールを準備する必要があります。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

このセンサーはXIAOとの互換性を考慮して設計されているため、通常、このセンサーを使用する場合はXIAOを準備し、センサー用のメスヘッダーピンを取り付ける必要があります。XIAOに接続する際は、センサーの取り付け方向に特に注意してください。逆向きに差し込むと、センサーやXIAOが焼損する可能性があります。

:::caution
正しい方向は、センサーのアンテナが外側を向くようにすることです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

接続方向が正しいことを確認した後、USB-Cタイプのケーブルをコンピュータまたは3.3V電源に接続すると、センサーが動作を開始します。

:::tip
現在XIAOを手元に持っていない場合は、mmWave for XIAOを単独で電源供給するオプションがあります。TTLを使用して3.3VピンとGNDピンに接続することで、このチュートリアルの内容を実行することができます。このチュートリアルではRXおよびTXピンを使用する必要はありません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/10.jpg" style={{width:300, height:'auto'}}/></div>
:::


### ソフトウェア準備

まだHomeAssistantをインストールしていない場合は、[こちら](https://www.home-assistant.io/installation/)をクリックして公式のHomeAssistantチュートリアルを参照してください。

## 手順

### ステップ 1. デバイスの検出

Home Assistantで、左下の**設定**をクリックし、中央の**デバイスとサービス**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/1.png" style={{width:1000, height:'auto'}}/></div>

検出ゾーンにセンサーアイコンが表示されます。**構成**をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/2.png" style={{width:1000, height:'auto'}}/></div>

ポップアップウィンドウが表示されます。**送信**をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/3.png" style={{width:1000, height:'auto'}}/></div>

成功した構成のポップアップが表示されます。**完了**をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/4.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. デバイスの設定

構成済みゾーンで、**ld2410_ble**をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/5.png" style={{width:1000, height:'auto'}}/></div>

センサー設定ページに入ったら、**1 デバイス**をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/6.png" style={{width:1000, height:'auto'}}/></div>

センサーの返り値をダッシュボードに追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/7.png" style={{width:1000, height:'auto'}}/></div>

ポップアップウィンドウで**ダッシュボードに追加**を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/8.png" style={{width:1000, height:'auto'}}/></div>

最後に、左上の**概要**をクリックすると、mmwave-for-xiaoセンサーのデータがダッシュボードに正常に表示されます。これで、mmwave for xiaoセンサーがHome Assistantに正常に接続されました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

次に、自動化を自由に創造してください！

# mmWave for XIAO をWiFi経由でESPHomeを使用してHome Assistantに接続する
以下のyamlファイルは、Seeed XIAO ESP32S3 SenseとRadarモジュールをESPHomeファームウェアを使用してHome Assistantに接続します：

```
# ESPHomeの設定
esphome:
  # ESP32-S3デバイスの名前
  name: "seeed-xiao-esp32s3-cam"
  
  # PlatformIOビルドオプション
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32ボードの設定
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# ロギングを有効化
logger:

# Home Assistant APIを有効化 - APIとパスワードを入力してください
api:
  encryption:
    key: ""

ota:
  - platform: esphome
    password: ""

# Wi-Fi設定 - 必要な情報を入力してください
wifi:
  ssid: ""
  password: ""

  # Wi-Fi接続が失敗した場合のフォールバックホットスポットを有効化
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: ""

# キャプティブポータルの設定
captive_portal:

# ESP32カメラの設定
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
  
# ESP32カメラWebサーバーの設定
esp32_camera_web_server:
  - port: 8080
    mode: stream
  - port: 8081
    mode: snapshot

# 24GHz mmwave XIAO Radarの設定
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

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>