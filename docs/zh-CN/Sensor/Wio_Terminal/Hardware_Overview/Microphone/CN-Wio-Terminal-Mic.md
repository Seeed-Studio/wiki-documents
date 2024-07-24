---
description: 概述
title: 麦克风入门指南
keywords:
- Wio_terminal Microphone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Mic
last_update:
  date: 3/08/2024
  author: 金菊
---

#  麦克风入门指南

本 wiki 介绍如何在Wio Terminal中使用内置麦克风进行音频输入。麦克风可以用于检测周围的声音并做出相应的反应。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/MIC.png"/></div>

:::注
本文仅演示麦克风的基本用法，我们正在开发适用于Wio Terminal的麦克风库，以实现更多功能！敬请期待！
:::

## 示例代码

注: 已经定义了 `WIO_MIC` 用于内置麦克风。

```cpp
void setup() {
  pinMode(WIO_MIC, INPUT);
  Serial.begin(115200);
}

void loop() {
  int val = analogRead(WIO_MIC);
  Serial.println(val);
  delay(200);
}
```

## 带有LCD屏幕的示例代码

### 安装库

- 安装 [LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) 库。
- 安装 [Linechart](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) 库。

```cpp
#include"seeed_line_chart.h" //include the library
#include <math.h>

TFT_eSPI tft;

#define max_size 50 //maximum size of data
doubles data; //Initilising a doubles type to store data
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

void setup() {
    pinMode(WIO_MIC, INPUT);

    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_DARKGREY);

    int val = analogRead(WIO_MIC);

    if (data.size() == max_size) {
        data.pop();//this is used to remove the first read variable
    }
    data.push(val); //read variables and store in data

    //Settings for the line graph title
    auto header =  text(0, 0)
                .value("Microphone Reading")
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
