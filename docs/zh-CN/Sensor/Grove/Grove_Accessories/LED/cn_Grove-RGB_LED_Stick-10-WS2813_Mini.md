---
description: Grove - RGB LED 灯条 (10 - WS2813 Mini)
title: Grove - RGB LED 灯条 (10 - WS2813 Mini)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-RGB_LED_Stick-10-WS2813_Mini
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/main.jpg" alt="pir" width={600} height="auto" /></p>

我们在这款灯条上集成了 10 个全彩 RGB LED，只需一个信号引脚即可轻松控制所有 10 个 LED。所有 LED 均为 WS2813 Mini，这是一种智能控制且高性价比的 LED。
更重要的是，WS2813 支持信号断点续传，这意味着即使一个 LED 损坏，其他 LED 仍然可以继续使用。

您可以使用这款小灯条创造出数十万种灯光效果，我们希望它能为您带来更多乐趣。


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html)

## 版本

| 产品版本  | 变更                                                                                               | 发布日期       |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RGB LED 灯条 (10 WS2813 Mini) | 初始版本                                                                                               | 2018年11月      |

## 特性

- WS2813B IC，3535 LED
- 智能反接保护
- 每个像素的灰度等级为 256，可实现“256*256*256=16777216”全彩显示
- 刷新频率高达 2KHz
- 串行级联接口，数据接收和解码仅依赖一条信号线
- 双信号线版本，支持信号断点续传

### 信号断点续传

<!-- ![](https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg" alt="pir" width={600} height="auto" /></p>

只要没有两个或更多相邻的 LED 损坏，其余的 LED 将能够正常工作。



## 规格

|项目|参数|
|---|---|
|工作电压|3.3V / 5V|
|工作温度|-25℃ ~ +85℃|
|存储温度|-40℃ ~ +105℃|
|RGB 通道恒流|16mA|
|接口|数字|
|尺寸|长: 80mm 宽: 10mm 高: 10mm| 
|重量|3.7g|
|包装尺寸|长: 150mm 宽: 100mm 高: 25mm|
|毛重|13g|


## 典型应用

- 圣诞装饰
- 照明
- 玩具

## 硬件概述

### 引脚分布

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/pin_out.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - RGB LED Stick (10 WS2813 Mini) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html" target="_blank">立即购买</a>|

:::note
    **1** 请轻轻插入 USB 线，否则可能会损坏接口。请使用内部有 4 根线的 USB 线，2 根线的 USB 线无法传输数据。如果您不确定手头的线缆，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

:::important
    **1** 如果您使用 Arduino UNO 作为主板，建议使用直流电源，否则 VCC 的最大纹波可能会超过 100mV。如果您使用 Seeeduino V4.2 作为主板，则无需连接直流电源。

    **2** 不支持热插拔。
:::

- **步骤 1.** 将 Grove - RGB LED Stick (10 WS2813 Mini) 连接到 Grove-Base Shield 的 **D6** 端口。

- **步骤 2.** 将 Grove-Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 线将 Seeeduino 连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        如果没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino      |  Grove 线缆       | Grove - RGB LED Stick (10 WS2813 Mini) |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V 或 3.3V     | 红色              | VCC |
| 无连接         | 白色              | NC |
| D6             | 黄色              | SIG |

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Led_Strip](https://github.com/Seeed-Studio/Seeed_Led_Strip) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例代码，可以通过以下三种方式打开：
    1. 直接在 Arduino IDE 中通过路径打开：**File --> Examples --> Adafruit_Neopixel --> simple**。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path1.jpg) -->
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path1.jpg" alt="pir" width={600} height="auto" /></p>

2. 在您的电脑中打开它，点击 **simple.ino** 文件，该文件位于 **XXXX\Arduino\libraries\Seeed_Led_Strip-master\examples\simple** 文件夹中，其中 **XXXX** 是您安装 Arduino IDE 的位置。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path2.jpg" alt="pir" width={600} height="auto" /></p>

3. 或者，您可以直接点击图标  
<!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

在代码块右上角，将以下代码复制到 Arduino IDE 的新草图中。

```cpp
// NeoPixel Ring 简单示例 (c) 2013 Shae Erisson
// 根据 GPLv3 许可证发布，与 AdaFruit NeoPixel 库的其他部分一致

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

// Arduino 上连接到 NeoPixels 的引脚
// 如果使用 Trinket 或 Gemma，建议将其更改为 1
#define PIN            6

// 连接到 Arduino 的 NeoPixels 数量
#define NUMPIXELS      10

// 设置 NeoPixel 库时，我们需要告诉它像素数量以及使用哪个引脚发送信号。
// 注意，对于较旧的 NeoPixel 灯条，可能需要更改第三个参数——有关可能的值，请参阅 strandtest 示例。
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

int delayval = 500; // 延迟半秒

void setup() {
  // 适用于 Trinket 5V 16MHz，如果您未使用 Trinket，可以删除以下三行代码
#if defined (__AVR_ATtiny85__)
  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
#endif
  // Trinket 特殊代码结束
  pixels.setBrightness(255);
  pixels.begin(); // 初始化 NeoPixel 库
}

void loop() {

  // 对于一组 NeoPixels，第一个 NeoPixel 是 0，第二个是 1，以此类推，直到像素数量减一。

  for(int i=0;i<NUMPIXELS;i++){

    // pixels.Color 接收 RGB 值，从 0,0,0 到 255,255,255
    pixels.setPixelColor(i, pixels.Color(0,150,0)); // 中等亮度的绿色。

    pixels.show(); // 将更新后的像素颜色发送到硬件。

    delay(delayval); // 延迟一段时间（以毫秒为单位）。

  }
}
```

:::note
库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::success
如果一切正常，现在您可以看到 LED 灯条开始闪烁：
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/test20181210_162208.gif) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/test20181210_162208.gif" alt="pir" width={600} height="auto" /></p>

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - RGB LED Stick (10 WS2813 Mini) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip)

- **[Zip]** [Led_Strip 库](https://github.com/Seeed-Studio/Seeed_Led_Strip/archive/master.zip)

- **[PDF]** [WS2813-Mini 数据手册](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/WS2813-Mini.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>