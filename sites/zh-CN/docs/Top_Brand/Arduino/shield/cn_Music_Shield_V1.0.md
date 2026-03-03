---
description: Music Shield V1.0
title: Music Shield V1.0
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Music_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name:  Music Shield V1.0
category: 已停产
bzurl:
oldwikiname: Music_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Music_Shield_V1-0
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/Musicshieldnew500.jpg)

Music Shield 是一个专业的音频编解码器。它可以与 Arduino、Seeeduino、Seeeduino Mega 和 Arduino Mega 配合使用。它基于 VS1053b IC，可以使用 Seeed 提供的 Arduino 库播放存储在 MicroSD 卡上的各种音乐格式。

注意：录音功能目前仅支持 Seeeduino Mega 和 Arduino Mega。

## 特性 ##

- 兼容 Arduino、Seeeduino、Arduino Mega 和 Seeeduino Mega

- 2 个控制按钮和 1 个旋钮开关

- 从 micro SD 卡播放音乐，解码格式：MP3、WAV、MIDI、Ogg Vorbis

- 用于外部 DAC 的 I2S 接口

- 用于播放的耳机/线路输出

- 用于以 OGG 格式录音的线路输入

- 出色的音质，频率响应为 ±1dB

- FCC 认证

## 规格 ##

|项目| 最小值|典型值|最大值| 单位|
|--|--|--|--|--|
| 电压|4.5| 5|5.5| VDC|
| 电流| /| /| 70|mA|
 |输出信噪比（A 加权）|/| 60|/|dB|
 |通道隔离度（A 加权）|/|50|/|dB|
 |频率响应|-1|/|1|dB|
 |信号失真|/|/|0.5%|/|
 |最大输出（每通道 16 欧姆负载）|500|/|/|mV|
 |音频接口|3.5mm 音频插孔|||/|
 |支持格式|MP3、WAV、MIDI、Ogg|||/|
 |支持的 SD 卡|Micro SD 卡|||/|
 |ESD 接触放电|±4|||KV|
 |ESD 空气放电|±8|||/|
|尺寸|80.4x52.5x13.9|||mm|
 |净重|11±2|||g|

## 接口功能 ##

![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/MusicShield-hard.jpg)

**多功能按钮：** 向左转播放上一首歌，向右转播放下一首歌，按下暂停和恢复播放。

**音量指示 LED（红色）：** 如果音量增加，红色 LED 会更亮。

**播放/暂停指示 LED（绿色）：** 如果正在播放，绿色 LED 闪烁。

**线路输出** 可以驱动 16 欧姆或 32 欧姆耳机。

**线路输入** 用于从其他资源录制音频。

**Micro SD 卡** 可以是 FAT16 或 FAT32，不支持大于 2GB 的容量。（请注意：库中包含的示例代码仅使用 FAT16 格式的卡）

**I2S 和 GPIO** 用于数字音频输出。

**ISP 接口** 保留用于与 Mega 配合使用时提供 SPI 端口。

### Arduino 上的引脚使用 ###

**D0** - 未使用。

**D1** - 未使用。

**D2** - 用于接收来自 iPod 底座的信号（如果不使用 iPod 底座，可用于您自己的应用）。

**D3** - 用于接收来自音量增加按钮的信号（如果不使用开关，可用于您自己的应用）。

**D4** - 用于接收来自下一首歌功能开关的信号（如果不使用开关，可用于您自己的应用）。

**D5** - 用于接收来自播放&停止和录音功能开关的信号（如果不使用开关，可用于您自己的应用）。

**D6** - 用于接收来自上一首歌功能开关的信号（如果不使用开关，可用于您自己的应用）。

**D7** - 用于接收来自音量减少按钮的信号（如果不使用开关，可用于您自己的应用）。

**D8** - 用于绿色 LED 指示（如果不使用开关，可用于您自己的应用）。

**D9** - 用于红色 LED 指示（如果不使用开关，可用于您自己的应用）。

**D10** - 用于 SPI 片选。

**D11** - 用于 SPI MOSI。

**D12** - 用于 SPI MISO。

**D13** - 用于 SPI SCK。

**D14(A0)** - 用于 VS1053 的复位。

**D15(A1)** - 用于 VS1053 的数据请求。

**D16(A2)** - 用于 VS1053 的数据选择。

**D17(A3)** - 用于 VS1053 的片选。

**D18(A4)** - 未使用。

**D19(A5)** - 未使用。

## 使用方法 ##

### 硬件安装 ###

插入 Micro SD 卡和耳机；将音乐扩展板插到 Arduino/Seeeduino 上；使用 USB 线将板子连接到 PC。![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/MusicInstall.jpg)

### 软件安装 ###

播放音乐：

1.确保 micro sd 卡中有歌曲。

2.下载 [File:Music v1 14.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_v1_14.zip) 和 [File:NewSoftSerial.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/NewSoftSerial.zip) 用于音乐扩展板。

3.解压这两个包并将它们放入 Arduino-0022 程序：..\arduino-0022\libraries

4.**[Linux 下请忽略此步骤]** 下载新的 **portpins.h** 文件并替换 Arduino-0022 程序的默认 portpins.h 文件：..\arduino-0022\hardware\tools\avr\avr\include\avr

5.选择相应的 Arduino 板，如 Arduino UNO 或 Duemilanove 或其他。

6.运行 arduino 程序编译并将草图上传到 Arduino 板。

7.尽情享受吧。

**录制音乐：**（仅支持基于 ATmega1280 和 ATmega2560 的板子）

1.在按下 **Arduino** 的 RESET 按钮之前按下播放/停止旋钮。

2.释放 RESET 按钮一秒钟，然后释放播放/停止旋钮。当音乐扩展板开始录制时，绿色和红色 LED 将同步闪烁。

3.按下播放/停止旋钮将停止录制。

对于 Arduino 1.0：
请注意：demo-1 和 demo-2 之间的 Fat16 库是不同的，所以在使用这两个演示时请确认下载相应的库。并且这两个库不能同时存在，所以在使用另一个之前请删除一个。

- 演示 1：使用 SD 库

此演示将使用 Arduino 1.0 附带的 SD 库。

1.确保 micro sd 卡中有歌曲。

2.下载 [File:MusicPlayer v1 7.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicPlayer_v1_7.zip) 和 [Fat16](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Demo1_Fat16.zip) 用于音乐扩展板。

3.解压包并将其放入 Arduino-1.0 程序：..\arduino-1.0\libraries

4.选择相应的 Arduino 板，如 Arduino UNO 或 Duemilanove 或其他。

5.[Linux 下请忽略此步骤] 下载新的 **portpins.h** 文件并替换 Arduino-1.0 程序的默认 portpins.h 文件：..\arduino-1.0\hardware\tools\avr\avr\include\avr

6.运行 arduino 程序编译并将 music_v1_2 -> musicPlayAll 的草图上传到 Arduino 板。

- 演示 2：使用 Fat16 库

此演示将使用开源库 [Music_Shield_Demo_2_Library](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield_Demo_2_Library.zip)。此演示中有两个草图：使用 MusicPlayRandomly 草图，您可以让音乐随机播放。使用 MusicPlayWithName，您可以按名称指定要播放的歌曲。（注意：此演示不能与库中的演示 1 共存）

1.确保 micro sd 卡中有歌曲。

2.下载 [Music_Shield_Demo_2_Library](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield_Demo_2_Library.zip) 用于音乐扩展板。

3.[Linux 下] 将 libraries/Fat16/Fat16util.h 复制到 libraries/Fat16/Fat16Util.h（注意 util vs Util）。包含文件的大小写错误，这是最简单的解决方法。

4.解压这两个包并将它们放入 Arduino-1.0 程序：..\arduino-1.0\libraries

5.选择相应的 Arduino 板，如 Arduino UNO 或 Duemilanove 或其他。

6.[Linux 下请忽略此步骤] 下载新的 **portpins.h** 文件并替换 Arduino-1.0 程序的默认 portpins.h 文件：..\arduino-1.0\hardware\tools\avr\avr\include\avr

7.运行 arduino 程序编译并将 MusicShieldNewSdLib 的草图上传到 Arduino 板。

注意：关于库中某些函数的具体方法，您可以参考音乐扩展板 V2.0 的[软件安装](https://wiki.seeedstudio.com/cn/Music_Shield_V1.0/#software-installation)。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicShielEagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[Eagle]**[Music Shield Eagle 文件](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicShielEagleFiles.zip)
- **[PDF]**[Music Shield pdf](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music%20Shield.pdf)
- **[Eagle]**[Music Shield sch](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music%20Shield.sch)
- **[PDF]**[Music Shield 原理图 pdf](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield.pdf)
- **[Library]**[Music Shield Arduino 0022 源代码文件](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_v1_14.zip)

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