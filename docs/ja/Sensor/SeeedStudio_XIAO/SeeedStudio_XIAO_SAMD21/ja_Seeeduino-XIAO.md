---
description: Seeed Studio XIAO SAMD21の使用開始
title: Seeed Studio XIAO SAMD21の使用開始
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO SAMD21の使用開始

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO SAMD21は、以前はSeeeduino XIAOと呼ばれていましたが、[Arduinoと互換性のある親指サイズの強力な開発ボードシリーズであるSeeed Studio XIAOファミリー](https://www.seeedstudio.com/xiao-series-page)の最初のデビュー作です。低消費電力マイクロコントローラーである強力なATSAMD21G18A-MUを搭載しています。一方、この小さなボードは処理性能が良好でありながら、消費電力は少なくて済みます。小型サイズで設計されており、ウェアラブルデバイスや小規模プロジェクトに使用できます。

Seeed Studio XIAO SAMD21は14個のPINを持ち、ピン多重化により11個のデジタルインターフェース、11個のアナログインターフェース、10個のPWMインターフェース（d1-d10）、1個のDAC出力ピンD0、1個のSWDパッドインターフェース、1個のI2Cインターフェース、1個のSPIインターフェース、1個のUARTインターフェース、シリアル通信インジケーター（T/R）、点滅ライト（L）として使用できます。LED（Power、L、RX、TX）の色は緑、黄、青、青です。さらに、Seeed Studio XIAO SAMD21は電源供給とコードダウンロードが可能なType-Cインターフェースを備えています。2つのリセットボタンがあり、それらをショート接続してボードをリセットできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## **ドキュメント**

**Seeed Studio XIAO SAMD21**の使用に関する2つのドキュメントがあり、それぞれ異なる分野に焦点を当てています。参考として以下の表をご確認ください：

|[**Seedによるドキュメント**](https://wiki.seeedstudio.com/Seeeduino-XIAO/)|[**Nanaseによるドキュメント**](https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|ピン配置図|インターフェース|
|Seeed Studio XIAO SAMD21使用開始|Seeed Studio XIAO SAMD21とMicroSDカード（SPI）|
|Seeed Studio XIAO SAMD21 GPIO使用方法|Seeed Studio XIAO SAMD21とGPS（UART）|
|Seeed Studio XIAO SAMD21リソース|シングルサイクルIOBUS|

### **CircuitPython on Seeed Studio XIAO SAMD21**

- [**Seeed Studio XIAO SAMD21 での CircuitPython**](https://wiki.seeedstudio.com/Seeeduino-XIAO-CircuitPython)を始めましょう。

## **特徴**

- 強力なCPU：ARM® Cortex®-M0+ 32bit 48MHzマイクロコントローラー（SAMD21G18）、256KB Flash、32KB SRAM搭載。
- 柔軟な互換性：Arduino IDEと互換性があります。
- 簡単なプロジェクト操作：ブレッドボードフレンドリー。
- 小型サイズ：ウェアラブルデバイスや小型プロジェクト向けに親指サイズ（21x17.8mm）。
- 複数の開発インターフェース：11個のデジタル/アナログピン、10個のPWMピン、1個のDAC出力、1個のSWDボンディングパッドインターフェース、1個のI2Cインターフェース、1個のUARTインターフェース、1個のSPIインターフェース。

## **仕様**

|項目|値|
|---|---|
|CPU|最大48MHzで動作するARM Cortex-M0+ CPU（SAMD21G18）|
|フラッシュメモリ|256KB|
|SRAM|32KB|
|デジタルI/Oピン|11|
|アナログI/Oピン|11|
|I2Cインターフェース|1|
|SPIインターフェース|1|
|QTouch|7（A0,A1,A6,A7,A8,A9,A10）|
|UARTインターフェース|1|
|電源供給およびダウンロードインターフェース|Type-C|
|電源|3.3V/5V DC|
|寸法|21×17.8×3.5mm|

## **ハードウェア概要**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/img/new1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino%20XIAO%20pinout%202.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/regulator_to_3.3v.png" alt="pir" width={600} height="auto" /></p>

:::caution
一般的なI/Oピンについて：
MCUの動作電圧は3.3Vです。一般的なI/Oピンに接続される電圧入力が3.3Vより高い場合、チップの損傷を引き起こす可能性があります。

電源供給ピンについて：
内蔵DC-DCコンバータ回路は5V電圧を3.3Vに変換することができ、VIN-PINと5V-PINを介して5V電源でデバイスに電力を供給することができます。

XIAO SAMD21は現在バッテリー電源供給のみをサポートしており、**バッテリーが接続されている間はType-Cに接続することはできません**。安全上のリスクを引き起こす可能性があります。

使用時は注意し、シールドカバーを持ち上げないでください。
:::

### **ブートローダーモードに入る**

ユーザーのプログラミングプロセスが失敗した場合、Seeed Studio XIAO SAMD21のポートが消失することがあります。以下の操作でこの問題を解決できます：

- Seeed Studio XIAO SAMD21をコンピュータに接続します。
- ピンセットまたはショート線を使用して、図のRSTピンを2回ショートします。
- オレンジ色のLEDが点滅し、点灯します。

この時点で、チップはブートローダーモードに入り、書き込みポートが再び表示されます。samd21チップには2つのパーティションがあり、1つはブートローダー、もう1つはユーザープログラムです。製品は工場出荷時にシステムメモリにブートローダーコードを書き込みます。上記の手順を実行することでモードを切り替えることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### **リセット**

Seeed Studio XIAO SAMD21をリセットしたい場合は、以下の手順を実行してください：

- Seeed Studio XIAO SAMD21をコンピュータに接続します。
- ピンセットまたはショート線を使用してRSTピンを**1回だけ**ショートします
- オレンジ色のLEDが点滅し、点灯します。

注意：内蔵LEDの動作はArduinoのものとは逆です。Seeed Studio XIAO SAMD21では、ピンをローに引く必要がありますが、他のマイクロコントローラーではハイに引く必要があります。

### **割り込み**

Seeed Studio XIAO SAMD21のすべてのピンは割り込みをサポートしていますが、2つのピンを同時に使用することはできません：5番ピンと7番ピンです。割り込みの詳細については[こちら](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp)をご確認ください。

### **ピン多重化**

ピンを自分で設定する必要はありません。ピンを使用した後、関数を直接呼び出すことができます。

#### **デジタル入力と出力**

- ピン6をデジタルピンとして使用：

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

#### **AnalogRead**

- アナログピンとしてピン6を使用：

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

#### **シリアル**

- UART の TX ピンとしてピン 6 を使用します（UART の RX ピンはピン 7 です）：

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

#### **I2C**

- ピン5をIICのSCLピンとして使用（IICのSDAピンはピン4）：

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

#### **SPI**

- Use pin 8 as the SCK pin of SPI(MISO pin of SPI is pin 9,MOSI pin of SPI is pin 10):

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

#### **QTouch**

QTouchの使用方法については、サンプルプロジェクトを提供しています：[Seeed Studio XIAO SAMD21 のQ-Touch機能でフルーツピアノを作る方法](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/)。

#### **アナログ入力と出力**

PWMベースの「アナログ出力」を持ちながら、SAMD21はデジタル-アナログコンバータ（DAC）の形で真のアナログ出力も備えています。このモジュールは0から3.3Vの間のアナログ電圧を生成できます。より自然な音でオーディオを生成したり、アナログデバイスを制御する「デジタルポテンショメータ」として使用できます。

DACはArduinoピンA0でのみ利用可能で、analogWrite(A0, `<value>`)を使用して制御されます。DACは最大10ビット解像度に設定できます（セットアップで[**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/)を呼び出すことを確認してください）。これは0から1023の値が電圧を0から3.3Vの間のどこかに設定することを意味します。

DACに加えて、SAMD21のADCチャンネルもATmega328とは異なります：最大12ビット解像度を備えています。これはアナログ入力値が0-4095の範囲で、0から3.3Vの間の電圧を表すことを意味します。ADCを12ビットモードで使用するには、セットアップで[**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/)を呼び出すことを確認してください。

**DACのシリアルプロッティング**

以下はDACとADCの両方を実演する例です。実験をセットアップするには、A0をA1に接続してください -- A0をアナログ電圧で駆動し、A1でそれを読み取ります。これまでのチュートリアルで最もシンプルな回路です：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
Seeed Studio XIAO SAMD21は[**Seeed Studio XIAO SAMD21 拡張ボード**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)を使用しています
:::

このスケッチはA0で正弦波出力を生成し、値は0から3.3Vの範囲です。次にA1を使用してその出力をADCに読み込み、0から3.3Vの間の電圧に変換します。

もちろん、シリアルモニターを開いて電圧値のストリームを表示できます。しかし、正弦波がテキストで視覚化するのが困難な場合は、Tools > Serial PlotterでArduinoの新しいSerial Plotterをチェックしてください。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

#### **DAC**

コードを提出してくれた[Aleksei Tertychnyi](https://github.com/WeSpeakEnglish)に感謝します。関連するすべての機能は彼によって開発され、貢献されました。

```cpp
#define DAC_PIN A0 // Make code a bit more legible
float x = 0; // Value to take the sin of
float increment = 0.02;  // Value to increment x by each time
int frequency = 440; // Frequency of sine wave

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

## **はじめに**

### **ハードウェア**

**必要な材料**

- Seeed Studio XIAO SAMD21 x1
- コンピュータ x1
- USB Type-C ケーブル x1

:::tip

一部のUSBケーブルは電源供給のみで、データ転送ができません。USBケーブルをお持ちでない場合、またはお使いのUSBケーブルがデータ転送可能かわからない場合は、[seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)をご確認ください。
:::

- ステップ1. Seeed Studio XIAO SAMD21 とType-Cケーブルを準備します。

- ステップ2. Seeed Studio XIAO SAMD21 をコンピュータに接続します。黄色の電源LEDが点灯するはずです。

### **ソフトウェア**

:::note

Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino)を参照することを強くお勧めします。
:::

- **ステップ1. Arduinoソフトウェアをインストールする必要があります。**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

**Arduinoアプリケーションを起動**

以前にダウンロードしたArduinoアプリケーション（arduino.exe）をダブルクリックします。

:::note

Arduinoソフトウェアが異なる言語で読み込まれる場合は、設定ダイアログで変更できます。詳細については、[Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages)を参照してください。
:::

- **ステップ2. Blinkサンプルを開く**  

LED blinkサンプルスケッチを開きます：**File > Examples >01.Basics > Blink**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **ステップ3. Arduino IDEにSeeduinoを追加**

**File > Preference**をクリックし、Additional Boards Manager URLsに以下のURLを入力します：

*https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

**Tools-> Board-> Boards Manager...**をクリックし、検索欄にキーワード「**Seeed Studio XIAO SAMD21**」を入力します。「Seeed SAMD Boards」が表示されます。これをインストールします。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

- **ステップ4. ボードとポートを選択**

ボードをインストール後、**Tools-> Board**をクリックし、「**Seeed Studio XIAO**」を見つけて選択します。これでArduino IDE用のSeeed Studio XIAO SAMD21ボードの設定が完了しました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

Tools | Serial Portメニューから、Arduinoボードのシリアルデバイスを選択します。これは通常COM3以上になります（**COM1**と**COM2**は通常ハードウェアシリアルポート用に予約されています）。確認するには、Arduinoボードを切断してメニューを再度開きます。消えたエントリがArduinoボードのはずです。ボードを再接続し、そのシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ5.プログラムをアップロード**  

環境内の「Upload」ボタンをクリックします。数秒待って、アップロードが成功すると、ステータスバーに「Done uploading.」というメッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" /></p>

 アップロード完了から数秒後、ボード上のピン13（L）LED（オレンジ色）が点滅し始めるはずです。点滅すれば、おめでとうございます！Arduinoが正常に動作しています。問題がある場合は、トラブルシューティングの提案を参照してください。

:::note
フラッシュの最大サイズは8KBです。詳細情報はリソースのATSAMD218A-MUデータシートを参照してください。
:::

## サンプルアプリケーション

- [Seeed Studio XIAO SAMD21 を使用してRaspberry PIにログインする方法](https://wiki.seeedstudio.com/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [SPI 通信インターフェース](https://wiki.seeedstudio.com/XIAO-SPI-Communication-Interface)

- [Raspberry Piを使用して故障したxiaoを復旧する方法](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990)。共有してくれたJohn_Doeに感謝します。

## リソース

- **[PDF]** [ATSAMD218A-MU データシート](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO SAMD21 回路図](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[ZIP]** [Seeed Studio XIAO SAMD21 KiCAD ファイル](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-KICAD.zip)

- **[ZIP]** [Seeed Studio XIAO SAMD21 Eagle ファイル](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)

- **[DXF]** [Seeed Studio XIAO SAMD21 DXF寸法図](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar)

- **[LBR]** [Seeed Studio XIAO SAMD21 Eagle フットプリント](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO SAMD21 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip)

- **[XLSX]** [Seeed Studio XIAO SAMD21 ピン配置シート](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO SAMD21 3Dモデル](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO SAMD21 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
