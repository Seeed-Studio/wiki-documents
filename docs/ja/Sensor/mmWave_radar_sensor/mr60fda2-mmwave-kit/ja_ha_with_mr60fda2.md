---
title: MR60FDA2 転倒検知センサーと Home Assistant
description: MR60FDA2 転倒検知 mmWave センサーと Home Assistant
keywords:
- mmwave
- レーダー
- MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg
slug: /ja/ha_with_mr60fda2
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## はじめに {#introduction}

MR60FDA2 は、XIAO ESP32C6 マイクロコントローラーとの統合を目的として設計された 60GHz mmWave 転倒検知センサー モジュールです。この高度なセンサーはミリ波技術を利用して、非侵襲的なバイタルサインの監視や存在検知を提供します。

このガイドでは、XIAO ESP32C6 マイクロコントローラーを使用して MR60FDA2 mmWave センサーを Home Assistant に統合するための明確で包括的な手順を提供します。この Home Assistant 統合により、ユーザーはスマートホームシステムを高度なセンサー機能で強化し、自動応答やリアルタイム監視を可能にします（例：高齢者ケアの転倒検知、セキュリティ用途）。

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/></div>

## 製品概要

<div class="table-center">
   <table align="center">
      <tr>
         <th>MR60FDA2 mmWave センサー</th>
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

MR60FDA2 mmWave センサーを XIAO ESP32C6 を使用して Home Assistant に統合するためには、以下の基本的な手順を実行してください：

1. **[Home Assistant のセットアップ](#setting-up-home-assistant)**: Home Assistant をインストールして設定し、スマートホームデバイスを管理できるようにし、センサーとのシームレスな接続を確保します。
2. **[MR60FDA2 センサーの接続](#discovering-and-adding-the-device-in-home-assistant)**: MR60FDA2 センサーを Home Assistant に追加する方法を学び、バイタルサインのリアルタイム監視を可能にします。
3. **[センサーデータの監視](#sensor-data-monitoring)**: 統合後、転倒が発生したかどうかを確認するためにセンサーデータを効果的に監視できます。
4. **[自動化の実装](#implementing-automation-in-home-assistant)**: Home Assistant の強力な自動化機能を活用して、センサーデータに基づいた応答アクションを作成し、スマートホーム環境を強化します。
5. **[ESPHome を使用したファームウェアの変更](#modifying-the-firmware-with-esphome)**: ESPHome を利用してセンサーの機能をカスタマイズし、特定のニーズに合わせて柔軟性と制御を向上させます。

これらの手順に従うことで、MR60FDA2 mmWave センサーと XIAO ESP32C6 の統合を最大限に活用できます。

## はじめに {#getting-started}

:::note 注意
ファームウェアの更新や変更について言及する場合、特にXIAO ESP32C6のファームウェアを対象としていることに注意してください。
:::

MR60FDA2 mmWaveセンサーをHome Assistantと統合するには、以下のコンポーネントが必要です：

- **Home Assistant**: センサーデータを管理するスマートホームプラットフォーム。
- **ESPHomeアドオン**: ESP32デバイスの簡単な設定と管理を可能にするファームウェア。

### ステップ1: Home Assistantのセットアップ {#setting-up-home-assistant}

1. **インストール**: 最適なパフォーマンスを得るために、[Home Assistant OS](https://www.home-assistant.io/installation/)を仮想マシンまたはRaspberry Piにインストールすることを推奨します。公式のインストールガイドに従ってください。
2. **ESPHomeアドオンの有効化**:
   - Home Assistantのダッシュボードにアクセスします。
   - 「アドオン」セクションに移動し、ESPHomeアドオンを検索します。
   - 「インストール」をクリックし、その後「開始」をクリックして有効化します。
   - インストール後、XIAO ESP32C6との適切な通信を確保するためにアドオンを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを収集し、ESPHomeアドオンを使用してHome Assistantをセットアップすることで、MR60FDA2 mmWaveセンサーの統合を進める準備が整います。

:::tip Home Assistantのインストール
Seeed Studio製品向けにHome Assistantのインストール方法を記載した記事もありますので、参考にしてください。

- [ODYSSEY-X86でのHome Assistantの始め方](/ja/ODYSSEY-X86-Home-Assistant)
- [reTerminalでのHome Assistantの始め方](/ja/reTerminal_Home_Assistant)
- [LinkStar H68K/reRouter CM4でのHome Assistantの始め方](/ja/h68k-ha-esphome)
:::

### ステップ2: キットの準備

デフォルトでは、XIAO ESP32C6デバイスには呼吸と心拍数検出用のファームウェアがプリインストールされています。ただし、以下の2つのシナリオではファームウェアを更新する必要があります：

1. **ファームウェアの再フラッシュ**: 既存のファームウェアが破損している場合や新しい状態から始めたい場合。
2. **ファームウェアのアップグレード**: 機能が改善された新しいバージョンのファームウェアがある場合。

ファームウェアをフラッシュする方法は以下の2つです：

<Tabs>
<TabItem value='Web Tool'>

この[Web Tool](https://limengdu.github.io/MR60FDA2_ESPHome_external_components/)を使用すると、簡単かつ直接的にファームウェアをフラッシュできます。画面上の指示に従ってください。

- `CONNECT`ボタンをクリックして接続を開始します。このツールは自動的にファームウェアを更新します。

問題が発生した場合は、画面上のトラブルシューティング手順に従うか、`ESPHome Web`メソッドに切り替えてプロセスを完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/limengdu/MR60FDA2_ESPHome_external_components/releases)から`bin`ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルを解凍してください）。

1. センサーキットをPCに接続します。
2. [ESPHome Web](https://web.esphome.io/)ページにアクセスします。
3. `*.factory.bin`という接尾辞のファームウェアファイルを選択します。

以下の動画で、ESPHome Webを使用したファームウェアのフラッシュ方法を詳しく説明しています：

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="ESPHome Webでのファームウェアインストール" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアを更新し、Home Assistantとの統合の準備が整います。

#### キットのホットスポットに接続する

ファームウェアを使用してセンサーキットの電源を入れると、Wi-Fiアクセスポイント`seeedstudio-mr60fda2`が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/hotspot-name.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

`192.168.4.1`に移動して、Home Assistantサーバーのローカルネットワーク設定を構成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-enter-psw.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### ステップ3: Home Assistantでデバイスを検出して追加する {#discovering-and-adding-the-device-in-home-assistant}

このセクションでは、Home Assistantアプリを使用したプロセスを説明します。ロジックはウェブ版と同じです。

1. **アプリを開く**: アプリを起動したら、Home Assistantサーバーを選択します。アプリは自動的にサーバーを検出します。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **アカウントを作成する**: アカウントを作成していない場合は作成する必要があります。その後、資格情報でログインします。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **統合ページに移動する**: ログイン後、Home Assistantの「統合」ページに移動します。ESPHomeアドオンをインストールしており、XIAO ESP32C6とHome Assistantサーバーが同じネットワーク上にある場合、`Seeed Studio MR60FDA2 Kit {device-mac-address}`というデバイスが検出されたデバイスの下に表示されるはずです。
4. **デバイスを追加する**: デバイスをクリックしてHome Assistantのセットアップに追加します。
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-find.jpg" alt="デバイスを検出"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-submit.jpg" alt="デバイスを送信"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-add.jpg" alt="エリア"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="アドオン"/>
  </div>

`CONFIGURE`ボタンをクリックし、`SUBMIT`ボタンを押して確認し、デバイスを希望するエリア（例：バスルーム）に割り当てます。その後、デバイスはESPHome統合を通じて管理され、Home Assistantで完全な制御と監視が可能になります。

:::note
セットアッププロセス中にエリアの割り当てを求められない場合は、後でHome Assistantの「Integrations」セクションに移動し、デバイスを選択してエリアを手動で設定することができます。
:::

## 監視と制御 {#monitoring-and-control}

これらの手順を完了すると、MR60FDA2センサーをHome Assistantに統合し、追加することが成功し、監視が可能になります。

### センサーデータの監視

このセクションでは、センサーが「バスルーム」に追加されている場合、「Overview」タブに移動します。バスルームセクションにmmWaveカードが表示されます。

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

MR60FDA2 mmWaveセンサーをXIAO ESP32C6およびHome Assistantと統合することに成功したので、セットアップを最大限に活用するためのさらなる拡張を探ることができます。以下は検討すべき2つの重要な方法です：

#### Home Assistantでのオートメーションの実装

Home Assistantの強力なオートメーション機能を活用することで、MR60FDA2センサーから収集したデータに基づいて、より応答性の高いスマートホーム環境を構築できます。これにより、動作や心拍検出に関連する特定のトリガーに基づいて自動的にアクションを設定できます。

オートメーションを実装する手順は以下の通りです：

1. **オートメーションセクションに移動**: Home Assistantのダッシュボードで「Automations」タブを見つけてクリックします。このエリアは、ホーム内での自動アクションの作成と管理専用です。
2. **新しいオートメーションを作成**: 「Add Automation」ボタンをクリックします。Home Assistantは、オートメーションの設定プロセスを案内する使いやすいウィザードを提供します。
3. **トリガーを定義**: MR60FDA2センサーのデータに基づいてトリガーを選択します。例えば、誰かが転倒した場合にオートメーションをトリガーするよう設定できます。これにより、センサーの読み取り値に即座に対応することが可能です。
4. **条件を設定（オプション）**: 条件を設定することで、オートメーションが実行されるタイミングを絞り込むことができます。例えば、外が暗い場合や特定のユーザーが家にいる場合のみライトを点灯させるように設定できます。
5. **アクションを決定**: トリガー条件が満たされた場合に実行されるアクションを指定します。アクションにはライトの点灯、通知の送信、さらにはサーモスタット設定の調整などが含まれます。例えば、動作が検出された場合にRGBライトを点灯させるアクションを作成することで、セキュリティと快適性を向上させることができます。
6. **保存とテスト**: オートメーションを設定した後、保存してその機能をテストします。センサーの前を歩いてライトが期待通りに点灯するか確認してください。問題が発生した場合は、オートメーション設定に戻ってトラブルシューティングと調整を行うことができます。

Home Assistantのオートメーション機能を活用することで、動作や健康指標に応じて生活空間がライフスタイルにシームレスに適応する、真にスマートな環境を構築できます。

## ESPHome を使用したファームウェアの変更

XIAO ESP32C6 を使用する大きな利点の一つは、ESPHome との互換性です。ESPHome は、マイクロコントローラーのファームウェアを管理およびカスタマイズするための強力なツールです。ESPHome を使用すると、MR60FDA2 mmWave センサーの機能を特定のニーズに合わせて直接変更することができます。

ESPHome を使用するには、以下の手順に従ってください：

1. **ESPHome ダッシュボード にアクセス**: Home Assistant 内で ESPHome アドオンに移動します。XIAO ESP32C6 がデバイス一覧に表示されているはずです。
2. **新しい設定を作成**: デバイスをクリックして設定を開きます。ここでは、センサーの感度、報告間隔、出力形式などの設定を調整できます。ESPHome は YAML 設定形式を使用しており、ユーザーフレンドリーでさまざまなパラメータを定義できます。以下のテンプレート YAML ファイルを使用して、MR60FDA2 センサー用の設定を開始できます：

    ```yaml showLineNumbers title=example/mr60fda2.yaml
    # テンプレート元: https://github.com/limengdu/MR60FDA2_ESPHome_external_components/blob/main/example/mr60fda2.yaml
    
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
      min_version: "2024.3.2" # ESP32-C6 の logger コンパイルエラー修正 esphome#6323

    esp32:
      board: esp32-c6-devkitc-1
      variant: esp32c6
      flash_size: 4MB # upload.flash_size
      framework:
        type: esp-idf
        platform_version: 6.5.0 # ESP32-C6 には少なくとも 6.4 が必要

        # Tasmota のリリース 5.1.3 は動作するが、公式リリースは動作しない LOL
        version: 5.1.3
        source: https://github.com/tasmota/esp-idf/releases/download/v5.1.3.240325/esp-idf-v5.1.3.zip

        # IDF フラッシュサイズを設定してフラッシュサイズを修正 (デフォルトで 2MB?!?)
        # 詳細は https://github.com/esphome/issues/issues/5404 を参照
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

    # ロギングを有効化
    logger:
      hardware_uart: USB_SERIAL_JTAG
      level: DEBUG

    # Home Assistant API を有効化
    api:

    ota:
      - platform: esphome

    wifi:
      # Wi-Fi 接続が失敗した場合のフォールバックホットスポット (キャプティブポータル) を有効化
      ap:
        ssid: "seeedstudio-mr60fda2"

    captive_portal:

    # XIAO ESP32C6 オンボード LED 用
    # light:
    #   - platform: status_led
    #     name: "スイッチ状態"
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
        name: "Seeed MR60FDA2 照度"
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
          name: "人物情報"
        fall_detected:
          name: "転倒情報"

    button:
      - platform: seeed_mr60fda2
        get_radar_parameters:
          name: "レーダーパラメータ取得"
        factory_reset:
          name: "リセット"

    select:
      - platform: seeed_mr60fda2
        install_height:
          name: "設置高さ設定"
        height_threshold:
          name: "高さ閾値設定"
        sensitivity:
          name: "感度設定"
    ```

3. **機能をカスタマイズ**: ESPHome のさまざまな機能を探索することで、センサーの能力を向上させ、特定のニーズに合わせて柔軟に調整できます。
4. **更新されたファームウェアをアップロード**: 変更を加えた後、設定を保存します。ESPHome ダッシュボードでは、ファームウェアを直接 OTA (Over-The-Air) でアップロードできます。「Upload」ボタンをクリックし、プロンプトに従ってプロセスを完了してください。この簡素化された方法により、ファームウェアを簡単に最新の状態に保つことができます。
5. **テストと反復**: アップロードが完了したら、リアルタイムで変更をテストします。センサーの性能を監視し、期待通りに動作することを確認してください。問題が発生した場合は、ESPHome ダッシュボードに戻り、設定を再調整します。この反復的なアプローチにより、ファームウェアを継続的に改善し、ニーズに効果的に対応することができます。

ESPHome を活用することで、センサー設定を継続的に改善し、進化するニーズに合わせて適応させることができます。この機能は、プロジェクトの機能を向上させるだけでなく、IoT 開発における学習と実験のプラットフォームを提供します。

これらの手順を通じて、MR60FDA2 mmWave センサーと XIAO ESP32C6 のセットアップの機能を最大化し、個々の好みやニーズに合わせた高度にカスタマイズされた応答性の高いスマートホームシステムに変えることができます。

## リソース

- [ESPHome — ESPHome](https://esphome.io/)
- [インストール - Home Assistant](https://www.home-assistant.io/installation/)
- [limengdu/MR60FDA2_ESPHome_external_components](https://limengdu.github.io/MR60FDA2_ESPHome_external_components)

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>