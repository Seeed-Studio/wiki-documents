---
description: この記事では、TRMNL 7.5inch(OG) DIY Kit を ESPHome と連携させる方法について説明します。
title: ESPHome との連携
keywords:
- ePaper display
- TRMNL
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/trmnl_head.webp
slug: /ja/ogdiy_kit_works_with_esphome
sku: 104991005
sidebar_position: 3
last_update:
  date: 07/24/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TRMNL 7.5inch(OG) DIY Kit と ESPHome の連携

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/byod_main.png" style={{width:900, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

## [Home Assistant](https://www.home-assistant.io/) の紹介

Home Assistant は、スマートホームデバイスを単一の統合インターフェースから制御・監視できる強力なオープンソースホームオートメーションプラットフォームです。スマートホームの中央ハブとして機能し、ルーチンの自動化、センサーの監視、より知的な生活空間の構築を可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:900, height:'auto'}}/></div>

### なぜ Home Assistant なのか？

- **ローカル制御**: 多くのクラウドベースソリューションとは異なり、Home Assistant はネットワーク上でローカルに動作するため、データのプライバシーが保たれ、インターネット接続がなくても自動化が機能します。

- **幅広いデバイスサポート**: Home Assistant は数千種類のスマートホームデバイスやサービスと統合でき、高い汎用性と将来性を提供します。

- **強力な自動化**: 時間、デバイス状態、センサー読み取り値など、さまざまなトリガーに応答する高度な自動化ルールを作成できます。

- **カスタマイズ可能なダッシュボード**: 最も重要な情報を表示する独自のユーザーインターフェースを設計できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 詳細を見る 🖱️</font></span></strong></a>
</div>

### なぜ TRMNL 7.5inch(OG) DIY Kit と Home Assistant なのか？

TRMNL 7.5inch(OG) DIY Kit は、いくつかの理由で Home Assistant の優れたコンパニオンです：

1. **省エネルギー**: e-paper ディスプレイはコンテンツを更新する時のみ電力を消費するため、天気予報、カレンダーイベント、システムステータスなどの持続的な情報表示に最適です。

2. **優れた視認性**: LCD スクリーンとは異なり、e-paper ディスプレイは直射日光を含むあらゆる照明条件で読みやすく、壁掛けホームコントロールパネルに理想的です。

3. **長いバッテリー寿命**: ディープスリープモードと組み合わせることで、一目で価値ある情報を提供しながら、単一のバッテリー充電で数ヶ月間動作できます。

4. **柔軟な統合**: ESPHome を通じて、ディスプレイは Home Assistant とシームレスに統合され、スマートホームシステムからのあらゆるデータをエレガントで常時表示可能な形式で表示できます。

これらの利点により、TRMNL 7.5inch(OG) DIY Kit は Home Assistant セットアップ用の省エネルギーで常時オンの情報ディスプレイを作成するのに理想的な選択肢となります。

### ESPHome 統合

ESPHome は ESP8266/ESP32 デバイス専用に設計されたオープンソースファームウェア作成ツールです。シンプルな YAML 設定ファイルを使用してカスタムファームウェアを作成し、デバイスにフラッシュできます。TRMNL 7.5inch(OG) DIY Kit の場合、ESPHome はデバイスと Home Assistant 間の通信を可能にする重要なミドルウェアとして機能します。

このシステムは、YAML 設定を ESP デバイス上で動作する完全機能のファームウェアに変換することで動作します。このファームウェアは、ネットワークへの接続、Home Assistant との通信、ePaper ディスプレイの制御といった複雑なタスクをすべて処理します。Home Assistant と組み合わせることで、ESPHome は高度なホームオートメーションディスプレイとコントロールを作成するための堅牢なプラットフォームを提供します。

セットアップ方法とこの多用途ディスプレイを最大限に活用する方法を探ってみましょう。

## 入門ガイド

この記事のチュートリアル内容を始める前に、以下のハードウェアを準備する必要があります。

### 必要な材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>TRMNL 7.5inch(OG) DIY Kit</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank">
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

Home Assistant Green は、ホームオートメーションを実現する最も簡単でプライバシーに配慮した方法です。簡単なセットアップを提供し、すべてのスマートデバイスを単一のシステムで制御でき、すべてのデータはデフォルトでローカルに保存されます。このボードは活発な Home Assistant エコシステムの恩恵を受け、オープンソースにより毎月改善されています。

このチュートリアルでは Home Assistant Green を Home Assistant ホストとして使用することをお勧めしますが、Supervisor を備えた任意の Home Assistant ホストを使用することもできます。

:::tip Home Assistant のインストール
Seeed Studio 製品の一部について Home Assistant のインストール方法も書いていますので、参考にしてください。

- **[ODYSSEY-X86 での Home Assistant 入門](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)**
- **[reTerminal での Home Assistant 入門](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/)**
- **[LinkStar H68K/reRouter CM4 での Home Assistant 入門](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)**

Seeed Studio 製品を使用していない場合は、Home Assistant 公式ウェブサイトで他の製品への Home Assistant インストール方法を確認・学習することもできます。

- **[Home Assistant インストール](https://www.home-assistant.io/installation/)**
:::

### 機器の設置

**ステップ 1. ディスプレイをドライバーボードに接続**  
FPC ケーブルを XIAO ePaper Display Board のコネクタに合わせ、ラッチを固定して確実な接続を確保します。  

:::tip
FPC ケーブルの金属面は上向きにする必要があります。そうでないと、コンテンツが表示されません。

以下のインストールチュートリアルに従ってください。多くの人が間違えます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 2. バッテリーの取り付け**  
バッテリーケーブルをドライバーボードの JST コネクタに接続し、正しい極性（赤線を +、黒線を - に）を確認します。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 3. エンクロージャーの組み立て（オプション）**  

:::tip
スクリーンのフレキシブルケーブルは非常に壊れやすいことに注意してください。操作時は注意してください。損傷すると、スクリーン全体が動作しなくなります。
:::
[リソース部分](#resources)からオープンソースエンクロージャー部品を印刷し、内部にコンポーネントを組み立てます。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

まず、ドライバーボードとバッテリーを組み立てます。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

TRMNL キットが正常に動作するかテストします。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

スクリーンをケースに差し込み、FPC を外に出せるようにします。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

FPC 延長ケーブルを接続し、ケース全体を組み立てます。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

L字型エンクロージャーも非常に似ています。

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
TRMNL キットがルーターから遠い場合は、アンテナをケースの外に移動できます。より良いパフォーマンスが得られます。
:::

### ステップ 1. ESPHome のインストール

すでに ESPHome をインストールしている場合は、このステップをスキップできます。

**Settings** -> **Add-ons** -> **ADD-ON STORE** に移動します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>

ESPHome を検索してクリックします。**INSTALL** と **START** をクリックします。

:::tip
アドオンストアでESPHomeが見つからない場合は、アドオンをサポートするHome Assistantインストール（Home Assistant OSまたは監視付きインストールなど）を使用していることを確認してください。他のインストールタイプ（Home Assistant Containerなど）の場合、DockerでESPHome Device Builderを独立して実行する必要がある場合があります。詳細については、[公式ESPHomeドキュメント](https://esphome.io/guides/getting_started_hassio)を参照してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

その後、ESPHome Builderがサイドバーに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

### ステップ2. 新しいデバイスを追加

ESPHomeに移動し、**NEW DEVICE**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/06.png" style={{width:800, height:'auto'}}/></div>

お好みのデバイス名を付け、チップタイプに**ESP32-S3**を選択し、**SKIP**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_s3.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

新しいデバイスを作成した後、**EDIT**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/4.png" style={{width:800, height:'auto'}}/></div>

デフォルトで生成されたコード内で、esp32のフレームワークが`esp-idf`になっている場合がありますが、これを`arduino`に変更する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div>

### ステップ3. ファームウェアのインストール

これは非常に基本的な例で、ディスプレイに「Hello World!」を表示します。

**主な目的は、デバイスにファームウェアをインストールするさまざまな方法を示すことです。**

以下のコードをコピーして、下図のように`captive_portal`の後に貼り付けることができます。

```yaml
# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 30s
    lambda: |-
      it.print(0, 0, id(font1), "Hello World!");
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/BYOD_helloworld.png" style={{width:1000, height:'auto'}}/></div>

**INSTALL**をクリックしてコードをデバイスにインストールすると、以下の画像が表示されます。

<Tabs>
<TabItem value='ブラウザ経由でインストール'>

:::tip
Home Assistantホスト（Raspberry PI/Green/Yellowなど）が遠くにある場合は、この方法をお勧めします。手元にあるコンピュータでインストールできます。
:::

まず、**Manual download**をクリックしてコンパイル済みファームウェアをダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

ファームウェアをePaperパネルにアップロードするこのウェブサイトを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

ESPHomeに戻ってファームウェアをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Factory formatを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

USBケーブルを使用して**ePaperパネルをコンピュータに接続**し、**CONNECT**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

usbmodemxxx（WindowsではCOMxxx）を選択し、connectをクリックします。[問題が発生しましたか？こちらをクリック。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

**INSTALL**をクリックし、先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

しばらく待つと、ディスプレイに「Hello world!」が表示されます～

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/71.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/33.png" style={{width:'80%', height:'auto'}}/></div>
</div>

</TabItem>

<TabItem value='ホスト経由でインストール'>

:::tip
Home Assistantホスト（Raspberry PI/Green/Yellowなど）が近くにある場合は、より簡単なのでこの方法をお勧めします。
:::

コードをデバイスにインストールする前に、USBケーブルを使用して**このデバイスをHome Assistantを実行しているRaspberry PiまたはHA Green（Yellow）などに接続**する必要があります。

画像に従ってオプションをクリックし、コードをデバイスにインストールします。[デバイスがディープスリープモードの時にポートが見つからない？](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

しばらく待つと、以下の画像のようなフィードバックが表示されます。これはコードが正常に実行されていることを意味します。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/9.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/33.png" style={{width:'80%', height:'auto'}}/></div>
</div>

</TabItem>

<TabItem value='Wi-Fi経由でインストール'>

:::tip
これは最も簡単な方法ですが、初回プログラムインストール時には、まず左側の方法を使用してePaperパネルにプログラムをアップロードする必要があります。その後、wifi経由でアップロードできます。また、この方法が機能するためには、YAMLコンフィギュレーションに有効な暗号化キーを持つ適切に設定された`ota`と`api`セクションが含まれていることを確認してください。
:::

この方法では、ePaperパネルを何にも接続する必要がなく、オンラインであることを確認するだけです。

オプションをクリックすると、ファームウェアが自動的にePaperパネルにインストールされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

しばらく待つと、以下の画像のようなフィードバックが表示されます。失敗した場合は、信号が弱いことが原因の可能性があります。デバイスをルーターに近づけてください。[問題が発生しましたか？こちらをクリック。](#Q4)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/73.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/33.png" style={{width:'80%', height:'auto'}}/></div>
</div>

</TabItem>
</Tabs>

## 基本的な使用方法

### 1. 図形の表示

この例では、ディスプレイに図形を表示します。

以下のコードをコピーして、下図のように**captive_portal**部分に貼り付けることができます。

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 5min
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);

      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

以下の画像のようなフィードバックが表示されると、コードが正常に実行されていることを意味します。

より多くの使用方法については、[こちらをクリック](https://esphome.io/components/display/)してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/37.png" style={{width:600, height:'auto'}}/></div>

### 2. HAの情報を表示

この例では、HAの情報をディスプレイに表示します。

まず最初に、このデバイスをHAに追加する必要があります。そうしないと、HAから情報を取得できません。

HAがデバイスを表示しない場合は、まず上記のデモを実行する必要があります。上記のデモを実行した後、HAでデバイスを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/11.png" style={{width:800, height:'auto'}}/></div>

その後、**SUBMIT**と**FINISH**をクリックします。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', marginLeft:'8%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/12.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/13.png" style={{width:'68%', height:'auto'}}/></div>
</div>

ESPHomeをインストールして新しいデバイスを追加した後、以下のコードをコピーして、下図のように`captive_portal`の後に貼り付けることができます。

```yaml
# Define font to show info
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: myPressure
    attribute: "pressure"
    internal: true

# Display info via SPI
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 30s
    lambda: |-
      //print info in log
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myPressure).state);
      //display info in epaper screen
      it.printf(100, 100, id(myFont), "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), "%.1f", id(myPressure).state);
```

これらのコードをデバイスにインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/15.png" style={{width:1000, height:'auto'}}/></div>

このコードの機能は、HAから**天気**、**温度**、**気圧**を取得してディスプレイに表示することです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/39.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Home Assistantに天気関連のコンポーネントがない場合は、統合機能から**Open-Meteo**という統合をダウンロードできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_weather.png" style={{width:800, height:'auto'}}/></div>
:::

以下の画像のようなフィードバックが表示されれば、コードが正常に実行されていることを意味します。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/14.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/34.png" style={{width:'80%', height:'auto'}}/></div>
</div>

### 3. アイコンを表示 {#ttf}

この例では、ディスプレイにアイコンを表示します。

まず、ファイルエディターアドオンをインストールする必要があります。**Studio Code Server**を検索してクリックします。**INSTALL**をクリックして**START**します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

そして<span id="ttf">、</span>**fonts**という新しいフォルダを作成し、このファイルをダウンロードして**fontsフォルダに入れます**。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

以下のコードをコピーして、下図のように`captive_portal`の後に貼り付けることができます。

```yaml
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  #here is the directory to save ttf file
    id: font_mdi_large
    size: 200        # big size icon
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather cloudy
      - "\U000F0592" # weather hail
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # small size icon
    size: 40
    glyphs: *mdi-weather-glyphs

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 30s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

以下の画像のようなフィードバックが表示されれば、コードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/35.png" style={{width:600, height:'auto'}}/></div>

他のアイコンを使用したい場合は、下のボタンをクリックしてさらに探索できます。

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>アイコンウェブサイトはこちら</button></p>
</a>
</div>

使用したいアイコンを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

コードをコピーして、以下の画像のように**captive_portal**部分に貼り付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/42.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/43.png" style={{width:800, height:'auto'}}/></div>

### 4. 画像を表示 {#image}

この例では、お好みの画像をディスプレイに表示します。

前の例と同様に、**Studio Code Server**をインストールし、画像を保存するために**image**という新しいフォルダを作成する必要があります。

そして、**image**フォルダに画像を入れます。下のボタンをクリックして画像をダウンロードして試すことができます。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

以下のコードをコピーして、下図のように`captive_portal`の後に貼り付けることができます。

```yaml
image:
  - file: /config/esphome/image/wifi.jpg    # the path where you save the image, png or jpg format
    id: myImage
    type: BINARY
    resize: 800x480    # how big you want to show, the biggest size should be as same as ePaper Penal pixel(800x480)
    invert_alpha: true   # invert color

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 30s
    lambda: |-
      it.image(0, 0, id(myImage));
```

以下の画像のようなフィードバックが表示されれば、コードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.png" style={{width:600, height:'auto'}}/></div>

## デモ 1. Home Assistantダッシュボードのスクリーンショットを撮る

この例では、HAのスクリーンショットをディスプレイに表示します。

まず、スクリーンショットアドオン**Puppet**をインストールする必要があります。[こちらをクリックしてインストールしてください。](https://github.com/balloob/home-assistant-addons/tree/main/puppet)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/83.jpg" style={{width:800, height:'auto'}}/></div>

バージョンは**1.11.4以上**である必要があることに注意してください。インストール後、**Configuration page**に移動します。このアドオン用のaccess_tokenを作成する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/96.jpg" style={{width:800, height:'auto'}}/></div>

次のステップでトークンを作成し、ここに貼り付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/88.jpg" style={{width:800, height:'auto'}}/></div>

**Security page**の下部に移動してトークンを作成し、それをコピーして**Puppet**アドオンに貼り付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/85.jpg" style={{width:800, height:'auto'}}/></div>

Puppetアドオンを**再起動**することを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/95.jpg" style={{width:800, height:'auto'}}/></div>

アドオンを開始すると、ポート10000で新しいサーバーが起動します。リクエストしたパスは、そのページのスクリーンショットを返します。必要なビューポートサイズを指定する必要があります。

例えば、デフォルトダッシュボードの1000px x 1000pxのスクリーンショットを取得するには、以下を取得します：

```python
# http://192.168.1.191:10000/lovelace/0?viewport=1000x1000(My address)

http://homeassistant.local:10000/lovelace/0?viewport=1000x1000
```

E Ink®ディスプレイのカラーパレットを削減するには、einkパラメータを追加できます。値は使用する色数（黒を含む）を表します。例えば、2色のE Ink®ディスプレイの場合：

```python
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&eink=2
```

eink=2を使用している場合、invertパラメータを追加して色を反転することもできます：

```python
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&eink=2&invert
```

さらに、他のページのスクリーンショットも撮ることができます。例えば、HAの**To-do lists**ページ：

```python
http://192.168.1.191:10000/todo?viewport=800x480&eink=2&invert
```

このリンクをブラウザに入力することで、スクリーンショットの効果を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/92.jpg" style={{width:800, height:'auto'}}/></div>

以下のコードをコピーして、`esp32`の後に貼り付けてください：

```yaml
# Enable PSRAM support since online_image requires more than the available RAM capacity
psram:
  mode: octal
  speed: 80MHz
```

以下のコードをコピーして、下図のように`captive_portal`の後に貼り付けることができます。

```yaml
http_request:
  verify_ssl: false
  timeout: 10s
  watchdog_timeout: 15s

online_image:
  - id: dashboard_image
    format: PNG
    type: BINARY
    buffer_size: 30000
    url: http://192.168.1.191:10000/todo?viewport=800x480&eink=2&invert #change this link to your screenshot link
    update_interval: 30s
    on_download_finished:
      - delay: 0ms
      - component.update: main_display

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: main_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: never
    lambda: |-
      it.image(0, 0, id(dashboard_image));
```

以下の画像のようなフィードバックが表示されたら、コードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/94.jpg" style={{width:600, height:'auto'}}/></div>

## デモ2. ディープスリープモード

:::tip
ディープスリープモード中は、デバイスに直接コードをアップロードできません。ダウンロードモードに入る必要があります。[Q3にジャンプするにはここをクリック](#port)
:::

この例では、ディープスリープモードを使用して電力を節約する方法を示します。6時間ごとに情報を更新します。

以下のコードをコピーして、下図のように`captive_portal`の後に貼り付けることができます。

```yaml
globals:
  - id: sleep_counter
    type: int
    restore_value: yes  # key parameter, to use RTC storage
    initial_value: '0'

# Here is deep sleep part
deep_sleep:
  id: deep_sleep_1
  run_duration: 30s  # Device wake up and run 30s (enough to display)
  sleep_duration: 3min  # deep sleep for 3min

interval:
  - interval: 29s  # run this command before the end of run_duration
    then:
      - logger.log: "Entering deep sleep now..."

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 3min
    lambda: |-
      id(sleep_counter) += 1;
      ESP_LOGD("main", "Wakeup count: %d", id(sleep_counter));
      it.printf(100, 100, id(font1), "Wakeup count: %d", id(sleep_counter));
```

カウンターが表示されます。起動するたびに1つずつ増加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/90.jpg" style={{width:600, height:'auto'}}/></div>

## デモ3. 包括的な例

:::tip
より良く理解するために、まず上記の基本的な使用方法を実行することを強くお勧めします。
:::

この例では、TRMNL 7.5インチe-paper DIYキット用の包括的なESPHome設定を示します。YAMLコードは複数の機能を統合して、Home Assistantとシームレスに連携するスマートでインタラクティブなディスプレイパネルを作成します。

**目的と機能：**

- この設定により、デバイスはWi-FiとHome Assistantに接続し、簡単な管理のためにAPIとOTAアップデートの両方をサポートします。

- 物理ボタンで制御される2つの切り替え可能なページで、e-paperディスプレイにさまざまなタイプの情報を表示するように設定します。

- デバイスはバッテリー電圧を読み取り、バッテリーの割合を計算し、対応するバッテリーアイコンと値を表示します。

- 天気状況と温度はHome Assistantから取得され、適切なアイコンと単位で表示されます。

- 現在の時刻と日付も表示され、Home Assistantと同期されます。

この例では、センサー読み取り値、Home Assistantデータ、ユーザー入力を組み合わせて、ESPHomeとTRMNL 7.5インチe-paperキットを使用して機能豊富な常時オンスマートディスプレイを構築する方法を紹介します。

<details>

<summary>完全なコードをプレビューするにはここをクリック</summary>

```yaml
esphome:
  name: obdy
  friendly_name: obdy
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_battery_enable
      - delay: 200ms
      - component.update: battery_voltage
      - component.update: battery_level

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# Enable PSRAM support since online_image requires more than the available RAM capacity
psram:
  mode: octal
  speed: 80MHz

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "j0V30kuJ6Zdij9SU6Ee+7ruwid+7SQOxtinjld2PRc0="

ota:
  - platform: esphome
    password: "db786195ae6f9748f5b57ea9bd1d4161"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Obdy Fallback Hotspot"
    password: "IOfapF7hXq55"

captive_portal:

# Deep-sleep, wake by GPIO4
# deep_sleep:
#   id: deep_sleep_1
#   run_duration: 1min
#   sleep_duration: 60min
#   wakeup_pin: GPIO4
#   wakeup_pin_mode: INVERT_WAKEUP

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

# Fonts
font:
  - file: "gfonts://Inter@700"
    id: small_font
    size: 24
  - file: "gfonts://Inter@700"
    id: mid_font
    size: 36
  - file: "gfonts://Inter@700"
    id: big_font
    size: 180
  - file: "gfonts://Inter@700"
    id: time_font
    size: 96      # for the big time display
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_bat_icon
    size: 24
    glyphs:
      - "\U000F007A"  # mdi-battery-10
      - "\U000F007B"  # mdi-battery-20
      - "\U000F007C"  # mdi-battery-30
      - "\U000F007D"  # mdi-battery-40
      - "\U000F007E"  # mdi-battery-50
      - "\U000F007F"  # mdi-battery-60
      - "\U000F0080"  # mdi-battery-70
      - "\U000F0081"  # mdi-battery-80
      - "\U000F0082"  # mdi-battery-90
      - "\U000F0079"  # mdi-battery
  - file: "fonts/materialdesignicons-webfont.ttf" # <-- 替换成你的字体文件路径
    id: weather_icon_font
    size: 100
    glyphs:
      - "\U000F0599" # weather-sunny
      - "\U000F0595" # weather-partly-cloudy
      - "\U000F0F2F" # weather-cloudy
      - "\U000F0597" # weather-rainy
      - "\U000F0598" # weather-snowy
      - "\U000F059B" # weather-windy
      - "\U000F0594" # weather-fog
      - "\U000F0596" # weather-lightning

globals:
  - id: page_index
    type: int
    restore_value: true
    initial_value: '0'
  - id: battery_glyph
    type: std::string
    restore_value: no
    initial_value: "\"\\U000F0079\""   # default full battery

sensor:
  - platform: adc
    pin: GPIO1
    name: "Battery Voltage"
    id: battery_voltage
    update_interval: 60s
    attenuation: 12db
    filters:
      - multiply: 2.0
  - platform: template
    name: "Battery Level"
    id: battery_level
    unit_of_measurement: "%"
    icon: "mdi:battery"
    device_class: battery
    state_class: measurement
    lambda: 'return id(battery_voltage).state;'
    update_interval: 60s
    on_value:
      then:
        - lambda: |-
            int pct = int(x);
            if (pct <= 10)      id(battery_glyph) = "\U000F007A";
            else if (pct <= 20) id(battery_glyph) = "\U000F007B";
            else if (pct <= 30) id(battery_glyph) = "\U000F007C";
            else if (pct <= 40) id(battery_glyph) = "\U000F007D";
            else if (pct <= 50) id(battery_glyph) = "\U000F007E";
            else if (pct <= 60) id(battery_glyph) = "\U000F007F";
            else if (pct <= 70) id(battery_glyph) = "\U000F0080";
            else if (pct <= 80) id(battery_glyph) = "\U000F0081";
            else if (pct <= 90) id(battery_glyph) = "\U000F0082";
            else                id(battery_glyph) = "\U000F0079";
    filters:
      - calibrate_linear:
          - 4.15 -> 100.0
          - 3.96 -> 90.0
          - 3.91 -> 80.0
          - 3.85 -> 70.0
          - 3.80 -> 60.0
          - 3.75 -> 50.0
          - 3.68 -> 40.0
          - 3.58 -> 30.0
          - 3.49 -> 20.0
          - 3.41 -> 10.0
          - 3.30 -> 5.0
          - 3.27 -> 0.0
      - clamp:
          min_value: 0
          max_value: 100

output:
  - platform: gpio
    pin: GPIO6
    id: bsp_battery_enable

binary_sensor:
  - platform: gpio    # Next page KEY1
    pin:
      number: GPIO2
      mode: INPUT_PULLUP
      inverted: true
    id: key1
    name: "Key1"
    on_press:
      then:
        - lambda: |-
            id(page_index) = (id(page_index) + 1) % 2;
            id(epaper_display).update();

  - platform: gpio     # Prev page KEY2
    pin:
      number: GPIO3
      mode: INPUT_PULLUP
      inverted: true
    id: key2
    name: "Key2"
    on_press:
      then:
        - lambda: |-
            id(page_index) = (id(page_index) - 1 + 2) % 2;
            id(epaper_display).update();

  # - platform: gpio
  #   pin:
  #     number: GPIO5       # KEY3
  #     mode: INPUT_PULLUP
  #     inverted: true
  #   id: key2
  #   name: "Key2"
  #   on_press:
  #     then:

# Home Assistant time
time:
  - platform: homeassistant
    id: ha_time

text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
  - platform: homeassistant
    entity_id: weather.home
    id: temp
    attribute: "temperature"

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: never
    lambda: |-
      // ----------  PAGE 0  ----------
      if (id(page_index) == 0) {
        // Screen dimension constants for easy adjustment
        const int scr_w = 800;
        const int scr_h = 480;
        const int center_x = scr_w / 2; // Center X-coordinate of the screen (400)

        // --- Top-right: Battery Info ---
        // Display the battery icon using an icon font
        it.printf(scr_w - 130, 13, id(font_bat_icon), "%s", id(battery_glyph).c_str());
        // Display the battery percentage text
        it.printf(scr_w - 100, 10, id(small_font), "%.0f%%", id(battery_level).state);

        // --- Draw the vertical separator line ---
        // Draw a vertical line in the middle to separate left and right areas
        it.filled_rectangle(center_x, 100, 2, 280);

        // ==================================================
        //                    LEFT AREA: WEATHER INFO
        // ==================================================
        // Calculate the center X-coordinate of the left area for alignment
        const int left_center_x = center_x / 2; // 200

        // 1. Display the title "Weather" at the top of the left area
        it.printf(left_center_x, 110, id(mid_font), TextAlign::TOP_CENTER, "Weather");

        // 2. Get the weather condition and select the corresponding icon
        std::string weather_condition = id(myWeather).state;
        std::string weather_icon = "\U000F0599"; // Default icon (sunny), as a fallback for unknown states

        if (weather_condition == "partlycloudy") {
          weather_icon = "\U000F0595"; // weather-partly-cloudy
        } else if (weather_condition == "cloudy") {
          weather_icon = "\U000F0F2F"; // weather-cloudy
        } else if (weather_condition == "rainy") {
          weather_icon = "\U000F0597"; // weather-rainy
        } else if (weather_condition == "snowy") {
          weather_icon = "\U000F0598"; // weather-snowy
        } else if (weather_condition == "windy") {
          weather_icon = "\U000F059B"; // weather-windy
        } else if (weather_condition == "fog") {
          weather_icon = "\U000F0594"; // weather-fog
        } else if (weather_condition == "lightning") {
          weather_icon = "\U000F0596"; // weather-lightning
        }
        // Display the weather icon in the center of the left area
        it.printf(left_center_x, 240, id(weather_icon_font), TextAlign::CENTER, "%s", weather_icon.c_str());

        // 3. Display the weather condition text below the icon
        it.printf(left_center_x, 400, id(mid_font), TextAlign::BOTTOM_CENTER, "%s", weather_condition.c_str());


        // ==================================================
        //                    RIGHT AREA: TEMPERATURE INFO
        // ==================================================
        // Calculate the center X-coordinate of the right area for alignment
        const int right_center_x = center_x + (center_x / 2); // 600

        // 1. Display the title "Temperature" at the top of the right area
        it.printf(right_center_x, 110, id(mid_font), TextAlign::TOP_CENTER, "Temperature");

        // 3. Display the temperature reading below the icon, with one decimal place
        float temp_c = stof(id(temp).state);
        double temp_f = temp_c * 9.0 / 5.0 + 32.0;
        it.printf(right_center_x, 250, id(mid_font), TextAlign::CENTER, "%.0f°F", temp_f);
        it.printf(right_center_x, 380, id(mid_font), TextAlign::CENTER, "%.1f°C", temp_c);
      }
      // ----------  PAGE 1  ----------
      else{
        // Battery top-right
        it.printf(670, 13, id(font_bat_icon), "%s", id(battery_glyph).c_str());
        it.printf(700, 10, id(small_font), "%.0f%%", id(battery_level).state);

        auto now = id(ha_time).now();
        struct tm timeinfo = now.to_c_tm();

        // centering time HH:MM
        char timeStr[6];
        strftime(timeStr, sizeof(timeStr), "%H:%M", &timeinfo);
        it.printf(400, 180, id(time_font), TextAlign::CENTER, timeStr);

        // Date: Day of week
        const char *weekday[] = {"Sun","Mon","Tue","Wed","Thu","Fri","Sat"};
        const char *wday = weekday[timeinfo.tm_wday];

        // Date: month - day
        char dateStr[12];
        strftime(dateStr, sizeof(dateStr), "%b %d", &timeinfo);  // e.g. Jun 15

        // Day of the week + date below the time
        it.printf(400, 280, id(mid_font), TextAlign::CENTER, "%s, %s", wday, dateStr);
      }
```

</details>

以下の画像のようなフィードバックが表示されたら、コードが正常に実行されていることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_demo3_byod.jpg" style={{width:800, height:'auto'}}/></div>

## FAQ

### Q1: データが表示されないのはなぜですか？

この場合、Settings -> Devices & Services -> Integrations に移動してデバイスを**再設定**する必要があります。ePaper パネルが見つからない場合は、HA を再起動してみてください。

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### Q2: Home Assistant でこれらのデータを取得できないのはなぜですか？ {#port}

この場合、Settings -> Devices & Services -> Integrations に移動してデバイスを HA に**追加**する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/11.png" style={{width:800, height:'auto'}}/></div>

### <span id="deepmode">Q3</span>: デバイスがディープスリープモードの時に新しいプログラムをアップロードするにはどうすればよいですか？

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/103.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/102.png" style={{width:'100%', height:'auto'}}/></div>
</div>

デバイスがディープスリープモードの時は、直接新しいプログラムをアップロードすることはできません。

1. まず、デバイスの電源が入っていることを確認します。次に、XIAO ESP32-S3 Plus の USB-C ポートの隣にある **Boot** ボタンを長押しします。

2. **Boot** ボタンを押したまま、**Reset** ボタンを一度押してから、**Boot** ボタンを離します。

3. その後、バッテリースイッチをオフにして、電源ケーブルを抜きます。

4. 最後に、ケーブルを再接続して新しいプログラムをアップロードします。

### <span id="Q4">Q4</span>: TRMNL 7.5inch(OG) DIY Kit がコンピューターに接続できませんか？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

何度か抜き差しを試すか、プロンプトに従ってドライバーをインストールしてください。

### <span id="Q5">Q5</span>: Wi-Fi プログラムアップロードが失敗しましたか？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/74.png" style={{width:800, height:'auto'}}/></div>

この場合、ePaper パネルがオフラインまたはディープスリープモードになっています。オンラインにするか、起動してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
