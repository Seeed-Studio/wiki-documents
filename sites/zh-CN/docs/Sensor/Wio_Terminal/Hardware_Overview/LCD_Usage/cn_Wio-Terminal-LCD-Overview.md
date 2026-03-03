---
title: 概述
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/
slug: /cn/Wio-Terminal-LCD-Overview
last_update:
  date: 01/11/2022
  author: gunengyu
---

# 概述

本仓库介绍如何安装在 Wio Terminal 上使用的 TFT LCD 库。它以最小的努力为 Wio Terminal 提供基本的图形功能！

## TFT LCD 库默认安装

默认情况下，TFT LCD 库**包含在 Wio Terminal 开发板库中**。因此，无需再次下载 TFT LCD 库。按照接下来的教程开始使用显示屏！

## 单独安装 TFT LCD 库

如果您想单独安装 TFT LCD 库，或仅更新 TFT LCD 库，请按照以下步骤操作：

1. 访问 [Seeed_Arduino_LCD](https://github.com/Seeed-Studio/Seeed_Arduino_LCD) 仓库并将整个仓库下载到您的本地驱动器。

2. 现在，TFT LCD 库可以安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `Seeed_Arduino_LCD` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 安装 Adafruit Zero DMA 库

TFT LCD 库的某些功能需要此库。

1. 导航到 `sketch` -> `Include Library` -> `Manager Library`，将出现库管理器窗口。

2. 搜索 **Adafruit Zero DMA** 并点击安装。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_09-19-28.jpg" /></div>

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>