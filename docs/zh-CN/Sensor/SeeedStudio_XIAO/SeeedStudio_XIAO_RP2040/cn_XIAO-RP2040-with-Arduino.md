---
description: Seeed Studio XIAO RP2040 与 Arduino
title: Arduino
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /cn/XIAO-RP2040-with-Arduino
last_update:
  date: 1/24/2023
  author: Spencer
---

# **Seeed Studio XIAO RP2040 与 Arduino**

这是我们将 Seeed Studio XIAO RP2040 连接到计算机并使用 Arduino 进行编程的页面。还将包含几个关于引脚复用的项目。

## **入门指南**

首先，我们将把 Seeed Studio XIAO RP2040 连接到计算机，并从 Arduino 上传一个简单的代码来检查开发板是否正常工作。

### **硬件设置**

**所需材料：**

- Seeed Studio XIAO RP2040 x1
- PC x1
- USB Type-C 数据线 x1

:::tip
一些 USB 数据线只能供电而无法传输数据。如果您没有 USB 数据线或不知道您的 USB 数据线是否可以传输数据，您可以查看 [seeed USB type C 支持 USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::
**硬件连接：**

- 步骤 1. 按住 BOOT 按钮，然后将 Seeed Studio XIAO RP2040 连接到 PC。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" /></div>

- 步骤 2. 如果 PC 上显示了"RPI-RP2"磁盘，并且 Seeed Studio XIAO RP2040 上的电源 LED 亮起，则连接完成。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

### **软件设置**

- **步骤 1.** 根据您的操作系统下载并安装最新版本的 Arduino IDE

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

- **步骤 2.** 启动 Arduino 应用程序。

- **步骤 3.**  将 Seeed Studio XIAO RP2040 开发板包添加到您的 Arduino IDE

导航到 **File** > **Preferences**，并在 **Additional Boards Manager URLs** 中填入以下网址：

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"/></div>

导航到 **Tools-> Board-> Boards Manager...**，在搜索框中输入关键词"**RP2040**"。选择最新版本的"Raspberry Pi Pico/RP2040"并安装。

:::note 注意

名为 **Seeed XIAO RP2040 的板载包不再可用**，请不要下载和使用它！

安装"Raspberry Pi Pico/RP2040"包，其中包含"Seeed XIAO RP2040"开发板。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/3.png"/></div>
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/2.png"/></div>

- **步骤 4.** 选择您的开发板和端口。

- **步骤 5.** 通过导航 **"File --> Examples --->01.Basics --> Blink"** 打开 Blink 示例

<div align="center"><img width ="550" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"/></div>

**开发板**

安装开发板包后，导航到 **Tools-> Board**，找到"**Seeed Studio XIAO RP2040**"并选择它。现在我们已经完成了为 Arduino IDE 设置 Seeed Studio XIAO RP2040 的工作。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"/></div>

**端口**

导航到 Tools > Port 并选择已连接的 Seeed Studio XIAO RP2040 的串行端口名称。这通常是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串行端口）。已连接的 Seeed Studio XIAO RP2040 的串行端口通常包含写着"Seeed Studio XIAO RP2040"的括号。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"/></div>

- **步骤 6.** 点击 **Upload** 按钮将 Blink 示例代码上传到开发板。

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"/></div>

上传完成后，您应该能够看到开发板上的引脚 25 绿色（USER）LED 每秒闪烁一次。如果是这样，恭喜您！这意味着连接成功，现在您可以使用 Seeed Studio XIAO RP2040 探索更多项目！

:::note
如果上传 Arduino 程序失败，请尝试按住"BOOT"按钮，然后点击"RUN"按钮。此时，Seeed Studio XIAO RP2040 将进入引导模式（您的计算机将加载一个可移动磁盘），您将能够再次上传 Arduino 程序。
:::

## **Seeed Studio XIAO RP2040 上的引脚复用**

Seeed Studio XIAO RP2040 包含 11 个数字引脚、4 个模拟引脚、11 个 PWM 引脚、1 个 I2C 接口、1 个 UART 接口、1 个 SPI 接口、1 个 SWD 焊盘接口。我们将提供关于这些接口的教程，以便对您的项目有所帮助。

### **数字**

将一个按钮连接到引脚 D0，将一个 LED 连接到引脚 25。然后上传以下代码，使用按钮控制 LED 的开/关。

:::warning
请注意，Seeed Studio XIAO RP2040 的工作电压为 3.3V，如果您错误地将传感器连接到 5V，主板可能无法正常工作。
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

### **模拟**

将电位器连接到引脚 A0，将 LED 连接到引脚 25。然后上传以下代码，通过旋转电位器旋钮来控制 LED 的闪烁间隔。

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

### **Serial**

使用引脚 D6 作为 UART 的 TX 引脚，使用引脚 D7 作为 UART 的 RX 引脚来发送"Hello World!"消息

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

### **RGB LED**

引脚 11 是 RGB LED 的使能引脚。您可以通过将引脚 11 设置为高电平来点亮 RGB LED。这里我们将让它闪烁。首先，我们需要添加一个第三方库。

- **步骤 1.** 打开 Arduino IDE，导航到 `Sketch > Include Library > Manage Libraries...` 来搜索库。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

在 Arduino 库管理器中输入关键词 "Adafruit_NeoPixel" 库并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" /></div>

- **步骤 2.** 将代码复制到 Arduino 中并点击 **Upload** 按钮进行上传。

```cpp
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

RGB LED 将显示彩虹色。

### **I2C**

这里我们将通过 IIC 连接 Seeed Studio XIAO RP2040 与 [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)，并显示"Hello world"。

**连接**：

我们将使用 PIN 5 作为 SCL 引脚，PIN 4 作为 SDA 引脚。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **步骤 1.** 打开 Arduino IDE，导航到 `Sketch > Include Library > Manage Libraries...` 来搜索库。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

在 Arduino 库管理器中输入关键词"U8G2"库，并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png" /></div>

- **步骤 2.** 将代码复制到 Arduino 中，点击 **Upload** 按钮上传。

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

结果显示为：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png" alt="pir" width={600} height="auto" /></p>

### **SPI**

这里我们将通过SPI连接[Grove - OLED黄蓝显示屏0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)并显示"Hello World"。OLED显示屏支持IIC和SPI通信，但默认通信模式是IIC。在开始之前，必须[将IIC功能更改为SPI功能](https://wiki.seeedstudio.com/cn/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/)。

**连接**：

我们将使用PIN 8作为SCK引脚，PIN 9作为MISO引脚，PIN10作为MOSI引脚。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png" /></div>

- **步骤1.** 打开Arduino IDE，导航到`Sketch > Include Library > Manage Libraries...`来搜索库。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

在Arduino库管理器中输入关键词"Adafruit_GFX"库并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png" /></div>

在Arduino库管理器中输入关键词"Adafruit_SSD1306"库并安装最新版本。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png" /></div>

- **步骤2.** 将代码复制到Arduino并点击**Upload**按钮上传。

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

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
