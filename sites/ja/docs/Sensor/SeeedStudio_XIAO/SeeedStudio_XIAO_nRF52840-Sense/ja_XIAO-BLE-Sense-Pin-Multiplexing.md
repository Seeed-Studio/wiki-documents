---
description: Seeed Studio XIAO nRF52840 (Sense) のピン多重化
title: 両バージョン向けピン多重化
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-Pin-Multiplexing
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-Pin-Multiplexing/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO nRF52840 (Sense) のピン多重化

Seeed Studio XIAO nRF52840 (Sense) は豊富なインターフェースを備えています。**PWM ピン**として使用できる**11 個のデジタル I/O**と、**ADC ピン**として使用できる**6 個のアナログ入力**があります。**UART、I2C、SPI** といった一般的な 3 種類のシリアル通信インターフェースすべてをサポートします。この Wiki は、これらのインターフェースについて学び、次のプロジェクトで活用するのに役立ちます。

> ここで紹介する基本機能は、どちらの Seeed Studio XIAO nRF52840 Arduino ライブラリでも問題なく動作します。

## ハードウェア概要

<Tabs>
<TabItem value="nRF52840" label="XIAO nRF52840" default>

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

### XIAO nRF52840 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**ピンマップ**

| XIAO ピン               | 機能              | チップピン      | 説明                                                | Arduino 名  |
| :---------------------: | :-------------: | :-------:     | :-------------------------------------------------- | :-------:    |
| 5V                      | VBUS             |               | 電源入力/出力                                       |              |
| GND                     |                  |               |                                                      |              |
| 3V3                     | 3V3_OUT          |               | 電源出力                                            |              |
| D0                      | アナログ         | P0.02         | GPIO、AIN0                                          | 0            |
| D1                      | アナログ         | P0.03         | GPIO、AIN1                                          | 1            |
| D2                      | アナログ         | P0.28         | GPIO、AIN4                                          | 2            |
| D3                      | アナログ         | P0.29         | GPIO、AIN5                                          | 3            |
| D4                      | アナログ, SDA    | P0.04         | GPIO、I2C データ、AIN2                              | 4            |
| D5                      | アナログ, SCL    | P0.05         | GPIO、I2C クロック、AIN3                            | 5            |
| D6                      | TX               | P1.11         | GPIO、UART 送信                                     | 7/6          |
| D7                      | RX               | P1.12         | GPIO、UART 受信                                     | 8/7          |
| D8                      | SPI_SCK          | P1.13         | GPIO、SPI クロック                                  | 9/8          |
| D9                      | SPI_MISO         | P1.14         | GPIO、SPI データ                                    | 10/9         |
| D10                     | SPI_MOSI         | P1.15         | GPIO、SPI データ                                    | 11/10        |
| NFC1                    |                  | P0.09         | NFC                                                  |              |
| NFC2                    |                  | P0.10         | NFC                                                  |              |
| Reset                   |                  | P0.18         | リセット                                            |              |
| ADC_BAT                 | READ_BAT_ENABLE  | P0.14         | バッテリ電圧読み取り用の有効化制御                  |              |
| RF Switch Port Select   |                  | P2.05         | オンボードアンテナの切り替え                        |              |
| RF Switch Power         |                  | P2.03         | 電源                                                |              |
| CHARGE_LED              |                  | P0.17         | CHG-LED_Red                                         |              |
| USER_LED_R              |                  | P0.26         | ユーザー制御の赤色 RGB LED ピン                     | 11           |
| USER_LED_B              |                  | P0.06         | ユーザー制御の青色 RGB LED ピン                     | 13/12        |
| USER_LED_G              |                  | P0.30         | ユーザー制御の緑色 RGB LED ピン                     | 12/13        |

</TabItem>
<TabItem value="nRF52840Plus" label="XIAO nRF52840 Plus">

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840plus" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

### XIAO nRF52840 Plus 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Plus 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**ピンマップ**

| XIAO ピン               | 機能                  | チップピン | 代替機能             | 説明                                      | Arduino 名  |
| :---------------------: | :-----------------: | :-------: | :----------------: | :-------------------------------------- | :-------:    |
| 5V                      | VBUS                 |           |                    | 電源入力/出力                           |              |
| GND                     |                      |           |                    |                                          |              |
| 3V3                     | 3V3_OUT              |           |                    | 電源出力                                 |              |
| D0                      | アナログ             | P0.02     |                    | GPIO、ADC                                | 0            |
| D1                      | アナログ             | P0.03     |                    | GPIO、ADC                                | 1            |
| D2                      | アナログ             | P0.28     |                    | GPIO、ADC                                | 2            |
| D3                      | アナログ             | P0.29     |                    | GPIO、ADC                                | 3            |
| D4                      | アナログ, SDA        | P0.04     |                    | GPIO、I2C データ、ADC                    | 4            |
| D5                      | アナログ, SCL        | P0.05     |                    | GPIO、I2C クロック、ADC                  | 5            |
| D6                      | TX                   | P1.11     |                    | GPIO、UART 送信                          | 7/6          |
| D7                      | RX                   | P1.12     |                    | GPIO、UART 受信                          | 8/7          |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO、SPI クロック                        | 9/8          |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO、SPI データ                         | 10/9         |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO、SPI データ                         | 11/10        |
| D11                     | I2S_SD               | P0.15     |                    | GPIO、I2S、ADC                           |              |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO、I2S、ADC                           |              |
| D13                     | I2S_WS               | P1.01     |                    | GPIO、I2S、ADC                           |              |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO、UART 受信、ADC                      |              |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO、UART 送信、ADC                      |              |
| D16                     | AIN7_BAT             | P0.31     |                    | バッテリ電圧 ADC 読み取りピン            |              |
| D17                     | SCK1                 | P1.03     |                    | GPIO、SPI                                |              |
| D18                     | MISO1                | P1.05     |                    | GPIO、SPI                                |              |
| D19                     | MOSI1                | P1.07     |                    | GPIO、SPI                                |              |
| ADC_BAT                 | READ_BAT_ENABLE      | P0.14     |                    | バッテリ電圧読み取り用の有効化制御        |              |
| Reset                   |                      | P0.18     |                    | リセット                                  |              |
| RF Switch Port Select   |                      | P2.05     |                    | オンボードアンテナの切り替え              |              |
| RF Switch Power         |                      | P2.03     |                    | 電源                                      |              |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_Red                              |              |
| USER_LED_R              |                      | P0.26     |                    | ユーザー制御の赤色 RGB LED ピン           | 11           |
| USER_LED_B              |                      | P0.06     |                    | ユーザー制御の青色 RGB LED ピン           | 13/12        |
| USER_LED_G              |                      | P0.30     |                    | ユーザー制御の緑色 RGB LED ピン           | 12/13        |

</TabItem>
<TabItem value="nRF52840Sense" label="XIAO nRF52840 Sense">

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">インタラクティブピン配置を確認</a>
</div>

### XIAO nRF52840 Sense 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Sense 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**ピンマップ**

| XIAO ピン               | 機能             | チップピン    | 説明                                               | Arduino 名  |
| :---------------------: | :-------------: | :-------:     | :------------------------------------------------ | :-------:    |
| 5V                      | VBUS             |               | 電源入力/出力                                      |              |
| GND                     |                  |               |                                                    |              |
| 3V3                     | 3V3_OUT          |               | 電源出力                                           |              |
| D0                      | アナログ         | P0.02         | GPIO、AIN0                                         | 0            |
| D1                      | アナログ         | P0.03         | GPIO、AIN1                                         | 1            |
| D2                      | アナログ         | P0.28         | GPIO、AIN4                                         | 2            |
| D3                      | アナログ         | P0.29         | GPIO、AIN5                                         | 3            |
| D4                      | アナログ, SDA    | P0.04         | GPIO、I2C データ、AIN2                             | 4            |
| D5                      | アナログ, SCL    | P0.05         | GPIO、I2C クロック、AIN3                           | 5            |
| D6                      | TX               | P1.11         | GPIO、UART 送信                                    | 7/6          |
| D7                      | RX               | P1.12         | GPIO、UART 受信                                    | 8/7          |
| D8                      | SPI_SCK          | P1.13         | GPIO、SPI クロック                                 | 9/8          |
| D9                      | SPI_MISO         | P1.14         | GPIO、SPI データ                                   | 10/9         |
| D10                     | SPI_MOSI         | P1.15         | GPIO、SPI データ                                   | 11/10        |
| NFC1                    |                  | P0.09         | NFC                                                |              |
| NFC2                    |                  | P0.10         | NFC                                                |              |
| Reset                   |                  | P0.18         | リセット                                           |              |
| ADC_BAT                 | READ_BAT_ENABLE  | P0.14         | バッテリー電圧読み取り用の有効化制御              |              |
| 6 DOF IMU_PWR           |                  | P1.08         | 6D モジュールの電源スイッチ                        |              |
| 6 DOF IMU__INT1         |                  | P0.11         | 6D モジュールの割り込み信号ピン                    |              |
| PDM Microphone_DATA     |                  | P0.16         | PDM オーディオデータ入力ピン                       |              |
| PDM Microphone_CLK      |                  | P1.00         | PDM オーディオクロック出力ピン                     |              |
| RF Switch Port Select   |                  | P2.05         | オンボードアンテナの切り替え                       |              |
| RF Switch Power         |                  | P2.03         | 電源                                               |              |
| CHARGE_LED              |                  | P0.17         | CHG-LED_Red                                        |              |
| USER_LED_R              |                  | P0.26         | ユーザー制御の赤色 RGB LED ピン                    | 11           |
| USER_LED_B              |                  | P0.06         | ユーザー制御の青色 RGB LED ピン                    | 13/12        |
| USER_LED_G              |                  | P0.30         | ユーザー制御の緑色 RGB LED ピン                    | 12/13        |

</TabItem>
<TabItem value="nRF52840SensePlus" label="XIAO nRF52840 Sense Plus">

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840senseplus" target="_blank" rel="noopener noreferrer">インタラクティブピン配置を確認</a>
</div>

### XIAO nRF52840 Sense Plus 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Sense Plus 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**ピンマップ**

| XIAO ピン               | 機能                 | チップピン | 代替機能             | 説明                                       | Arduino 名  |
| :---------------------: | :-----------------: | :-------: | :----------------: | :---------------------------------------- | :-------:    |
| 5V                      | VBUS                 |           |                    | 電源入力/出力                              |              |
| GND                     |                      |           |                    |                                            |              |
| 3V3                     | 3V3_OUT              |           |                    | 電源出力                                   |              |
| D0                      | アナログ             | P0.02     |                    | GPIO、ADC                                  | 0            |
| D1                      | アナログ             | P0.03     |                    | GPIO、ADC                                  | 1            |
| D2                      | アナログ             | P0.28     |                    | GPIO、ADC                                  | 2            |
| D3                      | アナログ             | P0.29     |                    | GPIO、ADC                                  | 3            |
| D4                      | アナログ, SDA        | P0.04     |                    | GPIO、I2C データ、ADC                       | 4            |
| D5                      | アナログ, SCL        | P0.05     |                    | GPIO、I2C クロック、ADC                     | 5            |
| D6                      | TX                   | P1.11     |                    | GPIO、UART 送信                            | 7/6          |
| D7                      | RX                   | P1.12     |                    | GPIO、UART 受信                            | 8/7          |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO、SPI クロック                         | 9/8          |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO、SPI データ                           | 10/9         |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO、SPI データ                           | 11/10        |
| D11                     | I2S_SD               | P0.15     |                    | GPIO、I2S、ADC                             |              |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO、I2S、ADC                             |              |
| D13                     | I2S_WS               | P1.01     |                    | GPIO、I2S、ADC                             |              |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO、UART 受信、ADC                        |              |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO、UART 送信、ADC                        |              |
| D16                     | AIN7_BAT             | P0.31     |                    | バッテリー電圧 ADC 読み取りピン             |              |
| D17                     | SCK1                 | P1.03     |                    | GPIO、SPI                                  |              |
| D18                     | MISO1                | P1.05     |                    | GPIO、SPI                                  |              |
| D19                     | MOSI1                | P1.07     |                    | GPIO、SPI                                  |              |
| ADC_BAT                 | READ_BAT_ENABLE      | P0.14     |                    | バッテリー電圧読み取り用の有効化制御        |              |
| 6 DOF IMU_PWR           |                      | P1.08     |                    | 6D モジュールの電源スイッチ                  |              |
| 6 DOF IMU__INT1         |                      | P0.11     |                    | 6D モジュールの割り込み信号ピン              |              |
| PDM Microphone_DATA     |                      | P0.16     |                    | PDM オーディオデータ入力ピン                 |              |
| PDM Microphone_CLK      |                      | P1.00     |                    | PDM オーディオクロック出力ピン               |              |
| Reset                   |                      | P0.18     |                    | リセット                                     |              |
| RF Switch Port Select   |                      | P2.05     |                    | オンボードアンテナの切り替え                 |              |
| RF Switch Power         |                      | P2.03     |                    | 電源                                         |              |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_Red                                |              |
| USER_LED_R              |                      | P0.26     |                    | ユーザー制御の赤色 RGB LED ピン              | 11           |
| USER_LED_B              |                      | P0.06     |                    | ユーザー制御の青色 RGB LED ピン              | 13/12        |
| USER_LED_G              |                      | P0.30     |                    | ユーザー制御の緑色 RGB LED ピン              | 12/13        |

</TabItem>
</Tabs>

## デジタル

プッシュボタンをピン D6 に、LED をピン D10 に接続します。次に、以下のコードを書き込んで、プッシュボタンを使って LED のオン／オフを制御します。

```cpp
const int buttonPin = 6;     // pushbutton connected to digital pin 6
const int ledPin =  10;      // LED connected to digital pin 10

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
    // turn LED off:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED on:
    digitalWrite(ledPin, LOW);
  }
}
```

## PWM としてのデジタル

LED をピン D10 に接続します。次に、以下のコードを書き込んで、LED が徐々に明るさを変えていく様子を確認します。

```cpp
int ledPin = 10;    // LED connected to digital pin 10

void setup() {

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

可変抵抗器をピン A5 に、LED をピン D10 に接続します。次に、以下のコードを書き込んで、可変抵抗器のつまみを回して LED の点滅間隔を制御します。

```cpp
const int sensorPin = 5;
const int ledPin =  10; 
void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
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

## シリアル

Serial1 を使用して、USB の代わりに GPIO 経由で UART を使用します。両方を同時に使用することもできます。
ピン D6 を UART の TX ピン、ピン D7 を UART の RX ピンとして使用し、「Hello World!」メッセージを送信します。

```cpp
void setup() {
    Serial1.begin(115200);
    while (!Serial1);
}

void loop() {
    Serial1.println("Hello World!");
    delay(1000);
}
```

## I2C

- **Step 1.** 次のハードウェア接続に従って、[Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) を Seeed Studio XIAO nRF52840 (Sense) に接続します。

|  Grove - OLED Display 1.12 (SH1107) |  Seeed Studio XIAO nRF52840 (Sense) |
|-----------|-----------|
| GND       | GND       |
| VCC       | 5V        |
| SDA       | SDA       |
| SCL       | SCL       |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-I2C-2.png" alt="pir" width={1000} height="auto" /></p>

- **Step 2.** Arduino IDE を開き、`Sketch > Include Library > Manage Libraries...` に移動します

- **Step 3.** **u8g2** を検索してインストールします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>

- **Step 4.** 以下のコードを書き込んで、OLED ディスプレイにテキスト文字列を表示します

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ 5, /* data=*/ 4, /* reset=*/ U8X8_PIN_NONE);

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

## SPI

- **Step 1.** 次のハードウェア接続に従って、[Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) を Seeed Studio XIAO nRF52840 (Sense) に接続します。

| Grove - OLED Display 1.12 (SH1107) | Seeed Studio XIAO nRF52840 (Sense) |
|-----------|------------|
| GND        | GND       |
| 5V         | 5V        |
| SCL        | SCK       |
| SI         | MOSI      |
| RES        | D3        |
| D/C        | D4        |
| CS         | D5        |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-SPI.png" alt="pir" width={1000} height="auto" /></p>

- **Step 2.** この OLED ディスプレイは I2C と SPI の両方の通信をサポートしており、デフォルトのモードは I2C です。SPI モードを使用するには、先に進む前に [Grove - OLED Display 1.12 (SH1107) V3.0 wiki](https://wiki.seeedstudio.com/ja/Grove-OLED-Display-1.12-SH1107_V3.0/#ソフトウェア-i2c) を参照して、OLED ディスプレイの通信方式を SPI に変更する必要があります

**Note:** U8g2 ライブラリが前の手順でインストールされていることを確認してください。

- **Step 3.** 以下のコードを書き込んで、OLED ディスプレイにテキスト文字列を表示します

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 5, /* dc=*/ 4, /* reset=*/ 3);

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
