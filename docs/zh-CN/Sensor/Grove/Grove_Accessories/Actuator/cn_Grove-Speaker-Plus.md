---
title: Grove - 扬声器 Plus
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Speaker-Plus/
slug: /cn/Grove-Speaker-Plus
last_update:
  date: 01/09/2022
  author: gunengyu
---

<!--     -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/03.png" alt="pir" width={600} height="auto" /></p>

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html)

Grove 扬声器 Plus 由一个强大的放大驱动板和高质量扬声器组成。扬声器通过不同的输入频率生成不同的音调，可以通过 PWM 信号轻松控制。您可以通过简单的编码或大量现有的音乐代码创建独特的音效、播放您喜欢的歌曲，或者构建自己的音乐盒。

与上一代 Grove 扬声器相比，Grove 扬声器 Plus 配备了更高质量的扬声器，并采用了分离且可替换的扬声器设计，使您可以更换为其他您喜欢的扬声器。在板载电位器的帮助下，您可以轻松调整输出音量。是否已经厌倦了固定扬声器的糟糕音质？想要连接并播放您自己的扬声器？这是您的选择。

特点
-------

- 高音质扬声器，音量大
- 分离且可替换的扬声器设计
- 带有板载电位器的音量调节功能
- 易于使用的即插即用接口

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

规格
-------------

| 参数           | 值 |
|------|-----|
| 尺寸 | 130mm x90mm x12mm |
| 重量   | G.W 12g |

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

#### 所需材料

| Seeeduino Lotus | Grove Speaker Plus |
|------------------|------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/Seeeduino_Lotus.png)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/small.png)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[立即购买](https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html)|

#### 硬件连接

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/Hardware_Connection.jpg" alt="Grove-Speaker Plus 的连接效果" title="演示" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

使用方法
-----

### 使用 Arduino

该扬声器可以发出各种声音，例如汽车喇叭声、门铃声和点火声。这些不同的声音基于输入信号的频率。

您可以使用 Arduino 为此模块提供不同频率的信号。Arduino 可以通过 PWM 或数字写入和延迟生成这些信号。这里我们将向您展示如何使用 *delay()* 生成这些信号，扬声器的音阶为 1~7。

|音阶|对应频率|半周期|
|----|--------|-------|
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

**步骤 1.** 将 Grove - Speaker Plus 连接到 Base Shield 的 **D3** 端口，并将 Base Shield 插入您的 Seeeduino。

**步骤 2.** 使用 USB 数据线将 Seeeduino 连接到您的电脑。

**步骤 3.** 将以下代码上传到 Arduino IDE。

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

```cpp
/*扬声器引脚的宏定义*/
#define SPEAKER 3

int BassTab[]={1911,1702,1516,1431,1275,1136,1012};//音阶 1~7

void setup()
{
    pinInit();
}
void loop()
{
        /*播放音阶 1~7*/
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
由于电容的影响，该模块只能输出低音信号，高音无法发出。
</div>

:::tip
当代码上传完成后，您将听到扬声器发出从 DO 到 SI 的声音。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/202002903_Grove-Speaker_Plus_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- [如何使用 MCU 生成不同音调](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Tone.pdf)
- [LM386 低电压音频功率放大器数据手册](https://files.seeedstudio.com/wiki/Grove-Speaker/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>