---
description: Seeed Studio XIAO RP2350 上的引脚复用
title: 引脚复用（Arduino）
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2350image.png
slug: /XIAO_RP2350_Pin_Multiplexing
sidebar_position: 2
last_update:
  date: 11/02/2024
  author: Allen
createdAt: '2024-11-13'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/cn/XIAO_RP2350_Pin_Multiplexing/
---

# 引脚复用（Arduino）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2350image.png" style={{width:800, height:'auto'}}/></div>

Seeed Studio XIAO RP2350 拥有丰富的接口。它有 **19 个数字 I/O** 可用作 **PWM 引脚**，以及 **3 个模拟输入** 可用作 **ADC 引脚**。它支持 **UART、I2C 和 SPI** 等四种串行通信接口。本教程将帮助你了解这些接口，并在你的下一个项目中加以实现！

## 硬件总览

### 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO_RP2350_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO_RP2350_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

## 准备工作

目前，由于兼容性问题，XIAO RP2350 的引脚使用存在一些问题。我们已经修复了该问题，并且已合并树莓派官方库。当前版本为 4.2.0，更新将在下一个版本 **4.2.1** 中完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/12.png" style={{width:500, height:'auto'}}/></div>

在此期间，请前往 **Arduino15/packages/rp2040/hardware/rp2040/4.2.0/variants/seeed_xiao_rp2350（你的 Arduino 库地址）** 替换该文件，并[点击此处下载文件](https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/file.zip)。完成后，你就可以愉快地开始创作了！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/3.png" style={{width:800, height:'auto'}}/></div>

## 数字引脚

### 硬件准备

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

请将 XIAO RP2350 安装到扩展板上，并通过 Grove 线缆将 Grove LED 连接到扩展板的 **A0/D0** 接口。最后，通过 USB-C 线缆将 XIAO 连接到电脑。

### 软件实现

在本示例中，我们将通过连接到 XIAO 扩展板的按键来控制继电器的开/关状态。当按下按键时，继电器打开；当松开按键时，继电器关闭。

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

### 效果展示

如果一切顺利，在上传程序后，你应该会看到如下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/1.gif" style={{width:500, height:'auto'}}/></div>

## 数字引脚作为 PWM 使用

XIAO RP2350 上的所有 GPIO 引脚都支持 PWM 输出。因此，你可以使用任意引脚输出 PWM 来调节灯光亮度、控制舵机等功能。

### 硬件准备

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

请将 XIAO RP2350 安装到扩展板上，并通过 Grove 线缆将 Grove LED 连接到扩展板的 **A0/D0** 接口。最后，通过 USB-C 线缆将 XIAO 连接到电脑。

### 软件实现

在本示例中，我们将演示如何使用 PWM 输出来控制灯光的亮度。

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

### 效果展示

如果程序运行成功，你将看到如下运行效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2.gif" style={{width:500, height:'auto'}}/></div>

## 模拟引脚

XIAO MG24（Sense）开发板配备 12 位 ADC，可对模拟传感器数值进行高分辨率读取，这有助于我们获得更加精确的读数。

接下来，我们将选择两个传感器来体现 ADC 的特性。

### 硬件准备

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Loudness-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### 软件实现

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

### 效果

如果一切顺利，在上传程序后，你应该会看到如下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/5.png" style={{width:800, height:'auto'}}/></div>

## UART

在使用 Arduino IDE 时，串口通信是许多项目中必不可少的一部分。要在 Arduino IDE 中使用串口，首先需要打开串口监视器窗口。这可以通过点击工具栏中的 **Serial Monitor** 图标，或者按下快捷键 **Ctrl+Shift+M** 来完成。

### 通用用法

一些常用的串口函数包括：

- `Serial.begin()` -- 以指定的波特率初始化通信；
- `Serial.print()` -- 以可读格式向串口发送数据；
- `Serial.write()` -- 向串口发送二进制数据；
- `Serial.available()` -- 检查串口中是否有可读取的数据；
- `Serial.read()` -- 从串口读取一个字节的数据；
- `Serial.flush()` -- 等待正在发送的串口数据传输完成。

通过使用这些串口函数，你可以在 Arduino 开发板和计算机之间发送和接收数据，从而为创建交互式项目提供了许多可能性。

下面是一个示例程序：

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

### 效果

如果一切顺利，在上传程序后，你应该会看到如下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/2.png" style={{width:500, height:'auto'}}/></div>

### Serial1 的使用

根据上面 XIAO RP2350 引脚图中的具体参数，我们可以看到有 TX 和 RX 引脚（D6、D7）。
用法也非常相似，但我们需要使用**串口监控工具**来监控 D6、D7 引脚以获取数据。
所以下一步，我们将使用 D6、D7 引脚来使用 **serial1**。

:::tip
通常，我们使用 **Serial** 在设备和计算机之间进行通信，以便了解程序中正在发生什么。

在此基础上，如果你想使用该设备与另一台设备通信，在这种情况下，我们将使用 **Serial1**。
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

### 效果

如果一切顺利，在上传程序后，你应该会看到如下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/1.png" style={{width:500, height:'auto'}}/></div>

## I2C

XIAO RP2350 具有 I2C 接口，可用于许多传感器的数据传输和解析，也可以用于驱动一些 OLED 屏幕。

### 硬件准备

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

DHT20 传感器使用 I2C 协议，因此我们可以使用 XIAO 扩展板上的 I2C 接口来获取传感器数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/7.png" style={{width:500, height:'auto'}}/></div>

### 软件实现

本示例介绍如何通过 Seeed Studio Expansion Base for XIAO RP2350 获取 DHT20 传感器数据。

步骤 1. 将 Seeed Studio XIAO RP2350 安装到扩展板上，然后连接 Type-C 线缆。

步骤 2. 安装 **Grove Temperature And Humidity Sensor** 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

步骤 3. 将库添加到 Arduino 中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/10.png" style={{width:800, height:'auto'}}/></div>

步骤 4. 打开刚刚下载的库中的 DHTtester 示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/11.png" style={{width:800, height:'auto'}}/></div>

因为我们使用的是 DHT20，所以需要像下面的代码那样取消注释 DHT20 相关代码。

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

### 效果展示

如果一切顺利，在上传程序后，你应该会看到如下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/4.png" style={{width:800, height:'auto'}}/></div>

## SPI

XIAO RP2350 芯片集成了多种外设，其中包括一个 SPI 接口，可用于连接外部 SPI 设备，如闪存、显示屏、传感器等。XIAO RP2350 还支持高速 SPI 传输模式，最高 SPI 传输速率可达 80 MHz，能够满足大多数 SPI 设备的数据传输需求。

### 硬件准备

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

按照上述硬件准备完成后，使用杜邦线连接 XIAO 与 OLED 的 SPI 接口。请参考下表进行接线。

|XIAO RP2350| OLED 显示屏|
|-----------|-------------|
|D8|SCL|
|D10|SI|
|D5|RES|
|D4|D/C|
|D7|CS|
|VCC(VBUS)|5V|
|GND|GND|

### 软件实现

接下来，我们将以下程序作为示例，介绍如何使用 SPI 接口控制 OLED 屏幕显示。

安装 u8g2 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

在 `setup()` 函数中，使用合适的构造函数参数实例化 `U8G2_SH1107_128X128_1_4W_HW_SPI` 类，这些参数指定了用于片选（cs）、数据/命令（dc）和复位的引脚。然后调用 `u8g2.begin()` 函数来初始化显示屏。

在 `loop()` 函数中，使用 `u8g2.firstPage()`、`u8g2.setFont()` 和 `u8g2.drawStr()` 函数将新内容更新到显示屏上。`u8g2.firstPage()` 函数用于为写入设置显示缓冲区，而 `u8g2.nextPage()` 用于显示更新后的内容。do-while 循环确保内容会持续显示，直到程序停止。

总体来说，这段代码演示了如何使用 U8g2 库来控制 OLED 显示屏并在其上显示文本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/15.png" style={{width:700, height:'auto'}}/></div>

## 总结

你已经学习了 XIAO RP2350 引脚的基本功能。现在，就尽情玩转它吧~
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
