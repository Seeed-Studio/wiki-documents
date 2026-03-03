---
description: Seeed Studio 圆形显示屏适配 XIAO 的常见问题解答
title: 如果我想将 Seeed Studio XIAO ESP32S3 Sense 连接到这个扩展屏幕，会不会与两个 TF 卡槽发生冲突？
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/two_TF_card
last_update:
  date: 2023/6/30
  author: cheng.tang
---
问：这会不会产生冲突？

答：这不会产生冲突。不同的 SD 卡槽是通过芯片选择（chip select）来控制的。如果您想使用 Sense 上的 microSD 卡槽，芯片选择引脚应为 **21**；如果您想使用圆形显示屏上的 microSD 卡槽，芯片选择引脚应为 **D2**。

我们在 [S3 Sense 摄像头教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera) 中提供了同时使用硬件和 microSD 卡的示例。