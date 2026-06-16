---
description: reTerminal E1001 / E1002 / E1003 / E1004 向け ESPHome ディスプレイ・クックブック - Home Assistant 連携、最初のダッシュボード、Wi-Fi 設定、プリビルド済みファームウェア ZIP、ePaper 描画サンプル。
title: ESPHome クックブック - ディスプレイ基礎 (reTerminal E シリーズ)
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /reterminal_e10xx_with_esphome
aliases:
  - /reterminal_e10xx_esphome
sku: 100017057,100073581
sidebar_position: 3
sidebar_label: ESPHome - ディスプレイ
last_update:
  date: 04/28/2026
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESPHome クックブック - ディスプレイ基礎: reTerminal E シリーズ

:::tip まずメインの ESPHome ガイドを読んでください
このページは **reTerminal E シリーズ専用の ESPHome ディスプレイ・クックブック**です。共通のボイラープレート — 書き込み方法の選択、汎用 YAML スケルトン、Home Assistant への接続 — は **[Work with ESPHome](/ja/epaper_work_with_esphome)** にまとまっています。Seeed の ePaper で ESPHome を使うのが初めての場合は、まずそちらに目を通してください。ボタン、ブザー、LED、バッテリー、SHT4x、ディープスリープについては [I/O、バッテリー、低消費電力クックブック](/ja/reterminal_e10xx_with_esphome_advanced) を、RTC、microSD カード検出、マイク設定については [RTC、SD カード、マイククックブック](/ja/reterminal_e10xx_with_esphome_rtc_sd_microphone) を参照してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/reterminal_e10xx_with_esphome" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

## [Home Assistant](https://www.home-assistant.io/) の概要

Home Assistant は、スマートホームデバイスを 1 つの統合インターフェースから制御・監視できる強力なオープンソースのホームオートメーションプラットフォームです。スマートホームの中枢ハブとして機能し、ルーチンの自動化、センサーの監視、よりインテリジェントな生活空間の構築を可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:700, height:'auto'}}/></div>

### なぜ Home Assistant なのか

- **ローカル制御**: 多くのクラウドベースのソリューションとは異なり、Home Assistant はネットワーク上でローカルに動作するため、データはプライベートに保たれ、インターネット接続がなくても自動化が機能します。

- **幅広いデバイス対応**: Home Assistant は何千もの異なるスマートホームデバイスやサービスと連携できるため、非常に汎用性が高く、将来性があります。

- **強力な自動化機能**: 時刻、デバイスの状態、センサー値など、さまざまなトリガーに反応する高度な自動化ルールを作成できます。

- **カスタマイズ可能なダッシュボード**: 自分にとって最も重要な情報を表示するユーザーインターフェースを自由に設計できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 詳しく見る 🖱️</font></span></strong></a>
</div>

### なぜ reTerminal E シリーズ ePaper ディスプレイと Home Assistant を組み合わせるのか

reTerminal E シリーズ ePaper ディスプレイは、次のような理由から Home Assistant の優れたパートナーです。

1. **省エネルギー**: ePaper ディスプレイはコンテンツを更新するときにのみ電力を消費するため、天気予報、カレンダーイベント、システムステータスなどの常時表示したい情報に最適です。

2. **高い視認性**: LCD 画面とは異なり、ePaper ディスプレイは直射日光下を含むあらゆる照明条件で読みやすく、壁掛けのホームコントロールパネルに理想的です。

3. **長いバッテリー寿命**: ディープスリープモードと組み合わせることで、ひとつのバッテリー充電で数か月間動作しつつ、一目で分かる有用な情報を提供できます。

4. **柔軟な統合**: ESPHome を介してディスプレイは Home Assistant とシームレスに統合され、スマートホームシステムのあらゆるデータを、エレガントで常時表示の形式で表示できます。

これらの利点により、reTerminal E シリーズ ePaper ディスプレイは、Home Assistant 環境向けに省エネルギーで常時オンの情報ディスプレイを構築するための理想的な選択肢となります。

### ESPHome との連携

ESPHome は、ESP8266/ESP32 デバイス向けに特化したオープンソースのファームウェア作成ツールです。シンプルな YAML 設定ファイルを使ってカスタムファームウェアを作成し、それをデバイスに書き込むことができます。reTerminal E シリーズにおいて ESPHome は、デバイスと Home Assistant 間の通信を可能にする重要なミドルウェアとして機能します。

このシステムは、YAML 設定を ESP デバイス上で動作するフル機能のファームウェアへと変換することで動作します。このファームウェアが、ネットワークへの接続、Home Assistant との通信、ePaper ディスプレイの制御といった複雑な処理をすべて担当します。Home Assistant と組み合わせることで、ESPHome は高度なホームオートメーション用ディスプレイやコントローラを構築するための堅牢なプラットフォームを提供します。

それでは、セットアップ方法と、この多用途なディスプレイを最大限に活用する方法を見ていきましょう。

## はじめに

本記事のチュートリアル内容に入る前に、以下のハードウェアを用意しておく必要があります。

### 必要なもの

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
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
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green は、最も簡単かつプライバシー重視で自宅を自動化できる方法です。セットアップは簡単で、すべてのスマートデバイスを 1 つのシステムから制御でき、データはデフォルトでローカルに保存されます。このボードは活発な Home Assistant エコシステムの恩恵を受けており、オープンソースによって毎月改善されていきます。

このチュートリアルでは、Home Assistant ホストとして Home Assistant Green を使用することを推奨しますが、Supervisor を備えた任意の Home Assistant ホストを使用することもできます。

:::tip Home Assistant をインストールする
Seeed Studio 製品のいくつかについては、Home Assistant のインストール方法も記載していますので、そちらも参照してください。

- **[Getting Started with Home Assistant on ODYSSEY-X86](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)**
- **[Getting Started with Home Assistant on reTerminal](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/)**
- **[Getting Started with Home Assistant on LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)**

Seeed Studio 製品を使用していない場合でも、公式の Home Assistant ウェブサイトで他の製品向けの Home Assistant のインストール方法を確認して学ぶことができます。

- **[Home Assistant Installation](https://www.home-assistant.io/installation/)**
:::

### ステップ 1. ESPHome をインストールする

:::note
すでに ESPHome をインストールしている場合は、このステップをスキップできます。
:::

**Settings** -> **Add-ons** -> **ADD-ON STORE** に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

検索欄に **ESPHome** と入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

**INSTALL** と **START** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
アドオンストアで ESPHome が見つからない場合は、アドオンをサポートする Home Assistant インストール（Home Assistant OS や supervised インストールなど）を使用していることを確認してください。Home Assistant Container など他のインストール形態では、Docker を使って ESPHome Device Builder を独立して実行する必要がある場合があります。詳しくは [公式 ESPHome ドキュメント](https://esphome.io/guides/getting_started_hassio) を参照してください。
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

これはとても基本的なサンプルで、ディスプレイに「Hello World!」を表示します。

**主な目的は、デバイスにファームウェアをインストールするさまざまな方法を紹介することです。**

このサンプルは、以下のコードをコピーして、Yaml ファイル内の `captive_portal` コード行の後に貼り付けることで使用できます。

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
      # const auto RED     = Color(255, 0,   0,   0);
      # const auto GREEN   = Color(0,   255, 0,   0);
      # const auto BLUE    = Color(0,   0,   255, 0);
      # const auto YELLOW  = Color(255, 255, 0,   0);
      it.print(0, 0, id(myFont), BLACK, "Hello World!");
```

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/36.png" style={{width:1000, height:'auto'}}/></div>

コードをデバイスにインストールするには **INSTALL** をクリックすると、次の画像のように表示されます。

<Tabs>
<TabItem value='Install through browser'>

:::tip
Home Assistant Host（Raspberry PI/Green/Yellow など）が手元から離れている場合は、この方法をおすすめします。手元にあるコンピュータを使ってインストールできます。
:::

まず、**Manual download** をクリックして、コンパイル済みファームウェアをダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

次に、この Web サイトを開き、ここから ePaper パネルにファームウェアをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

ESPHome に戻り、ファームウェアをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Factory format を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

USB ケーブルを使用して **ePaper パネルをコンピュータに接続し**、**CONNECT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

usbmodemxxx（Windows では COMxxx）を選択して connect をクリックします。[問題が発生しましたか？こちらをクリック。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

**INSTALL** をクリックし、先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

しばらく待つと、ディスプレイに「Hello world!」と表示されます～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Home Assistant Host（Raspberry PI/Green/Yellow など）が近くにある場合は、この方法の方が簡単なのでおすすめです。
:::

コードをデバイスにインストールする前に、USB ケーブルを使用して、Home Assistant を実行している Raspberry Pi や HA Green（Yellow）などの **このデバイスを接続** する必要があります。

画像に従ってオプションをクリックし、コードをデバイスにインストールします。[デバイスがディープスリープモードのときにポートが見つかりませんか？](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

しばらく待つと、次の画像のようなフィードバックが表示されます。これはコードが正常に動作していることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
これは最も簡単な方法ですが、最初にプログラムをインストールするときは、左側の方法で ePaper パネルにプログラムをアップロードしておく必要があります。その後は、wifi 経由でアップロードできます。また、この方法が機能するためには、YAML 設定に有効な暗号化キーを含む適切に設定された `ota` と `api` セクションが含まれていることを確認してください。
:::

この方法では、ePaper パネルを何かに接続する必要はなく、オンラインであることだけを確認してください。

オプションをクリックすると、ファームウェアが自動的に ePaper パネルにインストールされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

しばらく待つと、次の画像のようなフィードバックが表示されます。失敗した場合は、電波が弱い可能性があります。デバイスをルーターの近くに移動してください。[問題が発生しましたか？こちらをクリック。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## ESPHome で描画するための基本

### シンプルなグラフィックの描画

このサンプル YAML コードは、ESPHome プロジェクト用に SPI インターフェースと reTerminal E シリーズ ePaper ディスプレイを設定します。`lambda` セクションには、画面にシンプルな図形を描画するコマンドが含まれています：

- 2 つの長方形（1 つは位置 (10, 10)、サイズ 100x50、もう 1 つは位置 (150, 10)、サイズ 50x50）
- 半径 25 の円が (250, 35) に 1 つ
- 2 つの塗りつぶし長方形（(10, 80) と (150, 80)）
- 半径 25 の塗りつぶし円が (250, 105) に 1 つ

このサンプルは、以下のコードをコピーして、Yaml ファイル内の `captive_portal` コード行の後に貼り付けることで使用できます。

<Tabs>
<TabItem value="For E1001" label="E1001 向け" default>

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

次の画像のようなフィードバックが表示されたら、コードが正常に動作していることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/38.jpg" style={{width:600, height:'auto'}}/></div>

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

次の画像のようなフィードバックが表示されたら、コードが正常に動作していることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/144.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

紙面の都合上、他のパターンの描画方法や原理については詳しく説明しません。必要に応じて、読者には [ESPHome のこの部分の詳細なサンプル](https://esphome.io/components/display/) を読むことをおすすめします。

### Home Assistant から値を取得して表示する

reTerminal E シリーズ ePaper ディスプレイ デバイスに天気データを表示するには、Home Assistant から気温、天気状況、風速データにアクセスする必要があります。Open-Meteo インテグレーションは、Developer Tools を通じてアクセスできる信頼性の高い天気データを提供します。

#### Open-Meteo インテグレーションのインストール

ステップ 1. Home Assistant ダッシュボードを開き、**Settings** → **Devices & Services** に移動します。

ステップ 2. 右下隅にある **Add Integration** ボタンをクリックします。

ステップ 3. 「Open-Meteo」を検索し、リストから選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_weather.png" style={{width:800, height:'auto'}}/></div>

ステップ 4. 設定ウィザードに従って、場所と希望する単位を設定します。

ステップ 5. インストールが完了すると、Open-Meteo 連携機能は Home Assistant インスタンス内に、天気に関連する複数のエンティティを作成します。

#### 開発者ツールで天気データにアクセスする

Open-Meteo 連携機能をインストールした後、開発者ツールを通じて天気データにアクセスできます：

ステップ 1. Home Assistant ダッシュボードで、**Developer Tools** → **States** に移動します。

ステップ 2. フィルタボックスに `weather` と入力して、メインの天気エンティティを探します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/39.png" style={{width:1000, height:'auto'}}/></div>

ステップ 3. エンティティをクリックして、利用可能なすべての属性を表示します。主な天気属性には次のものが含まれます：

- `temperature`: 現在の気温（設定した単位）
- `wind_bearing`: 風向
- `wind_speed`: 風速

#### ESPHome で天気データを使用する

reTerminal E シリーズ向けの ESPHome 設定でこの天気データを使用するには、ESPHome の YAML 設定で Home Assistant API 接続を設定する必要があります：

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

この設定により、ESPHome デバイス内に Home Assistant の天気連携機能からデータを取得するセンサーエンティティが作成されます。その後、これらのセンサーを使用して、現在の天気情報で reTerminal E シリーズ ePaper Display を更新できます。

:::tip
予報データについては、将来の日付の予測値を含む `weather.open_meteo_forecast` エンティティを使用する必要があります。
:::

最後に、上記の値を使用するためのディスプレイセクションのコードを追加します。完成したコードは次のとおりです：

<Tabs>
<TabItem value="For E1001" label="E1001 向け" default>

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
</Tabs>

上記のコードをコンパイルしてデバイスに書き込んだ後、最初は画面に **NaN** が表示される場合がありますが、心配はいりません。これは正常な動作です。これは、デバイスがまだ Home Assistant 環境に追加されておらず、reTerminal が Home Assistant のデータをまだ取得できていないためです。以下の手順に従ってデバイスを追加するだけで問題ありません。

#### reTerminal E シリーズ ePaper Display を Home Assistant に追加する

ステップ 1. デバイスへの書き込みが完了したら、Home Assistant に戻り、**Settings → Devices & Services** に移動します。

ステップ 3. Home Assistant は mDNS を介して reTerminal E シリーズ ePaper Display デバイスを自動的に検出するはずです。検出されたデバイスのセクションに表示されたら、Configure をクリックして追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

ステップ 4. デバイスが自動的に検出されない場合は、Add Integration をクリックし、「ESPHome」を検索します。

ステップ 5. reTerminal E シリーズ ePaper Display デバイスの IP アドレスと、設定している場合は API 暗号化キーを入力します。

ステップ 6. 接続が完了すると、reTerminal E シリーズ ePaper Display は Home Assistant 上のデバイスとして表示され、すべてのセンサーとコンポーネントが利用可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/40.jpg" style={{width:600, height:'auto'}}/></div>

:::note
書き込み完了から最終的な表示が行われるまで、プログラムの実行には 2～3 分かかる場合があります。
:::

ここでは、フォーマット、画像配置、および追加説明を改善した拡張版 Demo 3 の内容を紹介します：

### TrueType フォントの描画

この例では、TrueType フォントを使用して reTerminal E シリーズ ePaper Display にカスタムアイコンを表示する方法を示します。Material Design Icons は、電子ペーパーディスプレイに最適な、拡大縮小可能な豊富なシンボルを提供します。

#### 必要なツールのインストール

ステップ 1. まず、ファイルを管理するために Studio Code Server アドオンをインストールする必要があります。Home Assistant の Add-ons ストアに移動し、**Studio Code Server** を検索してクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:1000, height:'auto'}}/></div>

ステップ 2. **INSTALL** をクリックしてインストールが完了するまで待ちます。インストールが完了したら、**START** をクリックしてエディタを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### アイコンフォントの設定

ステップ 3. ESPHome 設定ディレクトリ内に **fonts** という新しいフォルダを作成します。このフォルダには、アイコン表示に必要な TrueType フォントファイルを保存します。

ステップ 4. 下のボタンをクリックして Material Design Icons フォントファイルをダウンロードし、内容を展開します。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Material Design Icons フォントをダウンロード</button></p>
</a>
</div>

ステップ 5. ダウンロードしたフォントファイル（`materialdesignicons-webfont.ttf`）を、先ほど作成した fonts フォルダにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### アイコン用に ESPHome を設定する

ステップ 6. `captive_portal` セクションの後に、次のコードを ESPHome 設定ファイルに追加します。このコードはアイコン用の 2 つのフォントサイズを定義し、ディスプレイを設定して天気アイコンを表示します。

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
</Tabs>

:::note

1. `glyphs` セクションは、フォントファイルからどのアイコンを読み込むかを定義します。必要なアイコンだけを読み込むことで、デバイスのメモリを節約できます。

2. 書き込み完了から最終的に表示されるまで、プログラムには 2〜3 分かかる場合があります。

:::

ステップ 7. 設定を保存し、reTerminal E シリーズにアップロードします。次の画像のようなフィードバックが表示されたら、コードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/42.jpg" style={{width:600, height:'auto'}}/></div>

#### 別のアイコンでカスタマイズする

Material Design Icons ライブラリには、プロジェクトで使用できる何千ものアイコンが含まれています。別のアイコンを探して使用する方法は次のとおりです。

ステップ 1. 下のボタンをクリックして Material Design Icons の Web サイトにアクセスします。

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Material Design Icons を閲覧</button></p>
</a>
</div>

ステップ 2. プロジェクトで使用したいアイコンを検索します。カテゴリ別に閲覧するか、検索機能を使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

ステップ 3. 気に入ったアイコンを見つけたら、それをクリックして詳細を表示します。`F0595` のような形式の Unicode 値を探します。

ステップ 4. 次のようにして、その Unicode 値を ESPHome 設定に追加します。

- フォント設定の `glyphs` リストに追加する
- 新しいアイコンを使用するようにディスプレイコードを更新する

例えば、Unicode `F0123` の新しいアイコンを使用するには：

```yaml
glyphs:
  - "\U000F0595" # weather-cloudy icon
  - "\U000F0592" # weather-hail icon
  - "\U000F0123" # your new icon
```

そして display lambda 内では：

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

ステップ 5. 更新した設定を保存し、デバイスにアップロードして新しいアイコンを表示します。

:::tip
天気ダッシュボードの場合は、`F0590`（晴れ）、`F0591`（一部曇り）、`F0593`（雨）、`F059E`（風）などのアイコンを使用することを検討してください。
:::

先ほど設定した Home Assistant からの天気データとこれらのアイコンを組み合わせることで、現在の状況を適切なアイコンで表示する動的な天気表示を作成できます。

### カスタム画像の表示

この例では、reTerminal E シリーズ ePaper Display 電子ペーパーディスプレイにカスタム画像を表示する方法を説明します。この機能を使用して、ロゴやアイコン、ダッシュボード体験を向上させる任意のグラフィックを表示できます。

#### 準備

ステップ 1. Home Assistant に **Studio Code Server** アドオンがインストールされていることを確認します。まだインストールしていない場合は、前の例の手順に従ってください。

ステップ 2. ESPHome 設定ディレクトリに **image** という新しいフォルダを作成します。このフォルダには表示したい画像ファイルを保存します。

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### 画像の追加

ステップ 3. 機能をテストするためにサンプル画像をダウンロードします。以下で提供されている WiFi アイコンを使用するか、自分の画像を使用することもできます。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>WiFi サンプル画像をダウンロード</button></p>
</a>
</div>

ステップ 4. Studio Code Server のファイルマネージャーを使用して、ダウンロードした画像を先ほど作成した **image** フォルダにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
複雑で美しい風景画像などを表示したい場合は、事前に[当社の Web サイト](https://sensecraft.seeed.cc/hmi/tools/dither)でディザ処理を行うと、より良い効果が得られます。JPG と PNG の両方の形式がサポートされています。
:::

#### 画像表示用に ESPHome を設定する

ステップ 5. 次のコードを `captive_portal` セクションの後に ESPHome 設定ファイルへ追加します。このコードは画像リソースを定義し、それを表示するようにディスプレイを設定します。

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
</Tabs>

ステップ 6. 設定を保存し、reTerminal E シリーズにアップロードします。更新が完了すると、電子ペーパーディスプレイに画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/43.jpg" style={{width:600, height:'auto'}}/></div>

#### 高度な画像テクニック

次のような追加テクニックを使って、画像表示をさらに強化できます。

**画像の位置調整**

画面上の特定の座標に画像を配置するには：

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**画像とテキストの組み合わせ**

同じ画面に画像とテキストの両方を表示できます。

```yaml
lambda: |-
  // Display image
  it.image(0, 0, id(myImage));

  // Add text below or beside the image
  it.printf(400, 400, id(myFont), TextAlign::CENTER, "WiFi Connected");
```

**複数画像の使用**

同じ画面に複数の画像を表示するには、設定内でそれぞれの画像を定義します。

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
電子ペーパーディスプレイにはリフレッシュレートに制限があることを忘れないでください。`update_interval: 300s` の設定は、ディスプレイが 5 分ごとにしか更新されないことを意味します。この値はニーズに応じて調整できますが、更新頻度が高すぎると電子ペーパーディスプレイの寿命が短くなる可能性がある点に注意してください。
:::

ここまでの例で扱ったテキストやその他の表示要素と画像を組み合わせることで、reTerminal E シリーズ上にリッチで情報量の多いダッシュボードを作成できます。

## 続きを読む

この記事では、ディスプレイの接続と ePaper 画面への描画に焦点を当てました。オンボードハードウェアの残りを使用したい場合は、次の ESPHome クックブックを続けてお読みください。

- **[ESPHome クックブック：ボタン、ブザー、LED、バッテリー & 低消費電力](/ja/reterminal_e10xx_with_esphome_advanced)** - ユーザーボタン、ブザーによるフィードバック、オンボード LED、バッテリー監視、SHT4x センサー、ディープスリープ、マルチページダッシュボード。
- **[ESPHome クックブック：RTC、SD カード & マイク](/ja/reterminal_e10xx_with_esphome_rtc_sd_microphone)** - PCF8563 RTC の時刻同期、microSD カードの電源/検出ピン、およびオンボード PDM マイクの初期化。

## FAQ

### Q1: データが表示されないのはなぜですか？

この場合は、Settings -> Devices & Services -> Integrations に移動してデバイスを **RECONGFIGURE** する必要があります。reTerminal が見つからない場合は、Home Assistant を再起動してみてください。

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### Q2: なぜ Home Assistant でこれらのデータを取得できないのですか？ {#port}

この場合、Settings -> Devices & Services -> Integrations に移動して、デバイスを HA に **追加** する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

### Q3: reTerminal E シリーズ ePaper Display がコンピュータに接続できませんか？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

何度か抜き差ししてみるか、表示される指示に従ってドライバをインストールしてみてください。

### Q4: なぜ USB 経由でシリアルログが出力されないのですか？

reTerminal E シリーズは、UART0 上で CH340K USB-UART ブリッジを使用しています。YAML では次の logger 設定を維持してください：

```yaml
logger:
  hardware_uart: UART0
```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
