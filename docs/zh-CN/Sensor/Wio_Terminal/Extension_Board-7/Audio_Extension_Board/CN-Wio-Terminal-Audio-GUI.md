---
description: 音频系统设计工具
title: 音频系统设计工具
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Audio-GUI
last_update:
  date: 3/04/2024
  author: 金菊
---

# 音频系统设计工具

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/GUI.gif"/></div>

本Wiki介绍了如何使用 **音频系统设计工具** 为使用 [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 和 [**ReSpeaker 2-Mit Hat**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)的音频库设计音频系统。 当您可以看到输入和输出的连接关系时，设计音频系统会变得更加容易。

> **这是Seeed对 [Teensy音频库的音频系统设计工具](https://www.pjrc.com/teensy/gui/)的分支。**

## 入门指南

- 在这里访问 [**音频系统设计工具**](https://seeed-studio.github.io/Seeed_Arduino_Audio/) 。有关更多信息，请还可以访问 [teensy](https://www.pjrc.com/teensy/)。

- 一旦您进入该网站，您应该可以看到 **左侧栏中音频库的所有可用功能**。

- 您可以点击每个类别，查看每个类别中可用的函数以及如何使用它们。

### 设计音频系统

#### 从SD卡播放音乐文件

让我们通过一个示例来了解音频设计系统的基本用法。假设您想要通过ReSpeaker 2-Mic hat从SD卡播放一首歌曲：

- **`INPUT`** 是从SD卡播放。

- **`OUTPUT`** 是I2S输出。

- **`wm8960`** 是ReSpeaker 2-Mics的控制单元。

因此，设计应该如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/simple-play.png"/></div>

- 点击顶部的 **Export** ，导出系统的宏定义，以便粘贴到Arduino IDE中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/pasting.png"/></div>

#### 示例代码

这个示例代码使用了先前设计系统的宏定义，从SD卡播放音乐文件。

:::注
请确保Wio Terminal的MicroSD卡中有 `SDTEST1.wav`, `SDTEST2.wav`, `SDTEST3.wav` 和 `SDTEST4.wav`  音乐文件。
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

- **`INPUT`** 是从SD卡播放。

- **`OUTPUT`** 是I2S输出和两个峰值！一个峰值用于左声道，一个峰值用于右声道。

- **`wm8960`** 是ReSpeaker 2-Mics的控制单元。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detection-gui.png"/></div>

#### 示例代码

请参考 [此处](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Play-Record/#peak-detection)。

### 音频频谱可视化器

这是一个示例，演示如何从SD卡播放音乐并执行FFT以获取频率数据，以实现音频频谱可视化。

- **`INPUT`** 是从SD卡播放。

- **`OUTPUT`** 是I2S输出和FFT计算。

- **`wm8960`** 是ReSpeaker 2-Mics的控制单元。

在这里，我们还将介绍另一个有用的功能，即 **Mixer**。它允许您将最多 **四个** 音频通道合并为一个。这在将通道（左声道和右声道）合并进行FFT时更加准确，而不是使用单个通道。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio-spc-gui.png"/></div>

#### 示例代码

请参考 [此处](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Play-Record/#audio-spectrum-visualizer)。

### 实时录制和播放

这次让我们设计一个实时录制和播放的系统！

- **`INPUT`** 是来自麦克风的录制：**Input I2S** -> **RecordQueue**

- **`OUTPUT`** 是I2S输出。 **PlayQueue** -> **Output I2S**

- **`wm8960`** 是ReSpeaker 2-Mics的控制单元。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play-realtime.png"/></div>

#### 示例代码

请参考 [此处](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Play-Record/#record-and-play-at-real-time)。
