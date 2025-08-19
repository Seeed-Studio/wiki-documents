---
description: Seeed Studio XIAO RP2350 的引脚复用
title: 引脚复用 (Arduino)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2350image.png
slug: /cn/XIAO_RP2350_Pin_Multiplexing
sidebar_position: 2
last_update:
  date: 11/02/2024
  author: Allen
---

# 引脚复用 (Arduino)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2350image.png" style={{width:800, height:'auto'}}/></div>

Seeed Studio XIAO RP2350 具有丰富的接口。它有 **19 个数字 I/O** 可用作 **PWM 引脚**，以及 **3 个模拟输入**可用作 **ADC 引脚**。它支持四种串行通信接口，如 **UART、I2C 和 SPI**。本教程将帮助您了解这些接口并在您的下一个项目中实现它们！

## 准备工作

目前，由于兼容性问题，XIAO RP2350 的引脚使用存在一些问题。我们已经修复了这个问题，并且 Raspberry Pi 官方库已经合并。当前版本是 4.2.0，更新将在下一个版本 **4.2.1** 中完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/12.png" style={{width:500, height:'auto'}}/></div>

在此期间，请前往 **Arduino15/packages/rp2040/hardware/rp2040/4.2.0/variants/seeed_xiao_rp2350（您的 Arduino 库地址）** 并[点击此处下载文件](https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/file.zip)来替换此文件。完成后，您就可以开始您的工作了！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/3.png" style={{width:800, height:'auto'}}/></div>

## 数字引脚

### 硬件准备

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio XIAO 扩展板配 Grove OLED</th>
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

请将 XIAO RP2350 安装到扩展板上，并通过 Grove 线缆将 Grove LED 连接到扩展板的 **A0/D0** 接口。最后，通过 USB-C 线缆将 XIAO 连接到计算机。

### 软件实现

在这个示例中，我们将使用连接到 XIAO 扩展板的按钮来控制继电器的开关状态。当按钮被按下时，继电器打开；当按钮被释放时，继电器关闭。

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

### 效果

如果一切顺利，上传程序后，您应该看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/1.gif" style={{width:500, height:'auto'}}/></div>


## 数字引脚作为PWM

XIAO RP2350上的所有GPIO引脚都支持PWM输出。因此，您可以使用任何引脚输出PWM来调节灯光亮度、控制舵机和其他功能。

### 硬件准备

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio XIAO扩展板配Grove OLED</th>
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

请将XIAO RP2350安装到扩展板上，并通过Grove线缆将Grove LED连接到扩展板的**A0/D0**接口。最后，通过USB-C线缆将XIAO连接到计算机。

### 软件实现

在这个示例中，我们将演示如何使用PWM输出来控制灯光的亮度。

```cpp
int LED_pin = D0;    // LED连接到数字引脚10

void setup() {
  // 声明LED引脚为输出
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // 从最小值到最大值以5点增量淡入：
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // 设置值（范围从0到255）：
    analogWrite(LED_pin, fadeValue);
    // 等待30毫秒以查看调光效果
    delay(30);
  }

  // 从最大值到最小值以5点增量淡出：
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // 设置值（范围从0到255）：
    analogWrite(LED_pin, fadeValue);
    // 等待30毫秒以查看调光效果
    delay(30);
  }
}
```

### 效果

如果程序运行成功，您将看到以下运行效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2.gif" style={{width:500, height:'auto'}}/></div>

## 模拟

XIAO MG24(Sense) 开发板具有 12 位 ADC，可高分辨率读取模拟传感器值，它可以帮助我们读取更准确的值。

接下来，我们将选择两个传感器来体现 ADC 的特性。

### 硬件准备

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio XIAO 扩展底板配 Grove OLED</th>
        <th>Grove - 声音传感器</th>
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
    Serial.begin(9600);// 初始化串口
}

void loop()
{
    loudness = analogRead(A0);// 从 A0 引脚读取模拟数据
    Serial.println(loudness);
    delay(200);
}
```

### 效果
如果一切顺利，上传程序后，您应该看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/5.png" style={{width:800, height:'auto'}}/></div>

## UART

在使用 Arduino IDE 时，串行通信是许多项目的重要组成部分。要在 Arduino IDE 中使用串行通信，您需要首先打开串行监视器窗口。这可以通过点击工具栏中的**串行监视器**图标或按**Ctrl+Shift+M**快捷键来完成。

### 一般用法

一些常用的串行函数包括：

- `Serial.begin()` -- 以指定的波特率初始化通信；
- `Serial.print()` -- 以可读格式向串行端口发送数据；
- `Serial.write()` -- 向串行端口发送二进制数据；
- `Serial.available()` -- 检查串行端口是否有可读取的数据；
- `Serial.read()` -- 从串行端口读取单个字节的数据；
- `Serial.flush()` -- 等待传出串行数据的传输完成。

通过使用这些串行函数，您可以在 Arduino 开发板和计算机之间发送和接收数据，这为创建交互式项目开辟了许多可能性。

以下是一个示例程序：

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

如果一切顺利，上传程序后，您应该看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/2.png" style={{width:500, height:'auto'}}/></div>

### Serial1 的使用

根据上述 XIAO RP2350 引脚图的具体参数，我们可以观察到有 TX 和 RX 引脚（D6、D7）。
使用方法也非常相似，但我们需要使用**串口监控工具**来监控 D6、D7 引脚以获取数据。
接下来，我们将使用 D6、D7 引脚来使用 **Serial1**。

:::tip
通常，我们使用 **Serial** 在设备和计算机之间进行通信，以便了解程序中发生的情况。

基于此，您希望使用此设备与另一个设备进行通信。在这种情况下，我们将使用 **Serial1**。
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

如果一切顺利，上传程序后，您应该看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/1.png" style={{width:500, height:'auto'}}/></div>

## I2C

XIAO RP2350 具有 I2C 接口，可用于许多传感器的数据传输和解析，以及使用一些 OLED 屏幕。

### 硬件准备

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio XIAO 扩展板配 Grove OLED</th>
        <th>Grove - DHT20 温湿度传感器</th>
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

DHT20 传感器使用 I2C 协议，因此我们可以使用 XIAO 扩展板上的 I2C 端口来获取传感器数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/7.png" style={{width:500, height:'auto'}}/></div>

### 软件实现

本示例介绍如何通过 Seeed Studio XIAO RP2350 扩展板获取 DHT20 传感器数据。

步骤 1. 将 Seeed Studio XIAO RP2350 安装到扩展板上，然后连接 Type-C 线缆。

步骤 2. 安装 **Grove Temperature And Humidity Sensor** 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

步骤 3. 将库添加到 Arduino。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/10.png" style={{width:800, height:'auto'}}/></div>

步骤 4. 从刚下载的库中打开 DHTtester 示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/11.png" style={{width:800, height:'auto'}}/></div>

因为我们使用 DHT20，所以需要取消注释 DHT20 代码，如下面的代码所示。

```c
// 各种DHT湿度/温度传感器的示例测试代码
// 由ladyada编写，公共领域

#include "Grove_Temperature_And_Humidity_Sensor.h"

// 取消注释你正在使用的类型！
//#define DHTTYPE DHT11   // DHT 11
// #define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
//#define DHTTYPE DHT10   // DHT 10
#define DHTTYPE DHT20   // DHT 20

/*注意：DHT10和DHT20与其他DHT*传感器不同，它使用i2c接口而不是单线接口*/
/*所以它不需要引脚。*/
// #define DHTPIN 2     // 我们连接到的引脚（DHT10和DHT20不需要定义它）
// DHT dht(DHTPIN, DHTTYPE);   //   DHT11 DHT21 DHT22
DHT dht(DHTTYPE);         //   DHT10 DHT20不需要定义引脚

// 将传感器的引脚1（左侧）连接到+5V
// 将传感器的引脚2连接到你的DHTPIN
// 将传感器的引脚4（右侧）连接到地线
// 从引脚2（数据）到引脚1（电源）连接一个10K电阻


#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void setup() {

    debug.begin(115200);
    debug.println("DHTxx测试！");
    Wire.begin();

    /*如果使用WIO link，必须拉高电源引脚。*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);

    dht.begin();
}

void loop() {
    float temp_hum_val[2] = {0};
    // 读取温度或湿度大约需要250毫秒！
    // 传感器读数也可能有长达2秒的"延迟"（这是一个非常慢的传感器）


    if (!dht.readTempAndHumidity(temp_hum_val)) {
        debug.print("湿度: ");
        debug.print(temp_hum_val[0]);
        debug.print(" %\t");
        debug.print("温度: ");
        debug.print(temp_hum_val[1]);
        debug.println(" *C");
    } else {
        debug.println("获取温度和湿度值失败。");
    }

    delay(1500);
}
```

### 效果

如果一切顺利，上传程序后，您应该看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/4.png" style={{width:800, height:'auto'}}/></div>

## SPI

XIAO RP2350 芯片集成了多个外设，包括一个 SPI 接口，可用于连接外部 SPI 设备，如闪存、显示器、传感器等。XIAO RP2350 还支持高速 SPI 传输模式，可实现最高 80 MHz 的 SPI 传输速率，满足大多数 SPI 设备的数据传输需求。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

准备好上述硬件后，使用跳线将 XIAO 和 OLED 的 SPI 接口连接起来。请参考下表进行接线。

|XIAO RP2350| OLED Display|
|-----------|-------------|
|D8|SCL|
|D10|SI|
|D5|RES|
|D4|D/C|
|D7|CS|
|VCC(VBUS)|5V|
|GND|GND|

### 软件实现

接下来，我们将以下面的程序为例，介绍如何使用 SPI 接口控制 OLED 屏幕显示。

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

在 `setup()` 函数中，使用适当的构造函数参数实例化 `U8G2_SH1107_128X128_1_4W_HW_SPI` 类，这些参数指定了用于片选 (cs)、数据/命令 (dc) 和复位的引脚。然后，调用 `u8g2.begin()` 函数来初始化显示器。

在 `loop()` 函数中，使用 `u8g2.firstPage()`、`u8g2.setFont()` 和 `u8g2.drawStr()` 函数用新内容更新显示器。`u8g2.firstPage()` 函数设置显示缓冲区以供写入，而 `u8g2.nextPage()` 显示更新的内容。do-while 循环确保内容持续显示，直到程序停止。

总的来说，这段代码演示了如何使用 U8g2 库控制 OLED 显示器并在其上显示文本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/15.png" style={{width:700, height:'auto'}}/></div>


## 总结
您已经学会了 XIAO RP2350 引脚的基本功能。现在，让我们开始享受使用它的乐趣吧~
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>


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