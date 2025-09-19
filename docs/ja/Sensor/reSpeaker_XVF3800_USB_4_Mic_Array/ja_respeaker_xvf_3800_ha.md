---
description: ReSpeaker XVF3800 USB 4-Mic Arrayの力を体験してください—AEC、ビームフォーミング、ノイズ抑制、360°音声キャプチャを備えた高度な円形マイクアレイです。コンパクトなXIAO ESP32S3と組み合わせることで、スマートデバイス、ロボティクス、IoTアプリケーション向けの高性能音声制御を実現します。Home Assistantとのシームレスな統合により、音声コマンドでデバイスを制御するデモンストレーションをご紹介します。

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

新しい**ReSpeaker XMOS XVF3800 with XIAO ESP32S3**でスマートスペースと会話しましょう。音声でライトを点けたり、音楽を大きくしたり、天気を聞いたりできます。

この章では、ReSpeaker XMOS XVF3800 with XIAO ESP32S3 HA Voice AssistantとSonoffスマートスイッチを接続して、音声によるライトスイッチの制御を実現します。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Standard-Version-with-CM4-p-5809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Sonoff-BasicR2-p-5514.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

## ファームウェアアップデート

最高の再生体験を得るために、XMOSファームウェアをアップデートする必要があります。
ファームウェアをここからダウンロードしてください。コンピューターでReSpeaker XMOS XVF3800 with XIAO ESP32S3を接続し、ガイドに従って実行してください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/firmware_1.png" alt="pir" width={800} height="auto" /></p>

:::note
XVF3800マイクアレイは動作するために12.288 MHz MCLKが必要ですが、ESPHome（Home Assistantで使用）はAPI制限のため生成できません。このファームウェアはXVF3800をI2Sマスターとして動作させ、ESP32からのMCLKを必要とせずに独自のクロックを生成できるようにします。
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

Home Assistantサイドバーから、**ESPHome Builder**に移動します。

**+ NEW DEVICE**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_add_new.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_device.PNG" alt="pir" width={500} height="auto" /></p>

プロンプトが表示されたら、**SKIP**をクリックします – 設定を手動で作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_skip.PNG" alt="pir" width={500} height="auto" /></p>

新しいデバイスエントリを選択し、**EDIT**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_respeaker_device.PNG" alt="pir" width={800} height="auto" /></p>

内容をカスタム**YAML設定**に置き換えます

### YAML説明

#### WiFi

このセクションでは、デバイスがWi-Fiに接続する方法を設定します。

```yml
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
```

- **ssid & password**: secrets.yamlファイルから取得されるため、パスワードが平文で表示されません。
- **Events**: Wi-Fi接続時または切断時にアクションを実行：
  - on_connect:
    - BLE improvセットアップを停止します。
    - control_ledsスクリプトを実行します（Wi-Fi接続時のLED効果）。

  - on_disconnect:
    - control_ledsスクリプトを実行します（Wi-Fi切断時のLED効果）。

#### I²Cバス

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

#### スイッチ

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
    ......
    ......
```

スイッチは、Home Assistantのソフトウェア制御「ボタン」です。音声、タイマー、アラームなどの機能を制御します。

**Wake Word Sound Switch**: ウェイクワードオーディオを制御します。

**Timer Ringing Internal Switch**:

- タイマーがアクティブかどうかを追跡します。
- on_turn_on: 他のオーディオを-20dBダッキング、タイマー音開始、LED更新、15分後に自動停止。
- on_turn_off: タイマー停止、音量復元、LED更新。

**Alarm On Switch**:

- アラーム状態を追跡します。
- オン/オフ時にLEDスクリプトを実行します。

**LED Ring Brightness**:

- ユーザーがスライダーで明度を調整できます。
- min_value / max_valueで制限を定義します。
- restore_valueで再起動後も前の設定を保持します。

#### センサー

**Next Timer**

- 次のタイマーの残り時間を表示します。
- タイマーが変更された時のみ更新します（リソース節約）。

**Alarm Time & Device Time**

- 現在のアラームとESP32システム時刻を表示します。

#### インターバルでのLED効果

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

#### LED制御

```yml
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
    ......
    ......
```

**中央コントローラー (led_set_effect)**

- すべてのLEDエフェクトを一箇所で管理します。
- エフェクトタイプ、色（R/G/B）、速度を動的に設定できます。
- スムーズなモーションのためにアップデートスクリプトを使用します。
- オフエフェクトは即座にLEDをオフにします。

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
| 音声アシスタントアイドル                | LEDオフ              |
| タイマー鳴動          | 紫高速ブリーズ   |
| ボリューム変更          | 一時表示     |

#### オーディオ設定

```yml
i2s_audio:
  - id: i2s_output
    i2s_lrclk_pin: 
      number: GPIO7
      allow_other_uses: true
    i2s_bclk_pin:  
      number: GPIO8
      ...
      ...
```

**I²S入力/出力**

- I²S経由でマイク入力とスピーカー出力を処理します。
- i2s_input: マイク/コーデックから48kHz、32ビットステレオオーディオをキャプチャします。
- i2s_output: DAC/スピーカーに48kHz、32ビットステレオオーディオを再生します。

**ミキサー**

- 複数のオーディオストリーム（メディア + アナウンス）を1つの出力に結合します。

**リサンプラー**

- すべてのオーディオソースがサンプルレートとビット深度に一致することを保証します。

**メディアプレーヤー**

- ボリューム、ミュート、再生、ダッキング（アナウンス中にメディアボリュームを下げる）を制御します。
- イベント用のプリロードサウンド（タイマー、ウェイクワード、エラー）。

#### Respeaker XVF3800統合

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

- i2cアドレス: 0x2C
- ID: respeaker
- マイクミュートスイッチ: 1秒ごとに更新、切り替え時にサウンド再生。
- DFUバージョンレポート: 120秒ごとにファームウェアをレポート。
- ビーム方向センサー: 音声ビームを追跡（内部のみ）。
- ファームウェア管理: 必要に応じてXVF3800ファームウェアを自動フラッシュ。

#### 参考資料/リポジトリ

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

- formatBCE/esphome: カスタムI²Sオーディオコンポーネント。
- formatBCE/Respeaker-XVF3800-ESPHome-integration:
- XVF3800ドライバー
- AIC3104オーディオコーデックドライバー
- refresh: 0s: 常にリポジトリから最新のコードを取得します。

#### Micro Wake Word

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
- okay_nabu、kenobi、hey_jarvis、hey_mycroft、stop（内部停止コマンド；独自のものを追加可能）。
- vad probability_cutoff: 0.05 → 音声感度。

**検出時（マイクがミュートされていない場合）**

- アクティブな場合、タイマー、アナウンス、または音声アシスタントを停止します。
- ウェイクサウンドを再生します（有効な場合）。
- コマンド用に音声アシスタントを開始します。

#### 音声アシスタント

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
- **オーディオ設定**: ノイズ抑制オフ、自動ゲイン0 dB、通常ボリューム。

##### イベント/何が起こるか

- **on_client_connected**: VAを開始、LEDを更新、必要に応じてマイクのミュートを解除。
- **on_client_disconnected**: VAを停止、LEDをリセット。
- **on_error: LEDにエラー状態を表示**；クラウド認証が失敗した場合はローカルサウンドを再生。
- **on_start**: VAが開始されるとメディアボリュームを下げます（ダッキング）。
- **on_listening / on_stt_vad_start / on_stt_vad_end**: 聞き取りと思考中にVAフェーズとLEDを更新。
- **on_intent_progress / on_tts_start / on_tts_end**: 発話を処理、LEDを更新、停止ワードスクリプトをトリガー可能。
- **on_stt_end**: 認識されたテキストイベントを送信。
- **on_end**: VAを停止、LEDをリセット、ダッキングを終了。

##### タイマーイベント

- on_timer_started / on_timer_updated / on_timer_cancelled / on_timer_finished / on_timer_tick:
  - タイマー状態と名前を更新。
  - LEDを更新。
  - ティッキングタイマーのLED更新を5秒ごとに削減。

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

成功後、確認メッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_congrats.PNG" alt="pir" width={500} height="auto" /></p>

**Home Assistant > Settings > Devices & Services**に戻ります。

**ESPHome**が発見された統合として表示されるはずです。

**CONFIGURE**をクリックし、**Submit**をクリックしてセットアップを完了します。

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

正常に接続されると、関連するエンティティが以下に表示されます：
**Settings → Devices & Services → Entities**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/sonoff-id.png" alt="pir" width={800} height="auto" /></p>

## Nabu Cloudを使用した音声アシスタント

このデモでは、音声を使用して**Home Assistant Cloud (Nabu Casa)**に接続する方法を紹介しています。セットアップは簡単で、**1ヶ月の無料トライアル**を利用してその全機能を探索できます。
内蔵の**ウェイクワード**「Okay Nabu」により、音声コマンドを簡単にトリガーし、複雑な設定なしに**いつでも、どこでも**デバイスやサービスと**シームレスに統合**できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice_nabu.PNG" alt="pir" width={800} height="auto" /></p>

## 特別な感謝

Seeed Studio ReSpeaker XVF3800用のこの素晴らしいYAMLファイルを作成してくれたFormatBCEに感謝いたします。
彼の[GitHub](https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration)でサポートしてください

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
