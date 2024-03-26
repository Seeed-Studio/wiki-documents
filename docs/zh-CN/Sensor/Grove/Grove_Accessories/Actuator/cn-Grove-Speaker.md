---
title: Grove - Speaker
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Speaker/
slug: /cn/Grove-Speaker
last_update:
  date: 03/21/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Grove_Speaker_01.jpg)

Grove-Speaker 是一个包含功率放大和声音输出的模块。其音量可以通过板载电位器进行调节。当输入不同的频率时，扬声器会发出不同的音调。将音乐编码到 Arduino 中，打造你自己的音乐盒吧！

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Speaker-p-1445.html)

## **特性**

- 音量可调
- Grove 接口

:::提示
    更多关于 Grove 模块的信息，请参考[Grove 系统](https://wiki.seeedstudio.com/Grove_System/)。
:::

## **规格**

| 项目     | 最小值 | 典型值 | 最大值 | 单位 |
| -------- | ------ | ------ | ------ | ---- |
| 工作电压 | 4.0    | 5.0    | 5.5    | VDC  |
| 电压增益 | -      | -      | 46     | db   |
| 带宽     | -      | -      | 20     | KHz  |

支持的平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
    上述提到的支持平台仅表示该模块在软件或理论上的兼容性。在大多数情况下，我们只提供针对 Arduino 平台的软件库或代码示例。由于无法为所有可能的 MCU 平台提供软件库/示例代码，因此用户需要自行编写软件库。
:::

**使用说明**
-----

### 与 Arduino 配合使用

扬声器可以发出各种声音，如汽车喇叭声、门铃声和点火声等。这些不同的声音基于输入信号的频率。

您可以使用 Arduino 为此模块提供不同频率的信号。Arduino 通过 PWM 或甚至数字写入和延迟来生成这些信号。这里我们将向您展示如何使用 *delay()* 来生成这些信号，扬声器将发出 1~7 的低音。

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Tone.jpg)

```
/*macro definition of Speaker pin*/
#define SPEAKER 3

int BassTab[]={1911,1702,1516,1431,1275,1136,1012};//bass 1~7

void setup()
{
    pinInit();
}
void loop()
{
        /*sound bass 1~7*/
    for(int note_index=0;note_index<7;note_index++)
    {
        sound(note_index);
        delay(500);
    }
}
void pinInit()
{
    pinMode(SPEAKER,OUTPUT);
    digitalWrite(SPEAKER,LOW);
}
void sound(uint8_t note_index)
{
    for(int i=0;i<100;i++)
    {
        digitalWrite(SPEAKER,HIGH);
        delayMicroseconds(BassTab[note_index]);
        digitalWrite(SPEAKER,LOW);
        delayMicroseconds(BassTab[note_index]);
    }
}
```

:::注意
请注意，由于电容的影响，该模块只能输出低音信号，无法发出高音。
:::

### 使用 Codecraft 进行编程

#### 硬件连接

**步骤 1.** 将 Grove - Speaker 连接到 Base Shield 的 D3 端口。

**步骤 2.** 将 Base Shield 插入到您的 Seeeduino/Arduino 上。

**步骤 3.** 通过 USB 线缆将 Seeeduino/Arduino 连接到您的电脑。

#### 软件部分

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并拖动一个主程序到工作区域。

:::注意
    如果您是第一次使用 Codecraft，请参阅[使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按照下面的图片拖动代码块，或者打开可以在本页面末尾下载的 cdc 文件。

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Speaker.png)

将程序上传到您的 Arduino/Seeeduino。

:::提示
    当代码上传完成后，您会听到扬声器发出 DO 到 SI 的声音。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- [Grove - Speaker Eagle文件](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip)
- [如何使用MCU生成不同音调](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Tone.pdf)
- [Grove\_-\_Speaker\_v1.0\_brd.pdf](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_v1.0_brd.pdf)
- [Grove\_-\_Speaker\_v1.0\_sch.pdf](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_v1.0_sch.pdf)
- [LM386 低压音频功率放大器数据表](https://files.seeedstudio.com/wiki/Grove-Speaker/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)
- [CodeCraft 代码](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Speaker.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Speaker -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
