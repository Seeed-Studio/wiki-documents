---
description: この記事では、ESPHome上でreTerminal E SeriesのePaperディスプレイのハードウェア機能を活用する方法について説明します。
title: Home AssistantでのEE04 ePaperディスプレイのESPHome使用法
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /ja/EE04_with_esphome_advanced
sidebar_position: 2
last_update:
  date: 10/07/2025
  author: Jason
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# EE04 ePaperディスプレイとESPHomeでHome Assistantと連携

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/reterminal_e10xx_with_esphome" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## [Home Assistant](https://www.home-assistant.io/)の紹介

Home Assistantは、スマートホームデバイスを単一の統合インターフェースから制御・監視できる強力なオープンソースホームオートメーションプラットフォームです。スマートホームの中央ハブとして機能し、ルーチンの自動化、センサーの監視、より知的な生活空間の構築を可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:700, height:'auto'}}/></div>

### なぜHome Assistantなのか？

- **ローカル制御**: 多くのクラウドベースソリューションとは異なり、Home Assistantはネットワーク上でローカルに動作し、データのプライバシーを確保し、インターネット接続がなくても自動化が機能します。

- **幅広いデバイスサポート**: Home Assistantは数千の異なるスマートホームデバイスやサービスと統合でき、高い汎用性と将来性を提供します。

- **強力な自動化**: 時間、デバイス状態、センサー読み取り値など、さまざまなトリガーに応答する高度な自動化ルールを作成できます。

- **カスタマイズ可能なダッシュボード**: 最も重要な情報を表示する独自のユーザーインターフェースを設計できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 詳細を見る 🖱️</font></span></strong></a>
</div>

### なぜEE04シリーズePaperディスプレイとHome Assistantなのか？

EE04 ePaperディスプレイは、いくつかの理由でHome Assistantの優れたパートナーです：

1. **エネルギー効率**: e-paperディスプレイはコンテンツを更新する時のみ電力を消費するため、天気予報、カレンダーイベント、システムステータスなどの持続的な情報表示に最適です。

2. **明瞭な視認性**: LCDスクリーンとは異なり、e-paperディスプレイは直射日光を含むあらゆる照明条件で読みやすく、壁掛けホームコントロールパネルに理想的です。

3. **長いバッテリー寿命**: ディープスリープモードと組み合わせることで、一目で価値ある情報を提供しながら、単一のバッテリー充電で数ヶ月間動作できます。

4. **柔軟な統合**: ESPHomeを通じて、ディスプレイはHome Assistantとシームレスに統合され、スマートホームシステムからのあらゆるデータをエレガントで常時表示可能な形式で表示できます。

これらの利点により、EE04 ePaperディスプレイは、Home Assistantセットアップ用のエネルギー効率的で常時オンの情報ディスプレイを作成するのに理想的な選択肢となります。

### ESPHome統合

ESPHomeは、ESP8266/ESP32デバイス専用に設計されたオープンソースファームウェア作成ツールです。シンプルなYAML設定ファイルを使用してカスタムファームウェアを作成し、デバイスにフラッシュできます。EE04シリーズでは、ESPHomeがデバイスとHome Assistant間の通信を可能にする重要なミドルウェアとして機能します。

このシステムは、YAML設定をESPデバイス上で動作する完全機能のファームウェアに変換することで動作します。このファームウェアは、ネットワークへの接続、Home Assistantとの通信、ePaperディスプレイの制御といった複雑なタスクをすべて処理します。Home Assistantと組み合わせることで、ESPHomeは高度なホームオートメーションディスプレイとコントロールを作成するための堅牢なプラットフォームを提供します。

セットアップ方法とこの多用途ディスプレイを最大限に活用する方法を探ってみましょう。

## 入門

この記事のチュートリアル内容を始める前に、以下のハードウェアを準備する必要があります。

### 必要な材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ePaper Display Board EE04</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:320, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
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

Home Assistant Greenは、ホームオートメーションを実現する最も簡単でプライバシーに配慮した方法です。簡単なセットアップを提供し、すべてのスマートデバイスを単一のシステムで制御でき、すべてのデータはデフォルトでローカルに保存されます。このボードは活発なHome Assistantエコシステムの恩恵を受け、オープンソースにより毎月改善されます。

このチュートリアルでは、Home Assistant GreenをHome Assistantホストとして使用することをお勧めしますが、Supervisorを備えた任意のHome Assistantホストを使用することもできます。

:::tip Home Assistantのインストール
Seeed Studio製品の一部にHome Assistantをインストールする方法も書いていますので、参考にしてください。

- **[ODYSSEY-X86でHome Assistantを始める](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)**
- **[LinkStar H68K/reRouter CM4でHome Assistantを始める](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)**

Seeed Studio製品を使用していない場合は、Home Assistant公式ウェブサイトで他の製品にHome Assistantをインストールする方法を確認して学習することもできます。

- **[Home Assistantインストール](https://www.home-assistant.io/installation/)**
:::

### ステップ1. ESPHomeのインストール

:::note
すでにESPHomeをインストールしている場合は、このステップをスキップできます。

以下の例では、7.5インチスクリーンを使用したプロセスを示しています。異なるスクリーンサイズを使用する場合は、コード内のスクリーンサイズ設定を適宜変更してください。
:::

**Settings** -> **Add-ons** -> **ADD-ON STORE**に移動します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

検索語として**ESPHome**を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

**INSTALL**と**START**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
アドオンストアでESPHomeが見つからない場合は、アドオンをサポートするHome Assistantインストール（Home Assistant OSまたは監視付きインストールなど）を使用していることを確認してください。他のインストールタイプ（Home Assistant Containerなど）では、DockerでESPHome Device Builderを独立して実行する必要がある場合があります。詳細については、[公式ESPHomeドキュメント](https://esphome.io/guides/getting_started_hassio)を参照してください。
:::

### ステップ2. 新しいデバイスの追加

ESPHomeに移動し、**NEW DEVICE**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

デバイスに好きな名前を付け、チップタイプに**ESP32-S3**を選択し、**SKIP**をクリックします。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome8.png" style={{width:400, height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

新しいデバイスを作成した後、**EDIT**をクリックします。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome6.png" style={{width:900, height:'auto'}}/></div><br />

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->

### ステップ3. ファームウェアのインストール

これは非常に基本的な例で、ディスプレイに「Hello World!」を表示します。

**主な目的は、デバイスにファームウェアをインストールするさまざまな方法を示すことです。**

以下のコードをコピーして、YamlファイルのYamlファイルの`captive_portal`コード行の後に貼り付けることで、この例を使用できます。

:::tip
- 4.26インチ 白黒
- 2.13インチ 122*250 白黒/黄/赤
- 2.9インチ 128*296 白黒/黄/赤

これらのタイプのe-inkディスプレイはまだサポートされていません。将来のリリースでWikiに関連情報を更新する予定です—お楽しみに。
:::
***以下は24ピンコネクタスクリーンタイプです：***

<Tabs>
<TabItem value="1.54 Inch" label="1.54 Inch" default>

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
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13 Inch">

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
    model: 2.13inv
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 Inch">

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
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2 Inch">

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
    model: 4.20in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

<TabItem value="5.83 Inch" label="5.83 Inch">

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
    model: 5.83inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```
</TabItem>

<TabItem value="7.5 Inch" label="7.5 Inch" default>

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
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

</Tabs>

<br></br>

***以下は50ピンコネクタ画面タイプです：***

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Inch" default>

:::tip
7.3インチ電子ペーパーディスプレイはESPHome v10.15以降が必要です。このディスプレイのサポートがそのリリースで追加されたためです。詳細な使用ガイドは近日中にWikiで更新される予定です。
:::

</TabItem>
</Tabs>


**INSTALL** をクリックしてデバイスにコードをインストールすると、以下の画像が表示されます。

<Tabs>
<TabItem value='Install through browser'>

:::tip
Home Assistantホスト（Raspberry PI/Green/Yellowなど）が遠くにある場合は、この方法をお勧めします。手元にあるコンピューターでインストールできます。
:::

まず、**Manual download** をクリックしてコンパイル済みファームウェアをダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

ファームウェアをePaperパネルにアップロードするこのウェブサイトを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

ESPHomeに戻ってファームウェアをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Factory formatを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

USBケーブルを使用して**ePaperパネルをコンピューターに接続**し、**CONNECT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

usbmodemxxx（WindowsはCOMxxx）を選択してconnectをクリックします。[問題が発生しましたか？こちらをクリック。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

**INSTALL** をクリックして、先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:800, height:'auto'}}/></div>

しばらく待つと、ディスプレイに「Hello world!」が表示されます～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Home Assistantホスト（Raspberry PI/Green/Yellowなど）が近くにある場合は、より簡単なこの方法をお勧めします。
:::

デバイスにコードをインストールする前に、USBケーブルを使用して**このデバイスをHome Assistantを実行しているRaspberry PiまたはHA Green（Yellow）などに接続**する必要があります。

画像に従ってオプションをクリックし、デバイスにコードをインストールします。[デバイスがディープスリープモードの時にポートが見つからない？](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

しばらく待つと、以下の画像のようなフィードバックが表示されます。これはコードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
これは最も簡単な方法ですが、初回プログラムインストール時には、まず左側の方法を使用してePaperパネルにプログラムをアップロードする必要があります。その後、wifiでアップロードできます。また、この方法が機能するためには、YAMLの設定に適切に設定された `ota` と `api` セクションが有効な暗号化キーと共に含まれていることを確認してください。
:::

この方法では、ePaperパネルを何にも接続する必要がなく、オンラインであることを確認するだけです。

オプションをクリックすると、ファームウェアが自動的にePaperパネルにインストールされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:800, height:'auto'}}/></div>

しばらく待つと、以下の画像のようなフィードバックが表示されます。失敗した場合は、信号が弱いことが原因の可能性があります。デバイスをルーターに近づけてください。[問題が発生しましたか？こちらをクリック。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## ESPHomeでの描画の基本

### 簡単なグラフィックの描画

このYAMLコード例は、ESPHomeプロジェクト用にSPIインターフェースとreTerminal E SeriesのePaperディスプレイを設定します。`lambda` セクションには、画面に簡単な図形をレンダリングする描画コマンドが含まれています：

- 2つの長方形（1つは位置(10, 10)でサイズ100x50、もう1つは(150, 10)でサイズ50x50）
- 1つの円（位置(250, 35)で半径25）
- 2つの塗りつぶし長方形（位置(10, 80)と(150, 80)）
- 1つの塗りつぶし円（位置(250, 105)で半径25）

以下のコードをコピーして、Yamlファイルの `captive_portal` コード行の後に貼り付けることで、この例を使用できます。

<Tabs>
<TabItem value="1.54 Inch" label="1.54 Inch" default>

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13 Inch">

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 Inch">

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2 Inch">

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 4.20in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>

<TabItem value="5.83 Inch" label="5.83 Inch">

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 5.83inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```
</TabItem>

<TabItem value="7.5 Inch-24Pin" label="7.5 Inch" default>

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Inch" default>

:::tip
7.3インチの電子ペーパーディスプレイには ESPHome v10.15 以降が必要です。このディスプレイのサポートはそのリリースで追加されたためです。詳細な使用ガイドは近日中に Wiki で更新される予定です。
:::

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome9.jpg" style={{width:500, height:'auto'}}/></div><br />

以下の画像のようなフィードバックが表示されたら、コードが正常に実行されていることを意味します。


スペースの制約により、他のパターンの描画方法と原理については詳しく説明しませんが、必要に応じて読者は [ESPHome のこの部分の詳細な例](https://esphome.io/components/display/) を読むことをお勧めします。

### Home Assistant から表示用の値を取得する

EE04 ePaper Display デバイスに天気データを表示するには、Home Assistant から温度、天気状況、風速データにアクセスする必要があります。Open-Meteo 統合は、Developer Tools を通じてアクセスできる信頼性の高い天気データを提供します。

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

ステップ 2. フィルターボックスで `weather` と入力して、メインの天気エンティティを見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/39.png" style={{width:1000, height:'auto'}}/></div>

ステップ 3. エンティティをクリックして、利用可能なすべての属性を表示します。主要な天気属性には以下が含まれます：

- `temperature`: 現在の温度（設定した単位）
- `wind_bearing`: 風向
- `wind_speed`: 風速

#### ESPHome での天気データの使用

EE04 ePaper Display の ESPHome 設定でこの天気データを使用するには、ESPHome YAML 設定で Home Assistant API 接続を設定する必要があります：

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

この設定により、Home Assistant の天気統合からデータを取得する ESPHome デバイス内にセンサーエンティティが作成されます。その後、これらのセンサーを使用して reTerminal E シリーズ ePaper Display ディスプレイを現在の天気情報で更新できます。

:::tip
予報データについては、将来の日の予測値を含む `weather.open_meteo_forecast` エンティティを使用する必要があります。
:::

最後に、上記の値を使用するディスプレイセクションのコードを追加します。完全なコードは以下の通りです：

<Tabs>
<TabItem value="1.54 Inch" label="1.54 Inch" default>

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
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
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

<TabItem value="2.13 Inch" label="2.13 Inch">

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
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
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

<TabItem value="2.9 Inch" label="2.9 Inch">

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
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
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

<TabItem value="4.2 Inch" label="4.2 Inch">

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
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
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

<TabItem value="5.83 Inch" label="5.83 Inch">

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
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
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

<TabItem value="7.5 Inch" label="7.5 Inch" default>

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
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
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
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Inch" default>

:::tip
7.3インチの電子ペーパーディスプレイには ESPHome v10.15 以降が必要です。このディスプレイのサポートはそのリリースで追加されたためです。詳細な使用ガイドは近日中に Wiki で更新される予定です。
:::

</TabItem>
</Tabs>

上記のコードをコンパイルしてデバイスにアップロードした後、最初に画面に **NaN** が表示される場合がありますが、ご心配なく、これは正常です。これは、デバイスがまだ Home Assistant 環境に追加されていないため、reTerminal がまだ Home Assistant のデータを取得できていないためです。以下の手順に従ってデバイスを追加するだけです。

#### EE04 ePaper Display を Home Assistant に追加する

ステップ 1. デバイスをフラッシュした後、Home Assistant に戻り、**Settings → Devices & Services** に移動します。

ステップ 3. Home Assistant は mDNS 経由で EE04 ePaper Display デバイスを自動的に検出するはずです。検出されたデバイスセクションに表示された場合は、Configure をクリックして追加します。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome7.png" style={{width:900, height:'auto'}}/></div><br />

ステップ 4. デバイスが自動的に検出されない場合は、Add Integration をクリックして "ESPHome" を検索します。

ステップ 5. EE04 ePaper Display デバイスの IP アドレスと、設定した場合は API 暗号化キーを入力します。

ステップ 6. 接続されると、EE04 ePaper Display が Home Assistant にデバイスとして表示され、すべてのセンサーとコンポーネントが利用可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome1.jpg" style={{width:500, height:'auto'}}/></div><br />

:::note
プログラムは書き込み完了から最終表示まで 2〜3 分かかる場合があります。

:::

以下は、フォーマットの改善、画像配置、および追加説明を含む強化されたデモ 3 の内容です：

### TrueType フォントの描画

この例では、TrueType フォントを使用して EE04 ePaper Display にカスタムアイコンを表示する方法を示します。Material Design Icons は、電子ペーパーディスプレイに最適なスケーラブルなシンボルの幅広い範囲を提供します。

#### 必要なツールのインストール

ステップ 1. まず、ファイルを管理するために Studio Code Server アドオンをインストールする必要があります。Home Assistant のアドオンストアに移動し、**Studio Code Server** を検索してクリックします。

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
<TabItem value="1.54 Inch" label="1.54 Inch" default>

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
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13 Inch">

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
    model: 2.13inv
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 Inch">

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
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2 Inch">

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
    model: 4.20in
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="5.83 Inch" label="5.83 Inch">

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
    model: 5.83inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```
</TabItem>

<TabItem value="24 Pin" label="7.5 Inch" default>

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
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Inch" default>

:::tip
7.3インチの電子ペーパーディスプレイには ESPHome v10.15 以降が必要です。このディスプレイのサポートはそのリリースで追加されたためです。詳細な使用ガイドは近日中に Wiki で更新される予定です。
:::

</TabItem>
</Tabs>

:::note

1. `glyphs` セクションは、フォントファイルから読み込むアイコンを定義します。必要なアイコンのみを読み込むことで、デバイスのメモリを節約できます。

2. プログラムは書き込み完了から最終表示まで2〜3分かかる場合があります。

:::

ステップ 7. 設定を保存し、EE04 ePaper Display にアップロードします。以下の画像のようなフィードバックが表示されれば、コードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome4.png" style={{width:500, height:'auto'}}/></div><br />

#### 異なるアイコンでのカスタマイズ

Material Design Icons ライブラリには、プロジェクトで使用できる数千のアイコンが含まれています。異なるアイコンを見つけて使用する方法は以下の通りです：

ステップ 1. 下のボタンをクリックして Material Design Icons のウェブサイトにアクセスします。

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Material Design Icons を閲覧</button></p>
</a>
</div>

ステップ 2. プロジェクトで使用したいアイコンを検索します。カテゴリ別に閲覧するか、検索機能を使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

ステップ 3. 気に入ったアイコンが見つかったら、それをクリックして詳細を表示します。`F0595` の形式の Unicode 値を探します。

ステップ 4. 以下の方法で Unicode 値を ESPHome 設定に追加します：

- フォント設定の `glyphs` リストに追加する
- 新しいアイコンを使用するようにディスプレイコードを更新する

例えば、Unicode `F0123` の新しいアイコンを使用する場合：

```yaml
glyphs:
  - "\U000F0595" # weather-cloudy icon
  - "\U000F0592" # weather-hail icon
  - "\U000F0123" # your new icon
```

そして、ディスプレイのラムダ内で：

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

ステップ 5. 更新した設定を保存し、デバイスにアップロードして新しいアイコンを確認します。

:::tip
天気ダッシュボードには、`F0590`（晴れ）、`F0591`（部分的に曇り）、`F0593`（雨）、`F059E`（風）などのアイコンの使用を検討してください。
:::

これらのアイコンを、先ほど設定した Home Assistant からの天気データと組み合わせることで、適切なアイコンを使用して現在の状況を表示する動的な天気ディスプレイを作成できます。

### カスタム画像の表示

この例では、EE04 ePaper Display 電子ペーパーディスプレイにカスタム画像を表示する方法を説明します。この機能を使用して、ダッシュボード体験を向上させるロゴ、アイコン、またはグラフィックを表示できます。

#### 準備

ステップ 1. Home Assistant に **Studio Code Server** アドオンがインストールされていることを確認します。まだインストールしていない場合は、前の例の手順に従ってください。

ステップ 2. ESPHome 設定ディレクトリに **image** という新しいフォルダを作成します。このフォルダには、表示したい画像ファイルを保存します。

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### 画像の追加

ステップ 3. 機能をテストするためのサンプル画像をダウンロードします。下記の WiFi アイコンを使用するか、独自の画像を使用できます。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>サンプル WiFi 画像をダウンロード</button></p>
</a>
</div>

ステップ 4. Studio Code Server のファイルマネージャーを使用して、ダウンロードした画像を先ほど作成した **image** フォルダにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
電子ペーパーディスプレイで最良の結果を得るには、明確な黒と白の領域を持つ高コントラストの画像を使用してください。JPG と PNG の両方の形式がサポートされています。
:::

#### 画像表示のための ESPHome 設定

ステップ 5. `captive_portal` セクションの後に、以下のコードを ESPHome 設定ファイルに追加します。このコードは画像リソースを定義し、それを表示するようにディスプレイを設定します。

<Tabs>
<TabItem value="1.54 Inch" label="1.54 Inch" default>

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
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13 Inch">

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
    model: 2.13inv
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 Inch">

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
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2 Inch">

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
    model: 4.20in
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="5.83 Inch" label="5.83 Inch">

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
    model: 5.83inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```
</TabItem>

<TabItem value="7.5 Inch" label="7.5 Inch" default>

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
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Inch" default>

:::tip
7.3インチの電子ペーパーディスプレイには ESPHome v10.15 以降が必要です。このディスプレイのサポートはそのリリースで追加されたためです。詳細な使用ガイドは近日中にWikiで更新される予定です。
:::

</TabItem>
</Tabs>

ステップ 6. 設定を保存し、EE04 ePaper Display にアップロードします。更新が完了すると、電子ペーパーディスプレイに画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome2.jpg" style={{width:500, height:'auto'}}/></div><br />


#### 高度な画像技術

以下の追加技術で画像表示を向上させることができます：

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
電子ペーパーディスプレイのリフレッシュレートは制限されていることを覚えておいてください。`update_interval: 300s` 設定は、ディスプレイが5分ごとにのみリフレッシュされることを意味します。必要に応じてこの値を調整してください。ただし、頻繁なリフレッシュは電子ペーパーディスプレイの寿命を短くする可能性があることに注意してください。
:::

画像を前の例で説明したテキストやその他の表示要素と組み合わせることで、EE04 上に豊富で情報量の多いダッシュボードを作成できます

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

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
