---
description: Grove-LED 按钮
title: Grove-LED 按钮
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-LED_Button
last_update:
  date: 03/23/2024
  author: WuFeifei
---
<!-- ---
name: Grove-LED Button
category: Acator
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020044,111020045,111020046
tags: 2-链接 
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/main.jpg)

Grove - LED 按钮由 Grove - 黄色按钮、Grove - 蓝色 LED 按钮和 Grove - 红色 LED 按钮组成。这款按钮稳定可靠，使用寿命长达10万次。

由于内置了LED，您可以将其应用于许多有趣的项目中，使用LED显示按钮的状态真的很有用。我们采用高质量的N型场效应管（N-Channel MOSFET）来控制LED，确保高速切换和低功耗。总而言之，您想要一些真正出色的按钮吗？这里就有……

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Yellow-LED-Button-p-3101.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/Y.png" height="48" width="300" /></a></p>
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/B.png" height="48" width="300" /></a></p>
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/R.png"  height="48" width="300" /></a></p>

## 版本

| 产品版本       | 变更内容 | 发布日期  |
| -------------- | -------- | --------- |
| Grove-LED 按钮 | 初始版   | 2018年6月 |

## 功能特点

- 长久的使用寿命
- 易于使用
- Grove 数字接口

## 规格参数

| 项目           | 数值                     |
|---|---|
| 工作电压       | 3.3V/5V                  |
| 无负载操作寿命 | 100,000次                |
| LED额定电流    | 50mA                     |
| 按下电阻^1^    | <100mΩ                   |
| 释放电阻^2^    | >100MΩ                   |
| 尺寸           | L: 40mm W: 20mm H: 13mm  |
| 重量           | 4.3g                     |
| 包装尺寸       | L: 140mm W: 90mm H: 10mm |
| 毛重           | 11g                      |

:::提示
1,2- 如果您想测量电阻，请将按键帽从板上取下。否则，您将得到的值是板的等效电阻值，而不是按键帽的真实电阻值。
:::

## 硬件概述

### 引脚映射

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/pin_map.jpg)

### **原理图**

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/schematic.jpg)

**SIG1** 是LED控制信号，默认值为低电平，因此N型场效应管（N-Channel MOSFET）关闭，LED也熄灭。当SIG1变为高电平时，N型场效应管导通，LED亮起。

**SIG2** 连接到按钮引脚。由于有上拉电阻**，SIG2**的默认值为高电平。当您按下按钮时，电压被拉低**，SIG2**也变为低电平。

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

## 入门指南

:::提示
在这一部分，我们以Grove - 红色LED按钮为例。以下部分也适用于黄色和蓝色LED按钮。
:::

### 与Arduino互动

#### 硬件

**所需材料**

| Seeeduino V4.2 | 基础盾板 | Grove- 红色LED按钮 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/IMG_0068a.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html" target="_blank">立即获取</a>|

- **步骤 1.** 将Grove-红色LED按钮连接到Grove-基础盾板的**D3**端口。

- **步骤 2.** 将Grove-基础盾板插入Seeeduino。
- **步骤 3.** 通过USB线将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/red%20LED.jpg)

:::注意
如果我们没有Grove基础盾板，我们也可以直接将这个模块连接到Seeeduino，如下所示。
:::

| Seeeduino | Grove- 红色LED按钮 |
|---------------|-------------------------|
| 5V        | 红色线             |
| GND       | 黑色线             |
| SIG2      | 白色线             |
| SIG1      | 黄色线             |

#### 软件

:::注意如果你是第一次使用Arduino，我们强烈建议你在开始前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。

- **步骤 1.** 打开Arduino IDE并创建一个新文件，然后将以下代码复制到新文件中。

```C++
#include "Arduino.h"

//1: toggle mode, 2: follow mode
#define LED_MODE   1

const int ledPin = 3;      // the number of the LED pin, D3
const int buttonPin = 4;    // the number of the pushbutton pin, D4
const boolean breathMode = true;  // if or not the led lights as breath mode when it's on

// Variables will change:
int ledState = LOW;         // the current state of the output pin
int ledFadeValue = 0;
int ledFadeStep = 5;
int ledFadeInterval = 20;   //milliseconds
int buttonState;             // the current reading from the input pin
int lastButtonState = HIGH;   // the previous reading from the input pin

unsigned long lastDebounceTime = 0;  // the last time the output pin was toggled
unsigned long debounceDelay = 50;    // the debounce time; increase if the output flickers
unsigned long lastLedFadeTime = 0;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, ledState);
}

void loop() {
  int reading = digitalRead(buttonPin);

  // If the switch changed, due to noise or pressing:
  if (reading != lastButtonState) {
    // reset the debouncing timer
    lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
    // whatever the reading is at, it's been there for longer
    // than the debounce delay, so take it as the actual current state:

    // if the button state has changed:
    if (reading != buttonState) {
      buttonState = reading;

#if LED_MODE == 1
      if (buttonState == LOW) {  //button is pressed
          ledState = !ledState;
          ledFadeValue = 0;
          lastLedFadeTime = millis();
      }
#else
      if (buttonState == LOW) {  //button is pressed
        ledState = HIGH;
        ledFadeValue = 0;
        lastLedFadeTime = millis();
      } else {                   //button is released
        ledState = LOW;
      }
#endif
    }
  }

  // set the LED:
  if (breathMode && ledState != LOW) {
    if (millis() - lastLedFadeTime > ledFadeInterval) {
      lastLedFadeTime = millis();
      analogWrite(ledPin, ledFadeValue);
      ledFadeValue += ledFadeStep;
      if (ledFadeValue > 255){
        ledFadeValue = 255 - ledFadeStep;
        ledFadeStep = -ledFadeStep;
      } else if (ledFadeValue < 0) {
        ledFadeValue = 0;
        ledFadeStep = -ledFadeStep;
      }
    }
  } else {
    digitalWrite(ledPin, ledState);
  }

  lastButtonState = reading;
}

```

:::提示
在这个演示中，我们选择了模式1，即切换模式。你可以将第4行的<mark>#define LED_MODE 1</mark>改为<mark>#define LED_MODE 2</mark>来使用跟随模式。
:::

- **步骤 2.** 上传演示程序。如果你不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

- **步骤 3.** 现在，试着按下你的按钮，你会看到LED灯以渐亮渐灭的效果亮起。

它应该是这样的：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/result.gif"  /></p>

### 与Raspberry Pi互动

#### 硬件

- **步骤 1**. 本项目所需物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - 红色LED按钮 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/IMG_0068a.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html)|

- **步骤 2**. 将Grove Base Hat插入Raspberry Pi。
- **步骤 3**. 将红色LED按钮连接到Base Hat的D5端口。
- **步骤 4**. 通过USB线将Raspberry Pi连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/LED_Hat.jpg)

:::注意
在步骤3中，你可以将LED按钮连接到**任何GPIO端口**，但请确保你使用与相应端口号对应的命令。
:::

#### 软件

:::警告
如果你使用的是**运行Raspberrypi OS >= Bullseye的Raspberry Pi**，你必须**仅使用Python3**来执行此命令行。
:::

- **步骤 1**. 按照[设置软件](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation)来配置开发环境。
- **步骤 2**. 通过克隆grove.py库来下载源文件。

```
sudo pip3 install Seeed-grove.py
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令来运行代码。

```
cd grove.py/grove
sudo python3 grove_ryb_led_button.py 5

```

以下是 grove_ryb_led_button.py 代码。

```python

import time
from grove.button import Button
from grove.factory import Factory

class GroveLedButton(object):
    def __init__(self, pin):
        # High = light on
        self.__led = Factory.getOneLed("GPIO-HIGH", pin)
        # Low = pressed
        self.__btn = Factory.getButton("GPIO-LOW", pin + 1)
        self.__on_event = None
        self.__btn.on_event(self, GroveLedButton.__handle_event)

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


Grove = GroveLedButton

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.GPIO)
    pin = sh.argv2pin()

    ledbtn = GroveLedButton(pin)

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
如果一切顺利，当你按下按钮时，LED会亮起；长按时，LED会熄灭。如果你双击LED按钮，LED将会闪烁。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_ryb_led_button.py 5
Hat Name = 'Grove Base Hat RPi'
turn on  LED
turn on  LED
blink    LED
turn on  LED
turn off LED
^CTraceback (most recent call last):
  File "grove_ryb_led_button.py", line 101, in <module>
    main()
  File "grove_ryb_led_button.py", line 97, in main
    time.sleep(1)
KeyboardInterrupt

```

你可以通过简单地按下 ++ctrl+c++ 来退出这个程序。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/res/Grove-Red_LED_Button.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

- **[Zip]** [Grove-LED 按钮 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/res/Grove-Red_LED_Button.zip)

## 技术支持与产品讨论

<br /> 感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
