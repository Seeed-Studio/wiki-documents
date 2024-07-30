---
description: Grove - 0.66英寸OLED显示屏（SSD1306）
title: Grove - 0.66英寸OLED显示屏（SSD1306）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-OLED-Display-0.66-SSD1306_v1.0
last_update:
  date: 03/23/2024
  author: WuFeifei
---

<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" alt="pir" width={600} height="auto" /></p>

作为新版本，Grove - OLED显示屏 0.66英寸（SSD1306）与其他OLED显示屏（如Grove - OLED显示屏 0.96英寸（SSD1315））相比，屏幕更小。尽管如此，它仍然能以64×48的分辨率显示内容，并保留了与其他显示屏相同的性能，例如高亮度、低功耗以及背面的Grove接口等。

您可以使用I2C接口通过您的微控制器点亮这款迷你显示屏，以显示文字、图像或您想要显示的任何内容。0.66英寸的显示屏有助于您在较小的空间内显示信息，您可以将其用作Arduino OLED显示屏、Raspberry Pi PLED显示屏等。

这款Grove-OLED显示屏支持Olikraus编写的U8g2单色显示屏库。该库既方便又兼容性好，支持SSD1306和其他芯片，如SSD1315。所以现在就购买一款，与这款小屏幕一起享受乐趣吧！<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)

## 功能特性

- 基于SSD1306，裁剪至64×48分辨率（单色）
- 超小尺寸：20 * 20mm
- 可变的I2C地址
- 兼容3.3V/5V电源供电
- 高对比度，高亮度
- 低功耗
- 宽工作温度范围：-40℃ ~ +85 ℃
- 用户友好设计：背面配备Grove接口

## 规格

|参数|值|
|---|---|
|输入电压|3.3V / 5V|
|输出电压| 0 ~ 2.3V |
|像素分辨率|64 x 48|
|工作温度范围|-40℃ ~ +85 ℃|
|接口类型|I2C|

## 硬件概述

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" /></a></p>
  </figure>
</div>

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|树莓派|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## 入门指南

### 与Arduino配合使用

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - OLED 显示屏 0.66英寸 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/1629856731(1).png" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)|

>此外，您还可以考虑我们新推出的[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它与Seeeduino V4.2和Base Shield的组合功能相当。

#### 硬件连接

- **步骤 1.** 将Grove - TDS传感器插入Grove - Base Shield的**I2C**端口。

- **步骤 2.** 将Grove - Base Shield插入Seeeduino。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino1.png" alt="pir" width={600} height="auto" /></p>

#### 软件

:::注意
       如果您是第一次使用Arduino，我们强烈建议您在开始之前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 导航至 **Sketch（草图）** -> **Include Library（包含库）** -> **Manage Libraries...（管理库...）**，在**Library Manager（库管理器）**中搜索并安装**`U8g2`**库。

- **步骤 2.** 打开Arduino IDE并创建一个新文件，然后将以下代码复制到新文件中。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // All Boards without Reset of the Display

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(32,30,"Hello \n");
  u8g2.drawStr(32,45,"World!");
  u8g2.sendBuffer();
  delay(1000);  
}
```

注意：您应该了解Grove - OLED显示屏 0.66英寸（SSD1306）是基于128×64分辨率的屏幕。当您想要使用U8g2 SSD 128*64驱动进行显示时，您可能需要从(31,16)而不是(0,0)开始绘制。其范围是从(31,16)到(95,63)。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/note.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/note.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 上传演示程序。如果您不知道如何上传代码，请查阅[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

- **步骤 4.** OLED显示屏应该看起来像这样：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino2.png" /></div>

## U8g2库介绍

U8g2是一个用于嵌入式设备的单色图形库。U8g2支持单色OLED和LCD，包括我们的芯片SSD1306。

Arduino库U8g2可以从Arduino IDE的库管理器中安装。U8g2还包含了U8x8库：

**U8g2**

- 包含所有图形程序（绘制线条/方框/圆形）。
- 支持多种字体。对字体高度（几乎）没有限制。
- 需要在微控制器中占用一些内存来渲染显示屏。

**U8x8**

- 仅支持文本输出（字符）设备。
- 只允许使用能适应8x8像素网格的字体。
- 直接写入显示屏。无需在微控制器中占用缓冲区。

这里提供了[**U8g2库wiki**](https://github.com/olikraus/u8g2/wiki)以及[U8g2 API参考](https://github.com/olikraus/u8g2/wiki/u8g2reference)页面。

## 常见问题解答（FAQ）

**Q1#** 示例程序在其他板子上不工作怎么办？

**A1:** U8g2在初始化时有不同的模式，除了硬件I2C外，还可以使用软件I2C。如果示例程序不工作，请尝试使用软件I2C。更多信息请访问[u8g2](https://github.com/olikraus/U8g2_Arduino)。一些示例和简要介绍也提供在[这里](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove - OLED Display 0.96''(SSD1315)V1.0)。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/GroveOLEDDisplay0.66(SSD1306)inEagle.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - OLED 显示屏 0.66 英寸(SSD1306)_v1.0 file](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/GroveOLEDDisplay0.66(SSD1306)inEagle.rar)
- **[ZIP]** [SSD1306-数据手册](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/SSD1306-Datasheet.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
