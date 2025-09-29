---
description: mmWave人体検知センサーキットの使用開始
title: mmWave人体検知センサーキット
keywords:
- radar
- mmwave kit
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/mmwave_human_detection_kit
sidebar_position: 0
last_update:
  date: 08/17/2023
  author: Citric
---

# MR24HPC1 mmWave人体検知センサーキット

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/1.png" style={{width:550, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 概要

Seeed StudioのXIAO ESP32C3を搭載し、WiFi/BLE接続をサポートし、mmWaveセンサーによる精密な人体検知を提供します。Groveモジュールをシームレスに接続して機能を追加できます。Home Assistantの簡単セットアップを1〜2分で実現し、便利なワイヤレスOTA（Over-The-Air）アップデートに対応しています。交換可能なmmWaveセンサーにより幅広い汎用性を実現します。カスタマイズ可能なスマートホームオートメーション、侵入検知、高齢者の健康監視に最適です。

### 特徴

- **精密人体検知**: FMCW原理に基づくオンボードmmWaveセンサーが、プライバシーに配慮した正確な人体検知を提供します。
- **柔軟なカスタマイズ**: オンボード人体存在センサーは、心拍検知、転倒検知などのSeeedのmmWaveシリーズの他製品と交換可能。400以上のオプションのGroveセンサーで追加機能を実現できます。
- **簡単セットアップ、ワイヤレスアップデート**: Home Assistantのノーコードセットアップを1〜2分で完了、ワイヤレスOTAアップデートに対応。
- **シームレス接続**: XIAO ESP32C3を搭載し、WiFi/BLEをサポート、スマートホームシステムと互換性があります。
- **スケーラブルソリューション**: スケーラビリティのためのOEM/ODMサービスでニーズに合わせてカスタマイズ可能。

### 応用

- **スマートホームオートメーション**: 人の存在に基づいて照明、HVAC、セキュリティシステムを強化。
- **建物セキュリティ**: 侵入を検知し、セキュリティ強化のためのアラートをトリガー。
- **ヘルスケア監視**: 患者の動きを監視し、転倒検知を支援。
- **自動ドア**: 人が近づくとドアが開くように設定。
- **高齢者ケア**: 高齢者の健康状態を監視し、タイムリーな支援を提供。

## ハードウェア概要

すべてを開始する前に、製品の基本的なパラメータを理解することが非常に重要です。以下の表は、mmWave人体検知センサーキットの特性に関する情報を提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/hardware.png" style={{width:1000, height:'auto'}}/></div>

:::tip
このキットを使用する際に留意すべき点があります。

1. XIAO ESP32C3のネットワーク機能にはアンテナの使用が必要です。Groveモジュールを取り付ける場合は、アンテナの位置を変更しないようにしてください。アンテナはデフォルトでベースボードの背面に配置されており、これにより良好な信号を確保し、レーダーの動作を妨げません。

2. キットシェルに予約されている穴は通気孔で、ユーザーがガス用のセンサーモジュールを使用する可能性を考慮して予約されています。これらは人の存在を判断する基準として使用されるものではないため、プライバシーの問題について心配する必要はありません。

:::

以下の表は、ミリ波レーダーとXIAO ESP32C3間のハードウェア接続を示しています。必要に応じて、以下の表の接続に基づいて独自の後続開発を行うことができます。

<div class="table-center">
  <table align="center">
    <tr>
    <th>XIAO ESP32C3</th>
    <th>MR24HPC1</th>
    </tr>
    <tr>
    <td>5V</td>
    <td>VCC</td>
    </tr>
    <tr>
    <td>GND</td>
    <td>GND</td>
    </tr>
      <tr>
        <td>GPIO4 (D2)</td>
        <td>RX</td>
      </tr>
      <tr>
        <td>GPIO5 (D3)</td>
        <td>TX</td>
      </tr>
  </table>
</div>

## はじめに

:::tip
このチュートリアルはすべて、Home Assistant & ESPHome でのキットの迅速な適用に焦点を当てています。キットを二次開発に使用したい場合は、チュートリアルの[カスタマイズされた二次開発](#customized-secondary-development)セクションを参照してください。
:::

### ソフトウェアの準備

このルーチンでは、Home Assistant 環境のインストール方法については詳しく説明しません。すでに動作する Home Assistant デバイスをお持ちであることを前提とします。

Home Assistant のインストール方法を学びたい場合は、[公式チュートリアル](https://www.home-assistant.io/installation/)を参照してください。x86 デバイスを使用して Home Assistant をインストールすることを強く推奨します。これは、Supervised で Home Assistant をインストールする最もユーザーフレンドリーな方法です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

上記の表によると、**Home Assistant OS** と **Home Assistant Supervised** をインストールするのが最も適切で、多くの手間を省くことができます。

Seeed Studio の一部の製品について Home Assistant のインストール方法も書いていますので、参照してください。

- [ODYSSEY-X86 での Home Assistant 入門](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)
- [reTerminal での Home Assistant 入門](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/)
- [LinkStar H68K/reRouter CM4 での Home Assistant 入門](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)

さらに、XIAO ESP32C3 は、Home Assistant にアクセスするためにオープンソースプロジェクト ESPHome に依存しているため、**Add-Ons** に **ESPHome** サービスもインストールする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

## ESPHome 入門

工場出荷時のキットでは、XIAO ESP32C3 には電源投入の準備ができたファームウェアがすでにフラッシュされており、非常に短時間で Home Assistant でキットを動作させることができました。以下のビデオでは、迅速に開始するための正確な手順を示します。

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/2.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

以下は図解による詳細な手順です。以下を参照してクイックスタートを完了してください。

### ステップ 1. キットへの電源供給

USB-C タイプケーブルを介してキットに電源を供給してください。電源入力が 5V/1A を超えないよう注意してください。そうでなければ製品が損傷する可能性があります。

### ステップ 2. キットのホットスポット「seedstudio-mr24hpc1」に接続

キットの電源を入れると、**seedstudio-mr24hpc1** という名前のホットスポットが自動的に開かれます。このホットスポットを検索して接続してください。携帯電話を使用してこのネットワークに接続することで、コンピューターでネットワークを頻繁に切り替える必要がなくなります。

:::note
古いバージョンのファームウェアを使用している場合、**mmwave-kit** に接続するために WiFi パスワードの入力が必要になる場合があります。**[ファームウェアの更新](#restore-factory-firmware)** をお勧めします。続行したい場合、ネットワークパスワードは `seeedstudio` です。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/40.png" style={{width:400, height:'auto'}}/></div>

次に、ブラウザを使用してバックエンド管理アドレス `192.168.4.1` にアクセスします。ここで、キットが接続する必要があるネットワークとパスワードを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/4.png" style={{width:1000, height:'auto'}}/></div>

次に、キットを接続したいネットワークの名前を選択します。選択するネットワークは Home Assistant と同じ LAN 上にある必要があることに注意してください。そうでなければ、キットは Home Assistant の検索で認識されません。

:::caution
ページで接続したいネットワークが見つからない場合、XIAO ESP32C3 がそのネットワークをサポートしていない可能性があります。最大限の互換性を有効にするためにルーターを自分で調整し、ネットワークが 2.4GHz 帯域にあることを確認してください。XIAO は 5GHz 帯域のネットワークをサポートしていません。
:::

正しい WiFi パスワードを入力し、Save をクリックします。デバイスは自動的に再起動し、設定したネットワークに接続を試みます。このページに留まる必要はありません。今すぐ閉じることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/5.png" style={{width:600, height:'auto'}}/></div>

### ステップ 3. Home Assistant にデバイスを追加

ネットワーキングがうまくいけば、Home Assistant でデバイスを見つけることができます。以下のパスに従ってデバイスを追加してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/41.png" style={{width:500, height:'auto'}}/></div>

メニューバーの **Settings** をクリックし、**Devices & services** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/42.png" style={{width:1000, height:'auto'}}/></div>

**Discovered** セクションにデバイスが表示されるはずです。**CONFIGURE** ボタンをクリックします。その後ポップアップするウィンドウで **SUBMIT** を選択し、デバイスを正常に使用するために地域を設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/43.png" style={{width:1000, height:'auto'}}/></div>

キットが Home Assistant に正常に追加されました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/44.png" style={{width:1000, height:'auto'}}/></div>

:::note
家にデバイスが多すぎる場合、Discovered でデバイスが見つからない確率があります。その場合は、ルーターのコンソールからキットの IP アドレスを取得し、右下の **Add Integration** ボタンをクリックして、IP アドレスを手動で入力してデバイスを追加してください。
:::

### ステップ 4. ダッシュボードにコンポーネントを追加

次に、追加された **ESPHome** カード、ここでは **1 device** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/45.png" style={{width:1000, height:'auto'}}/></div>

これにより、キット用に作成したすべてのコンポーネントコンテンツが表示されます。表示エリアを少し下にスクロールして、これらのコンポーネントをすべてダッシュボードに追加しましょう。

:::caution
このページに表示されているコンポーネントが見つからない場合は、キットの電源供給とログを確認してください。コンピューター機能を使用している場合、一部のコンピューターには十分な電力サポートを提供するUSBポートがない可能性があります。電源供給に問題がないことを確認した場合は、ログを開いて詳細なログをSeeed Studioの技術サポートに送信してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/46.png" style={{width:1000, height:'auto'}}/></div>

その後、**Overview** ですべての情報とコンテンツを確認できます。

### ステップ 5. ダッシュボードの編集

現在、ダッシュボードコンポーネントの表示順序は自動的になっており、観察や設定操作の実行に適していない可能性があるため、次にダッシュボードを編集して、その表示をより機能に適したものにする必要があります。

Overviw で、三角形の付いた3つの点をクリックし、次に **Edit Dashboard** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/12.png" style={{width:1000, height:'auto'}}/></div>

編集ページで、右上角の3つの点を再度クリックして **Raw Configuration Editor** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/13.png" style={{width:1000, height:'auto'}}/></div>

次に、元のエディターのコードをクリアし、以下のコードをコピーして保存してください。

:::tip
新しいファームウェアは ESPHome が提供するドキュメントに従って修正されており、各デバイスには固有のMAC名があります。そのため、コンポーネント名は同じではありません。以下のコードを使用したい場合は、コード内のすべての `{$DEVICE}` をあなたのデバイス名に置き換えてください。あなたのデバイス名は ESPHome のデバイスエンティティで確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/47.png" style={{width:1000, height:'auto'}}/></div>
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1-card.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>完全なコードをプレビューするにはここをクリック</summary>

```css
title: My Home
views:
  - path: default_view
    title: Home
    cards:
      - type: horizontal-stack
        cards:
          - type: entities
            entities:
              - entity: button.{$DEVICE}_module_restart
                name: Module Restart
              - entity: sensor.{$DEVICE}_hardware_model
                name: Hardware Model
              - entity: sensor.{$DEVICE}_hardware_version
                name: Hardware Version
              - entity: sensor.{$DEVICE}_heartbeat
                name: Heartbeat
              - entity: sensor.{$DEVICE}_product_id
                name: Product ID
              - entity: sensor.{$DEVICE}_product_model
                name: Product Model
            title: DEVICE Information
      - type: vertical-stack
        cards:
          - type: entities
            entities:
              - entity: select.{$DEVICE}_scene
                name: Scene
              - entity: number.{$DEVICE}_sensitivity
                name: Sensitivity
              - entity: select.{$DEVICE}_time_for_entering_no_person_state_standard_function
                name: Time For Entering No Person State Setting (Standard Function)
              - entity: binary_sensor.{$DEVICE}_presence_information
                name: Presence Information
              - entity: sensor.{$DEVICE}_motion_information
                name: Motion Information
              - entity: sensor.{$DEVICE}_body_movement_parameter
                name: Body Movement Parameter
              - entity: sensor.{$DEVICE}_active_reporting_of_proximity
                name: Active Reporting Of Proximity
            title: Unsolicited Information
      - type: horizontal-stack
        cards:
          - type: entities
            entities:
              - entity: switch.{$DEVICE}_underlying_open_function_info_output_switch
                name: Underlying Open Function Info Output Switch
              - entity: sensor.{$DEVICE}_existence_energy
                name: Existence Energy
              - entity: sensor.{$DEVICE}_motion_energy
                name: Motion Energy
              - entity: sensor.{$DEVICE}_static_distance
                name: Static Distance
              - entity: sensor.{$DEVICE}_motion_distance
                name: Motion Distance
              - entity: sensor.{$DEVICE}_motion_speed
                name: Motion Speed
            title: Underlying Open Function
      - type: horizontal-stack
        cards:
          - type: entities
            entities: 
              - entity: sensor.{$DEVICE}_custom_mode_status
                name: Custom Mode Status
              - entity: number.{$DEVICE}_custom_mode
                name: Custom Mode
              - entity: sensor.{$DEVICE}_current_custom_mode
                name: Current Custom Mode
              - entity: button.{$DEVICE}_end_of_custom_mode_settings
                name: End Of Custom Mode Settings
              - entity: select.{$DEVICE}_existence_boundary
                name: Existence Boundary
              - entity: select.{$DEVICE}_motion_boundary
                name: Motion Boundary
              - entity: number.{$DEVICE}_existence_energy_threshold
                name: Existence Energy Threshold
              - entity: number.{$DEVICE}_motion_energy_threshold
                name: Motion Energy Threshold
              - entity: number.{$DEVICE}_motion_trigger_time
                name: Motion Trigger Time
              - entity: number.{$DEVICE}_motion_to_rest_time
                name: Motion To Rest Time
              - entity: number.{$DEVICE}_time_for_entering_no_person_state_underlying_open_function
                name: Time For Entering No Person State (Underlying Open Function)
            title: Custom Settings
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/14.png" style={{width:1000, height:'auto'}}/></div>

次に**DONE**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/15.png" style={{width:1000, height:'auto'}}/></div>

全く新しいダッシュボードインターフェースが設定されました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/48.png" style={{width:1000, height:'auto'}}/></div>

おめでとうございます。この時点でキットのHome Assistantへのアクセスがすべて完了しました！

## ダッシュボード操作の詳細

スイートの全機能とこれらの機能の使用方法を素早く理解するために、このセクションを注意深く読む必要があります。より詳細な情報が必要な場合は、時間をかけて[製品のユーザーマニュアル](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)を読むことをお勧めします。

ダッシュボードの設定とパラメータの詳細については、ESPHome Docsで詳細な記事をまとめましたので、完全な記事と詳細を読むために移動してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/components/seeed_mr24hpc1.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ESPHome Docs 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

## カスタマイズされた二次開発

レーダーを交換したり、Groveモジュールを取り付ける必要がある場合は、以下の動画を参考にして行うことができます。筐体の4つのネジは製品の背面にあります。それらを取り外してから、前面カバーを取り外すために軽くタップします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/24.gif" style={{width:650, height:'auto'}}/></div>

Groveモジュールを取り付けたい場合は、以下の画像を参考にして取り付けることができます。Groveコネクタを外側に向け、Groveケーブルをグローブモジュールの下に隠すことをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/25.gif" style={{width:650, height:'auto'}}/></div>

:::note
モジュールの取り付けに加えて、キットの取り付けには特別な注意が必要です。キットの取り付け位置は監視の精度に直接影響するため、取り付けについては**[データシート](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)**の関連説明を参照してください。
:::

このキットは主にスマートホームの方向性に向けられており、二次開発の内容については詳しく説明しませんが、二次開発の情報と必要になる可能性のあるコンテンツを提供します。参照してください。

- 内蔵MR24HPC1モジュールに関するWiki：[24GHz mmWave Sensor - Human Static Presence Module Lite (MR24HPC1)](https://wiki.seeedstudio.com/ja/Radar_MR24HPC1)

- 内蔵XIAO ESP32C3開発資料とハンズオンWiki：[Getting Started with Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/)

### ESPHomeの二次開発

キットのコードはすべて現在オープンソースです。ESPHomeの開発が必要な場合は、外部コンポーネントのコードを使用できます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

このコードフレームワークの使用については、プロジェクトのexamplesフォルダ下の[**mr24hpc1.yaml**](https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml)ファイルを参照できます。このファイルはESPHomeのサンプルyamlファイルです。

これまでにESPHomeの経験がない場合は、[**このWiki**](https://wiki.seeedstudio.com/ja/xiao-esp32c3-esphome/)を読んで使用方法を学ぶことができます。

## ESPHome OTAによるソフトウェアアップグレード

製品を設計する際、継続的に電源が供給され、一箇所に固定されたモニタリングデバイスにしたいと考えました。同時に、そのソフトウェアを継続的にアップデートし、メンテナンスしていく予定で、場所を変更する必要がなく、LAN経由でOTAアップデートを実装できる状況を想定しました。

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/ota.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

ESPHomeのメイン画面をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" style={{width:1000, height:'auto'}}/></div>

**NEW DEVICE**をクリックします。次に**Continue**をクリックします。

新しいポップアップウィンドウで、設定したいアプリケーションの名前、およびWiFiの名前とパスワードを入力してください。キットとHome Assistantが**同じLAN**上にあることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/22.png" style={{width:450, height:'auto'}}/></div>

次に**Next**をクリックします。デバイスタイプで**ESP32-C3**を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" style={{width:450, height:'auto'}}/></div>

次に**Next**をクリックします。その後**SKIP**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" style={{width:1000, height:'auto'}}/></div>

Githubプロジェクトでプログラムをアップデートします。プログラムがアップデートされたら、内容をすべてコピーして生成されたyamlファイルを上書きするだけです。これに変更を加えることも可能です。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

最後に、**Wireless**を選択してプログラムをアップロードするだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/23.png" style={{width:500, height:'auto'}}/></div>

## ファクトリーファームウェアの復元

### 方法1: 最新ファームウェアのクイックフラッシュ

キットを使用していて、上記の手順や内容と一致しない場合は、以下のページでキットのファームウェアを更新してファクトリー設定を復元してください。

**ステップ1.** 下のボタンをクリックしてFlash Firmwareページに移動します。次に、USB-Cタイプケーブルでキットをコンピューターに接続します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://limengdu.github.io/MR24HPC1_ESPHome_external_components/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Flash the Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ2.** Connectボタンをクリックし、**JTAG**という名前のポート番号デバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/50.png" style={{width:1000, height:'auto'}}/></div>

**ステップ3.** ファームウェアをフラッシュします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/32.png" style={{width:500, height:'auto'}}/></div>

**INSTALL SEEED STUDIO MMWAVE KIT**をクリックするだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/33.png" style={{width:500, height:'auto'}}/></div>

以下の表示が見えたら、ファームウェアのフラッシュが完了です。この時点で、プログラムを起動するために再度電源を入れ直す必要があるかもしれません。ファームウェアの書き込みが完了した後、ネットワークを最初から設定し直す必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/34.png" style={{width:500, height:'auto'}}/></div>

### 方法2: ESPHomeツールを使用したファームウェアのフラッシュ

デバイスが正常に動作しない問題が発生している場合は、ファクトリーファームウェアを復元し、デバイスをHome Assistantに再度追加してみてください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/releases/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

- オプション1: [ESPhome Webツール](https://web.esphome.io/?dashboard_install)を使用してアップロードします。

ChromeまたはEdgeウェブブラウザで[ESPhome Webツール](https://web.esphome.io/?dashboard_install)を開きます。

**CONNECT**をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

ポップアップウィンドウでXIAO ESP32シリアルポートを選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

**INSTALL**をクリックし、上記の手順でダウンロードした`.bin`ファイルを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- オプション2: [esphome-flasherツール](https://github.com/esphome/esphome-flasher)を使用します。

ドライバーをインストールしてブラウザを変更した後でも方法1でファームウェアをアップロードできない場合は、方法2を試すことができます。具体的なインストール方法と手順については、公式チュートリアルを参照してください。

:::tip
XIAO ESP32C3のログメッセージを観察したい場合は、このソフトウェアのView Logsボタンからも表示できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

ファームウェアが正常にアップロードされると、**seeedstudio-mr24hpc1**というネットワークが表示されます。デバイスを再設定するには、[3分でESPHomeを始める](#three-minutes-to-get-started-esphome)の内容を参照してください。

## リソース

- **[GITHUB]** [プロジェクトオープンソース](https://github.com/limengdu/mmwave-kit-external-components)
- **[PDF]** [クイックセットアップテンプレート](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [データシート](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [ユーザーマニュアル](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)

### バージョン 1

- **[ZIP]** [PCB&SCH EAGLEファイル](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

### バージョン 2

- **[ZIP]** [PCB&SCH EAGLEファイル](https://files.seeedstudio.com/wiki/mmwave_kit/Human_Detection_Sensor_Board_V2.zip)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/mmwave_kit/mmwave_kit_sch_V2.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
