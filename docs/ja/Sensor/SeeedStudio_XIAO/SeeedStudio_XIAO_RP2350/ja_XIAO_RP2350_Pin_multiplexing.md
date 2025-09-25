---
description: Seeed Studio XIAO RP2350のピン多重化
title: ピン多重化 (Arduino)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2350image.png
slug: /ja/XIAO_RP2350_Pin_Multiplexing
sidebar_position: 2
last_update:
  date: 11/02/2024
  author: Allen
---

# ピン多重化 (Arduino)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2350image.png" style={{width:800, height:'auto'}}/></div>

Seeed Studio XIAO RP2350は豊富なインターフェースを備えています。**PWMピン**として使用できる**19個のデジタルI/O**と、**ADCピン**として使用できる**3個のアナログ入力**があります。**UART、I2C、SPI**などの4つのシリアル通信インターフェースをサポートしています。このwikiは、これらのインターフェースについて学び、次のプロジェクトで実装するのに役立ちます！

## 準備

現在、互換性の問題により、XIAO RP2350のピン使用にいくつかの問題があります。この問題を修正し、Raspberry Pi公式ライブラリにマージされました。現在のバージョンは4.2.0で、次のバージョン**4.2.1**で更新が完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/12.png" style={{width:500, height:'auto'}}/></div>

それまでの間、**Arduino15/packages/rp2040/hardware/rp2040/4.2.0/variants/seeed_xiao_rp2350（あなたのArduinoライブラリアドレス）**に移動し、[こちらをクリックしてファイルをダウンロード](https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/file.zip)してこのファイルを置き換えてください。完了したら、作業を楽しむことができます！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/3.png" style={{width:800, height:'auto'}}/></div>

## デジタル

### ハードウェア準備

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - LED</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

XIAO RP2350を拡張ボードに取り付け、Grove LEDをGroveケーブルで拡張ボードの**A0/D0**インターフェースに接続してください。最後に、USB-CケーブルでXIAOをコンピューターに接続します。

### ソフトウェア実装

この例では、XIAO拡張ボードに接続されたボタンを使用してリレーのオン/オフ状態を制御する実装を行います。ボタンが押されるとリレーがオンになり、ボタンが離されるとリレーがオフになります。

```c
//define which pin you use
int LED_BUILTIN = D0;
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
  delay(1000);                      // wait for a second
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
  delay(1000);                      // wait for a second
}
```

### 効果

すべてが順調に進めば、プログラムをアップロードした後、以下の効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/1.gif" style={{width:500, height:'auto'}}/></div>

## デジタルをPWMとして使用

XIAO RP2350のすべてのGPIOピンはPWM出力をサポートしています。そのため、任意のピンを使用してPWMを出力し、ライトの明るさを調整したり、サーボを制御したりする機能を実現できます。

### ハードウェアの準備

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - LED</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

XIAO RP2350を拡張ボードに取り付け、Groveケーブルを使用してGrove LEDを拡張ボードの**A0/D0**インターフェースに接続してください。最後に、USB-CケーブルでXIAOをコンピューターに接続します。

### ソフトウェアの実装

この例では、PWM出力を使用してライトの明るさを制御する方法を実演します。

```cpp
int LED_pin = D0;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

### 効果

プログラムが正常に実行されると、以下の実行効果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2.gif" style={{width:500, height:'auto'}}/></div>

## アナログ

XIAO MG24(Sense) 開発ボードは、アナログセンサー値の高解像度読み取りのための12ビットADCを搭載しており、より正確な値を読み取ることができます。

次に、ADCの特性を反映するために2つのセンサーを選択します。

### ハードウェア準備

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Loudness Sensor</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductloudness20sensor.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Loudness-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### ソフトウェア実装

``` cpp
int loudness;

void setup()
{
    Serial.begin(9600);// initialize Serial
}

void loop()
{
    loudness = analogRead(A0);// read analog data from A0 pin
    Serial.println(loudness);
    delay(200);
}
```

### 効果

すべてが順調に進めば、プログラムをアップロードした後、以下の効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/5.png" style={{width:800, height:'auto'}}/></div>

## UART

Arduino IDEで作業する際、シリアル通信は多くのプロジェクトにおいて重要な部分です。Arduino IDEでシリアル通信を使用するには、まずシリアルモニターウィンドウを開く必要があります。これは、ツールバーの**シリアルモニター**アイコンをクリックするか、**Ctrl+Shift+M**のショートカットキーを押すことで実行できます。

### 一般的な使用方法

よく使用されるシリアル関数には以下があります：

- `Serial.begin()` -- 指定されたボーレートで通信を初期化します；
- `Serial.print()` -- 読み取り可能な形式でデータをシリアルポートに送信します；
- `Serial.write()` -- バイナリデータをシリアルポートに送信します；
- `Serial.available()` -- シリアルポートから読み取り可能なデータがあるかどうかを確認します；
- `Serial.read()` -- シリアルポートから1バイトのデータを読み取ります；
- `Serial.flush()` -- 送信中のシリアルデータの送信完了を待ちます。

これらのシリアル関数を使用することで、Arduinoボードとコンピューター間でデータを送受信でき、インタラクティブなプロジェクトを作成する多くの可能性が開かれます。

以下はサンプルプログラムです：

```c
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  // send data to the serial port
  Serial.println("Hello World!");

  // read data from the serial port
  if (Serial.available() > 0) {
    // read the incoming byte:
    char incomingByte = Serial.read();
    // print the incoming byte to the serial monitor:
    Serial.print("I received: ");
    Serial.println(incomingByte);
  }
  
  // wait for a second before repeating the loop
  delay(1000);
}
```

### 効果

すべてが順調に進めば、プログラムをアップロードした後、以下の効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/2.png" style={{width:500, height:'auto'}}/></div>

### Serial1の使用方法

上記のXIAO RP2350ピン図の具体的なパラメータによると、TXとRXピン（D6、D7）があることが確認できます。
使用方法も非常に似ていますが、D6、D7ピンを監視してデータを取得するために**シリアルポート監視ツール**を使用する必要があります。
そこで次に、D6、D7ピンを使用して**Serial1**を使用します。

:::tip
通常、デバイスとコンピュータ間の通信には**Serial**を使用して、プログラムで何が起こっているかを知ることができます。

それに基づいて、このデバイスを別のデバイスと通信させたい場合があります。この場合、**Serial1**を使用します。
:::

```c

void setup() {
    Serial1.begin(115200);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("I received : ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

### 効果

すべてが順調に進めば、プログラムをアップロードした後、以下の効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/1.png" style={{width:500, height:'auto'}}/></div>

## I2C

XIAO RP2350には、多くのセンサーのデータ送信と解析、およびOLEDスクリーンの使用に利用できるI2Cインターフェースがあります。

### ハードウェアの準備

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - DHT20 Temperature and Humidity Sensor</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101020932_preview-07-min_1.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

DHT20センサーはI2Cプロトコルを使用するため、XIAO拡張ボード上のI2Cポートを使用してセンサーデータを取得できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/7.png" style={{width:500, height:'auto'}}/></div>

### ソフトウェア実装

この例では、Seeed Studio Expansion Base for XIAO RP2350を介してDHT20センサーデータを取得する方法を紹介します。

ステップ1. Seeed Studio XIAO RP2350を拡張ボードに取り付け、Type-Cケーブルを接続します。

ステップ2. **Grove Temperature And Humidity Sensor**ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

ステップ3. ライブラリをArduinoに追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/10.png" style={{width:800, height:'auto'}}/></div>

ステップ4. ダウンロードしたライブラリからDHTtesterデモを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/11.png" style={{width:800, height:'auto'}}/></div>

DHT20を使用するため、以下のコードのようにDHT20のコードをアンコメントする必要があります。

```c
// Example testing sketch for various DHT humidity/temperature sensors
// Written by ladyada, public domain

#include "Grove_Temperature_And_Humidity_Sensor.h"

// Uncomment whatever type you're using!
//#define DHTTYPE DHT11   // DHT 11
// #define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
//#define DHTTYPE DHT10   // DHT 10
#define DHTTYPE DHT20   // DHT 20

/*Notice: The DHT10 and DHT20 is different from other DHT* sensor ,it uses i2c interface rather than one wire*/
/*So it doesn't require a pin.*/
// #define DHTPIN 2     // what pin we're connected to（DHT10 and DHT20 don't need define it）
// DHT dht(DHTPIN, DHTTYPE);   //   DHT11 DHT21 DHT22
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin

// Connect pin 1 (on the left) of the sensor to +5V
// Connect pin 2 of the sensor to whatever your DHTPIN is
// Connect pin 4 (on the right) of the sensor to GROUND
// Connect a 10K resistor from pin 2 (data) to pin 1 (power) of the sensor


#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void setup() {

    debug.begin(115200);
    debug.println("DHTxx test!");
    Wire.begin();

    /*if using WIO link,must pull up the power pin.*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);

    dht.begin();
}

void loop() {
    float temp_hum_val[2] = {0};
    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)


    if (!dht.readTempAndHumidity(temp_hum_val)) {
        debug.print("Humidity: ");
        debug.print(temp_hum_val[0]);
        debug.print(" %\t");
        debug.print("Temperature: ");
        debug.print(temp_hum_val[1]);
        debug.println(" *C");
    } else {
        debug.println("Failed to get temprature and humidity value.");
    }

    delay(1500);
}
```

### 効果

すべてが順調に進めば、プログラムをアップロードした後、以下の効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/4.png" style={{width:800, height:'auto'}}/></div>

## SPI

XIAO RP2350チップは複数のペリフェラルを統合しており、フラッシュメモリ、ディスプレイ、センサーなどの外部SPIデバイスを接続するために使用できるSPIインターフェースを含んでいます。XIAO RP2350は高速SPI転送モードもサポートしており、最大80 MHzのSPI転送レートを実現でき、ほとんどのSPIデバイスのデータ転送ニーズを満たします。

### ハードウェア準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RP2350</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

上記のハードウェアを準備した後、ジャンパーワイヤーを使用してXIAOとOLEDのSPIインターフェースを接続します。配線については以下の表を参照してください。

|XIAO RP2350| OLED Display|
|-----------|-------------|
|D8|SCL|
|D10|SI|
|D5|RES|
|D4|D/C|
|D7|CS|
|VCC(VBUS)|5V|
|GND|GND|

### ソフトウェア実装

次に、以下のプログラムを例として、SPIインターフェースを使用してOLED画面の表示を制御する方法を紹介します。

u8g2ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ D7, /* dc=*/ D4, /* reset=*/ D5);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

`setup()` 関数では、`U8G2_SH1107_128X128_1_4W_HW_SPI` クラスが適切なコンストラクタ引数でインスタンス化され、チップセレクト（cs）、データ/コマンド（dc）、リセットに使用されるピンが指定されます。その後、`u8g2.begin()` 関数が呼び出されてディスプレイが初期化されます。

`loop()` 関数では、`u8g2.firstPage()`、`u8g2.setFont()`、`u8g2.drawStr()` 関数を使用してディスプレイが新しいコンテンツで更新されます。`u8g2.firstPage()` 関数はディスプレイバッファを書き込み用に設定し、`u8g2.nextPage()` は更新されたコンテンツを表示します。do-while ループにより、プログラムが停止されるまでコンテンツが継続的に表示されることが保証されます。

全体的に、このコードは U8g2 ライブラリを使用して OLED ディスプレイを制御し、テキストを表示する方法を示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/15.png" style={{width:700, height:'auto'}}/></div>

## 完了

XIAO RP2350 ピンの基本機能を学習しました。それでは、楽しんでください〜
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>

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
