---
description: Grove-LED 按钮
title: Grove-LED 按钮
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-LED_Button
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/main.jpg)

Grove - LED 按钮由 Grove - 黄色按钮、Grove - 蓝色 LED 按钮和 Grove - 红色 LED 按钮组成。该按钮稳定可靠，使用寿命长达 100,000 次。  
通过内置的 LED，你可以将其应用于许多有趣的项目，使用 LED 显示按钮的状态非常实用。我们使用高质量的 N-Channel MOSFET 来控制 LED，以确保高开关速度和低功耗。总之，你想要一些非常棒的按钮吗？这里就是你的选择……

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Yellow-LED-Button-p-3101.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/Y.png" height="48" width="300" /></a></p>
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/B.png" height="48" width="300" /></a></p>
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/R.png"  height="48" width="300" /></a></p>

## 版本

| 产品版本         | 变更内容                                                                                              | 发布日期      |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED 按钮 | 初始版本                                                                                              | 2018年6月     |

## 版本

| 产品版本         | 变更内容                                                                                              | 发布日期      |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED 按钮 | 初始版本                                                                                              | 2018年6月     |

## 版本

| 产品版本         | 变更内容                                                                                              | 发布日期      |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED 按钮 | 初始版本                                                                                              | 2018年6月     |

## 特性

- 长使用寿命
- 易于使用
- Grove 数字接口

## 规格

| 项目                | 参数值          |
|---------------------|-----------------|
| 工作电压           | 3.3V/5V         |
| 无负载操作寿命     | 100,000 次      |
| LED 额定电流       | 50mA            |
| 按压电阻^1^        | &lt;100mΩ       |
| 释放电阻^2^        | &gt;100MΩ       |
| 尺寸               | 长: 40mm 宽: 20mm 高: 13mm |
| 重量               | 4.3g            |
| 包装尺寸           | 长: 140mm 宽: 90mm 高: 10mm |
| 毛重               | 11g             |

:::tip
1,2- 如果你想测量电阻，请将按键帽从板上取下。否则，你将测得的是板的等效电阻值，而不是按键帽的真实电阻值。
:::

## 硬件概述

### 引脚图

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/pin_map.jpg)

### 原理图

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/schematic.jpg)

**SIG1** 是 LED 控制信号，默认值为低电平，因此 N-Channel MOSFET 处于关闭状态，LED 也关闭。当 **SIG1** 变为高电平时，N-Channel MOSFET 打开，LED 点亮。

**SIG2** 连接到按钮引脚。由于有上拉电阻，**SIG2** 的默认值为高电平。当按下按钮时，电压被拉低，**SIG2** 变为低电平。

## 支持的平台

| Arduino                                                                                             | 树莓派                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

## 入门指南

:::tip
在本部分中，我们以 Grove - 红色 LED 按钮为例。以下内容同样适用于黄色和蓝色版本。
:::

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove- 红色 LED 按钮 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/IMG_0068a.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html" target="_blank">立即购买</a>|

- **步骤 1.** 将 Grove- 红色 LED 按钮连接到 Grove-Base Shield 的 **D3** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/red%20LED.jpg)

:::note
如果没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino     |  Grove- 红色 LED 按钮           |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                   |
| SIG2          | 白色                   |
| SIG1          | 黄色                   |

#### 软件

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 打开 Arduino IDE 并创建一个新文件，然后将以下代码复制到新文件中。

```cpp
#include "Arduino.h"

//1: toggle mode, 2: follow mode
#define LED_MODE   1

const int ledPin = 3;      // LED 引脚编号，D3
const int buttonPin = 4;    // 按钮引脚编号，D4
const boolean breathMode = true;  // LED 是否以呼吸模式点亮

// 变量将会改变：
int ledState = LOW;         // 输出引脚的当前状态
int ledFadeValue = 0;
int ledFadeStep = 5;
int ledFadeInterval = 20;   // 毫秒
int buttonState;             // 输入引脚的当前读取状态
int lastButtonState = HIGH;   // 输入引脚的上一次读取状态

unsigned long lastDebounceTime = 0;  // 上一次切换输出引脚的时间
unsigned long debounceDelay = 50;    // 去抖时间；如果输出闪烁，请增加此值
unsigned long lastLedFadeTime = 0;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, ledState);
}

void loop() {
  int reading = digitalRead(buttonPin);

  // 如果开关状态发生变化（由于噪声或按压）：
  if (reading != lastButtonState) {
    // 重置去抖计时器
    lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
    // 当前读取状态已经持续超过去抖延迟时间，因此将其视为实际状态：

    // 如果按钮状态发生变化：
    if (reading != buttonState) {
      buttonState = reading;

#if LED_MODE == 1
      if (buttonState == LOW) {  // 按钮被按下
          ledState = !ledState;
          ledFadeValue = 0;
          lastLedFadeTime = millis();
      }
#else
      if (buttonState == LOW) {  // 按钮被按下
        ledState = HIGH;
        ledFadeValue = 0;
        lastLedFadeTime = millis();
      } else {                   // 按钮被释放
        ledState = LOW;
      }
#endif
    }
  }

  // 设置 LED：
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

:::tip
在本演示中，我们选择了模式 1，即切换模式。您可以将第 4 行的 <mark>#define LED_MODE   1</mark> 更改为 <mark>#define LED_MODE   2</mark> 来使用跟随模式。
:::

- **步骤 2.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 3.** 现在，尝试按下按钮，您会看到 LED 灯以渐亮/渐暗的效果点亮。

效果如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/result.gif"  /></p>

### 使用 Raspberry Pi

#### 硬件

- **步骤 1.** 本项目中使用的物品：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Red LED Button |
|--------------|------------------------------|----------------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/IMG_0068a.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html)|

- **步骤 2.** 将 Grove Base Hat 插入 Raspberry Pi。
- **步骤 3.** 将红色 LED 按钮连接到 Base Hat 的 D5 端口。
- **步骤 4.** 通过 USB 数据线将 Raspberry Pi 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/LED_Hat.jpg)

:::note
对于步骤 3，您可以将 LED 按钮连接到 **任何 GPIO 端口**，但请确保更改命令以匹配相应的端口号。
:::

#### 软件

:::caution
如果您使用的是 **Raspberry Pi 且 Raspberry Pi OS >= Bullseye**，您必须仅使用 Python3 执行以下命令。
:::

- **步骤 1.** 按照 [设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2.** 通过克隆 grove.py 库下载源文件。

```
sudo pip3 install Seeed-grove.py
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3.** 执行以下命令运行代码。

```
cd grove.py/grove
sudo python3 grove_ryb_led_button.py 5

```

以下是 grove_ryb_led_button.py 的代码。

```python

import time
from grove.button import Button
from grove.factory import Factory

class GroveLedButton(object):
    def __init__(self, pin):
        # 高电平 = 灯亮
        self.__led = Factory.getOneLed("GPIO-HIGH", pin)
        # 低电平 = 按下
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

    # 删除下面的 ''' 对以开始实验
    '''
    # 自定义事件处理
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
如果一切正常，您将能够看到按下按钮时 LED 点亮，长按时 LED 熄灭。如果双击 LED 按钮，LED 将闪烁。
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

您可以通过按下 ++ctrl+c++ 退出此程序。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/res/Grove-Red_LED_Button.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove-LED 按钮 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/res/Grove-Red_LED_Button.zip)

## 技术支持与产品讨论

<br />
感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>