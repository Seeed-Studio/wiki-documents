---
description: Wio Terminal 显示照片
title: Wio Terminal 显示照片
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Displaying-Photos
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Wio Terminal 显示照片

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/products.2019-11-26%2017_40_45.gif" /></div>

## 概述

此示例演示如何循环显示SD卡中的图像。

### 功能特性

- 循环播放照片

## 所需的Arduino库

- 安装LCD屏幕库 `Seeed_Arduino_LCD`，请访问 [Wio Terminal 概述](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/) 获取更多信息。

- 安装SD卡库 `Seeed_Arduino_FS`，请访问 [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS) 获取更多信息。

- 安装 `RawImage.h` 库，请访问 [加载图像](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Loading-Image/) 获取更多信息。

## Arduino 说明

1. 下载 [`displayPhotos.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos.zip) 和 `RawImage.h` 文件，通过 `Arduino IDE` 上传到您的Wio Terminal。确保您已安装所有库。

2. 将 `photos` 文件夹拖拽并保存整个文件到SD卡中。

3. 您应该看到图像开始循环播放！

## 代码

```cpp
#include"TFT_eSPI.h"
#include "Seeed_FS.h" //包含SD卡库
#include"RawImage.h"  //包含图像处理库
TFT_eSPI tft;

void setup() {
    //初始化SD卡
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        while (1);
    }
    //初始化LCD屏幕
    tft.begin();
    tft.setRotation(3);

}
//存储照片名称
const char* list[] = {"photos/1.bmp", "photos/2.bmp", "photos/3.bmp", "photos/4.bmp"};

void loop() {
    for (uint8_t cnt = 0; cnt < 4; cnt++) {
        drawImage<uint16_t>(list[cnt],0,0); //逐一显示图像
        delay(1000);
    }
}
```

## Wio Terminal 使用按钮显示照片

### 概述

此示例与上面类似，但使用内置按钮来切换显示的图像！

### 功能特性

- 左按钮：上一张图片

- 右按钮：下一张图片

### 所需的Arduino库

- 安装LCD屏幕库 `Seeed_Arduino_LCD`，请访问 [Wio Terminal 概述](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/) 获取更多信息。

- 安装SD卡库 `Seeed_Arduino_FS`，请访问 [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) 获取更多信息。

- 安装 `RawImage.h` 库，请访问 [加载图像](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Loading-Image/) 获取更多信息。

### Arduino 说明

1. 下载 [`displayPhotos_buttons.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos_buttons.zip) 和 `RawImage.h` 文件，通过 `Arduino IDE` 上传到您的Wio Terminal。确保您已安装所有库。

2. 将 `photos` 文件夹拖拽并保存整个文件到SD卡中。

3. 按左按钮向左滚动，按右按钮向右滚动！

### 代码

- **初始化按钮**

```cpp
void setup() {
    ...
    pinMode(BUTTON_1, INPUT); //左按钮
    pinMode(BUTTON_3, INPUT); //右按钮
    ...
}
```

### 完整代码

```cpp
#include"TFT_eSPI.h"
#include "Seeed_FS.h" //包含SD卡库
#include"RawImage.h"  //包含图像处理库
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
  //初始化SD卡
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