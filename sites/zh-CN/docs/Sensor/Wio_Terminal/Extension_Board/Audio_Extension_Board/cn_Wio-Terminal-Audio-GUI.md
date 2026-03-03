---
description: 音频系统设计工具
title: 音频系统设计工具
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Audio-GUI
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# 音频系统设计工具

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/GUI.gif"/></div>

本文档介绍如何使用**音频系统设计工具**为使用[**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)和[**ReSpeaker 2-Mit Hat**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)的音频库设计音频系统。当您可以看到输入和输出的去向时，这使得设计音频系统变得更加容易。

> **这是Seeed对[Teensy音频库音频系统设计工具](https://www.pjrc.com/teensy/gui/)的分支版本。**

## 入门指南

- 访问[**音频系统设计工具**](https://seeed-studio.github.io/Seeed_Arduino_Audio/)。有关更多信息，请访问[teensy](https://www.pjrc.com/teensy/)。

- 进入网站后，您应该在**左侧栏看到音频库的所有可用功能**。

- 您可以点击每个类，查看每个类中有哪些可用函数以及如何使用它们。

### 设计音频系统

#### 从SD卡播放音乐文件

让我们通过一个示例来了解音频设计系统的基础知识。假设您想要通过ReSpeaker 2-Mic hat的扬声器简单地播放SD卡中的歌曲：

- **`INPUT`**是从SD卡播放。

- **`OUTPUT`**是I2S输出。

- **`wm8960`**是ReSpeaker 2-Mics的控制单元。

所以设计应该看起来像这样：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/simple-play.png"/></div>

- 点击顶部的**Export**导出系统的宏定义，以粘贴到Arduino IDE中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/pasting.png"/></div>

#### 示例代码

此示例代码使用先前设计系统的宏定义，从SD卡播放音乐文件。

:::note
请确保Wio Terminal的MicroSD卡中有`SDTEST1.wav`、`SDTEST2.wav`、`SDTEST3.wav`和`SDTEST4.wav`音乐文件。
:::

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioPlaySdWav           playSdWav1;     //xy=376,277
AudioOutputI2S           i2s1;           //xy=611,277
AudioConnection          patchCord1(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord2(playSdWav1, 1, i2s1, 1);
AudioControlWM8960       wm8960_1;       //xy=496,363
// GUItool: end automatically generated code

void setup() {
  Serial.begin(9600);
  while(!Serial);

  // Audio connections require memory to work.  For more
  // detailed information, see the MemoryAndCpuUsage example
  AudioMemory(8);

  wm8960_1.enable();
  wm8960_1.volume(0.7);

  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
    Serial.println("Card Mount Failed");
    return;
  }
}

void playFile(const char *filename)
{
  Serial.print("Playing file: ");
  Serial.println(filename);
  // Start playing the file.  This sketch continues to
  // run while the file plays.
  playSdWav1.play(filename);
  // A brief delay for the library read WAV info
  delay(5);
  // Simply wait for the file to finish playing.
  while (playSdWav1.isPlaying()) {
  }
}

void loop() {
  playFile("SDTEST1.WAV");  // filenames are always uppercase 8.3 format
  delay(500);
  playFile("SDTEST2.WAV");
  delay(500);
  playFile("SDTEST3.WAV");
  delay(500);
  playFile("SDTEST4.WAV");
  delay(1500);
}
```

### 峰值检测

让我们使用设计工具设计一个在播放SD卡音乐时进行峰值检测的系统。

- **`INPUT`**是从SD卡播放。

- **`OUTPUT`**是I2S输出和两个峰值！一个峰值用于左声道，一个峰值用于右声道。

- **`wm8960`**是ReSpeaker 2-Mics的控制单元。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detection-gui.png"/></div>

#### 示例代码

请查看[这里](https://wiki.seeedstudio.com/cn/Wio-Terminal-Audio-Play-Record/#peak-detection)。

### 音频频谱可视化器

这是从SD卡播放音乐同时执行FFT以获取频率数据来实现音频频谱可视化器的示例。

- **`INPUT`**是从SD卡播放。

- **`OUTPUT`**是I2S输出和FFT计算。

- **`wm8960`**是ReSpeaker 2-Mics的控制单元。

这里我们将介绍另一个有用的功能，**混音器**。这允许您将最多**四个**音频通道合并为一个。这用于对合并通道（左和右）执行FFT，比单通道更准确。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio-spc-gui.png"/></div>

#### 示例代码

请查看[这里](https://wiki.seeedstudio.com/cn/Wio-Terminal-Audio-Play-Record/#audio-spectrum-visualizer)。

### 实时录制和播放

这次让我们设计一个实时录制和播放的系统！

- **`INPUT`**是从麦克风录制：**Input I2S** -> **RecordQueue**

- **`OUTPUT`**是I2S输出。**PlayQueue** -> **Output I2S**

- **`wm8960`**是ReSpeaker 2-Mics的控制单元。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play-realtime.png"/></div>

#### 示例代码

请查看[这里](https://wiki.seeedstudio.com/cn/Wio-Terminal-Audio-Play-Record/#record-and-play-at-real-time)。