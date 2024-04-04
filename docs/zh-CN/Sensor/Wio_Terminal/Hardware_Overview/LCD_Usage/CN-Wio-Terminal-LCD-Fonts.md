---
title: 不同字体
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Fonts/
slug: /cn/Wio-Terminal-LCD-Fonts
last_update:
  date: 3/10/2024
  author: 金菊
---

# 使用不同的字体

该仓库描述了如何在库中使用包含的不同自由字体（GNU FreeFonts）。您可以按照此指南选择您喜欢的字体在Wio Terminal上显示！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2309.jpeg.jpg" /></div>

## 可用字体

该库中有三种主要字体可供使用，包括 `Serif` （衬线字体）, `Sans` （无衬线字体） 和 `Mono` （等宽字体）。 每种字体都有几种样式 (**粗体**, *斜体*, 倾斜) 和字体大小，包括9pt、12pt、18pt和24pt。

## 在Wio Terminal中使用字体

为了方便地使用这些字体，强烈建议从 [Seeed_Arduino_LCD repository](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/#installing-the-tft-lcd-library-separately) 中复制 `Free_Fonts.h` 文件。我们假设您已经下载了该代码库，路径为 `~/Arduino/libraries/Seeed_LCD_master/examples/320 x 240/All_Free_Fonts_Demo`, 您可以将此头文件附加到您的示例位置。这将使引用字体变得更加容易。

为了节省大量的输入，可以通过三种方式在示例中引用每种字体，分别是：

1.在字体文件名前加上 `&` ，例如: `&FreeSansBoldOblique24pt7b`。

#### 方法1示例

```cpp
tft.setFreeFont(&FreeSansBoldOblique24pt7b);
```

2.FF#，其中#是通过查看 `Free_Fonts.h` 列表确定的数字。

#### 方法2示例

```cpp
tft.setFreeFont(FF32);
```

3.文件名的缩写。请查看下面的列表以查看使用的缩写。

#### 方法3示例

```cpp
tft.setFreeFont(FSSBO24)
```

其中字母的含义如下：

- F = Free font 自由字体
- M = Mono 等宽字体
- SS = Sans Serif  无衬线字体  （双S用于区分衬线字体）
- S = Serif 衬线字体
- B = Bold 粗体
- O = Oblique  倾斜 (（字母O，不是零)
- I = Italic 斜体
- No =  字号, 可以是9、12、18或24

## 使用不同字体的示例代码

```cpp
#include"TFT_eSPI.h"
#include"Free_Fonts.h" //include the header file
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK); //Black background
  
  tft.setFreeFont(&FreeSansBoldOblique12pt7b); //select Free, Sans, Bold, Oblique, 12pt.
  tft.drawString("Sans Serif 12pt",70,80);//prints string at (70,80)

  tft.setFreeFont(FF10); //select Free, Mono, Oblique, 12pt.
  tft.drawString("Mono 12pt",70,110);//prints string at (70,110)

  tft.setFreeFont(FS12); //select Free, Serif, 12pt.
  tft.drawString("Serif 12pt",70,140);//prints string at (70,140)
  
}
void loop() {}
```

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们将为您提供不同的支持，以确保您对我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
