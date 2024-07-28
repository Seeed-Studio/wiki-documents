---
description: Grove 双按钮
title: Grove 双按钮
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Dual-Button
last_update:
  date: 03/23/2024
  author: WuFeifei
---
<!-- ---
name: Grove Dual Button
category: Grove Inputs
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020103
tags:
--- -->

![](https://files.seeedstudio.com/products/111020103/img/111020103wiki.png)

Grove - 双按钮包含两个按钮，使用一个Grove模块就能控制两个信号通道。提供4种不同颜色的键帽，您可以根据需要自由调整颜色组合。

按钮是通过GPIO数字引脚驱动的。当按钮被按下时，引脚可以从按钮接收到一个低电平信号；另一方面，当按钮处于未按下状态时，引脚将始终保持高电平信号，直到它被按下。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## 特点

- 紧凑的模块化设计，一个Grove模块中包含两个按钮，减少了接线数量
- 提供不同颜色的键帽，可根据需要自由调整颜色组合

## 规格

| 项目     | 值          |
|---|---|
| 电压范围 | 3V–5V       |
| 接口     | Grove       |
| 尺寸     | 20mm * 40mm |
| 电池     | 不包含      |

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### Arduino入门

#### 所需材料

|Seeeduino Nano|Arduino Nano的Grove Shield|Grove 无源蜂鸣器|Grove LED 套件|Grove 双按钮|
|--------|-------|----|-------|----------------|
|![](https://files.seeedstudio.com/products/102010268/img/seeeduino-Nano-thumbnail.png)|![](https://files.seeedstudio.com/products/103100124/img/Grove-Shoeld-for-Arduino-Nano-thumbnail.png)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|![](https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg)|![](https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)|[立即获取](https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html)|[立即获取](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|[立即获取](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[立即获取](https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html)|

#### 硬件连接

![](https://files.seeedstudio.com/products/111020103/img/wiki_nano_button.jpg)

Grove双按钮与Grove Shield上的“D2”接口连接，Grove无源蜂鸣器与“D4”接口连接，Grove LED套件与“D6”接口连接。

#### 软件

- **步骤1** 将以下代码复制到Arduino IDE并上传。如果您不知道如何更新代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

```cpp
 //set the corresponding notes with frequency
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
 
 //the note part of the whole song
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
 
 //the duration time of each note
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
 
 int length;//define the number of notes
 int tonePin = 4; //set the buzzer Pin
 int button1 = 2; //set the button1 pin
 int button2 = 3; //set the button2 pin
 int LED = 6;  //set the LED pin
 bool state1 = 1; //set button1 state
 bool state2 = 1; //set button2 state
 void setup()
 {
   pinMode(tonePin, OUTPUT); // set the buzzer as output mode
   pinMode(button1,INPUT);
   pinMode(button2,INPUT);
   pinMode(LED,OUTPUT);
   length = sizeof(tune) / sizeof(tune[0]); //count the number of note
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
       for (int x = 0; x < length; x++) //"sing" the note one by one
     {
     tone(tonePin, tune[x]); //output the "x" note
     delay(400 * duration[x]); //rythem of the music,it can be tuned fast and slow by change the number"400"
     noTone(tonePin);//stop the current note and go to the next note
    } 
  } 
  else
  {
    digitalWrite(tonePin,LOW);
    }
  
 }
```

- **步骤2** 按下每个按钮来控制LED和蜂鸣器。

### Raspberry Pi入门

#### 所需材料

|Raspberry Pi 4B(4GB)|树莓派用Grove Base Hat|Grove 无源蜂鸣器|Grove LED 套件|Grove 双按钮|
|--------|-----|------|------|-----|
|![](https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|![](https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg))|![](https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即获取](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|[立即获取](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[立即获取](https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html)|

#### 硬件连接

![](https://files.seeedstudio.com/products/111020103/img/wiki_raspberry_button.jpg)

将无源蜂鸣器连接到PWM引脚“12”，按钮连接到“D5”，LED连接到“D16”。

#### 代码

- **步骤1** 在您的Raspberry上安装Grove.py。

一键安装，快速开始，无论您怎么称呼，只需使用下面的单条命令，我们就可以安装/更新所有依赖项和最新的grove.py。

:::注意
如果您使用的是**带有Raspberrypi OS >= Bullseye的Raspberry Pi**，则**无法使用此命令行**。
:::

```
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::提示成功
如果一切顺利，您将会看到以下通知。

```
    Successfully installed grove.py-0.5
    #######################################################
    Lastest Grove.py from github install complete   !!!!!
    #######################################################
```

:::
<br />
除了使用一键安装，您还可以逐步安装所有依赖项和最新版的grove.py。

:::注意
如果您使用的是**带有Raspberrypi OS >= Bullseye的Raspberry Pi**，则**只能使用Python3**来执行此命令行。
:::

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **步骤2** 为代码创建一个Python文件。

```
cd grove.py
nano button.py
```

- **步骤3** 将以下代码复制到Python文件中。

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

如果一切顺利，您就可以通过双按钮来控制LED和蜂鸣器了。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [硬件原理图](https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_v1_0_SCH_190916.pdf)

## 技术支持与产品讨论

<br /> 感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
