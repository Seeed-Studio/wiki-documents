---
description: 4-inch Touch Screen
title: 4-inch Touch Screen
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen
last_update:
  date: 3/3/2024
  author: DuKaiyin
---
# **4英寸触摸屏**

SenseCAP Indicator 配备了一块4英寸触摸屏，可以定制所需的用户界面（UI）。
在本教程中，我们将指导您如何使用 SenseCAP Indicator 的 LvGL（轻量级通用图形库）图形库。


**像素坐标系统**

数字2D图像由像素的行和列组成。图像中的像素由指定其所在列和行的位置来表示。简单来说，一个像素可以由一对整数来标识，提供了列号和行号。

按照惯例，列号从左上角到右边编号，从零开始，但在某些情况下，也可以从其他角开始（通过设置旋转）。

**16位颜色模型**
像素也以颜色形式表示，因此最好了解一些颜色模型。16位颜色模型对于MCU的工作非常有用，所以这是一个不错的起点。颜色模型包括3个颜色组件 - 红色、绿色和蓝色。根据颜色模型，这3个颜色组件将被存储在16位变量中。



| Bit  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **Data** | Red   | Red   | Red   | Red   | Red   | Green   | Green   | Green   | Green   | Green   | Green   | Blue   | Blue   | Blue   | Blue   | Blue   |




**LCD屏幕初始化**

要初始化SenseCAP Indicator上的LCD屏幕：

```c
lcd init:
bsp_board_init()
```

# **技术支持**

   别担心，我们为您提供了支持！请访问我们的[Seeed官方Discord频道](https://discord.com/invite/QqMgVwHT3X)提出您的问题！

如果您有大量订单或定制需求，请联系 iot@seeed.cc
