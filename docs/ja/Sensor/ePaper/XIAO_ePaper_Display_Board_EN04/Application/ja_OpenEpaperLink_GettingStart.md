---
description: OpenDisplay Kit を使用した OpenDisplay のセットアップと設定
title: OpenDisplay Kit を使用した OpenDisplay ファームウェアのセットアップと設定
keywords:
  - epaper
  - opendisplay
  - en04
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1 
slug: /ja/EN04_opendisplay
sku: E25120101
last_update:
  date: 01/13/2026
  author: Tomasz/Allen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# OpenDisplay Kit を使用した OpenDisplay ファームウェアのセットアップと設定

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

**XIAO nRF52840** Plus を搭載した XIAO EN04 ePaper Display Board は、OpenDisplay ファームウェアを使用して Bluetooth 対応の電子ペーパーディスプレイを始める最も簡単な方法です。802.15.4 無線を備えた専用アクセスポイントを必要とする従来のシステムとは異なり、このボードは Bluetooth Low Energy を使用して、スマートフォン、コンピューター、または Home Assistant から直接ワイヤレス制御を行います。

### アプリケーション

- **スマートホームダッシュボード**: 天気予報、カレンダーイベント、さまざまなスマートホームデバイスからの通知などのリアルタイム情報を表示します。
- **エネルギー監視**: スマートメーターからのエネルギー消費データを表示し、住宅所有者がエネルギー使用量をより効率的に追跡・管理できるよう支援します。
- **セキュリティアラート**: 動作検知やドア・窓センサーの作動などのセキュリティイベントに関するアラートと通知を表示します。
- **スマートサーモスタットディスプレイ**: 温度と湿度レベル、およびスマートサーモスタットの制御設定を表示します。

## [OpenDisplay](https://opendisplay.org) とは？

OpenDisplay は、電子ペーパーディスプレイ用のファームウェアとプロトコルを提供するオープンソースプロジェクトです。nRF52840 や ESP32 などのマイクロコントローラーを使用したカスタムハードウェア構築専用に設計されています。

[OpenDisplay ファームウェア](https://github.com/OpenDisplay-org/Firmware) は以下を可能にします：
- **Bluetooth Low Energy (BLE) 通信**: 専用アクセスポイントを必要とせずに直接ワイヤレス制御
- **専用ハードウェアサポート**: XIAO ePaper Board EN04、EE04 などの専用ボードで動作
- **Web ベースのフラッシュと設定**: [https://opendisplay.org/firmware/install](https://opendisplay.org/firmware/install/index.html) の Web インターフェースを通じた簡単なセットアップと画像アップロード
- **複数ディスプレイサポート**: さまざまな電子ペーパーサイズとコントローラーに対応


### なぜ OpenDisplay ファームウェアを使用するのか？

OpenDisplay ファームウェアは、カスタム電子ペーパーディスプレイプロジェクトにいくつかの利点を提供します：

- **アクセスポイント不要**: 直接通信に Bluetooth Low Energy を使用 - 追加ハードウェア不要
- **Web ベースツール**: ブラウザベースのツールを通じた簡単なファームウェアインストール、設定、画像アップロード
- **専用ハードウェア**: 商用 ESL タグに限定されず、EN04 などのボード用に設計
- **オープンソース＆無料**: GitHub で活発に開発されている完全オープンソースプロジェクト
- **複数マイクロコントローラーサポート**: nRF52840、ESP32-S3、ESP32-C6、ESP32-C3 で動作
- **簡単セットアップ**: ボードに単一ファイルをドラッグ＆ドロップでファームウェアアップロード、Web インターフェースで設定、複雑なプログラミング不要
- **バッテリー効率**: 電子ペーパーディスプレイでの低消費電力動作に最適化
- **活発なコミュニティ**: [OpenDisplay Discord](https://discord.gg/WG7tbTzF9Z) を通じたサポートと開発


## OpenDisplay ファームウェアの使用開始

### ハードウェア組み立て

**ステップ 1. ディスプレイをドライバーボードに接続**  
FPC ケーブルを XIAO EN04 Board のコネクターに合わせ、ラッチを固定して確実な接続を確保します。  

:::tip
FPC ケーブルの金属面は上向きにする必要があります。そうでないと、コンテンツが表示されません。ほとんどのディスプレイには FPC ケーブルに 1 と 50 があり、これらの番号はボード上のものと一致する必要があります！

多くの人が間違えるため、以下のインストールチュートリアルに従ってください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 2. バッテリーを取り付ける**  
バッテリーケーブルをドライバーボードの JST コネクターに接続し、正しい極性（赤線を +、黒線を - に）を確認します。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
極性を再確認してください。異なるバッテリーは配線が混在している場合があります。赤と黒が合わない場合は、針を使って JST コネクターから簡単に取り外し、正しく配置できます。
:::



## OpenDisplay ファームウェアのインストール

### Web インストーラー方式（推奨）

OpenDisplay ファームウェアをインストールする最も簡単な方法は、Web ベースのインストーラーを使用することです。

**ステップ 1. Web インストーラーを開く**  
ブラウザで [OpenDisplay Web Installer](https://opendisplay.org/firmware/install/index.html) にアクセスします。

**ステップ 2. ボードを選択**  
デバイスリストから **"Seeed EN04 4.26"** または **"Seeed EN04 7.3"**（またはハードウェアに適したプリセット）を選択します（キット内のディスプレイサイズに基づく）。

**ステップ 3. ファームウェアをダウンロード**  
**"Download Firmware"** ボタンをクリックし、**"NRF52840.uf2"** をハードドライブに保存します。

**ステップ 4. ボードを接続**  
USB-C ケーブルを使用して XIAO ePaper Board EN04 をコンピューターに接続します。

**ステップ 5. ファームウェアをインストール**  
リセットボタンを連続して 2 回押します。PC にファイルマネージャーがポップアップ表示されます。ダウンロードした **"NRF52840.uf2"** ファイルを表示される USB ドライブ（USB ドライブは DFU モードの EN04 ボード）にコピーします。

:::tip
インストールが失敗した場合は、以下を試してください：
- 異なる USB ケーブルを使用する（一部のケーブルは電源のみ）
- EN04 ボードのリセットボタンを 2 回押す
- 異なる USB ポートを使用する
:::

**ステップ 6. ボードを設定**  
[OpenDisplay Configuration Page](https://opendisplay.org/firmware/config/?config=nrf52840-en04-s6) を開き、ボードに接続します。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>


**"Seeed EN04 4.26"** または **"Seeed EN04 7.3"** を選択した場合、**"Auto Install to Device"** が表示されます。
これがキットを設定する最も簡単な方法です。

**ステップ 7. ボードに接続**
ページの **"Connect"** ボタンを押します。利用可能な OpenDisplay デバイスを表示するウィンドウが表示されるので、新しいデバイスを選択して **"Pair"** を押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png"  style={{width:500, height:'auto'}}/></div>


**ステップ 8. 設定をボードに保存**  
最後に **"Auto Install to Device"** ボタンを押します。これにより設定がデバイスに保存されます。


### 設定の確認

インストールと設定後、ディスプレイにスタートアップ画面が表示されます。デバイスは Bluetooth 経由でコンテンツを表示する準備が整いました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>




## ディスプレイへの画像アップロード

### Web ディスプレイツールの使用

**ステップ 1. OpenDisplay ツール**  
ブラウザで [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html) にアクセスします。

**ステップ 2. デバイスに接続**  
**"Connect"** をクリックし、Bluetooth ペアリングダイアログから OpenDisplay デバイスを選択します。

**ステップ 3. 画像を選択**  
**"Select Image"** をクリックし、コンピューターから画像ファイルを選択します。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>




:::tip
最良の結果を得るために：
- ディスプレイ解像度に合った画像を使用する（7.3" ディスプレイは 800x480 ピクセル）
- モノクロディスプレイには白黒画像が最適
- ツールはカラー画像を自動的に変換・ディザリングします
:::

**ステップ 4. 画像をアップロード**  
**"Upload Image"** をクリックして画像をディスプレイに送信します。電子ペーパーが更新され、画像が表示されます。



### カスタムコンテンツの作成

以下を使用してカスタムディスプレイコンテンツを作成できます：
- 画像編集ソフトウェア（GIMP、Photoshop など）
- PIL/Pillow ライブラリを使用した Python スクリプト
- Web ベースの画像ジェネレーター
- Home Assistant 統合


### Home Assistant 統合
:::tip
Home Assistant と統合するには、Bluetooth 対応のセットアップが必要です：
- **Home Assistant Green**（内蔵 Bluetooth）
- Bluetooth サポートを備えたハードウェア上の **Home Assistant OS/Supervised**
- **ESPHome Bluetooth Proxy**（より良い範囲のため推奨）

**注意**: Bluetooth プロキシとして動作する Shelly デバイスは、OpenDisplay で必要な **アクティブ接続をサポートしていない** ため、この統合には使用できません。
:::

**ステップ 1. 統合をインストール**

詳細なインストール手順については、[OpenDisplay Home Assistant Integration Repository](https://github.com/OpenEPaperLink/Home_Assistant_Integration?tab=readme-ov-file#getting-help) を参照してください。

統合をインストールする最も簡単な方法は **HACS**（Home Assistant Community Store）経由です。以下のボタンをクリックして、HACS でリポジトリを直接開きます：

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=OpenEpaperLink&repository=Home_Assistant_Integration)

:::info
HACS 経由でカスタム統合をインストールした後、変更を有効にするために **Home Assistant を再起動** する必要があります。
:::

**ステップ 2. 検出されたデバイスを追加**

Home Assistant が再起動したら：
1. **Settings > Devices & services** に移動します。
2. **Discovered** の下に OpenDisplay デバイスが表示されます。
3. **Add** をクリックします。
4. デバイスの **Name** と **Area** を設定できるダイアログが表示されます。
5. **Finish** をクリックします。デバイス詳細ページにリダイレクトされ、そこで電子ペーパーディスプレイを管理できます。

ディスプレイに新しい画像が表示され、デバイスがHome Assistantに接続されていることが示されます。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

## Home Assistantでの使用

OpenDisplayデバイスをHome Assistantと統合したら、センサーデータ、時間、またはその他のイベントに基づいてディスプレイコンテンツを動的に更新するオートメーションを作成できます。

### ディスプレイ更新の自動化

ディスプレイを更新するための主要なサービスは `open_epaper_link.drawcustom` です。このサービスを使用すると、ディスプレイにテキスト、アイコン、画像、図形を描画できます。サポートされているタイプとパラメータの完全なリストについては、[drawcustomドキュメント](https://github.com/OpenDisplay-org/Home_Assistant_Integration/blob/main/docs/drawcustom/supported_types.md)を参照してください。

Home Assistantでは、**ビジュアルエディタ**を使用するか、**YAML**コードを直接記述してオートメーションを作成できます。以下に両方の方法の例を示します。

#### 例1：センサーデータの表示（ビジュアルエディタ）

1.  **Settings > Automations & Scenes** に移動し、**Create Automation** をクリックします。
2.  **Time Pattern** トリガーを追加します（例：10分ごと）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

3.  **Action** を追加し、**OpenDisplay: Draw Custom Image** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

4.  ターゲットデバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

5.  **Payload** フィールドに、ディスプレイ要素の設定を入力します。

<!-- <div style={{textAlign:'center'}}><img src={require('./ha_automation_visual.jpg').default} style={{width:800, height:'auto'}}/></div> -->

**ペイロード設定：**

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

:::caution 重要：エンティティID
上記のペイロードで使用されているエンティティID（例：`sensor.living_room_temperature`、`sensor.living_room_humidity`）は例です。Home Assistantの実際のセンサーのエンティティIDに**必ず**置き換えてください。
:::

#### 例2：カウントダウンタイマー（YAML）

上級ユーザーの場合、YAMLモードでオートメーションを編集できます。このオートメーションは、特定の日付（例：クリスマス）までの残り日数を計算して表示します。

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

:::caution 重要：デバイスID
上記の例で示されている `device_id`（`2ad706d4aa7c657b6fe99a733cef2253`）は単なる例です。実際のOpenDisplayディスプレイの実際のデバイスIDに**必ず**置き換えてください。

デバイスIDを見つけるには：
1. ビジュアルエディタを使用してHome Assistantで新しいオートメーションを作成します。
2. アクション設定でOpenDisplayデバイスを選択します。
3. **YAMLモード**に切り替えます（アクションカードの右上隅にある3つの点をクリック）。
4. YAMLコードから `device_id` をコピーして、オートメーションに貼り付けます。
:::

## ボーナス

ディスプレイをスタイリッシュにマウントする方法をお探しの場合は、IKEA RODALMフレーム用のこの3Dプリント製インサートをチェックしてください。ディスプレイの簡単な取り付けが可能です。

- **[MakerWorld]** [Seeed 7.3" Spectra Insert for IKEA RODALM Frame](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## トラブルシューティング

### ファームウェアインストールの問題

**問題**：EN04ボードを接続してもPCが新しいUSBドライブを検出しない
- **解決策**：
  - 別のUSBケーブルを試してください（電源専用ではなくデータケーブル）
  - ボードを接続した後、リセットボタンを2回押してください


### 設定の問題

**問題**：EN04ボードが発見されない
- **解決策**：
  - ボード上のLEDが点滅することを確認してください - これによりデバイスに電源が供給されていることが確認されます
  - ボードの再起動を試してください
  - ファームウェアのインストールを確認するか、ファイルを再度コピーしてください

**問題**：ファームウェアインストール後にディスプレイに何も表示されない
- **解決策**：
  - FPCケーブルが正しく挿入されていることを確認してください（金属接点が上向き）
  - ケーブルが完全に挿入され、ラッチされていることを確認してください
  - 設定が正しいかどうかを確認してください（コンフィギュレータ経由でボードに接続し、設定を読み取ることができます）


### Bluetooth接続の問題

**問題**：BluetoothペアリングでOpenDisplayデバイスが見つからない
- **解決策**：
  - デバイスの電源が入っており、ファームウェアがインストールされていることを確認してください
  - デバイスに近づいてください（2〜3メートル以内）
  - コンピュータ/スマートフォンでBluetoothが有効になっていることを確認してください

**問題**：画像アップロード中に接続が切断される
- **解決策**：
  - アップロード中はデバイスの近くにいてください
  - バッテリーが十分に充電されていることを確認するか、USB経由でデバイスに電源を供給してください
  - 非常に大きな画像のアップロードは避けてください
  - より安定したBluetooth環境で再試行してください

### バッテリーと電源の問題

**問題**：バッテリー寿命が短い
- **解決策**：
  - コンフィギュレータでより長いスリープ間隔を設定してください
  - 常に最新バージョンのファームウェアを使用してください。各バージョンでバッテリー使用量が最適化されています
  - ディスプレイのリフレッシュ頻度を減らしてください
  - バッテリーが完全に充電されていることを確認してください（Li-Poの場合4.2V）

**問題**：デバイスが充電されない
- **解決策**：
  - バッテリーの極性を確認してください（赤：+、黒：-）
  - 充電ケーブルが十分な電流を供給することを確認してください（最低500mA）
  - 電源スイッチがON位置にあることを確認してください
  - 別のUSB電源で試してください

## リソース

- **[GitHub]** [OpenDisplay Firmware Repository](https://github.com/OpenDisplay-org/Firmware)
- **[Web Tool]** [Firmware Web Installer](https://opendisplay.org/firmware/install/index.html)
- **[Web Tool]** [Configuration Builder](https://opendisplay.org/firmware/config/index.html)
- **[Web Tool]** [Display Tester](https://opendisplay.org/firmware/display/index.html)
- **[Discord]** [OpenDisplay Community](https://discord.gg/WG7tbTzF9Z)
- **[Website]** [OpenDisplay Official Site](https://opendisplay.org)



## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
