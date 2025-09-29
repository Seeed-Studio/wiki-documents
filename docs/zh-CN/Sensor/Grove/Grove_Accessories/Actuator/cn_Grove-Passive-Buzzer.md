---
title: Grove - 无源蜂鸣器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Passive-Buzzer/
slug: /cn/Grove-Passive-Buzzer
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/products/107020109/img/107020109_wiki.png)

这是一个3-5V的无源蜂鸣器。您可以通过改变PWM频率来获得不同的蜂鸣声，从而实现“蜂鸣器音乐”。此外，该蜂鸣器还可以用作安全应用中的报警器。快来获取一个，开始您的项目吧！

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## 特性

- 无源：可调节的无源蜂鸣器
- 接口：Grove

## 规格

| 项目 | 参数 |
|---|---|
| 电压范围 | 3V–5V |
| 谐振频率 | 2700 Hz |
| 声音输出 | > 80dB |
| 工作温度 | -20-70 °C |
| 尺寸 | 20mm * 20mm * 10mm |
| 重量 | 3g |
| 电池 | 不包含 |

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 使用 Arduino

#### 所需材料

| Seeeduino XIAO | Grove 面包板 | Grove 无源蜂鸣器 |
|--------|-----------------------|-------------------------------------------------------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[立即购买](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[立即购买](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|

#### 硬件连接

![](https://files.seeedstudio.com/products/107020109/img/wiki_buzzer_xiao.jpg)

通过 Grove 电缆将面包板上的 Grove 接口与 Grove 无源蜂鸣器连接。

#### 软件

- **步骤1** 将以下代码复制到 Arduino IDE 并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

#### 示例代码1 - 简单的蜂鸣声

```cpp
int buzzer = 5; // 蜂鸣器连接到引脚5
int frequency = 2700; // 达到谐振频率
int cycle = 1000000/frequency;  
void setup()
{
Serial.begin(9600); // 设置波特率
pinMode(buzzer,OUTPUT); // 设置蜂鸣器为输出模式
}

void loop() 
{
  digitalWrite(buzzer,HIGH);
  delayMicroseconds(cycle/2);
  digitalWrite(buzzer,LOW);
  delayMicroseconds(cycle/2);  // 运行PWM周期
}
```

- **步骤2** 将代码上传到板子后，您将听到蜂鸣器发出蜂鸣声。

#### 示例代码2 - 使用蜂鸣器播放音乐

```cpp
 // 设置对应频率的音符
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
 
 // 整首歌的音符部分
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
 
 // 每个音符的持续时间
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
 
 int length;// 定义音符数量
 int buzzer = 5; // 设置蜂鸣器引脚
 void setup()
 {
   pinMode(buzzer, OUTPUT); // 设置蜂鸣器为输出模式
   length = sizeof(tune) / sizeof(tune[0]); // 计算音符数量
 }
 
 void loop()
 {
    for (int x = 0; x < length; x++) // 逐个播放音符
    {
     tone(buzzer, tune[x]); // 输出当前音符
     delay(400 * duration[x]); // 音乐节奏，可通过更改数字“400”调整快慢
     noTone(buzzer);// 停止当前音符，播放下一个音符
    } 
    delay(5000);// 播放完整首歌后，延迟5秒
 }    
```

- **步骤3** 将代码上传到开发板后，您可以听到蜂鸣器播放音乐。

### 使用树莓派进行实验

#### 所需材料

|树莓派 4B(4GB)|Grove 树莓派基帽|Grove 数字 PIR 动作传感器|
|--------|-----------------------|-------------------------------------------------------------|
|![](https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即购买](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|

#### 硬件连接

![](https://files.seeedstudio.com/products/107020109/img/Hardware_connection_raspberry_buzzer.jpg)

将蜂鸣器连接到 Grove 树莓派基帽上的 "PWM" 接口。

#### 软件代码

- **步骤1** 在树莓派上安装 Grove.py。

只需一条命令即可完成安装/更新所有依赖项以及最新的 grove.py。

:::warning
     如果您使用的是 **树莓派 OS >= Bullseye**，您 **不能使用此命令**。
:::

```python
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::success
        如果一切顺利，您将看到以下提示：

        ```
        Successfully installed grove.py-0.5
        #######################################################
        Lastest Grove.py from github install complete   !!!!!
        #######################################################
        ``` -
:::

除了一键安装，您还可以逐步安装所有依赖项以及最新的 grove.py。

:::warning
     如果您使用的是 **树莓派 OS >= Bullseye**，您必须仅使用 Python3 执行以下命令。
:::

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **步骤2** 创建一个 Python 文件以编写代码。

```
cd grove.py
nano example.py
```

- **步骤3** 将以下代码复制到 Python 文件中

```
#!/usr/bin/env python
import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

def main():
    # Grove - 蜂鸣器连接到 PWM 接口
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))

    CHORDS = [upmBuzzer.BUZZER_DO， upmBuzzer.BUZZER_RE， upmBuzzer.BUZZER_MI， 
        upmBuzzer.BUZZER_FA， upmBuzzer.BUZZER_SOL， upmBuzzer.BUZZER_LA， 
        upmBuzzer.BUZZER_SI]
    for i in range(0， len(CHORDS)):
        buzzer.playSound(CHORDS[i]， 500000)
        time.sleep(0.1)

    del buzzer
    print('程序退出...')

if __name__ == '__main__':
    main()
```

- **步骤4** 运行程序

```
sudo chmod +x example.py
sudo ./example.py
```

如果一切顺利，您将听到“do, re, mi, fa, so, la, xi”。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [MLT_8530_数据手册](https://files.seeedstudio.com/products/107020109/document/MLT_8530_datasheet.pdf)
- **[PDF]** [硬件原理图](https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_SCH_190925.pdf)

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