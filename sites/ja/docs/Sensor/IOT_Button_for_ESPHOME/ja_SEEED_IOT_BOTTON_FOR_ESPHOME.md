---
description: Seeed Studio IoT ボタンを ESPHome に接続する
title: Seeed Studio IoT ボタンを ESPHome に接続する
keywords:
  - ESPHOME
  - IoT ボタン
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /ja/iot_button_for_esphome
last_update:
  date: 05/15/2025
  author: qiuyu wei, Citric
---


# Seeed Studio IoT ボタンを ESPHome に接続する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg" style={{width:600, height:'auto'}}/></div>

このチュートリアルでは、Seeed Studio IoT ボタンを ESPHome を使用して Home Assistant に接続する方法を説明します。ボタンを設定して、異なる押し方（シングルクリック、ダブルクリック、長押し）を検出し、スマートホーム内で異なるアクションをトリガーする方法を学びます。

## 必要な材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT ボタン</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Seeed Studio IoT ボタンは、ESP32-C6 チップを内蔵した多用途のスマートボタンです。これは完全なスタンドアロンデバイスであり、Home Assistant に統合してさまざまなデバイスを制御したり、自動化をトリガーしたりすることができます。ESP32-C6 チップを搭載しているため、低消費電力で信頼性の高い接続を提供し、追加の開発ボードを必要としません。

## Home Assistant に ESPHome をインストールする

 **ステップ 1**. **設定をクリック** --> **アドオン** --> **ADD-ON STORE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.5.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 2**. **ESPHome** を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/2.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3**. **INSTALL** をクリックし、その後 **START** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/3.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 4**. インストール成功

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/4.png" style={{width:1000, height:'auto'}}/></div>

## IoT ボタンを ESPHome に追加する

**ステップ 5**. **+NEW DEVICE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/5.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 6**. **NEXT** をクリックし、デバイスに任意の名前を付けます。「seeedstudio-iot-button」などの名前を推奨します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/6.png" style={{width:600, height:'auto'}}/></div>

**ステップ 7**. デバイスの種類を選択します。

IoT ボタンには ESP32-C6 が内蔵されているため、デバイスの種類として「ESP32」を選択します。後で設定を変更して正しい ESP32 バリアントを指定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/7.png" style={{width:580, height:'auto'}}/></div>

**ステップ 8**. デバイスの追加が成功したら、最後に **SKIP** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/8.png" style={{width:600, height:'auto'}}/></div>

## IoTボタンの設定

### Web Flasherを使用する（推奨方法）

IoTボタンを始める最も簡単な方法は、Web Flasherツールを使用してブラウザから直接ESPHomeファームウェアをインストールすることです。

**ステップ1**: [Seeed Studio IoT Button Firmware Flasher](https://gadgets.seeed.cc/) のウェブサイトにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/3.png" style={{width:800, height:'auto'}}/></div>

**ステップ2**: USBケーブルを使用してIoTボタンをコンピュータに接続します。

**ステップ3**: Web Flasherページで「Install」ボタンをクリックします。

**ステップ4**: ポップアップダイアログから正しいUSBポートを選択します。

**ステップ5**: ブラウザが自動的にファームウェアをダウンロードし、デバイスにフラッシュします。

**ステップ6**: フラッシュが完了すると、IoTボタンは独自のWiFiネットワークを作成します。コンピュータまたはスマートフォンから「seeedstudio-iot-button」という名前のWiFiネットワークに接続します。

**ステップ7**: 接続後、デバイスは自動的に設定ページを開くはずです。開かない場合は、ブラウザを開いて `http://192.168.4.1` に移動します。

**ステップ8**: 設定ページで以下を行います：
   - 自宅のWiFiネットワーク名（SSID）とパスワードを入力します
   - Home Assistantが接続されているネットワークと同じであることを確認します
   - 「Save」をクリックして設定を適用します

**ステップ9**: IoTボタンが再起動し、自宅のWiFiネットワークに接続します。

**ステップ10**: Home Assistantで、設定 > デバイスとサービスに移動します。新しいESPHomeデバイスが検出されたという通知が表示されます。「Configure」をクリックしてデバイスをHome Assistantに追加します。

**ステップ11**: プロンプトに従ってセットアップを完了します。IoTボタンは、異なるボタンアクションに対応する3つの仮想スイッチとともにHome Assistantのダッシュボードに表示されます。

### 代替方法：ESPHome Dashboard を使用する

設定をより詳細に制御したい場合は、以下の手順に従ってESPHomeダッシュボードを使用してください。

### ESPHome設定の追加

**ステップ1**. ESPHomeページに対応するデバイスカードが表示されます。その後、**EDIT**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/9.png" style={{width:1000, height:'auto'}}/></div>

**ステップ2**. 以下のコードで設定全体を置き換えます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/10.png" style={{width:1000, height:'auto'}}/></div>

<details>

<summary>完全なコードをプレビューするにはここをクリック</summary>

```yaml
substitutions:
  name: "seeedstudio-iot-button"
  friendly_name: "Seeed Studio IoT Button"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: true
  project:
    name: "seeedstudio.iot_button"
    version: "3.3"
  platformio_options:
    board_upload.maximum_size: 4194304
  on_boot:
    priority: -100.0
    then:
      - light.turn_on: blue_led
      - delay: 5min  # 初期化を待機
      - logger.log: "起動完了、ライトスリープに移行"
      - light_sleep.enter:
          id: light_sleep_1

esp32:
  board: esp32-c6-devkitc-1
  variant: esp32c6
  flash_size: 4MB # upload.flash_size
  framework:
    type: esp-idf
    sdkconfig_options:
      CONFIG_FREERTOS_UNICORE: y
      CONFIG_FREERTOS_HZ: '1000'
      CONFIG_PM_USE_RTC_TIMER_REF: y
      CONFIG_XTAL_FREQ_40: y
      CONFIG_ESP_DEFAULT_CPU_FREQ_MHZ: '80000000'
      CONFIG_PM_DFS_INIT_AUTO: n
      CONFIG_FREERTOS_USE_TICKLESS_IDLE: y
      CONFIG_PM_ENABLE: y
      CONFIG_PM_SLP_IRAM_OPT: y
      CONFIG_PM_RTOS_IDLE_OPT: y
      CONFIG_ESP_WIFI_SLP_IRAM_OPT: y
      CONFIG_PM_POWER_DOWN_CPU_IN_LIGHT_SLEEP: y
      CONFIG_PM_PROFILING: y

external_components:
  - source:
      type: git
      url: https://github.com/Seeed-Studio/xiao-esphome-projects
      ref: main
    components: [ light_sleep ]
    refresh: 0s

  - source:
      type: git
      url: https://github.com/ackPeng/esphome.git
      ref: api
    components: [ api ]
    refresh: 0s
    
# ロギングを有効化
logger:
  hardware_uart: USB_SERIAL_JTAG
  level: DEBUG

# Home Assistant APIを有効化
api:

ota:
  - platform: esphome

wifi:
  # WiFi接続が失敗した場合のフォールバックホットスポット（キャプティブポータル）を有効化
  ap:
    ssid: "seeedstudio-iot-button"
    # ap_timeout: 10s

  # WiFiネットワークステータスイベント
  on_connect:
    then:
      - logger.log: "WiFi接続成功！"
      # 緑色を3秒間表示してから電力節約のためにオフ
      - light.turn_on: 
          id: rgb_led
          brightness: 100%
          red: 0%
          green: 100%
          blue: 0%
          effect: "Subtle Flicker"
      - delay: 1s
      - light.turn_off: rgb_led

  on_disconnect:
    then:
      - logger.log: "WiFi接続失敗！"

captive_portal:

output:
  - platform: gpio
    pin: GPIO2
    id: user_led
    inverted: True
  - platform: gpio
    pin: GPIO18
    id: enable_pin

light_sleep:
  id: light_sleep_1
  wakeup_pin: 9
  on_prepare_sleep:
    then:
      - logger.log: "ライトスリープに入る準備中"
      - light.turn_off: blue_led
      - light.turn_off: rgb_led
  on_wakeup:
    then:
      - light.turn_on: blue_led
      - logger.log: "ライトスリープから復帰"
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'

# LEDストリップ電源を制御するスイッチ
switch:
  - platform: output
    name: "LEDストリップ電源"
    output: enable_pin
    id: led_power
    restore_mode: ALWAYS_ON  # 起動時に自動有効化
    internal: true

  # ボタンアクション用の仮想スイッチ
  - platform: template
    name: "スイッチ1"
    id: virtual_toggle_1
    optimistic: true
    turn_on_action:
      - logger.log: "シングルショートクリック"
      - logger.log: "スイッチ1がONになりました"
      # ボタン押下を示すために青色LEDを点滅
      - light.turn_on:
          id: rgb_led
          effect: "Blink"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # スイッチオンアクションを追加
    turn_off_action:
      - logger.log: "シングルショートクリック"
      - logger.log: "スイッチ1がOFFになりました"
      # ボタン押下を示すために青色LEDを点滅
      - light.turn_on:
          id: rgb_led
          effect: "Blink"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # 閉じるアクションを追加

  - platform: template
    name: "スイッチ2"
    id: virtual_toggle_2
    optimistic: true
    turn_on_action:
      - logger.log: "ダブルクリック"
      - logger.log: "スイッチ2がONになりました"
      # ボタン押下を示すために青色LEDをダブル点滅
      - light.turn_on:
          id: rgb_led
          brightness: 100%
          red: 100%
          green: 50%
          blue: 0%
          effect: "Subtle Flicker"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # スイッチオンアクションを追加
    turn_off_action:
      - logger.log: "ダブルクリック"
      - logger.log: "スイッチ2がOFFになりました"
      # ボタン押下を示すために青色LEDをダブル点滅
      - light.turn_on:
          id: rgb_led
          brightness: 100%
          red: 100%
          green: 50%
          blue: 0%
          effect: "Subtle Flicker"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # 閉じるアクションを追加

  - platform: template
    name: "スイッチ3"
    id: virtual_toggle_3
    optimistic: true
    turn_on_action:
      - logger.log: "長押し"
      - logger.log: "スイッチ3がONになりました"
      # ボタン押下を示すために青色LEDを長時間点灯
      - light.turn_on:
          id: rgb_led
          effect: "Rainbow"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # スイッチオンアクションを追加
    turn_off_action:
      - logger.log: "長押し"
      - logger.log: "スイッチ3がOFFになりました"
      # ボタン押下を示すために青色LEDを長時間点灯
      - light.turn_on:
          id: rgb_led
          effect: "Rainbow"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # 閉じるアクションを追加


light:
  - platform: binary
    name: "SeeedStudio IoT Button Blue LED"
    output: user_led
    id: blue_led
    internal: true
  - platform: esp32_rmt_led_strip
    internal: true
    pin: GPIO19
    num_leds: 1
    restore_mode: RESTORE_AND_OFF
    chipset: WS2812
    rgb_order: GRB
    is_rgbw: False
    name: "RGBステータスLED"
    id: rgb_led
    effects:
      - random:
          name: "ランダムカラー"
          transition_length: 5s
          update_interval: 10s
      - addressable_rainbow:
          name: "虹"
      - strobe:
          name: "点滅"
          colors:
            - state: True
              brightness: 100%
              red: 100%
              green: 0%
              blue: 50%
              duration: 500ms
            - state: False
              duration: 500ms
      - flicker:
          name: "微妙なちらつき"
          alpha: 95%
          intensity: 1.5%

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO9
      inverted: True
      mode:
        input: True
        pullup: True
    name: "SeeedStudio IoT Button"
    on_multi_click:
      - timing:
          - ON for at most 300ms
          - OFF for at least 0.5s
        then:
          - logger.log: "シングルショートクリック"
          - switch.toggle: virtual_toggle_1

      - timing:
          - ON for at most 300ms
          - OFF for at most 0.5s
          - ON for at most 300ms
          - OFF for at least 0.2s 
        then:
          - logger.log: "ダブルクリック"
          - switch.toggle: virtual_toggle_2

      - timing:
          - ON for 1s to 1.5s
          - OFF for at least 0.5s
        then:
          - logger.log: "長押し"
          - switch.toggle: virtual_toggle_3
    on_press:
      - globals.set:
          id: button_press_time
          value: !lambda 'return millis();'
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
    on_release:
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      - if:
          condition:
            lambda: 'return (millis() - id(button_press_time)) >= 5000;'
          then:
            - logger.log: "ライトスリープモードに移行"
            - light_sleep.enter:
                id: light_sleep_1

globals:
  - id: button_press_time
    type: uint32_t
    restore_value: no
    initial_value: '0'
  - id: last_activity_time
    type: uint32_t
    restore_value: no
    initial_value: '0'

interval:
  - interval: 10s
    then:
      - if:
          condition:
            lambda: 'return (millis() - id(last_activity_time)) >= 120000;'
          then:
            - logger.log: "2分間活動なし、ライトスリープに移行"
            - light_sleep.enter:
                id: light_sleep_1
```

</details>

:::note
「Your_WiFi_SSID」と「Your_WiFi_Password」を実際のWiFi認証情報に置き換えてください。WiFi設定は、Home Assistantサーバーが稼働しているネットワークと一致する必要があります。これにより適切な接続が確保されます。
:::

### 設定の理解

この設定の重要な部分を分解して説明します：

1. **ESP32の設定**:
   - IoTボタンに内蔵されているESP32-C6のバリアントとボードタイプを指定
   - フラッシュサイズを4MBに設定
   - ESP32-C6に必要なESP-IDFフレームワークを使用

2. **ボタンの設定**:
   - 内部で物理ボタンが接続されているGPIO9に接続
   - Inverted: Trueは、ボタンが押されていないときにピンが高くなり、押されると低くなることを意味します
   - 3つの異なる押下パターンを設定：
     - シングルショートクリック（素早く押して離す）
     - ダブルクリック（素早く2回押す）
     - 長押し（1〜2.5秒間押し続ける）

3. **仮想スイッチ**:
   - Home Assistantに表示される3つのテンプレートスイッチを作成
   - 各スイッチは異なるボタン押下パターンに対応
   - これらのスイッチは、他のデバイスを制御するためのオートメーションで使用可能

**ステップ3**. 設定が完了したら、右上の**INSTALL**をクリックし、次に**Plug into this computer**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/12.png" style={{width:1000, height:'auto'}}/></div>

**ステップ4**. コンパイルプロセスが完了するのを待ちます。その後、**Download project**をクリックし、**Factory format**を選択してプロジェクトファイルをダウンロードし、次に**Open ESPHome Web**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.2.png" style={{width:1000, height:'auto'}}/></div>

**ステップ5**. IoTボタンをUSB経由でコンピュータに接続します。**CONNECT**をクリックし、正しいシリアルポートを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.3.png" style={{width:1000, height:'auto'}}/></div>

**ステップ6**. **INSTALL**をクリックしてIoTボタンにファームウェアをフラッシュします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/15.png" style={{width:1000, height:'auto'}}/></div>

**ステップ7**. すべてが正常に進むと、インストール成功のメッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/16.png" style={{width:1000, height:'auto'}}/></div>

## IoTボタンをHome Assistantに追加する

**ステップ16**. Home Assistantに戻ります。**Settings**をクリックし、次に**Devices & services**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/17.png" style={{width:1000, height:'auto'}}/></div>

**ステップ17**. 新しいデバイスが検出されたという通知が表示されます。**CONFIGURE**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

**ステップ18**. IoTボタンをHome Assistantに追加するためのプロンプトに従います。デバイスが属するエリアを選択し、**FINISH**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/19.png" style={{width:1000, height:'auto'}}/></div>

**ステップ19**. IoTボタンとその3つの仮想スイッチがHome Assistantのダッシュボードに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/20.png" style={{width:1000, height:'auto'}}/></div>

## IoTボタンを使用したオートメーションの作成

IoTボタンのセットアップが完了したら、スマートホーム内のデバイスを制御するオートメーションを作成できます。ここでは、ボタンを押すとライトが点灯するシンプルなオートメーションを作成してみましょう。

**ステップ20**. Home Assistantで、**設定** > **オートメーションとシーン**に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

**ステップ21**. **オートメーションを作成**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

**ステップ22**. オートメーションを設定します：

1. **名前**: 「IoTボタン シングルプレス - ライトを点灯」など、わかりやすい名前を付けます。
2. **トリガー**: トリガータイプとして「状態」を選択します。
   - エンティティ: 「スイッチ1」（シングルプレス用）を選択
   - From: 「off」
   - To: 「on」
3. **アクション**: 制御したいデバイスを選択します。
   - 例えば、ライトを選択して点灯するように設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

**ステップ23**. **保存**をクリックしてオートメーションを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

## 応用編: 異なるプレスパターンで異なるデバイスを制御

IoTボタンの設定の強力な機能の1つは、異なるプレスパターンを検出できることです。以下は各パターンを活用するアイデアです：

1. **シングルプレス（スイッチ1）**:
   - 現在の部屋のライトをオン/オフ
   - よく使うデバイスのトグル

2. **ダブルプレス（スイッチ2）**:
   - シーンをアクティベート（例: 「ムービーナイト」でライトを暗くし、テレビをオン）
   - 複数のデバイスを同時に制御

3. **ロングプレス（スイッチ3）**:
   - セキュリティ機能をアクティベート（アラームのオン/オフ）
   - 緊急ルーチンをトリガー
   - 複数のデバイスを一括でオフ

これらの応用オートメーションを設定するには、上記の手順に従って追加のオートメーションを作成し、適切なスイッチ（スイッチ1、2、または3）をトリガーとして選択し、希望するアクションを設定してください。

## トラブルシューティング

IoTボタンで問題が発生した場合、以下の一般的なトラブルシューティング手順を試してください：

1. **ボタンがWiFiに接続しない**:
   - ESPHomeの設定でWiFiの認証情報を確認してください。
   - WiFiネットワークが2.4GHzであることを確認してください（ESP32-C6は2.4GHzと5GHzの両方をサポートしていますが、通常2.4GHzの方が範囲が広いです）。

2. **ボタンがHome Assistantに表示されない**:
   - ボタンとHome Assistantが同じネットワーク上にあることを確認してください。
   - ESPHomeアドオンとHome Assistantを再起動してください。

3. **ボタンのプレスが検出されない**:
   - GPIOピンの設定を確認してください（標準のIoTボタンではGPIO9）。
   - ESPHomeのログを確認して、ボタンのプレスが検出されているか確認してください。

4. **オートメーションがトリガーされない**:
   - オートメーションが有効になっていることを確認してください。
   - トリガー条件が正確に一致していることを確認してください（状態が「off」から「on」に変化する）。

## トラブルシューティング

### Q1: バッテリーを交換した後、デバイスがインターネットに接続できず、頻繁に切断されるのはなぜですか？バッテリーが充電されていることは確認済みです。

バッテリーを取り外した後、18650バッテリーのチップ保護戦略により、正常に動作するためには充電済みのUSB電源ケーブルで少し活性化する必要があります。

## リソース

- **[GITHUB]** [Seeed IoT Button Github Zigbee リポジトリ](https://github.com/Seeed-Projects/Seeed_IoT_Button_Zigbee)
- **[GITHUB]** [Seeed IoT Button Github ESPHome リポジトリ](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[PDF]** [Seeed IoT Button SCH PDF](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Seeed IoT Button SCH & PCB](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>