---
title: 概述
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/
slug: /cn/Wio-Terminal-LCD-Overview
last_update:
  date: 3/10/2024
  author: 金菊
---

# 概述

该存储库介绍了如何在Wio Terminal上安装TFT LCD库。它以最小的工作量为Wio Terminal提供基本的图形功能！

## TFT LCD库的默认安装

默认情况下，TFT LCD库 **已包含在Wio Terminal板库中** 。因此，不需要再次下载TFT LCD库。按照下面的教程开始使用显示器吧！

## 单独安装TFT LCD库

如果您想单独安装TFT LCD库，或者只更新TFT LCD库，请按照以下步骤操作：

1. 访问 [Seeed_Arduino_LCD](https://github.com/Seeed-Studio/Seeed_Arduino_LCD) 存储库，并将整个存储库下载到本地驱动器。

2. 现在，可以将TFT LCD库安装到Arduino IDE中。打开Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 然后选择刚刚下载的 `Seeed_Arduino_LCD` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 安装Adafruit Zero DMA库

TFT LCD库的某些功能需要此库。

1. 导航到 `sketch` -> `Include Library` -> `Manager Library`, 将出现一个库管理器窗口。

2. 搜索 **Adafruit Zero DMA** 并点击安装。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_09-19-28.jpg" /></div>

## 技术支持 & 产品讨论

 如果您遇到任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/) 。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
