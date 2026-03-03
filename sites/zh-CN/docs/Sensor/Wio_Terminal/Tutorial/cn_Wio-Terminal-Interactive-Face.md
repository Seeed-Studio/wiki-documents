---
description: Wio Terminal 交互式表情演示
title: Wio Terminal 交互式表情演示
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Interactive-Face
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Wio Terminal 交互式表情符号

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0274.2019-11-26%2014_50_05.gif" /></div>

## 概述

此示例演示如何通过SD卡将多个图像（眼睛）显示到LCD屏幕上（BMP格式），并使用内置按钮和陀螺仪与用户进行交互。

### 功能特性

- 左按钮：上一张图像（眼睛）

- 中间按钮：动画效果

- 右按钮：下一张图像（眼睛）

- 陀螺仪：眼睛根据板子方向移动

## 所需的Arduino库

- 安装LCD屏幕库 `Seeed_Arduino_LCD`，请访问 [Wio Terminal LCD](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/) 获取更多信息。

- 安装SD卡库 `Seeed_Arduino_FS`，请访问 [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) 获取更多信息。

- 安装板载加速度计库 `Seeed_Arduino_LIS3DHTR`，请访问 [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/beta) 获取更多信息。

- 安装 `RawImage.h` 库，请访问 [加载图像](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Loading-Image/) 获取更多信息。

## Arduino 说明

1. 下载 [`Emoji_face.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Emoji_face.zip) 和 `RawImage.h` 文件，通过 `Arduino IDE` 上传到您的Wio Terminal。确保您已安装所有库。

2. 将 `face` 文件夹（包含所有图像）拖拽并保存到SD卡中。

3. 开始移动您的Wio Terminal并进行交互！

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
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //加速度计输出频率
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //量程选择
  ...
}

void loop() {
  ...
  float x_raw = lis.getAccelerationX(); //读取加速度计原始x轴值
  float y_raw = lis.getAccelerationY(); //读取加速度计原始y轴值
  ...
}
```

- **初始化内置按钮**

```Cpp
void setup() {
  ...
  pinMode(BUTTON_1, INPUT); //左按钮
  pinMode(BUTTON_2, INPUT); //中间按钮
  pinMode(BUTTON_3, INPUT); //右按钮
  ...
}
```

- **初始化图像和绘制图像**

在此示例中，图像不是320x240全尺寸，因此在绘制时需要指定图像开始的位置。图像首先加载到缓冲区中，以避免摇动Wio Terminal时出现图像延迟。

有关更多信息，请访问 [加载图像](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Loading-Image/)。

```Cpp
void loop() {
  ...
  Raw8 * eyes = newImage<uint8_t>(eye[eye_count]); //初始化8位图像
  writeToBuffer(x_axis, y_axis, eyes); //首先写入缓冲区，请查看完整代码以了解此函数
  ...
}
```