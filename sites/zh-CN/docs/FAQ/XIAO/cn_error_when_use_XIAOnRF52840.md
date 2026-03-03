---
description: Seeed Studio 圆形显示屏适用于 XIAO-常见问题解答
title: 为什么在使用 XIAO nRF52840 (Sense) 时会出现错误？
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/error_when_use_XIAOnRF52840
last_update:
  date: 6/30/2023
  author: cheng.tang
---
在使用本教程内容时，XIAO nRF52840 可能会出现两种不同类型的问题。

1. nRF52840 与 TFT 库之间的兼容性问题。

   如果您正在使用 TFT 库，编译和上传过程没有任何错误，非常顺利。但当您显示图像时，发现没有任何图像显示。这可能是因为 nRF52840 与 TFT 库之间存在兼容性问题。这意味着您只能更换 XIAO 或使用 Arduino GFX 库来完成图像显示。

2. 选择错误的开发板类型导致的编译错误。

   如果您在编译过程中遇到问题，错误信息通常与 SPI 错误有关，例如 `'SPI_X' was not declared in this scope`（`SPI_X` 未在此范围内声明）。这表明您选择了错误的开发板类型。要使用本教程的所有内容，您需要使用 **非-mbed** 版本的 XIAO nRF52840。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>