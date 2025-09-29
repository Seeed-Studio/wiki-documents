---
description: Grove 接口
title: Grove 接口
keywords:
- Wio_terminal Hardware_Overview
- Input&Output
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Grove
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Grove 接口

本文档介绍如何将 Wio Terminal 与 [**Grove 生态系统**](https://www.seeedstudio.com/grove.html) 配合使用。

借助 Grove，您可以通过更简单的连接更快地制作原型！

## Wio Terminal 与 Grove - TDS 传感器

本节介绍如何将 [Grove - TDS 传感器](https://wiki.seeedstudio.com/cn/Grove-TDS-Sensor/) 与 Wio Terminal 配合使用，在折线图上显示实时 TDS 读数！

### 库安装

1. 安装 [LCD](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/) 库。

2. 安装 [Linechart](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Linecharts/) 库。

### 完整代码

将 Grove TDS 传感器连接到 Wio Terminal 的 Grove D/A 引脚，上传代码并查看结果！

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

## Wio Terminal 与 Grove - OLED 显示屏

如果您需要一个第二屏幕与 Wio Terminal 一起显示，**Grove - OLED 显示屏 0.96"** 将是完美的选择。它可以用来显示图形和数据，为 Wio Terminal 增加更多交互功能。

### 库安装

1. 从 Arduino IDE 的**库管理器**中安装 **U8g2** 库。导航到 **Sketch** -> **Include Library** -> **Manage Libraries**... 并在库管理器中搜索并安装 `U8g2`。

### U8g2 初始化

使用 u8g2 的软件 I2C 初始化 OLED 显示屏，使用 SCL 作为时钟，SDA 作为数据：

```cpp
U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
```

#### 使用方法

1. 调用 u8g2.firstPage()。

2. 开始一个 do-while 循环。

3. 在循环体内：使用常规绘制命令绘制内容。

4. 只要 u8g2.nextPage() 返回 true 就继续循环。

更多信息，请访问 [u8g2](https://github.com/olikraus/u8g2/wiki)

### 完整代码

将 Grove OLED Display 0.96" 连接到 Grove I2C 引脚并查看结果！

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

## Wio Terminal 与 Grove - 温度传感器

本节介绍如何使用 [Grove - 温度传感器](https://wiki.seeedstudio.com/cn/Grove-Temperature_Sensor_V1.2/) 与 Wio Terminal 来显示实时环境温度读数。

### 库安装

1. 安装 [LCD](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/) 库。

2. 安装 [Linechart](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Histogram/) 库。

### 完整代码

将 Grove 温度传感器连接到 Wio Terminal 的 Grove D/A 引脚，上传代码并查看结果！

```cpp
#include"seeed_line_chart.h" //包含库文件
#include <math.h>

TFT_eSPI tft;

#define max_size 50 //数据的最大大小
doubles data; //初始化一个doubles类型来存储数据
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

const int B = 4275;               // 热敏电阻的B值
const int R0 = 100000;            // R0 = 100k
const int pinTempSensor = A0;     // Grove - 温度传感器连接到A0

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

    float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15; // 通过数据表转换为温度

    if (data.size() == max_size) {
        data.pop();//用于移除第一个读取的变量
    }
    data.push(temperature); //读取变量并存储在data中

    //折线图标题的设置
    auto header =  text(0, 0)
                .value("温度读数")
                .align(center)
                .color(TFT_WHITE)
                .valign(vcenter)
                .width(tft.width())
                .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); //标题高度是字体高度的两倍

  //折线图的设置
    auto content = line_chart(20, header.height()); //(x,y) 折线图开始的位置
         content
                .height(tft.height() - header.height() * 1.5) //折线图的实际高度
                .width(tft.width() - content.x() * 2) //折线图的实际宽度
                .based_on(0.0) //y轴的起始点，必须是浮点数
                .show_circle(true) //在每个点绘制圆圈，默认开启。
                .y_role_color(TFT_WHITE)
                .x_role_color(TFT_WHITE)
                .value(data) //将数据传递给折线图
                .color(TFT_RED) //设置线条的颜色
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```

## Wio Terminal 与 Grove - GPS 传感器

本节介绍如何将 Grove - GPS 传感器与 Wio Terminal 配合使用来获取实时 GPS 信息。传感器本身输出 NMEA GPS 数据，我们将使用 TinyGPSPlus 库来解析数据为可读信息。

### 库安装

1. 安装 [TinyGPSPlus 库](https://github.com/mikalhart/TinyGPSPlus)。

### 完整代码

将 Grove GPS 传感器连接到 Wio Terminal 的 Grove I2C 引脚（左侧），上传代码并在串口监视器中查看结果（波特率：9600）！

```cpp
#include <TinyGPS++.h>
#include <wiring_private.h>

static const uint32_t GPSBaud = 9600;

// TinyGPS++ 对象
TinyGPSPlus gps;

// 与GPS设备的串行连接 - 左侧Grove连接器。
// 左侧Grove连接器与40针连接器的I2C1共享引脚。
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
  // 此示例在每次正确编码新语句时显示信息。
  while (Serial3.available() > 0)
    if (gps.encode(Serial3.read()))
      displayInfo();
 
  if (millis() > 5000 && gps.charsProcessed() < 10)
  {
    Serial.println(F("未检测到GPS：请检查接线。"));
    while(true);
  }
}

void displayInfo()
{
  Serial.print(F("位置: ")); 
  if (gps.location.isValid())
  {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  }
  else
  {
    Serial.print(F("无效"));
  }

  Serial.print(F("  日期/时间: "));
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
    Serial.print(F("无效"));
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
    Serial.print(F("无效"));
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