---
description: 使用 Seeed Studio XIAO RA4M1 进行引脚复用。
title: 使用 Seeed Studio XIAO RA4M1 进行引脚复用
keywords:
- ra4m1
- xiao
- pin multiple
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
sidebar_position: 1
slug: /cn/xiao_ra4m1_pin_multiplexing
last_update:
  date: 08/15/2024
  author: Jason
---

## 数字引脚

XIAO RA4M1 拥有多达 11 个常规 GPIO 引脚、6 个模拟引脚和 8 个可复用的 IO 端口。在这个示例中，我们将使用 XIAO RA4M1、XIAO 扩展板和一个继电器来演示如何使用不同的数字引脚进行读写操作。

### 硬件准备

<table align="center">
  <tr>
      <th>Seeed Studio XIAO R4M1</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - 继电器</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

请将 XIAO RA4M1 或 Sense 安装到扩展板上，并通过 Grove 线缆将继电器连接到扩展板的 **A0/D0** 接口。最后，通过 USB-C 线缆将 XIAO 连接到计算机。

### 软件实现

在这个示例中，我们将使用连接到 XIAO 扩展板的按钮来控制继电器的开关状态。当按钮被按下时，继电器打开；当按钮被释放时，继电器关闭。

```c
const int buttonPin = D1;     // the number of the pushbutton pin
int buttonState = 0;          // variable for reading the pushbutton status
const int relayPin = D0;

void setup() {
  // initialize the Relay pin as an output:
  pinMode(relayPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn Relay on:
    digitalWrite(relayPin, HIGH);
  } else {
    // turn Relay off:
    digitalWrite(relayPin, LOW);
  }
}
```

如果一切顺利，上传程序后，您应该看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/31.gif" style={{width:600, height:'auto'}}/></div>

## 数字引脚作为PWM

XIAO RA4M1上的所有GPIO引脚都支持PWM输出。因此，您可以使用任何引脚输出PWM来调节灯光亮度、控制舵机和其他功能。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio XIAO扩展板配Grove OLED</th>
        <th>Grove - 可变色LED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

请将XIAO RA4M1或Sense安装到扩展板上，然后使用Grove线缆将可变色LED连接到扩展板的A0/D0接口。最后，通过USB-C线缆将XIAO连接到您的计算机。

### 软件实现

在这个示例中，我们将演示如何使用PWM输出来控制灯光的亮度。

```cpp
int LED_pin = D0;    // LED连接到数字引脚10

void setup() {
  // 声明LED引脚为输出
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // 从最小值渐变到最大值，每次增加5个点：
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // 设置数值（范围从0到255）：
    analogWrite(LED_pin, fadeValue);
    // 等待30毫秒以查看调光效果
    delay(30);
  }

  // 从最大值渐变到最小值，每次减少5个点：
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // 设置数值（范围从0到255）：
    analogWrite(LED_pin, fadeValue);
    // 等待30毫秒以查看调光效果
    delay(30);
  }
}
```

如果程序运行成功，您将看到以下运行效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/32.gif" style={{width:600, height:'auto'}}/></div>

## 模拟

XIAO RA4M1 开发板具有高达 14 位的 ADC，可高分辨率读取模拟传感器值，它可以帮助我们读取更准确的值。XIAO RA4M1 开发板上的模数转换器(ADC)。默认情况下，分辨率设置为 10 位，可以设置为 12 位和 14 位分辨率，以提高模拟读数的精度。

ADC 精度的详细数据
- 10 位：0~1024
- 12 位：0~4096
- 14 位：0~16383

接下来，我们将选择两个传感器来体现 ADC 的特性。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove-可变色 LED</th>
	    <th>Grove-旋转角度传感器</th>
	    <th>Seeed Studio Grove Base for XIAO</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>


### 软件实现

``` cpp
#define ADC_Bit_Fourteen 14
#define ADC_Bit_Twelve 12
#define ADC_Bit_Ten 10

const int analogInPin = A1;  // 电位器连接的模拟输入引脚
const int analogOutPin = 9;  // LED 连接的模拟输出引脚

int sensorValue = 0;  // 从电位器读取的值
int outputValue = 0;  // 输出到 PWM 的值（模拟输出）

void setup() {

  Serial.begin(115200);
  // Ten_Bite_ADC_Config(); // 10位
  // Twelve_Bite_ADC_Config(); // 12位
  Fourteen_Bite_ADC_Config(); // 14位
  
}

void loop() {
  sensorValue = analogRead(analogInPin);
  outputValue = map(sensorValue, 0, 4095, 0, 255);
  analogWrite(analogOutPin, outputValue);

  Serial.print("sensor = ");
  Serial.print(sensorValue);
  Serial.print("\t output = ");
  Serial.println(outputValue);
  delay(100);
}

void Ten_Bite_ADC_Config() {
  analogReadResolution(ADC_Bit_Ten);
}

void Twelve_Bite_ADC_Config() {
  analogReadResolution(ADC_Bit_Twelve);
}

void Fourteen_Bite_ADC_Config() {
  analogReadResolution(ADC_Bit_Fourteen);
}
```

如果一切顺利，上传程序后，您应该看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/33.gif" style={{width:650, height:'auto'}}/></div>

## 串口通信

在使用 Arduino IDE 时，串口通信是许多项目的重要组成部分。要在 Arduino IDE 中使用串口通信，您需要首先打开串口监视器窗口。这可以通过点击工具栏中的**串口监视器**图标或按**Ctrl+Shift+M**快捷键来完成。

### 常规用法

一些常用的串口函数包括：

- `Serial.begin()` -- 以指定的波特率初始化通信；
- `Serial.print()` -- 以可读格式向串口发送数据；
- `Serial.write()` -- 向串口发送二进制数据；
- `Serial.available()` -- 检查串口是否有可读取的数据；
- `Serial.read()` -- 从串口读取单个字节的数据；
- `Serial.flush()` -- 等待串口输出数据传输完成。

通过使用这些串口函数，您可以在 Arduino 开发板和计算机之间发送和接收数据，这为创建交互式项目开辟了许多可能性。

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

### Serial1 的使用

根据上述 XIAO RA4M1 引脚图的具体参数，我们可以观察到有 TX 引脚和 RX 引脚。
这与串行通信不同，但用法也非常相似，只是需要添加一些参数。
因此接下来，我们将使用芯片引出的引脚进行串行通信。

```c

#define BAUD 115200

void setup() {
    Serial1.begin(BAUD);
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

### 软件串口的使用

```c
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup() {
  // 初始化串口通信
  Serial.begin(9600);
  while (!Serial);

  // 初始化软件串口
  mySerial.begin(9600);
}

void loop() {
  // 从软件串口读取数据
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("接收到的数据: ");
    Serial.println(data);
  }

  // 向软件串口写入数据
  mySerial.print("Hello World!");

  // 等待一秒钟后重复循环
  delay(1000);
}
```

在这个程序中，我们首先包含 `SoftwareSerial.h` 库来使用软件串口。然后，我们创建一个名为 mySerial 的新 SoftwareSerial 对象，分别使用引脚 2 和 3 作为 RX 和 TX。

在 `setup()` 函数中，我们初始化硬件串口（`Serial.begin()`）和软件串口（`mySerial.begin()`）。

在 `loop()` 函数中，我们使用 `mySerial.available()` 函数检查软件串口是否有可读取的数据。如果有，我们使用 `mySerial.read()` 函数读取传入的字节并将其存储在名为 data 的变量中。然后我们使用 `Serial.print()` 和 `Serial.println()` 函数向硬件串口打印"Received data: "，后跟 data 的值。

我们还使用 `mySerial.print()` 函数向软件串口写入"Hello World!"。这将把数据从 XIAO 发送到连接到软件串口的设备。

最后，我们添加一个 `delay()` 函数，在重复循环之前等待一秒钟。

## IIC

XIAO RA4M1 具有 I2C 接口，可用于许多传感器的数据传输和解析，以及使用一些 OLED 屏幕。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

XIAO 扩展板上的 OLED 显示屏使用 I2C 协议，通过板上的 I2C 电路连接到 XIAO 的 I2C 接口。因此，我们可以直接将 XIAO 插入扩展板并编程以在屏幕上显示内容。

### 软件实现

此示例介绍如何使用 Seeed Studio Expansion Base for XIAO RA4M1 上的 OLED 显示屏。

#### 步骤 1. 将 Seeed Studio XIAO RA4M1 安装在扩展板上，然后连接 Type-C 线缆。

#### 步骤 2. 安装 u8g2 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### 步骤 3. 复制代码并粘贴到 Arduino IDE 中，然后上传。

```c
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("i'm XIAO RA4M1");
}
```

在代码的前几行中，我们包含了所需的库，如 Arduino.h、U8x8lib.h 和 Wire.h。U8x8lib.h 库提供了控制 OLED 显示屏的函数，Wire.h 库提供了 I2C 通信的函数。

在 `setup()` 函数中，我们使用 `u8x8.begin()` 函数初始化 OLED 显示屏。我们还使用 `u8x8.setFlipMode()` 函数设置显示屏的翻转模式，将屏幕旋转 180 度。

在 `loop()` 函数中，我们使用 `u8x8.setFont()` 函数设置字体，并使用 `u8x8.setCursor()` 函数指定光标在显示屏上的位置。最后，我们使用 `u8x8.print()` 函数在 OLED 显示屏上显示字符串 "Hello World!"。

如果您将程序上传到 XIAO RA4M1，您将在扩展板上的 OLED 显示屏上看到显示的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/21.png" style={{width:800, height:'auto'}}/></div>

## SPI

RA4M1 芯片集成了多个外设，包括一个 SPI 接口，可用于连接外部 SPI 设备，如闪存、显示屏、传感器等。XIAO RA4M1 还支持高速 SPI 传输模式，可以实现最高 80 MHz 的 SPI 传输速率，满足大多数 SPI 设备的数据传输需求。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
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

准备好上述硬件后，使用跳线将 XIAO 和 OLED 的 SPI 接口连接起来。请参考以下图表了解接线方法。


### 软件实现

接下来，我们将以下面的程序为例，介绍如何使用 SPI 接口控制 OLED 屏幕显示。

安装 u8g2 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

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

总的来说，这段代码演示了如何使用 U8g2 库来控制 OLED 显示器并在其上显示文本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/15.png" style={{width:700, height:'auto'}}/></div>


## CAN

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
	    <th>XIAO CAN Bus 扩展板</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/main.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

#### 步骤 1 . 准备两个 CAN Bus 分线板和 XIAO RA4M1
#### 步骤 2 . 将这两个 XIAO RA4M1 分别插入 CAN Bus 分线板
#### 步骤 3 . 准备杜邦线连接

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/36.png" style={{width:400, height:'auto'}}/></div>

### 软件准备

我们提供了一个 [MCP2515 板的 Arduino 库](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515)。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

该库包含几个示例，包括：

- ***OBDII-PIDs*** - 从 OBD-II 接口检索数据
- ***send*** - 向 CAN 总线发送帧
- ***recv*** - 从 CAN 总线接收帧
- ***set_mask_filter_recv*** - 使用掩码和过滤器设置从 CAN 总线接收帧

### 软件实现

:::tip
不允许同时为两个 XIAO RA4M1 上电并下载程序，因为这会导致下载串口时出现错误。下载一个后，拔掉它，然后为另一个 XIAO RA4M1 上电以下载程序，最后同时上电以检查串口消息
:::

**CAN 写入代码**

```c

/*  从 CAN 总线发送帧

    CAN 波特率,
    
    #define CAN_5KBPS           1
    #define CAN_10KBPS          2
    #define CAN_20KBPS          3
    #define CAN_25KBPS          4 
    #define CAN_31K25BPS        5
    #define CAN_33KBPS          6
    #define CAN_40KBPS          7
    #define CAN_50KBPS          8
    #define CAN_80KBPS          9
    #define CAN_83K3BPS         10
    #define CAN_95KBPS          11
    #define CAN_100KBPS         12
    #define CAN_125KBPS         13
    #define CAN_200KBPS         14
    #define CAN_250KBPS         15
    #define CAN_500KBPS         16
    #define CAN_666KBPS         17
    #define CAN_1000KBPS        18
*/
   
#include <mcp_can.h>
#include <SPI.h>

/* 请修改 SPI_CS_PIN 以适配您的开发板。

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9

   Seeed Studio CAN-Bus Breakout Board for XIAO and QT Py - D7
*/

#define SPI_CS_PIN  D7 

MCP_CAN CAN(SPI_CS_PIN);                                    // 设置 CS 引脚

void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // 以下代码适用于 OBD-II GPS Dev Kit Atemga32U4 版本
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // 以下代码适用于 OBD-II GPS Dev Kit RP2040 版本
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // 初始化 CAN 总线：波特率 = 500k
    {
        Serial.println("CAN BUS FAIL!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}

unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
void loop()
{
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 每 100ms 发送数据
}

// END FILE
```


**CAN 读取代码**
```c
/*  从CAN总线接收帧

    CAN波特率,
    
    #define CAN_5KBPS           1
    #define CAN_10KBPS          2
    #define CAN_20KBPS          3
    #define CAN_25KBPS          4 
    #define CAN_31K25BPS        5
    #define CAN_33KBPS          6
    #define CAN_40KBPS          7
    #define CAN_50KBPS          8
    #define CAN_80KBPS          9
    #define CAN_83K3BPS         10
    #define CAN_95KBPS          11
    #define CAN_100KBPS         12
    #define CAN_125KBPS         13
    #define CAN_200KBPS         14
    #define CAN_250KBPS         15
    #define CAN_500KBPS         16
    #define CAN_666KBPS         17
    #define CAN_1000KBPS        18

    CANBed V1: https://www.longan-labs.cc/1030008.html
    CANBed M0: https://www.longan-labs.cc/1030014.html
    CAN Bus Shield: https://www.longan-labs.cc/1030016.html
    OBD-II CAN Bus GPS Dev Kit: https://www.longan-labs.cc/1030003.html
*/

#include <SPI.h>
#include "mcp_can.h"

/* 请修改SPI_CS_PIN以适配您的开发板。

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9

   Seeed Studio CAN-Bus Breakout Board for XIAO and QT Py - D7
*/


#define SPI_CS_PIN  D7 

MCP_CAN CAN(SPI_CS_PIN);                                    // 设置CS引脚


void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // 以下代码适用于OBD-II GPS Dev Kit Atemga32U4版本
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // 以下代码适用于OBD-II GPS Dev Kit RP2040版本
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // 初始化CAN总线：波特率 = 500k
    {
        Serial.println("CAN BUS FAIL!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}


void loop()
{
    unsigned char len = 0;
    unsigned char buf[8];

    if(CAN_MSGAVAIL == CAN.checkReceive())            // 检查是否有数据到来
    {
        CAN.readMsgBuf(&len, buf);    // 读取数据，len：数据长度，buf：数据缓冲区

        unsigned long canId = CAN.getCanId();
        
        Serial.println("-----------------------------");
        Serial.print("Get data from ID: ");
        Serial.println(canId, HEX);

        for(int i = 0; i<len; i++)    // 打印数据
        {
            Serial.print(buf[i], HEX);
            Serial.print("\t");
        }
        Serial.println();
    }
}

// END FILE

```

:::tip
在此示例中，您需要焊接CAN总线分线板终端引脚P1中的一个，只有这样才能使用任何速度，否则您只能使用125以下的CAN波特率
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/30.png" style={{width:600, height:'auto'}}/></div>

***什么时候需要连接终端电阻？***
- 1. 长距离通信：如果CAN总线很长（例如超过1米），必须在总线两端连接终端电阻，以避免信号反射引起的通信问题。
- 2. 多节点通信：如果多个节点连接到同一个CAN总线，终端电阻也是不可缺少的。它们确保总线的阻抗稳定性，从而防止信号失真。

***什么时候可以断开终端电阻？***
- 1. 短距离通信：在一些短距离应用中（通常小于1米），可以省略终端电阻，因为信号反射对通信的影响相对较小。
- 2. 单节点通信：如果总线上只有一个节点（如在调试环境中）且距离很短，可以暂时断开终端电阻。

<table align="center">
	<tr>
	    <th>发送端代码结果</th>
	    <th>接收端代码结果</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/25.png" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/26.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
</table>

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