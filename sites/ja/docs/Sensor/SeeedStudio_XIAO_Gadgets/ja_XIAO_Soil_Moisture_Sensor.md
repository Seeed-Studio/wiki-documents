---
description: XIAO 土壌水分センサーの使用開始
title: XIAO 土壌水分センサーの使用開始
keywords:
  - XIAO
  - Soil Moisture Sensor
  - ESP32-C6
  - Moisture
image: https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/1.webp
slug: /xiao_soil_moisture_sensor
last_update:
  date: 05/26/2025
  author: Robben
createdAt: '2025-05-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/xiao_soil_moisture_sensor/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/top.jpg" style={{width:550, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-Soil-Sensor-p-6452.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

XIAO 土壌水分センサーは、[XIAO ESP32-C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-Pre-Soldered-p-6328.html)を搭載したコンパクトで低消費電力の環境モニターです。単三電池1本で動作し、長時間の運用とリアルタイムの土壌状態更新を提供します。正確な土壌監視のための事前校正済み適応型土壌水分センシング機能を備えています。また、動的な監視間隔と瞬時読み取りにより、正確で応答性の高いデータを実現します。Home Assistant と完全に互換性があり、スマートガーデニングと精密農業に最適です。効率的で信頼性が高く、持続可能な植物ケアのために作られています。

## 特徴

**1.3段階土壌水分監視**  

- 🌿 **正常:** 土壌水分が最適で、水やりは不要です。  
- 🌤 **ほぼ乾燥:** 水分が減少中、まもなく水やりの準備をしてください。  
- 🌵 **乾燥:** 危険なレベルの低さ、すぐに水やりしてください。

デフォルトの閾値：

- **60%** → 緑から黄色への移行。
- **20%** → 黄色から赤への移行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_1.jpg" style={{width:800, height:'auto'}}/></div>

**2.Home Assistant とのプラグアンドプレイ**  
ESPHome がプリロードされており、Home Assistant ですぐに動作し、スマートホームダッシュボードから直接監視と自動化が可能です。

**3.適応型監視と瞬時読み取り**  

- 水分レベルに応じてチェック間隔を自動調整（8時間 → 1時間 → 15分）。  
- ボタンを1回押すといつでも瞬時に水分測定値を取得できます。

**4.簡単な校正（オプション）**  
ボタンを3回素早く押すことで、特定の土壌に対して再校正できます：乾燥読み取り + 湿潤読み取り → システムが自動調整。

- 3回短押し → 校正モードに入る：
  - 赤色LEDが点滅 → 10秒以内に、センサーを完全に乾燥した土壌に挿入してください。
  - 赤色LEDの点滅が止まるまで待ち、その後3秒待ちます。
  - 緑色LEDが点滅 → 10秒以内に、センサーを完全に湿った土壌に挿入してください。
  - 緑色LEDの点滅が止まるまで待ち、その後3秒待ちます。
  - 校正結果：
    - 2回の素早い緑色点滅 → 成功。
    - 2回の素早い赤色点滅 → 失敗（乾燥/湿潤読み取りが入れ替わった可能性があります）。

注意：校正中、センサーが迅速に挿入されない場合、初期読み取り値が不安定になる可能性があります。システムは複数のサンプルを取得し、フィルタリングを適用し、信頼性の高い校正のために読み取り値を平均化します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_4.jpg" style={{width:800, height:'auto'}}/></div>

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/hardware.jpg" style={{width:800, height:'auto'}}/></div>

## 使用開始

このセクションでは、XIAO 土壌水分センサーを初めて設定する方法をガイドします。

### 必要な材料

この記事のチュートリアル内容を始める前に、以下のハードウェアを準備する必要があります。

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO 土壌水分センサー</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/big.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:270, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
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

Home Assistant Green は、ホームオートメーションの最も簡単でプライバシーに焦点を当てた方法です。簡単なセットアップを提供し、すべてのスマートデバイスを1つのシステムで制御でき、すべてのデータはデフォルトでローカルに保存されます。このボードは繁栄する Home Assistant エコシステムの恩恵を受け、オープンソースによって毎月改善されます。

このチュートリアルでは Home Assistant Green を Home Assistant ホストとして使用することをお勧めしますが、Supervisor を備えた任意の Home Assistant ホストを使用することもできます。

:::tip Home Assistant のインストール
Seeed Studio 製品の一部について Home Assistant のインストール方法も書いていますので、参考にしてください。

- **[ODYSSEY-X86 での Home Assistant 使用開始](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)**
- **[reTerminal での Home Assistant 使用開始](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/)**
- **[LinkStar H68K/reRouter CM4 での Home Assistant 使用開始](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)**

Seeed Studio 製品を使用していない場合は、Home Assistant 公式ウェブサイトで他の製品への Home Assistant インストール方法を確認して学習することもできます。

- **[Home Assistant インストール](https://www.home-assistant.io/installation/)**
:::

### ステップ 1. ESPHome のインストール

すでに ESPHome をインストールしている場合は、このステップをスキップできます。

**Settings** -> **Add-ons** -> **ADD-ON STORE** に移動します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>

ESPHome を検索してクリックします。**INSTALL** と **START** をクリックします。

:::tip
アドオンストアで ESPHome が見つからない場合は、アドオンをサポートする Home Assistant インストール（Home Assistant OS や監視付きインストールなど）を使用していることを確認してください。他のインストールタイプ（Home Assistant Container など）の場合、Docker を使用して ESPHome Device Builder を独立して実行する必要がある場合があります。詳細については、[公式 ESPHome ドキュメント](https://esphome.io/guides/getting_started_hassio)を参照してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

その後、ESPHome Builder がサイドバーに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

### ステップ 2: 土壌水分センサーの準備

デフォルトでは、デバイス（XIAO ESP32C6）には XIAO 土壌水分センサー用のファームウェアが事前にフラッシュされています。ただし、デフォルトファームウェアを変更またはアップグレードする必要がある場合は、以下のリソースセクションで工場出荷時の YAML 設定ファイルが利用できます。必要に応じてロジックをカスタマイズし、Home Assistant 経由でフラッシュできます。

:::tip
正確な読み取り値を確保するため、使用前にセンサーの簡単な校正を実行してください。
:::

### ステップ 3: ネットワーク設定

1. **アクセスポイントの有効化**:
   - 初回電源投入時、モジュールは Wi-Fi ネットワーク（SSID: `Xiao-Soil-Moisture-Monitor`）を作成します。

2. **設定へのアクセス**:
   - 電話またはPCを使用してネットワークに接続します。
   - ブラウザを開いて `http://192.168.4.1` に移動します。
   - ホーム Wi-Fi ネットワークの SSID とパスワードを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:650, "border-radius": '15px'}}/></div>

3. **Home Assistant 統合**:
   - ホームネットワークに接続されると、モジュールは Home Assistant の `Settings -> Devices & Services` で発見可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:400, height:'auto', "border-radius": '15px'}}/></div>

この方法で、モジュールを Home Assistant ネットワークに接続し、Home Assistant に発見させることができます。

### ステップ 4: モジュールデバイスの追加

1. **自動発見**:
   - Home Assistant に **ESPHome** がインストールされていることを確認します。
   - `Settings -> Devices & Services -> Integrations` に移動してデバイスを探します。

2. **手動設定**:
   - 自動的に発見されない場合は、IP アドレスを指定してデバイスを手動で追加します。

デバイスを追加すると、Home Assistant の概要ページに Solid_sensor という名前の新しいセンサーカードが表示され、バッテリー測定値と現在の土壌水分状態の両方が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/View_in_HA.png" style={{width:400, height:'auto', "border-radius": '15px'}}/></div>

土壌センサーが稼働したので、植物の監視を楽しんでください！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_2.jpg" style={{width:800, height:'auto'}}/></div>

## 高度な使用方法

元のファームウェアロジックを変更し、Home Assistant を通じて土壌センサーのカスタマイズされたバージョンを直接フラッシュできます。

### ステップ 1. ESPHome をインストール

上記のステップ 1 のインストールガイドを参照してください。

### ステップ 2. 新しいデバイスを追加

ESPHome に移動し、**NEW DEVICE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/06.png" style={{width:800, height:'auto'}}/></div>

デバイスに好きな名前を付けて、**NEXT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/2.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

新しいデバイスを作成した後、**EDIT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/4.png" style={{width:800, height:'auto'}}/></div>

### ステップ 3. ファームウェアをインストール

こちらがファクトリーファームウェアです：
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao-soil-moisture-monitor" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

こちらは Home Assistant 用のすぐに使える `ESPHome` YAML 設定です：
<details>

<summary>完全なコードをプレビューするにはここをクリック</summary>

```yaml
# ==== AUTO-SYNC START: xiao-soil-moisture-monitor/xiao-soil-moisture-monitor.yaml ====

substitutions:
  name: "xiao-soil-moisture"
  friendly_name: "XIAO Soil Moisture Monitor"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: true
  project:
    name: "xiao.soil-moisture-monitor"
    version: "1.0"
  on_boot:
    then:
      - output.turn_off: gpio_3_output
      - output.turn_on: gpio_14_output
      - light.turn_on:
          id: pwm_led
          brightness: 68%  # Set 68% duty cycle
      - if:
          condition:
            lambda: 'return id(wifi_net_status) == 0;'
          then:
            - logger.log: "The device has not been set to the network"
            - deep_sleep.prevent: deep_sleep_control
          else:
            - logger.log: "The device has been networked"
      - delay: 1s
      - script.execute: check_moisture_once


esp32:
  board: esp32-c6-devkitc-1
  framework:
    type: esp-idf

# LED Yellow	D10 18
# LED RED	D9  20
# LED Green	D8 19
# button	D2  2

# Battery	D0 0
# PWM out	D3 21
# Soil sensor	D1  1


output:
  - platform: gpio
    pin: GPIO18
    id: yellow_led_output

  - platform: gpio
    pin: GPIO19
    id: green_led_output

  - platform: gpio
    pin: GPIO20
    id: red_led_output

  - platform: ledc
    pin: GPIO21
    id: pwm_output
    frequency: 200kHz  # Set the frequency to 200kHz

  - platform: gpio
    pin: GPIO3
    id: gpio_3_output

  - platform: gpio
    pin: GPIO14
    id: gpio_14_output

light:
  - platform: binary
    id: yellow_led
    output: yellow_led_output

  - platform: binary
    id: green_led
    output: green_led_output

  - platform: binary
    id: red_led
    output: red_led_output

  - platform: monochromatic
    output: pwm_output
    id: pwm_led
    name: "200kHz PWM"
    internal: true
    default_transition_length: 0s


script:
  - id: red_led_blink
    mode: restart
    then:
      - repeat:
          count: 10
          then:
            - light.turn_on: red_led
            - delay: 500ms
            - light.turn_off: red_led
            - delay: 500ms

  - id: green_led_blink
    mode: restart
    then:
      - repeat:
          count: 10
          then:
            - light.turn_on: green_led
            - delay: 500ms
            - light.turn_off: green_led
            - delay: 500ms

  - id: fast_blink_green
    then:
      - repeat:
          count: 5
          then:
            - light.turn_on: green_led
            - delay: 200ms
            - light.turn_off: green_led
            - delay: 200ms

  - id: fast_blink_red
    then:
      - repeat:
          count: 5
          then:
            - light.turn_on: red_led
            - delay: 200ms
            - light.turn_off: red_led
            - delay: 200ms

  - id: red_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: red_led
            - delay: 1000ms
            - light.turn_off: red_led
            - delay: 100ms
  - id: yellow_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: yellow_led
            - delay: 1000ms
            - light.turn_off: yellow_led
            - delay: 100ms

  - id: green_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: green_led
            - delay: 1000ms
            - light.turn_off: green_led
            - delay: 100ms


  - id: do_calibration
    then:
      - deep_sleep.prevent: deep_sleep_control
      - logger.log: "Starting calibration"
      - script.execute: red_led_blink
      - delay: 10s
      - script.stop: red_led_blink
      - lambda: |-
          float sum = 0;
          for (int i = 0; i < 10; i++) {
            id(soil_sensor).update();
            sum += id(soil_sensor).state;
            delay(200);
          }
          id(dry_value) = sum / 10.0;
          ESP_LOGI("calibration", "Dry value: %f", id(dry_value));

      - delay: 3s

      - script.execute: green_led_blink
      - delay: 10s
      - script.stop: green_led_blink
      - lambda: |-
          float sum = 0;
          for (int i = 0; i < 10; i++) {
            id(soil_sensor).update();
            sum += id(soil_sensor).state;
            delay(200);
          }
          id(wet_value) = sum / 10.0;
          ESP_LOGI("calibration", "Wet value: %f", id(wet_value));

      - delay: 3s

      - lambda: |-
          if (id(dry_value) > id(wet_value)) {
            ESP_LOGI("calibration", "Calibration success");
            id(fast_blink_green).execute();
          } else {
            ESP_LOGW("calibration", "Calibration failed");
            id(fast_blink_red).execute();
          }

      - delay: 3s
      - script.execute: check_moisture_once
      - delay: 3s
      - deep_sleep.enter: deep_sleep_control

  - id: check_moisture_once
    then:
      - lambda: |-
          for(int i = 0; i < 10; i++){
            id(soil_sensor).update();
            delay(200);
          }
          float moisture = id(soil_sensor).state;
          ESP_LOGI("moisture_check", "Moisture reading: %f", moisture);
          float Diff = id(dry_value) - id(wet_value);
          ESP_LOGI("moisture_check", "Diff is: %f", Diff);
          ESP_LOGI("moisture_check", "ref_dry Diff is: %f",id(dry_value) - Diff * id(ref_dry));
          ESP_LOGI("moisture_check", "ref_wet Diff is: %f",id(dry_value) - Diff * id(ref_wet));
          if (moisture >= (id(dry_value) - Diff * id(ref_dry))) {  // The drier -> the higher the voltage
            id(red_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(900000);
          } else if(moisture >  (id(dry_value) - Diff * id(ref_wet)) && moisture < (id(dry_value) - Diff * id(ref_dry))){
            id(yellow_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(3600000);
          }else{
            // moisture >  (id(dry_value) - Diff * id(ref_wet))
            id(green_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(28800000);
          }



globals:
  - id: button_press_count
    type: int
    restore_value: no
    initial_value: '0'
  - id: dry_value
    type: float
    restore_value: yes
    initial_value: '2.75'
  - id: wet_value
    type: float
    restore_value: yes
    initial_value: '1.2'
  - id: wifi_net_status
    type: int
    restore_value: yes
    initial_value: "0"
  - id: ref_dry
    type: float
    restore_value: no
    initial_value: "0.23"
  - id: ref_wet
    type: float
    restore_value: no
    initial_value: "0.58"

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO2
      mode: INPUT_PULLUP
      allow_other_uses: true
    id: my_button
    on_press:
      - lambda: |-
          id(button_press_count)++;
      - delay: 1s  # Delay 1 second to see if the button is pressed 3 times in a row
      - lambda: |-
          if (id(button_press_count) == 3) {
            id(button_press_count) = 0;
            id(do_calibration).execute();  // Trigger calibration process
          } else if (id(button_press_count) == 1) {
            id(button_press_count) = 0;
            id(check_moisture_once).execute();  // Perform an ADC decision
          } else {
            id(button_press_count) = 0;
          }


# interval:
#   - interval: 10s
#     then:
#       - script.execute: check_moisture_once



# Deep sleep configuration
deep_sleep:
  id: deep_sleep_control
  run_duration: 120s
  sleep_duration: 180min
  wakeup_pin:
    number: GPIO2
    inverted: true
    allow_other_uses: true
    mode: INPUT_PULLUP

sensor:
  - platform: adc
    id: soil_sensor
    pin: GPIO1
    name: "Soil moisture measurement"
    update_interval: 4s
    internal: true
    attenuation: 12db


  - platform: adc
    pin: GPIO0
    name: "Battery measurement"
    attenuation: 12db
    # internal: true
    filters:                     # When the battery drops below 1V, it is dead.
      - lambda: |-
          if (x < 1.2) {
            return 0.0;
          }else if(x > 1.5){
            return 1.0 * 100.0;
          }else {
            return ((x - 1.2) / (1.5 - 1.2)) * 100.0;
          }
    unit_of_measurement: "%"
    update_interval: 5s
    force_update: True

  - platform: wifi_signal
    name: "wifi singnal strength"
    update_interval: 10s

# text_sensor:
#   - platform: template
#     name: "Soil Moisture Status"   # ✅ Status displayed on the HA panel
#     id: soil_status
#     # internal: true
#     lambda: |-
#       float value = id(soil_sensor).state;
#       float Diff = id(dry_value) - id(wet_value);
#       if (value >= (id(dry_value) - Diff * id(ref_dry))) {
#         //id(red_led_blink_3_times).execute();
#         return {"Dry"};
#       } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
#         //id(yellow_led_blink_3_times).execute();
#         return {"Almost Dry"};
#       } else {
#         //id(green_led_blink_3_times).execute();
#         return {"Normal Moisture"};
#       }
#     update_interval: 5s

text_sensor:
  - platform: template
    name: "Soil Moisture Status"
    id: soil_status
    lambda: |-
      float value = id(soil_sensor).state;
      float Diff = id(dry_value) - id(wet_value);
      if (value >= (id(dry_value) - Diff * id(ref_dry))) {
        return {"Dry"};
      } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
        return {"Almost Dry"};
      } else {
        return {"Normal Moisture"};
      }
    update_interval: never  # 不让自动触发上报，我们自己控制

interval:
  - interval: 5s
    then:
      - text_sensor.template.publish:
          id: soil_status
          state: !lambda |-
            return "";
      - delay: 10ms
      - text_sensor.template.publish:
          id: soil_status
          state: !lambda |-
            float value = id(soil_sensor).state;
            float Diff = id(dry_value) - id(wet_value);
            if (value >= (id(dry_value) - Diff * id(ref_dry))) {
              id(deep_sleep_control).set_sleep_duration(900000);
              return "Dry";
            } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
              id(deep_sleep_control).set_sleep_duration(3600000);
              return "Almost Dry";
            } else {
              id(deep_sleep_control).set_sleep_duration(28800000);
              return "Normal Moisture";
            }

# Enable logging
logger:

improv_serial:

# Enable Home Assistant API
api:

ota:
  - platform: esphome

wifi:
  on_connect:
    then:
      - if:
          condition:
            lambda: 'return id(wifi_net_status) == 0;'
          then:
            - logger.log: "The device has not been configured yet, but now it is successfully configured"
            - globals.set:
                id: wifi_net_status
                value: '1'
            - delay: 5s
            - deep_sleep.allow: deep_sleep_control
          else:
            - logger.log: "The device has been networked"


  on_disconnect:
    then:
      - globals.set:
          id: wifi_net_status
          value: '0'
  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "XIAO-Soil-Moisture-Monitor"

captive_portal:
# ==== AUTO-SYNC END ====
```

</details>

<details>
<summary>YAML設定で使用される主要な機能とロジックの概要です。</summary>

`on_boot` – デバイス起動時の動作を定義します。

- **入力パラメータ**: なし。
- **動作**: GPIO 14をオンにし、PWM LED輝度を設定し、Wi-Fiステータスをチェックし、最初の水分チェックをトリガーします。

`scripts (red_led_blink, green_led_blink, fast_blink_green, fast_blink_red, etc.)` – 事前定義されたLED点滅パターン。

- **入力パラメータ**: なし。
- **動作**: ステータスやキャリブレーション手順を示すために、様々なパターンでLEDを点滅させます。

`do_calibration` – 乾燥土壌と湿潤土壌のキャリブレーションプロセスを実行します。

- **入力パラメータ**: なし。
- **動作**: 赤色LEDを点滅させ、乾燥読み取り値を待機；その後緑色LEDを点滅させ、湿潤読み取り値を待機；平均値を保存し、成功または失敗を確認します。

`check_moisture_once` – 土壌水分レベルを読み取り、評価します。

- **入力パラメータ**: なし。
- **動作**: 複数のADC読み取り値を取得し、平均化し、キャリブレーションされた閾値と比較し、水分状態を決定し、それに応じてLEDとディープスリープ設定をトリガーします。

`binary_sensor (GPIO2)` – 物理ボタン押下ロジックを処理します。

- **入力パラメータ**: なし。
- **動作**: ボタン押下回数をカウント；1回押しで水分チェックをトリガー、3回押しでキャリブレーションをトリガーします。

`globals` – システム状態とキャリブレーションデータを保存します。

- **変数**:
  - `button_press_count`: ボタン押下回数を追跡します。
  - `dry_value`, `wet_value`: キャリブレーションされた乾燥/湿潤ADC値を保存します。
  - `wifi_net_status`: Wi-Fi接続状態を追跡します。
  - `ref_dry`, `ref_wet`: 閾値計算のための参照スケーリング係数。

`deep_sleep` – 省電力スリープサイクルを管理します。

- **入力パラメータ**: なし。
- **動作**: 120秒間実行し、その後最大180分間スリープ；ボタン押下または間隔でウェイクアップします。

`sensor (ADC)` – 土壌センサーとバッテリーからアナログ値を読み取ります。

- **入力パラメータ**: なし。
- **動作**: 土壌水分とバッテリー電圧を測定；バッテリーはパーセンテージ表示にスケーリングされます。

`text_sensor` – 人間が読める土壌水分ステータスを公開します。

- **入力パラメータ**: なし。
- **動作**: Home Assistantで "Dry"、"Almost Dry"、または "Normal Moisture" を表示します。

`wifi` + `api` + `ota` – ネットワーク接続、Home Assistant統合、およびオーバーザエアファームウェア更新を管理します。

- **入力パラメータ**: Wi-Fi SSIDとパスワード。
- **動作**: デバイスをネットワークに接続し、APIを公開し、リモート更新を有効にします。

</details>

**INSTALL**をクリックしてデバイスにコードをインストールすると、次の画像が表示されます。

<Tabs>
<TabItem value='ブラウザ経由でインストール'>

:::tip
Home Assistantホスト（Raspberry PI/Green/Yellow等）が遠くにある場合は、この方法をお勧めします。手元にあるコンピュータでインストールできます。
:::

まず、**Manual download**をクリックしてコンパイル済みファームウェアをダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

ePaperパネルにファームウェアをアップロードするこのウェブサイトを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

ESPHomeに戻ってファームウェアをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Factory formatを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

USBケーブルを使用して**ePaperパネルをコンピュータに接続**し、**CONNECT**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

usbmodemxxx（WindowsはCOMxxx）を選択し、connectをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

**INSTALL**をクリックし、先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:650, height:'auto'}}/></div>

ファームウェアがまもなくフラッシュされます～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/71.png" style={{width:650, height:'auto'}}/></div>

</TabItem>

<TabItem value='ホスト経由でインストール'>

:::tip
Home Assistantホスト（Raspberry PI/Green/Yellow等）が近くにある場合は、より簡単なのでこの方法をお勧めします。
:::

デバイスにコードをインストールする前に、USBケーブルを使用して**このデバイスをHome Assistantを実行しているRaspberry PiまたはHA Green（Yellow）等に接続**する必要があります。

画像に従ってオプションをクリックし、デバイスにコードをインストールします。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

しばらく待つと、次の画像のようなフィードバックが表示されます。これはコードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/9.png" style={{width:650, height:'auto'}}/></div>

</TabItem>

<TabItem value='Wi-Fi経由でインストール'>

:::tip
これは最も簡単な方法ですが、初回プログラムインストール時は、まず左側の方法を使用してePaperパネルにプログラムをアップロードする必要があります。その後、wifi経由でアップロードできます。また、この方法が機能するためには、YAML設定に有効な暗号化キーを持つ適切に設定された`ota`と`api`セクションが含まれていることを確認してください。
:::

この方法では、ePaperパネルを何にも接続する必要がなく、オンラインであることを確認するだけです。

オプションをクリックすると、ファームウェアが自動的にePaperパネルにインストールされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

しばらく待つと、次の画像のようなフィードバックが表示されます。失敗した場合は、信号が弱い可能性があります。デバイスをルーターに近づけてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/73.png" style={{width:650, height:'auto'}}/></div>

</TabItem>
</Tabs>

## リセット

ファームウェアを再フラッシュする必要がある場合は、次のリンクを使用してデフォルトファームウェアを復元できます：  
[https://gadgets.seeed.cc/](https://gadgets.seeed.cc/)

まずデバイスをコンピュータに接続します。  
次に、ページで**XIAO Soil Moisture Monitor**を見つけ、**Connect**をクリックして再フラッシュを進めます。

## リソース

- **[PDF]** [XIAO Soil Moisture Sensor SCH](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/SCH.pdf)
- **[Kicad]** [XIAO Soil Moisture Sensor PCB](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/Kicad.kicad_pcb)
- **[Yaml]** [XIAO Soil Moisture Sensor HA Yaml](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/HomeAssistanceYaml.yaml)
- **[Bin]** [XIAO Soil Moisture Sensor HA Factory Bin](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/factory.bin)
- **[LINK]** [XIAO Soil Moisture Sensor 3D file Printtables](https://www.printables.com/model/1260595-3d-enclosure-for-seeed-studio-xiao-75-epaper-panel/edit)
- **[LINK]** [XIAO Soil Moisture Sensor 3D file Thingiverse](https://www.thingiverse.com/thing:7039325)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
