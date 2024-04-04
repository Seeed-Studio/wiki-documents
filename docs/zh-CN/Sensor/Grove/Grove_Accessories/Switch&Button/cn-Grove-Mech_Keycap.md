---
description: Grove-Mech keycap
title: Grove-Mech keycap
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Mech_Keycap
last_update:
  date: 03/23/2024
  author: WuFeifei
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

Grove-Mech 键帽是一款内置LED的机械开关。这款键帽上配备的255种全彩RGB LED使得展示开关状态变得简单而便捷。这款键帽非常可靠，其按压操作寿命高达20,000,000次。

您会发现这是一个有趣且稳定的模块，可用于制作一些真正有趣的项目或产品。实际上，您甚至可以使用几个Grove-Mech键帽来制作一个机械键盘。

:::提示
在无负载的情况下，应以每分钟300次的速度连续进行20,000,000次操作循环。

:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 可编程LED
- 可靠的机械结构
- 超长的使用寿命

## 规格

| 项目           | 数值        |
|---|---|
| 工作电压       | 3v-5v       |
| 绝缘电阻       | 100MΩ 最小  |
| 接触电阻       | 200 mΩ 最大 |
| 无负载操作寿命 | 20,000,000  |

## 应用

- 汽车设备
- 显示设备
- 家用电器
- 信息设备

## 硬件

### 引脚映射

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/pin_map.jpg)

### 原理图

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/schametic.jpg)

K1连接到按钮上，当按键打开时，**SIG1**会被R2下拉，因此**SIG1**的输出应为低电平。
一旦按钮被按下，K1将闭合，**SIG1**将连接到**VCC**，此时**SIG1**的输出变为高电平。

:::提示
在本节中，我们只向您展示了部分原理图，完整的文档请参考[资源](https://yiyan.baidu.com/#resources)部分。

:::

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户需要自己编写软件库。
:::

## 入门指南

:::警告
如果您是第一次使用Arduino，我们强烈建议您在开始之前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 与Arduino一起操作

#### 硬件

**所需材料**

| Seeeduino V4.2 | 基础盾板 | Grove-Mech 键帽 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html" target="_blank">立即获取</a>|

:::提示
**1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有四根线的USB线，两根线的线无法传输数据。如果您不确定自己手中的线是否符合要求，可以点击[此处](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)进行购买。

**2**  购买每个Grove模块时都会附带一根Grove线。如果您丢失了Grove线，可以点击[此处](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-(5-PCs-pack)-p-936.html)进行购买。
:::

- **步骤 1.** 将Grove-Mech键帽插入Grove-Base Shield的**D2**端口。

- **步骤 2.** 将Grove-Base Shield插入Seeeduino中。
- **步骤 3.** 使用USB线将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/light1400-1050%C2%B7.jpg)

:::提示
如果没有Grove Base Shield，我们也可以直接将Grove-Mech键帽连接到Seeeduino，连接方式如下：
:::

| Seeeduino | Grove-Mech键帽 |
|---------------|-------------------------|
| 5V        | 红色线         |
| GND       | 黑色线         |
| D3        | 白色线         |
| D2        | 黄色线         |

#### 软件

- **步骤 1.** 从Github下载[Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)库。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)来为Arduino安装库。
- **步骤 3.** 打开Arduino IDE并创建一个新文件，然后将以下代码复制到新文件中。

```c++
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

- **步骤 4.** 上传示例程序。如果您不知道如何上传代码，请查阅[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

- **步骤 5.** 每次您按下Grove-Mech键帽时，您会看到LED的颜色变化。如果您按下并保持按钮大约2秒，您会看到呼吸灯效果。

### 与Raspberry Pi一起操作

#### 硬件

- **步骤 1**. 此项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Mech Keycap|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html)|

- **步骤 2**. 将Grove Base Hat插入Raspberry Pi中。
- **步骤 3**. 将Grove - Mech Keycap连接到Base Hat的PWM端口（端口12）。

:::提示
PWM功能的pin列中可以是以下值之一，并将设备连接到相应的插槽。
:::

| Pin  | 插槽 |
|---|---|
| 18   | D18  |
| 12   | PWM  |

- **步骤 4**. 通过USB线将Raspberry Pi连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/Mech_Hat.jpg)

#### 软件

- **步骤 1**. 按照[设置软件](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation)来配置开发环境。
- **步骤 2**. 通过克隆grove.py库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令来运行代码。

```
cd grove.py/grove
sudo python grove_mech_keycap.py 12

```

:::警告
Unix有一个“安全模型”。作为普通用户，你可以做一些事情，但你不应该能够访问同一台计算机上其他人的文件。而且，作为用户，你不应该能够让计算机停止工作。现在，“/dev/mem”允许你比仅仅改变GPIO做更多“坏事”。这就是为什么/dev/mem必须对普通用户进行保护的原因。因此，为了运行此代码，你应该在命令行中输入**sudo python grove_mech_keycap.py**
:::

以下是grove_mech_keycap.py的代码。

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

:::成功提示
如果一切顺利，你将能够看到以下结果。如果你单击键帽，你会看到“打开LED”，如果你双击键帽，你会看到“闪烁LED”。长按键帽会显示“关闭LED”。
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

你可以通过按 ++ctrl+c++ 来退出这个程序。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}> </div>

## 资源

- **[压缩包]** [Grove-Mech Keycap eagle文件](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip)
- **[压缩包]** [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)
- **[PDF]** [开关的产品简介](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/DIP_Mech_Key.pdf)

## 项目

这是该产品的介绍视频，以及一些简单的演示，你可以尝试一下。

<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
