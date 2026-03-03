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

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

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

MR60BHA2 mmWaveセンサーとXIAO ESP32C6、Home Assistantの統合が正常に完了したので、セットアップを最大限に活用するためのさらなる機能強化を探求できます。考慮すべき2つの重要な方向性をご紹介します：

#### Home Assistantでの自動化の実装

Home Assistantの強力な自動化機能により、MR60BHA2センサーから収集されたデータに基づいて、より応答性の高いスマートホーム環境を作成できます。これは、動作や心拍検出に関連する特定のトリガーに基づいて自動的に実行されるアクションを設定できることを意味します。

自動化を段階的に実装する方法は次のとおりです：

1. **自動化セクションに移動**：Home Assistantダッシュボードで「自動化」タブを見つけてクリックします。このエリアは、ホーム内での自動化されたアクションの作成と管理に専用されています。
2. **新しい自動化を作成**：「自動化を追加」ボタンをクリックします。Home Assistantは、自動化の設定プロセスをガイドするユーザーフレンドリーなウィザードを提供します。
3. **トリガーを定義**：MR60BHA2センサーのデータに基づいてトリガーを選択します。例えば、センサーが動作や特定の心拍パターンを検出したときに自動化がトリガーされるように設定できます。これにより、自動化がセンサーの読み取り値に即座に応答できます。
4. **条件を設定（オプション）**：条件により、自動化が実行されるタイミングを細かく調整できます。例えば、外が暗いときや特定のユーザーが在宅のときにのみライトを点灯させたい場合があります。
5. **アクションを決定**：トリガー条件が満たされたときに実行されるアクションを指定します。アクションには、ライトの点灯、通知の送信、サーモスタット設定の調整などが含まれます。例えば、動作が検出されたときにRGBライトを点灯させるアクションを作成し、セキュリティと快適性の両方を向上させることができます。
6. **保存とテスト**：自動化を設定した後、保存してその機能をテストします。センサーの前を歩いて、期待通りにライトが点灯するかを確認します。問題が発生した場合は、自動化設定に戻ってトラブルシューティングと調整を行うことができます。

Home Assistantの自動化機能を活用することで、あなたの動きや健康指標に応答する真にスマートな環境を作成し、生活空間があなたのライフスタイルにシームレスに適応することを確実にできます。

## ESPHomeでのファームウェアの変更

XIAO ESP32C6を使用する大きな利点の一つは、マイクロコントローラーファームウェアの管理とカスタマイズのための強力なツールであるESPHomeとの互換性です。ESPHomeを使用すると、ファームウェアを直接変更して、MR60BHA2 mmWaveセンサーの機能を特定のニーズに合わせて調整できます。

ESPHomeを開始するには、次の手順に従ってください：

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

## トラブルシューティング

### レーダーセンサーデータレポートメカニズムの説明（v1.6.12以降）

この部分では、レーダーセンサーのさまざまな検出機能によってレポートされるデータのタイミング、精度、および必要な条件について詳しく説明します。これは、ユーザーがセンサーデータをより良く理解し、活用するのに役立つことを目的としています。

---

### 1. 人体静的存在検知

- **機能説明**:
    指定されたエリア内の静止している人体ターゲットの存在を検知します。
- **主要パラメータ**:
  - **有効検知範囲**: 最大**4メートル**。
- **データ報告ロジック**:
  - エリア内に人体ターゲットが検知された場合、「存在」ステータスを報告します。
  - エリアに人体ターゲットがいない場合、「不在」ステータスを報告します。
  - **注意**: 4メートルの検知範囲は人体静的存在検知機能専用です。呼吸・心拍検知やターゲット距離検知など、独自のより短い有効範囲を持つ他の機能には適用されません。この機能の唯一の目的は存在または不在を判定することであり、詳細なデータを提供することではありません。

---

### 2. 呼吸・心拍検知

- **機能説明**:
    単一の静止している人体ターゲットに対して非接触バイタルサイン検知を実行します。
- **主要パラメータ**:
  - **有効検知範囲**: 約**1.5メートル**。
  - **検知ターゲット**: 単一の静止している人間。
- **必要な動作条件**:
  - **ターゲットの静止**: 監視対象者は完全に静止している必要があります。
  - **デバイスの安定性**: レーダーデバイスは確実に固定され、揺れや振動がないようにする必要があります。
  - **単一ターゲット**: 検知範囲内には一人だけがいる必要があります。
- **データ報告ロジック**:
  - **正常報告**: 上記の条件がすべて満たされた場合、レーダーはリアルタイムの呼吸数と心拍数の値を報告します。
  - **異常報告シナリオ**:
    - **ターゲットが1.5m超**: 検知されたターゲットが1.5メートルの有効範囲を超えている場合、呼吸数と心拍数のデータは**更新を停止**し、最後の有効な測定値で保持されます。
    - **コアゾーンにターゲットなし**: 0.5～1.5メートルのコア検知ゾーン内にターゲットが検知されない場合、呼吸数と心拍数の値は積極的に**0**として報告されます。
- **注意**: 環境干渉にご注意ください。ファン、エアコン、揺れるカーテンなどからの微細な動きは、センサーによって誤解釈されることがあります。このような場合、人体ターゲットが検知されていなくても（呼吸数は0として報告される）、レーダーは非ゼロの**心拍数**値を報告する可能性があります。

---

### 3. ターゲット距離検知

- **対応ファームウェア**: `1.6.10`以降。
- **機能説明**:
    レーダーとターゲット間の直線距離を検知して報告します。
- **主要パラメータ**:
  - **最大有効検知範囲**: **5メートル**。
- **データ報告ロジックと制限**:
  - **ターゲットなし状態**: ターゲットが検知されない場合、距離値は**0**として報告されます。
  - **ターゲット検知**: 5メートル範囲内で1つ以上のターゲットが検知された場合、レーダーはセンサーに**最も近い**ターゲットの距離を報告します。
  - **データ未更新（最後の値を保持）**: 最も近いターゲットが5メートルの有効検知範囲に達するか、それを超えて移動した場合、距離値は更新を停止します。この場合、値は最後の有効な測定値で保持されます。
- **追跡性能**:
    近距離での静止ターゲットの安定性を確保するため、レーダーの追跡戦略は異なる距離に対して最適化されています。性能は以下の表に詳述されています：

| 距離範囲 | ターゲット状態 | 追跡性能と注意事項 |
| :--- | :--- | :--- |
| **0.5m～1.5m** | 静止 | **追跡成功率 > 96%**。性能は非常に安定しています。 |
| **1.5m～3m** | 静止 | **追跡成功率 > 90%**。性能は安定しています。 |
| **3m～5m** | 静止 | 追跡安定性が低下し、時折ターゲットロストが発生します。バージョン1.6.12では以前のバージョンより80%改善されています。 |
| **接近中** | 移動 | ターゲットが遠距離からレーダーに向かって移動する場合、安定した追跡は通常、人が約**3メートル**に到達したときに開始されます。 |
| **離脱中** | 移動 | ターゲットがレーダーから離れて移動する場合、追跡は**5メートルを超えて**継続できます。 |

---

### 4. 環境内人数カウント

- **機能説明**:
    検知エリア内の個人数の予備的な推定カウントを提供します。
- **データ説明**:
  - この機能は現在開発段階にあり、実験的なものと考えるべきです。返される値は複雑な信号解析から導出された大まかな推定値です。
  - その精度は、複数の人からの信号の重複、個人の姿勢、動きパターンなどの要因に大きく影響されます。
  - したがって、**この機能は正確な在室者数に依存するアプリケーションには適していません**。
  - 私たちは基盤となるアルゴリズムの改良に積極的に取り組んでおり、将来のファームウェアリリースで大幅な精度向上を提供することを期待しています。

## 技術サポート・製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
