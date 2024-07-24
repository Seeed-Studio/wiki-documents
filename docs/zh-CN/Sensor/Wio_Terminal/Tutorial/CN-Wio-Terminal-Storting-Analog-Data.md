---
description:  Wio Terminal Storing Data
title:  Wio Terminal 存储数据
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Storting-Analog-Data
last_update:
  date: 3/07/2024
  author: jessie
---

# 此示例演示如何使用线图函数在Wio Terminal上显示Grove-光传感器的读数，就像串行绘图器一样！此外，光传感器数据还会存储在SD卡中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif" /></div>

## 概述

此示例演示如何使用线图函数在Wio Terminal上显示Grove-光传感器的读数，就像串行绘图器一样！此外，光传感器数据还会存储在SD卡中。

### 特点

- 读取光传感器数值并绘制成线图。

##需要的Arduino库

- 安装线图库 `Seeed_Arduino_Linechart` ，请访问  [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) 获取更多信息。

- Install the SD Library, please visit [FS](https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/) for more information.

## Arduino指令

1. 强烈建议先阅读 [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) 并熟悉示例代码之前的内容。

2. 下载 [`LightReadings.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/LightReadings.ino.zip) 文件，并通过`Arduino IDE`上传到Wio Terminal。确保已安装所有库。
3. 改变周围的亮度并观察线图的变化！

4. 模拟读数可以在SD卡的 `Readings.txt` 文件中找到。

## 代码

- **初始化LCD和模拟端口**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

正如我们所见，Wio Terminal有两个Grove端口，一个是默认的I2C端口，另一个是可配置的数字D0、D1或模拟A0、A1端口，以及UART端口。在这种情况下，需要模拟端口作为模拟输入。

同时，初始化SD卡如下：

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
    int brightness = analogRead(LIGHT); //Reading light sensor values

    if (data.size() == max_size) {
        data.pop();//this is used to remove the first read variable
    }
    data.push(brightness); //Storing light sensor values
    saveData(); //Saving data to SD card
    ...
}
```

- **标题配置**

更多信息请参考 [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) 。

```cpp
//Settings for the line graph title
auto header =  text(0, 0)
            .value("Light Sensor Readings")
            .align(center)
            .valign(vcenter)
            .width(tft.width())
            .thickness(2);

header.height(header.font_height() * 2);
header.draw(); //Header height is the twice the height of the font
```

- **折线图配置**

更多信息请参考 [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) 。

```cpp
//Settings for the line graph
auto content = line_chart(20, header.height()); //(x,y) where the line graph begins
        content
            .height(tft.height() - header.height() * 1.5) //actual height of the line chart
            .width(tft.width() - content.x() * 2) //actual width of the line chart
            .based_on(0.0) //Starting point of y-axis, must be a float
            .show_circle(false) //drawing a cirle at each point, default is on.
            .value(data) //passing through the data to line graph
            .color(TFT_RED) //Setting the color for the line
            .draw();

spr.pushSprite(0, 0);
```

- **将数据写入SD卡**

更多信息请参考 [Reading/Writing from the SD Card](https://wiki.seeedstudio.com/Wio-Terminal-FS-ReadWrite/) 。

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

void loop() {
    spr.fillSprite(TFT_WHITE);
    brightness = analogRead(A0);

    if (data.size() == max_size) {
        data.pop();//this is used to remove the first read variable
    }
    data.push(brightness); //read variables and store in data
    saveData();

    //Settings for the line graph title
    auto header =  text(0, 0)
                .value("Light Sensor Readings")
                .align(center)
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
                .show_circle(false) //drawing a cirle at each point, default is on.
                .value(data) //passing through the data to line graph
                .color(TFT_RED) //Setting the color for the line
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
