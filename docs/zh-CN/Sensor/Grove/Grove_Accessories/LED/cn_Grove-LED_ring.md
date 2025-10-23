---
description: Grove - RGB LED 环（20 - WS2813 Mini）
title: Grove - RGB LED 环（20 - WS2813 Mini）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-LED_ring
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - RGB LED 环（20 - WS2813 Mini）是 [WS2813 数字 RGB LED 环](https://www.seeedstudio.com/WS2813-Digital-RGB-LED-Ring-p-2871.html) 的迷你版本。RGB LED 环采用 3535 尺寸的 LED，每个 LED 内部嵌入了一个微控制器。WS2813 的驱动芯片位于 LED 内部，因此每个 LED 都是可寻址的。每个 LED 都具有恒流驱动，因此即使电压发生变化，颜色也会非常一致。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/zQj8RRJcZsk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Min-p-3227.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Min-p-3227.html)

## 特性

- 控制电路和 RGB 芯片集成在 3535 组件中，形成外部控制像素。
- 智能反接保护。
- 内置信号整形电路。
- 256 灰度级和 16777216 全彩显示。
- 串行级联接口，数据接收和解码仅依赖一条信号线。
- 数据传输速度高达 800Kbps。
- 双信号线版本，信号断点连续传输。

### 信号断点连续传输

<!-- ![](https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg" alt="pir" width={600} height="auto" /></p>

只要没有两个或更多相邻的 LED 损坏，其余 LED 就能够正常工作。

## 规格

|项目|值|
|---|---|
|电源|3.3V/5V|
|静态电流|0.7mA/LED|
|RGB 通道恒流|16mA/LED|
|刷新频率|2KHz|
|复位时间|>280μs|
|工作温度|-25～85℃|
|存储温度|-40～105℃|

## 典型应用

- 护栏管系列、点光显示系列、柔性/刚性灯条系列、模块系列应用。
- 舞台服装照明、创新小工具或其他电子产品。

## 硬件概览

### 引脚分布

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/pinout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

### 硬件详情

___
**WS2813B-Mini**

WS2813-Mini 是一种智能控制 LED 光源，其控制电路和 RGB 芯片集成在 3535 组件的封装中。其内部包括智能数字端口数据锁存和信号整形放大驱动电路，还包括精密内部振荡器和 12V 电压可编程恒流控制部分，从而实现高度一致的颜色效果。

## 支持的平台

| Arduino | Raspberry Pi |
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

| Seeeduino V4.2 | Base Shield | Grove - RGB LED Ring | Grove - Button |
|--------------|-------------|-----------------|---------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Min-p-3227.html)|[立即购买](https://www.seeedstudio.com/Grove-Button-p-766.html)|

:::note
**1.** 请轻轻插入 USB 线，否则可能会损坏端口。请使用内部有 4 根线的 USB 线，2 根线的 USB 线无法传输数据。如果您不确定手头的线缆，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2.** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove - Button 连接到 Grove - Base Shield 的 D2 端口。

- **步骤 2.** 将 Grove - RGB LED Ring 连接到 Grove - Base Shield 的 D6 端口。

- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。

:::caution
**1.** 如果您使用的是 Arduino UNO，建议连接到直流电源以避免最大 Vcc 电压波动超过 100mV。

**2.** 如果您使用的是 Seeeduino V4.2，则无需连接直流电源。然而，如果您切换到使用 3V3 为 Grove 供电，主板在通电时会重新启动。请注意，这不会影响使用。
:::

- **步骤 4.** 使用 USB 线将 Seeeduino 连接到 PC。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/with_ard.jpg" alt="pir" width={600} height="auto" /></p>

:::warning
热插拔不支持，您可能需要在任何替换或更改之前断开 Arduino 的电源连接。
:::

现在，我们将演示如何运行代码 'buttoncycler'。这是一个使用额外输入设备（按钮）触发 LED 环变化的示例。如果您希望运行其他程序，操作类似，唯一的变化是您需要断开按钮与 Base Shield 的 D2 端口连接，因为您不再使用它。

#### 软件

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Grove-RGB_LED_Ring-20-WS2813Mini](https://github.com/Seeed-Studio/Seeed_LED_Ring.git) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例，您可以通过以下三种方式打开：
  1. 直接在 Arduino IDE 中通过路径打开：**File --> Examples --> Adafruit NeoPixel --> buttoncycler**。
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/ard1.jpg" alt="pir" width={600} height="auto" /></p>

2. 在您的电脑中打开文件，点击 **basic_demo.ino**，您可以在文件夹 **XXXX\Arduino\libraries\Seeed_LED_Ring\examples\⁨buttoncycler⁩\⁨buttoncycler⁩.ino** 中找到它，其中 **XXXX** 是您安装 Arduino IDE 的位置。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/ard2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/ard2.jpg" alt="pir" width={600} height="auto" /></p>

3. 或者，您可以直接点击图标  
<!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>
在代码块右上角，将以下代码复制到 Arduino IDE 的新草图中。

:::note
由于当前的限制，程序中 LED 的亮度受限。如果您坚持调整亮度限制，可以修改 `setBrightness()` 函数。但这可能导致灯光无法正常工作。
:::

#### ⁨buttoncycler⁩
运行此代码后，当您按下按钮时，它将切换到新的像素动画。请注意，您需要按下按钮一次以启动第一个动画！

```cpp

#include "Adafruit_NeoPixel.h"

#define BUTTON_PIN   2    // 数字 IO 引脚连接到按钮。此引脚将使用
                          // 上拉电阻驱动，因此开关应暂时将引脚拉至地面。
                          // 在高 -> 低转换时，按钮按下逻辑将执行。

#define PIXEL_PIN    6    // 数字 IO 引脚连接到 NeoPixels。

#define PIXEL_COUNT 20

// 参数 1 = 条带中的像素数量，neopixel stick 有 8 个
// 参数 2 = 引脚号（大多数有效）
// 参数 3 = 像素类型标志，根据需要相加：
//   NEO_RGB     像素为 RGB 位流连接
//   NEO_GRB     像素为 GRB 位流连接，适用于 neopixel stick
//   NEO_KHZ400  400 KHz 位流（例如 FLORA 像素）
//   NEO_KHZ800  800 KHz 位流（例如高密度 LED 条），适用于 neopixel stick
Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

bool oldState = HIGH;
int showType = 0;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  strip.setBrightness(255);
  strip.begin();
  strip.show(); // 初始化所有像素为“关闭”
}

void loop() {
  // 获取当前按钮状态。
  bool newState = digitalRead(BUTTON_PIN);

  // 检查状态是否从高变低（按钮按下）。
  if (newState == LOW && oldState == HIGH) {
    // 短暂延迟以消除按钮抖动。
    delay(20);
    // 消除抖动后检查按钮是否仍为低。
    newState = digitalRead(BUTTON_PIN);
    if (newState == LOW) {
      showType++;
      if (showType > 9)
        showType=0;
      startShow(showType);
    }
  }

  // 将最后的按钮状态设置为旧状态。
  oldState = newState;
}

void startShow(int i) {
  switch(i){
    case 0: colorWipe(strip.Color(0, 0, 0), 50);    // 黑色/关闭
            break;
    case 1: colorWipe(strip.Color(255, 0, 0), 50);  // 红色
            break;
    case 2: colorWipe(strip.Color(0, 255, 0), 50);  // 绿色
            break;
    case 3: colorWipe(strip.Color(0, 0, 255), 50);  // 蓝色
            break;
    case 4: theaterChase(strip.Color(127, 127, 127), 50); // 白色
            break;
    case 5: theaterChase(strip.Color(127,   0,   0), 50); // 红色
            break;
    case 6: theaterChase(strip.Color(  0,   0, 127), 50); // 蓝色
            break;
    case 7: rainbow(20);
            break;
    case 8: rainbowCycle(20);
            break;
    case 9: theaterChaseRainbow(50);
            break;
  }
}

// 用一种颜色填充点，一个接一个
void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(wait);
  }
}

void rainbow(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256; j++) {
    for(i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel((i+j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// 略有不同，这使得彩虹在整个范围内均匀分布
void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256*5; j++) { // 彩虹循环 5 次
    for(i=0; i< strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// 剧院风格的爬行灯。
void theaterChase(uint32_t c, uint8_t wait) {
  for (int j=0; j<10; j++) {  // 执行 10 次追逐循环
    for (int q=0; q < 3; q++) {
      for (int i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, c);    // 每隔三个像素打开一个
      }
      strip.show();

      delay(wait);

      for (int i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, 0);        // 每隔三个像素关闭一个
      }
    }
  }
}

// 带有彩虹效果的剧院风格爬行灯
void theaterChaseRainbow(uint8_t wait) {
  for (int j=0; j < 256; j++) {     // 在轮盘上循环所有 256 种颜色
    for (int q=0; q < 3; q++) {
      for (int i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, Wheel( (i+j) % 255));    // 每隔三个像素打开一个
      }
      strip.show();

      delay(wait);

      for (int i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, 0);        // 每隔三个像素关闭一个
      }
    }
  }
}

// 输入一个值 0 到 255 来获取颜色值。
// 颜色是 r - g - b - 返回到 r 的过渡。
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}

```

!!! 注意
	库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。

:::success
		如果一切顺利，您将能够看到 LED 环的第一个动画，并且在按下按钮后可以触发新的动画。
:::

**其他示例：**

**RGBW 灯带测试**

```cpp

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

#define PIN 6

#define NUM_LEDS 20

#define BRIGHTNESS 255

Adafruit_NeoPixel strip = Adafruit_NeoPixel(NUM_LEDS, PIN, NEO_GRBW + NEO_KHZ800);

byte neopix_gamma[] = {
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,
    1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  2,  2,  2,  2,  2,  2,
    2,  3,  3,  3,  3,  3,  3,  3,  4,  4,  4,  4,  4,  5,  5,  5,
    5,  6,  6,  6,  6,  7,  7,  7,  7,  8,  8,  8,  9,  9,  9, 10,
   10, 10, 11, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16,
   17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 24, 24, 25,
   25, 26, 27, 27, 28, 29, 29, 30, 31, 32, 32, 33, 34, 35, 35, 36,
   37, 38, 39, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50,
   51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68,
   69, 70, 72, 73, 74, 75, 77, 78, 79, 81, 82, 83, 85, 86, 87, 89,
   90, 92, 93, 95, 96, 98, 99,101,102,104,105,107,109,110,112,114,
  115,117,119,120,122,124,126,127,129,131,133,135,137,138,140,142,
  144,146,148,150,152,154,156,158,160,162,164,167,169,171,173,175,
  177,180,182,184,186,189,191,193,196,198,200,203,205,208,210,213,
  215,218,220,223,225,228,231,233,236,239,241,244,247,249,252,255 };


void setup() {
  // 适用于 Trinket 5V 16MHz，如果您未使用 Trinket，可以删除以下三行代码
  #if defined (__AVR_ATtiny85__)
    if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
  #endif
  // Trinket 特殊代码结束
  strip.setBrightness(BRIGHTNESS);
  strip.begin();
  strip.show(); // 初始化所有像素为“关闭”
}

void loop() {
  // 一些示例程序，展示如何显示像素：
  colorWipe(strip.Color(255, 0, 0), 50); // 红色
  colorWipe(strip.Color(0, 255, 0), 50); // 绿色
  colorWipe(strip.Color(0, 0, 255), 50); // 蓝色
  colorWipe(strip.Color(0, 0, 0, 255), 50); // 白色

  whiteOverRainbow(20,75,5);  

  pulseWhite(5); 

  // fullWhite();
  // delay(2000);

  rainbowFade2White(3,3,1);


}

// 逐个点填充颜色
void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(wait);
  }
}

void pulseWhite(uint8_t wait) {
  for(int j = 0; j < 256 ; j++){
      for(uint16_t i=0; i < strip.numPixels(); i++) {
          strip.setPixelColor(i, strip.Color(0,0,0, neopix_gamma[j] ) );
        }
        delay(wait);
        strip.show();
      }

  for(int j = 255; j >= 0 ; j--){
      for(uint16_t i=0; i<strip.numPixels(); i++) {
          strip.setPixelColor(i, strip.Color(0,0,0, neopix_gamma[j] ) );
        }
        delay(wait);
        strip.show();
      }
}


void rainbowFade2White(uint8_t wait, int rainbowLoops, int whiteLoops) {
  float fadeMax = 100.0;
  int fadeVal = 0;
  uint32_t wheelVal;
  int redVal, greenVal, blueVal;

  for(int k = 0 ; k < rainbowLoops ; k ++){
    
    for(int j=0; j<256; j++) { // 5 次循环显示所有颜色

      for(int i=0; i< strip.numPixels(); i++) {

        wheelVal = Wheel(((i * 256 / strip.numPixels()) + j) & 255);

        redVal = red(wheelVal) * float(fadeVal/fadeMax);
        greenVal = green(wheelVal) * float(fadeVal/fadeMax);
        blueVal = blue(wheelVal) * float(fadeVal/fadeMax);

        strip.setPixelColor( i, strip.Color( redVal, greenVal, blueVal ) );

      }

      // 第一次循环，淡入！
      if(k == 0 && fadeVal < fadeMax-1) {
          fadeVal++;
      }

      // 最后一次循环，淡出！
      else if(k == rainbowLoops - 1 && j > 255 - fadeMax ){
          fadeVal--;
      }

        strip.show();
        delay(wait);
    }
  
  }



  delay(500);


  for(int k = 0 ; k < whiteLoops ; k ++){

    for(int j = 0; j < 256 ; j++){

        for(uint16_t i=0; i < strip.numPixels(); i++) {
            strip.setPixelColor(i, strip.Color(0,0,0, neopix_gamma[j] ) );
          }
          strip.show();
        }

        delay(2000);
    for(int j = 255; j >= 0 ; j--){

        for(uint16_t i=0; i < strip.numPixels(); i++) {
            strip.setPixelColor(i, strip.Color(0,0,0, neopix_gamma[j] ) );
          }
          strip.show();
        }
  }

  delay(500);


}

void whiteOverRainbow(uint8_t wait, uint8_t whiteSpeed, uint8_t whiteLength ) {
  
  if(whiteLength >= strip.numPixels()) whiteLength = strip.numPixels() - 1;

  int head = whiteLength - 1;
  int tail = 0;

  int loops = 3;
  int loopNum = 0;

  static unsigned long lastTime = 0;


  while(true){
    for(int j=0; j<256; j++) {
      for(uint16_t i=0; i<strip.numPixels(); i++) {
        if((i >= tail && i <= head) || (tail > head && i >= tail) || (tail > head && i <= head) ){
          strip.setPixelColor(i, strip.Color(0,0,0, 255 ) );
        }
        else{
          strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
        }
        
      }

      if(millis() - lastTime > whiteSpeed) {
        head++;
        tail++;
        if(head == strip.numPixels()){
          loopNum++;
        }
        lastTime = millis();
      }

      if(loopNum == loops) return;
    
      head%=strip.numPixels();
      tail%=strip.numPixels();
        strip.show();
        delay(wait);
    }
  }
  
}
void fullWhite() {
  
    for(uint16_t i=0; i<strip.numPixels(); i++) {
        strip.setPixelColor(i, strip.Color(0,0,0, 255 ) );
    }
      strip.show();
}


// 略有不同，这使得彩虹在整个灯带上均匀分布
void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256 * 5; j++) { // 5 次循环显示所有颜色
    for(i=0; i< strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

void rainbow(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256; j++) {
    for(i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel((i+j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// 输入一个 0 到 255 的值以获取颜色值。
// 颜色是 r - g - b 的过渡，然后回到 r。
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3,0);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3,0);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0,0);
}

uint8_t red(uint32_t c) {
  return (c >> 16);
}
uint8_t green(uint32_t c) {
  return (c >> 8);
}
uint8_t blue(uint32_t c) {
  return (c);
}

```


**简单示例**

```cpp

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

// Arduino 上连接到 NeoPixels 的引脚
// 如果使用 Trinket 或 Gemma，建议将其改为 1
#define PIN            6

// Arduino 上连接的 NeoPixels 数量
#define NUMPIXELS      20

// 设置 NeoPixel 库时，需要告诉它像素数量以及使用哪个引脚发送信号。
// 注意，对于较旧的 NeoPixel 条带，可能需要更改第三个参数——有关可能的值，请参阅 strandtest 示例。
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

int delayval = 500; // 延迟半秒

void setup() {
  // 以下代码适用于 Trinket 5V 16MHz，如果不是使用 Trinket，可以删除这三行代码
#if defined (__AVR_ATtiny85__)
  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
#endif
  // Trinket 特殊代码结束
  pixels.setBrightness(255);
  pixels.begin(); // 初始化 NeoPixel 库
}

void loop() {

  // 对于一组 NeoPixels，第一个 NeoPixel 的索引为 0，第二个为 1，以此类推直到像素数量减一。

  for(int i=0;i<NUMPIXELS;i++){

    // pixels.Color 接受 RGB 值，范围从 0,0,0 到 255,255,255
    pixels.setPixelColor(i, pixels.Color(0,150,0)); // 中等亮度的绿色

    pixels.show(); // 将更新后的像素颜色发送到硬件

    delay(delayval); // 延迟一段时间（以毫秒为单位）

  }
}

```


**简单的新操作符示例**

```cpp

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

// Arduino 上连接到 NeoPixels 的引脚
// 如果使用 Trinket 或 Gemma，建议将其改为 1
#define PIN            6

// Arduino 上连接的 NeoPixels 数量
int numPixel = 20;

// 颜色顺序，更多信息请参阅 https://github.com/adafruit/Adafruit_NeoPixel/blob/master/Adafruit_NeoPixel.h
uint8_t colorOrder = 0x52; // 或直接使用 NEO_GBR

// 定义新的 NeoPixel 指针
Adafruit_NeoPixel *pixels;


int delayval = 500; // 延迟半秒

void setup() {
  // 以下代码适用于 Trinket 5V 16MHz，如果不是使用 Trinket，可以删除这三行代码
#if defined (__AVR_ATtiny85__)
  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
#endif
  // Trinket 特殊代码结束
  
  // 此处可以从 EEPROM 或其他地方读取 numPixel 和 colorOrder 的值
  // 使用新值创建一个新的 NeoPixel 实例
  pixels = new Adafruit_NeoPixel(numPixel, PIN, colorOrder);
  pixels->setBrightness(255);
  pixels->begin(); // 初始化 NeoPixel 库
}

void loop() {

  // 对于一组 NeoPixels，第一个 NeoPixel 的索引为 0，第二个为 1，以此类推直到像素数量减一。

  for(int i=0;i<numPixel;i++){

    // pixels.Color 接受 RGB 值，范围从 0,0,0 到 255,255,255
    pixels->setPixelColor(i, pixels->Color(0,150,0)); // 中等亮度的绿色

    pixels->show(); // 将更新后的像素颜色发送到硬件

    delay(delayval); // 延迟一段时间（以毫秒为单位）

  }
}

```


**Strand 测试**

```cpp

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

#define PIN 6

// 参数 1 = 条带中的像素数量
// 参数 2 = Arduino 引脚号（大多数有效）
// 参数 3 = 像素类型标志，根据需要相加：
//   NEO_KHZ800  800 KHz 位流（大多数 NeoPixel 产品使用 WS2812 LED）
//   NEO_KHZ400  400 KHz（经典 'v1'（非 v2）FLORA 像素，WS2811 驱动器）
//   NEO_GRB     像素使用 GRB 位流（大多数 NeoPixel 产品）
//   NEO_RGB     像素使用 RGB 位流（v1 FLORA 像素，非 v2）
//   NEO_RGBW    像素使用 RGBW 位流（NeoPixel RGBW 产品）
Adafruit_NeoPixel strip = Adafruit_NeoPixel(20, PIN, NEO_GRB + NEO_KHZ800);

// 重要提示：为了减少 NeoPixel 烧毁风险，请在像素电源线上添加 1000 uF 电容器，
// 在第一个像素的数据输入端添加 300 - 500 欧姆电阻，并尽量减少 Arduino 和第一个像素之间的距离。
// 避免在通电电路上连接...如果必须连接，请先连接 GND。

void setup() {
  // 以下代码适用于 Trinket 5V 16MHz，如果不是使用 Trinket，可以删除这三行代码
  #if defined (__AVR_ATtiny85__)
    if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
  #endif
  // Trinket 特殊代码结束

  strip.begin();
  strip.setBrightness(255);
  strip.show(); // 初始化所有像素为“关闭”
}

void loop() {
  // 一些示例过程，展示如何显示像素：
  colorWipe(strip.Color(255, 0, 0), 50); // 红色
  colorWipe(strip.Color(0, 255, 0), 50); // 绿色
  colorWipe(strip.Color(0, 0, 255), 50); // 蓝色
//colorWipe(strip.Color(0, 0, 0, 255), 50); // 白色 RGBW
  // 发送一个剧院像素追逐效果...
  theaterChase(strip.Color(127, 127, 127), 50); // 白色
  theaterChase(strip.Color(127, 0, 0), 50); // 红色
  theaterChase(strip.Color(0, 0, 127), 50); // 蓝色

  rainbow(20);
  rainbowCycle(20);
  theaterChaseRainbow(50);
}

// 用颜色逐个填充点
void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(wait);
  }
}

void rainbow(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256; j++) {
    for(i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel((i+j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// 稍有不同，这使得彩虹在整个范围内均匀分布
void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256*5; j++) { // 彩虹循环 5 次
    for(i=0; i< strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// 剧院风格的爬行灯
void theaterChase(uint32_t c, uint8_t wait) {
  for (int j=0; j<10; j++) {  // 执行 10 次追逐循环
    for (int q=0; q < 3; q++) {
      for (uint16_t i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, c);    // 每隔三个像素打开一个
      }
      strip.show();

      delay(wait);

      for (uint16_t i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, 0);        // 每隔三个像素关闭一个
      }
    }
  }
}

// 带有彩虹效果的剧院风格爬行灯
void theaterChaseRainbow(uint8_t wait) {
  for (int j=0; j < 256; j++) {     // 在轮盘上循环所有 256 种颜色
    for (int q=0; q < 3; q++) {
      for (uint16_t i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, Wheel( (i+j) % 255));    // 每隔三个像素打开一个
      }
      strip.show();

      delay(wait);

      for (uint16_t i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, 0);        // 每隔三个像素关闭一个
      }
    }
  }
}

// 输入一个值 0 到 255，获取一个颜色值。
// 颜色是从红色到绿色到蓝色再回到红色的过渡。
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}

```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/res/Grove%20-%20RGB%20LED%20Ring%20(20%20-%20WS2813%20Mini).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[Zip]** [Grove - RGB LED Ring(20 WS2813 Mini) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/res/Grove%20-%20RGB%20LED%20Ring%20(20%20-%20WS2813%20Mini).zip)

- **[Zip]** [Grove - RGB LED Ring(20 WS2813 Mini) 软件库](https://github.com/Seeed-Studio/Seeed_LED_Ring/archive/master.zip)

- **[PDF]** [WS2813-Mini 数据手册](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/res/WS2813-Mini.pdf)




## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
