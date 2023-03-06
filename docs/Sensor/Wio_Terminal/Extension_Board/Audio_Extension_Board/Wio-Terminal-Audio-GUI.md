---
description: Audio System Design Tool
title: Audio System Design Tool
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Audio-GUI
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Audio System Design Tool

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/GUI.gif"/></div>

This wiki introduces how to use the **Audio System Design Tool** to design a audio system for Audio library using [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) and [**ReSpeaker 2-Mit Hat**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html). This makes designing audio system much easier when you can see where the inputs and outputs are going.

> **This is a Seeed's fork of the [Audio System Design Tool for Teensy Audio Library](https://www.pjrc.com/teensy/gui/).**

## Getting Started

- Visit the [**Audio System Design Tool**](https://seeed-studio.github.io/Seeed_Arduino_Audio/) here. For more information about this, please also visit [teensy](https://www.pjrc.com/teensy/).

- Once you are on the site, you should see all the **available features of the Audio library to the left column**.

- You can click on each class and see what are the available functions within each class and how to use them.

### Designing an Audio System

#### Playing Music files from SD Card

Let's use walk through an example to get the basic of the Audio Design System. Let's say you want to simply play a song from the SD card via the speaker via ReSpeaker 2-Mic hat:

- **`INPUT`** is the play from SD card.

- **`OUTPUT`** is the I2S output.

- **`wm8960`** is the control unit of the ReSpeaker 2-Mics.

So the design should look something like this:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/simple-play.png"/></div>

- Click the **Export** on the top to export the Macros definitions for the system to paste to Arduino IDE.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/pasting.png"/></div>

#### Example Code

This example code uses the Macros definitions from the previously design system, plays music files from the SD card.

:::note
Please make sure that there are `SDTEST1.wav`, `SDTEST2.wav`, `SDTEST3.wav` and `SDTEST4.wav`  music files in the MicroSD card in Wio Terminal.
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

### Peak Detection

Let's use the design tool to design a system for peak detection whilst playing the music from the SD card.

- **`INPUT`** is the play from SD card.

- **`OUTPUT`** is the I2S output and two peaks! One peak for left channel, and one peak for the right channel.

- **`wm8960`** is the control unit of the ReSpeaker 2-Mics.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detection-gui.png"/></div>

#### Example Code

Please check [here](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Play-Record/#peak-detection).

### Audio Spectrum Visualizer

This is the example of playing music from SD card whilst performing a FFT to get the frequency data for implementing an Audio Spectrum Visualizer.

- **`INPUT`** is the play from SD card.

- **`OUTPUT`** is the I2S output and FFT calculations.

- **`wm8960`** is the control unit of the ReSpeaker 2-Mics.

Here we will introduce another useful feature, the **Mixer**. This allows you to combine max **four** audio channels into one. This is used as performing FFT to combined channels (left and right) is more accurate instead of single channel.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio-spc-gui.png"/></div>

#### Example Code

Please check [here](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Play-Record/#audio-spectrum-visualizer).

### Recording and Playing at Real-Time

This time let's design a system to record and play at real-time!

- **`INPUT`** is the recording from the mic: **Input I2S** -> **RecordQueue**

- **`OUTPUT`** is the I2S output. **PlayQueue** -> **Output I2S**

- **`wm8960`** is the control unit of the ReSpeaker 2-Mics.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play-realtime.png"/></div>

#### Example Code

Please check [here](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Play-Record/#record-and-play-at-real-time).
