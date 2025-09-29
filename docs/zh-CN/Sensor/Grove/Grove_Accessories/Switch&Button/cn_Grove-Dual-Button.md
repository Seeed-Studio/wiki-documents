---
description: Grove 双按钮
title: Grove 双按钮
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Dual-Button
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/products/111020103/img/111020103wiki.png)

Grove - 双按钮包含两个按钮，允许您通过一个 Grove 模块控制两个信号通道。提供了四种不同颜色的按键帽，您可以根据需要自由调整颜色组合。

按钮通过 GPIO 数字引脚简单驱动。当按钮被按下时，引脚会从按钮接收到低电平信号；另一方面，当按钮处于松开状态时，引脚将始终保持高电平信号，直到按钮被按下。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## 特性

- 紧凑的模块化设计，减少了线缆连接，将两个按钮集成到一个 Grove 模块中
- 提供不同颜色的按键帽，可根据需要自由调整颜色组合

## 规格

|项目|值|
|---|---|
|电压范围|3V–5V|
|接口|Grove|
|尺寸|20mm * 40mm|
|电池|不包含|

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 使用 Arduino 入门

#### 所需材料

|Seeeduino Nano|Grove Arduino Nano 扩展板|Grove 无源蜂鸣器|Grove LED 套件|Grove 双按钮|
|--------|-------|----|-------|----------------|
|![](https://files.seeedstudio.com/products/102010268/img/seeeduino-Nano-thumbnail.png)|![](https://files.seeedstudio.com/products/103100124/img/Grove-Shoeld-for-Arduino-Nano-thumbnail.png)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|![](https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg)|![](https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)|[立即购买](https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html)|[立即购买](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|[立即购买](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[立即购买](https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html)|

#### 硬件连接

![](https://files.seeedstudio.com/products/111020103/img/wiki_nano_button.jpg)

Grove 双按钮连接到 Grove 扩展板的 "D2" 接口，Grove 无源蜂鸣器连接到 "D4" 接口，Grove LED 套件连接到 "D6" 接口。

#### 软件

- **步骤1** 将以下代码复制到 Arduino IDE 并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```cpp
 //设置对应频率的音符
 #define NOTE_D0 0
 #define NOTE_D1 294
 #define NOTE_D2 330
 #define NOTE_D3 350
 #define NOTE_D4 393
 #define NOTE_D5 441
 #define NOTE_D6 495
 #define NOTE_D7 556
 
 #define NOTE_DL1 147
 #define NOTE_DL2 165
 #define NOTE_DL3 175
 #define NOTE_DL4 196
 #define NOTE_DL5 221
 #define NOTE_DL6 248
 #define NOTE_DL7 278
 
 #define NOTE_DH1 589
 #define NOTE_DH2 661
 #define NOTE_DH3 700
 #define NOTE_DH4 786
 #define NOTE_DH5 882
 #define NOTE_DH6 990
 #define NOTE_DH7 112
 
 #define WHOLE 1
 #define HALF 0.5
 #define QUARTER 0.25
 #define EIGHTH 0.25
 #define SIXTEENTH 0.625
 
 //整首歌的音符部分
 int tune[] =
 {
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0,
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0, NOTE_D6,
   NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0, NOTE_D6,
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0,
 
   NOTE_D1, NOTE_D1, NOTE_D3,
   NOTE_D1, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_D6, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,
   NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_DH1, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,
   NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,
   NOTE_D7, NOTE_D7, NOTE_D5, NOTE_D3,
   NOTE_D5,
   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,
   NOTE_D3, NOTE_D3, NOTE_D1, NOTE_DL6,
   NOTE_D1,
   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_DH1, NOTE_D0, NOTE_D7, NOTE_D5,
   NOTE_D6,
 };
 
 //每个音符的持续时间
 float duration[] =
 {
   1, 1, 0.5, 0.5, 1,
   0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5,
   0.5, 1, 0.5, 1, 0.5, 0.5,
   0.5, 0.5, 0.5, 0.5, 1, 1,
 
   1, 1, 1 + 1,
   0.5, 1, 1 + 0.5, 1,
   1, 1, 0.5, 0.5, 1,
   0.5, 1, 1 + 0.5, 1,
   0.5, 0.5, 0.5, 0.5, 1 + 1,
   0.5, 1, 1 + 0.5, 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1,
   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,
   0.5, 1, 0.5, 1, 1,
   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,
   0.5, 1, 0.5, 1, 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1,
   0.5, 1, 0.5, 1 + 1,
   0.5, 1, 0.5, 1 + 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1
 };
 
 int length;//定义音符数量
 int tonePin = 4; //设置蜂鸣器引脚
 int button1 = 2; //设置按钮1引脚
 int button2 = 3; //设置按钮2引脚
 int LED = 6;  //设置LED引脚
 bool state1 = 1; //设置按钮1状态
 bool state2 = 1; //设置按钮2状态
 void setup()
 {
   pinMode(tonePin, OUTPUT); // 设置蜂鸣器为输出模式
   pinMode(button1,INPUT);
   pinMode(button2,INPUT);
   pinMode(LED,OUTPUT);
   length = sizeof(tune) / sizeof(tune[0]); //计算音符数量
 }
 
 void loop()
 {
  state1 = digitalRead(button1);
  state2 = digitalRead(button2);
  if (state1 == 0)
  {
    digitalWrite(LED,HIGH);
    }
  else
  {
    digitalWrite(LED,LOW);
    } 
  if (state2 == 0)
  {
       for (int x = 0; x < length; x++) //"逐个播放"音符
     {
     tone(tonePin, tune[x]); //输出当前音符
     delay(400 * duration[x]); //音乐节奏，可以通过改变数字"400"调整快慢
     noTone(tonePin);//停止当前音符并播放下一个音符
    } 
  } 
  else
  {
    digitalWrite(tonePin,LOW);
    }
  
 }
```

- **步骤2** 按下每个按钮以控制 LED 和蜂鸣器。

### 使用 Raspberry Pi 入门

#### 所需材料

|Raspberry Pi 4B(4GB)|Grove 树莓派底座扩展板|Grove 无源蜂鸣器|Grove LED 套件|Grove 双按钮|
|--------|-----|------|------|-----|
|![](https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|![](https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg))|![](https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即购买](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|[立即购买](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[立即购买](https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html)|

#### 硬件连接

![](https://files.seeedstudio.com/products/111020103/img/wiki_raspberry_button.jpg)

将无源蜂鸣器连接到 PWM 引脚 "12"，按钮连接到 "D5"，LED 连接到 "D16"。

#### 代码

- **步骤1** 在你的 Raspberry Pi 上安装 Grove.py。

只需一条命令即可完成一键安装或更新所有依赖项和最新的 grove.py。

:::caution
如果你使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，你 **不能使用此命令行**。
:::

```
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::tip
如果一切顺利，你将看到以下提示：

```
    Successfully installed grove.py-0.5
    #######################################################
    Lastest Grove.py from github install complete   !!!!!
    #######################################################
```

:::
<br />
除了上述一键安装方法，你还可以逐步安装所有依赖项和最新的 grove.py。

:::caution
如果你使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，你必须 **仅使用 Python3** 执行以下命令。
:::

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **步骤2** 为代码创建一个 Python 文件。

```
cd grove.py
nano button.py
```

- **步骤3** 将以下代码复制到 Python 文件中

```python
#!/usr/bin/env python
import time
from grove.factory import Factory
from grove.grove_led import GroveLed

led = GroveLed(16)
button1 = Factory.getButton("GPIO-HIGH", 5)
button2 = Factory.getButton("GPIO-HIGH", 6)
buzzer = Factory.getGpioWrapper("Buzzer", 12)

while True:
    if button1.is_pressed():
        led.on()
    else:
        led.off()
    if button2.is_pressed():
        buzzer.on() 
    else:
        buzzer.off()           
```

- **步骤4** 运行程序

```
sudo chmod +x button.py
sudo ./button.py
```

如果一切顺利，你可以通过双按钮控制 LED 和蜂鸣器。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [硬件原理图](https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_v1_0_SCH_190916.pdf)

## 技术支持与产品讨论

<br />
感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>