---
title: Seeed Studio XIAO MG24(Sense) 入門ガイド
description: |
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /ja/xiao_mg24_getting_started
sku: 102010590,102010610,102010693,102010690,102010691,102010692
keywords:
  - XIAO
  - MG24
last_update:
  date: 10/17/2024
  author: Jason
sidebar_position: 0
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg" style={{width:600, height:'auto'}}/></div>
<br />

# Seeed Studio XIAO MG24(Sense) 入門ガイド

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO MG24</th>
   <th>Seeed Studio XIAO MG24 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop0.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## はじめに

**Seeed Studio XIAO MG24** は、Silicon Labs の MG24 をベースにした小型開発ボードです。XIAO MG24 は **ARM Cortex-M33 コア**、**32-bit RISC** アーキテクチャを採用し、最大 78MHz のクロック周波数で動作し、DSP 命令および FPU 浮動小数点演算をサポートし、強力な演算能力を備えています。さらに、内蔵の **AL/ML ハードウェアアクセラレータ MVP** により、AI/機械学習アルゴリズムを効率的に処理できます。加えて、優れた RF 性能を持ち、送信 **電力は最大 +19.5 dBm**、受信感度は **最小 -105.4 dBm** を実現しています。**Matter、Thread、Zigbee、Bluetooth LE 5.3、Bluetooth mesh** など、複数の IoT および無線伝送プロトコルをサポートします。

### 仕様

<table>
  <tr>
    <th>製品</th>
    <td>XIAO MG24</td>
    <td><a href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">XIAO MG24 Sense</a></td>
  </tr>
  <tr>
    <th>プロセッサ</th>
    <td colspan="2">Silicon Labs EFR32MG24<br/>ARM Cortex-M33 @ 78MHz</td>
  </tr>
  <tr>
    <th>RAM</th>
    <td colspan="2">256kB</td>
  </tr>
  <tr>
    <th>フラッシュ</th>
    <td colspan="2">1536KB + 4MB オンボード</td>
  </tr>
  <tr>
    <th>LED</th>
    <td colspan="2">1x ユーザー LED<br/>1x 電源 LED</td>
  </tr>
  <tr>
    <th>センサー</th>
    <td>-</td>
    <td>1x オンボード アナログマイク<br/>1x オンボード 6 軸 IMU</td>
  </tr>
  <tr>
    <th>インターフェース</th>
    <td colspan="2">22 ピン（全て PWM）：<br/>19x アナログ<br/>19x デジタル<br/>1x I²C<br/>2x UART<br/>2x SPI</td>
  </tr>
  <tr>
    <th>ボタン</th>
    <td colspan="2">1x RESET ボタン</td>
  </tr>
  <tr>
    <th>セキュリティ</th>
    <td colspan="2">ハードウェア暗号アクセラレーション、真性乱数生成器、ARM® TrustZone®、セキュアブート、セキュアデバッグアンロック など</td>
  </tr>
  <tr>
    <th>低消費電力（代表値）</th>
    <td colspan="2">1.95μA</td>
  </tr>
  <tr>
    <th>通常動作（代表値）</th>
    <td colspan="2">6.71mA</td>
  </tr>
  <tr>
    <th>スリープ（代表値）</th>
    <td colspan="2">1.91mA</td>
  </tr>
  <tr>
    <th>ソフトウェア互換性</th>
    <td colspan="2">Arduino IDE</td>
  </tr>
  <tr>
    <th>対応アンテナ</th>
    <td colspan="2">最大 2.4GHz セラミックアンテナ: 4.97dBi</td>
  </tr>
  <tr>
    <th>動作温度</th>
    <td colspan="2">-20°C~70°C</td>
  </tr>
  <tr>
    <th>寸法</th>
    <td colspan="2">21×17.8 mm</td>
  </tr>
</table>

### 特長

- **高性能 CPU**：ARM Cortex-M33 コア、最大クロック 78MHz、DSP 命令および FPU 浮動小数点演算をサポートする 32-bit RISC アーキテクチャ。
- **超低消費電力**：RX 電流 4.6mA / TX 電流 5mA（0dBm）、複数の低消費電力スリープモード。
- **強力な AI 性能**：AI/ML ハードウェアアクセラレータ MVP を内蔵し、AI/機械学習アルゴリズムを効率的に処理可能。
- **多様な無線伝送**：2.4GHz マルチプロトコル無線トランシーバを統合し、Matter、OpenThread、Zigbee、Bluetooth LE 5.3、Bluetooth mesh など複数の IoT プロトコルをサポート。
- **優れた RF 性能**：送信電力は最大 +19.5 dBm、受信感度は最小 -105.4 dBm（250kbps DSSS）と、優れた RF 性能を実現。
- **強力なセキュリティ**：Secure Vault の強力なセキュリティ機能を備え、セキュアブート、暗号化、乱数生成、タンパープルーフ、セキュアデバッグなどをサポート。
- **超小型サイズ**：21 x 17.8mm。
- **豊富なオンチップリソース**：最大 1536KB のフラッシュと 256KB の RAM を搭載し、十分なストレージ容量を提供。
- **豊富なインターフェース**：12 ビット 1Msps ADC、温度センサー、アナログコンパレータ、DCDC などの豊富なペリフェラルを統合し、最大 22 ピン、2 USART、2 つの低消費電力 UART、1 IIC などのインターフェースを備えています。

## ハードウェア概要

<table align="center">
 <tr>
     <th>XIAO MG24 Sense 表示図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24sense_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
   <tr>
     <th>XIAO MG24 表示図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO MG24/ XIAO MG24(Sense) ピン一覧</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/modifyMG24.png" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip
  2 つの開発ボードの違いは、MG24 Sense にはマイクロフォンセンサーと 6 軸加速度センサーが搭載されていますが、MG24 には搭載されていない点です。
:::

- 5V - これは USB ポートからの 5V 出力です。また、このピンを電圧入力として使用することもできますが、外部電源とこのピンの間には、アノードをバッテリー側、カソードを 5V ピン側に接続したダイオード（ショットキー、信号用、電力用のいずれか）が必要です。
- 3V3 - これはオンボードレギュレータからの安定化出力です。
- GND - 電源/データ/信号のグラウンド

## **ピンマップ**
| XIAO ピン               | 機能             | チップピン | 代替機能              | 説明                                   |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | 電源入力/出力                         |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | 電源出力                              |
| D0                      | Analog          | PC00      |                    | GPIO, ADC                            |
| D1                      | Analog          | PC01      |                    | GPIO, ADC                            |
| D2                      | Analog          | PC02      |                    | GPIO, ADC                            |
| D3                      | Analog          | PC03      |                    | GPIO, SPI, ADC                       |
| D4                      | Analog,SDA       | PC04      |                    | GPIO, I2C Data, ADC                  |
| D5                      | Analog,SCL       | PC05      |                    | GPIO, I2C Clock, ADC                 |
| D6                      | Analog,TX0       | PC06      |                    | GPIO, UART Transmit, ADC             |
| D7                      | Analog,RX0       | PC07      |                    | GPIO, UART Receive, ADC              |
| D8                      | Analog,SCK0      | PA03      |                    | GPIO, SPI Clock, ADC                 |
| D9                      | Analog,MISO0     | PA04      |                    | GPIO, SPI Data, ADC                  |
| D10                     | Analog,MOSI0     | PA05      |                    | GPIO, SPI Data, ADC                  |
| D11                     | Analog          | PA09      | SAMD11_TX          | GPIO, UART Receive, ADC              |
| D12                     | Analog          | PA08      | SAMD11_RX          | GPIO, UART Transmit, ADC             |
| D13                     | Analog          | PB02      |                    | GPIO, I2C Clock, ADC                 |
| D14                     | Analog          | PB03      |                    | GPIO, I2C Data, ADC                  |
| D15                     | Analog,MOSI1     | PB00      |                    | GPIO, SPI Data, ADC                  |
| D16                     | Analog,MISO1     | PB01      |                    | GPIO, SPI Data, ADC                  |
| D17                     | Analog,SCK1      | PA00      |                    | GPIO, SPI Clock, ADC                 |
| D18                     | Analog,CS        | PD02      | Csn                | GPIO, Csn, ADC               |
| ADC_BAT                 |                  | PD04      |                    | BAT 電圧値の読み取り                  |
| RF Switch Port Select   |                  | PB04      |                    | オンボードアンテナと UFL アンテナの切り替え |
| RF Switch Power         |                  | PB05      |                    | RF 電源                              |
| Reset                   |                  | RESET     |                    | リセット                              |
| CHARGE_LED              |                  | VBUS      |                    | CHG-LED_Red                          |
| USER_LED                |                  | PA07      |                    | ユーザーライト_イエロー               |


## はじめに

XIAO MG24 をすばやく使い始められるように、以下のハードウェアおよびソフトウェアの準備を読んで、XIAO の準備を行ってください。

### 工場出荷時の手順

新しい XIAO MG24 および XIAO MG24 Sense には、それぞれ簡単な工場出荷時プログラムがあらかじめ書き込まれています。

1. **XIAO MG24**

通常版にプリセットされている工場出荷時プログラムは Blink Light です。XIAO の電源を入れると、オレンジ色のユーザーインジケータが点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

2. **XIAO MG24 Sense**

通常版にプリセットされている工場出荷時プログラムは、「大きな声を出すほどライトが明るくなる」というものです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/99.gif" style={{width:500, height:'auto'}}/></div>

### ハードウェアの準備

以下を準備する必要があります：

- 1 x [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

:::tip
一部の USB ケーブルは電源供給のみで、データ転送ができません。USB ケーブルを持っていない場合や、お使いの USB ケーブルがデータ転送に対応しているか分からない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) を確認してください。
:::

### ソフトウェアの準備

XIAO MG24 に推奨されるプログラミングツールは Arduino IDE です。そのため、ソフトウェアの準備として Arduino のインストールを完了する必要があります。

:::tip
初めて Arduino を使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

- **ステップ 1.** お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

<br></br>

- **ステップ 2.** Arduino アプリケーションを起動します。
- **[ステップ 3](#XIAO-MG24-ボードを追加する).**  Arduino IDE に XIAO MG24 のオンボードパッケージを追加し、`OK` をクリックします。
- **ステップ 4.** Arduino IDE を一度閉じてから、再度開きます。

#### XIAO MG24 ボードを追加する {#XIAO-MG24-ボードを追加する}

XIAO MG24 ボードをインストールするには、次の手順に従います：

```
https://siliconlabs.github.io/arduino/package_arduinosilabs_index.json 
```

1. 上記のボードマネージャ URL を Arduino IDE の環境設定に追加します。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/13(1).png" style={{width: 'auto', height: 'auto'}}/></div>

2. XIAO MG24 ボードパッケージをダウンロードします。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/14(1).png" style={{width: 'auto', height: 'auto'}}/></div>

:::tip
入力しても見つからない場合は、Arduino IDE を再起動してください。
:::

3. `XIAO_MG24` バリアントを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/15.png" style={{width:1000, height:'auto'}}/></div>

さあ、コーディングを楽しみましょう ✨。

#### 最初の Blink プログラムを実行する

- **ステップ 1.** Arduino アプリケーションを起動します。

- **ステップ 2.** **File > Examples > 01.Basics > Blink** に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/12(1).png" style={{width:1000, height:'auto'}}/></div>

- **ステップ 3.** ボードモデルを **XIAO MG24** に選択し、正しいポート番号を選択してプログラムを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/16.png" style={{width:1000, height:'auto'}}/></div>

プログラムが正常に書き込まれると、次のような出力メッセージが表示され、XIAO MG24 の右側にあるオレンジ色の LED が点滅しているのを確認できます。

<div class="table-center">
 <table align="center">
  <tr>
   <th>MG24 BLink コード</th>
   <th>LED BLink 表示</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/7.png" style={{width:700, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/8.gif" style={{width:400, height:'auto'}}/></div></td>
  </tr>
 </table>
</div>

## バッテリーの使用

XIAO MG24 には電源管理チップが内蔵されており、バッテリーを使用して XIAO MG24 に単独で給電したり、XIAO MG24 の USB ポートを介してバッテリーを充電したりすることができます。

XIAO 用にバッテリーを接続したい場合は、規格に適合した充電式 3.7V リチウムバッテリーの購入をお勧めします。バッテリーをはんだ付けする際は、必ず正極と負極を区別してください。電源の負極は USB ポートに最も近い側であり、電源の正極は USB ポートから離れた側です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/4444.png" alt="pir" width="800" height="auto"/></div>

:::caution
はんだ付けの際に正極と負極を短絡させて、バッテリーや機器を焼損させないよう十分注意してください。
:::

**バッテリー使用上の注意：**

1. 規格を満たした適切なバッテリーを使用してください。
2. バッテリー使用中でも、XIAO はデータケーブルを介してコンピュータ機器に接続できます。XIAO には保護回路チップが内蔵されているため、安全です。
3. XIAO MG24 はバッテリー駆動時には（特定のプログラムを書き込んでいない限り）いかなる LED も点灯しません。LED の状態で XIAO MG24 が動作しているかどうかを判断しないでください。必ず自分のプログラムに基づいて適切に判断してください。
4. 申し訳ありませんが、現在のところソフトウェアを通じて残りのバッテリー残量を確認する方法はありません（利用可能なチップのピンが残っていないため）ので、定期的にバッテリーを充電するか、マルチメータを使用してバッテリー残量を確認する必要があります。

同時に、バッテリー充電用に赤色のインジケータライトを設計しており、インジケータの表示によって充電中のバッテリーの現在の状態をユーザーに知らせます。

1. XIAO MG24 にバッテリーが接続されていない場合、Type-C ケーブルを接続すると赤色のライトが点灯し、30 秒後に消灯します。
2. バッテリーを接続し、充電のために Type-C ケーブルを接続すると、赤色のライトが点滅します。
3. Type-C を接続してバッテリーが満充電になると、赤色のライトは消灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/battery_mg24.jpg" style={{width:600, height:'auto'}}/></div>

## バッテリー電圧の読み取り

**ソフトウェアコード**

```cpp
/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogReadSerial
*/

// the setup routine runs once when you press reset:
void setup() {
  Serial.begin(115200);
  pinMode(PD3, OUTPUT);
  digitalWrite(PD3, HIGH);
}

void loop() {
  int voltageValue = analogRead(PD4);
  float voltage = voltageValue * (2 * 3.3 / 4095.0);

  Serial.print("Voltage: ");
  Serial.print(voltage, 2);
  Serial.println(" V");
  delay(1000);  // delay in between reads for stability
}
```

**表示結果**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/55.png" alt="pir" width="800" height="auto"/></div>

## ディープスリープとスリープのサンプル

#### デモ1 : スリープモードとウェイクアップ

```cpp

/*
   ArduinoLowPower timed sleep example

   The example shows the basic usage of the Arduino Low Power library by putting the device to sleep for a period of time.
   The device will enter sleep mode for 2000ms. During sleep the CPU is stopped but the RAM retains its contents.

   This example is compatible with all Silicon Labs Arduino boards.

   Author: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("Sleep with timed wakeup");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("Going to sleep at %lu\n", millis());
  LowPower.sleep(2000);
  Serial.printf("Woke up at %lu\n", millis());
}
```

#### デモ2 : ディープスリープモードとウェイクアップ

```cpp
/*
   ArduinoLowPower deep sleep example with external or timed wakeup

   The example shows the basic usage of the Arduino Low Power library by putting the device into deep sleep.
   The device will remain in deep sleep until the sleep timer expires.
   During deep sleep the whole device is powered down except for a minimal set of peripherals (like the Back-up RAM and RTC).
   This means that the CPU is stopped and the RAM contents are lost - the device will start from the beginning of the sketch after waking up.

   This example is compatible with all Silicon Labs Arduino boards.

   Author: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("Deep sleep timed wakeup");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("Going to deep sleep for 10s at %lu\n", millis());
  LowPower.deepSleep(10000);
}


```

#### デモ3 : フラッシュ付きディープスリープモードとウェイクアップ

:::tip
フラッシュをディープスリープに設定したい場合は、0xb9 レジスタを有効にする必要があります。
:::

```cpp
/*
   ArduinoLowPower deep sleep example with external or timed wakeup

   The example shows the basic usage of the Arduino Low Power library by putting the device into deep sleep.
   The device will remain in deep sleep until the sleep timer expires.
   During deep sleep the whole device is powered down except for a minimal set of peripherals (like the Back-up RAM and RTC).
   This means that the CPU is stopped and the RAM contents are lost - the device will start from the beginning of the sketch after waking up.

   This example is compatible with all Silicon Labs Arduino boards.

   Author: Tamas Jozsi (Silicon Labs)
 */
#include <Arduino.h>
#include "ArduinoLowPower.h"

#define CS_PIN PA6
#define CLK_PIN PA3
#define MOSI_PIN PA5
#define MISO_PIN PA4

#define READ_DATA 0x03
#define WRITE_ENABLE 0x06
#define PAGE_PROGRAM 0x02
#define SECTOR_ERASE 0x20

void sendSPI(byte data) {
  for (int i = 0; i < 8; i++) {
    digitalWrite(MOSI_PIN, data & 0x80);
    data <<= 1;
    digitalWrite(CLK_PIN, HIGH);
    delayMicroseconds(1);
    digitalWrite(CLK_PIN, LOW);
    delayMicroseconds(1);
  }
}

void writeEnable() {
  digitalWrite(CS_PIN, LOW);
  sendSPI(WRITE_ENABLE);
  digitalWrite(CS_PIN, HIGH);
}

void setup()
{
  //Serial.begin(115200);
  pinMode(PA7, OUTPUT);
  digitalWrite(PA7, LOW);

  pinMode(CS_PIN, OUTPUT);
  pinMode(CLK_PIN, OUTPUT);
  pinMode(MOSI_PIN, OUTPUT);
  pinMode(MISO_PIN, INPUT);


  //SW
  pinMode(PD3, OUTPUT);
  pinMode(PB5, OUTPUT);
  pinMode(PB1, OUTPUT);
  pinMode(PB0, OUTPUT);
  pinMode(PA6, OUTPUT);
  digitalWrite(PD3, LOW); //VBAT
  digitalWrite(PB5, LOW); //RF_SW
  digitalWrite(PB1, LOW); //IMU
  digitalWrite(PB0, LOW); //MIC
  digitalWrite(PA6, HIGH);  //FLASH

  //Serial.println("Deep sleep timed wakeup");
  writeEnable();
  digitalWrite(CS_PIN, LOW);
  sendSPI(0xB9);
  digitalWrite(CS_PIN, HIGH);
}

void loop()
{
  delay(12000);  
  digitalWrite(PA7, HIGH);
  delay(500);

  //Serial.printf("Going to deep sleep for 10s at %lu\n", millis());
  LowPower.deepSleep(600000);
}

```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/100.png" style={{width:1000, height:'auto'}}/></div>

### Deep Sleep 中の XIAO MG24 のブリック化防止

**XIAO MG24** は Seeed Studio の高性能なマイコンボードですが、Deep Sleep モードに入った後にデバイスが反応しなくなる（「ブリック」する）という報告があります。本チュートリアルでは、この問題の原因を説明し、詳細な復旧方法と、XIAO MG24 がブリックするのを防ぐための予防策を紹介します。

XIAO MG24 は省電力のために **Deep Sleep モード**（EM4）に入りますが、場合によっては正しくウェイクアップできず、新しいスケッチを書き込めなくなることがあります。他の XIAO ボードと異なり、MG24 には専用の **BOOT ボタン**や、ブートモードに入るための公式な方法がないため、復旧が難しくなっています。

#### 予防策

Deep Sleep モードを使用する際に XIAO MG24 がブリックしないようにするには、次の手順に従ってください：

1. エスケープピン（PC1）を使用する

XIAO MG24 には、ブリックを防ぐための **エスケープ機構** が内蔵されています。リセット中に **PC1** を **LOW** にプルダウンすると、デバイスは無限ループに入り、新しいスケッチを書き込めるようになります。  

- リセットする前に **PC1** を **GND** に接続します。  
- リセット後、デバイスがループ中にある間にスケッチを書き込みます。  

2. スケッチを修正する
ユーザースイッチを検出し、押された場合に無限ループに入るように、次のコードをスケッチに追加します。これにより、デバイスがループしている間に新しいスケッチを書き込むことができます：

```cpp
#define USER_SW  PC3   // Example pin for user switch

void setup() {
  // Other setup code...

  pinMode(USER_SW, INPUT_PULLUP);
  if (digitalRead(USER_SW) == LOW) {
    Serial.println("Enable to upload new sketch");
    while (true) {
      digitalWrite(LED_BUILTIN, LOW);
      delay(50);
      digitalWrite(LED_BUILTIN, HIGH);
      delay(50);
    }
  }
}
```

3. 不要なフラッシュスリープを避ける

特別な理由がない限り、スケッチでフラッシュメモリをスリープモード（`Deep Power Down`）にしないようにしてください。これにより、新しいスケッチの書き込みに関する問題を防ぐことができます。

#### 謝辞

この問題に対する貴重な提案や解決策を提供してくださった **Seeed Studio コミュニティ** の皆様に心より感謝いたします。本チュートリアルで紹介した復旧方法と予防策は、**[msfujino](https://forum.seeedstudio.com/u/msfujino)** や **[PJ_Glasso](https://forum.seeedstudio.com/u/PJ_Glasso)** など、コミュニティメンバーの洞察に基づいて作成されています。  

詳細や議論については、元のフォーラムスレッドをご覧ください：  
[DeepSleep bricks XIAO_MG24 - Seeed Studio Forum](https://forum.seeedstudio.com/t/deepsleep-bricks-xiao-mg24/284889)

## ブリック状態からの復旧

XIAO MG24 は、現在シリアルポートチップを搭載している唯一の XIAO モデルです。他の XIAO モデルとは異なり、BOOT ボタンや BOOT 復旧方法がありません。この設計上の見落としにより、デバイスがスリープモードに入ったりソフトウェア異常が発生したりした際に、シリアルポート経由でプログラムを書き込めなくなる問題が起こり得ます。これに対処するため、シリアルポートをウェイクアップして機能を復元する方法を用意しました。

### Windows 向けソリューション

1. **パッケージをダウンロードして展開する**  
   - 提供された ZIP ファイルをダウンロードします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_windows.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download the ZIP 🖱️</font></span></strong>
    </a>
</div><br />
   - コンピュータ上の任意のフォルダに内容を展開します。

2. **XIAO MG24 を接続する**  
   - USB ケーブルを使用して、反応しない XIAO MG24 をコンピュータに接続します。

3. **スクリプトを実行する**  
   - 展開したフォルダを開き、`flash_erase.bat` スクリプトを探します。  
   - スクリプトをダブルクリックして実行します。  
   - スクリプトはフラッシュメモリを消去し、デバイスをリセットします。

4. **復旧を確認する**  
   - スクリプトの実行が完了したら、XIAO MG24 は復旧し、再び使用できる状態になっているはずです。

### macOS 向けソリューション

1. **パッケージをダウンロードして展開する**  
   - 提供された ZIP ファイルをダウンロードします（リンクはここに追加されます）。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_macos.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download the ZIP 🖱️</font></span></strong>
    </a>
</div><br />
   - コンピュータ上の任意のフォルダに内容を展開します。

2. **XIAO MG24 を接続する**  
   - USB ケーブルを使用して、反応しない XIAO MG24 をコンピュータに接続します。

3. **Terminal へのアクセスを許可する**  
   - **System Preferences** > **Security & Privacy** > **Privacy** を開きます。  
   - **Accessibility** の項目で、**Terminal** にコンピュータの制御が許可されていることを確認します。  
   - Terminal が一覧にない場合は、**+** ボタンをクリックして手動で追加します。

4. **スクリプトを実行する**  
   - **Terminal** を開きます。  
   - `cd` コマンドを使って、展開したフォルダに移動します。例：  

     ```bash
     cd /path/to/extracted/folder
     ```  

   - 次のコマンドを使用して、`xiao_mg24_erase.sh` スクリプトを実行します：  

     ```bash
     ./xiao_mg24_erase.sh
     ```  

   - スクリプトは OpenOCD を使用してフラッシュメモリを消去し、デバイスをリセットします。  

5. **復旧を確認する**  
   - スクリプトの実行が完了したら、XIAO MG24 は復旧し、再び使用できる状態になっているはずです。

:::note

- macOS が OpenOCD を認識しない場合は、OpenOCD がインストールされていること、およびスクリプト内で正しいパスが使用されていることを確認してください。  
- 提供されているスクリプトは XIAO MG24 専用に設計されており、他の XIAO モデルでは使用しないでください。  

:::

## リソース

### Seeed Studio XIAO MG24 向け

**ハードウェア設計**
- **📄[Datasheet]** [Silicon Labs EFR32MG24 Datasheet](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF )
- **📄[Reference Manual]** [Silicon Labs EFR32MG24 Reference Manual](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf )
- **📄[Schematic]** [XIAO MG24 Schematic](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf )
- **🗃️[PCB Design Files]** [XIAO MG24 KiCad Project](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MG24_v1.0_KiCad_260114.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )

### Seeed Studio XIAO MG24 Sense 向け

**ハードウェア設計**
- **📄[Datasheet]** [Silicon Labs EFR32MG24 Datasheet](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF )
- **📄[Reference Manual]** [Silicon Labs EFR32MG24 Reference Manual](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf )
- **📄[Schematic]** [XIAO MG24 Sense Schematic](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf )
- **🗃️[PCB Design Files]** [XIAO MG24 Sense KiCad Project](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MG24_v1.0_KiCad_260114.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
