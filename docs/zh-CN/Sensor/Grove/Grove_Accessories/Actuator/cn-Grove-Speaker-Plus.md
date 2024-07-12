---
title: Grove - 增强扬声器
description: Grove - 增强扬声器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Speaker-Plus/
slug: /cn/Grove-Speaker-Plus
last_update:
  date: 03/21/2024
  author: WuFeifei
---

<!--     -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/03.png" alt="pir" width={600} height="auto" /></p>

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html)

Grove Speaker Plus 由一个强大的放大驱动板和高品质扬声器组成。扬声器可以根据不同的输入频率产生不同的音调，并且易于通过 PWM 信号进行控制。您可以通过简单的编码或大量现有的音乐代码来创建独特的音效、播放您喜欢的歌曲，或构建自己的音乐盒。

与上一代的 Grove Speaker 相比，Grove Speaker Plus 采用了更高品质的扬声器设计，该扬声器是可拆卸和可替换的，这使得您能够替换成其他您喜欢的扬声器。在板载电位器的帮助下，您可以轻松调整输出音量。是否已经厌倦了固定且音质不佳的扬声器？想要连接并播放您自己的扬声器吗？这就是您的选择。

## 特点

- 高品质扬声器，音量大
- 可拆卸和可替换的扬声器设计
- 板上电位器可调整音量
- 易于使用的即插即用接口

:::提示
    更多关于 Grove 模块的信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 规格

| 参数         | 值 |
|------|-----|
| 尺寸 | 130mm x90mm x12mm|
|重量   |毛重 12g|

支持的平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
    上述提到的支持平台是模块软件或理论兼容性的指示。在大多数情况下，我们只提供针对 Arduino 平台的软件库或代码示例。由于无法为所有可能的 MCU 平台提供软件库/演示代码，因此用户必须编写自己的软件库。
:::

## 入门指南

#### 所需材料

| Seeeduino Lotus | Grove Speaker Plus|
|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/Seeeduino_Lotus.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/small.png)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[立即获取](https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html)|

#### 硬件连接

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/Hardware_Connection.jpg" alt="Grove-Speaker Plus'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>
## 使用说明

### 与 Arduino 配合使用

这款扬声器可以发出多种声音，如汽车喇叭声、门铃声和点火声等。不同的声音基于输入信号的频率。

您可以使用 Arduino 为此模块提供不同频率的信号。Arduino 通过 PWM 或甚至数字写入和延迟来生成这些信号。在这里，我们将向您展示如何使用 *delay()* 生成这些信号，使扬声器发出低音 1~7。

|**注意**|对应频率|半周期|
|---|---|----|
|1| 261.6255653 |1911.128216|
|1.5|277.182631|1803.864832|
|2|293.6647679|1702.621678|
|2.5|311.1269837|1607.060866|
|3|329.6275569|1516.863471|
|4|349.2282314|1431.728466|
|4.5|369.9944227|1351.371722|
|5|391.995436|1275.525055|
|5.5|415.3046976|1203.935334|
|6|440|1136.363636|
|6.5|466.1637615|1072.584446|
|7|493.8833013|1012.384907|

#### 软件代码

**步骤 1.** 将 Grove - Speaker Plus 连接到 Base Shield 的 **D3** 端口，然后将 Base Shield 插入您的 Seeeduino。

**步骤 2.** 使用 USB 线缆将 Seeeduino 连接至您的电脑。

**步骤 3.** 将以下代码上传到您的 Arduino IDE。

:::提示
        如果您是第一次使用 Arduino，我们强烈建议您在开始之前先阅读[Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

```C++
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

<div class="admonition note">
<p class="admonition-title">注意</p>
由于电容的影响，该模块只能输出低音信号，而高音部分无法发出。
</div>

:::提示
     当代码上传完成后，您会听到扬声器发出从 DO 到 SI 的声音。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/202002903_Grove-Speaker_Plus_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- [如何使用 MCU 生成不同的音频](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Tone.pdf)
- [LM386 低压音频功率放大器数据手册](https://files.seeedstudio.com/wiki/Grove-Speaker/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品时体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
