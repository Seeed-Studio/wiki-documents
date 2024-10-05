---
description: Grove端口
title: Grove端口
keywords:
- Wio_terminal Hardware_Overview
- Input&Output
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Grove
last_update:
  date: 3/07/2024
  author: 金菊
---

# Grove 端口

这个仓库介绍了如何在Wio Terminal上与 [**Grove 生态系统**](https://www.seeedstudio.com/grove.html) 一起使用。

借助Grove，您可以通过更简单的连接方式更快地进行原型制作！

## Wio Terminal与Grove - TDS传感器

本部分介绍如何使用 [Grove - TDS 传感器](https://wiki.seeedstudio.com/Grove-TDS-Sensor/) 与Wio Terminal，在线图表上显示实时的TDS读数！

### 库的安装

1. 安装 [LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) 库。

2. 安装 [Linechart](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) 库。

### 完整代码

将Grove TDS传感器连接到Wio Terminal的Grove D/A引脚，上传代码并检查结果

```cpp
#include"seeed_line_chart.h" //include the library
TFT_eSPI tft;

#define max_size 50 //maximum size of data
doubles data; //Initilising a doubles type to store data
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

#define sensorPin A0 //Analog pin

int sensorValue = 0;
float tdsValue = 0;
float Voltage = 0;

void setup() {
    pinMode(sensorPin, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_WHITE);

    sensorValue = analogRead(sensorPin);
    Voltage = sensorValue*5/1024.0; //Convert analog reading to Voltage
    tdsValue=(133.42*Voltage*Voltage*Voltage - 255.86*Voltage*Voltage + 857.39*Voltage)*0.5; //Convert voltage value to TDS value

    if (data.size() == max_size) {
        data.pop();//this is used to remove the first read variable
    }
    data.push(tdsValue); //read variables and store in data

    //Settings for the line graph title
    auto header =  text(0, 0)
                .value("TDS Reading")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .thickness(3);

    header.height(header.font_height() * 2);
    header.draw(); //Header height is the twice the height of the font

  //Settings for the line graph
    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins
         content
                .height(tft.height() - header.height() * 1.5) //actual height of the line chart
                .width(tft.width() - content.x() * 2) //actual width of the line chart
                .based_on(0.0) //Starting point of y-axis, must be a float
                .show_circle(true) //drawing a cirle at each point, default is on.
                .value(data) //passing through the data to line graph
                .color(TFT_RED) //Setting the color for the line
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```

## Wio Terminal与Grove - OLED显示屏

如果您需要在Wio Terminal上使用第二个屏幕进行显示, **Grove - OLED 显示屏 0.96英寸"** 将是一个完美的选择。它可以用于显示图形和数据，为Wio Terminal添加更多的交互功能。

### 库的安装

1. 在Arduino IDE的 **Library Manager** 安装 **U8g2** 库，导航到 **Sketch** -> **Include Library** -> **Manage Libraries**... 然后在库管理器中搜索并安装  `U8g2` 库。

### U8g2初始化

使用u8g2的软件I2C初始化OLED显示屏，使用SCL作为时钟信号，SDA作为数据信号：

```cpp
U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
```

#### 使用方法

1. 调用 u8g2.firstPage()。

2. 开始一个 do-while 循环。

3. 在循环体内：使用常规的绘图命令绘制内容。

4. 只要 u8g2.nextPage() 返回true，就循环执行。

更多信息，请访问 [u8g2](https://github.com/olikraus/u8g2/wiki)

### 完整代码

将Grove OLED显示屏0.96英寸连接到Wio Terminal的Grove I2C引脚，并检查结果！

```cpp
#include <U8g2lib.h>

U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

const unsigned char WAVE[] PROGMEM = {
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xF0,0x00,0xFF,0x00,0x0F,0xF0,0x00,
  0xFC,0x03,0xFF,0xC0,0x3F,0xFC,0x00,
  0xFE,0x07,0xFF,0xE0,0x7F,0xFE,0x00,
  0x1F,0xFF,0x81,0xFF,0xF8,0x1F,0xC0,
  0x0F,0xFF,0x00,0xFF,0xF0,0x0F,0xC0,
  0x03,0xFC,0x00,0x3F,0xC0,0x03,0xC0,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xE0,0x00,0x7E,0x00,0x07,0xE0,0x00,
  0xF8,0x01,0xFF,0x80,0x1F,0xF8,0x00,
  0xFC,0x03,0xFF,0xC0,0x3F,0xFC,0x00,
  0xFF,0x0F,0xFF,0xF0,0xFF,0xFF,0x00,
  0x1F,0xFF,0x81,0xFF,0xF8,0x1F,0xC0,
  0x07,0xFE,0x00,0x7F,0xE0,0x07,0xC0,
  0x01,0xF8,0x00,0x1F,0x80,0x01,0xC0,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xF0,0x00,0xFF,0x00,0x0F,0xF0,0x00,
  0xF8,0x01,0xFF,0x80,0x1F,0xF8,0x00,
  0xFE,0x07,0xFF,0xE0,0x7F,0xFE,0x00,
  0x3F,0xFF,0xC3,0xFF,0xFC,0x3F,0xC0,
  0x0F,0xFF,0x00,0xFF,0xF0,0x0F,0xC0,
  0x07,0xFE,0x00,0x7F,0xE0,0x07,0xC0,
  0x00,0xF0,0x00,0x0F,0x00,0x00,0xC0,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x80,0x00,0x18,0x00,0x01,0x80,0x00,
  0xF0,0x00,0xFF,0x00,0x0F,0xF0,0x00,
  0xFC,0x03,0xFF,0xC0,0x3F,0xFC,0x00,
  0xFF,0x0F,0xFF,0xF0,0xFF,0xFF,0x00,
  0x1F,0xFF,0x81,0xFF,0xF8,0x1F,0xC0,
  0x0F,0xFF,0x00,0xFF,0xF0,0x0F,0xC0,
  0x03,0xFC,0x00,0x3F,0xC0,0x03,0xC0,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00
};

void setup() {
  u8g2.begin();
}

void loop() {
  u8g2.firstPage();
    do {
      u8g2.setFont(u8g2_font_t0_16b_mr);
      u8g2.drawXBMP(40, 0, 50, 50, WAVE);
      u8g2.setCursor(20, 60);
      u8g2.print("Wio Terminal");
    } while (u8g2.nextPage());
}
```

## Wio Terminal与Grove - 温度传感器

本部分介绍如何使用 [Grove - 温度传感器](https://wiki.seeedstudio.com/Grove-Temperature_Sensor_V1.2/) 与Wio Terminal一起显示实时环境温度读数。

### 库的安装

1. 安装 [LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) 库。

2. 安装 [Linechart](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Histogram/) 库。

### 完整代码

将Grove温度传感器连接到Wio Terminal的Grove D/A引脚，上传代码并检查结果！

```cpp
#include"seeed_line_chart.h" //include the library
#include <math.h>

TFT_eSPI tft;

#define max_size 50 //maximum size of data
doubles data; //Initilising a doubles type to store data
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

const int B = 4275;               // B value of the thermistor
const int R0 = 100000;            // R0 = 100k
const int pinTempSensor = A0;     // Grove - Temperature Sensor connect to A0

void setup() {
    pinMode(pinTempSensor, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_DARKCYAN);

    int a = analogRead(pinTempSensor);
    float R = 1023.0/a-1.0;
    R = R0*R;

    float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15; // convert to temperature via datasheet

    if (data.size() == max_size) {
        data.pop();//this is used to remove the first read variable
    }
    data.push(temperature); //read variables and store in data

    //Settings for the line graph title
    auto header =  text(0, 0)
                .value("Temperature Reading")
                .align(center)
                .color(TFT_WHITE)
                .valign(vcenter)
                .width(tft.width())
                .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); //Header height is the twice the height of the font

  //Settings for the line graph
    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins
         content
                .height(tft.height() - header.height() * 1.5) //actual height of the line chart
                .width(tft.width() - content.x() * 2) //actual width of the line chart
                .based_on(0.0) //Starting point of y-axis, must be a float
                .show_circle(true) //drawing a cirle at each point, default is on.
                .y_role_color(TFT_WHITE)
                .x_role_color(TFT_WHITE)
                .value(data) //passing through the data to line graph
                .color(TFT_RED) //Setting the color for the line
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```

## Wio Terminal与Grove - GPS传感器

本部分介绍如何使用Grove - GPS传感器与Wio Terminal一起获取实时GPS信息。传感器本身输出NMEA GPS数据，我们将使用TinyGPSPlus库将数据解析为可读信息。

### 库的安装

1. 安装 [TinyGPSPlus 库](https://github.com/mikalhart/TinyGPSPlus)。

### 完整代码

将Grove GPS传感器连接到Wio Terminal的Grove I2C引脚（左侧），上传代码并在串行监视器中检查结果（波特率：9600）！

```cpp
#include <TinyGPS++.h>
#include <wiring_private.h>

static const uint32_t GPSBaud = 9600;

// The TinyGPS++ object
TinyGPSPlus gps;

// The serial connection to the GPS device - Left side Grove connector.
// Left side Grove connector shares pins with I2C1 of 40 pin connector.
static Uart Serial3(&sercom3, PIN_WIRE_SCL, PIN_WIRE_SDA, SERCOM_RX_PAD_1, UART_TX_PAD_0);

void setup()
{
  Serial.begin(115200);

  Serial3.begin(GPSBaud);
  pinPeripheral(PIN_WIRE_SCL, PIO_SERCOM_ALT);
  pinPeripheral(PIN_WIRE_SCL, PIO_SERCOM_ALT);
}
 
void loop()
{
  // This sketch displays information every time a new sentence is correctly encoded.
  while (Serial3.available() > 0)
    if (gps.encode(Serial3.read()))
      displayInfo();
 
  if (millis() > 5000 && gps.charsProcessed() < 10)
  {
    Serial.println(F("No GPS detected: check wiring."));
    while(true);
  }
}

void displayInfo()
{
  Serial.print(F("Location: ")); 
  if (gps.location.isValid())
  {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.print(F("  Date/Time: "));
  if (gps.date.isValid())
  {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.print(F(" "));
  if (gps.time.isValid())
  {
    if (gps.time.hour() < 10) Serial.print(F("0"));
    Serial.print(gps.time.hour());
    Serial.print(F(":"));
    if (gps.time.minute() < 10) Serial.print(F("0"));
    Serial.print(gps.time.minute());
    Serial.print(F(":"));
    if (gps.time.second() < 10) Serial.print(F("0"));
    Serial.print(gps.time.second());
    Serial.print(F("."));
    if (gps.time.centisecond() < 10) Serial.print(F("0"));
    Serial.print(gps.time.centisecond());
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.println();
}

void SERCOM3_0_Handler()
{
  Serial3.IrqHandler();
}
void SERCOM3_1_Handler()
{
  Serial3.IrqHandler();
}
void SERCOM3_2_Handler()
{
  Serial3.IrqHandler();
}
void SERCOM3_3_Handler()
{
  Serial3.IrqHandler();
}
```
