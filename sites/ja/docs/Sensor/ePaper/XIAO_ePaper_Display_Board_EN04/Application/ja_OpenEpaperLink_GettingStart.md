---
description: OpenDisplay Kit を使用して OpenDisplay をセットアップして構成する
title: OpenDisplay Kit を使用して OpenDisplay ファームウェアをセットアップして構成する
keywords:
  - epaper
  - opendisplay
  - en04
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /EN04_opendisplay
sku: E25120101
last_update:
  date: 01/13/2026
  author: Tomasz/Allen/Jackson.li
createdAt: '2026-01-09'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/ja/EN04_opendisplay/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# OpenDisplay Kit を使用して OpenDisplay ファームウェアをセットアップして構成する

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EN04.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## はじめに

**XIAO nRF52840** Plus を搭載した XIAO EN04 ePaper Display Board は、OpenDisplay ファームウェアを使用して Bluetooth 対応の電子ペーパーディスプレイを使い始めるための最も簡単な方法です。802.15.4 無線機を備えた専用アクセスポイントを必要とする従来のシステムとは異なり、このボードは Bluetooth Low Energy を使用して、スマートフォン、コンピュータ、または Home Assistant から直接ワイヤレス制御を行います。

### アプリケーション

- **スマートホームダッシュボード**：天気情報、カレンダーイベント、各種スマートホームデバイスからの通知など、リアルタイム情報を表示します。
- **エネルギーモニタリング**：スマートメーターからの電力使用量データを表示し、家庭での消費電力をより効率的に把握・管理できるようにします。
- **セキュリティアラート**：動体検知やドア／窓センサーの作動など、セキュリティイベントに関するアラートや通知を表示します。
- **スマートサーモスタットディスプレイ**：温度や湿度レベル、およびスマートサーモスタットの制御設定を表示します。

## [OpenDisplay](https://opendisplay.org) とは？

OpenDisplay は、電子ペーパーディスプレイ向けにファームウェアとプロトコルを提供するオープンソースプロジェクトです。nRF52840 や ESP32 などのマイクロコントローラを用いたカスタムハードウェア向けに特別に設計されています。

[OpenDisplay ファームウェア](https://github.com/OpenDisplay-org/Firmware) により、次のことが可能になります：
- **Bluetooth Low Energy (BLE) 通信**：専用アクセスポイントを必要としない直接ワイヤレス制御
- **専用ハードウェアサポート**：XIAO ePaper Board EN04、EE04 などの専用ボードで動作
- **Web ベースの書き込みと設定**：Web インターフェース [https://opendisplay.org/firmware/install](https://opendisplay.org/firmware/install/index.html) を介した簡単なセットアップと画像アップロード
- **複数ディスプレイ対応**：さまざまなサイズやコントローラの電子ペーパーに対応


## なぜ OpenDisplay ファームウェアを使うのか？

OpenDisplay ファームウェアは、カスタム電子ペーパーディスプレイプロジェクトに対して、いくつかの利点を提供します。

- **アクセスポイント不要**：Bluetooth Low Energy による直接通信のため、追加ハードウェアが不要
- **Web ベースツール**：ブラウザベースのツールによる簡単なファームウェアインストール、設定、および画像アップロード
- **専用ハードウェア**：EN04 などのボード向けに設計されており、市販の ESL タグに限定されません
- **オープンソースかつ無償**：GitHub 上で活発に開発されている完全なオープンソースプロジェクト
- **複数マイコン対応**：nRF52840、ESP32-S3、ESP32-C6、ESP32-C3 で動作
- **シンプルなセットアップ**：ボードに単一ファイルをドラッグ＆ドロップしてファームウェアをアップロードし、Web インターフェースで設定するだけで、複雑なプログラミングは不要
- **バッテリー効率に優れる**：電子ペーパーディスプレイでの低消費電力動作に最適化
- **アクティブなコミュニティ**： [OpenDisplay Discord](https://discord.gg/WG7tbTzF9Z) でのサポートと開発


## OpenDisplay ファームウェアの始め方

### ハードウェアの組み立て

**ステップ 1. ディスプレイをドライバーボードに接続する**  
FPC ケーブルを XIAO EN04 ボード上のコネクタに合わせ、ラッチを固定してしっかりと接続されていることを確認します。  

:::tip
FPC ケーブルの金属面は上向きになるようにしてください。そうでないと、何も表示されません。ほとんどのディスプレイでは、FPC ケーブルに 1 と 50 の数字が印字されており、それらの数字はボード上の表示と一致している必要があります！

多くの方がここで間違えるので、必ず以下の取り付けチュートリアルに従ってください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 2. バッテリーを取り付ける**  
バッテリーケーブルをドライバーボード上の JST コネクタに接続し、極性が正しいことを確認します（赤い線を +、黒い線を - に）。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
極性を二重に確認してください。バッテリーによっては配線が混在している場合があります。赤と黒が逆になっている場合は、針を使って JST コネクタから簡単に取り外し、正しい位置に差し直すことができます。
:::


### Web インストーラ方式（推奨）

OpenDisplay ファームウェアをインストールする最も簡単な方法は、Web ベースのインストーラを使用することです。

**ステップ 1. Web インストーラを開く**  
ブラウザで [OpenDisplay Web Installer](https://opendisplay.org/firmware/install/index.html) を開きます。

**ステップ 2. ボードを選択する**  
デバイスリストから **"Seeed EN04 4.26"** または **"Seeed EN04 7.3"**（もしくはお使いのハードウェアに合った任意のプリセット）を選択します（キット内のディスプレイサイズに基づいて選びます）。

**ステップ 3. ファームウェアをダウンロードする**  
**"Download Firmware"** ボタンをクリックし、**"NRF52840.uf2"** をハードドライブに保存します。

**ステップ 4. ボードを接続する**  
XIAO ePaper Board EN04 を USB-C ケーブルでコンピュータに接続します。

**ステップ 5. ファームウェアをインストールする**  
リセットボタンを続けて 2 回押します。PC にファイルマネージャが自動的に表示されます。ダウンロードした **"NRF52840.uf2"** ファイルを表示された USB ドライブにコピーします（この USB ドライブが DFU モードの EN04 ボードです）。

:::tip
インストールに失敗する場合は、次を試してください：
- 別の USB ケーブルを使用する（電源供給のみのケーブルもあります）
- EN04 ボードのリセットボタンを 2 回押す
- 別の USB ポートを使用する
:::

**ステップ 6. ボードを設定する**  
[OpenDisplay Configuration Page](https://opendisplay.org/firmware/config/?config=nrf52840-en04-s6) を開き、ボードに接続します。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>


**"Seeed EN04 4.26"** または **"Seeed EN04 7.3"** を選択した場合、**"Auto Install to Device"** が表示されます。
これはキットを設定する最も簡単な方法です。

**ステップ 7. ボードに接続する**
ページ上の **""Connect** ボタンを押します。利用可能な OpenDisplay デバイスを一覧表示するウィンドウが表示されるので、新しいデバイスを選択し、**"Pair"** を押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png"  style={{width:500, height:'auto'}}/></div>


**ステップ 8. 設定をボードに保存する**  
最後に、**"Auto Install to Device"** ボタンを押します。これにより設定がデバイスに保存されます。


### 設定を確認する

インストールと設定が完了すると、ディスプレイに起動画面が表示されます。これでデバイスは Bluetooth を介してコンテンツを表示する準備が整いました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>




### 画像をディスプレイにアップロードする

**Web Display Tool を使用する**  

**ステップ 1. OpenDisplay ツール**  
ブラウザで [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html) にアクセスします。

**ステップ 2. デバイスに接続する**  
**"Connect"** をクリックし、Bluetooth ペアリングダイアログから OpenDisplay デバイスを選択します。

**ステップ 3. 画像を選択する**  
**"Select Image"** をクリックして、コンピュータから画像ファイルを選択します。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>




:::tip
最良の結果を得るために：
- ディスプレイ解像度に一致する画像を使用してください（7.3 インチディスプレイは 800x480 ピクセル）
- モノクロディスプレイでは、白黒画像が最もきれいに表示されます
- このツールはカラー画像を自動的に変換し、ディザ処理します
:::

**ステップ 4. 画像をアップロードする**  
**"Upload Image"** をクリックして、画像をディスプレイに送信します。電子ペーパーがリフレッシュされ、画像が表示されます。



### カスタムコンテンツの作成

以下を使用して、カスタム表示コンテンツを作成できます：
- 画像編集ソフトウェア（GIMP、Photoshop など）
- PIL/Pillow ライブラリを用いた Python スクリプト
- Web ベースの画像ジェネレーター
- Home Assistant との連携


## Home Assistant との連携
:::tip
Home Assistant と連携するには、Bluetooth に対応したセットアップが必要です：
- **Home Assistant Green**（Bluetooth 内蔵）
- Bluetooth 対応ハードウェア上の **Home Assistant OS/Supervised**
- **ESPHome Bluetooth Proxy**（より広い到達距離のために推奨）

**注意**：Bluetooth プロキシとして動作する Shelly デバイスは、OpenDisplay に必要な **アクティブ接続をサポートしていない** ため、この連携には使用できません。
:::

**ステップ 1. インテグレーションをインストールする**

詳しいインストール手順については、[OpenDisplay Home Assistant Integration リポジトリ](https://github.com/OpenEPaperLink/Home_Assistant_Integration?tab=readme-ov-file#getting-help) を参照してください。

インテグレーションをインストールする最も簡単な方法は、**HACS**（Home Assistant Community Store）を経由することです。以下のボタンをクリックすると、HACS 内でリポジトリを直接開くことができます。

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=OpenEpaperLink&repository=Home_Assistant_Integration)

:::info
HACS 経由でカスタムインテグレーションをインストールした後、変更を反映させるには **Home Assistant を再起動する必要があります**。
:::

**ステップ 2. 検出されたデバイスを追加する**

Home Assistant を再起動したら：
1. **Settings > Devices & services** に移動します。
2. **Discovered** の下に OpenDisplay デバイスが表示されているはずです。
3. **Add** をクリックします。
4. デバイスの **Name** や **Area** を設定できるダイアログが表示されます。
5. **Finish** をクリックします。デバイス詳細ページにリダイレクトされ、そこから電子ペーパーディスプレイを管理できます。

ディスプレイに新しい画像が表示され、デバイスが Home Assistant に接続されていることを示します。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

## Home Assistant で使用する

OpenDisplay デバイスを Home Assistant と統合したら、センサーデータ、時刻、その他のイベントに基づいてディスプレイのコンテンツを動的に更新するオートメーションを作成できます。

### ディスプレイ更新の自動化

ディスプレイを更新する主なサービスは `open_epaper_link.drawcustom` です。このサービスを使用すると、ディスプレイ上にテキスト、アイコン、画像、図形を描画できます。サポートされている型とパラメータの完全な一覧については、[drawcustom documentation](https://github.com/OpenDisplay-org/Home_Assistant_Integration/blob/main/docs/drawcustom/supported_types.md) を参照してください。

Home Assistant では、**Visual Editor** を使用するか、**YAML** コードを直接記述してオートメーションを作成できます。以下に両方の方法の例を示します。

#### 例 1: センサーデータを表示する（Visual Editor）

1.  **Settings > Automations & Scenes** に移動し、**Create Automation** をクリックします。
2.  **Time Pattern** トリガーを追加します（例: 10 分ごと）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

3.  **Action** を追加し、**OpenDisplay: Draw Custom Image** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

4.  対象デバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

5.  **Payload** フィールドに、ディスプレイ要素の設定を入力します。

<!-- <div style={{textAlign:'center'}}><img src={require('./ha_automation_visual.jpg').default} style={{width:800, height:'auto'}}/></div> -->

**Payload 設定:**

```yaml
- type: "text"
  value: "Living Room"
  x: "50%"
  y: 50
  anchor: "mm"
  size: 70
  color: "red"
- type: "icon"
  value: "mdi:thermometer"
  x: "35%"
  y: 200
  anchor: "mm"
  size: 100
  color: "black"
- type: "text"
  value: "{{ states('sensor.living_room_temperature') }}°C"
  x: "65%"
  y: 200
  anchor: "mm"
  size: 100
  color: "black"
- type: "icon"
  value: "mdi:water-percent"
  x: "35%"
  y: 350
  anchor: "mm"
  size: 100
  color: "black"
- type: "text"
  value: "{{ states('sensor.living_room_humidity') }}%"
  x: "65%"
  y: 350
  anchor: "mm"
  size: 100
  color: "black"
```

:::caution 重要: エンティティ ID
上記の payload で使用されているエンティティ ID（例: `sensor.living_room_temperature`, `sensor.living_room_humidity`）はあくまで例です。Home Assistant 内の実際のセンサーのエンティティ ID に**必ず**置き換えてください。
:::

#### 例 2: カウントダウンタイマー（YAML）

上級ユーザー向けに、YAML モードでオートメーションを編集することもできます。このオートメーションは、特定の日付（例: クリスマス）までの残り日数を計算して表示します。

```yaml
alias: Update ePaper Display - Countdown
description: Displays days until Christmas
triggers:
  - at: "00:00:00"
    trigger: time
actions:
  - variables:
      days_left: "{{ (as_datetime('2025-12-24').date() - now().date()).days }}"
  - action: open_epaper_link.drawcustom
    data:
      background: white
      payload:
        - type: text
          value: "{{ 'Christmas Countdown' if days_left > 0 else '' }}"
          x: 50%
          "y": 50
          anchor: mm
          size: 60
          color: black
        - type: text
          value: "{{ days_left if days_left > 0 else '' }}"
          x: 50%
          "y": 240
          anchor: mm
          size: 250
          color: red
        - type: text
          value: >-
            {{ 'Day Left' if days_left == 1 else ('Days Left' if days_left > 0
            else '') }}
          x: 50%
          "y": 430
          anchor: mm
          size: 60
          color: black
        - type: text
          value: "{{ 'It''s Christmas!!!' if days_left == 0 else '' }}"
          x: 50%
          "y": 50%
          anchor: mm
          size: 100
          color: red
    target:
      device_id: 2ad706d4aa7c657b6fe99a733cef2253
```

:::caution 重要: Device ID
上記の例に記載されている `device_id`（`2ad706d4aa7c657b6fe99a733cef2253`）はあくまで例です。ご自身の OpenDisplay ディスプレイの実際の Device ID に**必ず**置き換えてください。

Device ID を確認するには:
1. Visual Editor を使用して Home Assistant で新しいオートメーションを作成します。
2. アクション設定で OpenDisplay デバイスを選択します。
3. **YAML mode** に切り替えます（アクションカード右上の三点リーダーをクリック）。
4. YAML コードから `device_id` をコピーし、自分のオートメーションに貼り付けます。
:::

## おまけ

ディスプレイをスタイリッシュに設置したい場合は、IKEA RODALM フレーム用のこの 3D プリントインサートをチェックしてみてください。ディスプレイを簡単にマウントできます。

- **[MakerWorld]** [Seeed 7.3" Spectra Insert for IKEA RODALM Frame](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## トラブルシューティング

### ファームウェアインストールの問題

**問題**: EN04 ボードを接続しても PC が新しい USB ドライブを検出しない
- **解決方法**: 
  - 別の USB ケーブルを試す（電源専用ではなくデータ転送対応のケーブル）
  - ボードを接続した後にリセットボタンを 2 回押す


### 設定に関する問題

**問題**: EN04 ボードが検出されない
- **解決方法**:
  - ボード上の LED が点滅しているか確認します — これはデバイスへの給電が行われていることを意味します
  - ボードを再起動してみる
  - ファームウェアのインストールを確認するか、ファイルをもう一度コピーする

**問題**: ファームウェアをインストールした後もディスプレイに何も表示されない
- **解決方法**:
  - FPC ケーブルが正しく挿入されているか確認する（端子の金属面が上向きであること）
  - ケーブルが最後まで差し込まれ、ロックされているか確認する
  - 設定が正しいか確認する（コンフィギュレータ経由でボードに接続し、設定を読み取ることができます）


### Bluetooth 接続の問題

**問題**: Bluetooth ペアリングで OpenDisplay デバイスが見つからない
- **解決方法**:
  - デバイスの電源が入っており、ファームウェアがインストールされていることを確認する
  - デバイスに近づく（2〜3 メートル以内）
  - PC/スマートフォンの Bluetooth が有効になっているか確認する

**問題**: 画像アップロード中に接続が切れる
- **解決方法**:
  - アップロード中はデバイスの近くにいる
  - バッテリー残量が十分であること、または USB 経由で給電されていることを確認する
  - 非常に大きな画像のアップロードは避ける
  - より安定した Bluetooth 環境で再試行する

### バッテリーと電源に関する問題

**問題**: バッテリーの持ちが短い
- **解決方法**:
  - コンフィギュレータでスリープ間隔を長く設定する
  - 常に最新バージョンのファームウェアを使用する（各バージョンでバッテリー使用が最適化されています）
  - ディスプレイのリフレッシュ頻度を下げる
  - バッテリーが完全に充電されているか確認する（Li-Po の場合 4.2V）

**問題**: デバイスが充電できない
- **解決方法**:
  - バッテリーの極性を確認する（赤: +、黒: -）
  - 充電ケーブルが十分な電流を供給できることを確認する（最小 500mA）
  - 電源スイッチが ON になっていることを確認する
  - 別の USB 電源を試す

### Home Assistant と統合に関する問題

**問題**: Raspberry Pi + HA + OpenDisplay でデバイスを追加する際に "Insufficient connection slots" エラーが表示される
- **解決方法**:
  - このエラーは、多くの場合 Raspberry Pi 内蔵の Bluetooth アダプタが同時接続数の上限に達したときに発生します。

  ![Error: Insufficient connection slots](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/1.png)  
  "Insufficient connection slots" エラーメッセージの例。

  - **推奨される対処法**: ESP32 デバイス（例: XIAO ESP32S3）を **ESPHome Bluetooth Proxy** として使用します。これにより、Bluetooth 接続を Raspberry Pi から ESP32 にオフロードし、e-Paper ディスプレイ用により安定した「スロット」を提供できます。
  - 詳細なセットアップ手順については、後述の [Using ESPHome Bluetooth Proxy](#Using-ESPHome-Bluetooth-Proxy) セクションを参照してください。

## ESPHome Bluetooth Proxy を使用する

Raspberry Pi と Home Assistant を使用している際に "Insufficient connection slots" が発生する場合、Bluetooth Proxy を構成するのが最も効果的な解決策です。これにより、HA は外部の ESP32 デバイスをブリッジとして使用し、e-Paper ディスプレイと通信できるようになります。

### 前提条件
- ESP32 デバイス（例: XIAO ESP32S3）
- Home Assistant にインストールされた ESPHome
- ESP32 を Raspberry Pi に接続するための USB データケーブル（初回フラッシュ用）

### 手順に沿った設定

1. **デバイスを接続**: XIAO ESP32S3 を Raspberry Pi の USB ポートの 1 つに接続します。
2. **新しい設定を作成**: ESPHome ダッシュボードで新しいデバイスを作成し、次の YAML 設定をテンプレートとして使用します。

   ![ESPHome YAML Configuration](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/2.png)
   Bluetooth Proxy 用の ESPHome YAML 設定。

```yaml
esphome:
  name: esps3-proxy
  friendly_name: ESP32S3 Bluetooth Proxy

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# 1. Enable detailed logging (useful for debugging)
logger:
  level: VERY_VERBOSE

# 2. Core: Enable Bluetooth Tracker
esp32_ble_tracker:
  scan_parameters:
    active: true

# 3. Core: Enable Bluetooth Proxy
# This allows HA to control the e-Paper display through this device
bluetooth_proxy:
  active: true

api:
  encryption:
    key: "YOUR_ENCRYPTION_KEY" # Generate your own key

ota:
  - platform: esphome
    password: "YOUR_OTA_PASSWORD" # Set your own password

wifi:
  ssid: "YOUR_WIFI_SSID"
  password: "YOUR_WIFI_PASSWORD"

# Recommended: Enable captive portal for fallback access
captive_portal:
```

3. **インストール/フラッシュ**:
     - **Install** -> **Plug into this computer**（または ESPHome を実行しているデバイス）を選択します。

     ![ESPHome Flashing Process](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/4.png)
      Raspberry Pi を介して XIAO ESP32S3 にファームウェアを書き込みます。

    - 初回の場合、ESPHome が `esp-idf` ツールチェーンをダウンロードすることがあります。GitHub に安定して接続できるインターネット環境であることを確認してください。
    - ビルドが完了すると、ログに「WiFi connected」と Bluetooth スキャンの動作が表示されます。

4. **統合**:
     - Home Assistant は新しい Bluetooth Proxy を自動的に検出します。
     - 追加が完了すると、このプロキシを通して e-Paper ディスプレイが検出可能になり、「insufficient slots」エラーは発生しないはずです。

     ![Success: Bluetooth Proxy Connected](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png)
      Home Assistant が Bluetooth Proxy を正常に検出しました。

      ![Success: e-Paper Display Added](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png)
      画面が正常に表示されるかテストし、問題なければ設定は成功です。

## リソース

- **[GitHub]** [OpenDisplay ファームウェア リポジトリ](https://github.com/OpenDisplay-org/Firmware)
- **[Web Tool]** [ファームウェア Web インストーラ](https://opendisplay.org/firmware/install/index.html)
- **[Web Tool]** [設定ビルダー](https://opendisplay.org/firmware/config/index.html)
- **[Web Tool]** [ディスプレイテスター](https://opendisplay.org/firmware/display/index.html)
- **[Discord]** [OpenDisplay コミュニティ](https://discord.gg/WG7tbTzF9Z)
- **[Website]** [OpenDisplay 公式サイト](https://opendisplay.org)



## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。ご希望やニーズに応じてお選びいただける複数のコミュニケーション手段をご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

