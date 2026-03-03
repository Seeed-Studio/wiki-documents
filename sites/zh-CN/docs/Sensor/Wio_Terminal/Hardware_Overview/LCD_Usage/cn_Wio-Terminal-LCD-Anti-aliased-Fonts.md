---
title:  平滑字体
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Anti-aliased-Fonts./
slug: /cn/Wio-Terminal-LCD-Anti-aliased-Fonts
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 显示抗锯齿字体

本仓库演示了如何在 Wio Terminal 中使用抗锯齿字体（**即显示日文字符、希腊字符和其他 UCS-2 字形**）！此外，平滑字体还可以用于显示普通英文字符，使用您计算机中喜欢的字体。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117131650.gif" /></div>

## 库安装

### 为 Wio Terminal 安装 SD 卡库

- 访问 [文件系统概述](https://wiki.seeedstudio.com/cn/Wio-Terminal-FS-Overview/)

### 为 Wio Terminal 安装 TFT LCD 库

- 访问 [TFT LCD 概述](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/)

## 生成 vlw 字体文件

这里演示如何生成可在 Wio Terminal 中用于平滑字体的 vlw 字体文件。

### 步骤 1

下载 [**Processing**](https://processing.org/) 软件，根据您的操作系统进行下载。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117095509.jpg" /></div>

### 步骤 2

打开 **Processing**，导航到 `Tools` -> `Create Font...`

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100029.jpg" /></div>

### 步骤 3

将出现 **Create Font** 窗口。您可以从计算机中选择可用的字体。更改字体大小，然后点击 `Characters...`。您还可以更改 vlw 文件的文件名。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100808.jpg" /></div>

### 步骤 4

将出现 **Character Selector** 窗口，您可以选择特定语言的 Unicode 字符块（在本例中为基本拉丁文）。***对于亚洲字符，建议使用 CJK 兼容性或 CJK 类别的 unicode 块。*** 点击 `OK` 保存字体设置。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117104728.jpg" /></div>

### 步骤 5

导航到 `File` -> `Save` 并将草图文件保存到计算机的本地驱动器中。现在，我们已经生成了 vlw 字体文件！

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117105224.jpg" /></div>

## 存储到 SD 卡

生成 vlw 字体文件后，您可以在上一步保存的草图文件内的 **`data`** 文件夹中找到 vlw 文件。

现在，将 vlw 字体文件复制到 SD 卡中，并将 SD 卡重新插入 Wio Terminal。

## 配置 LCD 库

默认情况下，LCD 库的平滑字体选项是 **关闭的**，以节省 Wio Terminal 上的资源。**因此需要配置以在 Wio Terminal 中启用平滑字体。**

导航到 Arduino 库文件夹（**libraries**）-> **Seeed_Arduino_LCD** 并用编辑器打开 **`User_Setup.h`**。搜索 **`#define SMOOTH_FONT`** 并取消注释该行，如下所示：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/smoothFont.png" /></div>

现在您已经在 Wio Terminal 中启用了平滑字体，您可以显示任何您喜欢的字体或字符！

## 显示

- **从 SD 卡加载字体到 Wio Terminal：**

```cpp
void loadFont(String fontName);
```

其中 `fontName` 是 vlw 字体文件的名称。

- **在屏幕上显示 vlw 中的所有字符：**

```cpp
void showFont(uint32_t td);
```

其中 `td` 是显示所有字符时屏幕之间的延迟时间。

- **卸载字体：**

```cpp
void unloadFont();
```

要在屏幕上显示字符，您可以像在 tft 库中一样使用函数，使用 **`tft.println()`**。此外，您可以使用其他函数，如 **`tft.setCursor()`** 和 **`tft.setTextColor`** 来更改字符显示的位置和颜色。

**注意**：请检查 LCD 库中的 `User_Setup.h`，确保 `#define SMOOTH_FONT` 未被注释。

## 完整代码

请在[这里](https://files.seeedstudio.com/wiki/Wio-Terminal/res/JanpaneseFonts.zip)下载完整代码和示例 vlw 文件。

```cpp
#include<SPI.h>
#include "Seeed_FS.h"
#include "SD/Seeed_SD.h"
#include"TFT_eSPI.h"

TFT_eSPI tft;

void setup() {
    tft.begin();
    Serial.begin(115200);
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK); //黑色背景

    while(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)){
        Serial.println("SD card error!\n");
        while(1);
  }
  delay(1000);

  tft.loadFont("Apple-Chancery-24");
  // 在屏幕上显示所有字符，屏幕之间延迟 2 秒（2000ms）
  tft.showFont(2000); // 注意：此函数会移动光标位置！

  tft.setTextColor(TFT_RED,TFT_BLACK);
  tft.setCursor(0,0);

  tft.println("Konnichiwa");
  tft.println("Sayonara");
  tft.println();
  tft.unloadFont();

  tft.loadFont("Latin-Hiragana-24");
  tft.setTextColor(TFT_GREEN,TFT_BLACK);
  tft.println("こんにちは");
  tft.println("さようなら");
  tft.unloadFont();
  
}
void loop(){}
```

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