---
description: 4英寸触摸屏
title: 4英寸触摸屏
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen
last_update:
  date: 5/23/2023
  author: Thomas
---
# **4英寸触摸屏**

SenseCAP Indicator 配备了一块4英寸触摸屏，可以自定义您需要的UI界面。
在本教程中，我们将指导您如何为 SenseCAP Indicator 使用LvGL（轻量级多功能图形库）图形库。

**像素坐标系统**

数字2D图像由像素的行和列组成。图像中的像素通过指定像素所在的列和行来确定。简单来说，像素可以通过一对整数来标识，这对整数提供列号和行号。

按照惯例，列从左上角向右编号，从零开始，但在某些情况下，也可以从其他角开始（通过设置旋转）。

**16位颜色模型**

像素也以颜色形式表达，因此最好也涵盖一些颜色模型。16位颜色模型适合MCU使用，因此这是一个很好的开始。颜色模型由3个颜色分量组成 - 红色、绿色和蓝色。根据颜色模型，这3个颜色分量将存储到16位变量中。

| 位  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **数据** | 红色   | 红色   | 红色   | 红色   | 红色   | 绿色   | 绿色   | 绿色   | 绿色   | 绿色   | 绿色   | 蓝色   | 蓝色   | 蓝色   | 蓝色   | 蓝色   |

**LCD屏幕初始化**

要在 SenseCAP Indicator 上初始化LCD屏幕：

```c
lcd init:
bsp_board_init()
```

# **技术支持**

别担心，我们为您提供支持！请访问我们的 [Seeed官方Discord频道](https://discord.com/invite/QqMgVwHT3X) 来提出您的问题！

如果您有大批量订单或定制需求，请联系 iot@seeed.cc