---
description: 使用 Arduino 的 Seeed Studio XIAO RP2040
title: Arduino
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /XIAO-RP2040-with-Arduino
last_update:
  date: 1/24/2023
  author: Spencer
createdAt: '2023-01-16'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/
---

# 使用 Arduino 的 Seeed Studio XIAO RP2040

本页面将介绍如何连接 Seeed Studio XIAO RP2040 并使用 Arduino 进行编程。同时还会包含一些关于引脚复用的项目。

## 入门指南

首先，我们将把 Seeed Studio XIAO RP2040 连接到电脑，并从 Arduino 上传一个简单的代码，以检查开发板是否工作正常。

### 硬件准备

**所需材料：**

- Seeed Studio XIAO RP2040 x1
- 电脑 x1
- USB Type-C 线 x1

:::tip
有些 USB 线只能供电，不能传输数据。如果你没有 USB 线，或者不确定你的 USB 线是否可以传输数据，可以查看 [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::
**硬件连接：**

- 步骤 1. 按住 BOOT 按钮不放，然后将 Seeed Studio XIAO RP2040 连接到电脑。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" /></div>

- 步骤 2. 如果电脑上显示 **RPI-RP2** 磁盘，并且 Seeed Studio XIAO RP2040 上的电源指示灯点亮，则说明连接完成。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

### 软件设置

- **步骤 1.** 根据你的操作系统下载并安装最新版本的 Arduino IDE

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **步骤 2.** 启动 Arduino 应用程序。

- **步骤 3.**  在 Arduino IDE 中添加 Seeed Studio XIAO RP2040 的开发板包

依次进入 **File** > **Preferences**，在 **Additional Boards Manager URLs** 中填入以下链接：

```URL
https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
```

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"/></div>

依次进入 **Tools-> Board-> Boards Manager...**，在搜索框中输入关键字 **arduino-pico**。选择最新版本的 **Raspberry Pi Pico/RP2040/RP2350** 并安装。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/arduino_2.png"/></div>

- **步骤 4.** 选择你的开发板和端口。如果串口没有显示，请先进入 BOOT 模式。参见 [硬件准备](#硬件准备)。

- **步骤 5.** 通过 **"File --> Examples --->01.Basics --> Blink"** 打开 Blink 示例

<div align="center"><img width ="550" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"/></div>

**开发板**

安装好开发板包后，依次进入 **Tools-> Board**，找到 "**Seeed Studio XIAO RP2040**" 并选择它。至此，我们已经完成了在 Arduino IDE 中对 Seeed Studio XIAO RP2040 的设置。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"/></div>

**端口**

依次进入 Tools > Port，并选择已连接的 Seeed Studio XIAO RP2040 的串口名称。它通常是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。已连接的 Seeed Studio XIAO RP2040 的串口名称通常会带有括号，其中写着 "Seeed Studio XIAO RP2040"。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"/></div>

- **步骤 6.** 点击 **Upload** 按钮，将 Blink 示例代码上传到开发板。

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"/></div>

上传完成后，你应该可以看到开发板上的 25 号引脚绿色（USER）LED 每秒闪烁一次。如果是这样，恭喜你！这意味着连接成功，现在你可以使用 Seeed Studio XIAO RP2040 探索更多项目了！

:::note
如果 Arduino 程序上传失败，请尝试按住 "BOOT" 按钮，然后点击 "RUN" 按钮。此时，Seeed Studio XIAO RP2040 将进入 boot 模式（你的电脑会加载一个可移动磁盘），然后你就可以再次上传 Arduino 程序。
:::

## Seeed Studio XIAO RP2040 的引脚复用

Seeed Studio XIAO RP2040 包含 11 个数字引脚、4 个模拟引脚、11 个 PWM 引脚、1 个 I2C 接口、1 个 UART 接口、1 个 SPI 接口、1 个 SWD 焊盘接口。我们将针对这些接口提供教程，以便更好地帮助你的项目开发。

### 数字

将一个按键连接到 D0 引脚，将一个 LED 连接到 25 号引脚。然后上传以下代码，通过按键控制 LED 的开/关。

:::warning
请注意，Seeed Studio XIAO RP2040 的工作电压为 3.3V，如果错误地将传感器连接到 5V，主板可能无法正常工作。
:::

```cpp
const int buttonPin = D0;     // the number of the pushbutton pin
const int ledPin =  25;      // the number of the LED pin

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

### 模拟

将一个电位器连接到 A0 引脚，将一个 LED 连接到 25 号引脚。然后上传以下代码，通过旋转电位器旋钮来控制 LED 的闪烁间隔。

```cpp
const int sensorPin = A0;
const int ledPin =  25; 
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

### 串口

使用 D6 引脚作为 UART 的 TX 引脚，D7 引脚作为 UART 的 RX 引脚，发送 "Hello World!" 消息

```cpp
void setup() {
    Serial.begin(115200);
    while (!Serial);
}

void loop() {
    Serial.println("Hello,World");
    delay(1000);
}
```

### 三色指示 LED

在 XIAO RP2040 上，电源指示灯旁边有三个独立的单色 LED。GPIO17 控制红色 LED，GPIO16 控制绿色 LED，GPIO25 控制蓝色 LED。下面列出了宏定义。

```c
#define PIN_LED_R      (17u)
#define PIN_LED_G      (16u)
#define PIN_LED_B      (25u)
```

参考代码

```cpp
/*
 * RP2040 RGB LED tutorial
 *
 * LED_R: GPIO17
 * LED_G: GPIO16
 * LED_B: GPIO25
 *
 * This example assumes each LED turns on when its GPIO is HIGH.
 * If your hardware is active-low, swap HIGH and LOW in setLed().
 */


// Turn on one LED at a time and turn the other two LEDs off.
void setLed(uint8_t pin)
{
  digitalWrite(PIN_LED_R, LOW);
  digitalWrite(PIN_LED_G, LOW);
  digitalWrite(PIN_LED_B, LOW);

  digitalWrite(pin, HIGH);
}

void setup()
{
  // Configure the three LED GPIO pins as outputs.
  pinMode(PIN_LED_R, OUTPUT);
  pinMode(PIN_LED_G, OUTPUT);
  pinMode(PIN_LED_B, OUTPUT);

  // Start with all LEDs turned off.
  digitalWrite(PIN_LED_R, LOW);
  digitalWrite(PIN_LED_G, LOW);
  digitalWrite(PIN_LED_B, LOW);
}

void loop()
{
  // Show red, green, and blue in sequence.
  setLed(PIN_LED_R);
  delay(500);

  setLed(PIN_LED_G);
  delay(500);

  setLed(PIN_LED_B);
  delay(500);
}
```

- LED 将依次点亮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/third_led.gif" style={{width:400, height:'auto'}}/></div><br />

### RGB LED

:::caution

如果在过高亮度下使用，RGB LED 可能会导致眼睛疲劳或损伤，建议佩戴适当的眼部防护。

:::

在 XIAO RP2040 系列中，GPIO11（NEOPIXEL_POWER）作为使能引脚，而 GPIO12（PIN_NEOPIXEL）用于控制 RGB 颜色输出。请按照以下步骤使用。

:::tip

XIAO RP2040 配备的是贴片圆头 RGB LED，而 XIAO RP2040 Plus 使用的是贴片平头 RGB LED。

:::

首先，我们需要添加一个第三方库。

- **步骤 1.** 打开 Arduino IDE，依次进入 `Sketch > Include Library > Manage Libraries...` 来搜索库。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

在 Arduino Library Manager 中输入关键字 **Adafruit_NeoPixel** 并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" /></div>

- **步骤 2.** 将代码复制到 Arduino 中，并点击 **Upload** 按钮进行上传。

```cpp
#include <Adafruit_NeoPixel.h>

#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN_NEOPIXEL, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();

  pinMode(NEOPIXEL_POWER, OUTPUT);
  digitalWrite(NEOPIXEL_POWER, HIGH);

// Set overall brightness (0~255)
// Recommended eye-friendly range: 10~50
  pixels.setBrightness(50);
}


void loop() {

  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.show();
  delay(500);
}
```

RGB LED 将显示彩虹颜色。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rgb_led.gif" /></div>

### I2C

这里我们将通过 IIC 将 Seeed Studio XIAO RP2040 与 [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) 连接，并显示 "Hello world"。

**连接方式**：

我们将使用 PIN 5 作为 SCL 引脚，PIN 4 作为 SDA 引脚。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **步骤 1.** 打开 Arduino IDE，依次进入 `Sketch > Include Library > Manage Libraries...` 来搜索库。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

在 Arduino Library Manager 中输入关键字 "U8G2" 库，并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png" /></div>

- **步骤 2.** 将代码复制到 Arduino 中，并点击 **Upload** 按钮进行上传。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_ncenB08_tr);   // choose a suitable font
  u8g2.drawStr(0,10,"Hello Wrold!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello Werold!"); 
  u8g2.drawStr(0,50,"Hello Wrrrold!"); 
  u8g2.sendBuffer();                    // transfer internal memory to the display
  delay(1000);  
}
```

结果如下所示：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png" alt="pir" width={600} height="auto" /></p>

### SPI

这里我们将通过 SPI 连接 [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)，并显示 "Hello World"。该 OLED 显示屏同时支持 IIC 和 SPI 通信，但默认通信模式为 IIC。在开始之前，必须先[将 IIC 功能更改为 SPI 功能](https://wiki.seeedstudio.com/cn/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/)。

**连接方式**：

我们将使用 PIN 8 作为 SCK 引脚，PIN 9 作为 MISO 引脚，PIN10 作为 MOSI 引脚。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png" /></div>

- **步骤 1.** 打开 Arduino IDE，依次进入 `Sketch > Include Library > Manage Libraries...` 来搜索库。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

在 Arduino Library Manager 中输入关键字 "Adafruit_GFX" 库，并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png" /></div>

在 Arduino Library Manager 中输入关键字 "Adafruit_SSD1306" 库，并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png" /></div>

- **步骤 2.** 将代码复制到 Arduino 中，并点击 **Upload** 按钮进行上传。

```cpp
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels

// Declaration for SSD1306 display connected using software SPI (default case):
#define OLED_MOSI  MOSI   //Connect SSD1315 D1
#define OLED_CLK  SCK     //Connect SSD1315 D0
#define OLED_DC  D4      //Connect SSD1315 D/C
#define OLED_CS  SS      //Connect SSD1315 CS
#define OLED_RESET  D5   //Connect SSD1315 RES
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT,
  OLED_MOSI, OLED_CLK, OLED_DC, OLED_RESET, OLED_CS);

void setup() {
  Serial.begin(9600);
  if(!display.begin(SSD1306_SWITCHCAPVCC)) {
    Serial.println(F("SSD1306 allocation failed"));
    for(;;); // Don't proceed, loop forever
  }
}

void loop() {
  display.clearDisplay();
  display.setTextSize(1);             // Normal 1:1 pixel scale
  display.setTextColor(SSD1306_WHITE);        // Draw white text
  display.setCursor(0,3);             // Start at top-left corner
  display.println(F("Hello"));
  display.setTextSize(2); 
  display.setCursor(0,16);  
  display.println(F("Hello"));
  display.setTextSize(3); 
  display.setCursor(0,38);  
  display.println(F("Hello"));
  display.display();
  delay(2000);
}
```

结果如下所示：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png" alt="pir" width={600} height="auto" /></p>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
