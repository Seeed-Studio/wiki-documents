---
title:  抗锯齿字体
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Anti-aliased-Fonts./
slug: /cn/Wio-Terminal-LCD-Anti-aliased-Fonts
last_update:
  date: 3/07/2024
  author: 金菊
---

# 显示抗锯齿字体

该仓库演示了如何在Wio Terminal中使用抗锯齿字体 (**即显示日文字、希腊文字和其他UCS-2字符**)! 此外，还可以使用平滑字体在Wio Terminal上显示普通英文字母，并选择您喜欢的计算机字体。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117131650.gif" /></div>

## 库的安装

### 安装 Wio Terminal 的SD卡库

- 访问 [File System Overview](https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/)

### 安装 Wio Terminal 的TFT LCD库

- 访问 [TFT LCD Overview](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/)

## 生成vlw字体文件

下面演示如何生成可用于Wio Terminal平滑字体的vlw字体文件。

### 步骤 1

下载 [**Processing**](https://processing.org/) 软件并根据您的操作系统进行安装。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117095509.jpg" /></div>

### 步骤 2

打开 **Processing**, 导航到 `Tools` -> `Create Font...`

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100029.jpg" /></div>

### 步骤 3

将会出现一个 **Create Font** 窗口。您可以选择计算机上可用的字体。更改字体大小，然后单击 `Characters...` ，您还可以更改vlw文件的文件名。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100808.jpg" /></div>

### 步骤 4

将会出现一个 **Character Selector** 窗口，您可以选择特定的语言Unicode字符块(例如，这里选择了基本拉丁字符). ***对于亚洲字符，建议使用CJK兼容性或CJK类别的Unicode字符块。*** 点击 `OK` 保存字体设置。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117104728.jpg" /></div>

### 步骤 5

导航到 `File` -> `Save` 并将示例文件保存到计算机的本地驱动器中。现在，我们已经生成了vlw字体文件！

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117105224.jpg" /></div>

## 存储到SD卡

生成了vlw字体文件后，您可以在之前保存的示例文件的**data**文件夹中找到vlw文件。

现在，将vlw字体文件复制到SD卡中，并将SD卡放回Wio Terminal中。

## 配置LCD库

默认情况下，LCD库的平滑字体选项是 **turned off** 以节省Wio Terminal上的资源。 **因此，需要配置以在Wio Terminal中启用平滑字体。**

导航到Arduino库文件夹(**libraries**) -> **Seeed_Arduino_LCD** ，并使用编辑器打 **`User_Setup.h`** 。搜索 **`#define SMOOTH_FONT`** 并取消注释该行，如下所示：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/smoothFont.png" /></div>

现在您已经在Wio Terminal中启用了平滑字体，可以显示任何您喜欢的字体或字符！

## 显示

- **从SD卡加载字体到Wio Terminal：**

```cpp
void loadFont(String fontName);
```

其中 `fontName` 是vlw字体文件的名称。

- **在屏幕上显示vlw中的所有字符:**

```cpp
void showFont(uint32_t td);
```

其中 `td` 是显示所有字符时屏幕之间的延迟时间。

- **卸载字体:**

```cpp
void unloadFont();
```

要在屏幕上显示字符，您可以使用类似于tft库的函数，如 **`tft.println()`**. 此外，您还可以使用其他函数，如 **`tft.setCursor()`** 和 **`tft.setTextColor`** 来更改字符显示的位置和颜色。

**注**: 请检查LCD库中的 `User_Setup.h` ，确保 `#define SMOOTH_FONT` 已取消注释。

## 完整代码

请在 [此处](https://files.seeedstudio.com/wiki/Wio-Terminal/res/JanpaneseFonts.zip) 下载完整的代码和示例vlw文件。

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
    tft.fillScreen(TFT_BLACK); //Black background

    while(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)){
        Serial.println("SD card error!\n");
        while(1);
  }
  delay(1000);

  tft.loadFont("Apple-Chancery-24");
  // Show all characters on screen with 2 second (2000ms) delay between screens
  tft.showFont(2000); // Note: This function moves the cursor position!

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

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
