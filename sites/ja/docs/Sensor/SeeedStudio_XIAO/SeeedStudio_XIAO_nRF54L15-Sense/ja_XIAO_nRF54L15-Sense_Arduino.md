---
description: 'この記事は、開発者 lolren によって作成された nRF54L15 向け Arduino コアに基づいて作成されており、XIAO nRF54L15 ユーザーが Arduino IDE 上で開発するための参考チュートリアルを提供することを目的としています。'
title: Seeed Studio XIAO nRF54L15 向け Arduino
keywords:
  - nRF54L15
  - xiao
  - Arduino
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_6.webp
slug: /xiao_nrf54l15_sense_arduino
last_update:
  date: 4/22/2026
  author: Zeller
createdAt: '2025-04-22'
updatedAt: '2026-04-24'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_arduino/
---

この記事は、Arduino プラットフォーム上での XIAO nRF54L15 Sense をベースに作成されています。

## 謝辞

nRF54L15 チップ向けの Arduino 対応サポートを提供してくださった開発者 **[lolren](https://github.com/lolren)** 氏に特別な感謝を表します。これにより、Arduino エコシステム上での XIAO nRF54L15 の開発と実用的な応用が可能になりました。また、関連するオープンソースエコロジー構築への継続的な取り組みと貢献にも感謝いたします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/lolren/nrf54-arduino-core" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> lolren のリポジトリ</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## はじめに

### ハードウェアの準備

開始する前に、XIAO nRF54L15 または XIAO nRF54L15 Sense のいずれかのハードウェアを用意してください。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15</th>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### ソフトウェア

:::tip
初めて Arduino を使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

- **Step 1.** お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
  </div>
  <br></br>

- **Step 2.** Boards Manager URL を追加します

  File → Preferences を開きます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_1.png" style={{width:400, height:'auto'}}/></div><br/>

  Additional Boards Manager URLs フィールドに、XIAO nRF54L15 をサポートするための URL を追加します。

```js
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_2.png" style={{width:800, height:'auto'}}/></div><br/>

- **Step 3.** **XIAO nRF54L15 / Sense** とシリアルポートを選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_3.png" style={{width:800, height:'auto'}}/></div><br/>

- **Step 4.** プログラムを書き込みます

```c
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_4.png" style={{width:800, height:'auto'}}/></div><br/>

結果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

## デジタル

デジタルピンは、High/Low の論理レベルを読み書きするための MCU インターフェースであり、外部データの取得や周辺機器の制御に使用されます。本セクションでは、LED のオン・オフ制御と PWM によるブリージングライト効果を実装することで、デジタルピンの機能を説明します。

### ハードウェアの準備

XIAO nRF54L15 Sense と Grove デバイスを用意する必要があります。

<table align="center">
  <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>Seeed Studio Grove Base for XIAO</th>
         <th>Grove – Chainable RGB LED</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2017-07bazaar501790_10402004845.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="Grove – Chainable RGB LED V2.0" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### ソフトウェア

lolren のリポジトリでは、XIAO nRF54L15 の D0 から D10 のピンは PIN_D0 から PIN_D10 として再定義されています。

```c
void setup() {
  pinMode(PIN_D0, OUTPUT);
}

void loop() {
  digitalWrite(PIN_D0, LOW);
  delay(500);
  digitalWrite(PIN_D0, HIGH);
  delay(500);

  for (int i = 0; i <= 255; i++) {
      analogWrite(PIN_D0, i);  // The duty cycle increases gradually.
      delay(5);
    }

  for (int i = 255; i >= 0; i--) {
        analogWrite(PIN_D0, i);  // The duty cycle decreases gradually.
        delay(5);
    }
}
```

### 結果

Grove – Chainable RGB LED を Seeed Studio Grove Base for XIAO の Pin 0 に接続します。Grove – Chainable RGB LED は点滅と徐々に暗くなるブリージング効果を示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_2.gif" style={{width:800, height:'auto'}}/></div><br/>

## UART

UART は非同期ハーフデュプレックス通信プロトコルであり、デバイスのデバッグ、ログ出力、データ伝送によく使用されます。XIAO nRF54L15 には 1 組の UART ピンが用意されています。本セクションでは、シリアルデータの出力を通して UART の使用方法を示します。

### ハードウェアの準備

XIAO nRF54L15 と CH340 デバイスを用意する必要があります。

<table align="center">
 <tr>
        <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>CH340G USB to Serial (TTL) Module&Adapter</th>
 </tr>
 <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-317990026-ch340g-usb-to-serial-_ttl_-module_adapter_1.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェア

XIAO nRF54L15 では、D6 と D7 はそれぞれ TX と RX ピンに対応しています。lolren によるピン再定義ファイルでは、D6 と D7 は **PIN_SERIAL1_RX** と **PIN_SERIAL1_TX** として定義されています。使用可能なシリアルポートは **Serial1** または **Serial2** です。

:::tip
XIAO nRF54L15 のピン配置に慣れていない場合は、[XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#ハードウェア概要) をクリックして確認してください。
:::

:::caution
`Serial`（USB シリアルポート）には `PIN_SERIAL1_RX` と `PIN_SERIAL1_TX` を使用しないでください。
これはデフォルトのダウンロードおよびデバッグチャネルを妨害し、プログラムの書き込み失敗（SWD/CDC の動作不良）を引き起こす可能性があります。
:::

```c
#define RX_PIN PIN_SERIAL1_RX
#define TX_PIN PIN_SERIAL1_TX
#define BAUD 115200

void setup() {
    // Set RX and TX pins
    Serial1.setPins(RX_PIN, TX_PIN);

    // Initialize baud rate and communication configuration
    Serial1.begin(BAUD, SERIAL_8N1); 
}

void loop() {
    Serial1.print("Hello XIAO nRF54L15!\n");
    delay(1000);
}
```

### 結果

:::tip
<br/>
配線
<table align="center">
 <tr>
     <th>XIAO nRF54L15</th>
     <th>CH340G USB to Serial (TTL) Module&Adapter</th>
 </tr>
  <tr>
     <th>RX</th>
     <th>TX</th>
 </tr>
  <tr>
     <th>TX</th>
     <th>RX</th>
 </tr>
  <tr>
     <th>GND</th>
     <th>GND</th>
 </tr>
   <tr>
     <th>VBUS</th>
     <th>5V</th>
 </tr>
</table>
:::

任意のシリアルモニタツールを開き、ボーレートを 115200 に設定すると、出力データを観察できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_5.png" style={{width:800, height:'auto'}}/></div><br/>

## アナログ

アナログピンは、ADC を介して連続した電圧信号を読み取るために使用されます。可変抵抗器、フォトレジスタ、温度検出用サーミスタ、アナロググレースケールセンサ、赤外線センサなど、さまざまなセンサを接続できます。本セクションでは、可変抵抗ノブの調整値を読み取ることでアナログピンの機能をデモンストレーションします。

### ハードウェアの準備

XIAO nRF54L15 Sense と Grove デバイスを用意する必要があります。

<table align="center">
 <tr>
     <th>Seeed Studio XIAO nRF54L15 Sense</th>
     <th>Grove-Rotary Angle Sensor </th>
     <th>Seeed Studio Grove Base for XIAO </th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェア

XIAO nRF54L15 には A0 から A3 まで、4 組のアナログピンがあります。lolren によって提供されるピン再定義では、これらのピンは PIN_A0 から PIN_A3 として定義されています。

:::tip
XIAO nRF54L15 のピン配置に慣れていない場合は、[XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#ハードウェア概要) をクリックして確認してください。
:::

```c
const int analogPin = PIN_A0;

void setup() {
  Serial.begin(115200);
  analogReadResolution(12);
}

void loop() {
  int analogValue = analogRead(analogPin);

  // Assume reference voltage is 3.3V
  int voltage_mv = analogValue * 3300 / 4095;

  Serial.printf("ADC value = %d\n", analogValue);
  Serial.printf("Voltage = %d mV\n", voltage_mv);

  delay(1000);
}
```

### 結果

Grove-Rotary Angle Sensor を Seeed Studio Grove Base for XIAO に接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_5.jpg" style={{width:800, height:'auto'}}/></div><br/>

ノブを回すと、Arduino Serial Monitor に ADC の読み取り値と変換されたアナログ電圧が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_3.png" style={{width:800, height:'auto'}}/></div><br/>

## I2C

I2C は同期式シリアル通信プロトコルで、SCL クロックラインと SDA データラインを介してマスタデバイスとスレーブデバイス間のマルチデバイス通信を可能にします。XIAO nRF54L15 / Sense は 2 組の I2C インターフェースを提供します。本セクションでは、Expansion Board Base for XIAO 上の OLED ディスプレイを制御することで I2C の機能をデモンストレーションします。

### ハードウェアの準備

XIAO nRF54L15 Sense と、I2C インターフェースを備えたデバイスを用意する必要があります。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>Seeed Studio Expansion Board Base for XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### ソフトウェア

XIAO nRF54L15 では、D4 と D5 がそれぞれ SCL と SDA ピンとして機能します。
lolren フレームワークでは、ピン D4 は **PIN_WIRE_SCL**、ピン D5 は **PIN_WIRE_SDA** として再定義されています。

:::tip
XIAO nRF54L15 のピン配置に慣れていない場合は、[XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#ハードウェア概要) をクリックして確認してください。
:::

```c
#include <U8x8lib.h>
#include <Wire.h>

#define SCL PIN_WIRE_SCL
#define SDA PIN_WIRE_SDA

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(0);
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);

  u8x8.setCursor(2, 10);
  u8x8.print("Hello World!");
  u8x8.setCursor(1, 28);
  u8x8.print("XIAO nRF54L15!");
}
```

### 結果

プログラムを書き込むと、Expansion Board Base for XIAO 上に「Hello World!」と「XIAO nRF54L15!」というフレーズが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_4.jpg" style={{width:800, height:'auto'}}/></div><br/>

## SPI

SPI は同期式シリアルかつフルデュプレックスの通信プロトコルです。一般的に SCK クロック、MOSI、MISO、CS の 4 本の配線を使用して、マスタデバイスとスレーブデバイス間で高速なデータ転送を実現します。I2C と比較して、SPI はより高い伝送速度、低いレイテンシ、よりシンプルで分かりやすい通信が特徴です。しかし、より多くのピンを必要とし、各スレーブデバイスは通常、独立したチップセレクトラインを占有します。Flash メモリ、SD カード、LCD/OLED ディスプレイ、ADC/DAC モジュール、高速センサなどの高速ペリフェラルの接続によく使用されます。本セクションでは、電子ペーパーディスプレイを接続することで SPI の使用方法をデモンストレーションします。

### ハードウェアの準備

XIAO nRF54L15 と、SPI 通信をサポートするデバイスを用意する必要があります。

 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>ePaper Driver Board for Seeed Studio XIAO</th>
   <th>2.9" Monochrome eInk</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper-driver-board-for-xiao.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-104990853-2.9-monochrome-eink--epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>

### ソフトウェア

- GxEPD2 ライブラリをインストールします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_6.png" style={{width:400, height:'auto'}}/></div><br/>

Lolren のピン再定義ファイルに従って、SPI ピンを修正しマクロ定義します。

```c
#include <Arduino.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <Fonts/FreeMonoBold9pt7b.h>
#include <Fonts/FreeMonoBold12pt7b.h>

// -------- Pin Definitions (from pins_arduino.h) --------
// PIN_D0=RST, PIN_D1=CS, PIN_D3=DC, PIN_D5=BUSY
// SPI: SCK=PIN_D8, MISO=PIN_D9, MOSI=PIN_D10 (macros are already defined)
#define EPD_RST  PIN_D0   // 0
#define EPD_CS   PIN_D1   // 1
#define EPD_DC   PIN_D3   // 3
#define EPD_BUSY PIN_D2   // 5

// -------- 029BN-T94-D2 Driver --------
GxEPD2_BW<GxEPD2_290_T94_V2, GxEPD2_290_T94_V2::HEIGHT> display(
  GxEPD2_290_T94_V2(EPD_CS, EPD_DC, EPD_RST, EPD_BUSY)
);

const char* LINE1 = "Hello XIAO nRF54L15";

void setup() {
  Serial.begin(115200);
  delay(2000);
  Serial.println("=== EPaper Start ===");

  // Close serial port to avoid TX(D1) interfering with CS(D1)
  delay(100);
  Serial.end();

  // Directly specify using macros, fully consistent with pins_arduino.h
  SPI.setPins(PIN_SPI_SCK, PIN_SPI_MISO, PIN_SPI_MOSI, -1);
  SPI.begin();

  // Pass 0 to disable GxEPD2 internal serial debug output
  display.init(0);
  display.setRotation(1);  // Landscape 296×128
  display.setTextColor(GxEPD_BLACK);
  display.setFullWindow();

  display.firstPage();
  do {
    display.fillScreen(GxEPD_WHITE);

    // ---- LINE1: Large font, upper half ----
    display.setFont(&FreeMonoBold12pt7b);
    int16_t tbx, tby;
    uint16_t tbw, tbh;
    display.getTextBounds(LINE1, 0, 0, &tbx, &tby, &tbw, &tbh);
    uint16_t x1 = (display.width()  - tbw) / 2 - tbx;
    uint16_t y1 = display.height() / 2 - 4;
    display.setCursor(x1, y1);
    display.print(LINE1);

  } while (display.nextPage());

  display.hibernate();

  // Reopen serial port for confirmation after screen refresh
  Serial.begin(115200);
  delay(100);
  Serial.println("=== Done ===");
}

void loop() {
  delay(1000000);
}
```

### 結果

プログラムを書き込むと、`Hello XIAO nRF54L15` が電子ペーパー画面に表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_6.jpg" style={{width:800, height:'auto'}}/></div>

## FAQ

- Q1: プログラムを書き込む際に、py のパスがないというメッセージが表示されます。

- A: C:\Users\yourname\AppData\Local\Arduino15\packages\nrf54l15clean\hardware\nrf54l15clean\0.6.27\platform.txt を開きます。
  - `tools.python3.cmd.windows=py` を `tools.python3.cmd.windows=python` に変更します。
  - `tools.python3.args.windows=-3` を `tools.python3.args.windows=` に変更します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
