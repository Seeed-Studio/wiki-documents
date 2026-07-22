---
description: Seeed Studio XIAO SAMD21 入門ガイド
title: Seeed Studio XIAO SAMD21 入門ガイド
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO
sku: 110010004, 102010388, 102010328
last_update:
  date: 6/30/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO SAMD21 入門ガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" alt="pir" width={600} height="auto" /></p>

以前は Seeeduino XIAO と呼ばれていた Seeed Studio XIAO SAMD21 は、[Arduino と互換性のある、強力な親指サイズの開発ボードシリーズである Seeed Studio XIAO ファミリ](https://www.seeedstudio.com/xiao-series-page)の最初の製品です。低消費電力マイクロコントローラである強力な ATSAMD21G18A-MU を搭載しています。一方で、この小さなボードは処理性能に優れる一方で、必要とする電力は少なくなっています。非常に小型に設計されており、ウェアラブルデバイスや小規模なプロジェクトに使用できます。

Seeed Studio XIAO SAMD21 には 14 本のピンがあり、そのうち 11 本はデジタルインターフェース、11 本はアナログインターフェース、10 本は PWM インターフェース (d1-d10)、1 本は DAC 出力ピン D0、1 つの SWD パッドインターフェース、1 つの I2C インターフェース、1 つの SPI インターフェース、1 つの UART インターフェース、シリアル通信インジケータ (T/R)、ピンの多重化による点滅ライト (L) として使用できます。LED（Power, L, RX, TX）の色は、緑、黄、青、青です。さらに、Seeed Studio XIAO SAMD21 には Type-C インターフェースがあり、電源供給とコードの書き込みが可能です。リセットボタンは 2 つあり、それらを短絡させることでボードをリセットできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## ドキュメント

**Seeed Studio XIAO SAMD21** の使い方に関するドキュメントが 2 つあり、それぞれ異なる分野に焦点を当てています。参考として以下の表を確認してください。

|[**Seeed によるドキュメント**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/)|[**Nanase によるドキュメント**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|ピン配置図|インターフェース|
|Seeed Studio XIAO SAMD21 入門ガイド|Seeed Studio XIAO SAMD21 と MicroSD カード (SPI)|
|Seeed Studio XIAO SAMD21 GPIO の使い方|Seeed Studio XIAO SAMD21 と GPS (UART)|
|Seeed Studio XIAO SAMD21 リソース|シングルサイクル IOBUS|

### Seeed Studio XIAO SAMD21 上の CircuitPython

- [**Seeed Studio XIAO SAMD21 上の CircuitPython**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-CircuitPython) で始めましょう。

## 特長

- 強力な CPU：ARM® Cortex®-M0+ 32bit 48MHz マイクロコントローラ (SAMD21G18)、256KB フラッシュ、32KB SRAM 搭載。
- 柔軟な互換性：Arduino IDE と互換。
- プロジェクトの操作が容易：ブレッドボード対応。
- 小型サイズ：親指ほどの大きさ (21x17.8mm) で、ウェアラブルデバイスや小規模プロジェクトに最適。
- 複数の開発インターフェース：11 本のデジタル/アナログピン、10 本の PWM ピン、1 つの DAC 出力、1 つの SWD ボンディングパッドインターフェース、1 つの I2C インターフェース、1 つの UART インターフェース、1 つの SPI インターフェース。

## 仕様

| 製品名 | Seeed Studio XIAO SAMD21 |
|-------------|-------------------------|
| **チップセット** | [Microchip SAMD21G18](https://www.microchip.com/en-us/product/atsamd21g18 ) |
| **プロセッサ** | 最大 48 MHz で動作する ARM Cortex-M0+ プロセッサ |
| **RAM** | 32KB SRAM |
| **フラッシュ** | 256KB フラッシュ |
| **インターフェース** | GPIO ピン x14<br/>デジタルピン x11<br/>アナログピン x11<br/>DAC x1<br/>I2C x1<br/>UART x1<br/>SPI x1 |
| **オンボード** | ユーザー LED x1<br/>電源 LED x1<br/>シリアル通信ステータス LED (TX/RX インジケータ) x2 |
| **無線接続** | / |
| **電源** | 入力電圧 (Type-C)：5V<br/>入力電圧 (BAT)：5V |
| **最大出力** | 5V@500mA<br/>3.3V@200mA |
| **ソフトウェア互換性** | Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr<br/>[XIAO シリーズ展示 - Seeed Studio Wiki](https://wiki.seeedstudio.com/ja/xiao_topic_page/ ) |
| **動作温度** | -40 ～ 85°C |
| **寸法** | 21×17.8mm |
| **バリエーション** | [Seeed Studio XIAO SAMD21 (Pre-Soldered) - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html  )<br/>[Seeed Studio XIAO SAMD21 - Arduino Microcontroller - SAMD21 Cortex M0+ (3 PCs） - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-3Pcs-p-4546.html  ) |

## **ハードウェア概要**

### 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

:::caution
汎用 I/O ピンについて：
MCU の動作電圧は 3.3V です。汎用 I/O ピンに接続された入力電圧が 3.3V を超えると、チップが損傷する可能性があります。

電源ピンについて：
内蔵の DC-DC コンバータ回路は 5V 電圧を 3.3V に変換でき、VIN-PIN および 5V-PIN を介して 5V 電源でデバイスに給電することができます。

XIAO SAMD21 の背面にある VIN および GND パッドは、バッテリー、特に充電式リチウムバッテリー (LiPo/Li-Ion) を直接接続するために設計されていないことを理解することが重要です。このボードには、安全な動作に必要なバッテリーマネジメント回路が搭載されていません。これらのパッドは、ボード内蔵の保護ダイオードをバイパスする代替の電源入力ポイントにすぎません。プロジェクトをバッテリーで駆動したい場合は、充電と保護機能を備えた専用の外部バッテリーマネジメントモジュールを使用し、そのモジュールの安定化出力を XIAO の 5V ピンに接続する必要があります。

使用時には十分注意し、シールドカバーを持ち上げないでください。
:::

## ピンマップ

| XIAO ピン        | 機能      | チップピン  |   説明      |
| :-------:      | :-----:        | :----------:         |       :---:     |
|5V              |VBUS             |                                      | 電源入力/出力     |
| GND           |                 |                                      |                          |
| 3V3           |   3V3_OUT              |                                |    電源出力           |
|D0             |  アナログ         |   PA02                                |     GPIO, ADC            |
| D1            |   アナログ        |   PA04                                |        GPIO, ADC         |
| D2            |     アナログ      | PA10                                  |    GPIO, ADC             |
| D3            |    アナログ       |  PA11                                 |     GPIO, ADC            |
| D4            |  アナログ,SDA   	| PA08		                              | GPIO, I2C データ, ADC        |
| D5            |  アナログ,SCL     |	PA09	                                |	GPIO, I2C クロック, ADC       |
| D6            | アナログ,TX       |  	PB08	                               |	GPIO, UART 送信, ADC |  
| D7            |アナログ,RX	      |  PB09	                                |   	GPIO, UART 受信, ADC |
|D8             | アナログ,SPI_SCK  | 	PA07	                              |	GPIO, SPI クロック, ADC   |
|D9             | アナログ,SPI_MISO |  	PA05                                |		GPIO, SPI データ, ADC  |
|D10            | アナログ,SPI_MOSI |  PA06	                                | 	GPIO, SPI データ         |
|Reset          |                 |  RES	                                |	リセット                  |
|TX_LED         |                 |   PA19	                              |	TX_LED                 |
|RX_LED         |                 | PA18	                                |	RX_LED                 |
|Power_LED     |          |        VBUS	                                |       	CHG-LED_赤      |
|USER_LED       |                 |   PA17	                              |	ユーザーライト_黄      |

### ブートローダーモードに入る

ユーザーのプログラミング処理が失敗したとき、Seeed Studio XIAO SAMD21 のポートが消えてしまうことがあります。この問題は、次の操作で解決できます。

- Seeed Studio XIAO SAMD21 をコンピュータに接続します。
- ピン配置図の RST ピンを、ピンセットまたは短い配線で 2 回短絡させます。
- オレンジ色の LED ライトが点滅し、その後点灯します。

この時点で、チップはブートローダーモードに入り、書き込みポートが再び現れます。samd21 チップには 2 つのパーティションがあり、1 つはブートローダー、もう 1 つはユーザープログラムです。製品は工場出荷時に、システムメモリ内にブートローダーコードを書き込みます。上記の手順を実行することで、モードを切り替えることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### リセット

Seeed Studio XIAO SAMD21 をリセットしたい場合は、次の手順を実行します。

- Seeed Studio XIAO SAMD21 をコンピュータに接続します。
- ピンセットまたは短い配線で、RST ピンを **1 回だけ** 短絡させます
- オレンジ色の LED ライトが点滅し、その後点灯します。

注意：内蔵 LED の動作は Arduino 上のものとは逆になっています。Seeed Studio XIAO SAMD21 では、ピンを Low にしなければなりませんが、他のマイクロコントローラでは High にする必要があります。  

### 割り込み

Seeed Studio XIAO SAMD21 上のすべてのピンは割り込みをサポートしますが、5 番ピンと 7 番ピンは同時には使用できません。割り込みの詳細については[こちら](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp)を確認してください。

### ピンの多重化

ピンを自分で設定する必要はなく、ピンを使用した後は関数を直接呼び出すことができます。

#### デジタル入力と出力

- ピン 6 をデジタルピンとして使用します：

```c
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

#### AnalogRead

- ピン 6 をアナログピンとして使用します：

```c


void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

#### Serial

- ピン 6 を UART の TX ピンとして使用します（UART の RX ピンはピン 7 です）：

```c

void setup() {
    Serial1.begin(115200);
    while (!Serial);
}

void loop() {
    Serial1.println("Hello,World");
    delay(1000);
}
```

#### I2C

- ピン 5 を IIC の SCL ピンとして使用します（IIC の SDA ピンはピン 4 です）：

```c
// Wire Master Writer
// by Nicholas Zambetti <http://www.zambetti.com>

// Demonstrates use of the Wire library
// Writes data to an I2C/TWI slave device
// Refer to the "Wire Slave Receiver" example for use with this

// Created 29 March 2006

// This example code is in the public domain.


#include <Wire.h>

void setup()
{
  Wire.begin(); // join i2c bus (address optional for master)
}

byte x = 0;

void loop()
{
  Wire.beginTransmission(4); // transmit to device #4
  Wire.write("x is ");        // sends five bytes
  Wire.write(x);              // sends one byte  
  Wire.endTransmission();    // stop transmitting
  x++;
  delay(500);
}
```

#### SPI

- ピン 8 を SPI の SCK ピンとして使用します（SPI の MISO ピンはピン 9、MOSI ピンはピン 10 です）：

```c
#include <SPI.h>
const int CS = 7;
void setup (void) {
   digitalWrite(CS, HIGH); // disable Slave Select
   SPI.begin ();
   SPI.setClockDivider(SPI_CLOCK_DIV8);//divide the clock by 8
}

void loop (void) {
   char c;
   digitalWrite(CS, LOW); // enable Slave Select
   // send test string
   for (const char * p = "Hello, world!\r" ; c = *p; p++) {
      SPI.transfer (c);
   }
   digitalWrite(CS, HIGH); // disable Slave Select
   delay(2000);
}
```

#### QTouch

QTouch の使用方法については、サンプルプロジェクトを用意しています：[How to Make a Fruit Piano on Seeed Studio XIAO SAMD21 ’s Q-Touch Function](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/)。

#### アナログ入力と出力

PWM ベースの「アナログ出力」を備えているだけでなく、SAMD21 にはデジタル-アナログコンバータ（DAC）という形で真のアナログ出力機能もあります。このモジュールは 0〜3.3V のアナログ電圧を生成できます。より自然な音のオーディオを生成したり、アナログデバイスを制御するための一種の「デジタル可変抵抗」として使用したりできます。

DAC は Arduino のピン A0 でのみ利用可能で、analogWrite(A0, `<value>`) を使用して制御します。DAC は最大 10 ビット分解能に設定できます（セットアップ内で必ず [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/) を呼び出してください）。これは、0〜1023 の値が 0〜3.3V の間のどこかの電圧を設定することを意味します。

DAC に加えて、SAMD21 の ADC チャンネルも ATmega328 とは一線を画しており、最大 12 ビット分解能を備えています。つまり、アナログ入力値は 0〜4095 の範囲を取り、0〜3.3V の電圧を表します。ADC を 12 ビットモードで使用するには、セットアップ内で必ず [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/) を呼び出してください。

**DAC をシリアルプロットする**

次の例では、DAC と ADC の両方を示します。実験をセットアップするには、A0 を A1 に接続します — A0 をアナログ電圧で駆動し、それを A1 で読み取ります。これは、これまでのチュートリアルの中で最もシンプルな回路です：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
Seeed Studio XIAO SAMD21 は [**Seeed Studio XIAO SAMD21 expansion board**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) を使用しています
:::

このスケッチは A0 に 0〜3.3V の範囲の値を持つ正弦波出力を生成します。次に A1 を使用して、その出力を ADC に読み込み、0〜3.3V の電圧に変換します。

もちろん、シリアルモニタを開いて電圧値のストリームを確認することもできます。しかし、テキストだけでは正弦波をイメージしにくい場合は、Tools > Serial Plotter から Arduino の新しい Serial Plotter を確認してみてください。  

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

コードを提供してくださり、関連するすべての機能を開発・貢献してくださった [Aleksei Tertychnyi](https://github.com/WeSpeakEnglish) 氏に感謝いたします。

```cpp
#define DAC_PIN A0 // Make code a bit more legible
float x = 0; // Value to take the sin of
float increment = 0.02;  // Value to increment x by each time
// Frequency of sine wave is about 1.37 Hz

void setup() 
{
  analogWriteResolution(10); // Set analog out resolution to max, 10-bits
  analogReadResolution(12); // Set analog input resolution to max, 12-bits

  Serial.begin(9600);
}

void loop() 
{
  // Generate a voltage value between 0 and 1023. 
  // Let's scale a sin wave between those values:
  // Offset by 511.5, then multiply sin by 511.5.
  int dacVoltage = (int)(511.5 + 511.5 * sin(x));
  x += increment; // Increase value of x

  // Generate a voltage between 0 and 3.3V.
  // 0= 0V, 1023=3.3V, 512=1.65V, etc.
  analogWrite(DAC_PIN, dacVoltage);

  // Now read A1 (connected to A0), and convert that
  // 12-bit ADC value to a voltage between 0 and 3.3.
  float voltage = analogRead(A1) * 3.3 / 4096.0;
  Serial.println(voltage); // Print the voltage.
  delay(1); // Delay 1ms
}
```

**結果**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/THonny_DAC.jpg" alt="pir" width={600} height="auto" /></p>

## はじめに

### ハードウェア

**必要な部材**

- Seeed Studio XIAO SAMD21 x1
- コンピュータ x1
- USB Type-C ケーブル x1

:::tip

一部の USB ケーブルは電源供給のみで、データ転送ができません。USB ケーブルを持っていない場合や、お使いの USB ケーブルがデータ転送に対応しているか分からない場合は、[seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html) を確認してください。
:::

- ステップ 1. Seeed Studio XIAO SAMD21 と Type-C ケーブルを用意します。

- ステップ 2. Seeed Studio XIAO SAMD21 をコンピュータに接続します。その後、黄色の電源 LED が点灯するはずです。

### ソフトウェア

:::note

Arduino を初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino) を参照することを強くお勧めします。
:::

- **ステップ 1. Arduino ソフトウェアをインストールする必要があります。**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**Arduino アプリケーションを起動する**

事前にダウンロードした Arduino アプリケーション（arduino.exe）をダブルクリックします。

:::note

Arduino ソフトウェアが別の言語で起動した場合は、設定ダイアログで変更できます。詳細については [Arduino Software (IDE) ページ](https://www.arduino.cc/en/Guide/Environment#languages) を参照してください。
:::

- **ステップ 2. Blink のサンプルを開く**  

LED 点滅のサンプルスケッチを開きます：**File > Examples >01.Basics > Blink**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3. Seeeduino を Arduino IDE に追加する**

**File > Preference** をクリックし、Additional Boards Manager URLs に以下の URL を入力します：

*https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

**Tools-> Board-> Boards Manager...** をクリックし、検索欄にキーワード "**Seeed Studio XIAO SAMD21**" を入力します。"Seeed SAMD Boards" が表示されるので、インストールします。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4. ボードとポートを選択する**

ボードをインストールしたら、**Tools-> Board** をクリックし、「**Seeed Studio XIAO**」を見つけて選択します。これで Arduino IDE 用の Seeed Studio XIAO SAMD21 ボードの設定が完了しました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

Tools | Serial Port メニューから Arduino ボードのシリアルデバイスを選択します。これは通常 COM3 以上です（**COM1** と **COM2** は通常ハードウェアシリアルポート用に予約されています）。確認するには、Arduino ボードを取り外してからメニューを再度開き、消えたエントリが Arduino ボードであるはずです。ボードを再接続し、そのシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5. プログラムをアップロードする**  

あとは、環境内の「Upload」ボタンをクリックするだけです。数秒待ち、アップロードが成功すると、ステータスバーに「Done uploading.」というメッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" /></p>

 アップロードが完了して数秒後、ボード上のピン 13（L）の LED が（オレンジ色で）点滅し始めるはずです。そうなれば、おめでとうございます！Arduino が正常に動作しました。問題がある場合は、トラブルシューティングの提案を参照してください。

:::note
フラッシュの最大サイズは 8KB です。詳細情報はリソース内の ATSAMD218A-MU データシートを参照してください
:::

## サンプルアプリケーション

- [Seeed Studio XIAO SAMD21 を使用して Raspberry PI にログインする方法](https://wiki.seeedstudio.com/ja/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [SPI 通信インターフェース](https://wiki.seeedstudio.com/ja/XIAO-SPI-Communication-Interface)

- [Raspberry Pi を使用して故障した XIAO を復旧する方法](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990)。共有してくれた John_Doe に感謝します。

## リソース

**ハードウェア設計**
- **📄[データシート]** [Atmel SAMD21G18 データシート](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[回路図]** [XIAO SAMD21 回路図](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)
- **🗃️[PCB 設計ファイル]** 
  - [XIAO SAMD21 KiCad プロジェクト](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO_SAMD21_v2.1_SCH&PCB_20260304.zip)  
  - [XIAO SAMD21 Eagle プロジェクト](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[PCB ライブラリ]** 
  - [XIAO シリーズ フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置シート]** [XIAO SAMD21 ピン配置シート](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx )

**メカニカル設計**
- **📄[2D 寸法]** [DXF 形式の XIAO 寸法](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[3D モデル]** [XIAO SAMD21 3D モデル](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

**ソフトウェア & ツール**
- **📄[工場出荷時ファームウェア]** [XIAO SAMD21 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip )

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

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
