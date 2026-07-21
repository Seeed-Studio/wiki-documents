---
description: Seeed Studio XIAO ESP32C3 におけるピン多重化
title: ピン多重化
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO_ESP32C3_Pin_Multiplexing
last_update:
  date: 07/25/2024
  author: Spencer
createdAt: '2023-01-16'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Pin_Multiplexing/
---

# ピン多重化

Seeed Studio XIAO ESP32C3 は豊富なインターフェースを備えています。**PWM ピン**として使用できる**11 個のデジタル I/O**と、**ADC ピン**として使用できる**4 個のアナログ入力**があります。**UART、I2C、SPI、I2S** といった 4 種類のシリアル通信インターフェースをサポートしています。本 Wiki は、これらのインターフェースについて学び、次回のプロジェクトで活用するのに役立ちます。

## ハードウェア概要

> *A3(GP105) - ADC2 を使用しており、誤ったサンプリング信号により動作しなくなる場合があります。信頼性の高いアナログ読み取りには、代わりに ADC1(A0/A1/A2) を使用してください。詳細は ESP32-C3 のデータシートを参照してください。

### 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/XIAO_ESP32-C3_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/XIAO_ESP32-C3_back_pinout.png" style={{width:1000, height:'auto'}}/></div>


## デジタル

プッシュボタンをピン D6 に、LED をピン D10 に接続します。次に、以下のコードを書き込んで、プッシュボタンを使って LED の ON/OFF を制御します。

```c
const int buttonPin = D6;     // pushbutton connected to digital pin 6
const int ledPin =  D10;      // LED connected to digital pin 10

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

## PWM としてのデジタル

LED をピン D10 に接続します。次に、以下のコードを書き込んで、LED が徐々に明るくなったり暗くなったりする様子を確認します。

```cpp
int ledPin = D10;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

## アナログ

可変抵抗器をピン A0 に、LED をピン D10 に接続します。次に、以下のコードを書き込んで、可変抵抗器のつまみを回すことで LED の点滅間隔を制御します。

:::tip
ADC のマッピング範囲は 0〜2500mV です。
:::

```c
const int sensorPin = A0;
const int ledPin =  D10; 

void setup() {
  pinMode(sensorPin, INPUT);  // declare the sensorPin as an INPUT
  pinMode(ledPin, OUTPUT);   // declare the ledPin as an OUTPUT
}

void loop() {
  // read the value from the sensor:
  int sensorValue = analogRead(sensorPin);
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

## シリアル - UART

### 通常の方法 - USB シリアルか UART0 シリアルのどちらか一方を使用

このボードには 2 つのシリアルインターフェースがあります：

- USB シリアル
- UART0 シリアル

:::note
XIAO ESP32 C3 には `Serial2` はありません。
また、`Serial1` を使用する必要がある場合は、ピンを定義しなければなりません。そうしないと、データを受信できない可能性があります。XIAO ESP32 シリーズでは、`Serial1` を次のように使用します。

```cpp
Serial1.begin(115200, SERIAL_8N1, D7, D6); // RX, TX
```

:::

デフォルトでは USB シリアルが有効になっており、USB Type-C を介してボードを PC に接続し、Arduino IDE 上でシリアルモニタを開いて、シリアル経由で送信されたデータを表示できます。

しかし、UART0 をシリアルとして使用したい場合は、ピン D6 を TX ピン、ピン D7 を RX ピンとして USB-シリアルアダプタに接続する必要があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-3.png" alt="pir" width={1000} height="auto" /></div>

また、Arduino IDE で **USB CDC On Boot** を **Disabled** に設定する必要があります。

**注意：ボードが Arduino Board Manager に表示される写真に変更してください**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-1.png" alt="pir" width={600} height="auto" /></div>

次のコードを Arduino IDE に書き込んで、文字列 "Hello World!" をシリアル経由で送信します

```cpp
void setup() {
    Serial.begin(115200);
    while (!Serial);
}

void loop() {
    Serial.println("Hello World!");
    delay(1000);
}
```

Arduino シリアルモニタ上では、次のように出力されます

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-2.jpg" alt="pir" width={450} height="auto" /></div>

### 特殊な方法 - USB シリアルと UART0/UART1 を同時に使用

多くの場合、UART センサーを XIAO ESP32C3 のハードウェアシリアルポートに接続してデータを取得し、同時に USB シリアルを使用してシリアルモニタ上にデータを表示する必要があります。これは、いくつかの特殊な方法によって実現できます。

- サンプルプログラム：

```c
// Need this for the lower level access to set them up.
#include <HardwareSerial.h>

//Define two Serial devices mapped to the two internal UARTs
HardwareSerial MySerial0(0);
HardwareSerial MySerial1(1);

void setup()
{
    // For the USB, just use Serial as normal:
    Serial.begin(115200);

    // Configure MySerial0 on pins TX=D6 and RX=D7 (-1, -1 means use the default)
    MySerial0.begin(9600, SERIAL_8N1, -1, -1);
    MySerial0.print("MySerial0");

    // And configure MySerial1 on pins RX=D9, TX=D10
    MySerial1.begin(115200, SERIAL_8N1, 9, 10);
    MySerial1.print("MySerial1");
}

void loop()
{

}
```

ご覧のとおり、XIAO ESP32C3 には実際には 3 つの UART が利用可能です。

以下では、販売中の [60GHz mmWave Sensor - Human Resting Breathing and Heartbeat Module](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html) を例に、D6 と D7 のハードウェアシリアルポートおよび USB シリアルポートの使用方法を説明します。

次のものを準備してください。

<table align="center">
 <tr>
     <th>XIAO ESP32C3</th>
        <th>60GHz mmWave Sensor -<br/>Human Resting Breathing<br/>and Heartbeat Module</th>
 </tr>
    <tr>
        <td><div align="center"><img width = {120} src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
        <td><div align="center"><img width = {240} src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div></td>
    </tr>
 <tr>
        <td align = "center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">今すぐ入手</a></td>
        <td align = "center"><a href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html">今すぐ入手</a></td>
 </tr>
</table>

センサーライブラリをコンピュータにダウンロードし、Arduino IDE に追加します。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/" target="_blank"><div align="center"><img width = {300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

ここでは、心拍と呼吸のデータ情報を解析したいので、次のようにプログラムを書き換えることができます。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>
#include <HardwareSerial.h>

HardwareSerial MySerial(0);   //Create a new HardwareSerial class -- D6/D7

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  MySerial.begin(115200, SERIAL_8N1, -1, -1); // at CPU Freq is 40MHz, work half speed of defined.

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  // radar.ModeSelect_fuc(1);  //1: indicates real-time transmission mode, 2: indicates sleep state mode.
  //After setting the mode, if you do not see data returned, you may need to re-power the sensor.
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.Breath_Heart();           //Breath and heartbeat information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("Sensor monitored the current heart rate value is: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The heart rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("Sensor detects current breath rate is normal.");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("Sensor detects current breath rate is too fast.");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("Sensor detects current breath rate is too slow.");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("There is no breathing information yet, please wait...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("Sensor monitored the current breath rate value is: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The breath rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

プログラムを書き込んだら、シリアルモニタを開き、ボーレートを115200に設定してください。

次に、以下の接続方法を使用してセンサを XIAO ESP32C3 に接続します。

<div align="center"><img width = {700} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.jpg"/></div>

すべてが正常であれば、シリアルモニタ上にデータメッセージが表示されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

### Serial1 の使用

上記の XIAO ESP32C3 のピン図に示される具体的なパラメータによると、TX ピンと RX ピンがあることがわかります。
これは通常のシリアル通信とは異なりますが、いくつかのパラメータを追加する必要がある点を除けば、使い方は非常によく似ています。
そこで次に、チップから引き出されたピンを使用してシリアル通信を行います。

含める必要があるコア関数は次のとおりです：

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- Serial1 を有効にします。関数プロトタイプ : `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`  :ボーレート
  - `config`:設定ビット
  - `rxPin` :受信ピン
  - `txPin` :送信ピン

デジタルピンポートを使用して定義する場合、この部分は `#define RX_PIN D7`、`#define TX_PIN D6` とする必要があることに注意してください。具体的なパラメータについては、各 XIAO シリーズのピン図を参照してください。

以下はサンプルプログラムです：

```c
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
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

プログラムを書き込んだら、Arduino IDE でシリアルモニタを開き、ボーレートを 115200 に設定します。次に、シリアルモニタ Serial を介して XIAO ESP32C3 に任意の内容を送信できます。XIAO は、送信した内容の各バイトを出力します。ここでは、入力した内容は "Hello Everyone" であり、結果のチャートは次のとおりです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

### ソフトウェアシリアル

ソフトウェアシリアルを使用するには、[EspSoftwareSerial](https://github.com/plerup/espsoftwareserial) ライブラリをインストールします。

:::tip
現在、EspSoftwareSerial ライブラリのバージョン 7.0.0 を推奨しています。他のバージョンでは、ソフトシリアルポートが正常に動作しないさまざまな問題が発生する可能性があります。
:::

```cpp
#include <SoftwareSerial.h>

SoftwareSerial mySerial(D7, D6); // RX, TX

void setup() {
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() {
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received via software serial: ");
    Serial.println(data);
  }

  if (Serial.available()) {
    char data = Serial.read();
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

この例では、`D7 (RX)` と `D6 (TX)` ピンに 9600 ボーのソフトウェアシリアルを設定します。ハードウェアシリアル（USB）とソフトウェアシリアルの両方を監視し、受信したデータを相互にエコーバックします。

## I2C

### ハードウェア接続

[Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) を、以下のハードウェア接続に従って XIAO ESP32C3 に接続します。

|  Grove - OLED Yellow&Blue Display 0.96 (SSD1315) |  XIAO ESP32C3 |
|-----------|-----------|
| SCL       | SCL       |
| SDA       | SDA       |
| VCC       | 5V        |
| GND       | GND       |

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-7.png" alt="pir" width={1000} height="auto" /></div>

### ソフトウェアセットアップ

- **Step 1.** Arduino IDE を開き、`Sketch > Include Library > Manage Libraries...` に移動します

- **Step 2.** **u8g2** を検索してインストールします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>

- **Step 3.** 以下のコードを書き込んで、OLED ディスプレイにテキスト文字列を表示します

```cpp
//#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //Low spped I2C

void setup(void) {
  u8g2.begin();
//  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
}

void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_ncenB08_tr);   // choose a suitable font
  u8g2.drawStr(0,15,"Hello World!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello World!");
  u8g2.drawStr(0,40,"Hello World!");
  u8g2.sendBuffer();                    // transfer internal memory to the display
//  delay(1000);  
}
```

## SPI

### ハードウェア接続

[Grove - High Precision Barometric Pressure Sensor (DPS310)](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html) を、以下のハードウェア接続に従って XIAO ESP32C3 に接続します。

| Grove - High Precision Barometric Pressure Sensor (DPS310) | XIAO ESP32C3 |
|-----------|------------|
| 3V3        | 3V3       |
| SDI        | MOSI      |
| GND        | GND       |
| SDO        | MISO      |
| CSK        | SCK       |
| CS         | CS        |

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-4.png" alt="pir" width={1000} height="auto" /></div>

### ソフトウェアセットアップ

- **Step 1**. [Seeed_Arduino_DPS310 Library](https://github.com/Seeed-Studio/Seeed_Arduino_DPS310) を zip ファイルとしてダウンロードします

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-5.png" alt="pir" width={1000} height="auto" /></div>

- **Step 2**. Arduino IDE を開き、`Sketch > Include Library > Add .ZIP Library...` に移動して、ダウンロードした zip ファイルを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **Step 3.** `File > Examples > DigitalPressureSensor > spi_background` に移動して、**spi_background** サンプルを開きます

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-6.png" alt="pir" width={450} height="auto" /></div>

または、以下からコードをコピーして使用することもできます。

```cpp
#include <Dps310.h>

// Dps310 Opject
Dps310 Dps310PressureSensor = Dps310();

void setup() {
    //pin number of your slave select line
    //XMC2GO
    int16_t pin_cs = SS;
    //for XMC 1100 Bootkit  & XMC4700 Relax Kit uncomment the following line
    //int16_t pin_cs = 10;

    Serial.begin(9600);
    while (!Serial);


    //Call begin to initialize Dps310
    //The parameter pin_nr is the number of the CS pin on your Microcontroller
    Dps310PressureSensor.begin(SPI, pin_cs);

    //temperature measure rate (value from 0 to 7)
    //2^temp_mr temperature measurement results per second
    int16_t temp_mr = 2;
    //temperature oversampling rate (value from 0 to 7)
    //2^temp_osr internal temperature measurements per result
    //A higher value increases precision
    int16_t temp_osr = 2;
    //pressure measure rate (value from 0 to 7)
    //2^prs_mr pressure measurement results per second
    int16_t prs_mr = 2;
    //pressure oversampling rate (value from 0 to 7)
    //2^prs_osr internal pressure measurements per result
    //A higher value increases precision
    int16_t prs_osr = 2;
    //startMeasureBothCont enables background mode
    //temperature and pressure ar measured automatically
    //High precision and hgh measure rates at the same time are not available.
    //Consult Datasheet (or trial and error) for more information
    int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);
    //Use one of the commented lines below instead to measure only temperature or pressure
    //int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);
    //int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);


    if (ret != 0) {
        Serial.print("Init FAILED! ret = ");
        Serial.println(ret);
    } else {
        Serial.println("Init complete!");
    }
}


void loop() {
    uint8_t pressureCount = 20;
    float pressure[pressureCount];
    uint8_t temperatureCount = 20;
    float temperature[temperatureCount];

    //This function writes the results of continuous measurements to the arrays given as parameters
    //The parameters temperatureCount and pressureCount should hold the sizes of the arrays temperature and pressure when the function is called
    //After the end of the function, temperatureCount and pressureCount hold the numbers of values written to the arrays
    //Note: The Dps310 cannot save more than 32 results. When its result buffer is full, it won't save any new measurement results
    int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);

    if (ret != 0) {
        Serial.println();
        Serial.println();
        Serial.print("FAIL! ret = ");
        Serial.println(ret);
    } else {
        Serial.println();
        Serial.println();
        Serial.print(temperatureCount);
        Serial.println(" temperature values found: ");
        for (int16_t i = 0; i < temperatureCount; i++) {
            Serial.print(temperature[i]);
            Serial.println(" degrees of Celsius");
        }

        Serial.println();
        Serial.print(pressureCount);
        Serial.println(" pressure values found: ");
        for (int16_t i = 0; i < pressureCount; i++) {
            Serial.print(pressure[i]);
            Serial.println(" Pascal");
        }
    }

    //Wait some time, so that the Dps310 can refill its buffer
    delay(10000);
}
```

- **ステップ 4.** コードをアップロードし、**シリアルモニタ** を開きます

**注意：** コードをアップロードしても、Arduino ウィンドウ右上の **Serial Monitor** をクリックするまで自動的には実行されません。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-8.jpg" alt="pir" width={600} height="auto" /></div>

これで、上図のようにシリアルモニタ上に温度と気圧のデータが交互に表示されるのが確認できます！

## XIAO ESP32C3 の IO 割り当てに関する注意

### D9

XIAO ESP32C3 の D9 は、ESP32-C3 の GPIO9（15）、プルアップ抵抗（R6）、および BOOT ボタンに接続されています。BOOT ボタン（および RESET ボタン）により、ESP32-C3 のブートモードを手動で切り替えることができます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/10.png" alt="pir" width={600} height="auto" /></div>

BOOT ボタンを押すと、D9 は GND に接続されます。**したがって、D9 はスイッチ入力として使用するのが望ましいです**。

### D6

XIAO ESP32C3 の D6 は、ESP32-C3 の U0TXD（28）に接続されています。第 1 / 第 2 段階ブートローダの動作状態はテキストとして U0TXD に出力されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/11.png" alt="pir" width={400} height="auto" /></div>

D6 は起動時に UART 出力として設定されるため、D6 を入力として使用すると、誤って大電流を発生させてしまう可能性があります。**したがって、D6 ピンは出力モードでのみ使用することを推奨します**。

しかし、この D6 は UART 出力であるため、いくつか注意すべき点があります。1 つは、通信していない待機状態では HIGH であることです。もう 1 つは、第 1 / 第 2 段階ブートローダのテキスト出力です。起動直後に信号が HIGH/LOW とパタパタ変化するため、必要に応じて対策を講じる必要があります。

そのため、D6 はできるだけ使用しないようにしてください。（もちろん、理解した上であれば使用しても問題ありません。）

### D8

Seeed Studio XIAO ESP32C3 の D8 は、ESP32-C3 の GPIO8（14）に接続されています。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/12.png" alt="pir" width={300} height="auto" /></div>

GPIO8 は、BOOT ボタンを押し続けてダウンロードブートモードを設定する際に参照され、そのとき HIGH でなければなりません。（[ここ](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf) には次のように記載されています： "The strapping combination of GPIO8 = 0 and GPIO9 = 0 is invalid and will trigger unexpected behaviour."）

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/13.png" alt="pir" width={700} height="auto" /></div>

ダウンロードブートを使用する場合は、**起動時に GPIO8 が HIGH になるようにプルアップ抵抗を追加してください**。

このセクションのテストと貢献をしてくれた SeeedJP の同僚 **matsujirushi** に特別な感謝を捧げます。元記事への参考リンクはこちらです。

- [Seeed Studio XIAO ESP32C3のI/O割り付けに注意](https://lab.seeed.co.jp/entry/2023/04/03/120000)
