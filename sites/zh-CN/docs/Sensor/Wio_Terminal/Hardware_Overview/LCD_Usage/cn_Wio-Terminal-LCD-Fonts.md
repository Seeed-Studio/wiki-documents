---
title: 字体
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Fonts/
slug: /cn/Wio-Terminal-LCD-Fonts
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 使用不同字体

本文档描述了如何使用库中包含的不同免费字体（GNU FreeFonts）。您可以按照本指南选择您喜欢的字体在 Wio Terminal 上显示！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2309.jpeg.jpg" /></div>

## 可用字体

此库中有三种主要字体可以使用，包括 `Serif`、`Sans` 和 `Mono`。每种字体都有几种样式（**粗体**、*斜体*、倾斜体）和字体大小，包括 9pt、12pt、18pt 和 24pt。

## 在 Wio Terminal 中使用字体

为了轻松使用这些字体，强烈建议从 [Seeed_Arduino_LCD 仓库](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/#installing-the-tft-lcd-library-separately) 复制 `Free_Fonts.h` 文件。我们假设您已经下载了仓库，路径为 `~/Arduino/libraries/Seeed_LCD_master/examples/320 x 240/All_Free_Fonts_Demo`，您可以将此头文件附加到您的草图位置。这将使引用字体变得更加容易。

为了节省大量输入，每种字体可以在草图中以三种方式引用：

1.字体文件名前加 `&`，例如：`&FreeSansBoldOblique24pt7b`。

#### 方法 1 示例

```cpp
tft.setFreeFont(&FreeSansBoldOblique24pt7b);
```

2.FF# 其中 # 是通过查看 `Free_Fonts.h` 中的列表确定的数字

#### 方法 2 示例

```cpp
tft.setFreeFont(FF32);
```

3.文件名的缩写。查看下面的列表以了解使用的缩写。

#### 方法 3 示例

```cpp
tft.setFreeFont(FSSBO24)
```

其中字母的含义：

- F = 免费字体
- M = 等宽字体
- SS = 无衬线字体（双 S 用于区别于衬线字体）
- S = 衬线字体
- B = 粗体
- O = 倾斜体（字母 O 不是零）
- I = 斜体
- No = 磅值大小，可以是 9、12、18 或 24

## 使用不同字体的示例代码

```cpp
#include"TFT_eSPI.h"
#include"Free_Fonts.h" //包含头文件
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK); //黑色背景
  
  tft.setFreeFont(&FreeSansBoldOblique12pt7b); //选择免费、无衬线、粗体、倾斜、12pt。
  tft.drawString("Sans Serif 12pt",70,80);//在 (70,80) 处打印字符串

  tft.setFreeFont(FF10); //选择免费、等宽、倾斜、12pt。
  tft.drawString("Mono 12pt",70,110);//在 (70,110) 处打印字符串

  tft.setFreeFont(FS12); //选择免费、衬线、12pt。
  tft.drawString("Serif 12pt",70,140);//在 (70,140) 处打印字符串
  
}
void loop() {}
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