---
description: Seeed Studio XIAO nRF52840 シリーズ入門ガイド
title: Seeed Studio XIAO nRF52840 シリーズ入門ガイド
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg
slug: /XIAO_BLE
sku: 102010448, 102010469, 102010632, 102010631, 102010672, 102010694, 101991463, 101991465
last_update:
  date: 9/2/2026
  author: Clara
createdAt: '2023-01-16'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/ja/XIAO_BLE/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO nRF52840 シリーズ入門ガイド

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

Seeed Studio XIAO ファミリ初のワイヤレス製品である **Seeed Studio XIAO nRF52840** は、**Bluetooth 5.0** 接続機能を統合した強力な **Nordic nRF52840 MCU** を搭載しています。同時に、**小型で精巧なフォームファクタ** を備えており、ウェアラブルデバイスや IoT プロジェクトに使用できます。**片面実装可能な表面実装設計** とオンボードの **Bluetooth アンテナ** により、IoT プロジェクトを迅速に展開することが大幅に容易になります。

さらに、このボードには上位版である **Seeed Studio XIAO nRF52840 Sense** があります。これは 2 つの追加オンボードセンサを統合しています。1 つは **パルス密度変調 (PDM) デジタルマイク** で、リアルタイムにオーディオデータを取得できるため、音声認識に使用できます。もう 1 つは **6 軸慣性計測ユニット (IMU)** で、ジェスチャ認識のような TinyML プロジェクトで非常に有用です。これらのオンボードセンサにより、ボードが超小型でありながらユーザに大きな利便性を提供します。

新たにアップグレードされた **XIAO nRF52840 Plus と XIAO nRF52840 Sense Plus** は、機能性と使いやすさが大幅に向上しています。多機能ピンの数は **20** 本に増加し、より複雑なプロジェクトをサポートするために **I2S** と **SPI** リソースが追加されました。IoT やスマートカードアプリケーションへの統合を容易にするため **NFC ピン** が引き出され、はんだ付けのしやすさを高めるために **BAT ピン** の位置が変更されており、よりユーザフレンドリなハードウェア体験を実現しています。

Seeed Studio XIAO RP2040 と比較すると、Seeed Studio XIAO nRF52840 は **より豊富なインターフェース** を備えています。まず注目すべき点は、ボード上の **近距離無線通信 (NFC) インターフェース** が使用可能であることです。次に、Type-C インターフェースの側面には小型の **リセットボタン** があります。反対側には、バッテリ接続時の充電状態を示す **チャージ LED** とともに **3-in-one LED (ユーザ LED)** が配置されています。**11 本のデジタル I/O** は **PWM ピン** として使用でき、**6 本のアナログ I/O** は **ADC ピン** として使用できます。**UART、I2C、SPI** といった一般的な 3 種類すべてのシリアルインターフェースをサポートします。Seeed Studio XIAO RP2040 と同様に、**オンボード 2 MB フラッシュ** を搭載しており、**Arduino、MicroPython、CircuitPython などのプログラミング言語** でプログラムすることができます。

Seeed Studio XIAO nRF52840 Sense は Seeed Studio XIAO 拡張ボードと互換性があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 強力なワイヤレス機能：オンボードアンテナ付き Bluetooth 5.0
- 強力な CPU：Nordic nRF52840、FPU 搭載 ARM® Cortex®-M4 32 ビットプロセッサ、64 MHz
- 超低消費電力：スタンバイ時消費電流 5μA 未満
- バッテリ充電チップ：リチウムバッテリの充放電管理をサポート
- オンボード 2 MB フラッシュ
- オンボード PDM マイク（Seeed Studio XIAO nRF52840 Sense のみ）
- オンボード 6 軸 LSM6DS3TR-C IMU（Seeed Studio XIAO nRF52840 Sense のみ）
- 超小型サイズ：21 x 17.8mm、ウェアラブルデバイス向け Seeed Studio XIAO シリーズのクラシックなフォームファクタ
- 豊富なインターフェース：XIAO nRF52840 (Sense) では 1xUART、1xI2C、1xSPI、1xNFC、1xSWD、11xGPIO(PWM)、6xADC、XIAO nRF52840 (Sense) Plus では 2xUART、1xI2C、2xSPI、1xI2S、1xNFC、1xSWD、18xGPIO(PWM)、6xADC
- 片面実装コンポーネント、表面実装設計

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
      <td colspan="4" align="center">Nordic nRF52840, ARM® Cortex®-M4 32-bit processor with FPU, 64 MHz</td>
  </tr>
  <tr>
      <th>ワイヤレス接続</th>
      <td colspan="4" align="center">Bluetooth Low Energy 5.4/
Bluetooth Mesh/NFC</td>
  </tr>
  <tr>
      <th>メモリ</th>
      <td colspan="4" align="center">256 KB RAM,1MB Flash 2MB onboard Flash</td>
  </tr>
  <tr>
      <th>内蔵センサ</th>
      <td align="center">N/A</td>
      <td align="center">6 DOF IMU (LSM6DS3TR-C), PDM Microphone</td>
      <td align="center">N/A</td>
      <td align="center">6 DOF IMU (LSM6DS3TR-C), PDM Microphone</td>
  </tr>
  <tr>
      <th>インターフェース</th>
      <td colspan="2" align="center">1xI2C, 1xUART, 1xSPI</td>
      <td colspan="2" align="center">1xI2C, 2xUART, 2xSPI, 1xI2S</td>
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
      <td colspan="4" align="center">3-in-one LED/ Charge LED</td>
  </tr>
  <tr>
      <th>バッテリ充電チップ</th>
      <td colspan="4" align="center">BQ25101</td>
  </tr>
  <tr>
      <th>対応プログラミング言語</th>
      <td colspan="4" align="center">Arduino/ MicroPython/ CircuitPython</td>
  </tr>
  </table>
</div>

## ハードウェア概要

<Tabs>
<TabItem value="nRF52840" label="XIAO nRF52840" default>

### XIAO nRF52840 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**ピンマップ**

| XIAO ピン               | 機能             | チップピン      | 説明                                                | Arduino 名   |
| :---------------------: | :-------------: | :-------:     | :-------------------------------------------------- | :-------:    |
| 5V                      | VBUS             |               | 電源入力/出力                                       |              |
| GND                     |                  |               |                                                      |              |
| 3V3                     | 3V3_OUT          |               | 電源出力                                            |              |
| D0                      | アナログ         | P0.02         | GPIO, AIN0                                           | 0            |
| D1                      | アナログ         | P0.03         | GPIO, AIN1                                           | 1            |
| D2                      | アナログ         | P0.28         | GPIO, AIN4                                           | 2            |
| D3                      | アナログ         | P0.29         | GPIO, AIN5                                           | 3            |
| D4                      | アナログ, SDA    | P0.04         | GPIO, I2C データ, AIN2                               | 4            |
| D5                      | アナログ, SCL    | P0.05         | GPIO, I2C クロック, AIN3                             | 5            |
| D6                      | TX               | P1.11         | GPIO, UART 送信                                      | 7/6          |
| D7                      | RX               | P1.12         | GPIO, UART 受信                                      | 8/7          |
| D8                      | SPI_SCK          | P1.13         | GPIO, SPI クロック                                   | 9/8          |
| D9                      | SPI_MISO         | P1.14         | GPIO, SPI データ                                     | 10/9         |
| D10                     | SPI_MOSI         | P1.15         | GPIO, SPI データ                                     | 11/10        |
| NFC1                    |                  | P0.09         | NFC                                                  |              |
| NFC2                    |                  | P0.10         | NFC                                                  |              |
| Reset                   |                  | P0.18         | RESET                                                |              |
| ADC_BAT                 | READ_BAT_ENABLE  | P0.14         | バッテリ電圧読み取りの有効化制御                    |              |
| RF Switch Port Select   |                  | P2.05         | オンボードアンテナの切り替え                        |              |
| RF Switch Power         |                  | P2.03         | 電源                                                 |              |
| CHARGE_LED              |                  | P0.17         | CHG-LED_Red                                          |              |
| USER_LED_R              |                  | P0.26         | ユーザ制御の赤色 RGB LED ピン                        | 11           |
| USER_LED_B              |                  | P0.06         | ユーザ制御の青色 RGB LED ピン                        | 13/12        |
| USER_LED_G              |                  | P0.30         | ユーザ制御の緑色 RGB LED ピン                        | 12/13        |

</TabItem>
<TabItem value="nRF52840Plus" label="XIAO nRF52840 Plus">

### XIAO nRF52840 Plus 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Plus 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**ピンマップ**

| XIAO ピン               | 機能                | チップピン | 代替機能              | 説明                                       | Arduino 名  |
| :---------------------: | :-----------------: | :-------: | :----------------: | :-------------------------------------- | :-------:    |
| 5V                      | VBUS                 |           |                    | 電源入力/出力                             |              |
| GND                     |                      |           |                    |                                          |              |
| 3V3                     | 3V3_OUT              |           |                    | 電源出力                                  |              |
| D0                      | アナログ             | P0.02     |                    | GPIO、ADC                                | 0            |
| D1                      | アナログ             | P0.03     |                    | GPIO、ADC                                | 1            |
| D2                      | アナログ             | P0.28     |                    | GPIO、ADC                                | 2            |
| D3                      | アナログ             | P0.29     |                    | GPIO、ADC                                | 3            |
| D4                      | アナログ、SDA        | P0.04     |                    | GPIO、I2C データ、ADC                     | 4            |
| D5                      | アナログ、SCL        | P0.05     |                    | GPIO、I2C クロック、ADC                   | 5            |
| D6                      | TX                   | P1.11     |                    | GPIO、UART 送信                           | 7/6          |
| D7                      | RX                   | P1.12     |                    | GPIO、UART 受信                           | 8/7          |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO、SPI クロック                        | 9/8          |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO、SPI データ                          | 10/9         |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO、SPI データ                          | 11/10        |
| D11                     | I2S_SD               | P0.15     |                    | GPIO、I2S、ADC                           |              |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO、I2S、ADC                           |              |
| D13                     | I2S_WS               | P1.01     |                    | GPIO、I2S、ADC                           |              |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO、UART 受信、ADC                      |              |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO、UART 送信、ADC                      |              |
| D16                     | AIN7_BAT             | P0.31     |                    | バッテリー電圧 ADC 読み取りピン           |              |
| D17                     | SCK1                 | P1.03     |                    | GPIO、SPI                                |              |
| D18                     | MISO1                | P1.05     |                    | GPIO、SPI                                |              |
| D19                     | MOSI1                | P1.07     |                    | GPIO、SPI                                |              |
| ADC_BAT                 | READ_BAT_ENABLE      | P0.14     |                    | バッテリー電圧読み取り用イネーブル制御     |              |
| Reset                   |                      | P0.18     |                    | リセット                                  |              |
| RF Switch Port Select   |                      | P2.05     |                    | オンボードアンテナ切り替え                 |              |
| RF Switch Power         |                      | P2.03     |                    | 電源                                      |              |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_Red                              |              |
| USER_LED_R              |                      | P0.26     |                    | ユーザー制御の赤色 RGB LED ピン           | 11           |
| USER_LED_B              |                      | P0.06     |                    | ユーザー制御の青色 RGB LED ピン           | 13/12        |
| USER_LED_G              |                      | P0.30     |                    | ユーザー制御の緑色 RGB LED ピン           | 12/13        |

</TabItem>
<TabItem value="nRF52840Sense" label="XIAO nRF52840 Sense">

### XIAO nRF52840 Sense 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Sense 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**ピンマップ**

| XIAO ピン               | 機能              | チップピン      | 説明                                               | Arduino 名  |
| :---------------------: | :-------------: | :-------:     | :-------------------------------------------------- | :-------:    |
| 5V                      | VBUS             |               | 電源入力/出力                                       |              |
| GND                     |                  |               |                                                      |              |
| 3V3                     | 3V3_OUT          |               | 電源出力                                             |              |
| D0                      | アナログ          | P0.02         | GPIO、AIN0                                          | 0            |
| D1                      | アナログ          | P0.03         | GPIO、AIN1                                          | 1            |
| D2                      | アナログ          | P0.28         | GPIO、AIN4                                          | 2            |
| D3                      | アナログ          | P0.29         | GPIO、AIN5                                          | 3            |
| D4                      | アナログ、SDA     | P0.04         | GPIO、I2C データ、AIN2                              | 4            |
| D5                      | アナログ、SCL     | P0.05         | GPIO、I2C クロック、AIN3                            | 5            |
| D6                      | TX               | P1.11         | GPIO、UART 送信                                     | 7/6          |
| D7                      | RX               | P1.12         | GPIO、UART 受信                                     | 8/7          |
| D8                      | SPI_SCK          | P1.13         | GPIO、SPI クロック                                  | 9/8          |
| D9                      | SPI_MISO         | P1.14         | GPIO、SPI データ                                    | 10/9         |
| D10                     | SPI_MOSI         | P1.15         | GPIO、SPI データ                                    | 11/10        |
| NFC1                    |                  | P0.09         | NFC                                                  |              |
| NFC2                    |                  | P0.10         | NFC                                                  |              |
| Reset                   |                  | P0.18         | リセット                                             |              |
| ADC_BAT                 | READ_BAT_ENABLE  | P0.14         | バッテリー電圧読み取り用イネーブル制御              |              |
| 6 DOF IMU_PWR           |                  | P1.08         | 6D モジュールの電源スイッチ                         |              |
| 6 DOF IMU__INT1         |                  | P0.11         | 6D モジュールの割り込み信号ピン                     |              |
| PDM Microphone_DATA     |                  | P0.16         | PDM オーディオデータ入力ピン                        |              |
| PDM Microphone_CLK      |                  | P1.00         | PDM オーディオクロック出力ピン                      |              |
| RF Switch Port Select   |                  | P2.05         | オンボードアンテナ切り替え                          |              |
| RF Switch Power         |                  | P2.03         | 電源                                                 |              |
| CHARGE_LED              |                  | P0.17         | CHG-LED_Red                                          |              |
| USER_LED_R              |                  | P0.26         | ユーザー制御の赤色 RGB LED ピン                     | 11           |
| USER_LED_B              |                  | P0.06         | ユーザー制御の青色 RGB LED ピン                     | 13/12        |
| USER_LED_G              |                  | P0.30         | ユーザー制御の緑色 RGB LED ピン                     | 12/13        |

</TabItem>
<TabItem value="nRF52840SensePlus" label="XIAO nRF52840 Sense Plus">

### XIAO nRF52840 Sense Plus 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Sense Plus 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**ピンマップ**

| XIAO ピン                 | 機能                 | チップピン | 代替機能              | 説明                                       | Arduino 名  |
| :---------------------: | :-----------------: | :-------: | :----------------: | :-------------------------------------- | :-------:    |
| 5V                      | VBUS                 |           |                    | 電源入力/出力                             |              |
| GND                     |                      |           |                    |                                          |              |
| 3V3                     | 3V3_OUT              |           |                    | 電源出力                                  |              |
| D0                      | Analog              | P0.02     |                    | GPIO、ADC                                | 0            |
| D1                      | Analog              | P0.03     |                    | GPIO、ADC                                | 1            |
| D2                      | Analog              | P0.28     |                    | GPIO、ADC                                | 2            |
| D3                      | Analog              | P0.29     |                    | GPIO、ADC                                | 3            |
| D4                      | Analog, SDA          | P0.04     |                    | GPIO、I2C データ、ADC                     | 4            |
| D5                      | Analog, SCL          | P0.05     |                    | GPIO、I2C クロック、ADC                   | 5            |
| D6                      | TX                   | P1.11     |                    | GPIO、UART 送信                           | 7/6          |
| D7                      | RX                   | P1.12     |                    | GPIO、UART 受信                           | 8/7          |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO、SPI クロック                        | 9/8          |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO、SPI データ                          | 10/9         |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO、SPI データ                          | 11/10        |
| D11                     | I2S_SD               | P0.15     |                    | GPIO、I2S、ADC                           |              |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO、I2S、ADC                           |              |
| D13                     | I2S_WS               | P1.01     |                    | GPIO、I2S、ADC                           |              |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO、UART 受信、ADC                      |              |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO、UART 送信、ADC                      |              |
| D16                     | AIN7_BAT             | P0.31     |                    | バッテリ電圧 ADC 読み取りピン             |              |
| D17                     | SCK1                 | P1.03     |                    | GPIO、SPI                                |              |
| D18                     | MISO1                | P1.05     |                    | GPIO、SPI                                |              |
| D19                     | MOSI1                | P1.07     |                    | GPIO、SPI                                |              |
| ADC_BAT                 | READ_BAT_ENABLE      | P0.14     |                    | バッテリ電圧読み取り用イネーブル制御       |              |
| 6 DOF IMU_PWR           |                      | P1.08     |                    | 6D モジュールの電源スイッチ               |              |
| 6 DOF IMU__INT1         |                      | P0.11     |                    | 6D モジュールの割り込み信号ピン           |              |
| PDM Microphone_DATA     |                      | P0.16     |                    | PDM オーディオデータ入力ピン              |              |
| PDM Microphone_CLK      |                      | P1.00     |                    | PDM オーディオクロック出力ピン            |              |
| Reset                   |                      | P0.18     |                    | リセット                                   |              |
| RF Switch Port Select   |                      | P2.05     |                    | オンボードアンテナの切り替え              |              |
| RF Switch Power         |                      | P2.03     |                    | 電源                                      |              |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_Red                              |              |
| USER_LED_R              |                      | P0.26     |                    | ユーザー制御の赤色 RGB LED ピン           | 11           |
| USER_LED_B              |                      | P0.06     |                    | ユーザー制御の青色 RGB LED ピン           | 13/12        |
| USER_LED_G              |                      | P0.30     |                    | ユーザー制御の緑色 RGB LED ピン           | 12/13        |

</TabItem>
</Tabs>


## 2 つの Arduino ライブラリ

Seeed Studio XIAO nRF52840 は多くの機能を小さなボード 1 枚に集約しており、ときにはそれぞれの機能を最大限に発揮できない場合があります。そのため Seeed は、**各機能の性能を最大限に引き出す** ために 2 つの Arduino ライブラリを公開しました。したがって：

- **Bluetooth 機能** や「**低消費電力機能**」を利用したい場合は、`Seeed nRF52 Boards` ライブラリを使用することを推奨します。
- **組み込み機械学習アプリケーション** で使用したい場合や、「**IMU & PDM 高度機能**」を利用したい場合は、`Seeed nRF52 mbed-enabled Boards` ライブラリを使用することを推奨します。
- どちらのライブラリも、**LED、デジタル、アナログ、シリアル、I2C、SPI** といった基本的な使い方については非常によくサポートしています。

これら 2 つのライブラリでサポートされるピン定義は少し異なる場合があり、Seeed は内容が明確になるまで wiki を継続的に更新していきます。

:::tip

1. Seeed nRF52 Boards のオンボードパッケージを使用する場合、Serial 機能がコンパイルできないことがあります。解決策として、コード内に `#include <Adafruit_TinyUSB.h>` の行を追加してください。このパッケージは次のリンクからダウンロードできます: https://github.com/adafruit/Adafruit_TinyUSB_Arduino

2. もっと簡単な方法を好む場合は、最初から Seeed nRF52 mbed-enabled Boards を選択することもできます。こちらは Serial 機能のコンパイルを追加の修正なしでサポートします。

:::

## はじめに

まず、Seeed Studio XIAO nRF52840（Sense）をコンピュータに接続し、Arduino IDE から簡単なコードを書き込んで、ボードが正常に動作しているか確認します。

### ハードウェアの準備

次のものを用意します：

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) または [Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

:::tip
一部の USB ケーブルは電源供給のみで、データ転送ができません。USB ケーブルを持っていない場合や、手元の USB ケーブルがデータ転送に対応しているか分からない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) を確認してください。
:::
Seeed Studio XIAO nRF52840（Sense）を USB Type-C ケーブルでコンピュータに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={500} height="auto" /></p>

### ソフトウェアの準備

- **ステップ 1.** お使いのオペレーティングシステムに応じて、最新版の Arduino IDE をダウンロードしてインストールします

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={700} height="auto" /></a></p>

- **ステップ 2.** Arduino アプリケーションを起動します

- **ステップ 3.** Arduino IDE に Seeed Studio XIAO nRF52840（Sense）ボードパッケージを追加します

**File > Preferences** に移動し、**"Additional Boards Manager URLs"** に以下の URL を入力します：
    *https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width="700" height="auto" /></p>

**Tools > Board > Boards Manager...** に移動し、検索ボックスにキーワード「**seeed nrf52**」と入力し、使用したいボードの最新版を選択してインストールします。両方インストールしても構いません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528401.png" alt="pir" width={700} height="auto" /></p>

- **ステップ 4.** ボードとポートを選択します

**ボード**

ボードパッケージをインストールしたら、**Tools > Board** に移動して使用したいボードを選択し、「**Seeed XIAO nRF52840 Sense**」を選びます。これで Arduino IDE 用の Seeed Studio XIAO nRF52840（Sense）の設定は完了です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528402.png" alt="pir" width={700} height="auto" /></p>

**ポート**

**Tools > Port** に移動し、接続されている Seeed Studio XIAO nRF52840（Sense）のシリアルポート名を選択します。これは通常 COM3 以上です（**COM1** と **COM2** は通常ハードウェアシリアルポート用に予約されています）。接続されている Seeed Studio XIAO nRF52840（Sense）のシリアルポートには、**Seeed Studio XIAO nRF52840** の場合は **Seeed Studio XIAO nRF52840**、**Seeed Studio XIAO nRF52840 Sense** の場合は **Seeed Studio XIAO nRF52840 Sense** と、かっこ内に記載されていることが一般的です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/port.png" alt="pir" width={550} height="auto" /></p>

- **ステップ 5.** **File > Examples > 01.Basics > Blink** に移動して、**Blink** サンプルを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={550} height="auto" /></p>

- **Step 6.** **Upload** ボタンをクリックして、Blink サンプルコードをボードに書き込みます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={500} height="auto" /></p>

アップロードが完了すると、内蔵の赤色 LED が 1 秒ごとの間隔で点滅しているのが確認できます。これは接続が正常であることを意味し、これで Seeed Studio XIAO nRF52840 (Sense) を使って、さらに多くのプロジェクトに取り組むことができます！

## 内蔵 3-in-one LED を使ってみる

Seeed Studio XIAO nRF52840 (Sense) にはユーザーがプログラム可能な **オンボード 3-in-one LED** が搭載されています。ここでは Arduino を使って RGB の各色を 1 つずつ制御する方法を学びます。

まず、この LED の動作は、コードで制御する場合に一般的なものとは異なることを理解する必要があります。**LOW 信号** を与えると **LED が点灯し**、**HIGH 信号** を与えると **消灯します**。これは、この LED がコモンアノードで制御されており、低レベル信号のときのみ点灯するためです。

サンプルコードは次のようになります：

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   
}
```

ここでは、**HIGH** が使われていますが、LED は **消灯** します。LED を **点灯** させるには、**HIGH** を **LOW** に置き換える必要があります。

以下の LED のピンマッピングを参照し、コード内で使用してください：

- 赤色 LED = LED_BUILTIN または LED_RED
- 青色 LED = LED_BLUE
- 緑色 LED = LED_GREEN

## 消費電力の検証

Seeed Studio XIAO nRF52840 は低消費電力であり、ここではその検証方法を提供します。ここでは `Seeed nRF52 Boards` ライブラリを使用することを強く推奨します。

- **Step 1.** **JLink** ダウンローダを使用して、Seeed Studio XIAO nRF52840 (Sense) 用の [ブートローダファームウェア](https://github.com/0hotpotman0/BLE_52840_Core/blob/main/bootloader/Seeed_XIAO_nRF52840_Sense/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex) を書き込みます。

:::note
Seeed Studio XIAO nRF52840 の工場出荷時ファームウェアを使用している場合、または Seeed Studio XIAO nRF52840 のファームウェアを一度も変更していない場合は、このステップをスキップできます。
:::

- **Step 2.** ここで `Seeed nRF52 Boards` ライブラリを使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528403.png" alt="pir" width={800} height="auto" /></p>

- **Step 3.** deep_sleep デモをここでアップロードし、**Arduino** で実行します

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
ここで、コードを提供してくださった作者の方に特別な感謝の意を表したいと思います → ***daCoder*** ←
:::

**このサンプルについて、より詳細な情報を知りたい場合は、[こちら](https://forum.seeedstudio.com/t/xiao-sense-accelerometer-examples-and-low-power/270801) をクリックしてください。**

## バッテリー充電電流

バッテリー充電電流は 50mA または 100mA を選択でき、**Pin13** を High または Low に設定することで 50mA か 100mA に切り替えることができます。低電流充電は入力モードを HIGH LEVEL に設定したときであり、高電流充電は出力モードを LOW LEVEL に設定したときです。

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

## デバッグおよびブートローダ再書き込みのために SWD ピンへアクセスする

**必要なハードウェア**

- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Jlink

**必要なソフトウェア**

Web サイトから [Segger](https://www.segger.com/downloads/jlink/) ソフトウェアをダウンロードする必要があります。

- **Step 1.** Jlink を使用して、以下のピンを接続します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD1.png" alt="pir" width={300} height="auto" /></p>

- **Step 2.** J-Flash を起動し、nRF52840 を検索して新しいプロジェクトを作成します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD2.png" alt="pir" width={500} height="auto" /></p>

- **Step 3.** "Target" をクリックし、"Connect" を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD3.png" alt="pir" width={500} height="auto" /></p>

- **Step 4.** bin または [hex ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex) をソフトウェア上にドラッグします。その後、F4 と F5 をこの順番で押します。これで再書き込みは完了です。

## FAQ

### Q1: ボードにコードをアップロードするときに Arduino IDE がフリーズします

まず、「Reset Button」を 1 回クリックしてボードを**リセット**してみてください。それでも解決しない場合は、**ブートローダモード**に入るために素早く 2 回クリックします。それでも動作しない場合は、ボードを PC から取り外し、再度接続してください。

### Q2: Arduino IDE 上でボードがシリアルデバイスとして表示されません

まず、「Reset Button」を 1 回クリックしてボードを**リセット**してみてください。それでも解決しない場合は、**ブートローダモード**に入るために素早く 2 回クリックします。

### Q3: XIAO nRF52840 (Sense) をバッテリー充電に使用する際の注意点は何ですか？

XIAO nRF52840 Sense のバッテリー回路では、**P0.14** が **READ_BAT_ENABLE** 制御ピンであり、**P0.31** がバッテリー電圧を測定するための **AIN7_BAT** ADC 読み取りピンです。

P0.14 を HIGH に設定すると、バッテリー電圧読み取り経路が無効になり、P0.31 は入力電圧上限である 3.6V に達する可能性があり、P0.31 ピンを損傷するリスクがあります。バッテリー電圧を安全に読み取るには、P0.14 を LOW（読み取り経路を有効化）に設定し、その後 P0.31 の ADC 値を読み取ってください。

バッテリー電圧を読み取る際は、常に P0.14 を LOW に設定したままにし、バッテリー充電中に P0.14 を HIGH に設定しないことを推奨します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>

### Q4: 電源投入時、緑色のライトはどのように動作しますか？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nRF_RGB.png" alt="nRF52840 RGB Schematic" width="120" height="auto" /></p>

`P0.17` ピンは緑色のインジケータライトの動作を制御するために使用され、充電状態を示します：

- 低レベル：**充電中** のとき。
- 高レベル：バッテリーが **充電されていない**、または **満充電** のとき。

低レベルのとき、`RED_CHG` LED が点灯します。

詳細については、PMIC のデータシート [BQ25100](https://www.ti.com/lit/ds/symlink/bq25100a.pdf) および [XIAO nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf) を参照してください。

## リソース

### Seeed Studio XIAO nRF52840

**ハードウェア設計**
- **📄[データシート]** [Nordic nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf )
- **📄[データシート]** [Flash P25Q16H-UXH-IR データシート](https://files.seeedstudio.com/wiki/github_weiruanexample/Flash_P25Q16H-UXH-IR_Datasheet.pdf )
- **📄[回路図]** [XIAO nRF52840 回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Res/260828_XIAO_nRF52840.pdf)
- **🗃️[PCB 設計ファイル]** 
  - [XIAO nRF52840 KiCad プロジェクト](https://files.seeedstudio.com/wiki/XIAO-BLE/Res/260828_Seeed_Studio_XIAO_nRF52840_v1.2.zip)
- **🗃️[PCB ライブラリ]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO nRF52840 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx )

**メカニカル設計**
- **📄[2D 寸法]** [DXF 形式の XIAO nRF52840 寸法](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip )
- **📄[2D 寸法]** [XIAO nRF52840 ボトムパッドデータ](https://files.seeedstudio.com/wiki/XIAO-BLE/Bottom-pad-positioning.zip )

### Seeed Studio XIAO nRF52840 Sense

**ハードウェア設計**
- **📄[データシート]** [Nordic nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf )
- **📄[データシート]** [Flash-P25Q16H-UXH-IR データシート](https://files.seeedstudio.com/wiki/github_weiruanexample/Flash_P25Q16H-UXH-IR_Datasheet.pdf )
- **📄[データシート]** [Charger IC-BQ25101 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/BQ25101.pdf )
- **📄[データシート]** [IMU-LSM6DS3TR データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/ST_LSM6DS3TR_Datasheet.pdf )
- **📄[データシート]** [Mic-MSM261D3526H1CPM データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/mic-MSM261D3526H1CPM-ENG.pdf )
- **📄[回路図]** [XIAO nRF52840 Sense 回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_PDF.pdf )
- **🗃️[PCB 設計ファイル]** 
  - [XIAO nRF52840 Sense KiCad プロジェクト](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840V1.1-KiCad-Project-260105.zip )
- **🗃️[PCB ライブラリ]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO nRF52840 Sense ピン配置シート](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx )

**メカニカル設計**
- **📄[2D 寸法]** [DXF 形式の XIAO nRF52840 Sense 寸法](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip )
- **📄[2D 寸法]** [XIAO nRF52840 ボトムパッドデータ](https://files.seeedstudio.com/wiki/XIAO-BLE/Bottom-pad-positioning.zip )
- **📄[3D モデル]** [XIAO nRF52840 Sense 3D モデル](https://files.seeedstudio.com/wiki/XIAO-BLE/seeed-studio-xiao-nrf52840-3d-model.zip )

**その他**
- **📄[ドキュメント]** [XIAO nRF52840 Sense BLE 通信距離テストレポート](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_BLE_nRF52840_BLE_Communication_Distance_Test_Report.pdf )

### Seeed Studio XIAO nRF52840 (Sense) Plus

**ハードウェア設計**
- **📄[データシート]** [Nordic nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf )
- **📄[データシート]** [Flash-P25Q16H-UXH-IR データシート](https://files.seeedstudio.com/wiki/github_weiruanexample/Flash_P25Q16H-UXH-IR_Datasheet.pdf )
- **🗃️[回路図]** [XIAO nRF52840 (Sense) Plus 回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus_SCH_PCB_v1.1.zip )
- **🗃️[PCB 設計ファイル]** 
  - [XIAO nRF52840 (Sense) Plus KiCad プロジェクト](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus.zip )
  - [XIAO Plus Base （ボトムパッド引き出しあり）KiCad プロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip )
  - [XIAO Plus Base （ボトムパッド引き出しなし）KiCad プロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip )
- **🗃️[PCB ライブラリ]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )

**メカニカル設計**
- **🗃️[2D 寸法]** [DXF 形式の XIAO nRF52840 Sense 寸法](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
