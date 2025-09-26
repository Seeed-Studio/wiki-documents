---
description: SenseCAP S2110 Sensor Builderの概要
title: SenseCAP S2110 Sensor Builder
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger
last_update:
  date: 11/20/2023
  author: Matthew
---

<!-- This wiki has been devided into 3 parts. -->

# SenseCAP S2110 センサービルダー

SenseCAP S2110 Sensor Builderは、産業グレードモジュールとメーカーレベルモジュールの融合を可能にする画期的なソリューションです。これは500以上のGroveモジュールでRS485機能モジュールを構築する能力を持つオープンソースツールです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-105.jpg"/></div>

## 概要

### 小さなオブジェクト、産業機能

デュアルコアARM Cortex M0+プロセッサとしてSeeed Studio XIAO RP2040を搭載し、1つのGroveと1つのRS485コネクタを持ち、開発者が500以上のGroveセンサーと様々なMODBUS RS485センサーに接続して、様々なIoTアプリケーション用のカスタム産業グレードMODBUS RS485センサーを開発できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/107.jpg"/></div>

### さらなるLoRaWAN®による長距離無線データ伝送

長距離無線アプリケーション（LoRaWAN®）では、開発者は[SenseCAP LoRaWAN Data Logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)と簡単に接続してデータをSenseCAP Cloudに転送でき、SenseCAP Mate Appでの5分間の簡単なBLE設定のみで済みます。明確なデータ結果とさらなる分析は、SenseCAP DashboardとSenseCAP Mate Appから簡単に取得できます。Helium、TTN、LORIOT等のIoTプラットフォームもサポートされています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-106.jpg"/></div>

## 特徴

- **Modbus RS485産業グレードセンサーの簡単構築：** オープンソースソースコードとIP66エンクロージャにより、500以上の既存GroveセンサーをModbus RS485産業グレードセンサーに簡単に変換。最も人気のある6つの環境Groveセンサーは、ネイティブファームウェアで既に完全に互換性があり、さらに多くが追加予定
- **SenseCAP Data LoggerとIoTプラットフォーム互換：** SenseCAP Data LoggerでSenseCAP LoRaWAN®センサーに変換し、SenseCAP Mate APPでわずか5分の迅速で簡単なセットアップを活用
- **サードパーティData LoggerとIoTプラットフォームサポート：** SenseCAP Data Logger以外にも、開発者はModbus RS485プロトコルをサポートする他のデータロガーやサードパーティIoTプラットフォームに接続可能
- **デプロイ準備完了の産業グレード屋外エンクロージャ：** 光センサーとガスセンサー用の窓と防水通気孔が予約されたIP66防水等級屋外エンクロージャ、カスタマイズされた取り付けパネル付きで、ポールと壁の設置に適している
- **Seeed Studio XIAO RP2040による駆動：** 強力なSeeed Studio XIAO RP2040デュアルコアARM M0+プロセッサと豊富なオープンソースリソースを活用して独自のセンサーをカスタマイズ。USB-Cポート経由で簡単にコードをアップロード

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/108.png"/></div>

製品にはIP66産業グレードエンクロージャと取り付けパッドおよびネジセットが付属しており、センサーを屋外に簡単かつ安全にデプロイできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong></a> <a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-outdoor-lorawan-sensor-kit-based-on-grove-p-5503.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get LoRaWAN Kit 🖱️</font></span></strong></a> </div>

## 様々な方法でBuilderを始める

産業グレードモジュールとメーカーレベルモジュールの融合を可能にする画期的なソリューションです。Builderを有効にする方法は複数あります。

### SenseCAP Data LoggerでLoRaWANセンサーを構築するためのBuilderの有効化

<div align="center"><img width={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e22011019-sensecap-s2110-lorawan-sensor-kit-first_1_.jpg"/></div>

Groveセンサーを使用してカスタムで費用対効果の高い産業グレードのLoRaWANセンサーを構築し、SenseCAP Data LoggerでSenseCAP Cloudに接続して、長距離無線データ伝送を可能にできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入取 </font></span></strong></a> </div>

### より多くの産業レベルLoRaWAN Groveセンサーの追加

Builderに追加するより多くのGroveモジュールを探しています。あなたが参加していただけるなら光栄です！以下の情報を確認して、あなたの作品を私たちに貢献してください（これは[Seeed Studio Contributor Program](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=34120904)の下にあります）！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/ja/list_of_supported_grove_n_adding_more" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Getting Started </font></span></strong></a> <a class="get_one_now_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_S2110" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Source Code </font></span></strong></a> <a class="get_one_now_item" href="https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 🙋 Contributor </font></span></strong></a> </div>


### RS485を使用したXIAO RP2040ボードでの開発

Seeed Studio XIAO RP2040を搭載し、ボード上にGroveコネクタがあるため、通常の開発デバイスとして直接使用できます。RS485接続と併せて、XIAOにより多くのRS485対応センサーを追加し、プロジェクトのアイデアを拡張できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Ardunio </font></span></strong></a> <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-MicroPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 MicroPython </font></span></strong></a> <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-CircuitPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 CircuitPython </font></span></strong></a></div>

## ファクトリーファームウェアフラッシュ

ここでは、SenseCAP S2110 Sensor Builderにファームウェアをフラッシュする手順を説明します。ここでは初期のファクトリーファームウェアをフラッシュします。開始前に[最新のuf2ファームウェア](https://github.com/Seeed-Studio/Seeed_Arduino_S2110/releases)をダウンロードしてください。

- **ステップ1:** SenseCAP S2110 Sensor Builderの蓋の4本のネジを外して蓋を開け、PGコネクタのネジを外します（コインを使用）

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/92.jpg"/></div>

- **ステップ2:** SenseCAP S2110 Sensor BuilderとData Loggerを4本のワイヤーで接続済みの場合は、SenseCAP S2110 Sensor Builderの5Vピンに接続されている赤いワイヤーを取り外すことをお勧めします

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/97.jpg"/></div>

- **ステップ3:** USB Type-Cケーブルの一端をSenseCAP S2110 Sensor Builderに接続します。**B**ボタンを押し続けながら、USBケーブルのもう一端をPCに接続してマスストレージモードに入ります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/98.jpg"/></div>

- **ステップ4:** **RPI-RP2**ディスクがPCに表示され、XIAOの電源LEDが点灯していれば、接続は完了です。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/91.png"/></div>

- **ステップ5:** sensorBuilder.ino.uf2ファームウェアファイルを**RPI-RP2**ディスクにコピーします。

ファームウェアのフラッシュが完了すると、**RPI-RP2**ディスクは消えます。

## リソース

- **[GitHub]** [SenseCAP S2110 Sensor Builderソースコード](https://github.com/Seeed-Studio/Seeed_Arduino_S2110)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
