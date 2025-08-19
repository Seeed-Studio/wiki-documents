---
description: XIAO ESP32C3 ESPHome スマートサーモスタット
title: Xiao ESP32C3 ESPHome スマートサーモスタット
keywords:
- 貢献
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/esp32c3_smart_thermostat
last_update:
  date: 05/15/2025
  author: Chris (Echo7394)
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Xiao ESP32C3 ESPHome スマートサーモスタット

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/9.jpg" alt="pir" width={500} height="auto" /></p>

このWikiでは、Xiao ESP32C3 ESPHome スマートサーモスタットを作成する手順をステップバイステップで説明します。それでは始めましょう！

## ハードウェアの準備

このチュートリアルをすべて通して実行する場合、以下のものを準備する必要があります。

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio 拡張ボード</th>
      <th>Home Assistant デバイス <br /> 例: Seeed Studio Home Assistant Yellow</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 詳細を確認 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

**Grove センサー**

<table align="center">
  <tbody><tr>
      <th>Grove - 温湿度センサー Pro (DHT22/AM2302)</th>
      <th>Grove - 2チャンネルSPDTリレー</th>
      <th>Grove - 高電流リレー 5V/10A</th>
      <th>Grove - OLEDディスプレイ 0.96" (SSD1315)</th>
      <th>モーメンタリーボタン (任意の種類で可)</th>
    </tr>
    <tr>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/2.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/3.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/4.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/5.jpg" alt="pir" width={210} height="auto" /></p></td> 
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/8.jpg" alt="pir" width={400} height="auto" /></p></td> 
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM2302-DHT22.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

## ソフトウェア準備

### Home Assistant のインストール

Home Assistant がすでに動作していることを確認してください。ここでは、[製品](https://wiki.seeedstudio.com/ja/home_assistant_topic/#-devices-for-home-assistant-)に Home Assistant をフラッシュする方法を紹介する複数の Wiki があります。私は Raspberry Pi CM4 を搭載した Home Assistant Yellow を使用しているため、[公式の方法を使用して OS を Home Assistant Yellow にフラッシュすることができます](https://yellow.home-assistant.io/power-supply/)。

### Home Assistant に ESPHome をインストール

ESPHome は **Home Assistant Add-On** として利用可能で、アドオンストアから簡単にインストールできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/esphome.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ 1.** **INSTALL** をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** すべてのオプションを有効にして **START** をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

ESPHome が正常にロードされると、以下のウィンドウが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## 始めるにあたって

すべてのソフトウェアとハードウェアが準備できたら、作業を開始できます。

### 1. Seeed Studio XIAO ESP32C3 を ESPHome に追加

- **ステップ 1.** **+ NEW DEVICE** をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** **CONTINUE** をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 3.** デバイスの **名前** を入力し、**ネットワーク名** や **パスワード** などの WiFi 認証情報を入力します。その後、**NEXT** をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/7.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 4.** **ESP32-C3** を選択してクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/8.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 5.** このボードを手動で設定するため、**SKIP** をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

### 2. YAML 設定を作成してアップロード

- **ステップ 1.** 新しく作成したボードの下にある **EDIT** をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/9.png" style={{width:900, height:'auto'}}/></div>

<!-- ### 2. Home Assistant と ESPHome のインストール

- 選択したデバイスに Home Assistant をインストールします。デバイスに応じた多くの情報ガイドがあります。
Home Assistant をインストールするデバイスの種類によって、最適な Home Assistant のスタイルが決まります。

- ESPHome のインストールは、Supervisor/Add-Ons/Extensions タブで「ESPHome」を検索してクリックするだけで簡単に行えます。

<!-- ![image9](./esphome.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/esphome.jpg" alt="pir" width={1000} height="auto" /></p> -->

- **ステップ 7.** YAML 設定を作成してアップロード

  以下のコードの説明:

  - **名前:** "thermostat"

  - **ボード設定:** <br />
  フラッシュモードを DIO に設定。<br />
  ボードを "seeed_xiao_esp32c3" として指定し、Arduino フレームワークを使用。

  - **起動時のアクション:**<br />
  ログメッセージを表示: "Booting thermostat."<br />
  3 つのリレー (暖房、冷却、ファン) をオフにする。<br />
  500 ミリ秒の遅延。<br />
  "boot_beep" という名前のスクリプトを実行。

  - **スクリプト設定:**<br />
  起動ビープスクリプト:<br />
  ブザーをオンにし、ビープ音を生成する周波数を設定し、300 ミリ秒後にオフにする。

  - **API と OTA 設定:**<br />
  API:<br />
  暗号化キーを指定。<br />
  OTA:<br />
  OTA 更新用のパスワードを "13371337" に設定。

  - **ブザー出力:**<br />
  LEDC プラットフォームを使用してピン 5 を設定。

  - **WiFi 設定:**<br />
  Wi-Fi に接続するための SSID とパスワードを指定。<br />
  フォールバックホットスポット (キャプティブポータル) を "Xiao-Esp32C3" という SSID と "13371337" というパスワードで設定。

- **I2C設定:**<br />
  SDAピン6とSCLピン7を使用してI2C通信を設定します。

- **フォント設定:**<br />
  異なるサイズの2つのフォントをディスプレイ用に定義します。

- **ディスプレイ設定:**<br />
  SSD1315 I2Cディスプレイを使用し、情報をフォーマットして表示するためのラムダ関数を利用します。<br />
  華氏温度、湿度、Wi-Fi信号強度、およびIPアドレスを表示します。

- **センサー設定:**<br />
  DHT22センサーを使用して温度と湿度を測定し、10秒ごとに更新します。<br />
  また、Wi-Fi信号センサーを20秒ごとに更新します。

- **テキストセンサー設定:**<br />
  サーモスタットのIPアドレスとESPHomeバージョンを表示します。

- **スイッチ設定:**<br />
  relay_heat、relay_cooling、relay_fan用の3つのGPIOスイッチを設定します。

- **バイナリセンサー設定:**<br />
  循環ファンボタンの押下を検出するバイナリセンサーを設定します。<br />
  押下時に気候システムのファンモードを制御します。

- **気候設定:**<br />
  指定された温度センサーを使用してサーモスタット制御を実装します。<br />
  加熱、冷却、ファンモード、アイドルのアクションを定義します。<br />
  温度制限、ステップサイズ、デフォルトプリセットを設定します。

  この設定をESPHomeデバイス構成のyamlファイルに貼り付けてください。完全な.yamlファイルは[こちら](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/esp32c3config.yaml)からダウンロードできます。

```yaml
esphome:
  name: ecostat
  platformio_options:
    board_build.flash_mode: dio
  on_boot:
    priority: 750
    then:
      - logger.log: "EcoStatを起動中"
      - delay: 500ms
      - lambda: |-
          id(relay_heat).turn_off();
          id(relay_cooling).turn_off();
          id(relay_fan).turn_off();
          id(ecostat_control_heat).mode = CLIMATE_MODE_OFF;
          id(ecostat_control_cooling).mode = CLIMATE_MODE_OFF;
      - script.execute: boot_beep

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

#logger:
 # level: VERY_VERBOSE

api:
  encryption:
    key: "YOURKEYHERE"

ota:
  password: "13371337"

script:
- id: boot_beep
  then:
    # 最初の ^E
    - output.turn_on: buzzer
    - output.ledc.set_frequency:
        id: buzzer
        frequency: 659.25Hz  # E
    - output.set_level:
        id: buzzer
        level: "50%"
    - delay: 150ms
    - output.turn_off: buzzer
    - output.turn_on: buzzer
    - output.ledc.set_frequency:
        id: buzzer
        frequency: 1000Hz
    - output.set_level:
        id: buzzer
        level: "50%"
    - delay: 150ms
    - output.turn_off: buzzer
output:
  - platform: ledc
    pin: 5
    id: buzzer

wifi:
  ssid: YOURWIFINAME
  password: YOURWIFIPASS

  # Wi-Fi接続が失敗した場合のフォールバックホットスポット（キャプティブポータル）を有効化
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "13371337"

i2c:
  sda: 6
  scl: 7
  scan: False

font:
  # gfonts://family[@weight]
  - file: "gfonts://Roboto"
    id: roboto
    size: 20

  - file: "gfonts://Poppins@700"
    id: inter
    size: 10

display:
  - platform: SSD1315_i2c
    id: oled
    model: "SSD1315 128x64"
    address: 0x3C
    lambda: |-
      float temp_celsius = id(temp).state;
      float temp_fahrenheit = (temp_celsius * 9.0 / 5.0) + 32.0;
      char temp_str[6]; // 温度文字列用バッファ
      dtostrf(temp_celsius, 4, 1, temp_str); // 摂氏を文字列に変換（小数点以下1桁）

      it.print(28, 0, id(inter), id(ip_address).state.c_str());
      it.printf(0, 18, id(roboto), "T: %.1f  ", temp_fahrenheit);
      it.printf(70, 18, id(roboto), "H: %d", int(id(humidity).state));
      it.printf(31, 45, id(inter), "RSSI: %d", int(id(rssi).state));

climate:
  - platform: thermostat
    name: "EcoStat Heating"
    id: ecostat_control_heat
    sensor: temp
    heat_deadband: 2 °F
    heat_overrun: 0
    min_heating_run_time: 60s
    min_heating_off_time: 120s
    min_idle_time: 3min
    visual:
      min_temperature: 60 °F
      max_temperature: 80 °F
      temperature_step:
        current_temperature: 0.1
        target_temperature: 1.0
        target_temperature_low: 65 °F
    heat_action:
      - switch.turn_on: relay_heat
    idle_action:
      - switch.turn_off: relay_heat
    default_preset: Normal
    preset:
      - name: Normal
        default_target_temperature_low: 65 °F


  - platform: thermostat
    name: "EcoStat Cooling"
    id: ecostat_control_cooling
    sensor: temp
    cool_deadband: 2 °F
    cool_overrun: 0
    min_cooling_off_time: 20s
    min_cooling_run_time: 60s
    min_idle_time: 3min
    visual:
      min_temperature: 60 °F
      max_temperature: 80 °F
      temperature_step:
        current_temperature: 0.1
        target_temperature: 1.0
        target_temperature_low: 70 °F
    cool_action:
      - switch.turn_on: relay_cooling
    idle_action:
      - switch.turn_off: relay_cooling
    min_fan_mode_switching_time: 20s
    fan_mode_on_action:
      - switch.turn_on: relay_fan
    fan_mode_off_action:
      - switch.turn_off: relay_fan
    default_preset: Normal
    preset:
      - name: Normal
        default_target_temperature_high: 70 °F

sensor:
  - platform: dht
    pin: 20
    model: DHT22
    update_interval: 10s
    temperature:
      name: "EcoStat Temperature"
      id: temp
    humidity:
      name: "EcoStat Humidity"
      id: humidity
  - platform: wifi_signal
    name: "Wi-Fi Signal Strength"
    id: rssi
    update_interval: 20s

text_sensor:
  - platform: wifi_info
    ip_address:
      name: "EcoStat IP Address"
      id: ip_address
  - platform: version
    name: "EcoStat ESPHome Version"

switch:
  - platform: gpio
    id: relay_heat
    pin:
      number: 10
      mode: OUTPUT
  - platform: gpio
    id: relay_cooling
    pin:
      number: 9
      mode: OUTPUT
  - platform: gpio
    id: relay_fan
    pin:
      number: 21
      mode: OUTPUT

binary_sensor:
  - platform: gpio
    id: tempup
    pin:
      number: 8
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - lambda: |-
            if (id(ecostat_control_heat).mode == esphome::climate::CLIMATE_MODE_HEAT) {
              auto current_target_temp = id(ecostat_control_heat).target_temperature_low;
              id(ecostat_control_heat).target_temperature_low = current_target_temp + 0.56;
              auto current_target_temp_high = id(ecostat_control_heat).target_temperature_high;
              id(ecostat_control_heat).target_temperature_high = current_target_temp_high + 0.56;
            } else if (id(ecostat_control_cooling).mode == esphome::climate::CLIMATE_MODE_COOL) {
              auto current_target_temp = id(ecostat_control_cooling).target_temperature_low;
              id(ecostat_control_cooling).target_temperature_low = current_target_temp + 0.56;
              auto current_target_temp_high = id(ecostat_control_cooling).target_temperature_high;
              id(ecostat_control_cooling).target_temperature_high = current_target_temp_high + 0.56;
            }

  - platform: gpio
    id: tempdown
    pin:
      number: 2
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - lambda: |-
            if (id(ecostat_control_heat).mode == esphome::climate::CLIMATE_MODE_HEAT) {
              auto current_target_temp = id(ecostat_control_heat).target_temperature_low;
              id(ecostat_control_heat).target_temperature_low = current_target_temp - 0.56;
              auto current_target_temp_high = id(ecostat_control_heat).target_temperature_high;
              id(ecostat_control_heat).target_temperature_high = current_target_temp_high - 0.56;
            } else if (id(ecostat_control_cooling).mode == esphome::climate::CLIMATE_MODE_COOL) {
              auto current_target_temp = id(ecostat_control_cooling).target_temperature_low;
              id(ecostat_control_cooling).target_temperature_low = current_target_temp - 0.56;
              auto current_target_temp_high = id(ecostat_control_cooling).target_temperature_high;
              id(ecostat_control_cooling).target_temperature_high = current_target_temp_high - 0.56;
            }

  - platform: gpio
    id: modeswitch
    pin:
      number: 3
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - lambda: |-
            auto current_mode = id(ecostat_control_heat).mode;
            if (current_mode == esphome::climate::CLIMATE_MODE_OFF) {
              id(ecostat_control_heat).mode = esphome::climate::CLIMATE_MODE_HEAT;
            } else if (current_mode == esphome::climate::CLIMATE_MODE_HEAT) {
              id(ecostat_control_heat).mode = esphome::climate::CLIMATE_MODE_COOL;
            } else if (current_mode == esphome::climate::CLIMATE_MODE_COOL) {
              id(ecostat_control_heat).mode = esphome::climate::CLIMATE_MODE_OFF;
            }

  - platform: gpio
    id: momentaryswitch0
    pin:
      number: 4
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - if:
            condition:
              switch.is_off: relay_fan
            then:
              - climate.control: 
                  id: ecostat_control_cooling
                  fan_mode: "on"
            else:
              - climate.control: 
                  id: ecostat_control_cooling
                  fan_mode: "off"
```

### 3. 選択したケースの組み立て（オプション）

このプロジェクトで使用したケースの STL ファイルを以下に示します。

[EcoStatV2 ecostatcase](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/EcoStatV2-ecostatcase.stl)

[EcoStatV2 ecostatlid](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/EcoStatV2-ecostatlid.stl)

これらのファイルは自由に使用または変更できます。もし個人的に 3D プリンターをお持ちでない場合でも、これらのファイルを任意の素材で印刷してくれるオンラインサービスが多数存在します。

<!-- ![image10](./3dfile.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/3dfile.png" alt="pir" width={1000} height="auto" /></p>

### 4. コンポーネントの取り付け

#### ステップ 1 ケース内にすべてのリストされたコンポーネントを取り付ける

M2x4 および M2x6 のネジを使用して、リストされたすべてのコンポーネントをケース内の対応する場所に取り付けます。<br />
（DHT22 センサーは単に押し込むだけで固定されます）。

<!-- ![image11](./11.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/11.jpg" alt="pir" width={500} height="auto" /></p>

#### ステップ 2 すべてのセンサーと周辺機器を前述の YAML 内の対応するピンに接続する

以下は接続プロセスで使用した方法です：

- **DHT22/SSD1315 - JST コネクタを使用:** DHT22 と SSD1315 のコネクタを PCB の反対側にデソルダリングして反転させ、適切にフィットさせます。

- **2 種類のリレー - JST/DuPont コネクタを使用:** リレーについては、一方の側に JST を使用し、もう一方の側には拡張ボードの GPIO ブレークアウトヘッダー用に DuPont コネクタを使用しました。

- **バッテリー接続:** また、3.7V リチウムセルを拡張ボードのバッテリー接続部に接続し、主電源が失われた場合のバックアップバッテリーとして使用しています。

<!-- ![image12](./10.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/10.jpg" alt="pir" width={500} height="auto" /></p>

#### ステップ 3 ケース前面内側に希望するタイプのモーメンタリボタンを接続する

私はボタンを少量のホットグルーで取り付けました。その後、モーメンタリボタンの対角に位置するピンにワイヤーをはんだ付けし、ワイヤーのもう一方の端に DuPont コネクタを取り付けて、拡張ボードの正しい GPIO ブレークアウトヘッダーに接続しました。

<!-- ![image13](./12.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/12.jpg" alt="pir" width={1000} height="auto" /></p>

#### ステップ 4 フロントカバーの背面にスクリーンを組み込む

フロントカバーの背面にスクリーンを組み込みます（少量のホットグルーで固定します）。その後、フロントカバーをケースに取り付け、以下のように M4x6 のネジ 3 本で固定します。

<!-- ![image14](./9.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/9.jpg" alt="pir" width={500} height="auto" /></p>

### 5. EcoStat の対応するリレーにワイヤーを接続する

スマートサーモスタットの完成です！ ご自宅の既存のサーモスタットを取り外し、以下の写真を参考にして、対応するリレーに正しいワイヤーを接続してください。

<!-- ![image15](./13.jpg) -->
<img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/13.jpg" alt="pir" width={500} height="auto" />

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- Chris の尽力に感謝します。あなたの作業は [こちら](https://wiki.seeedstudio.com/ja/Honorary-Contributors/) に展示されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>