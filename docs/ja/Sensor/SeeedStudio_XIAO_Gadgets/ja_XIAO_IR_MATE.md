---
title: XIAO IR Mate スマート IR リモートの使い方
description: |
  Seeed Studio のスマート IR リモートで、テレビやエアコンなどの従来の家電を Home Assistant スマートホームエコシステムに統合するように設計されています。
image: https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO-Smart-IR-Mate.webp
slug: /ja/XIAO_IR_Mate_Smart_IR_Remote
keywords:
  - XIAO
  - Home Assistant
  - Smart Home
sidebar_position: 5
last_update:
  author: TienjuiWong
  date: 07/17/2025
---

# XIAO IR Mate スマート IR リモートの使い方（Home Assistant 用）

**XIAO IR Mate スマート IR リモート**へようこそ！このデバイスは Home Assistant ユーザー向けに特別に設計されており、シームレスで効率的、かつ統合されたスマート赤外線リモートコントロールソリューションの提供を目的としています。このガイドを通じて、デバイスのセットアップ方法、ホームネットワークへの接続、Home Assistant への統合、そして基本的な信号学習から高度なスマートエアコン制御まで、その全ての可能性を引き出す方法を学習できます。

<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/6-109990586-XIAO-Smart-IR-Mate.jpg"
    alt="Product diagram"
    style={{
      maxWidth: '50%',
      height: 'auto',
      display: 'block',
      borderRadius: '8px'
    }}
  />
</div>

## はじめに

**XIAO IR Mate** は **Seeed Studio XIAO ESP32-C3** をベースとしたコンパクトなスマート赤外線モジュールです。赤外線送受信、タッチセンシング、振動フィードバック、ステータス表示を統合しています。Wi-Fi 経由で接続し、Home Assistant スマートホームエコシステムに完璧に統合できます。その中核的な使命は、赤外線リモコンを使用する全ての従来の家電（テレビ、エアコン、ファンなど）を「スマート」にし、HA を通じて制御して自動化を可能にすることです。

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  alignItems: 'center'
}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/1-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 1" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/2-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 2" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/3-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 3" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/4-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 4" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/5-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 5" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/touch.jpg" alt="XIAO Smart IR Mate Product diagram 6" />
</div>

- **Home Assistant とのシームレスな統合**

ESPHome プラットフォーム上に構築された IR Mate は、Home Assistant によって自動的に発見され、簡単な自動化とスクリプト作成のためのシンプルなエンティティを提供します。

- **強力な IR 学習・送信機能**

360° カバレッジのための 3 つの高出力 IR エミッターと高感度レシーバーを搭載。標準リモコンから最大 10 個の IR コマンドの学習をサポート（プロジェクター、エアコン、タイマーの制御など）し、Home Assistant でワンタップ再生が可能です。

- **直感的な物理的インタラクションフィードバック**

振動モーターと LED インジケーターを搭載。短い振動でアクションを確認、長い振動で学習モードを知らせ、LED でネットワーク状態を表示し、セットアップとトラブルシューティングを簡素化します。

- **ファナティックスマート AC コントローラーへのアップグレード可能**

カスタムファームウェアをフラッシュして IR Mate をスマート AC リモートに変換。Home Assistant で正確な温度、モード、ファン速度を直接設定でき、自動 IR コード生成により、繰り返し学習を不要にします。

- **コンパクトデザイン、USB-C 電源**

## ハードウェア概要

デバイスの基本コンポーネントを理解することで、より良く使用できるようになります：

- **メインコントローラー**: Seeed Studio XIAO ESP32-C3、強力なパフォーマンスとWi-Fi接続を提供。
- **電源供給**: オンボードType-Cポート（5V）経由で電源供給。
- **赤外線エミッター**: 3つの高出力赤外線LED（ピンD1を使用）、死角なしの360°信号送信を保証。
- **赤外線レシーバー**: 1つの高精度赤外線レシーバー（ピンD2を使用）、他のリモコンからの信号学習用。
- **タッチセンサー**: デバイスにはタッチモジュールが統合されています（ピンD3を使用）。シングルタッチで短い振動（0.5秒）が操作フィードバックとして発生します。
- **振動モーター**: 内蔵振動モーター（ピンD4を使用）が、振動時間を変えて明確な触覚フィードバックを提供。
- **ステータス表示LED**: LED（ピンD5を使用）でデバイスの異なる動作状態を表示。
- **リセットボタン**: デバイス上の物理ボタン（ピンD0に接続）、再起動や工場出荷時設定リセットに使用。

## 初回使用とネットワーク設定（工場出荷時ファームウェア）

デバイスを初めて入手した際は、以下の手順に従って初期設定を完了してください。

### ステップ1: 電源オン

標準のUSB Type-Cケーブルを使用してデバイスに電源を供給します。起動後、デバイスは設定待機状態に入り、**白色LEDが1Hz周波数で点滅**するのが見えます。

### ステップ2: APプロビジョニングモードに入る

ネットワークが設定されていない場合、デバイスは自動的に**XIAO IR Mate**（または**Seeed_ir**、見つかるものによって異なります）という名前のWi-Fiホットスポット（AP）を作成します。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### ステップ3: ホットスポットに接続してネットワークを設定

1. スマートフォンまたはコンピューターのWi-Fi設定を開き、**XIAO IR Mate**という名前のネットワークを検索して接続します。

:::note
ホットスポットのデフォルトネットワークパスワードは'12345678'です。
:::

2. 接続が成功すると、通常デバイスは自動的に設定ページを開きます。開かない場合は、手動でブラウザを開いて**[http://192.168.4.1](http://192.168.4.1)**にアクセスしてください。
3. このページでWi-Fiネットワークのリストが表示されます。ご自宅の**2.4GHz Wi-Fiネットワーク（SSID）**を選択し、正しいパスワードを入力してください。
4. 「接続」または「保存」をクリックします。デバイスは提供されたWi-Fiネットワークへの接続を試行します。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_02.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### ステップ4: 接続成功

デバイスがご自宅のWi-Fiに正常に接続されると、APホットスポットは自動的にオフになり、**ステータス表示ライトが点灯状態**になります。ネットワーク設定が完了しました。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_03.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Home Assistant統合（工場出荷時ファームウェア）

デバイスファームウェアは**ESPHome**をベースにしており、Home Assistantへの統合が非常に簡単です。

1. **自動検出**: Home AssistantホストとXIAO IR Mateが同じローカルネットワークに接続されていることを確認してください。通常、HAは新しいESPHomeデバイスを自動的に検出します。**設定 \> デバイスとサービス**で「新しいデバイスが検出されました」という通知が表示されます。
2. **手動追加**: 自動検出されない場合は、右下の**[統合を追加]**ボタンをクリックし、**"ESPHome"**を検索して、デバイスのホスト名（例：**xiao-ir-mate**）またはIPアドレスを入力して手動で追加できます。

<div style={{textAlign:'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_01.png"
    alt=""
    style={{width:1000, height:'auto'}}
  /><br />

  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_02.png"
    alt=""
    style={{width:1000, height:'auto'}}
  /><br />

  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_05.png"
    alt=""
    style={{width:800, height:'auto'}}
  /><br />

  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_06.png"
    alt=""
    style={{width:1000, height:'auto'}}
  />
</div>

3. **デバイスダッシュボード**: 追加が成功すると、XIAO IR MateはHAでデバイスとして表示されます。そのダッシュボードには、10種類の異なる赤外線信号を制御するための以下のエンティティが含まれます：

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_07.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## コア機能詳細（ファクトリーファームウェア）

デバイスを復元したり、ファームウェアを更新したい場合は、下のボタンからジャンプできます。XIAO Gadget Direct Flash Firmwareに特化したページを作成しました。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://gadgets.seeed.cc/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Flash the Firmwave</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### IR信号学習

IR Mateに新しいリモコンコマンドを教える必要がある場合は、以下の手順に従ってください。ファクトリーファームウェアのコアインターフェースには、**信号スロット選択リスト**と、**Learn**および**Send**ボタンが含まれています。

1. Home Assistantデバイスダッシュボードで、まず**"Signal"**という名前のドロップダウン選択リストを見つけます。
2. ドロップダウンリストをクリックし、使用したい信号スロットを選択します。例えば、**"signal_1"**を選択します。
3. 選択したら、**"Learn"**ボタンを見つけて、その横の**"PRESS"**をクリックします。
4. XIAO IR Mateは学習モードに入り、**連続的に振動**を開始し、ペアリングを開始できることを示します。
5. 元のリモコンをIR Mateの赤外線受信窓に向けて、学習したいボタンを短く押します。
6. IR Mateが信号を正常に受信・記録した後、**振動が停止**し、学習が成功したことを示します。
7. この時点で、**"Is Learned Signal"**という名前のステータスインジケーターが自動的に"ON"になり、ドロップダウンリストで現在選択されている信号スロット（つまり"signal_1"）に信号が保存されたことを示します。

### IR信号送信

信号が正常に学習されたら、いつでも送信できます。

1. **"Signal"**ドロップダウンリストで、送信したい信号スロットが選択されていることを確認します。例えば、**"signal_1"**です。
2. **"Send"**ボタンを見つけて、その横の**"PRESS"**をクリックします。
3. XIAO IR Mateは、現在選択されているスロットに保存されている信号を、3つの赤外線エミッターを通じて即座に送信します。
4. **注意**: 信号を教えたことがない信号スロットをドロップダウンリストで選択した場合、送信ボタンをクリックしても効果はありません。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_08.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## 物理的な操作とステータス表示

HA制御に加えて、物理的な操作を通じてデバイスを理解し、制御することもできます。

### ステータスインジケーターライト（白色LED）

- **ゆっくり点滅（1Hz）**：デバイスがWi-Fiネットワークへの接続を待機しています。
- **点灯**：デバイスがWi-Fiネットワークに正常に接続され、正常に動作しています。

### 振動フィードバック

- **短い振動（100ms）**：デバイスに触れた時など、一般的な操作確認に使用されます。
- **長い振動（500ms）**：学習モードに入る時や工場出荷時リセットを実行する時など、重要なステータス警告に使用されます。

### RESETボタン

- **短押し（1秒以内）**：デバイスが再起動し、短い振動を伴います。デバイスが応答しなくなった場合に非常に有用です。
- **長押し（5秒以上）**：デバイスが**工場出荷時リセットを実行**します。この操作により、**保存されたすべてのWi-Fi認証情報と学習した10個の赤外線信号がすべて消去**されます。この操作が実行されると、デバイスは長い振動を発してプロンプトを出します。完了後、デバイスは再起動し、初期の設定待機状態（LED点滅）に戻ります。

## 高度な使用法 - スマートエアコン制御

工場出荷時ファームウェアが提供する基本的な「記録-再生」モードは汎用的ですが、エアコンのような複数の状態（温度、モード、ファン速度など）を持つデバイスを制御する際には扱いにくい場合があります。より細かく、よりインテリジェントなエアコン制御を実現するために、専用のESPHomeファームウェアをフラッシュして、XIAO IR Mateを「赤外線信号リピーター」から真の「スマートエアコンコントローラー」に変換することができます。

この章では、Greeエアコンを詳細な例として使用しますが、これが唯一の選択肢ではありません。ESPHomeの強力なエコシステムは多数のエアコンブランドをサポートしており、このガイドの概念に従って設定コードに軽微な変更を加えることで、Midea、Daikin、Panasonicなどの他のブランドのスマート制御を簡単に実現できます。

### 主な利点

- **ステートフル制御**：単純な再生はもう必要ありません。HAで直接「24°C、冷房、自動ファン」を設定でき、デバイスは即座に正しい赤外線コマンドを生成して送信します。
- **より使いやすいUI**：HAで標準のClimateカードとして表示され、操作が直感的になります。
- **スペースの節約**：各温度やモードごとに個別の信号を学習する必要がなく、1つの設定ですべてのエアコン機能を制御できます。

### 前提条件

1. **ESPHomeのインストール**：まだインストールしていない場合は、Home AssistantアドオンストアからESPHomeアドオンをインストールして開始してください。
2. **エアコンブランドプロトコルの確認**：ESPHomeは多くのエアコンブランドプロトコル（Gree、Midea、Daikinなど）をサポートしています。正しいプロトコルを選択するために、お使いのエアコンのブランドを知る必要があります。

### カスタムファームウェアのフラッシュ

1. **新しいデバイス設定の作成**
      - HAのESPHomeインターフェースを開きます。
      - 右下の**「+ NEW DEVICE」**ボタンをクリックし、ポップアップウィンドウで**「Continue」**をクリックします。
      - デバイスに名前を付け（例：**xiao-ir-ac-controller**）、ボードタイプとして**Seeed Studio XIAO ESP32C3**を選択します。
2. **設定ファイルの編集**
      - 新しく作成されたデバイスカードの**EDIT**ボタンをクリックして、YAML設定エディターに入ります。
      - エディター内のすべてのデフォルトコンテンツを削除します。
      - 以下のコードを**完全にコピーしてペースト**してエディターに貼り付けます：

<Details>

```yaml title="seeed-ir-v1.yaml"
substitutions:
  name: "seeed-ir"
  friendly_name: "Gree AC Controller" # You can customize a more friendly name
  version: "v1"

esphome:
  name: "${name}-${version}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: True

esp32:
  board: esp32-c3-devkitm-1
  framework:
    type: arduino

globals:
  - id: is_wifi_connected
    type: bool
    initial_value: 'false'
  - id: reset_press_time
    type: uint32_t
    initial_value: '0'
  - id: touch_count
    type: int
    restore_value: no
    initial_value: '0'
  - id: touch_timer
    type: unsigned long
    restore_value: no
    initial_value: '0'

logger:
  level: INFO

api:

ota:
  platform: esphome
  password: "15afb09b5aba7b3d6a6ba01180c60df5"  # Change this to your desired password

wifi:
  # ssid: !secret wifi_ssid
  # password: !secret wifi_password
  on_connect:
    - globals.set: {id: is_wifi_connected, value: 'true'}
    - light.turn_on: rgb_light
  on_disconnect:
    - globals.set: {id: is_wifi_connected, value: 'false'}
  ap:
    password: "12345678"

captive_portal:

remote_transmitter:
  id: default_ir_transmitter
  pin: GPIO3
  carrier_duty_percent: 50%
  rmt_channel: 0

remote_receiver:
  id: default_ir_receiver
  pin:
    number: GPIO4
    inverted: true
  rmt_channel: 2
  dump: raw # Keep for learning or debugging other infrared codes

# Gree Climate Control
climate:
  - platform: gree
    name: "Gree Air Conditioner" # The name displayed in Home Assistant
    id: gree_ac    # Internal ID used by ESPHome, for touch button control
    # --- Required configuration for the gree platform ---
    model: "yan"   # [IMPORTANT] This is a required parameter. Gree has multiple infrared protocols.
                   # You may need to try the following values to find the one that suits your air conditioner:
                   # "generic", "yan", "yaa", "yac", "yac1fb9", "yx1ff", "yag"
                   # "yan" is a common starting point.
    # Optional configuration:
    # sensor: my_temperature_sensor_id # If you have an external temperature sensor
    supports_cool: true
    supports_heat: true # If your Gree AC does not support heating, set to false
    # Note: According to the documentation, the gree platform does not seem to support receiver_id to sync the state from the original remote

binary_sensor:
  - platform: gpio
    id: touch_pad
    pin:
      number: GPIO5
      mode: INPUT_PULLDOWN
    on_state:
      then:
        - if:
            condition:
              binary_sensor.is_on: touch_pad
            then:
              - script.execute: vibe_short
              - lambda: |-
                  unsigned long current_time = millis();
                  if (current_time - id(touch_timer) < 300) {
                    id(touch_count)++;
                  } else {
                    id(touch_count) = 1;
                  }
                  id(touch_timer) = current_time;
                  ESP_LOGD("touch_pad", "Touch detected. Current count: %d", id(touch_count));
                  if (id(check_touch_actions_script).is_running()) {
                    id(check_touch_actions_script).stop();
                  }
                  id(check_touch_actions_script).execute();

  - platform: gpio
    id: reset_button
    pin:
      number: GPIO9 # Strapping Pin!
      mode: INPUT_PULLUP
    filters:
      - invert
    on_press:
      then:
        - lambda: id(reset_press_time) = millis();
    on_release:
      then:
        - lambda: |-
            uint32_t press_duration = millis() - id(reset_press_time);
            if (press_duration < 5000) {
              id(vibe_short).execute();
              ESP_LOGI("reset_button", "Short press: Restarting device.");
              ESP.restart();
            } else {
              id(vibe_long).execute();
              ESP_LOGI("reset_button", "Long press: Activating factory reset.");
              id(factory_reset_switch).turn_on();
            }

output:
  - platform: gpio
    id: vibration_output
    pin: GPIO6

switch:
  - platform: output
    id: vibration_switch
    name: "Vibration Motor"
    output: vibration_output
  - platform: factory_reset
    id: factory_reset_switch
    name: "Factory Reset"

light:
  - platform: esp32_rmt_led_strip
    rgb_order: GRB
    pin: GPIO7
    num_leds: 1
    rmt_channel: 1
    chipset: ws2812
    name: "RGB Status Light"
    id: rgb_light
    default_transition_length: 0s
    on_turn_on:
      - light.control:
          id: rgb_light
          red: 1.0
          green: 1.0
          blue: 1.0
          brightness: 0.7
    effects:
      - addressable_scan:
      - addressable_rainbow:

script:
  - id: vibe_short
    then:
      - switch.turn_on: vibration_switch
      - delay: 100ms
      - switch.turn_off: vibration_switch
  - id: vibe_long
    then:
      - switch.turn_on: vibration_switch
      - delay: 500ms
      - switch.turn_off: vibration_switch

  - id: check_touch_actions_script
    mode: restart
    then:
      - delay: 350ms
      - if: # Single-click action
          condition:
            lambda: 'return id(touch_count) == 1;'
          then:
            - logger.log: "Single Click: Toggling Gree AC Power"
            - lambda: |-
                // [IMPORTANT] Ensure the climate ID used below is gree_ac
                if (id(gree_ac).mode == climate::CLIMATE_MODE_OFF) {
                  ESP_LOGD("touch_action", "Gree AC is OFF, attempting to turn to COOL mode.");
                  auto call = id(gree_ac).make_call();
                  call.set_mode(climate::CLIMATE_MODE_COOL);
                  call.set_target_temperature(25);
                  call.perform();
                } else {
                  ESP_LOGD("touch_action", "Gree AC is ON, attempting to turn OFF.");
                  auto call = id(gree_ac).make_call();
                  call.set_mode(climate::CLIMATE_MODE_OFF);
                  call.perform();
                }
          else: # If not a single click, then check for a double click
            - if:
                condition:
                  lambda: 'return id(touch_count) == 2;'
                then: # Double-click action
                  - logger.log: "Double Click: Gree AC Temperature Up"
                  - lambda: |-
                      // [IMPORTANT] Ensure the climate ID used below is gree_ac
                      if (id(gree_ac).mode != climate::CLIMATE_MODE_OFF) {
                        float current_temp = id(gree_ac).target_temperature;
                        float max_temp = id(gree_ac).get_traits().get_visual_max_temperature();
                        if (current_temp < max_temp) {
                           ESP_LOGD("touch_action", "Increasing Gree AC temp from %.1f to %.1f", current_temp, current_temp + 1.0f);
                           auto call = id(gree_ac).make_call();
                           call.set_target_temperature(current_temp + 1.0f);
                           call.perform();
                        } else {
                          ESP_LOGD("touch_action", "Gree AC already at max temp: %.1f", max_temp);
                        }
                      }
                else: # If not a double click, then check for a triple click
                  - if:
                      condition:
                        lambda: 'return id(touch_count) == 3;'
                      then: # Triple-click action
                        - logger.log: "Triple Click: Gree AC Temperature Down"
                        - lambda: |-
                            // [IMPORTANT] Ensure the climate ID used below is gree_ac
                            if (id(gree_ac).mode != climate::CLIMATE_MODE_OFF) {
                              float current_temp = id(gree_ac).target_temperature;
                              float min_temp = id(gree_ac).get_traits().get_visual_min_temperature();
                              if (current_temp > min_temp) {
                                 ESP_LOGD("touch_action", "Decreasing Gree AC temp from %.1f to %.1f", current_temp, current_temp - 1.0f);
                                 auto call = id(gree_ac).make_call();
                                 call.set_target_temperature(current_temp - 1.0f);
                                 call.perform();
                              } else {
                                ESP_LOGD("touch_action", "Gree AC already at min temp: %.1f", min_temp);
                              }
                            }
                      else: # Other click counts
                        - logger.log:
                            level: WARN
                            format: "Touch Action: No specific action defined for %d clicks."
                            args: ['id(touch_count)']
      # Reset the touch count
      - lambda: 'id(touch_count) = 0; ESP_LOGD("check_touch_actions", "Touch count reset to 0.");'

interval:
  - id: blink_rgb_interval
    interval: 500ms
    then:
      - if:
          condition:
            lambda: 'return !id(is_wifi_connected);'
          then:
            - lambda: |-
                static bool intervalos_led_state = false;
                intervalos_led_state = !intervalos_led_state;
                auto call = id(rgb_light).turn_on();
                if (intervalos_led_state) {
                  call.set_rgb(0, 0, 1);
                  call.set_brightness(0.5);
                } else {
                  call.set_rgb(0, 0, 0); // Off
                }
                call.perform();
```

</Details>

3. **設定をカスタマイズする**
      - **Wi-Fi**: `!secret` ファイルを使用しない場合は、`wifi:` セクションのコメントを外し、`Your_WiFi_SSID` と `Your_WiFi_Password` を自分のWi-Fi情報に置き換えてください。
      - **正しいACプロトコルを選択する**: これが最も重要なステップです！この例では `platform: gree` を使用しています。お使いのエアコンがGreeでない場合は、お使いのブランドのプラットフォームに置き換えてください。サポートされているブランドを見つける方法は？[ESPHome Climate Components](https://esphome.io/components/climate/index.html) ページをご覧ください。このページには、サポートされているすべてのブランドとそのプラットフォーム名（例：`daikin`、`midea`、`panasonic_ac` など）がリストされています。
          - 対応するプラットフォームを選択した後、そのプラットフォームのドキュメントに従って、`model` やサポートされているモードなどのパラメータを微調整する必要がある場合もあります。
4. **コンパイルとフラッシュ**
      - YAML設定を保存します。
      - XIAO IR MateをHAが動作しているコンピュータにUSBケーブルで接続します。
      - デバイスカードの **INSTALL** ボタンをクリックします。
      - **"Plug into this computer"** オプションを選択します。
      - ESPHome がファームウェアをコンパイルし、ブラウザを通じてデバイスにフラッシュします。画面の指示に従ってプロセスを完了してください。
      - フラッシュが成功すると、デバイスは自動的に再起動し、設定されたWi-Fiに接続します。

### Home Assistant での使用方法

フラッシュと再起動後、デバイスは Home Assistant に新しいClimateエンティティ（例：`climate.gree_air_conditioner`）として表示されます。ダッシュボードに「Thermostat Card」を追加することで、完全に機能するACコントロールパネルを取得でき、ネイティブなスマートエアコンのように温度、モード、ファン速度、スイングを自由に調整できます！

### さらなる展望：発想を広げよう！

おめでとうございます！これで、XIAO IR Mateの2つの主要な用途をマスターしました。1つは箱から出してすぐに使える「汎用リモコン学習」機能、もう1つは精密なエアコン制御のための「プロフェッショナル気候コントローラー」モードです。

しかし、ここで止まらないでください。これはまだ始まりに過ぎません！XIAO IR Mateの本当の楽しさは、その驚くべき柔軟性にあります。これをあなたが定義する「創造的な積み木」と考えてください。想像をはるかに超えるものを構築するために使用できます。以下は、あなたにインスピレーションを与える2つの発想を広げるアイデアです：

#### アイデア1：古いリモコンを汎用シーンスイッチとして復活させる

**応用シナリオ**

周りを見回してください。使わなくなった古いリモコンがたくさん転がっていませんか？古いテレビ、DVD、ステレオのリモコンで、たくさんのボタンがあり、操作感も良いのに、今は引き出しの中でほこりをかぶっているだけ。これらのリモコンのボタンを使って、スマートライト、ロボット掃除機、さらには複雑な「おかえりなさい」シーンをコントロールできたら素晴らしいと思いませんか？

**動作原理**

このアイデアの核心は、XIAO IR Mateを「送信機」から「リスナー」に変換することです。もはや他のデバイスを積極的に制御するのではなく、古いリモコンからの信号を静かに聞き取り、Home Assistant に「信号を聞きました、あなたが何をするか決めてください！」と伝えます。

- **実装手順**

  1. **「リスナー」ファームウェアを設定する：** ESPHome ファームウェアで、核心となる設定は `remote_receiver` コンポーネントです。デバイスの電源投入後の唯一の仕事は、IR信号を「聞き取る」ことです。

  2. **各ボタンの「秘密コード」を特定する：** 古いリモコンを取り、デバイスに向けて任意のボタンを押します。ESPHome ログで、そのボタンの固有のIRコード（`RAW` データの文字列や `NEC` プロトコルコードなど）が表示されます。この「秘密コード」をメモしてください。

  3. **HAで自動化ルールを作成する：** Home Assistant で、トリガー条件を「XIAO IR Mateが特定のIR秘密コードを検出したとき」とする自動化を設定します。

  4. **アクションを定義する：** ルールのアクションは何でも構いません！例えば：

     - **TVリモコンの「音量+」ボタン** を検出したとき -> **ロボット掃除機を開始** して清掃を始める。

     - **Apple Remoteの「再生」ボタン** を検出したとき -> **バスルームのライトを点灯** する。

     - **DVDリモコンの「赤」ボタン** を検出したとき -> 「外出モード」シーンを実行する。

- **このアプローチの利点**

  - **アップサイクリングと環境に優しい：** 使わないハードウェアに新しい命を与え、電子廃棄物を再び活用することで、お金を節約し、環境にも良い影響を与えます。

  - **本物の触覚ボタン体験：** タッチスクリーンと比較して、数十の異なる、しっかりとした操作感のあるボタンを持つ物理的なリモコンは、多くのシナリオでより直接的で満足のいくものです。

  - **高いWAF（Wife Acceptance Factor）：** スマートフォンアプリやスマートスピーカーに慣れていない家族（高齢者や子供など）にとって、「このボタンを押してライトを点ける」と伝えることは、最も直感的で学習しやすいインタラクションです。

  - **充電不要の「スマートスイッチ」：** 従来のリモコンの電池は1〜2年持つことが多く、頻繁に充電が必要な多くのスマートガジェットよりもはるかに便利です。

#### **アイデア2：汎用「IoTマジックボタン」を作成する**

**核心概念**

デバイスのタッチボタンは本当にIR制御だけのためのものでしょうか？もちろん違います！これを家の中の **何でも** をコントロールするマジックボタンに変えることができます。鍵は「分離」することです—「ボタンを押す」という物理的なアクションと「実際に何が起こるか」というスマートアクションを完全に分離することです。

- **実装手順**

  1. **ボタンを単なる「レポーター」にする：** ファームウェアで、タッチボタン（シングルタップ、ダブルタップ、長押し用）を特定のタスクを実行するのではなく、Home Assistant に「イベント通知」を送信するだけに設定します。例えば、ダブルタップでは、HAに「やあ！ダブルタップされました！」と報告するだけです。

  2. **HAを「司令官」にする：** Home Assistant で、ボタンからのこれらの様々な「報告」（イベント）を特別に聞き取る自動化を作成します。

  3. **すべてを接続し、何でもする：** HAが報告を受信すると、家の中の任意のデバイスに行動を命令できます！

     - **「シングルタップ」** 報告を受信 -> 家の中のすべての **Zigbee ライト** をオン/オフ切り替え。

     - **「ダブルタップ」** 報告を受信 -> **ロボット掃除機** に清掃開始を命令。

- **「長押し」**レポートを受信 -> 「映画モード」シーンを実行し、カーテンを閉め、照明を暗くし、プロジェクターとサウンドシステムをオンにします。

- **このアプローチの利点**

  - **境界を破り、無限の可能性：** あなたのタッチボタンはもはや単なる「IRリモコン」の一部ではなく、スマートホーム全体の物理スイッチとなり、HAに接続されたあらゆるデバイスを制御できます。

  - **柔軟に定義し、気まぐれに変更：** 今日はダブルタップで掃除機を起動しますが、明日は音楽を再生したい？HAインターフェースでオートメーションを編集するだけで、ファームウェアに触れる必要は全くありません。

  - **最も直感的なインタラクション：** 家族に最もシンプルな制御方法を提供します。触覚フィードバック付きの物理ボタンは、スマートフォンアプリを開くよりもはるかに便利でエレガントです。

要するに、XIAO IR Mateを単なるIRツールとして見ないでください。Wi-Fiに接続された小さなロボットとして考えてください。触覚と「声」（IR エミッター）を持っています。それができることは、あなたの想像力によってのみ制限されます！

## よくある質問（FAQ）

> **Q: スマートフォンでXIAO IR Mateのホットスポットが見つからないのはなぜですか？**
> **A:** デバイスがType-C経由で適切に電源供給されていることを確認してください。白色LEDが点滅しているかチェックしてください。ライトが消えている場合は、ケーブルまたは電源を変更してみてください。デバイスが以前にネットワークで正常に設定されている場合、ネットワーク接続が失敗するかRESETボタンを長押しして工場出荷時設定にリセットされない限り、再びAPホットスポットを作成しません。

> **Q: IR学習が失敗した場合はどうすればよいですか？（工場出荷時ファームウェア）**
> **A:** 元のリモコンのバッテリーが十分に充電されており、IR Mateの受信機（通常は黒い半透明のコンポーネント）にできるだけ近づけて保持していることを確認してください。また、強い光の下や他の赤外線干渉源の近くで学習プロセスを実行することは避けてください。

> **Q: デバイスがHAでオフラインと表示されますか？**
> **A:** 家庭のWi-Fiが正常に動作しており、IR MateがWi-Fi信号範囲内にあることを確認してください。RESETボタンを短押ししてデバイスを再起動してみることができます。

> **Q: カスタムファームウェアをフラッシュした後、工場出荷時ファームウェアを復元するにはどうすればよいですか？**
> **A:** 工場出荷時ファームウェアの`.bin`ファイルまたはそのESPHome YAMLソースファイルを取得し、ESPHome経由で再度フラッシュしてカスタムファームウェアを上書きする必要があります。

> **Q: 学習した信号（工場出荷時ファームウェア）または AC制御（高度なファームウェア）をオートメーションで使用するにはどうすればよいですか？**
> **A:** HAのオートメーションまたはスクリプトエディターで、「サービスを呼び出す」を選択してください。

## リソース

- **[ZIP]** [ハードウェア](https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO_IR_REMOTE_hardware.zip)
- **[ZIP]** [ソフトウェア](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_smart_ir_mate)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
