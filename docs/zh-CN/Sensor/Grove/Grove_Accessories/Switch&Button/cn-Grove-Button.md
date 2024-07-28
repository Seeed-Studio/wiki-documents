---
description: Grove - 按钮
title: Grove - 按钮
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Button
last_update:
  date: 03/23/2024
  author: WuFeifei
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/Button.jpg" /></div>

Grove - 按钮是一个瞬时按钮。它包含一个独立的“瞬时开关”按钮。“瞬时”意味着当按钮被释放后，它会自动回弹。按钮在被按下时输出高电平信号，释放时输出低电平信号。丝印层上标记的Sig代表信号，而NC表示完全不使用。这种按钮有两种版本，如图片所示。唯一的区别是Grove插座的方向。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove_Button/image/300px-Get_One_Now_Banner.png" /></a></p>

## 版本

| 产品版本     | 变更内容 | 发布日期       |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Button | 初始版本 | 2010年11月25日 |

## 特点

- 易于使用的瞬时开/关按钮
- 使用标准4针Grove电缆

:::提示
更多关于Grove模块的信息，请参考[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 规格参数

| 参数     | 数值/范围     |
| -------- | ------------- |
| 工作电压 | 3.3/5V        |
| 电气寿命 | 200,000次循环 |
| 操作力   | 100 ± 50gf    |
| 工作温度 | -25℃至+70℃    |
| 尺寸     | 20mmX20mm     |

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div> |

:::警告
上述列出的支持平台只是表示模块在软件或理论上的兼容性。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/示例代码。因此，用户需要编写自己的软件库。
:::

## 入门指南

### 与Arduino配合使用

#### 硬件

- 步骤1. 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove - Button |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Button-p-766.html)|

- 步骤2. 将Grove-Button连接到Grove-Base Shield的D2端口。
- 步骤3. 将Grove-Base Shield插入到Seeeduino中。
- 步骤4. 通过USB电缆将Seeeduino连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/seeeduino_button.jpg" /></div>

:::注意
如果没有Grove Base Shield，我们也可以按照下面的方式直接将Grove-Button连接到Seeeduino。
:::

| Seeeduino | Grove-Button |
|---------------|-------------------------|
| 5V        | 红色         |
| GND       | 黑色         |
| 未连接    | 白色         |
| D2        | 黄色         |

#### 软件

- 步骤1. 将代码复制到Arduino IDE中并上传。

```c
const int buttonPin = 2;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
    // initialize the LED pin as an output:
    pinMode(ledPin, OUTPUT);
    // initialize the pushbutton pin as an input:
    pinMode(buttonPin, INPUT);
}

void loop(){
    // read the state of the pushbutton value:
    buttonState = digitalRead(buttonPin);

    // check if the pushbutton is pressed.
    // if it is, the buttonState is HIGH:
    if (buttonState == HIGH) {
        // turn LED on:
        digitalWrite(ledPin, HIGH);
    }
    else {
        // turn LED off:
        digitalWrite(ledPin, LOW);
    }
}
```

- 步骤2. 我们将看到板载的Pin13 LED灯闪烁。

### 使用Codecraft编程

#### 硬件

**步骤1.** 将一个Grove - Button连接到Base Shield的D2端口。

**步骤2.** 将Base Shield插入到你的Seeeduino/Arduino中。

**步骤3.** 通过USB电缆将Seeeduino/Arduino连接到你的电脑。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖入工作区。

:::提示
如果你是第一次使用Codecraft，也请查看[Codecraft使用Arduino的指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤2.** 按照下面的图片拖拽代码块，或者打开可以在本页面末尾下载的cdc文件。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/cc_Button.png" /></div>

将程序上传到你的Arduino/Seeeduino。

提示成功
    当代码上传完成后，按下按钮时，Arduino/Seeeduino板上的LED将会亮起。

### 使用树莓派（配合Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤1**. 本项目所需物品：

| Raspberry pi | 树莓派 Grove Base Hat | Grove - Button |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Button-p-766.html)|

- **步骤2**. 将Grove Base Hat插入树莓派。
- **步骤3**. 将Grove - Button连接到Base Hat的 PWM端口（端口12）。
- **步骤4**. 通过USB电缆将树莓派连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/with_hat.jpg" /></div>

#### 软件

:::警告
如果你使用的是**带有Raspberrypi OS >= Bullseye的树莓派**，你必须**仅使用Python3**来执行这个命令行。
:::

- **步骤1**. 按照[设置软件](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation)来配置开发环境。
- **步骤2**. 通过克隆grove.py库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤3**. 执行下面的命令来运行代码。

```
cd grove.py/grove
python3 grove_button.py 12
```

如果你将红色LED连接到Base Hat的不同端口，而不是执行**python grove_led.py 12**，你应该运行以下命令。

```
python3 grove_button.py portnumber
```

下面是grove_button.py的代码。

```python

import time
from grove.button import Button
from grove.factory import Factory


class GroveButton(object):
    def __init__(self, pin):
        # High = pressed
        self.__btn = Factory.getButton("GPIO-HIGH", pin)
        self.__last_time = time.time()
        self.__on_press = None
        self.__on_release = None
        self.__btn.on_event(self, GroveButton.__handle_event)

    @property
    def on_press(self):
        return self.__on_press

    @on_press.setter
    def on_press(self, callback):
        if not callable(callback):
            return
        self.__on_press = callback

    @property
    def on_release(self):
        return self.__on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return
        self.__on_release = callback

    def __handle_event(self, evt):
        dt, self.__last_time = evt["time"] - self.__last_time, evt["time"]
        # print("event index:{} event:{} pressed:{}".format(evt["index"], evt["code"], evt["pressed"]))
        if evt["code"] == Button.EV_LEVEL_CHANGED:
            if evt["pressed"]:
                if callable(self.__on_press):
                    self.__on_press(dt)
            else:
                if callable(self.__on_release):
                    self.__on_release(dt)


Grove = GroveButton

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.GPIO)
    pin = sh.argv2pin()

    button = GroveButton(pin)

    def on_press(t):
        print('Button is pressed')
    def on_release(t):
        print("Button is released, pressed for {0} seconds".format(round(t,6)))

    button.on_press = on_press
    button.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::提示成功
如果一切顺利，你将能够看到以下结果：
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_button.py 12
Hat Name = 'Grove Base Hat RPi'
Button is pressed
Button is pressed
Button is pressed
Button is pressed
Button is pressed
Button is pressed
Button is released, pressed for 0.002685 seconds
Button is pressed
Button is released, pressed for 0.219019 seconds
Button is pressed
Button is released, pressed for 0.001372 seconds
Button is pressed
Button is pressed
Button is released, pressed for 0.043143 seconds
Button is pressed
Button is released, pressed for 1.083292 seconds
^CTraceback (most recent call last):
  File "grove_button.py", line 103, in <module>
    main()
  File "grove_button.py", line 99, in main
    time.sleep(1)
KeyboardInterrupt


```

你可以按`ctrl`+`c`来退出这个程序。

### 使用树莓派（配合GrovePi_Plus）

#### 硬件

- 步骤1. 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove - Button |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Button-p-766.html)|

- 步骤2. 将GrovePi_Plus插入树莓派。
- 步骤3. 将Grove-Button连接到GrovePi_Plus的D3端口。
- 步骤4. 通过USB电缆将树莓派连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/rasp_button.jpg" /></div>

#### 软件

:::警告
如果你使用的是**带有Raspberrypi OS >= Bullseye的树莓派**，你必须**仅使用Python3**来执行这个命令行。
:::

- 步骤1. 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)来配置开发环境。
- 步骤2. 从Github仓库克隆代码。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- 步骤3. 执行以下命令。

```
cd ~/GrovePi/Software/Python
python3 grove_button.py
```

下面是grove_button.py的代码。

```python
import time
import grovepi

# Connect the Grove Button to digital port D3
# SIG,NC,VCC,GND
button = 3

grovepi.pinMode(button,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(button))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- 步骤4. 我们会看到按钮的开启和关闭。

```
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_button.py
0
1
1
1
1
0
0
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Button/resources/Grove_-_Button_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle和PDF]** [Grove-Button Eagle文件](https://files.seeedstudio.com/wiki/Grove_Button/resources/Grove_-_Button_v1.0_Source_File.zip)

- **[更多阅读]** [木制激光枪](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)
- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove_Button/res/Grove_Button_CDC_File.zip)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/gun.jpg" /></div>

受到《守望先锋》的启发，我们制作了一款非常酷的木制激光枪玩具，这些天来玩得非常开心！

这款木制激光枪和枪靶都是基于名为Seeeduino Lotus的Arduino板。激光枪上的激光发射器被控制来发射激光脉冲以“激活”枪靶。枪靶上有三个光传感器来检测激光脉冲。看起来很简单对吧？如果你对我们的项目感兴趣，请为自己或孩子做一个吧！作为圣诞礼物，花一天时间DIY它是值得的。

## 项目

**Grove - 按钮与LED灯串简介**：初学者示例 - 我打赌初学者在完成这个项目后会露出笑容 - 向我发送一张自拍吧！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-button-led-string-light-f7e4d6/embed' width='350'></iframe>

**使用Grove按钮控制Grove LED**：如何连接和使用Grove按钮来控制Grove LED插座套件。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-button-to-control-grove-led-96d00b/embed' width='350'></iframe>

**按钮和LED Grove模块**：

<iframe width="560" height="315" src="https://www.youtube.com/embed/RCtsxwx4OaA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/78lVn_-oYaY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
