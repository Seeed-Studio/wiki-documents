---
description: この記事では、reTerminal E シリーズ ePaper ディスプレイを Home Assistant と ESPHome で動作させる方法について説明します。
title: reTerminal E シリーズ ePaper ディスプレイを Home Assistant 用 ESPHome で動作させる
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /ja/reterminal_e10xx_with_esphome
sidebar_position: 2
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E シリーズ ePaper ディスプレイを Home Assistant 用 ESPHome で動作させる

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/reterminal_e10xx_with_esphome" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## [Home Assistant](https://www.home-assistant.io/) の紹介

Home Assistant は、スマートホームデバイスを単一の統合インターフェースから制御・監視できる強力なオープンソースホームオートメーションプラットフォームです。スマートホームの中央ハブとして機能し、ルーチンの自動化、センサーの監視、より知的な生活空間の構築を可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:700, height:'auto'}}/></div>

### なぜ Home Assistant なのか？

- **ローカル制御**: 多くのクラウドベースソリューションとは異なり、Home Assistant はネットワーク上でローカルに動作するため、データのプライバシーが保たれ、インターネット接続がなくても自動化が機能します。

- **幅広いデバイスサポート**: Home Assistant は数千種類のスマートホームデバイスやサービスと統合でき、高い汎用性と将来性を提供します。

- **強力な自動化**: 時間、デバイス状態、センサー読み取り値など、さまざまなトリガーに応答する高度な自動化ルールを作成できます。

- **カスタマイズ可能なダッシュボード**: 最も重要な情報を表示する独自のユーザーインターフェースを設計できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 詳細を見る 🖱️</font></span></strong></a>
</div>

### なぜ reTerminal E シリーズ ePaper ディスプレイと Home Assistant なのか？

reTerminal E シリーズ ePaper ディスプレイは、いくつかの理由で Home Assistant の優れたコンパニオンです：

1. **エネルギー効率**: e-paper ディスプレイはコンテンツを更新する時のみ電力を消費するため、天気予報、カレンダーイベント、システムステータスなどの持続的な情報表示に最適です。

2. **明瞭な視認性**: LCD スクリーンとは異なり、e-paper ディスプレイは直射日光を含むあらゆる照明条件で読みやすく、壁掛けホームコントロールパネルに理想的です。

3. **長いバッテリー寿命**: ディープスリープモードと組み合わせることで、一目で価値ある情報を提供しながら、単一のバッテリー充電で数ヶ月間動作できます。

4. **柔軟な統合**: ESPHome を通じて、ディスプレイは Home Assistant とシームレスに統合され、スマートホームシステムからのあらゆるデータをエレガントで常時表示可能な形式で表示できます。

これらの利点により、reTerminal E シリーズ ePaper ディスプレイは、Home Assistant セットアップ用のエネルギー効率的で常時オンの情報ディスプレイを作成するのに理想的な選択肢となります。

### ESPHome 統合

ESPHome は、ESP8266/ESP32 デバイス専用に設計されたオープンソースファームウェア作成ツールです。シンプルな YAML 設定ファイルを使用してカスタムファームウェアを作成し、デバイスにフラッシュできます。reTerminal E シリーズにとって、ESPHome はデバイスと Home Assistant 間の通信を可能にする重要なミドルウェアとして機能します。

このシステムは、YAML 設定を ESP デバイス上で動作する完全機能のファームウェアに変換することで動作します。このファームウェアは、ネットワークへの接続、Home Assistant との通信、ePaper ディスプレイの制御といった複雑なタスクをすべて処理します。Home Assistant と組み合わせることで、ESPHome は高度なホームオートメーションディスプレイとコントロールを作成するための堅牢なプラットフォームを提供します。

セットアップ方法とこの多用途ディスプレイを最大限に活用する方法を探ってみましょう。

## 始めに

この記事のチュートリアル内容を始める前に、以下のハードウェアを準備する必要があります。

### 必要な材料

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green は、ホームオートメーションを実現する最も簡単でプライバシーに配慮した方法です。簡単なセットアップを提供し、すべてのスマートデバイスを単一のシステムで制御でき、すべてのデータはデフォルトでローカルに保存されます。このボードは活発な Home Assistant エコシステムの恩恵を受け、オープンソースにより毎月改善されます。

このチュートリアルでは Home Assistant Green を Home Assistant ホストとして使用することをお勧めしますが、Supervisor を持つ任意の Home Assistant ホストを使用することもできます。

:::tip Home Assistant のインストール
Seeed Studio 製品の一部について Home Assistant のインストール方法も書いていますので、参考にしてください。

- **[ODYSSEY-X86 で Home Assistant を始める](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)**
- **[reTerminal で Home Assistant を始める](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/)**
- **[LinkStar H68K/reRouter CM4 で Home Assistant を始める](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)**

Seeed Studio 製品を使用していない場合は、Home Assistant 公式ウェブサイトで他の製品への Home Assistant インストール方法を確認・学習することもできます。

- **[Home Assistant インストール](https://www.home-assistant.io/installation/)**
:::

### ステップ 1. ESPHome をインストール

:::note
すでに ESPHome をインストールしている場合は、このステップをスキップできます。
:::

**Settings** -> **Add-ons** -> **ADD-ON STORE** に移動します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

検索語 **ESPHome** を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

**INSTALL** と **START** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
アドオンストアで ESPHome が見つからない場合は、アドオンをサポートする Home Assistant インストール（Home Assistant OS や supervised インストールなど）を使用していることを確認してください。他のインストールタイプ（Home Assistant Container など）の場合は、Docker を使用して ESPHome Device Builder を独立して実行する必要があります。詳細については、[公式 ESPHome ドキュメント](https://esphome.io/guides/getting_started_hassio)を参照してください。
:::

### ステップ 2. 新しいデバイスを追加

ESPHome に移動し、**NEW DEVICE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

デバイスに好きな名前を付け、チップタイプに **ESP32-S3** を選択し、**SKIP** をクリックします。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/32.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

新しいデバイスを作成した後、**EDIT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/35.png" style={{width:1000, height:'auto'}}/></div>

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->

### ステップ 3. ファームウェアをインストール

これは非常に基本的な例で、ディスプレイに「Hello World!」を表示します。

**主な目的は、デバイスにファームウェアをインストールするさまざまな方法を示すことです。**

以下のコードをコピーして、Yaml ファイルの `captive_portal` コード行の後に貼り付けることで、この例を使用できます。

<Tabs>
<TabItem value="For E1001" label="E1001 用" default>

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
    model: 7.50inv2
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
    id: epaper_display
    model: 7.3in-spectra-e6
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

**INSTALL** をクリックしてコードをデバイスにインストールすると、以下の画像が表示されます。

<Tabs>
<TabItem value='Install through browser'>

:::tip
Home Assistant ホスト（Raspberry PI/Green/Yellow など）が遠くにある場合は、この方法をお勧めします。手元にあるコンピューターでインストールできます。
:::

まず、**Manual download** をクリックしてコンパイル済みファームウェアをダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

ファームウェアを ePaper パネルにアップロードするこのウェブサイトを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

ESPHome に戻ってファームウェアをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Factory format を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

USB ケーブルを使用して **ePaper パネルをコンピューターに接続** し、**CONNECT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

usbmodemxxx（Windows では COMxxx）を選択し、connect をクリックします。[問題が発生しましたか？こちらをクリック。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

**INSTALL** をクリックし、先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

しばらく待つと、ディスプレイに「Hello world!」が表示されます～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Home Assistant ホスト（Raspberry PI/Green/Yellow など）が近くにある場合は、より簡単なこの方法をお勧めします。
:::

デバイスにコードをインストールする前に、USB ケーブルを使用して **このデバイスを Home Assistant を実行している Raspberry Pi または HA Green（Yellow）などに接続** する必要があります。

画像に従ってオプションをクリックし、デバイスにコードをインストールします。[デバイスがディープスリープモードの時にポートが見つからない？](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

しばらく待つと、以下の画像のようなフィードバックが表示されます。これはコードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
これは最も簡単な方法ですが、初回プログラムインストール時には、まず左側の方法を使用して ePaper パネルにプログラムをアップロードする必要があります。その後、Wi-Fi 経由でアップロードできます。また、この方法が機能するには、YAML 設定に適切に設定された `ota` および `api` セクションと有効な暗号化キーが含まれていることを確認してください。
:::

この方法では、ePaper パネルを何にも接続する必要がなく、オンラインであることを確認するだけです。

オプションをクリックすると、ファームウェアが自動的に ePaper パネルにインストールされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

しばらく待つと、以下の画像のようなフィードバックが表示されます。失敗した場合は、信号が弱いことが原因の可能性があります。デバイスをルーターに近づけてください。[問題が発生しましたか？こちらをクリック。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## ESPHome での描画の基本

### 簡単なグラフィックの描画

この YAML コード例は、ESPHome プロジェクト用の SPI インターフェースと reTerminal E シリーズ ePaper ディスプレイを設定します。`lambda` セクションには、画面に簡単な図形をレンダリングする描画コマンドが含まれています：

- 2つの長方形（1つは位置 (10, 10) でサイズ 100x50、もう1つは (150, 10) でサイズ 50x50）
- 1つの円（位置 (250, 35)、半径 25）
- 2つの塗りつぶし長方形（位置 (10, 80) と (150, 80)）
- 1つの塗りつぶし円（位置 (250, 105)、半径 25）

以下のコードをコピーして、Yaml ファイルの `captive_portal` コード行の後に貼り付けることで、この例を使用できます。

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
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

以下の画像のようなフィードバックが表示されると、コードが正常に実行されていることを意味します。

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
    id: epaper_display
    model: 7.3in-spectra-e6
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

以下の画像のようなフィードバックが表示されると、コードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/144.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

スペースの制約により、他のパターンの描画方法と原理については詳しく説明しませんが、必要に応じて、読者は [ESPHome のこの部分の詳細な例](https://esphome.io/components/display/) を読むことをお勧めします。

### 表示用の Home Assistant からの値の取得

reTerminal E シリーズ ePaper ディスプレイデバイスに天気データを表示するには、Home Assistant から温度、天気状況、風速データにアクセスする必要があります。Open-Meteo 統合は、Developer Tools を通じてアクセスできる信頼性の高い天気データを提供します。

#### Open-Meteo 統合のインストール

ステップ 1. Home Assistant ダッシュボードを開き、**Settings** → **Devices & Services** に移動します。

ステップ 2. 右下角の **Add Integration** ボタンをクリックします。

ステップ 3. "Open-Meteo" を検索し、リストから選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_weather.png" style={{width:800, height:'auto'}}/></div>

ステップ 4. 設定ウィザードに従って、場所と希望する単位を設定します。

ステップ 5. インストールが完了すると、Open-Meteo 統合は Home Assistant インスタンスにいくつかの天気関連エンティティを作成します。

#### Developer Tools での天気データへのアクセス

Open-Meteo 統合をインストールした後、Developer Tools を通じて天気データにアクセスできます：

ステップ 1. Home Assistant ダッシュボードで、**Developer Tools** → **States** に移動します。

ステップ 2. フィルターボックスに `weather` と入力して、メインの天気エンティティを見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/39.png" style={{width:1000, height:'auto'}}/></div>

ステップ 3. エンティティをクリックして、利用可能なすべての属性を表示します。主要な天気属性には以下が含まれます：

- `temperature`: 現在の気温（設定された単位）
- `wind_bearing`: 風向
- `wind_speed`: 風速

#### ESPHome での天気データの使用

reTerminal E シリーズでこの天気データを ESPHome 設定で使用するには、ESPHome YAML 設定で Home Assistant API 接続を設定する必要があります：

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

この設定により、Home Assistant の天気統合からデータを取得する ESPHome デバイス内にセンサーエンティティが作成されます。これらのセンサーを使用して、reTerminal E シリーズ ePaper ディスプレイを現在の天気情報で更新できます。

:::tip
予報データについては、将来の日の予測値を含む `weather.open_meteo_forecast` エンティティを使用する必要があります。
:::

最後に、上記の値を使用するディスプレイセクションのコードを追加します。完全なコードは以下の通りです：

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
    model: 7.50inv2
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
<TabItem value="For E1002" label="For E1002">

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
    id: epaper_display
    model: 7.3in-spectra-e6
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

上記のコードをコンパイルしてデバイスにアップロードした後、最初に画面に **NaN** が表示される場合がありますが、心配する必要はありません。これは正常な動作です。これは、デバイスがまだ Home Assistant 環境に追加されていないため、reTerminal がまだ Home Assistant データを取得できていないためです。以下の手順に従ってデバイスを追加するだけです。

#### reTerminal E シリーズ ePaper ディスプレイを Home Assistant に追加する

ステップ 1. デバイスをフラッシュした後、Home Assistant に戻り、**Settings → Devices & Services** に移動します。

ステップ 3. Home Assistant は mDNS を介して reTerminal E シリーズ ePaper ディスプレイデバイスを自動的に検出するはずです。検出されたデバイスセクションに表示される場合は、Configure をクリックして追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

ステップ 4. デバイスが自動的に検出されない場合は、Add Integration をクリックして "ESPHome" を検索します。

ステップ 5. reTerminal E シリーズ ePaper ディスプレイデバイスの IP アドレスと、設定した場合は API 暗号化キーを入力します。

ステップ 6. 接続されると、reTerminal E シリーズ ePaper ディスプレイが Home Assistant にデバイスとして表示され、すべてのセンサーとコンポーネントが利用可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/40.jpg" style={{width:600, height:'auto'}}/></div>

:::note
プログラムは書き込み完了から最終表示まで 2〜3 分かかる場合があります。
:::

以下は、フォーマットの改善、画像配置、および追加説明を含む強化されたデモ 3 の内容です：

### TrueType フォントの描画

この例では、TrueType フォントを使用して reTerminal E シリーズ ePaper ディスプレイにカスタムアイコンを表示する方法を示します。Material Design Icons は、e-paper ディスプレイに最適なスケーラブルなシンボルの幅広い範囲を提供します。

#### 必要なツールのインストール

ステップ 1. まず、ファイルを管理するために Studio Code Server アドオンをインストールする必要があります。Home Assistant アドオンストアに移動し、**Studio Code Server** を検索してクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:1000, height:'auto'}}/></div>

ステップ 2. **INSTALL** をクリックし、インストールが完了するまで待ちます。インストールが完了したら、**START** をクリックしてエディターを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### アイコンフォントの設定

ステップ 3. ESPHome 設定ディレクトリに **fonts** という新しいフォルダを作成します。このフォルダには、アイコンを表示するために必要な TrueType フォントファイルが保存されます。

ステップ 4. 下のボタンをクリックして Material Design Icons フォントファイルをダウンロードし、内容を展開します。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Material Design Icons フォントをダウンロード</button></p>
</a>
</div>

ステップ 5. ダウンロードしたフォントファイル（`materialdesignicons-webfont.ttf`）を、先ほど作成した fonts フォルダにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### アイコン用の ESPHome 設定

ステップ 6. `captive_portal` セクションの後に、以下のコードを ESPHome 設定ファイルに追加します。このコードは、アイコン用の 2 つのフォントサイズを定義し、天気アイコンを表示するようにディスプレイを設定します。

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

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
    model: 7.50inv2
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
<TabItem value="For E1002" label="For E1002">

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
    id: epaper_display
    model: 7.3in-spectra-e6
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

1. `glyphs` セクションは、フォントファイルから読み込むアイコンを定義します。必要なアイコンのみを読み込むことで、デバイスのメモリを節約できます。

2. プログラムは書き込み完了から最終表示まで2〜3分かかる場合があります。

:::

ステップ7. 設定を保存してreTerminal Eシリーズにアップロードします。以下の画像のようなフィードバックが表示されれば、コードが正常に動作していることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/42.jpg" style={{width:600, height:'auto'}}/></div>

#### 異なるアイコンでのカスタマイズ

Material Design Iconsライブラリには、プロジェクトで使用できる数千のアイコンが含まれています。異なるアイコンを見つけて使用する方法は以下の通りです：

ステップ1. 下のボタンをクリックしてMaterial Design Iconsウェブサイトにアクセスします。

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Material Design Iconsを閲覧</button></p>
</a>
</div>

ステップ2. プロジェクトで使用したいアイコンを検索します。カテゴリ別に閲覧するか、検索機能を使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

ステップ3. 気に入ったアイコンが見つかったら、それをクリックして詳細を表示します。`F0595`の形式のUnicode値を探します。

ステップ4. 以下の方法でESPHome設定にUnicode値を追加します：

- フォント設定の`glyphs`リストに追加する
- 新しいアイコンを使用するように表示コードを更新する

例えば、Unicode `F0123`の新しいアイコンを使用する場合：

```yaml
glyphs:
  - "\U000F0595" # weather-cloudy icon
  - "\U000F0592" # weather-hail icon
  - "\U000F0123" # your new icon
```

そして表示ラムダで：

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

ステップ5. 更新した設定を保存してデバイスにアップロードし、新しいアイコンを確認します。

:::tip
天気ダッシュボードには、`F0590`（晴れ）、`F0591`（部分的に曇り）、`F0593`（雨）、`F059E`（風）などのアイコンの使用を検討してください。
:::

これらのアイコンを先ほど設定したHome Assistantからの天気データと組み合わせることで、適切なアイコンを使用して現在の状況を表示する動的な天気表示を作成できます。

### カスタム画像の表示

この例では、reTerminal Eシリーズ ePaper Displayの電子ペーパーディスプレイにカスタム画像を表示する方法を説明します。この機能を使用して、ダッシュボード体験を向上させるロゴ、アイコン、またはグラフィックを表示できます。

#### 準備

ステップ1. Home Assistantに**Studio Code Server**アドオンがインストールされていることを確認します。まだインストールしていない場合は、前の例の手順に従ってください。

ステップ2. ESPHome設定ディレクトリに**image**という新しいフォルダを作成します。このフォルダには、表示したい画像ファイルを保存します。

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### 画像の追加

ステップ3. 機能をテストするためのサンプル画像をダウンロードします。下記のWiFiアイコンを使用するか、独自の画像を使用できます。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>サンプルWiFi画像をダウンロード</button></p>
</a>
</div>

ステップ4. Studio Code Serverファイルマネージャーを使用して、ダウンロードした画像を先ほど作成した**image**フォルダにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
電子ペーパーディスプレイで最良の結果を得るには、明確な黒と白の領域を持つ高コントラストの画像を使用してください。JPGとPNG形式の両方がサポートされています。
:::

#### 画像表示のためのESPHome設定

ステップ5. `captive_portal`セクションの後にESPHome設定ファイルに以下のコードを追加します。このコードは画像リソースを定義し、それを表示するようにディスプレイを設定します。

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

```yaml
image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
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
<TabItem value="For E1002" label="For E1002">

```yaml


image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: epaper_display
    model: 7.3in-spectra-e6
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
</Tabs>

ステップ6. 設定を保存してreTerminal Eシリーズにアップロードします。更新が完了すると、電子ペーパーディスプレイに画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/43.jpg" style={{width:600, height:'auto'}}/></div>

#### 高度な画像技術

以下の追加技術で画像表示を向上させることができます：

**画像の配置**

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

同じ画面に複数の画像を表示するには、設定で各画像を定義します：

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
電子ペーパーディスプレイのリフレッシュレートは制限されていることを覚えておいてください。`update_interval: 300s`設定は、ディスプレイが5分ごとにのみリフレッシュされることを意味します。必要に応じてこの値を調整してください。ただし、頻繁なリフレッシュは電子ペーパーディスプレイの寿命を短縮する可能性があることに注意してください。
:::

画像を前の例で説明したテキストやその他の表示要素と組み合わせることで、reTerminal Eシリーズで豊富で情報量の多いダッシュボードを作成できます。

## 続きを読む

スペースの制約により、この記事ではデバイスの基本的な使用例と描画例のみを扱っています。reTerminalのハードウェアをESPHomeで使用することについては、[reTerminal Eシリーズ ePaper DisplayのHome AssistantでのESPHome高度な使用法](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome_advanced)のWikiでより詳しく説明しており、続けて読むことができます。

## FAQ

### Q1: データが表示されないのはなぜですか？

この場合、Settings -> Devices & Services -> Integrationsに移動してデバイスを**再設定**する必要があります。reTerminalが見つからない場合は、Home Assistantを再起動してみてください。

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### Q2: Home Assistantでそれらのデータを取得できないのはなぜですか？ {#port}

この場合、Settings -> Devices & Services -> Integrationsに移動してデバイスをHAに**追加**する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

### Q3: reTerminal Eシリーズ ePaper Displayがコンピューターに接続できませんか？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

数回抜き差しを試すか、プロンプトに従ってドライバーをインストールしてください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

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
