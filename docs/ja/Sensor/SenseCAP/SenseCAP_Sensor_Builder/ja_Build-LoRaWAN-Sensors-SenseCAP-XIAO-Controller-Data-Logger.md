---
description: SenseCAP S2110 センサービルダーの概要
title: SenseCAP S2110 センサービルダー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- このWikiは3つの部分に分かれています。 -->

# SenseCAP S2110 センサービルダー

SenseCAP S2110 センサービルダーは、産業用モジュールとメーカーレベルのモジュールを融合させる革新的なソリューションです。これはオープンソースツールであり、500以上のGroveモジュールを使用してRS485機能モジュールを構築する能力を持っています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-105.jpg"/></div>

## 概要

### 小型ながら産業用機能

デュアルコアARM Cortex M0+プロセッサとしてSeeed Studio XIAO RP2040を搭載しており、1つのGroveコネクタと1つのRS485コネクタを備えています。これにより、開発者は500以上のGroveセンサーやさまざまなMODBUS RS485センサーと接続し、さまざまなIoTアプリケーション向けにカスタム産業用MODBUS RS485センサーを開発することが可能です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/107.jpg"/></div>

### LoRaWAN®による長距離無線データ伝送

長距離無線アプリケーション（LoRaWAN®）向けに、開発者は簡単に[SenseCAP LoRaWAN データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)と接続し、データをSenseCAP Cloudに転送できます。これはSenseCAP Mate Appでの5分間の簡単なBLE設定だけで済みます。SenseCAP DashboardやSenseCAP Mate Appから明確なデータ結果やさらなる分析を簡単に得ることができます。また、Helium、TTN、LORIOTなどのIoTプラットフォームにも対応しています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-106.jpg"/></div>

## 特徴

- **Modbus RS485産業用センサーを簡単に構築:** オープンソースコードとIP66エンクロージャを使用して、既存の500以上のGroveセンサーを簡単にModbus RS485産業用センサーに変換可能。最も人気のある6つの環境Groveセンサーはネイティブファームウェアと完全に互換性があり、さらに多くのセンサーが追加予定
- **SenseCAP データロガーおよびIoTプラットフォーム対応:** SenseCAP データロガーを使用してSenseCAP LoRaWAN®センサーに変換し、SenseCAP Mate APPでわずか5分で簡単にセットアップ可能
- **サードパーティデータロガーおよびIoTプラットフォーム対応:** SenseCAP データロガー以外にも、Modbus RS485プロトコルをサポートする他のデータロガーやサードパーティIoTプラットフォームに接続可能
- **産業用屋外エンクロージャの即時展開:** IP66防水規格の屋外エンクロージャで、光センサーやガスセンサー用に窓と防水通気孔を備え、ポールや壁への設置に適したカスタマイズされた取り付けパネル付き
- **Seeed Studio XIAO RP2040による駆動:** 強力なSeeed Studio XIAO RP2040デュアルコアARM M0+プロセッサと豊富なオープンソースリソースを活用して独自のセンサーをカスタマイズ可能。USB-Cポートを介して簡単にコードをアップロード可能

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/108.png"/></div>

この製品はIP66産業用エンクロージャに加え、取り付けパッドとネジセットが付属しており、センサーを屋外に簡単かつ安全に展開することができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a> <a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-outdoor-lorawan-sensor-kit-based-on-grove-p-5503.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> LoRaWAN キットを購入 🖱️</font></span></strong></a> </div>

## Builder をさまざまな方法で始める

産業用グレードのモジュールとメーカーレベルのモジュールを融合させる革新的なソリューションとして、Builder を有効にする方法は複数あります。

### SenseCAP データロガーを使用して LoRaWAN センサーを構築するために Builder を有効化

<div align="center"><img width={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e22011019-sensecap-s2110-lorawan-sensor-kit-first_1_.jpg"/></div>

Grove センサーを使用して、カスタムでコスト効率の高い産業用グレードの LoRaWAN センサーを構築し、SenseCAP データロガーを使用して SenseCAP Cloud に接続することで、長距離のワイヤレスデータ伝送を可能にします。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入 </font></span></strong></a> </div>

### 産業用グレードの LoRaWAN Grove センサーを追加

Builder に追加するための Grove モジュールをさらに探しています。ぜひご参加ください！以下の情報を確認し、あなたの作品を私たちに提供してください（これは [Seeed Studio Contributor Program](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=34120904) の一環です）。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/ja/list_of_supported_grove_n_adding_more" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 始め方 </font></span></strong></a> <a class="get_one_now_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_S2110" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 ソースコード </font></span></strong></a> <a class="get_one_now_item" href="https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 🙋 コントリビューター </font></span></strong></a> </div>

### RS485 を使用して XIAO RP2040 ボードで開発

Seeed Studio XIAO RP2040 によって駆動され、ボード上に Grove コネクタがあるため、通常の開発デバイスとして直接使用できます。RS485 接続を利用することで、RS485 対応センサーを XIAO に追加し、プロジェクトのアイデアを拡張することができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Arduino </font></span></strong></a> <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-MicroPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 MicroPython </font></span></strong></a> <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-CircuitPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 CircuitPython </font></span></strong></a></div>

## 工場ファームウェアのフラッシュ

ここでは、SenseCAP S2110 Sensor Builder にファームウェアをフラッシュする手順を説明します。開始する前に、初期工場ファームウェアをフラッシュし、[最新の uf2 ファームウェア](https://github.com/Seeed-Studio/Seeed_Arduino_S2110/releases) をダウンロードしてください。

- **ステップ 1:** SenseCAP S2110 Sensor Builder の蓋を開けるために、蓋の4つのネジを外し、PG コネクタをコインで緩めます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/92.jpg"/></div>

- **ステップ 2:** すでに SenseCAP S2110 Sensor Builder とデータロガーを4本のワイヤーで接続している場合は、SenseCAP S2110 Sensor Builder の 5V ピンに接続されている赤いワイヤーを取り外すことをお勧めします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/97.jpg"/></div>

- **ステップ 3:** USB Type-C ケーブルの片方の端を SenseCAP S2110 Sensor Builder に接続します。**B** ボタンを押しながら、もう片方の端を PC に接続してマスストレージモードに入ります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/98.jpg"/></div>

- **ステップ 4:** PC に **RPI-RP2** ディスクが表示され、XIAO の電源 LED が点灯している場合、接続は完了です。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/91.png"/></div>

- **ステップ 5:** sensorBuilder.ino.uf2 ファームウェアファイルを **RPI-RP2** ディスクにコピーします。

ファームウェアのフラッシュが完了すると、**RPI-RP2** ディスクは消えます。

## リソース

- **[GitHub]** [SenseCAP S2110 Sensor Builder ソースコード](https://github.com/Seeed-Studio/Seeed_Arduino_S2110)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>