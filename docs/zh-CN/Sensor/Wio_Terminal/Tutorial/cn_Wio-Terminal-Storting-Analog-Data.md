---
description: Wio Terminal 存储数据
title: Wio Terminal 存储数据
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Storting-Analog-Data
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Wio Terminal 显示和存储模拟数据

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif" /></div>

## 概述

此示例演示了如何使用折线图功能在 Wio Terminal 上显示 Grove 光传感器的读数，就像串口绘图器一样！此外，光传感器数据还会存储在 SD 卡中。

### 特性

- 读取光传感器数值并绘制成折线图

## 所需的 Arduino 库

- 安装折线图库 `Seeed_Arduino_Linechart`，请访问 [折线图](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Linecharts/) 获取更多信息。

- 安装 SD 库，请访问 [FS](https://wiki.seeedstudio.com/cn/Wio-Terminal-FS-Overview/) 获取更多信息。

## Arduino 说明

1. 强烈建议在尝试此示例代码之前先阅读 [折线图](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Linecharts/)。

2. 下载 [`LightReadings.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/LightReadings.ino.zip) 文件并通过 `Arduino IDE` 上传到您的 Wio Terminal。确保您已安装所有库。

3. 改变周围环境的亮度，观察折线图中的变化！

4. 模拟读数可以在 SD 卡的 `Readings.txt` 文件中找到

## 代码

- **初始化 LCD 和模拟端口**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

如我们所见，Wio Terminal 有两个 Grove 端口，一个是默认的 I2C 端口，另一个是可配置的数字 D0、D1 或模拟 A0 和 A1 端口，以及 UART 端口。在这种情况下，需要模拟端口，因此定义为模拟输入。

同时，按如下方式初始化 SD 卡：

```cpp
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include"seeed_line_chart.h" //include the library

File myFile;
TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

#define max_size 30 //maximum size of data
doubles data; //Initilising a doubles type to store data
int brightness;

void setup() {
    Serial.begin(115200);
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        Serial.println("initialization failed!");
        while(1);
  }
    pinMode(A0, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}
```

- **读取传感器数值和加载数据**

```cpp
void loop() {
    spr.fillSprite(TFT_WHITE);
    brightness = analogRead(A0);
    int brightness = analogRead(LIGHT); //读取光传感器数值

    if (data.size() == max_size) {
        data.pop();//用于移除第一个读取的变量
    }
    data.push(brightness); //存储光传感器数值
    saveData(); //将数据保存到SD卡
    ...
}
```

- **标题配置**

请参考[折线图](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Linecharts/)获取更多信息。

```cpp
//折线图标题的设置
auto header =  text(0, 0)
            .value("Light Sensor Readings")
            .align(center)
            .valign(vcenter)
            .width(tft.width())
            .thickness(2);

header.height(header.font_height() * 2);
header.draw(); //标题高度是字体高度的两倍
```

- **折线图配置**

请参考[折线图](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Linecharts/)获取更多信息。

```cpp
//折线图的设置
auto content = line_chart(20, header.height()); //(x,y) 折线图开始的位置
        content
            .height(tft.height() - header.height() * 1.5) //折线图的实际高度
            .width(tft.width() - content.x() * 2) //折线图的实际宽度
            .based_on(0.0) //y轴的起始点，必须是浮点数
            .show_circle(false) //在每个点绘制圆圈，默认是开启的。
            .value(data) //将数据传递给折线图
            .color(TFT_RED) //设置线条的颜色
            .draw();

spr.pushSprite(0, 0);
```

- **将数据写入SD卡**

请参考[从SD卡读取/写入](https://wiki.seeedstudio.com/cn/Wio-Terminal-FS-ReadWrite/)获取更多信息。

```cpp
void saveData(){
     myFile = SD.open("Readings.txt",FILE_APPEND);
     brightness = analogRead(A0);
     Serial.println(brightness);
     myFile.println(brightness);
     myFile.close();
}
```

## 完整代码

```cpp
##include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include"seeed_line_chart.h" //包含库文件

File myFile;
TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

#define max_size 30 //数据的最大大小
doubles data; //初始化一个doubles类型来存储数据
int brightness;

void setup() {
    Serial.begin(115200);
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        Serial.println("initialization failed!");
        while(1);
  }
    pinMode(A0, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_WHITE);
    brightness = analogRead(A0);

    if (data.size() == max_size) {
        data.pop();//这用于移除第一个读取的变量
    }
    data.push(brightness); //读取变量并存储在data中
    saveData();

    //折线图标题的设置
    auto header =  text(0, 0)
                .value("光传感器读数")
                .align(center)
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
                .show_circle(false) //在每个点绘制圆圈，默认是开启的。
                .value(data) //将数据传递给折线图
                .color(TFT_RED) //设置线条的颜色
                .draw();

    spr.pushSprite(0, 0);
}

void saveData(){
     myFile = SD.open("Readings.txt",FILE_APPEND);
     brightness = analogRead(A0);
     Serial.println(brightness);
     myFile.println(brightness);
     myFile.close();
}
```
