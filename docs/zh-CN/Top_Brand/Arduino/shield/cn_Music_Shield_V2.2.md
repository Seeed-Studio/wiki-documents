---
description: Music_Shield_V2.2
title: Music Shield V2.2

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Music_Shield_V2.2
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_Shield_Picture.jpg" alt="pir" width={600} height="auto" /></p>

是时候构建您的实时MIDI乐器/音乐播放器了！它可以播放多种格式，包括MP3、WMA、WAV、AAC、MIDI、Ogg Vorbis。Music Shield是一个与Arduino、Seeeduino、Seeeduino Mega和Arduino Mega兼容的音频编码器/解码器。它基于VC1053B芯片，使其能够播放SD卡中的声音文件并进行短时录音。您也可以通过稍微改变其硬件安装来播放MIDI音符。由于采用SPI通信模式，它保持最少的IO端口数量，便于用户自己开发此设备。此外，新的多功能按钮为用户控制提供了更大的便利。

:::note
录音功能仅适用于Seeeduino Mega和Arduino Mega。您可以使用的SD卡最大容量为2GB。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/Music-Shield-V20-p-1372.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

硬件概述
-----------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_frame.jpg" alt="pir" width={600} height="auto" /></p>

**多功能按钮：** 改变音量和选择歌曲。

**播放/暂停指示LED（绿色）：** 播放时闪烁。

**耳机接口：** 可以驱动16欧姆或32欧姆耳机，也可以作为外部音频输入端口。

**Micro SD卡：** 可以是FAT16或FAT32，您可以使用的SD卡最大容量为2GB。

**U2：** VS1053B IC，Ogg Vorbis/MP3/AAC/WMA/FLAC/MIDI音频编解码器。

**U3，U7：** 74VHC125 IC，四路缓冲器

**I2S：** 用于数字音频输入/输出。

**ISP接口：** 与Mega系列产品一起使用时提供SPI端口。

***Arduino上的引脚使用***

**用于播放控制的引脚：**

D3 - 接收来自按钮的音量增加信号。

D4 - 接收来自开关的下一首歌功能信号。

D5 - 接收来自开关的播放&停止和录音功能信号。

D6 - 接收来自开关的上一首歌功能信号。

D7 - 接收来自按钮的音量减小信号。

D8 - 绿色LED指示。

**用于SPI接口的引脚：**

D10 - SPI片选

D11 - SPI MOSI

D12 - SPI MISO

D13 - SPI SCK

**用于VS1053接口的引脚：**

A0 - VS1053的复位

A1 - VS1053的数据请求

A2 - VS1053的数据选择

A3 - VS1053的片选

入门指南
---------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield4.jpg" alt="pir" width={600} height="auto" /></p>

:::note
<ol><li>如果您想使用MIDI功能，您需要更改硬件安装。</li>
<li>如果您为了使用MIDI功能而更改了硬件安装，在恢复到原始状态之前，您将无法使用播放和录音功能。</li></ol>
:::

### **播放音乐**

1. 确保micro SD卡中有歌曲。
2. 下载[Music shield V2.0库](https://github.com/Seeed-Studio/Music_Shield)
3. 解压并将文件夹复制到Arduino的库路径：..\arduino-1.0\libraries。

:::note

1. 如果Arduino在加载时抛出错误，请更改提取库的文件夹名称。<br />
2. 如果在编译时出现`arduino.h: No such file or directory`错误，请在示例文件中更改包含的头文件（改为Arduino.h）。
:::

**演示1：播放歌曲（例如随机播放模式）**

为了使用播放功能，您需要首先创建一个播放列表。

1. 重启Arduino IDE。通过路径打开"creatList"示例：File --> Examples --> MusicPlayer --> creatList，如下所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/OpenCreatListCode.jpg" alt="pir" width={600} height="auto" /></p>

2. 设置播放模式。在"creatList"中，我们使用的函数描述如下。

    **名称：** setPlayMode(unsigned char playmode);

    **功能：** 设置播放模式。您可以设置四种模式：MODE_NORMAL、MODE_SHUFFLE、MODE_REPEAT_LIST、MODE_REPEAT_ONE。每种模式代表不同的播放顺序。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Play_Mode.jpg" alt="pir" width={600} height="auto" /></p>

3. 通过路径选择您正在使用的Arduino板类型：Tools --> Board --> 例如Arduino UNO。
4. 通过路径选择您正在使用的正确串口：Tools --> Serial Port --> 例如COM3。
5. 上传代码。当出现"Done uploading"时点击串口监视器，您会发现列表中歌曲的顺序是随机的。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Play_List.jpg" alt="pir" width={600} height="auto" /></p>

当多功能按钮向上或向下按压时，音量会改变。当然，您可以尝试其他播放模式。

**演示2：播放选定的歌曲**

1. 此演示将向您展示如何从SD卡中的所有歌曲中播放部分歌曲。通过路径打开"addToList"示例：File --> Examples --> MusicPlayer --> addToList。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Select_play.jpg" alt="pir" width={600} height="auto" /></p>

2. 从播放列表中选择歌曲。您只需要在函数addToPlayList(char *songName)中按名称正确列出您想要播放的歌曲。
但您必须确保歌曲已存储在SD卡中，并且这些歌曲的格式必须是MP3、WMA、WAV、AAC、MIDI、Ogg Vorbis中的一种。

3. 上传代码。当您完成上传后，新添加的歌曲将被播放。

**演示 3: 通过模拟端口控制音量**

1. 将 Grove-Base Shield 插到 Music shield 上，用 Grove 线缆将旋转电位器的 Grove 接口连接到 Base Shield 的模拟端口 4。你也可以改用数字端口。但别忘了同时在演示代码的定义中更改端口号。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_5.jpg" alt="pir" width={600} height="auto" /></p>

2. 打开 "analogInputControl" 示例并将其上传到你的 Arduino 开发板。

3. 旋转旋钮来改变音乐音量。

**演示 4: 录制音乐:(仅支持基于 ATmega1280 和 ATmega2560 的开发板)**

1. 上传 Music Shield 库中的任意示例程序，例如 "creatList" 示例程序。打开串口监视器，它将播放 SD 卡上的音频文件。
2. 按住多功能按钮 5 秒钟，然后指示 LED 将熄灭。
3. 再次按住多功能按钮 5 秒钟，然后 music shield 将开始录制，绿色指示 LED 将闪烁。
4. 快速再次按下多功能按钮，它将停止录制。
5. 录制的内容将在最后位置播放。

**演示 5: 使用 MIDI**

1. 此演示将向你展示如何使用 MIDI 从 3.5mm 接口播放音符。通过路径打开 "MidiDemoPlayer" 示例：File --> Examples --> MusicPlayer --> MidiDemoPlayer。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_midi_demo.jpeg" alt="pir" width={600} height="auto" /></p>

2. 将代码上传到你的 arduino UNO。

参考资料
---------

**MIDI 编号到音符参考列表**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/MIDIlist.gif" alt="pir" width={600} height="auto" /></p>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Music Shield V2.2 Eagle 文件](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2.zip)
- [Music Shield V2.2 原理图.pdf](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2_pdf.pdf)
- [VS1053 数据手册](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/VS1053.pdf)
- [Music Shield 库](https://github.com/Seeed-Studio/Music_Shield)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Music_Shield_V2.2 -->

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