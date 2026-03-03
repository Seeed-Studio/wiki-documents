---
title: MR60FDA2 転倒検知センサーとHome Assistant
description: MR60FDA2 転倒検知mmWaveセンサーとHome Assistant
keywords:
- mmwave
- radar
- MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg
slug: /ja/ha_with_mr60fda2
sidebar_position: 1
last_update:
  date: 10/15/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Home Assistantでのレーダー使用範囲について
RADARファームウェアの更新とESPHome YAMLの更新は2つの異なるソフトウェアです。ESPHome YAMLはOTAで更新できますが、RADARボードはケース内のUSB経由でのみ、SEEDが提供する専用ソフトウェアを使用して更新できます。ESPHomeソフトウェアはカスタマイズできますが、[RADARファームウェアはカスタマイズできません](https://wiki.seeedstudio.com/ja/getting_started_with_mr60fda2_mmwave_kit/#module-firmware-upgrade)。Seeed Studioは、ビジネス用途の場合のみRADARのカスタマイズを許可しています。
:::

## はじめに {#introduction}

MR60FDA2は、XIAO ESP32C6マイクロコントローラーとの統合用に設計された60GHz mmWave転倒検知センサーモジュールです。この先進的なセンサーは、ミリ波技術を利用して、バイタルサインの非侵襲的監視と存在検知を提供します。

このガイドは、XIAO ESP32C6マイクロコントローラーを使用してMR60FDA2 mmWaveセンサーをHome Assistantと統合するための明確で包括的なウォークスルーを提供することを目的としています。このHome Assistant統合により、ユーザーは高度なセンシング機能でスマートホームシステムを強化し、様々なアプリケーション（例：高齢者ケアの転倒検知、セキュリティアプリケーション）での自動応答とリアルタイム監視を可能にします。

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/></div>

## 製品概要

<div class="table-center">
   <table align="center">
      <tr>
         <th>MR60FDA2 mmWaveセンサー</th>
      </tr>
      <tr>
         <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg" style={{width:360, height:'auto', "border-radius": '6px'}}/></div></td>
      </tr>
      <tr>
         <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### MR60FDA2 mmWave センサーと XIAO ESP32C6

XIAO ESP32C6 を使用して MR60FDA2 mmWave センサーを Home Assistant と効果的に統合するには、以下の重要なステップに従ってください：

1. **[Home Assistant のセットアップ](#setting-up-home-assistant)**：スマートホームデバイスを管理するために Home Assistant をインストールして設定し、センサーとのシームレスな接続を確保します。
2. **[MR60FDA2 センサーの接続](#discovering-and-adding-the-device-in-home-assistant)**：MR60FDA2 センサーを Home Assistant セットアップに発見して追加する方法を学び、バイタルサインのリアルタイム監視を可能にします。
3. **[センサーデータの監視](#sensor-data-monitoring)**：統合後、センサーデータを効果的に監視して転倒が発生したかどうかを確認できます。
4. **[自動化の実装](#implementing-automation-in-home-assistant)**：Home Assistant の強力な自動化機能を探索して、センサーデータに基づく応答アクションを作成し、スマートホーム環境を向上させます。
5. **[ESPHome でのファームウェア変更](#modifying-the-firmware-with-esphome)**：ESPHome を利用してセンサーの機能をカスタマイズし、特定のニーズに合わせて調整することで、より大きな柔軟性と制御を実現します。

これらのステップは、MR60FDA2 mmWave センサーと XIAO ESP32C6 の統合を活用するためのガイドとなります。

## はじめに {#getting-started}

:::note 注意
ファームウェアの更新や変更について言及する際は、XIAO ESP32C6 のファームウェアを特に対象としていることにご注意ください。
:::

MR60FDA2 mmWave センサーを Home Assistant と正常に統合するには、以下のコンポーネントが必要です：

- **Home Assistant**：センサーデータを管理するスマートホームプラットフォーム。
- **ESPHome アドオン**：ESP32 デバイスの簡単な設定と管理を可能にするファームウェア。

### ステップ 1：Home Assistant のセットアップ {#setting-up-home-assistant}

1. **インストール**：最適なパフォーマンスのために、仮想マシンまたは Raspberry Pi に [Home Assistant OS](https://www.home-assistant.io/installation/) をインストールすることをお勧めします。Home Assistant ウェブサイトの公式インストールガイドに従ってください。
2. **ESPHome アドオンの有効化**：
   - Home Assistant ダッシュボードにアクセスします。
   - 「アドオン」セクションに移動し、ESPHome アドオンを検索します。
   - 「インストール」をクリックし、次に「開始」をクリックして有効にします。
   - インストール後、XIAO ESP32C6 との適切な通信を確保するためにアドオンを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを収集し、ESPHome アドオンで Home Assistant をセットアップすることで、MR60FDA2 mmWave センサーの統合を進める準備が整います。

:::tip Home Assistant のインストール
Seeed Studio の一部の製品について Home Assistant のインストール方法も記載していますので、参考にしてください。

- [ODYSSEY-X86 での Home Assistant 入門](/ja/ODYSSEY-X86-Home-Assistant)
- [reTerminal での Home Assistant 入門](/ja/reTerminal_Home_Assistant)
- [LinkStar H68K/reRouter CM4 での Home Assistant 入門](/ja/h68k-ha-esphome)
:::

### ステップ 2：キットの準備

デフォルトでは、デバイス（XIAO ESP32C6）には呼吸と心拍数検出用のファームウェアが事前にフラッシュされています。ただし、ファームウェアの更新が必要な場合が 2 つあります：

1. **ファームウェアの再フラッシュ**：既存のファームウェアが破損している場合や、新しく開始する必要がある場合。
2. **ファームウェアのアップグレード**：機能が改善された新しいバージョンのファームウェアがある場合。

ファームウェアをフラッシュする簡単な方法が 2 つあります：

<Tabs>
<TabItem value='Web Tool'>

簡単で直接的な方法でファームウェアをフラッシュするには、この [Web Tool](https://limengdu.github.io/MR60FDA2_ESPHome_external_components/) を使用できます。画面の指示に従ってください。

- `CONNECT` ボタンをクリックして接続を開始します。ツールが自動的にファームウェアを更新します。

何か問題が発生した場合は、画面のトラブルシューティング手順に従うか、`ESPHome Web` 方法に切り替えてプロセスを完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/limengdu/MR60FDA2_ESPHome_external_components/releases)から `bin` ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルを解凍する必要があります）。

1. センサーキットを PC に接続します。
2. [ESPHome Web](https://web.esphome.io/) ページにアクセスします。
3. `*.factory.bin` 接尾辞のファームウェアファイルを選択します。

ESPHome Web を介してファームウェアをフラッシュする詳細な手順については、以下のビデオをご覧ください：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアが更新され、Home Assistant との統合の準備が整います。

#### キットのホットスポットに接続

ファームウェアを使用して、センサーキットの電源を入れると、Wi-Fi アクセスポイントが表示されます：`seeedstudio-mr60fda2`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/hotspot-name.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

`192.168.4.1` に移動して、Home Assistant サーバーのローカルネットワーク設定を構成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-enter-psw.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### ステップ 3：Home Assistant でのデバイスの発見と追加 {#discovering-and-adding-the-device-in-home-assistant}

このセクションでは、Home Assistant アプリを使用したプロセスを説明します。ロジックはウェブ版と同じです。

1. **アプリを開く**: アプリを起動したら、Home Assistantサーバーを選択します。アプリが自動的にサーバーを見つけます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **アカウントを作成**: アカウントを作成していない場合は、作成する必要があります。その後、認証情報でログインします。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **統合ページに移動**: ログイン後、Home Assistantの「統合」ページに移動します。ESPHomeアドオンをインストールし、XIAO ESP32C6とHome Assistantサーバーが同じネットワーク上にある場合、発見されたデバイスの下に`Seeed Studio MR60FDA2 Kit {device-mac-address}`デバイスが表示されるはずです。
4. **デバイスを追加**: クリックしてHome Assistantセットアップにデバイスを追加します。
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-find.jpg" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-submit.jpg" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-add.jpg" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>
  
  `CONFIGURE`ボタンをクリックし、`SUBMIT`ボタンを押して確認し、デバイスを希望するエリア（例：バスルーム）に割り当てます。この後、デバイスはESPHome統合を通じて管理され、Home Assistantでの完全な制御と監視が可能になります。

  :::note
  セットアップ過程でエリアの割り当てを求められない場合は、後でHome Assistantの「統合」セクションに移動し、デバイスを選択してそこからエリアを設定することで手動で割り当てることができます。
  :::

## 監視と制御 {#monitoring-and-control}

これらの手順を完了すると、MR60FDA2センサーをHome Assistantに正常に統合・追加し、監視を有効にできます。

### センサーデータの監視

このセクションでは、センサーが「バスルーム」に追加されており、「概要」タブに移動します。バスルームセクションにmmWaveカードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-data.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### RGBライトの制御

このセクションでは、RGBライトの制御方法を探ります。

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

対応するボックスをクリックしてRGBライトを直接制御します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-light-panel.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-control-light.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### 次のステップ {#next-steps}

MR60FDA2 mmWaveセンサーをXIAO ESP32C6とHome Assistantに正常に統合できたので、セットアップを最大限に活用するためのさらなる拡張を探ることができます。考慮すべき2つの重要な方向性は以下の通りです：

#### Home Assistantでの自動化の実装

Home Assistantの強力な自動化機能により、MR60FDA2センサーから収集されたデータに基づいて、より応答性の高いスマートホーム環境を作成できます。これは、動作や心拍検出に関連する特定のトリガーに基づいて自動的に実行されるアクションを設定できることを意味します。

自動化を段階的に実装する方法は以下の通りです：

1. **自動化セクションに移動**: Home Assistantダッシュボードで「自動化」タブを見つけてクリックします。このエリアは、ホーム内での自動化されたアクションの作成と管理に専用されています。
2. **新しい自動化を作成**: 「自動化を追加」ボタンをクリックします。Home Assistantは、自動化のセットアップ過程をガイドするユーザーフレンドリーなウィザードを提供します。
3. **トリガーを定義**: MR60FDA2センサーのデータに基づいてトリガーを選択します。例えば、誰かが転倒したときに自動化がトリガーされるように設定できます。これは、自動化がセンサーの読み取り値に即座に応答できることを意味します。
4. **条件を設定（オプション）**: 条件により、自動化が実行されるタイミングを細かく調整できます。例えば、外が暗いときや特定のユーザーが在宅のときのみライトを点灯させたい場合があります。
5. **アクションを決定**: トリガー条件が満たされたときに実行されるアクションを指定します。アクションには、ライトの点灯、通知の送信、サーモスタット設定の調整などが含まれます。例えば、動作が検出されたときにRGBライトを点灯させるアクションを作成し、セキュリティと快適性の両方を向上させることができます。
6. **保存とテスト**: 自動化を設定した後、保存して機能をテストします。センサーの前を歩いて、期待通りにライトが点灯するかを確認します。問題が発生した場合は、自動化設定に戻ってトラブルシューティングと調整を行うことができます。

Home Assistantの自動化機能を活用することで、あなたの動きと健康指標に応答する真にスマートな環境を作成し、生活空間があなたのライフスタイルにシームレスに適応することを確実にできます。

## ESPHomeでファームウェアを変更する

XIAO ESP32C6を使用する大きな利点の一つは、マイクロコントローラーファームウェアの管理とカスタマイズのための強力なツールであるESPHomeとの互換性です。ESPHomeを使用することで、MR60FDA2 mmWaveセンサーの機能を特定のニーズに合わせて直接ファームウェアを変更できます。

ESPHomeを始めるには、以下の手順に従ってください：

1. **ESPHomeダッシュボードにアクセス**：Home Assistantで、ESPHomeアドオンに移動します。デバイス一覧にXIAO ESP32C6が表示されているはずです。
2. **新しい設定を作成**：デバイスをクリックして設定を開きます。ここで、センサーの感度、レポート間隔、出力形式などの設定を調整できます。ESPHomeはYAML設定形式を使用しており、ユーザーフレンドリーで様々なパラメータを定義できます。MR60FDA2センサー専用に設計された以下のテンプレートYAMLファイルを設定の出発点として使用できます：

    ```yaml showLineNumbers title=example/mr60fda2.yaml
    # template from https://github.com/limengdu/MR60FDA2_ESPHome_external_components/blob/main/example/mr60fda2.yaml
    
    substitutions:
      name: "seeedstudio-mr60fda2-kit"
      friendly_name: "Seeed Studio MR60FDA2 Kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60fda2_kit"
        version: "1.0"
      platformio_options:
        board_upload.maximum_size: 4194304
      min_version: "2024.3.2" # Fix logger compile error on ESP32-C6 esphome#6323

    esp32:
      board: esp32-c6-devkitc-1
      variant: esp32c6
      flash_size: 4MB # upload.flash_size
      framework:
        type: esp-idf
        platform_version: 6.5.0 # Need at least 6.4 for ESP32-C6

        # Tasmota's release of 5.1.3 works, first-party release does not LOL
        version: 5.1.3
        source: https://github.com/tasmota/esp-idf/releases/download/v5.1.3.240325/esp-idf-v5.1.3.zip

        # Fix flash size by ensuring IDF flash size is also set (was defaulting to 2MB?!?)
        # See https://github.com/esphome/issues/issues/5404
        sdkconfig_options:
          CONFIG_ESPTOOLPY_FLASHSIZE_4MB: y

    external_components:
      - source:
          type: git
          url: https://github.com/ssieb/esphome
          ref: adc
        components: [ adc ]
        refresh: 1min
      - source:
          type: git
          url: https://github.com/limengdu/MR60FDA2_ESPHome_external_components
          ref: main
        components: [ seeed_mr60fda2 ]
        refresh: 0s

    # Enable logging
    logger:
      hardware_uart: USB_SERIAL_JTAG
      level: DEBUG

    # Enable Home Assistant API
    api:

    ota:
      - platform: esphome

    wifi:
      # Enable fallback hotspot (captive portal) in case wifi connection fails
      ap:
        ssid: "seeedstudio-mr60fda2"

    captive_portal:

    # For XIAO ESP32C6 Onboard LED
    # light:
    #   - platform: status_led
    #     name: "Switch state"
    #     pin: GPIO15

    light:
      - platform: esp32_rmt_led_strip
        id: led_ring
        name: "Seeed MR60FDA2 RGB Light"
        pin: GPIO1
        num_leds: 1
        rmt_channel: 0
        rgb_order: GRB
        chipset: ws2812

    i2c:
      sda: GPIO22
      scl: GPIO23
      scan: true
      id: bus_a

    sensor:
      - platform: bh1750
        name: "Seeed MR60FDA2 Illuminance"
        address: 0x23
        update_interval: 1s

    uart:
      id: seeed_mr60fda2_uart
      baud_rate: 115200
      rx_pin: 17
      tx_pin: 16
      parity: NONE
      stop_bits: 1

    seeed_mr60fda2:
      id: my_seeed_mr60fda2
      uart_id: seeed_mr60fda2_uart

    binary_sensor:
      - platform: seeed_mr60fda2
        people_exist:
          name: "Person Information"
        fall_detected:
          name: "Falling Information"

    button:
      - platform: seeed_mr60fda2
        get_radar_parameters:
          name: "Get Radar Parameters"
        factory_reset:
          name: "Reset"

    select:
      - platform: seeed_mr60fda2
        install_height:
          name: "Set Install Height"
        height_threshold:
          name: "Set Height Threshold"
        sensitivity:
          name: "Set Sensitivity"
    ```

3. **機能をカスタマイズ**：ESPHomeで利用可能な様々な機能を探索することで、センサーの機能を強化し、特定のニーズに合わせて柔軟に調整できます。
4. **更新されたファームウェアをアップロード**：変更を行った後、設定を保存します。ESPHomeダッシュボードでは、ファームウェアを直接無線でアップロードできます。`Upload`ボタンをクリックし、プロンプトに従ってプロセスを完了するだけです。この合理化された方法により、ファームウェアを最新の状態に保つことが簡単になります。
5. **テストと反復**：アップロードが完了したら、変更をリアルタイムでテストします。センサーのパフォーマンスを監視して、期待通りに動作することを確認します。問題が発生した場合は、ESPHomeダッシュボードに戻って設定を調整します。この反復的なアプローチにより、ファームウェアを継続的に改善し、要件を効果的に満たすことができます。

ESPHomeを活用することで、センサーセットアップの継続的な改善を行い、進化するニーズに適応させることができます。この機能は、プロジェクトの機能性を向上させるだけでなく、IoT開発での学習と実験のプラットフォームも提供します。

これらの手順を通じて、MR60FDA2 mmWaveセンサーとXIAO ESP32C6セットアップの機能を最大化し、好みやニーズに合わせて高度にカスタマイズされた応答性の高いスマートホームシステムに変換できます。

## リソース

- [ESPHome — ESPHome](https://esphome.io/)
- [Installation - Home Assistant](https://www.home-assistant.io/installation/)
- [limengdu/MR60FDA2_ESPHome_external_components](https://limengdu.github.io/MR60FDA2_ESPHome_external_components)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
