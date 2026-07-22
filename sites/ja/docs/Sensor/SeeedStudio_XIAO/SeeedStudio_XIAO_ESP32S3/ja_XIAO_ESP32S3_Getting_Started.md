---
description: Seeed Studio XIAO ESP32-S3 シリーズの入門ガイド。
title: Seeed Studio XIAO ESP32-S3 シリーズ入門ガイド
keywords:
  - esp32s3
  - xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_getting_started
sku: 113991114, 113991115, 114010001, 102010634, 102010635, 102010671
type: gettingstarted
last_update:
  date: 05/14/2026
  author: Luki
createdAt: '2023-03-22'
updatedAt: '2026-07-08'
url: https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO ESP32-S3 シリーズ入門ガイド

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-S3</th>
  <th>Seeed Studio XIAO ESP32-S3 Sense</th>
  <th>Seeed Studio XIAO ESP32-S3 Plus</th>
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

Seeed Studio XIAO シリーズは、同様のハードウェア構成を共有する非常に小型の開発ボードで、そのサイズは文字通り親指サイズです。ここでのコードネーム「XIAO」は、その特徴の半分である「Tiny（小さい）」を表し、もう半分は「Puissant（強力）」を意味します。

Seeed Studio XIAO ESP32-S3 Sense は、カメラセンサ、デジタルマイク、SD カード対応機能を統合しています。組み込み ML の計算能力と撮像機能を組み合わせることで、この開発ボードはインテリジェントな音声およびビジョン AI を始めるための優れたツールとなります。

:::tip
**OV2640 カメラ**は生産終了となり、その後の XIAO ESP32-S3 Sense では **OV3660 カメラ**モデルが使用されています。ただし、カメラ用の Wiki サンプルコードは引き続き有効です。
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
    <td colspan="3">ESP32-S3R8<br/>Xtensa LX7 デュアルコア 32-bit プロセッサ、最大 240 MHz 動作</td>
  </tr>
  <tr>
    <th>無線</th>
    <td colspan="3">完全な 2.4GHz Wi-Fi サブシステム<br/>Bluetooth Low Energy 5.0 / Bluetooth Mesh</td>
  </tr>
  <tr>
    <th>内蔵センサ</th>
    <td>/</td>
    <td>1x OV3660 カメラセンサ<br/>1x デジタルマイク</td>
    <td>/</td>
  </tr>
  <tr>
    <th>メモリ</th>
    <td>オンチップ 8MB PSRAM &amp; 8MB Flash</td>
    <td>オンチップ 8MB PSRAM &amp; 8MB Flash<br/>オンボード SD カードスロット、32GB FAT 対応</td>
    <td>オンチップ 8MB PSRAM &amp; 16MB Flash</td>
  </tr>
  <tr>
    <th>インターフェース</th>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>9x ADC<br/>1x ユーザー LED<br/>1x 充電 LED<br/>1x リセットボタン<br/>1x ブートボタン</td>
    <td>1x UART<br/>1x IIC<br/>1x IIS<br/>1x SPI<br/>11x GPIO (PWM)<br/>9x ADC<br/>1x ユーザー LED<br/>1x 充電 LED<br/>1x B2B コネクタ（追加 GPIO×2）<br/>1x リセットボタン<br/>1x ブートボタン</td>
    <td>2x UART<br/>1x IIC<br/>1x IIS<br/>2x SPI<br/>18x GPIO (PWM)<br/>9x ADC<br/>1x ユーザー LED<br/>1x 充電 LED<br/>1x B2B コネクタ<br/>1x リセットボタン<br/>1x ブートボタン</td>
  </tr>
  <tr>
    <th>寸法</th>
    <td>21 x 17.8mm</td>
    <td>21 x 17.8 x 15mm（拡張ボード含む）</td>
    <td>21 x 17.8mm</td>
  </tr>
  <tr>
    <th>電源（代表値）</th>
    <td colspan="3">入力電圧 (Type-C): 5V<br/>入力電圧 (BAT): 3.7V</td>
  </tr>
  <tr>
    <th rowspan="4">消費電力</th>
    <td>回路動作電圧:<br/>- Type-C: 5V@19mA<br/>- BAT: 3.8V@22mA</td>
    <td>回路動作電圧:<br/>`- Type-C: 5V@38.3mA`<br/>`- BAT: 3.8V@43.2mA (with expansion board)`</td>
    <td>回路動作電圧:<br/>- Type-C: 5V@28mA<br/>- BAT: 3.8V@35mA</td>
  </tr>
  <tr>
    <td>/</td>
    <td>Webcam Web アプリケーション:<br/>- Type-C:<br/>-- 平均消費電力: 5V/~140mA<br/>-- 最大消費電力（画像キャプチャ時）: 5V/~347mA<br/>- バッテリ:<br/>-- 平均消費電力: 3.8V/~155mA<br/>-- 最大消費電力（画像キャプチャ時）: 3.8V/~366mA</td>
    <td>/</td>
  </tr>
  <tr>
    <td>/</td>
    <td>マイク録音 &amp; SD カード書き込み:<br/>- Type-C:<br/>-- 平均消費電力: 5V/54.58mA<br/>-- 最大消費電力: 5V/86.7mA<br/>- バッテリ:<br/>-- 平均消費電力: 3.8V/64.5mA<br/>-- 最大消費電力: 3.8V/109.3mA</td>
    <td>/</td>
  </tr>
  <tr>
    <td>50mA（急速） / 3.8mA（トリクル）</td>
    <td>/</td>
    <td>充電電流:<br/>100mA（急速） / 0.9mA（トリクル）</td>
  </tr>
  <tr>
    <th>低消費電力モード（代表値）<br/>(供給電源: 3.8V)</th>
    <td>Modem-sleep モード: 27mA<br/>Light-sleep モード: 2mA<br/>Deep Sleep モード: 14μA</td>
    <td>Modem-sleep モード: 44mA<br/>Light-sleep モード: 5mA<br/>Deep Sleep モード: 3mA</td>
    <td>Modem-sleep モード: 3.8V/31.6 mA<br/>Light-sleep モード: 3.8V/2.45 mA<br/>Deep Sleep モード: 3.8V/33.51 μA</td>
  </tr>
  <tr>
    <th>Wi-Fi 有効時消費電力（代表値）</th>
    <td>Active モード: 100 mA</td>
    <td>Active モード: 110 mA（拡張ボード使用時）</td>
    <td>Active モード: 81 mA</td>
  </tr>
  <tr>
    <th>BLE 有効時消費電力（代表値）</th>
    <td>Active モード: 85 mA</td>
    <td>Active モード: 102 mA（拡張ボード使用時）</td>
    <td>Active モード: 101 mA</td>
  </tr>
  <tr>
    <th>動作温度</th>
    <td colspan="3">-20°C ~ 65°C</td>
  </tr>
</table>

### 特長

- **高性能 MCU ボード**: 最大 240 MHz で動作する ESP32S3 32-bit デュアルコア Xtensa プロセッサチップを搭載し、複数の開発ポートを実装、Arduino / MicroPython 対応
- **高度な機能**（Sense 向け）: 1600x1200 解像度対応の着脱式 **OV2640 カメラセンサ**および 2048x1536 解像度対応の **OV3660 カメラセンサ**を搭載し、OV5640 カメラセンサと互換性があり、さらにデジタルマイクを統合
- **入念な電源設計**: リチウムバッテリ充電管理機能を備え、4 種類の電力消費モードを提供し、最小 14μA の Deep Sleep モードを実現
- **多彩な可能性を広げる大容量メモリ**: 8MB PSRAM と 8MB FLASH（**Plus** バージョンでは 16MB）を搭載し、外部 32GB FAT メモリに対応する SD カードスロットをサポート（XIAO ESP32-S3 のみ）
- **優れた RF 性能**: 2.4GHz Wi-Fi と BLE のデュアル無線通信をサポートし、U.FL アンテナ接続時には 100m 以上の遠距離通信に対応
- **親指サイズのコンパクト設計**: 21 x 17.8mm のサイズで、XIAO のクラシックなフォームファクタを採用し、ウェアラブルデバイスのようなスペース制約のあるプロジェクトに最適

<table align="center">
 <tr>
     <th>項目</th>
     <th style={{width:300, height:'auto'}}>OV3660 カメラ</th>
        <th style={{width:300, height:'auto'}}>OV2640 カメラ</th>
 </tr>
    <tr>
        <th>最大消費電力（640*480）</th>
        <td align="center">Active モード: <strong>~ 0.6A</strong></td>
        <td align="center">Active モード: <strong>~ 0.65A</strong></td>
    </tr>
    <tr>
        <th>平均消費電力（640*480）</th>
        <td align="center">Active モード: <strong>~ 0.12A</strong></td>
        <td align="center">Active モード: <strong>~ 0.24A</strong></td>
    </tr>
    <tr>
        <th>最小消費電力（640*480）</th>
        <td align="center">Active モード: <strong>~ 0.12A</strong></td>
        <td align="center">Active モード: <strong>~ 0.15A</strong></td>
    </tr>
</table>

## ハードウェア概要

始める前に、この製品の基本的なパラメータを把握しておくことが非常に重要です。次の表は、Seeed Studio XIAO ESP32-S3 の特性に関する情報を示しています。

<Tabs>
<TabItem value="ESP32S3" label="XIAO ESP32-S3" default>

### XIAO ESP32-S3 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32-S3_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO ESP32-S3 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32-S3_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**ピンマップ**

| XIAO ピン               | 機能             | チップピン | 代替機能              | 説明                                   |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | 電源入力/出力                          |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | 電源出力                               |
| D0                      | Analog           | GPIO1     | TOUCH1             | GPIO, ADC                            |
| D1                      | Analog           | GPIO2     | TOUCH2             | GPIO, ADC                            |
| D2                      | Analog           | GPIO3     | TOUCH3             | GPIO, ADC                            |
| D3                      | Analog           | GPIO4     | TOUCH4             | GPIO, ADC                            |
| D4                      | Analog, SDA      | GPIO5     | TOUCH5             | GPIO, I2C データ, ADC                 |
| D5                      | Analog, SCL      | GPIO6     | TOUCH6             | GPIO, I2C クロック, ADC               |
| D6                      | TX               | GPIO43    |                    | GPIO, UART 送信                       |
| D7                      | RX               | GPIO44    |                    | GPIO, UART 受信                       |
| D8                      | Analog, SCK      | GPIO7     | TOUCH7             | GPIO, SPI クロック, ADC               |
| D9                      | Analog, MISO     | GPIO8     | TOUCH8             | GPIO, SPI データ, ADC                 |
| D10                     | Analog, MOSI     | GPIO9     | TOUCH9             | GPIO, SPI データ, ADC                 |
| D11                     | Analog           | GPIO42    | TOUCH12            | GPIO, ADC                            |
| D12                     | Analog           | GPIO41    | TOUCH13            | GPIO, ADC                            |
| MTDO                    |                  | GPIO40    |                    | JTAG                                 |
| MTDI                    |                  | GPIO41    |                    | JTAG, ADC                            |
| MTCK                    |                  | GPIO39    |                    | JTAG, ADC                            |
| MTMS                    |                  | GPIO42    |                    | JTAG, ADC                            |
| Reset                   |                  | CHIP_PU   |                    |                                      |
| Boot                    |                  | GPIO0     |                    | ブートモードに入る                     |
| U.FL-R-SMT1             |                  | LNA_IN    |                    | UFL アンテナ                          |
| CHARGE_LED              |                  |           |                    | CHG-LED                              |
| USER_LED                |                  | GPIO21    |                    | ユーザー用 LED                        |

</TabItem>
<TabItem value="ESP32S3Sense" label="XIAO ESP32-S3 Sense">

### XIAO ESP32-S3 Sense 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32-S3_Sense_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO ESP32-S3 Sense 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32-S3_Sense_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**ピンマップ**

| XIAO ピン               | 機能             | チップピン | 代替機能             | 説明                                   |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | 電源入力/出力                         |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | 電源出力                              |
| D0                      | アナログ         | GPIO1     | TOUCH1             | GPIO、ADC                            |
| D1                      | アナログ         | GPIO2     | TOUCH2             | GPIO、ADC                            |
| D2                      | アナログ         | GPIO3     | TOUCH3             | GPIO、ADC                            |
| D3                      | アナログ         | GPIO4     | TOUCH4             | GPIO、ADC                            |
| D4                      | アナログ、SDA    | GPIO5     | TOUCH5             | GPIO、I2C データ、ADC                |
| D5                      | アナログ、SCL    | GPIO6     | TOUCH6             | GPIO、I2C クロック、ADC              |
| D6                      | TX               | GPIO43    |                    | GPIO、UART 送信                      |
| D7                      | RX               | GPIO44    |                    | GPIO、UART 受信                      |
| D8                      | アナログ、SCK    | GPIO7     | TOUCH7             | GPIO、SPI クロック、ADC              |
| D9                      | アナログ、MISO   | GPIO8     | TOUCH8             | GPIO、SPI データ、ADC                |
| D10                     | アナログ、MOSI   | GPIO9     | TOUCH9             | GPIO、SPI データ、ADC                |
| D11                     | アナログ         | GPIO42    | TOUCH12            | GPIO、ADC                            |
| D12                     | アナログ         | GPIO41    | TOUCH13            | GPIO、ADC                            |
| MTDO                    |                  | GPIO40    |                    | JTAG                                 |
| MTDI                    |                  | GPIO41    |                    | JTAG、ADC                            |
| MTCK                    |                  | GPIO39    |                    | JTAG、ADC                            |
| MTMS                    |                  | GPIO42    |                    | JTAG、ADC                            |
| Reset                   |                  | CHIP_PU   |                    |                                      |
| Boot                    |                  | GPIO0     |                    | ブートモードに入る                   |
| U.FL-R-SMT1             |                  | LNA_IN    |                    | UFL アンテナ                         |
| CHARGE_LED              |                  |           |                    | CHG-LED                              |
| USER_LED                |                  | GPIO21    |                    | ユーザー用 LED                        |
| Digital microphone_CLK  |                  | GPIO42    |                    | マイク用 PDM クロックピン            |
| Digital microphone_DATA |                  | GPIO41    |                    | マイク用 PDM データピン              |
| Onboard SD Card__CS     |                  | GPIO3     |                    | SD カードチップセレクトピン          |
| Onboard SD Card_SCK     |                  | GPIO7     |                    | SD カードクロックピン                |
| Onboard SD Card_MISO    |                  | GPIO8     |                    | SD カードデータ入力ピン              |
| Onboard SD Card Slot_MOSI|                 | GPIO9     |                    | SD カードデータ出力ピン              |

**カメラ**

| チップピン | 説明                                   |
| :-------: | :---------------------------------- |
| GPIO10    | カメラ関連のクロックピン             |
| GPIO11    | カメラ映像データピン (Y8)            |
| GPIO12    | カメラ映像データピン (Y7)            |
| GPIO13    | カメラピクセルクロックピン           |
| GPIO14    | カメラ映像データピン (Y6)            |
| GPIO15    | カメラ映像データピン (Y2)            |
| GPIO16    | カメラ映像データピン (Y5)            |
| GPIO17    | カメラ映像データピン (Y3)            |
| GPIO18    | カメラ映像データピン (Y4)            |
| GPIO40    | カメラ用 I2C データピン              |
| GPIO39    | カメラ用 I2C クロックピン            |
| GPIO38    | カメラ垂直同期ピン                   |
| GPIO47    | カメラ水平同期ピン                   |
| GPIO48    | カメラ映像データピン (Y9)            |

</TabItem>
<TabItem value="ESP32S3Plus" label="XIAO ESP32-S3 Plus">

### XIAO ESP32-S3 Plus 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32-S3_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO ESP32-S3 Plus 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32-S3_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**ピンマップ**

| XIAO ピン               | 機能             | チップピン | 代替機能             | 説明                                   |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | 電源入力/出力                         |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | 電源出力                              |
| D0                      | アナログ         | GPIO1     |                    | GPIO、ADC                            |
| D1                      | アナログ         | GPIO2     |                    | GPIO、ADC                            |
| D2                      | アナログ         | GPIO3     |                    | GPIO、ADC                            |
| D3                      | アナログ         | GPIO4     |                    | GPIO、ADC                            |
| D4                      | アナログ、SDA    | GPIO5     |                    | GPIO、I2C データ、ADC                |
| D5                      | アナログ、SCL    | GPIO6     |                    | GPIO、I2C クロック、ADC              |
| D6                      | TX               | GPIO43    |                    | GPIO、UART 送信                      |
| D7                      | RX               | GPIO44    |                    | GPIO、UART 受信                      |
| D8                      | アナログ、SCK    | GPIO7     |                    | GPIO、SPI クロック、ADC              |
| D9                      | アナログ、MISO   | GPIO8     |                    | GPIO、SPI データ、ADC                |
| D10                     | アナログ、MOSI   | GPIO9     |                    | GPIO、SPI データ、ADC                |
| D11                     |                  | GPIO38    |                    | GPIO、ADC                            |
| D12                     |                  | GPIO39    |                    | GPIO、ADC                            |
| D13                     |                  | GPIO40    |                    |                                      |
| D14                     |                  | GPIO41    |                    |                                      |
| D15                     |                  | GPIO42    |                    |                                      |
| D16                     |                  | GPIO10    |                    |                                      |
| D17                     |                  | GPIO13    |                    |                                      |
| D18                     |                  | GPIO12    |                    |                                      |
| D19                     |                  | GPIO11    |                    |                                      |
| MTDO                    |                  | GPIO40    |                    | JTAG                                 |
| MTDI                    |                  | GPIO41    |                    | JTAG、ADC                            |
| MTCK                    |                  | GPIO39    |                    | JTAG、ADC                            |
| MTMS                    |                  | GPIO42    |                    | JTAG、ADC                            |
| Reset                   |                  | CHIP_PU   |                    |                                      |
| Boot                    |                  | GPIO0     |                    | ブートモードに入る                   |
| ADC_BAT                 |                  | GPIO10    |                    | BAT 電圧値を読み取る                 |
| U.FL-R-SMT1             |                  | LNA_IN    |                    | UFL アンテナ                         |
| CHARGE_LED              |                  | VCC_3V3   |                    | CHG-LED                              |
| USER_LED                |                  | GPIO21    |                    | ユーザー用 LED                        |

</TabItem>
</Tabs>

:::caution
- XIAO ESP32-S3 は GPIO41 と GPIO42 をピン A11 と A12 に割り当てていますが、ESP32-S3 チップの特性により、ピン A11 と A12 は ADC 機能をサポートしません。必ず両者を区別して使用してください。

- XIAO ESP32-S3 Plus の B2B コネクタは [Wio-SX1262 extension board](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) とは互換性がありますが、プラグイン式カメラセンサーボードとは互換性がありません。
:::

### 電源ピン

- 5V - これは USB ポートからの 5V 出力です。これを電圧入力として使用することもできますが、外部電源とこのピンの間には、アノードをバッテリー側、カソードを 5V ピン側として、何らかのダイオード（ショットキー、信号用、電力用）を必ず挿入する必要があります。
- 3V3 - これはオンボードレギュレータからの安定化出力です。700mA まで取り出すことができます。
- GND - 電源／データ／信号用グラウンド

### ストラップピン

各起動時またはリセット時に、チップはいくつかの初期設定パラメータ（どのブートモードでチップを起動するか、フラッシュメモリの電圧など）を必要とします。これらのパラメータはストラップピンを介して渡されます。リセット後、ストラップピンは通常の IO ピンとして動作します。

チップリセット時に、指定されたストラップピンによって制御されるパラメータは次のとおりです。

- **チップのブートモード** – GPIO0 および GPIO46
- **VDD_SPI 電圧** – GPIO45
- **ROM メッセージ出力** – GPIO46
- **JTAG 信号ソース** – GPIO3

GPIO0、GPIO45、および GPIO46 は、チップリセット時にチップ内部の弱いプルアップ／プルダウン抵抗に接続されています。
これらの抵抗によってストラップピンのデフォルトのビット値が決まります。また、ストラップピンが外部の高インピーダンス回路に接続されている場合も、これらの抵抗によってビット値が決まります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/110.png" style={{width:400, height:'auto'}}/></div>

ビット値を変更するには、ストラップピンを外部のプルダウン／プルアップ抵抗に接続する必要があります。ESP32-S3 をホスト MCU によるデバイスとして使用する場合、ストラップピンの電圧レベルはホスト MCU によって制御することもできます。

すべてのストラップピンにはラッチがあります。システムリセット時に、ラッチはそれぞれのストラップピンのビット値をサンプリングし、チップの電源が切れるかシャットダウンされるまで保持します。ラッチの状態は他の方法では変更できません。これにより、ストラップピンの値はチップ動作中ずっと利用可能であり、リセット後はピンを通常の IO ピンとして解放できます。

ストラップピンのタイミング要件としては、セットアップ時間とホールド時間などのパラメータがあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/111.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/112.png" style={{width:600, height:'auto'}}/></div>

## 入門ガイド

XIAO ESP32-S3 をすばやく使い始められるように、以下のハードウェアおよびソフトウェアの準備を読んで、XIAO の準備を行ってください。

1. **XIAO ESP32-S3**

通常版にプリセットされている工場出荷時プログラムは、タッチピン点灯プログラムです。XIAO に電源を入れ、いくつかのピンに触れると、オレンジ色のユーザーインジケーターが点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

2. **XIAO ESP32-S3 Sense**

XIAO ESP32-S3 Sense には、WebCam サンプルプログラムがプリインストールされた状態で出荷されます。パッケージ内のアンテナを適切に取り付けて電源を入れることで、このプログラムを使用できます。詳細については、このプログラムに関する Wiki を参照してください。

- [Video Streaming](https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage#project-ii-video-streaming)

:::note
**2025 年 6 月**以降、XIAO ESP32-S3 Sense の工場出荷時ファームウェアでは、次の認証情報を持つデフォルトの AP Wi‑Fi が有効になっています。

- **SSID:** `XIAO_ESP32S3_Sense`
- **Password:** `seeedstudio`
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

### ハードウェアの準備

#### ピンヘッダのはんだ付け

XIAO ESP32-S3 はデフォルトではピンヘッダが取り付けられていない状態で出荷されます。拡張ボードやセンサーに接続できるように、ピンヘッダを自分で用意し、XIAO の対応するピンにはんだ付けする必要があります。

XIAO ESP32-S3 は非常に小型であるため、ピンヘッダをはんだ付けする際は、異なるピン同士をくっつけないこと、シールドや他の部品に半田が付着しないことに注意してください。そうしないと、XIAO が短絡したり正常に動作しなくなったりする可能性があり、その結果生じた損害はユーザーの責任となります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### アンテナの取り付け

XIAO ESP32-S3 の表面左下には、独立した「WiFi/BT Antenna Connector」があります。より良い WiFi／Bluetooth 信号を得るために、パッケージ内のアンテナを取り出し、このコネクタに取り付ける必要があります。

アンテナの取り付けにはちょっとしたコツがあります。いきなり強く押し込もうとすると、なかなかはまらず、指も痛くなってしまいます。正しい取り付け方は、まずアンテナコネクタの片側をコネクタブロックに差し込み、次にもう一方の側を少し押し下げると、アンテナがカチッとはまります。

アンテナを取り外すときも同様で、力任せに真っ直ぐ引き抜かないでください。片側から持ち上げるように力を加えると、アンテナは簡単に外れます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### 拡張ボードの取り付け（Sense 用）

XIAO ESP32-S3 Sense を購入した場合は、拡張ボードも同梱されているはずです。この拡張ボードには、1600x1200 OV2640／2048x1536 OV3660 カメラセンサー、オンボード SD カードスロット、デジタルマイクが搭載されています。

XIAO ESP32-S3 Sense に拡張ボードを取り付けることで、拡張ボード上の機能を使用できます。

拡張ボードの取り付けはとても簡単で、拡張ボード上のコネクタを XIAO ESP32-S3 上の B2B コネクタに合わせ、しっかり押し込んで「カチッ」と音がすれば、取り付け完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

現在、XIAO ESP32-S3 Sense と完全互換の高性能カメラ OV5640 を新たにラインナップしており、これを購入すればカメラを交換して使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

ov5640 の詳細なパラメータ情報が必要な場合は、以下の表を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Wiki にあるカメラ関連のすべてのプログラムは、OV5640、OV2640、および OV3660 のいずれのカメラにも対応しています。
:::

##### 拡張ボードの取り外し

Sense 拡張ボードを XIAO ESP32-S3 から分離する必要がある場合は、取り付け時と同じ側面からのアプローチを、逆の手順で行ってください。

**ステップ 1.** 片方の手で XIAO ESP32-S3 をしっかり持ち、もう一方の手で拡張ボードを持ちます。

**ステップ 2.** ボードのペアの**側面**から軽く力を加え、拡張ボードを B2B コネクタからスライドさせて外します。まず片側のエッジに沿って作業し、その後コネクタ全体が徐々に外れるようにします。

**ステップ 3.** 拡張ボードが外れたら、平らで静電気対策された面に置いてください。

<div style={{textAlign:'center'}}>
<iframe style={{width:'80%', aspectRatio:'16/9'}} src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiao-s3_exp.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::caution ボードを垂直方向にこじ開けないでください
拡張ボードを**真上**または**真下**に引き抜いたり、本のように開くようにねじったり揺すったりしないでください。XIAO と拡張ボードは **B2B（board-to-board）コネクタ**で接続されており、垂直方向にこじるとピンが曲がったり、コネクタハウジングが割れたり、XIAO 側の B2B ソケットが破損したりするおそれがあります。

常に、コネクタに対して平行な動きになるように、**側面**から押すかスライドさせることでボードを分離してください。固くて動かないと感じた場合は、角度を再確認し、上方向の力を強めるのではなく、一定の側面方向の力を加えるようにしてください。
:::

#### 強化ヒートシンクの取り付け

アップグレードされたヒートシンクを取り付けて、XIAO ESP32-S3 Sense の冷却性能を最適化しましょう。この新しい設計は、特にカメラ使用時のような高負荷動作中に、従来モデルで見られた冷却不足を解消するために作られました。元のヒートシンクでは放熱が不十分であるというフィードバックを受け、より効果的なソリューションが開発されました。

<details>
<summary>クリックして性能比較を見る</summary>

テストの結果、アップグレードされたヒートシンクは、元の構成と比べて次のような利点があることが示されました。

| テストサンプル              | 背面の最高温度              |
| --------------------- | ---------------------------- |
| **ヒートシンクなし**        | 63.6°C                       |
| **デュアルヒートシンクあり** | 53.5°C (🔻10°C)           |

***テスト詳細:***

- **環境**: 空調の効いた部屋（約 27°C）
- **温度測定ツール**: OMEGA CL3515R 熱電対
- **測定位置**: XIAO ESP32-S3 の背面サーマルパッド
- **テスト用ファームウェア**: WebCamera
- **電源**: Type-C 5V
- **動作時間**: 1 時間

***主な結果:***

- ヒートシンクを装着したデバイスは 1 時間以上安定して動作し、性能の低下なしに最高温度に達しました。
- WebCamera を SVGA (800x600) モードでテストした際:
  - XIAO ESP32-S3 はスムーズに動作しました。
  - ビデオ出力は滑らかでした。
  - 温度が大幅に低下し、フレーム落ちや切断もなく、信頼性の高い動作が確保されました。

</details>

***インストールを開始する前に、次のものを用意してください:***

- 選択したヒートシンク（シングルまたはデュアル）
- 清潔な ESP32S3

作業を始める前に、デバイスの電源が切れており、すべての電源から取り外されていることを確認してください。

:::tip notice

***購入時の注意:*** XIAO ESP32-S3 Sense を購入する際、**カメラを搭載したモデルのみ**ヒートシンクが付属していることに注意してください。カメラが付属していないバージョンの ESP32S3 をお持ちの場合は、ヒートシンクを別途購入する必要があります。

***取り付けのヒント:*** ヒートシンクは、主な発熱源である ESP32S3 チップの真上にあるサーマル PAD を優先的に覆うようにしてください。適切に位置合わせすることで放熱性能が最適化されます。また、BAT ピンはできるだけ塞がないように注意してください。
:::

では、インストール手順を始めましょう:

***ステップ 1. ヒートシンクの準備:***
まず、ヒートシンクの保護カバーを取り外し、熱伝導性の粘着面を露出させます。これにより、ヒートシンクを ESP32S3 チップにしっかりと取り付ける準備が整います。

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/heat-sink.jpg" style={{width:400, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/remove-heat-sink-cover.jpg" style={{width:400, height:'auto'}}/></div></td>

***ステップ 2. ヒートシンクの取り付け:***

<Tabs>
  <TabItem value="single" label="シングルヒートシンク" default>

この小型でコンパクトなオプションは通常使用には十分で、すべての GPIO ピンへ完全にアクセスできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-single-heat-sink-install.jpg" style={{width:400, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="dual" label="デュアルヒートシンク">

大型のオプションは冷却性能に優れており、高負荷タスクに最適ですが、一部の GPIO ピンへのアクセスが制限される場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-dual-heat-sink-install.png" style={{width:400, height:'auto'}}/></div>

:::note
XIAO ESP32-S3 Plus の BAT ピンを使用したい場合、このケースのデュアルヒートシンクは適していません。
:::

  </TabItem>
</Tabs>

***ステップ 3: 最終確認とテスト***

取り付け後、ショートの危険がないよう、すべてが確実に固定されていることを確認してください。ヒートシンクが正しく位置合わせされ、しっかりと取り付けられているかを確認します。

### ソフトウェアの準備

XIAO ESP32-S3 に推奨される開発ツールは Arduino IDE です。そのため、ソフトウェアの準備として Arduino のインストールを完了する必要があります。

:::tip
初めて Arduino を使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

- **ステップ 1.** お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

- **ステップ 2.** Arduino アプリケーションを起動します。

- **ステップ 3.** Arduino IDE に ESP32 ボードパッケージを追加します。

<Tabs>
<TabItem value='For Windows'>

**File > Preferences** に移動し、**"Additional Boards Manager URLs"** に以下の URL を入力します:

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

**Tools > Board > Boards Manager...** に移動し、検索ボックスに **esp32** と入力して、最新バージョンの **esp32** を選択し、インストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32-S3 用のオンボードパッケージは、バージョン **2.0.8** 以上が必要です。
:::

- **ステップ 4.** ボードとポートを選択します。

Arduino IDE の上部で、ポートを直接選択できます。通常は COM3 以降になります（**COM1** と **COM2** は通常、ハードウェアシリアルポート用に予約されています）。

</TabItem>
<TabItem value='For Mac OS'>

**Arduino IDE > Preferences** に移動し、**"Additional Boards Manager URLs"** に以下の URL を入力します:

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

**Tools > Board > Boards Manager...** に移動し、検索ボックスに **esp32** と入力して、最新バージョンの **esp32** を選択し、インストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32-S3 用のオンボードパッケージは、バージョン **2.0.8** 以上が必要です。
:::

- **ステップ 4.** ボードとポートを選択します。

Arduino IDE の上部で、ポートを直接選択できます。名前に "usbmodem" または "usbserial" を含むものになるはずです。わからない場合は、一度抜き差しして、どのポートが消えるかを確認してください。

</TabItem>
</Tabs>

<!-- :::tip
We have now submitted a merge request to ESP32 and will be able to search and use XIAO ESP32-S3 in the Arduino IDE when ESP32 releases the next version of the on-board package update.

Until then, you can manually add the XIAO ESP32-S3 on-board package to the Arduino directory to use it.
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
<TabItem value="(Sense)" label="XIAO ESP32-S3 (Sense) 用" default>

また、左側の開発ボードで **xiao** を検索し、**XIAO_ESP32S3** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Plus" label="XIAO ESP32-S3 Plus 用" default>

まもなくリリースされる予定です。今後のアップデートをお待ちください。

</TabItem>
</Tabs>

これで準備が整い、XIAO ESP32-S3 向けのプログラムを作成し、コンパイルおよび書き込みを開始できます。

### BootLoader モード

誤ったプログラムを使用すると、XIAO のポートが認識されなくなったり、正しく動作しなくなることがあります。よくある問題としては次のようなものがあります:

- XIAO をコンピュータに接続しても、*ポート番号* が見つからない。
- XIAO は接続されておりポート番号も表示されるが、*プログラムの書き込みに失敗する*。

上記の 2 つの状況に遭遇した場合、XIAO を BootLoader モードにすることで、認識されないデバイスや書き込み失敗の問題のほとんどを解決できます。具体的な方法は次のとおりです:

- **ステップ 1**. XIAO ESP32-S3 上の `BOOT` ボタンを押し続けたままにします。
- **ステップ 2**. `BOOT` ボタンを押したまま、データケーブルでコンピュータに接続します。コンピュータに接続した後で `BOOT` ボタンを離します。
- **ステップ 3**. **File > Examples > 01.Basics > Blink** プログラムを書き込み、XIAO ESP32-S3 の動作を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

### リセット

プログラムが異常に動作した場合、電源投入中に `Reset` を一度押すことで、XIAO にアップロード済みのプログラムを再実行させることができます。

電源投入時に `BOOT` キーを押し続け、その後 `Reset` キーを一度押すと、BootLoader モードに入ることもできます。

### 最初の Blink プログラムを実行する

ここまでで、XIAO ESP32-S3 の機能とハードウェアについて十分理解できたと思います。次に、最も簡単な Blink プログラムを例にして、XIAO ESP32-S3 で最初の点滅を行ってみましょう！

- **Step 1.** Arduino アプリケーションを起動します。
- **Step 2.** **File > Examples > 01.Basics > Blink** に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Step 3.** ボードモデルを **XIAO ESP32-S3** に選択し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

プログラムが正常にアップロードされると、次のような出力メッセージが表示され、XIAO ESP32-S3 の右側にあるオレンジ色の LED が点滅しているのを確認できます。

<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

おめでとうございます。これで XIAO ESP32-S3 用のプログラムの作成とアップロード方法を習得しました！

:::note
XIAO ESP32-S3 のユーザー LED ピンが High レベルに設定されているときのみ LED は消灯し、Low レベルに設定されているときのみ点灯します。
:::

## バッテリーの使用

XIAO ESP32-S3 シリーズには電源管理チップが内蔵されており、バッテリーを使用して XIAO ESP32-S3 に単独で給電したり、XIAO ESP32-S3 の USB ポートを介してバッテリーを充電したりすることができます。

XIAO 用にバッテリーを接続したい場合は、認証済みの充電式 3.7V リチウムバッテリーの購入をお勧めします。バッテリーをはんだ付けする際は、必ず正極と負極を区別してください。電源の負極は USB ポートに最も近い側であり、電源の正極は USB ポートから離れた側になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::note
XIAO ESP32-S3 のすべての GPIO ピンにはそれぞれ固有の機能が割り当てられているため、バッテリーピン用に設定された GPIO はありません。つまり、いずれかの GPIO のアナログ値を読み取ることで、ソフトウェアレベルでバッテリー電圧を取得することはできません。必要に応じて、バッテリーの正極と負極を 2 本のピンに接続して、バッテリー電圧を測定することを検討してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::caution
バッテリー電源を使用している場合、5V ピンには電圧が出力されません。
:::

同時に、バッテリー充電用の赤色インジケーターライトを設計しており、このインジケーターの表示によって、充電中のバッテリーの現在の状態をユーザーに知らせます。

1. XIAO ESP32-S3 にバッテリーが接続されていない場合、Type-C ケーブルを接続すると赤色のランプが点灯し、30 秒後に消灯します。
2. バッテリーを接続し、Type-C ケーブルを接続して充電しているときは、赤色のランプが点滅します。
3. Type-C を接続してバッテリーが満充電になると、赤色のランプは消灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## UF2 BootLoader

一部のユーザーは、UF2 ファイルを直接 XIAO に書き込んで、プログラムの一括書き込みを行いたいと考えていることを理解しています。ここではその方法について説明します。

<Tabs>
<TabItem value="method1" label="Method I" default>

:::note
この方法は現在、Windows システムでのみ利用可能です。
:::

**Step 1**: スクリプトのダウンロードと解凍

必要なスクリプトの zip ファイルをダウンロードし、ローカルマシンに解凍します：

*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**Step 2**: BIN ファイルを UF2 ファイルに変換する

Arduino プログラムをコンパイルして保存した後、バイナリ `BIN` ファイルをエクスポートできます。このファイルは Arduino プロジェクトフォルダ内に生成されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

先ほど解凍した **xiaos3-bin2uf2** ディレクトリに `BIN` ファイルをコピーします。次に、**convert_uf2.bat** スクリプトを実行して UF2 ファイルを生成します。このとき、`bin` ファイルの名前が必要になります。

**Step 3**: UF2 BootLoader モードに入る

XIAO をコンピュータに接続し、**boot_uf2.bat** スクリプトを実行します。XIAO はコンピュータ上で USB ドライブとして表示され、UF2 BootLoader モードに正常に入ったことを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**Step 4**: UF2 ファイルを XIAO ESP32-S3 にコピーする

XIAO ESP32-S3 の USB ドライブにアクセスし、変換した UF2 ファイルをコピーします。コピーが完了すると、XIAO の USB ドライブは自動的に消え、プログラムが起動します。

:::tip

1. プログラムが正しくコンパイルされ、正常に動作していることを確認してください。そうでない場合、UF2 ファイルは期待どおりに実行されない可能性があります。
2. Blink 用のサンプル UF2 ファイルが **xiaos3-bin2uf2** フォルダ内に用意されています。これをアップロードすると、XIAO ESP32-S3 のオレンジ色の LED が点滅します。この UF2 ファイルをテストとして使用できます。

:::

**Step 5**: UF2 BootLoader モードに再度入る

別の UF2 ファイルをアップロードするために UF2 BootLoader モードに再度入る必要がある場合は、**Reset** ボタンを素早く押してから **Boot** ボタンを押してください。boot_uf2.bat スクリプトを再度実行する必要はありません。

:::note
Reset を押してから Boot を、素早く押してください！
:::

</TabItem>

<TabItem value="method2" label="Method II" >

このプロジェクトは、IDF からカスタマイズした第 2 段階ブートローダーと、第 3 段階ブートローダーとしての UF2 ファクトリアプリケーションで構成されています。

**Note:** IDF は活発に開発されており頻繁に変更されるため、lib/esp-idf にサブモジュールとして含まれています。環境を正しくセットアップするために、そこで export スクリプトを実行してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/adafruit/tinyuf2/tree/master/ports/espressif" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div>

</TabItem>
</Tabs>

## トラブルシューティング

### Q1: アップロードに失敗する／プログラムが異常に動作する／デバイスポートが見つからない場合はどうすればよいですか？

上記の問題が発生した場合は、まず XIAO ESP32-S3 のリセットボタンを押して、プログラムを再度動作させてみることをお勧めします。それでも問題が解決しない場合は、プログラムを再確認し、デバイスを復元するために **[BootLoader Mode](#BootLoader-Mode)** で紹介している方法をお読みください。

### Q2: 私の XIAO の角が丸い部分でツライチになっていないのはなぜですか？これは品質上の問題ですか？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

まず、これは品質上の問題ではなく、XIAO の通常の機能には影響しないことに注意してください。

XIAO ESP32-S3 は高い集積度を持つため、すべての XIAO の中で最も複雑であり、工場での生産時に PCB をパネル化する必要があります。高集積であるため、パネルの接続部は 4 つの丸い角にしか配置できず、その結果、画像のように角の丸みが不均一になる問題が発生します。今後の生産では、この問題が解決されるよう、プロセスの改善に努めてまいります。

### Q3: リソースセクションで提供されている XIAO ESP32-S3 用のファクトリーファームウェアをどのように書き込めばよいですか？

リソースセクションで提供されているスクリプトは Windows をサポートしています。zip ファイルをダウンロードすると、次のファイルが見つかります：

<Tabs>
<TabItem value="normal" label="XIAO ESP32-S3 Factory firmware" >

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
<TabItem value="sense" label="XIAO ESP32-S3 Sense Factory firmware" >

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

ファームウェアを書き込むには、対応する `.bat` ファイルを実行するだけです。書き込みプロセスが失敗した場合は、プロンプトに表示されるコマンドラインをコピーし、ファイルが存在するディレクトリのターミナルで手動で実行してください。

## リソース

### Seeed Studio XIAO ESP32-S3 用

**ハードウェア設計**
- **📄[Datasheet]** [Espressif ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[Schematic]** [XIAO ESP32-S3 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/202003751_XIAO%20ESP32S3_v1.4_SCH_260226.pdf.pdf)
- **🗃️[PCB Design Files]** 
  - [XIAO ESP32-S3 KiCad プロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/202003751_XIAO%20ESP32S3_v1.4_SCH&PCB_260226.zip)
- **🗃️[PCB Design Libraries]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [XIAO ESP32-S3 ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx )

**機械設計**
- **📄[2D 寸法]** [XIAO ESP32-S3 DXF 寸法図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf )
- **🗃️[3D モデル]** [XIAO ESP32-S3 3D モデル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip )

**ソフトウェア & ツール**
- **🗃️[工場出荷時ファームウェア]** [XIAO ESP32-S3 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip )

### Seeed Studio XIAO ESP32-S3 Sense 用

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
**ハードウェア設計**
- **📄[データシート]** [Espressif ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[回路図]** [XIAO ESP32-S3 Sense 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/202003753_XIAO%20ESP32S3%20Sense_v1.5_SCH_260226.pdf.pdf)
- **📄[回路図]** [XIAO ESP32-S3 ExpBoard 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)
- **🗃️[PCB 設計ファイル]** 
  - [XIAO ESP32-S3 Sense KiCad プロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/202003753_XIAO%20ESP32S3%20Sense_v1.5_SCH&PCB_260226.zip)
- **🗃️[PCB 設計ライブラリ]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO ESP32-S3 Sense ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx )

**機械設計**
- **📄[2D 寸法]** [XIAO ESP32-S3 Sense DXF 寸法図（トップ）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf )
- **📄[2D 寸法]** [XIAO ESP32-S3 Sense DXF 寸法図（ボトム）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf )
- **🗃️[3D モデル]** [XIAO ESP32-S3 Sense 3D モデル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip )
- **📄[3D モデル]** [XIAO ESP32-S3 Sense 3D プリント用パープル筐体（トップ）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp )
- **📄[3D モデル]** [XIAO ESP32-S3 Sense 3D プリント用パープル筐体（ボトム）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp )

**ソフトウェア & ツール**
- **🗃️[工場出荷時ファームウェア]** [XIAO ESP32-S3 Sense 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-firmware-20240814.zip )

### Seeed Studio XIAO ESP32-S3 Plus 用

**ハードウェア設計**
- **📄[データシート]** [Espressif ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[回路図]** [XIAO ESP32-S3 Plus 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.1_SCH_260115.pdf )
- **🗃️[PCB 設計ファイル]** 
  - [XIAO ESP32-S3 Plus KiCad プロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.1_KiCad_260115.zip )
  - [XIAO Plus Base（ボトムパッド引き出しあり）KiCad プロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip )
  - [XIAO Plus Base（ボトムパッド引き出しなし）KiCad プロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip )
- **🗃️[PCB 設計ライブラリ]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO ESP32-S3 Plus ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx )

**機械設計**
- **📄[2D 寸法]** [XIAO ESP32-S3 Plus DXF 寸法図（トップ）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf )
- **📄[2D 寸法]** [XIAO ESP32-S3 Plus DXF 寸法図（ボトム）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf )
- **🔗[3D モデル]** [XIAO ESP32-S3 Plus 3D モデル](https://grabcad.com/library/seeed-studio-xiao-esp32s3-plus-1/files )

### Seeed Studio XIAO ESP32-S3 Sense Camera 用

**ハードウェア設計**
- **[OV3660]** 
  - **📄[データシート]** [OV3660 カメラモジュール仕様書](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/OV3660_Camera_Module_Specification.pdf)
  - **📄[データシート]** [OV3660 CMOS センサーデータシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV3660_datasheet.pdf )
- **[OV5640]** 
  - **📄[データシート]** [OV5640 カメラモジュール仕様書](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/OV5640_Camera_Module_Specification.pdf )
  - **📄[データシート]** [OV5640 CMOS センサーデータシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV5640_datasheet.pdf )
- **[OV2640]** 
  - **📄[データシート]** [OV2640 CMOS センサーデータシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV2640_datasheet.pdf )

<JetsonLeadQuote
  buttonText="カスタマイズの見積もりを依頼"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="XIAO の見積もりを依頼"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

### その他

- **[STP]** [XIAO ESP32-S3 Sense 筐体設計（トップ）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32-S3 Sense 筐体設計（ボトム）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

*残りのオープンソース資料は現在編集中です。続報をお待ちください！*

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
