---
description: Seeed Studio XIAO ESP32S3 シリーズの入門ガイド。
title: Seeed Studio XIAO ESP32S3 シリーズの入門ガイド
keywords:
- esp32s3
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_getting_started
sku: 113991114, 113991115, 114010001, 102010634, 102010635, 102010671
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO ESP32S3 シリーズの入門ガイド

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
   <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## はじめに

Seeed Studio XIAO シリーズは小型の開発ボードで、類似したハードウェア構造を共有しており、そのサイズは文字通り親指サイズです。ここでのコードネーム「XIAO」は、その半分の特徴である「Tiny」を表し、もう半分は「Puissant」となります。

Seeed Studio XIAO ESP32S3 Sense は、カメラセンサー、デジタルマイクロフォン、SD カードサポートを統合しています。組み込み ML コンピューティングパワーと撮影機能を組み合わせることで、この開発ボードはインテリジェント音声およびビジョン AI を始めるための優れたツールになります。

:::tip
**OV2640 カメラ**は廃止され、その後の XIAO ESP32S3 Sense では **OV3660 カメラ**モデルを使用しています。ただし、カメラ用の Wiki サンプルコードは引き続き適用されます。
:::

### 仕様
<table>
  <tr>
    <th>製品</th>
    <td><a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">XIAO ESP32-S3</a></td>
    <td><a href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">XIAO ESP32-S3 Sense</a></td>
    <td><a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html">XIAO ESP32-S3 Plus</a></td>
  </tr>
  <tr>
    <th>プロセッサ</th>
    <td colspan="3">ESP32-S3R8<br/>Xtensa LX7 デュアルコア、最大 240 MHz で動作する 32 ビットプロセッサ</td>
  </tr>
  <tr>
    <th>ワイヤレス</th>
    <td colspan="3">完全な 2.4GHz Wi-Fi サブシステム<br/>Bluetooth Low Energy 5.0 / Bluetooth Mesh</td>
  </tr>
  <tr>
    <th>内蔵センサー</th>
    <td>/</td>
    <td>1x OV3660 カメラセンサー<br/>1x デジタルマイクロフォン</td>
    <td>/</td>
  </tr>
  <tr>
    <th>メモリ</th>
    <td>オンチップ 8MB PSRAM &amp; 8MB Flash</td>
    <td>オンチップ 8MB PSRAM &amp; 8MB Flash<br/>オンボード SD カードスロット、32GB FAT サポート</td>
    <td>オンチップ 8MB PSRAM &amp; 16MB Flash</td>
  </tr>
  <tr>
    <th>インターフェース</th>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>9x ADC<br/>1x ユーザー LED<br/>1x 充電 LED<br/>1x リセットボタン<br/>1x ブートボタン</td>
    <td>1x UART<br/>1x IIC<br/>1x IIS<br/>1x SPI<br/>11x GPIOs (PWM)<br/>9x ADC<br/>1x ユーザー LED<br/>1x 充電 LED<br/>1x B2B コネクタ（追加の 2 つの GPIO 付き）<br/>1x リセットボタン<br/>1x ブートボタン</td>
    <td>2x UART<br/>1x IIC<br/>1x IIS<br/>2x SPI<br/>18x GPIOs (PWM)<br/>9x ADC<br/>1x ユーザー LED<br/>1x 充電 LED<br/>1x B2B コネクタ<br/>1x リセットボタン<br/>1x ブートボタン</td>
  </tr>
  <tr>
    <th>寸法</th>
    <td>21 x 17.8mm</td>
    <td>21 x 17.8 x 15mm（拡張ボード付き）</td>
    <td>21 x 17.8mm</td>
  </tr>
  <tr>
    <th>電源（標準）</th>
    <td colspan="3">入力電圧（Type-C）：5V<br/>入力電圧（BAT）：3.7V</td>
  </tr>
  <tr>
    <th rowspan="4">消費電力</th>
    <td>回路動作電圧：<br/>- Type-C：5V@19mA<br/>- BAT：3.8V@22mA</td>
    <td>回路動作電圧：<br/>`- Type-C：5V@38.3mA`<br/>`- BAT：3.8V@43.2mA（拡張ボード付き）`</td>
    <td>回路動作電圧：<br/>- Type-C：5V@28mA<br/>- BAT：3.8V@35mA</td>
  </tr>
  <tr>
    <td>/</td>
    <td>ウェブカム Web アプリケーション：<br/>- Type-C：<br/>-- 平均消費電力：5V/~140mA<br/>-- ピーク消費電力（画像キャプチャ）：5V/~347mA<br/>- バッテリー：<br/>-- 平均消費電力：3.8V/~155mA<br/>-- ピーク消費電力（画像キャプチャ）：3.8V/~366mA</td>
    <td>/</td>
  </tr>
  <tr>
    <td>/</td>
    <td>マイクロフォン録音 &amp; SD カード書き込み：<br/>- Type-C：<br/>-- 平均消費電力：5V/54.58mA<br/>-- ピーク消費電力：5V/86.7mA<br/>- バッテリー：<br/>-- 平均消費電力：3.8V/64.5mA<br/>-- ピーク消費電力：3.8V/109.3mA</td>
    <td>/</td>
  </tr>
  <tr>
    <td>50mA（高速）/ 3.8mA（トリクル）</td>
    <td>/</td>
    <td>充電電流：<br/>100mA（高速）/ 0.9mA（トリクル）</td>
  </tr>
  <tr>
    <th>低消費電力モデル（標準）<br/>（供給電力：3.8V）</th>
    <td>モデムスリープモード：27mA<br/>ライトスリープモード：2mA<br/>ディープスリープモード：14μA</td>
    <td>モデムスリープモード：44mA<br/>ライトスリープモード：5mA<br/>ディープスリープモード：3mA</td>
    <td>モデムスリープモード：3.8V/31.6 mA<br/>ライトスリープモード：3.8V/2.45 mA<br/>ディープスリープモード：3.8V/33.51 μA</td>
  </tr>
  <tr>
    <th>Wi-Fi 有効時の消費電力（標準）</th>
    <td>アクティブモード：100 mA</td>
    <td>アクティブモード：110 mA（拡張ボード付き）</td>
    <td>アクティブモード：81 mA</td>
  </tr>
  <tr>
    <th>BLE 有効時の消費電力（標準）</th>
    <td>アクティブモード：85 mA</td>
    <td>アクティブモード：102 mA（拡張ボード付き）</td>
    <td>アクティブモード：101 mA</td>
  </tr>
  <tr>
    <th>動作温度</th>
    <td colspan="3">-20°C ~ 65°C</td>
  </tr>
</table>

### 特徴

- **強力な MCU ボード**：最大 240 MHz で動作する ESP32S3 32 ビット、デュアルコア、Xtensa プロセッサチップを搭載し、複数の開発ポートを実装、Arduino / MicroPython サポート
- **高度な機能**（Sense 用）：取り外し可能な **1600x1200 解像度の OV2640 カメラセンサー**と **2048x1536 の OV3660 カメラセンサー**（OV5640 カメラセンサーと互換）、追加のデジタルマイクロフォンを統合
- **精巧な電源設計**：リチウムバッテリー充電管理機能、14μA という低消費電力のディープスリープモードを可能にする 4 つの消費電力モデルを提供
- **より多くの可能性のための大容量メモリ**：8MB PSRAM と 8MB FLASH（**Plus** バージョンでは 16MB）を提供し、外部 32GB FAT メモリ用の SD カードスロットをサポート（XIAO ESP32S3 のみ）
- **優れた RF 性能**：2.4GHz Wi-Fi と BLE デュアルワイヤレス通信をサポート、U.FL アンテナ接続時に 100m+ の遠距離通信をサポート
- **親指サイズのコンパクト設計**：21 x 17.8mm、XIAO のクラシックなフォームファクターを採用し、ウェアラブルデバイスなどのスペース制限のあるプロジェクトに適している

<table align="center">
 <tr>
     <th>項目</th>
     <th style={{width:300, height:'auto'}}>OV3660 カメラ</th>
        <th style={{width:300, height:'auto'}}>OV2640 カメラ</th>
 </tr>
    <tr>
        <th>最大消費電力（640*480）</th>
        <td align="center">アクティブモデル：<strong>~ 0.6A</strong></td>
        <td align="center">アクティブモデル：<strong>~ 0.65A</strong></td>
    </tr>
    <tr>
        <th>平均消費電力（640*480）</th>
        <td align="center">アクティブモデル：<strong>~ 0.12A</strong></td>
        <td align="center">アクティブモデル：<strong>~ 0.24A</strong></td>
    </tr>
    <tr>
        <th>最小消費電力（640*480）</th>
        <td align="center">アクティブモデル：<strong>~ 0.12A</strong></td>
        <td align="center">アクティブモデル：<strong>~ 0.15A</strong></td>
    </tr>
</table>

## ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は、Seeed Studio XIAO ESP32S3 の特性に関する情報を提供します。

<Tabs>
<TabItem  value="(Sense)" label="XIAO ESP32S3/XIAO ESP32S3 Sense" default>

<table align="center">
 <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense 前面表示図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense 背面表示図</th>
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

**ピンマップ**
| XIAO ピン                 | 機能         | チップピン                                                | 代替機能 | 説明                          |
| :---------------------: | :-------------: | :----------------------------------------------------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |                                                        |                    | 電源入力/出力                   |
| GND                     |                  |                                                        |                    |                                      |
| 3V3                     | 3V3_OUT          |                                                        |                    | 電源出力                         |
| D0                      | アナログ          | GPIO1                                                  | TOUCH1             | GPIO、ADC                            |
| D1                      | アナログ          | GPIO2                                                  | TOUCH2             | GPIO、ADC                            |
| D2                      | アナログ          | GPIO3                                                  | TOUCH3             | GPIO、ADC                            |
| D3                      | アナログ          | GPIO4                                                  | TOUCH4             | GPIO、ADC                            |
| D4                      | アナログ、SDA       | GPIO5                                                  | TOUCH5             | GPIO、I2C データ、ADC                  |
| D5                      | アナログ、SCL       | GPIO6                                                  | TOUCH6             | GPIO、I2C クロック、ADC                 |
| D6                      | TX               | GPIO43                                                 |                    | GPIO、UART 送信                  |
| D7                      | RX               | GPIO44                                                 |                    | GPIO、UART 受信                   |
| D8                      | アナログ、SCK       | GPIO7                                                  | TOUCH7             | GPIO、SPI クロック、ADC                 |
| D9                      | アナログ、MISO      | GPIO8                                                  | TOUCH8             | GPIO、SPI データ、ADC                  |
| D10                     | アナログ、MOSI      | GPIO10                                                 | TOUCH9             | GPIO、SPI データ、ADC                  |
| D11                     | アナログ          | GPIO42                                                 | TOUCH12            | GPIO、ADC                            |
| D12                     | アナログ          | GPIO41                                                 | TOUCH13            | GPIO、ADC                            |
| MTDO                    |                  | GPIO40                                                 |                    | JTAG                                 |
| MTDI                    |                  | GPIO41                                                 |                    | JTAG、ADC                            |
| MTCK                    |                  | GPIO39                                                 |                    | JTAG、ADC                            |
| MTMS                    |                  | GPIO42                                                 |                    | JTAG、ADC                            |
| Reset                   |                  | EN                                                |                    | EN                                   |
| Boot                    |                  | GPIO0                                                  |                    | ブートモード開始                      |
| U.FL-R-SMT1             |                  | LNA_IN                                                 |                    | UFL アンテナ                          |
| CHARGE_LED              |                  |                                                |                    | CHG-LED                              |
| USER_LED                |                  | GPIO21                                                 |                    | ユーザーライト                           |
| Digital microphone_CLK  |                  | GPIO42                                                 |                    | MIC 用 PDM クロックピン                |
| Digital microphone_DATA |                  | GPIO41                                                 |                    | MIC 用 PDM データピン                 |
| Onboard SD Card__CS     |                  | GPIO3                                                  |                    | SD カードチップセレクトピン              |
| Onboard SD Card_SCK     |                  | GPIO7                                                  |                    | SD カードクロックピン                    |
| Onboard SD Card_MISO    |                  | GPIO8                                                  |                    | SD カードデータ入力ピン               |
| Onboard SD Card Slot_MOSI |                | GPIO10                                                 |          |      SD カードデータ出力ピン              |

**カメラ**
| チップピン  | 説明                          |
| :-------: | :---------------------------------- |
| GPIO10    | カメラ関連クロックピン            |
| GPIO11    | カメラビデオデータピン (Y8)          |
| GPIO12    | カメラビデオデータピン (Y7)          |
| GPIO13    | カメラピクセルクロックピン              |
| GPIO14    | カメラビデオデータピン (Y6)          |
| GPIO15    | カメラビデオデータピン (Y2)          |
| GPIO16    | カメラビデオデータピン (Y5)          |
| GPIO17    | カメラビデオデータピン (Y3)          |
| GPIO18    | カメラビデオデータピン (Y4)          |
| GPIO40    | カメラ用I2Cデータピン             |
| GPIO39    | カメラ用I2Cクロックピン            |
| GPIO38    | カメラ垂直同期ピン            |
| GPIO47    | カメラ水平同期ピン          |
| GPIO48    | カメラビデオデータピン (Y9)          |
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
XIAO ESP32S3 Plus のB2Bコネクタは[Wio-SX1262拡張ボード](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html)と互換性がありますが、プラグインカメラセンサーボードとは互換性がありません。
:::
**ピンマップ**

| XIAO ピン                 | 機能         | チップピン  | 代替機能 | 説明                          |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | 電源入力/出力                   |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | 電源出力                         |
| D0                      | Analog          | GPIO1     |                    | GPIO, ADC                            |
| D1                      | Analog          | GPIO2     |                    | GPIO, ADC                            |
| D2                      | Analog          | GPIO3     |                    | GPIO, ADC                            |
| D3                      | Analog          | GPIO4     |                    | GPIO, ADC                            |
| D4                      | Analog,SDA       | GPIO5     |                    | GPIO, I2Cデータ, ADC                  |
| D5                      | Analog,SCL       | GPIO6     |                    | GPIO, I2Cクロック, ADC                 |
| D6                      | TX               | GPIO43    |                    | GPIO, UART送信                  |
| D7                      | RX               | GPIO44    |                    | GPIO, UART受信                   |
| D8                      | Analog,SCK       | GPIO7     |                    | GPIO, SPIクロック, ADC                 |
| D9                      | Analog,MISO      | GPIO8     |                    | GPIO, SPIデータ, ADC                  |
| D10                     | Analog,MOSI      | GPIO10    |                    | GPIO, SPIデータ, ADC                  |
| D11                     |                  | GPIO38    |                    | GPIO, ADC                            |
| D12                     |                  | GPIO39    |                    | GPIO, ADC                            |
| D13                     |                  | GPIO40    |                    |                                      |
| D14                     |                  | GPIO41    |                    |                                      |
| D15                     |                  | GPIO42    |                    |                                      |
| D16                     |                  | GPIO10    |                    |                                      |
| D17                     |                  | GPIO13    |                    |                                      |
| D18                     |                  | GPIO12    |                    |                                      |
| D19                     |                  | GPIO11    |                    |                                      |
| MTDO                    |                  | GPIO40    |                    | JTAG                                 |
| MTDI                    |                  | GPIO41    |                    | JTAG, ADC                            |
| MTCK                    |                  | GPIO39    |                    | JTAG, ADC                            |
| MTMS                    |                  | GPIO42    |                    | JTAG, ADC                            |
| Reset                   |                  | CHIP_EN   |                    | EN                                   |
| Boot                    |                  | GPIO0     |                    | ブートモード開始                      |
| ADC_BAT                 |                  | GPIO10    |                    | BAT電圧値を読み取り           |
| U.FL-R-SMT1             |                  | LNA_IN    |                    | UFLアンテナ                          |
| CHARGE_LED              |                  | VCC_3V3   |                    | CHG-LED                              |
| USER_LED                |                  | GPIO21    |                    | ユーザーライト                           |

</TabItem>

</Tabs>

:::caution
XIAO ESP32-S3はGPIO41とGPIO42をピンA11とA12に割り当てていますが、ESP32-S3チップの性質上、ピンA11とA12はADC機能をサポートしていません。必ず区別して使い分けてください。
:::

### 電源ピン

- 5V - これはUSBポートからの5V出力です。電圧入力としても使用できますが、外部電源とこのピンの間に何らかのダイオード（ショットキー、信号、電源）を配置し、アノードをバッテリー側、カソードを5Vピン側にする必要があります。
- 3V3 - これはオンボードレギュレータからの調整済み出力です。700mAまで供給できます
- GND - 電源/データ/信号グランド

### ストラッピングピン

各起動またはリセット時に、チップはいくつかの初期設定パラメータを必要とします。例えば、どのブートモードでチップをロードするか、フラッシュメモリの電圧などです。これらのパラメータはストラッピングピンを介して渡されます。リセット後、ストラッピングピンは通常のIOピンとして動作します。

チップリセット時に指定されたストラッピングピンによって制御されるパラメータは以下の通りです：

- **チップブートモード** – GPIO0とGPIO46
- **VDD_SPI電圧** – GPIO45
- **ROMメッセージ印刷** – GPIO46
- **JTAG信号ソース** – GPIO3

GPIO0、GPIO45、GPIO46は、チップリセット時にチップの内部弱プルアップ/プルダウン抵抗に接続されています。
これらの抵抗はストラッピングピンのデフォルトビット値を決定します。また、これらの抵抗は、ストラッピングピンが外部高インピーダンス回路に接続されている場合のビット値も決定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/110.png" style={{width:400, height:'auto'}}/></div>

ビット値を変更するには、ストラッピングピンを外部プルダウン/プルアップ抵抗に接続する必要があります。ESP32-S3がホストMCUによってデバイスとして使用される場合、ストラッピングピンの電圧レベルもホストMCUによって制御できます。

すべてのストラッピングピンにはラッチがあります。システムリセット時に、ラッチはそれぞれのストラッピングピンのビット値をサンプリングし、チップの電源が切れるかシャットダウンされるまでそれらを保存します。ラッチの状態は他の方法では変更できません。これにより、チップ動作全体を通してストラッピングピン値が利用可能になり、リセット後にピンは通常のIOピンとして使用できるようになります。

ストラッピングピンのタイミング要件に関して、セットアップ時間とホールド時間などのパラメータがあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/111.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/112.png" style={{width:600, height:'auto'}}/></div>

## 入門ガイド

XIAO ESP32S3をより早く使い始められるように、以下のハードウェアとソフトウェアの準備を読んでXIAOを準備してください。

1. **XIAO ESP32S3**

通常版にプリセットされている工場プログラムは、タッチピン点灯プログラムです。XIAOに電源を入れて、そのピンのいくつかに触れると、オレンジ色のユーザーインジケータが点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

2. **XIAO ESP32S3 Sense**

XIAO ESP32S3 SenseにはWebCamサンプルプログラムがプリインストールされています。XIAOに適切なアンテナを取り付けて電源を入れることで、このプログラムを使用できます。詳細については、このプログラムに関するWikiを読むことができます。

- [ビデオストリーミング](https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage#project-ii-video-streaming)

:::note
**2025年6月**以降、XIAO ESP32S3 Senseの工場ファームウェアでは、以下の認証情報でデフォルトAP Wi‑Fiが有効になります：

- **SSID:** `XIAO_ESP32S3_Sense`
- **パスワード:** `seeedstudio`
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

### ハードウェアの準備

#### ヘッダーのはんだ付け

XIAO ESP32S3はデフォルトでピンヘッダーなしで出荷されるため、独自のピンヘッダーを準備し、XIAOの対応するピンにはんだ付けして、拡張ボードやセンサーに接続できるようにする必要があります。

XIAO ESP32S3の小型サイズのため、ヘッダーをはんだ付けする際は注意してください。異なるピンを一緒に付着させたり、シールドや他のコンポーネントにはんだを付着させたりしないでください。そうしないと、XIAOがショートしたり正常に動作しなくなったりする可能性があり、これによって生じる結果はユーザーが負担することになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### アンテナの取り付け

XIAO ESP32S3の前面左下に、独立した「WiFi/BTアンテナコネクタ」があります。より良いWiFi/Bluetoothシグナルを得るために、パッケージ内のアンテナを取り出してコネクタに取り付ける必要があります。

アンテナの取り付けには少しコツがあります。直接強く押し下げると、非常に押しにくく指が痛くなります！アンテナを正しく取り付ける方法は、まずアンテナコネクタの片側をコネクタブロックに入れ、次に反対側を少し押し下げると、アンテナが取り付けられます。

アンテナの取り外しも同様で、アンテナを直接力ずくで引っ張らず、片側に力を加えて持ち上げると、アンテナは簡単に取り外せます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### 拡張ボードの取り付け（Sense用）

XIAO ESP32S3 Senseを購入している場合、拡張ボードも含まれているはずです。この拡張ボードには1600x1200 OV2640/2048x1536 OV3660カメラセンサー、オンボードSDカードスロット、デジタルマイクロフォンが搭載されています。

拡張ボードをXIAO ESP32S3 Senseに取り付けることで、拡張ボード上の機能を使用できます。

拡張ボードの取り付けは非常に簡単で、拡張ボード上のコネクタをXIAO ESP32S3のB2Bコネクタに合わせ、強く押して「カチッ」という音が聞こえれば取り付け完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

現在、XIAO ESP32S3 Senseと完全に互換性のある強力な新しいカメラOV5640を販売しており、購入すればカメラを交換して使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

ov5640の詳細なパラメータ情報が必要な場合は、以下のチャートを参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Wikiのカメラに関するすべてのプログラムは、OV5640、OV2640、OV3660カメラの両方と互換性があります。
:::

#### アップグレードされたヒートシンクの取り付け

アップグレードされたヒートシンクを取り付けることで、XIAO ESP32S3 Senseの最適な冷却を確保してください。この新しい設計は、特にカメラ使用などの集約的な操作中に、以前のモデルで観察された冷却不足に対処するために調整されています。フィードバックでは、元のヒートシンクが適切に熱を放散せず、より効果的なソリューションの開発につながったことが強調されました。

<details>
<summary>性能比較を表示するにはクリック</summary>

私たちのテストでは、元のセットアップに対するアップグレードされたヒートシンクの利点が実証されました：

| テストサンプル           | 背面のピーク温度 |
| --------------------- | ---------------------------- |
| **ヒートシンクなし** | 63.6°C                       |
| **デュアルヒートシンク付き** | 53.5°C (🔻10°C)           |

***テスト詳細：***

- **環境**: エアコン付きの部屋（約27°C）
- **温度測定ツール**: OMEGA CL3515R熱電対
- **測定場所**: XIAO ESP32S3の背面サーマルパッド
- **テストファームウェア**: WebCamera
- **電源**: Type-C 5V
- **動作時間**: 1時間

***主要な結果：***

- ヒートシンクを装備したデバイスは1時間以上安定した動作を維持し、性能低下なしにピーク温度に達しました。
- SVGA（800x600）モードでWebCameraをテストした際：
  - XIAO ESP32S3はスムーズに動作しました。
  - ビデオ出力は流暢でした。
  - 温度が大幅に低下し、フレームドロップや切断なしに信頼性の高い性能を確保しました。

</details>

***取り付けを開始する前に以下のアイテムを準備してください：***

- 選択したヒートシンク（シングルまたはデュアル）
- きれいなESP32S3

開始前にデバイスの電源を切り、すべての電源から抜いてください。

:::tip notice

***購入に関する注意：*** XIAO ESP32S3 Senseを購入する際、**カメラが装備されたモデル**のみにヒートシンクが含まれていることに注意することが重要です。カメラが含まれていないバージョンのESP32S3をお持ちの場合は、ヒートシンクを別途購入する必要があります。

***取り付けのヒント：*** ESP32S3チップの直上にあり、主要な熱源であるサーマルPADをヒートシンクで覆うことを優先してください。適切な位置合わせにより最適な熱放散が確保され、BATピンをできるだけ妨げないようにしてください。
:::

それでは、取り付けプロセスを開始しましょう：

***ステップ1. ヒートシンクの準備：***
まず、ヒートシンクから保護カバーを取り外して熱接着剤を露出させます。これにより、ヒートシンクがESP32S3チップに確実に取り付けられるよう準備されます。

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/heat-sink.jpg" style={{width:400, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/remove-heat-sink-cover.jpg" style={{width:400, height:'auto'}}/></div></td>

***ステップ2. ヒートシンクの組み立て：***

<Tabs>
  <TabItem value="single" label="シングルヒートシンク" default>

この小型でコンパクトなオプションは通常の使用には十分で、すべてのGPIOピンへの完全なアクセスを可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-single-heat-sink-install.jpg" style={{width:400, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="dual" label="デュアルヒートシンク">

大型オプションは優れた冷却を提供し、高性能タスクに理想的ですが、一部のGPIOピンへのアクセスが制限される場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-dual-heat-sink-install.png" style={{width:400, height:'auto'}}/></div>

:::note
XIAO ESP32S3 PlusのBATピンを使用したい場合、このケースのデュアルヒートシンクは適していません。
:::

  </TabItem>
</Tabs>

***ステップ3：最終検査とテスト***

取り付け後、ショートサーキットのリスクなしにすべてが適切に固定されていることを確認してください。ヒートシンクが適切に位置合わせされ、しっかりと取り付けられていることを確認してください。

### ソフトウェアの準備

XIAO ESP32S3の推奨プログラミングツールはArduino IDEです。そのため、ソフトウェア準備の一環として、Arduinoのインストールを完了する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** お使いのオペレーティングシステムに応じて、Arduino IDEの安定版をダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

- **ステップ2.** Arduinoアプリケーションを起動します。

- **ステップ3.** Arduino IDEにESP32ボードパッケージを追加します。

<Tabs>
<TabItem value='For Windows'>

**File > Preferences**に移動し、**"Additional Boards Manager URLs"**に以下のURLを入力します：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

**Tools > Board > Boards Manager...**に移動し、検索ボックスにキーワード**esp32**を入力し、**esp32**の最新バージョンを選択してインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3のオンボードパッケージには、バージョン**2.0.8**以上が必要です。
:::

- **ステップ4.** ボードとポートを選択します。

Arduino IDEの上部で、ポートを直接選択できます。これはCOM3以上である可能性が高いです（**COM1**と**COM2**は通常ハードウェアシリアルポート用に予約されています）。

</TabItem>
<TabItem value='For Mac OS'>

**Arduino IDE > Preferences**に移動し、**"Additional Boards Manager URLs"**に以下のURLを入力します：

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

**Tools > Board > Boards Manager...** に移動し、検索ボックスにキーワード **esp32** を入力し、**esp32** の最新バージョンを選択してインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3 のオンボードパッケージには、バージョン **2.0.8** 以上が必要です。
:::

- **ステップ 4.** ボードとポートを選択します。

Arduino IDE の上部で、ポートを直接選択できます。これは通常、名前に "usbmodem" または "usbserial" が含まれているものです。不明な場合は、プラグを抜いて再度接続し、どのポートが見つからないかを確認してください。

</TabItem>
</Tabs>

<!-- :::tip
We have now submitted a merge request to ESP32 and will be able to search and use XIAO ESP32S3 in the Arduino IDE when ESP32 releases the next version of the on-board package update.

Until then, you can manually add the XIAO ESP32S3 on-board package to the Arduino directory to use it.
:::

<div class="github_container" style={{textAlign: 'center'}}><a class="github_item" href="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32S3_Package.zip" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Download the Package</font></span></strong></a></div>

After you have downloaded the above zip, please unzip it and you will see two files. One is the **XIAO_ESP32S3 folder**, and the other is **boards.txt**.

- **Under Windows PC**

    The default onboard package storage path for ESP32 in Windows is:

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7`

    We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/8.png" style={{width:600, height:'auto'}}/></div>

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7\variants`

    Then go to the **variants folder** and copy the **XIAO_ESP32S3 folder** to it.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/7.png" style={{width:800, height:'auto'}}/></div>

- **Under MacOS PC**

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7`

    We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7/variants`

    Then go to the **variants folder** and copy the **XIAO_ESP32S3 folder** to it.

- **Step 4.** Close the Arduino IDE and reopen it.-->

<Tabs>
<TabItem value="(Sense)" label="XIAO ESP32S3 (Sense) 向け" default>

また、左側の開発ボードで **xiao** を検索します。**XIAO_ESP32S3** を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Plus" label="XIAO ESP32S3 Plus 向け" default>

近日リリース予定です。今後のアップデートにご期待ください。

</TabItem>
</Tabs>

この準備により、XIAO ESP32S3 用のプログラムの作成、コンパイル、アップロードを開始できます。

### BootLoader モード

時々、間違ったプログラムを使用すると、XIAO がポートを失ったり、正しく機能しなくなったりすることがあります。一般的な問題には以下があります：

- XIAO がコンピュータに接続されているが、*ポート番号が見つからない*。
- XIAO が接続され、ポート番号が表示されるが、*プログラムのアップロードが失敗する*。

上記の2つの状況に遭遇した場合、XIAO を BootLoader モードにすることで、デバイスの認識失敗やアップロード失敗の問題の大部分を解決できます。具体的な方法は以下の通りです：

- **ステップ 1**. XIAO ESP32S3 の `BOOT` ボタンを離さずに押し続けます。
- **ステップ 2**. `BOOT` ボタンを押し続けたまま、データケーブルでコンピュータに接続します。コンピュータに接続した後、`BOOT` ボタンを離します。
- **ステップ 3**. **File > Examples > 01.Basics > Blink** プログラムをアップロードして、XIAO ESP32S3 の動作を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

### リセット

プログラムが異常に動作している場合、電源投入時に `Reset` を一度押すことで、XIAO にアップロードされたプログラムを再実行させることができます。

電源投入時に `BOOT` キーを押し続けてから `Reset` キーを一度押すことでも、BootLoader モードに入ることができます。

### 最初の Blink プログラムを実行する

ここまでで、XIAO ESP32S3 の機能とハードウェアについて十分理解できたと思います。次に、最もシンプルな Blink プログラムを例に、XIAO ESP32S3 の最初の点滅を実行してみましょう！

- **ステップ 1.** Arduino アプリケーションを起動します。
- **ステップ 2.** **File > Examples > 01.Basics > Blink** に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **ステップ 3.** ボードモデルを **XIAO ESP32S3** に選択し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

プログラムが正常にアップロードされると、以下の出力メッセージが表示され、XIAO ESP32S3 の右側にあるオレンジ色の LED が点滅していることを確認できます。

<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

おめでとうございます！XIAO ESP32S3 用のプログラムの作成とアップロード方法を学習しました！

:::note
LED は、XIAO ESP32S3 のユーザー LED ピンがハイレベルに設定されたときのみオフになり、ピンがローレベルに設定されたときのみオンになります。
:::

## バッテリーの使用

XIAO ESP32S3 シリーズには電源管理チップが内蔵されており、バッテリーを使用して XIAO ESP32S3 を独立して電源供給したり、XIAO ESP32S3 の USB ポートを通じてバッテリーを充電したりできます。

XIAO にバッテリーを接続したい場合は、認定された充電式 3.7V リチウムバッテリーの購入をお勧めします。バッテリーをはんだ付けする際は、プラス端子とマイナス端子を注意深く区別してください。電源のマイナス端子は USB ポートに最も近い側で、電源のプラス端子は USB ポートから離れた側です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::note
XIAO ESP32S3 のすべての GPIO ピンには独自の機能が割り当てられているため、バッテリーピン用に設定された GPIO はありません。これは、GPIO の1つのアナログ値を読み取ることで、ソフトウェアレベルでバッテリー電圧を取得できないことを意味します。必要に応じて、バッテリーのプラス端子とマイナス端子を2つのピンに接続してバッテリー電圧を測定することを検討できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::caution
バッテリー電源を使用する場合、5V ピンには電圧がかかりません。
:::

同時に、バッテリー充電用の赤いインジケーターライトを設計し、インジケーターライトの表示を通じてバッテリーの現在の充電状態をユーザーに知らせます。

1. XIAO ESP32S3 がバッテリーに接続されていない場合、Type-C ケーブルが接続されると赤いライトが点灯し、30秒後に消灯します。
2. バッテリーが接続され、Type-C ケーブルが充電のために接続されると、赤いライトが点滅します。
3. Type-C でバッテリーを完全に充電すると、赤いライトが消灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## UF2 BootLoader

一部のユーザーが UF2 ファイルを XIAO に直接フラッシュしたいと考えていることを理解しており、これによりプログラムの一括フラッシュプロセスが可能になります。ここではこの方法について説明します。

<Tabs>
<TabItem value="method1" label="方法 I" default>

:::note
この方法は現在 Windows システムでのみ利用可能です。
:::

**ステップ 1**: スクリプトのダウンロードと展開

必要なスクリプト zip ファイルをダウンロードし、ローカルマシンに展開します：

*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**ステップ 2**: BIN ファイルを UF2 ファイルに変換

Arduino プログラムをコンパイルして保存した後、バイナリ `BIN` ファイルをエクスポートできます。このファイルは Arduino プロジェクトフォルダに生成されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

`BIN` ファイルを先ほど展開した **xiaos3-bin2uf2** ディレクトリにコピーします。次に、**convert_uf2.bat** スクリプトを実行して UF2 ファイルを生成します。これには `bin` ファイルの名前が必要です。

**ステップ 3**: UF2 BootLoader モードに入る

XIAOをコンピュータに接続し、**boot_uf2.bat**スクリプトを実行します。XIAOがUSBドライブとしてコンピュータに表示され、UF2 BootLoaderモードに正常に入ったことを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4**: UF2ファイルをXIAO ESP32S3にコピー

XIAO ESP32S3のUSBドライブにアクセスし、変換されたUF2ファイルをコピーします。コピーが完了すると、XIAO USBドライブは自動的に消え、プログラムが実行を開始します。

:::tip

1. プログラムが正しくコンパイルされ、実行されていることを確認してください。そうでなければ、UF2ファイルが期待通りに実行されない可能性があります。
2. **xiaos3-bin2uf2**フォルダにBlinkのサンプルUF2ファイルが提供されています。アップロードすると、XIAO ESP32S3のオレンジ色のLEDが点滅します。このUF2ファイルをテストとして使用できます。

:::

**ステップ 5**: UF2 BootLoaderモードに再入力

別のUF2ファイルをアップロードするためにUF2 BootLoaderモードに再入力する必要がある場合は、**Reset**ボタンを押してから**Boot**ボタンを素早く押してください。boot_uf2.batスクリプトを再度実行する必要はありません。

:::note
Reset、次にBootを素早く押してください！
:::

</TabItem>

<TabItem value="method2" label="方法 II" >

このプロジェクトは、IDFからの2段階目ブートローダーのカスタマイズと、3段階目ブートローダーとしてのUF2ファクトリアプリケーションで構成されています。

**注意:** IDFは活発に開発されており、非常に頻繁に変更されるため、lib/esp-idfにサブモジュールとして含まれています。環境を正しく設定するために、そこでexportスクリプトを実行してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/adafruit/tinyuf2/tree/master/ports/espressif" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div>

</TabItem>
</Tabs>

## トラブルシューティング

### Q1: アップロードプログラムが失敗する/プログラムが異常に動作する/デバイスポートが見つからない場合はどうすればよいですか？

上記の問題が発生した場合は、まずXIAO ESP32S3のリセットボタンを押してプログラムを再実行してみることをお勧めします。問題が解決しない場合は、プログラムを再確認し、**[BootLoaderモード](#bootloader-mode)**で提供されている方法を読んでデバイスを復元してください。

### Q2: なぜ私のXIAOは角の丸い部分が平らでない問題があるのですか？これは品質の問題ですか？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

まず、これは品質の問題ではなく、XIAOの正常な機能に影響しないことを明記しておきます。

XIAO ESP32S3は高い統合性のため、すべてのXIAOの中で最も複雑なものであり、PCBは工場生産で組み合わせる必要があります。高い統合レベルのため、スプライシングボード接続は4つの角の丸い部分にのみ配置でき、これが画像の角の丸い部分が不均一になる問題を引き起こします。私たちはプロセスを改善して、この問題が後続の生産で解決されるよう努力します。

### Q3: リソースセクションで提供されているXIAO ESP32S3にファクトリファームウェアをフラッシュする方法は？

リソースセクションで提供されているスクリプトはWindowsをサポートしています。zipファイルをダウンロードすると、以下のファイルが見つかります：

<Tabs>
<TabItem value="normal" label="XIAO ESP32S3 ファクトリファームウェア" >

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
<TabItem value="sense" label="XIAO ESP32S3 Sense ファクトリファームウェア" >

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

ファームウェアをフラッシュするには、適切な`.bat`ファイルを実行するだけです。フラッシュプロセスが失敗した場合は、プロンプトからコマンドラインをコピーし、ファイルが配置されているターミナルで手動で実行してください。

## リソース

### Seeed Studio XIAO ESP32S3用

**ハードウェア設計**
- **📄[データシート]** [Espressif ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[回路図]** [XIAO ESP32-S3 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_V1.3_SCH_260115.pdf )
- **🗃️[PCB設計ファイル]** 
  - [XIAO ESP32-S3 KiCadプロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_V1.3_SCH&PCB_260115.7z )
- **🗃️[PCB設計ライブラリ]** 
  - [XIAO シリーズ KiCadフットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCHシンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO ESP32-S3 ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx )

**機械設計**
- **📄[2D寸法]** [XIAO ESP32-S3 DXF寸法](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf )
- **🗃️[3Dモデル]** [XIAO ESP32-S3 3Dモデル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip )

**ソフトウェア & ツール**
- **🗃️[ファクトリファームウェア]** [XIAO ESP32-S3 ファクトリファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip )

### Seeed Studio XIAO ESP32S3 Sense用

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
**ハードウェア設計**
- **📄[データシート]** [Espressif ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[回路図]** [XIAO ESP32-S3 Sense 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_V1.3_SCH_260115.pdf )
- **🗃️[PCB設計ファイル]** 
  - [XIAO ESP32-S3 Sense KiCadプロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_V1.3_SCH&PCB_260115.7z )
- **🗃️[PCB設計ライブラリ]** 
  - [XIAO シリーズ KiCadフットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCHシンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO ESP32-S3 Sense ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx )

**機械設計**
- **📄[2D寸法]** [XIAO ESP32-S3 Sense DXF寸法（上面）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf )
- **📄[2D寸法]** [XIAO ESP32-S3 Sense DXF寸法（底面）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf )
- **🗃️[3Dモデル]** [XIAO ESP32-S3 Sense 3Dモデル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip )
- **📄[3Dモデル]** [XIAO ESP32-S3 Sense 3Dプリント紫色エンクロージャ（上面）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp )
- **📄[3Dモデル]** [XIAO ESP32-S3 Sense 3Dプリント紫色エンクロージャ（底面）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp )

**ソフトウェア & ツール**
- **🗃️[ファクトリファームウェア]** [XIAO ESP32-S3 Sense ファクトリファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-firmware-20240814.zip )

### Seeed Studio XIAO ESP32S3 Plus用

**ハードウェア設計**
- **📄[データシート]** [Espressif ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[回路図]** [XIAO ESP32-S3 Plus 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.1_SCH_260115.pdf )
- **🗃️[PCB設計ファイル]** 
  - [XIAO ESP32-S3 Plus KiCadプロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.1_KiCad_260115.zip )
  - [XIAO Plus ベース（底面パッド引き出し付き）KiCadプロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip )
  - [XIAO Plus ベース（底面パッド引き出しなし）KiCadプロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip )
- **🗃️[PCB設計ライブラリ]** 
  - [XIAO シリーズ KiCadフットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCHシンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO ESP32-S3 Plus ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx )

**機械設計**
- **📄[2D寸法]** [XIAO ESP32-S3 Plus DXF寸法（上面）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf )
- **📄[2D寸法]** [XIAO ESP32-S3 Plus DXF寸法（底面）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf )
- **🔗[3Dモデル]** [XIAO ESP32-S3 Plus 3Dモデル](https://grabcad.com/library/seeed-studio-xiao-esp32s3-plus-1/files )

### Seeed Studio XIAO ESP32S3 Sense Camera用

**ハードウェア設計**
- **📄[データシート]** [OV3660 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[データシート]** [OV5640 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV5640_datasheet.pdf )
- **📄[データシート]** [OV2640 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV2640_datasheet.pdf )
## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

### その他

- **[STP]** [XIAO ESP32S3 Sense ハウジング設計（上部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32S3 Sense ハウジング設計（下部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

*残りのオープンソース資料は現在編集中ですので、お楽しみに！*

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
