---
title: MR60FDA2 転倒検知センサーと Home Assistant の連携
description: MR60FDA2 転倒検知 mmWave センサーと Home Assistant の連携
keywords:
  - mmwave
  - radar
  - MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp
slug: /ha_with_mr60fda2
sidebar_position: 1
last_update:
  date: 10/15/2024
  author: Spencer
createdAt: '2024-10-08'
updatedAt: '2026-05-12'
url: https://wiki.seeedstudio.com/ja/ha_with_mr60fda2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Home Assistant におけるレーダー利用範囲について
RADAR のファームウェア更新と ESPHome の YAML 更新は、2 つの異なるソフトウェアです。ESPHome の YAML は OTA で更新できますが、RADAR ボードは SEEED が提供する専用ソフトウェアを用いて、ケース内部の USB 経由でのみ更新できます。ESPHome のソフトウェアはカスタマイズできますが、[RADAR ファームウェアはカスタマイズできません](https://wiki.seeedstudio.com/ja/getting_started_with_mr60fda2_mmwave_kit/#モジュール-ファームウェア-アップグレード)。Seeed Studio は、ビジネス用途の場合にのみ RADAR のカスタマイズを許可しています。
:::

## はじめに {#introduction}

MR60FDA2 は、XIAO ESP32C6 マイコンとの統合用に設計された 60GHz mmWave 転倒検知センサーモジュールです。この高度なセンサーはミリ波技術を利用し、バイタルサインや在室検知を非接触で行います。

このガイドは、XIAO ESP32C6 マイコンを使用して MR60FDA2 mmWave センサーを Home Assistant と統合するための、わかりやすく包括的な手順を提供することを目的としています。この Home Assistant 連携により、ユーザーは高度なセンシング機能をスマートホームシステムに追加でき、さまざまな用途（例：高齢者ケアのための転倒検知、セキュリティ用途）において、自動応答やリアルタイム監視を実現できます。

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/></div>

## 製品概要

<div class="table-center">
   <table align="center">
      <tr>
         <th>MR60FDA2 mmWave センサー</th>
      </tr>
      <tr>
         <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp" style={{width:360, height:'auto', "border-radius": '6px'}}/></div></td>
      </tr>
      <tr>
         <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### MR60FDA2 mmWave センサーと XIAO ESP32C6

XIAO ESP32C6 を使用して MR60FDA2 mmWave センサーを Home Assistant と効果的に統合するには、次の重要なステップに従ってください。

1. **[Home Assistant のセットアップ](#setting-up-home-assistant)**: まず Home Assistant をインストールして設定し、センサーとのシームレスな接続を確保しながらスマートホームデバイスを管理できるようにします。
2. **[MR60FDA2 センサーの接続](#discovering-and-adding-the-device-in-home-assistant)**: MR60FDA2 センサーを Home Assistant 環境に検出して追加し、バイタルサインをリアルタイムで監視できるようにする方法を学びます。
3. **[センサーデータの監視](#sensor-data-monitoring)**: 一度統合が完了すれば、転倒が発生したかどうかを確認するためにセンサーデータを効果的に監視できます。
4. **[オートメーションの実装](#implementing-automation-in-home-assistant)**: Home Assistant の強力なオートメーション機能を活用し、センサーデータに基づいて応答アクションを作成し、スマートホーム環境を強化します。
5. **[ESPHome によるファームウェアの変更](#modifying-the-firmware-with-esphome)**: ESPHome を利用してセンサーの機能をカスタマイズし、特定のニーズに合わせて柔軟性と制御性を高めます。

これらのステップに従うことで、MR60FDA2 mmWave センサーと XIAO ESP32C6 の統合を活用できるようになります。

## 入門ガイド {#getting-started}

:::note 注意
ファームウェアの更新や変更について言及する場合、それは XIAO ESP32C6 上のファームウェアを指していることにご注意ください。
:::

MR60FDA2 mmWave センサーを Home Assistant と正常に統合するには、以下のコンポーネントが必要です。

- **Home Assistant**: センサーデータを管理するスマートホームプラットフォーム。
- **ESPHome アドオン**: ESP32 デバイスの簡単な設定と管理を可能にするファームウェア。

### ステップ 1: Home Assistant のセットアップ {#setting-up-home-assistant}

1. **インストール**: 最適なパフォーマンスのために、[Home Assistant OS](https://www.home-assistant.io/installation/) を仮想マシンまたは Raspberry Pi にインストールすることを推奨します。Home Assistant 公式サイトのインストールガイドに従ってください。
2. **ESPHome アドオンの有効化**:
   - Home Assistant のダッシュボードにアクセスします。
   - 「Add-ons」セクションに移動し、ESPHome アドオンを検索します。
   - "Install" をクリックし、その後 "Start" をクリックして有効化します。
   - インストール後、XIAO ESP32C6 と適切に通信できるようにアドオンを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを揃え、ESPHome アドオン付きの Home Assistant をセットアップすれば、MR60FDA2 mmWave センサーの統合を進める準備が整います。

:::tip Home Assistant のインストール
Seeed Studio のいくつかの製品向けに、Home Assistant のインストール方法も記載していますので、そちらも参照してください。

- [ODYSSEY-X86 での Home Assistant 入門](/ja/ODYSSEY-X86-Home-Assistant)
- [reTerminal での Home Assistant 入門](/ja/reTerminal_Home_Assistant)
- [LinkStar H68K/reRouter CM4 での Home Assistant 入門](/ja/h68k-ha-esphome)
:::

### ステップ 2: キットの準備

デフォルトでは、お使いのデバイス（XIAO ESP32C6）には呼吸および心拍検出用のファームウェアが書き込まれています。ただし、次の 2 つの状況ではファームウェアを更新する必要があります。

1. **ファームウェアの再書き込み**: 既存のファームウェアが破損している場合、または最初からやり直す必要がある場合。
2. **ファームウェアのアップグレード**: 機能が向上した新しいバージョンのファームウェアがある場合。

ファームウェアを書き込む簡単な方法は 2 つあります。

<Tabs>
<TabItem value='Web Tool'>

この[Web Tool](https://limengdu.github.io/MR60FDA2_ESPHome_external_components/)を使用すると、簡単かつ直接的な方法でファームウェアを書き込むことができます。画面の指示に従うだけです。

- `CONNECT` ボタンをクリックして接続を開始します。ツールが自動的にファームウェアを更新します。

問題が発生した場合は、画面上のトラブルシューティング手順に従うか、`ESPHome Web` の方法に切り替えて処理を完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/limengdu/MR60FDA2_ESPHome_external_components/releases)から `bin` ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルは解凍する必要があります）。

1. センサーキットを PC に接続します。
2. [ESPHome Web](https://web.esphome.io/) ページにアクセスします。
3. `*.factory.bin` というサフィックスの付いたファームウェアファイルを選択します。

ESPHome Web を介してファームウェアを書き込む手順については、次の動画をご覧ください。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアを更新し、Home Assistant との統合に向けて準備を整えることができます。

#### キットのホットスポットに接続する

ファームウェアがあれば、センサーキットの電源を入れることで、`seeedstudio-mr60fda2` という Wi-Fi アクセスポイントが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/hotspot-name.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

`192.168.4.1` にアクセスして、Home Assistant サーバーのローカルネットワーク設定を構成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-enter-psw.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### ステップ 3: Home Assistant でデバイスを検出して追加する {#discovering-and-adding-the-device-in-home-assistant}

このセクションでは、Home Assistant アプリを使用した手順を説明します。ロジックは Web 版と同じです。

1. **アプリを開く**: アプリを起動したら、Home Assistant サーバーを選択します。アプリは自動的にサーバーを検出します。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **アカウントを作成する**: まだアカウントを作成していない場合は、作成する必要があります。その後、認証情報を使用してログインします。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **インテグレーションページへ移動**: ログイン後、Home Assistant の「Integrations」ページに移動します。ESPHome アドオンをインストールしており、XIAO ESP32C6 と Home Assistant サーバーの両方が同じネットワーク上にある場合、検出されたデバイスの一覧に `Seeed Studio MR60FDA2 Kit {device-mac-address}` が表示されるはずです。
4. **デバイスを追加する**: デバイスをクリックして、Home Assistant 環境に追加します。
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-find.jpg" alt="デバイスを検出"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-submit.jpg" alt="デバイスを追加"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-add.jpg" alt="エリア"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="アドオン"/>
  </div>

  `CONFIGURE` ボタンをクリックし、`SUBMIT` ボタンを押して確認したあと、デバイスをお好みのエリア（例：Bathroom）に割り当てます。これが完了すると、デバイスは ESPHome 連携を通じて管理され、Home Assistant で完全な制御とモニタリングが可能になります。

  :::note
  セットアップ中のプロンプトでエリアの割り当てが求められない場合は、後から手動で割り当てることができます。Home Assistant の「Integrations」セクションに移動し、デバイスを選択して、そこからエリアを設定してください。
  :::

## 監視と制御 {#monitoring-and-control}

手順を完了すると、MR60FDA2 センサーを Home Assistant に正常に統合・追加でき、モニタリングが可能になります。

### センサーデータのモニタリング

このセクションでは、センサーは「Bathroom」に追加されています。「Overview」タブに移動すると、Bathroom セクションに mmWave カードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-data.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### RGB ライトの制御

このセクションでは、RGB ライトの制御方法を説明します。

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

対応するボックスをクリックすると、RGB ライトを直接制御できます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-light-panel.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-control-light.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### 次のステップ {#next-steps}

MR60FDA2 mmWave センサーを XIAO ESP32C6 と Home Assistant に正常に統合できたので、セットアップを最大限に活用するためのさらなる拡張を検討できます。ここでは、特に重要な 2 つの方向性を紹介します。

#### Home Assistant でオートメーションを実装する

Home Assistant の強力なオートメーション機能を使うと、MR60FDA2 センサーから収集されたデータに基づいて、より反応性の高いスマートホーム環境を構築できます。つまり、動きや心拍検出に関連する特定のトリガーに基づいて、自動的に実行されるアクションを設定できます。

以下の手順でオートメーションを実装します：

1. **オートメーションセクションへ移動**：Home Assistant のダッシュボードで「Automations」タブを探してクリックします。このエリアは、家庭内の自動アクションの作成と管理専用です。
2. **新しいオートメーションを作成**：「Add Automation」ボタンをクリックします。Home Assistant には、オートメーションの設定プロセスを案内してくれるユーザーフレンドリーなウィザードがあります。
3. **トリガーを定義**：MR60FDA2 センサーのデータに基づいてトリガーを選択します。例えば、誰かが転倒したときにオートメーションが起動するように設定できます。これにより、オートメーションはセンサーの読み取りに即座に反応できます。
4. **条件を設定（任意）**：条件を使うと、オートメーションを実行するタイミングをさらに細かく制御できます。例えば、外が暗いときだけ、または特定のユーザーが在宅している場合にのみライトを点灯させる、といった設定が可能です。
5. **アクションを決定**：トリガー条件が満たされたときに実行されるアクションを指定します。アクションには、ライトのオン、通知の送信、サーモスタット設定の調整などがあります。例えば、動きが検出されたときに RGB ライトを点灯させるアクションを作成し、安全性と快適性を高めることができます。
6. **保存してテスト**：オートメーションの設定が完了したら保存し、その動作をテストします。センサーの前を歩いて、ライトが期待どおりに点灯するか確認します。問題が発生した場合は、オートメーション設定に戻ってトラブルシュートと調整を行ってください。

Home Assistant のオートメーション機能を活用することで、動きや健康指標に反応する真のスマート環境を構築でき、生活空間がライフスタイルにシームレスに適応するようになります。

## ESPHome によるファームウェアの変更

XIAO ESP32C6 を使用する大きな利点の 1 つは、マイコンのファームウェア管理とカスタマイズに強力なツールである ESPHome と互換性があることです。ESPHome を使用すると、MR60FDA2 mmWave センサーの機能をニーズに合わせて調整できるよう、ファームウェアを直接変更できます。

ESPHome を使い始めるには、次の手順に従ってください：

1. **ESPHome ダッシュボードにアクセス**：Home Assistant で ESPHome アドオンに移動します。デバイス一覧に XIAO ESP32C6 が表示されているはずです。
2. **新しい設定を作成**：デバイスをクリックして、その設定画面を開きます。ここで、センサーの感度、レポート間隔、出力フォーマットなどの設定を調整できます。ESPHome は YAML 設定フォーマットを使用しており、ユーザーフレンドリーでさまざまなパラメータを定義できます。以下のテンプレート YAML ファイルは、MR60FDA2 センサー専用に設計された設定の出発点として使用できます。

    ```yaml showLineNumbers title=example/mr60fda2.yaml
    # template from https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-mr60fda2-kit
    substitutions:
      name: "seeedstudio-mr60fda2-kit"
      friendly_name: "Seeed Studio MR60FDA2 Kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60fda2_kit"
        version: "2.1"
      min_version: "2024.3.2" # Fix logger compile error on ESP32-C6 esphome#6323

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
        channel_colors: GRB
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

3. **機能をカスタマイズ**：ESPHome で利用可能なさまざまな機能を活用することで、センサーの機能を拡張し、ニーズに合わせて柔軟に調整できます。
4. **更新したファームウェアをアップロード**：変更を加えたら設定を保存します。ESPHome ダッシュボードからは、ファームウェアを OTA（無線）で直接アップロードできます。`Upload` ボタンをクリックし、プロンプトに従ってプロセスを完了してください。この合理化された方法により、ファームウェアを簡単に最新状態に保つことができます。
5. **テストと反復**：アップロードが完了したら、リアルタイムで変更をテストします。センサーの動作を監視し、期待どおりに動いているか確認します。問題が発生した場合は、ESPHome ダッシュボードに戻って設定を調整してください。この反復的なアプローチにより、ファームウェアを継続的に改善し、要件を効果的に満たすことができます。

ESPHome を活用することで、センサー構成を継続的に改善し、変化するニーズに合わせて調整することができます。この機能は、プロジェクトの機能性を高めるだけでなく、IoT 開発の学習と実験のためのプラットフォームも提供します。

これらのステップを通じて、MR60FDA2 mmWave センサーと XIAO ESP32C6 セットアップの機能を最大限に引き出し、好みやニーズに合わせて高度にカスタマイズされた反応性の高いスマートホームシステムへと変換できます。

## リソース

- [ESPHome — ESPHome](https://esphome.io/)
- [Installation - Home Assistant](https://www.home-assistant.io/installation/)
- [MR60FDA2 ESPHome project source](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-mr60fda2-kit)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせてお選びいただける、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
