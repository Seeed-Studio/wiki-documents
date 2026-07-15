---
description: 紹介
title: Wio-S3 ワイヤレスモジュール概要
keywords:
  - wio
  - module
  - LoRa
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.webp
slug: /wio-s3_wireless_module_introduction
sku: 100020327,100079384
sidebar_position: 1
last_update:
  date: 6/9/2026
  author: Janet Zhang
createdAt: '2026-06-09'
updatedAt: '2026-06-09'
url: https://wiki.seeedstudio.com/ja/wio-s3_wireless_module_introduction/
---

<!-- ![Wio-S3](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.jpg" alt="pir" width={600} height="auto" /></p>

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wio-S3-Wireless-Module-p-6832.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-S3-Wireless-Module-p-6832.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

---

:::tip SenseCAP Module Comparison
<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Module_comparision_1.jpg" width="800" alt="appearance" />
</div>
<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Module_comparision_2.jpg" width="800" alt="appearance" />
</div>
:::

## 製品概要

[Wio-S3 wireless module](https://www.seeedstudio.com/Wio-S3-Wireless-Module-p-6832.html) は、[ESP32-S3R8](https://www.espressif.com/en/products/socs/esp32-s3/) デュアルコア Xtensa® LX7 MCU と長距離通信が可能な [SX1262 LoRa チップ](https://www.semtech.com/products/wireless-rf/lora-connect/sx1262) を搭載したモジュールです。EU868、US915 などの LoRaWAN 周波数プランに対応し、**2.4GHz Wi-Fi および BLE 5.0 接続**もサポートします。16MB Flash と 8MB PSRAM を内蔵しており、エッジ AI 処理に最適です。 

オンボード IPEX コネクタあり／なしの 2 種類を用意しており、開発者に柔軟なアンテナ統合オプションを提供します。TCXO を搭載しているため、安定かつ高精度な RF 性能を実現し、長距離・高性能・高信頼の無線通信を必要とする IoT アプリケーションに適しています。

:::info
| SKU | 名称 | 仕様 |
| :--- | :--- | :--- |
| 100020327 | Wio-S3 Wireless Module | IPEX コネクタ付き |
| 100079384 | Wio-S3-N Wireless Module | IPEX コネクタなし |
:::

![Wio-S3](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module.jpg)

:::tip
LoRa® や LoRaWAN® にあまり詳しくない場合は、詳細についてこの記事 [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) をご覧ください。
:::

## 特長

- **高性能 MCU**: 最大 240 MHz 動作の ESP32-S3R8 デュアルコア Xtensa® LX7 MCU をベースとしています。
- **大容量メモリ**: 16 MB 外部 Flash と 8 MB PSRAM を搭載し、複雑な IoT およびエッジ AI アプリケーションに対応します。
- **Wi-Fi & Bluetooth® 接続**: 2.4 GHz Wi-Fi（IEEE 802.11 b/g/n）および Bluetooth® 5.0 Low Energy をサポートします。
- **高度な LoRa® トランシーバ & グローバル LoRaWAN® 対応**: 長距離・低消費電力無線通信向け Semtech SX1262 チップを採用。EU868、US915、AU915、AS923、KR920、IN865 など複数の LoRaWAN® 周波数プランに対応し、世界各地での展開が可能です。
- **豊富な周辺インターフェース**: UART、I2C、SPI、USB、ADC、PWM、I2S、SD/MMC、CAN（TWAI®）、GPIO をサポートします。
- **高い RF 性能**:
  - 感度: 最大 -137 dBm @ SF12, BW125 kHz
  - RF 出力電力: 最大 20.9 dBm @ 868/915 MHz
- **高い安定性**: 内蔵 TCXO により、安定した周波数基準と信頼性の高い RF 通信を実現します。
- **超低消費電力**: スリープ電流は最小 9.3 μA。
- **RF シールド設計**: シールドカバーを内蔵し、信号の完全性向上と EMI 保護を実現します。
- **柔軟なアンテナオプション**: オンボード IPEX コネクタの有無を選択でき、さまざまなアンテナ統合ニーズに対応します。
- **コンパクトな SMT フォームファクタ**: 21.6 × 16.5 × 3.3 mm、38 ピン SMT パッケージで、省スペース設計への組み込みが容易です。
- **使いやすさ**: コマンドファームウェアを内蔵し、SDK を用いたカスタム製品開発をサポートします。
- **コストパフォーマンスに優れたソリューション**: 最適化されたハードウェア設計により、高い性能を競争力のあるコストで提供します。
- **IoT アプリケーション向けに設計**: スマート農業、産業用 IoT、環境モニタリング、資産トラッキング、エッジ AI 展開などに最適です。
- **FCC、CE、Telec 認証取得**


:::note
Seeed の IIoT 製品およびサービスについて、大口数量のご要望やさらなる情報が必要な場合は、order@seeed.cc まで直接ご連絡いただくか、[こちら](https://solution.seeedstudio.com/contact-us/) をクリックしてください。可能な限りお得な価格をご提案いたします。弊社製品とサービスにより、皆さまのビジネス拡大とスケールアップに貢献できることを楽しみにしています。
:::

## 用途

LoRaWAN® センサーノードおよび幅広い無線通信アプリケーションに最適であり、環境モニタリング、スマート農業、産業用 IoT、資産トラッキング、スマートシティ、リモートセンシングシステムなどに利用できます。

![applications](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/application.jpg)

- **スマート農業**: 環境条件の遠隔監視を可能にし、精密農業やスマート灌漑を支援します。
- **産業オートメーション**: 産業監視やメッシュネットワークをサポートし、複雑な環境におけるシステム効率と信頼性を向上させます。
- **IoT データロギング & 遠隔監視**: 低消費電力データロガーや分散センシング用途に最適で、安定した長距離通信を実現します。
- **ヘルスケア & ウェアラブル**: 信頼性の高いデータ伝送と低消費電力動作により、ヘルスモニタリング機器やウェアラブルデバイスを支えます。
- **AIoT & ヒューマンマシンインターフェース**: 音声・画像認識などのエッジ AI アプリケーションや、タッチ・インタラクティブ制御システムをサポートします。

## ハードウェアピン配置

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/pinout.jpg" width="700" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/pinout-2.jpg" width="700" alt="appearance" />
</div>

| ピン番号 | 名称 | 種類 | 説明 |
| :--- | :--- | :--- | :--- |
| 1 | ESP_GPIO47 | I/O/T | MCU GPIO |
| 2 | ESP_GPIO38 | I/O/T | MCU GPIO |
| 3 | ESP_GPIO39 | I/O/T | MCU GPIO |
| 4 | ESP_GPIO40 | I/O/T | MCU GPIO |
| 5 | ESP_GPIO41 | I/O/T | MCU GPIO |
| 6 | ESP_GPIO42 | I/O/T | MCU GPIO |
| 7 | ESP_GPIO43 / UART0_TX | I/O/T | MCU GPIO; MCU からの UART0_TX |
| 8 | ESP_GPIO44 / UART0_RX | I/O/T | MCU GPIO; MCU からの UART0_RX |
| 9 | ESP_GPIO45 | I/O/T | MCU GPIO |
| 10 | ESP_GPIO46 | I/O/T | MCU GPIO |
| 11 | ESP_GPIO3 | I/O/T | MCU GPIO |
| 12 | ESP_GPIO2 | I/O/T | MCU GPIO |
| 13 | ESP_GPIO1 | I/O/T | MCU GPIO |
| 14 | ESP_BOOT | I/O/T | MCU GPIO0, <br />ブートモード: Download Boot Mode に入るには Low にプルダウンします。 |
| 15 | ESP_RST | I | CHIP_PU: <br />High レベル: チップ有効; <br />Low レベル: チップ無効; CHIP_PU ピンがフローティングにならないようにしてください。 |
| 16 | GND | - | グラウンド |
| 17 | GND | - | グラウンド |
| 18 | WIFI / BT_ANT / NC | I/O | MCU からの WiFi および BT RF 入出力 |
| 19 | GND | - | グラウンド |
| 20 | GND | - | グラウンド |
| 21 | VCC 3V3 | - | モジュールの電源電圧 |
| 22 | GND | - | グラウンド |
| 23 | GND | - | グラウンド |
| 24 | ESP_GPIO11 | I/O/T | MCU GPIO |
| 25 | ESP_GPIO10 | I/O/T | MCU GPIO |
| 26 | ESP_GPIO12 | I/O/T | MCU GPIO |
| 27 | ESP_GPIO13 | I/O/T | MCU GPIO |
| 28 | ESP_GPIO14 | I/O/T | MCU GPIO |
| 29 | ESP_GPIO15 | I/O/T | MCU GPIO |
| 30 | ESP_GPIO16 | I/O/T | MCU GPIO |
| 31 | ESP_GPIO17 | I/O/T | MCU GPIO |
| 32 | ESP_GPIO18 | I/O/T | MCU GPIO |
| 33 | ESP_GPIO19 / USB_DM | I/O/T | MCU GPIO; MCU からの USB_D- |
| 34 | ESP_GPIO20 / USB_DP | I/O/T | MCU GPIO; MCU からの USB_D+ |
| 35 | ESP_GPIO48 | I/O/T | MCU GPIO |
| 36 | GND | - | グラウンド |
| 37 | LORA_ANT / NC | - | LoRa RF 入出力 |
| 38 | GND | - | グラウンド |
| 39 | GND | - | グラウンド |

## 仕様

<table class="tg">
<thead>
  <tr>
    <th>項目</th>
    <th>パラメータ</th>
    <th colspan="4">仕様</th>
    <th>単位</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">コア</td>
    <td>MCU</td>
    <td colspan="4">Xtensa® 32-bit LX7（デュアルコア、最大 240MHz）</td>
    <td></td>
  </tr>
  <tr>
    <td>ストレージ</td>
    <td colspan="4">16MB Flash、512KB SRAM</td>
    <td></td>
  </tr>

  <tr>
    <td rowspan="2">構造</td>
    <td>サイズ</td>
    <td colspan="4">21.6*(L) * 16.5(W) * 3.3(H)</td>
    <td>mm</td>
  </tr>
  <tr>
    <td>パッケージ</td>
    <td colspan="4">38 ピン、SMT</td>
    <td></td>
  </tr>

  <tr>
    <td rowspan="16">電気的特性</td>
    <td>電源電圧</td>
    <td colspan="4">3.0 - 3.6V（標準 3.3V）</td>
    <td>V</td>
  </tr>
  <tr>
    <td>最小スリープ電流</td>
    <td colspan="4">9.3uA</td>
    <td>uA</td>
  </tr>
  <tr>
    <td>最小スタンバイ電流</td>
    <td colspan="4">1.43 </td>
    <td>mA</td>
  </tr>
  <tr>
    <td rowspan="3">動作電流（送信機+MCU）</td>
    <td colspan="4">113mA @16dBm、868MHz タイプ</td>
    <td rowspan="3">mA</td>
  </tr>
  <tr>
    <td colspan="4">125mA @22dBm、868MHz タイプ</td>
  </tr>
  <tr>
    <td colspan="4">127mA @22dBm、915MHz タイプ</td>
  </tr>
  <tr>
    <td rowspan="2">動作電流（受信機+MCU）</td>
    <td colspan="4">5.5mA @BW125kHz、868MHz タイプ</td>
    <td rowspan="2">mA</td>
  </tr>
  <tr>
    <td colspan="4">5.7mA @BW125kHz、915MHz タイプ</td>
  </tr>
  <tr>
    <td rowspan="2">出力電力</td>
    <td colspan="4">20.9dBm 最大 @868MHz LoRa</td>
    <td rowspan="2">dBm</td>
  </tr>
  <tr>
    <td colspan="4">20.74dBm 最大 @915MHz LoRa</td>
  </tr>
  <tr>
    <td rowspan="4">感度</td>
    <td colspan="4">@SF12, BW125kHz</td>
    <td rowspan="4">dBm</td>
  </tr>
  <tr>
    <td>Fr(MHz)</td>
    <td colspan="2">typ</td>
    <td colspan="2">max</td>
  </tr>
  <tr>
    <td>868</td>
    <td colspan="2">-137</td>
    <td colspan="2">-137</td>
  </tr>
  <tr>
    <td>915</td>
    <td colspan="2">-136.5</td>
    <td colspan="2">-136.9</td>
  </tr>
<tr>
    <td rowspan="2">高調波 (LoRa)</td>
    <td colspan="4">&lt; -41dBm (2次高調波)</td>
    <td rowspan="2">dBm</td>
</tr>
<tr>
    <td colspan="4">&lt; -49dBm (3次高調波)</td>
</tr>

  <tr>
    <td rowspan="8">インターフェース</td>
    <td>RFIO</td>
    <td colspan="4">2つのRFポート (Wi-Fi/BT & LoRa)</td>
    <td></td>
  </tr>
  <tr>
    <td>UART</td>
    <td colspan="4">3組のUART</td>
    <td></td>
  </tr>
  <tr>
    <td>I2C</td>
    <td colspan="4">2組のI2C</td>
    <td></td>
  </tr>
  <tr>
    <td>ADC</td>
    <td colspan="4">2組のADC、12ビット</td>
    <td></td>
  </tr>
  <tr>
    <td>SPI</td>
    <td colspan="4">1組のSPI</td>
    <td></td>
  </tr>
  <tr>
    <td>USB</td>
    <td colspan="4">1組のUSB</td>
    <td></td>
  </tr>
  <tr>
    <td>NRST</td>
    <td colspan="4">1つの手動リセットピン入力</td>
    <td></td>
  </tr>
  <tr>
    <td>BOOT</td>
    <td colspan="4">1つの手動ブートピン入力</td>
    <td></td>
  </tr>

  <tr>
    <td>温度</td>
    <td>動作温度</td>
    <td colspan="4">-40 ~ 85</td>
    <td>℃</td>
  </tr>
</tbody>
</table>

## 消費電力

<table class="tg">
<thead>
  <tr>
    <th colspan="2">モード</th>
    <th>電源タイプ</th>
    <th>項目</th>
    <th>データ (平均)</th>
    <th>備考</th>
  </tr>
</thead>
<tbody>
<tr>
    <td rowspan="6">WiFi</td>
    <td rowspan="3">WiFi 送信 (Tx)</td>
    <td rowspan="6">3.3V</td>
    <td>802.11B</td>
    <td>349mA</td>
    <td rowspan="6">WiFiアンテナ接続、LoRaスリープ</td>
</tr>
<tr>
    <td>802.11G</td>
    <td>333mA</td>
</tr>
<tr>
    <td>802.11N</td>
    <td>310mA</td>
</tr>
<tr>
    <td rowspan="3">WiFi 受信 (Rx)</td>
    <td>802.11B</td>
    <td>104mA</td>
</tr>
<tr>
    <td>802.11G</td>
    <td>103mA</td>
</tr>
<tr>
    <td>802.11N</td>
    <td>103mA</td>
</tr>

<tr>
    <td rowspan="8">LoRa</td>
    <td rowspan="3">LoRa 送信 (Tx)</td>
    <td rowspan="3">3.3V</td>
    <td>868MHz, 16dBm</td>
    <td>113mA</td>
    <td rowspan="8">LoRaアンテナ接続、WiFi & BLE オフ</td>
</tr>
<tr>
    <td>868MHz, 22dBm</td>
    <td>125mA</td>
</tr>
<tr>
    <td>915MHz, 22dBm</td>
    <td>127mA</td>
</tr>
<tr>
    <td rowspan="3">LoRa 送信 (Tx)</td>
    <td rowspan="3">3.0V</td>
    <td>868MHz, 16dBm</td>
    <td>109mA</td>
</tr>
<tr>
    <td>868MHz, 22dBm</td>
    <td>124mA</td>
</tr>
<tr>
    <td>915MHz, 22dBm</td>
    <td>123mA</td>
</tr>
<tr>
    <td rowspan="2">LoRa 受信 (Rx)</td>
    <td rowspan="2">3.3V</td>
    <td>868MHz</td>
    <td>5.5mA</td>
</tr>
<tr>
    <td>915MHz</td>
    <td>5.7mA</td>
</tr>

<tr>
    <td rowspan="2" colspan="2">WiFi + LoRa</td>
    <td rowspan="2">3.3V</td>
    <td>WiFi 11B AP + LoRa 915MHz, 22dBm</td>
    <td>201mA</td>
    <td></td>
</tr>
<tr>
    <td>WiFi 11B AP + LoRa 868MHz, 16dBm</td>
    <td>189mA</td>
    <td></td>
</tr>

<tr>
    <td rowspan="2" colspan="2">BLE + LoRa</td>
    <td rowspan="2">3.3V</td>
    <td>BLE アドバタイジング + LoRa 915MHz, 22dBm</td>
    <td>158mA</td>
    <td></td>
</tr>
<tr>
    <td>BLE アドバタイジング + LoRa 868MHz, 16dBm</td>
    <td>146mA</td>
    <td></td>
</tr>

<tr>
    <td colspan="2">ディープスリープ</td>
    <td>3.3V</td>
    <td>ESP32-S3 ディープスリープ、LoRa スリープ</td>
    <td>9.3uA</td>
    <td>ESP32-S3：すべてのペリフェラルをオフにしてディープスリープ</td>
</tr>

<tr>
    <td colspan="2">スタンバイ / ライトスリープ</td>
    <td>3.3V</td>
    <td>ESP32-S3 ライトスリープ、LoRa スタンバイ</td>
    <td>1.43mA</td>
    <td>ESP32-S3：ライトスリープ、RTC/ULP 有効、任意のイベントでウェイクアップ；LoRa スタンバイ (STDB_RC)、内部RCでウェイクアップ；すべてのRFオフ</td>
</tr>
</tbody>
</table>

:::note
上記の消費電力データは、実験室での試験条件下で測定されたものであり、参考値として提供されています。実際の消費電力は、ファームウェア、ペリフェラル、動作モード、環境条件、およびハードウェア構成によって変動する場合があります。
:::

## 代表的なRF性能テスト

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/RF1.jpg" width="700" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/RF2.jpg" width="700" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/RF3.jpg" width="700" alt="appearance" />
</div>

## パッケージ情報

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/appearance.jpg" width="700" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/layout.jpg" width="500" alt="layout" />
</div>

## Wio-S3モジュールに基づくリファレンスデザイン

このリファレンスデザインは、デュアルモードのLoRaWAN®およびWi-Fi/Bluetoothノードの迅速な開発を容易にし、専用UARTインターフェース経由でコマンドを送信するだけで、ユーザーが迅速に設定を行えるようにします。システムは、1Aヒューズ保護付きのデュアル5V USB-C入力、PMOS制御の3.3V BUCKレギュレータ、および専用のU.FL RFポートを統合し、プログラミングやセンサー拡張を容易にするために、重要なRST、BOOT (GPIO0)、およびペリフェラルGPIOピンを引き出しています。

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/reference-design-of-s3.png" width="1000" alt="layout" />
</div>

## 参考資料

### データシート

- [Wio-S3 データシート & 仕様](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3_Module_Datasheet_V1.0.pdf)
- [Espressif ESP32-S3R8 データシート](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Espressif_ESP32-S3R8_Datasheet.pdf)
- [Semtech SX1262 データシート](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/SX1261_2%20V2-2.pdf)

### ライブラリ

- [Wio-S3 kicad ライブラリ](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3_Wireless_Module_Kicad_File.zip)
- [Wio-S3 STEP 3D ファイル](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3%20Wireless%20Module_3D.step)

### 関連SDK

- [ESP32-S3 向け ESP-IDF ユーザーガイド、SDK](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html)
- [ESP32-S3 テストツールとガイドライン](https://docs.espressif.com/projects/esp-test-tools/en/latest/esp32s3/index.html)



## 技術サポート & 製品ディスカッション

技術的な問題がありましたら、[フォーラム](http://forum.seeedstudio.com/)に投稿してください。

弊社製品をお選びいただきありがとうございます。お客様が弊社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>