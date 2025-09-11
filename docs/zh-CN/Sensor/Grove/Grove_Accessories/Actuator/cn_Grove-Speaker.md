---
title: Grove - 扬声器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Speaker/
slug: /cn/Grove-Speaker
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Grove_Speaker_01.jpg)

Grove - 扬声器是一款包含功率放大和声音输出的模块。扬声器的音量可以通过板载电位器进行调节。通过不同的输入频率，扬声器可以产生不同的音调。将音乐编码到 Arduino 中，DIY 你的专属音乐盒！

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Speaker-p-1445.html)

特点
-------

- 音量可调
- Grove 接口

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

规格
-------------

| 项目            | 最小值 | 典型值 | 最大值 | 单位 |
|-----------------|-------|-------|-------|------|
| 工作电压       | 4.0   | 5.0   | 5.5   | VDC  |
| 电压增益       | -     | -     | 46    | db   |
| 带宽           | -     | -     | 20    | KHz  |

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常只为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

使用方法
-----

### 使用 Arduino

扬声器可以发出多种声音，例如汽车喇叭声、门铃声和点火声。这些不同的声音基于输入信号的频率。

您可以使用 Arduino 为该模块提供不同频率的信号。Arduino 通过 PWM 或数字写入和延迟生成这些信号。这里我们将展示如何使用 *delay()* 生成这些信号，扬声器发出低音 1~7。

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Tone.jpg)

```
/*扬声器引脚的宏定义*/
#define SPEAKER 3

int BassTab[]={1911,1702,1516,1431,1275,1136,1012};//低音 1~7

void setup()
{
    pinInit();
}
void loop()
{
        /*发出低音 1~7*/
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

:::note
由于电容的影响，该模块只能输出低音信号，高音无法发出。
:::

### 使用 Codecraft

#### 硬件

**步骤 1.** 将 Grove - 扬声器连接到 Base Shield 的 D3 端口

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 使用 USB 数据线将 Seeeduino/Arduino 连接到您的电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区域。

:::note
    如果这是您第一次使用 Codecraft，请参阅 [使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按下图拖动模块或打开页面底部提供的 cdc 文件。

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Speaker.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
    当代码上传完成后，您将听到扬声器发出从 DO 到 SI 的声音。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- [Grove - Speaker Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip)
- [如何使用 MCU 生成不同音调](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Tone.pdf)
- [Grove_-_Speaker_v1.0_brd.pdf](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_v1.0_brd.pdf)
- [Grove_-_Speaker_v1.0_sch.pdf](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_v1.0_sch.pdf)
- [LM386 低电压音频功率放大器数据手册](https://files.seeedstudio.com/wiki/Grove-Speaker/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)
- [CodeCraft 代码](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Speaker.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Speaker -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>