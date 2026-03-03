---
title: Grove - 录音模块
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Sound_Recorder/
slug: /cn/Grove-Sound_Recorder
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Grove-Sound_Recorder.jpg)

Grove-录音模块基于 [APR9600](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Datasheet_of_APR9600.pdf)，它提供真正的单芯片语音录制、非易失性存储和播放功能，录音时长为32到60秒。Seeed Twig-录音模块的采样率为8k，总时长为32秒，分为4个段，每个段可以单独控制。此外，这个录音模块还具有Grove兼容接口，可以手动控制或通过Arduino/Seeeduino控制。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Sound-Recorder-p-904.html)

特性
--------

- Grove兼容接口
- 可以手动控制或通过MCU控制
- 非易失性Flash存储技术，无需电池备份
- 用户友好，易于使用的操作
- 低功耗
- 采样率和持续时间可通过更换单个电阻来改变。
:::tip
    有关Grove模块的更多详细信息，请参考 [Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

应用场景
-----------------

- 玩具

规格参数
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
电压
</th>
<td>
3.0
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
工作电流
</th>
<td colspan="3">
25
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
待机电流
</th>
<td colspan="3">
1
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
范围
</th>
<td colspan="3">
±1.5
</td>
<td>
g
</td>
</tr>
</table>

使用方法
-----

这个Grove-录音模块支持4个固定时长的消息段。每个段可以手动控制或通过MCU(Arduino/Seeeduino)控制。每个段的持续时间可以由用户更改。
[录音方法](http://ijam.com.au/)

手动控制录音模块非常简单。好的，让我们来看看：开关(SW1)用于录音/播放选择，当你想录音时将其推到"Rec"，当你想重播录音机中的声音时将其推到"Play"。4个按钮(K1~K4)是控制按钮，你可以通过按相关按钮来控制录音/重播哪个段。输出连接器用于连接8Ω 0.5w扬声器，Grove连接器用于供电和MCU控制。

### 如何手动控制

步骤1：给录音模块供电。你可以通过grove 4针线将"control"连接到Base Shield，或连接任何5V电压源。

<div class="admonition note">
<p class="admonition-title">注意</p>
如果你通过4针线将其连接到Base Shield，你应该确保通过编程将连接的引脚SEL1和SEL2设置为低电平。
</div>

我将"Control"连接器连接到数字端口D1。并通过以下代码将D1和D2设置为低电平：

```
const int D1 =  1;
const int D2 =  2;
int State = LOW;
void setup() {
    pinMode(D1, OUTPUT);
    pinMode(D2, OUTPUT);
    digitalWrite(D1, State );
    digitalWrite(D2, State );
}
void loop()
{
}
```

步骤2：将SW1推到"rec"。

步骤3：按住段相关按钮，例如K1，开始录音，松开按钮停止录音，你会在录音开始和停止时都听到"DI"声。

<div class="admonition note">
<p class="admonition-title">注意</p>
每个段的录音时间不应超过15秒，否则即使你保持按钮按下，它也会自动停止。
</div>

步骤4：当你想重播录制的声音时，只需将SW1推到"Play"，然后按相关按钮(不需要按住)，然后你就会听到你在这个段中录制的声音。

### 如何通过Arduino/Seeeduino控制录音模块

录音模块也可以通过MCU(Arduino或Seeeduino)控制，这个功能使这个录音模块适用于更多应用，并给用户带来奇妙的体验。
好的，让我们开始这个录音模块的MCU控制。注意我们将由K1/K2/K3/K4控制的4个段定义为Section_1/Section_2/Section_3/Section_4。

步骤1：准备硬件：将连接器"Control"连接到Base Shield的数字端口D2。并将SW1推到"Rec"。

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/D2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Sel.jpg)

步骤2：准备软件。为了控制选择要录音/播放的段，Sel_1和Sel_2的每个解码指向不同的段。

| Sel_1(D2)/Sel_2(D1) | 选择的段                |
|---------------------|---------------------------------|
| 0 0                 | 无 *(没有选择段)* |
| 0 1                 | Section_2                       |
| 1 0                 | Section_3                       |
| 1 1                 | Section_4                       |

<div class="admonition note">
<p class="admonition-title">注意</p>
当由MCU控制时，Section_1无法被选择。
</div>

*对这样的表格不感兴趣，它令人困惑！只想要代码？*
将以下代码下载到你的Arduino/Seeeduino。

```
/****************************************************************************/

#include "APR9600.h"

/*Grove接口在录音模块上的宏定义*/
#define SEL1 2
#define SEL2 3
ARP9600 recorder(SEL1,SEL2);

/*存储你在串口监视器中输入的命令。*/
char index;//可以是'2','3','4'，即段2、段3、段4的索引
char control;//控制字节，可以是'r'表示录音，'s'表示停止录音，
//'p'表示播放

void setup()
{
    Serial.begin(9600);
    recorder.begin();
}
void loop()
{
    getCommand();
    delay(50);
}
void getCommand()
{
    if (Serial.available()>0)
    {
        /*从串口监视器获取命令*/
        index = Serial.read();
        control = Serial.read();
    }
    while(Serial.available()>0)Serial.read();//清除接收缓冲区
    if((index > '1')&&(index < '5'))// 索引应该是2~4
    {
        if(control == 'r')//是否是录音命令？
        {
            recorder.record(index - 0x30);
            Serial.print("get the ");
            Serial.write(index);
            Serial.write(control);
            Serial.print(" command, ");
            Serial.print("begin to record section_");
            Serial.println(index - 0x30);
        }
        else if(control == 'p')//是否是播放命令
        {
            recorder.play(index - 0x30);
            Serial.print("get the ");
            Serial.write(index);
            Serial.write(control);
            Serial.print(" command, ");
            Serial.print("begin to play section_");
            Serial.println(index - 0x30);
        }
        else if(control == 's')//是否是停止命令
        {
            recorder.stop();//停止录音
            Serial.print("get the ");
            Serial.write(index);
            Serial.write(control);
            Serial.print(" command, ");
            Serial.print("stop recording");
        }
            /*清除命令*/
        index = 0;
        control = 0;
    }
}
```

现在，您可以使用以下命令控制录音器（波特率：9600）：

|         |                           |              |
|---------|---------------------------|--------------|
| 命令    | 描述                      | SW1 状态     |
| 2rb     | 开始录制 Section_2        | REC          |
| 2rs     | 停止录制 Section_2        | REC          |
| 2p      | 播放 Section_2            | Play         |
| 3rb     | 开始录制 Section_3        | REC          |
| 3rs     | 停止录制 Section_3        | REC          |
| 3p      | 播放 Section_3            | Play         |
| 4rb     | 开始录制 Section_4        | REC          |
| 4rs     | 停止录制 Section_4        | REC          |
| 4p      | 播放 Section_4            | Play         |

<div class="admonition note">
<p class="admonition-title">注意</p>
Section_1 无法通过 MCU 控制。
</div>

将固件下载到您的 Arduino/Seeeduino 后，确保连接器"Control"连接到 D2&D3&V&G。

将 SW1 切换到 Rec，并使用任何串口收发器输入命令。以 OCTOPUS 为例。首先输入命令"2rb"开始录制 section_2，输入"2rs"停止录制。请注意，如果没有输入"2rs"，录制将在大约 15 秒后自动终止。

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2rb.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2b.jpg)

现在，您可以输入"2p"来播放 Section_2，请注意您应该确保 SW1 被推到"Play"位置。

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2p.jpg)

您可以先录制 3 个段落（Section_2、Section_3、Section_4），然后通过串口控制您想要重播的段落。

### 如何更改每个段落的采样率和持续时间

您可以通过控制采样频率来控制质量/持续时间的权衡。振荡器频率可以通过改变从 OscR 引脚到 GND 的电阻**（PCB 中的 R7）**来改变。下表总结了电阻值和相应的采样频率，以及由此产生的输入带宽和持续时间。

| 电阻   | 采样频率 | 输入带宽 | 持续时间 |
|--------|----------|----------|----------|
| 44 K   | 4.2 KHZ  | 2.1 KHZ  | 60 S     |
| 38 K   | 6.4 KHZ  | 3.2 KHZ  | 40 S     |
| 24 K   | 8.0 KHZ  | 4.0 KHZ  | 32 S     |

出厂时 R7 为 24K，您可以将其更改为 38K/44K 以获得更长的录制持续时间，但代价是较低的采样率。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Sound_Recorder_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Grove-Sound Recorder Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Sound_Recorder_Eagle_File.zip)
- [APR9600 数据手册](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Datasheet_of_APR9600.pdf)
- [用户贡献的可用软件库（使用旧版 Arduino IDE / 软件）](https://github.com/wendellinfinity/GroveSoundRecorder)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Sound_Recorder -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>