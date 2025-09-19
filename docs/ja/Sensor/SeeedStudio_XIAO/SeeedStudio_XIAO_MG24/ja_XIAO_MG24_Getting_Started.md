---
title: Seeed Studio XIAO MG24を始める
description: |
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /ja/xiao_mg24_getting_started
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

# Seeed Studio XIAO MG24(Sense)を始める

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>

</div>

## はじめに

**Seeed Studio XIAO MG24** は、Silicon Labs の MG24 をベースにしたミニ開発ボードです。XIAO MG24 は **ARM Cortex-M33 コア**、**32ビット RISC** アーキテクチャをベースとし、最大クロック速度 78MHz で、DSP 命令と FPU 浮動小数点演算をサポートし、強力な計算能力を持ち、内蔵の **AL/ML ハードウェアアクセラレータ MVP** により、AI/機械学習アルゴリズムを効率的に処理できます。次に、優れた RF 性能を持ち、送信**電力は最大+19.5 dBm**、受信感度は**最低-105.4 dBm**です。**Matter、Thread、Zigbee、Bluetooth LE 5.3、Bluetooth mesh** などの複数の IoT および無線伝送プロトコルをサポートしています。

### 仕様

<table align="center">
 <tr>
     <th>項目</th>
     <th>Seeed Studio XIAO MG24</th>
        <th>Seeed Studio XIAO MG24 Sense</th>
 </tr>
 <tr>
     <th>プロセッサ</th>
     <td align="center" colspan="2">Silicon Labs EFR32MG24 <br></br>ARM Cortex-M33 @ 78MHz </td>
 </tr>
 <tr>
     <th>無線</th>
     <td align="center" colspan="2">独自 2.4 GHz <br></br> Zigbee PRO/Green Power プロトコル <br></br> BLE: Bluetooth 5.3、Bluetooth mesh</td>
 </tr>
    <tr>
     <th>内蔵センサー</th>
     <td align="center"> - </td>
        <td align="center">6軸 IMU(LSM6DS3TR-C) <br></br>アナログマイクロフォン(MSM381ACT001)</td>
 </tr>
    <tr>
     <th>メモリ</th>
     <td align="center">256kB RAM & 1538KB + 4MB Flash</td>
        <td align="center">256kB RAM & 1538KB + 4MB Flash</td>
 </tr>
    <tr>
     <th>インターフェース</th>
     <td>2x UART、1x IIC、2x SPI、18x アナログ、18x デジタル、ALL PWM、1x ユーザー LED、1x 充電 LED <br></br> 1x リセットボタン、 </td>
     <td>2x UART、1x IIC、2x SPI、18x アナログ、18x デジタル、ALL PWM、1x ユーザー LED、1x 充電 LED <br></br> 1x リセットボタン、 </td>
 </tr>
    <tr>
     <th>寸法</th>
     <td align="center">21 x 17.8mm</td>
        <td align="center">21 x 17.8mm</td>
 </tr>
    <tr>
     <th rowspan="2">電源</th>
     <td colspan="2" align="center">入力電圧 (Type-C): 5V@14mA <br></br> 入力電圧 (BAT): 3.7V@7mA</td>
 </tr>
    <tr>
     <td align="center">バッテリー充電電流: <strong>200mA</strong></td>
  <td align="center">バッテリー充電電流: <strong>200mA</strong></td>
 </tr>
    <tr>
        <th>低消費電力モデル</th>
        <td>通常: <strong>3.7V/6.71 mA</strong> <br></br> スリープモード: <strong>3.7V/1.91mA</strong> <br></br> ディープスリープモード: <strong>3.7V/1.95μA</strong></td>
        <td>通常: <strong>3.7V/6.71 mA</strong> <br></br> スリープモード: <strong>3.7V/1.91mA</strong> <br></br> ディープスリープモード: <strong>3.7V/1.95μA</strong></td>
    </tr>
    <tr>
        <th>動作温度</th>
        <td colspan="2" align="center">-20°C ~ 70°C</td>
    </tr>
</table>

### 機能

- **強力なCPU**：ARM Cortex-M33コア、最大クロック速度78MHz、DSP命令とFPU浮動小数点演算をサポート、32ビットRISCアーキテクチャ。
- **超低消費電力**：RX電流4.6mA/TX電流5mA（0dBm）、複数の低消費電力スリープモード
- **強力なAI**：AI/MLハードウェアアクセラレータMVPを内蔵、AI/機械学習アルゴリズムを効率的に処理可能。
- **マルチスタイル無線伝送**：2.4GHzマルチプロトコル無線トランシーバーを統合、Matter、OpenThread、Zigbee、Bluetooth LE 5.3、Bluetooth meshなど複数のIoTプロトコルをサポート。
- **優れたRF性能**：優秀なRF性能、送信電力最大+19.5dBm、受信感度最低-105.4dBm（250kbps DSSS）
- **強力なセキュリティ**：Secure Vaultの強力なセキュリティ機能、セキュアブート、暗号化、乱数生成、改ざん防止、セキュアデバッグなどを含む。
- **超小型サイズ**：21 x 17.8mm。
- **豊富なオンチップリソース**：最大1536KB FlashおよびRAM 256KB、十分なストレージ容量。
- **豊富なインターフェース**：12ビット1Msps ADC、温度センサー、アナログコンパレータ、DCDCなどの豊富な周辺機器を統合、最大22ピン、2 USART、2低消費電力UART、1 IICなどのインターフェースを搭載。

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
     <th>XIAO MG24/ XIAO MG24(Sense) ピンリスト</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/modifyMG24.png" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip
  2つの開発ボードの違いは、MG24 Senseにはマイクロフォンセンサーと6軸加速度センサーが搭載されているのに対し、MG24には搭載されていないことです。
:::

- 5V - これはUSBポートからの5V出力です。電圧入力としても使用できますが、外部電源とこのピンの間に何らかのダイオード（ショットキー、信号、電源）を配置し、アノードをバッテリー側、カソードを5Vピン側に接続する必要があります。
- 3V3 - これはオンボードレギュレーターからの調整された出力です。
- GND - 電源/データ/信号グランド

## はじめに

XIAO MG24をより早く使い始められるように、以下のハードウェアとソフトウェアの準備をお読みになり、XIAOを準備してください。

### 工場出荷時の手順

新しいXIAO MG24とXIAO MG24 Senseには、それぞれ簡単な工場出荷プログラムが事前にプログラムされています。

1. **XIAO MG24**

通常版に事前設定されている工場出荷プログラムはBlink Lightです。XIAOに電源を投入すると、オレンジ色のユーザーインジケーターが点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

2. **XIAO MG24 Sense**

通常版に事前設定されている工場出荷プログラムは、大きな声を出すほど明るく光るというものです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/99.gif" style={{width:500, height:'auto'}}/></div>

### ハードウェアの準備

以下を準備する必要があります：

- 1 x [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- 1 x コンピューター
- 1 x USB Type-Cケーブル

:::tip
一部のUSBケーブルは電源供給のみでデータ転送ができません。USBケーブルをお持ちでない場合や、お使いのUSBケーブルがデータ転送可能かわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)をご確認ください。
:::

### ソフトウェアの準備

XIAO MG24の推奨プログラミングツールはArduino IDEですので、ソフトウェア準備の一環としてArduinoのインストールを完了する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** お使いのオペレーティングシステムに応じて、Arduino IDEの安定版をダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

<br></br>

- **ステップ2.** Arduinoアプリケーションを起動します。
- **[ステップ3](#add-board).** XIAO MG24オンボードパッケージをArduino IDEに追加し、`OK`をクリックします。
- **ステップ4.** Arduino IDEを閉じて再度開きます。

#### XIAO MG24ボードの追加 {#add-board}

XIAO MG24ボードをインストールするには、以下の手順に従ってください：

```
https://siliconlabs.github.io/arduino/package_arduinosilabs_index.json 
```

1. 上記のボードマネージャーURLをArduino IDEの設定に追加します。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/13(1).png" style={{width: 'auto', height: 'auto'}}/></div>

2. XIAO MG24ボードパッケージをダウンロードします。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/14(1).png" style={{width: 'auto', height: 'auto'}}/></div>

:::tip
入力後に見つからない場合は、Arduino IDEを再起動してください。
:::

3. `XIAO_MG24`バリアントを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/15.png" style={{width:1000, height:'auto'}}/></div>

これでコーディングを楽しめます ✨。

#### 最初のBlinkプログラムを実行する

- **ステップ 1.** Arduinoアプリケーションを起動します。

- **ステップ 2.** **File > Examples > 01.Basics > Blink**に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/12(1).png" style={{width:1000, height:'auto'}}/></div>

- **ステップ 3.** ボードモデルを**XIAO MG24**に選択し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/16.png" style={{width:1000, height:'auto'}}/></div>

プログラムが正常にアップロードされると、以下の出力メッセージが表示され、XIAO MG24の右側にあるオレンジ色のLEDが点滅していることが確認できます。

<div class="table-center">
 <table align="center">
  <tr>
   <th>MG24 BLink Code</th>
   <th>LED BLink DisPlay</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/7.png" style={{width:700, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/8.gif" style={{width:400, height:'auto'}}/></div></td>
  </tr>
 </table>

</div>

## バッテリー使用方法

XIAO MG24 には内蔵電源管理チップが搭載されており、バッテリーを使用してXIAO MG24 を独立して電源供給したり、XIAO MG24 のUSBポートを通じてバッテリーを充電したりすることができます。

XIAOにバッテリーを接続したい場合は、認定された充電式3.7Vリチウムバッテリーの購入をお勧めします。バッテリーをはんだ付けする際は、正極と負極の端子を区別するよう注意してください。電源の負極端子はUSBポートに最も近い側にあり、電源の正極端子はUSBポートから離れた側にあります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/4444.png" alt="pir" width="800" height="auto"/></div>

:::caution
はんだ付けの際は、正極と負極の端子をショートさせてバッテリーや機器を焼損させないよう注意してください。
:::

**バッテリー使用に関する注意事項：**

1. 仕様に適合した認定バッテリーを使用してください。
2. バッテリーを使用している間、XIAOをデータケーブルでコンピューターデバイスに接続することができます。XIAOには内蔵回路保護チップがあるため安全です。
3. XIAO MG24 はバッテリー電源時にはLEDが点灯しません（特定のプログラムを書いていない限り）。LEDの状態でXIAO MG24 が動作しているかどうかを判断せず、プログラムによって合理的に判断してください。
4. 申し訳ございませんが、現在ソフトウェアを通じてバッテリー残量を確認する方法はありません（利用可能なチップピンがないため）。定期的にバッテリーを充電するか、マルチメーターを使用してバッテリーレベルを確認する必要があります。

同時に、バッテリー充電用の赤色インジケーターライトを設計し、インジケーターライトの表示を通じて充電中のバッテリーの現在の状態をユーザーに知らせます。

1. XIAO MG24 にバッテリーが接続されていない場合、Type-Cケーブルを接続すると赤色ライトが点灯し、30秒後に消灯します。
2. バッテリーが接続され、Type-Cケーブルが接続されて充電中の場合、赤色ライトが点滅します。
3. Type-Cを接続してバッテリーが完全に充電されると、赤色ライトが消灯します。

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
  float voltage = voltageValue * (5.0 / 4095.0);
  
  Serial.print("Voltage: ");
  Serial.print(voltage, 2);
  Serial.println(" V");
  delay(1000);  // delay in between reads for stability
}
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/55.png" alt="pir" width="800" height="auto"/></div>

## ディープスリープとスリープの例

#### デモ1：スリープモードとウェイクアップ

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

#### Demo2 : Deep Sleep Mode and wake-up

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

#### Demo3 : フラッシュとウェイクアップを使用したディープスリープモード

:::tip
フラッシュをディープスリープに設定したい場合は、0xb9レジスタを有効にする必要があります
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

### ディープスリープ中のXIAO MG24のブリック化防止

**XIAO MG24**はSeeed Studioの強力なマイクロコントローラーボードですが、ディープスリープモードに入った後にデバイスが応答しなくなる（「ブリック化」）問題がユーザーから報告されています。このチュートリアルでは、問題の原因を説明し、詳細な復旧方法を提供し、XIAO MG24のブリック化を回避するための予防措置を提案します。

XIAO MG24は電力を節約するために**ディープスリープモード**（EM4）に入りますが、場合によっては正常にウェイクアップできず、新しいスケッチのアップロードができなくなります。他のXIAOボードとは異なり、MG24には専用の**BOOTボタン**やブートモードに入るための文書化された方法がないため、復旧が困難になります。

#### 予防措置

ディープスリープモードを使用する際にXIAO MG24のブリック化を回避するには、以下の手順に従ってください：

1. エスケープピン（PC0）の使用

XIAO MG24にはブリック化を防ぐための内蔵**エスケープメカニズム**があります。リセット中に**PC0**が**LOW**にプルされると、デバイスは無限ループに入り、新しいスケッチをアップロードできるようになります。

- デバイスをリセットする前に**PC0**を**GND**に接続してください。
- リセット後、デバイスがループ状態にある間にスケッチをアップロードしてください。

2. スケッチの修正
ユーザースイッチを検出し、押された場合に無限ループに入る以下のコードをスケッチに追加してください。これにより、デバイスがループしている間に新しいスケッチをアップロードできます：

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

3. 不要な Flash スリープを避ける

スケッチが絶対に必要でない限り、フラッシュメモリをスリープモード（`Deep Power Down`）に入れないようにしてください。これにより、新しいスケッチのアップロード時の問題を防ぐことができます。

#### 謝辞

この問題に対する貴重な貢献と解決策を提供してくれた **Seeed Studio コミュニティ** に特別な感謝を表します。このチュートリアルで説明した復旧方法と予防措置は、**[msfujino](https://forum.seeedstudio.com/u/msfujino)** や **[PJ_Glasso](https://forum.seeedstudio.com/u/PJ_Glasso)** などのコミュニティメンバーからの洞察に基づいて開発されました。

詳細と議論については、元のフォーラムスレッドをご覧ください：  
[DeepSleep bricks XIAO_MG24 - Seeed Studio Forum](https://forum.seeedstudio.com/t/deepsleep-bricks-xiao-mg24/284889)

## アンブリック

XIAO MG24 は現在、シリアルポートチップを搭載した唯一の XIAO モデルです。他の XIAO モデルとは異なり、BOOT ボタンや BOOT 復旧方法がありません。この設計上の見落としにより、デバイスがスリープモードに入ったり、ソフトウェアの異常が発生したりすると、シリアルポート経由でプログラムをアップロードできなくなる問題が発生する可能性があります。これに対処するため、シリアルポートを起動して機能を復元する方法を提供しています。

### Windows での解決策

1. **パッケージのダウンロードと展開**  
   - 提供された ZIP ファイルをダウンロードします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_windows.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ZIP をダウンロード 🖱️</font></span></strong>
    </a>
</div><br />
   - コンピュータ上のフォルダに内容を展開します。

2. **XIAO MG24 の接続**  
   - USB ケーブルを使用して、応答しない XIAO MG24 をコンピュータに接続します。

3. **スクリプトの実行**  
   - 展開したフォルダを開き、スクリプト `flash_erase.bat` を見つけます。  
   - スクリプトをダブルクリックして実行します。  
   - スクリプトはフラッシュメモリを消去し、デバイスをリセットします。

4. **復旧の確認**  
   - スクリプトが完了した後、XIAO MG24 は復元され、使用準備が整います。

### macOS での解決策

1. **パッケージのダウンロードと展開**  
   - 提供された ZIP ファイルをダウンロードします（リンクはここに追加されます）。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_macos.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ZIP をダウンロード 🖱️</font></span></strong>
    </a>
</div><br />
   - コンピュータ上のフォルダに内容を展開します。

2. **XIAO MG24 の接続**  
   - USB ケーブルを使用して、応答しない XIAO MG24 をコンピュータに接続します。

3. **ターミナルアクセスの許可**  
   - **システム環境設定** > **セキュリティとプライバシー** > **プライバシー** を開きます。  
   - **アクセシビリティ** の下で、**ターミナル** がコンピュータを制御することを許可されていることを確認します。  
   - ターミナルがリストにない場合は、**+** ボタンをクリックして手動で追加します。

4. **スクリプトの実行**  
   - **ターミナル** を開きます。  
   - `cd` コマンドを使用して展開したフォルダに移動します。例：  

     ```bash
     cd /path/to/extracted/folder
     ```  

   - 次のコマンドを使用してスクリプト `xiao_mg24_erase.sh` を実行します：  

     ```bash
     ./xiao_mg24_erase.sh
     ```  

   - スクリプトは OpenOCD を使用してフラッシュメモリを消去し、デバイスをリセットします。  

5. **復旧の確認**  
   - スクリプトが完了した後、XIAO MG24 は復元され、使用準備が整います。

:::note

- macOS が OpenOCD を認識しない場合は、OpenOCD がインストールされており、スクリプトで正しいパスが使用されていることを確認してください。  
- 提供されたスクリプトは XIAO MG24 専用に設計されており、他の XIAO モデルでは使用しないでください。  

:::

## Resources

### For Seeed Studio XIAO MG24 Sense

- 📄 **[PDF]** [Seeed Studio XIAO MG24 Sense データシート](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 Sense 回路図](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 Sense ワイヤレス SoC](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)
- 🔗 **[Kicad]** [Seeed Studio XIAO MG24 Sense フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- 📄 **[ZIP]** [Seeed Studio XIAO MG24 Sense PCB&SCH](https://files.seeedstudio.com/wiki/XIAO_MG24/XIAO_MG24_Sense_v1.0_SCH&PCB.zip)

### For Seeed Studio XIAO MG24

- 📄 **[PDF]** [Seeed Studio XIAO MG24 データシート](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 回路図](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 ワイヤレス SoC](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)
- 🔗 **[Kicad]** [Seeed Studio XIAO MG24 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- 📄 **[ZIP]** [Seeed Studio XIAO MG24 PCB&SCH](https://files.seeedstudio.com/wiki/XIAO_MG24/XIAO_MG24_v1.0_SCH&PCB.zip)

## Tech Support & Product Discussion

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
