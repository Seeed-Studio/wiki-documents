---
description:  Wio Terminal Retro Gaming Firmware
title:  Wio Terminal 复古游戏固件
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Firmware
last_update:
  date: 3/08/2024
  author: jessie
---

# Wio Terminal复古游戏固件

<div align="center"><img src="https://static-cdn.seeedstudio.site/media/wysiwyg/wtretro.gif" /></div>

在这里，我们发布了Wio Terminal的初始出厂固件，这是一个您可以在Wio Terminal上玩的简单游戏！

## 下载完整源代码

你可以从 [**此存储库**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/jumper) 下载Wio Terminal初始固件的完整源代码。

- 下载整个存储库

- 位于 `examples/jumper` 位置。

## 依赖库

### 安装Adafruit ZeroTimer库

1. 访问 [Adafruit_ZeroTimer](https://github.com/adafruit/Adafruit_ZeroTimer) 存储库，并将整个存储库下载到本地驱动器。

2. 现在，可以将Adafruit ZeroTimer库安装到Arduino IDE中。打开Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 然后选择刚刚下载的 `Adafruit_ZeroTimer` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

:::注
还依赖于 **1. Seeed_Arduino_LCD 2. Seeed_Arduino_FS 3. Seeed_Arduino_SFUD 4. Adafruit_ZeroDMA**, 但这些库已包含在Wio Terminal Board库中。如果遇到问题，请更新到最新的板库。
:::

## Arduino指令

有 **2 种方式** 可以加载游戏元素的图像：

1. **使用 Flash:**

      - 这是默认方法，将图像加载到Flash中。

      - 上传代码。

2. **使用SD卡加载图像:**

      - 将 `rgb332` 文件（包含所有图像）复制并粘贴到SD卡中。

      - 如果从SD卡加载图像，您需要取消注释宏 `LOAD_IMAGE_SD`。

      - 上传代码。

现在，您可以再次使用Wio Terminal来享受复古游戏的乐趣了！

## 技术支持 & 产品讨论


感谢您选择我们的产品！我们将在各种支持渠道上为您提供不同的支持，以确保您对我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
