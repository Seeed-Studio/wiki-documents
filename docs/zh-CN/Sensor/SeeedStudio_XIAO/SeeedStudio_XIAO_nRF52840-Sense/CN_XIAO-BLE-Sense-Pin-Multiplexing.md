---
description: Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)
title: 引脚串口的使用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-Pin-Multiplexing
last_update:
  date: 10/30/2023
  author: 吴飞飞
---

# Seeed Studio XIAO nRF52840 (Sense) 上的引脚多路复用

Seeed Studio XIAO nRF52840 (Sense) 具有丰富的接口。 有 **11 个数字 I/O** 可用作 **PWM 引脚** ， **6 个模拟输入** 可用作 **ADC 引脚**。 它支持所有三种常见的串行通信接口，如 **UART, I2C 和 SPI**。这个 wiki 将有助于了解这些接口并在您的下一个项目中实现它们！

> 这里的基本功能对于两个 Seeed Studio XIAO nRF52840 Arduino 库都表现良好。

## 数字

将按钮连接到引脚 D6，将 LED 连接到引脚 D10。然后上传以下代码以使用按钮控制 LED 的开/关。

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

## 数字作为PWM

将 LED 连接到引脚 D10。然后上传以下代码，可以看到 LED 逐渐变暗。

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

## 模拟

将电位计连接到引脚 A5，将 LED 连接到引脚 D10。然后上传以下代码，通过旋转电位器旋钮来控制LED的闪烁间隔。

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

## 串行
使用 Serial1 通过 GPIO 而不是 USB 使用 UART。您也可以同时使用两者。 使用引脚 D6 作为 UART 的 TX 引脚，使用引脚 D7 作为 UART 的 RX 引脚来发送“Hello World！”消息。

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

## I2C接口

- **步骤 1.** 按照如下硬件连接将 [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) 连接到 Seeed Studio XIAO nRF52840 （Sense）。

|  Grove - OLED 显示屏 1.12 (SH1107) |  Seeed Studio XIAO nRF52840 (Sense) |
|-----------|-----------|
| GND       | GND       |
| VCC       | 5V        |
| SDA       | SDA       | 
| SCL       | SCL       |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-I2C-2.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 2.** 打开 Arduino IDE, 导航到 `Sketch > Include Library > Manage Libraries...`

- **步骤 3.** 搜索 **u8g2** 并安装它

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>


- **步骤 4.** 上传以下代码以在OLED显示屏上显示文本字符串

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

## SPI接口

- **步骤 1.** 按照如下硬件连接将 [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) 连接到 Seeed Studio XIAO nRF52840 （Sense）。

| Grove - OLED 显示屏 1.12 (SH1107) | Seeed Studio XIAO nRF52840 (Sense) |
|-----------|------------|
| GND        | GND       |
| 5V         | 5V        |
| SCL        | SCK       | 
| SI         | MOSI      |
| RES        | D3        |
| D/C        | D4        |
| CS         | D5        |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-SPI.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 2.** 这款OLED显示器同时支持I2C和SPI通信，默认型号为I2C。要使用 SPI 模式，您需要参考 [Grove - OLED Display 1.12 (SH1107) V3.0 wiki](https://wiki.seeedstudio.com/Grove-OLED-Display-1.12-SH1107_V3.0/#software-i2c) 显示器通信更改为 SPI，然后再继续
  
**注意:** 确保从前面的步骤中安装了 U8g2 库。

- **步骤 3.** 上传以下代码以在OLED显示屏上显示文本字符串

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
