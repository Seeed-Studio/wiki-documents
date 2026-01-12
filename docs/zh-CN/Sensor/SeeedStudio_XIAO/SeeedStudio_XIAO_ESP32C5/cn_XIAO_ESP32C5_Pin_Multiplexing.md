---
title: Seeed Studio XIAO ESP32-C5 引脚复用
description: |
keywords:
  - xiao
  - esp32c5
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /cn/xiao_esp32c5_pin_multiplexing
last_update:
  date: 12/30/2025
  author: Zeller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Seeed Studio XIAO ESP32-C5 是一款功能强大且用途广泛的开发板，具有多种外设接口和 GPIO 引脚。这些引脚可用于各种用途，如与其他设备通信、读取模拟传感器、控制 LED 等。在本教程中，我们将指导您如何使用 XIAO ESP32-C5 的复用引脚。<br/>
总结来说，XIAO ESP32-C5 具有 1×I2C、1×SPI、2×UART、多达 11×GPIO（支持 PWM）、5×ADC 通道和一个 JTAG 焊盘接口。

## 入门指南

接下来，我将分别基于两个平台：**PlatformIO** 和 **Arduino IDE** 提供示例教程和代码，您可以根据具体情况选择开发平台。<br/>
如果您之前没有使用过 **Arduino IDE**，请参考 [Seeed Studio XIAO ESP32-C5 入门指南](https://wiki.seeedstudio.com/cn/xiao_esp32c5_getting_started/)。<br/>
如果您之前没有使用过 **PlatfromIO**，请参考 [Platform IO 与 Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/cn/xiao_esp32c5_with_platformio/)。

### 引脚概述

在开始之前，让我们通过以下原理图回顾 XIAO ESP32-C5 的所有引脚及其功能。

<table align="center">
 <tr>
     <th>XIAO ESP32-C5 指示图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/front.png" style={{width:600, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32-C5 引脚列表</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/PinList_1.png" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

### 数字功能

XIAO ESP32-C5 的所有 11 个 IO 引脚（D0–D10）都支持数字功能。以下是一个实际示例，演示如何使用数字功能控制灯的开/关状态，您可以根据具体需求复用这些引脚。

#### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### 软件

以下代码示例分别基于 Arduino IDE 和 PlatformIO，它们实现相同的控制效果。您可以根据实际开发情况选择并重用适当的代码。

<Tabs>
<TabItem value=' Arduino IDE'>

- 参考代码

```cpp
const int buttonPin = D1;   // Button pin
const int ledPin    = D0;   // LED pin

bool ledState = false;      // LED current state (OFF/ON)

// Debounce
const unsigned long DEBOUNCE_MS = 30;
bool lastReading = HIGH;          // because INPUT_PULLUP idle is HIGH
bool stableState = HIGH;
unsigned long lastChangeTime = 0;

void setup() {
  pinMode(ledPin, OUTPUT);

  pinMode(buttonPin, INPUT_PULLUP); 

}

void loop() {
  bool reading = digitalRead(buttonPin);

  // Detect a level change and start timing (for debouncing)
  if (reading != lastReading) {
    lastChangeTime = millis();
    lastReading = reading;
  }

  if (millis() - lastChangeTime >= DEBOUNCE_MS) {
    if (stableState != reading) {
      stableState = reading;


      if (stableState == LOW) {
        ledState = !ledState;                 // toggle
        digitalWrite(ledPin, ledState ? HIGH : LOW);
      }
    }
  }
}
```

</TabItem>

<TabItem value='PlatformIO'>

- 确保 `platform.ini` 的内容如下。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- 参考代码

```cpp
#include <Arduino.h>

const int buttonPin = D1;   // Button pin
const int ledPin    = D0;   // LED pin

bool ledState = false;      // LED current state (OFF/ON)

// Debounce
const unsigned long DEBOUNCE_MS = 30;
bool lastReading = HIGH;          // because INPUT_PULLUP idle is HIGH
bool stableState = HIGH;
unsigned long lastChangeTime = 0;

void setup() {
  pinMode(ledPin, OUTPUT);

  pinMode(buttonPin, INPUT_PULLUP); 

}

void loop() {
  bool reading = digitalRead(buttonPin);

  // Detect a level change and start timing (for debouncing)
  if (reading != lastReading) {
    lastChangeTime = millis();
    lastReading = reading;
  }

  if (millis() - lastChangeTime >= DEBOUNCE_MS) {
    if (stableState != reading) {
      stableState = reading;


      if (stableState == LOW) {
        ledState = !ledState;                 // toggle
        digitalWrite(ledPin, ledState ? HIGH : LOW);
      }
    }
  }
}
```

</TabItem>
</Tabs>

#### 结果

- 上传代码后，按下按钮——每次按下都会切换 LED 的开/关状态，模拟现实生活中控制灯光的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_1.gif" style={{width:400, height:'auto'}}/></div>

:::tip
如果按下按钮后没有达到上述效果，您可能需要先按下板载的 RESET 按钮来唤醒开发板。
:::

### PWM

XIAO ESP32-C5 的所有引脚 D0–D11 都支持 PWM 功能。PWM 可用于驱动舵机、电机和 LED 灯等设备。以下是一个 PWM 控制呼吸灯的示例，用于演示 PWM 的功能。

#### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### 软件

以下代码示例分别基于 Arduino IDE 和 PlatformIO，它们实现相同的控制效果。您可以根据实际开发情况选择并重用合适的代码。

<Tabs>
<TabItem value='Arduino IDE'>

- 参考代码

```cpp
int ledPin = D1;    // LED connected to digital pin 10

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

</TabItem>

<TabItem value='PlatformIO'>

- 确保 `platform.ini` 的内容如下。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- 参考代码

```cpp
#include <Arduino.h>

int ledPin = D0;    // LED connected to digital pin 10

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

</TabItem>
</Tabs>

#### 结果

上传代码后，Grove - Variable Color LED 将显示呼吸灯效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_2.gif" style={{width:400, height:'auto'}}/></div>

### 模拟

对于 XIAO ESP32-C5，引脚 A0–A5 支持模拟读取功能。ADC 读取可应用于测量电池电压和读取旋转编码器等场景。接下来，我们将以 Grove-Rotary Angle Sensor 的电压测量为例演示 ADC 读取功能。

#### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Rotary Angle Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881159_2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### 软件

以下代码示例分别基于 Arduino IDE 和 PlatformIO，它们实现相同的控制效果。您可以根据实际开发情况选择并重用合适的代码。

<Tabs>
<TabItem value='Arduino IDE'>

```cpp
iconst int analogPin = A0; 

void setup() {
  // Initialize serial communication at 115200 bits per second
  Serial.begin(115200);

  // Set the resolution to 12 bits (0-4095)
  analogReadResolution(12);
}

void loop() {
  // Read the analog value and millivolts for the analogPin
  int analogValue = analogRead(analogPin);
  int analogVolts = analogReadMilliVolts(analogPin);

  // Convert millivolts to volts
  float voltage = analogVolts / 1000.0;

  // Print the values to the Serial Monitor
  Serial.printf("ADC analog value = %d\n", analogValue);
  Serial.printf("ADC millivolts value = %d\n", analogVolts);
  Serial.printf("Voltage = %.3f V\n", voltage);

  delay(1000); // Delay for clear reading from serial
}
```

</TabItem>

<TabItem value='PlatformIO'>

- 确保 `platform.ini` 的内容如下。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- 参考代码

```cpp
#include <Arduino.h>

iconst int analogPin = A0; 

void setup() {
  // Initialize serial communication at 115200 bits per second
  Serial.begin(115200);

  // Set the resolution to 12 bits (0-4095)
  analogReadResolution(12);
}

void loop() {
  // Read the analog value and millivolts for the analogPin
  int analogValue = analogRead(analogPin);
  int analogVolts = analogReadMilliVolts(analogPin);

  // Convert millivolts to volts
  float voltage = analogVolts / 1000.0;

  // Print the values to the Serial Monitor
  Serial.printf("ADC analog value = %d\n", analogValue);
  Serial.printf("ADC millivolts value = %d\n", analogVolts);
  Serial.printf("Voltage = %.3f V\n", voltage);

  delay(1000); // Delay for clear reading from serial
}
```

</TabItem>
</Tabs>

#### 结果

打开串口监视器，它将打印从 Grove-Rotary Angle Sensor 读取的原始 ADC 值（analogValue）、毫伏值（analogVolts）和电压值（voltage）。当您旋转 Grove-Rotary Angle Sensor 时，会发生明显的变化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_3.png" style={{width:600, height:'auto'}}/></div>

### 串口通信

XIAO ESP32-C5 具有两个硬件串口通信接口：**USB Serial** 和 **UART1 Serial**，您可以利用它们进行串口通信。此外，您还可以使用其他通用引脚来模拟串口通信接口。

#### USB / UART1 串口

对于 **USB Serial**，通过 USB-C 直接将开发板连接到计算机进行监控——这是前面示例中使用的接口。对于 **UART1 Serial**，使用 Seeed Studio **XIAO Debug Mate** 进行监控。

##### 硬件准备

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>Seeed Studio XIAO Debug Mate</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-xiao-debugger.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

##### 软件

以下代码示例分别基于 Arduino IDE 和 PlatformIO，它们实现相同的控制效果。您可以根据实际开发情况选择并重用合适的代码。<br/>
Serial1 对应的引脚为 `RX_PIN - D7` 和 `TX_PIN - D6`。

<Tabs>
<TabItem value='Arduino IDE'>

- 参考代码

```cpp
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial.begin(115200);
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}

void loop() {
    Serial.print("PC Serial \n");
    Serial1.print("Hello XIAO ESP32-C5\n");
  delay(1000);
}
```

</TabItem>

<TabItem value='PlatformIO'>

- 确保 platform.ini 的内容如下。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- 参考代码

```cpp
#include <Arduino.h>

#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial.begin(115200);
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}

void loop() {
    Serial.print("PC Serial \n");
    Serial1.print("Hello XIAO ESP32-C5\n");
  delay(1000);
}
```

</TabItem>
</Tabs>

##### 结果

上传程序后，您可以通过 Seeed Studio **XIAO Debug Mate** 的 UART 功能进行监控。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_3.png" style={{width:600, height:'auto'}}/></div>

:::tip
如果您之前没有使用过 Seeed Studio XIAO Debug Mate，可以访问 [XIAO Debug Mate 入门指南](https://wiki.seeedstudio.com/cn/getting_started_with_xiao_debug_mate/)。
:::

#### 软件串口

本节将通过使用通用引脚模拟串口通信引脚来演示软件串口通信的功能。

##### 硬件准备

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>CH340G USB 转串口（TTL）模块适配器</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-317990026-ch340g-usb-to-serial-_ttl_-module_adapter_1.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

##### 软件

以下代码示例分别基于 Arduino IDE 和 PlatformIO，它们实现相同的控制效果。您可以根据实际开发情况选择并重用合适的代码。<br/>
对应的软件模拟引脚为 `RX_PIN - D2` 和 `TX_PIN - D1`。

<Tabs>
<TabItem value=' Arduino IDE'>

- 安装 `EspSoftwareSerial` 依赖库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_1.png" style={{width:400, height:'auto'}}/></div><br/>

- 参考代码

```cpp
#include <SoftwareSerial.h>

#define MYPORT_TX D1
#define MYPORT_RX D2

EspSoftwareSerial::UART mySerial;

String receivedData = "";  // Used for storing the received data
unsigned long lastReceiveTime = 0;  // Record the last reception time
const unsigned long TIMEOUT = 100;  // 100ms timeout period

void setup() {
  Serial.begin(115200); //USB-C
  mySerial.begin(38400, SWSERIAL_8N1, MYPORT_RX, MYPORT_TX, false);
}

void loop() {
  // Process the data received via the serial port of the software
  while (mySerial.available()) {
    char incomingChar = mySerial.read();
    receivedData += incomingChar;
    lastReceiveTime = millis();  // The latest time of reception
  }

  // Check if the time limit has been exceeded. If it has, consider that the reception of one frame of data is complete.
  if (receivedData.length() > 0 && (millis() - lastReceiveTime > TIMEOUT)) {
    Serial.print("Received via software serial: ");
    Serial.println(receivedData);
    receivedData = "";  // Clear the buffer area
  }

  // Process the data received through the hardware serial port
  if (Serial.available()) {
    String data = Serial.readString();  // Read the entire string at once
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

</TabItem>

<TabItem value='PlatformIO'>

- 确保 `platform.ini` 的内容如下。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
lib_deps = plerup/EspSoftwareSerial@^8.2.0
```

- 参考代码

```cpp
#include <Arduino.h>
#include <SoftwareSerial.h>

#define MYPORT_TX D1
#define MYPORT_RX D2

EspSoftwareSerial::UART mySerial;

String receivedData = "";  // Used for storing the received data
unsigned long lastReceiveTime = 0;  // Record the last reception time
const unsigned long TIMEOUT = 100;  // 100ms timeout period

void setup() {
  Serial.begin(115200); //USB-C
  mySerial.begin(38400, SWSERIAL_8N1, MYPORT_RX, MYPORT_TX, false);
}

void loop() {
  // Process the data received via the serial port of the software
  while (mySerial.available()) {
    char incomingChar = mySerial.read();
    receivedData += incomingChar;
    lastReceiveTime = millis();  // The latest time of reception
  }

  // Check if the time limit has been exceeded. If it has, consider that the reception of one frame of data is complete.
  if (receivedData.length() > 0 && (millis() - lastReceiveTime > TIMEOUT)) {
    Serial.print("Received via software serial: ");
    Serial.println(receivedData);
    receivedData = "";  // Clear the buffer area
  }

  // Process the data received through the hardware serial port
  if (Serial.available()) {
    String data = Serial.readString();  // Read the entire string at once
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

</TabItem>
</Tabs>

##### 结果

- 接线图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_wire_1.png" style={{width:600, height:'auto'}}/></div>

- 上传程序后，将开发板连接到任何串口工具，配置相应的波特率，然后就可以建立双向通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_4.png" style={{width:600, height:'auto'}}/></div>

### I2C

XIAO ESP32-C5 芯片集成了 I2C 接口，可用于连接外部 I2C 设备，如闪存、显示器和传感器。接下来，我们将以 Seeed Studio Expansion Board Base for XIAO 为例演示 I2C 的使用方法。

#### 硬件准备

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>Seeed Studio Expansion Board Base for XIAO</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

#### 软件

以下代码示例分别基于 Arduino IDE 和 PlatformIO，它们实现相同的显示效果。您可以根据实际开发场景选择并重用合适的代码。

<Tabs>
<TabItem value=' Arduino IDE'>

- 安装 U8g2 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_2.png" style={{width:400, height:'auto'}}/></div><br/>

- 参考代码

```cpp
#include <U8x8lib.h>
#include <Wire.h>

#define SCL D5
#define SDA D4

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
  u8x8.print("XIAO ESP32-C5!");
}
```

</TabItem>

<TabItem value='PlatformIO'>

- 确保 `platform.ini` 的内容如下。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
lib_deps = 
	olikraus/U8g2@^2.36.15
```

- 参考代码

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

#define SCL D5
#define SDA D4

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
  u8x8.print("XIAO ESP32-C5!");
}
```

</TabItem>
</Tabs>

#### 结果

- 上传程序后，屏幕上将显示文本 `Hello World!` 和 `XIAO ESP32-C5!`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_4.jpg" style={{width:600, height:'auto'}}/></div>

### SPI

XIAO ESP32-C5 芯片集成了 SPI 接口，可用于连接外部 SPI 设备，如闪存、显示器和传感器。本示例使用 SPI 屏幕演示 SPI 的功能。

#### 硬件准备

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/10402050_main-02-min.png" style={{width:250, height:'auto'}}/></div></td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

#### 软件

以下代码片段分别基于 Arduino IDE 和 PlatformIO，它们实现相同的显示效果。您可以根据实际开发需求选择并重用合适的代码。

<Tabs>
<TabItem value=' Arduino IDE'>

- 安装 U8g2 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_2.png" style={{width:400, height:'auto'}}/></div><br/>

- 参考代码

```cpp
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, 
  /* cs=*/    D0, 
  /* dc=*/    D1, 
  /* reset=*/ D2);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  const char* msg = "Hello XIAO ESP32-C5";

  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);

    int16_t w = u8g2.getStrWidth(msg);
    int16_t x = (128 - w) / 2;

    int16_t ascent  = u8g2.getAscent();   
    int16_t descent = u8g2.getDescent();  
    int16_t h = ascent - descent;    
    int16_t y = (128 - h) / 2 + ascent; 

    u8g2.drawStr(x, y, msg);
  } while (u8g2.nextPage());
}
```

</TabItem>

<TabItem value='PlatformIO'>

- 确保 `platform.ini` 的内容如下。

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
lib_deps =
  olikraus/U8g2@^2.36.15
```

- 参考代码

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, 
  /* cs=*/    D0, 
  /* dc=*/    D1, 
  /* reset=*/ D2);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  const char* msg = "Hello XIAO ESP32-C5";

  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);

    int16_t w = u8g2.getStrWidth(msg);
    int16_t x = (128 - w) / 2;

    int16_t ascent  = u8g2.getAscent();   
    int16_t descent = u8g2.getDescent();  
    int16_t h = ascent - descent;    
    int16_t y = (128 - h) / 2 + ascent; 

    u8g2.drawStr(x, y, msg);
  } while (u8g2.nextPage());
}
```

</TabItem>
</Tabs>

#### 结果

- 接线图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_wire_2.png" style={{width:600, height:'auto'}}/></div>

- 上传代码后，屏幕上将显示文本 Hello XIAO ESP32-C5。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_5.jpg" style={{width:600, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
