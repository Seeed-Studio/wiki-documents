---
title: Grove - 蜂鸣器
description: Grove - 蜂鸣器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Buzzer/
slug: /cn/Grove-Buzzer
last_update:
  date: 03/19/2024
  author: WuFeifei
---


![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Grove%20Buzzer.jpg)

Grove蜂鸣器模块的主要组件是一个[压电蜂鸣器](https://en.wikipedia.org/wiki/Buzzer#Piezoelectric)。压电蜂鸣器可以连接到数字输出端，当输出为高电平时，会发出声音。另外，它也可以连接到模拟脉冲宽度调制输出端，以产生不同的声音和效果。

[![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)

## 版本

| 产品版本          | 变更内容                                                                                                                                                                                | 发布日期 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Buzzer V1.0| 初始版本                                                                                                                                                                                | 2010年11月25日 |
| Grove-Buzzer V1.1 | 增加了S9013晶体管                                                                                                                                                                         | 2014年5月30日 |

## 特性

- 易于使用的压电蜂鸣器
- 使用标准的4针Grove电缆连接到其他Grove模块，如Grove电源模块和Grove - Base Shield

:::提示
    关于Grove模块的更多详情，请查阅[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 规格

| 项目     | 规格       |
| -------- | ---------- |
| 工作电压 | 3.3V/5V    |
| 声音输出 | ≥85dB      |
| 共振频率 | 2300±300Hz |

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::注意
    上述列出的支持平台是模块软件或理论兼容性的一个指示。在大多数情况下，我们仅针对Arduino平台提供软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 玩转 Arduino

#### 硬件

- **步骤1.** 准备以下物品：

| Seeeduino V4.2 | 基础盾板 | Grove蜂鸣器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **步骤 2.** 将Grove-Buzzer连接到Grove-Base Shield的D6端口。
- **步骤 3.** 将Grove - Base Shield插入Seeeduino。
- **步骤 4.** 通过USB电缆将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/seeeduino_buzzer.jpg)

:::注意
 如果没有Grove Base Shield，我们也可以按照以下方式直接将Grove-buzzer连接到Seeeduino。
:::

| Seeeduino       | Grove蜂鸣器 |
|---------------|-------------------------|
| 5V           | 红色                   |
| GND           | 黑色                 |
| 未连接 | 白色                 |
| D6            | 黄色                |

#### 软件

- 步骤1. 将代码复制到Arduino IDE并上传。

```c
void setup()
{
  pinMode(6, OUTPUT);
}

void loop()
{
  digitalWrite(6, HIGH);
  delay(1000);
  digitalWrite(6, LOW);
  delay(1000);
}
```

- 步骤 2. 我们会听到蜂鸣器不断地开关。

### 玩转 Codecraft

#### 硬件

**步骤 1.** 将Grove - Buzzer连接到Base Shield的D6端口。

**步骤 2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤 3.** 通过USB电缆将Seeeduino/Arduino连接到您的电脑。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖入工作区。

:::注意
    如果是您第一次使用Codecraft，也请查看[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按照下面的图片拖动代码块，或者打开本页面底部可以下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/cc_Buzzer.png)

将程序上传到你的Arduino/Seeeduino。

:::完成后
    当代码上传完成后，你会听到蜂鸣器间歇性地发出声音。
:::

### 玩转 树莓派 (和 Grove Base Hat 树莓派)

#### 硬件

- **步骤 1**. 本项目所需物品：

| 树莓派 | Grove Base Hat for RasPi| Grove -  蜂鸣器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **步骤 2**. 将Grove Base Hat插入树莓派。
- **步骤 3**. 将Grove蜂鸣器连接到Base Hat的 PWM端口。
- **步骤 4**. 通过USB电缆将树莓派连接到电脑。
![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect1.jpg)

#### 软件

:::注意
     如果您使用的是**带有Raspberry Pi OS >= Bullseye的树莓派**，您必须**仅使用Python3**来运行这个命令行。
:::

- **步骤 1**.按照[设置软件](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation)来配置开发环境。
- **步骤 2**. 通过克隆grove.py库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令来运行代码。

```
cd grove.py/grove
python3 grove_pwm_buzzer.py
```

以下是grove_led.py的代码。

```python

from __future__ import print_function

import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

def main():
    print("Insert Grove-Buzzer to Grove-Base-Hat slot PWM[12 13 VCC GND]")

    # Grove Base Hat for Raspberry Pi
    #   PWM JST SLOT - PWM[12 13 VCC GND]
    pin = 12
    #
    # Create the buzzer object using RaspberryPi GPIO12
    mraa_pin = getGpioLookup("GPIO%d" % pin)
    buzzer = upmBuzzer.Buzzer(mraa_pin)

    chords = [upmBuzzer.BUZZER_DO, upmBuzzer.BUZZER_RE, upmBuzzer.BUZZER_MI,
              upmBuzzer.BUZZER_FA, upmBuzzer.BUZZER_SOL, upmBuzzer.BUZZER_LA,
              upmBuzzer.BUZZER_SI];

    # Print sensor name
    print(buzzer.name())

    # Play sound (DO, RE, MI, etc.), pausing for 0.1 seconds between notes
    for chord_ind in range (0,7):
        # play each note for a half second
        print(buzzer.playSound(chords[chord_ind], 500000))
        time.sleep(0.1)

    print("exiting application")

    # Delete the buzzer object
    del buzzer

if __name__ == '__main__':
    main()



```

:::成功后
    如果一切顺利，蜂鸣器会响几次然后停止，程序会自动退出。
 :::

### 玩转树莓派 (使用 GrovePi_Plus)

#### 硬件

- **步骤 1.** 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove - 蜂鸣器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **Step 2.** 将GrovePi_Plus插入到树莓派中。
- **Step 3.** 将Grove-蜂鸣器连接到GrovePi_Plus的D8端口。
- **Step 4.** 通过USB线将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/rasp_buzzer.jpg)

#### 软件

:::注意
     如果你正在使用**带有Raspberrypi OS >= Bullseye的树莓派**，你必须**仅使用Python3**来执行这个命令行。
:::

- **步骤 1.** 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)指南来配置开发环境。
- **步骤 2.** 从Github仓库克隆代码。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 3.** 执行以下命令。

```
cd ~/GrovePi/Software/Python
python3 grove_buzzer.py
```

以下是grove_buzzer.py的代码。

```python
import time
import grovepi

# Connect the Grove Buzzer to digital port D8
# SIG,NC,VCC,GND
buzzer = 8

grovepi.pinMode(buzzer,"OUTPUT")

while True:
    try:
        # Buzz for 1 second
        grovepi.digitalWrite(buzzer,1)
        print ('start')
        time.sleep(1)

        # Stop buzzing for 1 second and repeat
        grovepi.digitalWrite(buzzer,0)
        print ('stop')
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(buzzer,0)
        break
    except IOError:
        print ("Error")
```

- **步骤 4.**  我们会听到蜂鸣器不断地开启和关闭。

```
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_buzzer.py
start
stop
start
stop
```

### 玩转 TI LaunchPad

#### 硬件

- 这个示例展示了如何使用Grove蜂鸣器模块来播放旋律。它向蜂鸣器发送适当频率的方波，从而产生相应的音调。

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Buzzer.jpg)

#### 软件

```c
/*
  Buzzer
 The example use a buzzer to play melodies. It sends a square wave of the
 appropriate frequency to the buzzer, generating the corresponding tone.

 The circuit:
 * Buzzer attached to pin39 (J14 plug on Grove Base BoosterPack)
 * one side pin (either one) to ground
 * the other side pin to VCC
 * LED anode (long leg) attached to RED_LED
 * LED cathode (short leg) attached to ground

 * Note:
 This example code is in the public domain.

 https://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Kit_v1.1b#Grove_-_Buzzer

*/

/* Macro Define */
#define BUZZER_PIN               39            /* sig pin of the buzzer */

int length = 15;         /* the number of notes */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup()
{
    /* set buzzer pin as output */
    pinMode(BUZZER_PIN, OUTPUT);
}

void loop()
{
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* delay between notes */
    }

}

/* play tone */
void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(BUZZER_PIN, HIGH);
        delayMicroseconds(tone);
        digitalWrite(BUZZER_PIN, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // play the tone corresponding to the note name
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```

# Grove - 蜂鸣器原理图文件 v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove_-_Buzzer_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - 蜂鸣器原理图文件 v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove-Buzzer_V1.1_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle&PDF]** [Grove - 蜂鸣器原理图文件 v1.1](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove-Buzzer_V1.1_eagle.zip)
- **[Eagle&PDF]** [Grove - 蜂鸣器原理图文件 v1.0](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove_-_Buzzer_v1.0_Source_File.zip)
- **[数据手册]** [S9013数据手册](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/S9013.pdf)
- **[More Reading]** [木质激光枪](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)
- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove_Buzzer/res/Grove_Buzzer_CDC_File.zip)

![](https://files.seeedstudio.com/wiki/Grove_Button/img/gun.jpg)

受《守望先锋》启发，我们最近制作了一款非常酷炫的木质激光枪玩具！

这款木质激光枪和枪靶都是基于一块名为 Seeeduino Lotus 的 Arduino 主板制作的。激光枪上的激光发射器可以控制发射激光脉冲以“激活”枪靶。枪靶上装有 3 个光传感器来检测激光脉冲。看起来很简单对吧？如果你对我们的项目感兴趣，那就为自己或你的孩子制作一个吧！花一天时间亲手制作它作为圣诞礼物，绝对物超所值。

## 项目

**Grove - 蜂鸣器入门**: 我与Grove“即插即用”组件的初步接触。这主要是一个蜂鸣器项目。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-buzzer-981efd/embed' width='350'></iframe>

**水资源浪费监测器**: 每年有数百万加仑的水被浪费。通过这个项目学习如何节约用水吧！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/exp0nge/water-waste-monitor-98378e/embed' width='350'></iframe>

**蜂鸣器 Grove 模块**:

<iframe width="560" height="315" src="https://www.youtube.com/embed/XBqvG6R1ueA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ug8dJHPmdMA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供全方位的支持，以确保您在使用我们的产品时能够获得最顺畅的体验。我们提供多种沟通渠道，以满足您不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
