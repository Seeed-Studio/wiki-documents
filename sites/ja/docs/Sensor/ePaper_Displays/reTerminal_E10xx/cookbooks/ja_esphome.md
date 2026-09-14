---
description: reTerminal E1001 / E1002 / E1003 / E1004 向け ESPHome ディスプレイ・ cookbook - Home Assistant 連携、最初のダッシュボード、Wi-Fi 設定、ビルド済みファームウェア ZIP、ePaper 描画サンプル。
title: ESPHome Cookbook - ディスプレイ基礎 (reTerminal E シリーズ)
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /reterminal_e10xx_with_esphome
aliases:
  - /reterminal_e10xx_esphome
sku: 100017057,100073581
sidebar_position: 3
sidebar_label: ESPHome - ディスプレイ
last_update:
  date: 08/05/2026
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESPHome Cookbook - ディスプレイ基礎: reTerminal E シリーズ

:::tip まずメインの ESPHome ガイドを読んでください
このページは **reTerminal E シリーズ専用の ESPHome ディスプレイ・ cookbook**です。共通のボイラープレート — 書き込み方法の選択、汎用 YAML スケルトン、Home Assistant への接続 — は **[Work with ESPHome](/ja/epaper_work_with_esphome)** にまとまっています。Seeed ePaper で ESPHome を使うのが初めての場合は、まずそちらに目を通してください。ボタン、ブザー、LED、バッテリー、SHT4x、ディープスリープについては [I/O、バッテリー、タッチ、低消費電力 cookbook](/ja/reterminal_e10xx_with_esphome_advanced) を参照してください。RTC、microSD カード検出、マイクのセットアップについては [RTC、SD カード、マイク cookbook](/ja/reterminal_e10xx_with_esphome_rtc_sd_microphone) を参照してください。
:::

:::tip ブラウザで ESPHome YAML を生成したりデモを書き込んだりする
すべてのピンを手作業で組み立てずに、すぐに使える ESPHome 設定が欲しいですか？**[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)** を開き、**ESPHome** カードを選択し、デバイス（E1001 / E1002 / E1003 / E1004）を選んでから、必要なオンボード機能 — ディスプレイ、ボタン、バッテリー、センサー、RTC、SD カード、マイク、タッチ、ディープスリープなど — にチェックを入れます。Hub は、ESPHome ダッシュボードにコピーまたはダウンロードできる対応する ESPHome YAML を生成します。

同じ Hub から、ブラウザ（デスクトップ版 Chrome または Edge）経由でデモファームウェアを書き込むこともできます。共通の ESPHome ワークフローについては **[Work with ESPHome](/ja/epaper_work_with_esphome)** を参照してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Hub 🖱️</font></span></strong>
    </a>
</div><br />
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/reterminal_e10xx_with_esphome" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

## [Home Assistant](https://www.home-assistant.io/) の概要

Home Assistant は、スマートホームデバイスを 1 つの統合インターフェースから制御・監視できる強力なオープンソースのホームオートメーションプラットフォームです。スマートホームの中枢ハブとして機能し、ルーチンの自動化、センサーの監視、よりインテリジェントな生活空間の構築を可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:700, height:'auto'}}/></div>

### なぜ Home Assistant なのか？

- **ローカル制御**: 多くのクラウドベースのソリューションとは異なり、Home Assistant はネットワーク上でローカルに動作するため、データはプライベートに保たれ、インターネット接続がなくても自動化が機能します。

- **幅広いデバイス対応**: Home Assistant は何千もの異なるスマートホームデバイスやサービスと連携できるため、非常に汎用性が高く、将来性があります。

- **強力な自動化機能**: 時刻、デバイスの状態、センサー値など、さまざまなトリガーに応じて動作する高度な自動化ルールを作成できます。

- **カスタマイズ可能なダッシュボード**: 自分にとって重要な情報を表示するユーザーインターフェースを自由に設計できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 詳しく見る 🖱️</font></span></strong></a>
</div>

### なぜ Home Assistant と reTerminal E シリーズ ePaper ディスプレイなのか？

reTerminal E シリーズ ePaper ディスプレイは、次のような理由から Home Assistant の優れたパートナーです。

1. **省エネルギー**: ePaper ディスプレイはコンテンツを更新するときだけ電力を消費するため、天気予報、カレンダーイベント、システムステータスなどの常時表示したい情報に最適です。

2. **高い視認性**: LCD 画面とは異なり、ePaper ディスプレイは直射日光下を含むあらゆる照明条件で読みやすく、壁掛けのホームコントロールパネルに理想的です。

3. **長いバッテリー寿命**: ディープスリープモードと組み合わせることで、ひとつのバッテリー充電で数か月間動作しつつ、一目で分かる有用な情報を提供できます。

4. **柔軟な統合**: ESPHome を介してディスプレイは Home Assistant とシームレスに統合され、スマートホームシステムのあらゆるデータを、エレガントで常時表示の形式で表示できます。

これらの利点により、reTerminal E シリーズ ePaper ディスプレイは、Home Assistant 環境向けの省エネルギーで常時オンの情報ディスプレイを構築するための理想的な選択肢となります。

### ESPHome との連携

ESPHome は、ESP8266/ESP32 デバイス向けに特化したオープンソースのファームウェア作成ツールです。シンプルな YAML 設定ファイルを使ってカスタムファームウェアを作成し、それをデバイスに書き込むことができます。reTerminal E シリーズにおいて ESPHome は、デバイスと Home Assistant 間の通信を可能にする重要なミドルウェアとして機能します。

このシステムは、YAML 設定を ESP デバイス上で動作するフル機能のファームウェアに変換することで動作します。このファームウェアが、ネットワークへの接続、Home Assistant との通信、ePaper ディスプレイの制御といった複雑な処理をすべて担当します。Home Assistant と組み合わせることで、ESPHome は高度なホームオートメーション用ディスプレイやコントローラを構築するための堅牢なプラットフォームを提供します。

それでは、セットアップ方法と、この多用途なディスプレイを最大限に活用する方法を見ていきましょう。

## はじめに

この記事のチュートリアル内容に入る前に、以下のハードウェアを用意しておく必要があります。

### 必要なもの

:::tip 対応モデル
この cookbook は **reTerminal E1001、E1002、E1003、E1004** を対象としています。各サンプルでは、お使いのデバイスに対応するタブを選択してください。E1003 と E1004 には **ESPHome 2026.7.0 以降** が必要です。
:::

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green は、最も簡単かつプライバシー重視のホームオートメーションの方法です。セットアップは簡単で、すべてのスマートデバイスを 1 つのシステムで制御でき、データはデフォルトでローカルに保存されます。このボードは活発な Home Assistant エコシステムの恩恵を受けており、オープンソースによって毎月改善されていきます。

このチュートリアルでは、Home Assistant ホストとして Home Assistant Green を使用することを推奨しますが、Supervisor を備えた任意の Home Assistant ホストを使用することもできます。

### 最初の ESPHome YAML を生成する（推奨）

以下の cookbook のスニペットをコピーする前に、1 か所でデバイスに合った完全な設定を構築できます。

**ステップ 1.** デスクトップ版 Chrome または Edge で **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)** を開きます。

**ステップ 2.** **ESPHome** プラットフォームカードを選択し、使用している reTerminal モデル（E1001 / E1002 / E1003 / E1004）を選びます。

**ステップ 3.** セットアップ手順で、お使いのデバイスで利用可能な機能を確認します。たとえば、ディスプレイ、ボタン、ブザー、LED、バッテリー、SHT4x、RTC、microSD、マイク、タッチ（E1003）、またはディープスリープなどです。

**ステップ 4.** YAML を生成し、**Copy to clipboard** または **Download file** を使用して ESPHome ダッシュボードにインポートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/257.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Open Firmware Hub 🖱️</font></span></strong>
    </a>
</div><br />

:::tip
Firmware Hub は、ボード、バス、および周辺ピンを自動で設定してくれます。各ドローイングやディスプレイのサンプルをステップバイステップで学びたいとき、または生成された YAML をカスタマイズしたいときに、この cookbook を使用してください。共有ワークフロー全体は **[ESPHome を使う](/ja/epaper_work_with_esphome)** に記載されています。
:::

:::tip install Home Assistant
Seeed Studio 製品の一部については、Home Assistant のインストール方法も記載していますので、そちらも参照してください。

- **[ODYSSEY-X86 での Home Assistant 入門](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)**
- **[reTerminal での Home Assistant 入門](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/)**
- **[LinkStar H68K/reRouter CM4 での Home Assistant 入門](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)**

Seeed Studio 製品を使用していない場合でも、公式の Home Assistant ウェブサイトで他の製品向けの Home Assistant のインストール方法を確認して学ぶことができます。

- **[Home Assistant インストール](https://www.home-assistant.io/installation/)**
:::

### ステップ 1. ESPHome をインストールする

:::note
すでに ESPHome をインストールしている場合は、このステップをスキップできます。
:::

**Settings** -> **Add-ons** -> **ADD-ON STORE** に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

検索語として **ESPHome** を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

**INSTALL** と **START** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
アドオンストアで ESPHome が見つからない場合は、アドオンをサポートする Home Assistant インストール（Home Assistant OS や supervised インストールなど）を使用していることを確認してください。Home Assistant Container などの他のインストールタイプでは、ESPHome Device Builder を Docker を使って独立して実行する必要がある場合があります。詳細は [公式 ESPHome ドキュメント](https://esphome.io/guides/getting_started_hassio) を参照してください。
:::

### ステップ 2. 新しいデバイスを追加する

ESPHome を開き、**NEW DEVICE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

デバイスに好きな名前を付け、チップタイプとして **ESP32-S3** を選択し、**SKIP** をクリックします。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/32.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

新しいデバイスを作成したら、**EDIT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/35.png" style={{width:1000, height:'auto'}}/></div>

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->

### ステップ 3. ファームウェアをインストールする

これはとても基本的なサンプルで、ディスプレイに "Hello World!" を表示します。

**主な目的は、デバイスにファームウェアをインストールするさまざまな方法を紹介することです。**

このサンプルを使用するには、以下のコードをコピーして、Yaml ファイル内の `captive_portal` コード行の後に貼り付けてください。

<Tabs>
<TabItem value="For E1001" label="E1001 向け" default>

```yaml
# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>
<TabItem value="For E1002" label="E1002 向け">

```yaml

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      it.print(0, 0, id(myFont), BLACK, "Hello World!");
```

</TabItem>

<TabItem value="For E1003" label="E1003 向け">

:::tip
`it8951` ディスプレイプラットフォームを使用するには、ESPHome のバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# OPI PSRAM is required for the E1003 framebuffer
psram:
  mode: octal

# define SPI interface
spi:
  id: epaper_spi_bus
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

display:
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.print(0, 0, id(myFont), Color::BLACK, "Hello World!");
```

</TabItem>


<TabItem value="For E1004" label="E1004 向け">

:::tip
`seeed-reterminal-e1004` モデルを使用するには、ESPHome のバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# OPI PSRAM is required for the E1004 framebuffer
psram:
  mode: octal

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: seeed-reterminal-e1004
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      it.print(0, 0, id(myFont), BLACK, "Hello World!");
```

</TabItem>

</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/36.png" style={{width:1000, height:'auto'}}/></div>

**INSTALL** をクリックしてコードをデバイスにインストールすると、次の画像のように表示されます。

<Tabs>
<TabItem value='Install through browser'>

:::tip
Home Assistant ホスト（Raspberry PI/Green/Yellow など）が手元から離れた場所にある場合は、この方法を推奨します。手元のコンピュータを使ってインストールできます。
:::

まず、**Manual download** をクリックして、コンパイル済みファームウェアをダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

このウェブサイトを開き、ここから ePaper パネルにファームウェアを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

ESPHome に戻り、ファームウェアをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Factory format を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

USB ケーブルを使用して **ePaper パネルをコンピュータに接続し**、**CONNECT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

usbmodemxxx（Windows では COMxxx）を選択して connect をクリックします。[問題が発生しましたか？ここをクリックしてください。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

**INSTALL** をクリックし、先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

しばらく待つと、ディスプレイに「Hello world!」と表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Home Assistant ホスト（Raspberry PI/Green/Yellow など）が近くにある場合は、より簡単なのでこの方法を推奨します。
:::

コードをデバイスにインストールする前に、USB ケーブルを使用して **このデバイスを Home Assistant を実行している Raspberry Pi や HA Green（Yellow）などに接続する** 必要があります。

画像に従ってオプションをクリックし、コードをデバイスにインストールします。 [デバイスがディープスリープモードのときにポートが見つからない場合はこちら](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

しばらく待つと、次の画像のようなフィードバックが表示されます。これはコードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
これは最も簡単な方法ですが、最初にプログラムをインストールするときは、左側の方法を使用して最初にプログラムをePaperパネルにアップロードする必要があります。その後は、Wi-Fi経由でアップロードできます。また、この方法を機能させるには、YAML設定に有効な暗号化キーを含む、適切に設定された `ota` と `api` セクションが含まれていることを確認してください。
:::

この方法では、ePaperパネルを何かに接続する必要はなく、オンラインであることだけを確認してください。

オプションをクリックすると、ファームウェアが自動的にePaperパネルにインストールされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

しばらく待つと、次の画像のようなフィードバックが表示されます。失敗した場合は、電波が弱い可能性があります。デバイスをルーターの近くに移動してください。 [問題が発生しましたか？こちらをクリック。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## ESPHomeで描画するための基本

### シンプルなグラフィックの描画

このサンプルYAMLコードは、ESPHomeプロジェクト用にSPIインターフェースとreTerminal E シリーズ ePaperディスプレイを設定します。`lambda` セクションには、画面上にシンプルな図形を描画するコマンドが含まれています：

- 2つの長方形（位置 (10, 10)、サイズ 100x50 と、位置 (150, 10)、サイズ 50x50）
- 半径25の円（位置 (250, 35)）
- 2つの塗りつぶし長方形（(10, 80) と (150, 80)）
- 半径25の塗りつぶし円（位置 (250, 105)）

このサンプルは、以下のコードをコピーして、Yamlファイル内の `captive_portal` コード行の後に貼り付けることで使用できます。

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

次の画像のようなフィードバックが表示されたら、コードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/38.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="For E1002" label="For E1002">

```yaml

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto GREEN   = Color(0,   255, 0,   0);
      const auto BLUE    = Color(0,   0,   255, 0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50, BLACK);
      it.rectangle(150, 10, 50, 50, RED);
      it.circle(250, 35, 25, GREEN);
      it.filled_rectangle(10, 80, 100, 50, BLUE);
      it.filled_rectangle(150, 80, 50, 50, YELLOW);
      it.filled_circle(250, 105, 25, WHITE);
```

次の画像のようなフィードバックが表示されたら、コードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/144.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value="For E1003" label="For E1003">

:::tip
ESPHomeのバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

psram:
  mode: octal

spi:
  id: epaper_spi_bus
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

display:
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.rectangle(10, 10, 100, 50, Color::BLACK);
      it.rectangle(150, 10, 50, 50, Color::BLACK);
      it.circle(250, 35, 25, Color::BLACK);
      it.filled_rectangle(10, 80, 100, 50, Color::BLACK);
      it.filled_rectangle(150, 80, 50, 50, Color::BLACK);
      it.filled_circle(250, 105, 25, Color::BLACK);
```

</TabItem>


<TabItem value="For E1004" label="For E1004">

:::tip
ESPHomeのバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

psram:
  mode: octal

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: seeed-reterminal-e1004
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto GREEN   = Color(0,   255, 0,   0);
      const auto BLUE    = Color(0,   0,   255, 0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50, BLACK);
      it.rectangle(150, 10, 50, 50, RED);
      it.circle(250, 35, 25, GREEN);
      it.filled_rectangle(10, 80, 100, 50, BLUE);
      it.filled_rectangle(150, 80, 50, 50, YELLOW);
      it.filled_circle(250, 105, 25, WHITE);
```

</TabItem>

</Tabs>

紙面の都合上、他のパターンの描画方法や原理については詳しく説明しません。必要に応じて、読者には [ESPHome のこの部分の詳細なサンプル](https://esphome.io/components/display/) を読むことをお勧めします。

### Home Assistant から値を取得して表示する

reTerminal E シリーズ ePaperディスプレイデバイスに天気データを表示するには、Home Assistant から気温、天気状況、風速データにアクセスする必要があります。Open-Meteo インテグレーションは、Developer Tools を通じてアクセスできる信頼性の高い天気データを提供します。

#### Open-Meteo インテグレーションのインストール

ステップ1. Home Assistant のダッシュボードを開き、**Settings** → **Devices & Services** に移動します。

ステップ2. 右下の **Add Integration** ボタンをクリックします。

ステップ3. 「Open-Meteo」を検索し、リストから選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_weather.png" style={{width:800, height:'auto'}}/></div>

ステップ4. 設定ウィザードに従って、場所と希望する単位を設定します。

ステップ5. インストールが完了すると、Open-Meteo インテグレーションは Home Assistant インスタンス内に複数の天気関連エンティティを作成します。

#### Developer Tools で天気データにアクセスする

Open-Meteo インテグレーションをインストールした後、Developer Tools を通じて天気データにアクセスできます：

ステップ1. Home Assistant のダッシュボードで、**Developer Tools** → **States** に移動します。

ステップ2. フィルタボックスに `weather` と入力して、メインの天気エンティティを探します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/39.png" style={{width:1000, height:'auto'}}/></div>

ステップ3. エンティティをクリックして、利用可能なすべての属性を表示します。主な天気属性には次のものがあります：

- `temperature`: 現在の気温（設定した単位）
- `wind_bearing`: 風向
- `wind_speed`: 風速

#### ESPHome で天気データを使用する

この天気データを reTerminal E シリーズ用の ESPHome 設定で使用するには、ESPHome の YAML 設定で Home Assistant API 接続を設定する必要があります：

```yaml
# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true
```

この設定により、ESPHome デバイス内にセンサーエンティティが作成され、Home Assistant の天気インテグレーションからデータを取得します。その後、これらのセンサーを使用して、reTerminal E シリーズ ePaperディスプレイに現在の天気情報を表示できます。

:::tip
予報データについては、将来の日付の予測値を含む `weather.open_meteo_forecast` エンティティを使用する必要があります。
:::

最後に、上記の値を使用するためにディスプレイセクションのコードを追加します。完全なコードは次のとおりです：

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

```yaml
# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true

font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      //print info in log
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myWindBearing).state);
      //display info in epaper screen
      it.printf(100, 100, id(myFont), "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), "%.1f", id(myWindBearing).state);
```

</TabItem>
<TabItem value="For E1002" label="E1002 向け">

```yaml

# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true

font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      // const auto RED     = Color(255, 0,   0,   0);
      // const auto GREEN   = Color(0,   255, 0,   0);
      // const auto BLUE    = Color(0,   0,   255, 0);
      // const auto YELLOW  = Color(255, 255, 0,   0);

      //print info in log
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myWindBearing).state);
      //display info in epaper screen
      it.printf(100, 100, id(myFont), BLACK, "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), BLACK, "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), BLACK, "%.1f", id(myWindBearing).state);
```

</TabItem>

<TabItem value="For E1003" label="E1003 向け">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true

font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

psram:
  mode: octal

spi:
  id: epaper_spi_bus
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

display:
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myWindBearing).state);
      it.printf(100, 100, id(myFont), Color::BLACK, "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), Color::BLACK, "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), Color::BLACK, "%.1f", id(myWindBearing).state);
```

</TabItem>


<TabItem value="For E1004" label="E1004 向け">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true

font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

psram:
  mode: octal

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: seeed-reterminal-e1004
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);

      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myWindBearing).state);
      it.printf(100, 100, id(myFont), BLACK, "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), BLACK, "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), BLACK, "%.1f", id(myWindBearing).state);
```

</TabItem>

</Tabs>

上記のコードをコンパイルしてデバイスに書き込むと、最初は画面に **NaN** が表示される場合がありますが、心配はいりません。これは正常な動作です。これは、デバイスがまだ Home Assistant 環境に追加されておらず、reTerminal が Home Assistant のデータを取得できていないためです。以下の手順に従ってデバイスを追加するだけで問題ありません。

#### reTerminal E シリーズ ePaper Display を Home Assistant に追加する

Step 1. デバイスへの書き込みが完了したら、Home Assistant に戻り、**Settings → Devices & Services** に移動します。

Step 3. Home Assistant は mDNS を介して reTerminal E シリーズ ePaper Display デバイスを自動的に検出するはずです。検出されたデバイスのセクションに表示されたら、Configure をクリックして追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

Step 4. デバイスが自動的に検出されない場合は、Add Integration をクリックし、「ESPHome」を検索します。

Step 5. reTerminal E シリーズ ePaper Display デバイスの IP アドレスと、設定している場合は API 暗号化キーを入力します。

Step 6. 接続が完了すると、reTerminal E シリーズ ePaper Display は Home Assistant 上のデバイスとして表示され、すべてのセンサーとコンポーネントが利用可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/40.jpg" style={{width:600, height:'auto'}}/></div>

:::note
書き込み完了から最終的な表示が行われるまで、プログラムの実行には 2〜3 分かかる場合があります。
:::

以下は、フォーマット、画像配置、および説明を改善した拡張版 Demo 3 の内容です。

### TrueType フォントの描画

このサンプルでは、TrueType フォントを使用して reTerminal E シリーズ ePaper Display にカスタムアイコンを表示する方法を示します。Material Design Icons は、電子ペーパーディスプレイに最適な、拡大縮小可能な豊富なシンボルを提供します。

#### 必要なツールのインストール

Step 1. まず、ファイルを管理するために Studio Code Server アドオンをインストールする必要があります。Home Assistant の Add-ons ストアに移動し、**Studio Code Server** を検索してクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:1000, height:'auto'}}/></div>

Step 2. **INSTALL** をクリックしてインストールが完了するまで待ちます。インストールが完了したら、**START** をクリックしてエディタを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### アイコンフォントの設定

Step 3. ESPHome の設定ディレクトリ内に **fonts** という新しいフォルダを作成します。このフォルダには、アイコン表示に必要な TrueType フォントファイルを保存します。

Step 4. 下のボタンをクリックして Material Design Icons のフォントファイルをダウンロードし、内容を展開します。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Material Design Icons フォントをダウンロード</button></p>
</a>
</div>

Step 5. ダウンロードしたフォントファイル（`materialdesignicons-webfont.ttf`）を、先ほど作成した fonts フォルダにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### アイコン用に ESPHome を設定する

Step 6. `captive_portal` セクションの後に、次のコードを ESPHome の設定ファイルに追加します。このコードでは、アイコン用の 2 つのフォントサイズを定義し、ディスプレイに天気アイコンを表示するように設定します。

<Tabs>
<TabItem value="For E1001" label="E1001 向け" default>

```yaml
# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>
<TabItem value="For E1002" label="E1002 向け">

```yaml

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto GREEN   = Color(0,   255, 0,   0);
      const auto BLUE    = Color(0,   0,   255, 0);
      const auto YELLOW  = Color(255, 255, 0,   0);

      it.printf(100, 200, id(font_mdi_medium), RED, TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), GREEN, TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="For E1003" label="E1003 向け">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

psram:
  mode: octal

spi:
  id: epaper_spi_bus
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

display:
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), Color::BLACK, TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), Color::BLACK, TextAlign::CENTER, "\U000F0592");
```

</TabItem>


<TabItem value="For E1004" label="E1004 向け">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

psram:
  mode: octal

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: seeed-reterminal-e1004
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto GREEN   = Color(0,   255, 0,   0);
      const auto BLUE    = Color(0,   0,   255, 0);
      const auto YELLOW  = Color(255, 255, 0,   0);

      it.printf(100, 200, id(font_mdi_medium), RED, TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), GREEN, TextAlign::CENTER, "\U000F0592");
```

</TabItem>

</Tabs>

:::note

1. `glyphs` セクションでは、フォントファイルから読み込むアイコンを定義します。必要なアイコンだけを読み込むことで、デバイスのメモリを節約できます。

2. 書き込みが完了してから最終的な表示が出るまで、プログラムには 2〜3 分かかる場合があります。

:::

ステップ 7. 設定を保存し、reTerminal E シリーズにアップロードします。次の画像のようなフィードバックが表示されれば、コードが正常に動作していることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/42.jpg" style={{width:600, height:'auto'}}/></div>

#### 別のアイコンでカスタマイズする

Material Design Icons ライブラリには、プロジェクトで使用できる何千ものアイコンが含まれています。ここでは、別のアイコンを探して使用する方法を説明します。

ステップ 1. 下のボタンをクリックして、Material Design Icons の Web サイトにアクセスします。

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Material Design Icons を閲覧</button></p>
</a>
</div>

ステップ 2. プロジェクトで使用したいアイコンを検索します。カテゴリ別に閲覧するか、検索機能を使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

ステップ 3. 気に入ったアイコンを見つけたら、それをクリックして詳細を表示します。`F0595` のような形式の Unicode 値を探します。

ステップ 4. 次のようにして、Unicode 値を ESPHome の設定に追加します。

- フォント設定の `glyphs` リストに追加する
- 新しいアイコンを使用するようにディスプレイコードを更新する

例えば、Unicode `F0123` の新しいアイコンを使用するには：

```yaml
glyphs:
  - "\U000F0595" # weather-cloudy icon
  - "\U000F0592" # weather-hail icon
  - "\U000F0123" # your new icon
```

そして、ディスプレイの lambda 内では次のようにします。

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

ステップ 5. 更新した設定を保存し、デバイスにアップロードして新しいアイコンを確認します。

:::tip
天気ダッシュボードには、`F0590`（晴れ）、`F0591`（晴れ時々曇り）、`F0593`（雨）、`F059E`（風）などのアイコンを使用することを検討してください。
:::

ここまでに設定した Home Assistant からの天気データとこれらのアイコンを組み合わせることで、現在の状況に応じた適切なアイコンを表示する、動的な天気表示を作成できます。

### カスタム画像の表示

この例では、reTerminal E シリーズ ePaper Display 電子ペーパーディスプレイにカスタム画像を表示する方法を説明します。この機能を使用して、ロゴやアイコン、ダッシュボード体験を向上させる任意のグラフィックを表示できます。

#### 準備

ステップ 1. Home Assistant に **Studio Code Server** アドオンがインストールされていることを確認します。まだインストールしていない場合は、前の例の手順に従ってください。

ステップ 2. ESPHome の設定ディレクトリ内に **image** という新しいフォルダを作成します。このフォルダに、表示したい画像ファイルを保存します。

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### 画像の追加

ステップ 3. 機能をテストするためにサンプル画像をダウンロードします。以下で提供している WiFi アイコンを使用するか、自分の画像を使用してもかまいません。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>WiFi サンプル画像をダウンロード</button></p>
</a>
</div>

ステップ 4. ダウンロードした画像を、先ほど作成した **image** フォルダに Studio Code Server のファイルマネージャーを使ってアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
複雑で美しい風景画像などを表示したい場合は、事前に [当社の Web サイト](https://sensecraft.seeed.cc/hmi/tools/dither) でディザ処理を行うと、より良い表示効果が得られます。JPG と PNG の両形式に対応しています。
:::

#### 画像表示用に ESPHome を設定する

ステップ 5. 次のコードを、ESPHome の設定ファイル内の `captive_portal` セクションの後に追加します。このコードは画像リソースを定義し、ディスプレイにそれを表示するように設定します。

<Tabs>
<TabItem value="For E1001" label="E1001 向け" default>

```yaml
image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary works for monochrome, RGB565 works for colorful eink
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors is needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>
<TabItem value="For E1002" label="E1002 向け">

:::tip
ESPHome のバージョンを **2025.11.1** 以上に更新してください。
:::

```yaml


image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: RGB565                            #  Binary works for monochrome, RGB565 works for colorful eink
    resize: 800x480                         # Resize to match display resolution

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="For E1003" label="E1003 向け">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。E1003 は 16 階調グレースケールパネルを使用しているため、必要に応じて `GRAYSCALE` 画像タイプと、1872×1404 パネルに合わせた大きめのリサイズを優先的に使用してください。
:::

```yaml
image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: GRAYSCALE                         # Grayscale for the E1003 16-level panel
    resize: 800x480                         # Start with a smaller size for a quick test

psram:
  mode: octal

spi:
  id: epaper_spi_bus
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

display:
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>


<TabItem value="For E1004" label="E1004 向け">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: RGB565                            # RGB565 works for colorful e-ink
    resize: 800x480                         # Start with a smaller size for a quick test

psram:
  mode: octal

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: seeed-reterminal-e1004
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

</Tabs>

ステップ 6. 設定を保存し、reTerminal E シリーズにアップロードします。アップデートが完了すると、電子ペーパーディスプレイに画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/43.jpg" style={{width:600, height:'auto'}}/></div>

#### 高度な画像テクニック

次の追加テクニックを使って、画像表示を強化できます：

**画像の位置指定**

画面上の特定の座標に画像を配置するには：

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**画像とテキストの組み合わせ**

同じ画面に画像とテキストの両方を表示できます：

```yaml
lambda: |-
  // Display image
  it.image(0, 0, id(myImage));

  // Add text below or beside the image
  it.printf(400, 400, id(myFont), TextAlign::CENTER, "WiFi Connected");
```

**複数画像の使用**

同じ画面に複数の画像を表示するには、設定内で各画像を定義します：

```yaml
image:
  - file: /config/esphome/image/wifi.jpg
    id: wifiImage
    type: BINARY
    resize: 200x200

  - file: /config/esphome/image/temperature.png
    id: tempImage
    type: BINARY
    resize: 200x200

# In the display lambda:
lambda: |-
  it.image(50, 50, id(wifiImage));
  it.image(300, 50, id(tempImage));
```

:::caution
電子ペーパーディスプレイにはリフレッシュレートに制限があることを忘れないでください。`update_interval: 300s` の設定は、ディスプレイが 5 分ごとにしかリフレッシュされないことを意味します。必要に応じてこの値を調整できますが、頻繁なリフレッシュは電子ペーパーディスプレイの寿命を縮める可能性があることに注意してください。
:::

画像とテキスト、そして前の例で扱ったその他の表示要素を組み合わせることで、reTerminal E シリーズ上にリッチで情報量の多いダッシュボードを作成できます。

## 続きを読む

この記事では、ディスプレイの接続と ePaper 画面へのコンテンツ描画に焦点を当てました。オンボードハードウェアの残りを使いたい場合は、次の ESPHome cookbooks を続けてお読みください：

- **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)** - デバイスを選択してオンボード機能にチェックを入れることで完全な ESPHome YAML を生成したり、ブラウザからデモファームウェアを書き込んだりできます。
- **[ESPHome Cookbook：ボタン、ブザー、LED、バッテリー、タッチ & 低消費電力](/ja/reterminal_e10xx_with_esphome_advanced)** - ユーザーボタン、ブザーのフィードバック、オンボード LED、バッテリー監視、SHT4x センサー、静電容量式タッチ（E1003）、ディープスリープ、およびマルチページダッシュボード。
- **[ESPHome Cookbook：RTC、SD カード & マイク](/ja/reterminal_e10xx_with_esphome_rtc_sd_microphone)** - PCF8563 RTC の時刻同期、microSD カードの電源/検出ピン、およびオンボード PDM マイクの初期化。

## FAQ

### Q1: データが表示されないのはなぜですか？

この場合、Settings -> Devices & Services -> Integrations に移動してデバイスを **RECONGFIGURE** する必要があります。reTerminal が見つからない場合は、Home Assistant を再起動してみてください。

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### Q2: なぜ Home Assistant でこれらのデータを取得できないのですか？ {#port}

この場合、Settings -> Devices & Services -> Integrations に移動して、デバイスを HA に **ADD** する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

### Q3: reTerminal E Series ePaper Display がコンピュータに接続できませんか？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

何度か抜き差ししてみるか、表示される指示に従ってドライバーをインストールしてみてください。

### Q4: なぜ USB 経由でシリアルログが出力されないのですか？

reTerminal E シリーズは、UART0 上で CH340K USB-UART ブリッジを使用しています。YAML には次の logger 設定を保持してください：

```yaml
logger:
  hardware_uart: UART0
```

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
