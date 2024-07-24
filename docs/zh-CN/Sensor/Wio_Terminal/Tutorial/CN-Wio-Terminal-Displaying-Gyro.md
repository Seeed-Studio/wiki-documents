---
description:  Wio Terminal Displaying Gyro
title:  Wio Terminal 显示陀螺仪
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Displaying-Gyro
last_update:
  date: 3/08/2024
  author: jessie
---

# Wio Terminal Wio 显示加速度计读数

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0279.2019-11-28%2018_25_43.gif" /></div>

## 概述

本示例演示了如何在 Wio Terminal上绘制线图。在本示例中，将三轴加速度计读数（三组数据）绘制到一个线图中，以显示 Wio 终端的实时位置！

### 特点

- 在一个线图中显示三轴加速度计读数

- Wio Terminal的实时定位

## Arduino 所需的库

- 访问 [Seeed_Arduino_Linechart](https://github.com/Seeed-Studio/Seeed_Arduino_Linechart) 并将整个仓库下载到本地驱动器。

- 安装内置的加速度计库 `Seeed_Arduino_LIS3DHTR`, 请访问 [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/beta)  以获取更多信息。

## Arduino 指令

1. 下载 [`AcceratorReadings.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/AcceleratorReadings.ino.zip) 文件并通过 `Arduino IDE` 上传到 Wio Terminal。确保您已安装所有库。

2. 将 Wio Terminal 在不同的轴上移动，查看它显示的内容，您还可以打开串行图表工具以检查效果！

## 代码

- **初始化 LCD 和加速度计**

```cpp
#include"LIS3DHTR.h" //include the accelerator library
#include"seeed_line_chart.h" //include the line chart library

TFT_eSPI tft;
LIS3DHTR<TwoWire>  lis;

#define MAX_SIZE 50 //maximum size of data
doubles accelerator_readings[3];
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite

void setup() {
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
    spr.setRotation(3);

    lis.begin(Wire1);
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G);

    Serial.begin(115200);
}
```

- **读取加速度计数据并加载数据**

请参考 [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/)  以获取更多信息。

```cpp
void loop() {
    spr.fillSprite(TFT_WHITE);
    float x_raw = lis.getAccelerationX();
    float y_raw = lis.getAccelerationY();
    float z_raw = lis.getAccelerationZ();
    ...

    if (accelerator_readings[0].size() == MAX_SIZE) {
      for (uint8_t i = 0; i<3; i++){
        accelerator_readings[i].pop(); //this is used to remove the first read variable
      }
    }

    accelerator_readings[0].push(x_raw); //store x-axis readings
    accelerator_readings[1].push(y_raw); //store y-axis readings
    accelerator_readings[2].push(z_raw); //store z-axis readings
    ...
}
```

- **标题配置**

请参考 [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) 以获取更多信息。

```cpp
auto header =  text(0, 0)
            .value("Accelerator Readings")
            .align(center)
            .valign(vcenter)
            .width(spr.width())
            .thickness(2);

header.height(header.font_height(&spr) * 2);
header.draw(&spr); // Header height is the twice the height of the font
```

- **线图配置**

要在一个图表中绘制多条线，您可以将双精度数组传递给线图，例如 `content.value({doubles[0],doubles[1],doubles[2]...})` 如下所示。还可以使用 `.color()` 为每条线设置颜色，其中颜色的顺序将与数据传递的顺序匹配。

```cpp
auto content = line_chart(20, header.height()); //(x,ywhere the line graph begins
     content
            .height(spr.height() - header.height() * 1.5) //actual height of the line chart
            .width(spr.width() - content.x() * 2) //actual width of the line chart
            .based_on(-2.0) //Starting point of y-axis, must be a float
            .show_circle(false) //drawing a cirle at each point, default is on.
            .value({accelerator_readings[0],accelerator_readings[1], accelerator_readings[2]}) //passing through the data to line graph
            .max_size(MAX_SIZE)          
            .color(TFT_BLUE, TFT_RED, TFT_GREEN)
            .backgroud(TFT_WHITE)
            .draw(&spr);
```

## 完整代码

```cpp
#include"LIS3DHTR.h" //include the accelerator library
#include"seeed_line_chart.h" //include the line chart library

TFT_eSPI tft;
LIS3DHTR<TwoWire>  lis;

#define MAX_SIZE 50 //maximum size of data
doubles accelerator_readings[3];
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite

void setup() {
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
    spr.setRotation(3);

    lis.begin(Wire1);
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G);

    Serial.begin(115200);
}

void loop() {
    spr.fillSprite(TFT_WHITE);
    float x_raw = lis.getAccelerationX();
    float y_raw = lis.getAccelerationY();
    float z_raw = lis.getAccelerationZ();

    //This is used to print out on Serial Plotter, check Serial Plotter!
    Serial.print(x_raw);
    Serial.print(",");
    Serial.print(y_raw);
    Serial.print(",");
    Serial.println(z_raw);

    if (accelerator_readings[0].size() == MAX_SIZE) {
      for (uint8_t i = 0; i<3; i++){
        accelerator_readings[i].pop(); //this is used to remove the first read variable
      }
    }
    accelerator_readings[0].push(x_raw); //read variables and store in data
    accelerator_readings[1].push(y_raw);
    accelerator_readings[2].push(z_raw);

    //Settings for the line graph title
    auto header =  text(0, 0)
                .value("Accelerator Readings")
                .align(center)
                .valign(vcenter)
                .width(spr.width())
                .thickness(2);

    header.height(header.font_height(&spr) * 2);
    header.draw(&spr); // Header height is the twice the height of the font

  //Settings for the line graph
    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins
         content
                .height(spr.height() - header.height() * 1.5) //actual height of the line chart
                .width(spr.width() - content.x() * 2) //actual width of the line chart
                .based_on(-2.0) //Starting point of y-axis, must be a float
                .show_circle(false) //drawing a cirle at each point, default is on.
                .value({accelerator_readings[0],accelerator_readings[1], accelerator_readings[2]}) //passing through the data to line graph
                .max_size(MAX_SIZE)          
                .color(TFT_BLUE, TFT_RED, TFT_GREEN)
                .backgroud(TFT_WHITE)
                .draw(&spr);

    spr.pushSprite(0, 0);
    delay(50);
}
```
