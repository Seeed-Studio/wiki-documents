---
description:  Wio Terminal Displaying Photos
title:  Wio Terminal 显示图片
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Displaying-Photos
last_update:
  date: 3/08/2024
  author: jessie
---

# Wio Terminal显示照片

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/products.2019-11-26%2017_40_45.gif" /></div>

## 概述

此示例演示了如何循环显示来自SD卡的图像。 

### 特点

- 循环显示照片

## 需要的Arduino库

- 安装LCD屏幕库 `Seeed_Arduino_LCD`, 请访问 [Wio Terminal Overview](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) 获取更多信息。

- 安装SD卡库 `Seeed_Arduino_FS`, 请访问 [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS) 获取更多信息。

- 安装 `RawImage.h` 库, 请访问 [Loading Images](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/) 获取更多信息。

## Arduino 指令

1. 下载 [`displayPhotos.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos.zip) 和 `RawImage.h` 文件，并通过 `Arduino IDE` 上传到Wio Terminal。确保您已安装所有库。

2. 将 `photos` 文件夹拖放到SD卡中，并保存整个文件夹。

3. 您应该看到图像开始循环显示！

## 代码

```cpp
#include"TFT_eSPI.h"
#include "Seeed_FS.h" //Including SD card library
#include"RawImage.h"  //Including image processing library
TFT_eSPI tft;

void setup() {
    //Initialise SD card
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        while (1);
    }
    //Initialise LCD screen
    tft.begin();
    tft.setRotation(3);

}
//storing the names of photos 
const char* list[] = {"photos/1.bmp", "photos/2.bmp", "photos/3.bmp", "photos/4.bmp"};

void loop() {
    for (uint8_t cnt = 0; cnt < 4; cnt++) {
        drawImage<uint16_t>(list[cnt],0,0); //dispalying images one by one
        delay(1000);
    }
}
```

## 使用按钮在Wio Terminal显示照片

### 概述

此示例与上述示例类似，但是使用内置按钮来更改显示的图像！

### 特点

- 左按钮：上一张图像

- 右按钮：下一张图像

### 需要的Arduino库

- 安装LCD屏幕库 `Seeed_Arduino_LCD`, 请访问 [Wio Terminal 概述](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) 获取更多信息。

- 安装SD卡库 `Seeed_Arduino_FS`, 请访问 [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) 获取更多信息。

- 安装 `RawImage.h` 库, 请访问 [Loading Images](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/) 获取更多信息。

### Arduino 指令

1. 下载 [`displayPhotos_buttons.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos_buttons.zip) 和 `RawImage.h` 文件，并通过 `Adruino IDE`上传到Wio Terminal。确保您已安装所有库。

2. 将 `photos` 文件夹拖放到SD卡中，并保存整个文件夹。

3. 按下左按钮向左滚动，按下右按钮向右滚动！

### 代码

- **初始化按钮**

```cpp
void setup() {
    ...
    pinMode(BUTTON_1, INPUT); //left button
    pinMode(BUTTON_3, INPUT); //right button
    ...
}
```

### 完整代码

```cpp
#include"TFT_eSPI.h"
#include "Seeed_FS.h" //Including SD card library
#include"RawImage.h"  //Including image processing library
TFT_eSPI tft;

bool left_flag = false;
void button_handler_left() {
  left_flag = true;
}

bool right_flag = false;
void button_handler_right() {
  right_flag = true;
}

void setup() {
  //Initialise SD card
  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI,16000000)) {
    while (1);
  }
  tft.begin();
  tft.setRotation(3);

  pinMode(BUTTON_1, INPUT);
  pinMode(BUTTON_3, INPUT);
  attachInterrupt(digitalPinToInterrupt(BUTTON_1), button_handler_left, FALLING);
  attachInterrupt(digitalPinToInterrupt(BUTTON_3), button_handler_right, FALLING);

}

const char* list[] = {"1.bmp", "2.bmp", "3.bmp", "4.bmp"};
int8_t cnt = 0;

void loop() {
  if (left_flag) {
    cnt++;
    left_flag = false;
    if (cnt == 4) {
      cnt = 0;
    }
  }
  if (right_flag) {
    cnt--;
    right_flag = false;
    if (cnt < 0) {
      cnt = 3;
    }
  }
  drawImage<uint16_t>(list[cnt], 0, 0);
}
```
