---
description: Seeed Studio XIAO RP2040与Arduino
title: Arduino
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-RP2040-with-Arduino
last_update:
  date: 11/1/2023
  author: 金 菊
---

# **Seeed Studio XIAO RP2040与Arduino**

这是我们将要连接Seeed Studio XIAO RP2040并使用Arduino进行编程的页面。这里将有几个关于引脚复用的项目。

## **入门指南**

首先，我们将把Seeed Studio XIAO RP2040连接到计算机，并从Arduino上传一个简单的代码来检查板子是否正常工作。

### **硬件设置**

**所需材料:**

- Seeed Studio XIAO RP2040 x1
- 计算机 x1
- USB Type-C 数据线 x1

:::提示
一些USB数据线只能供电，无法传输数据。如果您没有USB数据线或不知道您的USB数据线是否能传输数据，您可以查看[sSeeed USB Type C支持USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::
**硬件连接:**

- 步骤一. 按住BOOT按钮，然后将Seeed Studio XIAO RP2040连接到计算机。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" /></div>

- 步骤二. 如果计算机上显示出"RPI-RP2"磁盘，并且Seeed Studio XIAO RP2040上的电源LED亮起，连接完成。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

### **软件设置**

- **步骤一.** 根据您的操作系统下载并安装最新版本的Arduino IDE。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

- **步骤二.** 启动Arduino应用程序。

- **步骤三.**  将Seeed Studio XIAO RP2040板包添加到Arduino IDE中。

导航到 **文件** > **首选项**, 在 **附加的开发板管理器网址** 中填入以下URL：

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"/></div>

导航到 **工具-> 开发板-> 开发板管理器...**, 在搜索框中输入关键字 "**RP2040**" 。选择最新版本的"Raspberry Pi Pico/RP2040"并安装它。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/2.png"/></div>

:::注意
已经 **没有名为Seeed XIAO RP2040的板包可用**, 请不要下载和使用它！
<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/3.png"/></div>
:::

- **步骤四.** 选择您的开发板和端口。

- **步骤五.** 通过导航到 **"文件 --> 示例 --->01.基础 --> 闪烁"**来打开闪烁示例。

<div align="center"><img width ="550" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"/></div>

**开发板**

安装完开发板包后，找 **工具-> 开发板**, 找到 "**Seeed Studio XIAO RP2040**" 并选择它。现在我们已经完成了在Arduino IDE中设置Seeed Studio XIAO RP2040的步骤。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"/></div>

**接口**

导航到工具 > 端口，选择已连接的Seeed Studio XIAO RP2040的串口名称。通常为COM3或更高 (**COM1** 和 **COM2** 通常保留给硬件串口)。已连接的Seeed Studio XIAO RP2040的串口通常包含写着"Seeed Studio XIAO RP2040"的括号。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"/></div>

- **步骤六.** 点击 **上传** 按钮将闪烁示例代码上传到开发板。

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"/></div>

上传完成后，您应该能够看到板子上的25号引脚绿色（USER）LED每秒闪烁一次。如果是这样，恭喜！这意味着连接成功，现在您可以使用Seeed Studio XIAO RP2040进行更多项目的探索了！

:::注意
如果上传Arduino程序失败，请尝试按住"BOOT"按钮，然后点击"RUN"按钮。此时，Seeed Studio XIAO RP2040将进入引导模式（您的计算机将加载一个可移动磁盘），您将能够再次上传Arduino程序。
:::

## **Seeed Studio XIAO RP2040上的引脚复用：**

Seeed Studio XIAO RP2040板上有11个数字引脚，4个模拟引脚，11个PWM引脚，1个I2C接口，1个UART接口，1个SPI接口，1个SWD Bonding pad接口。我们将提供有关这些接口的教程，以帮助您的项目。

### **数字引脚**

连接一个按钮到D0引脚，将一个LED连接到25号引脚。然后上传以下代码，使用按钮控制LED的开关。

:::警告
请注意，Seeed Studio XIAO RP2040的工作电压是3.3V，如果将传感器错误地连接到5V上，主板可能无法正常工作。
:::

```c++
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

### **模拟**

将一个电位计连接到引脚A0，并将一个LED连接到引脚25。然后上传以下代码，通过旋转电位计旋钮来控制LED的闪烁间隔。

```c++
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

### **使用串口（Serial）**

使用引脚D6作为UART的TX引脚，引脚D7作为UART的RX引脚，发送消息 "Hello World!"。

```c++
void setup() {
    Serial.begin(115200);
    while (!Serial);
}

void loop() {
    Serial.println("Hello,World");
    delay(1000);
}
```

### **RGB LED**

引脚11是RGB LED的使能引脚。通过将引脚11设置为高电平，可以点亮RGB LED。以下是制作闪烁效果的代码。首先，我们需要添加一个第三方库。

- **步骤一.** 打开Arduino IDE，导航到  `Sketch > Include Library > Manage Libraries...` 搜索库。在Arduino库管理器中搜索关键字 "Adafruit_NeoPixel"，安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

在Arduino库管理器中输入关键词 "Adafruit_NeoPixel"，并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" /></div>

- **步骤二.** 将代码复制到Arduino并点击 **上传** 按钮进行上传。RGB LED将显示彩虹色。

```c++
#include <Adafruit_NeoPixel.h>

int Power = 11;
int PIN  = 12;
#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();
  pinMode(Power,OUTPUT);
  digitalWrite(Power, HIGH);

}

void loop() { 
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  delay(400);
  pixels.show();
  delay(500);

}
```

RGB LED将显示彩虹颜色。

### **I2C**

在这里，我们将使用IIC将Seeed Studio XIAO RP2040与 [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) 连接起来，并显示 "Hello world"。

**连接方式**:

我们将使用PIN 5作为SCL引脚，PIN 4作为SDA引脚。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **步骤一.** 打开 Arduino IDE, 导航到 `Sketch > Include Library > Manage Libraries...` 搜索库。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

在Arduino库管理器中搜索关键字 "U8G2"，安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png" /></div>

- **步骤二.** 将代码复制到Arduino并点击 **Upload** 按钮进行上传。

```c++
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

结果展示如下:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png" alt="pir" width={600} height="auto" /></p>

### **SPI**

在这里，我们将通过SPI连接 [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) ，并显示 "Hello World"。OLED显示器支持IIC和SPI通信，但默认通信模式为IIC。需要[将IIC功能更改为SPI功能](https://wiki.seeedstudio.com//Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/) 。

**连接方式**:

我们将使用PIN 8作为SCK引脚，PIN 9作为MISO引脚，PIN 10作为MOSI引脚。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png" /></div>

- **步骤一.** 打开 Arduino IDE, 导航到 `Sketch > Include Library > Manage Libraries...` 搜索库

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

在Arduino库管理器中搜索关键字 "Adafruit_GFX"，安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png" /></div>

在Arduino库管理器中搜索关键字 "Adafruit_SSD1306"，安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png" /></div>

- **步骤二.** 将代码复制到Arduino并点击 **上传** 按钮进行上传。

```c++
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

结果展示如下:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png" alt="pir" width={600} height="auto" /></p>

## 技术支持和产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您对我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
