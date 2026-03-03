---
title: 如何使用 LvGL 图形库
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Terminal-LVGL/
slug: /cn/Wio-Terminal-LVGL
last_update:
  date: 01/11/2022
  author: gunengyu
---

# 如何在 Wio Terminal 上使用 LvGL 图形库

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/banner.gif" /></div>

在本教程中，我们将教您如何在 Wio Terminal 上使用 [**LvGL**](https://lvgl.io/)（轻量级多功能图形库）图形库。这是从原始 [lv_arduino](https://github.com/lvgl/lv_arduino) 移植到 Wio Terminal 的版本。

[**LvGL**](https://lvgl.io/) 是一个开源图形库，提供创建嵌入式 GUI 所需的一切，具有易于使用的图形元素、美观的视觉效果和低内存占用。

## 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## 开始使用

- 在进行以下操作之前，请先按照 [**Wio Terminal 入门指南**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/) 进行操作。

### 安装 Seeed_Arduino_LvGL

1. 访问 [Seeed_Arduino_LvGL](https://github.com/Seeed-Studio/Seeed_Arduino_LvGL) 仓库，并将整个仓库下载到您的本地驱动器。

2. 现在，可以将 FS 库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `Seeed_Arduino_LvGL` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 示例

#### 1. 基准测试

这是 Wio Terminal 上 LvGL 图形库的基准测试演示，只需使用 Arduino IDE 将 `benchmark.ino` 上传到设备：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/benchmark.gif" /></div>

:::note
    当前移植版本在基准测试演示中的 FPS 显示不正确，请关注更多更新。
:::

#### 2. 压力测试

这是 Wio Terminal 上 LvGL 图形库的基准测试演示，只需使用 Arduino IDE 将 `lv_stresss.ino` 上传到设备：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/stress.gif" /></div>

如需更多用法，您也可以使用 [**LvGL 官方文档**](https://docs.lvgl.io/latest/en/html/index.html) 和 [Arduino 示例](https://github.com/lvgl/lvgl/tree/master/examples/arduino) 作为更多参考。

## 资源

- [LvGL 库官方文档](https://docs.lvgl.io/latest/en/html/index.html)
- [LvGL Github](https://github.com/lvgl/lvgl)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>