---
title: MR60BHA2 呼吸・心拍センサーと Home Assistant の統合
description: | 
  MR60BHA2 心拍 mmWave センサーと Home Assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/ha_with_mr60bha2
keywords:
  - ESPHome
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

MR60BHA2 は、XIAO ESP32C6 マイクロコントローラーとの統合を目的として設計された 60GHz mmWave 呼吸・心拍検出センサー モジュールです。この高度なセンサーはミリ波技術を利用して、非侵襲的なバイタルサインの監視と存在検出を提供します。

このガイドでは、XIAO ESP32C6 マイクロコントローラーを使用して MR60BHA2 mmWave センサーを Home Assistant に統合するための明確で包括的な手順を提供します。このガイドに従うことで、ユーザーは心拍検出用のセンサーを設定し、Home Assistant 環境に接続し、ESPHome を使用してデバイスを効果的に管理および監視する方法を学ぶことができます。

この統合により、ユーザーはスマートホームシステムを高度なセンシング機能で強化し、さまざまな用途における自動応答やリアルタイム監視を可能にします。

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/></div>

## 製品概要

<div class="table-center">
   <table align="center">
      <tr>
         <th>MR60BHA2 mmWave センサー</th>
      </tr>
      <tr>
         <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:360, height:'auto', "border-radius": '6px'}}/></div></td>
      </tr>
      <tr>
         <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### MR60BHA2 mmWave センサーと XIAO ESP32C6

MR60BHA2 mmWave センサーを XIAO ESP32C6 を使用して Home Assistant に効果的に統合するためには、以下の重要な手順を実行してください：

:::caution
MR60BHA2 モジュールの[ファームウェアを最新バージョンにアップグレード](/ja/getting_started_with_mr60bha2_mmwave_kit#module-firmware-upgrade)してください。  
最新のファームウェアでは、人の存在検出および人員検出機能が追加されています。
:::

1. **[Home Assistant のセットアップ](#setting-up-home-assistant)**: Home Assistant をインストールしてスマートホームデバイスを管理し、センサーとのシームレスな接続を確保します。
2. **[MR60BHA2 センサーの接続](#discovering-and-adding-the-device-in-home-assistant)**: MR60BHA2 センサーを Home Assistant に追加してリアルタイムでバイタルサインを監視する方法を学びます。
3. **[センサーデータの監視](#sensor-data-monitoring)**: 統合後、センサーデータを効果的に監視し、心拍数や呼吸パターンの洞察を得ることができます。
4. **[Home Assistant での自動化の実装](#implementing-automation-in-home-assistant)**: Home Assistant の強力な自動化機能を活用して、センサーデータに基づいた応答アクションを作成し、スマートホーム環境を強化します。
5. **[ESPHome を使用したファームウェアの変更](#modifying-the-firmware-with-esphome)**: ESPHome を利用してセンサーの機能をカスタマイズし、特定のニーズに合わせて柔軟性と制御性を向上させます。

これらの手順に従うことで、MR60BHA2 mmWave センサーと XIAO ESP32C6 のセットアップを最大限に活用する方法を学ぶことができます。

## はじめに {#getting-started}

:::note 注意
ファームウェアの更新や変更について言及する場合、XIAO ESP32C6のファームウェアを特に指していることに注意してください。
:::

MR60BHA2 mmWaveセンサーをHome Assistantと統合するには、以下のコンポーネントが必要です：

- **Home Assistant**: センサーのデータを管理するスマートホームプラットフォーム。
- **ESPHomeアドオン**: ESP32デバイスの簡単な設定と管理を可能にするファームウェア。

### ステップ1: Home Assistantのセットアップ {#setting-up-home-assistant}

1. **インストール**: 最適なパフォーマンスを得るために、[Home Assistant OS](https://www.home-assistant.io/installation/)を仮想マシンやRaspberry Piにインストールすることを推奨します。公式のインストールガイドに従ってください。
2. **ESPHomeアドオンの有効化**:
   - Home Assistantのダッシュボードにアクセスします。
   - 「アドオン」セクションに移動し、ESPHomeアドオンを検索します。
   - 「インストール」をクリックし、その後「開始」をクリックして有効化します。
   - インストール後、XIAO ESP32C6との適切な通信を確保するためにアドオンを設定します。

:::caution 注意
新しいアイコンのため、ESPHomeプラグインバージョン2024.12.0以上をインストールしてください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを収集し、ESPHomeアドオンを使用してHome Assistantをセットアップすることで、MR60BHA2 mmWaveセンサーの統合を進める準備が整います。

:::tip Home Assistantのインストール
Seeed Studio製品向けにHome Assistantのインストール方法も記載していますので、参考にしてください。

- [ODYSSEY-X86でのHome Assistantの始め方](/ja/ODYSSEY-X86-Home-Assistant)
- [reTerminalでのHome Assistantの始め方](/ja/reTerminal_Home_Assistant)
- [LinkStar H68K/reRouter CM4でのHome Assistantの始め方](/ja/h68k-ha-esphome)
:::

### ステップ2: キットの準備

デフォルトでは、XIAO ESP32C6デバイスには呼吸と心拍数検出用のファームウェアがプリインストールされています。ただし、以下の2つのシナリオではファームウェアを更新する必要があります：

1. **ファームウェアの再フラッシュ**: 既存のファームウェアが破損している場合や、新しい状態から始めたい場合。
2. **ファームウェアのアップグレード**: 機能が改善された新しいバージョンのファームウェアがある場合。

ファームウェアをフラッシュする方法は以下の2つです：

:::caution
FirefoxはESPデバイスのファームウェアフラッシュをサポートしていません。Google ChromeまたはMicrosoft Edgeを使用してください。
:::

<Tabs>
<TabItem value='Web Tool'>

この[Web Tool](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/)を使用すると、簡単かつ直接的にファームウェアをフラッシュできます。画面上の指示に従ってください。

- `CONNECT`ボタンをクリックして接続を開始します。このツールは自動的にファームウェアを更新します。

問題が発生した場合は、画面上のトラブルシューティング手順に従うか、`ESPHome Web`メソッドに切り替えてプロセスを完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/limengdu/MR60BHA2_ESPHome_external_components/releases)から`bin`ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルを解凍してください）。

1. センサーキットをPCに接続します。
2. [ESPHome Web](https://web.esphome.io/)ページにアクセスします。
3. `*.factory.bin`という接尾辞のファームウェアファイルを選択します。

以下の動画で、ESPHome Webを使用したファームウェアフラッシュの詳細な手順をご覧ください：

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="ESPHome Webでのファームウェアインストール" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアを更新し、Home Assistantとの統合の準備が整います。

#### キットのホットスポットに接続する

ファームウェアを使用してセンサーキットの電源を入れると、Wi-Fiアクセスポイント`seeedstudio-mr60bha2`が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/hotspot-name.png" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

`192.168.4.1`に移動して、Home Assistantサーバーのローカルネットワーク設定を構成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enter-psw.JPEG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### ステップ3: Home Assistantでデバイスを検出して追加する {#discovering-and-adding-the-device-in-home-assistant}

このセクションでは、Home Assistantアプリを使用したプロセスを説明します。ロジックはウェブ版と同じです。

1. **アプリを開く**: アプリを起動したら、Home Assistantサーバーを選択します。アプリは自動的にサーバーを検出します。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **アカウントを作成する**: アカウントを作成していない場合は作成する必要があります。その後、資格情報でログインします。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **統合ページに移動する**: ログイン後、Home Assistantの「統合」ページに移動します。ESPHomeアドオンをインストールしており、XIAO ESP32C6とHome Assistantサーバーが同じネットワーク上にある場合、`Seeed Studio MR60BHA2 Kit {device-mac-address}`というデバイスが検出されたデバイスの下に表示されるはずです。
4. **デバイスを追加する**: デバイスをHome Assistantのセットアップに追加するにはクリックします。
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-find.JPG" alt="デバイスを検出"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-submit.JPG" alt="デバイスを送信"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-add.JPG" alt="エリア"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="アドオン"/>
  </div>

`CONFIGURE`ボタンをクリックし、`SUBMIT`ボタンを押して確認した後、デバイスを希望するエリア（例：寝室）に割り当てます。この操作が完了すると、デバイスはESPHome統合を通じて管理され、Home Assistantで完全な制御と監視が可能になります。

## 監視と制御 {#monitoring-and-control}

上記の手順を完了することで、MR60BHA2センサーをHome Assistantに追加し、リアルタイムの監視と制御が可能になります。

### センサーのデータ監視

センサーが「寝室」に追加されたら、「概要」タブに移動します。寝室セクションにmmWaveカードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-data-with-person-detection.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### RGBライトの制御

このセクションでは、RGBライトの制御方法について説明します。

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

対応するボックスをクリックしてRGBライトを直接制御します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-light-panel.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<iframe class="video-mp4" src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-control-light.mp4" title="Home Assistant Control RGB Light" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>

### 次のステップ {#next-steps}

MR60BHA2 mmWaveセンサーをXIAO ESP32C6およびHome Assistantと統合したので、セットアップを最大限に活用するためのさらなる拡張を探求できます。以下の2つの重要な方向性を検討してください：

#### Home Assistantでの自動化の実装

Home Assistantの強力な自動化機能を活用することで、MR60BHA2センサーから収集したデータに基づいて、より応答性の高いスマートホーム環境を構築できます。これにより、動作や心拍検出に関連する特定のトリガーに基づいて自動的にアクションを設定できます。

以下は、自動化を実装する手順です：

1. **自動化セクションに移動**: Home Assistantのダッシュボードで「Automations」タブを見つけてクリックします。このエリアは、家庭内の自動化アクションを作成および管理するための専用セクションです。
2. **新しい自動化を作成**: 「Add Automation」ボタンをクリックします。Home Assistantは、ユーザーが自動化を設定するプロセスをガイドする使いやすいウィザードを提供します。
3. **トリガーを定義**: MR60BHA2センサーのデータに基づいてトリガーを選択します。例えば、センサーが動作や特定の心拍パターンを検出したときに自動化をトリガーするよう設定できます。これにより、センサーの読み取りに即座に応答する自動化が可能になります。
4. **条件を設定（オプション）**: 条件を設定することで、自動化が実行されるタイミングを絞り込むことができます。例えば、外が暗い場合や特定のユーザーが家にいる場合にのみライトをオンにするよう設定できます。
5. **アクションを決定**: トリガー条件が満たされた場合に実行されるアクションを指定します。アクションには、ライトのオン/オフ、通知の送信、またはサーモスタット設定の調整などが含まれます。例えば、動作が検出されたときにRGBライトをオンにするアクションを作成し、セキュリティと快適性を向上させることができます。
6. **保存とテスト**: 自動化を設定したら保存し、その機能をテストします。センサーの前を通り過ぎて、ライトが期待通りにオンになるか確認してください。問題が発生した場合は、自動化設定に戻ってトラブルシューティングと調整を行うことができます。

Home Assistantの自動化機能を活用することで、動作や健康指標に応じて生活空間がシームレスに適応する、真にスマートな環境を構築できます。

## ESPHome を使用したファームウェアの変更

XIAO ESP32C6 を使用する大きな利点の一つは、強力なツールである ESPHome と互換性があることです。ESPHome を使用すると、マイクロコントローラーのファームウェアを直接変更し、MR60BHA2 mmWave センサーの機能を特定のニーズに合わせてカスタマイズすることができます。

ESPHome を使用するには、以下の手順に従ってください：

1. **ESPHome ダッシュボード にアクセス**: Home Assistant 内で ESPHome アドオンに移動します。XIAO ESP32C6 がデバイス一覧に表示されているはずです。

2. **新しい設定を作成**: デバイスをクリックして設定を開きます。ここでは、センサーの感度、報告間隔、出力形式などの設定を調整できます。ESPHome は YAML 設定形式を使用しており、ユーザーフレンドリーでさまざまなパラメータを定義できます。以下のテンプレート YAML ファイルを使用して、MR60BHA2 センサー用の設定を開始できます：

  ```yaml showLineNumbers title=example/mr60bha2.yaml
  # https://github.com/limengdu/MR60BHA2_ESPHome_external_components からのテンプレート

  substitutions:
    name: "seeedstudio-mr60bha2-kit"
    friendly_name: "Seeed Studio MR60BHA2 Kit"

  esphome:
    name: "${name}"
    friendly_name: "${friendly_name}"
    name_add_mac_suffix: true
    project:
      name: "seeedstudio.mr60bha2_kit"
      version: "2.0"
    platformio_options:
      board_upload.maximum_size: 4194304
    min_version: "2024.3.2" # ESP32-C6 のロガーコンパイルエラー修正 esphome#6323

  esp32:
    board: esp32-c6-devkitc-1
    variant: esp32c6
    flash_size: 4MB # upload.flash_size
    framework:
      type: esp-idf

  external_components:
    - source:
        type: git
        url: https://github.com/limengdu/MR60BHA2_ESPHome_external_components
        ref: main
      components: [ seeed_mr60bha2 ]
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
      ssid: "seeedstudio-mr60bha2"

  captive_portal:

  # XIAO ESP32C6 のオンボード LED 用
  # light:
  #   - platform: status_led
  #     name: "Switch state"
  #     pin: GPIO15

  light:
    - platform: esp32_rmt_led_strip
      id: led_ring
      name: "Seeed MR60BHA2 RGB Light"
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

  uart:
    id: uart_bus
    baud_rate: 115200
    rx_pin: 17
    tx_pin: 16
    parity: NONE
    stop_bits: 1

  seeed_mr60bha2:
    id: my_seeed_mr60bha2

  binary_sensor:
    - platform: seeed_mr60bha2
      people_exist:
        name: "Person Information"

  sensor:
    - platform: bh1750
      name: "Seeed MR60BHA2 Illuminance"
      address: 0x23
      update_interval: 1s
    - platform: seeed_mr60bha2
      breath_rate:
        name: "Real-time respiratory rate"
      heart_rate:
        name: "Real-time heart rate"
      distance:
        name: "Distance to detection object"
      target_num:
        name: "Target Number"
  ```

3. **機能をカスタマイズ**: ESPHome のさまざまな機能を探索することで、センサーの能力を向上させ、特定のニーズに合わせて柔軟に調整できます。

4. **更新されたファームウェアをアップロード**: 変更を加えた後、設定を保存します。ESPHome ダッシュボードでは、ファームウェアを直接 OTA (Over-The-Air) でアップロードできます。「Upload」ボタンをクリックし、プロンプトに従ってプロセスを完了してください。この簡素化された方法により、ファームウェアを簡単に最新の状態に保つことができます。

5. **テストと反復**: アップロードが完了したら、リアルタイムで変更をテストします。センサーの性能を監視し、期待通りに動作していることを確認してください。問題が発生した場合は、ESPHome ダッシュボードに戻り、設定を調整してください。この反復的なアプローチにより、ファームウェアを継続的に改善し、効果的にニーズを満たすことができます。

ESPHome を活用することで、センサー設定を継続的に改善し、進化するニーズに合わせて適応させることができます。この機能は、プロジェクトの機能を向上させるだけでなく、IoT 開発における学習と実験のプラットフォームを提供します。

これらの手順を通じて、MR60BHA2 mmWave センサーと XIAO ESP32C6 のセットアップの機能を最大化し、個々の好みやニーズに合わせた高度にカスタマイズされた応答性の高いスマートホームシステムに変えることができます。

## リソース

- [ESPHome — ESPHome](https://esphome.io/)
- [インストール - Home Assistant](https://www.home-assistant.io/installation/)
- [limengdu/MR60BHA2_ESPHome_external_components](https://github.com/limengdu/MR60BHA2_ESPHome_external_components)

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>