---
title: 如何使用 LvGL 图形库
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LVGL/
slug: /cn/Wio-Terminal-LVGL
last_update:
  date: 3/10/2024
  author: 金菊
---

# 如何在 Wio Terminal 上使用 LvGL 图形库

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/banner.gif" /></div>

在本教程中，我们将教您如何在 Wio Terminal 上使用 [**LvGL**](https://lvgl.io/) (Light and Versatile
Graphics Library)  图形库。这是将原始的  [lv_arduino](https://github.com/lvgl/lv_arduino)  移植到 Wio Terminal 上的版本。

[**LvGL**](https://lvgl.io/) 是一个开源图形库，提供了一切您需要创建嵌入式 GUI 的工具，包括易于使用的图形元素、漂亮的视觉效果和低内存占用。

## 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## 入门指南

- 在进行以下操作之前，请先参考  [**Wio Terminal 入门指南**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/) 。

### 安装 Seeed_Arduino_LvGL

1. 访问 [Seeed_Arduino_LvGL](https://github.com/Seeed-Studio/Seeed_Arduino_LvGL) 仓库，并将整个仓库下载到本地驱动器。

2. 现在，可以将 FS 库安装到 Arduino IDE 上。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 选择刚刚下载的 `Seeed_Arduino_LvGL` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 示例

#### 1. Bench Mark

这是在 Wio Terminal 上使用 LvGL 图形库的基准测试示例，只需使用 Arduino IDE 将 `benchmark.ino`  上传到设备上：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/benchmark.gif" /></div>

:::注
    目前基准测试示例中的帧率显示有问题，请等待更多更新。
:::

#### 2. 压力测试

这是在 Wio Terminal 上使用 LvGL 图形库的压力测试示例，只需使用 Arduino IDE 将 `lv_stresss.ino` 上传到设备上。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/stress.gif" /></div>

如需了解更多用法，您还可以使用 [**LvGL官方文档**](https://docs.lvgl.io/latest/en/html/index.html) 和 [Arduino 示例](https://github.com/lvgl/lvgl/tree/master/examples/arduino) 进行参考。

## 参考资料

- [LvGL 图形库的官方文档](https://docs.lvgl.io/latest/en/html/index.html)
- [LvGL Github](https://github.com/lvgl/lvgl)

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您对我们的产品拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
