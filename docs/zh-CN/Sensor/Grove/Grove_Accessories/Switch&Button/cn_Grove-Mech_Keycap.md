---
description: Grove-机械键帽
title: Grove-机械键帽
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Mech_Keycap
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove-机械键帽
category: 传感器
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020049
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/2.jpg)

Grove-机械键帽是一种带有内置 LED 的机械开关。255 全彩 RGB LED 使其能够简单方便地显示开关的状态。该键帽非常可靠，具有 20,000,000 次按压操作寿命。

您会发现这是一个有趣且稳定的模块，可以用于制作一些非常有趣的项目或产品。实际上，您甚至可以使用多个 Grove-机械键帽制作一个机械键盘。

:::tip
20,000,000 次操作应以每分钟 300 次循环的速率连续进行，无负载。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Mech-Keycap.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 可编程 LED
- 可靠的机械结构  
- 超长操作寿命

## 规格

|项目|值|
|---|---|
|工作电压|3v-5v|
|绝缘电阻|100MΩ 最小值|
|接触电阻|200 mΩ 最大值|
|无负载操作寿命|20,000,000|

## 应用

- 汽车设备
- 可视设备
- 家用电器
- 信息设备

## 硬件

### 引脚图

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/pin_map.jpg)

### 原理图

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/schametic.jpg)

K1 连接到按钮，当按键打开时，**SIG1** 将通过 R2 被拉低，此时 **SIG1** 的输出应为低电平。
当按钮被按下时，K1 将闭合，**SIG1** 将连接到 **VCC**，此时 **SIG1** 的输出变为高电平。

:::note
在本节中我们仅展示部分原理图，完整文档请参考 [资源](#资源)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove-机械按键帽 |
|----------------|-------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove-机械按键帽连接到 Grove-Base Shield 的 **D2** 端口。

- **步骤 2.** 将 Grove-Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/light1400-1050%C2%B7.jpg)

:::note
如果没有 Grove Base Shield，我们也可以直接将 Grove-机械按键帽连接到 Seeeduino，如下所示。
:::

| Seeeduino     | Grove-机械按键帽       |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                   |
| D3            | 白色                   |
| D2            | 黄色                   |

#### 软件

- **步骤 1.** 从 Github 下载 [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 打开 Arduino IDE 并创建一个新文件，然后将以下代码复制到新文件中。

```cpp
/**
 * 这是一个 Grove - 机械按键帽的示例。
 * 每次按下按键都会改变 SK6805 RGB LED 的颜色。SK6805 是一个与 NeoPixel 兼容的芯片。
 * 
 * 致谢：
 * Adafruit_NeoPixel - https://github.com/adafruit/Adafruit_NeoPixel/blob/master/COPYING
 */

#include <Adafruit_NeoPixel.h>

#define BUTTON_PIN   2    // 数字 IO 引脚连接到按钮。此引脚将使用上拉电阻驱动，因此开关应暂时将引脚拉至地面。
                          // 在高 -> 低转换时，按钮按下逻辑将执行。

#define PIXEL_PIN    3    // 数字 IO 引脚连接到 NeoPixels。

#define PIXEL_COUNT 60

// 参数 1 = 灯条中的像素数量，neopixel stick 有 8 个
// 参数 2 = 引脚编号（大多数有效）
// 参数 3 = 像素类型标志，根据需要相加：
//   NEO_RGB     像素为 RGB 位流连接
//   NEO_GRB     像素为 GRB 位流连接，适用于 neopixel stick
//   NEO_KHZ400  400 KHz 位流（例如 FLORA 像素）
//   NEO_KHZ800  800 KHz 位流（例如高密度 LED 灯条），适用于 neopixel stick
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
  strip.show(); // 初始化所有像素为“关闭”
  Serial.begin(9600); 
}

void loop()
{
  
  // 获取当前按钮状态。
  bool newState = digitalRead(BUTTON_PIN);

  // 检查状态是否从低变高（按钮按下）。
  if (newState == HIGH && oldState == LOW) {
      timecheck = millis(); 
    // 短暂延迟以消除按钮抖动。
    delay(20);
    // 检查消抖后按钮是否仍为低。
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
 
  // 将最后的按钮状态设置为旧状态。
  oldState = newState;
}

// 输入一个值 0 到 255 来获取颜色值。
// 颜色是 r - g - b - 返回 r 的过渡。
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

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 每次按下 Grove-机械按键帽，您将看到 LED 颜色发生变化。如果按住按钮约 2 秒钟，您将看到呼吸灯效果。

### 使用 Raspberry Pi

#### 硬件

- **步骤 1.** 本项目使用的材料：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - 机械按键帽 |
|--------------|------------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html)|

- **步骤 2**. 将 Grove Base Hat 插入到树莓派中。
- **步骤 3**. 将 Grove - Mech Keycap 连接到 Base Hat 的 PWM 端口（端口 12）。

:::note
对于 PWM 功能，pin 可以是以下表格中 pin 列的值，并将设备连接到对应的插槽。
:::

|Pin|插槽|
|---|---|
|18|D18|
|12|PWM|

- **步骤 4**. 使用 USB 数据线将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/Mech_Hat.jpg)

#### 软件

- **步骤 1**. 按照 [设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 的说明配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令运行代码。

```
cd grove.py/grove
sudo python grove_mech_keycap.py 12

```

:::caution
Unix 有一个“安全模型”。作为普通用户，你可以执行一些操作，但不能访问同一台计算机上其他用户的文件。作为用户，你也不应该能够导致计算机停止工作。而 "/dev/mem" 允许你进行比更改 GPIO 更“危险”的操作。因此，/dev/mem 必须对普通用户进行保护。因此，为了运行此代码，你需要在命令行中输入 **sudo python grove_mech_keycap.py**。
:::

以下是 grove_mech_keycap.py 的代码。

```python

import time
from grove.button import Button
from grove.factory import Factory

class GroveKeycap(object):
    def __init__(self, pin):
        # 高电平 = 按下
        self.__btn = Factory.getButton("GPIO-HIGH", pin)
        # 单个 WS2812 LED
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

    # 删除下面的 ''' 对以开始你的实验
    '''
    # 自定义事件处理程序
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
如果一切正常，你将能够看到以下结果。如果单击按键帽，你会看到 "turn on LED"；如果双击按键帽，你会看到 "blink LED"；长按按键帽会显示 "turn off LED"。
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

你可以通过按下 ++ctrl+c++ 来退出此程序。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove-Mech Keycap Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip)
- **[Zip]** [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)
- **[PDF]** [开关产品简介](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/DIP_Mech_Key.pdf)

## 项目

这是该产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>