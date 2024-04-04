---
title: Grove - 无源蜂鸣器
description: Grove - 无源蜂鸣器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Passive-Buzzer/
slug: /cn/Grove-Passive-Buzzer
last_update:
  date: 03/21/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/products/107020109/img/107020109_wiki.png)

这是一个3-5V的无源蜂鸣器。你可以通过改变PWM频率来发出不同的蜂鸣声，从而创造出“蜂鸣音乐”。此外，蜂鸣器还可以作为安全应用的报警器。所以，赶快入手一个，开始你的项目吧！

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## 特点

- 无源：可调无源蜂鸣器
- 接口：Grove

## 规格

|项目|值|
|---|---|
|电压范围|3V–5V|
|谐振频率|2700 Hz|
|声响输出|> 80dB|
|工作温度|-20-70 °C|
| 尺寸     |           |
|重量|3g|
|电池|不包含|

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 玩转 Arduino

#### 所需材料

|Seeeduino XIAO|Grove 面包板|Grove 无源蜂鸣器|
|--------|-----------------------|-------------------------------------------------------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[立即获取](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[立即获取](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|

#### 硬件连接

![](https://files.seeedstudio.com/products/107020109/img/wiki_buzzer_xiao.jpg)

面包板上的Grove接口和Grove无源蜂鸣器上的Grove接口通过Grove线连接。

#### 软件

- **步骤** 将下面的代码复制到Arduino IDE并上传。如果您不知道如何更新代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

#### 代码示例1 - 简单获取蜂鸣声

```c++
int buzzer = 5; // Buzzer connect with Pin 5
int frequency = 2700; //reach the Resonant Frequency
int cycle = 1000000/frequency;  
void setup()
{
Serial.begin(9600); // set the baud rate
pinMode(buzzer,OUTPUT); // set buzzer as output
}

void loop() 
{
  digitalWrite(buzzer,HIGH);
  delayMicroseconds(cycle/2);
  digitalWrite(buzzer,LOW);
  delayMicroseconds(cycle/2);  // run the PMW cycle
}
```

- **步骤 2** 将代码上传到开发板后，您将听到蜂鸣器发出蜂鸣声。

#### 代码示例2 - 使用蜂鸣器播放音乐

```c++
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
 int buzzer = 5; //set the buzzer Pin
 void setup()
 {
   pinMode(buzzer, OUTPUT); // set the buzzer as output mode
   length = sizeof(tune) / sizeof(tune[0]); //count the number of note
 }
 
 void loop()
 {
    for (int x = 0; x < length; x++) //"sing" the note one by one
    {
     tone(buzzer, tune[x]); //output the "x" note
     delay(400 * duration[x]); //rythem of the music,it can be tuned fast and slow by change the number"400"
     noTone(buzzer);//stop the current note and go to the next note
    } 
    delay(5000);//after playing the whole song, delay for 5 sec
 }    
```

- **步骤 3** 将代码上传到开发板后，您可以从蜂鸣器中听到音乐。

### 玩转 树莓派

#### 所需材料

|树莓派 4B(4GB)|树莓派 Grove Base Hat|Grove 数字PIR人体运动传感器|
|--------|-----------------------|-------------------------------------------------------------|
|![](https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即获取](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|

#### 硬件连接

![](https://files.seeedstudio.com/products/107020109/img/Hardware_connection_raspberry_buzzer.jpg)

将蜂鸣器与Grove Base Hat上的“PWM”端口连接。

#### 软件代码

- **步骤 1** 在您的树莓派上安装Grove.py。

一键安装，快速开始，您可以使用下面的单个命令来安装/更新所有依赖项和最新的grove.py。

:::注意
     如果您使用的是**带有Raspberrypi OS >= Bullseye的树莓派**，则**无法使用此命令行**。
:::

```python
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::成功后
       如果一切顺利，您将看到以下通知。

        ```
        Successfully installed grove.py-0.5
        #######################################################
        Lastest Grove.py from github install complete   !!!!!
        #######################################################
        ``` -
:::

除了使用一键安装外，您还可以逐步安装所有依赖项和最新的grove.py。

:::注意
     如果您使用的是**带有Raspberrypi OS >= Bullseye的树莓派**，则**只能使用Python3**来执行此命令行。
:::

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **步骤 2** 创建一个Python文件来编写代码。

```
cd grove.py
nano example.py
```

- **步骤 3** 将以下代码复制到Python文件中

```
#!/usr/bin/env python
import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

def main():
    # Grove - Buzzer connected to PWM port
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))

    CHORDS = [upmBuzzer.BUZZER_DO， upmBuzzer.BUZZER_RE， upmBuzzer.BUZZER_MI， 
        upmBuzzer.BUZZER_FA， upmBuzzer.BUZZER_SOL， upmBuzzer.BUZZER_LA， 
        upmBuzzer.BUZZER_SI]
    for i in range(0， len(CHORDS)):
        buzzer.playSound(CHORDS[i]， 500000)
        time.sleep(0.1)

    del buzzer
    print('application exiting...')

if __name__ == '__main__':
    main()
```

- **步骤 4** 运行程序

```
sudo chmod +x example.py
sudo ./example.py
```

如果一切顺利，您将听到“do，re，mi，fa，so，la，xi”的音调。

## 在线电路图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [MLT_8530_数据手册](https://files.seeedstudio.com/products/107020109/document/MLT_8530_datasheet.pdf)
- **[PDF]** [硬件电路图](https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_SCH_190925.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
