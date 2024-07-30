---
description: Wio Terminal Interactive Faces Demo
title: Wio Terminal交互式表情符号
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Interactive-Face
last_update:
  date: 3/07/2024
  author: jessie
---

# Wio Terminal交互式表情符号

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0274.2019-11-26%2014_50_05.gif" /></div>

## 概述

此示例演示如何通过SD卡（BMP格式）在LCD屏幕上显示多个图像（眼睛），并利用内置按钮和陀螺仪与用户进行交互

### 特点

- 左按钮：上一个图像（眼睛）

- 中间按钮：动画

- 右按钮：下一个图像（眼睛）

- 陀螺仪：根据板的方向移动眼睛

## 需要的Arduino库

- 安装LCD屏幕库 `Seeed_Arduino_LCD`, 请访问 [Wio Terminal LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) 获取更多信息。

- 安装SD卡库 `Seeed_Arduino_FS`, 请访问 [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) 获取更多信息。
- 安装板载加速度计库 `Seeed_Arduino_LIS3DHTR`, 请访问 [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/beta) 获取更多信息

- 安装 `RawImage.h` 库, 请访问 [Loading Images](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/) 获取更多信息。

## Arduino 指令

1. 下载 [`Emoji_face.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Emoji_face.zip) 和`RawImage.h` 文件，并通过 `Adruino IDE` 将其上传到Wio Terminal。确保已安装所有的库。

2. 将 `face` 文件（包括所有的图像）拖放到SD卡中保存。

3. 开始移动你的Wio Terminal并进行交互！

## 代码

- **初始化LCD屏幕**

```Cpp
TFT_eSPI tft;

void setup() {
  ...
    tft.begin();
    tft.setRotation(3);
  ...
}
```

- **初始化SD卡**

```Cpp
void setup() {
  ...
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
      while (1);
  }
  ...
}
```

- **初始化板载加速度计**

```Cpp
LIS3DHTR<TwoWire>  lis;

void setup () {
  ...
  lis.begin(Wire1);
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Output rate of Accelerator
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale selection
  ...
}

void loop() {
  ...
  float x_raw = lis.getAccelerationX(); //Read the raw x-axis values of acc
  float y_raw = lis.getAccelerationY(); //Read the raw y-axis values of acc
  ...
}
```

- **初始化内置按钮n**

```Cpp
void setup() {
  ...
  pinMode(BUTTON_1, INPUT); //left button
  pinMode(BUTTON_2, INPUT); //middle button
  pinMode(BUTTON_3, INPUT); //right button
  ...
}
```

- **初始化图像和绘制图像**

在这个示例中，图像不是320x240的全尺寸，因此在绘制时需要指定图像的起始位置。图像首先加载到缓冲区中，以避免在摇动Wio Terminal时出现图像延迟。

更多信息，请访问 [Loading Images](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/).

```Cpp
void loop() {
  ...
  Raw8 * eyes = newImage<uint8_t>(eye[eye_count]); //initilising 8-bit images
  writeToBuffer(x_axis, y_axis, eyes); //writing to buffer first, see full code to check this function
  ...
}
```
