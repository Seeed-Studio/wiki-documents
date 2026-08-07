---
description: Grove-机械键帽
title: Grove-机械键帽
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Mech_Keycap
sku: 111020049
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-05-08'
url: https://wiki.seeedstudio.com/cn/Grove-Mech_Keycap/
---
<!-- ---
name: Grove-Mech keycap
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020049
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/2.jpg)

Grove-机械键帽是一款带有内置 LED 的机械开关。255 全彩 RGB LED 让你可以简单直观地显示开关的状态。该键帽非常可靠，按压寿命可达 20,000,000 次。

你会发现这是一个有趣且稳定的模块，可以用来制作一些非常有趣的项目或产品。实际上，你甚至可以使用多个 Grove-机械键帽制作一把机械键盘。

:::tip
在无负载条件下，以每分钟 300 次的频率连续操作 20,000,000 个循环。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Mech-Keycap.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" style={{maxWidth: '300px', height: 'auto'}} alt="立即获取" /></a></p>

## 特性

- 可编程 LED
- 可靠的机械结构  
- 极长的工作寿命

## 规格

|项目|数值|
|---|---|
|工作电压|3v-5v|
|绝缘电阻|100MΩ 最小|
|接触电阻|200 mΩ 最大|
|无负载工作寿命|20,000,000|

## 应用

- 汽车设备
- 可视化设备
- 家用电器
- 信息设备

## 硬件

### 引脚图

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/pin_map.jpg)

### 原理图

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/schametic.jpg)

K1 连接到按键，当按键断开时，**SIG1** 会被电阻 R2 下拉，此时 **SIG1** 的输出应为低电平。
一旦按键被按下，K1 闭合，**SIG1** 将连接到 **VCC**，此时 **SIG1** 的输出变为高电平。

:::note
在本节中我们只向你展示部分原理图，完整文档请参考 [Resources](/cn/#资源)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上面提到的受支持平台仅表示该模块在软件或理论上的兼容性。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 入门指南

:::note
如果这是你第一次使用 Arduino，我们强烈建议你在开始之前先阅读 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::
### 使用 PlatformIO 体验

**硬件**


<table align="center">
  <tr>
    <th>XIAO nRF52840 Sense</th>
    <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove-Mech keycap</th>
  </tr>
  <tr>
    <td><div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png" style={{width: '400px', height: 'auto'}}/></div></td>
    <td><div style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width: '400px', height: 'auto'}}/></div></td>
    <td><div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg" style={{width: '400px', height: 'auto'}}/></div></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank" rel="noopener noreferrer">立即获取</a></td>
    <td align="center"><a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank" rel="noopener noreferrer">立即获取</a></td>
    <td align="center"><a href="https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html" target="_blank" rel="noopener noreferrer">立即获取</a></td>
  </tr>
</table>


- **步骤 1.** 连接 Grove-机械键帽信号引脚：`S1` -> `D1`，`S2` -> `D2`，连接到 Seeed Studio Grove Base for XIAO。（VCC/GND 照常连接）
- **步骤 2.** 将 Grove Base 插入 XIAO nRF52840 Sense。
- **步骤 3.** 通过 USB 将 XIAO 连接到你的电脑。

**软件** 

- **步骤 1.** 在 PlatformIO 中安装 `Adafruit_NeoPixel` 库。
- **步骤 2.** 创建一个新的草稿/项目，并粘贴下面的代码。
- **步骤 3.** 上传到 XIAO，并打开串口监视器（波特率 115200）查看状态。

**功能说明** 

- 每按下一次 Grove-机械键帽，内置 RGB LED 会在一组颜色中循环切换。

代码 
```cpp
/*
  Grove-Mech Keycap demo for XIAO (nRF52840 Sense)
  Wiring: S1 -> D1 (button), S2 -> D2 (pixel data)
*/
#include <Adafruit_NeoPixel.h>

#define BUTTON_PIN 1   // D1
#define PIXEL_PIN  2   // D2
#define PIXEL_COUNT 1

Adafruit_NeoPixel strip(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

uint8_t colorPos = 0;
bool lastState = LOW;
unsigned long lastDebounce = 0;
const unsigned long debounceDelay = 50;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  strip.begin();
  strip.show();
  Serial.begin(115200);
  Serial.println("Grove-Mech Keycap: ready");
}

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

void cycleColor() {
  colorPos += 32; // step size
  strip.setPixelColor(0, Wheel(colorPos));
  strip.show();
  Serial.print("Color pos: "); Serial.println(colorPos);
}

void loop() {
  bool reading = digitalRead(BUTTON_PIN) == LOW ? true : false; // pressed = LOW for INPUT_PULLUP

  if (reading != lastState) {
    lastDebounce = millis();
  }

  if ((millis() - lastDebounce) > debounceDelay) {
    // stable state
    static bool pressed = false;
    if (reading && !pressed) {
      // button pressed (edge)
      cycleColor();
      pressed = true;
    } else if (!reading) {
      pressed = false;
    }
  }

  lastState = reading;
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/xiao_capkey.gif" style={{width:400, height:'auto'}}/></div>

:::note
 如果你的接线或引脚映射不同，请相应地修改 `BUTTON_PIN` 和 `PIXEL_PIN`。
:::



### 使用 Arduino 体验

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove-Mech keycap |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html" target="_blank">立即获取</a>|

:::note
**1** 请轻轻插拔 USB 线，否则可能会损坏接口。请使用内部有 4 根线的 USB 线，只有 2 根线的线缆无法传输数据。如果你不确定自己手上的线缆类型，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果你丢失了 Grove 线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤 1.** 将 Grove-机械键帽连接到 Grove-Base Shield 的 **D2** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/light1400-1050%C2%B7.jpg)

:::note
如果我们没有 Grove Base Shield，也可以像下面这样将 Grove-机械键帽直接连接到 Seeeduino。
:::

| Seeeduino     | Grove-Mech keycap       |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| D3         | White                   |
| D2            | Yellow                  |

#### 软件

- **步骤 1.** 从 Github 下载 [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip) 库。

- **步骤 2.** 参考 [How to install library](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 打开 Arduino IDE 并创建一个新文件，然后将以下代码复制到该新文件中。

```cpp
/**
 * This is an exmaple of the Grove - Mech Keycap.
 * Every press of the key will change the color the SK6805 RGB LED. The SK6805 is a NeoPixel compatible chip.
 * 
 * Credit:
 * Adafruit_NeoPixel - https://github.com/adafruit/Adafruit_NeoPixel/blob/master/COPYING
 */

#include <Adafruit_NeoPixel.h>

#define BUTTON_PIN   2    // Digital IO pin connected to the button.  This will be
                          // driven with a pull-up resistor so the switch should
                          // pull the pin to ground momentarily.  On a high -> low
                          // transition the button press logic will execute.

#define PIXEL_PIN    3    // Digital IO pin connected to the NeoPixels.

#define PIXEL_COUNT 60

// Parameter 1 = number of pixels in strip,  neopixel stick has 8
// Parameter 2 = pin number (most are valid)
// Parameter 3 = pixel type flags, add together as needed:
//   NEO_RGB     Pixels are wired for RGB bitstream
//   NEO_GRB     Pixels are wired for GRB bitstream, correct for neopixel stick
//   NEO_KHZ400  400 KHz bitstream (e.g. FLORA pixels)
//   NEO_KHZ800  800 KHz bitstream (e.g. High Density LED strip), correct for neopixel stick
Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

bool oldState = LOW;
uint8_t color_pos = 0;
int i=0;
int longpress=2000;
long timecheck;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  strip.begin();
  strip.clear();
  strip.show(); // Initialize all pixels to 'off'
  Serial.begin(9600); 
}

void loop()
{

  // Get current button state.
  bool newState = digitalRead(BUTTON_PIN);

  // Check if state changed from low to high (button press).
  if (newState == HIGH && oldState == LOW) {
      timecheck = millis(); 
    // Short delay to debounce button.
    delay(20);
    // Check if button is still low after debounce.
    newState = digitalRead(BUTTON_PIN);
    if (newState == HIGH){
      color_pos+=8;
      strip.setPixelColor(0, Wheel(color_pos));
      strip.show();
    }
  }

 if( millis()-timecheck > 300)
 {
   if (digitalRead(BUTTON_PIN)==HIGH)
   {
 if(millis()-timecheck > longpress)
 {
  while(digitalRead(BUTTON_PIN) == HIGH)
  {
  strip.setPixelColor(0,Wheel(color_pos));
  strip.show();
  delay(300);

  strip.setPixelColor(0,0,0,0);
  strip.show();
  delay(300);
  bool newState = digitalRead(BUTTON_PIN);
  }
  strip.setPixelColor(0,0,0,0);
  strip.show();
   timecheck = millis(); 
 }
  }
   }

  // Set the last button state to the old state.
  oldState = newState;
}

// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
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

- **步骤 4.** 上传示例程序。如果你不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 每次按下 Grove-Mech Keycap，你都会看到 LED 颜色发生变化。如果按住按钮大约 2 秒，你会看到呼吸灯效果。

### 使用 Raspberry Pi 玩转

#### 硬件

- **步骤 1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Mech Keycap|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html)|

- **步骤 2**. 将 Grove Base Hat 插到 Raspberry 上。
- **步骤 3**. 将 Grove - Mech Keycap 连接到 Base Hat 的 PWM 端口（端口 12）。

:::note
引脚可以是下表中用于 PWM 功能的任意一个值，并将设备连接到对应的插槽。
:::

|Pin|Slot|
|---|---|
|18|D18|
|12|PWM|

- **步骤 4**. 通过 USB 线将 Raspberry Pi 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/Mech_Hat.jpg)

#### 软件

- **步骤 1**. 按照 [Setting Software](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行下面的命令来运行代码。

```
cd grove.py/grove
sudo python grove_mech_keycap.py 12

```

:::caution
Unix 有一个“安全模型”。作为普通用户，你可以做一些事情，但你不应该能够访问同一台电脑上其他人的文件。并且作为用户，你不应该能够导致电脑停止工作。而“/dev/mem”允许你做的“恶作剧”远远不止修改一个 GPIO。这就是为什么必须保护 /dev/mem 不被普通用户访问。因此，为了运行这段代码，你需要在命令行中输入 **sudo python grove_mech_keycap.py**
:::

下面是 grove_mech_keycap.py 代码。

```python

import time
from grove.button import Button
from grove.factory import Factory

class GroveKeycap(object):
    def __init__(self, pin):
        # High = pressed
        self.__btn = Factory.getButton("GPIO-HIGH", pin)
        # single WS2812 LED
        self.__led = Factory.getOneLed("WS2812-PWM", pin + 1)
        self.__on_event = None
        self.__btn.on_event(self, GroveKeycap.__handle_event)

    @property
    def on_event(self):
        return self.__on_event

    @on_event.setter
    def on_event(self, callback):
        if not callable(callback):
            return
        self.__on_event = callback

    def __handle_event(self, evt):
        # print("event index:{} event:{} pressed:{}".format(evt['index'], evt['code'], evt['presesed']))
        if callable(self.__on_event):
            self.__on_event(evt['index'], evt['code'], evt['time'])
            return

        self.__led.brightness = self.__led.MAX_BRIGHT
        event = evt['code']
        if event & Button.EV_SINGLE_CLICK:
            self.__led.light(True)
            print("turn on  LED")
        elif event & Button.EV_DOUBLE_CLICK:
            self.__led.blink()
            print("blink    LED")
        elif event & Button.EV_LONG_PRESS:
            self.__led.light(False)
            print("turn off LED")


Grove = GroveKeycap

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.PWM)
    pin = sh.argv2pin()

    ledbtn = GroveKeycap(pin)

    # remove ''' pairs below to begin your experiment
    '''
    # define a customized event handle your self
    def cust_on_event(index, event, tm):
        print("event with code {}, time {}".format(event, tm))

    ledbtn.on_event = cust_on_event
    '''
    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tip
如果一切顺利，你将能够看到如下结果。如果你单击键帽，你会看到“turn on LED”，如果你双击键帽，你会看到“blink LED”。长按键帽会得到“turn off LED”。
:::

```python

pi@raspberrypi:~/grove.py/grove $ sudo python grove_mech_keycap.py 12
Hat Name = 'Grove Base Hat RPi'
turn on  LED
turn on  LED
blink    LED
turn on  LED
turn off LED
^CTraceback (most recent call last):
  File "grove_mech_keycap.py", line 98, in <module>
    main()
  File "grove_mech_keycap.py", line 94, in main
    time.sleep(1)
KeyboardInterrupt


```

你可以通过简单地按下 ++ctrl+c++ 来退出该程序。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove-Mech Keycap eagle 文件](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip)
- **[Zip]** [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)
- **[PDF]** [开关产品简介](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/DIP_Mech_Key.pdf)

## 项目

这是该产品的介绍视频，包含简单的演示，你可以试一试。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
