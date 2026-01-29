---
description: Seeed Studio XIAO nRF52840 シリーズの入門ガイド
title: Seeed Studio XIAO nRF52840 シリーズの入門ガイド
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg
slug: /ja/XIAO_BLE
sku: 102010448, 102010469, 102010632, 102010631, 102010672, 102010694, 101991463, 101991465
last_update:
  date: 2024-11-28T11:15:24+08:00
  author: Clara
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO nRF52840 シリーズの入門ガイド

<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<div className="w-full overflow-x-auto">
  <table className="min-w-full">
    <tr>
      <th>XIAO nRF52840</th>
      <th>XIAO nRF52840 Sense</th>
      <th>XIAO nRF52840 Plus</th>
      <th>XIAO nRF52840 Sense Plus</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_front.jpg"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840plus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840senceplus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

Seeed Studio XIAO ファミリーの最初のワイヤレス製品として、**Seeed Studio XIAO nRF52840** は **Bluetooth 5.0** 接続を統合した強力な **Nordic nRF52840 MCU** を搭載しています。同時に、ウェアラブルデバイスやモノのインターネットプロジェクトに使用できる**小型で精巧なフォームファクター**を持っています。**片面表面実装設計**とオンボード **Bluetooth アンテナ**により、IoT プロジェクトの迅速な展開を大幅に促進できます。

さらに、このボードの上位版である **Seeed Studio XIAO nRF52840 Sense** があります。これには 2 つの追加オンボードセンサーが統合されています。そのうちの 1 つは **パルス密度変調（PDM）デジタルマイクロフォン**です。リアルタイムでオーディオデータを受信でき、音声認識に使用できます。もう 1 つは **6 軸慣性測定ユニット（IMU）**で、この IMU はジェスチャー認識などの TinyML プロジェクトで非常に有用です。これらのオンボードセンサーは、ボードが超小型でありながらユーザーに大きな利便性を提供します。

新しくアップグレードされた **XIAO nRF52840 Plus と XIAO nRF52840 Sense Plus** は、機能性と使いやすさの大幅な向上を提供します。多機能ピンの数が **20** に増加し、**I2S** と **SPI** リソースが追加されてより複雑なプロジェクトをサポートし、**NFC ピン**が露出して IoT とスマートカードアプリケーションへの統合が容易になり、**BAT ピン**がはんだ付けの利便性向上のために再配置され、よりユーザーフレンドリーなハードウェア体験を実現しています。

Seeed Studio XIAO RP2040 と比較して、Seeed Studio XIAO nRF52840 は**より豊富なインターフェース**を含んでいます。まず注目すべきは、ボード上で**近距離無線通信（NFC）インターフェース**が機能することです。次に、Type-C インターフェースの側面に小さな**リセットボタン**があります。反対側には、バッテリーが接続されたときの充電状態を示す**充電 LED** とともに **3-in-one LED（ユーザー LED）**があります。**PWM ピン**として使用できる **11 のデジタル I/O** と **ADC ピン**として使用できる **6 のアナログ I/O** があります。**UART、I2C、SPI** などの 3 つの一般的なシリアルインターフェースすべてをサポートしています。Seeed Studio XIAO RP2040 と同様に、**オンボード 2 MB フラッシュ**を持っているため、**Arduino、MicroPython、CircuitPython、またはその他のプログラミング言語**を使用してプログラムすることもできます。

Seeed Studio XIAO nRF52840 Sense は Seeed Studio XIAO 拡張ボードと互換性があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 強力なワイヤレス機能：オンボードアンテナ付き Bluetooth 5.0
- 強力な CPU：Nordic nRF52840、ARM® Cortex®-M4 32 ビットプロセッサ（FPU 付き）、64 MHz
- 超低消費電力：スタンバイ消費電力は 5μA 未満
- バッテリー充電チップ：リチウムバッテリーの充放電管理をサポート
- オンボード 2 MB フラッシュ
- オンボード PDM マイクロフォン（Seeed Studio XIAO nRF52840 Sense のみ）
- オンボード 6 軸 LSM6DS3TR-C IMU（Seeed Studio XIAO nRF52840 Sense のみ）
- 超小型サイズ：21 x 17.8mm、ウェアラブルデバイス向け Seeed Studio XIAO シリーズクラシックフォームファクター
- 豊富なインターフェース：XIAO nRF52840（Sense）では 1xUART、1xI2C、1xSPI、1xNFC、1xSWD、11xGPIO（PWM）、6xADC；XIAO nRF52840（Sense）Plus では 2xUART、1xI2C、2xSPI、1xI2S、1xNFC、1xSWD、18xGPIO（PWM）、6xADC
- 片面コンポーネント、表面実装設計

## 仕様比較

<div class="table-center">
 <table align="center">
  <tr>
      <th>項目</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Plus</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
      <th>プロセッサ</th>
      <td colspan="4" align="center">Nordic nRF52840、ARM® Cortex®-M4 32 ビットプロセッサ（FPU 付き）、64 MHz</td>
  </tr>
  <tr>
      <th>ワイヤレス接続</th>
      <td colspan="4" align="center">Bluetooth LE 5.2/NFC</td>
  </tr>
  <tr>
      <th>メモリ</th>
      <td colspan="4" align="center">256 KB RAM、1MB フラッシュ 2MB オンボードフラッシュ</td>
  </tr>
  <tr>
      <th>内蔵センサー</th>
      <td align="center">N/A</td>
      <td align="center">6 DOF IMU（LSM6DS3TR-C）、PDM マイクロフォン</td>
      <td align="center">N/A</td>
      <td align="center">6 DOF IMU（LSM6DS3TR-C）、PDM マイクロフォン</td>
  </tr>
  <tr>
      <th>インターフェース</th>
      <td colspan="2" align="center">1xI2C、1xUART、1xSPI</td>
      <td colspan="2" align="center">1xI2C、2xUART、2xSPI、1xI2S</td>
  </tr>
  <tr>
      <th>PWM/アナログピン</th>
      <td colspan="2" align="center">11/6</td>
      <td colspan="2" align="center">20/6</td>
  </tr>
  <tr>
      <th>オンボードボタン</th>
      <td colspan="4" align="center">リセットボタン</td>
  </tr>
  <tr>
      <th>オンボード LED</th>
      <td colspan="4" align="center">3-in-one LED/ 充電 LED</td>
  </tr>
  <tr>
      <th>バッテリー充電チップ</th>
      <td colspan="4" align="center">BQ25101</td>
  </tr>
  <tr>
      <th>プログラミング言語</th>
      <td colspan="4" align="center">Arduino/ MicroPython/ CircuitPython</td>
  </tr>
  </table>
</div>

## ハードウェア概要

<Tabs>
<TabItem  value="52540(Sense)" label="XIAO nRF52840/XIAO nRF52840 Sense" default>

<table align="center">
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense 前面図</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/front-pinout-4.jpg" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense 背面図</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/back-pinout-5.jpg" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense ピンリスト</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
</table>

 **ピンマップ**
| XIAO ピン                 | 機能         | チップピン   | 説明                              |
| :---------------------: | :-------------: | :-------:  | :-------------------------------------- |
| 5V                      | VBUS             |                               | 電源入力/出力                       |
| GND                     |                  |                               |                                          |
| 3V3                     | 3V3_OUT          |                              | 電源出力                             |
| D0                      | Analog          | P0.02                        | GPIO、ADC                                |
| D1                      | Analog          | P0.03                        | GPIO、ADC                                |
| D2                      | Analog          | P0.28                        | GPIO、ADC                                |
| D3                      | Analog          | P0.29                        | GPIO、ADC                                |
| D4                      | Analog,SDA       | P0.04                         | GPIO、I2C データ、ADC                      |
| D5                      | Analog,SCL       | P0.05                         | GPIO、I2C クロック、ADC                     |
| D6                      | TX               | P1.11                         | GPIO、UART 送信                      |
| D7                      | RX               | P1.12                         | GPIO、UART 受信                       |
| D8                      | SPI_SCK          | P1.13                         | GPIO、SPI クロック                          |
| D9                      | SPI_MISO         | P1.14                         | GPIO、SPI データ                           |
| D10                     | SPI_MOSI         | P1.15                         | GPIO、SPI データ                           |
| NFC1                    |                  | P0.09                         | NFC                                      |
| NFC2                    |                  | P0.10                         | NFC                                      |
| Reset                   |                  | P0.18                         | RESET                                    |
| ADC_BAT                 |                  | P0.14                         | BAT 電圧値を読み取り               |
| 6 DOF IMU_PWR           |                  | P1.08                         | 6D モジュールの電源スイッチ            |
| 6 DOF IMU__INT1         |                  | P0.11                         | 6D モジュールの割り込み信号ピン    |
| PDM Microphone_DATA     |                  | P0.16                         | PDM オーディオデータ入力ピン                 |
| PDM Microphone_CLK      |                  | P1.00                         | PDM オーディオクロック出力ピン               |
| RF Switch Port Select   |                  | P2.05                         | オンボードアンテナ切り替え                   |
| RF Switch Power         |                  | P2.03                         | 電源                                    |
| CHARGE_LED              |                  | P0.17                         | CHG-LED_Red                              |
| USER_LED_R              |                  | P0.26                         | ユーザー制御赤色 RGB LED ピン          |
| USER_LED_B              |                  | P0.06                         | ユーザー制御青色 RGB LED ピン         |
| USER_LED_G              |                  | P0.30                         | ユーザー制御緑色 RGB LED ピン        |

 </TabItem>
 <TabItem value="52840Plus" label="XIAO nRF52840 Plus/XIAO nRF52840 Sense Plus" default>

 <table align="center">
  <tr>
    <th>XIAO nRF52840 Plus 前面表示図</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_front.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840 Plus 背面表示図</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_back.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840 Plus ピンリスト</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_pinout.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>

 </table>

| XIAO ピン                | 機能                 | チップピン | 代替機能           | 説明                                     |
| :---------------------: | :-----------------: | :-------: | :----------------: | :-------------------------------------- |
| 5V                      | VBUS                 |           |                    | 電源入力/出力                            |
| GND                     |                      |           |                    |                                          |
| 3V3                     | 3V3_OUT              |           |                    | 電源出力                                 |
| D0                      | Analog              | P0.02     |                    | GPIO、ADC                                |
| D1                      | Analog              | P0.03     |                    | GPIO、ADC                                |
| D2                      | Analog              | P0.28     |                    | GPIO、ADC                                |
| D3                      | Analog              | P0.29     |                    | GPIO、ADC                                |
| D4                      | Analog,SDA           | P0.04     |                    | GPIO、I2C データ、ADC                    |
| D5                      | Analog,SCL           | P0.05     |                    | GPIO、I2C クロック、ADC                  |
| D6                      | TX                   | P1.11     |                    | GPIO、UART 送信                          |
| D7                      | RX                   | P1.12     |                    | GPIO、UART 受信                          |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO、SPI クロック                       |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO、SPI データ                         |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO、SPI データ                         |
| D11                     | I2S_SD               | P0.15     |                    | GPIO、I2S、ADC                           |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO、I2S、ADC                           |
| D13                     | I2S_WS               | P1.01     |                    | GPIO、I2S ADC                            |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO、UART 受信、ADC                     |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO、UART 送信、ADC                     |
| D16                     | BAT                  | P0.31     |                    | GPIO                                     |
| D17                     | SCK1                 | P1.03     |                    | GPIO、SPI                                |
| D18                     | MISO1                | P1.05     |                    | GPIO、SPI                                |
| D19                     | MOSI1                | P1.07     |                    | GPIO、SPI                                |
| ADC_BAT                 |                      | P0.14     |                    | BAT 電圧値を読み取り                     |
| 6 DOF IMU_PWR           |                      | P1.08     |                    | 6D モジュールの電源スイッチ              |
| 6 DOF IMU__INT1         |                      | P0.11     |                    | 6D モジュールの割り込み信号ピン          |
| PDM Microphone_DATA     |                      | P0.16     |                    | PDM オーディオデータ入力ピン             |
| PDM Microphone_CLK      |                      | P1.00     |                    | PDM オーディオクロック出力ピン           |
| Reset                   |                      | P0.18     |                    | RESET                                    |
| RF Switch Port Select   |                      | P2.05     |                    | オンボードアンテナの切り替え             |
| RF Switch Power         |                      | P2.03     |                    | 電源                                     |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_Red                              |
| USER_LED_R              |                      | P0.26     |                    | ユーザー制御赤色 RGB LED ピン            |
| USER_LED_B              |                      | P0.06     |                    | ユーザー制御青色 RGB LED ピン            |
| USER_LED_G              |                      | P0.30     |                    | ユーザー制御緑色 RGB LED ピン            |

</TabItem>

</Tabs>





## 2つの Arduino ライブラリ

Seeed Studio XIAO nRF52840 は多くの機能を1つの小さなボードに組み込んでおり、時にはそれらの最高のパフォーマンスを発揮できない場合があります。そのため、Seeed は**各機能の力を最大化**するために2つの Arduino ライブラリを公開しています。したがって：

- **Bluetooth 機能**と「**低エネルギーコスト機能**」を適用したい場合は、`Seeed nRF52 Boards` ライブラリの使用を推奨します。
- **組み込み機械学習アプリケーション**で使用したい場合や「**IMU & PDM 高度機能**」を適用したい場合は、`Seeed nRF52 mbed-enabled Boards` ライブラリの使用を推奨します。
- 両方のライブラリは、**LED、デジタル、アナログ、シリアル、I2C、SPI** などの基本的な使用において非常によくサポートしています。

これら2つのライブラリでサポートされるピン定義は少し異なる場合があり、Seeed は明確になるまで wiki を更新し続けます。

:::tip

1. Seeed nRF52 Boards のオンボードパッケージを使用する場合、Serial 機能がコンパイルされない場合があります。解決策は、コードに `#include <Adafruit_TinyUSB.h>` の行を追加することです。このパッケージは https://github.com/adafruit/Adafruit_TinyUSB_Arduino からダウンロードできます。

2. よりシンプルなアプローチを好む場合は、最初から Seeed nRF52 mbed-enabled Boards を選択できます。追加の変更を必要とせずに Serial 機能のコンパイルをサポートします。

:::

## 入門ガイド

まず、Seeed Studio XIAO nRF52840 (Sense) をコンピュータに接続し、Arduino IDE から簡単なコードをアップロードして、ボードが正常に機能しているかどうかを確認します。

### ハードウェアセットアップ

以下を準備する必要があります：

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) または [Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

:::tip
一部の USB ケーブルは電源供給のみ可能で、データ転送ができません。USB ケーブルをお持ちでない場合や、お使いの USB ケーブルがデータ転送可能かどうかわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) をご確認ください。
:::
USB Type-C ケーブルを使用して、Seeed Studio XIAO nRF52840 (Sense) をコンピュータに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={500} height="auto" /></p>

### ソフトウェアセットアップ

- **ステップ 1.** お使いのオペレーティングシステムに応じて、Arduino IDE の最新バージョンをダウンロードしてインストールします

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={700} height="auto" /></a></p>

- **ステップ 2.** Arduino アプリケーションを起動します

- **ステップ 3.** Arduino IDE に Seeed Studio XIAO nRF52840 (Sense) ボードパッケージを追加します

**File > Preferences** に移動し、**"Additional Boards Manager URLs"** に以下の URL を入力します：
    *https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width="700" height="auto" /></p>

**Tools > Board > Boards Manager...** に移動し、検索ボックスにキーワード「**seeed nrf52**」を入力し、必要なボードの最新バージョンを選択してインストールします。両方ともインストールできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528401.png" alt="pir" width={700} height="auto" /></p>

- **ステップ 4.** ボードとポートを選択します

**ボード**

ボードパッケージをインストールした後、**Tools > Board** に移動し、使用したいボードを選択し、続いて「**Seeed XIAO nRF52840 Sense**」を選択します。これで Arduino IDE 用の Seeed Studio XIAO nRF52840 (Sense) のセットアップが完了しました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528402.png" alt="pir" width={700} height="auto" /></p>

**ポート**

**Tools > Port** に移動し、接続されたSeeed Studio XIAO nRF52840 (Sense)のシリアルポート名を選択します。これは通常COM3以上になります（**COM1**と**COM2**は通常ハードウェアシリアルポート用に予約されています）。接続されたSeeed Studio XIAO nRF52840 (Sense)のシリアルポートには通常、**Seeed Studio XIAO nRF52840**の場合は**Seeed Studio XIAO nRF52840**、**Seeed Studio XIAO nRF52840 Sense**の場合は**Seeed Studio XIAO nRF52840 Sense**と書かれた括弧が含まれています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/port.png" alt="pir" width={550} height="auto" /></p>

- **ステップ 5.** **File > Examples > 01.Basics > Blink** に移動して **Blink** サンプルを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={550} height="auto" /></p>

- **ステップ 6.** **Upload** ボタンをクリックして、Blinkサンプルコードをボードにアップロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={500} height="auto" /></p>

アップロードが完了すると、内蔵の赤色LEDが1秒間隔で点滅するのが確認できます。これは接続が成功したことを意味し、これでSeeed Studio XIAO nRF52840 (Sense)を使ったより多くのプロジェクトを探索できます！

## 内蔵3-in-1 LEDで遊ぶ

Seeed Studio XIAO nRF52840 (Sense)には**オンボード3-in-1 LED**があり、ユーザーがプログラム可能です。今度はArduinoを使ってRGBカラーを一つずつ制御する方法を学びます！

まず、このLEDの動作がコードで制御する際に通常とは異なることを理解する必要があります。**LOW信号**を与えると**LEDが点灯**し、**HIGH信号**を与えると**LEDが消灯**します。これは、このLEDがコモンアノードで制御されており、ローレベル信号でのみ点灯するためです。

サンプルコードは以下のようになります：

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   
}
```

ここで、**HIGH**が使用されていても、LEDは**OFF**になります。LEDを**ON**にするには、**HIGH**を**LOW**に置き換える必要があります。

以下のLEDのピンマッピングを参照して、コードで使用してください：

- 赤色LED = LED_BUILTIN または LED_RED
- 青色LED = LED_BLUE
- 緑色LED = LED_GREEN

## 消費電力の検証

Seeed Studio XIAO nRF52840は低消費電力であり、ここでその検証方法を提供します。ここでは`Seeed nRF52 Boards`ライブラリの使用を強く推奨します。

- **ステップ 1.** **JLink** ダウンローダーを使用して、Seeed Studio XIAO nRF52840 (Sense)用の[ブートローダーファームウェア](https://github.com/0hotpotman0/BLE_52840_Core/blob/main/bootloader/Seeed_XIAO_nRF52840_Sense/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex)をフラッシュします。

:::note
Seeed Studio XIAO nRF52840の工場出荷時ファームウェアを使用している場合、またはSeeed Studio XIAO nRF52840のファームウェアを変更したことがない場合は、このステップをスキップできます。
:::

- **ステップ 2.** ここで`Seeed nRF52 Boards`ライブラリを使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528403.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 3.** ここでdeep_sleepデモをアップロードし、**Arduino**で実行します

```cpp
// The MIT License (MIT)
// Copyright (c) 2019 Ha Thach for Adafruit Industries

#include "SdFat.h"
#include "Adafruit_SPIFlash.h"

// Uncomment to run example with custom SPI and SS e.g with FRAM breakout
// #define CUSTOM_CS   A5
// #define CUSTOM_SPI  SPI

#if defined(CUSTOM_CS) && defined(CUSTOM_SPI)
  Adafruit_FlashTransport_SPI flashTransport(CUSTOM_CS, CUSTOM_SPI);

#elif defined(ARDUINO_ARCH_ESP32)
  // ESP32 use same flash device that store code.
  // Therefore there is no need to specify the SPI and SS
  Adafruit_FlashTransport_ESP32 flashTransport;

#else
  // On-board external flash (QSPI or SPI) macros should already
  // defined in your board variant if supported
  // - EXTERNAL_FLASH_USE_QSPI
  // - EXTERNAL_FLASH_USE_CS/EXTERNAL_FLASH_USE_SPI
  #if defined(EXTERNAL_FLASH_USE_QSPI)
    Adafruit_FlashTransport_QSPI flashTransport;

  #elif defined(EXTERNAL_FLASH_USE_SPI)
    Adafruit_FlashTransport_SPI flashTransport(EXTERNAL_FLASH_USE_CS, EXTERNAL_FLASH_USE_SPI);

  #else
    #error No QSPI/SPI flash are defined on your board variant.h !
  #endif
#endif

Adafruit_SPIFlash flash(&flashTransport);


/*  If you want to use a specific flash device, for example for a custom built board, first look for it in Adafruit_SPIFlash\src\flash_devices.h
 *  If it isn't in there you need to create your own definition like the W25Q80DLX_EXAMPLE example below.
 *  These definitions need to be edited to match information on the data sheet of the flash device that you want to use.
 *  If you are not sure what the manufacture ID, memory type and capacity values should be, try running the sketch anyway and look at the serial output
 *  The flash device will report these values to you as a single hexadecimal value (the JDEC ID)
 *  For example, the first device on the list - the W25Q80DLX - will report its JDEC ID as 0xef4014, which is made of these three values:
 *  manufacturer_id = 0xef
 *  memory_type     = 0x40
 *  capacity        = 0x14
 *  With this macro properly defined you can then create an array of device definitions as shown below, this can include any from the list of devices in flash_devices.h, and any you define yourself here
 *  You need to update the variable on line 71 to reflect the number of items in the array
 *  You also need to uncomment line 84 and comment out line 81 so this array will be passed to the flash memory driver. 
 */
//Example of a user defined flash memory device:
//#define W25Q80DLX_EXAMPLE                                                               \
//  {                                                                            \
//    .total_size = (1 << 20), /* 1 MiB */                                       \
//        .start_up_time_us = 5000, .manufacturer_id = 0xef,                     \
//    .memory_type = 0x40, .capacity = 0x14, .max_clock_speed_mhz = 80,         \
//    .quad_enable_bit_mask = 0x02, .has_sector_protection = false,              \
//    .supports_fast_read = true, .supports_qspi = true,                         \
//    .supports_qspi_writes = false, .write_status_register_split = false,       \
//    .single_status_byte = false, .is_fram = false,                             \
//  }

/*
 * Create an array of data structures and fill it with the settings we defined above.
 * We are using two devices, but more can be added if you want.
 */
//static const SPIFlash_Device_t my_flash_devices[] = {
//    W25Q80DLX_EXAMPLE,
//};
/*
 * Specify the number of different devices that are listed in the array we just created. If you add more devices to the array, update this value to match.
 */
//const int flashDevices = 1;


#include <bluefruit.h>

bool deepPowerDown(Adafruit_SPIFlash& flash, Adafruit_FlashTransport& transport) {
  uint32_t id_before = flash.getJEDECID();

  transport.begin();
  transport.runCommand(0xB9);  // SPI deep power-down command
  delay(10);

  uint32_t id_after = flash.getJEDECID();

  return (id_after == 0xFFFFFF || id_after == 0xFFFFFFFF);
}

void setup() {
  flash.begin();
  Bluefruit.begin();

  if (!deepPowerDown(flash, flashTransport)) {
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, LOW);
    while (1) {
      yield();
    }
  }

  flash.end();

  sd_power_system_off();
}

void loop() {
  // nothing to do
}
```

:::tip
ここで、コードを提供してくれた作者 → ***daCoder*** ← に特別な感謝を表したいと思います
:::

**この例についてより詳細な情報を知りたい場合は、[こちら](https://forum.seeedstudio.com/t/xiao-sense-accelerometer-examples-and-low-power/270801)をクリックしてください**

## バッテリー充電電流

バッテリー充電電流は50mAまたは100mAとして選択可能で、**Pin13**をhighまたはlowに設定することで50mAまたは100mAに変更できます。低電流充電電流は入力モードでHIGH LEVELに設定され、高電流充電電流は出力モードでLOW LEVELに設定されます。

**低充電電流**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, HIGH);
}
```

**高充電電流**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, LOW);
}
```

## デバッグとブートローダー再フラッシュのためのSWDピンへのアクセス

**必要なハードウェア**

- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Jlink

**必要なソフトウェア**

ウェブサイトから[Segger](https://www.segger.com/downloads/jlink/)ソフトウェアをダウンロードする必要があります。

- **ステップ 1.** Jlinkを使用して以下のピンを接続します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD1.png" alt="pir" width={300} height="auto" /></p>

- **ステップ 2.** J-Flashを起動し、nRF52840を検索して新しいプロジェクトを作成します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD2.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 3.** "Target"をクリックし、"Connect"を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD3.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 4.** binまたは[hexファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex)をソフトウェアにドラッグします。その後、F4とF5をその順序で押します。再フラッシュが完了します。

## FAQ

### Q1: ボードにコードをアップロードする際にArduino IDEがフリーズします

まず"Reset Button"を一度クリックしてボードを**リセット**してみてください。それでもうまくいかない場合は、素早く2回クリックして**ブートローダーモード**に入ってください。それでもうまくいかない場合は、ボードをPCから切断し、再度ボードを接続してください。

### Q2: Arduino IDEでボードがシリアルデバイスとして表示されません

まず"Reset Button"を一度クリックしてボードを**リセット**してみてください。それでもうまくいかない場合は、素早く2回クリックして**ブートローダーモード**に入ってください。

### Q3: XIAO nRF52840 (Sense) をバッテリー充電に使用する際の注意点は何ですか？

P0.14 (D14) が 3.3V の高レベルで ADC 機能をオフにすると、P0.31 は 3.6V の入力電圧制限に達します。P0.31 ピンが焼損するリスクがあります。

現在この問題に対して、バッテリー充電中は P0.14 (D14) の ADC 機能をオフにしない、または P0.14 (D14) を高レベルに設定しないことをユーザーに推奨しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>

### Q4: 電源投入時の緑色ライトの動作はどのようになりますか？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nRF_RGB.png" alt="nRF52840 RGB Schematic" width="120" height="auto" /></p>

`P0.17` ピンは緑色インジケーターライトの動作を制御し、充電状態を示します：

- 低レベル：**充電中**の場合。
- 高レベル：バッテリーが**充電していない**または**満充電**の場合。

低レベルの場合、`RED_CHG` LED が点灯します。

詳細については、PMIC データシート：[BQ25100](https://www.ti.com/lit/ds/symlink/bq25100a.pdf) および [XIAO nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf) をご確認ください。

## リソース

### Seeed Studio XIAO nRF52840

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[PDF]** [nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 DXF 寸法図](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Eagle フットプリント](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx)

- 🔗 **[Kicad]** [Seeed Studio XIAO nRF52840 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Seeed Studio XIAO nRF52840 Sense

- **[PDF]** [nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 Sense 回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense DXF 寸法図](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Sense Eagle フットプリント](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 Sense ピン配置シート](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO nRF52840 Sense 3D モデル](https://files.seeedstudio.com/wiki/XIAO-BLE/seeed-studio-xiao-nrf52840-3d-model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO nRF52840 Sense フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Seeed Studio XIAO nRF52840 (Sense) Plus

- **[PDF]** [nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus_PDF.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 (Sense) Plus 回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus_SCH_PCB_v1.1.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 (Sense) Plus KiCAD ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense DXF 寸法図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlA0_nRF52840_Sense_Dimension_in_DXF.dxf)

- **[ZIP]** [Seeed Studio XIAO Plus Base with botton pad lead out](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)

- **[ZIP]** [Seeed Studio XIAO Plus Base without botton pad lead out](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)

- **[Kicad]** [Seeed Studio XIAO nRF52840 (Sense) Plus フットプリント](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Plus-SMD.kicad_mod)

- **[Kicad]** [Seeed Studio XIAO nRF52840 (Sense) Plus シンボル](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_Series.kicad_sym)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
