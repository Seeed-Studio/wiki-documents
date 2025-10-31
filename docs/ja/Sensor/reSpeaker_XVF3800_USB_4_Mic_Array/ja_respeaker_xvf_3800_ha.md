---
description: ReSpeaker XVF3800 USB 4-Mic Arrayの力を体験してください—AEC、ビームフォーミング、ノイズ抑制、360°音声キャプチャを備えた高度な円形マイクアレイです。コンパクトなXIAO ESP32S3と組み合わせることで、スマートデバイス、ロボティクス、IoTアプリケーション向けの高性能音声制御を実現します。音声コマンドを使用してデバイスを制御するHome Assistantとのシームレスな統合をデモンストレーションします。

title: Home Assistantによるスマートホーム音声制御

keywords:
- reSpeaker
- XIAO
- ESP32S3
- Home Assistant
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /ja/respeaker_xvf3800_xiao_home_assistant
last_update:
  date: 9/17/2025
  author: Kasun Thushara
---

## 概要

新しい**ReSpeaker XMOS XVF3800 with XIAO ESP32S3**でスマートスペースと会話しましょう。音声を使って照明をつけたり、音楽を大きくしたり、天気を聞いたりできます。

この章では、ReSpeaker XMOS XVF3800 with XIAO ESP32S3 HA Voice AssistantとSonoffスマートスイッチを接続して、音声による照明スイッチの制御を実現します。

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/iqlsNezHYuE"
          title="ReSpeaker XVF3800 with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## 必要なハードウェア

<table align="center">
  <tr>
      <th>ReSpeaker XVF3800 with XIAO ESP32S3</th>
        <th>Home Assistantデバイス</th>
        <th>Sonoff BASICR2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home_Assistant_Green/HAyellow.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991074-sonoff-basicr2-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Standard-Version-with-CM4-p-5809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Sonoff-BasicR2-p-5514.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

## ファームウェアアップデート

最高の再生体験を得るために、XMOSファームウェアをアップデートする必要があります。
ファームウェアをここからダウンロードしてください。コンピューターでReSpeaker XMOS XVF3800 with XIAO ESP32S3を接続し、ガイドに従って実行してください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/firmware_1.png" alt="pir" width={800} height="auto" /></p>

:::note
XVF3800マイクアレイは動作するために12.288 MHz MCLKが必要ですが、ESPHome（Home Assistantで使用）はAPI制限のためそれを生成できません。このファームウェアはXVF3800をI2Sマスターとして動作させるため、ESP32からのMCLKを必要とせずに独自のクロックを生成できます。
私たちのファームウェアはこの制限を修正し、マイクがHome Assistantで正常に動作するようにします。
:::

ファームウェアは[こちら](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)からダウンロードできます

インストールガイドは[こちら](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#update-firmware)です

## ReSpeaker XMOS XVF3800 with XIAO ESP32S3の準備

**Home Assistant > Settings > Add-ons**に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_Settings.PNG" alt="pir" width={800} height="auto" /></p>

**Add-on Store**をクリックします（通常は右下にあります）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_addon.PNG" alt="pir" width={800} height="auto" /></p>

**Official add-ons**の下で、**ESPHome Device Builder**を検索してインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome.PNG" alt="pir" width={800} height="auto" /></p>

インストール後、**Start**をクリックしてESPHomeアドオンを実行します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_Start.PNG" alt="pir" width={800} height="auto" /></p>

簡単にアクセスできるように、**Start on Boot、Watchdog、Show in Sidebar**を有効にします。

Home Assistantのサイドバーから、**ESPHome Builder**に移動します。

**+ NEW DEVICE**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_add_new.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_device.PNG" alt="pir" width={500} height="auto" /></p>

プロンプトが表示されたら、**SKIP**をクリックします – 設定を手動で作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_skip.PNG" alt="pir" width={500} height="auto" /></p>

新しいデバイスエントリを選択し、**EDIT**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_respeaker_device.PNG" alt="pir" width={800} height="auto" /></p>

内容をカスタム**YAML設定**に置き換えます

:::important
YAMLファイルは[こちら](https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration/tree/main/config)から見つけることができます
:::

YAMLが保存されたら、**INSTALL**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_yaml.PNG" alt="pir" width={800} height="auto" /></p>

**Manual Download**を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_manual.PNG" alt="pir" width={800} height="auto" /></p>

ファームウェアのコンパイルを待ちます。

生成された.binファームウェアファイルをコンピューターにダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_factory.PNG" alt="pir" width={800} height="auto" /></p>

**ESP32-S3**ボード（XVF3800が接続された状態）を**USB Type-Cケーブル**を使用してPCに接続します。

ChromeまたはEdgeで[**Web-ESPHome**](https://web.esphome.io/?dashboard_wizard)を開きます。

**CONNECT**をクリックし、適切なシリアルポートを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/connect-port.png" alt="pir" width={800} height="auto" /></p>

接続されたら、**INSTALL**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_install.PNG" alt="pir" width={500} height="auto" /></p>

先ほどダウンロードした.binファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_bin_write.PNG" alt="pir" width={500} height="auto" /></p>

インストールが完了するまで待ちます（数分かかる場合があります）。

成功すると、確認メッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_congrats.PNG" alt="pir" width={500} height="auto" /></p>

**Home Assistant > Settings > Devices & Services**に戻ります。

発見された統合として**ESPHome**がリストされているはずです。

**CONFIGURE**をクリックし、次に**Submit**をクリックしてセットアップを完了します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_discover.PNG" alt="pir" width={800} height="auto" /></p>

## スマートデバイスの追加

メーカーのユーザーマニュアルに従って**Sonoff BASICR2**デバイスをセットアップします。eWeLinkアカウントを作成する必要があります。

### HACSのインストール

まだインストールされていない場合は、公式ガイドに従って[**Home Assistant Community Store**](https://hacs.xyz/docs/use/)をセットアップしてください：

サイドバーから**HACS**を開きます。
検索セクションで**Sonoff LAN**を検索します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_HACS.PNG" alt="pir" width={800} height="auto" /></p>

**Install**をクリックして統合を追加します。
変更を適用するためにHome Assistantを再起動します。

### Sonoff

**Settings → Devices & Services**に移動します。
**Add Integration**をクリックします。
**Sonoff**を検索して選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_sonoff.PNG" alt="pir" width={800} height="auto" /></p>

認証のために**eWeLinkアカウント認証情報**を入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/credentials.png" alt="pir" width={500} height="auto" /></p>

正常に接続されると、関連するエンティティが以下の場所にリストされます：
**Settings → Devices & Services → Entities**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/sonoff-id.png" alt="pir" width={800} height="auto" /></p>

## Nabu Cloudによる音声アシスタント

このデモでは、音声を使用して**Home Assistant Cloud (Nabu Casa)**に接続する方法を紹介しています。セットアップは簡単で、**1ヶ月間の無料トライアル**を利用してその全機能を探索できます。
内蔵の**ウェイクワード**「Okay Nabu」を使用して、音声コマンドを簡単にトリガーし、複雑な設定なしに**いつでも、どこでも**デバイスやサービスと**シームレスに統合**できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice_nabu.PNG" alt="pir" width={800} height="auto" /></p>

## YAML の説明

### WiFi

このセクションでは、デバイスがWi-Fiに接続する方法を設定します。

```yml
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
```

- **ssid & password**: secrets.yamlファイルから取得されるため、パスワードが平文で表示されません。
- **Events**: Wi-Fi接続時または切断時にアクションを実行します：
  - on_connect:
    - BLE improv設定を停止します。
    - control_ledsスクリプトを実行します（Wi-Fi接続時のLED効果）。

  - on_disconnect:
    - control_ledsスクリプトを実行します（Wi-Fi切断時のLED効果）。

### I²C バス

I²Cは、ESP32がマイクやオーディオコーデックなどの他のチップと通信するための通信ラインです。

```yml
i2c:
  id: internal_i2c
  sda: GPIO5
  scl: GPIO6
  scan: true
  frequency: 100kHz
```

- **id**: 他の場所でこのバスを参照するための名前。
- **sda** / scl: データとクロックに使用されるピン。
- **scan**: 起動時に接続されたデバイスをチェックします。
- **frequency**: 通信速度（100kHzが標準）。

### スイッチ

<details>
<summary>スイッチ</summary>

```yml
switch:
  # Mute Sound Switch.
  - platform: template
    id: mute_sound
    name: Mute/unmute sound
    icon: "mdi:bullhorn"
    entity_category: config
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON
  # Wake Word Sound Switch.
  - platform: template
    id: wake_sound
    name: Wake sound
    icon: "mdi:bullhorn"
    entity_category: config
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON
  # Internal switch to track when a timer is ringing on the device.
  - platform: template
    id: timer_ringing
    optimistic: true
    internal: true
    restore_mode: ALWAYS_OFF
    on_turn_off:
      # Disable stop wake word
      - micro_wake_word.disable_model: stop
      - script.execute: disable_repeat
      # Stop any current annoucement (ie: stop the timer ring mid playback)
      - if:
          condition:
            media_player.is_announcing:
          then:
            media_player.stop:
              announcement: true
      # Set back ducking ratio to zero
      - mixer_speaker.apply_ducking:
          id: media_mixing_input
          decibel_reduction: 0
          duration: 1.0s
      # Refresh the LED ring
      - script.execute: control_leds
    on_turn_on:
      # Duck audio
      - mixer_speaker.apply_ducking:
          id: media_mixing_input
          decibel_reduction: 20
          duration: 0.0s
      # Enable stop wake word
      - micro_wake_word.enable_model: stop
      # Ring timer
      - script.execute: ring_timer
      # Refresh LED
      - script.execute: control_leds
      # If 15 minutes have passed and the timer is still ringing, stop it.
      - delay: 15min
      - switch.turn_off: timer_ringing
  # Defines if alarm is active
  - platform: template
    optimistic: true
    restore_mode: RESTORE_DEFAULT_OFF
    id: alarm_on
    icon: mdi:bell-badge
    name: "Alarm on"
    on_turn_on:
      - script.execute: control_leds
    on_turn_off:
      - script.execute: control_leds
```

</details>

スイッチは、Home Assistantでソフトウェア制御される「ボタン」です。音声、タイマー、アラームなどの機能を制御します。

**ウェイクワード音声スイッチ**: ウェイクワードオーディオを制御します。

```yml
# Wake Word Sound Switch.
  - platform: template
    id: wake_sound
    name: Wake sound
    icon: "mdi:bullhorn"
    entity_category: config
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON
```

**タイマー鳴動内部スイッチ**:

- タイマーがアクティブかどうかを追跡します。
- on_turn_on: 他のオーディオを-20dBダッキング、タイマー音開始、LED更新、15分後に自動停止。
- on_turn_off: タイマー停止、音量復元、LED更新。

```yml
# Internal switch to track when a timer is ringing on the device.
  - platform: template
    id: timer_ringing
    optimistic: true
    internal: true
    restore_mode: ALWAYS_OFF
    ...
    ...
```

**アラームオンスイッチ**:

```yml
# Defines if alarm is active
  - platform: template
    optimistic: true
    restore_mode: RESTORE_DEFAULT_OFF
    id: alarm_on
    ...
    ...
```

- アラームの状態を追跡します。
- オン/オフ時にLEDスクリプトを実行します。

### センサー

<details>
<summary>センサー</summary>

```yml
number:
  - platform: template
    id: led_ring_brightness
    name: "LED Ring Brightness"
    icon: mdi:brightness-6
    entity_category: config
    optimistic: true
    restore_value: true
    min_value: 0.4
    max_value: 1.0
    step: 0.05
    initial_value: 0.8
    mode: slider

sensor:
  - platform: template
    id: next_timer
    name: "Next timer"
    update_interval: never
    disabled_by_default: true
    device_class: duration
    unit_of_measurement: s
    icon: "mdi:timer"
    accuracy_decimals: 0

text_sensor:
  - platform: template
    id: next_timer_name
    name: "Next timer name"
    icon: "mdi:timer"
    disabled_by_default: true
  - platform: template
    name: "Alarm time"
    id: alarm_time
    icon: mdi:bell-ring
  - platform: template
    name: "Current device time"
    id: current_time
    icon: mdi:clock
```

</details>

このYAMLブロックは、タイマー、アラーム、LED輝度のコントロールとセンサーを追加します。スライダーでLEDリングの輝度を調整し、次のタイマー（時間+名前）を追跡し、Home Assistantでアラーム時間とデバイスの現在時刻を表示できます。

**LEDリング輝度**:

```yml
number:
  - platform: template
    id: led_ring_brightness
    name: "LED Ring Brightness"
    icon: mdi:brightness-6
    ...
```

- ユーザーがスライダーで輝度を調整できます。
- min_value / max_valueで制限を定義します。
- restore_valueで再起動後も前の設定を保持します。

**次のタイマー**

```yml
sensor:
  - platform: template
    id: next_timer
    name: "Next timer"
    update_interval: never
    ...
```

- 次のタイマーの残り時間を表示します。
- タイマーが変更された時のみ更新します（リソースを節約）。

**アラーム時間とデバイス時間**

```yml
text_sensor:
  - platform: template
    id: next_timer_name
    name: "Next timer name"
    icon: "mdi:timer"
    ...
```

- 現在のアラームとESP32システム時間を表示します。

### インターバルでのLED効果

```yml
interval:
  - interval: 50ms
    id: led_animation_interval
    then:
      - lambda: |-
          if (id(volume_display_active)) {
            id(update_volume_display_effect).execute();
            return;
          }
          std::string effect = id(current_led_effect);
          if (effect == "off") {
            return;
          } else if (effect == "breathe") {
            id(update_breathe_effect).execute();
          } else if (effect == "rainbow") {
            id(update_rainbow_effect).execute();
          } else if (effect == "comet_cw") {
            id(update_comet_cw_effect).execute();
          } else if (effect == "comet_ccw") {
            id(update_comet_ccw_effect).execute();
          } else if (effect == "twinkle") {
            id(update_twinkle_effect).execute();
          } else if (effect == "timer_tick") {
            id(update_timer_tick_effect).execute();
          } else if (effect == "led_beam") {
            id(update_led_beam_effect).execute();
          }
```

- インターバルはバックグラウンドでコードを繰り返し実行します。
- 50ms: 1秒間に20回コードを実行します。
- システム状態または選択された効果に基づいてLEDアニメーションを制御します。

### LED制御

<details>
<summary>LED制御</summary>

```yml
 script:
  # =========================================================================
  # == Centralized script to control all LED effects ==
  # =========================================================================
  - id: led_set_effect
    mode: restart
    parameters:
      effect: std::string
      r: float
      g: float
      b: float
      speed: float
    then:
      - lambda: |-
          // Update global variables with the new parameters
          id(led_ring_color_r) = r;
          id(led_ring_color_g) = g;
          id(led_ring_color_b) = b;
          id(led_ring_speed) = speed;
          id(current_led_effect) = effect;

          // Handle the two types of effects: Off and Animated
          if (effect == "off") {
            uint32_t colors[12] = {0};
            id(respeaker).set_led_ring(colors);
          } else {
            id(last_led_update_time) = millis(); // Reset timer for smooth animation start
          }

  # Individual update scripts for each animated effect
  - id: update_breathe_effect
    then:
      - lambda: |-
          static float phase = 0.0f;
          uint32_t now = millis();
          float dt = (now - id(last_led_update_time)) / 1000.0f;
          id(last_led_update_time) = now;

          phase += dt * id(led_ring_speed);
          while (phase >= 1.0f) phase -= 1.0f;

          float master_brightness = id(led_ring_brightness).state;
          float breath_brightness = 0.5f * (1.0f + sinf(phase * 2.0f * M_PI)) * master_brightness;

          uint8_t r = (uint8_t)(id(led_ring_color_r) * 255.0f * breath_brightness);
          uint8_t g = (uint8_t)(id(led_ring_color_g) * 255.0f * breath_brightness);
          uint8_t b = (uint8_t)(id(led_ring_color_b) * 255.0f * breath_brightness);
          uint32_t current_color = (r << 16) | (g << 8) | b;

          uint32_t colors[12];
          for (int i = 0; i < 12; i++) colors[i] = current_color;
          id(respeaker).set_led_ring(colors);

  - id: update_rainbow_effect
    then:
      - lambda: |-
          static float hue_offset = 0.0f;
          uint32_t now = millis();
          float dt = (now - id(last_led_update_time)) / 1000.0f;
          id(last_led_update_time) = now;

          hue_offset += dt * id(led_ring_speed);
          if (hue_offset >= 1.0f) hue_offset -= 1.0f;

          constexpr int NUM_LEDS = 12;
          constexpr float HUE_STEP = 1.0f / NUM_LEDS;
          uint32_t colors[NUM_LEDS];
          float brightness = id(led_ring_brightness).state;

          float current_hue = hue_offset;
          for (int i = 0; i < NUM_LEDS; i++) {
            float r, g, b;
            if (current_hue >= 1.0f) current_hue -= 1.0f;
            hsv_to_rgb((int)(current_hue * 360.0f), 1.0f, brightness, r, g, b);
            colors[i] = ((uint8_t)(r * 255.0f) << 16) | ((uint8_t)(g * 255.0f) << 8) | ((uint8_t)(b * 255.0f));
            current_hue += HUE_STEP;
          }
          id(respeaker).set_led_ring(colors);

  - id: update_comet_cw_effect
    then:
      - lambda: |-
          static float comet_pos = 0.0f;
          uint32_t now = millis();
          float dt = (now - id(last_led_update_time)) / 1000.0f;
          id(last_led_update_time) = now;

          constexpr int NUM_LEDS = 12;
          constexpr int BASE_TAIL = 3;

          float leds_per_sec = id(led_ring_speed) * NUM_LEDS;
          comet_pos += dt * leds_per_sec;
          while (comet_pos >= NUM_LEDS) comet_pos -= NUM_LEDS;

          int head_index = (int)comet_pos;
          int tail_length = BASE_TAIL + (int)(id(led_ring_speed));
          if (tail_length > NUM_LEDS - 1) tail_length = NUM_LEDS - 1;

          uint32_t colors[NUM_LEDS] = {0};
          float brightness = id(led_ring_brightness).state;

          uint8_t head_r = (uint8_t)(id(led_ring_color_r) * 255.0f * brightness);
          uint8_t head_g = (uint8_t)(id(led_ring_color_g) * 255.0f * brightness);
          uint8_t head_b = (uint8_t)(id(led_ring_color_b) * 255.0f * brightness);

          colors[head_index % NUM_LEDS] = (head_r << 16) | (head_g << 8) | head_b;

          for (int i = 1; i <= tail_length; i++) {
            float tail_factor = (float)i / (tail_length + 1);
            float tail_brightness = (1.0f - tail_factor) * brightness;
            uint8_t r = (uint8_t)(id(led_ring_color_r) * 255.0f * tail_brightness);
            uint8_t g = (uint8_t)(id(led_ring_color_g) * 255.0f * tail_brightness);
            uint8_t b = (uint8_t)(id(led_ring_color_b) * 255.0f * tail_brightness);
            int tail_index = (head_index - i + NUM_LEDS) % NUM_LEDS;
            colors[tail_index] = (r << 16) | (g << 8) | b;
          }
          id(respeaker).set_led_ring(colors);

  - id: update_comet_ccw_effect
    then:
      - lambda: |-
          static float comet_pos = 0.0f;
          uint32_t now = millis();
          float dt = (now - id(last_led_update_time)) / 1000.0f;
          id(last_led_update_time) = now;

          constexpr int NUM_LEDS = 12;
          constexpr int BASE_TAIL = 3;

          float leds_per_sec = id(led_ring_speed) * NUM_LEDS;
          comet_pos -= dt * leds_per_sec;
          while (comet_pos < 0.0f) comet_pos += NUM_LEDS;

          int head_index = (int)comet_pos;
          int tail_length = BASE_TAIL + (int)(id(led_ring_speed));
          if (tail_length > NUM_LEDS - 1) tail_length = NUM_LEDS - 1;

          uint32_t colors[NUM_LEDS] = {0};
          float brightness = id(led_ring_brightness).state;

          uint8_t head_r = (uint8_t)(id(led_ring_color_r) * 255.0f * brightness);
          uint8_t head_g = (uint8_t)(id(led_ring_color_g) * 255.0f * brightness);
          uint8_t head_b = (uint8_t)(id(led_ring_color_b) * 255.0f * brightness);

          colors[head_index % NUM_LEDS] = (head_r << 16) | (head_g << 8) | head_b;

          for (int i = 1; i <= tail_length; i++) {
            float tail_factor = (float)i / (tail_length + 1);
            float tail_brightness = (1.0f - tail_factor) * brightness;
            uint8_t r = (uint8_t)(id(led_ring_color_r) * 255.0f * tail_brightness);
            uint8_t g = (uint8_t)(id(led_ring_color_g) * 255.0f * tail_brightness);
            uint8_t b = (uint8_t)(id(led_ring_color_b) * 255.0f * tail_brightness);
            int tail_index = (head_index + i) % NUM_LEDS;
            colors[tail_index] = (r << 16) | (g << 8) | b;
          }
          id(respeaker).set_led_ring(colors);

  - id: update_twinkle_effect
    then:
      - lambda: |-
          constexpr int NUM_LEDS = 12;
          static float led_brightness[NUM_LEDS] = {0.0f};
          static float led_fade_speed[NUM_LEDS] = {0.0f};

          uint32_t now = millis();
          float dt = (now - id(last_led_update_time)) / 1000.0f;
          id(last_led_update_time) = now;

          // Update existing twinkles
          for (int i = 0; i < NUM_LEDS; i++) {
            if (led_fade_speed[i] != 0.0f) {
              led_brightness[i] += led_fade_speed[i] * dt;
              if (led_fade_speed[i] > 0.0f && led_brightness[i] >= 1.0f) {
                led_brightness[i] = 1.0f;
                led_fade_speed[i] *= -1.0f;
              } else if (led_fade_speed[i] < 0.0f && led_brightness[i] <= 0.0f) {
                led_brightness[i] = 0.0f;
                led_fade_speed[i] = 0.0f;
              }
            }
          }

          // Start new twinkles
          float twinkle_chance = dt * id(led_ring_speed);
          if (random_float() < twinkle_chance) {
            int led_to_start = (int)(random_float() * NUM_LEDS);
            if (led_fade_speed[led_to_start] == 0.0f) {
              led_brightness[led_to_start] = 0.0f;
              float min_speed = 1.5f, max_speed = 3.0f;
              led_fade_speed[led_to_start] = min_speed + (random_float() * (max_speed - min_speed));
            }
          }

          // Render colors
          uint32_t colors[NUM_LEDS];
          float master_brightness = id(led_ring_brightness).state;
          uint8_t base_r = (uint8_t)(id(led_ring_color_r) * 255.0f);
          uint8_t base_g = (uint8_t)(id(led_ring_color_g) * 255.0f);
          uint8_t base_b = (uint8_t)(id(led_ring_color_b) * 255.0f);

          for (int i = 0; i < NUM_LEDS; i++) {
            float current_led_brightness = led_brightness[i] * master_brightness;
            uint8_t r = (uint8_t)(base_r * current_led_brightness);
            uint8_t g = (uint8_t)(base_g * current_led_brightness);
            uint8_t b = (uint8_t)(base_b * current_led_brightness);
            colors[i] = (r << 16) | (g << 8) | b;
          }
          id(respeaker).set_led_ring(colors);

  - id: update_timer_tick_effect
    then:
      - lambda: |-
          constexpr int NUM_LEDS = 12;
          static int tick_index = 0;

          uint32_t now = millis();
          // Only update tick position every 100ms to reduce I2C traffic
          static uint32_t last_tick_update = 0;
          if (now - last_tick_update >= 100) {
            tick_index = (tick_index - 1 + NUM_LEDS) % NUM_LEDS;
            last_tick_update = now;
          }

          uint32_t colors[NUM_LEDS] = {0};
          uint32_t seconds_left = id(first_active_timer).seconds_left;
          uint32_t total_seconds = id(first_active_timer).total_seconds;

          float timer_ratio = (float)NUM_LEDS * seconds_left / std::max(total_seconds, (uint32_t)1);

          float master_brightness = id(led_ring_brightness).state;
          uint8_t base_r = (uint8_t)(id(led_ring_color_r) * 255.0f);
          uint8_t base_g = (uint8_t)(id(led_ring_color_g) * 255.0f);
          uint8_t base_b = (uint8_t)(id(led_ring_color_b) * 255.0f);

          for (int i = 0; i < NUM_LEDS; i++) {
            float bar_brightness = clamp(timer_ratio - i, 0.0f, 1.0f);
            if (bar_brightness > 0.0f) {
              float tick_dip = (i == tick_index) ? 0.9f : 1.0f;
              float final_brightness = bar_brightness * tick_dip * master_brightness;
              uint8_t r = (uint8_t)(base_r * final_brightness);
              uint8_t g = (uint8_t)(base_g * final_brightness);
              uint8_t b = (uint8_t)(base_b * final_brightness);
              colors[i] = (r << 16) | (g << 8) | b;
            }
          }
          id(respeaker).set_led_ring(colors);

  - id: update_volume_display_effect
    then:
      - lambda: |-
          constexpr int NUM_LEDS = 12;
          uint32_t colors[NUM_LEDS] = {0};

          if (id(external_media_player).is_ready()) {
            bool is_muted = id(external_media_player).is_muted();
            float volume = id(external_media_player).volume;

            if (is_muted || volume == 0.0f) {
              uint32_t mute_color = (255 << 16); // Red
              colors[0] = mute_color;
              colors[6] = mute_color;
            } else {
              float num_leds_on = volume * NUM_LEDS;
              float master_brightness = id(led_ring_brightness).state;
              uint8_t base_r = (uint8_t)(id(led_ring_color_r) * 255.0f);
              uint8_t base_g = (uint8_t)(id(led_ring_color_g) * 255.0f);
              uint8_t base_b = (uint8_t)(id(led_ring_color_b) * 255.0f);

              for (int i = 0; i < NUM_LEDS; i++) {
                float brightness = clamp(num_leds_on - i, 0.0f, 1.0f);
                if (brightness > 0.0f) {
                  uint8_t r = (uint8_t)(base_r * brightness * master_brightness);
                  uint8_t g = (uint8_t)(base_g * brightness * master_brightness);
                  uint8_t b = (uint8_t)(base_b * brightness * master_brightness);
                  colors[i] = (r << 16) | (g << 8) | b;
                }
              }
            }
          }
          id(respeaker).set_led_ring(colors);

  - id: update_led_beam_effect
    then:
      - lambda: |-
          constexpr int NUM_LEDS = 12;
          constexpr int FADE_LEDS = 3;
          constexpr float TRANSITION_DURATION = 0.5f; // Duration of the smooth transition
          uint32_t colors[NUM_LEDS] = {0};

          uint32_t now = millis();
          float dt = (now - id(last_led_update_time)) / 1000.0f;
          id(last_led_update_time) = now;

          if (id(beam_direction).has_state()) {
            // CORRECTING THE OFFSET: add 5 from the sensor reading
            float target_pos = ((int)id(beam_direction).state + 5) % NUM_LEDS;
            float current_pos = id(animated_beam_position);

            // Calculate the shortest path around the circle
            float diff = target_pos - current_pos;
            if (diff > NUM_LEDS / 2.0f) {
              diff -= NUM_LEDS;
            } else if (diff < -NUM_LEDS / 2.0f) {
              diff += NUM_LEDS;
            }

            // Move current position towards target
            if (abs(diff) > 0.01f) {
              float move_speed = diff / TRANSITION_DURATION;
              current_pos += move_speed * dt;
            } else {
              current_pos = target_pos;
            }

            // Handle wrap-around for the animated position
            if (current_pos >= NUM_LEDS) current_pos -= NUM_LEDS;
            if (current_pos < 0.0f) current_pos += NUM_LEDS;

            id(animated_beam_position) = current_pos;

            // Render the smoothed beam
            float master_brightness = id(led_ring_brightness).state;
            uint8_t base_r = (uint8_t)(id(led_ring_color_r) * 255.0f);
            uint8_t base_g = (uint8_t)(id(led_ring_color_g) * 255.0f);
            uint8_t base_b = (uint8_t)(id(led_ring_color_b) * 255.0f);

            for (int i = 0; i < NUM_LEDS; i++) {
              // Calculate circular distance from current LED to the animated position
              float dist = abs(i - current_pos);
              if (dist > NUM_LEDS / 2.0f) {
                dist = NUM_LEDS - dist;
              }

              // Calculate brightness based on distance (linear falloff)
              float brightness_factor = 1.0f - (dist / (FADE_LEDS + 1.0f));
              brightness_factor = std::max(0.0f, brightness_factor);

              if (brightness_factor > 0.0f) {
                float final_brightness = brightness_factor * master_brightness;
                uint8_t r = (uint8_t)(base_r * final_brightness);
                uint8_t g = (uint8_t)(base_g * final_brightness);
                uint8_t b = (uint8_t)(base_b * final_brightness);
                colors[i] = (r << 16) | (g << 8) | b;
              }
            }
          }
          id(respeaker).set_led_ring(colors);

  # Master script controlling the LEDs, based on different conditions : initialization in progress, wifi and api connected and voice assistant phase.
  # For the sake of simplicity and re-usability, the script calls child scripts defined below.
  # This script will be called every time one of these conditions is changing.
  - id: control_leds
    mode: single  # Prevent multiple simultaneous executions
    then:
      - lambda: |
          // Cache expensive component checks
          static bool last_respeaker_failed = false;
          static bool last_wifi_connected = false;
          static bool last_api_connected = false;
          static int last_voice_phase = -1;
          static bool last_timer_ringing = false;
          static bool last_timer_active = false;
          static bool last_improv_ble = false;
          static bool last_init_progress = false;

          bool respeaker_failed = id(respeaker).is_failed();
          bool wifi_connected = id(wifi_id).is_connected();
          bool api_connected = id(api_id).is_connected();
          int voice_phase = id(voice_assistant_phase);
          bool new_timer_ringing = id(timer_ringing).state;
          bool improv_ble = id(improv_ble_in_progress);
          bool init_progress = id(init_in_progress);

          // Only update if something actually changed
          bool needs_update = (
            respeaker_failed != last_respeaker_failed ||
            wifi_connected != last_wifi_connected ||
            api_connected != last_api_connected ||
            voice_phase != last_voice_phase ||
            new_timer_ringing != last_timer_ringing ||
            improv_ble != last_improv_ble ||
            init_progress != last_init_progress
          );

          if (!needs_update) return;

          // Update cache
          last_respeaker_failed = respeaker_failed;
          last_wifi_connected = wifi_connected;
          last_api_connected = api_connected;
          last_voice_phase = voice_phase;
          last_timer_ringing = new_timer_ringing;
          last_improv_ble = improv_ble;
          last_init_progress = init_progress;

          if (respeaker_failed) {
            id(control_leds_respeaker_startup_failed).execute();
            return;
          }

          // Only check timers if we need to
          id(check_if_timers_active).execute();
          if (id(is_timer_active)){
            id(fetch_first_active_timer).execute();
          }

          // Continue with existing logic...
          if (improv_ble) {
            id(control_leds_improv_ble_state).execute();
          } else if (init_progress) {
            id(control_leds_init_state).execute();
          } else if (!wifi_connected || !api_connected){
            id(control_leds_no_ha_connection_state).execute();
          } else if (new_timer_ringing) {
            id(control_leds_timer_ringing).execute();
          } else if (voice_phase == ${voice_assist_waiting_for_command_phase_id}) {
            id(control_leds_voice_assistant_waiting_for_command_phase).execute();
          } else if (voice_phase == ${voice_assist_listening_for_command_phase_id}) {
            id(control_leds_voice_assistant_listening_for_command_phase).execute();
          } else if (voice_phase == ${voice_assist_thinking_phase_id}) {
            id(control_leds_voice_assistant_thinking_phase).execute();
          } else if (voice_phase == ${voice_assist_replying_phase_id}) {
            id(control_leds_voice_assistant_replying_phase).execute();
          } else if (voice_phase == ${voice_assist_error_phase_id}) {
            id(control_leds_voice_assistant_error_phase).execute();
          } else if (voice_phase == ${voice_assist_not_ready_phase_id}) {
            id(control_leds_voice_assistant_not_ready_phase).execute();
          } else if (id(is_timer_active)) {
            id(control_leds_timer_ticking).execute();
          } else if (voice_phase == ${voice_assist_idle_phase_id}) {
            id(control_leds_voice_assistant_idle_phase).execute();
          }

  # Script executed if respeaker startup failed
  - id: control_leds_respeaker_startup_failed
    then:
      - script.execute:
          id: led_set_effect
          effect: "breathe"
          r: 0.7
          g: 0.0
          b: 0.0
          speed: 0.5

  # Script executed during Improv BLE
  - id: control_leds_improv_ble_state
    then:
      - script.execute:
          id: led_set_effect
          effect: "twinkle"
          r: 1.0
          g: 0.89
          b: 0.71
          speed: 10.0

  # Script executed during initialization
  - id: control_leds_init_state
    then:
      - if:
          condition:
            wifi.connected:
          then:
            - script.execute:
                id: led_set_effect
                effect: "twinkle"
                r: 0.09
                g: 0.73
                b: 0.95
                speed: 20.0
          else:
            - script.execute:
                id: led_set_effect
                effect: "twinkle"
                r: 0.09
                g: 0.73
                b: 0.95
                speed: 4.0

  # Script executed when the device has no connection to Home Assistant
  - id: control_leds_no_ha_connection_state
    then:
      - script.execute:
          id: led_set_effect
          effect: "twinkle"
          r: 1.0
          g: 0.0
          b: 0.0
          speed: 10.0

  # Script executed when the voice assistant is waiting for a command (After the wake word)
  - id: control_leds_voice_assistant_waiting_for_command_phase
    then:
      - lambda: |
          id(animated_beam_position) = id(beam_direction).state;
      - script.execute:
          id: led_set_effect
          effect: "led_beam"
          r: 0.5
          g: 0.0
          b: 0.5
          speed: 0.0

  # Script executed when the voice assistant is listening to a command
  - id: control_leds_voice_assistant_listening_for_command_phase
    then:
      - script.execute:
          id: led_set_effect
          effect: "led_beam"
          r: 0.8
          g: 0.0
          b: 0.8
          speed: 0.0

  # Script executed when the voice assistant is thinking to a command
  - id: control_leds_voice_assistant_thinking_phase
    then:
      - script.execute:
          id: led_set_effect
          effect: "breathe"
          r: 0.6
          g: 0.0
          b: 0.6
          speed: 1.0

  # Script executed when the voice assistant is replying to a command
  - id: control_leds_voice_assistant_replying_phase
    then:
      - script.execute:
          id: led_set_effect
          effect: "comet_ccw"
          r: 0.6
          g: 0.0
          b: 0.6
          speed: 1.0

  # Script executed when the voice assistant is in error
  - id: control_leds_voice_assistant_error_phase
    then:
      - script.execute:
          id: led_set_effect
          effect: "breathe"
          r: 1.0
          g: 0.0
          b: 0.0
          speed: 3.0

  # Script executed when the voice assistant is not ready
  - id: control_leds_voice_assistant_not_ready_phase
    then:
      - script.execute:
          id: led_set_effect
          effect: "twinkle"
          r: 1.0
          g: 0.0
          b: 0.0
          speed: 5.0

  # Script executed when the volume is changed
  - id: control_leds_volume_changed
    mode: restart
    then:
      - lambda: |-
          id(volume_display_active) = true;
      - delay: 2s
      - lambda: |-
          id(volume_display_active) = false;

  # Script executed when the timer is ringing, to control the LEDs
  - id: control_leds_timer_ringing
    then:
      - script.execute:
          id: led_set_effect
          effect: "breathe"
          r: 0.6
          g: 0.0
          b: 0.6
          speed: 5.0

  # Script executed when the timer is ticking, to control the LEDs
  - id: control_leds_timer_ticking
    then:
      - script.execute:
          id: led_set_effect
          effect: "timer_tick"
          r: 0.6
          g: 0.0
          b: 0.6
          speed: 1.0

  # Script executed when the voice assistant is idle (waiting for a wake word)
  - id: control_leds_voice_assistant_idle_phase
    then:
      - script.execute:
          id: led_set_effect
          effect: "off"
          r: 0.0
          g: 0.0
          b: 0.0
          speed: 0.0

  # Script executed when the timer is ringing, to playback sounds.
  - id: ring_timer
    then:
      - script.execute: enable_repeat_one
      - script.execute:
          id: play_sound
          priority: true
          sound_file: !lambda return id(timer_finished_sound);

  # Script executed when the timer is ringing, to repeat the timer finished sound.
  - id: enable_repeat_one
    then:
      # Turn on the repeat mode and pause for 500 ms between playlist items/repeats
      - lambda: |-
            id(external_media_player)
              ->make_call()
              .set_command(media_player::MediaPlayerCommand::MEDIA_PLAYER_COMMAND_REPEAT_ONE)
              .set_announcement(true)
              .perform();
            id(external_media_player)->set_playlist_delay_ms(speaker::AudioPipelineType::ANNOUNCEMENT, 500);

  # Script execute when the timer is done ringing, to disable repeat mode.
  - id: disable_repeat
    then:
      # Turn off the repeat mode and pause for 0 ms between playlist items/repeats
      - lambda: |-
            id(external_media_player)
              ->make_call()
              .set_command(media_player::MediaPlayerCommand::MEDIA_PLAYER_COMMAND_REPEAT_OFF)
              .set_announcement(true)
              .perform();
            id(external_media_player)->set_playlist_delay_ms(speaker::AudioPipelineType::ANNOUNCEMENT, 0);

  # Script executed when we want to play sounds on the device.
  - id: play_sound
    parameters:
      priority: bool
      sound_file: "audio::AudioFile*"
    then:
      - lambda: |-
          if (priority) {
            id(external_media_player)
              ->make_call()
              .set_command(media_player::MediaPlayerCommand::MEDIA_PLAYER_COMMAND_STOP)
              .set_announcement(true)
              .perform();
          }
          if ( (id(external_media_player).state != media_player::MediaPlayerState::MEDIA_PLAYER_STATE_ANNOUNCING ) || priority) {
            id(external_media_player)
              ->play_file(sound_file, true, false);
          }

  # Script used to fetch the first active timer (Stored in global first_active_timer)
  - id: fetch_first_active_timer
    mode: single
    then:
      - lambda: |
          static uint32_t last_fetch_time = 0;
          uint32_t now = millis();

          // Only fetch every 500ms to reduce overhead
          if (now - last_fetch_time < 500) return;
          last_fetch_time = now;

          const auto timers = id(va).get_timers();
          if (timers.empty()) return;

          auto output_timer = timers.begin()->second;
          for (auto &iterable_timer : timers) {
            if (iterable_timer.second.is_active && 
                iterable_timer.second.seconds_left <= output_timer.seconds_left) {
              output_timer = iterable_timer.second;
            }
          }
          id(first_active_timer) = output_timer;

  # Script used to check if a timer is active (Stored in global is_timer_active)
  - id: check_if_timers_active
    then:
      - lambda: |
          const auto timers = id(va).get_timers();
          bool output = false;
          if (timers.size() > 0) {
            for (auto &iterable_timer : timers) {
              if(iterable_timer.second.is_active) {
                output = true;
              }
            }
          }
          id(is_timer_active) = output;

  # Script used activate the stop word if the TTS step is long.
  # Why is this wrapped on a script?
  #   Becasue we want to stop the sequence if the TTS step is faster than that.
  #   This allows us to prevent having the deactivation of the stop word before its own activation.
  - id: activate_stop_word_once
    then:
      - delay: 1s
      # Enable stop wake word
      - if:
          condition:
            switch.is_off: timer_ringing
          then:
            - micro_wake_word.enable_model: stop
            - wait_until:
                not:
                  media_player.is_announcing:
            - if:
                condition:
                  switch.is_off: timer_ringing
                then:
                  - micro_wake_word.disable_model: stop

  - id: check_alarm
    then:
      - lambda: |-
          id(publish_current_time).execute();
          // Check alarm
          if (id(alarm_on).state && id(alarm_time).has_state()) {
            // Get the stored alarm time from the sensor
            auto set_alarm_time = id(alarm_time).state;
            if (set_alarm_time.length() == 5 &&
              isdigit(set_alarm_time[0]) && isdigit(set_alarm_time[1]) &&
              isdigit(set_alarm_time[3]) && isdigit(set_alarm_time[4])) {
              auto alarm_hour = std::stoi(set_alarm_time.substr(0, 2));
              auto alarm_minute = std::stoi(set_alarm_time.substr(3, 2));

              // Trigger action if current time matches alarm time
              auto time_now = id(homeassistant_time).now();
              if (time_now.hour == alarm_hour && time_now.minute == alarm_minute) {
                auto action = id(alarm_action).state;
                if (action == "Play sound") {
                  id(timer_ringing).turn_on();
                } else if (action == "Send event") {
                  id(send_alarm_event).execute();
                } else if (action == "Sound and event") {
                  id(timer_ringing).turn_on();
                  id(send_alarm_event).execute();
                } 
              }
            } else {
              ESP_LOGW("alarm", "Incorrect alarm time setting");
            }
          }
  - id: send_alarm_event
    then:
      - homeassistant.event:
          event: esphome.alarm_ringing
  - id: send_tts_uri_event
    parameters:
      tts_uri: string
    then:
      - homeassistant.event:
          event: esphome.tts_uri
          data:
            uri: !lambda return tts_uri;
  - id: send_stt_text_event
    parameters:
      stt_text: string
    then:
      - homeassistant.event:
          event: esphome.stt_text
          data:
            text: !lambda return stt_text;
  - id: publish_current_time
    mode: single
    then:
      - lambda: |-
          static std::string last_time_string = "";
          auto time_now = id(homeassistant_time).now();
          std::string current_time_string = time_now.strftime("%H:%M");

          // Only publish if time actually changed
          if (current_time_string != last_time_string) {
            id(current_time).publish_state(current_time_string);
            last_time_string = current_time_string;
          }
```

</details>

**中央コントローラー (led_set_effect)**

```yml
script:
  # =========================================================================
  # == Centralized script to control all LED effects ==
  # =========================================================================
  - id: led_set_effect
    mode: restart
    parameters:
      effect: std::string
      r: float
      g: float
      b: float
      speed: float
      ....
```

- すべてのLEDエフェクトを一箇所で管理します。
- エフェクトタイプ、色（R/G/B）、速度を動的に設定できます。
- スムーズなモーションのためにアップデートスクリプトを使用します。
- オフエフェクトは即座にLEDを消灯します。

**個別スクリプト**

- 各アニメーション（ブリーズ、レインボー、コメット、トゥインクル、タイマーティック、ボリューム表示、LEDビーム）には独自のスクリプトがあります。
- システムをモジュラー化し、保守しやすくします。
- led_animation_intervalまたは中央コントローラーによって定期的にトリガーされます。

| デバイス状態           | LEDエフェクト             |
|------------------------|----------------------|
| 起動失敗         | 赤ブリーズ           |
| Improv BLEモード        | 暖色トゥインクル          |
| 初期化         | 青トゥインクル          |
| HA接続なし       | 赤トゥインクル           |
| 音声アシスタント待機             | 紫ビーム           |
| 音声アシスタント聞き取り中           | 明るい紫ビーム    |
| 音声アシスタント思考中            | 紫ブリーズ        |
| 音声アシスタント応答中            | 紫コメット          |
| 音声アシスタントエラー               | 赤ブリーズ           |
| 音声アシスタントアイドル                | LED消灯              |
| タイマー鳴動          | 紫高速ブリーズ   |
| ボリューム変更          | 一時表示     |

#### LED制御の仕組み（フロー概要）

1. **エフェクトのトリガー**

   - 何かが起こったとき（例：起動失敗、音声アシスタント聞き取り中、タイマー鳴動）、スクリプトが実行されます。
   - そのスクリプトは**中央LEDコントローラー**（`led_set_effect`）を呼び出し、以下を指示します：

     - **どのエフェクト**を実行するか（例：ブリーズ、レインボー、コメット）
     - **何色**か（R、G、B値）
     - **どの速度**か（速度）。

   起動が失敗した場合 → `led_set_effect`がエフェクト = *ブリーズ*、色 = 赤で呼び出されます。

2. **中央コントローラー（インターバルループ）**

   - **50ms**ごと（1秒間に20回）、`led_animation_interval`ループが**現在のエフェクト**が何かをチェックします。
   - そのエフェクト名に基づいて、対応するアップデートスクリプトに**制御を転送**します。

     - エフェクト = *ブリーズ* → `update_breathe_effect`を実行。
     - エフェクト = *レインボー* → `update_rainbow_effect`を実行。
     - トゥインクル、コメット、タイマーティック、LEDビームなども同様。

このループは**ディスパッチャー**として機能します：*次にどのアニメーションスクリプトを実行するか*を決定します。

```yml

interval:
  - interval: 50ms
    id: led_animation_interval
    then:
      - lambda: |-
          if (id(volume_display_active)) {
            id(update_volume_display_effect).execute();
            return;
          }
          std::string effect = id(current_led_effect);
          if (effect == "off") {
            return;
          } else if (effect == "breathe") {
            id(update_breathe_effect).execute();
          } else if (effect == "rainbow") {
            id(update_rainbow_effect).execute();
          } else if (effect == "comet_cw") {
            id(update_comet_cw_effect).execute();
          } else if (effect == "comet_ccw") {
            id(update_comet_ccw_effect).execute();
          } else if (effect == "twinkle") {
            id(update_twinkle_effect).execute();
          } else if (effect == "timer_tick") {
            id(update_timer_tick_effect).execute();
          } else if (effect == "led_beam") {
            id(update_led_beam_effect).execute();
          }

```

3. **エフェクトアップデートスクリプト**

   - 各エフェクトには、フレームごとにLEDの色を計算する独自のスクリプトがあります。
   - 例：**ブリーズエフェクト**

     - サイン波を使用して明度をスムーズに上下にフェードします。
     - LEDリングのグローバル設定（速度、明度スライダー、R/G/B色）で明度を乗算します。
     - 12個すべてのLEDの色配列を構築します。
     - 色をRespeaker LEDリングに送信します。

例：

```yml

 # Individual update scripts for each animated effect
  - id: update_breathe_effect
    then:
      - lambda: |-
          static float phase = 0.0f;
          uint32_t now = millis();
          float dt = (now - id(last_led_update_time)) / 1000.0f;
          id(last_led_update_time) = now;

          phase += dt * id(led_ring_speed);
          while (phase >= 1.0f) phase -= 1.0f;

          float master_brightness = id(led_ring_brightness).state;
          float breath_brightness = 0.5f * (1.0f + sinf(phase * 2.0f * M_PI)) * master_brightness;

          uint8_t r = (uint8_t)(id(led_ring_color_r) * 255.0f * breath_brightness);
          uint8_t g = (uint8_t)(id(led_ring_color_g) * 255.0f * breath_brightness);
          uint8_t b = (uint8_t)(id(led_ring_color_b) * 255.0f * breath_brightness);
          uint32_t current_color = (r << 16) | (g << 8) | b;

          uint32_t colors[12];
          for (int i = 0; i < 12; i++) colors[i] = current_color;
          id(respeaker).set_led_ring(colors);

```

これによりアニメーションがスムーズで動的、かつカスタマイズ可能になります。

### オーディオ設定

**I²S入力/出力**

I²S（Inter-IC Sound）は、ESP32がコーデック、マイクロフォン、スピーカーなどのチップに高品質オーディオを送受信できるデジタル接続です。

```yml
i2s_audio:
  - id: i2s_output
    i2s_lrclk_pin: 
      number: GPIO7
      allow_other_uses: true
    i2s_bclk_pin:  
      number: GPIO8
      allow_other_uses: true
    # i2s_mclk_pin:  
    #   number: GPIO9
    #   allow_other_uses: true

  - id: i2s_input
    i2s_lrclk_pin:  
      number: GPIO7
      allow_other_uses: true
    i2s_bclk_pin:  
      number: GPIO8
      allow_other_uses: true
    # i2s_mclk_pin:  
    #   number: GPIO9
    #   allow_other_uses: true

```

**マイクロフォン**

- I²Sマイクロフォンアレイ/コーデックからオーディオをキャプチャします。
- GPIO43：マイクロフォンオーディオデータが入力されるピン。
- サンプルレート48 kHz、32ビット：高品質録音（ステレオ、2チャンネル）。
- adc_type: external：外部コーデックを使用（ESP32の内蔵ADCではない）。
- i2s_mode: secondary：ESP32はコーデックのクロックに従います（スレーブモード）。

```yml
microphone:
  - platform: i2s_audio
    id: i2s_mics
    i2s_din_pin: GPIO43
    adc_type: external
    pdm: false
    sample_rate: 48000
    bits_per_sample: 32bit
    i2s_mode: secondary
    i2s_audio_id: i2s_input
    channel: stereo
```

**スピーカー**

- コーデック（AIC3104 DAC）経由でスピーカーにオーディオを送信します。
- GPIO44：デジタルオーディオが出力されるピン。
- 48 kHz、32ビットステレオ：高品質再生。
- buffer_duration 100ms：オーディオをスムーズに保ちます（グリッチを防止）。
- timeout: never：スピーカーチャンネルを生かし続けます（シャットオフしません）。

```yml
speaker:
  # Hardware speaker output
  - platform: i2s_audio
    id: i2s_audio_speaker
    sample_rate: 48000
    i2s_mode: secondary
    i2s_dout_pin: GPIO44
    bits_per_sample: 32bit
    i2s_audio_id: i2s_output
    dac_type: external
    channel: stereo
    timeout: never
    buffer_duration: 100ms
    audio_dac: aic3104_dac
```

**ミキサー**

- 複数のオーディオストリーム（メディア + アナウンス）を1つの出力に結合します。

```yml
  # Virtual speakers to combine the announcement and media streams together into one output
  - platform: mixer
    id: mixing_speaker
    output_speaker: i2s_audio_speaker
    num_channels: 2
    source_speakers:
      - id: announcement_mixing_input
        timeout: never
      - id: media_mixing_input
        timeout: never
```

**リサンプラー**

- すべてのオーディオソースがサンプルレートとビット深度に一致することを保証します。

```yml
  # Vritual speakers to resample each pipelines' audio, if necessary, as the mixer speaker requires the same sample rate
  - platform: resampler
    id: announcement_resampling_speaker
    output_speaker: announcement_mixing_input
    sample_rate: 48000
    bits_per_sample: 16
  - platform: resampler
    id: media_resampling_speaker
    output_speaker: media_mixing_input
    sample_rate: 48000
    bits_per_sample: 16
```

**メディアプレーヤー**

- ボリューム、ミュート、再生、ダッキング（アナウンス中のメディアボリューム削減）を制御します。
- イベント用のプリロードサウンド（タイマー、ウェイクワード、エラー）。

```yml
media_player:
  - platform: speaker
    id: external_media_player
    name: None
    internal: False
    volume_increment: 0.05
    volume_min: 0.0
    volume_max: 1.0
    ...
    ...
```

### Respeaker XVF3800統合

- i2cアドレス：0x2C
- ID：respeaker
- マイクロフォンミュートスイッチ：1秒ごとに更新、トグル時にサウンド再生。
- DFUバージョンレポート：120秒ごとにファームウェアをレポート。
- ビーム方向センサー：音声ビームを追跡（内部のみ）。
- ファームウェア管理：必要に応じてXVF3800ファームウェアを自動フラッシュ。

```yml
respeaker_xvf3800:
  id: respeaker
  address: 0x2C
  mute_switch:
    id: mic_mute_switch
    name: "Microphone Mute"
    update_interval: 1s
    on_turn_on:
    ...
    ...
```

### 参考資料/リポジトリ

```yml
external_components:
  - source:
      type: git
      url: https://github.com/formatBCE/esphome
      ref: respeaker_microphone
    components:
      - i2s_audio
    refresh: 0s
  - source:
      type: git
      url: https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration
      ref: main
    components: 
      - respeaker_xvf3800
      - aic3104
    refresh: 0s

```

- formatBCE/esphome：カスタムI²Sオーディオコンポーネント。
- formatBCE/Respeaker-XVF3800-ESPHome-integration：
- XVF3800ドライバー
- AIC3104オーディオコーデックドライバー
- refresh: 0s：常にリポジトリから最新コードを取得。

### マイクロウェイクワード

```yml
micro_wake_word:
  id: mww
  microphone:
    microphone: i2s_mics
    channels: 1
    # gain_factor: 4
  stop_after_detection: false
  ....
  ....
```

ウェイクワード（「Okay Nabu」など）を検出し、音声アシスタントを開始します。

- id: mww → 参照名。
- microphone: i2s_mics、1チャンネル。
- stop_after_detection: false → 継続的に聞き続けます。
- okay_nabu, kenobi, hey_jarvis, hey_mycroft, stop（内部停止コマンド；独自のコマンドを追加可能）。
- vad probability_cutoff: 0.05 → 音声感度。

**検出時（マイクがミュートされていない場合）**

- アクティブなタイマー、アナウンス、または音声アシスタントを停止します。
- ウェイクサウンドを再生します（有効な場合）。
- コマンド用の音声アシスタントを開始します。

### 音声アシスタント

```yml
voice_assistant:
  id: va
  microphone:
    microphone: i2s_mics
    channels: 0
  media_player: external_media_player
  micro_wake_word: mww
  use_wake_word: false
  noise_suppression_level: 0
  ....
  ....
```

音声アシスタント（VA）の動作と相互作用を制御します。

- **マイクとメディア**: i2s_micsと外部メディアプレーヤーを使用します。
- **ウェイクワード**: mwwにリンクされていますが、ウェイクワードは不要です（use_wake_word: false）。
- **オーディオ設定**: ノイズ抑制オフ、自動ゲイン0 dB、通常音量。

#### イベント / 何が起こるか

- **on_client_connected**: VAを開始、LEDを更新、必要に応じてマイクのミュートを解除。
- **on_client_disconnected**: VAを停止、LEDをリセット。
- **on_error: LEDにエラー状態を表示**；クラウド認証が失敗した場合はローカルサウンドを再生。
- **on_start**: VA開始時にメディア音量を下げます（ダッキング）。
- **on_listening / on_stt_vad_start / on_stt_vad_end**: リスニングと思考中にVAフェーズとLEDを更新。
- **on_intent_progress / on_tts_start / on_tts_end**: 発話を処理、LEDを更新、停止ワードスクリプトをトリガー可能。
- **on_stt_end**: 認識されたテキストイベントを送信。
- **on_end**: VAを停止、LEDをリセット、ダッキングを終了。

#### タイマーイベント

- on_timer_started / on_timer_updated / on_timer_cancelled / on_timer_finished / on_timer_tick:
  - タイマーの状態と名前を更新。
  - LEDを更新。
  - ティッキングタイマーのLED更新を5秒ごとに削減。

## 特別な謝辞

Seeed Studio ReSpeaker XVF3800用のこの素晴らしいYAMLファイルを作成してくれたFormatBCEに感謝いたします。
彼の[GitHub](https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration)でサポートしてください

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
