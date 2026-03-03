---
description: Wio Terminal 复古游戏固件
title: Wio Terminal 复古游戏固件
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Firmware
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Wio Terminal 复古游戏固件

<div align="center"><img src="https://static-cdn.seeedstudio.site/media/wysiwyg/wtretro.gif" /></div>

这里我们发布了 Wio Terminal 的初始出厂固件，这是一个您可以在 Wio Terminal 上玩的简单游戏！

## 下载完整源代码

您可以从[**这个仓库**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/jumper)下载 Wio Terminal 初始固件的完整源代码。

- 下载整个仓库

- 在 `examples/jumper` 位置

## 依赖库

### 安装 Adafruit ZeroTimer 库

1. 访问 [Adafruit_ZeroTimer](https://github.com/adafruit/Adafruit_ZeroTimer) 仓库并将整个仓库下载到您的本地驱动器。

2. 现在，Adafruit ZeroTimer 库可以安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `Adafruit_ZeroTimer` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

:::note
还依赖于 **1. Seeed_Arduino_LCD 2. Seeed_Arduino_FS 3. Seeed_Arduino_SFUD 4. Adafruit_ZeroDMA**，但这些库包含在 Wio Terminal 开发板库中。如果遇到问题，请更新到最新的开发板库。
:::

## Arduino 说明

有 **2 种方式** 加载游戏元素的图像：

1. **使用 Flash：**

      - 这是默认方法，将图像加载到 flash 中。

      - 上传代码。

2. **使用 SD 卡加载图像：**

      - 将 `rgb332` 文件（包含所有图像）复制粘贴到 SD 卡中。

      - 如果从 SD 卡加载图像，您需要取消注释宏 `LOAD_IMAGE_SD`。

      - 上传代码。

现在，您可以再次享受使用 Wio Terminal 玩复古游戏的乐趣！

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