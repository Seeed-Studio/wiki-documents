---
title: MR60BHA2 呼吸・心拍センサーと Home Assistant の連携
description: |
  MR60BHA2 心拍 mmWave センサーと Home Assistant の連携
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ha_with_mr60bha2
keywords:
  - ESPHome
sidebar_position: 1
last_update:
  date: 09/23/2024
  author: Spencer
createdAt: '2024-10-08'
updatedAt: '2025-10-20'
url: https://wiki.seeedstudio.com/ja/ha_with_mr60bha2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Home Assistant におけるレーダー利用範囲について
RADAR のファームウェア更新と ESPHome の YAML 更新は、2 つの異なるソフトウェアです。ESPHome の YAML は OTA で更新できますが、RADAR ボードは SEEED が提供する専用ソフトウェアを用いて、ケース内部の USB 経由でのみ更新できます。ESPHome ソフトウェアはカスタマイズ可能ですが、[RADAR ファームウェアはカスタマイズできません](https://wiki.seeedstudio.com/ja/getting_started_with_mr60bha2_mmwave_kit/#モジュール-ファームウェア-アップグレード)。Seeed Studio は、ビジネス用途の場合にのみ RADAR のカスタマイズを許可しています。
:::

## はじめに {#introduction}

MR60BHA2 は、XIAO ESP32C6 マイコンとの統合用に設計された 60GHz mmWave 呼吸・心拍検出センサーモジュールです。この高度なセンサーはミリ波技術を利用し、バイタルサインおよび在室検知を非接触で行います。

本ガイドは、XIAO ESP32C6 マイコンを用いて MR60BHA2 mmWave センサーを Home Assistant と連携するための、わかりやすく包括的な手順を提供することを目的としています。本ガイドに従うことで、ユーザーは心拍検出用にセンサーをセットアップし、Home Assistant 環境に接続し、ESPHome を利用してデバイスを効果的に管理・監視する方法を学ぶことができます。

この連携により、高度なセンシング機能をスマートホームシステムに追加でき、さまざまな用途において自動応答やリアルタイム監視を実現できます。

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
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### MR60BHA2 mmWave センサーと XIAO ESP32C6

MR60BHA2 mmWave センサーを XIAO ESP32C6 を用いて Home Assistant と効果的に連携させるには、次の基本ステップに従ってください。

:::caution
MR60BHA2 モジュールの[ファームウェアをアップグレード](/ja/getting_started_with_mr60bha2_mmwave_kit#モジュール-ファームウェア-アップグレード)し、最新バージョンにしていることを確認してください。  
最新のファームウェアでは、人の在室検知および人物検出機能が追加されています。
:::

1. **[Home Assistant のセットアップ](#home-assistant-のセットアップ)**: まず Home Assistant をインストールして設定し、センサーとのシームレスな接続が行えるようにスマートホームデバイスを管理します。
2. **[MR60BHA2 センサーの接続](#home-assistant-でのデバイス検出と追加)**: MR60BHA2 センサーを Home Assistant 環境に検出・追加する方法を学び、バイタルサインをリアルタイムで監視できるようにします。
3. **[センサーデータの監視](#センサーデータの監視)**: 連携後は、センサーデータを効果的に監視し、心拍数や呼吸パターンに関する洞察を得ることができます。
4. **[自動化の実装](#home-assistant-での自動化の実装)**: Home Assistant の強力な自動化機能を活用し、センサーデータに基づいて応答動作を作成し、スマートホーム環境を強化します。
5. **[ESPHome によるファームウェアの変更](#esphome-によるファームウェアの変更)**: ESPHome を利用してセンサーの機能をカスタマイズし、ニーズに合わせて柔軟性と制御性を高めます。

これらのステップに従うことで、MR60BHA2 mmWave センサーと XIAO ESP32C6 のセットアップを最大限に活用しながら、連携プロセスを進めることができます。

## 入門ガイド {#getting-started}

:::note 注意
ここでファームウェアの更新や変更について言及する場合、それは XIAO ESP32C6 上のファームウェアを指していることにご注意ください。
:::

MR60BHA2 mmWave センサーを Home Assistant と正常に連携させるには、以下のコンポーネントが必要です。

- **Home Assistant**: センサーデータを管理するスマートホームプラットフォーム。
- **ESPHome アドオン**: ESP32 デバイスの簡単な設定と管理を可能にするファームウェア。

### ステップ 1: Home Assistant のセットアップ {#setting-up-home-assistant}

1. **インストール**: 最適なパフォーマンスのため、[Home Assistant OS](https://www.home-assistant.io/installation/) を仮想マシンまたは Raspberry Pi にインストールすることを推奨します。Home Assistant 公式サイトのインストールガイドに従ってください。
2. **ESPHome アドオンの有効化**:
   - Home Assistant のダッシュボードにアクセスします。
   - 「Add-ons」セクションに移動し、ESPHome アドオンを検索します。
   - "Install" をクリックし、その後 "Start" をクリックして有効化します。
   - インストール後、XIAO ESP32C6 と適切に通信できるようアドオンを設定します。

:::caution 注意
新しいアイコンに対応するため、ESPHome プラグインはバージョン 2024.12.0 以降をインストールしてください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを揃え、ESPHome アドオン付きの Home Assistant をセットアップすれば、MR60BHA2 mmWave センサーとの連携を進める準備が整います。

:::tip Home Assistant のインストール
Seeed Studio のいくつかの製品向けに、Home Assistant のインストール方法も記載していますので、そちらも参照してください。

- [ODYSSEY-X86 での Home Assistant 入門](/ja/ODYSSEY-X86-Home-Assistant)
- [reTerminal での Home Assistant 入門](/ja/reTerminal_Home_Assistant)
- [LinkStar H68K/reRouter CM4 での Home Assistant 入門](/ja/h68k-ha-esphome)
:::

### ステップ 2: キットの準備

既定では、デバイス（XIAO ESP32C6）には呼吸および心拍検出用のファームウェアが書き込まれた状態で出荷されています。ただし、次の 2 つの状況ではファームウェアを更新する必要があります。

1. **ファームウェアの再書き込み**: 既存のファームウェアが破損している場合、または一からやり直す必要がある場合。
2. **ファームウェアのアップグレード**: 機能が向上した新しいバージョンのファームウェアがある場合。

ファームウェアを書き込む簡単な方法は 2 つあります。

:::caution
Firefox は ESP デバイスへのファームウェア書き込みをサポートしていません。代わりに Google Chrome または Microsoft Edge を使用してください。
:::

<Tabs>
<TabItem value='Web Tool'>

この[Web Tool](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/)を使用すると、簡単かつ直接的な方法でファームウェアを書き込むことができます。画面の指示に従うだけです。

- `CONNECT` ボタンをクリックして接続を開始します。ツールが自動的にファームウェアを更新します。

問題が発生した場合は、画面上のトラブルシューティング手順に従うか、`ESPHome Web` の方法に切り替えて処理を完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/limengdu/MR60BHA2_ESPHome_external_components/releases)から `bin` ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルは解凍する必要があります）。

1. センサーキットを PC に接続します。
2. [ESPHome Web](https://web.esphome.io/) ページにアクセスします。
3. `*.factory.bin` という拡張子のファームウェアファイルを選択します。

ESPHome Web を介してファームウェアを書き込む手順については、次の動画をご覧ください。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアを更新し、Home Assistant との連携に備えることができます。

#### キットのホットスポットに接続する

ファームウェアが書き込まれた状態でセンサーキットの電源を入れると、`seeedstudio-mr60bha2` という Wi-Fi アクセスポイントが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/hotspot-name.png" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

`192.168.4.1` にアクセスし、Home Assistant サーバーのローカルネットワーク設定を行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enter-psw.JPEG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### ステップ 3: Home Assistant でのデバイス検出と追加 {#discovering-and-adding-the-device-in-home-assistant}

このセクションでは、Home Assistant アプリを使用した手順を説明します。ロジックは Web 版と同じです。

1. **アプリを開く**: アプリを起動したら、Home Assistant サーバーを選択します。アプリは自動的にサーバーを検出します。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **アカウントを作成する**: まだアカウントを作成していない場合は、作成する必要があります。その後、認証情報を使ってログインします。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **インテグレーションページへ移動**: ログイン後、Home Assistant の「Integrations」ページに移動します。ESPHome アドオンをインストールしており、XIAO ESP32C6 と Home Assistant サーバーの両方が同じネットワーク上にある場合、検出されたデバイスの一覧に `Seeed Studio MR60BHA2 Kit {device-mac-address}` が表示されるはずです。
4. **デバイスを追加する**: クリックしてデバイスを Home Assistant のセットアップに追加します。
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-find.JPG" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-submit.JPG" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-add.JPG" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>

  `CONFIGURE` ボタンをクリックし、`SUBMIT` ボタンを押して確認したうえで、デバイスを任意のエリア（例：Bedroom）に割り当てます。これが完了すると、デバイスは ESPHome 連携を通じて管理され、Home Assistant 上で完全な制御とモニタリングが可能になります。

## 監視と制御 {#monitoring-and-control}

上記の手順に従うことで、MR60BHA2 センサーを Home Assistant に検出・追加でき、リアルタイムでの監視と制御が可能になります。

### センサーデータのモニタリング

センサーが "Bedroom" に追加されたので、「Overview」タブに移動します。Bedroom セクションに mmWave カードが表示されているのが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-data-with-person-detection.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### RGB ライトの制御

このセクションでは、RGB ライトをどのように制御するかを説明します。

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

対応するボックスをクリックすると、RGB ライトを直接制御できます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-light-panel.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<iframe class="video-mp4" src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-control-light.mp4" title="Home Assistant Control RGB Light" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>

### 次のステップ {#next-steps}

MR60BHA2 mmWave センサーを XIAO ESP32C6 と Home Assistant に正常に統合できたので、セットアップを最大限に活用するためのさらなる拡張を検討できます。ここでは、特に重要な 2 つの方向性を紹介します。

#### Home Assistant でオートメーションを実装する

Home Assistant の強力なオートメーション機能を使うと、MR60BHA2 センサーから収集されたデータに基づいて、より応答性の高いスマートホーム環境を構築できます。つまり、動きや心拍検出に関連する特定のトリガーに基づいて、自動的に実行されるアクションを設定できます。

以下の手順で、オートメーションを段階的に実装します：

1. **オートメーションセクションへ移動**：Home Assistant のダッシュボードで「Automations」タブを探してクリックします。このエリアでは、家庭内の自動アクションの作成と管理を行います。
2. **新しいオートメーションを作成**：「Add Automation」ボタンをクリックします。Home Assistant には、オートメーションの設定プロセスを案内してくれるユーザーフレンドリーなウィザードが用意されています。
3. **トリガーを定義**：MR60BHA2 センサーのデータに基づいてトリガーを選択します。例えば、センサーが動きを検出したときや、特定の心拍パターンを検出したときにオートメーションが起動するように設定できます。これにより、オートメーションはセンサーの読み取り値に即座に反応できます。
4. **条件を設定（任意）**：条件を設定することで、オートメーションを実行するタイミングをさらに絞り込めます。例えば、外が暗いときだけ、または特定のユーザーが在宅している場合にのみライトを点灯させる、といった設定が可能です。
5. **アクションを決定**：トリガー条件が満たされたときに実行されるアクションを指定します。アクションには、ライトのオン／オフ、通知の送信、サーモスタット設定の調整などが含まれます。例えば、動きが検出されたときに RGB ライトを点灯させるアクションを作成し、防犯性と快適性の両方を高めることができます。
6. **保存してテスト**：オートメーションの設定が完了したら保存し、その動作をテストします。センサーの前を歩いて、ライトが期待どおりに点灯するか確認します。問題が発生した場合は、オートメーション設定に戻ってトラブルシューティングや調整を行ってください。

Home Assistant のオートメーション機能を活用することで、動きや健康指標に反応する真のスマート環境を構築でき、生活空間があなたのライフスタイルにシームレスに適応するようになります。

## ESPHome によるファームウェアの変更

XIAO ESP32C6 を使用する大きな利点の 1 つは、マイコンのファームウェア管理とカスタマイズに強力なツールである ESPHome と互換性があることです。ESPHome を使用すると、MR60BHA2 mmWave センサーの機能をニーズに合わせて調整できるよう、ファームウェアを直接変更できます。

ESPHome を使い始めるには、次の手順に従います：

1. **ESPHome ダッシュボードにアクセス**：Home Assistant で ESPHome アドオンに移動します。デバイス一覧に XIAO ESP32C6 が表示されているはずです。

2. **新しい設定を作成**：デバイスをクリックして、その設定画面を開きます。ここで、センサーの感度、レポート間隔、出力フォーマットなどの設定を調整できます。ESPHome は YAML 設定フォーマットを使用しており、ユーザーフレンドリーでさまざまなパラメータを定義できます。MR60BHA2 センサー専用に設計された、以下のテンプレート YAML ファイルを設定の出発点として使用できます：

  ```yaml showLineNumbers title=example/mr60bha2.yaml
    substitutions:
      name: "seeedstudio-mr60bha2-kit"
      friendly_name: "seeedstudio-mr60bha2-kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60bha2_kit"
        version: "3.6"
      platformio_options:
        board_upload.maximum_size: 4194304
      min_version: "2026.8.0"


    esp32:
      board: esp32-c6-devkitc-1
      variant: esp32c6
      flash_size: 4MB # upload.flash_size
      framework:
        type: esp-idf

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
        channel_colors: GRB
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

3. **機能をカスタマイズ**：ESPHome で利用可能なさまざまな機能を活用することで、センサーの機能を拡張し、ニーズに合わせて柔軟に調整できます。

4. **更新したファームウェアをアップロード**：変更を加えたら、設定を保存します。ESPHome ダッシュボードからは、ファームウェアを OTA（無線）で直接アップロードできます。`Upload` ボタンをクリックし、表示される手順に従ってプロセスを完了してください。この合理化された方法により、ファームウェアを簡単に最新状態に保つことができます。

5. **テストと反復**：アップロードが完了したら、リアルタイムで変更内容をテストします。センサーの動作を監視し、期待どおりに動いているか確認します。問題が発生した場合は、ESPHome ダッシュボードに戻って設定を微調整してください。この反復的なアプローチにより、ファームウェアを継続的に改善し、要件を効果的に満たせるようにできます。

ESPHome を活用することで、センサー構成を継続的に改善し、変化するニーズに合わせて調整することができます。この機能は、プロジェクトの機能性を高めるだけでなく、IoT 開発における学習と実験のためのプラットフォームも提供します。

これらのステップを通じて、MR60BHA2 mmWave センサーと XIAO ESP32C6 のセットアップの機能を最大限に引き出し、好みやニーズに合わせて高度にカスタマイズされた応答性の高いスマートホームシステムへと変貌させることができます。

## リソース

- [ESPHome — ESPHome](https://esphome.io/)
- [Installation - Home Assistant](https://www.home-assistant.io/installation/)
- [MR60BHA2 ESPHome project source](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-mr60bha2-kit)

## トラブルシューティング

### レーダーセンサーのデータ報告メカニズムの説明（v1.6.12 以降）

このパートでは、レーダーセンサーの各種検出機能によって報告されるデータのタイミング、精度、および必要条件について詳しく説明します。これは、ユーザーがセンサーデータをよりよく理解し、活用できるようにすることを目的としています。

---

### 1. 人体静止在席検知

- **機能説明**：
    指定されたエリア内に静止した人体ターゲットが存在するかどうかを検出します。
- **主要パラメータ**：
  - **有効検出距離**：最大 **4 メートル**。
- **データ報告ロジック**：
  - エリア内で人体ターゲットが検出された場合、「Presence」ステータスを報告します。
  - エリア内に人体ターゲットが存在しない場合、「No Presence」ステータスを報告します。
  - **注意**：4 メートルの検出距離は、人体静止在席検知機能にのみ適用されます。Breathing & Heartbeat Detection や Target Distance Detection などの他の機能には適用されず、それぞれ独自の、より短い有効距離があります。この機能の唯一の目的は在席か不在かを判定することであり、詳細なデータを提供することではありません。

---

### 2. 呼吸および心拍検出

- **機能説明**:
    単一の静止した人間ターゲットに対して、非接触でバイタルサインを検出します。
- **主なパラメータ**:
  - **有効検出距離**: およそ **1.5 メートル**。
  - **検出ターゲット**: 単一の静止した人。
- **必要な動作条件**:
  - **ターゲットの静止**: 監視対象の人物は完全に静止している必要があります。
  - **デバイスの安定性**: レーダーデバイスはしっかりと固定され、揺れや振動がない状態である必要があります。
  - **単一ターゲット**: 検出範囲内には 1 人だけが存在する必要があります。
- **データ報告ロジック**:
  - **通常の報告**: 上記の条件がすべて満たされている場合、レーダーはリアルタイムの呼吸および心拍数の値を報告します。
  - **異常報告シナリオ**:
    - **ターゲットが 1.5m を超える場合**: 検出されたターゲットが 1.5 メートルの有効範囲を超えた場合、呼吸および心拍数データは**更新を停止**し、最後に有効だった測定値が保持されます。
    - **コアゾーン内にターゲットがいない場合**: 0.5 ～ 1.5 メートルのコア検出ゾーン内にターゲットが検出されない場合、呼吸および心拍数の値は積極的に **0** として報告されます。
- **注意**: 周囲環境による干渉にご注意ください。扇風機、エアコン、揺れるカーテンなどによる微小な動きが、センサーによって誤って解釈される場合があります。そのような場合、人間ターゲットが検出されていない（呼吸数は 0 と報告される）にもかかわらず、レーダーが 0 以外の**心拍数**の値を報告することがあります。

---

### 3. ターゲット距離検出

- **対応ファームウェア**: `1.6.10` 以降。
- **機能説明**:
    レーダーとターゲット間の直線距離を検出して報告します。
- **主なパラメータ**:
  - **最大有効検出距離**: **5 メートル**。
- **データ報告ロジックと制限事項**:
  - **ターゲットなしの状態**: ターゲットが検出されない場合、距離の値は **0** として報告されます。
  - **ターゲットが検出された場合**: 5 メートル範囲内に 1 つ以上のターゲットが検出された場合、レーダーはセンサーに**最も近い**ターゲットまでの距離を報告します。
  - **データが更新されない（最後の値を保持）**: 最も近いターゲットが 5 メートルの有効検出範囲に達するか、それを超えて移動した場合、距離の値は更新を停止します。この場合、その値は最後に有効だった測定値として保持されます。
- **追跡性能**:
    近距離における静止ターゲットの安定性を確保するため、レーダーの追跡戦略は距離ごとに最適化されています。性能の詳細は以下の表のとおりです。

| 距離範囲 | ターゲット状態 | 追跡性能と注意事項 |
| :--- | :--- | :--- |
| **0.5m ~ 1.5m** | 静止 | **追跡成功率 > 96%**。性能は非常に安定しています。 |
| **1.5m ~ 3m** | 静止 | **追跡成功率 > 90%**。性能は安定しています。 |
| **3m ~ 5m** | 静止 | 追跡の安定性が低下し、ターゲットを見失うことがあります。バージョン 1.6.12 では、以前のバージョンと比べて 80% の改善が見られます。 |
| **接近** | 移動 | ターゲットが遠方からレーダーに向かって移動する場合、人物が約 **3 メートル** に達したあたりから、通常は安定した追跡が開始されます。 |
| **遠ざかる** | 移動 | ターゲットがレーダーから遠ざかる場合、追跡は **5 メートルを超えて**継続することがあります。 |

---

### 4. 環境内在室人数カウント

- **機能説明**:
    検出エリア内にいる人物の概算人数を予備的に提供します。
- **データの説明**:
  - この機能は現在開発段階にあり、実験的なものと見なしてください。返される値は、複雑な信号解析から導き出された大まかな推定値です。
  - 精度は、複数人からの信号の重なり、個々の姿勢、動きのパターンなどの要因に大きく影響されます。
  - したがって、**正確な在室人数に依存するアプリケーションには、この機能は適していません**。
  - 当社は基盤となるアルゴリズムの改良に積極的に取り組んでおり、今後のファームウェアリリースで精度の大幅な向上を提供できると見込んでいます。

## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
