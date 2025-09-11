---
title: MR60BHA2 呼吸心拍センサーとHome Assistant
description: | 
  MR60BHA2 心拍mmWaveセンサーとHome Assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/ha_with_mr60bha2
keywords:
  - ESPHome
sidebar_position: 1
last_update:
  date: 09/23/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Home AssistantでのRADAR使用範囲について
RADARファームウェアの更新とESPHome YAMLの更新は2つの異なるソフトウェアです。ESPHome YAMLはOTAで更新できますが、RADARボードはケース内でUSB経由でのみ更新でき、SEEEDが提供する専用ソフトウェアが必要です。ESPHomeソフトウェアはカスタマイズできますが、[RADARファームウェアはカスタマイズできません](https://wiki.seeedstudio.com/ja/getting_started_with_mr60bha2_mmwave_kit/#module-firmware-upgrade)。Seeed StudioはビジネスアプリケーションでのみRADARのカスタマイズを許可しています。
:::

## はじめに {#introduction}

MR60BHA2は、XIAO ESP32C6マイクロコントローラーとの統合用に設計された60GHz mmWave呼吸・心拍検出センサーモジュールです。この先進的なセンサーは、ミリ波技術を利用してバイタルサインの非侵襲的監視と存在検出を提供します。

このガイドは、XIAO ESP32C6マイクロコントローラーを使用してMR60BHA2 mmWaveセンサーをHome Assistantと統合するための明確で包括的なウォークスルーを提供することを目的としています。このガイドに従うことで、ユーザーは心拍検出用のセンサーの設定、Home Assistant環境への接続、ESPHomeを使用したデバイスの効果的な管理と監視の方法を学ぶことができます。

この統合により、ユーザーは高度なセンシング機能でスマートホームシステムを強化し、さまざまなアプリケーションでの自動応答とリアルタイム監視を可能にします。

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/></div>

## 製品概要

<div class="table-center">
   <table align="center">
      <tr>
         <th>MR60BHA2 mmWaveセンサー</th>
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

### MR60BHA2 mmWaveセンサーとXIAO ESP32C6

XIAO ESP32C6を使用してMR60BHA2 mmWaveセンサーをHome Assistantと効果的に統合するには、以下の重要なステップに従ってください：

:::caution
MR60BHA2モジュールの[ファームウェアを最新バージョンにアップグレード](/ja/getting_started_with_mr60bha2_mmwave_kit#module-firmware-upgrade)していることを確認してください。  
最新のファームウェアには人の存在検出と人員検出機能が追加されています。
:::

1. **[Home Assistantのセットアップ](#setting-up-home-assistant)**：スマートホームデバイスを管理するためにHome Assistantをインストールして設定し、センサーとのシームレスな接続を確保します。
2. **[MR60BHA2センサーの接続](#discovering-and-adding-the-device-in-home-assistant)**：MR60BHA2センサーをHome Assistantセットアップに発見して追加し、バイタルサインのリアルタイム監視を可能にする方法を学びます。
3. **[センサーデータの監視](#sensor-data-monitoring)**：統合後、センサーデータを効果的に監視し、心拍数と呼吸パターンの洞察を得ることができます。
4. **[自動化の実装](#implementing-automation-in-home-assistant)**：Home Assistantの強力な自動化機能を探索して、センサーデータに基づく応答アクションを作成し、スマートホーム環境を強化します。
5. **[ESPHomeでのファームウェア変更](#modifying-the-firmware-with-esphome)**：ESPHomeを利用してセンサーの機能をカスタマイズし、特定のニーズに合わせて調整して、より大きな柔軟性と制御を実現します。

これらのステップは統合プロセスをガイドし、MR60BHA2 mmWaveセンサーとXIAO ESP32C6セットアップを最大限に活用するのに役立ちます。

## はじめに {#getting-started}

:::note 注意
ファームウェアの更新や変更について言及する場合、XIAO ESP32C6上のファームウェアを特に指していることにご注意ください。
:::

MR60BHA2 mmWaveセンサーをHome Assistantと正常に統合するには、以下のコンポーネントが必要です：

- **Home Assistant**：センサーデータを管理するスマートホームプラットフォーム。
- **ESPHome Add-on**：ESP32デバイスの簡単な設定と管理を可能にするファームウェア。

### ステップ1：Home Assistantのセットアップ {#setting-up-home-assistant}

1. **インストール**：最適なパフォーマンスのために、仮想マシンまたはRaspberry Piに[Home Assistant OS](https://www.home-assistant.io/installation/)をインストールすることをお勧めします。Home Assistantウェブサイトのオフィシャルインストールガイドに従ってください。
2. **ESPHome Add-onの有効化**：
   - Home Assistantダッシュボードにアクセスします。
   - 「Add-ons」セクションに移動し、ESPHome add-onを検索します。
   - 「Install」をクリックし、次に「Start」をクリックして有効にします。
   - インストール後、XIAO ESP32C6との適切な通信を確保するためにadd-onを設定します。

:::caution 注意
新しいアイコンのため、ESPHomeプラグインバージョン2024.12.0以上をインストールしてください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを収集し、ESPHome add-onでHome Assistantをセットアップすることで、MR60BHA2 mmWaveセンサーの統合を進める準備が整います。

:::tip Home Assistantのインストール
Seeed Studio製品の一部についてHome Assistantのインストール方法も書いていますので、参考にしてください。

- [ODYSSEY-X86でのHome Assistant入門](/ja/ODYSSEY-X86-Home-Assistant)
- [reTerminalでのHome Assistant入門](/ja/reTerminal_Home_Assistant)
- [LinkStar H68K/reRouter CM4でのHome Assistant入門](/ja/h68k-ha-esphome)
:::

### ステップ2：キットの準備

デフォルトでは、デバイス（XIAO ESP32C6）には呼吸と心拍検出用のファームウェアが事前にフラッシュされています。ただし、ファームウェアを更新する必要がある2つのシナリオがあります：

1. **ファームウェアの再フラッシュ**：既存のファームウェアが破損している場合や、新しく開始する必要がある場合。
2. **ファームウェアのアップグレード**：機能が改善された新しいバージョンのファームウェアがある場合。

ファームウェアをフラッシュする2つの簡単な方法があります：

:::caution
FirefoxはESPデバイスでのファームウェアフラッシュをサポートしていません。代わりにGoogle ChromeまたはMicrosoft Edgeを使用してください。
:::

<Tabs>
<TabItem value='Web Tool'>

ファームウェアをフラッシュする簡単で直接的な方法として、この[Web Tool](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/)を使用できます。画面の指示に従ってください。

- `CONNECT`ボタンをクリックして接続を開始します。ツールが自動的にファームウェアを更新します。

何か問題が発生した場合は、画面のトラブルシューティング手順に従うか、`ESPHome Web`方法に切り替えてプロセスを完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/limengdu/MR60BHA2_ESPHome_external_components/releases)から`bin`ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルを解凍する必要があります）。

1. センサーキットをPCに接続します。
2. [ESPHome Web](https://web.esphome.io/)ページにアクセスします。
3. `*.factory.bin`サフィックスのファームウェアファイルを選択します。

ESPHome Web経由でファームウェアをフラッシュする詳細なウォークスルーについては、以下のビデオをご覧ください：

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアが更新され、Home Assistantとの統合の準備が整います。

#### キットのホットスポットに接続

ファームウェアを使用して、センサーキットの電源を入れると、Wi-Fiアクセスポイントが表示されます：`seeedstudio-mr60bha2`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/hotspot-name.png" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

`192.168.4.1`に移動して、Home Assistantサーバーのローカルネットワーク設定を構成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enter-psw.JPEG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### ステップ3：Home Assistantでのデバイスの発見と追加 {#discovering-and-adding-the-device-in-home-assistant}

このセクションでは、Home Assistantアプリを使用したプロセスを説明します。ロジックはWebと同じです。

1. **アプリを開く**：アプリを起動したら、Home Assistantサーバーを選択します。アプリが自動的にサーバーを見つけます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **アカウントの作成**：アカウントを作成していない場合は、作成する必要があります。その後、認証情報でログインします。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **統合ページに移動**：ログイン後、Home Assistantの「Integrations」ページに移動します。ESPHome add-onをインストールし、XIAO ESP32C6とHome Assistantサーバーの両方が同じネットワーク上にある場合、発見されたデバイスの下に`Seeed Studio MR60BHA2 Kit {device-mac-address}`デバイスが表示されるはずです。
4. **デバイスの追加**：クリックしてデバイスをHome Assistantセットアップに追加します。

  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-find.JPG" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-submit.JPG" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-add.JPG" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>

  `CONFIGURE`ボタンをクリックし、`SUBMIT`ボタンを押して確認し、デバイスを希望するエリア（例：寝室）に割り当てます。この後、デバイスはESPHome統合を通じて管理され、Home Assistantでの完全な制御と監視が可能になります。

## 監視と制御 {#監視と制御}

上記の手順に従うことで、MR60BHA2センサーをHome Assistantに正常に発見・追加し、リアルタイムでの監視と制御が可能になります。

### センサーデータの監視

センサーが「寝室」に追加されたので、「概要」タブに移動します。寝室セクションにmmWaveカードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-data-with-person-detection.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### RGBライトの制御

このセクションでは、RGBライトの制御方法について説明します。

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

対応するボックスをクリックして、RGBライトを直接制御します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-light-panel.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<iframe class="video-mp4" src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-control-light.mp4" title="Home Assistant Control RGB Light" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>

### 次のステップ {#次のステップ}

MR60BHA2 mmWaveセンサーをXIAO ESP32C6およびHome Assistantと正常に統合できたので、セットアップを最大限に活用するためのさらなる拡張を探索できます。考慮すべき2つの重要な方向性は以下の通りです：

#### Home Assistantでの自動化の実装

Home Assistantの強力な自動化機能により、MR60BHA2センサーから収集されたデータに基づいて、より応答性の高いスマートホーム環境を作成できます。これは、動きや心拍検出に関連する特定のトリガーに基づいて自動的に実行されるアクションを設定できることを意味します。

自動化を段階的に実装する方法は以下の通りです：

1. **自動化セクションに移動**：Home Assistantダッシュボードで「自動化」タブを見つけてクリックします。このエリアは、ホーム内での自動化されたアクションの作成と管理に専用されています。
2. **新しい自動化を作成**：「自動化を追加」ボタンをクリックします。Home Assistantは、自動化の設定プロセスをガイドするユーザーフレンドリーなウィザードを提供します。
3. **トリガーを定義**：MR60BHA2センサーのデータに基づいてトリガーを選択します。例えば、センサーが動きや特定の心拍パターンを検出したときに自動化がトリガーされるように設定できます。これにより、自動化がセンサーの読み取り値に即座に応答できます。
4. **条件を設定（オプション）**：条件により、自動化が実行されるタイミングを細かく調整できます。例えば、外が暗いときや特定のユーザーが在宅のときのみライトを点灯させたい場合があります。
5. **アクションを決定**：トリガー条件が満たされたときに実行されるアクションを指定します。アクションには、ライトの点灯、通知の送信、サーモスタット設定の調整などが含まれます。例えば、動きが検出されたときにRGBライトを点灯させるアクションを作成し、セキュリティと快適性の両方を向上させることができます。
6. **保存とテスト**：自動化を設定した後、保存してその機能をテストします。センサーの前を歩いて、期待通りにライトが点灯するかを確認します。問題が発生した場合は、自動化設定に戻ってトラブルシューティングと調整を行うことができます。

Home Assistantの自動化機能を活用することで、あなたの動きや健康指標に応答する真にスマートな環境を作成し、生活空間があなたのライフスタイルにシームレスに適応することを確実にできます。

## ESPHomeでのファームウェアの変更

XIAO ESP32C6を使用する大きな利点の一つは、マイクロコントローラーファームウェアの管理とカスタマイズのための強力なツールであるESPHomeとの互換性です。ESPHomeを使用すると、ファームウェアを直接変更して、MR60BHA2 mmWaveセンサーの機能を特定のニーズに合わせて調整できます。

ESPHomeを開始するには、以下の手順に従ってください：

1. **ESPHomeダッシュボードにアクセス**：Home AssistantでESPHomeアドオンに移動します。デバイス一覧にXIAO ESP32C6が表示されているはずです。

2. **新しい設定を作成**：デバイスをクリックして設定を開きます。ここで、センサーの感度、レポート間隔、出力形式などの設定を調整できます。ESPHomeはユーザーフレンドリーなYAML設定形式を使用し、さまざまなパラメータを定義できます。MR60BHA2センサー専用に設計された以下のテンプレートYAMLファイルを設定の出発点として使用できます：

  ```yaml showLineNumbers title=example/mr60bha2.yaml
    # template from https://github.com/limengdu/MR60BHA2_ESPHome_external_components
    substitutions:
      name: "seeedstudio-mr60bha2-kit"
      friendly_name: "seeedstudio-mr60bha2-kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60bha2_kit"
        version: "3.5"
      platformio_options:
        board_upload.maximum_size: 4194304
      min_version: "2024.3.2" # Fix logger compile error on ESP32-C6 esphome#6323


    esp32:
      board: esp32-c6-devkitc-1
      variant: esp32c6
      flash_size: 4MB # upload.flash_size
      framework:
        type: esp-idf

    # If you want to experience the latest components, you can remove this comment.
    # external_components:
    #   - source:
    #       type: git
    #       url: https://github.com/limengdu/MR60BHA2_ESPHome_external_components
    #       ref: main
    #     components: [ seeed_mr60bha2 ]
    #     refresh: 0s

    # Enable logging
    logger:
      hardware_uart: USB_SERIAL_JTAG
      level: DEBUG

    # Enable Home Assistant API
    api:

    ota:
      - platform: esphome

    # It is highly recommended to use secrets
  wifi:
    ssid: !secret wifi_ssid
    password: !secret wifi_password

      ap:
        ssid: "seeedstudio-mr60bha2"


    captive_portal:

    # For XIAO ESP32C6 Onboard LED
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
        has_target:
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
        num_targets:
          name: "Target number"
  ```

3. **機能のカスタマイズ**：ESPHomeで利用可能なさまざまな機能を探索することで、センサーの機能を強化し、特定のニーズに合わせて柔軟に調整できます。

4. **更新されたファームウェアをアップロード**：変更を行った後、設定を保存します。ESPHomeダッシュボードでは、ファームウェアを無線で直接アップロードできます。`Upload`ボタンをクリックし、プロンプトに従ってプロセスを完了します。この合理化された方法により、ファームウェアを最新の状態に保つことが簡単になります。

5. **テストと反復**：アップロードが完了したら、変更をリアルタイムでテストします。センサーのパフォーマンスを監視して、期待通りに動作することを確認します。問題が発生した場合は、ESPHomeダッシュボードに戻って設定を調整します。この反復的なアプローチにより、ファームウェアを継続的に改善し、要件を効果的に満たすことができます。

ESPHomeを活用することで、センサーセットアップの継続的な改善を行い、進化するニーズに適応させることができます。この機能は、プロジェクトの機能性を向上させるだけでなく、IoT開発での学習と実験のプラットフォームも提供します。

これらの手順を通じて、MR60BHA2 mmWaveセンサーとXIAO ESP32C6セットアップの機能を最大化し、あなたの好みとニーズに合わせて高度にカスタマイズされた応答性の高いスマートホームシステムに変換できます。

## リソース

- [ESPHome — ESPHome](https://esphome.io/)
- [Installation - Home Assistant](https://www.home-assistant.io/installation/)
- [limengdu/MR60BHA2_ESPHome_external_components](https://github.com/limengdu/MR60BHA2_ESPHome_external_components)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

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
