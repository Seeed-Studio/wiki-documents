---
description: mmWave 人検知センサーキットの使い方
title: mmWave 人検知センサーキット
keywords:
- レーダー
- mmwave キット
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/mmwave_human_detection_kit
sidebar_position: 0
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# MR24HPC1 mmWave 人検知センサーキット

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/1.png" style={{width:550, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 概要

Seeed Studio の XIAO ESP32C3 によって駆動され、WiFi/BLE 接続をサポートし、mmWave センサーによる正確な人検知を提供します。追加機能のために Grove モジュールをシームレスに接続可能です。Home Assistant のセットアップを1～2分で簡単に実現し、便利な無線 Over-The-Air (OTA) アップデートを提供します。交換可能な mmWave センサーにより広範な汎用性を実現します。スマートホームオートメーションのカスタマイズ、侵入検知、高齢者の健康状態の監視に最適です。

### 特徴

- **精密な人検知**: FMCW 原理に基づくオンボード mmWave センサーは、プライバシーに配慮した正確な人検知を提供します。
- **柔軟なカスタマイズ**: オンボードの人検知センサーは、心拍検知や転倒検知などの Seeed の mmWave シリーズに交換可能です。さらに、400以上のオプション Grove センサーで追加機能を実現可能。
- **簡単なセットアップと無線アップデート**: Home Assistant のノーコードセットアップを1～2分で実現し、無線 Over-The-Air (OTA) アップデートを提供。
- **シームレスな接続性**: XIAO ESP32C3 によって駆動され、WiFi/BLE をサポートし、スマートホームシステムと互換性あり。
- **スケーラブルなソリューション**: OEM/ODM サービスを利用してニーズに合わせたスケーラビリティを実現。

### 応用例

- **スマートホームオートメーション**: 人の存在に基づいて照明、HVAC、セキュリティシステムを強化。
- **建物のセキュリティ**: 侵入を検知し、警報をトリガーしてセキュリティを向上。
- **ヘルスケアモニタリング**: 患者の動きを監視し、転倒検知を支援。
- **自動ドア**: 人が近づくとドアを開ける。
- **高齢者ケア**: 高齢者の健康状態を監視し、適時に支援を提供。

## ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は mmWave 人検知センサーキットの特性に関する情報を提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/hardware.png" style={{width:1000, height:'auto'}}/></div>

:::tip
このキットを使用する際に注意すべき点がいくつかあります。

1. XIAO ESP32C3 のネットワーク機能にはアンテナの使用が必要です。Grove モジュールを取り付ける場合は、アンテナの位置を変更しないようにしてください。アンテナはデフォルトで基板の裏側に配置されており、良好な信号を確保し、レーダーの動作に干渉しません。

2. キットの筐体に設けられた穴は通気孔であり、センサーモジュールをガス検知に使用する可能性を考慮して設けられています。これらは人の存在を判断する基準として使用されるものではないため、プライバシー問題について心配する必要はありません。
:::

以下の表は、ミリ波レーダーと XIAO ESP32C3 のハードウェア接続を示しています。必要に応じて、以下の接続に基づいて独自の後続開発を行うことができます。

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
このチュートリアルでは、Home AssistantとESPHomeでのキットの迅速な適用に焦点を当てています。キットを二次開発に使用したい場合は、チュートリアルの[カスタマイズされた二次開発](#customized-secondary-development)セクションを参照してください。
:::

### ソフトウェアの準備

このルーチンでは、Home Assistant環境のインストール方法について詳しく説明しません。すでに動作するHome Assistantデバイスをお持ちであることを前提とします。

Home Assistantのインストール方法を学びたい場合は、[公式チュートリアル](https://www.home-assistant.io/installation/)を参照してください。Home AssistantをSupervisedでインストールする最もユーザーフレンドリーな方法として、x86デバイスを使用することを強くお勧めします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

上記の表に従って、**Home Assistant OS**および**Home Assistant Supervised**をインストールするのが最適です。これにより、多くの手間が省けます。

また、Seeed Studio製品のいくつかに対してHome Assistantのインストール方法を記載していますので、以下を参照してください。

- [ODYSSEY-X86でのHome Assistantの使い方](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)
- [reTerminalでのHome Assistantの使い方](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/)
- [LinkStar H68K/reRouter CM4でのHome Assistantの使い方](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)

さらに、XIAO ESP32C3はオープンソースプロジェクトESPHomeを利用してHome Assistantにアクセスするため、**Add-Ons**に**ESPHome**サービスをインストールする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

## ESPHomeの使い方

工場出荷時のキットでは、すぐに使用可能なファームウェアがフラッシュされており、短時間でHome Assistantでキットを動作させることができます。以下のビデオでは、迅速に始めるための具体的な手順を示しています。

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/2.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

以下にグラフィカルなステップバイステップの詳細を示します。以下を参照してクイックスタートを完了してください。

### ステップ1. キットに電源を供給する

USB-Cタイプのケーブルを使用してキットに電源を供給してください。電源入力が5V/1Aを超えないように注意してください。そうしないと製品が損傷する可能性があります。

### ステップ2. キットのホットスポット「seedstudio-mr24hpc1」に接続する

キットの電源を入れると、**seedstudio-mr24hpc1**という名前のホットスポットが自動的に開かれます。このホットスポットを検索して接続してください。コンピュータのネットワークを頻繁に切り替える必要がないように、携帯電話を使用してこのネットワークに接続することをお勧めします。

:::note
古いバージョンのファームウェアを使用している場合、**mmwave-kit**に接続するためにWiFiパスワードを入力する必要がある場合があります。この場合、**[ファームウェアを更新する](#restore-factory-firmware)**ことをお勧めします。続行する場合、ネットワークパスワードは`seeedstudio`です。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/40.png" style={{width:400, height:'auto'}}/></div>

次に、ブラウザを使用してバックエンド管理アドレス`192.168.4.1`にアクセスします。ここで、キットが接続するために必要なネットワークとパスワードを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/4.png" style={{width:1000, height:'auto'}}/></div>

次に、キットが接続するネットワークの名前を選択します。選択したネットワークがHome Assistantと同じLAN上にある必要があることに注意してください。そうでない場合、キットはHome Assistantの検索で認識されません。

:::caution
ページで接続したいネットワークが見つからない場合、XIAO ESP32C3がネットワークをサポートしていない可能性があります。最大の互換性を確保するためにルーターを調整し、ネットワークが2.4GHz帯域であることを確認してください。XIAOは5GHz帯域のネットワークをサポートしていません。
:::

正しいWiFiパスワードを入力し、[保存]をクリックします。デバイスは自動的に再起動し、設定したネットワークに接続しようとします。このページに留まる必要はありませんので、閉じてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/5.png" style={{width:600, height:'auto'}}/></div>

### ステップ3. Home Assistantにデバイスを追加する

ネットワーク接続が正常に行われると、Home Assistantでデバイスを見つけることができます。以下の手順に従ってデバイスを追加してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/41.png" style={{width:500, height:'auto'}}/></div>

メニューバーで**設定**をクリックし、**デバイスとサービス**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/42.png" style={{width:1000, height:'auto'}}/></div>

**発見済み**セクションにデバイスが表示されるはずです。**CONFIGURE**ボタンをクリックしてください。その後に表示されるウィンドウで**SUBMIT**を選択し、デバイスを通常使用するための地域を設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/43.png" style={{width:1000, height:'auto'}}/></div>

これでキットがHome Assistantに正常に追加されました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/44.png" style={{width:1000, height:'auto'}}/></div>

:::note
家庭内にデバイスが多すぎる場合、発見済みセクションでデバイスが見つからない可能性があります。その場合、ルーターのコンソールからキットのIPアドレスを取得し、右下の**統合を追加**ボタンをクリックして、IPアドレスを手動で入力してデバイスを追加してください。
:::

### ステップ4. ダッシュボードにコンポーネントを追加する

次に、追加された**ESPHome**カードをクリックします。ここでは**1デバイス**です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/45.png" style={{width:1000, height:'auto'}}/></div>

これにより、キット用に記述したすべてのコンポーネント内容が表示されます。表示エリアを少しスクロールして、これらすべてのコンポーネントをダッシュボードに追加しましょう。

:::caution
このページにコンポーネントが表示されない場合は、キットの電源供給とログを確認してください。コンピュータ機能を使用している場合、一部のコンピュータでは十分な電力を供給するUSBポートがない可能性があります。電源供給に問題がないことを確認した場合は、ログを開いて詳細なログをSeeed Studioの技術サポートに送信してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/46.png" style={{width:1000, height:'auto'}}/></div>

その後、**Overview**で全ての情報と内容を確認できます。

### ステップ 5. Dashboardを編集する

現在、ダッシュボードコンポーネントの表示順序は自動的に設定されていますが、これは観察や設定操作を行う上で必ずしも適しているわけではありません。そのため、次にダッシュボードを編集して、その表示を機能により適したものにします。

Overviewで、三角形付きの三点アイコンをクリックし、**Edit Dashboard**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/12.png" style={{width:1000, height:'auto'}}/></div>

編集ページで、再度右上の三点アイコンをクリックし、**Raw Configuration Editor**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/13.png" style={{width:1000, height:'auto'}}/></div>

その後、元のエディタ内のコードをクリアし、以下のコードをコピーして保存してください。

:::tip
新しいファームウェアはESPHomeが提供するドキュメントに基づいて改訂されており、各デバイスには固有のMAC名があります。そのため、コンポーネント名は同じではありません。以下のコードを使用する場合は、コード内のすべての`{$DEVICE}`をデバイス名に置き換えてください。デバイス名はESPHomeのデバイスエンティティで確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/47.png" style={{width:1000, height:'auto'}}/></div>
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1-card.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>クリックしてコード全体をプレビュー</summary>

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
                name: モジュール再起動
              - entity: sensor.{$DEVICE}_hardware_model
                name: ハードウェアモデル
              - entity: sensor.{$DEVICE}_hardware_version
                name: ハードウェアバージョン
              - entity: sensor.{$DEVICE}_heartbeat
                name: ハートビート
              - entity: sensor.{$DEVICE}_product_id
                name: 製品ID
              - entity: sensor.{$DEVICE}_product_model
                name: 製品モデル
            title: デバイス情報
      - type: vertical-stack
        cards:
          - type: entities
            entities:
              - entity: select.{$DEVICE}_scene
                name: シーン
              - entity: number.{$DEVICE}_sensitivity
                name: 感度
              - entity: select.{$DEVICE}_time_for_entering_no_person_state_standard_function
                name: 無人状態への移行時間設定（標準機能）
              - entity: binary_sensor.{$DEVICE}_presence_information
                name: 存在情報
              - entity: sensor.{$DEVICE}_motion_information
                name: 動作情報
              - entity: sensor.{$DEVICE}_body_movement_parameter
                name: 身体動作パラメータ
              - entity: sensor.{$DEVICE}_active_reporting_of_proximity
                name: 近接のアクティブ報告
            title: 自発的情報
      - type: horizontal-stack
        cards:
          - type: entities
            entities:
              - entity: switch.{$DEVICE}_underlying_open_function_info_output_switch
                name: 基礎機能情報出力スイッチ
              - entity: sensor.{$DEVICE}_existence_energy
                name: 存在エネルギー
              - entity: sensor.{$DEVICE}_motion_energy
                name: 動作エネルギー
              - entity: sensor.{$DEVICE}_static_distance
                name: 静的距離
              - entity: sensor.{$DEVICE}_motion_distance
                name: 動作距離
              - entity: sensor.{$DEVICE}_motion_speed
                name: 動作速度
            title: 基礎機能
      - type: horizontal-stack
        cards:
          - type: entities
            entities: 
              - entity: sensor.{$DEVICE}_custom_mode_status
                name: カスタムモードステータス
              - entity: number.{$DEVICE}_custom_mode
                name: カスタムモード
              - entity: sensor.{$DEVICE}_current_custom_mode
                name: 現在のカスタムモード
              - entity: button.{$DEVICE}_end_of_custom_mode_settings
                name: カスタムモード設定終了
              - entity: select.{$DEVICE}_existence_boundary
                name: 存在境界
              - entity: select.{$DEVICE}_motion_boundary
                name: 動作境界
              - entity: number.{$DEVICE}_existence_energy_threshold
                name: 存在エネルギー閾値
              - entity: number.{$DEVICE}_motion_energy_threshold
                name: 動作エネルギー閾値
              - entity: number.{$DEVICE}_motion_trigger_time
                name: 動作トリガー時間
              - entity: number.{$DEVICE}_motion_to_rest_time
                name: 動作から静止への時間
              - entity: number.{$DEVICE}_time_for_entering_no_person_state_underlying_open_function
                name: 無人状態への移行時間（基礎機能）
            title: カスタム設定
```

</details>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/14.png" style={{width:1000, height:'auto'}}/></div>

次に、**DONE**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/15.png" style={{width:1000, height:'auto'}}/></div>

新しいダッシュボードインターフェースが構成されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/48.png" style={{width:1000, height:'auto'}}/></div>

おめでとうございます！これで、キットのHome Assistantへのアクセスがすべて完了しました。

## ダッシュボード 操作詳細

スイートの全機能とこれらの機能の使用方法を迅速に理解するために、このセクションを注意深く読む必要があります。より詳細な情報が必要な場合は、[製品のユーザーマニュアル](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)を読むことをお勧めします。

ダッシュボードの構成とパラメータの詳細については、ESPHome Docsに詳細な記述をまとめていますので、完全な記述と詳細を読むために移動してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/components/seeed_mr24hpc1.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ESPHome Docs 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

## カスタマイズされた二次開発

レーダーを交換したり、Groveモジュールを取り付けたりする必要がある場合は、以下の動く画像を参考にしてください。製品の背面にある4つのネジを外し、前面カバーを軽く叩いて取り外します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/24.gif" style={{width:650, height:'auto'}}/></div>

Groveモジュールを取り付けたい場合は、以下の画像を参考にしてください。Groveコネクタが外側を向き、GroveケーブルがGroveモジュールの下に隠れるようにすることをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/25.gif" style={{width:650, height:'auto'}}/></div>

:::note
モジュールの取り付けに加えて、キットの取り付けには特別な注意が必要です。キットの取り付け位置は監視の精度に直接影響を与えるため、取り付けに関する関連指示については**[Datasheet](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)**を参照してください。
:::

このキットは主にスマートホーム向けに設計されています。二次開発の内容については詳細には触れませんが、必要となる情報やコンテンツを提供しますので、以下を参照してください。

- 内蔵MR24HPC1モジュールに関するWiki: [24GHz mmWave Sensor - Human Static Presence Module Lite (MR24HPC1)](https://wiki.seeedstudio.com/ja/Radar_MR24HPC1)

- 内蔵XIAO ESP32C3開発資料とハンズオンWiki: [Getting Started with Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/)

### ESPHome向け二次開発

キットのコードは現在すべてオープンソースです。ESPHomeを開発する必要がある場合は、外部コンポーネントのコードを使用できます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

このコードフレームワークの使用方法については、プロジェクト内のexamplesフォルダにある[**mr24hpc1.yaml**](https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml)ファイルを参照してください。このファイルはESPHome用の例のyamlファイルです。

ESPHomeの経験がない場合は、[**このWiki**](https://wiki.seeedstudio.com/ja/xiao-esp32c3-esphome/)を読んで使用方法を学ぶことができます。

## ESPHome OTAによるソフトウェアアップグレード

この製品を設計する際、常時電源が供給され、固定された場所で動作する監視デバイスとして設計しました。同時に、ソフトウェアの更新と保守を継続的に行うことを目指しており、デバイスの場所を変更する必要がなく、LAN経由でOTA（Over-The-Air）アップデートを実施できる状況を想定しました。

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/ota.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

ESPHomeのメイン画面をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" style={{width:1000, height:'auto'}}/></div>

**NEW DEVICE**をクリックします。その後、**Continue**をクリックしてください。

新しいポップアップウィンドウで、設定したいアプリケーションの名前、WiFiの名前とパスワードを入力してください。キットとHome Assistantが**同じLAN**上にあることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/22.png" style={{width:450, height:'auto'}}/></div>

次に**Next**をクリックします。デバイスタイプでは、**ESP32-C3**を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" style={{width:450, height:'auto'}}/></div>

次に**Next**をクリックし、**SKIP**をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" style={{width:1000, height:'auto'}}/></div>

プログラムはGithubプロジェクトで更新されます。プログラムが更新されたら、すべての内容をコピーして生成されたyamlファイルに上書きするだけです。このファイルに変更を加えることも可能です。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

最後に、**Wireless**を選択してプログラムをアップロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/23.png" style={{width:500, height:'auto'}}/></div>

## 工場出荷時のファームウェアを復元

### 方法 1: 最新のファームウェアを簡単にフラッシュする

キットを使用していて、上記の手順や内容に不一致がある場合は、以下のページでキットのファームウェアを更新して工場出荷時の設定を復元してください。

**ステップ 1.** 以下のボタンをクリックしてファームウェアフラッシュページに移動します。その後、USB-Cタイプのケーブルを使用してキットをコンピュータに接続します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://limengdu.github.io/MR24HPC1_ESPHome_external_components/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ファームウェアをフラッシュする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ 2.** 接続ボタンをクリックし、**JTAG**という名前のポート番号デバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/50.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** ファームウェアをフラッシュします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/32.png" style={{width:500, height:'auto'}}/></div>

**INSTALL SEEED STUDIO MMWAVE KIT** をクリックするだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/33.png" style={{width:500, height:'auto'}}/></div>

以下の表示が確認できれば、ファームウェアのフラッシュは完了です。この時点でプログラムを実行するために再電源投入が必要になる場合があります。ファームウェアの書き込みが完了した後、ネットワークをゼロから再設定する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/34.png" style={{width:500, height:'auto'}}/></div>

### 方法 2: ESPHomeツールを使用してファームウェアをフラッシュする

デバイスが正常に動作しない場合は、工場出荷時のファームウェアを復元し、デバイスをHome Assistantに再追加してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/releases/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ファームウェアをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

- オプション 1: [ESPhome Webツール](https://web.esphome.io/?dashboard_install)を使用してアップロードする。

ChromeまたはEdgeウェブブラウザで[ESPhome Webツール](https://web.esphome.io/?dashboard_install)を開きます。

**CONNECT** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

ポップアップウィンドウで XIAO ESP32 シリアルポートを選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

**INSTALL** をクリックし、上記の手順でダウンロードした `.bin` ファイルを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- オプション 2: [esphome-flasher ツール](https://github.com/esphome/esphome-flasher)を使用する。

ドライバーをインストールし、ブラウザを変更した後でも方法1でファームウェアをアップロードできない場合は、方法2を試してください。具体的なインストール方法と手順については公式チュートリアルを参照してください。

:::tip
XIAO ESP32C3 のログメッセージを確認したい場合、このソフトウェアの View Logs ボタンを使用してログを表示することもできます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

ファームウェアが正常にアップロードされると、**seeedstudio-mr24hpc1** というネットワークが表示されます。[ESPHomeを使った3分でのセットアップ](#three-minutes-to-get-started-esphome)の内容を参照してデバイスを再設定してください。

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

## 技術サポートと製品ディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>