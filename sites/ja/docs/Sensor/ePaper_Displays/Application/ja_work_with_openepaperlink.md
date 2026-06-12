---
description: OpenEPaperLink (OEPL) と OpenDisplay のオープンソースエコシステムを使って、Seeed の ePaper ハードウェアを Bluetooth Low Energy 経由で駆動します — XIAO ePaper Display Board EN04 と Seeed Studio XIAO 用 ePaper Breakout Board を対象とします。
title: OpenEPaperLink / OpenDisplay を使う
keywords:
  - ePaper ディスプレイ
  - OpenEPaperLink
  - OEPL
  - OpenDisplay
  - EN04
  - ePaper Breakout Board
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
slug: /EN04_opendisplay
sidebar_position: 9
last_update:
  date: 04/28/2026
  author: dimo
aliases:
  - /epaper_breakout_board_with_oepl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/EN04_opendisplay/
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# OpenEPaperLink / OpenDisplay を使う

[OpenEPaperLink (OEPL)](https://openepaperlink.de/) エコシステムと関連プロジェクトの [OpenDisplay](https://opendisplay.org/) は、電子ペーパーディスプレイを駆動するためのオープンソースのファームウェア／プロトコルスタックです。最新リリースは **Bluetooth Low Energy** 上で動作し、スマートフォンやコンピュータ、Home Assistant からデバイスへ直接通信できます。専用の 802.15.4 アクセスポイントは不要です。

このガイドでは、Seeed ハードウェアからそのエコシステムへ入る 2 つのパスを扱います：

- **XIAO ePaper Display Board EN04** — OpenDisplay ファームウェアを BLE 上で動かす一体型キット。
- **ePaper Breakout Board for Seeed Studio XIAO** — OEPL Config Builder と OEPL Image Uploader を XIAO nRF52840 シリーズボードと組み合わせて使う、よりモジュール的な DIY パス。

どちらのフローも共通の思想（BLE 設定、Web ベースのツール、低消費電力）を共有していますが、ハードウェアとファームウェア／Web ツールは異なります。この記事全体を通して、自分のハードウェアに合ったタブを選択してください。

## 対応ハードウェア

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

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

**XIAO nRF52840 Plus** を搭載した XIAO EN04 ePaper Display Board は、Bluetooth 対応電子ペーパーディスプレイを始める最も簡単な方法です。スマートフォン、コンピュータ、Home Assistant からの直接ワイヤレス制御が可能で、専用 AP は不要です。

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

<table align="center">
  <tr>
    <th>4.26" モノクロ ePaper ディスプレイ</th>
    <th>ePaper Breakout Board for Seeed Studio XIAO</th>
    <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::tip
**XIAO nRF52840 シリーズ**全体がこの DIY キットを駆動できます — 上で示した Sense Plus だけではありません。コミュニティの OEPL プロジェクトは 4.26" スクリーンを標準でサポートしており、今後さらに多くの画面サイズが追加される予定です。
:::

</TabItem>
</Tabs>

## なぜ OpenEPaperLink / OpenDisplay を使うのか？

- **アクセスポイント不要** — Bluetooth Low Energy を使って直接通信します。802.15.4 ハードウェアは不要です。
- **Web ベースのツール** — ファームウェアのインストール、デバイスの設定、画像のアップロードをブラウザから直接行えます。
- **専用ハードウェア対応** — XIAO nRF52840 ファミリ、EN04、EE04 など。
- **オープンソースかつ無料** — GitHub で積極的に開発されています。
- **複数のマイコンに対応** — nRF52840、ESP32-S3、ESP32-C6、ESP32-C3。
- **シンプルなフロー** — ドラッグ＆ドロップでファームウェアをインストールし、Web から設定でき、複雑なプログラミングは不要です。
- **バッテリー効率に優れる** — 低消費電力の電子ペーパー向けに最適化されています。
- **活発なコミュニティ** — [OpenDisplay Discord](https://discord.gg/WG7tbTzF9Z)。

## ステップ 1: ハードウェアのセットアップ

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

**ステップ 1. ディスプレイをドライバボードに接続する**  
FPC ケーブルを XIAO EN04 ボード上のコネクタに合わせ、ラッチを固定します。

:::tip
FPC ケーブルの金属面は上向きにする必要があります。逆向きだと何も表示されません。ほとんどのディスプレイでは FPC に `1` と `50` が印字されているので、ボード上の対応する番号と合わせてください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 2. バッテリーを接続する**  
バッテリーケーブルをドライバボード上の JST コネクタに接続します。赤い線を **+** に、黒い線を **−** に接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
極性を必ず再確認してください。バッテリーによっては配線が異なる場合があります。配線がずれている場合は、針などを使って JST コネクタからピンを抜き、正しい向きで差し直すことができます。
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

**XIAO nRF52840 (Sense Plus)** を **ePaper Breakout Board** に接続し、続いて **4.26" モノクロ ePaper スクリーン** を FPC コネクタに取り付けます。USB-C データケーブルを使って XIAO をコンピュータに接続します。

</TabItem>
</Tabs>

## ステップ 2: ファームウェアを書き込む

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

最も簡単な方法は OpenDisplay Web インストーラを使うことです。

**ステップ 1.** ブラウザで [OpenDisplay Web Installer](https://opendisplay.org/firmware/install/index.html) を開きます。

**ステップ 2.** デバイス一覧から **Seeed EN04 4.26** または **Seeed EN04 7.3**（もしくはお使いのディスプレイに合ったプリセット）を選択します。

**ステップ 3.** **Download Firmware** をクリックし、`NRF52840.uf2` をローカルに保存します。

**ステップ 4.** EN04 ボードを USB-C で接続します。

**ステップ 5.** リセットボタンを**続けて 2 回**押します。コンピュータ上に USB ドライブ（DFU モードの EN04）が表示されるので、そのドライブに `NRF52840.uf2` をコピーします。

:::tip
インストーラがうまく動作しない場合：

- 別の USB ケーブルを試してください（一部のケーブルは給電専用です — データ通信対応ケーブルを使用してください）。
- EN04 のリセットボタンを 2 回押して DFU モードに再度入ります。
- 別の USB ポートを試してください。
:::

**ステップ 6.** [OpenDisplay Configuration Page](https://opendisplay.org/firmware/config/?config=nrf52840-en04-s6) を開き、ボードに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>

**Seeed EN04 4.26** または **Seeed EN04 7.3** を選択していれば、**Auto Install to Device** が表示されます — このキットを設定する最も簡単な方法です。

**ステップ 7.** **Connect** ボタンを押します。ペアリングダイアログで新しいデバイスを選択し、**Pair** を押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png" style={{width:500, height:'auto'}}/></div>

**ステップ 8.** **Auto Install to Device** を押して、設定をボードに保存します。

インストールと設定が完了すると、ディスプレイに起動画面が表示され、BLE 経由でコンテンツを受信する準備が整います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

XIAO nRF52840 が OEPL Config Builder と通信できるようにするには、事前に **OEPL_BLE** ファームウェアを書き込んでおく必要があります。

**ステップ 1.** 公式 OEPL リリースページから最新の `OEPL_BLE` ファームウェアをダウンロードします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases/tag/test7" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the firmware</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

**ステップ 2.** XIAO nRF52840 + Breakout Board + スクリーンを接続し、XIAO を USB-C でコンピュータに接続してから、**リセットボタンを 2 回押します**。XIAO がコンピュータ上に USB ドライブとして表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** ダウンロードした `.uf2` ファームウェアをその USB ドライブにドラッグ＆ドロップします。次回の電源投入時に、XIAO は再起動して新しいファームウェアを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

## ステップ 3: BLE 経由でデバイスを設定する

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

前のフラッシュ手順で行った OpenDisplay の設定ステップですでに処理されているため、現在 EN04 は OpenDisplay の起動画面で起動し、画像アップロードを受け付ける状態になっているはずです。

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

[OEPL Config Builder](https://config.openepaperlink.org/) を開き、BLE 経由で XIAO に接続します。（デバイスが表示されない場合は、ファームウェアを書き直してから再試行してください。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

ターミナルに "Connected" と表示されたら、次の操作ができます：

- **Read Config** — MCU から現在の設定を読み出します。
- **Write Config** — MCU に新しい設定を書き込みます。
- **Reboot** — MCU を再起動します。

### Builder パネル

パネル内で変数とパラメータを選択して、設定を作成します。

- **system_config** — ホスト IC と電源管理ピン。
- **manufacturer_data** — メーカー ID とボード情報。
- **power_option** — 電源供給とスリープ設定。
- **display** — ディスプレイ / パネル情報（複数ディスプレイ用に繰り返し可能）。
- **led** — オプションの LED 設定（繰り返し可能）。
- **sensor_data** — オプションのセンサー読み取り / 定義（繰り返し可能）。
- **data_bus** — バス定義（I2C / SPI / …）。
- **binary_inputs** — ボタン、スイッチ。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

設定は `.bin`、`Hex`、`JSON` としてエクスポートでき、保存済みの JSON をインポートすることもできます。4.26" スクリーン用の既製設定は以下から利用できます。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>4.26" サンプル設定 (JSON)</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

設定を詰め終えたら、**Write Config** をクリックして MCU に保存します。

</TabItem>
</Tabs>

## ステップ 4: 画像をアップロードする

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

OpenDisplay プロジェクトには、専用のブラウザベースのアップローダーがあります。

**ステップ 1.** [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html) を開きます。

**ステップ 2.** **Connect** をクリックし、BLE ペアリングダイアログから OpenDisplay デバイスを選択します。

**ステップ 3.** **Select Image** をクリックし、PC からファイルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>

:::tip
最良の結果を得るには：

- ディスプレイ解像度に一致する画像を使用します（7.3" パネルは 800×480 px）。
- モノクロディスプレイでは、白黒画像が最もきれいに表示されます。
- このツールはカラー画像を自動的に変換し、ディザリングします。
:::

**ステップ 4.** **Upload Image** をクリックします。電子ペーパーがリフレッシュされ、画像が表示されます。

画像編集ソフト（GIMP、Photoshop）、Python + Pillow スクリプト、Web ベースの画像ジェネレーター、あるいは Home Assistant 連携（後述）を使ってカスタムコンテンツを作成することもできます。

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

OEPL Image Uploader も BLE を使う Web ツールです。Config Builder 用ファームウェアとはピン割り当てが異なるため、先に少し異なる画像アップロード用ファームウェアを書き込む必要があります。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ファームウェアを入手するにはここをクリック</button></p>
</a>
</div>

**E-Paper prefix filter(s)** フィールドの値を `OEPL` に変更します。そうしないとアップローダーがデバイスを見つけられません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

**Select File** をクリックして、アップロードするローカルファイルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

ファイル転送が完了したら、**Upload Image** をクリックして電子ペーパーに送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

**Upload Complete** と表示されたら、新しい画像で電子ペーパーが更新されています。

</TabItem>
</Tabs>

## Home Assistant 連携（EN04 / OpenDisplay のみ）

:::tip
Home Assistant と連携するには、Bluetooth 対応のセットアップが必要です：

- **Home Assistant Green**（Bluetooth 内蔵）
- Bluetooth 対応ハードウェア上の **Home Assistant OS / Supervised**
- **ESPHome Bluetooth Proxy**（電波範囲を広げるために推奨 — 下記参照）

**注意:** Bluetooth プロキシとして動作する Shelly デバイスは、OpenDisplay に必要なアクティブ接続をサポートしていないため、使用できません。
:::

**ステップ 1. インテグレーションをインストールする**

詳細なインストール手順は、[OpenDisplay Home Assistant Integration リポジトリ](https://github.com/OpenEPaperLink/Home_Assistant_Integration?tab=readme-ov-file#getting-help)を参照してください。

最も簡単な方法は **HACS**（Home Assistant Community Store）経由です：

[![Home Assistant インスタンスを開き、Home Assistant Community Store 内のリポジトリを開きます。](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=OpenEpaperLink&repository=Home_Assistant_Integration)

:::info
HACS からカスタムインテグレーションをインストールした後、変更を反映させるために **Home Assistant を再起動** してください。
:::

**ステップ 2. 検出されたデバイスを追加する**

Home Assistant が再起動したら：

1. **Settings → Devices & services** に移動します。
2. **Discovered** の下にある OpenDisplay デバイスを探します。
3. **Add** をクリックします。
4. **Name** と **Area** を設定し、**Finish** をクリックします。

ディスプレイに新しい画像が表示され、Home Assistant が接続されたことが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

### ディスプレイ更新の自動化

主なサービスは `open_epaper_link.drawcustom` で、テキスト、アイコン、画像、図形を描画できます。利用可能な型とパラメータの一覧は、[drawcustom ドキュメント](https://github.com/OpenDisplay-org/Home_Assistant_Integration/blob/main/docs/drawcustom/supported_types.md)を参照してください。

#### 例 1 — センサーデータを表示する（ビジュアルエディタ）

1. **Settings → Automations & Scenes** に移動し、**Create Automation** をクリックします。
2. **Time Pattern** トリガーを追加します（例：10 分ごと）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

3. **Action** を追加し、**OpenDisplay: Draw Custom Image** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

4. 対象デバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

5. **Payload** フィールドにレイアウト設定を入力します：

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

:::caution エンティティ ID
上記のエンティティ ID（例：`sensor.living_room_temperature`）はプレースホルダーです。実際の Home Assistant のエンティティ ID に置き換えてください。
:::

#### 例 2 — カウントダウンタイマー（YAML）

上級ユーザー向けに、オートメーションを YAML として編集します。この例では、ある日付までのカウントダウンを行い、その結果をディスプレイに表示します。

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

:::caution Device ID
上記の `device_id` はプレースホルダです。実際のデバイス ID を確認するには、次の手順に従います：

1. ビジュアルエディタで新しいオートメーションを作成します。
2. アクション設定で OpenDisplay デバイスを選択します。
3. **YAML モード** に切り替えます（アクションカードの三点メニュー）。
4. `device_id` をコピーして、あなたのオートメーションに貼り付けます。
:::

## おまけ

ディスプレイをスタイリッシュにマウントしたいですか？この 3D プリントインサートは IKEA RODÅLM フォトフレームにフィットし、簡単にマウントできます：

- **[MakerWorld]** [Seeed 7.3" Spectra Insert for IKEA RODALM Frame](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## トラブルシューティング

### ファームウェアインストールの問題

**問題**：ボードを接続しても、PC が新しい USB ドライブを検出しません。

- 別の USB ケーブルを試してください（給電専用ではなくデータ通信対応のケーブル）。
- ボードを接続した後にリセットボタンを 2 回押してください。

### 設定の問題

**問題**：ボードが検出されません。

- ボード上の LED が点滅しているか確認します — デバイスに電源が入っていることを示します。
- ボードを再起動してみてください。
- ファームウェアを書き直してください。

**問題**：ファームウェアインストール後もディスプレイに何も表示されません。

- FPC ケーブルの向き（金属端子が上向き）を確認します。
- ケーブルが奥までしっかり挿入され、ラッチされていることを確認します。
- コンフィギュレータで設定を再確認します。

### Bluetooth 接続の問題

**問題**：Bluetooth ペアリングでデバイスが見つかりません。

- デバイスの電源が入っており、ファームウェアがインストールされていることを確認します。
- もっと近づいてください（2〜3 m 以内）。
- コンピュータ / スマートフォンで Bluetooth が有効になっていることを確認します。

**問題**：画像アップロード中に接続が切断されます。

- アップロード中はデバイスの近くにいてください。
- バッテリーを十分に充電するか、USB 経由で給電してください。
- 非常に大きな画像のアップロードは避けてください。
- Bluetooth が混雑していない環境で再度試してください。

### バッテリーと電源の問題

**問題**：バッテリーの持ちが短い。

- コンフィギュレータでスリープ間隔を長く設定します。
- 常に最新のファームウェアを使用します（各リリースで電力効率が改善されます）。
- ディスプレイのリフレッシュ頻度を下げます。
- バッテリーが完全に充電されていることを確認します（Li-Po の場合 4.2 V）。

**問題**：デバイスが充電されません。

- 極性を確認します（赤 = +、黒 = −）。
- 充電ケーブルが 500 mA 以上を供給できることを確認します。
- 電源スイッチが **ON** になっていることを確認します。
- 別の USB 電源を試してください。

### Home Assistant / 連携の問題

**問題**：Raspberry Pi + HA 経由でデバイスを追加するときに "Insufficient connection slots" と表示されます。

これは多くの場合、Raspberry Pi 内蔵の Bluetooth アダプタが同時接続数の上限に達しているために発生します。

![Error: Insufficient connection slots](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/1.png)
*"Insufficient connection slots" メッセージの例。*

**推奨される解決策**：ESP32 デバイス（例：XIAO ESP32S3）を **ESPHome Bluetooth Proxy** として使用します。これにより Bluetooth 接続を Pi から切り離し、電子ペーパーディスプレイ用の「スロット」をより安定して確保できます。

## ESPHome Bluetooth Proxy の使用

Raspberry Pi と Home Assistant を使用していて "Insufficient connection slots" に遭遇する場合、ESPHome Bluetooth Proxy を使うのが最も効果的な解決策です。

### 前提条件

- ESP32 デバイス（例：XIAO ESP32S3）。
- Home Assistant にインストールされた ESPHome。
- ESP32 を Pi に接続するための USB データケーブル（初回フラッシュ用）。

### 手順付き設定ガイド

1. **デバイスを接続** — XIAO ESP32S3 を Raspberry Pi の USB ポートに接続します。

2. 下記の YAML を使って **新しい ESPHome 設定を作成** します：

   ![ESPHome YAML Configuration](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/2.png)

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
   bluetooth_proxy:
     active: true

   api:
     encryption:
       key: "YOUR_ENCRYPTION_KEY"

   ota:
     - platform: esphome
       password: "YOUR_OTA_PASSWORD"

   wifi:
     ssid: "YOUR_WIFI_SSID"
     password: "YOUR_WIFI_PASSWORD"

   captive_portal:
   ```

3. **インストール / フラッシュ**：

   - **Install → Plug into this computer**（または ESPHome を実行しているデバイス）を選択します。

     ![ESPHome flashing process](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/4.png)

   - 初回フラッシュ時、ESPHome が `esp-idf` ツールチェーンをダウンロードする場合があります。GitHub へ安定してアクセスできるインターネット環境を用意してください。
   - コンパイル後、ログに「WiFi connected」と Bluetooth スキャンの動作が表示されます。

4. **プロキシを Home Assistant に追加**：

   - Home Assistant が新しい Bluetooth Proxy を自動的に検出します。
   - 追加が完了すると、電子ペーパーディスプレイは "insufficient slots" エラーなしでプロキシ経由で検出できるようになります。

   ![Success: Bluetooth Proxy connected](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png)

   ![Success: e-paper display added](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png)

## リソース

- **[GitHub]** [OpenDisplay firmware](https://github.com/OpenDisplay-org/Firmware)
- **[GitHub]** [OEPL_BLE firmware](https://github.com/OpenEPaperLink/OEPL_BLE)
- **[Web Tool]** [OpenDisplay firmware web installer](https://opendisplay.org/firmware/install/index.html)
- **[Web Tool]** [OpenDisplay configuration builder](https://opendisplay.org/firmware/config/index.html)
- **[Web Tool]** [OpenDisplay display tester](https://opendisplay.org/firmware/display/index.html)
- **[Web Tool]** [OEPL Config Builder](https://config.openepaperlink.org/)
- **[Web Tool]** [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html)
- **[Discord]** [OpenDisplay Community](https://discord.gg/WG7tbTzF9Z)
- **[Website]** [OpenDisplay Official Site](https://opendisplay.org)
- **[Website]** [OpenEPaperLink Official Site](https://openepaperlink.de/)

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
