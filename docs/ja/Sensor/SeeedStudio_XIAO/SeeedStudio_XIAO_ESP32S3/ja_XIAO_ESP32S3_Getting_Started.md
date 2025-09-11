---
description: Seeed Studio XIAO ESP32S3 シリーズの使い方
title: Seeed Studio XIAO ESP32S3 シリーズの使い方
keywords:
- esp32s3
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_getting_started
sku: 113991114, 113991115, 102010671
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO ESP32S3 シリーズの使い方

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32S3</th>
  <th>Seeed Studio XIAO ESP32S3 Sense</th>
  <th>Seeed Studio XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3plus.png" style={{width:250, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## はじめに

Seeed Studio XIAOシリーズは小型の開発ボードで、類似したハードウェア構造を共有しており、そのサイズは文字通り親指サイズです。ここでのコードネーム「XIAO」は、その半分の特徴である「Tiny」を表し、もう半分は「Puissant」となります。
Seeed Studio XIAO ESP32S3 Senseは、カメラセンサー、デジタルマイクロフォン、SDカードサポートを統合しています。組み込みML計算能力と撮影機能を組み合わせることで、この開発ボードはインテリジェント音声およびビジョンAIを始めるための優れたツールとなります。

:::tip
**OV2640カメラ**は製造中止となり、その後のXIAO ESP32S3 Senseでは**OV3660カメラ**モデルを使用しています。ただし、カメラ用のWikiサンプルコードは引き続き適用されます。
:::

### 仕様

<table align="center">
 <tr>
     <th>項目</th>
     <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3</th>
        <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3 Sense</th>
  <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
     <th>プロセッサ</th>
     <td align="center" colspan="3">ESP32-S3R8 <br></br> Xtensa LX7 デュアルコア、32ビットプロセッサ、最大240MHzで動作 </td>
 </tr>
 <tr>
     <th>ワイヤレス</th>
     <td align="center" colspan="3">完全な2.4GHz Wi-Fiサブシステム <br></br> BLE: Bluetooth 5.0、Bluetooth mesh</td>
 </tr>
    <tr>
     <th>内蔵センサー</th>
     <td align="center"> - </td>
        <td align="center">1600*1200対応OV2640カメラセンサー<br></br> 2048*1536対応OV3660カメラセンサー<br></br>デジタルマイクロフォン</td>
  <td align="center"> - </td>
 </tr>
    <tr>
     <th>メモリ</th>
     <td align="center">オンチップ8M PSRAM & 8MB Flash</td>
        <td align="center">オンチップ8M PSRAM & 8MB Flash <br></br> オンボードSDカードスロット、32GB FAT対応</td>
  <td align="center">オンチップ8M PSRAM & <strong>16MB</strong> Flash</td>
 </tr>
    <tr>
     <th>インターフェース</th>
     <td>1x UART、1x IIC、1x IIS、1x SPI、11x GPIOs (PWM)、9x ADC、1x ユーザーLED、1x 充電LED  <br></br> 1x リセットボタン、1x ブートボタン</td>
        <td>1x UART、1x IIC、1x IIS、1x SPI、11x GPIOs (PWM)、9x ADC、1x ユーザーLED、1x 充電LED、1x B2Bコネクタ（追加GPIO 2個付き）、1x リセットボタン、1x ブートボタン</td>
  <td><strong>2</strong>x UART、1x IIC、1x IIS、<strong>2</strong>x SPI、<strong>18</strong>x GPIOs (PWM)、9x ADC、1x ユーザーLED、1x 充電LED、1x B2Bコネクタ、1x リセットボタン、1x ブートボタン</td>
 </tr>
    <tr>
     <th>寸法</th>
     <td align="center">21 x 17.8mm</td>
        <td align="center">21 x 17.8 x 15mm（拡張ボード付き）</td>
  <td align="center">21 x 17.8mm</td>
 </tr>
    <tr>
     <th rowspan="5">電源</th>
     <td colspan="3" align="center">入力電圧（Type-C）: 5V <br></br> 入力電圧（BAT）: 4.2V</td>
 </tr>
    <tr>
     <td>回路動作電圧（動作準備完了時）: <br></br> - Type-C: 5V@<strong>19mA</strong> <br></br> - BAT: 3.8V@<strong>22mA</strong></td>
        <td>回路動作電圧（動作準備完了時）: <br></br> - Type-C: 5V@<strong>38.3mA</strong> <br></br> - BAT: 3.8V@<strong>43.2mA</strong>（拡張ボード付き）</td>
  <td>回路動作電圧（動作準備完了時）: <br></br> - Type-C: 5V@<strong>28mA</strong> <br></br> - BAT: 3.8V@<strong>35mA</strong></td>
 </tr>
 <tr>
     <td align="center"> - </td>
        <td align="center">ウェブカメラWebアプリケーション: <br></br> - Type-C: <br></br> - - 平均消費電力: 5V/<strong>220mA</strong> <br></br> - バッテリー: <br></br> - - 平均消費電力: 4.2V/<strong>212mA</strong></td>
  <td align="center"> - </td>
 </tr>
 <tr>
     <td align="center"> - </td>
        <td align="center">マイクロフォン録音 & SDカード書き込み:  <br></br> - Type-C: <br></br> - - 平均消費電力: 5V/<strong>46.5mA</strong> <br></br> - - ピーク消費電力: 5V/<strong>89.6mA</strong> <br></br> - バッテリー: <br></br> - - 平均消費電力: 3.8V/<strong>54.4mA</strong> <br></br> - - ピーク消費電力: 3.8V/<strong>108mA</strong></td>
  <td align="center"> - </td>
 </tr>
    <tr>
  <td align="center" colspan="3">バッテリー充電電流: <strong>100mA</strong></td>
 </tr>
    <tr>
        <th>低消費電力モデル</th>
        <td>モデムスリープモデル: <strong>3.8V/25 mA</strong> <br></br> ライトスリープモデル: <strong>3.8V/2 mA</strong> <br></br> ディープスリープモデル: <strong>3.8V/14 μA</strong></td>
        <td>周辺機器なし: <br></br> - モデムスリープモデル: <strong>3.8V/25.5 mA</strong> <br></br> - ライトスリープモデル: <strong>3.8V/2.4 mA</strong> <br></br> - ディープスリープモデル: <strong>3.8V/63.768 μA</strong> <br></br> カメラ接続時: <br></br> - モデムスリープモデル: <strong>3.8V/44.57 mA</strong> <br></br> - ライトスリープモデル: <strong>3.8V/5.47 mA</strong> <br></br> - ディープスリープモデル: <strong>3.8V/3.00 mA</strong> <br></br> SDカード接続時: <br></br> - モデムスリープモデル: <strong>3.8V/32.8 mA</strong> <br></br> - ライトスリープモデル: <strong>3.8V/3.48 mA</strong> <br></br> - ディープスリープモデル: <strong>3.8V/1.08 mA</strong><br></br> カメラとSDカード同時接続時: <br></br> - モデムスリープモデル: <strong>3.8V/55.72 mA</strong> <br></br> - ライトスリープモデル: <strong>3.8V/6.56 mA</strong> <br></br> - ディープスリープモデル: <strong>3.8V/3.98 mA</strong></td>
  <td>モデムスリープモデル: <strong>3.8V/26.5 mA</strong> <br></br> ライトスリープモデル: <strong>3.8V/2.2 mA</strong> <br></br> ディープスリープモデル: <strong>3.8V/69 μA</strong></td>
    </tr>
    <tr>
        <th>Wi-Fi有効時の消費電力</th>
        <td align="center">アクティブモデル: <strong>~ 100 mA</strong></td>
        <td align="center">アクティブモデル: <strong>~ 110 mA</strong>（拡張ボード付き）</td>
  <td align="center">アクティブモデル: <strong>~ 85 mA</strong></td>
    </tr>
    <tr>
        <th>BLE有効時の消費電力</th>
        <td align="center">アクティブモデル: <strong>~ 85 mA</strong></td>
        <td align="center">アクティブモデル: <strong>~ 102 mA</strong>（拡張ボード付き）</td>
  <td align="center">アクティブモデル: <strong>~ 77 mA</strong></td>
    </tr>
    <tr>
        <th>動作温度</th>
        <td colspan="3" align="center">-40°C ~ 65°C</td>
    </tr>
</table>

### 機能

- **強力なMCUボード**: 最大240MHzで動作するESP32S3 32ビット、デュアルコア、Xtensaプロセッサチップを搭載し、複数の開発ポートを実装、Arduino / MicroPythonをサポート
- **高度な機能** (Sense用): 1600x1200解像度対応の着脱式**OV2640カメラセンサー**と2048x1536対応の**OV3660カメラセンサー**（OV5640カメラセンサーと互換）、追加のデジタルマイクロフォンを統合
- **精巧な電源設計**: リチウムバッテリー充電管理機能、4つの消費電力モデルを提供し、最低14μAの消費電力でディープスリープモードを実現
- **より多くの可能性のための大容量メモリ**: 8MB PSRAMと8MB FLASH（**Plus**バージョンでは16MB）を提供、外部32GB FATメモリ用のSDカードスロットをサポート（XIAO ESP32S3のみ）
- **優れたRF性能**: 2.4GHz Wi-FiとBLEデュアルワイヤレス通信をサポート、U.FLアンテナ接続時に100m+の遠距離通信をサポート
- **親指サイズのコンパクト設計**: 21 x 17.8mm、XIAOのクラシックなフォームファクターを採用し、ウェアラブルデバイスなどのスペース制限のあるプロジェクトに適している

<table align="center">
 <tr>
     <th>項目</th>
     <th style={{width:300, height:'auto'}}>OV3660カメラ</th>
        <th style={{width:300, height:'auto'}}>OV2640カメラ</th>
 </tr>
    <tr>
        <th>最大消費電力 (640*480)</th>
        <td align="center">アクティブモデル: <strong>~ 0.6A</strong></td>
        <td align="center">アクティブモデル: <strong>~ 0.65A</strong></td>
    </tr>
    <tr>
        <th>平均消費電力 (640*480)</th>
        <td align="center">アクティブモデル: <strong>~ 0.12A</strong></td>
        <td align="center">アクティブモデル: <strong>~ 0.24A</strong></td>
    </tr>
    <tr>
        <th>最小消費電力 (640*480)</th>
        <td align="center">アクティブモデル: <strong>~ 0.12A</strong></td>
        <td align="center">アクティブモデル: <strong>~ 0.15A</strong></td>
    </tr>
</table>

## ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は、Seeed Studio XIAO ESP32S3の特性に関する情報を提供します。

<Tabs>
<TabItem  value="(Sense)" label="XIAO ESP32S3/XIAO ESP32S3 Sense" default>

<table align="center">
 <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense フロント表示図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense バック表示図</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense ピンリスト</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

</TabItem>
<TabItem value="Plus" label="XIAO ESP32S3 Plus" default>

<table align="center">
 <tr>
  <th>XIAO ESP32S3 Plus 前面表示図</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_front.png
  " style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <th>XIAO ESP32S3 Plus 背面表示図</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_back.png
  " style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
 <th>XIAO ESP32S3 Plus ピンリスト</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_pinout.png
  " style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip
XIAO ESP32S3 PlusのB2Bコネクタは[Wio-SX1262拡張ボード](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html)と互換性がありますが、プラグインカメラセンサーボードとは互換性がありません。
:::

</TabItem>

</Tabs>

### 電源ピン

- 5V - これはUSBポートからの5V出力です。電圧入力としても使用できますが、外部電源とこのピンの間に何らかのダイオード（ショットキー、信号、電源）を配置し、アノードをバッテリー側、カソードを5Vピン側に接続する必要があります。
- 3V3 - これはオンボードレギュレータからの安定化出力です。700mAまで供給できます。
- GND - 電源/データ/信号グランド

### ストラッピングピン

各起動またはリセット時に、チップはいくつかの初期設定パラメータを必要とします。例えば、どのブートモードでチップをロードするか、フラッシュメモリの電圧などです。これらのパラメータはストラッピングピンを介して渡されます。リセット後、ストラッピングピンは通常のIOピンとして動作します。

チップリセット時に指定されたストラッピングピンによって制御されるパラメータは以下の通りです：

- **チップブートモード** – GPIO0とGPIO46
- **VDD_SPI電圧** – GPIO45
- **ROMメッセージ印刷** – GPIO46
- **JTAG信号ソース** – GPIO3

GPIO0、GPIO45、GPIO46は、チップリセット時にチップの内部弱プルアップ/プルダウン抵抗に接続されます。
これらの抵抗はストラッピングピンのデフォルトビット値を決定します。また、これらの抵抗は、ストラッピングピンが外部高インピーダンス回路に接続されている場合のビット値も決定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/110.png" style={{width:400, height:'auto'}}/></div>

ビット値を変更するには、ストラッピングピンを外部プルダウン/プルアップ抵抗に接続する必要があります。ESP32-S3がホストMCUによってデバイスとして使用される場合、ストラッピングピンの電圧レベルもホストMCUによって制御できます。

すべてのストラッピングピンにはラッチがあります。システムリセット時に、ラッチはそれぞれのストラッピングピンのビット値をサンプリングし、チップの電源が切れるかシャットダウンされるまでそれらを保存します。ラッチの状態は他の方法では変更できません。これにより、チップ動作全体を通してストラッピングピン値が利用可能になり、リセット後にピンは通常のIOピンとして使用するために解放されます。

ストラッピングピンのタイミング要件に関して、セットアップ時間とホールド時間などのパラメータがあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/111.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/112.png" style={{width:600, height:'auto'}}/></div>

## はじめに

XIAO ESP32S3をより早く使い始められるように、以下のハードウェアとソフトウェアの準備を読んでXIAOを準備してください。

1. **XIAO ESP32S3**

通常版にプリセットされている工場プログラムは、タッチピン点灯プログラムです。XIAOに電源を入れて、そのピンのいくつかに触れると、オレンジ色のユーザーインジケータが点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

2. **XIAO ESP32S3 Sense**

XIAO ESP32S3 Senseには、WebCamサンプルプログラムがプリインストールされて出荷されます。XIAOに適切なアンテナを取り付けて電源を入れることで、このプログラムを使用できます。詳細については、このプログラムに関するWikiを読むことができます。

- [ビデオストリーミング](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage#project-ii-video-streaming)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

### ハードウェアの準備

#### ピンヘッダのはんだ付け

XIAO ESP32S3はデフォルトでピンヘッダなしで出荷されるため、独自のピンヘッダを準備し、XIAOの対応するピンにはんだ付けして、拡張ボードやセンサーに接続できるようにする必要があります。

XIAO ESP32S3の小型サイズのため、ヘッダをはんだ付けする際は注意してください。異なるピンを一緒に接着したり、シールドや他のコンポーネントにはんだを付着させたりしないでください。そうしないと、XIAOがショートしたり正常に動作しなくなったりする可能性があり、これによって生じる結果はユーザーが負担することになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### アンテナの取り付け

XIAO ESP32S3の前面左下に、独立した「WiFi/BTアンテナコネクタ」があります。より良いWiFi/Bluetooth信号を得るために、パッケージ内のアンテナを取り出してコネクタに取り付ける必要があります。

アンテナの取り付けには少しコツがあります。直接強く押し下げると、非常に困難で指が痛くなることがわかります！アンテナを取り付ける正しい方法は、まずアンテナコネクタの片側をコネクタブロックに入れ、次に反対側を少し押し下げると、アンテナが取り付けられます。

アンテナの取り外しも同様で、アンテナを直接引っ張る力任せの方法は使わず、片側に力を加えて持ち上げると、アンテナは簡単に取り外せます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### 拡張ボードの取り付け（Sense用）

XIAO ESP32S3 Senseを購入している場合は、拡張ボードも含まれているはずです。この拡張ボードには、1600x1200 OV2640/2048x1536 OV3660カメラセンサー、オンボードSDカードスロット、デジタルマイクロフォンが搭載されています。

拡張ボードをXIAO ESP32S3 Senseに取り付けることで、拡張ボード上の機能を使用できます。

拡張ボードの取り付けは非常に簡単で、拡張ボードのコネクタをXIAO ESP32S3のB2Bコネクタに合わせ、強く押して「カチッ」という音が聞こえれば、取り付け完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

現在、私たちの棚には新しい完全にXIAO ESP32S3 Sense対応の強力なカメラ、OV5640があります。購入していただければ、カメラを交換して使用することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

ov5640の詳細なパラメータ情報を知りたい場合は、以下のチャートを参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Wikiのカメラに関するすべてのプログラムは、OV5640、OV2640、OV3660カメラのすべてに対応しています。
:::

#### アップグレードされたヒートシンクの取り付け

アップグレードされたヒートシンクを取り付けることで、XIAO ESP32S3 Senseの最適な冷却を確保してください。この新しい設計は、特にカメラ使用などの集約的な動作中に、以前のモデルで観察された冷却不足に対処するために調整されています。フィードバックでは、元のヒートシンクが適切に熱を放散せず、より効果的なソリューションの開発につながったことが強調されました。

<details>
<summary>性能比較を表示するにはクリック</summary>

私たちのテストでは、元のセットアップに対するアップグレードされたヒートシンクの利点が実証されています：

| テストサンプル           | 背面の最高温度 |
| --------------------- | ---------------------------- |
| **ヒートシンクなし** | 63.6°C                       |
| **デュアルヒートシンク付き** | 53.5°C (🔻10°C)           |

***テスト詳細:***

- **環境**: エアコン完備の部屋（約27°C）
- **温度測定ツール**: OMEGA CL3515R熱電対
- **測定場所**: XIAO ESP32S3の背面サーマルパッド
- **テストファームウェア**: WebCamera
- **電源**: Type-C 5V
- **動作時間**: 1時間

***主要結果:***

- ヒートシンクを装備したデバイスは1時間以上安定して動作し、性能劣化なしに最高温度に達しました。
- SVGA（800x600）モードでWebCameraをテストした際：
  - XIAO ESP32S3はスムーズに動作しました。
  - ビデオ出力は流暢でした。
  - 温度が大幅に低下し、フレームドロップや接続切断なしに信頼性の高い性能を確保しました。

</details>

***インストールを開始する前に以下のアイテムを準備してください:***

- 選択したヒートシンク（シングルまたはデュアル）
- クリーンなESP32S3

開始前にデバイスの電源を切り、すべての電源から切断されていることを確認してください。

:::tip notice

***購入に関する注意:*** XIAO ESP32S3 Senseを購入する際、**カメラが装備されたモデル**のみにヒートシンクが付属していることに注意することが重要です。カメラが含まれていないバージョンのESP32S3をお持ちの場合は、ヒートシンクを別途購入する必要があります。

***インストールのヒント:*** サーマルPADをヒートシンクで覆うことを優先してください。これはESP32S3チップの直上にあり、主要な熱源です。適切な位置合わせにより最適な放熱が確保され、BATピンをできるだけ妨げないように注意してください。
:::

それでは、インストールプロセスを開始しましょう：

***ステップ1. ヒートシンクの準備:***
ヒートシンクから保護カバーを取り外して熱接着剤を露出させることから始めます。これにより、ヒートシンクがESP32S3チップに確実に取り付けられるよう準備されます。

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/heat-sink.jpg" style={{width:400, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/remove-heat-sink-cover.jpg" style={{width:400, height:'auto'}}/></div></td>

***ステップ2. ヒートシンクの組み立て:***

<Tabs>
  <TabItem value="single" label="シングルヒートシンク" default>

このより小さくコンパクトなオプションは通常の使用には十分で、すべてのGPIOピンへの完全なアクセスを可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-single-heat-sink-install.jpg" style={{width:400, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="dual" label="デュアルヒートシンク">

より大きなオプションは優れた冷却を提供し、高性能タスクに理想的ですが、一部のGPIOピンへのアクセスが制限される場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-dual-heat-sink-install.png" style={{width:400, height:'auto'}}/></div>

:::note
XIAO ESP32S3 PlusのBATピンを使用したい場合、このケースのデュアルヒートシンクは適していません。
:::

  </TabItem>
</Tabs>

***ステップ3: 最終検査とテスト***

インストール後、ショート回路のリスクがなく、すべてが適切に固定されていることを確認してください。ヒートシンクが適切に位置合わせされ、しっかりと取り付けられていることを確認してください。

### ソフトウェアの準備

XIAO ESP32S3の推奨プログラミングツールはArduino IDEです。そのため、ソフトウェア準備の一環として、Arduinoのインストールを完了する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** お使いのオペレーティングシステムに応じて、Arduino IDEの安定版をダウンロードしてインストールしてください。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

- **ステップ2.** Arduinoアプリケーションを起動してください。

- **ステップ3.** Arduino IDEにESP32ボードパッケージを追加してください。

<Tabs>
<TabItem value='For Windows'>

**ファイル > 環境設定**に移動し、**"追加のボードマネージャのURL"**に以下のURLを入力してください：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

**ツール > ボード > ボードマネージャー...** に移動し、検索ボックスに **esp32** というキーワードを入力し、**esp32** の最新バージョンを選択してインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3 のオンボードパッケージには、バージョン **2.0.8** 以上が必要です。
:::

- **ステップ 4.** ボードとポートを選択します。

Arduino IDE の上部で、ポートを直接選択できます。これは通常 COM3 以上になります（**COM1** と **COM2** は通常ハードウェアシリアルポート用に予約されています）。

</TabItem>
<TabItem value='For Mac OS'>

**Arduino IDE > 環境設定** に移動し、**「追加のボードマネージャーのURL」** に以下のURLを入力します：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

**ツール > ボード > ボードマネージャー...** に移動し、検索ボックスに **esp32** というキーワードを入力し、**esp32** の最新バージョンを選択してインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3 のオンボードパッケージには **2.0.8** 以上のバージョンが必要です。
:::

- **ステップ 4.** ボードとポートを選択します。

Arduino IDE の上部で直接ポートを選択できます。これは通常、名前に「usbmodem」または「usbserial」が含まれているものです。不明な場合は、プラグを抜いて再度差し込み、どのポートが見つからないかを確認してください。

</TabItem>
</Tabs>

<!-- :::tip
現在、ESP32 にマージリクエストを提出しており、ESP32 が次回のオンボードパッケージアップデートをリリースする際に、Arduino IDE で XIAO ESP32S3 を検索して使用できるようになります。

それまでは、XIAO ESP32S3 オンボードパッケージを Arduino ディレクトリに手動で追加して使用できます。
:::

<div class="github_container" style={{textAlign: 'center'}}><a class="github_item" href="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32S3_Package.zip" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> パッケージをダウンロード</font></span></strong></a></div>

上記の zip をダウンロードした後、解凍すると 2 つのファイルが表示されます。1 つは **XIAO_ESP32S3 フォルダ**、もう 1 つは **boards.txt** です。

- **Windows PC の場合**

    Windows での ESP32 のデフォルトオンボードパッケージ保存パスは：

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7`

    ダウンロードした **boards.txt** ファイルを上記のパスにコピーし、このパスの元の **boards.txt** ファイルを上書きする必要があります。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/8.png" style={{width:600, height:'auto'}}/></div>

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7\variants`

    次に **variants フォルダ** に移動し、**XIAO_ESP32S3 フォルダ** をそこにコピーします。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/7.png" style={{width:800, height:'auto'}}/></div>

- **MacOS PC の場合**

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7`

    ダウンロードした **boards.txt** ファイルを上記のパスにコピーし、このパスの元の **boards.txt** ファイルを上書きする必要があります。

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7/variants`

    次に **variants フォルダ** に移動し、**XIAO_ESP32S3 フォルダ** をそこにコピーします。

- **ステップ 4.** Arduino IDE を閉じて再度開きます。-->

<Tabs>
<TabItem value="(Sense)" label="for XIAO ESP32S2 (Sense)" default>

また、左側の開発ボードで **xiao** を検索します。**XIAO_ESP32S3** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Plus" label="for XIAO ESP32S3 Plus" default>

まもなくリリース予定です。今後のアップデートにご期待ください。

</TabItem>
</Tabs>

この準備により、XIAO ESP32S3 用のプログラムの作成、コンパイル、アップロードを開始できます。

### BootLoader モード

時々、間違ったプログラムを使用すると、XIAO がポートを失ったり、正しく機能しなくなったりすることがあります。一般的な問題には以下があります：

- XIAO がコンピュータに接続されているが、*ポート番号が見つからない*。
- XIAO が接続され、ポート番号が表示されるが、*プログラムのアップロードが失敗する*。

上記の 2 つの状況に遭遇した場合、XIAO を BootLoader モードにすることを試すことができます。これにより、デバイスの認識不能やアップロード失敗の問題の大部分を解決できます。具体的な方法は：

- **ステップ 1**. XIAO ESP32S3 の `BOOT` ボタンを離さずに押し続けます。
- **ステップ 2**. `BOOT` ボタンを押し続けたまま、データケーブルでコンピュータに接続します。コンピュータに接続した後、`BOOT` ボタンを離します。
- **ステップ 3**. **ファイル > 例 > 01.Basics > Blink** プログラムをアップロードして、XIAO ESP32S3 の動作を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

### リセット

プログラムが異常に動作している場合、電源投入時に `Reset` を一度押すことで、XIAO にアップロードされたプログラムを再実行させることができます。

電源投入時に `BOOT` キーを押し続けてから `Reset` キーを一度押すことでも、BootLoader モードに入ることができます。

### 最初の Blink プログラムを実行する

ここまでで、XIAO ESP32S3 の機能とハードウェアについて十分理解していただけたと思います。次に、最もシンプルな Blink プログラムを例として、XIAO ESP32S3 の最初の点滅を実行しましょう！

- **ステップ 1.** Arduino アプリケーションを起動します。
- **ステップ 2.** **ファイル > 例 > 01.Basics > Blink** に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **ステップ 3.** ボードモデルを **XIAO ESP32S3** に選択し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

プログラムが正常にアップロードされると、以下の出力メッセージが表示され、XIAO ESP32S3 の右側のオレンジ色の LED が点滅していることを観察できます。

<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

おめでとうございます、XIAO ESP32S3のプログラムの書き込みとアップロード方法を学習しました！

:::note
XIAO ESP32S3のユーザーLEDピンがハイレベルに設定されている場合のみLEDは消灯し、ピンがローレベルに設定されている場合のみLEDは点灯します。
:::

## バッテリーの使用

XIAO ESP32S3シリーズには電源管理チップが内蔵されており、バッテリーを使用してXIAO ESP32S3を独立して電源供給したり、XIAO ESP32S3のUSBポートを通じてバッテリーを充電したりすることができます。

XIAOにバッテリーを接続したい場合は、認定された充電式3.7Vリチウムバッテリーの購入をお勧めします。バッテリーをはんだ付けする際は、プラス端子とマイナス端子を区別するよう注意してください。電源のマイナス端子はUSBポートに最も近い側にし、電源のプラス端子はUSBポートから遠い側にしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::note
XIAO ESP32S3のすべてのGPIOピンにはそれぞれの機能が割り当てられているため、バッテリーピン用に設定されたGPIOがありません。これは、GPIOの1つのアナログ値を読み取ることによって、ソフトウェアレベルでバッテリー電圧を取得できないことを意味します。必要に応じて、バッテリーのプラス端子とマイナス端子を2つのピンに接続してバッテリー電圧を測定することを検討できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::caution
バッテリー電源を使用する場合、5Vピンには電圧がかかりません。
:::

同時に、バッテリー充電用の赤色インジケーターライトを設計し、インジケーターライトの表示を通じて充電中のバッテリーの現在の状態をユーザーに知らせます。

1. XIAO ESP32S3にバッテリーが接続されていない場合、Type-Cケーブルが接続されると赤色ライトが点灯し、30秒後に消灯します。
2. バッテリーが接続され、Type-Cケーブルが接続されて充電中の場合、赤色ライトが点滅します。
3. Type-Cを接続してバッテリーが完全に充電されると、赤色ライトが消灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## UF2 BootLoader

一部のユーザーがUF2ファイルを直接XIAOにフラッシュしたいと考えていることを理解しており、これによりプログラムの一括フラッシュプロセスが可能になります。ここではこの方法について説明します。

<Tabs>
<TabItem value="method1" label="方法 I" default>

:::note
この方法は現在Windowsシステムでのみ利用可能です。
:::

**ステップ 1**: スクリプトのダウンロードと展開

必要なスクリプトzipファイルをダウンロードし、ローカルマシンに展開します：

*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**ステップ 2**: BINファイルをUF2ファイルに変換

Arduinoプログラムをコンパイルして保存した後、バイナリ`BIN`ファイルをエクスポートできます。このファイルはArduinoプロジェクトフォルダに生成されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

`BIN`ファイルを先ほど展開した**xiaos3-bin2uf2**ディレクトリにコピーします。次に、**convert_uf2.bat**スクリプトを実行してUF2ファイルを生成します。これには`bin`ファイルの名前が必要です。

**ステップ 3**: UF2 BootLoaderモードに入る

XIAOをコンピューターに接続し、**boot_uf2.bat**スクリプトを実行します。XIAOはUSBドライブとしてコンピューターに表示され、UF2 BootLoaderモードに正常に入ったことを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4**: UF2ファイルをXIAO ESP32S3にコピー

XIAO ESP32S3のUSBドライブにアクセスし、変換されたUF2ファイルをコピーします。コピーが完了すると、XIAO USBドライブは自動的に消え、プログラムが実行を開始します。

:::tip

1. プログラムが正しくコンパイルされ、実行されていることを確認してください。そうでなければ、UF2ファイルが期待通りに実行されない可能性があります。
2. **xiaos3-bin2uf2**フォルダにはBlinkのサンプルUF2ファイルが提供されています。アップロードすると、XIAO ESP32S3のオレンジ色LEDが点滅します。このUF2ファイルをテストとして使用できます。

:::

**ステップ 5**: UF2 BootLoaderモードに再入する

別のUF2ファイルをアップロードするためにUF2 BootLoaderモードに再入する必要がある場合は、**Reset**ボタンを押してから**Boot**ボタンを素早く押してください。boot_uf2.batスクリプトを再度実行する必要はありません。

:::note
Reset、次にBootを素早く押してください！
:::

</TabItem>

<TabItem value="method2" label="方法 II" >

このプロジェクトは、IDFからの2段階ブートローダーのカスタマイズと、3段階ブートローダーとしてのUF2ファクトリーアプリケーションで構成されています。

**注意:** IDFは活発に開発されており、非常に頻繁に変更されるため、lib/esp-idfにサブモジュールとして含まれています。環境を正しく設定するために、そこでエクスポートスクリプトを実行してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/adafruit/tinyuf2/tree/master/ports/espressif" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を学ぶ</font></span></strong></a></div>

</TabItem>
</Tabs>

## トラブルシューティング

### Q1: アップロードプログラムが失敗する/プログラムが異常に動作する/デバイスポートが見つからない場合はどうすればよいですか？

上記の問題が発生した場合は、まずXIAO ESP32S3のリセットボタンを押して、プログラムを再度実行させることをお試しください。問題が解決しない場合は、プログラムを再確認し、**[BootLoader Mode](#bootloader-mode)**で提供されている方法を読んでデバイスを復元してください。

### Q2: なぜ私のXIAOは角の丸い部分が平らでない問題があるのですか？これは品質の問題ですか？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

まず最初に、これは品質の問題ではなく、XIAOの正常な機能に影響を与えないことを明記しておきます。

XIAO ESP32S3は高い統合性のため、すべてのXIAOの中で最も複雑なものであり、PCBは工場生産で組み合わせる必要があります。高い統合レベルのため、スプライシングボードの接続は4つの角の丸い部分にのみ配置でき、これが画像のような角の丸い部分が不均一になる問題を引き起こします。私たちはプロセスの改善を試み、この問題が後続の生産で解決されることを保証します。

### Q3: リソースセクションで提供されているXIAO ESP32S3の工場出荷時ファームウェアをフラッシュする方法は？

リソースセクションで提供されているスクリプトはWindowsをサポートしています。zipファイルをダウンロードした後、以下のファイルが見つかります：

<Tabs>
<TabItem value="normal" label="XIAO ESP32S3 工場出荷時ファームウェア" >

```shell
.
├── boot_app0.bin
├── esp32_flasher.py
├── esptool.exe
├── project_config.json
├── xiao_esp32s3_firmware.bin
├── xiao_esp32s3_firmware.bootloader.bin
├── xiao_esp32s3_firmware.partitions.bin
└── xiao_esp32s3_firmware_win.bat
```

</TabItem>
<TabItem value="sense" label="XIAO ESP32S3 Sense ファクトリーファームウェア" >

```shell
.
├── CameraWebServer.bin
├── boot_app0.bin
├── bootloader.bin
├── esp32_flasher.py
├── esptool.exe
├── partition-table.bin
├── project_config.json
└── xiao_esp32s3_sense_firmware_win.bat
```

</TabItem>
</Tabs>

ファームウェアをフラッシュするには、適切な `.bat` ファイルを実行するだけです。フラッシュプロセスが失敗した場合は、プロンプトからコマンドラインをコピーして、ファイルが配置されているターミナルで手動で実行してください。

## リソース

[PDF] **[ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### Seeed Studio XIAO ESP32S3 用

- **[PDF]** [Seeed Studio XIAO ESP32S3 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 DXF 寸法図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle フットプリント](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- **[STEP]** [Seeed Studio XIAO ESP32S3 3D モデル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Seeed Studio XIAO ESP32S3 Sense 用

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)
- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF 寸法図（上面）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF 寸法図（下面）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D モデル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip)
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 Sense フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Seeed Studio XIAO ESP32S3 Plus 用

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.0_SCH_PCB.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_KiCAD_Library2.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus DXF 寸法図（上面）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus DXF 寸法図（下面）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 Plus ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD ファイル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_V1.0_SCH%26PCB_KICAD.zip)
- **[ZIP]** [Seeed Studio XIAO Plus Base（底面パッド引き出しあり）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)
- **[ZIP]** [Seeed Studio XIAO Plus Base（底面パッド引き出しなし）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)

### Seeed Studio XIAO ESP32S3 Sense Camera 用

- **[PDF]** [OV3660 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV3660_datasheet.pdf)
- **[PDF]** [OV5640 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV5640_datasheet.pdf)
- **[PDF]** [OV2640 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV2640_datasheet.pdf)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

### その他

- **[STP]** [XIAO ESP32S3 Sense housing design (top)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32S3 Sense housing design (bottom)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

*残りのオープンソース資料は現在編集中ですので、お楽しみに！*

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
